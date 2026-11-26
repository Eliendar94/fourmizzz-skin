  // ---------- Bouton « Construire » futuriste (page Construction) ----------
  const BUILD_BTN_CSS = __CSS__('construction/bouton-construire.css', 'reine/bouton-pondre.css', 'ressources/encadres.css', 'reine/file-ponte.css', 'laboratoire/bouton-rechercher.css', 'commun/boutons-action.css');

  // Bouton d'action stylé qui déclenche le bouton d'origine du jeu (caché mais conservé dans son formulaire :
  // même action, mêmes vérifications). Suit le texte, l'état « désactivé » et la visibilité du bouton d'origine.
  function proxyActionButton(inp, btnCls, wrapCls, label) {
    if (!inp || inp.classList.contains('fz-hidden-input')) return;
    const w = document.createElement('div');
    w.className = 'fz-build-wrap fz-act-wrap ' + wrapCls;
    const a = document.createElement('a');
    a.href = '#'; a.className = 'fz-build-btn ' + btnCls;
    a.addEventListener('click', e => { e.preventDefault(); if (!inp.disabled) inp.click(); });
    w.appendChild(a);
    inp.parentNode.insertBefore(w, inp);
    inp.classList.add('fz-hidden-input');
    const sync = () => {
      if (!inp.isConnected) { w.remove(); clearInterval(t); return; }
      const txt = label || (inp.value || '').trim(); if (a.textContent !== txt) a.textContent = txt;
      w.classList.toggle('fz-off', inp.disabled); a.classList.toggle('fz-disabled', inp.disabled);
      w.classList.toggle('fz-hidden', inp.style.display === 'none' || inp.hidden);
    };
    sync(); const t = setInterval(sync, 500);
  }
  // Page Convois : « Lancer le convoi » (bleu)
  function enhanceConvoyButton() {
    proxyActionButton(document.querySelector('#centre form input[type="submit"][name="convoi"]'), 'fz-convoi', 'fz-convoi-wrap');
  }
  // Page Attaque : « Attaquer X ! » (rouge) et « Lancer les Floods » d'OptiFlood (vert, ajouté après coup par ce script tiers)
  function enhanceAttackButtons() {
    proxyActionButton(document.querySelector('#formulaireChoixArmee input[type="submit"][name="ChoixArmee"]'), 'fz-attack', 'fz-attack-wrap');
    proxyActionButton(document.getElementById('Calys_OF_btnLaunch'), 'fz-flood', 'fz-flood-wrap');
  }
