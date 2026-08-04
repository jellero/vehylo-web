# Vehylo Web

Sito di prodotto multipagina di Vehylo, progettato con **Android Auto e Apple CarPlay al centro**.

## Pagine

- `index.html` — home e cockpit interattivo con Travel, Urban, Offroad, Web Radio, Voice e Alerts;
- `viaggio-urbano.html` — viaggio, meteo, autonomia, parcheggio, restrizioni, segnaletica e audio contestuale;
- `offroad.html` — inclinometro BLE, camera sottoscocca, waypoint, modalità crawl, voce e hardware;
- `voice-media-integrations.html` — web radio, entertainment, alert engine, Vehylo Voice, richiesta integrazioni e SDK/API;
- `platform.html` — Android Auto, Apple CarPlay, architettura, stato reale, sicurezza, roadmap e FAQ.

## Principi

- esperienza principale sul display dell’auto;
- companion Android/iPhone per configurazione, mapping, diagnostica e calibrazione;
- motore voce specializzato nel dominio veicolo e viaggio, senza promettere una hotword universale;
- web radio e media coordinati con avvisi e comandi vocali;
- integrazioni semplici per gli utenti e avanzate per terze parti;
- scope espliciti, firma, sandbox, provenienza e read-only predefinito;
- nessun link pubblico diretto all’APK;
- distinzione tra disponibile, pianificato e ricerca.

## Tecnologia

HTML, CSS e JavaScript statici, senza framework, loader runtime, chunk o dipendenze esterne.

## Pubblicazione

GitHub Pages distribuisce il contenuto del branch `main`.

## Licenza

Apache-2.0, salvo diversa indicazione.
