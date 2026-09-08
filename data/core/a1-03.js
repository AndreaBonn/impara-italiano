/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/a1-03.js
   Powstało z data/a1-03.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("A1", [
  {
    id: "a1-u08",
    icon: "👥",
    titleIt: "Le persone",
    lessons: [
      {
        id: "a1-u08-l1",
        cefr: "A1",
        titleIt: "Mia madre, il mio capo",
        grammar: {
          examples: [
            { it: "Mia sorella abita a Bari." },
            { it: "Le mie sorelle abitano a Bari." },
            { it: "Il mio capo è molto esigente." },
            { it: "La loro casa è vicino al parco." },
            { it: "I suoi amici sono simpatici." },
            { it: "È il libro di lei, non di lui." }
          ]
        },
        vocab: [
          { it: "la madre / il padre" },
          { it: "i genitori" },
          { it: "il fratello / la sorella" },
          { it: "il figlio / la figlia" },
          { it: "il marito / la moglie" },
          { it: "il compagno / la compagna" },
          { it: "il collega / la collega" },
          { it: "il capo" },
          { it: "il vicino di casa" },
          { it: "il coinquilino" },
          { it: "il migliore amico" },
          { it: "il/la nipote" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["la"] },
          { t: "fill", a: ["la"] },
          {
            t: "gender",
            opts: ["il mio", "la mia", "i miei", "le mie"],
            items: [
              { it: "libro", a: "il mio" },
              { it: "macchina", a: "la mia" },
              { it: "genitori", a: "i miei" },
              { it: "sorelle", a: "le mie" }
            ]
          },
          { t: "mcq", a: 2 },
          { t: "trans", dir: "pl-it", a: ["il mio capo è molto esigente"] },
          {
            t: "cloze",
            text: "{{1}} mio fratello lavora con {{2}} miei genitori.",
            gaps: [["-", ""], ["i"]]
          },
          { t: "listen", it: "Mia sorella e i suoi figli abitano a Palermo." },
          { t: "speak", it: "Il mio migliore amico si chiama Paolo." }
        ]
      },
      {
        id: "a1-u08-l2",
        cefr: "A1",
        titleIt: "Com'è fatto?",
        grammar: {
          examples: [
            { it: "Com'è tuo fratello? — È alto e magro." },
            { it: "Ha i capelli lunghi e lisci." },
            { it: "Ha gli occhi verdi e porta gli occhiali." },
            { it: "È una donna di mezza età." },
            { it: "Assomiglia a sua madre." },
            { it: "Ha un bel sorriso." }
          ]
        },
        vocab: [
          { it: "alto / basso" },
          { it: "magro / robusto" },
          { it: "i capelli" },
          { it: "biondo / castano / nero" },
          { it: "lisci / ricci" },
          { it: "gli occhi" },
          { it: "azzurri / verdi / marroni" },
          { it: "gli occhiali" },
          { it: "la barba" },
          { it: "il sorriso" },
          { it: "assomigliare a" },
          { it: "di media statura" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["gli"] },
          { t: "fill", a: ["è"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [
              { it: "i capelli ricci" },
              { it: "di media statura" },
              { it: "porta gli occhiali" },
              { it: "assomiglia a" }
            ]
          },
          {
            t: "cloze",
            text: "Mio padre {{1}} alto e {{2}} i capelli grigi. {{3}} gli occhiali.",
            gaps: [["è"], ["ha"], ["porta"]]
          },
          { t: "trans", dir: "pl-it", a: ["ha i capelli lunghi e ricci"] },
          {
            t: "order",
            tokens: ["Com'è", "tua", "sorella?", "È", "bassa", "e", "sportiva"],
            a: ["com'è tua sorella è bassa e sportiva"]
          },
          { t: "listen", it: "Ha i capelli castani, gli occhi verdi e un bel sorriso." },
          { t: "speak", it: "Mio fratello è alto e ha i capelli neri." }
        ]
      },
      {
        id: "a1-u08-l3",
        cefr: "A1",
        titleIt: "Simpatico o antipatico?",
        grammar: {
          examples: [
            { it: "Il mio collega è molto simpatico." },
            { it: "Secondo me è una persona generosa." },
            { it: "È bravissima in matematica." },
            { it: "È un po' timido all'inizio." },
            { it: "Non è il mio tipo, ma è gentile." },
            { it: "Mi sta simpatico." }
          ]
        },
        vocab: [
          { it: "simpatico / antipatico" },
          { it: "gentile" },
          { it: "bravo" },
          { it: "socievole" },
          { it: "timido" },
          { it: "generoso" },
          { it: "egoista" },
          { it: "tranquillo" },
          { it: "divertente" },
          { it: "noioso" },
          { it: "secondo me" },
          { it: "mi sta simpatico" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["gentile"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "simpatico" }, { it: "generoso" }, { it: "socievole" }, { it: "tranquillo" }]
          },
          { t: "trans", dir: "pl-it", a: ["secondo me è una persona tranquilla"] },
          {
            t: "cloze",
            text: "Il mio coinquilino è {{1}} me una persona molto {{2}}: parla con tutti.",
            gaps: [["secondo"], ["socievole"]]
          },
          {
            t: "order",
            tokens: ["All'inizio", "è", "un", "po'", "timido"],
            a: ["all'inizio è un po' timido"]
          },
          { t: "listen", it: "Secondo me è una persona generosa e divertente." },
          { t: "speak", it: "Il mio collega è molto simpatico, mi sta simpatico." }
        ]
      },
      {
        id: "a1-u08-l4",
        cefr: "A1",
        titleIt: "Più alto di te",
        grammar: {
          examples: [
            { it: "Milano è più cara di Bologna." },
            { it: "Mio fratello è meno paziente di me." },
            { it: "Questo vino è migliore dell'altro." },
            { it: "È la peggiore giornata della settimana." },
            { it: "Lavoro più a Roma che a Milano." },
            { it: "Sei gentile come tua madre." }
          ]
        },
        vocab: [
          { it: "più… di" },
          { it: "meno… di" },
          { it: "come" },
          { it: "migliore / peggiore" },
          { it: "il più… di" },
          { it: "paziente" },
          { it: "veloce / lento" },
          { it: "facile / difficile" },
          { it: "giovane / anziano" },
          { it: "uguale" },
          { it: "diverso da" },
          { it: "soprattutto" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["di"] },
          { t: "fill", a: ["migliore"] },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "pl-it", a: ["milano è più cara di bologna", "milano è più caro di bologna"] },
          {
            t: "cloze",
            text: "Roma è più grande {{1}} Firenze, ma è più facile parlare {{2}} scrivere in italiano.",
            gaps: [["di"], ["che"]]
          },
          {
            t: "order",
            tokens: ["Questo", "vino", "è", "migliore", "dell'altro"],
            a: ["questo vino è migliore dell'altro"]
          },
          { t: "listen", it: "Mio fratello è meno paziente di me." },
          { t: "speak", it: "Questa città è più tranquilla di Milano." }
        ]
      }
    ],
    test: {
      id: "a1-u08-test",
      cefr: "A1",
      titleIt: "Test — Le persone",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["i"] },
        { t: "fill", a: ["la"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["gli"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["peggiore"] },
        { t: "listen", it: "Mia sorella è più giovane di me e ha i capelli ricci." },
        { t: "speak", it: "Secondo me è una persona molto gentile." }
      ]
    }
  },
  {
    id: "a1-u09",
    icon: "🎬",
    titleIt: "Tempo libero",
    lessons: [
      {
        id: "a1-u09-l1",
        cefr: "A1",
        titleIt: "Che fai nel weekend?",
        grammar: {
          examples: [
            { it: "Nel weekend faccio una passeggiata in centro." },
            { it: "Gioco a tennis con mia sorella." },
            { it: "Suono la chitarra, ma male." },
            { it: "Ti va di andare al cinema stasera?" },
            { it: "Volentieri! A che ora?" },
            { it: "Mi dispiace, stasera non posso." }
          ]
        },
        vocab: [
          { it: "il tempo libero" },
          { it: "fare sport" },
          { it: "la palestra" },
          { it: "la piscina" },
          { it: "giocare a calcio" },
          { it: "suonare la chitarra" },
          { it: "ballare" },
          { it: "leggere un libro" },
          { it: "guardare una serie" },
          { it: "ti va di…?" },
          { it: "volentieri" },
          { it: "magari un'altra volta" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["faccio"] },
          { t: "fill", a: ["ti"] },
          {
            t: "match",
            pairs: [{ it: "giocare a" }, { it: "suonare" }, { it: "fare" }, { it: "andare in" }]
          },
          {
            t: "trans",
            dir: "pl-it",
            a: ["ti va di andare al cinema stasera", "ti va di andare al cinema stasera?"]
          },
          {
            t: "cloze",
            text: "Il sabato {{1}} a tennis, la domenica {{2}} la chitarra e {{3}} una passeggiata.",
            gaps: [["gioco"], ["suono"], ["faccio"]]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ciao! Ti va di venire al concerto sabato?" },
              {
                sp: "TY",
                choices: ["Volentieri! A che ora?", "Mi dispiace, non posso.", "Prego, a che ora?"],
                a: 0
              },
              { sp: "A", it: "Alle nove, ma ci troviamo alle otto e mezza in piazza." },
              {
                sp: "TY",
                choices: [
                  "Perfetto, ci vediamo lì!",
                  "Non c'è male, ciao.",
                  "Va bene, il conto per favore."
                ],
                a: 0
              }
            ]
          },
          { t: "listen", it: "Nel tempo libero faccio palestra e guardo serie tv." },
          { t: "speak", it: "Ti va di fare una passeggiata in centro?" }
        ]
      },
      {
        id: "a1-u09-l2",
        cefr: "A1",
        titleIt: "Che tempo fa?",
        grammar: {
          examples: [
            { it: "Oggi fa caldo, andiamo al mare." },
            { it: "In inverno a Milano c'è spesso nebbia." },
            { it: "Domani piove, restiamo a casa." },
            { it: "Che tempo fa a Roma? — Bellissimo!" },
            { it: "Ho freddo, chiudi la finestra." },
            { it: "In primavera è la stagione migliore." }
          ]
        },
        vocab: [
          { it: "che tempo fa?" },
          { it: "fa caldo / fa freddo" },
          { it: "c'è il sole" },
          { it: "piove / nevica" },
          { it: "c'è vento / nebbia" },
          { it: "la pioggia / la neve" },
          { it: "le nuvole" },
          { it: "il grado" },
          { it: "la primavera / l'estate" },
          { it: "l'autunno / l'inverno" },
          { it: "l'ombrello" },
          { it: "la previsione del tempo" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["c'è", "ce"] },
          { t: "fill", a: ["piove"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "nevica" }, { it: "c'è nebbia" }, { it: "fa brutto tempo" }, { it: "l'ombrello" }]
          },
          {
            t: "cloze",
            text: "Domani {{1}} freddo, {{2}} vento e nel pomeriggio {{3}}.",
            gaps: [["fa"], ["c'è", "ce"], ["piove"]]
          },
          { t: "trans", dir: "pl-it", a: ["che tempo fa a roma", "che tempo fa a roma?"] },
          {
            t: "order",
            tokens: ["In", "inverno", "a", "Milano", "c'è", "spesso", "nebbia"],
            a: ["in inverno a milano c'è spesso nebbia"]
          },
          { t: "listen", it: "Oggi fa bel tempo, ci sono venticinque gradi." },
          { t: "speak", it: "Che tempo fa oggi? Fa freddo e piove." }
        ]
      },
      {
        id: "a1-u09-l3",
        cefr: "A1",
        titleIt: "Sto lavorando",
        grammar: {
          examples: [
            { it: "Che stai facendo? — Sto studiando." },
            { it: "Non posso parlare, sto guidando." },
            { it: "Stanno arrivando, aspetta cinque minuti." },
            { it: "Ti sto aspettando davanti al bar." },
            { it: "Sto per uscire." },
            { it: "Domani vado a Roma." }
          ]
        },
        vocab: [
          { it: "stare + gerundio" },
          { it: "stare per + bezokolicznik" },
          { it: "adesso / ora" },
          { it: "in questo momento" },
          { it: "aspettare" },
          { it: "guidare" },
          { it: "scherzare" },
          { it: "arrivare" },
          { it: "uscire" },
          { it: "sbrigarsi" },
          { it: "un attimo" },
          { it: "sono in ritardo" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["facendo"] },
          { t: "fill", a: ["dormendo"] },
          { t: "fill", a: ["stanno"] },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "pl-it",
            a: ["non posso parlare sto guidando", "non posso parlare, sto guidando"]
          },
          {
            t: "cloze",
            text: "— Che {{1}} facendo? — {{2}} uscendo di casa, {{3}} per arrivare.",
            gaps: [["stai"], ["sto"], ["sto"]]
          },
          {
            t: "order",
            tokens: ["Ti", "sto", "aspettando", "davanti", "al", "bar"],
            a: ["ti sto aspettando davanti al bar"]
          },
          { t: "listen", it: "Scusa, sto per entrare in riunione." },
          { t: "speak", it: "Che stai facendo? — Sto studiando italiano." }
        ]
      },
      {
        id: "a1-u09-l4",
        cefr: "A1",
        titleIt: "Andiamo al cinema",
        grammar: {
          examples: [
            { it: "Ieri sera sono andata al cinema." },
            { it: "Il film era in versione originale." },
            { it: "Mi è piaciuta molto la colonna sonora." },
            { it: "Due biglietti ridotti, per favore." },
            { it: "Che genere preferisci?" },
            { it: "Te lo consiglio davvero." }
          ]
        },
        vocab: [
          { it: "il film" },
          { it: "lo spettacolo" },
          { it: "il biglietto intero / ridotto" },
          { it: "la versione originale (V.O.)" },
          { it: "i sottotitoli" },
          { it: "il regista" },
          { it: "l'attore / l'attrice" },
          { it: "la colonna sonora" },
          { it: "il concerto" },
          { it: "la mostra" },
          { it: "consigliare" },
          { it: "com'era?" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["piaciuto"] },
          { t: "fill", a: ["ridotti"] },
          {
            t: "match",
            pairs: [
              { it: "il regista" },
              { it: "la colonna sonora" },
              { it: "i sottotitoli" },
              { it: "la mostra" }
            ]
          },
          {
            t: "trans",
            dir: "pl-it",
            a: ["mi è piaciuto molto te lo consiglio", "mi è piaciuto molto, te lo consiglio"]
          },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "— Due biglietti per lo {{1}} delle nove. — Interi o {{2}}? — Uno intero e uno {{3}}.",
            gaps: [["spettacolo"], ["ridotti"], ["ridotto"]]
          },
          {
            t: "order",
            tokens: ["Che", "genere", "di", "film", "preferisci?"],
            a: ["che genere di film preferisci"]
          },
          { t: "listen", it: "Il concerto mi è piaciuto molto, soprattutto la seconda parte." },
          { t: "speak", it: "Ti va di andare a vedere una mostra domenica?" }
        ]
      }
    ],
    test: {
      id: "a1-u09-test",
      cefr: "A1",
      titleIt: "Test — Tempo libero",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["fa"] },
        { t: "fill", a: ["c'è", "ce"] },
        { t: "fill", a: ["bevendo"] },
        { t: "fill", a: ["stanno"] },
        { t: "mcq", a: 1 },
        {
          t: "order",
          tokens: ["Ti", "va", "di", "fare", "una", "passeggiata?"],
          a: ["ti va di fare una passeggiata"]
        },
        { t: "listen", it: "Sto uscendo adesso, fa freddo, prendo l'ombrello." },
        { t: "speak", it: "Nel weekend gioco a tennis e faccio una passeggiata." }
      ]
    }
  },
  {
    id: "a1-u10",
    icon: "🕰️",
    titleIt: "Uno sguardo indietro",
    lessons: [
      {
        id: "a1-u10-l1",
        cefr: "A1",
        titleIt: "Ho mangiato, ho visto",
        grammar: {
          examples: [
            { it: "Ieri ho mangiato una pizza buonissima." },
            { it: "Hai visto il film di ieri sera?" },
            { it: "Abbiamo prenotato un tavolo per otto." },
            { it: "Non ho capito, puoi ripetere?" },
            { it: "Che cosa avete fatto nel weekend?" },
            { it: "Ho già pagato." }
          ]
        },
        vocab: [
          { it: "ieri" },
          { it: "l'altro ieri" },
          { it: "la settimana scorsa" },
          { it: "il mese scorso" },
          { it: "due giorni fa" },
          { it: "già" },
          { it: "non… ancora" },
          { it: "poi / dopo" },
          { it: "prima" },
          { it: "fare → fatto" },
          { it: "vedere → visto" },
          { it: "dire → detto" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["parlato"] },
          { t: "fill", a: ["creduto"] },
          { t: "fill", a: ["finito"] },
          { t: "fill", a: ["ho mangiato"] },
          { t: "match", pairs: [{ it: "fare" }, { it: "vedere" }, { it: "scrivere" }, { it: "prendere" }] },
          {
            t: "cloze",
            text: "Sabato {{1}} visto un film e poi {{2}} mangiato fuori. Domenica non {{3}} fatto niente.",
            gaps: [["ho"], ["ho"], ["ho"]]
          },
          { t: "trans", dir: "pl-it", a: ["non ho capito puoi ripetere", "non ho capito, puoi ripetere?"] },
          { t: "listen", it: "La settimana scorsa abbiamo visitato Firenze." },
          { t: "speak", it: "Ieri sera ho letto un libro molto interessante." }
        ]
      },
      {
        id: "a1-u10-l2",
        cefr: "A1",
        titleIt: "Sono andato, sono andata",
        grammar: {
          examples: [
            { it: "Sono partita alle sette di mattina." },
            { it: "Siamo arrivati in ritardo." },
            { it: "Marco è nato nel 1990." },
            { it: "Ci siamo divertiti moltissimo." },
            { it: "Il film è finito alle undici." },
            { it: "Ho finito il lavoro alle sei." }
          ]
        },
        vocab: [
          { it: "andare → andato" },
          { it: "venire → venuto" },
          { it: "arrivare → arrivato" },
          { it: "partire → partito" },
          { it: "tornare → tornato" },
          { it: "uscire → uscito" },
          { it: "entrare → entrato" },
          { it: "nascere → nato" },
          { it: "restare → restato" },
          { it: "diventare → diventato" },
          { it: "divertirsi → divertito" },
          { it: "il viaggio" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["arrivate"] },
          { t: "fill", a: ["nato"] },
          { t: "multi", a: [0, 2, 4] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "{{1}} partita venerdì e {{2}} arrivata a Napoli la sera. Mi {{3}} divertita molto.",
            gaps: [["sono"], ["sono"], ["sono"]]
          },
          { t: "order", tokens: ["Siamo", "arrivati", "in", "ritardo"], a: ["siamo arrivati in ritardo"] },
          { t: "listen", it: "Sono nata a Varsavia, ma sono cresciuta a Cracovia." },
          { t: "speak", it: "Ieri sono andata al cinema con un'amica." }
        ]
      },
      {
        id: "a1-u10-l3",
        cefr: "A1",
        titleIt: "Il mio weekend",
        grammar: {
          examples: [
            { it: "Sabato mattina ho fatto la spesa al mercato." },
            { it: "Poi sono andata in palestra." },
            { it: "La sera siamo usciti con degli amici." },
            { it: "Alla fine siamo tornati a casa tardi." },
            { it: "Com'è andata la riunione? — Non male." },
            { it: "Non ho ancora finito." }
          ]
        },
        vocab: [
          { it: "prima" },
          { it: "poi" },
          { it: "dopo" },
          { it: "alla fine" },
          { it: "mentre" },
          { it: "com'è andata?" },
          { it: "niente di che" },
          { it: "un disastro" },
          { it: "è stato bello" },
          { it: "fare la spesa" },
          { it: "fare shopping" },
          { it: "riposarsi" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["mai"] },
          { t: "fill", a: ["prima"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Sabato {{1}} fatto la spesa, {{2}} sono andata in palestra e la sera {{3}} usciti con amici.",
            gaps: [["ho"], ["poi"], ["siamo"]]
          },
          { t: "trans", dir: "pl-it", a: ["non ho ancora finito"] },
          {
            t: "order",
            tokens: ["Alla", "fine", "siamo", "tornati", "a", "casa", "tardi"],
            a: ["alla fine siamo tornati a casa tardi"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ciao! Com'è andato il weekend?" },
              {
                sp: "TY",
                choices: [
                  "Niente di che, sono stato a casa.",
                  "Niente di che, ho stato a casa.",
                  "Nessuno, sono casa."
                ],
                a: 0
              },
              { sp: "A", it: "Io invece sono andato in montagna. Bellissimo!" },
              { sp: "TY", choices: ["Con chi sei andato?", "Chi sei andato?", "Con chi hai andato?"], a: 0 }
            ]
          },
          { t: "listen", it: "Prima ho fatto la spesa, poi mi sono riposata." },
          { t: "speak", it: "Com'è andata? — Bene, è stato bello." }
        ]
      },
      {
        id: "a1-u10-l4",
        cefr: "A1",
        titleIt: "Ripasso generale A1",
        vocab: [
          { it: "ripassare" },
          { it: "l'esercizio" },
          { it: "l'errore" },
          { it: "la regola" },
          { it: "il livello" },
          { it: "migliorare" },
          { it: "sono pronto/a" },
          { it: "ce la faccio" }
        ],
        exercises: [
          { t: "conj", verb: "essere", tense: "pres", persons: [0, 2, 3, 5] },
          { t: "conj", verb: "avere", tense: "pres", persons: [1, 3, 5] },
          { t: "conj", verb: "capire", tense: "pres", persons: [0, 3, 5] },
          {
            t: "gender",
            opts: ["il", "lo", "la", "l'", "i", "gli", "le"],
            items: [
              { it: "zaino", a: "lo" },
              { it: "amica", a: "l'" },
              { it: "studenti", a: "gli" },
              { it: "case", a: "le" },
              { it: "treno", a: "il" }
            ]
          },
          {
            t: "cloze",
            text: "{{1}} chiamo Kasia, {{2}} polacca e {{3}} a Bologna da due anni. {{4}} l'insegnante.",
            gaps: [["mi"], ["sono"], ["abito"], ["faccio"]]
          },
          { t: "fill", a: ["piacciono"] },
          { t: "fill", a: ["al"] },
          { t: "fill", a: ["ho mangiato"] },
          { t: "fill", a: ["sono andata"] },
          {
            t: "order",
            tokens: ["Ieri", "sera", "siamo", "andati", "al", "ristorante", "con", "gli", "amici"],
            a: ["ieri sera siamo andati al ristorante con gli amici"]
          },
          { t: "listen", it: "Mi sono svegliata presto e ho fatto colazione al bar." },
          { t: "speak", it: "Mi chiamo Anna, sono polacca e abito a Firenze da un anno." }
        ]
      }
    ],
    test: {
      id: "a1-u10-test",
      cefr: "A1",
      titleIt: "Esame finale A1",
      exercises: [
        { t: "conj", verb: "andare", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
        { t: "mcq", a: 1 },
        {
          t: "gender",
          opts: ["il", "lo", "la", "l'", "i", "gli", "le"],
          items: [
            { it: "studente", a: "lo" },
            { it: "acqua", a: "l'" },
            { it: "amici", a: "gli" },
            { it: "stazione", a: "la" }
          ]
        },
        { t: "fill", a: ["piace"] },
        { t: "fill", a: ["alzarmi"] },
        { t: "fill", a: ["sono"] },
        { t: "fill", a: ["in"] },
        { t: "fill", a: ["c'è", "ce"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["siamo andati"] },
        {
          t: "cloze",
          text: "Sabato {{1}} fatto la spesa, {{2}} sono andata in palestra e la sera {{3}} uscita con amici.",
          gaps: [["ho"], ["poi"], ["sono"]]
        },
        { t: "speak", it: "Buongiorno, vorrei prenotare un tavolo per due alle otto." }
      ]
    }
  }
]);
