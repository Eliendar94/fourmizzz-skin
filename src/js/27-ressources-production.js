  // v1.05 : « Chaque jour, vous récoltez … / votre armée consomme … » → tableau Production / Pertes par jour.
  // Les valeurs sont relues en continu : le jeu les recalcule quand on change la répartition des ouvrières.
  function productionTable() {
    const nN = document.getElementById('nbNourriture'), nM = document.getElementById('nbMateriaux');
    const p = nN && nN.closest('p'); if (!p) return;
    const num = (el) => el ? parseInt(el.textContent.replace(/[^\d]/g, ''), 10) || 0 : 0;
    const strongAfter = (re) => { // le <strong> qui suit un texte donné dans le paragraphe
      let hit = false;
      for (const n of p.childNodes) { if (n.nodeType === 3 && re.test(n.textContent)) hit = true; else if (hit && n.nodeType === 1 && n.tagName === 'STRONG') return n; }
      return null;
    };
    let champi = null, last = null;   // le <strong> placé juste avant « avec votre champignonnière »
    for (const n of p.childNodes) { if (n.nodeType === 1 && n.tagName === 'STRONG') last = n; else if (n.nodeType === 3 && /champignonni/i.test(n.textContent) && last && last !== nN && last !== nM) { champi = last; break; } }
    const imgs = [...p.querySelectorAll('img')], srcF = imgs[0] ? imgs[0].getAttribute('src') : '', srcM = imgs[1] ? imgs[1].getAttribute('src') : '';
    const conso = strongAfter(/consomme/i);
    const fmt = (v, sign) => (v === null ? '—' : (sign && v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toLocaleString('fr-FR'));
    const cls = (v) => v > 0 ? 'fz-pos' : v < 0 ? 'fz-neg' : 'fz-nul';
    let tbl = p.previousElementSibling && p.previousElementSibling.classList.contains('fz-prod') ? p.previousElementSibling : null;
    if (!tbl) {
      tbl = document.createElement('table'); tbl.className = 'fz-prod';
      p.parentNode.insertBefore(tbl, p); p.classList.add('fz-hidden-p');
    }
    const food = num(nN), mat = num(nM), ch = champi ? num(champi) : null, co = conso ? num(conso) : null;
    const soldeF = food + (ch || 0) - (co || 0), soldeM = mat;
    const row = (lbl, f, m, extra = '') => `<tr class="${extra}"><th>${lbl}</th><td class="${cls(f)}">${fmt(f, true)}</td><td class="${cls(m)}">${fmt(m, true)}</td></tr>`;
    const html = `<thead><tr><th>Par jour</th><th>${srcF ? `<img src="${srcF}" alt="">` : ''}Nourriture</th><th>${srcM ? `<img src="${srcM}" alt="">` : ''}Matériaux</th></tr></thead><tbody>
      <tr class="fz-sec"><th colspan="3">Production</th></tr>
      ${row('Récolte du terrain', food, mat)}
      ${ch !== null ? row('Champignonnière', ch, null) : ''}
      <tr class="fz-sec"><th colspan="3">Pertes</th></tr>
      ${co !== null ? row('Consommation de l\'armée', -co, null) : row('Consommation de l\'armée', null, null)}
      ${row('Solde', soldeF, soldeM, 'fz-solde')}</tbody>`;
    if (tbl.dataset.k !== html) { tbl.innerHTML = html; tbl.dataset.k = html; }
  }
