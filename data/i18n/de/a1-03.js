/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/a1-03.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.

   Einige italienische Musterantworten in core sagen "polacca" oder
   nennen Warschau und Krakau. Das sind aufgenommene Audios und feste
   Korrekturschlüssel, deshalb behalten die deutschen Aufgabenstellungen
   sie bei, statt eine Antwort einzuladen, die der Prüfer ablehnt.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:a1-u08": { title: "Die Menschen um uns herum", grammarNote: "Possessiva · Personen beschreiben · Komparative" },
  "lesson:a1-u08-l1": {
    theme: "Menschen und Beziehungen",
    title: "Die Possessivbegleiter",
    objectives: [
      "mio, tuo, suo mit der richtigen Endung verwenden",
      "wissen, wann der Artikel vor einem Familienmitglied wegfällt",
      "sagen, wer in deinem Leben wer ist"
    ],
    theory: [
      {
        h: "Angeglichen wird an die Sache, nicht an den Besitzer",
        p: "<em>Il <b>suo</b> libro</em> heißt „sein Buch\" oder „ihr Buch\": die Endung beschreibt das <b>Buch</b>, nicht die Person, der es gehört. Genau umgekehrt zum deutschen sein/ihr, das den Besitzer markiert. Wenn der Zusammenhang nicht reicht, hängt das Italienische <em>di lui</em> oder <em>di lei</em> an."
      },
      {
        h: "Der Artikel ist der Normalfall",
        p: "Man sagt fast immer <em><b>il</b> mio libro</em>, <em><b>la</b> mia macchina</em>. Deutsch sagt „mein Buch\" ohne Artikel, und genau dieser italienische Artikel fällt beim schnellen Sprechen als Erstes weg."
      },
      {
        h: "Die Ausnahme: ein einzelnes Familienmitglied",
        p: "Ohne Artikel: <em>mia madre, mio padre, tuo fratello, sua sorella</em>. Aber der Artikel <b>kommt zurück</b>, wenn: Plural (<em>i miei genitori</em>), Verkleinerung (<em>la mia sorellina</em>), ein zusätzliches Adjektiv (<em>la mia sorella maggiore</em>) oder die Form <em>loro</em> (<em>la loro madre</em>)."
      },
      {
        trap: "<b>Loro</b> verändert sich nie und nimmt <b>immer</b> den Artikel: <em>il loro cane, la loro casa, i loro amici, la loro madre</em>. Es ist das einzige Possessivum, das sich so verhält. Ein weiterer Unterschied zum Deutschen: dort wird das Possessivum zusätzlich nach Kasus dekliniert (mein, meinen, meinem), im Italienischen entfällt das ganz."
      }
    ],
    grammar: {
      title: "Die Possessivformen",
      table: {
        head: ["Person", "m. Sg.", "f. Sg.", "m. Pl.", "f. Pl."],
        rows: [
          ["io", "il mio", "la mia", "i miei", "le mie"],
          ["tu", "il tuo", "la tua", "i tuoi", "le tue"],
          ["lui / lei", "il suo", "la sua", "i suoi", "le sue"],
          ["noi", "il nostro", "la nostra", "i nostri", "le nostre"],
          ["voi", "il vostro", "la vostra", "i vostri", "le vostre"],
          ["loro", "il loro", "la loro", "i loro", "le loro"]
        ]
      },
      examples: [
        { tr: "Meine Schwester wohnt in Bari.", note: "kein Artikel" },
        { tr: "Meine Schwestern wohnen in Bari.", note: "Plural → der Artikel kommt zurück" },
        { tr: "Mein Chef ist sehr fordernd." },
        { tr: "Ihr Haus liegt am Park.", note: "loro nimmt immer den Artikel" },
        { tr: "Seine Freunde sind nett." },
        { tr: "Es ist ihr Buch, nicht seins.", note: "wenn man genau sein muss" }
      ]
    },
    vocab: [
      "Mutter / Vater",
      "Eltern",
      "Bruder / Schwester",
      "Sohn / Tochter",
      "Mann / Frau (Ehepartner)",
      "Partner, Partnerin",
      "Kollege, Kollegin",
      "Chef",
      "Nachbar",
      "Mitbewohner",
      "bester Freund",
      "Enkel; Neffe"
    ],
    exercises: [
      {
        q: "Welche Form ist für „meine Mutter\" richtig?",
        opts: ["la mia madre", "mia madre", "la madre mia"],
        why: "Ein einzelnes Familienmitglied ohne Adjektiv nimmt keinen Artikel."
      },
      {
        q: "Und für „meine Eltern\"?",
        opts: ["miei genitori", "i miei genitori", "il mio genitori"],
        why: "Im Plural kommt der Artikel zurück."
      },
      {
        q: "Ergänze: „___ loro casa è grande.\"",
        why: "Loro braucht immer den Artikel, auch bei Familienmitgliedern."
      },
      {
        q: "Ergänze: „___ mia sorella maggiore.\" (meine ältere Schwester)",
        why: "Ein zusätzliches Adjektiv holt den Artikel zurück."
      },
      {
        q: "Wähl das richtige Possessivum für „io\".",
        items: ["Buch", "Auto", "Eltern", "Schwestern"]
      },
      {
        q: "„Il suo libro\" — wessen Buch ist es?",
        opts: ["Nur seins", "Nur ihres", "Seins oder ihres, der Zusammenhang entscheidet"]
      },
      { q: "„Mein Chef ist sehr fordernd.\"" },
      {
        q: "Ergänze (setz den Artikel, oder schreib einen Strich „-\", wenn keiner steht).",
        tr: "Mein Bruder arbeitet mit meinen Eltern."
      },
      { tr: "Meine Schwester und ihre Kinder wohnen in Palermo." },
      { tr: "Mein bester Freund heißt Paolo." }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Menschen und Beziehungen",
    title: "Das Aussehen beschreiben",
    objectives: [
      "beschreiben, wie jemand aussieht",
      "essere und avere an den richtigen Stellen verwenden",
      "fragen, wie jemand aussieht"
    ],
    theory: [
      {
        h: "Essere für das Ganze, avere für die Einzelheiten",
        p: "Größe, Statur und Gesamteindruck laufen über <strong>essere</strong>: <em>è alto, è magra</em>. Einzelne Merkmale laufen über <strong>avere</strong>: <em>ha i capelli neri</em>, <em>ha gli occhi verdi</em>. Deutsch macht dieselbe Aufteilung mit sein und haben, hier gibt es also nichts umzulernen."
      },
      {
        h: "Der Artikel vor Körperteilen",
        p: "Es heißt <em>ha <b>i</b> capelli lunghi</em>, nicht „ha capelli lunghi\". Deutsch sagt „er hat schwarze Haare\" ganz ohne Artikel, und deshalb bleibt er im Italienischen ständig weg — ohne ihn klingt der Satz unfertig."
      },
      {
        h: "Capelli steht immer im Plural",
        p: "<em>I capelli</em> ist das Haar als Ganzes, genau wie deine „Haare\"; der Singular <em>il capello</em> meint ein einzelnes Haar. Dasselbe bei <em>i baffi</em> (der Schnurrbart), das im Italienischen Plural ist, im Deutschen Singular."
      },
      {
        tip: "Nach dem Aussehen fragt man mit <em>Com'è?</em>, nach dem Charakter mit <em>Com'è di carattere?</em> Verwechsle beides nicht mit <em>Come sta?</em>, das nach dem Befinden fragt."
      }
    ],
    grammar: {
      title: "Essere und avere in Beschreibungen",
      table: {
        head: ["Merkmal", "Verb", "Beispiel"],
        rows: [
          ["Größe", "essere", "È alto / bassa / di media statura."],
          ["Statur", "essere", "È magro / robusto / sportiva."],
          ["Haare", "avere", "Ha i capelli castani e ricci."],
          ["Augen", "avere", "Ha gli occhi azzurri."],
          ["Alter", "avere", "Ha circa quarant'anni."],
          ["Brille, Bart", "portare / avere", "Porta gli occhiali. Ha la barba."]
        ]
      },
      examples: [
        { tr: "Wie sieht dein Bruder aus? — Groß und schlank." },
        { tr: "Sie hat lange glatte Haare." },
        { tr: "Er hat grüne Augen und trägt eine Brille." },
        { tr: "Sie ist eine Frau mittleren Alters." },
        { tr: "Sie sieht ihrer Mutter ähnlich." },
        { tr: "Er hat ein schönes Lächeln." }
      ]
    },
    vocab: [
      "groß / klein",
      "schlank / kräftig",
      "Haare (immer Plural)",
      "blond / braun / schwarz",
      "glatt / lockig",
      "Augen",
      "blau / grün / braun",
      "Brille",
      "Bart",
      "Lächeln",
      "ähnlich sehen",
      "von mittlerer Größe"
    ],
    exercises: [
      {
        q: "Welcher Satz ist richtig?",
        opts: ["È i capelli neri.", "Ha i capelli neri.", "Sono capelli neri."],
        why: "Körperliche Merkmale laufen über avere, und zwar mit Artikel."
      },
      {
        q: "Ergänze: „Ha ___ occhi azzurri.\"",
        why: "Occhi beginnt mit einem Vokal und steht im Plural → gli."
      },
      { q: "Ergänze: „Mia sorella ___ alta e magra.\"" },
      {
        q: "Was bedeutet „Com'è di carattere?\"",
        opts: ["Wie geht es ihm?", "Wie ist er vom Charakter?", "Wie sieht er aus?"]
      },
      { q: "Ordne zu.", pairs: ["lockige Haare", "von mittlerer Größe", "trägt eine Brille", "ähnlich sehen"] },
      { q: "Ergänze die Beschreibung.", tr: "Mein Vater ist groß und hat graue Haare. Er trägt eine Brille." },
      { q: "„Sie hat lange lockige Haare.\"" },
      { tr: "Wie sieht deine Schwester aus? Sie ist klein und sportlich." },
      { tr: "Sie hat braune Haare, grüne Augen und ein schönes Lächeln." },
      { tr: "Mein Bruder ist groß und hat schwarze Haare." }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Menschen und Beziehungen",
    title: "Charakter und Urteile über Menschen",
    objectives: [
      "den Charakter einer Person beschreiben",
      "eine Meinung über jemanden äußern",
      "den Wörtern misstrauen, die vertraut aussehen"
    ],
    theory: [
      {
        h: "Simpatico heißt dasselbe wie im Deutschen",
        p: "<strong>Simpatico</strong> beschreibt jemanden, mit dem man gern zusammen ist: er scherzt, er zieht dich ins Gespräch. Eines der wenigen Wörter, das man direkt übernehmen kann. „Höflich, freundlich\" im formellen Sinn ist <em>gentile</em>. Das Gegenteil, <em>antipatico</em>, ist härter als das deutsche „unsympathisch\" und grenzt an einen Vorwurf."
      },
      {
        h: "Meinungen mit secondo me",
        p: "<em>Secondo me</em> („meiner Meinung nach\") ist die häufigste Art, ein Urteil einzuleiten. Achte auf die Form: nicht <em>secondo io</em>, sondern <em>secondo me</em>, denn diese Präposition verlangt das betonte Pronomen — so wie du nach „laut\" auch nicht den Nominativ benutzt."
      },
      {
        h: "Vorsicht bei Lob und Kritik",
        p: "Das Italienische ist großzügig mit Komplimenten (<em>bravissimo, gentilissima</em>), dämpft aber die Kritik an einer Person: statt <em>è antipatico</em> hörst du eher <em>è un po' particolare</em> oder <em>non è il mio tipo</em>."
      },
      {
        contrast: "Wörter, die vertraut aussehen, sind hier die eigentliche Falle. <em>Bravo</em> heißt nicht „brav\" im Sinne von artig, sondern „gut in etwas\": <em>bravo in matematica</em>. <em>Sensibile</em> heißt sensibel, das trifft zu; <em>caldo</em> heißt warm, nicht kalt, und dreht die Bedeutung genau um. <em>Firma</em> ist die Unterschrift, nicht die Firma (die heißt <em>ditta</em> oder <em>azienda</em>). <em>Konfetti</em> sind auf Italienisch <em>coriandoli</em>, während <em>confetti</em> Zuckermandeln sind. Diese vier stiften mehr Verwirrung als jeder Grammatikpunkt dieser Stufe."
      }
    ],
    grammar: {
      title: "Charakteradjektive",
      table: {
        head: ["Italienisch", "Deutsch", "Hinweis"],
        rows: [
          ["simpatico / antipatico", "sympathisch / unsympathisch", "antipatico ist stärker"],
          ["gentile", "freundlich, höflich", "nicht „gentil\""],
          ["bravo", "gut in etwas", "„bravo in matematica\""],
          ["socievole / timido", "gesellig / schüchtern", ""],
          ["generoso / egoista", "großzügig / egoistisch", "egoista ändert sich im Maskulinum nicht"],
          ["tranquillo / nervoso", "ruhig / nervös", ""]
        ]
      },
      examples: [
        { tr: "Meine Kollegin ist sehr sympathisch." },
        { tr: "Meiner Meinung nach ist er ein großzügiger Mensch." },
        { tr: "Sie ist sehr gut in Mathematik." },
        { tr: "Am Anfang ist er ein bisschen schüchtern." },
        { tr: "Nicht mein Typ, aber er ist höflich." },
        { tr: "Ich mag ihn.", note: "wörtlich: „er ist mir sympathisch\"" }
      ]
    },
    vocab: [
      "sympathisch / unsympathisch",
      "freundlich, höflich",
      "gut in etwas",
      "gesellig",
      "schüchtern",
      "großzügig",
      "egoistisch",
      "ruhig",
      "lustig (von einer Sache oder einer Person)",
      "langweilig",
      "meiner Meinung nach",
      "ich mag ihn / sie"
    ],
    exercises: [
      {
        q: "„Simpatico\" liegt am nächsten bei:",
        opts: ["höflich, wohlerzogen", "lustig, angenehme Gesellschaft", "verständnisvoll, einfühlsam"],
        why: "„Höflich\" ist gentile und „verständnisvoll\" ist comprensivo. Simpatico heißt, dass man gern mit jemandem zusammen ist."
      },
      {
        q: "Welche Form ist richtig?",
        opts: ["Secondo io", "Secondo me", "Secondo mio"],
        why: "Nach der Präposition secondo steht das betonte Pronomen: me, te, lui, lei."
      },
      { q: "Ergänze: „Mia collega è molto ___.\" (freundlich)" },
      {
        q: "„È bravo in matematica\" bedeutet:",
        opts: ["Bravo für Mathematik!", "Er ist gut in Mathematik", "Er mag Mathematik"]
      },
      {
        q: "Ordne die Adjektive ihrem Gegenteil zu.",
        pairs: ["antipatico", "egoista", "timido", "nervoso"]
      },
      { q: "„Meiner Meinung nach ist er ein ruhiger Mensch.\"" },
      {
        q: "Ergänze.",
        tr: "Meiner Meinung nach ist mein Mitbewohner ein sehr geselliger Mensch: er redet mit allen."
      },
      { tr: "Am Anfang ist er ein bisschen schüchtern." },
      { tr: "Meiner Meinung nach ist sie großzügig und lustig." },
      { tr: "Meine Kollegin ist sehr sympathisch, ich mag sie." }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Grundgrammatik",
    title: "Die Komparative",
    objectives: [
      "zwei Personen oder zwei Sachen vergleichen",
      "zwischen di und che wählen",
      "die unregelmäßigen migliore und peggiore verwenden"
    ],
    theory: [
      {
        h: "Drei Grundkonstruktionen",
        list: [
          "<b>più… di</b> — mehr als: <em>Anna è più alta di Marco.</em>",
          "<b>meno… di</b> — weniger als: <em>Questo è meno caro di quello.</em>",
          "<b>come / quanto</b> — so… wie: <em>È alto come te.</em>"
        ]
      },
      {
        contrast: "Deutsch bildet den Komparativ mit einer Endung: groß → größer, und vergleicht mit „als\". Italienisch stellt stattdessen <em>più</em> davor und lässt das Adjektiv unverändert. Es gibt also kein „*altiere\": <em>più alto</em>, immer analytisch."
      },
      {
        h: "Di oder che: die praktische Regel",
        p: "<strong>Di</strong>, wenn du <b>zwei verschiedene Dinge in einer Hinsicht</b> vergleichst: <em>Roma è più grande di Firenze</em>. <strong>Che</strong>, wenn du <b>zwei Eigenschaften derselben Sache</b> vergleichst, zwei Verben, oder wenn eine Präposition folgt: <em>È più simpatico che intelligente</em>, <em>È più facile parlare che scrivere</em>, <em>Vado più spesso a Roma che a Milano</em>. Dein „als\" deckt beide Fälle ab und sagt dir nie, welche der zwei Formen dran ist."
      },
      {
        h: "Unregelmäßige Formen",
        p: "<em>buono → migliore</em> (besser), <em>cattivo → peggiore</em> (schlechter), <em>grande → maggiore</em>, <em>piccolo → minore</em>. Die regelmäßigen Formen (<em>più buono, più cattivo</em>) gibt es auch und sie werden benutzt, vor allem beim Geschmack: <em>questa pizza è più buona</em>."
      },
      {
        trap: "Nach <b>di</b> steht das betonte Pronomen: <em>più alto di <b>me</b></em>, nie „di io\". Deutsch sagt „größer als <b>ich</b>\" im Nominativ und drängt dich damit genau in den Fehler. Dasselbe nach <b>come</b>: <em>come te</em>, nicht „come tu\"."
      }
    ],
    grammar: {
      title: "Die Komparative",
      table: {
        head: ["Konstruktion", "Beispiel", "auf Deutsch"],
        rows: [
          ["più… di", "Anna è più alta di Marco.", "Anna ist größer als Marco."],
          ["meno… di", "Questo è meno caro di quello.", "Dieses ist billiger als jenes."],
          ["come", "Sei alto come me.", "Du bist so groß wie ich."],
          ["più… che (zwei Eigenschaften)", "È più simpatico che bello.", "Er ist eher sympathisch als hübsch."],
          ["più… che (zwei Verben)", "È più facile parlare che scrivere.", "Reden ist leichter als Schreiben."],
          ["il più… di", "È il più bravo della classe.", "Er ist der Beste der Klasse."]
        ]
      },
      examples: [
        { tr: "Mailand ist teurer als Bologna." },
        { tr: "Mein Bruder ist weniger geduldig als ich." },
        { tr: "Dieser Wein ist besser als jener." },
        { tr: "Das ist der schlimmste Tag der Woche." },
        { tr: "Ich fahre öfter nach Rom als nach Mailand." },
        { tr: "Du bist so freundlich wie deine Mutter." }
      ]
    },
    vocab: [
      "mehr… als",
      "weniger… als",
      "so… wie",
      "besser / schlechter",
      "der/die/das… ste von",
      "geduldig",
      "schnell / langsam",
      "leicht / schwierig",
      "jung / älter",
      "gleich",
      "anders als",
      "vor allem"
    ],
    exercises: [
      {
        q: "„Anna è più alta ___ Marco.\"",
        opts: ["che", "di", "come"],
        why: "Zwei verschiedene Personen in einer Hinsicht verglichen → di."
      },
      {
        q: "„È più simpatico ___ bello.\"",
        opts: ["di", "che", "come"],
        why: "Zwei Eigenschaften derselben Person → che."
      },
      {
        q: "Ergänze: „Sei più alto ___ me.\"",
        why: "Nach di steht das betonte Pronomen: di me, di te, di lui."
      },
      { q: "Nenn den unregelmäßigen Komparativ von „buono\": ___" },
      {
        q: "„È il più bravo della classe\" bedeutet:",
        opts: ["Er ist besser als die Klasse", "Er ist der Beste der Klasse", "Er ist so gut wie die Klasse"]
      },
      { q: "„Mailand ist teurer als Bologna.\"" },
      {
        q: "Ergänze di oder che.",
        tr: "Rom ist größer als Florenz, aber Italienisch zu sprechen ist leichter als es zu schreiben."
      },
      { tr: "Dieser Wein ist besser als jener." },
      { tr: "Mein Bruder ist weniger geduldig als ich." },
      { tr: "Diese Stadt ist ruhiger als Mailand." }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Test",
    title: "Test zu Einheit 8",
    objectives: ["Possessiva, Personenbeschreibung und Komparative prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„meine Mutter\" heißt:", opts: ["la mia madre", "mia madre", "mia la madre"] },
      { q: "„___ miei genitori abitano a Lodz.\"" },
      { q: "„___ loro casa è nuova.\"" },
      { q: "Der richtige Satz:", opts: ["È i capelli neri.", "Ha i capelli neri.", "Ha capelli neri."] },
      { q: "„Ha ___ occhi verdi.\"" },
      { q: "„Simpatico\" bedeutet:", opts: ["höflich", "lustig, angenehme Gesellschaft", "verständnisvoll"] },
      { q: "„È più alta ___ me.\"", opts: ["che", "di", "come"] },
      { q: "Der Komparativ von „cattivo\": ___" },
      { tr: "Meine Schwester ist jünger als ich und hat lockige Haare." },
      { tr: "Meiner Meinung nach ist sie ein sehr freundlicher Mensch." }
    ]
  },
  "unit:a1-u09": { title: "Die Freizeit", grammarNote: "fare/giocare/suonare · das Wetter · stare + gerundio" },
  "lesson:a1-u09-l1": {
    theme: "Freizeit",
    title: "Interessen und Verabredungen",
    objectives: [
      "sagen, was du in deiner Freizeit machst",
      "fare, giocare und suonare auseinanderhalten",
      "etwas vorschlagen und auf einen Vorschlag antworten"
    ],
    theory: [
      {
        h: "Drei Verben, drei verschiedene Bereiche",
        list: [
          "<b>fare</b> + Einzelsport oder Tätigkeit: <em>faccio yoga, faccio una passeggiata, faccio nuoto</em>",
          "<b>giocare a</b> + Spiel oder Mannschaftssport: <em>gioco a calcio, gioco a carte, gioco a tennis</em>",
          "<b>suonare</b> + Instrument: <em>suono la chitarra, suono il pianoforte</em>"
        ]
      },
      {
        contrast: "Deutsch benutzt für die letzten beiden dasselbe Verb: Fußball spielen, Gitarre spielen, Karten spielen. Italienisch wechselt das Verb. „Gioco la chitarra\" ist der vorhersehbarste Fehler eines deutschsprachigen Lernenden in dieser Lektion. Bei <em>fare</em> hilft dir dagegen dein „Yoga machen\"."
      },
      {
        h: "Etwas vorschlagen",
        p: "Die gängigen Formeln: <em>Ti va di…?</em> („hast du Lust auf…?\"), <em>Che ne dici di…?</em> („was hältst du davon…?\"), <em>Andiamo a…?</em>. Die Antworten: <em>Volentieri!</em>, <em>Perché no?</em>, <em>Mi dispiace, non posso</em>."
      },
      {
        tip: "<em>Ti va</em> ist unpersönlich wie <em>mi piace</em>: <em>ti va un caffè?</em> („hast du Lust auf einen Kaffee?\"). Auch hier ist die Sache das Subjekt."
      }
    ],
    grammar: {
      title: "Fare, giocare, suonare",
      table: {
        head: ["Verb", "womit", "Beispiel"],
        rows: [
          ["fare", "Einzelsport, Tätigkeit", "Faccio palestra tre volte a settimana."],
          ["giocare a", "Spiel, Mannschaftssport", "Gioco a calcio il sabato."],
          ["suonare", "Instrument", "Suono il pianoforte da dieci anni."],
          ["andare a/in", "ein Ort oder eine Tätigkeit", "Vado a ballare / in piscina."],
          ["ti va di + Infinitiv", "ein Vorschlag", "Ti va di andare al cinema?"]
        ]
      },
      examples: [
        { tr: "Am Wochenende mache ich einen Spaziergang in der Innenstadt." },
        { tr: "Ich spiele mit meiner Schwester Tennis." },
        { tr: "Ich spiele Gitarre, aber schlecht." },
        { tr: "Hast du Lust, heute Abend ins Kino zu gehen?" },
        { tr: "Sehr gern! Um wie viel Uhr?" },
        { tr: "Tut mir leid, heute Abend kann ich nicht." }
      ]
    },
    vocab: [
      "Freizeit",
      "Sport treiben",
      "Fitnessstudio",
      "Schwimmbad",
      "Fußball spielen",
      "Gitarre spielen",
      "tanzen",
      "ein Buch lesen",
      "eine Serie schauen",
      "hast du Lust auf…?",
      "sehr gern",
      "vielleicht ein andermal"
    ],
    exercises: [
      {
        q: "„___ la chitarra.\" (ich spiele Gitarre)",
        opts: ["Gioco", "Suono", "Faccio"],
        why: "Ein Instrument verlangt suonare, nie giocare."
      },
      { q: "„___ a calcio.\" (ich spiele Fußball)", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "Ergänze: „___ yoga due volte a settimana.\" (ich mache Yoga)" },
      { q: "Ergänze: „___ va di andare al cinema?\" (hast du Lust)" },
      {
        q: "Ordne dem Verb zu, was darauf folgt.",
        pairs: ["carte", "il pianoforte", "una passeggiata", "piscina"]
      },
      { q: "„Hast du Lust, heute Abend ins Kino zu gehen?\"" },
      { q: "Ergänze.", tr: "Samstags spiele ich Tennis, sonntags spiele ich Gitarre und mache einen Spaziergang." },
      {
        q: "Ein Freund schlägt vor, auszugehen.",
        setting: "Donnerstagabend, eine Sprachnachricht von einem Freund.",
        lines: [
          { tr: "Hey! Hast du Lust, am Samstag auf ein Konzert zu gehen?" },
          { tr: "Nimm begeistert an und frag nach der Uhrzeit.", answerTr: "Sehr gern! Um wie viel Uhr?" },
          { tr: "Um neun, aber wir treffen uns um halb neun auf dem Platz." },
          { tr: "Bestätige und verabschiede dich.", answerTr: "Perfekt, bis dann!" }
        ]
      },
      { tr: "In meiner Freizeit gehe ich ins Fitnessstudio und schaue Serien." },
      { tr: "Hast du Lust auf einen Spaziergang in der Innenstadt?" }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Freizeit",
    title: "Wetter und Jahreszeiten",
    objectives: ["das Wetter beschreiben", "fare unpersönlich verwenden", "das Wetter mit deinen Plänen verbinden"],
    theory: [
      {
        h: "Das Wetter wird gemacht, es ist nicht",
        p: "Italienisch sagt <em>fa caldo</em> („es macht warm\"), <em>fa freddo</em>, <em>fa bel tempo</em>. Das ist der <strong>unpersönliche</strong> Gebrauch von <em>fare</em>: kein Subjekt, immer dritte Person Singular. Dein „es ist heiß\" zieht dich zu <em>essere</em>, und genau das ist der Fehler."
      },
      {
        h: "Drei verschiedene Konstruktionen",
        list: [
          "<b>fare</b> + Nomen: <em>fa caldo, fa freddo, fa bel/brutto tempo</em>",
          "<b>c'è</b> + Nomen: <em>c'è il sole, c'è vento, c'è nebbia</em>",
          "ein eigenes Verb: <em>piove</em> (es regnet), <em>nevica</em> (es schneit)"
        ]
      },
      {
        trap: "„Sono caldo\" heißt, dass du selbst warm anzufassen bist, und in der Umgangssprache noch etwas ganz anderes. Das Wetter ist <em>fa caldo</em>; über dich selbst sagst du <em>ho caldo</em> — mit <em>avere</em>, während Deutsch hier den Dativ nimmt: „mir ist kalt\". Drei verschiedene Verben für das, was du mit einem „sein\" erledigst."
      },
      {
        h: "Die Jahreszeiten",
        p: "<em>in primavera, in estate, in autunno, in inverno</em>. Monate nehmen nach <em>a</em> oder <em>in</em> keinen Artikel: <em>a gennaio</em>, <em>in luglio</em>, beides ist richtig."
      }
    ],
    grammar: {
      title: "Das Wetter",
      table: {
        head: ["Konstruktion", "Beispiel", "auf Deutsch"],
        rows: [
          ["fare", "Fa caldo. / Fa freddo.", "Es ist heiß. / Es ist kalt."],
          ["fare", "Fa bel tempo. / Fa brutto tempo.", "Das Wetter ist schön / schlecht."],
          ["c'è", "C'è il sole. / C'è vento.", "Die Sonne scheint. / Es ist windig."],
          ["ein Verb", "Piove. / Nevica.", "Es regnet. / Es schneit."],
          ["Grad", "Ci sono venti gradi.", "Es sind zwanzig Grad."],
          ["Frage", "Che tempo fa?", "Wie ist das Wetter?"]
        ]
      },
      examples: [
        { tr: "Heute ist es heiß, wir fahren ans Meer." },
        { tr: "Im Winter ist in Mailand oft Nebel." },
        { tr: "Morgen regnet es, wir bleiben zu Hause." },
        { tr: "Wie ist das Wetter in Rom? — Herrlich!" },
        { tr: "Mir ist kalt, mach das Fenster zu.", note: "über sich selbst: avere" },
        { tr: "Der Frühling ist die schönste Jahreszeit." }
      ]
    },
    vocab: [
      "wie ist das Wetter?",
      "es ist heiß / kalt",
      "die Sonne scheint",
      "es regnet / schneit",
      "es ist windig / neblig",
      "Regen / Schnee",
      "Wolken",
      "Grad",
      "Frühling / Sommer",
      "Herbst / Winter",
      "Regenschirm",
      "die Vorhersage"
    ],
    exercises: [
      {
        q: "Wie sagt man „es ist heiß\" (vom Wetter)?",
        opts: ["Sono caldo", "Fa caldo", "Ho caldo"],
        why: "„Ho caldo\" heißt, dass dir selbst heiß ist; das Wetter ist fa caldo."
      },
      { q: "Ergänze: „___ il sole.\" (die Sonne scheint)" },
      { q: "Ergänze: „Domani ___.\" (morgen regnet es)" },
      { q: "„Ho freddo\" bedeutet:", opts: ["Draußen ist es kalt", "Mir ist kalt", "Es wird kälter"] },
      { q: "Ordne zu.", pairs: ["es schneit", "es ist neblig", "schlechtes Wetter", "Regenschirm"] },
      { q: "Ergänze die Vorhersage.", tr: "Morgen wird es kalt und windig, und am Nachmittag regnet es." },
      { q: "„Wie ist das Wetter in Rom?\"" },
      { tr: "Im Winter ist in Mailand oft Nebel." },
      { tr: "Heute ist das Wetter schön, es sind fünfundzwanzig Grad." },
      { tr: "Wie ist das Wetter heute? Kalt und regnerisch." }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Grundgrammatik",
    title: "Stare + gerundio",
    objectives: [
      "beschreiben, was gerade passiert",
      "das gerundio bilden",
      "wissen, wann man diese Konstruktion NICHT benutzt"
    ],
    theory: [
      {
        h: "Was gerade jetzt passiert",
        p: "<strong>Stare + gerundio</strong> betont, dass etwas <b>in diesem Moment</b> abläuft: <em>Sto lavorando</em>. Das einfache <em>lavoro</em> ist auch richtig, aber allgemein: „ich arbeite, ich habe eine Stelle\"."
      },
      {
        contrast: "Deutsch hat keine Verlaufsform: „ich arbeite\" deckt beides ab, und zum Betonen greifst du zu „gerade\" oder zum umgangssprachlichen „ich bin am Arbeiten\". Italienisch hat eine eigene Konstruktion und benutzt sie viel häufiger. Der Reflex, den du dir aneignen musst, ist sie zu verwenden, nicht sie wörtlich zu übersetzen."
      },
      {
        h: "So wird das gerundio gebildet",
        list: [
          "<b>-are → -ando</b>: parlare → parl<b>ando</b>",
          "<b>-ere → -endo</b>: prendere → prend<b>endo</b>",
          "<b>-ire → -endo</b>: dormire → dorm<b>endo</b>",
          "unregelmäßig: <em>fare → facendo, dire → dicendo, bere → bevendo</em>"
        ]
      },
      {
        trap: "<b>Stare + gerundio spricht nicht über die Zukunft.</b> „Morgen treffe ich Anna\" heißt <em>domani vedo Anna</em>, nie „sto vedendo Anna domani\". Dein Präsens für die Zukunft passt hier genau: <em>domani vedo</em> ist gebaut wie „morgen sehe ich\"."
      },
      {
        h: "Pronomen bei dieser Konstruktion",
        p: "Das Pronomen kann vor <em>stare</em> stehen oder sich an das gerundio hängen: <em><b>ti</b> sto aspettando</em> = <em>sto aspettando<b>ti</b></em>. Die erste Stellung ist im Gespräch häufiger."
      }
    ],
    grammar: {
      title: "Stare + gerundio",
      table: {
        head: ["Person", "stare", "Beispiel"],
        rows: [
          ["io", "sto", "Sto mangiando."],
          ["tu", "stai", "Che stai facendo?"],
          ["lui / lei", "sta", "Sta dormendo."],
          ["noi", "stiamo", "Stiamo uscendo adesso."],
          ["voi", "state", "State scherzando?"],
          ["loro", "stanno", "Stanno arrivando."]
        ]
      },
      examples: [
        { tr: "Was machst du gerade? — Ich lerne." },
        { tr: "Ich kann nicht reden, ich fahre gerade." },
        { tr: "Sie sind unterwegs, warte fünf Minuten." },
        { tr: "Ich warte vor der Bar auf dich." },
        { tr: "Ich bin gerade dabei zu gehen.", note: "stare per = im Begriff sein" },
        { tr: "Morgen fahre ich nach Rom.", note: "die Zukunft: einfaches Präsens" }
      ]
    },
    vocab: [
      "gerade etwas tun",
      "im Begriff sein, etwas zu tun",
      "jetzt",
      "im Moment",
      "warten",
      "Auto fahren",
      "scherzen",
      "ankommen",
      "hinausgehen",
      "sich beeilen",
      "einen Moment",
      "ich bin spät dran"
    ],
    exercises: [
      { q: "„Sto mangiando\" bedeutet:", opts: ["Normalerweise esse ich", "Ich esse gerade", "Ich werde essen"] },
      { q: "Bilde das gerundio von „fare\": ___" },
      { q: "Bilde das gerundio von „dormire\": ___" },
      { q: "Ergänze: „Loro ___ arrivando.\"" },
      {
        q: "Wie sagt man „morgen treffe ich Anna\"?",
        opts: ["Sto vedendo Anna domani", "Domani vedo Anna", "Sto per vedere Anna domani"],
        why: "Stare + gerundio kann keine Zukunft ausdrücken."
      },
      { q: "„Ich kann nicht reden, ich fahre gerade.\"" },
      { q: "Ergänze das Telefonat.", tr: "— Was machst du gerade? — Ich gehe gerade aus dem Haus, ich bin in einer Minute da." },
      { tr: "Ich warte vor der Bar auf dich." },
      { tr: "Entschuldige, ich gehe gerade in eine Besprechung." },
      { tr: "Was machst du gerade? — Ich lerne Italienisch." }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Freizeit",
    title: "Kultur, Kino und Musik",
    objectives: [
      "eine Karte kaufen und über einen Film sprechen",
      "eine Meinung über ein Buch, einen Film, ein Konzert äußern",
      "die Grundformeln benutzen, um etwas zu bewerten"
    ],
    theory: [
      {
        h: "Bewerten: mi è piaciuto",
        p: "Über etwas, das dir gefallen hat, sagst du <em>mi è piaciuto</em> (maskulin) oder <em>mi è piaciuta</em> (feminin). Das ist schon die Vergangenheit von <em>piacere</em> — die vollständige Erklärung kommt in A2, aber die Wendung ist zu häufig, um zu warten. Die Konstruktion ist deine: „es hat mir gefallen\", mit der Sache als Subjekt."
      },
      {
        h: "Originalfassung",
        p: "Das italienische Kino ist traditionell synchronisiert, genau wie das deutsche. Eine untertitelte Vorstellung wird mit <strong>V.O.</strong> (versione originale) oder <em>sottotitolato</em> gekennzeichnet. In großen Städten gibt es sie, aber man muss suchen."
      },
      {
        h: "Karten",
        p: "<em>Un biglietto intero</em> (voller Preis), <em>ridotto</em> (ermäßigt). Nummerierte Plätze sind die Regel: <em>Che posto preferisce?</em>"
      },
      {
        tip: "Das Wort <em>spettacolo</em> gilt für eine Kinovorstellung ebenso wie für eine Theateraufführung. <em>Lo spettacolo delle 21</em> ist die Neun-Uhr-Vorstellung."
      }
    ],
    grammar: {
      title: "Meinungen und Kultur",
      table: {
        head: ["Funktion", "Wendung", "auf Deutsch"],
        rows: [
          ["positiv", "Mi è piaciuto molto.", "Es hat mir sehr gefallen."],
          ["negativ", "Non mi è piaciuto per niente.", "Es hat mir überhaupt nicht gefallen."],
          ["empfehlen", "Te lo consiglio.", "Ich empfehle es dir."],
          ["Langeweile", "Mi ha annoiato.", "Es hat mich gelangweilt."],
          ["Karte", "Due biglietti per lo spettacolo delle nove.", "Zwei Karten für die Neun-Uhr-Vorstellung."],
          ["nach der Meinung fragen", "Com'era?", "Wie war es?"]
        ]
      },
      examples: [
        { tr: "Gestern Abend war ich im Kino." },
        { tr: "Der Film lief in der Originalfassung." },
        { tr: "Die Filmmusik hat mir sehr gefallen." },
        { tr: "Zwei ermäßigte Karten, bitte." },
        { tr: "Welches Genre magst du lieber?" },
        { tr: "Ich empfehle es dir wirklich." }
      ]
    },
    vocab: [
      "Film",
      "Vorstellung, Aufführung",
      "volle / ermäßigte Karte",
      "Originalfassung",
      "Untertitel",
      "Regisseur",
      "Schauspieler / Schauspielerin",
      "Filmmusik",
      "Konzert",
      "Ausstellung",
      "empfehlen",
      "wie war es?"
    ],
    culture: {
      title: "Mit italienischen Augen: Kino und Synchronisation",
      text: "<p>Italien hat eine der stärksten Synchrontraditionen der Welt, vergleichbar mit der deutschen. Die <i>doppiatori</i> sind bekannte Namen, und manche waren jahrzehntelang die italienische Stimme eines einzigen Hollywoodstars.</p><p>Die Nebenwirkung ist dieselbe wie im deutschsprachigen Raum: Italiener verstehen gesprochenes Englisch schlechter als Skandinavier, die mit Untertiteln aufgewachsen sind. Streaming ändert das gerade.</p><p>Wenn du Italienisch lernst, arbeitet die Synchronisation für dich: ein Film, den du schon kennst, auf Italienisch, ist fertiges Hörtraining mit einer Handlung, in der du dich nicht verlieren kannst.</p>"
    },
    exercises: [
      {
        q: "Was bedeutet „V.O.\" im Kinoprogramm?",
        opts: ["Gekürzte Fassung", "Originalfassung, meist untertitelt", "Kinderfassung"]
      },
      { q: "Ergänze: „Mi è ___ molto il film.\" (es hat mir sehr gefallen)" },
      { q: "Ergänze: „Due biglietti ___, per favore.\" (ermäßigt)" },
      { q: "Ordne zu.", pairs: ["Regisseur", "Filmmusik", "Untertitel", "Ausstellung"] },
      { q: "„Es hat mir sehr gefallen, ich empfehle es dir.\"" },
      {
        q: "„Lo spettacolo delle nove\" ist:",
        opts: ["Die neunte Aufführung", "Die Neun-Uhr-Vorstellung", "Neun Karten"]
      },
      {
        q: "Ergänze den Wortwechsel an der Kasse.",
        tr: "— Zwei Karten für die Neun-Uhr-Vorstellung. — Voll oder ermäßigt? — Eine volle und eine ermäßigte."
      },
      { tr: "Welche Art von Filmen magst du lieber?" },
      { tr: "Das Konzert hat mir sehr gefallen, vor allem der zweite Teil." },
      { tr: "Hast du Lust, am Sonntag in die Ausstellung zu gehen?" }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Test",
    title: "Test zu Einheit 9",
    objectives: ["fare/giocare/suonare, das Wetter und stare + gerundio prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„___ la chitarra.\"", opts: ["Gioco", "Suono", "Faccio"] },
      { q: "„___ a carte.\"", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "„___ caldo oggi.\" (es ist heiß)" },
      { q: "„___ il sole.\"" },
      { q: "Das gerundio von „bere\": ___" },
      { q: "„Loro ___ arrivando.\"" },
      {
        q: "„Morgen fahre ich nach Rom\":",
        opts: ["Sto andando a Roma domani", "Domani vado a Roma", "Sto per Roma domani"]
      },
      { tr: "Hast du Lust auf einen Spaziergang?" },
      { tr: "Ich gehe gerade raus, es ist kalt, ich nehme einen Regenschirm." },
      { tr: "Am Wochenende spiele ich Tennis und mache einen Spaziergang." }
    ]
  },
  "unit:a1-u10": {
    title: "Zurückblicken",
    grammarNote: "passato prossimo · erzählen · A1-Wiederholung"
  },
  "lesson:a1-u10-l1": {
    theme: "Die Vergangenheit",
    title: "Passato prossimo mit avere",
    objectives: [
      "die Vergangenheit mit avere bilden",
      "das regelmäßige Partizip bilden",
      "sagen, was du gestern gemacht hast"
    ],
    theory: [
      {
        h: "Eine zusammengesetzte Zeit, zwei Teile",
        p: "<strong>Passato prossimo</strong> = <em>avere</em> oder <em>essere</em> im Präsens + das <b>Partizip Perfekt</b>. Das ist dein Perfekt, genauso gebaut, und es ist die alltägliche Vergangenheit des Italienischen."
      },
      {
        contrast: "Die Parallele trägt weit: Deutsch benutzt im Gespräch ebenfalls das Perfekt und schiebt das Präteritum in die Schriftsprache. Italienisch macht es genauso, mit dem <em>passato remoto</em> als schriftlichem Gegenstück (C1). Zwei Unterschiede: das Partizip steht direkt hinter dem Hilfsverb statt am Satzende, und das Subjektpronomen entfällt (<em>ho mangiato</em>, nicht „io ho mangiato\")."
      },
      {
        h: "Das regelmäßige Partizip",
        list: [
          "<b>-are → -ato</b>: parlare → parl<b>ato</b>",
          "<b>-ere → -uto</b>: credere → cred<b>uto</b>",
          "<b>-ire → -ito</b>: finire → fin<b>ito</b>"
        ]
      },
      {
        h: "Die meisten Verben nehmen avere",
        p: "Jedes <b>transitive</b> Verb (eines, das ein direktes Objekt haben kann: „ich habe <i>etwas</i> gegessen\", „ich habe <i>jemanden</i> gesehen\") bildet das passato prossimo mit <em>avere</em>. Das Partizip <b>ändert sich dann nicht</b>: <em>Anna ha mangiato</em>, nicht „ha mangiata\"."
      },
      {
        h: "Häufige unregelmäßige Partizipien",
        p: "Die musst du auswendig lernen, denn sie gehören zu den häufigsten Verben: <em>fare → fatto</em>, <em>dire → detto</em>, <em>vedere → visto</em>, <em>prendere → preso</em>, <em>leggere → letto</em>, <em>scrivere → scritto</em>, <em>bere → bevuto</em>, <em>aprire → aperto</em>, <em>chiudere → chiuso</em>."
      }
    ],
    grammar: {
      title: "Passato prossimo mit avere",
      table: {
        head: ["Person", "avere", "Partizip", "ganze Form"],
        rows: [
          ["io", "ho", "mangiato", "ho mangiato"],
          ["tu", "hai", "parlato", "hai parlato"],
          ["lui / lei", "ha", "visto", "ha visto"],
          ["noi", "abbiamo", "letto", "abbiamo letto"],
          ["voi", "avete", "finito", "avete finito"],
          ["loro", "hanno", "fatto", "hanno fatto"]
        ]
      },
      examples: [
        { tr: "Gestern habe ich eine fantastische Pizza gegessen." },
        { tr: "Hast du gestern Abend den Film gesehen?" },
        { tr: "Wir haben einen Tisch für acht Uhr reserviert." },
        { tr: "Ich habe nicht verstanden, kannst du das wiederholen?" },
        { tr: "Was hast du am Wochenende gemacht?" },
        { tr: "Ich habe schon bezahlt.", note: "„già\" steht zwischen avere und dem Partizip" }
      ]
    },
    vocab: [
      "gestern",
      "vorgestern",
      "letzte Woche",
      "letzten Monat",
      "vor zwei Tagen",
      "schon",
      "noch nicht",
      "dann, danach",
      "zuerst, vorher",
      "machen → gemacht",
      "sehen → gesehen",
      "sagen → gesagt"
    ],
    exercises: [
      {
        q: "Woraus besteht das passato prossimo?",
        opts: [
          "Aus zwei Verben im Präsens",
          "avere/essere + dem Partizip Perfekt",
          "essere + dem Infinitiv"
        ]
      },
      { q: "Das Partizip von „parlare\": ___" },
      { q: "Das Partizip von „credere\": ___" },
      { q: "Das Partizip von „finire\": ___" },
      { q: "Ergänze: „Ieri ___ una pizza.\" (ich habe gegessen)" },
      { q: "Ordne dem Verb sein unregelmäßiges Partizip zu.", pairs: ["fatto", "visto", "scritto", "preso"] },
      {
        q: "Ergänze den Bericht vom Wochenende.",
        tr: "Am Samstag habe ich einen Film gesehen, dann war ich essen. Am Sonntag habe ich nichts gemacht."
      },
      { q: "„Ich habe nicht verstanden, kannst du das wiederholen?\"" },
      { tr: "Letzte Woche haben wir Florenz besichtigt." },
      { tr: "Gestern Abend habe ich ein sehr interessantes Buch gelesen." }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "Die Vergangenheit",
    title: "Passato prossimo mit essere",
    objectives: [
      "die Verben erkennen, die essere verlangen",
      "das Partizip an das Subjekt angleichen",
      "von einer Reise erzählen"
    ],
    theory: [
      {
        h: "Eine kleinere, aber sehr häufige Gruppe",
        p: "Verben der <b>Bewegung und der Zustandsänderung</b> bilden das passato prossimo mit <strong>essere</strong>: <em>andare, venire, arrivare, partire, uscire, entrare, tornare, salire, scendere, restare, rimanere, nascere, morire, diventare, essere, stare</em>. Dazu alle reflexiven Verben."
      },
      {
        contrast: "Diese Liste kennst du schon: es ist fast die deutsche sein-Liste (gehen, kommen, ankommen, abfahren, hinausgehen, hineingehen, zurückkehren, steigen, bleiben, geboren werden, sterben, werden). Zwei Abweichungen: die reflexiven Verben nehmen im Italienischen <b>immer</b> essere, während Deutsch „ich habe mich gewaschen\" sagt, und <em>piacere</em> gehört ebenfalls dazu."
      },
      {
        h: "Das Partizip gleicht sich dem Subjekt an",
        p: "Das ist der entscheidende Unterschied: mit <em>essere</em> verhält sich das Partizip wie ein Adjektiv. <em>Sono andat<b>o</b></em> (ein Mann), <em>sono andat<b>a</b></em> (eine Frau), <em>siamo andat<b>i</b></em> (maskuline oder gemischte Gruppe), <em>sono andat<b>e</b></em> (nur Frauen). Deutsch kennt das gar nicht: „ich bin gegangen\" bleibt immer gleich."
      },
      {
        h: "Wie man sich merkt, welches Verb essere nimmt",
        p: "Eine praktische Probe: wenn das Verb <b>kein direktes Objekt haben kann</b> („ich bin <i>was</i> gegangen\" ergibt keinen Sinn), verlangt es wahrscheinlich essere. Das ist nicht hundertprozentig sicher (<em>dormire</em> nimmt avere), stimmt aber meistens."
      },
      {
        trap: "Ein paar Verben wechseln mit der Bedeutung auch das Hilfsverb: <em>ho finito il lavoro</em> (ich habe die Arbeit beendet, transitiv, avere) gegenüber <em>il film è finito</em> (der Film ist zu Ende, intransitiv, essere). Dasselbe bei <em>cambiare, passare, cominciare</em> — Deutsch macht denselben Wechsel bei „er hat den Wagen gefahren\" und „er ist gefahren\"."
      }
    ],
    grammar: {
      title: "Passato prossimo mit essere",
      table: {
        head: ["Subjekt", "Form", "Beispiel"],
        rows: [
          ["ein Mann", "sono andato", "Sono andato a Roma."],
          ["eine Frau", "sono andata", "Sono andata a Roma."],
          ["Gruppe (m/gemischt)", "siamo andati", "Siamo andati insieme."],
          ["Gruppe (nur Frauen)", "siamo andate", "Siamo andate insieme."],
          ["reflexiv", "mi sono alzato/a", "Mi sono alzata alle sei."],
          ["unregelmäßig", "sono nato/a", "Sono nata a Varsavia."]
        ]
      },
      examples: [
        { tr: "Ich bin um sieben Uhr morgens losgefahren." },
        { tr: "Wir sind zu spät angekommen." },
        { tr: "Marco ist 1990 geboren." },
        { tr: "Wir haben uns wirklich gut amüsiert." },
        { tr: "Der Film war um elf zu Ende." },
        { tr: "Ich habe die Arbeit um sechs beendet.", note: "transitiv → avere" }
      ]
    },
    vocab: [
      "gehen → gegangen",
      "kommen → gekommen",
      "ankommen",
      "abfahren",
      "zurückkommen",
      "hinausgehen",
      "hineingehen",
      "geboren werden",
      "bleiben",
      "werden",
      "sich amüsieren",
      "Reise"
    ],
    exercises: [
      {
        q: "Was ist beim Partizip mit essere besonders?",
        opts: ["Es ändert sich nie", "Es gleicht sich dem Subjekt an wie ein Adjektiv", "Es endet immer auf -o"]
      },
      { q: "Eine Frau sagt „ich bin abgefahren\":", opts: ["sono partito", "sono partita", "ho partito"] },
      { q: "Ergänze für eine Gruppe von Frauen: „Loro sono ___ ieri.\" (sie sind angekommen)" },
      { q: "Das Partizip von „nascere\" (maskulin): ___" },
      {
        q: "Welche Verben bilden das passato prossimo mit essere?",
        opts: ["andare", "mangiare", "partire", "vedere", "nascere"]
      },
      {
        q: "„Il film ___ alle undici.\" (war zu Ende)",
        opts: ["ha finito", "è finito", "sono finito"],
        why: "Hier ist „finire\" intransitiv (der Film ging von selbst zu Ende) → essere."
      },
      {
        q: "Ergänze den Reisebericht (eine Frau spricht).",
        tr: "Ich bin am Freitag losgefahren und abends in Neapel angekommen. Ich habe mich wirklich gut amüsiert."
      },
      { tr: "Wir sind zu spät angekommen." },
      { tr: "Ich bin in Warschau geboren, aber in Krakau aufgewachsen." },
      { tr: "Gestern war ich mit einem Freund im Kino." }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "Die Vergangenheit",
    title: "Etwas Vergangenes erzählen",
    objectives: [
      "Sätze zu einer kurzen Erzählung verketten",
      "die Zeitausdrücke verwenden, die den Bericht ordnen",
      "jemanden nach seinem Wochenende fragen"
    ],
    theory: [
      {
        h: "Eine Erzählung braucht ein Zeitgerüst",
        p: "Verben allein ergeben keine Erzählung. Es braucht Verbindungswörter: <em>prima</em> (zuerst), <em>poi</em> (dann), <em>dopo</em> (danach), <em>alla fine</em> (am Ende), <em>mentre</em> (während). Ohne sie stehen die Sätze nebeneinander wie eine Liste."
      },
      {
        h: "Fragen nach der Vergangenheit",
        p: "<em>Che cosa hai fatto?</em>, <em>Dove sei andato/a?</em>, <em>Con chi sei uscito/a?</em>, <em>Com'è andata?</em> („wie ist es gelaufen?\"). Die letzte ist als Gesprächseinstieg sehr verbreitet."
      },
      {
        h: "Già und ancora stehen mittendrin",
        p: "Die Adverbien <em>già</em> (schon), <em>ancora</em> (noch), <em>appena</em> (gerade eben), <em>mai</em> (nie) stehen <b>zwischen Hilfsverb und Partizip</b>: <em>ho <b>già</b> mangiato</em>, <em>non sono <b>mai</b> stata a Venezia</em>. Deutsch macht dasselbe: „ich habe schon gegessen\"."
      },
      {
        tip: "Eine natürliche Art zu antworten: nicht alles aufzählen. Ein Italiener antwortet kurz (<em>Niente di che, sono stato a casa</em>) und wird erst ausführlich, wenn man nachfragt."
      }
    ],
    grammar: {
      title: "Verbindungswörter und Fragen nach der Vergangenheit",
      table: {
        head: ["Funktion", "Ausdruck", "Beispiel"],
        rows: [
          ["Abfolge", "prima… poi… alla fine", "Prima ho lavorato, poi sono uscito."],
          ["gleichzeitig", "mentre", "Mentre aspettavo, ho letto."],
          ["Frage", "Che cosa hai fatto?", "Was hast du gemacht?"],
          ["Frage", "Com'è andata?", "Wie ist es gelaufen?"],
          ["schon", "già (mittendrin)", "Ho già finito."],
          ["nie", "non… mai (mittendrin)", "Non sono mai stato in Sicilia."]
        ]
      },
      examples: [
        { tr: "Am Samstagmorgen habe ich auf dem Markt eingekauft." },
        { tr: "Dann bin ich ins Fitnessstudio gegangen." },
        { tr: "Am Abend sind wir mit Freunden ausgegangen." },
        { tr: "Am Ende sind wir spät nach Hause gekommen." },
        { tr: "Wie ist die Besprechung gelaufen? — Nicht schlecht." },
        { tr: "Ich bin noch nicht fertig." }
      ]
    },
    vocab: [
      "zuerst",
      "dann",
      "danach",
      "am Ende",
      "während",
      "wie ist es gelaufen?",
      "nichts Besonderes",
      "eine Katastrophe",
      "es war lustig",
      "Lebensmittel einkaufen",
      "shoppen gehen (Kleidung)",
      "sich ausruhen"
    ],
    exercises: [
      {
        q: "Wo steht „già\" im passato prossimo?",
        opts: ["Vor avere", "Zwischen avere und dem Partizip", "Am Satzende"],
        why: "Ho già mangiato — das Adverb steht mittendrin, genau wie in „ich habe schon gegessen\"."
      },
      { q: "Ergänze: „Non sono ___ stata a Venezia.\" (nie)" },
      { q: "Ergänze: „___ ho lavorato, poi sono uscito.\" (zuerst)" },
      {
        q: "„Com'è andata?\" fragt nach:",
        opts: ["welchen Weg du genommen hast", "wie etwas gelaufen ist", "wie du dich jetzt fühlst"]
      },
      {
        q: "Ergänze den Bericht.",
        tr: "Am Samstag habe ich eingekauft, dann bin ich ins Fitnessstudio gegangen, und am Abend sind wir mit Freunden ausgegangen."
      },
      { q: "„Ich bin noch nicht fertig.\"" },
      { tr: "Am Ende sind wir spät nach Hause gekommen." },
      {
        q: "Montagmorgen bei der Arbeit.",
        setting: "Die Büroküche, neben der Kaffeemaschine.",
        lines: [
          { tr: "Hey! Wie war dein Wochenende?" },
          { tr: "Sag, nichts Besonderes, du warst zu Hause.", answerTr: "Nichts Besonderes, ich war zu Hause." },
          { tr: "Ich war in den Bergen. Wunderschön!" },
          { tr: "Frag, mit wem er dort war.", answerTr: "Mit wem warst du dort?" }
        ]
      },
      { tr: "Zuerst habe ich eingekauft, dann habe ich mich ausgeruht." },
      { tr: "Wie ist es gelaufen? — Gut, es war lustig." }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Wiederholung",
    title: "Wiederholung der ganzen Stufe",
    objectives: [
      "alles aus A1 zusammenführen",
      "prüfen, ob du für A2 bereit bist",
      "deine eigenen Lücken finden"
    ],
    theory: [
      {
        h: "Was du inzwischen können solltest",
        list: [
          "dich vorstellen, sagen, woher du kommst, was du machst und wie alt du bist",
          "in einer Bar und im Restaurant bestellen, einkaufen, nach einem Preis fragen",
          "über deinen Tag, die Uhrzeit und deine Gewohnheiten sprechen",
          "nach dem Weg fragen und die Antwort verstehen",
          "eine Person beschreiben: Aussehen und Charakter",
          "kurz erzählen, was du gestern und am Wochenende gemacht hast"
        ]
      },
      {
        h: "Die Grammatik, die sitzen muss",
        p: "Die drei Konjugationen im Präsens, <em>essere</em>, <em>avere</em>, <em>fare</em>, <em>andare</em>, <em>venire</em>, <em>stare</em>, die Modalverben, bestimmte und unbestimmte Artikel, Genus und Numerus, die Adjektive, die verschmolzenen Präpositionen, die reflexiven Verben, <em>piacere</em>, <em>c'è / ci sono</em> und die Grundlagen des passato prossimo."
      },
      {
        h: "Was dich in A2 erwartet",
        p: "Das imperfetto und sein Unterschied zum passato prossimo, das futuro semplice, der Konditional, die direkten und indirekten Objektpronomen, der vollständige Imperativ, <em>ci</em> und <em>ne</em> in mehr Zusammenhängen, sowie Situationen auf Reisen, beim Arzt und im Hotel."
      },
      {
        tip: "Wenn du in dieser Wiederholung unter 70 % bleibst, geh nicht weiter. A2 baut direkt auf diesen Strukturen auf, und eine A1-Lücke wird dort zur Mauer."
      }
    ],
    vocab: [
      "wiederholen",
      "Übung",
      "Fehler",
      "Regel",
      "Stufe",
      "sich verbessern",
      "ich bin bereit",
      "das schaffe ich"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Bestimmte Artikel:", items: [, , , , ] },
      {
        q: "Ergänze die Vorstellung.",
        tr: "Ich heiße Kasia, ich bin Polin und wohne seit zwei Jahren in Bologna. Ich bin Lehrerin."
      },
      { q: "„Mi ___ gli spaghetti.\" (ich mag Spaghetti)" },
      { q: "„Vado ___ cinema.\" (a + il)" },
      { q: "„Ieri ___ una pizza.\" (ich habe gegessen)" },
      { q: "„Ieri ___ al cinema.\" (ich bin gegangen — eine Frau)" },
      { tr: "Gestern Abend waren wir mit Freunden in einem Restaurant." },
      { tr: "Ich bin früh aufgewacht und habe in einer Bar gefrühstückt." },
      { tr: "Ich heiße Anna, ich bin Polin und wohne seit einem Jahr in Florenz." }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Prüfung",
    title: "A1-Abschlussprüfung",
    objectives: ["prüfen, ob du bereit bist, zu A2 überzugehen"],
    theory: [
      {
        p: "Zwölf Fragen aus der ganzen Stufe. Bestanden ab 70 %. Ein Ergebnis darunter heißt: zurück zu den Einheiten, in denen du Fehler machst, nicht zu allen."
      }
    ],
    exercises: [
      {  },
      { q: "Du betrittst um 18 Uhr ein Geschäft:", opts: ["Buongiorno", "Buonasera", "Buonanotte"] },
      { q: "Artikel:", items: [, , , ] },
      { q: "„Non mi ___ il pesce crudo.\"" },
      { q: "„Devo ___ presto domani.\" (aufstehen — alzarsi)" },
      { q: "„___ le tre e mezza.\"" },
      { q: "„Abito ___ Italia.\"" },
      { q: "„___ un tavolo libero?\"" },
      { q: "„È più simpatico ___ bello.\"", opts: ["di", "che", "come"] },
      { q: "„Ieri ___ al cinema.\" (wir sind gegangen)" },
      {
        q: "Ergänze.",
        tr: "Am Samstag habe ich eingekauft, dann bin ich ins Fitnessstudio gegangen, und am Abend bin ich mit Freunden ausgegangen."
      },
      { tr: "Guten Abend, ich würde gern einen Tisch für zwei um acht reservieren." }
    ]
  }
});
