# ADR 001 - Motore adattivo: cinque decisioni strutturali

**Stato**: Proposto
**Data**: 2026-09-09
**Ambito**: le nove feature P1-P9 (quaderno errori, drill generativi, coppie minime,
sessione del giorno, piazzamento adattivo, comprensione estesa, produzione scritta,
PWA offline, attriti minori).
**Fuori ambito**: scomposizione in task e stima, trattate altrove.

Questo documento decide dove vivono i dati nuovi e come si agganciano ai contratti
esistenti. Non decide l'ordine di realizzazione.

---

## 0. Fatti misurati sul codice

Ogni decisione sotto poggia su questi, non su assunzioni. Verificati leggendo i file e
eseguendo `node scripts/validate.mjs`.

**BASIS: measured** - lettura diretta dei file citati, esecuzione di `validate.mjs`.

| # | Fatto | Dove |
|---|---|---|
| F1 | Gli esercizi non hanno id. L'oggetto minimo è `{ t: "mcq", a: 1 }`. L'identità è posizionale: `(lesson.id, indice)` | `data/core/a1-01.js:44` |
| F2 | La nakładka i18n allinea gli esercizi per indice, quindi il progetto **già accetta** l'identità posizionale e la presidia con `parity.mjs` | `assets/js/i18n.js:83`, `assets/js/i18n.js:64` |
| F3 | Nel punto in cui serve sapere quale esercizio ha sbagliato, `L.id` e l'indice sono **già in scope**; `onAnswer` semplicemente non li riceve | `assets/js/views.js:313`, `:316`, `:323` |
| F4 | `Ex.build(ex, idx, seed)` legge solo `ex.t` e passa l'oggetto al builder. Nulla impone che l'oggetto provenga da un file | `assets/js/exercises.js:517` |
| F5 | `load()` accetta lo stato solo se `schema === SCHEMA`, poi fa `merge(defaultState(), parsed)`: **i campi assenti si riempiono già dai default** | `assets/js/core.js:49`, `:106` |
| F6 | `importState()` **rifiuta duro** qualsiasi `schema !== SCHEMA`. Un bump a 3 rende illeggibile ogni file esportato oggi | `assets/js/core.js:485` |
| F7 | `save()` ingoia il fallimento di quota in un toast. Store pieno = **tutto** lo stato smette di persistere, non solo la parte nuova | `assets/js/core.js:97` |
| F8 | `speak()` su un testo assente dall'indice scende alla sintesi di sistema, cioè alla voce che il progetto rifiuta come voce del corso | `assets/js/audio.js:171`, `:180` |
| F9 | `I18n.t()` ha già un fallback esplicito su `en` e registra la chiave mancante in `I18n.missing()` | `assets/js/i18n.js:23`, `:187` |
| F10 | `Views.progressi` genera i nomi dei giorni con `Intl.DateTimeFormat(I18n.locale())`: precedente di stringa generata invece che tradotta | `assets/js/views.js:717` |
| F11 | Le 42 voci di `GRAMMAR_REF` hanno id stabili, livello CEFR, e **titoli già tradotti in cinque lingue** sotto la chiave `ref:<id>` | `data/core/grammar-reference.js:6`, `data/i18n/en/grammar-reference.js:22` |
| F12 | Il nome del file audio è il digest del contenuto: una frase cambiata produce un file nuovo, il vecchio resta orfano | `assets/js/audio.js:75`, `:88` |

Dimensioni misurate: 1514 esercizi, 150 lezioni (118 + 32 test), 32 unità, 1410 voci di
lessico, 42 voci di riferimento grammaticale, 10 conversazioni. 2530 mp3 per 32 MB.
`data/core` 304 KB, `data/i18n` 3,1 MB (circa 600 KB per lingua), `assets` 196 KB,
`data/audio-index.js` 40 KB. Dizionari UI: 325 chiavi per cinque lingue.

---

## ADR-001 - Dove vive il tag grammaticale degli esercizi

### Contesto

P1 (quaderno errori) e P2 (drill) hanno bisogno di sapere **su cosa** lo studente ha
sbagliato, non solo **dove**. Serve un vocabolario controllato di argomenti e un modo di
associarlo agli esercizi. Il vocabolario esiste già: i 42 id di `GRAMMAR_REF` (F11), con
CEFR e titoli in cinque lingue. La domanda vera è la granularità e la collocazione.

### Passata 1, generazione

- A. Campo `tag` su ogni esercizio in `data/core/`, 1514 voci da compilare.
- B. Tag a livello di unità (32), ereditato dagli esercizi, con override puntuale.
- C. Mappa esterna `data/core/exercise-tags.js` indicizzata per id di lezione.
- D. Derivazione a runtime da euristiche sul contenuto.
- E. Tag a livello di **lezione** (150), che è l'unità didattica che porta già un blocco `grammar`.
- F. Derivazione **strutturale** dal payload dell'esercizio, non euristica: un `conj` dichiara già `verb` e `tense`, un `gender` è per definizione accordo di genere.
- G. Nessun tag: il quaderno errori si chiava sulla lezione, e "argomento" significa "lezione".
- H. Tag sul generatore invece che sull'item, per il contenuto di P2.

### Passata 2, valutazione

**B è dominato da E e non va valutato oltre.** Un'unità contiene cinque lezioni con
punti grammaticali diversi (`data/core/a1-01.js`: una unità, cinque lezioni, un blocco
`grammar` per lezione). Ereditare il tag dall'unità significa dire che "Al bar" e
"Al ristorante" insegnano la stessa cosa. La struttura dei dati dice il contrario, quindi
l'override non sarebbe l'eccezione ma la regola, e il livello ereditato sarebbe rumore.

**D è un non-partente.** L'euristica sul contenuto italiano dovrebbe distinguere
`del/dello/della` come preposizione articolata da `del` dentro un partitivo. Sbaglia in
silenzio, e un tag sbagliato in un quaderno errori non produce un bug visibile: produce
esercizi di ripasso sull'argomento sbagliato, che lo studente attribuisce a se stesso.
Un dato didattico non può essere indovinato.

**G è onesto ma rinuncia alla feature.** Ripassare "gli errori della lezione a2-u03-l4"
è ripassare un contenitore, non un argomento. Vale la pena tenerlo in mente come fallback
se il tagging si rivelasse impraticabile, ma non è ciò che P1 promette.

Restano **A**, **C**, **E**, con **F** come modificatore.

| | A: campo su ogni esercizio | C: mappa esterna per lezione | E: campo sulla lezione |
|---|---|---|---|
| Voci da compilare | 1514 | 150 | 150 |
| Granularità | esatta | di lezione | di lezione |
| Fonti di verità | una | **due** (registro + mappa) | una |
| Aggiungere una lezione | il tag è nel diff, si vede se manca | due file da toccare, l'omissione la vede solo il validatore | il tag è nel diff, si vede se manca |
| Inserire un esercizio a metà lezione | nessun effetto | nessun effetto (chiave = lezione) | nessun effetto |
| Nuovo file da caricare | no | sì, in `index.html` | no |
| Churn su git | 1514 righe su 9 file | 1 file nuovo | 150 righe su 9 file |

Il costo di A non è solo il tempo di compilazione: è che 1514 decisioni prese di fretta
producono tag di qualità peggiore di 150 decisioni prese guardando il blocco `grammar`
della lezione, che il tag di fatto già nomina in prosa.

C sembra più economico ma introduce esattamente ciò che il progetto rifiuta altrove: un
fatto che vive in due posti e va tenuto allineato. Il CLAUDE.md lo dice per le frasi
italiane ("esiste **in un posto solo**"); la stessa ragione vale qui. La differenza con la
nakładka i18n è che lì la duplicazione compra qualcosa (una lingua in più senza copiare
il corso), qui non compra niente: il tag è neutro rispetto alla lingua per costruzione.

**F si somma a E gratis.** 64 `conj` e 14 `gender` (78 esercizi) hanno il proprio argomento
già scritto nel payload. `{t:"conj", verb:"essere", tense:"pres"}` è inequivocabilmente
`g-verbi-presente`; nessuna euristica, una tabella `tense -> id` di 14 righe. Questo non è
D: D indovina leggendo testo italiano, F legge un campo strutturato che esiste per altre
ragioni.

### Decisione

**E + F + override puntuale.**

1. Ogni lezione in `data/core/` guadagna `topics: ["g-passato-prossimo"]`, array di id di
   `GRAMMAR_REF`. Array, non stringa: una lezione che insegna il passato prossimo insegna
   anche la scelta dell'ausiliare, e il primo elemento è il principale.
2. L'esercizio può portare `topics: [...]` che **sostituisce** (non estende) quello della
   lezione. Si compila solo dove serve, cioè dove l'esercizio devia dal tema.
3. Per i tipi `conj` e `gender` il tag si deriva dal payload tramite una tabella
   `tense -> id`, e l'override esplicito ha comunque la precedenza.
4. `validate.mjs` rifiuta un `topics` che nomina un id assente da `GRAMMAR_REF` e segnala
   (warning, non errore) le lezioni senza `topics`.

Il tag resta in `data/core/` perché è un id neutro rispetto alla lingua: metterlo nella
nakładka violerebbe la regola cardine. Il **nome leggibile** dell'argomento non va scritto
da nessuna parte: si legge da `ref:<id>.title`, già presente nelle cinque lingue (F11).
Questa è la ragione per cui il vocabolario controllato deve essere `GRAMMAR_REF` e non
un elenco nuovo: 42 etichette in cinque lingue arrivano gratis, e il quaderno errori può
linkare alla scheda della regola senza mappature aggiuntive.

### Conseguenze

Diventa facile: filtrare gli errori per argomento; proporre la scheda grammaticale
pertinente; costruire un drill mirato; misurare la padronanza per argomento per P4 e P5.
Diventa più difficile: un esercizio che copre davvero due argomenti riceve il tag di
lezione, che potrebbe nominarne uno solo. Mitigazione: l'array. Se serve davvero, si
compila l'override su quell'esercizio.

### Cosa la renderebbe sbagliata

Se, dopo aver taggato per lezione, un drill costruito su un argomento contiene più del
30 per cento di item che quell'argomento non lo esercitano, la granularità di lezione è
troppo grossa e va pagata quella per esercizio. La misura è fattibile su un campione di
50 item senza scrivere codice di produzione.

### Scartate

- **B (tag di unità)**: dominato da E, la struttura dei dati porta il punto grammaticale a livello di lezione.
- **C (mappa esterna)**: crea una seconda fonte di verità per un fatto che non guadagna nulla dall'essere separato.
- **D (euristica a runtime)**: sbaglia in silenzio su un dato didattico, e l'errore ricade sullo studente.
- **G (nessun tag)**: rinuncia a P1 e P2 come descritti; resta come piano di ripiego.
- **H (tag sul generatore)**: non scartata, è la forma che il tagging assume in ADR-003 per il contenuto generato.

---

## ADR-002 - Come si estende lo stato senza rompere i progressi

### Contesto

Nove feature portano strutture nuove: quaderno errori, padronanza per argomento, stato del
piazzamento, storico delle sessioni, testi di produzione scritta. Lo stato oggi è un solo
blob JSON in `localStorage` sotto `linguai.italiano.v2`, con `SCHEMA = 2`, esportabile e
importabile dallo studente.

Due osservazioni cambiano il quadro rispetto a come la domanda è posta:

- F5: `load()` fa già `merge(defaultState(), parsed)`. Un campo aggiunto a
  `defaultState()` compare con il suo valore di default anche negli stati salvati che non
  lo hanno. **L'additività funziona già, senza bump.**
- F6: `importState()` rifiuta ogni `schema !== SCHEMA`. Un bump a 3 renderebbe illeggibile
  ogni file esportato prima. Il vincolo dichiarato ("un file esportato da una versione
  vecchia deve continuare a caricarsi") **oggi non è soddisfatto**: è soddisfatto solo
  finché non si fa un bump.

### Passata 1, generazione

- A. Bump a `SCHEMA = 3` con migrazione.
- B. Strutture additive tolleranti all'assenza, senza bump.
- C. Chiave `localStorage` separata per il motore adattivo.
- D. IndexedDB per la parte che cresce, `localStorage` per il nucleo.
- E. Versionare i campi invece del contenitore: ogni sotto-oggetto porta la propria versione.
- F. Bump con **scala** di migrazioni applicata anche in import (`schema <= SCHEMA` accettato, aggiornato, poi caricato).
- G. Politica di potatura come parte prima classe dello stato, indipendente dalla versione.

### Passata 2, valutazione

**C è un non-partente.** Una seconda chiave si stacca dall'export (che serializza `state`),
sopravvive a `resetState()` che promette di cancellare i progressi, e crea due sorgenti di
verità sullo stesso studente. Il primo bug sarà "ho cancellato i progressi ma il
piazzamento mi ricorda ancora".

**E è sovradimensionato.** Versioni per campo hanno senso quando i campi evolvono in modo
indipendente e frequente. Qui il precedente è uno solo (v1 -> v2 in due anni di progetto).
Il costo di comprensione supera il beneficio.

**A contro B** è la scelta vera, e la risposta dipende da cosa significa il numero. La
migrazione v1 -> v2 esistente (`core.js:70`) ha cambiato il **significato** di un campo: la
chiave della carta è passata da "italiano + traduzione" a "solo italiano", e senza
migrazione le carte vecchie sarebbero state orfane, cioè silenziosamente sbagliate. Quello
è ciò che il bump segnala: i dati vecchi letti dal codice nuovo **mentono**.

Aggiungere `errors {}`, `mastery {}`, `placement {}` non fa mentire nessun campo esistente.
Uno stato senza `errors` letto dal codice nuovo significa esattamente "questo studente non
ha ancora sbagliato niente di registrato", che è vero. Bumpare qui svaluterebbe il segnale:
al terzo bump additivo, il numero non distingue più "aggiunto un campo" da "ricostruisci
tutto", e il prossimo cambiamento di significato passerà inosservato.

**F non è alternativo a B, è il suo prezzo.** Decidere "niente bump per l'additivo" è
una politica solo se il giorno del bump vero l'import continua a funzionare. Altrimenti è
un rinvio, e il debito lo paga uno studente che perde i progressi.

**D e la crescita.** Numeri, con la struttura decisa qui:

| Struttura | Tetto strutturale | Stima JSON |
|---|---|---|
| Deck vocabolario (`srs`) | 1410 carte, una per voce del corso | ~180 byte per carta -> ~250 KB; con glosse accumulate in 5 lingue ~400 KB |
| Quaderno errori item-level | 1514 carte, una per esercizio del corso | ~110 byte -> ~170 KB |
| Padronanza per argomento | 42 record | trascurabile |
| Piazzamento | 1 record | trascurabile |
| Progressi lezioni | 150 record | ~20 KB |

Tetto complessivo delle strutture **limitate**: sotto 700 KB, contro una quota di circa
5 MB per origine, contata in unità UTF-16 dai motori principali, quindi circa 2,5 milioni
di caratteri utili. **BASIS: inferred** - il tetto strutturale deriva dai conteggi del corso
(measured); la quota e il conteggio UTF-16 sono comportamento noto dei browser, non
misurato in questo repo, da verificare prima di considerarlo garantito.

Il pericolo non è il quaderno errori: è **limitato dalla dimensione del corso**. Il
pericolo è tutto ciò che cresce per evento e non per contenuto: un log per risposta con
timestamp, lo storico completo delle sessioni giornaliere, e soprattutto i testi di P7, che
sono generati dall'utente e non hanno tetto. Quelli, e solo quelli, giustificano D.

E qui pesa F7: `save()` cattura il fallimento di quota e mostra un toast. Uno store pieno
non degrada la feature che lo ha riempito: fa smettere di persistere **tutto**, compresi i
progressi delle lezioni. Il costo del non decidere una politica di potatura non è un
quaderno errori grande: è la perdita silenziosa di tutto il resto.

IndexedDB avrebbe un secondo problema, decisivo qui: sotto `file://` il suo comportamento
varia per browser, e alcuni motori lo negano assegnando a ogni file un'origine distinta.
`localStorage` sotto `file://` è oggi il fondamento su cui il progetto sta in piedi.
Introdurre un secondo store con garanzie diverse su `file://` significa avere due modi di
funzionare a seconda di come la pagina è stata aperta.
**BASIS: unknown** - non verificato in questo repo; se P7 richiede di conservare le bozze,
va misurato su Firefox e Chrome da `file://` prima di decidere.

### Decisione

**B + F + G. Nessun bump per l'additivo, scala di migrazioni in import, potatura scritta.**

1. Le strutture nuove si aggiungono a `defaultState()` come oggetti vuoti. Nessun bump.
   `merge` le riempie sugli stati esistenti (F5).
2. `importState()` cambia da rifiuto a scala: `schema > SCHEMA` resta rifiutato (file dal
   futuro), `schema < SCHEMA` passa per le stesse funzioni di migrazione usate da `load()`,
   `schema === SCHEMA` come oggi. `migrateV1` diventa il primo gradino di una scala
   riutilizzabile da entrambi i percorsi.
3. Il bump resta riservato a un cambiamento di **significato** di un campo esistente. La
   regola si scrive in `CLAUDE.md` accanto a quella sulla chiave di `localStorage`.
4. Politica di potatura, deterministica e didatticamente corretta: una carta del quaderno
   con `reps >= 5 && lapses === 0` non è più un errore, e viene rimossa dopo 90 giorni
   dall'ultimo ripasso. Tetto duro di 1000 carte, con espulsione per (padronanza, scadenza
   più vecchia). La potatura scatta **anche** su fallimento di `setItem`: si pota e si
   riprova una volta prima di mostrare il toast, così che uno store pieno degradi la
   feature nuova invece di fermare la persistenza dei progressi.
5. Nessuna struttura per-evento senza tetto. Lo storico delle sessioni è un ring buffer di
   lunghezza fissa (30 giorni); le statistiche restano aggregate come oggi.
6. P7 conserva **l'esito** (data, argomento, punteggio, lunghezza), non il testo. Se la
   revisione del prodotto stabilisce che le bozze vanno conservate, quella è una decisione
   separata che riapre D, e va presa misurando `file://` prima.

### Conseguenze

Diventa facile: aggiungere strutture senza toccare la migrazione, e tenere validi i file
esportati. Diventa più difficile: accorgersi che una struttura additiva ha bisogno di una
migrazione vera. Il presidio è la regola scritta, non il codice.

Il punto 2 è lavoro che oggi nessuna feature richiede. Non è speculativo: è ciò che
trasforma "niente bump" da rinvio a politica, e costa poche righe sul percorso di import.

### Cosa la renderebbe sbagliata

Se una delle nove feature si scopre a dover **reinterpretare** un campo esistente (esempio
concreto: `lessons[id].done` che oggi è booleano su soglia 70% e dovesse diventare un
livello di padronanza), allora il bump è dovuto e questa decisione non si applica a quel
caso. Secondo segnale: se il quaderno errori supera 1 MB su un utente reale, il modello di
crescita qui è sbagliato e la potatura va rivista prima, non dopo.

### Scartate

- **A (bump per l'additivo)**: svaluta il segnale del numero di schema e costa una migrazione che `merge` già fa gratis.
- **C (chiave separata)**: si stacca da export e reset, due verità sullo stesso studente.
- **E (versione per campo)**: sovradimensionato per un progetto che ha avuto un cambio di schema in tutta la sua vita.
- **D (IndexedDB)**: rinviato, non escluso. Rientra solo se P7 deve conservare i testi, e solo dopo aver misurato il comportamento sotto `file://`.

---

## ADR-003 - Dove vive il contenuto generato da regole

### Contesto

P2 chiede drill infiniti su preposizioni articolate, accordo, ausiliare, pronomi, numeri,
date e ore. Un generatore produce item a runtime: nessun id in un file, nessuna nakładka,
nessun mp3 preregistrato. La domanda è come convive con `Ex.build`, con `validate.mjs`,
con il tagging di ADR-001 e con l'SRS.

Fatti che orientano la risposta: F4 (`build` legge solo `ex.t` e passa l'oggetto, non gli
interessa la provenienza), F8 (un testo assente dall'indice audio scende alla voce di
sistema, cioè a quella che il progetto rifiuta), e l'esistenza di `Core.seededShuffle`,
che rende già deterministico il rendering a partire da un seme.

### Passata 1, generazione

- A. Un tipo di esercizio nuovo, `drill`, con il suo builder in `exercises.js`.
- B. Modulo parallelo fuori da `Ex`: propria vista, proprio runner, proprio conteggio.
- C. Fabbrica che emette oggetti **dei tipi esistenti** e li consegna a `Ex.build`.
- D. Pre-generazione a build time dentro `data/core/`: gli item diventano contenuto normale, con id, nakładka e mp3.
- E. Ibrido: fabbrica a runtime, più istantanea a build time del sottoinsieme enumerabile, per avere audio su quello.
- F. Lezione virtuale: il generatore materializza un oggetto lezione e passa dal runner esistente.

### Passata 2, valutazione

**D è un non-partente per la maggior parte dei generatori e la scelta giusta per uno.**
Le preposizioni articolate hanno 7 x 7 forme: enumerabili. Numeri, date e ore no. Ma il
problema di D non è il conteggio: è che pre-generare 500 item significa aggiungerli alla
nakładka in cinque lingue e all'indice audio, cioè pagare il moltiplicatore x5 e un
rebuild audio **proprio sul contenuto che era stato scelto generativo per non pagarlo**.
D annulla la ragione di P2.

**B costa quanto A più un runner.** Un modulo parallelo dovrebbe reimplementare rendering,
controllo della risposta, `onDone` esattamente una volta, conteggio del progresso e
accessibilità. Tutto già scritto e collaudato su 1514 item. L'unico argomento a favore
sarebbe un'interazione che i builder esistenti non sanno esprimere, e va verificato per
generatore, non assunto.

**A è meno di quanto sembra.** Un tipo `drill` avrebbe comunque bisogno, al suo interno,
di rendere una scelta multipla o un campo da riempire: il builder nuovo finirebbe per
duplicare `buildMcq` e `buildFill` con la sola differenza della provenienza dei dati. La
provenienza non è una proprietà che l'interfaccia debba conoscere.

**C è la scelta**, e regge per una ragione che vale più della comodità: emettendo i tipi
esistenti, il contenuto generato eredita **il validatore**. `validate.mjs` verifica già
per tipo che `a` sia dentro il numero di `opts`, che i campi obbligatori ci siano, che il
tipo sia nella lista chiusa. Un generatore che emette `{t:"mcq", ...}` può essere
verificato eseguendolo con N semi fissi e passando gli oggetti prodotti **agli stessi
controlli** applicati oggi ai file. Non serve un secondo validatore: serve una sezione in
più in quello esistente.

**L'identità stabile esiste, e non serve un id.** `(generatorId, seed)` rimaterializza
l'item identico, purché il generatore sia una funzione pura del seme. Un item generato ha
quindi una chiave riproducibile per il quaderno errori: `drill:<genId>:<seed>`. Il vincolo
"funzione pura del seme, nessun `Math.random`" è l'unico da presidiare, e si presidia nel
validatore chiamando due volte con lo stesso seme e confrontando.

**Il problema vero è l'audio (F8).** Una frase generata non è nell'indice, quindi il
pulsante di ascolto la farebbe leggere dalla sintesi di sistema: la voce che il CLAUDE.md
esclude come voce del corso, con una regressione di qualità che lo studente attribuisce al
prodotto. Quindi: **i generatori sono testuali**, non emettono `listen` né `speak`, e non
espongono il pulsante di ascolto sui propri item. Corollario che vale la pena dichiarare:
P3 (coppie minime e prosodia) **non è un generatore**, perché è interamente audio. È
contenuto autoriale in `data/core/` con i suoi mp3, ed è il controesempio che chiarisce il
confine.

**E resta come estensione futura ben definita**: un generatore può dichiararsi `audible`
se sa enumerare il proprio output finito; `extract_strings.mjs` lo interroga e le sue frasi
entrano nell'indice come qualsiasi altra. L'invariante "ogni frase pronunciata viene dallo
strato neutro" si conserva, perché il generatore **è** strato neutro. Non serve adesso.

**SRS: cosa è la carta.** Due possibilità reali. Item-level: la carta è l'item generato,
ripescabile per seme. Topic-level: la carta è l'argomento, e a ogni ripasso il generatore
produce un item nuovo. La seconda è migliore per due ragioni indipendenti. Didattica: un
drill esiste per insegnare **la regola**, e rivedere la stessa frase premia il ricordo della
frase. Strutturale: limita il quaderno a 42 record invece che a un insieme illimitato, che
è esattamente la crescita senza tetto che ADR-002 vieta.

Ne segue che il quaderno contiene **due specie di carta**, ed è bene dirlo qui invece di
scoprirlo: la carta-item per gli esercizi autoriali, dove la frase specifica è il
contenuto, e la carta-argomento per i drill, dove il contenuto è la regola. Distinte per
campo `kind`, con scheduling SM-2 identico.

### Decisione

**C**, con questa forma:

1. Nuovo file `assets/js/drills.js`, caricato dopo `exercises.js`, prima di `views.js`.
   Espone `Drills.list()` e `Drills.make(genId, seed)`.
2. Ogni generatore dichiara: `id`, `topics` (id di `GRAMMAR_REF`, coerente con ADR-001),
   `label` in italiano (vedi ADR-005), e `make(seed) -> oggetto esercizio di tipo esistente`.
3. `make` è una funzione pura del seme. Nessun `Math.random`.
4. Gli enunciati passano da `I18n.t("drill.<gen>.q", {...})`: una chiave per generatore
   copre infiniti item in cinque lingue.
5. Nessun generatore emette `listen` o `speak`, e i suoi item non espongono il pulsante di
   ascolto.
6. `validate.mjs` guadagna una sezione che, per ogni generatore, produce N item con semi
   fissi, li sottopone ai controlli per tipo già esistenti, e verifica la purezza
   confrontando due chiamate con lo stesso seme.
7. Nel quaderno errori un item generato incrementa la carta-**argomento** del generatore,
   non una carta propria.

### Conseguenze

Diventa facile: aggiungere un generatore (un oggetto in un array, una chiave UI per
lingua, zero mp3, zero nakładka di contenuto); riusare rendering, controllo risposta,
conteggio e accessibilità. Diventa più difficile: dare voce ai drill, che resta una
scelta deliberata da riaprire con il percorso `audible`. Il quaderno errori acquisisce due
specie di carta, e ogni vista che lo legge deve gestirle entrambe.

### Cosa la renderebbe sbagliata

Se due dei cinque generatori richiedono un'interazione che nessun tipo esistente esprime
(candidato più probabile: le ore, se il modo naturale di rispondere è un quadrante), il
confine è nel posto sbagliato e serve un tipo nuovo per quelli. Il segnale precoce è un
generatore che aggiunge campi all'oggetto esercizio che nessun builder legge.

### Scartate

- **A (tipo `drill` nuovo)**: duplicherebbe i builder esistenti per veicolare una differenza (la provenienza) che l'interfaccia non deve conoscere.
- **B (modulo parallelo)**: reimplementa runner, conteggio e accessibilità già collaudati su 1514 item.
- **D (pre-generazione a build time)**: paga il moltiplicatore x5 e il rebuild audio proprio sul contenuto scelto generativo per evitarli.
- **F (lezione virtuale)**: il runner delle lezioni porta con sé teoria, dialogo, cultura e soglia del 70 per cento, tutto assente in un drill. Adattarlo significherebbe indebolire il contratto della lezione.
- **E (ibrido con audio)**: rinviato con il percorso `audible` già definito, da attivare solo se l'assenza di voce sui drill si dimostra un problema reale.

---

## ADR-004 - Strategia di cache per P8 con il vincolo `file://`

### Contesto

P8 chiede offline reale. Il service worker richiede contesto sicuro e l'app deve
continuare ad aprirsi da disco. Le grandezze misurate:

| Insieme | Dimensione | Natura |
|---|---|---|
| Guscio: `index.html`, `assets/css`, `assets/js`, i 5 dizionari UI | ~330 KB | cambia a ogni rilascio |
| Strato neutro `data/core` + `data/audio-index.js` | ~345 KB | cambia quando si aggiunge contenuto |
| Nakladka di una lingua | ~600 KB | serve solo la lingua scelta |
| Audio | 32 MB, in crescita con P3 e P6 | immutabile per costruzione (F12) |
| Font Google | esterni, cross-origin | opachi in cache |

### Passata 1, generazione

- A. SW registrato solo su http(s), precache del guscio, audio a richiesta.
- B. Nessun SW: header di cache HTTP e basta; "offline" è quello che il browser ha tenuto.
- C. SW più pulsante esplicito "rendi disponibile offline questo livello".
- D. Nessun SW: la copia scaricabile via `file://` **è** la storia offline del progetto.
- E. Cache API guidata dalla pagina, senza SW.
- F. Nome di cache derivato dal digest dell'indice audio invece che da una costante a mano.
- G. Rete-prima per codice e dati, cache-prima per l'audio.

### Passata 2, valutazione

**D merita di essere presa sul serio prima di essere scartata.** Il progetto funziona da
`file://` per costruzione: aprire la cartella è già un'esperienza offline completa, audio
compreso, senza service worker, senza quota e senza invalidazione. Chi ha lo zip **ha
già** P8. D si scarta non perché sbagliata ma perché incompleta: non copre lo studente
che ha aperto l'URL sul telefono, non dà l'icona sulla home, e chiedere di scaricare
250 MB di zip per usare l'app in metropolitana è un'esperienza peggiore. Resta però vero
che **il costo di sbagliare P8 è basso**, perché esiste già una via che funziona.

**B è il fallback naturale.** Senza SW, un browser che ha visitato il sito tiene comunque
in cache HTTP una parte degli asset. È quello che accade oggi. Non è offline affidabile e
non dà installabilità, ma è esattamente ciò che deve accadere se il SW non si registra.
Non è un'alternativa: è il comportamento degradato che A deve preservare intatto.

**E è un non-partente**: la Cache API senza SW non intercetta le richieste, quindi non
serve niente offline; e richiede comunque contesto sicuro. Nessun vantaggio su A.

**F contro costante a mano.** Serve una versione per il guscio perché senza build step non
c'è un digest del bundle. Ma **l'audio non ha bisogno di invalidazione**: F12 dice che il
nome del file è il digest del contenuto, quindi una frase cambiata produce un file nuovo
e il vecchio diventa orfano, mai stantio. L'unica manutenzione è la raccolta: in `activate`
si scorre la cache audio e si eliminano le voci il cui digest non è più in `AUDIO_INDEX`,
che è l'insieme completo. Preciso, economico e senza stato aggiuntivo. Lo schema di
hashing che esisteva per non muovere git risolve gratis l'invalidazione della cache.

Per guscio e dati resta il problema reale: **la costante di versione dimenticata**. È la
stessa classe di errore che il progetto evita altrove tenendo una sola fonte di verità, e
qui non c'è modo di eliminarla senza un build step, che è vietato. Da cui **G**: se
codice e dati vanno in rete-prima con ricaduta sulla cache, dimenticare il bump non serve
più contenuto stantio a chi è online, e offline si serve l'ultima copia buona. Il costo
è un giro di rete quando si è connessi, su ~675 KB che il browser rivalida con 304.

**C non è alternativo ad A: è la sua parte onesta.** 32 MB non si precaricano
all'installazione, e non basta la cache opportunistica alla prima riproduzione, perché chi
si prepara al viaggio in treno vuole decidere **prima**. Un pulsante per livello che scalda
la cache con i digest di quel livello risolve, ed è calcolabile esattamente: i digest di
un livello si ricavano dalle sue frasi con la stessa `hashText` usata per riprodurle.

I font Google restano cross-origin e opachi. Offline degradano al font di sistema, il che
cambia l'aspetto ma non rompe niente. Autoospitarli renderebbe l'offline onesto e
costerebbe circa 200 KB nel guscio: vale la pena, ma è una decisione di prodotto separata.

### Decisione

**A + C + F + G.**

1. `sw.js` alla radice e `manifest.webmanifest`. Registrazione in `app.js` dietro guardia
   esplicita: si registra solo se `'serviceWorker' in navigator` **e** il protocollo è
   `https:` oppure l'host è `localhost`. Sotto `file://` non si tenta nemmeno.
2. Nessun percorso di codice può **richiedere** il service worker. Se non c'è, l'app è
   quella di oggi. Questo è un invariante, non un obiettivo.
3. Precache all'installazione: guscio più strato neutro più `data/audio-index.js`,
   circa 675 KB. Le nakładka si mettono in cache a richiesta, per lingua e per livello:
   chi studia in polacco non scarica gli altri quattro.
4. Codice e dati: rete-prima con ricaduta su cache. Audio e font: cache-prima, senza
   scadenza.
5. Cache dell'audio content-addressed, mai invalidata per contenuto. In `activate`, sweep
   contro `AUDIO_INDEX`: si eliminano le voci il cui digest non è più nell'indice.
6. Costante `SW_VERSION` nel solo `sw.js`, che nomina le cache del guscio. Il bump
   dimenticato degrada in "un giro di rete in più", non in "codice vecchio servito".
7. Pulsante "disponibile offline" per livello, con dimensione stimata mostrata prima di
   iniziare e possibilità di annullare. Precondizione per P6, che alza il conto.
8. Nessun `skipWaiting`. Un SW nuovo aspetta e la UI propone di ricaricare, perché
   sostituire il codice sotto una sessione di esercizi in corso perde le risposte date.

### Conseguenze

Diventa facile: installabilità, avvio istantaneo, offline prevedibile e scelto dallo
studente. Diventa più difficile: il debug in locale (serve `localhost`, non `file://`, e
un SW attivo può mascherare modifiche ai dati; la regola già scritta nel CLAUDE.md sul
server senza cache si estende al SW). Si aggiunge una superficie di manutenzione, `sw.js`,
che nessuno strumento del progetto valida oggi.

### Cosa la renderebbe sbagliata

Se il primo caricamento su rete lenta peggiora in modo misurabile per via del rete-prima
sul guscio, la strategia sul guscio va spostata a stale-while-revalidate, tenendo
rete-prima solo su `data/`. Misura: tempo al primo render su throttling 3G, prima e dopo.
Secondo segnale: se su iOS la quota impedisce di mettere in cache un livello intero di
audio, il pulsante deve scendere alla granularità di unità e dichiarare il limite.
**BASIS: unknown** - nessuna misura di quota effettuata su dispositivo reale.

### Scartate

- **B (solo cache HTTP)**: non è un'alternativa, è il comportamento degradato che A deve preservare.
- **D (solo zip `file://`)**: già vero e già funzionante, ma non copre il telefono né l'installabilità. Resta la ragione per cui l'ambizione su P8 può essere contenuta.
- **E (Cache API senza SW)**: non intercetta le richieste, quindi non produce offline.

---

## ADR-005 - Contenimento del moltiplicatore x5 sulle stringhe

### Contesto

325 chiavi UI per cinque lingue oggi. Nove feature portano stimate 150-250 chiavi nuove,
cioè 750-1250 stringhe da scrivere, con `parity.mjs` come cancello sul contenuto. La
domanda non è se pagare, è **quale parte del moltiplicatore è strutturale e quale è
autoinflitta**.

Il precedente citato (F10) è reale e generalizzabile: `Views.progressi` non ha una tabella
di nomi dei giorni per lingua, li chiede a `Intl.DateTimeFormat(I18n.locale())`. Cinque
tabelle non scritte, e la sesta lingua arriva gratis.

### Passata 1, generazione

- A. Etichette in italiano dove il contenuto **è** italiano (termini grammaticali, enunciati di esercizio).
- B. Generazione da `Intl`: date, numeri, liste, plurali, tempi relativi.
- C. Chiavi condivise e composizione, invece di frasi nuove intere.
- D. Fallback esplicito su `en`, già implementato (F9): si rilascia in due lingue e le altre ricadono visibilmente.
- E. Traduzione automatica con revisione madrelingua, tracciata per chiave.
- F. Ridurre il **numero** di stringhe: interfaccia che mostra il dato invece di parlarne.
- G. Cancello di parità anche sui dizionari UI, che oggi `parity.mjs` non copre.
- H. Riuso delle etichette già tradotte al posto di scriverne di nuove.

### Passata 2, valutazione

**H è la leva più grossa e la meno visibile.** ADR-001 sceglie i 42 id di `GRAMMAR_REF`
come vocabolario degli argomenti. Quei 42 argomenti **hanno già un titolo in cinque
lingue** sotto `ref:<id>.title` (F11). Quaderno errori, drill, sessione del giorno,
piazzamento e statistiche per argomento nominano tutti gli stessi argomenti: leggendoli da
lì, 42 x 5 = 210 stringhe non vengono scritte. Non è un'ottimizzazione, è una
conseguenza dell'aver scelto il vocabolario giusto in ADR-001.

**B vale più di quanto la domanda suggerisca, perché tocca il contenuto e non solo la
cornice.** Per il generatore di numeri, date e ore di P2, `Intl` con locale `it-IT`
produce **la chiave di risposta** (`ventitre e quarantacinque`, `il ventidue marzo`,
`millenovecentottantasette`), e con il locale dello studente produce **l'enunciato**.
Un generatore, zero contenuto scritto, zero traduzioni, e la sesta lingua non costa niente.
`Intl.RelativeTimeFormat` copre le scadenze del ripasso ("fra 3 giorni"), che altrimenti
sono forme plurali in cinque lingue; `Intl.ListFormat` copre le enumerazioni; `PluralRules`
è già in uso (`i18n.js:171`).
Il limite di B è netto e va detto: `Intl` genera ciò che è **convenzione locale**, mai
ciò che è spiegazione. Non scriverà mai un blocco `{contrast}`.

**A è policy già scritta, e va estesa ai nomi delle cose nuove.** Il CLAUDE.md impone
l'italiano nello strato neutro; i dizionari UI dichiarano che `passato prossimo` resta
identico in tutte le lingue. Ne segue che i cinque drill di P2 si chiamano `Preposizioni
articolate`, `Accordo del participio`, `Ausiliare`, `Pronomi combinati`, `Numeri, date e
ore`, e le categorie di P3 `Doppie`, `E aperta / e chiusa`, `Accento`, `gli / gn / sc`.
Sono nomi di cose italiane. Costano 9 etichette invece di 45, e ciò che serve tradurre è
al più una riga di spiegazione, dove serve davvero.

**F è vero ma va tenuto sotto controllo.** Un'interfaccia che mostra "12 / 42" e una barra
non ha bisogno di una frase; un'icona senza etichetta ha bisogno di un `aria-label`, che è
una stringa in cinque lingue e non è negoziabile. Il risparmio è reale sulla prosa
esplicativa, nullo sull'accessibilità. Vale come principio, non come tecnica.

**C ha un tetto basso.** Comporre "Ripassa" + "preposizioni articolate" funziona in inglese
e si rompe in polacco e tedesco, dove il complemento va declinato. Il progetto ha già
scelto la strada corretta (`plural()` con `Intl.PluralRules` invece di `n === 1`), e la
stessa prudenza vale qui: la composizione ingenua di frammenti è il modo classico di
produrre traduzioni sgrammaticate. Si usa solo per etichette autonome, mai per frasi.

**E è un processo, non un'architettura.** Non cambia dove vivono le stringhe. Se serve,
serve comunque; questo ADR non lo decide.

**D e G sono in tensione apparente, e la tensione si risolve dividendo l'ambito.** D dice
"rilascia in due lingue, le altre ricadono su `en`". G dice "una chiave mancante deve far
fallire il cancello". Non possono valere sullo stesso insieme. La divisione corretta segue
il costo: la **cornice** (bottoni, titoli, messaggi di errore, `aria-label`) è composta di
stringhe corte, ripetitive, traducibili in blocco e obbligatorie perché senza di esse la
feature è inutilizzabile in quella lingua. Il **contenuto** (testi graduati di P6, consegne
di produzione scritta di P7, note contrastive) è prosa che il CLAUDE.md dice esplicitamente
di **riscrivere per lingua e non tradurre**: è lì che il moltiplicatore è incomprimibile,
ed è lì che il rilascio scaglionato per lingua è l'unica risposta onesta. Il contenuto,
per giunta, è già organizzato per directory di lingua, quindi la sua assenza degrada per
i meccanismi esistenti.

**G colma un buco reale.** `parity.mjs` confronta le nakładka di contenuto; i dizionari UI
non sono coperti da nessun cancello, e una chiave mancante emerge solo a runtime in
`I18n.missing()`, cioè quando qualcuno guarda. Con 750-1250 stringhe nuove in arrivo,
quella è la superficie che si degrada per prima.

### Decisione

Cinque regole, in ordine di applicazione quando si aggiunge una stringa.

1. **Se è il nome di una cosa italiana, resta in italiano** e non entra nei dizionari.
   Vale per drill, categorie fonetiche, tempi verbali, termini grammaticali. Coerente con
   la policy già in vigore sullo strato neutro.
2. **Se nomina un argomento grammaticale, si legge da `ref:<id>.title`**, non si riscrive.
   Il vocabolario è quello di ADR-001.
3. **Se è convenzione locale (data, ora, numero, durata, tempo relativo, enumerazione,
   plurale), si genera con `Intl`** sul locale giusto: quello dello studente per la
   cornice, `it-IT` per il contenuto italiano. Il precedente di `Views.progressi` si
   generalizza, e per il generatore numeri/date/ore di P2 questo elimina insieme
   contenuto e traduzione.
4. **Cornice: cinque lingue obbligatorie, con cancello.** `parity.mjs` (o una sezione di
   `validate.mjs`) confronta l'insieme delle chiavi di ogni `ui-<lang>.js` con `ui-pl.js`
   ed esce 1 alla differenza. Le eccezioni deliberate si dichiarano in un elenco esplicito
   nel repo: un'omissione dichiarata è un debito, un'omissione silenziosa è un bug.
5. **Contenuto: rilascio per lingua ammesso e visibile.** Un testo di P6 o una consegna di
   P7 possono esistere in due lingue. La ricaduta su `en` di `I18n.t` (F9) copre la cornice;
   per il contenuto vale il meccanismo delle directory, e l'interfaccia dichiara che quel
   materiale non è ancora nella lingua scelta invece di mostrarlo in un'altra senza dirlo.

Stima dell'effetto, con l'articolazione delle nove feature: le regole 1-3 tolgono circa
metà delle stringhe che una realizzazione ingenua scriverebbe, e la regola 2 da sola vale
210 stringhe. La regola 5 sposta il resto del contenuto da "blocco al rilascio" a "debito
dichiarato".
**BASIS: inferred** - il conteggio di 42 x 5 = 210 è measured (F11); la stima "circa metà"
deriva dall'inventario delle nove feature, non da un elenco compilato di chiavi.

### Conseguenze

Diventa facile: aggiungere una feature senza aprire cinque file; aggiungere una **sesta**
lingua, perché tutto ciò che passa da `Intl` e da `ref:<id>` arriva senza lavoro.
Diventa più difficile: sapere a colpo d'occhio cosa è tradotto, perché le stringhe hanno
ora tre provenienze (dizionario, riferimento grammaticale, generazione). Il cancello della
regola 4 è ciò che rende sopportabile questa dispersione.

### Cosa la renderebbe sbagliata

Se il testo generato da `Intl` risulta innaturale nella prosa di una lingua (candidato più
probabile: le forme relative in polacco dentro una frase più lunga), la regola 3 va
ristretta ai valori isolati e la frase torna a essere una chiave. Verifica: leggere gli
output reali in polacco e tedesco prima di generalizzare, non solo in inglese.
Secondo segnale: se il cancello della regola 4 blocca ripetutamente lavoro legittimo,
l'elenco delle eccezioni sta diventando la norma e la divisione cornice/contenuto è
tracciata nel posto sbagliato.

### Scartate

- **C (composizione di frammenti)**: si rompe sulle lingue flessive; ammessa solo per etichette autonome.
- **E (traduzione automatica con revisione)**: è un processo di produzione, non una decisione strutturale. Ortogonale a questo ADR.
- **F (meno prosa)**: tenuto come principio, non come tecnica: il risparmio sulla prosa è reale, sull'accessibilità è nullo.

---

## Tensioni fra le decisioni

Punti in cui una raccomandazione ne rende un'altra più costosa. Nessuno è bloccante, ma
vanno visti insieme.

1. **ADR-001 con ADR-003.** Gli item autoriali si taggano per lezione, i generati per
   generatore. Lo stesso argomento riceve quindi carte di due specie con scheduling di
   granularità diversa (item contro argomento). Ogni vista che legge il quaderno deve
   gestirle entrambe. La distinzione è giustificata, ma è complessità reale e va
   nominata nel campo `kind`, non lasciata implicita.

2. **ADR-002 con sé stesso.** Si raccomanda di non bumpare **e** di sistemare subito il
   percorso di import, che nessuna feature richiede oggi. Sono la stessa decisione: senza
   il secondo pezzo, "niente bump" è un rinvio a spese di chi importerà un file vecchio
   dopo il primo bump vero.

3. **ADR-002 con P7.** La decisione di non conservare i testi tiene lo stato dentro
   `localStorage` e fuori da IndexedDB, che sotto `file://` non ha le stesse garanzie. Se
   il prodotto stabilisce che le bozze vanno conservate, la decisione salta e va misurato
   `file://` prima di scegliere.

4. **ADR-003 con P3, e ADR-003 con ADR-004.** I drill sono muti per non degradare alla voce
   di sistema; P3 è interamente audio e quindi non è un generatore, ma contenuto autoriale
   con i suoi mp3. Con P6 (ascolto lungo, dettato) il corpus audio cresce oltre i 32 MB
   attuali, il che rende il pulsante "disponibile offline" di ADR-004 più necessario e le
   sue stime di dimensione più delicate.

5. **ADR-004 con il vincolo "zero build step".** `SW_VERSION` è mantenuta a mano, ed è
   la sola fonte di verità duplicata che questo documento accetta. La ricaduta rete-prima
   su codice e dati esiste apposta per rendere l'omissione poco costosa. Chi toccherà il
   service worker deve sapere che il bump dimenticato non fallisce rumorosamente.

6. **ADR-005 regola 4 con ADR-005 regola 5.** Un cancello duro sulle chiavi UI e un
   rilascio scaglionato per lingua non possono valere sullo stesso insieme. La divisione
   cornice/contenuto è il confine, e la sua correttezza si vede solo all'uso: se
   l'elenco delle eccezioni cresce, il confine è tracciato male.
