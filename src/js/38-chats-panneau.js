  // ---------- Chats (alliance et général) : un panneau qui englobe tout le chat ----------
  function wrapChat() {
    const c = document.getElementById('centre');
    if (!c) return;
    const chat = c.querySelector(':scope > .chatAlliance');          // chat général : éléments posés directement dans #centre
    if (!chat || c.querySelector(':scope > .fz-chatbox')) return;
    let start = chat;
    while (start.previousElementSibling && !/^(NAV|SCRIPT|BR)$/.test(start.previousElementSibling.tagName)) start = start.previousElementSibling;
    const box = document.createElement('div');
    box.className = 'fz-chatbox';
    c.insertBefore(box, start);
    let n = start;
    while (n) {
      const nx = n.nextElementSibling;
      box.appendChild(n);
      if (n === chat) { if (nx && nx.tagName === 'P') box.appendChild(nx); break; }
      n = nx;
    }
  }
  const PSEUDO_CSS = __CSS__('commun/pseudos.css');
  const ALLY_NAME_CSS = __CSS__('commun/tags-alliance.css');
  const CHAT_CSS = __CSS__('chats/panneau.css');

  // Chats : les couleurs de message trop sombres pour le fond sont éclaircies (même teinte, luminosité ≥ 72 %)
  function lightenChat() {
    document.querySelectorAll('.chatAlliance p *, #forum .messageForum *').forEach(e => {
      if (e.dataset.fzL || e.matches('a.cixyCiter, img')) return;
      e.dataset.fzL = '1';
      const m = getComputedStyle(e).color.match(/[\d.]+/g);
      if (!m) return;
      const [r, g, b] = m.map(Number);
      if ((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 >= 0.5) return;
      const R = r / 255, G = g / 255, B = b / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), d = mx - mn;
      let h = 0, l = (mx + mn) / 2, sat = d ? d / (1 - Math.abs(2 * l - 1)) : 0;
      if (d) { h = mx === R ? ((G - B) / d) % 6 : mx === G ? (B - R) / d + 2 : (R - G) / d + 4; h *= 60; if (h < 0) h += 360; }
      e.style.setProperty('color', `hsl(${Math.round(h)},${Math.round(Math.min(sat, 1) * 100)}%,${Math.round(Math.max(l, .72) * 100)}%)`, 'important');
    });
  }

