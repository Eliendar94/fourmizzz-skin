  // ---------- Page Ressources : « X% du terrain est exploité » → anneau de progression (rouge → vert) ----------
  function terrainRing() {
    const strong = [...document.querySelectorAll('#boite_ouvriere strong')].find(s => /du terrain est exploit/i.test(s.textContent));
    if (!strong || strong.dataset.fzRing) return;
    const m = strong.textContent.match(/(\d+(?:[.,]\d+)?)\s*%/);
    if (!m) return;
    const pct = Math.max(0, Math.min(100, parseFloat(m[1].replace(',', '.'))));
    const hue = Math.round(pct * 1.2);            // 0 = rouge, 120 = vert
    const col = `hsl(${hue},85%,52%)`;
    const R = 26, C = 2 * Math.PI * R, SEG = 10, gap = 3.2;   // 10 segments comme sur l'exemple
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
    // le « : » qui suivait le texte d'origine n'a plus de sens
    const n = strong.nextSibling;
    if (n && n.nodeType === 3) n.textContent = n.textContent.replace(/^\s*:\s*/, ' ');
  }
  // v1.03 : anneaux de remplissage des entrepôts (nourriture, matériaux) sous l'anneau du terrain.
  // Le % vient de la jauge de la boîte d'infos (à gauche) ; couleur du vert (vide) au rouge (plein, la production est perdue).
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
    // v1.10 : quantité en stock (lue dans la boîte d'infos, mise à jour en direct) + icône de la ressource
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
    // v1.04 : les phrases « Votre entrepôt … sera plein dans … » font doublon avec les anneaux : on les masque (leur texte reste lisible par le script)
    const hideFullText = () => {
      const w = document.createTreeWalker(document.getElementById('boite_ouvriere') || document.body, NodeFilter.SHOW_TEXT); let n;
      while ((n = w.nextNode())) if (/entrep.t de (nourriture|mat.riaux) sera plein/i.test(n.textContent) && n.parentElement && n.parentElement.tagName === 'P') n.parentElement.classList.add('fz-hidden-p');
    };
    hideFullText();
    const old = p.querySelector('.fz-rings-stock');
    if (old) { old.querySelectorAll('.fz-ring-qty').forEach(b => { const q = stock(b.dataset.k); if (q && b.textContent !== q) b.textContent = q; });
      // déjà en place : on rafraîchit seulement le texte « plein dans … » (un script tiers peut réécrire ces phrases après coup)
      old.querySelectorAll('.fz-ring-stock').forEach((el, i) => { const sub = full(i ? 'mat.riaux' : 'nourriture'); let sp = el.querySelector('.fz-ring-sub'); if (sub && !sp) { sp = document.createElement('span'); sp.className = 'fz-ring-sub'; el.querySelector('.fz-ring-txt').appendChild(sp); } if (sp && sub) sp.textContent = sub; });
      return;
    }
    const box = document.createElement('span'); box.className = 'fz-rings-stock';
    // v1.09 : titre aux couleurs des icônes de ressource (nourriture verte, matériaux orange) ; l'anneau garde sa couleur d'alerte
    [['nourriture', 'Entrepôt de nourriture', '#7dff9a'], ['matériaux', 'Entrepôt de matériaux', '#ffae42']].forEach(([k, lbl, lc]) => {
      const pct = fill(k === 'matériaux' ? 'mat.riaux' : k); if (pct == null) return;
      box.appendChild(ring(pct, lbl, full(k === 'matériaux' ? 'mat.riaux' : k), lc));
    });
    // la mention « (Vous ne pouvez avoir plus d'une ouvrière par cm²) » est retirée ; les anneaux prennent sa place
    const note = [...p.querySelectorAll('span')].find(sp => /plus d.une ouvri.re par cm/i.test(sp.textContent));
    if (note) { const br = note.nextElementSibling; note.replaceWith(box); if (br && br.tagName === 'BR') br.remove(); }
    else p.appendChild(box);
  }
