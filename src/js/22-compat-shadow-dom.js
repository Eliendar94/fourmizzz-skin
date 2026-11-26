  // ---------- Compatibilité « fmz-moderne » : sa zone d'outils est dans un shadow DOM ----------
  const SHADOW_CSS = __CSS__('compat/fmz-moderne-outils.css');
  const SHADOW_CSS_2 = __CSS__('compat/fmz-moderne-fenetres.css');
  // Simulateur de durée (script tiers « cixy », dans un shadow DOM) aux couleurs du skin
  const SHADOW_CSS_SIM = __CSS__('compat/cixy-simulateur.css');
  function fzCompat() {
    if (!cfg.enabled) return;
    document.documentElement.classList.toggle('fz-fmz', !!(document.getElementById('fmz-moderne') || document.getElementById('fmz-cplus-zone') || document.getElementById('fmzOeuf')));
    // zones isolées (shadow DOM) des scripts tiers : on y injecte le style du skin
    [['fmz-cplus-host', SHADOW_CSS], ['fz-radar-host', SHADOW_CSS_2], ['fmz-ravito-host', SHADOW_CSS_2], ['cixy-simduree', SHADOW_CSS_SIM]].forEach(([id, css]) => {
      const host = document.getElementById(id);
      if (host && host.shadowRoot && !host.shadowRoot.getElementById('fz-shadow')) {
        const ss = document.createElement('style'); ss.id = 'fz-shadow'; ss.textContent = css;
        host.shadowRoot.appendChild(ss);
      }
    });
    // Écart de 16 px entre la boîte ressources et Compte + (un script tiers impose sa propre marge en ligne)
    const cpBox = document.getElementById('boiteComptePlus'), info = document.querySelector('.contenu_boite_info');
    const cpTitle = cpBox && cpBox.querySelector('.titre_colonne_cliquable');
    if (cpTitle && info) {
      const gap = cpTitle.getBoundingClientRect().top - info.getBoundingClientRect().bottom;
      const cur = parseFloat(getComputedStyle(cpBox).marginTop) || 0;
      if (Math.abs(gap - 16) > 1) document.documentElement.style.setProperty('--fz-cp-mt', Math.round(cur + 16 - gap) + 'px');
    }
    // La position de la zone de fmz-moderne n'est jamais modifiée par le skin : son script la gère seul.
  }

