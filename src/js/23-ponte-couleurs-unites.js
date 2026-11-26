  // ---------- Couleur de chaque unité (reprise des graphiques de la page Stat) dans la file de ponte ----------
  const UNIT_COLORS = [
    [/jeunes? soldates? naines?/i, '#9FE855'],
    [/naines? d.?[ée]lite/i, '#21610B'],
    [/soldates? naines?/i, '#34C924'],
    [/soldates? d.?[ée]lite/i, '#088A85'],
    [/jeunes? soldates?/i, '#81F7F3'],
    [/concierges? d.?[ée]lite/i, '#013ADF'],
    [/concierges?/i, '#5882FA'],
    [/artilleuses? d.?[ée]lite/i, '#DF01A5'],
    [/artilleuses?/i, '#FA58D0'],
    [/tanks? d.?[ée]lite/i, '#FF0000'],
    [/tanks?/i, '#FA5858'],
    [/tueuses? d.?[ée]lite/i, '#FFFF00'],
    [/tueuses?/i, '#F4FA58'],
    [/soldates?/i, '#00FFFF'],
  ];
  function colorPonteUnits() {
    const table = document.querySelector('#centre > h4 + table.tableau_leger');
    if (!table) return;
    table.querySelectorAll('tr').forEach((tr, i) => {
      if (i === 0) return; // ligne d'en-tête
      const td = tr.querySelector('td');
      if (!td || td.querySelector('.fz-unit')) return;
      const txt = td.textContent;
      const hit = UNIT_COLORS.find(([re]) => re.test(txt));
      if (!hit) return;
      const m = txt.match(hit[0]);
      // on n'enveloppe que le nom de l'unité, le nombre garde sa couleur
      const walker = document.createTreeWalker(td, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const idx = node.textContent.search(hit[0]);
        if (idx < 0) continue;
        const after = node.splitText(idx);
        after.splitText(m[0].length);
        const span = document.createElement('span');
        span.className = 'fz-unit'; span.style.color = hit[1];
        after.parentNode.replaceChild(span, after); span.appendChild(after);
        break;
      }
    });
  }

