/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/b2-02.js

   Jednostka b2-u05: mowa zależna. Brakowało jej w kursie, a jest to
   pierwsza rzecz, której uczeń potrzebuje poza klasą: opowiedzieć, co
   ktoś powiedział. Gramatyka jest znana (zgodność czasów z b2-u01),
   nowe są przesunięcia deiktyczne — „oggi" → „quel giorno", „qui" → „lì",
   „venire" → „andare" — czyli dokładnie to, czego tabela odmian nie uczy.
   ============================================================ */
LINGUAI.addUnits("B2", [
  {
    id: "b2-u05",
    icon: "💬",
    titleIt: "Me l'ha detto lui",
    lessons: [
      {
        id: "b2-u05-l1",
        tags: ["g-discorso-indiretto", "g-congiuntivo-imp"],
        cefr: "B2",
        titleIt: "Dal diretto all'indiretto",
        grammar: {
          examples: [
            { it: "Ha detto: «Sono stanco» → Ha detto che era stanco." },
            { it: "Mi ha scritto che arrivava il giorno dopo." },
            { it: "Ha risposto che non aveva capito la domanda." },
            { it: "Ci ha spiegato che avrebbe chiamato lui l'ufficio." },
            { it: "Ha ammesso che si era sbagliato." },
            { it: "Sostiene che la pratica sia ancora aperta." }
          ]
        },
        vocab: [
          { it: "riferire" },
          { it: "sostenere" },
          { it: "ammettere" },
          { it: "replicare" },
          { it: "precisare" },
          { it: "aggiungere" },
          { it: "smentire" },
          { it: "confermare" },
          { it: "a quanto pare" },
          { it: "secondo lui" },
          { it: "a suo dire" },
          { it: "stando a" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["era"] },
          { t: "fill", a: ["aveva capito"] },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "Ha detto che {{1}} (arrivare) il giorno dopo e che {{2}} (telefonare) lui.",
            gaps: [["arrivava"], ["avrebbe telefonato"]]
          },
          { t: "trans", dir: "toIt", a: ["ha detto che era stanco", "disse che era stanco"] },
          { t: "mcq", a: 0 },
          { t: "match", pairs: [{ it: "smentire" }, { it: "precisare" }, { it: "replicare" }, { it: "sostenere" }] },
          {
            t: "order",
            tokens: ["Mi", "ha", "risposto", "che", "non", "aveva", "tempo"],
            a: ["mi ha risposto che non aveva tempo"]
          },
          { t: "listen", it: "Mi ha scritto che sarebbe passato in ufficio il giorno dopo." },
          { t: "speak", it: "Ha ammesso che si era sbagliato e ha chiesto scusa." }
        ]
      },
      {
        id: "b2-u05-l2",
        tags: ["g-discorso-indiretto"],
        cefr: "B2",
        titleIt: "Tempo, luogo, persona",
        grammar: {
          examples: [
            { it: "«Vengo domani» → Ha detto che sarebbe andato il giorno dopo." },
            { it: "«Ci vediamo qui» → Ha detto che ci saremmo visti lì." },
            { it: "«L'ho fatto ieri» → Ha detto che l'aveva fatto il giorno prima." },
            { it: "«Questo non mi piace» → Ha detto che quello non gli piaceva." },
            { it: "«Torno adesso» → Ha detto che tornava in quel momento." },
            { it: "«Il mio capo lo sa» → Ha detto che il suo capo lo sapeva." }
          ]
        },
        vocab: [
          { it: "il giorno prima" },
          { it: "il giorno dopo" },
          { it: "due giorni prima" },
          { it: "la settimana successiva" },
          { it: "in quel momento" },
          { it: "allora" },
          { it: "lì" },
          { it: "quello" },
          { it: "recarsi" },
          { it: "l'indomani" },
          { it: "poco prima" },
          { it: "di lì a poco" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["il giorno dopo"] },
          { t: "fill", a: ["lì"] },
          { t: "mcq", a: 2 },
          { t: "mcq", a: 1 },
          {
            t: "cloze",
            text: "Ha detto che l'aveva finito {{1}} e che sarebbe tornato {{2}}.",
            gaps: [["il giorno prima"], ["il giorno dopo"]]
          },
          { t: "trans", dir: "toIt", a: ["ha detto che sarebbe andato il giorno dopo"] },
          { t: "multi", a: [0, 2] },
          {
            t: "order",
            tokens: ["Disse", "che", "quello", "non", "gli", "piaceva", "affatto"],
            a: ["disse che quello non gli piaceva affatto"]
          },
          { t: "listen", it: "Mi ha detto che sarebbe andato lì il giorno dopo." },
          { t: "speak", it: "Ha spiegato che l'indomani non sarebbe venuto in ufficio." }
        ]
      },
      {
        id: "b2-u05-l3",
        tags: ["g-discorso-indiretto", "g-infinito"],
        cefr: "B2",
        titleIt: "Domande e ordini riferiti",
        grammar: {
          examples: [
            { it: "«Vieni?» → Mi ha chiesto se venivo." },
            { it: "«Dove abiti?» → Mi ha chiesto dove abitassi." },
            { it: "«Aspetta!» → Mi ha detto di aspettare." },
            { it: "«Non firmare» → Mi ha raccomandato di non firmare." },
            { it: "«Che cosa vuoi?» → Voleva sapere che cosa volessi." },
            { it: "«Puoi aiutarmi?» → Ha chiesto se potevo aiutarlo." }
          ]
        },
        vocab: [
          { it: "chiedere se" },
          { it: "voler sapere" },
          { it: "domandare" },
          { it: "invitare a" },
          { it: "raccomandare di" },
          { it: "ordinare di" },
          { it: "proporre di" },
          { it: "consigliare di" },
          { it: "suggerire di" },
          { it: "pregare di" },
          { it: "vietare di" },
          { it: "insistere perché" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["se"] },
          { t: "fill", a: ["di aspettare"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "Mi ha chiesto {{1}} avevo capito e mi ha detto {{2}} (richiamare) più tardi.",
            gaps: [["se"], ["di richiamare"]]
          },
          { t: "trans", dir: "toIt", a: ["mi ha chiesto se venivo", "mi ha chiesto se andavo"] },
          { t: "match", pairs: [{ it: "raccomandare" }, { it: "vietare" }, { it: "suggerire" }, { it: "pregare" }] },
          {
            t: "order",
            tokens: ["Voleva", "sapere", "dove", "abitassi", "e", "da", "quanto", "tempo"],
            a: ["voleva sapere dove abitassi e da quanto tempo"]
          },
          { t: "listen", it: "L'impiegato mi ha chiesto se avevo portato il codice fiscale." },
          { t: "speak", it: "Mi ha raccomandato di non firmare niente senza leggere." }
        ]
      }
    ],
    test: {
      id: "b2-u05-test",
      tags: ["g-discorso-indiretto"],
      cefr: "B2",
      titleIt: "Test — Me l'ha detto lui",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 2 },
        { t: "fill", a: ["era"] },
        { t: "fill", a: ["il giorno dopo"] },
        { t: "fill", a: ["se"] },
        { t: "mcq", a: 0 },
        { t: "multi", a: [1, 2] },
        {
          t: "cloze",
          text: "Disse che {{1}} (essere) stanco e che sarebbe tornato {{2}}.",
          gaps: [["era"], ["il giorno dopo"]]
        },
        { t: "listen", it: "Ha risposto che non aveva ricevuto nessuna convocazione." },
        { t: "speak", it: "Mi ha chiesto se avevo già mandato la domanda." }
      ]
    }
  }
]);
