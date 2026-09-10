# 004 - Lancio pubblico: piano di implementazione

Stato: decisioni prese, in attesa del dato bloccante (contatto del titolare)
Versione: 1.1
Data: 2026-09-10
Scope: tre voci approvate dall'audit pre-lancio (A1 anteprima social, A2 pagina 404,
A3 informativa privacy). Nessun cambiamento al contenuto del corso, nessuna nuova
dipendenza a runtime.

## Obiettivo

Rendere il corso presentabile e onesto verso chi lo incontra da fuori: un link condiviso
mostra un'anteprima, un indirizzo sbagliato riporta al corso invece di finire sulla pagina
di errore di GitHub, e chi vuole sapere che fine fanno i suoi dati trova una risposta
scritta, verificabile riga per riga contro il codice, nella lingua in cui sta studiando.

I tre vincoli costituzionali restano il criterio di rigetto di qualunque variante:
funzionamento da `file://`, zero dipendenze a runtime, ordine degli script in `index.html`
come dichiarazione di dipendenza. A questi il piano ne aggiunge uno locale, perché due delle
tre voci lo mettono sotto pressione: **nessuno script inline e nessun attributo `on*=`**, che
oggi non è una preferenza ma una proprietà dichiarata nel commento sopra la CSP
(`index.html:6-18`).

## Definition of Done

Una casella per voce, ciascuna con il comando che la chiude o l'output da guardare.
Le caselle di A1 e A2 che richiedono il sito pubblicato si verificano dopo il push, non prima.

### A1 - anteprima social

- [ ] `node scripts/check_ogtags.mjs` esce 0. Il gate verifica tre cose che si rompono in
      silenzio: che il file puntato da `og:image` esista sul disco, che il prefisso assoluto
      dei tag coincida con l'indirizzo dichiarato una sola volta nel repository, e che
      l'immagine misuri esattamente 1200x630.
- [ ] `curl -s https://andreabonn.github.io/impara-italiano/ | grep -c 'property="og:'`
      restituisce almeno 6 (title, description, url, image, image:alt, type).
- [ ] `curl -s -o /dev/null -w '%{http_code} %{content_type}\n'
      https://andreabonn.github.io/impara-italiano/assets/og/cover.png` restituisce
      `200 image/png`.
- [ ] Il file `assets/og/cover.png` pesa meno di 300 KB (`ls -l`), soglia sotto la quale
      nessuna piattaforma social ricomprime o rifiuta l'immagine.
- [ ] `node scripts/build_og.mjs` rigenera l'immagine e `git status --short` non elenca
      differenze: l'asset è riproducibile dal repository, non un binario di provenienza ignota.
- [ ] L'anteprima è osservata su almeno due piattaforme diverse (una che legge Open Graph,
      una che legge le Twitter card): l'immagine appare, il titolo non è troncato a metà parola.
- [ ] `node scripts/check_swversion.mjs` esce 0: `index.html` sta in `PRECACHE`, quindi
      toccarlo cambia l'impronta e senza aggiornarla il rilascio non ha modo di annunciarsi.

### A2 - pagina 404

- [ ] `curl -s -o /dev/null -w '%{http_code}\n'
      https://andreabonn.github.io/impara-italiano/questa-non-esiste` restituisce 404
      (non 200: la pagina deve informare, non fingere che tutto sia a posto).
- [ ] `curl -s https://andreabonn.github.io/impara-italiano/a/b/c/inesistente |
      grep -oE '(href|src)="[^"]*"'` non produce nessun valore relativo. Ogni riferimento
      inizia con `/impara-italiano/` oppure con `https://`. È la condizione che rende la
      pagina corretta a qualunque profondità di percorso, che è il modo in cui GitHub Pages
      la serve.
- [ ] `node scripts/check_404.mjs` esce 0. Stesso controllo del punto sopra, ma statico e in
      CI, così non dipende dal fatto che qualcuno si ricordi di provare un URL sbagliato.
- [ ] `npm run test:dom` verde, incluso il nuovo `tests/dom/notfound.spec.js`: la pagina
      disegna il messaggio, espone esattamente un pulsante verso il corso, non produce errori
      in console.
- [ ] Il pulsante di ritorno, cliccato su Pages, apre il corso alla schermata iniziale e non
      lascia il browser in un ciclo (indietro dal corso non ritorna sulla 404).
- [ ] `node scripts/check_precache.mjs` esce 0. Il gate legge solo `index.html`, quindi
      `404.html` non lo tocca: la casella serve a dimostrare che non l'abbiamo rotto per sbaglio.

### A3 - informativa privacy

- [ ] Ogni affermazione dell'informativa ha una riga nella tabella di riscontro
      (`specs/004-lancio-pubblico/riscontri.md`) con il comando eseguito e il suo output.
      Un'affermazione senza riscontro non entra nel testo.
- [ ] La tabella nomina esplicitamente i tre fatti scomodi: il riconoscimento vocale manda la
      voce dello studente al fornitore del browser (`assets/js/consent.js:1-20`,
      `assets/js/audio.js:224-245`), GitHub vede l'indirizzo IP di chi apre il sito perché è
      il fornitore dell'hosting, e la revoca del consenso vocale oggi non ha nessun comando
      nell'interfaccia (`Consent.ustaw(false)` esiste in `assets/js/consent.js:44` e nessuno
      lo chiama).
- [ ] `#/privacy` è raggiungibile da dentro il corso senza conoscere l'indirizzo: partendo
      dalla schermata iniziale, un percorso di clic la apre.
- [ ] `node scripts/parity.mjs` esce 0: le chiavi `privacy.*` esistono in tutti e cinque i
      file `data/i18n/ui-<lang>.js`, nessuna in più e nessuna in meno.
- [ ] Percorrendo `#/privacy` nelle cinque lingue, `I18n.missing()` restituisce array vuoto.
      È il controllo che `parity.mjs` non fa: quello confronta i dizionari fra loro, questo
      dice che la vista chiede esattamente le chiavi che esistono.
- [ ] Il contatto nel testo è quello confermato dall'utente, non un rimando generico a GitHub.
      `grep -n "github" data/i18n/ui-pl.js | grep privacy` non trova nulla.
- [ ] `grep -rn "DATO REALE\|TODO\|XXX" data/i18n/ui-*.js` vuoto: nessun segnaposto è
      sopravvissuto alla traduzione.
- [ ] `npm run test:all` verde, `node scripts/check_precache.mjs` e
      `node scripts/check_swversion.mjs` verdi (il file nuovo entra in `PRECACHE` e cambia
      l'impronta).

## Assunzioni

- **[RISOLTA 2026-09-10] Titolare del trattamento: Andrea Bonacci,
  `andreabonacci95@protonmail.com`.** Fornito dall'utente. Prima non esisteva nel repository:
  footer (`index.html:88-90`) e `SECURITY.md:13` rimandano entrambi a GitHub, che è un canale
  per segnalare vulnerabilità, non un titolare. Questo indirizzo è l'unico recapito che entra
  nell'informativa, e la sostituisce in ogni punto in cui il testo dice "scrivi a".
- **[RISOLTA 2026-09-10] L'indirizzo di pubblicazione è e resta
  `https://andreabonn.github.io/impara-italiano/`.** Confermato dall'utente. Le voci A1 e A2 lo
  scrivono nel repository, ma con D3 sta in un punto solo (`homepage` in `package.json`):
  un dominio proprio in futuro costa quella riga più la rigenerazione dell'immagine.
- Il corso non fa profilazione, non ha account, non invia niente a domini terzi. Assunzione da
  trattare come ipotesi e verificare nel sub-task T3.1, non come premessa del testo.
- Il quadro di riferimento dell'informativa è il GDPR europeo. Il titolare è una persona
  fisica che pubblica un corso gratuito, senza finalità commerciali dichiarate.
- L'informativa è un documento di fatti, non un testo contrastivo: le note "nella tua lingua
  funziona diversamente" si riscrivono per lingua, un'informativa si traduce. Questo è ciò che
  rende le quattro traduzioni un lavoro di traduzione e non quattro stesure.
- La lingua sorgente dell'informativa è l'italiano (vedi D4b): è quella in cui il titolare può
  sottoscrivere ciò che il documento dichiara.
- Playwright con Chromium è già installato (`@playwright/test` in devDependencies) e basta a
  produrre l'immagine 1200x630. Nessun Pillow, nessun sharp, nessuna dipendenza nuova.
- Il corso non cambia comportamento: nessuna delle tre voci tocca il motore, i dati del corso
  o lo stato salvato. `SCHEMA` resta a 2.

## Decisioni prese

Sciolte dall'utente il 2026-09-10, tutte sulla raccomandata. Da qui in avanti sono vincolo,
non proposta: una variante nell'implementazione è drift e `/analyze` deve segnalarla.

| id | Decisione | Conseguenza che il codice deve rispettare |
|---|---|---|
| D1 | Rotta dedicata `#/privacy` con `assets/js/views-privacy.js` | i sei tocchi del file nuovo sono obbligatori, non opzionali |
| D1b | Accesso da footer, riga in Impostazioni, voce nella mappa della guida | niente voce nel rail; il commento a `index.html:83-87` va aggiornato perché oggi dichiara il contrario |
| D2 | `404.html` con percorsi radice-assoluti e cinque righe statiche, zero script | le sue 10 stringhe stanno fuori da `parity.mjs`: le copre `check_404.mjs`, non i dizionari |
| D3 | L'indirizzo assoluto entra una volta come `homepage` in `package.json` | `check_ogtags.mjs` e `check_404.mjs` lo leggono da lì; nessun secondo letterale non confrontato |
| D4 | L'immagine dell'anteprima è generata da uno script, non disegnata a mano | `build_og.mjs` rieseguito lascia `git status --short` vuoto |
| D4b | L'anteprima parla inglese, il nome del corso resta italiano | precedente interno: `manifest.webmanifest` dichiara `"lang": "en-US"` |
| D5 | L'interruttore di revoca del consenso vocale entra nel lavoro | T3.13 non è più opzionale; senza, la frase "revocabile" dell'informativa sarebbe falsa |

## Disambiguazione

Sei domande, tre principali e tre subordinate. Le opzioni sono mutuamente esclusive e ognuna
porta la sua conseguenza. La raccomandata è in coda a ciascun blocco con il motivo. Le
decisioni sono nella tabella qui sopra; questa sezione resta come motivazione, non come
scelta ancora aperta.

### D1 - Dove vive l'informativa

- **Opzione A, rotta dedicata `#/privacy` con `assets/js/views-privacy.js`** -> il documento ha
  un indirizzo proprio, quindi si può linkare da fuori e da dentro, sta nella lingua dello
  studente senza lavoro aggiuntivo, funziona offline e da `file://` come tutto il resto.
  Costa i sei tocchi di un file nuovo (`<script>` in `index.html`, voce in `PRECACHE`, gate
  `check_precache`, impronta `check_swversion`, riga in `TRASY` di `tests/dom/routes.spec.js`,
  eventuale voce nella mappa del corso dentro la guida) e circa venti chiavi per cinque lingue.
- **Opzione B, sezione dentro `views-guide.js` (`#/guida?s=privacy`)** -> costo strutturale
  quasi nullo, una voce in `SEKCJE` e chiavi `guide.privacy.p1..pN`. Ma la guida risponde alla
  domanda "come si usa il corso" e un documento legale infilato lì non si cita da solo; e
  soprattutto `akapity()` (`assets/js/views-guide.js:58-62`) produce solo paragrafi di testo
  escapato, quindi l'indirizzo di posta del titolare non sarebbe cliccabile e un elenco
  puntato non sarebbe rappresentabile.
- **Opzione C, scheda dentro `views-settings.js`** -> adiacenza tematica forte, perché lì
  vivono già i dati locali, l'esportazione e la cancellazione. Ma nessun indirizzo proprio,
  quindi il documento non si linka; e il file passerebbe da 303 a circa 350 righe, portando a
  tre gli schermi oltre le 300 righe in un repository che ne ha già discussi due.
- **Raccomandata: A.** Il precedente interno è esplicito e argomentato: `views-guide.js:2-9`
  spiega perché la guida è una rotta e non un dialogo, e le ragioni (un indirizzo per
  linkarci, una via di ritorno, entrata in `PRECACHE`) valgono identiche qui. B resta la sola
  opzione difendibile se il costo dei sei tocchi va evitato a ogni costo, e allora la mail va
  scritta in chiaro senza collegamento.

### D1b - Da dove si raggiunge

- **Opzione A, footer** -> visibile su ogni schermata, perché il footer sta fuori da `#main`
  di proposito (`index.html:83-90`). Oggi non ha `data-i18n` e il commento sopra spiega
  perché: contiene solo un simbolo e un nome proprio. Aggiungere un collegamento tradotto
  funziona senza toccare il motore, perché `I18n.apply()` senza argomenti percorre tutto il
  documento (`assets/js/i18n.js:102-112`); va però aggiornato quel commento, che a quel punto
  direbbe il falso.
- **Opzione B, voce nel menu laterale** -> massima visibilità, ma diventa la diciassettesima
  voce di un menu di schermate di studio, dove un documento legale non è al suo posto.
  `tests/dom/routes.spec.js` ha un test dedicato alle voci del rail, quindi la voce va
  aggiunta anche a `TRASY`.
- **Opzione C, solo dalla guida e dalle impostazioni** -> nessuna modifica al footer, ma
  richiede due clic e la conoscenza di dove cercare.
- **Raccomandata: A più C insieme.** Il footer come collegamento permanente, una riga nelle
  impostazioni accanto ai dati locali, e la voce nella mappa del corso dentro la guida. Non
  nel rail: quello elenca cose da fare, non cose da leggere una volta.

### D2 - Come `404.html` risolve il percorso e la lingua

Il vincolo tecnico da cui nascono le opzioni: GitHub Pages serve `/404.html` per qualunque
percorso mancante, a qualunque profondità, e i riferimenti relativi dentro quel file si
risolvono rispetto all'URL richiesto, non rispetto alla posizione del file. Da
`/impara-italiano/a/b/c/` un `href="index.html"` punta a `/impara-italiano/a/b/index.html`.

- **Opzione A, percorsi radice-assoluti e pagina volutamente multilingue statica** ->
  ogni `href` e `src` scritto come `/impara-italiano/...`, che è corretto a ogni profondità.
  La lingua non si indovina: la pagina porta il titolo in italiano (che è il nome del corso)
  e cinque righe brevi, una per lingua, più un solo pulsante di ritorno. Zero script, zero
  lettura di `localStorage`, zero deroghe alla CSP. Costo: quelle dieci stringhe vivono dentro
  `404.html` e non nei dizionari, quindi `parity.mjs` non le vede; va dichiarato nel file.
- **Opzione B, `<meta http-equiv="refresh" content="0; url=/impara-italiano/">`** -> lo
  studente atterra sul corso senza fare niente. Ma non scopre mai di aver seguito un
  collegamento rotto, il tasto indietro riporta sulla 404 e da lì di nuovo sul corso (ciclo), e
  un reindirizzamento automatico è un problema noto di accessibilità. Il percorso assoluto
  serve comunque.
- **Opzione C, script inline che legge `localStorage` e sceglie la lingua** -> la pagina parla
  la lingua dello studente. Rompe la proprietà "non un solo script inline" dichiarata sopra la
  CSP e richiederebbe una deroga o un hash, su una pagina che quasi nessuno vedrà.
- **Opzione D, script esterno a percorso assoluto (`/impara-italiano/assets/js/notfound.js`)**
  -> stessa resa di C senza toccare la CSP, perché `script-src 'self'` accetta un file del
  sito. Ma è un file nuovo che non può dipendere dal motore (non può caricare sessanta script
  per tradurre due frasi), quindi conterrebbe un secondo mini-dizionario destinato a divergere
  dal primo.
- **Opzione E, pagina monolingua in inglese** -> la più corta da scrivere. Ma il corso ha
  cinque lingue di spiegazione dichiarate, e la prima pagina che uno studente polacco incontra
  quando sbaglia indirizzo sarebbe l'unica in inglese di tutto il prodotto.
- **Raccomandata: A.** È l'unica che non introduce né uno script né una divergenza fra due
  dizionari, e le cinque righe costano meno di qualunque meccanismo per evitarle. Conseguenza
  da accettare e scrivere nel file: `404.html` è il solo file del repository corretto soltanto
  quando servito sotto il prefisso di Pages, quindi non si verifica caricandolo dal server
  locale ma leggendone gli attributi (gate `check_404.mjs` più il test DOM).

### D3 - Come entra l'URL assoluto senza legare il progetto a un dominio

- **Opzione A, letterale ripetuto dove serve** -> nessuna infrastruttura, ma l'indirizzo
  finisce in almeno tre punti (`og:url`, `og:image`, i riferimenti di `404.html`) e un
  giorno qualcuno ne cambierà due su tre.
- **Opzione B, campo `homepage` in `package.json` come dichiarazione unica, letto dai gate**
  -> `homepage` è un campo npm standard, il file esiste già, nessun file nuovo. I letterali
  restano nell'HTML perché devono starci (i crawler non eseguono niente), ma
  `check_ogtags.mjs` e `check_404.mjs` li confrontano con quel campo e la CI si ferma alla
  prima divergenza. Un rinomino del repository rompe un test, non l'anteprima in silenzio.
- **Opzione C, nuovo modulo `scripts/site.mjs` che esporta la costante** -> stessa sostanza di
  B con un file in più e nessuna convenzione a supporto.
- **Raccomandata: B.** Risponde alla domanda vera, che non è "come evitare l'indirizzo
  assoluto" (non si può evitare, i crawler non risolvono i relativi) ma "come farlo entrare una
  volta sola e in modo verificabile". Nota che il corso resta identico da disco, da localhost
  e da Pages: i tag Open Graph sono inerti per il browser, e `404.html` non viene mai
  raggiunto da `file://`.

### D4 - L'immagine dell'anteprima: generata o disegnata

- **Opzione A, generata da `scripts/build_og.mjs`** che apre con Playwright un modello HTML
  1200x630 e ne cattura lo screenshot, usando i font in `assets/fonts/` e la palette OKLCH di
  `assets/css/app.css` -> l'immagine è rigenerabile, coerente con il corso per costruzione, e
  cambia insieme alla palette. Costa circa novanta minuti di script e modello.
- **Opzione B, PNG prodotto a mano una volta e committato** -> mezz'ora, e poi un binario che
  nessuno sa rifare, che diverge dalla palette al primo cambio di tema e che va ridisegnato da
  zero per ogni ritocco.
- **Raccomandata: A.** In questo repository ogni asset è prodotto da uno script (le
  registrazioni da `build_audio.py`, l'impronta da `check_swversion.mjs`, le frequenze da
  `build_frequency.mjs`): un binario non riproducibile sarebbe un corpo estraneo, e la
  casella della Definition of Done che chiede a `git status` di restare vuoto dopo la
  rigenerazione è esattamente ciò che tiene onesta questa scelta.

### D4b - In quale lingua parla l'anteprima

I tag Open Graph sono statici: i crawler non eseguono JavaScript, quindi non possono seguire
`settings.lang`. Una lingua sola va scelta.

- **Opzione A, inglese** -> raggio più largo, e c'è già un precedente interno che nessuno ha
  discusso: `manifest.webmanifest` dichiara `"lang": "en-US"` e la sua descrizione è in inglese.
- **Opzione B, polacco** -> coerente con `<html lang="pl">` e con l'attuale
  `<meta name="description">` (`index.html:20`), che è la stringa che oggi i crawler leggono
  davvero. Ma sceglie una delle cinque lingue di spiegazione come se fosse quella principale.
- **Opzione C, italiano** -> è la lingua del corso e del nome, ma non è la lingua di nessuno
  studente: chi non sa l'italiano è esattamente il pubblico dell'anteprima.
- **Raccomandata: A per titolo e descrizione**, con il nome del corso che resta italiano
  (`Impara l'Italiano`) perché è un nome proprio, come già accade nel rail. Sull'immagine
  compare solo il nome e la scala `A1 -> C2`, quindi l'immagine non ha lingua e non si
  moltiplica per cinque.

### D5 - La revoca del consenso vocale: dentro A3 o fuori

Fatto verificato: `assets/js/consent.js:44-48` espone `Consent.ustaw(false)` e il commento
sopra dichiara il consenso revocabile, ma nessuna vista lo chiama. Il solo modo per uno
studente di tornare indietro oggi è azzerare tutti i dati.

- **Opzione A, l'informativa dice come stanno le cose** ("il consenso si revoca azzerando i
  dati nelle impostazioni") -> costo zero, e un documento che dichiara il vero. Ma dichiara
  una cosa scomoda invece di risolverla, e sotto GDPR la revoca dovrebbe essere semplice
  quanto il consenso.
- **Opzione B, A3 include un interruttore nelle impostazioni** che chiama `Consent.ustaw`
  -> circa quarantacinque minuti più due chiavi per cinque lingue, e l'informativa può dire
  "si revoca da qui" indicando un punto preciso.
- **Opzione C, voce separata fuori da questo piano** -> tiene A3 stretta, ma spedisce
  l'informativa mentendo per omissione fino a quando l'altra voce non arriva.
- **Raccomandata: B.** È l'unico caso in cui questo piano tocca il comportamento del prodotto,
  e la giustificazione è che senza quel tocco il deliverable principale di A3 sarebbe meno
  vero. Se l'utente sceglie A o C, il testo cambia di conseguenza e la casella corrispondente
  della Definition of Done va riscritta prima di iniziare.

## Approccio

Tre fasi, separatamente mergiabili. Dopo A1 il corso è pubblicabile e condivisibile anche se
A2 e A3 non arrivano mai; dopo A2 un indirizzo sbagliato non è più un vicolo cieco anche senza
A3. Nessuna fase esiste per rendere utile la successiva.

L'ordine consigliato è A1, A2, A3 per due ragioni. La prima è che A1 e A2 condividono la
dichiarazione dell'indirizzo di pubblicazione (D3) e A1 la introduce: se si esegue solo A2,
il suo primo sub-task la crea, e la dipendenza fra le due fasi resta morbida, mai bloccante.
La seconda segue il precedente registrato su questo progetto: le voci a maggioranza di codice
vanno prima perché si verificano da sole, quelle a maggioranza editoriale si scaglionano e
stanno in fondo, dove un eventuale taglio non lascia macerie. A3 è per il 57% scrittura e
traduzione.

Dentro A3 l'ordine è vincolato dal contenuto, non dal codice: prima la tabella di riscontro
(T3.1), poi il testo italiano (T3.2), poi la vista (T3.3), poi il polacco come lingua di
riferimento della parità (T3.5), poi le quattro traduzioni (T3.6-T3.9). La ragione è quella
già imparata su questo repository: la revisione del testo precede la moltiplicazione per
cinque, perché una correzione dopo le traduzioni costa cinque volte e lascia orfani. Il
sub-task bloccante T3.0 (contatto del titolare) va aperto per primo, perché è l'unico che
dipende da qualcuno che non sta scrivendo il codice.

Chi scrive che cosa: il testo dell'informativa non è un compito di implementazione. La tabella
di riscontro la produce chi legge il codice, con i comandi allegati; la stesura in italiano la
firma il titolare (l'utente), assistito per la forma; le traduzioni sono un lavoro di
traduzione dal testo italiano approvato, non cinque stesure indipendenti, e chiudono la fase
insieme al gate `parity.mjs`.

## Sub-task

La scomposizione riga per riga, con dipendenze, requisito tracciato e verifica osservabile,
sta in `specs/004-lancio-pubblico/tasks.md`. Qui la sintesi per fase.

| Fase | Sub-task | Codice | Contenuto | Totale |
|---|---|---|---|---|
| A1 anteprima social | T1.1 - T1.6 | 245 min | 0 | 4h05 |
| A2 pagina 404 | T2.1 - T2.5 | 185 min | 0 | 3h05 |
| A3 informativa | T3.0 - T3.12 | 315 min | 420 min | 12h15 |
| A3 opzionale (D5 opzione B) | T3.13 | 65 min | 0 | 1h05 |
| **Totale** | | **810 min** | **420 min** | **20h30** |

Buffer +20% per imprevisti tecnici (percorso obbligatorio su un repository con nove gate in
CI, dove ogni file nuovo ne tocca almeno tre): **24h30**. Range da comunicare: **20-25 ore**,
cioè due giorni e mezzo o tre.

La colonna Contenuto è separata perché quel lavoro non accelera aggiungendo una seconda
persona e non è programmazione: sono 7 ore su 20, il 34% del piano, e stanno tutte dentro A3.

## File impattati

| File | Tipo | Scopo |
|---|---|---|
| `package.json` | modifica | campo `homepage`: l'indirizzo di pubblicazione dichiarato una volta (D3) |
| `index.html` | modifica | tag Open Graph e Twitter nel `<head>`; `<script>` di `views-privacy.js` dopo `views.js`; collegamento all'informativa nel footer e aggiornamento del commento che oggi spiega perché il footer non ha `data-i18n` |
| `assets/og/cover.png` | nuovo | immagine 1200x630 dell'anteprima, generata |
| `scripts/og-template.html` | nuovo | modello dell'immagine, font e palette locali |
| `scripts/build_og.mjs` | nuovo | rigenerazione dell'immagine con Playwright |
| `scripts/check_ogtags.mjs` | nuovo | gate: file esistente, prefisso coerente con `homepage`, dimensioni esatte |
| `404.html` | nuovo | pagina di errore a radice, riferimenti assoluti, cinque righe di lingua |
| `scripts/check_404.mjs` | nuovo | gate: nessun riferimento relativo, prefisso coerente con `homepage` |
| `assets/js/views-privacy.js` | nuovo | rotta `#/privacy`, sezioni, contatto cliccabile |
| `data/i18n/ui-pl.js` | modifica | chiavi `privacy.*` di riferimento |
| `data/i18n/ui-en.js`, `ui-es.js`, `ui-fr.js`, `ui-de.js` | modifica | traduzioni delle stesse chiavi |
| `assets/js/views-settings.js` | modifica | riga verso l'informativa; con D5 opzione B, interruttore di revoca del consenso vocale |
| `assets/js/views-guide.js` | modifica | voce dell'informativa nella mappa del corso (`EKRANY`) |
| `sw.js` | modifica | `views-privacy.js` in `PRECACHE`, impronta aggiornata |
| `tests/dom/routes.spec.js` | modifica | `privacy` nella lista `TRASY` |
| `tests/dom/notfound.spec.js` | nuovo | la 404 disegna, un solo pulsante, nessun errore in console |
| `tests/dom/privacy.spec.js` | nuovo | la rotta disegna in cinque lingue, `I18n.missing()` vuoto, il footer porta lì |
| `.github/workflows/ci.yml` | modifica | due passi nuovi: `check_ogtags.mjs` e `check_404.mjs` |
| `docs/PRIVACY.it.md` | nuovo | testo sorgente in italiano, la versione che il titolare sottoscrive |
| `specs/004-lancio-pubblico/riscontri.md` | nuovo | tabella affermazione -> comando -> output |
| `CLAUDE.md` | modifica | due righe: l'immagine dell'anteprima è generata, e `404.html` è l'unico file corretto solo sotto il prefisso di Pages |

Non toccati e non da toccare: `data/core/**` (nessuna delle tre voci è contenuto del corso),
`assets/js/core.js` e `store.js` (`SCHEMA` resta 2, nessun campo nuovo salvo D5 opzione B che
usa `settings.sttConsent`, già esistente), `scripts/extract_strings.mjs` e le registrazioni
(nessuna frase italiana nuova, quindi nessun mp3).

## Rischi e mitigazioni

- **L'informativa afferma qualcosa che il codice smentisce.** È il rischio principale e non è
  ipotetico: la stessa cosa è già successa nel README, che prometteva che niente lascia il
  browser mentre il riconoscimento vocale spediva la voce da mesi (`assets/js/consent.js:1-14`
  lo racconta). Mitigazione: la tabella di riscontro è un sub-task che precede la stesura, non
  una rilettura finale, e nessuna frase entra nel testo senza la sua riga.
- **Il consenso dichiarato revocabile e non revocabile in pratica** (`Consent.ustaw` senza
  chiamanti). Mitigazione: D5, da decidere prima di scrivere il testo, perché cambia una frase
  dell'informativa in cinque lingue.
- **Una traduzione più corta o una chiave dimenticata passa in silenzio a runtime**: una chiave
  assente cade sull'inglese senza errore (`assets/js/i18n.js:81-84`). Mitigazione: `parity.mjs`
  in CI, che controlla in entrambe le direzioni (mancante e in eccesso), più il controllo di
  `I18n.missing()` dopo aver percorso la rotta in tutte e cinque le lingue.
- **`404.html` corretto in locale e rotto su Pages**, o viceversa: è l'unico file del
  repository il cui contesto di esecuzione non è riproducibile dal server di sviluppo, perché
  `scripts/serve.mjs` serve dalla radice del progetto e non sotto `/impara-italiano/`.
  Mitigazione: non provare a far combaciare il server locale con Pages; verificare gli
  attributi staticamente (`check_404.mjs`) e con il test DOM, poi la casella su Pages dopo il
  push.
- **L'anteprima resta quella vecchia dopo il primo tentativo.** Le piattaforme social mettono
  in cache aggressivamente le anteprime, quindi il primo link condiviso male resta male per
  ore. Mitigazione: verificare i tag con `curl` prima di condividere il link ovunque, e usare
  gli strumenti di debug delle piattaforme per invalidare la cache al primo errore.
- **L'immagine generata con font diversi da quelli attesi.** Chromium in un runner senza i
  font di sistema ricade su un sostituto e lo screenshot esce con un'altra tipografia senza
  segnalare niente. Mitigazione: il modello carica i woff2 da `assets/fonts/` con `@font-face`
  e lo script attende `document.fonts.ready` prima dello scatto; la casella "rigenerando,
  `git status` resta vuoto" fa fallire il caso in cui il rendering non sia deterministico.
- **L'impronta di `sw.js` dimenticata.** `index.html` sta in `PRECACHE`, quindi tutte e tre le
  fasi la invalidano. Senza aggiornarla il rilascio non si annuncia. Mitigazione: il gate esiste
  già in CI (`check_swversion.mjs`), e ogni fase ha il suo sub-task di chiusura che lo esegue.
- **Il gate `check_precache.mjs` non guarda `404.html`.** Legge solo `index.html`
  (`scripts/check_precache.mjs:62-82`), quindi nessun automatismo protegge la nuova pagina.
  Mitigazione: `check_404.mjs` è quel gate mancante, ed è la ragione per cui A2 lo include
  invece di limitarsi al file.

## Criteri di verifica

Il piano è completo quando, in questo ordine:

1. `npm run lint && node scripts/validate.mjs && node scripts/parity.mjs &&
   node scripts/check_precache.mjs && node scripts/check_swversion.mjs &&
   node scripts/check_ogtags.mjs && node scripts/check_404.mjs` escono tutti 0.
2. `npm run test:all` è verde, incluse le tre specifiche nuove o modificate.
3. `node scripts/coverage.mjs --min 99` resta verde. Nota tecnica: `views-privacy.js` è
   coperto dai test DOM e non entra nel denominatore, perché `scripts/coverage.mjs:84` conta
   solo i file caricati nella sandbox dei test unitari. Non è un vincolo, è la ragione per cui
   la soglia non si muove.
4. La CI passa sul push, con i due passi nuovi.
5. Sul sito pubblicato: le tre caselle con `curl` di A1 e A2 tornano i valori attesi, e
   l'anteprima appare su due piattaforme diverse.
6. Percorrendo il corso in ciascuna delle cinque lingue, il collegamento nel footer apre
   l'informativa nella stessa lingua e `I18n.missing()` resta vuoto.

## Handoff

Le tre fasi sono lavoro di implementazione con test osservabili, su un codebase che ha già la
sua disciplina di gate. L'agent successivo è `tdd-guide` per A2 e A3, dove il test precede
utilmente il file (il gate `check_404.mjs` e la specifica DOM descrivono la pagina prima che
esista, e `parity.mjs` fa da rosso naturale sulle chiavi mancanti). Per A1 il percorso è più
lineare e `fullstack-developer` basta, con la sola avvertenza che l'immagine va guardata, non
solo generata.

Prima di iniziare servono le risposte a D1, D2, D3 (le tre principali), a D4b e D5 (che
cambiano il testo), e il dato bloccante del contatto del titolare.
