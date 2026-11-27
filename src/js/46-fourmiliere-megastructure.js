  // ---------- v1.68 : page « Ma Fourmilière » (fourmiliere.php) transformée en mégastructure spatiale ----------
  // La page du jeu empile, dans un div 760×750 : #fourmiliere (décor fond.png + canvas des créatures, animé par
  // script/fourmiliere.js), puis une image transparente porteuse de <map name="vueFourmiliere"> (13 <area>) dont le survol
  // rend visible la bulle table#messageN. Le skin prend la main sur la scène, sans rien supprimer :
  //   1. le décor et le canvas du jeu sont masqués (CSS), l'image à <map> aussi (le <map> reste dans la page) ;
  //   2. décor de la mégastructure : image du joueur (FOURMI_DECOR) ou, en attendant, un plan provisoire dessiné en SVG ;
  //   3. calque animé (canvas) : petits vaisseaux-drones qui circulent dans leur module, plus nombreux quand le palier
  //      du bâtiment monte (paliers 1 à 6 transmis par le jeu dans fourmiliereNiveaux, comme pour les fourmis d'origine) ;
  //   4. calque des zones (SVG, à l'échelle de la scène) : contour néon au survol, bulle du jeu affichée comme le fait
  //      AfficherMessage(), clic = page Construction (simple navigation). Sur écran tactile : 1er appui = bulle, 2e = page.
  // Les zones sont des données (FOURMI_ZONES) : quand la nouvelle image arrivera, seules ces données changent.
  // (déclaration de fonction : remontée dans la portée commune, appelée depuis onReady dans 42-demarrage.js)
  function fourmiliereMegastructure() {
    const jeu = document.getElementById('fourmiliere');
    const scene = jeu && jeu.parentElement;
    if (!scene || scene.classList.contains('fz-fourmi')) return;
    scene.classList.add('fz-fourmi');

    // Image du joueur (750×750, ou 1500×1500 pour un affichage net) : '' = plan provisoire dessiné ci-dessous.
    const FOURMI_DECOR = '';
    // n = numéro de la bulle du jeu (table#messageN), niv = clé du palier dans fourmiliereNiveaux,
    // court = nom affiché sur le plan provisoire, ctr = point d'ancrage imposé (sinon calculé),
    // poly = polygone en pixels de la scène 750×750 (pour l'instant : ceux du <map> du jeu).
    const FOURMI_ZONES = [
      { n: 1, nom: 'Étable à pucerons', court: 'Pucerons', niv: 'nivEtablePuceron', c: '#4ade80', poly: [356,217,414,185,470,206,498,254,460,343,426,341,371,284] },
      { n: 2, nom: 'Étable à cochenilles', court: 'Cochenilles', niv: 'nivEtableCochenille', c: '#a3e635', poly: [660,401,743,407,744,556,715,557,694,499,658,495] },
      { n: 3, nom: 'Champignonnière', court: 'Champignons', niv: 'nivChampignonniere', c: '#f472b6', poly: [27,371,114,355,170,459,67,479] },
      { n: 4, nom: 'Salle de combat', court: 'Combat', niv: 'nivCombat', c: '#ff4d5e', poly: [170,326,265,221,355,294,314,347,195,357] },
      { n: 5, nom: 'Caserne', niv: 'nivCaserne', c: '#ff8a3d', poly: [287,426,327,370,452,423,486,470,427,530] },
      { n: 6, nom: 'Couveuse', niv: 'nivCouveuse', c: '#ffd25a', poly: [37,613,230,700,205,738,87,707,15,640] },
      { n: 7, nom: 'Solarium', niv: 'nivSolarium', c: '#fff27a', poly: [323,93,343,68,395,69,454,150,441,168,381,150,347,198,325,194] },
      { n: 8, nom: 'Laboratoire', niv: 'nivLaboratoire', c: '#b57cff', poly: [531,562,633,570,605,739,526,737,477,643] },
      { n: 9, nom: 'Entrepôt de nourriture', court: 'Nourriture', niv: 'nivEntrepotNourriture', c: '#ffb020', poly: [35,499,185,502,217,449,283,456,288,536,138,591,34,552] },
      { n: 10, nom: 'Entrepôt de matériaux', court: 'Matériaux', niv: 'nivEntrepotMateriaux', c: '#5aa8ff', poly: [502,517,570,373,631,400,633,493,672,542,664,564] },
      { n: 11, nom: 'Dôme', niv: '', c: '#39d0ff', ctr: [466, 122], poly: [216,199,316,25,415,20,537,200,508,218,410,59,328,57,236,219] },
      { n: 12, nom: 'Loge impériale', court: 'Loge', niv: 'nivLoge', c: '#e879f9', poly: [222,641,364,597,433,731,276,725] },
      { n: 13, nom: "Salle d'analyse", court: 'Analyse', niv: 'nivAnalyse', c: '#2dd4bf', poly: [676,583,719,585,742,726,659,727] },
    ];
    const T = 750, NS = 'http://www.w3.org/2000/svg';
    const pts = (z) => { const p = []; for (let i = 0; i < z.poly.length; i += 2) p.push([z.poly[i], z.poly[i + 1]]); return p; };
    const dans = (p, x, y) => { let d = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) { const [xi, yi] = p[i], [xj, yj] = p[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) d = !d; } return d; };
    const centre = (p) => { const x = p.map(q => q[0]), y = p.map(q => q[1]); return [(Math.min(...x) + Math.max(...x)) / 2, (Math.min(...y) + Math.max(...y)) / 2]; };
    // hasard reproductible : même plan et mêmes départs à chaque chargement
    let graine = 1795;
    const hasard = () => { graine = (graine * 16807) % 2147483647; return (graine - 1) / 2147483646; };
    FOURMI_ZONES.forEach(z => { z.p = pts(z); z.ctr = z.ctr || centre(z.p); if (!dans(z.p, z.ctr[0], z.ctr[1])) { for (let k = 0; k < 200; k++) { const x = z.ctr[0] + (hasard() - .5) * 80, y = z.ctr[1] + (hasard() - .5) * 80; if (dans(z.p, x, y)) { z.ctr = [x, y]; break; } } } });

    // paliers transmis par le jeu dans un <script> en ligne (window du jeu inaccessible depuis le userscript : on lit le texte)
    const niveaux = {};
    const src = [...document.scripts].map(s => s.textContent).find(t => /fourmiliereNiveaux/.test(t)) || '';
    (src.match(/\{[^}]*\}/) || [''])[0].replace(/(\w+)\s*:\s*(\d+)/g, (m, k, v) => { niveaux[k] = +v; });
    const palier = (z) => Math.max(1, Math.min(6, niveaux[z.niv] || 1));

    // --- 2. décor ---
    const decor = document.createElement('div'); decor.className = 'fz-fourmi-decor';
    if (FOURMI_DECOR) decor.style.backgroundImage = `url("${FOURMI_DECOR}")`;
    else {
      // plan provisoire : espace profond, étoiles, colonne centrale et modules reliés par des passerelles
      let s = `<svg xmlns="${NS}" viewBox="0 0 ${T} ${T}" width="${T}" height="${T}"><defs>`
        + '<radialGradient id="fzfN1" cx=".25" cy=".3" r=".55"><stop offset="0" stop-color="#3a1f7a" stop-opacity=".55"/><stop offset="1" stop-color="#3a1f7a" stop-opacity="0"/></radialGradient>'
        + '<radialGradient id="fzfN2" cx=".8" cy=".75" r=".5"><stop offset="0" stop-color="#0e5a7a" stop-opacity=".5"/><stop offset="1" stop-color="#0e5a7a" stop-opacity="0"/></radialGradient>'
        + '<linearGradient id="fzfM" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a3a52"/><stop offset=".55" stop-color="#141e30"/><stop offset="1" stop-color="#0a101c"/></linearGradient>'
        + '<linearGradient id="fzfS" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1b2638"/><stop offset=".5" stop-color="#5b6b7e"/><stop offset="1" stop-color="#1b2638"/></linearGradient>'
        + `</defs><rect width="${T}" height="${T}" fill="#03050c"/><rect width="${T}" height="${T}" fill="url(#fzfN1)"/><rect width="${T}" height="${T}" fill="url(#fzfN2)"/>`;
      for (let i = 0; i < 170; i++) s += `<circle cx="${(hasard() * T).toFixed(1)}" cy="${(hasard() * T).toFixed(1)}" r="${(.35 + hasard() * .9).toFixed(2)}" fill="#fff" opacity="${(.3 + hasard() * .6).toFixed(2)}"${i % 6 ? '' : ' class="fz-fourmi-etoile"'}/>`;
      // passerelles : de la colonne centrale vers chaque module
      FOURMI_ZONES.forEach(z => { const [x, y] = z.ctr; s += `<path d="M375 ${y.toFixed(0)}H${x.toFixed(0)}" stroke="#1b2638" stroke-width="7"/><path d="M375 ${y.toFixed(0)}H${x.toFixed(0)}" stroke="${z.c}" stroke-opacity=".35" stroke-width="1" stroke-dasharray="6 5"/>`; });
      s += '<rect x="361" y="18" width="28" height="722" rx="6" fill="url(#fzfS)"/><path d="M375 22V736" stroke="#39d0ff" stroke-opacity=".5" stroke-dasharray="2 9"/>';
      FOURMI_ZONES.forEach(z => {
        const d = z.p.map(q => q.join(',')).join(' '), [x, y] = z.ctr;
        s += `<polygon points="${d}" fill="url(#fzfM)" stroke="${z.c}" stroke-opacity=".55" stroke-width="1.5" stroke-linejoin="round"/>`;
        for (let k = -2; k <= 2; k++) if (dans(z.p, x + k * 9, y + 14)) s += `<rect x="${(x + k * 9 - 2.5).toFixed(1)}" y="${(y + 12).toFixed(1)}" width="5" height="3" fill="${z.c}" opacity=".7"/>`;
        s += `<text x="${x.toFixed(0)}" y="${(y - 6).toFixed(0)}" class="fz-fourmi-nom" fill="${z.c}">${z.court || z.nom}</text>`;
      });
      s += `<text x="742" y="744" class="fz-fourmi-provisoire">plan provisoire</text></svg>`;
      decor.innerHTML = s;
    }

    // --- 3. calque animé : vaisseaux-drones ---
    const cv = document.createElement('canvas'); cv.className = 'fz-fourmi-anim';
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = cv.height = T * dpr;
    const ctx = cv.getContext('2d');
    const drones = [];
    FOURMI_ZONES.forEach(z => {
      const nb = z.niv ? palier(z) : 3; // le Dôme n'a pas de palier : patrouille fixe de 3 drones
      for (let i = 0; i < nb; i++) {
        let x = z.ctr[0], y = z.ctr[1];
        for (let k = 0; k < 60; k++) { const xx = x + (hasard() - .5) * 120, yy = y + (hasard() - .5) * 120; if (dans(z.p, xx, yy)) { x = xx; y = yy; break; } }
        drones.push({ z, x, y, a: hasard() * Math.PI * 2, v: .55 + hasard() * .5, trace: [] });
      }
    });
    const vaisseau = (d) => {
      // traînée du réacteur
      for (let i = 1; i < d.trace.length; i++) {
        ctx.globalAlpha = i / d.trace.length * .45; ctx.strokeStyle = d.z.c; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(d.trace[i - 1][0], d.trace[i - 1][1]); ctx.lineTo(d.trace[i][0], d.trace[i][1]); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.save(); ctx.translate(d.x, d.y); ctx.rotate(d.a);
      const g = ctx.createRadialGradient(-4, 0, 0, -4, 0, 5); g.addColorStop(0, d.z.c); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(-4, 0, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#dfe9f5'; ctx.strokeStyle = d.z.c; ctx.lineWidth = .8;
      ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-4, -3.6); ctx.lineTo(-2, 0); ctx.lineTo(-4, 3.6); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.restore();
    };
    const avancer = (d) => {
      d.a += (hasard() - .5) * .25;
      let nx = d.x + Math.cos(d.a) * d.v, ny = d.y + Math.sin(d.a) * d.v, k = 0;
      while (!dans(d.z.p, nx, ny) && k++ < 4) { d.a += Math.PI * (.8 + hasard() * .4); nx = d.x + Math.cos(d.a) * d.v; ny = d.y + Math.sin(d.a) * d.v; }
      if (dans(d.z.p, nx, ny)) { d.x = nx; d.y = ny; } else { d.x = d.z.ctr[0]; d.y = d.z.ctr[1]; d.trace = []; }
      d.trace.push([d.x, d.y]); if (d.trace.length > 9) d.trace.shift();
    };
    const dessiner = () => { ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, T, T); drones.forEach(vaisseau); };
    // Mouvement réduit demandé par le système, ou test automatisé (navigateur piloté : captures comparées) : scène figée.
    const fige = navigator.webdriver || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
    drones.forEach(d => { for (let i = 0; i < 8; i++) avancer(d); });
    dessiner();
    if (!fige) {
      let avant = 0;
      const boucle = (t) => { if (t - avant >= 33) { avant = t; drones.forEach(avancer); dessiner(); } requestAnimationFrame(boucle); };
      requestAnimationFrame(boucle);
    }

    // --- 4. zones survolables ---
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'fz-fourmi-zones'); svg.setAttribute('viewBox', `0 0 ${T} ${T}`);
    // appui en cours : doigt ou stylet (pas souris), et la bulle de cette zone était-elle déjà ouverte avant l'appui ?
    // (sur écran tactile le navigateur simule mouseenter juste avant le clic : on note l'état dès pointerdown)
    let ouverte = null, appui = null;
    const bulle = (n, vis) => { const b = document.getElementById('message' + n); if (b) b.style.visibility = vis ? 'visible' : 'hidden'; };
    const montrer = (z) => {
      if (ouverte && ouverte !== z) { bulle(ouverte.n, false); ouverte.el.classList.remove('fz-on'); }
      ouverte = z; bulle(z.n, true); z.el.classList.add('fz-on');
    };
    const cacher = (z) => { bulle(z.n, false); z.el.classList.remove('fz-on'); if (ouverte === z) ouverte = null; };
    FOURMI_ZONES.forEach(z => {
      const el = document.createElementNS(NS, 'polygon');
      el.setAttribute('points', z.p.map(q => q.join(',')).join(' '));
      el.style.setProperty('--fz-zone', z.c);
      const titre = document.createElementNS(NS, 'title'); titre.textContent = z.nom; el.appendChild(titre);
      z.el = el;
      el.addEventListener('pointerdown', (e) => { appui = { tactile: e.pointerType !== 'mouse', deja: ouverte === z }; });
      el.addEventListener('mouseenter', () => montrer(z));
      el.addEventListener('mouseleave', () => { if (!(appui && appui.tactile)) cacher(z); });
      el.addEventListener('click', () => {
        if (appui && appui.tactile && !appui.deja) { montrer(z); return; } // 1er appui : la bulle seulement
        location.href = 'construction.php'; // simple navigation vers la page du bâtiment
      });
      svg.appendChild(el);
    });
    // appui en dehors des zones (tactile) : on referme la bulle
    scene.addEventListener('click', (e) => { if (ouverte && e.target.closest && !e.target.closest('.fz-fourmi-zones polygon')) cacher(ouverte); });

    // --- 1. photos « station » dans les bulles (mêmes images que la page Construction) ---
    if (cfg.stationImg) FOURMI_ZONES.forEach(z => {
      const img = document.querySelector(`#message${z.n} img.photo`), uri = CUSTOM_IMG['photo' + (z.n - 1)];
      if (img && uri && !img.dataset.fzSrc) { img.dataset.fzSrc = img.getAttribute('src'); img.src = uri; }
    });

    scene.append(decor, cv, svg);

    // petit écran : la scène (760 px) est réduite pour tenir dans la largeur ; zones et bulles suivent (zoom CSS)
    const ajuster = () => { const c = document.getElementById('centre'); const w = c ? c.clientWidth : innerWidth; const k = Math.min(1, (w - 8) / 760); scene.style.zoom = k < 1 ? k.toFixed(3) : ''; };
    ajuster(); window.addEventListener('resize', ajuster);
  }
