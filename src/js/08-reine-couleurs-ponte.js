  // Page Reine : nom des unités à pondre en couleur — ouvrière en jaune orangé, unités militaires en rouge
  function colorPonteNames() {
    if (!/reine/i.test(location.pathname)) return;
    document.querySelectorAll('#centre tr.ligneAmelioration').forEach(tr => {
      const h = tr.querySelector('h2'); if (!h || tr.classList.contains('fz-u-ouv') || tr.classList.contains('fz-u-mil')) return;
      tr.classList.add(/^\s*ouvri.re\s*$/i.test(h.textContent) ? 'fz-u-ouv' : 'fz-u-mil');
    });
  }
  // Page Reine : bouton de destination de ponte coloré selon le lieu (TdC rouge, Dôme jaune orangé, Loge vert)
  function colorPonteDestinations() {
    document.querySelectorAll('#centre span[id^="texte_destination"]').forEach(sp => {
      const btn = sp.parentElement; if (!btn) return;
      const set = () => { const t = sp.textContent.trim(); btn.dataset.fzDest = /^d.me/i.test(t) ? 'dome' : /^loge/i.test(t) ? 'loge' : /^terrain|^tdc/i.test(t) ? 'tdc' : ''; };
      set();
      if (!sp.dataset.fzObs) { sp.dataset.fzObs = '1'; new MutationObserver(set).observe(sp, { childList: true, characterData: true, subtree: true }); }
    });
  }
