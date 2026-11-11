/**
 * Converts the official table of city and municipality income tax rates into the JSON data file
 * the calculators read.
 *
 * Usage: bun src/app/pages/calculators/tools/update-city-tax-rates.ts <year> <xlsx-url>
 *
 * The table is published by Porezna uprava and on data.gov.hr under the Croatian open license
 * (https://data.gov.hr/id/licence/otvorena-dozvola-rh). Find the dataset "Usporedba poreznih stopa
 * prema odlukama jedinica lokalne samouprave u Republici Hrvatskoj" on data.gov.hr and pass the
 * download URL of the year's xlsx file. Requires the `unzip` command.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { CityTaxRateData, CityTaxRate } from '../model/city-tax-rates';

/**
 * Counties that tell apart local units sharing a name, keyed by unit code. Each assignment comes
 * from the unit's tax rate decision in Narodne novine or its own gazette, or by elimination.
 */
const DISAMBIGUATING_COUNTIES: Readonly<Record<number, string>> = {
  3140: 'Split-Dalmatia',
  5355: 'Vukovar-Srijem',
  5746: 'Zadar',
  5835: 'Vukovar-Srijem',
  4324: 'Istria',
  4367: 'Zagreb County',
};

const SMALL_WORDS: ReadonlySet<string> = new Set(['i', 'na', 'u', 'pri', 'kod', 'pod', 'nad']);

const COLUMN_HEADERS = {
  code: 'Šifra grada/općine',
  name: 'Ime grada/općine',
  lowerRate: 'Niža stopa',
  higherRate: 'Viša stopa',
} as const;

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}

async function main(): Promise<void> {
  const [yearArgument, url] = process.argv.slice(2);
  const year = Number(yearArgument);
  if (!Number.isInteger(year) || url === undefined) {
    throw new Error('Usage: bun update-city-tax-rates.ts <year> <xlsx-url>');
  }

  const rows = readSheet(await download(url));
  const data: CityTaxRateData = { year, source: url, cities: parseCities(rows) };
  const outputPath = fileURLToPath(new URL(`../data/city-tax-rates-${year}.json`, import.meta.url));
  writeFileSync(outputPath, `${JSON.stringify(data, undefined, 2)}\n`);
  console.log(`Wrote ${data.cities.length} entries to ${outputPath}`);
}

async function download(url: string): Promise<Uint8Array> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Download failed: ${response.status} ${response.statusText}`);
  }
  return new Uint8Array(await response.arrayBuffer());
}

function readSheet(workbook: Uint8Array): readonly ReadonlyMap<string, string>[] {
  const directory = mkdtempSync(join(tmpdir(), 'city-tax-rates-'));
  try {
    const workbookPath = join(directory, 'table.xlsx');
    writeFileSync(workbookPath, workbook);
    const readEntry = (entry: string): string =>
      execFileSync('unzip', ['-p', workbookPath, entry], { encoding: 'utf8' });
    const sharedStrings = parseSharedStrings(readEntry('xl/sharedStrings.xml'));
    return parseRows(readEntry('xl/worksheets/sheet1.xml'), sharedStrings);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

function parseSharedStrings(xml: string): readonly string[] {
  return [...xml.matchAll(/<si>(.*?)<\/si>/gs)].map((item) =>
    [...item[1]!.matchAll(/<t[^>]*>(.*?)<\/t>/gs)].map((text) => decodeXml(text[1]!)).join(''),
  );
}

/** Returns each row as a map from column letter to cell text. */
function parseRows(
  xml: string,
  sharedStrings: readonly string[],
): readonly ReadonlyMap<string, string>[] {
  return [...xml.matchAll(/<row[^>]*>(.*?)<\/row>/gs)].map(
    (row) =>
      new Map(
        [...row[1]!.matchAll(/<c r="([A-Z]+)\d+"([^>]*?)(?:\/>|>(.*?)<\/c>)/gs)].flatMap((cell) => {
          const [, column, attributes, content] = cell;
          const value = content?.match(/<v>(.*?)<\/v>/s)?.[1];
          if (value === undefined) {
            return [];
          }
          const text = attributes!.includes('t="s"')
            ? sharedStrings[Number(value)]!
            : decodeXml(value);
          return [[column!, text.trim()] as const];
        }),
      ),
  );
}

function parseCities(rows: readonly ReadonlyMap<string, string>[]): readonly CityTaxRate[] {
  const [header, ...dataRows] = rows;
  if (header === undefined) {
    throw new Error('The sheet is empty.');
  }
  const findColumn = (title: string): string => {
    const column = [...header].find(([, text]) => text.startsWith(title))?.[0];
    if (column === undefined) {
      throw new Error(`Missing column "${title}".`);
    }
    return column;
  };
  const columns = {
    code: findColumn(COLUMN_HEADERS.code),
    name: findColumn(COLUMN_HEADERS.name),
    lowerRate: findColumn(COLUMN_HEADERS.lowerRate),
    higherRate: findColumn(COLUMN_HEADERS.higherRate),
  };

  const cities = dataRows
    .filter((row) => /^\d+$/.test(row.get(columns.code) ?? ''))
    .map((row): CityTaxRate => {
      const code = Number(row.get(columns.code));
      const county = DISAMBIGUATING_COUNTIES[code];
      const name = toTitleCase(row.get(columns.name) ?? '');
      return {
        code,
        name: county === undefined ? name : `${name} (${county})`,
        lowerRate: parseRate(row.get(columns.lowerRate)),
        higherRate: parseRate(row.get(columns.higherRate)),
      };
    })
    .toSorted((first, second) => first.name.localeCompare(second.name, 'hr'));

  const duplicates = cities.filter(
    (city, index) => cities.findIndex((other) => other.name === city.name) !== index,
  );
  if (duplicates.length > 0) {
    const names = duplicates.map((city) => `${city.name} (${city.code})`).join(', ');
    throw new Error(`Add counties to DISAMBIGUATING_COUNTIES for: ${names}`);
  }
  return cities;
}

function parseRate(text: string | undefined): number {
  const rate = Number(text);
  if (text === undefined || !Number.isFinite(rate) || rate <= 0 || rate >= 1) {
    throw new Error(`Invalid rate "${text}".`);
  }
  // Spreadsheet values carry binary noise, such as 0.21500000000000002.
  return Math.round(rate * 10_000) / 10_000;
}

/** Converts an uppercase name such as "SVETI PETAR U ŠUMI" to "Sveti Petar u Šumi". */
function toTitleCase(name: string): string {
  return name
    .toLocaleLowerCase('hr')
    .split(' ')
    .map((word, index) =>
      index > 0 && SMALL_WORDS.has(word)
        ? word
        : word.replace(
            /(^|[-.])(\p{L})/gu,
            (_match, separator: string, letter: string) =>
              `${separator}${letter.toLocaleUpperCase('hr')}`,
          ),
    )
    .join(' ');
}

function decodeXml(text: string): string {
  return text
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&');
}
