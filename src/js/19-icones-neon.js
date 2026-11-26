  // ---------- Icônes néon (remplacent les icônes du jeu) ----------
  // Chaque entrée : motif de l'URL de l'image d'origine, couleur, dessin SVG (viewBox 24×24, trait).
  const NEON_ICONS = [
    // Temps de construction : sablier
    ['icone_sablier', '#5ce1ff', '<path d="M6 3h12M6 21h12M7 3c0 5 4 6 5 9-1 3-5 4-5 9M17 3c0 5-4 6-5 9 1 3 5 4 5 9"/><path d="M9.5 18.5h5L12 15z" fill="C" stroke="none"/>'],
    // Temps restant : horloge
    ['horloge', '#5ce1ff', '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2.5"/><path d="M12 2v1.5M12 20.5V22M2 12h1.5M20.5 12H22" opacity=".6"/>'],
    // Matériaux : caisse / lingot hexagonal
    ['icone_bois', '#ffae42', '<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M4 7.4l8 4.6 8-4.6M12 12v9.2"/><path d="M8 5.1l8 4.6" opacity=".55"/>'],
    // Nourriture : capsule nutritive avec feuille
    ['icone_pomme', '#7dff9a', '<path d="M12 21c-4.5 0-7.5-3.4-7.5-7.6C4.5 9.6 7.2 7 10 7c1 0 1.5.4 2 .4s1-.4 2-.4c2.8 0 5.5 2.6 5.5 6.4 0 4.2-3 7.6-7.5 7.6z"/><path d="M12 7.4V5c0-1.6 1.3-2.6 3.2-2.6C15.2 4 14 5 12 5"/><path d="M8.5 13.5h7M9.5 16.5h5" opacity=".6"/>'],
    // Ouvrière : drone-fourmi
    ['icone_ouvriere', '#d6ecff', '<circle cx="12" cy="6.5" r="2.5"/><ellipse cx="12" cy="12" rx="2.2" ry="2.6"/><ellipse cx="12" cy="18.2" rx="3" ry="3.3"/><path d="M9.8 11L5 8.5M14.2 11L19 8.5M9.8 12.5L4.5 13M14.2 12.5L19.5 13M9.8 14L6 18M14.2 14L18 18M10.8 4.5L9 2M13.2 4.5L15 2"/>'],
    ['fourmi', '#d6ecff', '<circle cx="12" cy="6.5" r="2.5"/><ellipse cx="12" cy="12" rx="2.2" ry="2.6"/><ellipse cx="12" cy="18.2" rx="3" ry="3.3"/><path d="M9.8 11L5 8.5M14.2 11L19 8.5M9.8 12.5L4.5 13M14.2 12.5L19.5 13M9.8 14L6 18M14.2 14L18 18M10.8 4.5L9 2M13.2 4.5L15 2"/>'],
    // Terrain de chasse : planète en orbite
    ['icone_tdc', '#4dffd2', '<circle cx="12" cy="12" r="6"/><ellipse cx="12" cy="12" rx="10.5" ry="3.6" transform="rotate(-20 12 12)"/><path d="M7 10.5c2 1 8 1 10 0M7.5 14c2 .8 7 .8 9 0" opacity=".55"/>'],
    // Messages
    ['icone_enveloppe_combat', '#ff6b5a', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><path d="M13 12.5l-2 3.5h3l-2 3.5" stroke-width="1.4"/>'],
    ['icone_enveloppe_chasse', '#4dffd2', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><circle cx="17.5" cy="15.5" r="2.2"/>'],
    ['icone_enveloppe', '#5ce1ff', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/>'],
    // Vie : cœur + pulsation
    ['icone_coeur', '#ff5c8a', '<path d="M12 20.5S3.5 15 3.5 9.2C3.5 6.4 5.6 4.5 8 4.5c1.8 0 3.2 1 4 2.4.8-1.4 2.2-2.4 4-2.4 2.4 0 4.5 1.9 4.5 4.7C20.5 15 12 20.5 12 20.5z"/><path d="M5 11.5h4l1.5-2.5 2 5 1.5-2.5H19" stroke-width="1.3"/>'],
    // Attaque : réticule de visée
    ['icone_degat_attaque', '#ff8a3d', '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2" fill="C"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>'],
    // Défense : bouclier énergétique
    ['icone_degat_defense', '#5c9dff', '<path d="M12 2.5l8 3v6c0 5-3.6 8.6-8 10-4.4-1.4-8-5-8-10v-6z"/><path d="M12 6.5l4.5 1.7v3.5c0 2.8-2 4.9-4.5 5.8-2.5-.9-4.5-3-4.5-5.8V8.2z" opacity=".55"/>'],
    // Description complète : tablette de données
    ['livre', '#5ce1ff', '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 11.5h8M8 15h5"/><circle cx="12" cy="19" r=".6" fill="C"/>'],
    // Flèches de destination (Loge, etc.)
    ['fleche-champs-droite', '#5ce1ff', '<path d="M5 6l6 6-6 6M12 6l6 6-6 6"/>'],
  ];
  const neonIconCss = (accent) => NEON_ICONS.map(([match, color, body]) => {
    const c = match === 'icone_sablier' || match === 'horloge' || match === 'livre' || match === 'fleche-champs-droite' || match === 'icone_enveloppe' ? accent : color;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="${c}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body.replace(/"C"/g, `"${c}"`)}</svg>`;
    return `img[src*="${match}."]{content:url("data:image/svg+xml,${encodeURIComponent(svg)}")!important;object-fit:contain;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${c})!important;}`;
  }).join('') + 'img[src*="livre."]{width:20px!important;height:20px!important;vertical-align:middle;}';

