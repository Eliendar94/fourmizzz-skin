  // ---------- Page Membres (alliance) ----------
  function fixMembers() {
    const t = document.getElementById('tabMembresAlliance');
    if (!t) return;
    // Rôles : on rend leur couleur d'origine (le style général du skin l'écrasait)
    t.querySelectorAll('td.fmz-mem-role').forEach(td => {
      const c = td.style.color;
      if (c && td.style.getPropertyPriority('color') !== 'important') td.style.setProperty('color', c, 'important');
    });
    // Temps de trajet : « 🕒 8 h 10 min » → « 8h10m »
    t.querySelectorAll('tr').forEach(tr => {
      const td = tr.cells[10];
      if (!td || !/\d\s*(h|min|j)\b/.test(td.textContent)) return;
      const n = td.textContent.replace(/[^\d\sjhmins–-]/g, '').replace(/(\d+)\s*(j|h|min|s)\b/g, (m, v, u) => v + (u === 'min' ? 'm' : u)).replace(/\s+/g, '').trim();
      if (td.textContent !== n) { td.textContent = n; td.classList.add('fz-traj'); }
    });
    // TDC actuel encadré par ses icônes : bouclier « Fourmilières pouvant m'attaquer » à gauche,
    // mire « Attaquer cette fourmilière » à droite (leurs colonnes d'origine sont réduites à zéro)
    [...t.rows].forEach(r => {
      if (r.cells.length < 15) return;
      const tdc = r.cells[8];
      const atk = tdc.querySelector('a.fz-atk') || r.cells[9].querySelector(':scope > a');
      if (atk) { atk.classList.add('fz-atk'); if (tdc.lastChild !== atk) tdc.appendChild(atk); }
      r.cells[9].classList.add('fz-atk-src');
      const def = r.cells[5].querySelector(':scope > img');
      if (def && !tdc.querySelector('.fz-def')) { def.classList.add('fz-def'); tdc.insertBefore(def, tdc.firstChild); }
      r.cells[5].classList.add('fz-def-src');
      // valeur dans une case de largeur fixe : centrée, icônes alignées d'une ligne à l'autre
      if (!tdc.querySelector('.fz-tdcv')) {
        const tn = [...tdc.childNodes].find(n => n.nodeType === 3 && /\d/.test(n.textContent));
        if (tn) { const sp = document.createElement('span'); sp.className = 'fz-tdcv'; sp.textContent = tn.textContent.trim(); tdc.replaceChild(sp, tn); }
      }
    });
    // Couleur du temps de trajet : vert (< 1h) → jaune → rouge (> 10h)
    t.querySelectorAll('tr').forEach(tr => {
      const td = tr.cells[10];
      if (!td || !/\d/.test(td.textContent)) return;
      let min = 0;
      td.textContent.replace(/(\d+)(j|h|m|s)/g, (x, v, u) => { min += +v * (u === 'j' ? 1440 : u === 'h' ? 60 : u === 'm' ? 1 : 1 / 60); });
      const k = Math.max(0, Math.min(1, (min - 60) / 540));
      td.style.setProperty('color', `hsl(${Math.round(120 * (1 - k))},85%,58%)`, 'important');
      td.style.fontWeight = '600';
    });
  }
  const MEMBERS_CSS = __CSS__('alliance/membres-tableau.css');

