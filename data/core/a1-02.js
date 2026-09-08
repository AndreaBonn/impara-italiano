/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/a1-02.js
   Powstało z data/a1-02.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("A1", [
  {
    id: "a1-u04",
    icon: "👗",
    titleIt: "Vetrine e taglie",
    lessons: [
      {
        id: "a1-u04-l1",
        cefr: "A1",
        titleIt: "Rosso, rossa, rossi",
        grammar: {
          examples: [
            { it: "Vorrei una camicia bianca." },
            { it: "Queste scarpe sono troppo strette." },
            { it: "Un cappotto blu, taglia media." },
            { it: "I pantaloni verdi non mi stanno bene." },
            { it: "Che bella giacca!" }
          ]
        },
        vocab: [
          { it: "il vestito" },
          { it: "la gonna" },
          { it: "i pantaloni" },
          { it: "la camicia" },
          { it: "la maglietta" },
          { it: "la giacca" },
          { it: "il cappotto" },
          { it: "le scarpe" },
          { it: "rosso / rossa" },
          { it: "nero / nera" },
          { it: "bianco / bianca" },
          { it: "verde" },
          { it: "blu" },
          { it: "grigio / grigia" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["nere"] },
          { t: "fill", a: ["blu"] },
          {
            t: "cloze",
            text: "Vorrei una camicia bianc{{1}} e due magliette ner{{2}}.",
            gaps: [["a"], ["e"]]
          },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "la gonna" }, { it: "il cappotto" }, { it: "la giacca" }, { it: "le scarpe" }]
          },
          {
            t: "order",
            tokens: ["Queste", "scarpe", "sono", "troppo", "strette"],
            a: ["queste scarpe sono troppo strette"]
          },
          { t: "listen", it: "Vorrei una giacca grigia, taglia media." },
          { t: "speak", it: "Che bella camicia bianca!" }
        ]
      },
      {
        id: "a1-u04-l2",
        cefr: "A1",
        titleIt: "Questo o quello?",
        grammar: {
          examples: [
            { it: "Quanto costa questa borsa?" },
            { it: "Preferisco quel cappotto lì." },
            { it: "Quegli stivali sono in saldo." },
            { it: "Prendo questo, grazie." },
            { it: "Quest'anno la moda è minimalista." }
          ]
        },
        vocab: [
          { it: "la taglia" },
          { it: "il numero" },
          { it: "il camerino" },
          { it: "provare" },
          { it: "i saldi" },
          { it: "lo sconto" },
          { it: "la vetrina" },
          { it: "caro / a buon mercato" },
          { it: "stretto / largo" },
          { it: "posso provare?" },
          { it: "mi sta bene" },
          { it: "avete la taglia M?" }
        ],
        dialogue: {
          titleIt: "In negozio",
          lines: [
            { who: "🙋", it: "Scusi, posso provare questa camicia?" },
            { who: "👩‍💼", it: "Certo. Che taglia porta?" },
            { who: "🙋", it: "La media. Avete anche quel modello blu?" },
            { who: "👩‍💼", it: "Sì, ma solo nella taglia large. Il camerino è là in fondo." },
            { who: "🙋", it: "Grazie. Questa mi sta un po' stretta." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["quelle"] },
          { t: "fill", a: ["quest'"] },
          {
            t: "gender",
            opts: ["quel", "quello", "quell'", "quei", "quegli", "quella", "quelle"],
            items: [
              { it: "cappotto", a: "quel" },
              { it: "stivali", a: "quegli" },
              { it: "gonna", a: "quella" },
              { it: "pantaloni", a: "quei" },
              { it: "orologio", a: "quell'" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "pl-it", a: ["quanto costa questa borsa", "quanto costa questa borsa?"] },
          {
            t: "order",
            tokens: ["Posso", "provare", "quella", "giacca?"],
            a: ["posso provare quella giacca"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Buongiorno, cerca qualcosa in particolare?" },
              {
                sp: "TY",
                choices: ["Posso provare questa gonna?", "Posso provare quel gonna?", "Provo questo gonna?"],
                a: 0
              },
              { sp: "A", it: "Certo. Che taglia?" },
              { sp: "TY", choices: ["La media, grazie.", "Il medio, grazie.", "Media taglia."], a: 0 }
            ]
          },
          { t: "listen", it: "Quegli stivali neri sono in saldo." },
          { t: "speak", it: "Scusi, avete questa camicia nella taglia media?" }
        ]
      },
      {
        id: "a1-u04-l3",
        cefr: "A1",
        titleIt: "Quanto costa?",
        grammar: {
          examples: [
            { it: "Quanto costa questa borsa? — Ottantacinque euro." },
            { it: "Quant'è in tutto?" },
            { it: "Posso pagare con la carta?" },
            { it: "Solo contanti, mi dispiace." },
            { it: "Mi dà lo scontrino, per favore?" },
            { it: "C'è uno sconto del venti per cento." }
          ]
        },
        vocab: [
          { it: "quanto costa? / costano?" },
          { it: "quant'è?" },
          { it: "in contanti" },
          { it: "con la carta" },
          { it: "lo scontrino" },
          { it: "il resto" },
          { it: "cento / mille" },
          { it: "il per cento" },
          { it: "è troppo caro" },
          { it: "un affare" },
          { it: "il prezzo" },
          { it: "gratis" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["2025"] },
          { t: "fill", a: ["quanto"] },
          {
            t: "trans",
            dir: "pl-it",
            a: ["posso pagare con la carta", "posso pagare con la carta?", "si può pagare con la carta"]
          },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "— {{1}} in tutto? — Quarantatré euro. — Posso pagare {{2}} la carta?",
            gaps: [["quant'è", "quanto è"], ["con"]]
          },
          {
            t: "match",
            pairs: [{ it: "lo scontrino" }, { it: "il resto" }, { it: "in contanti" }, { it: "gratis" }]
          },
          { t: "listen", it: "Sono centoventi euro, con lo sconto del dieci per cento." },
          { t: "speak", it: "Quanto costano quegli stivali in vetrina?" }
        ]
      },
      {
        id: "a1-u04-l4",
        cefr: "A1",
        titleIt: "Molto, poco, troppo",
        grammar: {
          examples: [
            { it: "Questa giacca è molto elegante." },
            { it: "Ci sono molte persone in negozio." },
            { it: "Costa troppo, grazie lo stesso." },
            { it: "Ho pochi soldi questo mese." },
            { it: "È bellissima!" },
            { it: "Abbastanza bene, grazie." }
          ]
        },
        vocab: [
          { it: "molto" },
          { it: "poco" },
          { it: "un po' di" },
          { it: "troppo" },
          { it: "tanto" },
          { it: "abbastanza" },
          { it: "più / meno" },
          { it: "bellissimo" },
          { it: "carissimo" },
          { it: "i soldi" },
          { it: "grazie lo stesso" },
          { it: "ci penso" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["bellissimo"] },
          { t: "fill", a: ["poco"] },
          { t: "multi", a: [0, 2] },
          {
            t: "trans",
            dir: "pl-it",
            a: ["è troppo caro grazie", "costa troppo grazie", "è troppo caro, grazie"]
          },
          { t: "cloze", text: "Ci sono molt{{1}} negozi, ma sono molt{{2}} cari.", gaps: [["i"], ["o"]] },
          {
            t: "match",
            pairs: [{ it: "abbastanza" }, { it: "troppo" }, { it: "un po' di" }, { it: "poco" }]
          },
          { t: "listen", it: "È bellissima, ma costa troppo per me." },
          { t: "speak", it: "Ci penso, grazie lo stesso." }
        ]
      }
    ],
    test: {
      id: "a1-u04-test",
      cefr: "A1",
      titleIt: "Test — Vetrine e taglie",
      exercises: [
        { t: "fill", a: ["rosse"] },
        { t: "fill", a: ["verdi"] },
        {
          t: "gender",
          opts: ["quel", "quello", "quell'", "quei", "quegli", "quella", "quelle"],
          items: [
            { it: "zaino", a: "quello" },
            { it: "scarpe", a: "quelle" },
            { it: "cappotto", a: "quel" },
            { it: "stivali", a: "quegli" }
          ]
        },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["molte"] },
        { t: "trans", dir: "pl-it", a: ["posso provare questa camicia", "posso provare questa camicia?"] },
        {
          t: "order",
          tokens: ["Quanto", "costano", "quelle", "scarpe?"],
          a: ["quanto costano quelle scarpe"]
        },
        { t: "listen", it: "Questa giacca è carissima." },
        { t: "speak", it: "Posso pagare con la carta?" }
      ]
    }
  },
  {
    id: "a1-u05",
    icon: "⏰",
    titleIt: "La giornata",
    lessons: [
      {
        id: "a1-u05-l1",
        cefr: "A1",
        titleIt: "Mi sveglio alle sette",
        grammar: {
          examples: [
            { it: "Mi alzo subito dopo la sveglia." },
            { it: "Ti lavi i denti prima o dopo colazione?" },
            { it: "Ci vestiamo in fretta." },
            { it: "Devo alzarmi presto domani." },
            { it: "Non mi ricordo il suo nome." }
          ]
        },
        vocab: [
          { it: "svegliarsi" },
          { it: "alzarsi" },
          { it: "lavarsi" },
          { it: "vestirsi" },
          { it: "pettinarsi" },
          { it: "farsi la doccia" },
          { it: "fare colazione" },
          { it: "uscire di casa" },
          { it: "riposarsi" },
          { it: "addormentarsi" },
          { it: "la sveglia" },
          { it: "in fretta" }
        ],
        exercises: [
          { t: "conj", verb: "svegliarsi", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["ci alziamo"] },
          { t: "fill", a: ["alzarmi"] },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "pl-it", a: ["mi vesto in fretta"] },
          {
            t: "cloze",
            text: "{{1}} sveglio alle sei e mezza, poi {{2}} alzo e {{3}} la doccia.",
            gaps: [["mi"], ["mi"], ["mi faccio"]]
          },
          {
            t: "order",
            tokens: ["Mia", "sorella", "si", "sveglia", "tardi"],
            a: ["mia sorella si sveglia tardi"]
          },
          { t: "listen", it: "Mi sveglio alle sette e mi alzo subito." },
          { t: "speak", it: "A che ora ti svegli di solito?" }
        ]
      },
      {
        id: "a1-u05-l2",
        cefr: "A1",
        titleIt: "Che ore sono?",
        grammar: {
          examples: [
            { it: "Che ore sono? — Sono le nove e venti." },
            { it: "A che ora apre il negozio? — Alle nove e mezza." },
            { it: "Il treno parte all'una e un quarto." },
            { it: "Ci vediamo alle otto di sera." },
            { it: "È mezzogiorno, andiamo a pranzo." }
          ]
        },
        vocab: [
          { it: "che ore sono?" },
          { it: "a che ora?" },
          { it: "mezzogiorno / mezzanotte" },
          { it: "e un quarto / e mezza" },
          { it: "meno un quarto" },
          { it: "di mattina" },
          { it: "di pomeriggio" },
          { it: "di sera / di notte" },
          { it: "presto / tardi" },
          { it: "in orario" },
          { it: "in ritardo" },
          { it: "ci vediamo" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["sono"] },
          { t: "fill", a: ["alle"] },
          { t: "mcq", a: 2 },
          {
            t: "match",
            pairs: [
              { it: "è mezzogiorno" },
              { it: "sono le due e un quarto" },
              { it: "è l'una e mezza" },
              { it: "sono le sette meno dieci" }
            ]
          },
          { t: "trans", dir: "pl-it", a: ["a che ora apre il negozio", "a che ora apre il negozio?"] },
          {
            t: "cloze",
            text: "— Che ore {{1}}? — {{2}} le undici meno un quarto. — Sono {{3}} ritardo!",
            gaps: [["sono"], ["sono"], ["in"]]
          },
          {
            t: "order",
            tokens: ["Ci", "vediamo", "alle", "otto", "di", "sera"],
            a: ["ci vediamo alle otto di sera"]
          },
          { t: "listen", it: "Il treno parte alle diciotto e quarantacinque." },
          { t: "speak", it: "Scusi, che ore sono? — Sono le tre e mezza." }
        ]
      },
      {
        id: "a1-u05-l3",
        cefr: "A1",
        titleIt: "Posso, voglio, devo",
        grammar: {
          examples: [
            { it: "Posso entrare?" },
            { it: "Vorrei un caffè, per favore." },
            { it: "Devo andare, è tardi." },
            { it: "Non possiamo pagare in contanti." },
            { it: "Vuoi venire con noi?" },
            { it: "Mi devo alzare presto. / Devo alzarmi presto." }
          ]
        },
        vocab: [
          { it: "potere" },
          { it: "volere" },
          { it: "dovere" },
          { it: "vorrei" },
          { it: "posso?" },
          { it: "è vietato" },
          { it: "è permesso" },
          { it: "bisogna" },
          { it: "avere voglia di" },
          { it: "purtroppo" },
          { it: "volentieri" },
          { it: "magari" }
        ],
        exercises: [
          { t: "conj", verb: "potere", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "volere", tense: "pres", persons: [0, 2, 3, 5] },
          { t: "conj", verb: "dovere", tense: "pres", persons: [0, 3, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dobbiamo"] },
          { t: "mcq", a: 0 },
          { t: "trans", dir: "pl-it", a: ["posso pagare con la carta", "posso pagare con la carta?"] },
          {
            t: "cloze",
            text: "Non {{1}} venire stasera, {{2}} lavorare fino a tardi.",
            gaps: [["posso"], ["devo"]]
          },
          { t: "listen", it: "Scusi, posso provare questa giacca?" },
          { t: "speak", it: "Vorrei prenotare un tavolo per due, per favore." }
        ]
      },
      {
        id: "a1-u05-l4",
        cefr: "A1",
        titleIt: "Sempre, spesso, mai",
        grammar: {
          examples: [
            { it: "lunedì, martedì, mercoledì, giovedì" },
            { it: "venerdì, sabato, domenica" },
            { it: "Il sabato dormo fino a tardi." },
            { it: "Sabato vado a Firenze." },
            { it: "Non vado mai a letto prima di mezzanotte." }
          ]
        },
        vocab: [
          { it: "sempre" },
          { it: "di solito" },
          { it: "spesso" },
          { it: "a volte" },
          { it: "raramente" },
          { it: "non… mai" },
          { it: "ogni giorno" },
          { it: "il fine settimana" },
          { it: "il lunedì" },
          { it: "il sabato" },
          { it: "la domenica" },
          { it: "una volta alla settimana" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["non mai"] },
          { t: "mcq", a: 1 },
          { t: "order", tokens: ["Di", "solito", "lavoro", "da", "casa"], a: ["di solito lavoro da casa"] },
          {
            t: "match",
            pairs: [{ it: "sempre" }, { it: "raramente" }, { it: "a volte" }, { it: "ogni giorno" }]
          },
          { t: "trans", dir: "pl-it", a: ["non prendo mai il taxi", "non prendo mai un taxi"] },
          {
            t: "cloze",
            text: "{{1}} lunedì vado in palestra, ma {{2}} vado {{3}} il fine settimana.",
            gaps: [["il"], ["non"], ["mai"]]
          },
          { t: "multi", a: [0, 2] },
          { t: "listen", it: "Di solito mi sveglio presto, ma la domenica dormo fino a tardi." },
          { t: "speak", it: "Vado spesso al mercato il sabato mattina." }
        ]
      }
    ],
    test: {
      id: "a1-u05-test",
      cefr: "A1",
      titleIt: "Test — La giornata",
      exercises: [
        { t: "conj", verb: "svegliarsi", tense: "pres", persons: [0, 3, 5] },
        { t: "fill", a: ["alzarmi"] },
        { t: "fill", a: ["sono"] },
        { t: "fill", a: ["all'"] },
        { t: "conj", verb: "dovere", tense: "pres", persons: [0, 3] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        {
          t: "order",
          tokens: ["Di", "solito", "faccio", "colazione", "alle", "otto"],
          a: ["di solito faccio colazione alle otto"]
        },
        { t: "listen", it: "Mi sveglio alle sei e mezza ogni giorno." },
        { t: "speak", it: "A che ora ti alzi di solito?" }
      ]
    }
  },
  {
    id: "a1-u06",
    icon: "🏛️",
    titleIt: "In città",
    lessons: [
      {
        id: "a1-u06-l1",
        cefr: "A1",
        titleIt: "Al, del, nel, sul",
        grammar: {
          examples: [
            { it: "Vado al cinema." },
            { it: "Il libro è sul tavolo." },
            { it: "Abito nel centro storico." },
            { it: "Torno dalla stazione." },
            { it: "La chiave della macchina." },
            { it: "Con il treno / col treno." }
          ]
        },
        vocab: [
          { it: "la piazza" },
          { it: "la via" },
          { it: "il centro" },
          { it: "la chiesa" },
          { it: "il museo" },
          { it: "la banca" },
          { it: "la farmacia" },
          { it: "l'ufficio postale" },
          { it: "il semaforo" },
          { it: "l'incrocio" },
          { it: "il ponte" },
          { it: "la fermata" }
        ],
        exercises: [
          { t: "fill", a: ["al"] },
          { t: "fill", a: ["sul"] },
          { t: "fill", a: ["nel"] },
          {
            t: "gender",
            opts: ["al", "allo", "alla", "all'", "ai", "agli", "alle"],
            items: [
              { it: "stazione", a: "alla" },
              { it: "aeroporto", a: "all'" },
              { it: "studenti", a: "agli" },
              { it: "ristorante", a: "al" },
              { it: "nove", a: "alle" }
            ]
          },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "La farmacia è {{1}} angolo, vicino {{2}} banca, di fronte {{3}} chiesa.",
            gaps: [["all'"], ["alla"], ["alla"]]
          },
          { t: "trans", dir: "pl-it", a: ["torno dalla stazione", "vengo dalla stazione"] },
          {
            t: "order",
            tokens: ["La", "chiave", "della", "macchina", "è", "sul", "tavolo"],
            a: ["la chiave della macchina è sul tavolo"]
          },
          { t: "listen", it: "L'ufficio postale è vicino alla piazza principale." },
          { t: "speak", it: "Scusi, dov'è la fermata dell'autobus?" }
        ]
      },
      {
        id: "a1-u06-l2",
        cefr: "A1",
        titleIt: "Andare e venire",
        grammar: {
          examples: [
            { it: "Vado a Roma in treno." },
            { it: "Vado in Italia a settembre." },
            { it: "Vado dal dentista alle tre." },
            { it: "Vieni alla festa? — Sì, vengo volentieri." },
            { it: "Andiamo a piedi, è vicino." },
            { it: "Da dove vieni? — Vengo dalla Polonia." }
          ]
        },
        vocab: [
          { it: "andare" },
          { it: "venire" },
          { it: "a piedi" },
          { it: "in macchina" },
          { it: "in autobus" },
          { it: "in bici" },
          { it: "in metro" },
          { it: "vicino / lontano" },
          { it: "qui / lì" },
          { it: "insieme" },
          { it: "da solo / da sola" },
          { it: "ci vuole mezz'ora" }
        ],
        exercises: [
          { t: "conj", verb: "andare", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "venire", tense: "pres", persons: [0, 2, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["in"] },
          { t: "fill", a: ["a"] },
          { t: "fill", a: ["dal"] },
          { t: "multi", a: [0, 2, 4] },
          { t: "order", tokens: ["Andiamo", "a", "piedi,", "è", "vicino"], a: ["andiamo a piedi è vicino"] },
          { t: "listen", it: "Vengo con voi, ma andiamo in metro." },
          { t: "speak", it: "Vado in centro a piedi, ci vuole mezz'ora." }
        ]
      },
      {
        id: "a1-u06-l3",
        cefr: "A1",
        titleIt: "Dov'è la stazione?",
        grammar: {
          examples: [
            { it: "Scusi, dov'è la stazione?" },
            { it: "È qui vicino, a due passi." },
            { it: "Vada dritto e giri alla seconda a destra." },
            { it: "È di fronte alla banca, accanto alla farmacia." },
            { it: "Quanto ci vuole a piedi? — Dieci minuti." },
            { it: "Mi sono perso, può aiutarmi?" }
          ]
        },
        vocab: [
          { it: "dov'è…?" },
          { it: "a destra / a sinistra" },
          { it: "dritto" },
          { it: "di fronte a" },
          { it: "accanto a" },
          { it: "vicino a / lontano da" },
          { it: "dietro / davanti a" },
          { it: "tra… e…" },
          { it: "girare" },
          { it: "attraversare" },
          { it: "mi sono perso/a" },
          { it: "a due passi" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dov'è", "dove è"] },
          {
            t: "match",
            pairs: [{ it: "di fronte a" }, { it: "accanto a" }, { it: "dietro" }, { it: "tra… e…" }]
          },
          {
            t: "cloze",
            text: "{{1}} dritto fino al semaforo, poi {{2}} a destra. La banca è {{3}} alla farmacia.",
            gaps: [["vada", "vai"], ["giri", "gira"], ["di fronte", "accanto"]]
          },
          { t: "trans", dir: "pl-it", a: ["scusi dov'è la farmacia", "scusi, dov'è la farmacia?"] },
          {
            t: "dialogue",
            lines: [
              {
                sp: "TY",
                choices: [
                  "Ciao, dove stazione?",
                  "Scusi, dov'è la stazione?",
                  "Scusa, la stazione dov'è Lei?"
                ],
                a: 1
              },
              { sp: "A", it: "Allora: vada dritto, poi giri alla seconda a destra." },
              {
                sp: "TY",
                choices: [
                  "Non capisco, può ripetere più lentamente?",
                  "Non capisco, ripeti!",
                  "Scusi, non parlo."
                ],
                a: 0
              },
              { sp: "A", it: "Certo. Dritto… e poi la seconda a destra. Dieci minuti a piedi." },
              {
                sp: "TY",
                choices: ["Grazie mille, molto gentile!", "Prego, grazie.", "Scusi, grazie."],
                a: 0
              }
            ]
          },
          {
            t: "order",
            tokens: ["Il", "museo", "è", "tra", "la", "piazza", "e", "il", "ponte"],
            a: ["il museo è tra la piazza e il ponte"]
          },
          { t: "listen", it: "Vada dritto e attraversi la piazza." },
          { t: "speak", it: "Mi sono persa, può aiutarmi per favore?" }
        ]
      },
      {
        id: "a1-u06-l4",
        cefr: "A1",
        titleIt: "C'è, ci sono, non c'è",
        grammar: {
          examples: [
            { it: "Nel mio quartiere c'è un mercato ogni sabato." },
            { it: "Ci sono molti turisti in questo periodo." },
            { it: "Non c'è nessuno alla reception." },
            { it: "C'è il bagno? — Sì, in fondo a destra." },
            { it: "Quanto c'è da qui alla stazione?" }
          ]
        },
        vocab: [
          { it: "il quartiere" },
          { it: "il bagno" },
          { it: "il bancomat" },
          { it: "il supermercato" },
          { it: "il parcheggio" },
          { it: "il parco" },
          { it: "l'ospedale" },
          { it: "la biblioteca" },
          { it: "nessuno" },
          { it: "qualcosa" },
          { it: "da queste parti" },
          { it: "in fondo" }
        ],
        exercises: [
          { t: "fill", a: ["c'è", "ce"] },
          { t: "fill", a: ["ci sono"] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["non c'è", "non ce"] },
          {
            t: "cloze",
            text: "Nel mio quartiere {{1}} un parco, ma non {{2}} supermercati.",
            gaps: [["c'è", "ce"], ["ci sono"]]
          },
          {
            t: "trans",
            dir: "pl-it",
            a: ["non c'è nessuno alla reception", "non c'è nessuno in reception"]
          },
          {
            t: "match",
            pairs: [
              { it: "il parcheggio" },
              { it: "l'ospedale" },
              { it: "la biblioteca" },
              { it: "il quartiere" }
            ]
          },
          {
            t: "order",
            tokens: ["C'è", "una", "farmacia", "da", "queste", "parti?"],
            a: ["c'è una farmacia da queste parti"]
          },
          { t: "listen", it: "Nel quartiere ci sono due parchi e una biblioteca." },
          { t: "speak", it: "Scusi, c'è il bagno? — Sì, in fondo a destra." }
        ]
      }
    ],
    test: {
      id: "a1-u06-test",
      cefr: "A1",
      titleIt: "Test — In città",
      exercises: [
        {
          t: "gender",
          opts: ["al", "allo", "alla", "all'", "ai", "agli", "alle"],
          items: [
            { it: "cinema", a: "al" },
            { it: "stazione", a: "alla" },
            { it: "aeroporto", a: "all'" },
            { it: "studenti", a: "agli" }
          ]
        },
        { t: "fill", a: ["sul"] },
        { t: "fill", a: ["nel"] },
        { t: "conj", verb: "andare", tense: "pres", persons: [0, 2, 5] },
        { t: "fill", a: ["in"] },
        { t: "fill", a: ["dal"] },
        { t: "mcq", a: 0 },
        { t: "fill", a: ["ci sono"] },
        { t: "listen", it: "Vada dritto, la banca è di fronte alla chiesa." },
        { t: "speak", it: "Scusi, dov'è la fermata dell'autobus?" }
      ]
    }
  },
  {
    id: "a1-u07",
    icon: "🍝",
    titleIt: "A tavola",
    lessons: [
      {
        id: "a1-u07-l1",
        cefr: "A1",
        titleIt: "Un tavolo per due",
        grammar: {
          examples: [
            { it: "Buonasera, avete prenotato?" },
            { it: "No, siamo in due. C'è posto?" },
            { it: "Dentro o fuori?" },
            { it: "Cosa ci consiglia?" },
            { it: "Sono allergico alle noci." },
            { it: "Era tutto buonissimo, complimenti." }
          ]
        },
        vocab: [
          { it: "prenotare" },
          { it: "il tavolo" },
          { it: "il menù" },
          { it: "l'antipasto" },
          { it: "il primo" },
          { it: "il secondo" },
          { it: "il contorno" },
          { it: "il dolce" },
          { it: "il conto" },
          { it: "il coperto" },
          { it: "siamo in due" },
          { it: "cosa ci consiglia?" }
        ],
        dialogue: {
          titleIt: "All'ingresso",
          lines: [
            { who: "🧑‍🍳", it: "Buonasera, avete prenotato?" },
            { who: "🙋", it: "No, siamo in due. C'è un tavolo libero?" },
            { who: "🧑‍🍳", it: "Dentro o fuori?" },
            { who: "🙋", it: "Fuori, se possibile. Grazie." },
            { who: "🧑‍🍳", it: "Certo, si accomodino. Ecco il menù." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["prenotare"] },
          {
            t: "trans",
            dir: "pl-it",
            a: ["il conto per favore", "il conto, per favore", "posso avere il conto"]
          },
          {
            t: "match",
            pairs: [{ it: "l'antipasto" }, { it: "il primo" }, { it: "il secondo" }, { it: "il dolce" }]
          },
          {
            t: "order",
            tokens: ["No,", "siamo", "in", "due.", "C'è", "un", "tavolo", "libero?"],
            a: ["no siamo in due c'è un tavolo libero"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Buonasera! Avete prenotato?" },
              {
                sp: "TY",
                choices: ["No, c'è un tavolo per due?", "Sì, per due.", "No, vorrei il conto."],
                a: 0
              },
              { sp: "A", it: "Sì, ma solo dentro. Va bene?" },
              {
                sp: "TY",
                choices: [
                  "Va bene, il menù per favore.",
                  "No, il conto per favore.",
                  "Va bene, il coperto per favore."
                ],
                a: 0
              }
            ]
          },
          { t: "listen", it: "Vorrei prenotare un tavolo per quattro alle otto." },
          { t: "speak", it: "Buonasera, siamo in due. C'è posto fuori?" }
        ]
      },
      {
        id: "a1-u07-l2",
        cefr: "A1",
        titleIt: "Per me una carbonara",
        grammar: {
          examples: [
            { it: "Per me una carbonara e un'insalata mista." },
            { it: "Da bere? — Acqua naturale, grazie." },
            { it: "Cosa c'è nell'amatriciana?" },
            { it: "Sono allergica ai frutti di mare." },
            { it: "È senza glutine questo piatto?" },
            { it: "Un caffè dopo, grazie." }
          ]
        },
        vocab: [
          { it: "la pasta" },
          { it: "la carne / il pesce" },
          { it: "l'insalata" },
          { it: "le verdure" },
          { it: "acqua naturale / frizzante" },
          { it: "il vino della casa" },
          { it: "senza glutine" },
          { it: "vegetariano / vegano" },
          { it: "sono allergico/a a…" },
          { it: "piccante" },
          { it: "al sangue / ben cotto" },
          { it: "da bere" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["allergica"] },
          {
            t: "trans",
            dir: "pl-it",
            a: [
              "per me una carbonara per favore",
              "per me una carbonara, per favore",
              "prendo una carbonara per favore"
            ]
          },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "senza glutine" }, { it: "piccante" }, { it: "ben cotto" }, { it: "da bere" }]
          },
          {
            t: "cloze",
            text: "{{1}} me una pasta al pomodoro, {{2}} cipolla. Da bere, acqua {{3}}.",
            gaps: [["per"], ["senza"], ["naturale", "frizzante"]]
          },
          {
            t: "order",
            tokens: ["Cosa", "c'è", "in", "questo", "piatto?"],
            a: ["cosa c'è in questo piatto"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Allora, cosa prendete?" },
              {
                sp: "TY",
                choices: ["Per me una cacio e pepe.", "Per me il conto.", "Sono cacio e pepe."],
                a: 0
              },
              { sp: "A", it: "Benissimo. E da bere?" },
              {
                sp: "TY",
                choices: [
                  "Una bottiglia d'acqua naturale.",
                  "Un'acqua della casa.",
                  "Una carbonara, grazie."
                ],
                a: 0
              },
              { sp: "A", it: "Perfetto. Contorno?" },
              {
                sp: "TY",
                choices: ["No grazie, così va bene.", "Sì, il conto.", "No, sono allergico."],
                a: 0
              }
            ]
          },
          { t: "listen", it: "Sono vegetariana, questo piatto contiene carne?" },
          { t: "speak", it: "Prendo la cacio e pepe. Da bere acqua frizzante." }
        ]
      },
      {
        id: "a1-u07-l3",
        cefr: "A1",
        titleIt: "Ne prendo due",
        grammar: {
          examples: [
            { it: "Quanti caffè bevi al giorno? — Ne bevo tre." },
            { it: "Vuoi del pane? — Sì, ne prendo un po'." },
            { it: "Hai figli? — Ne ho una." },
            { it: "Non ne so nulla." },
            { it: "Vorrei prenderne due." }
          ]
        },
        vocab: [
          { it: "ne" },
          { it: "quanti / quante" },
          { it: "ancora" },
          { it: "un altro / un'altra" },
          { it: "un pezzo" },
          { it: "una fetta" },
          { it: "un bicchiere" },
          { it: "una porzione" },
          { it: "basta" },
          { it: "che ne pensi?" },
          { it: "non ne so nulla" },
          { it: "me ne vado" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["ne"] },
          { t: "fill", a: ["ne"] },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "pl-it",
            a: ["quanti caffè bevi al giorno ne bevo tre", "quanti caffè bevi al giorno? ne bevo tre."]
          },
          {
            t: "match",
            pairs: [
              { it: "che ne pensi?" },
              { it: "non ne so nulla" },
              { it: "me ne vado" },
              { it: "ne prendo due" }
            ]
          },
          {
            t: "cloze",
            text: "— Vuoi ancora vino? — No grazie, non {{1}} voglio più. — E tu? — Sì, {{2}} prendo un altro bicchiere.",
            gaps: [["ne"], ["ne"]]
          },
          { t: "order", tokens: ["Vorrei", "prenderne", "due"], a: ["vorrei prenderne due"] },
          { t: "listen", it: "Quante fette di torta vuoi? — Ne voglio una, grazie." },
          { t: "speak", it: "Hai fratelli? — Sì, ne ho due." }
        ]
      },
      {
        id: "a1-u07-l4",
        cefr: "A1",
        titleIt: "Il conto, per favore",
        grammar: {
          examples: [
            { it: "Possiamo avere il conto, per favore?" },
            { it: "Il coperto è due euro a persona." },
            { it: "Purtroppo il POS non funziona." },
            { it: "Tenga pure il resto." },
            { it: "Complimenti al cuoco, squisito!" },
            { it: "Buona serata!" }
          ]
        },
        vocab: [
          { it: "il conto" },
          { it: "alla romana" },
          { it: "conti separati" },
          { it: "offro io" },
          { it: "la mancia" },
          { it: "il POS" },
          { it: "il resto" },
          { it: "squisito" },
          { it: "complimenti" },
          { it: "era tutto buonissimo" },
          { it: "buona serata" },
          { it: "torneremo" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "pl-it",
            a: ["possiamo avere il conto", "possiamo avere il conto?", "il conto per favore"]
          },
          { t: "fill", a: ["offro"] },
          {
            t: "match",
            pairs: [{ it: "la mancia" }, { it: "il resto" }, { it: "squisito" }, { it: "conti separati" }]
          },
          {
            t: "cloze",
            text: "— {{1}} tutto buonissimo, complimenti! — Grazie! — Il {{2}}, per favore. Si può pagare con la {{3}}?",
            gaps: [["era"], ["conto"], ["carta"]]
          },
          {
            t: "order",
            tokens: ["Paghiamo", "alla", "romana,", "grazie"],
            a: ["paghiamo alla romana grazie"]
          },
          {
            t: "dialogue",
            lines: [
              {
                sp: "TY",
                choices: ["Il conto, per favore.", "Il coperto, per favore.", "Il contorno, per favore."],
                a: 0
              },
              { sp: "A", it: "Subito. Tutto bene stasera?" },
              {
                sp: "TY",
                choices: ["Era tutto buonissimo, complimenti!", "Era tutto caro.", "Non c'è male."],
                a: 0
              },
              { sp: "A", it: "Grazie mille! Sono quarantasei euro." },
              {
                sp: "TY",
                choices: ["Si può pagare con la carta?", "Posso avere il resto?", "Offro io il conto?"],
                a: 0
              }
            ]
          },
          { t: "listen", it: "Il conto è quarantasei euro, coperto incluso." },
          { t: "speak", it: "Era tutto buonissimo, complimenti al cuoco!" }
        ]
      }
    ],
    test: {
      id: "a1-u07-test",
      cefr: "A1",
      titleIt: "Test — A tavola",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["prenotare"] },
        { t: "fill", a: ["ne"] },
        { t: "fill", a: ["allergica"] },
        { t: "trans", dir: "pl-it", a: ["il conto per favore", "il conto, per favore"] },
        {
          t: "match",
          pairs: [{ it: "alla romana" }, { it: "offro io" }, { it: "squisito" }, { it: "da bere" }]
        },
        {
          t: "order",
          tokens: ["Per", "me", "una", "carbonara,", "senza", "cipolla"],
          a: ["per me una carbonara senza cipolla"]
        },
        { t: "listen", it: "Da bere prendiamo una bottiglia d'acqua naturale." },
        { t: "speak", it: "Possiamo avere il conto, per favore?" }
      ]
    }
  }
]);
