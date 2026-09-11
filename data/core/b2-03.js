/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/b2-03.js

   Jednostka b2-u06: przyzwolenie i spójniki tekstowe. To jest ta część
   B2, po której tekst przestaje być listą zdań: „tuttavia", „anzi",
   „del resto" nie wnoszą treści, tylko mówią czytelnikowi, co zrobić z
   tym, co właśnie przeczytał. Uczeń, który ich nie ma, pisze poprawnie
   i nieczytelnie.
   ============================================================ */
LINGUAI.addUnits("B2", [
  {
    id: "b2-u06",
    icon: "🔗",
    titleIt: "Anche se piove",
    lessons: [
      {
        id: "b2-u06-l1",
        tags: ["g-connettivi", "g-congiuntivo-pres"],
        cefr: "B2",
        titleIt: "Benché, sebbene, nonostante",
        grammar: {
          examples: [
            { it: "Benché fosse tardi, siamo usciti lo stesso." },
            { it: "Sebbene lo sapesse, non ha detto niente." },
            { it: "Nonostante la pioggia, la fiera è rimasta aperta." },
            { it: "Nonostante avesse ragione, ha chiesto scusa." },
            { it: "Malgrado tutto, il progetto è andato avanti." },
            { it: "Per quanto ci provi, non ci riesco." }
          ]
        },
        vocab: [
          { it: "benché" },
          { it: "sebbene" },
          { it: "nonostante" },
          { it: "malgrado" },
          { it: "per quanto" },
          { it: "quantunque" },
          { it: "pur essendo" },
          { it: "lo stesso" },
          { it: "comunque" },
          { it: "in ogni caso" },
          { it: "a dispetto di" },
          { it: "ciò nonostante" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["fosse"] },
          { t: "fill", a: ["sapesse"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "Benché {{1}} (essere) tardi, siamo usciti; nonostante {{2}} (piovere), siamo arrivati.",
            gaps: [["fosse"], ["piovesse"]]
          },
          { t: "trans", dir: "toIt", a: ["benché fosse tardi siamo usciti", "sebbene fosse tardi siamo usciti"] },
          { t: "match", pairs: [{ it: "benché" }, { it: "malgrado" }, { it: "per quanto" }, { it: "pur essendo" }] },
          {
            t: "order",
            tokens: ["Nonostante", "avesse", "ragione,", "ha", "chiesto", "scusa"],
            a: ["nonostante avesse ragione ha chiesto scusa"]
          },
          { t: "listen", it: "Benché avesse tutti i documenti, la pratica è rimasta ferma tre mesi." },
          { t: "speak", it: "Nonostante la pioggia, siamo andati lo stesso al mercato." }
        ]
      },
      {
        id: "b2-u06-l2",
        tags: ["g-connettivi"],
        cefr: "B2",
        titleIt: "Anche se e le sue trappole",
        grammar: {
          examples: [
            { it: "Anche se piove, esco lo stesso." },
            { it: "Anche se lo sapessi, non te lo direi." },
            { it: "Pur avendo ragione, ha lasciato perdere." },
            { it: "Pur di finire, ha lavorato tutta la notte." },
            { it: "Neanche se me lo chiedessero lo farei." },
            { it: "Per quanto sia difficile, vale la pena." }
          ]
        },
        vocab: [
          { it: "anche se" },
          { it: "neanche se" },
          { it: "pur + gerundio" },
          { it: "pur di" },
          { it: "lasciar perdere" },
          { it: "valere la pena" },
          { it: "farcela" },
          { it: "rinunciare" },
          { it: "insistere" },
          { it: "a costo di" },
          { it: "pure" },
          { it: "eppure" }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "fill", a: ["anche se"] },
          { t: "fill", a: ["pur avendo"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "{{1}} piove, esco lo stesso; {{2}} lo sapessi, non lo direi.",
            gaps: [["anche se"], ["anche se"]]
          },
          { t: "trans", dir: "toIt", a: ["anche se piove esco lo stesso"] },
          { t: "multi", a: [0, 2] },
          {
            t: "order",
            tokens: ["Pur", "di", "finire,", "ha", "lavorato", "tutta", "la", "notte"],
            a: ["pur di finire ha lavorato tutta la notte"]
          },
          { t: "listen", it: "Anche se avevo l'appuntamento, ho aspettato due ore." },
          { t: "speak", it: "Pur avendo ragione, ho preferito lasciar perdere." }
        ]
      },
      {
        id: "b2-u06-l3",
        tags: ["g-connettivi", "g-registri"],
        cefr: "B2",
        titleIt: "Tuttavia, anzi, del resto",
        grammar: {
          examples: [
            { it: "Il prezzo è alto; tuttavia la qualità lo giustifica." },
            { it: "Non mi ha disturbato, anzi mi ha fatto piacere." },
            { it: "Del resto, era prevedibile." },
            { it: "Pertanto, la domanda va rifatta." },
            { it: "Semmai, ne riparliamo domani." },
            { it: "In effetti, aveva ragione lui." }
          ]
        },
        vocab: [
          { it: "tuttavia" },
          { it: "anzi" },
          { it: "del resto" },
          { it: "pertanto" },
          { it: "semmai" },
          { it: "in effetti" },
          { it: "d'altronde" },
          { it: "peraltro" },
          { it: "eppure" },
          { it: "piuttosto" },
          { it: "quindi" },
          { it: "insomma" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["anzi"] },
          { t: "fill", a: ["tuttavia"] },
          { t: "mcq", a: 2 },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "Il prezzo è alto; {{1}} la qualità lo giustifica. {{2}}, era prevedibile.",
            gaps: [["tuttavia"], ["del resto"]]
          },
          { t: "trans", dir: "toIt", a: ["non mi ha disturbato anzi mi ha fatto piacere"] },
          { t: "match", pairs: [{ it: "tuttavia" }, { it: "anzi" }, { it: "pertanto" }, { it: "semmai" }] },
          {
            t: "order",
            tokens: ["La", "domanda", "è", "incompleta;", "pertanto", "va", "rifatta"],
            a: ["la domanda è incompleta pertanto va rifatta"]
          },
          { t: "listen", it: "La pratica è arrivata in tempo; tuttavia mancava una firma." },
          { t: "speak", it: "Non è un problema, anzi è la cosa più semplice di tutte." }
        ]
      }
    ],
    test: {
      id: "b2-u06-test",
      tags: ["g-connettivi"],
      cefr: "B2",
      titleIt: "Test — Anche se piove",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 0 },
        { t: "fill", a: ["fosse"] },
        { t: "fill", a: ["anche se"] },
        { t: "fill", a: ["anzi"] },
        { t: "mcq", a: 2 },
        { t: "multi", a: [0, 1] },
        {
          t: "cloze",
          text: "Benché {{1}} (essere) tardi siamo usciti; {{2}} pioveva, non ci siamo fermati.",
          gaps: [["fosse"], ["anche se"]]
        },
        { t: "listen", it: "Nonostante avesse presentato tutto, gli hanno chiesto un altro documento." },
        { t: "speak", it: "Anche se costa di più, alla fine conviene." }
      ]
    }
  }
]);
