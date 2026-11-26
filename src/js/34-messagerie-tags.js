  // ---------- Messagerie : vignette de type devant le titre de chaque message ----------
  const MSG_TAGS = [
    // [motif du titre, libellé, couleur, flèche (facultative) : [caractère, couleur]]
    [/^\s*vol\b/i, 'Flood', '#ff9f1c', ['▼', '#ff4d4d']],      // flood reçu
    [/^\s*butin\b/i, 'Flood', '#ff9f1c', ['▲', '#5dff7a']],    // flood envoyé
    [/^\s*chasse\b|chasseuses? ont conquis/i, 'Chasse', '#5dff7a'],
    [/^\s*(attaque|invasion)\b/i, 'Combat', '#ff5470'],
    [/^\s*convoi/i, 'Convoi', '#6cc8ff'],
  ];
  function tagMessages() {
    document.querySelectorAll('#messagerie a.intitule_message').forEach(a => {
      // une seule vignette par message (la vignette « Nouveau » peut se trouver entre la vignette et le titre)
      if (a.parentNode.querySelector('.fz-tag')) return;
      const title = a.textContent.trim();
      if (!title) return;
      const hit = MSG_TAGS.find(([re]) => re.test(title));
      const [, label, color, arrow] = hit || [null, 'Discussion', '#b77cff']; // messages privés et collectifs
      const tag = document.createElement('span');
      tag.className = 'fz-tag';
      tag.textContent = label;
      if (arrow) {
        const ar = document.createElement('span');
        ar.className = 'fz-tag-arrow'; ar.textContent = arrow[0]; ar.style.color = arrow[1];
        tag.appendChild(ar);
      }
      tag.style.setProperty('--tag', color);
      a.parentNode.insertBefore(tag, a);
    });
    // Messages non lus : vignette « Nouveau » à la place du compteur (n), titre en gras
    document.querySelectorAll('#messagerie span.nbr_mess_non_lus_conv').forEach(sp => {
      const tr = sp.closest('tr');
      const has = /\d/.test(sp.textContent);
      let badge = tr && tr.querySelector('.fz-new');
      if (has && !badge) {
        badge = document.createElement('span');
        badge.className = 'fz-new'; badge.textContent = 'Nouveau';
        // placée entre la vignette de type et le titre
        const tag = tr && tr.querySelector('.fz-tag');
        if (tag) tag.after(badge); else sp.after(badge);
      }
      if (badge) { badge.style.display = has ? '' : 'none'; badge.title = sp.textContent.replace(/\D/g, '') + ' message(s) non lu(s)'; }
      if (tr) tr.classList.toggle('fz-unread', has);
    });
  }
  const MSG_TAG_CSS = __CSS__('messagerie/tags.css', 'messagerie/barre-outils.css', 'classements/classements.css', 'commun/panneaux-survol.css', 'convois/convois.css', 'attaque/attaque.css', 'commun/liens-annuler.css', 'membre/profil.css', 'commun/sous-menus.css', 'statistiques/statistiques.css', 'compteplus/compteplus.css', 'compteplus/sous-pages.css', 'reine/couleurs-ponte.css', 'construction/niveaux.css', 'alliance/membres-titre-ma-ligne.css', 'attaque/correctif-panneau.css', 'carte/carte.css', 'armee/statistiques.css', 'reine/armee-et-pontes.css', 'alliance/message-collectif.css', 'chats/titres-tags.css', 'commun/boites-gauche-hud.css', 'convois/capacite.css', 'construction/panneaux-neon.css', 'construction/attente-couts.css', 'construction/vignette-niveau.css', 'reine/destination-ponte.css');

