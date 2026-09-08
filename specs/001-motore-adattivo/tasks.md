# 001 - Motore adattivo: scomposizione

Versione 2.0, allineata a `plan.md` 2.0: niente bump di schema, fase FT nuova, tre sub-task
di sicurezza in F0, revisione del contenuto italiano prima della registrazione audio.

Una riga per sub-task. `Dip.` sono dipendenze dirette, mai transitive.
`Req.` traccia il requisito: la voce della Definition of Done in `plan.md` § 3.3.
`Verify` è un comando da eseguire o un'osservazione precisa, mai "controllo che funzioni".

Convenzione dei comandi ricorrenti:

- `V` = `node scripts/validate.mjs` (e per ognuna delle 5 lingue dove i dati cambiano)
- `P` = `node scripts/parity.mjs`
- `A` = `node scripts/extract_strings.mjs && uv run --script scripts/build_audio.py --dry-run`
- `S` = `python3 -m http.server 8080` con `Cache-Control: no-store`, prova in browser
- `T` = `npm test && npm run test:dom` (da FT in poi: **condizione di chiusura di ogni fase**)

---

## FT - Toolchain di test e rete di sicurezza (22h) - prima di F0

Il primo test non è su una feature nuova. F0 modifica `merge()`, `importState` e `save()`,
cioè le tre funzioni da cui dipendono i progressi di chi già usa l'app: senza il rosso prima
del verde su quelle, la fondazione dello stato si verifica solo a mano, su uno stato che non
hai. `tdd-guide` guida questa fase.

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| TT01 | - | A8 | `package.json` con `@playwright/test` come sola dev dependency e gli script `test` / `test:dom`. Nessuna dipendenza runtime, nessun bundler | `package.json` (nuovo) | 3h | `npm test` e `npm run test:dom` esistono ed escono 0 a suite vuota; `git status` non mostra `node_modules/` | basso |
| TT02 | TT01 | A8 | Harness `node:test`: caricamento dei sorgenti classici in `node:vm`, riusando il pattern già presente in `validate.mjs:19` e `parity.mjs:33`, non inventandone uno nuovo | `tests/unit/_harness.mjs` (nuovo) | 4h | Un test che chiama `Core.norm(" A  b ")` passa senza che l'app sia stata modificata | medio |
| TT03 | TT01 | A8 | Config Playwright con server statico a `Cache-Control: no-store` (CLAUDE.md avverte che `http.server` semplice serve script vecchi e la pagina mente) | `playwright.config.js` (nuovo) | 3h | Modifico un file js, rilancio: il test vede il codice nuovo, non quello in cache | medio |
| TT04 | TT02 | **rete di sicurezza F0** | Test sul comportamento **attuale** di `merge`, `load`, `importState`, `save`: un salvataggio senza un campo lo riceve dal default, un import con schema diverso è rifiutato, `save` su quota piena non lancia | `tests/unit/state.test.mjs` (nuovo) | 5h | La suite è verde **prima** di toccare `core.js`; rompo a mano una riga di `merge` e diventa rossa | **alto** |
| TT05 | TT03 | **rete di sicurezza F1** | Test DOM: per ciascuno dei 12 tipi presenti nei dati, `onDone(ok)` è chiamato esattamente una volta. È il contratto su cui si regge il contatore di progresso e che T019 modificherà | `tests/dom/exercises.spec.js` (nuovo) | 5h | 12 test verdi prima di F1; con un doppio `onDone` iniettato a mano, il test corrispondente fallisce | **alto** |
| TT06 | TT04, TT05 | A8 | Baseline registrata e comandi documentati in CLAUDE.md § Kontrola jakości | `CLAUDE.md` | 2h | `T` verde su codice non modificato; il numero di test passati è annotato qui | basso |

## F0 - Fondazione dello stato (19-20h) - fondazionale, blocca F1, F6, F8

Additiva, **nessun bump di `SCHEMA`**: `load()` riempie da sé i contenitori nuovi, mentre un
bump romperebbe ogni JSON già esportato dagli utenti (ADR-002, `plan.md` § 2).

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T001 | TT04 | P1/P4/P5/P7 persistenza | Contenitori additivi in `defaultState()`: `errors{}`, `gsrs{}`, `placement{}`, `writing{}`, `session{}`, `drills{}`, tutti assenti-tolleranti. `SCHEMA` resta 2 | `assets/js/core.js` | 2h | Profilo salvato prima della modifica: dopo il caricamento i contenitori esistono vuoti, `schema` è ancora 2, nessuna migrazione eseguita. `T` verde | basso |
| T002 | T001 | politica di § 3.2 | Scala di migrazioni in `importState`: accetta `schema <= SCHEMA` applicando in sequenza le migrazioni note, rifiuta solo `schema > SCHEMA`. Rende la politica "niente bump" una politica e non un rinvio | `assets/js/core.js` | 3h | Un export con `schema: 2` entra; uno con `schema: 99` è rifiutato con toast; la chiave v1 continua a migrare come oggi | medio |
| T003 | T002 | politica di § 3.2 | Gate `check-migration.mjs`: carica `core.js` in `node:vm`, verifica accettazione di schema 2, rifiuto di 99, migrazione della chiave v1, e assenza di inquinamento del prototipo | `scripts/check-migration.mjs` (nuovo) | 3h | `node scripts/check-migration.mjs` esce 0; alterando la soglia a `!==`, esce 1 | medio |
| T005 | TT04 | **sicurezza P1** | Prototype pollution in `merge()` (`core.js:106-115`): `JSON.parse` rende `__proto__` una proprietà propria enumerabile, `merge` ricorre su `base["__proto__"]` cioè `Object.prototype`. Saltare `__proto__`, `constructor` e `prototype` prima di ricorrere e di assegnare. Difetto pre-esistente, raggiungibile da `importState` (`views.js:833`) con un file che dichiara `"schema": 2` | `assets/js/core.js` | 2h | Test di regressione: importare `{"schema":2,"__proto__":{"polluted":"yes"}}` lascia `({}).polluted === undefined`. Il test è rosso prima del fix (verificato: oggi vale `"yes"`) | **alto** |
| T006 | T002 | **sicurezza P2** | Validazione della forma minima all'import (tipo atteso per chiave di primo livello) e tetto di dimensione del file. Oggi si valida solo `schema`, quindi un JSON corrotto esplode in una vista tre schermate dopo | `assets/js/core.js` | 2h | Un file con `lessons: "ciao"` è rifiutato all'ingresso con messaggio, non accettato; un file da 50 MB è rifiutato prima del parse | medio |
| T007 | T001 | **R6** | Potatura con avviso: `save()` ha già `try/catch` con toast (`core.js:101`), ma su quota piena smette di persistere **tutto**, progressi compresi. Aggiungere potatura (prima le carte già superate e più vecchie, mai i progressi delle lezioni) e un avviso non effimero quando scatta | `assets/js/core.js` | 3h | Test `node:test` che riempie la quota simulata: la potatura scatta, i progressi delle lezioni sopravvivono, l'avviso è visibile e non un toast da 3 secondi | **alto** |
| T008 | T005, T007 | A8 | Test della fase nella suite; `T` verde | `tests/unit/state.test.mjs` | 4-5h | `T` verde, e i test di TT04 continuano a passare invariati | medio |

## F1 - P1 quaderno degli errori (32-35h con test) - fondazionale, blocca F2, F3

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T010 | - | P1 DoD 1 | Definire la convenzione `tags: ["g-..."]` sull'oggetto lezione e `tag:` di override sull'esercizio; documentarla in CLAUDE.md § Podział pola na warstwy (resta in `core`, è un id neutro) | `CLAUDE.md` | 1h | La tabella di CLAUDE.md elenca `tags` e `tag` nella colonna `data/core/` | basso |
| T011 | T010 | P1 DoD 1 | Gate sui tag in `validate.mjs`: ogni lezione ha almeno un tag, ogni id esiste in `GRAMMAR_REF`, ogni override esiste | `scripts/validate.mjs` | 2h | `V` esce 1 finché le lezioni non sono taggate; tolgo un tag valido e ne metto uno inventato: esce 1 nominando la lezione | basso |
| T012 | T011 | P1 DoD 1 | Taggare A1 (3 file, 40 lezioni) | `data/core/a1-0*.js` | 2h | `V` non segnala più A1 | medio |
| T013 | T012 | P1 DoD 1 | Taggare A2 (2 file, 40 lezioni) | `data/core/a2-0*.js` | 2h | `V` non segnala più A2 | medio |
| T014 | T012 | P1 DoD 1 | Taggare B1, B2 (2 file, 36 lezioni) | `data/core/b*.js` | 1,5h | `V` non segnala più B1 e B2 | medio |
| T015 | T012 | P1 DoD 1 | Taggare C1, C2 (2 file, 24 lezioni) | `data/core/c*.js` | 1,5h | `V` verde su tutti i livelli | medio |
| T016 | T001 | P1 DoD 7, D2 | `Errors.keyOf(ex)`: FNV-1a 64 bit sui soli campi core (`t` + `it`/`a`/`text`/`tokens` canonicalizzati). Vietato usare `q`, `opts`, `why`, `tr` | `assets/js/errors.js` (nuovo) | 3h | In console la chiave di un esercizio è la stessa prima e dopo `Core.setLanguage("de")` | **alto** |
| T017 | T016 | P1 DoD 7 | Gate unicità: `validate.mjs` calcola tutte le chiavi dei 1514 esercizi e fallisce su collisione | `scripts/validate.mjs` | 2h | `V` riporta "1514 chiavi, 0 collisioni"; duplico un esercizio a mano: esce 1 | medio |
| T018 | T016, T001 | P1 DoD 2,3,4,8 | Store del quaderno: `record(ex, ok, srcId)`, `due(limit)`, `grade(key, q)` che riusa lo scheduling SM-2 estratto da `core.js:254`; try/catch attorno alla persistenza. **Campo `kind` dichiarato qui**, non in F2: `"authored"` (tag di lezione, chiave = hash del contenuto) contro `"generated"` (tag del generatore, chiave = `generatorId` più il seme). Le due specie hanno granularità di scheduling diversa; scoprirlo in F2 significherebbe migrare ciò che F1 ha già scritto | `assets/js/errors.js`, `assets/js/core.js` | 5h | Sbaglio due volte lo stesso esercizio: una voce con `lapses: 2` e `kind: "authored"`. Due risposte giuste di fila: `due` oltre 3 giorni. Con localStorage disabilitato la lezione si chiude lo stesso. Soglia e intervallo sono **C1** in § 7.6 | **alto** |
| T019 | T018, TT05 | P1 DoD 6 | Gancio di cattura: wrap di `Ex.build` (`exercises.js:517`) che avvolge `wire` e intercetta `onDone` con `ex` e `seed` in mano. Nessuna modifica ai 13 builder | `assets/js/exercises.js` | 2h | I 12 test DOM di TT05 restano verdi (`onDone` sempre una volta sola); rispondo a 10 esercizi e `stats.correct + stats.wrong` cresce di esattamente 10 | **alto** |
| T020 | T018 | P1 DoD 9,10 | Scheda "Errori" dentro `ripasso`: tab bar, lista per tag, ri-render dell'esercizio originale dal localizzatore, link alla lezione, stato vuoto con CTA | `assets/js/views-train.js` (nuovo), `assets/js/views.js` | 6h | `S`: sbaglio in `a1-u02-l3`, apro Ripasso > Errori, vedo l'esercizio ri-renderizzato e l'etichetta del tag; con 0 carte vedo titolo, spiegazione e bottone | medio |
| T021 | T020 | P1 DoD 5 | 18 chiavi UI nuove nelle 5 lingue, plurali inclusi | `data/i18n/ui-*.js` | 2h | `P` esce 0; in browser `I18n.missing()` vuoto dopo aver aperto la scheda in tutte e 5 le lingue | medio |
| T022 | T021 | P1 DoD tutte | QA di fase: 5 lingue, `file://`, tema chiaro e scuro, 375 e 1280 px, `a11y-gate` sulla vista nuova | - | 3h | 0 violazioni axe; nessun errore in console da `file://` | medio |
| T023 | T018, T019 | A8 | Test di fase: scheduling e chiave in `node:test`, cattura e non-duplicazione in Playwright | `tests/unit/errors.test.mjs`, `tests/dom/errors.spec.js` (nuovi) | 5-6h | `T` verde; rimuovendo il wrap di T019 la suite diventa rossa | medio |

## F2 - P2 drill generativi (35-37h con test)

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T030 | - | P2 DoD 2,7 | Lessico chiuso italiano: ~120 nomi con genere e numero, ~80 verbi con ausiliare, tabella preposizioni. Solo italiano, nessuna glossa | `assets/js/drills-lex.js` (nuovo) | 4h | `grep -P '[ąęłżźćńśáéíóúñçäöüß]' assets/js/drills-lex.js` non trova nulla; file sotto 300 righe | basso |
| T031 | T030 | P2 DoD 6 | Generatore preposizioni articolate | `assets/js/drills.js` (nuovo) | 1h | 10 item con seed fisso verificati a mano contro la tabella (di+il=del, a+lo=allo, in+i=nei, su+le=sulle, da+l'=dall') | basso |
| T032 | T030 | P2 DoD 1 | Generatore accordo genere/numero | `assets/js/drills.js` | 2h | 10 item: ogni soluzione concorda con il genere dichiarato nel lessico | basso |
| T033 | T030 | P2 DoD 1 | Generatore ausiliare essere/avere, con i riflessivi e i verbi a doppio ausiliare marcati nel lessico | `assets/js/drills.js` | 2h | "è cambiato" e "ha cambiato" sono entrambi accettati sul verbo marcato a doppio ausiliare | medio |
| T034 | T030 | P2 DoD 1 | Generatore pronomi diretti, indiretti, `ne`, `ci` su frasi a slot | `assets/js/drills.js` | 3h | 10 item per ciascuna delle 4 sottocategorie, soluzione verificata a mano | medio |
| T035 | - | P2 DoD 1 | Generatore numeri (cardinali e ordinali, con le elisioni ventuno/ventotto) | `assets/js/drills.js` | 3h | 21→ventuno, 28→ventotto, 101→centouno, 1000→mille, 2000→duemila | medio |
| T036 | T035 | P2 DoD 1 | Generatore date | `assets/js/drills.js` | 2h | "1 marzo" → "il primo marzo", "8 marzo" → "l'otto marzo" | basso |
| T037 | T035 | P2 DoD 1 | Generatore ore, forma formale e colloquiale | `assets/js/drills.js` | 2h | 13:45 → "l'una e quarantacinque" e "le due meno un quarto"; 12:00 → "mezzogiorno" | medio |
| T038 | T031..T037 | P2 DoD 2,3,4 | Adattatore: item generato → oggetto esercizio dei tipi esistenti; vietato emettere `say`, `it` di listen/speak | `assets/js/drills.js` | 3h | `A` riporta 0 file mancanti dopo aver usato tutti i generatori; nessun bottone altoparlante nei drill | **alto** |
| T039 | T038, T018 | P2 DoD 5 | Fallimento di un drill → carta errore con il tag del generatore | `assets/js/drills.js`, `assets/js/errors.js` | 2h | Sbaglio un drill sulle preposizioni: la carta compare con tag `g-preposizioni` | medio |
| T040 | T038 | P2 DoD 1 | Hub "Allenamento": rotta nuova, voce di rail, selettore argomento, sessione di N item | `assets/js/views-train.js`, `index.html` | 4h | `S`: la rotta `#/allenamento` risponde, il rail la marca `aria-current` | medio |
| T041 | T040 | P2 DoD 7 | 16 chiavi UI nuove ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0; `I18n.missing()` vuoto sull'hub in 5 lingue | medio |
| T042 | T041 | P2 DoD tutte | QA di fase, incluso il determinismo: stesso seed → stessa sequenza; 200 seed diversi → nessuna ripetizione esatta | - | 3h | Script una tantum in console che confronta 200 generazioni | medio |
| T043 | T038, T039 | A8 | Test di fase: i 7 generatori sono funzioni pure, quindi `node:test` li copre per intero (determinismo, correttezza delle soluzioni, assenza di campi pronunciati). Playwright solo sulla vista dell'hub | `tests/unit/drills.test.mjs` (nuovo) | 6-8h | `T` verde; un generatore che emette `say` fa fallire il test dedicato |

## F3 - P4 sessione del giorno (11-12h con test)

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T050 | T018, T038 | P4 DoD 1,2 | Compositore: 8 carte SRS + 6 carte errore + 3 drill sul tag più fallito + segmento di percorso; degrada quando una fonte è vuota | `assets/js/views-train.js` | 4h | Profilo senza scadenze: la sessione si compone lo stesso e lo dichiara | medio |
| T051 | T050 | P4 DoD 3 | Vista e rotta `oggi`, in cima al rail, con barra e riepilogo per fonte | `assets/js/views-train.js`, `index.html` | 3h | `S`: la barra arriva a 100%, il riepilogo distingue le tre fonti | basso |
| T052 | T051 | P4 DoD 4 | Taratura della durata | - | 1h | Sessione piena cronometrata a mano: risultato fra 8 e 13 minuti, annotato qui | medio |
| T053 | T051 | P4 DoD 5 | 10 chiavi UI ×5 | `data/i18n/ui-*.js` | 1h | `P` esce 0 | basso |
| T054 | T050, T051 | A8 | Test di fase: composizione con ognuna delle tre fonti vuota, in `node:test` | `tests/unit/session.test.mjs` (nuovo) | 2-3h | `T` verde; con tutte le fonti vuote la sessione si compone lo stesso | medio |

## F4 - P8 PWA + P9 attriti (53-55h con test) - parallelizzabile con F1-F3

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T060 | - | P8 DoD 1 | `manifest.webmanifest` + icone 192, 512, maskable generate dalla bandiera attuale, `theme_color` dalla palette OKLCH convertita | `manifest.webmanifest`, `assets/icons/`, `index.html` | 3h | Lighthouse: "installable", 0 avvisi sul manifest | basso |
| T061 | T060 | P8 DoD 2, D5 | `sw.js`: precache di guscio + `data/core/**` + nakładka della lingua corrente; **network-first** su guscio e dati | `sw.js` | 4h | A rete spenta l'app si apre e i 6 livelli si navigano; modifico `core.js`, ricarico online: il codice nuovo gira subito | **alto** |
| T062 | T061 | P8 DoD 3 | `audio/**` cache-first + azione "scarica l'audio di questo livello" | `sw.js`, `assets/js/views.js` | 3h | Ascolto una frase online, spengo la rete, la risento; il resto del livello no finché non uso l'azione di download | medio |
| T063 | T061 | P8 DoD 6 | Costante di versione, pulizia in `activate`, avviso "nuova versione, ricarica" | `sw.js`, `assets/js/app.js` | 3h | Bump della versione, ricarico: appare l'avviso; dopo il reload `caches.keys()` non contiene più la vecchia | **alto** |
| T064 | T061 | P8 DoD 5 | Registrazione guardata: solo su `http`/`https`, silenziosa su `file://` | `assets/js/app.js` | 1h | Doppio clic su `index.html` da disco: console pulita, app funzionante | medio |
| T065 | T061 | P8 DoD 7 | Gate `check-sw.mjs`: confronta la lista di precache con gli script di `index.html` e i file di `data/core/` | `scripts/check-sw.mjs` (nuovo) | 3h | Aggiungo uno script a `index.html` senza toccare `sw.js`: esce 1 nominando il file | medio |
| T066 | T062 | P8 DoD 4 | Impostazioni: spazio occupato via `navigator.storage.estimate()`, svuota solo cache audio | `assets/js/views.js` | 2h | Dopo aver scaricato un livello il numero cresce; dopo lo svuotamento torna al valore di prima | basso |
| T067 | T066 | P8 DoD 4 | 10 chiavi UI ×5 | `data/i18n/ui-*.js` | 1h | `P` esce 0 | basso |
| T068 | T063..T067 | P8 DoD tutte | QA PWA: installazione, offline, aggiornamento, `file://` | - | 1h | I 4 scenari osservati e annotati | medio |
| T070 | - | P9 DoD 1,2 | Barra accenti: modulo delegato, inserimento al cursore, `mousedown` con `preventDefault` per non rubare il fuoco | `assets/js/keys.js` (nuovo), `assets/css/app.css` | 4h | Clic su `è` a metà parola: il carattere entra al cursore e il fuoco resta nel campo; Tab raggiunge i bottoni | medio |
| T071 | T070 | P9 DoD 5 | Scorciatoie: `1-9` opzione, `Invio` verifica poi avanza, `P` ripete l'audio, nessuna scatta mentre si scrive tranne `Invio` | `assets/js/keys.js` | 5h | Scrivo "1" in un campo `fill`: compare "1", non seleziona nulla. `Escape` continua a fermare l'audio come oggi | **alto** |
| T072 | T071 | P9 DoD 6 | Pannello scorciatoie su `?` | `assets/js/keys.js` | 2h | `?` apre il pannello, `Escape` lo chiude, il fuoco torna dov'era | basso |
| T073 | - | P9 DoD 3, D7 | Ricerca globale: caricamento di tutti i livelli al primo uso con stato di attesa, indice in memoria su titoli, lessico italiano, voci di grammatica | `assets/js/search.js` (nuovo) | 5h | Cerco una parola presente solo in C2 partendo da A1: la trovo, e durante il caricamento vedo lo stato di attesa | medio |
| T074 | T073 | P9 DoD 4 | Rotta `cerca` + campo nel rail head, stato vuoto e stato senza risultati distinti | `assets/js/search.js`, `index.html` | 3h | Ricerca vuota e ricerca "zzzz" mostrano due testi diversi | basso |
| T075 | T074 | P9 DoD 2 | 12 chiavi UI ×5 | `data/i18n/ui-*.js` | 1h | `P` esce 0 | basso |
| T076 | T075 | P9 DoD 2 | `a11y-gate` su barra accenti, pannello scorciatoie, vista ricerca, a 375 e 1280 px | - | 2h | 0 violazioni axe su entrambi i temi | medio |
| T077 | T073, T074 | **sicurezza P1** | L'evidenziazione del termine cercato passa da `esc()` su ogni valore prima di comporre l'HTML, sul modello di `Views.coniugatore` (`views.js:610-655`): mai una `String.replace` su HTML già composto, che reintrodurrebbe il termine dell'utente non filtrato nel markup | `assets/js/search.js` | 1h | Cercare `<img src=x onerror=alert(1)>` mostra la stringa letterale nei risultati e non esegue nulla | **alto** |
| T078 | T063, T071, T077 | A8 | Test di fase in Playwright: service worker (registrazione, cache-hit, rete spenta, ciclo di aggiornamento), fuoco della barra accenti, scorciatoie che non scattano mentre si scrive, escaping della ricerca | `tests/dom/pwa.spec.js`, `tests/dom/keys.spec.js` (nuovi) | 11-13h | `T` verde; è la fase con più superficie DOM del programma |

## F5 - P3 coppie minime (29-30h con test)

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T080 | - | P3 DoD 1,2 | Tipo `minpair`: builder, voce in `BUILDERS`, voce in `EX_TYPES`, regola di validazione (2 opzioni, `a` numerico, `say` presente). Opzioni in `core`, non nella nakładka, come `gender.opts` | `assets/js/exercises.js`, `scripts/validate.mjs` | 4h | `V` rifiuta un `minpair` con 3 opzioni o senza `say`; `P` non segnala `opts` mancanti nelle nakładki | medio |
| T081 | T080 | P3 DoD 3 | `data/core/phonetics.js`: 6 famiglie, ~100 coppie, etichette in italiano | `data/core/phonetics.js` (nuovo) | 4h | `grep -P '[ąęłżźćńś]' data/core/phonetics.js` trova solo l'intestazione | basso |
| T082 | T081 | **R5** | Collector in `extract_strings.mjs` per i campi di `phonetics.js` | `scripts/extract_strings.mjs` | 2h | Cancello un mp3 di una coppia e rilancio `A`: quel file risulta mancante (prova che il collector lo vede) | **alto** |
| T082b | T081 | **A3, P3 DoD 8** | Revisione umana delle parole delle coppie **prima** di `build_audio.py`: dopo la registrazione una correzione costa un mp3 nuovo, una riga in più in `audio-index.js` e un file orfano da rimuovere a mano | `data/core/phonetics.js` | 2h | Approvazione esplicita dell'utente registrata qui, con data, prima del lancio di T083 | medio |
| T083 | T082 | P3 DoD 4,7 | Build audio delle coppie e aggiornamento dell'indice | `audio/`, `data/audio-index.js` | 2h | `A` riporta 0 mancanti; `du -sh audio` cresciuto di meno di 4 MB; `Audio2.hasNatural("nonno")` vero | medio |
| T084 | T081 | P3 DoD 5 | Note contrastive scritte per lingua (non tradotte): pl, en, es, fr, de | `data/i18n/*/phonetics.js` (nuovi) | 10h | La nota polacca parla di geminate assenti in polacco, quella tedesca no: differenza verificata a lettura | medio |
| T085 | T083, T084 | P3 DoD 6 | Vista: discriminazione prima, produzione (`speak`) sbloccata dopo | `assets/js/views-train.js` | 4h | La sezione produzione è inaccessibile finché la discriminazione della stessa famiglia non è chiusa | basso |
| T086 | T085 | P3 DoD tutte | 12 chiavi UI ×5 + QA di fase | `data/i18n/ui-*.js` | 3h | `P` esce 0; `V` verde; audio udibile su tutte le coppie | medio |
| T087 | T085, T086 | A8 | Test di fase: builder `minpair` in Playwright, validatore in `node:test` | `tests/` | 4-5h | `T` verde |

## F6 - P5 piazzamento (25-26h con test)

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T090 | T001 | P5 DoD 1, D6 | Selezione item: solo `mcq`/`fill`/`cloze` dai test di unità (`u.test`), pesati per CEFR | `assets/js/placement.js` (nuovo) | 3h | La selezione per B1 pesca solo da test di unità B1, verificato su 20 estrazioni | basso |
| T091 | T090 | P5 DoD 1,7 | Ricerca binaria sui 6 livelli con arresto anticipato e caricamento su richiesta dei livelli necessari | `assets/js/placement.js` | 3h | Un profilo che sbaglia tutto si ferma sotto i 20 item; durante il caricamento si vede lo stato di attesa, mai una schermata bianca | medio |
| T092 | T091, T001 | P5 DoD 3,4 | Marcatura con `via: "placement"`, esclusa da `stats.lessonsDone` e da `xp`; azione "annulla piazzamento" | `assets/js/placement.js`, `assets/js/core.js` | 4h | Dopo il piazzamento `state.xp` è invariato; l'annullamento rimuove tutte e sole le lezioni marcate | **alto** |
| T093 | T091 | P5 DoD 5 | Isolamento: gli item del piazzamento non creano carte errore e non toccano `stats.correct/wrong` | `assets/js/placement.js`, `assets/js/errors.js` | 2h | Prima e dopo un piazzamento completo: `stats` e `errors` invariati | medio |
| T094 | T092 | P5 DoD 2,6 | Vista, rotta `piazzamento`, conferma esplicita prima di scrivere, ingresso dal percorso e dalle impostazioni | `assets/js/views-extra.js` (nuovo), `index.html` | 5h | Given profilo vuoto, risposte giuste su A1-A2 e sbagliate su B1: propone A2 completato e B1 come partenza | medio |
| T095 | T094 | P5 DoD tutte | 14 chiavi UI ×5 + QA (serve un profilo pulito a ogni giro) | `data/i18n/ui-*.js` | 3h | `P` esce 0; 3 giri con profili diversi danno esiti coerenti | medio |
| T096 | T091, T092 | A8 | Test di fase: la ricerca binaria è logica pura e va in `node:test` con profili sintetici; l'isolamento (XP invariato, nessuna carta errore) è un'asserzione di quei test | `tests/unit/placement.test.mjs` (nuovo) | 5-6h | `T` verde; un profilo che sbaglia tutto termina sotto i 20 item |

## F7 - P6 comprensione estesa (45-54h con test) - la più costosa

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T100 | - | P6 DoD 6 | Modello dati: testo italiano e struttura in `core`, domande e consegne nella nakładka; enunciati del dettato come lista separata | `data/core/readings.js` (nuovo) | 3h | La tabella di CLAUDE.md § Podział è aggiornata con i campi nuovi | basso |
| T101 | T100 | **R5** | Collector in `extract_strings.mjs` per testo integrale e enunciati del dettato | `scripts/extract_strings.mjs` | 3h | Cancello un mp3 noto, `A` lo riporta mancante | **alto** |
| T102 | T100 | P6 DoD 1 | Scrittura di 12 testi graduati (A2→C1) con 5 domande ciascuno: **rilascio minimo** | `data/core/readings.js` | 12h | `V` verde; ogni testo ha 5 domande e almeno 3 enunciati di dettato | medio |
| T103 | T102 | P6 DoD 1 | Estensione a 40 testi: **rimandabile**, punto di decisione esplicito | `data/core/readings.js` | 16h | come sopra sul totale | medio |
| T104 | T102 | P6 DoD 6 | Domande, opzioni e consegne nelle 5 nakładki per i 12 testi | `data/i18n/*/readings.js` (nuovi) | 8h | `P` esce 0; `grep -P '[ąęłżźćńś]' data/core/readings.js` trova solo l'intestazione | medio |
| T104b | T102, T104 | **A3, P6 DoD 2,3** | Revisione umana del testo italiano e delle note contrastive **prima** di `build_audio.py`. Le note si riscrivono per lingua, non si traducono dal polacco: `parity.mjs` verifica il kształt e non il senso, quindi qui nessun gate copre le spalle | `data/core/readings.js`, `data/i18n/*/readings.js` | 3h | Approvazione esplicita dell'utente registrata qui, con data; a campione, la nota inglese non nomina categorie che l'inglese non ha | **alto** |
| T105 | T101, T102 | P6 DoD 2,7 | Build audio: un mp3 per testo, uno per enunciato di dettato | `audio/`, `data/audio-index.js` | 4h | `A` a 0 mancanti; crescita di `audio/` sotto gli 8 MB, valore annotato | medio |
| T106 | T105 | P6 DoD 3,4 | Player dell'ascolto lungo con replay del singolo enunciato nel dettato | `assets/js/reading.js` (nuovo) | 5h | Nel dettato riascolto l'enunciato 3 senza ricaricare il testo intero | medio |
| T107 | T106 | P6 DoD 5 | Dettato su `listen` esistente e `Core.checkOpen`: nessun tipo nuovo | `assets/js/reading.js` | 3h | `EX_TYPES` invariato; `V` verde | basso |
| T108 | T107 | P6 DoD tutte | Vista lettura come scheda dell'hub Allenamento | `assets/js/views-extra.js` | 4h | `S`: testo, domande e dettato in sequenza, progresso salvato | medio |
| T109 | T108 | P6 DoD tutte | 14 chiavi UI ×5 + QA di fase + `a11y-gate` | `data/i18n/ui-*.js` | 4h | `P` esce 0; 0 violazioni axe | medio |
| T110 | T106, T107 | A8 | Test di fase: player e dettato in Playwright | `tests/dom/reading.spec.js` (nuovo) | 5-6h | `T` verde |

## F8 - P7 produzione scritta (43-44h con test)

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T120 | T001 | P7 DoD 1,2 | Rilevatore di costrutti: forme verbali via `Verbs.conjugate` su tutti i tempi richiesti, connettivi da lista chiusa, lunghezza minima | `assets/js/writing.js` (nuovo) | 6h | "sono andato al mare" → costrutto rilevato; "vado al mare" → non rilevato | **alto** |
| T121 | T120 | P7 DoD 3 | Separazione visibile fra rilevato automaticamente e autovalutato | `assets/js/writing.js` | 2h | Le due sezioni sono etichettate distintamente in tutte e 5 le lingue | basso |
| T122 | - | P7 DoD 5 | Traduzione inversa enunciato per enunciato con `Core.checkOpen` e varianti `alt` | `assets/js/writing.js` | 4h | Un enunciato con accento diverso passa con `strictAccents` falso e non passa con vero | medio |
| T123 | T120 | P7 DoD 1,4 | Contenuto: 20 prompt con costrutti richiesti e testi modello (italiano in `core`) | `data/core/writing.js` (nuovo) | 8h | `V` verde; ogni prompt dichiara almeno 3 costrutti | medio |
| T124 | T122 | P7 DoD 5 | Contenuto: 20 paragrafi di traduzione inversa con varianti accettate | `data/core/writing.js` | 6h | Ogni enunciato ha almeno 2 varianti accettate | medio |
| T125 | T123, T124 | P7 DoD 6 | Consegne, checklist e glosse nelle 5 nakładki | `data/i18n/*/writing.js` (nuovi) | 6h | `P` esce 0 | medio |
| T126 | T125, T001 | P7 DoD 6,7 | Bozze persistite in `state.writing`, incluse nell'export, avviso se la scrittura fallisce | `assets/js/writing.js`, `assets/js/core.js` | 4h | Scrivo, ricarico, il testo c'è; con quota esaurita compare l'avviso prima di perdere il testo | **alto** |
| T127 | T126 | P7 DoD 4 | Vista come scheda dell'hub: modello rivelato solo dopo l'invio | `assets/js/views-extra.js` | 4h | Il modello non è raggiungibile nel DOM prima dell'invio | basso |
| T128 | T127 | P7 DoD tutte | 20 chiavi UI ×5 + QA + `a11y-gate` | `data/i18n/ui-*.js` | 4h | `P` esce 0; 0 violazioni axe | medio |
| T129 | T126, T127 | **sicurezza P1** | Il testo scritto dallo studente si renderizza solo via `Core.esc()` o `textContent`. P7 non riusa i campi raw-HTML del corso (`theory[].p/.trap/.contrast/.tip`, `grammar.note`, `culture.text`, `ex.why`) né il loro percorso di rendering | `assets/js/writing.js`, `assets/js/views-extra.js` | 2h | Un export con `<img src=x onerror=alert(1)>` dentro una composizione, importato da una seconda persona (`views.js:833`), mostra il testo letterale e non esegue nulla | **alto** |
| T130 | T120, T129 | A8 | Test di fase: rilevatore di costrutti e traduzione inversa in `node:test`, rendering sicuro in Playwright | `tests/` | 6-7h | `T` verde; il test di escaping è rosso se si sostituisce `esc()` con `innerHTML` |

---

## Chiusura di ogni fase (checklist ripetuta, non opzionale)

L'esecuzione è **di fila su tutte le fasi con revisione umana alla fine** (`plan.md` § 7.5):
questa checklist è l'unica cosa che tiene le fasi separabili. Ogni fase chiude con un
**commit proprio**, così la revisione finale può tornare indietro di una fase sola invece
che del programma.

- [ ] `npm test && npm run test:dom` verde (da FT in poi)
- [ ] I test scritti nelle fasi precedenti passano ancora invariati
- [ ] `node scripts/validate.mjs` verde, e per ognuna delle 5 lingue se i dati sono cambiati
- [ ] `node scripts/parity.mjs` esce 0
- [ ] `uv run --script scripts/build_audio.py --dry-run` riporta 0 mancanti
- [ ] `I18n.missing()` vuoto dopo aver percorso ogni vista nuova nelle 5 lingue
- [ ] Apertura da `file://` senza errori in console
- [ ] Nessun file nuovo sopra le 300 righe
- [ ] `a11y-gate` sulle viste nuove, 375 e 1280 px, entrambi i temi
- [ ] Una entry in `docs/REPORT_ATTIVITA.md`
- [ ] Commit dedicato alla fase, con un messaggio che nomina la fase

## Da portare alla revisione finale

Sei punti di prodotto (non fatti scopribili nel codice) su cui il piano ha preso un default
per non fermarsi: `plan.md` § 7.6, C1-C6. Sono `assets/js/errors.js` (soglia di ripetizione,
potatura), `views-train.js` (composizione della sessione), `writing.js` (scala di
valutazione), `placement.js` (punto di taglio), `data/core/readings.js` (numero di testi del
primo taglio). La revisione guarda lì, non 50 giorni di diff.

---

## Stato di avanzamento

Aggiornato durante l'implementazione. Una riga per task chiuso o deliberatamente saltato.

### FT - chiusa

| ID | Esito | Prova |
|---|---|---|
| TT01 | fatto | `package.json`, `@playwright/test` 1.63.0 unica dev dependency, `node_modules/` non tracciato |
| TT02 | fatto | `tests/unit/_harness.mjs`, `node:vm` come in `validate.mjs`, più tempo e `localStorage` sostituibili |
| TT03 | fatto | `scripts/serve.mjs` + `playwright.config.js`; provato servendo un file, riscrivendolo e rileggendo i byte nuovi |
| TT04 | fatto | `tests/unit/state.test.mjs`; rete provata per mutazione su `merge`, `importState` e `save`, ognuna ripristinata identica |
| TT05 | fatto | `tests/dom/exercises.spec.js`, 13 tipi; con un doppio `onDone` iniettato 13 test su 17 diventano rossi |
| TT06 | fatto | baseline in `CLAUDE.md` § Kontrola jakości |

**Nota su TT01.** `node --test <directory>` su Node 24 risolve il percorso come modulo e fallisce:
lo script usa un glob esplicito. Il verify "esce 0 a suite vuota" non è soddisfacibile come scritto,
perché `node --test` tratta l'assenza di file di test come errore; è stato soddisfatto dal primo
test reale, in TT02.

### F0 - chiusa

| ID | Esito | Prova |
|---|---|---|
| T001 | fatto | sei contenitori additivi, `SCHEMA` resta 2 |
| T002 | fatto | scala `MIGRATIONS`, accetta `schema <= SCHEMA`, rifiuta sopra |
| T003 | **saltato di proposito** | vedi sotto |
| T005 | fatto | rosso prima del fix su due vettori su tre, verde dopo; guardia in `merge()`, non in `importState()` |
| T006 | fatto | `validateImport` per tipo di campo, tetto a 8 MB prima del parse |
| T007 | fatto | potatura errors → drills, mai lezioni né wypracowania; banner `role="alert"` che resta |
| T008 | fatto | 45 test unit, 22 DOM, tutti verdi |

**T003 saltato.** Il gate `check-migration.mjs` doveva verificare quattro fatti: schema 2 accettato,
99 rifiutato, chiave v1 migrata, prototipo non inquinato. Tutti e quattro sono già coperti da
`tests/unit/state.test.mjs` e `tests/unit/state-security.test.mjs`, che girano in `npm test`, cioè
nel gate che chiude ogni fase. Il task è stato scritto quando non era ancora deciso se ci sarebbe
stato un runner (assunzione A8, sciolta dopo). Scrivere adesso uno script che riasserisce le stesse
quattro cose crea una seconda fonte di verità che diverge alla prima modifica, in cambio di un
secondo punto d'ingresso per la CI che `npm test` già offre.

**Scostamento in F0 rispetto al piano:** tre chiavi UI nuove (`core.saveBlocked`,
`core.storagePruned`, `core.noticeDismiss`) in cinque lingue, che la matrice § 5 non prevedeva per
questa fase. Sono richieste dal verify di T007 (avviso non effimero) e sostituiscono
`core.saveFailed`, rimasta orfana. Saldo netto: +2 chiavi per lingua.
