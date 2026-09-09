# 002 - Riconciliazione fra piano e ADR

Il piano (`plan.md`) e l'ADR (`adr.md`) sono stati prodotti in parallelo e su tre punti
arrivano a conclusioni diverse. Qui sta la decisione che vale, con il fatto che la sostiene.
Dove l'ADR vince, il piano va corretto in quel punto e non altrove: la sequenza delle fasi
non cambia.

## R1 - Bump di schema per FSRS: NON si fa

`plan.md` § 5 prevede `SCHEMA` da 2 a 3 con migrazione. `adr.md` ADR-006 dice di non alzarlo.
Vince l'ADR.

Fatti verificati di persona, non riportati:

- `assets/js/errors.js:29` — `GRADUATE_REPS = 2`, e `errors.js:68` cancella la carta appena
  `ok && card.reps >= 2`. In `Core.schedule` il ramo `interval * ef` si raggiunge solo da
  `reps >= 3`. Nel quaderno degli errori quel ramo è **irraggiungibile**: `ef` viene scritto e
  mai letto. Sostituire l'algoritmo lì non cambia niente di osservabile, quindi FSRS tocca il
  solo mazzo del lessico e il rischio RK2 del piano si sgonfia.
- Nessun campo esistente cambia significato: `due`, `interval`, `reps`, `lapses` restano
  quello che erano, `ef` diventa zavorra su carte già scritte, i campi FSRS (`s`, `d`) sono
  nuovi. La regola del progetto riserva il bump al cambio di **significato** di un campo
  esistente, e questo non è quel caso.
- Conversione pigra: una carta senza `s`/`d` li riceve alla prima ripetizione dopo
  l'aggiornamento, derivandoli dall'intervallo corrente. Nessuna migrazione di massa.

## R2 - Il fix di `load()` si fa lo stesso, e resta il primo sub-task

`plan.md` lo aveva legato al bump. Il bump salta, il fix no.

Verificato: `assets/js/core.js:68` accetta il salvataggio solo con `parsed.schema === SCHEMA`,
uguaglianza stretta, e **non chiama `migrateUp`**, che è cablata sul solo `importState`
(`core.js:698`). Un profilo con schema diverso viene ignorato in silenzio e lo studente riparte
da zero senza un errore da nessuna parte. È un difetto latente indipendente da FSRS: oggi non
si manifesta perché nessuno ha mai alzato lo schema, e si manifesterebbe la prima volta che
qualcuno lo fa, cioè nel momento peggiore.

Test di regressione prima del fix: un salvataggio con `schema: 1` in `localStorage` deve
arrivare allo stato corrente attraverso `MIGRATIONS`, non essere scartato.

## R3 - Falsi amici: forma dell'ADR, gate del piano

`plan.md` propone `data/core/falsi-amici.js` più un canale separato da `addStrings`, quindi
invisibile a `parity.mjs`, con `scripts/check-falsi-amici.mjs` come contropartita.
`adr.md` ADR-007 propone `data/core/interference.js` con campo `for: ["pl","es"]` e
`parity.mjs` che per quella categoria confronta contro la dichiarazione nello strato neutro.

Si prende la **forma dell'ADR** e si tiene il **gate del piano**. Motivo: rendere la categoria
invisibile al gate spegne il controllo esattamente dove il buco non si vede a occhio, perché
una lista più corta somiglia a una lista. Confrontare contro la dichiarazione `for:` lascia il
gate acceso su un criterio diverso invece di toglierlo. Il file dedicato resta perché
`extract_strings.mjs` cammina solo su `data/core/`: fuori di lì l'esercizio nasce muto.

## R4 - Lookup: la misura è già stata fatta

`plan.md` chiedeva uno spike con soglia dichiarata prima di leggere il numero. `adr.md` ADR-008
lo ha eseguito. Risultato riportato dall'architect (`BASIS: inferred`, non ho rieseguito il suo
script): 12431 forme distinte dalle 204 voci verbali in 11 ms, e l'alternativa "dizionario
ridotto ai lemmi del corso" copre il **28%** dei 521 token dei testi di lettura, perché 920
delle 1410 voci di lessico sono multiparola.

Verificato da me a campione: il coniugatore produce 1489 forme distinte da 22 verbi in 1 ms,
coerente per ordine di grandezza.

Decisione: nessun dizionario spedito, risoluzione forma-lemma a runtime dal coniugatore più
regole di de-flessione. `scripts/check_lookup.mjs` resta come gate, con la soglia dichiarata
prima di leggere il numero (C3 del piano).

## R5 - Registro delle ripetizioni: NON si aggiunge

`plan.md` § 5 prevede un contenitore `reviews[]` con tetto. Si toglie.

Motivo: i parametri FSRS si ottimizzano su uno storico, e questo prodotto non ha telemetria né
alcun consumatore di quello storico, quindi i parametri restano ai default per sempre. Un
contenitore che nessuno legge è complessità che non si ripaga, ed è la riga "guadagno nullo,
righe in più" della tabella di decisione. Se un giorno arriva un ottimizzatore lato client, il
registro si aggiunge allora, come contenitore additivo, esattamente come è stato fatto per il
motore adattivo.

Conseguenza da dichiarare senza girarci intorno: **il guadagno di FSRS su questo prodotto non
sarà misurabile localmente.** Si adotta sulla base del benchmark pubblicato a monte, non di una
misura fatta qui. Il criterio di successo di O4 non può quindi essere "meno ripetizioni a parità
di ritenzione": è la parità di comportamento con i vettori di prova dell'implementazione di
riferimento.

## R6 - `gsrs`: si rimuove

Verificato: `gsrs` è dichiarato in `core.js:40` e in `SHAPE` (`core.js:651`), e non è mai
scritto né letto da alcun modulo. Lo tocca solo `tests/unit/state.test.mjs:78`, che ce lo
scrive dentro a mano per verificare la persistenza.

Non essendoci una feature che lo popola (O4 non ne ha bisogno: schedula carte, non argomenti),
resta un contratto che nessuno onora. Si toglie da `defaultState()` e da `SHAPE`, e il test si
riscrive su un contenitore vero. Rimozione additivamente sicura: `merge()` ignora le chiavi
che non stanno nel default, quindi un profilo che lo contiene non si rompe.

## R7 - Lista di frequenza per O6: la licenza è risolta

Il piano marcava la provenienza come rischio aperto (RC6). Le liste più ovvie sono inutilizzabili
qui: Paisà e WaCKy sono **CC BY-NC-SA**, cioè non commerciale più share-alike, e la clausola
share-alike contamina il repository come il piano stesso teme.

Utilizzabile: **Leipzig Corpora Collection, CC BY 4.0** — attribuzione e nulla più. È quella da
prendere, con l'intestazione di provenienza (fonte, versione, licenza, data) che il piano
prescrive per ogni dato esterno. Le liste derivate da OpenSubtitles sono CC BY-SA 4.0 e vanno
evitate per lo stesso motivo di Paisà.

## R8 - Struttura dell'esame CILS: resta bloccante, ed è più incerta di quanto scritto

`A9` del piano è confermata come bloccante. In più: le fonti secondarie **non concordano** sul
numero delle prove del formato Cittadinanza. Una descrive quattro prove (ascolto, lettura,
produzione scritta, orale), un'altra ne descrive cinque includendo l'analisi delle strutture
di comunicazione, e tutte concordano su un punto che il piano deve recepire: il formato
Cittadinanza ha un **costrutto diverso** dal CILS UNO B1 standard, quindi la documentazione del
B1 generico non è una fonte valida per questa feature.

Nessuna riga di contenuto di O1 si scrive prima di aver letto il sillabo ufficiale CVCL
dell'Università per Stranieri di Siena. Fino ad allora la struttura è `BASIS: unknown` e va
scritta così nel piano, non arrotondata a quattro prove.

## R9 - Decisioni prese dall'utente in sede di revisione

**Chi scrive il contenuto.** Lo genera l'implementazione, l'utente lo revisiona prima della
registrazione audio. `A3` del piano è aggiornata di conseguenza. La revisione non è una
formalità: il nome del file mp3 è l'hash del testo, quindi una correzione dopo la registrazione
produce un file nuovo e lascia il vecchio orfano nella storia di git per sempre. Il gate è
`build_audio.py` non si esegue su una fase editoriale finché il testo italiano di quella fase
non è stato approvato.

**Ambito.** Tutte e nove le feature in questa release, più il fix di pubblicazione. Il taglio
MoSCoW è respinto e resta nel piano solo come ordine di taglio in caso di interruzione.
Programma completo F0 → F10, 45-52 giorni con A3 sciolta in questo senso.

## R10 - La promessa del README è già falsa oggi

Non è un rilievo sul piano, è un difetto del prodotto attuale, trovato dalla review di
sicurezza e verificato: `README.md:46` dichiara che nulla esce dal browser, mentre
`Audio2.listen` (`assets/js/audio.js:254`) usa `SpeechRecognition`, già attivo in 150 esercizi
`speak` (`assets/js/exercises.js:408`) e nelle 10 conversazioni (`assets/js/views.js:586`). Nei
browser che lo supportano quella chiamata trasmette la voce dello studente a un servizio remoto.

Il piano estende lo stesso canale alla trascrizione orale dell'esame di cittadinanza e a O3,
ma la correzione della frase del README appartiene a **F0**, non alla fase che estende l'uso:
la frase è sbagliata adesso, e chi legge il README adesso è chi la sta credendo.
