# 002 - Corso irrinunciabile: scomposizione

Versione 1.1, allineata a `riconciliazione.md`: niente bump di schema (R1), fix di `load()`
sganciato dal bump e mantenuto (R2), forma dell'ADR più gate del piano per i falsi amici (R3),
misura del lookup già fatta (R4), niente `reviews[]` (R5), `gsrs` rimosso (R6), lista di
frequenza Leipzig CC BY 4.0 (R7), struttura CILS `BASIS: unknown` (R8). Più i quattro rilievi
del `security-reviewer`, entrati come sub-task nominati e non come righe di rischio.

Dove questo file e `plan.md` divergono, vale questo file: `plan.md` è alla 1.0, scritta prima
della riconciliazione.

Una riga per sub-task. `Dip.` sono dipendenze dirette, mai transitive. `Req.` traccia il
requisito: la voce della Definition of Done in `plan.md` § 3.3, la decisione in `§ 3.4`, il
punto di `riconciliazione.md`, o il rilievo di sicurezza (`SEC-n`). `Verify` è un comando da
eseguire o un'osservazione precisa, mai "controllo che funzioni".

Convenzione dei comandi ricorrenti:

- `V` = `node scripts/validate.mjs` (e per ognuna delle 5 lingue dove i dati cambiano)
- `P` = `node scripts/parity.mjs`
- `A` = `node scripts/extract_strings.mjs && uv run --script scripts/build_audio.py --dry-run`
- `S` = `node scripts/serve.mjs 8080`, prova in browser
- `T` = `npm run test:all`, condizione di **apertura e di chiusura** di ogni fase

Baseline da cui si parte, misurata il 2026-09-09 su `889413a`: `T` verde con 214 test unitari,
`V` e `P` a exit 0. Se una fase apre con `T` già rosso, si ferma e si indaga prima di aggiungere.

---

## F0 - Pubblicazione e verità della baseline (9h)

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T001 | - | FIX DoD 1 | `.nojekyll` a root, tracciato in git. Disattiva la pipeline Jekyll su Pages, che oggi attraverserebbe 2657 mp3 | `.nojekyll` (nuovo) | 0,5h | `git ls-files .nojekyll` lo elenca | basso |
| T002 | - | FIX DoD 2,5 | Scaricare Fraunces e Inter nelle sole varianti già usate da `index.html:10`, con `OFL.txt` accanto, e sostituire i tre `<link>` a Google con `@font-face` a percorso relativo | `assets/fonts/` (nuovo), `index.html`, `assets/css/app.css` | 3h | Pannello Network a pagina aperta: zero richieste a `fonts.googleapis.com` e `fonts.gstatic.com`. Peso aggiunto annotato in questa riga e sotto 400 KB | medio |
| T003 | T002 | FIX DoD 3,4 | I woff2 in `PRECACHE`, `SW_VERSION` da `v7` a `v8` | `sw.js` | 1h | Cache popolata, rete spenta: `getComputedStyle(document.querySelector("h1")).fontFamily` risolve al font locale. Dopo il reload `caches.keys()` non contiene più `linguai-shell-v7` | medio |
| T004 | T002 | FIX DoD 5 | Prova da `file://` dopo il cambio font | - | 0,5h | Doppio clic su `index.html`: font corretti, console senza errori | basso |
| T005 | - | FIX DoD 7, R6 | Correggere i numeri di CLAUDE.md § Kontrola jakości: 13 tipi presenti con `truefalse` a 12 occorrenze (arrivano dalle domande di `readings.js`, non dalle lezioni), 214 test unitari, 97 dichiarazioni DOM, 501 chiavi UI per lingua, 2657 mp3, 12 testi di lettura | `CLAUDE.md` | 1h | Ogni numero nel file corrisponde all'output del comando che lo produce, rilanciato adesso | basso |
| T006 | T001, T003 | A6 | Procedura di pubblicazione scritta e percorsa una volta end-to-end su HTTPS | `README.md` | 2h | L'URL pubblico risponde, il service worker si registra, `window.isSecureContext` è `true` (prerequisito di F6 e F10) | medio |
| T007 | - | **SEC-2a** | Correggere `README.md:46`: la frase dice che nulla esce dal browser, ma `Audio2.listen` (`audio.js:254`) usa `SpeechRecognition`, già attivo nei 150 esercizi `speak` (`exercises.js:408`) e nelle 10 conversazioni (`views.js:586`), e in quei browser la voce viene trasmessa a un servizio remoto. La frase nomina l'eccezione invece di negare in blocco. **Il difetto esiste già oggi e si corregge qui, non nella fase che lo estende** | `README.md` | 1h | La frase corretta nomina il riconoscimento vocale come unica eccezione e dice che quei soli esercizi non funzionano offline; `grep -n "SpeechRecognition\|riconoscimento" README.md` la trova | **alto** |

## F1 - O4 FSRS sul mazzo del lessico (30,5h) - fondazionale

**Niente bump di `SCHEMA`** (R1). Verificato: `errors.js:29` fissa `GRADUATE_REPS = 2` ed
`errors.js:68` cancella la carta appena `ok && reps >= 2`, mentre il ramo `interval * ef` di
`Core.schedule` parte da `reps >= 3`: nel quaderno degli errori quel ramo è irraggiungibile e
`ef` viene scritto e mai letto. FSRS tocca quindi il **solo mazzo del lessico**, aggiunge i
campi nuovi `s` e `d`, e nessun campo esistente cambia significato.

Rimossi in riconciliazione: **T013** (contenitore `reviews[]`, R5). Il numero non si riusa.

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T010 | - | **R2** | Test che dimostra il difetto latente: un salvataggio con `schema: 1` scritto in `localStorage` sotto `linguai.italiano.v2` viene **scartato** da `load()` invece di passare per `MIGRATIONS`. Difetto indipendente da FSRS: oggi non si manifesta perché nessuno ha mai alzato lo schema | `tests/unit/state.test.mjs` | 2h | Il test è **rosso** contro il codice di oggi. Se è verde l'ipotesi è sbagliata e la fase si ferma qui | **alto** |
| T011 | T010 | **R2** | `load()` (`core.js:63-75`) applica `migrateUp` e accetta `schema <= SCHEMA`, rifiutando solo `schema > SCHEMA`, come già fa `importState` (`core.js:698`) | `assets/js/core.js` | 2h | T010 diventa verde; le 214 asserzioni preesistenti restano verdi senza essere state toccate | **alto** |
| T012 | - | O4 DoD 5 | Algoritmo FSRS come modulo puro senza dipendenze da `Core`: stabilità, difficoltà, recuperabilità, prossimo intervallo, parametri di default dichiarati con la versione di riferimento | `assets/js/fsrs.js` (nuovo) | 8h | Test su vettori dell'implementazione di riferimento: stessi ingressi, stesse uscite alla quarta cifra. **È questo il criterio di successo di O4** (R5), non "meno ripetizioni a parità di ritenzione" | **alto** |
| T014 | T012 | **R1** | Conversione pigra: una carta senza `s`/`d` li riceve alla **prima ripetizione** dopo l'aggiornamento, derivandoli dall'intervallo corrente. Nessuna migrazione di massa, nessuna riscrittura all'avvio | `assets/js/core.js` | 3h | Profilo con 300 carte di cui 40 scadute oggi: dopo l'aggiornamento le scadute sono ancora 40 e nessuna carta ha `s`/`d` finché non viene ripassata. Ripassandone una, quella sola li acquisisce | **alto** |
| T015 | T012, T014 | **R1**, O4 DoD 3 | `gradeCard` (`core.js:398`) passa a FSRS. **`errors.js:66` e `:97` restano su `Core.schedule`**, e il perché si scrive in commento: con `GRADUATE_REPS = 2` la carta esce prima che il ramo `interval * ef` sia raggiungibile, quindi sostituirlo lì non cambia niente di osservabile e allargherebbe la superficie senza guadagno | `assets/js/core.js`, `assets/js/errors.js` | 3h | `grep -n "Core.schedule\|Fsrs\." assets/js/` mostra il mazzo del lessico su FSRS e il quaderno errori invariato; i test del quaderno errori passano **senza essere stati modificati** | **alto** |
| T016 | - | **R6**, C8 | Rimuovere `gsrs` da `defaultState()` (`core.js:40`) e da `SHAPE` (`core.js:651`): dichiarato, mai scritto né letto da alcun modulo. Riscrivere su un contenitore vero l'asserzione di `tests/unit/state.test.mjs:78`, che oggi ce lo infila a mano per provare la persistenza | `assets/js/core.js`, `tests/unit/state.test.mjs` | 1,5h | `grep -rn gsrs assets/ scripts/ tests/` non trova più nulla; un profilo salvato che contiene `gsrs` si carica lo stesso, perché `merge()` ignora le chiavi fuori dal default | basso |
| T017 | T012 | O4 DoD 6,7 | Ritenzione desiderata nelle impostazioni, con la frase che ne spiega l'effetto pratico | `assets/js/views.js` | 4h | `S`: alzando la ritenzione la prossima scadenza della stessa carta si avvicina. Rispondendo "difficile" tre volte di fila sulla stessa carta l'intervallo non cresce | medio |
| T018 | T017 | O4 DoD 6 | 10 chiavi UI ×5, testo di spiegazione scritto per lingua e non tradotto meccanicamente | `data/i18n/ui-*.js` | 2h | `P` esce 0; `I18n.missing()` vuoto sulle impostazioni nelle 5 lingue | medio |
| T019 | T014, T015, T016 | O4 DoD 5,8 | Test di fase: vettori di riferimento, conversione pigra, invarianza del quaderno errori, `load()` che migra | `tests/unit/fsrs.test.mjs` (nuovo), `tests/unit/state.test.mjs` | 8h | `T` verde. Ogni asserzione preesistente modificata è elencata qui una per una con il motivo: una suite verde perché riscritta non è una suite verde | **alto** |
| T020 | T019 | O4 DoD 9 | Continuità dell'export: JSON esportato prima di F1, reimportato dopo | - | 1h | Stesso numero di carte e stesse scadenze; `schema` è ancora 2 in entrambi i file | medio |

## F2 - O2 motore del lookup (41h codice + 4h contenuto) - blocca F3

La misura di fattibilità è già stata fatta nell'ADR (R4): 12431 forme distinte dalle 204 voci
verbali in 11 ms, e l'alternativa "dizionario ridotto ai lemmi del corso" copre il 28% dei 521
token dei testi, perché 920 delle 1410 voci di lessico sono multiparola. `BASIS: inferred`, non
rieseguita qui: T030 la rifà e la porta a `measured`.

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T030 | - | O2 DoD 2, **R4**, C3 | Riprodurre la misura dell'ADR e fissare la soglia di copertura **prima** di leggere il risultato sui testi veri | `scripts/check_lookup.mjs` (nuovo) | 3h | Il comando stampa la percentuale risolta per testo e totale. Soglia dichiarata e numero ottenuto annotati entrambi in questa riga | medio |
| T031 | T030 | O2 DoD 3 | Indice inverso dei verbi generato a runtime dal coniugatore per i verbi presenti nel corso, costruito al primo uso e non all'avvio | `assets/js/lemma.js` (nuovo) | 6h | "bevono" risolve "bere", "andati" risolve "andare", "fu" risolve "essere". Costruzione sotto 50 ms su macchina di sviluppo, misurata e annotata | **alto** |
| T032 | T031 | O2 DoD 3 | Regole di de-flessione per nomi e aggettivi con lista di eccezioni | `assets/js/lemma.js` | 4h | "persone" risolve "persona", "belle" risolve "bello"; "città" e "caffè" restano invariate e non vengono mutilate | **alto** |
| T033 | T032 | O2 DoD 2 | `check_lookup.mjs` diventa gate: esce 1 sotto la soglia di T030 | `scripts/check_lookup.mjs` | 4h | Rimuovendo una regola di T032 il comando esce 1 e nomina le parole perse | medio |
| T034 | T032 | O2 DoD 1, **SEC-4** | Scheda della parola: forma base, glossa, ascolto, aggiunta al mazzo via `Core.addCard`. La traduzione è modificabile dallo studente (ADR-008 punto 4), quindi il campo di modifica scrive con `.value` e legge con `.value`, **mai `innerHTML`** | `assets/js/views-lookup.js` (nuovo) | 8h | `S`: tocco "bevono" nel primo testo di `r-a1-mattina`, vedo "bere". Scrivo `<img src=x onerror=alert(1)>` nella traduzione, salvo, riapro: compare la stringa letterale e non si esegue nulla | **alto** |
| T035 | T034 | O2 DoD 4 | Stato esplicito per la parola non risolta, con aggiunta manuale dalla forma trovata nel testo | `assets/js/views-lookup.js` | 3h | Tocco una parola fuori corso: vedo il messaggio e posso aggiungerla comunque. Nessun tocco che non fa niente | basso |
| T036 | T034 | O2 DoD 5 | Accessibilità: parole raggiungibili da tastiera, area di tocco 44 px, la scheda restituisce il fuoco alla chiusura | `assets/js/views-lookup.js`, `assets/css/app.css` | 3h | `a11y-gate` a 375 e 1280 px in entrambi i temi: 0 violazioni. Tab percorre le parole in ordine di lettura | medio |
| T037 | T033 | O2 DoD 4 | Estendere `glossIt` sui 12 testi esistenti per le parole che il risolutore non copre | `data/core/readings.js`, overlay ×5 | 4h (contenuto) | `check_lookup.mjs` risale sopra la soglia di T030; `V` e `P` verdi | medio |
| T038 | T035 | O2 DoD 1 | 14 chiavi UI ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0; `I18n.missing()` vuoto sulla scheda nelle 5 lingue | medio |
| T039 | T034, T037 | O2 DoD 1,2,3 | Test di fase: risolutore in `node:test`, scheda in Playwright | `tests/unit/lemma.test.mjs`, `tests/dom/lookup.spec.js` (nuovi) | 8h | `T` verde; togliendo l'indice inverso di T031 i test del risolutore diventano rossi | medio |

## F3 - O6 copertura su lista di frequenza (27h codice + 3h contenuto)

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T050 | - | O6 DoD 1, **R7** | Importare la lista da **Leipzig Corpora Collection, CC BY 4.0**, con intestazione di provenienza (fonte, versione, licenza, data, criterio di taglio). Paisà e WaCKy sono CC BY-NC-SA e le liste derivate da OpenSubtitles CC BY-SA: lo share-alike contamina il repository e sono escluse | `data/core/frequenza.js` (nuovo) | 4h | L'intestazione porta i cinque campi e il file di attribuzione esiste; nessuna delle fonti escluse compare nel repository | medio |
| T051 | T050, T032 | O6 DoD 3,7 | Funzioni di copertura pure: corso contro lista, mazzo contro lista, entrambe passando dal risolutore di F2 | `assets/js/frequency.js` (nuovo) | 6h | Test con liste di 10 elementi costruite a mano; una carta in forma flessa non risulta mancante | medio |
| T052 | T051 | O6 DoD 2 | Vista Copertura: due numeri distinti ed etichettati, con la spiegazione di cosa contano | `assets/js/views-frequency.js` (nuovo) | 6h | `S`: i due numeri sono diversi e coerenti; svuotando il mazzo il secondo va a zero e il primo no | medio |
| T053 | T052, T034 | O6 DoD 4, **SEC-3** | Le 20 più frequenti non possedute, con aggiunta al mazzo in un tocco. La vista legge `srs`, quindi rientra nel giro di verifica dell'escaping di T067 | `assets/js/views-frequency.js` | 4h | Aggiungendone una, sparisce dalla lista e compare in Lessico. Una carta con fronte `<img src=x onerror=alert(1)>` compare come stringa letterale anche qui | medio |
| T054 | T050 | O6 DoD 6 | `PRECACHE` e `SW_VERSION` | `sw.js` | 0,5h | Rete spenta: la vista Copertura si apre e i numeri non sono zero | basso |
| T055 | T052 | O6 DoD 5 | Lettura critica del risultato con l'utente prima di pubblicare: quanto copre davvero il corso. Se è basso, è una scoperta sul corso e va portata avanti, non nascosta dietro un grafico | - | 3h (contenuto) | Il numero è stato guardato e discusso, ed è annotato in questa riga | medio |
| T056 | T052 | O6 DoD 2 | 12 chiavi UI ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0 | medio |
| T057 | T051, T053 | O6 DoD 7 | Test di fase sulle funzioni pure | `tests/unit/frequency.test.mjs` (nuovo) | 5h | `T` verde | basso |

## F4 - O9 export e import Anki (26h) - indipendente, parallelizzabile

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T060 | - | O9 DoD 1,4, **SEC-4** | Serializzazione TSV con direttive di intestazione, escape RFC 4180 e neutralizzazione dei prefissi di formula (`=`, `+`, `-`, `@`). L'escape vale anche per la traduzione modificata dallo studente in T034 | `assets/js/anki.js` (nuovo) | 6h | Un campo `=1+1` esce neutralizzato; un campo con virgola, tabulazione, virgolette e newline sopravvive al giro e non spezza la riga | medio |
| T061 | T060 | O9 DoD 7 | Parsing del file importato: conteggio colonne coerente, tetto di righe, rifiuto prima del parse oltre soglia | `assets/js/anki.js` | 6h | Un file con righe a 3 e a 4 colonne è rifiutato con messaggio nella lingua dello studente; un file da 200k righe è rifiutato prima del parse e lo stato resta intatto | medio |
| T062 | T061 | O9 DoD 5 | Anteprima prima della scrittura: aggiungo N, aggiorno M, ignoro K, con conferma esplicita | `assets/js/views.js` | 4h | Annullando l'anteprima `exportState()` prima e dopo è identico byte per byte | medio |
| T063 | T062 | O9 DoD 6, **SEC-1** | Chiave sul solo italiano normalizzato, e **guardia contro il prototype pollution sul percorso che oggi la aggira**: `merge()` filtra `__proto__`/`constructor`/`prototype` (`core.js:199-213`) ma `Core.addCard` → `cardKey(it) = norm(it)` → `state.srs[k] = {...}` (`core.js:331-343`) non passa da `merge()` e non applica `isForbidden()`; una chiave `__proto__` sopravvive a `norm()`. Esportare `isForbidden` da `core.js` e farla applicare da `cardKey`/`addCard`, che rifiutano o rinominano | `assets/js/anki.js`, `assets/js/core.js` | 4h | Test di regressione: importo un CSV con fronte `__proto__`, e dopo `save()` la carta esiste come **proprietà propria** di `state.srs` mentre `({}).polluted` resta `undefined`. Il test è rosso prima del fix. Reimportando due volte lo stesso file il mazzo non raddoppia | **alto** |
| T064 | T062 | O9 DoD 8 | Rendering di ciò che arriva dal file solo via `esc()` o `textContent` | `assets/js/views.js` | 2h | Un campo con `<img src=x onerror=alert(1)>` compare come stringa letterale nell'anteprima | **alto** |
| T065 | T060 | O9 DoD 1,2 | Verifica in Anki reale, versione annotata in questa riga | - | 2h | 40 carte con apostrofi, virgole e accenti entrano in Anki senza toccare il separatore; i campi non sono spezzati | **alto** |
| T066 | T062 | O9 DoD 3 | 14 chiavi UI ×5, inclusa la frase che dichiara che il calendario delle ripetizioni non viaggia | `data/i18n/ui-*.js` | 2h | `P` esce 0; la frase compare **prima** dell'export, non solo nel README | medio |
| T067 | T063, T064 | O9 DoD 6,8, **SEC-3** | Test di fase, incluso il round-trip completo: import → **ogni vista che legge `srs`** con fronte e retro ostili. Le viste sono le flashcard (`views.js:449` e `:737`) e la Copertura di T053 | `tests/unit/anki.test.mjs`, `tests/dom/anki.spec.js` (nuovi) | 6h | `T` verde. Con fronte e retro a `<img src=x onerror=alert(1)>`: nessuna delle tre viste esegue nulla, tutte mostrano la stringa | **alto** |

## F5 - O5 falsi amici (31h codice + 45h contenuto)

Forma dell'ADR, gate del piano (R3): file dedicato in `data/core/` perché
`extract_strings.mjs` cammina solo lì e fuori l'esercizio nasce muto; campo `for: [...]` nello
strato neutro; `parity.mjs` esteso a confrontare la categoria **contro la dichiarazione `for:`**
invece che contro il polacco. Spegnere il gate su questa categoria non era accettabile: una
lista più corta somiglia a una lista.

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T070 | - | O5 DoD 2, **R3** | `data/core/interference.js`: unione delle parole italiane con id stabili e campo `for: ["pl","es",...]` che dichiara per quali lingue la voce è pertinente | `data/core/interference.js` (nuovo) | 3h | `V` verde; `grep -P '[ąęłżźćńśñçäöüß]' data/core/interference.js` non trova nulla | basso |
| T071 | T070 | O5 DoD 5 | Overlay per lingua con la spiegazione delle sole voci il cui `for` contiene quella lingua; caricamento con gli `EAGER_FILES` (`core.js:587`) e ricarica in `setLanguage` | `data/i18n/<lang>/interference.js` ×5 (nuovi), `assets/js/core.js` | 5h | Cambio lingua a caldo da `pl` a `es` senza ricaricare: l'insieme cambia interamente e non resta vuoto | **alto** |
| T072 | T071 | O5 DoD 3, **R3** | `parity.mjs` esteso: per la categoria interference confronta la presenza contro `for:`, non contro il polacco. Più `check-falsi-amici.mjs` per ciò che la parità non copre: minimo 30 voci per lingua, id risolti, spiegazione presente, audio presente | `scripts/parity.mjs`, `scripts/check-falsi-amici.mjs` (nuovo) | 5h | Tolgo dall'overlay `de` una voce il cui `for` contiene `de`: `P` esce 1 nominando lingua e id. Tolgo l'audio di una parola: `check-falsi-amici.mjs` esce 1 | **alto** |
| T073 | T070 | O5 DoD 4 | Collector in `extract_strings.mjs` e prima registrazione | `scripts/extract_strings.mjs` | 2h | Cancello un mp3 noto e rilancio `A`: me lo riporta mancante. Prova **per differenza**, non per assenza di errori | **alto** |
| T074 | T071 | O5 DoD 6 | Vista ed esercizi con i tipi esistenti, nessuna voce nuova in `EX_TYPES` | `assets/js/views-falsi.js` (nuovo) | 8h | `S`: la rotta risponde; l'esercizio chiude con `onDone` chiamato **una volta sola** (test DOM di T078) | medio |
| T075 | T070, T071 | O5 DoD 1 | 30 coppie ×5 lingue, **scritte per lingua e non tradotte**. Ritmo dichiarato: circa 15 minuti a voce, verifica inclusa | `data/i18n/<lang>/interference.js` ×5 | 45h (contenuto) | Lettura incrociata: due schede nella stessa posizione in due lingue non sono la stessa parola italiana salvo coincidenza reale. `check-falsi-amici.mjs` verde | **alto** |
| T076 | T074 | O5 DoD 5 | 10 chiavi UI ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0 | basso |
| T077 | T070, T071 | - | `PRECACHE` per i 6 file nuovi, `SW_VERSION` alzata | `sw.js` | 0,5h | Rete spenta: la vista si apre in tutte e 5 le lingue | medio |
| T078 | T074, T075 | O5 DoD 6,7 | Test di fase | `tests/unit/falsi.test.mjs`, `tests/dom/falsi.spec.js` (nuovi) | 6h | `T` verde; con l'overlay di una lingua svuotato la suite diventa rossa | basso |

## F6 - O3 shadowing con registrazione (49h) - sblocca il modulo orale di F10

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T080 | T006 | O3 DoD 6, D6 | **Spike S1 — ESEGUITO, esito: PRATICABILE.** Chromium: `getUserMedia`, `MediaRecorder` e `SpeechRecognition` tutti presenti; registrati 4924 byte in `audio/webm;codecs=opus` in 0,8 s; microfono e riconoscimento si avviano insieme senza conflitto. MIME supportati: `audio/webm`, `audio/webm;codecs=opus`, `audio/mp4` — **niente ogg, niente wav**. WebKit di Playwright: `getUserMedia` sì, `MediaRecorder` NO, ma è una build di Playwright e non Safari: Safari vero ha MediaRecorder da 14.1 (macOS) e 14.5 (iOS), con `audio/mp4`+AAC fino a iOS 18.3 e `audio/webm;codecs=opus` da iOS 18.4. **Conseguenza vincolante: il MIME va negoziato, non fissato**, e la registrazione deve partire da un gesto dell'utente. Firefox non misurato (la sonda è andata in timeout). **Correzione ad A6**: `getUserMedia` funziona da `file://` in Chromium — `isSecureContext` è `true` per i file locali e ho registrato 2992 byte da lì. L'assunzione «non funzionerà mai da `file://`» era falsa per Chromium; resta non verificata per Safari e Firefox. **T084 (scoring col riconoscimento) resta SOSPESO**: il riconoscimento si avvia ma non produce eventi in ambiente di test, quindi la sua utilità non è dimostrata | - | 4h | fatto |
| T081 | T080 | O3 DoD 2,4,5 | Modulo registratore: guardia sul contesto sicuro **sul protocollo e non dentro un `try/catch`**, flusso dei permessi, macchina degli stati, `revokeObjectURL` a ogni scarto | `assets/js/recorder.js` (nuovo) | 10h | Da `file://` la guardia scatta e la console resta pulita. 50 registrazioni di fila non fanno crescere la memoria in modo monotono, osservato una volta e annotato qui | **alto** |
| T082 | T081 | O3 DoD 1 | Vista shadowing: frase nativa, conto alla rovescia, registrazione, riascolto alternato, ripetizione senza ricaricare | `assets/js/views-shadow.js` (nuovo) | 10h | `S` su HTTPS o localhost: il ciclo si ripete cinque volte senza reload | medio |
| T083 | T081 | O3 DoD 2,3 | Degradazione dichiarata su `file://`, permesso negato e browser senza supporto, sul modello già usato per il riconoscimento vocale | `assets/js/views-shadow.js` | 4h | Negando il permesso compare un messaggio che nomina il permesso e cosa fare, non un errore di console | **alto** |
| T084 | T080, T088 | O3 DoD 6 | Scoring via riconoscimento vocale, **solo se T080 lo dichiara praticabile**, presentato come "quanto il riconoscitore ha capito" e mai come giudizio di pronuncia | `assets/js/views-shadow.js` | 5h | Il punteggio non è mai etichettato come pronuncia; senza consenso di T088 il modulo non parte affatto | medio |
| T085 | T082 | O3 DoD 7 | Accessibilità: stato del pulsante (`aria-pressed` o equivalente), inizio e fine registrazione annunciati | `assets/js/views-shadow.js` | 4h | `a11y-gate` a 375 e 1280 px: 0 violazioni; un lettore di schermo annuncia inizio e fine | medio |
| T086 | T083 | O3 DoD 4 | 14 chiavi UI ×5, inclusa "le registrazioni non si salvano" | `data/i18n/ui-*.js` | 2h | `P` esce 0; la frase compare prima della prima registrazione, non dopo | medio |
| T088 | T007 | **SEC-2b** | Schermata di consenso prima della **prima** chiamata a `SpeechRecognition`: dice che la voce esce verso un servizio di riconoscimento remoto e che quel modulo non funziona offline. Consenso ricordato nelle impostazioni e revocabile. Modulo riusato da F10 | `assets/js/views-shadow.js`, `assets/js/views.js`, `data/i18n/ui-*.js` | 4h | Con profilo nuovo, la prima apertura del modulo che usa STT mostra la schermata; rifiutando, il modulo resta chiuso e il resto del corso funziona. Revocando dalle impostazioni la schermata torna | **alto** |
| T087 | T084, T085, T088 | O3 DoD 1,2,8 | Test di fase con dispositivi finti Playwright | `tests/dom/shadow.spec.js` (nuovo) | 8h | `T` verde con `--use-fake-device-for-media-stream`; il percorso "permesso negato" è coperto | **alto** |

## F7 - O7 parlato reale (38h codice + 22h contenuto)

Il gate viene prima del contenuto: 12 ore di scrittura possono essere invalidate in blocco
dalla voce, ed è già successo in questo progetto con la "o" aperta e chiusa.

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T090 | - | O7 DoD 1 | `check_connected.py`, modellato su `check_minpairs.py`: sintetizza ogni enunciato nelle due forme, citazione e parlato connesso, e boccia le coppie che producono file identici o indistinguibili | `scripts/check_connected.py` (nuovo) | 6h | Esce 1 su una coppia costruita apposta per essere identica. Il verdetto per elisione, troncamento e raddoppiamento sintattico è annotato in questa riga | **alto** |
| T091 | - | O7 DoD 3 | Scala di velocità sulle registrazioni esistenti via `playbackRate` (`audio.js:186`), senza un solo mp3 nuovo | `assets/js/views-phonetics.js` | 5h | Una frase già registrata si sente a 1,4x con la stessa altezza di voce; `A` riporta 0 file nuovi | basso |
| T092 | T090 | O7 DoD 2 | `data/core/parlato.js` con i **soli** fenomeni promossi da T090, e commento che motiva le assenze come già fatto in `phonetics.js` per la "o" | `data/core/parlato.js` (nuovo) | 5h | `V` verde; il commento nomina esplicitamente ciò che il gate ha bocciato e con quale esito | medio |
| T093 | T092 | O7 DoD 4, D7 | Esercizio di riconoscimento della forma piena dietro quella ridotta, con i tipi esistenti. Un tipo nuovo si aggiunge solo se `minpair` non regge il caso, e allora si motiva | `assets/js/exercises.js` o riuso | 8h | `onDone` chiamato una volta sola; `EX_TYPES` invariato salvo eccezione motivata in questa riga | medio |
| T094 | T092 | O7 DoD 6 | Collector in `extract_strings.mjs` e prima registrazione | `scripts/extract_strings.mjs` | 2h | Cancello un mp3 noto: `A` me lo riporta mancante | **alto** |
| T095 | T091, T093 | O7 DoD 4 | Integrazione nella vista fonetica esistente | `assets/js/views-phonetics.js` | 6h | `S`: la sezione compare e le coppie minime esistenti continuano a funzionare (test DOM di `phonetics.spec.js` verdi) | basso |
| T096 | T090, T092 | O7 DoD 2,6 | ~60 enunciati nelle due forme, verificati contro il gate. Ritmo dichiarato: circa 12 minuti a coppia | `data/core/parlato.js` | 12h (contenuto) | `check_connected.py` verde su tutti; nessuna coppia bocciata è rimasta nel file | **alto** |
| T097 | T096 | O7 DoD 5 | Note contrastive ×5, scritte per lingua | `data/i18n/<lang>/parlato.js` ×5 (nuovi) | 10h (contenuto) | Lettura incrociata: la nota spagnola non ripete quella polacca; `P` esce 0 | medio |
| T098 | T095 | O7 DoD 4 | 12 chiavi UI ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0 | basso |
| T099 | T095, T096 | O7 DoD tutte | Test di fase, più `PRECACHE` e `SW_VERSION` per i file nuovi | `tests/dom/parlato.spec.js` (nuovo), `sw.js` | 6h | `T` verde; rete spenta, la sezione si apre | basso |

## F8 - O8 dialoghi ramificati (33h codice + 38h contenuto)

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T110 | - | O8 DoD 1,2, D5 | Estensione **additiva** della shape: `id` sui turni, opzioni con destinazione sui turni `TY`. Un dialogo senza `id` resta lineare e non si tocca | `data/core/conversations.js` | 8h | `git diff data/core/conversations.js` non mostra alcuna modifica alle righe dei 10 dialoghi esistenti; `A` non riporta mancanti nuovi per loro | **alto** |
| T111 | T110 | O8 DoD 3 | Regole in `validate.mjs`: destinazione esistente, nessun nodo irraggiungibile, nessun ciclo senza uscita | `scripts/validate.mjs` | 5h | Introduco una destinazione inventata: `V` esce 1 nominando dialogo e turno. Rendo un nodo irraggiungibile: `V` esce 1 | medio |
| T112 | T110 | O8 DoD 2 | Motore: `runConversation` (`views.js:514`) cammina il grafo; il percorso lineare resta identico a oggi | `assets/js/views.js` | 10h | I 10 dialoghi vecchi si giocano identici; i test DOM esistenti restano verdi senza modifiche | **alto** |
| T113 | T112 | O8 DoD 5 | Rigiocare il ramo non preso senza rifare tutto il dialogo | `assets/js/views.js` | 5h | Alla fine il bottone riporta al punto di scelta, non all'inizio | basso |
| T114 | T111, T112 | O8 DoD 4,6 | 4 dialoghi ramificati **a diamante**: al massimo 3 punti di scelta, 2 opzioni ciascuno, con riconvergenza. Ritmo dichiarato: circa 6h a dialogo | `data/core/conversations.js` | 24h (contenuto) | `V` verde. Il conto dei turni per dialogo è annotato qui e resta sotto 20. Nel dialogo del ristorante, rifiutando il dolce il cameriere non lo nomina al conto | **alto** |
| T115 | T114 | O8 DoD 7 | Traduzione delle righe nuove ×5 | `data/i18n/<lang>/conversations.js` ×5 | 14h (contenuto) | `P` esce 0 | medio |
| T116 | T114 | O8 DoD 7,8 | Registrazione delle righe nuove. `turns[].it` è già raccolto da `extract_strings.mjs:99`, quindi niente collector nuovo: **verificarlo, non assumerlo** | - | 1h | `A` riporta 0 mancanti; delta audio annotato qui e sotto 1,5 MB | medio |
| T117 | T113 | O8 DoD 5 | 8 chiavi UI ×5 | `data/i18n/ui-*.js` | 1,5h | `P` esce 0 | basso |
| T118 | T112, T114 | O8 DoD 2,4 | Test di fase: un dialogo lineare e uno ramificato, entrambi coperti | `tests/dom/conversazione.spec.js` | 8h | `T` verde; due percorsi diversi nello stesso dialogo producono due finali diversi | medio |

## F9 - O2 biblioteca, a scaglioni (8h codice + 100h contenuto per 28 testi)

Fase editoriale al 93%. Lo scaglione minimo è 12 testi. Il secondo si apre solo se il primo
conferma il ritmo dichiarato.

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T120 | T039 | O2 DoD 6 | Primo scaglione: 12 testi A2-C1, 7-9 frasi ciascuno, 3-5 domande **in italiano** dentro `data/core` come già fanno i 12 esistenti. Ritmo dichiarato: circa 2,5h a testo | `data/core/readings.js` | 30h (contenuto) | `V` verde; il conteggio dei testi passa da 12 a 24 nell'output di `validate.mjs` | **alto** |
| T121 | T120 | O2 DoD 7 | Rilettura e approvazione dell'italiano **prima** di `build_audio.py`: dopo, una correzione costa un mp3 nuovo, una riga in `audio-index.js` e un orfano che resta nella history | - | 5h (contenuto) | L'approvazione è avvenuta ed è annotata qui, con la data, prima del lancio di T123 | **alto** |
| T122 | T120 | O2 DoD 8 | Titolo, introduzione e glosse ×5 lingue | `data/i18n/<lang>/readings.js` ×5 | 12h (contenuto) | `P` esce 0 | medio |
| T123 | T121 | O2 DoD 6,9 | Registrazione e aggiornamento dell'indice | - | 3h | `A` riporta 0 mancanti; delta audio annotato qui e sotto 2,5 MB per scaglione | medio |
| T124 | T123 | O2 DoD 2 | Copertura del lookup sui testi nuovi | `scripts/check_lookup.mjs` | 3h | Il gate resta sopra la soglia di T030 anche sui 12 testi nuovi; se scende, si estende `glossIt` finché non risale | medio |
| T125 | T124 | O2 DoD 6 | Secondo scaglione, stessi passi da T120 a T124 | come sopra | 53h (di cui 50h contenuto) | Come sopra; il conteggio arriva a 40 testi | medio |

## F10 - O1 simulatore CILS (66h codice + 50h contenuto)

**T130 è bloccante per l'intera fase** (R8). Le fonti secondarie non concordano nemmeno sul
numero delle prove del formato Cittadinanza: una ne descrive quattro, un'altra cinque
includendo l'analisi delle strutture di comunicazione, e concordano solo sul fatto che il
costrutto è **diverso** dal CILS UNO B1 standard, quindi la documentazione del B1 generico non
è una fonte valida. Fino a T130 la struttura è `BASIS: unknown` e si scrive così.

| ID | Dip. | Req. | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|---|---|
| T130 | - | O1 DoD 1, A9, **R8** | Leggere il sillabo ufficiale CVCL dell'Università per Stranieri di Siena per il formato **Cittadinanza**, e fissare struttura, numero di item e soglie citando fonte, versione e data | `specs/002-corso-irrinunciabile/` | 5h | Struttura e soglie sono citate con URL e data e passano da `unknown` a `measured`. Finché non lo sono, **nessuna riga di contenuto di O1 si scrive** | **alto** |
| T131 | T130 | O1 DoD 2 | Motore d'esame: sezioni, timer visibile, nessun ritorno a una sezione chiusa, punteggio per sezione contro la soglia ufficiale | `assets/js/cils.js` (nuovo) | 16h | Scaduto il tempo la sezione si chiude da sola e il punteggio è calcolato sulle sole risposte date; tornare indietro non è possibile | **alto** |
| T132 | T131 | O1 DoD 5,7 | Riuso dei builder esistenti per ascolto e lettura; scrittura valutata con `Writing.analyse` (`writing.js:68`) e presentata come elementi trovati e non trovati | `assets/js/cils.js` | 8h | Nessun tipo nuovo in `EX_TYPES`; la schermata della scrittura non mostra alcun voto né percentuale | medio |
| T133 | T131, T088 | O1 DoD 3,4 | Modulo orale **non valutato**: prompt, timer, registrazione via `recorder.js` di F6, risposta modello, griglia di autocontrollo. Riusa la schermata di consenso di T088 se la trascrizione è attiva | `assets/js/views-cils.js` (nuovo) | 10h | La frase di limite compare **prima** dell'inizio, non nel riepilogo; l'esito complessivo dichiara "tre prove su quattro" o il numero che T130 avrà stabilito | **alto** |
| T134 | T131 | O1 DoD 8 | Contenitore `cils{}` additivo in `defaultState()` e in `SHAPE`, incluso nell'export JSON. **Nessun bump**: `load()` lo riempie da sé (R1) | `assets/js/core.js` | 4h | Profilo salvato prima di F10: il contenitore compare vuoto, `schema` è ancora 2, nessuna migrazione è avvenuta | basso |
| T135 | T133 | O1 DoD 2 | Accessibilità: timer in regione live con annunci a intervalli e non a ogni secondo, cambio sezione annunciato | `assets/js/views-cils.js` | 4h | `a11y-gate` a 375 e 1280 px: 0 violazioni; il tempo residuo non viene riletto ogni secondo | medio |
| T136 | T130 | O1 DoD 6,7 | 2 simulazioni complete e distinte: testi, domande, consegne, risposte modello. Ritmo dichiarato: circa 25h a simulazione | `data/core/cils.js` (nuovo) | 50h (contenuto) | `V` verde; la seconda simulazione non riusa testi né domande della prima | **alto** |
| T137 | T136 | O1 DoD 9,10 | Registrazione degli enunciati d'ascolto, collector incluso se il campo è nuovo | `scripts/extract_strings.mjs` | 2h | Cancello un mp3 noto: `A` me lo riporta mancante. Delta audio annotato qui e sotto 3 MB | **alto** |
| T138 | T133 | O1 DoD 3,7 | 25 chiavi UI ×5, incluse le frasi di onestà **scritte per lingua** e non tradotte meccanicamente | `data/i18n/ui-*.js` | 5h | `P` esce 0; `I18n.missing()` vuoto sull'intero percorso d'esame nelle 5 lingue | medio |
| T140 | T134, T136 | - | `PRECACHE` e `SW_VERSION` per i tre file nuovi | `sw.js` | 0,5h | Rete spenta: il percorso d'esame si apre e le domande ci sono | medio |
| T139 | T131, T133, T136 | O1 DoD tutte | Test di fase: sezione scaduta, punteggio parziale, orale che non contribuisce all'esito | `tests/unit/cils.test.mjs`, `tests/dom/cils.spec.js` (nuovi) | 10h | `T` verde; una sezione lasciata scadere produce il punteggio parziale corretto e non blocca le successive | **alto** |

---

## Totali aggiornati dopo la riconciliazione

| Fase | Codice | Contenuto | Totale | Scostamento da `plan.md` 1.0 |
|---|---|---|---|---|
| F0 | 9h | - | **9h** | +1h (T007, SEC-2a) |
| F1 | 30,5h | 2h | **32,5h** | -6,5h (via `reviews[]`, via migrazione di massa, FSRS su un mazzo solo) |
| F2 | 41h | 4h | **45h** | invariata |
| F3 | 27h | 3h | **30h** | invariata |
| F4 | 28h | - | **28h** | +2h (T063, SEC-1) |
| F5 | 31h | 45h | **76h** | +1h (parity esteso invece di canale invisibile) |
| F6 | 49h | - | **49h** | +2h (T088, SEC-2b, netto del riuso in F10) |
| F7 | 38h | 22h | **60h** | invariata |
| F8 | 33h | 38h | **71h** | invariata |
| F9 | 8h | 100h | **108h** | invariata |
| F10 | 66h | 50h | **116h** | +4h (T140 e consenso in T133) |
| **Somma** | **360,5h** | **264h** | **624,5h** | +3,5h |

Con i buffer di `plan.md` § 7.1 (imprevisti +15%, volume del contenuto +10% sulle 264h) il
totale resta **744h ≈ 93 giorni**, cioè dentro il range dichiarato di 85-100 giorni: lo
scostamento è sotto l'1% e non richiede ri-stima.

Il rapporto non cambia: **264h su 624,5, il 42%, non è programmazione.**

## Conteggio dei sub-task

97 in totale: F0 7, F1 10, F2 10, F3 8, F4 8, F5 9, F6 9, F7 10, F8 9, F9 6, F10 11.
`T013` è rimosso e il numero non si riusa.

## Ordine di apertura delle fasi

F0 → F1 → F2 → F3 → F4 → F5 → F6 → F7 → F8 → F9 → F10.

Vincoli di dipendenza che l'ordine deve rispettare comunque, se si riordina: F2 prima di F3
(risolutore) e prima di F9 (gate di copertura sui testi nuovi); F6 prima di F10 (registratore
e schermata di consenso); T090 prima di T096; T130 prima di ogni riga di contenuto di F10;
T007 in F0 e non più tardi, perché corregge un'affermazione falsa già oggi.

Parallelizzabili con una seconda persona: F4, F5 e F8 fra loro e con F2-F3, a patto che
`index.html`, i cinque `ui-<lang>.js` e `sw.js` si tocchino a turni.
