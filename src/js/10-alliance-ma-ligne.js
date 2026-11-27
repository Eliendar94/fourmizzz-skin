  // Page Alliance (membres) : ma ligne surlignée en vert, comme dans le classement des joueurs.
  // Le tableau est trié / reconstruit par un script tiers : on re-marque la ligne régulièrement.
  // v1.31 : page Membres — lien « Ajouter tous les membres… » en bouton « + Ajouter les membres à ma liste d'amis », titre en bandeau
  function membersPageExtras() {
    const t = document.getElementById('tabMembresAlliance'); if (!t) return;
    const a = [...document.querySelectorAll('#centre a[href*="amis.php"]')].find(x => /ajouter tous les membres/i.test(x.textContent));
    if (a && !a.classList.contains('fz-addfriends')) { a.classList.add('fz-addfriends'); a.innerHTML = '<span class="fz-plus">+</span><span>Ajouter les membres à ma liste d\'amis</span>'; const br = a.previousElementSibling; if (br && br.tagName === 'BR') br.remove(); }
    const h = [...document.querySelectorAll('#centre table.simulateur h2')].find(x => /membres de l.alliance/i.test(x.textContent));
    if (h && !h.classList.contains('fz-band')) { h.classList.add('fz-band'); h.parentElement.classList.add('fz-band-cell'); }
    membersColsToggle(t, a);
  }
  /* v1.65 : case « Technologie / Fourmilière » sous le tableau des membres, à côté du bouton d'ajout aux amis :
     décochée, ces deux colonnes sont masquées (choix mémorisé). Les cellules restent dans la page (display:none),
     les colonnes sont repérées par leur en-tête car un script tiers peut changer l'ordre ou le nombre des colonnes. */
  function membersColsToggle(t, a) {
    const show = GM_getValue('fzMembresTechFourmi', true);
    document.documentElement.classList.toggle('fz-cache-tf', !show);
    // positions (en tenant compte des colspan) des en-têtes Technologie et Fourmilière
    const head = t.rows[0]; if (!head) return;
    const cible = new Set(); let pos = 0;
    [...head.cells].forEach(c => { const n = c.colSpan || 1; if (/technolog|fourmili/i.test(c.textContent)) for (let i = 0; i < n; i++) cible.add(pos + i); pos += n; });
    [...t.rows].forEach(r => { let p = 0; [...r.cells].forEach(c => { const n = c.colSpan || 1; let tout = true; for (let i = 0; i < n; i++) if (!cible.has(p + i)) tout = false; c.classList.toggle('fz-col-tf', tout && cible.size > 0); p += n; }); });
    if (document.getElementById('fz-cols-tf')) return;
    const lab = document.createElement('label'); lab.id = 'fz-cols-tf'; lab.className = 'fz-cols-tf'; lab.title = 'Afficher ou masquer les colonnes Technologie et Fourmilière';
    lab.innerHTML = '<input type="checkbox"><span class="fz-cols-box"></span><span>Technologie / Fourmilière</span>';
    const cb = lab.querySelector('input'); cb.checked = show;
    cb.addEventListener('change', () => { GM_setValue('fzMembresTechFourmi', cb.checked); document.documentElement.classList.toggle('fz-cache-tf', !cb.checked); });
    if (a && a.classList.contains('fz-addfriends')) a.after(lab); else t.after(lab);
  }
  function markMeInMembers() {
    membersPageExtras();
    const t = document.getElementById('tabMembresAlliance'); const p = document.getElementById('pseudo');
    if (!t || !p) return; const me = p.textContent.trim().toLowerCase(); if (!me) return;
    [...t.rows].forEach(r => r.classList.toggle('fz-me', [...r.querySelectorAll('a')].some(a => a.textContent.trim().toLowerCase() === me)));
  }
