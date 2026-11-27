# Extension « anti-flash » (Chrome)

Tampermonkey lance parfois le skin **après** le premier affichage de la page : le skin d'origine apparaît alors un instant.
Cette mini-extension (CSS seul, aucun script, aucune permission) est appliquée par Chrome avant tout affichage :
elle garde la page invisible sur fond sombre jusqu'à ce que le skin soit en place (au plus 1,5 s).

Installation (une fois) :
1. Télécharger ce dossier `extension-anti-flash/` (ou le dépôt entier) sur l'ordinateur.
2. Ouvrir `chrome://extensions`, activer le **Mode développeur** (en haut à droite).
3. **Charger l'extension non empaquetée** → choisir le dossier `extension-anti-flash`.

À retirer si le skin est désinstallé (sinon chaque page attendrait 1,5 s avant de s'afficher).
