  const BTN_LABEL = /laboratoire/.test(location.pathname) ? 'Rechercher' : 'Construire';
  function enhanceBuildButtons() {
    document.querySelectorAll('#centre tr.ligneAmelioration').forEach(row => {
      if (row.querySelector('.fz-build-wrap')) return;
      const cost = row.querySelector('td.cout_amelioration');
      // Page Reine : bouton « Pondre » qui déclenche le bouton de ponte d'origine (il reste dans son formulaire)
      if (cost && row.querySelector('td.td_icone_ponte, .icone_ponte') || (cost && /reine/i.test(location.pathname))) {
        const pw = document.createElement('div');
        pw.className = 'fz-build-wrap fz-ponte-wrap';
        const inp = row.querySelector('td.td_icone_ponte input[type=image], .icone_ponte input[type=image]');
        if (inp) {
          const a = document.createElement('a');
          a.href = '#'; a.className = 'fz-build-btn fz-ponte'; a.textContent = 'Pondre';
          a.addEventListener('click', e => { e.preventDefault(); inp.click(); });
          pw.appendChild(a);
          const td = inp.closest('td'); if (td) td.classList.add('fz-hidden-td');
        } else {
          const off = document.createElement('span');
          off.className = 'fz-build-btn fz-disabled'; off.textContent = 'Pondre';
          pw.classList.add('fz-off'); pw.dataset.tip = 'Prérequis manquants'; pw.appendChild(off);
        }
        cost.insertBefore(pw, cost.firstChild);
        cost.classList.add('fz-ponte-cell');
        return;
      }
      const src = row.querySelector('.icone_construction, .icone_recherche, .bouton_gris');
      if (!cost) return;
      const wrap = document.createElement('div');
      wrap.className = 'fz-build-wrap fz-btn-fixe'; // v1.70 : taille fixe, quelle que soit la largeur de la case
      if (!src) {
        // pas de bouton dans le jeu (prérequis non atteints) : bouton grisé pour garder l'alignement
        const off = document.createElement('span');
        off.className = 'fz-build-btn fz-disabled'; off.textContent = BTN_LABEL; wrap.dataset.tip = 'Prérequis manquants';
        wrap.classList.add('fz-off'); wrap.appendChild(off);
        cost.insertBefore(wrap, cost.firstChild);
        const last = row.lastElementChild;
        if (last !== cost && !last.textContent.trim()) last.classList.add('fz-hidden-td');
        return;
      }
      const link = src.querySelector('a');
      if (link) {
        // on réutilise le lien d'origine du jeu : même action, juste restylé et déplacé
        link.classList.add('fz-build-btn'); if (BTN_LABEL === 'Rechercher') { link.classList.add('fz-research'); wrap.classList.add('fz-research-wrap'); }
        link.append(document.createTextNode(BTN_LABEL));
        wrap.appendChild(link);
      } else {
        const img = src.querySelector('img');
        const off = document.createElement('span');
        off.className = 'fz-build-btn fz-disabled';
        off.textContent = BTN_LABEL;
        wrap.dataset.tip = (img && (img.title || img.alt)) || 'Indisponible';
        wrap.classList.add('fz-off');
        wrap.appendChild(off);
      }
      cost.insertBefore(wrap, cost.firstChild);
      const oldTd = src.closest('td');
      if (oldTd && oldTd !== cost) oldTd.classList.add('fz-hidden-td');
    });
  }

