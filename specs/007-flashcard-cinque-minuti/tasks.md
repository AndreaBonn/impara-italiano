# 007 - Scomposizione

Una riga per sub-task: id, dipendenze, cosa traccia, come si verifica. Le fasi sono
indipendentemente mergiabili: dopo la fase N il corso è usabile anche se N+1 non arriva
mai. Stessa forma di `specs/006-input-e-produzione/tasks.md`. Ogni test unitario si scrive
prima del codice e si vede rosso; ogni test su codice già esistente si verifica rompendo il
codice a mano e ripristinandolo.

Gate di chiusura di ogni fase, non ripetuti nelle righe: `npm run lint`, `npm test`,
`npm run test:mutations`, `npm run test:dom`, `node scripts/validate.mjs`,
`node scripts/parity.mjs`, `node scripts/check_precache.mjs`,
`node scripts/check_swversion.mjs`, `node scripts/coverage.mjs --min 99`.

## Fase 0 - Nessuna risposta persa alla chiusura (I1, D10)

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 0.1 | Test rosso in `tests/unit/store.test.mjs`: `save()` seguito da `flush()` scrive su `localStorage` senza avanzare l'orologio; `flush()` senza salvataggio in attesa non scrive | - | R8 | `npm test` rosso su `flush is not a function`, poi verde | 1h |
| 0.2 | `Store.flush()` (cancella il timer, chiama `persist`) e ascoltatore `pagehide` registrato una volta | 0.1 | R8 | test DOM: risposta a una carta in Ripasso, `page.reload()` entro 50 ms, la voce è in `state.reviews` | 1h |
| 0.3 | Mutazione: `flush` che non cancella il timer | 0.2 | R8 | `npm run test:mutations` verde, la riga uccide | 0,5h |

Sottototale 2,5h, con buffer **3h**. Commit: `fix(store): flush the pending save when the page goes away`.

## Fase 1 - Sessione a tempo sul mazzo esistente (I1)

**Precondizione: D1 e D2 confermate.**

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 1.1 | `flash-rules.js`, prima parte: `LIMITS = {ms: 300000, cards: 20}`, `isOver(start, now, answered)`, `remaining(start, now)` | - | I1, D2 | test: 19 risposte e 4:59 no; 20 risposte sì; 5:00 con 3 risposte sì; `now < start` non produce tempo negativo | 2h |
| 1.2 | `flash-run.js`: `start(dueCards)`, `current()`, `answer(q)` che chiama `Core.gradeCard` e poi valuta `isOver`, `summary()` | 1.1 | I1, R5 | test col clock del harness: la risposta alla carta aperta allo scadere viene registrata, la carta successiva non esiste | 3,5h |
| 1.3 | Costante `FLASH` in `tests/unit/_harness.mjs`, dopo `CORE` | 1.1 | - | `tests/unit/harness.test.mjs` verde | 0,5h |
| 1.4 | `views-flash.js`: `Views.cinque`, schermata iniziale (quante carte, bottone Inizia), carta `scrivi`, riepilogo (risposte, giuste, motivo della fine: tempo o tetto) | 1.2 | I1 | `routes.spec.js` con `cinque` in `TRASY` verde; `grep -n "innerHTML.*c.it" assets/js/views-flash.js` solo dentro `esc(` | 5h |
| 1.5 | Cronometro: `role="timer"`, `aria-live="off"`, annuncio singolo a 60 s in `role="status"`, intervallo ripulito da `Views.onLeave` | 1.4 | R5, R17 | test DOM con `page.clock.fastForward("05:00")` a carta aperta: la carta resta, il riepilogo arriva dopo la risposta; `App.go("percorso")` poi `fastForward`: nessun errore in console | 3h |
| 1.6 | Stato vuoto: nessuna carta in scadenza → testo e rimando a Percorso (in fase 2 lo sostituisce la riserva) | 1.4 | I1 | test DOM su profilo vuoto: messaggio visibile, bottone Inizia assente | 1h |
| 1.7 | Voce del rail sotto Ripasso, `EKRANY` in `views-guide.js`, link dallo stato vuoto di Ripasso | 1.4 | D1 | `routes.spec.js` "the side menu entries point at views that exist" verde; click sul link porta a `#/cinque` | 1,5h |
| 1.8 | Circa 16 chiavi (`nav.flash`, `flash.*`) × 5 lingue, `flash.guide*` per la guida | 1.4-1.7 | R6 | `node scripts/parity.mjs` e `tests/unit/i18n-klucze.test.mjs` verdi | 2,5h |
| 1.9 | Tre `<script>` in `index.html`, `PRECACHE`, `check_swversion.mjs --napraw` | 1.4 | - | `check_precache.mjs` e `check_swversion.mjs` verdi | 1h |
| 1.10 | 4 mutazioni su `isOver` e `remaining` (`>=` contro `>`, tetto ignorato, tempo ignorato, clamp a zero) | 1.1 | - | `test:mutations` verde, 4 uccise | 1h |
| 1.11 | `tests/dom/flash.spec.js`: 30 carte scadute, 20 risposte, riepilogo, `state.reviews` +20; reload a metà sessione | 1.5 | I1 | spec verde | 2,5h |
| 1.12 | Click-through a 375 e 1280 px: Inizia, scrivi, Controlla, i quattro voti, riepilogo, "altra sessione", rail a 18 voci a 375 px; `a11y-gate`; `contrast.spec.js` | 1.11 | R15 | elenco dei controlli con esito nel messaggio di commit o nel report; nessuna violazione axe | 2h |
| 1.13 | Riga della mappa del motore in `CLAUDE.md` per `flash-rules.js` / `flash-run.js` / `views-flash.js` | 1.4 | - | `grep -n "flash-rules.js" CLAUDE.md` torna la riga | 0,5h |

Sottototale 25,5h, con buffer **~31h**. Contenuto: circa 80 valori.
Commit: `feat(flash): add a five-minute card session with a timer and a card cap`.

## Fase 2 - Mazzo di riserva (I2)

**Precondizione: D3 e D4 confermate.**

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 2.1 | `levelOfLesson(id, byCode)`: prefisso dell'id contro i livelli registrati; controllo in `validate.mjs` se il prefisso non è già verificato | 1.1 | R18 | test: `a1-u01-l1` → `A1`; `zz-u01-l1` → `null`; `validate.mjs` esce 1 su un id con prefisso diverso dal livello (dato di prova in piaskownica) | 1,5h |
| 2.2 | `reserve(levels, isDone, srsKeys, limit, unitId)`: vocaboli delle lezioni completate in ordine di corso, dedup per `cardKey`, escluse le chiavi già nel mazzo, traduzione dalla lezione di origine, `src` = id lezione; senza lezioni completate la prima unità di A1; con `unitId` solo quell'unità | 2.1 | I2, R13, D4 | test su un registro finto: "grazie" in due lezioni esce una volta con la glossa della prima; carta già in `state.srs` esclusa; unità scelta rispettata | 3h |
| 2.3 | `newToday(reviews, dayStart)`: chiavi la cui prima voce nel log cade da `dayStart` in poi; `NEW_PER_DAY = 10` | - | D3 | test: chiave ripassata ieri e oggi non conta; chiave nuova oggi conta una volta anche con tre voci | 1,5h |
| 2.4 | `FlashRun.start` compone la coda: scadute fino al tetto, poi riserva fino al tetto e fino a `NEW_PER_DAY - newToday` | 2.2, 2.3 | I2, D3 | test: 2 scadute e 30 di riserva → 12 carte; 25 scadute → 20 carte, zero di riserva | 2h |
| 2.5 | `answer` su carta di riserva: `Core.addCard(it, tr, src)` solo qui, poi `gradeCard` | 2.4 | R1 | test: coda da 5 di riserva, 2 risposte, sessione chiusa → 2 chiavi in `state.srs`, non 5; `Core.dueCount()` invariato prima della prima risposta | 1,5h |
| 2.6 | Vista: caricamento dei livelli delle lezioni completate, ridisegno, `Core.toast` per il livello fallito (pattern `views-frequency.js:48`) | 2.4 | R4 | test DOM: profilo con lezione B1 completata, apertura a freddo → dopo il ridisegno la coda contiene vocaboli B1; livello bloccato con `page.route` → avviso col nome del livello | 3h |
| 2.7 | Selettore di unità (`select` con `label`), default "lezioni completate" o "A1 unità 1", testo che dice da dove vengono le parole | 2.6 | D4 | click-through: cambio unità → schermata iniziale aggiornata col conteggio | 2,5h |
| 2.8 | Stato vuoto aggiornato: tetto giornaliero raggiunto e nessuna scaduta | 2.4 | D3 | test DOM con 10 carte nuove oggi e zero scadute: messaggio "nuove di oggi finite", nessun Inizia | 1h |
| 2.9 | Circa 8 chiavi × 5 lingue, paragrafo guida | 2.7, 2.8 | R6 | `parity.mjs` verde | 1,5h |
| 2.10 | 4 mutazioni: dedup rimosso, esclusione delle chiavi del mazzo rimossa, `>=` nel conteggio di oggi, `addCard` spostato alla costruzione della coda | 2.2-2.5 | R1 | `test:mutations` verde | 1h |
| 2.11 | Click-through 375/1280 da profilo nuovo e da profilo con A1 completato; `SW_VERSION` | 2.7 | I2 | badge del rail osservato prima e dopo: cresce solo delle carte risposte | 1,5h |

Sottototale 20h, con buffer **~24h**. Contenuto: circa 40 valori.
Commit: `feat(flash): fill the session from finished lessons, one answered card at a time`
(2.1-2.6, 2.8-2.10) e `feat(flash): let the student pick a unit to draw new words from` (2.7,
chiavi e click-through relativi).

## Fase 3 - Modi e distrattori (I3, I5)

**Precondizione: D5, D6, D7 confermate.**

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 3.1 | `articleOf(it)`: primo token fra `il lo la l' i gli le un uno una un'`, altrimenti gruppo vuoto; `l'amico` e `un'amica` riconosciuti senza spazio | 1.1 | I5, R3 | test su 12 casi, incluso "lo sport", "gli", "la città", "buongiorno", "Il bar" maiuscolo | 1,5h |
| 3.2 | `distractors(answer, tiers, n, seed)`: stesso gruppo d'articolo, esclusi `norm` uguale e traduzione normalizzata uguale (parentesi rimosse), dedup, allargamento per livelli di `tiers`, mescolamento con `Core.seededShuffle`; ritorna meno di `n` se non trova | 3.1 | I5, R3, R9 | test: "il bar" → tre voci con "il "; seme fisso → stesso output; candidato "il bar" in un'altra lezione escluso; gruppo da 1 → array corto | 3,5h |
| 3.3 | `pickMode(card, avail, day)`: famiglie `riconoscimento` (`scegli`, poi `gira` se non ci sono distrattori) per carta nuova, `learning`, `relearning` o `s < 21`; `produzione` (`scrivi`, `gira`) per `s >= 21`; rotazione con seme `key + day` | 3.2 | I3, D5 | test: carta nuova senza distrattori → `gira`; `s = 30` → mai `scegli`; stesso giorno → stesso modo; giorno dopo → può cambiare | 2,5h |
| 3.4 | `gradeFor(mode, ok)`: `scegli` → 0 o 3; `scrivi`, `gira` → autovoto | 3.3 | D6, R10 | test sulla tabella completa dei modi | 1h |
| 3.5 | `Srs.gradeCard(key, q, mode)`: `m` scritto nella voce di log solo se `mode` presente e diverso da `scrivi`; chiamate esistenti invariate | 3.4 | D7 | test: `gradeCard(k, 4)` produce `{k, t, q}` senza `m`; `gradeCard(k, 3, "scegli")` produce `m: "scegli"`; `exportState` e `importState` la tengono | 1,5h |
| 3.6 | `FlashRun`: tiers costruiti da `registry.lessonIndex` (lezione, unità, livello, caricati), modo per carta, voto via `gradeFor` | 3.3-3.5 | I3 | test: sessione mista → nessuna chiave duplicata in `state.srs`, ogni voce di log con `m` coerente | 2,5h |
| 3.7 | Vista `scegli`: prompt nella lingua dello studente, opzioni in italiano come `input type="radio"` in `role="radiogroup"` (`exercises-choice.js:38`), conferma con Invio o bottone, feedback in `role="status"`, focus al prompt a ogni carta | 3.6 | I3, R2 | test DOM solo tastiera: Tab al gruppo, frecce, Invio → feedback; nessun testo di `cardTr` dentro `.opts` | 3,5h |
| 3.8 | Vista `gira`: parola italiana con altoparlante, "Mostra", traduzione, autovoto 0/3/4/5 | 3.6 | I3, R2 | test DOM: i quattro voti raggiungibili da tastiera, voto registrato con `m: "gira"` | 1,5h |
| 3.9 | Circa 6 chiavi × 5 lingue, paragrafo guida sui modi | 3.7, 3.8 | R6 | `parity.mjs` verde | 1,5h |
| 3.10 | 5 mutazioni: filtro d'articolo, esclusione della risposta, esclusione della traduzione uguale, soglia `s >= 21`, voto 3 → 4 | 3.1-3.4 | R3, R10 | `test:mutations` verde | 1,5h |
| 3.11 | Click-through 375/1280 su una sessione che attraversa `scegli`, `gira`, `scrivi`; `a11y-gate`; `contrast.spec.js` sulle opzioni selezionate e sul feedback | 3.7, 3.8 | I3 | elenco controlli ed esiti; nessuna violazione axe | 2h |

Sottototale 22,5h, con buffer **~27h**. Contenuto: circa 30 valori.
Commit: `feat(flash): pick distractors that share the article and the lesson` (3.1, 3.2, 3.10
parziale) e `feat(flash): rotate card modes by stability on the same FSRS card` (il resto).

## Fase 4 - Carte d'ascolto (I4)

**Precondizione: D8 confermata.**

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 4.1 | `pickMode` riceve `avail.audio` (`hasNatural(it) && voiceSource !== "system"`); `ascolta-scegli` in riconoscimento, `ascolta-scrivi` in produzione; `gradeFor` li copre | 3.3 | I4, R11 | test: `audio: false` → mai un modo d'ascolto; `voiceSource: "system"` nel run → `audio: false` | 1,5h |
| 4.2 | Vista `ascolta-scegli`: nessuna parola scritta nel prompt, riproduzione alla comparsa, bottone "riascolta" con `aria-label`, opzioni italiane col radiogroup di 3.7 | 4.1 | I4, D8 | test DOM: prima della risposta il testo della carta non compare nel DOM visibile; "riascolta" chiama `Audio2.speak` | 2h |
| 4.3 | Vista `ascolta-scrivi`: dettato con `Core.checkOpen`, autovoto | 4.1 | I4 | test DOM: risposta giusta e sbagliata, voce di log con `m` | 1,5h |
| 4.4 | Autoplay rifiutato: nessun errore in console, carta usabile col bottone | 4.2 | R12 | test unitario con `zachowaniePlay` che rifiuta (harness); test DOM con `HTMLMediaElement.prototype.play` rifiutato | 1,5h |
| 4.5 | Circa 4 chiavi × 5 lingue | 4.2, 4.3 | R6 | `parity.mjs` verde | 1h |
| 4.6 | 2 mutazioni: condizione `voiceSource` rimossa, `hasNatural` ignorato | 4.1 | R11 | `test:mutations` verde | 0,5h |
| 4.7 | Click-through con audio reale a 375/1280, anche da `file://`; `SW_VERSION` | 4.4 | I4 | ascolto udito, riascolta azionato, dettato inviato, esiti registrati | 1,5h |

Sottototale 9,5h, con buffer **~12h**. Contenuto: circa 20 valori.
Commit: `feat(flash): add listening cards where a recording exists`.

## Riepilogo

| Fase | Stima | Con buffer (20%) |
|---|---|---|
| 0 | 2,5h | 3h |
| 1 | 25,5h | 31h |
| 2 | 20h | 24h |
| 3 | 22,5h | 27h |
| 4 | 9,5h | 12h |
| **Totale** | **80h** | **~97h** |

Le stime contano test, stringhe e click-through dentro ogni riga: la parte di sola scrittura
del codice è circa un terzo.

## Scostamenti emersi in esecuzione

Registrati qui perché il piano sopra resta com'era stato approvato.

| Fase | Scostamento | Perché |
|---|---|---|
| 1 | Guardia sui `keydown` ripetuti dei bottoni voto, `preventDefault` sull'Invio nel campo | Il click-through e la review hanno trovato due modi di votare carte mai viste: un Invio che rivelava e votava insieme, un Invio tenuto premuto che votava in cascata |
| 2 | La carta `gira` arriva in fase 2, solo per le parole nuove, invece che in fase 3 | Una parola mai vista non si può scrivere in italiano: senza `gira` la riserva sarebbe stata inutilizzabile fino alla fase 3. In fase 3 resta la rotazione dei modi per stabilità |
| 2 | Un commit invece di due (riserva e selettore d'unità) | Il selettore e il ridisegno dopo il caricamento dei livelli condividono lo stesso codice di ingresso della vista |
| 2 | Correzione in `registry.js`, commit separato | `loadLevelData` rispondeva subito "caricato" a chi chiedeva un livello già in caricamento: la vista disegnava da un livello senza unità |
| 2 | Ripresa della sessione in `Views.cinque` (`aktywna`) | `app.js` ridisegna la rotta corrente quando arriva il livello di avvio: su rete lenta azzerava una sessione già iniziata. Lo stesso difetto esiste in `views-today.js`, fuori scope |
| 3 | Una parola nuova arriva sempre come `flip`, mai come `choice` | Scegliere fra quattro parole mai viste è tirare a indovinare, e il voto 3 di un tiro fortunato entrerebbe in FSRS |
| 3 | Carte estratte in `flash-cards.js` | Con la carta a scelta `views-flash.js` superava le 400 righe; le carte sono una responsabilità distinta dal flusso, come le famiglie `exercises-*.js` |
| 3 | `"un po'"` escluso dal gruppo dell'articolo `un` | Il render ha mostrato "un po' stanco/a" fra "un caffè" e "un cappuccino": un'eliminazione gratuita |
| 3 | Un commit invece di due (distrattori e modi) | Le due parti stanno nello stesso file e un modo `choice` senza distrattori non ha stato intermedio utilizzabile |
| 3 | Nessun paragrafo nuovo nella guida | La schermata non ha una sezione propria nella guida, solo la riga della mappa; aggiungerla è una decisione di contenuto, non di questa fase |
