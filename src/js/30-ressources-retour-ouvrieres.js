  // v1.06 : « Les ouvrières rentreront dans : X » déplacé juste au-dessus du cadre de réglage des récoltes
  function moveReturnTimer() {
    const t = document.getElementById('retour_ouvrieres'); const set = document.getElementById('ChangeRessource');
    const center = set && set.closest('center'); if (!t || !center || t.closest('.fz-retour')) return;
    const lbl = t.previousElementSibling && t.previousElementSibling.tagName === 'STRONG' && /rentreront/i.test(t.previousElementSibling.textContent) ? t.previousElementSibling : null;
    const d = document.createElement('div'); d.className = 'fz-retour';
    if (lbl) d.appendChild(lbl); d.appendChild(document.createTextNode(' ')); d.appendChild(t);
    center.parentNode.insertBefore(d, center);
  }
