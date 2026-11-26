  // ---------- Icônes néon supplémentaires (page Ressources et encadrés) ----------
  const EXTRA_ICONS = [
    ['fleche_haut', 'A', 20, '<circle cx="12" cy="12" r="9"/><path d="M12 16.5v-9M8 11l4-4 4 4"/>'],
    ['croix', 'D', 20, '<circle cx="12" cy="12" r="9"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7"/>'],
    ['favicon', 'A', 16, '<path d="M20 12a8 8 0 0 1-14.2 5M4 12a8 8 0 0 1 14.2-5"/><path d="M18.5 3.5v3.8h-3.8M5.5 20.5v-3.8h3.8"/><circle cx="12" cy="12" r="2" fill="C"/>'],
    ['verrou', 'A', 14, '<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.3" fill="C"/>'],
  ];
  const extraIconCss = (c) => EXTRA_ICONS.map(([match, k, size, body]) => {
    const col = k === 'D' ? (c.danger || '#ff5470') : c.accent;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${col}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body.replace(/"C"/g, `"${col}"`)}</svg>`;
    return `#centre img[src*="${match}."]{content:url("data:image/svg+xml,${encodeURIComponent(svg)}")!important;width:${size}px!important;height:${size}px!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${col})!important;cursor:pointer;}`;
  }).join('');
  const RES_LAYOUT_CSS = __CSS__('ressources/mise-en-page.css', 'armee/garnison.css', 'messagerie/page.css');

