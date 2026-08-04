    const simulatorData = {
      travel: {
        title: 'Viaggio intelligente',
        subtitle: 'Torino → Annecy · percorso attivo',
        label: 'TRAVEL',
        html: `
          <div class="sim-grid">
            <div class="sim-main"><div class="route-overview"><div class="route-line"></div><div class="route-pin"></div><div class="route-label">A43 · salita media 4% · pioggia tra 38 km</div><div class="route-speed">90</div></div></div>
            <div class="sim-side">
              <div class="sim-side-card"><small>Arrivo</small><strong>17:18</strong><p>186 km · traffico +12 min</p></div>
              <div class="sim-side-card"><small>Autonomia</small><strong>438 km</strong><p>Sosta consigliata tra 1 h 24 min</p></div>
              <div class="sim-side-card"><small>Veicolo</small><strong>96 °C</strong><p>Olio cambio 82 °C · stato normale</p></div>
            </div>
          </div>
          <div class="sim-alert"><span class="alert-icon">☂</span><div><strong>Pioggia intensa prevista prima del Frejus</strong><span>Riduzione della visibilità stimata tra 32 minuti.</span></div></div>`
      },
      urban: {
        title: 'Assistente urbano',
        subtitle: 'Milano · destinazione in centro',
        label: 'URBAN',
        html: `
          <div class="sim-grid">
            <div class="sim-main"><div class="urban-map"><div class="urban-road r1"></div><div class="urban-road r2"></div><div class="urban-road r3"></div><div class="urban-block b1"></div><div class="urban-block b2"></div><div class="urban-block b3"></div><div class="urban-block b4"></div><div class="zone-badge">Area con restrizioni tra 900 m</div><div class="parking-pin">P</div><div class="school-pin">ZONA 30 · SCUOLA</div></div></div>
            <div class="sim-side">
              <div class="sim-side-card"><small>Parcheggio</small><strong>7 posti</strong><p>Garage compatibile · altezza 2,10 m</p></div>
              <div class="sim-side-card"><small>Batteria 12 V</small><strong>12,3 V</strong><p>Tre tragitti brevi consecutivi</p></div>
              <div class="sim-side-card"><small>Traffico</small><strong>+8 min</strong><p>Deviazione disponibile</p></div>
            </div>
          </div>
          <div class="sim-alert"><span class="alert-icon">30</span><div><strong>Zona scolastica e limite ridotto</strong><span>Il limite cambia tra 280 metri; attraversamento pedonale frequente.</span></div></div>`
      },
      offroad: {
        title: 'Offroad control',
        subtitle: 'Traccia Val di Susa · waypoint 04',
        label: 'OFFROAD',
        html: `
          <div class="sim-grid">
            <div class="sim-main"><div class="offroad-main"><div class="camera-feed"><div class="mountain m1"></div><div class="mountain m2"></div><div class="trail"></div><div class="rock r1"></div><div class="rock r2"></div><div class="rock r3"></div><div class="trajectory"></div><div class="camera-label">CAMERA SOTTOSCOCCA · CONCEPT</div></div><div class="inclinometer"><div class="roll-gauge"><div class="vehicle-shape"></div></div><div class="gauge-reading"><strong>9° L</strong><span>Pitch +14° · limite configurato 24°</span></div></div></div></div>
            <div class="sim-side">
              <div class="sim-side-card"><small>Quota</small><strong>1.462 m</strong><p>Heading 286° · GPS preciso</p></div>
              <div class="sim-side-card"><small>Velocità crawl</small><strong>6 km/h</strong><p>Sterzo 18° destra</p></div>
              <div class="sim-side-card"><small>Termico</small><strong>84 °C</strong><p>Cambio · motore 97 °C</p></div>
            </div>
          </div>
          <div class="sim-alert"><span class="alert-icon">⌁</span><div><strong>Rollio in aumento sul lato sinistro</strong><span>Rallenta e correggi la traiettoria; soglia personale tra 7°.</span></div></div>`
      },
      vehicle: {
        title: 'Vehicle Health',
        subtitle: 'Profilo verificato · scansione completata',
        label: 'VEHICLE',
        html: `
          <div class="sim-grid">
            <div class="sim-main"><div class="vehicle-health"><div class="health-score"><div class="score-ring"><div class="score-inner"><div><strong>94</strong><span>su 100 · stato buono</span></div></div></div></div><div class="health-list"><div class="health-row"><div><strong>Motore e raffreddamento</strong><small>Nessuna anomalia rispetto alla baseline</small></div><span class="health-state">OK</span></div><div class="health-row"><div><strong>Batteria 12 V</strong><small>Avviamento leggermente più lento del solito</small></div><span class="health-state warn">OSSERVA</span></div><div class="health-row"><div><strong>Readiness monitor</strong><small>8 monitor completati su 8</small></div><span class="health-state">OK</span></div><div class="health-row"><div><strong>Diagnostica</strong><small>Nessun DTC stored, pending o permanent</small></div><span class="health-state">OK</span></div></div></div></div>
            <div class="sim-side">
              <div class="sim-side-card"><small>Prossimo servizio</small><strong>4.320 km</strong><p>oppure 94 giorni</p></div>
              <div class="sim-side-card"><small>Adattatore</small><strong>99,3%</strong><p>41 ms · 0 frame persi</p></div>
              <div class="sim-side-card"><small>Profilo OEM</small><strong>12 segnali</strong><p>9 verificati · 3 sperimentali</p></div>
            </div>
          </div>
          <div class="sim-alert"><span class="alert-icon">⚡</span><div><strong>Batteria 12 V da osservare</strong><span>Nessuna urgenza: verifica il prossimo avviamento a freddo.</span></div></div>`
      }
    };

    const simTitle = document.getElementById('simTitle');
    const simSubtitle = document.getElementById('simSubtitle');
    const simModeLabel = document.getElementById('simModeLabel');
    const simContent = document.getElementById('simContent');
    const modeButtons = [...document.querySelectorAll('.mode-button')];

    function renderMode(mode) {
      const data = simulatorData[mode] || simulatorData.travel;
      simTitle.textContent = data.title;
      simSubtitle.textContent = data.subtitle;
      simModeLabel.textContent = data.label;
      simContent.innerHTML = data.html;
      modeButtons.forEach(button => {
        const active = button.dataset.mode === mode;
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', String(active));
      });
    }

    modeButtons.forEach(button => button.addEventListener('click', () => renderMode(button.dataset.mode)));
    renderMode('travel');

    const menuButton = document.getElementById('menuButton');
    menuButton?.addEventListener('click', () => {
      const firstTarget = document.querySelector('#esperienza');
      firstTarget?.scrollIntoView({ behavior: 'smooth' });
    });
