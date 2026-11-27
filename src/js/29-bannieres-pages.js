  // v1.45 : bannière illustrée en tête de page (même cadre que le paysage de la page Ressources), titre intégré
  const PAGE_HEROES = { construction: { title: 'Construction', img: __ASSET__('bannieres/construction.jpg') },
    laboratoire: { title: 'Laboratoire', img: __ASSET__('bannieres/laboratoire.jpg') } };
  function pageHero() {
    const key = Object.keys(PAGE_HEROES).find(k => new RegExp(k + '\\.php', 'i').test(location.pathname)); if (!key) return;
    const c = document.getElementById('centre'); if (!c || c.querySelector('.fz-page-hero')) return;
    const nav = c.querySelector(':scope > nav'); const h = PAGE_HEROES[key];
    const d = document.createElement('div'); d.className = 'fz-page-hero';
    d.style.setProperty('--fz-hero-img', `url("${h.img}")`);
    d.innerHTML = `<div class="fz-page-hero-head"><span class="fz-page-hero-title">${h.title}</span></div>` + ['tl', 'tr', 'bl', 'br'].map(k => `<i class="fz-hero-c fz-hero-${k}"></i>`).join('');
    if (nav && nav.nextSibling) c.insertBefore(d, nav.nextSibling); else c.prepend(d);
    // v1.46 : les lignes d'avertissement (« Solarium 17 se termine dans … » + date de fin) passent dans la bannière, sous le titre
    const info = document.createElement('div'); info.className = 'fz-page-hero-info';
    let n = d.nextSibling; const moved = [];
    while (n && !(n.nodeType === 1 && (n.tagName === 'TABLE' || n.classList.contains('Bas')))) {
      const nx = n.nextSibling;
      if (n.nodeType === 1 && /^(STRONG|SMALL)$/.test(n.tagName)) moved.push(n);
      else if (n.nodeType === 1 && n.tagName === 'BR') n.remove();
      n = nx;
    }
    if (moved.length) {
      // v1.67 : la date de fin (« Terminé lundi à 05h26 », <small>) se met à la suite de sa ligne « … se termine dans … - Annuler », sans retour à la ligne
      let last = null;
      moved.forEach(el => {
        if (el.tagName === 'SMALL' && last && !last.querySelector('.fz-hero-fin')) { el.classList.add('fz-hero-fin'); last.appendChild(el); return; }
        const line = document.createElement('div'); line.className = 'fz-hero-line' + (el.tagName === 'SMALL' ? ' fz-hero-sub' : ''); el.before(line); line.appendChild(el); info.appendChild(line);
        last = el.tagName === 'STRONG' ? line : null;
      });
      d.querySelector('.fz-page-hero-head').appendChild(info); d.classList.add('fz-has-info');
    }
  }
