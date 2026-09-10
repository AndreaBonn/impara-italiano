# 004 - Lancio pubblico: scomposizione

Versione 1.0. Una riga per sub-task. Ogni riga porta il requisito che traccia, le dipendenze
dirette (mai transitive), la stima in minuti di lavoro su questo codebase e la verifica
osservabile: un comando da eseguire o un output da guardare, mai "controllo che funzioni".

La colonna `tipo` distingue **codice** da **contenuto**: il secondo non accelera con una
seconda persona e vale 420 minuti su 1230, cioè il 34% del piano.

Le voci senza `commit` non sono committabili da sole.

## Fase A1 - anteprima social (245 min)

| id | dip. | tipo | descrizione | stima | commit |
|---|---|---|---|---|---|
| T1.1 | - | codice | campo `homepage` in `package.json` con l'indirizzo di pubblicazione, e `scripts/check_ogtags.mjs` che lo legge come unica fonte | 45 min | `chore(site): declare the publication address once` |
| T1.2 | - | codice | `scripts/og-template.html` (1200x630, font locali via `@font-face`, palette da `app.css`) e `scripts/build_og.mjs` che lo cattura con Playwright dopo `document.fonts.ready` | 90 min | `build(og): a script that renders the social preview` |
| T1.3 | T1.2 | codice | generare `assets/og/cover.png`, verificarne peso e dimensioni, committarlo | 30 min | `feat(og): the social preview image` |
| T1.4 | T1.1, T1.3 | codice | tag `og:*` e `twitter:*` nel `<head>` di `index.html`, con il commento che spiega perché sono statici e in una lingua sola | 30 min | `feat(og): meta tags so a shared link shows a preview` |
| T1.5 | T1.4 | codice | passo `check_ogtags.mjs` in `.github/workflows/ci.yml` e impronta di `sw.js` aggiornata | 30 min | `ci: gate the social preview tags` |
| T1.6 | T1.4 | codice | due righe in `CLAUDE.md`: l'immagine è generata e si rifà con uno script, i tag sono statici e non seguono `settings.lang` | 20 min | `docs(claude): how the social preview is produced` |

**Verifiche.**

- T1.1 -> `node scripts/check_ogtags.mjs` esce 1 con il messaggio "index.html non dichiara
  og:image": il gate esiste ed è rosso prima del lavoro che deve rendere verde.
- T1.2 -> `node scripts/build_og.mjs` produce un PNG e lo script stampa larghezza e altezza
  lette dall'intestazione del file, non dalla configurazione.
- T1.3 -> `ls -l assets/og/cover.png` sotto 300 KB; l'immagine aperta mostra il nome del corso
  nel font Fraunces, non in un sostituto di sistema; una seconda esecuzione di
  `build_og.mjs` lascia `git status --short` vuoto.
- T1.4 -> `grep -c 'property="og:' index.html` restituisce almeno 6;
  `node scripts/check_ogtags.mjs` esce 0.
- T1.5 -> `node scripts/check_swversion.mjs` esce 0; la CI mostra il passo nuovo verde.
- T1.6 -> nessuna verifica automatica, si legge il diff.
- **Chiusura di fase, dopo il push** -> `curl -s https://andreabonn.github.io/impara-italiano/
  | grep -c 'property="og:'` e `curl -s -o /dev/null -w '%{http_code} %{content_type}\n' .../assets/og/cover.png`
  restituiscono i valori della Definition of Done; l'anteprima è osservata su due piattaforme.

## Fase A2 - pagina 404 (185 min)

Dipendenza morbida: T2.1 usa il campo `homepage` introdotto da T1.1. Se A1 non è stata
eseguita, T2.1 lo introduce e T1.1 diventa a costo zero.

| id | dip. | tipo | descrizione | stima | commit |
|---|---|---|---|---|---|
| T2.1 | (T1.1) | codice | `404.html` a radice: riferimenti radice-assoluti, foglio di stile del corso, titolo italiano, cinque righe di lingua, un solo pulsante di ritorno, commento che spiega perché niente è relativo e perché le stringhe non stanno nei dizionari | 60 min | `feat(404): a not-found page that leads back to the course` |
| T2.2 | T2.1 | codice | `scripts/check_404.mjs`: nessun `href`/`src` relativo, prefisso coerente con `homepage`, esattamente un pulsante di ritorno | 45 min | `ci: gate the 404 page against relative links` |
| T2.3 | T2.1 | codice | `tests/dom/notfound.spec.js`: la pagina disegna, un solo pulsante, le cinque righe presenti, nessun errore in console | 45 min | `test(404): the page draws and reports no error` |
| T2.4 | T2.2 | codice | passo `check_404.mjs` in CI | 15 min | `ci: run the 404 gate` |
| T2.5 | T2.4 | codice | verifica su Pages a valle del push: stato 404, riferimenti assoluti a profondità arbitraria, ritorno senza ciclo | 20 min | - |

**Verifiche.**

- T2.1 -> aperto da `scripts/serve.mjs`, il file mostra il messaggio; i riferimenti puntano a
  `/impara-italiano/...` e quindi non caricano in locale. Questo è atteso e va dichiarato nel
  commento: il file è corretto solo sotto il prefisso di Pages.
- T2.2 -> `node scripts/check_404.mjs` esce 0; introdotto a mano un `href="index.html"`, esce 1
  nominando la riga. Il rosso va visto, non dedotto.
- T2.3 -> `npx playwright test tests/dom/notfound.spec.js` verde; rimosso il pulsante, rosso.
- T2.4 -> la CI mostra il passo nuovo verde.
- T2.5 -> `curl -s -o /dev/null -w '%{http_code}\n' .../questa-non-esiste` restituisce 404;
  `curl -s .../a/b/c/inesistente | grep -oE '(href|src)="[^"]*"'` non elenca nessun relativo;
  cliccato il pulsante, il corso si apre e il tasto indietro non torna sulla 404.

## Fase A3 - informativa privacy (735 min, 315 codice + 420 contenuto)

| id | dip. | tipo | descrizione | stima | commit |
|---|---|---|---|---|---|
| T3.0 | - | - | **bloccante**: ottenere dall'utente il nome del titolare e un indirizzo di posta funzionante; e la risposta a D5 (revoca del consenso vocale) | 15 min + attesa | - |
| T3.1 | - | codice | `specs/004-lancio-pubblico/riscontri.md`: una riga per affermazione, con il comando eseguito e il suo output | 60 min | `docs(privacy): the evidence table behind every claim` |
| T3.2 | T3.0, T3.1 | contenuto | `docs/PRIVACY.it.md`: il testo sorgente in italiano, la versione che il titolare sottoscrive | 120 min | `docs(privacy): the source text in Italian` |
| T3.3 | T3.2 | codice | `assets/js/views-privacy.js`: rotta `#/privacy`, sezioni come in `views-guide.js`, contatto come collegamento `mailto:`, rimando alla scheda del consenso vocale | 90 min | `feat(privacy): a route for the privacy notice` |
| T3.4 | T3.3 | codice | i sei tocchi del file nuovo: `<script>` in `index.html` dopo `views.js`, voce in `PRECACHE`, `check_precache`, impronta `check_swversion`, `privacy` in `TRASY`, voce in `EKRANY` della guida | 30 min | (con T3.3) |
| T3.5 | T3.2, T3.3 | contenuto | chiavi `privacy.*` in `data/i18n/ui-pl.js`, che è la lingua di riferimento di `parity.mjs` | 60 min | `feat(privacy): the notice in Polish` |
| T3.6 | T3.5 | contenuto | traduzione in `ui-en.js` | 60 min | `feat(privacy): the notice in English` |
| T3.7 | T3.5 | contenuto | traduzione in `ui-es.js` | 60 min | `feat(privacy): the notice in Spanish` |
| T3.8 | T3.5 | contenuto | traduzione in `ui-fr.js` | 60 min | `feat(privacy): the notice in French` |
| T3.9 | T3.5 | contenuto | traduzione in `ui-de.js` | 60 min | `feat(privacy): the notice in German` |
| T3.10 | T3.3 | codice | collegamento nel footer di `index.html` con `data-i18n`, commento del footer aggiornato, riga verso l'informativa in `views-settings.js` | 45 min | `feat(privacy): reach the notice from every screen` |
| T3.11 | T3.3, T3.10 | codice | `tests/dom/privacy.spec.js`: la rotta disegna nelle cinque lingue, `I18n.missing()` vuoto, il collegamento del footer porta lì | 60 min | `test(privacy): the notice draws in all five languages` |
| T3.12 | T3.6-T3.9, T3.11 | codice | chiusura: `parity.mjs`, `check_precache`, `check_swversion`, `test:all` verdi, impronta aggiornata | 15 min | `chore(sw): refresh the fingerprint` |
| T3.13 | T3.0 | codice | interruttore di revoca del consenso vocale in `views-settings.js` che chiama `Consent.ustaw`, più due chiavi per cinque lingue. **Confermato da D5: non più opzionale** | 65 min | `feat(settings): withdraw the speech recognition consent` |

**Verifiche.**

- T3.0 -> il contatto è scritto in una riga di questo file o in una risposta dell'utente.
  Finché manca, T3.2 non parte: un'informativa senza destinatario non è un'informativa.
- T3.1 -> ogni riga della tabella ha un comando riproducibile. Le righe obbligatorie:
  chiave di `localStorage` (`grep -rn "linguai.italiano" assets/js/`), assenza di analytics
  (`grep -rniE "gtag|googletagmanager|plausible|matomo|umami|posthog|fathom|sendBeacon" assets/js/ sw.js index.html`,
  vuoto), assenza di cookie (`grep -rn "document.cookie" assets/js/`, vuoto), font
  auto-ospitati (`grep -rn "fonts.googleapis\|fonts.gstatic" .`, vuoto), nessuna chiamata a
  domini terzi (`grep -rn "fetch(\|XMLHttpRequest" assets/js/ sw.js` e lettura degli URL),
  riconoscimento vocale che spedisce la voce (`assets/js/consent.js:1-20`,
  `assets/js/audio.js:224-245`), cosa memorizza il service worker (`sw.js:51-150`,
  `sw.js:235-280`), e l'hosting: GitHub vede l'indirizzo IP di chi apre il sito, che è il solo
  trattamento del piano che non avviene sul dispositivo dello studente.
- T3.2 -> ogni affermazione del testo trova la sua riga in `riscontri.md`. Un'affermazione
  senza riga si toglie, non si ammorbidisce.
- T3.3 -> `#/privacy` disegna; l'indirizzo di posta è cliccabile;
  `node scripts/check_precache.mjs` esce 1 finché T3.4 non è fatto (il rosso è la prova che
  il gate copre il file nuovo).
- T3.4 -> `npx playwright test tests/dom/routes.spec.js` verde con `privacy` nella lista;
  `node scripts/check_precache.mjs` e `check_swversion.mjs` escono 0.
- T3.5 -> `node scripts/parity.mjs` esce 1 elencando le chiavi mancanti nelle altre quattro
  lingue. È il rosso naturale che governa T3.6-T3.9.
- T3.6-T3.9 -> a ogni lingua completata, `node scripts/parity.mjs en` (o la sigla della lingua)
  esce 0. Dopo la quarta, `node scripts/parity.mjs` senza argomenti esce 0.
- T3.10 -> il collegamento appare su ogni schermata, non solo sulla prima: cambiando rotta tre
  volte resta visibile (è la proprietà per cui il footer sta fuori da `#main`).
- T3.11 -> `npx playwright test tests/dom/privacy.spec.js` verde; tolta una chiave da
  `ui-de.js`, il test è rosso su `I18n.missing()`. Ripristinare.
- T3.12 -> `npm run test:all` verde, i cinque gate escono 0.
- T3.13 -> tolto e rimesso il consenso dall'interruttore,
  `Core.state.settings.sttConsent` segue; riaprendo un esercizio con microfono dopo la revoca,
  la domanda ricompare.

## Riepilogo

| Fase | Sub-task | Codice | Contenuto | Totale |
|---|---|---|---|---|
| A1 | 6 | 245 min | 0 | 4h05 |
| A2 | 5 | 185 min | 0 | 3h05 |
| A3 | 13 (di cui 1 bloccante) | 380 min | 420 min | 13h20 |
| **Somma** | **24** | **810 min** | **420 min** | **20h30** |
| **Con buffer +20%** | | | | **24h30** |

Range da comunicare: **20-25 ore**, due giorni e mezzo o tre. Il buffer è visibile di
proposito: copre l'informazione che a oggi nessuno ha, non l'imprecisione di chi stima. Le
voci che possono farlo consumare per intero sono due, entrambe in A3: la stesura del testo
legale, che dipende da quanto il titolare vuole dire, e le quattro traduzioni, che vanno
rilette da chi conosce la lingua e non solo generate.

Se il tempo va negoziato, l'ordine di taglio è: A1 per intero (il corso resta usabile, perde
solo l'anteprima), poi A2. T3.13 non è più in questa lista: D5 lo ha reso vincolante, perché
senza di esso una frase dell'informativa sarebbe falsa. A3 non si taglia e non si
riduce a due lingue: un'informativa che esiste solo per chi studia in inglese lascia scoperti
gli altri quattro pubblici del corso, ed è proprio il pubblico che non legge l'inglese quello
che ha più bisogno di leggerla nella propria lingua.
