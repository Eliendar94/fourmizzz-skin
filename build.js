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
// v1.62 : le script livré est allégé (commentaires, indentation et espaces inutiles retirés du JS et du CSS) ;
//         les sources restent commentées. `--brut` construit sans allègement (pour déboguer).
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

// v1.62 : CSS allégé — commentaires retirés, blancs réduits. Les chaînes ("…", '…') et url(…) sont recopiées telles quelles.
// On ne retire les espaces qu'autour de { } ; , > (jamais autour de : + - ~ * qui peuvent compter : « a :hover », calc()).
function minCss(css) {
  let out = '', i = 0;
  const n = css.length;
  while (i < n) {
    const c = css[i];
    if (c === '/' && css[i + 1] === '*') { const e = css.indexOf('*/', i + 2); if (e < 0) throw new Error('commentaire CSS non fermé'); i = e + 2; out += ' '; continue; }
    if (c === '"' || c === "'") { let j = i + 1; while (j < n && css[j] !== c) j += css[j] === '\\' ? 2 : 1; out += css.slice(i, j + 1); i = j + 1; continue; }
    if (/url\($/i.test(out.slice(-4)) && c !== '"' && c !== "'") { const e = css.indexOf(')', i); out += css.slice(i, e + 1); i = e + 1; continue; }
    if (/\s/.test(c)) { out += ' '; while (i < n && /\s/.test(css[i])) i++; continue; }
    out += c; i++;
  }
  // blancs : un seul espace, aucun autour des séparateurs sûrs (hors chaînes : on découpe sur les chaînes)
  return out.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|url\([^)]*\))/i).map((part, k) => k % 2 ? part
    : part.replace(/ {2,}/g, ' ').replace(/ ?([{};,>]) ?/g, '$1').replace(/;}/g, '}')).join('').trim();
}

// v1.62 : JS allégé — commentaires et indentation retirés, lignes vides supprimées. Les retours à la ligne sont gardés
// (aucun risque avec l'insertion automatique des « ; »). Chaînes, gabarits `…${…}…` et expressions régulières intacts.
function minJs(code) {
  let out = '', i = 0, prev = ''; // prev : dernier élément significatif (pour distinguer / division et /regex/)
  const n = code.length;
  const stack = []; // profondeur d'accolades des ${…} ouverts dans des gabarits
  let depth = 0;
  const regexOk = () => prev === '' || /[(,=:[!&|?{};+\-*%<>~^]$/.test(prev) || /^(return|typeof|case|do|else|in|of|new|delete|void|throw|instanceof|yield|await)$/.test(prev);
  const template = () => { // i est juste après ` ou après la } d'un ${…}
    let j = i;
    while (j < n && code[j] !== '`') {
      if (code[j] === '\\') { j += 2; continue; }
      if (code[j] === '$' && code[j + 1] === '{') { out += code.slice(i, j + 2); i = j + 2; stack.push(depth); depth = 0; prev = '{'; return; }
      j++;
    }
    out += code.slice(i, j + 1); i = j + 1; prev = '`';
  };
  while (i < n) {
    const c = code[i];
    if (c === '/' && code[i + 1] === '/') { while (i < n && code[i] !== '\n') i++; continue; }
    if (c === '/' && code[i + 1] === '*') { const e = code.indexOf('*/', i + 2); i = e + 2; out += ' '; continue; }
    if (c === '"' || c === "'") { let j = i + 1; while (j < n && code[j] !== c) j += code[j] === '\\' ? 2 : 1; out += code.slice(i, j + 1); i = j + 1; prev = c; continue; }
    if (c === '`') { out += c; i++; template(); continue; }
    if (c === '/' && regexOk()) {
      let j = i + 1, cls = false;
      while (j < n && (cls || code[j] !== '/')) { if (code[j] === '\\') j++; else if (code[j] === '[') cls = true; else if (code[j] === ']') cls = false; j++; }
      j++; while (j < n && /[a-z]/i.test(code[j])) j++;
      out += code.slice(i, j); i = j; prev = 'regex'; continue;
    }
    if (c === '{') depth++;
    if (c === '}') { if (!depth && stack.length) { out += c; i++; depth = stack.pop(); template(); continue; } depth--; }
    if (c === '\n' || c === ' ' || c === '\t') {
      let j = i; while (j < n && /[ \t]/.test(code[j])) j++;
      if (code[j] === '\n' || c === '\n') { // fin de ligne : blancs de fin, lignes vides et indentation de la suivante retirés
        out = out.replace(/[ \t]+$/, '');
        if (out && !out.endsWith('\n')) out += '\n';
        while (j < n && /\s/.test(code[j])) j++;
      } else out += ' ';
      i = j; continue;
    }
    if (/[A-Za-z0-9_$]/.test(c)) { let j = i; while (j < n && /[A-Za-z0-9_$.]/.test(code[j])) j++; prev = code.slice(i, j); out += prev; i = j; continue; }
    out += c; prev = c; i++;
  }
  return out.replace(/[ \t]+$/gm, '').replace(/^\n+|\n+$/g, '');
}

function cssLiteral(files, from, brut) {
  const body = files.map((f) => {
    const p = path.join(SRC, 'css', f);
    if (!fs.existsSync(p)) throw new Error(`${from} : fichier CSS introuvable « ${f} »`);
    return brut ? readText(p) : minCss(readText(p));
  }).join(brut ? '\n' : '');
  // Rien dans le CSS ne doit casser le littéral JavaScript.
  return '`' + body.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
}

const resourceName = (rel) => rel.replace(/\.[^.]+$/, '').replace(/[^A-Za-z0-9]+/g, '-');

function build({ resources = null, brut = false } = {}) {
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
    const src = readText(path.join(jsDir, f));
    return (brut ? src : minJs(src))
      .replace(/__CSS__\(([^)]*)\)/g, (_, args) => cssLiteral([...args.matchAll(/'([^']+)'/g)].map((m) => m[1]), from, brut))
      .replace(/__ASSET__\('([^']+)'\)/g, (_, rel) => asset(rel, from));
  });

  let header = readText(path.join(SRC, 'entete.js'));
  if (resources) {
    const base = resources.endsWith('/') ? resources : resources + '/';
    const lines = [...used].map(([rel, name]) => {
      const v = crypto.createHash('sha1').update(fs.readFileSync(path.join(ASSETS, rel))).digest('hex').slice(0, 8);
      return `// @resource     ${name} ${base}${rel}?v=${v}`;
    });
    // Mises à jour automatiques : le script léger est publié à côté des images, dans dist/ du même dépôt.
    if (/\/assets\/$/.test(base)) {
      const self = base.replace(/assets\/$/, 'dist/fourmizzz-skin.leger.user.js');
      lines.push(`// @downloadURL  ${self}`, `// @updateURL    ${self}`);
    }
    header = header
      .replace(/(\/\/ @grant[^\n]*\n)(?!\/\/ @grant)/, `$1// @grant        GM_getResourceURL\n`)
      .replace('// ==/UserScript==', lines.join('\n') + '\n// ==/UserScript==');
  }
  return brut ? `${header}\n\n(function () {\n  'use strict';\n\n${fragments.join('\n')}\n})();\n`
    : `${header}\n\n(function () {\n'use strict';\n${fragments.join('\n')}\n})();\n`;
}

module.exports = { build, minCss, minJs };

if (require.main === module) {
  const args = process.argv.slice(2);
  const i = args.indexOf('--resources');
  const resources = i >= 0 ? args[i + 1] : null;
  const brut = args.includes('--brut');
  if (i >= 0 && !/^https:\/\//.test(resources || '')) { console.error('Usage : node build.js --resources https://…/assets/'); process.exit(1); }
  const out = path.join(ROOT, 'dist', resources ? 'fourmizzz-skin.leger.user.js' : 'fourmizzz-skin.user.js');
  const code = build({ resources, brut });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, code);
  console.log(`${path.relative(ROOT, out)} : ${(Buffer.byteLength(code) / 1024).toFixed(0)} Ko`);
}
