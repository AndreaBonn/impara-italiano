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
    titleIt: "La mattina di Luca",
    sentences: [
      "Luca si sveglia alle sette.",
      "Fa colazione con un caffè e due biscotti.",
      "Alle otto prende l'autobus per andare in ufficio.",
      "L'autobus è sempre pieno, ma il viaggio è breve.",
      "In ufficio saluta i colleghi e accende il computer.",
      "A mezzogiorno mangia un panino con il suo amico Marco."
    ],
    glossIt: ["si sveglia", "colazione", "pieno", "saluta"],
    questions: [
      { t: "truefalse", q: "Luca si sveglia alle otto.", a: 1 },
      { t: "mcq", q: "Che cosa beve Luca a colazione?", opts: ["Un caffè", "Un tè", "Un succo"], a: 0 },
      { t: "truefalse", q: "Luca va in ufficio in autobus.", a: 0 }
    ]
  },
  {
    id: "r-a1-mercato",
    cefr: "A1",
    tag: "g-articolo-det",
    titleIt: "Al mercato del sabato",
    sentences: [
      "Il sabato mattina Anna va al mercato.",
      "Compra la frutta, il pane e un po' di formaggio.",
      "Le mele costano due euro al chilo.",
      "Il fruttivendolo la conosce e le regala sempre un'arancia.",
      "Anna torna a casa con due borse pesanti.",
      "Il pomeriggio prepara il pranzo per la famiglia."
    ],
    glossIt: ["fruttivendolo", "regala", "pesanti", "borse"],
    questions: [
      { t: "mcq", q: "Quando va al mercato Anna?", opts: ["La domenica", "Il sabato", "Il lunedì"], a: 1 },
      { t: "truefalse", q: "Il fruttivendolo non conosce Anna.", a: 1 },
      { t: "mcq", q: "Quanto costano le mele?", opts: ["Un euro al chilo", "Due euro al chilo", "Tre euro al chilo"], a: 1 }
    ]
  },

  /* ---------------- A2 ---------------- */
  {
    id: "r-a2-treno",
    cefr: "A2",
    tag: "g-passato-prossimo",
    titleIt: "Un treno perso",
    sentences: [
      "Ieri Giulia è arrivata in stazione con dieci minuti di ritardo.",
      "Il treno per Bologna era già partito.",
      "Ha comprato un altro biglietto e ha aspettato un'ora.",
      "Mentre aspettava, ha letto il giornale e ha bevuto un cappuccino.",
      "Il secondo treno era quasi vuoto e molto tranquillo.",
      "Alla fine è arrivata a Bologna solo con un'ora di ritardo.",
      "Ha telefonato alla sua amica per avvisarla."
    ],
    glossIt: ["ritardo", "era partito", "vuoto", "avvisarla"],
    questions: [
      { t: "truefalse", q: "Giulia ha preso il primo treno.", a: 1 },
      { t: "mcq", q: "Che cosa ha fatto Giulia mentre aspettava?", opts: ["Ha dormito", "Ha letto il giornale", "Ha telefonato al lavoro"], a: 1 },
      { t: "mcq", q: "Com'era il secondo treno?", opts: ["Pieno e rumoroso", "Quasi vuoto e tranquillo", "In ritardo di due ore"], a: 1 }
    ]
  },
  {
    id: "r-a2-casa",
    cefr: "A2",
    tag: "g-imperfetto",
    titleIt: "La casa dei nonni",
    sentences: [
      "Da bambino passavo tutte le estati dai nonni, in campagna.",
      "La casa era vecchia e aveva una cucina enorme.",
      "La mattina mio nonno andava nell'orto e io lo seguivo.",
      "Mia nonna preparava il pane due volte alla settimana.",
      "Il pomeriggio faceva troppo caldo per uscire.",
      "Restavamo in casa a giocare a carte fino alle cinque.",
      "Quella casa adesso non c'è più, ma il profumo del pane me lo ricordo bene."
    ],
    glossIt: ["orto", "seguivo", "profumo", "restavamo"],
    questions: [
      { t: "mcq", q: "Dove passava le estati?", opts: ["Al mare", "In campagna dai nonni", "In città"], a: 1 },
      { t: "truefalse", q: "La nonna preparava il pane ogni giorno.", a: 1 },
      { t: "mcq", q: "Perché restavano in casa il pomeriggio?", opts: ["Perché pioveva", "Perché faceva troppo caldo", "Perché lavoravano"], a: 1 }
    ]
  },
  {
    id: "r-a2-medico",
    cefr: "A2",
    tag: "g-condizionale",
    titleIt: "Dal medico",
    sentences: [
      "Da tre giorni Paolo ha mal di gola e un po' di febbre.",
      "Il medico lo visita e gli dice che non è niente di grave.",
      "Dovrebbe bere molta acqua e riposare almeno due giorni.",
      "Gli prescrive uno sciroppo da prendere la sera.",
      "Paolo chiede se può andare al lavoro lunedì.",
      "Il medico risponde che sarebbe meglio aspettare fino a mercoledì."
    ],
    glossIt: ["mal di gola", "visita", "prescrive", "sciroppo"],
    questions: [
      { t: "truefalse", q: "Paolo ha qualcosa di grave.", a: 1 },
      { t: "mcq", q: "Che cosa dovrebbe fare Paolo?", opts: ["Camminare molto", "Bere acqua e riposare", "Andare subito al lavoro"], a: 1 },
      { t: "mcq", q: "Quando potrebbe tornare al lavoro?", opts: ["Lunedì", "Mercoledì", "Domenica"], a: 1 }
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
    questions: [
      { t: "truefalse", q: "In italiano esiste un tono di voce riservato allo scherzo.", a: 1 },
      { t: "mcq", q: "Da che cosa dipende il significato di „ma no, figurati”?", opts: ["Dalla grammatica", "Dal contesto e da chi la dice", "Dalla regione"], a: 1 },
      { t: "mcq", q: "Secondo il testo, come si impara l'ironia?", opts: ["Studiando le regole", "Sbagliando in pubblico", "Leggendo i giornali"], a: 1 }
    ]
  }
];
