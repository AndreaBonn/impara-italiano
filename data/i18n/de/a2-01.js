/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/a2-01.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:a2-u01": { title: "Damals und heute", grammarNote: "imperfetto · imperfetto gegen passato prossimo" },
  "lesson:a2-u01-l1": {
    theme: "Erinnerungen",
    title: "Imperfetto: Beschreibung und Gewohnheit",
    objectives: [
      "das imperfetto in allen drei Konjugationen bilden",
      "beschreiben, wie es früher war",
      "über Gewohnheiten in der Vergangenheit sprechen"
    ],
    theory: [
      {
        h: "Eine Vergangenheit ohne Ränder",
        p: "Das <strong>imperfetto</strong> sagt nicht, wann etwas angefangen oder aufgehört hat. Es malt den Hintergrund, Zustände und Gewohnheiten: <em>da bambino abitavo in campagna</em> („als Kind wohnte ich auf dem Land\")."
      },
      {
        h: "Die Konjugation hat fast keine Ausnahmen",
        p: "Infinitivstamm + <em>-vo, -vi, -va, -vamo, -vate, -vano</em>. Vier Verben haben einen abweichenden Stamm: <em>essere</em> (ero, eri, era…), <em>fare</em> (facevo), <em>dire</em> (dicevo), <em>bere</em> (bevevo). Mehr nicht: das imperfetto ist die regelmäßigste Zeit des Italienischen."
      },
      {
        h: "Drei typische Verwendungen",
        list: [
          "<b>Beschreibung</b>: <em>Era una giornata fredda, pioveva.</em>",
          "<b>Gewohnheit</b>: <em>Ogni estate andavamo al mare.</em>",
          "<b>Zustand oder Gefühl</b>: <em>Ero stanca, non avevo voglia di uscire.</em>"
        ]
      },
      {
        contrast: "Hier hilft dir Deutsch nicht, und das ist der Punkt, an dem dieses Kapitel hängt. Dein Präteritum und dein Perfekt unterscheiden sich nach <b>Register</b> (geschrieben gegen gesprochen), nicht nach Aspekt: „ich wohnte\" und „ich habe gewohnt\" meinen dasselbe. Im Italienischen trennen die beiden Zeiten dagegen zwei verschiedene Bedeutungen, und die Wahl ist keine Stilfrage. Anhaltspunkt: wo du „immer\", „damals\" oder „jedes Mal\" mitdenkst, steht das imperfetto."
      }
    ],
    grammar: {
      title: "Imperfetto: Konjugation",
      table: {
        head: ["Person", "parlare", "prendere", "dormire", "essere"],
        rows: [
          ["io", "parlavo", "prendevo", "dormivo", "ero"],
          ["tu", "parlavi", "prendevi", "dormivi", "eri"],
          ["lui / lei", "parlava", "prendeva", "dormiva", "era"],
          ["noi", "parlavamo", "prendevamo", "dormivamo", "eravamo"],
          ["voi", "parlavate", "prendevate", "dormivate", "eravate"],
          ["loro", "parlavano", "prendevano", "dormivano", "erano"]
        ]
      },
      examples: [
        { tr: "Als Kind verbrachte ich die Sommer bei meinen Großeltern." },
        { tr: "Es war ein grauer Tag und es war kalt." },
        { tr: "Früher habe ich geraucht, jetzt habe ich aufgehört." },
        { tr: "Ich wusste nicht, dass du hier wohnst." },
        { tr: "Während ich lernte, hörte ich Radio." },
        { tr: "Was hat dein Großvater beruflich gemacht?" }
      ]
    },
    vocab: [
      "als Kind",
      "damals",
      "früher, einst",
      "normalerweise",
      "jeden Sommer",
      "oft",
      "eine Erinnerung",
      "die Kindheit",
      "die Großeltern",
      "das Land",
      "aufhören, etwas zu tun",
      "es hat mir gefehlt"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "„Ogni estate andavamo al mare\" beschreibt:",
        opts: ["eine einzelne Reise", "eine wiederholte Gewohnheit in der Vergangenheit", "einen Plan für die Zukunft"]
      },
      { q: "Ergänze: „Da bambino ___ in campagna.\" (ich wohnte — abitare)" },
      { q: "Ergänze: „___ una giornata fredda.\" (es war)" },
      {
        q: "Ergänze die Erinnerung.",
        tr: "Als kleines Mädchen verbrachte ich die Sommer bei meinen Großeltern. Das Haus war groß und jeden Abend aßen wir alle zusammen."
      },
      { q: "„Früher habe ich geraucht, jetzt habe ich aufgehört.\"" },
      { tr: "Als Kind spielte ich jeden Nachmittag Fußball." },
      { tr: "Als kleines Mädchen wohnte ich in einem Haus am Meer." }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Erinnerungen",
    title: "Imperfetto gegen passato prossimo",
    objectives: [
      "die richtige Vergangenheit wählen",
      "beide in einem Satz verbinden",
      "die Signale erkennen, die auf die eine oder die andere zeigen"
    ],
    theory: [
      {
        h: "Hintergrund gegen Ereignis",
        p: "Das ist die wichtigste grammatische Entscheidung auf A2. Das <strong>imperfetto</strong> malt den Hintergrund: was gerade lief, wie es war, was sich wiederholte. Das <strong>passato prossimo</strong> bringt das Ereignis: was geschah, was den Hintergrund unterbrach, was einmal passierte."
      },
      {
        contrast: "Der Unterschied ist keine Register-, sondern eine Bedeutungsfrage, und genau das macht ihn für dich schwer: dein Perfekt und dein Präteritum sind austauschbar, diese beiden Zeiten sind es nie. <em>Ieri ho lavorato</em> und <em>ieri lavoravo</em> sind beide korrekt und sagen Verschiedenes. Übersetzen hilft nicht, die Frage muss lauten: Hintergrund oder Ereignis?"
      },
      {
        h: "Das klassische Paar",
        p: "<em><b>Mentre uscivo</b> di casa, <b>è squillato</b> il telefono.</em> Das Hinausgehen war im Gang (imperfetto), das Telefon klingelte in einem Punkt (passato prossimo). Vertauscht man die Zeiten, wird der Satz absurd. Dein „während ich das Haus verließ, klingelte das Telefon\" hat dieselbe Form, nur ohne Zeitenwechsel."
      },
      {
        h: "Signale im Text",
        list: [
          "imperfetto: <em>sempre, spesso, di solito, ogni giorno, mentre, da bambino</em>",
          "passato prossimo: <em>ieri, una volta, all'improvviso, l'anno scorso, per tre ore, due volte</em>"
        ]
      },
      {
        h: "Verben, die die Bedeutung wechseln",
        p: "Einige Verben verschieben ihren Sinn mit der Zeit: <em>sapevo</em> (ich wusste, ein Zustand) gegen <em>ho saputo</em> (ich erfuhr, ein Moment); <em>conoscevo</em> (ich kannte) gegen <em>ho conosciuto</em> (ich lernte kennen); <em>volevo</em> (ich wollte) gegen <em>ho voluto</em> (ich entschied mich, ich bestand darauf). Deutsch drückt denselben Unterschied mit zwei verschiedenen Verben aus (wissen/erfahren, kennen/kennenlernen): dieselbe Idee, andere Verpackung."
      }
    ],
    grammar: {
      title: "Welche Zeit wählen",
      table: {
        head: ["imperfetto", "passato prossimo"],
        rows: [
          ["Pioveva e faceva freddo.", "Ha smesso di piovere alle sei."],
          ["Ogni sabato andavamo al mercato.", "Sabato scorso siamo andati al mercato."],
          ["Ero stanca.", "Mi sono stancata subito."],
          ["Mentre mangiavo…", "…è arrivato Marco."],
          ["Sapevo la verità.", "Ho saputo la verità ieri."],
          ["Conoscevo bene Roma.", "Ho conosciuto Marco a Roma."]
        ]
      },
      examples: [
        { tr: "Während ich aus dem Haus ging, klingelte das Telefon." },
        { tr: "Gestern habe ich drei Stunden gearbeitet.", note: "Grenzen → passato prossimo" },
        { tr: "Als ich jung war, arbeitete ich in einer Bar." },
        { tr: "Ich habe meine Frau bei einem Konzert kennengelernt." },
        { tr: "Ich wusste nicht, dass du hier bist." },
        { tr: "Plötzlich fiel der Strom aus." }
      ]
    },
    vocab: [
      "während",
      "plötzlich",
      "auf einmal",
      "letztes Jahr",
      "drei Stunden lang",
      "klingeln (ein Telefon)",
      "fallen",
      "geschehen, passieren",
      "kennen / ich lernte kennen",
      "wissen / ich erfuhr",
      "was ist passiert?",
      "zum Glück"
    ],
    exercises: [
      {
        q: "„___ (uscire, io) di casa quando ___ (squillare) il telefono.\" Welche Zeiten?",
        opts: ["beide imperfetto", "imperfetto + passato prossimo", "beide passato prossimo"],
        why: "Der Hintergrund (hinausgehen) im imperfetto, das Ereignis (das Klingeln) im passato prossimo."
      },
      { q: "Setz die richtige Form ein.", tr: "Während ich aß, kam Marco." },
      { q: "Setz die richtige Form ein.", tr: "Gestern habe ich drei Stunden gearbeitet, dann bin ich mit Freunden ausgegangen." },
      {
        q: "„Ho conosciuto Marco a Roma\" bedeutet:",
        opts: ["Ich kannte Marco in Rom", "Ich habe Marco in Rom kennengelernt", "Ich kenne Marco aus Rom"]
      },
      {
        q: "„Ieri ho lavorato per tre ore.\" Warum nicht das imperfetto?",
        opts: ["Weil es eine Gewohnheit ist", "Weil die Dauer klare Grenzen hat", "Weil es eine Beschreibung ist"]
      },
      {
        q: "Welche Ausdrücke gehen normalerweise mit dem imperfetto?",
        opts: ["ogni giorno", "ieri", "di solito", "all'improvviso", "da bambino"]
      },
      { q: "„Ich wusste nicht, dass du hier wohnst.\"" },
      {
        q: "Ergänze die Geschichte.",
        tr: "Es war ein kalter Tag. Es regnete und ich hatte keinen Regenschirm. Plötzlich kam der Bus."
      },
      { tr: "Während ich nach Hause ging, traf ich einen alten Freund." },
      { tr: "Als Kind fuhr ich jeden Sommer ans Meer, aber letztes Jahr war ich in den Bergen." }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Erinnerungen",
    title: "Eine Veränderung beschreiben",
    objectives: [
      "die Vergangenheit mit der Gegenwart vergleichen",
      "Ausdrücke wie non c'era più, adesso invece verwenden",
      "sagen, wie sich etwas verändert hat"
    ],
    theory: [
      {
        h: "Der Kontrast prima / adesso",
        p: "Zwei Zeiten nebeneinanderzustellen, ist die Art, eine Veränderung zu zeigen: <em><b>Prima</b> qui c'era un cinema, <b>adesso</b> c'è un supermercato.</em> Die Struktur ist einfach, verlangt aber bewusstes Wechseln zwischen dem imperfetto (damals) und dem Präsens (heute)."
      },
      {
        h: "C'era und c'erano",
        p: "Das imperfetto von <em>c'è / ci sono</em> ist <strong>c'era / c'erano</strong>: „es gab\". Achte darauf, dass das Italienische Singular und Plural unterscheidet, wo dein „es gab\" für beides steht: <em>c'erano meno macchine</em>, nie „c'era meno macchine\"."
      },
      {
        h: "Kontrastausdrücke",
        list: [
          "<em>prima… adesso / oggi</em> — früher… jetzt",
          "<em>invece</em> — dagegen, hingegen",
          "<em>non… più</em> — nicht mehr: <em>non c'è più il mercato</em>",
          "<em>è cambiato molto</em> — es hat sich sehr verändert"
        ]
      },
      {
        tip: "<em>Non… più</em> umschließt das Verb wie <em>non… mai</em>: <em>non abito <b>più</b> qui</em>. Im passato prossimo steht <em>più</em> zwischen Hilfsverb und Partizip: <em>non ho più visto</em>."
      }
    ],
    grammar: {
      title: "Vergangenheit gegen Gegenwart",
      table: {
        head: ["damals (imperfetto)", "heute (Präsens)"],
        rows: [
          ["C'era un cinema.", "Adesso c'è un supermercato."],
          ["C'erano pochi turisti.", "Oggi ce ne sono troppi."],
          ["La gente si conosceva.", "Adesso nessuno saluta."],
          ["Non esisteva internet.", "Oggi tutti sono online."],
          ["Si viveva più lentamente.", "Adesso si corre sempre."]
        ]
      },
      examples: [
        { tr: "Früher gab es hier einen Markt, jetzt ist es ein Parkplatz." },
        { tr: "Die Stadt hat sich sehr verändert." },
        { tr: "Die alten Läden gibt es nicht mehr." },
        { tr: "Das Viertel dagegen ist lebendiger geworden." },
        { tr: "Als ich klein war, spielten die Leute auf der Straße." },
        { tr: "Jetzt ist alles anders." }
      ]
    },
    vocab: [
      "es gab (Sg. / Pl.)",
      "sich verändern",
      "es hat sich sehr verändert",
      "dagegen, hingegen",
      "nicht mehr",
      "damals",
      "Viertel",
      "Verkehr",
      "überfüllt",
      "ruhig",
      "werden",
      "besser / schlechter"
    ],
    exercises: [
      { q: "Das imperfetto von „c'è\": ___" },
      { q: "Das imperfetto von „ci sono\": ___" },
      { q: "Ergänze: „Non abito ___ qui.\" (ich wohne nicht mehr hier)" },
      {
        q: "Wo steht „più\" im passato prossimo?",
        opts: ["Vor non", "Zwischen Hilfsverb und Partizip", "Am Ende"],
        why: "Non ho più visto — genau wie già und mai."
      },
      {
        q: "Ergänze die Beschreibung der Veränderung.",
        tr: "Früher gab es hier ein Kino, jetzt gibt es einen Supermarkt. Das Viertel hat sich sehr verändert."
      },
      { q: "„Die alten Läden gibt es nicht mehr.\"" },
      { tr: "Als ich klein war, spielten die Leute auf der Straße." },
      { q: "Ordne zu.", pairs: ["dagegen", "überfüllt", "werden", "Verkehr"] },
      { tr: "Vor zwanzig Jahren gab es weniger Autos und mehr Läden im Viertel." },
      { tr: "Meine Stadt hat sich in den letzten zehn Jahren sehr verändert." }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Erinnerungen",
    title: "Über die Vergangenheit sprechen",
    objectives: [
      "ein Gespräch über Erinnerungen führen",
      "auf die Erzählung eines anderen reagieren",
      "das trapassato prossimo in einfachen Fällen verwenden"
    ],
    theory: [
      {
        h: "Reagieren ist Pflicht",
        p: "Das italienische Gespräch erträgt keine stummen Zuhörer. Während jemand erzählt, wirft man <em>davvero?</em>, <em>ma dai!</em>, <em>e poi?</em>, <em>che bello!</em>, <em>mamma mia</em> ein. Schweigen wird als Desinteresse gelesen, nicht als Höflichkeit — und genau das ist das Gegenteil dessen, was ein zurückhaltender Zuhörer beabsichtigt."
      },
      {
        h: "Trapassato prossimo: die Vergangenheit vor der Vergangenheit",
        p: "Imperfetto von <em>avere/essere</em> + Partizip: <em>avevo mangiato</em>, <em>ero uscito</em>. Das ist dein Plusquamperfekt, genauso gebaut: es steht, wenn ein Ereignis einem anderen vorausgeht: <em>Quando sono arrivato, il treno <b>era già partito</b>.</em>"
      },
      {
        h: "Wann es nötig ist",
        p: "Ohne es wird die Reihenfolge der Ereignisse trüb. <em>Quando sono arrivato, il treno è partito</em> heißt, dass der Zug <b>nach</b> meiner Ankunft abfuhr. <em>Era già partito</em> heißt, er fuhr <b>vorher</b> ab."
      },
      {
        tip: "<em>Ti ricordi quando…?</em> ist die Standarderöffnung für ein Erinnerungsgespräch. Die Antwort: <em>Certo che me lo ricordo!</em>"
      }
    ],
    grammar: {
      title: "Trapassato prossimo und Reaktionen",
      table: {
        head: ["Konstruktion", "Beispiel", "auf Deutsch"],
        rows: [
          ["avevo + Partizip", "Avevo già mangiato.", "Ich hatte schon gegessen."],
          ["ero + Partizip", "Ero appena uscito.", "Ich war gerade gegangen."],
          ["Reaktion", "Davvero? / Ma dai!", "Wirklich? / Nicht dein Ernst!"],
          ["Reaktion", "E poi? Che è successo?", "Und dann? Was ist passiert?"],
          ["Reaktion", "Mamma mia! / Che bello!", "Oh je! / Wie schön!"],
          ["Frage", "Ti ricordi quando…?", "Erinnerst du dich, als…?"]
        ]
      },
      examples: [
        { tr: "Als ich ankam, war die Party schon vorbei." },
        { tr: "Ich bin nicht ausgegangen, weil ich versprochen hatte zu arbeiten." },
        { tr: "Erinnerst du dich, als wir nach Sizilien gefahren sind?" },
        { tr: "Natürlich erinnere ich mich!" },
        { tr: "Nicht dein Ernst, das glaube ich nicht!" },
        { tr: "Und was ist dann passiert?" }
      ]
    },
    vocab: [
      "erinnerst du dich?",
      "ich erinnere mich",
      "vergessen",
      "wirklich?",
      "nicht dein Ernst!",
      "wie schön!",
      "oh je!",
      "und dann?",
      "was ist passiert?",
      "ich hatte schon…",
      "gerade eben",
      "ein peinlicher Moment"
    ],
    exercises: [
      {
        q: "„Quando sono arrivato, il treno era già partito.\" Was kam zuerst?",
        opts: ["Meine Ankunft", "Die Abfahrt des Zuges", "Beides gleichzeitig"]
      },
      { q: "Ergänze: „Quando sono arrivata, la festa ___ già finita.\"" },
      { q: "Ergänze: „Non avevo fame perché ___ già mangiato.\"" },
      { q: "Ordne die Reaktionen zu.", pairs: ["nicht dein Ernst!", "wirklich?", "und dann?", "wie schön!"] },
      { q: "Ergänze.", tr: "Als wir hinausgingen, hatte es schon aufgehört zu regnen, aber die Straße war noch nass." },
      { q: "„Erinnerst du dich, als wir nach Sizilien gefahren sind?\"" },
      {
        q: "Eine Freundin erzählt dir von ihrem Urlaub.",
        setting: "Kaffee nach der Arbeit, im September.",
        lines: [
          { tr: "Im August war ich mit meiner Familie in Apulien." },
          { tr: "Reagiere interessiert und frag, wie es war.", answerTr: "Wie schön! Wie war es?" },
          { tr: "Großartig, aber am ersten Tag ging unser Gepäck verloren." },
          { tr: "Reagiere mitfühlend und frag, was dann passierte.", answerTr: "Oh nein! Und dann?" },
          { tr: "Zwei Tage später haben sie es gefunden. Zum Glück!" }
        ]
      },
      { tr: "Ich bin nicht ausgegangen, weil ich versprochen hatte zu arbeiten." },
      { tr: "Als ich zurückkam, war meine Schwester schon weg." },
      { tr: "Erinnerst du dich, als wir in derselben Klasse waren?" }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Test",
    title: "Test zu Einheit 1",
    objectives: ["das imperfetto, den Kontrast zum passato prossimo und das trapassato prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "Setz die richtige Zeit ein.", tr: "Während ich hinausging, klingelte das Telefon." },
      { q: "Setz die richtige Zeit ein.", tr: "Gestern habe ich vier Stunden gearbeitet." },
      { q: "„Ho conosciuto Anna\" bedeutet:", opts: ["Ich kannte Anna", "Ich habe Anna kennengelernt", "Ich kenne Anna"] },
      { q: "„Prima qui ___ un cinema.\" (es gab)" },
      { q: "„Non abito ___ qui.\" (nicht mehr)" },
      { q: "„Quando sono arrivato, il treno ___ già partito.\"" },
      { tr: "Als Kind verbrachte ich jeden Sommer mit meinen Großeltern am Meer." },
      { tr: "Während ich nach Hause ging, traf ich einen alten Freund." }
    ]
  },
  "unit:a2-u02": { title: "Reisen", grammarNote: "futuro semplice · Buchungen · Bahnhof und Hotel" },
  "lesson:a2-u02-l1": {
    theme: "Reise",
    title: "Züge und Fahrkarten",
    objectives: [
      "eine Fahrkarte kaufen und Bahnhofsdurchsagen verstehen",
      "mit Gleiswechsel und Verspätung umgehen",
      "den Unterschied zwischen den Zugtypen kennen"
    ],
    theory: [
      {
        h: "Zugtypen",
        p: "Der <strong>regionale</strong> hält überall, ist billig und braucht keine Platzreservierung. Der <strong>Intercity</strong> ist die mittlere Stufe. <strong>Frecciarossa / Italo</strong> sind die Schnellzüge mit Reservierungspflicht: die Fahrkarte gilt für genau diesen Zug zu genau dieser Zeit."
      },
      {
        h: "Die Fahrkarte entwerten",
        p: "Eine <em>regionale</em>-Fahrkarte ohne feste Uhrzeit muss vor dem Gleis im gelben oder grünen Automaten <strong>entwertet</strong> werden (<em>convalidare</em>). Wer es nicht tut, zahlt Strafe, und die Kontrolleure hören sich keine Erklärungen an. Fahrkarten aus der App sind bereits aktiv. Wer aus dem deutschsprachigen Raum kommt, kennt den Handgriff höchstens aus dem Nahverkehr und vergisst ihn im Fernverkehr zuverlässig."
      },
      {
        h: "Durchsagen, die man verstehen muss",
        list: [
          "<em>Il treno viaggia con un ritardo di venti minuti</em> — der Zug hat zwanzig Minuten Verspätung",
          "<em>Cambio binario: il treno partirà dal binario 8</em> — Gleiswechsel",
          "<em>È in arrivo al binario 3</em> — Einfahrt auf Gleis 3",
          "<em>Il treno è soppresso</em> — der Zug fällt aus"
        ]
      },
      {
        tip: "<em>Binario</em> bedeutet sowohl den Bahnsteig als auch das Gleis. Die Nummer erscheint erst zehn bis fünfzehn Minuten vor der Abfahrt auf der Anzeige, was jeden überrascht, der feste Gleise gewohnt ist."
      }
    ],
    grammar: {
      title: "Sätze am Bahnhof",
      table: {
        head: ["Situation", "auf Italienisch", "auf Deutsch"],
        rows: [
          ["Fahrkarte", "Un biglietto per Firenze, andata e ritorno.", "Eine Hin- und Rückfahrkarte nach Florenz."],
          ["einfach", "Solo andata.", "Nur einfach."],
          ["Gleis", "Da quale binario parte?", "Von welchem Gleis fährt er ab?"],
          [
            "Verspätung",
            "Il treno è in ritardo di venti minuti.",
            "Der Zug hat zwanzig Minuten Verspätung."
          ],
          ["Anschluss", "Devo cambiare treno?", "Muss ich umsteigen?"],
          ["entwerten", "Devo convalidare il biglietto?", "Muss ich die Fahrkarte entwerten?"]
        ]
      },
      examples: [
        { tr: "Eine Fahrkarte nach Neapel für morgen früh, bitte." },
        { tr: "Erste oder zweite Klasse?" },
        { tr: "Ist er direkt oder muss ich umsteigen?" },
        { tr: "Der Zug um 14:35 fällt aus." },
        { tr: "Ist dieser Platz besetzt?" },
        { tr: "Entschuldigung, ist das Wagen 5?" }
      ]
    },
    vocab: [
      "Fahrkarte",
      "Hin und zurück",
      "nur einfach",
      "Gleis, Bahnsteig",
      "Wagen",
      "Platz",
      "umsteigen",
      "Anschluss",
      "Verspätung",
      "fällt aus",
      "eine Fahrkarte entwerten",
      "Schaffner"
    ],
    exercises: [
      {
        q: "Was bedeutet „il treno è soppresso\"?",
        opts: ["Der Zug hat Verspätung", "Der Zug fällt aus", "Der Zug ist voll"]
      },
      {
        q: "Welche Fahrkarte muss vor dem Einsteigen entwertet werden?",
        opts: ["Ein Frecciarossa mit Reservierung", "Ein regionale ohne feste Uhrzeit", "Jede Fahrkarte"]
      },
      { q: "Ergänze: „Da quale ___ parte il treno?\"" },
      { q: "Ergänze: „Un biglietto ___ e ritorno.\"" },
      { q: "Ordne zu.", pairs: ["Wagen", "Anschluss", "Verspätung", "eine Fahrkarte entwerten"] },
      { q: "„Muss ich umsteigen?\"" },
      {
        q: "Du kaufst eine Fahrkarte am Schalter.",
        setting: "Der Schalter, hinter dir eine Schlange.",
        lines: [
          { tr: "Guten Tag, was darf es sein?" },
          {
            tr: "Bitte um eine Fahrkarte nach Florenz für heute Nachmittag.",
            answerTr: "Eine Fahrkarte nach Florenz für heute Nachmittag."
          },
          { tr: "Regionale oder Frecciarossa?" },
          { tr: "Frag, wie viel länger der Regionale braucht.", answerTr: "Wie viel länger braucht der Regionale?" },
          { tr: "Anderthalb Stunden länger. Der Freccia kostet zweiundvierzig Euro." },
          {
            tr: "Entscheide dich für den Frecciarossa und frag nach dem Gleis.",
            answerTr: "Ich nehme den Frecciarossa. Von welchem Gleis fährt er ab?"
          }
        ]
      },
      {
        q: "Ergänze die Bahnhofsdurchsage.",
        tr: "Der Regionalzug nach Bologna hat zwanzig Minuten Verspätung. Gleiswechsel: er fährt von Gleis 8 ab."
      },
      { tr: "Der Zug nach Rom fährt von Gleis zwölf, mit zehn Minuten Verspätung." },
      { tr: "Entschuldigung, muss ich diese Fahrkarte entwerten?" }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Reise",
    title: "Futuro semplice",
    objectives: [
      "das einfache Futur bilden",
      "die unregelmäßigen Stämme kennen",
      "das Futur für eine Vermutung verwenden"
    ],
    theory: [
      {
        h: "Wie es gebildet wird",
        p: "Du nimmst den Infinitiv, streichst das End-<em>e</em> und hängst <em>-ò, -ai, -à, -emo, -ete, -anno</em> an. Verben auf <b>-are</b> verwandeln dieses <em>a</em> zusätzlich in ein <em>e</em>: <em>parlare → parler-ò</em>."
      },
      {
        contrast: "Deutsch baut das Futur mit einem Hilfsverb: „ich werde sprechen\". Italienisch macht es mit einer Endung, ganz ohne Hilfsverb — es gibt kein italienisches „werden\", also verschwindet die ganze Konstruktion, an die du gewöhnt bist. Dafür kommt dir eine andere Gewohnheit entgegen: für nahe, sichere Zukunft nimmst du im Deutschen ohnehin das Präsens („morgen fahre ich\"), und Italienisch macht genau dasselbe."
      },
      {
        h: "Die unregelmäßigen Stämme: die muss man können",
        p: "<em>essere → sar-</em>, <em>avere → avr-</em>, <em>andare → andr-</em>, <em>venire → verr-</em>, <em>volere → vorr-</em>, <em>potere → potr-</em>, <em>dovere → dovr-</em>, <em>sapere → sapr-</em>, <em>vedere → vedr-</em>, <em>bere → berr-</em>, <em>rimanere → rimarr-</em>, <em>fare → far-</em>. Die Endungen bleiben immer gleich."
      },
      {
        h: "Das Futur spricht nicht nur über die Zukunft",
        p: "Sehr häufig ist die <b>Vermutung über die Gegenwart</b>: <em>Che ore sono? — <b>Saranno</b> le tre.</em> („es wird wohl drei sein\"). Oder <em>Dov'è Marco? — Sarà a casa.</em> Dein „er wird wohl zu Hause sein\" macht genau dasselbe mit demselben Tempus: hier musst du nur wiedererkennen, nicht umlernen."
      },
      {
        trap: "Für nahe, sichere Zukunft benutzen Italiener also das <b>Präsens</b>: <em>domani parto alle sette</em>. Das Futur klingt dort steif oder weniger sicher. Heb es für Vorhersagen und ferne Pläne auf."
      }
    ],
    grammar: {
      title: "Futuro semplice",
      table: {
        head: ["Person", "parlare", "prendere", "partire", "essere"],
        rows: [
          ["io", "parlerò", "prenderò", "partirò", "sarò"],
          ["tu", "parlerai", "prenderai", "partirai", "sarai"],
          ["lui / lei", "parlerà", "prenderà", "partirà", "sarà"],
          ["noi", "parleremo", "prenderemo", "partiremo", "saremo"],
          ["voi", "parlerete", "prenderete", "partirete", "sarete"],
          ["loro", "parleranno", "prenderanno", "partiranno", "saranno"]
        ]
      },
      examples: [
        { tr: "Nächstes Jahr werde ich in Italien wohnen." },
        { tr: "Ich rufe dich an, sobald ich ankomme." },
        { tr: "Morgen fahren wir um sieben.", note: "nahe Zukunft: Präsens" },
        { tr: "Wie spät ist es? — Es wird wohl drei sein.", note: "eine Vermutung" },
        { tr: "Wo mag meine Fahrkarte sein?" },
        { tr: "Es wird nicht für alles Zeit sein." }
      ]
    },
    vocab: [
      "morgen",
      "übermorgen",
      "nächste Woche",
      "in drei Tagen",
      "sobald",
      "vielleicht",
      "bestimmt",
      "wahrscheinlich",
      "ein Plan",
      "umziehen",
      "im Voraus buchen",
      "wir werden sehen"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Was passiert mit den -are-Verben im Futur?",
        opts: ["Nichts", "Das a wird vor der Endung zu e", "Der Konsonant verdoppelt sich"]
      },
      { q: "Das Futur von „avere\", Form io: ___" },
      { q: "Das Futur von „venire\", Form loro: ___" },
      {
        q: "„Saranno le tre\" bedeutet:",
        opts: ["Es wird drei Uhr sein (in der Zukunft)", "Es wird wohl drei sein (Vermutung)", "Es war drei Uhr"]
      },
      { q: "Ergänze die Pläne.", tr: "Nächstes Jahr ziehe ich nach Bologna und suche dort Arbeit." },
      { tr: "Ich rufe dich an, sobald ich am Bahnhof bin." },
      { tr: "Nächstes Jahr werde ich in Italien wohnen." }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "Reise",
    title: "Hotels und Unterkunft",
    objectives: ["im Hotel einchecken", "ein Problem im Zimmer melden", "nach Leistungen und Check-out fragen"],
    theory: [
      {
        h: "Einchecken auf Italienisch",
        p: "An der Rezeption wird nach einem Ausweis gefragt: <em>Un documento, per favore</em>. Das Gesetz verlangt, dass Gäste bei der Polizei gemeldet werden, deshalb ist der Pass oder Personalausweis Pflicht, auch in Ferienwohnungen."
      },
      {
        h: "Tassa di soggiorno",
        p: "Fast jede italienische Stadt erhebt eine <strong>Kurtaxe</strong> (1 bis 7 Euro pro Person und Nacht), die vor Ort und meist bar bezahlt wird, unabhängig vom online gezahlten Preis. Das ist kein Betrug, sondern eine kommunale Abgabe wie deine Kurtaxe, und die Buchungsportale erwähnen sie selten."
      },
      {
        h: "Ein Problem melden",
        p: "Die Konstruktion ist einfach: <em>non funziona</em> („funktioniert nicht\") + die Sache. <em>L'aria condizionata non funziona.</em> Dazu <em>manca</em> („fehlt\"): <em>Mancano gli asciugamani.</em> Beim letzten aufpassen: wo dein „es fehlen die Handtücher\" das unpersönliche „es\" behält, richtet sich das italienische Verb direkt nach der Sache."
      },
      {
        tip: "<em>Camera doppia</em> ist ein Zimmer für zwei, entweder mit einem großen Bett (<em>matrimoniale</em>) oder mit zwei (<em>due letti singoli</em>). Bei der Buchung zu präzisieren, denn die Voreinstellung wechselt."
      }
    ],
    grammar: {
      title: "Hotelsätze",
      table: {
        head: ["Situation", "auf Italienisch", "auf Deutsch"],
        rows: [
          ["Einchecken", "Ho una prenotazione a nome Smith.", "Ich habe eine Reservierung auf den Namen Smith."],
          ["Zimmertyp", "Una camera doppia con bagno privato.", "Ein Doppelzimmer mit eigenem Bad."],
          ["Frühstück", "La colazione è inclusa?", "Ist das Frühstück inbegriffen?"],
          ["ein Problem", "L'aria condizionata non funziona.", "Die Klimaanlage funktioniert nicht."],
          ["etwas fehlt", "Mancano gli asciugamani.", "Es fehlen die Handtücher."],
          ["Check-out", "A che ora è il check-out?", "Wann ist der Check-out?"]
        ]
      },
      examples: [
        { tr: "Guten Abend, ich habe eine Reservierung für drei Nächte." },
        { tr: "Ihren Ausweis, bitte." },
        { tr: "Die Kurtaxe beträgt zwei Euro pro Person und Nacht." },
        { tr: "Gibt es WLAN im Zimmer?" },
        { tr: "Kann ich mein Gepäck nach dem Check-out dalassen?" },
        { tr: "Das Zimmer ist im dritten Stock, der Aufzug ist dort drüben." }
      ]
    },
    vocab: [
      "Reservierung",
      "Einzel- / Doppelzimmer",
      "mit Doppelbett",
      "Schlüssel / Schlüsselkarte",
      "Stock",
      "Aufzug",
      "Handtuch",
      "Bettlaken",
      "Kurtaxe",
      "funktioniert nicht",
      "fehlt",
      "Check-out"
    ],
    exercises: [
      {
        q: "Was ist die „tassa di soggiorno\"?",
        opts: ["Eine Kaution", "Eine Kurtaxe, die vor Ort bezahlt wird", "Eine Reinigungsgebühr"]
      },
      { q: "Ergänze: „Ho una ___ a nome Smith.\"" },
      { q: "Ergänze: „L'aria condizionata non ___.\"" },
      { q: "Ergänze: „___ gli asciugamani.\" (es fehlen die Handtücher)" },
      { q: "Ordne zu.", pairs: ["Aufzug", "Bettlaken", "Stock", "Schlüssel"] },
      { q: "„Ist das Frühstück inbegriffen?\"" },
      {
        q: "Du checkst in einem Hotel ein.",
        setting: "Die Rezeption, abends, nach einer langen Reise.",
        lines: [
          { tr: "Guten Abend! Haben Sie eine Reservierung?" },
          {
            tr: "Bestätige, nenn deinen Namen und wie lange du bleibst.",
            answerTr: "Ja, auf den Namen Smith, für drei Nächte."
          },
          { tr: "Perfekt. Ihren Ausweis, bitte. Die Kurtaxe beträgt zwei Euro pro Nacht." },
          { tr: "Frag, ob das Frühstück inbegriffen ist.", answerTr: "Ist das Frühstück inbegriffen?" },
          { tr: "Ja, von sieben bis zehn, im ersten Stock." }
        ]
      },
      {
        q: "Melde ein Problem.",
        tr: "Hallo, ich rufe aus Zimmer 204 an: das WLAN funktioniert nicht und es fehlen saubere Handtücher."
      },
      { tr: "Das Zimmer ist im dritten Stock, Frühstück gibt es von sieben bis zehn." },
      { tr: "Kann ich mein Gepäck nach dem Check-out dalassen?" }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Reise",
    title: "Futuro anteriore und Planung",
    objectives: [
      "das futuro anteriore bilden",
      "zwei zukünftige Handlungen ordnen",
      "eine Vermutung über die Vergangenheit ausdrücken"
    ],
    theory: [
      {
        h: "Die Zukunft vor der Zukunft",
        p: "<strong>Futuro anteriore</strong> = das Futur von <em>avere/essere</em> + Partizip: <em>avrò finito</em>, <em>sarò arrivato</em>. Es beschreibt eine Handlung, die <b>vor</b> einer anderen zukünftigen abgeschlossen ist: <em>Quando <b>avrò finito</b> il lavoro, ti chiamerò.</em> Das ist dein Futur II, gleich gebaut."
      },
      {
        h: "Im Gespräch wird gekürzt",
        p: "Statt <em>quando avrò finito, ti chiamerò</em> sagen Italiener <em>quando finisco, ti chiamo</em>. Das futuro anteriore bleibt im gepflegten Register und in der Schrift, verstehen muss man es trotzdem."
      },
      {
        h: "Eine Vermutung über die Vergangenheit",
        p: "Diese Verwendung ist lebendig und häufig: <em>Non risponde… <b>avrà perso</b> il treno.</em> („er wird wohl den Zug verpasst haben\"). Genau darin liegt auch der Hauptgebrauch deines Futur II: die Vermutung, nicht die reine Zeitfolge. Hier trifft sich Deutsch mit Italienisch fast vollständig."
      },
      {
        tip: "Signale, die dem futuro anteriore oft vorausgehen: <em>quando, appena, dopo che, una volta che</em>."
      }
    ],
    grammar: {
      title: "Futuro anteriore",
      table: {
        head: ["Person", "avere + Partizip", "essere + Partizip"],
        rows: [
          ["io", "avrò finito", "sarò partito/a"],
          ["tu", "avrai finito", "sarai partito/a"],
          ["lui / lei", "avrà finito", "sarà partito/a"],
          ["noi", "avremo finito", "saremo partiti/e"],
          ["voi", "avrete finito", "sarete partiti/e"],
          ["loro", "avranno finito", "saranno partiti/e"]
        ]
      },
      examples: [
        { tr: "Wenn ich fertig bin, rufe ich dich an." },
        { tr: "Sobald wir ankommen, schreiben wir dir." },
        { tr: "Er antwortet nicht, er wird den Zug verpasst haben." },
        { tr: "Wo ist meine Fahrkarte nur hin?" },
        { tr: "Bis Freitag werden wir alles gebucht haben." },
        { tr: "Es wird ein Missverständnis gewesen sein." }
      ]
    },
    vocab: [
      "sobald",
      "sobald einmal",
      "bis (zu einem Termin)",
      "Missverständnis",
      "ein unerwartetes Problem",
      "Reiseroute",
      "Abfahrt / Ankunft",
      "Handgepäck",
      "Boarding",
      "Flug",
      "Zwischenstopp",
      "stornieren"
    ],
    exercises: [
      { q: "Das futuro anteriore von „finire\", Form io: ___" },
      { q: "Das futuro anteriore von „partire\", Form noi (gemischte Gruppe): ___" },
      {
        q: "„Avrà perso il treno\" bedeutet meistens:",
        opts: ["Er wird den Zug verpassen", "Er wird den Zug verpasst haben", "Er hat den Zug bestimmt verpasst"]
      },
      { q: "Ergänze.", tr: "Wenn wir im Hotel ankommen, schreiben wir dir." },
      { q: "„Wenn ich mit der Arbeit fertig bin, rufe ich dich an.\"" },
      {
        q: "Welcher Satz ist umgangssprachlicher?",
        opts: ["Quando avrò finito, ti chiamerò.", "Quando finisco, ti chiamo.", "Beide gleich."]
      },
      { q: "Ordne zu.", pairs: ["Boarding", "Flug", "bis (Termin)", "stornieren"] },
      { tr: "Bis Freitag werden wir alles gebucht haben." },
      { tr: "Sobald wir am Flughafen ankommen, schicken wir dir eine Nachricht." },
      { tr: "Er geht nicht ran, er wird seinen Anschluss verpasst haben." }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Test",
    title: "Test zu Einheit 2",
    objectives: ["die Futurzeiten und den Wortschatz zu Bahnhof und Hotel prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      {  },
      { q: "Das Futur von „andare\", Form io: ___" },
      { q: "Das Futur von „potere\", Form noi: ___" },
      { q: "„Il treno è soppresso\":", opts: ["verspätet", "fällt aus", "voll"] },
      { q: "„Da quale ___ parte?\"" },
      { q: "„L'aria condizionata non ___.\"" },
      { q: "Das futuro anteriore von „finire\", io: ___" },
      { q: "„Ich habe eine Reservierung für drei Nächte.\"" },
      { tr: "Der Flug nach Warschau geht von Gate B12, mit zwanzig Minuten Verspätung." },
      { tr: "Eine einfache Fahrkarte nach Bologna, bitte." }
    ]
  },
  "unit:a2-u03": {
    title: "Die Objektpronomen",
    grammarNote: "direkte und indirekte Pronomen · Angleichung des Partizips"
  },
  "lesson:a2-u03-l1": {
    theme: "Grammatik",
    title: "Die direkten Objektpronomen",
    objectives: [
      "ein Nomen durch ein Pronomen ersetzen",
      "das Pronomen an die richtige Stelle setzen",
      "aufhören, dasselbe Wort zu wiederholen"
    ],
    theory: [
      {
        h: "Wofür sie da sind",
        p: "Das Nomen zu wiederholen klingt im Italienischen schwerfällig. <em>Compri il giornale? — Sì, <b>lo</b> compro.</em> Das Pronomen steht für das, was schon bekannt ist. Ohne es klingst du wie eine Lehrbuchübung, nicht wie ein Gespräch."
      },
      {
        h: "Die Formen",
        p: "<em>mi</em> (mich), <em>ti</em> (dich), <strong>lo</strong> (ihn / es, m), <strong>la</strong> (sie / es, f), <em>ci</em> (uns), <em>vi</em> (euch), <strong>li</strong> (sie, m), <strong>le</strong> (sie, f)."
      },
      {
        contrast: "Den Unterschied zwischen direktem und indirektem Objekt kennst du als Akkusativ und Dativ: <em>lo vedo</em> ist „ich sehe ihn\", <em>gli parlo</em> ist „ich spreche mit ihm\". Neu ist die <b>Stellung</b>: das italienische Pronomen steht <b>vor</b> dem konjugierten Verb, deins dahinter. „Ich sehe ihn\" wird zu <em>lo vedo</em>, wörtlich „ihn sehe ich\". Beim Infinitiv hängt sich das Pronomen hinten an: <em>voglio veder<b>lo</b></em> — oder es geht vor das Modalverb: <em><b>lo</b> voglio vedere</em>. Beides ist richtig."
      },
      {
        trap: "<b>Lo</b> und <b>la</b> verschmelzen vor einem Vokal: <em>l'ho visto</em>, <em>l'ho vista</em>. <b>Li</b> und <b>le</b> verschmelzen nie."
      }
    ],
    grammar: {
      title: "Direkte Objektpronomen",
      table: {
        head: ["Pronomen", "steht für", "Beispiel"],
        rows: [
          ["mi", "mich", "Mi chiami stasera?"],
          ["ti", "dich", "Ti vedo domani."],
          ["lo", "eine maskuline Sache/Person", "Il libro? Lo leggo stasera."],
          ["la", "eine feminine Sache/Person", "La pizza? La prendo io."],
          ["ci", "uns", "Ci aspetti?"],
          ["vi", "euch", "Vi chiamo dopo."],
          ["li", "sie (m)", "I biglietti? Li ho comprati."],
          ["le", "sie (f)", "Le chiavi? Le ho perse."]
        ]
      },
      examples: [
        { tr: "Kennst du Marco? — Ja, ich kenne ihn gut." },
        { tr: "Nimmst du das Auto? — Nein, ich nehme es nicht." },
        { tr: "Wo sind die Schlüssel? Ich finde sie nicht." },
        { tr: "Ich will ihn sofort sehen." },
        { tr: "Kannst du fünf Minuten auf mich warten?" },
        { tr: "Wir sehen uns morgen." }
      ]
    },
    vocab: [
      "kennen (eine Person, einen Ort)",
      "wissen (eine Tatsache), können",
      "finden",
      "verlieren",
      "warten auf",
      "anrufen",
      "einladen",
      "jemanden begleiten",
      "Zeitung",
      "Schlüssel",
      "sofort",
      "später"
    ],
    exercises: [
      {
        q: "„Conosci Anna?\" — wie antwortest du mit Ja und einem Pronomen?",
        opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."]
      },
      { q: "Ergänze: „I biglietti? ___ ho comprati ieri.\"" },
      { q: "Ergänze: „La pizza? ___ prendo io.\"" },
      {
        q: "Welche Sätze sind richtig?",
        opts: ["Lo voglio vedere.", "Voglio vederlo.", "Beide Formen sind richtig."]
      },
      {
        q: "Ersetz die Wiederholungen durch Pronomen.",
        tr: "— Kaufst du die Zeitung? — Ja, ich kaufe sie. — Und die Zeitschriften? — Nein, die kaufe ich nicht."
      },
      { q: "„Ich kenne ihn nicht.\"" },
      {
        q: "Welche direkten Pronomen können vor einem Vokal verschmelzen?",
        opts: ["lo", "la", "li", "le"]
      },
      { tr: "Kannst du fünf Minuten auf mich warten?" },
      { tr: "Ich finde die Schlüssel nicht, vielleicht habe ich sie im Büro gelassen." },
      { tr: "Kennst du dieses Restaurant? — Ja, ich kenne es gut." }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Grammatik",
    title: "Die Angleichung des Partizips an das Pronomen",
    objectives: [
      "das Partizip an das direkte Pronomen angleichen",
      "die Fälle unterscheiden, in denen die Angleichung Pflicht ist",
      "l'ho visto / l'ho vista richtig schreiben"
    ],
    theory: [
      {
        h: "Die Regel in einem Satz",
        p: "In den zusammengesetzten Zeiten mit <em>avere</em> <b>gleicht sich das Partizip einem vorangestellten direkten Objektpronomen an</b>. <em>Ho visto Anna</em> → <em><b>L'ho vista</b></em>. Ohne Pronomen bleibt das Partizip unverändert."
      },
      {
        contrast: "Deutsch kennt nichts dergleichen: „ich habe sie gesehen\" bleibt „gesehen\", egal wen. Es gibt also keine Intuition, auf die du dich stützen könntest, und die Regel muss von Grund auf eingeübt werden."
      },
      {
        h: "Vier Formen",
        list: [
          "<em>lo</em> → <em>l'ho vist<b>o</b></em>",
          "<em>la</em> → <em>l'ho vist<b>a</b></em>",
          "<em>li</em> → <em>li ho vist<b>i</b></em>",
          "<em>le</em> → <em>le ho vist<b>e</b></em>"
        ]
      },
      {
        trap: "Die Verschmelzung <em>l'</em> verbirgt das Genus, deshalb sagt allein die <b>Partizipendung</b>, wer gemeint ist. <em>L'ho visto</em> (ihn) und <em>l'ho vista</em> (sie) unterscheiden sich in einem Buchstaben und bedeuten Verschiedenes."
      },
      {
        h: "Wo es KEINE Angleichung gibt",
        p: "Bei einem <b>indirekten</b> Pronomen ändert sich das Partizip nicht: <em>Le ho parlato</em> (ich habe mit ihr gesprochen), nie „parlata\". Das ist der häufigste Fehler in dieser Phase: du musst wissen, ob das Pronomen direkt oder indirekt ist — also, in deinen Begriffen, ob es Akkusativ oder Dativ ist."
      }
    ],
    grammar: {
      title: "Angleichung des Partizips",
      table: {
        head: ["ganzer Satz", "mit Pronomen", "Hinweis"],
        rows: [
          ["Ho visto Marco.", "L'ho visto.", "lo → -o"],
          ["Ho visto Anna.", "L'ho vista.", "la → -a"],
          ["Ho comprato i libri.", "Li ho comprati.", "li → -i"],
          ["Ho perso le chiavi.", "Le ho perse.", "le → -e"],
          ["Ho parlato a Anna.", "Le ho parlato.", "indirekt → keine Angleichung"],
          ["Ho mangiato la pizza.", "L'ho mangiata.", "Sachen zählen auch"]
        ]
      },
      examples: [
        { tr: "Hast du Giulia gesehen? — Ja, ich habe sie gestern gesehen." },
        { tr: "Die Unterlagen? Die habe ich schon geschickt." },
        { tr: "Die Fotos? Die habe ich mir noch nicht angesehen." },
        { tr: "Ich habe ihr eine Mail geschrieben.", note: "indirekt: keine Angleichung" },
        { tr: "Ich habe sie in Rom kennengelernt." },
        { tr: "Sie haben uns zur Party eingeladen." }
      ]
    },
    vocab: [
      "schicken",
      "ansehen",
      "erhalten",
      "zurückgeben",
      "leihen",
      "Unterlage, Dokument",
      "Foto",
      "Nachricht",
      "E-Mail",
      "noch",
      "schon",
      "zufällig"
    ],
    exercises: [
      {
        q: "„Hai visto Anna?\" — die richtige Antwort:",
        opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."]
      },
      {
        q: "Ergänze: „I libri? ___ ho comprat___.\" — schreib beide Teile durch ein Leerzeichen getrennt",
        hint: "Pronomen + Partizipendung",
        why: "Li ho comprati — das Pronomen li erzwingt die Endung -i."
      },
      { q: "Ergänze die Endung: „Le chiavi? Le ho pers___.\"" },
      {
        q: "„Le ho parlato\" — warum nicht „parlata\"?",
        opts: ["Das ist ein Fehler", "Weil „le\" hier indirekt ist (ihr)", "Weil parlare unregelmäßig ist"]
      },
      { q: "Ergänze die Endungen.", tr: "Die Mail? Die habe ich schon geschickt. Die Fotos? Die habe ich mir noch nicht angesehen." },
      { q: "„Ich habe sie in Rom kennengelernt.\"" },
      {
        q: "In welchen Sätzen muss sich das Partizip angleichen?",
        opts: ["L'ho vista.", "Le ho parlato.", "Li ho invitati.", "Gli ho scritto."]
      },
      { tr: "Ich habe die Unterlagen schon geschickt." },
      { tr: "Ich habe mir die Fotos von der Reise noch nicht angesehen." },
      { tr: "Hast du Giulia gesehen? — Ja, ich habe sie gestern Abend gesehen." }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Grammatik",
    title: "Die indirekten Objektpronomen",
    objectives: [
      "ein direktes von einem indirekten Objekt unterscheiden",
      "gli und le richtig verwenden",
      "die Verben kennen, die ein indirektes Objekt verlangen"
    ],
    theory: [
      {
        h: "Wem, nicht wen",
        p: "Ein <b>indirektes</b> Pronomen ersetzt <em>a + Person</em>: <em>Telefono a Marco → <b>Gli</b> telefono.</em> Ein <b>direktes</b> Pronomen ersetzt ein Nomen ohne Präposition: <em>Vedo Marco → <b>Lo</b> vedo.</em> Deine Frageprobe funktioniert genauso: wen sehe ich, wem telefoniere ich."
      },
      {
        h: "Die Formen",
        p: "<em>mi, ti, <b>gli</b> (ihm), <b>le</b> (ihr), ci, vi, <b>gli</b> (ihnen)</em>. Im förmlichen Register heißt „ihnen\" <em>loro</em> und steht hinter dem Verb: <em>Telefono loro</em>, im Gespräch aber fast immer <em>gli</em>."
      },
      {
        h: "Verben, die dich aufs Glatteis führen",
        p: "Mehrere italienische Verben nehmen ein indirektes Objekt, wo Deutsch ein direktes hat: <em>telefonare a</em> (jemanden anrufen), <em>chiedere a</em>, <em>credere a</em>. „Lo telefono\" ist falsch, es heißt <em>gli telefono</em>. Bei <em>rispondere a</em> („ihm antworten\") und <em>piacere a</em> („ihm gefallen\") trifft dein Dativ dagegen genau."
      },
      {
        trap: "<b>Gli</b> hat zwei völlig verschiedene Aufgaben: es ist Artikel (<em>gli amici</em>) und Pronomen (<em>gli parlo</em>). Die Stellung entscheidet: der Artikel steht vor einem Nomen, das Pronomen vor einem Verb."
      }
    ],
    grammar: {
      title: "Direkt gegen indirekt",
      table: {
        head: ["Verb", "Typ", "Beispiel"],
        rows: [
          ["vedere qualcuno", "direkt", "Lo vedo domani."],
          ["telefonare a qualcuno", "indirekt", "Gli telefono domani."],
          ["conoscere qualcuno", "direkt", "La conosco bene."],
          ["scrivere a qualcuno", "indirekt", "Le scrivo una mail."],
          ["aspettare qualcuno", "direkt", "Ti aspetto."],
          ["rispondere a qualcuno", "indirekt", "Gli rispondo subito."]
        ]
      },
      examples: [
        { tr: "Hast du Marco angerufen? — Ja, ich habe ihn gestern angerufen." },
        { tr: "Was hast du ihr gesagt?" },
        { tr: "Ich glaube ihm überhaupt nicht." },
        { tr: "Sie haben uns sofort geantwortet." },
        { tr: "Sie reist sehr gern." },
        { tr: "Ich will heute mit ihm sprechen." }
      ]
    },
    vocab: [
      "jemanden anrufen",
      "jemandem antworten",
      "schreiben an",
      "jemanden fragen",
      "jemandem sagen",
      "jemandem glauben",
      "schenken",
      "jemandem leihen",
      "jemandem schicken",
      "jemandem erklären",
      "jemandem raten",
      "überhaupt"
    ],
    exercises: [
      { q: "„Telefono a Marco\" → mit Pronomen:", opts: ["Lo telefono.", "Gli telefono.", "Le telefono."] },
      { q: "„Vedo Marco\" → mit Pronomen:", opts: ["Lo vedo.", "Gli vedo.", "Le vedo."] },
      { q: "Ergänze: „Che cosa ___ hai detto?\" (ihr)" },
      { q: "Ergänze: „Non ___ credo.\" (ihm)" },
      {
        q: "Welche Verben verlangen ein indirektes Objekt (a qualcuno)?",
        opts: ["telefonare", "vedere", "rispondere", "aspettare", "credere"]
      },
      {
        q: "Ergänze die Pronomen.",
        tr: "Ich habe Giulia geschrieben: ich habe ihr eine Mail geschickt. Marco antwortet nicht, ich rufe ihn morgen an."
      },
      { q: "„Ich will heute mit ihm sprechen.\"" },
      { q: "Ordne zu.", pairs: ["schenken", "jemandem leihen", "jemandem erklären", "jemandem raten"] },
      { tr: "Ich habe ihr gestern geschrieben, aber sie hat mir noch nicht geantwortet." },
      { tr: "Ich rufe ihn heute Abend an und erkläre ihm alles." }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Grammatik",
    title: "Der Imperativ mit Pronomen",
    objectives: [
      "den Imperativ in allen Personen bilden",
      "ein Pronomen an einen Imperativ anhängen",
      "die Verneinung in der du-Form bilden"
    ],
    theory: [
      {
        h: "Die Grundformen",
        p: "<b>tu</b>: <em>-are → -a</em> (parla), <em>-ere/-ire → -i</em> (prendi, senti). <b>Lei</b>: umgekehrt, <em>-are → -i</em> (parli), <em>-ere/-ire → -a</em> (prenda, senta). <b>noi</b>: wie im Präsens (parliamo). <b>voi</b>: wie im Präsens (parlate). Die Höflichkeitsform kommt aus dem Konjunktiv, während dein „sprechen Sie\" einfach den Indikativ nimmt."
      },
      {
        h: "Die Verneinung in der du-Form",
        p: "Statt des Imperativs steht der <b>Infinitiv</b>: <em>non parlare!</em>, <em>non andare!</em>, <em>non ti preoccupare!</em>. Das gilt nur für <em>tu</em>. Deutsch behält den Imperativ („sprich nicht!\"), also ist das ein Punkt zum Auswendiglernen."
      },
      {
        h: "Die Pronomen hängen sich hinten an",
        p: "<em>Dimmi!</em>, <em>Chiamami!</em>, <em>Aspettalo!</em>, <em>Andiamoci!</em> — dein „sag mir\" und „ruf mich an\", nur zu einem Wort verschmolzen. In der <b>Lei</b>-Form steht das Pronomen dagegen vorn: <em>Mi dica</em>, <em>Lo aspetti</em>."
      },
      {
        trap: "Nach den Kurzformen <em>fa', da', sta', va', di'</em> <b>verdoppelt sich</b> der Konsonant des Pronomens: <em>dimmi, fammi, dammi, vattene, stammi bene</em>. Die Ausnahme ist <em>gli</em>: <em>digli</em>, ohne Verdopplung."
      }
    ],
    grammar: {
      title: "Der Imperativ",
      table: {
        head: ["Person", "parlare", "prendere", "sentire", "mit Pronomen"],
        rows: [
          ["tu", "parla", "prendi", "senti", "dimmi, chiamami"],
          ["Lei", "parli", "prenda", "senta", "mi dica, lo prenda"],
          ["noi", "parliamo", "prendiamo", "sentiamo", "andiamoci"],
          ["voi", "parlate", "prendete", "sentite", "ascoltatemi"],
          ["tu (verneint)", "non parlare", "non prendere", "non sentire", "non dirmi"]
        ]
      },
      examples: [
        { tr: "Erzähl mir alles!" },
        { tr: "Sag mir Bescheid, wie es läuft." },
        { tr: "Mach dir keine Sorgen, ich kümmere mich darum." },
        { tr: "Bitte, gnädige Frau." },
        { tr: "Gehen wir zusammen hin!" },
        { tr: "Verzeih mir, ich habe es nicht mit Absicht gemacht." }
      ]
    },
    vocab: [
      "sag mir",
      "sag mir Bescheid",
      "gib mir",
      "verzeih mir",
      "warte auf mich",
      "mach dir keine Sorgen",
      "schau",
      "hör mal",
      "pass auf dich auf",
      "komm her",
      "hör auf",
      "mit Absicht"
    ],
    exercises: [
      {
        q: "„non parlare!\" als Verneinung gehört zu welcher Person?",
        opts: ["tu", "Lei", "voi"],
        why: "Nur die tu-Form benutzt in der Verneinung den Infinitiv."
      },
      { q: "Bilde den Imperativ (tu) von „prendere\": ___" },
      { q: "Bilde den Imperativ (Lei) von „parlare\": ___" },
      { q: "„Sag mir\" heißt: ___" },
      {
        q: "Warum „dammi\" und nicht „dami\"?",
        opts: [
          "Das ist ein Tippfehler",
          "Nach der Kurzform da' verdoppelt sich der Konsonant des Pronomens",
          "Weil dare durchgehend unregelmäßig ist"
        ]
      },
      { q: "„Mach dir keine Sorgen.\"" },
      {
        q: "Ergänze die Nachricht an einen Freund.",
        tr: "Hallo! Sag mir Bescheid, wann du ankommst, und schreib mir, wenn du losfährst."
      },
      { tr: "Bitte, gnädige Frau, ich höre Ihnen zu." },
      { tr: "Sag mir Bescheid, wann du ankommst, ich hole dich ab." },
      { tr: "Erzähl mir alles, mach dir keine Sorgen." }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Test",
    title: "Test zu Einheit 3",
    objectives: ["direkte und indirekte Pronomen, die Angleichung des Partizips und den Imperativ prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Conosci Anna?\" →", opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."] },
      { q: "„I biglietti? ___ ho comprati.\"" },
      { q: "„Le chiavi? Le ho pers___.\"" },
      { q: "„Telefono a Marco\" →", opts: ["Lo telefono", "Gli telefono", "Le telefono"] },
      { q: "„Che cosa ___ hai detto?\" (ihr)" },
      { q: "Der Imperativ (tu) von „sentire\": ___" },
      { q: "„Sag mir\": ___" },
      { q: "„Mach dir keine Sorgen, ich kümmere mich darum.\"" },
      { tr: "Ich habe sie gestern gesehen und mit ihr über das Projekt gesprochen." },
      { tr: "Sag mir Bescheid, wann du ankommst, ich warte auf dich." }
    ]
  },
  "unit:a2-u04": { title: "Gesundheit", grammarNote: "mi fa male · der Höflichkeitsimperativ · Ratschläge geben" },
  "lesson:a2-u04-l1": {
    theme: "Gesundheit",
    title: "Schmerzen und Symptome",
    objectives: [
      "sagen, was weh tut",
      "die wichtigsten Symptome benennen",
      "mi fa / mi fanno male verwenden"
    ],
    theory: [
      {
        h: "Eine umgedrehte Konstruktion, wie bei piacere",
        p: "<em>Mi fa male la testa</em> heißt wörtlich „der Kopf tut mir weh\". Subjekt ist der <b>Körperteil</b>, deshalb hat das Verb zwei Formen: <em>mi <b>fa</b> male il piede</em> (eine Sache) und <em>mi <b>fanno</b> male i piedi</em> (mehrere)."
      },
      {
        contrast: "Das ist genau dein „mir tut der Kopf weh\": derselbe Aufbau, dasselbe Dativpronomen, derselbe Numeruswechsel („mir tun die Füße weh\"). Auch der Artikel steht bei dir schon da. Dieses Kapitel ist damit fast geschenkt; die zweite Formel <em>ho mal di testa</em> entspricht deinem zusammengesetzten „Kopfschmerzen\"."
      },
      {
        h: "Zwei parallele Wege",
        p: "Neben <em>mi fa male la gola</em> gibt es <em>ho mal di gola</em>. Das zweite funktioniert als feste Wendung: <em>mal di testa, mal di stomaco, mal di schiena, mal di denti</em>. Beide sind gleich natürlich."
      },
      {
        h: "Der Artikel bei Körperteilen",
        p: "Italienisch sagt <em>mi fa male <b>la</b> testa</em>, nicht „mia testa\", denn das Pronomen <em>mi</em> sagt schon, wessen Kopf gemeint ist. Deutsch macht dasselbe mit „mir tut <b>der</b> Kopf weh\". Ebenso in <em>mi lavo <b>i</b> denti</em>."
      },
      {
        tip: "<em>Da quanto tempo?</em> („seit wann?\") ist die erste Frage, die du beim Arzt hörst. Die Antwort: <em>da tre giorni</em>, <em>da una settimana</em>."
      }
    ],
    grammar: {
      title: "Schmerzen und Symptome",
      table: {
        head: ["Konstruktion", "Beispiel", "auf Deutsch"],
        rows: [
          ["mi fa male + Sg.", "Mi fa male la schiena.", "Mir tut der Rücken weh."],
          ["mi fanno male + Pl.", "Mi fanno male i denti.", "Mir tun die Zähne weh."],
          ["ho mal di…", "Ho mal di testa.", "Ich habe Kopfschmerzen."],
          ["ho la febbre", "Ho trentotto di febbre.", "Ich habe 38 Fieber."],
          ["mi sento…", "Mi sento debole.", "Ich fühle mich schwach."],
          ["da quanto?", "Da tre giorni.", "Seit drei Tagen."]
        ]
      },
      examples: [
        { tr: "Mir tut seit zwei Tagen der Hals weh." },
        { tr: "Mir tut der Magen weh und mir ist übel." },
        { tr: "Ich habe Husten und Schnupfen." },
        { tr: "Ich fühle mich müde und habe keinen Appetit." },
        { tr: "Ich bin allergisch gegen Penicillin." },
        { tr: "Sollte ich etwas gegen die Kopfschmerzen nehmen?" }
      ]
    },
    vocab: [
      "Kopf",
      "Hals",
      "Magen",
      "Rücken",
      "Zähne",
      "Fieber",
      "Husten",
      "eine Erkältung",
      "Übelkeit",
      "mir geht es nicht gut",
      "Allergie",
      "seit wann?"
    ],
    exercises: [
      {
        q: "„___ male i denti.\" (mir tun die Zähne weh)",
        opts: ["Mi fa", "Mi fanno", "Mi faccio"],
        why: "Subjekt sind die Zähne, Plural, also fanno."
      },
      { q: "Ergänze: „Mi ___ male la schiena.\"" },
      { q: "Ergänze: „Ho mal ___ testa.\"" },
      {
        q: "Welcher Satz klingt auf Italienisch natürlich?",
        opts: ["Mi fa male la mia testa.", "Mi fa male la testa.", "Fa male mia testa."],
        why: "Das Pronomen mi sagt schon, wessen; ein Possessivum wäre doppelt."
      },
      { q: "Ordne zu.", pairs: ["Husten", "eine Erkältung", "Übelkeit", "Fieber"] },
      { q: "„Mir tut seit drei Tagen der Hals weh.\"" },
      { q: "Beschreib deine Symptome.", tr: "Mir tut der Hals weh, ich habe Fieber und fühle mich schwach." },
      { tr: "Ich habe seit einer Woche Husten und Schnupfen." },
      { tr: "Mir tun nach dem Laufen die Beine weh." },
      { tr: "Ich habe Kopfschmerzen und Fieber." }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "Gesundheit",
    title: "Beim Arzt",
    objectives: ["dem Arzt ein Problem schildern", "die Anweisungen verstehen", "nach der Dosierung fragen"],
    theory: [
      {
        h: "Wie das italienische Gesundheitssystem funktioniert",
        p: "Die Basis ist der <strong>medico di base</strong>, dein Hausarzt, bei dem man sich anmelden muss. Die Überweisung heißt <em>l'impegnativa</em> oder <em>la ricetta</em>. Für Notfälle geht man in die <strong>pronto soccorso</strong>, wo die Triage nach Farben läuft: weiß (am wenigsten dringend) → rot. Die Behandlung ist im Wesentlichen kostenfrei, auch für Besucher aus der EU mit der europäischen Karte."
      },
      {
        h: "Der Höflichkeitsimperativ in den Anweisungen",
        p: "Der Arzt spricht dich mit <em>Lei</em> an: <em>Prenda questo tre volte al giorno</em>, <em>Riposi</em>, <em>Beva molta acqua</em>, <em>Non si preoccupi</em>. Das ist dein „nehmen Sie\", „ruhen Sie sich aus\", nur aus dem Konjunktiv gebaut. Diese Formen sollte man erkennen, noch bevor man sie selbst bilden kann."
      },
      {
        h: "Die Apotheke kann mehr, als du erwartest",
        p: "Der italienische <em>farmacista</em> hat weitreichende Beratungsbefugnis und ist bei kleineren Beschwerden oft die erste Anlaufstelle. Vieles bleibt verschreibungspflichtig, aber der Rat ist kostenlos und konkret."
      },
      {
        tip: "Der Satz, der dich in jeder medizinischen Lage rettet: <em>Sono allergico/a a…</em> Den sollte man ohne Nachdenken können."
      }
    ],
    grammar: {
      title: "Beim Arzt und in der Apotheke",
      table: {
        head: ["wer spricht", "auf Italienisch", "auf Deutsch"],
        rows: [
          ["Arzt", "Cosa c'è che non va?", "Was fehlt Ihnen?"],
          ["Arzt", "Da quanto tempo ha questi sintomi?", "Seit wann haben Sie diese Beschwerden?"],
          ["Patient", "Mi fa male qui.", "Hier tut es weh."],
          ["Arzt", "Le prescrivo un antibiotico.", "Ich verschreibe Ihnen ein Antibiotikum."],
          ["Patient", "Quante volte al giorno?", "Wie oft am Tag?"],
          ["Arzt", "Due volte al giorno, dopo i pasti.", "Zweimal täglich, nach den Mahlzeiten."]
        ]
      },
      examples: [
        { tr: "Guten Tag, mir geht es nicht gut." },
        { tr: "Sind Sie gegen ein Medikament allergisch?" },
        { tr: "Ich stelle Ihnen ein Rezept aus." },
        { tr: "Ruhen Sie sich aus und trinken Sie viel Wasser." },
        { tr: "Wenn es in drei Tagen nicht besser wird, kommen Sie wieder." },
        { tr: "Ich brauche eine Krankschreibung." }
      ]
    },
    vocab: [
      "Hausarzt",
      "Notaufnahme",
      "Rezept",
      "Antibiotikum",
      "Tablette",
      "Sirup",
      "Spritze",
      "Blutuntersuchung",
      "Krankschreibung",
      "nach den Mahlzeiten",
      "auf nüchternen Magen",
      "gesund werden"
    ],
    exercises: [
      {
        q: "Wohin gehst du mit einem plötzlichen, ernsten Problem?",
        opts: ["Dal medico di base", "Al pronto soccorso", "In farmacia"]
      },
      { q: "Ergänze: „Sono ___ alla penicillina.\" (allergisch, eine Frau spricht)" },
      { q: "Ergänze: „Quante ___ al giorno?\" (wie oft)" },
      { q: "Ordne zu.", pairs: ["Rezept", "Tablette", "auf nüchternen Magen", "gesund werden"] },
      { q: "„Seit wann haben Sie diese Beschwerden?\"" },
      {
        q: "Ein Arztbesuch.",
        setting: "Die Praxis, Montagvormittag.",
        lines: [
          { tr: "Guten Tag, setzen Sie sich. Was fehlt Ihnen?" },
          {
            tr: "Sag, dass dir der Hals weh tut und du Fieber hast.",
            answerTr: "Mir tut der Hals weh und ich habe Fieber."
          },
          { tr: "Seit wann?" },
          { tr: "Sag: seit drei Tagen.", answerTr: "Seit drei Tagen." },
          { tr: "Ich verschreibe Ihnen ein Antibiotikum. Irgendwelche Allergien?" },
          {
            tr: "Sag nein und frag nach der Dosierung.",
            answerTr: "Nein, keine. Wie oft am Tag nehme ich es?"
          }
        ]
      },
      {
        q: "Ergänze die Anweisungen des Arztes.",
        tr: "Nehmen Sie eine Tablette zweimal täglich, nach den Mahlzeiten. Und trinken Sie viel Wasser."
      },
      { tr: "Ich brauche eine Krankschreibung." },
      { tr: "Nehmen Sie das Antibiotikum sechs Tage lang, auch wenn es Ihnen besser geht." },
      { tr: "Ich bin allergisch gegen Penicillin, gibt es eine Alternative?" }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Gesundheit",
    title: "Ratschläge geben",
    objectives: [
      "jemandem raten, was zu tun ist",
      "den Konditional in dovresti / potresti verwenden",
      "auf das Problem eines anderen reagieren"
    ],
    theory: [
      {
        h: "Der Konditional: erste Begegnung",
        p: "Der Konditional wird auf demselben Stamm wie das Futur gebildet, mit den Endungen <em>-ei, -esti, -ebbe, -emmo, -este, -ebbero</em>. <em>Vorrei</em> kennst du schon; dazu kommen <em>dovrei</em> (ich sollte), <em>potrei</em> (ich könnte), <em>sarebbe</em> (es wäre)."
      },
      {
        contrast: "Deutsch bildet das Gegenstück mit „würde\" plus Infinitiv oder mit dem Konjunktiv II der Modalverben: „du solltest\", „du könntest\", „es wäre\". Funktional trifft das genau; die Form ist eine andere, denn Italienisch braucht kein Hilfsverb, sondern eine Endung."
      },
      {
        h: "Raten, ohne zu befehlen",
        p: "<em>Devi riposare</em> („du musst dich ausruhen\") klingt nach Anweisung. <em>Dovresti riposare</em> („du solltest dich ausruhen\") ist ein Rat. Genau der Unterschied, den du zwischen „musst\" und „solltest\" machst, und Italiener hören ihn ebenso deutlich."
      },
      {
        h: "Andere Arten zu raten",
        list: [
          "<em>Perché non…?</em> — „warum gehst du nicht…?\": <em>Perché non vai dal medico?</em>",
          "<em>Se fossi in te…</em> — „an deiner Stelle…\" (vollständig in B2)",
          "<em>Ti conviene…</em> — „es wäre besser für dich…\": <em>Ti conviene riposare.</em>"
        ]
      },
      {
        tip: "Auf das Problem eines anderen reagieren: <em>Mi dispiace</em> (das tut mir leid), <em>Che peccato</em> (wie schade), <em>Rimettiti presto</em> (gute Besserung)."
      }
    ],
    grammar: {
      title: "Condizionale presente: die Grundformen",
      table: {
        head: ["Person", "dovere", "potere", "volere", "essere"],
        rows: [
          ["io", "dovrei", "potrei", "vorrei", "sarei"],
          ["tu", "dovresti", "potresti", "vorresti", "saresti"],
          ["lui / lei", "dovrebbe", "potrebbe", "vorrebbe", "sarebbe"],
          ["noi", "dovremmo", "potremmo", "vorremmo", "saremmo"],
          ["voi", "dovreste", "potreste", "vorreste", "sareste"],
          ["loro", "dovrebbero", "potrebbero", "vorrebbero", "sarebbero"]
        ]
      },
      examples: [
        { tr: "Du solltest dich ein paar Tage ausruhen." },
        { tr: "Du könntest den Apotheker fragen." },
        { tr: "Es wäre besser, zum Arzt zu gehen." },
        { tr: "Warum nimmst du dir nicht einen Tag frei?" },
        { tr: "Es wäre besser für dich, heute auszuruhen." },
        { tr: "Gute Besserung!" }
      ]
    },
    vocab: [
      "du solltest",
      "du könntest",
      "es wäre besser",
      "es wäre besser für dich",
      "warum nicht…?",
      "Rat",
      "sich ausruhen",
      "aufhören",
      "sich bewegen, aktiv sein",
      "das tut mir leid",
      "wie schade",
      "gute Besserung"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Welche Fassung klingt nach Rat und nicht nach Befehl?",
        opts: ["Devi riposare.", "Dovresti riposare.", "Riposa!"]
      },
      { q: "Ergänze: „___ meglio andare dal medico.\" (es wäre besser)" },
      { q: "Ergänze: „___ chiedere al farmacista?\" (könntest du)" },
      { q: "„Du solltest dich ein paar Tage ausruhen.\"" },
      { q: "Ordne die Reaktionen zu.", pairs: ["das tut mir leid", "wie schade", "gute Besserung", "es wäre besser für dich"] },
      { q: "Gib einem Freund einen Rat.", tr: "Du solltest dich heute ausruhen. Und warum rufst du nicht den Arzt an?" },
      { tr: "Es wäre besser, wenn du dir einen Tag frei nimmst." },
      { tr: "Du solltest dich ausruhen und viel Wasser trinken." }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Gesundheit",
    title: "Lebensstil und Bewegung",
    objectives: [
      "über gesunde Gewohnheiten sprechen",
      "sagen, wie oft du etwas machst",
      "die Absicht ausdrücken, etwas zu ändern"
    ],
    theory: [
      {
        h: "Die mediterrane Kost ist keine Diät",
        p: "Im Italienischen heißt <em>dieta</em> vor allem „die Art, sich zu ernähren\", nicht „abnehmen\". <em>La dieta mediterranea</em> ist ein von der Unesco geführtes Ernährungsmuster, kein Abnehmplan. Deutsch trennt die beiden Bedeutungen in zwei Wörter, Ernährung und Diät, deshalb liest sich <em>dieta</em> für dich enger, als es ist: nur <em>sono a dieta</em> heißt wirklich, dass jemand abnimmt."
      },
      {
        h: "Eine Absicht ausdrücken",
        p: "<em>Ho intenzione di…</em> (ich habe vor), <em>vorrei iniziare a…</em> (ich würde gern anfangen), <em>sto cercando di…</em> (ich versuche gerade). Alle drei nehmen einen Infinitiv, aber jede mit ihrer eigenen Präposition, was typisch italienisch ist und Verb für Verb gelernt werden muss."
      },
      {
        h: "Genaue Häufigkeit",
        p: "<em>Tre volte alla settimana</em>, <em>una volta al mese</em>, <em>tutti i giorni</em>, <em>a giorni alterni</em> (jeden zweiten Tag). Die Präposition <em>a</em> plus Artikel: <em>alla settimana, al mese, all'anno</em>, wo du schlicht „pro Woche\" sagst."
      },
      {
        tip: "<em>Fare movimento</em> klingt natürlicher als <em>fare sport</em> für die alltägliche Aktivität: gehen, radfahren, Treppen steigen."
      }
    ],
    grammar: {
      title: "Gewohnheiten und Absichten",
      table: {
        head: ["Konstruktion", "Beispiel", "auf Deutsch"],
        rows: [
          ["ho intenzione di", "Ho intenzione di smettere di fumare.", "Ich habe vor, mit dem Rauchen aufzuhören."],
          ["sto cercando di", "Sto cercando di mangiare meglio.", "Ich versuche, besser zu essen."],
          ["vorrei iniziare a", "Vorrei iniziare a correre.", "Ich würde gern anfangen zu laufen."],
          ["Häufigkeit", "Tre volte alla settimana.", "Dreimal pro Woche."],
          ["jeden zweiten Tag", "A giorni alterni.", "Jeden zweiten Tag."],
          ["aufhören", "Ho smesso di bere caffè.", "Ich habe aufgehört, Kaffee zu trinken."]
        ]
      },
      examples: [
        { tr: "Ich bewege mich jeden Tag, und sei es nur zu Fuß." },
        { tr: "Ich versuche, mindestens sieben Stunden zu schlafen." },
        { tr: "Ich habe den Zucker reduziert und fühle mich besser." },
        { tr: "Ich gehe zweimal pro Woche ins Fitnessstudio." },
        { tr: "Ich habe vor, mich im Schwimmbad anzumelden." },
        { tr: "Die mediterrane Kost ist sehr abwechslungsreich." }
      ]
    },
    vocab: [
      "ein gesunder Lebensstil",
      "sich bewegen, aktiv sein",
      "trainieren",
      "laufen",
      "gehen, spazieren",
      "sich anmelden",
      "reduzieren",
      "mit dem Rauchen aufhören",
      "ich habe vor",
      "ich versuche gerade",
      "jeden zweiten Tag",
      "mindestens"
    ],
    exercises: [
      { q: "Ergänze: „Ho intenzione ___ smettere di fumare.\"" },
      { q: "Ergänze: „Vorrei iniziare ___ correre.\"" },
      { q: "Ergänze: „Vado in palestra tre volte ___ settimana.\"" },
      { q: "Was bedeutet „a giorni alterni\"?", opts: ["Jeden Tag", "Jeden zweiten Tag", "Einmal pro Woche"] },
      {
        q: "Im Italienischen bedeutet „dieta\" vor allem:",
        opts: ["abnehmen", "die Art, sich zu ernähren", "fasten"]
      },
      { q: "„Ich versuche, mindestens sieben Stunden zu schlafen.\"" },
      { q: "Sprich über deine Gewohnheiten.", tr: "Ich bewege mich jeden zweiten Tag und versuche, den Zucker zu reduzieren." },
      { q: "Ordne zu.", pairs: ["trainieren", "sich anmelden", "reduzieren", "mindestens"] },
      { tr: "Ich habe vor drei Monaten mit dem Rauchen aufgehört und fühle mich viel besser." },
      { tr: "Ich laufe dreimal pro Woche, früh am Morgen." }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Test",
    title: "Test zu Einheit 4",
    objectives: ["mi fa male, den medizinischen Wortschatz und den Konditional prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Mi ___ male i denti.\"" },
      { q: "„Ho mal ___ testa.\"" },
      { q: "Ein plötzliches, ernstes Problem →", opts: ["medico di base", "pronto soccorso", "farmacia"] },
      {  },
      { q: "„___ meglio riposare.\" (es wäre besser)" },
      { q: "„Ho intenzione ___ smettere.\"" },
      { q: "Ordne zu.", pairs: ["Rezept", "Husten", "gesund werden", "auf nüchternen Magen"] },
      { q: "„Mir tut seit zwei Tagen der Hals weh.\"" },
      { tr: "Nehmen Sie eine Tablette zweimal täglich nach den Mahlzeiten." },
      { tr: "Mir geht es nicht gut, ich sollte zum Arzt gehen." }
    ]
  }
});
