  const onReady = () => {
    buildPanel();
    if (cfg.enabled && cfg.buildBtn) { enhanceBuildButtons(); enhanceConvoyButton(); }
    if (cfg.enabled && /commerce\.php/i.test(location.pathname)) { convoyInfo(); setInterval(convoyInfo, 3000); }
    if (cfg.enabled && cfg.buildBtn) { enhanceSimButtons(); enhanceHarvestButton(); enhanceCollectiveSend(); }
    // bouton « Nouvelle note » (bloc-note) : même bouton néon que « Nouveau sujet » du forum
    if (cfg.enabled) document.querySelectorAll('#centre img[src*="nouveau_sujet_gauche"]').forEach(img => img.parentElement && img.parentElement.classList.add('fz-newtopic'));
    if (cfg.enabled && cfg.buildBtn && document.getElementById('formulaireChoixArmee')) { enhanceAttackButtons(); setInterval(enhanceAttackButtons, 1000); }
    if (cfg.enabled && document.querySelector('#centre .boite_membre')) { colorTravelTime(); easterEggXatak(); }
    if (cfg.enabled) compteplusPoster();
    if (cfg.enabled) { markCancelLinks(); setInterval(markCancelLinks, 2000); } // certaines listes changent sans recharger la page
    if (cfg.enabled && document.querySelector('#centre > h4 + table.tableau_leger')) {
      // v1.14 : plus de couleur par type d'unité dans le tableau des pontes en cours (couleur uniforme demandée)
      const tick = () => { formatPonteTimes(); };
      tick(); setInterval(tick, 1000); // le jeu met à jour les comptes à rebours chaque seconde
    }
    fzCompat();
    if (cfg.enabled) mobileLeftBoxesButton(); // v1.60 : bouton des boîtes de gauche, petit écran seulement
    if (cfg.enabled) { markSubheads(); setTimeout(markSubheads, 1500); }
    if (cfg.enabled) { colorPonteNames(); colorPonteDestinations(); }
    if (cfg.enabled && (document.getElementById('nouveauxMessages') || /chat\.php|alliance/i.test(location.pathname))) { colorChatTags(); setInterval(colorChatTags, 1000); }
    // v1.40 : titre du Chat général en bandeau (le Chat alliance est traité en CSS)
    if (cfg.enabled && /chat\.php/i.test(location.pathname)) { const h = [...document.querySelectorAll('#centre h2')].find(x => /^chat/i.test(x.textContent.trim())); if (h) h.classList.add('fz-band-title'); }
    if (cfg.enabled && /reine/i.test(location.pathname)) { ponteArmyBadges(); setInterval(ponteArmyBadges, 1000); armyCopyButton(); }
    if (cfg.enabled && /reine/i.test(location.pathname)) reineDescriptionButtons(); // v1.65 : mobile, description repliable
    if (cfg.enabled && /armee/i.test(location.pathname)) { splitArmyStats(); setTimeout(() => { splitArmyStats(); syncArmyStatsCols(); }, 1500); window.addEventListener('resize', syncArmyStatsCols); }
    if (cfg.enabled && /alliance/i.test(location.pathname)) { markMeInMembers(); setInterval(() => { markMeInMembers(); placeCollectiveSmileys(); if (cfg.buildBtn) enhanceCollectiveSend(); }, 700); placeCollectiveSmileys(); }
    if (cfg.enabled) { batimentsEffets(); setTimeout(batimentsEffets, 1500); } // v1.66 : effets en vert, Info+ sur téléphone
    if (cfg.enabled && document.querySelector('#centre span.niveau_amelioration')) { levelBadges(); setInterval(levelBadges, 1500); waitTimes(); setInterval(waitTimes, 1500); }
    if (cfg.enabled) { terrainRing(); warehouseRings(); setTimeout(warehouseRings, 1500); setTimeout(warehouseRings, 4000); setInterval(warehouseRings, 2000); }
    if (cfg.enabled && document.getElementById('nbNourriture')) { productionTable(); setInterval(productionTable, 1000); }
    if (cfg.enabled) moveReturnTimer();
    if (cfg.enabled) { resourceHero(); setTimeout(resourceHero, 1500); pageHero(); }
    if (cfg.enabled) { markArmyHead(); colorArmyUnits(); }
    if (cfg.enabled) { wrapChat(); if (document.querySelector('.chatAlliance, #forum')) { lightenChat(); setInterval(lightenChat, 1500); } }
    // le tableau des membres est construit après le chargement par un script tiers : on le surveille
    if (cfg.enabled && /alliance/i.test(location.pathname)) { fixMembers(); setInterval(fixMembers, 1000); styleForum(); setInterval(styleForum, 1000); }
    if (cfg.enabled && document.getElementById('messagerie')) { tagMessages(); setInterval(tagMessages, 1500); colorCombatReports(); new MutationObserver(colorCombatReports).observe(document.getElementById('messagerie'), { childList: true, subtree: true }); }
    // (v1.71 : rapports de combat colorés dès leur ouverture ; la liste change sans recharger la page)
    if (cfg.enabled) simulateurCombat(); // v1.72 : rapport du simulateur de combat (Compte +)
    if (cfg.enabled && /fourmiliere\.php/i.test(location.pathname)) fourmiliereMegastructure(); // v1.68 : mégastructure spatiale
    new MutationObserver(fzCompat).observe(document.body, { childList: true });
    setInterval(fzCompat, 2000);
  };
  // v1.69 : le voile tombe une fois le skin construit ; on laisse aux polices (Orbitron, Exo 2) 250 ms au plus
  // pour arriver (en cache après la première page), puis on attend l'image suivante pour qu'elle soit peinte d'un coup.
  const demarrer = () => {
    try { onReady(); } finally {
      const fin = () => requestAnimationFrame(() => requestAnimationFrame(leverVoile));
      Promise.race([document.fonts ? document.fonts.ready : null, new Promise((r) => setTimeout(r, 250))]).then(fin, fin);
    }
  };
  // v1.72 : le lancement est dans 99-lancement.js, après tous les fragments (voir ce fichier)
