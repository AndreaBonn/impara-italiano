# 005 — Il secondo giudice: correzione LLM delle risposte aperte (BYOK)

## Obiettivo

Quando il giudizio locale rifiuta una risposta aperta, un LLM scelto dallo studente,
con la sua chiave, salvata sul suo dispositivo, può promuovere quel rifiuto ad
accettazione e spiegare perché nella lingua delle spiegazioni.

Senza chiave, senza rete o aperto da `file://`, il corso si comporta come oggi. Non
"quasi come oggi": la stessa sequenza di bolle e lo stesso punteggio, e nessuna
richiesta uscente.

## Le tre decisioni prese dall'utente

- **D1** — il giudizio locale resta il primo giudice. L'LLM parte solo quando il
  locale rifiuta e può solo promuovere un rifiuto ad accettazione, mai il contrario.
  Un modello impazzito è una mancata promozione, cioè lo status quo.
- **D2** — quattro provider (Gemini, Groq, OpenAI, Anthropic). Lo studente mette le
  chiavi che vuole in una sezione dedicata delle Impostazioni, ne sceglie l'ordine, e
  il sistema li prova in cascata usando il successivo come fallback.
- **D3** — la risposta porta feedback testuale, non solo un booleano.

## Definition of Done

Ogni voce è un comando da eseguire o un'osservazione da fare, mai un'impressione.

- [ ] `npm test` verde con i test nuovi su `llm-rules.js` e `llm-providers.js`, **senza
      una sola chiamata di rete**: il trasporto è iniettato dall'harness.
- [ ] `node scripts/coverage.mjs --min 99` verde. Le linee scoperte dichiarate restano
      le otto già elencate in CLAUDE.md, non nove.
- [ ] `npm run test:mutations` verde con almeno 6 mutazioni nuove su `llm-rules.js`:
      ordine della cascata, clamp del verdetto, permanente contro transitorio, parsing.
- [ ] **Il clamp è dimostrato, non promesso**: test in cui il locale accetta e il
      modello risponde `NO` -> verdetto finale `ok:true` e il giudice non viene
      nemmeno interrogato (zero chiamate al trasporto finto).
- [ ] **Senza chiave nulla cambia**: test DOM che gioca una conversazione con lo
      storage delle chiavi vuoto e conta 0 richieste verso host esterni
      (`page.on("request")`), con la stessa sequenza di bolle di oggi.
- [ ] **Da `file://` degrada in silenzio**: `Llm.available()` falso su
      `location.protocol === "file:"`, verificato in `node:test`. Nessun messaggio
      d'errore allo studente: la feature non esiste, non è rotta.
- [ ] `npm run test:dom` verde, incluso `tests/dom/csp.spec.js` sulle 15 rotte dopo
      l'allargamento di `connect-src`.
- [ ] **Il feedback del modello non è mai HTML**: test DOM che fa rispondere al
      trasporto finto `<img src=x onerror="window.__x=1">` e verifica
      `window.__x === undefined` con la stringa visibile come testo.
- [ ] **Le chiavi non escono per errore**: un test scrive quattro chiavi, chiama
      `Store.exportState()` e verifica che nessuna compaia nella stringa, **e** nello
      stesso test che il container dedicato le contenga. L'asserzione negativa da sola
      passerebbe anche con un modulo che non salva niente.
- [ ] `Core.reset()` cancella anche le chiavi (test).
- [ ] `parity.mjs`, `validate.mjs`, `check_precache.mjs`, `check_swversion.mjs`,
      `check_ogtags.mjs`, `check_404.mjs` verdi; `./node_modules/.bin/eslint .` verde.
- [ ] `docs/PRIVACY.it.md` nomina il nuovo destinatario e ogni sua affermazione ha la
      riga con il comando che la verifica in `specs/004-lancio-pubblico/riscontri.md`.
      Le stesse frasi esistono in cinque lingue sulla rotta `#/privacy`.
- [ ] **Osservato a runtime**, che nessun gate sopra sostituisce: con una chiave vera,
      una risposta corretta e lessicalmente distante promossa in conversazione con
      feedback nella lingua dello studente; una chiave sbagliata che fa passare al
      provider successivo e lo dice nelle Impostazioni; la stessa scena da `file://`
      che non prova nemmeno a chiamare.

## Assunzioni

- **CORS verificato, non assunto.** Preflight `OPTIONS` con
  `Origin: https://andreabonn.github.io` eseguito il 2026-09-10 sui quattro endpoint:
  tutti rispondono con `access-control-allow-origin` valido. OpenAI e Gemini
  riflettono l'origin, Groq e Anthropic rispondono `*`. Anthropic ammette
  `anthropic-dangerous-direct-browser-access` fra gli header consentiti; che sia
  **obbligatorio** va confermato quando si scrive l'adattatore.
- La chiave è un segreto **dello studente**, non nostro. Sta in chiaro in
  `localStorage` come in ogni strumento BYOK lato client. L'informativa lo dice; senza
  backend non si finge una cifratura, che sarebbe teatro (l'avversario realistico
  legge la passphrase mentre viene digitata).
- Il consumo è a carico dello studente. Nessun limite nostro oltre un tetto per
  sessione, che serve a proteggere la sua quota, non la nostra.
- La lingua del feedback viene da `settings.lang`, passata nel prompt. Il feedback non
  entra in `parity.mjs`: è testo generato, non stringa di interfaccia.
- `SCHEMA` resta 2. Le chiavi vivono fuori dallo stato; ordine dei provider e consenso
  sono campi aggiunti in `settings`, come `sttConsent`.

## Approccio

### A1 — L'async entra senza toccare il contratto sincrono

`Talk.answer()` (`talk-run.js:137`) è sincrona, pura e ha trenta asserzioni dirette in
`tests/unit/talk-run.test.mjs`. Si estraggono tre funzioni:

- `judge(text) -> {ok, opcja, sim}` — non muta niente
- `commit(text, opcja)` — la transizione, punto compreso
- `reject()` — `pomylka()` e il resto

`answer()` resta come facciata sincrona che le compone, quindi nessun test esistente
cambia. La vista, sul ramo `!ok`, sospende, interroga il giudice, e chiama `commit` o
`reject` a seconda dell'esito.

**Perché non l'appello.** L'alternativa considerata era lasciare `answer()` intatta e
farle restituire un appello opaco da consegnare a `Talk.promuovi()`. Non regge sui
fatti: quando `answer()` rifiuta ha già scritto `bledny = true` (che toglie il punto
per il resto del turno) e la vista ha già chiamato `Core.recordAnswer(false)`
(`views-talk.js:180`). Promuovere richiederebbe di revocarle entrambe, cioè inventare
una statistica reversibile. `judge()` non muta nulla, quindi non c'è niente da
revocare. È il difetto per cui l'accettazione ottimistica era già stata scartata.

**Per gli esercizi scritti (fase 2) il gate sta in `Ex.kit.finish`**, l'unico punto che
chiama `onDone` (`exercises.js:46`): il contratto "esattamente una volta" sopravvive
per costruzione e nessuno dei quattordici builder cambia. È il pattern di `consent.js`:
un passaggio che non si può aggirare batte tre da ricordare.

### A2 — Il confine fra puro e I/O

Il taglio del progetto (`pwa-rules.js`/`pwa.js`, `verbs-data.js`/`verbs.js`), non la
lunghezza dei file.

| File | Globale | Natura | Contiene |
|---|---|---|---|
| `llm-providers.js` | `LlmProviders` | tabella pura | quattro voci: `url(cfg)`, `headers(key)`, `body(prompt,cfg)`, `read(status,json)`. Nessun I/O |
| `llm-rules.js` | `LlmRules` | funzioni pure | prompt per lingua, prossimo provider, permanente contro transitorio, parsing e clamp del verdetto, chiave di cache, redazione della chiave nei messaggi |
| `llm.js` | `Llm` | tocca il browser | `fetch`, `AbortController`, giro della cascata, cache di sessione, gate su protocollo e consenso, `Llm.useTransport(fn)` per i test |
| `llm-keys.js` | `LlmKeys` | storage | container separato. Il globale `Keys` è occupato da `keys.js` |

`read()` non solleva mai: un JSON malformato è un errore tipizzato. Serve perché lo
status HTTP a volte mente (Gemini risponde 200 con un `finishReason` di blocco,
Anthropic manda `{type:"error"}` nel corpo).

`Llm.useTransport()` è ciò che rende la feature testabile senza rete, esattamente come
`Consent.uzyjPytania` rende testabile il consenso.

### A3 — Le chiavi stanno fuori dallo stato

Container `linguai.llm.v1`, posseduto da `llm-keys.js`, che `store.js` non conosce e
che `exportState`/`importState`/`merge` non attraversano mai. Due fatti lo decidono e
un terzo lo conferma:

- `store.js:322` serializza l'intero stato nel file che lo studente scarica e che il
  corso gli chiede di mettere al sicuro. Una credenziale a pagamento non va lì.
- `resetState()` conserva `state.settings`: "cancella tutto" lascerebbe i segreti sul
  dispositivo.
- `validateImport` (`store.js:385`) controlla solo che `settings` sia un oggetto, e
  `merge()` scrive qualunque chiave annidata. Con la config sotto `settings`, un file
  di backup ricevuto da qualcun altro potrebbe sovrascrivere in silenzio l'ordine dei
  provider, o la chiave. Fuori dallo stato, l'intera macchina di import diventa
  irrilevante per questo dato: strutturalmente impossibile invece che evitato con
  attenzione.

In `settings` restano solo l'ordine dei provider e il consenso: dati non sensibili,
ed è giusto che viaggino col profilo.

Nelle Impostazioni si mostrano solo gli ultimi quattro caratteri e il valore grezzo
non entra mai in un attributo del DOM.

### A4 — Il contratto del verdetto

Il modello risponde `{"esito":"SI"|"NO","commento":"..."}`. `LlmRules.readVerdict()` è
pura, non solleva mai, e qualunque forma inattesa vale `promuovi:false`. Enum chiuso e
non booleano: `true`/`"true"`/`1`/`"yes"` è proprio l'ambiguità in cui un modello
confuso promuove per sbaglio.

Cinque presidi, e nessuno è una richiesta di buona volontà al modello:

1. **L'asimmetria è strutturale.** Il giudice è interrogato solo su un rifiuto e il
   chiamante fa `ok = ok || promuovi`. Non esiste percorso in cui possa bocciare.
2. **Il commento è testo, mai HTML.** Passa da `Txt.esc` e finisce in un nodo distinto
   da quello di `why`, che `exercises.js:55` inietta come HTML di proposito perché è
   contenuto scritto dagli autori. Riusare quello slot sarebbe l'unico punto in cui
   questa feature aprirebbe una XSS su una pagina che oggi non ha sorgenti di XSS, e
   il bottino sarebbe la chiave dello studente.
3. **Tetto di 200 caratteri**, niente a capo, caratteri di controllo tolti. Si tronca,
   non si rifiuta: un verdetto giusto non si butta per prolissità.
4. **Nessuna contabilità propria.** La promozione passa dallo stesso
   `Core.recordAnswer(true)` di un'accettazione normale.
5. **Tetti di spesa**: una chiamata per tentativo, un tetto per sessione, un
   interruttore. Sono i soldi dello studente.

### A5 — La cascata

`LlmRules` decide, `llm.js` esegue.

- **Permanente** (401, 403, 404 sul modello, 400 su body malformato): il provider esce
  dalla cascata per la sessione e la sua chiave è marcata come rifiutata nelle
  Impostazioni.
- **Transitorio** (429, 408, 5xx, rete, timeout): si passa subito al successivo senza
  ritentare, e il provider resta eleggibile alla domanda dopo. Lo studente sta
  aspettando davanti a un esercizio già segnato come sbagliato, e la catena di
  fallback è già la risposta al transitorio.
- Budget: 3 s per provider via `AbortController`, 8 s in totale.
- Se la catena si esaurisce **solo** con permanenti: avviso persistente con rimando
  alle Impostazioni, una volta per sessione. Se si esaurisce con transitori:
  **niente**. Il verdetto locale resta e la promozione non arriva. È la cascata di
  `audio.js` (registrazione, sintesi, silenzio): il degrado silenzioso è il
  comportamento giusto quando il fallback è un miglioramento facoltativo.

Scartato il parallelo su tutti e quattro: consuma quota su quattro conti dello
studente per una risposta sola, e rende decorativo l'ordine che ha scelto.

### A6 — CSP

`connect-src 'self'` diventa un'allowlist chiusa di quattro origini, mai un wildcard.
`default-src 'self'` non copre `connect-src` per estensione: la direttiva è esplicita
e va modificata a mano. Contropartita buona: la CSP diventa il punto in cui l'insieme
dei provider è chiuso davvero, e nessun bug nella configurazione JS può aprirlo.

Il commento sopra il meta va riscritto: oggi dice che la pagina non parla con nessuno,
e smetterebbe di essere vero.

**Nessuna modifica a `sw.js` per le chiamate**: `sw.js:238,245` esce già su
`method !== "GET"` e su origine estranea, quindi le POST non passano dal worker.

## Le fasi, ognuna mergiabile da sola

**Fase 1 — conversazioni.** `Talk.answer` non ha il contratto `onDone`, quindi paga
l'infrastruttura senza il rischio del doppio verdetto. ~41h con buffer.

**Fase 2 — `trans` e `fill`.** Il gate in `Ex.kit.finish`, che diventa asincrona: ogni
asserzione DOM che oggi legge lo stato subito dopo il click va attesa, e
`Core.recordAnswer` si sposta dopo il verdetto. ~10h.

**Fase 3 — `writing.js`.** Caso diverso, non più grande: lì non esiste un rifiuto
binario da promuovere, quindi D1 non si applica e la feature è feedback puro su testo
libero. È dove D3 rende di più. ~12h.

## Rischi

| # | Rischio | Mitigazione |
|---|---|---|
| R5 | Il giudice indulgente insegna l'errore. In un corso di lingua il falso positivo cementa | Tre strati con un test ciascuno: il prompt chiede di rifiutare nel dubbio; l'enum chiuso rende `NO` ogni ambiguità; il clamp rende impossibile bocciare |
| R6 | Prompt injection dello studente | Il suo testo entra come dato delimitato, mai concatenato nell'istruzione. Il raggio d'azione è un esercizio che poteva già saltare con "mostra la risposta": si dichiara, non si difende. Il corollario duro è il punto 2 di A4 |
| R7 | Quattro formati di errore diversi | Mappa in `llm-providers.js`, testata voce per voce |
| R8 | Doppio pagamento sul ritentativo | Cache in memoria per sessione su `hash(provider + lingua + attesa + risposta normalizzata)`. Non in `localStorage`: non si accumula testo dello studente sul disco senza motivo |
| R9 | Stringhe per cinque lingue | ~34 chiavi × 5. Si dichiarano e si pagano; `parity.mjs` è il gate |
| R10 | Privacy | Sub-task, non nota a margine |
| R11 | I quattro host in chiaro nel `<meta>` anche per chi non userà mai la feature | Costo dichiarato. Senza, la chiamata muore in console e `csp.spec.js` va rosso |

## Criteri di successo

`npm run test:all` verde, più i sei gate di script e il lint. Poi l'osservazione a
runtime dell'ultima voce della Definition of Done, che nessuno dei gate sostituisce.
