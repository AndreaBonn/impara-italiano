# 006 — Input, produzione, ritorno

**Stato**: proposto · **Data**: 2026-09-11
**Ambito**: O1 biblioteca di input graduato, O2 referto sulla produzione d'esame, O3 conversazione
libera, O4 gancio di ritorno, O5 riequilibrio della parte alta, O7 baseline di `CLAUDE.md`.
**Fuori ambito**: pronuncia fonema per fonema (O6), esclusa dall'utente.
**Precedenti**: `specs/002-corso-irrinunciabile/adr.md` (ADR-006..010) e
`specs/005-giudice-llm/` (lo stack LLM che questo programma estende).

## Obiettivo

Il corso ha 1514 esercizi e 2252 parole italiane da leggere in tutto. Insegna molto e dà
poco da consumare, non dice niente su ciò che lo studente produce, e non ha alcun modo di
farsi ricordare il giorno dopo. Questo programma chiude i tre buchi e rimette la baseline
di `CLAUDE.md` a coincidere con il repository.

## Definition of Done

**O7 — baseline**
- `node scripts/baseline.mjs` stampa la tabella dei numeri del repository; due esecuzioni
  di fila danno output identico.
- Ogni riga della tabella in `CLAUDE.md` nomina il comando che la riproduce.

**O4 — gancio di ritorno**
- Studente con carte in scadenza: alla chiusura della scheda l'icona porta il badge col
  loro numero; alla riapertura, ripassate tre carte, il badge scende di tre.
- Il badge è **spento di default** e si accende da Impostazioni: è l'unica cosa del corso
  visibile a chi guarda il telefono di qualcun altro.
- `navigator.storage.persist()` viene chiesto una volta sola, dopo la prima lezione
  conclusa, mai al primo caricamento. L'esito compare in Impostazioni in tre stati.
- Il `.ics` scaricato si importa senza errori in due calendari reali e crea un evento
  ricorrente all'ora scelta. **Non verificato:** nessun import reale è stato fatto. Quello
  che è stato misurato è la forma del file, con `tests/unit/ics.test.mjs`: escape di `\`,
  `;`, `,` e newline, folding a 75 ottetti senza spezzare una coppia surrogata, `DTSTART`
  in ora locale fluttuante, `UID` presente. Finché l'import non viene fatto, il criterio
  resta aperto e il file va trattato come non provato sul campo.
- Dove `beforeinstallprompt` e `setAppBadge` non esistono (Firefox, iOS) non compare
  nessun controllo morto: al loro posto c'è il testo delle istruzioni manuali.

**O2 — referto sulla produzione**
- La produzione scritta riceve, sotto il rilevamento presente/mancante già esistente, una
  lettura in prosa di 3-6 frasi che cita le parole dello studente.
- Nessuna cifra, percentuale o parola di verdetto attraversa quella lettura, e la garanzia
  è un test su `CilsReport`, non una riga del prompt.
- Le caselle di autovalutazione sparite: `grep -rn 'type="checkbox"' assets/js/cils-html.js
  assets/js/views-cils.js` non torna nulla (ADR-009 le aveva scartate come opzione G).
  Il criterio nasceva come `grep -rn "controllo\|selfCheck" …` e andava riscritto: quel
  pattern colpisce `Cils.controlloScritta`, cioè il rilevamento presente/mancante che la
  riga sopra dice esplicitamente di tenere. Un gate che non può diventare verde non
  controlla niente, dichiara solo di farlo.
- Il punto 5 di ADR-009 è onorato: il testo della prova orale passa da `Writing.analyse`.
- Senza chiave, senza consenso o da `file://` il referto è byte per byte quello di oggi.

**O3 — conversazione libera**
- Scenario "al bar", studente A2: il modello risponde in italiano al livello e, separata,
  la correzione. Lo studente che scrive nella propria lingua riceve comunque italiano.
- Tetto di turni dichiarato prima di cominciare e contatore visibile.
- Una conversazione non può da sola esaurire il budget del giudice degli esercizi: test.
- Terzo consenso, distinto e revocabile. Revocato, nessuna richiesta parte.
- `docs/PRIVACY.it.md` dice che qui esce l'intera conversazione, con la riga di riscontro.

**O1 — biblioteca**
- Ogni livello ha almeno un testo fra 400 e 800 parole, con ascolto continuo, ripresa dal
  punto in cui si era rimasti e consultazione di qualsiasi parola. A1 (289 parole) e A2
  (381) erano sotto soglia alla chiusura della fase 4 e sono stati estesi dopo, a 415 e
  527: la soglia era scritta e non rispettata, e nessun gate la misurava. Ora la misura `validate.mjs`, che esce 1 fuori dalla fascia 400-800.
- Aprire il corso senza entrare in biblioteca non carica nessun file della biblioteca.
- `uv run --script scripts/build_audio.py --dry-run` dice zero mancanti.

**O5 — riequilibrio**
- B2, C1 e C2 raggiungono la soglia decisa, con `validate.mjs` e `parity.mjs` verdi su
  tutte e cinque le lingue.

**Trasversale**: i dodici gate verdi a ogni fase; le stringhe delle cinque lingue entrano
nello stesso commit del codice che le usa, mai in una passata finale.

## Assunzioni

- Lo studente porta la propria chiave API. Nessun proxy, nessuna chiave nel repository.
  Se questo cambia, O2 e O3 vanno ripianificate.
- La voce del partner in O3 è sintesi di sistema: una frase generata non esiste in
  `data/core/` e quindi non può avere un mp3 (`extract_strings.mjs` legge solo lì). Va
  dichiarato nell'interfaccia, non nascosto.
- I quattro provider restano quelli. Nessun quinto dentro questo programma.
- Le soglie di ADR-010 non vengono toccate: il programma intero porta il corpus a circa
  4700 mp3 e 65 MB, contro soglie di 8000 file e 300 MB.
- O5 non tocca la cumulatività: le lezioni nuove entrano in unità nuove in coda al
  livello, mai in mezzo a quelle esistenti.
- Le registrazioni dello studente restano in memoria di sessione. Nessun audio in
  `localStorage` né in IndexedDB.

## Decisioni

Dove `planner` e `architect` hanno dato risposte diverse, la divergenza è segnata.

| D | Domanda | Decisione | Perché |
|---|---|---|---|
| D1 | Come arriva la storia dei turni ai provider | Terzo campo `history[]` facoltativo, normalizzato da **tre** funzioni per dialetto (OpenAI e Groq condividono già `chatBody`), non quattro copie. Con `history` assente il body esce identico a oggi | I due agent convergono sulla sostanza; la forma per dialetto è dell'`architect` e costa meno per provider futuro |
| D2 | Dove vive la conversazione | Coppia nuova `chat-rules.js` + `chat-run.js`, mai dentro `talk-run.js` | `talk-run.js` tiene tre decisioni opposte a questa modalità: l'errore ferma la scena, il ramo più vicino vince, l'errore entra nel quaderno |
| D3 | Forma del referto sulla produzione | Prosa, nessun numero, più una guardia in codice sul modello di `clamp`, più un addendum ad ADR-009 | La griglia ufficiale produce numeri, e ADR-009 punti 2 e 3 vietano che un numero attraversi la sezione delle produzioni |
| D4 | Come si raccoglie il testo della prova orale | **Registra ora, scrivi dopo** (via (a), scelta dall'utente l'11 settembre 2026) | Vedi sotto: due misure sul codice escludono la trascrizione dal vivo così com'è oggi |
| D5 | Dove vive la biblioteca | `library-<lvl>.js` dentro i `dataFiles` del livello, elenco costruito col pattern «disegna, tira, ridisegna» già in `views-frequency.js:48` | Nessun meccanismo di caricamento nuovo. Evita anche la trappola che l'`architect` segnala sulla propria variante: `setLanguage` ricarica gli overlay dei soli livelli caricati |
| D6 | Quante lezioni ai livelli alti | **Cinque unità**: B2 a 24, C1 a 20, C2 a 16 (scelta dall'utente l'11 settembre 2026). 280h di scrittura, ~200 frasi italiane nuove, ~400 mp3 | È budget editoriale, non architettura |
| D7 | Aggiornamento del badge | Solo ad app aperta, col numero dell'ultima apertura. `periodicsync` scartato | Esiste solo su Chromium installato e tace altrove senza dirlo. Sottostimare è onesto, mostrare un numero vecchio al rialzo no |

### D4 — la divergenza, con il fatto che la decide

Il `planner` propone `SpeechRecognition` e `MediaRecorder` insieme durante la prova, con
l'STT che degrada. Due misure sul codice dicono che così non regge:

- `assets/js/audio.js:258` imposta `rec.continuous = false`: il riconoscimento si chiude
  alla prima pausa. Una presentazione d'esame dura un minuto e di pause ne ha molte;
- `assets/js/recorder.js:71` dichiara già che due stream sul microfono non convivono.

Restano due vie reali, e la scelta cambia cosa vede lo studente. **Scelta la (a).**

- **(a)** La registrazione resta durante la prova. Il testo si raccoglie **dopo**, in una
  fase non cronometrata: lo studente si riascolta e scrive cosa ha detto. Il referto
  etichetta quella riga come *testo fornito dallo studente*, mai *trascrizione*. Funziona
  ovunque, iOS compreso. Costo: un passo in più che qualcuno salterà, e lo studente
  tende a scrivere ciò che voleva dire.
- **(b)** Trascrizione dal vivo con un percorso STT continuo dedicato, **al posto** della
  registrazione. Dà il testo vero di ciò che è stato detto. Costo: niente riascolto,
  niente su iOS, e un secondo percorso di riconoscimento da mantenere accanto a quello
  che serve ai 150 esercizi `speak`.

## Rilievi di sicurezza integrati

Dal `security-reviewer`, sul design e non sul codice. Nessuno bloccante, tutti da scrivere
come sub-task prima dell'implementazione.

| S | Rilievo | Contromisura |
|---|---|---|
| S1 | Una guardia a lista nera su cifre e percentuali non ferma un verdetto discorsivo («hai superato con ottimo risultato») | Lista nera deterministica su cifre, percentuali e lessico di verdetto, più la frase permanente accanto al referto. **Rischio residuo dichiarato nell'addendum ad ADR-009**: nessuna guardia in codice può togliere un giudizio scritto in prosa, e va detto invece di fingere che il filtro basti |
| S2 | Il tema d'esame e il testo dell'orale possono contenere nome, città, famiglia, e oggi escono con lo stesso consenso pensato per una frase | Il consenso nomina «l'intero tema e il testo della prova orale»; avviso prima del primo invio |
| S3 | La storia rimandata a ogni turno contiene anche le risposte precedenti del modello: un turno avvelenato rientra come contesto legittimo | Nessun testo proveniente dal modello raggiunge `innerHTML`: la risposta e la correzione entrano solo da `textContent` (`assets/js/views-chat.js:124`, `:130`, `:136`), e il gate sta lì, sul punto d'ingresso. La formulazione iniziale vietava `innerHTML` nel file: è più stretta del rischio e fallisce su markup costante, che nel file resta in due punti (`:161`, `:237`, entrambi con le stringhe i18n passate da `Core.esc`). In più, cap sui turni conservati e sui caratteri totali |
| S4 | `SUMMARY` e `DESCRIPTION` di un `.ics` senza escape iniettano una proprietà nel calendario di chi lo importa | `escapeIcsText()` dedicato su `\`, `;`, `,` e newline; `UID` casuale |
| S5 | `setAppBadge` mostra a livello di sistema operativo quante carte sono in scadenza, anche a schermo bloccato: è la prima cosa del corso visibile senza aprirlo | Spento di default, si accende da Impostazioni |
| S6 | `storage.persist()` non espone niente di nuovo | Nessun sub-task |

## Fasi

Sei fasi, in ordine di codice decrescente e contenuto crescente. Dopo ognuna il corso è
spedibile: il criterio non è la comodità, è che le fasi di codice si verificano da sole e
chiudono in giorni, mentre quelle editoriali si scaglionano per testo e per unità, dove un
taglio non lascia macerie.

| Fase | Contenuto | Codice | Scrittura |
|---|---|---|---|
| 0 | Baseline riproducibile (O7) | 4h | 0 |
| 1 | Gancio di ritorno (O4) | 29h | 110 valori × lingua |
| 2 | Referto sulla produzione (O2) | 37h | 60 valori |
| 3 | Conversazione libera (O3) | 50h | 180 valori + 6 scenari |
| 4 | Biblioteca: codice, poi testi a scaglioni (O1) | 17h | 7,5h per testo |
| 5 | Riequilibrio, una unità per volta (O5) | 0 | 56h per unità da 4 lezioni |

La scomposizione in sub-task, con dipendenze e verifica per riga, sta in `tasks.md`.

## Il costo del contenuto, separato da quello del codice

| Voce | Frasi italiane nuove | mp3 nuovi | Valori × 5 lingue | Ore di scrittura |
|---|---|---|---|---|
| O7 baseline | 0 | 0 | 0 | 0 |
| O4 gancio | 0 | 0 | 110 | dentro il codice |
| O2 referto | 0 | 0 | 60, meno 10 rimossi | 0 |
| O3 conversazione | ~60 righe di scenario | 0 | 180 | 6h |
| O1 biblioteca, 12 testi | ~480 frasi | ~800 | 1740 | 90h |
| O5 riequilibrio, 20 lezioni | ~200 campi per lezione | ~400 | 6600 | 280h |
| **Totale** | | **~1200**, corpus a ~4700 file e ~65 MB | **~8690** | **376h** |

Il codice è 137h, il contenuto 376h: **il 73% di questo programma non è programmazione**.
I blocchi contrastivi si riscrivono per lingua e non si traducono, quindi su quelli non
esiste economia di scala. Il numero si dichiara e non riduce lo scope: quanto contenuto
produrre è una decisione dell'utente, non del piano.

## Rischi

| R | Rischio | Mitigazione |
|---|---|---|
| R1 | Il contratto a turno singolo dei provider potrebbe non reggere più turni su uno dei tre dialetti, ritardando la fase 3 | 3.1 è il primo sub-task e ha il suo test per provider prima che esista la vista |
| R2 | Il referto in prosa può diventare il voto che ADR-009 vieta | La guardia è una proprietà del codice, non del prompt; il rischio residuo su un verdetto discorsivo è dichiarato, non nascosto (S1) |
| R3 | Il testo della prova orale non arriva, per la ragione misurata in D4 | La decisione D4 si prende prima di scrivere la fase 2 |
| R4 | `MAX_PER_SESSION = 60` è tarato su verdetti da una riga: una conversazione lunga spegne il giudice degli esercizi per il resto della sessione | Budget separato, tetto per conversazione, test esplicito in 3.4 |
| R5 | In O3 esce l'intera conversazione e non una frase: il consenso dato per il giudice non la copre | Terzo consenso più la riga di riscontro in 3.10 |
| R6 | Ogni file puro nuovo entra nel gate di copertura al 99% | I quattro file puri nuovi nascono con i loro test e le loro mutazioni |
| R7 | Sei opzioni insieme sono oltre 500 ore: il programma può fermarsi a metà lasciando nakładki incomplete | Le fasi 4 e 5 procedono per singolo testo e per singola unità, e ognuno chiude i suoi gate prima che parta il successivo |

## Criteri di successo

Con ogni chiave API rimossa: il corso si apre da `file://` senza un errore in console; i
dodici gate sono verdi; `node scripts/baseline.mjs` e la tabella di `CLAUDE.md`
coincidono; l'esame torna il referto di oggi e con una chiave reale aggiunge la prosa
senza un numero; una conversazione di dieci turni non tocca il budget del giudice; la
biblioteca non si carica finché non ci si entra; il badge, se acceso, mostra le carte in
scadenza dell'ultima apertura; il `.ics` si importa in due calendari.
