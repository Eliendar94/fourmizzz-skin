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
  const CUSTOM_IMG_CSS = Object.entries(CUSTOM_IMG).map(([id, uri]) => `.photo_batiment#${id}{background:url("${uri}") center/cover no-repeat!important;filter:none!important;}`).join('');

