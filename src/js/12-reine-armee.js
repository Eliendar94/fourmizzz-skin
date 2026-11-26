  // v1.30 : page Reine — « Après pontes : X (+Y) » remplacé par une vignette sur la photo de l'unité :
  // « armée actuelle + abréviation (+ en file de ponte) », arrondi au supérieur en K / M / G / T.
  const UNIT_ABBR = [[/^ouvri/i,'OUV'],[/^jeune soldate naine/i,'JSN'],[/^soldate naine/i,'SN'],[/^naine/i,'NE'],[/^jeune soldate/i,'JS'],[/^soldate d/i,'SE'],[/^soldate/i,'S'],[/^concierge d/i,'CE'],[/^concierge/i,'C'],[/^artilleuse d/i,'AE'],[/^artilleuse/i,'A'],[/^tank d/i,'TkE'],[/^tank/i,'Tk'],[/^tueuse d/i,'TE'],[/^tueuse/i,'T']];
  const fmtKMGT = (v) => {
    const U = [[1e12,'T'],[1e9,'G'],[1e6,'M'],[1e3,'K']];
    for (const [b, u] of U) if (v >= b) return (Math.ceil(v / b * 100) / 100).toFixed(2) + u;
    return String(v);
  };
  // v1.42 : nouvelles illustrations des unités (page Reine), repérées par l'abréviation de l'unité
  const UNIT_PHOTOS = {
    OUV: __ASSET__('unites/ouvriere.jpg'),
    JSN: __ASSET__('unites/jeune-soldate-naine.jpg'),
    SN: __ASSET__('unites/soldate-naine.jpg'),
    NE: __ASSET__('unites/naine.jpg'),
    JS: __ASSET__('unites/jeune-soldate.jpg'),
    S: __ASSET__('unites/soldate.jpg'),
    SE: __ASSET__('unites/soldate-elite.jpg'),
    CE: __ASSET__('unites/concierge-elite.jpg'),
    A: __ASSET__('unites/artilleuse.jpg'),
    AE: __ASSET__('unites/artilleuse-elite.jpg'),
  };
  // v1.44 : page Reine — bouton « Copier mon armée » (unités de combat, hors ouvrières, au format « 386 838 Jeunes Soldates Naines, … »)
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
