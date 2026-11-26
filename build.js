#!/usr/bin/env node
// Construction de fourmizzz-skin.user.js à partir de src/ et assets/ (Node ≥ 18, aucune dépendance).
//
//   node build.js                       → dist/fourmizzz-skin.user.js        (images embarquées, autonome)
//   node build.js --resources <URL>     → dist/fourmizzz-skin.leger.user.js  (images en @resource, script léger)
//
// Assemblage :
//   src/entete.js                  bloc ==UserScript==
//   (function () { 'use strict';   enveloppe ajoutée ici
//   src/js/*.js                    fragments, dans l'ordre de leur numéro (01-, 02-, …)
//   })();
// Dans les fragments :
//   __CSS__('reine/file-ponte.css', …)  → littéral `…` contenant les fichiers de src/css/ mis bout à bout
//   __ASSET__('unites/naine.jpg')       → 'data:image/jpeg;base64,…'  ou  GM_getResourceURL('unites-naine')
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const ASSETS = path.join(ROOT, 'assets');
const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.png': 'image/png', '.gif': 'image/gif', '.svg': 'image/svg+xml' };

// Fichier texte : fins de ligne LF, et UN saut de ligne final retiré (les éditeurs en ajoutent un).
const readText = (f) => fs.readFileSync(f, 'utf8').replace(/^﻿/, '').replace(/\r\n?/g, '\n').replace(/\n$/, '');

function cssLiteral(files, from) {
  const body = files.map((f) => {
    const p = path.join(SRC, 'css', f);
    if (!fs.existsSync(p)) throw new Error(`${from} : fichier CSS introuvable « ${f} »`);
    return readText(p);
  }).join('\n');
  // Rien dans le CSS ne doit casser le littéral JavaScript.
  return '`' + body.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
}

const resourceName = (rel) => rel.replace(/\.[^.]+$/, '').replace(/[^A-Za-z0-9]+/g, '-');

function build({ resources = null } = {}) {
  const used = new Map(); // chemin d'asset → nom de ressource
  const asset = (rel, from) => {
    const p = path.join(ASSETS, rel);
    if (!fs.existsSync(p)) throw new Error(`${from} : image introuvable « assets/${rel} »`);
    const mime = MIME[path.extname(rel).toLowerCase()];
    if (!mime) throw new Error(`${from} : type d'image inconnu « ${rel} »`);
    if (!resources) return `'data:${mime};base64,${fs.readFileSync(p).toString('base64')}'`;
    used.set(rel, resourceName(rel));
    return `GM_getResourceURL('${resourceName(rel)}')`;
  };

  const jsDir = path.join(SRC, 'js');
  const fragments = fs.readdirSync(jsDir).filter((f) => f.endsWith('.js')).sort().map((f) => {
    const from = 'src/js/' + f;
    return readText(path.join(jsDir, f))
      .replace(/__CSS__\(([^)]*)\)/g, (_, args) => cssLiteral([...args.matchAll(/'([^']+)'/g)].map((m) => m[1]), from))
      .replace(/__ASSET__\('([^']+)'\)/g, (_, rel) => asset(rel, from));
  });

  let header = readText(path.join(SRC, 'entete.js'));
  if (resources) {
    const base = resources.endsWith('/') ? resources : resources + '/';
    const lines = [...used].map(([rel, name]) => {
      const v = crypto.createHash('sha1').update(fs.readFileSync(path.join(ASSETS, rel))).digest('hex').slice(0, 8);
      return `// @resource     ${name} ${base}${rel}?v=${v}`;
    });
    header = header
      .replace(/(\/\/ @grant[^\n]*\n)(?!\/\/ @grant)/, `$1// @grant        GM_getResourceURL\n`)
      .replace('// ==/UserScript==', lines.join('\n') + '\n// ==/UserScript==');
  }
  return `${header}\n\n(function () {\n  'use strict';\n\n${fragments.join('\n')}\n})();\n`;
}

module.exports = { build };

if (require.main === module) {
  const args = process.argv.slice(2);
  const i = args.indexOf('--resources');
  const resources = i >= 0 ? args[i + 1] : null;
  if (i >= 0 && !/^https:\/\//.test(resources || '')) { console.error('Usage : node build.js --resources https://…/assets/'); process.exit(1); }
  const out = path.join(ROOT, 'dist', resources ? 'fourmizzz-skin.leger.user.js' : 'fourmizzz-skin.user.js');
  const code = build({ resources });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, code);
  console.log(`${path.relative(ROOT, out)} : ${(Buffer.byteLength(code) / 1024).toFixed(0)} Ko`);
}
