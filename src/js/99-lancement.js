  // ---------- Lancement ----------
  /* v1.72 : lancement déplacé ici depuis 42-demarrage.js. Quand le gestionnaire lance le script après le chargement
     de la page (readyState ≠ 'loading', fréquent avec Tampermonkey), demarrer() s'exécutait tout de suite, avant
     l'évaluation des fragments suivants : leurs const (expressions régulières, tables…) étaient encore inaccessibles
     (« Cannot access … before initialization ») et onReady() s'arrêtait en cours de route (Messagerie : rien de coloré).
     Dernier fichier : tout est défini quand on démarre. */
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
