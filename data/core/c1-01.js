/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/c1-01.js
   Powstało z data/c1-01.js przez scripts/split_data.mjs.
   ============================================================ */
LINGUAI.addUnits("C1", [
  {
    id: "c1-u01",
    icon: "🔎",
    titleIt: "I valori del si",
    lessons: [
      {
        id: "c1-u01-l1",
        tags: ["g-si"],
        cefr: "C1",
        titleIt: "Sei valori, una particella",
        grammar: {
          examples: [
            { it: "In questo ufficio si lavora troppo e si guadagna poco." },
            { it: "Si sono vendute tutte le case in due mesi." },
            { it: "Ci si abitua anche al peggio." },
            { it: "Si è discusso a lungo, senza risultato." },
            { it: "Quando si è giovani, si sottovaluta il tempo." },
            { it: "Il volante si tiene con due mani." }
          ]
        },
        vocab: [
          { it: "abituarsi a" },
          { it: "annoiarsi" },
          { it: "sottovalutare" },
          { it: "sopravvalutare" },
          { it: "discutere" },
          { it: "guadagnare" },
          { it: "rendersi conto" },
          { it: "adeguarsi" },
          { it: "il peggio / il meglio" },
          { it: "senza risultato" },
          { it: "a lungo" },
          { it: "in generale" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["ci"] },
          { t: "fill", a: ["è"] },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2] },
          {
            t: "cloze",
            text: "In Italia {{1}} mangia bene, ma {{2}} lavorano troppe ore.",
            gaps: [["si"], ["si"]]
          },
          { t: "trans", dir: "toIt", a: ["ci si abitua a tutto"] },
          { t: "listen", it: "Si è discusso a lungo, ma non si è arrivati a nessuna conclusione." },
          { t: "speak", it: "Quando si è giovani, si sottovaluta il tempo." }
        ]
      },
      {
        id: "c1-u01-l2",
        tags: ["g-agg-posizione"],
        cefr: "C1",
        titleIt: "Un buon medico, un medico buono",
        grammar: {
          examples: [
            { it: "È un grande professionista, anche se un uomo difficile." },
            { it: "Ho ricevuto una certa informazione, ma non è un'informazione certa." },
            { it: "Non è che un semplice malinteso." },
            { it: "Ho incontrato diverse persone molto diverse tra loro." },
            { it: "Un povero ragazzo: ha perso tutto." },
            { it: "Vive in una casa vecchia ma bellissima." }
          ]
        },
        vocab: [
          { it: "il malinteso" },
          { it: "il professionista" },
          { it: "la vecchia guardia" },
          { it: "l'alto funzionario" },
          { it: "un semplice" },
          { it: "certo / certa" },
          { it: "unico" },
          { it: "vero" },
          { it: "nuovo" },
          { it: "solo" },
          { it: "distinguere" },
          { it: "la sfumatura" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [
              { it: "un grande uomo" },
              { it: "un uomo grande" },
              { it: "un povero uomo" },
              { it: "un uomo povero" }
            ]
          },
          {
            t: "cloze",
            text: "Ho ricevuto una {{1}} notizia, ma non è una notizia {{2}}.",
            gaps: [["certa"], ["certa"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["è solo un semplice malinteso", "non è che un semplice malinteso"]
          },
          { t: "mcq", a: 1 },
          {
            t: "order",
            tokens: ["È", "un", "grande", "professionista,", "anche", "se", "un", "uomo", "difficile"],
            a: ["è un grande professionista anche se un uomo difficile"]
          },
          { t: "listen", it: "Non è un medico buono, è un buon medico: sono due cose diverse." },
          { t: "speak", it: "Ho incontrato diverse persone molto diverse tra loro." }
        ]
      },
      {
        id: "c1-u01-l3",
        tags: ["g-agg-gradi"],
        cefr: "C1",
        titleIt: "Superlativi e intensificatori",
        grammar: {
          examples: [
            { it: "Sono stanco morto, non ce la faccio più." },
            { it: "Il locale era pieno zeppo." },
            { it: "È un caso celeberrimo nella storia del diritto." },
            { it: "È strafelice della notizia." },
            { it: "Un tè caldo caldo, per favore." },
            { it: "Un avversario acerrimo del governo." }
          ]
        },
        vocab: [
          { it: "stanco morto" },
          { it: "ubriaco fradicio" },
          { it: "pieno zeppo" },
          { it: "bagnato fradicio" },
          { it: "innamorato cotto" },
          { it: "povero in canna" },
          { it: "buono come il pane" },
          { it: "straricco" },
          { it: "iperattivo" },
          { it: "celeberrimo" },
          { it: "acerrimo" },
          { it: "oltremodo" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "stanco morto" },
              { it: "pieno zeppo" },
              { it: "innamorato cotto" },
              { it: "povero in canna" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["celeberrimo"] },
          { t: "fill", a: ["acerrimo"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Dopo il viaggio ero stanco {{1}} e la sala era piena {{2}}.",
            gaps: [["morto"], ["zeppa"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["è un acerrimo avversario di questa riforma", "è un avversario acerrimo di questa riforma"]
          },
          { t: "listen", it: "Era bagnato fradicio e stanco morto, ma sorrideva." },
          { t: "speak", it: "Il locale era pieno zeppo, non si trovava un posto." }
        ]
      }
    ],
    test: {
      id: "c1-u01-test",
      tags: ["g-si", "g-agg-posizione"],
      cefr: "C1",
      titleIt: "Test — I valori del si",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 0 },
        { t: "fill", a: ["ci"] },
        { t: "fill", a: ["è"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["celeberrimo"] },
        {
          t: "match",
          pairs: [
            { it: "stanco morto" },
            { it: "pieno zeppo" },
            { it: "acerrimo" },
            { it: "povero in canna" }
          ]
        },
        { t: "listen", it: "Si sono vendute tutte le case in meno di due mesi." },
        { t: "speak", it: "Ci si abitua a tutto, anche al peggio." }
      ]
    }
  },
  {
    id: "c1-u02",
    icon: "🧶",
    titleIt: "Farcela, cavarsela",
    lessons: [
      {
        id: "c1-u02-l1",
        tags: ["g-verbi-pronominali"],
        cefr: "C1",
        titleIt: "I verbi procomplementari",
        grammar: {
          examples: [
            { it: "Ce l'ho fatta, ho superato l'esame!" },
            { it: "Me la cavo abbastanza bene con il tedesco." },
            { it: "Non te la prendere, non era rivolto a te." },
            { it: "Se ne è andato senza salutare." },
            { it: "Non me la sento di guidare stanotte." },
            { it: "Ce l'hai con me per qualcosa?" }
          ]
        },
        vocab: [
          { it: "farcela" },
          { it: "cavarsela" },
          { it: "prendersela" },
          { it: "andarsene" },
          { it: "fregarsene" },
          { it: "avercela con" },
          { it: "sentirsela di" },
          { it: "intendersene di" },
          { it: "vedersela" },
          { it: "smetterla" },
          { it: "piantarla" },
          { it: "spassarsela" }
        ],
        exercises: [
          { t: "fill", a: ["ce"] },
          { t: "fill", a: ["me"] },
          { t: "fill", a: ["te"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [
              { it: "sentirsela" },
              { it: "intendersene" },
              { it: "smetterla" },
              { it: "spassarsela" }
            ]
          },
          {
            t: "cloze",
            text: "Non {{1}} la sento di guidare, {{2}} ne vado a piedi.",
            gaps: [["me"], ["me"]]
          },
          { t: "trans", dir: "toIt", a: ["ce l'hai con me per qualcosa", "ce l'hai con me?"] },
          { t: "listen", it: "Se n'è andato senza salutare nessuno." },
          { t: "speak", it: "Me la cavo abbastanza bene, ma non me ne intendo davvero." }
        ]
      },
      {
        id: "c1-u02-l2",
        tags: ["g-passivo"],
        cefr: "C1",
        titleIt: "Passivo con andare e venire",
        grammar: {
          examples: [
            { it: "La domanda va presentata entro il trenta del mese." },
            { it: "Questi dati vanno verificati prima della pubblicazione." },
            { it: "Il regolamento viene aggiornato ogni anno." },
            { it: "Il capitolo è ancora da rivedere." },
            { it: "Sono andati persi due documenti." },
            { it: "Le domande vennero respinte tutte." }
          ]
        },
        vocab: [
          { it: "presentare una domanda" },
          { it: "verificare" },
          { it: "aggiornare" },
          { it: "respingere" },
          { it: "il regolamento" },
          { it: "la pubblicazione" },
          { it: "andare perso" },
          { it: "smarrire" },
          { it: "da rivedere" },
          { it: "entro il termine" },
          { it: "l'adempimento" },
          { it: "vigente" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["vanno"] },
          { t: "fill", a: ["viene"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "La domanda {{1}} presentata entro il 30; i dati {{2}} verificati dall'ufficio.",
            gaps: [["va"], ["vengono", "sono"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["questo capitolo va ancora rivisto", "questo capitolo è ancora da rivedere"]
          },
          {
            t: "order",
            tokens: ["Tutte", "le", "domande", "sono", "state", "respinte"],
            a: ["tutte le domande sono state respinte"]
          },
          { t: "listen", it: "Il modulo va compilato in ogni sua parte e firmato in calce." },
          { t: "speak", it: "Questi dati vanno verificati prima della pubblicazione." }
        ]
      },
      {
        id: "c1-u02-l3",
        tags: ["g-registri"],
        cefr: "C1",
        titleIt: "Modi di dire",
        grammar: {
          examples: [
            { it: "Non vedo l'ora di rivederti." },
            { it: "Quel viaggio è costato un occhio della testa." },
            { it: "Facciamo il punto della situazione." },
            { it: "Mettiamo tutto nero su bianco." },
            { it: "Ha le mani in pasta ovunque." },
            { it: "Mi stai prendendo in giro?" }
          ]
        },
        vocab: [
          { it: "non ci piove" },
          { it: "non vedo l'ora di" },
          { it: "essere al verde" },
          { it: "costare un occhio" },
          { it: "prendere in giro" },
          { it: "fare il punto" },
          { it: "nero su bianco" },
          { it: "avere le mani in pasta" },
          { it: "parlare al muro" },
          { it: "la firma" },
          { it: "la ditta / l'azienda" },
          { it: "i coriandoli" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "non ci piove" },
              { it: "essere al verde" },
              { it: "fare il punto" },
              { it: "prendere in giro" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["di"] },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 1, 3] },
          {
            t: "cloze",
            text: "Quel viaggio è costato un {{1}} della testa e adesso sono al {{2}}.",
            gaps: [["occhio"], ["verde"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["facciamo il punto della situazione e mettiamo tutto nero su bianco"]
          },
          { t: "listen", it: "Non ci piove: la decisione va presa entro oggi." },
          { t: "speak", it: "Non vedo l'ora di finire questo progetto." }
        ]
      }
    ],
    test: {
      id: "c1-u02-test",
      tags: ["g-verbi-pronominali", "g-passivo"],
      cefr: "C1",
      titleIt: "Test — Verbi pronominali",
      exercises: [
        { t: "fill", a: ["ce"] },
        { t: "fill", a: ["me"] },
        { t: "fill", a: ["te"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["vanno"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        {
          t: "match",
          pairs: [
            { it: "essere al verde" },
            { it: "non ci piove" },
            { it: "fare il punto" },
            { it: "nero su bianco" }
          ]
        },
        { t: "listen", it: "Non me la sento di decidere adesso, ci penso e ti faccio sapere." },
        { t: "speak", it: "Ce l'ho fatta, ma me la sono cavata per un pelo." }
      ]
    }
  },
  {
    id: "c1-u03",
    icon: "🎚️",
    titleIt: "Registri e testualità",
    lessons: [
      {
        id: "c1-u03-l1",
        tags: ["g-registri"],
        cefr: "C1",
        titleIt: "Burocratese",
        grammar: {
          examples: [
            { it: "Si comunica che l'ufficio resterà chiuso il 2 giugno." },
            { it: "Il pagamento dovrà essere effettuato entro trenta giorni." },
            { it: "Ai sensi della normativa vigente, la domanda è irricevibile." },
            { it: "Si prega di allegare copia del documento di cui sopra." },
            { it: "Il predetto termine è perentorio." },
            { it: "Con la presente si diffida dal proseguire." }
          ]
        },
        vocab: [
          { it: "ai sensi di" },
          { it: "in ottemperanza a" },
          { it: "di cui sopra" },
          { it: "il predetto / il suddetto" },
          { it: "effettuare" },
          { it: "perentorio" },
          { it: "irricevibile" },
          { it: "la normativa vigente" },
          { it: "diffidare" },
          { it: "l'istanza" },
          { it: "l'ente" },
          { it: "l'inadempienza" }
        ],
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "effettuare il pagamento" },
              { it: "ai sensi di" },
              { it: "di cui sopra" },
              { it: "trattasi di" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["va"] },
          {
            t: "cloze",
            text: "Burocratese: «Si comunica che l'istanza di cui sopra è irricevibile.» Più semplice: Vi {{1}} che la domanda indicata prima non {{2}} essere accettata.",
            gaps: [["informiamo"], ["può"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["si comunica che l'ufficio resterà chiuso", "vi informiamo che l'ufficio resterà chiuso"]
          },
          { t: "mcq", a: 1 },
          {
            t: "order",
            tokens: ["Si", "prega", "di", "allegare", "copia", "del", "documento"],
            a: ["si prega di allegare copia del documento"]
          },
          { t: "listen", it: "Ai sensi della normativa vigente, l'istanza risulta irricevibile." },
          { t: "speak", it: "Il pagamento va effettuato entro il termine indicato." }
        ]
      },
      {
        id: "c1-u03-l2",
        tags: ["g-registri"],
        cefr: "C1",
        titleIt: "L'italiano parlato",
        grammar: {
          examples: [
            { it: "A Roma non ci sono mai stato." },
            { it: "Il caffè, lo prendo dopo." },
            { it: "C'è tua sorella che ti aspetta fuori." },
            { it: "Gli ho detto di non preoccuparsi." },
            { it: "Quella storia, non me la ricordo proprio." },
            { it: "Di soldi, non ne parliamo nemmeno." }
          ]
        },
        vocab: [
          { it: "la dislocazione" },
          { it: "il neostandard" },
          { it: "il registro informale" },
          { it: "l'oralità" },
          { it: "la spontaneità" },
          { it: "il tema / il rema" },
          { it: "enfatizzare" },
          { it: "riprendere con un pronome" },
          { it: "suonare naturale" },
          { it: "suonare rigido" },
          { it: "accettabile" },
          { it: "sconsigliato in forma scritta" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["lo"] },
          { t: "fill", a: ["ne"] },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Standard: «Non ricordo quella storia.» Con dislocazione: Quella storia, non {{1}} {{2}} ricordo.",
            gaps: [["me"], ["la"]]
          },
          { t: "trans", dir: "toIt", a: ["a roma non ci sono mai stato", "a roma non ci sono mai stata"] },
          { t: "multi", a: [0, 1, 3] },
          { t: "listen", it: "Quella storia lì, non me la ricordo proprio." },
          { t: "speak", it: "Il caffè lo prendo dopo, adesso non mi va." }
        ]
      },
      {
        id: "c1-u03-l3",
        tags: ["g-connettivi"],
        cefr: "C1",
        titleIt: "Coesione e coerenza",
        grammar: {
          examples: [
            { it: "La riforma è stata approvata. Tale decisione ha suscitato reazioni contrastanti." },
            { it: "Il fenomeno in questione riguarda soprattutto le grandi città." },
            { it: "Come vedremo, il problema non è solo economico." },
            { it: "Per contro, i dati regionali raccontano un'altra storia." },
            { it: "Quanto detto finora vale per il settore privato." },
            { it: "Di conseguenza, la misura andrebbe rivista." }
          ]
        },
        vocab: [
          { it: "la coesione" },
          { it: "la coerenza" },
          { it: "il provvedimento" },
          { it: "la misura" },
          { it: "in questione" },
          { it: "tale" },
          { it: "quanto detto" },
          { it: "per contro" },
          { it: "di conseguenza" },
          { it: "suscitare" },
          { it: "contrastante" },
          { it: "riguardare" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["tale", "questa"] },
          { t: "fill", a: ["questione"] },
          {
            t: "match",
            pairs: [
              { it: "per contro" },
              { it: "di conseguenza" },
              { it: "suscitare" },
              { it: "quanto detto" }
            ]
          },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "La riforma è stata approvata. {{1}} decisione ha suscitato reazioni contrastanti. {{2}}, la misura andrebbe rivista.",
            gaps: [["tale", "questa"], ["di conseguenza"]]
          },
          { t: "trans", dir: "toIt", a: ["come vedremo il problema non è solo economico"] },
          { t: "mcq", a: 1 },
          { t: "listen", it: "Quanto detto finora vale soprattutto per il settore privato." },
          { t: "speak", it: "Di conseguenza, ritengo che la misura andrebbe rivista." }
        ]
      }
    ],
    test: {
      id: "c1-u03-test",
      tags: ["g-si", "g-verbi-pronominali", "g-registri"],
      cefr: "C1",
      titleIt: "Test — Ripasso unità 1-3",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["ci"] },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["ce"] },
        { t: "fill", a: ["me"] },
        { t: "fill", a: ["va"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "fill", a: ["questione"] },
        { t: "fill", a: ["acerrimo"] },
        { t: "trans", dir: "toIt", a: ["questi dati vanno verificati prima della pubblicazione"] },
        { t: "speak", it: "Ci si abitua a tutto, ma non ci si rassegna mai del tutto." }
      ]
    }
  }
]);
