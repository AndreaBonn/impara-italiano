/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/b2-01.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:b2-u01": {
    title: "Congiuntivo imperfetto",
    grammarNote: "congiuntivo imperfetto und trapassato · Zeitenfolge"
  },
  "lesson:b2-u01-l1": {
    theme: "Grammatik",
    title: "Formen und Grundverwendungen",
    objectives: [
      "das congiuntivo imperfetto bilden",
      "die unregelmäßigen Formen kennen",
      "es nach einem Hauptsatz in der Vergangenheit verwenden"
    ],
    theory: [
      {
        h: "Die Endungen sind ungewöhnlich regelmäßig",
        p: "Infinitivstamm + <em>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</em>: <em>parlassi, prendessi, dormissi</em>. Nur sechs Verben sind unregelmäßig: <em>essere → fossi</em>, <em>fare → facessi</em>, <em>dare → dessi</em>, <em>stare → stessi</em>, <em>dire → dicessi</em>, <em>bere → bevessi</em>."
      },
      {
        contrast: "Zwei der drei Verwendungen kennst du: dein Konjunktiv II deckt sowohl den Wunsch („käme er doch!\") als auch die Hypothese („wenn ich Zeit hätte\") genau so ab wie das congiuntivo imperfetto. Neu ist die dritte, die reine <b>Zeitenfolge</b>: nach einem Hauptsatz in der Vergangenheit verlangt das Italienische diese Form auch dann, wenn nichts Irreales dabei ist. Dein „ich dachte, es <b>war</b> einfacher\" bleibt im Indikativ, <em>Pensavo che <b>fosse</b> più semplice</em> nicht."
      },
      {
        h: "Die Grundregel: der Hauptsatz rückt zurück",
        p: "Wenn der Hauptsatz in die Vergangenheit rückt, wird aus dem congiuntivo presente das imperfetto. <em>Penso che <b>sia</b> vero</em> → <em>Pensavo che <b>fosse</b> vero.</em> Derselbe Mechanismus wie die Zeitenfolge in der indirekten Rede."
      },
      {
        h: "Zweiter Zusammenhang: eine Hypothese mit se",
        p: "<em>Se <b>avessi</b> tempo, verrei</em> („wenn ich Zeit hätte, käme ich\"). Das ist der zweite Typ des Bedingungssatzes, der gleich seine eigene Einheit bekommt. Merk dir vorerst, dass nach <em>se</em> nie ein Konditional steht."
      },
      {
        h: "Dritter Zusammenhang: ein Wunsch",
        p: "Das congiuntivo imperfetto kann allein stehen und einen Wunsch oder ein Bedauern ausdrücken: <em>Magari venisse!</em> („wenn er doch käme!\"), <em>Fosse vero!</em>, <em>Piovesse almeno!</em>. Genau dein Konjunktiv II mit „doch\"."
      }
    ],
    grammar: {
      title: "Congiuntivo imperfetto",
      table: {
        head: ["Person", "parlare", "prendere", "dormire", "essere", "fare"],
        rows: [
          ["che io", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che tu", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che lui/lei", "parlasse", "prendesse", "dormisse", "fosse", "facesse"],
          ["che noi", "parlassimo", "prendessimo", "dormissimo", "fossimo", "facessimo"],
          ["che voi", "parlaste", "prendeste", "dormiste", "foste", "faceste"],
          ["che loro", "parlassero", "prendessero", "dormissero", "fossero", "facessero"]
        ]
      },
      examples: [
        { tr: "Ich dachte, es wäre einfacher." },
        { tr: "Ich wusste nicht, dass du hier arbeitest." },
        { tr: "Ich wollte, dass du es mir früher sagst." },
        { tr: "Wenn ich Zeit hätte, käme ich gern." },
        { tr: "Wenn sie doch auch käme!" },
        { tr: "Es schien, als wäre niemand da." }
      ]
    },
    vocab: [
      "ich dachte, dass…",
      "ich wusste nicht, dass…",
      "ich wollte, dass…",
      "es schien, dass…",
      "wenn doch, vielleicht",
      "als ob",
      "vorausgesetzt dass",
      "für den Fall dass",
      "zur Not",
      "ich hätte fast Lust zu",
      "es wird Zeit, dass",
      "wer weiß, ob"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Ergänze: „Pensavo che ___ più semplice.\" (essere)" },
      { q: "Ergänze: „Non sapevo che tu ___ qui.\" (lavorare)" },
      {
        q: "„Penso che sia vero\" mit dem Hauptsatz in der Vergangenheit:",
        opts: ["Pensavo che sia vero.", "Pensavo che fosse vero.", "Pensavo che era vero."]
      },
      {
        q: "Setz das congiuntivo imperfetto ein.",
        tr: "Ich wollte, dass du es mir früher sagst und dass du mitkommst."
      },
      { q: "„Magari venisse!\" bedeutet:", opts: ["Vielleicht kommt er", "Wenn er doch käme!", "Er würde kommen"] },
      { q: "„Es schien, als wäre niemand da.\"" },
      { tr: "Ich wusste nicht, dass du das Projekt schon fertig hattest." },
      { tr: "Ich dachte, es wäre leichter als das." }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Grammatik",
    title: "Die Zeitenfolge",
    objectives: [
      "die Zeit des Nebensatzes wählen",
      "Vorzeitigkeit, Gleichzeitigkeit oder Nachzeitigkeit ausdrücken",
      "das congiuntivo trapassato bilden"
    ],
    theory: [
      {
        h: "Drei Zeitverhältnisse",
        p: "In einem zusammengesetzten Satz kann der Nebensatz <b>vorzeitig</b>, <b>gleichzeitig</b> oder <b>nachzeitig</b> zum Hauptsatz sein. Modus und Zeit hängen von zweierlei ab: von der Zeit des Hauptsatzes und vom Verhältnis."
      },
      {
        h: "Die Tabelle, die man auswendig können sollte",
        list: [
          "Hauptsatz im <b>Präsens</b>: Gleichzeitigkeit → cong. presente; Vorzeitigkeit → cong. passato; Nachzeitigkeit → cong. presente oder Futur",
          "Hauptsatz in der <b>Vergangenheit</b>: Gleichzeitigkeit → cong. imperfetto; Vorzeitigkeit → cong. trapassato; Nachzeitigkeit → condizionale passato"
        ]
      },
      {
        h: "Congiuntivo trapassato",
        p: "Congiuntivo imperfetto von <em>avere/essere</em> + Partizip: <em>avessi fatto</em>, <em>fossi andato</em>. Es markiert Vorzeitiges zu einem Hauptsatz in der Vergangenheit: <em>Pensavo che <b>fosse già partito</b>.</em>"
      },
      {
        contrast: "Deutsch hat diese Tabelle nicht: du markierst das Zeitverhältnis mit dem Tempus des Indikativs und lässt den Modus in Ruhe. Vor allem die Nachzeitigkeit fällt auseinander — dein „ich dachte, er <b>würde</b> kommen\" wird zum Konditional der Vergangenheit, <em>Pensavo che <b>sarebbe venuto</b></em>, nicht zum einfachen Konditional und schon gar nicht zum congiuntivo. Es ist derselbe Bruch wie in der indirekten Rede von B1 und bleibt der häufigste Fehler."
      }
    ],
    grammar: {
      title: "Die Zeitenfolge",
      table: {
        head: ["Hauptsatz", "Verhältnis", "Form im Nebensatz", "Beispiel"],
        rows: [
          ["presente", "Gleichzeitigkeit", "cong. presente", "Penso che sia qui."],
          ["presente", "Vorzeitigkeit", "cong. passato", "Penso che sia stato qui."],
          ["presente", "Nachzeitigkeit", "cong. presente / futuro", "Penso che venga domani."],
          ["passato", "Gleichzeitigkeit", "cong. imperfetto", "Pensavo che fosse qui."],
          ["passato", "Vorzeitigkeit", "cong. trapassato", "Pensavo che fosse stato qui."],
          ["passato", "Nachzeitigkeit", "condizionale passato", "Pensavo che sarebbe venuto."]
        ]
      },
      examples: [
        { tr: "Ich glaubte, er hätte schon geantwortet." },
        { tr: "Ich hoffte, dass er mich anrufen würde." },
        { tr: "Ich hatte keine Ahnung, dass es so kompliziert ist." },
        { tr: "Es war seltsam, dass sie noch nicht angekommen waren." },
        { tr: "Ich fürchtete, wir hätten den falschen Weg genommen." },
        { tr: "Mir schien, dass da ein Fehler war." }
      ]
    },
    vocab: [
      "Zeitenfolge",
      "Vorzeitigkeit",
      "Gleichzeitigkeit",
      "Nachzeitigkeit",
      "sich vorstellen, annehmen",
      "fürchten",
      "vermuten",
      "bezweifeln",
      "voraussetzen",
      "sich herausstellen",
      "zu dem Zeitpunkt",
      "inzwischen"
    ],
    exercises: [
      { q: "Ergänze: „Credevo che ___ già risposto.\" (avere, er)" },
      { q: "Ergänze: „Speravo che mi ___ chiamato.\" (die Zukunft in der Vergangenheit)" },
      {
        q: "„Pensavo che ___ domani.\" (venire, Nachzeitigkeit)",
        opts: ["venisse", "sarebbe venuto", "verrebbe"]
      },
      { q: "„Pensavo che ___ qui.\" (essere, Gleichzeitigkeit)", opts: ["sia", "fosse", "sarebbe stato"] },
      {
        q: "Setz die richtigen Formen ein.",
        tr: "Ich hatte keine Ahnung, dass es so kompliziert ist und so viel Zeit kosten würde."
      },
      {
        q: "Setz die richtigen Formen ein.",
        tr: "Es war seltsam, dass sie noch nicht angekommen waren und dass niemand etwas gemeldet hatte."
      },
      { q: "„Ich hoffte, dass er mich anrufen würde.\"" },
      {
        q: "Der häufigste Fehler bei der Zeitenfolge ist:",
        opts: [
          "das congiuntivo statt des Indikativs zu verwenden",
          "für die Nachzeitigkeit den einfachen statt des zusammengesetzten Konditionals zu nehmen",
          "che wegzulassen"
        ]
      },
      { tr: "Ich fürchtete, wir hätten den falschen Weg genommen und es wäre zu spät." },
      { tr: "Ich glaubte, er hätte meine Mail schon beantwortet." }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Grammatik",
    title: "Konjunktionen, die den Konjunktiv verlangen",
    objectives: [
      "come se mit dem congiuntivo imperfetto verwenden",
      "die Konjunktionen des Zwecks, der Bedingung und der Einräumung kennen",
      "zwischen Indikativ und congiuntivo wählen"
    ],
    theory: [
      {
        h: "Come se nimmt immer das imperfetto oder das trapassato",
        p: "<em>Parla <b>come se</b> fosse un esperto.</em> Nie das presente und nie den Indikativ, auch wenn der Hauptsatz im Präsens steht. Es ist eine Ausnahme von der Zeitenfolge."
      },
      {
        contrast: "Hier hilft dir dein Sprachgefühl vollständig: „er redet, <b>als ob</b> er ein Experte <b>wäre</b>\" verlangt genauso den Konjunktiv II und genauso die Vergangenheitsform, obwohl der Hauptsatz im Präsens steht. Von allen Konjunktionen dieser Lektion ist <em>come se</em> die einzige, die du geschenkt bekommst."
      },
      {
        h: "Die Konjunktionen nach Funktion",
        list: [
          "<b>Einräumung</b>: benché, sebbene, nonostante, malgrado, per quanto",
          "<b>Zweck</b>: affinché, perché (= damit)",
          "<b>Bedingung</b>: purché, a patto che, a condizione che, sempre che",
          "<b>Ausnahme</b>: a meno che (non), salvo che, tranne che",
          "<b>Zeit</b>: prima che (senza che, fino a che non)"
        ]
      },
      {
        h: "A meno che und das pleonastische non",
        p: "<em>Vengo, <b>a meno che non</b> piova.</em> Dieses <em>non</em> verneint nichts: der Satz heißt „ich komme, es sei denn, es regnet\". Es wegzulassen ist heute akzeptiert, aber die Form mit <em>non</em> ist die Standardform. Dein „es sei denn\" kommt ohne solche Füllnegation aus, also gibt es hier nichts zu übertragen."
      },
      {
        trap: "<b>Dopo che</b> nimmt den Indikativ, <b>prima che</b> das congiuntivo. Deine „nachdem\" und „bevor\" stehen beide im Indikativ, also markiert dir nichts, wo die Grenze verläuft."
      }
    ],
    grammar: {
      title: "Konjunktionen und Modus",
      table: {
        head: ["Konjunktion", "Modus", "Beispiel"],
        rows: [
          ["benché / sebbene", "congiuntivo", "Benché piova, esco."],
          ["affinché", "congiuntivo", "Te lo dico affinché tu capisca."],
          ["purché / a patto che", "congiuntivo", "Vengo purché tu ci sia."],
          ["a meno che non", "congiuntivo", "Vengo a meno che non piova."],
          ["prima che", "congiuntivo", "Parti prima che sia tardi."],
          ["dopo che", "Indikativ", "Dopo che è partito, ho capito."],
          ["come se", "cong. imperf./trapass.", "Parla come se fosse esperto."]
        ]
      },
      examples: [
        { tr: "Er tut, als wäre nichts passiert." },
        { tr: "So schwierig es auch ist, es lohnt sich." },
        { tr: "Ich helfe dir unter der Bedingung, dass du es ernst nimmst." },
        { tr: "Wir fahren los, bevor der Verkehr anfängt." },
        { tr: "Ich komme, es sei denn, es kommt etwas dazwischen." },
        { tr: "Obwohl er recht hatte, sagte er es nicht." }
      ]
    },
    vocab: [
      "so sehr auch, obwohl",
      "trotz",
      "damit",
      "vorausgesetzt dass",
      "unter der Bedingung, dass",
      "es sei denn",
      "außer dass",
      "bis",
      "sich verhalten, tun",
      "etwas Unvorhergesehenes",
      "sich lohnen",
      "es ernst nehmen"
    ],
    exercises: [
      {
        q: "„Parla come se ___ un esperto.\" (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Come se nimmt immer das congiuntivo imperfetto oder trapassato."
      },
      { q: "Ergänze: „Partiamo prima che ___ tardi.\" (essere)" },
      { q: "Ergänze: „Ti aiuto a patto che tu ___ serio.\" (essere)" },
      {
        q: "„Dopo che è partito\" — warum der Indikativ?",
        opts: ["Das ist ein Fehler", "Dopo che betrifft etwas tatsächlich Geschehenes", "Weil partire unregelmäßig ist"]
      },
      {
        q: "Welche Konjunktionen verlangen das congiuntivo?",
        opts: ["benché", "dopo che", "affinché", "siccome", "a meno che non"]
      },
      { q: "Setz die Formen ein.", tr: "Er tut, als wäre nichts passiert, obwohl alle die Wahrheit kennen." },
      { q: "„Ich komme, es sei denn, es kommt etwas dazwischen.\"" },
      { tr: "So schwierig es auch ist, es lohnt sich, es zu versuchen." },
      { tr: "Obwohl er recht hatte, zog er es vor, nichts zu sagen." },
      { tr: "Ich helfe dir gern, vorausgesetzt du sagst mir rechtzeitig Bescheid." }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Test",
    title: "Test zu Einheit 1",
    objectives: ["das congiuntivo imperfetto, das trapassato und die Zeitenfolge prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "„Pensavo che ___ più semplice.\"" },
      { q: "„Credevo che ___ già risposto.\" (avere, er)" },
      { q: "„Pensavo che ___ domani.\" (venire)", opts: ["venisse", "sarebbe venuto", "verrebbe"] },
      { q: "„Parla come se ___ esperto.\"", opts: ["è", "sia", "fosse"] },
      { q: "„Partiamo prima che ___ tardi.\"" },
      { q: "Welche verlangen das congiuntivo?", opts: ["benché", "dopo che", "purché", "siccome"] },
      { tr: "Ich hatte keine Ahnung, dass es so kompliziert ist, die Genehmigung zu bekommen." },
      { tr: "Ich hoffte, dass er mir bis gestern antworten würde." }
    ]
  },
  "unit:b2-u02": {
    title: "Die Bedingungssätze",
    grammarNote: "die drei Typen mit se · der gemischte Typ · umgangssprachliche Varianten"
  },
  "lesson:b2-u02-l1": {
    theme: "Grammatik",
    title: "Die drei Typen des Bedingungssatzes",
    objectives: [
      "das Reale, das Mögliche und das Irreale unterscheiden",
      "die Zeiten auf jeden Typ abstimmen",
      "den Konditional aus dem se-Satz heraushalten"
    ],
    theory: [
      {
        h: "Typ 1: real",
        p: "<em><b>Se</b> piove, <b>resto</b> a casa.</em> Die Bedingung ist real und wahrscheinlich. Beide Sätze im Indikativ: Präsens, Futur oder Imperativ (<em>Se hai tempo, chiamami</em>)."
      },
      {
        h: "Typ 2: möglich, aber ungewiss",
        p: "<em><b>Se avessi</b> tempo, <b>verrei</b>.</em> Congiuntivo imperfetto nach <em>se</em>, condizionale presente im Hauptsatz. Die Bedingung ist hypothetisch: theoretisch möglich, tatsächlich nicht erfüllt."
      },
      {
        contrast: "Der Aufbau ist der deine, die Verteilung nicht. Du setzt in <b>beide</b> Sätze denselben Konjunktiv II: „wenn ich Zeit <b>hätte</b>, <b>käme</b> ich\". Italienisch trennt: Konjunktiv nur im <em>se</em>-Satz, Konditional im Hauptsatz. Dasselbe beim Typ 3, wo dein doppeltes „hätte\" zu <em>avessi studiato</em> plus <em>avrei passato</em> auseinandertritt. Wer die deutsche Symmetrie mitbringt, baut zwei Konjunktive und liegt zur Hälfte falsch."
      },
      {
        h: "Typ 3: irreal, über die Vergangenheit",
        p: "<em><b>Se avessi studiato</b>, <b>avrei passato</b> l'esame.</em> Congiuntivo trapassato + condizionale passato. Es geht um etwas, das nicht mehr geschehen kann: Bedauern oder Vorwurf."
      },
      {
        trap: "Nach <b>se</b> steht nie ein Konditional oder ein Futur. „Se avrei tempo\" ist der auffälligste Ausländerfehler des Italienischen. Dein Gegenstück ist „wenn ich kommen <b>würde</b>\" statt „wenn ich <b>käme</b>\" — dieselbe Regel, dieselbe Stigmatisierung, und wenn dir das im Deutschen wehtut, vertrau dieser Reaktion."
      }
    ],
    grammar: {
      title: "Die drei Typen",
      table: {
        head: ["Typ", "se-Satz", "Hauptsatz", "Beispiel"],
        rows: [
          ["1. real", "Indikativ", "Indikativ / Imperativ", "Se piove, resto a casa."],
          ["1. Zukunft", "Präsens / Futur", "Futur", "Se verrai, ti aspetterò."],
          ["2. möglich", "cong. imperfetto", "condizionale presente", "Se avessi tempo, verrei."],
          ["3. irreal", "cong. trapassato", "condizionale passato", "Se avessi studiato, avrei passato."],
          [
            "gemischt",
            "cong. trapassato",
            "condizionale presente",
            "Se avessi studiato, ora lavorerei qui."
          ]
        ]
      },
      examples: [
        { tr: "Wenn das Wetter morgen schön ist, fahren wir ans Meer." },
        { tr: "An deiner Stelle würde ich es nicht tun." },
        { tr: "Wenn wir es früher gewusst hätten, wären wir gestern abgefahren." },
        { tr: "Hätte ich diese Stelle angenommen, würde ich jetzt in Rom wohnen.", note: "der gemischte Typ" },
        { tr: "Wenn du etwas brauchst, ruf mich an." },
        { tr: "Was würdest du tun, wenn du im Lotto gewinnen würdest?" }
      ]
    },
    vocab: [
      "wenn",
      "für den Fall dass",
      "sofern, falls (förmlich)",
      "andernfalls",
      "an deiner Stelle",
      "wenn doch",
      "Hypothese",
      "Bedingung",
      "in Erfüllung gehen",
      "bereuen",
      "Bedauern",
      "es sich anders überlegen"
    ],
    exercises: [
      { q: "„Se ___ tempo, verrei.\" (avere)", opts: ["ho", "avrei", "avessi"] },
      { q: "„Se avessi studiato, ___ l'esame.\" (passare)", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Ergänze: „Se domani ___ bel tempo, andiamo al mare.\" (fare)" },
      {
        q: "Welcher Satz ist falsch?",
        opts: ["Se avessi tempo, verrei.", "Se avrei tempo, verrei.", "Se ho tempo, vengo."]
      },
      { q: "Ergänze einen Typ 2.", tr: "An deiner Stelle würde ich es nicht tun." },
      { q: "Ergänze einen Typ 3.", tr: "Wenn wir es früher gewusst hätten, wären wir gestern abgefahren." },
      { q: "„Was würdest du tun, wenn du im Lotto gewinnen würdest?\"" },
      {
        q: "„Se avessi accettato quel lavoro, ora vivrei a Roma\" ist vom Typ:",
        opts: ["erster", "zweiter", "gemischt"]
      },
      { tr: "Wenn wir früher gebucht hätten, hätten wir viel weniger bezahlt." },
      { tr: "An deiner Stelle würde ich noch etwas darüber nachdenken." }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Grammatik",
    title: "Umgangssprachliche und förmliche Varianten",
    objectives: [
      "den umgangssprachlichen Bedingungssatz mit doppeltem Imperfekt erkennen",
      "qualora und nel caso in cui verwenden",
      "das Register auf die Situation abstimmen"
    ],
    theory: [
      {
        h: "Das doppelte Imperfekt im Gespräch",
        p: "<em>Se lo sapevo, non venivo.</em> Im Gespräch ersetzen Italiener den Typ 3 sehr oft durch ein doppeltes Imperfekt. Es ist verbreitet und im Mündlichen akzeptiert, <b>nicht aber im Schriftlichen</b> und nicht in einer Prüfung. Dein umgangssprachliches „wenn ich das gewusst hätte, wär ich nicht gekommen\" bleibt dagegen grammatisch korrekt: hier ist die italienische Kurzform wirklich eine andere Konstruktion, keine bloße Verkürzung."
      },
      {
        h: "Die förmlichen Varianten",
        p: "<em><b>Qualora</b> il pagamento non pervenisse entro…</em> ist typisch für Verträge und Amtsbriefe, immer mit dem congiuntivo. Das ist dein „sollte die Zahlung nicht bis … eingehen\" oder das behördliche „im Falle einer nicht fristgerechten Zahlung\". <em><b>Nel caso in cui</b></em> funktioniert genauso. <em><b>Ove</b></em> ist noch buchsprachlicher."
      },
      {
        h: "Eine Bedingung ohne se",
        list: [
          "Gerundium: <em>Studiando di più, passeresti l'esame.</em>",
          "Imperativ + e: <em>Chiedi e ti sarà dato.</em>",
          "<em>a + Infinitiv</em>: <em>A pensarci bene, hai ragione.</em>",
          "<em>senza</em>: <em>Senza il tuo aiuto non ce l'avrei fatta.</em>"
        ]
      },
      {
        tip: "<em>Magari</em> plus congiuntivo imperfetto drückt den Wunsch für sich allein aus, ohne Hauptsatz: <em>Magari fosse così semplice!</em>, dein „wäre es doch so einfach!\"."
      }
    ],
    grammar: {
      title: "Die Varianten",
      table: {
        head: ["Register", "Konstruktion", "Beispiel"],
        rows: [
          ["umgangssprachlich", "imperfetto + imperfetto", "Se lo sapevo, non venivo."],
          ["Standard", "cong. trapassato + cond. passato", "Se l'avessi saputo, non sarei venuto."],
          ["förmlich", "qualora + congiuntivo", "Qualora fosse necessario, provvederemo."],
          ["förmlich", "nel caso in cui", "Nel caso in cui non arrivasse…"],
          ["ohne se", "Gerundium", "Studiando di più, passeresti."],
          ["ohne se", "senza + Nomen", "Senza di te non ce l'avrei fatta."]
        ]
      },
      examples: [
        { tr: "Sollte die Bestätigung nicht eingehen, storniere ich die Buchung." },
        { tr: "Wenn es regnet, treffen wir uns in der Bar." },
        { tr: "Wenn man wollte, ließe es sich auch morgen machen." },
        { tr: "Hätte ich das gewusst, wäre ich zu Hause geblieben.", note: "umgangssprachlich" },
        { tr: "Wäre es doch so einfach!" },
        { tr: "Hätte ich es früher gewusst, hätte ich es anders gemacht." }
      ]
    },
    vocab: [
      "sollte, falls (förmlich)",
      "für den Fall dass",
      "wofern (sehr förmlich)",
      "veranlassen, sich kümmern",
      "stornieren",
      "Bestätigung",
      "wenn man wollte",
      "hätte man es gewusst",
      "anders",
      "andernfalls",
      "Register",
      "nicht ratsam"
    ],
    exercises: [
      {
        q: "„Se lo sapevo, non venivo\" ist eine Konstruktion, die:",
        opts: ["schriftlich korrekt ist", "umgangssprachlich ist, mündlich in Ordnung, schriftlich nicht ratsam", "immer falsch ist"]
      },
      { q: "Ergänze: „Qualora ___ necessario, provvederemo.\" (essere)" },
      { q: "Ergänze: „Nel caso in cui ___, ci vediamo al bar.\" (piovere)" },
      {
        q: "„Volendo, si può fare domani\" bedeutet:",
        opts: ["Wollend wird es morgen gemacht", "Wenn man wollte, ließe es sich morgen machen", "Man will es morgen tun"]
      },
      { q: "Schreib es im Standardregister.", tr: "Hätte ich es gewusst, wäre ich nicht gekommen." },
      { q: "„Wenn es regnet, treffen wir uns in der Bar.\"" },
      { q: "Ordne zu.", pairs: ["sollte (förmlich)", "veranlassen", "stornieren", "andernfalls"] },
      { tr: "Ohne deine Hilfe hätte ich es nicht geschafft." },
      { tr: "Sollte die Bestätigung nicht bis Freitag eintreffen, stornieren wir die Buchung." },
      { tr: "Wäre es doch so einfach, wie du sagst." }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Kommunikation",
    title: "Bedauern, Vorwurf, Hypothese",
    objectives: [
      "Bedauern über die Vergangenheit ausdrücken",
      "einen Vorwurf ohne Schärfe formulieren",
      "ein hypothetisches Gespräch führen"
    ],
    theory: [
      {
        h: "Das Bedauern ist der dritte Typ",
        p: "<em>Avrei dovuto ascoltarti.</em> („Ich hätte auf dich hören sollen.\") Der condizionale passato von <em>dovere</em> und <em>potere</em> ist die übliche italienische Art, Bedauern und Selbstkritik auszudrücken — genau dein „ich hätte sollen\" und „ich hätte können\"."
      },
      {
        h: "Ein abgemilderter Vorwurf",
        p: "<em>Avresti potuto dirmelo.</em> („Du hättest es mir sagen können.\") klingt weicher als <em>perché non me l'hai detto?</em>. Der Konditional der Vergangenheit nimmt die Schärfe und lässt den Inhalt stehen, wie im Deutschen."
      },
      {
        h: "Wendungen des Bedauerns",
        list: [
          "<em>Se solo avessi…</em> — wenn ich nur… hätte",
          "<em>Non avrei mai dovuto…</em> — ich hätte nie… sollen",
          "<em>Con il senno di poi…</em> — im Nachhinein…",
          "<em>Mi pento di…</em> — ich bereue, dass…"
        ]
      },
      {
        tip: "<em>Meno male che…</em> („zum Glück…\") ist das Gegenteil des Bedauerns und eine sehr häufige Satzeröffnung: <em>Meno male che sei arrivato.</em>"
      }
    ],
    grammar: {
      title: "Bedauern und Vorwurf",
      table: {
        head: ["Funktion", "Konstruktion", "Beispiel"],
        rows: [
          ["Bedauern", "avrei dovuto + Infinitiv", "Avrei dovuto ascoltarti."],
          ["verpasste Gelegenheit", "avrei potuto + Infinitiv", "Avrei potuto accettare."],
          ["Vorwurf", "avresti potuto + Infinitiv", "Avresti potuto avvisarmi."],
          ["wenn nur", "se solo + cong. trapassato", "Se solo avessi saputo!"],
          ["Erleichterung", "meno male che + Indikativ", "Meno male che sei qui."],
          ["Reue", "mi pento di + Infinitiv", "Mi pento di aver detto quello."]
        ]
      },
      examples: [
        { tr: "Ich hätte dieses Angebot annehmen sollen." },
        { tr: "Du hättest es mir früher sagen können." },
        { tr: "Wenn ich nur auf meine Mutter gehört hätte!" },
        { tr: "Im Nachhinein war es ein Fehler." },
        { tr: "Zum Glück habe ich nicht unterschrieben." },
        { tr: "Ich bereue es kein bisschen." }
      ]
    },
    vocab: [
      "ich hätte sollen",
      "ich hätte können",
      "wenn nur",
      "im Nachhinein",
      "bereuen",
      "zum Glück, dass",
      "glücklicherweise",
      "eine verpasste Gelegenheit",
      "merken, begreifen",
      "zugeben",
      "eine Fehleinschätzung",
      "mit der Zeit"
    ],
    exercises: [
      { q: "Ergänze: „___ dovuto ascoltarti.\" (ich hätte sollen)" },
      { q: "Ergänze: „___ potuto avvisarmi.\" (du hättest können)" },
      {
        q: "Welcher Satz liest sich als sanfter Vorwurf und nicht als Anschuldigung?",
        opts: ["Perché non me l'hai detto?", "Avresti potuto dirmelo.", "Dovevi dirmelo!"]
      },
      { q: "Ergänze das Bedauern.", tr: "Wenn ich es nur früher gewusst hätte, hätte ich diesen Vertrag nicht unterschrieben." },
      { q: "„Im Nachhinein war es ein Fehler.\"" },
      { q: "Ordne zu.", pairs: ["zum Glück, dass", "bereuen", "wenn nur", "eine verpasste Gelegenheit"] },
      {
        q: "„Non me ne pento affatto\" bedeutet:",
        opts: ["Ich bereue es ein wenig", "Ich bereue es überhaupt nicht", "Ich werde es bereuen"]
      },
      { tr: "Ich hätte dieses Angebot annehmen sollen." },
      { tr: "Im Nachhinein hätte ich andere Entscheidungen getroffen." },
      { tr: "Du hättest es mir früher sagen können, ich hätte meine Pläne geändert." }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Test",
    title: "Test zu Einheit 2",
    objectives: ["die drei Typen des Bedingungssatzes und die Sprache des Bedauerns prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Se ___ tempo, verrei.\"", opts: ["ho", "avrei", "avessi"] },
      { q: "„Se avessi studiato, ___ l'esame.\"", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Typ 2.", tr: "An deiner Stelle würde ich es nicht tun." },
      { q: "Typ 3.", tr: "Wenn wir früher gebucht hätten, hätten wir weniger bezahlt." },
      { q: "„Qualora ___ necessario, provvederemo.\"" },
      { q: "„___ dovuto ascoltarti.\"" },
      { q: "„___ potuto avvisarmi.\"" },
      { q: "Der falsche Satz:", opts: ["Se avessi tempo…", "Se avrei tempo…", "Se ho tempo…"] },
      { tr: "Wenn ich es nur gewusst hätte, hätte ich diesen Vertrag nicht unterschrieben." },
      { tr: "An deiner Stelle würde ich es mir zweimal überlegen." }
    ]
  },
  "unit:b2-u03": {
    title: "Das Passiv und das passato remoto",
    grammarNote: "essere/venire/andare + Partizip · passato remoto"
  },
  "lesson:b2-u03-l1": {
    theme: "Grammatik",
    title: "Vier Wege, ein Passiv zu bauen",
    objectives: [
      "das Passiv mit essere und mit venire bilden",
      "andare + Partizip als Verpflichtung verstehen",
      "das si passivante im Gespräch verwenden"
    ],
    theory: [
      {
        h: "Essere: die Grundform",
        p: "<em>La lettera <b>è stata scritta</b> da Marco.</em> Es funktioniert in allen Zeiten. Das Partizip gleicht sich dem Subjekt an, der Urheber wird mit <em>da</em> eingeführt."
      },
      {
        h: "Venire: nur einfache Zeiten, Betonung des Vorgangs",
        p: "<em>La legge <b>viene approvata</b> ogni anno.</em> „È venuta approvata\" geht nicht: <em>venire</em> bildet in zusammengesetzten Zeiten kein Passiv. Es betont die Wiederholung und den Vorgang selbst."
      },
      {
        contrast: "Diese Unterscheidung ist deine, nur mit anderen Verben: <em>venire</em> entspricht dem Werden-Passiv („das Gesetz <b>wird</b> verabschiedet\", Vorgang), <em>essere</em> deckt daneben das Zustandspassiv ab („die Tür <b>ist</b> geschlossen\"). Wo ein englischsprachiger Lernender zwei Formen für eine hat, erkennst du eine vertraute Zweiteilung wieder — und musst nur die Einschränkung dazulernen, dass <em>venire</em> in zusammengesetzten Zeiten ausfällt."
      },
      {
        h: "Andare: ein Passiv, das eine Verpflichtung trägt",
        p: "<em>Il modulo <b>va compilato</b> in stampatello.</em> Das ist kein gewöhnliches Passiv: der Satz heißt „das Formular <b>muss</b> in Druckbuchstaben ausgefüllt werden\". Dein genaues Gegenstück ist das Gerundivum „das Formular <b>ist auszufüllen</b>\", das dieselbe Verpflichtung ohne Modalverb trägt und ebenso amtlich klingt."
      },
      {
        h: "Si passivante: die gesprochene Fassung",
        p: "<em>Qui <b>si vendono</b> panini.</em> Im Gespräch die häufigste, weil sie leichter ist. Das Verb gleicht sich der Sache an, nicht dem ungenannten Urheber."
      }
    ],
    grammar: {
      title: "Vier Passivformen",
      table: {
        head: ["Form", "Beispiel", "Bedeutung"],
        rows: [
          ["essere", "La casa è stata venduta.", "das Haus wurde verkauft"],
          ["venire", "La casa viene venduta ogni anno.", "das Haus wird verkauft (Vorgang)"],
          ["andare", "La casa va venduta subito.", "das Haus ist zu verkaufen"],
          ["si passivante", "Qui si vendono case.", "hier werden Häuser verkauft"],
          ["der Urheber", "…da un'agenzia", "…von einer Agentur"],
          ["nur transitiv", "—", "ein Passiv braucht ein direktes Objekt"]
        ]
      },
      examples: [
        { tr: "Das Projekt wurde letzte Woche genehmigt." },
        { tr: "Die Anträge werden innerhalb von dreißig Tagen geprüft." },
        { tr: "Das Formular ist auf jeder Seite zu unterschreiben." },
        { tr: "In diesem Büro werden drei Sprachen gesprochen." },
        { tr: "Die Besprechung wurde vom Direktor verschoben." },
        { tr: "Diese Fehler sind zu vermeiden." }
      ]
    },
    vocab: [
      "genehmigen",
      "prüfen, bewerten",
      "ablehnen",
      "verschieben",
      "ausfüllen",
      "beifügen",
      "vermeiden",
      "einreichen, abgeben",
      "innerhalb von dreißig Tagen",
      "Frist",
      "Antrag",
      "Ergebnis"
    ],
    exercises: [
      {
        q: "„Il modulo va compilato\" bedeutet:",
        opts: ["Das Formular geht ausgefüllt", "Das Formular muss ausgefüllt werden", "Das Formular wurde ausgefüllt"]
      },
      {
        q: "Welche Form funktioniert in zusammengesetzten Zeiten NICHT?",
        opts: ["essere + Partizip", "venire + Partizip", "si passivante"]
      },
      {
        q: "Setz ins Passiv: „Marco ha scritto la lettera.\" → „La lettera ___ stata scritta da Marco.\""
      },
      { q: "Ergänze: „Le domande ___ valutate entro trenta giorni.\" (venire)" },
      { q: "Ergänze: „Questi errori ___ evitati.\" (sind zu vermeiden)" },
      {
        q: "Ergänze die Passivformen.",
        tr: "Das Projekt wurde gestern genehmigt, aber das Formular ist noch zu unterschreiben."
      },
      { q: "„Die Besprechung wurde vom Direktor verschoben.\"" },
      {
        q: "„Qui si vendono panini\" — warum „vendono\"?",
        opts: [
          "Das ist ein Fehler",
          "Das si passivante gleicht sich der Sache im Plural an",
          "Weil es mehrere Verkäufer gibt"
        ]
      },
      { tr: "Die Anträge sind bis zum fünfzehnten des Monats einzureichen." },
      { tr: "Das Dokument wurde genehmigt und ist bis Freitag zu unterschreiben." }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Grammatik",
    title: "Die erzählende Vergangenheit",
    objectives: [
      "das passato remoto bilden",
      "das 1-3-3-Muster bei den unregelmäßigen Verben erkennen",
      "wissen, wann und wo es verwendet wird"
    ],
    theory: [
      {
        h: "Wann es verwendet wird",
        p: "In der literarischen und historischen Erzählung (<em>Dante <b>nacque</b> nel 1265</em>), für ferne, abgeschlossene Ereignisse ohne Bezug zur Gegenwart. Im <b>Süden Italiens</b> dient es außerdem der Alltagssprache, sogar für gestern; im Norden kommt es kaum vor."
      },
      {
        contrast: "Die Zweiteilung kennst du, aber spiegelverkehrt: bei dir spricht der <b>Norden</b> das Präteritum („ich ging\") und der Süden greift zum Perfekt, in Italien ist es der <b>Süden</b>, der die einfache Vergangenheit spricht. Und die Erzählform deines Romans („Dante wurde geboren\") ist genau das, wofür das passato remoto da ist. Vorsicht nur bei der Gleichsetzung: dein Präteritum deckt auch das ab, was im Italienischen das imperfetto ist."
      },
      {
        h: "Die regelmäßigen Formen",
        p: "<em>-are</em>: ai, asti, ò, ammo, aste, arono. <em>-ere</em>: ei (oder etti), esti, é (oder ette), emmo, este, erono (oder ettero). <em>-ire</em>: ii, isti, ì, immo, iste, irono."
      },
      {
        h: "Das 1-3-3-Muster",
        p: "Die meisten unregelmäßigen <em>-ere</em>-Verben sind es <b>nur in drei Personen</b>: erste Person Singular, dritte Singular und dritte Plural. Der Rest ist regelmäßig. <em>prendere → <b>presi</b>, prendesti, <b>prese</b>, prendemmo, prendeste, <b>presero</b></em>. Deine starken Verben wechseln den Stamm im ganzen Präteritum (ich nahm, du nahmst, er nahm), das Italienische verlangt also das Umgekehrte: sich zu merken, wo der Stamm <b>nicht</b> wechselt."
      }
    ],
    grammar: {
      title: "Passato remoto",
      table: {
        head: ["Verb", "io", "tu", "lui/lei", "loro"],
        rows: [
          ["parlare", "parlai", "parlasti", "parlò", "parlarono"],
          ["credere", "credei", "credesti", "credé", "crederono"],
          ["dormire", "dormii", "dormisti", "dormì", "dormirono"],
          ["essere", "fui", "fosti", "fu", "furono"],
          ["avere", "ebbi", "avesti", "ebbe", "ebbero"],
          ["fare", "feci", "facesti", "fece", "fecero"],
          ["prendere", "presi", "prendesti", "prese", "presero"],
          ["dire", "dissi", "dicesti", "disse", "dissero"]
        ]
      },
      examples: [
        { tr: "Dante wurde 1265 in Florenz geboren." },
        { tr: "Italien wurde 1946 eine Republik." },
        { tr: "Er verließ das Haus und kam nie zurück." },
        { tr: "Da verstand ich alles." },
        { tr: "Er schrieb den Roman in zwei Jahren." },
        { tr: "Kaum hatte er fertig, ging er.", note: "trapassato remoto" }
      ]
    },
    vocab: [
      "geboren werden",
      "sterben",
      "werden",
      "schreiben",
      "leben",
      "sehen",
      "erfahren",
      "beschließen, wollen",
      "Roman",
      "Jahrhundert",
      "Epoche",
      "Abfolge der Ereignisse"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Was ist das 1-3-3-Muster?",
        opts: [
          "Dass drei Verben unregelmäßig sind",
          "Dass nur io, lui/lei und loro unregelmäßig sind",
          "Dass alle Formen unregelmäßig sind"
        ]
      },
      { q: "Passato remoto von „prendere\", Form loro: ___" },
      { q: "Passato remoto von „dire\", Form lui: ___" },
      {
        q: "Wo wird das passato remoto auch in der Alltagssprache verwendet?",
        opts: ["Im Norden Italiens", "Im Süden Italiens", "Nirgends"]
      },
      { q: "Ergänze die Erzählung.", tr: "Dante wurde 1265 geboren und starb 1321." },
      { q: "„Italien wurde 1946 eine Republik.\"" },
      { tr: "An jenem Abend verließ er das Haus und kam nie zurück." },
      { tr: "Da begriff ich, dass ich mich geirrt hatte." }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Grammatik",
    title: "Die verkürzten Nebensätze",
    objectives: [
      "einen Nebensatz durch einen Infinitiv oder ein Gerundium ersetzen",
      "den zusammengesetzten Infinitiv und das zusammengesetzte Gerundium verwenden",
      "knapper schreiben"
    ],
    theory: [
      {
        h: "Warum verkürzen",
        p: "Ein impliziter Nebensatz (ohne eigenes Subjekt und ohne Konjunktion) verkürzt den Text und hebt das Register. <em>Dopo che ho finito, sono uscito</em> → <em><b>Dopo aver finito</b>, sono uscito.</em> Es ist eines der Merkmale, die einen B2-Text von einem B1-Text trennen."
      },
      {
        contrast: "Das ist die schwerste Lektion des Kapitels für dich, weil Deutsch fast nichts davon hat. Für <em>dopo aver mangiato</em> nimmst du entweder einen vollen Nebensatz („nachdem ich gegessen hatte\") oder eine Nominalisierung („nach dem Essen\"); ein Gerundium wie <em>tornando a casa</em> existiert gar nicht, und der absolute Partizipialsatz <em>finita la riunione</em> klingt bei dir literarisch. Hier gibt es keine Entsprechung zu finden, sondern Konstruktionen zu bauen."
      },
      {
        h: "Das Repertoire",
        list: [
          "<em>dopo + zusammengesetzter Infinitiv</em>: <em>dopo aver mangiato</em>, <em>dopo essere uscito</em>",
          "<em>prima di + Infinitiv</em>: <em>prima di partire</em>",
          "<em>Gerundium</em> (Grund, Art, Zeit): <em>tornando a casa, ho incontrato…</em>",
          "<em>zusammengesetztes Gerundium</em>: <em>avendo finito, sono uscito</em>",
          "<em>Partizip</em>: <em>finita la riunione, sono uscito</em>"
        ]
      },
      {
        trap: "<em>Dopo</em> nimmt immer den <b>zusammengesetzten Infinitiv</b>: <em>dopo aver mangiato</em>, nie „dopo mangiare\". Die Bedingung dafür ist, dass beide Sätze dasselbe <b>Subjekt</b> haben: <em>Essendo stanco, sono rimasto a casa</em> geht, bei verschiedenen Subjekten muss der volle Nebensatz her."
      }
    ],
    grammar: {
      title: "Die verkürzten Formen",
      table: {
        head: ["voller Nebensatz", "verkürzt", "Typ"],
        rows: [
          ["Dopo che ho mangiato…", "Dopo aver mangiato…", "zusammengesetzter Infinitiv"],
          ["Prima che io parta…", "Prima di partire…", "Infinitiv"],
          ["Mentre tornavo a casa…", "Tornando a casa…", "Gerundium"],
          ["Poiché ero stanco…", "Essendo stanco…", "Gerundium"],
          ["Dopo che ebbi finito…", "Avendo finito…", "zusammengesetztes Gerundium"],
          ["Quando la riunione finì…", "Finita la riunione…", "Partizip"]
        ]
      },
      examples: [
        { tr: "Nachdem ich den Vertrag gelesen hatte, unterschrieb ich." },
        { tr: "Bevor ich antwortete, habe ich es mir gut überlegt." },
        { tr: "Auf dem Heimweg traf ich Giulia." },
        { tr: "Da ich spät dran war, nahm ich ein Taxi." },
        { tr: "Da ich den Film schon gesehen hatte, blieb ich zu Hause." },
        { tr: "Nach Abschluss der Arbeit gingen wir alle." }
      ]
    },
    vocab: [
      "nachdem man (getan) hat",
      "bevor man (tut)",
      "da man ist",
      "da man (getan) hat",
      "obwohl + Gerundium",
      "sobald (getan)",
      "es sich überlegen",
      "schließen, folgern",
      "knapp",
      "Schriftregister",
      "flüssig, lesbar",
      "den Stil beschweren"
    ],
    exercises: [
      {
        q: "Welche ist richtig?",
        opts: [
          "Dopo mangiare, sono uscito.",
          "Dopo aver mangiato, sono uscito.",
          "Dopo mangiato, sono uscito."
        ]
      },
      { q: "Verkürze: „Dopo che ho letto il contratto\" → „Dopo ___ letto il contratto\"" },
      { q: "Verkürze: „Mentre tornavo a casa\" → „___ a casa\"" },
      { q: "Verkürze: „Poiché ero stanco\" → „___ stanco\"" },
      {
        q: "Eine verkürzte Form verlangt:",
        opts: ["dieselbe Zeit", "dasselbe Subjekt in beiden Sätzen", "dass keine Verneinung vorkommt"]
      },
      {
        q: "Verkürze die Sätze.",
        tr: "Nachdem ich den Vertrag gelesen hatte, unterschrieb ich. Bevor ich antwortete, überlegte ich es mir."
      },
      { q: "„Auf dem Heimweg traf ich Giulia.\"" },
      { tr: "Nach Abschluss der Arbeit gingen wir alle." },
      { tr: "Da ich diesen Film schon gesehen hatte, blieb ich lieber zu Hause." },
      { tr: "Bevor ich unterschreibe, würde ich den Vertrag gern noch einmal lesen." }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Test",
    title: "Test zu Einheit 3",
    objectives: ["das Passiv, das passato remoto und die verkürzten Nebensätze prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      {
        q: "„Il modulo va compilato\" bedeutet:",
        opts: ["es geht ausgefüllt", "es muss ausgefüllt werden", "es wurde ausgefüllt"]
      },
      { q: "„La lettera ___ stata scritta da Marco.\"" },
      { q: "„Le domande ___ valutate ogni mese.\" (venire)" },
      {  },
      { q: "Passato remoto von „prendere\", io: ___" },
      { q: "Richtig:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "„Mentre tornavo\" → „___\" (Gerundium)" },
      { q: "„Die Anträge sind bis Freitag einzureichen.\"" },
      { tr: "Das Projekt wurde 1998 genehmigt und in drei Jahren umgesetzt." },
      { tr: "Nachdem ich den Vertrag gelesen hatte, beschloss ich, nicht zu unterschreiben." }
    ]
  },
  "unit:b2-u04": {
    title: "Gesellschaft und Debatte",
    grammarNote: "abstrakter Wortschatz · Argumentation · Register"
  },
  "lesson:b2-u04-l1": {
    theme: "Gesellschaft",
    title: "Die Wirtschaft und der Arbeitsmarkt",
    objectives: [
      "die wichtigsten Wirtschaftsbegriffe der Presse verstehen",
      "über den Arbeitsmarkt sprechen",
      "die Nominalisierungen dieses Registers verwenden"
    ],
    theory: [
      {
        h: "Der Wortschatz des Wirtschaftsteils",
        p: "Wirtschaftstexte ruhen auf einem engen, sich wiederholenden Wortvorrat. Beherrsch hundert davon, und die meisten Artikel öffnen sich: <em>il PIL</em> (das BIP), <em>l'inflazione</em>, <em>il debito pubblico</em>, <em>la disoccupazione</em>, <em>il potere d'acquisto</em>, <em>la produttività</em>."
      },
      {
        h: "Charakteristische Strukturen",
        list: [
          "Nominalisierung: <em>la crescita dei prezzi</em> statt „die Preise steigen\"",
          "Passiv: <em>è stato approvato il decreto</em>",
          "Veränderungsausdrücke: <em>in aumento, in calo, stabile, in ripresa</em>",
          "Vergleiche: <em>rispetto allo scorso anno, su base annua</em>"
        ]
      },
      {
        h: "Wie der italienische Arbeitsmarkt wirklich aussieht",
        p: "<em>Il precariato</em> (prekäre Beschäftigung), <em>i contratti a termine</em>, <em>la fuga di cervelli</em>, <em>i NEET</em>, <em>il divario Nord-Sud</em>: sie kehren in jeder öffentlichen Debatte wieder. Das Nord-Süd-Gefälle hat bei dir ein genaues Gegenstück im Ost-West-Gefälle, bis hin zur Struktur der Debatte über Abwanderung und Löhne."
      },
      {
        tip: "<em>Il cuneo fiscale</em> (der Abstand zwischen dem, was der Betrieb zahlt, und dem, was ankommt) ist einer der meistwiederholten Begriffe der italienischen Wirtschaftsdebatte. Es ist dein Steuer- und Abgabenkeil, und er taucht in jeder Diskussion über Löhne auf."
      }
    ],
    grammar: {
      title: "Wirtschaftswortschatz",
      table: {
        head: ["Italienisch", "Deutsch", "Kontext"],
        rows: [
          ["il PIL", "das BIP", "Makroökonomie"],
          ["l'inflazione", "die Inflation", "Preise"],
          ["la disoccupazione", "die Arbeitslosigkeit", "Arbeitsmarkt"],
          ["il potere d'acquisto", "die Kaufkraft", "Löhne"],
          ["il precariato", "prekäre Beschäftigung", "Arbeit"],
          ["la fuga di cervelli", "die Abwanderung von Fachkräften", "Auswanderung"],
          ["in calo / in aumento", "rückläufig / steigend", "Zahlen"]
        ]
      },
      examples: [
        { tr: "Die Inflation ist gegenüber dem Vorjahr rückläufig." },
        { tr: "Die Jugendarbeitslosigkeit bleibt ein strukturelles Problem." },
        { tr: "Die Kaufkraft der Haushalte ist gesunken." },
        { tr: "Viele junge Hochschulabsolventen verlassen das Land." },
        { tr: "Das Gefälle zwischen Norden und Süden hat sich vergrößert." },
        { tr: "Das Dekret wurde mit Änderungen verabschiedet." }
      ]
    },
    vocab: [
      "BIP",
      "Inflation",
      "Staatsverschuldung",
      "Arbeitslosigkeit",
      "Kaufkraft",
      "prekäre Beschäftigung",
      "Abwanderung von Fachkräften",
      "Gefälle, Kluft",
      "Wachstum",
      "Erholung",
      "Dekret",
      "im Jahresvergleich"
    ],
    exercises: [
      { q: "Ordne zu.", pairs: ["BIP", "Inflation", "Arbeitslosigkeit", "Gefälle"] },
      { q: "„La fuga di cervelli\" ist:", opts: ["ein Gefängnisausbruch", "die Abwanderung von Fachkräften", "Gedächtnisverlust"] },
      { q: "Ergänze: „L'inflazione è in ___ rispetto allo scorso anno.\" (rückläufig)" },
      { q: "Ergänze die Nominalisierung: „i prezzi crescono\" → „la ___ dei prezzi\"" },
      {
        q: "„Il precariato\" bedeutet:",
        opts: ["feste Beschäftigung", "prekäre Arbeit mit kurzen Verträgen", "der Ruhestand"]
      },
      { q: "Ergänze.", tr: "Die Kaufkraft ist gesunken und die Jugendarbeitslosigkeit bleibt hoch." },
      { q: "„Das Dekret wurde mit Änderungen verabschiedet.\"" },
      { tr: "Das Gefälle zwischen Norden und Süden hat sich vergrößert." },
      { tr: "Im Jahresvergleich wuchs das BIP um null Komma sieben Prozent." },
      { tr: "Die Jugendarbeitslosigkeit bleibt ein strukturelles Problem." }
    ]
  },
  "lesson:b2-u04-l2": {
    theme: "Gesellschaft",
    title: "Umwelt und Technologie",
    objectives: [
      "über Klimawandel und Technologie sprechen",
      "Sorge und Hoffnung ausdrücken",
      "die Argumente dafür und dagegen ordnen"
    ],
    theory: [
      {
        h: "Zwei Felder, eine Debattenform",
        p: "Klima und Technologie werden im Italienischen beide im Rahmen <em>rischi / opportunità</em> verhandelt. Das Gerüst sollte bereitliegen: <em>Da un lato ci sono rischi evidenti…, dall'altro le opportunità…</em>"
      },
      {
        h: "Sorge und Hoffnung",
        list: [
          "Sorge: <em>temo che…</em>, <em>c'è il rischio che…</em>, <em>mi preoccupa il fatto che…</em> (congiuntivo)",
          "Hoffnung: <em>spero che…</em>, <em>confido nel fatto che…</em>, <em>sono ottimista sul…</em>",
          "Vorsicht: <em>bisogna vedere se…</em>, <em>dipenderà da…</em>"
        ]
      },
      {
        h: "Der Wortschatz, der immer wiederkehrt",
        p: "<em>la transizione ecologica</em> (deine Energiewende, nur breiter gefasst), <em>le energie rinnovabili</em>, <em>l'impronta di carbonio</em>, <em>la raccolta differenziata</em>, <em>l'intelligenza artificiale</em>, <em>la privacy</em>, <em>la disinformazione</em>, <em>l'automazione</em>."
      },
      {
        tip: "<em>Il fatto che</em> zieht immer das congiuntivo: <em>Il fatto che <b>sia</b> difficile non significa che sia impossibile.</em> Deine „Tatsache, dass\" steht dagegen im Indikativ, also ist das eine Stelle, an der du bewusst umschalten musst."
      }
    ],
    grammar: {
      title: "Debatte: dafür und dagegen",
      table: {
        head: ["Funktion", "Wendung", "Modus"],
        rows: [
          ["Sorge", "Temo che / C'è il rischio che", "congiuntivo"],
          ["eine Tatsache als Subjekt", "Il fatto che…", "congiuntivo"],
          ["Hoffnung", "Spero che / Confido che", "congiuntivo"],
          ["Vorbehalt", "Bisogna vedere se…", "Indikativ"],
          ["Abhängigkeit", "Dipenderà da…", "Indikativ"],
          ["Gegensatz", "Da un lato… dall'altro…", "—"]
        ]
      },
      examples: [
        { tr: "Ich fürchte, die Wende dauert zu lange." },
        { tr: "Dass es schwierig ist, heißt nicht, dass es unmöglich ist." },
        { tr: "Es besteht das Risiko, dass die Automatisierung Arbeitsplätze abbaut." },
        { tr: "Erneuerbare decken schon einen erheblichen Teil." },
        { tr: "Man muss sehen, ob die Regeln angewendet werden." },
        { tr: "Ich bin vorsichtig optimistisch." }
      ]
    },
    vocab: [
      "die ökologische Wende",
      "erneuerbare Energien",
      "CO2-Fußabdruck",
      "Mülltrennung",
      "Abfall",
      "künstliche Intelligenz",
      "Automatisierung",
      "Desinformation",
      "Risiko",
      "Chance",
      "nachhaltig",
      "vorsichtig"
    ],
    exercises: [
      { q: "Ergänze: „Il fatto che ___ difficile non significa che sia impossibile.\" (essere)" },
      { q: "Ergänze: „C'è il rischio che l'automazione ___ i posti di lavoro.\" (ridurre)" },
      { q: "Ordne zu.", pairs: ["CO2-Fußabdruck", "Mülltrennung", "Abfall", "nachhaltig"] },
      { q: "Nach „il fatto che\" steht:", opts: ["der Indikativ", "das congiuntivo", "der Infinitiv"] },
      {
        q: "„Bisogna vedere se le norme verranno applicate\" drückt aus:",
        opts: ["Gewissheit", "einen vorsichtigen Vorbehalt", "Sorge"]
      },
      {
        q: "Ergänze den Redebeitrag.",
        tr: "Einerseits gibt es offensichtliche Risiken, andererseits sind die Chancen real."
      },
      { q: "„Ich fürchte, es dauert zu lange.\"" },
      { tr: "Ich bin vorsichtig optimistisch, was die Zukunft angeht." },
      { tr: "Dass die Technologie voranschreitet, löst das Problem nicht von allein." },
      { tr: "Es besteht das Risiko, dass die Wende zu langsam verläuft." }
    ]
  },
  "lesson:b2-u04-l3": {
    theme: "Kommunikation",
    title: "Eine Position verteidigen",
    objectives: ["eine ausgebaute Argumentation aufbauen", "auf ein Gegenargument antworten", "eine Debatte mit einem Schluss beenden"],
    theory: [
      {
        h: "Drei Züge, die eine Argumentation tragen",
        list: [
          "<b>Zugeständnis</b>: gib der Gegenseite den Punkt — <em>È vero che…</em>",
          "<b>die Wendung</b>: nimm ihm das Gewicht — <em>Tuttavia / Va però considerato che…</em>",
          "<b>Beleg</b>: stütz es mit Zahlen oder einem Beispiel — <em>I dati mostrano che…</em>"
        ]
      },
      {
        h: "Auf ein Gegenargument antworten",
        p: "<em>Non credo che questo argomento regga</em>, <em>Mi sembra una generalizzazione</em>, <em>Questo vale in alcuni casi, non in tutti</em>, <em>Dipende da come si misura</em>. Alle greifen das Argument an, nicht die Person."
      },
      {
        h: "Der Ton einer italienischen Debatte",
        p: "Die italienische Debatte kann laut sein und voller Unterbrechungen, wird aber selten persönlich. Die Formel <em>con tutto il rispetto, non sono d'accordo</em> ist eine völlig akzeptable Art, einen Widerspruch zu eröffnen, und Dazwischenreden liest sich als Anteilnahme, nicht als Unhöflichkeit. Für dich ist das die eigentliche Umstellung: in einer deutschen Diskussion gilt Ausredenlassen als Grundregel, hier signalisiert es Desinteresse."
      },
      {
        tip: "<em>Il punto è che…</em> („der Punkt ist, dass…\") ist die wirksamste Art, eine Diskussion zum Kern zurückzuholen, wenn sie abzudriften beginnt."
      }
    ],
    grammar: {
      title: "Fortgeschrittene Argumentation",
      table: {
        head: ["Zug", "Formel", "auf Deutsch"],
        rows: [
          ["Zugeständnis", "È vero che… / Concordo sul fatto che…", "Es stimmt, dass…"],
          ["Wendung", "Va però considerato che…", "Zu bedenken ist allerdings, dass…"],
          ["Beleg", "I dati mostrano che…", "Die Zahlen zeigen, dass…"],
          ["Entkräftung", "Mi sembra una generalizzazione.", "Das scheint mir eine Verallgemeinerung."],
          ["der Kern", "Il punto è che…", "Der Punkt ist, dass…"],
          ["Schluss", "Alla luce di quanto detto…", "Angesichts des Gesagten…"]
        ]
      },
      examples: [
        {
          tr: "Es stimmt, dass die Kosten hoch sind, aber die langfristigen Einsparungen sind zu bedenken."
        },
        { tr: "Die Zahlen zeigen den umgekehrten Trend." },
        { tr: "Das gilt in manchen Fällen, nicht als allgemeine Regel." },
        { tr: "Der Punkt ist, dass wir keine realistischen Alternativen haben." },
        { tr: "Bei allem Respekt, ich bin anderer Meinung." },
        { tr: "Angesichts des Gesagten schlage ich vor, den Plan zu überarbeiten." }
      ]
    },
    vocab: [
      "argumentieren",
      "Verallgemeinerung",
      "tragen (ein Argument)",
      "entkräften",
      "Gegenargument",
      "übereinstimmen in",
      "angesichts",
      "langfristig",
      "der Punkt ist, dass",
      "bei allem Respekt",
      "überarbeiten",
      "Trend"
    ],
    exercises: [
      { q: "Ordne zu.", pairs: ["entkräften", "tragen", "angesichts", "Verallgemeinerung"] },
      {
        q: "Welcher Zug stärkt eine Argumentation am meisten?",
        opts: [
          "Die eigene These zu wiederholen",
          "Der Gegenseite den Punkt zu geben, bevor man ihm das Gewicht nimmt",
          "Lauter zu werden"
        ]
      },
      { q: "Ergänze: „Va però ___ che i costi si ammortizzano.\" (zu bedenken)" },
      { q: "Ergänze: „Il ___ è che non abbiamo alternative.\"" },
      {
        q: "Bau die Argumentation.",
        tr: "Es stimmt, dass die Kosten hoch sind, aber die langfristigen Einsparungen sind zu bedenken."
      },
      { q: "„Das scheint mir eine Verallgemeinerung.\"" },
      {
        q: "Eine Debatte in einer Besprechung.",
        setting: "Teambesprechung, Streit über das Budget.",
        lines: [
          { tr: "Diese Investition ist zu teuer, Punkt." },
          {
            tr: "Räum einen Teil ein und bring ein Gegenargument.",
            answerTr: "Es stimmt, dass die Kosten hoch sind, aber die langfristigen Einsparungen sind zu bedenken."
          },
          { tr: "Aber alle sagen, dass solche Projekte scheitern." },
          {
            tr: "Entkräfte die Verallgemeinerung mit den Zahlen.",
            answerTr: "Das scheint mir eine Verallgemeinerung: die Zahlen zeigen das Gegenteil."
          }
        ]
      },
      { tr: "Angesichts des Gesagten schlage ich vor, den Plan zu überarbeiten." },
      { tr: "Bei allem Respekt, ich glaube nicht, dass dieses Argument trägt." },
      { tr: "Der Punkt ist, dass wir keine realistischen Alternativen haben." }
    ]
  },
  "lesson:b2-u04-test": {
    theme: "Prüfung",
    title: "B2-Abschlussprüfung",
    objectives: ["das congiuntivo, die Bedingungssätze, das Passiv und die Argumentation prüfen"],
    theory: [{ p: "Zwölf Aufgaben aus der ganzen Stufe. Bestanden ab 70 %." }],
    exercises: [
      {  },
      { q: "„Pensavo che ___ più semplice.\"" },
      { q: "„Speravo che mi ___ chiamato.\"" },
      { q: "„Se ___ tempo, verrei.\"", opts: ["ho", "avrei", "avessi"] },
      { q: "Typ 3.", tr: "Wenn ich gelernt hätte, hätte ich die Prüfung bestanden." },
      { q: "„Il modulo ___ compilato in stampatello.\" (muss)" },
      { q: "Passato remoto von „fare\", lui: ___" },
      { q: "Richtig:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "„Il fatto che ___ difficile non significa niente.\" (essere)" },
      { q: "„Parla come se ___ un esperto.\"" },
      { q: "„Es stimmt, dass die Kosten hoch sind, aber die Einsparungen sind zu bedenken.\"" },
      { tr: "Angesichts der Zahlen halte ich es für sinnvoll, den Plan zu überarbeiten." }
    ]
  }
});
