# Informativa privacy

Ultimo aggiornamento: 10 settembre 2026.

Questo è il testo sorgente dell'informativa. Le versioni che lo studente legge dentro il
corso, in cinque lingue, sono le chiavi `privacy.*` in `data/i18n/ui-<lang>.js` e traducono
questo documento. Ogni affermazione qui dentro ha una riga corrispondente in
`specs/004-lancio-pubblico/riscontri.md`, con il comando che l'ha verificata sul codice.

## Chi tratta i dati

Il titolare del trattamento è Andrea Bonacci. Per qualsiasi domanda su questa informativa
o sui dati: **andreabonacci95@protonmail.com**.

## In breve

Impara l'Italiano non ha account e non ha un server. Non ti chiede il nome. I tuoi progressi
restano nel browser che stai usando, e nessuno oltre a te può leggerli: non usiamo cookie,
non abbiamo installato nessun sistema di statistiche, e la pagina non contatta nessun altro
sito finché non sei tu a chiederlo.

Ci sono tre cose che escono comunque dal tuo dispositivo, e questa informativa esiste
soprattutto per dirtele: la tua voce, quando usi gli esercizi di pronuncia; le tue risposte
scritte, ma soltanto se accendi tu il controllo con un modello linguistico; e il tuo
indirizzo IP, che vede chi ospita il sito.

## Cosa resta sul tuo dispositivo

Il corso salva nella memoria locale del browser (`localStorage`, sotto la chiave
`linguai.italiano.v2`) tutto ciò che serve a farti riprendere da dove avevi lasciato:

- le lezioni completate, il punteggio e la serie di giorni consecutivi;
- le schede di ripetizione e le loro scadenze;
- il quaderno degli errori, cioè quali esercizi hai sbagliato e su quale argomento;
- i tuoi testi scritti negli esercizi di produzione;
- le impostazioni, compresa la lingua delle spiegazioni e le risposte che hai dato sul
  riconoscimento vocale e sul controllo con un modello.

Questi dati non vengono inviati da nessuna parte. Non esiste un posto dove potremmo andare a
leggerli, perché non esiste un server del corso.

Se hai attivato il controllo con un modello linguistico, le chiavi che hai incollato stanno
anch'esse nella memoria locale, ma in un contenitore separato (`linguai.llm.v1`) e non
dentro il profilo. La separazione ha un motivo pratico: `Esporta` scarica il profilo, e un
file che ti invitiamo a conservare e a spostare fra dispositivi non deve contenere una chiave
con cui si spendono i tuoi soldi. Per lo stesso motivo `Azzera` cancella anche le chiavi.

Puoi portarli via o cancellarli quando vuoi, da **Impostazioni**: `Esporta` scarica un file
con tutto il tuo profilo, `Importa` lo rimette su un altro dispositivo, `Azzera` cancella
tutto. Cancellare i dati di navigazione del browser ha lo stesso effetto di `Azzera`, e non
è recuperabile: se ci tieni ai tuoi progressi, esportali ogni tanto.

## La tua voce negli esercizi di pronuncia

Questa è la parte che conta e non vogliamo che ti arrivi di sorpresa.

Negli esercizi in cui parli e il corso controlla quello che hai detto, usiamo il
riconoscimento vocale del tuo browser. Nei browser che lo offrono (Chrome, Edge, Safari) non
è una funzione che gira sul tuo dispositivo: **la registrazione della tua voce viene inviata
ai server del produttore del browser**, che la trasformano in testo e restituiscono il testo
al corso. Non passa da noi, non la riceviamo e non la conserviamo, ma esce comunque dal tuo
dispositivo, ed è giusto che tu lo sappia prima e non dopo.

Per questo il corso te lo chiede prima della prima volta, e senza il tuo consenso l'esercizio
non registra nulla. Il consenso vale per tutti gli esercizi di questo tipo e resta salvato
nelle impostazioni. Puoi ritirarlo quando vuoi da **Impostazioni**, alla voce del
riconoscimento vocale: da quel momento il corso torna a chiedertelo prima di registrare.

Che cosa ne facciano i produttori dei browser dopo averla ricevuta non dipende da noi, e non
possiamo verificarlo. La risposta sta nell'informativa del browser che usi.

Diverso è l'esercizio di ripetizione, in cui ti riascolti: lì la registrazione resta dentro
la pagina, non viene salvata da nessuna parte e sparisce quando chiudi la scheda o passi alla
frase successiva.

## Le tue risposte, se accendi il controllo con un modello

Questa parte del corso è spenta finché non sei tu ad accenderla, e resta spenta per chi non
fa niente.

Il corso confronta le tue risposte con quelle attese lettera per lettera, e questo metodo
sbaglia in una direzione sola: rifiuta frasi corrette ma scritte diversamente da come le
attendeva. Se vuoi, puoi dargli un secondo parere. In **Impostazioni** c'è una sezione dove
incollare la chiave di un fornitore di modelli linguistici che già usi: Google Gemini, Groq,
OpenAI o Anthropic. Da quel momento, e soltanto dopo che il confronto sul tuo dispositivo ha
già rifiutato la risposta, il corso manda al fornitore che hai scelto due frasi, la tua e
quella attesa, e ne riceve un giudizio.

C'è un secondo posto in cui succede, e lì esce di più. Negli esercizi di produzione scritta
puoi chiedere al modello un parere sul testo che hai composto, e in quel caso esce il testo
intero insieme alla consegna dell'esercizio. Non accade mai da solo: c'è un pulsante, lo premi
tu, e finché non lo premi il tuo tema resta dov'è. Quel parere non è un voto e non tocca né i
tuoi progressi né le tue schede di ripetizione.

E c'è un terzo posto, la simulazione d'esame, dove esce ancora di più e senza che tu prema
niente. Alla fine di una simulazione, **se hai già acceso il controllo con un modello**, il
corso manda al fornitore due cose: il testo che hai scritto nella prova scritta, con la sua
traccia, e quello che hai scritto nella revisione dopo la prova orale, cioè il resoconto di
quello che avevi detto. Vale la pena sapere che cosa sono questi due testi: le tracce
d'esame chiedono del tuo quartiere, del tuo lavoro, di come sei arrivato in Italia, quindi
è probabile che tu ci abbia messo dove abiti e che lavoro fai. **Se preferisci che non
escano, spegni il controllo con un modello in Impostazioni prima di cominciare**: la
simulazione funziona esattamente come prima, il punteggio di ascolto e lettura è lo stesso
e le due produzioni restano con il rilevamento che il corso fa da solo, sul tuo dispositivo.

La tua **voce** non esce mai da qui per questa strada: la registrazione della prova orale
resta nella memoria della pagina e sparisce quando la chiudi. Quello che esce è solo ciò che
hai scritto tu.

E c'è un quarto posto, che è quello dove esce di più: la **conversazione libera**. Lì non
parte una frase, parte tutto quello che hai detto in quella scena, turno dopo turno, e
riparte a ogni turno nuovo, perché il modello ha bisogno del seguito per rispondere. Per
questo ha un consenso **suo**, separato da quello per il controllo delle risposte: chi ha
accettato che una frase venga controllata non ha con ciò accettato di mandare una
conversazione intera, e spegnere uno non spegne l'altro. Lo trovi in Impostazioni, sotto
il primo, e lo togli quando vuoi.

Due cose di quella modalità che è giusto sapere prima di cominciare. La conversazione
**non viene salvata**: vive nella memoria della pagina e sparisce quando la chiudi o
ricarichi, e non entra nel file che scarichi con `Esporta`. E ogni turno è **una richiesta
a pagamento** sul tuo contratto: il contatore dei turni rimasti è sullo schermo dal primo
momento proprio per questo.

Tre cose che è giusto tu sappia prima:

- **la chiave resta su questo dispositivo.** Non passa da noi in nessun momento: viaggia dal
  tuo browser al fornitore e basta. Non finisce nemmeno nel file che scarichi con `Esporta`;
- **le richieste le paghi tu**, con il contratto che hai già con quel fornitore. Noi non
  abbiamo modo di vederle né di contarle;
- **che cosa faccia il fornitore della tua frase dopo averla ricevuta non dipende da noi** e
  non possiamo verificarlo, esattamente come per il riconoscimento vocale. La risposta sta
  nell'informativa del fornitore che hai scelto.

Anche qui il corso ti chiede il consenso, ed è un consenso separato da quello sul
riconoscimento vocale: accettare l'uno non è accettare l'altro, e ritirare l'uno non ritira
l'altro. Lo ritiri quando vuoi da **Impostazioni**, dove puoi anche cancellare tutte le
chiavi insieme. Senza chiave o senza consenso il corso non contatta nessun fornitore e si
comporta esattamente come prima.

## Le copie che il corso tiene per funzionare senza rete

Il corso funziona anche offline. Per riuscirci, il browser conserva una copia dei file del
corso: il codice, i testi delle lezioni e le registrazioni audio dei madrelingua. Sono file
nostri, uguali per tutti, e non contengono niente che ti riguardi. Spariscono quando cancelli
i dati del sito dal browser.

## Chi ospita il sito

Il corso è pubblicato su GitHub Pages. Come qualsiasi sito, chi lo ospita registra le
richieste che riceve, e in quelle richieste c'è il tuo indirizzo IP. È l'unico trattamento di
cui non decidiamo noi, e non possiamo evitarlo: senza qualcuno che consegni le pagine, non
c'è sito. Le condizioni di GitHub descrivono che cosa ne fa.

## Perché possiamo trattare questi dati

I dati salvati nel browser servono a far funzionare il corso che hai aperto, e li produci tu
usandolo: è su questo che si regge il trattamento. Il riconoscimento vocale e il controllo
delle risposte con un modello si reggono invece sul tuo consenso, che è facoltativo, che ti
chiediamo prima e che puoi ritirare. Sono due consensi distinti: puoi darne uno e non l'altro,
e ritirarne uno senza toccare l'altro.

Non facciamo profilazione e non prendiamo decisioni automatiche sul tuo conto. Non passiamo
niente a nessuno: non c'è niente da passare.

## I tuoi diritti

Il regolamento europeo ti dà il diritto di accedere ai tuoi dati, correggerli, cancellarli e
portarli altrove. Qui li eserciti da solo e senza chiedere permesso, perché i dati sono già
in mano tua: `Esporta` è la portabilità, `Azzera` è la cancellazione, la schermata dei
progressi è l'accesso.

Se hai una domanda a cui questa pagina non risponde, scrivi a
**andreabonacci95@protonmail.com**. Se pensi che qualcosa qui non torni, puoi rivolgerti
all'autorità di controllo del tuo paese.

## Se questa informativa cambia

La data in cima dice quando è stata scritta l'ultima volta. Il testo vive nel repository del
progetto insieme al codice che descrive, quindi ogni modifica è pubblica e datata nella
cronologia delle revisioni.
