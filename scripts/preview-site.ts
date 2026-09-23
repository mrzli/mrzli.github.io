import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    host: { type: 'string', default: '127.0.0.1' },
    port: { type: 'string', default: '4173' },
  },
});
const root = resolve('dist');
const contentTypes: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.data': 'text/x-script',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.md': 'text/plain; charset=utf-8',
  '.tex': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
};

await stat(resolve(root, 'index.html'));
createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const url = new URL(request.url ?? '/', 'http://localhost');
    let file = resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if (file !== root && !file.startsWith(`${root}${sep}`)) {
      response.writeHead(400).end();
      return;
    }
    const info = await stat(file).catch(() => undefined);
    if (info?.isDirectory()) {
      if (!url.pathname.endsWith('/')) {
        response.writeHead(301, { Location: `${url.pathname}/${url.search}` }).end();
        return;
      }
      file = resolve(file, 'index.html');
    }
    const body = await readFile(file).catch(() => undefined);
    const status = body ? 200 : 404;
    const content = body ?? (await readFile(resolve(root, '404.html')));
    response.writeHead(status, {
      'Content-Type': body
        ? (contentTypes[extname(file)] ?? 'application/octet-stream')
        : contentTypes['.html'],
      'Content-Length': content.byteLength,
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(400).end();
  }
}).listen(Number(values.port), values.host, () => {
  console.log(`Static preview: http://${values.host}:${values.port}`);
});
