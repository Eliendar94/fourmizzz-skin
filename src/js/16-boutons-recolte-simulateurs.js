  // Page Ressources : bouton « Valider » (répartition des ouvrières) → « Récolter », jaune-orangé, format compact
  function enhanceHarvestButton() {
    proxyActionButton(document.querySelector('#boite_ouvriere input#ChangeRessource[type="submit"]'), 'fz-recolte', 'fz-recolte-wrap', 'Récolter');
  }
  // Simulateurs de combat et de chasse : bouton « Fight ! » (calcul de simulation, aucune action de jeu)
  function enhanceSimButtons() {
    // combat = rouge (style « Attaquer »), chasse = vert (couleur de base des boutons d'action)
    const chasse = /simulateurChasse/i.test(location.pathname);
    document.querySelectorAll('#centre input[type="submit"]').forEach(i => {
      if (!/^\s*fight/i.test(i.value)) return;
      if (chasse) proxyActionButton(i, 'fz-sim-chasse', 'fz-sim-wrap fz-sim-chasse-wrap', 'Simuler chasse');
      else proxyActionButton(i, 'fz-attack', 'fz-sim-wrap fz-attack-wrap', 'Simuler combat');
    });
  }
