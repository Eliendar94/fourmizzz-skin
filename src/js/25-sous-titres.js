  // Sous-titres soulignés des encadrés (ex. simulateur de chasse) : style des titres du skin
  function markSubheads() {
    document.querySelectorAll('#centre .boite_amelioration td, #centre .boite_amelioration span, #centre .boite_amelioration div').forEach(e => {
      if (e.children.length === 0 && !e.closest('a') && !e.classList.contains('fz-subhead') && getComputedStyle(e).textDecorationLine === 'underline') e.classList.add('fz-subhead');
    });
  }

