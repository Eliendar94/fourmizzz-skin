  // ---------- Images personnelles fournies par le joueur (remplacent l'illustration SVG) ----------
  const CUSTOM_IMG = {
    photo12: __ASSET__('batiments/salle-analyse.jpg'),
    photo1: __ASSET__('batiments/etable-cochenilles.jpg'),
    photo0: __ASSET__('batiments/etable-pucerons.jpg'),
    photo11: __ASSET__('batiments/loge-imperiale.jpg'),
    photo2: __ASSET__('batiments/champignonniere.jpg'), // Champignonnière
    photo8: __ASSET__('batiments/entrepot-nourriture.jpg'), // Entrepôt de Nourriture
    photo9: __ASSET__('batiments/entrepot-materiaux.jpg'), // Entrepôt de Matériaux
    photo5: __ASSET__('batiments/couveuse.jpg'), // Couveuse
    photo6: __ASSET__('batiments/solarium.jpg'), // Solarium
    photo7: __ASSET__('batiments/laboratoire.jpg'), // Laboratoire
    photo10: __ASSET__('batiments/dome.jpg'), // Dôme
    photo4: __ASSET__('batiments/caserne.jpg'), // Caserne
    photo3: __ASSET__('batiments/salle-combat.jpg'), // Salle de combat
  };
  /* v1.67 : images des recherches du Laboratoire (id du jeu → recherche, relevés sur laboratoire.php) */
  const RECHERCHE_IMG = {
    photo0: __ASSET__('recherches/technique-ponte.jpg'), // Technique de ponte
    photo1: __ASSET__('recherches/bouclier.jpg'), // Bouclier thoracique
    photo2: __ASSET__('recherches/armes.jpg'), // Armes
    photo3: __ASSET__('recherches/communication-animaux.jpg'), // Communication avec les animaux
    photo4: __ASSET__('recherches/vitesse-chasse.jpg'), // Vitesse de chasse
    photo5: __ASSET__('recherches/vitesse-attaque.jpg'), // Vitesse d'attaque
    photo6: __ASSET__('recherches/acide.jpg'), // Acide
    photo7: __ASSET__('recherches/poison.jpg'), // Poison
    photo8: __ASSET__('recherches/genetique.jpg'), // Génétique
    photo9: __ASSET__('recherches/architecture.jpg'), // Architecture
  };
  const CUSTOM_IMG_CSS = Object.entries(CUSTOM_IMG).map(([id, uri]) => `.photo_batiment#${id}{background:url("${uri}") center/cover no-repeat!important;filter:none!important;}`).join('')
    + Object.entries(RECHERCHE_IMG).map(([id, uri]) => `.photo_recherche#${id}{background:url("${uri}") center/cover no-repeat!important;filter:none!important;}`).join('');

