  // ---------- Thèmes prédéfinis ----------
  // v1.66 : seul le thème Futuriste est conservé (les autres n'étaient plus adaptés au skin)
  const PRESETS = {
    'Futuriste':{ bg:'#05070d', panel:'#0e1e34', panel2:'#0a1a2e', border:'#1d4f73', text:'#d6ecff', accent:'#39d0ff', link:'#7cffc4', danger:'#ff5470', sideDim:1, futur:true },
  };
  const DEFAULT = { preset:'Futuriste', ...PRESETS['Futuriste'], holo:true, stationImg:true, buildBtn:true, neonIcons:true, glow:0.5, bgImg:'', sideImg:'', bgVeil:0.55, radius:10, font:'"Segoe UI",system-ui,sans-serif', enabled:true };

  // v1.66 : seuls l'intensité des néons et l'image de fond restent réglables ; les anciens réglages (autre thème, couleurs…) sont ignorés
  const load = () => { try { const s = JSON.parse(GM_getValue('fzSkin', '{}')); return { ...DEFAULT, ...(s.glow !== undefined ? { glow: +s.glow } : {}), ...(typeof s.bgImg === 'string' ? { bgImg: s.bgImg } : {}) }; } catch (e) { return { ...DEFAULT }; } };
  const save = (c) => GM_setValue('fzSkin', JSON.stringify({ glow: c.glow, bgImg: c.bgImg }));
  let cfg = load();

