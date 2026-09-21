import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { buildCv } from './build';
import { createCvDocument } from './document';
import { formatDate, renderCv } from './render';

verify();

function verify(): void {
  const root = mkdtempSync(join(tmpdir(), 'portfolio-cv-verification-'));
  const document = createCvDocument('concise', 2030);
  assert.equal(document.professionalYears, 22);
  assert.equal(document.contractingYears, 14);
  assert.equal(formatDate({ year: 2008, month: 2 }), 'February 2008');
  assert.throws(() => formatDate({ year: 2008, month: 13 }), /Invalid month/);
  assert.equal(renderCv(document), renderCv(document));
  const specialText = String.raw`C# & C++: 100% of $5_000 {value} ~ ^ \ path`;
  const tex = renderCv({ ...document, summary: [specialText] });
  const output = buildCv([{ variant: 'concise', tex }], { workDirectory: root });
  const extracted = execFileSync('pdftotext', [join(output, 'cv-goran-mrzljak-short.pdf'), '-'], {
    encoding: 'utf8',
  });
  assert.ok(extracted.includes('Goran Mržljak'));
  assert.ok(extracted.includes(specialText));
  assert.ok(extracted.includes('22 years of professional experience'));
  assert.ok(extracted.includes('14 years of contract work'));
  const concise = renderCv(document);
  const detailed = renderCv(createCvDocument('detailed', 2030));
  assert.ok(!concise.includes('load testing exposed race conditions'));
  assert.ok(detailed.includes('load testing exposed race conditions'));

  const standalone = join(root, 'standalone');
  mkdirSync(standalone);
  copyFileSync(
    join(output, 'cv-goran-mrzljak-short.tex'),
    join(standalone, 'cv-goran-mrzljak-short.tex'),
  );
  execFileSync(
    'latexmk',
    [
      '-norc',
      '-pdf',
      '-interaction=nonstopmode',
      '-halt-on-error',
      '-no-shell-escape',
      'cv-goran-mrzljak-short.tex',
    ],
    { cwd: standalone, stdio: 'pipe' },
  );
  assert.ok(
    readFileSync(join(standalone, 'cv-goran-mrzljak-short.pdf'))
      .subarray(0, 5)
      .equals(Buffer.from('%PDF-')),
  );

  const destination = join(root, 'public');
  mkdirSync(destination);
  writeFileSync(join(destination, 'cv-goran-mrzljak-short.pdf'), 'previous PDF');
  writeFileSync(join(destination, 'cv-goran-mrzljak-short.tex'), 'previous TeX');
  const invalid = String.raw`\documentclass{article}\begin{document}\undefinedCommand\end{document}`;
  assert.throws(
    () =>
      buildCv(
        [
          { variant: 'concise', tex },
          { variant: 'detailed', tex: invalid },
        ],
        {
          workDirectory: root,
          publishDirectory: destination,
        },
      ),
    /CV compilation failed/,
  );
  assert.equal(
    readFileSync(join(destination, 'cv-goran-mrzljak-short.pdf'), 'utf8'),
    'previous PDF',
  );
  assert.equal(
    readFileSync(join(destination, 'cv-goran-mrzljak-short.tex'), 'utf8'),
    'previous TeX',
  );
  assert.deepEqual(readdirSync(destination).sort(), [
    'cv-goran-mrzljak-short.pdf',
    'cv-goran-mrzljak-short.tex',
  ]);
  assert.throws(
    () =>
      buildCv([{ variant: 'concise', tex }], {
        workDirectory: root,
        publishDirectory: destination,
        texOnly: true,
      }),
    /require successful PDF compilation/,
  );

  buildCv([{ variant: 'concise', tex }], { workDirectory: root, publishDirectory: destination });
  assert.deepEqual(readdirSync(destination).sort(), [
    'cv-goran-mrzljak-short.pdf',
    'cv-goran-mrzljak-short.tex',
  ]);
  assert.equal(readFileSync(join(destination, 'cv-goran-mrzljak-short.tex'), 'utf8'), tex);
  assert.ok(
    readFileSync(join(destination, 'cv-goran-mrzljak-short.pdf'))
      .subarray(0, 5)
      .equals(Buffer.from('%PDF-')),
  );
  const textOnly = buildCv([{ variant: 'detailed', tex: detailed }], {
    workDirectory: root,
    texOnly: true,
  });
  assert.deepEqual(readdirSync(textOnly), ['cv-goran-mrzljak-detailed.tex']);
  console.log(
    `CV verification passed: Unicode, escaping, years, selections, standalone TeX, failure preservation, publication, and TeX-only output. Artifacts: ${root}`,
  );
}
