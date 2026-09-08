/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/b1-01.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:b1-u01": { title: "Der Konjunktiv", grammarNote: "congiuntivo presente und passato · Meinungen ausdrücken" },
  "lesson:b1-u01-l1": {
    theme: "Grammatik",
    title: "Formen und erste Verwendungen",
    objectives: [
      "das congiuntivo presente in allen drei Konjugationen bilden",
      "die häufigsten unregelmäßigen Formen kennen",
      "die Situationen erkennen, die es verlangen"
    ],
    theory: [
      {
        h: "Ein Modus, der anders arbeitet als deiner",
        p: "Das congiuntivo beschreibt keine Tatsachen, es markiert <b>die Haltung des Sprechers zu dem, was folgt</b>: Meinung, Zweifel, Wille, Gefühl. <em>So che <b>è</b> bravo</em> (ich weiß es, eine Tatsache, Indikativ) gegenüber <em>Penso che <b>sia</b> bravo</em> (ich meine es, eine Meinung, congiuntivo)."
      },
      {
        contrast: "Einen Konjunktiv hast du, aber er tut etwas anderes: Konjunktiv I steht in der indirekten Rede, Konjunktiv II im Irrealen und in der Höflichkeit. Für Meinung, Hoffnung und Furcht nimmst du den Indikativ — „ich glaube, dass er <b>kommt</b>\", „ich hoffe, dass er <b>kommt</b>\". Das Italienische verlangt dort das congiuntivo. Es gibt also nichts zu übertragen: die Auslöser müssen als Liste gelernt werden."
      },
      {
        h: "Die Endungen",
        list: [
          "<b>-are</b>: parl<b>i</b>, parl<b>i</b>, parl<b>i</b>, parl<b>iamo</b>, parl<b>iate</b>, parl<b>ino</b>",
          "<b>-ere / -ire</b>: prend<b>a</b>, prend<b>a</b>, prend<b>a</b>, prend<b>iamo</b>, prend<b>iate</b>, prend<b>ano</b>",
          "<b>-isc-</b>: cap<b>isca</b>, cap<b>isca</b>, cap<b>isca</b>, cap<b>iamo</b>, cap<b>iate</b>, cap<b>iscano</b>"
        ]
      },
      {
        trap: "Die ersten drei Personen sind <b>identisch</b>. Deshalb <b>fällt das Subjektpronomen nicht weg</b>: <em>penso che <b>tu</b> abbia ragione</em>, sonst weiß niemand, wen du meinst. Für dich ist das kein Aufwand, weil Deutsch das Pronomen ohnehin immer setzt — aber es ist der Grund, warum du es hier nie weglassen darfst, obwohl das Italienische es sonst gern tut."
      },
      {
        h: "Unregelmäßige Formen, die man können muss",
        p: "<em>essere → sia</em>, <em>avere → abbia</em>, <em>fare → faccia</em>, <em>andare → vada</em>, <em>venire → venga</em>, <em>potere → possa</em>, <em>volere → voglia</em>, <em>dovere → debba</em>, <em>sapere → sappia</em>, <em>dare → dia</em>, <em>stare → stia</em>, <em>dire → dica</em>, <em>uscire → esca</em>, <em>rimanere → rimanga</em>."
      }
    ],
    grammar: {
      title: "Congiuntivo presente",
      table: {
        head: ["Person", "parlare", "prendere", "capire", "essere", "avere"],
        rows: [
          ["che io", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che tu", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che lui/lei", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che noi", "parliamo", "prendiamo", "capiamo", "siamo", "abbiamo"],
          ["che voi", "parliate", "prendiate", "capiate", "siate", "abbiate"],
          ["che loro", "parlino", "prendano", "capiscano", "siano", "abbiano"]
        ]
      },
      examples: [
        { tr: "Ich glaube, dass du recht hast." },
        { tr: "Ich glaube, es ist zu spät." },
        { tr: "Ich bin nicht sicher, ob er kommt." },
        { tr: "Ich hoffe, dass alles gut geht." },
        { tr: "Ich will, dass du mir die Wahrheit sagst." },
        { tr: "Ich weiß, dass er gut ist.", note: "Gewissheit → Indikativ" }
      ]
    },
    vocab: [
      "ich denke, dass…",
      "ich glaube, dass…",
      "mir scheint, dass…",
      "ich hoffe, dass…",
      "ich will, dass…",
      "ich fürchte, dass…",
      "ich bin nicht sicher, dass…",
      "ich nehme an, dass…",
      "es ist möglich, dass…",
      "es ist nötig, dass…",
      "ich weiß, dass… (Indikativ)",
      "es stimmt, dass… (Indikativ)"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Warum fällt das Subjektpronomen beim congiuntivo nicht weg?",
        opts: [
          "Weil es höflicher ist",
          "Weil die ersten drei Personen dieselbe Form haben",
          "Weil die Wortstellung es verlangt"
        ]
      },
      { q: "Ergänze: „Penso che tu ___ ragione.\" (avere)" },
      { q: "Ergänze: „Credo che ___ troppo tardi.\" (essere)" },
      {
        q: "Welches nimmt den Indikativ und nicht das congiuntivo?",
        opts: ["Penso che…", "So che…", "Temo che…"],
        why: "Sapere drückt Gewissheit aus, also Indikativ."
      },
      {
        q: "Setz die Formen des congiuntivo ein.",
        tr: "Ich hoffe, dass alles gut geht und dass ihr alle zufrieden seid."
      },
      { q: "„Ich will, dass du mir die Wahrheit sagst.\"" },
      { tr: "Ich glaube, es ist besser, die Besprechung zu verschieben." },
      { tr: "Ich glaube, dass du in diesem Punkt recht hast." }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Grammatik",
    title: "Was den Konjunktiv auslöst",
    objectives: [
      "die Ausdrücke erkennen, die das congiuntivo verlangen",
      "wissen, wann di + Infinitiv statt che steht",
      "das congiuntivo nicht dort einsetzen, wo es nicht hingehört"
    ],
    theory: [
      {
        h: "Vier Familien von Auslösern",
        list: [
          "<b>Meinung und Vermutung</b>: penso, credo, ritengo, mi sembra, immagino, suppongo",
          "<b>Wille und Gefühl</b>: voglio, desidero, spero, temo, mi dispiace, sono contento",
          "<b>unpersönlich</b>: è necessario, bisogna, è possibile, è strano, è meglio, può darsi",
          "<b>Konjunktionen</b>: benché, sebbene, nonostante, affinché, purché, prima che, a meno che, senza che, come se"
        ]
      },
      {
        contrast: "Bei den Konjunktionen versagt dein Sprachgefühl vollständig: „obwohl es spät ist\", „damit du verstehst\", „bevor er kommt\" stehen im Deutschen alle im Indikativ, während <em>benché</em>, <em>affinché</em> und <em>prima che</em> das congiuntivo erzwingen. Einzig <em>come se</em> hat mit deinem „als ob\" plus Konjunktiv II eine echte Entsprechung."
      },
      {
        h: "Gleiches Subjekt: che verschwindet",
        p: "Wenn beide Sätze dasselbe Subjekt haben, weicht das congiuntivo einem <em>di</em> + Infinitiv. <em>Penso <b>di</b> avere ragione</em>, nicht „penso che io abbia\". Der Mechanismus ist dein „ich glaube, recht <b>zu</b> haben\": nur heißt die Partikel hier <em>di</em> und steht am Anfang, nicht vor dem Infinitiv am Satzende."
      },
      {
        h: "Wo das congiuntivo NICHT steht",
        p: "Nach Ausdrücken der Gewissheit: <em>so che, è certo che, è vero che, è chiaro che, siccome, poiché</em>. Achtung bei <em>perché</em>: im Sinn von „weil\" steht der Indikativ, im Sinn von „damit\" das congiuntivo (<em>te lo dico perché tu <b>capisca</b></em>). Deutsch trennt die beiden Bedeutungen in zwei Wörter, „weil\" und „damit\", das Italienische nicht."
      }
    ],
    grammar: {
      title: "Congiuntivo oder nicht",
      table: {
        head: ["Ausdruck", "Modus", "Beispiel"],
        rows: [
          ["penso / credo che", "congiuntivo", "Penso che sia giusto."],
          ["so / è vero che", "Indikativ", "So che è giusto."],
          ["spero che", "congiuntivo", "Spero che venga."],
          ["spero di (gleiches Subjekt)", "Infinitiv", "Spero di venire."],
          ["benché / sebbene", "congiuntivo", "Benché sia tardi, esco."],
          ["siccome / poiché", "Indikativ", "Siccome è tardi, resto."]
        ]
      },
      examples: [
        { tr: "Obwohl es regnet, gehen wir trotzdem." },
        { tr: "Obwohl ich müde bin, arbeite ich weiter." },
        { tr: "Ich helfe dir, vorausgesetzt du machst deinen Teil." },
        { tr: "Fahr los, bevor Stau entsteht." },
        { tr: "Ich denke daran, morgen abzureisen.", note: "gleiches Subjekt → di + Infinitiv" },
        { tr: "Da es spät ist, verschiebe ich es auf morgen.", note: "Indikativ" }
      ]
    },
    vocab: [
      "obwohl",
      "obgleich",
      "damit",
      "vorausgesetzt dass",
      "es sei denn",
      "bevor",
      "ohne dass",
      "als ob",
      "es kann sein, dass",
      "da, weil",
      "es ist klar, dass",
      "der Ansicht sein"
    ],
    exercises: [
      { q: "„Benché ___ tardi, esco.\" (essere)", opts: ["è", "sia", "sarà"] },
      {
        q: "„Siccome ___ tardi, resto a casa.\" (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Siccome nennt eine tatsächliche Ursache → Indikativ."
      },
      { q: "Ergänze: „Ti aiuto purché tu ___ la tua parte.\" (fare)" },
      { q: "Ergänze: „Spero ___ venire domani.\" (gleiches Subjekt)" },
      {
        q: "Welche Ausdrücke verlangen das congiuntivo?",
        opts: ["penso che", "so che", "benché", "è vero che", "prima che"]
      },
      {
        q: "Setz die richtigen Formen ein.",
        tr: "Obwohl er müde ist, arbeitet er weiter. Ich weiß, dass er viel Geduld hat."
      },
      { q: "„Obwohl es regnet, gehen wir trotzdem hinaus.\"" },
      {
        q: "„Te lo dico perché tu capisca\" — warum das congiuntivo?",
        opts: ["Weil perché es immer verlangt", "Weil perché hier „damit\" heißt, nicht „weil\"", "Das ist ein Fehler"]
      },
      { tr: "Es kann gut sein, dass morgen niemand im Büro ist." },
      { tr: "Obwohl es schwierig ist, glaube ich, dass es sich lohnt." }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Grammatik",
    title: "Der Konjunktiv für Vorzeitiges",
    objectives: [
      "das congiuntivo passato bilden",
      "zwischen presente und passato wählen",
      "es verwenden, um Vergangenes zu kommentieren"
    ],
    theory: [
      {
        h: "Wie es gebaut wird",
        p: "Congiuntivo presente von <em>avere/essere</em> + Partizip: <em>abbia fatto</em>, <em>sia andato</em>. Die Regeln für die Wahl des Hilfsverbs und für die Angleichung des Partizips sind genau die, die du vom passato prossimo kennst."
      },
      {
        h: "Presente oder passato",
        p: "Bei Hauptsatz im Präsens: <b>presente</b> für Gleichzeitiges oder noch Bevorstehendes (<em>penso che venga</em>), <b>passato</b> für bereits Abgeschlossenes (<em>penso che sia venuto</em>)."
      },
      {
        h: "Der häufigste Kontext: Vergangenes kommentieren",
        p: "<em>Mi dispiace che tu non sia potuto venire.</em> <em>Non credo che l'abbiano fatto apposta.</em> Solche Sätze kommen im Gespräch ständig vor, das congiuntivo passato zahlt sich also sofort aus."
      },
      {
        tip: "In lockerer Umgangssprache ersetzen Italiener das congiuntivo zunehmend durch den Indikativ (<em>penso che è vero</em>). Das wird stark kritisiert und wirkt in Schrift und Beruf schlecht. Lern die korrekte Form."
      }
    ],
    grammar: {
      title: "Congiuntivo passato",
      table: {
        head: ["Hauptsatz", "Verhältnis", "Modus", "Beispiel"],
        rows: [
          ["Präsens", "gleichzeitig", "cong. presente", "Penso che stia bene."],
          ["Präsens", "Zukunft", "cong. presente", "Penso che venga domani."],
          ["Präsens", "vorzeitig", "cong. passato", "Penso che sia venuto ieri."],
          ["—", "mit essere", "Angleichung", "Credo che sia partita."],
          ["—", "mit avere", "keine Angleichung", "Credo che abbia parlato."],
          ["—", "mit Pronomen", "Angleichung", "Non credo che l'abbia vista."]
        ]
      },
      examples: [
        { tr: "Es tut mir leid, dass du nicht kommen konntest." },
        { tr: "Ich glaube nicht, dass sie es mit Absicht getan haben." },
        { tr: "Es ist seltsam, dass er nicht geantwortet hat." },
        { tr: "Es scheint, dass sie schon weg sind." },
        { tr: "Ich hoffe, ihr hattet eine gute Zeit." },
        { tr: "Ich fürchte, wir haben den falschen Weg genommen." }
      ]
    },
    vocab: [
      "es tut mir leid, dass",
      "es ist seltsam, dass",
      "es scheint, dass",
      "offenbar ist es so, dass",
      "ich habe den Eindruck, dass",
      "mit Absicht",
      "aus Versehen",
      "sich im Weg irren",
      "bemerken",
      "merken, begreifen",
      "anscheinend",
      "tatsächlich"
    ],
    exercises: [
      { q: "Ergänze: „Penso che ___ già partito.\" (essere, er)" },
      { q: "Ergänze: „Non credo che ___ capito.\" (avere, sie)" },
      {
        q: "„Penso che venga domani\" gegen „Penso che sia venuto ieri\" — worin liegt der Unterschied?",
        opts: ["In keinem", "Das erste betrifft die Zukunft, das zweite etwas Vorzeitiges", "Das zweite ist falsch"]
      },
      { q: "Setz das congiuntivo passato ein.", tr: "Es tut mir leid, dass du nicht kommen konntest und die Feier verpasst hast." },
      { q: "„Ich glaube nicht, dass sie es mit Absicht getan haben.\"" },
      {
        q: "„Credo che sia partita\" — warum „partita\" und nicht „partito\"?",
        opts: ["Das ist ein Fehler", "Weil das Partizip sich mit essere dem Subjekt angleicht", "Weil es besser klingt"]
      },
      { q: "Ordne zu.", pairs: ["anscheinend", "mit Absicht", "aus Versehen", "merken"] },
      { tr: "Es scheint, dass sie schon weg sind." },
      { tr: "Es ist seltsam, dass er auf die Nachricht noch nicht geantwortet hat." },
      { tr: "Ich hoffe, ihr hattet eine gute Zeit auf der Feier." }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Kommunikation",
    title: "Meinungen äußern und abwägen",
    objectives: [
      "im Gespräch eine Meinung äußern",
      "teilweise zustimmen und widersprechen",
      "das congiuntivo in einer echten Diskussion verwenden"
    ],
    theory: [
      {
        h: "Drei Stärkegrade der Meinung",
        list: [
          "weich: <em>mi sembra che…</em>, <em>ho l'impressione che…</em>, <em>direi che…</em>",
          "neutral: <em>secondo me</em>, <em>penso che</em>, <em>a mio parere</em>",
          "stark: <em>sono convinto che</em>, <em>non ho dubbi</em>, <em>è evidente che</em> (Indikativ!)"
        ]
      },
      {
        h: "Widersprechen ohne Streit",
        p: "Das italienische Gespräch erträgt Widerspruch, achtet aber auf die Verpackung. <em>Non sono del tutto d'accordo</em>, <em>Sì, però…</em>, <em>Da un lato hai ragione, dall'altro…</em>, <em>Vedo il tuo punto, ma…</em>. Ein bloßes <em>no</em> beendet das Gespräch. Ein sachlich-direkter Widerspruch, wie er dir naheliegt, kommt hier härter an, als du ihn meinst."
      },
      {
        h: "Diskursmarker",
        p: "<em>Guarda</em>, <em>senti</em>, <em>diciamo</em>, <em>insomma</em>, <em>appunto</em>, <em>anzi</em>. Sie fügen nichts hinzu, aber ohne sie klingst du, als würdest du vorlesen — es sind die italienischen Verwandten deiner Modalpartikeln (doch, ja, mal, halt), die im Wörterbuch ebenso wenig stehen und ebenso unentbehrlich sind."
      },
      {
        tip: "<em>Dipende</em> ist die italienischste Antwort auf eine schwierige Frage. Bau sie aus: <em>dipende da cosa intendi</em>, <em>dipende dai casi</em>."
      }
    ],
    grammar: {
      title: "Die Sprache der Meinung",
      table: {
        head: ["Funktion", "Wendung", "Modus nach che"],
        rows: [
          ["Meinung", "Secondo me / A mio parere", "—"],
          ["Meinung", "Penso / credo / ritengo che", "congiuntivo"],
          ["Gewissheit", "Sono sicuro / è evidente che", "Indikativ"],
          ["teilweise Zustimmung", "Da un lato… dall'altro…", "—"],
          ["Widerspruch", "Non sono d'accordo, perché…", "Indikativ"],
          ["Korrektur", "Anzi, direi il contrario.", "—"]
        ]
      },
      examples: [
        { tr: "Meiner Ansicht nach liegt das Problem woanders." },
        { tr: "Ich habe den Eindruck, dass wir aneinander vorbeireden." },
        { tr: "Einerseits hast du recht, andererseits übertreibst du." },
        { tr: "Mit dieser Lesart bin ich nicht ganz einverstanden." },
        { tr: "Im Gegenteil, ich würde das Gegenteil sagen." },
        { tr: "Es kommt darauf an, was du unter „wirksam\" verstehst." }
      ]
    },
    vocab: [
      "meiner Ansicht nach",
      "meines Erachtens",
      "ich bin der Ansicht, dass",
      "ich bin überzeugt, dass",
      "einerseits… andererseits",
      "nicht ganz",
      "im Gegenteil; vielmehr",
      "genau",
      "kurz gesagt",
      "es kommt darauf an",
      "übertreiben",
      "verstehen, worauf jemand hinauswill"
    ],
    exercises: [
      {
        q: "„Sono sicuro che ___ vero.\" (essere)",
        opts: ["sia", "è", "fosse"],
        why: "Gewissheit → Indikativ."
      },
      { q: "Ergänze: „Ritengo che questa soluzione ___ migliore.\" (essere)" },
      { q: "Was bedeutet „anzi\"?", opts: ["also", "vielmehr / im Gegenteil", "vorher"] },
      { q: "Ordne zu.", pairs: ["genau", "kurz gesagt", "es kommt darauf an", "übertreiben"] },
      { q: "„Mit dieser Meinung bin ich nicht ganz einverstanden.\"" },
      {
        q: "Ergänze den Wortwechsel.",
        tr: "Meiner Ansicht nach liegt das Problem woanders. Ich habe den Eindruck, dass wir aneinander vorbeireden."
      },
      {
        q: "Eine Diskussion über Homeoffice.",
        setting: "Abendessen bei Freunden, das Gespräch kommt auf die Arbeit.",
        lines: [
          { tr: "Meiner Ansicht nach hat das Homeoffice die Teamarbeit ruiniert." },
          {
            tr: "Gib ihm teilweise recht und setz einen Gegenpunkt dagegen.",
            answerTr: "Einerseits hast du recht, andererseits hat es den Stress verringert."
          },
          { tr: "Ja, aber die Jüngeren lernen weniger." },
          {
            tr: "Antworte, dass es davon abhängt, wie die Firma organisiert ist.",
            answerTr: "Es kommt darauf an, wie die Firma die Arbeit organisiert."
          }
        ]
      },
      { tr: "Im Gegenteil, ich würde genau das Gegenteil sagen." },
      { tr: "Einerseits stimmt es, andererseits scheint es mir eine Vereinfachung." },
      { tr: "Meiner Ansicht nach hängt es stark vom Zusammenhang ab." }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Test",
    title: "Test zu Einheit 1",
    objectives: ["das congiuntivo presente und passato und die Auslöser prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "„Penso che tu ___ ragione.\"" },
      { q: "„Benché ___ tardi, esco.\"" },
      { q: "„Siccome ___ tardi, resto.\"", opts: ["è", "sia", "fosse"] },
      { q: "„Spero ___ venire domani.\" (gleiches Subjekt)" },
      { q: "„Non credo che ___ capito.\" (avere, sie)" },
      { q: "Welche verlangen das congiuntivo?", opts: ["è vero che", "può darsi che", "prima che", "so che"] },
      { tr: "Mir scheint, dass sie das Problem nicht verstanden haben." },
      { tr: "Ich glaube, es ist besser, morgen darüber zu sprechen." }
    ]
  },
  "unit:b1-u02": { title: "Kombinierte Pronomen", grammarNote: "me lo, glielo, ce ne · ci und ne vollständig" },
  "lesson:b1-u02-l1": {
    theme: "Grammatik",
    title: "Zwei Pronomen zusammensetzen",
    objectives: [
      "ein indirektes mit einem direkten Pronomen kombinieren",
      "den Wechsel von -i zu -e behalten",
      "die Konstruktion im Gespräch verwenden"
    ],
    theory: [
      {
        h: "Reihenfolge: das indirekte zuerst",
        p: "Wenn zwei Pronomen zusammentreffen, steht das <b>indirekte vorn</b> und sein <em>-i</em> wird zu <em>-e</em>: <em>mi + lo → <b>me lo</b></em>."
      },
      {
        contrast: "Deutsch macht es umgekehrt: sobald beide Pronomen sind, steht der Akkusativ vor dem Dativ, „gib <b>es mir</b>\", nie „gib mir es\". Das Italienische behält die Reihenfolge Dativ vor Akkusativ und verschmilzt sie zu einem Wort: <em>dammelo</em>. Genau da greift dein Reflex daneben."
      },
      {
        h: "Gli und le verschmelzen zu glie-",
        p: "„Ihm\", „ihr\" und „ihnen\" ergeben alle <strong>glie-</strong>, <b>in einem Wort</b> mit dem zweiten Pronomen geschrieben: <em>glielo, gliela, glieli, gliele, gliene</em>. Eine Form deckt drei Personen ab, der Zusammenhang muss es klären."
      },
      {
        h: "Bei Infinitiv oder Imperativ hängen sie sich gemeinsam an",
        p: "<em>Voglio dartelo</em>, <em>Puoi spiegarmelo?</em>, <em>Dammelo!</em>, <em>Portaglielo!</em>. Das ganze Paar wird an das Verbende gehängt."
      },
      {
        trap: "In den zusammengesetzten Zeiten gleicht sich das Partizip dem <b>direkten</b> Pronomen an, auch im Paar: <em>Me l'ha data</em>, <em>Gliele ho mandate</em>. Deutsch kennt dafür nichts: „sie hat es mir gegeben\" bleibt unverändert, egal worum es geht."
      }
    ],
    grammar: {
      title: "Tabelle der kombinierten Pronomen",
      table: {
        head: ["", "lo", "la", "li", "le", "ne"],
        rows: [
          ["mi", "me lo", "me la", "me li", "me le", "me ne"],
          ["ti", "te lo", "te la", "te li", "te le", "te ne"],
          ["gli / le", "glielo", "gliela", "glieli", "gliele", "gliene"],
          ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"],
          ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"]
        ]
      },
      examples: [
        { tr: "Leihst du mir das Auto? — Ja, ich leihe es dir." },
        { tr: "Hast du Marco das Buch gegeben? — Ja, ich habe es ihm gegeben." },
        { tr: "Erklärst du es uns noch einmal?" },
        { tr: "Wie viele Mails hat er dir geschickt? — Er hat mir drei geschickt." },
        { tr: "Kannst du es mir erklären?" },
        { tr: "Gib es mir, bitte." }
      ]
    },
    vocab: [
      "leihen",
      "zurückgeben",
      "erklären",
      "schicken",
      "bringen, mitnehmen",
      "schenken",
      "abgeben, aushändigen",
      "sich ausleihen",
      "noch einmal",
      "sofort",
      "so bald wie möglich",
      "sag mir Bescheid"
    ],
    exercises: [
      {
        q: "„Mi dai il libro?\" → die Antwort mit Pronomen:",
        opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."]
      },
      { q: "Ergänze: „Hai dato il libro a Marco? — Sì, ___ ho dato.\"" },
      {
        q: "Ergänze: „Ci spieghi la regola? — Sì, ___ spiego.\"",
        why: "Die Antwort richtet sich an euch: ve la spiego."
      },
      { q: "Wie schreibt man „gli + lo\"?", opts: ["gli lo", "glielo", "gli-lo"] },
      {
        q: "Ersetz die Nomen durch Pronomen.",
        tr: "— Leihst du mir das Auto? — Ja, ich leihe es dir gern. — Und die Schlüssel? — Die gebe ich dir sofort."
      },
      { q: "„Kannst du es mir erklären?\"" },
      { q: "Ergänze die Endung: „Me l'ha dat___.\" (sie hat es mir gegeben — la macchina)" },
      { tr: "Ich schicke sie dir morgen." },
      { tr: "Ich habe es ihm dreimal erklärt, aber er hat es nicht verstanden." },
      { tr: "Kannst du es mir bitte noch einmal erklären?" }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Grammatik",
    title: "Ci und ne vollständig",
    objectives: [
      "alle Bedeutungen von ci und ne erkennen",
      "die Verben verwenden, in denen sie verschmolzen sind",
      "Wendungen wie non ce la faccio verstehen"
    ],
    theory: [
      {
        h: "CI: vier Werte",
        list: [
          "Ort: <em>A Roma ci vado spesso.</em>",
          "<em>a + Sache</em>: <em>Ci penso io.</em>",
          "<em>c'è / ci sono</em>",
          "verschmolzene Verben: <em>volerci, metterci, farcela, entrarci, tenerci</em>"
        ]
      },
      {
        h: "NE: drei Werte",
        list: [
          "Teil eines Ganzen: <em>Ne voglio due.</em>",
          "<em>di + Sache</em>: <em>Ne parliamo domani.</em>",
          "verschmolzene Verben: <em>andarsene, fregarsene, accorgersene, intendersene</em>"
        ]
      },
      {
        contrast: "Zwei deiner Bausteine helfen hier weiter: <em>ci</em> im Sinn von „a + Sache\" ist dein <b>daran</b> (<em>ci penso</em> = „ich denke daran\"), und <em>ne</em> als Teilmenge ist dein <b>davon</b> (<em>ne voglio due</em> = „ich will zwei davon\"). Weiter trägt die Analogie aber nicht: die verschmolzenen Verben zerfallen nicht in Teile, die du übersetzen könntest, und werden am besten als ganze Blöcke gelernt."
      },
      {
        h: "Verben, die man nicht Wort für Wort übersetzt",
        p: "<em>Ci vogliono due ore</em> („es dauert zwei Stunden\"), <em>Ci metto un'ora</em> („ich brauche eine Stunde\"), <em>Non ce la faccio</em> („ich schaffe es nicht\"), <em>Ci tengo</em> („es liegt mir daran\"), <em>Me ne vado</em> („ich gehe\"), <em>Non me ne intendo</em> („davon verstehe ich nichts\")."
      },
      {
        trap: "<em>Volerci</em> und <em>metterci</em> sind keine Synonyme. <em>Ci vogliono due ore</em> betrifft die objektive Dauer; <em>ci metto due ore</em> die Zeit, die <b>ich</b> brauche. Dein „es dauert\" gegen „ich brauche\" trifft den Unterschied genau."
      }
    ],
    grammar: {
      title: "Verben mit ci und ne",
      table: {
        head: ["Verb", "Bedeutung", "Beispiel"],
        rows: [
          ["volerci", "nötig sein, dauern", "Ci vuole pazienza."],
          ["metterci", "brauchen (Zeit)", "Ci metto venti minuti."],
          ["farcela", "es schaffen", "Non ce la faccio più."],
          ["tenerci", "daran liegen", "Ci tengo molto."],
          ["andarsene", "weggehen", "Me ne vado adesso."],
          ["fregarsene", "sich nicht darum scheren", "Se ne frega di tutto."],
          ["intendersene", "sich auskennen", "Non me ne intendo."],
          ["entrarci", "damit zu tun haben", "Che c'entra?"]
        ]
      },
      examples: [
        { tr: "Die italienische Bürokratie erfordert Geduld." },
        { tr: "Wie lange brauchst du von zu Hause zur Arbeit?" },
        { tr: "Ich schaffe es nicht, bis heute Abend fertig zu werden." },
        { tr: "Mir liegt daran, dass du kommst.", note: "+ congiuntivo" },
        { tr: "Ich gehe, es ist spät." },
        { tr: "Von Wein verstehe ich überhaupt nichts." }
      ]
    },
    vocab: [
      "nötig sein, dauern",
      "brauchen (Zeit)",
      "es schaffen",
      "daran liegen",
      "weggehen",
      "sich nicht darum scheren",
      "sich auskennen",
      "damit zu tun haben",
      "es auf jemanden abgesehen haben",
      "Geduld",
      "Mühe, Einsatz",
      "die Zeit, die es kostet"
    ],
    exercises: [
      {
        q: "„Ci vogliono due ore\" bedeutet:",
        opts: ["Wir wollen zwei Stunden", "Es dauert zwei Stunden", "Ich brauche zwei Stunden"]
      },
      {
        q: "„Ci metto due ore\" bedeutet:",
        opts: ["Es dauert allgemein zwei Stunden", "Ich brauche zwei Stunden", "Ich stelle es für zwei Stunden hin"]
      },
      { q: "Ergänze: „Non ___ la faccio più.\" (ich schaffe es nicht mehr)" },
      { q: "Ergänze: „Me ___ vado, è tardi.\"" },
      { q: "Ordne zu.", pairs: ["daran liegen", "sich auskennen", "damit zu tun haben", "sich nicht darum scheren"] },
      { q: "Ergänze.", tr: "Wie lange brauchst du hin? — Es dauert zwanzig Minuten mit der U-Bahn." },
      { q: "„Von Wein verstehe ich nichts.\"" },
      {
        q: "„Ci tengo che tu venga\" — warum das congiuntivo?",
        opts: ["Weil tenerci Wille und Gefühl ausdrückt", "Das ist ein Fehler", "Weil ci es verlangt"]
      },
      { tr: "Es braucht viel Geduld, aber am Ende schaffen wir es." },
      { tr: "Ich schaffe es nicht, heute alles fertig zu machen." }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Grammatik",
    title: "Die Relativsätze",
    objectives: [
      "che, cui und il quale verwenden",
      "zwei Sätze zu einem verbinden",
      "Besitz mit cui plus Artikel ausdrücken"
    ],
    theory: [
      {
        h: "Che macht fast die ganze Arbeit",
        p: "<strong>Che</strong> ist unveränderlich und steht für das Subjekt wie für das direkte Objekt: <em>il libro <b>che</b> ho letto</em>, <em>la persona <b>che</b> parla</em>. Nach einer Präposition kann es nicht stehen."
      },
      {
        contrast: "Deine Relativpronomen werden dekliniert und richten sich nach Kasus und Genus (der, den, dem, deren). Das italienische <em>che</em> tut nichts davon. Dafür wandert dein Verb ans Satzende, das italienische bleibt an seinem Platz: <em>il libro che ho letto ieri</em>, nicht „das Buch, das ich gestern gelesen habe\" mit dem Partizip ganz hinten. Beide Vereinfachungen muss man sich bewusst erlauben."
      },
      {
        h: "Cui nach einer Präposition",
        p: "Wenn eine Präposition nötig ist, weicht <em>che</em> dem <strong>cui</strong>: <em>la persona <b>a cui</b> ho scritto</em>, <em>la città <b>in cui</b> vivo</em>, <em>il motivo <b>per cui</b> sono qui</em>. Die Struktur ist deine (Präposition + Relativpronomen), nur bleibt <em>cui</em> unverändert."
      },
      {
        h: "Cui mit Artikel = Besitz",
        p: "<em>Il ragazzo <b>la cui</b> madre è medico</em> („der Junge, dessen Mutter Ärztin ist\"). Achtung: der Artikel richtet sich nach dem <b>Besessenen</b>, hier <em>la madre</em>. Dein „dessen/deren\" richtet sich dagegen nach dem <b>Besitzer</b>: „der Junge, <b>dessen</b> Mutter\". Die beiden Sprachen greifen also auf entgegengesetzte Seiten zu, und das ist der häufigste Fehler des Kapitels."
      },
      {
        h: "Il quale, die formelle Variante",
        p: "<em>il quale, la quale, i quali, le quali</em> ersetzt <em>che</em> und <em>cui</em> im Schriftregister, wie dein „welcher\". Es verdient sich seinen Platz, wenn eine Mehrdeutigkeit weg muss: <em>la sorella di Marco, <b>la quale</b> vive a Roma</em> zeigt eindeutig auf die Schwester, nicht auf Marco."
      }
    ],
    grammar: {
      title: "Die Relativpronomen",
      table: {
        head: ["Form", "Funktion", "Beispiel"],
        rows: [
          ["che", "Subjekt / direktes Objekt", "Il film che ho visto."],
          ["a cui", "indirektes Objekt", "La persona a cui ho scritto."],
          ["in cui", "Ort, Zeit", "L'anno in cui sono nato."],
          ["di cui", "wovon", "Il libro di cui ti parlavo."],
          ["il cui / la cui", "Besitz", "L'autore il cui libro è famoso."],
          ["il quale", "formelle Variante", "Il collega, il quale lavora qui."],
          ["chi", "wer, derjenige der", "Chi cerca trova."]
        ]
      },
      examples: [
        { tr: "Das Buch, das ich gerade lese, ist wunderbar." },
        { tr: "Die Stadt, in der ich aufgewachsen bin, ist klein." },
        { tr: "Der Grund, aus dem ich schreibe, ist einfach." },
        { tr: "Der Kollege, dessen Tochter in Rom studiert." },
        { tr: "Wer sucht, der findet.", note: "Sprichwort" },
        { tr: "Das ist die Sache, von der ich dir erzählt habe." }
      ]
    },
    vocab: [
      "der, die, das (Subjekt/Objekt)",
      "dem, der (nach Präposition)",
      "welcher (formell)",
      "derjenige der",
      "der Grund",
      "wachsen, aufwachsen",
      "der Autor",
      "das, was",
      "der Zeitraum",
      "die Epoche",
      "dank dessen",
      "für den Fall dass"
    ],
    exercises: [
      { q: "Ergänze: „Il libro ___ ho letto è bellissimo.\"" },
      { q: "Ergänze: „La città in ___ vivo è piccola.\"" },
      { q: "Ergänze: „La persona a ___ ho scritto non risponde.\"" },
      {
        q: "„Il ragazzo la cui madre è medico\" — womit gleicht sich „la\" an?",
        opts: ["Mit dem Jungen", "Mit der Mutter (dem Besessenen)", "Mit nichts"]
      },
      {
        q: "Welcher Satz ist falsch?",
        opts: ["La città in cui vivo.", "La città in che vivo.", "La città dove vivo."],
        why: "Che kann nicht nach einer Präposition stehen."
      },
      {
        q: "Ergänze die Relativpronomen.",
        tr: "Der Kollege, der mit mir arbeitet, ist die Person, der ich alles verdanke."
      },
      { q: "„Der Grund, aus dem ich schreibe, ist einfach.\"" },
      { tr: "Das ist die Sache, von der ich dir erzählt habe." },
      { tr: "Das Jahr, in dem ich nach Italien kam, war das schwerste." },
      { tr: "Die Stadt, in der ich aufgewachsen bin, ist sehr klein." }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Grammatik",
    title: "Die Indefinitpronomen",
    objectives: [
      "qualche, alcuni, ogni, ciascuno verwenden",
      "nessuno von niente unterscheiden",
      "einen Satz mit doppelter Verneinung bauen"
    ],
    theory: [
      {
        h: "Qualche steht immer im Singular",
        p: "<em><b>qualche</b> giorno</em> („ein paar Tage\"): der Sinn ist Plural, das Nomen bleibt Singular. Sein Synonym <em>alcuni/alcune</em> arbeitet umgekehrt: <em>alcuni giorni</em>. Dein „ein paar Tage\" steht im Plural, also verlangt <em>qualche giorno</em> bewusste Aufmerksamkeit."
      },
      {
        h: "Ogni und ciascuno",
        p: "<em>Ogni</em> ist unveränderlich und immer Singular: <em>ogni giorno</em>. Dein „jeder\" wird dekliniert, <em>ogni</em> nie. <em>Ciascuno</em> flektiert wie der unbestimmte Artikel und betont das einzelne Stück: <em>ciascuno studente</em>."
      },
      {
        h: "Die Verneinungen",
        p: "<em>Nessuno</em> (niemand, kein), <em>niente / nulla</em> (nichts), <em>nemmeno / neanche</em> (nicht einmal). <b>Nach</b> dem Verb verlangen sie <em>non</em>: <em>non c'è <b>nessuno</b></em>. Vor dem Verb fällt <em>non</em> weg: <em><b>Nessuno</b> è venuto.</em>"
      },
      {
        contrast: "Hier liegt eine harte Grenze: Deutsch verbietet die doppelte Verneinung, „ich habe niemanden gesehen\" hat genau ein Negationswort. Italienisch verlangt sie, wenn das Verneinungswort hinter dem Verb steht. <em>Ho visto nessuno</em> ist falsch, obwohl es deiner Logik folgt."
      },
      {
        tip: "<em>Qualcosa</em> nimmt das Adjektiv über <em>di</em>: <em>qualcosa <b>di</b> bello</em>, während du „etwas Schönes\" ohne Präposition bildest. Ebenso <em>niente di grave</em>. Mit einem Infinitiv steht dagegen <em>da</em>: <em>qualcosa <b>da</b> mangiare</em>, dein „etwas zu essen\"."
      }
    ],
    grammar: {
      title: "Die Indefinita",
      table: {
        head: ["Form", "Syntax", "Beispiel"],
        rows: [
          ["qualche", "+ Singular", "qualche giorno fa"],
          ["alcuni / alcune", "+ Plural", "alcuni amici"],
          ["ogni", "unveränderlich + Singular", "ogni settimana"],
          ["ciascuno", "flektiert, Singular", "ciascuna proposta"],
          ["qualcuno / nessuno", "über Personen", "Non c'è nessuno."],
          ["qualcosa / niente", "über Sachen", "qualcosa di nuovo"]
        ]
      },
      examples: [
        { tr: "Wir sehen uns in ein paar Tagen." },
        { tr: "Einige Kollegen sind nicht einverstanden." },
        { tr: "Es ist jedes Mal dieselbe Geschichte." },
        { tr: "Ich habe niemanden im Büro gesehen." },
        { tr: "Niemand hat mir Bescheid gesagt.", note: "vor dem Verb: kein non" },
        { tr: "Willst du etwas zu trinken?" }
      ]
    },
    vocab: [
      "ein paar (+ Singular)",
      "einige",
      "jeder",
      "jeder einzelne",
      "jemand",
      "niemand, kein",
      "etwas",
      "nichts",
      "irgendjemand",
      "nirgendwo",
      "nicht einmal",
      "Bescheid geben"
    ],
    exercises: [
      {
        q: "Welche Kombination ist richtig?",
        opts: ["qualche giorni", "qualche giorno", "qualche dei giorni"],
        why: "Qualche steht immer im Singular."
      },
      { q: "Und hier?", opts: ["alcuni giorno", "alcuni giorni", "alcuno giorni"] },
      { q: "Ergänze: „Non c'è ___ in ufficio.\" (niemand)" },
      { q: "Ergänze: „___ mi ha avvisato.\" (niemand) — am Satzanfang" },
      { q: "Ergänze: „Vuoi qualcosa ___ bere?\"" },
      { q: "Ergänze: „Ho sentito qualcosa ___ strano.\"" },
      {
        q: "Welche Sätze sind richtig?",
        opts: ["Non ho visto nessuno.", "Ho visto nessuno.", "Nessuno è venuto.", "Non nessuno è venuto."]
      },
      { q: "Ergänze.", tr: "Jedes Mal, wenn ich anrufe, geht niemand ran." },
      { tr: "Einige Kollegen sind nicht einverstanden, aber niemand sagt es offen." },
      { tr: "Wir sehen uns in ein paar Tagen, ich schreibe dir." }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Test",
    title: "Test zu Einheit 2",
    objectives: ["kombinierte Pronomen, ci/ne, Relativsätze und Indefinita prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Mi dai il libro?\" →", opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."] },
      { q: "„Hai dato il libro a Marco? — Sì, ___ ho dato.\"" },
      { q: "„Non ___ la faccio più.\"" },
      { q: "„Me ___ vado.\"" },
      { q: "„La città in ___ vivo.\"" },
      { q: "„Il libro ___ ho letto.\"" },
      { q: "Richtig:", opts: ["qualche giorni", "qualche giorno", "alcuni giorno"] },
      { q: "„Vuoi qualcosa ___ mangiare?\"" },
      { tr: "Ich habe es ihm erklärt, aber es braucht Zeit, das zu verstehen." },
      { tr: "Ich schicke es dir, sobald ich kann, gerade schaffe ich es nicht." }
    ]
  },
  "unit:b1-u03": {
    title: "Die italienische Bürokratie",
    grammarNote: "Amtssprache · Dokumente · förmliche Anträge"
  },
  "lesson:b1-u03-l1": {
    theme: "Leben in Italien",
    title: "Die wichtigsten Dokumente",
    objectives: [
      "verstehen, wozu codice fiscale und residenza dienen",
      "die Ausstellung eines Dokuments beantragen",
      "ein einfaches Formular ausfüllen"
    ],
    theory: [
      {
        h: "Der codice fiscale öffnet alles",
        p: "<strong>Il codice fiscale</strong> ist eine sechzehnstellige Steueridentifikationsnummer, die aus Vorname, Nachname, Geburtsdatum und Geburtsort errechnet wird. Ohne ihn kannst du kein Konto eröffnen, keinen Mietvertrag unterschreiben, keine SIM-Karte kaufen und dich bei keinem Arzt anmelden. Die <em>Agenzia delle Entrate</em> stellt ihn sofort und kostenlos aus. Er entspricht deiner Steuer-Identifikationsnummer, wird aber viel häufiger verlangt."
      },
      {
        h: "Residenza ist keine Adresse",
        p: "<strong>La residenza</strong> ist die förmliche Anmeldung bei der Gemeinde (<em>comune</em>) — genau deine Anmeldung beim Einwohnermeldeamt, mit derselben Meldepflicht. Davon hängen Hausarzt, Führerschein, Leistungen und eine lange Liste von Ermäßigungen ab. Nach der Anmeldung kommt allerdings <em>il vigile</em> vorbei, ein Gemeindebeamter, und prüft, ob du wirklich dort wohnst: diesen Hausbesuch kennt dein Meldewesen nicht."
      },
      {
        h: "Drei Wörter, die du an jedem Schalter hörst",
        list: [
          "<em>la marca da bollo</em> — die Gebührenmarke, die man im Tabakladen (<em>tabaccheria</em>) kauft und auf den Antrag klebt",
          "<em>l'autocertificazione</em> — die Eigenerklärung anstelle einer Bescheinigung; sie ist rechtlich bindend",
          "<em>l'appuntamento</em> — viele Ämter lassen ohne online gebuchten Termin niemanden herein"
        ]
      },
      {
        tip: "<em>La tabaccheria</em> ist mehr als ein Zigarettenladen: dort gibt es Gebührenmarken, Fahrscheine und Handyguthaben, und man kann einige Rechnungen bezahlen."
      }
    ],
    grammar: {
      title: "Die Amtssprache",
      table: {
        head: ["Formel", "Bedeutung", "wo"],
        rows: [
          ["Il sottoscritto / la sottoscritta", "der/die Unterzeichnete", "Anträge"],
          ["Si prega di…", "wir bitten Sie…", "Hinweise"],
          ["Ai sensi dell'art. …", "gemäß Artikel…", "Vorschriften"],
          ["In allegato", "anbei", "Formulare"],
          ["Entro e non oltre", "spätestens bis", "Fristen"],
          ["Rilasciare / rilascio", "ausstellen / Ausstellung", "Dokumente"]
        ]
      },
      examples: [
        { tr: "Ich würde gern einen codice fiscale beantragen." },
        { tr: "Ich muss mich in dieser Gemeinde anmelden." },
        { tr: "Es braucht eine Gebührenmarke über sechzehn Euro." },
        { tr: "Ich habe online schon einen Termin gebucht." },
        { tr: "Das Dokument wird sofort ausgestellt." },
        { tr: "Füllen Sie das Formular bitte in Großbuchstaben aus." }
      ]
    },
    vocab: [
      "Steueridentifikationsnummer",
      "amtlicher Wohnsitz, Anmeldung",
      "Gemeinde, Rathaus",
      "Standesamt",
      "Formular",
      "Gebührenmarke",
      "Eigenerklärung",
      "ausstellen (ein Dokument)",
      "Schalter",
      "in Großbuchstaben",
      "Gesundheitskarte",
      "Aufenthaltstitel"
    ],
    culture: {
      title: "Mit italienischen Augen: ein Amt überleben",
      text: "<p>Regel eins: <b>bring immer mehr Unterlagen mit, als die Website nennt</b>. Verschiedene Schalter lesen die Anforderungen verschieden.</p><p>Regel zwei: <b>die autocertificazione ist deine Verbündete</b>. Das Gesetz erlaubt, viele Bescheinigungen durch eine Eigenerklärung zu ersetzen, und der Beamte muss sie annehmen. Gut zu wissen, denn von selbst bietet es niemand an.</p><p>Regel drei: <b>notier dir den Namen des Beamten</b>, der dich bedient hat. Beim nächsten Besuch lässt sich damit die Geschichte deines Vorgangs rekonstruieren.</p>"
    },
    exercises: [
      {
        q: "Wozu dient der codice fiscale?",
        opts: [
          "Nur für Steuern",
          "Für fast jede Formalität: Konto, Vertrag, Arzt",
          "Es ist die Telefonnummer des Finanzamts"
        ]
      },
      { q: "Wo kauft man eine marca da bollo?", opts: ["Im Rathaus", "In einer tabaccheria", "In der Bank"] },
      { q: "Ergänze: „Vorrei ___ il codice fiscale.\" (beantragen)" },
      { q: "Ergänze: „Compili il modulo in ___.\" (Großbuchstaben)" },
      { q: "Ordne zu.", pairs: ["Standesamt", "Schalter", "ausstellen", "Formular"] },
      {
        q: "Was ist eine „autocertificazione\"?",
        opts: [
          "Eine vom Amt ausgestellte Bescheinigung",
          "Eine Eigenerklärung mit Rechtskraft",
          "Eine notariell beglaubigte Erklärung"
        ]
      },
      { q: "„Ich muss mich in dieser Gemeinde anmelden.\"" },
      {
        q: "Ergänze die Bitte am Schalter.",
        tr: "Guten Tag, ich würde gern einen codice fiscale beantragen. Ich habe online schon einen Termin gebucht."
      },
      { tr: "Es braucht eine Gebührenmarke über sechzehn Euro und eine Kopie des Ausweises." },
      { tr: "Ich würde gern einen codice fiscale beantragen, ich habe meinen Reisepass dabei." }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Leben in Italien",
    title: "Banken und Verträge",
    objectives: [
      "ein Bankkonto eröffnen",
      "die Grundbedingungen eines Vertrags verstehen",
      "nach Kosten und Bedingungen fragen"
    ],
    theory: [
      {
        h: "Das Konto und was es kostet",
        p: "<em>Il conto corrente</em> hat normalerweise <em>il canone mensile</em>, eine monatliche Kontoführungsgebühr — eine Zeile, die du kennst. Eine Überweisung ist <strong>il bonifico</strong>, die Kontonummer ist die <strong>IBAN</strong>, dasselbe europäische Format. <em>Il bancomat</em> bedeutet zugleich den Geldautomaten und die Debitkarte."
      },
      {
        h: "Der Vertrag: Wörter, die man verstehen muss",
        list: [
          "<em>le condizioni</em> — die Bedingungen; <em>la clausola</em> — die Klausel",
          "<em>il recesso</em> — der Widerruf; <em>la disdetta</em> — die Kündigung",
          "<em>la scadenza</em> — der Ablauf; <em>il rinnovo automatico</em> — die automatische Verlängerung",
          "<em>le spese di gestione</em> — die Verwaltungsgebühren"
        ]
      },
      {
        h: "Fragen, die sich lohnen",
        p: "<em>Quali sono i costi fissi?</em>, <em>C'è un vincolo di durata?</em>, <em>Come posso disdire?</em>, <em>Il rinnovo è automatico?</em>. Die automatische Verlängerung ist in italienischen Verträgen sehr verbreitet und muss mit Frist gekündigt werden, genau wie bei dir."
      },
      {
        tip: "Beim Unterschreiben kann die Angestellte dich bitten, jede Seite zu paraphieren (<em>siglare</em>) und unter den Klauseln ein zweites Mal zu unterschreiben (<em>doppia firma</em>). Das ist üblich, kein Warnsignal."
      }
    ],
    grammar: {
      title: "Bank und Vertrag",
      table: {
        head: ["Italienisch", "Deutsch", "Kontext"],
        rows: [
          ["il conto corrente", "Girokonto", "Bank"],
          ["il canone mensile", "monatliche Gebühr", "Bank, Telefon"],
          ["il bonifico", "Überweisung", "Zahlungen"],
          ["la disdetta", "Kündigung", "Vertrag"],
          ["il rinnovo automatico", "automatische Verlängerung", "Vertrag"],
          ["il vincolo", "Mindestlaufzeit", "Vertrag"]
        ]
      },
      examples: [
        { tr: "Ich würde gern ein Girokonto eröffnen." },
        { tr: "Wie hoch ist die monatliche Gebühr?" },
        { tr: "Ich muss eine Auslandsüberweisung machen." },
        { tr: "Gibt es eine Mindestlaufzeit?" },
        { tr: "Wie kann ich den Vertrag kündigen?" },
        { tr: "Er verlängert sich automatisch, wenn ich nicht kündige." }
      ]
    },
    vocab: [
      "Girokonto",
      "Überweisung",
      "Kontonummer",
      "Geldautomat, Debitkarte",
      "monatliche Gebühr",
      "Provision, Gebühr",
      "Vertrag",
      "Klausel",
      "Kündigung",
      "Kündigungsfrist",
      "unterschreiben",
      "Mindestlaufzeit"
    ],
    exercises: [
      { q: "Ordne zu.", pairs: ["Überweisung", "Kündigung", "monatliche Gebühr", "Provision"] },
      {
        q: "„Rinnovo automatico salvo disdetta\" bedeutet:",
        opts: [
          "Der Vertrag endet automatisch",
          "Der Vertrag verlängert sich, sofern man nicht kündigt",
          "Der Vertrag kann nicht verlängert werden"
        ]
      },
      { q: "Ergänze: „Vorrei aprire un ___ corrente.\"" },
      { q: "Ergänze: „C'è un ___ di durata?\" (Mindestlaufzeit)" },
      { q: "„Wie kann ich den Vertrag kündigen?\"" },
      {
        q: "In der Bank.",
        setting: "Der Schreibtisch einer Beraterin, Termin vereinbart.",
        lines: [
          { tr: "Guten Tag, wie kann ich Ihnen helfen?" },
          { tr: "Sag, dass du ein Konto eröffnen willst.", answerTr: "Ich würde gern ein Girokonto eröffnen." },
          { tr: "Selbstverständlich. Haben Sie einen codice fiscale und einen Ausweis?" },
          { tr: "Bestätige und frag nach der monatlichen Gebühr.", answerTr: "Ja. Wie hoch ist die monatliche Gebühr?" },
          { tr: "Vier Euro im Monat, kostenlos unter dreißig." }
        ]
      },
      {
        q: "Ergänze die Fragen an die Beraterin.",
        tr: "Welche Gebühren fallen bei Überweisungen an? Und verlängert sich der Vertrag automatisch?"
      },
      { tr: "Ich muss eine Auslandsüberweisung machen." },
      { tr: "Die Gebühr beträgt vier Euro im Monat, Karte inbegriffen." },
      { tr: "Ich wüsste gern, ob es eine Mindestlaufzeit gibt." }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Leben in Italien",
    title: "Beschwerden und Rechte",
    objectives: [
      "eine Beschwerde mündlich und schriftlich vorbringen",
      "den Vertrag oder das Gesetz anführen",
      "höflich, aber bestimmt eskalieren"
    ],
    theory: [
      {
        h: "Was eine Beschwerde wirksam macht",
        p: "Eine italienische Beschwerde wirkt am besten, wenn sie vier Dinge enthält: <b>Fakten mit Daten</b>, <b>einen Verweis auf Vertrag oder Gesetz</b>, <b>eine konkrete Forderung</b> und <b>eine Frist</b>. Emotion schwächt sie, Details stärken sie."
      },
      {
        h: "Schriftliche Formeln",
        list: [
          "<em>Con la presente segnalo che…</em> — hiermit teile ich mit, dass…",
          "<em>Come da contratto…</em> — vertragsgemäß…",
          "<em>Chiedo pertanto…</em> — ich fordere daher…",
          "<em>In mancanza di riscontro entro X giorni…</em> — bei ausbleibender Antwort binnen X Tagen…"
        ]
      },
      {
        h: "Werkzeuge zur Eskalation",
        p: "Die <em>raccomandata A/R</em> (Einschreiben mit Rückschein) und die <strong>PEC</strong> (<em>posta elettronica certificata</em>, E-Mail mit der Rechtswirkung eines Einschreibens) sind die üblichen nächsten Schritte. Das Einschreiben kennst du; die PEC ist der Unterschied, denn in Italien hat sie sich durchgesetzt, während die deutsche De-Mail nie ankam. Verbraucherverbände: <em>Altroconsumo</em>, <em>Federconsumatori</em>."
      },
      {
        tip: "Der Satz <em>Mi riservo di adire le vie legali</em> („ich behalte mir rechtliche Schritte vor\") ist scharf, aber als Schlussformel völlig konventionell. Auf Italienisch liest er sich nicht als Angriff."
      }
    ],
    grammar: {
      title: "Die Sprache der Beschwerde",
      table: {
        head: ["Funktion", "Wendung", "auf Deutsch"],
        rows: [
          ["mitteilen", "Con la presente segnalo che…", "Hiermit teile ich mit, dass…"],
          ["Grundlage", "Come da contratto / ai sensi di legge", "Vertragsgemäß / nach dem Gesetz"],
          ["Forderung", "Chiedo il rimborso / la sostituzione.", "Ich fordere Erstattung / Ersatz."],
          ["Frist", "entro quindici giorni", "binnen fünfzehn Tagen"],
          ["Eskalation", "Mi riservo di adire le vie legali.", "Ich behalte mir rechtliche Schritte vor."],
          ["persönlich", "Vorrei parlare con un responsabile.", "Ich würde gern mit einem Verantwortlichen sprechen."]
        ]
      },
      examples: [
        { tr: "Das Produkt kam beschädigt an." },
        { tr: "Ich würde gern eine Beschwerde einreichen." },
        { tr: "Mir steht binnen vierzehn Tagen eine Erstattung zu." },
        { tr: "Vertragsgemäß sollte der Dienst ab dem Ersten aktiv sein." },
        { tr: "Ich sende Ihnen die Unterlagen anbei." },
        { tr: "Ich erwarte Ihre Rückmeldung." }
      ]
    },
    vocab: [
      "Beschwerde",
      "eine Beschwerde einreichen",
      "Erstattung",
      "Ersatz",
      "beschädigt",
      "mangelhaft",
      "Garantie",
      "Verantwortlicher",
      "Einschreiben",
      "Rückmeldung",
      "Anspruch haben auf",
      "daher"
    ],
    exercises: [
      { q: "Ordne zu.", pairs: ["Erstattung", "mangelhaft", "Garantie", "Rückmeldung"] },
      { q: "Ergänze: „Vorrei ___ un reclamo.\"" },
      { q: "Ergänze: „Ho ___ al rimborso.\" (ich habe Anspruch)" },
      {
        q: "Was ist die PEC?",
        opts: ["Eine Überweisungsart", "E-Mail mit der Rechtswirkung eines Einschreibens", "Eine Identifikationsnummer"]
      },
      { q: "„Das Produkt kam beschädigt an, ich fordere Erstattung.\"" },
      {
        q: "Ergänze den Brief.",
        tr: "Hiermit teile ich mit, dass der Dienst nicht funktioniert. Vertragsgemäß fordere ich binnen fünfzehn Tagen Erstattung."
      },
      { tr: "Ich würde gern mit einem Verantwortlichen sprechen." },
      {
        q: "Welches Element stärkt eine italienische Beschwerde am meisten?",
        opts: [
          "Zu zeigen, wie verärgert du bist",
          "Daten, ein Verweis auf den Vertrag und eine konkrete Forderung",
          "Die Forderung dreimal zu wiederholen"
        ]
      },
      { tr: "Vertragsgemäß sollte der Dienst ab dem Ersten des Monats aktiv sein." },
      { tr: "Ich würde gern eine Beschwerde einreichen: das Produkt ist mangelhaft." }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Leben in Italien",
    title: "Arbeit und Vertragsarten",
    objectives: [
      "die italienischen Arbeitsverträge verstehen",
      "über Arbeitsbedingungen sprechen",
      "nach Gehalt und Urlaub fragen"
    ],
    theory: [
      {
        h: "Vertragsarten",
        list: [
          "<b>tempo indeterminato</b> — unbefristet, der begehrte",
          "<b>tempo determinato</b> — befristet, mit Grenzen für Verlängerungen",
          "<b>partita IVA</b> — selbstständig: du stellst Rechnungen und zahlst deine Beiträge selbst",
          "<b>apprendistato / tirocinio</b> — Ausbildung oder Praktikum, meist für Jüngere"
        ]
      },
      {
        h: "Das Gehalt: netto, brutto und das dreizehnte",
        p: "Italiener sprechen vom Gehalt als <b>monatlichem Netto</b> und als <em>RAL</em> (<em>retribuzione annua lorda</em>, dein Bruttojahresgehalt). Dazu kommt <strong>la tredicesima</strong>, ein dreizehntes Gehalt im Dezember, in manchen Branchen zusätzlich <em>la quattordicesima</em> im Juli. Dein Weihnachtsgeld ist der nächste Verwandte, mit einem Unterschied: die tredicesima ist gesetzlich verankert, kein freiwilliger Bonus."
      },
      {
        h: "Urlaub und Freistellung",
        p: "<em>Le ferie</em> sind der bezahlte Urlaub (meist 26 Werktage), <em>i permessi</em> sind Freistellungsstunden, <em>la malattia</em> ist die Krankschreibung. <em>Il CCNL</em> (<em>contratto collettivo nazionale</em>) ist der Branchentarifvertrag, der die Mindestbedingungen festlegt."
      },
      {
        tip: "Die Frage <em>Qual è la RAL prevista?</em> im Vorstellungsgespräch ist völlig normal und wird erwartet. Sie gilt nicht als unhöflich."
      }
    ],
    grammar: {
      title: "Arbeit und Gehalt",
      table: {
        head: ["Italienisch", "Deutsch", "Hinweis"],
        rows: [
          ["tempo indeterminato", "unbefristeter Vertrag", "der stabilste"],
          ["tempo determinato", "befristeter Vertrag", "mit Enddatum"],
          ["partita IVA", "Selbstständigkeit", "eigene Beiträge"],
          ["la tredicesima", "dreizehntes Gehalt", "im Dezember"],
          ["le ferie", "bezahlter Urlaub", "Werktage"],
          ["il CCNL", "Branchentarifvertrag", "Mindestbedingungen"]
        ]
      },
      examples: [
        { tr: "Ich habe einen unbefristeten Vertrag." },
        { tr: "Ich bin seit drei Jahren selbstständig." },
        { tr: "Wie hoch ist das Bruttojahresgehalt für diese Stelle?" },
        { tr: "Wie viele Urlaubstage gibt es?" },
        { tr: "Die Probezeit beträgt drei Monate." },
        { tr: "Ich beantrage eine Freistellung aus persönlichen Gründen." }
      ]
    },
    vocab: [
      "unbefristeter Vertrag",
      "Selbstständigkeit",
      "Nettogehalt",
      "Bruttojahresgehalt",
      "dreizehntes Gehalt",
      "bezahlter Urlaub",
      "Freistellung",
      "Probezeit",
      "Vorstellungsgespräch",
      "Lebenslauf",
      "einstellen",
      "kündigen (selbst)"
    ],
    exercises: [
      { q: "Ordne zu.", pairs: ["unbefristet", "dreizehntes Gehalt", "bezahlter Urlaub", "Probezeit"] },
      { q: "Was ist die RAL?", opts: ["Das monatliche Netto", "Das Bruttojahresgehalt", "Eine Vertragsart"] },
      { q: "Wer zahlt bei einer partita IVA die Beiträge?", opts: ["Der Arbeitgeber", "Die arbeitende Person", "Niemand"] },
      { q: "Ergänze: „Il ___ di prova è di tre mesi.\"" },
      { q: "„Wie viele Urlaubstage gibt es?\"" },
      {
        q: "Ergänze die Fragen im Vorstellungsgespräch.",
        tr: "Wie hoch ist das angebotene Bruttojahresgehalt? Und wie lange dauert die Probezeit?"
      },
      { q: "„Licenziarsi\" bedeutet:", opts: ["jemanden entlassen", "selbst kündigen", "eine Gehaltserhöhung bekommen"] },
      { tr: "Ich habe seit zwei Jahren einen unbefristeten Vertrag." },
      { tr: "Das dreizehnte Gehalt wird im Dezember zusammen mit dem Monatslohn ausgezahlt." },
      { tr: "Ich wüsste gern, wie hoch das Bruttojahresgehalt für diese Stelle ist." }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Test",
    title: "Test zu Einheit 3",
    objectives: ["den Wortschatz zu Amt, Bank und Arbeit prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      {
        q: "Der codice fiscale dient:",
        opts: ["nur für Steuern", "für fast jede Formalität", "zum Reisen"]
      },
      { q: "Eine marca da bollo kauft man:", opts: ["im Rathaus", "in einer tabaccheria", "in der Bank"] },
      { q: "„Compili il modulo in ___.\"" },
      { q: "„Vorrei aprire un ___ corrente.\"" },
      { q: "„Vorrei ___ un reclamo.\"" },
      { q: "„Ho ___ al rimborso.\"" },
      { q: "Die RAL ist:", opts: ["das monatliche Netto", "das Bruttojahresgehalt", "das dreizehnte Gehalt"] },
      { q: "Ordne zu.", pairs: ["Kündigung", "Überweisung", "bezahlter Urlaub", "Standesamt"] },
      { tr: "Für die Anmeldung braucht man einen Ausweis und einen Mietvertrag." },
      { tr: "Ich würde gern einen codice fiscale beantragen und mich anmelden." }
    ]
  },
  "unit:b1-u04": { title: "Medien und Argumentation", grammarNote: "indirekte Rede · Konnektoren · die Sprache der Presse" },
  "lesson:b1-u04-l1": {
    theme: "Medien",
    title: "Die indirekte Rede",
    objectives: [
      "eine Äußerung in indirekte Rede umformen",
      "die Zeiten richtig verschieben",
      "die Wörter für Zeit und Ort anpassen"
    ],
    theory: [
      {
        h: "Die Zeitenverschiebung",
        p: "Steht das einleitende Verb in der Vergangenheit, rücken die Zeiten des Zitierten einen Schritt zurück: <em>presente → imperfetto</em>, <em>passato prossimo → trapassato</em>, <em>futuro → condizionale passato</em>."
      },
      {
        contrast: "Das ist ein anderes System als deins. Deutsch verschiebt die Zeiten nicht, sondern wechselt den <b>Modus</b>: „er sagte, er <b>sei</b> müde\", Konjunktiv I. Das Italienische lässt den Modus in Ruhe und verschiebt stattdessen die Zeitstufe. Wer den Konjunktiv I übertragen will, landet im falschen Werkzeugkasten: hier wird gerechnet, nicht markiert."
      },
      {
        trap: "Der teuerste Einzelfall ist das Futur: „er sagte, er <b>würde</b> kommen\" wird zu <em>Ha detto che <b>sarebbe venuto</b></em>, also zum <b>Konditional der Vergangenheit</b>, nicht zum einfachen Konditional. „Ha detto che verrebbe\" ist falsch."
      },
      {
        h: "Auch die Wörter für Zeit und Ort ändern sich",
        p: "<em>oggi → quel giorno</em>, <em>ieri → il giorno prima</em>, <em>domani → il giorno dopo</em>, <em>qui → lì</em>, <em>questo → quello</em>, <em>adesso → allora</em>. Ohne das wirkt der Bericht unstimmig, genau wie im Deutschen."
      }
    ],
    grammar: {
      title: "Die Umformungen der indirekten Rede",
      table: {
        head: ["direkt", "indirekt", "Beispiel"],
        rows: [
          ["presente", "imperfetto", "„Lavoro\" → Disse che lavorava."],
          ["passato prossimo", "trapassato", "„Ho finito\" → Disse che aveva finito."],
          ["futuro", "condizionale passato", "„Verrò\" → Disse che sarebbe venuto."],
          ["Imperativ", "di + Infinitiv", "„Vieni!\" → Mi disse di venire."],
          ["Ja/Nein-Frage", "se + Satz", "„Vieni?\" → Mi chiese se venivo."],
          ["cong. presente", "cong. imperfetto", "„Penso che sia\" → Disse che pensava che fosse."]
        ]
      },
      examples: [
        { tr: "Marco sagte, er sei müde." },
        { tr: "Er sagte mir, er würde am nächsten Tag ankommen." },
        { tr: "Er fragte, ob ich ihm helfen könne." },
        { tr: "Er sagte mir, ich solle mir keine Sorgen machen." },
        { tr: "Er erklärte, er habe es schon versucht." },
        { tr: "Er fügte hinzu, dass jener Tag unmöglich sei." }
      ]
    },
    vocab: [
      "sagen, dass",
      "fragen, ob",
      "erklären",
      "hinzufügen",
      "antworten",
      "behaupten",
      "erklären, feststellen",
      "dementieren",
      "am Tag davor / danach",
      "damals",
      "in jenem Moment",
      "nach dem Gesagten"
    ],
    exercises: [
      {
        q: "„Verrò domani\" in indirekter Rede nach einer Vergangenheitsform:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe domani."
        ]
      },
      { q: "„Lavoro molto\" → „Ha detto che ___ molto.\"" },
      { q: "„Ho finito\" → „Ha detto che ___ finito.\"" },
      { q: "„Vieni!\" → „Mi ha detto ___ venire.\"" },
      { q: "„Vieni?\" → „Mi ha chiesto ___ venivo.\"" },
      { q: "Form es um.", tr: "„Ich rufe dich morgen an\" → Er sagte mir, er würde mich am nächsten Tag anrufen." },
      {
        q: "Ordne die verschobenen Zeit- und Ortswörter zu.",
        pairs: ["jener Tag", "der Tag davor", "der Tag danach", "dort"]
      },
      { q: "„Er sagte mir, ich solle mir keine Sorgen machen.\"" },
      { tr: "Er erklärte, er habe es schon mehrmals ohne Erfolg versucht." },
      { tr: "Er sagte mir, er würde am nächsten Tag ankommen." }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Medien",
    title: "Zeitung lesen",
    objectives: [
      "verstehen, wie ein Artikel aufgebaut ist",
      "die Sprache unbestätigter Informationen erkennen",
      "einen Text mit eigenen Worten zusammenfassen"
    ],
    theory: [
      {
        h: "Der journalistische Konditional",
        p: "Italienische Medien benutzen den Konditional für <b>unbestätigte</b> Informationen: <em>Il ministro <b>avrebbe</b> firmato l'accordo</em> heißt „der Minister soll unterschrieben haben, bestätigt ist es nicht\". Das ist keine Spekulation des Journalisten, sondern ein Signal, dass die Quelle nicht offiziell ist."
      },
      {
        contrast: "Dieselbe Aufgabe erledigt deine Presse mit dem Konjunktiv I: „Der Minister habe unterzeichnet.\" Funktion und Warnwert sind identisch, nur das Werkzeug ist ein anderes — Konditional statt Konjunktiv. Wer die Form übersieht, liest den Artikel als Tatsachenbericht."
      },
      {
        h: "Wie ein Artikel gesetzt ist",
        p: "<em>Il titolo</em> (Schlagzeile), <em>l'occhiello</em> (Dachzeile), <em>il sommario</em> (Vorspann), <em>il corpo</em> (Text), <em>la didascalia</em> (Bildunterschrift). Italienische Schlagzeilen sind oft elliptisch und ohne Verb."
      },
      {
        h: "Die Nominalisierung",
        p: "Die Pressesprache macht aus Verben Substantive: <em>hanno approvato la legge</em> → <em>l'approvazione della legge</em>. Das verdichtet den Text und macht ihn anfangs schwer; das Verfahren zu erkennen hilft sehr. Deine Amts- und Zeitungssprache tut dasselbe („die Verabschiedung des Gesetzes\"), du bist also im Vorteil."
      },
      {
        tip: "Die großen Tageszeitungen: <em>Corriere della Sera</em>, <em>la Repubblica</em>, <em>Il Sole 24 Ore</em> (Wirtschaft), <em>Il Post</em> (gut lesbar, ein guter Einstieg für Lernende)."
      }
    ],
    grammar: {
      title: "Die Sprache der Presse",
      table: {
        head: ["Merkmal", "Beispiel", "Bedeutung"],
        rows: [
          ["Konditional", "Avrebbe dichiarato che…", "er habe erklärt"],
          ["Nominalisierung", "l'approvazione della riforma", "die Verabschiedung der Reform"],
          ["Passiv", "La legge è stata approvata.", "das Gesetz wurde verabschiedet"],
          ["elliptische Schlagzeile", "Governo verso la crisi", "Regierung auf die Krise zu"],
          ["Quellen", "secondo fonti vicine a…", "laut Quellen nahe…"],
          ["Zahlen", "in calo / in aumento", "rückläufig / steigend"]
        ]
      },
      examples: [
        { tr: "Laut internen Quellen soll das Unternehmen bereits entschieden haben." },
        { tr: "Die Reform wurde mit 210 Ja-Stimmen verabschiedet." },
        { tr: "Die Beschäftigungszahlen steigen." },
        { tr: "Der Artikel vertritt die These, dass das Problem strukturell ist." },
        { tr: "Die Zeitung hat die Meldung dementiert." },
        { tr: "Zusammengefasst: die zentrale Frage ist die Finanzierung." }
      ]
    },
    vocab: [
      "Tageszeitung",
      "Wochenzeitung",
      "Meldung, Nachricht",
      "Quelle",
      "dementieren",
      "behaupten, vertreten",
      "steigend / rückläufig",
      "Enthüllungsreportage",
      "Leitartikel",
      "Schlagzeile",
      "zusammenfassen",
      "verlässlich"
    ],
    exercises: [
      {
        q: "„Il ministro avrebbe firmato l'accordo\" bedeutet:",
        opts: [
          "Der Minister hat das Abkommen unterschrieben",
          "Der Minister soll unterschrieben haben, unbestätigt",
          "Der Minister würde unterschreiben, wenn er könnte"
        ]
      },
      {
        q: "„L'approvazione della legge\" ist eine Nominalisierung von:",
        opts: ["approvare la legge", "la legge approvata", "legalmente"]
      },
      { q: "Ergänze: „I dati sono in ___.\" (steigend)" },
      { q: "Ergänze: „Il giornale ha ___ la notizia.\" (dementiert)" },
      { q: "Ordne zu.", pairs: ["Tageszeitung", "Quelle", "Enthüllungsreportage", "verlässlich"] },
      {
        q: "„Secondo fonti vicine al governo\" signalisiert:",
        opts: ["offizielle Information", "inoffizielle Information", "die Meinung der Redaktion"]
      },
      {
        q: "Ergänze den Nachrichtensatz.",
        tr: "Laut internen Quellen hatte das Unternehmen bereits entschieden, doch der Sprecher dementierte die Meldung."
      },
      { q: "„Die Reform wurde letzte Woche verabschiedet.\"" },
      { tr: "Laut der Zeitung soll die Regierung ihre Antwort bereits vorbereitet haben." },
      { tr: "Der Artikel vertritt die These, dass das Problem strukturell ist." }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Kommunikation",
    title: "Eine Argumentation zusammenhalten",
    objectives: [
      "Argumente mit Konnektoren verbinden",
      "einen geordneten Redebeitrag bauen",
      "die Monotonie des „und… und… und…\" vermeiden"
    ],
    theory: [
      {
        h: "Ein Konnektor kündigt an, was kommt",
        p: "Ohne Konnektoren ist ein Text eine Liste von Sätzen. <em>Inoltre</em> kündigt eine Ergänzung an, <em>tuttavia</em> eine Wendung, <em>quindi</em> einen Schluss, <em>infatti</em> eine Begründung. Den Konnektor zu wählen gehört zum Argument, es ist keine Verzierung."
      },
      {
        contrast: "Ein struktureller Vorteil für dich: italienische Konnektoren rühren die Wortstellung nicht an. Wo dein „deshalb\" die Inversion erzwingt („deshalb <b>habe ich</b> beschlossen\"), bleibt <em>quindi ho deciso</em> unverändert. Eine Sorge weniger, sobald du dem Satz zutraust, so einfach zu bleiben."
      },
      {
        h: "Paare, die man leicht verwechselt",
        list: [
          "<em>infatti</em> (in der Tat, bestätigend) gegen <em>invece</em> (dagegen, kontrastierend)",
          "<em>anzi</em> (vielmehr, verstärkend oder korrigierend) gegen <em>però</em> (aber)",
          "<em>quindi</em> (also, ein Schluss) gegen <em>allora</em> (dann, auch Füllwort)",
          "<em>comunque</em> (jedenfalls) gegen <em>tuttavia</em> (jedoch, formell)"
        ]
      },
      {
        h: "Ein Gerüst für eine kurze Argumentation",
        p: "<em>Anzitutto…</em> (zunächst) → <em>Inoltre…</em> (außerdem) → <em>Tuttavia…</em> (jedoch) → <em>In conclusione…</em>. Dieses Gerüst reicht für den mündlichen Teil einer B1-Prüfung und für einen kurzen schriftlichen Text."
      }
    ],
    grammar: {
      title: "Konnektoren nach Funktion",
      table: {
        head: ["Funktion", "Konnektoren", "Beispiel"],
        rows: [
          ["Ergänzung", "inoltre, in più, per di più", "Inoltre il prezzo è alto."],
          ["Gegensatz", "però, tuttavia, invece, anzi", "Tuttavia i dati dicono altro."],
          ["Ursache", "perché, poiché, siccome, dato che", "Siccome piove, restiamo."],
          ["Folge", "quindi, perciò, dunque, pertanto", "Quindi ho deciso di partire."],
          ["Erläuterung", "cioè, ovvero, in altre parole", "Cioè, non è possibile."],
          ["Abschluss", "insomma, in conclusione", "Insomma, non conviene."]
        ]
      },
      examples: [
        { tr: "Zunächst sind die Kosten zu hoch." },
        { tr: "Außerdem haben wir nicht genug Zeit." },
        { tr: "Jedoch gibt es eine Alternative." },
        { tr: "Das Projekt ist komplex, also braucht es mehr Mittel." },
        { tr: "Es ist nicht teuer, im Gegenteil, es ist günstig." },
        { tr: "Abschließend schlage ich vor, es zu verschieben." }
      ]
    },
    vocab: [
      "zunächst",
      "außerdem",
      "jedoch",
      "dagegen",
      "vielmehr; im Gegenteil",
      "also",
      "folglich",
      "das heißt",
      "in der Tat",
      "andererseits",
      "abschließend",
      "jedenfalls"
    ],
    exercises: [
      { q: "„Non è caro, ___ è conveniente.\" (im Gegenteil)", opts: ["però", "anzi", "invece"] },
      { q: "„Il progetto è complesso, ___ servono più risorse.\"", opts: ["perciò", "invece", "cioè"] },
      { q: "Ergänze: „___ il costo è troppo alto.\" (zunächst)" },
      { q: "Ergänze: „___, propongo di rimandare.\" (abschließend)" },
      { q: "Ordne Konnektor und Funktion zu.", pairs: ["Ergänzung", "Gegensatz", "Folge", "Erläuterung"] },
      {
        q: "Bau die Argumentation.",
        tr: "Zunächst ist der Preis hoch. Außerdem haben wir keine Zeit. Also schlage ich vor, es zu verschieben."
      },
      {
        q: "Welcher Konnektor gehört zur Schrift und nicht zur Umgangssprache?",
        opts: ["comunque", "pertanto", "allora"]
      },
      { tr: "Jedoch gibt es eine Alternative, die eine Prüfung wert ist." },
      { tr: "Zuerst die Kosten, dann die Fristen: abschließend, es lohnt sich nicht." },
      { tr: "Einerseits stimmt es, andererseits sagen die Zahlen etwas anderes." }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Kommunikation",
    title: "Ein längerer Redebeitrag",
    objectives: [
      "eine zweiminütige Antwort zu einem Thema aufbauen",
      "eine Meinung mit einem Beispiel und Zahlen stützen",
      "mit einem Schluss enden"
    ],
    theory: [
      {
        h: "Eine Struktur, die immer funktioniert",
        list: [
          "<b>These</b>: <em>Secondo me…</em> / <em>Ritengo che…</em>",
          "<b>Argument 1 + Beispiel</b>: <em>Anzitutto… Per esempio…</em>",
          "<b>Argument 2</b>: <em>Inoltre…</em>",
          "<b>Gegenargument und Antwort</b>: <em>C'è chi sostiene che… Tuttavia…</em>",
          "<b>Schluss</b>: <em>In conclusione…</em>"
        ]
      },
      {
        h: "Ein Zugeständnis macht dich stärker",
        p: "Eine Antwort, die der Gegenseite etwas einräumt, bevor sie sie entkräftet, klingt stärker als eine einseitige. Die Formel: <em>È vero che…, tuttavia…</em>, oder <em>Capisco chi dice che…, però…</em>"
      },
      {
        h: "Füllwörter kaufen dir Zeit",
        p: "<em>Diciamo che…</em>, <em>In un certo senso…</em>, <em>Come dire…</em>, <em>Se ci pensi…</em>. Das ist kein Geschwätz: sie halten dich flüssig, während du nach einem Wort suchst. Prüfer werten sie als Kommunikationsstrategie."
      },
      {
        tip: "Übersetz nicht Satz für Satz aus dem Deutschen. Bau einfachere italienische Sätze und verbinde sie mit Konnektoren: das wirkt flüssiger als die getreue Wiedergabe einer verschachtelten deutschen Periode."
      }
    ],
    grammar: {
      title: "Das Gerüst einer Antwort",
      table: {
        head: ["Schritt", "Formel", "auf Deutsch"],
        rows: [
          ["These", "Ritengo che… / Secondo me…", "Ich bin der Ansicht… / Meiner Ansicht nach…"],
          ["Argument", "Anzitutto… / Inoltre…", "Zunächst… / Außerdem…"],
          ["Beispiel", "Per esempio… / Basti pensare a…", "Zum Beispiel… / Man denke nur an…"],
          ["Gegenargument", "C'è chi sostiene che…", "Manche behaupten, dass…"],
          ["Antwort", "Tuttavia… / Va detto però che…", "Jedoch… / Man muss allerdings sagen, dass…"],
          ["Schluss", "In conclusione… / Per questo…", "Abschließend… / Deshalb…"]
        ]
      },
      examples: [
        { tr: "Ich bin der Ansicht, dass Homeoffice nützlich ist, aber nicht für alle." },
        { tr: "Zunächst verkürzt es die Pendelzeit." },
        { tr: "Man denke nur an die Leute, die weit draußen wohnen." },
        { tr: "Manche behaupten, dass es die Zusammenarbeit verringert." },
        { tr: "Man muss allerdings sagen, dass es von der Organisation abhängt." },
        { tr: "Abschließend scheint mir die hybride Lösung die ausgewogenste." }
      ]
    },
    vocab: [
      "der Ansicht sein",
      "behaupten, vertreten",
      "man denke nur an",
      "man muss sagen, dass",
      "manche sagen, dass",
      "in gewissem Sinn",
      "sagen wir",
      "ausgewogen",
      "Thema, Argument",
      "Vorteil / Nachteil",
      "auf Dauer",
      "es lohnt sich"
    ],
    exercises: [
      { q: "Ergänze: „___ che il problema sia strutturale.\" (ich bin der Ansicht)" },
      { q: "Ergänze: „C'è ___ sostiene il contrario.\" (manche)" },
      { q: "Nach „ritengo che\" steht:", opts: ["der Indikativ", "das congiuntivo", "der Infinitiv"] },
      {
        q: "Ordne zu.",
        pairs: ["man denke nur an", "man muss sagen", "auf Dauer", "es lohnt sich"]
      },
      {
        q: "Ergänze die Antwort.",
        tr: "Ich bin der Ansicht, dass hybrides Arbeiten die beste Lösung ist. Zunächst senkt es die Kosten. Jedoch hängt es von der Branche ab."
      },
      { q: "„Man muss allerdings sagen, dass es von der Organisation abhängt.\"" },
      { tr: "Abschließend scheint mir die hybride Lösung die ausgewogenste." },
      {
        q: "Warum lohnt es sich, ein Gegenargument einzubauen?",
        opts: [
          "Um die Antwort zu verlängern",
          "Weil die Antwort stärker und reifer klingt",
          "Weil die Grammatik es verlangt"
        ]
      },
      { tr: "Manche behaupten, dass es die Zusammenarbeit verringert, aber die Zahlen bestätigen das nicht." },
      { tr: "Ich bin der Ansicht, dass es sich lohnt, es zu versuchen, wenigstens sechs Monate lang." }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Prüfung",
    title: "B1-Abschlussprüfung",
    objectives: ["das congiuntivo, die Pronomen, die indirekte Rede und die Argumentation prüfen"],
    theory: [{ p: "Zwölf Aufgaben aus der ganzen Stufe. Bestanden ab 70 %." }],
    exercises: [
      {  },
      { q: "„Penso che tu ___ ragione.\"" },
      { q: "„Benché ___ tardi, esco.\"" },
      { q: "„Hai dato il libro a Marco? — Sì, ___ ho dato.\"" },
      { q: "„Non ___ la faccio più.\"" },
      { q: "„La città in ___ vivo.\"" },
      {
        q: "„Verrò domani\" → indirekte Rede:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe."
        ]
      },
      {
        q: "„Il ministro avrebbe firmato\" bedeutet:",
        opts: ["er hat sicher unterschrieben", "er soll unterschrieben haben", "er würde unterschreiben"]
      },
      { q: "„___, propongo di rimandare.\" (abschließend)" },
      { q: "„Ich glaube nicht, dass sie das Problem verstanden haben.\"" },
      { tr: "Er sagte mir, er würde am nächsten Tag vorbeikommen, aber er kam nicht." },
      { tr: "Ich glaube, es ist eine gute Lösung, wenn auch keine perfekte." }
    ]
  }
});
