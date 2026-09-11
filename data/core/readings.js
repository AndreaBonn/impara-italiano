/* ============================================================
   Warstwa neutralna językowo — teksty do czytania i słuchania.

   Wszystko na poziomie zdania jest po włosku i wypowiadane. Nagranie
   powstaje dla KAŻDEGO zdania osobno, a nie dla całego tekstu: dzięki
   temu ten sam plik służy i dyktandu (jedno zdanie, powtarzalne), i
   słuchaniu ciągłemu (Audio2.speakSequence skleja je po kolei). Jedno
   nagranie całości ważyłoby więcej niż wszystkie zdania razem i nie
   dałoby się go użyć do dyktanda.

   PYTANIA SĄ PO WŁOSKU I SIEDZĄ TUTAJ, nie w nakładce. To wyjątek od
   reguły „opts idą do tłumaczenia", świadomy i z tego samego powodu,
   co przy `gender.opts`: sprawdzanie rozumienia tekstu włoskiego po
   polsku jest sprawdzaniem tłumaczenia, nie rozumienia. Skutek uboczny
   jest taki, że dopisanie języka nie kosztuje ani jednego pytania.

   W nakładce zostaje to, czego uczeń nie przeczyta po włosku na tym
   poziomie: tytuł, jedno zdanie wprowadzenia i glosy trudnych słów.
   ============================================================ */
/* APPENDS rather than assigns, and that one word is load-bearing. The
   library adds its long texts to this same list from the level files, and an
   assignment here wipes whatever arrived first: in the browser the order
   happens to protect us (this file is eager, the library is lazy), but every
   script that loads the data in a sandbox is free to pick its own order —
   and one of them did, silently dropping six texts and every check on them. */
LINGUAI.addReadings([

  /* ---------------- A1 ---------------- */
  {
    id: "r-a1-mattina",
    cefr: "A1",
    tag: "g-presente",
    titleIt: "Il caffè si beve in piedi",
    sentences: [
      "In Italia molte persone bevono il caffè in piedi, al banco.",
      "Costa un euro e dura due minuti.",
      "Se ti siedi al tavolino il prezzo cambia, a volte è il doppio.",
      "Non è un errore del bar: il servizio al tavolo costa di più.",
      "Molti turisti si siedono e ordinano un cappuccino alle quattro del pomeriggio.",
      "Per un italiano il cappuccino finisce con la colazione.",
      "Dopo pranzo gli italiani bevono il caffè, mai il cappuccino."
    ],
    glossIt: ["al banco", "dura", "il doppio", "il servizio"],
    lexIt: ["Italia", "persona", "euro", "minuto", "sedersi", "tavolino", "turista", "ordinare", "pranzo"],
    questions: [
      { t: "truefalse", q: "Il caffè al tavolino costa come al banco.", a: 1 },
      { t: "mcq", q: "Quanto dura un caffè al banco?", opts: ["Due minuti", "Mezz'ora", "Un'ora"], a: 0 },
      { t: "mcq", q: "Quando bevono il cappuccino gli italiani?", opts: ["Dopo pranzo", "A colazione", "La sera"], a: 1 }
    ]
  },
  {
    id: "r-a1-mercato",
    cefr: "A1",
    tag: "g-articolo-det",
    titleIt: "Al mercato non si tocca",
    sentences: [
      "Al mercato il cliente non tocca la frutta.",
      "Il fruttivendolo sceglie i pezzi e prepara il sacchetto.",
      "Se prendi una pesca da solo, il venditore non è contento.",
      "Non è antipatia: la frutta matura è delicata e le mani rovinano tutto.",
      "Il turista tocca, guarda e sceglie, come al supermercato.",
      "Al mercato invece parla, chiede consiglio e aspetta.",
      "La differenza è piccola, ma al mercato è subito evidente."
    ],
    glossIt: ["il cliente", "il sacchetto", "matura", "rovinano"],
    lexIt: ["toccare", "fruttivendolo", "scegliere", "preparare", "pèsca", "venditore", "contento", "antipatia", "delicato", "differenza", "piccolo", "evidente"],
    questions: [
      { t: "truefalse", q: "Al mercato il cliente sceglie la frutta con le mani.", a: 1 },
      { t: "mcq", q: "Chi prepara il sacchetto?", opts: ["Il cliente", "Il fruttivendolo", "Il turista"], a: 1 },
      { t: "mcq", q: "Perché non si tocca la frutta?", opts: ["Perché è delicata", "Perché è sporca", "Perché è cara"], a: 0 }
    ]
  },

  /* ---------------- A2 ---------------- */
  {
    id: "r-a2-treno",
    cefr: "A2",
    tag: "g-passato-prossimo",
    titleIt: "Per motivi tecnici",
    sentences: [
      "Ieri il treno per Bologna è partito con quaranta minuti di ritardo.",
      "L'altoparlante ha detto solo due parole: per motivi tecnici.",
      "Nessuno ha protestato e nessuno ha chiesto spiegazioni.",
      "Un ragazzo francese vicino a me era furioso.",
      "Gli altri passeggeri hanno aperto il giornale e hanno aspettato.",
      "Non è rassegnazione: per motivi tecnici non vuole dire niente e tutti lo sanno.",
      "Chiedere spiegazioni a chi non le ha è solo un modo per arrabbiarsi due volte."
    ],
    glossIt: ["l'altoparlante", "ha protestato", "furioso", "rassegnazione"],
    lexIt: ["Bologna", "altoparlante", "parola", "spiegazione", "ragazzo", "francese", "passeggero", "modo", "arrabbiarsi"],
    questions: [
      { t: "mcq", q: "Quanto ritardo ha fatto il treno?", opts: ["Dieci minuti", "Quaranta minuti", "Due ore"], a: 1 },
      { t: "truefalse", q: "I passeggeri italiani hanno chiesto spiegazioni.", a: 1 },
      { t: "mcq", q: "Secondo il testo, perché nessuno protesta?", opts: ["Perché ha paura", "Perché la spiegazione non dice niente", "Perché non ha capito"], a: 1 }
    ]
  },
  {
    id: "r-a2-casa",
    cefr: "A2",
    tag: "g-imperfetto",
    titleIt: "Il pranzo della domenica",
    sentences: [
      "Da bambino il pranzo della domenica dai nonni non era una festa: era un obbligo.",
      "Cominciavamo all'una e finivamo alle quattro.",
      "C'erano sempre troppe portate e nessuno poteva rifiutare.",
      "Mia nonna considerava il piatto vuoto un complimento.",
      "Se lasciavo qualcosa, chiedeva subito se stavo male.",
      "Da bambino volevo solo uscire con i miei amici.",
      "Adesso quei pranzi non ci sono più e mi mancano."
    ],
    glossIt: ["un obbligo", "le portate", "rifiutare", "mi mancano"],
    lexIt: ["nonna", "considerare", "complimento"],
    questions: [
      { t: "truefalse", q: "Da bambino aspettava il pranzo della domenica con piacere.", a: 1 },
      { t: "mcq", q: "Che cosa significava per la nonna un piatto vuoto?", opts: ["Un complimento", "Un problema", "Una scortesia"], a: 0 },
      { t: "mcq", q: "Come finisce il testo?", opts: ["Con un rimpianto", "Con una lite", "Con una ricetta"], a: 0 }
    ]
  },
  {
    id: "r-a2-medico",
    cefr: "A2",
    tag: "g-condizionale",
    titleIt: "Prima la farmacia",
    sentences: [
      "In Italia molte persone vanno prima in farmacia e poi dal medico.",
      "Il farmacista ascolta, guarda la gola e consiglia qualcosa.",
      "Non è un medico e non può fare diagnosi.",
      "Però conosce i clienti e sa quando dovrebbe mandarli dal dottore.",
      "Per un mal di gola di due giorni la farmacia basta.",
      "Per la febbre alta di una settimana il farmacista stesso direbbe di andare dal medico.",
      "Chi va subito al pronto soccorso aspetta sei ore per sentire la stessa cosa."
    ],
    glossIt: ["il farmacista", "la diagnosi", "basta", "il pronto soccorso"],
    lexIt: ["mandare", "dottore"],
    questions: [
      { t: "mcq", q: "Dove vanno prima molti italiani?", opts: ["Dal medico", "In farmacia", "Al pronto soccorso"], a: 1 },
      { t: "truefalse", q: "Il farmacista può fare una diagnosi.", a: 1 },
      { t: "mcq", q: "Che cosa direbbe il farmacista per una febbre alta di una settimana?", opts: ["Di riposare", "Di andare dal medico", "Di aspettare"], a: 1 }
    ]
  },

  /* ---------------- B1 ---------------- */
  {
    id: "r-b1-affitto",
    cefr: "B1",
    tag: "g-congiuntivo-pres",
    titleIt: "Cercare casa a Milano",
    sentences: [
      "Cercare un appartamento a Milano non è semplice, soprattutto in settembre.",
      "Molti proprietari vogliono che l'inquilino abbia un contratto a tempo indeterminato.",
      "Sara ha visitato sei appartamenti in due settimane.",
      "Il primo era luminoso ma costava troppo; il secondo era buio e umido.",
      "Alla fine ha trovato un bilocale in zona Navigli, al terzo piano senza ascensore.",
      "Il proprietario le ha chiesto tre mensilità di deposito.",
      "Sara ha firmato lo stesso, perché temeva di non trovare niente di meglio.",
      "Adesso paga più di quanto vorrebbe, ma almeno abita vicino al lavoro."
    ],
    glossIt: ["inquilino", "a tempo indeterminato", "bilocale", "mensilità", "temeva"],
    lexIt: ["appartamento", "Milano", "settembre", "proprietario", "Sara", "visitare", "buio", "umido", "zona", "Navigli", "ascensore", "deposito"],
    questions: [
      { t: "mcq", q: "Quanti appartamenti ha visitato Sara?", opts: ["Due", "Sei", "Dieci"], a: 1 },
      { t: "truefalse", q: "Il bilocale che ha scelto ha l'ascensore.", a: 1 },
      { t: "mcq", q: "Perché ha firmato lo stesso?", opts: ["Perché il prezzo era basso", "Perché temeva di non trovare di meglio", "Perché il proprietario era un amico"], a: 1 }
    ]
  },
  {
    id: "r-b1-lavoro",
    cefr: "B1",
    tag: "g-registri",
    titleIt: "Un colloquio andato storto",
    sentences: [
      "Marta si era preparata per giorni al colloquio.",
      "Aveva studiato il sito dell'azienda e provato le risposte ad alta voce.",
      "Il giorno del colloquio, però, il selezionatore le ha fatto domande su un progetto che non conosceva.",
      "Lei ha ammesso di non saperlo, invece di inventare una risposta.",
      "Alla fine dell'incontro era convinta di aver perso l'occasione.",
      "Due settimane dopo l'hanno richiamata: avevano apprezzato proprio la sua sincerità.",
      "Le hanno offerto un posto diverso da quello per cui si era candidata."
    ],
    glossIt: ["selezionatore", "ammesso", "sincerità", "candidata"],
    lexIt: ["Marta", "preparato", "sito", "azienda", "risposta", "voce", "inventare", "incontro", "occasione", "richiamare", "apprezzare", "proprio"],
    questions: [
      { t: "truefalse", q: "Marta non si era preparata al colloquio.", a: 1 },
      { t: "mcq", q: "Che cosa ha fatto quando non sapeva rispondere?", opts: ["Ha inventato una risposta", "Ha ammesso di non saperlo", "Ha cambiato argomento"], a: 1 },
      { t: "mcq", q: "Che cosa hanno apprezzato in azienda?", opts: ["La sua esperienza", "La sua sincerità", "Il suo curriculum"], a: 1 }
    ]
  },
  {
    id: "r-b1-giornale",
    cefr: "B1",
    tag: "g-connettivi",
    titleIt: "Meno auto in centro",
    sentences: [
      "Da lunedì il centro della città sarà chiuso alle auto private dalle sette alle venti.",
      "Il provvedimento riguarda circa quaranta strade.",
      "Secondo il Comune, l'obiettivo è ridurre l'inquinamento e rendere il centro più vivibile.",
      "I commercianti, invece, temono un calo delle vendite.",
      "Alcuni residenti sono favorevoli, altri lamentano la mancanza di parcheggi.",
      "Il provvedimento durerà sei mesi, poi verrà valutato.",
      "Nel frattempo il Comune ha promesso più corse degli autobus."
    ],
    glossIt: ["provvedimento", "inquinamento", "calo", "lamentano", "corse"],
    lexIt: ["auto", "privato", "circa", "obiettivo", "rendere", "vivibile", "commerciante", "vendita", "residente", "favorevole", "mancanza", "parcheggio", "durare", "promettere"],
    questions: [
      { t: "mcq", q: "Chi teme un calo delle vendite?", opts: ["I residenti", "I commercianti", "Il Comune"], a: 1 },
      { t: "truefalse", q: "Il provvedimento è definitivo.", a: 1 },
      { t: "mcq", q: "Che cosa ha promesso il Comune?", opts: ["Più parcheggi", "Più corse degli autobus", "Meno tasse"], a: 1 }
    ]
  },

  /* ---------------- B2 ---------------- */
  {
    id: "r-b2-lavoro-remoto",
    cefr: "B2",
    tag: "g-periodo-ipotetico",
    titleIt: "Se si potesse lavorare ovunque",
    sentences: [
      "Se il lavoro da remoto fosse davvero possibile per tutti, molte città piccole si ripopolerebbero.",
      "È quello che sostengono alcuni studi recenti, con qualche cautela.",
      "In realtà solo una parte delle professioni può essere svolta a distanza.",
      "Chi lavora nella produzione, nella sanità o nei trasporti deve essere presente.",
      "Inoltre non tutte le case sono adatte: servono spazio, silenzio e una connessione decente.",
      "Le aziende, dal canto loro, faticano a valutare chi non vedono mai.",
      "Il risultato è un modello ibrido, che nessuno aveva progettato ma che quasi tutti hanno adottato."
    ],
    glossIt: ["si ripopolerebbero", "sostengono", "cautela", "faticano", "ibrido"],
    lexIt: ["remoto", "davvero", "recente", "realtà", "professione", "svolta", "distanza", "produzione", "sanità", "trasporto", "presente", "adatto", "servire", "spazio", "silenzio", "connessione", "decente", "canto", "modello", "progettare", "adottare"],
    questions: [
      { t: "truefalse", q: "Secondo il testo, tutte le professioni possono essere svolte a distanza.", a: 1 },
      { t: "mcq", q: "Che cosa serve in casa per lavorare da remoto?", opts: ["Spazio, silenzio e connessione", "Un ufficio separato per legge", "Un contratto speciale"], a: 0 },
      { t: "mcq", q: "Com'è nato il modello ibrido?", opts: ["Progettato dalle aziende", "Imposto per legge", "Adottato senza essere progettato"], a: 2 }
    ]
  },
  {
    id: "r-b2-cibo",
    cefr: "B2",
    tag: "g-passivo",
    titleIt: "La carbonara che non esisteva",
    sentences: [
      "La carbonara viene considerata un piatto della tradizione romana antichissima.",
      "In realtà le prime ricette scritte risalgono al dopoguerra.",
      "Il piatto sarebbe nato dall'incontro tra le uova in polvere degli americani e la cucina povera romana.",
      "Nelle versioni più vecchie veniva usata la pancetta, non il guanciale.",
      "La panna, oggi considerata un'eresia, compariva in molti ricettari degli anni Sessanta.",
      "Questo non rende la carbonara meno romana: le tradizioni si costruiscono, non si trovano.",
      "Chi difende la ricetta originale difende, di solito, la versione imparata da sua nonna."
    ],
    glossIt: ["risalgono", "guanciale", "eresia", "ricettari", "si costruiscono"],
    lexIt: ["carbonara", "antico", "dopoguerra", "uovo", "polvere", "americano", "usare", "pancetta", "panna", "oggi", "comparire", "difendere", "imparare"],
    questions: [
      { t: "truefalse", q: "Le prime ricette scritte della carbonara sono medievali.", a: 1 },
      { t: "mcq", q: "Che cosa veniva usato nelle versioni più vecchie?", opts: ["Il guanciale", "La pancetta", "Il prosciutto"], a: 1 },
      { t: "mcq", q: "Qual è la conclusione del testo?", opts: ["La carbonara non è romana", "Le tradizioni si costruiscono", "La panna è obbligatoria"], a: 1 }
    ]
  },

  /* ---------------- C1 ---------------- */
  {
    id: "r-c1-burocrazia",
    cefr: "C1",
    tag: "g-registri",
    titleIt: "Si prega di allegare",
    sentences: [
      "La lingua degli uffici pubblici italiani ha una caratteristica riconoscibile: evita accuratamente di dire chi fa cosa.",
      "Si prega di allegare la documentazione richiesta: nessuno prega, e non si sa chi debba allegare.",
      "Il cittadino, dal canto suo, viene definito istante, richiedente o interessato, mai persona.",
      "Questa distanza non è casuale né innocente.",
      "Un'amministrazione che non nomina il responsabile di un atto rende più difficile contestarlo.",
      "Da vent'anni esistono manuali di semplificazione del linguaggio amministrativo.",
      "Vengono citati spesso e applicati raramente, il che è a suo modo una risposta."
    ],
    glossIt: ["allegare", "istante", "casuale", "contestarlo", "semplificazione"],
    lexIt: ["lingua", "ufficio", "caratteristica", "riconoscibile", "accuratamente", "documentazione", "richiesta", "cittadino", "definire", "interessato", "innocente", "amministrazione", "nomina", "atto", "esistere", "manuale", "linguaggio", "amministrativo", "citare", "applicare"],
    questions: [
      { t: "mcq", q: "Qual è la caratteristica del linguaggio amministrativo descritta nel testo?", opts: ["È troppo semplice", "Evita di dire chi fa cosa", "Usa parole straniere"], a: 1 },
      { t: "truefalse", q: "Secondo il testo, questa distanza è casuale.", a: 1 },
      { t: "mcq", q: "Che cosa succede ai manuali di semplificazione?", opts: ["Sono applicati sempre", "Sono citati spesso e applicati raramente", "Non esistono"], a: 1 }
    ]
  },

  /* ---------------- C2 ---------------- */
  {
    id: "r-c2-ironia",
    cefr: "C2",
    tag: "g-registri",
    titleIt: "Ma no, figurati",
    sentences: [
      "L'ironia italiana raramente annuncia sé stessa.",
      "Non c'è un tono di voce riservato allo scherzo, come accade in altre lingue.",
      "Una frase come ma no, figurati può significare non preoccuparti oppure il suo esatto contrario.",
      "La differenza sta nel contesto, nella pausa e in chi la dice.",
      "Lo straniero che impara solo il significato letterale finisce per rispondere seriamente a una presa in giro.",
      "Peggio ancora, rischia di prendere per offesa un'espressione affettuosa.",
      "Non esiste una regola: esiste l'abitudine, e si acquista sbagliando in pubblico un certo numero di volte."
    ],
    glossIt: ["figurati", "presa in giro", "affettuosa", "si acquista"],
    lexIt: ["ironia", "annunciare", "riservato", "accadere", "frase", "significare", "preoccuparsi", "oppure", "esatto", "contrario", "contesto", "pausa", "straniero", "significato", "letterale", "seriamente", "offesa", "espressione", "abitudine"],
    questions: [
      { t: "truefalse", q: "In italiano esiste un tono di voce riservato allo scherzo.", a: 1 },
      { t: "mcq", q: "Da che cosa dipende il significato di „ma no, figurati”?", opts: ["Dalla grammatica", "Dal contesto e da chi la dice", "Dalla regione"], a: 1 },
      { t: "mcq", q: "Secondo il testo, come si impara l'ironia?", opts: ["Studiando le regole", "Sbagliando in pubblico", "Leggendo i giornali"], a: 1 }
    ]
  },

  /* ══════════════ PIERWSZY SZCZEBEL BIBLIOTEKI (A2-C1) ══════════════

     Każdy tekst stoi na JEDNEJ obserwacji, którą da się sprawdzić: co jest
     napisane na drzwiach apteki, ile procent dostała republika, dlaczego
     dom za euro nie kosztuje euro. Tekst o „pięknie włoskiego stylu życia"
     nie uczy niczego, czego uczeń nie mógłby zmyślić sam.

     Fakty są tu treścią, więc obowiązuje ta sama zasada, co przy danych
     w interfejsie: liczba, data i przepis wchodzą tylko wtedy, gdy da się
     je wskazać. Tam, gdzie nie byłem pewien wysokości mandatu, zdanie mówi
     „dużo wyższa" zamiast podawać kwotę — nieprawdziwa cyfra w kursie
     wraca potem jako zdanie wypowiedziane przez ucznia przy okienku.
     ═════════════════════════════════════════════════════════════════ */

  {
    id: "r-a2-scontrino",
    cefr: "A2",
    tag: "g-pron-diretti",
    titleIt: "Quel foglietto sul bancone",
    sentences: [
      "In Italia il negoziante deve rilasciare lo scontrino, che oggi si chiama documento commerciale.",
      "Dal 2020 quasi tutte le casse lo mandano da sole all'Agenzia delle Entrate.",
      "Al bar lo trovi sul bancone anche quando non lo chiedi.",
      "Molti lo lasciano lì accanto alla tazzina, e il barista lo butta.",
      "Serve però in due casi concreti: per cambiare un prodotto e per la garanzia.",
      "Senza quel pezzo di carta il negozio non è obbligato a sostituire niente.",
      "Chi paga con la carta riceve due foglietti diversi.",
      "Uno è lo scontrino, l'altro è la ricevuta del pagamento: solo il primo vale come prova dell'acquisto."
    ],
    glossIt: ["rilasciare", "il bancone", "la garanzia", "sostituire", "la prova dell'acquisto"],
    lexIt: ["negozio", "negoziante", "barista", "agenzia", "scontrino", "documento", "commerciale", "cassa", "tazzina", "buttare", "concreto", "prodotto", "obbligato", "foglietto", "ricevuta", "pagamento"],
    questions: [
      { t: "truefalse", q: "Lo scontrino serve solo al negoziante.", a: 1 },
      { t: "mcq", q: "In quali casi serve conservare lo scontrino?", opts: ["Per cambiare un prodotto e per la garanzia", "Per entrare nel negozio", "Per pagare con la carta"], a: 0 },
      { t: "mcq", q: "Che cosa riceve chi paga con la carta?", opts: ["Solo la ricevuta", "Due foglietti diversi", "Niente"], a: 1 },
      { t: "truefalse", q: "La ricevuta del pagamento vale come prova dell'acquisto.", a: 1 }
    ]
  },
  {
    id: "r-a2-piano-terra",
    cefr: "A2",
    tag: "g-preposizioni",
    titleIt: "Il primo piano non è il primo",
    sentences: [
      "In ascensore il piano terra si riconosce da una lettera o da uno zero, mai dal numero uno.",
      "Il primo piano è quello sopra la strada, non quello dove entri.",
      "Chi arriva dagli Stati Uniti sale quasi sempre un piano di troppo.",
      "Negli edifici vecchi c'è anche il mezzanino, tra il piano terra e il primo.",
      "In ascensore ha un pulsante suo, e non conta come piano.",
      "Poi ci sono i palazzi con il piano rialzato, che sta mezzo piano più su.",
      "Quando qualcuno ti dà un indirizzo al secondo piano, conviene chiedere se c'è l'ascensore.",
      "Nei centri storici molti edifici non ce l'hanno, e i soffitti sono altissimi."
    ],
    glossIt: ["il pulsante", "il mezzanino", "il piano rialzato", "conviene"],
    lexIt: ["ascensore", "riconoscere", "lettera", "unito", "vecchio", "piano", "terra", "strada", "entrare", "edificio", "palazzo", "indirizzo", "storico", "soffitto"],
    questions: [
      { t: "mcq", q: "Come si chiama di solito il pulsante del piano terra?", opts: ["T oppure zero", "Uno", "M"], a: 0 },
      { t: "truefalse", q: "Il mezzanino conta come un piano normale.", a: 1 },
      { t: "mcq", q: "Perché conviene chiedere se c'è l'ascensore?", opts: ["Perché nei centri storici spesso non c'è", "Perché costa", "Perché è vietato"], a: 0 }
    ]
  },
  {
    id: "r-a2-farmacia-turno",
    cefr: "A2",
    tag: "g-ci-ne",
    titleIt: "La farmacia di turno",
    sentences: [
      "Le farmacie italiane chiudono la sera e la domenica, ma non tutte insieme.",
      "A turno una resta aperta, e il suo indirizzo è appeso alla porta delle altre.",
      "Se ne hai bisogno di notte, cerchi quel foglio sulla saracinesca.",
      "Oggi c'è anche il sito della Asl, ma il foglio è rimasto.",
      "In città il turno cambia ogni settimana.",
      "In un paese piccolo invece può toccare a una farmacia del comune vicino.",
      "Di notte spesso non si entra: si parla attraverso uno sportellino e si paga lì.",
      "Il farmacista dà quello che può senza ricetta, e per il resto manda alla guardia medica."
    ],
    glossIt: ["di turno", "appeso", "la saracinesca", "lo sportellino", "la guardia medica"],
    lexIt: ["farmacia", "restare", "rimanere", "Asl", "chiudere", "domenica", "turno", "notte", "foglio", "sito", "settimana", "paese", "toccare", "comune", "vicino", "farmacista", "ricetta"],
    questions: [
      { t: "truefalse", q: "Di notte tutte le farmacie sono chiuse.", a: 1 },
      { t: "mcq", q: "Dove si trova l'indirizzo della farmacia aperta?", opts: ["Sulla porta delle altre farmacie", "In municipio", "In ospedale"], a: 0 },
      { t: "mcq", q: "Che cosa fa il farmacista quando serve una ricetta?", opts: ["Manda alla guardia medica", "Chiama la polizia", "Non fa niente"], a: 0 }
    ]
  },
  {
    id: "r-a2-ferie",
    cefr: "A2",
    tag: "g-futuro",
    titleIt: "Chiuso per ferie",
    sentences: [
      "A Ferragosto molte città si svuotano.",
      "Il quindici agosto quasi tutto è chiuso, e intorno a quella data anche i negozi sotto casa.",
      "Sulla saracinesca compare un foglio: chiuso per ferie, torneremo il primo settembre.",
      "Chi resta in città scoprirà che il panettiere è chiuso e il meccanico pure.",
      "Le grandi catene restano aperte, quindi il supermercato lo troverai.",
      "Il barbiere, il calzolaio e la trattoria di quartiere invece no.",
      "Negli ultimi anni la chiusura si è accorciata: molti fanno una settimana invece di tre.",
      "Nelle città turistiche succede il contrario: agosto è il mese in cui si lavora di più."
    ],
    glossIt: ["si svuotano", "le ferie", "il calzolaio", "si è accorciata"],
    lexIt: ["Ferragosto", "intorno", "sotto", "scoprire", "pure", "grande", "turistica", "ultimo", "agosto", "settembre", "panettiere", "meccanico", "catena", "supermercato", "barbiere", "trattoria", "quartiere", "chiusura", "turistico", "mese"],
    questions: [
      { t: "mcq", q: "Che cosa succede alle città italiane a Ferragosto?", opts: ["Si svuotano", "Si riempiono di uffici aperti", "Chiudono i supermercati per un mese"], a: 0 },
      { t: "truefalse", q: "Nelle città turistiche ad agosto si lavora meno.", a: 1 },
      { t: "mcq", q: "Che cosa è cambiato negli ultimi anni?", opts: ["La chiusura è più corta", "Nessuno va in ferie", "I negozi chiudono tutto l'anno"], a: 0 }
    ]
  },
  {
    id: "r-b1-condominio",
    cefr: "B1",
    tag: "g-si",
    titleIt: "L'assemblea di condominio",
    sentences: [
      "Chi compra o affitta un appartamento in Italia entra in un condominio.",
      "Una volta all'anno si tiene l'assemblea, di solito di sera e quasi sempre lunga.",
      "Si discutono il bilancio, le spese dell'ascensore e i lavori da fare.",
      "Ogni proprietario ha un peso diverso, calcolato in millesimi secondo la dimensione dell'appartamento.",
      "Non si vota per teste: chi ha l'appartamento grande pesa di più.",
      "L'amministratore prepara i conti e manda il verbale a tutti.",
      "Chi è in affitto di solito non partecipa, ma una parte delle spese la paga lo stesso.",
      "La divisione tra spese del proprietario e spese dell'inquilino sta nel contratto, e quasi nessuno la legge prima di firmare."
    ],
    glossIt: ["l'assemblea", "i millesimi", "l'amministratore", "il verbale", "l'inquilino"],
    lexIt: ["condominio", "assemblea", "amministratore", "bilancio", "spesa", "lavoro", "proprietario", "peso", "calcolare", "dimensione", "votare", "testa", "conto", "partecipare", "divisione", "firmare"],
    questions: [
      { t: "mcq", q: "Come si calcola il peso di ogni proprietario?", opts: ["In millesimi, secondo la dimensione", "Per teste", "Per anzianità"], a: 0 },
      { t: "truefalse", q: "Chi è in affitto non paga nessuna spesa condominiale.", a: 1 },
      { t: "mcq", q: "Dove è scritta la divisione delle spese?", opts: ["Nel contratto", "Nel verbale", "Sulla porta"], a: 0 },
      { t: "truefalse", q: "L'assemblea si tiene una volta all'anno.", a: 0 }
    ]
  },
  {
    id: "r-b1-codice-fiscale",
    cefr: "B1",
    tag: "g-relativi",
    titleIt: "Il codice che viene prima di tutto",
    sentences: [
      "Il codice fiscale è la sigla che identifica ogni persona in Italia.",
      "Si ricava dal nome, dal cognome, dalla data e dal luogo di nascita.",
      "Serve per aprire un conto, firmare un contratto, andare dal medico e comprare una scheda telefonica.",
      "Chi arriva dall'estero deve chiederlo all'Agenzia delle Entrate, ed è la prima cosa da fare.",
      "Senza codice fiscale non si affitta una casa, e senza casa non si ottiene la residenza.",
      "Senza residenza molte pratiche restano ferme, e il giro si chiude.",
      "Il documento che ti consegnano è un foglio, non una tessera.",
      "La tessera sanitaria, quella che arriva dopo, porta lo stesso codice sul retro."
    ],
    glossIt: ["il codice fiscale", "si ricava", "la residenza", "le pratiche", "il retro"],
    lexIt: ["sigla", "luogo", "ottenere", "fermo", "identificare", "cognome", "nascita", "scheda", "telefonico", "estero", "tessera", "sanitario", "consegnare", "giro"],
    questions: [
      { t: "mcq", q: "Da che cosa si ricava il codice fiscale?", opts: ["Da nome, cognome, data e luogo di nascita", "Dal lavoro", "Dall'indirizzo"], a: 0 },
      { t: "truefalse", q: "Il codice fiscale arriva sotto forma di tessera.", a: 1 },
      { t: "mcq", q: "Perché il testo parla di un giro che si chiude?", opts: ["Perché senza casa non c'è residenza e senza residenza le pratiche restano ferme", "Perché l'ufficio è lontano", "Perché il codice scade"], a: 0 }
    ]
  },
  {
    id: "r-b1-convalida",
    cefr: "B1",
    tag: "g-imperativo",
    titleIt: "Convalida prima di salire",
    sentences: [
      "Sui treni regionali il biglietto di carta va convalidato prima di salire.",
      "Cerca la macchinetta all'inizio del binario e infila il biglietto.",
      "Se te ne dimentichi, cerca subito il capotreno, prima che sia lui a trovare te.",
      "In quel caso paghi una piccola somma; se invece ti controlla lui, la multa è molto più alta.",
      "Il biglietto comprato dall'app non si convalida: vale già per quel treno.",
      "Sui treni ad alta velocità la convalida non esiste, perché il posto è assegnato.",
      "La confusione nasce da qui: due sistemi diversi sullo stesso binario.",
      "Se hai un dubbio, chiedilo in biglietteria e non al primo passeggero che passa."
    ],
    glossIt: ["convalidare", "la macchinetta", "il capotreno", "assegnato"],
    lexIt: ["regionale", "inizio", "app", "passare", "salire", "infilare", "dimenticarsi", "somma", "controllare", "multa", "velocità", "posto", "confusione", "sistema", "dubbio", "biglietteria", "passeggero"],
    questions: [
      { t: "truefalse", q: "Il biglietto comprato dall'app va convalidato.", a: 1 },
      { t: "mcq", q: "Che cosa conviene fare se hai dimenticato di convalidare?", opts: ["Cercare subito il capotreno", "Scendere alla prima fermata", "Aspettare il controllo"], a: 0 },
      { t: "mcq", q: "Perché sui treni ad alta velocità non serve convalidare?", opts: ["Perché il posto è assegnato", "Perché costano di più", "Perché non c'è la macchinetta"], a: 0 }
    ]
  },
  {
    id: "r-b1-caffe-sospeso",
    cefr: "B1",
    tag: "g-gerundio",
    titleIt: "Il caffè sospeso",
    sentences: [
      "A Napoli esiste l'abitudine del caffè sospeso.",
      "Entrando al bar, paghi due caffè e ne bevi uno.",
      "Il secondo resta lì, già pagato, per chi entrerà più tardi senza soldi.",
      "Nessuno chiede niente e nessuno controlla: il barista tiene il conto a mente o su un foglio.",
      "L'usanza è nata nei quartieri popolari e per molto tempo è rimasta locale.",
      "Poi, diventando famosa, è arrivata in altre città e in altri paesi.",
      "Oggi in alcuni bar c'è un cartello che la spiega ai turisti.",
      "Molti napoletani sorridono leggendo quel cartello: fino a ieri non c'era niente da spiegare."
    ],
    glossIt: ["sospeso", "l'usanza", "popolari", "il cartello"],
    lexIt: ["Napoli", "usanza", "napoletano", "soldi", "mente", "decennio", "locale", "famoso", "sorridere", "spiegare"],
    questions: [
      { t: "mcq", q: "Che cosa significa pagare un caffè sospeso?", opts: ["Pagare due caffè e berne uno", "Pagare dopo", "Pagare a rate"], a: 0 },
      { t: "truefalse", q: "Il barista scrive il nome di chi ha pagato.", a: 1 },
      { t: "mcq", q: "Dove è nata l'usanza?", opts: ["Nei quartieri popolari di Napoli", "Negli alberghi", "All'estero"], a: 0 },
      { t: "truefalse", q: "Oggi in alcuni bar un cartello spiega l'usanza ai turisti.", a: 0 }
    ]
  },
  {
    id: "r-b2-case-un-euro",
    cefr: "B2",
    tag: "g-agg-gradi",
    titleIt: "Le case a un euro",
    sentences: [
      "Da qualche anno alcuni comuni italiani vendono case a un euro.",
      "Sono borghi piccolissimi, spesso in montagna, dove restano poche decine di abitanti.",
      "L'idea è semplice: una casa vuota che cade a pezzi costa al comune più di una casa venduta.",
      "Il prezzo però è simbolico, non reale.",
      "Chi compra firma l'impegno a ristrutturare entro un termine fissato dal bando.",
      "La ristrutturazione costa decine di migliaia di euro, e serve anche una cauzione che si perde se i lavori non partono.",
      "I giornali stranieri hanno raccontato l'iniziativa come l'affare più facile del mondo.",
      "È probabilmente l'operazione più fraintesa degli ultimi anni: il costo non è il prezzo, ma quello che viene dopo."
    ],
    glossIt: ["il borgo", "cade a pezzi", "l'impegno", "il bando", "la cauzione", "fraintesa"],
    lexIt: ["vendere", "impegno", "poco", "raccontare", "mondo", "montagna", "decina", "abitante", "vuoto", "simbolico", "reale", "ristrutturare", "termine", "fissare", "ristrutturazione", "migliaio", "straniero", "iniziativa", "affare", "operazione", "costo"],
    questions: [
      { t: "truefalse", q: "Chi compra una casa a un euro spende in tutto un euro.", a: 1 },
      { t: "mcq", q: "Che cosa firma chi compra?", opts: ["L'impegno a ristrutturare entro un termine", "Un contratto di lavoro", "Una richiesta di residenza"], a: 0 },
      { t: "mcq", q: "A che cosa serve la cauzione?", opts: ["Si perde se i lavori non partono", "Paga le tasse", "Copre il prezzo della casa"], a: 0 },
      { t: "mcq", q: "Perché il testo parla di operazione fraintesa?", opts: ["Perché il costo vero arriva dopo il prezzo", "Perché le case non esistono", "Perché i comuni non vendono"], a: 0 }
    ]
  },
  {
    id: "r-b2-dialetti",
    cefr: "B2",
    tag: "g-discorso-indiretto",
    titleIt: "Non sono accenti",
    sentences: [
      "In Italia i dialetti non sono varianti dell'italiano, ma lingue sorelle.",
      "Vengono dal latino come l'italiano, e da lì si sono separate più di mille anni fa.",
      "Un napoletano e un veneziano che parlano ciascuno il proprio dialetto non si capiscono.",
      "Un linguista direbbe che la distanza tra i due è simile a quella tra lo spagnolo e il portoghese.",
      "L'italiano standard nasce dal fiorentino letterario e per secoli è stato soprattutto una lingua scritta.",
      "Al momento dell'unità lo parlava una minoranza della popolazione; la scuola e la televisione hanno fatto il resto.",
      "Oggi molti anziani pensano in dialetto e traducono mentre parlano.",
      "Se qualcuno ti dice che parla un po' di dialetto, spesso significa che è la sua prima lingua."
    ],
    glossIt: ["le lingue sorelle", "il linguista", "letterario", "l'unità", "la minoranza"],
    lexIt: ["dialetto", "unità", "scuola", "variante", "latino", "separarsi", "veneziano", "ciascuno", "proprio", "distanza", "simile", "spagnolo", "portoghese", "standard", "fiorentino", "secolo", "popolazione", "televisione", "anziano", "tradurre"],
    questions: [
      { t: "truefalse", q: "I dialetti italiani sono varianti dell'italiano standard.", a: 1 },
      { t: "mcq", q: "Da dove viene l'italiano standard?", opts: ["Dal fiorentino letterario", "Dal napoletano", "Dal latino parlato a Roma oggi"], a: 0 },
      { t: "mcq", q: "Che cosa significa spesso parlo un po' di dialetto?", opts: ["Che è la sua prima lingua", "Che lo studia a scuola", "Che lo capisce ma non lo parla"], a: 0 }
    ]
  },
  {
    id: "r-b2-tirocinio",
    cefr: "B2",
    tag: "g-perifrasi",
    titleIt: "Stage, tirocinio, lavoro",
    sentences: [
      "In Italia molti giovani stanno facendo il terzo tirocinio prima del primo contratto vero.",
      "La parola inglese stage, pronunciata alla francese, indica la stessa cosa.",
      "Il tirocinio curricolare fa parte degli studi e non prevede per forza un compenso.",
      "Quello extracurricolare, dopo la laurea, deve invece essere pagato, e l'importo minimo lo decide ogni regione.",
      "Il problema non sta nella legge, ma nell'uso che se ne fa.",
      "Alcune aziende continuano a coprire posizioni vere con un tirocinio dopo l'altro.",
      "Chi entra così rischia di restare a lungo in una zona grigia, senza contratto e senza contributi pieni.",
      "La differenza tra imparare un mestiere e lavorare gratis sta tutta in quello che l'azienda fa dopo."
    ],
    glossIt: ["il tirocinio", "il compenso", "l'importo", "i contributi", "la zona grigia"],
    lexIt: ["giovane", "stage", "tirocinio", "forza", "extracurricolare", "importo", "decidere", "problema", "continuare", "inglese", "pronunciare", "francese", "indicare", "curricolare", "prevedere", "laurea", "minimo", "regione", "legge", "uso", "azienda", "coprire", "posizione", "ripetersi", "rischiare", "pieno", "mestiere", "gratis"],
    questions: [
      { t: "mcq", q: "Quale tirocinio deve essere pagato?", opts: ["Quello extracurricolare, dopo la laurea", "Quello curricolare", "Nessuno dei due"], a: 0 },
      { t: "truefalse", q: "Secondo il testo il problema principale è la legge.", a: 1 },
      { t: "mcq", q: "Che cosa rischia chi entra in azienda solo con tirocini?", opts: ["Di restare a lungo senza contratto e senza contributi pieni", "Di essere assunto subito", "Di pagare l'azienda"], a: 0 }
    ]
  },
  {
    id: "r-c1-due-giugno",
    cefr: "C1",
    tag: "g-passato-remoto",
    titleIt: "Due giugno 1946",
    sentences: [
      "Il due e il tre giugno del 1946 gli italiani scelsero tra monarchia e repubblica.",
      "Fu la prima volta in cui votarono anche le donne in un'elezione nazionale.",
      "Il referendum si tenne insieme all'elezione dell'Assemblea Costituente.",
      "Vinse la repubblica, con circa il cinquantaquattro per cento dei voti.",
      "Il risultato divise il paese lungo una linea geografica netta: il nord scelse la repubblica, il sud la monarchia.",
      "Il re Umberto II lasciò l'Italia e non vi tornò mai più.",
      "La Costituzione entrò in vigore il primo gennaio del 1948.",
      "Da allora il due giugno è la festa nazionale, anche se per alcuni anni non fu giorno festivo."
    ],
    glossIt: ["la monarchia", "l'Assemblea Costituente", "entrò in vigore", "festivo"],
    lexIt: ["giugno", "cinquantaquattro", "Umberto II", "scegliere", "repubblica", "votare", "donna", "elezione", "nazionale", "referendum", "tenersi", "vincere", "cento", "voto", "risultato", "dividere", "linea", "geografico", "netto", "nord", "sud", "re", "Costituzione", "gennaio", "festa"],
    questions: [
      { t: "mcq", q: "Che cosa scelsero gli italiani nel 1946?", opts: ["Tra monarchia e repubblica", "Il presidente", "Il sindaco di Roma"], a: 0 },
      { t: "truefalse", q: "Le donne avevano già votato in elezioni nazionali precedenti.", a: 1 },
      { t: "mcq", q: "Come si divise il paese?", opts: ["Il nord scelse la repubblica, il sud la monarchia", "Il nord la monarchia, il sud la repubblica", "Non ci furono differenze"], a: 0 },
      { t: "mcq", q: "Quando entrò in vigore la Costituzione?", opts: ["Il primo gennaio 1948", "Il due giugno 1946", "Nel 1861"], a: 0 }
    ]
  }
]);
