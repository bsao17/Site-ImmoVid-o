// Builds index.html from src/: compiles the JSX once (no Babel in the browser)
// and pre-renders the page so search engines get the full text without JS.
//   npm install   (once)
//   npm run build
import { readFileSync, writeFileSync, rmSync, cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { transformSync } from '@babel/core';
import React from 'react';
import { renderToString } from 'react-dom/server';

const root = fileURLToPath(new URL('..', import.meta.url));
const jsx = readFileSync(root + 'src/app.jsx', 'utf8');
const template = readFileSync(root + 'src/template.html', 'utf8');

const { code } = transformSync(jsx, {
  filename: 'app.jsx',
  babelrc: false,
  configFile: false,
  presets: [['@babel/preset-react', { runtime: 'classic' }]],
  compact: false,
  comments: false,
});

// Run the compiled code server-side to get <App />. The browser-only mount at
// the bottom of app.jsx is skipped because `window` is undefined here.
const ctx = vm.createContext({ React, console });
vm.runInContext(code, ctx);
if (typeof ctx.App !== 'function') throw new Error('App not found in src/app.jsx');
const html = renderToString(React.createElement(ctx.App));

const out = template
  .replace('<!--APP_HTML-->', () => html)
  .replace('<!--APP_JS-->', () => code.replace(/<\/script/gi, '<\\/script'));
writeFileSync(root + 'index.html', out);
console.log(`index.html: ${(out.length / 1024).toFixed(0)} KB, ${html.length} chars pre-rendered`);

// Local pages (src/villes.jsx): static HTML, same <head> and styles as the
// home page, with their own SEO tags. They reuse the components above.
const villes = transformSync(readFileSync(root + 'src/villes.jsx', 'utf8'), {
  filename: 'villes.jsx', babelrc: false, configFile: false,
  presets: [['@babel/preset-react', { runtime: 'classic' }]], comments: false,
}).code;
// Top-level `const` stays out of the context object: expose the list explicitly.
vm.runInContext(`${villes}\nglobalThis.CITY_PAGES = CITY_PAGES;`, ctx);
const SITE = 'https://www.acn-studio.fr';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const head = template.slice(0, template.indexOf('</head>') + '</head>'.length);
for (const page of ctx.CITY_PAGES) {
  const url = `${SITE}/${page.slug}/`;
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: page.h1, serviceType: 'Photographie et vidéo immobilière', url,
        provider: { '@id': `${SITE}/#business` }, areaServed: { '@type': 'City', name: page.city },
        offers: { '@type': 'Offer', price: '149', priceCurrency: 'EUR' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: page.city, item: url } ] },
    ],
  };
  const pageHead = head
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(page.description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(page.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(page.description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(page.title)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(page.description)}`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      () => `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n</script>`);
  const body = renderToString(React.createElement(ctx.CityPage, { page }));
  mkdirSync(root + page.slug, { recursive: true });
  writeFileSync(root + page.slug + '/index.html', `${pageHead}\n<body>\n<div id="root">${body}</div>\n</body>\n</html>\n`);
  console.log(`${page.slug}/index.html: ${body.length} chars`);
}

// Vercel publishes public/: copy only what belongs on the site.
const PUBLISHED = ['index.html', 'robots.txt', 'sitemap.xml', 'favicon.svg',
  'articles', 'cgv', 'mentions-legales', 'politique-confidentialite',
  ...ctx.CITY_PAGES.map((p) => p.slug)];
rmSync(root + 'public', { recursive: true, force: true });
for (const f of PUBLISHED) cpSync(root + f, root + 'public/' + f, { recursive: true });
console.log(`public/: ${PUBLISHED.length} entries`);
