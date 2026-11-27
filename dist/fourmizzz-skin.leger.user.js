// ==UserScript==
// @name         Fourmizzz — Skin perso
// @namespace    fourmizzz-skin
// @version      1.69
// @description  Thème personnalisable pour Fourmizzz (cosmétique uniquement)
// @match        https://*.fourmizzz.fr/*
// @match        https://fourmizzz.fr/*
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_getResourceURL
// @resource     batiments-salle-analyse https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/salle-analyse.jpg?v=6b3ba9a6
// @resource     batiments-etable-cochenilles https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/etable-cochenilles.jpg?v=11b3050d
// @resource     batiments-etable-pucerons https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/etable-pucerons.jpg?v=af41d93a
// @resource     batiments-loge-imperiale https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/loge-imperiale.jpg?v=eea7306f
// @resource     batiments-champignonniere https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/champignonniere.jpg?v=1dec4c99
// @resource     batiments-entrepot-nourriture https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/entrepot-nourriture.jpg?v=ffc8786f
// @resource     batiments-entrepot-materiaux https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/entrepot-materiaux.jpg?v=9b3f3b6f
// @resource     batiments-couveuse https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/couveuse.jpg?v=57d5e5db
// @resource     batiments-solarium https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/solarium.jpg?v=7608cae5
// @resource     batiments-laboratoire https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/laboratoire.jpg?v=0ceade59
// @resource     batiments-dome https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/dome.jpg?v=6119e184
// @resource     batiments-caserne https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/caserne.jpg?v=0a182b8c
// @resource     batiments-salle-combat https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/batiments/salle-combat.jpg?v=b60196a5
// @resource     recherches-technique-ponte https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/technique-ponte.jpg?v=ccc8a0da
// @resource     recherches-bouclier https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/bouclier.jpg?v=2db0d1eb
// @resource     recherches-armes https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/armes.jpg?v=ac1f0f9b
// @resource     recherches-communication-animaux https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/communication-animaux.jpg?v=7c710cd0
// @resource     recherches-vitesse-chasse https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/vitesse-chasse.jpg?v=0a834568
// @resource     recherches-vitesse-attaque https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/vitesse-attaque.jpg?v=7d80eaff
// @resource     recherches-acide https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/acide.jpg?v=ac272519
// @resource     recherches-poison https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/poison.jpg?v=1fcc7073
// @resource     recherches-genetique https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/genetique.jpg?v=52bda0f1
// @resource     recherches-architecture https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/recherches/architecture.jpg?v=9680e340
// @resource     compteplus-affiche https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/compteplus/affiche.webp?v=e31c8e92
// @resource     membre-carte-xatak https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/membre/carte-xatak.webp?v=90d0f184
// @resource     unites-ouvriere https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/ouvriere.jpg?v=4d50e898
// @resource     unites-jeune-soldate-naine https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/jeune-soldate-naine.jpg?v=c7e1681b
// @resource     unites-soldate-naine https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/soldate-naine.jpg?v=8404ea3d
// @resource     unites-naine https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/naine.jpg?v=87aeda81
// @resource     unites-jeune-soldate https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/jeune-soldate.jpg?v=de06d6d9
// @resource     unites-soldate https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/soldate.jpg?v=0e7464c8
// @resource     unites-soldate-elite https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/soldate-elite.jpg?v=8f903896
// @resource     unites-concierge https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/concierge.jpg?v=7a95d2ef
// @resource     unites-concierge-elite https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/concierge-elite.jpg?v=cac178b3
// @resource     unites-artilleuse https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/artilleuse.jpg?v=b09b5196
// @resource     unites-artilleuse-elite https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/artilleuse-elite.jpg?v=325fb04f
// @resource     unites-tank https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/tank.jpg?v=99aba0a2
// @resource     unites-tank-elite https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/tank-elite.jpg?v=4196a83b
// @resource     unites-tueuse https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/tueuse.jpg?v=32b2f485
// @resource     unites-tueuse-elite https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/unites/tueuse-elite.jpg?v=897ea0a4
// @resource     bannieres-ressources https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/bannieres/ressources.jpg?v=f307307c
// @resource     bannieres-construction https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/bannieres/construction.jpg?v=3de370d5
// @resource     bannieres-laboratoire https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/bannieres/laboratoire.jpg?v=1559f69a
// @resource     fourmiliere-megastructure https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/assets/fourmiliere/megastructure.jpg?v=39c71b6d
// @downloadURL  https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/dist/fourmizzz-skin.leger.user.js
// @updateURL    https://raw.githubusercontent.com/Eliendar94/fourmizzz-skin/main/dist/fourmizzz-skin.leger.user.js
// ==/UserScript==

(function () {
'use strict';
const FZ_T0 = Math.round(performance.now()), FZ_ETAT0 = document.readyState, FZ_BODY0 = !!document.body;
window.addEventListener('load', () => setTimeout(() => {
const fp = performance.getEntriesByType('paint').find((p) => p.name === 'first-paint');
const nav = performance.getEntriesByType('navigation')[0];
console.info(`[fz-skin] script lancé à ${FZ_T0} ms (page : ${FZ_ETAT0}${FZ_BODY0 ? ', <body> déjà là' : ''}) ; premier affichage à ${fp ? Math.round(fp.startTime) + ' ms' : '?'} ; page lue à ${nav ? Math.round(nav.domContentLoadedEventEnd) + ' ms' : '?'}`
+ (!fp ? '' : FZ_T0 > fp.startTime ? ' → script lancé APRÈS le premier affichage : le gestionnaire l\'injecte en retard.' : ' → ordre correct.'));
}, 0));
const PRESETS = {
'Futuriste':{ bg:'#05070d', panel:'#0e1e34', panel2:'#0a1a2e', border:'#1d4f73', text:'#d6ecff', accent:'#39d0ff', link:'#7cffc4', danger:'#ff5470', sideDim:1, futur:true },
};
const DEFAULT = { preset:'Futuriste', ...PRESETS['Futuriste'], holo:true, stationImg:true, buildBtn:true, neonIcons:true, glow:0.5, bgImg:'', sideImg:'', bgVeil:0.55, radius:10, font:'"Segoe UI",system-ui,sans-serif', enabled:true };
const load = () => { try { const s = JSON.parse(GM_getValue('fzSkin', '{}')); return { ...DEFAULT, ...(s.glow !== undefined ? { glow: +s.glow } : {}), ...(typeof s.bgImg === 'string' ? { bgImg: s.bgImg } : {}) }; } catch (e) { return { ...DEFAULT }; } };
const save = (c) => GM_setValue('fzSkin', JSON.stringify({ glow: c.glow, bgImg: c.bgImg }));
let cfg = load();
const SKIN_CSS = `html,body{background:var(--fz-bg)!important}body,#centre,#centre td,#centre th,#centre p,#centre span,#centre div{font-family:var(--fz-font)!important}#gauche,#droite{filter:brightness(var(--fz-side-dim)) saturate(.7)}#centre{color:var(--fz-text)!important}#centre h2,#centre h3,#centre h4{color:var(--fz-accent)!important;letter-spacing:.03em}#centre a{color:var(--fz-link)!important}#centre a:hover{color:var(--fz-accent)!important}#menu{background:var(--fz-panel2)!important;border-bottom:2px solid var(--fz-accent);border-radius:0 0 var(--fz-radius) var(--fz-radius)}#menu a{color:var(--fz-text)!important}#menu a:hover{color:var(--fz-accent)!important}.ligneAmelioration{background:var(--fz-panel)!important;color:var(--fz-text)!important;border:1px solid var(--fz-border)!important;border-radius:var(--fz-radius);box-shadow:0 2px 8px rgba(0,0,0,.35)}.ligneAmelioration td,.ligneAmelioration div{color:var(--fz-text)!important}.photo_unite img{border-radius:8px}.separateur{border-color:var(--fz-border)!important;background:transparent!important}.verificationNonOK,.verificationNonOK *{color:var(--fz-danger)!important}.verificationOK,.verificationOK *{color:var(--fz-link)!important}#centre table{color:var(--fz-text)!important;border-color:var(--fz-border)!important}#centre table.tableau_leger,#centre table.tab_stat{background:var(--fz-panel)!important;border-radius:var(--fz-radius)}#centre th{background:var(--fz-panel2)!important;color:var(--fz-accent)!important}#centre tr:nth-child(even) td{background:rgba(255,255,255,.03)}#boiteInfo,#boiteComptePlus,#data{border-radius:var(--fz-radius)}#boiteInfo,#boiteComptePlus{background:rgba(22,24,26,.85)!important;border:1px solid var(--fz-border)}#centre input:not([type=image]):not([type=hidden]):not([type=submit]):not([type=button]),#centre select,#centre textarea,#requete{background:var(--fz-panel2)!important;color:var(--fz-text)!important;border:1px solid var(--fz-border)!important;border-radius:6px}#centre input[type=submit],#centre button{background:var(--fz-accent)!important;color:#1b1b1b!important;font-weight:600;cursor:pointer}.ui-slider{background:var(--fz-panel2)!important;border-color:var(--fz-border)!important}.ui-slider-range{background:var(--fz-accent)!important}.ui-slider-handle{background:var(--fz-text)!important;border-radius:50%!important}ul.menu_colonne{background:color-mix(in srgb,var(--fz-panel) 96%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 45%,transparent)!important;box-shadow:0 8px 24px rgba(0,0,0,.6),0 0 16px color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;backdrop-filter:blur(6px)}ul.menu_colonne li{transition:background .15s,box-shadow .15s}ul.menu_colonne li:hover,.lien_rapide a:hover,#lienPseudo:hover{background:color-mix(in srgb,var(--fz-accent) 18%,transparent)!important;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--fz-accent) 55%,transparent),0 0 10px color-mix(in srgb,var(--fz-accent) 30%,transparent)}ul.menu_colonne li:hover a,.lien_rapide a:hover{color:#fff!important;text-shadow:0 0 calc(5px*var(--fz-glow)) var(--fz-accent)}.lien:hover,.lien:hover td,tr.lien:hover>td{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important}.lien:hover *{color:#fff!important}.cliquable3:hover,.bouton_graphique:hover,.option_gestion:hover,.dossier_messagerie:hover,.td_gestion:hover,.choix_option:hover{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;color:#fff!important}#centre table.tableau_leger tr:hover>td,#centre table.tab_stat tr:hover>td{background:color-mix(in srgb,var(--fz-accent) 8%,transparent)}#centre tr.ligneAmelioration td.cout_amelioration{padding-right:16px!important;padding-left:8px!important}#tableau_boite_info .ligne_boite_info img{left:6px!important;top:1px!important;width:22px!important;height:22px!important;object-fit:contain}#tableau_boite_info .texte_ligne_boite_info{left:36px!important;top:1px!important}#tableau_boite_info .jauge{left:36px!important;top:19px!important;width:110px!important;height:4px!important;background:color-mix(in srgb,var(--fz-accent) 14%,transparent)!important;border:none!important;border-radius:2px;overflow:hidden}#tableau_boite_info .jauge>div{top:0!important;left:0!important;height:100%!important;border-radius:2px}#tableau_message img[src*="icone_enveloppe"]{width:24px!important;height:19px!important;vertical-align:middle}.contenu_boite_info{padding-top:17px!important;padding-bottom:11px!important}.contenu_boite_compte_plus{padding-top:17px!important;padding-bottom:11px!important}#gauche,#droite{border:none!important}#centre tr.ligneAmelioration td td,#centre tr.ligneAmelioration td tr{background:transparent!important}#centre td.cout_amelioration td:first-child{width:22px!important;text-align:center!important;padding:1px 4px 1px 0!important}#centre td.cout_amelioration td:first-child img{width:18px!important;height:18px!important;object-fit:contain;display:block;margin:0 auto}#centre .flr{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:2px!important;box-shadow:0 0 calc(14px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 15%,transparent)!important}#centre .flr,#centre .flr-head,#centre .flr-body,#centre .flr-info,#centre .flr-chk,#centre .flr-card,#centre .flr-card-h,#centre .flr b{color:var(--fz-text)!important}#centre .flr-head{background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;border-radius:0!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}#centre .flr-card{background:rgba(255,255,255,.03)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;border-radius:2px!important}#centre .flr-info{opacity:.8}#centre .flr-badge.ok{background:rgba(46,180,90,.18)!important;border:1px solid #4ade80!important;color:#7dff9a!important}#centre .flr-grid td{background:transparent!important}#centre .ligneAmelioration .pas_sur_telephone>div{margin-top:2px!important;padding:1px 8px!important;line-height:1.22!important;font-size:12px!important;background:color-mix(in srgb,var(--fz-accent) 6%,transparent);border-left:2px solid color-mix(in srgb,var(--fz-accent) 50%,transparent)}#centre .ligneAmelioration .pas_sur_telephone>div ~ br{display:none!important}#menu span::before,#boiteComptePlus [class^="mini_icone_"]::before,#boiteComptePlus a>span::before{content:none!important;display:none!important}#gauche::before,#droite::before{display:none!important}#boiteComptePlus{margin-top:var(--fz-cp-mt,22px)!important}#cixyHorloge{display:block!important;margin:0 0 6px!important;padding:0!important;width:100%!important;box-sizing:border-box;text-align:center!important;letter-spacing:.12em!important;text-indent:.12em;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:14px!important;color:var(--fz-text)!important}html.fz-fmz #boiteComptePlus:has(#fmzOeuf) .titre_colonne_cliquable{padding-left:52px!important;padding-right:34px!important}html body #boiteComptePlus .titre_colonne_cliquable,html body #boiteInfo .titre_colonne_cliquable{box-sizing:border-box!important;width:222px!important;text-align:center!important}html body #boiteComptePlus .titre_colonne_cliquable,html body #boiteInfo .titre_colonne_cliquable{display:flex!important;align-items:center!important;justify-content:center!important;gap:6px;padding-top:0!important;padding-bottom:0!important;height:26px!important;line-height:1!important}html body #boiteInfo .titre_colonne_cliquable img{display:block}#fmzOeuf{font:600 11px/28px "Exo 2","Segoe UI",sans-serif!important;color:var(--fz-text)!important;text-shadow:none!important;letter-spacing:.03em}#fmzLoupeT{filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) var(--fz-accent))!important}#fmz-cplus-zone{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 15%,transparent)!important;clip-path:polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%)}#fmz-incoming{background:linear-gradient(135deg,rgba(70,12,22,.9),rgba(40,6,14,.92))!important;border:1px solid color-mix(in srgb,var(--fz-danger) 70%,transparent)!important;border-left:3px solid var(--fz-danger)!important;border-radius:2px!important;box-shadow:0 0 calc(12px*var(--fz-glow)) color-mix(in srgb,var(--fz-danger) 35%,transparent)!important;font-family:"Exo 2","Segoe UI",sans-serif!important}#fmz-incoming *{color:#ffe3e6!important}#centre .ligneAmelioration h2 ~ button{background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;border-radius:3px!important;cursor:pointer;vertical-align:middle}#centre .ligneAmelioration h2 ~ button:hover{background:color-mix(in srgb,var(--fz-accent) 22%,transparent)!important}html body #boiteComptePlus .titre_colonne_cliquable,html body #boiteInfo .titre_colonne_cliquable{color:var(--fz-accent)!important}.ui-tooltip,.ui-tooltip.ui-widget-content,.ui-tooltip.warning-tooltip{background:linear-gradient(160deg,color-mix(in srgb,var(--fz-panel) 97%,transparent),color-mix(in srgb,var(--fz-bg) 97%,transparent))!important;color:var(--fz-text)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;border-left:3px solid var(--fz-accent)!important;border-radius:2px!important;box-shadow:0 8px 24px rgba(0,0,0,.65),0 0 14px color-mix(in srgb,var(--fz-accent) 30%,transparent)!important;backdrop-filter:blur(6px);padding:8px 10px!important;font-family:"Exo 2","Segoe UI",sans-serif!important;font-size:12px!important}.ui-tooltip *{color:var(--fz-text)!important;background-color:transparent!important;border-color:color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;font-family:inherit!important}.ui-tooltip b,.ui-tooltip strong,.ui-tooltip th,.ui-tooltip .titre{color:var(--fz-accent)!important}.ui-tooltip tr+tr td{border-top:1px solid color-mix(in srgb,var(--fz-accent) 12%,transparent)!important}.ui-tooltip .rouge,.ui-tooltip .rouge *{color:var(--fz-danger)!important}.ui-tooltip .vert,.ui-tooltip .verificationOK,.ui-tooltip .verificationOK *{color:var(--fz-link)!important}`;
const VOILE_CSS = `html.fz-voile body{opacity:0!important;pointer-events:none!important}html.fz-apparition body{transition:opacity .12s ease-out!important}`;
const FUTUR_IMPORT = `@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Exo+2:wght@400;600&display=swap");`;
const FUTUR_CSS = `html,body{background: radial-gradient(1px 1px at 20px 30px,#fff,transparent),radial-gradient(1px 1px at 120px 80px,#cfe8ff,transparent),radial-gradient(1.5px 1.5px at 200px 150px,#fff,transparent),radial-gradient(1px 1px at 310px 40px,#9fd8ff,transparent),radial-gradient(1px 1px at 380px 210px,#fff,transparent),radial-gradient(1px 1px at 60px 260px,#bfe3ff,transparent),radial-gradient(ellipse at 15% 20%,rgba(60,40,140,.45),transparent 55%),radial-gradient(ellipse at 85% 70%,rgba(0,120,170,.35),transparent 55%),radial-gradient(ellipse at 50% 110%,rgba(120,20,90,.3),transparent 60%),#05070d !important;background-size:420px 300px,420px 300px,420px 300px,420px 300px,420px 300px,420px 300px,100% 100%,100% 100%,100% 100% !important;background-attachment:fixed !important}body::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(color-mix(in srgb,var(--fz-accent) 5%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--fz-accent) 5%,transparent) 1px,transparent 1px);background-size:60px 60px;mask-image:linear-gradient(to bottom,transparent,#000 40%,#000 70%,transparent)}#centre{position:relative;z-index:1}#menuBoite{z-index:2}#gauche,#droite{background:var(--fz-side-img,none) center/cover no-repeat !important;filter:none !important;opacity:var(--fz-side-dim)}#centre h2,#centre h3,#centre h4,#menu a,.ligneAmelioration h2{font-family:"Orbitron",var(--fz-font)!important;text-transform:uppercase;letter-spacing:.08em}#centre h2,#centre h3,#centre h4{text-shadow:0 0 calc(8px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 70%,transparent)}body,#centre,#centre td,#centre div,#centre span{font-family:"Exo 2",var(--fz-font)!important}.ligneAmelioration,#centre table.tableau_leger,#centre table.tab_stat{background:linear-gradient(135deg,rgba(14,30,52,.78),rgba(8,14,28,.85))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;box-shadow:0 0 0 1px rgba(0,0,0,.6),0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;backdrop-filter:blur(4px);clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));border-radius:0!important}.ligneAmelioration{transition:box-shadow .2s,border-color .2s}.ligneAmelioration:hover{border-color:var(--fz-accent)!important;box-shadow:0 0 calc(24px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 35%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 10%,transparent)!important}#menu{background:linear-gradient(180deg,rgba(10,25,45,.95),rgba(5,12,24,.95))!important;border-bottom:1px solid var(--fz-accent)!important;box-shadow:0 0 16px color-mix(in srgb,var(--fz-accent) 30%,transparent);border-radius:0!important}#centre th{background:color-mix(in srgb,var(--fz-accent) 15%,transparent)!important;color:var(--fz-accent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important}.photo_unite,.photo_batiment{position:relative;filter:var(--fz-photo-filter)}.photo_unite::after,.photo_batiment::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,color-mix(in srgb,var(--fz-accent) 10%,transparent) 0 1px,transparent 1px 3px),linear-gradient(180deg,color-mix(in srgb,var(--fz-accent) 15%,transparent),transparent 40%,color-mix(in srgb,var(--fz-accent) 15%,transparent));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--fz-accent) 50%,transparent),inset 0 0 20px color-mix(in srgb,var(--fz-accent) 35%,transparent)}.mini_icone_ponte,.icone_ponte,#centre img[src*="icone_"]{filter:var(--fz-icon-filter)}.ui-slider{background:color-mix(in srgb,var(--fz-accent) 15%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important;height:6px!important}.ui-slider-range{background:linear-gradient(90deg,color-mix(in srgb,var(--fz-accent) 40%,transparent),var(--fz-accent))!important;box-shadow:0 0 8px var(--fz-accent)}.ui-slider-handle{background:var(--fz-accent)!important;border:none!important;box-shadow:0 0 10px var(--fz-accent)}#centre input[type=submit],#centre button{background:transparent!important;color:var(--fz-accent)!important;border:1px solid var(--fz-accent)!important;text-transform:uppercase;letter-spacing:.06em;box-shadow:0 0 8px color-mix(in srgb,var(--fz-accent) 40%,transparent)}.titre_boite_info,.titre_colonne_cliquable{background:linear-gradient(180deg,color-mix(in srgb,var(--fz-accent) 55%,transparent),rgba(5,25,45,.9))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 50%,transparent)!important;color:var(--fz-accent)!important;font-family:"Orbitron",sans-serif!important;font-size:12px!important;letter-spacing:.06em;text-transform:uppercase;box-shadow:0 0 12px color-mix(in srgb,var(--fz-accent) 25%,transparent);clip-path:polygon(10px 0,100% 0,100% 100%,0 100%,0 10px)}.contenu_boite_info,.contenu_boite_compte_plus{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-top:none!important;box-shadow:0 0 18px color-mix(in srgb,var(--fz-accent) 15%,transparent),inset 0 0 20px color-mix(in srgb,var(--fz-accent) 6%,transparent);clip-path:polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%)}.contenu_boite_info *,.contenu_boite_compte_plus *{color:var(--fz-text)!important}#requete{background:color-mix(in srgb,var(--fz-accent) 12%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important;color:var(--fz-text)!important}#centre .rouge,#centre .rouge *{color:var(--fz-danger)!important;text-shadow:0 0 calc(4px*var(--fz-glow)) color-mix(in srgb,var(--fz-danger) 40%,transparent)}#centre .niveau_amelioration{color:var(--fz-muted,#8aa)!important;font-family:"Exo 2",sans-serif!important;text-transform:none!important;letter-spacing:0!important;text-shadow:none!important}#centre .icone_construction,#centre .icone_recherche{filter:hue-rotate(170deg) saturate(1.6) brightness(1.15) drop-shadow(0 0 calc(5px*var(--fz-glow)) var(--fz-accent))}#centre .bouton_gris,#centre .bouton_gris .icone_construction{filter:grayscale(1) brightness(.5)!important}#centre>strong{display:inline-block;margin:6px 0;padding:6px 12px;color:var(--fz-accent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 45%,transparent);background:color-mix(in srgb,var(--fz-accent) 8%,transparent);box-shadow:0 0 12px color-mix(in srgb,var(--fz-accent) 20%,transparent)}#centre>small{color:var(--fz-text)!important;opacity:.7}html.fz-has-bg,html.fz-has-bg body{background:linear-gradient(rgba(5,7,13,var(--fz-bg-veil)),rgba(5,7,13,var(--fz-bg-veil))),var(--fz-bg-img) center/cover fixed no-repeat,#05070d!important}`;
const ACCUEIL_CSS = `html body #centre_accueil{position:relative;z-index:1;background-color:color-mix(in srgb,var(--fz-accent) 28%,#02060c)!important;background-image:linear-gradient(180deg,rgba(4,8,18,.35) 0%,rgba(4,8,18,.55) 45%,rgba(4,8,18,.92) 85%,#05070d 100%),url(/images/design7/accueil.jpg)!important;background-position:center top!important;background-repeat:no-repeat!important;background-blend-mode:normal,luminosity!important}html body #logo_fourmizzz{font-family:"Orbitron","Segoe UI",sans-serif!important;font-weight:900;text-transform:uppercase;letter-spacing:.14em;color:#eafaff!important;text-shadow:0 0 calc(18px*var(--fz-glow)) var(--fz-accent),0 0 calc(40px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 60%,transparent),0 0 3px var(--fz-accent)!important;font-size:3.6em!important;line-height:1.3;display:flex;flex-wrap:wrap;justify-content:center}html body #logo_fourmizzz span{font-family:inherit!important;font-size:1em!important;margin:0!important}html body #logo_fourmizzz::after{content:"";display:block;flex:0 0 70%;width:70%;height:1px;margin:6px auto 0;background:linear-gradient(90deg,transparent,var(--fz-accent),transparent);box-shadow:0 0 calc(8px*var(--fz-glow)) var(--fz-accent)}html body .banniere_accueil{background:linear-gradient(180deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent);box-sizing:border-box;border-radius:2px;box-shadow:0 0 calc(16px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 25%,transparent),inset 0 0 calc(30px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 14%,transparent),inset 0 1px 0 color-mix(in srgb,var(--fz-accent) 35%,transparent)}html body .banniere_accueil::before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(color-mix(in srgb,var(--fz-accent) 6%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--fz-accent) 6%,transparent) 1px,transparent 1px);background-size:32px 32px;mask-image:linear-gradient(180deg,#000,transparent 80%)}html body .banniere_accueil::after{content:"";position:absolute;left:40px;right:40px;bottom:0;height:2px;pointer-events:none;background:linear-gradient(90deg,transparent,var(--fz-accent),transparent);box-shadow:0 0 calc(8px*var(--fz-glow)) var(--fz-accent)}html body .banniere_accueil_texte{position:relative;z-index:1;color:var(--fz-text)!important;font-weight:400!important;font-size:15px!important;line-height:1.5;text-shadow:none!important}html body .banniere_accueil_texte .texte_accueil_1{left:0!important;margin:0 80px 0 40px!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--fz-accent);text-shadow:0 0 calc(8px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 60%,transparent)!important}html body .banniere_accueil_texte .texte_accueil_2{color:color-mix(in srgb,var(--fz-text) 88%,transparent)}html body .banniere_accueil img.etoile{filter:hue-rotate(185deg) saturate(1.3) drop-shadow(0 0 calc(10px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 70%,transparent));z-index:2}html body .banniere_accueil :is(.home_primary_button,.home_secondary_button){display:flex!important;align-items:center;justify-content:center;box-sizing:border-box;width:340px!important;margin-left:-170px!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-weight:700;letter-spacing:.1em;text-transform:uppercase;text-decoration:none!important;border-radius:3px;transition:filter .15s,background .15s}html body .banniere_accueil .home_secondary_button{top:150px!important;height:34px!important;font-size:13px!important;color:var(--fz-accent)!important;background:color-mix(in srgb,var(--fz-accent) 10%,transparent);border:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent);text-shadow:none!important;box-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 30%,transparent)}html body .banniere_accueil .home_secondary_button:hover{background:color-mix(in srgb,var(--fz-accent) 24%,transparent);color:#fff!important}html body .banniere_accueil .home_primary_button{top:200px!important;height:48px!important;font-size:17px!important;overflow:hidden;color:#eafaff!important;background:linear-gradient(180deg,color-mix(in srgb,var(--fz-accent) 70%,#fff) 0%,var(--fz-accent) 55%,color-mix(in srgb,var(--fz-accent) 55%,#000) 100%);border:1px solid color-mix(in srgb,var(--fz-accent) 60%,#fff);text-shadow:0 1px 2px rgba(0,0,0,.6),0 0 calc(6px*var(--fz-glow)) rgba(255,255,255,.6)!important;filter:drop-shadow(0 0 calc(10px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 60%,transparent))}html body .banniere_accueil .home_primary_button::after{content:"";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent);transform:skewX(-20deg);animation:fz-accueil-sweep 3.2s ease-in-out infinite;pointer-events:none}html body .banniere_accueil .home_primary_button:hover{filter:brightness(1.15) saturate(1.15) drop-shadow(0 0 calc(14px*var(--fz-glow)) var(--fz-accent))}@keyframes fz-accueil-sweep{0%{left:-40%}60%,100%{left:120%}}html body :is(.boite_connexion,#boite_presentation,#boite_statistique) .boite_connexion_titre{background:linear-gradient(90deg,color-mix(in srgb,var(--fz-accent) 6%,#07111e) 0%,color-mix(in srgb,var(--fz-accent) 30%,#07111e) 50%,color-mix(in srgb,var(--fz-accent) 6%,#07111e) 100%)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 65%,transparent);border-bottom:2px solid var(--fz-accent);box-sizing:border-box;height:35px!important;padding-top:9px!important;clip-path:polygon(10px 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%,0 10px);font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#eafaff!important;text-shadow:0 0 calc(8px*var(--fz-glow)) var(--fz-accent)!important}html body :is(.boite_connexion,#boite_presentation,#boite_statistique) .boite_connexion_titre *{font-family:inherit!important}html body .boite_connexion .titre_connexion_cliquable:hover{filter:brightness(1.25)}html body .boite_connexion_titre img[src*="fleche-bas"]{filter:brightness(0) invert(1) drop-shadow(0 0 3px var(--fz-accent));margin:0 6px}html body :is(.boite_connexion_contenu,.boite_presentation_contenu){background:linear-gradient(180deg,rgba(10,24,42,.92),rgba(6,12,24,.95))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent);border-top:0;box-sizing:border-box;clip-path:polygon(0 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px));color:var(--fz-text)!important;font-size:12.5px!important;box-shadow:inset 0 0 calc(20px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 10%,transparent)}html body :is(.boite_connexion,#boite_presentation,#boite_statistique) a,html body #boite_statistique .lien{color:var(--fz-link)!important}html body #boite_statistique strong{color:var(--fz-accent);font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px;letter-spacing:.08em;text-transform:uppercase}html body #screenshot{border:1px solid color-mix(in srgb,var(--fz-accent) 45%,transparent);box-shadow:0 0 calc(8px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 30%,transparent);cursor:pointer}html body .boite_connexion #autoLogin img[src*="poubelle"]{filter:brightness(0) invert(1) drop-shadow(0 0 3px var(--fz-danger));opacity:.8}html body .boite_connexion #loginForm td{color:var(--fz-text)!important}html body .boite_connexion #loginForm :is(input[type=text],input[type=password],select){background:var(--fz-panel2)!important;color:var(--fz-text)!important;border:1px solid var(--fz-border)!important;border-radius:2px}html body .boite_connexion #loginForm input[type=submit]{margin-top:6px;background:color-mix(in srgb,var(--fz-accent) 14%,transparent)!important;color:var(--fz-accent)!important;border:1px solid var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}html body #centre_accueil .liensLegaux,html body #centre_accueil .liensLegaux a{color:color-mix(in srgb,var(--fz-text) 70%,transparent)!important}html body #centre_accueil .liensLegaux a:hover{color:var(--fz-accent)!important}@media screen and (max-width:41em){html body #centre_accueil{background-image:linear-gradient(180deg,rgba(4,8,18,.6),#05070d 70%)!important}html body #logo_fourmizzz{display:none!important}html body :is(.boite_connexion,#boite_presentation) .titre_connexion_cliquable{display:block!important;width:100%!important;height:44px!important;line-height:44px;padding-top:0!important;clip-path:none}html body .boite_connexion_contenu{clip-path:none}html body .banniere_accueil{height:auto!important;padding-bottom:22px}html body .banniere_accueil_texte{font-size:13.5px!important}html body .banniere_accueil_texte .texte_accueil_1{margin:0 20px!important;font-size:12.5px}html body .banniere_accueil :is(.home_primary_button,.home_secondary_button){position:relative!important;top:auto!important;left:auto!important;width:auto!important;max-width:320px;margin:14px auto 0!important;padding:0 12px}html body .banniere_accueil .home_primary_button{font-size:14px!important;letter-spacing:.06em}html body #centre_accueil .liensLegaux{background:rgba(6,12,24,.95)!important;border-top:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)}}`;
const MOBILE_CSS = `@media screen and (max-width:61em){html body #menu #menu_horizontal{margin:0 44px!important}html body #menu #menu_horizontal>li{min-width:0}html body #menu #menu_horizontal>li>a{flex-direction:column;gap:4px;height:48px;padding:0 2px!important;overflow:hidden;white-space:nowrap;font-family:"Exo 2",var(--fz-font)!important;font-size:11px!important;font-weight:600!important;letter-spacing:.04em!important;text-transform:none!important}html body #menu #menu_horizontal>li>a>span{width:22px!important;height:22px!important}html body #menu #boutonDeconnexion{height:48px!important;width:44px!important}html body #menu #boutonDeconnexion>span{width:22px!important;height:22px!important}html body #menu ul.menu_colonne{min-width:min(340px,100%)}html body #menu ul.menu_colonne>li>a{min-height:54px;padding:6px 2px!important;font-size:10px!important;letter-spacing:.03em!important;overflow-wrap:anywhere}}@media screen and (max-width:41em){html body #menu ul.menu_colonne{min-width:0}html body #menu #menu_horizontal{margin:0 40px!important}html body #menu #menu_horizontal>li>a{font-size:clamp(8px,2.4vw,11px)!important;letter-spacing:0!important;padding:0 1px!important}html body #menu #boutonDeconnexion,html body #menu #fz-boites-btn{width:40px!important}}#fz-boites-btn{display:none}@media screen and (max-width:61em){html body #menu #fz-boites-btn{display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0;z-index:3001;width:44px;height:48px;margin:0;padding:0;border:0;border-right:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent);background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent}html body #menu #fz-boites-btn>span{display:block;width:24px;height:24px;background:none!important;filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) var(--fz-accent))}html body #menu #fz-boites-btn svg{display:block;width:24px;height:24px;stroke:var(--fz-accent);transition:transform .2s}html.fz-boites-ouvertes body #menu #fz-boites-btn{background:color-mix(in srgb,var(--fz-accent) 18%,transparent);box-shadow:inset 0 -2px 0 var(--fz-accent)}html.fz-boites-ouvertes body #menu #fz-boites-btn svg{transform:rotate(90deg)}html.fz-boites-ouvertes body #menuBoite{top:48px!important;z-index:19999!important}html.fz-boites-ouvertes body #menu ul.menu_colonne{visibility:hidden!important}html.fz-boites-ouvertes body #menuBoite::before{content:"";position:fixed;inset:0;z-index:-1;background:rgba(2,6,14,.72);backdrop-filter:blur(2px)}}html body #centre .fz-page-hero.fz-has-info{height:auto!important;min-height:150px}@media screen and (max-width:41em){html{position:relative!important;width:fit-content!important;min-width:100%!important}body::before{position:absolute!important}html body #centre>h4 + table.tableau_leger{width:100%!important;max-width:100%}html body #centre>h4 + table.tableau_leger :is(td,th){padding:3px 4px!important}html body #centre>h4 + table.tableau_leger :is(td,th):not(.fz-tcell){font-size:12px!important}html body #centre>h4 + table.tableau_leger tr:first-child>:is(td,th){white-space:normal!important;font-size:9.5px!important;letter-spacing:.04em!important;line-height:1.3}html body #centre>h4 + table.tableau_leger td.fz-tcell>.fz-time{font-size:11.5px!important}html body #centre .photo_unite .fz-army-badge{left:0;right:0;padding:2px 2px 3px!important;text-align:center;white-space:nowrap;font-size:9.5px!important;letter-spacing:0!important;clip-path:none!important}html body #centre .photo_unite .fz-army-badge em{font-size:8.5px!important}html body #centre .fz-lvls.fz-lvls-photo:has(.fz-lvl-up){left:0;right:0;display:block!important}html body #centre .fz-lvls.fz-lvls-photo:has(.fz-lvl-up) .fz-lvl{padding:3px 2px 4px!important;text-align:center;font-size:11px!important;letter-spacing:0!important;clip-path:none!important}html body #centre .fz-page-hero.fz-has-info{min-height:0;padding:14px 0 16px!important}html body #centre .fz-page-hero .fz-page-hero-head{margin:0 18px 0 22px!important;gap:8px!important}html body #centre .fz-page-hero .fz-page-hero-title{font-size:22px!important;letter-spacing:.14em!important}html body #centre .fz-page-hero-info{padding:5px 10px!important}html body #centre .fz-page-hero-info .fz-hero-line{font-size:12px!important}html body #centre .fz-page-hero-info :is(.fz-hero-sub,.fz-hero-fin){font-size:10.5px!important}}@media screen and (max-width:61em){#centre #messagerie tr.contenu_conversation .date_envoi{font-size:12px!important;line-height:18px!important;margin-left:8px!important;padding:1px 7px}}html body #centre .ligneAmelioration button.fz-desc-btn{display:none!important}@media screen and (max-width:61em){html body #centre tr.ligneAmelioration:has(.photo_unite) td.desciption_amelioration :is([id^="descriptionComplete"],[id^="ouvrirDescription"],.fz-desc-txt){display:none!important}html body #centre tr.ligneAmelioration.fz-desc-open:has(.photo_unite) td.desciption_amelioration :is([id^="descriptionComplete"],.fz-desc-txt){display:block!important;margin-top:6px;font-size:12.5px;line-height:1.4}html body #centre tr.ligneAmelioration:has(.photo_unite) td.desciption_amelioration:has(.fz-desc-btn){padding-bottom:46px!important}html body #centre .fz-desc-txt>br:first-child{display:none}html body #centre .ligneAmelioration h2 ~ button.fz-desc-btn{display:flex!important;width:fit-content;height:auto!important;min-width:0!important;top:0!important;align-items:center;gap:6px;margin:8px 0 0!important;padding:3px 5px 3px 9px!important;line-height:16px!important;border:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;border-radius:2px;background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:10.5px!important;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;box-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 25%,transparent)}html body #centre .ligneAmelioration .fz-desc-btn span{font-family:inherit!important}html body #centre .ligneAmelioration .fz-desc-btn b{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;background:var(--fz-accent);color:#04121f;font-size:14px;line-height:1;border-radius:2px}html body #centre tr.ligneAmelioration:has(.fz-desc-btn) td.fz-ponte-cell div.cliquable3[title="Changer la Destination"]{top:auto!important;bottom:12px}}@media screen and (max-width:61em){#centre .fz-mem-actions{flex-wrap:nowrap;align-items:stretch;gap:24px;width:100%;max-width:520px;margin:14px auto 6px;padding:0 6px;box-sizing:border-box}#centre .fz-mem-actions>:is(a.fz-addfriends,label.fz-cols-tf){flex:1 1 0;min-width:0;height:auto!important;min-height:44px;padding:6px 10px 6px 6px!important;justify-content:flex-start;text-align:left;line-height:1.3!important;white-space:normal}#centre .fz-mem-actions>:is(a.fz-addfriends,label.fz-cols-tf)>:is(.fz-plus,.fz-cols-box){flex:0 0 auto}}@media screen and (max-width:61em){html body #centre tr.ligneAmelioration:is(:has(.photo_batiment),:has(.photo_recherche)) [id^="descriptionComplete"]:has(.fz-desc-txt){display:block!important}html body #centre tr.ligneAmelioration:is(:has(.photo_batiment),:has(.photo_recherche)):has(.fz-desc-txt) [id^="ouvrirDescription"]{display:none!important}html body #centre tr.ligneAmelioration:is(:has(.photo_batiment),:has(.photo_recherche)) .fz-desc-txt{display:none}html body #centre tr.ligneAmelioration.fz-desc-open:is(:has(.photo_batiment),:has(.photo_recherche)) .fz-desc-txt{display:inline}html body #centre tr.ligneAmelioration:is(:has(.photo_batiment),:has(.photo_recherche)):not(.fz-desc-open) .fz-desc-txt + br{display:none}html body #centre tr.ligneAmelioration:is(:has(.photo_batiment),:has(.photo_recherche)) .fz-desc-btn{margin-bottom:4px!important}}`;
const STATION_SVG = (() => {
const W = 225, H = 148;
const rng = (seed) => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const defs = (c) => `<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#03050c"/><stop offset="1" stop-color="#0b1630"/></linearGradient><linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fb3c8"/><stop offset=".5" stop-color="#5b6b7e"/><stop offset="1" stop-color="#2c3644"/></linearGradient><linearGradient id="metalH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2c3644"/><stop offset=".5" stop-color="#8ea2b8"/><stop offset="1" stop-color="#2c3644"/></linearGradient><linearGradient id="glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".55"/><stop offset="1" stop-color="${c}" stop-opacity=".12"/></linearGradient><radialGradient id="glow"><stop offset="0" stop-color="${c}" stop-opacity=".9"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient><radialGradient id="planet" cx=".35" cy=".3"><stop offset="0" stop-color="#3a6fa8"/><stop offset=".7" stop-color="#16294a"/><stop offset="1" stop-color="#0a1426"/></radialGradient></defs>`;
const sky = (seed, planet = true) => {
const r = rng(seed * 7919 + 17);
let s = '<rect width="225" height="148" fill="url(#sky)"/>';
for (const [op, w] of [[.4, 1], [.7, 1.3], [1, 1.8]]) {
let d = ''; for (let i = 0; i < 15; i++) d += `M${Math.round(r() * W)} ${Math.round(r() * H)}h0`;
s += `<path d="${d}" stroke="#fff" stroke-width="${w}" stroke-linecap="round" opacity="${op}"/>`;
}
if (planet) { const px = r() < .5 ? 20 : 205; s += `<circle cx="${px}" cy="160" r="70" fill="url(#planet)" stroke="#5fb4ff" stroke-opacity=".35" stroke-width="2"/>`; }
return s;
};
const frame = (c) => `<path d="M2 14V2H14M211 2H223V14M223 134V146H211M14 146H2V134" stroke="${c}" stroke-width="1.5" fill="none" opacity=".8"/>`;
const lights = (from, to, step, y, c) => { let s = ''; for (let x = from; x < to; x += step) s += `<circle cx="${x}" cy="${y}" r="1.3" fill="${c}"/>`; return s; };
const panel = (x, y, w, h, rx = 3) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="url(#metal)" stroke="#1a222c"/>`;
const A = [];
A[0] = () => { const c = '#6dff9a'; let s = sky(0) + panel(18, 70, 190, 58, 6) + '<rect x="18" y="122" width="190" height="6" fill="#1b2330"/>';
for (const x of [40, 80, 120, 160]) s += `<ellipse cx="${x + 10}" cy="92" rx="17" ry="20" fill="url(#glass)" stroke="${c}" stroke-width="1.2"/><ellipse cx="${x + 10}" cy="96" rx="7" ry="9" fill="${c}" opacity=".85"/><circle cx="${x + 6}" cy="91" r="1.4" fill="#0a2"/><path d="M${x + 3} 104l-3 4M${x + 17} 104l3 4" stroke="${c}"/>`;
s += `<rect x="60" y="48" width="105" height="22" rx="4" fill="#223042" stroke="${c}" stroke-opacity=".6"/><text x="112" y="63" font-family="monospace" font-size="9" fill="${c}" text-anchor="middle">BIO-FARM A1</text>` + lights(28, 200, 12, 125, c);
return [c, s]; };
A[1] = () => { const c = '#ff5f7a'; let s = sky(1) + panel(25, 40, 175, 92, 6);
for (let row = 0; row < 2; row++) for (let col = 0; col < 5; col++) { const x = 38 + col * 33, y = 52 + row * 38;
s += `<rect x="${x}" y="${y}" width="24" height="30" rx="5" fill="url(#glass)" stroke="${c}"/><ellipse cx="${x + 12}" cy="${y + 18}" rx="8" ry="6" fill="${c}" opacity=".8"/><path d="M${x + 6} ${y + 13}v10M${x + 10} ${y + 13}v10M${x + 14} ${y + 13}v10M${x + 18} ${y + 13}v10" stroke="#7a1028" stroke-width=".7"/>`; }
return [c, s + `<rect x="25" y="34" width="175" height="6" fill="${c}" opacity=".5"/>`]; };
A[2] = () => { const c = '#c08bff'; let s = sky(2) + '<path d="M15 128V70Q112 20 210 70V128Z" fill="#16202e" stroke="url(#metalH)" stroke-width="4"/><path d="M22 125V72Q112 28 203 72V125Z" fill="url(#glass)" opacity=".5"/>';
for (const [x, h, r] of [[45, 30, 14], [75, 42, 18], [110, 34, 22], [148, 46, 16], [180, 28, 12]]) s += `<rect x="${x - 2.5}" y="${125 - h}" width="5" height="${h}" fill="#e8dcff"/><path d="M${x - r} ${125 - h}Q${x} ${(125 - h - r * 1.2).toFixed(1)} ${x + r} ${125 - h}Z" fill="${c}"/><circle cx="${x}" cy="${122 - h}" r="${r}" fill="url(#glow)" opacity=".5"/>`;
s += '<rect x="15" y="125" width="195" height="5" fill="#2c3644"/>' + [60, 104, 148].map(x => `<rect x="${x}" y="60" width="16" height="3" fill="#fff6c2" opacity=".9"/>`).join('');
return [c, s]; };
A[3] = () => { const c = '#ff8a3d'; let s = sky(3, false) + `<ellipse cx="112" cy="112" rx="98" ry="26" fill="#1a2230" stroke="url(#metalH)" stroke-width="4"/><ellipse cx="112" cy="112" rx="80" ry="20" fill="none" stroke="${c}" stroke-dasharray="6 4"/>`;
for (const r of [34, 24, 14, 5]) s += `<circle cx="112" cy="62" r="${r}" fill="none" stroke="${c}" stroke-width="2" opacity=".85"/>`;
s += `<path d="M112 96V112" stroke="${c}" opacity=".6"/><path d="M60 108l10-14 6 8zM164 108l-10-14-6 8z" fill="#c9d6e3"/><path d="M30 40L60 70M195 40L165 70" stroke="${c}" opacity=".5"/><text x="18" y="20" font-family="monospace" font-size="8" fill="${c}">COMBAT SIM</text>`;
return [c, s]; };
A[4] = () => { const c = '#7fd3ff'; let s = sky(4) + panel(70, 18, 85, 112, 8) + panel(40, 60, 30, 70, 4) + panel(155, 60, 30, 70, 4);
for (let row = 0; row < 6; row++) for (let col = 0; col < 4; col++) s += `<rect x="${80 + col * 18}" y="${28 + row * 16}" width="11" height="7" rx="2" fill="${c}" opacity="${(0.35 + ((row * 3 + col) % 4) * 0.18).toFixed(2)}"/>`;
for (const x of [48, 163]) for (let row = 0; row < 4; row++) s += `<rect x="${x}" y="${70 + row * 14}" width="14" height="5" fill="${c}" opacity=".6"/>`;
return [c, s + '<rect x="108" y="6" width="9" height="14" fill="#5b6b7e"/><circle cx="112.5" cy="6" r="3" fill="#ff4d4d"/>']; };
A[5] = () => { const c = '#ffcf6b'; let s = sky(5) + panel(15, 95, 195, 35, 6);
for (const x of [45, 90, 135, 180]) s += `<circle cx="${x}" cy="78" r="26" fill="url(#glow)" opacity=".55"/><ellipse cx="${x}" cy="78" rx="13" ry="18" fill="#fff4dd" stroke="${c}" stroke-width="1.5"/><ellipse cx="${x - 4}" cy="71" rx="3" ry="5" fill="#fff" opacity=".8"/><path d="M${x - 18} 92Q${x} 104 ${x + 18} 92" fill="none" stroke="url(#metalH)" stroke-width="4"/><rect x="${x - 9}" y="112" width="18" height="5" rx="1" fill="${c}" opacity=".7"/>`;
return [c, s]; };
A[6] = () => { const c = '#ffd84d'; let s = sky(6, false) + '<circle cx="190" cy="32" r="40" fill="url(#glow)"/><circle cx="190" cy="32" r="14" fill="#fff6c8"/>' + panel(98, 60, 28, 50, 4);
for (const [side, x0] of [[-1, 96], [1, 128]]) for (let k = 0; k < 3; k++) { const x = x0 + side * (10 + k * 30) - (side < 0 ? 28 : 0);
s += `<rect x="${x}" y="66" width="28" height="38" fill="#163a7a" stroke="#7fb2ff"/><path d="M${x} 75.5h28M${x} 85h28M${x} 94.5h28M${x + 14} 66v38" stroke="#7fb2ff" stroke-width=".5"/><rect x="${x}" y="66" width="28" height="38" fill="${c}" opacity=".12"/>`; }
return [c, s + '<rect x="6" y="83" width="213" height="4" fill="url(#metalH)"/>']; };
A[7] = () => { const c = '#4dffd2'; let s = sky(7) + panel(15, 100, 195, 30, 4);
for (let i = 0; i < 14; i++) { const y = 22 + i * 5.5, dx = (14 * Math.sin(i * 0.7)).toFixed(1);
s += `<path d="M${112 - dx} ${y}H${112 + +dx}" stroke="${c}" opacity=".7"/><circle cx="${112 - dx}" cy="${y}" r="2" fill="${c}"/><circle cx="${112 + +dx}" cy="${y}" r="2" fill="#b27cff"/>`; }
s += `<ellipse cx="112" cy="99" rx="26" ry="5" fill="${c}" opacity=".5"/>`;
for (const [x, col] of [[40, '#ff6bd5'], [65, '#6bffb0'], [165, '#6bc7ff'], [188, '#ffd36b']]) s += `<path d="M${x - 4} 78V88L${x - 11} 100H${x + 11}L${x + 4} 88V78Z" fill="url(#glass)" stroke="#cfe" stroke-width=".8"/><path d="M${x - 8} 95L${x - 11} 100H${x + 11}L${x + 8} 95Z" fill="${col}"/>`;
return [c, s]; };
A[8] = () => { const c = '#9dff6b'; let s = sky(8);
for (const x of [30, 75, 120]) s += `<rect x="${x}" y="38" width="34" height="88" rx="17" fill="url(#metalH)" stroke="#1a222c"/><rect x="${x + 8}" y="50" width="18" height="60" rx="4" fill="url(#glass)" stroke="${c}" stroke-width=".8"/><rect x="${x + 8}" y="80" width="18" height="30" rx="2" fill="${c}" opacity=".7"/>`;
for (const [x, y] of [[165, 106], [190, 106], [177, 86]]) s += `<rect x="${x}" y="${y}" width="24" height="20" fill="#3d5a2a" stroke="${c}"/><path d="M${x} ${y}l24 20M${x + 24} ${y}l-24 20" stroke="${c}" stroke-width=".6"/>`;
return [c, s + '<rect x="10" y="126" width="205" height="5" fill="#2c3644"/>']; };
A[9] = () => { const c = '#ffae42'; let s = sky(9) + '<rect x="10" y="126" width="205" height="5" fill="#2c3644"/>';
for (const [x, y] of [[25, 100], [55, 100], [85, 100], [40, 74], [70, 74], [55, 48], [150, 100], [180, 100], [165, 74]]) s += `<rect x="${x}" y="${y}" width="28" height="26" fill="#4a3a26" stroke="${c}"/><rect x="${x + 3}" y="${y + 3}" width="22" height="5" fill="${c}" opacity=".6"/>`;
return [c, s + `<rect x="118" y="20" width="8" height="106" fill="url(#metalH)"/><rect x="118" y="20" width="80" height="7" fill="url(#metal)"/><path d="M180 27V58" stroke="#ccc"/><rect x="170" y="58" width="20" height="6" fill="${c}"/><path d="M126 27L150 50" stroke="#5b6b7e" stroke-width="3"/>`]; };
A[10] = () => { const c = '#5ce1ff'; let s = sky(10) + '<path d="M22 118A90 90 0 0 1 203 118Z" fill="url(#glass)" stroke="url(#metalH)" stroke-width="3"/>';
for (let k = 1; k < 6; k++) s += `<path d="M22 118A90 ${90 - k * 15} 0 0 1 203 118" fill="none" stroke="${c}" stroke-width=".7" opacity=".6"/>`;
for (let x = 42; x < 200; x += 20) s += `<path d="M112 28L${x} 118" stroke="${c}" stroke-width=".6" opacity=".5"/>`;
return [c, s + '<path d="M70 118l12-22 12 22zM120 118l15-30 15 30z" fill="#2d6a4f" opacity=".85"/><rect x="10" y="118" width="205" height="12" fill="url(#metal)"/>' + lights(20, 210, 15, 124, c)]; };
A[11] = () => { const c = '#e6b8ff'; let s = sky(11, false) + '<path d="M40 130V45L112 15L185 45V130Z" fill="#1c1430" stroke="url(#metalH)" stroke-width="3"/><path d="M85 120V70Q112 50 140 70V120Z" fill="#3b2066" stroke="#f3c969" stroke-width="2"/><rect x="78" y="118" width="69" height="8" fill="#f3c969"/><path d="M97 52L102 40L108 50L112 36L117 50L123 40L128 52Z" fill="#f3c969"/><circle cx="112" cy="88" r="18" fill="url(#glow)" opacity=".6"/>';
for (const x of [55, 170]) s += `<rect x="${x - 4}" y="55" width="8" height="70" fill="url(#metalH)"/><circle cx="${x}" cy="52" r="5" fill="${c}"/>`;
return [c, s]; };
A[12] = () => { const c = '#3dffb0'; let s = sky(12, false) + panel(10, 112, 205, 22, 4) + '<rect x="15" y="25" width="90" height="80" rx="4" fill="#06141a" stroke="url(#metalH)" stroke-width="3"/>';
for (const r of [34, 22, 10]) s += `<circle cx="60" cy="65" r="${r}" fill="none" stroke="${c}" stroke-width=".8" opacity=".7"/>`;
s += `<path d="M60 65L90 50A34 34 0 0 0 60 31Z" fill="${c}" opacity=".35"/><circle cx="74" cy="52" r="2" fill="#fff"/><circle cx="48" cy="80" r="1.6" fill="#ff6b6b"/><rect x="115" y="25" width="95" height="38" rx="4" fill="#06141a" stroke="url(#metalH)" stroke-width="3"/><polyline points="120,55 132,45 142,50 155,36 168,42 180,32 192,38 205,30" fill="none" stroke="${c}" stroke-width="1.5"/><rect x="115" y="68" width="95" height="37" rx="4" fill="#06141a" stroke="url(#metalH)" stroke-width="3"/>`;
[14, 22, 10, 26, 18, 30, 16].forEach((h, i) => { s += `<rect x="${122 + i * 12}" y="${100 - h}" width="7" height="${h}" fill="${c}" opacity=".75"/>`; });
return [c, s + lights(25, 205, 14, 123, c)]; };
return A.map(f => { const [c, body] = f(); return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 148">${defs(c)}${body}${frame(c)}</svg>`; });
})();
const STATION_CSS = '.photo_batiment{filter:none!important;}.photo_batiment::after{display:none!important;}' +
STATION_SVG.map((svg, i) => `.photo_batiment#photo${i}{background:url("data:image/svg+xml,${encodeURIComponent(svg)}") center/cover no-repeat!important;}`).join('');
const CUSTOM_IMG = {
photo12: GM_getResourceURL('batiments-salle-analyse'),
photo1: GM_getResourceURL('batiments-etable-cochenilles'),
photo0: GM_getResourceURL('batiments-etable-pucerons'),
photo11: GM_getResourceURL('batiments-loge-imperiale'),
photo2: GM_getResourceURL('batiments-champignonniere'),
photo8: GM_getResourceURL('batiments-entrepot-nourriture'),
photo9: GM_getResourceURL('batiments-entrepot-materiaux'),
photo5: GM_getResourceURL('batiments-couveuse'),
photo6: GM_getResourceURL('batiments-solarium'),
photo7: GM_getResourceURL('batiments-laboratoire'),
photo10: GM_getResourceURL('batiments-dome'),
photo4: GM_getResourceURL('batiments-caserne'),
photo3: GM_getResourceURL('batiments-salle-combat'),
};
const RECHERCHE_IMG = {
photo0: GM_getResourceURL('recherches-technique-ponte'),
photo1: GM_getResourceURL('recherches-bouclier'),
photo2: GM_getResourceURL('recherches-armes'),
photo3: GM_getResourceURL('recherches-communication-animaux'),
photo4: GM_getResourceURL('recherches-vitesse-chasse'),
photo5: GM_getResourceURL('recherches-vitesse-attaque'),
photo6: GM_getResourceURL('recherches-acide'),
photo7: GM_getResourceURL('recherches-poison'),
photo8: GM_getResourceURL('recherches-genetique'),
photo9: GM_getResourceURL('recherches-architecture'),
};
const CUSTOM_IMG_CSS = Object.entries(CUSTOM_IMG).map(([id, uri]) => `.photo_batiment#${id}{background:url("${uri}") center/cover no-repeat!important;filter:none!important;}`).join('')
+ Object.entries(RECHERCHE_IMG).map(([id, uri]) => `.photo_recherche#${id}{background:url("${uri}") center/cover no-repeat!important;filter:none!important;}`).join('');
const BUILD_BTN_CSS = `#centre .fz-build-wrap{display:block;margin:0 0 8px;filter:drop-shadow(0 0 calc(6px*var(--fz-glow)) rgba(43,212,111,.55))}#centre .fz-build-wrap.fz-off{filter:none}#centre a.fz-build-btn,#centre span.fz-build-btn{position:relative;overflow:hidden;display:block;min-width:150px;box-sizing:border-box;padding:8px 16px;text-align:center;font-family:"Orbitron","Segoe UI",sans-serif!important;font-weight:700;font-size:12px;letter-spacing:.18em;text-transform:uppercase;text-decoration:none!important;color:#eafff2!important;text-shadow:0 0 calc(5px*var(--fz-glow)) rgba(182,255,212,.7);background:linear-gradient(180deg,#34e07c 0%,#14a454 55%,#0b7a3d 100%);border:1px solid #7dffb5;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);cursor:pointer;transition:filter .15s,transform .1s}#centre a.fz-build-btn::before{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);animation:fz-sweep 2.8s ease-in-out infinite}#centre a.fz-build-btn::after{content:"";position:absolute;inset:3px;border:1px solid rgba(255,255,255,.25);clip-path:inherit;pointer-events:none}#centre a.fz-build-btn:hover{filter:brightness(1.18) saturate(1.2);color:#fff!important}#centre a.fz-build-btn:active{transform:translateY(1px);filter:brightness(.95)}#centre span.fz-build-btn.fz-disabled{background:linear-gradient(180deg,#3a434d,#232a31);border-color:#56616d;color:#8994a0!important;text-shadow:none;cursor:not-allowed}#centre a.fz-build-btn img{display:none!important}#centre td.fz-hidden-td{display:none!important}#centre .fz-build-wrap.fz-ponte-wrap:not(.fz-off){filter:drop-shadow(0 0 calc(6px*var(--fz-glow)) rgba(255,170,40,.6))}#centre a.fz-build-btn.fz-ponte{background:linear-gradient(180deg,#ffd25a 0%,#ff9f1c 55%,#d96a00 100%)!important;border-color:#ffe39a!important;color:#2a1600!important;text-shadow:0 1px 0 rgba(255,240,200,.5)!important}#centre td.td_icone_ponte.fz-hidden-td{display:none!important}#centre td.cout_ponte{text-align:left!important;padding:2px 0 0 4px!important}#centre td.cout_ponte>div{display:block!important;margin:1px 0!important;height:auto!important}#centre td.cout_ponte>div>span{display:flex!important;align-items:center;gap:8px;width:auto!important}#centre td.cout_ponte>div>span img{display:block!important;width:18px!important;height:18px!important;object-fit:contain;flex:0 0 18px;margin:0!important}#centre td.cout_ponte>div>span>span{display:inline!important;text-align:left!important;width:auto!important}#centre td.cout_amelioration form td>div.cliquable3{display:flex!important;align-items:center;gap:8px;padding-left:4px;text-align:left!important}#centre td.cout_amelioration form td>div.cliquable3 img{display:block!important;width:18px!important;height:18px!important;object-fit:contain;flex:0 0 18px;margin:0!important}#centre td.cout_amelioration form td>div.cliquable3 img + img{display:none!important}#centre td.cout_amelioration form td>div.cliquable3 span{display:inline!important}#centre td.cout_amelioration form .slider{width:96px!important;margin:4px 0 6px 6px!important}#centre td.cout_amelioration form table{width:100%!important}#centre td.cout_amelioration form>table td{text-align:left!important}#centre td.cout_amelioration.fz-ponte-cell{vertical-align:top!important;padding-top:12px!important;position:relative}#centre td.fz-ponte-cell div.cliquable3[title="Changer la Destination"]{position:absolute;top:17px;right:calc(100% + 10px);height:28px;box-sizing:border-box;padding:0 10px!important;white-space:nowrap;border:1px solid color-mix(in srgb,var(--fz-accent) 50%,transparent);background:color-mix(in srgb,var(--fz-accent) 10%,transparent);border-radius:2px;cursor:pointer;font-family:"Orbitron","Segoe UI",sans-serif;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--fz-text)}#centre td.fz-ponte-cell div.cliquable3[title="Changer la Destination"]:hover{background:color-mix(in srgb,var(--fz-accent) 22%,transparent);border-color:var(--fz-accent)}#centre #ppPanel{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:2px!important;color:var(--fz-text)!important;box-shadow:0 0 calc(14px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 15%,transparent)!important}#centre #ppPanel :is(.pp-body,.pp-cfg,.pp-mode,.lab,.u,.h,p,div,span,td,th,label){color:var(--fz-text)}#centre #ppPanel .pp-expl{color:color-mix(in srgb,var(--fz-text) 70%,transparent)!important}#centre #ppPanel button{background:color-mix(in srgb,var(--fz-accent) 8%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 50%,transparent)!important;border-radius:2px!important;color:var(--fz-text)!important}#centre #ppPanel button.on{background:color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;border-color:var(--fz-accent)!important;color:#fff!important}#centre #ppPanel input,#centre #ppPanel select{background:var(--fz-panel2)!important;color:var(--fz-text)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important}#centre #ppPanel *:not(button):not(input):not(select):not(th){background-color:transparent!important}#centre #ppPanel table td{border-color:color-mix(in srgb,var(--fz-accent) 15%,transparent)!important}#centre .fmz-unlock{background:linear-gradient(135deg,rgba(40,30,8,.55),rgba(14,20,30,.8))!important;border:1px solid rgba(255,190,80,.45)!important;border-left:3px solid #ffb84d!important;border-radius:2px!important;color:var(--fz-text)!important}#centre .fmz-unlock :is(.fmz-ul-h,summary,.fmz-ul-x,div,span){color:var(--fz-text)}#centre .fmz-unlock .fmz-ul-h{color:#ffcf7a!important}#centre .fmz-unlock summary{color:color-mix(in srgb,var(--fz-text) 80%,transparent)!important;cursor:pointer}#centre a.verificationNonOK,#centre a.verificationNonOK *,#centre .verificationNonOK a{color:#ff9a3c!important;text-shadow:0 0 calc(4px*var(--fz-glow)) rgba(255,140,40,.45)}#centre a.verificationNonOK:hover{color:#ffc07a!important}#centre .boite_amelioration{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));color:var(--fz-text)!important}#centre .boite_amelioration .boite_amelioration{background:transparent!important;border:none!important;box-shadow:none!important;clip-path:none}#centre .boite_amelioration .titre{color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-style:normal!important;text-transform:uppercase;letter-spacing:.08em;text-shadow:0 0 calc(8px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 70%,transparent)}#centre .boite_amelioration td{background:transparent!important}#centre .boite_amelioration table[style*="border"],#centre #boite_ouvriere table table{border:1px solid color-mix(in srgb,var(--fz-accent) 45%,transparent)!important;background:rgba(255,255,255,.02)!important}#centre .boite_amelioration hr{border:none!important;border-top:1px solid color-mix(in srgb,var(--fz-accent) 30%,transparent)!important}#centre .boite_amelioration textarea{background:var(--fz-panel2)!important;color:var(--fz-text)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important}#centre .boite_amelioration input[type=submit],#centre .boite_amelioration input[type=button],#centre .boite_amelioration button{background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;color:var(--fz-accent)!important;border:1px solid var(--fz-accent)!important;border-radius:2px!important;padding:3px 10px!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;letter-spacing:.06em;cursor:pointer}#centre .boite_amelioration input[type=submit]:hover,#centre .boite_amelioration input[type=button]:hover,#centre .boite_amelioration button:hover{background:color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;color:#fff!important}#centre .boite_amelioration u{text-decoration:none!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif;font-size:11px;letter-spacing:.06em;text-transform:uppercase}#centre .boite_amelioration .fz-subhead{text-decoration:none!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:10.5px!important;letter-spacing:.07em;text-transform:uppercase}#centre>h4:has(+ table.tableau_leger){text-align:center!important;margin:14px 0 10px!important;display:block!important}#centre>h4 + table.tableau_leger{margin:0 auto 16px!important}#centre>h4 + table.tableau_leger{border:1px solid color-mix(in srgb,var(--fz-accent) 70%,transparent)!important;box-shadow:0 0 calc(10px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 35%,transparent)!important}#centre>h4 + table.tableau_leger :is(td,th){border:1px solid color-mix(in srgb,var(--fz-accent) 45%,transparent)!important;padding:3px 10px!important}#centre>h4 + table.tableau_leger tr:first-child td{border-bottom-color:color-mix(in srgb,var(--fz-accent) 80%,transparent)!important;color:var(--fz-accent)!important}#centre .fz-build-wrap.fz-research-wrap:not(.fz-off){filter:drop-shadow(0 0 calc(6px*var(--fz-glow)) rgba(168,85,247,.6))}#centre a.fz-build-btn.fz-research{background:linear-gradient(180deg,#b57cff 0%,#8b3fe6 55%,#5f1fb0 100%)!important;border-color:#d8b4ff!important;color:#f6eeff!important;text-shadow:0 0 calc(5px*var(--fz-glow)) rgba(230,210,255,.8)!important}#centre .fz-build-wrap{position:relative}#centre .fz-build-wrap[data-tip]:hover::after{content:attr(data-tip);position:absolute;top:50%;right:calc(100% + 10px);transform:translateY(-50%);z-index:60;white-space:nowrap;padding:6px 10px;font:600 11px "Exo 2","Segoe UI",sans-serif;letter-spacing:.03em;text-transform:none;color:var(--fz-text);background:linear-gradient(160deg,var(--fz-panel),var(--fz-bg));border:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent);border-left:3px solid var(--fz-danger);box-shadow:0 6px 18px rgba(0,0,0,.6),0 0 12px color-mix(in srgb,var(--fz-accent) 25%,transparent);pointer-events:none}#centre .fz-build-wrap.fz-act-wrap{display:inline-block;min-width:240px;margin:6px 0 2px;vertical-align:middle}#centre .fz-build-wrap.fz-act-wrap>a.fz-build-btn{white-space:nowrap;line-height:normal!important}#centre .fz-build-wrap.fz-convoi-wrap:not(.fz-off){filter:drop-shadow(0 0 calc(6px*var(--fz-glow)) rgba(56,140,255,.6))}#centre a.fz-build-btn.fz-convoi{background:linear-gradient(180deg,#5aa8ff 0%,#2a6fe0 55%,#1747a8 100%)!important;border-color:#9cc9ff!important;color:#eef6ff!important;text-shadow:0 0 calc(5px*var(--fz-glow)) rgba(190,220,255,.8)!important}#centre .fz-build-wrap.fz-attack-wrap:not(.fz-off){filter:drop-shadow(0 0 calc(6px*var(--fz-glow)) rgba(255,60,80,.6))}#centre a.fz-build-btn.fz-attack{background:linear-gradient(180deg,#ff6b78 0%,#d42a3a 55%,#8e1220 100%)!important;border-color:#ffa3ab!important;color:#fff0f0!important;text-shadow:0 0 calc(5px*var(--fz-glow)) rgba(255,200,205,.8)!important}#centre a.fz-build-btn.fz-disabled{background:linear-gradient(180deg,#3a434d,#232a31)!important;border-color:#56616d!important;color:#8994a0!important;text-shadow:none!important;cursor:not-allowed}#centre a.fz-build-btn.fz-disabled::before{display:none}#centre .fz-build-wrap.fz-hidden{display:none!important}#centre input.fz-hidden-input:not(#fz-none):not(#fz-none2){display:none!important}#centre form td:has(>input.fz-hidden-input){filter:none!important}#centre .fz-build-wrap.fz-sim-wrap{min-width:180px}#centre table.simulateur tr:has(.fz-sim-wrap):hover>td,#centre table.simulateur tr:has(input[type=submit][value^="Fight"]):hover>td{background:transparent!important}#centre .fz-build-wrap.fz-act-wrap.fz-recolte-wrap{min-width:140px;margin:8px 0 2px}#centre .fz-build-wrap.fz-recolte-wrap:not(.fz-off){filter:drop-shadow(0 0 calc(6px*var(--fz-glow)) rgba(255,180,40,.6))}#centre a.fz-build-btn.fz-recolte{padding:6px 14px!important;font-size:11px!important;letter-spacing:.14em!important;background:linear-gradient(180deg,#ffe066 0%,#ffb020 55%,#d97a06 100%)!important;border-color:#fff0a8!important;color:#2a1600!important;text-shadow:0 1px 0 rgba(255,240,200,.55)!important;clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)!important}@keyframes fz-sweep{0%{left:-60%}55%,100%{left:130%}}`;
function proxyActionButton(inp, btnCls, wrapCls, label) {
if (!inp || inp.classList.contains('fz-hidden-input')) return;
const w = document.createElement('div');
w.className = 'fz-build-wrap fz-act-wrap ' + wrapCls;
const a = document.createElement('a');
a.href = '#'; a.className = 'fz-build-btn ' + btnCls;
a.addEventListener('click', e => { e.preventDefault(); if (!inp.disabled) inp.click(); });
w.appendChild(a);
inp.parentNode.insertBefore(w, inp);
inp.classList.add('fz-hidden-input');
const sync = () => {
if (!inp.isConnected) { w.remove(); clearInterval(t); return; }
const txt = label || (inp.value || '').trim(); if (a.textContent !== txt) a.textContent = txt;
w.classList.toggle('fz-off', inp.disabled); a.classList.toggle('fz-disabled', inp.disabled);
w.classList.toggle('fz-hidden', inp.style.display === 'none' || inp.hidden);
};
sync(); const t = setInterval(sync, 500);
}
function enhanceConvoyButton() {
proxyActionButton(document.querySelector('#centre form input[type="submit"][name="convoi"]'), 'fz-convoi', 'fz-convoi-wrap');
}
function enhanceAttackButtons() {
proxyActionButton(document.querySelector('#formulaireChoixArmee input[type="submit"][name="ChoixArmee"]'), 'fz-attack', 'fz-attack-wrap');
proxyActionButton(document.getElementById('Calys_OF_btnLaunch'), 'fz-flood', 'fz-flood-wrap');
}
const CPLUS_POSTER = GM_getResourceURL('compteplus-affiche');
function compteplusPoster() {
const pay = document.getElementById('paiementBlock'); if (!pay || document.querySelector('#centre .fz-poster')) return;
const info = [...document.querySelectorAll('#centre > div:not([id])')].find(d => d.querySelector(':scope > p > strong')); if (!info) return;
const a = document.createElement('div'); a.className = 'fz-poster'; a.title = 'Prends ton Compte+ !';
const img = document.createElement('img'); img.src = CPLUS_POSTER; img.alt = 'We need you ! Prends ton Compte+ !';
a.appendChild(img); a.addEventListener('click', () => pay.scrollIntoView({ behavior: 'smooth', block: 'start' }));
info.insertBefore(a, info.firstChild);
}
const XATAK_CARD = GM_getResourceURL('membre-carte-xatak');
function easterEggXatak() {
const h2 = document.querySelector('#centre center > h2');
if (!h2 || h2.textContent.trim().toLowerCase() !== 'xatak' || document.querySelector('#centre .fz-egg')) return;
const box = h2.parentElement.querySelector('.boite_membre'); if (!box) return;
const d = document.createElement('div'); d.className = 'fz-egg';
const img = document.createElement('img'); img.src = XATAK_CARD; img.alt = 'XaTaK'; img.title = 'XaTaK';
d.appendChild(img); box.before(d);
}
function colorTravelTime() {
document.querySelectorAll('#centre .boite_membre tr').forEach(tr => {
if (!/temps de trajet/i.test((tr.cells[0] && tr.cells[0].textContent) || '')) return;
const td = tr.cells[1]; if (!td) return;
const t = td.textContent;
const n = re => { const m = t.match(re); return m ? +m[1] : 0; };
const h = n(/(\d+)\s*J/i) * 24 + n(/(\d+)\s*H/) + n(/(\d+)\s*m/) / 60 + n(/(\d+)\s*s/) / 3600;
const k = Math.min(1, Math.max(0, (h - 1) / 9));
td.classList.add('fz-trajet');
td.style.setProperty('color', `hsl(${Math.round(140 * (1 - k))},85%,60%)`, 'important');
});
}
function colorPonteNames() {
if (!/reine/i.test(location.pathname)) return;
document.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
const h = tr.querySelector('h2'); if (!h || tr.classList.contains('fz-u-ouv') || tr.classList.contains('fz-u-mil')) return;
tr.classList.add(/^\s*ouvri.re\s*$/i.test(h.textContent) ? 'fz-u-ouv' : 'fz-u-mil');
});
}
function colorPonteDestinations() {
document.querySelectorAll('#centre span[id^="texte_destination"]').forEach(sp => {
const btn = sp.parentElement; if (!btn) return;
const set = () => { const t = sp.textContent.trim(); btn.dataset.fzDest = /^d.me/i.test(t) ? 'dome' : /^loge/i.test(t) ? 'loge' : /^terrain|^tdc/i.test(t) ? 'tdc' : ''; };
set();
if (!sp.dataset.fzObs) { sp.dataset.fzObs = '1'; new MutationObserver(set).observe(sp, { childList: true, characterData: true, subtree: true }); }
});
}
function levelBadges() {
document.querySelectorAll('#centre span.niveau_amelioration.fz-lvl-src').forEach(sp => { const box = sp.parentElement && sp.parentElement.querySelector('.fz-lvls'); if (box && sp.nextElementSibling !== box) sp.after(box); });
document.querySelectorAll('#centre span.niveau_amelioration:not(.fz-lvl-src)').forEach(sp => {
const m = sp.textContent.match(/niveau\s*(\d+)(?:\s*-+>\s*(\d+))?/i); if (!m) return;
const box = document.createElement('span'); box.className = 'fz-lvls'; box.title = sp.textContent.trim();
box.innerHTML = m[2] ? `<span class="fz-lvl fz-lvl-up">Niv. ${m[1]} › ${m[2]}</span>` : `<span class="fz-lvl">Niv. ${m[1]}</span>`;
sp.classList.add('fz-lvl-src'); sp.after(box);
});
document.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
const box = tr.querySelector('.fz-lvls'), photo = tr.querySelector('.photo_batiment, .photo_recherche, .photo_unite');
if (box && photo && box.parentElement !== photo) { box.classList.add('fz-lvls-photo'); photo.appendChild(box); }
});
}
function waitTimes() {
const pad = n => String(n).padStart(2, '0');
const when = (h) => {
const d = new Date(Date.now() + h * 3600e3), now = new Date();
const day = (x) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
const diff = Math.round((day(d) - day(now)) / 864e5), hm = `${pad(d.getHours())}h${pad(d.getMinutes())}`;
return diff === 0 ? `aujourd'hui ${hm}` : diff === 1 ? `demain ${hm}` : `le ${pad(d.getDate())}/${pad(d.getMonth() + 1)} à ${hm}`;
};
document.querySelectorAll('#centre td.cout_amelioration').forEach(td => {
let img = td.querySelector('img[src*="horloge."]'), row = img && img.closest('tr');
td.querySelectorAll('div.ouvriere').forEach(o => { const tr = o.closest('tr'); if (tr) tr.classList.toggle('fz-hidden-row', /^\s*0\s*$/.test(o.textContent)); });
if (!row) {
const src = [...td.querySelectorAll(':scope > div')].find(d => /⏱\s*\d/.test(d.textContent));
const tb = td.querySelector('table > tbody');
if (src && tb) {
const t = src.textContent, g = (re) => { const m = t.match(re); return m ? +m[1] : 0; };
const J = g(/(\d+)\s*j/i), H = g(/(\d+)\s*h/i), M = g(/(\d+)\s*min/i);
const txt = J ? `${J}J ${H}h` : `${H}h ${M}m`;
let r = tb.querySelector('tr.fz-wait-row');
if (!r) { r = document.createElement('tr'); r.className = 'fz-wait-row'; r.innerHTML = '<td><img src="images/icone/horloge.png" width="18" height="18" alt=""></td><td></td>'; tb.appendChild(r); }
if (r.cells[1].dataset.fzWait !== txt) { r.cells[1].textContent = txt + ' '; delete r.cells[1].dataset.fzWait; }
img = r.querySelector('img'); row = r;
}
}
[...td.querySelectorAll(':scope > div')].forEach(d => { if (/⏱\s*(\d|ressources disponibles)/i.test(d.textContent)) d.classList.add('fz-dup-wait'); });
if (!row || !row.cells[1]) return;
const cell = row.cells[1];
const raw = [...cell.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(' ').split('→')[0].trim();
if (!raw || cell.dataset.fzWait === raw) return;
const n = (re) => { const m = raw.match(re); return m ? +m[1] : 0; };
const h = n(/(\d+)\s*j/i) * 24 + n(/(\d+)\s*h/i) + n(/(\d+)\s*m(?!s)/i) / 60;
let w = cell.querySelector('.fz-when'); if (!w) { w = document.createElement('span'); w.className = 'fz-when'; cell.appendChild(w); }
w.textContent = h > 0 ? '→ ' + when(h) : '';
cell.dataset.fzWait = raw; cell.classList.add('fz-wait-cell');
});
}
function membersPageExtras() {
const t = document.getElementById('tabMembresAlliance'); if (!t) return;
const a = [...document.querySelectorAll('#centre a[href*="amis.php"]')].find(x => /ajouter tous les membres/i.test(x.textContent));
if (a && !a.classList.contains('fz-addfriends')) { a.classList.add('fz-addfriends'); a.innerHTML = '<span class="fz-plus">+</span><span>Ajouter les membres à ma liste d\'amis</span>'; const br = a.previousElementSibling; if (br && br.tagName === 'BR') br.remove(); }
const h = [...document.querySelectorAll('#centre table.simulateur h2')].find(x => /membres de l.alliance/i.test(x.textContent));
if (h && !h.classList.contains('fz-band')) { h.classList.add('fz-band'); h.parentElement.classList.add('fz-band-cell'); }
membersColsToggle(t, a);
}
function membersColsToggle(t, a) {
const show = GM_getValue('fzMembresTechFourmi', true);
document.documentElement.classList.toggle('fz-cache-tf', !show);
const head = t.rows[0]; if (!head) return;
const cible = new Set(); let pos = 0;
[...head.cells].forEach(c => { const n = c.colSpan || 1; if (/technolog|fourmili/i.test(c.textContent)) for (let i = 0; i < n; i++) cible.add(pos + i); pos += n; });
[...t.rows].forEach(r => { let p = 0; [...r.cells].forEach(c => { const n = c.colSpan || 1; let tout = true; for (let i = 0; i < n; i++) if (!cible.has(p + i)) tout = false; c.classList.toggle('fz-col-tf', tout && cible.size > 0); p += n; }); });
if (document.getElementById('fz-cols-tf')) return;
const lab = document.createElement('label'); lab.id = 'fz-cols-tf'; lab.className = 'fz-cols-tf'; lab.title = 'Afficher ou masquer les colonnes Technologie et Fourmilière';
lab.innerHTML = '<input type="checkbox"><span class="fz-cols-box"></span><span>Technologie / Fourmilière</span>';
const cb = lab.querySelector('input'); cb.checked = show;
cb.addEventListener('change', () => { GM_setValue('fzMembresTechFourmi', cb.checked); document.documentElement.classList.toggle('fz-cache-tf', !cb.checked); });
const row = document.createElement('div'); row.className = 'fz-mem-actions';
if (a && a.classList.contains('fz-addfriends')) { a.before(row); row.append(a, lab); } else { t.after(row); row.append(lab); }
}
function markMeInMembers() {
membersPageExtras();
const t = document.getElementById('tabMembresAlliance'); const p = document.getElementById('pseudo');
if (!t || !p) return; const me = p.textContent.trim().toLowerCase(); if (!me) return;
[...t.rows].forEach(r => r.classList.toggle('fz-me', [...r.querySelectorAll('a')].some(a => a.textContent.trim().toLowerCase() === me)));
}
function splitArmyStats() {
const anchor = document.querySelector('#centre table.simulateur span#Vie'); const row = anchor && anchor.closest('tr');
const t = row && row.closest('table'); if (!t || t.classList.contains('fz-stats')) return;
const h = t.querySelector('h3'); if (h) h.classList.add('fz-band');
const st = document.createElement('table'); st.className = 'simulateur fz-stats'; st.style.textAlign = 'center';
const tb = document.createElement('tbody'); st.appendChild(tb);
const head = document.createElement('tr'); head.innerHTML = '<td colspan="10"><h3 class="fz-band">Statistiques</h3></td>'; tb.appendChild(head);
const th = t.querySelector('tr.fz-thead') || t.rows[1];
if (th && th.cells.length >= 4) { const cols = document.createElement('tr'); cols.className = 'fz-stats-cols'; cols.innerHTML = '<td></td>' + [...th.cells].slice(1, 4).map(c => `<td colspan="${c.colSpan}">${c.textContent.trim()}</td>`).join(''); tb.appendChild(cols); }
let r = row; while (r) { const nx = r.nextElementSibling; tb.appendChild(r); r = nx; }
t.after(st);
syncArmyStatsCols();
}
function syncArmyStatsCols() {
const st = document.querySelector('#centre table.simulateur.fz-stats'); const t = st && st.previousElementSibling; if (!t) return;
const head = t.querySelector('tr.fz-thead') || [...t.rows].find(r => r.cells.length === 4); if (!head) return;
const ws = []; [...head.cells].forEach(c => { const w = c.getBoundingClientRect().width; for (let i = 0; i < c.colSpan; i++) ws.push(w / c.colSpan); });
const sum = ws.reduce((x, y) => x + y, 0); if (!sum) return;
let cg = st.querySelector('colgroup'); if (!cg) { cg = document.createElement('colgroup'); st.insertBefore(cg, st.firstChild); }
if (cg.children.length !== ws.length) cg.innerHTML = ws.map(() => '<col>').join('');
ws.forEach((w, i) => { cg.children[i].style.width = (w / sum * 100).toFixed(3) + '%'; });
st.style.tableLayout = 'fixed'; st.style.minWidth = ''; st.style.width = t.getBoundingClientRect().width.toFixed(2) + 'px';
}
const UNIT_ABBR = [[/^ouvri/i,'OUV'],[/^jeune soldate naine/i,'JSN'],[/^soldate naine/i,'SN'],[/^naine/i,'NE'],[/^jeune soldate/i,'JS'],[/^soldate d/i,'SE'],[/^soldate/i,'S'],[/^concierge d/i,'CE'],[/^concierge/i,'C'],[/^artilleuse d/i,'AE'],[/^artilleuse/i,'A'],[/^tank d/i,'TkE'],[/^tank/i,'Tk'],[/^tueuse d/i,'TE'],[/^tueuse/i,'T']];
const fmtKMGT = (v) => {
const U = [[1e12,'T'],[1e9,'G'],[1e6,'M'],[1e3,'K']];
for (const [b, u] of U) if (v >= b) return (Math.ceil(v / b * 100) / 100).toFixed(2) + u;
return String(v);
};
const UNIT_PHOTOS = {
OUV: GM_getResourceURL('unites-ouvriere'),
JSN: GM_getResourceURL('unites-jeune-soldate-naine'),
SN: GM_getResourceURL('unites-soldate-naine'),
NE: GM_getResourceURL('unites-naine'),
JS: GM_getResourceURL('unites-jeune-soldate'),
S: GM_getResourceURL('unites-soldate'),
SE: GM_getResourceURL('unites-soldate-elite'),
C: GM_getResourceURL('unites-concierge'),
CE: GM_getResourceURL('unites-concierge-elite'),
A: GM_getResourceURL('unites-artilleuse'),
AE: GM_getResourceURL('unites-artilleuse-elite'),
Tk: GM_getResourceURL('unites-tank'),
TkE: GM_getResourceURL('unites-tank-elite'),
T: GM_getResourceURL('unites-tueuse'),
TE: GM_getResourceURL('unites-tueuse-elite'),
};
const pluralUnit = (name) => name.split(' ').map(w => /^d[’']/i.test(w) ? (/s$/i.test(w) ? w : w + 's') : (/^(de|du|des)$/i.test(w) || /s$/i.test(w) ? w : w + 's')).join(' ');
function armyCopyText() {
const parts = [];
document.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
const h = tr.querySelector('h2'); if (!h) return; const name = h.textContent.trim(); if (/^ouvri/i.test(name)) return;
const n = parseInt(((h.nextElementSibling && h.nextElementSibling.textContent) || '').replace(/[^\d]/g, ''), 10) || 0;
if (n > 0) parts.push(`${n.toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ')} ${n > 1 ? pluralUnit(name) : name}`);
});
return parts.length ? parts.join(', ') + '.' : '';
}
function armyCopyButton() {
if (!/reine/i.test(location.pathname) || document.querySelector('#centre .fz-copy-army')) return;
const first = document.querySelector('#centre tr.ligneAmelioration'); const tbl = first && first.closest('table'); if (!tbl) return;
const wrap = document.createElement('div'); wrap.className = 'fz-copy-army-wrap';
const b = document.createElement('a'); b.href = '#'; b.className = 'fz-copy-army';
b.innerHTML = '<span class="fz-plus">⧉</span><span class="fz-copy-lbl">Copier mon armée</span>';
b.title = 'Copie les unités de combat (hors ouvrières) dans le presse-papier';
b.addEventListener('click', async (e) => {
e.preventDefault(); const txt = armyCopyText(); const lbl = b.querySelector('.fz-copy-lbl');
if (!txt) { lbl.textContent = 'Aucune unité de combat'; setTimeout(() => { lbl.textContent = 'Copier mon armée'; }, 2000); return; }
try { await navigator.clipboard.writeText(txt); }
catch (err) { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }
b.classList.add('fz-ok'); lbl.textContent = 'Armée copiée ✓';
setTimeout(() => { b.classList.remove('fz-ok'); lbl.textContent = 'Copier mon armée'; }, 2000);
});
wrap.appendChild(b); tbl.parentNode.insertBefore(wrap, tbl);
}
function ponteArmyBadges() {
if (!/reine/i.test(location.pathname)) return;
document.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
const h = tr.querySelector('h2'), photo = tr.querySelector('.photo_unite'); if (!h || !photo) return;
const name = h.textContent.trim(), ab = (UNIT_ABBR.find(([re]) => re.test(name)) || [null, ''])[1];
if (UNIT_PHOTOS[ab] && photo.dataset.fzUnit !== ab) { photo.dataset.fzUnit = ab; photo.style.setProperty('background', `url("${UNIT_PHOTOS[ab]}") center/cover no-repeat`, 'important'); }
const num = (t) => parseInt(String(t || '').replace(/[^\d]/g, ''), 10) || 0;
const cur = num(h.nextElementSibling && h.nextElementSibling.textContent);
const pp = tr.querySelector('.ppApres'); const plus = pp && pp.querySelector('.plus'); const q = plus ? num(plus.textContent) : 0;
if (pp) pp.classList.add('fz-pp-hidden');
let b = photo.querySelector('.fz-army-badge'); if (!b) { b = document.createElement('span'); b.className = 'fz-army-badge'; photo.appendChild(b); }
const html = `<b>${fmtKMGT(cur)}</b> <i>${ab}</i>${q > 0 ? ` <em>(+${fmtKMGT(q)})</em>` : ''}`;
if (b.innerHTML !== html) b.innerHTML = html;
b.title = `${name} : ${cur.toLocaleString('fr-FR')}` + (q > 0 ? ` (+${q.toLocaleString('fr-FR')} en ponte)` : '');
});
}
function enhanceCollectiveSend() {
const ta = document.getElementById('message_collectif'); const f = ta && ta.form; if (!f) return;
proxyActionButton(f.querySelector('input[type="submit"]'), 'fz-convoi', 'fz-convoi-wrap fz-msgc-wrap', 'Envoyer');
}
function placeCollectiveSmileys() {
const ta = document.getElementById('message_collectif'); const f = ta && ta.form; if (!f) return;
const box = f.closest('.boiteMessagerie'), sm = box && box.querySelector(':scope > .tousLesSmiley'), bar = f.querySelector('span.sur_une_ligne');
if (sm && bar && sm.parentElement !== f) { sm.classList.add('fz-smiley-box'); f.insertBefore(sm, bar); }
}
let fzDiplo = null, fzDiploLoading = false;
async function loadDiplo() {
try { const c = JSON.parse(localStorage.getItem('fzDiplo') || 'null'); if (c && Date.now() - c.ts < 3600e3) { fzDiplo = c; return; } } catch (e) {}
if (fzDiploLoading) return; fzDiploLoading = true;
try {
const get = async (u) => new DOMParser().parseFromString(await (await fetch(u, { credentials: 'include' })).text(), 'text/html');
const me = (document.getElementById('pseudo') || {}).textContent; let tag = '';
if (me) { const d = await get('Membre.php?Pseudo=' + encodeURIComponent(me.trim())); const a = d.querySelector('tr.monAlliance a[href*="classementAlliance"]') || d.querySelector('.boite_membre a[href*="classementAlliance"]'); tag = a ? a.textContent.trim() : ''; }
let allies = []; const l = [...document.querySelectorAll('#menu a')].find(a => /^diplomatie$/i.test(a.textContent.trim()));
if (l) { const d = await get(l.getAttribute('href')); allies = [...d.querySelectorAll('a[href*="classementAlliance"]')].filter(a => /pacte/i.test((a.closest('tr') || {}).textContent || '')).map(a => a.textContent.trim()); }
fzDiplo = { tag, allies, ts: Date.now() }; try { localStorage.setItem('fzDiplo', JSON.stringify(fzDiplo)); } catch (e) {}
} catch (e) {} finally { fzDiploLoading = false; }
}
function colorChatTags() {
const lines = document.querySelectorAll('#nouveauxMessages > p, #anciensMessages > p'); if (!lines.length) return;
if (!fzDiplo) { loadDiplo(); return; }
lines.forEach(p => {
if (p.dataset.fzTag) return;
const a = p.querySelector(':scope > a[href*="classementAlliance"]'); const t = a ? a.textContent.trim() : '';
p.dataset.fzTag = '1';
if (!t) return;
p.classList.add(t === fzDiplo.tag ? 'fz-chat-me' : fzDiplo.allies.includes(t) ? 'fz-chat-ally' : 'fz-chat-other');
});
}
function convoyInfo() {
const h = [...document.querySelectorAll('#centre table.simulateur h2')].find(x => /^convois$/i.test(x.textContent.trim())); if (!h) return;
h.classList.add('fz-band');
const t = h.closest('table');
const num = (id) => { const e = document.getElementById(id); return e ? Math.floor(parseFloat(e.textContent)) || 0 : 0; };
let bonus = 0; for (const sc of document.scripts) { const m = sc.textContent.match(/function\s+maj_input_convoi[\s\S]*?var\s+bonus\s*=\s*(\d+(?:\.\d+)?)/); if (m) { bonus = parseFloat(m[1]); break; } }
const cap = 10 * (1 + 0.05 * bonus);
const total = num('nb_ouvrieres'), tdc = num('quantite_tdc');
const dispo = Math.max(0, total - Math.min(total, tdc));
const f = (v) => Math.floor(v).toLocaleString('fr-FR');
const icon = (src) => { const i = document.querySelector(`#centre form img[src*="${src}"]`); return i ? `<img src="${i.getAttribute('src')}" alt="">` : ''; };
let box = document.querySelector('#centre .fz-convoi-info');
if (!box) {
box = document.createElement('table'); box.className = 'simulateur fz-convoi-info';
t.after(box);
const fN = document.getElementById('input_nbNourriture'), fM = document.getElementById('input_nbMateriaux');
const hN = document.getElementById('nbNourriture'), hM = document.getElementById('nbMateriaux');
let last = null;
[fN, fM].forEach(x => x && x.addEventListener('focus', () => { last = x; }));
box.addEventListener('click', (e) => {
const a = e.target.closest('.fz-ci-fill'); if (!a) return; e.preventDefault();
const n = (x) => x ? parseInt(String(x.value).replace(/[^\d]/g, ''), 10) || 0 : 0;
const shown = (x) => n(x) > 0;
const has = (x, h) => shown(x) || n(h) > 0;
let target;
if (shown(fN) !== shown(fM)) target = shown(fN) ? fN : fM;
else if (has(fN, hN) !== has(fM, hM)) target = has(fN, hN) ? fN : fM;
else target = last || fM;
if (!target) return;
const other = target === fN ? fM : fN, otherH = target === fN ? hM : hN;
const stock = num(target === fN ? 'nb_nourriture' : 'nb_materiaux');
const v = Math.min(parseInt(a.dataset.v, 10) || 0, stock);
const $ = window.jQuery;
if (other) { other.value = ''; if (otherH) otherH.value = '0'; if ($) $(other).trigger('keyup').trigger('change'); }
target.value = String(v);
if ($) $(target).trigger('keyup').trigger('change'); else target.dispatchEvent(new Event('change', { bubbles: true }));
target.focus(); last = target;
a.classList.add('fz-ci-done'); setTimeout(() => a.classList.remove('fz-ci-done'), 900);
});
}
const html = `<tbody><tr><td colspan="2"><h3 class="fz-band">Capacité de convoi</h3></td></tr>
      <tr><th>${icon('icone_ouvriere')}Ouvrières disponibles <small>(total − terrain de chasse)</small></th><td>${f(dispo)}</td></tr>
      <tr><th>${icon('icone_pomme')}${icon('icone_bois')}Livrable sans découvrir le TdC</th><td><a href="#" class="fz-ci-fill" data-v="${Math.floor(dispo * cap)}" title="Remplir le convoi avec ce montant">${f(dispo * cap)}</a></td></tr>
      <tr><th>${icon('icone_pomme')}${icon('icone_bois')}Livrable avec 100 % des ouvrières</th><td><a href="#" class="fz-ci-fill" data-v="${Math.floor(total * cap)}" title="Remplir le convoi avec ce montant">${f(total * cap)}</a></td></tr>
      <tr class="fz-ci-note"><td colspan="2">${f(total)} ouvrières au total · ${f(Math.min(total, tdc))} sur le terrain de chasse · ${cap.toLocaleString('fr-FR')} ressources par ouvrière (Étable à pucerons niv. ${bonus})</td></tr>
      <tr class="fz-ci-simhead"><td colspan="2"><span>Simulation · Étable à pucerons</span>
        <span class="fz-ci-ctl"><button type="button" data-d="-1">−</button><input type="number" min="0" max="100" class="fz-ci-lvl"><button type="button" data-d="1">+</button></span></td></tr>
      <tr class="fz-ci-sim"><td colspan="2"></td></tr></tbody>`;
if (box.dataset.k !== html) {
const keep = box.querySelector('.fz-ci-lvl'); const lvl = keep ? keep.value : String(bonus + 1);
box.innerHTML = html; box.dataset.k = html;
const inp = box.querySelector('.fz-ci-lvl'); inp.value = lvl;
const render = () => {
const L = Math.max(0, Math.min(100, parseInt(inp.value, 10) || 0)), c2 = 10 * (1 + 0.05 * L);
const d = (a, b) => { const g = b - a; return `<em class="${g > 0 ? 'up' : g < 0 ? 'down' : ''}">${g > 0 ? '+' : g < 0 ? '−' : '±'}${f(Math.abs(g))}</em>`; };
box.querySelector('.fz-ci-sim > td').innerHTML = `<table class="fz-ci-simt"><tr><th></th><th>Actuel (niv. ${bonus})</th><th>Simulé (niv. ${L})</th><th>Gain</th></tr>
          <tr><td>Par ouvrière</td><td>${cap.toLocaleString('fr-FR')}</td><td>${c2.toLocaleString('fr-FR')}</td><td><em class="${c2 > cap ? 'up' : c2 < cap ? 'down' : ''}">${c2 >= cap ? '+' : '−'}${Math.abs(c2 - cap).toLocaleString('fr-FR', { maximumFractionDigits: 2 })}</em></td></tr>
          <tr><td>Sans découvrir le TdC</td><td>${f(dispo * cap)}</td><td>${f(dispo * c2)}</td><td>${d(dispo * cap, dispo * c2)}</td></tr>
          <tr><td>Avec 100 % des ouvrières</td><td>${f(total * cap)}</td><td>${f(total * c2)}</td><td>${d(total * cap, total * c2)}</td></tr></table>`;
};
inp.addEventListener('input', render);
box.querySelectorAll('.fz-ci-ctl button').forEach(b => b.addEventListener('click', () => { inp.value = Math.max(0, Math.min(100, (parseInt(inp.value, 10) || 0) + +b.dataset.d)); render(); }));
render();
}
box.style.width = t.getBoundingClientRect().width + 'px'; box.style.boxSizing = 'border-box';
}
function enhanceHarvestButton() {
proxyActionButton(document.querySelector('#boite_ouvriere input#ChangeRessource[type="submit"]'), 'fz-recolte', 'fz-recolte-wrap', 'Récolter');
}
function enhanceSimButtons() {
const chasse = /simulateurChasse/i.test(location.pathname);
document.querySelectorAll('#centre input[type="submit"]').forEach(i => {
if (!/^\s*fight/i.test(i.value)) return;
if (chasse) proxyActionButton(i, 'fz-sim-chasse', 'fz-sim-wrap fz-sim-chasse-wrap', 'Simuler chasse');
else proxyActionButton(i, 'fz-attack', 'fz-sim-wrap fz-attack-wrap', 'Simuler combat');
});
}
function markCancelLinks() {
document.querySelectorAll('#centre a:not(.fz-cancel)').forEach(a => {
if (/^\s*annuler\s*$/i.test(a.textContent) || /annuler/i.test(a.getAttribute('href') || '')) {
a.classList.add('fz-cancel'); if (!a.title) a.title = 'Annuler';
}
});
}
 const BTN_LABEL = /laboratoire/.test(location.pathname) ? 'Rechercher' : 'Construire';
function enhanceBuildButtons() {
document.querySelectorAll('#centre tr.ligneAmelioration').forEach(row => {
if (row.querySelector('.fz-build-wrap')) return;
const cost = row.querySelector('td.cout_amelioration');
if (cost && row.querySelector('td.td_icone_ponte, .icone_ponte') || (cost && /reine/i.test(location.pathname))) {
const pw = document.createElement('div');
pw.className = 'fz-build-wrap fz-ponte-wrap';
const inp = row.querySelector('td.td_icone_ponte input[type=image], .icone_ponte input[type=image]');
if (inp) {
const a = document.createElement('a');
a.href = '#'; a.className = 'fz-build-btn fz-ponte'; a.textContent = 'Pondre';
a.addEventListener('click', e => { e.preventDefault(); inp.click(); });
pw.appendChild(a);
const td = inp.closest('td'); if (td) td.classList.add('fz-hidden-td');
} else {
const off = document.createElement('span');
off.className = 'fz-build-btn fz-disabled'; off.textContent = 'Pondre';
pw.classList.add('fz-off'); pw.dataset.tip = 'Prérequis manquants'; pw.appendChild(off);
}
cost.insertBefore(pw, cost.firstChild);
cost.classList.add('fz-ponte-cell');
return;
}
const src = row.querySelector('.icone_construction, .icone_recherche, .bouton_gris');
if (!cost) return;
const wrap = document.createElement('div');
wrap.className = 'fz-build-wrap';
if (!src) {
const off = document.createElement('span');
off.className = 'fz-build-btn fz-disabled'; off.textContent = BTN_LABEL; wrap.dataset.tip = 'Prérequis manquants';
wrap.classList.add('fz-off'); wrap.appendChild(off);
cost.insertBefore(wrap, cost.firstChild);
const last = row.lastElementChild;
if (last !== cost && !last.textContent.trim()) last.classList.add('fz-hidden-td');
return;
}
const link = src.querySelector('a');
if (link) {
link.classList.add('fz-build-btn'); if (BTN_LABEL === 'Rechercher') { link.classList.add('fz-research'); wrap.classList.add('fz-research-wrap'); }
link.append(document.createTextNode(BTN_LABEL));
wrap.appendChild(link);
} else {
const img = src.querySelector('img');
const off = document.createElement('span');
off.className = 'fz-build-btn fz-disabled';
off.textContent = BTN_LABEL;
wrap.dataset.tip = (img && (img.title || img.alt)) || 'Indisponible';
wrap.classList.add('fz-off');
wrap.appendChild(off);
}
cost.insertBefore(wrap, cost.firstChild);
const oldTd = src.closest('td');
if (oldTd && oldTd !== cost) oldTd.classList.add('fz-hidden-td');
});
}
const NEON_ICONS = [
['icone_sablier', '#5ce1ff', '<path d="M6 3h12M6 21h12M7 3c0 5 4 6 5 9-1 3-5 4-5 9M17 3c0 5-4 6-5 9 1 3 5 4 5 9"/><path d="M9.5 18.5h5L12 15z" fill="C" stroke="none"/>'],
['horloge', '#5ce1ff', '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2.5"/><path d="M12 2v1.5M12 20.5V22M2 12h1.5M20.5 12H22" opacity=".6"/>'],
['icone_bois', '#ffae42', '<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M4 7.4l8 4.6 8-4.6M12 12v9.2"/><path d="M8 5.1l8 4.6" opacity=".55"/>'],
['icone_pomme', '#7dff9a', '<path d="M12 21c-4.5 0-7.5-3.4-7.5-7.6C4.5 9.6 7.2 7 10 7c1 0 1.5.4 2 .4s1-.4 2-.4c2.8 0 5.5 2.6 5.5 6.4 0 4.2-3 7.6-7.5 7.6z"/><path d="M12 7.4V5c0-1.6 1.3-2.6 3.2-2.6C15.2 4 14 5 12 5"/><path d="M8.5 13.5h7M9.5 16.5h5" opacity=".6"/>'],
['icone_ouvriere', '#d6ecff', '<circle cx="12" cy="6.5" r="2.5"/><ellipse cx="12" cy="12" rx="2.2" ry="2.6"/><ellipse cx="12" cy="18.2" rx="3" ry="3.3"/><path d="M9.8 11L5 8.5M14.2 11L19 8.5M9.8 12.5L4.5 13M14.2 12.5L19.5 13M9.8 14L6 18M14.2 14L18 18M10.8 4.5L9 2M13.2 4.5L15 2"/>'],
['fourmi', '#d6ecff', '<circle cx="12" cy="6.5" r="2.5"/><ellipse cx="12" cy="12" rx="2.2" ry="2.6"/><ellipse cx="12" cy="18.2" rx="3" ry="3.3"/><path d="M9.8 11L5 8.5M14.2 11L19 8.5M9.8 12.5L4.5 13M14.2 12.5L19.5 13M9.8 14L6 18M14.2 14L18 18M10.8 4.5L9 2M13.2 4.5L15 2"/>'],
['icone_tdc', '#4dffd2', '<circle cx="12" cy="12" r="6"/><ellipse cx="12" cy="12" rx="10.5" ry="3.6" transform="rotate(-20 12 12)"/><path d="M7 10.5c2 1 8 1 10 0M7.5 14c2 .8 7 .8 9 0" opacity=".55"/>'],
['icone_enveloppe_combat', '#ff6b5a', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><path d="M13 12.5l-2 3.5h3l-2 3.5" stroke-width="1.4"/>'],
['icone_enveloppe_chasse', '#4dffd2', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><circle cx="17.5" cy="15.5" r="2.2"/>'],
['icone_enveloppe', '#5ce1ff', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/>'],
['icone_coeur', '#ff5c8a', '<path d="M12 20.5S3.5 15 3.5 9.2C3.5 6.4 5.6 4.5 8 4.5c1.8 0 3.2 1 4 2.4.8-1.4 2.2-2.4 4-2.4 2.4 0 4.5 1.9 4.5 4.7C20.5 15 12 20.5 12 20.5z"/><path d="M5 11.5h4l1.5-2.5 2 5 1.5-2.5H19" stroke-width="1.3"/>'],
['icone_degat_attaque', '#ff8a3d', '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2" fill="C"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>'],
['icone_degat_defense', '#5c9dff', '<path d="M12 2.5l8 3v6c0 5-3.6 8.6-8 10-4.4-1.4-8-5-8-10v-6z"/><path d="M12 6.5l4.5 1.7v3.5c0 2.8-2 4.9-4.5 5.8-2.5-.9-4.5-3-4.5-5.8V8.2z" opacity=".55"/>'],
['livre', '#5ce1ff', '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 11.5h8M8 15h5"/><circle cx="12" cy="19" r=".6" fill="C"/>'],
['fleche-champs-droite', '#5ce1ff', '<path d="M5 6l6 6-6 6M12 6l6 6-6 6"/>'],
];
const neonIconCss = (accent) => NEON_ICONS.map(([match, color, body]) => {
const c = match === 'icone_sablier' || match === 'horloge' || match === 'livre' || match === 'fleche-champs-droite' || match === 'icone_enveloppe' ? accent : color;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="${c}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body.replace(/"C"/g, `"${c}"`)}</svg>`;
return `img[src*="${match}."]{content:url("data:image/svg+xml,${encodeURIComponent(svg)}")!important;object-fit:contain;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${c})!important;}`;
}).join('') + 'img[src*="livre."]{width:20px!important;height:20px!important;vertical-align:middle;}';
const ANT = '<circle cx="12" cy="6.5" r="2.4"/><ellipse cx="12" cy="12" rx="2.1" ry="2.5"/><ellipse cx="12" cy="18.2" rx="2.9" ry="3.2"/><path d="M9.9 11L5.5 8.5M14.1 11l4.4-2.5M9.9 12.6L5 13.2M14.1 12.6l4.9.6M9.9 14L6.5 17.8M14.1 14l3.4 3.8M10.9 4.5L9.3 2.2M13.1 4.5l1.6-2.3"/>';
const COMPTE_ICONS = [
['a.boutonEnnemies', 'A', 20, '<path d="M12 3c-4.4 0-7.5 3-7.5 7 0 2.4 1 4 2.5 5v3.5h10V15c1.5-1 2.5-2.6 2.5-5 0-4-3.1-7-7.5-7z"/><circle cx="9" cy="10.5" r="1.7" fill="C"/><circle cx="15" cy="10.5" r="1.7" fill="C"/><path d="M12 13.2l-1 1.8h2zM10 18.5v2M12 18.5v2M14 18.5v2"/>'],
['a.boutonSimulateurChasse', 'A', 20, '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5" opacity=".6"/><path d="M12 12l6-6"/><circle cx="15.5" cy="15" r="1.2" fill="C"/>'],
['a.boutonSimulateurDuree', 'A', 20, '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2M10 2.5h4M12 2.5V6M18.5 7l1.5-1.5"/>'],
['a.boutonSimulateurFlood', 'A', 20, '<path d="M4 8.5h14M14.5 5L18 8.5 14.5 12M20 15.5H6M9.5 12L6 15.5 9.5 19"/>'],
['.contenu_boite_compte_plus a.boutonReine', 'A', 20, '<path d="M12 3.5c-3.6 0-6 5-6 9.5 0 3.6 2.6 6.5 6 6.5s6-2.9 6-6.5c0-4.5-2.4-9.5-6-9.5z"/><path d="M12 10v6M9 13h6"/>'],
['a.boutonListeAmis', 'A', 20, '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4" opacity=".7"/><path d="M15.5 13.6c3 0 5 2 5 4.9" opacity=".7"/>'],
['a.boutonBlocNote', 'A', 20, '<rect x="4.5" y="3" width="15" height="18" rx="2"/><path d="M8 8h8M8 11.5h8M8 15h4.5"/><path d="M15 16.5l3.5-3.5 1.5 1.5-3.5 3.5H15z" fill="C" stroke="none"/>'],
['.mini_icone_ponte', '#d6ecff', 22, ANT],
['.mini_icone_construction', '#ffae42', 22, '<path d="M14.5 3.5a4 4 0 0 0-3.9 5.1L3.8 15.4a1.9 1.9 0 0 0 2.7 2.7l6.8-6.8a4 4 0 0 0 5.1-3.9l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4z"/><circle cx="5.2" cy="16.7" r=".7" fill="C"/>'],
['.mini_icone_recherche', '#b77cff', 22, '<path d="M9.5 3h5M10.5 3v6L5 18.5c-.6 1.2.2 2.5 1.6 2.5h10.8c1.4 0 2.2-1.3 1.6-2.5L13.5 9V3"/><path d="M7.5 14.5h9" opacity=".6"/><circle cx="10.5" cy="17.5" r="1" fill="C"/><circle cx="14" cy="16.5" r=".8" fill="C"/>'],
['.mini_icone_chasse', '#4dffd2', 22, '<ellipse cx="12" cy="13.5" rx="5" ry="6.5"/><path d="M12 7v13M9 4.5l1.5 2.5M15 4.5l-1.5 2.5M7 10.5L3.5 9M17 10.5l3.5-1.5M7 14H3M17 14h4M7.5 17.5l-3 2M16.5 17.5l3 2"/>'],
['.mini_icone_attaque', '#ff6b5a', 22, '<path d="M3.5 3.5l3 .6 8 8-2.4 2.4-8-8z"/><path d="M20.5 3.5l-.6 3-8 8-2.4-2.4 8-8z"/><path d="M11.5 16.8l5.3-5.3M7.2 11.5l5.3 5.3M15.3 15.3l3.2 3.2M8.7 15.3l-3.2 3.2"/><circle cx="19.3" cy="19.3" r="1.1" fill="C"/><circle cx="4.7" cy="19.3" r="1.1" fill="C"/>'],
['.mini_icone_convoi', '#5ce1ff', 22, '<path d="M3 10l5-3h8l5 3v5l-5 3H8l-5-3z"/><path d="M8 7v11M16 7v11" opacity=".6"/><path d="M10.5 12.5h4M12.5 10.5l2 2-2 2"/>'],
];
const compteIconCss = (accent) => COMPTE_ICONS.map(([sel, col, size, body]) => {
const c = col === 'A' ? accent : col;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body.replace(/"C"/g, `"${c}"`)}</svg>`;
const target = sel.startsWith('a.') || sel.includes(' a.') ? `#boiteComptePlus .contenu_boite_compte_plus ${sel.replace('.contenu_boite_compte_plus ', '')} > span` : `#boiteComptePlus .contenu_boite_compte_plus ${sel}`;
return `${target}{background:url("data:image/svg+xml,${encodeURIComponent(svg)}") center/${size}px ${size}px no-repeat!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${c})!important;}`;
}).join('') + '.contenu_boite_compte_plus a > span{transition:transform .15s;}.contenu_boite_compte_plus a:hover > span{transform:scale(1.15);}';
const MI = {
topFourmiliere: '<circle cx="12" cy="6.5" r="2.4"/><ellipse cx="12" cy="12" rx="2.1" ry="2.5"/><ellipse cx="12" cy="18.2" rx="2.9" ry="3.2"/><path d="M9.9 11L5.5 8.5M14.1 11l4.4-2.5M9.9 12.6L5 13.2M14.1 12.6l4.9.6M9.9 14L6.5 17.8M14.1 14l3.4 3.8"/>',
topAlliance: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z"/><circle cx="12" cy="9" r="1.6"/><circle cx="9" cy="14.5" r="1.6"/><circle cx="15" cy="14.5" r="1.6"/><path d="M11.2 10.4l-1.4 2.7M12.8 10.4l1.4 2.7M10.6 14.5h2.8" opacity=".7"/>',
topCommunaute: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.3 3.6 5.2 3.6 8.5s-1.1 6.2-3.6 8.5c-2.5-2.3-3.6-5.2-3.6-8.5s1.1-6.2 3.6-8.5z"/>',
topCompte: '<path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8-4.3-4.1 5.9-.8z"/>',
topAide: '<circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.7v.6"/><circle cx="12" cy="16.8" r=".8" fill="C"/>',
Reine: '<path d="M4 17.5L3 7.5l5 4 4-6.5 4 6.5 5-4-1 10z"/><path d="M4.5 20.5h15"/><circle cx="12" cy="13.5" r="1.2" fill="C"/>',
Construction: '<path d="M14.5 3.5a4 4 0 0 0-3.9 5.1L3.8 15.4a1.9 1.9 0 0 0 2.7 2.7l6.8-6.8a4 4 0 0 0 5.1-3.9l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4z"/>',
Laboratoire: '<path d="M9.5 3h5M10.5 3v6L5 18.5c-.6 1.2.2 2.5 1.6 2.5h10.8c1.4 0 2.2-1.3 1.6-2.5L13.5 9V3"/><path d="M7.5 14.5h9"/>',
Ressources: '<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M4 7.4l8 4.6 8-4.6M12 12v9.2"/>',
Armee: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z"/><path d="M8 10l4 2.5 4-2.5M8 13.5l4 2.5 4-2.5"/>',
Ennemies: '<path d="M12 3c-4.4 0-7.5 3-7.5 7 0 2.4 1 4 2.5 5v3.5h10V15c1.5-1 2.5-2.6 2.5-5 0-4-3.1-7-7.5-7z"/><circle cx="9" cy="10.5" r="1.6" fill="C"/><circle cx="15" cy="10.5" r="1.6" fill="C"/><path d="M10 18.5v2M12 18.5v2M14 18.5v2"/>',
Colonies: '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="1.8"/><circle cx="19" cy="6" r="1.8"/><circle cx="5" cy="18" r="1.8"/><circle cx="19" cy="18" r="1.8"/><path d="M6.5 7.3l3.2 2.6M17.5 7.3l-3.2 2.6M6.5 16.7l3.2-2.6M17.5 16.7l-3.2-2.6"/>',
Carte: '<path d="M3 6l6-2.5 6 2.5 6-2.5v14.5l-6 2.5-6-2.5-6 2.5z"/><path d="M9 3.5V18M15 6v14.5"/>',
Commerce: '<path d="M3 10l5-3h8l5 3v5l-5 3H8l-5-3z"/><path d="M10.5 12.5h4M12.5 10.5l2 2-2 2"/>',
Messagerie: '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/>',
MaFourmiliere: '<path d="M3 20h18M5 20v-6a7 7 0 0 1 14 0v6"/><path d="M9.5 20v-4h5v4M12 7V4.5M10.5 4.5h3"/>',
Chat: '<path d="M4 5h16v10.5H9.5L5 19.5v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',
Forum: '<path d="M3 4h12v8.5H8L4.5 15.5V12.5H3z"/><path d="M17.5 8H21v8.5h-1.5v3l-3-3H10V15"/>',
ForumExt: '<path d="M4 5h11v9H8.5L5 17.5V14H4z"/><path d="M15.5 13.5L21 8M17 8h4v4"/>',
Membres: '<circle cx="12" cy="7.5" r="2.8"/><path d="M6.5 19c0-3.2 2.4-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="5.5" cy="9.5" r="2"/><circle cx="18.5" cy="9.5" r="2"/><path d="M2 17.5c0-2.2 1.4-3.8 3.5-4M22 17.5c0-2.2-1.4-3.8-3.5-4"/>',
Candidature: '<rect x="4.5" y="3" width="15" height="18" rx="2"/><path d="M8 8h8M8 11.5h5M8.5 16l2 2 4-4"/>',
MC: '<path d="M4 10v4h3l7 4.5V5.5L7 10z"/><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11"/>',
Diplomatie: '<path d="M5 21V3.5M5 4h12l-2.5 4L17 12H5"/>',
Description: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v6"/><circle cx="12" cy="7.8" r=".9" fill="C"/>',
Options: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1L5.3 5.3"/><circle cx="12" cy="12" r="6.5"/>',
Echange: '<path d="M7 4L3.5 7.5 7 11M3.5 7.5H17a3.5 3.5 0 0 1 3.5 3.5M17 20l3.5-3.5L17 13M20.5 16.5H7A3.5 3.5 0 0 1 3.5 13"/>',
Propositions: '<path d="M9 18h6M10 21h4M8.5 15c-1.7-1.3-2.7-3.2-2.7-5.2a6.2 6.2 0 0 1 12.4 0c0 2-1 3.9-2.7 5.2z"/>',
ClassementJoueurs: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 5.5H5v1.5a3 3 0 0 0 3 3M16 5.5h3v1.5a3 3 0 0 1-3 3M12 13v4M8.5 20.5h7M10 17h4"/>',
ClassementAlliance: '<path d="M3.5 20.5h17M6 20.5v-6h4v6M10 20.5V9h4v11.5M14 20.5v-8h4v8"/><path d="M12 3.5l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z" fill="C" stroke="none"/>',
Profil: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.3"/><path d="M5.5 16.5c.5-1.8 1.8-2.8 3.5-2.8s3 1 3.5 2.8M14.5 10h4M14.5 13.5h3"/>',
Parrainage: '<circle cx="10" cy="8" r="3.2"/><path d="M3.5 20c0-3.6 2.9-6.3 6.5-6.3 1.6 0 3 .5 4.1 1.4M18.5 13v7M15 16.5h7"/>',
Achat: '<path d="M6.5 4h11l3.5 5-9 11L3 9z"/><path d="M3 9h18M9.5 4L8 9l4 11M14.5 4L16 9l-4 11"/>',
SimulateurChasse: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l6-6"/>',
SimulateurDuree: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2M10 2.5h4M12 2.5V6"/>',
SimulateurFlood: '<path d="M4 8.5h14M14.5 5L18 8.5 14.5 12M20 15.5H6M9.5 12L6 15.5 9.5 19"/>',
ListeAmis: '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c3 0 5 2 5 4.9"/>',
BlocNote: '<rect x="4.5" y="3" width="15" height="18" rx="2"/><path d="M8 8h8M8 11.5h8M8 15h4.5"/>',
StatJoueur: '<path d="M3.5 20.5h17M6 20.5V13M10 20.5V8M14 20.5v-6M18 20.5V5"/>',
Intro: '<circle cx="12" cy="12" r="8.5"/><path d="M10 8.5v7l5.5-3.5z"/>',
PremierJour: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4M11 13l1.5-1v5.5"/>',
DeuxiemeJour: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4M10.5 12.8a1.6 1.6 0 1 1 2.8 1.1L10.5 17.5h3.5"/>',
Divers: '<circle cx="6" cy="6" r="1.8"/><circle cx="12" cy="6" r="1.8"/><circle cx="18" cy="6" r="1.8"/><circle cx="6" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18" cy="12" r="1.8"/><circle cx="6" cy="18" r="1.8"/><circle cx="12" cy="18" r="1.8"/><circle cx="18" cy="18" r="1.8"/>',
Regles: '<path d="M12 3.5v17M7 20.5h10M4 7.5h16M6.5 7.5L4 13.5a2.5 2.5 0 0 0 5 0zM17.5 7.5L15 13.5a2.5 2.5 0 0 0 5 0z"/>',
Moderateur: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z"/><path d="M12 8l1.3 2.6 2.8.4-2 2 .5 2.8L12 14.5l-2.6 1.3.5-2.8-2-2 2.8-.4z"/>',
Livre: '<path d="M12 6.5C10 5 7 4.5 3.5 5v13.5C7 18 10 18.5 12 20c2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5V20"/>',
Dev: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15"/>',
topProfil: '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7"/>',
};
const menuIconCss = (accent) => {
const uri = (body) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${accent}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body.replace(/"C"/g, `"${accent}"`)}</svg>`)}")`;
const rule = (sel, body, size) => `${sel}{background:${uri(body)} center/${size}px ${size}px no-repeat!important;}`;
const tops = ['topFourmiliere', 'topAlliance', 'topCommunaute', 'topCompte', 'topAide'];
let css = tops.map((k, i) => rule(`html body #menu #menu_horizontal > li:nth-child(${i + 2}) > a > span`, MI[k], 19)).join('');
css += Object.keys(MI).filter(k => !k.startsWith('top')).map(k => rule(`#menu :is(#menuFourmiliere,#menuAlliance,#menuCommunaute,#menuComptePlus,#menuAide).menu_colonne a.bouton${k} > span`, MI[k], 21)).join('');
css += rule('html body #menu #boutonDeconnexion > span', MI.topProfil, 19);
css += `html body #menu #menu_horizontal{display:flex!important;align-items:stretch;justify-content:center;}
html body #menu #menu_horizontal > li{flex:1 1 0;display:flex!important;float:none!important;margin:0!important;}
html body #menu #menu_horizontal > li#liBoutonRessource{display:none!important;}
html body #menu #menu_horizontal > li > a{display:flex!important;align-items:center;justify-content:center;gap:7px;width:100%!important;height:30px;padding:0!important;box-sizing:border-box;line-height:1!important;}
html body #menu #menu_horizontal > li > a > span{display:block!important;flex:0 0 auto;width:20px!important;height:20px!important;margin:0!important;vertical-align:middle!important;position:static!important;top:auto!important;}
html body #menu #boutonDeconnexion{display:flex!important;align-items:center;justify-content:center;top:0!important;height:30px!important;box-sizing:border-box;padding:0!important;}
html body #menu #boutonDeconnexion > span{display:block!important;width:20px!important;height:20px!important;margin:0!important;position:static!important;}
html body #menu #boutonDeconnexion:hover{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;box-shadow:inset 0 -2px 0 var(--fz-accent);}`;
css += `#menu span{filter:drop-shadow(0 0 calc(2px*var(--fz-glow)) ${accent});}#menu ul.menu_colonne a > span{transition:transform .15s;}#menu ul.menu_colonne li:hover a > span{transform:scale(1.12);}#menu_horizontal > li > a.boutonActif,#menu_horizontal > li > a:hover{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;box-shadow:inset 0 -2px 0 var(--fz-accent);color:#fff!important;}`;
return css;
};
const SHADOW_CSS = `.ibtn{background:linear-gradient(160deg,color-mix(in srgb,var(--fz-panel,#0e1e34) 92%,transparent),color-mix(in srgb,var(--fz-bg,#05070d) 92%,transparent))!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 45%,transparent)!important;border-radius:4px!important;box-shadow:0 0 calc(8px*var(--fz-glow,.5)) color-mix(in srgb,var(--fz-accent,#39d0ff) 20%,transparent)!important;transition:border-color .15s,box-shadow .15s,transform .1s}.ibtn:hover{border-color:var(--fz-accent,#39d0ff)!important;box-shadow:0 0 calc(14px*var(--fz-glow,.5)) color-mix(in srgb,var(--fz-accent,#39d0ff) 45%,transparent)!important}.ibtn:active{transform:translateY(1px)}.fav,.favrow,.favcol,.favx{color:var(--fz-text,#d6ecff)!important;font-family:"Exo 2","Segoe UI",sans-serif!important}.favhead{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 12%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 50%,transparent)!important;border-radius:2px!important;color:var(--fz-accent,#39d0ff)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;letter-spacing:.06em;text-transform:uppercase}.favrow{border-bottom:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 12%,transparent)!important}.favn{color:var(--fz-text,#d6ecff)!important}.favn:hover{color:var(--fz-accent,#39d0ff)!important}.favt{color:color-mix(in srgb,var(--fz-text,#d6ecff) 60%,transparent)!important}.favb{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 14%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 55%,transparent)!important;border-radius:3px!important}.favb:hover{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 28%,transparent)!important}.favb.off{background:rgba(255,255,255,.04)!important;border-color:rgba(255,255,255,.15)!important;opacity:.55}.favx{opacity:.6}.favx:hover{opacity:1;color:var(--fz-danger,#ff5470)!important}`;
const SHADOW_CSS_2 = `.fab,.ibtn{background:linear-gradient(160deg,var(--fz-panel,#0e1e34),var(--fz-bg,#05070d))!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 45%,transparent)!important;border-radius:4px!important}.overlay{background:rgba(5,9,18,.96)!important;color:var(--fz-text,#d6ecff)!important;backdrop-filter:blur(6px)}.overlay .wrap,.overlay .head,.overlay .fields,.overlay .searchbox,.overlay .tabs,.overlay .panel,.overlay label,.overlay td{color:var(--fz-text,#d6ecff)!important}.overlay .head{font-family:"Orbitron","Segoe UI",sans-serif;letter-spacing:.05em;color:var(--fz-accent,#39d0ff)!important}.overlay .sub,.overlay #info{color:color-mix(in srgb,var(--fz-text,#d6ecff) 65%,transparent)!important}.overlay select,.overlay input{background:var(--fz-panel2,#0a1a2e)!important;color:var(--fz-text,#d6ecff)!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 40%,transparent)!important;border-radius:2px!important}.overlay option{background:var(--fz-panel2,#0a1a2e);color:var(--fz-text,#d6ecff)}.overlay .linkbtn{color:var(--fz-accent,#39d0ff)!important}.overlay .ghost,.overlay button:not(.tab):not(.linkbtn){background:color-mix(in srgb,var(--fz-accent,#39d0ff) 10%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 50%,transparent)!important;border-radius:2px!important;color:var(--fz-text,#d6ecff)!important}.overlay .sugg{background:var(--fz-panel,#0e1e34)!important;color:var(--fz-text,#d6ecff)!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 30%,transparent)!important}.overlay .tab{color:color-mix(in srgb,var(--fz-text,#d6ecff) 65%,transparent)!important;border-bottom:2px solid transparent!important}.overlay .tab:is(.on,.active,[aria-selected="true"]){color:var(--fz-accent,#39d0ff)!important;border-bottom-color:var(--fz-accent,#39d0ff)!important}.overlay th{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 15%,transparent)!important;color:var(--fz-accent,#39d0ff)!important}.overlay tr:nth-child(even) td{background:rgba(255,255,255,.03)}.toast{background:var(--fz-panel,#0e1e34)!important;color:var(--fz-text,#d6ecff)!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 50%,transparent)!important}.upd-toast{background:linear-gradient(135deg,rgba(14,30,52,.95),rgba(8,14,28,.97))!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 45%,transparent)!important;border-left:3px solid #ff9f1c!important;border-radius:2px!important;color:var(--fz-text,#d6ecff)!important}.upd-text{color:var(--fz-text,#d6ecff)!important}.upd-go{border-radius:2px!important}.upd-later{background:transparent!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 50%,transparent)!important;border-radius:2px!important;color:var(--fz-text,#d6ecff)!important}`;
const SHADOW_CSS_SIM = `.wrap{color:#d6ecff!important;font-family:"Exo 2","Segoe UI",Verdana,sans-serif!important}.chips button,.chips span{border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 45%,transparent)!important;border-radius:2px!important;color:#d6ecff!important;background:color-mix(in srgb,var(--fz-accent,#39d0ff) 6%,transparent)!important}.chips button:hover{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 18%,transparent)!important;color:#fff!important}.chips .on{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 30%,transparent)!important;color:#fff!important;border-color:var(--fz-accent,#39d0ff)!important;box-shadow:inset 0 -2px 0 var(--fz-accent,#39d0ff)}.bloc{background:linear-gradient(135deg,rgba(14,30,52,.88),rgba(8,14,28,.94))!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 35%,transparent)!important;border-radius:0!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))}h3{color:var(--fz-accent,#39d0ff)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:17px!important;text-transform:uppercase;letter-spacing:.08em;text-shadow:0 0 8px color-mix(in srgb,var(--fz-accent,#39d0ff) 60%,transparent)}.info{color:#8aa0b5!important}.info.err,.warn{color:#ff5a5a!important}.opts{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 6%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 18%,transparent);border-radius:2px!important}.opts label{color:#d6ecff!important}input,select{background:#0a1a2e!important;color:#d6ecff!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 40%,transparent)!important;border-radius:3px!important;color-scheme:dark}input[type=radio],input[type=checkbox]{accent-color:var(--fz-accent,#39d0ff)}input::placeholder{color:#5d6f82!important}.step{border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 30%,transparent)!important;border-radius:2px!important;background:color-mix(in srgb,var(--fz-accent,#39d0ff) 5%,transparent)!important}.num{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 22%,transparent)!important;color:#fff!important;border:1px solid var(--fz-accent,#39d0ff)}.step.moi .num{background:rgba(74,222,128,.25)!important;border-color:#4ade80}.pick small{color:#8aa0b5!important}.ib{border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 40%,transparent)!important;border-radius:2px!important;color:var(--fz-accent,#39d0ff)!important}.ib:not(:disabled):hover{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 18%,transparent)!important;color:#fff!important}.leg{border-left-color:color-mix(in srgb,var(--fz-accent,#39d0ff) 40%,transparent)!important}.leg .h{color:#8aa0b5!important}.leg .cum{color:#ffb347!important}.tot{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 8%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 25%,transparent);border-radius:2px!important}.tot b{color:#ffd25a!important}.gb{border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 45%,transparent)!important;border-radius:2px!important;color:#d6ecff!important;background:color-mix(in srgb,var(--fz-accent,#39d0ff) 6%,transparent)!important}.gb:hover{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 18%,transparent)!important;color:#fff!important}.gb.pri{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 28%,transparent)!important;color:#fff!important;border-color:var(--fz-accent,#39d0ff)!important}.ok{color:#4ade80!important}.save{border-top:1px dashed color-mix(in srgb,var(--fz-accent,#39d0ff) 30%,transparent)!important}.save h4{color:var(--fz-accent,#39d0ff)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:12px!important;text-transform:uppercase;letter-spacing:.08em}.save .none{color:#8aa0b5!important}.sv{border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 40%,transparent)!important;border-radius:2px!important}.sv button{color:#d6ecff!important}.sv button+button{border-left:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 40%,transparent)!important;color:#ff5a5a!important}#pop{background:#0b1626!important;border:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 45%,transparent)!important;border-radius:2px!important;color:#d6ecff!important;box-shadow:0 0 14px color-mix(in srgb,var(--fz-accent,#39d0ff) 25%,transparent),0 6px 18px rgba(0,0,0,.6)!important}#pop .gr{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 25%,#0b1626)!important;color:#fff!important}#pop .it{border-bottom:1px solid color-mix(in srgb,var(--fz-accent,#39d0ff) 15%,transparent)!important}#pop .it:hover{background:color-mix(in srgb,var(--fz-accent,#39d0ff) 15%,transparent)!important}#pop .it i{color:#8aa0b5!important}`;
function fzCompat() {
if (!cfg.enabled) return;
document.documentElement.classList.toggle('fz-fmz', !!(document.getElementById('fmz-moderne') || document.getElementById('fmz-cplus-zone') || document.getElementById('fmzOeuf')));
[['fmz-cplus-host', SHADOW_CSS], ['fz-radar-host', SHADOW_CSS_2], ['fmz-ravito-host', SHADOW_CSS_2], ['cixy-simduree', SHADOW_CSS_SIM]].forEach(([id, css]) => {
const host = document.getElementById(id);
if (host && host.shadowRoot && !host.shadowRoot.getElementById('fz-shadow')) {
const ss = document.createElement('style'); ss.id = 'fz-shadow'; ss.textContent = css;
host.shadowRoot.appendChild(ss);
}
});
const cpBox = document.getElementById('boiteComptePlus'), info = document.querySelector('.contenu_boite_info');
const cpTitle = cpBox && cpBox.querySelector('.titre_colonne_cliquable');
if (cpTitle && info) {
const gap = cpTitle.getBoundingClientRect().top - info.getBoundingClientRect().bottom;
const cur = parseFloat(getComputedStyle(cpBox).marginTop) || 0;
if (Math.abs(gap - 16) > 1) document.documentElement.style.setProperty('--fz-cp-mt', Math.round(cur + 16 - gap) + 'px');
}
}
const UNIT_COLORS = [
[/jeunes? soldates? naines?/i, '#9FE855'],
[/naines? d.?[ée]lite/i, '#21610B'],
[/soldates? naines?/i, '#34C924'],
[/soldates? d.?[ée]lite/i, '#088A85'],
[/jeunes? soldates?/i, '#81F7F3'],
[/concierges? d.?[ée]lite/i, '#013ADF'],
[/concierges?/i, '#5882FA'],
[/artilleuses? d.?[ée]lite/i, '#DF01A5'],
[/artilleuses?/i, '#FA58D0'],
[/tanks? d.?[ée]lite/i, '#FF0000'],
[/tanks?/i, '#FA5858'],
[/tueuses? d.?[ée]lite/i, '#FFFF00'],
[/tueuses?/i, '#F4FA58'],
[/soldates?/i, '#00FFFF'],
];
function colorPonteUnits() {
const table = document.querySelector('#centre > h4 + table.tableau_leger');
if (!table) return;
table.querySelectorAll('tr').forEach((tr, i) => {
if (i === 0) return;
const td = tr.querySelector('td');
if (!td || td.querySelector('.fz-unit')) return;
const txt = td.textContent;
const hit = UNIT_COLORS.find(([re]) => re.test(txt));
if (!hit) return;
const m = txt.match(hit[0]);
const walker = document.createTreeWalker(td, NodeFilter.SHOW_TEXT);
let node;
while ((node = walker.nextNode())) {
const idx = node.textContent.search(hit[0]);
if (idx < 0) continue;
const after = node.splitText(idx);
after.splitText(m[0].length);
const span = document.createElement('span');
span.className = 'fz-unit'; span.style.color = hit[1];
after.parentNode.replaceChild(span, after); span.appendChild(after);
break;
}
});
}
function formatPonteTimes() {
const table = document.querySelector('#centre > h4 + table.tableau_leger');
if (!table) return;
table.querySelectorAll('tr').forEach((tr, i) => {
if (i === 0) return;
[2, 3].forEach(col => {
const td = tr.children[col];
if (!td) return;
td.classList.add('fz-tcell');
let out = td.querySelector(':scope > .fz-time');
if (!out) { out = document.createElement('span'); out.className = 'fz-time'; td.appendChild(out); }
let raw = '';
td.childNodes.forEach(n => { if (n !== out) raw += n.textContent; });
raw = raw.trim();
if (out.dataset.src === raw) return;
out.dataset.src = raw;
const parts = { J: '', H: '', m: '', s: '' };
let any = false;
raw.replace(/(\d+)\s*([JjHhms])/g, (_, v, u) => { const k = u === 'j' ? 'J' : u === 'h' ? 'H' : u; parts[k] = v + k; any = true; });
out.innerHTML = any ? ['J', 'H', 'm', 's'].map(k => `<span class="fz-t fz-t-${k}">${parts[k]}</span>`).join('') : `<span>${raw}</span>`;
});
});
}
const PONTE_TABLE_CSS = `#centre .fz-unit,#centre .fz-unit-qty{font-weight:700}#centre td.fz-tcell{font-size:0!important;white-space:nowrap}#centre td.fz-tcell>.fz-time{font-size:12.8px;display:inline-grid;grid-template-columns:1.9em 2.7em 2.6em 2.5em;font-variant-numeric:tabular-nums;font-feature-settings:"tnum" 1}#centre td.fz-tcell .fz-t{text-align:right}`;
function markSubheads() {
document.querySelectorAll('#centre .boite_amelioration td, #centre .boite_amelioration span, #centre .boite_amelioration div').forEach(e => {
if (e.children.length === 0 && !e.closest('a') && !e.classList.contains('fz-subhead') && getComputedStyle(e).textDecorationLine === 'underline') e.classList.add('fz-subhead');
});
}
function terrainRing() {
const strong = [...document.querySelectorAll('#boite_ouvriere strong')].find(s => /du terrain est exploit/i.test(s.textContent));
if (!strong || strong.dataset.fzRing) return;
const m = strong.textContent.match(/(\d+(?:[.,]\d+)?)\s*%/);
if (!m) return;
const pct = Math.max(0, Math.min(100, parseFloat(m[1].replace(',', '.'))));
const hue = Math.round(pct * 1.2);
const col = `hsl(${hue},85%,52%)`;
const R = 26, C = 2 * Math.PI * R, SEG = 10, gap = 3.2;
const segLen = C / SEG - gap;
let arcs = '';
for (let i = 0; i < SEG; i++) {
const on = i < Math.floor(pct / 10) || (i === Math.floor(pct / 10) && pct % 10 >= 5);
arcs += `<circle cx="32" cy="32" r="${R}" fill="none" stroke="${on ? col : 'rgba(255,255,255,.12)'}" stroke-width="6"
        stroke-dasharray="${segLen.toFixed(2)} ${(C - segLen).toFixed(2)}" stroke-dashoffset="${(-i * C / SEG).toFixed(2)}"
        transform="rotate(-90 32 32)"${on ? ` style="filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) ${col})"` : ''}/>`;
}
const done = pct >= 100;
const center = `<text x="32" y="33" text-anchor="middle" dominant-baseline="middle" font-family="Orbitron,Segoe UI,sans-serif" font-weight="700" font-size="${pct >= 100 ? 12.5 : 14}" fill="#fff">${Math.round(pct)}%</text>`;
const wrap = document.createElement('span');
wrap.className = 'fz-ring';
wrap.title = strong.textContent.trim();
wrap.innerHTML = `<svg viewBox="0 0 64 64" width="64" height="64">${arcs}${center}</svg><span class="fz-ring-lbl" style="color:${col}">${done ? 'Terrain entièrement exploité' : 'du terrain exploité'}</span>`;
strong.dataset.fzRing = '1';
strong.style.display = 'none';
strong.parentNode.insertBefore(wrap, strong);
const n = strong.nextSibling;
if (n && n.nodeType === 3) n.textContent = n.textContent.replace(/^\s*:\s*/, ' ');
}
function warehouseRings() {
const strong = document.getElementById('zonePourcentageTdcUtil') || [...document.querySelectorAll('#boite_ouvriere strong')].find(s => /du terrain est exploit/i.test(s.textContent));
const p = strong && strong.closest('p'); if (!p) return;
const fill = (kind) => {
const td = [...document.querySelectorAll('#tableau_boite_info td[title]')].find(t => new RegExp('entrep.t de ' + kind, 'i').test(t.title));
const j = document.querySelector('#tableau_boite_info .jauge_' + (kind === 'nourriture' ? 'nourriture' : 'materiaux'));
if (j && j.parentElement && j.parentElement.offsetWidth) return Math.min(100, j.offsetWidth / j.parentElement.offsetWidth * 100);
const m = td && td.title.match(/(\d+(?:[.,]\d+)?)\s*%/); return m ? Math.min(100, parseFloat(m[1].replace(',', '.'))) : null;
};
const full = (kind) => {
const txt = (document.getElementById('boite_ouvriere') || document.body).textContent.replace(/\s+/g, ' ');
const m = txt.match(new RegExp('entrep.t de ' + kind + ' sera plein dans ([^(]+?)\\s*\\((le [^)]+)\\)', 'i'));
return m ? 'plein dans ' + m[1].trim() + ' · ' + m[2].trim() : (new RegExp('entrep.t de ' + kind + ' est plein', 'i').test(txt) ? 'plein !' : '');
};
const stock = (k) => { const j = document.querySelector('#tableau_boite_info .jauge_' + k); const td = j && j.closest('td'); const t = td && td.querySelector('.texte_ligne_boite_info'); return t ? t.textContent.trim() : ''; };
const prodP = document.getElementById('nbNourriture') && document.getElementById('nbNourriture').closest('p');
const icons = prodP ? [...prodP.querySelectorAll('img')].map(i => i.getAttribute('src')) : [];
const qtyHtml = (k) => { const q = stock(k), src = icons[k === 'nourriture' ? 0 : 1]; return q ? ` : <b class="fz-ring-qty" data-k="${k}">${q}</b>${src ? `<img class="fz-ring-ico" src="${src}" alt="">` : ''}` : ''; };
const ring = (pct, label, sub, lblCol) => {
const hue = Math.round(120 * (1 - pct / 100)), col = `hsl(${hue},85%,52%)`;
const R = 26, C = 2 * Math.PI * R, SEG = 10, gap = 3.2, segLen = C / SEG - gap;
let arcs = '';
for (let i = 0; i < SEG; i++) {
const on = i < Math.floor(pct / 10) || (i === Math.floor(pct / 10) && pct % 10 >= 5);
arcs += `<circle cx="32" cy="32" r="${R}" fill="none" stroke="${on ? col : 'rgba(255,255,255,.12)'}" stroke-width="6" stroke-dasharray="${segLen.toFixed(2)} ${(C - segLen).toFixed(2)}" stroke-dashoffset="${(-i * C / SEG).toFixed(2)}" transform="rotate(-90 32 32)"${on ? ` style="filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) ${col})"` : ''}/>`;
}
const el = document.createElement('span'); el.className = 'fz-ring fz-ring-stock';
el.title = `${label} rempli à ${pct.toFixed(1).replace('.', ',')} %`;
el.innerHTML = `<svg viewBox="0 0 64 64" width="64" height="64">${arcs}<text x="32" y="33" text-anchor="middle" dominant-baseline="middle" font-family="Orbitron,Segoe UI,sans-serif" font-weight="700" font-size="14" fill="#fff">${Math.round(pct)}%</text></svg><span class="fz-ring-txt"><span class="fz-ring-lbl" style="color:${lblCol || col}">${label}${qtyHtml(/nourriture/i.test(label) ? 'nourriture' : 'materiaux')}</span>${sub ? `<span class="fz-ring-sub">${sub}</span>` : ''}</span>`;
return el;
};
const hideFullText = () => {
const w = document.createTreeWalker(document.getElementById('boite_ouvriere') || document.body, NodeFilter.SHOW_TEXT); let n;
while ((n = w.nextNode())) if (/entrep.t de (nourriture|mat.riaux) sera plein/i.test(n.textContent) && n.parentElement && n.parentElement.tagName === 'P') n.parentElement.classList.add('fz-hidden-p');
};
hideFullText();
const old = p.querySelector('.fz-rings-stock');
if (old) { old.querySelectorAll('.fz-ring-qty').forEach(b => { const q = stock(b.dataset.k); if (q && b.textContent !== q) b.textContent = q; });
old.querySelectorAll('.fz-ring-stock').forEach((el, i) => { const sub = full(i ? 'mat.riaux' : 'nourriture'); let sp = el.querySelector('.fz-ring-sub'); if (sub && !sp) { sp = document.createElement('span'); sp.className = 'fz-ring-sub'; el.querySelector('.fz-ring-txt').appendChild(sp); } if (sp && sub) sp.textContent = sub; });
return;
}
const box = document.createElement('span'); box.className = 'fz-rings-stock';
[['nourriture', 'Entrepôt de nourriture', '#7dff9a'], ['matériaux', 'Entrepôt de matériaux', '#ffae42']].forEach(([k, lbl, lc]) => {
const pct = fill(k === 'matériaux' ? 'mat.riaux' : k); if (pct == null) return;
box.appendChild(ring(pct, lbl, full(k === 'matériaux' ? 'mat.riaux' : k), lc));
});
const note = [...p.querySelectorAll('span')].find(sp => /plus d.une ouvri.re par cm/i.test(sp.textContent));
if (note) { const br = note.nextElementSibling; note.replaceWith(box); if (br && br.tagName === 'BR') br.remove(); }
else p.appendChild(box);
}
function productionTable() {
const nN = document.getElementById('nbNourriture'), nM = document.getElementById('nbMateriaux');
const p = nN && nN.closest('p'); if (!p) return;
const num = (el) => el ? parseInt(el.textContent.replace(/[^\d]/g, ''), 10) || 0 : 0;
const strongAfter = (re) => {
let hit = false;
for (const n of p.childNodes) { if (n.nodeType === 3 && re.test(n.textContent)) hit = true; else if (hit && n.nodeType === 1 && n.tagName === 'STRONG') return n; }
return null;
};
let champi = null, last = null;
for (const n of p.childNodes) { if (n.nodeType === 1 && n.tagName === 'STRONG') last = n; else if (n.nodeType === 3 && /champignonni/i.test(n.textContent) && last && last !== nN && last !== nM) { champi = last; break; } }
const imgs = [...p.querySelectorAll('img')], srcF = imgs[0] ? imgs[0].getAttribute('src') : '', srcM = imgs[1] ? imgs[1].getAttribute('src') : '';
const conso = strongAfter(/consomme/i);
const fmt = (v, sign) => (v === null ? '—' : (sign && v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toLocaleString('fr-FR'));
const cls = (v) => v > 0 ? 'fz-pos' : v < 0 ? 'fz-neg' : 'fz-nul';
let tbl = p.previousElementSibling && p.previousElementSibling.classList.contains('fz-prod') ? p.previousElementSibling : null;
if (!tbl) {
tbl = document.createElement('table'); tbl.className = 'fz-prod';
p.parentNode.insertBefore(tbl, p); p.classList.add('fz-hidden-p');
}
const food = num(nN), mat = num(nM), ch = champi ? num(champi) : null, co = conso ? num(conso) : null;
const soldeF = food + (ch || 0) - (co || 0), soldeM = mat;
const row = (lbl, f, m, extra = '') => `<tr class="${extra}"><th>${lbl}</th><td class="${cls(f)}">${fmt(f, true)}</td><td class="${cls(m)}">${fmt(m, true)}</td></tr>`;
const html = `<thead><tr><th>Par jour</th><th>${srcF ? `<img src="${srcF}" alt="">` : ''}Nourriture</th><th>${srcM ? `<img src="${srcM}" alt="">` : ''}Matériaux</th></tr></thead><tbody>
      <tr class="fz-sec"><th colspan="3">Production</th></tr>
      ${row('Récolte du terrain', food, mat)}
      ${ch !== null ? row('Champignonnière', ch, null) : ''}
      <tr class="fz-sec"><th colspan="3">Pertes</th></tr>
      ${co !== null ? row('Consommation de l\'armée', -co, null) : row('Consommation de l\'armée', null, null)}
      ${row('Solde', soldeF, soldeM, 'fz-solde')}</tbody>`;
if (tbl.dataset.k !== html) { tbl.innerHTML = html; tbl.dataset.k = html; }
}
const RES_HERO_IMG = GM_getResourceURL('bannieres-ressources');
function resourceHero() {
const strong = document.getElementById('zonePourcentageTdcUtil'); const p = strong && strong.closest('p');
if (!p || p.parentElement.classList.contains('fz-res-hero')) return;
const box = document.createElement('div'); box.className = 'fz-res-hero';
box.style.setProperty('--fz-res-img', `url("${RES_HERO_IMG}")`);
p.parentNode.insertBefore(box, p); box.appendChild(p);
['tl', 'tr', 'bl', 'br'].forEach(k => { const c = document.createElement('i'); c.className = 'fz-hero-c fz-hero-' + k; box.appendChild(c); });
}
const PAGE_HEROES = { construction: { title: 'Construction', img: GM_getResourceURL('bannieres-construction') },
laboratoire: { title: 'Laboratoire', img: GM_getResourceURL('bannieres-laboratoire') } };
function pageHero() {
const key = Object.keys(PAGE_HEROES).find(k => new RegExp(k + '\\.php', 'i').test(location.pathname)); if (!key) return;
const c = document.getElementById('centre'); if (!c || c.querySelector('.fz-page-hero')) return;
const nav = c.querySelector(':scope > nav'); const h = PAGE_HEROES[key];
const d = document.createElement('div'); d.className = 'fz-page-hero';
d.style.setProperty('--fz-hero-img', `url("${h.img}")`);
d.innerHTML = `<div class="fz-page-hero-head"><span class="fz-page-hero-title">${h.title}</span></div>` + ['tl', 'tr', 'bl', 'br'].map(k => `<i class="fz-hero-c fz-hero-${k}"></i>`).join('');
if (nav && nav.nextSibling) c.insertBefore(d, nav.nextSibling); else c.prepend(d);
const info = document.createElement('div'); info.className = 'fz-page-hero-info';
let n = d.nextSibling; const moved = [];
while (n && !(n.nodeType === 1 && (n.tagName === 'TABLE' || n.classList.contains('Bas')))) {
const nx = n.nextSibling;
if (n.nodeType === 1 && /^(STRONG|SMALL)$/.test(n.tagName)) moved.push(n);
else if (n.nodeType === 1 && n.tagName === 'BR') n.remove();
n = nx;
}
if (moved.length) {
let last = null;
moved.forEach(el => {
if (el.tagName === 'SMALL' && last && !last.querySelector('.fz-hero-fin')) { el.classList.add('fz-hero-fin'); last.appendChild(el); return; }
const line = document.createElement('div'); line.className = 'fz-hero-line' + (el.tagName === 'SMALL' ? ' fz-hero-sub' : ''); el.before(line); line.appendChild(el); info.appendChild(line);
last = el.tagName === 'STRONG' ? line : null;
});
d.querySelector('.fz-page-hero-head').appendChild(info); d.classList.add('fz-has-info');
}
}
function moveReturnTimer() {
const t = document.getElementById('retour_ouvrieres'); const set = document.getElementById('ChangeRessource');
const center = set && set.closest('center'); if (!t || !center || t.closest('.fz-retour')) return;
const lbl = t.previousElementSibling && t.previousElementSibling.tagName === 'STRONG' && /rentreront/i.test(t.previousElementSibling.textContent) ? t.previousElementSibling : null;
const d = document.createElement('div'); d.className = 'fz-retour';
if (lbl) d.appendChild(lbl); d.appendChild(document.createTextNode(' ')); d.appendChild(t);
center.parentNode.insertBefore(d, center);
}
 const RING_CSS = `#centre .fz-page-hero{position:relative;height:150px;margin:6px 0 14px;border:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent);background:linear-gradient(90deg,rgba(4,10,20,.82) 0%,rgba(4,10,20,.45) 40%,rgba(4,10,20,.12) 100%),var(--fz-hero-img) center 45%/cover no-repeat;clip-path:polygon(16px 0,calc(100% - 16px) 0,100% 16px,100% calc(100% - 16px),calc(100% - 16px) 100%,16px 100%,0 calc(100% - 16px),0 16px);box-shadow:inset 0 0 0 1px rgba(0,0,0,.6),inset 0 0 40px rgba(0,0,0,.55),inset 0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 25%,transparent);overflow:hidden;display:flex;align-items:center}#centre .fz-page-hero::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px)}#centre .fz-page-hero::after{content:"";position:absolute;left:24px;right:24px;top:0;height:2px;pointer-events:none;background:linear-gradient(90deg,transparent,var(--fz-accent),transparent);box-shadow:0 0 calc(8px*var(--fz-glow)) var(--fz-accent)}#centre .fz-page-hero .fz-page-hero-head{position:relative;z-index:1;margin-left:38px;display:flex;flex-direction:column;align-items:flex-start;gap:12px}#centre .fz-page-hero.fz-has-info{align-items:flex-start;padding-top:22px;box-sizing:border-box}#centre .fz-page-hero-info{display:flex;flex-direction:column;gap:3px;padding:6px 12px;background:rgba(4,10,20,.55);border-left:2px solid var(--fz-accent);backdrop-filter:blur(2px)}#centre .fz-page-hero-info .fz-hero-line{font-size:13px;color:#eafaff;text-shadow:0 1px 3px rgba(0,0,0,.9)}#centre .fz-page-hero-info .fz-hero-line strong{font-weight:700;color:#eafaff!important}#centre .fz-page-hero-info .fz-hero-line strong span[id^="batiment_"],#centre .fz-page-hero-info .fz-hero-line strong span[id^="recherche_"]{color:var(--fz-accent)!important}#centre .fz-page-hero-info .fz-hero-sub{font-size:11px;opacity:.8}#centre .fz-page-hero-info .fz-hero-line .fz-hero-fin{margin-left:.6em;font-size:11px;opacity:.8}#centre .fz-page-hero .fz-page-hero-title{position:relative;z-index:1;padding:4px 0 6px;font-family:"Orbitron","Segoe UI",sans-serif;font-size:30px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#eafaff;text-shadow:0 0 calc(12px*var(--fz-glow)) var(--fz-accent),0 0 2px var(--fz-accent),0 2px 6px rgba(0,0,0,.9);border-bottom:2px solid color-mix(in srgb,var(--fz-accent) 70%,transparent)}#centre .fz-page-hero .fz-hero-c{position:absolute;width:18px;height:18px;border:2px solid var(--fz-accent);pointer-events:none;z-index:2;filter:drop-shadow(0 0 calc(4px*var(--fz-glow)) var(--fz-accent))}#centre .fz-page-hero .fz-hero-tl{top:5px;left:5px;border-right:0;border-bottom:0}#centre .fz-page-hero .fz-hero-tr{top:5px;right:5px;border-left:0;border-bottom:0}#centre .fz-page-hero .fz-hero-bl{bottom:5px;left:5px;border-right:0;border-top:0}#centre .fz-page-hero .fz-hero-br{bottom:5px;right:5px;border-left:0;border-top:0}#boite_ouvriere .fz-res-hero{position:relative;margin:4px 0 6px;padding:14px 18px;border:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent);background:linear-gradient(90deg,rgba(4,10,20,.82) 0%,rgba(4,10,20,.55) 45%,rgba(4,10,20,.15) 100%),var(--fz-res-img) center 40%/cover no-repeat;clip-path:polygon(16px 0,calc(100% - 16px) 0,100% 16px,100% calc(100% - 16px),calc(100% - 16px) 100%,16px 100%,0 calc(100% - 16px),0 16px);box-shadow:inset 0 0 0 1px rgba(0,0,0,.6),inset 0 0 40px rgba(0,0,0,.55),inset 0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 25%,transparent);overflow:hidden}#boite_ouvriere .fz-res-hero::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px)}#boite_ouvriere .fz-res-hero::after{content:"";position:absolute;left:24px;right:24px;top:0;height:2px;pointer-events:none;background:linear-gradient(90deg,transparent,var(--fz-accent),transparent);box-shadow:0 0 calc(8px*var(--fz-glow)) var(--fz-accent)}#boite_ouvriere .fz-res-hero>p{position:relative;z-index:1;margin:0!important;text-shadow:0 1px 3px rgba(0,0,0,.9)}#boite_ouvriere .fz-res-hero .fz-hero-c{position:absolute;width:18px;height:18px;border:2px solid var(--fz-accent);pointer-events:none;z-index:2;filter:drop-shadow(0 0 calc(4px*var(--fz-glow)) var(--fz-accent))}#boite_ouvriere .fz-res-hero .fz-hero-tl{top:5px;left:5px;border-right:0;border-bottom:0}#boite_ouvriere .fz-res-hero .fz-hero-tr{top:5px;right:5px;border-left:0;border-bottom:0}#boite_ouvriere .fz-res-hero .fz-hero-bl{bottom:5px;left:5px;border-right:0;border-top:0}#boite_ouvriere .fz-res-hero .fz-hero-br{bottom:5px;right:5px;border-left:0;border-top:0}#boite_ouvriere table.fz-prod{border-collapse:collapse;margin:14px auto 6px;min-width:420px;background:color-mix(in srgb,var(--fz-accent) 4%,transparent);border:1px solid color-mix(in srgb,var(--fz-accent) 30%,transparent);font-variant-numeric:tabular-nums}#boite_ouvriere table.fz-prod th,#boite_ouvriere table.fz-prod td{padding:4px 12px!important;background:transparent!important;border:0}#boite_ouvriere table.fz-prod thead th{background:color-mix(in srgb,var(--fz-accent) 14%,transparent)!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px;letter-spacing:.06em;text-transform:uppercase;text-align:right;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 50%,transparent);white-space:nowrap}#boite_ouvriere table.fz-prod thead th:first-child{text-align:left}#boite_ouvriere table.fz-prod thead img{width:16px!important;height:16px!important;vertical-align:-3px;margin-right:4px}#boite_ouvriere table.fz-prod tbody th{text-align:left;font-weight:400;color:color-mix(in srgb,var(--fz-text) 80%,transparent)}#boite_ouvriere table.fz-prod tbody td{text-align:right;font-weight:700}#boite_ouvriere table.fz-prod tr.fz-sec th{padding-top:7px!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 15%,transparent)}#boite_ouvriere table.fz-prod tr.fz-solde>*{border-top:1px solid color-mix(in srgb,var(--fz-accent) 45%,transparent);background:color-mix(in srgb,var(--fz-accent) 8%,transparent)!important;padding-top:6px!important;padding-bottom:6px!important}#boite_ouvriere table.fz-prod tr.fz-solde th{color:#fff!important;font-weight:700;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px;letter-spacing:.08em;text-transform:uppercase}#boite_ouvriere table.fz-prod tbody tr:not(.fz-sec):not(.fz-solde)>*{border:0!important}#boite_ouvriere table.fz-prod .fz-pos{color:#4ade80!important}#boite_ouvriere table.fz-prod .fz-neg{color:#ff5a5a!important}#boite_ouvriere table.fz-prod .fz-nul{color:color-mix(in srgb,var(--fz-text) 55%,transparent)!important}#boite_ouvriere p.fz-hidden-p,#boite_ouvriere p[data-fmz-storage]{display:none!important}#boite_ouvriere span.titre{display:flex!important;align-items:center;justify-content:center;gap:12px;margin:-19px 0 12px!important;padding:8px 16px!important;text-align:center!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:18px!important;font-style:normal!important;letter-spacing:.16em!important;text-transform:uppercase;color:#eafaff!important;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 22%,transparent) 30%,color-mix(in srgb,var(--fz-accent) 22%,transparent) 70%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;text-shadow:0 0 calc(10px*var(--fz-glow)) var(--fz-accent),0 0 2px var(--fz-accent)!important}#boite_ouvriere span.titre::before,#boite_ouvriere span.titre::after{content:"";flex:0 0 50px;height:1px;background:linear-gradient(90deg,transparent,var(--fz-accent))}#boite_ouvriere span.titre::after{background:linear-gradient(90deg,var(--fz-accent),transparent)}#boite_ouvriere .fz-retour{margin:12px 0 8px;text-align:center}#boite_ouvriere .fz-retour,#boite_ouvriere .fz-retour strong,#boite_ouvriere .fz-retour #retour_ouvrieres{font-family:"Exo 2","Segoe UI",sans-serif!important;font-size:15px!important;line-height:1.3;letter-spacing:.02em}#boite_ouvriere .fz-retour strong:first-child{font-weight:600;color:#eafaff!important}#boite_ouvriere .fz-retour #retour_ouvrieres{font-weight:700;color:var(--fz-accent)!important;text-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 60%,transparent)}#boite_ouvriere .fz-build-wrap.fz-recolte-wrap{display:table!important;margin:10px auto 2px!important}#boite_ouvriere .fz-rings-stock{display:flex;flex-direction:column;align-items:flex-start;gap:6px;margin:8px 0 4px}#boite_ouvriere .fz-ring-txt{display:inline-flex;flex-direction:column;gap:2px}#boite_ouvriere center table td :is(span,input,label,img,a){vertical-align:middle!important}#boite_ouvriere center table td img{position:relative!important;top:-1px!important;margin-top:0!important;margin-bottom:0!important}#boite_ouvriere center table td a>img{top:0!important}#centre a:has(>img[src*="fleche_haut."]){display:inline-flex!important;align-items:center;vertical-align:middle!important;position:relative!important;top:0!important}#centre img[src*="fleche_haut."]{vertical-align:middle!important}#boite_ouvriere .fz-ring-qty{font-family:"Exo 2","Segoe UI",sans-serif;font-size:13px;letter-spacing:.02em;text-transform:none;color:#fff;font-weight:700;margin-left:2px;font-variant-numeric:tabular-nums}#boite_ouvriere .fz-ring-ico{width:16px!important;height:16px!important;vertical-align:-3px;margin-left:5px}#boite_ouvriere .fz-ring-sub{font-size:12px;color:color-mix(in srgb,var(--fz-text) 70%,transparent)}#boite_ouvriere .fz-ring{display:inline-flex;align-items:center;gap:10px;vertical-align:middle;margin:2px 12px 2px 0}#boite_ouvriere .fz-ring-lbl{font-family:"Orbitron","Segoe UI",sans-serif;font-size:11px;letter-spacing:.06em;text-transform:uppercase;font-weight:700}`;
const EXTRA_ICONS = [
['fleche_haut', 'A', 20, '<circle cx="12" cy="12" r="9"/><path d="M12 16.5v-9M8 11l4-4 4 4"/>'],
['croix', 'D', 20, '<circle cx="12" cy="12" r="9"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7"/>'],
['favicon', 'A', 16, '<path d="M20 12a8 8 0 0 1-14.2 5M4 12a8 8 0 0 1 14.2-5"/><path d="M18.5 3.5v3.8h-3.8M5.5 20.5v-3.8h3.8"/><circle cx="12" cy="12" r="2" fill="C"/>'],
['verrou', 'A', 14, '<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.3" fill="C"/>'],
];
const extraIconCss = (c) => EXTRA_ICONS.map(([match, k, size, body]) => {
const col = k === 'D' ? (c.danger || '#ff5470') : c.accent;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${col}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body.replace(/"C"/g, `"${col}"`)}</svg>`;
return `#centre img[src*="${match}."]{content:url("data:image/svg+xml,${encodeURIComponent(svg)}")!important;width:${size}px!important;height:${size}px!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${col})!important;cursor:pointer;}`;
}).join('');
const RES_LAYOUT_CSS = `#centre .boite_amelioration img{vertical-align:middle!important}#centre .boite_amelioration img[src*="icone_pomme."],#centre .boite_amelioration img[src*="icone_bois."]{position:relative;top:-1px;margin:0 3px}#centre #boite_ouvriere table table td{vertical-align:middle!important;padding:3px 4px!important}#centre #boite_ouvriere input[type=radio]{vertical-align:middle!important;margin:0 2px 0 6px!important}#centre #boite_ouvriere img[src*="favicon."]{width:18px!important;height:18px!important;margin:0 3px!important;position:relative;top:-1px;object-fit:contain}#centre table.simulateur{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));color:var(--fz-text)!important;padding:4px 8px 10px!important}#centre table.simulateur tr,#centre table.simulateur td,#centre table.simulateur th{background:transparent!important;color:var(--fz-text)!important}#centre table.simulateur tr.ligne_paire>td{background:color-mix(in srgb,var(--fz-accent) 6%,transparent)!important}#centre table.simulateur tr:hover>td{background:color-mix(in srgb,var(--fz-accent) 12%,transparent)!important}#centre table.simulateur tr:first-child th,#centre table.simulateur tr:first-child td{color:var(--fz-accent)!important}#centre center h3{color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;text-transform:uppercase;letter-spacing:.08em;text-shadow:0 0 calc(8px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 70%,transparent)}#centre table.simulateur input[type=submit],#centre table.simulateur input[type=button]{background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;color:var(--fz-accent)!important;border:1px solid var(--fz-accent)!important;border-radius:2px!important;padding:3px 10px!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;letter-spacing:.06em;cursor:pointer;margin-left:8px!important}#centre table.simulateur input[type=submit]:hover,#centre table.simulateur input[type=button]:hover{background:color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;color:#fff!important}#centre table.simulateur input[type=radio]{vertical-align:middle!important;margin:0 4px 0 0!important}#centre table.simulateur img{vertical-align:middle!important}#centre #fmz-floods-recus{background:linear-gradient(135deg,rgba(70,12,22,.85),rgba(30,6,14,.9))!important;border:1px solid color-mix(in srgb,var(--fz-danger) 60%,transparent)!important;border-left:3px solid var(--fz-danger)!important;border-radius:2px!important;color:var(--fz-text)!important;box-shadow:0 0 calc(12px*var(--fz-glow)) color-mix(in srgb,var(--fz-danger) 30%,transparent)!important}#centre #fmz-floods-recus *{color:inherit}#centre #fmz-floods-recus b,#centre #fmz-floods-recus strong{color:#ffb3bf!important}#centre #messagerie{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))}#centre #messagerie h2{font-family:"Orbitron","Segoe UI",sans-serif!important;font-style:normal!important;text-transform:uppercase;letter-spacing:.1em}#centre #messagerie .bouton_messagerie{background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 50%,transparent)!important;border-radius:2px!important}#centre #messagerie .bouton_messagerie:hover{background:color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;border-color:var(--fz-accent)!important}#centre #messagerie .groupe_options_gestion,#centre #messagerie .choix_supplementaires_option,#centre #messagerie .choix_supplementaires_option div{background:rgba(5,12,24,.85)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important;border-radius:2px!important}#centre #messagerie .option_gestion{border-radius:2px}#centre #messagerie .option_gestion:hover{background:color-mix(in srgb,var(--fz-accent) 20%,transparent)!important}#centre #messagerie input[type=text],#centre #messagerie input[type=search],#centre #messagerie #creer_categorie{background:var(--fz-panel2)!important;color:var(--fz-text)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important;border-radius:2px!important}#centre #messagerie tr.tr_gestion,#centre #messagerie tr.tr_gestion>*{background:color-mix(in srgb,var(--fz-accent) 12%,transparent)!important}#centre #messagerie tr.tr_gestion{border-top:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent);border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)}#centre #messagerie tr,#centre #messagerie tr.en_tete_message{background:transparent!important}#centre #messagerie tr.en_tete_message>td{border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 12%,transparent)!important;padding-top:3px!important;padding-bottom:3px!important}#centre #messagerie tr.en_tete_message:nth-of-type(even)>td{background:rgba(255,255,255,.025)!important}#centre #messagerie tr.en_tete_message:hover>td{background:color-mix(in srgb,var(--fz-accent) 12%,transparent)!important}#centre #messagerie td.td_par,#centre #messagerie td.td_participants{color:color-mix(in srgb,var(--fz-text) 75%,transparent)!important}#centre #messagerie td.td_objet a{color:var(--fz-text)!important}#centre #messagerie td.td_objet a:hover{color:var(--fz-accent)!important}#centre #messagerie td.td_save,#centre #messagerie td.td_date{color:color-mix(in srgb,var(--fz-text) 65%,transparent)!important;font-variant-numeric:tabular-nums}#centre #messagerie input[type=checkbox]{accent-color:var(--fz-accent)}#centre #messagerie textarea{background:var(--fz-panel2)!important;color:var(--fz-text)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important}#centre #ChangeRessource{margin:10px 12px 4px 4px!important}#centre #boite_tdc input[type=submit]{margin-left:10px!important}#centre #boite_tdc input[type=text],#centre #boite_tdc input[type=tel]{margin-right:4px!important}`;
function markArmyHead() {
const t = document.querySelector('#centre table.simulateur');
if (!t) return;
const tr = [...t.querySelectorAll('tr')].find(r => /Unit/.test(r.textContent) && /Loge/.test(r.textContent));
if (tr) tr.classList.add('fz-thead');
}
const armyHeadCss = (accent) => {
const mk = (d) => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="3" opacity=".55"/>${d}</svg>`);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="${accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v9M8 12.5l4 4 4-4"/></svg>`;
return `#centre table.simulateur tr.fz-thead > td{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;border-top:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent)!important;padding:6px 4px!important;vertical-align:middle!important;}
#centre table.simulateur tr.fz-thead strong{font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;letter-spacing:.08em;text-transform:uppercase;color:var(--fz-accent)!important;font-weight:700;vertical-align:middle;}
#centre table.simulateur tr.fz-thead > td > a{display:inline-flex!important;align-items:center;justify-content:center;width:20px;height:20px;vertical-align:middle;margin-right:6px;}
#centre table.simulateur tr.fz-thead > td > a img{display:block!important;margin:0!important;position:static!important;top:auto!important;content:url("data:image/svg+xml,${encodeURIComponent(svg)}")!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) var(--fz-accent));transition:transform .15s;}
#centre table.simulateur tr.fz-thead > td > a:hover img{transform:scale(1.15);}
#centre table.simulateur img[src*="fleche-champs-gauche."]{content:url("${mk('<path d="M13.5 7.5L9 12l4.5 4.5M17 7.5L12.5 12l4.5 4.5"/>')}")!important;}
#centre table.simulateur img[src*="fleche-champs-droite."]{content:url("${mk('<path d="M10.5 7.5L15 12l-4.5 4.5M7 7.5l4.5 4.5L7 16.5"/>')}")!important;}
#centre table.simulateur img[src*="fleche-champs-"]{width:18px!important;height:18px!important;vertical-align:middle!important;cursor:pointer;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) var(--fz-accent))!important;transition:transform .15s;}
#centre table.simulateur img[src*="fleche-champs-"]:hover{transform:scale(1.15);}
#centre sup[data-fmz-fullxp]{display:none!important;}`;
};
function colorArmyUnits() {
document.querySelectorAll('#centre table.simulateur tr').forEach(tr => {
const td = tr.children[0];
if (!td || tr.classList.contains('fz-thead') || tr.children.length < 2 || td.classList.contains('fz-unit')) return;
const txt = td.textContent.replace(/[\s ]+/g, ' ').trim();
if (txt.length > 40) return;
const hit = UNIT_COLORS.find(([re]) => new RegExp('^' + re.source, 'i').test(txt));
if (!hit) return;
td.classList.add('fz-unit');
[td, ...td.querySelectorAll('*')].forEach(e => e.style.setProperty('color', hit[1], 'important'));
[...tr.children].slice(1).forEach(c => {
if (!/\d/.test(c.textContent)) return;
c.classList.add('fz-unit-qty');
[c, ...c.querySelectorAll('*')].forEach(e => e.style.setProperty('color', hit[1], 'important'));
});
});
}
const MSG_TAGS = [
[/^\s*vol\b/i, 'Flood', '#ff9f1c', ['▼', '#ff4d4d']],
[/^\s*butin\b/i, 'Flood', '#ff9f1c', ['▲', '#5dff7a']],
[/^\s*chasse\b|chasseuses? ont conquis/i, 'Chasse', '#5dff7a'],
[/^\s*(attaque|invasion)\b/i, 'Combat', '#ff5470'],
[/^\s*convoi/i, 'Convoi', '#6cc8ff'],
];
function tagMessages() {
document.querySelectorAll('#messagerie a.intitule_message').forEach(a => {
if (a.parentNode.querySelector('.fz-tag')) return;
const title = a.textContent.trim();
if (!title) return;
const hit = MSG_TAGS.find(([re]) => re.test(title));
const [, label, color, arrow] = hit || [null, 'Discussion', '#b77cff'];
const tag = document.createElement('span');
tag.className = 'fz-tag';
tag.textContent = label;
if (arrow) {
const ar = document.createElement('span');
ar.className = 'fz-tag-arrow'; ar.textContent = arrow[0]; ar.style.color = arrow[1];
tag.appendChild(ar);
}
tag.style.setProperty('--tag', color);
a.parentNode.insertBefore(tag, a);
});
document.querySelectorAll('#messagerie tr.en_tete_message').forEach(tr => {
const sp = tr.querySelector('span.nbr_mess_non_lus_conv');
const has = !!sp;
let badge = tr.querySelector('.fz-new');
if (has && !badge) {
badge = document.createElement('span');
badge.className = 'fz-new'; badge.textContent = 'Nouveau';
const tag = tr.querySelector('.fz-tag');
if (tag) tag.after(badge); else sp.after(badge);
}
if (badge) {
badge.style.display = has ? '' : 'none';
const n = has ? sp.textContent.replace(/\D/g, '') : '';
badge.title = n ? n + ' message(s) non lu(s)' : 'Non lu';
}
tr.classList.toggle('fz-unread', has);
});
}
const MSG_TAG_CSS = `#messagerie .fz-tag{display:inline-block;box-sizing:border-box;min-width:72px;margin-right:8px;padding:1px 6px;border:1px solid var(--tag);border-radius:2px;background:transparent;color:var(--tag)!important;font:700 9.5px/14px "Orbitron","Segoe UI",sans-serif;letter-spacing:.08em;text-transform:uppercase;text-align:center;vertical-align:middle;box-shadow:0 0 calc(5px*var(--fz-glow)) color-mix(in srgb,var(--tag) 45%,transparent),inset 0 0 calc(4px*var(--fz-glow)) color-mix(in srgb,var(--tag) 25%,transparent)}#messagerie .fz-tag-arrow{margin-left:5px;font-size:9px;text-shadow:0 0 calc(4px*var(--fz-glow)) currentColor}#messagerie span.nbr_mess_non_lus_conv{display:none!important}#messagerie .fz-new{display:inline-block;margin:0 8px 0 0;padding:1px 7px;border:1px solid #fff;border-radius:2px;color:#fff!important;font:700 9.5px/14px "Orbitron","Segoe UI",sans-serif;letter-spacing:.08em;text-transform:uppercase;vertical-align:middle;box-shadow:0 0 calc(8px*var(--fz-glow)) rgba(255,255,255,.55);animation:fz-pulse 1.8s ease-in-out infinite}@keyframes fz-pulse{50%{box-shadow:0 0 calc(14px*var(--fz-glow)) rgba(255,255,255,.85)}}#centre #messagerie tr.fz-unread a.intitule_message{font-weight:700!important;color:#fff!important}#centre #messagerie tr.fz-unread>td:first-child{box-shadow:inset 3px 0 0 var(--fz-accent)}#centre #messagerie tr.contenu_conversation td.expe,#centre #messagerie tr.contenu_conversation td.expe *,#centre #messagerie .message_non_lu{color:var(--fz-text)!important}#centre #messagerie tr.contenu_conversation .date_envoi{display:inline-block;float:right;margin:0 0 6px 12px!important;padding:2px 9px;border:1px solid color-mix(in srgb,var(--fz-accent) 45%,transparent);border-radius:2px;background:color-mix(in srgb,var(--fz-accent) 10%,rgba(5,12,24,.85));color:color-mix(in srgb,var(--fz-accent) 70%,#fff)!important;font:600 11px/16px "Orbitron","Segoe UI",sans-serif!important;letter-spacing:.08em;font-variant-numeric:tabular-nums;white-space:nowrap;text-shadow:0 0 calc(4px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 60%,transparent);box-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 20%,transparent)}#messagerie .groupe_options_gestion{display:inline-flex!important;align-items:center;height:28px;box-sizing:border-box;vertical-align:middle!important;padding:0!important}#messagerie .groupe_options_gestion>span,#messagerie .groupe_options_gestion .option_gestion{display:inline-flex;align-items:center;justify-content:center;gap:5px;height:26px;box-sizing:border-box;padding:0 9px!important;margin:0!important;vertical-align:middle!important;line-height:1!important}#messagerie .groupe_options_gestion img,#messagerie .bouton_messagerie img{position:static!important;margin:0!important;top:auto!important;display:block!important}#messagerie .bouton_messagerie{display:inline-flex!important;align-items:center;justify-content:center;width:26px!important;height:26px!important;box-sizing:border-box;padding:0!important}#messagerie .bouton_messagerie>span{display:inline-flex!important;align-items:center;justify-content:center}#messagerie .groupe_dossiers,#messagerie .groupe_dossiers *,#messagerie a.groupe_dossiers{color:var(--fz-accent)!important;font-family:"Exo 2","Segoe UI",sans-serif!important;font-size:13px!important;font-weight:600!important;font-variant:normal!important;text-transform:none!important;letter-spacing:.03em!important;text-shadow:none!important}#messagerie .groupe_dossiers:hover,#messagerie .groupe_dossiers:hover *{color:#fff!important}#messagerie .groupe_dossiers .choix_supplementaires_option,#messagerie .groupe_dossiers .choix_supplementaires_option *{font-size:12px!important}#centre #messagerie td.td_objet>span.message_affiche{color:#9fdcff!important;opacity:1!important;font-weight:600;letter-spacing:.02em;font-variant-numeric:tabular-nums}#centre #messagerie td.td_participants,#centre #messagerie td.td_participants a,#centre #messagerie td.td_par,#centre #messagerie td.td_par a{color:#9fdcff!important;font-weight:600!important}#centre table.tab_triable tr>td,#centre #tabEnnemie tr>td{background:transparent!important}#centre table.tab_triable tr.alt>td,#centre #tabEnnemie tr:nth-child(even)>td{background:color-mix(in srgb,var(--fz-accent) 8%,transparent)!important}#centre table.tab_triable tr:hover>td,#centre #tabEnnemie tr:hover>td{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important}#centre table.tab_triable tr.monAlliance>td,#centre table.tab_triable tr.monAlliance a{color:#4ade80!important;font-weight:700}#centre table.tab_triable tr[class*="pacte_"]>td,#centre table.tab_triable tr[class*="pacte_"] a{color:#7ab8ff!important}#centre table.tab_triable tr.guerre>td,#centre table.tab_triable tr.guerre a{color:#ff5a5a!important}#centre>h2{margin-bottom:18px!important}#centre table.simulateur table.tab_triable tr.monAlliance>td{color:#4ade80!important;font-weight:700}#centre table.simulateur table.tab_triable tr.monAlliance a{color:#4ade80!important}#centre table.simulateur table.tab_triable tr#ancre>td{color:#4ade80!important;font-weight:700;background:color-mix(in srgb,#4ade80 16%,transparent)!important;border-top:1px solid color-mix(in srgb,#4ade80 60%,transparent)!important;border-bottom:1px solid color-mix(in srgb,#4ade80 60%,transparent)!important;text-shadow:0 0 6px color-mix(in srgb,#4ade80 55%,transparent)}#centre table.simulateur table.tab_triable tr#ancre>td:first-child{border-left:3px solid #4ade80!important}#centre table.simulateur table.tab_triable tr#ancre>td:last-child{border-right:1px solid color-mix(in srgb,#4ade80 60%,transparent)!important}#centre table.simulateur table.tab_triable tr#ancre:hover>td{background:color-mix(in srgb,#4ade80 26%,transparent)!important}#centre table.simulateur table.tab_triable tr#ancre a{color:#4ade80!important}#centre table.simulateur table.tab_triable tr[class*="pacte_"]>td,#centre table.simulateur table.tab_triable tr[class*="pacte_"] a{color:#7ab8ff!important}#centre table.simulateur table.tab_triable tr.guerre>td,#centre table.simulateur table.tab_triable tr.guerre a{color:#ff5a5a!important}#centre table.simulateur tr:has(>td>h2):hover>td,#centre table.simulateur tr:has(>td table):hover>td{background:transparent!important}#centre table.simulateur form:has(#pseudo_convoi) tr:hover>td:not(.cliquable3){background:transparent!important}#centre form:has(#pseudo_convoi) td>img{width:24px!important;height:24px!important;object-fit:contain;display:block;margin:0 auto}#centre form td:has(>input[name="convoi"]:not(.fz-hidden-input)){padding-top:10px!important;filter:drop-shadow(0 0 calc(6px*var(--fz-glow)) rgba(56,140,255,.6))}#centre table.simulateur form input[type="submit"][name="convoi"]{width:240px!important;height:auto!important;padding:8px 16px!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-weight:700!important;font-size:12px!important;letter-spacing:.18em!important;text-transform:uppercase;color:#eef6ff!important;text-shadow:0 0 calc(5px*var(--fz-glow)) rgba(190,220,255,.8);background:linear-gradient(180deg,#5aa8ff 0%,#2a6fe0 55%,#1747a8 100%)!important;border:1px solid #9cc9ff!important;border-radius:0!important;box-shadow:none!important;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);cursor:pointer;transition:filter .15s,transform .1s}#centre table.simulateur form input[type="submit"][name="convoi"]:hover{filter:brightness(1.18) saturate(1.2);color:#fff!important}#centre table.simulateur form input[type="submit"][name="convoi"]:active{transform:translateY(1px);filter:brightness(.95)}#centre #formulaireChoixArmee tr:hover>td{background:transparent!important}#centre #formulaireChoixArmee #tabChoixArmee>tbody>tr:not(:first-child):hover>td,#centre #formulaireChoixArmee #Calys_OF_tabFlood>tbody>tr:not(:first-child):hover>td{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important}#formulaireChoixArmee center>.fz-act-wrap{margin-top:10px}#centre>center>span.gras>a[href*="classementAlliance"]{color:#e3a15f!important}#centre>center>span.gras>a[href*="classementAlliance"]:hover{color:#f5c99a!important}#centre>center>span.gras>a[href*="Membre"]{margin-right:4px}#centre a.fz-cancel,#centre a[href*="annuler" i]{display:inline-block!important;width:18px!important;height:18px!important;margin:0 4px!important;vertical-align:middle!important;font-size:0!important;line-height:0!important;color:transparent!important;text-decoration:none!important;text-shadow:none!important;background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2218%22%20height%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23ff4d5e%22%20stroke-width%3D%221.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%229%22%20fill%3D%22%23ff4d5e%22%20fill-opacity%3D%22.12%22%2F%3E%3Cpath%20d%3D%22M8.5%208.5l7%207M15.5%208.5l-7%207%22%20stroke-width%3D%222.2%22%2F%3E%3C%2Fsvg%3E") center/contain no-repeat!important;filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) #ff4d5e);cursor:pointer;transition:transform .15s,filter .15s}#centre a.fz-cancel *,#centre a[href*="annuler" i] *{display:none!important}#centre a.fz-cancel:hover,#centre a[href*="annuler" i]:hover{transform:scale(1.2);filter:drop-shadow(0 0 calc(6px*var(--fz-glow)) #ff4d5e) brightness(1.2)}#centre .boite_membre{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));color:var(--fz-text)!important;margin:0 0 14px!important;padding:10px 16px 14px!important;box-sizing:border-box}#centre .boite_membre>h4{font-family:"Orbitron","Segoe UI",sans-serif!important;text-transform:uppercase;border:none!important}#centre .boite_membre table,#centre .boite_membre tr,#centre .boite_membre td,#centre .boite_membre th{background:transparent!important;color:var(--fz-text)!important;border-color:color-mix(in srgb,var(--fz-accent) 20%,transparent)!important}#centre .boite_membre td[style*="right"]{color:color-mix(in srgb,var(--fz-text) 65%,transparent)!important;padding-right:8px!important}#centre .boite_membre td{padding-top:2px!important;padding-bottom:2px!important}#centre .boite_membre table.tableau_score{border:1px solid color-mix(in srgb,var(--fz-accent) 30%,transparent)!important;border-collapse:collapse!important}#centre .boite_membre table.tableau_score th{background:color-mix(in srgb,var(--fz-accent) 12%,transparent)!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;text-transform:uppercase;letter-spacing:.06em;padding:4px 10px!important}#centre .boite_membre table.tableau_score td{border-top:1px solid color-mix(in srgb,var(--fz-accent) 12%,transparent)!important;padding:3px 10px!important;font-variant-numeric:tabular-nums}#centre .boite_membre table.tableau_score tr:nth-child(odd):not(:first-child)>td{background:color-mix(in srgb,var(--fz-accent) 6%,transparent)!important}#centre .boite_membre table.tableau_score td:first-child{text-align:left!important;color:color-mix(in srgb,var(--fz-text) 70%,transparent)!important}#centre .boite_membre a[href*="classementAlliance"]{color:#e3a15f!important;font-weight:700}#centre .boite_membre a[href*="classementAlliance"]:hover{color:#f5c99a!important}#centre .boite_membre tr.monAlliance a[href*="classementAlliance"]{color:#4ade80!important;text-shadow:0 0 calc(5px*var(--fz-glow)) rgba(74,222,128,.5)}#centre .boite_membre tr.monAlliance>td:first-child{color:color-mix(in srgb,var(--fz-text) 65%,transparent)!important}#centre .boite_membre td:has(>a[href*="commerce"]){font-size:0!important;text-align:left!important}#centre .boite_membre a[href*="commerce"],#centre .boite_membre a[href*="messagerie"],#centre .boite_membre a[href*="amis"]{display:block;font-size:13px!important;padding:2px 0;color:var(--fz-link)!important;text-decoration:none!important}#centre .boite_membre a[href*="commerce"]::before,#centre .boite_membre a[href*="messagerie"]::before,#centre .boite_membre a[href*="amis"]::before{content:"› ";color:var(--fz-accent);font-weight:700}#centre .boite_membre a[href*="commerce"]:hover,#centre .boite_membre a[href*="messagerie"]:hover,#centre .boite_membre a[href*="amis"]:hover{color:#fff!important}#centre .boite_membre .contenuJoueur{background:rgba(0,0,0,.22)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 12%,transparent);padding:10px!important;box-sizing:border-box}#centre .boite_membre .fmz-profil-va>div{justify-content:center!important;text-align:center!important}#centre .boite_membre>h4{display:flex!important;align-items:center;justify-content:center;gap:12px;margin:-10px -16px 12px!important;padding:8px 16px!important;min-height:20px;text-align:center!important;font-size:15px!important;letter-spacing:.16em!important;color:#eafaff!important;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 22%,transparent) 30%,color-mix(in srgb,var(--fz-accent) 22%,transparent) 70%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;text-shadow:0 0 calc(10px*var(--fz-glow)) var(--fz-accent),0 0 2px var(--fz-accent)!important}#centre .boite_membre>h4::before,#centre .boite_membre>h4::after{content:"";flex:0 0 40px;height:1px;background:linear-gradient(90deg,transparent,var(--fz-accent))}#centre .boite_membre>h4::after{background:linear-gradient(90deg,var(--fz-accent),transparent)}#centre .boite_membre div.tableau_score{background:color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 30%,transparent)!important;padding:6px 14px!important}#centre .boite_membre div.tableau_score strong{color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px;text-transform:uppercase;letter-spacing:.08em}#centre .boite_membre div.tableau_score li::marker{color:var(--fz-accent)}#centre .boite_membre td.fz-trajet{font-weight:700}#centre .fz-egg{text-align:center;margin:8px 0 16px}#centre .fz-egg img{display:inline-block;width:240px;height:auto;filter:drop-shadow(0 0 calc(14px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 55%,transparent)) drop-shadow(0 6px 12px rgba(0,0,0,.6));transition:transform .3s ease;animation:fz-egg-in .6s ease-out}#centre .fz-egg img:hover{transform:scale(1.04) rotate(-1deg)}@keyframes fz-egg-in{from{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:none}}html body #menu ul.menu_colonne{display:grid!important;grid-template-columns:repeat(3,1fr);grid-auto-rows:auto;align-items:stretch;row-gap:2px;padding:8px 6px!important;box-sizing:border-box;height:auto!important}html body #menu ul.menu_colonne>li{float:none!important;height:auto!important;width:auto!important;margin:0!important}html body #menu ul.menu_colonne>li>a{display:flex!important;flex-direction:column;align-items:center;justify-content:flex-start;gap:5px;width:100%!important;height:100%!important;min-height:57px;padding:7px 4px!important;box-sizing:border-box;text-align:center!important;line-height:1.15!important;overflow:visible!important}html body #menu ul.menu_colonne>li>a>span{display:block!important;margin:0!important;width:24px!important;height:24px!important;flex:0 0 auto}html body #centre #menu a[href*="Membre.php"]{color:var(--fz-text)!important}html body #centre #menu a[href*="Membre.php"]:hover{color:var(--fz-accent)!important}#centre div[id^="graph_"]{margin:0 0 14px!important;background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))}#centre div[id^="graph_"] + center{margin:-4px 0 12px}#centre .highcharts-container{--highcharts-background-color:#0b1626;--highcharts-neutral-color-100:#ffffff;--highcharts-neutral-color-80:#e2f1ff;--highcharts-neutral-color-60:#b6cbe0;--highcharts-neutral-color-40:#7f97ad;--highcharts-neutral-color-20:#3e5266;--highcharts-neutral-color-10:color-mix(in srgb,var(--fz-accent) 16%,transparent);--highcharts-neutral-color-5:color-mix(in srgb,var(--fz-accent) 8%,transparent);--highcharts-neutral-color-3:color-mix(in srgb,var(--fz-accent) 5%,transparent)}#centre .highcharts-background{fill:transparent!important}#centre .highcharts-plot-background{fill:rgba(0,0,0,.18)!important}#centre .highcharts-title,#centre .highcharts-title tspan{fill:var(--fz-accent)!important;color:var(--fz-accent)!important}#centre .highcharts-axis-labels text{fill:#b6cbe0!important;color:#b6cbe0!important}#centre .highcharts-grid-line{stroke:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important}#centre .highcharts-axis-line,#centre .highcharts-tick{stroke:color-mix(in srgb,var(--fz-accent) 40%,transparent)!important}#centre .highcharts-legend-box{fill:rgba(6,14,26,.75)!important;stroke:color-mix(in srgb,var(--fz-accent) 35%,transparent)!important}#centre .highcharts-legend-item text,#centre .highcharts-legend foreignObject div,#centre .highcharts-legend foreignObject span,#centre .highcharts-legend-item span{fill:#e2f1ff!important;color:#e2f1ff!important}#centre .highcharts-legend-item-hidden text,#centre .highcharts-legend-item-hidden foreignObject div,#centre .highcharts-legend-item-hidden span{fill:#5d6f82!important;color:#5d6f82!important}#centre .highcharts-legend-title text,#centre .highcharts-legend-title foreignObject div,#centre .highcharts-legend-title span{fill:var(--fz-accent)!important;color:var(--fz-accent)!important}#centre .highcharts-button-box{fill:transparent!important;stroke:color-mix(in srgb,var(--fz-accent) 35%,transparent)!important}#centre .highcharts-button-symbol{stroke:var(--fz-accent)!important;fill:var(--fz-accent)!important}#centre .highcharts-tooltip-box{fill:rgba(6,14,26,.95)!important;stroke:var(--fz-accent)!important}#centre .highcharts-tooltip text,#centre .highcharts-tooltip span{fill:#e2f1ff!important;color:#e2f1ff!important}#centre .highcharts-series-group{filter:brightness(1.15) saturate(1.15)}#centre span.bouton_graphique{display:inline-flex!important;align-items:center;gap:5px;margin:4px 3px!important;padding:4px 11px!important;background:color-mix(in srgb,var(--fz-accent) 8%,transparent)!important;color:var(--fz-text)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important;border-radius:2px!important;font-size:12px!important;cursor:pointer;transition:background .15s,box-shadow .15s}#centre span.bouton_graphique:hover{background:color-mix(in srgb,var(--fz-accent) 18%,transparent)!important;color:#fff!important}#centre span.bouton_graphique:is([style*="215, 195, 132"],[style*="d7c384" i]){background:color-mix(in srgb,var(--fz-accent) 30%,transparent)!important;color:#fff!important;border-color:var(--fz-accent)!important;box-shadow:0 0 calc(8px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 45%,transparent),inset 0 -2px 0 var(--fz-accent)!important}body>div#menu{display:none!important}#centre:has(#paiementBlock)>div:not([id]):has(>p>strong){background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));padding:12px 22px 14px!important;margin:8px 0 16px!important;box-sizing:border-box}#centre:has(#paiementBlock)>div:not([id]):has(>p>strong)>p:first-of-type strong{color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:14px;letter-spacing:.06em;text-transform:uppercase;text-shadow:0 0 calc(8px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 60%,transparent)}#centre:has(#paiementBlock)>div:not([id]):has(>p>strong)>p:nth-of-type(2) strong{color:#fff!important}#centre:has(#paiementBlock)>div:not([id]):has(>p>strong)>div{line-height:1.65!important;color:var(--fz-text)!important;padding-left:6px;border-left:2px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)}#centre #paiementBlock{background:linear-gradient(135deg,rgba(14,30,52,.85),rgba(8,14,28,.92))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));padding:12px 20px 18px!important;margin:0 0 14px!important;box-sizing:border-box}#centre #paiementBlock>h1{color:#ffd25a!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:20px!important;text-transform:uppercase;letter-spacing:.1em;text-align:center!important;margin:4px 0 14px!important;text-shadow:0 0 calc(10px*var(--fz-glow)) rgba(255,170,40,.6)!important}#centre #paiementBlock #acceptationCgv{margin:0 auto 16px!important;padding:8px 14px;background:color-mix(in srgb,var(--fz-accent) 6%,transparent);border:1px solid color-mix(in srgb,var(--fz-accent) 22%,transparent);box-sizing:border-box}#centre #paiementBlock #acceptationCgv input[type=checkbox]{accent-color:var(--fz-accent);vertical-align:middle;margin-right:6px}#centre #containerPaiement{display:flex!important;justify-content:center;gap:18px;flex-wrap:wrap}#centre #containerPaiement .priceItem{float:none!important;width:245px!important;padding:12px 10px 14px!important;box-sizing:border-box;background:color-mix(in srgb,var(--fz-accent) 7%,transparent)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);text-align:center;transition:background .15s}#centre #containerPaiement .priceItem:hover{background:color-mix(in srgb,var(--fz-accent) 14%,transparent)!important}#centre #containerPaiement .priceItem .title{color:var(--fz-accent)!important;font-weight:700;margin:0 0 6px!important}#centre #containerPaiement .priceItem .price{color:#fff!important;font-size:18px!important;font-weight:700;margin:0 0 2px!important}#centre #containerPaiement .priceItem .globalPrice{color:#7f97ad!important;margin:0 0 10px!important}#centre:has(#paiementBlock)>div:not([id]):has(>p>strong){display:flow-root}#centre .fz-poster{float:right;width:230px;margin:2px 0 10px 22px;cursor:pointer;border:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent);box-shadow:0 0 calc(16px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 45%,transparent),0 6px 14px rgba(0,0,0,.55);transform:rotate(1.2deg);transition:transform .25s,box-shadow .25s}#centre .fz-poster img{display:block;width:100%;height:auto}#centre .fz-poster:hover{transform:rotate(0) scale(1.03);box-shadow:0 0 calc(26px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 70%,transparent),0 8px 18px rgba(0,0,0,.6)}#centre table.simulateur_combat,#centre table.tableau_ami,#centre #tab_blocnote,#centre .message_voile{background:linear-gradient(135deg,rgba(14,30,52,.88),rgba(8,14,28,.94))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));color:var(--fz-text)!important}#centre table.simulateur_combat td,#centre table.tableau_ami td,#centre #tab_blocnote td,#centre #tab_blocnote tr{background:transparent!important;color:var(--fz-text)!important}#centre table.tableau_ami{padding:6px 12px!important}#centre #tab_blocnote{padding:2px 8px!important}#centre table.simulateur_combat fieldset{border:1px solid color-mix(in srgb,var(--fz-accent) 30%,transparent)!important;border-radius:0!important;background:color-mix(in srgb,var(--fz-accent) 4%,transparent)!important;padding:4px 10px 8px!important}#centre table.simulateur_combat td{vertical-align:middle!important;padding-top:1px!important;padding-bottom:1px!important}#centre table.simulateur_combat label{color:var(--fz-text)!important}#centre table.simulateur_combat input[type=radio]{accent-color:var(--fz-accent);vertical-align:middle}#centre :is(table.simulateur_combat,table.simulateur) input[type=text]{font-variant-numeric:tabular-nums}#centre table.simulateur:has(input[type=image][src*="OK."]) tr>td:first-of-type{text-align:right!important;padding-right:10px!important;font-variant-numeric:tabular-nums}#centre table.simulateur:has(input[type=image][src*="OK."]) tr>td:last-of-type{text-align:center!important}#centre #formulaireFlood table tr:nth-child(3)>:is(td,th){background:color-mix(in srgb,var(--fz-accent) 12%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 45%,transparent);padding:4px!important}#centre #formulaireFlood table tr:nth-child(3)>:is(td,th):last-child{text-align:center!important}#centre #tab_blocnote td{vertical-align:middle!important}#centre #tab_blocnote input#rechercher{vertical-align:middle}html body #centre tr.ligneAmelioration.fz-u-ouv h2{color:#ffb020!important;text-shadow:0 0 calc(8px*var(--fz-glow)) rgba(255,176,32,.7)!important}html body #centre tr.ligneAmelioration.fz-u-mil h2{color:#ff4d5e!important;text-shadow:0 0 calc(8px*var(--fz-glow)) rgba(255,77,94,.7)!important}#centre span.niveau_amelioration.fz-lvl-src{display:none!important}#centre .fz-lvls{display:inline-flex;align-items:center;margin:0 6px 0 12px;vertical-align:baseline;position:relative;top:-3px}#centre .fz-lvl{display:inline-block;padding:2px 10px;border:1px solid rgba(214,226,238,.6);border-radius:3px;background:transparent;color:#dbe6f0;font-family:"Orbitron","Segoe UI",sans-serif;font-size:15px;font-weight:700;letter-spacing:.06em;line-height:20px;white-space:nowrap}#centre table.simulateur td.fz-band-cell{display:flex!important;align-items:center;gap:10px}#centre table.simulateur h2.fz-band{flex:1;display:flex!important;align-items:center;justify-content:center;gap:12px;margin:0!important;padding:8px 16px!important;text-align:center!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:17px!important;font-style:normal!important;letter-spacing:.16em!important;text-transform:uppercase;color:#eafaff!important;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 22%,transparent) 30%,color-mix(in srgb,var(--fz-accent) 22%,transparent) 70%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;text-shadow:0 0 calc(10px*var(--fz-glow)) var(--fz-accent),0 0 2px var(--fz-accent)!important}#centre table.simulateur h2.fz-band::before,#centre table.simulateur h2.fz-band::after{content:"";flex:0 0 50px;height:1px;background:linear-gradient(90deg,transparent,var(--fz-accent))}#centre table.simulateur h2.fz-band::after{background:linear-gradient(90deg,var(--fz-accent),transparent)}html body #centre #tabMembresAlliance tr:first-child>th{color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;font-weight:700!important;letter-spacing:.08em;text-transform:uppercase;background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important;padding:4px 6px!important;white-space:nowrap}html body #centre #tabMembresAlliance tr>:first-child{width:0!important;min-width:0!important;padding:0!important}html body #centre #tabMembresAlliance tr>:nth-child(2){width:30px!important;min-width:30px!important;padding:2px 4px!important;text-align:center!important;font-variant-numeric:tabular-nums}#centre a.fz-addfriends{display:inline-flex!important;align-items:center;gap:8px;margin:12px 0 4px;padding:5px 14px 5px 5px;border:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent);background:color-mix(in srgb,var(--fz-accent) 10%,transparent);color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-decoration:none!important;border-radius:2px;box-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 30%,transparent);transition:background .15s,color .15s}#centre a.fz-addfriends:hover{background:color-mix(in srgb,var(--fz-accent) 24%,transparent);color:#fff!important}#centre a.fz-addfriends .fz-plus{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:var(--fz-accent);color:#04121f;font-size:16px;font-weight:900;line-height:1;border-radius:2px}html body #centre #tabMembresAlliance tr.fz-me>td{color:#4ade80!important;font-weight:700;background:color-mix(in srgb,#4ade80 16%,transparent)!important;border-top:1px solid color-mix(in srgb,#4ade80 60%,transparent)!important;border-bottom:1px solid color-mix(in srgb,#4ade80 60%,transparent)!important;text-shadow:0 0 6px color-mix(in srgb,#4ade80 55%,transparent)}html body #centre #tabMembresAlliance tr.fz-me>td:first-child{border-left:3px solid #4ade80!important}html body #centre #tabMembresAlliance tr.fz-me>td:last-child{border-right:1px solid color-mix(in srgb,#4ade80 60%,transparent)!important}html body #centre #tabMembresAlliance tr.fz-me:hover>td{background:color-mix(in srgb,#4ade80 26%,transparent)!important}html body #centre #tabMembresAlliance tr.fz-me a{color:#4ade80!important}html.fz-cache-tf #centre #tabMembresAlliance .fz-col-tf{display:none!important}#centre label.fz-cols-tf{display:inline-flex!important;align-items:center;gap:8px;margin:12px 0 4px 10px;box-sizing:border-box;padding:5px 14px 5px 5px;border:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent);background:color-mix(in srgb,var(--fz-accent) 10%,transparent);color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:2px;box-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 30%,transparent);cursor:pointer;user-select:none}#centre label.fz-cols-tf span{font-family:inherit!important}#centre label.fz-cols-tf:hover{background:color-mix(in srgb,var(--fz-accent) 24%,transparent);color:#fff!important}#centre label.fz-cols-tf input{position:absolute;opacity:0;width:0;height:0;margin:0;pointer-events:none}#centre label.fz-cols-tf .fz-cols-box{position:relative;display:inline-block;width:20px;height:20px;box-sizing:border-box;border:1px solid var(--fz-accent);border-radius:2px;background:rgba(4,12,22,.8)}#centre label.fz-cols-tf input:checked + .fz-cols-box{background:var(--fz-accent);box-shadow:0 0 calc(6px*var(--fz-glow)) var(--fz-accent)}#centre label.fz-cols-tf input:checked + .fz-cols-box::after{content:"";position:absolute;left:6px;top:2px;width:5px;height:10px;border:solid #04121f;border-width:0 2px 2px 0;transform:rotate(45deg)}#centre label.fz-cols-tf input:focus-visible + .fz-cols-box{outline:2px solid #fff;outline-offset:1px}#centre .fz-mem-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;margin:12px 0 4px}#centre .fz-mem-actions>:is(a.fz-addfriends,label.fz-cols-tf){margin:0!important;height:32px;box-sizing:border-box;line-height:1;vertical-align:top}html body #centre table.simulateur tr.fz-thead>td:has(#formulaireChoixArmee){background:transparent!important;border-top:0!important;border-bottom:0!important}#centre :is(table.tableau_detail_carte,table.tableau_diplomatie_carte,table.tableau_fourmiliere_carte){background:linear-gradient(135deg,rgba(14,30,52,.88),rgba(8,14,28,.94))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(14px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));color:var(--fz-text)!important;margin-bottom:10px!important;border-collapse:separate!important;border-spacing:0!important}#centre :is(table.tableau_detail_carte,table.tableau_diplomatie_carte,table.tableau_fourmiliere_carte) td{background:transparent!important;color:var(--fz-text)!important;padding:3px 10px!important;vertical-align:middle!important}#centre :is(table.tableau_diplomatie_carte,table.tableau_fourmiliere_carte) tr:first-child>td{background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 22%,transparent) 30%,color-mix(in srgb,var(--fz-accent) 22%,transparent) 70%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;color:#eafaff!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:12px!important;letter-spacing:.14em;text-transform:uppercase;text-align:center!important;padding:6px 10px!important;text-shadow:0 0 calc(8px*var(--fz-glow)) var(--fz-accent)}#centre table.tableau_detail_carte tr>td:first-child{color:color-mix(in srgb,var(--fz-text) 65%,transparent)!important;text-align:right!important;width:50%}#centre table.tableau_detail_carte tr>td:last-child{color:#fff!important;font-weight:700;text-align:left!important}#centre table.tableau_detail_carte #legende_alliance{color:#e3a15f!important}#centre table.tableau_diplomatie_carte tr:not(:first-child)>td:last-child,#centre table.tableau_fourmiliere_carte tr:not(:first-child)>td:last-child{font-weight:600}#centre table.tableau_diplomatie_carte tr:nth-child(2)>td:last-child{color:#4ade80!important}#centre table.tableau_diplomatie_carte tr:nth-child(3)>td:last-child{color:#7ab8ff!important}#centre table.tableau_diplomatie_carte tr:nth-child(4)>td:last-child{color:#ff5a5a!important}#centre table.tableau_fourmiliere_carte tr:nth-child(2)>td:last-child{color:#8aa0b5!important}#centre table.tableau_fourmiliere_carte tr:nth-child(3)>td:last-child{color:#4ade80!important}#centre table.tableau_fourmiliere_carte tr:nth-child(4)>td:last-child{color:#ff5a5a!important}#centre div:has(>.fond_de_carte){background:radial-gradient(ellipse at 50% 45%,rgba(57,208,255,.07),rgba(8,14,28,.55) 70%)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 30%,transparent)!important;box-shadow:0 0 calc(14px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 14%,transparent),inset 0 0 30px rgba(0,0,0,.35)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))}#centre .fond_de_carte>div[id^="mx"],#centre .fond_de_carte>div[id^="my"]{color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:9px!important;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.9),0 0 calc(4px*var(--fz-glow)) var(--fz-accent)}#centre form.carte_loupe{color:var(--fz-text)!important}#centre table.simulateur h3.fz-band{display:flex!important;align-items:center;justify-content:center;gap:12px;margin:2px 0 10px!important;padding:8px 16px!important;text-align:center!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:17px!important;letter-spacing:.16em!important;text-transform:uppercase;color:#eafaff!important;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 22%,transparent) 30%,color-mix(in srgb,var(--fz-accent) 22%,transparent) 70%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;text-shadow:0 0 calc(10px*var(--fz-glow)) var(--fz-accent),0 0 2px var(--fz-accent)!important}#centre table.simulateur h3.fz-band::before,#centre table.simulateur h3.fz-band::after{content:"";flex:0 0 50px;height:1px;background:linear-gradient(90deg,transparent,var(--fz-accent))}#centre table.simulateur h3.fz-band::after{background:linear-gradient(90deg,var(--fz-accent),transparent)}#centre table.simulateur.fz-stats{margin-top:16px!important;box-sizing:border-box}#centre table.simulateur.fz-stats td{overflow:hidden;text-overflow:ellipsis}#centre table.simulateur.fz-stats tr:first-child>td{background:transparent!important}#centre table.simulateur.fz-stats tr.fz-stats-cols>td{color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent);padding:4px 6px!important;background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important}#centre .photo_unite{position:relative!important}html body #centre tr.ligneAmelioration>td:has(>.photo_unite){vertical-align:top!important;padding:0!important}html body #centre tr.ligneAmelioration .photo_unite{margin:0!important}#centre .photo_unite[data-fz-unit]{filter:none!important}#centre .fz-copy-army-wrap{text-align:center;margin:4px 0 14px}#centre a.fz-copy-army{display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 5px;border:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent);background:color-mix(in srgb,var(--fz-accent) 10%,transparent);color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-decoration:none!important;border-radius:2px;box-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 30%,transparent);transition:background .15s,color .15s}#centre a.fz-copy-army:hover{background:color-mix(in srgb,var(--fz-accent) 24%,transparent);color:#fff!important}#centre a.fz-copy-army .fz-plus{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:var(--fz-accent);color:#04121f;font-size:14px;font-weight:900;line-height:1;border-radius:2px}#centre a.fz-copy-army.fz-ok{border-color:#4ade80;color:#4ade80!important;background:rgba(74,222,128,.12)}#centre a.fz-copy-army.fz-ok .fz-plus{background:#4ade80}#centre .photo_unite[data-fz-unit]::after{display:none!important}#centre .photo_unite .fz-army-badge{position:absolute;top:0;right:0;z-index:2;display:block;padding:4px 10px 5px 16px;background:linear-gradient(180deg,rgba(10,16,26,.68),rgba(8,12,20,.62));backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);text-shadow:0 1px 2px rgba(0,0,0,.9);box-shadow:inset 2px 0 0 #7f9fb8,inset 0 -2px 0 #7f9fb8;clip-path:polygon(0 0,100% 0,100% 100%,10px 100%,0 calc(100% - 10px));filter:drop-shadow(0 2px 4px rgba(0,0,0,.7));font-family:"Orbitron","Segoe UI",sans-serif;font-size:12px;line-height:16px;letter-spacing:.05em;color:#e3e9ef;white-space:nowrap}#centre .photo_unite .fz-army-badge b{font-weight:700;color:#e3e9ef}#centre .photo_unite .fz-army-badge i{font-style:normal;font-weight:700;margin-left:3px}#centre .photo_unite .fz-army-badge em{font-style:normal;color:#9ccfa8;font-size:11px;margin-left:3px}#centre tr.fz-u-ouv .photo_unite .fz-army-badge i{color:#d8b26e}#centre tr.fz-u-mil .photo_unite .fz-army-badge i{color:#d98a8a}#centre .ppApres.fz-pp-hidden{display:none!important}#centre>h4 + table.tableau_leger{clip-path:none!important}#centre>h4 + table.tableau_leger tr:first-child>:is(td,th){color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;font-weight:700!important;letter-spacing:.08em;text-transform:uppercase;background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important;padding:4px 8px!important;white-space:nowrap}#centre .boiteMessagerie:has(#message_collectif){background:linear-gradient(135deg,rgba(14,30,52,.88),rgba(8,14,28,.94))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:0!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent),inset 0 0 calc(22px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 6%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));color:var(--fz-text)!important;padding:10px 16px 14px!important;box-sizing:border-box}#centre .boiteMessagerie:has(#message_collectif)>.titre{display:flex!important;align-items:center;justify-content:center;gap:12px;margin:6px -16px 12px!important;padding:8px 16px!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:17px!important;font-style:normal!important;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#eafaff!important;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 22%,transparent) 30%,color-mix(in srgb,var(--fz-accent) 22%,transparent) 70%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;text-shadow:0 0 calc(10px*var(--fz-glow)) var(--fz-accent),0 0 2px var(--fz-accent)!important}#centre .boiteMessagerie:has(#message_collectif)>.titre::before,#centre .boiteMessagerie:has(#message_collectif)>.titre::after{content:"";flex:0 0 50px;height:1px;background:linear-gradient(90deg,transparent,var(--fz-accent))}#centre .boiteMessagerie:has(#message_collectif)>.titre::after{background:linear-gradient(90deg,var(--fz-accent),transparent)}#centre .boiteMessagerie [id^="listeSmiley"]{line-height:24px}#centre form:has(#message_collectif) .tousLesSmiley.fz-smiley-box{margin:0 0 8px!important;padding:6px 8px;background:color-mix(in srgb,var(--fz-accent) 6%,transparent);border:1px solid color-mix(in srgb,var(--fz-accent) 30%,transparent)}#centre .boiteMessagerie [id^="listeSmiley"] img{vertical-align:middle!important;margin:0 1px!important}#centre .boiteMessagerie [id^="listeSmiley"] img[src*="rien.gif"]{width:8px!important;height:1px!important}#centre form:has(#message_collectif){color:var(--fz-text)!important}#centre form:has(#message_collectif) #objet{width:calc(100% - 290px)!important;min-width:240px;margin:0 8px 8px 4px;vertical-align:middle}#centre form:has(#message_collectif) span.sur_une_ligne,#centre form:has(#message_collectif) span.sur_une_ligne>span{display:inline-flex!important;align-items:center;gap:4px;vertical-align:middle}#centre form:has(#message_collectif) span.sur_une_ligne img{vertical-align:middle!important;position:static!important;top:0!important;margin:0 2px!important}#centre #message_collectif{margin-top:8px!important;width:100%!important;box-sizing:border-box;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important}#centre .fz-build-wrap.fz-msgc-wrap{min-width:160px;margin:10px 12px 0 0!important}#centre form:has(#message_collectif) #choix_separer{vertical-align:middle}#centre form:has(#message_collectif) input[type=checkbox]{accent-color:var(--fz-accent);vertical-align:middle}#centre #alliance>.titre,#centre h2.fz-band-title{display:flex!important;align-items:center;justify-content:center;gap:12px;padding:8px 16px!important;text-align:center!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:17px!important;font-style:normal!important;font-weight:700!important;letter-spacing:.16em!important;text-transform:uppercase;color:#eafaff!important;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 22%,transparent) 30%,color-mix(in srgb,var(--fz-accent) 22%,transparent) 70%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;text-shadow:0 0 calc(10px*var(--fz-glow)) var(--fz-accent),0 0 2px var(--fz-accent)!important;margin:0 0 10px!important}#centre #alliance>.titre::before,#centre #alliance>.titre::after,#centre h2.fz-band-title::before,#centre h2.fz-band-title::after{content:"";flex:0 0 50px;height:1px;background:linear-gradient(90deg,transparent,var(--fz-accent))}#centre #alliance>.titre::after,#centre h2.fz-band-title::after{background:linear-gradient(90deg,var(--fz-accent),transparent)}html body #centre :is(#nouveauxMessages,#anciensMessages)>p.fz-chat-me>a[href*="classementAlliance"],html body #centre :is(#nouveauxMessages,#anciensMessages)>p.fz-chat-me>strong,html body #centre :is(#nouveauxMessages,#anciensMessages)>p.fz-chat-me>strong a{color:#4ade80!important;font-weight:700}html body #centre :is(#nouveauxMessages,#anciensMessages)>p.fz-chat-ally>a[href*="classementAlliance"]{color:#4ade80!important;font-weight:700}html body #centre :is(#nouveauxMessages,#anciensMessages)>p.fz-chat-other>a[href*="classementAlliance"]{color:#e3a15f!important;font-weight:700}#menuBoite :is(#boiteInfo,#boiteComptePlus)>.titre_colonne_cliquable{background:linear-gradient(90deg,color-mix(in srgb,var(--fz-accent) 6%,#07111e) 0%,color-mix(in srgb,var(--fz-accent) 30%,#07111e) 50%,color-mix(in srgb,var(--fz-accent) 6%,#07111e) 100%)!important;border:1px solid color-mix(in srgb,var(--fz-accent) 65%,transparent)!important;border-bottom:2px solid var(--fz-accent)!important;border-radius:0!important;clip-path:polygon(10px 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%,0 10px);box-shadow:inset 0 0 calc(12px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 30%,transparent),0 0 calc(10px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 25%,transparent)!important}#menuBoite :is(#boiteInfo,#boiteComptePlus)>.titre_colonne_cliquable::before,#menuBoite :is(#boiteInfo,#boiteComptePlus)>.titre_colonne_cliquable::after{content:"";position:absolute;top:50%;width:5px;height:5px;margin-top:-2px;background:var(--fz-accent);box-shadow:0 0 calc(6px*var(--fz-glow)) var(--fz-accent);transform:rotate(45deg);pointer-events:none}#menuBoite :is(#boiteInfo,#boiteComptePlus)>.titre_colonne_cliquable::before{left:8px}#menuBoite :is(#boiteInfo,#boiteComptePlus)>.titre_colonne_cliquable::after{right:8px}#menuBoite :is(#boiteInfo,#boiteComptePlus)>.titre_colonne_cliquable :is(span,a){font-family:"Orbitron","Segoe UI",sans-serif!important;font-weight:700!important;letter-spacing:.14em!important;text-transform:uppercase;color:#eafaff!important;text-shadow:0 0 calc(8px*var(--fz-glow)) var(--fz-accent),0 0 2px var(--fz-accent)!important}#menuBoite :is(.contenu_boite_info,.contenu_boite_compte_plus){background:linear-gradient(180deg,rgba(10,24,42,.92),rgba(6,12,24,.95))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent)!important;border-top:0!important;border-radius:0!important;clip-path:polygon(0 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px));box-shadow:inset 0 0 calc(20px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 10%,transparent),inset 0 1px 0 color-mix(in srgb,var(--fz-accent) 25%,transparent)!important}#menuBoite :is(.contenu_boite_info,.contenu_boite_compte_plus)::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(255,255,255,.02) 0 1px,transparent 1px 3px)}#menuBoite :is(.contenu_boite_info,.contenu_boite_compte_plus)::after{content:"";position:absolute;left:14px;right:14px;bottom:0;height:2px;pointer-events:none;background:linear-gradient(90deg,transparent,var(--fz-accent),transparent);box-shadow:0 0 calc(6px*var(--fz-glow)) var(--fz-accent)}#menuBoite :is(#boiteInfo,#boiteComptePlus){background:transparent!important;border:0!important;box-shadow:none!important}#menuBoite .contenu_boite_info{padding-top:7px!important;height:auto!important;padding-bottom:10px!important}#menuBoite #cixyHorloge{margin:0 0 6px!important}#centre table.simulateur.fz-convoi-info{margin-top:14px!important}#centre table.simulateur.fz-convoi-info>tbody>tr>th,#centre table.simulateur.fz-convoi-info>tbody>tr>td{padding:6px 14px!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 12%,transparent)}#centre table.simulateur.fz-convoi-info>tbody>tr>th{text-align:left!important;font-weight:400;color:color-mix(in srgb,var(--fz-text) 85%,transparent)!important}#centre table.simulateur.fz-convoi-info th small{opacity:.6;font-size:11px}#centre table.simulateur.fz-convoi-info a.fz-ci-fill{color:inherit!important;text-decoration:none!important;cursor:pointer;border-bottom:1px dashed currentColor;padding:0 2px;transition:background .15s}#centre table.simulateur.fz-convoi-info a.fz-ci-fill:hover{background:color-mix(in srgb,currentColor 15%,transparent)}#centre table.simulateur.fz-convoi-info a.fz-ci-fill.fz-ci-done{background:rgba(74,222,128,.3)}#centre table.simulateur.fz-convoi-info th img{width:18px!important;height:18px!important;vertical-align:-4px;margin-right:6px}#centre table.simulateur.fz-convoi-info>tbody>tr>td{text-align:right!important;font-family:"Orbitron","Segoe UI",sans-serif;font-weight:700;font-size:15px;color:#fff!important;font-variant-numeric:tabular-nums}#centre table.simulateur.fz-convoi-info>tbody>tr:nth-child(2)>td{color:var(--fz-accent)!important}#centre table.simulateur.fz-convoi-info>tbody>tr:nth-child(3)>td{color:#4ade80!important}#centre table.simulateur.fz-convoi-info>tbody>tr:nth-child(4)>td{color:#ffb020!important}#centre table.simulateur.fz-convoi-info tr.fz-ci-note td{font-family:inherit;font-size:11px;font-weight:400;text-align:center!important;color:color-mix(in srgb,var(--fz-text) 55%,transparent)!important;border-bottom:0}#centre table.simulateur.fz-convoi-info>tbody>tr:first-child>td{border-bottom:0}#centre table.simulateur.fz-convoi-info tr:hover>:is(td,th){background:transparent!important}#centre table.simulateur.fz-convoi-info>tbody>tr.fz-ci-simhead>td{text-align:left!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--fz-accent)!important;background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;border-top:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent);display:table-cell}#centre table.simulateur.fz-convoi-info tr.fz-ci-simhead td{position:relative}#centre table.simulateur.fz-convoi-info .fz-ci-ctl{float:right;display:inline-flex;align-items:center;gap:4px}#centre table.simulateur.fz-convoi-info .fz-ci-ctl button{width:22px;height:22px;padding:0;border:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent);background:color-mix(in srgb,var(--fz-accent) 12%,transparent)!important;color:var(--fz-accent)!important;font-weight:900;font-size:14px;line-height:1;cursor:pointer;border-radius:2px;box-shadow:none!important;text-transform:none}#centre table.simulateur.fz-convoi-info .fz-ci-ctl button:hover{background:color-mix(in srgb,var(--fz-accent) 26%,transparent)!important;color:#fff!important}#centre table.simulateur.fz-convoi-info .fz-ci-lvl{width:52px!important;height:22px;box-sizing:border-box;text-align:center!important;font-family:"Orbitron","Segoe UI",sans-serif;font-weight:700;font-size:12px;-moz-appearance:textfield}#centre table.simulateur.fz-convoi-info .fz-ci-lvl::-webkit-inner-spin-button{display:none}#centre table.simulateur.fz-convoi-info tr.fz-ci-sim>td{padding:4px 8px 8px!important;font-family:inherit;font-size:13px;font-weight:400;border-bottom:0}#centre table.fz-ci-simt{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}#centre table.fz-ci-simt th{font-family:"Orbitron","Segoe UI",sans-serif;font-size:10px!important;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:color-mix(in srgb,var(--fz-text) 65%,transparent)!important;text-align:right!important;padding:4px 8px!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 25%,transparent)!important}#centre table.fz-ci-simt td{padding:4px 8px!important;text-align:right!important;font-family:"Exo 2","Segoe UI",sans-serif!important;font-size:13px!important;font-weight:700;color:#eafaff!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 10%,transparent)!important}#centre table.fz-ci-simt td:first-child{text-align:left!important;font-weight:400;color:color-mix(in srgb,var(--fz-text) 80%,transparent)!important}#centre table.fz-ci-simt td:nth-child(3){color:var(--fz-accent)!important}#centre table.fz-ci-simt em{font-style:normal;color:color-mix(in srgb,var(--fz-text) 60%,transparent)}#centre table.fz-ci-simt em.up{color:#4ade80}#centre table.fz-ci-simt em.down{color:#ff5a5a}html body #centre tr.ligneAmelioration>td{background:transparent!important}html body #centre table:has(>tbody>tr.ligneAmelioration){border-collapse:separate!important;border-spacing:0 8px!important}html body #centre tr.ligneAmelioration{clip-path:none!important;border:0!important}html body #centre tr.ligneAmelioration>td{border:0 solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-top-width:1px!important;border-bottom-width:1px!important}html body #centre tr.ligneAmelioration>td:first-child{border-left-width:1px!important}html body #centre tr.ligneAmelioration>td:last-child,html body #centre tr.ligneAmelioration>td.cout_amelioration{border-right-width:1px!important}html body #centre tr.ligneAmelioration>td.fz-hidden-td{border:0!important}html body #centre tr.ligneAmelioration.fz-u-ouv:hover>td{border-color:#ffb020!important}html body #centre tr.ligneAmelioration.fz-u-mil:hover>td{border-color:#ff4d5e!important}html body #centre tr.ligneAmelioration:has(.photo_batiment){transition:box-shadow .2s!important}html body #centre tr.ligneAmelioration:has(.photo_batiment):hover{box-shadow:0 0 0 1px rgba(74,222,128,.85),0 0 calc(18px*var(--fz-glow)) rgba(74,222,128,.55),0 0 calc(40px*var(--fz-glow)) rgba(74,222,128,.25),inset 0 0 calc(24px*var(--fz-glow)) rgba(74,222,128,.14)!important}html body #centre tr.ligneAmelioration:has(.photo_batiment):hover>td{border-color:#4ade80!important}html body #centre tr.ligneAmelioration:has(.photo_recherche){transition:box-shadow .2s!important}html body #centre tr.ligneAmelioration:has(.photo_recherche):hover{box-shadow:0 0 0 1px rgba(180,110,255,.85),0 0 calc(18px*var(--fz-glow)) rgba(180,110,255,.55),0 0 calc(40px*var(--fz-glow)) rgba(180,110,255,.25),inset 0 0 calc(24px*var(--fz-glow)) rgba(180,110,255,.14)!important}html body #centre tr.ligneAmelioration:has(.photo_recherche):hover>td{border-color:#b46eff!important}html body #centre tr.ligneAmelioration:is(.fz-u-ouv,.fz-u-mil){transition:box-shadow .2s,border-color .2s!important}html body #centre tr.ligneAmelioration.fz-u-ouv:hover{border-color:#ffb020!important;box-shadow:0 0 0 1px rgba(255,176,32,.85),0 0 calc(18px*var(--fz-glow)) rgba(255,176,32,.55),0 0 calc(40px*var(--fz-glow)) rgba(255,176,32,.25),inset 0 0 calc(24px*var(--fz-glow)) rgba(255,176,32,.14)!important}html body #centre tr.ligneAmelioration.fz-u-mil:hover{border-color:#ff4d5e!important;box-shadow:0 0 0 1px rgba(255,77,94,.85),0 0 calc(18px*var(--fz-glow)) rgba(255,77,94,.55),0 0 calc(40px*var(--fz-glow)) rgba(255,77,94,.25),inset 0 0 calc(24px*var(--fz-glow)) rgba(255,77,94,.14)!important}html body #centre tr.ligneAmelioration:has(.photo_batiment) h2{color:#4ade80!important;text-shadow:0 0 calc(8px*var(--fz-glow)) rgba(74,222,128,.7)!important}html body #centre tr.ligneAmelioration:has(.photo_recherche) h2{color:#b57cff!important;text-shadow:0 0 calc(8px*var(--fz-glow)) rgba(181,124,255,.7)!important}html body #centre .fz-effet b.fz-val{color:#4ade80!important;font-weight:700!important;text-shadow:0 0 calc(6px*var(--fz-glow)) rgba(74,222,128,.55);white-space:nowrap}#centre td.cout_amelioration>div.fz-dup-wait{display:none!important}#centre td.cout_amelioration tr.fz-hidden-row{display:none!important}#centre td.fz-wait-cell span[data-fmz-hour]{display:none!important}#centre td.fz-wait-cell{font-weight:700;white-space:nowrap}#centre td.fz-wait-cell .fz-when{margin-left:6px;font-weight:400;color:color-mix(in srgb,var(--fz-text) 70%,transparent)}html body #centre .ligneAmelioration td.cout_amelioration :is(div,span)[style*="c5130f" i],html body #centre .ligneAmelioration td.cout_amelioration :is(div,span)[style*="197, 19, 15"],html body #centre .ligneAmelioration td.cout_amelioration :is(div,span)[style*="color: red" i],html body #centre .ligneAmelioration td.cout_amelioration :is(div,span)[style*="color:red" i]{color:var(--fz-danger)!important;text-shadow:0 0 calc(4px*var(--fz-glow)) color-mix(in srgb,var(--fz-danger) 40%,transparent)}html body #centre tr.ligneAmelioration>td.cout_amelioration:has(>.fz-build-wrap){vertical-align:top!important;padding-top:19px!important}html body #centre .ligneAmelioration h2 ~ button{display:inline-flex!important;align-items:center;justify-content:center;box-sizing:border-box!important;height:26px!important;min-width:36px!important;padding:0 8px!important;font-size:17px!important;line-height:1!important;vertical-align:baseline!important;position:relative!important;top:-3px!important;margin:0 0 0 2px!important}#centre :is(.photo_batiment,.photo_recherche){position:relative!important}#centre .fz-lvls.fz-lvls-photo{position:absolute!important;top:0;right:0;margin:0!important;z-index:2;filter:drop-shadow(0 2px 4px rgba(0,0,0,.7))}#centre .fz-lvls.fz-lvls-photo .fz-lvl{display:block;padding:4px 10px 5px 16px!important;border:0!important;border-radius:0!important;background:linear-gradient(180deg,rgba(6,14,28,.94),rgba(4,10,20,.9))!important;box-shadow:inset 2px 0 0 var(--fz-accent),inset 0 -2px 0 var(--fz-accent)!important;clip-path:polygon(0 0,100% 0,100% 100%,10px 100%,0 calc(100% - 10px));color:#fff!important;font-size:13px!important;line-height:16px!important;letter-spacing:.08em;text-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 70%,transparent);backdrop-filter:none!important}#centre .fz-lvls.fz-lvls-photo .fz-lvl-up{color:#4ade80!important;text-shadow:0 0 calc(6px*var(--fz-glow)) rgba(74,222,128,.7)!important;box-shadow:inset 2px 0 0 #4ade80,inset 0 -2px 0 #4ade80!important}#centre .fz-lvl-up{border-color:#4ade80;color:#4ade80;box-shadow:0 0 calc(6px*var(--fz-glow)) rgba(74,222,128,.45)}html body #centre div.cliquable3[data-fz-dest]{transition:background .15s,box-shadow .15s}html body #centre div.cliquable3[data-fz-dest="tdc"]{--fz-dest:#ff4d5e}html body #centre div.cliquable3[data-fz-dest="dome"]{--fz-dest:#ffb020}html body #centre div.cliquable3[data-fz-dest="loge"]{--fz-dest:#4ade80}html body #centre div.cliquable3[data-fz-dest]:is([data-fz-dest="tdc"],[data-fz-dest="dome"],[data-fz-dest="loge"]){background:color-mix(in srgb,var(--fz-dest) 12%,transparent)!important;border-color:color-mix(in srgb,var(--fz-dest) 70%,transparent)!important;box-shadow:0 0 calc(6px*var(--fz-glow)) color-mix(in srgb,var(--fz-dest) 40%,transparent)!important}html body #centre div.cliquable3[data-fz-dest]:is([data-fz-dest="tdc"],[data-fz-dest="dome"],[data-fz-dest="loge"]) span{color:var(--fz-dest)!important;font-weight:700}html body #centre div.cliquable3[data-fz-dest]:is([data-fz-dest="tdc"],[data-fz-dest="dome"],[data-fz-dest="loge"]):hover{background:color-mix(in srgb,var(--fz-dest) 24%,transparent)!important}.fz-fourmi{background:#03050c;box-shadow:0 0 calc(24px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 22%,transparent);outline:1px solid color-mix(in srgb,var(--fz-accent) 40%,transparent);text-align:left;margin:4px auto}.fz-fourmi>#fourmiliere,.fz-fourmi>img[usemap="#vueFourmiliere"],.fz-fourmi>table.boite_amelioration{display:none!important}.fz-fourmi>.fz-fourmi-etage{position:absolute;left:0;top:0;width:1200px;height:896px}.fz-fourmi-etage>*{position:absolute;left:0;top:0;width:1200px;height:896px}.fz-fourmi-decor{background:#03050c 0 0/1200px 896px no-repeat;pointer-events:none}.fz-fourmi-anim{pointer-events:none;filter:drop-shadow(0 0 calc(5px*var(--fz-glow)) rgba(140,220,255,.6))}.fz-fourmi-zones polygon{fill:transparent;stroke:transparent;stroke-width:1.6;stroke-linejoin:round;cursor:pointer;transition:fill .2s,stroke .2s}.fz-fourmi-zones polygon.fz-on{fill:color-mix(in srgb,var(--fz-zone) 14%,transparent);stroke:var(--fz-zone);stroke-dasharray:6 4;animation:fz-fourmi-scan 1.2s linear infinite;filter:drop-shadow(0 0 calc(8px*var(--fz-glow)) var(--fz-zone))}@keyframes fz-fourmi-scan{to{stroke-dashoffset:-20}}.fz-fourmi-panneau{position:absolute;z-index:10;display:none;pointer-events:none;box-sizing:border-box;padding:8px 10px 10px;background:linear-gradient(135deg,rgba(14,30,52,.94),rgba(8,14,28,.96));border:1px solid color-mix(in srgb,var(--fz-zone,var(--fz-accent)) 60%,transparent);box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-zone,var(--fz-accent)) 30%,transparent);clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));color:var(--fz-text);font-size:12px;line-height:1.35}.fz-fourmi-panneau.fz-on{display:block}.fz-fp-titre{font:700 13px "Orbitron","Segoe UI",sans-serif;letter-spacing:.14em;text-transform:uppercase;text-align:center;color:#f2f8ff;text-shadow:0 0 calc(8px*var(--fz-glow)) var(--fz-zone);padding:2px 0 6px;margin-bottom:6px;border-bottom:1px solid color-mix(in srgb,var(--fz-zone) 55%,transparent)}.fz-fp-item{display:flex;gap:8px;align-items:center;padding:4px 0}.fz-fp-item + .fz-fp-item{border-top:1px solid rgba(140,180,220,.15)}.fz-fp-item>img,.fz-fp-item>i{flex:0 0 64px;width:64px;height:42px;object-fit:cover;border:1px solid color-mix(in srgb,var(--fz-zone) 45%,transparent);background:rgba(255,255,255,.04)}.fz-fp-item b{color:#f2f8ff}.fz-fp-niv{color:var(--fz-zone);font-weight:700;margin-left:2px}.fz-fp-item small{display:block;color:#8fe3a8;font-size:11px;margin-top:2px}.fz-fp-note{margin:4px 0;color:#9fb0c3;font-style:italic}.fz-fp-mouv + .fz-fp-mouv{margin-top:6px}.fz-fp-mt{display:flex;justify-content:space-between;gap:8px;border-left:3px solid var(--fz-zone);padding-left:6px}.fz-fp-mt b{color:var(--fz-zone)}.fz-fp-mouv table,.fz-fp-armee{width:100%;border-collapse:collapse;margin-top:3px;font-size:11px}.fz-fp-mouv td{padding:1px 4px;color:#c9d6e4}.fz-fp-mouv td:last-child{text-align:right}.fz-fp-armee th{font-weight:600;color:#9fb0c3;text-align:right;padding:1px 4px;border-bottom:1px solid rgba(140,180,220,.25)}.fz-fp-armee th:first-child,.fz-fp-armee td:first-child{text-align:left}.fz-fp-armee td{text-align:right;padding:1px 4px}.fz-fp-armee tr.fz-fp-tot td{border-top:1px solid rgba(140,180,220,.25);font-weight:700;color:#f2f8ff}.fz-fp-ligne{display:flex;justify-content:space-between;padding:2px 0;border-top:1px solid rgba(140,180,220,.12);margin-top:2px}.fz-fp-ligne b{color:#f2f8ff}.fz-fourmi-panneau.fz-pin{pointer-events:auto;overflow:auto;z-index:11}.fz-fourmi-panneau.fz-flash{animation:fz-fourmi-flash .6s ease-out}@keyframes fz-fourmi-flash{from{box-shadow:0 0 calc(40px*var(--fz-glow)) var(--fz-zone)}}.fz-fp-titre{position:relative;padding-left:22px;padding-right:22px}.fz-fp-x,.fz-fp-page{position:absolute;top:-2px;width:20px;height:20px;line-height:18px;padding:0;border:1px solid color-mix(in srgb,var(--fz-zone) 55%,transparent);background:rgba(6,12,24,.8);color:#f2f8ff!important;font:700 15px/18px "Segoe UI",sans-serif;text-align:center;text-decoration:none!important;cursor:pointer}.fz-fp-x{right:0;color:#ff7a85!important}.fz-fp-page{left:0}.fz-fp-x:hover,.fz-fp-page:hover{background:color-mix(in srgb,var(--fz-zone) 30%,#06101c)}.fz-fourmi-dock{display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;gap:8px;margin:8px auto 0;max-width:100%;text-align:left}.fz-fourmi-dock:empty{display:none}.fz-fourmi-dock>.fz-fourmi-panneau{position:relative;width:340px;max-width:100%}.fz-fp-sous{margin:8px 0 3px;font:600 10px "Orbitron","Segoe UI",sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--fz-zone)}.fz-fp-total{border-top:1px solid color-mix(in srgb,var(--fz-zone) 50%,transparent)!important;font-weight:700}.fz-fp-suiv span,.fz-fp-suiv b{color:#9fb0c3!important;font-weight:400}.fz-fp-entrepot{display:flex;align-items:center;gap:10px;margin-top:4px}.fz-fp-entrepot>div{flex:1}.fz-fp-anneau{flex:0 0 64px}.fz-fourmi-panneau .fz-pos{color:#4ade80}.fz-fourmi-panneau .fz-neg{color:#ff5a6a}.fz-fp-armee tr:not(.fz-fp-tot) td{color:inherit}.fz-fourmi-zones polygon.fz-alerte{--fz-zone:#ff4d5e;stroke:#ff4d5e;fill:rgba(255,77,94,.10);animation:fz-fourmi-alerte 1.4s ease-in-out infinite}.fz-fourmi-zones polygon.fz-alerte.fz-on{animation:fz-fourmi-scan 1.2s linear infinite,fz-fourmi-alerte 1.4s ease-in-out infinite}@keyframes fz-fourmi-alerte{50%{fill:rgba(255,77,94,.24);filter:drop-shadow(0 0 calc(10px*var(--fz-glow)) #ff4d5e)}}.fz-fp-alerte,.fz-fp-alerte b{color:#ff5a6a!important}.fz-fp-note.fz-fp-alerte{font-style:normal;font-size:11px}.fz-fourmi-etage>.fz-fourmi-planete{pointer-events:none;opacity:.8}.fz-fp-ico{flex:0 0 auto;vertical-align:-3px;margin-right:5px}.fz-fp-ligne>span{display:flex;align-items:center}.fz-fourmi-panneau.fz-pin .fz-fp-titre{cursor:move;touch-action:none;user-select:none;-webkit-user-select:none}.fz-fourmi-panneau.fz-libre{position:absolute;z-index:1000;margin:0}`;
const MSG_ICONS = [
['outil', 'A', 18, '<path d="M14.5 3.5a4 4 0 0 0-3.9 5.1L3.8 15.4a1.9 1.9 0 0 0 2.7 2.7l6.8-6.8a4 4 0 0 0 5.1-3.9l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4z"/>'],
['new_message', 'A', 18, '<path d="M4 5h11v8H8.5L5 16.5V13H4z"/><path d="M19 10v8M15 14h8"/>'],
['bulle', 'A', 18, '<path d="M4 5h16v10.5H9.5L5 19.5v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>'],
['etoile', '#ffd84d', 18, '<path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8-4.3-4.1 5.9-.8z"/>'],
['archive', 'A', 18, '<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v10h14V9M10 13h4"/>'],
['folder', 'A', 18, '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'],
['more_options', 'A', 10, '<path d="M6 9l6 6 6-6"/>'],
['delete', 'D', 18, '<path d="M4 7h16M9 7V4.5h6V7M6 7l1 13h10l1-13M10 11v6M14 11v6"/>'],
['subject', 'A', 18, '<path d="M5 6h14M5 10h14M5 14h9M5 18h6"/>'],
['loupe', 'A', 18, '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>'],
];
const msgIconCss = (c) => MSG_ICONS.map(([name, k, size, body]) => {
const col = k === 'A' ? c.accent : k === 'D' ? (c.danger || '#ff5470') : k;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${col}" stroke-width="${size < 12 ? 3 : 1.8}" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
return `#messagerie img[src*="/${name}."],#messagerie img[src^="${name}."]{content:url("data:image/svg+xml,${encodeURIComponent(svg)}")!important;width:${size}px!important;height:${size}px!important;vertical-align:middle!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${col})!important;}`;
}).join('') + '#messagerie .option_gestion:hover img,#messagerie .bouton_messagerie:hover img{transform:scale(1.12);}#messagerie .option_gestion img,#messagerie .bouton_messagerie img{transition:transform .15s;}';
function rgbToHsl(r, g, b) {
const R = r / 255, G = g / 255, B = b / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), d = mx - mn;
let h = 0, l = (mx + mn) / 2, sat = d ? d / (1 - Math.abs(2 * l - 1)) : 0;
if (d) { h = mx === R ? ((G - B) / d) % 6 : mx === G ? (B - R) / d + 2 : (R - G) / d + 4; h *= 60; if (h < 0) h += 360; }
return [h, sat, l];
}
function styleForum() {
document.querySelectorAll('#centre span.categorie_forum, #centre span[class*="forum"].ligne_paire').forEach(sp => {
if (sp.dataset.fzF) return;
sp.dataset.fzF = '1';
sp.classList.remove('fz-forumtag');
const m = getComputedStyle(sp).color.match(/[\d.]+/g);
sp.classList.add('fz-forumtag');
if (!m) return;
const [r, g, b] = m.map(Number);
const [h, sat, l] = rgbToHsl(r, g, b);
const col = (sat < .12 && l < .2) ? 'var(--fz-accent)' : sat < .12 ? '#cfe3f5' : `hsl(${Math.round(h)},${Math.round(Math.max(sat, .55) * 100)}%,${Math.round(Math.max(l, .72) * 100)}%)`;
sp.style.setProperty('--ftag', col);
});
document.querySelectorAll('#alliance a:not(.fz-quit)').forEach(a => { if (/^\s*Quitter l.alliance\s*$/i.test(a.textContent)) a.classList.add('fz-quit'); });
document.querySelectorAll('#centre img[src*="nouveau_sujet_gauche"], #centre img[src*="repondre_sujet_gauche"]').forEach(img => {
const wrap = img.parentElement;
if (wrap) wrap.classList.add('fz-newtopic');
});
}
const forumCss = (c) => {
const ic = (col, body, size = 18) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${col}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`)}")`;
return `
#centre div.simulateur{background:linear-gradient(135deg,rgba(14,30,52,.88),rgba(8,14,28,.94))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));color:var(--fz-text)!important;}
#centre div.simulateur tr,#centre div.simulateur .ligne_paire:not(.fz-forumtag):not(tr){background:transparent!important;}#centre div.simulateur table.tab_triable tr > td{background:transparent!important;transition:background .12s;}#centre div.simulateur table.tab_triable tr.ligne_paire > td{background:color-mix(in srgb,var(--fz-accent) 8%,transparent)!important;}#centre div.simulateur table.tab_triable tr:hover > td,#centre div.simulateur table.tab_triable tr:has(> td[rowspan]):hover + tr > td,#centre div.simulateur table.tab_triable tr:has(> td[rowspan]):has(+ tr:hover) > td{background:color-mix(in srgb,var(--fz-accent) 18%,transparent)!important;}
#centre .fz-forumtag{display:inline-block;margin:2px 2px!important;padding:2px 8px!important;border:1px solid var(--ftag)!important;border-radius:2px!important;background:transparent!important;color:var(--ftag)!important;font-family:"Exo 2","Segoe UI",sans-serif!important;font-size:12px!important;font-weight:600;line-height:16px;box-shadow:0 0 calc(5px*var(--fz-glow)) color-mix(in srgb,var(--ftag) 35%,transparent);}
#centre .fz-forumtag *{color:var(--ftag)!important;}
#centre .fz-forumtag.ligne_paire{background:color-mix(in srgb,var(--ftag) 22%,transparent)!important;box-shadow:0 0 calc(10px*var(--fz-glow)) color-mix(in srgb,var(--ftag) 55%,transparent),inset 0 0 6px color-mix(in srgb,var(--ftag) 30%,transparent);}
#centre .fz-forumtag:hover{background:color-mix(in srgb,var(--ftag) 14%,transparent)!important;}
#centre div.simulateur table.tab_triable tr:first-child > td,#centre div.simulateur table.tab_triable tr:first-child > th{background:color-mix(in srgb,var(--fz-accent) 14%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 55%,transparent)!important;}
#centre div.simulateur table.tab_triable tr > td{padding-top:4px!important;padding-bottom:4px!important;}
#centre .fz-newtopic > img,#centre .fz-newtopic img[src*="nouveau_sujet_droite"],#centre .fz-newtopic img[src*="nouveau_sujet_gauche"],#centre .fz-newtopic img[src*="repondre_sujet_gauche"]{display:none!important;}#forum hr{border:0!important;height:1px!important;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--fz-accent) 45%,transparent),transparent)!important;margin:8px 0!important;}#forum .auteurForum a[href*="classementAlliance"]{color:#9fb3cc!important;}#forum .messageForum{color:var(--fz-text)!important;}
#centre .fz-newtopic{display:block!important;width:auto!important;height:auto!important;margin:6px 0 10px!important;}#centre .fz-newtopic > div{position:static!important;left:auto!important;top:auto!important;width:auto!important;height:auto!important;line-height:16px!important;display:inline-flex!important;align-items:center;gap:6px;background:color-mix(in srgb,var(--fz-accent) 10%,transparent)!important;border:1px solid var(--fz-accent)!important;border-radius:2px;padding:3px 10px!important;color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:11px!important;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;}
#centre .fz-newtopic > div{padding:4px 12px!important;justify-content:center!important;}#centre .fz-newtopic > div > span{position:static!important;top:0!important;margin:0!important;line-height:16px!important;}html body #centre div.simulateur table.tab_triable tr td a.topic_forum{color:#8fb8ff!important;}html body #centre div.simulateur table.tab_triable tr td a.topic_forum:hover{color:#c4d9ff!important;}#centre .fz-newtopic > div:hover{background:color-mix(in srgb,var(--fz-accent) 25%,transparent)!important;color:#fff!important;}
#centre .fz-newtopic > div *{color:inherit!important;}
#centre div.simulateur img[src*="etoile."]{content:${ic('#ffd84d', '<path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8-4.3-4.1 5.9-.8z" fill="#ffd84d" fill-opacity=".25"/>')}!important;width:18px!important;height:18px!important;filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) #ffd84d);vertical-align:middle;}
#centre div.simulateur img[src*="bulle."]{content:${ic(c.accent, '<path d="M4 5h16v10.5H9.5L5 19.5v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>')}!important;width:18px!important;height:18px!important;}
#centre div.simulateur img[src*="supprimer."]{content:${ic(c.danger || '#ff5470', '<path d="M7 7l10 10M17 7L7 17"/>', 14)}!important;width:14px!important;height:14px!important;vertical-align:middle;}
#centre div.simulateur img[src*="nouveau_sujet_milieu"],#centre .fz-newtopic img:not([src*="nouveau_sujet"]){content:${ic(c.accent, '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M12 11v6M9 14h6"/>', 14)}!important;width:14px!important;height:14px!important;}`;
};
function fixMembers() {
const t = document.getElementById('tabMembresAlliance');
if (!t) return;
t.querySelectorAll('td.fmz-mem-role').forEach(td => {
const c = td.style.color;
if (c && td.style.getPropertyPriority('color') !== 'important') td.style.setProperty('color', c, 'important');
});
t.querySelectorAll('tr').forEach(tr => {
const td = tr.cells[10];
if (!td || !/\d\s*(h|min|j)\b/.test(td.textContent)) return;
const n = td.textContent.replace(/[^\d\sjhmins–-]/g, '').replace(/(\d+)\s*(j|h|min|s)\b/g, (m, v, u) => v + (u === 'min' ? 'm' : u)).replace(/\s+/g, '').trim();
if (td.textContent !== n) { td.textContent = n; td.classList.add('fz-traj'); }
});
[...t.rows].forEach(r => {
if (r.cells.length < 15) return;
const tdc = r.cells[8];
const atk = tdc.querySelector('a.fz-atk') || r.cells[9].querySelector(':scope > a');
if (atk) { atk.classList.add('fz-atk'); if (tdc.lastChild !== atk) tdc.appendChild(atk); }
r.cells[9].classList.add('fz-atk-src');
const def = r.cells[5].querySelector(':scope > img');
if (def && !tdc.querySelector('.fz-def')) { def.classList.add('fz-def'); tdc.insertBefore(def, tdc.firstChild); }
r.cells[5].classList.add('fz-def-src');
if (!tdc.querySelector('.fz-tdcv')) {
const tn = [...tdc.childNodes].find(n => n.nodeType === 3 && /\d/.test(n.textContent));
if (tn) { const sp = document.createElement('span'); sp.className = 'fz-tdcv'; sp.textContent = tn.textContent.trim(); tdc.replaceChild(sp, tn); }
}
});
t.querySelectorAll('tr').forEach(tr => {
const td = tr.cells[10];
if (!td || !/\d/.test(td.textContent)) return;
let min = 0;
td.textContent.replace(/(\d+)(j|h|m|s)/g, (x, v, u) => { min += +v * (u === 'j' ? 1440 : u === 'h' ? 60 : u === 'm' ? 1 : 1 / 60); });
const k = Math.max(0, Math.min(1, (min - 60) / 540));
td.style.setProperty('color', `hsl(${Math.round(120 * (1 - k))},85%,58%)`, 'important');
td.style.fontWeight = '600';
});
}
const MEMBERS_CSS = `#centre #tabMembresAlliance tr:nth-child(even)>td{background:color-mix(in srgb,var(--fz-accent) 6%,transparent)!important}#centre #tabMembresAlliance tr:hover>td{background:color-mix(in srgb,var(--fz-accent) 12%,transparent)!important}#centre #tabMembresAlliance td.fmz-mem-arr.up{color:#4ade80!important}#centre #tabMembresAlliance td.fmz-mem-arr.down{color:#ff5a5a!important}#centre #tabMembresAlliance td.fz-traj{white-space:nowrap;font-variant-numeric:tabular-nums}#centre #tabMembresAlliance td.fz-atk-src,#centre #tabMembresAlliance td.fz-def-src{width:0!important;padding:0!important}#centre #tabMembresAlliance tr>td:nth-child(9){text-align:center!important;white-space:nowrap;padding:0 4px!important}#centre #tabMembresAlliance img.fz-def,#centre #tabMembresAlliance a.fz-atk{float:none!important;display:inline-block!important;width:18px;vertical-align:middle;margin:0!important}#centre #tabMembresAlliance .fz-tdcv{display:inline-block;width:72px;text-align:center;vertical-align:middle}#centre #tabMembresAlliance tr>td:nth-child(9):not(:has(img.fz-def))::before,#centre #tabMembresAlliance tr>td:nth-child(9):not(:has(a.fz-atk))::after{content:"";display:inline-block;width:18px}#centre #tabMembresAlliance tr:first-child th,#centre #tabMembresAlliance tr:first-child th *{color:var(--fz-accent)!important;font-family:"Exo 2","Segoe UI",sans-serif!important;font-variant:normal!important;font-size:12.5px!important;font-weight:700!important;letter-spacing:.03em!important;text-decoration:none!important;white-space:nowrap}#centre #tabMembresAlliance tr:first-child th{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important;border-top:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent)!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 60%,transparent)!important;padding:6px!important}#centre #tabMembresAlliance tr:first-child th a:hover{color:#fff!important}#centre:has(#tabMembresAlliance) table.ligne_paire{display:none!important}`;
function wrapChat() {
const c = document.getElementById('centre');
if (!c) return;
const chat = c.querySelector(':scope > .chatAlliance');
if (!chat || c.querySelector(':scope > .fz-chatbox')) return;
let start = chat;
while (start.previousElementSibling && !/^(NAV|SCRIPT|BR)$/.test(start.previousElementSibling.tagName)) start = start.previousElementSibling;
const box = document.createElement('div');
box.className = 'fz-chatbox';
c.insertBefore(box, start);
let n = start;
while (n) {
const nx = n.nextElementSibling;
box.appendChild(n);
if (n === chat) { if (nx && nx.tagName === 'P') box.appendChild(nx); break; }
n = nx;
}
}
const PSEUDO_CSS = `#centre a[href*="Membre.php"]{color:#5c9cff!important}#centre a[href*="Membre.php"]:hover{color:#a9caff!important}`;
const ALLY_NAME_CSS = `#centre table.tab_triable a[href*="classementAlliance"]{color:#e3a15f!important}#centre table.tab_triable a[href*="classementAlliance"]:hover{color:#f5c99a!important}#centre table.tab_triable tr.monAlliance>td a[href*="classementAlliance"],#centre table.tab_triable tr[class*="pacte_"]>td a[href*="classementAlliance"]{color:#4ade80!important}#centre table.simulateur>tbody>tr:has(table.tab_triable)>td,#centre table.simulateur>tbody>tr:has(table.tab_triable):hover>td,#centre table.simulateur:has(#tabEnnemie)>tbody>tr>td,#centre table.simulateur:has(#tabEnnemie)>tbody>tr:hover>td{background:transparent!important}#centre table.simulateur:has(#tabEnnemie) fieldset{background:linear-gradient(135deg,rgba(14,30,52,.88),rgba(8,14,28,.94))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;border-radius:4px!important}#centre table.simulateur:has(#tabEnnemie) img[src*="icone_degat"]{position:relative!important;top:0!important;vertical-align:middle!important}#formulairePageEnnemie label:has(img){display:inline-flex!important;align-items:center;vertical-align:middle;height:20px}#formulairePageEnnemie label img{margin:0 0 0 4px!important}#centre table.simulateur:has(#tabEnnemie) img[src*="reset"]{content:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2215%22%20height%3D%2215%22%20fill%3D%22none%22%20stroke%3D%22%2339d0ff%22%20stroke-width%3D%222.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M20%2012a8%208%200%201%201-2.4-5.7%22/%3E%3Cpath%20d%3D%22M20%204v5h-5%22/%3E%3C/svg%3E")!important;width:15px!important;height:15px!important;vertical-align:middle!important;position:relative!important;top:0!important;cursor:pointer;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) #39d0ff);transition:transform .2s}#centre table.simulateur:has(#tabEnnemie) img[src*="reset"]:hover{transform:rotate(-90deg)}#fieldset_recherche_alliance label.monAlliance{color:#4ade80!important}#fieldset_recherche_alliance label.paix{color:#7ab8ff!important}#fieldset_recherche_alliance label.guerre{color:#ff5a5a!important}#centre table.simulateur img[src*="/OK."],#centre table.simulateur img[src^="OK."]{content:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2218%22%20height%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%235dff7a%22%20stroke-width%3D%221.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%229%22%20fill%3D%22%235dff7a%22%20fill-opacity%3D%22.12%22/%3E%3Cpath%20d%3D%22M7.5%2012.3l3%203%206-6.3%22%20stroke-width%3D%222.2%22/%3E%3C/svg%3E")!important;width:18px!important;height:18px!important;vertical-align:middle!important;display:block!important;margin:0 auto!important;filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) #5dff7a)}#centre a.fz-quit{display:inline-block!important;margin:10px auto!important;padding:8px 26px!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:12px!important;font-weight:700!important;letter-spacing:.12em;text-transform:uppercase;text-decoration:none!important;color:#ffe3e3!important;text-shadow:0 1px 0 rgba(0,0,0,.6),0 0 calc(6px*var(--fz-glow)) #ff4d5e;background:linear-gradient(180deg,#8a2a33 0%,#5a1219 45%,#3d0a10 55%,#6b1a22 100%)!important;border:1px solid #ff5a68!important;border-radius:3px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),inset 0 -1px 0 rgba(0,0,0,.5),inset 0 0 0 2px rgba(20,4,6,.55),0 0 calc(10px*var(--fz-glow)) rgba(255,60,80,.45),0 2px 4px rgba(0,0,0,.6)!important;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);transition:filter .15s,transform .1s}#centre a.fz-quit:hover{filter:brightness(1.25);color:#fff!important}#centre a.fz-quit:active{transform:translateY(1px)}#centre table.simulateur>tbody>tr:has(fieldset)>td,#centre table.simulateur>tbody>tr:has(fieldset):hover>td{background:transparent!important}#tabChoixArmee{margin-left:auto!important;margin-right:auto!important}#Calys_OF_tabFlood>tbody>tr:nth-child(odd):not(:first-child)>td{background:color-mix(in srgb,var(--fz-accent) 8%,transparent)!important}#Calys_OF_tabFlood>tbody>tr:not(:first-child):hover>td{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important}#tabChoixArmee>tbody>tr:nth-child(odd):not(:first-child)>td{background:color-mix(in srgb,var(--fz-accent) 8%,transparent)!important}#tabChoixArmee>tbody>tr:not(:first-child):hover>td{background:color-mix(in srgb,var(--fz-accent) 16%,transparent)!important}#tabChoixArmee>tbody>tr>td{padding-top:2px!important;padding-bottom:2px!important}html body #centre #formulaireChoixArmee input[type="submit"][name="ChoixArmee"]{display:inline-block!important;margin:8px auto!important;padding:9px 34px!important;height:auto!important;width:auto!important;cursor:pointer;font-family:"Orbitron","Segoe UI",sans-serif!important;font-size:13px!important;font-weight:700!important;letter-spacing:.1em;text-transform:uppercase;color:#ffe6e6!important;text-shadow:0 1px 0 rgba(0,0,0,.6);background:linear-gradient(180deg,#a3323d 0%,#6e1720 48%,#560f17 52%,#7a1e27 100%)!important;border:1px solid #e0505d!important;border-radius:3px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(0,0,0,.45),0 0 calc(8px*var(--fz-glow)) rgba(230,60,75,.35),0 2px 5px rgba(0,0,0,.55)!important;clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);transition:filter .15s,transform .1s}html body #centre #formulaireChoixArmee input[type="submit"][name="ChoixArmee"]:hover{filter:brightness(1.18);color:#fff!important}html body #centre #formulaireChoixArmee input[type="submit"][name="ChoixArmee"]:active{transform:translateY(1px)}#tabEnnemie a[href*="classementAlliance"]{color:#e3a15f!important}#tabEnnemie a[href*="classementAlliance"]:hover{color:#f5c99a!important}#tabEnnemie tr.monAlliance>td a[href*="classementAlliance"],#tabEnnemie tr[class*="pacte_"]>td a[href*="classementAlliance"]{color:#4ade80!important}`;
const CHAT_CSS = `#centre #alliance:has(.chatAlliance),#centre .fz-chatbox{background:linear-gradient(135deg,rgba(14,30,52,.88),rgba(8,14,28,.94))!important;border:1px solid color-mix(in srgb,var(--fz-accent) 35%,transparent)!important;box-shadow:0 0 calc(18px*var(--fz-glow)) color-mix(in srgb,var(--fz-accent) 18%,transparent)!important;clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));padding:12px 16px 14px!important;margin-top:6px}#centre #alliance:has(.chatAlliance)>.titre,#centre .fz-chatbox>h2{color:var(--fz-accent)!important;font-family:"Orbitron","Segoe UI",sans-serif!important;font-style:normal!important;text-transform:uppercase;letter-spacing:.08em;font-size:15px!important;margin:0 0 6px!important}#centre a.cixyCiter{color:color-mix(in srgb,var(--fz-text) 55%,transparent)!important;font-size:10px!important;font-style:italic;margin:0 4px}#centre a.cixyCiter:hover{color:var(--fz-accent)!important}#centre .chatAlliance p{margin:3px 0!important;padding:2px 0 2px 30px!important;border-bottom:1px solid color-mix(in srgb,var(--fz-accent) 8%,transparent)}`;
function lightenChat() {
document.querySelectorAll('.chatAlliance p *, #forum .messageForum *').forEach(e => {
if (e.dataset.fzL || e.matches('a.cixyCiter, img')) return;
e.dataset.fzL = '1';
const m = getComputedStyle(e).color.match(/[\d.]+/g);
if (!m) return;
const [r, g, b] = m.map(Number);
if ((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 >= 0.5) return;
const [h, sat, l] = rgbToHsl(r, g, b);
e.style.setProperty('color', `hsl(${Math.round(h)},${Math.round(Math.min(sat, 1) * 100)}%,${Math.round(Math.max(l, .72) * 100)}%)`, 'important');
});
}
const cplusIconCss = (c) => {
const A = c.accent;
const ic = (col, body, size = 20) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="${col}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`)}")`;
const glow = (col, r = 2.5) => `filter:drop-shadow(0 0 calc(${r}px*var(--fz-glow)) ${col})!important;`;
const sq = (d) => `<rect x="2.5" y="2.5" width="19" height="19" rx="3" opacity=".55"/>${d}`;
return `
#centre img[src*="fleche-armee."]{content:${ic(A, '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v9M8 12.5l4 4 4-4"/>')}!important;width:20px!important;height:20px!important;vertical-align:middle!important;cursor:pointer;${glow(A)}transition:transform .15s;}
#centre img[src*="fleche-armee."]:hover{transform:scale(1.15);}
#centre img[src*="feuille."]{content:${ic(A, '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 15.5h6M9 9h3"/>', 18)}!important;width:18px!important;height:18px!important;vertical-align:middle!important;cursor:pointer;${glow(A)}transition:transform .15s;}
#centre img[src*="feuille."]:hover{transform:scale(1.15);}
#centre img[src*="fleche-champs-gauche."]{content:${ic(A, sq('<path d="M13.5 7.5L9 12l4.5 4.5M17 7.5L12.5 12l4.5 4.5"/>'), 18)}!important;}
#centre img[src*="fleche-champs-droite."]{content:${ic(A, sq('<path d="M10.5 7.5L15 12l-4.5 4.5M7 7.5l4.5 4.5L7 16.5"/>'), 18)}!important;}
#centre img[src*="fleche-champs-"]{width:18px!important;height:18px!important;vertical-align:middle!important;cursor:pointer;${glow(A)}transition:transform .15s;}
#centre img[src*="fleche-champs-"]:hover{transform:scale(1.15);}
/* simulateur de ponte : bouton « Pondre » (coche verte) */
#centre input[type=image][src*="OK."]{box-sizing:border-box!important;width:24px!important;height:24px!important;padding:24px 0 0 24px!important;background:${ic('#5dff7a', '<circle cx="12" cy="12" r="9" fill="#5dff7a" fill-opacity=".12"/><path d="M7.5 12.3l3 3 6-6.3" stroke-width="2.2"/>', 22)} center/22px 22px no-repeat!important;border:0!important;vertical-align:middle!important;cursor:pointer;${glow('#5dff7a')}transition:transform .15s;}
#centre input[type=image][src*="OK."]:hover{transform:scale(1.15);}
/* barre d'édition (profil, messages…) */
#centre img[src*="/bold."]{content:${ic(A, '<path d="M7 4h6a4 4 0 0 1 0 8H7zM7 12h7a4 4 0 0 1 0 8H7z"/>', 16)}!important;}
#centre img[src*="/italic."]{content:${ic(A, '<path d="M10 4h8M6 20h8M15 4L9 20"/>', 16)}!important;}
#centre img[src*="/underline."]{content:${ic(A, '<path d="M7 4v7a5 5 0 0 0 10 0V4M5 20h14"/>', 16)}!important;}
#centre img[src*="/picture."]{content:${ic(A, '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 8"/>', 16)}!important;}
#centre img[src*="/link."]{content:${ic(A, '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>', 16)}!important;}
#centre img[src*="/membre.gif"]{content:${ic(A, '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7"/>', 16)}!important;width:16px!important;}
#centre img[src*="/groupe.gif"]{content:${ic(A, '<circle cx="12" cy="7.5" r="2.8"/><path d="M6.5 19c0-3.2 2.4-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/><circle cx="5.5" cy="9.5" r="2"/><circle cx="18.5" cy="9.5" r="2"/><path d="M2 17.5c0-2.2 1.4-3.8 3.5-4M22 17.5c0-2.2-1.4-3.8-3.5-4"/>', 16)}!important;width:20px!important;}
#centre :is(img[src*="/bold."],img[src*="/italic."],img[src*="/underline."],img[src*="/picture."],img[src*="/link."],img[src*="/membre.gif"],img[src*="/groupe.gif"]){height:16px!important;vertical-align:middle!important;margin:0 3px!important;cursor:pointer;${glow(A, 2)}transition:transform .15s;}
#centre :is(img[src*="/bold."],img[src*="/italic."],img[src*="/underline."],img[src*="/picture."],img[src*="/link."],img[src*="/membre.gif"],img[src*="/groupe.gif"]):hover{transform:scale(1.2);}
/* barre de smileys : icônes du jeu (ouvrière, nourriture, matériaux, convoi, rapports) en néon */
#centre [id^="listeSmiley"] img[src$="/worker.png"]{content:${ic('#d6ecff', '<circle cx="12" cy="6.5" r="2.5"/><ellipse cx="12" cy="12" rx="2.2" ry="2.6"/><ellipse cx="12" cy="18.2" rx="3" ry="3.3"/><path d="M9.8 11L5 8.5M14.2 11L19 8.5M9.8 12.5L4.5 13M14.2 12.5L19.5 13M9.8 14L6 18M14.2 14L18 18M10.8 4.5L9 2M13.2 4.5L15 2"/>')}!important;${glow('#d6ecff')}}
#centre [id^="listeSmiley"] img[src$="/food.png"]{content:${ic('#7dff9a', '<path d="M12 21c-4.5 0-7.5-3.4-7.5-7.6C4.5 9.6 7.2 7 10 7c1 0 1.5.4 2 .4s1-.4 2-.4c2.8 0 5.5 2.6 5.5 6.4 0 4.2-3 7.6-7.5 7.6z"/><path d="M12 7.4V5c0-1.6 1.3-2.6 3.2-2.6C15.2 4 14 5 12 5"/>')}!important;${glow('#7dff9a')}}
#centre [id^="listeSmiley"] img[src$="/wood.png"]{content:${ic('#ffae42', '<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M4 7.4l8 4.6 8-4.6M12 12v9.2"/>')}!important;${glow('#ffae42')}}
#centre [id^="listeSmiley"] img[src$="/convoy.png"]{content:${ic(A, '<path d="M3 10l5-3h8l5 3v5l-5 3H8l-5-3z"/><path d="M10.5 12.5h4M12.5 10.5l2 2-2 2"/>')}!important;${glow(A)}}
#centre [id^="listeSmiley"] img[src$="/letter.png"]{content:${ic(A, '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/>')}!important;${glow(A)}}
#centre [id^="listeSmiley"] img[src$="/hunt_report.png"]{content:${ic('#4dffd2', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><circle cx="17.5" cy="15.5" r="2.2"/>')}!important;${glow('#4dffd2')}}
#centre [id^="listeSmiley"] img[src$="/fight_report.png"]{content:${ic('#ff6b5a', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><path d="M13 12.5l-2 3.5h3l-2 3.5" stroke-width="1.4"/>')}!important;${glow('#ff6b5a')}}
#centre [id^="listeSmiley"] img[src$="/convoy_report.png"]{content:${ic('#ffae42', '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M2.5 6.5l9.5 7 9.5-7"/><path d="M15 14.5h4M17.5 13l1.5 1.5-1.5 1.5"/>')}!important;${glow('#ffae42')}}
#centre [id^="listeSmiley"] :is(img[src$="/worker.png"],img[src$="/food.png"],img[src$="/wood.png"],img[src$="/convoy.png"],img[src$="/letter.png"],img[src$="/hunt_report.png"],img[src$="/fight_report.png"],img[src$="/convoy_report.png"]){width:20px!important;height:20px!important;vertical-align:middle!important;margin:0 2px!important;}
/* v1.13 : chevrons du bouton de destination de ponte à la couleur du lieu */
${[['tdc', '#ff4d5e'], ['dome', '#ffb020'], ['loge', '#4ade80']].map(([k, col]) => `html body #centre div.cliquable3[data-fz-dest="${k}"] img[src*="fleche-champs-droite."]{content:${ic(col, sq('<path d="M10.5 7.5L15 12l-4.5 4.5M7 7.5l4.5 4.5L7 16.5"/>'), 18)}!important;filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${col})!important;}`).join('')}
/* bloc-note : loupe de recherche (bouton image : l'image d'origine est repoussée hors du cadre, l'icône est posée en fond) */
#centre input[type=image][src*="loupe."]{box-sizing:border-box!important;width:20px!important;height:20px!important;padding:20px 0 0 20px!important;background:${ic(A, '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/>', 18)} center/18px 18px no-repeat!important;border:0!important;vertical-align:middle!important;cursor:pointer;${glow(A)}}`;
};
 const vars = (c) => `:root{--fz-bg:${c.bg};--fz-panel:${c.panel};--fz-panel2:${c.panel2};--fz-border:${c.border};--fz-text:${c.text};--fz-accent:${c.accent};--fz-link:${c.link};--fz-danger:${c.danger};--fz-radius:${c.radius}px;--fz-font:${c.font};--fz-side-dim:${c.sideDim};--fz-glow:${c.glow};--fz-bg-veil:${c.bgVeil};--fz-bg-img:${c.bgImg?`url("${c.bgImg}")`:'none'};--fz-side-img:${c.sideImg?`url("${c.sideImg}")`:'none'};--fz-photo-filter:${c.holo?'grayscale(1) sepia(1) hue-rotate(160deg) saturate(2.4) brightness(.95) contrast(1.15)':'none'};--fz-icon-filter:${c.holo?'hue-rotate(170deg) saturate(1.4) brightness(1.1)':'none'};}`;
const style = document.createElement('style');
style.id = 'fz-skin';
const apply = () => {
const futur = cfg.enabled && PRESETS[cfg.preset] && PRESETS[cfg.preset].futur;
style.textContent = !cfg.enabled ? '' : (futur ? FUTUR_IMPORT : '') + VOILE_CSS + vars(cfg) + SKIN_CSS + (futur ? FUTUR_CSS : '') + (cfg.stationImg ? STATION_CSS + CUSTOM_IMG_CSS : '') + (cfg.buildBtn ? BUILD_BTN_CSS : '') + PONTE_TABLE_CSS + RING_CSS + MSG_TAG_CSS + MEMBERS_CSS + CHAT_CSS + PSEUDO_CSS + ALLY_NAME_CSS + forumCss(cfg) + (cfg.neonIcons ? msgIconCss(cfg) : '') + armyHeadCss(cfg.accent) + RES_LAYOUT_CSS + (cfg.neonIcons ? extraIconCss(cfg) : '') + (cfg.neonIcons ? neonIconCss(cfg.accent) + compteIconCss(cfg.accent) + menuIconCss(cfg.accent) + cplusIconCss(cfg) : '') + ACCUEIL_CSS + MOBILE_CSS;
document.documentElement.classList.toggle('fz-has-bg', !!(futur && cfg.bgImg));
};
apply();
(document.head || document.documentElement).appendChild(style);
let voileLeve = !cfg.enabled || document.readyState !== 'loading';
const leverVoile = () => {
if (voileLeve) return;
voileLeve = true;
const root = document.documentElement;
root.classList.add('fz-apparition');
root.classList.remove('fz-voile');
setTimeout(() => { root.classList.remove('fz-apparition'); if (!root.classList.length) root.removeAttribute('class'); }, 200);
};
if (!voileLeve) { document.documentElement.classList.add('fz-voile'); setTimeout(leverVoile, 2500); }
const PANEL_CSS = `#fz-skin-btn{position:fixed;left:12px;bottom:12px;z-index:99999;width:38px;height:38px;border-radius:50%;border:1px solid #39d0ff;background:radial-gradient(circle at 35% 30%,#1a4a6e,#07111e);color:#fff;font-size:19px;cursor:pointer;box-shadow:0 0 10px rgba(57,208,255,.55),0 2px 8px rgba(0,0,0,.5)}#fz-skin-panel{display:none;position:fixed;left:12px;bottom:60px;z-index:99999;width:300px;max-width:calc(100vw - 24px);box-sizing:border-box;padding:14px;border:1px solid rgba(57,208,255,.6);border-radius:4px;background:linear-gradient(180deg,rgba(14,30,52,.97),rgba(8,14,28,.98));color:#d6ecff;font:13px "Exo 2","Segoe UI",system-ui,sans-serif;box-shadow:0 0 18px rgba(57,208,255,.3),0 6px 24px rgba(0,0,0,.6);max-height:80vh;overflow:auto}#fz-skin-panel h3{margin:0 0 12px;font:700 12px "Orbitron","Segoe UI",sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#39d0ff;text-shadow:0 0 6px rgba(57,208,255,.6)}#fz-skin-panel label{display:flex;justify-content:space-between;align-items:center;gap:8px;margin:8px 0}#fz-skin-panel label.fz-col{flex-direction:column;align-items:stretch;gap:4px}#fz-skin-panel input[type=range]{width:120px;accent-color:#39d0ff}#fz-skin-panel input[type=text]{width:100%;box-sizing:border-box;background:#0a1a2e;color:#d6ecff;border:1px solid #1d4f73;border-radius:3px;padding:4px 6px}#fz-skin-panel input[type=text]:focus{outline:none;border-color:#39d0ff}#fz-skin-panel .row{display:flex;gap:6px;margin-top:12px}#fz-skin-panel button{flex:1;padding:6px;border:1px solid #1d4f73;border-radius:3px;cursor:pointer;background:#0a1a2e;color:#d6ecff;font:600 11px "Orbitron","Segoe UI",sans-serif;letter-spacing:.06em;text-transform:uppercase}#fz-skin-panel button.primary{background:#39d0ff;border-color:#39d0ff;color:#04121f}`;
function buildPanel() {
const ps = document.createElement('style'); ps.textContent = PANEL_CSS; document.head.appendChild(ps);
const btn = document.createElement('button'); btn.id = 'fz-skin-btn'; btn.title = 'Réglages du skin'; btn.textContent = '🎨';
const p = document.createElement('div'); p.id = 'fz-skin-panel';
p.innerHTML = `<h3>🎨 Skin Fourmizzz · Futuriste <small style="opacity:.6;font-weight:400">v${(typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || ''}</small></h3>
      <label>Intensité des néons <input type="range" min="0" max="1.5" step="0.05" data-k="glow"></label>
      <label class="fz-col">Image de fond (URL) <input type="text" data-k="bgImg" placeholder="https://…"></label>
      <div class="row"><button data-act="reset">Réinitialiser</button><button class="primary" data-act="close">OK</button></div>`;
document.body.append(btn, p);
const sync = () => p.querySelectorAll('[data-k]').forEach(el => {
const k = el.dataset.k; if (el.type === 'checkbox') el.checked = cfg[k]; else el.value = cfg[k];
});
sync();
btn.onclick = () => { p.style.display = p.style.display === 'block' ? 'none' : 'block'; };
p.addEventListener('input', e => {
const el = e.target, k = el.dataset.k; if (!k) return;
cfg[k] = el.type === 'checkbox' ? el.checked : (el.type === 'range' ? +el.value : el.value);
apply(); save(cfg);
});
p.addEventListener('click', e => {
const a = e.target.dataset.act;
if (a === 'close') p.style.display = 'none';
if (a === 'reset') { cfg = { ...DEFAULT }; sync(); apply(); save(cfg); }
});
}
 const onReady = () => {
buildPanel();
if (cfg.enabled && cfg.buildBtn) { enhanceBuildButtons(); enhanceConvoyButton(); }
if (cfg.enabled && /commerce\.php/i.test(location.pathname)) { convoyInfo(); setInterval(convoyInfo, 3000); }
if (cfg.enabled && cfg.buildBtn) { enhanceSimButtons(); enhanceHarvestButton(); enhanceCollectiveSend(); }
if (cfg.enabled) document.querySelectorAll('#centre img[src*="nouveau_sujet_gauche"]').forEach(img => img.parentElement && img.parentElement.classList.add('fz-newtopic'));
if (cfg.enabled && cfg.buildBtn && document.getElementById('formulaireChoixArmee')) { enhanceAttackButtons(); setInterval(enhanceAttackButtons, 1000); }
if (cfg.enabled && document.querySelector('#centre .boite_membre')) { colorTravelTime(); easterEggXatak(); }
if (cfg.enabled) compteplusPoster();
if (cfg.enabled) { markCancelLinks(); setInterval(markCancelLinks, 2000); }
if (cfg.enabled && document.querySelector('#centre > h4 + table.tableau_leger')) {
const tick = () => { formatPonteTimes(); };
tick(); setInterval(tick, 1000);
}
fzCompat();
if (cfg.enabled) mobileLeftBoxesButton();
if (cfg.enabled) { markSubheads(); setTimeout(markSubheads, 1500); }
if (cfg.enabled) { colorPonteNames(); colorPonteDestinations(); }
if (cfg.enabled && (document.getElementById('nouveauxMessages') || /chat\.php|alliance/i.test(location.pathname))) { colorChatTags(); setInterval(colorChatTags, 1000); }
if (cfg.enabled && /chat\.php/i.test(location.pathname)) { const h = [...document.querySelectorAll('#centre h2')].find(x => /^chat/i.test(x.textContent.trim())); if (h) h.classList.add('fz-band-title'); }
if (cfg.enabled && /reine/i.test(location.pathname)) { ponteArmyBadges(); setInterval(ponteArmyBadges, 1000); armyCopyButton(); }
if (cfg.enabled && /reine/i.test(location.pathname)) reineDescriptionButtons();
if (cfg.enabled && /armee/i.test(location.pathname)) { splitArmyStats(); setTimeout(() => { splitArmyStats(); syncArmyStatsCols(); }, 1500); window.addEventListener('resize', syncArmyStatsCols); }
if (cfg.enabled && /alliance/i.test(location.pathname)) { markMeInMembers(); setInterval(() => { markMeInMembers(); placeCollectiveSmileys(); if (cfg.buildBtn) enhanceCollectiveSend(); }, 700); placeCollectiveSmileys(); }
if (cfg.enabled) { batimentsEffets(); setTimeout(batimentsEffets, 1500); }
if (cfg.enabled && document.querySelector('#centre span.niveau_amelioration')) { levelBadges(); setInterval(levelBadges, 1500); waitTimes(); setInterval(waitTimes, 1500); }
if (cfg.enabled) { terrainRing(); warehouseRings(); setTimeout(warehouseRings, 1500); setTimeout(warehouseRings, 4000); setInterval(warehouseRings, 2000); }
if (cfg.enabled && document.getElementById('nbNourriture')) { productionTable(); setInterval(productionTable, 1000); }
if (cfg.enabled) moveReturnTimer();
if (cfg.enabled) { resourceHero(); setTimeout(resourceHero, 1500); pageHero(); }
if (cfg.enabled) { markArmyHead(); colorArmyUnits(); }
if (cfg.enabled) { wrapChat(); if (document.querySelector('.chatAlliance, #forum')) { lightenChat(); setInterval(lightenChat, 1500); } }
if (cfg.enabled && /alliance/i.test(location.pathname)) { fixMembers(); setInterval(fixMembers, 1000); styleForum(); setInterval(styleForum, 1000); }
if (cfg.enabled && document.getElementById('messagerie')) { tagMessages(); setInterval(tagMessages, 1500); }
if (cfg.enabled && /fourmiliere\.php/i.test(location.pathname)) fourmiliereMegastructure();
new MutationObserver(fzCompat).observe(document.body, { childList: true });
setInterval(fzCompat, 2000);
};
const demarrer = () => {
try { onReady(); } finally {
const fin = () => requestAnimationFrame(() => requestAnimationFrame(leverVoile));
Promise.race([document.fonts ? document.fonts.ready : null, new Promise((r) => setTimeout(r, 250))]).then(fin, fin);
}
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
function mobileLeftBoxesButton() {
const mq = window.matchMedia('screen and (max-width: 61em)');
const root = document.documentElement;
const OPEN = 'fz-boites-ouvertes';
const ICON = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M5.5 8h1.5M5.5 11h1.5M5.5 14h1.5"/></svg>';
const setOpen = (open) => {
root.classList.toggle(OPEN, open);
const btn = document.getElementById('fz-boites-btn');
if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
};
const sync = () => {
const menu = [...document.querySelectorAll('#menu')].find((m) => m.querySelector('#menu_horizontal'));
const boxes = document.getElementById('menuBoite');
let btn = document.getElementById('fz-boites-btn');
if (!mq.matches || !menu || !boxes) { if (btn) btn.remove(); setOpen(false); return; }
if (btn) return;
btn = document.createElement('button');
btn.type = 'button';
btn.id = 'fz-boites-btn';
btn.title = 'Afficher / cacher les infos du joueur et Compte +';
btn.setAttribute('aria-label', btn.title);
btn.setAttribute('aria-controls', 'menuBoite');
btn.setAttribute('aria-expanded', 'false');
btn.innerHTML = '<span>' + ICON + '</span>';
btn.addEventListener('click', (e) => { e.preventDefault(); setOpen(!root.classList.contains(OPEN)); });
menu.insertBefore(btn, menu.firstChild);
};
document.addEventListener('click', (e) => { if (root.classList.contains(OPEN) && e.target && e.target.id === 'menuBoite') setOpen(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.classList.contains(OPEN)) setOpen(false); });
if (mq.addEventListener) mq.addEventListener('change', sync); else mq.addListener(sync);
sync();
}
function infoButton(td) {
const btn = document.createElement('button');
btn.type = 'button'; btn.className = 'fz-desc-btn'; btn.setAttribute('aria-expanded', 'false');
btn.innerHTML = '<span>Info</span><b>+</b>';
btn.addEventListener('click', (e) => {
e.preventDefault();
const tr = td.closest('tr'); const open = !tr.classList.contains('fz-desc-open');
tr.classList.toggle('fz-desc-open', open);
btn.setAttribute('aria-expanded', open ? 'true' : 'false');
btn.querySelector('b').textContent = open ? '−' : '+';
});
return btn;
}
function reineDescriptionButtons() {
const mq = window.matchMedia('screen and (max-width: 61em)');
const run = () => {
if (!mq.matches) return;
document.querySelectorAll('#centre tr.ligneAmelioration:has(.photo_unite) td.desciption_amelioration').forEach(td => {
if (td.querySelector('.fz-desc-btn') || !td.querySelector('h2')) return;
if (!td.querySelector('[id^="descriptionComplete"]')) {
const livre = td.querySelector('a[href*="fourmis.php"]');
const debut = livre && livre.previousSibling && livre.previousSibling.nodeName === 'BR' ? livre.previousSibling : livre;
if (!debut) return;
const sp = document.createElement('span'); sp.className = 'fz-desc-txt';
td.insertBefore(sp, debut);
while (sp.nextSibling) sp.appendChild(sp.nextSibling);
}
const btn = infoButton(td);
const ref = td.querySelector('.fz-desc-txt, [id^="descriptionComplete"]');
td.insertBefore(btn, ref);
});
};
run();
if (mq.addEventListener) mq.addEventListener('change', run);
}
function batimentsEffets() {
const NUM = /[+\-]?\d[\d   ]*(?:[.,]\d+)?\s?%?/g;
document.querySelectorAll('#centre tr.ligneAmelioration:is(:has(.photo_batiment),:has(.photo_recherche)) [id^="descriptionComplete"]').forEach(d => {
if (d.dataset.fzEffets) return; d.dataset.fzEffets = '1';
const br = [...d.childNodes].find(n => n.nodeName === 'BR');
if (br && br.previousSibling) {
const sp = document.createElement('span'); sp.className = 'fz-desc-txt';
d.insertBefore(sp, d.firstChild);
while (sp.nextSibling && sp.nextSibling !== br) sp.appendChild(sp.nextSibling);
}
[...d.childNodes].filter(n => n.nodeType === 3 && /:/.test(n.textContent) && /\d/.test(n.textContent.split(':').slice(1).join(':'))).forEach(n => {
const t = n.textContent, i = t.indexOf(':') + 1;
const line = document.createElement('span'); line.className = 'fz-effet';
line.appendChild(document.createTextNode(t.slice(0, i)));
let rest = t.slice(i), last = 0, m; NUM.lastIndex = 0;
while ((m = NUM.exec(rest))) {
const v = m[0].replace(/\s+$/, ''); if (!/\d/.test(v)) continue;
if (m.index > last) line.appendChild(document.createTextNode(rest.slice(last, m.index)));
const b = document.createElement('b'); b.className = 'fz-val'; b.textContent = v; line.appendChild(b);
last = m.index + v.length;
}
line.appendChild(document.createTextNode(rest.slice(last)));
n.replaceWith(line);
});
const td = d.closest('td');
if (td && d.querySelector('.fz-desc-txt') && !td.querySelector('.fz-desc-btn')) td.insertBefore(infoButton(td), d);
});
}
function fourmiliereMegastructure() {
const jeu = document.getElementById('fourmiliere');
const scene = jeu && jeu.parentElement;
if (!scene || scene.classList.contains('fz-fourmi')) return;
scene.classList.add('fz-fourmi');
const W = 1200, H = 896, NS = 'http://www.w3.org/2000/svg';
const DECOR = GM_getResourceURL('fourmiliere-megastructure');
const NIV = { 1: 'nivEtablePuceron', 2: 'nivEtableCochenille', 3: 'nivChampignonniere', 4: 'nivCombat', 5: 'nivCaserne', 6: 'nivCouveuse',
7: 'nivSolarium', 8: 'nivLaboratoire', 9: 'nivEntrepotNourriture', 10: 'nivEntrepotMateriaux', 11: '', 12: 'nivLoge', 13: 'nivAnalyse' };
const ZONES = [
{ id: 'troupes', titre: 'Troupes', c: '#c8d3e0', page: 'Armee.php', drones: 5,
poly: [355,314,348,398,355,421,375,443,403,456,419,452,476,470,532,501,584,520,592,527,602,523,648,522,698,513,745,486,782,473,793,465,800,451,824,420,834,394,835,365,812,315,793,290,763,265,720,249,666,223,660,225,660,233,665,245,688,275,689,294,680,315,669,330,649,345,630,352,591,353,545,344,537,340,515,318,499,298,496,274,507,249,524,227,524,224,518,221,497,220,400,264,368,293] },
{ id: 'nourriture', titre: 'Entrepôt de nourriture', c: '#4ade80', page: 'construction.php', bat: [9],
poly: [450,212,433,186,401,154,362,129,329,115,311,111,285,111,238,117,214,124,189,135,162,155,113,207,88,266,84,300,84,347,88,351,176,348,232,351,315,349,323,338,333,314,357,284,389,258,407,252,442,230,449,221] },
{ id: 'ponte', titre: 'Amélioration du temps de ponte', c: '#ff5a6a', page: 'construction.php', bat: [7, 6],
poly: [395,123,398,132,434,171,453,187,475,212,485,216,499,216,510,211,527,210,554,203,615,200,669,208,693,215,711,215,787,133,784,120,771,95,748,72,718,60,677,56,643,46,526,50,519,44,515,49,485,51,426,80] },
{ id: 'militaire', titre: 'Quartier militaire', c: '#ff8a3d', page: 'construction.php', bat: [5, 4],
poly: [722,232,724,237,730,233,771,249,807,271,852,323,859,325,880,325,915,316,964,312,980,308,1007,309,1065,301,1095,301,1099,291,1100,254,1084,210,1070,185,1045,165,991,132,935,112,854,110,832,116,778,146,757,164,743,188,727,227] },
{ id: 'etables', titre: 'Étables', c: '#39b8ff', page: 'construction.php', bat: [1, 2],
poly: [854,347,852,352,856,358,846,407,804,470,805,485,863,536,945,573,977,594,1007,603,1038,605,1058,592,1080,569,1122,502,1125,366,1113,336,1107,330,1089,322,1051,313,980,309] },
{ id: 'materiaux', titre: 'Entrepôt de matériaux', c: '#f9a8d4', page: 'construction.php', bat: [10],
poly: [910,594,888,575,869,565,848,541,790,510,785,503,776,504,742,520,682,540,618,545,614,553,613,588,617,609,616,648,622,672,626,728,639,762,645,768,686,768,728,759,731,756,731,742,724,722,724,698,736,682,766,660,828,641,887,608,909,604] },
{ id: 'port', titre: 'Port spatial', c: '#8fd8ff', page: 'Armee.php', drones: 3,
poly: [1151,709,1135,695,1088,675,1037,627,985,607,964,594,953,593,911,608,836,649,816,656,786,661,760,675,735,700,731,711,731,725,738,759,771,807,793,828,869,886,877,890,889,890,910,885,928,875,965,862,1002,853,1055,829,1101,799,1133,769,1152,729] },
{ id: 'recherche', titre: 'Pôle de recherche', c: '#ffd84a', page: 'laboratoire.php', bat: [8, 13],
poly: [181,640,193,659,210,674,241,688,276,699,300,714,346,733,414,753,458,754,530,770,555,771,566,763,574,734,576,683,582,659,578,613,581,549,572,537,517,506,466,484,442,477,396,473,378,480,347,484,315,502,290,512,269,529,267,535,220,581,196,615,188,634] },
{ id: 'champignonniere', titre: 'Champignonnière', c: '#f2f5fa', page: 'Ressources.php', bat: [3],
poly: [296,355,289,352,118,355,94,368,78,384,78,404,83,415,81,471,95,526,110,557,136,585,146,590,172,591,200,582,224,567,250,538,282,519,290,511,350,482,360,472,362,459,319,381] },
{ id: 'dome', titre: 'Dôme et Loge impériale', c: '#c77dff', page: 'construction.php', bat: [11, 12],
poly: [511,273,509,293,513,314,525,327,543,336,583,337,602,343,632,344,652,336,667,324,678,305,678,288,672,262,659,238,635,222,604,213,581,213,559,222,522,255] },
];
const dans = (p, x, y) => { let d = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) { const [xi, yi] = p[i], [xj, yj] = p[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) d = !d; } return d; };
let graine = 1795;
const hasard = () => { graine = (graine * 16807) % 2147483647; return (graine - 1) / 2147483646; };
ZONES.forEach(z => {
z.p = []; for (let i = 0; i < z.poly.length; i += 2) z.p.push([z.poly[i], z.poly[i + 1]]);
const xs = z.p.map(q => q[0]), ys = z.p.map(q => q[1]);
z.box = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
z.ctr = [(z.box[0] + z.box[2]) / 2, (z.box[1] + z.box[3]) / 2];
for (let n = 0; n < 300 && !dans(z.p, z.ctr[0], z.ctr[1]); n++) z.ctr = [z.box[0] + hasard() * (z.box[2] - z.box[0]), z.box[1] + hasard() * (z.box[3] - z.box[1])];
});
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (v) => Math.floor(v).toLocaleString('fr-FR');
const niveaux = {};
const src = [...document.scripts].map(s => s.textContent).find(t => /fourmiliereNiveaux/.test(t)) || '';
(src.match(/\{[^}]*\}/) || [''])[0].replace(/(\w+)\s*:\s*(\d+)/g, (m, cle, v) => { niveaux[cle] = +v; });
const palier = (n) => Math.max(1, Math.min(6, niveaux[NIV[n]] || 1));
const num = (s) => parseInt(String(s || '').replace(/[^\d]/g, ''), 10) || 0;
const batiment = (n) => {
const b = document.getElementById('message' + n); if (!b) return null;
const h = b.querySelector('h2'), txt = b.textContent.replace(/\s+/g, ' ');
const img = b.querySelector('img.photo');
return { nom: h ? h.textContent.trim() : '', niv: (txt.match(/niveau\s+(\d+)/i) || [])[1] || '',
effet: ((txt.match(/Effet\s*:?\s*(.+)$/i) || [])[1] || '').trim(),
photo: (cfg.stationImg && CUSTOM_IMG['photo' + (n - 1)]) || (img && img.getAttribute('src')) || '' };
};
const lirePage = (url, duree) => {
const cle = 'fzFourmi:' + location.host + ':' + url;
try { const c = JSON.parse(sessionStorage.getItem(cle) || 'null'); if (c && Date.now() - c.t < duree) return Promise.resolve(new DOMParser().parseFromString(c.h, 'text/html')); } catch (e) {}
return fetch(url, { credentials: 'same-origin' }).then(r => r.text()).then(h => {
try { sessionStorage.setItem(cle, JSON.stringify({ t: Date.now(), h })); } catch (e) {}
return new DOMParser().parseFromString(h, 'text/html');
});
};
const D = {}, enCours = {};
const CHARGEURS = {
labo: () => lirePage('laboratoire.php', 3600e3).then(d => {
const r = {};
d.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
const h = tr.querySelector('h2'), n = tr.querySelector('.niveau_amelioration'), ph = tr.querySelector('.photo_recherche');
if (!h) return;
const niv = n ? num(n.textContent) : 0, txt = tr.textContent.replace(/\s+/g, ' ');
const m = txt.match(/Effet\s*:\s*(.+?)\s+(?:accrue?s?|réduite?s?|augmentée?s?)\s+de\s+(\d+(?:[.,]\d+)?)\s*%\s*par niveau/i);
r[h.textContent.trim().toLowerCase()] = { nom: h.textContent.trim(), niv, photo: ph && cfg.stationImg ? RECHERCHE_IMG[ph.id] || '' : '',
effet: m ? `${m[1]} ${/réduit/i.test(txt) ? '−' : '+'}${fmt(parseFloat(m[2].replace(',', '.')) * niv)} %` : '' };
});
return r;
}),
constr: () => lirePage('construction.php', 600e3).then(d => {
const r = {};
d.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
const h = tr.querySelector('h2'); if (!h) return;
const txt = tr.textContent.replace(/\s+/g, ' ');
const a = txt.match(/(Capacité|Production) actuelle\s*:\s*([\d\s  ]+)/i), s = txt.match(/(?:Capacité|Production) au niveau (\d+)\s*:\s*([\d\s  ]+)/i);
r[h.textContent.trim().toLowerCase()] = { actuel: a ? num(a[2]) : null, nivSuiv: s ? +s[1] : null, suivant: s ? num(s[2]) : null };
});
return r;
}),
ress: () => lirePage('Ressources.php', 600e3).then(d => {
const p = d.getElementById('nbNourriture'), par = p && p.closest('p');
const val = (id) => { const e = d.getElementById(id); return e ? num(e.value || e.getAttribute('value')) : 0; };
const r = { recN: val('RecolteNourriture') * 48, recM: val('RecolteMateriaux') * 48, champi: 0, conso: 0 };
if (par) {
let last = null;
for (const n of par.childNodes) {
if (n.nodeType === 1 && n.tagName === 'STRONG') last = n;
else if (n.nodeType === 3 && last && !last.id) { if (/champignonni/i.test(n.textContent)) r.champi = num(last.textContent); }
}
const t = par.textContent.replace(/\s+/g, ' '), m = t.match(/consomme\s+([\d\s  ]+)/i); if (m) r.conso = num(m[1]);
}
const txt = d.body ? d.body.textContent.replace(/\s+/g, ' ') : '';
r.plein = {};
[['nourriture', 'nourriture'], ['materiaux', 'mat.riaux']].forEach(([k, re]) => {
const m = txt.match(new RegExp('entrep.t de ' + re + ' sera plein dans ([^(]+?)\\s*\\((le [^)]+)\\)', 'i'));
r.plein[k] = m ? { dans: m[1].trim(), le: m[2].trim() } : new RegExp('entrep.t de ' + re + ' est plein', 'i').test(txt) ? { dans: '' } : null;
});
return r;
}),
armee: () => lirePage('Armee.php', 600e3).then(d => {
const t = d.querySelector('#centre table.simulateur'); const r = { unites: [], vie: null };
if (!t) return r;
const head = [...t.rows].find(x => /Unités/.test(x.textContent));
const ht = head ? head.textContent.replace(/\s+/g, ' ') : '';
r.nivDome = +((ht.match(/Dôme\s*\((\d+)\)/i) || [])[1] || 0); r.nivLoge = +((ht.match(/Loge\s*\((\d+)\)/i) || [])[1] || 0);
[...t.rows].forEach(tr => {
const sp = [...tr.querySelectorAll('span[onclick*="remplirFormulaire"]')]; if (!sp.length) return;
const nomEl = tr.cells[0].querySelector('.pas_sur_telephone') || tr.cells[0];
r.unites.push({ nom: nomEl.textContent.replace(/\s+/g, ' ').trim(), n: sp.reduce((s, x) => s + num((x.getAttribute('onclick').match(/\((\d+)/) || [])[1]), 0) });
});
const stat = (re) => [...t.rows].find(x => x.cells[0] && re.test(x.cells[0].textContent));
const parts = (tr) => tr ? [...tr.cells].slice(1).map(c => { const s = c.textContent.replace(/\s+/g, ' '); const eq = s.split('='); return (eq[1] || eq[0]).split('+').map(num); }) : [];
const somme = (tr) => parts(tr).reduce((s, p) => s + p.reduce((a, b) => a + b, 0), 0);
const vie = stat(/^\s*Vie/i), lg = vie ? vie.textContent : '';
if (vie) {
const pv = parts(vie), base = pv.reduce((s, p) => s + (p[0] || 0), 0), bouc = pv.reduce((s, p) => s + (p[1] || 0), 0);
r.vie = { base, bouc, nivBouc: +((lg.match(/Bouclier\s*\((\d+)\)/i) || [])[1] || 0) };
}
r.att = somme(stat(/Dégats en Attaque/i)); r.def = somme(stat(/Dégats en Défense/i));
const co = stat(/Consommation/i); r.conso = co ? [...co.cells].slice(1).reduce((s, c) => s + num(c.textContent), 0) : 0;
r.nivArme = +(((stat(/Dégats en Attaque/i) || { textContent: '' }).textContent.match(/Arme\s*\((\d+)\)/i) || [])[1] || 0);
return r;
}),
convois: () => lirePage('commerce.php', 600e3).then(cm => {
const v = (id) => { const e = cm.getElementById(id); return e ? Math.floor(parseFloat(e.textContent)) || 0 : 0; };
let bonus = 0; for (const sc of cm.querySelectorAll('script')) { const m = sc.textContent.match(/function\s+maj_input_convoi[\s\S]*?var\s+bonus\s*=\s*(\d+(?:\.\d+)?)/); if (m) { bonus = parseFloat(m[1]); break; } }
const tot = v('nb_ouvrieres'), tdc = v('quantite_tdc');
return { tot, tdc: Math.min(tot, tdc), dispo: Math.max(0, tot - Math.min(tot, tdc)), cap: 10 * (1 + 0.05 * bonus), bonus };
}),
};
const charger = (nom) => enCours[nom] || (enCours[nom] = CHARGEURS[nom]().then(x => { D[nom] = x; }, () => { D[nom] = {}; }));
const MOUV = [['chasse', 'Chasses', '#4ade80'], ['attaque', 'Attaques', '#ff4d5e'], ['convoi', 'Convois', '#5aa8ff']];
const mouvements = () => MOUV.map(([cle, titre, c]) => {
const tr = document.getElementById('ligne_' + cle); if (!tr) return null;
const lib = tr.cells[1] ? tr.cells[1].textContent.replace(/\s+/g, ' ').trim() : '';
const nb = /^aucun/i.test(lib) ? 0 : parseInt((lib.match(/\d+/) || ['1'])[0], 10);
const tps = tr.querySelector('[id^="temps_"]');
let det = [];
const sc = [...tr.querySelectorAll('script')].map(s => s.textContent).join('\n').match(/content\s*:\s*"((?:\\.|[^"\\])*)"/);
if (sc) { try { const t = new DOMParser().parseFromString(JSON.parse('"' + sc[1] + '"'), 'text/html'); det = [...t.querySelectorAll('tr')].map(r => [...r.cells].map(x => x.textContent.trim())); } catch (e) {} }
return { cle, titre, c, lib, nb, tps: tps ? tps.textContent.trim() : '', det };
});
const SEUIL = 90;
const stock = (k) => {
const j = document.querySelector('#tableau_boite_info .jauge_' + k), td = j && j.closest('td');
const t = td && td.querySelector('.texte_ligne_boite_info');
const m = td && (td.getAttribute('title') || '').match(/(\d+(?:[.,]\d+)?)\s*%/);
const pct = j && j.style.width ? parseFloat(j.style.width) : m ? parseFloat(m[1].replace(',', '.')) : null;
return { qte: t ? num(t.textContent) : null, pct: pct == null ? null : Math.max(0, Math.min(100, pct)) };
};
const etage = document.createElement('div'); etage.className = 'fz-fourmi-etage';
const decor = document.createElement('div'); decor.className = 'fz-fourmi-decor'; decor.style.backgroundImage = `url("${DECOR}")`;
const cv = document.createElement('canvas'); cv.className = 'fz-fourmi-anim';
const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'fz-fourmi-zones'); svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
etage.append(decor, cv, svg); scene.append(etage);
let k = 1;
const ajuster = () => {
scene.style.setProperty('width', 'calc(100% - 8px)', 'important'); scene.style.setProperty('max-width', W + 'px', 'important');
k = Math.min(1, scene.clientWidth / W);
etage.style.zoom = k.toFixed(4);
scene.style.setProperty('width', Math.floor(W * k) + 'px', 'important');
scene.style.setProperty('height', Math.floor(H * k) + 'px', 'important');
};
ajuster(); window.addEventListener('resize', ajuster);
const dpr = Math.min(2, window.devicePixelRatio || 1);
cv.width = W * dpr; cv.height = H * dpr;
const ctx = cv.getContext('2d');
const drones = [];
ZONES.forEach(z => {
const nb = z.drones || Math.max(...z.bat.map(n => NIV[n] ? palier(n) : 2));
for (let i = 0; i < nb; i++) {
let x = z.ctr[0], y = z.ctr[1];
for (let j = 0; j < 80; j++) { const xx = z.box[0] + hasard() * (z.box[2] - z.box[0]), yy = z.box[1] + hasard() * (z.box[3] - z.box[1]); if (dans(z.p, xx, yy)) { x = xx; y = yy; break; } }
drones.push({ z, c: z.c, x, y, a: hasard() * Math.PI * 2, v: .7 + hasard() * .6, t: 1, trace: [] });
}
});
const vaisseau = (d) => {
const al = d.alpha == null ? 1 : d.alpha;
for (let i = 1; i < d.trace.length; i++) {
ctx.globalAlpha = i / d.trace.length * .5 * al; ctx.strokeStyle = d.c; ctx.lineWidth = 1.6 * d.t;
ctx.beginPath(); ctx.moveTo(d.trace[i - 1][0], d.trace[i - 1][1]); ctx.lineTo(d.trace[i][0], d.trace[i][1]); ctx.stroke();
}
ctx.globalAlpha = al;
ctx.save(); ctx.translate(d.x, d.y); ctx.rotate(d.a); ctx.scale(d.t, d.t);
const g = ctx.createRadialGradient(-6, 0, 0, -6, 0, 7); g.addColorStop(0, d.c); g.addColorStop(1, 'rgba(0,0,0,0)');
ctx.fillStyle = g; ctx.beginPath(); ctx.arc(-6, 0, 7, 0, Math.PI * 2); ctx.fill();
ctx.fillStyle = '#e6eef8'; ctx.strokeStyle = d.c; ctx.lineWidth = 1;
ctx.beginPath(); ctx.moveTo(9, 0); ctx.lineTo(-6, -5.5); ctx.lineTo(-3, 0); ctx.lineTo(-6, 5.5); ctx.closePath(); ctx.fill(); ctx.stroke();
ctx.restore(); ctx.globalAlpha = 1;
};
const avancer = (d) => {
d.a += (hasard() - .5) * .25;
let nx = d.x + Math.cos(d.a) * d.v, ny = d.y + Math.sin(d.a) * d.v, n = 0;
while (!dans(d.z.p, nx, ny) && n++ < 4) { d.a += Math.PI * (.8 + hasard() * .4); nx = d.x + Math.cos(d.a) * d.v; ny = d.y + Math.sin(d.a) * d.v; }
if (dans(d.z.p, nx, ny)) { d.x = nx; d.y = ny; } else { d.x = d.z.ctr[0]; d.y = d.z.ctr[1]; d.trace = []; }
d.trace.push([d.x, d.y]); if (d.trace.length > 10) d.trace.shift();
};
const port = ZONES.find(z => z.id === 'port');
const vols = [];
const CIBLE = [1172, 872];
mouvements().forEach((m, i) => { if (m) for (let j = 0; j < Math.min(5, m.nb); j++) vols.push({ cle: m.cle, rang: j, c: m.c, t: 1.5, x: port.ctr[0], y: port.ctr[1], a: 0, alpha: 0, phase: -(m.cle === 'attaque' ? j * 22 : j * 140 + i * 60) - 1, trace: [] }); });
const attaques = vols.some(v => v.cle === 'attaque');
const voler = (v) => {
v.phase++;
if (v.phase < 0) return;
if (v.phase % 420 === 0) {
v.x = port.ctr[0]; v.y = port.ctr[1]; v.trace = [];
if (v.cle === 'attaque') {
const a = Math.atan2(CIBLE[1] - v.y, CIBLE[0] - v.x) + ((v.rang % 2 ? 1 : -1) * Math.ceil(v.rang / 2)) * .035, d = Math.hypot(CIBLE[0] - v.x, CIBLE[1] - v.y) / 180;
v.dx = Math.cos(a) * d; v.dy = Math.sin(a) * d;
} else { const a = .15 + hasard() * 1.2; v.dx = Math.cos(a) * 2.4; v.dy = Math.sin(a) * 2.4; }
}
const p = v.phase % 420;
if (p < 180) { v.x += v.dx; v.y += v.dy; v.a = Math.atan2(v.dy, v.dx); v.alpha = Math.min(1, (180 - p) / 40); }
else if (p < 240) { v.alpha = 0; v.trace = []; }
else { v.x -= v.dx; v.y -= v.dy; v.a = Math.atan2(-v.dy, -v.dx); v.alpha = Math.min(1, (p - 240) / 40, (420 - p) / 25); }
v.trace.push([v.x, v.y]); if (v.trace.length > 14) v.trace.shift();
};
const reticule = (f) => {
const r = 15 + Math.sin(f * .12) * 2;
ctx.save(); ctx.translate(CIBLE[0], CIBLE[1]); ctx.strokeStyle = '#ff4d5e'; ctx.lineWidth = 1.6; ctx.globalAlpha = .85;
ctx.rotate(f * .02); ctx.setLineDash([7, 5]); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
ctx.rotate(-f * .02); ctx.beginPath();
[[0, -1], [0, 1], [-1, 0], [1, 0]].forEach(([a, b]) => { ctx.moveTo(a * (r - 6), b * (r - 6)); ctx.lineTo(a * (r + 6), b * (r + 6)); });
ctx.stroke(); ctx.fillStyle = '#ff4d5e'; ctx.beginPath(); ctx.arc(0, 0, 2, 0, Math.PI * 2); ctx.fill(); ctx.restore();
};
const filantes = [];
let prochaine = 60;
const filer = () => {
if (--prochaine <= 0) {
prochaine = 90 + Math.random() * 150;
const haut = Math.random() < .7, a = haut ? (Math.random() < .5 ? .2 + Math.random() * .25 : Math.PI - .2 - Math.random() * .25) : 1.25 + Math.random() * .2;
filantes.push({ x: haut ? 40 + Math.random() * 820 : 5 + Math.random() * 45, y: haut ? Math.random() * 35 : 200 + Math.random() * 520, a, v: 7 + Math.random() * 4, vie: 0, fin: 18 + Math.random() * 14 });
}
for (let i = filantes.length - 1; i >= 0; i--) { const e = filantes[i]; e.x += Math.cos(e.a) * e.v; e.y += Math.sin(e.a) * e.v; if (++e.vie > e.fin) filantes.splice(i, 1); }
};
const etoiles = () => filantes.forEach(e => {
const L = 70, al = Math.sin(Math.PI * e.vie / e.fin), x0 = e.x - Math.cos(e.a) * L, y0 = e.y - Math.sin(e.a) * L;
const g = ctx.createLinearGradient(x0, y0, e.x, e.y); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(1, `rgba(220,240,255,${(.9 * al).toFixed(3)})`);
ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(e.x, e.y); ctx.stroke();
ctx.fillStyle = `rgba(255,255,255,${al.toFixed(3)})`; ctx.beginPath(); ctx.arc(e.x, e.y, 1.4, 0, Math.PI * 2); ctx.fill();
});
const PL = { x: 1118, y: 30, r: 140 }, PX = 960, PW = 240, PH = PL.y + PL.r, TW = 512, TH = 256;
const tex = new Uint8ClampedArray(TW * TH * 4);
for (let v = 0; v < TH; v++) {
const lat = v / TH, bande = Math.sin(lat * 31) + .6 * Math.sin(lat * 57 + 1.3) + .4 * Math.sin(lat * 13 + .4);
for (let u = 0; u < TW; u++) {
const t = u / TW * Math.PI * 2;
let n = bande + .9 * (Math.sin(t * 3 + lat * 9) * .5 + Math.sin(t * 7 + lat * 23 + 2) * .3 + Math.sin(t * 13 - lat * 40) * .2) - .4;
const o = (v * TW + u) * 4, clair = n > 0;
tex[o] = clair ? 250 : 110; tex[o + 1] = clair ? 228 : 68; tex[o + 2] = clair ? 196 : 38;
tex[o + 3] = Math.round(Math.min(1, Math.abs(n)) * 70);
}
}
const pu = new Int16Array(PW * PH).fill(-1), pv = new Int16Array(PW * PH), pa = new Float32Array(PW * PH);
for (let y = 0; y < PH; y++) for (let x = 0; x < PW; x++) {
const dx = x + PX - PL.x, dy = y - PL.y, w2 = PL.r * PL.r - dy * dy, i = y * PW + x;
if (w2 <= dx * dx) continue;
pu[i] = Math.round((Math.asin(dx / Math.sqrt(w2)) / Math.PI + .5) * TW / 2);
pv[i] = Math.min(TH - 1, Math.round((Math.asin(dy / PL.r) / Math.PI + .5) * TH));
const r = Math.hypot(dx, dy) / PL.r; pa[i] = r < .7 ? 1 : Math.max(0, (1 - r) / .3);
}
const pcv = document.createElement('canvas'); pcv.className = 'fz-fourmi-planete'; pcv.width = PW; pcv.height = PH;
Object.assign(pcv.style, { left: PX + 'px', width: PW + 'px', height: PH + 'px' });
cv.before(pcv);
const pctx = pcv.getContext('2d'), pimg = pctx.createImageData(PW, PH), pd = pimg.data;
let rot = 0;
const planete = () => {
const r0 = Math.floor(rot);
for (let i = 0; i < PW * PH; i++) {
if (pu[i] < 0) continue;
const o = (pv[i] * TW + (pu[i] + r0) % TW) * 4, q = i * 4;
pd[q] = tex[o]; pd[q + 1] = tex[o + 1]; pd[q + 2] = tex[o + 2]; pd[q + 3] = tex[o + 3] * pa[i];
}
pctx.putImageData(pimg, 0, 0);
};
let image = 0;
const dessiner = () => {
ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
if (image % 3 === 0) planete();
etoiles();
if (attaques) reticule(image);
drones.forEach(vaisseau); vols.forEach(v => { if (v.alpha > 0) vaisseau(v); });
};
const fige = navigator.webdriver || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
drones.forEach(d => { for (let i = 0; i < 10; i++) avancer(d); });
dessiner();
if (!fige) {
let avant = 0;
const boucle = (t) => { if (t - avant >= 33) { avant = t; image++; rot = (rot + .12) % TW; filer(); drones.forEach(avancer); vols.forEach(voler); dessiner(); } requestAnimationFrame(boucle); };
requestAnimationFrame(boucle);
}
const ligne = (b) => `<div class="fz-fp-item">${b.photo ? `<img src="${esc(b.photo)}" alt="">` : '<i></i>'}<div><b>${esc(b.nom)}</b>${b.niv !== '' && b.niv != null ? ` <span class="fz-fp-niv">niv. ${esc(b.niv)}</span>` : ''}${b.effet ? `<small>${esc(b.effet)}</small>` : ''}</div></div>`;
const ico = (nom) => {
const d = NEON_ICONS.find(x => x[0] === nom); if (!d) return '';
return `<svg class="fz-fp-ico" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="${d[1]}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 calc(2.5px*var(--fz-glow)) ${d[1]})">${d[2].replace(/"C"/g, `"${d[1]}"`)}</svg>`;
};
const ICO = { nourriture: 'icone_pomme', materiaux: 'icone_bois' };
const val = (lib, v, cls) => `<div class="fz-fp-ligne${cls ? ' ' + cls : ''}"><span>${lib}</span><b>${v}</b></div>`;
const attente = (noms) => noms.some(n => !(n in D));
const rech = (nom) => { const r = D.labo && D.labo[nom.toLowerCase()]; return r || { nom, niv: attente(['labo']) ? '…' : '' }; };
const anneau = (pct) => {
const col = `hsl(${Math.round(120 * (1 - pct / 100))},85%,52%)`, R = 26, C = 2 * Math.PI * R, SEG = 10, segLen = C / SEG - 3.2;
let s = '';
for (let i = 0; i < SEG; i++) {
const on = i < Math.floor(pct / 10) || (i === Math.floor(pct / 10) && pct % 10 >= 5);
s += `<circle cx="32" cy="32" r="${R}" fill="none" stroke="${on ? col : 'rgba(255,255,255,.12)'}" stroke-width="6" stroke-dasharray="${segLen.toFixed(2)} ${(C - segLen).toFixed(2)}" stroke-dashoffset="${(-i * C / SEG).toFixed(2)}" transform="rotate(-90 32 32)"/>`;
}
return `<svg class="fz-fp-anneau" viewBox="0 0 64 64" width="64" height="64" style="filter:drop-shadow(0 0 calc(3px*var(--fz-glow)) ${col})">${s}<text x="32" y="33" text-anchor="middle" dominant-baseline="middle" font-family="Orbitron,Segoe UI,sans-serif" font-weight="700" font-size="14" fill="#fff">${Math.round(pct)}%</text></svg>`;
};
const entrepot = (n, k) => {
const b = batiment(n), c = D.constr && b && D.constr[b.nom.toLowerCase()], s = stock(k);
let h = b ? ligne(Object.assign({}, b, { effet: '' })) : '';
h += '<div class="fz-fp-entrepot">' + (s.pct != null ? anneau(s.pct) : '') + '<div>'
+ (s.qte != null ? val(ico(ICO[k]) + 'En stock', fmt(s.qte)) : '')
+ (c && c.actuel != null ? val(ico(ICO[k]) + 'Capacité', fmt(c.actuel)) : attente(['constr']) ? val(ico(ICO[k]) + 'Capacité', '…') : '')
+ (c && c.suivant != null ? val(ico(ICO[k]) + `Capacité au niveau ${c.nivSuiv}`, fmt(c.suivant), 'fz-fp-suiv') : '')
+ '</div></div>';
const pl = D.ress && D.ress.plein && D.ress.plein[k], alerte = s.pct != null && s.pct >= SEUIL;
if (pl) h += val(pl.dans ? 'Plein dans' : 'Entrepôt', pl.dans ? `${esc(pl.dans)} <small>(${esc(pl.le)})</small>` : 'plein !', alerte || !pl.dans ? 'fz-fp-alerte' : '');
else if (attente(['ress'])) h += val('Plein dans', '…');
if (alerte) h += '<div class="fz-fp-note fz-fp-alerte">⚠ Entrepôt rempli à plus de 90 % : la production au-delà de la capacité est perdue.</div>';
return h;
};
const RENDU = {
ponte: () => {
const so = batiment(7), cv = batiment(6), tp = rech('Technique de ponte');
const pts = [so, cv].map(b => b ? num(b.niv) * 10 : 0).concat(tp.niv !== '…' ? [num(tp.niv) * 10] : []);
const tot = pts.reduce((a, b) => a + b, 0);
return [so, cv].filter(Boolean).map((b, i) => ligne(Object.assign({}, b, { effet: `Vitesse de ponte +${fmt(pts[i])} %` }))).join('')
+ ligne(Object.assign({}, tp, { effet: tp.effet || '' }))
+ val('Vitesse de ponte totale', attente(['labo']) ? '…' : `+${fmt(tot)} %`, 'fz-fp-total');
},
militaire: () => [5, 4].map(batiment).filter(Boolean).map(ligne).join('') + ligne(rech('Armes')) + ligne(rech('Bouclier Thoracique')),
etables: () => [1, 2].map(batiment).filter(Boolean).map(ligne).join(''),
nourriture: () => entrepot(9, 'nourriture'),
materiaux: () => entrepot(10, 'materiaux'),
champignonniere: () => {
const b = batiment(3), r = D.ress, c = D.constr && b && D.constr[b.nom.toLowerCase()];
let h = b ? ligne(Object.assign({}, b, { effet: '' })) : '';
if (!r) return h + '<p class="fz-fp-note">Lecture de la production…</p>';
const champi = r.champi || (c && c.actuel) || 0, solde = r.recN + champi - r.conso;
const sg = (v) => `<span class="${v > 0 ? 'fz-pos' : v < 0 ? 'fz-neg' : ''}">${v > 0 ? '+' : v < 0 ? '−' : ''}${fmt(Math.abs(v))}</span>`;
const n = ico('icone_pomme');
return h + '<div class="fz-fp-sous">Nourriture par jour</div>' + val(n + 'Récolte du terrain', sg(r.recN)) + val(n + 'Champignonnière', sg(champi))
+ (c && c.suivant != null ? val(n + `Champignonnière au niveau ${c.nivSuiv}`, sg(c.suivant), 'fz-fp-suiv') : '')
+ val(n + 'Coût de l\'armée', sg(-r.conso)) + val(n + 'Reste', sg(solde), 'fz-fp-total');
},
dome: () => [11, 12].map(batiment).filter(Boolean).map(ligne).join(''),
recherche: () => [8, 13].map(batiment).filter(Boolean).map(ligne).join('') + ['Génétique', 'Poison', 'Acide'].map(n => ligne(rech(n))).join(''),
troupes: () => {
const a = D.armee; if (!a) return '<p class="fz-fp-note">Lecture de l\'armée…</p>';
const us = (a.unites || []).filter(u => u.n > 0);
let h = '<div class="fz-fp-sous">Armée totale</div>';
h += us.length ? '<table class="fz-fp-armee">' + us.map(u => { const hit = UNIT_COLORS.find(([re]) => re.test(u.nom)); return `<tr style="color:${hit ? hit[1] : 'inherit'}"><td>${esc(u.nom)}</td><td>${fmt(u.n)}</td></tr>`; }).join('')
+ `<tr class="fz-fp-tot"><td>Total</td><td>${fmt(us.reduce((s, u) => s + u.n, 0))}</td></tr></table>` : '<p class="fz-fp-note">Aucune unité.</p>';
if (a.vie) {
const v = (bonus) => a.vie.base + a.vie.bouc + a.vie.base * bonus;
h += '<div class="fz-fp-sous">Statistiques</div>'
+ val(ico('icone_coeur') + 'Vie sur le terrain de chasse', fmt(v(0))) + val(ico('icone_coeur') + `Vie au Dôme (${a.nivDome})`, fmt(v(a.nivDome ? .10 + .05 * a.nivDome : 0)))
+ val(ico('icone_coeur') + `Vie en Loge (${a.nivLoge})`, fmt(v(a.nivLoge ? .30 + .15 * a.nivLoge : 0)))
+ val(ico('icone_degat_attaque') + 'Dégâts en attaque', fmt(a.att)) + val(ico('icone_degat_defense') + 'Dégâts en défense', fmt(a.def)) + val(ico('icone_pomme') + 'Consommation journalière', fmt(a.conso));
}
return h;
},
port: () => {
const ms = mouvements().filter(Boolean), lab = D.labo || {}, cv = D.convois;
const permis = { chasse: lab['vitesse de chasse'], attaque: lab["vitesse d'attaque"] };
let h = ms.length ? '' : '<p class="fz-fp-note">Mouvements en cours : boîte Compte + absente de la page.</p>';
h += ms.map(m => {
const p = permis[m.cle], max = p ? ` / ${p.niv + 1}` : m.cle === 'convoi' ? '' : attente(['labo']) ? ' / …' : '';
return `<div class="fz-fp-mouv" style="--fz-zone:${m.c}"><div class="fz-fp-mt"><b>${esc(m.titre)}</b><span><b>${m.nb}${max}</b>${m.tps ? ' · ' + esc(m.tps) : ''}</span></div>`
+ (m.det.length ? `<table>${m.det.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</table>` : '') + '</div>';
}).join('');
if (cv && cv.tot) h += '<div class="fz-fp-sous">Capacité des convois</div>' + val(ico('icone_ouvriere') + 'Ouvrières disponibles', fmt(cv.dispo))
+ val(ico('icone_pomme') + ico('icone_bois') + 'Livrable sans découvrir le TdC', fmt(cv.dispo * cv.cap)) + val(ico('icone_pomme') + ico('icone_bois') + 'Livrable avec 100 % des ouvrières', fmt(cv.tot * cv.cap))
+ `<p class="fz-fp-note">${cv.cap.toLocaleString('fr-FR')} ressources par ouvrière (Étable à pucerons niv. ${cv.bonus})</p>`;
else if (attente(['convois'])) h += '<p class="fz-fp-note">Lecture des convois…</p>';
return h;
},
};
const BESOINS = { ponte: ['labo'], militaire: ['labo'], recherche: ['labo'], nourriture: ['constr', 'ress'], materiaux: ['constr', 'ress'], champignonniere: ['ress', 'constr'], troupes: ['armee'], port: ['labo', 'convois'] };
const html = (z, epingle) => `<div class="fz-fp-titre">${esc(z.titre)}${epingle ? `<a class="fz-fp-page" href="${z.page}" title="Ouvrir la page">›</a><button type="button" class="fz-fp-x" title="Fermer">×</button>` : ''}</div><div class="fz-fp-corps">${RENDU[z.id]()}</div>`;
const dock = document.createElement('div'); dock.className = 'fz-fourmi-dock'; scene.after(dock);
const etroit = () => W * k < 600;
const epingles = [];
const chevauche = (a, b) => a.l < b.l + b.w + 6 && b.l < a.l + a.w + 6 && a.t < b.t + b.h + 6 && b.t < a.t + a.h + 6;
const placer = (z, el, autres, strict) => {
const sw = W * k, sh = H * k, pw = Math.min(340, sw - 16);
el.style.width = pw + 'px'; el.style.maxHeight = (sh - 16) + 'px';
const ph = Math.min(el.offsetHeight, sh - 16);
const [x0, y0, x1, y1] = z.box.map(v => v * k), cy = (y0 + y1) / 2 - ph / 2, cx = (x0 + x1) / 2 - pw / 2;
const borne = (l, t) => ({ l: Math.max(8, Math.min(sw - pw - 8, l)), t: Math.max(8, Math.min(sh - ph - 8, t)), w: pw, h: ph });
const cands = [borne(x1 + 12, cy), borne(x0 - 12 - pw, cy), borne(cx, y1 + 12), borne(cx, y0 - 12 - ph)];
for (let t = 8; t <= sh - ph - 8; t += 24) for (let l = 8; l <= sw - pw - 8; l += 24) cands.push(borne(l, t));
const r = cands.find(c => !autres.some(o => chevauche(c, o))) || (strict ? null : cands[0]);
if (!r) return null;
el.style.left = Math.round(r.l) + 'px'; el.style.top = Math.round(r.t) + 'px';
return r;
};
const rect = (el) => ({ l: el.offsetLeft, t: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight });
const replacer = () => {
const faits = [];
dock.style.maxWidth = Math.floor(W * k) + 'px';
epingles.filter(z => !z.libre).forEach(z => {
const el = z.panneau;
let r = null;
if (!etroit()) { if (el.parentNode !== scene) scene.appendChild(el); el.classList.remove('fz-dock'); r = placer(z, el, faits, true); }
if (r) faits.push(r);
else { if (el.parentNode !== dock) dock.appendChild(el); el.classList.add('fz-dock'); el.style.left = el.style.top = el.style.width = el.style.maxHeight = ''; }
});
};
const rafraichir = (z) => {
if (apercu.zone === z) { apercu.innerHTML = html(z, false); placer(z, apercu, epingles.filter(x => x.panneau.parentNode === scene).map(x => rect(x.panneau))); }
if (z.panneau) { const c = z.panneau.querySelector('.fz-fp-corps'), n = RENDU[z.id](); if (c && c.dataset.k !== n) { c.innerHTML = n; c.dataset.k = n; replacer(); } }
};
const preparer = (z) => (BESOINS[z.id] || []).forEach(n => { if (!(n in D)) charger(n).then(() => rafraichir(z)); });
const apercu = document.createElement('div'); apercu.className = 'fz-fourmi-panneau fz-apercu'; scene.appendChild(apercu);
const montrer = (z) => {
if (z.panneau || etroit()) return;
apercu.zone = z; apercu.style.setProperty('--fz-zone', z.c); apercu.innerHTML = html(z, false); apercu.classList.add('fz-on');
placer(z, apercu, epingles.filter(x => x.panneau.parentNode === scene).map(x => rect(x.panneau)));
z.el.classList.add('fz-on'); preparer(z);
};
const cacherApercu = (z) => { if (apercu.zone === z) { apercu.zone = null; apercu.classList.remove('fz-on'); } if (!z.panneau) z.el.classList.remove('fz-on'); };
const fermer = (z) => { if (!z.panneau) return; z.panneau.remove(); z.panneau = null; z.libre = false; epingles.splice(epingles.indexOf(z), 1); z.el.classList.remove('fz-on', 'fz-pin'); replacer(); };
const deplacable = (z, el) => {
const tete = el.querySelector('.fz-fp-titre');
tete.addEventListener('pointerdown', (e) => {
if (e.button || e.target.closest('a,button')) return;
const r0 = el.getBoundingClientRect(), dx = e.clientX - r0.left, dy = e.clientY - r0.top, x0 = e.clientX, y0 = e.clientY;
let o = null;
const bouger = (ev) => {
if (ev.pointerId !== e.pointerId) return;
if (!o) {
if (Math.hypot(ev.clientX - x0, ev.clientY - y0) < 5) return;
el.style.width = r0.width + 'px'; el.style.maxHeight = Math.min(r0.height, innerHeight - 16) + 'px';
el.classList.remove('fz-dock'); el.classList.add('fz-libre'); document.body.appendChild(el);
el.style.left = el.style.top = '0px'; const r = el.getBoundingClientRect(); o = [r.left + scrollX, r.top + scrollY];
if (!z.libre) { z.libre = true; replacer(); }
}
ev.preventDefault();
const l = Math.max(0, Math.min(document.documentElement.clientWidth - 40, ev.clientX - dx)) + scrollX - o[0];
el.style.left = Math.round(l) + 'px'; el.style.top = Math.round(Math.max(0, ev.clientY - dy) + scrollY - o[1]) + 'px';
};
const fin = (ev) => { if (ev.pointerId !== e.pointerId) return; removeEventListener('pointermove', bouger); removeEventListener('pointerup', fin); removeEventListener('pointercancel', fin); };
addEventListener('pointermove', bouger, { passive: false }); addEventListener('pointerup', fin); addEventListener('pointercancel', fin);
});
};
const epingler = (z) => {
cacherApercu(z);
if (z.panneau) { z.panneau.classList.remove('fz-flash'); void z.panneau.offsetWidth; z.panneau.classList.add('fz-flash'); return; }
const el = document.createElement('div'); el.className = 'fz-fourmi-panneau fz-pin fz-on';
el.style.setProperty('--fz-zone', z.c); el.innerHTML = html(z, true);
el.querySelector('.fz-fp-x').addEventListener('click', (e) => { e.stopPropagation(); fermer(z); });
z.panneau = el; epingles.push(z); z.el.classList.add('fz-on', 'fz-pin');
deplacable(z, el);
replacer(); preparer(z);
};
const alertes = () => ZONES.forEach(z => { if (z.id === 'nourriture' || z.id === 'materiaux') { const s = stock(z.id); z.el.classList.toggle('fz-alerte', s.pct != null && s.pct >= SEUIL); } });
setTimeout(alertes); setInterval(alertes, 5000);
setInterval(() => { const z = ZONES.find(x => x.id === 'port'); if (z.panneau || apercu.zone === z) rafraichir(z); }, 1000);
window.addEventListener('resize', replacer);
ZONES.forEach(z => {
const el = document.createElementNS(NS, 'polygon');
el.setAttribute('points', z.p.map(q => q.join(',')).join(' '));
el.style.setProperty('--fz-zone', z.c);
const titre = document.createElementNS(NS, 'title'); titre.textContent = z.titre; el.appendChild(titre);
z.el = el;
el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') montrer(z); });
el.addEventListener('pointerleave', () => cacherApercu(z));
el.addEventListener('click', () => epingler(z));
svg.appendChild(el);
});
}
})();
