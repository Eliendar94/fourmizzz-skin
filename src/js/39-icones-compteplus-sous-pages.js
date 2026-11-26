  // ---------- v1.01 : icônes néon des sous-pages Compte+ (simulateurs, ponte, profil, bloc-note) ----------
  const cplusIconCss = (c) => {
    const A = c.accent;
    const ic = (col, body, size = 20) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${col}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`)}")`;
    const glow = (col, r = 2.5) => `filter:drop-shadow(0 0 calc(${r}px*var(--fz-glow)) ${col})!important;`;
    const sq = (d) => `<rect x="2.5" y="2.5" width="19" height="19" rx="3" opacity=".55"/>${d}`;
    return `
#centre img[src*="fleche-armee."]{content:${ic(A, '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v9M8 12.5l4 4 4-4"/>')}!important;width:20px!important;height:20px!important;vertical-align:middle!important;cursor:pointer;${glow(A)}transition:transform .15s;}
#centre img[src*="fleche-armee."]:hover{transform:scale(1.15);}
#centre img[src*="feuille."]{content:${ic(A, '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 15.5h6M9 9h3"/>', 18)}!important;width:18px!important;height:18px!important;vertical-align:middle!important;cursor:pointer;${glow(A)}transition:transform .15s;}
#centre img[src*="feuille."]:hover{transform:scale(1.15);}
#centre img[src*="fleche-champs-gauche."]{content:${ic(A, sq('<path d="M13.5 7.5L9 12l4.5 4.5M17 7.5L12.5 12l4.5 4.5"/>'), 18)}!important;}
#centre img[src*="fleche-champs-droite."]{content:${ic(A, sq('<path d="M10.5 7.5L15 12l-4.5 4.5M7 7.5l4.5 4.5L7 16.5"/>'), 18)}!important;}
#centre img[src*="fleche-champs-"]{width:18px!important;height:18px!important;vertical-align:middle!important;cursor:pointer;${glow(A)}transition:transform .15s;}
#centre img[src*="fleche-champs-"]:hover{transform:scale(1.15);}
/* simulateur de ponte : bouton « Pondre » (coche verte) */
#centre input[type=image][src*="OK."]{box-sizing:border-box!important;width:24px!important;height:24px!important;padding:24px 0 0 24px!important;background:${ic('#5dff7a', '<circle cx="12" cy="12" r="9" fill="#5dff7a" fill-opacity=".12"/><path d="M7.5 12.3l3 3 6-6.3" stroke-width="2.2"/>', 22)} center/22px 22px no-repeat!important;border:0!important;vertical-align:middle!important;cursor:pointer;${glow('#5dff7a')}transition:transform .15s;}
#centre input[type=image][src*="OK."]:hover{transform:scale(1.15);}
/* barre d'édition (profil, messages…) */
#centre img[src*="/bold."]{content:${ic(A, '<path d="M7 4h6a4 4 0 0 1 0 8H7zM7 12h7a4 4 0 0 1 0 8H7z"/>', 16)}!important;}
#centre img[src*="/italic."]{content:${ic(A, '<path d="M10 4h8M6 20h8M15 4L9 20"/>', 16)}!important;}
#centre img[src*="/underline."]{content:${ic(A, '<path d="M7 4v7a5 5 0 0 0 10 0V4M5 20h14"/>', 16)}!important;}
#centre img[src*="/picture."]{content:${ic(A, '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 8"/>', 16)}!important;}
#centre img[src*="/link."]{content:${ic(A, '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>', 16)}!important;}
#centre img[src*="/membre.gif"]{content:${ic(A, '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7"/>', 16)}!important;width:16px!important;}
#centre img[src*="/groupe.gif"]{content:${ic(A, '<circle cx="12" cy="7.5" r="2.8"/><path d="M6.5 19c0-3.2 2.4-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="5.5" cy="9.5" r="2"/><circle cx="18.5" cy="9.5" r="2"/><path d="M2 17.5c0-2.2 1.4-3.8 3.5-4M22 17.5c0-2.2-1.4-3.8-3.5-4"/>', 16)}!important;width:20px!important;}
#centre :is(img[src*="/bold."],img[src*="/italic."],img[src*="/underline."],img[src*="/picture."],img[src*="/link."],img[src*="/membre.gif"],img[src*="/groupe.gif"]){height:16px!important;vertical-align:middle!important;margin:0 3px!important;cursor:pointer;${glow(A, 2)}transition:transform .15s;}
#centre :is(img[src*="/bold."],img[src*="/italic."],img[src*="/underline."],img[src*="/picture."],img[src*="/link."],img[src*="/membre.gif"],img[src*="/groupe.gif"]):hover{transform:scale(1.2);}
/* barre de smileys : icônes du jeu (ouvrière, nourriture, matériaux, convoi, rapports) en néon */
#centre [id^="listeSmiley"] img[src$="/worker.png"]{content:${ic('#d6ecff', '<circle cx="12" cy="6.5" r="2.5"/><ellipse cx="12" cy="12" rx="2.2" ry="2.6"/><ellipse cx="12" cy="18.2" rx="3" ry="3.3"/><path d="M9.8 11L5 8.5M14.2 11L19 8.5M9.8 12.5L4.5 13M14.2 12.5L19.5 13M9.8 14L6 18M14.2 14L18 18M10.8 4.5L9 2M13.2 4.5L15 2"/>')}!important;${glow('#d6ecff')}}
#centre [id^="listeSmiley"] img[src$="/food.png"]{content:${ic('#7dff9a', '<path d="M12 21c-4.5 0-7.5-3.4-7.5-7.6C4.5 9.6 7.2 7 10 7c1 0 1.5.4 2 .4s1-.4 2-.4c2.8 0 5.5 2.6 5.5 6.4 0 4.2-3 7.6-7.5 7.6z"/><path d="M12 7.4V5c0-1.6 1.3-2.6 3.2-2.6C15.2 4 14 5 12 5"/>')}!important;${glow('#7dff9a')}}
#centre [id^="listeSmiley"] img[src$="/wood.png"]{content:${ic('#ffae42', '<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M4 7.4l8 4.6 8-4.6M12 12v9.2"/>')}!important;${glow('#ffae42')}}
#centre [id^="listeSmiley"] img[src$="/convoy.png"]{content:${ic(A, '<path d="M3 10l5-3h8l5 3v5l-5 3H8l-5-3z"/><path d="M10.5 12.5h4M12.5 10.5l2 2-2 2"/>')}!important;${glow(A)}}
#centre [id^="listeSmiley"] img[src$="/letter.png"]{content:${ic(A, '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/>')}!important;${glow(A)}}
#centre [id^="listeSmiley"] img[src$="/hunt_report.png"]{content:${ic('#4dffd2', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><circle cx="17.5" cy="15.5" r="2.2"/>')}!important;${glow('#4dffd2')}}
#centre [id^="listeSmiley"] img[src$="/fight_report.png"]{content:${ic('#ff6b5a', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><path d="M13 12.5l-2 3.5h3l-2 3.5" stroke-width="1.4"/>')}!important;${glow('#ff6b5a')}}
#centre [id^="listeSmiley"] img[src$="/convoy_report.png"]{content:${ic('#ffae42', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><path d="M15 14.5h4M17.5 13l1.5 1.5-1.5 1.5"/>')}!important;${glow('#ffae42')}}
#centre [id^="listeSmiley"] :is(img[src$="/worker.png"],img[src$="/food.png"],img[src$="/wood.png"],img[src$="/convoy.png"],img[src$="/letter.png"],img[src$="/hunt_report.png"],img[src$="/fight_report.png"],img[src$="/convoy_report.png"]){width:20px!important;height:20px!important;vertical-align:middle!important;margin:0 2px!important;}
/* v1.13 : chevrons du bouton de destination de ponte à la couleur du lieu */
${[['tdc', '#ff4d5e'], ['dome', '#ffb020'], ['loge', '#4ade80']].map(([k, col]) => `html body #centre div.cliquable3[data-fz-dest="${k}"] img[src*="fleche-champs-droite."]{content:${ic(col, sq('<path d="M10.5 7.5L15 12l-4.5 4.5M7 7.5l4.5 4.5L7 16.5"/>'), 18)}!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${col})!important;}`).join('')}
/* bloc-note : loupe de recherche (bouton image : l'image d'origine est repoussée hors du cadre, l'icône est posée en fond) */
#centre input[type=image][src*="loupe."]{box-sizing:border-box!important;width:20px!important;height:20px!important;padding:20px 0 0 20px!important;background:${ic(A, '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/>', 18)} center/18px 18px no-repeat!important;border:0!important;vertical-align:middle!important;cursor:pointer;${glow(A)}}`;
  };

