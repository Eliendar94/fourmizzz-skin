  // ---------- Panneau de réglages ----------
  const PANEL_CSS = __CSS__('reglages/panneau.css');

  const FIELDS = [
    ['bg','Fond'],['panel','Blocs'],['panel2','Menu / en-têtes'],['border','Bordures'],
    ['text','Texte'],['accent','Accent / titres'],['link','Liens'],['danger','Alertes'],
  ];

  function buildPanel() {
    const ps = document.createElement('style'); ps.textContent = PANEL_CSS; document.head.appendChild(ps);
    const btn = document.createElement('button'); btn.id = 'fz-skin-btn'; btn.title = 'Réglages du skin'; btn.textContent = '🎨';
    const p = document.createElement('div'); p.id = 'fz-skin-panel';
    p.innerHTML = `<h3>🎨 Skin Fourmizzz <small style="opacity:.6;font-weight:400">v${(typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || ''}</small></h3>
      <label>Activé <input type="checkbox" data-k="enabled"></label>
      <label>Thème <select data-k="preset">${Object.keys(PRESETS).map(n=>`<option>${n}</option>`).join('')}</select></label>
      ${FIELDS.map(([k,l])=>`<label>${l} <input type="color" data-k="${k}"></label>`).join('')}
      <label>Décors latéraux <input type="range" min="0" max="1" step="0.05" data-k="sideDim"></label>
      <label>Photos hologramme (unités) <input type="checkbox" data-k="holo"></label>
      <label>Bâtiments station spatiale <input type="checkbox" data-k="stationImg"></label>
      <label>Bouton « Construire » <input type="checkbox" data-k="buildBtn"></label>
      <label>Icônes néon <input type="checkbox" data-k="neonIcons"></label>
      <label>Intensité néon <input type="range" min="0" max="1.5" step="0.05" data-k="glow"></label>
      <label>Image de fond (URL) <input type="text" data-k="bgImg" placeholder="https://…"></label>
      <label>Voile sur le fond <input type="range" min="0" max="1" step="0.05" data-k="bgVeil"></label>
      <label>Image latérale (URL) <input type="text" data-k="sideImg" placeholder="https://…"></label>
      <label>Arrondis <input type="range" min="0" max="20" step="1" data-k="radius"></label>
      <div class="row"><button data-act="reset">Réinitialiser</button><button class="primary" data-act="close">OK</button></div>`;
    document.body.append(btn, p);

    const sync = () => p.querySelectorAll('[data-k]').forEach(el => {
      const k = el.dataset.k; if (el.type === 'checkbox') el.checked = cfg[k]; else el.value = cfg[k];
    });
    sync();
    btn.onclick = () => { p.style.display = p.style.display === 'block' ? 'none' : 'block'; };
    p.addEventListener('input', e => {
      const el = e.target, k = el.dataset.k; if (!k) return;
      if (k === 'preset') { cfg = { ...cfg, preset: el.value, ...PRESETS[el.value] }; sync(); }
      else cfg[k] = el.type === 'checkbox' ? el.checked : (el.type === 'range' ? +el.value : el.value);
      apply(); save(cfg);
    });
    p.addEventListener('click', e => {
      const a = e.target.dataset.act;
      if (a === 'close') p.style.display = 'none';
      if (a === 'reset') { cfg = { ...DEFAULT }; sync(); apply(); save(cfg); }
    });
  }
