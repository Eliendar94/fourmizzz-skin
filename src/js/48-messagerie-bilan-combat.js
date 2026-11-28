  // ---------- Messagerie : bilan des combats et des chasses, à la fin de la conversation ----------
  /* v1.72 : encart récapitulatif sous le dernier rapport d'une conversation (une ou plusieurs étapes, ex. multi-chasse) :
     combats gagnés / perdus, unités tuées et perdues (pertes en % de l'armée engagée, ratio tués / perdus),
     terrain gagné, nourriture des carcasses et rendement (cm² par unité perdue) pour les chasses,
     gain d'XP en Vie / Attaque / Défense (évolutions des unités, en % de l'armée engagée, 2 décimales).
     Les bonus de recherche multiplient toutes les unités de la même façon : les caractéristiques de base suffisent
     pour le pourcentage. Lecture seule du texte des rapports (aucune requête). */
  // caractéristiques de base [Vie, Attaque, Défense], relevées sur la page Reine (S5, 28/11) ; la plus précise d'abord
  const RC_STATS = [
    [/jeunes? soldates? naines?/i, [8, 3, 2]],
    [/naines? d.?[ée]lites?/i, [13, 7, 6]],
    [/soldates? naines?/i, [10, 5, 4]],
    [/soldates? d.?[ée]lites?/i, [27, 24, 23]],
    [/jeunes? soldates?/i, [16, 10, 9]],
    [/concierges? d.?[ée]lites?/i, null], // inconnues : hors du calcul d'XP
    [/concierges?/i, [30, 1, 25]],
    [/artilleuses? d.?[ée]lites?/i, [12, 35, 18]],
    [/artilleuses?/i, [10, 30, 15]],
    [/tanks? d.?[ée]lites?/i, null],
    [/tanks?/i, [35, 55, 1]],
    [/tueuses? d.?[ée]lites?/i, [55, 55, 55]],
    [/tueuses?/i, [50, 50, 50]],
    [/soldates?/i, [20, 15, 14]],
  ];
  const rcStats = (nom) => { const hit = RC_STATS.find(([re]) => re.test(nom)); return hit ? hit[1] : null; };
  const rcNb = (s) => parseInt(String(s).replace(/[^\d]/g, ''), 10) || 0;
  const rcFmt = (n) => Math.round(n).toLocaleString('fr-FR');
  const rcPct = (n) => n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' %';
  // texte d'un rapport ligne par ligne (une ligne par <br>), sans passer par le rendu
  const rcLignes = (d) => d.innerHTML.split(/<br\s*\/?>/i).map(h => h.replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#0?39;|&rsquo;/g, '’')
    .replace(/[\s  ]+/g, ' ').trim()).filter(Boolean);
  // « 386 838 Jeunes Soldates Naines, 16 844 Soldates Naines et 1 997 Naines d’Élites. » → [[n, nom], …]
  const rcArmee = (txt) => txt.replace(/\.\s*$/, '').split(/,\s*|\s+et\s+/).map(p => p.trim().match(/^([\d\s]*\d)\s+(.+)$/)).filter(Boolean).map(m => [rcNb(m[1]), m[2]]);

  // lit un rapport (div.contenuJoueur.fz-rc) et renvoie ses chiffres
  function rcLire(d) {
    const L = rcLignes(d), txt = L.join('\n');
    const r = { chasse: d.classList.contains('fz-rc-chasse'), armee: [], tues: 0, perdus: 0, evol: [], victoire: RC_VICTOIRE.test(txt), defaite: RC_DEFAITE.test(txt), cm2: 0, nourriture: 0 };
    const defense = /attaque votre/i.test(L[0] || ''); // on est attaqué : nos troupes sont celles « en défense »
    const mien = L.find(l => (defense ? /^Troupes en d[ée]fense\s*:/i : /^Troupes en attaque\s*:/i).test(l));
    if (mien) r.armee = rcArmee(mien.replace(/^[^:]*:\s*/, ''));
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
    const b = { etapes: rs.length, victoires: 0, defaites: 0, tues: 0, perdus: 0, engages: 0, cm2: 0, nourriture: 0, chasse: rs.some(r => r.chasse), base: [0, 0, 0], gain: [0, 0, 0], evolues: 0, inconnu: false };
    rs.forEach(r => {
      if (r.victoire) b.victoires++; else if (r.defaite) b.defaites++;
      b.tues += r.tues; b.perdus += r.perdus; b.cm2 += r.cm2; b.nourriture += r.nourriture;
      r.armee.forEach(([n, nom]) => { b.engages += n; const s = rcStats(nom); if (s) s.forEach((v, i) => { b.base[i] += n * v; }); else b.inconnu = true; });
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
    h += ligne('Unités tuées', rcFmt(b.tues), 'fz-bilan-plus');
    h += ligne('Unités perdues', rcFmt(b.perdus) + (b.engages ? ` <small>(${rcPct(b.perdus / b.engages * 100)} de ${rcFmt(b.engages)} engagées)</small>` : ''), 'fz-bilan-moins');
    h += ligne('Ratio tuées / perdues', b.perdus ? (b.tues / b.perdus).toLocaleString('fr-FR', { maximumFractionDigits: 2 }) : '∞');
    if (b.cm2) h += ligne('Terrain gagné', '+' + rcFmt(b.cm2) + ' cm²', 'fz-bilan-plus');
    if (b.chasse) {
      if (b.nourriture) h += ligne('Nourriture (carcasses)', rcFmt(b.nourriture));
      if (b.cm2) h += ligne('Rendement', b.perdus ? rcFmt(b.cm2 / b.perdus) + ' cm² par unité perdue' : 'aucune perte');
    }
    if (b.evolues) {
      const xp = ['Vie', 'Attaque', 'Défense'].map((lib, i) => `<span class="fz-bilan-xp">${lib} <b class="fz-bilan-plus">+${rcPct(b.base[i] ? b.gain[i] / b.base[i] * 100 : 0)}</b></span>`).join('');
      h += ligne('XP (' + rcFmt(b.evolues) + ' évolutions)', xp + (b.inconnu ? ' <small title="Concierges et Tanks d’élite : caractéristiques inconnues">≈</small>' : ''));
    }
    return h + '</div>';
  }

  function bilanCombats() {
    document.querySelectorAll('#messagerie tr.contenu_conversation').forEach(tr => {
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
        derniere.closest('td').appendChild(box);
      } else if (!rapports[rapports.length - 1].closest('td').contains(box)) rapports[rapports.length - 1].closest('td').appendChild(box);
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
