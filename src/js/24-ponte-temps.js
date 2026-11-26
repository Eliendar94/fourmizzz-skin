  // ---------- File de ponte : temps alignés en colonnes (J / H / m / s) ----------
  // Le jeu réécrit ces cellules chaque seconde : on garde son contenu (invisible) et on affiche une copie formatée.
  function formatPonteTimes() {
    const table = document.querySelector('#centre > h4 + table.tableau_leger');
    if (!table) return;
    table.querySelectorAll('tr').forEach((tr, i) => {
      if (i === 0) return;
      [2, 3].forEach(col => {
        const td = tr.children[col];
        if (!td) return;
        td.classList.add('fz-tcell');
        let out = td.querySelector(':scope > .fz-time');
        if (!out) { out = document.createElement('span'); out.className = 'fz-time'; td.appendChild(out); }
        let raw = '';
        td.childNodes.forEach(n => { if (n !== out) raw += n.textContent; });
        raw = raw.trim();
        if (out.dataset.src === raw) return;
        out.dataset.src = raw;
        const parts = { J: '', H: '', m: '', s: '' };
        let any = false;
        raw.replace(/(\d+)\s*([JjHhms])/g, (_, v, u) => { const k = u === 'j' ? 'J' : u === 'h' ? 'H' : u; parts[k] = v + k; any = true; });
        out.innerHTML = any ? ['J', 'H', 'm', 's'].map(k => `<span class="fz-t fz-t-${k}">${parts[k]}</span>`).join('') : `<span>${raw}</span>`;
      });
    });
  }
  const PONTE_TABLE_CSS = __CSS__('reine/file-ponte-temps.css');

