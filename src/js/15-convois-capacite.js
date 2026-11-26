  // v1.50 : page Convois — titre en bandeau + panneau « Capacité de convoi »
  // capacité par ouvrière = 10 × (1 + 0,05 × bonus), formule et bonus lus dans le script du jeu (maj_input_convoi)
  function convoyInfo() {
    const h = [...document.querySelectorAll('#centre table.simulateur h2')].find(x => /^convois$/i.test(x.textContent.trim())); if (!h) return;
    h.classList.add('fz-band');
    const t = h.closest('table');
    const num = (id) => { const e = document.getElementById(id); return e ? Math.floor(parseFloat(e.textContent)) || 0 : 0; };
    let bonus = 0; for (const sc of document.scripts) { const m = sc.textContent.match(/function\s+maj_input_convoi[\s\S]*?var\s+bonus\s*=\s*(\d+(?:\.\d+)?)/); if (m) { bonus = parseFloat(m[1]); break; } }
    const cap = 10 * (1 + 0.05 * bonus);
    const total = num('nb_ouvrieres'), tdc = num('quantite_tdc');
    const dispo = Math.max(0, total - Math.min(total, tdc));
    const f = (v) => Math.floor(v).toLocaleString('fr-FR');
    const icon = (src) => { const i = document.querySelector(`#centre form img[src*="${src}"]`); return i ? `<img src="${i.getAttribute('src')}" alt="">` : ''; };
    let box = document.querySelector('#centre .fz-convoi-info');
    if (!box) {
      box = document.createElement('table'); box.className = 'simulateur fz-convoi-info';
      t.after(box);
      // v1.52 : clic sur un montant livrable → remplit le champ Nourriture ou Matériaux déjà utilisé (sinon le dernier sélectionné, sinon Matériaux)
      // v1.53 : le champ ciblé est celui déjà rempli (valeur affichée ou valeur cachée du jeu) ; l'autre champ est vidé, valeur cachée comprise
      const fN = document.getElementById('input_nbNourriture'), fM = document.getElementById('input_nbMateriaux');
      const hN = document.getElementById('nbNourriture'), hM = document.getElementById('nbMateriaux');
      let last = null;
      [fN, fM].forEach(x => x && x.addEventListener('focus', () => { last = x; }));
      box.addEventListener('click', (e) => {
        const a = e.target.closest('.fz-ci-fill'); if (!a) return; e.preventDefault();
        const n = (x) => x ? parseInt(String(x.value).replace(/[^\d]/g, ''), 10) || 0 : 0;
        const shown = (x) => n(x) > 0;
        const has = (x, h) => shown(x) || n(h) > 0;
        let target;
        if (shown(fN) !== shown(fM)) target = shown(fN) ? fN : fM;          // un seul champ visible rempli
        else if (has(fN, hN) !== has(fM, hM)) target = has(fN, hN) ? fN : fM; // sinon d'après les valeurs cachées
        else target = last || fM;                                            // ambigu : dernier champ utilisé, sinon Matériaux
        if (!target) return;
        const other = target === fN ? fM : fN, otherH = target === fN ? hM : hN;
        const stock = num(target === fN ? 'nb_nourriture' : 'nb_materiaux');
        const v = Math.min(parseInt(a.dataset.v, 10) || 0, stock);
        const $ = window.jQuery;
        if (other) { other.value = ''; if (otherH) otherH.value = '0'; if ($) $(other).trigger('keyup').trigger('change'); }
        target.value = String(v); // chiffres bruts : le jeu formate lui-même
        if ($) $(target).trigger('keyup').trigger('change'); else target.dispatchEvent(new Event('change', { bubbles: true }));
        target.focus(); last = target;
        a.classList.add('fz-ci-done'); setTimeout(() => a.classList.remove('fz-ci-done'), 900);
      });
    }
    const html = `<tbody><tr><td colspan="2"><h3 class="fz-band">Capacité de convoi</h3></td></tr>
      <tr><th>${icon('icone_ouvriere')}Ouvrières disponibles <small>(total − terrain de chasse)</small></th><td>${f(dispo)}</td></tr>
      <tr><th>${icon('icone_pomme')}${icon('icone_bois')}Livrable sans découvrir le TdC</th><td><a href="#" class="fz-ci-fill" data-v="${Math.floor(dispo * cap)}" title="Remplir le convoi avec ce montant">${f(dispo * cap)}</a></td></tr>
      <tr><th>${icon('icone_pomme')}${icon('icone_bois')}Livrable avec 100 % des ouvrières</th><td><a href="#" class="fz-ci-fill" data-v="${Math.floor(total * cap)}" title="Remplir le convoi avec ce montant">${f(total * cap)}</a></td></tr>
      <tr class="fz-ci-note"><td colspan="2">${f(total)} ouvrières au total · ${f(Math.min(total, tdc))} sur le terrain de chasse · ${cap.toLocaleString('fr-FR')} ressources par ouvrière (Étable à pucerons niv. ${bonus})</td></tr>
      <tr class="fz-ci-simhead"><td colspan="2"><span>Simulation · Étable à pucerons</span>
        <span class="fz-ci-ctl"><button type="button" data-d="-1">−</button><input type="number" min="0" max="100" class="fz-ci-lvl"><button type="button" data-d="1">+</button></span></td></tr>
      <tr class="fz-ci-sim"><td colspan="2"></td></tr></tbody>`;
    if (box.dataset.k !== html) {
      const keep = box.querySelector('.fz-ci-lvl'); const lvl = keep ? keep.value : String(bonus + 1);
      box.innerHTML = html; box.dataset.k = html;
      const inp = box.querySelector('.fz-ci-lvl'); inp.value = lvl;
      const render = () => {
        const L = Math.max(0, Math.min(100, parseInt(inp.value, 10) || 0)), c2 = 10 * (1 + 0.05 * L);
        const d = (a, b) => { const g = b - a; return `<em class="${g > 0 ? 'up' : g < 0 ? 'down' : ''}">${g > 0 ? '+' : g < 0 ? '−' : '±'}${f(Math.abs(g))}</em>`; };
        box.querySelector('.fz-ci-sim > td').innerHTML = `<table class="fz-ci-simt"><tr><th></th><th>Actuel (niv. ${bonus})</th><th>Simulé (niv. ${L})</th><th>Gain</th></tr>
          <tr><td>Par ouvrière</td><td>${cap.toLocaleString('fr-FR')}</td><td>${c2.toLocaleString('fr-FR')}</td><td><em class="${c2 > cap ? 'up' : c2 < cap ? 'down' : ''}">${c2 >= cap ? '+' : '−'}${Math.abs(c2 - cap).toLocaleString('fr-FR', { maximumFractionDigits: 2 })}</em></td></tr>
          <tr><td>Sans découvrir le TdC</td><td>${f(dispo * cap)}</td><td>${f(dispo * c2)}</td><td>${d(dispo * cap, dispo * c2)}</td></tr>
          <tr><td>Avec 100 % des ouvrières</td><td>${f(total * cap)}</td><td>${f(total * c2)}</td><td>${d(total * cap, total * c2)}</td></tr></table>`;
      };
      inp.addEventListener('input', render);
      box.querySelectorAll('.fz-ci-ctl button').forEach(b => b.addEventListener('click', () => { inp.value = Math.max(0, Math.min(100, (parseInt(inp.value, 10) || 0) + +b.dataset.d)); render(); }));
      render();
    }
    box.style.width = t.getBoundingClientRect().width + 'px'; box.style.boxSizing = 'border-box';
  }
