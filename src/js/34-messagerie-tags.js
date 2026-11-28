  // ---------- Messagerie : vignette de type devant le titre de chaque message ----------
  const MSG_TAGS = [
    // [motif du titre, libellé, couleur, flèche (facultative) : [caractère, couleur]]
    [/^\s*vol\b/i, 'Flood', '#ff9f1c', ['▼', '#ff4d4d']],      // flood reçu
    [/^\s*butin\b/i, 'Flood', '#ff9f1c', ['▲', '#5dff7a']],    // flood envoyé
    [/^\s*chasse\b|chasseuses? ont conquis/i, 'Chasse', '#5dff7a'],
    [/^\s*(attaque|invasion)\b/i, 'Combat', '#ff5470'],
    /* v1.70 : sens du convoi, comme les vignettes Flood (« livré à » = ressources envoyées, « reçu de » = reçues) */
    [/^\s*convoi\s+livr/i, 'Convoi', '#6cc8ff', ['▼', '#ff4d4d']],
    [/^\s*convoi\s+re[çc]u/i, 'Convoi', '#6cc8ff', ['▲', '#5dff7a']],
    [/^\s*convoi/i, 'Convoi', '#6cc8ff'],
  ];
  /* v1.70 : messages entre joueurs. « Message groupé » quand la conversation est rangée par le jeu dans « Alliance »
     (tr[data-type], message collectif) ou que la colonne des participants cite au moins deux autres joueurs
     (« GameOver [C6P], Willow [C6P] », « Moi » non compté) ; sinon « Message » (conversation à deux). */
  const msgGroupe = (a) => {
    const tr = a.closest('tr'); if (!tr) return false;
    if (tr.dataset.type === 'Alliance') return true;
    const td = tr.querySelector('td.td_participants'), l = td && td.querySelector('a:not(.intitule_message)');
    return !!l && l.textContent.split(',').map(x => x.trim()).filter(x => x && !/^moi$/i.test(x)).length > 1;
  };
  function tagMessages() {
    document.querySelectorAll('#messagerie a.intitule_message').forEach(a => {
      // une seule vignette par message (la vignette « Nouveau » peut se trouver entre la vignette et le titre)
      if (a.parentNode.querySelector('.fz-tag')) return;
      const title = a.textContent.trim();
      if (!title) return;
      const hit = MSG_TAGS.find(([re]) => re.test(title));
      const [, label, color, arrow] = hit || [null, msgGroupe(a) ? 'Message groupé' : 'Message', '#b77cff']; // messages entre joueurs
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
    /* v1.64 : le jeu signale un message non lu par la seule présence de span.nbr_mess_non_lus_conv, souvent vide
       (rapports, conversation à un seul message non lu) : on ne demande plus de chiffre. Et on parcourt les lignes,
       pas les compteurs : quand le message est ouvert, le jeu retire le compteur et la vignette doit disparaître. */
    document.querySelectorAll('#messagerie tr.en_tete_message').forEach(tr => {
      const sp = tr.querySelector('span.nbr_mess_non_lus_conv');
      const has = !!sp;
      let badge = tr.querySelector('.fz-new');
      if (has && !badge) {
        badge = document.createElement('span');
        badge.className = 'fz-new'; badge.textContent = 'Nouveau';
        // placée entre la vignette de type et le titre
        const tag = tr.querySelector('.fz-tag');
        if (tag) tag.after(badge); else sp.after(badge);
      }
      if (badge) {
        badge.style.display = has ? '' : 'none';
        const n = has ? sp.textContent.replace(/\D/g, '') : '';
        badge.title = n ? n + ' message(s) non lu(s)' : 'Non lu';
      }
      tr.classList.toggle('fz-unread', has);
    });
  }
  const MSG_TAG_CSS = __CSS__('messagerie/tags.css', 'messagerie/barre-outils.css', 'classements/classements.css', 'commun/panneaux-survol.css', 'convois/convois.css', 'attaque/attaque.css', 'commun/liens-annuler.css', 'membre/profil.css', 'commun/sous-menus.css', 'statistiques/statistiques.css', 'compteplus/compteplus.css', 'compteplus/sous-pages.css', 'reine/couleurs-ponte.css', 'construction/niveaux.css', 'alliance/membres-titre-ma-ligne.css', 'attaque/correctif-panneau.css', 'carte/carte.css', 'armee/statistiques.css', 'reine/armee-et-pontes.css', 'alliance/message-collectif.css', 'chats/titres-tags.css', 'commun/boites-gauche-hud.css', 'convois/capacite.css', 'construction/panneaux-neon.css', 'construction/attente-couts.css', 'construction/vignette-niveau.css', 'reine/destination-ponte.css', 'fourmiliere/scene.css', 'messagerie/rapports-combat.css');

