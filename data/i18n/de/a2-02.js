/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/a2-02.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:a2-u05": { title: "Wohnungen und Viertel", grammarNote: "das lokative ci · Anzeigen · einen Ort beschreiben" },
  "lesson:a2-u05-l1": {
    theme: "Wohnen",
    title: "Anzeigen und Wohnungssuche",
    objectives: [
      "eine italienische Mietanzeige lesen",
      "nach Miete, Nebenkosten und Kaution fragen",
      "beschreiben, was du suchst"
    ],
    theory: [
      {
        h: "Anzeigen sind in Kurzschrift geschrieben",
        p: "<em>Bilocale</em> ist eine Wohnung mit einem Zimmer plus Wohnzimmer, nicht „zwei Schlafzimmer\". Gezählt wird die <b>Zahl der Wohnräume einschließlich des Wohnzimmers</b>: <em>monolocale</em> (Einzimmerwohnung), <em>bilocale</em>, <em>trilocale</em>. Küche und Bad zählen nicht mit."
      },
      {
        contrast: "Dieses System hast du schon: die Zweizimmerwohnung ist genau das <em>bilocale</em>, Wohnzimmer plus ein Zimmer, Küche und Bad nicht gezählt. Wo ein englischsprachiger Lernender umdenken muss, wechselst du nur das Etikett."
      },
      {
        h: "Drei Zahlen, nach denen man fragen muss",
        list: [
          "<b>l'affitto</b> — die eigentliche Miete",
          "<b>le spese condominiali</b> — die Nebenkosten (oft 50 bis 150 Euro im Monat, nicht immer inbegriffen)",
          "<b>la cauzione</b> — die Kaution, meist zwei oder drei Monatsmieten"
        ]
      },
      {
        tip: "Abkürzungen in Anzeigen: <em>mq</em> (Quadratmeter), <em>p. terra</em> (Erdgeschoss), <em>ammobiliato/arredato</em> (möbliert), <em>spese escluse</em> (Nebenkosten nicht enthalten), <em>rif.</em> (Objektnummer). Die Stockwerkzählung ist deine: <em>piano terra</em> ist das Erdgeschoss, <em>primo piano</em> der erste Stock."
      }
    ],
    grammar: {
      title: "Wortschatz der Anzeigen",
      table: {
        head: ["Abkürzung / Wort", "Bedeutung", "Hinweis"],
        rows: [
          ["monolocale", "Einzimmerwohnung", "ein einziger Raum"],
          ["bilocale", "Zweizimmerwohnung", "Wohnzimmer + ein Zimmer"],
          ["arredato", "möbliert", "das Gegenteil: vuoto"],
          ["spese escluse", "ohne Nebenkosten", "Hausgeld dazurechnen"],
          ["cauzione", "Kaution", "meist 2 bis 3 Monatsmieten"],
          ["luminoso", "hell", "das Lieblingswort der Anzeigen"]
        ]
      },
      examples: [
        { tr: "Ich suche eine möblierte Zweizimmerwohnung im Universitätsviertel." },
        { tr: "Wie hoch ist die Monatsmiete mit Nebenkosten?" },
        { tr: "Wie hoch sind die Nebenkosten?" },
        { tr: "Die Kaution beträgt drei Monatsmieten." },
        { tr: "Ist es ein 4+4-Vertrag oder ein befristeter?" },
        { tr: "Sind Haustiere erlaubt?" }
      ]
    },
    vocab: [
      "Miete",
      "mieten",
      "Vermieter",
      "Mieter",
      "Nebenkosten",
      "Kaution",
      "Mietvertrag",
      "möbliert / unmöbliert",
      "hell",
      "Erdgeschoss",
      "Heizung",
      "Immobilienbüro"
    ],
    exercises: [
      {
        q: "Ein „bilocale\" ist eine Wohnung:",
        opts: ["mit zwei Schlafzimmern", "mit Wohnzimmer und einem Zimmer", "auf zwei Ebenen"]
      },
      { q: "„Spese escluse\" bedeutet:", opts: ["Nebenkosten inbegriffen", "Nebenkosten kommen dazu", "ohne Kaution"] },
      { q: "Ergänze: „La ___ è di tre mensilità.\" (die Kaution)" },
      { q: "Ordne zu.", pairs: ["Mieter", "Vermieter", "möbliert", "Erdgeschoss"] },
      { q: "„Wie hoch sind die Nebenkosten?\"" },
      {
        q: "Ergänze die Fragen an den Vermieter.",
        tr: "Wie hoch ist die Monatsmiete? Sind die Nebenkosten enthalten? Und die Kaution?"
      },
      { tr: "Ich suche eine möblierte Zweizimmerwohnung in der Innenstadt." },
      {
        q: "Ein „4+4\"-Vertrag ist:",
        opts: ["vier Monate", "vier Jahre mit automatischer Verlängerung", "für vier Mieter"]
      },
      { tr: "Helle Zweizimmerwohnung, möbliert, zweiter Stock, ohne Nebenkosten." },
      { tr: "Ich wüsste gern, wie hoch die Nebenkosten sind." }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Wohnen",
    title: "Die Partikel ci",
    objectives: [
      "eine Ortsangabe durch ci ersetzen",
      "ci in festen Wendungen erkennen",
      "das Orts-ci vom uns-ci unterscheiden"
    ],
    theory: [
      {
        h: "Ci ersetzt einen Ort",
        p: "<em>Vai a Roma? — Sì, <b>ci</b> vado domani.</em> Hier bedeutet <em>ci</em> „dorthin\" und steht für die ganze Ortsangabe."
      },
      {
        contrast: "Deutsch hat dafür keine unbetonte Partikel vor dem Verb: du sagst „ich fahre morgen hin\", mit einer Partikel am Satzende, oder du lässt es ganz weg. Näher kommt dein <b>da(r)-</b>-Wort: <em>ci penso</em> ist „ich denke daran\", und genau diese Entsprechung solltest du dir merken, denn sie deckt die zweite Bedeutung von <em>ci</em> vollständig ab."
      },
      {
        h: "Ci ersetzt auch „a + Sache\"",
        p: "<em>Pensi all'esame? — <b>Ci</b> penso sempre.</em> („ich denke ständig daran\"). Vorsicht: bei Personen ist es anders, <em>penso <b>a lei</b></em>, nicht „ci penso\"."
      },
      {
        h: "Ci in verschmolzenen Verben",
        list: [
          "<em>volerci</em> — nötig sein, dauern: <em>Ci vogliono due ore.</em> („es dauert zwei Stunden\")",
          "<em>metterci</em> — persönlich brauchen: <em>Ci metto un'ora.</em> („ich brauche eine Stunde\")",
          "<em>farcela</em> — es schaffen: <em>Non ce la faccio più.</em>",
          "<em>entrarci</em> — damit zu tun haben: <em>Che c'entra?</em> („was hat das damit zu tun?\")"
        ]
      },
      {
        trap: "Dieselbe Form <em>ci</em> heißt auch „uns\": <em>ci vedono</em> (sie sehen uns), <em>ci hanno detto</em> (sie haben uns gesagt). Zusammenhang und Verb entscheiden."
      }
    ],
    grammar: {
      title: "Die Bedeutungen von ci",
      table: {
        head: ["Funktion", "Beispiel", "auf Deutsch"],
        rows: [
          ["Ort", "Ci vado domani.", "Ich fahre morgen hin."],
          ["a + Sache", "Ci penso io.", "Ich kümmere mich darum."],
          ["volerci", "Ci vogliono due ore.", "Es dauert zwei Stunden."],
          ["metterci", "Ci metto mezz'ora.", "Ich brauche eine halbe Stunde."],
          ["farcela", "Ce la faccio!", "Ich schaffe das!"],
          ["uns", "Ci hanno invitati.", "Sie haben uns eingeladen."]
        ]
      },
      examples: [
        { tr: "Warst du schon mal in Sizilien? — Ja, ich war zweimal dort." },
        { tr: "Wie lange dauert es von hier zum Bahnhof?" },
        { tr: "Ich brauche zu Fuß zwanzig Minuten." },
        { tr: "Ich kann nicht mehr, ich bin erschöpft." },
        { tr: "Was hat das mit dem Mietvertrag zu tun?" },
        { tr: "Ich gehe jeden Samstag auf den Markt." }
      ]
    },
    vocab: [
      "ich fahre hin",
      "es dauert, man braucht",
      "ich brauche",
      "es schaffen",
      "was hat das damit zu tun?",
      "der Umzug",
      "Nachbar",
      "die Eigentümergemeinschaft",
      "Haustür",
      "Gegensprechanlage",
      "Rechnung",
      "Klempner"
    ],
    exercises: [
      { q: "„Vai a Roma? — Sì, ___ vado domani.\"", opts: ["la", "ci", "ne"] },
      { q: "Ergänze: „Quanto ___ vuole da qui alla stazione?\"" },
      { q: "Ergänze: „___ metto venti minuti.\"" },
      {
        q: "„Ci vogliono due ore\" bedeutet:",
        opts: ["Wir wollen zwei Stunden", "Es dauert zwei Stunden", "Wir haben zwei Stunden"]
      },
      {
        q: "„Non ce la faccio più\" bedeutet:",
        opts: ["Ich mache es nicht mehr", "Ich kann nicht mehr", "Es gibt nichts mehr"]
      },
      {
        q: "In welchen Sätzen bedeutet „ci\" einen Ort?",
        opts: ["Ci vado domani.", "Ci hanno invitati.", "In palestra ci vado poco.", "Ci penso io."]
      },
      { q: "Ergänze.", tr: "— Wie lange dauert die Fahrt? — Ich brauche mit der U-Bahn eine halbe Stunde." },
      { q: "„Ich gehe jeden Samstag auf den Markt.\"" },
      { tr: "Es dauert mindestens zwei Stunden, den Umzug zu beenden." },
      { tr: "Ich gehe zu Fuß in die Innenstadt, ich brauche zwanzig Minuten." }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Wohnen",
    title: "Das Innere beschreiben",
    objectives: [
      "die Räume und die Möbel benennen",
      "den Grundriss einer Wohnung beschreiben",
      "Ortspräpositionen verwenden"
    ],
    theory: [
      {
        h: "Eine italienische Wohnung folgt einer anderen Logik",
        p: "<em>Il soggiorno</em> (das Wohnzimmer) ist oft zugleich das Esszimmer; die Küche ist meist ein eigener kleiner Raum (eine <em>cucina abitabile</em> ist eine, in der man essen kann). <em>Il ripostiglio</em> ist die Abstellkammer, näher an deiner Speisekammer als an einem begehbaren Schrank."
      },
      {
        h: "Balcone, terrazzo, loggia",
        p: "<em>Il balcone</em> ragt aus dem Gebäude heraus, <em>la loggia</em> ist in es hineingezogen, <em>il terrazzo</em> ist groß und liegt meist auf dem Dach. In Anzeigen zeigt sich der Unterschied im Preis."
      },
      {
        h: "Präpositionen für den Grundriss",
        p: "<em>a destra / a sinistra di</em>, <em>di fronte a</em>, <em>accanto a</em>, <em>in fondo a</em>, <em>sopra / sotto</em>, <em>tra</em>. Alle verlangen <em>a</em> oder <em>di</em>, also kommen die verschmolzenen Präpositionen zurück: <em>accanto <b>alla</b> finestra</em>. Ein Trost: Kasus gibt es dabei nicht, du wählst nur die Präposition."
      },
      {
        tip: "Die Stockwerke werden vom <em>piano terra</em> aufwärts gezählt, genau wie bei dir: <em>primo piano</em> ist dein erster Stock, der über dem Erdgeschoss. Hier musst du nichts umrechnen."
      }
    ],
    grammar: {
      title: "Räume und Möbel",
      table: {
        head: ["Raum", "typische Möbel", "Beispielsatz"],
        rows: [
          ["il soggiorno", "il divano, la poltrona", "Il divano è di fronte alla finestra."],
          ["la cucina", "il frigorifero, il forno", "Il forno è sotto il piano cottura."],
          ["la camera da letto", "il letto, l'armadio", "L'armadio è accanto al letto."],
          ["il bagno", "la doccia, il lavandino", "La doccia è in fondo."],
          ["lo studio", "la scrivania, la libreria", "La scrivania è vicino alla finestra."],
          ["il balcone", "—", "Il balcone dà sul cortile."]
        ]
      },
      examples: [
        { tr: "Die Wohnung ist im dritten Stock, ohne Aufzug." },
        { tr: "Die Küche ist klein, aber man kann darin essen." },
        { tr: "Der Balkon geht auf den Innenhof." },
        { tr: "Neben dem Eingang gibt es eine Abstellkammer." },
        { tr: "Die Fenster gehen nach Süden, deshalb ist es sehr hell." },
        { tr: "Die Heizung wird einzeln geregelt." }
      ]
    },
    vocab: [
      "Wohnzimmer",
      "Schlafzimmer",
      "Bad",
      "Flur",
      "Abstellkammer",
      "Sofa",
      "Kleiderschrank",
      "Schreibtisch",
      "Kühlschrank",
      "Waschmaschine",
      "gehen auf (ein Fenster)",
      "Einzelheizung"
    ],
    exercises: [
      {
        q: "Ordne dem Raum das Möbelstück zu.",
        pairs: ["l'armadio", "il divano", "il frigorifero", "la scrivania"]
      },
      { q: "Ergänze: „L'armadio è accanto ___ letto.\"" },
      { q: "Ergänze: „Il balcone ___ sul cortile.\" (geht auf)" },
      {
        q: "Eine „cucina abitabile\" ist eine Küche:",
        opts: ["mit Fenster", "groß genug, um darin zu essen", "die möbliert übergeben wird"]
      },
      { q: "Beschreib die Wohnung.", tr: "Das Sofa steht gegenüber dem Fenster, und das Bücherregal steht neben dem Sofa." },
      { q: "„Die Wohnung ist im dritten Stock, ohne Aufzug.\"" },
      { tr: "Die Fenster gehen nach Süden, deshalb ist es sehr hell." },
      { q: "Artikel:", items: [, , , ] },
      { tr: "Das Schlafzimmer geht auf den Hof, deshalb ist es ruhig." },
      { tr: "Das Wohnzimmer ist hell und in der Küche kann man essen." }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Wohnen",
    title: "Probleme und wie man sie meldet",
    objectives: [
      "einen Schaden beim Vermieter oder der Hausverwaltung melden",
      "beschreiben, was kaputt ist",
      "eine Reparatur vereinbaren"
    ],
    theory: [
      {
        h: "Drei Verben decken die meisten Schäden ab",
        list: [
          "<b>non funziona</b> — es funktioniert nicht (ein Gerät)",
          "<b>perde</b> — es tropft, es ist undicht (ein Hahn, ein Rohr)",
          "<b>si è rotto/a</b> — es ist kaputtgegangen"
        ]
      },
      {
        h: "Wer wofür zuständig ist",
        p: "In einem italienischen Mietvertrag trägt der Mieter die <b>kleinen Reparaturen</b> (<em>manutenzione ordinaria</em>), der Vermieter die <b>großen</b> (<em>straordinaria</em>: Therme, Elektrik, Dach). Die Aufteilung ähnelt deiner Kleinreparaturklausel, und es lohnt sich, sie in die Nachricht zu schreiben: <em>Credo che sia manutenzione straordinaria.</em>"
      },
      {
        h: "Der Ton der Meldung",
        p: "Eine italienische Schadensmeldung ist in der Regel höflich und indirekt: <em>Le scrivo perché…</em>, <em>Volevo segnalarle che…</em>. Ein knappes <em>ripari subito!</em> arbeitet gegen dich: das ist keine Kultur, in der Bestimmtheit die Sache beschleunigt, und eine sachlich-direkte Formulierung wirkt hier härter, als du sie meinst."
      },
      {
        tip: "<em>Il condominio</em> ist zugleich das Gebäude und die Eigentümergemeinschaft als Rechtsperson. <em>L'amministratore di condominio</em> ist die Hausverwaltung, der man Probleme im Gemeinschaftseigentum meldet."
      }
    ],
    grammar: {
      title: "Einen Schaden melden",
      table: {
        head: ["Problem", "auf Italienisch", "auf Deutsch"],
        rows: [
          ["ein Gerät", "La lavatrice non funziona.", "Die Waschmaschine funktioniert nicht."],
          ["Wasser", "Il rubinetto perde.", "Der Wasserhahn tropft."],
          ["kaputt", "Si è rotta la serratura.", "Das Schloss ist kaputtgegangen."],
          ["Heizung", "Il riscaldamento non si accende.", "Die Heizung geht nicht an."],
          ["Strom", "È saltata la corrente.", "Der Strom ist ausgefallen."],
          ["melden", "Volevo segnalarle un problema.", "Ich wollte Ihnen ein Problem melden."]
        ]
      },
      examples: [
        { tr: "Hallo, ich schreibe Ihnen, weil die Therme seit gestern nicht funktioniert." },
        { tr: "Der Wasserhahn im Bad tropft." },
        { tr: "Könnten Sie einen Klempner schicken?" },
        { tr: "Wann kann der Techniker kommen?" },
        { tr: "Ich bin ab achtzehn Uhr zu Hause." },
        { tr: "Danke für die schnelle Erledigung." }
      ]
    },
    vocab: [
      "Wasserhahn",
      "tropfen, undicht sein",
      "kaputtgehen",
      "Schloss",
      "Therme, Boiler",
      "Strom",
      "ausfallen (Strom)",
      "Klempner",
      "Elektriker",
      "Techniker",
      "melden",
      "Instandhaltung, Reparatur"
    ],
    exercises: [
      {
        q: "Der Wasserhahn tropft. Wie sagt man das?",
        opts: ["Il rubinetto non funziona.", "Il rubinetto perde.", "Il rubinetto si è acceso."]
      },
      { q: "Ergänze: „È ___ la corrente.\" (der Strom ist ausgefallen)" },
      { q: "Ergänze: „Si è ___ la serratura.\" (das Schloss ist kaputtgegangen)" },
      {
        q: "Ordne dem Handwerk das Problem zu.",
        pairs: ["ein tropfender Hahn", "kein Strom", "eine kaputte Therme", "das Gemeinschaftseigentum"]
      },
      { q: "„Könnten Sie einen Klempner schicken?\"" },
      {
        q: "Schreib die Meldung.",
        tr: "Hallo, ich wollte melden, dass die Therme seit gestern nicht funktioniert. Könnten Sie einen Techniker schicken?"
      },
      {
        q: "Wer zahlt in einer Mietwohnung normalerweise den Austausch einer Therme?",
        opts: ["Der Mieter", "Der Vermieter (manutenzione straordinaria)", "Die Eigentümergemeinschaft"]
      },
      { tr: "Ich bin ab achtzehn Uhr zu Hause." },
      { tr: "Die Heizung geht nicht an und es ist sehr kalt hier drin." },
      { tr: "Ich wollte melden, dass der Wasserhahn im Bad tropft." }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Test",
    title: "Test zu Einheit 5",
    objectives: ["den Wohnwortschatz und die Partikel ci prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Bilocale\":", opts: ["zwei Schlafzimmer", "Wohnzimmer + Zimmer", "zwei Ebenen"] },
      { q: "„La ___ è di tre mensilità.\"" },
      { q: "„Quanto ___ vuole per arrivare?\"" },
      { q: "„___ metto mezz'ora.\"" },
      { q: "„Non ce la faccio più\":", opts: ["Ich mache es nicht mehr", "Ich kann nicht mehr", "Es gibt nichts mehr"] },
      { q: "„L'armadio è accanto ___ letto.\"" },
      { q: "„Il rubinetto ___.\" (tropft)" },
      { q: "Ordne zu.", pairs: ["Mieter", "Abstellkammer", "Waschmaschine", "ausfallen (Strom)"] },
      { tr: "Ich suche eine möblierte Zweizimmerwohnung, Nebenkosten inbegriffen, in Innenstadtnähe." },
      { tr: "Es sind zwanzig Minuten zu Fuß vom Bahnhof." }
    ]
  },
  "unit:a2-u06": { title: "Bei der Arbeit", grammarNote: "der Höflichkeitskonditional · das unpersönliche si · E-Mails" },
  "lesson:a2-u06-l1": {
    theme: "Arbeit",
    title: "Das Telefon und höfliche Bitten",
    objectives: [
      "ein Telefonat durchstehen",
      "den Konditional für eine höfliche Bitte verwenden",
      "eine Nachricht hinterlassen und entgegennehmen"
    ],
    theory: [
      {
        h: "Ein Anruf beginnt mit Pronto",
        p: "<strong>Pronto?</strong> sagt, wer abnimmt, zu jeder Tageszeit und in jeder Beziehung. Wörtlich heißt es „bereit\" und stammt aus der Zeit der Vermittlungsstellen."
      },
      {
        contrast: "Hier musst du eine feste Gewohnheit ablegen: im deutschsprachigen Raum meldet man sich mit dem eigenen Nachnamen. Auf Italienisch klingt das befremdlich. Es heißt <em>pronto</em>, und der Name kommt erst im nächsten Satz: <em>Pronto, sono Anna Smith.</em>"
      },
      {
        h: "Der Konditional macht aus der Bitte ein Angebot",
        p: "<em>Può richiamarmi?</em> ist korrekt, aber direkt. <em><b>Potrebbe</b> richiamarmi?</em> lässt dem anderen Raum abzulehnen und klingt deshalb höflicher: genau dein „könnten Sie\" gegenüber „können Sie\". Dieselbe Logik wie <em>vorrei</em> statt <em>voglio</em>."
      },
      {
        tip: "<em>Le dispiacerebbe…?</em> („würde es Ihnen etwas ausmachen…?\") ist die höchste Stufe der Höflichkeit in einer Bitte. Heb sie für etwas auf, das wirklich Mühe macht."
      }
    ],
    grammar: {
      title: "Höfliche Bitten",
      table: {
        head: ["Stufe", "Form", "auf Deutsch"],
        rows: [
          ["neutral", "Può richiamarmi?", "Können Sie mich zurückrufen?"],
          ["höflich", "Potrebbe richiamarmi?", "Könnten Sie mich zurückrufen?"],
          ["sehr höflich", "Le dispiacerebbe richiamarmi?", "Würde es Ihnen etwas ausmachen, zurückzurufen?"],
          ["über sich selbst", "Vorrei parlare con…", "Ich würde gern mit … sprechen."],
          ["ein Vorschlag", "Sarebbe possibile…?", "Wäre es möglich…?"],
          ["zustimmen", "Certo, volentieri.", "Natürlich, gern."]
        ]
      },
      examples: [
        { tr: "Hallo? Hier ist Anna, ich rufe wegen der Besprechung an." },
        { tr: "Könnten Sie mich mit Herrn Rossi verbinden?" },
        { tr: "Tut mir leid, er ist gerade beschäftigt." },
        { tr: "Könnten Sie ihm ausrichten, dass ich angerufen habe?" },
        { tr: "Ich hinterlasse Ihnen meine Nummer." },
        { tr: "Ich rufe später noch einmal an, danke." }
      ]
    },
    vocab: [
      "hallo? (am Telefon)",
      "wer spricht bitte?",
      "könnten Sie mich verbinden mit…?",
      "er ist in einer Besprechung",
      "eine Nachricht hinterlassen",
      "zurückrufen",
      "ein Termin",
      "verschieben",
      "absagen",
      "die Leitung ist besetzt",
      "ich verstehe Sie kaum",
      "könnten Sie…?"
    ],
    exercises: [
      {  },
      {
        q: "Welche Bitte ist die höflichste?",
        opts: ["Mi richiami!", "Può richiamarmi?", "Le dispiacerebbe richiamarmi?"]
      },
      { q: "Ergänze: „___ dirgli che ho chiamato?\" (könnten Sie)" },
      { q: "Ergänze: „___ il signor Rossi, per favore?\" (verbinden Sie mich mit)" },
      { q: "Ordne zu.", pairs: ["er ist in einer Besprechung", "verschieben", "absagen", "zurückrufen"] },
      { q: "„Ich würde die Besprechung gern verschieben.\"" },
      {
        q: "Du rufst bei einer Firma an.",
        setting: "Montag, zehn Uhr, der Empfang.",
        lines: [
          { tr: "Studio Bianchi, guten Morgen." },
          {
            tr: "Stell dich vor und bitte darum, mit Herrn Rossi verbunden zu werden.",
            answerTr: "Guten Morgen, hier ist Anna Smith. Könnten Sie mich mit Herrn Rossi verbinden?"
          },
          { tr: "Tut mir leid, er ist gerade in einer Besprechung." },
          { tr: "Bitte höflich darum, dass er zurückruft.", answerTr: "Könnten Sie ihm sagen, er soll mich zurückrufen?" },
          { tr: "Natürlich. Hinterlassen Sie mir eine Nummer?" }
        ]
      },
      {
        q: "Ergänze die Bitte.",
        tr: "Guten Tag, ich würde gern mit Frau Bianchi sprechen. Wenn sie beschäftigt ist, könnte sie mich heute Nachmittag zurückrufen?"
      },
      { tr: "Er ist gerade beschäftigt, möchten Sie eine Nachricht hinterlassen?" },
      { tr: "Hallo? Hier ist Anna. Könnten Sie mich mit Herrn Rossi verbinden?" }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Arbeit",
    title: "Geschäftskorrespondenz",
    objectives: [
      "eine kurze geschäftliche E-Mail schreiben",
      "die Anrede- und Schlussformeln kennen",
      "das Register auf den Empfänger abstimmen"
    ],
    theory: [
      {
        h: "Die Anrede richtet sich nach der Distanz",
        list: [
          "<em>Gentile Dott.ssa Bianchi,</em> — förmlich, an jemanden, dessen Namen du kennst",
          "<em>Spettabile Azienda,</em> — an ein Unternehmen als Institution",
          "<em>Buongiorno Marco,</em> — halbförmlich, an eine Kollegin oder einen Kollegen",
          "<em>Ciao Marco,</em> — informell"
        ]
      },
      {
        h: "Der Schluss",
        p: "<em>Cordiali saluti</em> ist der sichere Standard, dein „mit freundlichen Grüßen\". <em>Distinti saluti</em> ist kühler und amtlicher. <em>A presto</em> oder <em>Grazie e buona giornata</em> passen unter Kollegen. Unterschrieben wird mit Vor- und Nachnamen, die Funktion darunter."
      },
      {
        h: "Der Text einer italienischen E-Mail ist kurz",
        p: "Die italienische Geschäftskorrespondenz kennt keine langen Vorreden und ist deutlich weniger formelhaft als die deutsche: nichts, was „Sehr geehrte Damen und Herren\" plus drei Absätze Anlauf entspräche. Der Aufbau: Anlass (<em>Le scrivo in merito a…</em>), Inhalt, Bitte (<em>Resto in attesa di un suo riscontro</em>), Schluss. Und <em>Dott.</em> steht für jeden Hochschulabschluss, nicht nur für Ärzte: titelbewusst wie du, aber mit einer viel breiteren Kategorie."
      },
      {
        tip: "<em>In allegato</em> = „anbei\". <em>Le invio in allegato il documento richiesto</em> ist der häufigste Satz der italienischen Geschäftspost."
      }
    ],
    grammar: {
      title: "Das Gerüst einer E-Mail",
      table: {
        head: ["Teil", "Formel", "auf Deutsch"],
        rows: [
          ["Anrede", "Gentile Dott.ssa Rossi,", "Sehr geehrte Frau Dr. Rossi,"],
          ["Anlass", "Le scrivo in merito a…", "Ich schreibe Ihnen bezüglich…"],
          ["Anhang", "Le invio in allegato…", "Anbei sende ich Ihnen…"],
          ["Bitte", "Resto in attesa di un suo riscontro.", "Ich freue mich auf Ihre Rückmeldung."],
          ["Schluss", "Cordiali saluti,", "Mit freundlichen Grüßen,"],
          ["informell", "Grazie e a presto,", "Danke und bis bald,"]
        ]
      },
      examples: [
        { tr: "Sehr geehrte Frau Dr. Rossi, ich schreibe Ihnen bezüglich des gestrigen Angebots." },
        { tr: "Anbei sende ich Ihnen den aktualisierten Kostenvoranschlag." },
        { tr: "Ich wäre Ihnen für eine Bestätigung bis Freitag dankbar." },
        { tr: "Für Rückfragen stehe ich Ihnen gern zur Verfügung." },
        { tr: "Hallo Marco, ich hänge dir die Datei an, über die wir gesprochen haben." },
        { tr: "Vielen Dank im Voraus." }
      ]
    },
    vocab: [
      "Sehr geehrte/r (in einer E-Mail)",
      "bezüglich",
      "anbei",
      "Kostenvoranschlag",
      "bestätigen",
      "eine Rückmeldung",
      "zur Verfügung stehen",
      "mit freundlichen Grüßen",
      "danke im Voraus",
      "Frist",
      "bis (zu einem Datum)",
      "Klärung"
    ],
    exercises: [
      {
        q: "Welche Anrede ist die förmlichste?",
        opts: ["Ciao Marco,", "Buongiorno Marco,", "Gentile Dott. Rossi,"]
      },
      { q: "Ergänze: „Le scrivo ___ merito all'offerta.\"" },
      { q: "Ergänze: „Le invio ___ allegato il preventivo.\"" },
      { q: "Ordne zu.", pairs: ["Kostenvoranschlag", "Rückmeldung", "Frist", "Klärung"] },
      {
        q: "„Resto a disposizione\" bedeutet:",
        opts: ["Ich bleibe in der Firma", "Ich stehe zur Verfügung", "Ich warte hier"]
      },
      { q: "„Anbei sende ich Ihnen den aktualisierten Kostenvoranschlag.\"" },
      {
        q: "Ergänze die E-Mail.",
        tr: "Sehr geehrte Frau Dr. Rossi, ich schreibe Ihnen bezüglich der Besprechung am Donnerstag. Ich freue mich auf Ihre Rückmeldung. Mit freundlichen Grüßen."
      },
      { tr: "Ich wäre Ihnen für eine Bestätigung bis Freitag dankbar." },
      { tr: "Anbei sende ich Ihnen das angeforderte Dokument; ich stehe zur Verfügung." },
      { tr: "Sehr geehrte Frau Dr. Rossi, ich schreibe Ihnen bezüglich unserer Besprechung." }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Arbeit",
    title: "Das unpersönliche si",
    objectives: [
      "si für allgemeine Aussagen verwenden",
      "das unpersönliche si vom passiven si unterscheiden",
      "beschreiben, wie die Dinge irgendwo gemacht werden"
    ],
    theory: [
      {
        h: "Wie dein „man\"",
        p: "<em>In Italia <b>si</b> mangia bene.</em> („In Italien isst man gut.\") Die Konstruktion <em>si</em> + dritte Person Singular spricht über die Leute allgemein, ohne jemanden zu nennen."
      },
      {
        contrast: "Dein „man\" ist ein Subjektpronomen, das italienische <em>si</em> ein Reflexivpronomen. Der Unterschied wird sichtbar, sobald ein Nomen folgt: „man verkauft hier Brötchen\" bleibt im Singular, das Italienische gleicht an die Sache an und schreibt <em>si vendono i panini</em>. Näher liegt dein Passiv: „hier werden Brötchen verkauft\", das ebenfalls im Plural steht. Genau dieses Passiv solltest du im Kopf haben, nicht „man\"."
      },
      {
        h: "Si passivante: das Verb gleicht sich der Sache an",
        p: "Folgt dem Verb ein Nomen, richtet sich die Form nach dessen Numerus: <em>Qui <b>si vende</b> il pane</em> (eine Sache) gegenüber <em>Qui <b>si vendono</b> i panini</em> (mehrere). Es sieht aus wie ein Fehler und ist die Regel."
      },
      {
        h: "Das Adjektiv nach si steht im Plural",
        p: "<em>Quando si è <b>stanchi</b>, si lavora male.</em> Das Verb steht im Singular, das Adjektiv im maskulinen Plural, während dein „wenn man müde ist\" im Singular bleibt. Eine echte Eigenheit, die man einfach lernt."
      },
      {
        tip: "In den zusammengesetzten Zeiten nimmt das unpersönliche <em>si</em> immer <em>essere</em>: <em>si è mangiato bene</em>, wo du „man hat gut gegessen\" mit „haben\" bildest."
      }
    ],
    grammar: {
      title: "Unpersönliches und passives si",
      table: {
        head: ["Typ", "Beispiel", "Hinweis"],
        rows: [
          ["unpersönlich", "In Italia si mangia bene.", "kein Nomen nach dem Verb"],
          ["passiv Sg.", "Qui si vende il pane.", "gleicht sich „il pane\" an"],
          ["passiv Pl.", "Qui si vendono i panini.", "gleicht sich „i panini\" an"],
          ["mit Adjektiv", "Quando si è stanchi…", "Adjektiv im Plural"],
          ["zusammengesetzte Zeit", "Si è mangiato bene.", "immer essere"],
          ["reflexiv", "Ci si alza presto.", "si + si → ci si"]
        ]
      },
      examples: [
        { tr: "In diesem Büro arbeitet man auch samstags." },
        { tr: "Wie sagt man „Laptop\" auf Italienisch?" },
        { tr: "Hier wird nicht geraucht." },
        { tr: "In dieser Gegend werden Wohnungen verkauft." },
        { tr: "Wenn man neu ist, fragt man viel." },
        { tr: "Man gewöhnt sich schnell daran." }
      ]
    },
    vocab: [
      "man sagt",
      "man macht",
      "man darf nicht",
      "Büro",
      "Besprechung",
      "Kollege, Kollegin",
      "Gehalt",
      "Urlaub",
      "freie Tage",
      "Überstunden",
      "Frist",
      "sich gewöhnen an"
    ],
    exercises: [
      {
        q: "„Qui ___ i panini.\" (hier werden Brötchen verkauft)",
        opts: ["si vende", "si vendono", "si vendere"],
        why: "Das si passivante gleicht sich der Sache an: i panini → Plural."
      },
      { q: "Ergänze: „In Italia ___ mangia bene.\"" },
      { q: "Ergänze: „Come ___ dice in italiano?\"" },
      {
        q: "„Quando si è stanchi\" — warum „stanchi\" und nicht „stanco\"?",
        opts: ["Das ist ein Fehler", "Nach si steht das Adjektiv im Plural", "Weil es wirklich um mehrere Leute geht"]
      },
      { q: "Ergänze die Formen.", tr: "In diesem Büro arbeitet man viel und macht oft Überstunden." },
      { q: "„Hier wird nicht geraucht.\"" },
      {
        q: "Welche Sätze sind richtig?",
        opts: ["Si vendono case.", "Si vende case.", "Si è mangiato bene.", "Si ha mangiato bene."]
      },
      { tr: "Man gewöhnt sich schnell daran." },
      { tr: "In dieser Firma arbeitet man viel, aber die Bezahlung ist gut." },
      { tr: "Wie sagt man „deadline\" auf Italienisch? Man sagt scadenza." }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Arbeit",
    title: "Besprechungen und Absprachen",
    objectives: [
      "in einer Besprechung das Wort ergreifen",
      "einen Termin vorschlagen und vereinbaren",
      "Zustimmung oder Zweifel äußern"
    ],
    theory: [
      {
        h: "Unterbrechen ist nicht unhöflich",
        p: "In der italienischen Besprechungskultur ist Dazwischenreden normal und signalisiert Anteilnahme. Auf eine saubere Pause zu warten, wie du es gewohnt bist, kann so ankommen, als hättest du nichts zu sagen. Formeln zum Abfedern: <em>Scusa se ti interrompo…</em>, <em>Posso aggiungere una cosa?</em>, <em>Solo un attimo…</em>"
      },
      {
        h: "Zustimmung und Zweifel",
        list: [
          "Zustimmung: <em>Sono d'accordo</em>, <em>Esatto</em>, <em>Hai ragione</em>",
          "teilweise: <em>In parte sì, però…</em>, <em>Dipende</em>",
          "Zweifel: <em>Non ne sono convinto</em>, <em>Ho qualche dubbio</em>",
          "Widerspruch: <em>Non sono d'accordo</em>, <em>La vedo diversamente</em>"
        ]
      },
      {
        h: "Einen Termin vereinbaren",
        p: "<em>Che ne dite di giovedì?</em>, <em>A me va bene</em>, <em>Per me è lo stesso</em>, <em>Preferirei più tardi</em>. Die Wendung <em>facciamo giovedì</em> („machen wir Donnerstag\") ist die übliche Art, eine Absprache zu schließen."
      },
      {
        tip: "<em>Ci sentiamo</em> („wir hören voneinander\") beendet praktisch jede italienische Besprechung und jedes Geschäftstelefonat. Es ist kein Versprechen, sondern eine Formel."
      }
    ],
    grammar: {
      title: "Die Sprache der Besprechungen",
      table: {
        head: ["Funktion", "Wendung", "auf Deutsch"],
        rows: [
          ["das Wort ergreifen", "Posso dire una cosa?", "Darf ich etwas sagen?"],
          ["unterbrechen", "Scusa se ti interrompo…", "Entschuldige, wenn ich dich unterbreche…"],
          ["zustimmen", "Sono d'accordo con te.", "Ich bin deiner Meinung."],
          ["Zweifel", "Non ne sono del tutto convinto.", "Ich bin nicht ganz überzeugt."],
          ["vorschlagen", "Che ne dite di giovedì?", "Was haltet ihr von Donnerstag?"],
          ["abschließen", "Facciamo così, allora.", "Machen wir es so."]
        ]
      },
      examples: [
        { tr: "Lasst mich die wichtigsten Punkte zusammenfassen." },
        { tr: "Ich habe bei diesem Punkt einige Zweifel." },
        { tr: "Können wir die Entscheidung auf Montag verschieben?" },
        { tr: "Mir ist es gleich, entscheide du." },
        { tr: "Wer kümmert sich darum?" },
        { tr: "Wir hören morgen voneinander wegen der Einzelheiten." }
      ]
    },
    vocab: [
      "Besprechung",
      "Tagesordnung",
      "zusammenfassen",
      "verschieben",
      "sich kümmern um",
      "ich bin einverstanden",
      "ich bin nicht überzeugt",
      "es kommt darauf an",
      "was haltet ihr von…?",
      "mir ist es gleich",
      "wir hören voneinander",
      "ein Tagesordnungspunkt"
    ],
    exercises: [
      { q: "Ordne zu.", pairs: ["ich bin einverstanden", "es kommt darauf an", "verschieben", "sich kümmern um"] },
      {
        q: "„Non ne sono del tutto convinto\" ist:",
        opts: ["volle Zustimmung", "ein sanft geäußerter Zweifel", "entschiedener Widerspruch"]
      },
      { q: "Ergänze: „___ ne dite di giovedì?\"" },
      { q: "Ergänze: „Chi ___ occupa di questo?\"" },
      { q: "„Können wir die Entscheidung auf Montag verschieben?\"" },
      {
        q: "Eine Teambesprechung.",
        setting: "Der Besprechungsraum, es geht um den Termin.",
        lines: [
          { tr: "Gut, wir müssen die nächste Besprechung festlegen." },
          { tr: "Schlag Donnerstag vor.", answerTr: "Was haltet ihr von Donnerstag?" },
          { tr: "Donnerstagvormittag habe ich schon etwas. Am Nachmittag?" },
          { tr: "Stimm zu und schließ die Absprache ab.", answerTr: "Passt mir, machen wir es so." }
        ]
      },
      {
        q: "Ergänze, was du sagen würdest.",
        tr: "Entschuldige, wenn ich dich unterbreche, aber ich habe bei diesem Punkt einige Zweifel."
      },
      { tr: "Lasst mich die wichtigsten Punkte zusammenfassen." },
      { tr: "Wir verschieben die Entscheidung auf die nächste Besprechung." },
      { tr: "Ich bin einverstanden, aber ich würde gern etwas ergänzen." }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Test",
    title: "Test zu Einheit 6",
    objectives: ["den Höflichkeitskonditional, die E-Mails und das unpersönliche si prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      {  },
      { q: "„___ richiamarmi?\" (könnten Sie)" },
      { q: "„Le scrivo ___ merito alla riunione.\"" },
      { q: "„Le invio ___ allegato il preventivo.\"" },
      { q: "„Qui ___ i panini.\"", opts: ["si vende", "si vendono", "si vendere"] },
      { q: "„In Italia ___ mangia bene.\"" },
      { q: "Ordne zu.", pairs: ["Kostenvoranschlag", "Urlaub", "Gehalt", "Frist"] },
      { q: "„Ich bin einverstanden, aber ich habe einen Zweifel.\"" },
      { tr: "Könnten Sie die Besprechung bis Freitag bestätigen?" },
      { tr: "Ich würde die Besprechung gern auf Donnerstagnachmittag legen." }
    ]
  },
  "unit:a2-u07": { title: "Feste und Traditionen", grammarNote: "Einladungen · Glückwünsche · Adverbien" },
  "lesson:a2-u07-l1": {
    theme: "Kultur",
    title: "Glückwünsche und Anlässe",
    objectives: [
      "zu verschiedenen Anlässen gratulieren",
      "auf einen Glückwunsch antworten",
      "die wichtigsten italienischen Feiertage kennen"
    ],
    theory: [
      {
        h: "Auguri ist der Generalschlüssel",
        p: "<strong>Auguri!</strong> passt zu Geburtstagen, Namenstagen, Hochzeiten, Beförderungen, Feiertagen und fast jedem guten Anlass. Wörtlich sind es „gute Wünsche\". Ausgebaut: <em>Tanti auguri!</em>, <em>Auguri di buon compleanno!</em>"
      },
      {
        h: "Was man nicht wünscht",
        p: "Vor einer Prüfung oder einer schweren Aufgabe sagen Italiener <b>nicht</b> <em>auguri</em> oder <em>buona fortuna</em>: das bringt Unglück. Man sagt <strong>in bocca al lupo</strong> („in den Rachen des Wolfs\") und antwortet <em>crepi!</em> oder <em>crepi il lupo!</em>. Dein „Hals- und Beinbruch\" beruht auf genau demselben Aberglauben, mit einem anderen Bild."
      },
      {
        h: "Der Kalender, den man kennen muss",
        list: [
          "<b>Capodanno</b> (1. Januar), <b>Epifania</b> (6. Januar, wenn <em>la Befana</em> kommt)",
          "<b>Pasqua</b> und <b>Pasquetta</b> (Ostermontag, Tag der Ausflüge)",
          "<b>25. April</b> (Tag der Befreiung), <b>1. Mai</b>, <b>2. Juni</b> (Tag der Republik)",
          "<b>Ferragosto</b> (15. August: das ganze Land ist im Urlaub), <b>Natale</b> und <b>Santo Stefano</b>"
        ]
      },
      {
        tip: "<em>Buone feste</em> ist der neutrale Gruß der Saison, <em>Buon Natale</em> gilt speziell Weihnachten. Im Arbeitskontext ist das erste üblicher."
      }
    ],
    grammar: {
      title: "Glückwünsche",
      table: {
        head: ["Anlass", "auf Italienisch", "die Antwort"],
        rows: [
          ["Geburtstag", "Tanti auguri!", "Grazie!"],
          ["die Feiertage", "Buone feste! / Buon Natale!", "Altrettanto!"],
          ["Neujahr", "Buon anno!", "Anche a te!"],
          ["vor einer Prüfung", "In bocca al lupo!", "Crepi!"],
          ["vor einer Reise", "Buon viaggio!", "Grazie!"],
          ["vor dem Essen", "Buon appetito!", "Altrettanto!"]
        ]
      },
      examples: [
        { tr: "Herzlichen Glückwunsch zum Geburtstag!" },
        { tr: "Schöne Feiertage dir und deiner Familie." },
        { tr: "Viel Erfolg bei der Prüfung! — Danke!" },
        { tr: "Einen schönen Arbeitstag!" },
        { tr: "Schönes Wochenende! — Dir auch!" },
        { tr: "Herzlichen Glückwunsch zur Beförderung!" }
      ]
    },
    vocab: [
      "alles Gute!",
      "alles Gute zum Geburtstag",
      "schöne Feiertage",
      "gutes neues Jahr",
      "viel Erfolg (vor einer Prüfung)",
      "die Antwort darauf",
      "gleichfalls",
      "Glückwunsch",
      "Geburtstag",
      "Namenstag",
      "15. August, Höhepunkt der Ferien",
      "ein Brückentag"
    ],
    culture: {
      title: "Mit italienischen Augen: der Kalender gibt den Takt",
      text: "<p><b>Ferragosto</b> (15. August) ist der Moment, in dem sich die großen Städte leeren. Läden im Viertel schließen, manche Restaurants und Praxen ebenfalls. In dieser Woche etwas erledigen zu wollen, ist verlorene Mühe.</p><p><b>Il ponte</b> ist genau dein Brückentag: fällt ein Feiertag auf einen Dienstag oder Donnerstag, nimmt man den Montag oder Freitag frei. Berufliche Fristen werden um die Brücken herum geplant.</p><p><b>L'onomastico</b>, der Namenstag, lebt weiter, und in manchen Regionen, vor allem im Süden, wird er so begeistert gefeiert wie ein Geburtstag.</p>"
    },
    exercises: [
      {
        q: "Was sagst du einem Freund vor einer Prüfung?",
        opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"],
        why: "„Buona fortuna\" gilt als unglücksbringend."
      },
      { q: "Was ist die Antwort auf „in bocca al lupo\"?", opts: ["Grazie!", "Crepi!", "Altrettanto!"] },
      { q: "Ergänze: „Buon ___!\" (gute Reise)" },
      { q: "Ergänze: „Buon appetito! — ___!\" (gleichfalls)" },
      {
        q: "Ordne dem Anlass den Wunsch zu.",
        pairs: ["Geburtstag", "Neujahr", "Beförderung", "Reise"]
      },
      {
        q: "Was ist „il ponte\" im Kalender?",
        opts: ["Ein kirchlicher Feiertag", "Ein Brückentag zwischen Feiertag und Wochenende", "Ein Jahrestag"]
      },
      {
        q: "Was passiert in Italien am 15. August?",
        opts: ["Das Schuljahr beginnt", "Ferragosto: die Städte leeren sich", "Tag der Republik"]
      },
      { q: "„Schöne Feiertage dir und deiner Familie.\"" },
      { tr: "Alles Gute zum Geburtstag und schöne Feiertage!" },
      { tr: "Viel Erfolg bei der Prüfung! — Danke!" }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Kultur",
    title: "Einladungen",
    objectives: ["jemanden zu etwas einladen", "höflich annehmen oder absagen", "nach den Einzelheiten fragen"],
    theory: [
      {
        h: "Einladungen sind meistens informell",
        p: "Italienische Einladungen haben selten eine feste Form. Am häufigsten: <em>Ti va di…?</em>, <em>Che ne dici di…?</em>, <em>Vieni anche tu?</em>. Auch ein richtiges Abendessen wird als <em>una cosa tra amici</em> angekündigt."
      },
      {
        h: "Absagen verlangt einen Grund",
        p: "Ein bloßes <em>no, grazie</em> wirkt kalt. Die Formel lautet: Entschuldigung + Grund + Alternative. <em>Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?</em>"
      },
      {
        h: "Was man mitbringt",
        p: "Zum Abendessen bringt man Wein, ein Dessert oder Blumen mit. Die Frage <em>Cosa porto?</em> wird erwartet, und die Antwort <em>Non portare niente!</em> ist eine Höflichkeit: man bringt trotzdem etwas mit."
      },
      {
        tip: "Die Uhrzeit einer Einladung ist ungefähr. Zu einem privaten Abendessen um halb neun auf die Minute pünktlich zu erscheinen, kann unangenehm sein; eine Viertelstunde später ist die Norm. Für dich ist das die größte Umstellung des Kapitels."
      }
    ],
    grammar: {
      title: "Einladen und antworten",
      table: {
        head: ["Funktion", "Wendung", "auf Deutsch"],
        rows: [
          ["Einladung", "Ti va di venire a cena sabato?", "Hast du Lust, am Samstag zum Essen zu kommen?"],
          ["annehmen", "Volentieri, a che ora?", "Sehr gern, um wie viel Uhr?"],
          ["absagen", "Mi dispiace, quel giorno non posso.", "Tut mir leid, an dem Tag kann ich nicht."],
          ["Alternative", "Facciamo un'altra volta?", "Machen wir es ein andermal?"],
          ["Einzelheiten", "Cosa porto?", "Was soll ich mitbringen?"],
          ["die Antwort", "Non portare niente, ci pensiamo noi.", "Bring nichts mit, wir kümmern uns."]
        ]
      },
      examples: [
        { tr: "Wir machen am Samstag ein Essen bei uns, kommst du?" },
        { tr: "Sehr gern! Um wie viel Uhr trefft ihr euch?" },
        { tr: "Tut mir leid, am Samstag habe ich schon etwas vor." },
        { tr: "Kann ich jemanden mitbringen?" },
        { tr: "Ich bringe das Dessert mit, passt das?" },
        { tr: "Wir sehen uns dort gegen halb neun." }
      ]
    },
    vocab: [
      "einladen",
      "Einladung",
      "Abendessen",
      "eine Feier",
      "eine schon bestehende Verabredung",
      "sehr gern",
      "leider",
      "ein andermal",
      "mitbringen",
      "gegen acht",
      "sich treffen",
      "lange bleiben"
    ],
    exercises: [
      {
        q: "Welche Absage funktioniert auf Italienisch am besten?",
        opts: ["No, grazie.", "Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?", "Non voglio."]
      },
      { q: "Ergänze: „___ va di venire a cena?\"" },
      { q: "Ergänze: „Purtroppo ho già un ___.\" (eine Verabredung)" },
      { q: "Ordne zu.", pairs: ["sehr gern", "leider", "Einladung", "sich treffen"] },
      { q: "„Sehr gern! Um wie viel Uhr trefft ihr euch?\"" },
      {
        q: "Eine Einladung zum Abendessen.",
        setting: "Eine Nachricht von einem Freund, Mittwochabend.",
        lines: [
          { tr: "Wir machen am Samstag ein Essen bei uns. Hast du Lust zu kommen?" },
          { tr: "Nimm an und frag nach der Uhrzeit.", answerTr: "Sehr gern! Um wie viel Uhr?" },
          { tr: "Gegen halb neun. Wir werden zu sechst sein." },
          { tr: "Frag, was du mitbringen sollst.", answerTr: "Was soll ich mitbringen?" },
          { tr: "Bring nichts mit! Höchstens das Dessert." }
        ]
      },
      { q: "Ergänze die Absage.", tr: "Tut mir leid, am Samstag habe ich schon etwas vor. Machen wir es ein andermal?" },
      { tr: "Wir sehen uns dort gegen halb neun." },
      { tr: "Hast du Lust, am Samstag zum Essen zu kommen? Wir werden zu sechst sein." },
      { tr: "Sehr gern, ich bringe das Dessert mit. Um wie viel Uhr?" }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Kultur",
    title: "Das Italien der Regionen",
    objectives: [
      "die grundlegenden Unterschiede zwischen Norden und Süden verstehen",
      "eine Region und ihre Küche beschreiben",
      "Vergleiche verwenden, um Orte zu beschreiben"
    ],
    theory: [
      {
        h: "Italien wurde 1861 geeint",
        p: "Davor war es eine Ansammlung von Staaten mit eigenen Sprachen, Küchen und Institutionen. Die regionalen Unterschiede reichen tiefer als in den meisten Ländern: Dialekte können gegenseitig unverständlich sein, und die lokale Identität (<em>campanilismo</em>, von <em>campanile</em>, dem Glockenturm) wiegt oft schwerer als die nationale."
      },
      {
        contrast: "Von allen Lesersprachen dieses Kurses hast du den besten Vergleichspunkt: Deutschland wurde 1871 geeint, also zehn Jahre nach Italien, ist föderal geblieben, und Bairisch, Schwäbisch oder Plattdeutsch sind einander ähnlich fremd wie Neapolitanisch und Venezianisch. Der Unterschied liegt im Prestige: in Italien wird der Dialekt öffentlicher und selbstbewusster gesprochen."
      },
      {
        h: "Eine einzige italienische Küche gibt es nicht",
        p: "Butter und Reis im Norden, Olivenöl und Pasta im Süden. <em>Pesto</em> ist ligurisch, <em>ragù</em> emilianisch, <em>carbonara</em> römisch, <em>arancini</em> sizilianisch. „Italienisch essen\" ohne Region zu sagen, ist wie „deutsch essen\" ohne zu sagen, ob im Norden oder in Bayern."
      },
      {
        tip: "Sicheres Gesprächsthema mit Italienern: die Küche ihrer Region. Unsicheres Thema: welche Region besser kocht."
      }
    ],
    grammar: {
      title: "Eine Region beschreiben",
      table: {
        head: ["Region", "Hauptstadt", "bekannt für"],
        rows: [
          ["la Toscana", "Firenze", "die bistecca, den Chianti, die Renaissance"],
          ["l'Emilia-Romagna", "Bologna", "tagliatelle al ragù, Parmesan"],
          ["la Sicilia", "Palermo", "arancini, cannoli, arabischer Einfluss"],
          ["il Veneto", "Venezia", "cicchetti, Prosecco"],
          ["la Campania", "Napoli", "Pizza, sfogliatella"],
          ["il Piemonte", "Torino", "Trüffel, Wermut, Slow Food"]
        ]
      },
      examples: [
        { tr: "Ich bin sizilianischer Herkunft, wohne aber in Mailand." },
        { tr: "Im Norden nimmt man mehr Butter, im Süden mehr Olivenöl." },
        { tr: "In Venetien wird noch viel Dialekt gesprochen." },
        { tr: "Jede Region hat ihre typische Pasta." },
        { tr: "Der Kaffee im Süden ist stärker und kürzer." },
        { tr: "Rom ist chaotisch, aber wunderschön." }
      ]
    },
    vocab: [
      "Region",
      "Regionalhauptstadt",
      "Norden / Süden",
      "Dialekt",
      "typisch",
      "Tradition",
      "ein regionales Gericht",
      "Herkunft",
      "chaotisch",
      "gastfreundlich",
      "Lokalstolz",
      "umziehen (irgendwohin)"
    ],
    exercises: [
      { q: "Ordne der Region die Stadt zu.", pairs: ["Firenze", "Napoli", "Venezia", "Torino"] },
      {
        q: "Was ist „campanilismo\"?",
        opts: ["Ein Baustil", "Die Verbundenheit mit der eigenen Stadt", "Eine Glockenart"]
      },
      {
        q: "Ein italienischer Dialekt ist:",
        opts: ["schlecht gesprochenes Italienisch", "eine eigene, aus dem Latein hervorgegangene Sprache", "Jugendsprache"]
      },
      { q: "Ergänze: „Al nord si usa più il burro, al ___ l'olio.\"" },
      { q: "„Jede Region hat ihr typisches Gericht.\"" },
      {
        q: "Ergänze.",
        tr: "Ich bin sizilianischer Herkunft, lebe aber seit zehn Jahren im Norden. Ich verstehe den Dialekt, spreche ihn aber nicht."
      },
      { tr: "Rom ist chaotisch, aber wunderschön." },
      { q: "Woher kommt die carbonara?", opts: ["Bologna", "Rom", "Palermo"] },
      { tr: "Jede italienische Region hat ihre Küche und oft ihren Dialekt." },
      { tr: "Ich bin polnischer Herkunft, lebe aber seit drei Jahren in der Toskana." }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Grammatik",
    title: "Die Adverbien",
    objectives: [
      "Adverbien auf -mente bilden",
      "ein Adjektiv von einem Adverb unterscheiden",
      "das Adverb an die richtige Stelle setzen"
    ],
    theory: [
      {
        h: "Wie sie gebildet werden",
        p: "Man nimmt die <b>feminine</b> Form des Adjektivs und hängt <em>-mente</em> an: <em>lenta → lentamente</em>, <em>rara → raramente</em>. Adjektive auf <em>-le</em> und <em>-re</em> verlieren das End-<em>e</em>: <em>facile → facilmente</em>, <em>regolare → regolarmente</em>."
      },
      {
        contrast: "Deutsch markiert das Adverb gar nicht: „er spricht langsam\" benutzt dasselbe Wort wie „ein langsamer Zug\". Es gibt also keine Endung, an die du dich erinnern könntest, und das ist der Grund, warum du diese Formen erst gar nicht bildest, statt sie falsch zu bilden."
      },
      {
        h: "Buono gegen bene",
        p: "Das ist der schwierigste Punkt für dich, weil dein „gut\" beide Rollen übernimmt. <em>Buono</em> ist das Adjektiv (wie ist es?), <em>bene</em> das Adverb (wie macht er es?). <em>Un caffè <b>buono</b></em>, aber <em>parla <b>bene</b></em>. „Parla buono\" ist falsch, obwohl dein „er spricht gut\" genau so gebaut aussieht."
      },
      {
        h: "Die Stellung in den zusammengesetzten Zeiten",
        p: "Im passato prossimo stehen die Adverbien <em>già, mai, ancora, sempre, appena, più</em> <b>zwischen Hilfsverb und Partizip</b>: <em>ho <b>già</b> visto</em>. Hier hilft dir deine Satzklammer, in der das Adverb ebenfalls vor dem Partizip landet: „ich habe schon gesehen\". Die übrigen folgen dem Partizip: <em>ho parlato <b>lentamente</b></em>."
      }
    ],
    grammar: {
      title: "Die Adverbien",
      table: {
        head: ["Adjektiv", "Adverb", "Beispiel"],
        rows: [
          ["lento / lenta", "lentamente", "Parla lentamente, per favore."],
          ["raro / rara", "raramente", "Vado raramente al cinema."],
          ["facile", "facilmente", "Si trova facilmente."],
          ["regolare", "regolarmente", "Studia regolarmente."],
          ["buono", "bene", "Cucina bene."],
          ["cattivo", "male", "Ho dormito male."]
        ]
      },
      examples: [
        { tr: "Könnten Sie langsamer sprechen?" },
        { tr: "Am Wochenende gehe ich selten in die Innenstadt." },
        { tr: "Diesen Film habe ich schon gesehen." },
        { tr: "Ich war noch nicht dort." },
        { tr: "Er spricht gut Italienisch, aber er schreibt es schlecht." },
        { tr: "Lass dir Zeit damit." }
      ]
    },
    vocab: [
      "langsam",
      "schnell",
      "leicht, mühelos",
      "selten",
      "regelmäßig",
      "plötzlich",
      "endlich",
      "absolut",
      "gut / schlecht",
      "in Ruhe",
      "in Eile",
      "fast"
    ],
    exercises: [
      { q: "Bilde das Adverb von „lento\": ___" },
      { q: "Bilde das Adverb von „facile\": ___" },
      {
        q: "Welcher Satz ist richtig?",
        opts: ["Parla buono l'italiano.", "Parla bene l'italiano.", "Parla buon l'italiano."]
      },
      { q: "Ergänze: „Ho ___ visto quel film.\" (schon)" },
      {
        q: "Wo steht „ancora\" im passato prossimo?",
        opts: ["Vor dem Hilfsverb", "Zwischen Hilfsverb und Partizip", "Am Ende"]
      },
      { q: "Ordne zu.", pairs: ["endlich", "plötzlich", "in Ruhe", "fast"] },
      { q: "„Könnten Sie langsamer sprechen?\"" },
      {
        q: "Ergänze.",
        tr: "Er spricht gut Italienisch, aber er schreibt es noch schlecht. Er lernt regelmäßig, jeden Tag."
      },
      { tr: "Ich habe endlich eine Wohnung in der Nähe der Arbeit gefunden." },
      { tr: "Könnten Sie das langsamer wiederholen?" }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Test",
    title: "Test zu Einheit 7",
    objectives: ["Glückwünsche, Einladungen, Regionales und Adverbien prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "Vor einer Prüfung sagt man:", opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"] },
      { q: "Die Antwort auf „in bocca al lupo\": ___" },
      { q: "„Buon appetito! — ___!\"" },
      { q: "„___ va di venire a cena?\"" },
      { q: "„Il ponte\" ist:", opts: ["eine steinerne Brücke", "ein Brückentag", "ein Feiertag"] },
      { q: "Ordne zu.", pairs: ["Firenze", "Napoli", "Palermo", "Venezia"] },
      { q: "Das Adverb von „regolare\": ___" },
      { q: "Der richtige Satz:", opts: ["Parla buono.", "Parla bene.", "Parla buon."] },
      { tr: "Alles Gute und schöne Feiertage für die ganze Familie!" },
      { tr: "Hast du Lust, am Samstagabend zu der Feier zu kommen?" }
    ]
  },
  "unit:a2-u08": { title: "Pläne und Wiederholung", grammarNote: "Absichten ausdrücken · A2-Wiederholung" },
  "lesson:a2-u08-l1": {
    theme: "Pläne",
    title: "Absichten und Träume",
    objectives: [
      "über deine Zukunftspläne sprechen",
      "einen Wunsch und einen Zweifel ausdrücken",
      "Futur und Konditional verbinden"
    ],
    theory: [
      {
        h: "Drei Grade der Sicherheit",
        list: [
          "<b>entschieden</b>: <em>A settembre comincio un nuovo lavoro.</em> (Präsens)",
          "<b>geplant</b>: <em>Ho intenzione di trasferirmi.</em> / <em>Andrò a vivere all'estero.</em>",
          "<b>ein Traum</b>: <em>Mi piacerebbe aprire un bar.</em> / <em>Vorrei imparare il giapponese.</em>"
        ]
      },
      {
        h: "Mi piacerebbe gegen vorrei",
        p: "<em>Vorrei</em> betrifft etwas Reales und Erreichbares („ich hätte gern einen Kaffee\"). <em>Mi piacerebbe</em> rückt in Richtung Wunsch oder Hypothese („ich würde gern\", „schön wäre es\"). Ein Italiener nimmt das erste beim Bestellen und das zweite, wenn es um Lebenspläne geht — genau dein Unterschied zwischen „ich hätte gern\" und „ich würde gern\"."
      },
      {
        h: "Präpositionen nach Verben der Absicht",
        p: "<em>ho intenzione <b>di</b></em>, <em>penso <b>di</b></em>, <em>spero <b>di</b></em>, <em>sogno <b>di</b></em>, aber <em>comincio <b>a</b></em>, <em>imparo <b>a</b></em>, <em>riesco <b>a</b></em>. Die Präposition gehört zum Verb und wird mit ihm gelernt. Dein „anfangen zu\" und „hoffen zu\" nehmen ein <em>zu</em> ohne Unterschied, also gibt dir Deutsch hier keinen Anhaltspunkt."
      },
      {
        tip: "<em>Chissà</em> („wer weiß\") eröffnet oft einen Satz über eine ungewisse Zukunft: <em>Chissà dove sarò tra cinque anni.</em>"
      }
    ],
    grammar: {
      title: "Pläne ausdrücken",
      table: {
        head: ["Grad", "Konstruktion", "Beispiel"],
        rows: [
          ["eine Entscheidung", "Präsens", "A giugno cambio lavoro."],
          ["eine Absicht", "ho intenzione di + Infinitiv", "Ho intenzione di studiare medicina."],
          ["eine Vorhersage", "futuro semplice", "Fra due anni parlerò bene l'italiano."],
          ["ein Traum", "mi piacerebbe + Infinitiv", "Mi piacerebbe vivere al mare."],
          ["eine Hoffnung", "spero di + Infinitiv", "Spero di trovare casa presto."],
          ["Ungewissheit", "chissà", "Chissà come andrà."]
        ]
      },
      examples: [
        { tr: "Ich habe vor, mich für einen Abendkurs anzumelden." },
        { tr: "Ich würde gern ein Jahr im Ausland arbeiten." },
        { tr: "Ich hoffe, die Prüfung im Juni zu bestehen." },
        { tr: "Wer weiß, wo ich in fünf Jahren sein werde." },
        { tr: "Ich denke daran, die Stadt zu wechseln." },
        { tr: "Früher oder später lerne ich Klavier spielen." }
      ]
    },
    vocab: [
      "ich habe vor",
      "ich würde gern (ein Traum)",
      "ich hoffe",
      "ich denke daran",
      "träumen von",
      "wer weiß",
      "früher oder später",
      "im Ausland",
      "ein Abendkurs",
      "eine Prüfung bestehen",
      "sein Leben ändern",
      "ein Traum"
    ],
    exercises: [
      { q: "Ergänze: „Ho intenzione ___ trasferirmi.\"" },
      { q: "Ergänze: „Spero ___ trovare casa presto.\"" },
      { q: "Ergänze: „Comincio ___ capire meglio.\"" },
      {
        q: "Welcher Satz klingt nach einem Traum und nicht nach einem Plan?",
        opts: ["A giugno cambio lavoro.", "Mi piacerebbe vivere al mare.", "Ho intenzione di studiare."]
      },
      {  },
      { q: "„Ich würde gern ein Jahr im Ausland arbeiten.\"" },
      { q: "Ergänze die Pläne.", tr: "Ich habe vor, mich für einen Kurs anzumelden, und hoffe, die Prüfung im Juni zu bestehen." },
      { tr: "Früher oder später lerne ich Klavier spielen." },
      { tr: "Ich denke daran, nächstes Jahr die Stadt zu wechseln." },
      { tr: "Ich würde gern mindestens ein Jahr in Italien leben." }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Wiederholung",
    title: "Die Zeiten wiederholen",
    objectives: [
      "die Zeit wählen, die zur Situation passt",
      "alle in A2 gelernten Zeiten verbinden",
      "die eigenen Schwachstellen finden"
    ],
    theory: [
      {
        h: "Die A2-Karte der Zeiten",
        list: [
          "<b>presente</b> — jetzt, Gewohnheit, nahe Zukunft",
          "<b>passato prossimo</b> — ein abgeschlossenes Ereignis",
          "<b>imperfetto</b> — Hintergrund, Beschreibung, Gewohnheit in der Vergangenheit",
          "<b>trapassato prossimo</b> — die Vergangenheit vor der Vergangenheit",
          "<b>futuro semplice</b> — ein Plan, eine Vorhersage, eine Vermutung über die Gegenwart",
          "<b>futuro anteriore</b> — die Zukunft vor der Zukunft, eine Vermutung über die Vergangenheit",
          "<b>condizionale presente</b> — eine Bitte, ein Rat, ein Wunsch"
        ]
      },
      {
        h: "Die häufigsten Fehler in dieser Phase",
        list: [
          "das passato prossimo verwenden, wo das imperfetto nötig ist (Beschreibung)",
          "keine Angleichung des Partizips bei <em>essere</em>: „siamo andato\"",
          "keine Angleichung des Partizips an das Pronomen: „l'ho visto\" über eine Frau",
          "ein Konditional nach <em>se</em>: „se avrei\" statt der richtigen Konstruktion, derselbe Fehler wie dein „wenn ich würde\""
        ]
      }
    ],
    grammar: {
      title: "Die Zeiten in einer Tabelle",
      table: {
        head: ["Zeit", "Beispiel", "wann"],
        rows: [
          ["presente", "Lavoro in banca.", "jetzt, Gewohnheit"],
          ["passato prossimo", "Ieri ho lavorato molto.", "ein abgeschlossenes Ereignis"],
          ["imperfetto", "Da bambino lavoravo poco.", "Hintergrund, Gewohnheit"],
          ["trapassato", "Avevo già lavorato lì.", "eine frühere Vergangenheit"],
          ["futuro", "Domani lavorerò da casa.", "ein Plan"],
          ["futuro anteriore", "Quando avrò finito, esco.", "eine frühere Zukunft"],
          ["condizionale", "Vorrei lavorare meno.", "eine Bitte, ein Wunsch"]
        ]
      },
      examples: [
        { tr: "Während ich lernte, kam eine wichtige Mail." },
        { tr: "Als ich hinausging, hatte es schon aufgehört zu regnen." },
        { tr: "Ich rufe morgen an, sobald ich fertig bin." },
        { tr: "Ich würde dich gern etwas fragen." },
        { tr: "Als kleines Mädchen mochte ich keinen Fisch." },
        { tr: "Ich habe sie letztes Jahr in Rom kennengelernt." }
      ]
    },
    vocab: [
      "eine Zeitform",
      "ein häufiger Fehler",
      "Angleichung",
      "Partizip",
      "Hilfsverb",
      "wiederholen",
      "verwechseln",
      "unterscheiden"
    ],
    exercises: [
      { q: "Setz die richtigen Formen ein.", tr: "Während ich lernte, kam eine wichtige Mail." },
      { q: "Setz die richtigen Formen ein.", tr: "Als ich hinausging, hatte es schon aufgehört zu regnen." },
      { q: "Setz die richtigen Formen ein.", tr: "Ich rufe morgen an, sobald ich fertig bin." },
      {
        q: "„Siamo andato al mare\" — was stimmt nicht?",
        opts: ["Das falsche Hilfsverb", "Die Angleichung des Partizips fehlt (andati)", "Nichts, es ist richtig"]
      },
      { q: "Über eine Frau: „L'ho visto ieri\" — was muss korrigiert werden?", opts: ["Nichts", "L'ho vista", "Le ho visto"] },
      {  },
      {  },
      {  },
      { q: "„Ich würde dich gern etwas fragen.\"" },
      { tr: "Als kleines Mädchen mochte ich keinen Fisch, jetzt liebe ich ihn." },
      { tr: "Gestern war ich im Kino und der Film hat mir sehr gefallen." }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Wiederholung",
    title: "Die Pronomen wiederholen",
    objectives: [
      "das richtige Pronomen wählen",
      "Pronomen mit den zusammengesetzten Zeiten verbinden",
      "dich auf die kombinierten Pronomen in B1 vorbereiten"
    ],
    theory: [
      {
        h: "Vier Gruppen, die man auseinanderhalten muss",
        list: [
          "<b>direkt</b>: mi, ti, lo, la, ci, vi, li, le — „wen? was?\"",
          "<b>indirekt</b>: mi, ti, gli, le, ci, vi, gli — „wem?\"",
          "<b>reflexiv</b>: mi, ti, si, ci, vi, si — eine Handlung an sich selbst",
          "<b>Partikeln</b>: ci (Ort, a + Sache), ne (ein Teil, di + Sache)"
        ]
      },
      {
        h: "Die entscheidende Probe",
        p: "Stell dem Verb eine Frage. „Ich sehe <b>wen</b>?\" → direkt (<em>lo vedo</em>). „Ich telefoniere <b>wem</b>?\" → indirekt (<em>gli telefono</em>). Verlangt das Verb ein <em>a</em>, wird das Pronomen indirekt. Deine Frageprobe für Akkusativ und Dativ funktioniert genauso."
      },
      {
        h: "Was in B1 wartet",
        p: "Die kombinierten Pronomen (<em>me lo, glielo, ce ne</em>) und der volle Gebrauch von <em>ci</em> und <em>ne</em> in verschmolzenen Verben. Die Grundlage, die du hier wiederholst, macht das erst möglich."
      }
    ],
    grammar: {
      title: "Die Pronomen im Überblick",
      table: {
        head: ["Typ", "Formen", "Beispiel"],
        rows: [
          ["direkt", "mi, ti, lo, la, ci, vi, li, le", "Lo conosco bene."],
          ["indirekt", "mi, ti, gli, le, ci, vi, gli", "Gli ho scritto."],
          ["reflexiv", "mi, ti, si, ci, vi, si", "Mi sveglio presto."],
          ["ci", "Ort / a + Sache", "Ci vado domani."],
          ["ne", "ein Teil / di + Sache", "Ne prendo due."],
          ["Angleichung", "nur mit dem direkten", "Le ho viste."]
        ]
      },
      examples: [
        { tr: "Das Buch? Ich habe es letzte Woche gelesen." },
        { tr: "Marco? Ich habe ihm schon geantwortet." },
        { tr: "Die Schlüssel? Ich finde sie nicht." },
        { tr: "Ich gehe dreimal pro Woche ins Fitnessstudio." },
        { tr: "Wie viele willst du? — Ich will drei." },
        { tr: "Ich bin um sechs aufgestanden." }
      ]
    },
    vocab: [
      "Pronomen",
      "direkt / indirekt",
      "reflexiv",
      "ersetzen",
      "wiederholen",
      "vermeiden",
      "Wiederholung",
      "flüssig"
    ],
    exercises: [
      { q: "„Telefono a Giulia\" →", opts: ["La telefono", "Le telefono", "Ne telefono"] },
      { q: "„Vedo Giulia\" →", opts: ["La vedo", "Le vedo", "Gli vedo"] },
      { q: "„Le chiavi? Non ___ trovo.\"" },
      { q: "„Quante mele vuoi? — ___ voglio tre.\"" },
      { q: "„In palestra ___ vado tre volte a settimana.\"" },
      { q: "Ergänze die Endung: „Le ho vist___.\" (sie, Frauen)" },
      {
        q: "Welche Verben nehmen ein indirektes Pronomen?",
        opts: ["telefonare", "vedere", "scrivere", "aspettare", "rispondere"]
      },
      {
        q: "Ergänze die Pronomen.",
        tr: "Das Buch? Ich habe es gelesen. Marco? Ich habe ihm gestern geschrieben. Der Markt? Da gehe ich am Samstag hin."
      },
      { tr: "Ich habe ihr eine Mail geschickt, aber sie hat mir noch nicht geantwortet." },
      { tr: "Der Film? Ich habe ihn gestern gesehen und er hat mir sehr gefallen." }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Wiederholung",
    title: "Bereit für B1",
    objectives: [
      "prüfen, ob du die ganze Stufe A2 beherrschst",
      "sehen, was in B1 kommt",
      "entscheiden, ob du weitergehst"
    ],
    theory: [
      {
        h: "Was du inzwischen können solltest",
        list: [
          "über die Vergangenheit in zwei Zeiten sprechen und die richtige wählen",
          "über Pläne und Träume sprechen",
          "Reise, Hotel, Arztbesuch und Arbeit bewältigen",
          "Pronomen benutzen, statt Nomen zu wiederholen",
          "eine kurze E-Mail schreiben und ein Telefonat durchstehen",
          "eine Bitte äußern, einen Rat geben, höflich absagen"
        ]
      },
      {
        h: "Was in B1 kommt",
        p: "Der <strong>congiuntivo</strong>: der Modus der Meinung, des Zweifels und der Emotion. Dein Konjunktiv existiert zwar, arbeitet aber woanders: Konjunktiv I in der indirekten Rede, Konjunktiv II im Irrealen. Nach Verben der Meinung nimmst du den Indikativ („ich glaube, dass er kommt\"), das Italienische den Konjunktiv. Genau dort liegt die Arbeit. Dazu kommen die kombinierten Pronomen, <em>ci</em> und <em>ne</em> vollständig, die Relativsätze, die indirekte Rede, das Argumentieren und die italienische Bürokratie."
      },
      {
        tip: "Geh nicht mit weniger als 70 % nach B1. Der congiuntivo baut auf den Zeiten von A2 auf: Lücken werden dort zur Mauer."
      }
    ],
    vocab: [
      "der Konjunktiv",
      "eine Meinung",
      "ein Zweifel",
      "argumentieren",
      "Bürokratie",
      "bereit für",
      "Fortschritt",
      "das schaffe ich"
    ],
    exercises: [
      { q: "Setz die Zeiten ein.", tr: "Gestern war ich mit Marta im Kino. Der Film war lang, aber gut." },
      {  },
      {  },
      {  },
      { q: "„Le chiavi? ___ ho perse.\"" },
      { q: "„A Marco ___ ho telefonato ieri.\"" },
      { q: "„Quanto ___ vuole per arrivare?\"" },
      { q: "„Mi ___ male la schiena.\"" },
      { q: "„Ho intenzione ___ cambiare lavoro.\"" },
      { q: "„Wenn ich mit der Arbeit fertig bin, rufe ich dich an.\"" },
      { tr: "Während ich nach Hause ging, traf ich Giulia und sprach mit ihr über das Projekt." },
      { tr: "Nächstes Jahr würde ich beruflich gern nach Italien ziehen." }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Prüfung",
    title: "A2-Abschlussprüfung",
    objectives: ["prüfen, ob du bereit bist, zu B1 überzugehen"],
    theory: [{ p: "Zwölf Fragen aus der ganzen Stufe. Bestanden ab 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "Setz die Zeiten ein.", tr: "Während ich auf den Bus wartete, traf ich einen alten Freund." },
      { q: "„Quando sono arrivato, il treno ___ già partito.\"" },
      { q: "„Hai visto Anna?\" →", opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."] },
      { q: "„A Marco ___ ho risposto.\"" },
      { q: "„Quanti ne vuoi? — ___ voglio due.\"" },
      { q: "„___ meglio riposare.\" (es wäre besser)" },
      { q: "„Qui ___ i panini.\" (werden verkauft)" },
      { q: "Das Adverb von „facile\": ___" },
      { q: "„Ich würde die Besprechung gern auf Donnerstag legen.\"" },
      { tr: "Gestern war ich beim Arzt, weil mir der Hals weh tat." }
    ]
  }
});
