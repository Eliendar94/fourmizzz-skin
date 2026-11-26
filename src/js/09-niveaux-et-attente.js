  // Pages Construction / Laboratoire : « niveau 19 » → vignette grise ; « niveau 16 -> 17 » (en cours) → vignette grise › vignette verte.
  // Le texte d'origine reste dans la page (masqué), au cas où un autre script le lirait.
  function levelBadges() {
    // v1.18 : un script tiers peut insérer son bouton entre le niveau et la vignette : la vignette est replacée juste après le niveau
    document.querySelectorAll('#centre span.niveau_amelioration.fz-lvl-src').forEach(sp => { const box = sp.parentElement && sp.parentElement.querySelector('.fz-lvls'); if (box && sp.nextElementSibling !== box) sp.after(box); });
    document.querySelectorAll('#centre span.niveau_amelioration:not(.fz-lvl-src)').forEach(sp => {
      const m = sp.textContent.match(/niveau\s*(\d+)(?:\s*-+>\s*(\d+))?/i); if (!m) return;
      const box = document.createElement('span'); box.className = 'fz-lvls'; box.title = sp.textContent.trim();
      box.innerHTML = m[2] ? `<span class="fz-lvl fz-lvl-up">Niv. ${m[1]} › ${m[2]}</span>` : `<span class="fz-lvl">Niv. ${m[1]}</span>`; // v1.16 : une seule vignette (verte) pendant l'amélioration
      sp.classList.add('fz-lvl-src'); sp.after(box);
    });
    // v1.33 : la vignette est posée sur l'image du bâtiment / de la recherche, en haut à droite
    document.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
      const box = tr.querySelector('.fz-lvls'), photo = tr.querySelector('.photo_batiment, .photo_recherche, .photo_unite');
      if (box && photo && box.parentElement !== photo) { box.classList.add('fz-lvls-photo'); photo.appendChild(box); }
    });
  }
  // Construction / Laboratoire : une seule info d'attente avant lancement — ligne « horloge » : temps d'attente + date/heure de lancement.
  // La ligne « ⏱ … » ajoutée par un script tiers (même info) est masquée ; ses autres messages (ressources disponibles…) restent.
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
      // v1.23 : coût de 0 ouvrière → ligne masquée
      td.querySelectorAll('div.ouvriere').forEach(o => { const tr = o.closest('tr'); if (tr) tr.classList.toggle('fz-hidden-row', /^\s*0\s*$/.test(o.textContent)); });
      // v1.23 : page Laboratoire — le jeu n'y met pas de ligne « horloge » : on la crée à partir de l'info « ⏱ … » du script tiers
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
      // v1.22 : « ⏱ ressources disponibles » masqué aussi (le bouton vert Construire / Rechercher suffit)
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
