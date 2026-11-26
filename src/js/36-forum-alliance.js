  // ---------- Forum interne de l'alliance ----------
  function styleForum() {
    // vignettes des sous-forums : couleur propre à chaque forum, éclaircie pour le fond sombre
    document.querySelectorAll('#centre span.categorie_forum, #centre span[class*="forum"].ligne_paire').forEach(sp => {
      if (sp.dataset.fzF) return;
      sp.dataset.fzF = '1';
      sp.classList.remove('fz-forumtag');
      const m = getComputedStyle(sp).color.match(/[\d.]+/g);
      sp.classList.add('fz-forumtag');
      if (!m) return;
      const [r, g, b] = m.map(Number);
      const R = r / 255, G = g / 255, B = b / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), d = mx - mn;
      let h = 0, l = (mx + mn) / 2, sat = d ? d / (1 - Math.abs(2 * l - 1)) : 0;
      if (d) { h = mx === R ? ((G - B) / d) % 6 : mx === G ? (B - R) / d + 2 : (R - G) / d + 4; h *= 60; if (h < 0) h += 360; }
      const col = (sat < .12 && l < .2) ? 'var(--fz-accent)' : sat < .12 ? '#cfe3f5' : `hsl(${Math.round(h)},${Math.round(Math.max(sat, .55) * 100)}%,${Math.round(Math.max(l, .72) * 100)}%)`;
      sp.style.setProperty('--ftag', col);
    });
    // lien « Quitter l'alliance » → bouton métallique rouge
    document.querySelectorAll('#alliance a:not(.fz-quit)').forEach(a => { if (/^\s*Quitter l.alliance\s*$/i.test(a.textContent)) a.classList.add('fz-quit'); });
    // bouton « Nouveau sujet » (3 images) → un seul bouton néon
    document.querySelectorAll('#centre img[src*="nouveau_sujet_gauche"], #centre img[src*="repondre_sujet_gauche"]').forEach(img => {
      const wrap = img.parentElement;
      if (wrap) wrap.classList.add('fz-newtopic');
    });
  }
  const forumCss = (c) => {
    const ic = (col, body, size = 18) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${col}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`)}")`;
    return `
#centre div.simulateur{background:linear-gradient(135deg,rgba(14,30,52,.88),rgba(8,14,28,.94))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));color:var(--fz-text)!important;}
#centre div.simulateur tr,#centre div.simulateur .ligne_paire:not(.fz-forumtag):not(tr){background:transparent!important;}#centre div.simulateur table.tab_triable tr > td{background:transparent!important;transition:background .12s;}#centre div.simulateur table.tab_triable tr.ligne_paire > td{background:color-mix(in srgb,var(--fz-accent) 8%,transparent)!important;}#centre div.simulateur table.tab_triable tr:hover > td,#centre div.simulateur table.tab_triable tr:has(> td[rowspan]):hover + tr > td,#centre div.simulateur table.tab_triable tr:has(> td[rowspan]):has(+ tr:hover) > td{background:color-mix(in srgb,var(--fz-accent) 18%,transparent)!important;}
#centre .fz-forumtag{display:inline-block;margin:2px 2px!important;padding:2px 8px!important;border:1px solid var(--ftag)!important;border-radius:2px!important;background:transparent!important;color:var(--ftag)!important;font-family:"Exo 2","Segoe UI",sans-serif!important;font-size:12px!important;font-weight:600;line-height:16px;box-shadow:0 0 calc(5px*var(--fz-glow)) color-mix(in srgb,var(--ftag) 35%,transparent);}
#centre .fz-forumtag *{color:var(--ftag)!important;}
#centre .fz-forumtag.ligne_paire{background:color-mix(in srgb,var(--ftag) 22%,transparent)!important;box-shadow:0 0 calc(10px*var(--fz-glow)) color-mix(in srgb,var(--ftag) 55%,transparent),inset 0 0 6px color-mix(in srgb,var(--ftag) 30%,transparent);}
#centre .fz-forumtag:hover{background:color-mix(in srgb,var(--ftag) 14%,transparent)!important;}
#centre div.simulateur table.tab_triable tr:first-child > td,#centre div.simulateur table.tab_triable tr:first-child > th{background:color-mix(in srgb,var(--fz-accent) 14%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;}
#centre div.simulateur table.tab_triable tr > td{padding-top:4px!important;padding-bottom:4px!important;}
#centre .fz-newtopic > img,#centre .fz-newtopic img[src*="nouveau_sujet_droite"],#centre .fz-newtopic img[src*="nouveau_sujet_gauche"],#centre .fz-newtopic img[src*="repondre_sujet_gauche"]{display:none!important;}#forum hr{border:0!important;height:1px!important;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 45%,transparent),transparent)!important;margin:8px 0!important;}#forum .auteurForum a[href*="classementAlliance"]{color:#9fb3cc!important;}#forum .messageForum{color:var(--fz-text)!important;}
#centre .fz-newtopic{display:block!important;width:auto!important;height:auto!important;margin:6px 0 10px!important;}#centre .fz-newtopic > div{position:static!important;left:auto!important;top:auto!important;width:auto!important;height:auto!important;line-height:16px!important;display:inline-flex!important;align-items:center;gap:6px;background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;border:1px solid var(--fz-accent)!important;border-radius:2px;padding:3px 10px!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;}
#centre .fz-newtopic > div{padding:4px 12px!important;justify-content:center!important;}#centre .fz-newtopic > div > span{position:static!important;top:0!important;margin:0!important;line-height:16px!important;}html body #centre div.simulateur table.tab_triable tr td a.topic_forum{color:#8fb8ff!important;}html body #centre div.simulateur table.tab_triable tr td a.topic_forum:hover{color:#c4d9ff!important;}#centre .fz-newtopic > div:hover{background:color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;color:#fff!important;}
#centre .fz-newtopic > div *{color:inherit!important;}
#centre div.simulateur img[src*="etoile."]{content:${ic('#ffd84d', '<path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8-4.3-4.1 5.9-.8z" fill="#ffd84d" fill-opacity=".25"/>')}!important;width:18px!important;height:18px!important;filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) #ffd84d);vertical-align:middle;}
#centre div.simulateur img[src*="bulle."]{content:${ic(c.accent, '<path d="M4 5h16v10.5H9.5L5 19.5v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>')}!important;width:18px!important;height:18px!important;}
#centre div.simulateur img[src*="supprimer."]{content:${ic(c.danger || '#ff5470', '<path d="M7 7l10 10M17 7L7 17"/>', 14)}!important;width:14px!important;height:14px!important;vertical-align:middle;}
#centre div.simulateur img[src*="nouveau_sujet_milieu"],#centre .fz-newtopic img:not([src*="nouveau_sujet"]){content:${ic(c.accent, '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M12 11v6M9 14h6"/>', 14)}!important;width:14px!important;height:14px!important;}`;
  };

