/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/b1-01.js
   Powstało z data/b1-01.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("B1", [
  {
    id: "b1-u01",
    icon: "🌀",
    titleIt: "Penso che sia",
    lessons: [
      {
        id: "b1-u01-l1",
        cefr: "B1",
        titleIt: "Congiuntivo presente",
        grammar: {
          examples: [
            { it: "Penso che tu abbia ragione." },
            { it: "Credo che sia troppo tardi." },
            { it: "Non sono sicuro che venga." },
            { it: "Spero che tutto vada bene." },
            { it: "Voglio che tu mi dica la verità." },
            { it: "So che è bravo." }
          ]
        },
        vocab: [
          { it: "penso che…" },
          { it: "credo che…" },
          { it: "mi sembra che…" },
          { it: "spero che…" },
          { it: "voglio che…" },
          { it: "temo che…" },
          { it: "non sono sicuro che…" },
          { it: "immagino che…" },
          { it: "è possibile che…" },
          { it: "bisogna che…" },
          { it: "so che… (indicativo)" },
          { it: "è vero che… (indicativo)" }
        ],
        exercises: [
          { t: "conj", verb: "essere", tense: "cong", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "avere", tense: "cong", persons: [0, 3, 4, 5] },
          { t: "conj", verb: "andare", tense: "cong", persons: [0, 2, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["abbia"] },
          { t: "fill", a: ["sia"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Spero che tutto {{1}} (andare) bene e che voi {{2}} (essere) contenti.",
            gaps: [["vada"], ["siate"]]
          },
          { t: "trans", dir: "toIt", a: ["voglio che tu mi dica la verità"] },
          { t: "listen", it: "Credo che sia meglio rimandare la riunione." },
          { t: "speak", it: "Penso che tu abbia ragione su questo punto." }
        ]
      },
      {
        id: "b1-u01-l2",
        cefr: "B1",
        titleIt: "Quando serve il congiuntivo",
        grammar: {
          examples: [
            { it: "Benché piova, andiamo lo stesso." },
            { it: "Nonostante sia stanco, continuo a lavorare." },
            { it: "Ti aiuto purché tu faccia la tua parte." },
            { it: "Parti prima che arrivi il traffico." },
            { it: "Penso di partire domani." },
            { it: "Siccome è tardi, rimando a domani." }
          ]
        },
        vocab: [
          { it: "benché / sebbene" },
          { it: "nonostante" },
          { it: "affinché / perché (finale)" },
          { it: "purché" },
          { it: "a meno che (non)" },
          { it: "prima che" },
          { it: "senza che" },
          { it: "come se" },
          { it: "può darsi che" },
          { it: "siccome" },
          { it: "è chiaro che" },
          { it: "ritenere" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["faccia"] },
          { t: "fill", a: ["di"] },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "cloze",
            text: "Nonostante {{1}} (essere, lui) stanco, continua a lavorare. So che {{2}} (avere) molta pazienza.",
            gaps: [["sia"], ["ha"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["benché piova usciamo lo stesso", "nonostante piova usciamo lo stesso"]
          },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Può darsi che domani non ci sia nessuno in ufficio." },
          { t: "speak", it: "Nonostante sia difficile, penso che valga la pena." }
        ]
      },
      {
        id: "b1-u01-l3",
        cefr: "B1",
        titleIt: "Congiuntivo passato",
        grammar: {
          examples: [
            { it: "Mi dispiace che tu non sia potuto venire." },
            { it: "Non credo che l'abbiano fatto apposta." },
            { it: "È strano che non abbia risposto." },
            { it: "Sembra che siano già partiti." },
            { it: "Spero che vi siate divertiti." },
            { it: "Temo che abbiamo sbagliato strada." }
          ]
        },
        vocab: [
          { it: "mi dispiace che" },
          { it: "è strano che" },
          { it: "sembra che" },
          { it: "pare che" },
          { it: "ho l'impressione che" },
          { it: "apposta" },
          { it: "per sbaglio" },
          { it: "sbagliare strada" },
          { it: "accorgersi di" },
          { it: "rendersi conto" },
          { it: "a quanto pare" },
          { it: "in effetti" }
        ],
        exercises: [
          { t: "fill", a: ["sia"] },
          { t: "fill", a: ["abbiano"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Mi dispiace che tu non {{1}} (potere) venire e che {{2}} (perdere, tu) la festa.",
            gaps: [["sia potuto", "sia potuta"], ["abbia perso"]]
          },
          { t: "trans", dir: "toIt", a: ["non credo che l'abbiano fatto apposta"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [
              { it: "a quanto pare" },
              { it: "apposta" },
              { it: "per sbaglio" },
              { it: "rendersi conto" }
            ]
          },
          {
            t: "order",
            tokens: ["Sembra", "che", "siano", "già", "partiti"],
            a: ["sembra che siano già partiti"]
          },
          { t: "listen", it: "È strano che non abbia ancora risposto al messaggio." },
          { t: "speak", it: "Spero che vi siate divertiti alla festa." }
        ]
      },
      {
        id: "b1-u01-l4",
        cefr: "B1",
        titleIt: "Secondo me, invece",
        grammar: {
          examples: [
            { it: "Secondo me il problema è un altro." },
            { it: "Ho l'impressione che non ci capiamo." },
            { it: "Da un lato hai ragione, dall'altro esagerate." },
            { it: "Non sono del tutto d'accordo con questa lettura." },
            { it: "Anzi, direi proprio il contrario." },
            { it: "Dipende da cosa intendi per „efficace”." }
          ]
        },
        vocab: [
          { it: "secondo me" },
          { it: "a mio parere" },
          { it: "ritengo che" },
          { it: "sono convinto che" },
          { it: "da un lato… dall'altro" },
          { it: "non del tutto" },
          { it: "anzi" },
          { it: "appunto" },
          { it: "insomma" },
          { it: "dipende" },
          { it: "esagerare" },
          { it: "vedere il punto" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["sia"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "appunto" }, { it: "insomma" }, { it: "dipende" }, { it: "esagerare" }]
          },
          { t: "trans", dir: "toIt", a: ["non sono del tutto d'accordo con questa opinione"] },
          {
            t: "cloze",
            text: "{{1}} me il problema è un altro. Ho l'impressione che non ci {{2}} (capire, noi).",
            gaps: [["secondo"], ["capiamo"]]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Secondo me lo smart working ha rovinato il lavoro di squadra." },
              {
                sp: "TY",
                choices: [
                  "Da un lato hai ragione, dall'altro ha ridotto lo stress.",
                  "No, sbagli.",
                  "Sono sicuro che sia vero."
                ],
                a: 0
              },
              { sp: "A", it: "Sì, però i giovani imparano meno." },
              {
                sp: "TY",
                choices: [
                  "Dipende da come l'azienda organizza il lavoro.",
                  "Appunto, hai ragione.",
                  "Anzi, non dipende."
                ],
                a: 0
              }
            ]
          },
          {
            t: "order",
            tokens: ["Anzi,", "direi", "proprio", "il", "contrario"],
            a: ["anzi direi proprio il contrario"]
          },
          { t: "listen", it: "Da un lato è vero, dall'altro mi sembra una semplificazione." },
          { t: "speak", it: "Secondo me dipende molto dal contesto." }
        ]
      }
    ],
    test: {
      id: "b1-u01-test",
      cefr: "B1",
      titleIt: "Test — Congiuntivo",
      exercises: [
        { t: "conj", verb: "essere", tense: "cong", persons: [0, 3, 4, 5] },
        { t: "conj", verb: "fare", tense: "cong", persons: [0, 3, 5] },
        { t: "fill", a: ["abbia"] },
        { t: "fill", a: ["sia"] },
        { t: "mcq", a: 0 },
        { t: "fill", a: ["di"] },
        { t: "fill", a: ["abbiano"] },
        { t: "multi", a: [1, 2] },
        { t: "listen", it: "Mi sembra che non abbiano capito il problema." },
        { t: "speak", it: "Credo che sia meglio parlarne domani." }
      ]
    }
  },
  {
    id: "b1-u02",
    icon: "🔗",
    titleIt: "Me lo dai?",
    lessons: [
      {
        id: "b1-u02-l1",
        cefr: "B1",
        titleIt: "Me lo, te la, ce ne",
        grammar: {
          examples: [
            { it: "Mi presti la macchina? — Sì, te la presto." },
            { it: "Hai dato il libro a Marco? — Sì, gliel'ho dato." },
            { it: "Ce lo spieghi di nuovo?" },
            { it: "Quante mail ti ha mandato? — Me ne ha mandate tre." },
            { it: "Puoi spiegarmelo?" },
            { it: "Dammelo, per favore." }
          ]
        },
        vocab: [
          { it: "prestare" },
          { it: "restituire" },
          { it: "spiegare" },
          { it: "mandare" },
          { it: "portare" },
          { it: "regalare" },
          { it: "consegnare" },
          { it: "chiedere in prestito" },
          { it: "di nuovo" },
          { it: "subito" },
          { it: "appena possibile" },
          { it: "fammi sapere" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["gliel'", "glielo"] },
          { t: "fill", a: ["ve la", "ce la"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "— Mi presti la macchina? — Sì, {{1}} presto volentieri. — E le chiavi? — {{2}} do subito.",
            gaps: [["te la"], ["te le"]]
          },
          { t: "trans", dir: "toIt", a: ["puoi spiegarmelo", "puoi spiegarmelo?", "me lo puoi spiegare"] },
          { t: "fill", a: ["a"] },
          { t: "order", tokens: ["Te", "le", "mando", "domani"], a: ["te le mando domani"] },
          { t: "listen", it: "Gliel'ho spiegato tre volte, ma non l'ha capito." },
          { t: "speak", it: "Me lo puoi spiegare di nuovo, per favore?" }
        ]
      },
      {
        id: "b1-u02-l2",
        cefr: "B1",
        titleIt: "Ci e ne, tutti gli usi",
        grammar: {
          examples: [
            { it: "Ci vuole pazienza con la burocrazia italiana." },
            { it: "Quanto ci metti da casa al lavoro?" },
            { it: "Non ce la faccio a finire per stasera." },
            { it: "Ci tengo che tu venga." },
            { it: "Me ne vado, è tardi." },
            { it: "Di vini non me ne intendo per niente." }
          ]
        },
        vocab: [
          { it: "volerci" },
          { it: "metterci" },
          { it: "farcela" },
          { it: "tenerci a" },
          { it: "andarsene" },
          { it: "fregarsene" },
          { it: "intendersene di" },
          { it: "entrarci" },
          { it: "avercela con" },
          { it: "la pazienza" },
          { it: "l'impegno" },
          { it: "il tempo necessario" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["ce"] },
          { t: "fill", a: ["ne"] },
          {
            t: "match",
            pairs: [{ it: "tenerci" }, { it: "intendersene" }, { it: "entrarci" }, { it: "fregarsene" }]
          },
          {
            t: "cloze",
            text: "Quanto {{1}} metti per arrivare? — {{2}} vogliono venti minuti in metro.",
            gaps: [["ci"], ["ci"]]
          },
          { t: "trans", dir: "toIt", a: ["di vini non me ne intendo", "non me ne intendo di vini"] },
          { t: "mcq", a: 0 },
          { t: "listen", it: "Ci vuole molta pazienza, ma alla fine ce la facciamo." },
          { t: "speak", it: "Non ce la faccio a finire tutto oggi." }
        ]
      },
      {
        id: "b1-u02-l3",
        cefr: "B1",
        titleIt: "Il libro che ho letto",
        grammar: {
          examples: [
            { it: "Il libro che sto leggendo è bellissimo." },
            { it: "La città in cui sono cresciuta è piccola." },
            { it: "Il motivo per cui ti scrivo è semplice." },
            { it: "La collega la cui figlia studia a Roma." },
            { it: "Chi dorme non piglia pesci." },
            { it: "Ecco quello di cui ti parlavo." }
          ]
        },
        vocab: [
          { it: "che" },
          { it: "cui" },
          { it: "il quale" },
          { it: "chi" },
          { it: "il motivo" },
          { it: "crescere" },
          { it: "l'autore" },
          { it: "quello di cui" },
          { it: "il periodo" },
          { it: "l'epoca" },
          { it: "grazie al quale" },
          { it: "nel caso in cui" }
        ],
        exercises: [
          { t: "fill", a: ["che"] },
          { t: "fill", a: ["cui"] },
          { t: "fill", a: ["cui"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Il collega {{1}} lavora con me è la persona a {{2}} devo tutto.",
            gaps: [["che"], ["cui"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["il motivo per cui ti scrivo è semplice", "il motivo per cui scrivo è semplice"]
          },
          {
            t: "order",
            tokens: ["Ecco", "quello", "di", "cui", "ti", "parlavo"],
            a: ["ecco quello di cui ti parlavo"]
          },
          { t: "listen", it: "L'anno in cui sono arrivata in Italia è stato il più difficile." },
          { t: "speak", it: "La città in cui sono cresciuta è molto piccola." }
        ]
      },
      {
        id: "b1-u02-l4",
        cefr: "B1",
        titleIt: "Qualcuno, nessuno, ogni",
        grammar: {
          examples: [
            { it: "Ci vediamo tra qualche giorno." },
            { it: "Alcuni colleghi non sono d'accordo." },
            { it: "Ogni volta è la stessa storia." },
            { it: "Non ho visto nessuno in ufficio." },
            { it: "Nessuno mi ha avvisato." },
            { it: "Vuoi qualcosa da bere?" }
          ]
        },
        vocab: [
          { it: "qualche" },
          { it: "alcuni / alcune" },
          { it: "ogni" },
          { it: "ciascuno" },
          { it: "qualcuno" },
          { it: "nessuno" },
          { it: "qualcosa" },
          { it: "niente / nulla" },
          { it: "chiunque" },
          { it: "dovunque" },
          { it: "nemmeno" },
          { it: "avvisare" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["nessuno"] },
          { t: "fill", a: ["nessuno"] },
          { t: "fill", a: ["da"] },
          { t: "fill", a: ["di"] },
          { t: "multi", a: [0, 2] },
          { t: "cloze", text: "{{1}} volta che chiamo non risponde {{2}}.", gaps: [["ogni"], ["nessuno"]] },
          { t: "listen", it: "Alcuni colleghi non sono d'accordo, ma nessuno lo dice apertamente." },
          { t: "speak", it: "Ci vediamo tra qualche giorno, ti scrivo io." }
        ]
      }
    ],
    test: {
      id: "b1-u02-test",
      cefr: "B1",
      titleIt: "Test — Pronomi",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["gliel'", "glielo"] },
        { t: "fill", a: ["ce"] },
        { t: "fill", a: ["ne"] },
        { t: "fill", a: ["cui"] },
        { t: "fill", a: ["che"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["da"] },
        { t: "listen", it: "Gliel'ho spiegato, ma ci vuole tempo per capirlo." },
        { t: "speak", it: "Te lo mando appena posso, non ce la faccio adesso." }
      ]
    }
  },
  {
    id: "b1-u03",
    icon: "🗂️",
    titleIt: "Burocrazia italiana",
    lessons: [
      {
        id: "b1-u03-l1",
        cefr: "B1",
        titleIt: "Codice fiscale e residenza",
        grammar: {
          examples: [
            { it: "Vorrei richiedere il codice fiscale." },
            { it: "Devo prendere la residenza in questo comune." },
            { it: "Serve una marca da bollo da sedici euro." },
            { it: "Ho già preso l'appuntamento online." },
            { it: "Il documento viene rilasciato subito." },
            { it: "Compili il modulo in stampatello." }
          ]
        },
        vocab: [
          { it: "il codice fiscale" },
          { it: "la residenza" },
          { it: "il comune" },
          { it: "l'anagrafe" },
          { it: "il modulo" },
          { it: "la marca da bollo" },
          { it: "l'autocertificazione" },
          { it: "rilasciare" },
          { it: "lo sportello" },
          { it: "in stampatello" },
          { it: "la tessera sanitaria" },
          { it: "il permesso di soggiorno" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["richiedere"] },
          { t: "fill", a: ["stampatello"] },
          {
            t: "match",
            pairs: [{ it: "l'anagrafe" }, { it: "lo sportello" }, { it: "rilasciare" }, { it: "il modulo" }]
          },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "toIt", a: ["devo prendere la residenza in questo comune"] },
          {
            t: "cloze",
            text: "Buongiorno, vorrei {{1}} il codice fiscale. Ho già preso l'{{2}} online.",
            gaps: [["richiedere"], ["appuntamento"]]
          },
          { t: "listen", it: "Serve una marca da bollo da sedici euro e una copia del documento." },
          { t: "speak", it: "Vorrei richiedere il codice fiscale, ho il passaporto." }
        ]
      },
      {
        id: "b1-u03-l2",
        cefr: "B1",
        titleIt: "Banca e contratti",
        grammar: {
          examples: [
            { it: "Vorrei aprire un conto corrente." },
            { it: "Qual è il canone mensile?" },
            { it: "Devo fare un bonifico all'estero." },
            { it: "C'è un vincolo di durata?" },
            { it: "Come posso disdire il contratto?" },
            { it: "Il rinnovo è automatico salvo disdetta." }
          ]
        },
        vocab: [
          { it: "il conto corrente" },
          { it: "il bonifico" },
          { it: "l'IBAN" },
          { it: "il bancomat" },
          { it: "il canone" },
          { it: "la commissione" },
          { it: "il contratto" },
          { it: "la clausola" },
          { it: "la disdetta" },
          { it: "il preavviso" },
          { it: "firmare" },
          { it: "il vincolo" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "il bonifico" },
              { it: "la disdetta" },
              { it: "il canone" },
              { it: "la commissione" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["conto"] },
          { t: "fill", a: ["vincolo"] },
          {
            t: "trans",
            dir: "toIt",
            a: ["come posso disdire il contratto", "come posso disdire il contratto?"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Buongiorno, in cosa posso aiutarla?" },
              {
                sp: "TY",
                choices: [
                  "Vorrei aprire un conto corrente.",
                  "Vorrei un bonifico corrente.",
                  "Vorrei disdire un conto."
                ],
                a: 0
              },
              { sp: "A", it: "Certo. Ha il codice fiscale e un documento?" },
              {
                sp: "TY",
                choices: ["Sì. Qual è il canone mensile?", "Sì. Qual è la disdetta?", "No, ma ho l'IBAN."],
                a: 0
              },
              { sp: "A", it: "Quattro euro al mese, gratis sotto i trent'anni." }
            ]
          },
          {
            t: "cloze",
            text: "Quali sono le {{1}} sui bonifici? E il {{2}} è automatico?",
            gaps: [["commissioni"], ["rinnovo"]]
          },
          {
            t: "order",
            tokens: ["Devo", "fare", "un", "bonifico", "all'estero"],
            a: ["devo fare un bonifico all'estero"]
          },
          { t: "listen", it: "Il canone è di quattro euro al mese, con carta inclusa." },
          { t: "speak", it: "Vorrei sapere se c'è un vincolo di durata." }
        ]
      },
      {
        id: "b1-u03-l3",
        cefr: "B1",
        titleIt: "Reclami e diritti",
        grammar: {
          examples: [
            { it: "Il prodotto è arrivato danneggiato." },
            { it: "Vorrei sporgere un reclamo." },
            { it: "Ho diritto al rimborso entro quattordici giorni." },
            { it: "Come da contratto, il servizio doveva essere attivo dal primo." },
            { it: "Vi invio la documentazione in allegato." },
            { it: "Attendo un vostro riscontro." }
          ]
        },
        vocab: [
          { it: "il reclamo" },
          { it: "sporgere reclamo" },
          { it: "il rimborso" },
          { it: "la sostituzione" },
          { it: "danneggiato" },
          { it: "difettoso" },
          { it: "la garanzia" },
          { it: "il responsabile" },
          { it: "la raccomandata" },
          { it: "il riscontro" },
          { it: "avere diritto a" },
          { it: "pertanto" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "il rimborso" },
              { it: "difettoso" },
              { it: "la garanzia" },
              { it: "il riscontro" }
            ]
          },
          { t: "fill", a: ["sporgere", "fare"] },
          { t: "fill", a: ["diritto"] },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "il prodotto è arrivato danneggiato chiedo il rimborso",
              "il prodotto è arrivato danneggiato, chiedo il rimborso"
            ]
          },
          {
            t: "cloze",
            text: "Con la {{1}} segnalo che il servizio non è attivo. Come da {{2}}, chiedo il {{3}} entro quindici giorni.",
            gaps: [["presente"], ["contratto"], ["rimborso"]]
          },
          {
            t: "order",
            tokens: ["Vorrei", "parlare", "con", "un", "responsabile"],
            a: ["vorrei parlare con un responsabile"]
          },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Come da contratto, il servizio doveva essere attivo dal primo del mese." },
          { t: "speak", it: "Vorrei sporgere un reclamo: il prodotto è difettoso." }
        ]
      },
      {
        id: "b1-u03-l4",
        cefr: "B1",
        titleIt: "Lavoro e contratti",
        grammar: {
          examples: [
            { it: "Ho un contratto a tempo indeterminato." },
            { it: "Lavoro con partita IVA da tre anni." },
            { it: "Qual è la RAL prevista per questa posizione?" },
            { it: "Quanti giorni di ferie sono previsti?" },
            { it: "Il periodo di prova è di tre mesi." },
            { it: "Chiedo un permesso per motivi personali." }
          ]
        },
        vocab: [
          { it: "il contratto a tempo indeterminato" },
          { it: "la partita IVA" },
          { it: "lo stipendio netto" },
          { it: "la RAL" },
          { it: "la tredicesima" },
          { it: "le ferie" },
          { it: "il permesso" },
          { it: "il periodo di prova" },
          { it: "il colloquio" },
          { it: "il curriculum" },
          { it: "assumere" },
          { it: "licenziarsi" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "tempo indeterminato" },
              { it: "la tredicesima" },
              { it: "le ferie" },
              { it: "il periodo di prova" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["periodo"] },
          {
            t: "trans",
            dir: "toIt",
            a: ["quanti giorni di ferie sono previsti", "quanti giorni di ferie sono previsti?"]
          },
          {
            t: "cloze",
            text: "Qual è la {{1}} prevista? E il {{2}} di prova quanto dura?",
            gaps: [["ral"], ["periodo"]]
          },
          { t: "mcq", a: 1 },
          {
            t: "order",
            tokens: ["Ho", "un", "contratto", "a", "tempo", "indeterminato", "da", "due", "anni"],
            a: ["ho un contratto a tempo indeterminato da due anni"]
          },
          { t: "listen", it: "La tredicesima viene pagata a dicembre insieme allo stipendio." },
          { t: "speak", it: "Vorrei sapere qual è la RAL prevista per questa posizione." }
        ]
      }
    ],
    test: {
      id: "b1-u03-test",
      cefr: "B1",
      titleIt: "Test — Burocrazia",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["stampatello"] },
        { t: "fill", a: ["conto"] },
        { t: "fill", a: ["sporgere", "fare"] },
        { t: "fill", a: ["diritto"] },
        { t: "mcq", a: 1 },
        {
          t: "match",
          pairs: [{ it: "la disdetta" }, { it: "il bonifico" }, { it: "le ferie" }, { it: "l'anagrafe" }]
        },
        { t: "listen", it: "Per la residenza serve un documento e il contratto di affitto." },
        { t: "speak", it: "Vorrei richiedere il codice fiscale e prendere la residenza." }
      ]
    }
  },
  {
    id: "b1-u04",
    icon: "📰",
    titleIt: "Opinioni e media",
    lessons: [
      {
        id: "b1-u04-l1",
        cefr: "B1",
        titleIt: "Ha detto che…",
        grammar: {
          examples: [
            { it: "Marco ha detto che era stanco." },
            { it: "Mi ha detto che sarebbe arrivato il giorno dopo." },
            { it: "Ha chiesto se potevo aiutarlo." },
            { it: "Mi ha detto di non preoccuparmi." },
            { it: "Ha spiegato che aveva già provato." },
            { it: "Ha aggiunto che quel giorno era impossibile." }
          ]
        },
        vocab: [
          { it: "dire che" },
          { it: "chiedere se" },
          { it: "spiegare" },
          { it: "aggiungere" },
          { it: "rispondere" },
          { it: "sostenere" },
          { it: "affermare" },
          { it: "negare" },
          { it: "il giorno prima / dopo" },
          { it: "allora" },
          { it: "in quel momento" },
          { it: "secondo quanto detto" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["lavorava"] },
          { t: "fill", a: ["aveva"] },
          { t: "fill", a: ["di"] },
          { t: "fill", a: ["se"] },
          {
            t: "cloze",
            text: "„Domani ti chiamo” → Mi ha detto che il giorno {{1}} mi {{2}} chiamato.",
            gaps: [["dopo"], ["avrebbe"]]
          },
          { t: "match", pairs: [{ it: "oggi" }, { it: "ieri" }, { it: "domani" }, { it: "qui" }] },
          { t: "trans", dir: "toIt", a: ["mi ha detto di non preoccuparmi"] },
          { t: "listen", it: "Ha spiegato che aveva già provato più volte senza successo." },
          { t: "speak", it: "Mi ha detto che sarebbe arrivato il giorno dopo." }
        ]
      },
      {
        id: "b1-u04-l2",
        cefr: "B1",
        titleIt: "Leggere un articolo",
        grammar: {
          examples: [
            { it: "Secondo fonti interne, l'azienda avrebbe già deciso." },
            { it: "La riforma è stata approvata con 210 voti favorevoli." },
            { it: "I dati sull'occupazione sono in aumento." },
            { it: "L'articolo sostiene che il problema sia strutturale." },
            { it: "Il quotidiano ha smentito la notizia." },
            { it: "Riassumendo: il punto centrale è il finanziamento." }
          ]
        },
        vocab: [
          { it: "il quotidiano" },
          { it: "il settimanale" },
          { it: "la notizia" },
          { it: "la fonte" },
          { it: "smentire" },
          { it: "sostenere" },
          { it: "in aumento / in calo" },
          { it: "l'inchiesta" },
          { it: "l'editoriale" },
          { it: "il titolo" },
          { it: "riassumere" },
          { it: "attendibile" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["aumento"] },
          { t: "fill", a: ["smentito"] },
          {
            t: "match",
            pairs: [
              { it: "il quotidiano" },
              { it: "la fonte" },
              { it: "l'inchiesta" },
              { it: "attendibile" }
            ]
          },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Secondo fonti interne, l'azienda {{1}} già deciso, ma il portavoce ha {{2}} la notizia.",
            gaps: [["avrebbe"], ["smentito"]]
          },
          { t: "trans", dir: "toIt", a: ["la riforma è stata approvata la settimana scorsa"] },
          { t: "listen", it: "Secondo il quotidiano, il governo avrebbe già preparato la risposta." },
          { t: "speak", it: "L'articolo sostiene che il problema sia strutturale." }
        ]
      },
      {
        id: "b1-u04-l3",
        cefr: "B1",
        titleIt: "Connettivi",
        grammar: {
          examples: [
            { it: "Anzitutto il costo è troppo alto." },
            { it: "Inoltre non abbiamo abbastanza tempo." },
            { it: "Tuttavia esiste un'alternativa." },
            { it: "Il progetto è complesso, perciò servono più risorse." },
            { it: "Non è caro, anzi è conveniente." },
            { it: "In conclusione, propongo di rimandare." }
          ]
        },
        vocab: [
          { it: "anzitutto" },
          { it: "inoltre" },
          { it: "tuttavia" },
          { it: "invece" },
          { it: "anzi" },
          { it: "quindi / perciò" },
          { it: "pertanto" },
          { it: "cioè" },
          { it: "in effetti" },
          { it: "d'altra parte" },
          { it: "in conclusione" },
          { it: "comunque" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["anzitutto"] },
          { t: "fill", a: ["in conclusione"] },
          { t: "match", pairs: [{ it: "inoltre" }, { it: "tuttavia" }, { it: "quindi" }, { it: "cioè" }] },
          {
            t: "cloze",
            text: "{{1}} il prezzo è alto. {{2}} non abbiamo tempo. {{3}} propongo di rimandare.",
            gaps: [["anzitutto"], ["inoltre"], ["quindi", "pertanto", "perciò"]]
          },
          { t: "mcq", a: 1 },
          {
            t: "order",
            tokens: ["Tuttavia", "esiste", "un'alternativa", "che", "vale", "la", "pena", "considerare"],
            a: ["tuttavia esiste un'alternativa che vale la pena considerare"]
          },
          { t: "listen", it: "Anzitutto il costo, inoltre i tempi: in conclusione, non conviene." },
          { t: "speak", it: "Da un lato è vero, d'altra parte i dati dicono altro." }
        ]
      },
      {
        id: "b1-u04-l4",
        cefr: "B1",
        titleIt: "Esporre un'opinione",
        grammar: {
          examples: [
            { it: "Ritengo che il lavoro da remoto sia utile ma non per tutti." },
            { it: "Anzitutto riduce i tempi di spostamento." },
            { it: "Basti pensare a chi vive in periferia." },
            { it: "C'è chi sostiene che riduca la collaborazione." },
            { it: "Va detto però che dipende dall'organizzazione." },
            { it: "In conclusione, la soluzione ibrida mi sembra la più equilibrata." }
          ]
        },
        vocab: [
          { it: "ritenere" },
          { it: "sostenere" },
          { it: "basti pensare a" },
          { it: "va detto che" },
          { it: "c'è chi dice che" },
          { it: "in un certo senso" },
          { it: "diciamo che" },
          { it: "equilibrato" },
          { it: "l'argomento" },
          { it: "il vantaggio / lo svantaggio" },
          { it: "a lungo termine" },
          { it: "vale la pena" }
        ],
        exercises: [
          { t: "fill", a: ["ritengo"] },
          { t: "fill", a: ["chi"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [
              { it: "basti pensare a" },
              { it: "va detto che" },
              { it: "a lungo termine" },
              { it: "vale la pena" }
            ]
          },
          {
            t: "cloze",
            text: "{{1}} che il lavoro ibrido {{2}} (essere) la soluzione migliore. {{3}} riduce i costi. Tuttavia dipende dal settore.",
            gaps: [["ritengo", "penso", "credo"], ["sia"], ["anzitutto", "inoltre"]]
          },
          { t: "trans", dir: "toIt", a: ["va detto però che dipende dall'organizzazione"] },
          {
            t: "order",
            tokens: [
              "In",
              "conclusione,",
              "la",
              "soluzione",
              "ibrida",
              "mi",
              "sembra",
              "la",
              "più",
              "equilibrata"
            ],
            a: ["in conclusione la soluzione ibrida mi sembra la più equilibrata"]
          },
          { t: "mcq", a: 1 },
          { t: "listen", it: "C'è chi sostiene che riduca la collaborazione, ma i dati non lo confermano." },
          { t: "speak", it: "Ritengo che valga la pena provare, almeno per sei mesi." }
        ]
      }
    ],
    test: {
      id: "b1-u04-test",
      cefr: "B1",
      titleIt: "Esame finale B1",
      exercises: [
        { t: "conj", verb: "essere", tense: "cong", persons: [0, 3, 4, 5] },
        { t: "fill", a: ["abbia"] },
        { t: "fill", a: ["sia"] },
        { t: "fill", a: ["gliel'", "glielo"] },
        { t: "fill", a: ["ce"] },
        { t: "fill", a: ["cui"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["in conclusione"] },
        { t: "trans", dir: "toIt", a: ["non credo che abbiano capito il problema"] },
        { t: "listen", it: "Mi ha detto che sarebbe passato il giorno dopo, ma non è venuto." },
        { t: "speak", it: "Ritengo che sia una soluzione valida, anche se non perfetta." }
      ]
    }
  }
]);
