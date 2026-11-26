  // Liens « Annuler » (attaques, ponte, convois, construction, recherche) repérés par leur texte ou leur adresse
  function markCancelLinks() {
    document.querySelectorAll('#centre a:not(.fz-cancel)').forEach(a => {
      if (/^\s*annuler\s*$/i.test(a.textContent) || /annuler/i.test(a.getAttribute('href') || '')) {
        a.classList.add('fz-cancel'); if (!a.title) a.title = 'Annuler';
      }
    });
  }


