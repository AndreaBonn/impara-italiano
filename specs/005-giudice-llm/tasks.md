# 005 — Scomposizione

Una riga per sub-task: id, dipendenze, cosa traccia, come si verifica.
Le fasi sono indipendentemente mergiabili: dopo la fase 1 il corso è usabile anche se
la 2 e la 3 non arrivano mai.

## Fase 1 — Conversazioni

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 1.1 | Adattatori: `llm-providers.js`, quattro voci `url`/`headers`/`body`/`read` + mappa errori | — | D2, A2 | `npm test`: per ogni provider, body costruito e testo estratto da una risposta finta; `read()` non solleva su JSON malformato | 3h |
| 1.2 | Regole pure: `llm-rules.js` (prompt per lingua, prossimo provider, permanente/transitorio, parsing, clamp, cache-key, redazione) | — | D1, A4, A5 | test del clamp e della cascata su sequenze di esiti finti | 4h |
| 1.3 | Chiavi: `llm-keys.js`, container `linguai.llm.v1` fuori dallo stato | — | A3 | `exportState()` non le contiene **e** il container sì (stesso test); `Core.reset()` le cancella | 2h |
| 1.4 | Rete: `llm.js` con `useTransport`, timeout, cascata, cache di sessione, gate su protocollo e consenso | 1.1, 1.2, 1.3 | A2, A5 | trasporto finto: 401 esce dalla cascata, 429 passa oltre e resta eleggibile, `file:` -> `available()` falso | 3h |
| 1.5 | Estrazione `judge`/`commit`/`reject` in `talk-run.js`; `answer()` resta facciata | — | A1 | `tests/unit/talk-run.test.mjs` invariato e verde | 2.5h |
| 1.6 | Consenso LLM sul modello di `consent.js`, gate in un punto solo dentro `llm.js` | 1.4 | R10 | test: senza consenso nessuna chiamata parte | 1.5h |
| 1.7 | Aggancio in `views-talk.js`: stato "verifico", promozione, feedback con `textContent`, annullamento all'uscita dalla rotta | 1.4, 1.5, 1.6 | D1, D3 | test DOM: la promozione muove la scena; il payload XSS non esegue | 3h |
| 1.8 | **Sezione dedicata nelle Impostazioni**: quattro campi chiave, ordine dei provider, consenso, "prova la chiave", "cancella le chiavi", ultimi 4 caratteri visibili | 1.3, 1.6 | D2 | click-through: chiave finta -> prova -> "rifiutata"; ogni controllo azionato e il suo esito registrato | 4h |
| 1.9 | CSP: quattro host in `connect-src`, commento sopra il meta riscritto | — | A6 | `tests/dom/csp.spec.js` verde sulle 15 rotte | 1h |
| 1.10 | ~34 chiavi UI × 5 lingue | 1.7, 1.8 | R9 | `node scripts/parity.mjs` verde | 3h |
| 1.11 | Privacy: `docs/PRIVACY.it.md`, righe in `specs/004-lancio-pubblico/riscontri.md`, testo × 5 lingue in `views-privacy.js` | 1.4 | R10 | ogni affermazione ha il suo comando nella tabella dei riscontri | 4h |
| 1.12 | `PRECACHE`, ordine `<script>` in `index.html`, costanti in `_harness.mjs`, `check_swversion.mjs --napraw` | 1.1-1.4 | — | `check_precache.mjs` e `check_swversion.mjs` verdi | 2h |
| 1.13 | Sei mutazioni nuove in `scripts/mutations.mjs` su `llm-rules.js` | 1.2 | — | `npm run test:mutations` verde | 1.5h |

Sottototale 34.5h. Con buffer del 20%: **~41h**.

Precondizione già chiusa: preflight CORS verificato sui quattro provider il 2026-09-10.

## Fase 2 — Esercizi scritti (`trans`, `fill`)

| id | Attività | Dip. | Verifica | Stima |
|---|---|---|---|---|
| 2.1 | Gate asincrono in `Ex.kit.finish`, unico punto che chiama `onDone` | fase 1 | `tests/dom/exercises.spec.js`: `onDone` conta 1 anche sotto promozione | 4h |
| 2.2 | `Core.recordAnswer` spostata dopo il verdetto | 2.1 | le statistiche non contano due volte | 1h |
| 2.3 | Attesa nelle asserzioni DOM che oggi leggono lo stato subito dopo il click | 2.1 | `npm run test:dom` verde | 3h |

Con buffer: **~10h**.

## Fase 3 — Scrittura libera (`writing.js`)

| id | Attività | Dip. | Verifica | Stima |
|---|---|---|---|---|
| 3.1 | Feedback discorsivo sui sei compiti; `Writing.analyse` resta il primo lettore, l'LLM aggiunge righe e non voti | fase 1 | click-through su un compito con chiave reale | 6h |
| 3.2 | Stringhe e privacy per il nuovo percorso | 3.1 | `parity.mjs` verde | 2h |

Con buffer: **~12h**.
