# 007 - Flashcard "5 minuti"

**Stato**: proposto · **Data**: 2026-09-16
**Ambito**: I1 sessione a durata fissa, I2 mazzo di riserva, I3 più modi sulla stessa carta
FSRS, I4 carta d'ascolto, I5 distrattori con lo stesso articolo e lo stesso campo semantico.
**Fuori ambito**: immagini ed emoji sulle carte (I6), qualsiasi backend, modifiche ai modi di
Ripasso (`views-review.js`) e della sessione di Oggi (`views-today.js`).

## Obiettivo

Lo studente apre una sezione, ripassa per al massimo cinque minuti o venti carte, e trova
sempre qualcosa da fare anche con il mazzo vuoto. Le carte cambiano forma (gira, scegli,
scrivi, ascolta) restando la stessa carta FSRS in `state.srs`, e ogni risposta resta salvata
anche se la scheda si chiude a metà.

## Definition of Done

**I1 - durata fissa**
- Dato uno studente con 30 carte in scadenza, quando apre `#/cinque` e risponde a 20 carte,
  allora la sessione si chiude sul riepilogo alla ventesima, e `state.reviews` è cresciuto
  di esattamente 20 (test DOM).
- Dato l'orologio di Playwright (`page.clock`) avanzato di 5 minuti mentre la carta 7 è
  aperta, quando lo studente risponde alla carta 7, allora compare il riepilogo e non la
  carta 8. La carta aperta non viene mai tolta di mano a metà risposta.
- Dato uno studente che ha risposto a 3 carte, quando la pagina viene ricaricata entro 50 ms
  dall'ultima risposta, allora dopo il reload `state.reviews` contiene tutte e 3 le voci
  (test DOM con `page.reload()`). Oggi `save()` è in debounce di 180 ms
  (`assets/js/store.js:322`) e nessun `pagehide` lo svuota.
- Dato un timer attivo, quando lo studente cambia rotta, allora nessun `setInterval` resta
  vivo: test unitario sul `Views.onLeave` registrato (`assets/js/router.js:76`).
- Il tempo restante si calcola da `Date.now()` rispetto all'istante di inizio, non contando
  i tick: in una scheda in background i tick vengono rallentati dal browser.

**I2 - mazzo di riserva**
- Dato uno studente senza carte in scadenza e con `a1-u01-l1` completata, quando apre la
  sessione, allora le carte proposte sono vocaboli di quella lezione che non sono già in
  `state.srs`.
- Dato uno studente nuovo (nessuna lezione completata, `state.srs` vuoto), quando apre la
  sessione, allora riceve vocaboli della prima unità di A1 e il testo lo dice.
- Dato un vocabolo di riserva mostrato e **non** risposto (sessione chiusa prima), allora la
  sua chiave non esiste in `state.srs` e il badge `#dueBadge` (`index.html:98`) non cambia.
  Risposto, la chiave esiste con `reps` e `last` valorizzati.
- Dato uno studente con lezioni completate in B1 e solo A1 caricato, quando apre la sessione,
  allora B1 viene caricato, la lista si ridisegna, e se il caricamento fallisce compare il
  messaggio che nomina il livello mancante (pattern `assets/js/views-frequency.js:48`).
- Dato uno studente che oggi ha già fatto entrare 10 carte nuove, quando apre un'altra
  sessione, allora la riserva non ne propone altre (tetto derivato da `state.reviews`,
  nessun contenitore nuovo nello stato), e se non restano nemmeno carte in scadenza lo stato
  vuoto lo dice invece di mostrare una sessione da zero carte.

**I3 - più modi sulla stessa carta**
- Per ogni modo (`gira`, `scegli`, `scrivi`, e in fase 4 `ascolta-scegli`, `ascolta-scrivi`)
  la risposta chiama `Core.gradeCard(key, q)` sulla chiave esistente: dopo una sessione mista
  `Object.keys(state.srs).length` cresce solo dei vocaboli di riserva risposti, mai di
  duplicati.
- `FlashRules.pickMode` è deterministica: stessa carta, stesso giorno, stesse disponibilità,
  stesso modo (test). Carta nuova o in `relearning` (`assets/js/fsrs.js:215`) riceve un modo
  di riconoscimento; carta con stabilità `s >= 21` riceve un modo di produzione.
- Nessun modo mette una traduzione glossata fra le opzioni: le opzioni sono sempre in
  italiano (test sul markup: nessun testo di `cardTr` dentro `.opts`).

**I5 - distrattori**
- Dato "il bar" (A1), i distrattori cominciano tutti con "il ", nessuno è "il bar" né ha la
  stessa `norm`, nessuno ha la stessa traduzione normalizzata della risposta.
- Dato "buongiorno" (nessun articolo), i distrattori non hanno articolo.
- Stesso seme, stesse opzioni nello stesso ordine; seme diverso, ordine diverso (test).
- Ordine di ricerca: lezione, unità, livello, tutti i livelli caricati. Se al termine ci sono
  meno di 2 distrattori validi, il modo `scegli` non viene scelto per quella carta: mai
  un'opzione con articolo diverso per riempire.

**I4 - ascolto**
- La carta d'ascolto compare solo se `Audio2.hasNatural(it)` è vero **e**
  `settings.voiceSource !== "system"` (`assets/js/audio.js:142`): con la sintesi di sistema
  il suono è quello che il progetto ha scartato.
- Il prompt non mostra la parola scritta prima della risposta; c'è un bottone "riascolta"
  sempre raggiungibile da tastiera.
- Se il primo `play()` viene rifiutato dal browser, la carta resta usabile col bottone.

**Trasversale, a ogni fase**
- Verdi: `npm run lint`, `npm test`, `npm run test:mutations`, `npm run test:dom`,
  `node scripts/validate.mjs`, `node scripts/parity.mjs`, `node scripts/check_precache.mjs`,
  `node scripts/check_swversion.mjs`, `node scripts/coverage.mjs --min 99`.
- Click-through a 375 e 1280 px con l'elenco dei controlli azionati e l'esito.
- `a11y-gate` sul render reale (con axe iniettato via `addInitScript`, la CSP lo blocca
  altrimenti) e `tests/dom/contrast.spec.js` verde nei due temi.
- Le chiavi delle cinque lingue entrano nello stesso commit del codice che le usa.

## Assunzioni

- Il livello di una lezione si ricava dal prefisso dell'id (`a1-u01-l1` → `A1`), come in
  `data/core/a1-01.js`. La funzione pura lo verifica contro `registry.byCode` e ignora i
  prefissi sconosciuti. Se la convenzione non è garantita da `validate.mjs`, va aggiunto il
  controllo (sub-task 2.1).
- `state.reviews` è la fonte del conteggio "nuove di oggi": una carta è nuova oggi se la sua
  prima voce nel log cade oggi. Il log viene potato a 5000 voci (`assets/js/srs.js:216`) e a
  metà in caso di quota piena (`assets/js/store.js:287`): nel caso peggiore il tetto
  sottostima, cioè concede qualche carta in più. Accettato.
- Il "campo semantico" è approssimato dalla posizione nel corso (lezione, unità, livello).
  Nessuna tassonomia nuova nei dati.
- Le parole senza articolo formano un solo gruppo ("nessun articolo"). Articoli riconosciuti:
  `il lo la l' i gli le un uno una un'`, confrontati sul primo token, apostrofo incluso.
- `SCHEMA` resta 2. Nessun contenitore nuovo: la sessione non persiste il proprio stato
  (chiudere a metà perde solo il cronometro, non le risposte).
- La rotta si chiama `cinque`, in linea con le rotte italiane esistenti (`velocita`, `falsi`).
- Commit atomici direttamente su `main`, push a carico dell'utente.

## Decisioni da confermare

| D | Domanda | Raccomandata | Alternative | Perché |
|---|---|---|---|---|
| D1 | Dove vive la sezione | **Rotta propria `#/cinque`, voce nel rail subito sotto Ripasso**, più un link dallo stato vuoto di Ripasso | (b) terza tab in Ripasso; (c) blocco dentro Oggi | È una promessa diversa da un mazzo: ha un tempo, e scrive carte nuove in `state.srs`. Dentro Ripasso il badge e la tab mentirebbero insieme. Costo: il rail passa a 18 voci, da provare a 375 px |
| D2 | Come finisce | **Entrambi, il primo che arriva**: 5 minuti oppure 20 carte, controllati tra una carta e l'altra | solo timer; solo tetto | Il timer da solo con carte veloci produce 60 voci di log di riconoscimento; il tetto da solo non mantiene la promessa "5 minuti" su carte da scrivere |
| D3 | Quando entra la riserva | **Riempie fino al tetto dopo le carte in scadenza, con al massimo 10 carte nuove al giorno** | (b) solo quando le scadute sono zero, come dice I2 alla lettera | Con (b) chi ha 2 scadute fa una sessione da 2 carte, che è la sessione "quasi vuota" che I2 vuole evitare. Il tetto giornaliero tiene sotto controllo il badge dei giorni successivi |
| D4 | Che cos'è un "tema" | **Unità**, con un selettore visibile a tutti; default "lezioni completate", o "A1 unità 1" per chi non ne ha | lezione | Una lezione ha circa 10-14 vocaboli, meno del tetto di 20 e troppo pochi per distrattori con lo stesso articolo |
| D5 | Come si sceglie il modo | **Famiglia dallo stato FSRS, rotazione deterministica dentro la famiglia** (seme = chiave + giorno) | casuale con seme; scelta dello studente | Riconoscere prima, produrre poi, è ciò che FSRS misura già (`s`, `st`). Il seme giornaliero rende il modo testabile e stabile a un ricaricamento |
| D6 | Che voto dà un modo di riconoscimento | **Automatico: sbagliata 0, giusta 3 ("con fatica")**. I modi di produzione (`scrivi`, `ascolta-scrivi`, `gira`) tengono l'autovoto 0/3/4/5 | giusta 4; autovoto anche dopo la scelta | Una scelta fra quattro indovinata non è ricordo libero: darle "bene" gonfia la stabilità e rimanda la carta più del dovuto |
| D7 | Il log delle ripetizioni registra il modo | **Sì, campo facoltativo `m` sulle voci non `scrivi`** | no | Una volta mischiate, le ripetizioni di riconoscimento non si separano più: un futuro ottimizzatore FSRS le leggerebbe come ricordo. Additivo, nessun bump |
| D8 | Cosa si sceglie nella carta d'ascolto | **Opzioni in italiano scritto (dal suono alla forma) oppure dettato** | opzioni tradotte | Coerente con R2: le glosse fra le opzioni tradiscono la risposta per forma e lunghezza |
| D9 | Ripasso e Oggi ricevono i nuovi modi | **No, in questo programma** | sì | Fuori dallo scope approvato; `runCards` (`assets/js/views.js:80`) resta com'è |
| D10 | Salvataggio immediato | **`Store.flush()` più un ascoltatore `pagehide` in `store.js`**, valido per tutta l'app | `persist` diretto solo nella sessione | Il difetto del debounce non è della sessione: vale per ogni `save()`. Corretto una volta, alla fonte |

D1, D3, D4, D6 sono scelte di prodotto: vanno confermate dall'utente prima della fase 1
(D1), 2 (D3, D4), 3 (D6). Le altre sono decise col default se non arriva risposta.

## Approccio

Stesso confine del resto del motore: funzione pura separata da ciò che tocca il browser.

| File | Globale | Contenuto |
|---|---|---|
| `assets/js/flash-rules.js` | `FlashRules` | `articleOf`, `distractors(answer, tiers, n, seed)`, `pickMode(card, avail, day)`, `gradeFor(mode, ok)`, `isOver(start, now, answered)`, `reserve(levels, isDone, srsKeys, limit, unitId)`, `newToday(reviews, dayStart)`, `levelOfLesson(id, byCode)`. Solo dati in ingresso, niente `Store` né `Registry` |
| `assets/js/flash-run.js` | `FlashRun` | costruzione della coda (scadute, poi riserva), risposta (`addCard` solo al voto, poi `gradeCard`), contatori, fine sessione |
| `assets/js/views-flash.js` | `Views.cinque` | markup per modo, cronometro, `Views.onLeave`, riepilogo, caricamento dei livelli con ridisegno |

Ordine in `index.html`: `flash-rules.js` e `flash-run.js` dopo `core.js` e `audio.js`,
`views-flash.js` dopo `views.js` ed `exercises.js` (usa `Ex.wireSpeakers`). Stesso ordine in
`PRECACHE` e in una nuova costante `FLASH` in `tests/unit/_harness.mjs`.

Il seme riusa l'xorshift già presente (`assets/js/core.js:227`, `assets/js/drills.js:37`)
passando da `Core.seededShuffle`, non una terza copia.

La scelta multipla riusa il markup accessibile già in uso: `input type="radio"` dentro
`role="radiogroup"` con `aria-label` (`assets/js/exercises-choice.js:38`). A ogni carta nuova
il focus va al prompt (`tabindex="-1"`), il feedback sta in `role="status"`, il cronometro in
un elemento `role="timer"` con `aria-live="off"` più un solo annuncio a un minuto dalla fine.

## Fasi

Ogni fase lascia il corso usabile anche se la successiva non arriva.

| Fase | Contenuto | Usabile dopo | Commit | Stima con buffer |
|---|---|---|---|---|
| 0 | `Store.flush()` e `pagehide` | tutto il corso smette di perdere l'ultimo salvataggio | `fix(store): flush the pending save when the page goes away` | 2,5-3h |
| 1 | Sezione `#/cinque` con le sole carte in scadenza, modo `scrivi`, timer e tetto (I1) | sessione a tempo sul mazzo esistente; stato vuoto che rimanda alle lezioni | `feat(flash): add a five-minute card session with a timer and a card cap` | 25,5-31h |
| 2 | Mazzo di riserva, tetto giornaliero, caricamento livelli, selettore di unità (I2) | la sessione non è mai vuota | `feat(flash): fill the session from finished lessons, one answered card at a time`; `feat(flash): let the student pick a unit to draw new words from` | 20-24h |
| 3 | Modi `gira` e `scegli`, distrattori, rotazione per stabilità, voto per modo, campo `m` (I3, I5) | carte che cambiano forma | `feat(flash): pick distractors that share the article and the lesson`; `feat(flash): rotate card modes by stability on the same FSRS card` | 22,5-27h |
| 4 | `ascolta-scegli` e `ascolta-scrivi` (I4) | carte d'ascolto dove esiste la registrazione | `feat(flash): add listening cards where a recording exists` | 9,5-12h |

Totale **80-97h** (circa 10-12 giornate), buffer del 20% incluso e visibile in `tasks.md`.
Di queste, circa 10h sono stringhe per cinque lingue e testo della guida.

## File da modificare

| File | Tipo | Scopo |
|---|---|---|
| `assets/js/store.js` | modifica | `flush()` esportato, ascoltatore `pagehide` (fase 0) |
| `assets/js/flash-rules.js` | nuovo | regole pure (fasi 1-4) |
| `assets/js/flash-run.js` | nuovo | svolgimento della sessione (fasi 1-2) |
| `assets/js/views-flash.js` | nuovo | vista `Views.cinque` |
| `assets/js/srs.js` | modifica | `gradeCard(key, q, mode)` passa `m` a `zapiszPowtorke` (fase 3, D7) |
| `index.html` | modifica | tre `<script>`, voce del rail |
| `sw.js` | modifica | `PRECACHE`, `SW_VERSION` via `check_swversion.mjs --napraw` |
| `assets/js/views-guide.js` | modifica | voce in `SEKCJE` (se la sezione merita paragrafi) e in `EKRANY` |
| `assets/js/views-review.js` | modifica | link alla sessione dallo stato vuoto (D1) |
| `data/i18n/ui-{pl,en,es,fr,de}.js` | modifica | circa 30 chiavi × 5 più la guida |
| `tests/unit/_harness.mjs` | modifica | costante `FLASH` |
| `tests/unit/flash-rules.test.mjs`, `flash-run.test.mjs`, `store.test.mjs` | nuovo / modifica | TDD |
| `tests/dom/routes.spec.js` | modifica | `cinque` in `TRASY` |
| `tests/dom/flash.spec.js` | nuovo | tetto, tempo, reload, riserva, modi, radio da tastiera |
| `scripts/mutations.mjs` | modifica | circa 12 righe su `flash-rules.js` |
| `CLAUDE.md` | modifica | mappa del motore: la coppia rules/run/vista nuova |

## Rischi

| R | Rischio | Mitigazione |
|---|---|---|
| R1 | La riserva scrive in `state.srs` e gonfia il badge senza consenso (`addCard` crea la carta con `due: Date.now()`, `assets/js/srs.js:64`) | `addCard` solo al voto, dentro `FlashRun.answer`; test sul caso "mostrata e non risposta" |
| R2 | Traduzioni glossate fra le opzioni tradiscono la risposta | Opzioni sempre in italiano; la direzione italiano → lingua dello studente è `gira` con autovoto; test sul markup |
| R3 | Parole senza articolo, gruppi troppo piccoli, duplicati | Gruppo "nessun articolo"; allargamento lezione → unità → livello → caricati; sotto 2 distrattori `scegli` non viene scelto; esclusione per `norm`; seme |
| R4 | La riserva vede solo i livelli caricati | Caricamento dei livelli delle lezioni completate, ridisegno, avviso per livello fallito |
| R5 | Timer che taglia a metà o sopravvive al cambio rotta | Controllo solo tra una carta e l'altra; `Views.onLeave` pulisce l'intervallo; tempo da `Date.now()` |
| R6 | Stringhe × 5 lingue | Chiavi nello stesso commit del codice, `parity.mjs` a ogni fase; il costo si dichiara, non riduce lo scope |
| R7 | `views.js` cresce | Tre file nuovi, `views.js` non si tocca |
| R8 | Il debounce di 180 ms (`assets/js/store.js:322`) perde l'ultima risposta se la scheda si chiude subito | Fase 0: `flush()` su `pagehide`; test DOM con `page.reload()` |
| R9 | Due vocaboli diversi con la stessa traduzione (sinonimi, "scusi"/"scusa") rendono la scelta ambigua | Esclusione dei candidati con traduzione normalizzata identica (glosse fra parentesi rimosse). I sinonimi con testo diverso passano: dichiarato, non risolto |
| R10 | Il riconoscimento gonfia la stabilità FSRS e sporca il log | D6 (giusta = 3) e D7 (campo `m`) |
| R11 | Con `voiceSource: "system"` la carta d'ascolto suona su espeak | Condizione esplicita in `pickMode`, test |
| R12 | Il primo `play()` rifiutato dalla policy di autoplay lascia una carta muta | Bottone "riascolta" sempre presente; test con `play` che rifiuta (atrapa `zachowaniePlay` già nel harness) |
| R13 | Stessa parola in più lezioni con glosse diverse: `vocabIndex` tiene l'ultima (`assets/js/registry.js:53`), la riserva prenderebbe la prima | La riserva deduplica per `cardKey` e prende la traduzione dalla lezione di origine; `src` della carta = id di quella lezione |
| R14 | Il modo `scrivi` di `views-flash.js` e `runCards` divergono (due copie della stessa interazione) | Dichiarato in D9. Nessuna estrazione speculativa ora: se Ripasso adotterà i modi, quella è la seconda occorrenza che giustifica l'unificazione |
| R15 | Rail a 18 voci illeggibile o scrollato a 375 px | Click-through mobile in 1.10; se la voce finisce sotto la piega, si valuta D1 (b) prima del commit |
| R16 | File nuovi abbassano `coverage.mjs --min 99` | Le regole e lo svolgimento sono testati per costruzione (TDD); la vista non entra nel perimetro unitario, come le altre `views-*.js` |
| R17 | `setInterval` rallentato in background falsa il conteggio | Tempo sempre da `Date.now() - start`; il tick serve solo a ridisegnare |
| R18 | Il prefisso dell'id lezione non è un contratto verificato | 2.1: `levelOfLesson` ignora prefissi sconosciuti; controllo aggiunto a `validate.mjs` se assente |

Nota a margine, fuori scope: `TRASY` in `tests/dom/routes.spec.js:23` non contiene
`chiacchiere`, coperta solo dal test sulle voci del rail e da `tests/dom/chat.spec.js`.

## Criteri di successo

- Tutti i punti della Definition of Done verificati da test o da click-through registrato.
- Tabella dei gate verde a ogni commit, non solo a fine programma.
- `node scripts/baseline.mjs` riporta 80 file in `assets/js/` dopo la fase 1.
- Uno studente nuovo, aperto il corso da `file://`, entra in `#/cinque`, risponde a 20 carte
  nuove di A1 unità 1 fino al tetto giornaliero (10, con D3 confermata), vede il riepilogo
  che dice perché la sessione si ferma prima di 20, chiude la scheda, riapre: 10 carte in
  `state.srs`, 10 voci in `state.reviews`, nessuna carta non risposta.
