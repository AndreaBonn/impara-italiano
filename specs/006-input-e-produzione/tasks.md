# 006 — Scomposizione

Una riga per sub-task: id, dipendenze, cosa traccia, come si verifica. Le fasi sono
indipendentemente mergiabili: dopo la fase N il corso è usabile anche se N+1 non arriva
mai. Stessa forma di `specs/005-giudice-llm/tasks.md`.

## Fase 0 — La baseline che dice il vero (O7)

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 0.1 | `scripts/baseline.mjs`: unità, lezioni, esercizi, letture, conversazioni, mp3, byte di audio, chiavi per lingua, file e righe di `assets/js/` | — | O7 | due esecuzioni di fila danno output identico; i numeri combaciano con `validate.mjs` e con `find audio -name "*.mp3" \| wc -l` | 2h |
| 0.2 | Riscrittura della tabella baseline in `CLAUDE.md`, col comando accanto a ogni riga | 0.1 | O7 | `node scripts/baseline.mjs` e la tabella coincidono riga per riga | 1h |
| 0.3 | Correzione del commento a `store.js:64`: `merge()` copia anche le chiavi fuori dai default, non le scarta | — | O7 | `grep -n "skips keys outside" assets/js/store.js` non torna nulla | 0,5h |

Sottototale 3,5h, con buffer **4h**. Contenuto: zero.

## Fase 1 — Gancio di ritorno (O4)

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 1.1 | `retention-rules.js` (globale `RetentionRules`): quando chiedere lo spazio persistente, quando proporre l'installazione, che numero mette il badge dato il mazzo e un istante | — | O4, S5 | `npm test`: il primo caricamento non chiede niente; dopo la soglia chiede una volta; un rifiuto non torna | 3h |
| 1.2 | `ics.js` (globale `Ics`): VCALENDAR con RRULE giornaliera, CRLF, piegatura a 75 ottetti, `escapeIcsText()` su `\`, `;`, `,` e newline, `UID` casuale | — | O4, S4 | test su un promemoria con virgola e newline nel titolo; riga più lunga ≤ 75 ottetti; property injection non passa | 3h |
| 1.3 | `retention.js`: `storage.persist()`, `setAppBadge`/`clearAppBadge`, cattura di `beforeinstallprompt`, download sul percorso di `Core.downloadBackup` | 1.1, 1.2 | O4 | test DOM con le API assenti: nessun errore in console, nessun controllo visibile | 4h |
| 1.4 | Contenitore `retention` in `defaultState()` e in `SHAPE`, badge **spento di default** | — | O4, S5 | test: profilo vecchio caricato, contenitore vuoto, `SCHEMA` resta 2 | 1,5h |
| 1.5 | Impostazioni: interruttore del badge, ora del promemoria, scarica `.ics`, stato dello spazio persistente in tre stati, bottone di installazione | 1.3, 1.4 | O4, S5 | click-through: ogni controllo azionato e il suo esito registrato | 4h |
| 1.6 | Testo delle istruzioni manuali dove `beforeinstallprompt` non esiste | 1.5 | O4 | su Firefox compare il testo e non il bottone | 1h |
| 1.7 | ~22 chiavi × 5 lingue | 1.5, 1.6 | O4 | `node scripts/parity.mjs` verde | 2,5h |
| 1.8 | `PRECACHE`, ordine `<script>` in `index.html`, costante nel harness, `check_swversion.mjs --napraw` | 1.1-1.3 | — | `check_precache.mjs` e `check_swversion.mjs` verdi | 1,5h |
| 1.9 | 6 mutazioni su `retention-rules.js` e `ics.js` | 1.1, 1.2 | — | `npm run test:mutations` verde | 1,5h |
| 1.10 | Click-through a 375 e 1280 px; badge osservato a scheda chiusa; `.ics` importato in due calendari reali | 1.5 | O4 | l'evento ricorrente compare in entrambi | 2h |

Sottototale 24h, con buffer **~29h**. Contenuto: 110 valori di interfaccia. Nessun mp3.

## Fase 2 — Referto sulla produzione d'esame (O2)

Precondizione: **D4 decisa**. I sub-task 2.6 e 2.7 cambiano forma a seconda della via.

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 2.1 | Chiusura del drift con ADR-009: via il campo `controllo` dai due simulatori, la lista in `cils-html.js:176`, `spuntate()` in `views-cils.js:246`, la riga «ne hai spuntate N» in `orale()`, le due chiavi × 5 | — | O2 | `grep -rn "controllo\|selfCheck"` vuoto; `validate.mjs` e `test:dom` verdi | 2,5h |
| 2.2 | `cils-report.js` (globale `CilsReport`): `pulisci(text)`, guardia deterministica su cifre, percentuali e lessico di verdetto nelle sei lingue. Sul modello di `LlmRules.clamp` | — | O2, S1 | test: «9/12», «60%», «promosso», «superato» non passano; il rischio residuo è scritto nel commento del file | 3h |
| 2.3 | `LlmPrompts.esame(lang, sezione, traccia, testo, cefr)`: prosa, divieto esplicito di voti e di pronostici sull'esame | — | O2 | test sul testo del prompt: contiene il livello, non contiene la griglia | 3h |
| 2.4 | `Llm.reportProduction(...)`, quarta via d'ingresso; budget, consenso e protocollo riusati senza copie | 2.2, 2.3 | O2 | trasporto finto: da `file://` torna `null`; senza consenso nessuna richiesta parte | 2h |
| 2.5 | Aggancio nel riepilogo: attesa, card della scritta, riga «lettura, non voto», assenza silenziosa quando non c'è verdetto | 2.4 | O2 | test DOM: senza chiave il riepilogo è byte per byte quello di oggi | 3h |
| 2.6 | Raccolta del testo della prova orale secondo la via scelta in D4 | 2.1 | O2, D4 | click-through su due browser reali; dove il testo non si può avere, la riga dice «non rilevato su questo browser» | 5h |
| 2.7 | `Writing.analyse` sul testo dell'orale: punto 5 di ADR-009 finalmente onorato | 2.6 | O2 | test: testo con due dei tre requisiti → due spunte, una croce | 1,5h |
| 2.8 | Addendum ad ADR-009 in `specs/002-corso-irrinunciabile/adr.md`: la prosa entra, il punteggio no, col rischio residuo di S1 e il segnale che lo renderebbe sbagliato | 2.2 | O2 | la decisione è scritta e datata | 2h |
| 2.9 | ~12 chiavi × 5 lingue | 2.5, 2.6 | O2 | `parity.mjs` verde | 1,5h |
| 2.10 | Privacy: esce il tema e il testo dell'orale, con l'avviso prima del primo invio. `PRIVACY.it.md`, riga in `riscontri.md`, testo × 5 in `views-privacy.js` | 2.4, 2.6 | S2 | ogni affermazione nuova ha il suo comando nella tabella dei riscontri | 3h |
| 2.11 | 4 mutazioni su `cils-report.js`, file aggiunto alla costante del harness | 2.2 | — | `test:mutations` e `coverage.mjs --min 99` verdi | 2h |
| 2.12 | Esame intero con chiave reale, due browser, 375 e 1280 px | 2.5-2.7 | O2 | referto osservato, nessun numero nella sezione produzioni | 2,5h |

Sottototale 31h, con buffer **~37h**. Contenuto: 60 valori nuovi, 10 rimossi.

## Fase 3 — Conversazione libera (O3)

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 3.1 | `history[]` facoltativo nei body dei provider, tre funzioni per dialetto; `{system, user}` continua a valere | — | D1, R1 | test per provider: tre turni entrano nella forma giusta; con `history` assente il body è identico a oggi; i test del giudice restano verdi | 4h |
| 3.2 | `chat-rules.js` (globale `ChatRules`): costruzione e potatura della storia, tetto di turni, tetto di caratteri, lettura di risposta e correzione | — | D2, S3 | test: al tetto la conversazione si chiude e lo dice; risposta senza correzione non solleva | 4h |
| 3.3 | `LlmPrompts.chat(lang, cefr, scenario)`: partner che resta in italiano al livello, corregge in coda, non cambia mai lingua | 3.2 | O3 | test sul testo del prompt: livello presente, lingua della correzione presente | 3h |
| 3.4 | `Llm.chat(...)`, quinta via d'ingresso: budget separato da quello del giudice, tetto per conversazione, scadenze passate per uso | 3.1-3.3 | R4 | test: dieci turni non esauriscono il budget del giudice, che continua a funzionare dopo | 3h |
| 3.5 | `chat-run.js`: stato, turni, chiusura, conservazione in sola memoria di sessione | 3.2 | O3 | test unitari sullo svolgimento; `exportState()` non contiene nessuna conversazione | 4h |
| 3.6 | `views-chat.js`: rotta nuova, bolle, invio a voce e a tastiera, risposta letta dalla sintesi di sistema **dichiarata come tale** | 3.4, 3.5 | O3, S3 | `routes.spec.js` verde; `grep -n innerHTML assets/js/views-chat.js` vuoto; payload XSS non esegue | 6h |
| 3.7 | Terzo consenso `llmChatConsent`, gate in un punto solo dentro `Llm.chat`, interruttore in Impostazioni | 3.4 | R5 | test: senza consenso nessuna richiesta; revocato, nessuna richiesta | 2,5h |
| 3.8 | `data/core/chat-scenarios.js`: sei scenari neutri (situazione, livello, prima battuta italiana) | — | O3 | `validate.mjs` non trova lettere fuori dall'alfabeto italiano nella warstwa neutrale | 2h |
| 3.9 | ~30 chiavi × 5 lingue più l'introduzione dei sei scenari × 5 | 3.6, 3.8 | O3 | `parity.mjs` verde | 3,5h |
| 3.10 | Privacy: qui esce l'intera conversazione. `PRIVACY.it.md`, `riscontri.md`, `views-privacy.js` × 5 | 3.4 | R5 | la riga esiste e il suo comando la verifica | 3h |
| 3.11 | `PRECACHE`, ordine in `index.html`, costante nel harness, `check_swversion --napraw` | 3.1-3.6 | — | `check_precache.mjs` e `check_swversion.mjs` verdi | 2h |
| 3.12 | 6 mutazioni su `chat-rules.js` | 3.2 | — | `test:mutations` e `coverage.mjs --min 99` verdi | 1,5h |
| 3.13 | Click-through con chiave reale: budget esaurito, provider morto, consenso negato, 375 e 1280 px | 3.6, 3.7 | O3 | ogni caso porta a un messaggio leggibile, mai a una schermata muta | 3h |

Sottototale 42h, con buffer **~50h**. Contenuto: 180 valori più 6 scenari.

## Fase 4 — Biblioteca di input graduato (O1)

Codice prima, testi a scaglioni. Dopo 4.6 la biblioteca è usabile con un testo.

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 4.1 | `library-<lvl>.js` aggiunti ai `dataFiles` di ogni livello in `curriculum-index.js`; elenco col pattern «disegna, tira, ridisegna» di `views-frequency.js:48` | — | D5 | test: aprire il corso senza entrare in biblioteca non inietta nessuno di quei file | 2h |
| 4.2 | `views-library.js`: elenco per livello, lettura con `Lookup` su ogni parola, ascolto continuo con `Audio2.speakSequence`, controllo di velocità | 4.1 | O1 | `routes.spec.js` verde; click-through dell'ascolto continuo fino in fondo | 6h |
| 4.3 | Segnaposto di lettura nello stato (`library: {id: {frase, ts}}`), contenitore aggiunto senza bump di schema | 4.2 | O1 | test: riaprire il testo riparte dalla frase giusta; profilo vecchio parte da capo senza errori | 2h |
| 4.4 | ~16 chiavi × 5 lingue | 4.2 | O1 | `parity.mjs` verde | 2h |
| 4.5 | `PRECACHE`, harness, `check_swversion --napraw`, rotta | 4.2 | — | gate verdi | 1,5h |
| 4.6 | Testo pilota A2 da 600 parole e pipeline percorsa una volta intera | 4.2-4.5 | O1 | `build_audio.py --dry-run` dice zero mancanti; il testo si ascolta intero senza cadere sulla sintesi | 1h codice + 7,5h contenuto |
| 4.7…4.17 | Un testo per volta, due per livello | 4.6 | O1 | stessa verifica di 4.6, per testo | 7,5h contenuto ciascuno |

Codice 14,5h, con buffer **~17h**. Contenuto secondo la tabella in `plan.md`.

## Fase 5 — Riequilibrio della parte alta (O5)

Contenuto puro, una unità da quattro lezioni per volta, ogni unità spedibile.
**Precondizione: D6 decisa.**

| id | Attività | Dip. | Traccia | Verifica | Stima |
|---|---|---|---|---|---|
| 5.n.1 | Quattro lezioni nuove in `data/core/<lvl>-NN.js` più la voce in `curriculum-index.js` | fase 0 | O5 | `validate.mjs` verde, tag presenti in `GRAMMAR_REF`, nessuna lettera non italiana nella warstwa neutrale | 20h contenuto |
| 5.n.2 | Nakładka per le cinque lingue, blocchi `{contrast}` scritti da zero per lingua | 5.n.1 | O5 | `parity.mjs` verde, `validate.mjs en` verde | 30h contenuto |
| 5.n.3 | Revisione di lettura **prima** della registrazione | 5.n.2 | O5 | una correzione dopo la registrazione costa il doppio e lascia orfani | 4h contenuto |
| 5.n.4 | Registrazione e verifica | 5.n.3 | O5 | `build_audio.py --dry-run` zero mancanti | 2h |

Ritmo: una unità da quattro lezioni = **56h**, di cui 54 di scrittura.
