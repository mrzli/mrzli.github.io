import { fileURLToPath } from 'node:url';

import { createLinkedInSections } from '../src/content/exports/linkedin';
import { exportLinkedIn } from './linkedin/export';

try {
  if (process.argv.length > 2) {
    throw new Error('Usage: bun run build:linkedin');
  }
  const destination = fileURLToPath(new URL('../public/data/linkedin.md', import.meta.url));
  exportLinkedIn(
    createLinkedInSections(),
    destination,
    fileURLToPath(new URL('../tmp/linkedin/', import.meta.url)),
  );
  console.log(`Generated ${destination}. Copy the field text into LinkedIn manually.`);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
