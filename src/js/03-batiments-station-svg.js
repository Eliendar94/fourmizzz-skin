  // ---------- Illustrations originales « station spatiale » des bâtiments (dessinées en SVG) ----------
  const STATION_SVG = (() => {
    const W = 225, H = 148;
    const rng = (seed) => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
    const defs = (c) => `<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#03050c"/><stop offset="1" stop-color="#0b1630"/></linearGradient><linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fb3c8"/><stop offset=".5" stop-color="#5b6b7e"/><stop offset="1" stop-color="#2c3644"/></linearGradient><linearGradient id="metalH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2c3644"/><stop offset=".5" stop-color="#8ea2b8"/><stop offset="1" stop-color="#2c3644"/></linearGradient><linearGradient id="glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".55"/><stop offset="1" stop-color="${c}" stop-opacity=".12"/></linearGradient><radialGradient id="glow"><stop offset="0" stop-color="${c}" stop-opacity=".9"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient><radialGradient id="planet" cx=".35" cy=".3"><stop offset="0" stop-color="#3a6fa8"/><stop offset=".7" stop-color="#16294a"/><stop offset="1" stop-color="#0a1426"/></radialGradient></defs>`;
    const sky = (seed, planet = true) => {
      const r = rng(seed * 7919 + 17);
      let s = '<rect width="225" height="148" fill="url(#sky)"/>';
      for (const [op, w] of [[.4, 1], [.7, 1.3], [1, 1.8]]) {
        let d = ''; for (let i = 0; i < 15; i++) d += `M${Math.round(r() * W)} ${Math.round(r() * H)}h0`;
        s += `<path d="${d}" stroke="#fff" stroke-width="${w}" stroke-linecap="round" opacity="${op}"/>`;
      }
      if (planet) { const px = r() < .5 ? 20 : 205; s += `<circle cx="${px}" cy="160" r="70" fill="url(#planet)" stroke="#5fb4ff" stroke-opacity=".35" stroke-width="2"/>`; }
      return s;
    };
    const frame = (c) => `<path d="M2 14V2H14M211 2H223V14M223 134V146H211M14 146H2V134" stroke="${c}" stroke-width="1.5" fill="none" opacity=".8"/>`;
    const lights = (from, to, step, y, c) => { let s = ''; for (let x = from; x < to; x += step) s += `<circle cx="${x}" cy="${y}" r="1.3" fill="${c}"/>`; return s; };
    const panel = (x, y, w, h, rx = 3) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="url(#metal)" stroke="#1a222c"/>`;
    const A = [];
    // 0 Étable à pucerons — bio-ferme, capsules vertes
    A[0] = () => { const c = '#6dff9a'; let s = sky(0) + panel(18, 70, 190, 58, 6) + '<rect x="18" y="122" width="190" height="6" fill="#1b2330"/>';
      for (const x of [40, 80, 120, 160]) s += `<ellipse cx="${x + 10}" cy="92" rx="17" ry="20" fill="url(#glass)" stroke="${c}" stroke-width="1.2"/><ellipse cx="${x + 10}" cy="96" rx="7" ry="9" fill="${c}" opacity=".85"/><circle cx="${x + 6}" cy="91" r="1.4" fill="#0a2"/><path d="M${x + 3} 104l-3 4M${x + 17} 104l3 4" stroke="${c}"/>`;
      s += `<rect x="60" y="48" width="105" height="22" rx="4" fill="#223042" stroke="${c}" stroke-opacity=".6"/><text x="112" y="63" font-family="monospace" font-size="9" fill="${c}" text-anchor="middle">BIO-FARM A1</text>` + lights(28, 200, 12, 125, c);
      return [c, s]; };
    // 1 Étable à cochenilles — rack de cuves rouges
    A[1] = () => { const c = '#ff5f7a'; let s = sky(1) + panel(25, 40, 175, 92, 6);
      for (let row = 0; row < 2; row++) for (let col = 0; col < 5; col++) { const x = 38 + col * 33, y = 52 + row * 38;
        s += `<rect x="${x}" y="${y}" width="24" height="30" rx="5" fill="url(#glass)" stroke="${c}"/><ellipse cx="${x + 12}" cy="${y + 18}" rx="8" ry="6" fill="${c}" opacity=".8"/><path d="M${x + 6} ${y + 13}v10M${x + 10} ${y + 13}v10M${x + 14} ${y + 13}v10M${x + 18} ${y + 13}v10" stroke="#7a1028" stroke-width=".7"/>`; }
      return [c, s + `<rect x="25" y="34" width="175" height="6" fill="${c}" opacity=".5"/>`]; };
    // 2 Champignonnière — serre en arche, champignons luminescents
    A[2] = () => { const c = '#c08bff'; let s = sky(2) + '<path d="M15 128V70Q112 20 210 70V128Z" fill="#16202e" stroke="url(#metalH)" stroke-width="4"/><path d="M22 125V72Q112 28 203 72V125Z" fill="url(#glass)" opacity=".5"/>';
      for (const [x, h, r] of [[45, 30, 14], [75, 42, 18], [110, 34, 22], [148, 46, 16], [180, 28, 12]]) s += `<rect x="${x - 2.5}" y="${125 - h}" width="5" height="${h}" fill="#e8dcff"/><path d="M${x - r} ${125 - h}Q${x} ${(125 - h - r * 1.2).toFixed(1)} ${x + r} ${125 - h}Z" fill="${c}"/><circle cx="${x}" cy="${122 - h}" r="${r}" fill="url(#glow)" opacity=".5"/>`;
      s += '<rect x="15" y="125" width="195" height="5" fill="#2c3644"/>' + [60, 104, 148].map(x => `<rect x="${x}" y="60" width="16" height="3" fill="#fff6c2" opacity=".9"/>`).join('');
      return [c, s]; };
    // 3 Salle de combat — arène de simulation
    A[3] = () => { const c = '#ff8a3d'; let s = sky(3, false) + `<ellipse cx="112" cy="112" rx="98" ry="26" fill="#1a2230" stroke="url(#metalH)" stroke-width="4"/><ellipse cx="112" cy="112" rx="80" ry="20" fill="none" stroke="${c}" stroke-dasharray="6 4"/>`;
      for (const r of [34, 24, 14, 5]) s += `<circle cx="112" cy="62" r="${r}" fill="none" stroke="${c}" stroke-width="2" opacity=".85"/>`;
      s += `<path d="M112 96V112" stroke="${c}" opacity=".6"/><path d="M60 108l10-14 6 8zM164 108l-10-14-6 8z" fill="#c9d6e3"/><path d="M30 40L60 70M195 40L165 70" stroke="${c}" opacity=".5"/><text x="18" y="20" font-family="monospace" font-size="8" fill="${c}">COMBAT SIM</text>`;
      return [c, s]; };
    // 4 Caserne — tour de quartiers
    A[4] = () => { const c = '#7fd3ff'; let s = sky(4) + panel(70, 18, 85, 112, 8) + panel(40, 60, 30, 70, 4) + panel(155, 60, 30, 70, 4);
      for (let row = 0; row < 6; row++) for (let col = 0; col < 4; col++) s += `<rect x="${80 + col * 18}" y="${28 + row * 16}" width="11" height="7" rx="2" fill="${c}" opacity="${(0.35 + ((row * 3 + col) % 4) * 0.18).toFixed(2)}"/>`;
      for (const x of [48, 163]) for (let row = 0; row < 4; row++) s += `<rect x="${x}" y="${70 + row * 14}" width="14" height="5" fill="${c}" opacity=".6"/>`;
      return [c, s + '<rect x="108" y="6" width="9" height="14" fill="#5b6b7e"/><circle cx="112.5" cy="6" r="3" fill="#ff4d4d"/>']; };
    // 5 Couveuse — œufs sur berceaux chauffants
    A[5] = () => { const c = '#ffcf6b'; let s = sky(5) + panel(15, 95, 195, 35, 6);
      for (const x of [45, 90, 135, 180]) s += `<circle cx="${x}" cy="78" r="26" fill="url(#glow)" opacity=".55"/><ellipse cx="${x}" cy="78" rx="13" ry="18" fill="#fff4dd" stroke="${c}" stroke-width="1.5"/><ellipse cx="${x - 4}" cy="71" rx="3" ry="5" fill="#fff" opacity=".8"/><path d="M${x - 18} 92Q${x} 104 ${x + 18} 92" fill="none" stroke="url(#metalH)" stroke-width="4"/><rect x="${x - 9}" y="112" width="18" height="5" rx="1" fill="${c}" opacity=".7"/>`;
      return [c, s]; };
    // 6 Solarium — panneaux solaires face à une étoile
    A[6] = () => { const c = '#ffd84d'; let s = sky(6, false) + '<circle cx="190" cy="32" r="40" fill="url(#glow)"/><circle cx="190" cy="32" r="14" fill="#fff6c8"/>' + panel(98, 60, 28, 50, 4);
      for (const [side, x0] of [[-1, 96], [1, 128]]) for (let k = 0; k < 3; k++) { const x = x0 + side * (10 + k * 30) - (side < 0 ? 28 : 0);
        s += `<rect x="${x}" y="66" width="28" height="38" fill="#163a7a" stroke="#7fb2ff"/><path d="M${x} 75.5h28M${x} 85h28M${x} 94.5h28M${x + 14} 66v38" stroke="#7fb2ff" stroke-width=".5"/><rect x="${x}" y="66" width="28" height="38" fill="${c}" opacity=".12"/>`; }
      return [c, s + '<rect x="6" y="83" width="213" height="4" fill="url(#metalH)"/>']; };
    // 7 Laboratoire — hélice d'ADN et fioles
    A[7] = () => { const c = '#4dffd2'; let s = sky(7) + panel(15, 100, 195, 30, 4);
      for (let i = 0; i < 14; i++) { const y = 22 + i * 5.5, dx = (14 * Math.sin(i * 0.7)).toFixed(1);
        s += `<path d="M${112 - dx} ${y}H${112 + +dx}" stroke="${c}" opacity=".7"/><circle cx="${112 - dx}" cy="${y}" r="2" fill="${c}"/><circle cx="${112 + +dx}" cy="${y}" r="2" fill="#b27cff"/>`; }
      s += `<ellipse cx="112" cy="99" rx="26" ry="5" fill="${c}" opacity=".5"/>`;
      for (const [x, col] of [[40, '#ff6bd5'], [65, '#6bffb0'], [165, '#6bc7ff'], [188, '#ffd36b']]) s += `<path d="M${x - 4} 78V88L${x - 11} 100H${x + 11}L${x + 4} 88V78Z" fill="url(#glass)" stroke="#cfe" stroke-width=".8"/><path d="M${x - 8} 95L${x - 11} 100H${x + 11}L${x + 8} 95Z" fill="${col}"/>`;
      return [c, s]; };
    // 8 Entrepôt de Nourriture — silos et caisses
    A[8] = () => { const c = '#9dff6b'; let s = sky(8);
      for (const x of [30, 75, 120]) s += `<rect x="${x}" y="38" width="34" height="88" rx="17" fill="url(#metalH)" stroke="#1a222c"/><rect x="${x + 8}" y="50" width="18" height="60" rx="4" fill="url(#glass)" stroke="${c}" stroke-width=".8"/><rect x="${x + 8}" y="80" width="18" height="30" rx="2" fill="${c}" opacity=".7"/>`;
      for (const [x, y] of [[165, 106], [190, 106], [177, 86]]) s += `<rect x="${x}" y="${y}" width="24" height="20" fill="#3d5a2a" stroke="${c}"/><path d="M${x} ${y}l24 20M${x + 24} ${y}l-24 20" stroke="${c}" stroke-width=".6"/>`;
      return [c, s + '<rect x="10" y="126" width="205" height="5" fill="#2c3644"/>']; };
    // 9 Entrepôt de Matériaux — soute, caisses, grue
    A[9] = () => { const c = '#ffae42'; let s = sky(9) + '<rect x="10" y="126" width="205" height="5" fill="#2c3644"/>';
      for (const [x, y] of [[25, 100], [55, 100], [85, 100], [40, 74], [70, 74], [55, 48], [150, 100], [180, 100], [165, 74]]) s += `<rect x="${x}" y="${y}" width="28" height="26" fill="#4a3a26" stroke="${c}"/><rect x="${x + 3}" y="${y + 3}" width="22" height="5" fill="${c}" opacity=".6"/>`;
      return [c, s + `<rect x="118" y="20" width="8" height="106" fill="url(#metalH)"/><rect x="118" y="20" width="80" height="7" fill="url(#metal)"/><path d="M180 27V58" stroke="#ccc"/><rect x="170" y="58" width="20" height="6" fill="${c}"/><path d="M126 27L150 50" stroke="#5b6b7e" stroke-width="3"/>`]; };
    // 10 Dôme — dôme géodésique
    A[10] = () => { const c = '#5ce1ff'; let s = sky(10) + '<path d="M22 118A90 90 0 0 1 203 118Z" fill="url(#glass)" stroke="url(#metalH)" stroke-width="3"/>';
      for (let k = 1; k < 6; k++) s += `<path d="M22 118A90 ${90 - k * 15} 0 0 1 203 118" fill="none" stroke="${c}" stroke-width=".7" opacity=".6"/>`;
      for (let x = 42; x < 200; x += 20) s += `<path d="M112 28L${x} 118" stroke="${c}" stroke-width=".6" opacity=".5"/>`;
      return [c, s + '<path d="M70 118l12-22 12 22zM120 118l15-30 15 30z" fill="#2d6a4f" opacity=".85"/><rect x="10" y="118" width="205" height="12" fill="url(#metal)"/>' + lights(20, 210, 15, 124, c)]; };
    // 11 Loge Impériale — salle du trône
    A[11] = () => { const c = '#e6b8ff'; let s = sky(11, false) + '<path d="M40 130V45L112 15L185 45V130Z" fill="#1c1430" stroke="url(#metalH)" stroke-width="3"/><path d="M85 120V70Q112 50 140 70V120Z" fill="#3b2066" stroke="#f3c969" stroke-width="2"/><rect x="78" y="118" width="69" height="8" fill="#f3c969"/><path d="M97 52L102 40L108 50L112 36L117 50L123 40L128 52Z" fill="#f3c969"/><circle cx="112" cy="88" r="18" fill="url(#glow)" opacity=".6"/>';
      for (const x of [55, 170]) s += `<rect x="${x - 4}" y="55" width="8" height="70" fill="url(#metalH)"/><circle cx="${x}" cy="52" r="5" fill="${c}"/>`;
      return [c, s]; };
    // 12 Salle d'analyse — radar et écrans
    A[12] = () => { const c = '#3dffb0'; let s = sky(12, false) + panel(10, 112, 205, 22, 4) + '<rect x="15" y="25" width="90" height="80" rx="4" fill="#06141a" stroke="url(#metalH)" stroke-width="3"/>';
      for (const r of [34, 22, 10]) s += `<circle cx="60" cy="65" r="${r}" fill="none" stroke="${c}" stroke-width=".8" opacity=".7"/>`;
      s += `<path d="M60 65L90 50A34 34 0 0 0 60 31Z" fill="${c}" opacity=".35"/><circle cx="74" cy="52" r="2" fill="#fff"/><circle cx="48" cy="80" r="1.6" fill="#ff6b6b"/><rect x="115" y="25" width="95" height="38" rx="4" fill="#06141a" stroke="url(#metalH)" stroke-width="3"/><polyline points="120,55 132,45 142,50 155,36 168,42 180,32 192,38 205,30" fill="none" stroke="${c}" stroke-width="1.5"/><rect x="115" y="68" width="95" height="37" rx="4" fill="#06141a" stroke="url(#metalH)" stroke-width="3"/>`;
      [14, 22, 10, 26, 18, 30, 16].forEach((h, i) => { s += `<rect x="${122 + i * 12}" y="${100 - h}" width="7" height="${h}" fill="${c}" opacity=".75"/>`; });
      return [c, s + lights(25, 205, 14, 123, c)]; };
    return A.map(f => { const [c, body] = f(); return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 148">${defs(c)}${body}${frame(c)}</svg>`; });
  })();
  const STATION_CSS = '.photo_batiment{filter:none!important;}.photo_batiment::after{display:none!important;}' +
    STATION_SVG.map((svg, i) => `.photo_batiment#photo${i}{background:url("data:image/svg+xml,${encodeURIComponent(svg)}") center/cover no-repeat!important;}`).join('');

