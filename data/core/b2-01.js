/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/b2-01.js
   Powstało z data/b2-01.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("B2", [
  {
    id: "b2-u01",
    icon: "🌗",
    titleIt: "Se fosse",
    lessons: [
      {
        id: "b2-u01-l1",
        cefr: "B2",
        titleIt: "Congiuntivo imperfetto",
        grammar: {
          examples: [
            { it: "Pensavo che fosse più semplice." },
            { it: "Non sapevo che lavorassi qui." },
            { it: "Volevo che tu me lo dicessi prima." },
            { it: "Se avessi tempo, verrei volentieri." },
            { it: "Magari venisse anche lei!" },
            { it: "Sembrava che non ci fosse nessuno." }
          ]
        },
        vocab: [
          { it: "pensavo che…" },
          { it: "non sapevo che…" },
          { it: "volevo che…" },
          { it: "sembrava che…" },
          { it: "magari" },
          { it: "come se" },
          { it: "a patto che" },
          { it: "nel caso in cui" },
          { it: "semmai" },
          { it: "quasi quasi" },
          { it: "sarebbe ora" },
          { it: "chissà se" }
        ],
        exercises: [
          { t: "conj", verb: "essere", tense: "congImp", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "fare", tense: "congImp", persons: [0, 2, 5] },
          { t: "conj", verb: "prendere", tense: "congImp", persons: [0, 3, 4] },
          { t: "fill", a: ["fosse"] },
          { t: "fill", a: ["lavorassi"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Volevo che tu me lo {{1}} (dire) prima e che {{2}} (venire, tu) con noi.",
            gaps: [["dicessi"], ["venissi"]]
          },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "toIt", a: ["sembrava che non ci fosse nessuno"] },
          { t: "listen", it: "Non sapevo che avessi già finito il progetto." },
          { t: "speak", it: "Pensavo che fosse più facile di così." }
        ]
      },
      {
        id: "b2-u01-l2",
        cefr: "B2",
        titleIt: "Concordanza dei tempi",
        grammar: {
          examples: [
            { it: "Credevo che avesse già risposto." },
            { it: "Speravo che mi avrebbe chiamato." },
            { it: "Non immaginavo che fosse così complicato." },
            { it: "Era strano che non fossero ancora arrivati." },
            { it: "Temevo che avessimo sbagliato strada." },
            { it: "Mi sembrava che ci fosse un errore." }
          ]
        },
        vocab: [
          { it: "la concordanza" },
          { it: "l'anteriorità" },
          { it: "la contemporaneità" },
          { it: "la posteriorità" },
          { it: "immaginare" },
          { it: "temere" },
          { it: "sospettare" },
          { it: "dubitare" },
          { it: "supporre" },
          { it: "risultare" },
          { it: "a quel punto" },
          { it: "nel frattempo" }
        ],
        exercises: [
          { t: "fill", a: ["avesse"] },
          { t: "fill", a: ["avrebbe"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Non immaginavo che {{1}} (essere) così complicato e che {{2}} (servire) tanto tempo.",
            gaps: [["fosse"], ["servisse"]]
          },
          {
            t: "cloze",
            text: "Era strano che non {{1}} (arrivare) ancora e che nessuno {{2}} (avvisare) nulla.",
            gaps: [["fossero arrivati"], ["avesse avvisato"]]
          },
          { t: "trans", dir: "toIt", a: ["speravo che mi avrebbe chiamato"] },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Temevo che avessimo sbagliato strada e che fosse troppo tardi." },
          { t: "speak", it: "Credevo che avesse già risposto alla mia mail." }
        ]
      },
      {
        id: "b2-u01-l3",
        cefr: "B2",
        titleIt: "Come se, magari, purché",
        grammar: {
          examples: [
            { it: "Si comporta come se non fosse successo niente." },
            { it: "Per quanto sia difficile, vale la pena." },
            { it: "Ti aiuto a condizione che tu sia serio." },
            { it: "Partiamo prima che cominci il traffico." },
            { it: "Verrò, a meno che non succeda un imprevisto." },
            { it: "Malgrado avesse ragione, non l'ha detto." }
          ]
        },
        vocab: [
          { it: "per quanto" },
          { it: "malgrado" },
          { it: "affinché" },
          { it: "a patto che" },
          { it: "a condizione che" },
          { it: "a meno che non" },
          { it: "salvo che" },
          { it: "fino a che non" },
          { it: "comportarsi" },
          { it: "l'imprevisto" },
          { it: "valere la pena" },
          { it: "essere serio" }
        ],
        exercises: [
          { t: "mcq", a: 2 },
          { t: "fill", a: ["sia"] },
          { t: "fill", a: ["sia"] },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "cloze",
            text: "Si comporta come se non {{1}} (succedere) niente, per quanto tutti {{2}} (sapere) la verità.",
            gaps: [["fosse successo"], ["sappiano"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["verrò a meno che non succeda un imprevisto", "verrò, a meno che non succeda un imprevisto"]
          },
          {
            t: "order",
            tokens: ["Per", "quanto", "sia", "difficile,", "vale", "la", "pena", "provare"],
            a: ["per quanto sia difficile vale la pena provare"]
          },
          { t: "listen", it: "Malgrado avesse ragione, ha preferito non dire niente." },
          { t: "speak", it: "Ti aiuto volentieri, purché tu me lo dica in tempo." }
        ]
      }
    ],
    test: {
      id: "b2-u01-test",
      cefr: "B2",
      titleIt: "Test — Se fosse",
      exercises: [
        { t: "conj", verb: "essere", tense: "congImp", persons: [0, 2, 3, 5] },
        { t: "conj", verb: "fare", tense: "congImp", persons: [0, 2] },
        { t: "fill", a: ["fosse"] },
        { t: "fill", a: ["avesse"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 2 },
        { t: "fill", a: ["sia"] },
        { t: "multi", a: [0, 2] },
        { t: "listen", it: "Non immaginavo che fosse così complicato ottenere il permesso." },
        { t: "speak", it: "Speravo che mi avrebbe risposto entro ieri." }
      ]
    }
  },
  {
    id: "b2-u02",
    icon: "🔀",
    titleIt: "Periodo ipotetico",
    lessons: [
      {
        id: "b2-u02-l1",
        cefr: "B2",
        titleIt: "I tre tipi",
        grammar: {
          examples: [
            { it: "Se domani fa bel tempo, andiamo al mare." },
            { it: "Se fossi in te, non lo farei." },
            { it: "Se avessimo saputo prima, saremmo partiti ieri." },
            { it: "Se avessi accettato quel lavoro, ora vivrei a Roma." },
            { it: "Se hai bisogno, chiamami." },
            { it: "Che faresti se vincessi alla lotteria?" }
          ]
        },
        vocab: [
          { it: "se" },
          { it: "nel caso in cui" },
          { it: "qualora" },
          { it: "altrimenti" },
          { it: "se fossi in te" },
          { it: "magari" },
          { it: "l'ipotesi" },
          { it: "la condizione" },
          { it: "realizzarsi" },
          { it: "rimpiangere" },
          { it: "il rimpianto" },
          { it: "cambiare idea" }
        ],
        exercises: [
          { t: "mcq", a: 2 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["fa", "farà"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Se {{1}} (essere, io) in te, non lo {{2}} (fare).",
            gaps: [["fossi"], ["farei"]]
          },
          {
            t: "cloze",
            text: "Se {{1}} (sapere, noi) prima, {{2}} (partire, noi) ieri.",
            gaps: [["avessimo saputo"], ["saremmo partiti"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["che faresti se vincessi alla lotteria", "cosa faresti se vincessi alla lotteria"]
          },
          { t: "mcq", a: 2 },
          { t: "listen", it: "Se avessimo prenotato prima, avremmo pagato molto meno." },
          { t: "speak", it: "Se fossi in te, ci penserei ancora un po'." }
        ]
      },
      {
        id: "b2-u02-l2",
        cefr: "B2",
        titleIt: "Varianti e registri",
        grammar: {
          examples: [
            { it: "Qualora non riceva conferma, annullerò la prenotazione." },
            { it: "Nel caso in cui piovesse, ci vediamo al bar." },
            { it: "Volendo, si può fare anche domani." },
            { it: "Se lo sapevo, restavo a casa." },
            { it: "Magari fosse così semplice!" },
            { it: "A saperlo prima, avrei fatto diversamente." }
          ]
        },
        vocab: [
          { it: "qualora" },
          { it: "nel caso in cui" },
          { it: "ove" },
          { it: "provvedere" },
          { it: "annullare" },
          { it: "la conferma" },
          { it: "volendo" },
          { it: "a saperlo" },
          { it: "diversamente" },
          { it: "altrimenti" },
          { it: "il registro" },
          { it: "sconsigliato" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["fosse"] },
          { t: "fill", a: ["piovesse"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Colloquiale: «Se lo sapevo, non venivo.» Standard: Se l'{{1}} saputo, non {{2}} venuto.",
            gaps: [["avessi"], ["sarei"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["nel caso in cui piovesse ci vediamo al bar", "se piovesse ci vediamo al bar"]
          },
          {
            t: "match",
            pairs: [{ it: "qualora" }, { it: "provvedere" }, { it: "annullare" }, { it: "altrimenti" }]
          },
          {
            t: "order",
            tokens: ["Senza", "il", "tuo", "aiuto", "non", "ce", "l'avrei", "fatta"],
            a: ["senza il tuo aiuto non ce l'avrei fatta"]
          },
          { t: "listen", it: "Qualora non pervenisse conferma entro venerdì, annulleremo la prenotazione." },
          { t: "speak", it: "Magari fosse così semplice come dici." }
        ]
      },
      {
        id: "b2-u02-l3",
        cefr: "B2",
        titleIt: "Rimpianti e ipotesi",
        grammar: {
          examples: [
            { it: "Avrei dovuto accettare quell'offerta." },
            { it: "Avresti potuto dirmelo prima." },
            { it: "Se solo avessi ascoltato mia madre!" },
            { it: "Con il senno di poi, è stato un errore." },
            { it: "Meno male che non ho firmato." },
            { it: "Non me ne pento affatto." }
          ]
        },
        vocab: [
          { it: "avrei dovuto" },
          { it: "avrei potuto" },
          { it: "se solo" },
          { it: "con il senno di poi" },
          { it: "pentirsi di" },
          { it: "meno male che" },
          { it: "per fortuna" },
          { it: "l'occasione persa" },
          { it: "rendersi conto" },
          { it: "ammettere" },
          { it: "un errore di valutazione" },
          { it: "col tempo" }
        ],
        exercises: [
          { t: "fill", a: ["avrei"] },
          { t: "fill", a: ["avresti"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Se solo {{1}} (sapere, io) prima, non {{2}} (firmare, io) quel contratto.",
            gaps: [["avessi saputo"], ["avrei firmato"]]
          },
          { t: "trans", dir: "toIt", a: ["con il senno di poi è stato un errore"] },
          {
            t: "match",
            pairs: [
              { it: "meno male che" },
              { it: "pentirsi di" },
              { it: "se solo" },
              { it: "l'occasione persa" }
            ]
          },
          { t: "mcq", a: 1 },
          {
            t: "order",
            tokens: ["Avrei", "dovuto", "accettare", "quell'offerta"],
            a: ["avrei dovuto accettare quell'offerta"]
          },
          { t: "listen", it: "Con il senno di poi, avrei fatto scelte diverse." },
          { t: "speak", it: "Avresti potuto dirmelo prima, avrei cambiato programma." }
        ]
      }
    ],
    test: {
      id: "b2-u02-test",
      cefr: "B2",
      titleIt: "Test — Periodo ipotetico",
      exercises: [
        { t: "mcq", a: 2 },
        { t: "mcq", a: 1 },
        {
          t: "cloze",
          text: "Se {{1}} (essere, io) in te, non lo {{2}} (fare).",
          gaps: [["fossi"], ["farei"]]
        },
        {
          t: "cloze",
          text: "Se {{1}} (prenotare, noi) prima, {{2}} (pagare, noi) meno.",
          gaps: [["avessimo prenotato"], ["avremmo pagato"]]
        },
        { t: "fill", a: ["fosse"] },
        { t: "fill", a: ["avrei"] },
        { t: "fill", a: ["avresti"] },
        { t: "mcq", a: 1 },
        { t: "listen", it: "Se solo avessi saputo, non avrei firmato quel contratto." },
        { t: "speak", it: "Se fossi in te, ci penserei due volte." }
      ]
    }
  },
  {
    id: "b2-u03",
    icon: "📜",
    titleIt: "Passivo e remoto",
    lessons: [
      {
        id: "b2-u03-l1",
        cefr: "B2",
        titleIt: "La forma passiva",
        grammar: {
          examples: [
            { it: "Il progetto è stato approvato la settimana scorsa." },
            { it: "Le domande vengono valutate entro trenta giorni." },
            { it: "Il modulo va firmato in ogni pagina." },
            { it: "In questo ufficio si parlano tre lingue." },
            { it: "La riunione è stata rimandata dal direttore." },
            { it: "Questi errori vanno evitati." }
          ]
        },
        vocab: [
          { it: "approvare" },
          { it: "valutare" },
          { it: "respingere" },
          { it: "rimandare" },
          { it: "compilare" },
          { it: "allegare" },
          { it: "evitare" },
          { it: "consegnare" },
          { it: "entro trenta giorni" },
          { it: "il termine" },
          { it: "la domanda" },
          { it: "l'esito" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["è"] },
          { t: "fill", a: ["vengono"] },
          { t: "fill", a: ["vanno"] },
          {
            t: "cloze",
            text: "Il progetto {{1}} stato approvato ieri, ma il modulo {{2}} ancora firmato.",
            gaps: [["è"], ["va"]]
          },
          { t: "trans", dir: "toIt", a: ["la riunione è stata rimandata dal direttore"] },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Le domande vanno consegnate entro il quindici del mese." },
          { t: "speak", it: "Il documento è stato approvato e va firmato entro venerdì." }
        ]
      },
      {
        id: "b2-u03-l2",
        cefr: "B2",
        titleIt: "Passato remoto",
        grammar: {
          examples: [
            { it: "Dante nacque a Firenze nel 1265." },
            { it: "L'Italia divenne una repubblica nel 1946." },
            { it: "Uscì di casa e non tornò mai più." },
            { it: "Fu allora che capii tutto." },
            { it: "Scrisse il romanzo in due anni." },
            { it: "Appena ebbe finito, uscì." }
          ]
        },
        vocab: [
          { it: "nascere → nacque" },
          { it: "morire → morì" },
          { it: "diventare → divenne" },
          { it: "scrivere → scrisse" },
          { it: "vivere → visse" },
          { it: "vedere → vide" },
          { it: "sapere → seppe" },
          { it: "volere → volle" },
          { it: "il romanzo" },
          { it: "il secolo" },
          { it: "l'epoca" },
          { it: "la vicenda" }
        ],
        exercises: [
          { t: "conj", verb: "essere", tense: "remoto", persons: [0, 2, 5] },
          { t: "conj", verb: "avere", tense: "remoto", persons: [0, 2, 5] },
          { t: "conj", verb: "fare", tense: "remoto", persons: [0, 2, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["presero"] },
          { t: "fill", a: ["disse"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Dante {{1}} (nascere) nel 1265 e {{2}} (morire) nel 1321.",
            gaps: [["nacque"], ["morì"]]
          },
          { t: "trans", dir: "toIt", a: ["l'italia divenne una repubblica nel 1946"] },
          { t: "listen", it: "Uscì di casa quella sera e non tornò mai più." },
          { t: "speak", it: "Fu allora che capii di aver sbagliato." }
        ]
      },
      {
        id: "b2-u03-l3",
        cefr: "B2",
        titleIt: "Frasi implicite",
        grammar: {
          examples: [
            { it: "Dopo aver letto il contratto, ho firmato." },
            { it: "Prima di rispondere, ci ho pensato bene." },
            { it: "Tornando a casa, ho incontrato Giulia." },
            { it: "Essendo in ritardo, ho preso un taxi." },
            { it: "Avendo già visto il film, sono rimasta a casa." },
            { it: "Finito il lavoro, siamo usciti tutti." }
          ]
        },
        vocab: [
          { it: "dopo aver + participio" },
          { it: "prima di + infinito" },
          { it: "essendo" },
          { it: "avendo" },
          { it: "pur + gerundio" },
          { it: "una volta + participio" },
          { it: "riflettere" },
          { it: "concludere" },
          { it: "sintetico" },
          { it: "il registro scritto" },
          { it: "scorrevole" },
          { it: "appesantire" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["aver", "avere"] },
          { t: "fill", a: ["tornando"] },
          { t: "fill", a: ["essendo"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "{{1}} (dopo / leggere) il contratto, ho firmato. {{2}} (prima di / rispondere), ci ho pensato.",
            gaps: [["dopo aver letto"], ["prima di rispondere"]]
          },
          { t: "trans", dir: "toIt", a: ["tornando a casa ho incontrato giulia"] },
          {
            t: "order",
            tokens: ["Finito", "il", "lavoro,", "siamo", "usciti", "tutti"],
            a: ["finito il lavoro siamo usciti tutti"]
          },
          { t: "listen", it: "Avendo già visto quel film, ho preferito restare a casa." },
          { t: "speak", it: "Prima di firmare, vorrei rileggere il contratto." }
        ]
      }
    ],
    test: {
      id: "b2-u03-test",
      cefr: "B2",
      titleIt: "Test — Passivo e remoto",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["è"] },
        { t: "fill", a: ["vengono"] },
        { t: "conj", verb: "fare", tense: "remoto", persons: [0, 2, 5] },
        { t: "fill", a: ["presi"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["tornando"] },
        { t: "trans", dir: "toIt", a: ["le domande vanno consegnate entro venerdì"] },
        { t: "listen", it: "Il progetto fu approvato nel 1998 e venne realizzato in tre anni." },
        { t: "speak", it: "Dopo aver letto il contratto, ho deciso di non firmare." }
      ]
    }
  },
  {
    id: "b2-u04",
    icon: "🏛️",
    titleIt: "Società e dibattito",
    lessons: [
      {
        id: "b2-u04-l1",
        cefr: "B2",
        titleIt: "Economia e lavoro",
        grammar: {
          examples: [
            { it: "L'inflazione è in calo rispetto allo scorso anno." },
            { it: "La disoccupazione giovanile resta un problema strutturale." },
            { it: "Il potere d'acquisto delle famiglie si è ridotto." },
            { it: "Molti giovani laureati lasciano il Paese." },
            { it: "Il divario tra Nord e Sud si è ampliato." },
            { it: "Il decreto è stato approvato con modifiche." }
          ]
        },
        vocab: [
          { it: "il PIL" },
          { it: "l'inflazione" },
          { it: "il debito pubblico" },
          { it: "la disoccupazione" },
          { it: "il potere d'acquisto" },
          { it: "il precariato" },
          { it: "la fuga di cervelli" },
          { it: "il divario" },
          { it: "la crescita" },
          { it: "la ripresa" },
          { it: "il decreto" },
          { it: "su base annua" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "il PIL" },
              { it: "l'inflazione" },
              { it: "la disoccupazione" },
              { it: "il divario" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["calo"] },
          { t: "fill", a: ["crescita"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Il {{1}} d'acquisto si è ridotto e la {{2}} giovanile resta alta.",
            gaps: [["potere"], ["disoccupazione"]]
          },
          { t: "trans", dir: "toIt", a: ["il decreto è stato approvato con modifiche"] },
          {
            t: "order",
            tokens: ["Il", "divario", "tra", "Nord", "e", "Sud", "si", "è", "ampliato"],
            a: ["il divario tra nord e sud si è ampliato"]
          },
          { t: "listen", it: "Su base annua, il PIL è cresciuto dello zero virgola sette per cento." },
          { t: "speak", it: "La disoccupazione giovanile resta un problema strutturale." }
        ]
      },
      {
        id: "b2-u04-l2",
        cefr: "B2",
        titleIt: "Ambiente e tecnologia",
        grammar: {
          examples: [
            { it: "Temo che i tempi della transizione siano troppo lunghi." },
            { it: "Il fatto che sia difficile non significa che sia impossibile." },
            { it: "C'è il rischio che l'automazione riduca i posti di lavoro." },
            { it: "Le rinnovabili coprono ormai una quota significativa." },
            { it: "Bisogna vedere se le norme verranno applicate." },
            { it: "Sono cautamente ottimista." }
          ]
        },
        vocab: [
          { it: "la transizione ecologica" },
          { it: "le energie rinnovabili" },
          { it: "l'impronta di carbonio" },
          { it: "la raccolta differenziata" },
          { it: "lo spreco" },
          { it: "l'intelligenza artificiale" },
          { it: "l'automazione" },
          { it: "la disinformazione" },
          { it: "il rischio" },
          { it: "l'opportunità" },
          { it: "sostenibile" },
          { it: "cautamente" }
        ],
        exercises: [
          { t: "fill", a: ["sia"] },
          { t: "fill", a: ["riduca"] },
          {
            t: "match",
            pairs: [
              { it: "l'impronta di carbonio" },
              { it: "la raccolta differenziata" },
              { it: "lo spreco" },
              { it: "sostenibile" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Da un {{1}} ci sono rischi evidenti, dall'{{2}} le opportunità sono reali.",
            gaps: [["lato"], ["altro"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["temo che i tempi siano troppo lunghi", "temo che sia troppo lento"]
          },
          {
            t: "order",
            tokens: ["Sono", "cautamente", "ottimista", "sul", "futuro"],
            a: ["sono cautamente ottimista sul futuro"]
          },
          { t: "listen", it: "Il fatto che la tecnologia avanzi non risolve da solo il problema." },
          { t: "speak", it: "C'è il rischio che la transizione sia troppo lenta." }
        ]
      },
      {
        id: "b2-u04-l3",
        cefr: "B2",
        titleIt: "Sostenere una posizione",
        grammar: {
          examples: [
            { it: "È vero che i costi sono alti, va però considerato il risparmio a lungo termine." },
            { it: "I dati mostrano una tendenza opposta." },
            { it: "Questo vale in alcuni casi, non come regola generale." },
            { it: "Il punto è che non abbiamo alternative realistiche." },
            { it: "Con tutto il rispetto, non sono d'accordo." },
            { it: "Alla luce di quanto detto, propongo di rivedere il piano." }
          ]
        },
        vocab: [
          { it: "sostenere una tesi" },
          { it: "la generalizzazione" },
          { it: "reggere" },
          { it: "confutare" },
          { it: "il controargomento" },
          { it: "concordare su" },
          { it: "alla luce di" },
          { it: "a lungo termine" },
          { it: "il punto è che" },
          { it: "con tutto il rispetto" },
          { it: "rivedere" },
          { it: "la tendenza" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "confutare" },
              { it: "reggere" },
              { it: "alla luce di" },
              { it: "la generalizzazione" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["considerato"] },
          { t: "fill", a: ["punto"] },
          {
            t: "cloze",
            text: "{{1}} vero che i costi sono alti, {{2}} va considerato il risparmio a lungo termine.",
            gaps: [["è"], ["però", "tuttavia"]]
          },
          { t: "trans", dir: "toIt", a: ["mi sembra una generalizzazione"] },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Questo investimento è troppo costoso, punto." },
              {
                sp: "TY",
                choices: [
                  "È vero che i costi sono alti, va però considerato il risparmio a lungo termine.",
                  "No, sbagli completamente.",
                  "Il punto è che hai ragione."
                ],
                a: 0
              },
              { sp: "A", it: "Ma tutti dicono che questi progetti falliscono." },
              {
                sp: "TY",
                choices: [
                  "Mi sembra una generalizzazione: i dati mostrano il contrario.",
                  "Hai ragione, allora lasciamo perdere.",
                  "Con tutto il rispetto, non capisci."
                ],
                a: 0
              }
            ]
          },
          {
            t: "order",
            tokens: ["Alla", "luce", "di", "quanto", "detto,", "propongo", "di", "rivedere", "il", "piano"],
            a: ["alla luce di quanto detto propongo di rivedere il piano"]
          },
          { t: "listen", it: "Con tutto il rispetto, non credo che questo argomento regga." },
          { t: "speak", it: "Il punto è che non abbiamo alternative realistiche." }
        ]
      }
    ],
    test: {
      id: "b2-u04-test",
      cefr: "B2",
      titleIt: "Esame finale B2",
      exercises: [
        { t: "conj", verb: "essere", tense: "congImp", persons: [0, 2, 5] },
        { t: "fill", a: ["fosse"] },
        { t: "fill", a: ["avrebbe"] },
        { t: "mcq", a: 2 },
        {
          t: "cloze",
          text: "Se {{1}} (studiare, io), {{2}} (passare, io) l'esame.",
          gaps: [["avessi studiato"], ["avrei passato"]]
        },
        { t: "fill", a: ["va"] },
        { t: "fill", a: ["fece"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["sia"] },
        { t: "fill", a: ["fosse"] },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "è vero che i costi sono alti va però considerato il risparmio",
            "è vero che i costi sono alti, tuttavia va considerato il risparmio"
          ]
        },
        { t: "speak", it: "Alla luce dei dati, ritengo che valga la pena rivedere il piano." }
      ]
    }
  }
]);
