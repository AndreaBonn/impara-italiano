[English](./SECURITY.md) | **Italiano**

# Politica di sicurezza

## Versioni supportate

Questo repository non ha tag git. Le correzioni di sicurezza si applicano all'ultimo commit su `main`, che è anche quello che GitHub Pages serve.

La costante di versione del service worker (`SW_VERSION` in `sw.js`) identifica un rilascio per il browser, non una linea di versione supportata.

## Segnalare una vulnerabilità

La segnalazione passa da [GitHub Security Advisories](https://github.com/AndreaBonn/impara-italiano/security/advisories/new).

Nella segnalazione servono:

- una descrizione del problema
- i passi per riprodurlo
- comportamento atteso e comportamento osservato
- che cosa un attaccante potrebbe ottenere

Tempi di risposta:

- presa in carico entro 72 ore
- correzione dei problemi critici entro 30 giorni
- divulgazione pubblica coordinata dopo il rilascio della correzione

È un progetto con un solo manutentore, senza finanziamenti e senza programma di bug bounty.

## Modello di minaccia

Il corso non ha server, né database, né account, né sessioni. Non c'è un login da forzare, non c'è un'API da abusare e non ci sono dati di altri utenti da raggiungere. Questo toglie di mezzo quasi tutto ciò per cui di solito si attacca un'applicazione web, e vuol dire anche che le misure elencate sotto difendono una superficie più stretta di quanto la lunghezza dell'elenco lasci pensare.

Quello che resta da difendere:

- codice estraneo che si attacca alla pagina (un'estensione del browser, o una dipendenza che un giorno arrivi dalla rete)
- un file ostile passato alle funzioni di importazione
- l'unico canale in uscita che esiste, il riconoscimento vocale

## Misure di sicurezza implementate

Ogni voce qui sotto è stata verificata nel codice al riferimento indicato.

- **Content Security Policy** che limita gli script alla stessa origine, con `object-src 'none'`, `base-uri 'none'` e `form-action 'none'` (`index.html:18`). Il corso non contiene un solo script inline né un solo attributo `on*=`, quindi `script-src 'self'` non costa niente. `style-src` mantiene `'unsafe-inline'` perché il motore costruisce attributi `style="..."` da valori calcolati in 166 punti, e senza server e senza build non si può produrre né un nonce né un hash. `frame-ancestors` manca di proposito: i browser lo ignorano dentro un tag `<meta>`, e una regola che non fa niente, nell'elenco, sembra identica a una che funziona.

- **Nessuna origine di terzi.** La pagina non chiede niente fuori dalla propria cartella. I font stanno in `assets/fonts/` e il service worker si rifiuta di mettere in cache risposte cross-origin (`sw.js`), perché una risposta opaca in cache è un ingombro di cui non si può ispezionare il contenuto.

- **Consenso esplicito prima che la voce esca dal browser**, con la barriera in un punto solo invece che a ogni chiamata (`assets/js/consent.js:42`, applicata dentro `Audio2.listen`). Il consenso parte negato, è salvato nelle impostazioni ed è revocabile. Una difesa distribuita fra le tre viste che oggi la chiamano avrebbe retto fino all'aggiunta della quarta.

- **Escape dell'output** per tutto ciò che arriva al DOM come testo, su `&`, `<`, `>`, `"` e `'` (`assets/js/text.js:102`, riesposto come `Core.esc`).

- **Validazione dell'importazione del file dei progressi**: tipo imposto campo per campo, versione dello schema rifiutata se assente, se inferiore a 1 o se proviene da un rilascio futuro, e un tetto rigido di 8 MB prima del parsing (`assets/js/store.js:349`, `assets/js/store.js:387`).

- **Validazione dell'importazione dei mazzi Anki**: tetti a 50 000 righe e 8 MB, righe di lunghezza irregolare e virgolette non chiuse rifiutate in blocco, e niente scritto nello stato finché lo studente non conferma un'anteprima (`assets/js/anki.js:93`).

- **Il contenuto ostile di un mazzo resta una stringa**, verificato su tre schermate da test nel browser e non a occhio (`tests/dom/anki.spec.js:29`).

- **Dipendenze bloccate**: `package-lock.json` è versionato. Le cinque dipendenze di sviluppo non arrivano mai al browser di chi studia; l'applicazione distribuita ha zero dipendenze runtime.

- **Undici controlli a ogni push e a ogni pull request** (`.github/workflows/ci.yml`): lint, validazione dei dati, 826 asserzioni unitarie, 232 asserzioni nel browser, test di mutazione e una soglia di copertura al 99 per cento.

## Limiti noti

- **Il riconoscimento vocale manda la voce dello studente al fornitore del suo browser.** È una proprietà della Web Speech API, non un difetto del corso, e non si può evitare senza un server che il progetto ha scelto di non avere. Viene detto allo studente nella finestra di consenso prima del primo uso, riguarda circa 150 esercizi e le quattordici conversazioni, e rifiutare trasforma quegli esercizi in esercizi scritti.

- **I campi di teoria delle lezioni sono inseriti come HTML di proposito**, perché il grassetto e gli altri segni servono dentro le spiegazioni. È sicuro perché quei campi vengono da `data/`, cioè da contenuto del repository. Niente che provenga da chi studia deve mai finire lì dentro.

- **`style-src` consente gli stili inline.** Il motivo, e cosa questo apre e cosa no, sta nella nota sulla CSP qui sopra.

- **Nessuna scansione automatica delle dipendenze.** Dependabot e strumenti equivalenti non sono configurati.

- **Nessuna Subresource Integrity.** Non avrebbe niente da proteggere: ogni script è nella stessa origine e nella stessa cartella.

## Best practice per gli utenti

- Servi il corso su HTTPS. Il riconoscimento vocale e la modalità offline richiedono entrambi un contesto sicuro, e su `http` semplice non sono disponibili oltre `localhost`.
- Importa file di progressi e mazzi Anki solo da una fonte di cui ti fidi. I validatori limitano il danno che un file malformato può fare, non rendono affidabile un file sconosciuto.
- Esporta i progressi prima di cancellare i dati di navigazione. Dopo non si recupera niente.
- Se preferisci che non esca proprio nulla dal tuo dispositivo, rifiuta il consenso al riconoscimento vocale. Il corso funziona per intero anche così.

## Fuori ambito

Queste cose non sono trattate qui come vulnerabilità:

- self-XSS che richiede alla vittima di incollare codice nella propria console
- attacchi che presuppongono un browser, un'estensione o un sistema operativo già compromessi
- ingegneria sociale
- denial of service per uso legittimo eccessivo, su un sito che non ha un server da saturare
- l'assenza di funzioni che questo progetto ha deliberatamente scelto di non avere (account, sincronizzazione, archiviazione lato server)
- problemi già divulgati pubblicamente in dipendenze di terzi, che vanno segnalati a monte
- header di sicurezza mancanti che richiederebbero un server per essere inviati, su un repository pubblicato tramite GitHub Pages

## Riconoscimenti

Chi segnala in modo responsabile viene citato qui.

---

[Torna al README](./README.it.md)
