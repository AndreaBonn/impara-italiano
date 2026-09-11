# 004 - Riscontri per l'informativa privacy

Raccolti il 2026-09-10 con i comandi qui sotto, eseguiti sul working tree al commit `a6d36cd`.

Il senso di questo file è una regola sola: **un'affermazione senza una riga qui non entra
nell'informativa.** Non si ammorbidisce, non si scrive al condizionale, si toglie. Una
privacy scritta a memoria è esattamente il documento che nessuno può contestare e nessuno
può credere.

Vale anche al contrario, ed è la parte che costa: dove il riscontro dice una cosa scomoda,
l'informativa la dice. Le tre righe scomode sono R6, R9 e R10.

## Riscontri

| id | Affermazione | Comando | Esito osservato |
|---|---|---|---|
| R1 | I progressi stanno in `localStorage`, sul dispositivo dello studente, sotto una chiave sola | `grep -rn "linguai.italiano" assets/js/` | `store.js:27` `linguai.italiano.v2`, più `store.js:31` `linguai.italiano.pl.v1` letta solo per migrare i profili vecchi |
| R2 | Non c'è nessun sistema di statistiche | `grep -rniE "gtag\|googletagmanager\|google-analytics\|plausible\|matomo\|umami\|posthog\|fathom\|sendBeacon\|mixpanel\|hotjar\|clarity" assets/js/ sw.js index.html 404.html` | nessuna occorrenza in codice eseguibile (l'unico match è la parola `build` dentro un commento di `index.html:40`) |
| R3 | Il corso non usa cookie | `grep -rn "document.cookie" assets/js/ sw.js index.html` | zero occorrenze |
| R4 | I caratteri tipografici stanno nel repository, non su un dominio di terzi | `grep -rnE "fonts\.googleapis\|fonts\.gstatic\|typekit\|cdn\." assets/ index.html 404.html sw.js` | due occorrenze, entrambe dentro commenti che raccontano la migrazione (`app.css:19`, `sw.js:141`). Nessun riferimento attivo |
| R5 | La pagina non fa richieste verso l'esterno, tranne quelle che lo studente accende da solo | `grep -rnE "fetch\(\|XMLHttpRequest\|new WebSocket\|navigator\.sendBeacon" assets/js/ sw.js` | quattro `fetch`. Tre in `sw.js` (`220`, `256`, `268`), tutte su richieste già filtrate per origine. La quarta è `llm.js:60`, l'unica che esce dal dominio del corso, e parte solo dopo i tre varchi di R11 |
| R5b | I file dei livelli entrano come `<script>` con percorso relativo del repository | `assets/js/registry.js:79-81` | `s.src = src` dove `src` viene dall'indice del corso: nessun dominio esterno può finirci |
| R6 | **Il riconoscimento vocale manda la voce fuori dal dispositivo** | `assets/js/audio.js:219` e il commento a `audio.js:227` | `SpeechRecognition` / `webkitSpeechRecognition`: nei browser che la espongono, l'audio va al server del produttore del browser e torna il testo. Riguarda gli esercizi `speak` e le conversazioni |
| R7 | La voce non parte senza consenso, e il consenso è chiesto una volta e memorizzato | `assets/js/audio.js:240-247`, `assets/js/consent.js:44-71` | il varco è unico, in `Audio2.listen`: senza consenso l'esercizio riceve `no-consent` e non si registra nulla. La risposta finisce in `settings.sttConsent` |
| R8 | Le registrazioni fatte dallo studente (shadowing) restano nella pagina | `grep -nE "MediaRecorder\|createObjectURL\|fetch" assets/js/recorder.js` | `recorder.js:100-108`: `MediaRecorder` produce un `Blob` e un `createObjectURL`, revocato al tentativo successivo. Nessuna `fetch`, nessuna scrittura su disco, niente sopravvive alla chiusura della scheda |
| R9 | **Il service worker conserva copie di ciò che il corso scarica** | `sw.js:235-275` | codice e dati in `linguai-shell-<versione>`, registrazioni in `linguai-audio`. Solo risorse della stessa origine: `sw.js:244` esce sulle altre. Sono file del corso, non attività dello studente |
| R10 | **Il fornitore dell'hosting vede l'indirizzo IP di chi apre il sito** | `package.json` `homepage` + `README.md:17` | il corso è pubblicato su GitHub Pages. È l'unico trattamento del progetto che non avviene sul dispositivo dello studente, e non dipende da una scelta del codice |

## Riscontri per il controllo delle risposte con un modello

Raccolti il 2026-09-10, dopo l'aggiunta del secondo giudice. La riga scomoda qui è R14.

| id | Affermazione | Comando | Esito osservato |
|---|---|---|---|
| R11 | Senza chiave, senza consenso o da `file://` non parte nessuna richiesta | `assets/js/llm.js:87-91` (`available`) e `llm.js:190-196` (`judge`) | tre varchi in fila: `available()` esce su `protocol === "file:"` e su `LlmKeys.any()` falso; `judge` non chiama la rete se non dentro `Consent.zZgodaLlm`. Con lo storage vuoto la funzione ritorna prima di costruire il prompt |
| R12 | Le chiavi stanno in un contenitore separato dal profilo | `grep -n "STORE_KEY =" assets/js/llm-keys.js assets/js/store.js` | `llm-keys.js:30` `linguai.llm.v1`, `store.js:27` `linguai.italiano.v2`: due chiavi distinte, due moduli distinti |
| R12b | La chiave non entra nel file scaricato con `Esporta` | `grep -c "Core.state\|Store.state" assets/js/llm-keys.js` | zero occorrenze: il modulo delle chiavi non scrive mai nello stato, che è ciò che `Store.exportState` serializza. Pinnato anche da `tests/unit/llm-keys.test.mjs`, che asserisce entrambi i lati (assente dall'export, presente nel contenitore) |
| R12c | `Azzera` cancella anche le chiavi | `grep -n "LlmKeys.clear" assets/js/core.js assets/js/views-settings.js` | `core.js:256`, dentro `Core.resetState`: il varco è unico e sta nella facciata, non nella vista, quindi vale per ogni futuro punto che azzeri il profilo |
| R13 | Il corso può contattare soltanto quattro host, e l'elenco lo chiude il browser | `grep -o "connect-src[^;]*" index.html` | `connect-src 'self' https://generativelanguage.googleapis.com https://api.groq.com https://api.openai.com https://api.anthropic.com`. Nessun carattere jolly: un errore nel JavaScript non può allargare l'insieme |
| R14 | **Dal giudizio di una risposta escono la frase dello studente e le frasi attese, e nient'altro** | `assets/js/llm-prompts.js:98-108` | il corpo del messaggio è costruito da tre campi: `<question>` (la consegna dell'esercizio), `<model_answers>` (le risposte accettate) e `<student_answer>` (ciò che lo studente ha scritto). Nessun identificativo, nessun progresso, nessuna impostazione |
| R14b | **Dal parere su un tema esce il testo intero**, ma solo su richiesta esplicita | `assets/js/llm-prompts.js:131-141` e `assets/js/views-writing.js:171-176` | il corpo porta `<task>` (consegna) e `<composition>` (il testo, troncato a 2500 caratteri). Non parte mai da solo: il pulsante `.js-opinion` è l'unico ingresso, e `Llm.review` non è chiamato da nessun altro punto |
| R14c | **Dalla simulazione d'esame escono il tema e il resoconto della prova orale**, e a differenza di R14b senza che lo studente prema niente | `assets/js/views-cils.js:371-416` (`poproszOLekture`) e `assets/js/llm-prompts.js` (`esame`) | il riepilogo chiama `Llm.reportProduction` per le due produzioni appena disegnate. Il corpo porta `<task>` (traccia o argomento) e `<answer>` (il testo, troncato a 2500 caratteri). Il varco resta quello di R11: senza chiave o senza consenso non parte niente, e l'informativa dice di spegnere il controllo prima di cominciare |
| R14d | La registrazione della prova orale **non** esce: esce solo ciò che lo studente scrive | `grep -n "reportProduction" -A 6 assets/js/views-cils.js` e `grep -c "nagranie" assets/js/llm*.js` | il campo `testo` passato a `reportProduction` viene da `run.dane.orale.testo`, cioè dal campo della revisione; zero occorrenze di `nagranie` nei file `llm-*`. Il `Blob` audio non lascia mai la pagina, come in R8 |
| R14e | **Nessuna lettura del modello può diventare un voto d'esame**, e la garanzia è nel codice, non nell'istruzione | `assets/js/cils-report.js` e `tests/unit/cils-report.test.mjs` | `CilsReport.pulisci` toglie le frasi che portano una frazione, una percentuale, un numero accanto a «punti» o una parola di verdetto nelle sei lingue; `llm.js` la applica prima di restituire. Rischio residuo dichiarato in ADR-009-bis: un verdetto senza numeri e senza quelle parole passa |
| R14f | **Dalla conversazione libera esce l'intera conversazione**, non una frase, e riparte a ogni turno | `assets/js/llm.js` (`chat`) e `assets/js/chat-rules.js` (`doWyslania`) | il corpo porta l'istruzione, il messaggio nuovo e la storia dei turni precedenti, potata a 4000 caratteri dalla parte più vecchia. È la via d'ingresso che manda più dati di tutte |
| R14g | La conversazione ha un **consenso proprio**, distinto dagli altri due e revocabile | `grep -n "llmChatConsent" assets/js/consent.js assets/js/views-settings.js` | `consent.js:129` legge `settings.llmChatConsent`, `:134` lo scrive; l'interruttore sta in Impostazioni (`.js-chat-consent`) sotto quello del giudice. Con la chiave presente e il consenso del giudice dato, senza questo non parte niente: `tests/dom/chat.spec.js` lo verifica in browser |
| R14h | La conversazione **non viene salvata** e non entra nella copia esportata | `assets/js/chat-run.js` e `tests/dom/chat.spec.js` | lo stato della scena vive in una chiusura dentro `ChatRun.create` e non tocca `Core.state`: il test in browser scrive una frase riconoscibile, la manda, e poi verifica che `Core.exportState()` non la contenga |
| R15 | Il consenso è distinto da quello sul riconoscimento vocale ed è revocabile | `grep -n "llmConsent" assets/js/consent.js` | `consent.js:90` legge `settings.llmConsent`, `consent.js:95` lo scrive: campo proprio, accanto a `sttConsent` e indipendente da esso. La revoca è nella scheda delle Impostazioni (`views-settings.js`, `.js-llm-consent`) |

## Cosa NON risulta, e va detto così

`BASIS: measured` sulle dieci righe sopra: ogni comando è stato eseguito e il suo esito
letto. Restano due cose che questi comandi non dimostrano e che l'informativa non deve
affermare:

- **Che cosa il produttore del browser faccia della voce dopo averla ricevuta.** Fuori dal
  nostro codice e fuori dalla nostra conoscenza. L'informativa dice dove finisce, non cosa
  succede dopo, e rimanda alla privacy del browser.
- **Che GitHub non conservi altro oltre all'IP.** Non è verificabile da qui. L'informativa
  nomina il fatto e rimanda alle condizioni di GitHub Pages.
- **Che cosa il fornitore del modello faccia della frase dopo averla ricevuta.** Stessa
  posizione di R6 e per la stessa ragione: fuori dal nostro codice. L'informativa dice dove
  finisce e rimanda all'informativa del fornitore che lo studente ha scelto.
- **Che i quattro fornitori siano quelli giusti, o che le loro condizioni siano
  accettabili.** Non è una domanda a cui il codice possa rispondere. La scelta è dello
  studente, e l'informativa la presenta come tale.

## Una revoca che il codice espone e l'interfaccia non offre

`assets/js/consent.js:44` definisce `ustaw(false)` e il commento in testa al file dichiara
il consenso revocabile. Il grep su tutte le viste trova una sola chiamata a `Consent`, ed è
`uzyjPytania` in `assets/js/views-shadow.js:222`:

```
grep -rn "Consent\." assets/js/*.js | grep -v "^assets/js/consent.js"
-> assets/js/views-shadow.js:222
```

Quindi al 2026-09-10 la sola revoca possibile è azzerare tutto il profilo. Scrivere
"revocabile in ogni momento" nell'informativa senza aggiungere il comando renderebbe falsa
quella frase: è la ragione per cui T3.13 è entrato nel piano invece di restare opzionale.
Quando l'interruttore esiste, questa sezione si chiude citando la riga che lo implementa.
