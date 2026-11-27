  // v1.69 : diagnostic du flash au chargement. On note quand le gestionnaire (Tampermonkey…) lance le script
  // et, une fois la page chargée, on l'écrit dans la console (F12) à côté du premier affichage du navigateur :
  // si le script démarre APRÈS le premier affichage, le skin d'origine est forcément visible un instant.
  const FZ_T0 = Math.round(performance.now()), FZ_ETAT0 = document.readyState, FZ_BODY0 = !!document.body;
  window.addEventListener('load', () => setTimeout(() => {
    const fp = performance.getEntriesByType('paint').find((p) => p.name === 'first-paint');
    const nav = performance.getEntriesByType('navigation')[0];
    console.info(`[fz-skin] script lancé à ${FZ_T0} ms (page : ${FZ_ETAT0}${FZ_BODY0 ? ', <body> déjà là' : ''}) ; premier affichage à ${fp ? Math.round(fp.startTime) + ' ms' : '?'} ; page lue à ${nav ? Math.round(nav.domContentLoadedEventEnd) + ' ms' : '?'}`
      + (!fp ? '' : FZ_T0 > fp.startTime ? ' → script lancé APRÈS le premier affichage : le gestionnaire l\'injecte en retard.' : ' → ordre correct.'));
  }, 0));
