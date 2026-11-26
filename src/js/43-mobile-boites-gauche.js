  // ---------- v1.60 : version mobile — bouton « boîtes de gauche » ----------
  // Sous 61em, le jeu cache les boîtes de gauche (pseudo du joueur, Compte +). Un bouton en haut à gauche de la
  // barre de navigation les affiche ou les cache (simple bascule d'affichage, aucune action de jeu).
  // Le bouton n'est créé que sur petit écran : sur ordinateur, la page reste strictement identique.
  // (déclaration de fonction : remontée dans la portée commune, appelée depuis onReady dans 42-demarrage.js)
  function mobileLeftBoxesButton() {
    const mq = window.matchMedia('screen and (max-width: 61em)');
    const root = document.documentElement;
    const OPEN = 'fz-boites-ouvertes';
    const ICON = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M5.5 8h1.5M5.5 11h1.5M5.5 14h1.5"/></svg>';
    const setOpen = (open) => {
      root.classList.toggle(OPEN, open);
      const btn = document.getElementById('fz-boites-btn');
      if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    const sync = () => {
      // compteplus.php ajoute un second #menu vide : on prend celui qui porte la barre de navigation
      const menu = [...document.querySelectorAll('#menu')].find((m) => m.querySelector('#menu_horizontal'));
      const boxes = document.getElementById('menuBoite');
      let btn = document.getElementById('fz-boites-btn');
      if (!mq.matches || !menu || !boxes) { if (btn) btn.remove(); setOpen(false); return; }
      if (btn) return;
      btn = document.createElement('button');
      btn.type = 'button';
      btn.id = 'fz-boites-btn';
      btn.title = 'Afficher / cacher les infos du joueur et Compte +';
      btn.setAttribute('aria-label', btn.title);
      btn.setAttribute('aria-controls', 'menuBoite');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span>' + ICON + '</span>';
      btn.addEventListener('click', (e) => { e.preventDefault(); setOpen(!root.classList.contains(OPEN)); });
      menu.insertBefore(btn, menu.firstChild);
    };
    // toucher le voile sombre (fond de #menuBoite, hors des boîtes) referme le panneau
    document.addEventListener('click', (e) => { if (root.classList.contains(OPEN) && e.target && e.target.id === 'menuBoite') setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.classList.contains(OPEN)) setOpen(false); });
    if (mq.addEventListener) mq.addEventListener('change', sync); else mq.addListener(sync);
    sync();
  }
