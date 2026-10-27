// Builds index.html from src/: compiles the JSX once (no Babel in the browser)
// and pre-renders the page so search engines get the full text without JS.
//   npm install   (once)
//   npm run build
import { readFileSync, writeFileSync } from 'node:fs';
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
