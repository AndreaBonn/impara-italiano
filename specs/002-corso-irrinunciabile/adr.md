# ADR 002 - Corso irrinunciabile: cinque decisioni aperte

**Stato**: Proposto
**Data**: 2026-09-09
**Ambito**: D1 ripetizione dilazionata (FSRS), D2 contenuto asimmetrico per lingua
(falsi amici e interferenze L1), D3 consultazione di qualsiasi parola in un testo,
D4 simulatore d'esame CILS B1 Cittadinanza, D5 peso del repository.
**Fuori ambito**: scomposizione in task, stima, contenuto didattico da scrivere.
**Precedente**: `specs/001-motore-adattivo/adr.md`, di cui questo documento continua la
numerazione interna (ADR-006 e seguenti) e riusa il metodo: fatti misurati prima,
alternative generate prima di essere giudicate, e per ciascuna decisione il segnale che
la farebbe tornare indietro.

Il vincolo che governa tutto resta quello dichiarato in `CLAUDE.md`: nessuno step di
build, nessuna dipendenza a runtime, apertura da `file://`, script classici, dati come
file `.js` che assegnano a globali, nessun backend, nessun account, nessuna telemetria.
Ogni decisione qui sotto è vincolata da quello, e in tre casi su cinque è quel vincolo
a determinare la risposta.

---

## 0. Fatti misurati sul codice

Verificati leggendo i file citati ed eseguendo `node scripts/validate.mjs`, `ffprobe`,
`git count-objects` e uno script di misura sul registro caricato in `node:vm` con lo
stesso metodo di `validate.mjs`.

**BASIS: measured**, salvo dove indicato diversamente nella riga.

| # | Fatto | Dove |
|---|---|---|
| F1 | `schedule(c, q)` è una funzione sola, esportata come `Core.schedule`, condivisa dal mazzo del lessico (`gradeCard`) e dal quaderno degli errori | `assets/js/core.js:381`, `:786` |
| F2 | La carta porta `{ef, reps, interval, due, lapses, ts}`. **Nessun registro delle ripetizioni esiste**: `stats.days` aggrega solo il punteggio giornaliero | `assets/js/core.js:47`, `:437` |
| F3 | Il quaderno errori cancella la carta a `reps >= 2`, quindi percorre solo i rami `reps === 1` (1 giorno) e `reps === 2` (3 giorni). Il ramo `interval * ef` **non viene mai raggiunto**: in quel mazzo `ef` viene scritto e mai letto | `assets/js/errors.js:29`, `:66` |
| F4 | `importState()` accetta già `schema < SCHEMA` e lo fa salire con `migrateUp`. La scala di migrazioni esiste, con un gradino solo | `assets/js/core.js:699`, `:630` |
| F5 | Nessun backend e nessuna telemetria: il progetto non può misurare il comportamento reale degli studenti, né oggi né dopo | `CLAUDE.md`, vincolo di progetto |
| F6 | `parity.mjs` confronta la **forma** di ogni overlay contro il polacco ed esce 1 alla differenza. L'unica esenzione è `FREE_FIELDS = ["theory"]`, motivata dal fatto che i blocchi `{contrast}` devono differire per lingua | `scripts/parity.mjs:110`, `:113` |
| F7 | `extract_strings.mjs` legge **solo** `data/core/`. Una frase che vive in un overlay non ha e non può avere un mp3 | `scripts/extract_strings.mjs` |
| F8 | Lessico: 1410 voci, di cui **920 multiparola** e 204 con forma di infinito | misura su registro caricato |
| F9 | Coniugando le 204 voci verbali sui 14 tempi si ottengono **12431 forme distinte in 11 ms**, con zero byte spediti. Mappa forma-lemma in memoria: circa 300 KB | misura su `assets/js/verbs.js` in node |
| F10 | Nei 12 testi di lettura ci sono **521 token distinti**. Lessico monoparola + forme generate + regole di plurale + lista chiusa di parole grammaticali ne copre il **28%**; contando anche le parole interne alle voci multiparola, il **50%** | misura su `data/core/readings.js` |
| F11 | `readings.js` tiene le domande in italiano dentro `core` per scelta dichiarata, e ha già `glossIt`: un glossario curato per testo | `data/core/readings.js:11`, `:37` |
| F12 | `writing.js` rifiuta esplicitamente le checklist di autovalutazione e implementa `analyse(text, requires)`, che espande `{verb, tense}` col coniugatore e cerca le forme nel testo | `assets/js/writing.js:4`, `:63` |
| F13 | `Audio2.listen` usa `SpeechRecognition` (Chrome, Edge, Safari); altrove `sttSupported` è falso e il progetto degrada allo scritto. `scoreSpeech` è una similarità di stringa sulla trascrizione | `assets/js/audio.js:254`, `:300` |
| F14 | 2657 mp3 per **28,09 MiB di byte**, 34 MB occupati su disco (blocchi da 4 KB su file da 11 KB medi). `.git`: 36,11 MiB in oggetti sciolti, nessun pack | `find`, `git count-objects -vH` |
| F15 | Il bitrate è **già** 32 kbps mono a 24 kHz: 33 kbps reali sul file campione, 1,68 s per 6,9 KB | `scripts/build_audio.py:44`, `ffprobe` |
| F16 | Il nome del file è il digest del **testo**, non del binario. Una ricodifica riscrive gli stessi 2657 percorsi con contenuto diverso | `scripts/build_audio.py:52`, `assets/js/audio.js:75` |
| F17 | 109 commit. `SW_VERSION` e `PRECACHE` sono mantenuti a mano | `git log`, `sw.js:27`, `:33` |
| F18 | `placement.js` costruisce il test di piazzamento **riusando** gli esercizi dei test di unità: zero frasi nuove, zero mp3 nuovi | `assets/js/placement.js:13` |
| F19 | Corpus attuale: 150 lezioni, 1514 esercizi, 12 testi di lettura per 85 frasi, 6 compiti di scrittura, 10 conversazioni, 21 coppie minime | `validate.mjs`, misura |

Due fatti meritano di essere letti insieme perché decidono da soli due delle cinque
domande. **F5 con F2**: il progetto non registra le ripetizioni e non può misurare
l'effetto di un cambio di algoritmo. **F7 con F16**: l'italiano parlato deve stare in
`core`, e il digest sul testo rende gratuita l'aggiunta di contenuto ma costosa la
riscrittura di contenuto esistente.

---

## Dipendenze fra le decisioni

Prima delle decisioni, perché cambia l'ordine in cui si leggono.

- **D2 e D4 stanno a monte di D5.** Sono le due che producono frasi italiane nuove, cioè
  mp3 nuovi. Il verdetto di D5 è condizionato alla loro dimensione, non indipendente.
- **D1 mette alla prova la politica di ADR-002** (nessun bump per l'additivo, bump
  riservato al cambiamento di significato). È il primo caso reale in cui la regola va
  applicata a un dubbio vero, e la risposta qui la conferma o la smentisce.
- **D1 confligge con ADR-002 punto 5** (nessuna struttura per evento senza tetto) se si
  decide di iniziare a raccogliere lo storico delle ripetizioni. La sezione D1 lo
  affronta invece di lasciarlo implicito.
- **D3 non genera audio** ma paga il moltiplicatore x5 di ADR-005 sulle glosse, non sulla
  mappa delle forme. È l'inversione che la sezione D3 usa per decidere.
- **D4 riusa il precedente di F18**: il piazzamento esiste già come modalità costruita
  su materiale esistente. Il simulatore d'esame ha lo stesso vincolo e la stessa via.

---

## ADR-006 - Sostituire SM-2 con FSRS

### Contesto

`Core.schedule` (F1) implementa SM-2: `ef` parte da 2.5, gli intervalli sono 1, 3, poi
`interval * ef`, con pavimento a 1.3. La stessa funzione serve due mazzi con orizzonti
diversi. FSRS modella memoria e difficoltà con due variabili (stabilità e difficoltà)
e una curva di dimenticanza esplicita, e nei confronti pubblici su collezioni Anki
ottiene un errore di calibrazione inferiore a SM-2.

Tre fatti cambiano la forma della domanda rispetto a come è posta.

**F3 dice che il quaderno errori non usa SM-2.** La carta viene cancellata a `reps >= 2`,
quindi percorre solo i due rami a intervallo fisso (1 giorno, 3 giorni). Il ramo
moltiplicativo non viene mai eseguito e `ef` viene scritto e mai letto. Sostituire
l'algoritmo in quel mazzo non cambia nulla di osservabile: quel mazzo non ha un algoritmo
di ripetizione, ha una scaletta a due gradini implementata con il codice di SM-2. La
domanda riguarda quindi **solo il mazzo del lessico**.

**F2 dice che lo storico non esiste.** I parametri FSRS ottimizzati si ricavano da una
regressione sul registro delle ripetizioni (identificativo della carta, istante,
valutazione, stato). Qui non c'è, e nemmeno il posto dove metterlo: ADR-002 punto 5
vieta le strutture che crescono per evento senza tetto.

**F5 dice che non lo sapremo mai.** Nessuna telemetria significa che l'effetto del cambio
di algoritmo sui nostri studenti non è misurabile né prima né dopo. Il guadagno resta
quello dei benchmark pubblici, su una popolazione diversa dalla nostra.

Ne segue una riformulazione onesta: **la scelta è fra SM-2 e FSRS con parametri di
default, per sempre.** Non è "FSRS ora, ottimizzazione poi": l'ottimizzazione richiede
uno storico che non abbiamo, un ottimizzatore che sarebbe la componente più complessa
del progetto, e un backend o un uso di CPU sul telefono dello studente che il progetto
non prevede.

### Passata 1, generazione

- A. Bump `SCHEMA` 2 -> 3 con migrazione scritta che converte le carte esistenti.
- B. Campi FSRS nuovi affiancati ai vecchi, schema fermo, carte che migrano pigramente alla prima ripetizione.
- C. Restare su SM-2 e non fare la feature.
- D. FSRS sul solo mazzo del lessico, quaderno errori invariato.
- E. Iniziare a raccogliere lo storico ora e decidere dopo, quando i dati esistono.
- F. Tenere SM-2 e correggerne i difetti noti: sfumatura casuale sull'intervallo, tetto massimo, trattamento delle ricadute.
- G. Adottare un'implementazione esistente (vendoring di `ts-fsrs`) invece di riscrivere le equazioni.
- H. Marcatore di algoritmo per carta, con i due schedulatori che convivono in permanenza.
- I. Rendere visibile la ritenzione desiderata come impostazione, e lasciare che sia lo studente a spostare la frequenza dei ripassi.

### Passata 2, valutazione

**H è un non-partente.** Due schedulatori mantenuti per sempre per un prodotto senza
telemetria significa due comportamenti che nessuno confronta, doppia superficie di test e
un campo di stato che decide quale codice legge la carta. È il costo massimo per il
beneficio minimo: la coesistenza serve a migrare, e la migrazione qui è già risolta da
B senza marcatore.

**E è un non-partente nella forma in cui si presenta.** Uno storico completo per 1410
carte cresce senza tetto ed è esattamente ciò che ADR-002 punto 5 vieta. Nella forma
limitata (anello delle ultime 500 ripetizioni, circa 12 KB) non serve a niente: è un
campione troppo piccolo per una regressione a 19-21 parametri, e comunque nessuno lo
raccoglierebbe da più di un utente. E resta comunque bloccato da F5: senza un canale di
ritorno, quei dati stanno sul telefono di chi li ha prodotti e non arrivano a chi
ottimizza. Raccogliere dati che nessuno leggerà è peso, non prudenza.

**G merita di essere considerato e va scartato per il vincolo, non per gusto.**
`ts-fsrs` è TypeScript compilato in ESM: usarlo sotto `file://` richiede un build a
UMD o IIFE, quindi o uno step di build (vietato) o un file compilato incollato nel
repository, che diventa codice che manuteniamo senza averlo scritto, va in `PRECACHE`
(F17) e nella lista degli script di `index.html`. Le equazioni di FSRS sono una decina e
si riscrivono in ottanta righe di ES5. Il rischio della riscrittura non è la lunghezza,
è la trascrizione: una costante sbagliata produce uno schedulatore che funziona, non
protesta e sbaglia in silenzio, cioè il difetto peggiore per un componente il cui output
nessuno può verificare a occhio. Questo rischio ha però una difesa esatta, ed è la
precondizione della decisione: vettori di prova generati una volta dall'implementazione di
riferimento (sequenza di valutazioni -> intervalli attesi), committati come dati e
verificati dalla suite. Con quei vettori la riscrittura è verificabile; senza, non lo è.

**F è la controproposta seria a tutto il resto.** SM-2 ha difetti noti e indipendenti da
FSRS: nessuna sfumatura casuale sugli intervalli, quindi le carte studiate insieme
ritornano insieme per sempre; nessun tetto, quindi un intervallo può finire a due anni su
una carta che lo studente non ha mai veramente saputo; e il ritorno a `interval = 0` dopo
una ricaduta butta via tutto ciò che la carta aveva accumulato. Tre correzioni da poche
righe l'una, senza campi nuovi, senza migrazione e senza schedulatore nuovo. Vale la pena
dirlo chiaro: **una parte del guadagno attribuito a FSRS in un progetto come questo viene
da queste tre cose, non dal modello di memoria.**

**A contro B.** ADR-002 stabilisce che il bump segnala che i dati vecchi letti dal codice
nuovo **mentono**. Si applica qui? Campo per campo: `due` resta un istante, `interval`
resta giorni, `reps` resta un conteggio, `lapses` resta un conteggio. L'unico campo che
perde senso è `ef`, e un campo che il codice nuovo ignora non mente: è zavorra, e la
zavorra non giustifica il rifiuto di ogni file esportato finora (F4 dice che la scala di
migrazioni funzionerebbe, ma su un file esportato **prima** che la scala esistesse il
rifiuto è comunque quello che accade). Quindi A non è dovuto, e B è disponibile.

Su B resta una scelta che cambia l'esperienza: cosa succede alla carta convertita.
Due modi.

| | Nascita pigra come nuova | Innesco da `interval` |
|---|---|---|
| `due` preservato | sì | sì |
| Prima ripetizione dopo la conversione | la carta riparte da capo | la carta continua dove era |
| Informazione persa | l'intera storia della carta | la difficoltà individuale, ricostruita da `lapses` |
| Righe di codice | zero | tre |

La seconda è migliore e costa quasi nulla, perché la stabilità di FSRS **è definita**
come l'intervallo al quale la probabilità di ricordare scende al 90%: se il vecchio
schedulatore puntava a una ritenzione simile, `stability := interval` è un innesco
difendibile, e la difficoltà iniziale si ricava da `lapses`. In entrambi i casi `due`
resta intatto, quindi **lo studente non vede alcuna discontinuità**: le carte tornano
quando dovevano tornare, e da lì in avanti l'algoritmo è l'altro.

**D è il ritaglio giusto dello scopo**, e non contraddice il commento di `core.js` che
dice di aver estratto `schedule` per non tenere due copie della stessa aritmetica. Due
copie della stessa aritmetica divergono in silenzio; due aritmetiche **diverse e
dichiarate**, con nomi diversi, no. E la seconda non è nemmeno un algoritmo: è la
scaletta a due gradini di F3, che conviene chiamare col suo nome invece di lasciarla
travestita da SM-2.

**I non è alternativo ed è la leva più grande sull'esperienza.** La ritenzione
desiderata è il solo parametro di FSRS che uno studente capisce ("più ripassi e ricordi
di più", "meno ripassi e ne dimentichi qualcuno"), ed è quello che sposta il carico
giornaliero in modo percepibile. Non è però una decisione strutturale: si aggiunge dopo,
se serve, e non cambia dove vivono i dati.

**C è la risposta corretta se la precondizione dei vettori di prova non si soddisfa.**
Non è un ripiego pigro: un FSRS trascritto a mano e non verificato è peggio di SM-2,
perché rivendica una qualità che nessuno ha controllato.

### Decisione

**D + B + F, con G scartato e una precondizione di verifica.**

1. FSRS sostituisce SM-2 **solo nel mazzo del lessico** (`state.srs`). Il quaderno errori
   conserva la scaletta a due gradini, che viene estratta in una funzione con il suo nome
   (`Errors.step`, intervalli 1 e 3 giorni) invece di continuare a passare da
   `Core.schedule`. F3 dice che questo non cambia un solo comportamento osservabile.
2. Implementazione riscritta in ES5 in `assets/js/fsrs.js`, funzione pura, senza stato e
   senza dipendenze. Il vettore dei parametri di default è una costante nominata, con
   accanto la versione dell'algoritmo da cui proviene.
3. **Precondizione bloccante**: vettori di prova generati una volta dall'implementazione
   di riferimento e committati come dati (`tests/fixtures/fsrs-vectors.json`), verificati
   in `tests/unit/`. Se questi vettori non si possono produrre, la decisione decade e vale
   C: si resta su SM-2 e si applica il solo punto 5.
4. Nessun bump di `SCHEMA`. Le carte guadagnano `s` e `d` come campi nuovi; `ef` resta
   scritto sulle carte vecchie e ignorato dal codice nuovo. `merge(defaultState(), ...)`
   fa già il lavoro (ADR-002 punto 1).
5. Conversione pigra con innesco alla prima ripetizione dopo l'aggiornamento:
   `s := max(1, interval)`, `d` ricavata da `lapses`, `due` intatto. Nessuna passata sullo
   stato all'avvio, nessuna discontinuità per lo studente.
6. Le tre correzioni di F che sono indipendenti dall'algoritmo si applicano comunque:
   sfumatura casuale deterministica sull'intervallo (dal digest della chiave della carta,
   così resta riproducibile), tetto massimo dichiarato, e ricaduta che riduce la
   stabilità invece di azzerarla.
7. **Nessun registro delle ripetizioni.** I parametri restano quelli di default e la
   ragione si scrive accanto alla costante: senza canale di ritorno (F5) i dati raccolti
   non arriverebbero a nessun ottimizzatore.

### Conseguenze

Diventa facile: intervalli più vicini al comportamento reale della memoria sulle carte
mature, e un solo punto dove vive la ritenzione desiderata se un giorno la si espone allo
studente (I). Diventa più difficile: il progetto acquisisce un secondo file di
schedulazione e due mazzi con regole diverse, e chi legge dovrà sapere quale mazzo ha in
mano. `ef` resta sulle carte vecchie come residuo, visibile a chi esporta lo stato, e va
detto nel commento accanto al campo invece di lasciarlo apparire come un campo attivo.

Costo accettato: il guadagno non è misurabile in questo prodotto (F5) e non lo sarà mai.
Si accetta sulla fiducia dei benchmark pubblici, e questo va scritto qui, non sottinteso.

### Cosa la renderebbe sbagliata

Il segnale più netto è la precondizione: se i vettori di prova non si producono, la
decisione è già sbagliata al punto 3 e vale C.

Secondo segnale, dopo il rilascio: se gli intervalli prodotti da FSRS sui primi cinque
gradini risultano indistinguibili da quelli di SM-2 su una carta simulata (differenza
inferiore a un giorno fino al quinto ripasso), il cambiamento non tocca la fascia in cui
vive quasi tutto il corso e la complessità non si ripaga. La verifica è una tabella di
simulazione, non richiede utenti e si può fare **prima** di scrivere il codice di
produzione: è il modo più economico di scoprire che questa decisione non serviva.

Terzo segnale: se qualcuno propone di raccogliere lo storico "intanto", la decisione va
riaperta come decisione di prodotto (serve un canale di ritorno, quindi un backend), non
aggirata aggiungendo un anello di eventi allo stato.

### Scartate

- **A (bump a schema 3)**: nessun campo esistente cambia significato, quindi il bump svaluterebbe il segnale e rifiuterebbe i file già esportati.
- **C (non fare la feature)**: non scartata, è il ripiego dichiarato se la precondizione del punto 3 non si soddisfa.
- **E (raccogliere lo storico)**: struttura per evento senza tetto, vietata da ADR-002, e inutile senza un canale di ritorno (F5).
- **G (vendoring di `ts-fsrs`)**: ESM da compilare, quindi build step vietato oppure codice compilato che manuteniamo senza averlo scritto.
- **H (marcatore per carta, due schedulatori permanenti)**: costo massimo per beneficio nullo; la coesistenza serve solo a migrare, e la migrazione è risolta dal punto 5.
- **I (ritenzione desiderata come impostazione)**: non scartata, rinviata: è una decisione di prodotto che non cambia dove vivono i dati.

---

## ADR-007 - Contenuto asimmetrico per lingua (falsi amici, interferenze L1)

### Contesto

Un falso amico è per definizione una relazione fra due lingue: "firma" inganna un
polacco (che legge "ditta"), "burro" uno spagnolo (che legge "asino"), "eventualmente" un
americano (che legge "alla fine"). L'insieme degli item **non è lo stesso** per lingua,
e non è nemmeno un sottoinsieme di un insieme comune: è un'intersezione parziale con
molte sovrapposizioni ("camera", "libreria", "parenti" ingannano in modo diverso quasi
tutti).

Il progetto presidia invece la simmetria. `parity.mjs` (F6) confronta la forma di ogni
overlay contro il polacco ed esce 1 alla differenza, perché gli overlay si fondono **per
indice** e un array più corto non è un errore di sintassi ma un buco silenzioso.

Esiste già un precedente di asimmetria accettata, ed è il modello da cui partire:
`FREE_FIELDS = ["theory"]` esenta `theory` dal confronto di forma, perché il `CLAUDE.md`
impone di **riscrivere** i blocchi `{contrast}` per ogni lingua invece di tradurli. Lì la
struttura resta comune e cambia solo la prosa. Nei falsi amici cambia l'item.

Il fatto che decide la collocazione è F7: `extract_strings.mjs` legge solo `data/core/`.
Una parola italiana che vive in un overlay **non ha e non può avere un mp3**. Un
esercizio sui falsi amici muto è possibile, ma il progetto ha già stabilito il contrario
per le coppie minime ("il nagranie è condizione di esistenza dell'esercizio"), e "firma"
va sentita almeno una volta.

### Passata 1, generazione

- A. Categoria esente dal confronto di forma, sul modello di `FREE_FIELDS`.
- B. Terza categoria di dati fuori dagli overlay: `data/l1/<lang>/interference.js`, uno per lingua, non confrontata con niente.
- C. Unione di tutti i falsi amici in `data/core/`, filtrata a runtime per lingua.
- D. Rovesciare il riferimento del cancello: per questa categoria il confronto non è contro il polacco ma contro la **dichiarazione** nello strato neutro.
- E. Falso amico come proprietà della voce di lessico già esistente: un campo in più nell'overlay del vocabolo.
- F. Un corso per lingua: replicare i dati e rinunciare all'architettura a due strati.
- G. Generare le interferenze automaticamente confrontando i cognati fra italiano e lingua dello studente.
- H. Nessun item nuovo: le interferenze restano dove sono già, cioè dentro i blocchi `{contrast}` e `{trap}` delle lezioni.

### Passata 2, valutazione

**F è un non-partente** e vale la pena tenerlo scritto: replicare il corso per lingua
significa che una correzione a una frase italiana va fatta cinque volte, che i mp3 si
moltiplicano per cinque e che la sesta lingua costa quanto le prime cinque. È la
soluzione che l'intera architettura del progetto esiste per evitare.

**G è un non-partente**, e per la stessa ragione per cui ADR-001 scartò l'euristica sui
tag: un falso amico dedotto automaticamente sbaglia in silenzio, e l'errore non produce un
difetto visibile ma una lezione sbagliata che lo studente attribuisce a se stesso.
L'interferenza L1 è un giudizio didattico, non un calcolo di distanza fra stringhe.

**H è onesto e insufficiente.** Le note `{contrast}` già fanno questo lavoro, per lingua
e riscritte a mano: è esattamente il posto giusto per l'osservazione. Quello che non
danno è l'esercizio: non si può ripassare un blocco di prosa, non entra nel quaderno
errori, non ha un tag e non ha una carta. La feature richiesta non è "spiegare
l'interferenza" (esiste), è "allenarla". H resta però il ripiego se il resto si rivela
troppo costoso, e va detto perché è un ripiego dignitoso.

**E è più interessante di quanto sembri e si riduce ad A.** Attaccare il falso amico
alla voce di lessico costa zero categorie nuove, l'italiano ha già il suo mp3 e il campo
sta naturalmente nell'overlay, cioè è già per lingua. Due limiti. Primo, un falso amico
non è sempre una voce del corso: "firma" potrebbe non stare fra le 1410 (F8), e
aggiungercelo per questo motivo distorce il lessico didattico. Secondo, e decisivo:
`parity.mjs` confronta le chiavi di ogni voce, quindi un campo presente in polacco e
assente in spagnolo **è già una differenza di forma** e il cancello scatta. Per far
funzionare E servirebbe comunque un'esenzione, cioè A. È un buon risultato dell'analisi:
E non è un'alternativa ad A, è un modo di implementarla.

**A è il modo più economico e il più pericoloso.** Esentare una categoria dal confronto
significa che da quel momento su quella categoria **nessun cancello dice più niente**:
un overlay tedesco che dimentica metà degli item passa in silenzio, esattamente il buco
che `parity.mjs` esiste per chiudere. Su `theory` l'esenzione è accettabile perché il
campo o c'è o non c'è (la presenza della chiave resta controllata) e perché la sua
assenza si vede aprendo la lezione. Su una lista di item l'assenza non si vede: la lista
più corta sembra una lista.

**B e C sono la stessa forma con due collocazioni**, e la differenza è l'audio (F7). In
B l'italiano vive dentro una directory di lingua, quindi resta fuori da
`extract_strings.mjs` e l'esercizio è muto, oppure si duplica l'italiano in `core` e si
riapre la doppia fonte di verità che ADR-001 ha già rifiutato. In C l'italiano vive dove
deve vivere, ha il suo mp3 come qualunque altra frase, passa da `validate.mjs` e
l'esercizio riusa i tipi esistenti.

C ha inoltre un vantaggio quantitativo: le sovrapposizioni. "Camera", "libreria",
"parenti", "morbido", "attualmente" ingannano gli studenti di più lingue con letture
diverse; nell'unione l'italiano sta scritto una volta e l'mp3 esiste una volta, mentre in
B lo stesso file esiste una volta per lingua che lo rivendica.

**D è il pezzo che rende C verificabile**, ed è la parte davvero nuova di questa
decisione. Se l'item in `core` dichiara **per quali lingue esiste** (`for: ["pl", "es"]`),
allora il cancello non ha più bisogno del polacco come riferimento: confronta l'overlay
di ogni lingua con l'insieme degli item che quella lingua rivendica. Una lingua che
rivendica un item e non lo spiega è un errore; una lingua che non lo rivendica non è un
buco. La simmetria non viene abbandonata, viene **riferita alla cosa giusta**: lo strato
neutro invece di una lingua fra le altre. Questa è la differenza fra un'esenzione (A, che
spegne il controllo) e un riferimento diverso (D, che lo mantiene).

Costo di D: `parity.mjs` guadagna un ramo per una categoria di dati, ed è la prima volta
che lo strumento sa qualcosa di specifico sul contenuto. Va scritto in modo che sia
evidente perché quella categoria è diversa, altrimenti la seconda eccezione arriverà
senza discussione.

### Decisione

**C + D.**

1. Nuovo file `data/core/interference.js`, strato neutro: **unione** di tutti gli item, in
   italiano, con la struttura che serve all'esercizio (parola o frase italiana, chiave di
   risposta, tag di `GRAMMAR_REF` o tag lessicale nuovo se `GRAMMAR_REF` non ha la voce).
2. Ogni item dichiara `for: ["pl", "es", ...]`, l'elenco delle lingue per cui è un falso
   amico. La dichiarazione sta in `core` perché è un fatto sulla coppia di lingue, non
   un testo da leggere.
3. Gli overlay `data/i18n/<lang>/interference.js` contengono, per gli item rivendicati da
   quella lingua e **solo** per quelli, la lettura sbagliata, la spiegazione e la nota
   contrastiva. Scritte per quella lingua, non tradotte, come i blocchi `{contrast}`.
4. `parity.mjs` guadagna un ramo per questa categoria: il riferimento non è il polacco ma
   il campo `for`. Item rivendicato e non spiegato: errore, uscita 1. Item non rivendicato:
   nessun controllo. Item spiegato ma non rivendicato: errore anche questo, perché è quasi
   sempre un `for` dimenticato.
5. L'esercizio riusa i tipi esistenti (ADR-003 punto C: emettere tipi esistenti eredita il
   validatore). Un falso amico si esercita bene come `mcq` sulla lettura corretta e come
   `trans` sulla frase che lo contiene.
6. L'audio esiste perché l'italiano è in `core` (F7): nessuna eccezione al percorso
   normale, `extract_strings.mjs` lo trova da solo.
7. `for` va nel filtro a runtime in un punto solo, accanto al caricamento della categoria.
   Nessuna vista deve ricordarsi di filtrare.

Ordine di grandezza atteso: 40-80 item nell'unione, di cui 25-50 rivendicati per lingua, e
una sovrapposizione stimata attorno a un terzo. **BASIS: inferred**, dall'esperienza
didattica, non da un elenco compilato: il numero va rifatto quando l'elenco esiste, ed è
un ingresso per D5.

### Conseguenze

Diventa facile: aggiungere una lingua senza toccare gli item esistenti (basta aggiungere
il codice al `for` di quelli che la riguardano e scrivere il suo overlay); avere l'audio
senza deroghe; riusare quaderno errori, tag e SRS senza codice nuovo. Diventa più
difficile: `parity.mjs` non è più uno strumento cieco al contenuto, e chi lo legge deve
capire perché una categoria ha una regola sua. Un item senza `for` è invisibile a
tutti e non lo segnala nessuno, quindi il campo va reso obbligatorio in `validate.mjs`.

Il rischio residuo è culturale più che tecnico: `for` invita a rivendicare troppo. Un
falso amico "valido per tutti" quasi sempre non è un falso amico, è un vocabolo
difficile. Va scritto nel commento in testa al file, dove chi aggiunge item lo legge.

### Cosa la renderebbe sbagliata

Se dopo aver compilato l'elenco reale la sovrapposizione fra lingue risulta trascurabile
(sotto il 10% degli item rivendicati da più di una lingua), l'unione non compra niente e
B diventa preferibile: cinque elenchi indipendenti sono più semplici da leggere di
un'unione con un campo di appartenenza. La misura si fa sull'elenco, prima di scrivere
codice.

Secondo segnale: se `for` comincia a comparire su categorie diverse dai falsi amici, il
progetto ha adottato un meccanismo generale di contenuto per lingua senza deciderlo, e va
deciso esplicitamente invece di lasciarlo diffondere.

### Scartate

- **A (categoria esente dal confronto)**: spegne il cancello proprio dove il buco è invisibile, cioè su una lista di item.
- **B (terza categoria per lingua)**: taglia fuori l'italiano da `extract_strings.mjs` (F7), quindi o l'esercizio è muto o si duplica l'italiano in `core`.
- **E (campo nell'overlay del lessico)**: si riduce ad A per il cancello, e forza nel lessico didattico voci che non ci starebbero.
- **F (un corso per lingua)**: è ciò che l'architettura a due strati esiste per evitare.
- **G (generazione automatica delle interferenze)**: sbaglia in silenzio su un dato didattico.
- **H (solo blocchi `{contrast}`)**: non scartata, è il ripiego se l'elenco si rivela troppo costoso da compilare. Spiega, ma non si esercita e non entra nel quaderno errori.

---

## ADR-008 - Consultazione di qualsiasi parola in un testo

### Contesto

Si vuole rendere cliccabile ogni parola di un testo di lettura, per avere la glossa e
creare una flashcard. Servono due cose diverse, che la domanda mette insieme e che
conviene separare subito.

**La mappa forma-lemma** ("andrei" -> "andare") è neutra rispetto alla lingua, quindi
vivrebbe in `core`, e si spedisce come `.js` caricato staticamente: sotto `file://` non
c'è nemmeno la compressione HTTP a mitigare il peso, si paga il byte pieno su disco e in
parsing.

**La glossa** è nella lingua dello studente, quindi paga il moltiplicatore x5 di ADR-005.
Ed è qui che sta il costo vero: un dizionario italiano di forme è un file grande ma si
scrive una volta, mentre 5000 glosse per cinque lingue sono 25000 stringhe che qualcuno
deve scrivere. **La parte difficile di questa feature non è la morfologia, è il
significato.**

Misure che orientano tutto il resto:

- F9: coniugando le 204 voci verbali del corso su 14 tempi si ottengono 12431 forme
  distinte **in 11 ms**, con zero byte spediti. Il motore esiste già ed è collaudato.
- F10: sui 12 testi attuali ci sono 521 token distinti; lessico monoparola, forme generate,
  regole di plurale e parole grammaticali ne coprono il **28%**, e il **50%** contando le
  parole interne alle voci multiparola.
- F8: 920 delle 1410 voci di lessico sono multiparola ("al banco", "il cliente"), quindi il
  lessico copre molte meno parole singole di quanto il conteggio suggerisca.
- F11: `glossIt` esiste già, è curato per testo, ed è il glossario che l'autore ha
  ritenuto necessario per quel testo.

### Passata 1, generazione

- A. Dizionario completo delle forme spedito interamente.
- B. Dizionario ridotto ai soli lemmi che il corso copre, con degrado dichiarato sulle parole fuori corso.
- C. Riduzione algoritmica: coniugatore esistente per i verbi, regole morfologiche per nomi e aggettivi, tabella chiusa per le parole grammaticali.
- D. Caricamento pigro del dizionario, solo quando si apre la biblioteca.
- E. Nessuna mappa: si estende `glossIt`, cioè la curatela per testo, invece di automatizzare.
- F. Ibrido chiuso sul corpus: regole prima, poi un elenco di eccezioni **generato a build time sulle sole parole dei nostri testi** e verificato da un cancello.
- G. Nessuna glossa: il clic crea la carta con la frase come contesto, e la traduzione la scrive lo studente.
- H. Consultazione all'indietro: si clicca e si vedono le **altre frasi del corso** in cui quella parola compare, invece di una traduzione.

### Passata 2, valutazione

**A si scarta sui numeri.** Un dizionario morfologico italiano copre l'ordine dei 500 mila
forme su 35 mila lemmi. In un file `.js` che assegna a una globale, anche con la
codifica più compatta (elenco di lemmi più forme come suffissi, senza spazi né
commenti) si parla di alcuni megabyte, con due aggravanti sotto `file://`: nessuna
compressione in transito, e un parsing sincrono che blocca l'avvio. Su un telefono è
il tempo di caricamento del corso che raddoppia per una funzione secondaria. D lo mitiga
ma non lo elimina, e comunque restano i megabyte nel repository, che è la materia di D5.

**B è il candidato che le misure uccidono.** Il 28% di F10 non è "degrado onesto": tre
parole su quattro non risponderebbero, e la funzione promette esattamente il contrario di
quello che fa ("clicca qualsiasi parola"). Anche nella variante generosa al 50%, una
parola su due che non risponde insegna allo studente a non cliccare. Vale la pena
notare **perché** è così basso, che è il punto meno ovvio della misura: il lessico ha
1410 voci ma 920 sono multiparola (F8), quindi le parole singole sono 490, e i testi di
lettura contengono per costruzione parole che il lessico non insegna, altrimenti non
sarebbero letture ma ripasso.

**C è metà della risposta e la metà che costa zero.** Il coniugatore copre il caso più
difficile della morfologia italiana (12431 forme, 11 ms, nessun byte spedito), e le
regole nominali sono quattro righe: `-o/-i/-a/-e`, `-a/-e`, `-e/-i`, più gli invariabili.
Da sola però C risolve la **forma**, non il significato: sapere che "bevono" viene da
"bere" non serve se "bere" non ha una glossa.

**F è il capovolgimento che rende la cosa fattibile**, ed è l'osservazione centrale di
questo ADR. La richiesta dice "qualsiasi parola", ma i testi sono **nostri**: l'insieme
delle parole da coprire non è l'italiano, sono le parole di `data/core/readings.js`, che
oggi sono 521 e crescono con il contenuto, non con la lingua. Un problema aperto diventa
un problema chiuso e misurabile, ed è esattamente lo stesso capovolgimento che il
progetto ha già fatto sull'audio: l'indice dei mp3 non copre l'italiano, copre le frasi
del corso, e si genera dal corpus.

Ne segue la forma giusta del cancello: uno script che estrae i token dei testi, li risolve
con le regole di C, ed **elenca quelli che restano scoperti**. Quell'elenco non è un
errore da bloccare, è la coda di lavoro dell'autore, ed è finita per costruzione.

**E resta autorevole dove c'è.** `glossIt` è la scelta dell'autore su quali parole
quel testo richiede: dove esiste, vince su qualunque automatismo, perché è contestuale
("dura" in quel testo è un verbo, non un aggettivo) mentre la mappa è ambigua.

**G è la parte onesta della decisione.** Per una parola che si risolve a un lemma senza
glossa, si può comunque creare la carta: la chiave della flashcard è **il solo italiano**
(migrazione v1 -> v2), quindi la carta è legittima anche senza traduzione, e il retro può
mostrare la frase di origine come contesto. Non si inventa una traduzione, non si mostra
un vuoto senza spiegazione, e si dice allo studente che la traduzione la può scrivere lui.
È lo stesso principio di `writing.js` (F12): si misura ciò che si sa misurare e si
dichiara il resto, invece di riempire il buco con qualcosa che sembra una risposta.

**H è fuori tema ma va tenuto in vista.** Mostrare le altre occorrenze della stessa
parola nel corso è una funzione diversa, quasi gratuita (il corpus è in memoria) e
didatticamente forte, perché insegna l'uso invece del corrispettivo. Non risolve la
richiesta e non va confuso con essa, ma è il complemento naturale della carta senza
glossa di G: se non ho una traduzione da darti, ho tre frasi in cui questa parola compare.

### Decisione

**C + F + E + G. Nessun dizionario spedito.**

1. Indice inverso costruito **a runtime, alla prima apertura della biblioteca**: le voci
   verbali del lessico passano dal coniugatore (F9), le voci nominali dalle regole di
   flessione, e le parole grammaticali da una tabella chiusa in `core` (circa 150 voci,
   neutra rispetto alla lingua). Zero byte spediti, costo misurato 11 ms in node.
2. Ordine di risoluzione, dal più autorevole al meno: `glossIt` del testo corrente,
   lessico del corso, indice inverso delle forme, nessuna risposta.
3. Nuovo controllo in `validate.mjs` o script accanto: estrae i token dei testi di lettura,
   li risolve con le regole di 1, e **stampa quelli scoperti**. Avviso, non errore: è la
   coda di lavoro dell'autore, non un difetto del codice. Il numero va nel resoconto
   accanto alle altre statistiche, così si vede se cresce.
4. Parola risolta a un lemma senza glossa: la carta si crea lo stesso, con la frase di
   origine come contesto e il campo della traduzione vuoto e modificabile dallo studente.
   Nessuna traduzione inventata.
5. Parola non risolta: si dice che non è nel corso e si offre comunque la creazione della
   carta sulla forma così com'è. Non si finge un lemma.
6. Nessun dizionario esterno entra nel repository. Se un giorno la copertura non basta, la
   strada da riaprire è A **ridotto al corpus** (un elenco generato dalle nostre parole
   scoperte, non un dizionario dell'italiano), che è F portato al passo successivo.

### Conseguenze

Diventa facile: la funzione parte senza aggiungere un solo byte al caricamento; il
coniugatore acquista un secondo uso, quindi migliorarlo migliora due cose; la copertura
diventa un numero visibile nel resoconto invece di una sensazione.

Diventa più difficile: la copertura reale sarà bassa all'inizio (F10 dice 28-50% sui
testi attuali) e cresce solo con la curatela, quindi la funzione va **presentata per
quello che è**, cioè una consultazione del corso, non un dizionario. Il nome della
funzione in interfaccia deve dirlo, perché è lì che si crea o si distrugge la fiducia.

Ambiguità accettata: una forma che risale a più lemmi ("porta" da "portare" o "porta"
sostantivo) verrà risolta con una preferenza dichiarata e potrà sbagliare. Dove sbaglia
in modo fastidioso, la correzione è `glossIt` sul testo, che ha la precedenza.

### Cosa la renderebbe sbagliata

Se dopo una tornata di curatela dei `glossIt` la quota di token scoperti sui testi resta
sopra il 40%, la consultazione non è una funzione ma una promessa non mantenuta, e le
alternative tornano in gioco nell'ordine F-ridotto-al-corpus, poi A con caricamento pigro.
La misura esiste già come punto 3 e non richiede utenti.

Secondo segnale: se la costruzione dell'indice a runtime supera i 200 ms su un telefono
reale (le misure di F9 sono in node su desktop, **BASIS: inferred** per il browser), va
spostata fuori dal percorso di apertura della biblioteca, non ottimizzata sul posto.

### Scartate

- **A (dizionario completo spedito)**: megabyte non comprimibili sotto `file://` per una funzione secondaria, e parsing sincrono all'avvio.
- **B (dizionario ridotto ai lemmi del corso)**: misurato al 28% di copertura (50% nella variante generosa) sui testi del progetto; promette "qualsiasi parola" e ne risolve una su tre.
- **D (caricamento pigro del dizionario)**: mitiga il tempo di avvio ma non il peso nel repository, e non serve se il dizionario non esiste.
- **H (occorrenze nel corpus invece della traduzione)**: non scartata, è una funzione diversa e il complemento naturale del punto 4. Va decisa a parte.

---

## ADR-009 - Simulatore d'esame CILS B1 Cittadinanza senza esaminatore

### Contesto

L'esame CILS B1 Cittadinanza è il requisito linguistico per la domanda di cittadinanza
italiana. Chi lo prepara ha una scadenza vera e una decisione da prendere (iscriversi o
no), e questo cambia la natura dell'errore: un punteggio inventato che dice "saresti
promosso" non è un difetto di prodotto, è un danno.

La struttura dell'esame (numero e durata delle prove, soglie di superamento per prova,
peso relativo) è **contenuto da verificare sulla fonte ufficiale** dell'Università per
Stranieri di Siena, non una cosa che questa architettura decide.
**BASIS: unknown**: nessun documento ufficiale è stato consultato nel produrre questo
ADR, e i parametri vanno presi da lì prima di scrivere il contenuto.

Ciò che l'architettura decide è che **forma ha il risultato**, ed è lì che sta la
domanda vera: senza backend nessuno valuta la produzione orale, e la produzione scritta è
valutabile solo in parte.

Cosa esiste già, e va riusato invece di reinventato:

- F12: `Writing.analyse(text, requires)` dichiara le costruzioni richieste, le espande col
  coniugatore e le cerca nel testo. Restituisce un **rilevamento**, non un voto: "questo
  l'hai usato, questo no".
- F13: `Audio2.listen` esiste ma solo su Chrome, Edge e Safari; `scoreSpeech` è una
  similarità di stringa sulla trascrizione.
- F18: `placement.js` costruisce il piazzamento riusando gli esercizi dei test di unità,
  senza una frase nuova e senza un mp3 nuovo. È il precedente diretto.
- F12 di nuovo, per la posizione dichiarata: le checklist di autovalutazione sono rifiutate
  perché "lo studente risponde sì a se stesso e l'esercizio non lascia dietro di sé una
  sola informazione".

### Passata 1, generazione

- A. Simulazione completa con punteggio su tutte e quattro le prove.
- B. Solo le due prove valutabili a macchina (ascolto e lettura) con punteggio reale; le produzioni fuori dalla modalità esame.
- C. Quattro prove, due verdetti di specie diversa: punteggio sulle prove chiuse, rilevamento sulle produzioni, esito complessivo dichiarato incompleto.
- D. Modalità "condizioni d'esame" senza alcun punteggio: cronometro, nessuna pausa, nessun aiuto. Il valore è l'allenamento alle condizioni.
- E. Produzione orale registrata e riascoltata accanto al modello: confronto strutturato invece di autovalutazione.
- F. Esportazione del compito scritto e della registrazione in un pacchetto da consegnare a un insegnante umano.
- G. Rubrica di autovalutazione a checklist.
- H. Punteggio parziale con la lacuna dichiarata nel numero stesso ("22/30 sulle prove chiuse; sulle due produzioni questo corso non dà un voto").
- I. Trascrizione della prova orale data in pasto a `Writing.analyse`: le costruzioni richieste diventano misurabili anche a voce, dove il riconoscimento c'è.

### Passata 2, valutazione

**G è già rifiutato dal progetto** (F12) e la ragione vale qui più che altrove: sotto
esame, con una scadenza vera, lo studente ha il massimo incentivo a rispondersi di sì.
Resta scritto per non riproporlo.

**A è il non-partente pericoloso.** Un punteggio complessivo su quattro prove di cui due
non sono valutate è un numero che sembra un verdetto. Lo studente lo userà per decidere
se iscriversi, e la posta è una pratica di cittadinanza. Non è un problema di
imprecisione: è un'affermazione falsa sulla propria capacità di valutare, cioè
esattamente ciò che tutto il resto del progetto evita.

**B è onesto e amputato.** Se le produzioni escono dalla modalità esame, quello che resta
non è un simulatore: è il corso con un cronometro. E la parte che spaventa di più chi si
prepara (scrivere una mail in venti minuti, parlare per tre minuti su una traccia) è
proprio quella che B toglie.

**D è più forte di quanto sembri.** Buona parte del valore di una simulazione non è il
voto: è scoprire che venti minuti sono pochi, che si perde tempo a rileggere, che
l'ascolto passa due volte e basta. Sono cose che si imparano **facendo**, e nessuna di
esse richiede un valutatore. D da solo però rinuncia a dire qualsiasi cosa sul risultato,
anche dove il risultato è calcolabile senza ambiguità (ascolto e lettura sono a risposta
chiusa).

**C è la sintesi corretta**, a una condizione: che i due verdetti non si sommino mai.
Punteggio sulle prove chiuse, rilevamento sulle produzioni, e nessun numero che li
attraversi. La forma dell'esito non è una pagella, è un **referto**: due sezioni con
statuto diverso, dichiarato.

**H è la formulazione del punto precedente**, e va scritta con cura perché è l'unico
posto in cui il prodotto parla della cittadinanza: dire "sulle due produzioni questo corso
non ti può dare un voto, e nessun simulatore te lo può dare" è informazione utile, non
una scusa. Il complemento naturale è F.

**E e I sono il contenuto della sezione di rilevamento sull'orale**, e insieme fanno
qualcosa che una checklist non fa. Tre cose sono misurabili senza esaminatore, e sono
esattamente tre:

| Cosa | Come si misura | Quando non si può |
|---|---|---|
| Hai parlato per il tempo richiesto | durata della registrazione | mai: `MediaRecorder` funziona anche offline |
| Hai usato le costruzioni richieste | trascrizione passata a `Writing.analyse` (I) | dove `sttSupported` è falso (F13): si dichiara non rilevato |
| Come suona rispetto al modello | riascolto affiancato al modello (E) | mai, ma non produce un numero |

Quello che resta fuori (coerenza, adeguatezza al compito, ricchezza lessicale) resta fuori
e si dice. **I è il riuso più economico di tutto questo ADR**: la traccia orale dichiara
`requires` come già fa un compito scritto (F12), e la trascrizione entra nella stessa
funzione. Zero codice nuovo di valutazione.

Nota importante su F13: il riconoscimento vocale di Chrome lavora inviando l'audio a un
servizio remoto, quindi **in modalità offline la seconda riga della tabella non è
disponibile** anche su un browser che la supporta. La registrazione e il riascolto no:
quelli funzionano sempre. La modalità esame deve quindi degradare per riga, non
rifiutarsi di partire.

**F è cheap e chiude il cerchio.** Il valutatore umano esiste, semplicemente non è nel
prodotto. Esportare la prova (testo scritto, tracce, registrazione) in un pacchetto che lo
studente manda a un insegnante costa una vista di stampa e un download, riusa il
meccanismo di esportazione dello stato già presente, e trasforma "non lo sappiamo
valutare" in "ecco cosa serve a chi lo sa fare".

Il costo che nessuno ha ancora nominato: **una prova d'ascolto B1 richiede audio nuovo e
lungo**, non riusabile dalle lezioni, perché l'esame usa monologhi e dialoghi radiofonici
che al corso non servono. F18 dice che il piazzamento ha evitato questo costo riusando i
test di unità; qui non si può, ed è il principale ingresso di D5.

### Decisione

**C + D + E + I + F, con H come forma dell'esito. Nessun punteggio aggregato.**

1. La modalità esame ha le quattro prove, con le condizioni reali: cronometro per prova,
   ascolto riproducibile il numero di volte previsto dall'esame e non di più, nessun aiuto,
   nessuna correzione durante la prova.
2. L'esito è un **referto in due sezioni**, e la separazione è strutturale, non grafica:
   - *prove chiuse* (ascolto, lettura): punteggio reale, confrontato con la soglia ufficiale;
   - *produzioni* (scritta, orale): rilevamento, mai un voto. Cosa è stato richiesto, cosa
     è stato trovato, quanto è durata la prova, quante parole sono state scritte.
3. Nessun numero attraversa le due sezioni e non esiste un "saresti promosso". Al posto
   dell'aggregato compare la frase che dichiara la lacuna (H), scritta una volta e sempre
   presente accanto al referto.
4. La produzione scritta passa da `Writing.analyse` (F12) con i `requires` della traccia.
   Nessuna funzione di valutazione nuova.
5. La produzione orale: registrazione con `MediaRecorder`, durata misurata, riascolto
   affiancato al modello (E). Dove `sttSupported` è vero e c'è rete, la trascrizione passa
   dallo **stesso** `Writing.analyse` (I). Dove non lo è, quella riga del referto dice
   "non rilevato su questo browser", non "non superato".
6. Esportazione della prova per un valutatore umano (F): testo, tracce, registrazione,
   referto meccanico.
7. `scoreSpeech` **non** si usa in modalità esame. Una similarità di stringa su una
   trascrizione è adeguata a "ripeti questa frase" (dove esiste un bersaglio) e non
   significa niente su una produzione libera, dove non c'è bersaglio.
8. Il materiale d'ascolto è contenuto autoriale nuovo in `data/core/`, con i suoi mp3.
   Non è un generatore e non è riuso: è la voce di costo che entra in ADR-010.

### Conseguenze

Diventa facile: allenare le condizioni d'esame, che è metà del problema di chi si
prepara; riusare `Writing.analyse` e il coniugatore su una prova nuova senza scrivere
valutatori; dire con precisione cosa il corso sa e non sa misurare.

Diventa più difficile: il referto non risponde alla domanda che lo studente ha davvero in
testa ("ce la faccio?"), e questa insoddisfazione è progettata, non accidentale. Va gestita
con il punto 6, che indica dove la risposta si può ottenere, altrimenti diventa la ragione
per cui qualcuno propone di aggiungere un punteggio finto.

Costo accettato: la prova d'ascolto è il primo contenuto del progetto che richiede audio
lungo e non riusabile, e ne quantifica il peso in D5.

### Cosa la renderebbe sbagliata

Se il referto senza voto risulta illeggibile a chi lo usa (segnale concreto: la domanda
"quindi passo o no?" è la prima reazione di ogni lettore a cui lo si mostra), il problema
non è l'onestà ma la presentazione, e va rifatta la sezione delle prove chiuse in modo
che il verdetto **calcolabile** sia inequivocabile e la lacuna sia esplicitamente sulle
altre due. Non è un motivo per aggiungere un aggregato.

Secondo segnale: se il costo dell'audio d'ascolto (punto 8) porta il corpus oltre le
soglie di ADR-010, la decisione da rivedere è il numero di prove complete offerte, non la
strategia dell'audio.

Terzo segnale: se la struttura ufficiale dell'esame risulta diversa da quella assunta
(quattro prove separate con soglia per prova), i punti 1 e 2 vanno riscritti sui parametri
veri, e quel controllo va fatto **prima** di scrivere contenuto.

### Scartate

- **A (punteggio completo su quattro prove)**: presenta come verdetto un numero che include due prove non valutate, su una decisione con conseguenze legali.
- **B (solo le due prove chiuse)**: toglie dalla simulazione proprio la parte che chi si prepara teme di più.
- **G (checklist di autovalutazione)**: già rifiutata dal progetto, e sotto esame l'incentivo a rispondersi di sì è massimo.
- **H come alternativa**: non è un'alternativa, è la forma che assume l'esito in C.

---

## ADR-010 - Crescita del peso del repository

### Contesto

Ogni frase italiana pronunciata richiede un mp3 tracciato in git. Il nome è il digest
FNV-1a del **testo** (F16), quindi le frasi immutate non rigenerano niente e la storia non
si allunga per il contenuto che resta fermo. La storia però non si accorcia mai.

Misure di oggi (F14, F15, F17):

| Grandezza | Valore |
|---|---|
| File mp3 | 2657 |
| Byte di audio | 28,09 MiB |
| Occupazione su disco | 34 MB (blocchi da 4 KB su file da 11 KB medi) |
| Oggetti git sciolti | 36,11 MiB, nessun pack |
| Commit | 109 |
| Bitrate | già 32 kbps mono a 24 kHz |

Il clone completo oggi vale quindi circa 60 MB fra copia di lavoro e storia, e la storia
non contiene riscritture: la dimensione degli oggetti è sostanzialmente quella dei file
presenti. Le due funzioni più grosse (biblioteca di testi e prove d'esame, ADR-009 punto
8) generano il grosso delle frasi nuove e possono raddoppiare il conto.

I limiti dichiarati da GitHub Pages: 1 GB per il sito pubblicato, 100 GB al mese di banda
consigliata. **BASIS: inferred**, dai valori pubblicamente documentati, non verificati oggi
sulla documentazione.

### Passata 1, generazione

- A. Non fare nulla.
- B. Audio in un repository separato, agganciato come submodule.
- C. Audio come pacchetto scaricabile (release asset), fuori dal versionamento.
- D. Bitrate più basso.
- E. Git LFS.
- F. CDN esterno o hosting separato per la sola cartella `audio/`.
- G. Cambiare lo schema dei nomi includendo il digest del **binario** oltre a quello del testo, così una ricodifica produce file nuovi invece di riscrivere quelli esistenti.
- H. Potatura degli mp3 orfani dalla copia di lavoro, cioè quelli non più presenti in `data/audio-index.js`.
- I. Un solo mp3 per testo lungo invece di uno per frase.
- L. Nessun intervento sulla dimensione, ma una soglia scritta che dice quando riaprire la questione.

### Passata 2, valutazione

**D è la trappola, e i numeri la mostrano.** Il bitrate è già a 32 kbps mono (F15):
scendere ancora degrada una voce che è il fondamento del prodotto, visto che l'intera
scelta dei registrazioni nasce dal rifiuto della sintesi di sistema. E c'è un secondo effetto,
più grave e meno visibile: poiché il nome del file è il digest del **testo** (F16), una
ricodifica riscrive gli stessi 2657 percorsi con contenuto diverso. In git significa 2657
blob nuovi che si **aggiungono** ai vecchi, che restano nella storia per sempre. Una
ricodifica per "risparmiare spazio" aggiunge quindi altri 20-25 MiB al clone e non ne
toglie nessuno. **Non è un'ottimizzazione con un guadagno piccolo: è un peggioramento.**

**G è la correzione teorica a quel difetto** (includere il digest del binario nel nome
rende ogni ricodifica un file nuovo, e permette di potare i vecchi), ma paga un prezzo
grosso: il nome non sarebbe più calcolabile dal testo, quindi `audio.js` non potrebbe più
decidere in modo sincrono se un mp3 esiste, e l'intero meccanismo dell'indice binario e
dello sweep del service worker (ADR-004 punto 5) cambierebbe forma. Si paga la
riscrivibilità dell'audio, che nessuno ha chiesto.

**E è da escludere con decisione.** GitHub Pages non risolve i puntatori LFS: il sito
pubblicato servirebbe il file di puntamento al posto dell'mp3, quindi l'audio smetterebbe
di funzionare esattamente nel canale per cui esiste il deploy. In più LFS ha una quota di
banda propria molto più stretta di quella di Pages.
**BASIS: inferred**, da comportamento documentato di Pages e LFS; da verificare prima di
agire, ma il rischio non giustifica il tentativo.

**C rompe un requisito.** Se l'audio non è nel repository, "clona e apri `index.html`" non
funziona più: serve un passo di download manuale, cioè uno step di build travestito. E la
copia da `file://` è un requisito dichiarato, non una comodità.

**B non lo rompe.** Un submodule resta contenuto sul disco dopo `git clone --recursive` e
finisce nel sito pubblicato se il workflow di deploy fa il checkout ricorsivo. Quello che
compra è che il repository principale (codice, dati, storia delle revisioni) resta leggero
e clonabile da solo, e che la storia dell'audio vive separata da quella del codice.
Quello che costa è un passo in più per ogni contributore e un modo nuovo di sbagliare
(sottomodulo non inizializzato, puntatore non aggiornato, audio disallineato dall'indice).
Con 109 commit e un solo autore, il costo è maggiore del guadagno **oggi**.

**F risolve la banda ma non la dimensione**, e introduce una dipendenza esterna a runtime
in un progetto che ne ha zero. Va tenuto come risposta al problema di banda, se il problema
di banda si presenta, e non come risposta al problema di dimensione, che non c'è.

**I è già stato deciso in senso contrario, con una buona ragione** scritta in testa a
`readings.js`: un mp3 per frase serve il dettato e l'ascolto continuo con lo stesso file, e
un unico file per il testo intero peserebbe di più e non servirebbe il dettato. Resta
scritto per non riaprirlo.

**H è piccolo, corretto e mancante.** Il service worker ha lo sweep degli orfani contro
`AUDIO_INDEX` (ADR-004 punto 5); il repository non ha niente di equivalente, quindi un mp3
la cui frase è stata corretta resta nella copia di lavoro per sempre e continua a essere
distribuito e servito. La storia non si pulisce (e non deve), ma la copia di lavoro sì,
e costa un'opzione su `build_audio.py`.

**A contro L.** Il margine è effettivamente largo: 60 MB oggi, 120 MB nello scenario di
raddoppio, contro 1 GB di limite. Un intervento adesso sarebbe complessità comprata contro
un problema che non esiste, cioè esattamente ciò che il progetto rifiuta altrove. Ma "non
fare nulla" senza una soglia non è una decisione, è un'omissione che nessuno rivedrà,
perché la crescita è lenta e nessuno guarda. La differenza fra A e L è tutta qui.

C'è inoltre una grandezza che non è la dimensione e che si muove più in fretta: **la
banda**. Il pulsante "disponibile offline" di ADR-004 punto 7 fa scaricare a un singolo
studente decine di MB in un colpo. A 60 MB per precarico completo, i 100 GB al mese si
esauriscono attorno ai 1700 precarichi. È molto per un progetto personale e poco per un
singolo articolo che circola. **Il vincolo che morderà per primo è la banda, non lo
spazio**, e questo cambia quale intervento sarebbe quello giusto quando servirà: F o B,
non D.

### Decisione

**A + L + H. Nessun intervento sulla strategia, tre presidi che costano quasi nulla.**

1. Nessun cambiamento a formato, bitrate, collocazione o nomenclatura dell'audio. Il
   margine è di un fattore 8 sulla dimensione, e il costo di ogni alternativa è
   immediato mentre il beneficio è ipotetico.
2. **Divieto scritto di ricodifica in blocco.** Ricodificare l'audio esistente riscrive
   2657 percorsi (F16) e aggiunge una copia intera alla storia senza toglierne nessuna. Se
   un giorno il formato dovesse cambiare davvero, si fa insieme a una riscrittura della
   storia, come operazione dichiarata, mai come ottimizzazione incrementale. Questa riga
   va in `CLAUDE.md` accanto alla regola sull'hash.
3. **Soglie che riaprono la questione**, scritte perché qualcuno le possa controllare
   senza aver letto questo documento:
   - sito pubblicato oltre **300 MB**: si valuta B (submodule);
   - avviso di banda da GitHub, oppure precarico offline completo oltre **100 MB**: si valuta
     F (hosting separato per `audio/`) e si rivede la granularità del pulsante offline;
   - oltre **8000 mp3**: si rimisura tutto, perché a quel punto anche il tempo di checkout
     e l'occupazione a blocchi (F14: 20% di scarto fra byte e disco) diventano rilevanti.
   Il controllo è due comandi e va aggiunto al resoconto di `build_audio.py --dry-run`,
   che già dice quanti file mancano e può dire quanti ce ne sono e quanto pesano.
4. **Potatura degli orfani nella copia di lavoro** (H): opzione `--prune` su
   `build_audio.py` che elimina i file non presenti in `data/audio-index.js`. La storia non
   cambia, la copia di lavoro e il sito pubblicato restano puliti, e gli orfani smettono di
   essere serviti e messi in cache.
5. Se e quando servirà muovere l'audio, la successione è decisa qui e non va ridiscussa
   da capo: **B** (submodule, preserva `file://` e il deploy), poi **F** (hosting separato,
   se il problema è la banda e non lo spazio). Mai **C**, mai **E**, mai **D**.

### Conseguenze

Diventa facile: continuare a lavorare come oggi, aggiungendo contenuto senza pensare al
peso, che è esattamente quello che serve nella fase in cui il corso cresce.

Diventa più difficile: niente, ed è il motivo per cui è la risposta giusta. L'unico
costo è che le soglie del punto 3 vanno controllate da qualcuno, e la mitigazione è
metterle nell'output di uno script che si esegue comunque ad ogni aggiunta di contenuto.

Rischio accettato: se la banda si esaurisce, il sito smette di servire gli mp3 fino al
mese successivo, e lo scopriremmo da un avviso. È un guasto reversibile e non perde dati,
il che è precisamente ciò che rende accettabile il "non fare nulla".

### Cosa la renderebbe sbagliata

Le tre soglie del punto 3 sono i segnali, e sono scritte apposta per essere verificabili
senza giudizio. Un quarto segnale, meno ovvio: se qualcuno propone di **ricodificare**
l'audio per una qualsiasi ragione (voce nuova, formato nuovo, qualità diversa), la
decisione va riaperta prima di eseguire, perché quella è l'unica operazione che
raddoppia la storia in un colpo solo, e nessuno se ne accorgerebbe finché il clone non
diventa lento.

### Scartate

- **C (release asset)**: rompe "clona e apri", cioè il requisito `file://`.
- **D (bitrate più basso)**: già a 32 kbps; degrada la voce e, per F16, **aggiunge** una copia intera alla storia invece di ridurla.
- **E (Git LFS)**: GitHub Pages servirebbe i puntatori al posto degli mp3, e la quota di banda LFS è più stretta di quella di Pages.
- **G (digest del binario nel nome)**: rende il nome non calcolabile dal testo, e con esso saltano la decisione sincrona di `audio.js` e lo sweep del service worker.
- **I (un mp3 per testo)**: già deciso in senso contrario in `readings.js`, con la ragione scritta (dettato e ascolto continuo dallo stesso file).
- **B, F**: non scartate, rinviate con l'ordine di applicazione fissato al punto 5.

---

## Tensioni fra le decisioni

Punti in cui una raccomandazione ne rende un'altra più costosa, o in cui due decisioni si
appoggiano l'una all'altra. Nessuno è bloccante.

1. **ADR-006 con ADR-002.** La decisione di non bumpare lo schema per FSRS è il primo caso
   reale in cui la politica di ADR-002 viene applicata a un dubbio vero, e regge solo grazie
   all'analisi campo per campo: nessun campo esistente cambia significato, `ef` diventa
   zavorra. Se qualcuno un giorno decidesse di **riutilizzare** `ef` per contenere la
   difficoltà FSRS invece di aggiungere `d`, quella sarebbe una reinterpretazione e il
   bump tornerebbe dovuto. La differenza è sottile e va nominata nel codice.

2. **ADR-006 con ADR-002 punto 5.** La tentazione di raccogliere lo storico delle ripetizioni
   "per ottimizzare dopo" è esattamente la struttura per evento senza tetto che ADR-002
   vieta. Qui è respinta due volte: per la regola, e perché senza canale di ritorno (F5)
   i dati non arriverebbero a nessuno. Se un giorno arrivasse un backend, entrambe le
   ragioni cadono insieme, ed è bene saperlo.

3. **ADR-007 con ADR-005.** I falsi amici sono la prima categoria in cui l'asimmetria è
   nel **contenuto**, non nella prosa. Cade sotto la regola 5 di ADR-005 (rilascio per
   lingua ammesso e visibile) e non sotto la regola 4 (cancello duro sulla cornice). Il
   campo `for` è il meccanismo che rende quel rilascio dichiarato invece che silenzioso.

4. **ADR-007 e ADR-009 con ADR-010.** Sono le due decisioni che producono frasi italiane
   nuove, quindi mp3 nuovi. L'ordine di grandezza atteso, **BASIS: inferred**: falsi amici
   40-80 item, quindi meno di 200 frasi; prove d'esame, se si producono tre sessioni
   complete, alcune centinaia di frasi di ascolto più lunghe della media. Il totale resta
   sotto il raddoppio ipotizzato in ADR-010, e le soglie del punto 3 restano valide. Se le
   sessioni d'esame diventassero dieci, il conto va rifatto.

5. **ADR-008 con ADR-005.** La consultazione non paga il moltiplicatore x5 dove sembra
   (la mappa delle forme è neutra e non si spedisce affatto), ma lo paga sulle glosse. La
   decisione di non inventare una traduzione mancante è ciò che tiene il costo dentro la
   curatela esistente invece di aprire un fronte di 25000 stringhe.

6. **ADR-008 con ADR-006.** Entrambe aumentano il numero di flashcard create: la
   consultazione perché rende la creazione a un clic, FSRS perché è il mazzo su cui
   agisce. Il tetto di 1410 carte assunto in ADR-002 era il tetto del **corso**; una carta
   creata da un testo può stare fuori dal lessico, quindi il mazzo non è più limitato dal
   contenuto. Non è una crescita per evento (una parola cliccata due volte è una carta
   sola, la chiave è il solo italiano), ma il tetto strutturale va ricalcolato sul corpus
   dei testi invece che sul lessico, e la potatura di ADR-002 punto 4 resta la difesa.

7. **ADR-009 con ADR-004.** Le prove d'esame sono contenuto pesante e devono funzionare
   offline: il pulsante "disponibile offline" acquista un terzo caso oltre a lezioni e
   livelli, ed è quello con la stima di dimensione più delicata, perché una sessione
   d'esame è inutile a metà.

8. **ADR-009 con `file://`.** La registrazione della prova orale funziona ovunque, ma il
   riconoscimento vocale richiede rete anche dove il browser lo supporta (F13). Il referto
   quindi degrada per riga, e questa è la prima funzione del progetto in cui l'apertura da
   disco non è equivalente all'apertura da rete. Va detto all'utente in quel punto, non
   nella documentazione.
