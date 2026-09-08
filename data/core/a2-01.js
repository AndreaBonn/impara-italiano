/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/a2-01.js
   Powstało z data/a2-01.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("A2", [
  {
    id: "a2-u01",
    icon: "📻",
    titleIt: "Ieri e oggi",
    lessons: [
      {
        id: "a2-u01-l1",
        cefr: "A2",
        titleIt: "Da bambino abitavo…",
        grammar: {
          examples: [
            { it: "Da bambina passavo le estati dai nonni." },
            { it: "Era una giornata grigia e faceva freddo." },
            { it: "Prima fumavo, adesso ho smesso." },
            { it: "Non sapevo che abitassi qui." },
            { it: "Mentre studiavo, ascoltavo la radio." },
            { it: "Che lavoro faceva tuo nonno?" }
          ]
        },
        vocab: [
          { it: "da bambino / da bambina" },
          { it: "una volta" },
          { it: "prima" },
          { it: "di solito" },
          { it: "ogni estate" },
          { it: "spesso" },
          { it: "il ricordo" },
          { it: "l'infanzia" },
          { it: "i nonni" },
          { it: "la campagna" },
          { it: "smettere di" },
          { it: "mi mancava" }
        ],
        exercises: [
          { t: "conj", verb: "parlare", tense: "imperf", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "essere", tense: "imperf", persons: [0, 2, 3, 5] },
          { t: "conj", verb: "fare", tense: "imperf", persons: [0, 2, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["abitavo"] },
          { t: "fill", a: ["era"] },
          {
            t: "cloze",
            text: "Da piccola {{1}} le estati dai nonni. La casa {{2}} grande e ogni sera {{3}} tutti insieme.",
            gaps: [["passavo"], ["era"], ["mangiavamo"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["prima fumavo adesso ho smesso", "prima fumavo, adesso ho smesso"]
          },
          { t: "listen", it: "Da bambino giocavo a calcio ogni pomeriggio." },
          { t: "speak", it: "Da piccola abitavo in una casa vicino al mare." }
        ]
      },
      {
        id: "a2-u01-l2",
        cefr: "A2",
        titleIt: "Mentre uscivo, è squillato",
        grammar: {
          examples: [
            { it: "Mentre uscivo, è squillato il telefono." },
            { it: "Ieri ho lavorato per tre ore." },
            { it: "Da giovane lavoravo in un bar." },
            { it: "Ho conosciuto mia moglie a un concerto." },
            { it: "Non sapevo che fossi qui." },
            { it: "All'improvviso è caduta la corrente." }
          ]
        },
        vocab: [
          { it: "mentre" },
          { it: "all'improvviso" },
          { it: "di colpo" },
          { it: "l'anno scorso" },
          { it: "per tre ore" },
          { it: "squillare" },
          { it: "cadere" },
          { it: "succedere" },
          { it: "conoscere / ho conosciuto" },
          { it: "sapere / ho saputo" },
          { it: "che cosa è successo?" },
          { it: "per fortuna" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Mentre {{1}} (mangiare, io), {{2}} (arrivare) Marco.",
            gaps: [["mangiavo"], ["è arrivato"]]
          },
          {
            t: "cloze",
            text: "Ieri {{1}} (lavorare, io) per tre ore, poi {{2}} (uscire) con gli amici.",
            gaps: [["ho lavorato"], ["sono uscito", "sono uscita"]]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 4] },
          { t: "trans", dir: "toIt", a: ["non sapevo che abitavi qui", "non sapevo che abitassi qui"] },
          {
            t: "cloze",
            text: "{{1}} (essere) una giornata fredda. {{2}} (piovere) e io non {{3}} (avere) l'ombrello. All'improvviso {{4}} (arrivare) l'autobus.",
            gaps: [["era"], ["pioveva"], ["avevo"], ["è arrivato"]]
          },
          { t: "listen", it: "Mentre tornavo a casa, ho incontrato una vecchia amica." },
          {
            t: "speak",
            it: "Da bambino andavo al mare ogni estate, ma l'anno scorso sono andato in montagna."
          }
        ]
      },
      {
        id: "a2-u01-l3",
        cefr: "A2",
        titleIt: "Com'era la tua città",
        grammar: {
          examples: [
            { it: "Prima qui c'era un mercato, adesso c'è un parcheggio." },
            { it: "La città è cambiata moltissimo." },
            { it: "Non ci sono più i negozi di una volta." },
            { it: "Invece il quartiere è diventato più vivo." },
            { it: "Quando ero piccolo si giocava in strada." },
            { it: "Adesso è tutto diverso." }
          ]
        },
        vocab: [
          { it: "c'era / c'erano" },
          { it: "cambiare" },
          { it: "è cambiato molto" },
          { it: "invece" },
          { it: "non… più" },
          { it: "una volta" },
          { it: "il quartiere" },
          { it: "il traffico" },
          { it: "affollato" },
          { it: "tranquillo" },
          { it: "diventare" },
          { it: "meglio / peggio" }
        ],
        exercises: [
          { t: "fill", a: ["c'era", "cera"] },
          { t: "fill", a: ["c'erano", "cerano"] },
          { t: "fill", a: ["più"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Prima qui {{1}} un cinema, adesso {{2}} un supermercato. Il quartiere {{3}} cambiato molto.",
            gaps: [["c'era", "cera"], ["c'è", "ce"], ["è"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["non ci sono più i negozi di una volta", "non ci sono più i negozi di un tempo"]
          },
          {
            t: "order",
            tokens: ["Quando", "ero", "piccolo", "si", "giocava", "in", "strada"],
            a: ["quando ero piccolo si giocava in strada"]
          },
          {
            t: "match",
            pairs: [{ it: "invece" }, { it: "affollato" }, { it: "diventare" }, { it: "il traffico" }]
          },
          { t: "listen", it: "Vent'anni fa c'erano meno macchine e più negozi di quartiere." },
          { t: "speak", it: "La mia città è cambiata molto negli ultimi dieci anni." }
        ]
      },
      {
        id: "a2-u01-l4",
        cefr: "A2",
        titleIt: "Ti ricordi?",
        grammar: {
          examples: [
            { it: "Quando sono arrivata, la festa era già finita." },
            { it: "Non sono uscito perché avevo promesso di lavorare." },
            { it: "Ti ricordi quando siamo andati in Sicilia?" },
            { it: "Certo che me lo ricordo!" },
            { it: "Ma dai, non ci credo!" },
            { it: "E poi cosa è successo?" }
          ]
        },
        vocab: [
          { it: "ti ricordi?" },
          { it: "me lo ricordo" },
          { it: "dimenticare" },
          { it: "davvero?" },
          { it: "ma dai!" },
          { it: "che bello!" },
          { it: "mamma mia!" },
          { it: "e poi?" },
          { it: "che è successo?" },
          { it: "avevo già…" },
          { it: "appena" },
          { it: "una brutta figura" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["era"] },
          { t: "fill", a: ["avevo"] },
          {
            t: "match",
            pairs: [{ it: "ma dai!" }, { it: "davvero?" }, { it: "e poi?" }, { it: "che bello!" }]
          },
          {
            t: "cloze",
            text: "Quando siamo usciti, {{1}} già smesso di piovere, ma la strada {{2}} ancora bagnata.",
            gaps: [["aveva"], ["era"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["ti ricordi quando siamo andati in sicilia", "ti ricordi quando siamo andati in sicilia?"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ad agosto sono andata in Puglia con la mia famiglia." },
              {
                sp: "TY",
                choices: ["Che bello! Com'è andata?", "Va bene. Ciao.", "Davvero? Quanto costa?"],
                a: 0
              },
              { sp: "A", it: "Benissimo, ma il primo giorno abbiamo perso le valigie." },
              { sp: "TY", choices: ["Mamma mia! E poi?", "Che bello! E poi?", "Non c'è male."], a: 0 },
              { sp: "A", it: "Le hanno ritrovate dopo due giorni. Per fortuna!" }
            ]
          },
          {
            t: "order",
            tokens: ["Non", "sono", "uscito", "perché", "avevo", "promesso", "di", "lavorare"],
            a: ["non sono uscito perché avevo promesso di lavorare"]
          },
          { t: "listen", it: "Quando sono tornato, mia sorella era già andata via." },
          { t: "speak", it: "Ti ricordi quando eravamo compagni di classe?" }
        ]
      }
    ],
    test: {
      id: "a2-u01-test",
      cefr: "A2",
      titleIt: "Test — Ieri e oggi",
      exercises: [
        { t: "conj", verb: "essere", tense: "imperf", persons: [0, 2, 3, 5] },
        { t: "conj", verb: "fare", tense: "imperf", persons: [0, 2] },
        {
          t: "cloze",
          text: "Mentre {{1}} (uscire, io), {{2}} (squillare) il telefono.",
          gaps: [["uscivo"], ["è squillato"]]
        },
        { t: "cloze", text: "Ieri {{1}} (lavorare, io) per quattro ore.", gaps: [["ho lavorato"]] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["c'era", "cera"] },
        { t: "fill", a: ["più"] },
        { t: "fill", a: ["era"] },
        { t: "listen", it: "Da bambina passavo ogni estate al mare con i nonni." },
        { t: "speak", it: "Mentre tornavo a casa ho incontrato un vecchio amico." }
      ]
    }
  },
  {
    id: "a2-u02",
    icon: "🚆",
    titleIt: "In viaggio",
    lessons: [
      {
        id: "a2-u02-l1",
        cefr: "A2",
        titleIt: "Alla stazione",
        grammar: {
          examples: [
            { it: "Vorrei un biglietto per Napoli per domani mattina." },
            { it: "Prima o seconda classe?" },
            { it: "C'è un diretto o devo cambiare?" },
            { it: "Il treno delle 14:35 è soppresso." },
            { it: "Questo posto è occupato?" },
            { it: "Scusi, questa è la carrozza 5?" }
          ]
        },
        vocab: [
          { it: "il biglietto" },
          { it: "andata e ritorno" },
          { it: "solo andata" },
          { it: "il binario" },
          { it: "la carrozza" },
          { it: "il posto" },
          { it: "cambiare treno" },
          { it: "la coincidenza" },
          { it: "il ritardo" },
          { it: "soppresso" },
          { it: "convalidare" },
          { it: "il capotreno" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["binario"] },
          { t: "fill", a: ["andata"] },
          {
            t: "match",
            pairs: [
              { it: "la carrozza" },
              { it: "la coincidenza" },
              { it: "il ritardo" },
              { it: "convalidare" }
            ]
          },
          { t: "trans", dir: "toIt", a: ["devo cambiare treno", "devo cambiare treno?", "devo cambiare?"] },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Buongiorno, mi dica." },
              {
                sp: "TY",
                choices: [
                  "Un biglietto per Firenze per oggi pomeriggio.",
                  "Vorrei Firenze oggi.",
                  "Un binario per Firenze."
                ],
                a: 0
              },
              { sp: "A", it: "Regionale o Frecciarossa?" },
              {
                sp: "TY",
                choices: [
                  "Quanto tempo ci vuole in più con il regionale?",
                  "Quanto costa il binario?",
                  "Devo convalidare il Frecciarossa?"
                ],
                a: 0
              },
              { sp: "A", it: "Un'ora e mezza in più. Il Freccia costa quarantadue euro." },
              {
                sp: "TY",
                choices: [
                  "Prendo il Frecciarossa. Da quale binario parte?",
                  "Prendo il regionale, grazie.",
                  "Prendo il Frecciarossa. Devo convalidare?"
                ],
                a: 0
              }
            ]
          },
          {
            t: "cloze",
            text: "Il treno regionale per Bologna viaggia con un {{1}} di venti minuti. Cambio {{2}}: partirà dal binario 8.",
            gaps: [["ritardo"], ["binario"]]
          },
          { t: "listen", it: "Il treno per Roma parte dal binario dodici con dieci minuti di ritardo." },
          { t: "speak", it: "Scusi, devo convalidare questo biglietto?" }
        ]
      },
      {
        id: "a2-u02-l2",
        cefr: "A2",
        titleIt: "Partirò domani",
        grammar: {
          examples: [
            { it: "L'anno prossimo andrò a vivere in Italia." },
            { it: "Ti chiamerò appena arrivo." },
            { it: "Domani partiamo alle sette." },
            { it: "Che ore sono? — Saranno le tre." },
            { it: "Dove sarà il mio biglietto?" },
            { it: "Non ci sarà tempo per tutto." }
          ]
        },
        vocab: [
          { it: "domani" },
          { it: "dopodomani" },
          { it: "la prossima settimana" },
          { it: "fra tre giorni" },
          { it: "appena" },
          { it: "forse" },
          { it: "sicuramente" },
          { it: "probabilmente" },
          { it: "il progetto" },
          { it: "trasferirsi" },
          { it: "prenotare in anticipo" },
          { it: "vedremo" }
        ],
        exercises: [
          { t: "conj", verb: "partire", tense: "futuro", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "essere", tense: "futuro", persons: [0, 2, 5] },
          { t: "conj", verb: "andare", tense: "futuro", persons: [0, 2, 3] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["avrò"] },
          { t: "fill", a: ["verranno"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "L'anno prossimo {{1}} (trasferirsi, io) a Bologna e {{2}} (cercare) lavoro lì.",
            gaps: [["mi trasferirò"], ["cercherò"]]
          },
          { t: "listen", it: "Ti chiamerò appena arrivo alla stazione." },
          { t: "speak", it: "L'anno prossimo andrò a vivere in Italia." }
        ]
      },
      {
        id: "a2-u02-l3",
        cefr: "A2",
        titleIt: "Ho una prenotazione",
        grammar: {
          examples: [
            { it: "Buonasera, ho una prenotazione per tre notti." },
            { it: "Un documento, prego." },
            { it: "La tassa di soggiorno è due euro a persona a notte." },
            { it: "C'è il wifi in camera?" },
            { it: "Posso lasciare le valigie dopo il check-out?" },
            { it: "La camera è al terzo piano, l'ascensore è là." }
          ]
        },
        vocab: [
          { it: "la prenotazione" },
          { it: "la camera singola / doppia" },
          { it: "matrimoniale" },
          { it: "la chiave / la scheda" },
          { it: "il piano" },
          { it: "l'ascensore" },
          { it: "l'asciugamano" },
          { it: "il lenzuolo" },
          { it: "la tassa di soggiorno" },
          { it: "non funziona" },
          { it: "manca / mancano" },
          { it: "il check-out" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["prenotazione"] },
          { t: "fill", a: ["funziona"] },
          { t: "fill", a: ["mancano"] },
          {
            t: "match",
            pairs: [{ it: "l'ascensore" }, { it: "il lenzuolo" }, { it: "il piano" }, { it: "la chiave" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["la colazione è inclusa", "la colazione è inclusa?", "la colazione è compresa"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Buonasera! Ha una prenotazione?" },
              {
                sp: "TY",
                choices: [
                  "Sì, a nome Nowak, per tre notti.",
                  "No, vorrei una camera.",
                  "Sì, ho tre notti prenotazione."
                ],
                a: 0
              },
              { sp: "A", it: "Perfetto. Un documento, prego. La tassa di soggiorno è due euro a notte." },
              {
                sp: "TY",
                choices: [
                  "La colazione è inclusa?",
                  "La colazione è mancata?",
                  "C'è la tassa di colazione?"
                ],
                a: 0
              },
              { sp: "A", it: "Sì, dalle sette alle dieci, al primo piano." }
            ]
          },
          {
            t: "cloze",
            text: "Buongiorno, chiamo dalla camera 204: il wifi non {{1}} e {{2}} gli asciugamani puliti.",
            gaps: [["funziona"], ["mancano"]]
          },
          { t: "listen", it: "La camera è al terzo piano, la colazione dalle sette alle dieci." },
          { t: "speak", it: "Posso lasciare le valigie dopo il check-out?" }
        ]
      },
      {
        id: "a2-u02-l4",
        cefr: "A2",
        titleIt: "Quando sarò arrivato",
        grammar: {
          examples: [
            { it: "Quando avrò finito, ti chiamerò." },
            { it: "Appena saremo arrivati, ti scriviamo." },
            { it: "Non risponde, avrà perso il treno." },
            { it: "Dove sarà finito il mio biglietto?" },
            { it: "Entro venerdì avremo prenotato tutto." },
            { it: "Sarà stato un malinteso." }
          ]
        },
        vocab: [
          { it: "appena" },
          { it: "una volta che" },
          { it: "entro" },
          { it: "il malinteso" },
          { it: "l'imprevisto" },
          { it: "l'itinerario" },
          { it: "la partenza / l'arrivo" },
          { it: "il bagaglio a mano" },
          { it: "l'imbarco" },
          { it: "il volo" },
          { it: "la coincidenza" },
          { it: "annullare" }
        ],
        exercises: [
          { t: "fill", a: ["avrò finito"] },
          { t: "fill", a: ["saremo partiti"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Quando {{1}} (arrivare, noi) in albergo, ti {{2}} (scrivere, noi).",
            gaps: [["saremo arrivati"], ["scriveremo"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["quando avrò finito il lavoro ti chiamerò", "quando avrò finito il lavoro, ti chiamerò"]
          },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "l'imbarco" }, { it: "il volo" }, { it: "entro" }, { it: "annullare" }]
          },
          {
            t: "order",
            tokens: ["Entro", "venerdì", "avremo", "prenotato", "tutto"],
            a: ["entro venerdì avremo prenotato tutto"]
          },
          { t: "listen", it: "Appena saremo arrivati all'aeroporto, ti mandiamo un messaggio." },
          { t: "speak", it: "Non risponde al telefono, avrà perso la coincidenza." }
        ]
      }
    ],
    test: {
      id: "a2-u02-test",
      cefr: "A2",
      titleIt: "Test — In viaggio",
      exercises: [
        { t: "conj", verb: "essere", tense: "futuro", persons: [0, 2, 5] },
        { t: "fill", a: ["andrò"] },
        { t: "fill", a: ["potremo"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["binario"] },
        { t: "fill", a: ["funziona"] },
        { t: "fill", a: ["avrò finito"] },
        { t: "trans", dir: "toIt", a: ["ho una prenotazione per tre notti"] },
        { t: "listen", it: "Il volo per Varsavia parte dal gate B12 con venti minuti di ritardo." },
        { t: "speak", it: "Vorrei un biglietto di sola andata per Bologna." }
      ]
    }
  },
  {
    id: "a2-u03",
    icon: "💬",
    titleIt: "Lo vedo, gli parlo",
    lessons: [
      {
        id: "a2-u03-l1",
        cefr: "A2",
        titleIt: "Lo, la, li, le",
        grammar: {
          examples: [
            { it: "Conosci Marco? — Sì, lo conosco bene." },
            { it: "Prendi la macchina? — No, non la prendo." },
            { it: "Dove sono le chiavi? Non le trovo." },
            { it: "Voglio vederlo subito. / Lo voglio vedere subito." },
            { it: "Mi aspetti cinque minuti?" },
            { it: "Ci vediamo domani." }
          ]
        },
        vocab: [
          { it: "conoscere" },
          { it: "sapere" },
          { it: "trovare" },
          { it: "perdere" },
          { it: "aspettare" },
          { it: "chiamare" },
          { it: "invitare" },
          { it: "accompagnare" },
          { it: "il giornale" },
          { it: "le chiavi" },
          { it: "subito" },
          { it: "più tardi" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["li"] },
          { t: "fill", a: ["la"] },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "— Compri il giornale? — Sì, {{1}} compro. — E le riviste? — No, non {{2}} compro.",
            gaps: [["lo"], ["le"]]
          },
          { t: "trans", dir: "toIt", a: ["non lo conosco"] },
          { t: "multi", a: [0, 1] },
          { t: "order", tokens: ["Mi", "aspetti", "cinque", "minuti?"], a: ["mi aspetti cinque minuti"] },
          { t: "listen", it: "Le chiavi non le trovo, forse le ho lasciate in ufficio." },
          { t: "speak", it: "Conosci quel ristorante? — Sì, lo conosco bene." }
        ]
      },
      {
        id: "a2-u03-l2",
        cefr: "A2",
        titleIt: "L'ho vista",
        grammar: {
          examples: [
            { it: "Hai visto Giulia? — Sì, l'ho vista ieri." },
            { it: "I documenti? Li ho già spediti." },
            { it: "Le foto? Non le ho ancora guardate." },
            { it: "Le ho scritto una mail." },
            { it: "L'ho conosciuta a Roma." },
            { it: "Ci hanno invitati alla festa." }
          ]
        },
        vocab: [
          { it: "spedire" },
          { it: "guardare" },
          { it: "ricevere" },
          { it: "restituire" },
          { it: "prestare" },
          { it: "il documento" },
          { it: "la foto" },
          { it: "il messaggio" },
          { it: "la mail" },
          { it: "ancora" },
          { it: "già" },
          { it: "per caso" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["li i"] },
          { t: "fill", a: ["e"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "La mail? L'ho gia spedit{{1}}. Le foto? Non le ho ancora guardat{{2}}.",
            gaps: [["a"], ["e"]]
          },
          { t: "trans", dir: "toIt", a: ["l'ho conosciuta a roma"] },
          { t: "multi", a: [0, 2] },
          {
            t: "order",
            tokens: ["I", "documenti", "li", "ho", "già", "spediti"],
            a: ["i documenti li ho già spediti"]
          },
          { t: "listen", it: "Le foto del viaggio non le ho ancora guardate." },
          { t: "speak", it: "Hai visto Giulia? — Sì, l'ho vista ieri sera." }
        ]
      },
      {
        id: "a2-u03-l3",
        cefr: "A2",
        titleIt: "Gli parlo, le scrivo",
        grammar: {
          examples: [
            { it: "Hai chiamato Marco? — Sì, gli ho telefonato ieri." },
            { it: "Che cosa le hai detto?" },
            { it: "Non gli credo per niente." },
            { it: "Ci hanno risposto subito." },
            { it: "Le piace molto viaggiare." },
            { it: "Voglio parlargli oggi." }
          ]
        },
        vocab: [
          { it: "telefonare a" },
          { it: "rispondere a" },
          { it: "scrivere a" },
          { it: "chiedere a" },
          { it: "dire a" },
          { it: "credere a" },
          { it: "regalare a" },
          { it: "prestare a" },
          { it: "mandare a" },
          { it: "spiegare a" },
          { it: "consigliare a" },
          { it: "per niente" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["le"] },
          { t: "fill", a: ["gli"] },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "cloze",
            text: "Ho scritto a Giulia: {{1}} ho mandato una mail. Marco non risponde, {{2}} telefono domani.",
            gaps: [["le"], ["gli"]]
          },
          { t: "trans", dir: "toIt", a: ["voglio parlargli oggi", "gli voglio parlare oggi"] },
          {
            t: "match",
            pairs: [
              { it: "regalare a" },
              { it: "prestare a" },
              { it: "spiegare a" },
              { it: "consigliare a" }
            ]
          },
          { t: "listen", it: "Le ho scritto ieri, ma non mi ha ancora risposto." },
          { t: "speak", it: "Gli telefono stasera e gli spiego tutto." }
        ]
      },
      {
        id: "a2-u03-l4",
        cefr: "A2",
        titleIt: "Dimmi, fammi sapere",
        grammar: {
          examples: [
            { it: "Dimmi tutto!" },
            { it: "Fammi sapere come va." },
            { it: "Non ti preoccupare, ci penso io." },
            { it: "Mi dica pure, signora." },
            { it: "Andiamoci insieme!" },
            { it: "Scusami, non l'ho fatto apposta." }
          ]
        },
        vocab: [
          { it: "dimmi" },
          { it: "fammi sapere" },
          { it: "dammi" },
          { it: "scusami" },
          { it: "aspettami" },
          { it: "non ti preoccupare" },
          { it: "guarda" },
          { it: "senti" },
          { it: "stammi bene" },
          { it: "vieni qui" },
          { it: "smettila" },
          { it: "apposta" }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "fill", a: ["prendi"] },
          { t: "fill", a: ["parli"] },
          { t: "fill", a: ["dimmi"] },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "toIt", a: ["non ti preoccupare", "non preoccuparti"] },
          {
            t: "cloze",
            text: "Ciao! {{1}} sapere a che ora arrivi e {{2}} un messaggio quando parti.",
            gaps: [["fammi"], ["mandami"]]
          },
          { t: "order", tokens: ["Mi", "dica", "pure,", "signora"], a: ["mi dica pure signora"] },
          { t: "listen", it: "Fammi sapere quando arrivi, ti vengo a prendere." },
          { t: "speak", it: "Dimmi tutto, non ti preoccupare." }
        ]
      }
    ],
    test: {
      id: "a2-u03-test",
      cefr: "A2",
      titleIt: "Test — Lo vedo, gli parlo",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["li"] },
        { t: "fill", a: ["e"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["le"] },
        { t: "fill", a: ["senti"] },
        { t: "fill", a: ["dimmi"] },
        {
          t: "trans",
          dir: "toIt",
          a: ["non ti preoccupare ci penso io", "non ti preoccupare, ci penso io"]
        },
        { t: "listen", it: "L'ho vista ieri e le ho parlato del progetto." },
        { t: "speak", it: "Fammi sapere quando arrivi, ti aspetto." }
      ]
    }
  },
  {
    id: "a2-u04",
    icon: "🩺",
    titleIt: "Salute",
    lessons: [
      {
        id: "a2-u04-l1",
        cefr: "A2",
        titleIt: "Mi fa male la testa",
        grammar: {
          examples: [
            { it: "Mi fa male la gola da due giorni." },
            { it: "Ho mal di stomaco e la nausea." },
            { it: "Ho la tosse e il raffreddore." },
            { it: "Mi sento stanca e non ho appetito." },
            { it: "Sono allergica alla penicillina." },
            { it: "Prendo qualcosa per il mal di testa?" }
          ]
        },
        vocab: [
          { it: "la testa" },
          { it: "la gola" },
          { it: "lo stomaco" },
          { it: "la schiena" },
          { it: "i denti" },
          { it: "la febbre" },
          { it: "la tosse" },
          { it: "il raffreddore" },
          { it: "la nausea" },
          { it: "mi sento male" },
          { it: "l'allergia" },
          { it: "da quanto tempo?" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["fa"] },
          { t: "fill", a: ["di"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "la tosse" }, { it: "il raffreddore" }, { it: "la nausea" }, { it: "la febbre" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["mi fa male la gola da tre giorni", "ho mal di gola da tre giorni"]
          },
          {
            t: "cloze",
            text: "{{1}} fa male la gola, {{2}} la febbre e mi sento {{3}}.",
            gaps: [["mi"], ["ho"], ["debole", "stanco", "stanca", "male"]]
          },
          {
            t: "order",
            tokens: ["Ho", "la", "tosse", "e", "il", "raffreddore", "da", "una", "settimana"],
            a: ["ho la tosse e il raffreddore da una settimana"]
          },
          { t: "listen", it: "Mi fanno male le gambe dopo la corsa." },
          { t: "speak", it: "Mi fa male la testa e ho la febbre." }
        ]
      },
      {
        id: "a2-u04-l2",
        cefr: "A2",
        titleIt: "Dal medico",
        grammar: {
          examples: [
            { it: "Buongiorno, non mi sento bene." },
            { it: "Ha allergie a qualche farmaco?" },
            { it: "Le faccio una ricetta." },
            { it: "Riposi e beva molta acqua." },
            { it: "Se non passa in tre giorni, torni." },
            { it: "Ho bisogno di un certificato medico." }
          ]
        },
        vocab: [
          { it: "il medico di base" },
          { it: "il pronto soccorso" },
          { it: "la ricetta" },
          { it: "l'antibiotico" },
          { it: "la pastiglia" },
          { it: "lo sciroppo" },
          { it: "la puntura" },
          { it: "l'analisi del sangue" },
          { it: "il certificato medico" },
          { it: "dopo i pasti" },
          { it: "a stomaco vuoto" },
          { it: "guarire" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["allergica"] },
          { t: "fill", a: ["volte"] },
          {
            t: "match",
            pairs: [
              { it: "la ricetta" },
              { it: "la pastiglia" },
              { it: "a stomaco vuoto" },
              { it: "guarire" }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["da quanto tempo ha questi sintomi", "da quanto tempo ha questi sintomi?"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Buongiorno, si accomodi. Cosa c'è che non va?" },
              {
                sp: "TY",
                choices: [
                  "Mi fa male la gola e ho la febbre.",
                  "Ho male gola e febbre.",
                  "Mi fanno male la gola."
                ],
                a: 0
              },
              { sp: "A", it: "Da quanto tempo?" },
              { sp: "TY", choices: ["Da tre giorni.", "Tre giorni fa.", "Per tre giorni."], a: 0 },
              { sp: "A", it: "Le prescrivo un antibiotico. Ha allergie?" },
              {
                sp: "TY",
                choices: [
                  "No, nessuna. Quante volte al giorno lo prendo?",
                  "Sì, nessuna allergia. Quanto costa?",
                  "No. Dove è il pronto soccorso?"
                ],
                a: 0
              }
            ]
          },
          {
            t: "cloze",
            text: "Prenda una {{1}} due volte al giorno, dopo i {{2}}. E {{3}} molta acqua.",
            gaps: [["pastiglia"], ["pasti"], ["beva"]]
          },
          {
            t: "order",
            tokens: ["Ho", "bisogno", "di", "un", "certificato", "medico"],
            a: ["ho bisogno di un certificato medico"]
          },
          { t: "listen", it: "Prenda l'antibiotico per sei giorni, anche se sta meglio." },
          { t: "speak", it: "Sono allergica alla penicillina, c'è un'alternativa?" }
        ]
      },
      {
        id: "a2-u04-l3",
        cefr: "A2",
        titleIt: "Dovresti riposare",
        grammar: {
          examples: [
            { it: "Dovresti riposare qualche giorno." },
            { it: "Potresti chiedere al farmacista." },
            { it: "Sarebbe meglio andare dal medico." },
            { it: "Perché non prendi un giorno libero?" },
            { it: "Ti conviene riposare oggi." },
            { it: "Rimettiti presto!" }
          ]
        },
        vocab: [
          { it: "dovresti" },
          { it: "potresti" },
          { it: "sarebbe meglio" },
          { it: "ti conviene" },
          { it: "perché non…?" },
          { it: "il consiglio" },
          { it: "riposare" },
          { it: "smettere di" },
          { it: "muoversi" },
          { it: "mi dispiace" },
          { it: "che peccato" },
          { it: "rimettiti presto" }
        ],
        exercises: [
          { t: "conj", verb: "dovere", tense: "condizionale", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "potere", tense: "condizionale", persons: [1, 2, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["sarebbe"] },
          { t: "fill", a: ["potresti"] },
          {
            t: "trans",
            dir: "toIt",
            a: ["dovresti riposare qualche giorno", "dovresti riposare per qualche giorno"]
          },
          {
            t: "match",
            pairs: [
              { it: "mi dispiace" },
              { it: "che peccato" },
              { it: "rimettiti presto" },
              { it: "ti conviene" }
            ]
          },
          {
            t: "cloze",
            text: "{{1}} riposare oggi. E {{2}} non chiami il medico?",
            gaps: [["dovresti"], ["perché"]]
          },
          { t: "listen", it: "Sarebbe meglio se prendessi un giorno libero." },
          { t: "speak", it: "Dovresti riposare e bere molta acqua." }
        ]
      },
      {
        id: "a2-u04-l4",
        cefr: "A2",
        titleIt: "Vita sana",
        grammar: {
          examples: [
            { it: "Faccio movimento tutti i giorni, anche solo camminando." },
            { it: "Cerco di dormire almeno sette ore." },
            { it: "Ho ridotto lo zucchero e mi sento meglio." },
            { it: "Vado in palestra due volte alla settimana." },
            { it: "Ho intenzione di iscrivermi in piscina." },
            { it: "La dieta mediterranea è molto varia." }
          ]
        },
        vocab: [
          { it: "la vita sana" },
          { it: "fare movimento" },
          { it: "allenarsi" },
          { it: "correre" },
          { it: "camminare" },
          { it: "iscriversi" },
          { it: "ridurre" },
          { it: "smettere di fumare" },
          { it: "ho intenzione di" },
          { it: "sto cercando di" },
          { it: "a giorni alterni" },
          { it: "almeno" }
        ],
        exercises: [
          { t: "fill", a: ["di"] },
          { t: "fill", a: ["a"] },
          { t: "fill", a: ["alla"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "toIt",
            a: ["cerco di dormire almeno sette ore", "sto cercando di dormire almeno sette ore"]
          },
          {
            t: "cloze",
            text: "Faccio movimento {{1}} giorni alterni e sto {{2}} di ridurre lo zucchero.",
            gaps: [["a"], ["cercando"]]
          },
          {
            t: "match",
            pairs: [{ it: "allenarsi" }, { it: "iscriversi" }, { it: "ridurre" }, { it: "almeno" }]
          },
          { t: "listen", it: "Ho smesso di fumare tre mesi fa e sto molto meglio." },
          { t: "speak", it: "Vado a correre tre volte alla settimana, la mattina presto." }
        ]
      }
    ],
    test: {
      id: "a2-u04-test",
      cefr: "A2",
      titleIt: "Test — Salute",
      exercises: [
        { t: "fill", a: ["fanno"] },
        { t: "fill", a: ["di"] },
        { t: "mcq", a: 1 },
        { t: "conj", verb: "dovere", tense: "condizionale", persons: [0, 1, 2] },
        { t: "fill", a: ["sarebbe"] },
        { t: "fill", a: ["di"] },
        {
          t: "match",
          pairs: [{ it: "la ricetta" }, { it: "la tosse" }, { it: "guarire" }, { it: "a stomaco vuoto" }]
        },
        {
          t: "trans",
          dir: "toIt",
          a: ["mi fa male la gola da due giorni", "ho mal di gola da due giorni"]
        },
        { t: "listen", it: "Prenda una pastiglia due volte al giorno dopo i pasti." },
        { t: "speak", it: "Non mi sento bene, dovrei andare dal medico." }
      ]
    }
  }
]);
