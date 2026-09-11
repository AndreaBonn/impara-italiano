/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/c2-01.js
   Powstało z data/c2-01.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("C2", [
  {
    id: "c2-u01",
    icon: "🪶",
    titleIt: "Participi e perifrasi",
    lessons: [
      {
        id: "c2-u01-l1",
        tags: ["g-participio"],
        cefr: "C2",
        titleIt: "Il participio presente",
        grammar: {
          examples: [
            { it: "I documenti attestanti il requisito vanno allegati." },
            { it: "Le somme risultanti dal bilancio sono state verificate." },
            { it: "Un discorso convincente, ma privo di dati." },
            { it: "I passeggeri provenienti dall'estero devono compilare il modulo." },
            { it: "È stata una scelta perdente fin dall'inizio." },
            { it: "Gli aventi diritto riceveranno una comunicazione." }
          ]
        },
        vocab: [
          { it: "attestante" },
          { it: "risultante" },
          { it: "proveniente" },
          { it: "richiedente" },
          { it: "avente diritto" },
          { it: "convincente" },
          { it: "seguente" },
          { it: "precedente" },
          { it: "vigente" },
          { it: "il requisito" },
          { it: "il bilancio" },
          { it: "privo di" }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["che"] },
          {
            t: "match",
            pairs: [{ it: "attestante" }, { it: "risultante" }, { it: "vigente" }, { it: "privo di" }]
          },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "cloze",
            text: "I documenti {{1}} il requisito vanno allegati all'istanza dai soggetti {{2}}.",
            gaps: [["attestanti"], ["richiedenti"]]
          },
          { t: "trans", dir: "toIt", a: ["le somme risultanti dal bilancio sono state verificate"] },
          { t: "listen", it: "Gli aventi diritto riceveranno una comunicazione entro trenta giorni." },
          { t: "speak", it: "Un discorso convincente, ma privo di dati concreti." }
        ]
      },
      {
        id: "c2-u01-l2",
        tags: ["g-participio"],
        cefr: "C2",
        titleIt: "Participio assoluto",
        grammar: {
          examples: [
            { it: "Vista l'urgenza, procediamo senza attendere." },
            { it: "Terminati i lavori, la strada è stata riaperta." },
            { it: "Una volta ricevuta la conferma, potrà partire." },
            { it: "Fatte le dovute verifiche, la domanda è stata accolta." },
            { it: "Arrivati a destinazione, ci siamo accorti dell'errore." },
            { it: "Esclusi i costi fissi, il bilancio è positivo." }
          ]
        },
        vocab: [
          { it: "vista l'urgenza" },
          { it: "terminare" },
          { it: "riaprire" },
          { it: "accogliere una domanda" },
          { it: "le dovute verifiche" },
          { it: "escludere" },
          { it: "la destinazione" },
          { it: "accorgersi di" },
          { it: "una volta + participio" },
          { it: "appena + participio" },
          { it: "il presupposto" },
          { it: "in via preliminare" }
        ],
        exercises: [
          { t: "fill", a: ["i"] },
          { t: "fill", a: ["a"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "{{1}} (leggere) il contratto, ho firmato. {{2}} (escludere) i costi fissi, il bilancio è positivo.",
            gaps: [["letto"], ["esclusi"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["una volta ricevuta la conferma potrà partire", "ricevuta la conferma potrà partire"]
          },
          {
            t: "order",
            tokens: ["Arrivati", "a", "destinazione,", "ci", "siamo", "accorti", "dell'errore"],
            a: ["arrivati a destinazione ci siamo accorti dell'errore"]
          },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Fatte le dovute verifiche, la domanda è stata accolta." },
          { t: "speak", it: "Vista l'urgenza, procediamo senza attendere ulteriori conferme." }
        ]
      },
      {
        id: "c2-u01-l3",
        tags: ["g-perifrasi"],
        cefr: "C2",
        titleIt: "Perifrasi verbali",
        grammar: {
          examples: [
            { it: "Sto per uscire, ti richiamo dopo." },
            { it: "Ero sul punto di rinunciare quando è arrivata la risposta." },
            { it: "Il numero di richieste va aumentando di mese in mese." },
            { it: "Questo capitolo va riscritto interamente." },
            { it: "C'è ancora molto da fare prima della scadenza." },
            { it: "Mi accingo a illustrare i risultati." }
          ]
        },
        vocab: [
          { it: "stare per" },
          { it: "essere sul punto di" },
          { it: "accingersi a" },
          { it: "seguitare a" },
          { it: "andare + gerundio" },
          { it: "andare + participio" },
          { it: "avere da" },
          { it: "esserci da" },
          { it: "rinunciare" },
          { it: "illustrare" },
          { it: "interamente" },
          { it: "di mese in mese" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["sto"] },
          { t: "fill", a: ["da"] },
          {
            t: "match",
            pairs: [
              { it: "accingersi a" },
              { it: "essere sul punto di" },
              { it: "avere da" },
              { it: "seguitare a" }
            ]
          },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "{{1}} sul punto di rinunciare, ma il numero di richieste {{2}} aumentando.",
            gaps: [["ero"], ["va"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["questo capitolo va riscritto", "questo capitolo va riscritto interamente"]
          },
          { t: "listen", it: "Mi accingo a illustrare i risultati della ricerca." },
          { t: "speak", it: "Ero sul punto di rinunciare quando è arrivata la risposta." }
        ]
      }
    ],
    test: {
      id: "c2-u01-test",
      tags: ["g-participio", "g-perifrasi"],
      cefr: "C2",
      titleIt: "Test — Participi e perifrasi",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["che"] },
        { t: "fill", a: ["i"] },
        { t: "fill", a: ["a"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["da"] },
        { t: "listen", it: "Fatte le dovute verifiche, il progetto va comunque rivisto." },
        { t: "speak", it: "Una volta ricevuta la conferma, procederemo senza indugio." }
      ]
    }
  },
  {
    id: "c2-u02",
    icon: "🧬",
    titleIt: "Plurali e derivazione",
    lessons: [
      {
        id: "c2-u02-l1",
        tags: ["g-nome-plurale", "g-nome-avanzato"],
        cefr: "C2",
        titleIt: "Le ossa e gli ossi",
        grammar: {
          examples: [
            { it: "Mi fanno male le ossa." },
            { it: "Il cane rosicchia gli ossi." },
            { it: "Le mura della città sono medievali." },
            { it: "I muri di casa sono sottili." },
            { it: "Ha raccolto i frutti del suo lavoro." },
            { it: "A pranzo mangio sempre la frutta." }
          ]
        },
        vocab: [
          { it: "le ossa / gli ossi" },
          { it: "le braccia / i bracci" },
          { it: "le mura / i muri" },
          { it: "le fila / i fili" },
          { it: "la frutta / i frutti" },
          { it: "le dita / i diti" },
          { it: "le ciglia / i cigli" },
          { it: "le lenzuola" },
          { it: "rosicchiare" },
          { it: "medievale" },
          { it: "tirare le fila" },
          { it: "raccogliere i frutti" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["i frutti"] },
          { t: "fill", a: ["la frutta"] },
          {
            t: "match",
            pairs: [{ it: "le braccia" }, { it: "i bracci" }, { it: "le fila" }, { it: "i fili" }]
          },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "{{1}} della città sono antiche, ma {{2}} di casa mia sono sottili.",
            gaps: [["le mura"], ["i muri"]]
          },
          { t: "trans", dir: "toIt", a: ["il cane rosicchia gli ossi"] },
          { t: "listen", it: "Le dita erano gelate e le ossa mi facevano male." },
          { t: "speak", it: "Ha finalmente raccolto i frutti del suo lavoro." }
        ]
      },
      {
        id: "c2-u02-l2",
        tags: ["g-nome-avanzato"],
        cefr: "C2",
        titleIt: "I nomi composti",
        grammar: {
          examples: [
            { it: "I capistazione hanno firmato il verbale." },
            { it: "Ha scritto tre capolavori in dieci anni." },
            { it: "Le casseforti sono state svuotate." },
            { it: "Comprami due apriscatole, per favore." },
            { it: "I capoluoghi di regione sono venti." },
            { it: "Gli asciugamani puliti sono nell'armadio." }
          ]
        },
        vocab: [
          { it: "il capolavoro" },
          { it: "il capoluogo" },
          { it: "il capostazione" },
          { it: "il capofamiglia" },
          { it: "la cassaforte" },
          { it: "il bassofondo" },
          { it: "l'apriscatole" },
          { it: "il portacenere" },
          { it: "lo spazzaneve" },
          { it: "il salvagente" },
          { it: "il verbale" },
          { it: "svuotare" }
        ],
        exercises: [
          { t: "fill", a: ["i capolavori", "capolavori"] },
          { t: "fill", a: ["i capistazione", "capistazione"] },
          { t: "fill", a: ["le casseforti", "casseforti"] },
          { t: "fill", a: ["i portacenere", "portacenere"] },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "cloze",
            text: "{{1}} di regione sono venti; {{2}} sono state svuotate durante la notte.",
            gaps: [["i capoluoghi"], ["le casseforti"]]
          },
          { t: "trans", dir: "toIt", a: ["gli asciugamani puliti sono nell'armadio"] },
          { t: "listen", it: "I capireparto hanno chiesto un incontro con la direzione." },
          { t: "speak", it: "Ha scritto tre capolavori in meno di dieci anni." }
        ]
      },
      {
        id: "c2-u02-l3",
        tags: ["g-nome-avanzato"],
        cefr: "C2",
        titleIt: "Alterati e aggettivi dotti",
        grammar: {
          examples: [
            { it: "Che tempaccio! Non si esce con questa pioggia." },
            { it: "Abitiamo in una casetta fuori città." },
            { it: "Il portone del palazzo è sempre chiuso." },
            { it: "Le risorse idriche del Paese sono in calo." },
            { it: "Ha subito un arresto cardiaco." },
            { it: "Il traffico urbano è aumentato del venti per cento." }
          ]
        },
        vocab: [
          { it: "l'alterato" },
          { it: "il diminutivo" },
          { it: "l'accrescitivo" },
          { it: "il peggiorativo" },
          { it: "il falso alterato" },
          { it: "cardiaco" },
          { it: "idrico" },
          { it: "oculare" },
          { it: "urbano" },
          { it: "fraterno" },
          { it: "il tempaccio" },
          { it: "il mattone" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [{ it: "il cuore" }, { it: "l'acqua" }, { it: "l'occhio" }, { it: "la città" }]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["casetta", "casina"] },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "cloze",
            text: "Le risorse {{1}} sono in calo e il traffico {{2}} è aumentato.",
            gaps: [["idriche"], ["urbano"]]
          },
          { t: "trans", dir: "toIt", a: ["che tempaccio"] },
          { t: "listen", it: "Le risorse idriche del Paese sono in calo da anni." },
          { t: "speak", it: "Abitiamo in una casetta appena fuori città." }
        ]
      }
    ],
    test: {
      id: "c2-u02-test",
      tags: ["g-nome-avanzato", "g-nome-plurale"],
      cefr: "C2",
      titleIt: "Test — Plurali e derivazione",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["la frutta"] },
        { t: "fill", a: ["i capolavori", "capolavori"] },
        { t: "fill", a: ["i capistazione", "capistazione"] },
        { t: "fill", a: ["le casseforti", "casseforti"] },
        {
          t: "match",
          pairs: [{ it: "il cuore" }, { it: "l'acqua" }, { it: "la città" }, { it: "il fratello" }]
        },
        { t: "mcq", a: 1 },
        { t: "listen", it: "Le casseforti dei capireparto sono state controllate." },
        { t: "speak", it: "Le risorse idriche urbane richiedono un intervento immediato." }
      ]
    }
  },
  {
    id: "c2-u03",
    icon: "🎭",
    titleIt: "Sfumature",
    lessons: [
      {
        id: "c2-u03-l1",
        tags: ["g-registri"],
        cefr: "C2",
        titleIt: "Ironia e understatement",
        grammar: {
          examples: [
            { it: "Bravo, giusto quello che ci mancava." },
            { it: "Diciamo che non è andata benissimo." },
            { it: "Un problemino da due milioni di euro." },
            { it: "Ah, adesso è colpa mia. Ci mancherebbe." },
            { it: "La „riforma” ha peggiorato la situazione." },
            { it: "Non senza difficoltà, siamo arrivati in fondo." }
          ]
        },
        vocab: [
          { it: "figurati!" },
          { it: "ci mancherebbe" },
          { it: "ma va'!" },
          { it: "la litote" },
          { it: "l'understatement" },
          { it: "il sarcasmo" },
          { it: "prendere in giro" },
          { it: "sottolineare" },
          { it: "il tono" },
          { it: "l'allusione" },
          { it: "il doppio senso" },
          { it: "non poco" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "figurati!" }, { it: "ci mancherebbe" }, { it: "ma va'!" }, { it: "non poco" }]
          },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Bravo, {{1}} quello che ci mancava. Diciamo che non è andata {{2}}.",
            gaps: [["giusto", "proprio"], ["benissimo"]]
          },
          { t: "trans", dir: "toIt", a: ["non senza difficoltà siamo arrivati in fondo"] },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Diciamo che non è andata proprio benissimo, per usare un eufemismo." },
          { t: "speak", it: "Un problemino da due milioni di euro, niente di che." }
        ]
      },
      {
        id: "c2-u03-l2",
        tags: ["g-registri"],
        cefr: "C2",
        titleIt: "Gergo e regionalismi",
        grammar: {
          examples: [
            { it: "Non è mica facile come sembra." },
            { it: "Boh, non ne ho idea." },
            { it: "Dai, non prendertela!" },
            { it: "Era tipo mezzanotte quando siamo usciti." },
            { it: "Magari fosse così semplice." },
            { it: "Vengo mo', aspettami un attimo." }
          ]
        },
        vocab: [
          { it: "il gergo" },
          { it: "il regionalismo" },
          { it: "mica" },
          { it: "boh" },
          { it: "dai!" },
          { it: "tipo" },
          { it: "mo'" },
          { it: "l'anguria / il cocomero" },
          { it: "affatto" },
          { it: "colloquiale" },
          { it: "volgare" },
          { it: "datato" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "anguria" }, { it: "cocomero" }, { it: "mo'" }, { it: "passato remoto parlato" }]
          },
          { t: "fill", a: ["affatto"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "{{1}}, non ne ho idea. Comunque non è {{2}} facile come sembra.",
            gaps: [["boh"], ["mica"]]
          },
          { t: "trans", dir: "toIt", a: ["dai non prendertela", "dai, non te la prendere"] },
          { t: "listen", it: "Boh, era tipo mezzanotte, non è mica facile ricordarsi." },
          { t: "speak", it: "Non è mica facile come sembra, credimi." }
        ]
      },
      {
        id: "c2-u03-l3",
        tags: ["g-registri"],
        cefr: "C2",
        titleIt: "Latinismi e lingua colta",
        grammar: {
          examples: [
            { it: "Il contratto è de facto già scaduto." },
            { it: "Il bonus è erogato una tantum." },
            { it: "La riunione è stata rinviata sine die." },
            { it: "La pratica è ancora in itinere." },
            { it: "Si segnala altresì che il termine è perentorio." },
            { it: "Laddove il primo studio indicava un calo, il secondo mostra stabilità." }
          ]
        },
        vocab: [
          { it: "de facto / de iure" },
          { it: "ex post / ex ante" },
          { it: "in itinere" },
          { it: "una tantum" },
          { it: "sine die" },
          { it: "ad hoc" },
          { it: "altresì" },
          { it: "ancorché" },
          { it: "laddove" },
          { it: "giacché" },
          { it: "erogare" },
          { it: "rinviare" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [{ it: "de facto" }, { it: "una tantum" }, { it: "sine die" }, { it: "in itinere" }]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["altresì"] },
          { t: "fill", a: ["laddove"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Il contratto è {{1}} facto già scaduto e la pratica risulta ancora {{2}} itinere.",
            gaps: [["de"], ["in"]]
          },
          { t: "trans", dir: "toIt", a: ["si segnala altresì che il termine è perentorio"] },
          { t: "listen", it: "La riunione è stata rinviata sine die per motivi tecnici." },
          { t: "speak", it: "Il contributo viene erogato una tantum, previa domanda." }
        ]
      }
    ],
    test: {
      id: "c2-u03-test",
      tags: ["g-registri", "g-nome-avanzato", "g-participio"],
      cefr: "C2",
      titleIt: "Test — Ripasso unità 1-3",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["i"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["le casseforti", "casseforti"] },
        { t: "fill", a: ["i capistazione", "capistazione"] },
        {
          t: "match",
          pairs: [{ it: "l'acqua" }, { it: "il cuore" }, { it: "la città" }, { it: "l'occhio" }]
        },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["altresì"] },
        { t: "trans", dir: "toIt", a: ["la pratica è ancora in itinere ed è stata rinviata sine die"] },
        { t: "speak", it: "Vista la situazione, il progetto va rivisto interamente prima della scadenza." }
      ]
    }
  }
]);
