  // Easter egg : carte de XaTaK affichée sous son pseudo, au-dessus du panneau « Informations »
  const XATAK_CARD = __ASSET__('membre/carte-xatak.webp');
  function easterEggXatak() {
    const h2 = document.querySelector('#centre center > h2');
    if (!h2 || h2.textContent.trim().toLowerCase() !== 'xatak' || document.querySelector('#centre .fz-egg')) return;
    const box = h2.parentElement.querySelector('.boite_membre'); if (!box) return;
    const d = document.createElement('div'); d.className = 'fz-egg';
    const img = document.createElement('img'); img.src = XATAK_CARD; img.alt = 'XaTaK'; img.title = 'XaTaK';
    d.appendChild(img); box.before(d);
  }
  // Page Membre : « Temps de trajet » coloré du vert (< 1h) au rouge (> 10h), en passant par le jaune et l'orange
  function colorTravelTime() {
    document.querySelectorAll('#centre .boite_membre tr').forEach(tr => {
      if (!/temps de trajet/i.test((tr.cells[0] && tr.cells[0].textContent) || '')) return;
      const td = tr.cells[1]; if (!td) return;
      const t = td.textContent;
      const n = re => { const m = t.match(re); return m ? +m[1] : 0; };
      const h = n(/(\d+)\s*J/i) * 24 + n(/(\d+)\s*H/) + n(/(\d+)\s*m/) / 60 + n(/(\d+)\s*s/) / 3600;
      const k = Math.min(1, Math.max(0, (h - 1) / 9));
      td.classList.add('fz-trajet');
      td.style.setProperty('color', `hsl(${Math.round(140 * (1 - k))},85%,60%)`, 'important');
    });
  }
