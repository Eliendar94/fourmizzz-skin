  const vars = (c) => `:root{--fz-bg:${c.bg};--fz-panel:${c.panel};--fz-panel2:${c.panel2};--fz-border:${c.border};--fz-text:${c.text};--fz-accent:${c.accent};--fz-link:${c.link};--fz-danger:${c.danger};--fz-radius:${c.radius}px;--fz-font:${c.font};--fz-side-dim:${c.sideDim};--fz-glow:${c.glow};--fz-bg-veil:${c.bgVeil};--fz-bg-img:${c.bgImg?`url("${c.bgImg}")`:'none'};--fz-side-img:${c.sideImg?`url("${c.sideImg}")`:'none'};--fz-photo-filter:${c.holo?'grayscale(1) sepia(1) hue-rotate(160deg) saturate(2.4) brightness(.95) contrast(1.15)':'none'};--fz-icon-filter:${c.holo?'hue-rotate(170deg) saturate(1.4) brightness(1.1)':'none'};}`;

  const style = document.createElement('style');
  style.id = 'fz-skin';
  const apply = () => {
    const futur = cfg.enabled && PRESETS[cfg.preset] && PRESETS[cfg.preset].futur;
    style.textContent = !cfg.enabled ? '' : (futur ? FUTUR_IMPORT : '') + vars(cfg) + SKIN_CSS + (futur ? FUTUR_CSS : '') + (cfg.stationImg ? STATION_CSS + CUSTOM_IMG_CSS : '') + (cfg.buildBtn ? BUILD_BTN_CSS : '') + PONTE_TABLE_CSS + RING_CSS + MSG_TAG_CSS + MEMBERS_CSS + CHAT_CSS + PSEUDO_CSS + ALLY_NAME_CSS + forumCss(cfg) + (cfg.neonIcons ? msgIconCss(cfg) : '') + armyHeadCss(cfg.accent) + RES_LAYOUT_CSS + (cfg.neonIcons ? extraIconCss(cfg) : '') + (cfg.neonIcons ? neonIconCss(cfg.accent) + compteIconCss(cfg.accent) + menuIconCss(cfg.accent) + cplusIconCss(cfg) : '');
    document.documentElement.classList.toggle('fz-has-bg', !!(futur && cfg.bgImg));
  };
  apply();
  (document.head || document.documentElement).appendChild(style);

