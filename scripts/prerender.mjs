// Build-time prerender: turns the client-only React app into one real HTML file per page, so search
// engines and AI crawlers (which often don't run JavaScript) see each page's own title, canonical,
// schema and text. Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx`.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const serverDir = join(root, 'dist-server');
const SITE_URL = 'https://nexus-aurora.com';

const template = await readFile(join(distDir, 'index.html'), 'utf8');
if (!template.includes('<!--seo-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--seo-head--> or <!--app-html--> marker');
}

const { render, routePaths } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href);

const escapeText = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const toHtml = ({ html, title, headTags }) =>
  template
    // Function replacers, so `$` sequences in the content (e.g. "priceRange": "$$") are kept literally.
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeText(title)}</title>`)
    .replace('<!--seo-head-->', () => headTags)
    .replace('<!--app-html-->', () => html);

const indexable = [];

for (const path of routePaths) {
  const page = render(path);
  // Flat `<page>.html` files: Netlify (and `vite preview`) serve them at `/<page>` with no trailing-slash
  // redirect, which matches the canonical URLs.
  const outFile = path === '/' ? join(distDir, 'index.html') : join(distDir, `${path.slice(1)}.html`);
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, toHtml(page));
  if (!page.noindex) indexable.push(path);
  console.log(`prerendered ${path}${page.noindex ? ' (noindex)' : ''}`);
}

// Any unknown URL is served this file with a real 404 status (see public/_redirects).
await writeFile(join(distDir, '404.html'), toHtml(render('/404')));
console.log('prerendered /404');

const today = new Date().toISOString().slice(0, 10);
const priority = (path) => {
  if (path === '/') return '1.0';
  if (['/services', '/managed-services', '/nexusbot'].includes(path)) return '0.9';
  if (['/privacy-policy', '/terms-of-service'].includes(path)) return '0.3';
  if (['/about', '/contact', '/web-development-process'].includes(path)) return '0.7';
  return '0.8';
};
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path === '/' ? '/' : path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority(path)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
await writeFile(join(distDir, 'sitemap.xml'), sitemap);
console.log(`sitemap.xml: ${indexable.length} URLs`);

await rm(serverDir, { recursive: true, force: true });
