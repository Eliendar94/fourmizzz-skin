  // ---------- Messagerie : icônes néon de la barre d'outils ----------
  const MSG_ICONS = [
    ['outil', 'A', 18, '<path d="M14.5 3.5a4 4 0 0 0-3.9 5.1L3.8 15.4a1.9 1.9 0 0 0 2.7 2.7l6.8-6.8a4 4 0 0 0 5.1-3.9l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4z"/>'],
    ['new_message', 'A', 18, '<path d="M4 5h11v8H8.5L5 16.5V13H4z"/><path d="M19 10v8M15 14h8"/>'],
    ['bulle', 'A', 18, '<path d="M4 5h16v10.5H9.5L5 19.5v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>'],
    ['etoile', '#ffd84d', 18, '<path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8-4.3-4.1 5.9-.8z"/>'],
    ['archive', 'A', 18, '<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v10h14V9M10 13h4"/>'],
    ['folder', 'A', 18, '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'],
    ['more_options', 'A', 10, '<path d="M6 9l6 6 6-6"/>'],
    ['delete', 'D', 18, '<path d="M4 7h16M9 7V4.5h6V7M6 7l1 13h10l1-13M10 11v6M14 11v6"/>'],
    ['subject', 'A', 18, '<path d="M5 6h14M5 10h14M5 14h9M5 18h6"/>'],
    ['loupe', 'A', 18, '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>'],
  ];
  const msgIconCss = (c) => MSG_ICONS.map(([name, k, size, body]) => {
    const col = k === 'A' ? c.accent : k === 'D' ? (c.danger || '#ff5470') : k;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${col}" stroke-width="${size < 12 ? 3 : 1.8}" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
    return `#messagerie img[src*="/${name}."],#messagerie img[src^="${name}."]{content:url("data:image/svg+xml,${encodeURIComponent(svg)}")!important;width:${size}px!important;height:${size}px!important;vertical-align:middle!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${col})!important;}`;
  }).join('') + '#messagerie .option_gestion:hover img,#messagerie .bouton_messagerie:hover img{transform:scale(1.12);}#messagerie .option_gestion img,#messagerie .bouton_messagerie img{transition:transform .15s;}';

