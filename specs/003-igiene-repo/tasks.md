# 003 - Igiene del repository: scomposizione

Versione 1.0. Ogni riga porta il proprio check osservabile: un comando da eseguire o un output
da guardare, mai "controllo che funzioni". Le stime sono in minuti di lavoro su questo
codebase. La colonna "commit" indica il messaggio Conventional Commit proposto; le voci senza
commit non sono committabili da sole.

| id | dip. | fix | descrizione | stima |
|---|---|---|---|---|
| T1 | - | MINOR 5 | untrack del log di lavoro interno | 10 min |
| T2 | T1 | M2 | rimozione del prototipo originale | 10 min |
| T3 | - | B3 | workflow CI con i gate esistenti | 45 min |
| T3b | T3, A1 | B3 | badge di stato nel README | 10 min |
| T4 | - | MINOR 3a | traccia dell'URL caduto dal precache | 15 min |
| T5 | T3 | MINOR 3b | gate statico index.html -> PRECACHE | 60 min |
| T6a | - | M5 | misura del rumore ESLint | 30 min |
| T6b | T6a, T3 | M5 | ESLint bloccante sui quattro tipi di file | 60 min |
| T6c | T6b | M5 | correzione dei difetti reali trovati | 30-90 min |
| T7 | T5, T6b | M4 | estrazione di views-talk.js | 90 min |
| T8a | - | MINOR 2 | consolidamento della policy CSP | 20 min |
| T8b | T8a, T7 | MINOR 2 | CSP in index.html, verifica su HTTP | 45 min |
| T8c | T8b | MINOR 2 | verifica da file:// su due browser | 20 min |
| T9 | T5, T6b, T7 | - | allineamento di CLAUDE.md | 20 min |
| T10 | T8c | MINOR 2 | spec di regressione sulle violazioni CSP | 40 min |

---

## T1 - Untrack del log di lavoro interno

`git rm --cached docs/REPORT_ATTIVITA.md`; voce in `.gitignore` sotto una nuova sezione con
commento in polacco, nello stile del file (`# dziennik pracy - zostaje na dysku, poza
repozytorium`).

Il file **resta sul disco e resta aggiornabile**: una rule globale impone di aggiornarlo a ogni
sessione, e questo fix cambia solo il fatto che non entri più nei commit. La deviazione va
detta nel corpo del commit, non nascosta.

- **verify:** `git ls-files | grep -c REPORT_ATTIVITA` -> `0`; `wc -l docs/REPORT_ATTIVITA.md`
  -> `362`; `git status --short` non elenca il file in nessuna forma.
- **commit:** `chore: stop tracking the internal activity log`

## T2 - Rimozione del prototipo originale

`git rm impara-italiano-pl.html` (1026 righe, 55 KB, prototipo monolitico del primo commit).
Va dopo T1 perché il suo unico riferimento nel repo è `docs/REPORT_ATTIVITA.md:165`, che con
T1 è già uscito dai file tracciati.

- **verify:** `grep -rn impara-italiano-pl . --exclude-dir=.git --exclude-dir=node_modules`
  non restituisce nulla; `npm run test:all` verde.
- **commit:** `chore: remove the original prototype left in the repository root`

## T3 - Workflow CI con i gate esistenti

`.github/workflows/ci.yml`: trigger `push` + `pull_request`, `ubuntu-latest`,
`actions/checkout@v4`, `actions/setup-node@v4` con `node-version: 24` e `cache: npm`, poi
`npm ci`, `npx playwright install --with-deps chromium`, e i gate in ordine di costo crescente:
`node scripts/validate.mjs`, `node scripts/parity.mjs`, `npm test`, `npm run test:dom`.

Nessun avvio manuale del server: `playwright.config.js` ha già `webServer` con
`node scripts/serve.mjs 8123` e `reuseExistingServer: false`. Il file è già CI-aware
(`process.env.CI` governa workers, `forbidOnly`, reporter).

Node 24 non è arbitrario: `npm test` passa la glob `"tests/unit/**/*.test.mjs"` a
`node --test`, supportata solo da Node 21 in poi.

- **verify:** eseguire in sequenza in una shell pulita gli stessi comandi del file e osservare
  exit 0 su tutti; YAML validato dall'hook `format-changed-file.sh` (yamllint) alla scrittura.
- **commit:** `ci: run the existing gates on every push`

## T3b - Badge di stato nel README - BLOCCATO DA A1

Una riga sotto il titolo di `README.md`. Serve lo slug `owner/repo` reale: un badge verso un
repo inesistente è un'immagine rotta in cima al README pubblico, cioè l'opposto dell'effetto
voluto.

- **verify:** l'URL del badge aperto nel browser restituisce l'immagine di stato, non un 404.
- **commit:** `docs: add the pipeline status badge`

## T4 - Traccia dell'URL caduto dal precache

`sw.js:113-116`: dentro il `.catch(...)` aggiungere `console.warn("[sw] precache pominął: " + u)`
mantenendo il `return null`. Messaggio e commento in polacco, come tutto il file.

Il catch **non è una svista**: il commento a `sw.js:112` lo motiva (`addAll` fallisce in blocco
se cade un solo file, meglio caricare il caricabile che lasciare lo studente senza nulla).
Quella decisione resta; si aggiunge solo la traccia, perché resilienza e silenzio sono due cose
diverse.

**Non alzare `SW_VERSION`**: la costante governa il nome della cache della shell e il CLAUDE.md
la lega ai file *in* `PRECACHE`. `sw.js` non è in `PRECACHE` e il contenuto cacheato non cambia:
un bump qui invaliderebbe la shell di ogni studente senza motivo.

- **verify:** inserire temporaneamente `"./assets/js/non-esiste.js"` in `PRECACHE`, servire con
  `node scripts/serve.mjs 8123`, ricaricare con DevTools su Application/Console, osservare la
  riga `[sw] precache pominął: ./assets/js/non-esiste.js` e la pagina comunque usabile; togliere
  la voce e osservare che la riga sparisce.
- **commit:** `fix(sw): name the file that dropped out of the precache`

## T5 - Gate statico index.html -> PRECACHE

Nuovo `scripts/check_precache.mjs`, modulo Node come `validate.mjs` e `parity.mjs`, intestazione
in polacco che spiega quale difetto previene. Estrae i `src` degli `<script>` e gli `href` dei
`<link rel=stylesheet|manifest>` da `index.html`, normalizza il prefisso `./` e li confronta con
l'array `PRECACHE` di `sw.js`. Exit 1 con l'elenco dei mancanti, exit 0 con una riga di
riepilogo altrimenti.

`PRECACHE` si estrae valutando la sola dichiarazione in `node:vm`, lo stesso schema che
`validate.mjs` già usa per i file dati, non con una regex sull'array.

Confronto in **una sola direzione** (D3): la direzione inversa fallirebbe subito e a ragione,
perché `PRECACHE` contiene file caricati a runtime che in `index.html` non compaiono.

`package.json`: script `"check:precache"`. Step nel workflow di T3.

- **verify:** `node scripts/check_precache.mjs; echo $?` -> `0` sullo stato attuale (baseline
  misurata: 50 script in `index.html`, 65 voci in `PRECACHE`, 0 mancanti); togliendo
  `"./assets/js/app.js"` da `PRECACHE` -> `1` con quel path stampato; ripristinando -> `0`.
- **commit:** `ci(precache): fail when index.html loads a file the worker never caches`

## T6a - Misura del rumore ESLint - non committabile

Config temporanea con `js.configs.recommended`, esecuzione, conteggio dei finding per regola
(`npx eslint . -f json`). Serve a decidere D1 con un numero invece che con un'impressione: se il
conto è basso, il set bloccante si allarga.

- **verify:** una tabella `regola -> occorrenze -> file` nel report di sessione; la config
  temporanea non resta sul disco (`git status --short` pulito).

## T6b - ESLint bloccante sui quattro tipi di file

`eslint.config.js` a root, CommonJS (`package.json` non ha `"type": "module"`, e
`playwright.config.js` è già CJS).

Quattro blocchi, non due, perché il repo ha quattro nature di file:

1. `assets/js/**/*.js` -> `ecmaVersion: 2020`, `sourceType: "script"`, globali browser più i
   globali di progetto in `readonly`, ricavati dagli assegnamenti `global.X =`:
   `Anki, App, Audio2, Cils, Consent, Core, Drills, Errors, Ex, Frequency, Fsrs, I18n, Keys,
   Lemma, Lex, LINGUAI, Lookup, Placement, PWA, Recorder, Search, Train, Verbs, Views, Writing`,
   più i globali dei dati `AUDIO_INDEX, CONVERSATIONS, GRAMMAR_REF, PHONETICS, CILS, READINGS,
   INTERFERENCE, FREQUENCY, WRITING`. `readonly` è corretto: ogni modulo si esporta via
   `global.X = ...`, mai assegnando il nome nudo.
2. `sw.js` -> globali `serviceworker` (`self`, `caches`, `clients`), non `browser`.
3. `scripts/**/*.mjs` + `tests/unit/**/*.mjs` -> `sourceType: "module"`, globali Node.
4. `tests/dom/**/*.js` + `playwright.config.js` + `eslint.config.js` -> `sourceType: "commonjs"`,
   globali Node **e** browser (i callback di `page.evaluate` usano `window`/`document`).

`ignores`: `node_modules/**`, `data/**` (104 file di contenuto), `audio/**`, `test-results/**`,
`playwright-report/**`, `.playwright-mcp/**`.

`package.json`: script `"lint": "eslint ."`, devDependencies `eslint` e `@eslint/js` (dichiarato,
non pescato come transitiva). Step nel workflow prima dei test, perché è il gate più veloce.

- **verify:** `npm run lint; echo $?` -> `0`; introdurre di proposito
  `var x = nomeInesistente;` in `assets/js/views.js` -> `1` con `no-undef`; rimuoverlo -> `0`.
  In più `git diff --stat` di questo commit non tocca alcun file in `assets/js/`: è la prova che
  la config è tarata sul codice esistente e non ha chiesto un refactor.
- **commit:** `build(lint): add eslint over the browser scripts and the node tooling`

## T6c - Correzione dei difetti reali trovati - solo se T6a ne trova

Un commit per difetto se sono di natura diversa. Ogni `no-undef` o `no-dupe-keys` è un bug, non
rumore: si corregge, non si silenzia. Nessun `eslint-disable` inline nel codice di produzione.

- **verify:** per ciascun difetto, il percorso runtime o il test che lo espone prima e dopo;
  `npm run test:all` verde.
- **commit:** `fix(<scope>): <difetto specifico>`

## T7 - Estrazione di views-talk.js

Nuovo `assets/js/views-talk.js`: IIFE `(function (global) { "use strict"; ... })(window)`, script
classico, nessun `import`/`export`. Intestazione in polacco sul modello di `views-shadow.js`, che
dichiara le dipendenze.

Consuma il contratto **già esistente**, non ne apre uno nuovo, identico a
`assets/js/views-shadow.js:26-31`:

```js
var esc = Core.esc;
var t = function (k, v) { return I18n.t(k, v); };
var set = Views.shell.set;
var pageHead = Views.shell.head;
var el = Views.shell.root;
var empty = Views.shell.empty;
```

Confini verificati: il blocco `views.js:490-766` (dal separatore `ROZMOWY NA GŁOS` alla chiusura
di `runConversation`) non usa altri helper locali di `views.js`. Gli unici identificatori esterni
sono i sei sopra più i globali `Core`, `Ex`, `Audio2`, `App`, `I18n`; `wireSpeakers`, `similarity`
e `norm` arrivano già qualificati. Le funzioni `indeksTury`, `bubble`, `dalej` e le altre sono
interne a `runConversation` e viaggiano con lui. `runConversation` non ha chiamanti fuori dal
blocco (misurato: solo `views.js:495`, che è dentro il blocco).

Tre punti che l'estrazione tocca oltre ai due file JS, tutti e tre dimenticabili:

- `index.html`: `<script src="assets/js/views-talk.js"></script>` subito dopo la riga di
  `views.js`, con commento d'ordine in polacco (`po views.js: konsumuje Views.shell`), coerente
  con i cinque commenti d'ordine già presenti.
- `sw.js`: `"./assets/js/views-talk.js"` in `PRECACHE` subito dopo `views.js`.
- `sw.js`: `SW_VERSION` da `"v17"` a `"v18"`. Qui il bump **è dovuto**: cambia l'insieme dei file
  della shell.

- **verify**, in ordine, fermandosi al primo rosso:
  `node scripts/check_precache.mjs` -> 0 (prova che `PRECACHE` è allineato);
  `npm run lint` -> 0 (prova che nessun identificatore è rimasto orfano nei due file);
  `npx playwright test tests/dom/conversazione.spec.js` verde (54 s);
  `npm run test:all` verde;
  `wc -l assets/js/views.js` -> ~962;
  `grep -n SW_VERSION sw.js` -> `v18`;
  a mano su `http://localhost:8123/index.html#/conversazione`, una conversazione con biforcazione
  percorsa fino al riepilogo, con il pulsante del ramo alternativo azionato.
- **commit:** `refactor(talk): move the conversation view into its own file`

## T8a - Consolidamento della policy CSP - non committabile

Confrontare la policy del `security-reviewer` con la superficie misurata e scartare ciò che in
`<meta>` non ha effetto. Esito già consolidato in `plan.md` § La CSP, per direttiva:
`frame-ancestors` esce (ignorata dentro `<meta>`), `base-uri 'none'` e `form-action 'none'`
entrano nella forma stretta perché il progetto non ha né `<base>` né `<form>` (misurato).

- **verify:** ogni direttiva della policy finale è ancorata a una riga reale del codice; una
  direttiva senza riga a sostegno esce dalla policy.

## T8b - CSP in index.html, verifica su HTTP

`<meta http-equiv="Content-Security-Policy" content="...">` nel `<head>`, prima di
`<link rel="stylesheet">`. Accanto, un commento che dichiara cosa questa policy protegge davvero
(`script-src`, `object-src`, `base-uri`) e cosa no (lo stile, per D2).

- **verify:** con `node scripts/serve.mjs 8123`, percorrere le 15 rotte
  (`#/oggi`, `#/percorso`, `#/ripasso`, `#/allenamento`, `#/conversazione`, `#/grammatica`,
  `#/coniugatore`, `#/lessico`, `#/shadowing`, `#/velocita`, `#/esame`, `#/falsi`, `#/copertura`,
  `#/progressi`, `#/impostazioni`) con la console aperta e osservare **zero** messaggi contenenti
  "Content Security Policy". In più, uno per uno: audio di una lezione riprodotto; registrazione
  in `#/shadowing` riascoltata (blob); **download del backup da `#/impostazioni` che parte
  davvero** (il `security-reviewer` marca questo punto `BASIS: unknown`: un anchor con download
  non è coperto da `media-src` e la lettura statica non decide); favicon presente nella tab;
  quattro woff2 a 200 nel pannello Network; service worker `activated` in Application.
- **commit:** `chore(security): declare a content security policy in the page head`

## T8c - Verifica da file:// su due browser - CANCELLO DI A2

Aprire `index.html` con doppio click in Chromium e in Firefox, ripetere il giro delle rotte e la
riproduzione audio. È il vincolo numero uno del progetto e nessun gate automatico lo copre,
perché Playwright serve sempre su HTTP.

- **verify:** la pagina si disegna con i font corretti e la console è priva di violazioni CSP in
  **entrambi** i browser. Se anche uno solo rompe, T8b si revoca con `git revert`: non si tiene
  in repo una policy che impedisce di aprire il corso da disco. In quel caso il fix diventa una
  decisione da riportare, non altro lavoro.

## T9 - Allineamento di CLAUDE.md

Sezione "Kontrola jakości": aggiungere `npm run lint` e `node scripts/check_precache.mjs` alla
lista dei comandi. La nota "Po dopisaniu pliku do `assets/js/` albo `data/core/` dopisz go do
`PRECACHE`" acquista la riga che dice che ora esiste un gate a verificarlo. Menzionare
`views-talk.js` dove si descrive la struttura.

Aggiornamento autonomo permesso: cambiano convenzioni e strumenti del progetto.

- **verify:** ogni comando citato nella sezione eseguito e uscito 0;
  `grep -n "check_precache\|npm run lint" CLAUDE.md` restituisce le righe nuove.
- **commit:** `docs(claude): record the two new gates and the extracted talk module`

## T10 - Spec di regressione sulle violazioni CSP

`tests/dom/csp.spec.js`: per ciascuna delle 15 rotte, `page.on("console")` e `page.on("pageerror")`,
fallimento se compare un messaggio che contiene "Content Security Policy". Intestazione in
polacco che spiega perché la suite esistente non basta: una violazione CSP scrive in console e
non fa fallire alcun test.

Va dopo T8c e non prima: se la CSP viene revocata da A2, questa spec non ha oggetto.

- **verify:** `npx playwright test tests/dom/csp.spec.js` verde; rimuovendo `data:` da `img-src`
  in `index.html` il test **fallisce nominando la favicon**; ripristinando torna verde. Il rosso
  va visto, non assunto.
- **commit:** `test(csp): fail on any policy violation logged by the browser`
