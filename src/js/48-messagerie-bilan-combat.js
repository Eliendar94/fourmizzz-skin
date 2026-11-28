  // ---------- Messagerie : bilan des combats et des chasses, à la fin de la conversation ----------
  /* v1.72 : encart récapitulatif sous le dernier rapport d'une conversation (une ou plusieurs étapes, ex. multi-chasse) :
     combats gagnés / perdus, unités tuées et perdues (pertes en % de l'armée engagée, ratio tués / perdus),
     terrain gagné, nourriture des carcasses et rendement (cm² par unité perdue) pour les chasses,
     gain d'XP en Vie / Attaque / Défense (évolutions des unités, en % de l'armée engagée, 2 décimales).
     Les bonus de recherche multiplient toutes les unités de la même façon : les caractéristiques de base suffisent
     pour le pourcentage. Lecture seule du texte des rapports (aucune requête). */
  // caractéristiques de base [Vie, Attaque, Défense], relevées sur la page Reine (S5, 28/11) ; la plus précise d'abord
  /* v1.72 : la somme des Attaques de base de l'armée engagée retombe exactement sur le « Vous infligez N » du rapport
     (combat du 28/11 : 2 349 890), ce qui valide ces valeurs. */
  const RC_STATS = [
    [/jeunes? soldates? naines?/i, [8, 3, 2], 'JSN'],
    [/naines? d.?[ée]lites?/i, [13, 7, 6], 'NE'],
    [/soldates? naines?/i, [10, 5, 4], 'SN'],
    [/soldates? d.?[ée]lites?/i, [27, 24, 23], 'SE'],
    [/jeunes? soldates?/i, [16, 10, 9], 'JS'],
    [/concierges? d.?[ée]lites?/i, null, 'CE'], // inconnues : hors du calcul
    [/concierges?/i, [30, 1, 25], 'C'],
    [/artilleuses? d.?[ée]lites?/i, [12, 35, 18], 'AE'],
    [/artilleuses?/i, [10, 30, 15], 'A'],
    [/tanks? d.?[ée]lites?/i, null, 'TkE'],
    [/tanks?/i, [35, 55, 1], 'Tk'],
    [/tueuses? d.?[ée]lites?/i, [55, 55, 55], 'TE'],
    [/tueuses?/i, [50, 50, 50], 'T'],
    [/soldates?/i, [20, 15, 14], 'S'],
  ];
  // ordre dans lequel les unités meurent (d'après l'utilisateur) : JSN, SN, NE, JS, S, … jusqu'aux Tueuses d'élite
  const RC_ORDRE = ['JSN', 'SN', 'NE', 'JS', 'S', 'C', 'CE', 'A', 'AE', 'SE', 'Tk', 'TkE', 'T', 'TE'];
  const rcUnite = (nom) => RC_STATS.find(([re]) => re.test(nom));
  const rcStats = (nom) => { const hit = rcUnite(nom); return hit ? hit[1] : null; };
  const rcNb = (s) => parseInt(String(s).replace(/[^\d]/g, ''), 10) || 0;
  /* v1.72 : grands nombres abrégés à partir de 8 chiffres (demande de l'utilisateur) :
     10 000 000 → 10.000M, 1 000 000 000 → 1.000G, 1 000 000 000 000 → 1.000T (arrondi à 3 décimales).
     Les % sont toujours calculés sur les valeurs exactes. */
  const rcAbr = (n) => { const a = Math.abs(n); return a >= 1e12 ? (n / 1e12).toFixed(3) + 'T' : a >= 1e9 ? (n / 1e9).toFixed(3) + 'G' : a >= 1e7 ? (n / 1e6).toFixed(3) + 'M' : null; };
  const rcFmt = (n) => rcAbr(Math.round(n)) || Math.round(n).toLocaleString('fr-FR');
  /* dans le texte du jeu : le nombre d'origine reste dans la page (masqué, lisible par les autres scripts et par le bilan),
     l'abréviation est affichée par CSS (::after) et le nombre complet en infobulle */
  const RC_GRAND = /\d{1,3}(?:[ \u00a0\u202f]\d{3}){2,}|\d{8,}/g;
  function rcAbreger(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [];
    let n;
    while ((n = w.nextNode())) if (!n.parentNode.closest('.fz-abr, .fz-bilan') && /\d[ \u00a0\u202f]?\d{3}[ \u00a0\u202f]?\d{3}/.test(n.textContent)) nodes.push(n);
    nodes.forEach(node => {
      const t = node.textContent; let last = 0, frag = null, m;
      RC_GRAND.lastIndex = 0;
      while ((m = RC_GRAND.exec(t))) {
        const abr = rcAbr(rcNb(m[0]));
        if (!abr) continue;
        frag = frag || document.createDocumentFragment();
        frag.appendChild(document.createTextNode(t.slice(last, m.index)));
        const s = document.createElement('span');
        s.className = 'fz-abr'; s.dataset.abr = abr; s.title = m[0];
        s.appendChild(rcSpan('fz-orig', m[0]));
        frag.appendChild(s); last = m.index + m[0].length;
      }
      if (!frag) return;
      frag.appendChild(document.createTextNode(t.slice(last)));
      node.replaceWith(frag);
    });
  }
  function rcAbregerTout() {
    document.querySelectorAll(':is(#messagerie,#fz-sim) div.contenuJoueur:is(.fz-rc,.fz-flood):not(.fz-abr-ok)').forEach(d => { d.classList.add('fz-abr-ok'); rcAbreger(d); });
    document.querySelectorAll('#messagerie a.intitule_message:not(.fz-abr-ok)').forEach(a => { a.classList.add('fz-abr-ok'); rcAbreger(a); });
  }
  const rcPct = (n) => n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '\u202f%';
  // texte d'un rapport ligne par ligne (une ligne par <br>), sans passer par le rendu
  const rcLignes = (d) => d.innerHTML.split(/<br\s*\/?>/i).map(h => h.replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#0?39;|&rsquo;/g, '’')
    .replace(/[\s  ]+/g, ' ').trim()).filter(Boolean);
  // « 386 838 Jeunes Soldates Naines, 16 844 Soldates Naines et 1 997 Naines d’Élites. » → [[n, nom], …]
  const rcArmee = (txt) => txt.replace(/\.\s*$/, '').split(/,\s*|\s+et\s+/).map(p => p.trim().match(/^([\d\s]*\d)\s+(.+)$/)).filter(Boolean).map(m => [rcNb(m[1]), m[2]]);

  // lit un rapport (div.contenuJoueur.fz-rc) et renvoie ses chiffres
  function rcLire(d) {
    const L = rcLignes(d), txt = L.join('\n');
    const r = { chasse: d.classList.contains('fz-rc-chasse'), armee: [], ennemis: 0, tues: 0, perdus: 0, evol: [], victoire: RC_VICTOIRE.test(txt), defaite: RC_DEFAITE.test(txt), cm2: 0, nourriture: 0 };
    const defense = /attaque votre/i.test(L[0] || ''); // on est attaqué : nos troupes sont celles « en défense »
    const mien = L.find(l => (defense ? /^Troupes en d[ée]fense\s*:/i : /^Troupes en attaque\s*:/i).test(l));
    if (mien) r.armee = rcArmee(mien.replace(/^[^:]*:\s*/, ''));
    // v1.72 : armée adverse (joueur ou insectes), pour le % d'unités tuées
    const autre = L.find(l => (defense ? /^Troupes en attaque\s*:/i : /^Troupes en d[ée]fense\s*:/i).test(l));
    if (autre) r.ennemis = rcArmee(autre.replace(/^[^:]*:\s*/, '')).reduce((s, [n]) => s + n, 0);
    L.forEach(l => {
      let m;
      if ((m = l.match(/\btuez\s+([\d\s]*\d)/i))) r.tues += rcNb(m[1]);
      if ((m = l.match(/\ben tue\s+([\d\s]*\d)/i))) r.perdus += rcNb(m[1]);
      if ((m = l.match(/^-?\s*([\d\s]*\d)\s+(.+?)\s+(?:sont|est)\s+devenues?\s+(?:des\s+|une\s+)?(.+?)[.!\s]*$/i))) r.evol.push([rcNb(m[1]), m[2], m[3]]);
      if ((m = l.match(/conquis\s+([\d\s]*\d)\s*cm/i))) r.cm2 += rcNb(m[1]);
      if ((m = l.match(/carcasses[^\d]*([\d\s]*\d)/i))) r.nourriture += rcNb(m[1]);
    });
    return r;
  }

  function rcBilan(rs) {
    const b = { etapes: rs.length, victoires: 0, defaites: 0, tues: 0, perdus: 0, engages: 0, ennemis: 0, cm2: 0, nourriture: 0, chasse: rs.some(r => r.chasse), base: [0, 0, 0], gain: [0, 0, 0], perte: [0, 0, 0], evolues: 0, inconnu: false };
    rs.forEach(r => {
      if (r.victoire) b.victoires++; else if (r.defaite) b.defaites++;
      b.tues += r.tues; b.ennemis += r.ennemis; b.perdus += r.perdus; b.cm2 += r.cm2; b.nourriture += r.nourriture;
      r.armee.forEach(([n, nom]) => { b.engages += n; const s = rcStats(nom); if (s) s.forEach((v, i) => { b.base[i] += n * v; }); else b.inconnu = true; });
      /* v1.72 : les pertes retirent les unités dans l'ordre RC_ORDRE (les JSN d'abord) : caractéristiques perdues */
      let reste = r.perdus;
      r.armee.map(([n, nom]) => [n, nom, RC_ORDRE.indexOf((rcUnite(nom) || [])[2])])
        .sort((x, y) => (x[2] < 0 ? 99 : x[2]) - (y[2] < 0 ? 99 : y[2]))
        .forEach(([n, nom]) => {
          const k = Math.min(n, reste); reste -= k;
          if (!k) return;
          const st = rcStats(nom);
          if (st) st.forEach((v, i) => { b.perte[i] += k * v; }); else b.inconnu = true;
        });
      r.evol.forEach(([n, de, vers]) => {
        b.evolues += n;
        const s1 = rcStats(de), s2 = rcStats(vers);
        if (s1 && s2) s1.forEach((v, i) => { b.gain[i] += n * (s2[i] - v); }); else b.inconnu = true;
      });
    });
    return b;
  }

  function rcEncart(b) {
    const ligne = (lib, val, cls) => `<div class="fz-bilan-l"><span class="fz-bilan-lib">${lib}</span><span class="fz-bilan-val ${cls || ''}">${val}</span></div>`;
    let h = `<div class="fz-bilan-titre">Bilan${b.etapes > 1 ? ' des ' + b.etapes + ' ' + (b.chasse ? 'chasses' : 'combats') : b.chasse ? ' de la chasse' : ' du combat'}</div><div class="fz-bilan-grille">`;
    if (b.etapes > 1) h += ligne('Résultat', `<span class="fz-bilan-plus">${b.victoires} victoire${b.victoires > 1 ? 's' : ''}</span> / <span class="fz-bilan-moins">${b.defaites} défaite${b.defaites > 1 ? 's' : ''}</span>`);
    h += ligne('Unités tuées', rcFmt(b.tues) + (b.ennemis ? ` <small>(${rcPct(b.tues / b.ennemis * 100)} des ${rcFmt(b.ennemis)} ennemies engagées)</small>` : ''), 'fz-bilan-plus');
    h += ligne('Unités perdues', rcFmt(b.perdus) + (b.engages ? ` <small>(${rcPct(b.perdus / b.engages * 100)} des ${rcFmt(b.engages)} unités engagées)</small>` : ''), 'fz-bilan-moins');
    h += ligne('Ratio tuées / perdues', b.perdus ? (b.tues / b.perdus).toLocaleString('fr-FR', { maximumFractionDigits: 2 }) : '∞');
    if (b.cm2) h += ligne('Terrain gagné', '+' + rcFmt(b.cm2) + ' cm²', 'fz-bilan-plus');
    if (b.chasse) {
      if (b.nourriture) h += ligne('Nourriture (carcasses)', rcFmt(b.nourriture));
      if (b.cm2) h += ligne('Rendement', b.perdus ? rcFmt(b.cm2 / b.perdus) + ' cm² par unité perdue' : 'aucune perte');
    }
    /* v1.72 : évolution de l'armée (base = armée engagée au départ) : pertes, XP des évolutions, bilan.
       Bouclier (Vie), Arme (Attaque et Défense), Dôme et Loge multiplient toutes les unités du même facteur :
       les pourcentages sont les mêmes avec ou sans les bonus. */
    h += '</div>';
    if (b.base[0] && (b.perdus || b.evolues)) {
      const pc = (x, i) => b.base[i] ? x / b.base[i] * 100 : 0;
      const cell = (v) => `<td class="fz-bilan-${v < 0 ? 'moins' : v > 0 ? 'plus' : 'nul'}">${v > 0 ? '+' : v < 0 ? '−' : ''}${rcPct(Math.abs(v))}</td>`;
      const rang = (lib, f) => `<tr><th>${lib}</th>${[0, 1, 2].map(i => cell(f(i))).join('')}</tr>`;
      h += `<table class="fz-bilan-armee"><tr><th></th><th>Vie</th><th>Attaque</th><th>Défense</th></tr>`
        + rang('Pertes', i => -pc(b.perte[i], i))
        + rang('XP' + (b.evolues ? ' <small>(' + rcFmt(b.evolues) + ' évolutions)</small>' : ''), i => pc(b.gain[i], i))
        + rang('Bilan', i => pc(b.gain[i] - b.perte[i], i))
        + `</table>` + (b.inconnu ? '<div class="fz-bilan-note">≈ Concierges et Tanks d’élite : caractéristiques inconnues, hors calcul.</div>' : '');
    }
    return h;
  }

  function bilanCombats() {
    document.querySelectorAll('#messagerie tr.contenu_conversation, #fz-sim').forEach(tr => {
      const rapports = [...tr.querySelectorAll('div.contenuJoueur.fz-rc')]; // (floods : le titre donne déjà le total)
      let box = tr.querySelector('.fz-bilan');
      if (!rapports.length) { if (box) box.remove(); return; }
      const cle = rapports.length + ':' + rapports.map(d => d.textContent.length).join(',');
      if (box && box.dataset.cle === cle) return; // déjà à jour
      const html = rcEncart(rcBilan(rapports.map(rcLire)));
      if (!box) {
        box = document.createElement('div');
        box.className = 'fz-bilan';
        // sous le dernier rapport de la conversation
        const derniere = rapports[rapports.length - 1];
        derniere.closest('#fz-sim, td').appendChild(box);
      } else if (!rapports[rapports.length - 1].closest('#fz-sim, td').contains(box)) rapports[rapports.length - 1].closest('#fz-sim, td').appendChild(box);
      box.dataset.cle = cle;
      box.innerHTML = html;
    });
  }

  // ---------- Messagerie : cm² des floods en couleur (gain vert, perte rouge) ----------
  /* v1.72 : titres « Butin chez X : 21 075 cm² » (gain) et « Vol par X : 97 753 cm² » (perte) */
  /* corps des floods (relevé S5 le 28/11) :
       Butin : « Vos fourmis ont <strong>conquis 47 661 cm²</strong> lors de leur dernière bataille. Ces terres appartenaient à X. »
       Vol   : « X vous a pris 33 061 cm² lors de sa dernière attaque. » */
  const FLOOD_GAIN = /conquis\s+[\d\s\u00a0\u202f]*\d\s*cm²\s+lors de leur derni[èe]re bataille/i;
  const FLOOD_PERTE = /vous a pris\s+[\d\s\u00a0\u202f]*\d\s*cm²/i;
  const floodSens = (d) => FLOOD_GAIN.test(d.textContent) ? 1 : FLOOD_PERTE.test(d.textContent) ? -1 : 0;
  function rcColorCm2(el, sens) {
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      const m = n.textContent.match(/[\d\s\u00a0\u202f]*\d\s*cm²/);
      if (!m) continue;
      const i = m.index + (m[0].length - m[0].trimStart().length); // sans l'espace de tête
      const x = n.splitText(i); x.splitText(m[0].trimStart().length);
      x.replaceWith(rcSpan('fz-flood-cm2 fz-bilan-' + sens, m[0].trimStart()));
      return;
    }
  }
  function colorFloods() {
    document.querySelectorAll('#messagerie div.contenuJoueur:not(.fz-flood-b)').forEach(d => {
      d.classList.add('fz-flood-b');
      const sens = floodSens(d);
      if (sens) { d.classList.add('fz-flood'); rcColorCm2(d, sens > 0 ? 'plus' : 'moins'); }
    });
    document.querySelectorAll('#messagerie a.intitule_message:not(.fz-flood-ok)').forEach(a => {
      const sens = /^\s*butin\b/i.test(a.textContent) ? 'plus' : /^\s*vol\b/i.test(a.textContent) ? 'moins' : '';
      a.classList.add('fz-flood-ok');
      if (!sens) return;
      rcColorCm2(a, sens);
    });
  }

  // ---------- Simulateur de combat (Compte +) : mêmes couleurs et même bilan que dans la Messagerie ----------
  /* v1.72 : après une simulation, simulateur.php affiche « Message que recevrait l'attaquant: » (<h2>) suivi du texte du
     rapport en nœuds libres dans le <form>, jusqu'à <div class="Bas">. On regroupe ces nœuds (sans les modifier) dans
     <div id="fz-sim"><div class="contenuJoueur">…</div></div> pour les traiter comme un rapport de la Messagerie.
     Le bouton « Lancer l'Attaque ! » et le formulaire ne sont pas touchés. */
  function simulateurCombat() {
    if (!/\/simulateur\.php/i.test(location.pathname) || document.getElementById('fz-sim')) return;
    const h2 = [...document.querySelectorAll('#centre h2')].find(h => /Message que recevrait/i.test(h.textContent));
    if (!h2) return;
    const boite = document.createElement('div'); boite.id = 'fz-sim';
    const corps = document.createElement('div'); corps.className = 'contenuJoueur';
    boite.appendChild(corps);
    let n = h2.nextSibling;
    while (n && !(n.nodeType === 1 && (n.matches('div.Bas, h2, table, fieldset, form')))) { const s = n.nextSibling; corps.appendChild(n); n = s; }
    if (!/Troupes en/i.test(corps.textContent)) { while (corps.firstChild) h2.parentNode.insertBefore(corps.firstChild, n); return; } // pas de rapport : on remet tout
    h2.parentNode.insertBefore(boite, n);
    colorCombatReports();
  }
