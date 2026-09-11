/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/c1-03.js

   Jednostka c1-u05: zdania bez odmienionego czasownika. Włoch pisze
   „Finito il lavoro, siamo usciti" tam, gdzie uczeń pisze dwa zdania
   złożone spójnikiem — i to jest jedyna widoczna różnica między tekstem
   poprawnym a tekstem, który brzmi jak przetłumaczony. Gramatyki nie
   brakuje, brakuje tego skrótu.

   Test tej jednostki jest egzaminem całego poziomu C1: to ostatnia
   jednostka C1, a egzamin ma stać na końcu poziomu, nie w środku.
   ============================================================ */
LINGUAI.addUnits("C1", [
  {
    id: "c1-u05",
    icon: "✂️",
    titleIt: "Finito il lavoro",
    lessons: [
      {
        id: "c1-u05-l1",
        tags: ["g-gerundio"],
        cefr: "C1",
        titleIt: "Il gerundio che sostituisce una frase",
        grammar: {
          examples: [
            { it: "Uscendo di casa, ho incontrato Marta." },
            { it: "Avendo finito presto, siamo andati al mare." },
            { it: "Pur sapendolo, non ha detto niente." },
            { it: "Sbagliando si impara." },
            { it: "Essendo domenica, i negozi erano chiusi." },
            { it: "Pubblicata la notizia, il prezzo è crollato." }
          ]
        },
        vocab: [
          { it: "il gerundio" },
          { it: "la frase implicita" },
          { it: "il soggetto sottinteso" },
          { it: "contemporaneo" },
          { it: "anteriore" },
          { it: "la causa" },
          { it: "il modo" },
          { it: "la condizione" },
          { it: "sottintendere" },
          { it: "reggere" },
          { it: "alleggerire" },
          { it: "appesantire" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["uscendo"] },
          { t: "fill", a: ["avendo finito"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "{{1}} (uscire) di casa, ho incontrato Marta. {{2}} (finire) presto, siamo andati al mare.",
            gaps: [["uscendo"], ["avendo finito"]]
          },
          { t: "trans", dir: "toIt", a: ["sbagliando si impara"] },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Essendo", "domenica,", "i", "negozi", "erano", "chiusi"],
            a: ["essendo domenica i negozi erano chiusi"]
          },
          { t: "listen", it: "Avendo letto il contratto, ho chiesto di cambiare due punti." },
          { t: "speak", it: "Uscendo dall'ufficio, ho capito di aver lasciato le chiavi dentro." }
        ]
      },
      {
        id: "c1-u05-l2",
        tags: ["g-participio", "g-infinito"],
        cefr: "C1",
        titleIt: "Participio e infinito al posto di una subordinata",
        grammar: {
          examples: [
            { it: "Finito il lavoro, siamo usciti." },
            { it: "Arrivati a Roma, abbiamo cercato un albergo." },
            { it: "Dopo aver letto il contratto, ha firmato." },
            { it: "Prima di rispondere, ci ha pensato due giorni." },
            { it: "Nel dire questo, si è alzato." },
            { it: "Una volta chiuso il negozio, la via si svuota." }
          ]
        },
        vocab: [
          { it: "il participio passato" },
          { it: "l'infinito passato" },
          { it: "la subordinata" },
          { it: "una volta + participio" },
          { it: "dopo aver" },
          { it: "prima di" },
          { it: "nel + infinito" },
          { it: "al momento di" },
          { it: "concordare" },
          { it: "precedere" },
          { it: "seguire" },
          { it: "snellire" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["finito"] },
          { t: "fill", a: ["aver letto"] },
          { t: "mcq", a: 2 },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "{{1}} (finire) il lavoro, siamo usciti. Dopo {{2}} (leggere) il contratto, ha firmato.",
            gaps: [["finito"], ["aver letto"]]
          },
          { t: "trans", dir: "toIt", a: ["dopo aver letto il contratto ha firmato"] },
          { t: "match", pairs: [{ it: "finito il lavoro" }, { it: "dopo aver letto" }, { it: "prima di rispondere" }, { it: "una volta chiuso" }] },
          {
            t: "order",
            tokens: ["Arrivati", "a", "Roma,", "abbiamo", "cercato", "un", "albergo"],
            a: ["arrivati a roma abbiamo cercato un albergo"]
          },
          { t: "listen", it: "Una volta chiuso il negozio, la via si svuota in pochi minuti." },
          { t: "speak", it: "Prima di rispondere, ci ha pensato due giorni interi." }
        ]
      },
      {
        id: "c1-u05-l3",
        tags: ["g-frase", "g-registri"],
        cefr: "C1",
        titleIt: "Quando l'implicito non si può usare",
        grammar: {
          examples: [
            { it: "Mentre uscivo, mia madre mi ha chiamato." },
            { it: "Essendo tardi, abbiamo rimandato la riunione." },
            { it: "Siccome era tardi, Marco ha rimandato la riunione." },
            { it: "Dopo che il direttore ha firmato, la pratica è partita." },
            { it: "Finita la riunione, il direttore è uscito." },
            { it: "Avendo io firmato, la pratica è partita." }
          ]
        },
        vocab: [
          { it: "il soggetto" },
          { it: "coincidere" },
          { it: "esplicito" },
          { it: "implicito" },
          { it: "ambiguo" },
          { it: "il malinteso" },
          { it: "siccome" },
          { it: "dato che" },
          { it: "dopo che" },
          { it: "mentre" },
          { it: "riferirsi a" },
          { it: "chiarire" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["siccome"] },
          { t: "fill", a: ["mentre"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          {
            t: "cloze",
            text: "{{1}} era tardi, Marco ha rimandato la riunione. {{2}} uscivo, mia madre mi ha chiamato.",
            gaps: [["siccome"], ["mentre"]]
          },
          { t: "trans", dir: "toIt", a: ["siccome era tardi abbiamo rimandato la riunione"] },
          { t: "multi", a: [1, 2] },
          {
            t: "order",
            tokens: ["Dopo", "che", "il", "direttore", "ha", "firmato,", "la", "pratica", "è", "partita"],
            a: ["dopo che il direttore ha firmato la pratica è partita"]
          },
          { t: "listen", it: "Siccome il direttore era in ferie, la pratica è rimasta ferma." },
          { t: "speak", it: "Mentre parlavo al telefono, è arrivato il corriere." }
        ]
      }
    ],
    test: {
      id: "c1-u05-test",
      tags: ["g-gerundio", "g-participio", "g-futuro", "g-si"],
      cefr: "C1",
      titleIt: "Esame finale C1",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["avendo finito"] },
        { t: "fill", a: ["aver letto"] },
        { t: "mcq", a: 0 },
        { t: "fill", a: ["siccome"] },
        { t: "mcq", a: 2 },
        { t: "fill", a: ["sarà"] },
        { t: "multi", a: [0, 2] },
        {
          t: "cloze",
          text: "{{1}} (finire) il lavoro, siamo usciti; {{2}} era tardi, abbiamo preso un taxi.",
          gaps: [["finito"], ["siccome"]]
        },
        { t: "trans", dir: "toIt", a: ["dopo aver letto il contratto ha firmato"] },
        { t: "listen", it: "Una volta chiusa la pratica, l'ufficio manda una comunicazione scritta." },
        { t: "speak", it: "Avendo lavorato qui tre anni, conosco bene il funzionamento." }
      ]
    }
  }
]);
