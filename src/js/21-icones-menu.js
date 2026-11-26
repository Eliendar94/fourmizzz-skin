  // ---------- Icônes néon du menu principal (Fourmilière, Alliance, Communauté, Compte +, Aide) ----------
  // Une seule couleur (accent du thème) pour rester sobre. Dessins 24×24 au trait.
  const MI = {
    // Barre principale
    topFourmiliere: '<circle cx="12" cy="6.5" r="2.4"/><ellipse cx="12" cy="12" rx="2.1" ry="2.5"/><ellipse cx="12" cy="18.2" rx="2.9" ry="3.2"/><path d="M9.9 11L5.5 8.5M14.1 11l4.4-2.5M9.9 12.6L5 13.2M14.1 12.6l4.9.6M9.9 14L6.5 17.8M14.1 14l3.4 3.8"/>',
    topAlliance: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z"/><circle cx="12" cy="9" r="1.6"/><circle cx="9" cy="14.5" r="1.6"/><circle cx="15" cy="14.5" r="1.6"/><path d="M11.2 10.4l-1.4 2.7M12.8 10.4l1.4 2.7M10.6 14.5h2.8" opacity=".7"/>',
    topCommunaute: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.3 3.6 5.2 3.6 8.5s-1.1 6.2-3.6 8.5c-2.5-2.3-3.6-5.2-3.6-8.5s1.1-6.2 3.6-8.5z"/>',
    topCompte: '<path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8-4.3-4.1 5.9-.8z"/>',
    topAide: '<circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.7v.6"/><circle cx="12" cy="16.8" r=".8" fill="C"/>',
    // Fourmilière
    Reine: '<path d="M4 17.5L3 7.5l5 4 4-6.5 4 6.5 5-4-1 10z"/><path d="M4.5 20.5h15"/><circle cx="12" cy="13.5" r="1.2" fill="C"/>',
    Construction: '<path d="M14.5 3.5a4 4 0 0 0-3.9 5.1L3.8 15.4a1.9 1.9 0 0 0 2.7 2.7l6.8-6.8a4 4 0 0 0 5.1-3.9l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4z"/>',
    Laboratoire: '<path d="M9.5 3h5M10.5 3v6L5 18.5c-.6 1.2.2 2.5 1.6 2.5h10.8c1.4 0 2.2-1.3 1.6-2.5L13.5 9V3"/><path d="M7.5 14.5h9"/>',
    Ressources: '<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M4 7.4l8 4.6 8-4.6M12 12v9.2"/>',
    Armee: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z"/><path d="M8 10l4 2.5 4-2.5M8 13.5l4 2.5 4-2.5"/>',
    Ennemies: '<path d="M12 3c-4.4 0-7.5 3-7.5 7 0 2.4 1 4 2.5 5v3.5h10V15c1.5-1 2.5-2.6 2.5-5 0-4-3.1-7-7.5-7z"/><circle cx="9" cy="10.5" r="1.6" fill="C"/><circle cx="15" cy="10.5" r="1.6" fill="C"/><path d="M10 18.5v2M12 18.5v2M14 18.5v2"/>',
    Colonies: '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="1.8"/><circle cx="19" cy="6" r="1.8"/><circle cx="5" cy="18" r="1.8"/><circle cx="19" cy="18" r="1.8"/><path d="M6.5 7.3l3.2 2.6M17.5 7.3l-3.2 2.6M6.5 16.7l3.2-2.6M17.5 16.7l-3.2-2.6"/>',
    Carte: '<path d="M3 6l6-2.5 6 2.5 6-2.5v14.5l-6 2.5-6-2.5-6 2.5z"/><path d="M9 3.5V18M15 6v14.5"/>',
    Commerce: '<path d="M3 10l5-3h8l5 3v5l-5 3H8l-5-3z"/><path d="M10.5 12.5h4M12.5 10.5l2 2-2 2"/>',
    Messagerie: '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/>',
    MaFourmiliere: '<path d="M3 20h18M5 20v-6a7 7 0 0 1 14 0v6"/><path d="M9.5 20v-4h5v4M12 7V4.5M10.5 4.5h3"/>',
    // Alliance
    Chat: '<path d="M4 5h16v10.5H9.5L5 19.5v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    Forum: '<path d="M3 4h12v8.5H8L4.5 15.5V12.5H3z"/><path d="M17.5 8H21v8.5h-1.5v3l-3-3H10V15"/>',
    ForumExt: '<path d="M4 5h11v9H8.5L5 17.5V14H4z"/><path d="M15.5 13.5L21 8M17 8h4v4"/>',
    Membres: '<circle cx="12" cy="7.5" r="2.8"/><path d="M6.5 19c0-3.2 2.4-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="5.5" cy="9.5" r="2"/><circle cx="18.5" cy="9.5" r="2"/><path d="M2 17.5c0-2.2 1.4-3.8 3.5-4M22 17.5c0-2.2-1.4-3.8-3.5-4"/>',
    Candidature: '<rect x="4.5" y="3" width="15" height="18" rx="2"/><path d="M8 8h8M8 11.5h5M8.5 16l2 2 4-4"/>',
    MC: '<path d="M4 10v4h3l7 4.5V5.5L7 10z"/><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11"/>',
    Diplomatie: '<path d="M5 21V3.5M5 4h12l-2.5 4L17 12H5"/>',
    Description: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v6"/><circle cx="12" cy="7.8" r=".9" fill="C"/>',
    Options: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1L5.3 5.3"/><circle cx="12" cy="12" r="6.5"/>',
    // Communauté
    Echange: '<path d="M7 4L3.5 7.5 7 11M3.5 7.5H17a3.5 3.5 0 0 1 3.5 3.5M17 20l3.5-3.5L17 13M20.5 16.5H7A3.5 3.5 0 0 1 3.5 13"/>',
    Propositions: '<path d="M9 18h6M10 21h4M8.5 15c-1.7-1.3-2.7-3.2-2.7-5.2a6.2 6.2 0 0 1 12.4 0c0 2-1 3.9-2.7 5.2z"/>',
    ClassementJoueurs: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 5.5H5v1.5a3 3 0 0 0 3 3M16 5.5h3v1.5a3 3 0 0 1-3 3M12 13v4M8.5 20.5h7M10 17h4"/>',
    ClassementAlliance: '<path d="M3.5 20.5h17M6 20.5v-6h4v6M10 20.5V9h4v11.5M14 20.5v-8h4v8"/><path d="M12 3.5l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z" fill="C" stroke="none"/>',
    Profil: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.3"/><path d="M5.5 16.5c.5-1.8 1.8-2.8 3.5-2.8s3 1 3.5 2.8M14.5 10h4M14.5 13.5h3"/>',
    Parrainage: '<circle cx="10" cy="8" r="3.2"/><path d="M3.5 20c0-3.6 2.9-6.3 6.5-6.3 1.6 0 3 .5 4.1 1.4M18.5 13v7M15 16.5h7"/>',
    // Compte +
    Achat: '<path d="M6.5 4h11l3.5 5-9 11L3 9z"/><path d="M3 9h18M9.5 4L8 9l4 11M14.5 4L16 9l-4 11"/>',
    SimulateurChasse: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l6-6"/>',
    SimulateurDuree: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2M10 2.5h4M12 2.5V6"/>',
    SimulateurFlood: '<path d="M4 8.5h14M14.5 5L18 8.5 14.5 12M20 15.5H6M9.5 12L6 15.5 9.5 19"/>',
    ListeAmis: '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c3 0 5 2 5 4.9"/>',
    BlocNote: '<rect x="4.5" y="3" width="15" height="18" rx="2"/><path d="M8 8h8M8 11.5h8M8 15h4.5"/>',
    StatJoueur: '<path d="M3.5 20.5h17M6 20.5V13M10 20.5V8M14 20.5v-6M18 20.5V5"/>',
    // Aide
    Intro: '<circle cx="12" cy="12" r="8.5"/><path d="M10 8.5v7l5.5-3.5z"/>',
    PremierJour: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4M11 13l1.5-1v5.5"/>',
    DeuxiemeJour: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4M10.5 12.8a1.6 1.6 0 1 1 2.8 1.1L10.5 17.5h3.5"/>',
    Divers: '<circle cx="6" cy="6" r="1.8"/><circle cx="12" cy="6" r="1.8"/><circle cx="18" cy="6" r="1.8"/><circle cx="6" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18" cy="12" r="1.8"/><circle cx="6" cy="18" r="1.8"/><circle cx="12" cy="18" r="1.8"/><circle cx="18" cy="18" r="1.8"/>',
    Regles: '<path d="M12 3.5v17M7 20.5h10M4 7.5h16M6.5 7.5L4 13.5a2.5 2.5 0 0 0 5 0zM17.5 7.5L15 13.5a2.5 2.5 0 0 0 5 0z"/>',
    Moderateur: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z"/><path d="M12 8l1.3 2.6 2.8.4-2 2 .5 2.8L12 14.5l-2.6 1.3.5-2.8-2-2 2.8-.4z"/>',
    Livre: '<path d="M12 6.5C10 5 7 4.5 3.5 5v13.5C7 18 10 18.5 12 20c2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5V20"/>',
    Dev: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15"/>',
    // Bouton « Profil » en haut à droite de la barre
    topProfil: '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7"/>',
  };
  const menuIconCss = (accent) => {
    const uri = (body) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${accent}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body.replace(/"C"/g, `"${accent}"`)}</svg>`)}")`;
    const rule = (sel, body, size) => `${sel}{background:${uri(body)} center/${size}px ${size}px no-repeat!important;}`;
    const tops = ['topFourmiliere', 'topAlliance', 'topCommunaute', 'topCompte', 'topAide'];
    let css = tops.map((k, i) => rule(`html body #menu #menu_horizontal > li:nth-child(${i + 2}) > a > span`, MI[k], 19)).join('');
    css += Object.keys(MI).filter(k => !k.startsWith('top')).map(k => rule(`#menu :is(#menuFourmiliere,#menuAlliance,#menuCommunaute,#menuComptePlus,#menuAide).menu_colonne a.bouton${k} > span`, MI[k], 21)).join('');
    // v0.96 : barre du haut, boutons (icône + texte) centrés et alignés ; bouton Profil à la couleur du thème
    css += rule('html body #menu #boutonDeconnexion > span', MI.topProfil, 19);
    css += `html body #menu #menu_horizontal{display:flex!important;align-items:stretch;justify-content:center;}
html body #menu #menu_horizontal > li{flex:1 1 0;display:flex!important;float:none!important;margin:0!important;}
html body #menu #menu_horizontal > li#liBoutonRessource{display:none!important;}
html body #menu #menu_horizontal > li > a{display:flex!important;align-items:center;justify-content:center;gap:7px;width:100%!important;height:30px;padding:0!important;box-sizing:border-box;line-height:1!important;}
html body #menu #menu_horizontal > li > a > span{display:block!important;flex:0 0 auto;width:20px!important;height:20px!important;margin:0!important;vertical-align:middle!important;position:static!important;top:auto!important;}
html body #menu #boutonDeconnexion{display:flex!important;align-items:center;justify-content:center;top:0!important;height:30px!important;box-sizing:border-box;padding:0!important;}
html body #menu #boutonDeconnexion > span{display:block!important;width:20px!important;height:20px!important;margin:0!important;position:static!important;}
html body #menu #boutonDeconnexion:hover{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;box-shadow:inset 0 -2px 0 var(--fz-accent);}`;
    css += `#menu span{filter:drop-shadow(0 0 calc(2px*var(--fz-glow)) ${accent});}#menu ul.menu_colonne a > span{transition:transform .15s;}#menu ul.menu_colonne li:hover a > span{transform:scale(1.12);}#menu_horizontal > li > a.boutonActif,#menu_horizontal > li > a:hover{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;box-shadow:inset 0 -2px 0 var(--fz-accent);color:#fff!important;}`;
    return css;
  };

