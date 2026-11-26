  // v1.36 : Message collectif (Alliance) — bouton d'envoi au style des boutons d'action (bleu, comme le convoi)
  function enhanceCollectiveSend() {
    const ta = document.getElementById('message_collectif'); const f = ta && ta.form; if (!f) return;
    proxyActionButton(f.querySelector('input[type="submit"]'), 'fz-convoi', 'fz-convoi-wrap fz-msgc-wrap', 'Envoyer');
  }
  // v1.37-1.39 : Message collectif — boîte de smileys (ouverte / fermée par le bouton smiley de la barre d'outils) placée sous « Objet ».
  // Les sous-pages de l'Alliance sont chargées après coup : vérification régulière.
  function placeCollectiveSmileys() {
    const ta = document.getElementById('message_collectif'); const f = ta && ta.form; if (!f) return;
    const box = f.closest('.boiteMessagerie'), sm = box && box.querySelector(':scope > .tousLesSmiley'), bar = f.querySelector('span.sur_une_ligne');
    if (sm && bar && sm.parentElement !== f) { sm.classList.add('fz-smiley-box'); f.insertBefore(sm, bar); }
  }
