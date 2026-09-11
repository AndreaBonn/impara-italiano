/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/c2-02.js

   Jednostka c2-u04: zdania względne poza „che" oraz rekcja czasowników.
   Obie rzeczy łączy to, że są nie do wyprowadzenia z reguły: „cui" wymaga
   przyimka, którego nie da się zgadnąć, a to, że mówi się „riuscire A"
   i „provare A", ale „tentare DI", jest listą do zapamiętania, nie regułą.
   Na C2 to właśnie te dwie rzeczy zdradzają obcokrajowca, którego poza tym
   nie da się rozpoznać.

   Test tej jednostki jest egzaminem całego poziomu C2: to ostatnia
   jednostka C2, a egzamin ma stać na końcu poziomu, nie w środku.
   ============================================================ */
LINGUAI.addUnits("C2", [
  {
    id: "c2-u04",
    icon: "🔎",
    titleIt: "Il che mi preoccupa",
    lessons: [
      {
        id: "c2-u04-l1",
        tags: ["g-relativi"],
        cefr: "C2",
        titleIt: "Cui, il quale e i loro obblighi",
        grammar: {
          examples: [
            { it: "La collega a cui ho scritto non ha risposto." },
            { it: "Il progetto di cui parlavamo è stato approvato." },
            { it: "L'autore il cui libro hai letto viene domani." },
            { it: "La sorella del direttore, la quale lavora a Milano, arriva oggi." },
            { it: "La città in cui sono nato non esiste più." },
            { it: "Le persone con cui lavoro sono in gamba." }
          ]
        },
        vocab: [
          { it: "il pronome relativo" },
          { it: "la preposizione" },
          { it: "l'antecedente" },
          { it: "cui" },
          { it: "il quale" },
          { it: "il cui" },
          { it: "l'ambiguità" },
          { it: "riferirsi" },
          { it: "specificare" },
          { it: "reggere" },
          { it: "obbligatorio" },
          { it: "facoltativo" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["cui"] },
          { t: "fill", a: ["il cui"] },
          { t: "mcq", a: 2 },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "La collega a {{1}} ho scritto non ha risposto. L'autore {{2}} libro hai letto viene domani.",
            gaps: [["cui"], ["il cui"]]
          },
          { t: "trans", dir: "toIt", a: ["il progetto di cui parlavamo è stato approvato"] },
          { t: "multi", a: [0, 2] },
          {
            t: "order",
            tokens: ["La", "città", "in", "cui", "sono", "nato", "non", "esiste", "più"],
            a: ["la città in cui sono nato non esiste più"]
          },
          { t: "listen", it: "Il collega con cui ho diviso l'ufficio per anni va in pensione." },
          { t: "speak", it: "Il progetto di cui parlavamo ieri è stato approvato stamattina." }
        ]
      },
      {
        id: "c2-u04-l2",
        tags: ["g-relativi", "g-frase"],
        cefr: "C2",
        titleIt: "Chi, il che, quanto",
        grammar: {
          examples: [
            { it: "Chi arriva tardi aspetta fuori." },
            { it: "Ha rifiutato l'incarico, il che mi preoccupa." },
            { it: "Non credo a quanto mi hai raccontato." },
            { it: "C'è chi dice che sia un errore." },
            { it: "Ha risposto male, cosa che non gli somiglia." },
            { it: "Quanto è successo ieri resta fra noi." }
          ]
        },
        vocab: [
          { it: "chi (= colui che)" },
          { it: "il che" },
          { it: "cosa che" },
          { it: "quanto (= ciò che)" },
          { it: "ciò che" },
          { it: "c'è chi" },
          { it: "la frase intera" },
          { it: "il commento" },
          { it: "preoccupare" },
          { it: "somigliare" },
          { it: "restare fra noi" },
          { it: "riassumere" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["chi"] },
          { t: "fill", a: ["il che"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "{{1}} arriva tardi aspetta fuori. Ha rifiutato l'incarico, {{2}} mi preoccupa.",
            gaps: [["chi"], ["il che"]]
          },
          { t: "trans", dir: "toIt", a: ["chi arriva tardi aspetta fuori"] },
          { t: "match", pairs: [{ it: "chi" }, { it: "il che" }, { it: "quanto" }, { it: "c'è chi" }] },
          {
            t: "order",
            tokens: ["Non", "credo", "a", "quanto", "mi", "hai", "raccontato"],
            a: ["non credo a quanto mi hai raccontato"]
          },
          { t: "listen", it: "Ha rifiutato l'incarico senza spiegare il motivo, il che mi preoccupa." },
          { t: "speak", it: "C'è chi dice che sia un errore, ma nessuno lo scrive nero su bianco." }
        ]
      },
      {
        id: "c2-u04-l3",
        tags: ["g-prep-verbi"],
        cefr: "C2",
        titleIt: "Reggenze che non si indovinano",
        grammar: {
          examples: [
            { it: "Sono riuscito a finire in tempo." },
            { it: "Ho tentato di spiegarglielo due volte." },
            { it: "Mi sono reso conto dell'errore troppo tardi." },
            { it: "L'hanno convinto a restare un altro anno." },
            { it: "Ci tengo a dirlo subito." },
            { it: "Ha finito di lamentarsi solo ieri." }
          ]
        },
        vocab: [
          { it: "riuscire a" },
          { it: "tentare di" },
          { it: "provare a" },
          { it: "rendersi conto di" },
          { it: "accorgersi di" },
          { it: "convincere a" },
          { it: "dissuadere da" },
          { it: "tenere a" },
          { it: "badare a" },
          { it: "fidarsi di" },
          { it: "rinunciare a" },
          { it: "smettere di" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["a"] },
          { t: "fill", a: ["di"] },
          { t: "mcq", a: 2 },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "Sono riuscito {{1}} finire in tempo, ma ho tentato {{2}} spiegarglielo due volte.",
            gaps: [["a"], ["di"]]
          },
          { t: "trans", dir: "toIt", a: ["mi sono reso conto dell'errore troppo tardi", "mi sono resa conto dell'errore troppo tardi"] },
          { t: "multi", a: [1, 2] },
          {
            t: "order",
            tokens: ["L'hanno", "convinto", "a", "restare", "un", "altro", "anno"],
            a: ["l'hanno convinto a restare un altro anno"]
          },
          { t: "listen", it: "Mi sono accorto dell'errore solo quando la pratica era già partita." },
          { t: "speak", it: "Ci tengo a dirlo subito: non sono d'accordo con questa scelta." }
        ]
      }
    ],
    test: {
      id: "c2-u04-test",
      tags: ["g-relativi", "g-prep-verbi", "g-participio", "g-registri"],
      cefr: "C2",
      titleIt: "Esame finale C2",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["cui"] },
        { t: "fill", a: ["il cui"] },
        { t: "mcq", a: 0 },
        { t: "fill", a: ["il che"] },
        { t: "mcq", a: 2 },
        { t: "fill", a: ["a"] },
        { t: "multi", a: [0, 2] },
        {
          t: "cloze",
          text: "La collega a {{1}} ho scritto non ha risposto, {{2}} mi sembra strano.",
          gaps: [["cui"], ["il che"]]
        },
        { t: "trans", dir: "toIt", a: ["chi arriva tardi aspetta fuori"] },
        { t: "listen", it: "L'autore il cui libro abbiamo letto in classe terrà una conferenza." },
        { t: "speak", it: "Mi sono reso conto solo dopo di quanto fosse importante quella riunione." }
      ]
    }
  }
]);
