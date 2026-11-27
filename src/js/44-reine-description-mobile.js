  // ---------- v1.65 : version mobile — Reine, bouton « Info+ » ----------
  // Sur téléphone, la description des unités prend beaucoup de place et passe sous le bouton de destination.
  // Elle est repliée derrière un bouton « Info+ » (simple bascule d'affichage, aucune action de jeu).
  // Le texte reste dans la page. Rien n'est créé sur ordinateur : la page y reste strictement identique.
  // (déclaration de fonction : remontée dans la portée commune, appelée depuis onReady dans 42-demarrage.js)
  function reineDescriptionButtons() {
    const mq = window.matchMedia('screen and (max-width: 61em)');
    const run = () => {
      if (!mq.matches) return;
      document.querySelectorAll('#centre tr.ligneAmelioration td.desciption_amelioration').forEach(td => {
        if (td.querySelector('.fz-desc-btn') || !td.querySelector('h2')) return;
        // Ouvrière : texte libre après le lien « En savoir plus » (livre) → regroupé dans un span pour pouvoir le replier
        if (!td.querySelector('[id^="descriptionComplete"]')) {
          const livre = td.querySelector('a[href*="fourmis.php"]');
          const debut = livre && livre.previousSibling && livre.previousSibling.nodeName === 'BR' ? livre.previousSibling : livre;
          if (!debut) return;
          const sp = document.createElement('span'); sp.className = 'fz-desc-txt';
          td.insertBefore(sp, debut);
          while (sp.nextSibling) sp.appendChild(sp.nextSibling);
        }
        const btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'fz-desc-btn'; btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<span>Info</span><b>+</b>';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const tr = td.closest('tr'); const open = !tr.classList.contains('fz-desc-open');
          tr.classList.toggle('fz-desc-open', open);
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          btn.querySelector('b').textContent = open ? '−' : '+';
        });
        const ref = td.querySelector('.fz-desc-txt, [id^="descriptionComplete"]');
        td.insertBefore(btn, ref);
      });
    };
    run();
    if (mq.addEventListener) mq.addEventListener('change', run);
  }
