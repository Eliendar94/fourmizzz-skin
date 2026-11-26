  // v1.32 : page Ressources — les 3 anneaux (terrain, entrepôts) posés sur un paysage spatial encadré
  const RES_HERO_IMG = __ASSET__('bannieres/ressources.jpg');
  function resourceHero() {
    const strong = document.getElementById('zonePourcentageTdcUtil'); const p = strong && strong.closest('p');
    if (!p || p.parentElement.classList.contains('fz-res-hero')) return;
    const box = document.createElement('div'); box.className = 'fz-res-hero';
    box.style.setProperty('--fz-res-img', `url("${RES_HERO_IMG}")`);
    p.parentNode.insertBefore(box, p); box.appendChild(p);
    ['tl', 'tr', 'bl', 'br'].forEach(k => { const c = document.createElement('i'); c.className = 'fz-hero-c fz-hero-' + k; box.appendChild(c); });
  }
