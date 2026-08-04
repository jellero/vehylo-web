# Vehylo Web

Sito di prodotto del progetto Vehylo, riprogettato con **Android Auto e Apple CarPlay al centro**.

## Struttura

- `index.html` — home, strategia display e prototipo interattivo Travel / Urban / Offroad / Vehicle;
- `viaggio-urbano.html` — viaggio, autonomia, meteo, parcheggio, ZTL, segnaletica e context engine;
- `offroad.html` — inclinometro BLE, camera sottoscocca, waypoint, modalità crawl e sicurezza;
- `platform.html` — architettura Android/iOS, stato reale, roadmap e FAQ.

## Principi di prodotto

- esperienza principale progettata per il display dell’auto;
- Android Auto tramite categorie e template della Android for Cars App Library;
- Apple CarPlay tramite app iPhone, entitlement e template CarPlay;
- companion Android e iOS per configurazione, mapping e diagnostica profonda;
- Android Automotive OS, sistemi nativi o display dedicato per esperienze estese e video quando consentito;
- distinzione esplicita tra funzioni disponibili, prossimo ciclo e ricerca;
- nessun link pubblico diretto all’APK.

## Tecnologia

Sito statico multipagina in HTML, CSS e JavaScript, senza framework, loader runtime, chunk, decompressione o dipendenze esterne.

## Pubblicazione

GitHub Pages distribuisce il contenuto del branch `main`.

## Licenza

Apache-2.0, salvo diversa indicazione.
