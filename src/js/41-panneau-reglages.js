  // ---------- Panneau de réglages ----------
  const PANEL_CSS = __CSS__('reglages/panneau.css');

  function buildPanel() {
    const ps = document.createElement('style'); ps.textContent = PANEL_CSS; document.head.appendChild(ps);
    const btn = document.createElement('button'); btn.id = 'fz-skin-btn'; btn.title = 'Réglages du skin'; btn.textContent = '🎨';
    const p = document.createElement('div'); p.id = 'fz-skin-panel';
    p.innerHTML = `<h3>🎨 Skin Fourmizzz · Futuriste <small style="opacity:.6;font-weight:400">v${(typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || ''}</small></h3>
      <label>Intensité des néons <input type="range" min="0" max="1.5" step="0.05" data-k="glow"></label>
      <label class="fz-col">Image de fond (URL) <input type="text" data-k="bgImg" placeholder="https://…"></label>
      <div class="row"><button data-act="reset">Réinitialiser</button><button class="primary" data-act="close">OK</button></div>`;
    document.body.append(btn, p);

    const sync = () => p.querySelectorAll('[data-k]').forEach(el => {
      const k = el.dataset.k; if (el.type === 'checkbox') el.checked = cfg[k]; else el.value = cfg[k];
    });
    sync();
    btn.onclick = () => { p.style.display = p.style.display === 'block' ? 'none' : 'block'; };
    p.addEventListener('input', e => {
      const el = e.target, k = el.dataset.k; if (!k) return;
      cfg[k] = el.type === 'checkbox' ? el.checked : (el.type === 'range' ? +el.value : el.value);
      apply(); save(cfg);
    });
    p.addEventListener('click', e => {
      const a = e.target.dataset.act;
      if (a === 'close') p.style.display = 'none';
      if (a === 'reset') { cfg = { ...DEFAULT }; sync(); apply(); save(cfg); }
    });
  }
