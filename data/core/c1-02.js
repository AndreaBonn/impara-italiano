/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/c1-02.js

   Jednostka c1-u04: włoski mówi o prawdopodobieństwie czasem przyszłym.
   „Sarà stanco" nie znaczy „będzie zmęczony", tylko „pewnie jest zmęczony",
   i uczeń, który tego nie wie, rozumie zdanie dokładnie na odwrót — bez
   żadnego sygnału, że czegoś nie zrozumiał. To jest ten rodzaj luki, który
   nie boli na teście i boli w rozmowie.
   ============================================================ */
LINGUAI.addUnits("C1", [
  {
    id: "c1-u04",
    icon: "🤔",
    titleIt: "Sarà stanco",
    lessons: [
      {
        id: "c1-u04-l1",
        tags: ["g-futuro"],
        cefr: "C1",
        titleIt: "Il futuro che non parla del futuro",
        grammar: {
          examples: [
            { it: "Non risponde: sarà ancora in riunione." },
            { it: "Che ora è? Saranno le tre passate." },
            { it: "Avrà perso il treno, di solito non fa tardi." },
            { it: "Quanti anni ha? Ne avrà quaranta." },
            { it: "Non l'ho visto: sarà uscito prima." },
            { it: "Sarà anche bravo, ma a me non convince." }
          ]
        },
        vocab: [
          { it: "la supposizione" },
          { it: "probabilmente" },
          { it: "presumibilmente" },
          { it: "a occhio" },
          { it: "immagino" },
          { it: "sarà" },
          { it: "avrà" },
          { it: "chissà" },
          { it: "dare per scontato" },
          { it: "tirare a indovinare" },
          { it: "avere l'impressione" },
          { it: "a naso" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["sarà"] },
          { t: "fill", a: ["avrà perso"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "Non risponde: {{1}} (essere) ancora in riunione. Oppure {{2}} (dimenticare) il telefono.",
            gaps: [["sarà"], ["avrà dimenticato"]]
          },
          { t: "trans", dir: "toIt", a: ["saranno le tre", "saranno le tre passate"] },
          { t: "multi", a: [0, 2] },
          {
            t: "order",
            tokens: ["Avrà", "perso", "il", "treno,", "di", "solito", "non", "fa", "tardi"],
            a: ["avrà perso il treno di solito non fa tardi"]
          },
          { t: "listen", it: "Non ti ha richiamato? Avrà avuto una giornata complicata." },
          { t: "speak", it: "Sarà stanco: ha guidato per otto ore." }
        ]
      },
      {
        id: "c1-u04-l2",
        tags: ["g-futuro", "g-perifrasi"],
        cefr: "C1",
        titleIt: "Dovere e potere: obbligo o probabilità",
        grammar: {
          examples: [
            { it: "Deve essere stanco: ha guidato tutta la notte." },
            { it: "Devi essere puntuale, l'appuntamento è alle nove." },
            { it: "Potrebbe arrivare in ritardo, c'è traffico." },
            { it: "Può darsi che non abbia ricevuto il messaggio." },
            { it: "Dovrebbe essere già arrivato a quest'ora." },
            { it: "Non può essere lui: è in ferie da una settimana." }
          ]
        },
        vocab: [
          { it: "può darsi" },
          { it: "è probabile che" },
          { it: "è improbabile che" },
          { it: "con ogni probabilità" },
          { it: "quasi certamente" },
          { it: "escludere" },
          { it: "a meno che" },
          { it: "salvo imprevisti" },
          { it: "presumere" },
          { it: "azzardare" },
          { it: "in linea di massima" },
          { it: "se non sbaglio" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["deve"] },
          { t: "fill", a: ["dovrebbe"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "{{1}} darsi che non {{2}} (ricevere) il messaggio.",
            gaps: [["può"], ["abbia ricevuto"]]
          },
          { t: "trans", dir: "toIt", a: ["deve essere stanco", "dev'essere stanco"] },
          { t: "match", pairs: [{ it: "può darsi" }, { it: "dovrebbe" }, { it: "escludere" }, { it: "salvo imprevisti" }] },
          {
            t: "order",
            tokens: ["Non", "può", "essere", "lui:", "è", "in", "ferie", "da", "una", "settimana"],
            a: ["non può essere lui è in ferie da una settimana"]
          },
          { t: "listen", it: "Dovrebbe essere già arrivato, era partito alle sei." },
          { t: "speak", it: "Può darsi che abbia cambiato idea, succede." }
        ]
      },
      {
        id: "c1-u04-l3",
        tags: ["g-registri", "g-avverbi"],
        cefr: "C1",
        titleIt: "Magari, mica, chissà",
        grammar: {
          examples: [
            { it: "Magari piove, meglio prendere l'ombrello." },
            { it: "Magari potessi venire anch'io!" },
            { it: "Magari ci vediamo domani, ti scrivo." },
            { it: "Non è mica finita, mancano dieci minuti." },
            { it: "Chissà se si sono ricordati." },
            { it: "Mah, sarà, ma io non ci credo." }
          ]
        },
        vocab: [
          { it: "magari" },
          { it: "mica" },
          { it: "chissà" },
          { it: "boh" },
          { it: "figurati" },
          { it: "vedi un po'" },
          { it: "sarà" },
          { it: "chi lo sa" },
          { it: "casomai" },
          { it: "non si sa mai" },
          { it: "vai a sapere" },
          { it: "sarà pure vero, ma" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["mica"] },
          { t: "fill", a: ["chissà"] },
          { t: "mcq", a: 2 },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "Non è {{1}} finita, mancano dieci minuti. {{2}} se se ne sono accorti.",
            gaps: [["mica"], ["chissà"]]
          },
          { t: "trans", dir: "toIt", a: ["magari potessi venire anch'io"] },
          { t: "multi", a: [0, 1, 2] },
          {
            t: "order",
            tokens: ["Magari", "ci", "vediamo", "domani,", "ti", "scrivo"],
            a: ["magari ci vediamo domani ti scrivo"]
          },
          { t: "listen", it: "Non è mica detto che venga, ieri non era sicuro." },
          { t: "speak", it: "Chissà se se ne sono accorti, nessuno ha detto niente." }
        ]
      }
    ],
    test: {
      id: "c1-u04-test",
      tags: ["g-futuro", "g-perifrasi"],
      cefr: "C1",
      titleIt: "Test — Sarà stanco",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 0 },
        { t: "fill", a: ["sarà"] },
        { t: "fill", a: ["avrà perso"] },
        { t: "fill", a: ["mica"] },
        { t: "mcq", a: 2 },
        { t: "multi", a: [0, 2] },
        {
          t: "cloze",
          text: "Non risponde: {{1}} (essere) in riunione. {{2}} darsi che richiami più tardi.",
          gaps: [["sarà"], ["può"]]
        },
        { t: "listen", it: "Avrà avuto un contrattempo, di solito avvisa." },
        { t: "speak", it: "Dovrebbe essere già in ufficio a quest'ora." }
      ]
    }
  }
]);
