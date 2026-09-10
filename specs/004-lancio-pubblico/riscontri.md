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
| R5 | La pagina non fa richieste di rete verso l'esterno | `grep -rnE "fetch\(\|XMLHttpRequest\|new WebSocket\|navigator\.sendBeacon" assets/js/ sw.js` | tre `fetch`, tutte in `sw.js` (`215`, `251`, `263`), tutte su richieste già filtrate per origine |
| R5b | I file dei livelli entrano come `<script>` con percorso relativo del repository | `assets/js/registry.js:79-81` | `s.src = src` dove `src` viene dall'indice del corso: nessun dominio esterno può finirci |
| R6 | **Il riconoscimento vocale manda la voce fuori dal dispositivo** | `assets/js/audio.js:219` e il commento a `audio.js:227` | `SpeechRecognition` / `webkitSpeechRecognition`: nei browser che la espongono, l'audio va al server del produttore del browser e torna il testo. Riguarda gli esercizi `speak` e le conversazioni |
| R7 | La voce non parte senza consenso, e il consenso è chiesto una volta e memorizzato | `assets/js/audio.js:240-247`, `assets/js/consent.js:44-71` | il varco è unico, in `Audio2.listen`: senza consenso l'esercizio riceve `no-consent` e non si registra nulla. La risposta finisce in `settings.sttConsent` |
| R8 | Le registrazioni fatte dallo studente (shadowing) restano nella pagina | `grep -nE "MediaRecorder\|createObjectURL\|fetch" assets/js/recorder.js` | `recorder.js:100-108`: `MediaRecorder` produce un `Blob` e un `createObjectURL`, revocato al tentativo successivo. Nessuna `fetch`, nessuna scrittura su disco, niente sopravvive alla chiusura della scheda |
| R9 | **Il service worker conserva copie di ciò che il corso scarica** | `sw.js:235-275` | codice e dati in `linguai-shell-<versione>`, registrazioni in `linguai-audio`. Solo risorse della stessa origine: `sw.js:244` esce sulle altre. Sono file del corso, non attività dello studente |
| R10 | **Il fornitore dell'hosting vede l'indirizzo IP di chi apre il sito** | `package.json` `homepage` + `README.md:17` | il corso è pubblicato su GitHub Pages. È l'unico trattamento del progetto che non avviene sul dispositivo dello studente, e non dipende da una scelta del codice |

## Cosa NON risulta, e va detto così

`BASIS: measured` sulle dieci righe sopra: ogni comando è stato eseguito e il suo esito
letto. Restano due cose che questi comandi non dimostrano e che l'informativa non deve
affermare:

- **Che cosa il produttore del browser faccia della voce dopo averla ricevuta.** Fuori dal
  nostro codice e fuori dalla nostra conoscenza. L'informativa dice dove finisce, non cosa
  succede dopo, e rimanda alla privacy del browser.
- **Che GitHub non conservi altro oltre all'IP.** Non è verificabile da qui. L'informativa
  nomina il fatto e rimanda alle condizioni di GitHub Pages.

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
