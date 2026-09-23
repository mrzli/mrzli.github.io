import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { PROFILE } from '../src/content/profile';
import { INDEXABLE_PAGE_PATHS, STATIC_PAGE_PATHS } from '../src/routing/page-paths';

const clientDirectory = '.react-router/build/client';
for (const path of STATIC_PAGE_PATHS) {
  await readFile(join(clientDirectory, path, 'index.html'));
}
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp(clientDirectory, 'dist', { recursive: true });
await rm('dist/__spa-fallback.html', { force: true });
const sitemapEntries = INDEXABLE_PAGE_PATHS.map(
  (path) => `  <url><loc>${new URL(path, PROFILE.website).href}</loc></url>`,
).join('\n');
await writeFile(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
);
await writeFile(
  'dist/robots.txt',
  `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', PROFILE.website).href}\n`,
);
console.log('Packaged prerendered pages and client assets in dist.');
