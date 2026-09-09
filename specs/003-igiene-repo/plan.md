# 003 - Igiene del repository: piano di implementazione

Stato: proposto
Versione: 1.0
Data: 2026-09-09
Scope: 7 fix di igiene (M2, B3, MINOR 5, MINOR 2, MINOR 3, M5, M4) emersi dalla review
pre-convegno. Nessun cambiamento al contenuto del corso.

## Obiettivo

Portare il repository allo standard che un revisore esterno si aspetta di trovare, senza
toccare il prodotto: rimuovere ciò che è morto, rendere eseguibili da una macchina i gate
che oggi esistono solo se qualcuno se li ricorda, e ridurre il file più lungo del motore.

I tre vincoli costituzionali del progetto restano intatti e sono il criterio di rigetto di
qualunque variante: funzionamento da `file://`, zero dipendenze runtime, ordine degli script
in `index.html` come dipendenza reale.

## Definition of Done

Una casella per fix, ciascuna con il comando o l'osservazione che la chiude.

- [x] **M2** - `git ls-files | grep impara-italiano-pl` vuoto; il file esce anche dal working
      tree; `grep -rn impara-italiano-pl . --exclude-dir=.git --exclude-dir=node_modules
      --exclude-dir=specs` vuoto. L'esclusione di `specs/` non è un'indulgenza: questi
      documenti nominano il file perché descrivono l'operazione che lo rimuove, e senza
      quel filtro il criterio non potrebbe essere soddisfatto da nessun esito.
- [ ] **MINOR 5** - `git ls-files | grep REPORT_ATTIVITA` vuoto, `wc -l docs/REPORT_ATTIVITA.md`
      restituisce 362 (il file resta sul disco e resta aggiornabile), `git status --short`
      non lo elenca come untracked.
- [ ] **B3** - esiste `.github/workflows/ci.yml`, YAML valido, e ogni comando che contiene,
      eseguito in sequenza in locale, esce 0. Il criterio "run verde su GitHub" non è
      verificabile finché il repo non ha un remote: vedi A1.
- [ ] **MINOR 3a** - con una voce inesistente inserita di proposito in `PRECACHE`, la console
      del service worker stampa una riga che contiene l'URL caduto e l'install si completa
      comunque; ripristinato lo stato, la riga sparisce.
- [ ] **MINOR 3b** - `node scripts/check_precache.mjs` esce 0 sullo stato attuale (baseline
      misurata: 50 script in `index.html`, 65 voci in `PRECACHE`, 0 mancanti); togliendo una
      voce da `PRECACHE` esce 1 e nomina il file; ripristinando torna 0.
- [ ] **M5** - `npm run lint` esce 0; `data/`, `audio/`, `node_modules/`, `test-results/` non
      sono analizzati; nessun `eslint-disable` nel codice di produzione; `git diff --stat` del
      commit di configurazione non tocca `assets/js/`.
- [ ] **M4** - `assets/js/views-talk.js` esiste, `views.js` scende da 1239 a ~962 righe,
      `check_precache` verde, `npm run lint` verde, `conversazione.spec.js` verde,
      `npm run test:all` verde, `SW_VERSION` a `v18`, e una conversazione con biforcazione
      percorsa a mano fino al riepilogo.
- [ ] **MINOR 2** - `index.html` porta la meta CSP; percorse le 15 rotte su HTTP la console non
      contiene alcun messaggio "Content Security Policy"; audio, registratore, favicon, font,
      service worker e download del backup funzionanti; **le stesse verifiche superate aprendo
      `index.html` da `file://` in Chromium e in Firefox**.

## Assunzioni

- **[A1, BLOCCANTE sul solo badge]** B3 presuppone la pubblicazione su GitHub. Oggi
  `git remote -v` è vuoto. Senza lo slug `owner/repo` il badge nel README punterebbe a
  un'immagine rotta, e il workflow resta inerte finché non c'è un remote. Il workflow si
  scrive comunque (costo zero, e diventa il posto dove agganciare i gate nuovi); il badge
  si rimanda.
- **[A2, cancello di verifica]** MINOR 2 presuppone che una CSP in `<meta>` con `'self'` non
  rompa l'apertura da `file://`, dove il documento ha origine opaca. Non è deducibile e
  nessun gate lo copre (Playwright serve sempre su HTTP). Se rompe, il commit della CSP si
  revoca: non si tiene in repo una policy che viola il vincolo numero uno del progetto.
- ESLint entra fra le devDependencies, dove già stanno Playwright e axe-core: "zero dipendenze
  runtime" resta vero, `index.html` continua a non caricare nulla da `node_modules/`.
- Nessuno dei 7 fix tocca le stringhe di interfaccia, quindi non si apre il costo
  `chiavi x 5 lingue` e `parity.mjs` resta un controllo di non regressione.
- Si lavora su `main`, come i 151 commit precedenti. Il divieto globale riguarda il push, che
  qui non è eseguibile.
- Baseline misurata prima di toccare qualsiasi cosa, non ricordata: `validate.mjs` exit 0,
  `parity.mjs` exit 0, `npm test` 371/371, `npm run test:dom` 158/158, working tree pulito.

## Decisioni prese (disambiguazione)

**D1 - Severità della prima passata ESLint: set minimo bloccante.**
Solo regole di correttezza (`no-undef`, `no-redeclare`, `no-dupe-keys`, `no-unreachable`,
`no-cond-assign`, `no-unsafe-negation`), bloccanti da subito, zero regole di stile. Scartata
`js.configs.recommended` intero: su 35 file mai passati da un linter produrrebbe un'ondata di
`no-unused-vars` e `no-prototype-builtins`, cioè un refactor di massa non richiesto che viola
le Modifiche Chirurgiche. Scartato il warning-only: un gate che non blocca non è un gate, e un
warning permanente è rumore. Prima di congelare il set gira una misura una tantum con
`recommended` per **contare** i finding per regola: se il conto è basso, il set si allarga su
un dato invece che su un'impressione.

**D2 - Ampiezza della CSP: policy che accetta la superficie attuale.**
`style-src 'self' 'unsafe-inline'`, perché i 166 attributi `style="..."` sono costruiti
concatenando valori a runtime (`pct(p.pct)`): né nonce né hash sono praticabili su un file
statico senza server che deve aprirsi anche da disco. La variante stretta richiederebbe di
migrare i 166 punti a classi CSS, cioè un progetto a sé con rotture visive silenziose sparse
per l'interfaccia. Va detto in chiaro, in un commento accanto alla policy, che questa CSP
protegge `script-src`, `object-src` e `base-uri`, non lo stile.

**D3 - Direzione del gate sul precache: una sola, `index.html` -> `PRECACHE`.**
Il gate fallisce se un file caricato dalla pagina non è precacheato, che è il difetto reale
che oggi il CLAUDE.md chiede all'umano di ricordare. La direzione inversa fallirebbe subito e
a ragione: `PRECACHE` contiene per progetto file caricati a runtime (`ui-*.js`, i woff2, le
icone) che in `index.html` non compaiono come `<script src>`.

## Ordine di esecuzione e perché

Otto commit a rischio crescente. Il principio "prima la CI, che è la rete degli altri" va
corretto su un fatto misurato: **senza remote la CI non gira mai**, quindi la rete di
sicurezza reale sono i gate eseguiti in locale prima di ogni commit. B3 va comunque presto
perché è inerte, costa poco e diventa il posto dove i due gate nuovi si agganciano.

1. **MINOR 5 prima di M2**: così il commit che cancella `impara-italiano-pl.html` non lascia
   nemmeno per un commit un riferimento pendente in un file tracciato
   (`docs/REPORT_ATTIVITA.md:165` è l'unico riferimento esistente nel repo).
2. **M2**: rischio zero, nessun file eseguibile.
3. **B3**: nessun file di prodotto toccato.
4. **MINOR 3a**: una riga in `sw.js`, il contenuto della shell non cambia.
5. **MINOR 3b prima di M4**: è la dipendenza vera dell'ordinamento. L'errore tipico di M4 è
   dimenticare `views-talk.js` in `PRECACHE`, e questo gate lo intercetta al posto della
   memoria.
6. **M5 prima di M4**: `no-undef` con i globali dichiarati è esattamente il controllo che
   intercetta l'errore tipico dell'estrazione, cioè un helper rimasto nello scope di
   `views.js` che diventa `ReferenceError` solo quando quel ramo viene percorso.
7. **M4**.
8. **MINOR 2 per ultimo**: è l'unico fix la cui verifica non è automatizzabile con i gate
   esistenti e l'unico che può legittimamente concludersi con "si rimanda".

## Sub-task

Dettaglio operativo, verify e messaggi di commit: `tasks.md`.

## File impattati

| File | Tipo | Motivo |
|---|---|---|
| `.gitignore` | modifica | esclude `docs/REPORT_ATTIVITA.md` lasciandolo sul disco |
| `docs/REPORT_ATTIVITA.md` | untrack | log interno fuori dal repo pubblico |
| `impara-italiano-pl.html` | eliminazione | prototipo morto, 1026 righe |
| `.github/workflows/ci.yml` | nuovo | validate, parity, precache, lint, unit, DOM |
| `README.md` | modifica, bloccata da A1 | badge di stato |
| `sw.js` | modifica | traccia dell'URL caduto; +1 voce in `PRECACHE`; `SW_VERSION` v17 -> v18 (solo nel commit M4) |
| `scripts/check_precache.mjs` | nuovo | gate statico `index.html` -> `PRECACHE` |
| `eslint.config.js` | nuovo | flat config, 4 blocchi |
| `package.json` | modifica | script `lint` e `check:precache`, devDependencies `eslint`, `@eslint/js` |
| `package-lock.json` | modifica | rigenerato dal tool, mai a mano |
| `assets/js/views-talk.js` | nuovo | blocco conversazioni, 277 righe da `views.js:490-766` |
| `assets/js/views.js` | modifica | 1239 -> ~962 righe |
| `index.html` | modifica | `<script>` di `views-talk.js` dopo `views.js`; meta CSP nel `<head>` |
| `tests/dom/csp.spec.js` | nuovo | regressione sulle violazioni CSP nelle 15 rotte |
| `CLAUDE.md` | modifica | i due gate nuovi e il modulo estratto |

## La CSP, per direttiva

Verdetto del `security-reviewer`, verificato sul codice. Ogni direttiva è ancorata a ciò che
la richiede.

```
default-src 'self';        nessuna dipendenza esterna: font, audio, dati tutti locali
script-src  'self';        zero <script> inline, zero handler on*= (misurato)
style-src   'self' 'unsafe-inline';   166 attributi style=" costruiti a runtime (D2)
img-src     'self' data:;  favicon SVG inline a index.html:12
font-src    'self';        quattro woff2 in assets/fonts/
media-src   'self' blob:;  mp3 locali + URL.createObjectURL delle registrazioni
connect-src 'self';        sweepAudio fa fetch("./data/audio-index.js"), same-origin
worker-src  'self';        sw.js
manifest-src 'self';       manifest.webmanifest
object-src  'none';        nessun plugin o embed
base-uri    'none';        nessun tag <base> nel progetto (misurato)
form-action 'none';        nessun <form> nel progetto (misurato)
```

`frame-ancestors` **non entra**: dentro `<meta>` i browser la ignorano, e una direttiva
inefficace in una policy fa sembrare protetto ciò che non lo è. Se un giorno il deploy potrà
mandare header veri, il posto giusto è lì.

**Valore reale, dichiarato senza gonfiarlo** (verdetto del `security-reviewer`, non mio):
hardening marginale. Senza server, senza login e senza input di rete che l'app processi come
codice, il vettore che una CSP mitiga per definizione non ha un ingresso osservabile qui. Ciò
che compra davvero: difesa in profondità contro una compromissione futura della supply chain e
contro estensioni del browser che iniettano script, perché `script-src 'self'` blocca comunque
l'esecuzione di codice non servito dall'origine del corso.

## Rischi

- **La CSP rompe l'apertura da `file://`** (origine opaca contro `'self'`): è il vincolo numero
  uno del progetto e nessun gate lo copre. Mitigazione: cancello A2 su due browser prima di
  considerare chiuso il fix; se rompe, `git revert` del solo commit CSP.
- **La CSP rompe in silenzio uno dei 166 stili o il blob del registratore**: la suite DOM non
  fallisce su una violazione CSP, che è solo un messaggio di console. Mitigazione:
  `tests/dom/csp.spec.js` rende osservabile ciò che oggi non lo è, e va scritta vedendo il
  rosso (togliendo `data:` da `img-src` il test deve fallire nominando la favicon).
- **Il download del backup** (`core.js:881`, `a.href = URL.createObjectURL(blob)`): il
  `security-reviewer` dichiara questo punto `BASIS: unknown` e chiede una verifica a runtime,
  perché un anchor con download non è coperto da `media-src` e la sola lettura statica non
  decide. Va provato cliccando il pulsante, non dedotto.
- **L'estrazione lascia un helper nello scope di `views.js`**: non è un errore di sintassi, è
  un `ReferenceError` che compare solo percorrendo quel ramo. Mitigazione doppia: `no-undef`
  introdotto prima di M4, e `conversazione.spec.js` che copre sia il percorso lineare sia
  quello con biforcazione.
- **`views-talk.js` dimenticato in `PRECACHE`**: il primo avvio senza rete cade su uno script
  assente. Mitigazione: `check_precache.mjs` introdotto prima di M4 e incluso fra i verify.
- **`SW_VERSION` non alzato in M4**: studenti fermi su una shell in cui `views-talk.js` non
  esiste. Mitigazione: bump nello stesso commit, `grep -n SW_VERSION sw.js` fra i verify.
  Rischio speculare: bump superfluo nel commit MINOR 3a, evitato per costruzione (la shell non
  cambia contenuto).
- **La prima passata ESLint chiede un refactor di massa**: violerebbe le Modifiche Chirurgiche
  su 35 file funzionanti. Mitigazione: misura prima di congelare il set; criterio di
  accettazione del commit è `git diff --stat` che non tocca `assets/js/`.
- **B3 dà una falsa sensazione di rete di sicurezza**: senza remote il workflow non gira. La
  sua DoD è "ogni comando esce 0 in locale", non "run verde".

## Vincoli del CLAUDE.md sfiorati dal piano

1. **`file://`** - solo MINOR 2 può violarlo. Cancello A2, obbligatorio.
2. **Script classici, non moduli ES** - `views-talk.js` è un IIFE senza `import`/`export`, ed
   ESLint dichiara `sourceType: "script"` su `assets/js/**`, altrimenti segnalerebbe come
   errori i globali che sono il meccanismo del progetto.
3. **Ordine degli script** - `views-talk.js` dopo `views.js` perché consuma `Views.shell`,
   definito in fondo a `views.js`. Il commento d'ordine va scritto, come i cinque già presenti.
4. **`PRECACHE` + `SW_VERSION` a mano** - M4 li tocca entrambi; MINOR 3b automatizza proprio
   ciò che oggi il CLAUDE.md chiede all'umano di ricordare.
5. **Zero dipendenze runtime** - ESLint è devDependency.
6. **Limite globale di 300 righe per file** - `views.js` resta a ~962 dopo M4. La rule
   confligge con l'architettura di questo repo, dove un modulo è un file; M4 riduce il debito
   senza pretendere di azzerarlo, e non va allargato in un refactor non richiesto.
7. **Divieto di toccare README e docs senza richiesta** - il badge è richiesto da B3,
   l'aggiornamento di `CLAUDE.md` rientra nell'eccezione per cambi di convenzioni e strumenti.

## Criteri di successo

Working tree pulito, dopo l'ultimo commit, sei comandi verdi in sequenza:

```
node scripts/validate.mjs        # exit 0
node scripts/parity.mjs          # exit 0
node scripts/check_precache.mjs  # exit 0, 51 script tutti presenti
npm run lint                     # exit 0
npm test                         # exit 0
npm run test:dom                 # exit 0
```

Più tre osservazioni che nessun comando produce:

- `index.html` aperto da disco in Chromium e in Firefox: corso navigabile, font corretti,
  audio che parte, console senza violazioni CSP.
- Una conversazione con biforcazione percorsa fino al riepilogo, ramo alternativo azionato.
- `git log --oneline` mostra commit atomici, uno per cambiamento logico, nessun WIP.

## Stima

| Blocco | Stima |
|---|---|
| MINOR 5 + M2 | 20 min |
| B3 (badge escluso, A1) | 45 min |
| MINOR 3a | 15 min |
| MINOR 3b | 60 min |
| M5 (misura + config + eventuali fix) | 2-3 h |
| M4 | 90 min |
| MINOR 2 (policy + http + file:// + spec) | 2-2,5 h |
| CLAUDE.md | 20 min |
| **Totale** | **7,5-9,5 h**, con buffer **9-11,5 h** |

Le due voci che possono sforare: M5 (dipende da cosa trova la misura) e MINOR 2 (dipende da
A2: se `file://` rompe, il fix diventa una decisione da riportare, non altro lavoro).
