  // ---------- Icônes néon de l'encadré « Compte + » (remplacent la planche d'icônes du jeu) ----------
  // [sélecteur CSS, couleur ('A' = couleur d'accent du thème), taille en px, dessin SVG 24×24]
  const ANT = '<circle cx="12" cy="6.5" r="2.4"/><ellipse cx="12" cy="12" rx="2.1" ry="2.5"/><ellipse cx="12" cy="18.2" rx="2.9" ry="3.2"/><path d="M9.9 11L5.5 8.5M14.1 11l4.4-2.5M9.9 12.6L5 13.2M14.1 12.6l4.9.6M9.9 14L6.5 17.8M14.1 14l3.4 3.8M10.9 4.5L9.3 2.2M13.1 4.5l1.6-2.3"/>';
  const COMPTE_ICONS = [
    // Rangée d'outils
    ['a.boutonEnnemies', 'A', 20, '<path d="M12 3c-4.4 0-7.5 3-7.5 7 0 2.4 1 4 2.5 5v3.5h10V15c1.5-1 2.5-2.6 2.5-5 0-4-3.1-7-7.5-7z"/><circle cx="9" cy="10.5" r="1.7" fill="C"/><circle cx="15" cy="10.5" r="1.7" fill="C"/><path d="M12 13.2l-1 1.8h2zM10 18.5v2M12 18.5v2M14 18.5v2"/>'],
    ['a.boutonSimulateurChasse', 'A', 20, '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5" opacity=".6"/><path d="M12 12l6-6"/><circle cx="15.5" cy="15" r="1.2" fill="C"/>'],
    ['a.boutonSimulateurDuree', 'A', 20, '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2M10 2.5h4M12 2.5V6M18.5 7l1.5-1.5"/>'],
    ['a.boutonSimulateurFlood', 'A', 20, '<path d="M4 8.5h14M14.5 5L18 8.5 14.5 12M20 15.5H6M9.5 12L6 15.5 9.5 19"/>'],
    ['.contenu_boite_compte_plus a.boutonReine', 'A', 20, '<path d="M12 3.5c-3.6 0-6 5-6 9.5 0 3.6 2.6 6.5 6 6.5s6-2.9 6-6.5c0-4.5-2.4-9.5-6-9.5z"/><path d="M12 10v6M9 13h6"/>'],
    ['a.boutonListeAmis', 'A', 20, '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4" opacity=".7"/><path d="M15.5 13.6c3 0 5 2 5 4.9" opacity=".7"/>'],
    ['a.boutonBlocNote', 'A', 20, '<rect x="4.5" y="3" width="15" height="18" rx="2"/><path d="M8 8h8M8 11.5h8M8 15h4.5"/><path d="M15 16.5l3.5-3.5 1.5 1.5-3.5 3.5H15z" fill="C" stroke="none"/>'],
    // Lignes d'activité
    ['.mini_icone_ponte', '#d6ecff', 22, ANT],
    ['.mini_icone_construction', '#ffae42', 22, '<path d="M14.5 3.5a4 4 0 0 0-3.9 5.1L3.8 15.4a1.9 1.9 0 0 0 2.7 2.7l6.8-6.8a4 4 0 0 0 5.1-3.9l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4z"/><circle cx="5.2" cy="16.7" r=".7" fill="C"/>'],
    ['.mini_icone_recherche', '#b77cff', 22, '<path d="M9.5 3h5M10.5 3v6L5 18.5c-.6 1.2.2 2.5 1.6 2.5h10.8c1.4 0 2.2-1.3 1.6-2.5L13.5 9V3"/><path d="M7.5 14.5h9" opacity=".6"/><circle cx="10.5" cy="17.5" r="1" fill="C"/><circle cx="14" cy="16.5" r=".8" fill="C"/>'],
    ['.mini_icone_chasse', '#4dffd2', 22, '<ellipse cx="12" cy="13.5" rx="5" ry="6.5"/><path d="M12 7v13M9 4.5l1.5 2.5M15 4.5l-1.5 2.5M7 10.5L3.5 9M17 10.5l3.5-1.5M7 14H3M17 14h4M7.5 17.5l-3 2M16.5 17.5l3 2"/>'],
    ['.mini_icone_attaque', '#ff6b5a', 22, '<path d="M3.5 3.5l3 .6 8 8-2.4 2.4-8-8z"/><path d="M20.5 3.5l-.6 3-8 8-2.4-2.4 8-8z"/><path d="M11.5 16.8l5.3-5.3M7.2 11.5l5.3 5.3M15.3 15.3l3.2 3.2M8.7 15.3l-3.2 3.2"/><circle cx="19.3" cy="19.3" r="1.1" fill="C"/><circle cx="4.7" cy="19.3" r="1.1" fill="C"/>'],
    ['.mini_icone_convoi', '#5ce1ff', 22, '<path d="M3 10l5-3h8l5 3v5l-5 3H8l-5-3z"/><path d="M8 7v11M16 7v11" opacity=".6"/><path d="M10.5 12.5h4M12.5 10.5l2 2-2 2"/>'],
  ];
  const compteIconCss = (accent) => COMPTE_ICONS.map(([sel, col, size, body]) => {
    const c = col === 'A' ? accent : col;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body.replace(/"C"/g, `"${c}"`)}</svg>`;
    const target = sel.startsWith('a.') || sel.includes(' a.') ? `#boiteComptePlus .contenu_boite_compte_plus ${sel.replace('.contenu_boite_compte_plus ', '')} > span` : `#boiteComptePlus .contenu_boite_compte_plus ${sel}`;
    return `${target}{background:url("data:image/svg+xml,${encodeURIComponent(svg)}") center/${size}px ${size}px no-repeat!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${c})!important;}`;
  }).join('') + '.contenu_boite_compte_plus a > span{transition:transform .15s;}.contenu_boite_compte_plus a:hover > span{transform:scale(1.15);}';

