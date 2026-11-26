  // ---------- CSS du skin ----------
  const SKIN_CSS = __CSS__('commun/socle.css', 'commun/formulaires-survols.css', 'commun/mise-en-page.css', 'laboratoire/scripts-tiers.css', 'compat/fmz-moderne.css', 'commun/infobulles.css');

  const FUTUR_IMPORT = __CSS__('futuriste/polices.css');
  const FUTUR_CSS = __CSS__('futuriste/theme.css', 'futuriste/construction.css');
  // v1.60 : version mobile (règles sous 61em uniquement), ajoutée en dernier dans apply() pour primer
  const MOBILE_CSS = __CSS__('mobile/menu.css', 'mobile/boites-gauche.css');

