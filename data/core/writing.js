/* ============================================================
   Warstwa neutralna językowo — zadania pisemne.

   Dwa rodzaje, bo dwie różne rzeczy da się sprawdzić bez człowieka:

   - `compose` — uczeń pisze sam. Zadanie DEKLARUJE konstrukcje, których
     wymaga (`requires`), a writing.js rozwija je przez koniugator i
     szuka w tekście. To nie jest ocena wypracowania, tylko odczyt: tego
     użyłeś, tego nie. Model (`model`) służy do porównania PO napisaniu,
     nigdy przed.

   - `translate` — tłumaczenie zdanie po zdaniu. Zdanie źródłowe jest w
     nakładce (bo je czyta uczeń), a przyjmowane wersje włoskie tutaj.
     To jest zwykłe ćwiczenie `trans`, więc jedzie istniejącym builderem
     i tak samo trafia do quaderno błędów.

   Nagrań tu nie ma i nie powinno być: to jest ćwiczenie pisania, a
   każde zdanie modelu kosztowałoby plik, którego nikt by nie odtworzył.

   Lista przyjmowanych tłumaczeń jest z założenia NIEPEŁNA. Po to jest
   `checkOpen` z tolerancją i po to model do porównania: automat, który
   udaje, że zna wszystkie poprawne wersje zdania, myli się częściej niż
   uczeń.
   ============================================================ */
window.WRITING = [

  {
    id: "w-a2-giornata",
    cefr: "A2",
    tag: "g-presente",
    kind: "compose",
    titleIt: "La mia giornata",
    minWords: 40,
    requires: [
      { verb: "svegliarsi", tense: "pres" },
      { verb: "lavorare", tense: "pres" },
      { any: ["di solito", "spesso", "ogni giorno"] },
      { word: "poi" }
    ],
    model: "Di solito mi sveglio alle sette e mezza. Faccio colazione con calma, poi esco di casa verso le otto. Lavoro in un ufficio in centro, dal lunedì al venerdì. A mezzogiorno mangio qualcosa con i colleghi. Il pomeriggio passa in fretta e alle sei torno a casa. La sera spesso cucino e guardo una serie."
  },

  {
    id: "w-a2-ieri",
    cefr: "A2",
    tag: "g-passato-prossimo",
    kind: "translate",
    titleIt: "Che cosa hai fatto ieri",
    items: [
      { a: ["ieri sono andato al cinema", "ieri sono andata al cinema", "sono andato al cinema ieri", "sono andata al cinema ieri"] },
      { a: ["abbiamo mangiato una pizza", "abbiamo mangiato la pizza"] },
      { a: ["non ho capito la domanda", "non ho capito la sua domanda"] },
      { a: ["il treno è arrivato in ritardo", "il treno era in ritardo"] },
      { a: ["mi sono alzato tardi", "mi sono alzata tardi"] }
    ]
  },

  {
    id: "w-b1-email",
    cefr: "B1",
    tag: "g-registri",
    kind: "compose",
    titleIt: "Una mail per disdire un appuntamento",
    minWords: 50,
    requires: [
      { any: ["gentile", "buongiorno"] },
      { verb: "potere", tense: "condizionale" },
      { any: ["purtroppo", "mi dispiace"] },
      { any: ["cordiali saluti", "un cordiale saluto", "distinti saluti"] }
    ],
    model: "Gentile dottoressa Rossi, le scrivo per disdire l'appuntamento di giovedì 14 alle 16. Purtroppo devo partire per lavoro proprio quel giorno e non riesco a spostare il viaggio. Potrei venire la settimana successiva, se ha ancora posto? Sono libero il martedì e il mercoledì pomeriggio. La ringrazio per la comprensione. Cordiali saluti, Marco Bianchi."
  },

  {
    id: "w-b1-opinione",
    cefr: "B1",
    tag: "g-congiuntivo-pres",
    kind: "translate",
    titleIt: "Dire quello che si pensa",
    items: [
      { a: ["penso che sia una buona idea", "credo che sia una buona idea"] },
      { a: ["non sono d'accordo con te", "non sono d'accordo"] },
      { a: ["secondo me è troppo caro", "per me è troppo caro"] },
      { a: ["mi sembra che abbia ragione", "credo che abbia ragione"] },
      { a: ["dipende da quello che vuoi", "dipende da cosa vuoi"] }
    ]
  },

  {
    id: "w-b2-argomentare",
    cefr: "B2",
    tag: "g-connettivi",
    kind: "compose",
    titleIt: "Sostenere una posizione",
    minWords: 80,
    requires: [
      { any: ["inoltre", "in secondo luogo"] },
      { any: ["tuttavia", "però", "d'altra parte"] },
      { any: ["quindi", "di conseguenza", "perciò"] },
      { verb: "dovere", tense: "condizionale" }
    ],
    model: "Il lavoro da remoto ha cambiato più cose di quante ne avesse promesse. Da una parte permette di vivere lontano dagli uffici e di organizzare la giornata con più libertà. Inoltre riduce il tempo perso negli spostamenti, che nessuno considerava lavoro ma che lo era. Tuttavia non tutte le professioni possono farlo, e chi resta in presenza finisce per sentirsi di serie B. Di conseguenza il problema non è il luogo, ma chi decide. Le aziende dovrebbero dirlo apertamente, invece di parlare di flessibilità."
  },

  {
    id: "w-c1-riassunto",
    cefr: "C1",
    tag: "g-registri",
    kind: "compose",
    titleIt: "Riassumere senza copiare",
    minWords: 70,
    requires: [
      { any: ["secondo l'autore", "l'autore sostiene", "il testo sostiene"] },
      { verb: "trattarsi", tense: "pres" },
      { any: ["in sintesi", "in conclusione", "in breve"] }
    ],
    model: "Il testo affronta il linguaggio degli uffici pubblici e la sua abitudine a nascondere chi compie l'azione. Secondo l'autore non si tratta di un vezzo stilistico: un'amministrazione che non nomina il responsabile di un atto rende più difficile contestarlo. Vengono citati i manuali di semplificazione, esistenti da vent'anni e raramente applicati. In sintesi, la distanza della lingua burocratica non è un difetto di forma ma una scelta che ha conseguenze pratiche."
  }
];
