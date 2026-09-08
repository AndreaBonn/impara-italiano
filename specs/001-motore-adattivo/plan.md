# 001 - Motore adattivo: piano di implementazione

Stato: proposto
Versione: 1.1
Data: 2026-09-09
Scope: 9 feature (P1-P9) su LinguAI "versione-statica"

Cambiato dalla 1.0, dopo l'ADR (`adr.md`) e la review di sicurezza:

- **niente bump di schema.** F0 cambia natura: da "migrazione v2 → v3" a "fondazione dello
  stato", additiva. Il bump resta riservato al cambio di significato di un campo esistente
  (§ 3.2). Motivo in ADR-002 e § 2: `load()` riempie da sé i campi nuovi, mentre bumpare
  romperebbe ogni JSON già esportato dagli utenti, in cambio di una migrazione senza lavoro
  da fare;
- **tre finding di sicurezza entrano come sub-task**, non come rischi: prototype pollution
  in `merge()` (raggiungibile dall'import), rendering del testo scritto dall'utente in P7,
  evidenziazione dei risultati di ricerca in P9;
- stima: 36-42 giorni (era 34-40). F0 passa da 9h a 15h, F4 e F8 crescono di 3h in totale.

---

## 0. Fatti misurati sul codebase (baseline)

Tutto quanto segue è stato letto o eseguito, non ricordato.

| Fatto | Valore | BASIS |
|---|---|---|
| Contenuto del corso | 32 unità, 150 lezioni (118 + 32 test), 1514 esercizi, 1410 voci di lessico, 10 conversazioni, 42 voci di grammatica | `measured` - output di `node scripts/validate.mjs` |
| Distribuzione tipi | fill 370, mcq 329, speak 150, listen 144, trans 122, cloze 120, match 82, order 72, conj 64, multi 27, dialogue 20, gender 14 | `measured` - stesso output |
| `truefalse` nei dati | 0 occorrenze (il tipo esiste nel motore e nel gate, non è usato) | `measured` - `grep -o 't: "truefalse"' data/core/*.js` |
| Audio | 2530 file mp3, 32 MB, media ~13 KB/file | `measured` - `find audio -name '*.mp3' \| wc -l`, `du -sh audio` |
| Dati | `data/core` 300 KB totali, `data/i18n/pl` 580 KB | `measured` - `du -ch` |
| Stringhe UI | 318 chiavi per lingua, 5 lingue | `measured` - conteggio su `data/i18n/ui-pl.js` |
| Righe per file | views.js 844, core.js 558, exercises.js 541, verbs.js 480, audio.js 326, app.js 281, i18n.js 252, app.css 694 | `measured` - `wc -l` |
| Punto unico di raccolta risposta | `assets/js/exercises.js:34` (`finish`) chiama `Core.recordAnswer(ok)` per tutti e 13 i tipi | `measured` - lettura del file |
| Dispatcher esercizi | `assets/js/exercises.js:517` (`build`), tabella `BUILDERS` a riga 509 | `measured` |
| Contatore da cui l'esito si perde | `assets/js/core.js:320` (`recordAnswer`) incrementa `stats.correct/wrong` e butta il resto | `measured` |
| Vocabolario di tag già esistente | `data/core/grammar-reference.js`, 42 id stabili con `cefr` | `measured` |
| Parità stringhe UI già presidiata | `scripts/parity.mjs` confronta chiavi e categorie plurali di `ui-<lang>.js` contro `ui-pl.js` | `measured` - lettura di `checkUI` |
| Estensibilità delle viste | `views.js:842` espone `global.Views`: un modulo caricato dopo può fare `Views.oggi = ...` senza toccare views.js | `measured` |
| Chiavi tradotte di un esercizio | `EX_KEYS = ["q","why","hint","tr","setting","opts"]` in `assets/js/i18n.js:81` | `measured` |
| Campi nuovi già assenti-tolleranti | `load()` (`core.js:51`) fa `merge(defaultState(), parsed)`: un campo presente in `defaultState()` e assente nel salvataggio si riempie da solo | `measured` - lettura di `core.js:49-60` e `:106` |
| Import rigido sullo schema | `importState` (`core.js:486`) lancia su qualunque `schema !== SCHEMA`: un bump invaliderebbe tutti i JSON già esportati | `measured` |
| Etichette di grammatica già tradotte | `ref:<id>` con `title`, `sub`, `body` presenti in tutte e 5 le nakładki, 42 voci ciascuna | `measured` - `grep -c '"ref:' data/i18n/{en,de}/grammar-reference.js` → 42 e 42 |
| Prototype pollution in `merge()` | Riproducibile: `merge({schema:2}, JSON.parse('{"schema":2,"__proto__":{"polluted":"yes"}}'))` lascia `({}).polluted === "yes"` | `measured` - eseguito su `node` con il corpo di `core.js:106-115` |
| Percorso di ingresso del difetto | `views.js:833` passa il file scelto dall'utente a `Core.importState`; il controllo di schema si supera scrivendo `"schema": 2` nel file | `measured` |
| Scrittura già protetta, ma senza potatura | `save()` (`core.js:97-104`) ha già `try/catch` con toast su `core.saveFailed`: quel che manca è la potatura e un avviso non effimero | `measured` |
| Pattern di escaping da copiare | `Views.coniugatore` (`views.js:610-655`) passa da `esc()` ogni valore prima di comporre l'HTML | `measured` |
| Campi pronunciati raccolti | `scripts/extract_strings.mjs:60-87`: solo `say`, `it`/`alt` di listen e speak, `lines[].it`/`choices` di dialogue, `vocab[].it`, `grammar.examples[].it`, `dialogue.lines[].it` | `measured` |

Conseguenza da tenere presente in tutto il piano: **nessun campo nuovo che deve essere
pronunciato viene registrato finché non si aggiunge il suo collector in
`extract_strings.mjs`**, e il fallimento è silenzioso (si scende alla sintesi di sistema,
cioè esattamente la voce meccanica che il progetto ha rifiutato).

---

## 1. Obiettivo

Trasformare LinguAI da corso lineare a sistema che si adatta: sa cosa lo studente sbaglia
(P1), sa generare esercizio su quel punto senza contenuto nuovo (P2, P3), sa comporre una
sessione breve (P4), sa da dove far partire (P5), e funziona anche senza rete (P8), senza
rompere nessuno dei vincoli che rendono il progetto quello che è (zero build, zero
dipendenze, `file://`, due strati di dati, audio registrato).

## 2. Approccio

Tre principi che governano ogni decisione a valle.

**Il tag grammaticale già esiste, va agganciato.** `grammar-reference.js` è il vocabolario
controllato: 42 id neutri rispetto alla lingua, con livello CEFR. Aggiungere `tags: ["g-..."]`
alle lezioni in `data/core/` costa zero stringhe nuove, perché l'etichetta leggibile è già
nella nakładka (`ref:g-presente` → `title`) in tutte e 5 le lingue. Questa è la ragione per
cui P1 è economico e per cui va per primo.

**Estensione additiva dello stato, nessun bump di schema** (ADR-002). P1 (carte errore),
P5 (piazzamento), P7 (bozze) e P4 (log sessione) vogliono ciascuna un contenitore nuovo. Non
serve migrarli: `load()` fa `merge(defaultState(), parsed)`, quindi un contenitore dichiarato
in `defaultState()` e assente in un salvataggio vecchio si riempie da solo. Bumpare a 3
costerebbe invece una regressione vera: `importState` rifiuta ogni `schema !== SCHEMA`, e
tutti i JSON già esportati dagli utenti diventerebbero illeggibili, in cambio di una
migrazione che non avrebbe alcun lavoro da fare oltre a cambiare il numero. Il bump v1 → v2
esisteva perché cambiava il **significato** di un campo (richiavatura delle flashcard sul
solo italiano); aggiungere campi non è un cambio di significato.

Questo però va reso politica, non rinvio: F0 costruisce anche la **scala di migrazioni**
in `importState` (accetta `schema <= SCHEMA` applicando in sequenza le migrazioni note,
rifiuta solo `schema > SCHEMA`), così il giorno in cui una feature cambierà davvero la
semantica di un campo il bump avrà dove appoggiarsi.

**Il codice sta in moduli nuovi, il contenuto in file di dati nuovi.** Tutti i file del
motore sfondano già il limite di 300 righe (views.js 844): nessuna feature nuova ci entra
dentro. `global.Views` è estendibile dall'esterno, quindi le viste nuove si registrano da
file propri e `views.js` non si tocca.

---

## 3. Qualify

### 3.1 Assunzioni

- **A1.** Lo sviluppatore è uno solo e lavora in seriale. Le fasi 4 e 5 (P8, P9) toccano
  file disgiunti dalle fasi 1-3 e possono essere parallelizzate da una seconda persona:
  i punti di collisione sono soltanto `index.html` (lista script) e i 5 `ui-<lang>.js`.
- **A2.** Le stringhe UI nelle 4 lingue non-polacche possono essere prodotte con traduzione
  assistita e revisione, perché sono etichette brevi. **Non vale per i contenuti
  contrastivi** (`{contrast}`, note "nella tua lingua è diverso" di P3): quelli si scrivono
  da zero per lingua, è la regola del progetto e la ragione d'essere del corso.
- **A2-bis.** Le etichette leggibili dei 42 argomenti grammaticali **non sono stringhe
  nuove**: `ref:<id>` esiste già con `title`, `sub` e `body` in tutte e 5 le nakładki. Il
  quaderno errori e i drill le riusano. Le ~126 chiavi stimate in § 5 già escludono queste
  ~210 stringhe (42 × 5): la stima non va corretta.
- **A3. SCIOLTA (confermata).** Il contenuto nuovo di P6 (testi graduati, domande) e P7
  (prompt, testi modello, paragrafi) viene scritto dentro questo progetto, con revisione
  dell'utente **prima** della registrazione audio. Le ~60 ore restano nel programma. Due
  conseguenze operative: il rilascio a 12 testi invece di 40 è uno **scaglionamento**, non
  una riduzione di scopo (il corpus pieno resta l'obiettivo, i primi 12 sono il primo
  taglio); e la revisione del testo italiano è un passo del piano, non un controllo
  implicito, perché dopo `build_audio.py` una correzione costa un mp3 nuovo e una riga in
  più nell'indice.
- **A4.** `it-IT-IsabellaNeural` e `it-IT-GiuseppeMultilingualNeural` restano disponibili
  via `build_audio.py` per registrare i nuovi enunciati di P3 e P6.
- **A5.** Il target di installabilità PWA è Chrome/Edge desktop e Android. iOS Safari
  riceve il service worker ma non l'installazione completa (nessun lavoro dedicato).
- **A6.** Nessun requisito di sincronizzazione fra dispositivi: lo stato resta in
  `localStorage`, l'unico trasporto è l'export/import JSON già presente.
- **A7.** Il budget di crescita del repository è fissato a **+12 MB di audio** su tutto il
  programma. Oltre quella soglia il piano si ferma e si ridiscute.
- **A8. SCIOLTA (runner completo, DOM incluso).** Si introduce una suite di test su due
  strati, e ogni fase costa il 25-30% in più sulle ore di ingegneria:
  - **`node:test`** (zero dipendenze, coerente con il progetto) per la logica pura:
    generatori di P2, scheduling SRS, `merge`, scala di migrazioni in `importState`,
    potatura su quota, hash dell'identità esercizio, hash audio, `checkOpen`;
  - **Playwright** (`@playwright/test` come dev dependency) per il DOM: contratto
    `onDone(ok)` chiamato esattamente una volta per ciascuno dei 13 tipi e per i generati,
    fuoco e navigazione da tastiera di P9, service worker di P8 (registrazione, cache-hit,
    rete spenta), barra accenti.

  Il caricamento dei sorgenti in `node:vm` non va inventato: è il pattern che
  `validate.mjs` e `parity.mjs` usano già per far girare gli script classici sotto Node.

### 3.2 Anchor incidentali (vincoli veri contro stato attuale rivedibile)

Vincoli veri, una soluzione che li viola si rifiuta a prescindere:

- funzionamento da `file://`, quindi niente moduli ES e niente `fetch()` per i dati;
- zero dipendenze runtime e zero build step;
- nessuna parola nella lingua dello studente dentro `data/core/`;
- chiave della flashcard = solo italiano;
- `onDone(ok)` chiamato esattamente una volta per esercizio;
- **il bump di `SCHEMA` è riservato al cambio di significato di un campo esistente.**
  Aggiungere contenitori non lo giustifica: `load()` li riempie da sé, e il bump romperebbe
  i file già esportati. Se durante F1-F8 una feature cambia la semantica di un campo già
  presente, allora si bumpa, e solo allora;
- **ogni testo scritto dallo studente si renderizza con `Core.esc()` o `textContent`.**
  I campi raw-HTML del corso (`theory[].p/.trap/.contrast/.tip`, `grammar.note`,
  `culture.text`, `ex.why`) lo sono per scelta di progetto e perché il contenuto arriva
  solo dai file del corso: nessuna feature nuova riusa quei campi né quel percorso di
  rendering per contenuto d'utente.

Anchor, cioè stato attuale che questo programma può legittimamente cambiare purché lo
dichiari (non sono vincoli):

- il limite di 300 righe per file, oggi violato da 4 file su 7 del motore: il piano lo
  rispetta sui file nuovi e non rifattorizza i vecchi (fuori scope, § Modifiche chirurgiche);
- **l'assenza di `package.json` e di qualunque toolchain.** Questo programma la introduce:
  `package.json` con `@playwright/test` come sola dev dependency, più gli script `test` e
  `test:dom`. Il vincolo "zero dipendenze" resta **intatto a runtime**: l'app continua a
  caricarsi senza niente, anche da `file://`, e nessun file di `assets/js/` o `data/`
  importa alcunché. Cambia solo il modo in cui si sviluppa. `node_modules/` è già in
  `.gitignore`;
- il rail a 8 voci: questo programma ne aggiunge 2;
- l'assenza di CSP in `index.html`: è hardening, non un finding, e resta fuori scope salvo
  richiesta esplicita (una `Content-Security-Policy` via `<meta>` sarebbe compatibile con
  `file://` e con lo zero-build, ma va valutata contro i font Google già caricati);
- 13 tipi di esercizio: ne viene aggiunto 1 (`minpair`), e solo quello.

### 3.3 Definition of Done per feature

Ogni voce è osservabile. Dove serve, il Given/When/Then porta valori reali.

#### P1 - Quaderno degli errori + SRS grammaticale

- [ ] Ogni lezione in `data/core/` ha `tags: [...]` con almeno un id, e ogni id esiste in
      `GRAMMAR_REF`. `node scripts/validate.mjs` esce 1 se manca un tag o se un id è ignoto.
- [ ] Sbagliando un esercizio, in `Core.state.errors` compare una carta con `key`, `kind`,
      `tag`, `lessonId`, `due` entro 10 minuti; dopo un reload della pagina la carta c'è
      ancora.
- [ ] Il campo `kind` è dichiarato in F1 e distingue fin da subito `"authored"` (item
      d'autore, tag di lezione, chiave = hash del contenuto) da `"generated"` (item di
      P2, tag del generatore, chiave = `generatorId` più il seme). Le due specie hanno
      granularità di scheduling diversa e la carta deve dirlo prima che P2 esista: se il
      campo arriva in F2 va migrato ciò che F1 ha già scritto.
- [ ] Nessun bump di `SCHEMA`: un profilo salvato prima di F1 apre F1 senza migrazione e
      con `errors` vuoto.
- [ ] Lo stesso esercizio sbagliato due volte nella stessa sessione produce **una** voce
      con `lapses: 2`, non due voci.
- [ ] Una carta risposta correttamente due volte di seguito ha `due` a più di 3 giorni.
- [ ] Cambiando lingua di spiegazione da `pl` a `de` senza ricaricare, il numero di carte
      errore non cambia e l'etichetta del tag si legge in tedesco.
- [ ] `stats.correct + stats.wrong` cresce esattamente di 1 per ogni risposta data (nessun
      doppio conteggio introdotto dal gancio).
- [ ] Inserendo un esercizio nuovo a metà di una lezione già usata, le carte esistenti
      restano agganciate all'esercizio originale e non a quello che ha preso il loro indice.
- [ ] Con `localStorage` pieno o disabilitato, la lezione si completa lo stesso: il
      fallimento di registrazione non blocca `onDone`.
- [ ] Given uno studente con lingua `es` che sbaglia il `cloze` sulla concordanza in
      `a1-u02-l3`, When apre Ripasso e la scheda Errori entro 10 minuti, Then vede
      l'esercizio originale ri-renderizzato, l'etichetta del tag in spagnolo e il link
      alla lezione di origine.
- [ ] Stato vuoto della scheda Errori: titolo, spiegazione e CTA verso il percorso, mai
      una lista bianca.

#### P2 - Drill generativi

- [ ] Sette generatori disponibili: preposizioni articolate, accordo genere/numero,
      ausiliare, pronomi (diretti, indiretti, `ne`, `ci`), numeri, date, ore.
- [ ] Ogni generatore, chiamato con lo stesso seed, produce lo stesso item (deterministico,
      come `Core.seededShuffle`); con seed diversi produce item diversi per almeno 200
      chiamate consecutive senza ripetizioni esatte.
- [ ] Gli item generati passano per `Ex.build` e usano solo tipi già esistenti: nessuna
      voce nuova in `EX_TYPES`.
- [ ] Nessun item generato imposta `say`, `it` di `listen`/`speak` o altri campi
      pronunciati: `uv run --script scripts/build_audio.py --dry-run` dopo P2 riporta 0
      file mancanti.
- [ ] Sbagliando un drill si crea una carta errore con il tag del generatore (P1 riceve i
      fallimenti dei drill, non solo quelli delle lezioni).
- [ ] Given "preposizioni articolate" con seed `2026-09-09`, When si risolvono 10 item,
      Then la soluzione di ognuno è verificabile a mano contro la tabella
      (di+il=del, a+lo=allo, in+i=nei, su+le=sulle, da+l'=dall').
- [ ] Nessuna parola nella lingua dello studente nei generatori: i prompt passano da
      `I18n.t()`, il contenuto generato è italiano.

#### P3 - Coppie minime e prosodia

- [ ] Tipo `minpair` registrato in `BUILDERS`, in `EX_TYPES` di `validate.mjs` e coperto da
      una regola di validazione (esattamente 2 opzioni, `a` numerico, `say` presente).
- [ ] Le opzioni di `minpair` restano in `data/core/` (sono forme italiane chiuse, stesso
      trattamento di `gender.opts`) e non compaiono in nessuna nakładka.
- [ ] Sei famiglie coperte: doppie, `e` aperta/chiusa, `o` aperta/chiusa, posizione
      dell'accento, `gli`/`gn`, `sc`.
- [ ] Ogni parola delle coppie ha il suo mp3: `build_audio.py --dry-run` riporta 0 mancanti
      dopo il build, e `Audio2.hasNatural(parola)` è vero per ognuna.
- [ ] La nota contrastiva è scritta per lingua, non tradotta: la nota polacca parla di
      consonanti geminate assenti in polacco, quella tedesca no.
- [ ] Le parole delle coppie sono state riviste e approvate dall'utente **prima** del
      lancio di `build_audio.py`, per la stessa ragione di P6.
- [ ] Fase di discriminazione prima, produzione dopo: la sezione produzione (`speak`) si
      sblocca solo dopo aver chiuso la discriminazione della stessa famiglia.
- [ ] Delta audio del repository dichiarato e sotto i 4 MB per questa feature.

#### P4 - Sessione del giorno

- [ ] Un solo bottone compone una sessione con: carte SRS scadute (max 8), carte errore
      scadute (max 6), un drill sul tag più fallito (3 item), il segmento successivo del
      percorso.
- [ ] Se non c'è nulla di scaduto, la sessione si compone lo stesso con drill e percorso e
      lo dichiara ("niente da ripassare oggi"), mai una schermata vuota.
- [ ] La barra di avanzamento arriva a 100% e la sessione si chiude con un riepilogo che
      distingue le tre fonti.
- [ ] Durata reale misurata su una sessione piena fra 8 e 13 minuti (cronometrata a mano
      una volta, con il risultato annotato nel task).
- [ ] Chiudere la pagina a metà sessione e riaprirla non perde i progressi già registrati
      (ogni risposta è già persistita quando arriva).

#### P5 - Test di piazzamento adattivo

- [ ] Massimo 20 item, ricerca binaria sui 6 livelli, con arresto anticipato quando due
      livelli adiacenti sono decisi.
- [ ] Al termine propone un livello e la lista delle lezioni che marcherebbe come
      acquisite, con conferma esplicita dello studente prima di scrivere.
- [ ] Le lezioni marcate portano `via: "placement"` e **non** contribuiscono a
      `stats.lessonsDone` né a `xp`: dopo il piazzamento l'XP è invariato.
- [ ] Esiste "annulla piazzamento" che rimuove tutte e sole le lezioni marcate così.
- [ ] Il test è ripetibile e non consuma stato: rifarlo da capo non lascia carte errore né
      altera le statistiche di risposta.
- [ ] Given un profilo vuoto che risponde correttamente a tutti gli item A1-A2 e sbaglia
      quelli B1, When il test finisce, Then propone A2 completato e B1 come punto di
      partenza.
- [ ] Il caricamento dei livelli necessari avviene su richiesta e mostra uno stato di
      attesa, non una schermata bianca.

#### P6 - Comprensione estesa

- [ ] Almeno 12 testi graduati (A2→C1) con 5 domande ciascuno: è il **primo taglio di uno
      scaglionamento**, non una riduzione di scopo. Il corpus pieno resta 40 testi ed è
      l'obiettivo confermato (A3).
- [ ] **Il testo italiano è stato riletto e approvato dall'utente prima di lanciare
      `build_audio.py`.** Dopo la registrazione una correzione costa un mp3 nuovo, una riga
      in più in `audio-index.js` e un file orfano da rimuovere a mano: la revisione va
      prima della generazione, mai dopo.
- [ ] **Le note contrastive e le consegne si riscrivono per lingua, non si traducono dal
      polacco.** È il punto in cui il contenuto prodotto in serie degrada senza che nessun
      gate se ne accorga: `parity.mjs` verifica il kształt, non il senso. Verifica: la nota
      per l'inglese non nomina categorie che l'inglese non ha, e la nota tedesca non ripete
      l'osservazione scritta per il polacco.
- [ ] Ogni testo ha il suo audio integrale e i suoi enunciati per il dettato registrati:
      `build_audio.py --dry-run` riporta 0 mancanti.
- [ ] `extract_strings.mjs` raccoglie i campi nuovi: rimuovendo un mp3 e rilanciando il
      dry-run, quel file risulta mancante (prova che il collector lo vede davvero).
- [ ] Il player dell'ascolto lungo permette il replay del singolo enunciato nel dettato,
      senza ricaricare il file intero.
- [ ] Il dettato usa `listen` esistente e `Core.checkOpen`: nessun tipo nuovo.
- [ ] Il testo italiano vive in `data/core/readings.js`; domande, opzioni e consegne nelle
      nakładki; nessuna parola non italiana in core (grep sul set diacritico).
- [ ] Delta audio dichiarato e sotto gli 8 MB.

#### P7 - Produzione scritta senza backend

- [ ] Ogni prompt dichiara i costrutti richiesti; il correttore ne rileva automaticamente
      almeno tre categorie: presenza di forme di un verbo bersaglio (via `Verbs.conjugate`
      su tutte le forme del tempo richiesto), presenza di connettivi da lista chiusa,
      lunghezza minima in parole.
- [ ] Given il prompt "racconta il tuo weekend" con costrutto richiesto "passato prossimo
      di `andare`", When lo studente scrive "sono andato al mare", Then il costrutto risulta
      rilevato; When scrive "vado al mare", Then risulta non rilevato.
- [ ] Ciò che il correttore non sa misurare è dichiarato come autovalutazione e mostrato
      come tale, mai spacciato per punteggio automatico.
- [ ] Il testo modello si rivela solo dopo l'invio della propria versione.
- [ ] La traduzione inversa è controllata enunciato per enunciato con `Core.checkOpen` e
      varianti `alt` d'autore; un enunciato con un accento diverso passa quando
      `strictAccents` è falso e non passa quando è vero.
- [ ] Le bozze sopravvivono al reload e sono incluse nell'export JSON.
- [ ] Se `localStorage` rifiuta la scrittura, lo studente vede un avviso prima di perdere
      il testo, non dopo.
- [ ] **Il testo scritto dallo studente si renderizza solo via `Core.esc()` o
      `textContent`, mai `innerHTML`.** P7 non riusa i campi raw-HTML del corso
      (`theory[].p/.trap/.contrast/.tip`, `grammar.note`, `culture.text`, `ex.why`) né il
      loro percorso di rendering. Verifica: un export che contiene
      `<img src=x onerror=alert(1)>` dentro una composizione, importato da una seconda
      persona (`views.js:833`), mostra il testo letterale e non esegue nulla.

#### P8 - PWA offline reale

- [ ] `manifest.webmanifest` valido con icone 192, 512 e maskable; Lighthouse riporta
      l'app installabile.
- [ ] Al primo caricamento online il service worker mette in precache guscio + tutti i
      `data/core/` + le nakładki della lingua corrente; a rete spenta l'app si apre e ogni
      livello è navigabile.
- [ ] L'audio non è in precache: si mette in cache quando viene riprodotto, oppure in blocco
      con "scarica l'audio di questo livello".
- [ ] Impostazioni mostra lo spazio occupato (`navigator.storage.estimate()`) e permette di
      svuotare la sola cache audio.
- [ ] Aprendo `index.html` da `file://` la registrazione del service worker viene saltata
      senza errori in console e l'app funziona come oggi.
- [ ] Pubblicata una versione nuova, lo studente riceve un avviso di aggiornamento e dopo
      il reload esegue il codice nuovo: nessun blocco su un guscio vecchio.
- [ ] `node scripts/check-sw.mjs` esce 1 se un file referenziato da `index.html` o un file
      di `data/core/` non è nella lista di precache.

#### P9 - Attriti minori

- [ ] La barra accenti compare sotto ogni campo di risposta in italiano, inserisce il
      carattere nel punto del cursore e **non** toglie il fuoco al campo.
- [ ] La barra è raggiungibile da tastiera e ogni bottone ha un nome accessibile;
      `a11y-gate` sulle viste nuove riporta 0 violazioni, come le 6 viste attuali.
- [ ] La ricerca globale trova per titolo di lezione (lingua corrente), per parola italiana
      del lessico e per voce di grammatica, anche su livelli non ancora caricati, mostrando
      uno stato di attesa durante il caricamento.
- [ ] Ricerca vuota e ricerca senza risultati sono due stati distinti, entrambi con testo.
- [ ] **L'evidenziazione del termine cercato passa da `esc()` su ogni valore prima di
      comporre l'HTML**, sul modello di `Views.coniugatore` (`views.js:610-655`), mai con
      una `String.replace` su HTML già composto: quella reintrodurrebbe il termine
      dell'utente non filtrato dentro il markup. Verifica: cercare
      `<img src=x onerror=alert(1)>` mostra la stringa letterale nel campo e nei risultati.
- [ ] Scorciatoie negli esercizi: `1-9` seleziona l'opzione, `Invio` verifica e poi passa
      al successivo, `P` ripete l'audio. Nessuna scorciatoia scatta mentre il fuoco è in un
      campo di testo, tranne `Invio`.
- [ ] Esiste un pannello che elenca le scorciatoie, raggiungibile da `?`.

### 3.4 Disambiguazione

Le opzioni sono state elencate tutte prima di valutarle, poi valutate.

---

**D1 - P1: granularità del tagging grammaticale**

Opzioni: per esercizio (1514) · per lezione (150) · per unità (32) · nessun tag, solo id
lezione.

- **A. Per esercizio.** Precisione massima. Costo: 1514 modifiche in 9 file di dati, e
  nessun gate può verificarne la correttezza (solo l'esistenza dell'id). Il drill di P2 non
  consuma questa precisione: gli basta sapere il tag.
- **B. Per lezione, con override sul singolo esercizio.** 150 modifiche in `data/core/`.
  La lezione nel corso è già costruita attorno a **un** punto grammaticale (ha un unico
  blocco `grammar`), quindi il tag di lezione è l'informazione reale, non un'approssimazione.
  L'override `tag:` sul singolo esercizio assorbe le eccezioni (uno `speak` dentro una
  lezione di grammatica è in realtà pronuncia) e costa zero finché non serve.
- **C. Per unità.** 32 modifiche. Un'unità copre 4-5 lezioni e 3-4 punti grammaticali
  distinti: il drill riceverebbe un bersaglio sbagliato una volta su tre.
- **D. Nessun tag.** Zero costo, ma la carta errore può solo dire "rifai questo esercizio";
  niente aggregazione per argomento, niente instradamento dei drill, niente "sbagli sempre
  le preposizioni". È la feature svuotata.

**Raccomandata: B.** È il livello a cui il contenuto è realmente organizzato, è verificabile
da un gate (ogni lezione ha almeno un tag valido), e costa un decimo di A per una precisione
che i consumatori a valle non distinguono.

---

**D2 - P1: identità della carta errore**

Opzioni: indice posizionale · id stabile scritto a mano su ogni esercizio · hash del
contenuto neutro.

- **A. `lessonId#indice`.** Zero costo oggi. Inserire un esercizio a metà lezione sposta
  tutti gli indici successivi e le carte esistenti puntano all'esercizio sbagliato. Il corso
  è ancora in crescita, quindi succederà.
- **B. `eid` esplicito su ogni esercizio.** Stabile, ma sono 1514 modifiche, cioè il costo
  che D1 ha appena evitato.
- **C. Hash FNV-1a dei soli campi core dell'esercizio** (`t` più il campo di risposta:
  `it`, `a`, `text`, `tokens`). Stabile rispetto al riordino, zero modifiche ai dati, e usa
  l'idioma già presente nel progetto (`hashText` in `audio.js:75`, `seededShuffle` in
  `core.js:520` usano entrambi FNV). Vincolo: **solo campi core**, altrimenti cambiare
  lingua cambierebbe la chiave e orfanerebbe il quaderno, esattamente il difetto che la
  migrazione v1→v2 ha già corretto per le flashcard.

**Raccomandata: C**, con gate che ricalcola tutti gli hash e fallisce su collisione, e con
la carta che porta `lessonId` come localizzatore secondario. Le carte non risolvibili si
scartano alla lettura invece di renderizzare un esercizio sbagliato.

---

**D3 - P6: quanto audio nuovo**

Opzioni: nessun audio nuovo · ricomposizione da enunciati esistenti · audio a livello di
paragrafo · audio a livello di enunciato.

- **A. Solo testo.** Zero MB. Ma "ascolto lungo" e "dettato" sono metà della feature: resta
  solo la lettura.
- **B. Testi composti da enunciati già registrati**, riprodotti in sequenza con
  `speakSequence`. Zero MB, ma i testi risultano artificiali: si scrive per riusare, non per
  insegnare.
- **C. Un mp3 per testo.** Un testo da 60 secondi pesa circa 190 KB al bitrate attuale
  (`inferred` da 32 MB / 2530 file su enunciati di ~4 s: ~26 kbps). 40 testi ≈ 7,6 MB. Ma
  il dettato ha bisogno di riascoltare **il singolo enunciato**, e da un mp3 unico non si
  ottiene senza offset a mano.
- **D. Un mp3 per enunciato** anche nel testo lungo, riprodotti in sequenza. Il replay per
  enunciato è gratis, il costo in byte è simile, ma la lettura continua acquista micro-pause
  fra i file.

**Raccomandata: C per l'ascolto lungo, D per gli enunciati del dettato**, con budget
dichiarato di 8 MB e rilascio minimo a 12 testi invece di 40. Il timore che P6 raddoppi i
32 MB non regge ai numeri: la stima è +25%.

---

**D4 - P7: come si valuta senza backend**

Opzioni: autovalutazione a checklist · rilevazione meccanica dei costrutti · traduzione
inversa controllata · combinazione.

- **A. Solo checklist + testo modello.** Onesto e a costo zero di logica, ma non produce
  alcun segnale: P1 e P4 non ricevono niente e la feature diventa decorativa.
- **B. Rilevazione meccanica dei costrutti richiesti.** Il prompt dichiara "passato
  prossimo di `andare`", il correttore genera tutte le forme con `Verbs.conjugate` e le
  cerca nel testo. Oggettivo, usa il motore che c'è già, funziona offline. Falsi negativi
  possibili (sinonimi, perifrasi), da mitigare presentandolo come "elementi trovati", non
  come voto.
- **C. Traduzione inversa enunciato per enunciato** con `Core.checkOpen` e varianti
  `alt` d'autore: oggettiva, ma richiede che l'autore preveda le varianti accettabili.
- **D. B per la composizione libera, C per la traduzione inversa, A a copertura di ciò che
  nessuna delle due misura** (registro, coerenza, ricchezza).

**Raccomandata: D.** È l'unica che restituisce un segnale utilizzabile a monte senza
promettere una correzione che il progetto non può fare.

---

**D5 - P8: strategia di cache**

Opzioni: solo guscio · guscio + dati · guscio + dati + audio a richiesta · tutto.

- **A. Solo guscio** (~1,2 MB). L'app si apre offline ma senza corso: promessa mancata.
- **B. Guscio + tutti i `data/core/` (300 KB) + la nakładka della lingua corrente
  (580 KB).** Sotto 1 MB in un colpo, corso intero navigabile offline, nessun audio.
- **C. B più cache a runtime dell'audio riprodotto**, con azione esplicita "scarica l'audio
  di questo livello" e svuotamento dalle impostazioni.
- **D. Precache di tutto, 32 MB inclusi.** Inaccettabile all'installazione.

**Raccomandata: C.** Con una precisazione che è il vero rischio della feature: **niente
cache-first sul guscio**. Senza build step i file non hanno hash nel nome, quindi un
`index.html` o un `core.js` serviti dalla cache prima della rete inchiodano lo studente su
una versione vecchia per sempre. Il guscio va network-first con fallback alla cache; solo
`audio/**` è cache-first.

---

**D6 - P5: da dove vengono gli item del piazzamento**

- **A. Campionati dagli esercizi dei test di unità già esistenti** (`u.test`), che sono già
  gli item di valutazione del corso, pesati per livello e ristretti a `mcq`/`fill`/`cloze`.
  Zero contenuto nuovo, zero nakładka nuova.
- **B. Banca dedicata** `data/core/placement.js` con ~60 item calibrati: qualità migliore,
  ma è contenuto nuovo in 5 lingue.
- **C. Item generati da P2**: infiniti e gratuiti, ma coprono solo la grammatica che i
  generatori conoscono, quindi non discriminano B2 da C1.

**Raccomandata: A**, con B come ripiego se la qualità discriminante si rivela insufficiente.
Effetto collaterale accettato: lo studente "brucia" alcuni item dei test di unità, cosa che
accade una volta sola nella vita del profilo.

---

**D7 - P9: come si costruisce l'indice di ricerca**

- **A. Caricamento di tutti i livelli al primo uso della ricerca** (300 KB core + 580 KB
  nakładka, già in memoria in parte), indice costruito in RAM. Non può divergere dai dati.
- **B. Indice pre-costruito** `data/search-index-<lang>.js`: cinque file da mantenere, che
  divergono dai dati alla prima lezione aggiunta e senza gate se ne accorge nessuno.

**Raccomandata: A.** I dati sono piccoli, e B introduce una seconda fonte di verità in un
progetto costruito sul principio opposto.

---

## 4. Fasi

Ogni fase lascia l'app funzionante e committabile. L'ordine è per dipendenza reale, non per
numero P.

| Fase | Contenuto | Dipende da | Perché qui |
|---|---|---|---|
| **FT** | Toolchain di test (`package.json`, `node:test`, Playwright) e **rete di sicurezza sul comportamento attuale** di `merge`, `importState`, `save`, `load` e del contratto `onDone` | - | Prima di F0, non dopo. F0 modifica le tre funzioni da cui dipendono i progressi di chi già usa l'app: senza il rosso prima del verde su quelle, la fondazione dello stato si verifica solo a mano, su uno stato che non hai |
| **F0** | Fondazione dello stato: contenitori additivi, scala di migrazioni in `importState`, potatura con avviso, fix del prototype pollution in `merge()`, validazione della forma all'import | - | Fondazionale. Nessun bump: rende lo stato estendibile senza rompere gli export esistenti, e chiude un difetto pre-esistente sul percorso di import |
| **F1** | **P1** quaderno errori + tagging | F0 | Fondazionale: è il pozzo in cui P2 e P4 scaricano |
| **F2** | **P2** drill generativi | F1 | Genera i fallimenti che F1 sa raccogliere |
| **F3** | **P4** sessione del giorno | F1, F2 | Chiude il ciclo: è il primo momento in cui il sistema sembra un sistema |
| **F4** | **P8** PWA + **P9** attriti | F0 | Indipendenti da tutto il resto, ottimo rapporto valore/costo, zero contenuto |
| **F5** | **P3** coppie minime | F0 | Prima feature che fa crescere l'audio; tipo `minpair` nuovo |
| **F6** | **P5** piazzamento | F0 | Indipendente. Anticipabile a F4 se la priorità è l'onboarding |
| **F7** | **P6** comprensione estesa | F0 | La più costosa: quasi tutto contenuto |
| **F8** | **P7** produzione scritta | F0 | Ultima: valore alto, ma dipende da contenuto d'autore |

Parallelizzabili con una seconda persona: F4 con F1-F3 (file disgiunti), F5 con F2.
Non parallelizzabili: FT con niente, F0 con niente, F1 con F2.

Fondazionali: **FT, F0 e F1**. Tutto il resto potrebbe uscire in qualunque ordine.

Esecuzione: **di fila su tutte le fasi, revisione umana alla fine** (§ 7.5). Ogni fase
chiude comunque con i propri gate verdi e con un commit proprio, perché la revisione finale
deve poter tornare indietro di una fase sola.

## 5. Matrice di impatto per feature

| Feature | Bump schema | Struttura nuova nello stato | Stringhe UI nuove (per lingua) | Audio nuovo | Tipo esercizio nuovo | Rotta nuova | Voce nel rail |
|---|---|---|---|---|---|---|---|
| P1 | **no** | `errors{}` (additiva, F0) | ~18 | no | no | no (scheda dentro `ripasso`) | no |
| P2 | **no** | `drills{}` (additiva, F0) | ~16 | no | no | `allenamento` | sì (hub) |
| P3 | **no** | - | ~12 | **sì, ~240 file, <4 MB** | **sì, `minpair`** | no (scheda dell'hub) | no |
| P4 | **no** | `session{}` (additiva, F0) | ~10 | no | no | `oggi` | sì |
| P5 | **no** | `placement{}` (additiva, F0) | ~14 | no | no | `piazzamento` | no (accesso da percorso e impostazioni) |
| P6 | **no** | - | ~14 | **sì, ~150 file, <8 MB** | no (riusa `listen`, `mcq`) | no (scheda dell'hub) | no |
| P7 | **no** | `writing{}` (additiva, F0) | ~20 | no | no | no (scheda dell'hub) | no |
| P8 | **no** | - | ~10 | no | no | no | no |
| P9 | **no** | - | ~12 | no | no | `cerca` | no (campo nel rail head) |
| **Totale** | **nessun bump** | **5 contenitori, tutti in F0** | **~126 chiavi × 5 lingue = 630 valori** | **~390 file, <12 MB** | **1** | **4** | **2** |

Le ~126 chiavi **non** includono le etichette dei 42 argomenti grammaticali: quelle esistono
già tradotte come `ref:<id>` in tutte e 5 le nakładki e vengono riusate (assunzione A2-bis).
Sono ~210 stringhe che il quaderno errori e i drill non pagano.

Le 126 chiavi nuove su 318 esistenti sono un aumento del 40% del dizionario UI. È il costo
dominante del programma dopo il contenuto, e va gestito con il gate, non a fine lavoro:
`parity.mjs` fallisce alla prima nakładka incompleta, quindi ogni fase si chiude solo con
le 5 lingue scritte.

## 6. Moduli nuovi e punto di inserimento

`index.html` ha oggi la catena rigida righe 62-87. I moduli nuovi si inseriscono così
(le viste devono venire dopo `views.js`, che definisce `global.Views`; i motori prima):

```
data/audio-index.js
assets/js/core.js
assets/js/i18n.js
assets/js/audio.js
assets/js/verbs.js
assets/js/exercises.js
assets/js/errors.js          <- NUOVO (F1) dopo exercises.js: usa Ex e Core
assets/js/drills-lex.js      <- NUOVO (F2) lessico chiuso italiano
assets/js/drills.js          <- NUOVO (F2) generatori, usa drills-lex e verbs
assets/js/placement.js       <- NUOVO (F6)
assets/js/reading.js         <- NUOVO (F7)
assets/js/writing.js         <- NUOVO (F8)
assets/js/views.js
assets/js/views-train.js     <- NUOVO (F1/F2/F3) schede errori, hub allenamento, oggi
assets/js/views-extra.js     <- NUOVO (F6/F7/F8) piazzamento, lettura, scrittura
assets/js/search.js          <- NUOVO (F4) ricerca globale + vista
assets/js/keys.js            <- NUOVO (F4) barra accenti + scorciatoie
data/i18n/ui-*.js  ×5
data/core/curriculum-index.js
data/core/grammar-reference.js
data/core/conversations.js
data/core/phonetics.js       <- NUOVO (F5)
data/core/readings.js        <- NUOVO (F7)
data/core/writing.js         <- NUOVO (F8)
assets/js/app.js
```

Fuori dalla catena: `sw.js` e `manifest.webmanifest` a root (lo scope del service worker
richiede la root), `assets/icons/`, `scripts/check-sw.mjs`, `scripts/check-migration.mjs`.

Vincolo di dimensione: ogni modulo nuovo sta sotto 300 righe. Dove la stima supera
(views-train, drills), il piano prevede già lo split (`drills-lex.js` separato,
`views-extra.js` separato).

## 7. Sub-task, stime e verifiche

Le stime sono per uno sviluppatore senior già dentro questo codebase. 1 giorno = 8 ore.
La scomposizione riga per riga con dipendenze e `verify` sta in `tasks.md`; qui i totali e
la logica.

| Fase | Contenuto | Base | Di cui contenuto d'autore | Test (+25-30% sulle sole ore di ingegneria) | Totale fase |
|---|---|---|---|---|---|
| **FT** | Toolchain di test e rete di sicurezza sul comportamento attuale | 22h | - | inclusa | **22h** |
| F0 | Fondazione dello stato (additiva) + 3 sub-task di sicurezza | 15h | - | +4-5h | 19-20h |
| F1 | P1 | 27-29h | 6-8h | +5-6h | 32-35h |
| F2 | P2 | 29h | 4h | +6-8h | 35-37h |
| F3 | P4 | 9h | - | +2-3h | 11-12h |
| F4 | P8 + P9 | 42h | - | +11-13h | 53-55h |
| F5 | P3 | 25h | 10h | +4-5h | 29-30h |
| F6 | P5 | 20h | - | +5-6h | 25-26h |
| F7 | P6 | 40-48h | 20-28h | +5-6h | 45-54h |
| F8 | P7 | 37h | 14h | +6-7h | 43-44h |
| **Somma** | | **266-276h** | **~58-64h** | **+47-57h** | **313-333h** |
| Buffer imprevisti +15% | | | | | +47-50h |
| Buffer contenuto a volume incerto (P6, P7) +10% | | | | | +31-33h |
| **Totale** | | | | | **391-416h ≈ 49-52 giorni** |

Range onesto: **47-54 giorni lavorativi** per una persona sola.

Nota di metodo sulla riga "Test": l'aumento del 25-30% si applica alle sole ore di
ingegneria, non alle ~60 ore di scrittura di contenuti. Scrivere un testo graduato non
diventa più caro perché esiste un runner: applicare la percentuale al totale gonfierebbe
la stima di circa 18h senza corrispettivo.

Scostamento dalla 1.0 (34-40 giorni): **+13 giorni, cioè oltre il 20%, quindi versione 2.0
e non 1.1.** Le due cause, entrambe decisioni prese a monte e non errori di stima:

- lo scioglimento di A8 verso l'opzione più ampia (runner sulla logica pura più test di
  componente sul DOM) porta la fase FT nuova, 22h, più il 25-30% su ogni fase: **+69-79h**;
- la revisione di sicurezza e la scala di migrazioni in `importState`: **+9h** in F0, meno
  le 3h della migrazione v2 → v3 che non si fa più; più 3h di verifica dei vincoli di
  rendering fra F4 e F8.

Il contenuto di P6 e P7 resta dentro il programma (A3 sciolta e confermata): non è questa
la causa dell'aumento.

Fuori scala? No: sono 9 feature su codebase matura, di cui tre a forte componente
editoriale. Se il contenuto di P6 e P7 arriva già scritto, il totale scende a circa
**26-28 giorni**. Se si taglia P6 al rilascio minimo (12 testi invece di 40), scende di
altri 3 giorni.

### Correzione alla 1.0 sui totali MoSCoW

I subtotali MoSCoW della 1.0 (13 e 24 giorni) erano sbagliati in eccesso: sommavano male le
fasi. I valori corretti sono in § 7.4.

### Prioritizzazione MoSCoW, se il budget non copre tutto

- **Must**: FT, F0, F1 (P1), F4-P8. Il quaderno degli errori è la feature che cambia la
  natura del prodotto; la PWA è la promessa già scritta nel README e oggi non mantenuta.
- **Should**: F2 (P2), F3 (P4), F4-P9. Completano il ciclo adattivo.
- **Could**: F5 (P3), F6 (P5).
- **Won't (questa release)**: F7 (P6), F8 (P7). Sono metà del budget e sono le due che
  dipendono da lavoro editoriale.

### 7.4 Subtotali MoSCoW

| Livello | Ore con buffer | Giorni |
|---|---|---|
| Solo Must (FT, F0, P1, P8) | ~116h | 14-15 |
| Must + Should | ~201h | 25 |
| Tutto | 391-416h | 47-54 |

L'utente ha scelto **tutto**, in esecuzione di fila (§ 7.5).

### 7.5 Modalità di esecuzione: di fila, revisione umana alla fine

Scelta dell'utente: si implementano tutte le fasi in sequenza e la revisione umana avviene
alla fine, non fase per fase. Il rischio è stato segnalato e accettato: un fraintendimento
su P1 si propaga a P2 e a P4 prima che qualcuno lo veda, e il costo di correggerlo cresce
con le fasi che ci si sono appoggiate sopra.

Non cambia il piano, cambia ciò che il piano deve garantire da solo:

- **ogni fase chiude comunque con i propri gate verdi e con un commit proprio.** La
  revisione finale deve poter tornare indietro di **una fase sola**, non del programma:
  un commit unico da 50 giorni renderebbe il rollback impossibile e la revisione inutile;
- i punti in cui il piano assume qualcosa sul **comportamento desiderato**, e non su un
  fatto verificabile nel codice, sono raccolti in § 7.6 in un elenco unico. La revisione
  finale guarda lì invece di rileggere 50 giorni di diff.

### 7.6 Da confermare alla revisione finale

Sono scelte di prodotto, non fatti scopribili: il piano ha preso un default ragionevole per
non fermarsi, e quel default va confermato o corretto. Ognuna è isolata in un punto solo
del codice, così cambiarla costa minuti.

| # | Punto | Default assunto dal piano | Dove si cambia |
|---|---|---|---|
| C1 | Soglia di ripetizione del quaderno errori: quando una carta è "imparata" e smette di tornare | Uscita dopo 2 risposte giuste consecutive, primo intervallo a 3 giorni (SM-2 come le flashcard) | `assets/js/errors.js`, funzione di scheduling |
| C2 | Composizione della sessione del giorno | 8 carte SRS + 6 carte errore + 3 drill + 1 segmento di percorso, target 8-13 minuti | `assets/js/views-train.js`, compositore (T050) |
| C3 | Scala di valutazione di P7: cosa vede lo studente come esito | Elenco di "elementi trovati" e "elementi non trovati", nessun voto né percentuale | `assets/js/writing.js` (T121) |
| C4 | Punto di taglio del piazzamento: quanto in basso si ferma la ricerca binaria e quante lezioni marca | Si ferma quando due livelli adiacenti sono decisi, marca tutte le lezioni dei livelli sotto quello proposto | `assets/js/placement.js` (T091, T092) |
| C5 | Numero di item del rilascio scaglionato di P6 | Primi 12 testi come primo taglio, corpus pieno a 40 come obiettivo confermato | `data/core/readings.js` (T102, T103) |
| C6 | Tetto e criterio di potatura del quaderno errori su quota piena | Si potano per prime le carte già superate e più vecchie, mai i progressi delle lezioni | `assets/js/core.js` (T007) |

## 8. File impattati

| File | Tipo | Scopo |
|---|---|---|
| `package.json` | nuovo | Toolchain di sviluppo: `@playwright/test`, script `test` e `test:dom`. Nessuna dipendenza runtime |
| `tests/unit/*.mjs` | nuovo | `node:test` sulla logica pura, sorgenti caricati in `node:vm` come già fanno `validate.mjs` e `parity.mjs` |
| `tests/dom/*.spec.js` | nuovo | Playwright: contratto `onDone`, tastiera, service worker, barra accenti |
| `playwright.config.js` | nuovo | Server statico con `Cache-Control: no-store`, come richiesto da CLAUDE.md per i test in browser |
| `assets/js/core.js` | modifica | Contenitori additivi in `defaultState` (nessun bump di `SCHEMA`), scala di migrazioni in `importState`, validazione della forma e tetto di dimensione all'import, fix del prototype pollution in `merge()`, potatura su quota con avviso, `schedule()` estratto e riusabile |
| `assets/js/exercises.js` | modifica | wrap del dispatcher `build` (riga 517) per intercettare `onDone` con l'esercizio in mano; builder `minpair` (F5) |
| `assets/js/app.js` | modifica | registrazione service worker guardata, campo ricerca nel rail head, avvio moduli nuovi |
| `assets/js/views.js` | modifica minima | schede dentro `ripasso` (F1); tutto il resto va nei moduli nuovi |
| `index.html` | modifica | 8 script nuovi, 2 voci di rail, `<link rel="manifest">`, campo ricerca |
| `assets/css/app.css` | modifica | stili delle viste nuove; se supera ~850 righe, split in `app-train.css` |
| `data/core/*.js` (9 file lezioni) | modifica | `tags: [...]` per lezione, `tag:` di override dove serve |
| `data/core/phonetics.js` | nuovo | coppie minime, italiano e struttura |
| `data/core/readings.js` | nuovo | testi graduati, italiano |
| `data/core/writing.js` | nuovo | prompt, costrutti richiesti, testi modello (italiano) |
| `data/i18n/<lang>/phonetics.js` ×5 | nuovo | note contrastive scritte per lingua |
| `data/i18n/<lang>/readings.js` ×5 | nuovo | domande, opzioni, consegne |
| `data/i18n/<lang>/writing.js` ×5 | nuovo | consegne, checklist, glosse |
| `data/i18n/ui-<lang>.js` ×5 | modifica | ~126 chiavi nuove ciascuno |
| `assets/js/errors.js` | nuovo | quaderno errori: chiave, store, scheduling, cattura |
| `assets/js/drills.js`, `drills-lex.js` | nuovo | generatori e lessico chiuso |
| `assets/js/placement.js` | nuovo | ricerca binaria e marcatura |
| `assets/js/reading.js` | nuovo | render testo, domande, dettato |
| `assets/js/writing.js` | nuovo | rilevazione costrutti, traduzione inversa |
| `assets/js/views-train.js`, `views-extra.js` | nuovo | viste registrate su `global.Views` |
| `assets/js/search.js`, `keys.js` | nuovo | ricerca globale, barra accenti, scorciatoie |
| `sw.js`, `manifest.webmanifest`, `assets/icons/*` | nuovo | PWA |
| `scripts/validate.mjs` | modifica | `minpair` in `EX_TYPES`, gate sui tag, gate sull'unicità degli hash |
| `scripts/extract_strings.mjs` | modifica | collector per `phonetics` e `readings` |
| `scripts/check-sw.mjs` | nuovo | gate anti-deriva della lista di precache |
| `scripts/check-migration.mjs` | nuovo | gate sulla scala di import: un export di `schema: 2` si carica ancora, uno di `schema: 99` viene rifiutato, la chiave v1 continua a migrare, `__proto__` in un file importato non inquina `Object.prototype` |
| `docs/REPORT_ATTIVITA.md` | modifica | una entry per fase |

## 9. Rischi e mitigazioni

I cinque che possono davvero far male, in ordine di danno atteso.

**R1. Il contenuto è il vero cammino critico, non il codice.** 58-64 ore su ~270 sono
scrittura di testi, domande e note contrastive (P6, P7, P3). Un piano che le tratta come "un
file di dati" sbaglia il totale di circa il 40%. → Budget editoriale dichiarato per item nel
tasks.md, scaglionamento di P6 con i primi 12 testi come primo taglio, revisione umana del
testo italiano **prima** di `build_audio.py` (dopo la registrazione la correzione costa un
mp3 nuovo e un file orfano), e note contrastive riscritte per lingua invece che tradotte:
`parity.mjs` verifica il kształt, non il senso, quindi qui nessun gate copre le spalle.

**R1-bis. Esecuzione di fila senza revisione intermedia** (scelta dell'utente, § 7.5).
Poiché la revisione umana avviene solo alla fine, un fraintendimento su P1 arriva in
produzione di codice dentro P2 e P4 prima che qualcuno lo veda, e il costo di correggerlo
cresce con le fasi che ci si sono appoggiate. → Ogni fase chiude con gate verdi e commit
proprio (rollback di una fase sola), e i punti di prodotto non verificabili nel codice sono
raccolti in § 7.6 invece di essere sparsi nel diff.

**R2. Buchi silenziosi nelle nakładki.** Gli array si fondono per indice e `I18n.t` cade
sull'inglese: una nakładka incompleta non produce errore, produce un'app che in spagnolo
mostra frasi in inglese. Con 630 valori nuovi succederà. → `node scripts/parity.mjs` verde
è condizione di chiusura di **ogni** fase, non del programma; più `I18n.missing()` vuoto
dopo aver percorso ogni vista nuova in ognuna delle 5 lingue. Le stringhe si scrivono nello
stesso commit del codice che le usa.

**R3. Deriva dell'identità della carta errore.** Se la chiave contiene l'indice o un campo
della nakładka, aggiungere un esercizio o cambiare lingua orfana il quaderno, e l'orfano non
si vede: la carta continua a esistere e mostra l'esercizio sbagliato. È lo stesso difetto
che la migrazione v1→v2 ha già corretto sulle flashcard. → Chiave = hash FNV-1a dei soli
campi core (D2), gate che ricalcola tutti gli hash e fallisce su collisione, carte non
risolvibili scartate alla lettura invece che renderizzate.

**R4. Il service worker inchioda gli studenti su una versione vecchia.** Senza build step
non c'è hash nel nome dei file: una strategia cache-first sul guscio è irreversibile dal
lato dello studente e non è osservabile dal lato nostro. → Network-first sul guscio e sui
dati, cache-first solo su `audio/**`; costante di versione con pulizia in `activate`;
avviso di aggiornamento; `check-sw.mjs` come gate contro la deriva della lista; e prova
esplicita del ciclo "pubblico una versione nuova, lo studente la riceve" prima di
considerare F4 chiusa.

**R5. Enunciati nuovi che nessuno registra.** `extract_strings.mjs` cammina su una lista
chiusa di campi. Un campo nuovo pronunciato (le coppie di P3, i testi di P6) che non ha il
suo collector non finisce in `audio-strings.json`, non genera mp3, e `audio.js` scende in
silenzio alla sintesi di sistema: la voce meccanica che il progetto esiste per evitare,
senza un errore da nessuna parte. → Il collector si aggiunge nello stesso commit del campo;
verifica per differenza (cancello un mp3 noto, il dry-run me lo deve riportare mancante),
e `build_audio.py --dry-run` a 0 mancanti come condizione di chiusura di F5 e F7.

**R6. Quota `localStorage` piena: si smette di salvare tutto, non solo il quaderno.**
`save()` (`core.js:97-104`) serializza lo stato intero in una sola chiave, dentro un
`try/catch` che mostra un toast. Se il quaderno errori e le bozze di P7 riempiono la quota,
la scrittura fallisce e da quel momento **anche i progressi delle lezioni smettono di
persistere**, con un solo toast effimero a segnalarlo. Non è un problema di dimensione del
quaderno, è un problema di condivisione della chiave. → Potatura con criterio dichiarato
(prima le carte già superate e più vecchie, mai i progressi), avviso non effimero quando la
potatura scatta, e test su quota piena nella suite `node:test` (T007, coperto da FT).

Rischi minori da tenere d'occhio, senza mitigazione dedicata: pressione sul limite di 300
righe in `views-train.js`; regressione su `file://` introdotta da P8 (coperta dalla DoD);
assenza di CSP in `index.html` (hardening dichiarato fuori scope, § 3.2).

## 10. Criteri di successo del programma

Osservabili, tutti eseguibili da riga di comando o da browser.

```bash
npm test                             # node:test sulla logica pura
npm run test:dom                     # Playwright sul DOM
node scripts/validate.mjs            # e per ognuna delle 5 lingue
node scripts/parity.mjs              # esce 0: nessuna nakładka incompleta
node scripts/check-migration.mjs     # scala di import: schema 2 accettato, 99 rifiutato
node scripts/check-sw.mjs            # lista di precache allineata a index.html e data/core
node scripts/extract_strings.mjs
uv run --script scripts/build_audio.py --dry-run   # 0 file mancanti
python3 -m http.server 8080          # meglio con Cache-Control: no-store
```

Più, in browser, la sequenza che nessuno script copre:

1. Profilo salvato prima del programma: dopo il primo avvio i progressi ci sono tutti, le
   flashcard hanno lo stesso `due` di prima, `schema` è ancora 2 e i contenitori nuovi sono
   presenti e vuoti. Nessuna migrazione è avvenuta perché nessuna serviva.
2. Un JSON esportato prima del programma si reimporta senza errori.
3. Sbaglio un esercizio, la carta compare in Ripasso > Errori; cambio lingua a caldo, la
   carta resta e l'etichetta del tag cambia lingua.
4. "Sessione del giorno" compone e chiude in 8-13 minuti cronometrati.
5. Rete spenta: l'app si apre, il corso si naviga, l'audio già ascoltato si sente.
6. `index.html` aperto con doppio clic da disco: funziona come oggi, console pulita.
7. `I18n.missing()` vuoto dopo aver percorso ogni vista nuova nelle 5 lingue.
8. `a11y-gate` sulle viste nuove a 375 e 1280 px: 0 violazioni, come le 6 attuali.

## 11. Handoff

Esecuzione di fila su tutte le fasi, revisione umana alla fine (§ 7.5). Agent successivo
consigliato: **`tdd-guide`**, che con A8 sciolta è ora applicabile e va usato a partire da
FT, dove la rete di sicurezza sul comportamento attuale richiede esattamente il rosso prima
del verde. Da F1 in poi `fullstack-developer` fase per fase, con `code-reviewer` a chiusura
di ogni fase e `a11y-gate` sulle fasi che aggiungono UI (tutte tranne FT e F0).

Alla fine del programma, prima della revisione umana: la lista di § 7.6 è ciò che va portato
all'utente, insieme al diff per fase.

Prima di aprire F0 servono due conferme: **A3** (chi scrive i testi di P6) e **A8**
(si introduce o no un runner di test).
