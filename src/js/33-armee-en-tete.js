  // ---------- Page Armée : ligne d'en-tête du tableau des troupes ----------
  function markArmyHead() {
    const t = document.querySelector('#centre table.simulateur');
    if (!t) return;
    const tr = [...t.querySelectorAll('tr')].find(r => /Unit/.test(r.textContent) && /Loge/.test(r.textContent));
    if (tr) tr.classList.add('fz-thead');
  }
  const armyHeadCss = (accent) => {
    // boutons « Vers la … » (déplacer une unité d'une colonne à l'autre)
    const mk = (d) => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="3" opacity=".55"/>${d}</svg>`);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v9M8 12.5l4 4 4-4"/></svg>`;
    return `#centre table.simulateur tr.fz-thead > td{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;border-top:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent)!important;padding:6px 4px!important;vertical-align:middle!important;}
#centre table.simulateur tr.fz-thead strong{font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;letter-spacing:.08em;text-transform:uppercase;color:var(--fz-accent)!important;font-weight:700;vertical-align:middle;}
#centre table.simulateur tr.fz-thead > td > a{display:inline-flex!important;align-items:center;justify-content:center;width:20px;height:20px;vertical-align:middle;margin-right:6px;}
#centre table.simulateur tr.fz-thead > td > a img{display:block!important;margin:0!important;position:static!important;top:auto!important;content:url("data:image/svg+xml,${encodeURIComponent(svg)}")!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) var(--fz-accent));transition:transform .15s;}
#centre table.simulateur tr.fz-thead > td > a:hover img{transform:scale(1.15);}
#centre table.simulateur img[src*="fleche-champs-gauche."]{content:url("${mk('<path d="M13.5 7.5L9 12l4.5 4.5M17 7.5L12.5 12l4.5 4.5"/>')}")!important;}
#centre table.simulateur img[src*="fleche-champs-droite."]{content:url("${mk('<path d="M10.5 7.5L15 12l-4.5 4.5M7 7.5l4.5 4.5L7 16.5"/>')}")!important;}
#centre table.simulateur img[src*="fleche-champs-"]{width:18px!important;height:18px!important;vertical-align:middle!important;cursor:pointer;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) var(--fz-accent))!important;transition:transform .15s;}
#centre table.simulateur img[src*="fleche-champs-"]:hover{transform:scale(1.15);}
#centre sup[data-fmz-fullxp]{display:none!important;}`;
  };

  // Page Armée : noms d'unités aux couleurs de la page Stat (mêmes couleurs que la file de ponte)
  function colorArmyUnits() {
    document.querySelectorAll('#centre table.simulateur tr').forEach(tr => {
      const td = tr.children[0];
      if (!td || tr.classList.contains('fz-thead') || tr.children.length < 2 || td.classList.contains('fz-unit')) return;
      const txt = td.textContent.replace(/[\s ]+/g, ' ').trim();
      if (txt.length > 40) return;
      const hit = UNIT_COLORS.find(([re]) => new RegExp('^' + re.source, 'i').test(txt));
      if (!hit) return;
      td.classList.add('fz-unit');
      [td, ...td.querySelectorAll('*')].forEach(e => e.style.setProperty('color', hit[1], 'important'));
      // quantités de cette unité (Terrain / Dôme / Loge) dans la même couleur
      [...tr.children].slice(1).forEach(c => {
        if (!/\d/.test(c.textContent)) return;
        c.classList.add('fz-unit-qty');
        [c, ...c.querySelectorAll('*')].forEach(e => e.style.setProperty('color', hit[1], 'important'));
      });
    });
  }

