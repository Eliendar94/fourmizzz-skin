  // ---------- v1.68 : page « Ma Fourmilière » (fourmiliere.php) transformée en mégastructure spatiale ----------
  // La page du jeu empile, dans un div 760×750 : #fourmiliere (décor fond.png + canvas des créatures, animé par
  // script/fourmiliere.js), puis une image transparente porteuse de <map name="vueFourmiliere"> (13 <area>) dont le survol
  // rend visible la bulle table#messageN. Le skin prend la main sur la scène, sans rien supprimer :
  //   1. le décor, le canvas, l'image à <map> et les bulles du jeu sont masqués (CSS) mais restent dans la page ;
  //   2. décor : image de la mégastructure (1200×896), dessinée par le joueur ;
  //   3. calque animé (canvas) : petits vaisseaux-drones qui circulent dans leur module, plus nombreux quand le palier
  //      des bâtiments monte (paliers 1 à 6 transmis par le jeu dans fourmiliereNiveaux), et vaisseaux qui partent du
  //      port spatial et y reviennent pour chaque mouvement en cours (chasses, attaques, convois de la boîte Compte +) ;
  //   4. calque des zones (SVG) : contour néon au survol et panneau HUD du module : bâtiments (niveau et effet lus
  //      dans les bulles du jeu), recherches (lues en GET sur laboratoire.php), mouvements (boîte Compte +) ou troupes
  //      (lues en GET sur Armee.php et commerce.php). Clic = page du module (simple navigation) ;
  //      sur écran tactile : 1er appui = panneau, 2e = page.
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
    // Zones (ordre = ordre d'empilement : le central « troupes » d'abord, le Dôme par-dessus). bat = bulles du jeu,
    // rech = recherches (titre sur laboratoire.php), special = panneau propre, drones = nombre fixe (sinon d'après le palier).
    const ZONES = [
      { id: 'troupes', titre: 'Troupes', c: '#c8d3e0', page: 'Armee.php', special: 'troupes', drones: 5,
        poly: [355,314,348,398,355,421,375,443,403,456,419,452,476,470,532,501,584,520,592,527,602,523,648,522,698,513,745,486,782,473,793,465,800,451,824,420,834,394,835,365,812,315,793,290,763,265,720,249,666,223,660,225,660,233,665,245,688,275,689,294,680,315,669,330,649,345,630,352,591,353,545,344,537,340,515,318,499,298,496,274,507,249,524,227,524,224,518,221,497,220,400,264,368,293] },
      { id: 'nourriture', titre: 'Entrepôt de nourriture', c: '#4ade80', page: 'construction.php', bat: [9],
        poly: [450,212,433,186,401,154,362,129,329,115,311,111,285,111,238,117,214,124,189,135,162,155,113,207,88,266,84,300,84,347,88,351,176,348,232,351,315,349,323,338,333,314,357,284,389,258,407,252,442,230,449,221] },
      { id: 'nurserie', titre: 'Nurserie', c: '#ff5a6a', page: 'construction.php', bat: [7, 6], rech: ['Technique de ponte'],
        poly: [395,123,398,132,434,171,453,187,475,212,485,216,499,216,510,211,527,210,554,203,615,200,669,208,693,215,711,215,787,133,784,120,771,95,748,72,718,60,677,56,643,46,526,50,519,44,515,49,485,51,426,80] },
      { id: 'militaire', titre: 'Quartier militaire', c: '#ff8a3d', page: 'construction.php', bat: [5, 4],
        poly: [722,232,724,237,730,233,771,249,807,271,852,323,859,325,880,325,915,316,964,312,980,308,1007,309,1065,301,1095,301,1099,291,1100,254,1084,210,1070,185,1045,165,991,132,935,112,854,110,832,116,778,146,757,164,743,188,727,227] },
      { id: 'etables', titre: 'Étables', c: '#39b8ff', page: 'construction.php', bat: [1, 2],
        poly: [854,347,852,352,856,358,846,407,804,470,805,485,863,536,945,573,977,594,1007,603,1038,605,1058,592,1080,569,1122,502,1125,366,1113,336,1107,330,1089,322,1051,313,980,309] },
      { id: 'materiaux', titre: 'Entrepôt de matériaux', c: '#f9a8d4', page: 'construction.php', bat: [10],
        poly: [910,594,888,575,869,565,848,541,790,510,785,503,776,504,742,520,682,540,618,545,614,553,613,588,617,609,616,648,622,672,626,728,639,762,645,768,686,768,728,759,731,756,731,742,724,722,724,698,736,682,766,660,828,641,887,608,909,604] },
      { id: 'port', titre: 'Port spatial', c: '#8fd8ff', page: 'Armee.php', special: 'port', drones: 3,
        poly: [1151,709,1135,695,1088,675,1037,627,985,607,964,594,953,593,911,608,836,649,816,656,786,661,760,675,735,700,731,711,731,725,738,759,771,807,793,828,869,886,877,890,889,890,910,885,928,875,965,862,1002,853,1055,829,1101,799,1133,769,1152,729] },
      { id: 'recherche', titre: 'Pôle de recherche', c: '#ffd84a', page: 'laboratoire.php', bat: [8, 13], rech: ['Génétique', 'Poison', 'Acide'],
        poly: [181,640,193,659,210,674,241,688,276,699,300,714,346,733,414,753,458,754,530,770,555,771,566,763,574,734,576,683,582,659,578,613,581,549,572,537,517,506,466,484,442,477,396,473,378,480,347,484,315,502,290,512,269,529,267,535,220,581,196,615,188,634] },
      { id: 'champignonniere', titre: 'Champignonnière', c: '#f2f5fa', page: 'construction.php', bat: [3],
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
    // bâtiment : lu dans la bulle du jeu (nom, niveau, effet) ; photo « station » si l'option est active
    const batiment = (n) => {
      const b = document.getElementById('message' + n); if (!b) return null;
      const h = b.querySelector('h2'), txt = b.textContent.replace(/\s+/g, ' ');
      const img = b.querySelector('img.photo');
      return { nom: h ? h.textContent.trim() : '', niv: (txt.match(/niveau\s+(\d+)/i) || [])[1] || '',
        effet: ((txt.match(/Effet\s*:?\s*(.+)$/i) || [])[1] || '').trim(),
        photo: (cfg.stationImg && CUSTOM_IMG['photo' + (n - 1)]) || (img && img.getAttribute('src')) || '' };
    };
    // pages lues en GET (comme Diplomatie / profil), gardées en mémoire de session pour ne pas les relire à chaque survol
    const lirePage = (url, duree) => {
      const cle = 'fzFourmi:' + location.host + ':' + url;
      try { const c = JSON.parse(sessionStorage.getItem(cle) || 'null'); if (c && Date.now() - c.t < duree) return Promise.resolve(new DOMParser().parseFromString(c.h, 'text/html')); } catch (e) {}
      return fetch(url, { credentials: 'same-origin' }).then(r => r.text()).then(h => {
        try { sessionStorage.setItem(cle, JSON.stringify({ t: Date.now(), h })); } catch (e) {}
        return new DOMParser().parseFromString(h, 'text/html');
      });
    };
    const recherches = () => lirePage('laboratoire.php', 3600e3).then(d => {
      const r = {};
      d.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
        const h = tr.querySelector('h2'), n = tr.querySelector('.niveau_amelioration'), ph = tr.querySelector('.photo_recherche');
        if (h) r[h.textContent.trim().toLowerCase()] = { nom: h.textContent.trim(), niv: n ? (n.textContent.match(/\d+/) || [''])[0] : '', photo: ph && cfg.stationImg ? RECHERCHE_IMG[ph.id] || '' : '' };
      });
      return r;
    });
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
      return { titre, c, lib, nb, tps: tps ? tps.textContent.trim() : '', det };
    });
    // troupes : tableau « Troupes en garnison » de Armee.php (colonnes Terrain de chasse / Dôme / Loge) + ouvrières de commerce.php
    const troupes = () => Promise.all([lirePage('Armee.php', 600e3), lirePage('commerce.php', 600e3)]).then(([a, cm]) => {
      const t = [...a.querySelectorAll('#centre table.simulateur')].find(x => /Unités/.test(x.textContent));
      const res = { lieux: [], unites: [] };
      if (t) {
        const rows = [...t.rows], hi = rows.findIndex(r => /Unités/.test(r.textContent));
        const cols = []; let o = 0;
        [...rows[hi].cells].forEach(c => { cols.push([o, o + c.colSpan, c.textContent.replace(/\s+/g, ' ').trim()]); o += c.colSpan; });
        res.lieux = cols.slice(1).map(c => c[2]);
        for (const r of rows.slice(hi + 1)) {
          if (r.cells.length < 2 || /Vie|Dégats|Consommation/i.test(r.cells[0].textContent)) break;
          const c0 = r.cells[0], ab = c0.querySelector('span, small, abbr');
          let nom = c0.textContent.replace(/\s+/g, ' ').trim(); if (ab && ab.textContent.trim() && nom.endsWith(ab.textContent.trim())) nom = nom.slice(0, -ab.textContent.trim().length).trim();
          const v = res.lieux.map(() => 0); let off = c0.colSpan;
          [...r.cells].slice(1).forEach(c => {
            const i = cols.findIndex(col => off >= col[0] && off < col[1]) - 1;
            const s = c.textContent.replace(/\s+/g, ' ').trim();
            if (i >= 0 && /^[\d\s  ]+$/.test(s) && s.replace(/\D/g, '').length) v[i] = Math.max(v[i], parseInt(s.replace(/\D/g, ''), 10));
            off += c.colSpan;
          });
          if (v.some(x => x > 0)) res.unites.push({ nom, v });
        }
      }
      const num = (id) => { const e = cm.getElementById(id); return e ? Math.floor(parseFloat(e.textContent)) || 0 : 0; };
      let bonus = 0; for (const sc of cm.querySelectorAll('script')) { const m = sc.textContent.match(/function\s+maj_input_convoi[\s\S]*?var\s+bonus\s*=\s*(\d+(?:\.\d+)?)/); if (m) { bonus = parseFloat(m[1]); break; } }
      const tot = num('nb_ouvrieres'), tdc = num('quantite_tdc');
      if (tot) { res.ouvr = tot; res.dispo = Math.max(0, tot - Math.min(tot, tdc)); res.cap = res.dispo * 10 * (1 + 0.05 * bonus); }
      return res;
    });

    // --- structure : scène (taille affichée) > étage 1200×896 réduit par zoom CSS (décor, drones, zones) + panneau ---
    const etage = document.createElement('div'); etage.className = 'fz-fourmi-etage';
    const decor = document.createElement('div'); decor.className = 'fz-fourmi-decor'; decor.style.backgroundImage = `url("${DECOR}")`;
    const cv = document.createElement('canvas'); cv.className = 'fz-fourmi-anim';
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'fz-fourmi-zones'); svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const panneau = document.createElement('div'); panneau.className = 'fz-fourmi-panneau';
    etage.append(decor, cv, svg); scene.append(etage, panneau);
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
    mouvements().forEach((m, i) => { if (m) for (let j = 0; j < Math.min(5, m.nb); j++) vols.push({ c: m.c, t: 1.5, x: port.ctr[0], y: port.ctr[1], a: 0, alpha: 0, phase: -(j * 140 + i * 60) - 1, trace: [] }); });
    const voler = (v) => {
      v.phase++;
      if (v.phase < 0) return;
      if (v.phase % 420 === 0) { // départ : cap vers le bas / la droite de l'image
        v.x = port.ctr[0]; v.y = port.ctr[1]; v.trace = [];
        const a = .15 + hasard() * 1.2; v.dx = Math.cos(a) * 2.4; v.dy = Math.sin(a) * 2.4;
      }
      const p = v.phase % 420; // 0-179 aller, 180-239 hors champ, 240-419 retour
      if (p < 180) { v.x += v.dx; v.y += v.dy; v.a = Math.atan2(v.dy, v.dx); v.alpha = Math.min(1, (180 - p) / 40); }
      else if (p < 240) { v.alpha = 0; v.trace = []; }
      else { v.x -= v.dx; v.y -= v.dy; v.a = Math.atan2(-v.dy, -v.dx); v.alpha = Math.min(1, (p - 240) / 40, (420 - p) / 25); }
      v.trace.push([v.x, v.y]); if (v.trace.length > 14) v.trace.shift();
    };
    const dessiner = () => { ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H); drones.forEach(vaisseau); vols.forEach(v => { if (v.alpha > 0) vaisseau(v); }); };
    // Mouvement réduit demandé par le système, ou test automatisé (navigateur piloté : captures comparées) : scène figée.
    const fige = navigator.webdriver || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
    drones.forEach(d => { for (let i = 0; i < 10; i++) avancer(d); });
    dessiner();
    if (!fige) {
      let avant = 0;
      const boucle = (t) => { if (t - avant >= 33) { avant = t; drones.forEach(avancer); vols.forEach(voler); dessiner(); } requestAnimationFrame(boucle); };
      requestAnimationFrame(boucle);
    }

    // --- panneau HUD d'un module ---
    const ligne = (b) => `<div class="fz-fp-item">${b.photo ? `<img src="${esc(b.photo)}" alt="">` : '<i></i>'}<div><b>${esc(b.nom)}</b>${b.niv ? ` <span class="fz-fp-niv">niv. ${esc(b.niv)}</span>` : ''}${b.effet ? `<small>${esc(b.effet)}</small>` : ''}</div></div>`;
    const contenu = (z) => {
      if (z.special === 'port') {
        const ms = mouvements().filter(Boolean);
        if (!ms.length) return '<p class="fz-fp-note">Le résumé des mouvements vient de la boîte Compte + : détail sur les pages Armée, Ressources et Convois.</p>';
        return ms.map(m => `<div class="fz-fp-mouv" style="--fz-zone:${m.c}"><div class="fz-fp-mt"><b>${esc(m.titre)}</b><span>${esc(m.lib)}${m.tps ? ' · ' + esc(m.tps) : ''}</span></div>`
          + (m.det.length ? `<table>${m.det.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</table>` : '') + '</div>').join('');
      }
      if (z.special === 'troupes') {
        if (!z.donnees) return '<p class="fz-fp-note">Lecture des troupes…</p>';
        const t = z.donnees;
        let h = '';
        if (t.unites.length) {
          const tot = t.lieux.map((_, i) => t.unites.reduce((s, u) => s + u.v[i], 0));
          h += `<table class="fz-fp-armee"><tr><th>Unités</th>${t.lieux.map(l => `<th>${esc(l)}</th>`).join('')}</tr>`
            + t.unites.map(u => `<tr><td>${esc(u.nom)}</td>${u.v.map(x => `<td>${x ? fmt(x) : ''}</td>`).join('')}</tr>`).join('')
            + `<tr class="fz-fp-tot"><td>Total</td>${tot.map(x => `<td>${fmt(x)}</td>`).join('')}</tr></table>`;
        } else h += '<p class="fz-fp-note">Aucune unité lue.</p>';
        if (t.ouvr) h += `<div class="fz-fp-ligne"><span>Ouvrières</span><b>${fmt(t.ouvr)}</b></div><div class="fz-fp-ligne"><span>Ouvrières disponibles</span><b>${fmt(t.dispo)}</b></div><div class="fz-fp-ligne"><span>Capacité de livraison</span><b>${fmt(t.cap)}</b></div>`;
        return h;
      }
      let h = z.bat.map(batiment).filter(Boolean).map(ligne).join('');
      if (z.rech) h += z.rech.map(n => { const r = z.donnees && z.donnees[n.toLowerCase()]; return ligne(r || { nom: n, niv: z.donnees ? '' : '…' }); }).join('');
      return h;
    };
    const placer = (z) => {
      const sw = W * k, sh = H * k, pw = Math.min(360, sw - 16);
      panneau.style.width = pw + 'px';
      const ph = panneau.offsetHeight;
      const [x0, y0, x1, y1] = z.box.map(v => v * k);
      let left, top;
      if (sw < 600) { left = (sw - pw) / 2; top = (y0 + y1) / 2 > sh / 2 ? 8 : sh - ph - 8; }
      else {
        left = x1 + 12 + pw <= sw ? x1 + 12 : x0 - 12 - pw >= 0 ? x0 - 12 - pw : (sw - pw) / 2;
        top = Math.max(8, Math.min(sh - ph - 8, (y0 + y1) / 2 - ph / 2));
      }
      panneau.style.left = Math.round(left) + 'px'; panneau.style.top = Math.round(Math.max(0, top)) + 'px';
    };
    const remplir = (z) => {
      panneau.style.setProperty('--fz-zone', z.c);
      panneau.innerHTML = `<div class="fz-fp-titre">${esc(z.titre)}</div>${contenu(z)}`;
      placer(z);
    };
    let ouverte = null, appui = null;
    const montrer = (z) => {
      if (ouverte && ouverte !== z) ouverte.el.classList.remove('fz-on');
      ouverte = z; z.el.classList.add('fz-on'); remplir(z); panneau.classList.add('fz-on');
      // données lues en GET au premier survol, puis le panneau est mis à jour s'il est toujours ouvert
      if (!z.donnees && !z.lecture && (z.rech || z.special === 'troupes')) {
        z.lecture = (z.rech ? recherches() : troupes()).then(d => { z.donnees = d; }, () => { z.donnees = z.rech ? {} : { lieux: [], unites: [] }; })
          .then(() => { if (ouverte === z) remplir(z); });
      }
    };
    const cacher = (z) => { z.el.classList.remove('fz-on'); if (ouverte === z) { ouverte = null; panneau.classList.remove('fz-on'); } };
    ZONES.forEach(z => {
      const el = document.createElementNS(NS, 'polygon');
      el.setAttribute('points', z.p.map(q => q.join(',')).join(' '));
      el.style.setProperty('--fz-zone', z.c);
      const titre = document.createElementNS(NS, 'title'); titre.textContent = z.titre; el.appendChild(titre);
      z.el = el;
      // sur écran tactile le navigateur simule mouseenter juste avant le clic : on note l'état dès pointerdown
      el.addEventListener('pointerdown', (e) => { appui = { tactile: e.pointerType !== 'mouse', deja: ouverte === z }; });
      el.addEventListener('mouseenter', () => montrer(z));
      el.addEventListener('mouseleave', () => { if (!(appui && appui.tactile)) cacher(z); });
      el.addEventListener('click', () => {
        if (appui && appui.tactile && !appui.deja) { montrer(z); return; } // 1er appui : le panneau seulement
        location.href = z.page; // simple navigation vers la page du module
      });
      svg.appendChild(el);
    });
    // appui en dehors des zones (tactile) : on referme le panneau
    scene.addEventListener('click', (e) => { if (ouverte && e.target.closest && !e.target.closest('.fz-fourmi-zones polygon')) cacher(ouverte); });
  }
