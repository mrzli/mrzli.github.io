import { fileURLToPath } from 'node:url';

import { CV_VARIANTS, type CvVariant } from '../src/content/exports/types';
import { buildCv } from './cv/build';
import { createCvDocument } from './cv/document';
import { renderCv } from './cv/render';

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}

function main(): void {
  const args = process.argv.slice(2);
  const selection = args.find((argument) => !argument.startsWith('--')) ?? 'all';
  const valid = args.every((argument) =>
    ['all', ...CV_VARIANTS, '--publish', '--tex-only'].includes(argument),
  );
  if (!valid || args.filter((argument) => !argument.startsWith('--')).length > 1) {
    throw new Error('Usage: bun run build:cv [all|concise|detailed] [--tex-only|--publish]');
  }
  const variants: readonly CvVariant[] =
    selection === 'all' ? CV_VARIANTS : [selection as CvVariant];
  const directory = buildCv(
    variants.map((variant) => ({ variant, tex: renderCv(createCvDocument(variant)) })),
    {
      workDirectory: fileURLToPath(new URL('../tmp/cv/', import.meta.url)),
      publishDirectory: args.includes('--publish')
        ? fileURLToPath(new URL('../public/data/', import.meta.url))
        : undefined,
      texOnly: args.includes('--tex-only'),
    },
  );
  console.log(`Generated CV files: ${directory}`);
  if (args.includes('--publish')) {
    console.log('Updated public/data with the generated TeX and PDFs.');
  }
}
