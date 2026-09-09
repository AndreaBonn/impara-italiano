/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/a1-01.js
   Powstało z data/a1-01.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("A1", [
  {
    id: "a1-u01",
    icon: "☕",
    titleIt: "Al bar",
    lessons: [
      {
        id: "a1-u01-l1",
        tags: ["g-presente", "g-frase"],
        cefr: "A1",
        titleIt: "Buongiorno, un caffè",
        grammar: {
          examples: [
            { it: "Buongiorno, un caffè per favore." },
            { it: "Sono Anna, piacere." },
            { it: "Tu sei di Roma?" },
            { it: "Il caffè è caldo." },
            { it: "Siamo in ritardo." },
            { it: "Loro sono al bar." }
          ]
        },
        vocab: [
          { it: "buongiorno" },
          { it: "buonasera" },
          { it: "buonanotte" },
          { it: "ciao" },
          { it: "arrivederci" },
          { it: "per favore" },
          { it: "grazie" },
          { it: "prego" },
          { it: "un caffè", ex: "Un caffè, per favore." },
          { it: "un cappuccino", ex: "Solo di mattina!" },
          { it: "un cornetto" },
          { it: "il bar" },
          { it: "piacere" },
          { it: "scusi" }
        ],
        dialogue: {
          titleIt: "Al banco",
          lines: [
            { who: "🧑‍🍳", it: "Buongiorno! Dica pure." },
            { who: "🙋", it: "Buongiorno. Un caffè e un cornetto, per favore." },
            { who: "🧑‍🍳", it: "Subito. Sono due euro e cinquanta." },
            { who: "🙋", it: "Ecco. Grazie!" },
            { who: "🧑‍🍳", it: "Prego, buona giornata!" }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "conj", verb: "essere", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["sono"] },
          {
            t: "trans",
            dir: "toIt",
            a: ["sono dalla polonia", "sono della polonia", "vengo dalla polonia"]
          },
          {
            t: "order",
            tokens: ["Un", "caffè", "e", "un", "cornetto,", "per", "favore"],
            a: ["un caffè e un cornetto per favore"]
          },
          { t: "match", pairs: [{ it: "grazie" }, { it: "prego" }, { it: "scusi" }, { it: "arrivederci" }] },
          { t: "listen", it: "Buonasera, un cappuccino per favore." },
          { t: "speak", it: "Buongiorno, un caffè per favore." }
        ]
      },
      {
        id: "a1-u01-l2",
        tags: ["g-nome-genere", "g-nome-plurale"],
        cefr: "A1",
        titleIt: "Maschile o femminile?",
        grammar: {
          examples: [
            { it: "Il cornetto è buono." },
            { it: "I cornetti sono buoni." },
            { it: "La stazione è vicina." },
            { it: "Due caffè, per favore." }
          ]
        },
        vocab: [
          { it: "il libro" },
          { it: "la casa" },
          { it: "il tavolo" },
          { it: "la sedia" },
          { it: "il ristorante" },
          { it: "la stazione" },
          { it: "la chiave" },
          { it: "il fiore" },
          { it: "la città" },
          { it: "il caffè" },
          { it: "lo sport" },
          { it: "il film" },
          { it: "la notte" },
          { it: "il giorno" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["le"] },
          { t: "fill", a: ["ristoranti"] },
          {
            t: "gender",
            opts: ["il", "la"],
            items: [
              { it: "libro", a: "il" },
              { it: "casa", a: "la" },
              { it: "stazione", a: "la" },
              { it: "ristorante", a: "il" },
              { it: "chiave", a: "la" },
              { it: "giorno", a: "il" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 4] },
          { t: "order", tokens: ["Il", "ristorante", "è", "chiuso"], a: ["il ristorante è chiuso"] },
          { t: "listen", it: "Le chiavi sono sul tavolo." },
          { t: "speak", it: "La città è molto bella." }
        ]
      },
      {
        id: "a1-u01-l3",
        tags: ["g-articolo-det", "g-articolo-indet"],
        cefr: "A1",
        titleIt: "Il, lo, la, un, una",
        grammar: {
          examples: [
            { it: "Vorrei un caffè." },
            { it: "Il caffè è freddo." },
            { it: "Lo zaino è pesante." },
            { it: "Gli studenti sono in ritardo." },
            { it: "Un'amica di Roma." }
          ]
        },
        vocab: [
          { it: "lo studente / la studentessa" },
          { it: "lo zaino" },
          { it: "l'amico / l'amica" },
          { it: "il treno" },
          { it: "lo specchio" },
          { it: "lo zucchero" },
          { it: "l'acqua" },
          { it: "il bicchiere" },
          { it: "la bottiglia" },
          { it: "l'albergo" },
          { it: "lo psicologo" },
          { it: "la gente" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "gender",
            opts: ["il", "lo", "la", "l'"],
            items: [
              { it: "treno", a: "il" },
              { it: "studente", a: "lo" },
              { it: "amica", a: "l'" },
              { it: "acqua", a: "l'" },
              { it: "bottiglia", a: "la" },
              { it: "zaino", a: "lo" }
            ]
          },
          { t: "fill", a: ["un'"] },
          { t: "fill", a: ["gli"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [
              { it: "___ psicologo → lo" },
              { it: "___ albergo → l'" },
              { it: "___ bicchiere → il" },
              { it: "___ gente → la" }
            ]
          },
          {
            t: "order",
            tokens: ["Lo", "zaino", "dello", "studente", "è", "pesante"],
            a: ["lo zaino dello studente è pesante"]
          },
          { t: "speak", it: "Gli studenti sono all'università." }
        ]
      },
      {
        id: "a1-u01-l4",
        tags: ["g-presente", "g-frase"],
        cefr: "A1",
        titleIt: "Come stai?",
        grammar: {
          examples: [
            { it: "Ciao Marco, come stai?" },
            { it: "Buongiorno, come sta?" },
            { it: "Sto bene, grazie. E tu?" },
            { it: "Non c'è male." },
            { it: "Così così." },
            { it: "Possiamo darci del tu?" }
          ]
        },
        vocab: [
          { it: "come stai?" },
          { it: "come sta?" },
          { it: "sto bene" },
          { it: "sto male" },
          { it: "non c'è male" },
          { it: "così così" },
          { it: "e tu? / e Lei?" },
          { it: "benissimo" },
          { it: "un po' stanco/a" },
          { it: "il signore / la signora" },
          { it: "a presto" },
          { it: "a dopo" }
        ],
        dialogue: {
          titleIt: "Due incontri, due registri",
          lines: [
            { who: "🙋", it: "Ciao Giulia! Come stai?" },
            { who: "👩", it: "Ciao! Benissimo, e tu?" },
            { who: "🙋", it: "Un po' stanco, ma bene. A dopo!" },
            { who: "🧓", it: "Buongiorno signora, come sta?" },
            { who: "👩", it: "Non c'è male, grazie. E Lei?" }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "conj", verb: "stare", tense: "pres", persons: [0, 1, 2, 4] },
          { t: "fill", a: ["state"] },
          { t: "trans", dir: "toIt", a: ["sto bene grazie e tu", "sto bene, grazie. e tu?"] },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ciao! Come stai stamattina?" },
              { sp: "TY", choices: ["Sono bene, e tu?", "Sto bene, e tu?", "Sta bene, e Lei?"], a: 1 },
              { sp: "A", it: "Benissimo! Il solito caffè?" },
              { sp: "TY", choices: ["Sì, grazie!", "No, prego.", "Sì, scusi."], a: 0 }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "benissimo" }, { it: "non c'è male" }, { it: "così così" }, { it: "sto male" }]
          },
          { t: "listen", it: "Buonasera signora, come sta?" },
          { t: "speak", it: "Non c'è male, grazie. E Lei?" }
        ]
      }
    ],
    test: {
      id: "a1-u01-test",
      tags: ["g-presente", "g-nome-genere", "g-articolo-det"],
      cefr: "A1",
      titleIt: "Test — Al bar",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["siamo"] },
        { t: "fill", a: ["stai"] },
        {
          t: "gender",
          opts: ["il", "lo", "la", "l'"],
          items: [
            { it: "zaino", a: "lo" },
            { it: "amica", a: "l'" },
            { it: "stazione", a: "la" },
            { it: "treno", a: "il" }
          ]
        },
        { t: "mcq", a: 0 },
        { t: "multi", a: [0, 2, 3] },
        {
          t: "trans",
          dir: "toIt",
          a: ["un'acqua per favore", "vorrei un'acqua", "un acqua per favore", "dell'acqua per favore"]
        },
        { t: "order", tokens: ["Gli", "studenti", "sono", "al", "bar"], a: ["gli studenti sono al bar"] },
        { t: "listen", it: "Due caffè e un cornetto, per favore." },
        { t: "speak", it: "Buongiorno, come sta?" }
      ]
    }
  },
  {
    id: "a1-u02",
    icon: "🪪",
    titleIt: "Chi sei?",
    lessons: [
      {
        id: "a1-u02-l1",
        tags: ["g-presente", "g-pron-soggetto"],
        cefr: "A1",
        titleIt: "Mi chiamo…",
        grammar: {
          examples: [
            { it: "Come ti chiami? — Mi chiamo Ewa." },
            { it: "Di dove sei? — Sono di Cracovia." },
            { it: "Sono polacca, ma abito a Milano." },
            { it: "Quanti anni hai? — Ho ventotto anni." },
            { it: "Piacere, Marco. — Piacere mio." }
          ]
        },
        vocab: [
          { it: "essere" },
          { it: "mi chiamo…" },
          { it: "come ti chiami?" },
          { it: "di dove sei?" },
          { it: "sono di…" },
          { it: "abito a…" },
          { it: "polacco / polacca" },
          { it: "italiano / italiana" },
          { it: "il nome" },
          { it: "il cognome" },
          { it: "piacere di conoscerti" },
          { it: "anche io" },
          { it: "davvero?" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["mi"] },
          { t: "fill", a: ["a"] },
          {
            t: "cloze",
            text: "Ciao! {{1}} chiamo Kasia, {{2}} di Danzica e {{3}} a Bologna.",
            gaps: [["mi"], ["sono"], ["abito"]]
          },
          {
            t: "order",
            tokens: ["Piacere", "di", "conoscerti,", "mi", "chiamo", "Luca"],
            a: ["piacere di conoscerti mi chiamo luca"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ciao! Io sono Giulia. E tu, come ti chiami?" },
              { sp: "TY", choices: ["Mi chiamo Ewa.", "Si chiama Ewa.", "Ti chiami Ewa."], a: 0 },
              { sp: "A", it: "Piacere, Ewa! Di dove sei?" },
              { sp: "TY", choices: ["Sono di Polonia.", "Sono dalla Polonia.", "Abito Polonia."], a: 1 }
            ]
          },
          { t: "listen", it: "Mi chiamo Elena e abito a Napoli." },
          { t: "speak", it: "Piacere di conoscerti!" }
        ]
      },
      {
        id: "a1-u02-l2",
        tags: ["g-presente"],
        cefr: "A1",
        titleIt: "Avere e i numeri",
        grammar: {
          examples: [
            { it: "uno, due, tre, quattro, cinque" },
            { it: "sei, sette, otto, nove, dieci" },
            { it: "undici, dodici, tredici… venti" },
            { it: "ventuno, ventidue, ventotto" },
            { it: "trenta, quaranta, cinquanta, sessanta" },
            { it: "settanta, ottanta, novanta, cento" },
            { it: "Ho ventotto anni." }
          ]
        },
        vocab: [
          { it: "avere" },
          { it: "ho fame" },
          { it: "ho sete" },
          { it: "ho freddo / caldo" },
          { it: "ho sonno" },
          { it: "ho paura" },
          { it: "ho ragione" },
          { it: "ho bisogno di…" },
          { it: "quanti anni hai?" },
          { it: "quanto costa?" },
          { it: "l'euro" },
          { it: "il numero" },
          { it: "il numero di telefono" }
        ],
        exercises: [
          { t: "conj", verb: "avere", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["93"] },
          { t: "fill", a: ["'"] },
          { t: "trans", dir: "toIt", a: ["quanti anni hai", "quanti anni hai?"] },
          {
            t: "match",
            pairs: [{ it: "ho sete" }, { it: "ho sonno" }, { it: "ho paura" }, { it: "ho ragione" }]
          },
          {
            t: "cloze",
            text: "— Quanto {{1}}? — Sono {{2}} euro. — {{3}} solo venti euro, mi dispiace.",
            gaps: [["costa"], ["trentadue", "32"], ["ho"]]
          },
          { t: "listen", it: "Ho trentacinque anni e abito a Torino." },
          { t: "speak", it: "Quanto costa un cappuccino?" }
        ]
      },
      {
        id: "a1-u02-l3",
        tags: ["g-presente", "g-nome-genere"],
        cefr: "A1",
        titleIt: "Che lavoro fai?",
        grammar: {
          examples: [
            { it: "Che lavoro fai?" },
            { it: "Faccio la giornalista." },
            { it: "Sono ingegnere." },
            { it: "Lavoro in un'agenzia." },
            { it: "Sono disoccupato in questo momento." },
            { it: "Studio ancora, sono all'ultimo anno." }
          ]
        },
        vocab: [
          { it: "il lavoro" },
          { it: "l'insegnante" },
          { it: "il medico / la dottoressa" },
          { it: "l'ingegnere" },
          { it: "l'avvocato / l'avvocata" },
          { it: "il/la giornalista" },
          { it: "l'impiegato / l'impiegata" },
          { it: "il cuoco / la cuoca" },
          { it: "il commesso / la commessa" },
          { it: "l'operaio" },
          { it: "il/la libero professionista" },
          { it: "cerco lavoro" }
        ],
        exercises: [
          { t: "conj", verb: "fare", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["la"] },
          {
            t: "gender",
            opts: ["il", "lo", "la", "l'"],
            items: [
              { it: "cuoca", a: "la" },
              { it: "ingegnere", a: "l'" },
              { it: "studentessa", a: "la" },
              { it: "operaio", a: "l'" }
            ]
          },
          { t: "trans", dir: "toIt", a: ["che lavoro fai", "che lavoro fai?", "che cosa fai nella vita"] },
          {
            t: "match",
            pairs: [
              { it: "l'attore" },
              { it: "il commesso" },
              { it: "lo studente" },
              { it: "il giornalista" }
            ]
          },
          {
            t: "order",
            tokens: ["Lavoro", "in", "una", "banca", "a", "Milano"],
            a: ["lavoro in una banca a milano"]
          },
          { t: "listen", it: "Faccio l'architetto, lavoro con mio fratello." },
          { t: "speak", it: "Che lavoro fai? Io faccio la giornalista." }
        ]
      },
      {
        id: "a1-u02-l4",
        tags: ["g-presente"],
        cefr: "A1",
        titleIt: "Verbi in -ARE",
        grammar: {
          examples: [
            { it: "Parlo un po' d'italiano." },
            { it: "Non parlo bene, ma capisco." },
            { it: "Studi all'università?" },
            { it: "Mangiamo alle otto." },
            { it: "Cerchi lavoro a Milano?" },
            { it: "Loro abitano vicino al centro." }
          ]
        },
        vocab: [
          { it: "parlare" },
          { it: "lavorare" },
          { it: "studiare" },
          { it: "abitare" },
          { it: "mangiare" },
          { it: "comprare" },
          { it: "cercare" },
          { it: "pagare" },
          { it: "ascoltare" },
          { it: "guardare" },
          { it: "aspettare" },
          { it: "cominciare" }
        ],
        exercises: [
          { t: "conj", verb: "parlare", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "cercare", tense: "pres", persons: [1, 3] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["abitano"] },
          { t: "fill", a: ["non"] },
          { t: "trans", dir: "toIt", a: ["cerchiamo un appartamento a roma", "cerchiamo casa a roma"] },
          { t: "multi", a: [0, 2, 3, 4] },
          { t: "order", tokens: ["Non", "lavoro", "il", "sabato"], a: ["non lavoro il sabato"] },
          { t: "listen", it: "Studio italiano da tre mesi." },
          { t: "speak", it: "Non parlo bene, ma capisco quasi tutto." }
        ]
      }
    ],
    test: {
      id: "a1-u02-test",
      tags: ["g-presente", "g-pron-soggetto"],
      cefr: "A1",
      titleIt: "Test — Chi sei?",
      exercises: [
        { t: "fill", a: ["mi"] },
        { t: "fill", a: ["hai"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "conj", verb: "fare", tense: "pres", persons: [0, 2, 3] },
        { t: "mcq", a: 1 },
        {
          t: "cloze",
          text: "{{1}} polacca, {{2}} a Verona e {{3}} l'insegnante.",
          gaps: [["sono"], ["abito"], ["faccio"]]
        },
        { t: "trans", dir: "toIt", a: ["non parlo italiano", "non parlo l'italiano"] },
        { t: "listen", it: "Ho ventisette anni e cerco lavoro." },
        { t: "speak", it: "Mi chiamo Anna e faccio la giornalista." }
      ]
    }
  },
  {
    id: "a1-u03",
    icon: "🍹",
    titleIt: "L'aperitivo",
    lessons: [
      {
        id: "a1-u03-l1",
        tags: ["g-pron-indiretti", "g-frase"],
        cefr: "A1",
        titleIt: "Mi piace, mi piacciono",
        grammar: {
          examples: [
            { it: "Mi piace molto il caffè." },
            { it: "Ti piacciono gli spritz?" },
            { it: "Non ci piace la birra calda." },
            { it: "Le piace ballare." },
            { it: "A Marco piace il pesce." },
            { it: "Mi piacerebbe provare." }
          ]
        },
        vocab: [
          { it: "l'aperitivo" },
          { it: "lo spritz" },
          { it: "il vino rosso / bianco" },
          { it: "la birra" },
          { it: "le olive" },
          { it: "le patatine" },
          { it: "i salatini" },
          { it: "il prosciutto" },
          { it: "il formaggio" },
          { it: "i dolci" },
          { it: "il pesce" },
          { it: "la carne" },
          { it: "cucinare" },
          { it: "assaggiare" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["piace"] },
          { t: "fill", a: ["piacciono"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "toIt", a: ["mi piace cucinare"] },
          {
            t: "match",
            pairs: [{ it: "mi piace" }, { it: "ti piace" }, { it: "le piace" }, { it: "ci piace" }]
          },
          {
            t: "cloze",
            text: "— Ti {{1}} lo spritz? — Sì, molto! Ma non mi {{2}} le olive.",
            gaps: [["piace"], ["piacciono"]]
          },
          { t: "listen", it: "Mi piacciono molto i formaggi italiani." },
          { t: "speak", it: "Mi piace l'aperitivo, ma non mi piacciono le olive." }
        ]
      },
      {
        id: "a1-u03-l2",
        tags: ["g-presente"],
        cefr: "A1",
        titleIt: "Verbi in -ERE",
        grammar: {
          examples: [
            { it: "Prendo un caffè, grazie." },
            { it: "Leggi il menù?" },
            { it: "Non vedo il cameriere." },
            { it: "C'è un tavolo libero?" },
            { it: "Ci sono due posti al bancone." },
            { it: "Scriviamo il nome sulla prenotazione." }
          ]
        },
        vocab: [
          { it: "prendere" },
          { it: "leggere" },
          { it: "scrivere" },
          { it: "vedere" },
          { it: "chiedere" },
          { it: "rispondere" },
          { it: "mettere" },
          { it: "chiudere" },
          { it: "c'è / ci sono" },
          { it: "il posto" },
          { it: "libero / occupato" },
          { it: "qui vicino" }
        ],
        exercises: [
          { t: "conj", verb: "prendere", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["c'è", "ce"] },
          { t: "fill", a: ["ci sono"] },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "toIt", a: ["prendo una birra e tu", "io prendo una birra e tu"] },
          { t: "multi", a: [0, 2, 4] },
          { t: "order", tokens: ["Non", "vedo", "il", "cameriere"], a: ["non vedo il cameriere"] },
          { t: "listen", it: "C'è un tavolo libero per due persone?" },
          { t: "speak", it: "Prendiamo due spritz, per favore." }
        ]
      },
      {
        id: "a1-u03-l3",
        tags: ["g-presente"],
        cefr: "A1",
        titleIt: "Verbi in -IRE",
        grammar: {
          examples: [
            { it: "Non capisco, può ripetere?" },
            { it: "Preferisco un tavolo fuori." },
            { it: "A che ora finisci di lavorare?" },
            { it: "Il negozio apre alle nove." },
            { it: "Partiamo domani mattina." },
            { it: "Loro capiscono tutto." }
          ]
        },
        vocab: [
          { it: "capire (-isc-)" },
          { it: "finire (-isc-)" },
          { it: "preferire (-isc-)" },
          { it: "pulire (-isc-)" },
          { it: "spedire (-isc-)" },
          { it: "dormire" },
          { it: "partire" },
          { it: "aprire" },
          { it: "offrire" },
          { it: "sentire" },
          { it: "seguire" },
          { it: "può ripetere?" }
        ],
        exercises: [
          { t: "conj", verb: "capire", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "dormire", tense: "pres", persons: [0, 2, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["capiamo"] },
          { t: "fill", a: ["finiscono"] },
          { t: "trans", dir: "toIt", a: ["preferisco un tavolo fuori", "preferisco un tavolo all'aperto"] },
          { t: "multi", a: [0, 2, 4] },
          { t: "order", tokens: ["Non", "capisco,", "può", "ripetere?"], a: ["non capisco può ripetere"] },
          { t: "listen", it: "Preferisco partire domani mattina presto." },
          { t: "speak", it: "Scusi, non capisco. Può ripetere?" }
        ]
      },
      {
        id: "a1-u03-l4",
        tags: ["g-preposizioni", "g-articolo-det"],
        cefr: "A1",
        titleIt: "Del pane, dell'acqua",
        grammar: {
          examples: [
            { it: "Vorrei del pane, per favore." },
            { it: "Compro delle mele e dell'uva." },
            { it: "Un po' di sale, non troppo." },
            { it: "Due etti di prosciutto crudo." },
            { it: "Mezzo litro di latte." },
            { it: "Non ho zucchero in casa." }
          ]
        },
        vocab: [
          { it: "il pane" },
          { it: "il latte" },
          { it: "l'acqua" },
          { it: "lo zucchero" },
          { it: "il sale" },
          { it: "l'olio" },
          { it: "i pomodori" },
          { it: "le mele" },
          { it: "un etto" },
          { it: "un chilo" },
          { it: "un po' di" },
          { it: "mezzo litro" },
          { it: "basta così" },
          { it: "quanto ne vuole?" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dell'"] },
          { t: "fill", a: ["delle"] },
          {
            t: "gender",
            opts: ["del", "dello", "dell'", "della", "dei", "degli", "delle"],
            items: [
              { it: "pane", a: "del" },
              { it: "zucchero", a: "dello" },
              { it: "carne", a: "della" },
              { it: "olio", a: "dell'" },
              { it: "pomodori", a: "dei" },
              { it: "spinaci", a: "degli" }
            ]
          },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "toIt",
            a: ["vorrei mezzo litro di latte", "mezzo litro di latte per favore"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Buongiorno! Mi dica." },
              {
                sp: "TY",
                choices: [
                  "Due etti di prosciutto, per favore.",
                  "Due chili di prosciutto, per favore.",
                  "Un prosciutto, per favore."
                ],
                a: 0
              },
              { sp: "A", it: "Ecco. Altro?" },
              {
                sp: "TY",
                choices: ["Anche il pane.", "Anche del pane, grazie.", "Anche un pane grazie."],
                a: 1
              }
            ]
          },
          {
            t: "cloze",
            text: "Compro {{1}} pane, {{2}} acqua e {{3}} pomodori.",
            gaps: [["del"], ["dell'"], ["dei"]]
          },
          { t: "listen", it: "Vorrei un chilo di pomodori e un po' di basilico." },
          { t: "speak", it: "Due etti di formaggio, per favore. Basta così." }
        ]
      }
    ],
    test: {
      id: "a1-u03-test",
      tags: ["g-presente", "g-preposizioni"],
      cefr: "A1",
      titleIt: "Test — L'aperitivo",
      exercises: [
        { t: "fill", a: ["piacciono"] },
        { t: "fill", a: ["piace"] },
        { t: "mcq", a: 1 },
        { t: "conj", verb: "prendere", tense: "pres", persons: [0, 2, 5] },
        { t: "conj", verb: "capire", tense: "pres", persons: [0, 3, 5] },
        { t: "fill", a: ["ci sono"] },
        {
          t: "gender",
          opts: ["del", "dello", "dell'", "della", "dei", "delle"],
          items: [
            { it: "acqua", a: "dell'" },
            { it: "carne", a: "della" },
            { it: "pane", a: "del" },
            { it: "mele", a: "delle" }
          ]
        },
        { t: "trans", dir: "toIt", a: ["preferisco il vino bianco", "preferisco vino bianco"] },
        { t: "listen", it: "Ci sono delle olive e del formaggio." },
        { t: "speak", it: "Mi piace molto l'aperitivo italiano." }
      ]
    }
  }
]);
