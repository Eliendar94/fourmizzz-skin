#!/usr/bin/env node
// Vérifications avant livraison :
//   1. construction des deux variantes (images embarquées / @resource) ;
//   2. syntaxe JavaScript des scripts construits ;
//   3. aucune image base64 dans src/ ;
//   4. garde-fou : aucune action de jeu déclenchée automatiquement ;
//   5. (option) comparaison octet par octet avec une version de référence : node tools/verifier.js --ref <fichier.user.js>
//   6. (option, si Playwright est installé) rendu identique sur les pages de test de tools/fixtures/ :
//      node tools/verifier.js --ref <fichier.user.js> --rendu
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { build } = require('../build.js');

const ROOT = path.join(__dirname, '..');
const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const refPath = opt('--ref');
let fail = 0;
const ok = (m) => console.log('  ✓ ' + m);
const ko = (m) => { console.log('  ✗ ' + m); fail++; };

console.log('1. Construction');
const embed = build();
const leger = build({ resources: 'https://exemple.invalid/assets/' });
ok(`images embarquées : ${(Buffer.byteLength(embed) / 1024).toFixed(0)} Ko, @resource : ${(Buffer.byteLength(leger) / 1024).toFixed(0)} Ko`);

console.log('2. Syntaxe');
for (const [n, code] of [['embarqué', embed], ['@resource', leger]]) {
  try { new vm.Script(code, { filename: n }); ok(n); } catch (e) { ko(`${n} : ${e.message}`); }
}

console.log('3. Pas de base64 dans src/');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const b64 = walk(path.join(ROOT, 'src')).filter((f) => /;base64,/.test(fs.readFileSync(f, 'utf8')));
b64.length ? b64.forEach((f) => ko('base64 trouvé : ' + path.relative(ROOT, f))) : ok('aucun');

console.log('4. Garde-fou « aucune action de jeu »');
const js = leger.split('\n');
const bad = [];
js.forEach((l, i) => {
  if (/\.submit\(|requestSubmit\(|method\s*:\s*['"](POST|PUT|DELETE)/i.test(l)) bad.push(`ligne ${i + 1} : envoi de formulaire / requête d'écriture`);
  if (/\.click\(\)/.test(l) && !/addEventListener\('click'/.test(l)) bad.push(`ligne ${i + 1} : .click() hors d'un clic du joueur`);
});
bad.length ? bad.forEach(ko) : ok('aucun envoi automatique (les .click() ne sont faits qu\'en réponse à un clic du joueur)');

if (refPath) {
  console.log('5. Comparaison avec ' + refPath);
  const ref = fs.readFileSync(refPath, 'utf8');
  if (ref === embed) ok('identique octet pour octet');
  else {
    let i = 0; while (ref[i] === embed[i]) i++;
    const line = ref.slice(0, i).split('\n').length;
    ko(`différence à partir de la ligne ${line} (taille réf. ${ref.length}, construit ${embed.length})`);
  }
}

(async () => {
  if (args.includes('--rendu')) {
    console.log('6. Rendu sur les pages de test');
    let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ko('Playwright non disponible'); }
    if (chromium) {
      const assets = Object.fromEntries(walk(path.join(ROOT, 'assets')).map((f) => {
        const rel = path.relative(path.join(ROOT, 'assets'), f).split(path.sep).join('/');
        const mime = f.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
        return [rel.replace(/\.[^.]+$/, '').replace(/[^A-Za-z0-9]+/g, '-'), `data:${mime};base64,${fs.readFileSync(f).toString('base64')}`];
      }));
      const variants = [['embarqué', embed], ['@resource', leger]];
      if (refPath) variants.unshift(['référence', fs.readFileSync(refPath, 'utf8')]);
      const browser = await chromium.launch();
      const fx = path.join(__dirname, 'fixtures');
      for (const page of fs.readdirSync(fx).filter((f) => f.endsWith('.html'))) {
        const url = 'https://s1.fourmizzz.fr/' + page.replace(/\.html$/, '');
        const shots = [];
        for (const [name, code] of variants) {
          const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });
          await ctx.route('**/*', (r) => r.request().url() === url ? r.fulfill({ contentType: 'text/html', body: fs.readFileSync(path.join(fx, page)) }) : r.abort());
          await ctx.addInitScript(({ assets }) => {
            window.GM_getValue = (k, d) => d; window.GM_setValue = () => {};
            window.GM_getResourceURL = (n) => assets[n];
            window.GM_info = { script: { version: 'test' } };
          }, { assets });
          // comme un gestionnaire de userscripts en « document-start » : dès que <html> existe
          await ctx.addInitScript({ content: `(() => { const run = () => { ${code}\n}; if (document.documentElement) run(); else new MutationObserver((m, o) => { if (document.documentElement) { o.disconnect(); run(); } }).observe(document, { childList: true }); })();` });
          const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
          await p.goto(url); await p.waitForTimeout(2500);
          if (process.env.CAPTURES) { fs.mkdirSync(process.env.CAPTURES, { recursive: true }); await p.screenshot({ fullPage: true, path: path.join(process.env.CAPTURES, `${page}.${name.replace(/\W/g, '')}.png`) }); }
          if (errs.length) ko(`${page} (${name}) : erreur JS « ${errs[0]} »`);
          shots.push([name, await p.evaluate(() => document.documentElement.outerHTML), await p.screenshot({ fullPage: true })]);
          await ctx.close();
        }
        const [n0, h0, s0] = shots[0];
        const diff = shots.slice(1).filter(([, h, s]) => h !== h0 || !s.equals(s0)).map(([n]) => n);
        const touched = /fz-/.test(h0);
        if (!touched) ko(`${page} : le skin ne s'est pas appliqué`);
        else diff.length ? ko(`${page} : rendu différent (${diff.join(', ')} ≠ ${n0})`) : ok(`${page} : DOM et capture identiques (${shots.map(([n]) => n).join(' = ')})`);
      }
      await browser.close();
    }
  }
  console.log(fail ? `\n${fail} problème(s).` : '\nTout est bon.');
  process.exit(fail ? 1 : 0);
})();
