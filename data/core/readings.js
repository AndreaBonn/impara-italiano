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
window.READINGS = [

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
    lexIt: ["toccare", "fruttivendolo", "scegliere", "preparare", "pesca", "venditore", "contento", "antipatia", "delicato", "differenza", "piccolo", "evidente"],
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
  }
];
