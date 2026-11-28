  // ---------- Messagerie : couleurs des rapports de combat ----------
  /* v1.71 : rapport ouvert (div.contenuJoueur du jeu, relevé sur S5 le 28/11) :
       <strong>Vous attaquez le Terrain de Chasse de <a>X</a></strong> | <strong><a>X</a> attaque votre Terrain de chasse</strong> :
       Troupes en attaque : 43 053 Jeunes Soldates Naines.   Troupes en défense : 1 Jeune Soldate Naine.
       Vous infligez <strong>129 159 (+ 142 075)</strong> dégâts et tuez <strong>1</strong> ennemie.
       L’ennemie inflige <strong>1 (+ 1)</strong> dégâts à vos fourmis et en tue <strong>0</strong>.
       phrase d'ambiance, puis <strong>Vous avez gagné cette bataille !</strong>
                              ou <strong>Vos troupes ont échoué, l’ennemi pénètre vos défenses.</strong>
     Lieu : Terrain de Chasse rouge, Dôme / Fourmilière orange, Loge impériale vert (couleurs de destination de ponte).
     Bonus de la recherche Arme (entre parenthèses) en vert, nombre d'unités tuées (pertes) en rouge,
     troupes aux couleurs de la page Armée (UNIT_COLORS), conclusion verte si victoire, rouge sinon.
     Seul le texte est enveloppé dans des <span> : le texte d'origine reste lisible par les autres scripts. */
  const RC_LIEUX = [
    [/terrain de chasse/i, 'tdc'],
    [/d[ôo]me|fourmili[èe]re/i, 'dome'],
    [/loge imp[ée]riale/i, 'loge'],
  ];
  const RC_VICTOIRE = /vous avez gagn[ée] cette bataille/i;
  const RC_DEFAITE = /vos troupes ont [ée]chou[ée]|l.ennemi p[ée]n[èe]tre vos d[ée]fenses/i;
  const rcSpan = (cls, txt) => { const s = document.createElement('span'); s.className = cls; s.textContent = txt; return s; };

  // une ligne « Troupes en … : N Unité, N Unité et N Unité. » → chaque « N Unité » à la couleur de l'unité
  function rcTroupes(node) {
    const m = node.textContent.match(/^(\s*Troupes en [^:]*:\s*)([\s\S]*)$/i);
    if (!m) return;
    const frag = document.createDocumentFragment();
    frag.appendChild(rcSpan('fz-rc-troupes', m[1]));
    m[2].split(/(,\s*|\s+et\s+)/).forEach((part, i) => {
      if (i % 2) { frag.appendChild(document.createTextNode(part)); return; } // séparateur
      const p = part.match(/^(\s*)([\s\S]*?)([.\s]*)$/);
      const hit = p[2] && UNIT_COLORS.find(([re]) => re.test(p[2]));
      if (p[1]) frag.appendChild(document.createTextNode(p[1]));
      if (hit) {
        // le nombre (« 43 053 ») ne doit pas être coupé en fin de ligne sur téléphone
        const q = p[2].match(/^([\d\s\u00a0\u202f]*\d)(\s+[\s\S]*)$/);
        const s = rcSpan('fz-unit fz-rc-unite', q ? '' : p[2]); s.style.color = hit[1];
        if (q) { s.appendChild(rcSpan('fz-rc-nb', q[1])); s.appendChild(document.createTextNode(q[2])); }
        frag.appendChild(s);
      }
      else if (p[2]) frag.appendChild(document.createTextNode(p[2]));
      if (p[3]) frag.appendChild(document.createTextNode(p[3]));
    });
    node.replaceWith(frag);
  }

  function colorCombatReports() {
    document.querySelectorAll('#messagerie div.contenuJoueur:not(.fz-rc)').forEach(d => {
      if (!/Troupes en attaque/i.test(d.textContent) || !/inflige/i.test(d.textContent)) return; // pas un rapport de combat
      d.classList.add('fz-rc');
      const strongs = [...d.querySelectorAll('strong')];
      // 1. lieu du combat, dans le titre du rapport (premier <strong>)
      const tete = strongs[0];
      if (tete) {
        const w = document.createTreeWalker(tete, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = w.nextNode())) {
          const lieu = RC_LIEUX.map(([re, k]) => [n.textContent.match(re), k]).find(([mm]) => mm);
          if (!lieu) continue;
          const [mm, k] = lieu, a = n.splitText(mm.index);
          a.splitText(mm[0].length);
          a.replaceWith(rcSpan('fz-rc-lieu fz-rc-' + k, mm[0]));
          d.classList.add('fz-rc-zone-' + k);
          tete.classList.add('fz-rc-titre');
          break;
        }
      }
      // 2. dégâts « 129 159 (+ 142 075) » : bonus Arme en vert ; 3. unités tuées en rouge
      strongs.forEach(s => {
        const t = s.textContent;
        const dg = t.match(/^([\s\S]*?)(\(\s*\+[\s\S]*\))\s*$/);
        if (dg && s.children.length === 0) {
          s.textContent = dg[1];
          s.appendChild(rcSpan('fz-rc-bonus', dg[2]));
          s.classList.add('fz-rc-degats');
          return;
        }
        const avant = s.previousSibling;
        if (/^[\d\s  ]+$/.test(t) && avant && avant.nodeType === 3 && /\btu(ez|e)\s*$/i.test(avant.textContent)) s.classList.add('fz-rc-tues');
        // 4. conclusion du rapport
        if (RC_VICTOIRE.test(t)) s.classList.add('fz-rc-fin', 'fz-rc-victoire');
        else if (RC_DEFAITE.test(t)) s.classList.add('fz-rc-fin', 'fz-rc-defaite');
      });
      // 5. troupes engagées
      [...d.childNodes].filter(n => n.nodeType === 3 && /^\s*Troupes en /i.test(n.textContent)).forEach(rcTroupes);
    });
  }
