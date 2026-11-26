  // Page Compte+ : affiche de propagande (image retouchée aux couleurs du skin), clic = descend vers le bloc d'achat
  const CPLUS_POSTER = __ASSET__('compteplus/affiche.webp');
  function compteplusPoster() {
    const pay = document.getElementById('paiementBlock'); if (!pay || document.querySelector('#centre .fz-poster')) return;
    const info = [...document.querySelectorAll('#centre > div:not([id])')].find(d => d.querySelector(':scope > p > strong')); if (!info) return;
    const a = document.createElement('div'); a.className = 'fz-poster'; a.title = 'Prends ton Compte+ !';
    const img = document.createElement('img'); img.src = CPLUS_POSTER; img.alt = 'We need you ! Prends ton Compte+ !';
    a.appendChild(img); a.addEventListener('click', () => pay.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    info.insertBefore(a, info.firstChild);
  }
