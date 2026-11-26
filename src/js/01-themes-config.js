  // ---------- Thèmes prédéfinis ----------
  const PRESETS = {
    'Nuit':     { bg:'#16181a', panel:'#212529', panel2:'#2b3036', border:'#3a4048', text:'#e4e1d8', accent:'#e0a84a', link:'#8fcf6b', danger:'#e06a5a', sideDim:0.35 },
    'Forêt':    { bg:'#121a14', panel:'#1c2a1f', panel2:'#24362a', border:'#35503d', text:'#e3eadf', accent:'#c9d86a', link:'#7fd0a0', danger:'#e07a5a', sideDim:0.5 },
    'Océan':    { bg:'#0f1620', panel:'#17222f', panel2:'#1f2e3f', border:'#2e4459', text:'#dfe8f1', accent:'#5cc2e6', link:'#9ad97a', danger:'#ef6f6f', sideDim:0.3 },
    'Fourmi rouge': { bg:'#1a1212', panel:'#261a19', panel2:'#332220', border:'#4d302c', text:'#efe3dd', accent:'#e2553f', link:'#f0b45a', danger:'#ff7a6a', sideDim:0.4 },
    'Futuriste':{ bg:'#05070d', panel:'#0e1e34', panel2:'#0a1a2e', border:'#1d4f73', text:'#d6ecff', accent:'#39d0ff', link:'#7cffc4', danger:'#ff5470', sideDim:1, futur:true },
    'Futuriste violet':{ bg:'#08050f', panel:'#1a1230', panel2:'#150e28', border:'#4a2f7a', text:'#ece0ff', accent:'#b77cff', link:'#5cf2e0', danger:'#ff5c8a', sideDim:1, futur:true },
  };
  const DEFAULT = { preset:'Futuriste', ...PRESETS['Futuriste'], holo:true, stationImg:true, buildBtn:true, neonIcons:true, glow:0.5, bgImg:'', sideImg:'', bgVeil:0.55, radius:10, font:'"Segoe UI",system-ui,sans-serif', enabled:true };

  const load = () => { try { return { ...DEFAULT, ...JSON.parse(GM_getValue('fzSkin', '{}')) }; } catch (e) { return { ...DEFAULT }; } };
  const save = (c) => GM_setValue('fzSkin', JSON.stringify(c));
  let cfg = load();

