import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

import { STATIC_PAGE_PATHS } from '../src/routing/page-paths';

const clientDirectory = '.react-router/build/client';
for (const path of STATIC_PAGE_PATHS) {
  await readFile(join(clientDirectory, path, 'index.html'));
}
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp(clientDirectory, 'dist', { recursive: true });
await rm('dist/__spa-fallback.html', { force: true });
console.log('Packaged prerendered pages and client assets in dist.');
