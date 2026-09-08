/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/c1-01.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:c1-u01": {
    title: "Alle Werte von SI",
    grammarNote: "reflexives, reziprokes, unpersönliches, passives si · ci si"
  },
  "lesson:c1-u01-l1": {
    theme: "Fortgeschrittene Grammatik",
    title: "Die Werte von si unterscheiden",
    objectives: [
      "alle Funktionen von si in einem Text erkennen",
      "das unpersönliche si vom passiven unterscheiden",
      "ci si richtig verwenden"
    ],
    theory: [
      {
        h: "Eine Form, sechs Aufgaben",
        list: [
          "<b>reflexiv</b>: <em>Marco si lava.</em> — etwas an sich selbst tun",
          "<b>reziprok</b>: <em>Si salutano ogni mattina.</em> — einander",
          "<b>unpersönlich</b>: <em>In Italia si mangia bene.</em> — die Leute allgemein",
          "<b>passiv (passivante)</b>: <em>Qui si vendono panini.</em> — das Verb gleicht sich der Sache an",
          "<b>anleitend</b>: <em>Il volante si tiene così.</em> — so macht man das",
          "<b>toskanisches „wir\"</b>: <em>Stasera noi si va al cinema.</em> — regional"
        ]
      },
      {
        contrast: "Zwei dieser Werte sind deine ohne Abstriche, das reflexive und das reziproke <em>sich</em>. Für die anderen beiden brauchst du zwei verschiedene deutsche Konstruktionen: das unpersönliche si ist dein <em>man</em>, das passive si dein <b>Werden-Passiv</b>, das ebenfalls mit der Sache kongruiert („hier <b>werden</b> Brötchen verkauft\"). Praktische Regel: folgt ein Nomen, denk an das Passiv; folgt keines, denk an „man\"."
      },
      {
        h: "Die Probe unpersönlich gegen passiv",
        p: "Folgt ein Nomen, das direktes Objekt sein könnte, ist es das <b>si passivante</b> und das Verb richtet sich nach dessen Numerus: <em>si <b>vendono</b> case</em>. Folgt keines, oder ist das Verb intransitiv, ist es das <b>si impersonale</b> und die Form bleibt Singular: <em>si <b>lavora</b> troppo</em>."
      },
      {
        h: "Ci si: zwei si stoßen zusammen",
        p: "Ein unpersönliches <em>si</em> mit einem reflexiven Verb ergäbe „si si\", deshalb wird das erste zu <strong>ci</strong>: <em><b>ci si</b> alza presto</em>, <em>ci si abitua a tutto</em>. Bei dir kommt es nie zu diesem Zusammenstoß, weil „man steht früh auf\" zwei verschiedene Wörter benutzt: das ist eine rein italienische Schwierigkeit."
      },
      {
        h: "Zusammengesetzte Zeiten: immer essere",
        p: "Das unpersönliche <em>si</em> nimmt <em>essere</em>, auch wenn das Verb sonst <em>avere</em> verlangt: <em>si <b>è</b> mangiato bene</em>, wo du „man <b>hat</b> gut gegessen\" sagst. Das Partizip bleibt maskulin Singular, ein prädikatives Adjektiv steht dagegen im Plural: <em>si è stati contenti</em>, während dein „man war zufrieden\" im Singular bleibt."
      }
    ],
    grammar: {
      title: "Si: die Entscheidungstabelle",
      table: {
        head: ["Kontext", "Form", "Beispiel"],
        rows: [
          ["reflexiv", "si + Verb", "Si sveglia alle sei."],
          ["reziprok", "si + Plural", "Si scrivono ogni giorno."],
          ["unpersönlich", "si + 3. Sg.", "Si lavora troppo."],
          ["passiv, Singular", "si + 3. Sg.", "Si vende una casa."],
          ["passiv, Plural", "si + 3. Pl.", "Si vendono case."],
          ["unpersönlich reflexiv", "ci si", "Ci si alza presto."],
          ["zusammengesetzte Zeit", "si è + Partizip", "Si è mangiato bene."],
          ["mit Adjektiv", "si è + Plural", "Si è stati fortunati."]
        ]
      },
      examples: [
        { tr: "In diesem Büro arbeitet man zu viel und verdient zu wenig." },
        { tr: "Alle Häuser wurden in zwei Monaten verkauft." },
        { tr: "Man gewöhnt sich sogar an das Schlimmste." },
        { tr: "Es wurde lange diskutiert, ohne Ergebnis." },
        { tr: "Wenn man jung ist, unterschätzt man die Zeit." },
        { tr: "Das Lenkrad hält man mit beiden Händen." }
      ]
    },
    vocab: [
      "sich gewöhnen",
      "sich langweilen",
      "unterschätzen",
      "überschätzen",
      "diskutieren, streiten",
      "verdienen",
      "merken, begreifen",
      "sich anpassen, sich fügen",
      "das Schlimmste / das Beste",
      "ohne Ergebnis",
      "ausführlich",
      "im Allgemeinen"
    ],
    exercises: [
      {
        q: "„Qui si ___ case.\" (hier werden Häuser verkauft)",
        opts: ["vende", "vendono", "vendere"],
        why: "Das si passivante gleicht sich dem Nomen im Plural an."
      },
      {
        q: "„In questo ufficio si ___ troppo.\" (lavorare)",
        opts: ["lavora", "lavorano", "lavorare"],
        why: "Kein direktes Objekt → si impersonale, Singular."
      },
      { q: "Ergänze: „___ si alza presto in campagna.\" (unpersönlich, alzarsi)" },
      { q: "Ergänze: „Si ___ discusso a lungo.\" (zusammengesetzte Zeit)" },
      {
        q: "„Si è stati fortunati\" — warum „stati\" und nicht „stato\"?",
        opts: [
          "Das ist ein Fehler",
          "Ein Adjektiv nach dem unpersönlichen si steht im Plural",
          "Weil essere unregelmäßig ist"
        ]
      },
      {
        q: "In welchen Sätzen ist si das passive (passivante)?",
        opts: ["Si vendono panini.", "Si lavora molto.", "Si affittano appartamenti.", "Ci si annoia."]
      },
      { q: "Ergänze die Formen.", tr: "In Italien isst man gut, aber man arbeitet zu viele Stunden." },
      { q: "„Man gewöhnt sich an alles.\"" },
      { tr: "Es wurde lange diskutiert, aber man kam zu keinem Schluss." },
      { tr: "Wenn man jung ist, unterschätzt man die Zeit." }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Fortgeschrittene Grammatik",
    title: "Stellung des Adjektivs und Bedeutung",
    objectives: [
      "den Bedeutungswechsel durch die Stellung erkennen",
      "ein Adjektiv absichtsvoll setzen",
      "Texte nicht misszuverstehen"
    ],
    theory: [
      {
        h: "Vor dem Nomen: übertragen oder subjektiv",
        p: "Ein Adjektiv <b>vor</b> dem Nomen unterscheidet meist nicht, es charakterisiert: <em>un <b>vecchio</b> amico</em> ist ein alter Freund im Sinn von langjährig, nicht von betagt. <b>Nach</b> dem Nomen unterscheidet es und ist meist wörtlich: <em>un amico <b>vecchio</b></em>."
      },
      {
        contrast: "Diese Lektion hat in deiner Sprache keinen Ort, an dem sie stattfinden könnte: das deutsche Adjektiv steht immer vor dem Nomen und wird dekliniert, eine zweite Position gibt es nicht. Die Mehrdeutigkeit kennst du trotzdem — „ein großer Mann\" heißt bedeutend oder hochgewachsen —, nur hast du kein Mittel, sie aufzulösen, und musst umschreiben: „ein Freund, den ich lange kenne\". Italienisch erledigt das durch Verschieben."
      },
      {
        h: "Paare, die man sich merken sollte",
        list: [
          "<em>un grande uomo</em> (ein bedeutender Mann) — <em>un uomo grande</em> (ein großgewachsener Mann)",
          "<em>un buon medico</em> (ein guter Arzt, fachlich) — <em>un medico buono</em> (ein gütiger Arzt)",
          "<em>un alto magistrato</em> (ein hoher Richter) — <em>un magistrato alto</em> (ein großer Richter)",
          "<em>una certa informazione</em> (eine gewisse Information) — <em>un'informazione certa</em> (eine gesicherte)",
          "<em>un povero uomo</em> (ein armer Kerl) — <em>un uomo povero</em> (ein mittelloser Mann)",
          "<em>diverse persone</em> (mehrere Personen) — <em>persone diverse</em> (verschiedene Personen)",
          "<em>un semplice impiegato</em> (ein bloßer Angestellter) — <em>un impiegato semplice</em> (ein schlichter)"
        ]
      },
      {
        h: "Warum das in C1 zählt",
        p: "Im Journalismus und in der Literatur trägt die Unterscheidung Bedeutung, nicht Stil. <em>Una certa informazione</em> als „eine gesicherte Information\" zu lesen statt als „eine gewisse\" dreht den Satz um."
      }
    ],
    grammar: {
      title: "Stellung und Bedeutung",
      table: {
        head: ["davor", "danach", "der Unterschied"],
        rows: [
          ["un vecchio amico", "un amico vecchio", "langjährig / betagt"],
          ["un grande uomo", "un uomo grande", "bedeutend / großgewachsen"],
          ["un buon medico", "un medico buono", "fachlich gut / gütig"],
          ["una certa notizia", "una notizia certa", "eine gewisse / eine gesicherte"],
          ["un povero uomo", "un uomo povero", "bedauernswert / mittellos"],
          ["diverse persone", "persone diverse", "mehrere / verschiedene"],
          ["un semplice errore", "un errore semplice", "ein bloßer / ein leichter"]
        ]
      },
      examples: [
        { tr: "Er ist ein großer Fachmann, auch wenn er ein schwieriger Mensch ist." },
        { tr: "Ich habe eine gewisse Information bekommen, aber keine gesicherte." },
        { tr: "Es ist nichts als ein bloßes Missverständnis." },
        { tr: "Ich habe mehrere sehr verschiedene Personen kennengelernt." },
        { tr: "Armer Junge: er hat alles verloren." },
        { tr: "Sie wohnt in einem alten, aber wunderschönen Haus." }
      ]
    },
    vocab: [
      "Missverständnis",
      "Fachmann, Profi",
      "die alte Garde",
      "hoher Beamter",
      "ein bloßer, ein reiner",
      "eine gewisse / eine gesicherte",
      "einzig / einmalig",
      "ein anderer / ein echter",
      "ein anderer / ein nagelneuer",
      "einzig / allein",
      "unterscheiden",
      "Nuance"
    ],
    exercises: [
      {
        q: "„Un vecchio amico\" bedeutet:",
        opts: ["ein betagter Freund", "ein langjähriger Freund", "ein ehemaliger Freund"]
      },
      {
        q: "„Un'informazione certa\" bedeutet:",
        opts: ["eine gewisse Information", "eine gesicherte Information", "eine vertrauliche"]
      },
      { q: "„Diverse persone\" bedeutet:", opts: ["verschiedene Personen", "mehrere Personen", "Fremde"] },
      {
        q: "Ordne der Wendung die Bedeutung zu.",
        pairs: ["ein bedeutender Mann", "ein großgewachsener Mann", "ein armer Kerl", "ein mittelloser Mann"]
      },
      {
        q: "Setz das Adjektiv an die richtige Stelle (davor oder danach).",
        tr: "Ich habe eine gewisse Nachricht bekommen, aber keine gesicherte."
      },
      { q: "„Es ist nichts als ein bloßes Missverständnis.\"" },
      {
        q: "Warum zählt diese Unterscheidung im Journalismus?",
        opts: [
          "Weil sie elegant klingt",
          "Weil die Stellung die Bedeutung des Satzes ändert",
          "Weil die Grammatik es verlangt"
        ]
      },
      { tr: "Er ist ein großer Fachmann, auch wenn er ein schwieriger Mensch ist." },
      { tr: "Er ist kein gütiger Mensch, der zufällig Arzt ist, er ist ein guter Arzt: zwei verschiedene Dinge." },
      { tr: "Ich habe mehrere sehr verschiedene Personen kennengelernt." }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Fortgeschrittene Grammatik",
    title: "Verstärker und Superlative",
    objectives: [
      "die verstärkenden Präfixe verwenden",
      "die idiomatischen Superlative kennen",
      "die Formen auf -errimo erkennen"
    ],
    theory: [
      {
        h: "Das Adjektiv wiederholen",
        p: "Der umgangssprachlichste Verstärker ist die Wiederholung: <em>Maria è magra magra</em>, <em>un caffè caldo caldo</em>, <em>piano piano</em>. Das ist kein Fehler und keine Nachlässigkeit, sondern ein lebendiger Mechanismus des gesprochenen Italienisch."
      },
      {
        contrast: "Was das Italienische mit einem zweiten Wort macht, machst du mit einer <b>Zusammensetzung</b>: <em>stanco morto</em> ist todmüde, <em>bagnato fradicio</em> klatschnass, <em>straricco</em> stinkreich, <em>arciconservatore</em> erzkonservativ. Der Mechanismus ist also da, nur klebt er bei dir die Wörter zusammen. Genau deshalb muss man aufpassen: die Bilder decken sich bei todmüde, danach aber nicht mehr."
      },
      {
        h: "Die Präfixe",
        p: "<em>arci-</em> (arcicontento), <em>stra-</em> (straricco, strapieno), <em>iper-</em> (iperattivo), <em>super-</em> (superdotato), <em>ultra-</em> (ultramoderno), <em>mega-</em>. Umgangssprachliches oder journalistisches Register; in einem förmlichen Text nimm <em>estremamente</em>. Deine Reihe ur-, erz-, super-, hyper-, mega- steht auf derselben Stufe."
      },
      {
        h: "Idiomatische Superlative",
        p: "Feste Vergleiche, die man nicht vorhersagen kann: <em>stanco morto</em> (todmüde), <em>bagnato fradicio</em> (klatschnass), <em>ubriaco fradicio</em> (sternhagelvoll), <em>pieno zeppo</em> (proppenvoll), <em>innamorato cotto</em> (bis über beide Ohren verliebt), <em>povero in canna</em> (arm wie eine Kirchenmaus), <em>buono come il pane</em>. Ab dem dritten Eintrag geht die Bildwelt auseinander, und wer das deutsche Bild überträgt, baut Sätze, die niemand sagt."
      },
      {
        h: "Die Formen auf -errimo und -entissimo",
        p: "Gelehrte Superlative von Adjektiven lateinischen Ursprungs: <em>acre → acerrimo</em>, <em>celebre → celeberrimo</em>, <em>integro → integerrimo</em>, <em>misero → miserrimo</em>; dazu <em>benevolo → benevolentissimo</em>. Deutsch hat dafür keine lebendige Reihe, also gibt es hier nichts zu übertragen, nur zu lernen."
      }
    ],
    grammar: {
      title: "Die Verstärker",
      table: {
        head: ["Typ", "Beispiel", "Register"],
        rows: [
          ["Wiederholung", "magra magra", "gesprochen"],
          ["-issimo", "bellissimo", "neutral"],
          ["Präfix", "straricco, iperattivo", "umgangssprachlich / Presse"],
          ["Wendung", "stanco morto", "gesprochen"],
          ["-errimo", "celeberrimo", "geschrieben"],
          ["förmlich", "estremamente / oltremodo", "geschrieben"]
        ]
      },
      examples: [
        { tr: "Ich bin todmüde, ich kann nicht mehr." },
        { tr: "Der Saal war proppenvoll." },
        { tr: "Es ist ein hochberühmter Fall der Rechtsgeschichte." },
        { tr: "Er ist überglücklich über die Nachricht." },
        { tr: "Einen richtig heißen Tee, bitte." },
        { tr: "Ein erbitterter Gegner der Regierung." }
      ]
    },
    vocab: [
      "todmüde",
      "sternhagelvoll",
      "proppenvoll",
      "klatschnass",
      "bis über beide Ohren verliebt",
      "arm wie eine Kirchenmaus",
      "herzensgut",
      "steinreich",
      "hyperaktiv",
      "hochberühmt",
      "erbittert, scharf",
      "über die Maßen"
    ],
    exercises: [
      {
        q: "Ordne der Wendung die Bedeutung zu.",
        pairs: ["todmüde", "proppenvoll", "bis über beide Ohren verliebt", "sehr arm"]
      },
      { q: "„Ubriaco fradicio\" bedeutet:", opts: ["leicht angeheitert", "sternhagelvoll", "klatschnass"] },
      { q: "Bilde den gelehrten Superlativ von „celebre\": ___" },
      { q: "Bilde den gelehrten Superlativ von „acre\": ___" },
      {
        q: "„Magra magra\" ist:",
        opts: ["ein Stilfehler", "ein umgangssprachlicher Verstärker durch Wiederholung", "ein Plural"]
      },
      { q: "Welche Variante passt in einen förmlichen Text?", opts: ["straricco", "ricchissimo", "megaricco"] },
      { q: "Ergänze die Wendungen.", tr: "Nach der Reise war ich todmüde, und der Saal war proppenvoll." },
      { q: "„Er ist ein erbitterter Gegner dieser Reform.\"" },
      { tr: "Er war klatschnass und todmüde, aber er lächelte." },
      { tr: "Der Saal war proppenvoll, es war kein Platz zu finden." }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Test",
    title: "Test zu Einheit 1",
    objectives: ["das si, die Adjektivstellung und die Superlative prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Qui si ___ case.\"", opts: ["vende", "vendono", "vendere"] },
      { q: "„In ufficio si ___ troppo.\" (lavorare)", opts: ["lavora", "lavorano", "lavorare"] },
      { q: "„___ si alza presto.\" (unpersönlich, reflexiv)" },
      { q: "„Si ___ discusso a lungo.\"" },
      { q: "„Un vecchio amico\":", opts: ["betagt", "langjährig", "ehemalig"] },
      { q: "„Diverse persone\":", opts: ["verschiedene Personen", "mehrere Personen", "Fremde"] },
      { q: "Superlativ von „celebre\": ___" },
      { q: "Ordne zu.", pairs: ["todmüde", "proppenvoll", "erbittert", "sehr arm"] },
      { tr: "Alle Häuser wurden in weniger als zwei Monaten verkauft." },
      { tr: "Man gewöhnt sich an alles, sogar an das Schlimmste." }
    ]
  },
  "unit:c1-u02": {
    title: "Verben mit eingebauten Pronomen",
    grammarNote: "verbi pronominali · Phraseologie · gesprochenes Register"
  },
  "lesson:c1-u02-l1": {
    theme: "Fortgeschrittene Grammatik",
    title: "Verben mit eingebauten Pronomen",
    objectives: [
      "Verben mit verschmolzenen Pronomen erkennen",
      "sie in zusammengesetzten Zeiten konjugieren",
      "sie im echten Gespräch verwenden"
    ],
    theory: [
      {
        h: "Die Bedeutung lässt sich nicht aus den Teilen erschließen",
        p: "<em>Prendersela</em> heißt nicht „es sich nehmen\", sondern beleidigt sein. <em>Cavarsela</em> hat mit Herausziehen nichts zu tun. Das sind eigenständige Lexikoneinheiten und werden als Vokabeln gelernt, nicht als Konstruktionen."
      },
      {
        contrast: "Das Prinzip kennst du von deinen trennbaren Verben: „aufgeben\" ist nicht „oben geben\", und „es auf jemanden abgesehen haben\" ist genau <em>avercela con</em>. Auch dein <em>es</em> in „ich schaffe <b>es</b>\" ist ein Pronomen ohne Bezug, wie das <em>la</em> in <em>ce la faccio</em>. Was fehlt, ist die Maschinerie: deine Partikel bleibt ein Wort für sich, das italienische Klitikon wandert vor das Verb und gleicht das Partizip an."
      },
      {
        h: "Die Konjugation",
        p: "Die Pronomen lösen sich und treten vor das Verb: <em>cavarsela → <b>me la</b> cavo</em>, <em>te la cavi</em>, <em>se la cava</em>. In zusammengesetzten Zeiten immer <em>essere</em>, und das Partizip gleicht sich dem <em>la</em> an: <em>me la sono cavata</em>, <em>ce l'ho fatta</em>."
      },
      {
        h: "Die häufigsten",
        list: [
          "<em>farcela</em> — es schaffen: <em>Ce l'ho fatta!</em>",
          "<em>cavarsela</em> — zurechtkommen: <em>Me la cavo con l'italiano.</em>",
          "<em>prendersela</em> — beleidigt sein: <em>Non te la prendere.</em>",
          "<em>andarsene</em> — weggehen: <em>Me ne vado.</em>",
          "<em>fregarsene</em> — sich nicht darum scheren: <em>Se ne frega.</em>",
          "<em>avercela con</em> — es auf jemanden abgesehen haben: <em>Ce l'ha con me.</em>",
          "<em>sentirsela</em> — sich imstande fühlen: <em>Non me la sento.</em>",
          "<em>intendersene</em> — sich auskennen: <em>Se ne intende di vini.</em>"
        ]
      }
    ],
    grammar: {
      title: "Die verbi pronominali konjugieren",
      table: {
        head: ["Person", "farcela", "cavarsela", "andarsene"],
        rows: [
          ["io", "ce la faccio", "me la cavo", "me ne vado"],
          ["tu", "ce la fai", "te la cavi", "te ne vai"],
          ["lui / lei", "ce la fa", "se la cava", "se ne va"],
          ["noi", "ce la facciamo", "ce la caviamo", "ce ne andiamo"],
          ["voi", "ce la fate", "ve la cavate", "ve ne andate"],
          ["loro", "ce la fanno", "se la cavano", "se ne vanno"],
          ["Vergangenheit", "ce l'ho fatta", "me la sono cavata", "me ne sono andato/a"]
        ]
      },
      examples: [
        { tr: "Ich habe es geschafft, ich habe die Prüfung bestanden!" },
        { tr: "Mit Deutsch komme ich ganz gut zurecht." },
        { tr: "Nimm es nicht krumm, es war nicht gegen dich gerichtet." },
        { tr: "Er ist gegangen, ohne sich zu verabschieden." },
        { tr: "Ich fühle mich heute Abend nicht imstande zu fahren." },
        { tr: "Hast du etwas gegen mich?" }
      ]
    },
    vocab: [
      "es schaffen",
      "zurechtkommen",
      "beleidigt sein",
      "weggehen, verschwinden",
      "sich nicht darum scheren",
      "es auf jemanden abgesehen haben",
      "sich imstande fühlen",
      "sich auskennen",
      "allein zurechtkommen",
      "aufhören",
      "es lassen (umgangssprachlich)",
      "sich großartig amüsieren"
    ],
    exercises: [
      { q: "Ergänze: „___ l'ho fatta!\" (ich habe es geschafft)" },
      { q: "Ergänze: „___ la cavo con l'italiano.\" (ich komme zurecht)" },
      { q: "Ergänze: „Non ___ la prendere.\" (nimm es nicht krumm)" },
      {
        q: "„Se ne frega di tutto\" bedeutet:",
        opts: ["er sorgt sich um alles", "alles ist ihm gleichgültig", "er kümmert sich um alles"]
      },
      {
        q: "Warum „me la sono cavata\" und nicht „cavato\"?",
        opts: ["Das ist ein Fehler", "Das Partizip gleicht sich dem la an", "Weil eine Frau spricht"]
      },
      { q: "Ordne zu.", pairs: ["sich imstande fühlen", "sich auskennen", "aufhören", "sich großartig amüsieren"] },
      { q: "Ergänze die Pronomen.", tr: "Ich fühle mich nicht imstande zu fahren, ich gehe zu Fuß." },
      { q: "„Hast du etwas gegen mich?\"" },
      { tr: "Er ist gegangen, ohne sich von jemandem zu verabschieden." },
      { tr: "Ich komme ganz gut zurecht, aber wirklich auskennen tue ich mich nicht." }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Fortgeschrittene Grammatik",
    title: "Das modale und stilistische Passiv",
    objectives: [
      "andare + Partizip für Notwendigkeit verwenden",
      "venire wählen, um den Vorgang zu betonen",
      "diese Formen in Amtstexten erkennen"
    ],
    theory: [
      {
        h: "Andare = muss werden",
        p: "<em>La domanda <b>va presentata</b> entro il 30.</em> Nicht „der Antrag wird eingereicht\", sondern „der Antrag <b>ist einzureichen</b>\". Dein Gerundivum trifft es genau und mit derselben Knappheit; ein gewöhnliches Passiv trägt die Verpflichtung nicht, und genau da entsteht das Missverständnis."
      },
      {
        h: "Auf die Einschränkung achten",
        p: "Das Passiv mit <em>andare</em> funktioniert nur in <b>einfachen Zeiten</b> (Präsens, Imperfekt, Futur). „È andato presentato\" gibt es in diesem Sinn nicht: in zusammengesetzten Zeiten braucht es <em>doveva essere presentato</em>."
      },
      {
        h: "Venire: Vorgang statt Zustand",
        p: "<em>La legge <b>viene applicata</b> dal 2020</em> betont die laufende Handlung, während <em>è applicata</em> als Zustand gelesen werden kann. Es ist dein Unterschied zwischen Werden- und Zustandspassiv, und <em>venire</em> ist in juristischen und behördlichen Texten sehr häufig."
      },
      {
        h: "Eine dritte Variante: essere da + Infinitiv",
        p: "<em>Questo capitolo <b>è da rivedere</b>.</em> Nahe an <em>va rivisto</em>, etwas leichter und gesprochener. Dein „dieses Kapitel ist noch zu überarbeiten\" trägt dieselbe offene Aufgabe."
      }
    ],
    grammar: {
      title: "Die Passivvarianten",
      table: {
        head: ["Form", "Bedeutung", "Einschränkung"],
        rows: [
          ["essere + Partizip", "allgemeines Passiv", "alle Zeiten"],
          ["venire + Partizip", "Vorgang, Wiederholung", "nur einfache Zeiten"],
          ["andare + Partizip", "Notwendigkeit", "nur einfache Zeiten"],
          ["si passivante", "gesprochenes Register", "3. Person"],
          ["essere da + Infinitiv", "noch zu erledigen", "leichteres Register"],
          ["andare perso / smarrito", "unabsichtlicher Verlust", "lexikalische Ausnahme"]
        ]
      },
      examples: [
        { tr: "Der Antrag ist bis zum Dreißigsten einzureichen." },
        { tr: "Diese Daten sind vor der Veröffentlichung zu prüfen." },
        { tr: "Die Vorschriften werden jedes Jahr aktualisiert." },
        { tr: "Das Kapitel ist noch zu überarbeiten." },
        { tr: "Zwei Dokumente sind verloren gegangen.", note: "andare + perso: genau dein „verloren gehen\"" },
        { tr: "Alle Anträge wurden abgelehnt." }
      ]
    },
    vocab: [
      "einen Antrag einreichen",
      "prüfen, überprüfen",
      "aktualisieren",
      "ablehnen",
      "die Vorschriften, die Ordnung",
      "Veröffentlichung",
      "verloren gehen",
      "verlegen",
      "noch zu überarbeiten",
      "fristgerecht",
      "formale Verpflichtung",
      "geltend, in Kraft"
    ],
    exercises: [
      {
        q: "„La domanda va presentata\" bedeutet:",
        opts: ["Der Antrag wird gerade eingereicht", "Der Antrag muss eingereicht werden", "Der Antrag wurde eingereicht"]
      },
      {
        q: "Welcher Satz ist falsch?",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."],
        why: "Das Passiv mit andare funktioniert in zusammengesetzten Zeiten nicht."
      },
      { q: "Ergänze: „Questi dati ___ verificati.\" (sind zu prüfen)" },
      { q: "Ergänze: „Il regolamento ___ aggiornato ogni anno.\" (venire)" },
      {
        q: "„Sono andati persi due documenti\" bedeutet:",
        opts: ["Die Dokumente mussten verloren werden", "Zwei Dokumente sind verloren gegangen", "Die Dokumente sind weggegangen"]
      },
      {
        q: "Ergänze die Formen.",
        tr: "Der Antrag ist bis zum Dreißigsten einzureichen; die Daten werden vom Amt geprüft."
      },
      { q: "„Dieses Kapitel ist noch zu überarbeiten.\"" },
      { tr: "Alle Anträge wurden abgelehnt." },
      { tr: "Das Formular ist vollständig auszufüllen und unten zu unterschreiben." },
      { tr: "Diese Daten sind vor der Veröffentlichung zu prüfen." }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Wortschatz",
    title: "Die Phraseologie im Gebrauch",
    objectives: [
      "die häufigen Wendungen der Umgangssprache und der Presse verstehen",
      "einige davon natürlich verwenden",
      "Lehnübersetzungen aus dem Deutschen vermeiden"
    ],
    theory: [
      {
        h: "Eine Wendung ist eine Abkürzung, kein Schmuck",
        p: "Eine italienische Wendung ersetzt meist einen ganzen Satz. <em>Non ci piove</em> heißt „daran gibt es keinen Zweifel\", <em>tagliare la testa al toro</em> heißt, die Sache mit einer Entscheidung zu beenden. An der richtigen Stelle verkürzen sie und klingen einheimisch."
      },
      {
        h: "Wendungen, die du wirklich hören wirst",
        list: [
          "<em>in bocca al lupo</em> — viel Erfolg (Antwort: <em>crepi</em>)",
          "<em>non vedo l'ora</em> — ich kann es kaum erwarten",
          "<em>avere le mani in pasta</em> — die Finger im Spiel haben",
          "<em>prendere in giro</em> — auf den Arm nehmen",
          "<em>costare un occhio della testa</em> — ein Vermögen kosten",
          "<em>essere al verde</em> — blank sein",
          "<em>fare il punto</em> — eine Zwischenbilanz ziehen",
          "<em>mettere nero su bianco</em> — schwarz auf weiß festhalten"
        ]
      },
      {
        contrast: "Zwei davon sind wörtlich deine, das Schwarz auf Weiß und die Finger im Spiel — und die zweite ist genau deshalb heikel. Im Deutschen schwingt Verdacht mit, im Italienischen meist Anerkennung: wer <em>ha le mani in pasta</em>, ist gut vernetzt und einflussreich, nicht notwendig verwickelt. Beim Auge dagegen trennen sich die Bilder: <em>un occhio della testa</em> ist bei dir ein Vermögen."
      },
      {
        h: "Falsche Freunde zwischen Deutsch und Italienisch",
        p: "<em>Firma</em> ist die Unterschrift, nicht die Firma (<em>ditta, azienda</em>). <em>Caldo</em> heißt warm, nicht kalt (<em>freddo</em>) — die Umkehrung mit dem größten Schadenspotenzial. <em>Confetti</em> sind Zuckermandeln, kein Konfetti (<em>coriandoli</em>). <em>Morbido</em> heißt weich, nicht morbid (<em>morboso</em>). <em>Camera</em> ist das Zimmer, keine Kamera (<em>telecamera</em>). <em>Cantina</em> ist der Keller, keine Kantine (<em>mensa</em>). Diese sechs richten mehr an als jeder Grammatikpunkt dieser Stufe, weil sie perfekt klingen."
      }
    ],
    grammar: {
      title: "Wendungen und falsche Freunde",
      table: {
        head: ["Italienisch", "Bedeutung", "Hinweis"],
        rows: [
          ["non ci piove", "daran gibt es keinen Zweifel", "Wendung"],
          ["non vedo l'ora", "ich kann es kaum erwarten", "+ di + Infinitiv"],
          ["essere al verde", "blank sein", "Wendung"],
          ["mettere nero su bianco", "schwarz auf weiß festhalten", "gleiches Bild wie im Deutschen"],
          ["firma", "Unterschrift", "falscher Freund"],
          ["caldo", "warm", "falscher Freund"],
          ["cantina", "Keller", "falscher Freund"],
          ["confetti", "Zuckermandeln", "falscher Freund"]
        ]
      },
      examples: [
        { tr: "Ich kann es kaum erwarten, dich wiederzusehen." },
        { tr: "Diese Reise hat ein Vermögen gekostet." },
        { tr: "Ziehen wir eine Zwischenbilanz." },
        { tr: "Halten wir das alles schwarz auf weiß fest." },
        { tr: "Er hat überall die Finger im Spiel." },
        { tr: "Nimmst du mich auf den Arm?" }
      ]
    },
    vocab: [
      "daran gibt es keinen Zweifel",
      "ich kann es kaum erwarten",
      "blank sein",
      "ein Vermögen kosten",
      "auf den Arm nehmen",
      "eine Zwischenbilanz ziehen",
      "schwarz auf weiß",
      "die Finger im Spiel haben",
      "gegen eine Wand reden",
      "Unterschrift (nicht: Firma)",
      "warm (nicht: kalt)",
      "Keller (nicht: Kantine)"
    ],
    exercises: [
      {
        q: "Ordne der Wendung ihre Bedeutung zu.",
        pairs: ["daran gibt es keinen Zweifel", "blank sein", "eine Zwischenbilanz ziehen", "auf den Arm nehmen"]
      },
      { q: "„La firma\" bedeutet auf Italienisch:", opts: ["eine Firma", "eine Unterschrift", "eine Marke"] },
      { q: "„La colazione\" ist:", opts: ["das Abendessen", "das Frühstück", "das Mittagessen"] },
      { q: "Ergänze: „Non vedo l'ora ___ rivederti.\"" },
      {
        q: "„Costare un occhio della testa\" bedeutet:",
        opts: ["wehtun", "sehr viel kosten", "unbezahlbar sein"]
      },
      {
        q: "Welche sind falsche Freunde für Deutschsprachige?",
        opts: ["caldo", "cantina", "tavolo", "confetti"]
      },
      { q: "Ergänze die Wendungen.", tr: "Diese Reise hat ein Vermögen gekostet und jetzt bin ich blank." },
      { q: "„Ziehen wir eine Zwischenbilanz und halten wir sie schwarz auf weiß fest.\"" },
      { tr: "Daran gibt es keinen Zweifel: die Entscheidung muss heute fallen." },
      { tr: "Ich kann es kaum erwarten, dass dieses Projekt zu Ende geht." }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Test",
    title: "Test zu Einheit 2",
    objectives: ["die verbi pronominali, das modale Passiv und die Phraseologie prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      { q: "„___ l'ho fatta!\"" },
      { q: "„___ la cavo con l'italiano.\"" },
      { q: "„Non ___ la prendere.\"" },
      { q: "„Se ne frega\":", opts: ["er sorgt sich", "es ist ihm gleichgültig", "er kümmert sich"] },
      { q: "„Questi dati ___ verificati.\" (sind zu)" },
      {
        q: "Falsch:",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."]
      },
      { q: "„La firma\":", opts: ["eine Firma", "eine Unterschrift", "eine Marke"] },
      { q: "Ordne zu.", pairs: ["blank sein", "kein Zweifel", "Zwischenbilanz ziehen", "schwarz auf weiß"] },
      { tr: "Ich fühle mich nicht imstande, jetzt zu entscheiden, ich überlege es mir und sage Bescheid." },
      { tr: "Ich habe es geschafft, aber knapp." }
    ]
  },
  "unit:c1-u03": {
    title: "Register und Textkohäsion",
    grammarNote: "burocratese · gesprochenes Italienisch · Linksversetzung · indirekte Rede"
  },
  "lesson:c1-u03-l1": {
    theme: "Stil",
    title: "Die Amtssprache: lesen, nicht schreiben",
    objectives: [
      "die typischen bürokratischen Konstruktionen entschlüsseln",
      "sie in gewöhnliches Italienisch zurückübersetzen",
      "erkennen, wann das Register übertrieben wird"
    ],
    theory: [
      {
        h: "Woran man sie erkennt",
        list: [
          "Nominalisierung: <em>si procede all'erogazione</em> statt <em>si eroga</em>",
          "Passiv und Unpersönliches: <em>si comunica che…</em>",
          "Rückverweis: <em>di cui sopra</em>, <em>il predetto</em>, <em>il suddetto</em>",
          "zusammengesetzte Präpositionen: <em>ai sensi di</em>, <em>in ottemperanza a</em>, <em>ai fini di</em>",
          "latinisierender Wortschatz: <em>effettuare</em> statt <em>fare</em>, <em>trattasi di</em> statt <em>si tratta di</em>"
        ]
      },
      {
        contrast: "Jeden dieser Züge wirst du wiedererkennen, denn dein Amtsdeutsch arbeitet genauso, teils noch ausgeprägter: „Es wird darauf hingewiesen, dass\", „gemäß § 5\", „vorgenannt\", „besagtes Dokument\", „die Zahlung ist zu leisten\", „in Erfüllung von\". Beim Lesen ist das ein enormer Vorsprung, beim Schreiben eine Versuchung, und der Rat lautet in beiden Sprachen gleich: verstehen, nicht nachahmen."
      },
      {
        h: "Wozu sie dient",
        p: "Das Amtsregister soll Genauigkeit und Unpersönlichkeit sichern, oft auf Kosten der Lesbarkeit. Auf C1 ist es eine nötige Fertigkeit, diese Texte zu <b>verstehen</b>; so zu <b>schreiben</b> ist außerhalb eines juristischen Kontexts nicht ratsam."
      },
      {
        h: "Die Gegenbewegung: vereinfachen",
        p: "<em>Si comunica che il pagamento dovrà essere effettuato entro il termine di cui sopra</em> → <em>Il pagamento va fatto entro la data indicata.</em> Lohnt sich bei jedem Amtsbrief, der dich erreicht: es kürzt und klärt."
      }
    ],
    grammar: {
      title: "Burocratese und seine Übersetzung",
      table: {
        head: ["amtlich", "gewöhnliches Italienisch", "auf Deutsch"],
        rows: [
          ["si comunica che", "vi informiamo che", "es wird darauf hingewiesen, dass"],
          ["ai sensi dell'art. 5", "secondo l'articolo 5", "gemäß Artikel 5"],
          ["di cui sopra", "indicato prima", "vorgenannt"],
          ["effettuare il pagamento", "pagare", "die Zahlung leisten"],
          ["in ottemperanza a", "seguendo", "in Erfüllung von"],
          ["il predetto documento", "quel documento", "besagtes Dokument"],
          ["trattasi di", "si tratta di", "es handelt sich um"]
        ]
      },
      examples: [
        { tr: "Es wird darauf hingewiesen, dass das Amt am 2. Juni geschlossen bleibt." },
        { tr: "Die Zahlung ist binnen dreißig Tagen zu leisten." },
        { tr: "Nach geltender Vorschrift ist der Antrag unzulässig." },
        { tr: "Bitte fügen Sie eine Kopie des vorgenannten Dokuments bei." },
        { tr: "Die genannte Frist ist nicht verlängerbar." },
        { tr: "Sie werden aufgefordert, die Tätigkeit unverzüglich einzustellen." }
      ]
    },
    vocab: [
      "gemäß, nach Maßgabe von",
      "in Erfüllung von",
      "vorgenannt",
      "besagter",
      "vornehmen, durchführen",
      "Ausschlussfrist, nicht verlängerbar",
      "unzulässig",
      "die geltenden Vorschriften",
      "jemanden auffordern",
      "Antrag, Gesuch",
      "öffentliche Stelle",
      "Nichterfüllung"
    ],
    exercises: [
      { q: "Ordne den amtlichen dem gewöhnlichen Ausdruck zu.", pairs: ["pagare", "secondo", "indicato prima", "si tratta di"] },
      {
        q: "„Il termine è perentorio\" bedeutet:",
        opts: ["die Frist ist unverbindlich", "die Frist ist nicht verlängerbar", "die Frist wurde verlängert"]
      },
      {
        q: "„La domanda è irricevibile\" bedeutet:",
        opts: [
          "der Antrag ist unvollständig",
          "der Antrag kann nicht angenommen werden",
          "der Antrag wird bearbeitet"
        ]
      },
      { q: "Vereinfache: „Il pagamento dovrà essere effettuato\" → „Il pagamento ___ fatto\"" },
      {
        q: "Vereinfache den amtlichen Satz.",
        tr: "Es wird darauf hingewiesen, dass der vorgenannte Antrag unzulässig ist."
      },
      { q: "„Es wird darauf hingewiesen, dass das Amt geschlossen bleibt.\"" },
      {
        q: "Sollte man auf C1 in burocratese schreiben?",
        opts: [
          "Ja, das zeigt Beherrschung",
          "Nein, verstehen ja, aber klarer schreiben",
          "Ja, in jedem beruflichen Zusammenhang"
        ]
      },
      { tr: "Bitte fügen Sie eine Kopie des Dokuments bei." },
      { tr: "Nach geltender Vorschrift ist der Antrag unzulässig." },
      { tr: "Die Zahlung ist innerhalb der angegebenen Frist zu leisten." }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Stil",
    title: "Das gesprochene Italienisch und der Neostandard",
    objectives: [
      "die Merkmale des gesprochenen Italienisch erkennen",
      "die Linksversetzung verwenden, um natürlich zu klingen",
      "den Neostandard von einem Fehler unterscheiden"
    ],
    theory: [
      {
        h: "Neostandard: kein Fehler, ein anderes Register",
        list: [
          "<em>lui / lei</em> als Subjekt statt <em>egli / ella</em> — heute die Norm",
          "<em>gli</em> statt <em>loro</em> („ihnen\") — auch im informellen Schreiben",
          "das Allzweck-<em>che</em>: <em>il giorno che sono arrivato</em>",
          "<em>ci</em> statt <em>vi</em> für den Ort: <em>ci vado</em>",
          "das Imperfekt im Bedingungssatz: <em>se lo sapevo…</em>"
        ]
      },
      {
        h: "Die Versetzung: den Akzent verschieben",
        p: "<em><b>Il libro</b>, l'ho letto ieri.</em> (Linksversetzung) und <em>L'ho letto ieri, <b>il libro</b>.</em> (rechts). Das herausgestellte Element ist das Thema, und das Pronomen „hält es fest\"."
      },
      {
        contrast: "Die Konstruktion gibt es bei dir auch — „das Buch, das hab ich gestern gelesen\" —, aber sie bleibt umgangssprachlich markiert und wirkt geschrieben salopp. Im Italienischen ist sie unmarkiert: sie fehlen zu lassen ist das, was steif klingt. Hier musst du also nicht eine Struktur lernen, sondern ihr Register neu bewerten."
      },
      {
        h: "Das präsentative c'è",
        p: "<em>C'è Marco che ti cerca.</em> Die Konstruktion führt ein neues Element ins Gespräch ein. Dein „da ist Marco, der dich sucht\" tut dasselbe."
      },
      {
        trap: "Der Neostandard ist im Gespräch und im informellen Schreiben akzeptiert. In einem Prüfungstext, einer förmlichen Mail oder einer Veröffentlichung gilt der Standard: <em>se avessi saputo</em>, nicht „se sapevo\"."
      }
    ],
    grammar: {
      title: "Merkmale des Gesprochenen",
      table: {
        head: ["Merkmal", "Beispiel", "Register"],
        rows: [
          ["Linksversetzung", "Il libro, l'ho letto.", "gesprochen, akzeptiert"],
          ["Rechtsversetzung", "L'ho letto, il libro.", "gesprochen"],
          ["präsentatives c'è", "C'è Marco che ti cerca.", "gesprochen"],
          ["gli statt loro", "Gli ho detto tutto.", "Neostandard"],
          ["Allzweck-che", "Il giorno che sono partito", "gesprochen"],
          ["hypothetisches Imperfekt", "Se lo sapevo, non venivo.", "nur gesprochen"]
        ]
      },
      examples: [
        { tr: "In Rom war ich noch nie.", note: "Versetzung + ci" },
        { tr: "Den Kaffee trinke ich später." },
        { tr: "Da wartet deine Schwester draußen auf dich." },
        { tr: "Ich habe ihnen gesagt, sie sollen sich keine Sorgen machen." },
        { tr: "An diese Geschichte erinnere ich mich wirklich nicht." },
        { tr: "Vom Geld reden wir gar nicht erst." }
      ]
    },
    vocab: [
      "Versetzung, Herausstellung",
      "der neue gesprochene Standard",
      "informelles Register",
      "Mündlichkeit",
      "Spontaneität",
      "Thema / Rhema",
      "hervorheben",
      "mit einem Pronomen wiederaufnehmen",
      "natürlich klingen",
      "steif klingen",
      "akzeptabel",
      "schriftlich nicht ratsam"
    ],
    exercises: [
      {
        q: "„Il libro, l'ho letto ieri\" ist:",
        opts: ["ein Syntaxfehler", "eine Linksversetzung, ein Merkmal des lebendigen Italienisch", "eine amtliche Konstruktion"]
      },
      {
        q: "Welche Konstruktion ist im förmlichen Schreiben nicht ratsam?",
        opts: ["Gli ho detto tutto.", "Se lo sapevo, non venivo.", "A Roma ci vado spesso."]
      },
      { q: "Ergänze die Versetzung: „Il caffè, ___ prendo dopo.\"" },
      { q: "Ergänze: „Di soldi, non ___ parliamo nemmeno.\"" },
      {
        q: "„C'è Marco che ti cerca\" dient dazu:",
        opts: ["einen Ort zu beschreiben", "neue Information ins Gespräch einzuführen", "Zweifel auszudrücken"]
      },
      { q: "Schreib es mit einer Versetzung.", tr: "An diese Geschichte erinnere ich mich nicht." },
      { q: "„In Rom war ich noch nie.\"" },
      {
        q: "Welche Merkmale gehören zum Neostandard?",
        opts: ["lui als Subjekt", "gli statt loro", "egli als Subjekt", "das Allzweck-che"]
      },
      { tr: "An diese Geschichte erinnere ich mich wirklich nicht." },
      { tr: "Den Kaffee trinke ich später, jetzt habe ich keine Lust darauf." }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Stil",
    title: "Die Kohäsion des geschriebenen Textes",
    objectives: [
      "einen zusammenhängenden argumentativen Text bauen",
      "die Mittel des Rückverweises verwenden",
      "Wiederholung durch Synonyme und Oberbegriffe vermeiden"
    ],
    theory: [
      {
        h: "Zwei verschiedene Begriffe",
        p: "Die <b>coesione</b> ist die Naht an der Oberfläche: Pronomen, Konnektoren, lexikalische Wiederaufnahme. Die <b>coerenza</b> ist die logische Kontinuität des Inhalts. Ein Text kann formal kohäsiv und logisch inkohärent sein, und umgekehrt. Dein Paar Kohäsion / Kohärenz sagt genau dasselbe."
      },
      {
        h: "Mittel des Rückverweises",
        list: [
          "Pronomen: <em>lo, ne, ci, questo, ciò</em>",
          "Synonyme und Oberbegriffe: <em>il provvedimento → la misura → l'intervento</em>",
          "den vorigen Satz nominalisieren: <em>…hanno approvato la legge. <b>L'approvazione</b> ha suscitato…</em>",
          "Wiederaufnahmeformeln: <em>quanto detto, il fenomeno in questione, tale scelta</em>"
        ]
      },
      {
        h: "Die thematische Progression",
        p: "In einem gut gebauten Absatz nimmt jeder Satz ein Element des vorigen auf (das Thema) und fügt neue Information hinzu (das Rhema). Ein völlig neues Thema ohne Vorwarnung einzuführen bricht die Kohäsion, auch wenn alle Konnektoren an ihrem Platz sind."
      },
      {
        tip: "Der italienische Schriftstil scheut lange Sätze nicht, verlangt aber eine <b>klare Hierarchie</b> der Nebensätze. Drei ineinander geschachtelte Nebensätze sind das Zeichen, den Absatz neu zu schreiben — eine Warnung, die für dich doppelt gilt, weil deutsche Fachprosa tiefer verschachtelt, als das Italienische es verträgt."
      }
    ],
    grammar: {
      title: "Mittel der Kohäsion",
      table: {
        head: ["Mittel", "Beispiel", "Funktion"],
        rows: [
          ["Pronomen", "…la riforma. La si è discussa a lungo.", "Rückverweis"],
          ["Synonym", "il provvedimento / la misura", "Wiederholung vermeiden"],
          ["Nominalisierung", "hanno deciso → tale decisione", "Verdichtung"],
          ["Wiederaufnahme", "il fenomeno in questione", "Genauigkeit"],
          ["Konnektor", "di conseguenza, per contro", "logische Beziehung"],
          ["Wegweiser", "come vedremo, in primo luogo", "die Lesenden orientieren"]
        ]
      },
      examples: [
        { tr: "Die Reform wurde verabschiedet. Diese Entscheidung löste gegensätzliche Reaktionen aus." },
        { tr: "Das fragliche Phänomen betrifft vor allem die großen Städte." },
        { tr: "Wie wir sehen werden, ist das Problem nicht nur ein wirtschaftliches." },
        { tr: "Die regionalen Zahlen sagen dagegen etwas anderes." },
        { tr: "Das Gesagte gilt für den privaten Sektor." },
        { tr: "Folglich sollte die Maßnahme überarbeitet werden." }
      ]
    },
    vocab: [
      "Kohäsion",
      "Kohärenz",
      "Verfügung, Beschluss",
      "Maßnahme",
      "fraglich, in Rede stehend",
      "solch, besagt",
      "das Gesagte",
      "dagegen, hingegen",
      "folglich",
      "auslösen, hervorrufen",
      "gegensätzlich",
      "betreffen, gelten für"
    ],
    exercises: [
      {
        q: "Worin unterscheiden sich coesione und coerenza?",
        opts: [
          "In nichts",
          "Die coesione ist die Naht an der Oberfläche, die coerenza die logische Kontinuität",
          "Die coesione betrifft das Gesprochene, die coerenza das Geschriebene"
        ]
      },
      { q: "Ergänze die Wiederaufnahme: „Hanno approvato la legge. ___ decisione ha sorpreso tutti.\"" },
      { q: "Ergänze: „Il fenomeno in ___ riguarda le grandi città.\"" },
      { q: "Ordne zu.", pairs: ["dagegen", "folglich", "auslösen", "das Gesagte"] },
      {
        q: "Welches Mittel beseitigt ein wiederholtes Nomen am besten?",
        opts: ["es mit einem Synonym oder Oberbegriff wieder aufnehmen", "ihm ein Adjektiv hinzufügen", "die Wortstellung ändern"]
      },
      {
        q: "Mach den Absatz kohäsiv.",
        tr: "Die Reform wurde verabschiedet. Diese Entscheidung löste gegensätzliche Reaktionen aus. Folglich sollte die Maßnahme überarbeitet werden."
      },
      { q: "„Wie wir sehen werden, ist das Problem nicht nur ein wirtschaftliches.\"" },
      {
        q: "Drei ineinander geschachtelte Nebensätze sind ein Zeichen dafür, dass:",
        opts: ["der Text anspruchsvoll ist", "der Absatz neu zu schreiben ist", "der Stil amtlich ist"]
      },
      { tr: "Das Gesagte gilt vor allem für den privaten Sektor." },
      { tr: "Folglich halte ich es für nötig, die Maßnahme zu überarbeiten." }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Prüfung",
    title: "C1-Abschlussprüfung",
    objectives: ["das si, die verbi pronominali, die Register und die Kohäsion prüfen"],
    theory: [{ p: "Zwölf Aufgaben aus der ganzen Stufe. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Qui si ___ appartamenti.\"", opts: ["affitta", "affittano", "affittare"] },
      { q: "„___ si abitua a tutto.\"" },
      { q: "„Un'informazione certa\":", opts: ["eine gewisse", "eine gesicherte", "eine vertrauliche"] },
      { q: "„___ l'ho fatta!\"" },
      { q: "„Non ___ la sento di decidere.\"" },
      { q: "„La domanda ___ presentata entro il 30.\" (ist einzureichen)" },
      { q: "„Il termine è perentorio\":", opts: ["unverbindlich", "nicht verlängerbar", "verlängert"] },
      {
        q: "„Se lo sapevo, non venivo\" ist:",
        opts: ["der Schriftstandard", "der gesprochene Neostandard", "immer falsch"]
      },
      { q: "„Il fenomeno in ___ riguarda le città.\"" },
      { q: "Gelehrter Superlativ von „acre\": ___" },
      { q: "„Diese Daten sind vor der Veröffentlichung zu prüfen.\"" },
      { tr: "Man gewöhnt sich an alles, aber ganz abfinden tut man sich nie damit." }
    ]
  }
});
