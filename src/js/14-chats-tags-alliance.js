  // v1.41 : chats — tags d'alliance colorés comme au classement : mon alliance (tag + pseudo) en vert, alliés (pactes) tag vert, autres tag orange.
  // Mon tag et la liste des pactes sont relus sur le profil et la page Diplomatie, mis en cache 1 h.
  let fzDiplo = null, fzDiploLoading = false;
  async function loadDiplo() {
    try { const c = JSON.parse(localStorage.getItem('fzDiplo') || 'null'); if (c && Date.now() - c.ts < 3600e3) { fzDiplo = c; return; } } catch (e) {}
    if (fzDiploLoading) return; fzDiploLoading = true;
    try {
      const get = async (u) => new DOMParser().parseFromString(await (await fetch(u, { credentials: 'include' })).text(), 'text/html');
      const me = (document.getElementById('pseudo') || {}).textContent; let tag = '';
      if (me) { const d = await get('Membre.php?Pseudo=' + encodeURIComponent(me.trim())); const a = d.querySelector('tr.monAlliance a[href*="classementAlliance"]') || d.querySelector('.boite_membre a[href*="classementAlliance"]'); tag = a ? a.textContent.trim() : ''; }
      let allies = []; const l = [...document.querySelectorAll('#menu a')].find(a => /^diplomatie$/i.test(a.textContent.trim()));
      if (l) { const d = await get(l.getAttribute('href')); allies = [...d.querySelectorAll('a[href*="classementAlliance"]')].filter(a => /pacte/i.test((a.closest('tr') || {}).textContent || '')).map(a => a.textContent.trim()); }
      fzDiplo = { tag, allies, ts: Date.now() }; try { localStorage.setItem('fzDiplo', JSON.stringify(fzDiplo)); } catch (e) {}
    } catch (e) {} finally { fzDiploLoading = false; }
  }
  function colorChatTags() {
    const lines = document.querySelectorAll('#nouveauxMessages > p, #anciensMessages > p'); if (!lines.length) return;
    if (!fzDiplo) { loadDiplo(); return; }
    lines.forEach(p => {
      if (p.dataset.fzTag) return;
      const a = p.querySelector(':scope > a[href*="classementAlliance"]'); const t = a ? a.textContent.trim() : '';
      p.dataset.fzTag = '1';
      if (!t) return;
      p.classList.add(t === fzDiplo.tag ? 'fz-chat-me' : fzDiplo.allies.includes(t) ? 'fz-chat-ally' : 'fz-chat-other');
    });
  }
