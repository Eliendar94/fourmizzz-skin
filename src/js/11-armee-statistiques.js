  // Page Armée : les statistiques (Vie, Dégâts…) passent dans un second panneau « Statistiques », sous celui des troupes.
  // Les lignes sont déplacées telles quelles (mêmes éléments, mêmes actions au clic).
  function splitArmyStats() {
    const anchor = document.querySelector('#centre table.simulateur span#Vie'); const row = anchor && anchor.closest('tr');
    const t = row && row.closest('table'); if (!t || t.classList.contains('fz-stats')) return;
    const h = t.querySelector('h3'); if (h) h.classList.add('fz-band');
    const st = document.createElement('table'); st.className = 'simulateur fz-stats'; st.style.textAlign = 'center';
    const tb = document.createElement('tbody'); st.appendChild(tb);
    const head = document.createElement('tr'); head.innerHTML = '<td colspan="10"><h3 class="fz-band">Statistiques</h3></td>'; tb.appendChild(head);
    // rappel des colonnes (Terrain de chasse / Dôme / Loge), reprises de l'en-tête du tableau des troupes
    const th = t.querySelector('tr.fz-thead') || t.rows[1];
    if (th && th.cells.length >= 4) { const cols = document.createElement('tr'); cols.className = 'fz-stats-cols'; cols.innerHTML = '<td></td>' + [...th.cells].slice(1, 4).map(c => `<td colspan="${c.colSpan}">${c.textContent.trim()}</td>`).join(''); tb.appendChild(cols); }
    let r = row; while (r) { const nx = r.nextElementSibling; tb.appendChild(r); r = nx; }
    t.after(st);
    syncArmyStatsCols();
  }
  // v1.30 : le panneau Statistiques prend la largeur et les colonnes exactes du panneau des troupes
  function syncArmyStatsCols() {
    const st = document.querySelector('#centre table.simulateur.fz-stats'); const t = st && st.previousElementSibling; if (!t) return;
    // ligne d'en-tête des troupes (Unités / Terrain de chasse / Dôme / Loge) : ses colonnes sont réparties en 10 sous-colonnes
    const head = t.querySelector('tr.fz-thead') || [...t.rows].find(r => r.cells.length === 4); if (!head) return;
    const ws = []; [...head.cells].forEach(c => { const w = c.getBoundingClientRect().width; for (let i = 0; i < c.colSpan; i++) ws.push(w / c.colSpan); });
    const sum = ws.reduce((x, y) => x + y, 0); if (!sum) return;
    let cg = st.querySelector('colgroup'); if (!cg) { cg = document.createElement('colgroup'); st.insertBefore(cg, st.firstChild); }
    if (cg.children.length !== ws.length) cg.innerHTML = ws.map(() => '<col>').join('');
    ws.forEach((w, i) => { cg.children[i].style.width = (w / sum * 100).toFixed(3) + '%'; });
    st.style.tableLayout = 'fixed'; st.style.minWidth = ''; st.style.width = t.getBoundingClientRect().width.toFixed(2) + 'px';
  }

