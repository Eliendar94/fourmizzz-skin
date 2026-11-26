# Intégrer le skin dans un autre userscript

Cette notice s'adresse à un développeur qui veut reprendre le skin « Fourmizzz — Skin perso » (v1.64) dans son propre
userscript, par exemple un script qui regroupe plusieurs outils du jeu. Elle décrit comment le code est organisé, ce dont
il a besoin pour tourner, ce qui peut entrer en conflit avec un autre script, et deux façons de l'intégrer.

Les règles de travail du projet (style, couleurs, vérifications) sont dans [CLAUDE.md](CLAUDE.md).

---

## 1. En bref

- Le skin est **purement cosmétique** : il ajoute du CSS, réorganise et décore des éléments de la page, et ne déclenche
  jamais d'action de jeu (voir §6). Il ne dépend d'aucune bibliothèque.
- Tout le code tient dans **une seule fonction** `(function () { 'use strict'; … })();` : aucune variable globale JavaScript
  n'est créée.
- Il a besoin de `GM_getValue` / `GM_setValue` (réglages), et de `GM_getResourceURL` pour la variante légère.
- Il s'exécute idéalement en `@run-at document-start` (le CSS est posé avant l'affichage de la page, pas de « flash »).
- Deux fichiers livrables, produits par `build.js` :

| Fichier | Images | Taille | En-têtes en plus |
|---|---|---|---|
| `dist/fourmizzz-skin.user.js` (`node build.js`) | embarquées en `data:` base64 | ~1,7 Mo | aucun |
| `dist/fourmizzz-skin.leger.user.js` (`npm run build:leger`) | `@resource` sur raw.githubusercontent.com | ~240 Ko | `@grant GM_getResourceURL`, 28 `@resource`, `@downloadURL`, `@updateURL` |

---

## 2. Architecture du dépôt

```
src/entete.js        bloc ==UserScript== (nom, version, @match, @run-at, @grant)
src/js/NN-nom.js     fragments JS, assemblés dans l'ordre de leur numéro (01 → 43)
src/css/<page>/*.css CSS rangé par page, inséré dans le JS par __CSS__(…)
assets/              28 images (.jpg, 2 .webp), insérées par __ASSET__(…)
build.js             assemblage → dist/ (Node ≥ 18, aucune dépendance)
tools/verifier.js    vérifications (syntaxe, garde-fou « aucune action de jeu », rendu Playwright)
tools/fixtures/      pages de test minimales (Reine, Armée, Construction, Ressources, Membre, Messagerie, Compte+)
```

### 2.1 Les fragments JS (`src/js/`)

Les fichiers de `src/js/` **ne sont pas des modules** : ce sont des morceaux du corps de la même fonction, collés bout à
bout. Ils partagent donc la même portée (pas d'`import` / `export`) : une constante déclarée dans `01-…` est visible dans
`42-…`. L'ordre des numéros compte, parce qu'une `const` doit être déclarée avant d'être lue au premier passage.

Deux marqueurs sont remplacés au build :

- `__CSS__('reine/file-ponte.css', 'reine/armee-et-pontes.css')` → un littéral `` `…` `` contenant ces fichiers dans cet
  ordre (l'ordre des arguments est l'ordre de la cascade CSS) ;
- `__ASSET__('unites/naine.jpg')` → `'data:image/jpeg;base64,…'` (build par défaut) ou `GM_getResourceURL('unites-naine')`
  (build `--resources`). Le nom de ressource est le chemin sans extension, `/` remplacé par `-`.

Le déroulement est toujours le même :

1. **01 à 39** déclarent des constantes (CSS, icônes SVG, tables de couleurs) et des fonctions, sans rien exécuter.
2. **40-application-theme.js** crée `<style id="fz-skin">`, y assemble tout le CSS (`apply()`) et l'insère tout de suite
   dans `document.head` (ou `<html>` si `<head>` n'existe pas encore, en `document-start`).
3. **41-panneau-reglages.js** déclare le panneau de réglages 🎨.
4. **42-demarrage.js** définit `onReady()`, lancé au `DOMContentLoaded` (ou tout de suite si la page est déjà chargée) :
   c'est lui qui appelle chaque fonction de décoration, **page par page** (tests sur `location.pathname` ou sur la présence
   d'un élément), et qui pose les minuteries de rafraîchissement.
5. **43-mobile-boites-gauche.js** est appelé par `onReady()` (bouton des boîtes de gauche, écrans < 61em seulement).

### 2.2 Rôle de chaque fragment

| Fichier | Rôle |
|---|---|
| `01-themes-config.js` | Thèmes prédéfinis (`PRESETS` : Nuit, Forêt, Océan, Fourmi rouge, Futuriste, Futuriste violet), réglages par défaut (`DEFAULT`), lecture / écriture des réglages (`GM_getValue('fzSkin')`) |
| `02-css-skin.js` | CSS commun (`SKIN_CSS`), polices et thème Futuriste (`FUTUR_IMPORT`, `FUTUR_CSS`), CSS mobile (`MOBILE_CSS`) |
| `03-batiments-station-svg.js` | Illustrations SVG « station spatiale » des bâtiments |
| `04-batiments-photos.js` | Photos des bâtiments (remplacent le SVG quand elles existent) |
| `05-boutons-action.js` | Boutons « proxy » métalliques (`proxyActionButton`) : convoi, attaque |
| `06-compteplus-affiche.js` | Affiche de la page Compte+ |
| `07-membre-profil.js` | Profil : temps de trajet coloré (vert → rouge), carte « XaTaK » |
| `08-reine-couleurs-ponte.js` | Reine : couleur des noms d'unités et des destinations de ponte |
| `09-niveaux-et-attente.js` | Construction / Laboratoire : vignettes de niveau, temps d'attente |
| `10-alliance-ma-ligne.js` | Alliance : ma ligne surlignée, bouton « Ajouter les membres » |
| `11-armee-statistiques.js` | Armée : statistiques déplacées dans un second panneau |
| `12-reine-armee.js` | Reine : photos des unités, vignette « armée + file de ponte », bouton de copie de l'armée |
| `13-message-collectif.js` | Message collectif : bouton d'envoi (proxy), boîte de smileys |
| `14-chats-tags-alliance.js` | Chats : tags d'alliance colorés (lit le profil et la Diplomatie en GET, cache 1 h) |
| `15-convois-capacite.js` | Convois : panneau « Capacité de convoi », clic sur un montant = remplit le champ (sans envoyer) |
| `16-boutons-recolte-simulateurs.js` | Boutons « Récolter » et « Fight ! » des simulateurs |
| `17-liens-annuler.js` | Liens « Annuler » marqués d'une croix rouge |
| `18-bouton-construire.js` | Boutons Construire / Rechercher / Pondre (proxy du bouton d'origine) |
| `19-icones-neon.js` | Icônes néon SVG remplaçant les icônes du jeu |
| `20-icones-compteplus.js` | Icônes néon de l'encadré Compte + |
| `21-icones-menu.js` | Icônes néon du menu principal |
| `22-compat-shadow-dom.js` | Compatibilité fmz-moderne et cixy (style injecté dans leur shadow DOM) |
| `23-ponte-couleurs-unites.js` | Couleur de chaque unité dans la file de ponte |
| `24-ponte-temps.js` | File de ponte : temps alignés en colonnes |
| `25-sous-titres.js` | Sous-titres des encadrés |
| `26-ressources-anneaux.js` | Ressources : anneaux terrain exploité et remplissage des entrepôts |
| `27-ressources-production.js` | Ressources : tableau Production / Pertes par jour |
| `28-ressources-paysage.js` | Ressources : paysage derrière les anneaux |
| `29-bannieres-pages.js` | Bannières illustrées en tête de page (Construction, Laboratoire) |
| `30-ressources-retour-ouvrieres.js` | Ressources : minuterie « Les ouvrières rentreront dans » déplacée |
| `31-css-anneaux-bannieres.js` | CSS des anneaux et des bannières |
| `32-icones-extra-ressources.js` | Icônes néon supplémentaires, mise en page Ressources |
| `33-armee-en-tete.js` | Armée : ligne d'en-tête, couleurs des unités |
| `34-messagerie-tags.js` | Messagerie : vignette de type devant chaque message |
| `35-messagerie-icones.js` | Messagerie : icônes de la barre d'outils |
| `36-forum-alliance.js` | Forum d'alliance (et `rgbToHsl`, partagé avec le chat) |
| `37-alliance-membres.js` | Page Membres de l'alliance |
| `38-chats-panneau.js` | Chats : panneau englobant, couleurs trop sombres éclaircies |
| `39-icones-compteplus-sous-pages.js` | Icônes des sous-pages Compte+ |
| `40-application-theme.js` | Variables `--fz-*`, `<style id="fz-skin">`, `apply()` (ordre final du CSS) |
| `41-panneau-reglages.js` | Bouton 🎨 et panneau de réglages |
| `42-demarrage.js` | `onReady()` : appels page par page, minuteries, `MutationObserver` |
| `43-mobile-boites-gauche.js` | Bouton des boîtes de gauche sur téléphone |

### 2.3 Le CSS (`src/css/`)

Rangé par page : `reine/`, `construction/`, `laboratoire/`, `ressources/`, `convois/`, `attaque/`, `armee/`, `alliance/`,
`chats/`, `messagerie/`, `membre/`, `classements/`, `carte/`, `statistiques/`, `compteplus/`, plus :

- `commun/` : toutes les pages (socle, formulaires, boîtes de gauche HUD, boutons d'action, bannières…) ;
- `futuriste/` : thème Futuriste (`polices.css` contient l'`@import` Google Fonts d'Orbitron et Exo 2) ;
- `compat/` : scripts tiers (fmz-moderne, cixy) ;
- `reglages/` : panneau 🎨 ;
- `mobile/` : règles sous `@media screen and (max-width:61em)` (ou 41em), ajoutées en dernier pour primer.

Le CSS qui dépend des réglages (couleur d'accent, icônes SVG colorées, forum) est généré en JS (`neonIconCss(cfg)`,
`forumCss(cfg)`…). L'ordre final de la cascade est dans `apply()` (`40-application-theme.js`).

Les couleurs passent toutes par des variables CSS posées sur `:root` : `--fz-bg`, `--fz-panel`, `--fz-panel2`,
`--fz-border`, `--fz-text`, `--fz-accent`, `--fz-link`, `--fz-danger`, `--fz-radius`, `--fz-glow`, `--fz-font`… Un autre
script peut donc s'aligner sur le thème en les réutilisant (`color: var(--fz-accent)`).

### 2.4 Les images (`assets/`)

`bannieres/` (3), `batiments/` (13), `unites/` (15), `compteplus/affiche.webp`, `membre/carte-xatak.webp`.
Elles doivent rester identiques octet pour octet (ne pas les ré-encoder ni les faire passer par un outil qui ajoute
des métadonnées).

---

## 3. Construire

Node ≥ 18, aucune installation (`npm install` inutile) :

```
node build.js            # dist/fourmizzz-skin.user.js : autonome, images embarquées (~1,7 Mo)
npm run build:leger      # dist/fourmizzz-skin.leger.user.js : images en @resource (~240 Ko)
node build.js --brut     # sans allègement (commentaires et indentation gardés), pour déboguer
node tools/verifier.js   # doit afficher « Tout est bon. »
```

`npm run build:leger` revient à `node build.js --resources https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/`.
On peut passer une autre adresse pour héberger les images ailleurs (voir §5).

Par défaut, le script livré est allégé (commentaires et blancs retirés, retours à la ligne du JS conservés) ; les sources
restent commentées.

`build.js` s'utilise aussi comme module :

```js
const { build } = require('./build.js');
const code = build();                                         // variante autonome (texte complet, en-tête compris)
const leger = build({ resources: 'https://…/assets/' });      // variante légère
```

---

## 4. En-têtes Tampermonkey nécessaires

En-tête du skin (`src/entete.js`) :

```
// @match        https://*.fourmizzz.fr/*
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
```

Variante légère, en plus (ajouté par `build.js`) :

```
// @grant        GM_getResourceURL
// @resource     batiments-salle-analyse https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/salle-analyse.jpg?v=6b3ba9a6
// … (une ligne par image, 28 au total)
// @downloadURL  https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/dist/fourmizzz-skin.leger.user.js
// @updateURL    https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/dist/fourmizzz-skin.leger.user.js
```

Ce dont le skin se sert, et pourquoi :

| API / accès | Usage |
|---|---|
| `GM_getValue` / `GM_setValue` | Réglages du panneau 🎨, clé unique `fzSkin` (JSON) |
| `GM_getResourceURL` | Variante légère : adresse des images téléchargées par le gestionnaire |
| `GM_info` (facultatif) | Numéro de version affiché dans le panneau, ignoré s'il n'existe pas |
| `localStorage` (clé `fzDiplo`) | Cache 1 h de mon tag d'alliance et des pactes, pour colorer les chats |
| `fetch` en GET, même origine | `Membre.php?Pseudo=…` et la page Diplomatie (lecture seule) ; pas besoin de `@connect` |
| `fonts.googleapis.com` | `@import` CSS des polices Orbitron et Exo 2, thèmes Futuristes seulement |

**`@grant none` ne suffit pas** : sans `GM_getValue` / `GM_setValue`, les réglages ne sont ni relus ni enregistrés (le skin
retombe sur les réglages par défaut et le panneau 🎨 plante au premier changement), et la variante légère n'a plus
d'images. Si le script hôte tourne en `@grant none`, voir le petit adaptateur au §7.2.

**`@run-at`** : en `document-idle` ou `document-end`, le skin fonctionne quand même (`onReady()` détecte une page déjà
chargée), mais la page s'affiche d'abord sans le skin pendant un instant.

---

## 5. Images sur raw.githubusercontent.com

Dans la variante légère, le gestionnaire de userscripts télécharge chaque `@resource` **une fois, à l'installation** (et à
chaque mise à jour du script), puis les sert depuis son cache local via `GM_getResourceURL`. Le jeu ne fait donc aucune
requête vers GitHub pendant la partie.

- Le dépôt `Eliendar94/fourmizzz-skin` doit rester **public** : une image privée est illisible pour le gestionnaire.
- `?v=<empreinte>` (8 premiers caractères du SHA-1 de l'image) change quand l'image change, ce qui force le
  re-téléchargement.
- Une image référencée doit être **sur `main`** avant qu'un script qui la cite soit distribué (sinon 404 à l'installation).
- Pour ne pas dépendre de ce dépôt, copier `assets/` ailleurs (son propre dépôt, par exemple) et construire avec
  `node build.js --resources https://raw.githubusercontent.com/<compte>/<dépôt>/main/assets/`. Si l'adresse ne se termine
  pas par `/assets/`, `build.js` n'ajoute pas de `@downloadURL` / `@updateURL`.
- La variante autonome (images en base64) n'a besoin d'aucun réseau, au prix de ~1,7 Mo.

---

## 6. Règle absolue : aucune action de jeu

Le skin ne fait que de l'affichage. Il n'envoie **jamais** de formulaire (`submit()`, `requestSubmit()`), ne fait
**aucune** requête d'écriture (POST, PUT, DELETE), ne clique jamais à la place du joueur et ne lance ni ponte, ni
construction, ni recherche, ni convoi, ni attaque, ni récolte.

Ce qui est autorisé, et comment c'est fait :

- **Boutons « proxy »** (Construire, Rechercher, Pondre, Lancer le convoi, Attaquer, Récolter, Envoyer) : le bouton
  d'origine du jeu est **caché mais laissé dans son formulaire** ; le bouton du skin relaie **le clic du joueur** vers lui
  (`.click()` uniquement dans un gestionnaire de clic). Le jeu fait donc ses vérifications habituelles. Le bouton du skin
  suit le texte, l'état désactivé et la visibilité du bouton d'origine.
- **Remplir un champ** quand le joueur clique sur une valeur proposée (montants livrables des convois), sans envoyer.
- **Lire des pages en GET** (profil, Diplomatie), mises en cache 1 h.

`tools/verifier.js` contient un garde-fou qui refuse `.submit(`, `requestSubmit(`, `method: 'POST'` (ou PUT / DELETE)
et tout `.click()` qui n'est pas sur la même ligne qu'un `addEventListener('click'`. Si le skin est fondu dans un script qui,
lui, automatise des actions, garder cette séparation : les parties « skin » doivent rester vérifiables à part.

---

## 7. Points d'attention pour l'intégration

### 7.1 Noms réservés par le skin

Aucune variable globale JavaScript. Tout ce qui est visible de l'extérieur commence par `fz` :

| Type | Noms |
|---|---|
| Identifiants DOM | `#fz-skin` (style principal), `#fz-skin-btn`, `#fz-skin-panel` (réglages), `#fz-boites-btn` (mobile), `#fz-shadow` (style injecté dans les shadow DOM tiers) |
| Classes | ~150 classes `fz-…` (`fz-band`, `fz-build-btn`, `fz-page-hero`…), plus `html.fz-has-bg` et `html.fz-boites-ouvertes` |
| Variables CSS | `--fz-…` sur `:root` |
| Stockage | `GM_getValue('fzSkin')`, `localStorage.fzDiplo` |
| Animations | `@keyframes fz-…` (`fz-sweep`…) |

→ **Ne pas utiliser le préfixe `fz` dans le script hôte**, pour éviter toute collision.

### 7.2 Script hôte en `@grant none`

Le skin appelle `GM_getValue`, `GM_setValue` et (variante légère) `GM_getResourceURL`. Si le script hôte ne peut pas les
accorder, placer avant le code du skin un adaptateur, par exemple :

```js
const GM_getValue = (k, d) => { const v = localStorage.getItem('gm_' + k); return v === null ? d : v; };
const GM_setValue = (k, v) => localStorage.setItem('gm_' + k, v);
```

La variante légère ne peut pas fonctionner sans `GM_getResourceURL` : prendre alors la variante autonome (images en base64).

### 7.3 Ordre d'exécution

- Le `<style id="fz-skin">` est ajouté **dès l'exécution** du skin ; les décorations attendent le `DOMContentLoaded`.
- Le skin restyle le jeu en profondeur (souvent avec `!important`) : les éléments que le script hôte insère **dans** la page
  du jeu (`#centre`, tableaux, boutons, boîtes de gauche) héritent du thème. Pour qu'une interface garde son propre style,
  la mettre dans un shadow DOM ou lui donner des sélecteurs plus précis. Inversement, un CSS hôte injecté après celui du
  skin peut l'écraser.
- Si le script hôte injecte du CSS qui doit l'emporter, l'ajouter **après** `#fz-skin` dans `<head>`.

### 7.4 Le skin modifie le DOM (sans rien supprimer)

- Des éléments sont **déplacés** : statistiques de l'Armée dans un second panneau, minuterie de retour des ouvrières,
  lignes d'avertissement dans la bannière, chat englobé dans un panneau, smileys du message collectif.
- Des textes sont **remplacés à l'affichage** (niveaux en vignettes, temps de ponte en colonnes, « Après pontes » en
  vignette) : le texte d'origine **reste dans la page, masqué**, pour que les autres scripts puissent toujours le lire.
- Les boutons d'origine du jeu sont **cachés, jamais retirés** : un script qui les cherche (ou les clique) les trouve
  toujours dans leur formulaire.
- Un script hôte qui repère les éléments par leur **position** (`:nth-child`, `nextSibling`) plutôt que par un sélecteur
  peut être gêné par ces déplacements ; mieux vaut viser les identifiants et classes du jeu.

### 7.5 Minuteries et observateurs

Le jeu et les scripts tiers réécrivent la page sans la recharger ; le skin repasse donc régulièrement :
17 `setInterval` (de 0,7 s à 3 s selon la page, la plupart limités à une page précise) et un `MutationObserver` sur les
enfants directs de `<body>`. Les fonctions sont idempotentes (elles ne refont rien si l'élément est déjà traité), ce qui
évite les boucles avec un autre script qui réécrit les mêmes zones. Si le script hôte reconstruit des zones en permanence,
le skin les re-décore à chaque passage : c'est voulu.

### 7.6 Interface du skin

- Le bouton 🎨 (`#fz-skin-btn`, fixe en bas à gauche, `z-index: 99999`) ouvre le panneau des réglages ; vérifier qu'il ne
  recouvre pas un bouton du script hôte.
- Sur téléphone (< 61em), `#fz-boites-btn` est ajouté en tête de la barre de menu du jeu.
- Le réglage « Activé » du panneau coupe tout le CSS du skin.

### 7.7 Scripts tiers déjà gérés

Le skin cohabite avec fmz-moderne (et son shadow DOM), cixy, OptiFlood, « Profil joueur », le plan de ponte… : leurs
éléments sont restylés, jamais supprimés (`22-compat-shadow-dom.js`, `src/css/compat/`, `laboratoire/scripts-tiers.css`).
Si le script hôte reprend l'un de ces scripts, le rendu devrait déjà être correct.

---

## 8. Deux façons d'intégrer

### Option A — Copier le build tel quel (le plus simple)

1. Construire : `node build.js` (autonome) ou `npm run build:leger` (images en `@resource`).
2. Dans le fichier produit, **reporter l'en-tête** dans celui du script hôte :
   `@match https://*.fourmizzz.fr/*` (ou plus large), `@run-at document-start`, `@grant GM_getValue`, `@grant GM_setValue`,
   et pour la variante légère `@grant GM_getResourceURL` et **toutes** les lignes `@resource`.
3. **Ne pas reprendre `@downloadURL` ni `@updateURL`** : sinon Tampermonkey remplacerait le script hôte par le skin à la
   première mise à jour.
4. Coller tel quel le bloc `(function () { 'use strict'; … })();` dans le script hôte, de préférence en premier (pour que
   le CSS soit posé au plus tôt). Il est autonome et ne touche à aucune variable du script hôte.
5. Pour une nouvelle version du skin : reconstruire et remplacer le bloc.

Avantages : aucune adaptation, rendu identique à la version publiée, mises à jour par simple remplacement.
Limites : on prend tout le skin ; pour retirer une fonctionnalité, il faut passer par le panneau 🎨 ou par l'option B.

Ne pas copier-coller le script depuis un navigateur : ses lignes sont très longues et facilement tronquées
(« Unexpected end of input »). Copier le fichier lui-même.

### Option B — Reprendre les modules (sur mesure)

1. Copier `src/`, `assets/`, `build.js` (et `tools/` pour les vérifications) dans le dépôt du script hôte, ou suivre ce
   dépôt en sous-module / `git subtree` pour récupérer les nouvelles versions.
2. Adapter l'assemblage : appeler `build()` depuis le build du script hôte et retirer l'en-tête (tout ce qui précède
   `(function () {`), ou reprendre la logique de `build.js` (concaténation des fragments, remplacement de `__CSS__` et
   `__ASSET__`) dans son propre outil.
3. Garder **les fragments ensemble, dans une seule fonction et dans l'ordre des numéros** : ils partagent la même portée.
   Les envelopper dans leur propre IIFE évite toute fuite vers le code hôte.
4. Pour **retirer une fonctionnalité** : supprimer son appel dans `onReady()` (`42-demarrage.js`) et, s'il y en a, son CSS
   dans `apply()` (`40-application-theme.js`). On peut ensuite supprimer le fragment s'il n'est plus utilisé nulle part
   (chercher ses fonctions et constantes avec `grep`).
5. Pour **reprendre le thème** dans les outils du script hôte : utiliser les variables `--fz-*` et les classes existantes
   (`fz-band`, `fz-build-btn`…).
6. Relancer `node tools/verifier.js` (et `--rendu` si Playwright est disponible) : le garde-fou « aucune action de jeu » et
   la comparaison de rendu (`--ref <ancien.user.js> --rendu`) restent valables sur le code assemblé.

Avantages : on ne prend que ce qu'on veut, et on peut fusionner les réglages avec ceux du script hôte.
Limites : il faut refaire l'adaptation à chaque mise à jour du skin si les fragments concernés ont changé.

---

## 9. Vérifier après intégration

- Le bouton 🎨 apparaît en bas à gauche, le panneau affiche la bonne version.
- Pages à regarder : Reine, Construction, Laboratoire, Ressources, Armée, Convois, Alliance (membres, chat, forum),
  Messagerie, profil d'un joueur, Compte+ ; et une largeur de téléphone (< 61em).
- Les boutons du skin déclenchent bien l'action du jeu **seulement quand on clique** dessus.
- Variante légère : les photos des bâtiments et des unités s'affichent (sinon, une adresse `@resource` est fausse ou le
  dépôt des images n'est pas public).
- Console du navigateur : aucune erreur venant du skin.
