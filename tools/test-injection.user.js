// ==UserScript==
// @name         Fourmizzz — test d'injection (temporaire)
// @namespace    fourmizzz-skin-test
// @version      1
// @description  Mesure seulement quand Tampermonkey lance un script minuscule (aucun effet sur la page). À supprimer après le test.
// @match        https://*.fourmizzz.fr/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
// v1.69 : script de test temporaire. Compare avec la ligne [fz-skin] : si ce script minuscule démarre à l'heure
// et pas le skin, c'est la taille du skin (images @resource) qui retarde Tampermonkey ; si les deux sont en retard,
// c'est un réglage de Tampermonkey / Chrome.
(() => {
  const t0 = Math.round(performance.now()), etat = document.readyState;
  addEventListener('load', () => setTimeout(() => {
    const fp = performance.getEntriesByType('paint').find((p) => p.name === 'first-paint');
    console.info(`[fz-test] script minuscule lancé à ${t0} ms (page : ${etat}) ; premier affichage à ${fp ? Math.round(fp.startTime) + ' ms' : '?'}`);
  }, 0));
})();
