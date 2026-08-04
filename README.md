# Vehylo Web

Sito di prodotto del progetto Vehylo, riprogettato con **Android Auto al centro**.

## Struttura

- `index.html` — home, strategia display e prototipo interattivo Travel / Urban / Offroad / Vehicle;
- `viaggio-urbano.html` — viaggio, autonomia, meteo, parcheggio, ZTL, segnaletica e context engine;
- `offroad.html` — inclinometro BLE, camera sottoscocca, waypoint, modalità crawl e sicurezza;
- `platform.html` — architettura, stato reale delle funzioni, roadmap e FAQ.

## Principi di prodotto

- esperienza principale progettata per il display dell’auto;
- uso di categorie e template Android Auto approvati;
- companion Android per configurazione, mapping e diagnostica profonda;
- Android Automotive OS o display dedicato per esperienze estese e video quando consentito;
- distinzione esplicita tra funzioni disponibili, prossimo ciclo e ricerca;
- nessun link pubblico diretto all’APK.

## Tecnologia

Sito statico multipagina in HTML, CSS e JavaScript, senza framework e senza loader runtime, chunk, decompressione o dipendenze esterne.

## Pubblicazione

GitHub Pages distribuisce il contenuto del branch `main`.

## Licenza

Apache-2.0, salvo diversa indicazione.
