/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/a2-02.js
   Powstało z data/a2-02.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("A2", [
  {
    id: "a2-u05",
    icon: "🔑",
    titleIt: "Casa e quartiere",
    lessons: [
      {
        id: "a2-u05-l1",
        cefr: "A2",
        titleIt: "Cerco un bilocale",
        grammar: {
          examples: [
            { it: "Cerco un bilocale arredato in zona universitaria." },
            { it: "Qual è l'affitto mensile, spese incluse?" },
            { it: "A quanto ammontano le spese condominiali?" },
            { it: "La cauzione è di tre mensilità." },
            { it: "È un contratto 4+4 o transitorio?" },
            { it: "Sono ammessi animali?" }
          ]
        },
        vocab: [
          { it: "l'affitto" },
          { it: "affittare" },
          { it: "il proprietario" },
          { it: "l'inquilino" },
          { it: "le spese condominiali" },
          { it: "la cauzione" },
          { it: "il contratto" },
          { it: "arredato / vuoto" },
          { it: "luminoso" },
          { it: "il piano terra" },
          { it: "il riscaldamento" },
          { it: "l'agenzia immobiliare" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["cauzione"] },
          {
            t: "match",
            pairs: [
              { it: "l'inquilino" },
              { it: "il proprietario" },
              { it: "arredato" },
              { it: "il piano terra" }
            ]
          },
          {
            t: "trans",
            dir: "pl-it",
            a: ["quanto sono le spese condominiali", "a quanto ammontano le spese condominiali"]
          },
          {
            t: "cloze",
            text: "Qual è l'{{1}} mensile? Le {{2}} sono incluse? E la {{3}}?",
            gaps: [["affitto"], ["spese"], ["cauzione"]]
          },
          {
            t: "order",
            tokens: ["Cerco", "un", "bilocale", "arredato", "in", "centro"],
            a: ["cerco un bilocale arredato in centro"]
          },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Bilocale luminoso, arredato, secondo piano, spese escluse." },
          { t: "speak", it: "Vorrei sapere a quanto ammontano le spese condominiali." }
        ]
      },
      {
        id: "a2-u05-l2",
        cefr: "A2",
        titleIt: "Ci vado spesso",
        grammar: {
          examples: [
            { it: "Sei mai stato in Sicilia? — Sì, ci sono stato due volte." },
            { it: "Quanto ci vuole da qui alla stazione?" },
            { it: "Ci metto venti minuti a piedi." },
            { it: "Non ce la faccio più, sono stanchissima." },
            { it: "Che c'entra questo con il contratto?" },
            { it: "Al mercato ci vado ogni sabato." }
          ]
        },
        vocab: [
          { it: "ci vado" },
          { it: "ci vuole / ci vogliono" },
          { it: "ci metto" },
          { it: "farcela" },
          { it: "che c'entra?" },
          { it: "il traslocо" },
          { it: "il vicino" },
          { it: "il condominio" },
          { it: "il portone" },
          { it: "il citofono" },
          { it: "la bolletta" },
          { it: "l'idraulico" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["ci"] },
          { t: "fill", a: ["ci"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2] },
          {
            t: "cloze",
            text: "— Quanto {{1}} vuole per arrivare? — {{2}} metto mezz'ora in metro.",
            gaps: [["ci"], ["ci"]]
          },
          {
            t: "trans",
            dir: "pl-it",
            a: ["al mercato ci vado ogni sabato", "ci vado ogni sabato al mercato"]
          },
          { t: "listen", it: "Ci vogliono almeno due ore per finire il trasloco." },
          { t: "speak", it: "In centro ci vado a piedi, ci metto venti minuti." }
        ]
      },
      {
        id: "a2-u05-l3",
        cefr: "A2",
        titleIt: "Il salotto e la cucina",
        grammar: {
          examples: [
            { it: "L'appartamento è al terzo piano senza ascensore." },
            { it: "La cucina è piccola ma abitabile." },
            { it: "Il balcone dà sul cortile interno." },
            { it: "C'è un ripostiglio accanto all'ingresso." },
            { it: "Le finestre danno a sud, quindi è molto luminoso." },
            { it: "Il riscaldamento è autonomo." }
          ]
        },
        vocab: [
          { it: "il soggiorno" },
          { it: "la camera da letto" },
          { it: "il bagno" },
          { it: "il corridoio" },
          { it: "il ripostiglio" },
          { it: "il divano" },
          { it: "l'armadio" },
          { it: "la scrivania" },
          { it: "il frigorifero" },
          { it: "la lavatrice" },
          { it: "dare su" },
          { it: "il riscaldamento autonomo" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "la camera da letto" },
              { it: "il soggiorno" },
              { it: "la cucina" },
              { it: "lo studio" }
            ]
          },
          { t: "fill", a: ["al"] },
          { t: "fill", a: ["dà", "da"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Il divano è {{1}} fronte alla finestra e la libreria è {{2}} al divano.",
            gaps: [["di"], ["accanto"]]
          },
          { t: "trans", dir: "pl-it", a: ["l'appartamento è al terzo piano senza ascensore"] },
          {
            t: "order",
            tokens: ["Le", "finestre", "danno", "a", "sud,", "quindi", "è", "molto", "luminoso"],
            a: ["le finestre danno a sud quindi è molto luminoso"]
          },
          {
            t: "gender",
            opts: ["il", "lo", "la", "l'", "i", "gli", "le"],
            items: [
              { it: "armadio", a: "l'" },
              { it: "scrivania", a: "la" },
              { it: "studio", a: "lo" },
              { it: "corridoio", a: "il" }
            ]
          },
          { t: "listen", it: "La camera da letto dà sul cortile, quindi è silenziosa." },
          { t: "speak", it: "Il soggiorno è luminoso e la cucina è abitabile." }
        ]
      },
      {
        id: "a2-u05-l4",
        cefr: "A2",
        titleIt: "Il rubinetto perde",
        grammar: {
          examples: [
            { it: "Buongiorno, le scrivo perché il boiler non funziona da ieri." },
            { it: "Il rubinetto del bagno perde acqua." },
            { it: "Potrebbe mandare un idraulico?" },
            { it: "Quando può passare il tecnico?" },
            { it: "Sono in casa dopo le sei." },
            { it: "Grazie per la rapidità." }
          ]
        },
        vocab: [
          { it: "il rubinetto" },
          { it: "perdere acqua" },
          { it: "rompersi" },
          { it: "la serratura" },
          { it: "il boiler" },
          { it: "la corrente" },
          { it: "saltare la corrente" },
          { it: "l'idraulico" },
          { it: "l'elettricista" },
          { it: "il tecnico" },
          { it: "segnalare" },
          { it: "la manutenzione" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["saltata"] },
          { t: "fill", a: ["rotta"] },
          {
            t: "match",
            pairs: [
              { it: "l'idraulico" },
              { it: "l'elettricista" },
              { it: "il tecnico" },
              { it: "l'amministratore" }
            ]
          },
          {
            t: "trans",
            dir: "pl-it",
            a: ["potrebbe mandare un idraulico", "potrebbe mandare un idraulico?"]
          },
          {
            t: "cloze",
            text: "Buongiorno, volevo {{1}} che il boiler non {{2}} da ieri. {{3}} mandare un tecnico?",
            gaps: [["segnalarle", "segnalare"], ["funziona"], ["potrebbe"]]
          },
          { t: "mcq", a: 1 },
          {
            t: "order",
            tokens: ["Sono", "in", "casa", "dopo", "le", "sei"],
            a: ["sono in casa dopo le sei"]
          },
          { t: "listen", it: "Il riscaldamento non si accende e fa molto freddo in casa." },
          { t: "speak", it: "Volevo segnalarle che il rubinetto del bagno perde." }
        ]
      }
    ],
    test: {
      id: "a2-u05-test",
      cefr: "A2",
      titleIt: "Test — Casa e quartiere",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["cauzione"] },
        { t: "fill", a: ["ci"] },
        { t: "fill", a: ["ci"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["al"] },
        { t: "fill", a: ["perde"] },
        {
          t: "match",
          pairs: [
            { it: "l'inquilino" },
            { it: "il ripostiglio" },
            { it: "la lavatrice" },
            { it: "saltare la corrente" }
          ]
        },
        { t: "listen", it: "Cerco un bilocale arredato, spese incluse, vicino al centro." },
        { t: "speak", it: "Ci vogliono venti minuti a piedi dalla stazione." }
      ]
    }
  },
  {
    id: "a2-u06",
    icon: "💼",
    titleIt: "Al lavoro",
    lessons: [
      {
        id: "a2-u06-l1",
        cefr: "A2",
        titleIt: "Potrebbe richiamarmi?",
        grammar: {
          examples: [
            { it: "Pronto? Sono Anna, chiamo per l'appuntamento." },
            { it: "Mi passa il signor Rossi, per favore?" },
            { it: "Mi dispiace, in questo momento è occupato." },
            { it: "Potrebbe dirgli che ho chiamato?" },
            { it: "Le lascio il mio numero." },
            { it: "Richiamo più tardi, grazie." }
          ]
        },
        vocab: [
          { it: "pronto?" },
          { it: "chi parla?" },
          { it: "mi passa…?" },
          { it: "è in riunione" },
          { it: "lasciare un messaggio" },
          { it: "richiamare" },
          { it: "l'appuntamento" },
          { it: "spostare" },
          { it: "disdire" },
          { it: "la linea è occupata" },
          { it: "non la sento bene" },
          { it: "le dispiacerebbe…?" }
        ],
        exercises: [
          { t: "conj", verb: "potere", tense: "condizionale", persons: [0, 1, 2, 3] },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["potrebbe"] },
          { t: "fill", a: ["mi passa"] },
          {
            t: "match",
            pairs: [{ it: "è in riunione" }, { it: "spostare" }, { it: "disdire" }, { it: "richiamare" }]
          },
          { t: "trans", dir: "pl-it", a: ["vorrei spostare l'appuntamento"] },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Pronto, Studio Bianchi, buongiorno." },
              {
                sp: "TY",
                choices: [
                  "Buongiorno, sono Anna Nowak. Mi passa il signor Rossi?",
                  "Ciao, dammi Rossi.",
                  "Buongiorno, chi parla?"
                ],
                a: 0
              },
              { sp: "A", it: "Mi dispiace, in questo momento è in riunione." },
              {
                sp: "TY",
                choices: [
                  "Potrebbe dirgli di richiamarmi?",
                  "Deve richiamarmi subito.",
                  "Lo aspetto, grazie."
                ],
                a: 0
              },
              { sp: "A", it: "Certo. Mi lascia il suo numero?" }
            ]
          },
          {
            t: "cloze",
            text: "Buongiorno, {{1}} parlare con la signora Bianchi? Se è occupata, {{2}} richiamarmi nel pomeriggio?",
            gaps: [["vorrei"], ["potrebbe"]]
          },
          { t: "listen", it: "In questo momento è occupato, vuole lasciare un messaggio?" },
          { t: "speak", it: "Pronto, sono Anna. Potrebbe passarmi il signor Rossi?" }
        ]
      },
      {
        id: "a2-u06-l2",
        cefr: "A2",
        titleIt: "Scrivere una mail",
        grammar: {
          examples: [
            { it: "Gentile Dott. Bianchi, le scrivo in merito all'offerta di ieri." },
            { it: "Le invio in allegato il preventivo aggiornato." },
            { it: "Le sarei grato se potesse confermare entro venerdì." },
            { it: "Resto a disposizione per qualsiasi chiarimento." },
            { it: "Ciao Marco, ti allego il file di cui parlavamo." },
            { it: "Grazie in anticipo." }
          ]
        },
        vocab: [
          { it: "gentile" },
          { it: "in merito a" },
          { it: "in allegato" },
          { it: "il preventivo" },
          { it: "confermare" },
          { it: "il riscontro" },
          { it: "restare a disposizione" },
          { it: "cordiali saluti" },
          { it: "grazie in anticipo" },
          { it: "la scadenza" },
          { it: "entro" },
          { it: "il chiarimento" }
        ],
        exercises: [
          { t: "mcq", a: 2 },
          { t: "fill", a: ["in"] },
          { t: "fill", a: ["in"] },
          {
            t: "match",
            pairs: [
              { it: "il preventivo" },
              { it: "il riscontro" },
              { it: "la scadenza" },
              { it: "il chiarimento" }
            ]
          },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "pl-it",
            a: [
              "le invio in allegato il preventivo aggiornato",
              "ti invio in allegato il preventivo aggiornato"
            ]
          },
          {
            t: "cloze",
            text: "{{1}} Dott.ssa Rossi, le scrivo {{2}} merito alla riunione di giovedì. Resto in attesa di un suo {{3}}. Cordiali saluti.",
            gaps: [["gentile"], ["in"], ["riscontro"]]
          },
          {
            t: "order",
            tokens: ["Le", "sarei", "grato", "se", "potesse", "confermare", "entro", "venerdì"],
            a: ["le sarei grato se potesse confermare entro venerdì"]
          },
          { t: "listen", it: "Le invio in allegato il documento richiesto, resto a disposizione." },
          { t: "speak", it: "Gentile Dottoressa, le scrivo in merito alla nostra riunione." }
        ]
      },
      {
        id: "a2-u06-l3",
        cefr: "A2",
        titleIt: "Qui si lavora così",
        grammar: {
          examples: [
            { it: "In questo ufficio si lavora anche il sabato." },
            { it: "Come si dice „biurko” in italiano?" },
            { it: "Qui non si fuma." },
            { it: "Si vendono appartamenti in questa zona." },
            { it: "Quando si è nuovi, si fanno molte domande." },
            { it: "Ci si abitua in fretta." }
          ]
        },
        vocab: [
          { it: "si dice" },
          { it: "si fa" },
          { it: "non si può" },
          { it: "l'ufficio" },
          { it: "la riunione" },
          { it: "il collega" },
          { it: "lo stipendio" },
          { it: "le ferie" },
          { it: "il permesso" },
          { it: "lo straordinario" },
          { it: "la scadenza" },
          { it: "abituarsi a" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["si"] },
          { t: "fill", a: ["si"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "In questo ufficio {{1}} lavora molto e {{2}} fanno spesso straordinari.",
            gaps: [["si"], ["si"]]
          },
          { t: "trans", dir: "pl-it", a: ["qui non si fuma"] },
          { t: "multi", a: [0, 2] },
          { t: "order", tokens: ["Ci", "si", "abitua", "in", "fretta"], a: ["ci si abitua in fretta"] },
          { t: "listen", it: "In questa azienda si lavora molto ma si guadagna bene." },
          { t: "speak", it: "Come si dice „deadline” in italiano? Si dice scadenza." }
        ]
      },
      {
        id: "a2-u06-l4",
        cefr: "A2",
        titleIt: "In riunione",
        grammar: {
          examples: [
            { it: "Riassumo i punti principali." },
            { it: "Su questo punto ho qualche dubbio." },
            { it: "Possiamo rimandare la decisione a lunedì?" },
            { it: "Per me è lo stesso, decidete voi." },
            { it: "Chi si occupa di questo?" },
            { it: "Ci sentiamo domani per i dettagli." }
          ]
        },
        vocab: [
          { it: "la riunione" },
          { it: "l'ordine del giorno" },
          { it: "riassumere" },
          { it: "rimandare" },
          { it: "occuparsi di" },
          { it: "sono d'accordo" },
          { it: "non sono convinto" },
          { it: "dipende" },
          { it: "che ne dite di…?" },
          { it: "per me è lo stesso" },
          { it: "ci sentiamo" },
          { it: "il punto all'ordine" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "sono d'accordo" },
              { it: "dipende" },
              { it: "rimandare" },
              { it: "occuparsi di" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["che"] },
          { t: "fill", a: ["si"] },
          {
            t: "trans",
            dir: "pl-it",
            a: ["possiamo rimandare la decisione a lunedì", "possiamo rimandare la decisione a lunedì?"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Allora, dobbiamo fissare la prossima riunione." },
              {
                sp: "TY",
                choices: ["Che ne dite di giovedì?", "Giovedì è obbligatorio.", "Facciamo mai giovedì."],
                a: 0
              },
              { sp: "A", it: "Giovedì mattina ho già un impegno. Nel pomeriggio?" },
              {
                sp: "TY",
                choices: [
                  "A me va bene, facciamo così.",
                  "Non sono d'accordo per niente.",
                  "Per me è lo stesso, dipende."
                ],
                a: 0
              }
            ]
          },
          {
            t: "cloze",
            text: "Scusa se ti {{1}}, ma su questo punto ho qualche {{2}}.",
            gaps: [["interrompo"], ["dubbio"]]
          },
          {
            t: "order",
            tokens: ["Riassumo", "i", "punti", "principali"],
            a: ["riassumo i punti principali"]
          },
          { t: "listen", it: "Rimandiamo la decisione alla prossima riunione." },
          { t: "speak", it: "Sono d'accordo, ma vorrei aggiungere una cosa." }
        ]
      }
    ],
    test: {
      id: "a2-u06-test",
      cefr: "A2",
      titleIt: "Test — Al lavoro",
      exercises: [
        { t: "conj", verb: "potere", tense: "condizionale", persons: [1, 2] },
        { t: "fill", a: ["potrebbe"] },
        { t: "fill", a: ["in"] },
        { t: "fill", a: ["in"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["si"] },
        {
          t: "match",
          pairs: [
            { it: "il preventivo" },
            { it: "le ferie" },
            { it: "lo stipendio" },
            { it: "la scadenza" }
          ]
        },
        {
          t: "trans",
          dir: "pl-it",
          a: ["sono d'accordo ma ho un dubbio", "sono d'accordo, ma ho qualche dubbio"]
        },
        { t: "listen", it: "Potrebbe confermarmi l'appuntamento entro venerdì?" },
        { t: "speak", it: "Vorrei spostare la riunione a giovedì pomeriggio." }
      ]
    }
  },
  {
    id: "a2-u07",
    icon: "🎉",
    titleIt: "Feste e tradizioni",
    lessons: [
      {
        id: "a2-u07-l1",
        cefr: "A2",
        titleIt: "Auguri!",
        grammar: {
          examples: [
            { it: "Tanti auguri di buon compleanno!" },
            { it: "Buone feste a te e alla tua famiglia." },
            { it: "In bocca al lupo per l'esame! — Crepi!" },
            { it: "Buon lavoro!" },
            { it: "Buon weekend! — Altrettanto!" },
            { it: "Congratulazioni per la promozione!" }
          ]
        },
        vocab: [
          { it: "auguri!" },
          { it: "buon compleanno" },
          { it: "buone feste" },
          { it: "buon anno" },
          { it: "in bocca al lupo" },
          { it: "crepi!" },
          { it: "altrettanto" },
          { it: "congratulazioni" },
          { it: "il compleanno" },
          { it: "l'onomastico" },
          { it: "Ferragosto" },
          { it: "il ponte" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["viaggio"] },
          { t: "fill", a: ["altrettanto"] },
          { t: "match", pairs: [{ it: "urodziny" }, { it: "Nowy Rok" }, { it: "awans" }, { it: "podróż" }] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "pl-it", a: ["buone feste a te e alla tua famiglia"] },
          { t: "listen", it: "Tanti auguri di buon compleanno e buone feste!" },
          { t: "speak", it: "In bocca al lupo per l'esame! — Crepi!" }
        ]
      },
      {
        id: "a2-u07-l2",
        cefr: "A2",
        titleIt: "Ti va di venire?",
        grammar: {
          examples: [
            { it: "Sabato facciamo una cena a casa, vieni anche tu?" },
            { it: "Volentieri! A che ora vi trovate?" },
            { it: "Mi dispiace, sabato ho già un impegno." },
            { it: "Posso portare qualcuno?" },
            { it: "Porto il dolce, va bene?" },
            { it: "Ci vediamo lì verso le otto e mezza." }
          ]
        },
        vocab: [
          { it: "invitare" },
          { it: "l'invito" },
          { it: "la cena" },
          { it: "la festa" },
          { it: "l'impegno" },
          { it: "volentieri" },
          { it: "purtroppo" },
          { it: "un'altra volta" },
          { it: "portare" },
          { it: "verso le otto" },
          { it: "trovarsi" },
          { it: "fare tardi" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["ti"] },
          { t: "fill", a: ["impegno"] },
          {
            t: "match",
            pairs: [{ it: "volentieri" }, { it: "purtroppo" }, { it: "l'invito" }, { it: "trovarsi" }]
          },
          {
            t: "trans",
            dir: "pl-it",
            a: ["volentieri a che ora vi trovate", "volentieri! a che ora vi trovate?"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Sabato facciamo una cena a casa. Ti va di venire?" },
              {
                sp: "TY",
                choices: ["Volentieri! A che ora?", "Purtroppo non posso.", "Cosa porto? No."],
                a: 0
              },
              { sp: "A", it: "Verso le otto e mezza. Siamo in sei." },
              { sp: "TY", choices: ["Cosa porto?", "Chi porta?", "Porti tu?"], a: 0 },
              { sp: "A", it: "Non portare niente! Al massimo il dolce." }
            ]
          },
          {
            t: "cloze",
            text: "{{1}} dispiace, sabato ho già un impegno. {{2}} un'altra volta?",
            gaps: [["mi"], ["facciamo"]]
          },
          {
            t: "order",
            tokens: ["Ci", "vediamo", "lì", "verso", "le", "otto", "e", "mezza"],
            a: ["ci vediamo lì verso le otto e mezza"]
          },
          { t: "listen", it: "Ti va di venire a cena sabato sera? Siamo in sei." },
          { t: "speak", it: "Volentieri, porto il dolce. A che ora?" }
        ]
      },
      {
        id: "a2-u07-l3",
        cefr: "A2",
        titleIt: "Regioni e differenze",
        grammar: {
          examples: [
            { it: "Sono di origine siciliana ma vivo a Milano." },
            { it: "Al nord si usa più il burro, al sud l'olio d'oliva." },
            { it: "In Veneto si parla ancora molto il dialetto." },
            { it: "Ogni regione ha la sua pasta tipica." },
            { it: "Il caffè al sud è più forte e più corto." },
            { it: "Roma è caotica ma bellissima." }
          ]
        },
        vocab: [
          { it: "la regione" },
          { it: "il capoluogo" },
          { it: "il nord / il sud" },
          { it: "il dialetto" },
          { it: "tipico" },
          { it: "la tradizione" },
          { it: "il piatto tipico" },
          { it: "l'origine" },
          { it: "caotico" },
          { it: "accogliente" },
          { it: "il campanilismo" },
          { it: "trasferirsi" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [{ it: "la Toscana" }, { it: "la Campania" }, { it: "il Veneto" }, { it: "il Piemonte" }]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["sud"] },
          { t: "trans", dir: "pl-it", a: ["ogni regione ha il suo piatto tipico"] },
          {
            t: "cloze",
            text: "Sono di {{1}} siciliana, ma vivo al nord da dieci anni. Il {{2}} lo capisco, ma non lo parlo.",
            gaps: [["origine"], ["dialetto"]]
          },
          {
            t: "order",
            tokens: ["Roma", "è", "caotica", "ma", "bellissima"],
            a: ["roma è caotica ma bellissima"]
          },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Ogni regione italiana ha la sua cucina e spesso il suo dialetto." },
          { t: "speak", it: "Sono di origine polacca, ma vivo in Toscana da tre anni." }
        ]
      },
      {
        id: "a2-u07-l4",
        cefr: "A2",
        titleIt: "Lentamente, di solito",
        grammar: {
          examples: [
            { it: "Può parlare più lentamente, per favore?" },
            { it: "Vado raramente in centro il weekend." },
            { it: "Ho già visto quel film." },
            { it: "Non ci sono ancora stato." },
            { it: "Parla bene l'italiano, ma scrive male." },
            { it: "Fallo con calma." }
          ]
        },
        vocab: [
          { it: "lentamente" },
          { it: "velocemente" },
          { it: "facilmente" },
          { it: "raramente" },
          { it: "regolarmente" },
          { it: "improvvisamente" },
          { it: "finalmente" },
          { it: "assolutamente" },
          { it: "bene / male" },
          { it: "con calma" },
          { it: "in fretta" },
          { it: "quasi" }
        ],
        exercises: [
          { t: "fill", a: ["lentamente"] },
          { t: "fill", a: ["facilmente"] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["già"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "finalmente" }, { it: "improvvisamente" }, { it: "con calma" }, { it: "quasi" }]
          },
          { t: "trans", dir: "pl-it", a: ["può parlare più lentamente", "può parlare più lentamente?"] },
          {
            t: "cloze",
            text: "Parla {{1}} l'italiano, ma scrive ancora {{2}}. Studia {{3}} tutti i giorni.",
            gaps: [["bene"], ["male"], ["regolarmente"]]
          },
          { t: "listen", it: "Finalmente ho trovato un appartamento vicino al lavoro." },
          { t: "speak", it: "Può ripetere più lentamente, per favore?" }
        ]
      }
    ],
    test: {
      id: "a2-u07-test",
      cefr: "A2",
      titleIt: "Test — Feste e tradizioni",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["crepi", "crepi il lupo"] },
        { t: "fill", a: ["altrettanto"] },
        { t: "fill", a: ["ti"] },
        { t: "mcq", a: 1 },
        {
          t: "match",
          pairs: [{ it: "la Toscana" }, { it: "la Campania" }, { it: "la Sicilia" }, { it: "il Veneto" }]
        },
        { t: "fill", a: ["regolarmente"] },
        { t: "mcq", a: 1 },
        { t: "listen", it: "Tanti auguri e buone feste a tutta la famiglia!" },
        { t: "speak", it: "Ti va di venire alla festa sabato sera?" }
      ]
    }
  },
  {
    id: "a2-u08",
    icon: "🧭",
    titleIt: "Progetti",
    lessons: [
      {
        id: "a2-u08-l1",
        cefr: "A2",
        titleIt: "Ho intenzione di…",
        grammar: {
          examples: [
            { it: "Ho intenzione di iscrivermi a un corso serale." },
            { it: "Mi piacerebbe lavorare all'estero per un anno." },
            { it: "Spero di superare l'esame a giugno." },
            { it: "Fra cinque anni chissà dove sarò." },
            { it: "Sto pensando di cambiare città." },
            { it: "Prima o poi imparerò a suonare il piano." }
          ]
        },
        vocab: [
          { it: "ho intenzione di" },
          { it: "mi piacerebbe" },
          { it: "spero di" },
          { it: "sto pensando di" },
          { it: "sognare di" },
          { it: "chissà" },
          { it: "prima o poi" },
          { it: "all'estero" },
          { it: "il corso serale" },
          { it: "superare l'esame" },
          { it: "cambiare vita" },
          { it: "il sogno" }
        ],
        exercises: [
          { t: "fill", a: ["di"] },
          { t: "fill", a: ["di"] },
          { t: "fill", a: ["a"] },
          { t: "mcq", a: 1 },
          { t: "conj", verb: "essere", tense: "futuro", persons: [0, 2, 5] },
          { t: "trans", dir: "pl-it", a: ["mi piacerebbe lavorare all'estero per un anno"] },
          {
            t: "cloze",
            text: "{{1}} intenzione di iscrivermi a un corso e {{2}} di superare l'esame a giugno.",
            gaps: [["ho"], ["spero"]]
          },
          {
            t: "order",
            tokens: ["Prima", "o", "poi", "imparerò", "a", "suonare", "il", "piano"],
            a: ["prima o poi imparerò a suonare il piano"]
          },
          { t: "listen", it: "Sto pensando di cambiare città l'anno prossimo." },
          { t: "speak", it: "Mi piacerebbe vivere in Italia per almeno un anno." }
        ]
      },
      {
        id: "a2-u08-l2",
        cefr: "A2",
        titleIt: "Ripasso: i tempi",
        grammar: {
          examples: [
            { it: "Mentre studiavo, è arrivata una mail importante." },
            { it: "Quando sono uscita, aveva già smesso di piovere." },
            { it: "Domani ti chiamerò appena avrò finito." },
            { it: "Vorrei chiederti un favore." },
            { it: "Da piccola non mi piaceva il pesce." },
            { it: "L'ho conosciuta l'anno scorso a Roma." }
          ]
        },
        vocab: [
          { it: "il tempo verbale" },
          { it: "l'errore comune" },
          { it: "la concordanza" },
          { it: "il participio" },
          { it: "l'ausiliare" },
          { it: "ripassare" },
          { it: "confondere" },
          { it: "distinguere" }
        ],
        exercises: [
          {
            t: "cloze",
            text: "Mentre {{1}} (studiare, io), {{2}} (arrivare) una mail importante.",
            gaps: [["studiavo"], ["è arrivata"]]
          },
          {
            t: "cloze",
            text: "Quando {{1}} (uscire, io - kobieta), {{2}} (smettere) già di piovere.",
            gaps: [["sono uscita"], ["aveva"]]
          },
          {
            t: "cloze",
            text: "Domani ti {{1}} (chiamare) appena {{2}} (finire).",
            gaps: [["chiamerò"], ["avrò finito", "finisco"]]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "conj", verb: "avere", tense: "imperf", persons: [0, 2, 3] },
          { t: "conj", verb: "andare", tense: "futuro", persons: [0, 2, 5] },
          { t: "conj", verb: "volere", tense: "condizionale", persons: [0, 1, 2] },
          { t: "trans", dir: "pl-it", a: ["vorrei chiederti un favore", "vorrei chiederti una cosa"] },
          { t: "listen", it: "Da piccola non mi piaceva il pesce, adesso lo adoro." },
          { t: "speak", it: "Ieri sono andata al cinema e il film mi è piaciuto molto." }
        ]
      },
      {
        id: "a2-u08-l3",
        cefr: "A2",
        titleIt: "Ripasso: pronomi",
        grammar: {
          examples: [
            { it: "Il libro? L'ho letto la settimana scorsa." },
            { it: "A Marco? Gli ho già risposto." },
            { it: "Le chiavi? Non le trovo più." },
            { it: "In palestra ci vado tre volte a settimana." },
            { it: "Quanti ne vuoi? — Ne voglio tre." },
            { it: "Mi sono alzata alle sei." }
          ]
        },
        vocab: [
          { it: "il pronome" },
          { it: "diretto / indiretto" },
          { it: "riflessivo" },
          { it: "sostituire" },
          { it: "ripetere" },
          { it: "evitare" },
          { it: "la ripetizione" },
          { it: "scorrevole" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["le"] },
          { t: "fill", a: ["ne"] },
          { t: "fill", a: ["ci"] },
          { t: "fill", a: ["e"] },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "cloze",
            text: "Il libro? {{1}}'ho letto. A Marco? {{2}} ho scritto ieri. Al mercato? {{3}} vado sabato.",
            gaps: [["l"], ["gli"], ["ci"]]
          },
          { t: "listen", it: "Le ho scritto una mail, ma non mi ha ancora risposto." },
          { t: "speak", it: "Il film? L'ho visto ieri e mi è piaciuto molto." }
        ]
      },
      {
        id: "a2-u08-l4",
        cefr: "A2",
        titleIt: "Pronti per il B1",
        vocab: [
          { it: "il congiuntivo" },
          { it: "l'opinione" },
          { it: "il dubbio" },
          { it: "argomentare" },
          { it: "la burocrazia" },
          { it: "pronto per" },
          { it: "il progresso" },
          { it: "ce la posso fare" }
        ],
        exercises: [
          {
            t: "cloze",
            text: "Ieri {{1}} (andare, io - kobieta) al cinema con Marta. Il film {{2}} (essere) lungo ma bello.",
            gaps: [["sono andata"], ["era"]]
          },
          { t: "conj", verb: "essere", tense: "imperf", persons: [0, 2, 3, 5] },
          { t: "conj", verb: "andare", tense: "futuro", persons: [0, 2, 3] },
          { t: "conj", verb: "potere", tense: "condizionale", persons: [1, 2] },
          { t: "fill", a: ["le"] },
          { t: "fill", a: ["gli"] },
          { t: "fill", a: ["ci"] },
          { t: "fill", a: ["fa"] },
          { t: "fill", a: ["di"] },
          {
            t: "trans",
            dir: "pl-it",
            a: ["quando avrò finito il lavoro ti chiamerò", "quando finisco il lavoro ti chiamo"]
          },
          { t: "listen", it: "Mentre tornavo a casa ho incontrato Giulia e le ho parlato del progetto." },
          { t: "speak", it: "L'anno prossimo mi piacerebbe trasferirmi in Italia per lavoro." }
        ]
      }
    ],
    test: {
      id: "a2-u08-test",
      cefr: "A2",
      titleIt: "Esame finale A2",
      exercises: [
        { t: "conj", verb: "fare", tense: "imperf", persons: [0, 2, 5] },
        { t: "conj", verb: "venire", tense: "futuro", persons: [0, 2, 5] },
        {
          t: "cloze",
          text: "Mentre {{1}} (aspettare, io) l'autobus, {{2}} (incontrare) un vecchio amico.",
          gaps: [["aspettavo"], ["ho incontrato"]]
        },
        { t: "fill", a: ["era"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["gli"] },
        { t: "fill", a: ["ne"] },
        { t: "fill", a: ["sarebbe"] },
        { t: "fill", a: ["si vendono"] },
        { t: "fill", a: ["facilmente"] },
        {
          t: "trans",
          dir: "pl-it",
          a: ["vorrei spostare l'appuntamento a giovedì", "vorrei spostare la riunione a giovedì"]
        },
        { t: "speak", it: "Ieri sono andata dal medico perché mi faceva male la gola." }
      ]
    }
  }
]);
