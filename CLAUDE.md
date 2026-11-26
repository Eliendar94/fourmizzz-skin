# Fourmizzz — Skin perso (userscript)

Skin cosmétique pour le jeu Fourmizzz (`https://*.fourmizzz.fr/*`), installé via Tampermonkey / Violentmonkey.
Thème par défaut : **Futuriste** (space-opera, HUD néon). Le fichier livré est `dist/fourmizzz-skin.user.js`, produit par `node build.js`.

## Règles absolues

1. **Ne jamais déclencher d'action de jeu.** Le script ne fait que de l'affichage. Interdit : envoyer un formulaire
   (`submit()`, `requestSubmit()`), cliquer à la place du joueur (`.click()` hors d'un gestionnaire de clic du joueur),
   requête d'écriture (POST / PUT / DELETE), lancer une ponte, une construction, une recherche, un convoi, une attaque,
   une récolte… Autorisé : les boutons « proxy » qui relaient **le clic du joueur** vers le bouton d'origine du jeu
   (caché mais conservé dans son formulaire, mêmes vérifications), remplir un champ quand le joueur clique sur une valeur
   proposée (sans envoyer), et lire des pages en GET (ex. Diplomatie, profil, mis en cache 1 h).
   `tools/verifier.js` contient un garde-fou qui refuse `submit()`, `requestSubmit()`, POST et les `.click()` automatiques.
2. **Répondre en français** (messages, commentaires de code, messages de commit).
3. **Vérifier avant chaque livraison** : `node tools/verifier.js` doit afficher « Tout est bon. »
   (syntaxe des deux variantes, pas de base64 dans `src/`, garde-fou ci-dessus). Pour un changement visuel,
   ajouter `--rendu` (Playwright) et regarder les captures (`CAPTURES=dossier node tools/verifier.js --rendu`).
4. **Conserver toutes les fonctionnalités existantes.** Une refonte (réorganisation, allègement) ne doit rien changer au rendu :
   comparer avec la version précédente via `--ref <ancien.user.js> --rendu`.
5. Incrémenter `@version` dans `src/entete.js` à chaque livraison, et noter la version dans les commentaires (`/* v1.59 : … */`),
   comme le fait tout l'historique du code.

## Arborescence

```
src/entete.js        bloc ==UserScript== (nom, version, @match, @grant)
src/js/NN-nom.js     une fonction (ou un groupe de fonctions liées) par fichier, assemblés dans l'ordre des numéros
src/css/<page>/*.css le CSS, rangé par page (reine/, construction/, laboratoire/, ressources/, convois/, attaque/,
                     armee/, alliance/, chats/, messagerie/, membre/, classements/, carte/, statistiques/, compteplus/)
                     + commun/ (toutes pages), futuriste/ (thème Futuriste), compat/ (scripts tiers), reglages/ (panneau 🎨)
assets/              images en fichiers normaux (.jpg ; .webp pour les 2 images d'origine en WebP, dont une transparente)
build.js             assemblage → dist/
tools/verifier.js    vérifications ; tools/fixtures/ = pages de test minimales pour le rendu
```

- Les fragments `src/js/*.js` sont le **corps d'une seule fonction** `(function () { 'use strict'; … })();` ajoutée par `build.js` :
  ils partagent la même portée (pas de `import`/`export`). Un nouveau fichier prend le numéro qui le place au bon endroit.
- `__CSS__('reine/file-ponte.css', 'reine/armee-et-pontes.css')` est remplacé par un littéral `` `…` `` contenant ces fichiers
  bout à bout. **L'ordre des fichiers dans l'appel = l'ordre de la cascade CSS**, ne pas le changer à la légère.
  Le CSS d'une page peut donc être réparti en plusieurs fichiers de son dossier (ajouts successifs v0.86 → v1.58) :
  chercher dans tout `src/css/<page>/`. Ne pas écrire `${…}` dans un fichier .css : il est échappé, pas interprété.
  Le CSS qui dépend des réglages (couleur d'accent, icônes SVG) reste en JS (`neonIconCss`, `forumCss`…).
- `__ASSET__('unites/naine.jpg')` est remplacé par l'image : `data:` base64 (build par défaut) ou `GM_getResourceURL()`
  (build `--resources <URL>`). Jamais de base64 écrit à la main dans `src/`.
- L'ordre d'assemblage du CSS final est dans `apply()` (`src/js/40-application-theme.js`).

## Construction

```
node build.js                          # dist/fourmizzz-skin.user.js : autonome, images embarquées (~1,7 Mo)
node build.js --resources <URL>/assets # dist/fourmizzz-skin.leger.user.js : images en @resource (~260 Ko)
node tools/verifier.js                 # vérifications (+ --ref fichier.user.js, + --rendu)
```

La variante `--resources` demande que `assets/` soit publié en HTTPS (ex. GitHub raw). Le gestionnaire de userscripts
télécharge les images une fois, à l'installation ; `?v=<empreinte>` force le re-téléchargement quand une image change.

## Style visuel

- **Bandeaux néon** : titres de page et de panneaux en bandeau lumineux centré, police Orbitron en capitales espacées,
  filets dégradés de part et d'autre (`.fz-band`, `.fz-band-title`, en-têtes `.boite_membre > h4`).
- **HUD** : panneaux en verre sombre (dégradé `rgba(14,30,52,.85)` → `rgba(8,14,28,.92)`), liseré accent,
  coins en équerre (`.fz-hero-c`), bannières illustrées en tête de page (`.fz-page-hero`), boîtes de gauche façon HUD,
  vignettes de niveau en bandeau collé au coin haut droit des photos.
- **Boutons métalliques** : `a.fz-build-btn` — dégradé vertical 3 tons (clair 0 % / franc 55 % / sombre 100 %),
  reflet balayant (`@keyframes fz-sweep`), lueur `drop-shadow` proportionnelle à `--fz-glow`, gris si désactivé.
- Icônes du jeu remplacées par des icônes néon SVG au trait (24×24), une couleur par usage, lueur `--fz-glow`.
- Toujours passer par les variables du thème : `--fz-bg`, `--fz-panel`, `--fz-panel2`, `--fz-border`, `--fz-text`,
  `--fz-accent`, `--fz-link`, `--fz-danger`, `--fz-radius`, `--fz-glow` (intensité néon réglable).
- Polices : Orbitron (titres, HUD) et Exo 2 (texte), chargées seulement pour les thèmes futuristes.

## Couleurs par page / par action

| Page / action | Couleur | Dégradé du bouton |
|---|---|---|
| Construction (bouton Construire, survol des bâtiments) | vert | `#34e07c → #14a454` |
| Laboratoire (bouton Rechercher, survol des recherches) | violet | `#b57cff → #8b3fe6 → #5f1fb0` |
| Reine — bouton Pondre, ouvrière | or / orange | `#ffd25a → #ff9f1c → #d96a00` |
| Reine — unités militaires | rouge | `#ff4d5e` |
| Reine — destination de ponte | TdC rouge `#ff4d5e`, Dôme orange `#ffb020`, Loge vert `#4ade80` | |
| Convois (Lancer le convoi), Message collectif (Envoyer) | bleu | `#5aa8ff → #2a6fe0 → #1747a8` |
| Attaque, simulateur de combat | rouge | `#ff6b78 → #d42a3a → #8e1220` |
| Floods (OptiFlood), simulateur de chasse | vert (style de base des boutons) | |
| Ressources (Récolter) | jaune-orangé | `#ffe066 → #ffb020` |
| Liens « Annuler » | croix rouge néon | |
| Classements | membres de mon alliance en vert, pactes bleu, guerres rouge, tags d'alliance orange `#e3a15f`, pseudos bleu `#5c9cff` | |
| Chats | mon alliance et alliés (pactes) en vert `#4ade80`, autres tags orange `#e3a15f` | |
| Temps de trajet (profil) | du vert (< 1 h) au rouge (> 10 h) | |

Thèmes prédéfinis (`PRESETS`, `src/js/01-themes-config.js`) : Nuit, Forêt, Océan, Fourmi rouge, Futuriste (défaut, accent `#39d0ff`),
Futuriste violet (accent `#b77cff`).

## Compatibilité

Le skin cohabite avec des scripts tiers (fmz-moderne et son shadow DOM, cixy, OptiFlood, « Profil joueur », plan de ponte…) :
leurs éléments sont restylés, jamais supprimés ; le texte d'origine masqué reste dans la page pour qu'ils puissent le lire.

## À venir

Version mobile (responsive) : phase suivante, non commencée.
