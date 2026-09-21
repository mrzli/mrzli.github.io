import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import type { CvSource, CvBuildOptions } from '../../src/content/exports/types';

export function buildCv(sources: readonly CvSource[], options: CvBuildOptions): string {
  if (options.texOnly && options.publishDirectory) {
    throw new Error('Public exports require successful PDF compilation. Omit --tex-only.');
  }
  mkdirSync(options.workDirectory, { recursive: true });
  const directory = createBuildDirectory(options.workDirectory);
  const files: string[] = [];
  for (const source of sources) {
    const basename = `cv-goran-mrzljak-${source.variant === 'concise' ? 'short' : 'detailed'}`;
    const texName = `${basename}.tex`;
    writeFileSync(join(directory, texName), source.tex);
    files.push(texName);
    if (!options.texOnly) {
      compileCv(directory, texName);
      files.push(`${basename}.pdf`);
    }
  }
  if (options.publishDirectory) {
    publishFiles(directory, files, options.publishDirectory);
  }
  return directory;
}

function createBuildDirectory(parent: string): string {
  const base = join(parent, `build_${formatTimestamp(new Date())}`);
  for (let attempt = 0; ; attempt += 1) {
    const directory = attempt === 0 ? base : `${base}-${String(attempt).padStart(2, '0')}`;
    try {
      mkdirSync(directory);
      return directory;
    } catch (error) {
      if (!(error instanceof Error) || (error as NodeJS.ErrnoException).code !== 'EEXIST') {
        throw error;
      }
    }
  }
}

function formatTimestamp(date: Date): string {
  const day = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((part) => String(part).padStart(2, '0'))
    .join('');
  const time = [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map((part) => String(part).padStart(2, '0'))
    .join('');
  return `${day}-${time}`;
}

function compileCv(directory: string, filename: string): void {
  try {
    execFileSync(
      'latexmk',
      [
        '-norc',
        '-pdf',
        '-interaction=nonstopmode',
        '-halt-on-error',
        '-file-line-error',
        '-no-shell-escape',
        filename,
      ],
      { cwd: directory, stdio: 'pipe' },
    );
  } catch (error) {
    throw new Error(
      `CV compilation failed. Check ${directory} for the LaTeX log. Ensure latexmk and the documented LaTeX packages are installed.`,
      { cause: error },
    );
  }
  const pdf = readFileSync(join(directory, filename.replace(/\.tex$/, '.pdf')));
  if (pdf.subarray(0, 5).toString() !== '%PDF-') {
    throw new Error(`Invalid PDF output for ${filename}`);
  }
}

function publishFiles(directory: string, files: readonly string[], destination: string): void {
  mkdirSync(destination, { recursive: true });
  const staging = join(directory, 'publish');
  mkdirSync(staging);
  for (const filename of files) {
    copyFileSync(join(directory, filename), join(staging, filename));
  }
  for (const filename of files) {
    renameSync(join(staging, filename), join(destination, filename));
  }
}
