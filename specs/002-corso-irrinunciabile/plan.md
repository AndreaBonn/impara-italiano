# 002 - Corso irrinunciabile: piano di implementazione

Stato: proposto
Versione: 1.0
Data: 2026-09-09
Scope: 9 feature (O1-O9) più il fix di pubblicazione, su LinguAI "versione-statica"

Precedente: `specs/001-motore-adattivo/` (piano 2.0, implementato e chiuso). Questo programma
parte da lì e ne eredita i vincoli, i gate e la suite di test. La differenza di natura fra i
due va detta subito: il 001 era per l'80% ingegneria, questo è per il 42% scrittura di
italiano e registrazione audio. La § 7 tiene le due colonne separate e la § 9 separa i rischi
di contenuto da quelli di codice, perché è l'unico modo perché il totale non menta.

Questo piano lascia aperte sei decisioni architetturali (§ 3.4, marcate **ADR**) che riceve
in parallelo dall'agent `architect`. La struttura è fatta perché le sue conclusioni entrino
senza rifare il piano: ogni decisione aperta è isolata in un sub-task e in una riga della
tabella file.

---

## 0. Fatti misurati sul codebase (baseline)

Tutto quanto segue è stato letto o eseguito il 2026-09-09 su `main` a `889413a`, non ricordato.
Dove il fatto non è stato osservato, la riga lo dice.

| Fatto | Valore | BASIS |
|---|---|---|
| Contenuto del corso | 32 unità, 150 lezioni, 1514 esercizi, 1410 voci di lessico, 10 conversazioni, 42 voci di grammatica | `measured` - `node scripts/validate.mjs`, exit 0 |
| Distribuzione tipi | fill 370, mcq 353, speak 150, listen 144, trans 122, cloze 120, match 82, order 72, conj 64, multi 27, dialogue 20, gender 14, **truefalse 12** | `measured` - stesso output |
| `truefalse` non è più assente | 13 tipi presenti nei dati, non 12. Le 12 occorrenze arrivano dalle domande di `data/core/readings.js`, non dalle lezioni | `measured` - output di `validate.mjs` più lettura di `readings.js:38` |
| Audio | 2657 file mp3, 34 MB, media 13,4 KB/file | `measured` - `find audio -name '*.mp3' \| wc -l`, `du -sh audio` |
| Peso della history | `.git` 38 MB. Gli mp3 sono tracciati: la history non si accorcia | `measured` - `du -sh .git` |
| Dati | `data/core` 344 KB, `data/i18n` 3,3 MB (5 lingue, 600-656 KB ciascuna) | `measured` - `du -sh` |
| Stringhe UI | **501 chiavi per lingua**, di cui 10 con forme plurali. Non 318: quello era il numero prima del 001 | `measured` - conteggio delle chiavi di `ui-pl.js` caricato in `node:vm` |
| Parità | `node scripts/parity.mjs` esce 0, 264/264 voci per ognuna delle 4 lingue non polacche | `measured` |
| Suite unitaria | `npm test` esce 0: **214 test, 40 suite, 0 fallimenti**. Non 29: il numero in CLAUDE.md è fermo al primo giorno della suite | `measured` - output di `node --test` |
| Suite DOM | 97 dichiarazioni `test(` in `tests/dom/*.spec.js`. **Non è stata eseguita in questa sessione** | conteggio `measured`; esito `unknown` |
| Righe per file (motore) | views.js 930, core.js 802, exercises.js 610, verbs.js 480, audio.js 326, app.js 292, i18n.js 296, app.css 784 | `measured` - `wc -l` |
| Dispatcher esercizi | `BUILDERS` in `assets/js/exercises.js:578`, `build()` a `:586`, 14 builder registrati | `measured` |
| Scheduling condiviso da due mazzi | `schedule(c, q)` in `assets/js/core.js:381`, usata da `gradeCard` (`:398`) e da `errors.js:66` e `:97` | `measured` |
| **`load()` non applica le migrazioni** | `assets/js/core.js:68` accetta il salvataggio solo se `parsed.schema === SCHEMA`, con uguaglianza stretta, e **non chiama `migrateUp`**. Un bump a 3 farebbe ignorare in silenzio ogni profilo locale esistente | `measured` - lettura di `core.js:63-75` |
| La scala di migrazioni è cablata solo all'import | `MIGRATIONS` (`core.js:626`) e `migrateUp` (`:631`) sono chiamati soltanto da `importState` (`:698`) | `measured` |
| Import già irrobustito | `importState` accetta `schema <= SCHEMA`, rifiuta `schema > SCHEMA` con `set.errFromFuture`, valida i tipi di primo livello con `SHAPE` (`:647`) e ha `MAX_IMPORT_CHARS` a 8 MB | `measured` |
| Contenitore dichiarato e mai usato | `gsrs: {}` esiste in `defaultState()` (`core.js:40`) e in `SHAPE`, ma nessun modulo lo legge o lo scrive | `measured` - `grep -rn gsrs assets/js/` |
| Indice del lessico | `Core.registry.vocabIndex` (`core.js:19`, popolato a `:501-505`) mappa `norm(italiano) -> traduzione`, sulla **forma esatta scritta nel corso**: 1410 voci | `measured` |
| API audio | `Audio2` esposto a `audio.js:310`: `speak`, `stop`, `speakSequence` (`:229`, accetta `{rate}`), `hasNatural`, `hashText`, `listen`, `scoreSpeech`, `sttSupported`, `naturalAvailable`. Il rallentamento è `playbackRate` (`:186`) | `measured` |
| Registrazione microfono | `MediaRecorder`, `getUserMedia` e `AudioContext` non compaiono in nessun file di `assets/` né in `sw.js` | `measured` - grep vuoto |
| Overlay caricate all'avvio | `EAGER_FILES` in `core.js:587`: `curriculum-index`, `conversations`, `grammar-reference`, `phonetics`, `readings`, `writing`. Il resto è per livello, via `loadLevelData` (`:565`) | `measured` |
| Canale delle overlay | `parity.mjs` vede solo ciò che passa da `LINGUAI.addStrings` (`loadLang`, `parity.mjs:42`). Un dato registrato in altro modo è invisibile al gate | `measured` - lettura di `loadLang` |
| Precedente di deroga alla parità | `FREE_FIELDS = ["theory"]` in `parity.mjs:109`: il campo si scrive per lingua, quindi il gate ne verifica la presenza e non la forma | `measured` |
| Conversazioni | shape lineare `turns: [{sp:"A", it}, {sp:"TY", hintIt, accept:[]}]`, 10 dialoghi; motore in `views.js:514` (`runConversation`) | `measured` |
| Letture | 12 testi, 85 frasi, 36 domande. Le domande sono **in italiano e stanno in `data/core`**, per scelta dichiarata: aggiungere una lingua non costa una domanda | `measured` - esecuzione di `readings.js` in `node:vm` |
| Coppie minime | 5 insiemi, 21 coppie in `data/core/phonetics.js`; il gate `scripts/check_minpairs.py` esiste perché la voce onora gli accenti in modo diseguale | `measured` |
| Scrittura | 6 compiti in `data/core/writing.js`; `Writing.analyse(text, requires)` a `writing.js:68` espande i costrutti con il coniugatore e li cerca nel testo | `measured` |
| Collector audio | `scripts/extract_strings.mjs` cammina su una lista chiusa: `ex.say`, `it`/`alt` di listen e speak, righe di dialogue, `vocab[].it`, `grammar.examples[].it`, `CONVERSATIONS.turns[].it`, `PHONETICS.pairs[].a/.b`, `READINGS.sentences[]` | `measured` - `:62-121` |
| Service worker | `SW_VERSION = "v7"` (`sw.js:27`), `PRECACHE` a `:33` con 40 voci; audio cache-first, guscio e dati network-first | `measured` |
| Font | unica dipendenza di rete: Fraunces e Inter da `fonts.googleapis.com` (`index.html:8-10`). Il worker non tocca le origini esterne | `measured` |
| `.nojekyll` | assente. Nessuna `.github/`, nessun remote git configurato | `measured` - `ls -a`, `git remote -v` vuoto |
| Effetto della sua assenza su Pages | la pipeline Jekyll gira sul repo e i 2657 mp3 la attraversano; il fallimento atteso è build lenta o file scartati | `inferred` - non osservato, manca un deploy su cui provarlo |
| Toolchain | `package.json` con `@playwright/test` e `axe-core` come sole dev dependency, script `test`, `test:dom`, `test:all`, `validate`, `parity`, `serve`. Nessuna dipendenza a runtime | `measured` |

Due conseguenze da tenere in mano per tutto il piano.

**La prima riguarda lo stato.** `load()` scarta i salvataggi con schema diverso invece di
migrarli. Questo non è un dettaglio: è il motivo per cui il bump di O4 non si può fare come
primo passo, ma solo come secondo (§ 3.4, D1).

**La seconda riguarda l'audio, ed è la stessa del 001.** Nessun campo nuovo che deve essere
pronunciato viene registrato finché non si aggiunge il suo collector in `extract_strings.mjs`,
e il fallimento è silenzioso: si scende alla sintesi di sistema, cioè alla voce meccanica che
il progetto esiste per evitare. Cinque delle nove feature aggiungono campi pronunciati.

---

## 1. Obiettivo

Portare LinguAI dal punto in cui è (corso completo con motore adattivo, non pubblicato) al
punto in cui uno studente adulto lo sceglie al posto di un'app commerciale: perché lo prepara
a un esame reale (O1), gli dà input in quantità con il vocabolario a portata di dito (O2),
gli fa sentire la propria voce accanto a quella nativa (O3), gli programma le ripetizioni con
l'algoritmo che oggi è lo stato dell'arte (O4), gli dice dove la sua lingua lo tradisce (O5),
quanto del vocabolario reale possiede (O6), come suona l'italiano quando nessuno rallenta per
lui (O7), come cambia una conversazione se risponde diversamente (O8), e non lo tiene in
ostaggio dei propri dati (O9). Più il fix che rende tutto questo raggiungibile da un URL (FIX).

Il tutto senza rompere nessuno dei vincoli che rendono il progetto quello che è: zero build,
zero dipendenze a runtime, apertura da `file://`, due strati di dati, audio registrato, cinque
lingue di spiegazione in parità.

## 2. Approccio

Quattro principi che governano ogni decisione a valle.

**Il codice va dove il contenuto non arriva, e viceversa.** Sei delle nove feature sono
prevalentemente scrittura: O1, O5, O7, O8, e la metà "biblioteca" di O2 sono per il 60-90%
italiano da scrivere e registrare. Tre sono prevalentemente codice: O3, O4, O9. La sequenza
di § 4 mette prima le seconde, non per comodità ma perché sono quelle che sbloccano le altre
e che si possono verificare da sole. Un piano che le mescola nasconde il fatto che il collo
di bottiglia del programma non è la tastiera dello sviluppatore.

**Nessun dato esterno entra senza provenienza e licenza.** O6 richiede una lista di frequenza,
O2 potrebbe richiedere un lessico morfologico. Sono i primi dati del progetto che non nascono
qui dentro. Ognuno arriva con un'intestazione che dice fonte, versione, licenza e data, e la
licenza si verifica prima di scrivere il codice che li consuma, non dopo: una lista con
clausola share-alike contamina l'intero repository.

**Il gate viene prima del contenuto quando il contenuto può essere invalidato.** O7 dipende
da un fatto che nessuno ha ancora osservato: se la voce Edge TTS realizza davvero elisione,
troncamento e raddoppiamento sintattico. Il precedente esiste ed è dentro il progetto: le
coppie per la "o" aperta e chiusa non ci sono perché nessuna delle tre provate ha prodotto due
file diversi, e lo ha scoperto `check_minpairs.py`. Lo stesso gate va scritto **prima** di
autorizzare la scrittura di sessanta enunciati che potrebbero non insegnare nulla.

**Ciò che esce dalla parità si porta il proprio gate.** O5 è per definizione diverso per
lingua: i falsi amici di un polacco non sono quelli di uno spagnolo. `parity.mjs` vede solo
ciò che passa da `LINGUAI.addStrings`, quindi un dataset per lingua registrato in altro modo
esce dal gate senza fare rumore. Uscirne è legittimo, restarci senza controlli no: la
contropartita obbligatoria è un gate dedicato, altrimenti O5 diventa l'angolo non presidiato
del progetto.

---

## 3. Qualify

### 3.1 Assunzioni

- **A1.** Sviluppatore singolo, lavoro in seriale. I punti di collisione fra fasi sono tre e
  soli: `index.html` (catena degli script), i cinque `ui-<lang>.js`, e `sw.js` (`PRECACHE` più
  `SW_VERSION`). Una seconda persona può prendere F4, F5 o F8 in parallelo purché quei tre
  file si tocchino a turni.
- **A2.** Le stringhe di interfaccia nelle quattro lingue non polacche si producono con
  traduzione assistita e revisione, perché sono etichette brevi. **Non vale per il contenuto
  contrastivo**: i falsi amici di O5, le note di O7 e le glosse di O2 si scrivono da zero per
  lingua. È la regola del progetto ed è la ragione d'essere del corso.
- **A3. SCIOLTA in sede di revisione: il contenuto lo genera l'implementazione, l'utente lo
  revisiona.** Le 264 ore di scrittura di italiano non le produce l'utente: le produce chi
  implementa, e l'utente le revisiona **prima** della registrazione audio. Il totale scende da
  85-100 giorni a 45-52, ma la revisione umana prima degli mp3 non è un passaggio saltabile e
  diventa un gate esplicito di ogni fase editoriale (F5, F7, F8, F9, F10), non un auspicio.

  Il motivo è in RC3 e non è organizzativo: il nome del file audio è l'hash del testo, quindi
  una frase corretta dopo la registrazione produce un mp3 nuovo e lascia il vecchio orfano
  nella storia di git per sempre. Correggere dopo costa il doppio in tempo e non si può
  disfare in termini di peso. Nessuna fase editoriale esegue `build_audio.py` prima che
  l'utente abbia approvato il testo italiano di quella fase.

  Conseguenza sul ritmo: le fasi editoriali si aprono a scaglioni, ognuno con una fermata di
  revisione. Uno scaglione approvato si registra e si chiude; uno scaglione in attesa non
  blocca il codice delle fasi successive, che è indipendente.
- **A4.** `it-IT-IsabellaNeural` e `it-IT-GiuseppeMultilingualNeural` restano disponibili via
  `build_audio.py` per i nuovi enunciati.
- **A5.** Il budget di crescita dell'audio è **+12 MB** su tutto il programma (34 MB oggi,
  46 MB alla fine, `.git` da 38 a circa 50 MB). Oltre quella soglia il piano si ferma e si
  ridiscute. La history non si accorcia: un mp3 registrato per errore resta nel repository
  anche dopo la cancellazione, salvo riscrittura che romperebbe ogni clone.
- **A6.** Il target di pubblicazione è GitHub Pages su HTTPS. Serve perché O3 e la parte orale
  di O1 richiedono un contesto sicuro: `getUserMedia` non funziona da `file://` e non
  funzionerà mai.
- **A7.** Nessuna sincronizzazione fra dispositivi. Lo stato resta in `localStorage`, i
  trasporti sono l'export JSON esistente e il CSV di O9.
- **A8.** Le registrazioni della voce dello studente (O3) **non si persistono**. Vivono in
  memoria per la durata della sessione. Un blob audio in `localStorage` competerebbe con i
  progressi delle lezioni dentro una quota da 5 MB condivisa, e la potatura esistente protegge
  i progressi ma non è pensata per reggere un diluvio di blob. Se la persistenza serve, è
  IndexedDB e diventa una decisione a sé (D6).
- **A9.** Il formato d'esame di O1 si verifica sul sillabo ufficiale CVCL dell'Università per
  Stranieri di Siena prima di scrivere una riga di contenuto. Quel che il piano dice della
  struttura CILS B1 Cittadinanza è `unknown` finché quel passo non è fatto: un simulatore con
  la struttura sbagliata è peggio di nessun simulatore, perché produce fiducia mal riposta.
- **A10.** La suite del 001 è la rete di sicurezza di questo programma: `npm run test:all`
  verde è condizione di apertura di ogni fase, non solo di chiusura. Se una fase la trova già
  rossa, si ferma e si indaga prima di aggiungere.

### 3.2 Anchor incidentali

Vincoli veri. Una soluzione che li viola si rifiuta a prescindere:

- funzionamento da `file://`: niente moduli ES, niente `fetch()` per i dati;
- zero dipendenze a runtime, zero build step;
- nessuna parola nella lingua dello studente dentro `data/core/`;
- chiave della flashcard uguale al solo italiano;
- `onDone(ok)` chiamato esattamente una volta per esercizio;
- ogni testo scritto dallo studente si renderizza con `Core.esc()` o `textContent`;
- il bump di `SCHEMA` è riservato al cambio di significato di un campo esistente. O4 è
  esattamente quel caso, ed è il primo da quando la regola esiste (D1);
- ogni nuovo file di `assets/js/` o `data/core/` entra in `PRECACHE` e alza `SW_VERSION`,
  altrimenti il primo avvio offline muore su uno script mancante.

Anchor, cioè stato attuale che questo programma può legittimamente cambiare purché lo dichiari:

- **i font caricati da Google.** Sono l'unica dipendenza di rete e la ragione per cui offline
  la pagina cade sui font di sistema. FIX li porta in casa. Non è un vincolo, è una scelta di
  oggi che il programma rivede;
- **il limite di 300 righe per file**, oggi violato da 4 file del motore. I file nuovi lo
  rispettano, i vecchi non si rifattorizzano (fuori scope);
- **`gsrs` dichiarato e mai usato.** O4 può popolarlo o il programma può rimuoverlo. Va deciso,
  non lasciato lì: un contenitore vuoto in `SHAPE` è un contratto che nessuno onora;
- **la shape lineare delle conversazioni.** O8 la estende in modo additivo (D5);
- **13 tipi di esercizio.** Il programma ne aggiunge al più uno (D7);
- **`schedule()` come SM-2.** O4 la sostituisce. È il cuore di questo anchor e di D1.

### 3.3 Definition of Done per feature

Ogni voce è osservabile. Dove serve, il Given/When/Then porta valori reali.

#### FIX - Pubblicazione e indipendenza dalla rete

- [ ] `.nojekyll` esiste a root ed è tracciato in git.
- [ ] Nessun riferimento a `fonts.googleapis.com` o `fonts.gstatic.com` in `index.html`:
      Fraunces e Inter sono serviti da `assets/fonts/`, con il file di licenza OFL accanto.
- [ ] I woff2 sono in `PRECACHE` e `SW_VERSION` è stata alzata.
- [ ] Given una scheda con la rete spenta e la cache popolata, When si apre l'app, Then il
      titolo è reso in Fraunces e il corpo in Inter, non nei font di sistema. Verifica:
      `getComputedStyle(document.querySelector("h1")).fontFamily` risolve al font locale, e
      il pannello Network non mostra richieste a terze parti.
- [ ] Aprendo `index.html` da `file://` i font si vedono lo stesso: i percorsi sono relativi.
- [ ] Il peso aggiunto dai font è dichiarato ed è sotto i 400 KB.
- [ ] CLAUDE.md § Kontrola jakości riporta i numeri veri: 13 tipi presenti nei dati con
      `truefalse` a 12 occorrenze dalle domande delle letture, 214 test unitari, 97 test DOM,
      501 chiavi UI per lingua, 2657 mp3, 12 testi di lettura.

#### O1 - Simulatore CILS B1 Cittadinanza

- [ ] La struttura delle prove, il numero di item e le soglie di superamento sono state
      verificate sul sillabo ufficiale CVCL, e il piano cita la fonte con URL e data (A9).
      Finché non lo sono, la feature non si apre.
- [ ] Le prove di ascolto, lettura e scrittura si svolgono a tempo, con timer visibile, senza
      possibilità di tornare a una sezione chiusa, e producono un punteggio per sezione
      confrontato con la soglia ufficiale.
- [ ] **La prova orale non è valutata e la schermata lo dice prima di iniziare, non dopo.**
      Il modulo orale fornisce prompt, timer, registrazione (O3), risposta modello e griglia
      di autovalutazione; non emette punteggio e non contribuisce all'esito complessivo, che
      è dichiarato "parziale, tre prove su quattro".
- [ ] Given uno studente che chiude ascolto, lettura e scrittura sopra soglia, When arriva al
      riepilogo, Then legge il risultato per sezione e la frase che dichiara quale prova non
      è stata simulata e perché.
- [ ] La prova di scrittura usa `Writing.analyse` e presenta il risultato come "elementi
      trovati e non trovati", mai come voto: è la stessa onestà già scelta in 001-P7.
- [ ] Almeno due simulazioni complete e distinte, così che la seconda non sia un ripasso a
      memoria della prima.
- [ ] Le domande e le consegne d'esame stanno in `data/core/` **in italiano**, come già
      accade per le domande delle letture. Nelle overlay finiscono solo l'interfaccia e le
      frasi di onestà. Verifica: aggiungere una sesta lingua non aggiunge nemmeno una domanda.
- [ ] Il risultato di ogni tentativo si persiste in un contenitore nuovo e additivo e compare
      nell'export JSON; nessun bump di schema per questo.
- [ ] Ogni enunciato dell'ascolto ha il suo mp3: `build_audio.py --dry-run` a 0 mancanti.
- [ ] Delta audio dichiarato e sotto i 3 MB.

#### O2 - Biblioteca di input con lookup a un tocco

- [ ] Toccando una parola qualsiasi dentro un testo si apre una scheda con la forma base, la
      glossa nella lingua dello studente, il bottone di ascolto e "aggiungi al mazzo" che
      chiama `Core.addCard(it, tr, src)`.
- [ ] **La copertura del risolutore è misurata, non stimata.**
      `node scripts/check_lookup.mjs` percorre ogni parola di ogni testo e stampa la
      percentuale risolta, per testo e complessiva. Il numero è annotato nel task e la soglia
      di accettazione è dichiarata prima di leggerlo, non dopo.
- [ ] Given la frase "In Italia molte persone bevono il caffè in piedi" (`r-a1-mattina`, prima
      frase), When si tocca "bevono", Then la scheda mostra "bere" e la glossa di "bere", non
      un vuoto e non "bevono" non trovato.
- [ ] Una parola che il risolutore non risolve mostra uno stato esplicito ("non ho la scheda
      di questa parola") con la possibilità di aggiungerla comunque al mazzo dalla forma
      trovata nel testo. Mai un tocco che non fa niente.
- [ ] Il tocco funziona da tastiera: le parole sono raggiungibili con Tab o con un percorso
      alternativo dichiarato, e l'area toccabile è di almeno 44 px su mobile.
- [ ] La biblioteca contiene almeno 24 testi (12 oggi più 12 del primo scaglione), graduati
      A1-C1, ognuno con il suo audio per frase.
- [ ] Il testo italiano di ogni scaglione è stato riletto e approvato **prima** di lanciare
      `build_audio.py`: dopo, una correzione costa un mp3 nuovo, una riga in `audio-index.js`
      e un file orfano.
- [ ] `node scripts/parity.mjs` esce 0 dopo ogni scaglione.
- [ ] Delta audio dello scaglione dichiarato e sotto i 2,5 MB.

#### O3 - Shadowing con registrazione

- [ ] Su HTTPS o localhost: si ascolta la frase nativa, si registra la propria voce, si
      riascoltano le due in sequenza o in alternanza, e si può ripetere senza ricaricare.
- [ ] **Da `file://` e senza permesso microfono la feature degrada in modo dichiarato**, con
      lo stesso pattern già usato per il riconoscimento vocale: la schermata spiega perché non
      è disponibile e cosa fare, e il resto del corso non cambia comportamento.
- [ ] Given il permesso negato dal browser, When si apre lo shadowing, Then compare un
      messaggio che nomina il permesso e non un errore di console.
- [ ] Le registrazioni **non finiscono in `localStorage`** (A8): dopo un reload non ci sono
      più, e la schermata lo dice prima che lo studente registri.
- [ ] Nessun `URL.createObjectURL` resta senza `revokeObjectURL`: registrando 50 frasi di
      fila la memoria non cresce in modo monotono (osservato una volta e annotato).
- [ ] Se lo scoring via riconoscimento vocale si rivela praticabile (spike S1), il punteggio
      è presentato come "quanto il riconoscitore ha capito", mai come giudizio di pronuncia;
      se non lo è, la feature esce senza punteggio e la DoD si considera comunque soddisfatta.
- [ ] Il pulsante di registrazione ha stato accessibile (`aria-pressed` o equivalente) e
      l'inizio e la fine della registrazione sono annunciati a un lettore di schermo.
- [ ] La feature funziona su almeno un browser Chromium e uno WebKit, oppure il limite è
      dichiarato nella schermata e in README.

#### O4 - FSRS al posto di SM-2

- [ ] **Prerequisito, prima di qualunque bump:** `load()` applica la scala di migrazioni
      invece di scartare i salvataggi con schema diverso. Verifica: con `SCHEMA` alzato a 3 e
      un salvataggio di schema 2 in `localStorage`, dopo il caricamento i progressi ci sono
      tutti. Con il codice di oggi lo stesso scenario restituisce un profilo vuoto: il test
      deve essere rosso prima del fix.
- [ ] La migrazione v2 a v3 semina `stability` e `difficulty` da `ef`, `reps` e `interval`
      **senza spostare `due`**: Given un profilo con 300 carte di cui 40 scadute oggi, When si
      apre la versione nuova, Then le carte scadute sono ancora 40, non 300 e non 0.
- [ ] `Core.schedule` è sostituita e **entrambi i mazzi** la usano: le flashcard via
      `gradeCard` e il quaderno errori via `errors.js:66` e `:97`. Nessuna seconda copia
      dell'aritmetica.
- [ ] Esiste un registro delle ripetizioni (data, esito, stato prima e dopo) con un tetto
      dichiarato e con la potatura agganciata a quella esistente. Senza registro FSRS non ha
      dati su cui essere tarato mai, e la feature resta una formula diversa senza guadagno
      misurabile: il registro è il punto, non un accessorio.
- [ ] L'implementazione è coperta da test su vettori di riferimento presi dalla specifica
      FSRS, non solo da test di non-regressione scritti sul proprio output.
- [ ] La ritenzione desiderata è impostabile dalle impostazioni e la schermata spiega in una
      frase l'effetto pratico ("più alta, ripassi più spesso"), nella lingua dello studente.
- [ ] Given uno studente che risponde "difficile" tre volte di fila sulla stessa carta, When
      guarda la prossima scadenza, Then l'intervallo non cresce.
- [ ] `npm run test:all` verde, incluse le 214 asserzioni preesistenti: nessuna di esse è
      stata modificata per far passare la nuova formula. Se una va cambiata, il cambiamento è
      dichiarato e motivato nel task, uno per uno.
- [ ] Un JSON esportato prima di O4 si reimporta dopo O4 e produce lo stesso numero di carte.

#### O5 - Falsi amici per lingua

- [ ] Almeno 30 coppie per ciascuna delle 5 lingue, **scritte per quella lingua e non
      tradotte**: la scheda per il polacco parla di "kolacja" contro "colazione", quella per
      lo spagnolo di "burro", quella per il tedesco di "Firma". Verifica di lettura: due
      schede della stessa posizione in due lingue diverse non sono la stessa parola italiana
      salvo coincidenza reale.
- [ ] Le parole italiane stanno in `data/core/falsi-amici.js` come unione con id stabili;
      ogni overlay di lingua seleziona il proprio sottoinsieme per id. Nessuna parola nella
      lingua dello studente in `data/core`: `node scripts/validate.mjs` resta a 0.
- [ ] **Il dataset ha un gate proprio**, `node scripts/check-falsi-amici.mjs`, che esce 1 se:
      una lingua ha meno di 30 voci, una voce cita un id assente da `data/core`, una voce non
      ha la spiegazione, o una parola italiana non ha il suo mp3.
- [ ] Ogni parola italiana è pronunciata: `build_audio.py --dry-run` a 0 mancanti.
- [ ] Cambiando lingua a caldo da `pl` a `es` senza ricaricare, l'insieme dei falsi amici
      cambia interamente e non resta vuoto.
- [ ] Gli esercizi sui falsi amici riusano tipi esistenti: nessuna voce nuova in `EX_TYPES`.
- [ ] `node scripts/parity.mjs` esce 0: il dataset è fuori dal suo perimetro per costruzione,
      e questo è dichiarato in CLAUDE.md accanto al gate che lo copre.
- [ ] Delta audio dichiarato e sotto 1,5 MB.

#### O6 - Copertura su lista di frequenza

- [ ] `data/core/frequenza.js` porta in intestazione fonte, versione, licenza, data di
      recupero e criterio di taglio. **La licenza è compatibile con la ridistribuzione e la
      verifica è stata fatta prima di scrivere il codice che la consuma.**
- [ ] Given un profilo con 120 carte in mazzo, When si apre la vista Copertura, Then legge
      due numeri distinti e correttamente etichettati: quante delle prime N il corso insegna,
      e quante lo studente ha in mazzo.
- [ ] Il confronto passa dal risolutore di O2: "bevono" nel mazzo conta per "bere" nella
      lista. Verifica: una carta in forma flessa non risulta mancante.
- [ ] La vista propone le 20 parole più frequenti non ancora possedute e permette di
      aggiungerle al mazzo in un tocco.
- [ ] Il numero di copertura del corso è stato guardato prima di pubblicare la feature: se è
      basso, è una scoperta sul corso e va portata all'utente, non nascosta dietro un grafico.
- [ ] La lista entra in `PRECACHE` con `SW_VERSION` alzata e pesa meno di 60 KB.
- [ ] Nessun conteggio si basa su una stima: la funzione di copertura è pura ed è coperta da
      test unitari con liste di 10 elementi costruite a mano.

#### O7 - Parlato reale

- [ ] **`uv run --script scripts/check_connected.py` esiste ed è stato eseguito prima di
      scrivere il contenuto.** Sintetizza ogni enunciato nelle due forme (citazione contro
      parlato connesso) e fallisce sulle coppie che producono file identici o
      indistinguibili, esattamente come `check_minpairs.py` fa per le coppie minime.
- [ ] I fenomeni che il gate boccia **non entrano nel corso**, e la loro assenza è motivata in
      commento nel file di dati, come già fatto per la "o" aperta e chiusa. Se il
      raddoppiamento sintattico non passa, O7 esce senza raddoppiamento e la DoD è comunque
      soddisfatta.
- [ ] La velocità naturale si allena sulle registrazioni esistenti via `playbackRate`, senza
      un solo mp3 nuovo: Given una frase già registrata, When si sceglie "veloce", Then si
      sente a 1,4x con la stessa altezza di voce.
- [ ] Esiste un esercizio che chiede di riconoscere la forma piena dietro quella ridotta
      ("nun c'ho voglia" contro "non ci ho voglia"), e usa tipi esistenti.
- [ ] Le note contrastive sono scritte per lingua: la nota per lo spagnolo non ripete quella
      per il polacco.
- [ ] Delta audio dichiarato e sotto i 2,5 MB.

#### O8 - Dialoghi ramificati

- [ ] Un turno dello studente può offrire più risposte accettate che portano a nodi diversi,
      e la conversazione riconverge su un nodo comune.
- [ ] **I 10 dialoghi esistenti continuano a funzionare senza essere toccati**: nessuna
      modifica ai loro dati, nessun mp3 rigenerato. Verifica: `git diff` sui dialoghi vecchi è
      vuoto dopo la fase, e `build_audio.py --dry-run` non riporta mancanti nuovi per loro.
- [ ] `node scripts/validate.mjs` esce 1 se una destinazione non esiste, se un nodo è
      irraggiungibile, o se esiste un ciclo senza uscita.
- [ ] Given il dialogo "al ristorante" in cui lo studente rifiuta il dolce, When arriva al
      conto, Then il cameriere non nomina il dolce.
- [ ] Alla fine si può rigiocare il ramo non preso senza rifare tutto il dialogo.
- [ ] La ramificazione è a diamante e non ad albero: al massimo 3 punti di scelta per dialogo,
      2 opzioni ciascuno, con riconvergenza. Il conto è dichiarato nel task: 3 punti a
      diamante costano 6 turni in più, 3 punti ad albero ne costerebbero decine, con i loro
      mp3 e le loro 5 traduzioni.
- [ ] Ogni riga nuova ha la sua traduzione in tutte e 5 le lingue e il suo mp3.
- [ ] Delta audio dichiarato e sotto 1,5 MB.

#### O9 - Export e import Anki

- [ ] L'export produce un file che Anki importa senza intervento manuale sul separatore: il
      formato scelto e le direttive di intestazione sono state **verificate nell'applicazione
      Anki reale**, non dedotte dalla documentazione. La versione di Anki usata per la prova è
      annotata.
- [ ] Given un mazzo di 40 carte con apostrofi, virgole e accenti, When si esporta e si
      importa in Anki, Then le carte sono 40, i campi non sono spezzati e gli accenti sono
      corretti.
- [ ] **L'export dichiara di non trasportare il calendario delle ripetizioni**, perché il
      formato non lo prevede. La frase è nell'interfaccia, non solo nel README.
- [ ] Un campo che comincia per `=`, `+`, `-` o `@` è neutralizzato in export: aprendo il file
      in un foglio di calcolo non si esegue una formula.
- [ ] L'import mostra un'anteprima prima di scrivere ("aggiungo N carte, ne aggiorno M, ne
      ignoro K") e non tocca lo stato finché lo studente non conferma.
- [ ] L'import rispetta la regola della chiave: la carta è chiavata sul solo italiano
      normalizzato. Reimportando lo stesso file due volte il mazzo non raddoppia.
- [ ] Un file malformato, troppo grande o con un numero di colonne incoerente è rifiutato
      all'ingresso con un messaggio nella lingua dello studente, e lo stato resta intatto.
- [ ] Il testo importato si renderizza con `esc()` o `textContent`: un campo contenente
      `<img src=x onerror=alert(1)>` compare come stringa letterale.
- [ ] L'export JSON esistente continua a funzionare identico: O9 aggiunge un canale, non ne
      sostituisce uno.

### 3.4 Disambiguazione

Le opzioni sono elencate tutte prima di essere valutate, poi valutate. Le sei marcate **ADR**
sono quelle su cui la conclusione dell'agent `architect` ha la precedenza su questa
raccomandazione.

---

**D1 - O4: come si cambia algoritmo senza perdere i profili** — **ADR**

Opzioni: bump a schema 3 con migrazione · campi nuovi affiancati senza bump · bump con
migrazione a semina pigra · doppio scheduler in parallelo per una finestra.

- **A. Bump a 3, migrazione v2 a v3 scritta.** È il caso che la regola del progetto riserva al
  bump: FSRS cambia il significato di `interval` (non più "giorni fino alla prossima" nel senso
  SM-2, ma output di una funzione di stabilità) e rende `ef` senza referente. Costo nascosto e
  bloccante: **`load()` oggi scarta i salvataggi con schema diverso** (`core.js:68`) invece di
  migrarli, quindi il bump da solo cancella in silenzio ogni profilo esistente. La migrazione
  esiste solo sul percorso di import. Il bump si può fare, ma solo dopo aver agganciato
  `migrateUp` a `load()`, e quel fix va testato per primo.
- **B. Campi nuovi affiancati** (`s`, `d`, `lastReview`), `ef` e `interval` lasciati dove sono
  e non più letti. Nessun bump, nessun rischio sui profili. Ma lascia in ogni carta i campi di
  un algoritmo morto, e il significato di `interval` diventa ambiguo per sempre: è esattamente
  la deriva che la regola sul bump esiste per impedire. Il costo non si paga oggi, si paga al
  terzo lettore che non sa quale dei due campi comanda.
- **C. Bump a 3 con semina pigra**: la migrazione non converte niente in blocco, marca lo
  schema e semina `stability` e `difficulty` alla prima ripetizione di ogni carta, da `ef` e
  `interval`. Ha lo stesso prerequisito di A su `load()`, ma la migrazione è banale e non c'è
  un momento in cui 1400 carte vengono riscritte insieme.
- **D. I due scheduler convivono** dietro un'impostazione, per confrontarli. Raddoppia la
  superficie di test su una funzione condivisa da due mazzi, e nessuno confronterà mai
  davvero: non c'è modo di misurare la ritenzione di due algoritmi sullo stesso studente.

**Raccomandata: A, con il fix di `load()` come sub-task precedente e testato per primo (rosso
prima del verde), e con C come ripiego se la conversione in blocco si rivela rischiosa.** La
scelta fra A e C è di implementazione, non di architettura: cambia dove avviene la semina, non
il contratto. Quel che non è negoziabile è l'ordine: prima `load()` migra, poi si bumpa.

---

**D2 - O5: dove vive un dato che è diverso in ogni lingua** — **ADR**

Opzioni: overlay normale · overlay con deroga in `FREE_FIELDS` · canale separato fuori da
`addStrings` · core con unione e selezione per id dall'overlay.

- **A. Overlay normale** in `data/i18n/<lang>/falsi-amici.js` via `addStrings`. `parity.mjs`
  confronta la forma contro il polacco e fallisce per costruzione, perché i falsi amici di uno
  spagnolo non sono in numero né in posizione quelli di un polacco. Il gate direbbe che è rotto
  ciò che il corso richiede.
- **B. Overlay con `falsiAmici` aggiunto a `FREE_FIELDS`.** Il precedente esiste (`theory`) ed
  è esattamente lo stesso caso: contenuto scritto per lingua, di cui si verifica la presenza e
  non la forma. Costo: la deroga vale per l'intera chiave, quindi nulla dentro quel campo è più
  controllato.
- **C. Canale separato**, un registro tipo `LINGUAI.addLangData(lang, "falsiAmici", [...])`
  caricato con gli `EAGER_FILES`. `parity.mjs` non lo vede affatto, perché `loadLang` raccoglie
  solo ciò che passa da `addStrings`. Pulito concettualmente (non è una overlay: non ha un
  gemello neutro da cui prendere forma), ma esce da ogni controllo se non se ne scrive uno.
- **D. Unione in `data/core/falsi-amici.js`** con id stabili, e l'overlay di ogni lingua che
  seleziona il proprio sottoinsieme per id più la spiegazione. Le parole italiane restano in
  core, quindi `extract_strings.mjs` le raccoglie e l'audio esiste; la selezione per id non è
  una fusione per indice, quindi non ha il problema che parità presidia.

**Raccomandata: D per i dati più C per il canale, con `check-falsi-amici.mjs` come
contropartita obbligatoria.** D risolve l'audio (le parole devono stare in core per essere
registrate) e C risolve la parità senza indebolirla su altro. Il gate dedicato non è un extra:
è la condizione perché uscire dalla parità sia una scelta e non una fuga.

---

**D3 - O2: come si risolve una forma flessa nel suo lemma** — **ADR**

Opzioni: solo corrispondenza esatta · indice inverso generato dal coniugatore · lessico
morfologico spedito come dato · glosse d'autore per testo · combinazione.

- **A. Solo corrispondenza esatta** contro `vocabIndex` (1410 voci sulla forma come scritta nel
  corso). Costo zero. Copertura ignota e probabilmente bassa su testo corrente, dove i verbi
  sono coniugati e i nomi al plurale. Non si adotta né si scarta senza il numero: da qui la
  necessità dello spike che misura prima di decidere.
- **B. Indice inverso costruito a runtime dal coniugatore.** `verbs.js` conosce 14 tempi e la
  tabella degli irregolari: generando tutte le forme dei verbi presenti nel corso si ottiene
  forma-a-lemma senza spedire un byte. Sui nomi e aggettivi servono poche regole di
  de-flessione (`-i`/`-e`/`-a`/`-o`). Costo: CPU all'avvio o al primo uso, e copertura limitata
  a ciò che il corso già contiene.
- **C. Lessico morfologico esterno** (tipo Morph-it!). Copertura massima. Costo in KB alto
  anche tagliando ai primi 3000 lemmi, e soprattutto costo di licenza: le risorse
  disponibili sono spesso share-alike, il che tocca l'intero repository. Va verificato prima,
  non dopo.
- **D. Glosse d'autore per testo.** `glossIt` esiste già in `readings.js`. Precisione perfetta,
  zero motore, ma è lavoro editoriale che cresce con la biblioteca ed è l'opposto di
  "qualunque parola".
- **E. B come motore, D come rete di sicurezza, C solo se lo spike dice che B non basta.**

**Raccomandata: E, con lo spike di misura come primo sub-task della fase e la soglia dichiarata
prima di leggere il risultato.** È l'unica delle cinque che non chiede di indovinare la
copertura: la misura, e la misura resta come gate (`check_lookup.mjs`) che si degrada in modo
visibile quando la biblioteca cresce.

---

**D4 - O1: che cosa può chiamarsi simulatore senza backend** — **ADR**

Opzioni: quattro prove con orale autovalutato · tre prove più preparazione orale non valutata ·
tre prove e basta · rinuncia al nome.

- **A. Quattro prove, l'orale valutato dallo studente su griglia.** Sembra completo ma il
  punteggio finale mescola tre misure oggettive e una percezione: il numero che ne esce non
  significa niente e lo studente ci crede.
- **B. Tre prove simulate a tempo con punteggio ufficiale, più un modulo di preparazione orale
  esplicitamente non valutato** (prompt, timer, registrazione, risposta modello, griglia di
  autocontrollo). L'esito dichiara "tre prove su quattro". Dipende da O3 per la registrazione.
- **C. Tre prove, l'orale non esiste.** Onesto ma zoppo: l'orale è la prova che spaventa di
  più, e non offrirne nemmeno la preparazione è lasciare fuori il motivo per cui uno cerca un
  simulatore.
- **D. Non chiamarlo simulatore** ma "allenamento CILS". Toglie la promessa e con essa il
  valore percepito, senza cambiare una riga di sostanza.

**Raccomandata: B, con il nome che porta la qualifica ("simulazione delle prove scritte") e la
frase di limite prima dell'inizio, non nel riepilogo.** È l'unica che non promette ciò che il
progetto non può mantenere e non rinuncia alla parte che serve. Conseguenza di sequenza: **O1
dipende da O3** e non può uscire prima.

---

**D5 - O8: che forma prende un dialogo che si ramifica** — **ADR**

Opzioni: campi additivi sui turni esistenti · shape a nodi per i dialoghi nuovi · conversione
di tutti e dieci · macchina a stati separata.

- **A. `id` e `goto` additivi sui turni.** Un turno dello studente porta più opzioni, ognuna
  con la sua lista `accept` e la sua destinazione. Un dialogo senza `id` resta lineare e non si
  tocca: i 10 esistenti, con i loro mp3 e le loro 5 overlay, non si toccano affatto.
- **B. Shape nuova a nodi** solo per i dialoghi ramificati, con il motore che regge due forme.
  Più pulita da leggere, ma due forme nello stesso modulo sono due percorsi da testare e la
  prima cosa che diverge alla prossima modifica.
- **C. Convertire tutti e dieci a grafo.** Uniforma, e costa la riscrittura di contenuto già
  registrato e già tradotto cinque volte, per zero valore didattico aggiunto.
- **D. Macchina a stati generica** riusabile anche da O1. Astrazione su un solo caso d'uso: si
  aggiunge quando arriva il secondo, non prima.

**Raccomandata: A**, con la regola di contenuto scritta accanto alla regola di codice: la
ramificazione è a diamante, non ad albero. Il motivo è aritmetico e sta nella DoD.

---

**D6 - O3: le registrazioni si conservano?**

- **A. Solo in memoria, per la sessione.** Zero rischio sulla quota, zero superficie nuova.
  Lo studente non può confrontare oggi con la settimana scorsa.
- **B. IndexedDB.** Persistenza vera, ma è una seconda sede dello stato accanto a
  `localStorage`: non entra nell'export, non entra nella potatura, non entra in `SHAPE`, e va
  svuotata da qualche parte nelle impostazioni.
- **C. `localStorage` in base64.** Da escludere: competerebbe con i progressi dentro 5 MB.

**Raccomandata: A per questo programma**, con B come feature a sé se e quando qualcuno la
chiede. La schermata dice che le registrazioni non si salvano, prima che lo studente registri.

---

**D7 - Tipi di esercizio nuovi**

Le feature che potrebbero volerne uno sono O5 (falsi amici), O7 (parlato connesso) e O8
(dialogo ramificato).

- **A. Un tipo nuovo per ciascuna**: tre voci in `BUILDERS`, tre regole in `validate.mjs`, tre
  contratti `onDone` da coprire nei test DOM.
- **B. Riuso dei 13 esistenti.** I falsi amici sono `mcq` o `trans`; il parlato connesso è una
  discriminazione a due, cioè `minpair` o `mcq` con `say`; il dialogo ramificato non è un
  esercizio ma una vista.
- **C. Uno solo, per il parlato connesso**, se e solo se la discriminazione richiede due audio
  e `minpair` non regge il caso.

**Raccomandata: B, con C come eccezione da motivare quando arriva.** Ogni tipo nuovo costa un
contratto in più su cui si regge il contatore di progresso.

---

**D8 - Come esce l'esportazione verso Anki**

- **A. CSV con virgola** e citazione RFC 4180. Massima compatibilità con i fogli di calcolo,
  massimo rischio di campi spezzati su testo con virgole, che l'italiano ha ovunque.
- **B. TSV con direttive di intestazione** riconosciute dalle versioni recenti di Anki
  (separatore, campi, mazzo). Import senza intervento manuale, ma la sintassi delle direttive
  è version-specific e va verificata nell'applicazione, non nella documentazione.
- **C. `.apkg`**, che sarebbe l'unico formato capace di trasportare anche il calendario. Serve
  costruire uno SQLite e uno zip in browser: dipendenza nuova, cioè fuori dai vincoli.

**Raccomandata: B, con la verifica in Anki reale come condizione di chiusura, e con la
dichiarazione esplicita che il calendario non viaggia.** Se la verifica fallisce sulla versione
provata, si scende ad A e lo si dice.

---

**D9 - Quanto grande è la biblioteca di O2 e quando esce**

- **A. Tutti i testi in una volta** (12 verso 40). Circa 100 ore di scrittura prima che
  qualcuno veda qualcosa.
- **B. Motore prima, contenuto a scaglioni.** Il lookup esce sui 12 testi che già esistono e
  ha valore da subito; la biblioteca cresce a scaglioni da 12, ognuno con il suo ciclo di
  revisione, registrazione e parità.
- **C. Solo il motore, biblioteca rinviata.** Il lookup su 12 testi non è una biblioteca, ma è
  la parte che il codice può consegnare.

**Raccomandata: B**, che è anche il motivo per cui O2 in § 4 è spezzata in due fasi non
adiacenti: il motore blocca O6, il contenuto non blocca niente.

---

## 4. Fasi

Ogni fase lascia l'app funzionante, committabile e pubblicabile. L'ordine è per dipendenza
reale e per rischio, non per numero O.

| Fase | Contenuto | Dipende da | Perché qui |
|---|---|---|---|
| **F0** | **FIX** pubblicazione: `.nojekyll`, font in casa, `PRECACHE`, correzione della baseline in CLAUDE.md | - | Per primo perché è l'unica cosa fra il corso e uno studente vero, costa una giornata, e perché **O3 e la parte orale di O1 non sono verificabili senza HTTPS**: senza deploy quelle due fasi lavorerebbero alla cieca |
| **F1** | **O4** FSRS, preceduta dal fix di `load()` | F0 | Fondazionale: `schedule()` è condivisa da due mazzi, e ogni feature che crea carte (O2, O6) ci scarica dentro. Farla dopo significa migrare un mazzo più grande e ritestare due volte |
| **F2** | **O2 motore**: risolutore forma-lemma, gate di copertura, lookup a un tocco sui 12 testi esistenti | F1 | Blocca O6. Il risolutore è il pezzo che non si ricava dai dati esistenti ed è il rischio tecnico più alto del programma dopo O4 |
| **F3** | **O6** copertura su lista di frequenza | F2 | Consuma il risolutore di F2. Senza, "conosci bere?" fallisce su "bevo" |
| **F4** | **O9** export e import Anki | F1 | Indipendente da tutto il resto, piccola, alto rapporto valore/costo. Dopo F1 solo perché l'export deve fotografare il mazzo nella forma definitiva |
| **F5** | **O5** falsi amici | F0 | Indipendente sul codice. Prima fase a maggioranza di contenuto: 45 ore di scrittura contro 30 di codice |
| **F6** | **O3** shadowing con registrazione | F0 | Indipendente. Sblocca il modulo orale di O1. Si apre con uno spike di fattibilità, non con codice |
| **F7** | **O7** parlato reale | F0 | Si apre con il gate sulla voce. Il contenuto si scrive solo dopo che il gate ha detto quali fenomeni esistono davvero nelle registrazioni |
| **F8** | **O8** dialoghi ramificati | F0 | Indipendente sul codice, pesante sul contenuto per via del moltiplicatore per 5 lingue più audio |
| **F9** | **O2 biblioteca**: scaglioni da 12 testi | F2 | Puro contenuto. Non blocca niente e per questo sta in fondo: è la fase che si taglia per prima se il budget stringe |
| **F10** | **O1** simulatore CILS | F6, F9 | Ultima: dipende da O3 per l'orale, riusa il motore delle letture, ed è la più pesante in contenuto dopo F9 |

Parallelizzabili con una seconda persona: F4, F5 e F8 fra loro e con F2-F3, purché
`index.html`, i cinque `ui-<lang>.js` e `sw.js` si tocchino a turni.
Non parallelizzabili: F0 con niente (tocca la catena degli script e il worker), F1 con niente
(tocca lo stato di tutti), F2 con F3.

Fondazionali: **F0, F1 e F2**. Tutto il resto potrebbe uscire in qualunque ordine.

I due punti in cui il programma si può fermare senza lasciare macerie sono la fine di F4 (il
prodotto è pubblicato, ha FSRS, ha il lookup e non tiene i dati in ostaggio) e la fine di F8
(mancano solo le due fasi di puro contenuto).

## 5. Matrice di impatto per feature

| Feature | Bump schema | Struttura nuova nello stato | Stringhe UI nuove (per lingua) | Audio nuovo | Tipo esercizio nuovo | Rotta nuova | Dato esterno |
|---|---|---|---|---|---|---|---|
| FIX | no | - | 0 | no | no | no | font (OFL) |
| O1 | no | `cils{}` additiva | ~25 | sì, ~130 file, <3 MB | no | `esame` | sillabo CVCL (riferimento) |
| O2 | no | - | ~14 | sì, ~230 file, <4,6 MB | no | no (dentro `lettura`) | eventuale lessico (D3) |
| O3 | no | - (A8: niente persistenza) | ~14 | no | no | `shadowing` | no |
| O4 | **sì, v2 a v3** | `reviews[]` con tetto | ~10 | no | no | no | vettori FSRS (test) |
| O5 | no | - | ~10 | sì, ~120 file, <1,5 MB | no | `falsi-amici` | no |
| O6 | no | - | ~12 | no | no | `copertura` | lista di frequenza (licenza) |
| O7 | no | - | ~12 | sì, ~120 file, <2,5 MB | forse 1 (D7) | no (dentro `fonetica`) | no |
| O8 | no | - | ~8 | sì, ~72 file, <1,5 MB | no | no (dentro `conversazione`) | no |
| O9 | no | - | ~14 | no | no | no (dentro `impostazioni`) | formato Anki |
| **Totale** | **1 bump** | **2 contenitori** | **~119 chiavi × 5 = 595 valori** | **~672 file, <12 MB** | **0-1** | **5** | **3 fonti da verificare** |

Le 119 chiavi nuove su 501 esistenti sono un aumento del 24% del dizionario di interfaccia.
Come nel 001, si governano con il gate e non a fine lavoro: `node scripts/parity.mjs` verde è
condizione di chiusura di **ogni** fase, e le stringhe si scrivono nello stesso commit del
codice che le usa.

## 6. Moduli nuovi e punto di inserimento

`index.html` ha oggi la catena righe 70-118. I moduli nuovi si inseriscono così: i motori
prima di `views.js`, le viste dopo, perché `views.js` definisce `global.Views` e i moduli
successivi si limitano a registrarsi.

```
assets/js/core.js            <- modifica (F1: load migra, FSRS, registro)
assets/js/i18n.js            <- modifica (F5: canale addLangData)
assets/js/audio.js
assets/js/verbs.js
assets/js/exercises.js
assets/js/errors-key.js
assets/js/errors.js          <- modifica minima (F1: usa la schedule nuova)
assets/js/drills-lex.js
assets/js/drills.js
assets/js/fsrs.js            <- NUOVO (F1) algoritmo puro, nessuna dipendenza da Core
assets/js/lemma.js           <- NUOVO (F2) risolutore forma-lemma
assets/js/frequency.js       <- NUOVO (F3) copertura, funzioni pure
assets/js/anki.js            <- NUOVO (F4) serializzazione e parsing, funzioni pure
assets/js/recorder.js        <- NUOVO (F6) getUserMedia, MediaRecorder, guardie
assets/js/cils.js            <- NUOVO (F10) motore d'esame: sezioni, timer, punteggio
assets/js/views.js
assets/js/views-lookup.js    <- NUOVO (F2) scheda della parola dentro lettura
assets/js/views-frequency.js <- NUOVO (F3)
assets/js/views-falsi.js     <- NUOVO (F5)
assets/js/views-shadow.js    <- NUOVO (F6)
assets/js/views-cils.js      <- NUOVO (F10)
data/i18n/ui-*.js  ×5
data/i18n/<lang>/falsi-amici.js ×5   <- NUOVO (F5) via addLangData, non addStrings
data/core/falsi-amici.js     <- NUOVO (F5) unione delle parole italiane
data/core/frequenza.js       <- NUOVO (F3) lista con intestazione di provenienza
data/core/parlato.js         <- NUOVO (F7)
data/core/cils.js            <- NUOVO (F10) prove, domande e consegne in italiano
assets/js/app.js
assets/js/pwa.js
```

Fuori dalla catena: `assets/fonts/*.woff2` più `OFL.txt` (F0), `.nojekyll` (F0),
`scripts/check_lookup.mjs` (F2), `scripts/check-falsi-amici.mjs` (F5),
`scripts/check_connected.py` (F7).

Vincolo di dimensione: ogni modulo nuovo sta sotto 300 righe. `cils.js` e `views-cils.js` sono
i due candidati a sfondare: se succede, si separa il punteggio (`cils-score.js`) dalla
conduzione della prova.

## 7. Sub-task, stime e verifiche

Stime per uno sviluppatore senior già dentro questo codebase. 1 giorno = 8 ore. Le colonne
Codice e Contenuto sono separate perché il totale mente se non lo sono: **264 ore su 621, il
42% del programma, sono scrittura di italiano e revisione, non programmazione.**

Convenzione dei comandi ricorrenti:

- `V` = `node scripts/validate.mjs` (e per ognuna delle 5 lingue dove i dati cambiano)
- `P` = `node scripts/parity.mjs`
- `A` = `node scripts/extract_strings.mjs && uv run --script scripts/build_audio.py --dry-run`
- `S` = `node scripts/serve.mjs 8080`, prova in browser
- `T` = `npm run test:all`, condizione di apertura **e** di chiusura di ogni fase

### F0 - Pubblicazione e verità della baseline (8h)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T001 | `.nojekyll` a root, tracciato | `.nojekyll` (nuovo) | 0,5h | `git ls-files .nojekyll` lo elenca | basso |
| T002 | Scaricare Fraunces e Inter nelle varianti già usate, con `OFL.txt`, e sostituire il `<link>` con `@font-face` locali | `assets/fonts/`, `index.html`, `assets/css/app.css` | 3h | Rete spenta: il titolo è ancora in Fraunces; il pannello Network non mostra richieste a terze parti; il peso aggiunto è annotato qui e sta sotto 400 KB | medio |
| T003 | Font in `PRECACHE`, `SW_VERSION` a v8 | `sw.js` | 1h | Con la cache popolata e la rete spenta i font si caricano; `caches.keys()` dopo il reload non contiene più v7 | medio |
| T004 | Correggere i numeri di CLAUDE.md § Kontrola jakości: 13 tipi con `truefalse` a 12, 214 test unitari, 97 DOM, 501 chiavi UI, 2657 mp3, 12 testi | `CLAUDE.md` | 1h | Ogni numero nel file corrisponde all'output del comando che lo produce, rilanciato adesso | basso |
| T005 | Procedura di pubblicazione scritta e provata una volta end-to-end | `README.md` o `docs/` | 2h | L'URL pubblico risponde, l'app si apre, il service worker si registra, `getUserMedia` è disponibile (prerequisito di F6) | medio |
| T006 | Prova da `file://` dopo il cambio font | - | 0,5h | Doppio clic su `index.html`: font corretti, console pulita | basso |

### F1 - O4 FSRS (37h codice + 2h contenuto)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T010 | Test che dimostra il difetto: `SCHEMA` a 3 e un salvataggio schema 2 in `localStorage` producono un profilo vuoto | `tests/unit/state.test.mjs` | 2h | Il test è **rosso** contro il codice di oggi. Se è verde, l'ipotesi è sbagliata e la fase si ferma | **alto** |
| T011 | `load()` applica `migrateUp` e accetta `schema <= SCHEMA` | `assets/js/core.js` | 2h | T010 diventa verde; le 214 asserzioni preesistenti restano verdi | **alto** |
| T012 | Algoritmo FSRS come modulo puro: stabilità, difficoltà, recuperabilità, prossimo intervallo, parametri di default | `assets/js/fsrs.js` (nuovo) | 8h | Test su vettori della specifica: stessi ingressi, stesse uscite alla quarta cifra | **alto** |
| T013 | Registro delle ripetizioni con tetto dichiarato e potatura agganciata a quella esistente | `assets/js/core.js` | 4h | 5000 ripetizioni simulate: il registro si ferma al tetto, i progressi delle lezioni sopravvivono, `save()` non lancia | **alto** |
| T014 | Migrazione v2 a v3: semina `stability` e `difficulty` da `ef`/`reps`/`interval`, **`due` invariato** | `assets/js/core.js` | 5h | Profilo con 300 carte di cui 40 scadute: dopo la migrazione le scadute sono ancora 40. `node --test` su un fixture reale | **alto** |
| T015 | Sostituzione di `schedule()` e riaggancio dei due mazzi (`gradeCard`, `errors.js:66` e `:97`) | `assets/js/core.js`, `assets/js/errors.js` | 4h | `grep -n "Core.schedule" assets/js/` mostra i due soli chiamanti; i test del quaderno errori restano verdi | **alto** |
| T016 | Decisione su `gsrs`: popolarlo o rimuoverlo da `defaultState` e da `SHAPE`, e dirlo in CLAUDE.md | `assets/js/core.js`, `CLAUDE.md` | 1h | `grep -rn gsrs assets/ scripts/` non lascia un contenitore senza lettori | basso |
| T017 | Ritenzione desiderata nelle impostazioni, con la frase che ne spiega l'effetto | `assets/js/views.js`, `data/i18n/ui-*.js` | 4h | `S`: alzando la ritenzione, la prossima scadenza della stessa carta si avvicina; `P` esce 0 | medio |
| T018 | 10 chiavi UI ×5, testo di spiegazione scritto per lingua | `data/i18n/ui-*.js` | 2h | `P` esce 0; `I18n.missing()` vuoto sulle impostazioni nelle 5 lingue | medio |
| T019 | Test di fase: algoritmo, migrazione, registro, due mazzi | `tests/unit/fsrs.test.mjs`, `tests/unit/state.test.mjs` | 8h | `T` verde. Ogni asserzione preesistente modificata è elencata qui con il motivo | **alto** |
| T020 | Prova di continuità sull'export: JSON esportato prima di F1, reimportato dopo | - | 1h | Stesso numero di carte, stesse scadenze | medio |

### F2 - O2 motore del lookup (41h codice + 4h contenuto)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T030 | Spike di misura: quante parole delle 85 frasi esistenti risolve la sola corrispondenza esatta su `vocabIndex`. Soglia di accettazione dichiarata **prima** di leggere il numero | `scripts/check_lookup.mjs` (nuovo) | 3h | Il comando stampa una percentuale per testo e totale; il numero è annotato qui | medio |
| T031 | Indice inverso dei verbi generato dal coniugatore per i verbi presenti nel corso | `assets/js/lemma.js` (nuovo) | 6h | "bevono" risolve "bere", "andati" risolve "andare", "fu" risolve "essere" | **alto** |
| T032 | Regole di de-flessione per nomi e aggettivi, con lista di eccezioni | `assets/js/lemma.js` | 4h | "persone" risolve "persona", "belle" risolve "bello"; "città" resta invariata e non viene mutilata | **alto** |
| T033 | `check_lookup.mjs` diventa gate: esce 1 sotto la soglia dichiarata in T030 | `scripts/check_lookup.mjs` | 4h | Rimuovendo una regola di T032 il comando esce 1 e nomina le parole perse | medio |
| T034 | Scheda della parola: glossa, ascolto, aggiunta al mazzo via `Core.addCard` | `assets/js/views-lookup.js` (nuovo) | 8h | `S`: tocco "bevono" nel primo testo, vedo "bere", sento l'audio, la carta compare in Lessico | medio |
| T035 | Stato esplicito per la parola non risolta, con aggiunta manuale | `assets/js/views-lookup.js` | 3h | Tocco una parola fuori corso: vedo il messaggio e posso aggiungerla comunque | basso |
| T036 | Accessibilità: parole raggiungibili da tastiera, area di tocco 44 px, scheda che restituisce il fuoco alla chiusura | `assets/js/views-lookup.js`, `assets/css/app.css` | 3h | `a11y-gate` a 375 e 1280 px: 0 violazioni; Tab percorre le parole in ordine di lettura | medio |
| T037 | Estensione di `glossIt` sui 12 testi esistenti per le parole che il risolutore non copre | `data/core/readings.js`, overlay ×5 | 4h (contenuto) | `check_lookup.mjs` risale sopra soglia; `V` e `P` verdi | medio |
| T038 | 14 chiavi UI ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0 | medio |
| T039 | Test di fase: risolutore in `node:test`, scheda in Playwright | `tests/unit/lemma.test.mjs`, `tests/dom/lookup.spec.js` | 8h | `T` verde; togliendo l'indice inverso i test del risolutore diventano rossi | medio |

### F3 - O6 copertura su lista di frequenza (27h codice + 3h contenuto)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T050 | Scelta della lista, verifica della licenza, intestazione di provenienza. **Prima del codice** | `data/core/frequenza.js` (nuovo) | 4h | L'intestazione porta fonte, versione, licenza, data e criterio di taglio; la licenza permette la ridistribuzione in questo repository | **alto** |
| T051 | Funzioni di copertura pure: corso contro lista, mazzo contro lista, passando dal risolutore di F2 | `assets/js/frequency.js` (nuovo) | 6h | Test con liste di 10 elementi costruite a mano; una carta in forma flessa non risulta mancante | medio |
| T052 | Vista Copertura: due numeri distinti, etichettati, con la spiegazione di cosa contano | `assets/js/views-frequency.js` (nuovo) | 6h | `S`: i due numeri sono diversi e coerenti con lo stato; svuotando il mazzo il secondo va a zero e il primo no | medio |
| T053 | Le 20 più frequenti non possedute, con aggiunta al mazzo in un tocco | `assets/js/views-frequency.js` | 4h | Aggiungendone una, sparisce dalla lista e compare in Lessico | basso |
| T054 | `PRECACHE` e `SW_VERSION` | `sw.js` | 0,5h | Rete spenta: la vista Copertura si apre | basso |
| T055 | Lettura critica del risultato con l'utente: quanto copre davvero il corso | - | 3h (contenuto) | Il numero è stato guardato e discusso prima di pubblicare | medio |
| T056 | 12 chiavi UI ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0 | medio |
| T057 | Test di fase | `tests/unit/frequency.test.mjs` | 5h | `T` verde | basso |

### F4 - O9 export e import Anki (26h codice)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T060 | Serializzazione TSV con direttive di intestazione, escape e neutralizzazione dei prefissi di formula | `assets/js/anki.js` (nuovo) | 6h | Un campo `=1+1` esce neutralizzato; un campo con tabulazione, virgolette e newline sopravvive al giro | medio |
| T061 | Parsing del file importato, con conteggio colonne coerente e tetto di righe | `assets/js/anki.js` | 6h | Un file con righe a 3 e 4 colonne è rifiutato con messaggio; un file da 200k righe è rifiutato prima del parse | medio |
| T062 | Anteprima prima della scrittura: aggiungo N, aggiorno M, ignoro K | `assets/js/views.js` | 4h | Annullando l'anteprima lo stato non cambia di un byte (confronto di `exportState()` prima e dopo) | medio |
| T063 | Chiave sul solo italiano normalizzato in import; nessun raddoppio | `assets/js/anki.js` | 2h | Importando due volte lo stesso file il mazzo non cresce la seconda volta | **alto** |
| T064 | Rendering di ciò che arriva dal file: `esc()` o `textContent` | `assets/js/views.js` | 2h | Un campo con `<img src=x onerror=alert(1)>` compare come stringa letterale | **alto** |
| T065 | Verifica in Anki reale, versione annotata | - | 2h | 40 carte esportate entrano in Anki senza toccare il separatore; accenti e apostrofi corretti | **alto** |
| T066 | 14 chiavi UI ×5, inclusa la frase sul calendario che non viaggia | `data/i18n/ui-*.js` | 2h | `P` esce 0; la frase è visibile prima dell'export, non nel README | medio |
| T067 | Test di fase | `tests/unit/anki.test.mjs`, `tests/dom/anki.spec.js` | 6h | `T` verde; round-trip export-import su 40 carte con caratteri difficili | medio |

### F5 - O5 falsi amici (30h codice + 45h contenuto)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T070 | Struttura di `data/core/falsi-amici.js`: unione delle parole italiane con id stabili | `data/core/falsi-amici.js` (nuovo) | 3h | `V` verde; nessuna lettera fuori dall'alfabeto italiano nel file | basso |
| T071 | Canale `addLangData` e caricamento con gli `EAGER_FILES`; `setLanguage` lo ricarica | `assets/js/i18n.js`, `assets/js/core.js` | 5h | Cambio lingua a caldo da `pl` a `es`: l'insieme cambia interamente e non resta vuoto | **alto** |
| T072 | Gate `check-falsi-amici.mjs`: 30 voci minime per lingua, id esistenti, spiegazione presente, audio presente | `scripts/check-falsi-amici.mjs` (nuovo) | 4h | Tolgo una voce a `de`: esce 1 nominando lingua e id | medio |
| T073 | Collector in `extract_strings.mjs` e prima registrazione | `scripts/extract_strings.mjs` | 2h | Cancello un mp3 noto: `A` me lo riporta mancante. Prova per differenza, non per assenza di errori | **alto** |
| T074 | Vista e esercizi con tipi esistenti | `assets/js/views-falsi.js` (nuovo) | 8h | `S`: la rotta risponde, l'esercizio chiude con `onDone` una volta sola | medio |
| T075 | 30 coppie ×5 lingue, **scritte per lingua** | `data/i18n/<lang>/falsi-amici.js` ×5 | 45h (contenuto) | Lettura incrociata: due schede nella stessa posizione in due lingue non sono la stessa parola italiana salvo coincidenza reale. Ritmo dichiarato: circa 15 minuti per voce, verifica inclusa | **alto** |
| T076 | 10 chiavi UI ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0 | basso |
| T077 | `PRECACHE` e `SW_VERSION` per i 6 file nuovi | `sw.js` | 0,5h | Rete spenta: la vista si apre in tutte e 5 le lingue | medio |
| T078 | Test di fase | `tests/unit/falsi.test.mjs`, `tests/dom/falsi.spec.js` | 6h | `T` verde | basso |

### F6 - O3 shadowing (47h codice)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T080 | **Spike S1**: `getUserMedia` e riconoscimento vocale insieme; formati `MediaRecorder` su Chromium e WebKit | - | 4h | Esito scritto qui: praticabile o no, su quali browser, con quale mime. Se lo scoring non è praticabile, T084 esce dal piano | **alto** |
| T081 | Modulo registratore: guardia sul contesto sicuro, flusso dei permessi, stati, rilascio degli object URL | `assets/js/recorder.js` (nuovo) | 10h | Da `file://` la guardia scatta e la console resta pulita; 50 registrazioni di fila non fanno crescere la memoria in modo monotono | **alto** |
| T082 | Vista shadowing: nativa, conto alla rovescia, registrazione, riascolto alternato | `assets/js/views-shadow.js` (nuovo) | 10h | `S` su HTTPS o localhost: il ciclo si ripete senza ricaricare | medio |
| T083 | Degradazione dichiarata: `file://`, permesso negato, browser senza supporto | `assets/js/views-shadow.js` | 4h | Negando il permesso compare il messaggio che nomina il permesso, non un errore | **alto** |
| T084 | Scoring via riconoscimento vocale, solo se S1 lo dice praticabile, presentato come "quanto il riconoscitore ha capito" | `assets/js/views-shadow.js` | 5h | Il punteggio non è mai etichettato come giudizio di pronuncia | medio |
| T085 | Accessibilità: stato del pulsante, annunci di inizio e fine | `assets/js/views-shadow.js` | 4h | `a11y-gate`: 0 violazioni; un lettore di schermo annuncia inizio e fine | medio |
| T086 | 14 chiavi UI ×5, inclusa la frase "le registrazioni non si salvano" | `data/i18n/ui-*.js` | 2h | `P` esce 0; la frase compare prima della prima registrazione | medio |
| T087 | Test di fase con dispositivi finti Playwright | `tests/dom/shadow.spec.js` | 8h | `T` verde con `--use-fake-device-for-media-stream` | **alto** |

### F7 - O7 parlato reale (38h codice + 22h contenuto)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T090 | **Gate `check_connected.py`**, modellato su `check_minpairs.py`: sintetizza le due forme e boccia le coppie indistinguibili | `scripts/check_connected.py` (nuovo) | 6h | Esce 1 su una coppia costruita apposta per essere identica; il verdetto per elisione, troncamento e raddoppiamento è annotato qui | **alto** |
| T091 | Scala di velocità sulle registrazioni esistenti via `playbackRate`, senza mp3 nuovi | `assets/js/views-phonetics.js` | 5h | Una frase già registrata si sente a 1,4x con la stessa altezza; `A` riporta 0 file nuovi | basso |
| T092 | `data/core/parlato.js` con i soli fenomeni promossi da T090, e commento che motiva le assenze | `data/core/parlato.js` (nuovo) | 5h | `V` verde; il commento nomina ciò che il gate ha bocciato | medio |
| T093 | Esercizio di riconoscimento della forma piena, con tipi esistenti (D7) | `assets/js/exercises.js` o riuso | 8h | `onDone` una volta sola; nessuna voce nuova in `EX_TYPES` salvo eccezione motivata | medio |
| T094 | Collector e prima registrazione | `scripts/extract_strings.mjs` | 2h | Cancello un mp3 noto: `A` me lo riporta mancante | **alto** |
| T095 | Integrazione nella vista fonetica | `assets/js/views-phonetics.js` | 6h | `S`: la sezione compare e non rompe le coppie minime esistenti | basso |
| T096 | ~60 enunciati nelle due forme, verificati contro il gate | `data/core/parlato.js` | 12h (contenuto) | `check_connected.py` verde su tutti; ritmo dichiarato: circa 12 minuti per coppia | **alto** |
| T097 | Note contrastive ×5, scritte per lingua | overlay ×5 | 10h (contenuto) | La nota spagnola non ripete quella polacca | medio |
| T098 | 12 chiavi UI ×5 | `data/i18n/ui-*.js` | 2h | `P` esce 0 | basso |
| T099 | Test di fase | `tests/dom/parlato.spec.js` | 6h | `T` verde | basso |

### F8 - O8 dialoghi ramificati (33h codice + 38h contenuto)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T110 | Estensione additiva della shape: `id` sui turni, opzioni con destinazione sui turni dello studente | `data/core/conversations.js` | 8h | I 10 dialoghi esistenti non cambiano di un byte: `git diff` su di loro è vuoto | **alto** |
| T111 | Regole in `validate.mjs`: destinazione esistente, nessun nodo irraggiungibile, nessun ciclo senza uscita | `scripts/validate.mjs` | 5h | Introduco una destinazione inventata: `V` esce 1 nominando dialogo e turno | medio |
| T112 | Motore: `runConversation` cammina il grafo, il percorso lineare resta quello di oggi | `assets/js/views.js` | 10h | I 10 dialoghi vecchi si giocano identici; i test DOM esistenti restano verdi | **alto** |
| T113 | Rigiocare il ramo non preso senza rifare il dialogo | `assets/js/views.js` | 5h | Alla fine il bottone porta al punto di scelta, non all'inizio | basso |
| T114 | 4 dialoghi ramificati a diamante, 3 punti di scelta ciascuno | `data/core/conversations.js` | 24h (contenuto) | `V` verde; il conto dei turni per dialogo è annotato qui e resta sotto 20 | **alto** |
| T115 | Traduzioni delle righe nuove ×5 | `data/i18n/<lang>/conversations.js` ×5 | 14h (contenuto) | `P` esce 0 | medio |
| T116 | Registrazione delle righe nuove | - | 1h | `A` riporta 0 mancanti; delta audio annotato | medio |
| T117 | 8 chiavi UI ×5 | `data/i18n/ui-*.js` | 1,5h | `P` esce 0 | basso |
| T118 | Test di fase | `tests/dom/conversazione.spec.js` | 8h | `T` verde; un dialogo lineare e uno ramificato coperti entrambi | medio |

### F9 - O2 biblioteca, primo scaglione (8h codice + 100h contenuto per 28 testi)

Fase quasi interamente editoriale. Lo scaglione minimo sono 12 testi nuovi (circa 47h): il
resto si programma solo se il primo scaglione conferma il ritmo.

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T120 | 12 testi nuovi A2-C1, 7-9 frasi ciascuno, 3-5 domande in italiano | `data/core/readings.js` | 30h (contenuto) | `V` verde; ritmo dichiarato: circa 2,5h per testo con domande e revisione | **alto** |
| T121 | Revisione dell'italiano **prima** della registrazione | - | 5h (contenuto) | L'approvazione è avvenuta e annotata prima del lancio di `build_audio.py` | **alto** |
| T122 | Titolo, introduzione e glosse ×5 lingue | overlay ×5 | 12h (contenuto) | `P` esce 0 | medio |
| T123 | Registrazione e indice | - | 3h | `A` riporta 0 mancanti; delta audio annotato e sotto 2,5 MB per scaglione | medio |
| T124 | Copertura del lookup sui testi nuovi | `scripts/check_lookup.mjs` | 3h | Il gate resta sopra la soglia di T030 anche sui testi nuovi | medio |
| T125 | Secondo scaglione, stessi passi | come sopra | 53h | come sopra | medio |

### F10 - O1 simulatore CILS (62h codice + 50h contenuto)

| ID | Task | File | Stima | Verify | Rischio |
|---|---|---|---|---|---|
| T130 | **Verifica del formato sul sillabo ufficiale CVCL**, con URL e data citati | `specs/002-corso-irrinunciabile/` | 5h | Struttura, numero di item e soglie sono citati con la fonte. Finché non lo sono, la fase non prosegue | **alto** |
| T131 | Motore d'esame: sezioni, timer, nessun ritorno indietro, punteggio per sezione | `assets/js/cils.js` (nuovo) | 16h | Scaduto il tempo la sezione si chiude da sola e il punteggio è calcolato sulle risposte date | **alto** |
| T132 | Riuso dei builder esistenti per ascolto, lettura e scrittura; scrittura valutata con `Writing.analyse` | `assets/js/cils.js` | 8h | Nessun tipo nuovo; la scrittura mostra elementi trovati e non trovati, mai un voto | medio |
| T133 | Modulo orale non valutato: prompt, timer, registrazione (F6), risposta modello, griglia | `assets/js/views-cils.js` (nuovo) | 10h | La frase di limite compare **prima** dell'inizio; l'esito complessivo dichiara "tre prove su quattro" | **alto** |
| T134 | Contenitore `cils{}` additivo, nell'export JSON, nessun bump | `assets/js/core.js` | 4h | Profilo vecchio: il contenitore compare vuoto, `schema` invariato dopo F1 | basso |
| T135 | Accessibilità: timer con regione live, annuncio del cambio sezione | `assets/js/views-cils.js` | 4h | `a11y-gate`: 0 violazioni; il tempo residuo è annunciato a intervalli, non a ogni secondo | medio |
| T136 | 2 simulazioni complete: testi, domande, consegne, risposte modello | `data/core/cils.js` (nuovo) | 50h (contenuto) | `V` verde; ritmo dichiarato: circa 25h per simulazione | **alto** |
| T137 | Registrazione degli enunciati d'ascolto | - | 2h | `A` riporta 0 mancanti; delta audio sotto 3 MB | medio |
| T138 | 25 chiavi UI ×5, incluse le frasi di onestà scritte per lingua | `data/i18n/ui-*.js` | 5h | `P` esce 0 | medio |
| T139 | Test di fase | `tests/unit/cils.test.mjs`, `tests/dom/cils.spec.js` | 10h | `T` verde; una sezione scaduta produce il punteggio parziale corretto | **alto** |

### 7.1 Totali

| Fase | Feature | Codice | Contenuto | Totale |
|---|---|---|---|---|
| F0 | FIX pubblicazione | 8h | - | **8h** |
| F1 | O4 FSRS | 37h | 2h | **39h** |
| F2 | O2 motore | 41h | 4h | **45h** |
| F3 | O6 copertura | 27h | 3h | **30h** |
| F4 | O9 Anki | 26h | - | **26h** |
| F5 | O5 falsi amici | 30h | 45h | **75h** |
| F6 | O3 shadowing | 47h | - | **47h** |
| F7 | O7 parlato reale | 38h | 22h | **60h** |
| F8 | O8 dialoghi ramificati | 33h | 38h | **71h** |
| F9 | O2 biblioteca (2 scaglioni) | 8h | 100h | **108h** |
| F10 | O1 CILS | 62h | 50h | **112h** |
| **Somma** | | **357h** | **264h** | **621h** |
| Buffer imprevisti +15% | | | | +93h |
| Buffer volume contenuto +10% sulle 264h | | | | +26h |
| **Totale** | | | | **740h ≈ 92 giorni** |

Range onesto: **85-100 giorni lavorativi** per una persona sola, cioè 4-5 mesi.

**Il 42% del programma non è programmazione.** 264 ore su 621 sono scrittura di italiano,
scrittura di note contrastive in cinque lingue, revisione e registrazione. Le fasi F5, F8, F9
e F10 hanno più contenuto che codice; F9 è contenuto al 93%. Una stima che le trattasse come
task di codice sbaglierebbe il totale di circa il 70%, e sbaglierebbe soprattutto il tipo di
lavoro: F9 non accelera assumendo un secondo sviluppatore.

Se il contenuto arriva già scritto e revisionato (A3 sciolta in quel senso), il totale scende
a circa **45-52 giorni**. È la variabile singola che pesa di più su questo programma.

### 7.2 Ambito deciso: tutte e nove le feature

Il taglio MoSCoW proposto qui sotto è stato **respinto in sede di revisione**: la release
contiene tutte e nove le feature più il fix di pubblicazione, F0 → F10 per intero. Resta
scritto perché serve ancora a due cose: dice quale sottoinsieme costituisce un prodotto già
consegnabile se il programma va interrotto a metà, e dice in quale ordine si taglia se il
tempo finisce davvero.

- **Nucleo consegnabile**: F0 (pubblicazione), F1 (FSRS), F2 (motore del lookup), F4 (Anki).
  Il prodotto è pubblicato, ripassa con l'algoritmo giusto, ha il vocabolario a portata di dito
  e non tiene i dati in ostaggio.
- **Primo strato sopra**: F3 (copertura), F5 (falsi amici), F6 (shadowing).
- **Secondo strato**: F7 (parlato reale), F8 (dialoghi ramificati).
- **Ultime a entrare, prime a uscire se si taglia**: F9 (biblioteca) e F10 (CILS). Sono 220 ore,
  il 35% del programma, e dipendono quasi solo da lavoro editoriale.

| Livello | Ore con buffer | Giorni (A3 sciolta: contenuto generato, utente revisiona) |
|---|---|---|
| Nucleo (F0, F1, F2, F4) | ~136h | 12-14 |
| Nucleo + primo strato | ~325h | 26-30 |
| **Tutto, ambito deciso** | **740h** | **45-52** |

I due punti in cui il programma si può fermare senza lasciare macerie restano la fine di F4 e
la fine di F8 (§ 4).

### 7.3 Da confermare alla revisione

Scelte di prodotto, non fatti scopribili. Il piano prende un default per non fermarsi, e il
default va confermato o corretto. Ognuna è isolata in un punto solo del codice.

| # | Punto | Default assunto | Dove si cambia |
|---|---|---|---|
| C1 | Ritenzione desiderata di partenza per FSRS | 0,90, modificabile dalle impostazioni | `assets/js/fsrs.js` (T012), `views.js` (T017) |
| C2 | Tetto del registro delle ripetizioni | Le ultime 5000, potatura dalla più vecchia | `assets/js/core.js` (T013) |
| C3 | Soglia di copertura accettabile per il lookup | Dichiarata in T030 prima di leggere il numero | `scripts/check_lookup.mjs` |
| C4 | Taglio della lista di frequenza | Prime 2000 forme lemmatizzate | `data/core/frequenza.js` (T050) |
| C5 | Numero di falsi amici per lingua | 30 come minimo di gate, 40 come obiettivo | `scripts/check-falsi-amici.mjs` (T072) |
| C6 | Profondità della ramificazione | 3 punti di scelta a diamante, 2 opzioni ciascuno | `data/core/conversations.js` (T114) |
| C7 | Numero di simulazioni CILS | 2 complete | `data/core/cils.js` (T136) |
| C8 | Destino di `gsrs` | Da decidere in T016: popolarlo con O4 o rimuoverlo | `assets/js/core.js` |

## 8. File impattati

| File | Tipo | Scopo |
|---|---|---|
| `.nojekyll` | nuovo | Disattiva la pipeline Jekyll su Pages |
| `assets/fonts/*.woff2`, `assets/fonts/OFL.txt` | nuovo | Fraunces e Inter in casa: unica dipendenza di rete rimossa |
| `index.html` | modifica | `@font-face` locali, 11 script nuovi, 5 voci di navigazione |
| `assets/css/app.css` | modifica | `@font-face`, stili delle viste nuove. Se supera ~900 righe, split |
| `sw.js` | modifica | `PRECACHE` per font, moduli e dati nuovi; `SW_VERSION` alzata una volta per fase che aggiunge file |
| `CLAUDE.md` | modifica | Correzione della baseline (13 tipi, 214 test, 501 chiavi UI, 2657 mp3); regola del canale `addLangData`; nota su `check_connected.py` |
| `assets/js/core.js` | modifica | `load()` che migra, bump a schema 3, FSRS agganciata, registro delle ripetizioni, contenitore `cils{}`, caricamento del canale per lingua |
| `assets/js/errors.js` | modifica minima | Riaggancio alla `schedule` nuova |
| `assets/js/i18n.js` | modifica | Canale `addLangData` per i dati che non sono overlay |
| `assets/js/views.js` | modifica | Grafo delle conversazioni, anteprima dell'import Anki, ritenzione nelle impostazioni |
| `assets/js/views-phonetics.js` | modifica | Sezione parlato reale |
| `assets/js/exercises.js` | modifica eventuale | Solo se D7 promuove un tipo nuovo |
| `assets/js/fsrs.js` | nuovo | Algoritmo puro, testabile su vettori di riferimento |
| `assets/js/lemma.js` | nuovo | Risolutore forma-lemma |
| `assets/js/frequency.js` | nuovo | Copertura, funzioni pure |
| `assets/js/anki.js` | nuovo | Serializzazione e parsing, funzioni pure |
| `assets/js/recorder.js` | nuovo | Registrazione con guardie sul contesto sicuro |
| `assets/js/cils.js` | nuovo | Motore d'esame |
| `assets/js/views-lookup.js`, `views-frequency.js`, `views-falsi.js`, `views-shadow.js`, `views-cils.js` | nuovo | Viste registrate su `global.Views` |
| `data/core/falsi-amici.js` | nuovo | Unione delle parole italiane con id stabili |
| `data/core/frequenza.js` | nuovo | Lista di frequenza con intestazione di provenienza e licenza |
| `data/core/parlato.js` | nuovo | Enunciati promossi dal gate sulla voce |
| `data/core/cils.js` | nuovo | Prove, domande e consegne, in italiano |
| `data/core/readings.js` | modifica | Testi nuovi a scaglioni, `glossIt` esteso |
| `data/core/conversations.js` | modifica | `id` e destinazioni additivi, 4 dialoghi nuovi |
| `data/i18n/<lang>/falsi-amici.js` ×5 | nuovo | Scritti per lingua, fuori dalla parità, coperti dal gate proprio |
| `data/i18n/<lang>/readings.js`, `conversations.js`, `parlato.js` ×5 | modifica o nuovo | Traduzioni e note per lingua |
| `data/i18n/ui-<lang>.js` ×5 | modifica | ~119 chiavi nuove ciascuno |
| `scripts/validate.mjs` | modifica | Regole sul grafo dei dialoghi, sui falsi amici, sulle prove d'esame |
| `scripts/extract_strings.mjs` | modifica | Collector per `falsi-amici`, `parlato`, `cils` |
| `scripts/check_lookup.mjs` | nuovo | Copertura del risolutore, con soglia |
| `scripts/check-falsi-amici.mjs` | nuovo | Gate del dataset fuori parità |
| `scripts/check_connected.py` | nuovo | Gate sulla voce, prima del contenuto di O7 |
| `tests/unit/*.test.mjs`, `tests/dom/*.spec.js` | nuovo e modifica | Una coppia per fase |
| `docs/REPORT_ATTIVITA.md` | modifica | Una entry per fase |
| `README.md` | modifica | Procedura di pubblicazione, limiti di O3 per browser |

## 9. Rischi

### 9.1 Rischi di contenuto

Sono i primi perché sono i più grandi, e perché sono quelli che un piano scritto da chi
programma tende a nascondere dentro una riga chiamata "file di dati".

**RC1. Il contenuto è il cammino critico e non accelera con più persone.** 264 ore su 621. F9
è editoriale al 93%, F10 al 45%, F5 al 60%. Poiché la scrittura di italiano e la revisione
dipendono da una sola persona che conosce il corso, un secondo sviluppatore non riduce quelle
ore: riduce solo le 357 di codice. → Scaglionamento dichiarato (F9 a blocchi da 12 testi, F10
a una simulazione per volta), ritmo editoriale dichiarato per item in ogni sub-task
(2,5h a testo, 15 minuti a falso amico, 25h a simulazione), e la conferma di A3 come condizione
di apertura per F5, F7, F8, F9 e F10.

**RC2. Le note contrastive tradotte invece che riscritte degradano senza che nessun gate se ne
accorga.** `parity.mjs` verifica la forma, non il senso, e `check-falsi-amici.mjs` verificherà
la presenza, non la pertinenza. Un falso amico polacco tradotto in spagnolo è una scheda
formalmente corretta e didatticamente vuota. → Verifica di lettura incrociata in T075 e T097
(due schede nella stessa posizione in due lingue non devono essere la stessa parola italiana),
e la regola scritta in CLAUDE.md accanto al gate.

**RC3. La revisione dopo la registrazione costa il doppio.** Una correzione dopo
`build_audio.py` produce un mp3 nuovo, una riga in `audio-index.js` e un file orfano che resta
nella history. → L'approvazione del testo italiano è un sub-task esplicito che precede la
registrazione in F7, F8, F9 e F10, non un controllo implicito.

**RC4. Il contenuto di O7 può essere invalidato in blocco dalla voce.** Il precedente è dentro
il progetto: l'insieme per la "o" aperta e chiusa non esiste perché nessuna delle tre coppie
provate ha prodotto due file diversi. Se il raddoppiamento sintattico non passa, 12 ore di
scrittura sarebbero da buttare. → `check_connected.py` (T090) gira **prima** di T096, e il suo
verdetto è annotato nel task; i fenomeni bocciati escono dal corso con il motivo scritto nel
file di dati, come già fatto per la "o".

**RC5. Un simulatore d'esame con la struttura sbagliata è peggio di nessun simulatore.**
Produce fiducia mal riposta in chi paga una tassa d'esame. Tutto ciò che questo piano dice
della struttura CILS B1 Cittadinanza è `unknown` finché T130 non lo verifica sul sillabo
ufficiale. → T130 è bloccante per l'intera F10 e cita fonte e data.

**RC6. I dati esterni portano obblighi di licenza.** La lista di frequenza di O6 e un
eventuale lessico morfologico per O2 sono i primi dati del progetto che non nascono qui.
Una clausola share-alike si estende a ciò che li incorpora. → Verifica della licenza **prima**
del codice che li consuma (T050), intestazione di provenienza obbligatoria, e in D3 la
preferenza esplicita per la soluzione che non spedisce dati di terzi.

### 9.2 Rischi di codice

**RK1. Il bump di schema cancella i profili in silenzio.** Misurato: `load()` (`core.js:68`)
accetta solo `schema === SCHEMA` e non chiama `migrateUp`. Alzare `SCHEMA` a 3 senza toccare
`load()` fa ripartire da zero ogni studente, senza un errore da nessuna parte, e senza che
noi possiamo accorgercene. È il rischio più grave del programma. → T010 e T011 in testa a F1,
con il test rosso prima del fix; T014 verifica che la migrazione non sposti le scadenze; T020
verifica la continuità dell'export.

**RK2. `schedule()` serve due mazzi.** Cambiarla cambia anche il quaderno degli errori
(`errors.js:66` e `:97`), le cui asserzioni sono parte delle 214 esistenti. → T015 riaggancia
entrambi i chiamanti in un solo punto, e ogni asserzione preesistente che va modificata è
elencata una per una con il motivo. Una suite che diventa verde perché è stata riscritta non è
una suite verde.

**RK3. Registrazione e `file://` sono incompatibili per costruzione.** `getUserMedia` richiede
un contesto sicuro. O3 e la parte orale di O1 non funzioneranno mai dal doppio clic, che è il
modo di apertura dichiarato nel README. → Degradazione esplicita (T083) sul modello già usato
per il riconoscimento vocale, guardia sul protocollo e non dentro un `try/catch`, e F0 prima
di F6 perché senza un URL HTTPS quella fase non si può nemmeno provare.

**RK4. Le registrazioni possono affamare i progressi.** `localStorage` è una chiave sola da
circa 5 MB condivisa da tutto lo stato: qualche blob audio in base64 la riempie, e da quel
momento smettono di persistere anche i progressi delle lezioni. → A8: niente persistenza,
detto allo studente prima che registri; se servirà, sarà IndexedDB e una decisione a sé (D6).

**RK5. Un dataset fuori dalla parità è un angolo non presidiato.** O5 esce dal perimetro di
`parity.mjs` per costruzione (§ 3.4, D2). Senza un gate proprio, una lingua con il file
mancante mostra una vista vuota e nessuno se ne accorge. → `check-falsi-amici.mjs` (T072) è
condizione di chiusura della fase, non un extra, e la deroga è documentata in CLAUDE.md.

**RK6. Campi pronunciati senza collector.** `extract_strings.mjs` cammina su una lista chiusa.
Cinque feature aggiungono campi pronunciati; ognuna senza il suo collector produce silenzio,
cioè la sintesi di sistema al posto della voce registrata, senza errori. → Il collector si
aggiunge nello stesso commit del campo, e la verifica è per differenza: si cancella un mp3
noto e il dry-run lo deve riportare mancante (T073, T094).

**RK7. Ogni file nuovo che non entra in `PRECACHE` rompe il primo avvio offline.** Il
programma aggiunge 11 moduli, 4 file di dati e i font. → Voce esplicita per fase (T003, T054,
T077) e `SW_VERSION` alzata una volta per fase che aggiunge file.

**RK8. Il CSV è un vettore.** In uscita, un campo che comincia per `=` diventa una formula in
un foglio di calcolo; in entrata, il contenuto arriva da un file che non abbiamo scritto noi.
→ Neutralizzazione dei prefissi in export (T060), rendering solo via `esc()` o `textContent`
in import (T064), tetto di righe e coerenza delle colonne (T061).

**RK9. 595 valori nuovi in cinque lingue.** Gli array si fondono per indice e `I18n.t` cade
sull'inglese: una overlay incompleta non produce errore, produce un'app che in spagnolo mostra
frasi in inglese. → `P` verde come condizione di chiusura di **ogni** fase, più `I18n.missing()`
vuoto dopo aver percorso ogni vista nuova nelle 5 lingue.

**RK10. Pressione sul limite di 300 righe.** `cils.js` e `views-cils.js` sono i candidati a
sfondare, e `views.js` è già a 930. → Split previsto in § 6; il grafo delle conversazioni è
l'unica aggiunta a `views.js` e va tenuta minima.

## 10. Criteri di successo del programma

Eseguibili da riga di comando o osservabili in browser.

```bash
npm run test:all                                   # unitari + DOM, tutto verde
node scripts/validate.mjs                          # e per ognuna delle 5 lingue
node scripts/parity.mjs                            # esce 0
node scripts/check_lookup.mjs                      # copertura sopra la soglia di T030
node scripts/check-falsi-amici.mjs                 # 5 lingue complete, id risolti, audio presente
uv run --script scripts/check_connected.py         # nessuna coppia indistinguibile nel corso
uv run --script scripts/check_minpairs.py          # invariato rispetto a oggi
node scripts/extract_strings.mjs
uv run --script scripts/build_audio.py --dry-run   # 0 file mancanti
node scripts/serve.mjs 8080
```

Più, in browser, la sequenza che nessuno script copre:

1. Profilo salvato prima del programma: dopo il primo avvio i progressi ci sono tutti, le
   carte scadute oggi sono lo stesso numero di prima, `schema` è 3 e la migrazione è avvenuta
   una volta sola.
2. Un JSON esportato prima del programma si reimporta senza errori e produce lo stesso numero
   di carte.
3. Sull'URL pubblico con la rete spenta: l'app si apre, i font sono quelli del corso, il corso
   si naviga, l'audio già ascoltato si sente.
4. `index.html` aperto con doppio clic da disco: funziona, i font ci sono, la console è pulita,
   e le due feature che richiedono il microfono dichiarano perché non sono disponibili.
5. Tocco su una parola qualsiasi di un testo: la scheda si apre con la forma base, e da
   tastiera si arriva allo stesso risultato.
6. Cambio lingua a caldo da `pl` a `es`: i falsi amici cambiano interamente, le carte non si
   orfanano, `I18n.missing()` resta vuoto.
7. Export verso Anki e import in Anki reale: 40 carte, accenti e apostrofi corretti.
8. Un dialogo ramificato giocato due volte con scelte diverse produce due finali coerenti; i
   10 dialoghi vecchi sono identici a prima.
9. `a11y-gate` sulle viste nuove a 375 e 1280 px, in tema chiaro e scuro: 0 violazioni, come
   le viste esistenti.
10. Il delta audio totale è sotto i 12 MB dichiarati in A5, e ogni fase ha annotato il proprio.

## 11. Handoff

Prima di aprire F0 servono due conferme:

- **A3** (chi scrive le 264 ore di contenuto): bloccante per F5, F7, F8, F9 e F10;
- **A9** (accesso al sillabo ufficiale CVCL): bloccante per F10.

Le sei decisioni marcate **ADR** in § 3.4 (D1 schema di O4, D2 canale di O5, D3 risolutore di
O2, D4 perimetro di O1, D5 shape di O8, e per riflesso D6) attendono l'ADR dell'agent
`architect`. Se la sua conclusione differisce da queste raccomandazioni, cambiano i sub-task
nominati nelle rispettive righe e non la sequenza delle fasi: F1 resta prima di F2, F2 prima
di F3, F6 prima di F10, il gate di F7 prima del contenuto di F7.

Agent successivo consigliato: **`tdd-guide`** per F1, dove il rosso prima del verde su
`load()` non è una preferenza ma l'unico modo di dimostrare che il difetto esiste (T010).
Da F2 in poi `fullstack-developer` fase per fase, con `code-reviewer` a chiusura di ogni fase,
`a11y-gate` sulle fasi che aggiungono UI (tutte tranne F0 e F9), e `security-reviewer` su F4,
che è l'unica che accetta un file scritto da qualcun altro.
