  // ---------- v1.66 : Construction / Laboratoire — effets mis en valeur, description repliable sur téléphone ----------
  // Dans chaque bloc de description du jeu (div[id^=descriptionComplete]) : le texte d'ambiance (jusqu'au premier <br>)
  // est regroupé dans span.fz-desc-txt, chaque ligne d'effet (« Effet : … », « Capacité actuelle : … », « Production … : … »)
  // dans span.fz-effet, et ses valeurs chiffrées dans b.fz-val (gras vert, sur ordinateur comme sur téléphone).
  // Le texte reste identique dans la page (seulement découpé en balises). Sur téléphone (< 61em), le jeu cache tout ce
  // bloc : le skin l'affiche de nouveau, sans le texte d'ambiance, que le bouton « Info+ » fait apparaître.
  // (déclaration de fonction : remontée dans la portée commune, appelée depuis onReady dans 42-demarrage.js)
  function batimentsEffets() {
    const NUM = /[+\-]?\d[\d   ]*(?:[.,]\d+)?\s?%?/g;
    document.querySelectorAll('#centre tr.ligneAmelioration:is(:has(.photo_batiment),:has(.photo_recherche)) [id^="descriptionComplete"]').forEach(d => {
      if (d.dataset.fzEffets) return; d.dataset.fzEffets = '1';
      // 1. texte d'ambiance : tout ce qui précède le premier <br>
      const br = [...d.childNodes].find(n => n.nodeName === 'BR');
      if (br && br.previousSibling) {
        const sp = document.createElement('span'); sp.className = 'fz-desc-txt';
        d.insertBefore(sp, d.firstChild);
        while (sp.nextSibling && sp.nextSibling !== br) sp.appendChild(sp.nextSibling);
      }
      // 2. lignes d'effet : nœuds texte de la forme « libellé : valeur » ; seules les valeurs après « : » sont mises en gras
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
      // 3. bouton « Info+ » (affiché sur téléphone seulement, par le CSS)
      const td = d.closest('td');
      if (td && d.querySelector('.fz-desc-txt') && !td.querySelector('.fz-desc-btn')) td.insertBefore(infoButton(td), d);
    });
  }
