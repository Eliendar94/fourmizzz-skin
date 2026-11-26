  // Page Alliance (membres) : ma ligne surlignée en vert, comme dans le classement des joueurs.
  // Le tableau est trié / reconstruit par un script tiers : on re-marque la ligne régulièrement.
  // v1.31 : page Membres — lien « Ajouter tous les membres… » en bouton « + Ajouter les membres à ma liste d'amis », titre en bandeau
  function membersPageExtras() {
    const t = document.getElementById('tabMembresAlliance'); if (!t) return;
    const a = [...document.querySelectorAll('#centre a[href*="amis.php"]')].find(x => /ajouter tous les membres/i.test(x.textContent));
    if (a && !a.classList.contains('fz-addfriends')) { a.classList.add('fz-addfriends'); a.innerHTML = '<span class="fz-plus">+</span><span>Ajouter les membres à ma liste d\'amis</span>'; const br = a.previousElementSibling; if (br && br.tagName === 'BR') br.remove(); }
    const h = [...document.querySelectorAll('#centre table.simulateur h2')].find(x => /membres de l.alliance/i.test(x.textContent));
    if (h && !h.classList.contains('fz-band')) { h.classList.add('fz-band'); h.parentElement.classList.add('fz-band-cell'); }
  }
  function markMeInMembers() {
    membersPageExtras();
    const t = document.getElementById('tabMembresAlliance'); const p = document.getElementById('pseudo');
    if (!t || !p) return; const me = p.textContent.trim().toLowerCase(); if (!me) return;
    [...t.rows].forEach(r => r.classList.toggle('fz-me', [...r.querySelectorAll('a')].some(a => a.textContent.trim().toLowerCase() === me)));
  }
