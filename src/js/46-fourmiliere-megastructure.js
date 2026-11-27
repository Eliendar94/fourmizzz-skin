  // ---------- v1.68 : page « Ma Fourmilière » (fourmiliere.php) transformée en mégastructure spatiale ----------
  // La page du jeu empile, dans un div 760×750 : #fourmiliere (décor fond.png + canvas des créatures, animé par
  // script/fourmiliere.js), puis une image transparente porteuse de <map name="vueFourmiliere"> (13 <area>) dont le survol
  // rend visible la bulle table#messageN. Le skin prend la main sur la scène, sans rien supprimer :
  //   1. le décor, le canvas, l'image à <map> et les bulles du jeu sont masqués (CSS) mais restent dans la page ;
  //   2. décor : image de la mégastructure (1200×896), dessinée par le joueur ;
  //   3. calque animé (canvas) : petits vaisseaux-drones qui circulent dans leur module, plus nombreux quand le palier
  //      des bâtiments monte (paliers 1 à 6 transmis par le jeu dans fourmiliereNiveaux), et vaisseaux qui partent du
  //      port spatial et y reviennent pour chaque mouvement en cours (chasses, attaques, convois de la boîte Compte +) ;
  //   4. calque des zones (SVG) : contour néon et aperçu du panneau HUD au survol (souris) ; un clic (ou un appui)
  //      épingle le panneau (croix pour le fermer, lien › vers la page du module, plusieurs ouverts sans se recouvrir ;
  //      sur petit écran ils s'empilent sous la scène). Données : bulles du jeu (bâtiments), boîte d'infos et boîte
  //      Compte + (stocks, mouvements), et pages lues en GET (laboratoire, construction, Ressources, Armée, Convois).
  // Les zones viennent du calque du joueur (un contour de couleur par module), converti en polygones (pixels de l'image).
  // (déclaration de fonction : remontée dans la portée commune, appelée depuis onReady dans 42-demarrage.js)
  function fourmiliereMegastructure() {
    const jeu = document.getElementById('fourmiliere');
    const scene = jeu && jeu.parentElement;
    if (!scene || scene.classList.contains('fz-fourmi')) return;
    scene.classList.add('fz-fourmi');

    const W = 1200, H = 896, NS = 'http://www.w3.org/2000/svg';
    const DECOR = __ASSET__('fourmiliere/megastructure.jpg');
    // bulles du jeu (table#messageN) → clé du palier dans fourmiliereNiveaux
    const NIV = { 1: 'nivEtablePuceron', 2: 'nivEtableCochenille', 3: 'nivChampignonniere', 4: 'nivCombat', 5: 'nivCaserne', 6: 'nivCouveuse',
      7: 'nivSolarium', 8: 'nivLaboratoire', 9: 'nivEntrepotNourriture', 10: 'nivEntrepotMateriaux', 11: '', 12: 'nivLoge', 13: 'nivAnalyse' };
    // Zones (ordre = ordre d'empilement : le central « troupes » d'abord, le Dôme par-dessus). id = contenu du panneau (RENDU),
    // page = lien du panneau, bat = bulles du jeu (nombre de drones d'après leur palier), drones = nombre fixe.
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
    // hasard reproductible : mêmes départs à chaque chargement
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

    // paliers transmis par le jeu dans un <script> en ligne (window du jeu inaccessible depuis le userscript : on lit le texte)
    const niveaux = {};
    const src = [...document.scripts].map(s => s.textContent).find(t => /fourmiliereNiveaux/.test(t)) || '';
    (src.match(/\{[^}]*\}/) || [''])[0].replace(/(\w+)\s*:\s*(\d+)/g, (m, cle, v) => { niveaux[cle] = +v; });
    const palier = (n) => Math.max(1, Math.min(6, niveaux[NIV[n]] || 1));

    // --- données des panneaux ---
    const num = (s) => parseInt(String(s || '').replace(/[^\d]/g, ''), 10) || 0;
    // bâtiment : lu dans la bulle du jeu (nom, niveau, effet) ; photo « station » si l'option est active
    const batiment = (n) => {
      const b = document.getElementById('message' + n); if (!b) return null;
      const h = b.querySelector('h2'), txt = b.textContent.replace(/\s+/g, ' ');
      const img = b.querySelector('img.photo');
      return { nom: h ? h.textContent.trim() : '', niv: (txt.match(/niveau\s+(\d+)/i) || [])[1] || '',
        effet: ((txt.match(/Effet\s*:?\s*(.+)$/i) || [])[1] || '').trim(),
        photo: (cfg.stationImg && CUSTOM_IMG['photo' + (n - 1)]) || (img && img.getAttribute('src')) || '' };
    };
    // pages lues en GET (comme Diplomatie / profil), gardées en mémoire de session pour ne pas les relire à chaque ouverture
    const lirePage = (url, duree) => {
      const cle = 'fzFourmi:' + location.host + ':' + url;
      try { const c = JSON.parse(sessionStorage.getItem(cle) || 'null'); if (c && Date.now() - c.t < duree) return Promise.resolve(new DOMParser().parseFromString(c.h, 'text/html')); } catch (e) {}
      return fetch(url, { credentials: 'same-origin' }).then(r => r.text()).then(h => {
        try { sessionStorage.setItem(cle, JSON.stringify({ t: Date.now(), h })); } catch (e) {}
        return new DOMParser().parseFromString(h, 'text/html');
      });
    };
    // Chargeurs : chacun lit une page une seule fois par affichage (la promesse est gardée) ; D[nom] = résultat ou {} si échec.
    const D = {}, enCours = {};
    const CHARGEURS = {
      // recherches : nom, niveau, photo, effet chiffré (« Vie des unités accrue de 10% par niveau » → +10 % × niveau)
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
      // bâtiments : capacité / production actuelle et au niveau suivant (descriptions de construction.php)
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
      // production par jour (Ressources.php) : récolte = ouvrières affectées × 48 (calcul du jeu), champignonnière, consommation
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
        // v1.68 : « Votre entrepôt de … sera plein dans X (le …) » / « … est plein » (mêmes phrases que la page Ressources)
        const txt = d.body ? d.body.textContent.replace(/\s+/g, ' ') : '';
        r.plein = {};
        [['nourriture', 'nourriture'], ['materiaux', 'mat.riaux']].forEach(([k, re]) => {
          const m = txt.match(new RegExp('entrep.t de ' + re + ' sera plein dans ([^(]+?)\\s*\\((le [^)]+)\\)', 'i'));
          r.plein[k] = m ? { dans: m[1].trim(), le: m[2].trim() } : new RegExp('entrep.t de ' + re + ' est plein', 'i').test(txt) ? { dans: '' } : null;
        });
        return r;
      }),
      // armée (Armee.php) : quantités (span « remplirFormulaire(n,'uniteX',lieu,…) ») et statistiques par lieu
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
        // lignes de statistiques : chaque cellule de lieu = « total = base + bonus (+ bonus du lieu) » dans son détail
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
      // convois (commerce.php) : ouvrières, terrain de chasse, bonus de l'étable à pucerons (même calcul que la page Convois)
      convois: () => lirePage('commerce.php', 600e3).then(cm => {
        const v = (id) => { const e = cm.getElementById(id); return e ? Math.floor(parseFloat(e.textContent)) || 0 : 0; };
        let bonus = 0; for (const sc of cm.querySelectorAll('script')) { const m = sc.textContent.match(/function\s+maj_input_convoi[\s\S]*?var\s+bonus\s*=\s*(\d+(?:\.\d+)?)/); if (m) { bonus = parseFloat(m[1]); break; } }
        const tot = v('nb_ouvrieres'), tdc = v('quantite_tdc');
        return { tot, tdc: Math.min(tot, tdc), dispo: Math.max(0, tot - Math.min(tot, tdc)), cap: 10 * (1 + 0.05 * bonus), bonus };
      }),
    };
    const charger = (nom) => enCours[nom] || (enCours[nom] = CHARGEURS[nom]().then(x => { D[nom] = x; }, () => { D[nom] = {}; }));
    // mouvements : lignes chasse / attaque / convoi de la boîte Compte + (texte, compte à rebours du jeu, détail de l'infobulle)
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
    // stock et remplissage des entrepôts : boîte d'infos du jeu (à gauche), mise à jour en direct
    const SEUIL = 90;
    const stock = (k) => {
      const j = document.querySelector('#tableau_boite_info .jauge_' + k), td = j && j.closest('td');
      const t = td && td.querySelector('.texte_ligne_boite_info');
      const m = td && (td.getAttribute('title') || '').match(/(\d+(?:[.,]\d+)?)\s*%/);
      const pct = j && j.style.width ? parseFloat(j.style.width) : m ? parseFloat(m[1].replace(',', '.')) : null;
      return { qte: t ? num(t.textContent) : null, pct: pct == null ? null : Math.max(0, Math.min(100, pct)) };
    };

    // --- structure : scène (taille affichée) > étage 1200×896 réduit par zoom CSS (décor, drones, zones) ; panneaux à part ---
    const etage = document.createElement('div'); etage.className = 'fz-fourmi-etage';
    const decor = document.createElement('div'); decor.className = 'fz-fourmi-decor'; decor.style.backgroundImage = `url("${DECOR}")`;
    const cv = document.createElement('canvas'); cv.className = 'fz-fourmi-anim';
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'fz-fourmi-zones'); svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    etage.append(decor, cv, svg); scene.append(etage);
    let k = 1;
    const ajuster = () => {
      const c = document.getElementById('centre'); const w = c ? c.clientWidth : innerWidth;
      k = Math.min(1, (w - 8) / W);
      etage.style.zoom = k.toFixed(4);
      scene.style.setProperty('width', Math.floor(W * k) + 'px', 'important');
      scene.style.setProperty('height', Math.floor(H * k) + 'px', 'important');
    };
    ajuster(); window.addEventListener('resize', ajuster);

    // --- calque animé : vaisseaux-drones ---
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
    // sorties du port spatial : un vaisseau par mouvement en cours (5 au plus par type), qui part vers l'espace et revient
    const port = ZONES.find(z => z.id === 'port');
    const vols = [];
    // v1.68 : les attaques partent en formation vers une cible (réticule rouge dans l'espace, coin bas droit)
    const CIBLE = [1172, 872];
    mouvements().forEach((m, i) => { if (m) for (let j = 0; j < Math.min(5, m.nb); j++) vols.push({ cle: m.cle, rang: j, c: m.c, t: 1.5, x: port.ctr[0], y: port.ctr[1], a: 0, alpha: 0, phase: -(m.cle === 'attaque' ? j * 22 : j * 140 + i * 60) - 1, trace: [] }); });
    const attaques = vols.some(v => v.cle === 'attaque');
    const voler = (v) => {
      v.phase++;
      if (v.phase < 0) return;
      if (v.phase % 420 === 0) { // départ : cap vers la cible (attaque) ou vers le bas / la droite de l'image
        v.x = port.ctr[0]; v.y = port.ctr[1]; v.trace = [];
        if (v.cle === 'attaque') {
          const a = Math.atan2(CIBLE[1] - v.y, CIBLE[0] - v.x) + ((v.rang % 2 ? 1 : -1) * Math.ceil(v.rang / 2)) * .035, d = Math.hypot(CIBLE[0] - v.x, CIBLE[1] - v.y) / 180;
          v.dx = Math.cos(a) * d; v.dy = Math.sin(a) * d;
        } else { const a = .15 + hasard() * 1.2; v.dx = Math.cos(a) * 2.4; v.dy = Math.sin(a) * 2.4; }
      }
      const p = v.phase % 420; // 0-179 aller, 180-239 hors champ, 240-419 retour
      if (p < 180) { v.x += v.dx; v.y += v.dy; v.a = Math.atan2(v.dy, v.dx); v.alpha = Math.min(1, (180 - p) / 40); }
      else if (p < 240) { v.alpha = 0; v.trace = []; }
      else { v.x -= v.dx; v.y -= v.dy; v.a = Math.atan2(-v.dy, -v.dx); v.alpha = Math.min(1, (p - 240) / 40, (420 - p) / 25); }
      v.trace.push([v.x, v.y]); if (v.trace.length > 14) v.trace.shift();
    };
    // v1.68 : réticule de la cible des attaques (tourne lentement, pulse)
    const reticule = (f) => {
      const r = 15 + Math.sin(f * .12) * 2;
      ctx.save(); ctx.translate(CIBLE[0], CIBLE[1]); ctx.strokeStyle = '#ff4d5e'; ctx.lineWidth = 1.6; ctx.globalAlpha = .85;
      ctx.rotate(f * .02); ctx.setLineDash([7, 5]); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      ctx.rotate(-f * .02); ctx.beginPath();
      [[0, -1], [0, 1], [-1, 0], [1, 0]].forEach(([a, b]) => { ctx.moveTo(a * (r - 6), b * (r - 6)); ctx.lineTo(a * (r + 6), b * (r + 6)); });
      ctx.stroke(); ctx.fillStyle = '#ff4d5e'; ctx.beginPath(); ctx.arc(0, 0, 2, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    };
    // v1.68 : étoiles filantes, de temps en temps, dans les bandes d'espace (haut et bord gauche de l'image)
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
    // v1.68 : la planète (haut droit) tourne doucement : bandes nuageuses translucides qui défilent, projetées sur la sphère.
    // Calque à part (sans la lueur des drones), recalculé pixel par pixel toutes les 3 images à partir d'une texture périodique.
    const PL = { x: 1118, y: 30, r: 140 }, PX = 960, PW = 240, PH = PL.y + PL.r, TW = 512, TH = 256;
    const tex = new Uint8ClampedArray(TW * TH * 4);
    for (let v = 0; v < TH; v++) {
      const lat = v / TH, bande = Math.sin(lat * 31) + .6 * Math.sin(lat * 57 + 1.3) + .4 * Math.sin(lat * 13 + .4);
      for (let u = 0; u < TW; u++) {
        const t = u / TW * Math.PI * 2; // fonctions périodiques en u : la texture se raccorde
        let n = bande + .9 * (Math.sin(t * 3 + lat * 9) * .5 + Math.sin(t * 7 + lat * 23 + 2) * .3 + Math.sin(t * 13 - lat * 40) * .2) - .4;
        const o = (v * TW + u) * 4, clair = n > 0;
        tex[o] = clair ? 250 : 110; tex[o + 1] = clair ? 228 : 68; tex[o + 2] = clair ? 196 : 38;
        tex[o + 3] = Math.round(Math.min(1, Math.abs(n)) * 70);
      }
    }
    // correspondance pixel → (longitude, latitude) de la sphère, et atténuation vers le bord du disque
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
    // Mouvement réduit demandé par le système, ou test automatisé (navigateur piloté : captures comparées) : scène figée.
    const fige = navigator.webdriver || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
    drones.forEach(d => { for (let i = 0; i < 10; i++) avancer(d); });
    dessiner();
    if (!fige) {
      let avant = 0;
      const boucle = (t) => { if (t - avant >= 33) { avant = t; image++; rot = (rot + .12) % TW; filer(); drones.forEach(avancer); vols.forEach(voler); dessiner(); } requestAnimationFrame(boucle); };
      requestAnimationFrame(boucle);
    }

    // --- panneaux HUD : aperçu au survol (souris), panneau épinglé au clic (croix pour fermer, plusieurs à la fois) ---
    const ligne = (b) => `<div class="fz-fp-item">${b.photo ? `<img src="${esc(b.photo)}" alt="">` : '<i></i>'}<div><b>${esc(b.nom)}</b>${b.niv !== '' && b.niv != null ? ` <span class="fz-fp-niv">niv. ${esc(b.niv)}</span>` : ''}${b.effet ? `<small>${esc(b.effet)}</small>` : ''}</div></div>`;
    const val = (lib, v, cls) => `<div class="fz-fp-ligne${cls ? ' ' + cls : ''}"><span>${lib}</span><b>${v}</b></div>`;
    const attente = (noms) => noms.some(n => !(n in D));
    const rech = (nom) => { const r = D.labo && D.labo[nom.toLowerCase()]; return r || { nom, niv: attente(['labo']) ? '…' : '' }; };
    // anneau de remplissage (même dessin que la page Ressources : 10 segments, du vert (vide) au rouge (plein))
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
        + (s.qte != null ? val('En stock', fmt(s.qte)) : '')
        + (c && c.actuel != null ? val('Capacité', fmt(c.actuel)) : attente(['constr']) ? val('Capacité', '…') : '')
        + (c && c.suivant != null ? val(`Capacité au niveau ${c.nivSuiv}`, fmt(c.suivant), 'fz-fp-suiv') : '')
        + '</div></div>';
      // v1.68 : alerte au-delà de 90 % (le module passe au rouge) et heure de remplissage lue sur la page Ressources
      const pl = D.ress && D.ress.plein && D.ress.plein[k], alerte = s.pct != null && s.pct >= SEUIL;
      if (pl) h += val(pl.dans ? 'Plein dans' : 'Entrepôt', pl.dans ? `${esc(pl.dans)} <small>(${esc(pl.le)})</small>` : 'plein !', alerte || !pl.dans ? 'fz-fp-alerte' : '');
      else if (attente(['ress'])) h += val('Plein dans', '…');
      if (alerte) h += '<div class="fz-fp-note fz-fp-alerte">⚠ Entrepôt rempli à plus de 90 % : la production au-delà de la capacité est perdue.</div>';
      return h;
    };
    const RENDU = {
      // Solarium + Couveuse + Technique de ponte : chacun +10 % de vitesse de ponte par niveau, additionnés
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
        return h + '<div class="fz-fp-sous">Nourriture par jour</div>' + val('Récolte du terrain', sg(r.recN)) + val('Champignonnière', sg(champi))
          + (c && c.suivant != null ? val(`Champignonnière au niveau ${c.nivSuiv}`, sg(c.suivant), 'fz-fp-suiv') : '')
          + val('Coût de l\'armée', sg(-r.conso)) + val('Reste', sg(solde), 'fz-fp-total');
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
          // vie si toute l'armée était au même endroit : base + bouclier + bonus du lieu (Dôme 10 % + 5 %/niv, Loge 30 % + 15 %/niv, sur la base)
          const v = (bonus) => a.vie.base + a.vie.bouc + a.vie.base * bonus;
          h += '<div class="fz-fp-sous">Statistiques</div>'
            + val('Vie sur le terrain de chasse', fmt(v(0))) + val(`Vie au Dôme (${a.nivDome})`, fmt(v(a.nivDome ? .10 + .05 * a.nivDome : 0)))
            + val(`Vie en Loge (${a.nivLoge})`, fmt(v(a.nivLoge ? .30 + .15 * a.nivLoge : 0)))
            + val('Dégâts en attaque', fmt(a.att)) + val('Dégâts en défense', fmt(a.def)) + val('Consommation journalière', fmt(a.conso));
        }
        return h;
      },
      // Port spatial : mouvements en cours / permis (niveau de Vitesse de chasse ou d'attaque + 1), capacité des convois
      port: () => {
        const ms = mouvements().filter(Boolean), lab = D.labo || {}, cv = D.convois;
        const permis = { chasse: lab['vitesse de chasse'], attaque: lab["vitesse d'attaque"] };
        let h = ms.length ? '' : '<p class="fz-fp-note">Mouvements en cours : boîte Compte + absente de la page.</p>';
        h += ms.map(m => {
          const p = permis[m.cle], max = p ? ` / ${p.niv + 1}` : m.cle === 'convoi' ? '' : attente(['labo']) ? ' / …' : '';
          return `<div class="fz-fp-mouv" style="--fz-zone:${m.c}"><div class="fz-fp-mt"><b>${esc(m.titre)}</b><span><b>${m.nb}${max}</b>${m.tps ? ' · ' + esc(m.tps) : ''}</span></div>`
            + (m.det.length ? `<table>${m.det.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</table>` : '') + '</div>';
        }).join('');
        if (cv && cv.tot) h += '<div class="fz-fp-sous">Capacité des convois</div>' + val('Ouvrières disponibles', fmt(cv.dispo))
          + val('Livrable sans découvrir le TdC', fmt(cv.dispo * cv.cap)) + val('Livrable avec 100 % des ouvrières', fmt(cv.tot * cv.cap))
          + `<p class="fz-fp-note">${cv.cap.toLocaleString('fr-FR')} ressources par ouvrière (Étable à pucerons niv. ${cv.bonus})</p>`;
        else if (attente(['convois'])) h += '<p class="fz-fp-note">Lecture des convois…</p>';
        return h;
      },
    };
    const BESOINS = { ponte: ['labo'], militaire: ['labo'], recherche: ['labo'], nourriture: ['constr', 'ress'], materiaux: ['constr', 'ress'], champignonniere: ['ress', 'constr'], troupes: ['armee'], port: ['labo', 'convois'] };
    const html = (z, epingle) => `<div class="fz-fp-titre">${esc(z.titre)}${epingle ? `<a class="fz-fp-page" href="${z.page}" title="Ouvrir la page">›</a><button type="button" class="fz-fp-x" title="Fermer">×</button>` : ''}</div><div class="fz-fp-corps">${RENDU[z.id]()}</div>`;

    const dock = document.createElement('div'); dock.className = 'fz-fourmi-dock'; scene.after(dock);
    const etroit = () => W * k < 600; // petit écran : les panneaux épinglés s'empilent sous la scène
    const epingles = []; // zones épinglées, dans l'ordre d'ouverture
    const chevauche = (a, b) => a.l < b.l + b.w + 6 && b.l < a.l + a.w + 6 && a.t < b.t + b.h + 6 && b.t < a.t + a.h + 6;
    // place un panneau près de sa zone, sans recouvrir les panneaux déjà épinglés (sinon : premier emplacement libre ;
    // s'il n'y en a plus, strict → null et le panneau va sous la scène)
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
      epingles.forEach(z => {
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
    const fermer = (z) => { if (!z.panneau) return; z.panneau.remove(); z.panneau = null; epingles.splice(epingles.indexOf(z), 1); z.el.classList.remove('fz-on', 'fz-pin'); replacer(); };
    const epingler = (z) => {
      cacherApercu(z);
      if (z.panneau) { z.panneau.classList.remove('fz-flash'); void z.panneau.offsetWidth; z.panneau.classList.add('fz-flash'); return; }
      const el = document.createElement('div'); el.className = 'fz-fourmi-panneau fz-pin fz-on';
      el.style.setProperty('--fz-zone', z.c); el.innerHTML = html(z, true);
      el.querySelector('.fz-fp-x').addEventListener('click', (e) => { e.stopPropagation(); fermer(z); });
      z.panneau = el; epingles.push(z); z.el.classList.add('fz-on', 'fz-pin');
      replacer(); preparer(z);
    };
    // v1.68 : entrepôts remplis à plus de 90 % : contour rouge clignotant permanent (la jauge du jeu est relue toutes les 5 s)
    const alertes = () => ZONES.forEach(z => { if (z.id === 'nourriture' || z.id === 'materiaux') { const s = stock(z.id); z.el.classList.toggle('fz-alerte', s.pct != null && s.pct >= SEUIL); } });
    setTimeout(alertes); setInterval(alertes, 5000);
    // le Port spatial suit les comptes à rebours du jeu
    setInterval(() => { const z = ZONES.find(x => x.id === 'port'); if (z.panneau || apercu.zone === z) rafraichir(z); }, 1000);
    window.addEventListener('resize', replacer);
    ZONES.forEach(z => {
      const el = document.createElementNS(NS, 'polygon');
      el.setAttribute('points', z.p.map(q => q.join(',')).join(' '));
      el.style.setProperty('--fz-zone', z.c);
      const titre = document.createElementNS(NS, 'title'); titre.textContent = z.titre; el.appendChild(titre);
      z.el = el;
      // sur écran tactile le navigateur simule mouseenter juste avant le clic : l'aperçu n'est montré qu'à la souris
      el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') montrer(z); });
      el.addEventListener('pointerleave', () => cacherApercu(z));
      el.addEventListener('click', () => epingler(z));
      svg.appendChild(el);
    });
  }
