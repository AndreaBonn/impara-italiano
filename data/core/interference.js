/* ============================================================
   Fałszywi przyjaciele i interferencja z językiem ucznia.

   Warstwa neutralna: włoskie słowo, zdanie z nim i DEKLARACJA, dla których
   języków ta pułapka w ogóle istnieje. „Firma" myli Polaka, Niemca i
   Francuza, ale nie Hiszpana; „burro" myli Hiszpana i Francuza, a Polakowi
   nie mówi nic.

   Dlatego to jedyna kategoria w kursie, która NIE ma być symetryczna, i
   dlatego pole `for` jest tutaj, a nie w nakładce: parity.mjs sprawdza
   obecność wpisu w nakładce WŁAŚNIE względem tej listy, a nie względem
   polskiego. Wyłączenie bramki na tej kategorii nie wchodziło w grę —
   krótsza lista wygląda jak lista.

   Plik leży w data/core/, bo extract_strings.mjs chodzi tylko tutaj: poza
   tym katalogiem ćwiczenie rodzi się nieme.

   PLIK GENEROWANY z jednej tabeli źródłowej — patrz historia gita.
   ============================================================ */
window.INTERFERENCE = [
  { id: "firma", it: "la firma", ex: "Manca la sua firma in fondo al modulo.", for: ["pl", "de", "fr"] },
  { id: "camera", it: "la camera", ex: "La camera ha una finestra sul cortile.", for: ["pl", "en", "de", "fr", "es"] },
  { id: "confetti", it: "i confetti", ex: "Agli sposi si regalano i confetti bianchi.", for: ["pl", "en", "de", "fr", "es"] },
  { id: "tappeto", it: "il tappeto", ex: "Il tappeto del salotto è troppo grande.", for: ["pl", "de"] },
  { id: "divano", it: "il divano", ex: "Dormo sul divano quando viene mia sorella.", for: ["pl"] },
  { id: "droga", it: "la droga", ex: "La droga è vietata anche in piccole quantità.", for: ["pl"] },
  { id: "panna", it: "la panna", ex: "Vuole il caffè con la panna?", for: ["pl"] },
  { id: "lato", it: "il lato", ex: "Scrivi il tuo nome sul lato destro del foglio.", for: ["pl"] },
  { id: "rana", it: "la rana", ex: "Una rana è saltata nello stagno.", for: ["pl"] },
  { id: "targa", it: "la targa", ex: "Non ho letto la targa della macchina.", for: ["pl"] },
  { id: "lettera", it: "la lettera", ex: "Ho scritto una lettera a mia nonna.", for: ["pl"] },
  { id: "eventualmente", it: "eventualmente", ex: "Eventualmente possiamo vederci domani.", for: ["en", "pl"] },
  { id: "attualmente", it: "attualmente", ex: "Attualmente lavoro in una scuola.", for: ["en", "fr"] },
  { id: "libreria", it: "la libreria", ex: "Ho comprato il libro in una libreria del centro.", for: ["en", "de", "pl", "fr"] },
  { id: "fattoria", it: "la fattoria", ex: "I nonni hanno una fattoria in campagna.", for: ["en"] },
  { id: "parenti", it: "i parenti", ex: "A Natale arrivano tutti i parenti.", for: ["en", "fr"] },
  { id: "educazione", it: "l'educazione", ex: "Non ha nessuna educazione a tavola.", for: ["en", "pl"] },
  { id: "morbido", it: "morbido", ex: "Questo cuscino è troppo morbido.", for: ["en", "de", "es"] },
  { id: "annoiare", it: "annoiare", ex: "Questo film mi annoia da morire.", for: ["en", "fr"] },
  { id: "pretendere", it: "pretendere", ex: "Pretende di essere pagato subito.", for: ["en", "fr"] },
  { id: "magazzino", it: "il magazzino", ex: "Il magazzino è dietro il negozio.", for: ["en", "fr", "de"] },
  { id: "argomento", it: "l'argomento", ex: "Cambiamo argomento, per favore.", for: ["en"] },
  { id: "casuale", it: "casuale", ex: "È stato un incontro del tutto casuale.", for: ["en", "fr"] },
  { id: "delusione", it: "la delusione", ex: "Che delusione, non è venuto nessuno.", for: ["en", "de", "es"] },
  { id: "burro", it: "il burro", ex: "Metti un po' di burro sul pane.", for: ["es", "fr"] },
  { id: "salire", it: "salire", ex: "Saliamo al terzo piano a piedi.", for: ["es", "fr"] },
  { id: "subire", it: "subire", ex: "Ha subito un'operazione al ginocchio.", for: ["es"] },
  { id: "imbarazzata", it: "imbarazzata", ex: "Era imbarazzata e non sapeva dove guardare.", for: ["es"] },
  { id: "aceto", it: "l'aceto", ex: "Sull'insalata metto olio e aceto.", for: ["es"] },
  { id: "guardare", it: "guardare", ex: "Guarda che bel tramonto.", for: ["es"] },
  { id: "largo", it: "largo", ex: "Il fiume qui è molto largo.", for: ["es"] },
  { id: "prima", it: "prima", ex: "Prima mangiamo, poi usciamo.", for: ["es"] },
  { id: "caldo", it: "caldo", ex: "Fa troppo caldo per uscire adesso.", for: ["es"] },
  { id: "topo", it: "il topo", ex: "C'è un topo in cantina.", for: ["es"] },
  { id: "officina", it: "l'officina", ex: "Ho lasciato la macchina in officina.", for: ["es"] },
  { id: "vaso", it: "il vaso", ex: "Ho messo i fiori nel vaso.", for: ["es"] },
  { id: "cantina", it: "la cantina", ex: "Il vino è giù in cantina.", for: ["fr", "de", "es"] },
  { id: "fermare", it: "fermare", ex: "La polizia ci ha fermato al confine.", for: ["fr"] },
  { id: "mostra", it: "la mostra", ex: "Andiamo alla mostra di fotografia?", for: ["fr"] },
  { id: "bugia", it: "la bugia", ex: "Ha detto una bugia per non farmi arrabbiare.", for: ["fr"] },
  { id: "sale", it: "il sale", ex: "Passami il sale, per favore.", for: ["fr", "de"] },
  { id: "brutto", it: "brutto", ex: "È un brutto film, non guardarlo.", for: ["fr", "de"] },
  { id: "bravo", it: "bravo", ex: "Sei stato bravo all'esame.", for: ["de", "pl"] },
  { id: "chef", it: "lo chef", ex: "Lo chef è uscito dalla cucina a salutare.", for: ["de", "pl"] },
  { id: "regalo", it: "il regalo", ex: "Ho comprato un regalo per il suo compleanno.", for: ["de", "pl"] },
  { id: "termine", it: "il termine", ex: "Il termine per l'iscrizione è venerdì.", for: ["de", "fr"] },
  { id: "firmare", it: "firmare", ex: "Deve firmare qui in basso.", for: ["pl", "de"] },
  { id: "pasta", it: "la pasta", ex: "Stasera facciamo la pasta al pomodoro.", for: ["pl", "de", "es"] },
  { id: "gabinetto", it: "il gabinetto", ex: "Il gabinetto è in fondo al corridoio.", for: ["pl", "fr"] },
  { id: "stanza", it: "la stanza", ex: "La mia stanza dà sul giardino.", for: ["pl"] },
  { id: "sensibile", it: "sensibile", ex: "È una persona molto sensibile.", for: ["en", "fr"] },
  { id: "confrontare", it: "confrontare", ex: "Confronta i due prezzi prima di comprare.", for: ["en"] },
  { id: "attendere", it: "attendere", ex: "Attenda un momento, per favore.", for: ["en"] },
  { id: "estate", it: "l'estate", ex: "In estate andiamo sempre al mare.", for: ["en", "de"] },
  { id: "terrificante", it: "terrificante", ex: "Il finale del film è terrificante.", for: ["en"] },
  { id: "fabbrica", it: "la fabbrica", ex: "Lavora in una fabbrica di mobili.", for: ["en", "de"] },
  { id: "crudo", it: "crudo", ex: "Il prosciutto crudo è più dolce di quello cotto.", for: ["en"] },
  { id: "carta", it: "la carta", ex: "Mi serve un foglio di carta bianca.", for: ["es", "de"] },
  { id: "gamba", it: "la gamba", ex: "Mi fa male la gamba destra.", for: ["es"] },
  { id: "seta", it: "la seta", ex: "Questa camicia è di seta.", for: ["es"] },
  { id: "sembrare", it: "sembrare", ex: "Sembra più giovane di quello che è.", for: ["es"] },
  { id: "spalla", it: "la spalla", ex: "Porta la borsa sulla spalla.", for: ["es"] },
  { id: "cura", it: "la cura", ex: "Ha bisogno di cure e di riposo.", for: ["es"] },
  { id: "cartella", it: "la cartella", ex: "Ho messo i documenti nella cartella.", for: ["es"] },
  { id: "pronto", it: "pronto", ex: "Il pranzo è pronto.", for: ["es"] },
  { id: "ancora", it: "ancora", ex: "Non è ancora arrivato.", for: ["es"] },
  { id: "tenda", it: "la tenda", ex: "Chiudi la tenda, entra troppa luce.", for: ["es"] },
  { id: "esito", it: "l'esito", ex: "Aspettiamo l'esito degli esami.", for: ["es"] },
  { id: "nodo", it: "il nodo", ex: "Non riesco a sciogliere questo nodo.", for: ["es"] },
  { id: "concorso", it: "il concorso", ex: "Ha vinto un concorso per lavorare in comune.", for: ["de"] },
  { id: "nota", it: "la nota", ex: "Ho preso una nota sul quaderno.", for: ["de"] },
  { id: "limone", it: "il limone", ex: "Metti un po' di limone sul pesce.", for: ["de"] },
  { id: "prospetto", it: "il prospetto", ex: "Guarda il prospetto con tutti i prezzi.", for: ["de"] },
  { id: "vento", it: "il vento", ex: "Oggi tira un vento freddo.", for: ["pl"] },
  { id: "piano", it: "il piano", ex: "Abito al secondo piano.", for: ["pl", "de"] },
  { id: "morto", it: "morto", ex: "Il telefono è morto, non ha più batteria.", for: ["pl"] },
  { id: "cara", it: "cara", ex: "Cara Anna, ti scrivo da Roma.", for: ["pl"] },
  { id: "colazione", it: "la colazione", ex: "A colazione bevo solo un caffè.", for: ["fr", "de"] },
  { id: "pensione", it: "la pensione", ex: "Andiamo in pensione al mare.", for: ["fr"] },
  { id: "rumore", it: "il rumore", ex: "C'è troppo rumore per parlare.", for: ["en", "fr"] },
  { id: "lussuria", it: "la lussuria", ex: "Nel poema la lussuria è il primo peccato.", for: ["en", "fr"] },
  { id: "noioso", it: "noioso", ex: "È stato un viaggio lungo e noioso.", for: ["en", "fr"] },
  { id: "ritenere", it: "ritenere", ex: "Ritengo che sia una buona idea.", for: ["en"] }
];
