/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/a1-02.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:a1-u04": { title: "Kleidung und Größen", grammarNote: "Adjektive · Farben · questo/quello" },
  "lesson:a1-u04-l1": {
    theme: "Kleidung und Einkaufen",
    title: "Adjektivangleichung und Farben",
    objectives: [
      "die Adjektivendung an das Nomen anpassen",
      "die Farben benennen und wissen, welche unveränderlich sind",
      "ein Stück im Schaufenster beschreiben"
    ],
    theory: [
      {
        h: "Das Adjektiv folgt dem Nomen und richtet sich nach ihm",
        p: "Ein italienisches Adjektiv steht meist <b>hinter</b> dem Nomen und übernimmt dessen Genus und Numerus: <em>una borsa <b>rossa</b></em>, <em>due borse <b>rosse</b></em>. Deutsch stellt es davor und dekliniert es zusätzlich nach Kasus und Artikelart — hier fällt beides weg, und es bleiben vier Formen."
      },
      {
        h: "Zwei Endungsklassen",
        list: [
          "<b>vier Formen</b> (-o / -a / -i / -e): <em>rosso, rossa, rossi, rosse</em>",
          "<b>zwei Formen</b> (-e / -i): <em>verde, verdi</em> — dieselbe Form für beide Genera",
          "<b>unveränderlich</b>: <em>blu, rosa, viola, beige</em> und Lehnwörter (<em>chic</em>)"
        ]
      },
      {
        trap: "Bei gemischter Gruppe gewinnt das Maskulinum: <em>Marco e Anna sono <b>italiani</b></em>. Eine Frau unter hundert Männern ändert nichts; ein Mann unter hundert Frauen kippt die ganze Gruppe ins Maskulinum."
      },
      {
        h: "Farben, die einmal Nomen waren",
        p: "<em>Rosa</em>, <em>viola</em> und <em>arancione</em> stammen von Pflanzennamen, deshalb bleiben <em>rosa</em> und <em>viola</em> unverändert — wie das deutsche „rosa Schuhe\", das ebenfalls nie flektiert wird. <em>Marrone</em> gehört theoretisch dazu, aber Italiener sagen auch <em>scarpe marroni</em>, und niemand korrigiert sie."
      }
    ],
    grammar: {
      title: "Die Adjektivangleichung",
      table: {
        head: ["Nomen", "Typ -o", "Typ -e", "unveränderlich"],
        rows: [
          ["il vestito (m Sg.)", "nero", "verde", "blu"],
          ["la gonna (f Sg.)", "nera", "verde", "blu"],
          ["i pantaloni (m Pl.)", "neri", "verdi", "blu"],
          ["le scarpe (f Pl.)", "nere", "verdi", "blu"]
        ]
      },
      examples: [
        { tr: "Ein weißes Hemd, bitte." },
        { tr: "Diese Schuhe drücken." },
        { tr: "Ein blauer Mantel, Größe M.", note: "blu wird nicht angeglichen" },
        { tr: "Die grüne Hose steht mir nicht." },
        { tr: "Was für eine schöne Jacke!" }
      ]
    },
    vocab: [
      "Kleid; Kleidung",
      "Rock",
      "Hose (immer Plural)",
      "Hemd",
      "T-Shirt",
      "Jacke",
      "Mantel",
      "Schuhe",
      "rot",
      "schwarz",
      "weiß",
      "grün (gleich in beiden Genera)",
      "blau (unveränderlich)",
      "grau"
    ],
    exercises: [
      {
        q: "„La gonna\" ist feminin. Wie schreibst du „schwarz\"?",
        opts: ["nero", "nera", "nere"],
        why: "Feminin Singular → nera."
      },
      {
        q: "Welches Adjektiv hat in beiden Genera dieselbe Form?",
        opts: ["rosso", "verde", "grigio"],
        why: "Adjektive auf -e haben zwei Formen: verde / verdi."
      },
      {
        q: "Ergänze: „Le scarpe ___.\" (schwarze Schuhe)",
        why: "Scarpe ist feminin Plural → nere."
      },
      {
        q: "Ergänze: „I pantaloni ___.\" (eine blaue Hose)",
        why: "Blu ist unveränderlich — nie „blui\"."
      },
      { q: "Ergänze die Endungen.", tr: "Ein weißes Hemd und zwei schwarze T-Shirts, bitte." },
      {
        q: "„Marco e Anna sono ___.\" (Italiener)",
        opts: ["italiane", "italiani", "italiano"],
        why: "Eine gemischte Gruppe nimmt den maskulinen Plural."
      },
      { q: "Ordne dem Kleidungsstück seine Bedeutung zu.", pairs: ["Rock", "Mantel", "Jacke", "Schuhe"] },
      { tr: "Diese Schuhe drücken." },
      { tr: "Eine graue Jacke bitte, Größe M." },
      { tr: "Was für ein schönes weißes Hemd!" }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "Kleidung und Einkaufen",
    title: "Die Demonstrativa",
    objectives: [
      "questo von quello unterscheiden",
      "beide Formen angleichen",
      "auf ein Stück zeigen, ohne mit dem Finger zu deuten"
    ],
    theory: [
      {
        h: "Nah und fern",
        p: "<strong>Questo</strong> ist etwas nahe bei der sprechenden Person („dieses hier\"), <strong>quello</strong> etwas Entfernteres („jenes\"). Einen alltäglichen dritten Grad gibt es nicht: das alte <em>codesto</em> lebt in der Toskana und in Amtstexten weiter."
      },
      {
        contrast: "Deutsch hat „dieser\" und „jener\", benutzt „jener\" aber kaum noch und behilft sich mit „der da\". Italienisch hält die Zweiteilung wirklich aufrecht: <em>quello</em> ist im Gespräch völlig normal, kein gehobenes Wort."
      },
      {
        h: "Questo gleicht sich einfach an",
        p: "<em>questo, questa, questi, queste</em>. Vor einem Vokal zieht es sich zusammen, gesprochen wie geschrieben: <em>quest'anno</em>, <em>quest'estate</em>."
      },
      {
        h: "Quello verhält sich wie ein Artikel",
        p: "Steht es <b>vor einem Nomen</b>, nimmt <em>quello</em> Formen parallel zu <em>il / lo / la / i / gli / le</em> an: <em>quel cappotto, quello zaino, quell'amico, quei pantaloni, quegli stivali, quella gonna, quelle scarpe</em>. Allein, ohne Nomen, hat es die vier gewöhnlichen Formen: <em>Prendo quello.</em> Behandle es als Artikel, dann wirken die sieben Formen nicht mehr willkürlich."
      }
    ],
    grammar: {
      title: "Questo und quello",
      table: {
        head: ["Artikel", "quello + Nomen", "questo", "Beispiel"],
        rows: [
          ["il", "quel", "questo", "quel cappotto / questo cappotto"],
          ["lo", "quello", "questo", "quello zaino"],
          ["l' (m)", "quell'", "quest'", "quell'orologio"],
          ["i", "quei", "questi", "quei pantaloni"],
          ["gli", "quegli", "questi", "quegli stivali"],
          ["la", "quella", "questa", "quella gonna"],
          ["le", "quelle", "queste", "quelle scarpe"]
        ]
      },
      examples: [
        { tr: "Was kostet diese Tasche?" },
        { tr: "Ich nehme lieber den Mantel da." },
        { tr: "Die Stiefel da sind im Angebot." },
        { tr: "Ich nehme den da, danke.", note: "allein stehend — gewöhnliche Formen" },
        { tr: "Dieses Jahr ist der Stil minimalistisch." }
      ]
    },
    vocab: [
      "Größe (Kleidung)",
      "Größe (Schuhe)",
      "Umkleidekabine",
      "anprobieren",
      "der Schlussverkauf",
      "Rabatt",
      "Schaufenster",
      "teuer / günstig",
      "eng / weit",
      "kann ich es anprobieren?",
      "es passt mir gut",
      "haben Sie es in M?"
    ],
    dialogue: [
      "Entschuldigung, kann ich dieses Hemd anprobieren?",
      "Natürlich. Welche Größe haben Sie?",
      "M. Haben Sie auch das blaue da?",
      "Ja, aber nur in L. Die Kabine ist hinten.",
      "Danke. Dieses hier ist mir ein bisschen eng."
    ],
    exercises: [
      {
        q: "Welche Form steht vor „zaino\"?",
        opts: ["quel zaino", "quello zaino", "quell'zaino"],
        why: "Quello verhält sich wie <i>lo</i>: vor z und s+Konsonant ergibt es <b>quello</b>."
      },
      {
        q: "Ergänze: „___ scarpe sono in saldo.\" (die Schuhe da)",
        why: "Feminin Plural: le → quelle."
      },
      {
        q: "Ergänze: „___ anno vado in Italia.\" (dieses Jahr)",
        why: "Questo zieht sich vor einem Vokal zu quest' zusammen."
      },
      {
        q: "Wähl die richtige Form von „quello\".",
        items: ["Mantel", "Stiefel", "Rock", "Hose", "Uhr"]
      },
      {
        q: "„Prendo quello.\" Warum nicht „quel\"?",
        opts: ["Das ist ein Fehler", "Weil quello allein steht, ohne Nomen", "Weil es Plural ist"],
        why: "Die Kurzformen (quel, quei, quegli) gibt es nur vor einem Nomen."
      },
      { q: "„Was kostet diese Tasche?\"" },
      { tr: "Kann ich die Jacke da anprobieren?" },
      {
        q: "Du bist in einem Bekleidungsgeschäft.",
        setting: "Ein Laden im Zentrum, während des Schlussverkaufs.",
        lines: [
          { tr: "Guten Tag, suchen Sie etwas Bestimmtes?" },
          { tr: "Frag, ob du diesen Rock anprobieren kannst.", answerTr: "Kann ich diesen Rock anprobieren?" },
          { tr: "Natürlich. Welche Größe?" },
          { tr: "Sag: Größe M.", answerTr: "Größe M, danke." }
        ]
      },
      { tr: "Die schwarzen Stiefel da sind im Angebot." },
      { tr: "Entschuldigung, haben Sie dieses Hemd in M?" }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Kleidung und Einkaufen",
    title: "Preise, Zahlen über hundert, bezahlen",
    objectives: [
      "nach einem Preis fragen und die Antwort verstehen",
      "über hundert zählen",
      "mit Karte oder bar bezahlen"
    ],
    theory: [
      {
        h: "Zahlen über hundert",
        p: "<em>Cento</em> ändert sich nie: <em>duecento, trecento</em>. <em>Mille</em> wird im Plural zu <em>-mila</em>: <em>duemila, tremila</em>. Und die Reihenfolge bleibt Zehner vor Einer: <em>millecinquecento</em>, nicht die deutsche Umstellung."
      },
      {
        contrast: "Die Trennzeichen sind deine: <em>1.500</em> mit Punkt für Tausender, <em>2,50</em> mit Komma für Dezimalstellen. Wer aus dem Englischen kommt, verliest sich hier ständig; du kannst die Preisschilder direkt lesen."
      },
      {
        h: "Preise werden abgekürzt gesagt",
        p: "<em>Due e cinquanta</em> = 2,50 €. Das Wort <em>euro</em> fällt oft weg, und wenn es steht, <b>bleibt es unverändert</b>: <em>trenta euro</em>, nie „euri\". Hier hilft dir Deutsch: „dreißig Euro\" bleibt ebenfalls im Singular."
      },
      {
        h: "Bezahlen",
        p: "<em>In contanti</em> (bar) oder <em>con la carta</em> (mit Karte). Wichtig: <em>lo scontrino</em> (der Kassenbon) und <em>la ricevuta</em>. In Italien hat der Bon rechtliche Bedeutung und muss ausgestellt werden."
      },
      {
        tip: "<em>Quanto costa?</em> bezieht sich auf eine Sache, <em>quanto costano?</em> auf mehrere. <em>Quant'è?</em> heißt an der Kasse „was macht das zusammen?\"."
      }
    ],
    grammar: {
      title: "Zahlen und die Frage nach dem Preis",
      table: {
        head: ["geschrieben", "auf Italienisch", "Hinweis"],
        rows: [
          ["100 / 200", "cento / duecento", "cento bleibt immer gleich"],
          ["1000 / 2000", "mille / duemila", "mille → -mila im Plural"],
          ["1500", "millecinquecento", "in einem Wort"],
          ["2,50 €", "due e cinquanta", "euro fällt oft weg"],
          ["was kostet es?", "quanto costa?", "eine Sache"],
          ["was kosten sie?", "quanto costano?", "mehrere Sachen"]
        ]
      },
      examples: [
        { tr: "Was kostet diese Tasche? — Fünfundachtzig Euro." },
        { tr: "Was macht das zusammen?" },
        { tr: "Kann ich mit Karte zahlen?" },
        { tr: "Nur bar, tut mir leid." },
        { tr: "Bekomme ich den Bon?" },
        { tr: "Es gibt zwanzig Prozent Rabatt." }
      ]
    },
    vocab: [
      "was kostet es / kosten sie?",
      "was macht das zusammen?",
      "bar",
      "mit Karte",
      "Kassenbon",
      "Wechselgeld",
      "hundert / tausend",
      "Prozent",
      "das ist zu teuer",
      "ein Schnäppchen",
      "Preis",
      "kostenlos"
    ],
    exercises: [
      { q: "Welche Zahl ist „millecinquecento\"?", opts: ["150", "1500", "15000"] },
      {
        q: "Welche Form ist richtig?",
        opts: ["trenta euri", "trenta euro", "trente euro"],
        why: "Euro bleibt im Plural unverändert — wie im Deutschen."
      },
      { q: "Schreib in Ziffern: „duemilaventicinque\"" },
      {
        q: "Ergänze: „___ costano queste scarpe?\"",
        why: "Quanto ändert sich hier nicht, das Verb schon: costano (Plural)."
      },
      { q: "„Kann ich mit Karte zahlen?\"" },
      {
        q: "Die Verkäuferin sagt „Sono ventidue e cinquanta\". Wie viel zahlst du?",
        opts: ["22,50 €", "2,25 €", "225 €"]
      },
      {
        q: "Vervollständige das Gespräch an der Kasse.",
        tr: "— Was macht das zusammen? — Dreiundvierzig Euro. — Kann ich mit Karte zahlen?"
      },
      { q: "Ordne die Ausdrücke zu.", pairs: ["Kassenbon", "Wechselgeld", "bar", "kostenlos"] },
      { tr: "Das macht hundertzwanzig Euro, mit zehn Prozent Rabatt." },
      { tr: "Was kosten die Stiefel im Schaufenster?" }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Grundgrammatik",
    title: "Menge und Intensität",
    objectives: [
      "molto als Adverb von molto als Adjektiv unterscheiden",
      "troppo, poco, tanto, abbastanza verwenden",
      "ein Adjektiv mit -issimo verstärken"
    ],
    theory: [
      {
        h: "Ein Wort, zwei Rollen",
        p: "<strong>Molto</strong> vor einem Adjektiv oder einem Verb ist <b>Adverb</b> und bleibt unverändert: <em>molto bella</em>, <em>lavoro molto</em>. Vor einem Nomen ist es <b>Adjektiv</b> und gleicht sich an: <em>molt<b>i</b> amici</em>, <em>molt<b>a</b> gente</em>. Dieselbe Regel gilt für <em>poco, troppo, tanto</em>."
      },
      {
        contrast: "Deutsch trennt die beiden Rollen mit zwei Wörtern: „sehr schön\" gegen „viele Freunde\". Italienisch nimmt dasselbe Wort und lässt die Endung entscheiden — also musst du jedes Mal bewusst prüfen, worauf es sich bezieht."
      },
      {
        h: "Ein Test, der immer funktioniert",
        p: "Stell die Frage: „wie viel wovon?\" → Adjektiv, es gleicht sich an. „wie sehr?\" → Adverb, feste Form. <em>Ho molti libri</em> (wie viele Bücher) gegen <em>Sono molto stanca</em> (wie müde)."
      },
      {
        h: "Der Superlativ auf -issimo",
        p: "Endung des Adjektivs abschneiden und <em>-issimo/-issima/-issimi/-issime</em> anhängen: <em>bello → bellissimo</em>, <em>caro → carissimo</em>. Deutsch braucht dafür „sehr\" oder „äußerst\"; Italienisch hat eine Endung und benutzt sie ständig."
      },
      {
        trap: "<b>Poco</b> heißt „wenig\", <b>un po' di</b> dagegen „ein bisschen\". Das ist nicht dasselbe: <em>ho poco tempo</em> (mir fehlt die Zeit, eine Klage) gegen <em>ho un po' di tempo</em> (ich habe etwas Zeit, und das ist in Ordnung)."
      }
    ],
    grammar: {
      title: "Molto, poco, troppo, tanto",
      table: {
        head: ["Rolle", "Form", "Beispiel"],
        rows: [
          ["Adverb (wie sehr)", "fest", "È molto caro. / Costa troppo."],
          ["Adjektiv (wie viel wovon)", "gleicht sich an", "Ho molti amici. / Troppa gente."],
          ["genug", "abbastanza (fest)", "È abbastanza grande."],
          ["Superlativ", "-issimo", "carissimo, bellissima"],
          ["zu wenig / zu viel", "poco / troppo", "Poco sale, troppo pepe."]
        ]
      },
      examples: [
        { tr: "Diese Jacke ist sehr elegant.", note: "Adverb — keine Änderung" },
        { tr: "Es sind viele Leute im Laden.", note: "Adjektiv — molte" },
        { tr: "Zu teuer, trotzdem danke." },
        { tr: "Diesen Monat habe ich wenig Geld." },
        { tr: "Das ist wunderschön!" },
        { tr: "Ganz gut, danke." }
      ]
    },
    vocab: [
      "sehr / viel",
      "wenig",
      "ein bisschen",
      "zu viel / zu",
      "so viel, reichlich",
      "genug, ziemlich",
      "mehr / weniger",
      "wunderschön",
      "sehr teuer",
      "Geld (im Italienischen immer Plural)",
      "trotzdem danke",
      "ich überlege es mir"
    ],
    exercises: [
      {
        q: "„Ci sono ___ persone.\" (viele Leute)",
        opts: ["molto", "molte", "molti"],
        why: "Vor einem Nomen gleicht sich molto an; persone ist feminin Plural."
      },
      {
        q: "„Questa borsa è ___ cara.\" (sehr teuer)",
        opts: ["molta", "molto", "molte"],
        why: "Vor einem Adjektiv ist molto Adverb und ändert sich nicht."
      },
      { q: "Bilde den Superlativ: „bello\" → „___\"" },
      { q: "Ergänze: „Ho ___ tempo oggi.\" (ich habe wenig Zeit)" },
      {
        q: "In welchen Sätzen ist „troppo\" Adverb (unveränderlich)?",
        opts: ["Costa troppo.", "C'è troppa gente.", "Sei troppo gentile.", "Ho troppi impegni."]
      },
      { q: "„Das ist zu teuer, danke.\"" },
      {
        q: "Ergänze die Endungen (oder einen Strich, wo die Form gleich bleibt).",
        tr: "Es gibt viele Geschäfte, aber sie sind sehr teuer."
      },
      { q: "Ordne zu.", pairs: ["genug", "zu viel", "ein bisschen", "wenig"] },
      { tr: "Es ist wunderschön, aber zu teuer für mich." },
      { tr: "Ich überlege es mir, trotzdem danke." }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Test",
    title: "Test zu Einheit 4",
    objectives: ["Adjektive, questo/quello, Zahlen und molto/poco/troppo prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Le scarpe ___.\" (rot)" },
      { q: "„I pantaloni ___.\" (grün)" },
      { q: "Wähl die Form von „quello\".", items: [, , , ] },
      { q: "Welche Zahl ist „duemilatrecento\"?", opts: ["230", "2300", "23000"] },
      { q: "„Sono ___ stanca.\" (sehr müde)", opts: ["molta", "molto", "molte"] },
      { q: "„Ci sono ___ persone.\" (viele Leute)" },
      { q: "„Kann ich dieses Hemd anprobieren?\"" },
      { tr: "Was kosten die Schuhe da?" },
      { tr: "Diese Jacke ist sehr teuer." },
      { tr: "Kann ich mit Karte zahlen?" }
    ]
  },
  "unit:a1-u05": { title: "Ein italienischer Tag", grammarNote: "reflexive Verben · Uhrzeit · Modalverben" },
  "lesson:a1-u05-l1": {
    theme: "Alltag",
    title: "Die reflexiven Verben",
    objectives: [
      "ein reflexives Verb an der Endung -si erkennen",
      "svegliarsi, alzarsi, vestirsi konjugieren",
      "deinen Morgen beschreiben"
    ],
    theory: [
      {
        h: "Eine Handlung, die auf einen selbst zurückgeht",
        p: "Ein reflexiver Infinitiv endet auf <strong>-si</strong>: <em>svegliar<b>si</b></em>, <em>alzar<b>si</b></em>. Beim Konjugieren fällt <em>-si</em> weg und ein Reflexivpronomen tritt vor das Verb: <em>mi, ti, si, ci, vi, si</em>. Das ist dein „sich wecken → ich wecke mich\", nur dass Italienisch das Pronomen vor das Verb stellt."
      },
      {
        h: "Das Pronomen steht immer vorn",
        p: "<em><b>Mi</b> sveglio alle sette.</em> Nie „sveglio mi\". Ausnahmen sind Infinitiv und Imperativ, wo es hinten angehängt wird: <em>devo alzar<b>mi</b></em>, <em>svegliati!</em> Deutsch stellt das „mich\" dagegen nach dem Verb: „ich wasche mich\"."
      },
      {
        contrast: "Deutsch kennt reflexive Verben, benutzt sie aber sparsamer für die Morgenroutine: du sagst „ich stehe auf\" und nicht „ich hebe mich\". Italienisch markiert jedes Mal, und wer das Pronomen weglässt, sagt etwas anderes: <em>sveglio alle sette</em> heißt, dass du jemand anderen weckst."
      },
      {
        h: "Manche Verben sind nur im Italienischen reflexiv",
        p: "<em>Chiamarsi</em> (heißen), <em>ricordarsi</em> (sich erinnern), <em>dimenticarsi</em> (vergessen), <em>arrabbiarsi</em> (sich ärgern), <em>annoiarsi</em> (sich langweilen). Am auffälligsten ist <em>chiamarsi</em>: „ich heiße\" braucht im Deutschen gar kein Pronomen."
      }
    ],
    grammar: {
      title: "Svegliarsi (aufwachen)",
      table: {
        head: ["Person", "Pronomen", "Form", "Beispiel"],
        rows: [
          ["io", "mi", "mi sveglio", "Mi sveglio alle sette."],
          ["tu", "ti", "ti svegli", "A che ora ti svegli?"],
          ["lui / lei", "si", "si sveglia", "Si sveglia tardi."],
          ["noi", "ci", "ci svegliamo", "Ci svegliamo presto."],
          ["voi", "vi", "vi svegliate", "Vi svegliate alle otto?"],
          ["loro", "si", "si svegliano", "Si svegliano alle nove."]
        ]
      },
      examples: [
        { tr: "Ich stehe gleich nach dem Wecker auf." },
        { tr: "Putzt du dir die Zähne vor oder nach dem Frühstück?" },
        { tr: "Wir ziehen uns in Eile an." },
        { tr: "Morgen muss ich früh aufstehen.", note: "das Pronomen hängt sich an den Infinitiv" },
        { tr: "Ich erinnere mich nicht an seinen Namen." }
      ]
    },
    vocab: [
      "aufwachen",
      "aufstehen",
      "sich waschen",
      "sich anziehen",
      "sich kämmen",
      "duschen",
      "frühstücken",
      "das Haus verlassen",
      "sich ausruhen",
      "einschlafen",
      "Wecker",
      "in Eile"
    ],
    exercises: [
      { why: "Schreib die ganze Form mitsamt Pronomen, also zum Beispiel „mi sveglio\"." },
      {
        q: "Woran erkennt man ein reflexives Verb im Wörterbuch?",
        opts: ["Es beginnt mit einem Vokal", "Es endet auf -si", "Es wird auf der letzten Silbe betont"]
      },
      {
        q: "Ergänze: „Noi ___ alle sei.\" (wir stehen um sechs auf — alzarsi)",
        why: "Das Reflexivpronomen für noi ist ci."
      },
      {
        q: "Ergänze: „Devo ___ presto.\" (ich muss früh aufstehen)",
        hint: "das Pronomen hängt sich an den Infinitiv",
        why: "Nach einem Modalverb hängt sich das Pronomen an den Infinitiv: alzarmi."
      },
      {
        q: "Welcher Satz ist richtig?",
        opts: ["Sveglio mi alle sette.", "Mi sveglio alle sette.", "Sveglio alle sette mi."]
      },
      { q: "„Ich ziehe mich in Eile an.\"" },
      { q: "Beschreib deinen Morgen.", tr: "Ich wache um halb sieben auf, dann stehe ich auf und dusche." },
      { tr: "Meine Schwester wacht spät auf." },
      { tr: "Ich wache um sieben auf und stehe sofort auf." },
      { tr: "Wann wachst du normalerweise auf?" }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "Alltag",
    title: "Die Uhrzeit und die Tageszeiten",
    objectives: [
      "die Uhrzeit sagen und verstehen",
      "è und sono richtig einsetzen",
      "sich zu einer bestimmten Zeit verabreden"
    ],
    theory: [
      {
        h: "Die Stunden stehen im Plural",
        p: "Ein Italiener fragt <em>Che ore sono?</em> („welche Stunden sind es\") und antwortet <em>Sono le tre</em>. Gemeint ist <em>le ore</em>, daher der feminine Pluralartikel. Ausnahmen sind ein Uhr, Mittag und Mitternacht, die im Singular stehen: <em>è l'una</em>, <em>è mezzogiorno</em>, <em>è mezzanotte</em>."
      },
      {
        contrast: "Deutsch sagt unpersönlich „es ist drei Uhr\", immer im Singular. Der Wechsel zwischen <em>è</em> und <em>sono</em> ist also komplett neu. Merk dir die Schwelle: <em>è</em> nur bei una, mezzogiorno und mezzanotte, <em>sono</em> bei allem anderen."
      },
      {
        h: "Die Minuten",
        p: "Bis zur halben Stunde wird addiert: <em>le tre e dieci</em>. Danach zieht man meist von der nächsten Stunde ab: <em>le quattro meno dieci</em>. Übliche Kürzel: <em>e un quarto</em> (Viertel nach), <em>e mezza</em> (halb), <em>meno un quarto</em> (Viertel vor)."
      },
      {
        trap: "Die deutsche „halb drei\" ist die größte Falle des Kapitels: sie meint 14:30, blickt also voraus. Italienisch blickt zurück und sagt <em>le due e mezza</em>, „zwei und halb\". Wer <em>mezza</em> wie „halb\" liest, verabredet sich eine Stunde zu früh."
      },
      {
        tip: "Fahrpläne, Kinoprogramme und Ämter benutzen die 24-Stunden-Zählung: <em>alle diciotto e trenta</em>. Im Gespräch sagt man <em>alle sei e mezza di sera</em>. Es gibt kein a.m./p.m.: bei Bedarf hängt man <em>di mattina, di pomeriggio, di sera</em> an."
      }
    ],
    grammar: {
      title: "Die Uhrzeit sagen",
      table: {
        head: ["Uhr", "auf Italienisch", "Hinweis"],
        rows: [
          ["13:00", "è l'una", "Singular"],
          ["12:00", "è mezzogiorno", "Mittag"],
          ["00:00", "è mezzanotte", "Mitternacht"],
          ["15:00", "sono le tre", "Plural"],
          ["15:15", "sono le tre e un quarto", ""],
          ["15:30", "sono le tre e mezza", "„drei und halb\", nicht „halb vier\""],
          ["15:50", "sono le quattro meno dieci", "abziehend"],
          ["um 20:00", "alle otto", "a + le = alle"]
        ]
      },
      examples: [
        { tr: "Wie spät ist es? — Zwanzig nach neun." },
        { tr: "Wann öffnet der Laden? — Um halb zehn." },
        { tr: "Der Zug fährt um Viertel nach eins." },
        { tr: "Wir sehen uns um acht Uhr abends." },
        { tr: "Es ist Mittag, gehen wir essen." }
      ]
    },
    vocab: [
      "wie spät ist es?",
      "um wie viel Uhr?",
      "Mittag / Mitternacht",
      "Viertel nach / halb",
      "Viertel vor",
      "am Morgen",
      "am Nachmittag",
      "am Abend / in der Nacht",
      "früh / spät",
      "pünktlich",
      "verspätet",
      "bis gleich"
    ],
    exercises: [
      {
        q: "Warum heißt es „è l'una\" und nicht „sono l'una\"?",
        opts: ["Das ist eine Regel ohne Grund", "Weil „una\" Singular ist", "Weil es umgangssprachlich ist"],
        why: "Alle anderen Stunden stehen im Plural (le due, le tre…) und nehmen sono."
      },
      { q: "Ergänze: „___ le otto e mezza.\" (es ist halb neun)" },
      { q: "Ergänze: „Il film comincia ___ nove.\" (um neun)" },
      {
        q: "Wie sagt man 15:45?",
        opts: ["le tre e quarantacinque", "le quattro meno un quarto", "beides ist richtig"],
        why: "Beides geht; „meno un quarto\" klingt im Gespräch natürlicher."
      },
      { q: "Ordne die Uhrzeit ihrer Schreibweise zu.", pairs: ["12:00", "14:15", "13:30", "6:50"] },
      { q: "„Wann öffnet der Laden?\"" },
      { q: "Ergänze.", tr: "— Wie spät ist es? — Viertel vor elf. — Ich bin spät dran!" },
      { tr: "Wir sehen uns um acht Uhr abends." },
      { tr: "Der Zug fährt um 18:45." },
      { tr: "Entschuldigung, wie spät ist es? — Halb vier." }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Grundgrammatik",
    title: "Die Modalverben",
    objectives: [
      "potere, volere und dovere konjugieren",
      "um Erlaubnis bitten und Notwendigkeit ausdrücken",
      "verstehen, warum vorrei höflicher ist als voglio"
    ],
    theory: [
      {
        h: "Drei Verben, eine Konstruktion",
        p: "<strong>Potere</strong> (können), <strong>volere</strong> (wollen) und <strong>dovere</strong> (müssen) verbinden sich mit einem Infinitiv <b>ganz ohne Präposition</b>: <em>posso entrare</em>, <em>voglio partire</em>, <em>devo lavorare</em>. Alle drei sind unregelmäßig, sitzen aber schnell, weil man sie ständig braucht — genau wie deine Modalverben."
      },
      {
        trap: "Der Infinitiv steht direkt hinter dem Modalverb, nicht am Satzende: <em>voglio partire domani</em>, nicht „*voglio domani partire\". Die deutsche Verbklammer ist hier der hartnäckigste Reflex."
      },
      {
        h: "Voglio klingt schroff",
        p: "<em>Voglio un caffè</em> ist grammatisch nicht unhöflich, kommt in einer Bar aber als Forderung an — wie das deutsche „ich will einen Kaffee\". Italiener sagen <strong>vorrei</strong>, den Konditional von <em>volere</em>, also dein „ich hätte gern\". Lern es vorerst als feste Wendung."
      },
      {
        h: "Pronomen bei Modalverben: zwei Stellungen",
        p: "Bei einem reflexiven Verb sind beide Versionen gleich richtig: <em><b>mi</b> devo alzare</em> oder <em>devo alzar<b>mi</b></em>. Dieselbe Freiheit gilt für Objektpronomen: <em>ti posso aiutare</em> = <em>posso aiutarti</em>."
      },
      {
        tip: "<em>Dovere</em> heißt nicht nur „müssen\", sondern auch Geld schulden: <em>Ti devo dieci euro</em>. Deutsch macht mit „schulden\" ein eigenes Wort daraus."
      }
    ],
    grammar: {
      title: "Potere, volere, dovere",
      table: {
        head: ["Person", "potere", "volere", "dovere"],
        rows: [
          ["io", "posso", "voglio", "devo"],
          ["tu", "puoi", "vuoi", "devi"],
          ["lui / lei", "può", "vuole", "deve"],
          ["noi", "possiamo", "vogliamo", "dobbiamo"],
          ["voi", "potete", "volete", "dovete"],
          ["loro", "possono", "vogliono", "devono"]
        ]
      },
      examples: [
        { tr: "Darf ich hereinkommen?" },
        { tr: "Ich hätte gern einen Kaffee.", note: "höflicher als „voglio\"" },
        { tr: "Ich muss los, es ist spät." },
        { tr: "Wir können nicht bar zahlen." },
        { tr: "Willst du mitkommen?" },
        { tr: "Ich muss früh aufstehen.", note: "beide Versionen sind richtig" }
      ]
    },
    vocab: [
      "können, dürfen",
      "wollen",
      "müssen, sollen",
      "ich hätte gern",
      "darf man?",
      "es ist verboten",
      "es ist erlaubt",
      "man muss (unpersönlich)",
      "Lust haben",
      "leider",
      "gern",
      "vielleicht; wenn doch"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Du bestellst im Restaurant. Was klingt am besten?",
        opts: ["Voglio una pizza.", "Vorrei una pizza.", "Devo una pizza."],
        why: "Vorrei ist der Höflichkeitskonditional — der Standard beim Bestellen."
      },
      { q: "Ergänze: „Noi ___ partire domani.\" (wir müssen morgen abreisen)" },
      {
        q: "Welcher Satz ist falsch?",
        opts: ["Devo di andare.", "Devo andare.", "Devo andarci."],
        why: "Modalverben nehmen vor dem Infinitiv keine Präposition."
      },
      { q: "„Kann ich mit Karte zahlen?\"" },
      { q: "Ergänze.", tr: "Ich kann heute Abend nicht kommen, ich muss lange arbeiten." },
      { tr: "Entschuldigung, kann ich diese Jacke anprobieren?" },
      { tr: "Ich hätte gern einen Tisch für zwei reserviert." }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Alltag",
    title: "Häufigkeit und Wochentage",
    objectives: [
      "das Häufigkeitsadverb richtig platzieren",
      "die doppelte Verneinung mit mai verwenden",
      "die Wochentage benennen und über deinen Alltag sprechen"
    ],
    theory: [
      {
        h: "Das Adverb steht direkt hinter dem Verb",
        p: "<em>Vado <b>sempre</b> in palestra il lunedì.</em> Italienisch stellt das Häufigkeitsadverb unmittelbar hinter das konjugierte Verb — wie im deutschen „ich gehe immer\". Es voranzustellen ist möglich, wirkt aber betont."
      },
      {
        h: "Mai braucht non",
        p: "<strong>Non</strong> vado <strong>mai</strong> al cinema. Italienisch verwendet die doppelte Verneinung, und das ist die Regel, kein Fehler. Ebenso bei <em>niente</em>, <em>nessuno</em>, <em>più</em>: <em>non ho più tempo</em>, <em>non conosco nessuno</em>."
      },
      {
        contrast: "Hier musst du gegen dein Sprachgefühl arbeiten: im Deutschen gilt die doppelte Verneinung als grober Fehler („ich gehe nie nicht\"). Im Italienischen ist genau das die einzige richtige Form. <em>Vado mai</em> ohne <em>non</em> ist falsch."
      },
      {
        h: "Die Wochentage",
        p: "Sie werden kleingeschrieben — noch eine Gewohnheit, die abzulegen ist — und sind maskulin, außer <em>la domenica</em>. Ohne Artikel meinen sie einen bestimmten Tag (<em>lunedì vado a Roma</em>, kommenden Montag); mit Artikel eine Gewohnheit (<em>il lunedì vado in palestra</em>, montags). Deutsch macht denselben Unterschied mit „am Montag\" gegen „montags\"."
      }
    ],
    grammar: {
      title: "Häufigkeit und Wochentage",
      table: {
        head: ["Adverb", "auf Deutsch", "Beispiel"],
        rows: [
          ["sempre", "immer", "Bevo sempre un caffè la mattina."],
          ["di solito", "normalerweise", "Di solito lavoro da casa."],
          ["spesso", "oft", "Vado spesso al mercato."],
          ["qualche volta / a volte", "manchmal", "A volte esco a correre."],
          ["raramente", "selten", "Guardo raramente la TV."],
          ["non… mai", "nie", "Non prendo mai il taxi."]
        ]
      },
      examples: [
        { tr: "Montag, Dienstag, Mittwoch, Donnerstag" },
        { tr: "Freitag, Samstag, Sonntag" },
        { tr: "Samstags schlafe ich aus.", note: "mit Artikel = Gewohnheit" },
        { tr: "Diesen Samstag fahre ich nach Florenz.", note: "ohne Artikel = ein bestimmter Tag" },
        { tr: "Ich gehe nie vor Mitternacht ins Bett." }
      ]
    },
    vocab: [
      "immer",
      "normalerweise",
      "oft",
      "manchmal",
      "selten",
      "nie",
      "jeden Tag",
      "das Wochenende",
      "Montag",
      "Samstag",
      "Sonntag",
      "einmal pro Woche"
    ],
    exercises: [
      {
        q: "Wo steht „spesso\" normalerweise?",
        opts: ["Vor dem Subjekt", "Direkt hinter dem konjugierten Verb", "Immer am Satzende"]
      },
      {
        q: "Ergänze: „___ vado ___ al cinema.\" (ich gehe nie ins Kino) — schreib beide Wörter durch ein Leerzeichen getrennt, in der Satzreihenfolge",
        hint: "doppelte Verneinung",
        why: "Non vado mai — non vor dem Verb, mai direkt danach."
      },
      {
        q: "„Il sabato dormo fino a tardi\" bedeutet:",
        opts: ["Diesen Samstag schlafe ich aus", "Samstags schlafe ich immer aus", "Letzten Samstag habe ich ausgeschlafen"],
        why: "Der Artikel vor einem Wochentag markiert die Gewohnheit."
      },
      { tr: "Normalerweise arbeite ich von zu Hause." },
      { q: "Ordne zu.", pairs: ["immer", "selten", "manchmal", "jeden Tag"] },
      { q: "„Ich nehme nie ein Taxi.\"" },
      {
        q: "Beschreib deine Woche.",
        tr: "Montags gehe ich ins Fitnessstudio, am Wochenende aber nie."
      },
      {
        q: "Welche Sätze sind richtig?",
        opts: ["Non vado mai al cinema.", "Vado mai al cinema.", "Non ho più tempo.", "Ho più non tempo."]
      },
      { tr: "Normalerweise stehe ich früh auf, sonntags schlafe ich aber aus." },
      { tr: "Ich gehe oft am Samstagmorgen auf den Markt." }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Test",
    title: "Test zu Einheit 5",
    objectives: ["reflexive Verben, Uhrzeit, Modalverben und Häufigkeit prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      {  },
      { q: "„Devo ___ presto.\" (ich muss früh aufstehen — alzarsi)" },
      { q: "„___ le due e mezza.\" (es ist halb drei)" },
      { q: "„Il treno parte ___ una.\" (um ein Uhr)" },
      {  },
      { q: "Die höflichste Art zu bestellen:", opts: ["Voglio…", "Vorrei…", "Devo…"] },
      {
        q: "„Non vado mai in palestra\" bedeutet:",
        opts: ["Ich gehe manchmal hin", "Ich gehe nie hin", "Ich gehe jeden Tag hin"]
      },
      { tr: "Normalerweise frühstücke ich um acht." },
      { tr: "Ich wache jeden Tag um halb sieben auf." },
      { tr: "Wann stehst du normalerweise auf?" }
    ]
  },
  "unit:a1-u06": { title: "In der Stadt", grammarNote: "verschmolzene Präpositionen · andare/venire · Wegbeschreibungen" },
  "lesson:a1-u06-l1": {
    theme: "Die Stadt und sich zurechtfinden",
    title: "Die verschmolzenen Präpositionen",
    objectives: [
      "eine Präposition mit einem Artikel verschmelzen",
      "beschreiben, wo etwas ist",
      "den häufigsten Fehler vermeiden: „a il\" statt „al\""
    ],
    theory: [
      {
        h: "Fünf Präpositionen, die verschmelzen müssen",
        p: "Folgt auf <em>di, a, da, in, su</em> ein bestimmter Artikel, verschmelzen die beiden Wörter zu einem. Das ist keine Stilfrage: <em>a il cinema</em> ist schlicht falsch. Die übrigen Präpositionen (<em>con, per, tra, fra</em>) bleiben getrennt."
      },
      {
        contrast: "Deutsch verschmilzt auch — „zum\", „im\", „ans\" — aber gelegentlich und nie zwingend: „zu dem Bahnhof\" bleibt möglich. Italienisch tut es durchgehend und verpflichtend, und zwar mit fünf Präpositionen mal sieben Artikeln."
      },
      {
        h: "Das Muster ist regelmäßig",
        p: "Du nimmst den Anfang der Präposition und hängst den Artikel an: <em>a + il = al</em>, <em>a + lo = allo</em>, <em>a + la = alla</em>, <em>a + i = ai</em>, <em>a + gli = agli</em>, <em>a + le = alle</em>. <em>Di, da, in</em> und <em>su</em> funktionieren genauso."
      },
      {
        trap: "<b>In</b> wird zu <b>ne-</b>: <em>in + il = nel</em>, nicht „inl\". Das ist die einzige Form der ganzen Tabelle, die man nicht ableiten kann."
      },
      {
        h: "Kein Artikel, keine Verschmelzung",
        p: "<em>Vado a Roma</em> (Stadt, kein Artikel), <em>vado in Italia</em> (Land, kein Artikel nach in), aber <em>vado al mare</em>, <em>vado alla stazione</em>. Verschmolzen wird nur, wenn wirklich ein Artikel da ist."
      }
    ],
    grammar: {
      title: "Tabelle der verschmolzenen Präpositionen",
      table: {
        head: ["", "il", "lo", "la", "l'", "i", "gli", "le"],
        rows: [
          ["di", "del", "dello", "della", "dell'", "dei", "degli", "delle"],
          ["a", "al", "allo", "alla", "all'", "ai", "agli", "alle"],
          ["da", "dal", "dallo", "dalla", "dall'", "dai", "dagli", "dalle"],
          ["in", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"],
          ["su", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"]
        ]
      },
      examples: [
        { tr: "Ich gehe ins Kino.", note: "a + il" },
        { tr: "Das Buch liegt auf dem Tisch.", note: "su + il" },
        { tr: "Ich wohne in der Altstadt.", note: "in + il" },
        { tr: "Ich komme vom Bahnhof zurück.", note: "da + la" },
        { tr: "Der Autoschlüssel.", note: "di + la" },
        { tr: "Mit dem Zug.", note: "con bleibt normalerweise getrennt" }
      ]
    },
    vocab: [
      "Platz",
      "Straße",
      "die Innenstadt",
      "Kirche",
      "Museum",
      "Bank",
      "Apotheke",
      "Post",
      "Ampel",
      "Kreuzung",
      "Brücke",
      "Haltestelle"
    ],
    exercises: [
      { q: "Ergänze: „Vado ___ cinema.\" (a + il)" },
      { q: "Ergänze: „Il libro è ___ tavolo.\" (su + il)" },
      { q: "Ergänze: „Abito ___ centro.\" (in + il)" },
      {
        q: "Wähl die richtige Form von „a + Artikel\".",
        items: ["der Bahnhof", "der Flughafen", "die Studenten", "das Restaurant", "neun Uhr"]
      },
      {
        q: "Welche Kombination verschmilzt NICHT?",
        opts: ["a + il", "con + il", "in + la"],
        why: "Con bleibt normalerweise getrennt; die Form „col\" gibt es, ist aber freiwillig."
      },
      { q: "Ergänze die Wegbeschreibung.", tr: "Die Apotheke ist an der Ecke, neben der Bank, gegenüber der Kirche." },
      { q: "„Ich komme vom Bahnhof zurück.\"" },
      { tr: "Der Autoschlüssel liegt auf dem Tisch." },
      { tr: "Die Post ist in der Nähe des Hauptplatzes." },
      { tr: "Entschuldigung, wo ist die Bushaltestelle?" }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "Die Stadt und sich zurechtfinden",
    title: "Gehen und kommen",
    objectives: [
      "andare und venire konjugieren",
      "vor einem Ziel a oder in wählen",
      "andare von venire unterscheiden"
    ],
    theory: [
      {
        h: "Die Richtung hängt davon ab, wo dein Gegenüber steht",
        p: "<strong>Andare</strong> ist Bewegung <b>weg von</b> der sprechenden Person, <strong>venire</strong> Bewegung <b>hin zu</b> ihr oder mit ihr. Deutsch funktioniert mit gehen und kommen genauso, die Unterscheidung selbst fühlt sich also natürlich an."
      },
      {
        h: "A oder in: die praktische Regel",
        list: [
          "<b>a</b>: Städte (<em>a Roma</em>), Orte als Tätigkeit gedacht (<em>a scuola, a casa, a letto, al lavoro, al cinema, al mare</em>)",
          "<b>in</b>: Länder und Regionen (<em>in Italia, in Toscana</em>), Räume und Institutionen (<em>in banca, in ufficio, in farmacia, in centro</em>), Verkehrsmittel (<em>in treno, in macchina, in bici</em>)",
          "<b>da</b>: zu einer Person (<em>vado dal medico, vado da Marco</em>)"
        ]
      },
      {
        trap: "<em>A piedi</em> („zu Fuß\") bricht die Verkehrsmittelregel, weil man auf seinen Füßen nicht fährt. Merk es als Ausnahme."
      },
      {
        contrast: "Deutsch trennt zwischen Richtung und Ort mit dem Kasus: „ich gehe in die Stadt\" gegen „ich bin in der Stadt\". Italienisch macht diesen Unterschied gar nicht — <em>vado a Roma</em> und <em>sono a Roma</em> nehmen dieselbe Präposition. Dafür musst du zwischen a, in und da wählen, und diese Wahl folgt keiner Logik, die sich aus dem Deutschen ableiten ließe."
      }
    ],
    grammar: {
      title: "Andare und venire",
      table: {
        head: ["Person", "andare", "venire", "Beispiel"],
        rows: [
          ["io", "vado", "vengo", "Vado al lavoro. / Vengo con te."],
          ["tu", "vai", "vieni", "Vieni anche tu?"],
          ["lui / lei", "va", "viene", "Va a scuola."],
          ["noi", "andiamo", "veniamo", "Andiamo al mare."],
          ["voi", "andate", "venite", "Venite da noi stasera?"],
          ["loro", "vanno", "vengono", "Vanno in Italia."]
        ]
      },
      examples: [
        { tr: "Ich fahre mit dem Zug nach Rom." },
        { tr: "Im September fahre ich nach Italien." },
        { tr: "Ich gehe um drei zum Zahnarzt." },
        { tr: "Kommst du zur Party? — Ja, gern." },
        { tr: "Gehen wir zu Fuß, es ist nah." },
        { tr: "Woher kommst du? — Aus Polen." }
      ]
    },
    vocab: [
      "gehen, fahren",
      "kommen",
      "zu Fuß",
      "mit dem Auto",
      "mit dem Bus",
      "mit dem Fahrrad",
      "mit der U-Bahn",
      "nah / weit",
      "hier / dort",
      "zusammen",
      "allein",
      "es dauert eine halbe Stunde"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Jemand lädt dich zu sich ein. Wie bestätigst du?",
        opts: ["Sì, vado!", "Sì, vengo!", "Sì, andiamo!"],
        why: "Bewegung auf die zuhörende Person zu ist venire — wie dein „ja, ich komme!\"."
      },
      { q: "Ergänze: „Vado ___ Italia.\" (nach Italien)" },
      { q: "Ergänze: „Vado ___ Milano.\" (nach Mailand)" },
      { q: "Ergänze: „Vado ___ medico.\" (zum Arzt)" },
      {
        q: "Welche Kombinationen sind richtig?",
        opts: ["in treno", "a treno", "a piedi", "in piedi", "in banca"],
        why: "„In piedi\" gibt es, heißt aber „stehend\", nicht „zu Fuß\"."
      },
      { tr: "Gehen wir zu Fuß, es ist nah." },
      { tr: "Ich komme mit dir, aber wir nehmen die U-Bahn." },
      { tr: "Ich gehe zu Fuß in die Innenstadt, das dauert eine halbe Stunde." }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "Die Stadt und sich zurechtfinden",
    title: "Nach dem Weg fragen",
    objectives: [
      "nach dem Weg fragen und die Antwort verstehen",
      "den Imperativ der du-Form verwenden",
      "einen Ort mit Präpositionen beschreiben"
    ],
    theory: [
      {
        h: "Der Imperativ der du-Form",
        p: "Wegbeschreibungen stehen im Imperativ. Bei den <b>-are</b>-Verben ist die <em>tu</em>-Form mit der dritten Person Präsens identisch: <em>gira!</em>, <em>continua!</em> Bei <b>-ere</b> und <b>-ire</b> mit der zweiten: <em>prendi!</em>, <em>segui!</em>"
      },
      {
        h: "Vier Kurzformen",
        p: "<em>andare → va'</em>, <em>fare → fa'</em>, <em>dare → da'</em>, <em>stare → sta'</em>, <em>dire → di'</em>. Der Apostroph steht für die weggefallenen Buchstaben. In der Praxis hörst du auch die vollen <em>vai</em> und <em>fai</em> — beide sind in Gebrauch."
      },
      {
        h: "Förmlich: mit Lei",
        p: "Einer fremden Person gegenüber klingen die Anweisungen anders: <em>giri a destra</em>, <em>prenda la prima a sinistra</em>, <em>vada dritto</em>. Das sind Konjunktivformen; lern sie vorerst als feste Wendungen — sie entsprechen deinem „gehen Sie\", „biegen Sie ab\"."
      },
      {
        tip: "Der nützlichste Satz, wenn du nicht mitkommst: <em>Può ripetere più lentamente, per favore?</em> Italiener sprechen schnell, und fast niemand wird langsamer, wenn man nicht darum bittet."
      }
    ],
    grammar: {
      title: "Wegbeschreibungen geben",
      table: {
        head: ["locker (tu)", "förmlich (Lei)", "auf Deutsch"],
        rows: [
          ["vai dritto", "vada dritto", "geh / gehen Sie geradeaus"],
          ["gira a destra", "giri a destra", "bieg / biegen Sie rechts ab"],
          ["gira a sinistra", "giri a sinistra", "bieg / biegen Sie links ab"],
          ["prendi la prima strada", "prenda la prima strada", "nimm / nehmen Sie die erste Straße"],
          ["attraversa la piazza", "attraversi la piazza", "überquer / überqueren Sie den Platz"],
          ["continua fino al semaforo", "continui fino al semaforo", "geh / gehen Sie bis zur Ampel"]
        ]
      },
      examples: [
        { tr: "Entschuldigung, wo ist der Bahnhof?" },
        { tr: "Ganz in der Nähe, zwei Schritte von hier." },
        { tr: "Gehen Sie geradeaus und nehmen Sie die zweite rechts." },
        { tr: "Es ist gegenüber der Bank, neben der Apotheke." },
        { tr: "Wie weit ist es zu Fuß? — Zehn Minuten." },
        { tr: "Ich habe mich verlaufen, können Sie mir helfen?" }
      ]
    },
    vocab: [
      "wo ist…?",
      "rechts / links",
      "geradeaus",
      "gegenüber",
      "neben",
      "nah bei / weit von",
      "hinter / vor",
      "zwischen… und…",
      "abbiegen",
      "überqueren",
      "ich habe mich verlaufen",
      "zwei Schritte von hier"
    ],
    exercises: [
      { q: "„Gira a sinistra\" heißt:", opts: ["Bieg rechts ab", "Bieg links ab", "Geh geradeaus"] },
      { q: "Die förmliche Version von „vai dritto\" ist:", opts: ["va dritto", "vada dritto", "andare dritto"] },
      { q: "Ergänze: „___ la stazione?\" (wo ist der Bahnhof)" },
      { q: "Ordne die Ortspräpositionen zu.", pairs: ["gegenüber", "neben", "hinter", "zwischen… und…"] },
      {
        q: "Ergänze die Wegbeschreibung.",
        tr: "Gehen Sie geradeaus bis zur Ampel, dann biegen Sie rechts ab. Die Bank ist gegenüber der Apotheke."
      },
      { q: "„Entschuldigung, wo ist die Apotheke?\"" },
      {
        q: "Du hast dich im Zentrum verlaufen.",
        setting: "Eine enge Gasse; die Person sieht aus wie eine Einheimische.",
        lines: [
          { tr: "Sprich sie höflich an und frag nach dem Bahnhof.", answerTr: "Entschuldigung, wo ist der Bahnhof?" },
          { tr: "Also: geradeaus, dann die zweite rechts." },
          {
            tr: "Sag, dass du nicht mitgekommen bist, und bitte um Wiederholung.",
            answerTr: "Ich verstehe nicht, können Sie das langsamer wiederholen?"
          },
          { tr: "Klar. Geradeaus… dann die zweite rechts. Zehn Minuten zu Fuß." },
          { tr: "Bedank dich.", answerTr: "Vielen Dank, sehr nett!" }
        ]
      },
      { tr: "Das Museum liegt zwischen dem Platz und der Brücke." },
      { tr: "Gehen Sie geradeaus und überqueren Sie den Platz." },
      { tr: "Ich habe mich verlaufen, können Sie mir helfen?" }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "Die Stadt und sich zurechtfinden",
    title: "Einen Ort beschreiben",
    objectives: [
      "sagen, was es in einer Stadt oder Wohnung gibt",
      "c'è / ci sono in Verneinung und Frage verwenden",
      "es mit den Ortspräpositionen verbinden"
    ],
    theory: [
      {
        h: "Vorhandensein gegen Beschaffenheit",
        p: "<strong>C'è</strong> und <strong>ci sono</strong> sagen, dass etwas <b>irgendwo ist</b>. <em>Essere</em> sagt, <b>wie</b> etwas ist. <em>C'è un museo in centro</em> gegen <em>Il museo è bellissimo</em>. Deutsch trennt genauso mit „es gibt\" und „es ist\"."
      },
      {
        h: "Verneinung und Frage",
        p: "<em>Non c'è</em> / <em>non ci sono</em>; die Frage entsteht allein durch die Intonation: <em>C'è un bagno qui?</em> Kurze Antworten sind sehr üblich: <em>Sì, c'è.</em> / <em>No, non c'è.</em>"
      },
      {
        h: "Ci heißt nicht nur „dort\"",
        p: "Dieselbe Partikel <em>ci</em> taucht überall auf: <em>ci vuole</em> (es braucht), <em>ci metto</em> (ich brauche so lange), <em>ci vado</em> (ich gehe hin). Vorerst reicht es, sie in diesen Wendungen wiederzuerkennen; die vollständige Erklärung kommt in B1."
      },
      {
        tip: "In Restaurants und Bars tragen dich zwei Sätze weit: <em>C'è il bagno?</em> und <em>Non c'è il wifi?</em>"
      }
    ],
    grammar: {
      title: "C'è / ci sono",
      table: {
        head: ["Form", "Gebrauch", "Beispiel"],
        rows: [
          ["c'è", "eine Sache", "C'è una farmacia qui vicino."],
          ["ci sono", "mehrere Sachen", "Ci sono due farmacie."],
          ["non c'è", "Verneinung Sg.", "Non c'è il wifi."],
          ["non ci sono", "Verneinung Pl.", "Non ci sono tavoli liberi."],
          ["c'è…?", "Frage", "C'è un bancomat qui?"],
          ["quanto c'è?", "Entfernung", "Quanto c'è da qui al centro?"]
        ]
      },
      examples: [
        { tr: "In meinem Viertel gibt es jeden Samstag einen Markt." },
        { tr: "Um diese Jahreszeit sind viele Touristen da." },
        { tr: "An der Rezeption ist niemand." },
        { tr: "Gibt es eine Toilette? — Ja, hinten rechts." },
        { tr: "Wie weit ist es von hier ins Zentrum?" }
      ]
    },
    vocab: [
      "Viertel",
      "Toilette",
      "Geldautomat",
      "Supermarkt",
      "Parkplatz",
      "Park",
      "Krankenhaus",
      "Bibliothek",
      "niemand",
      "etwas",
      "hier in der Gegend",
      "hinten"
    ],
    exercises: [
      { q: "Ergänze: „___ un bancomat qui vicino?\"" },
      { q: "Ergänze: „___ due farmacie in questa via.\"" },
      {
        q: "Welcher Satz beschreibt eine Beschaffenheit und nicht das Vorhandensein?",
        opts: ["C'è un museo in centro.", "Il museo è molto grande.", "Ci sono tre musei."]
      },
      { q: "Verneine: „C'è il wifi.\" → „___ il wifi.\"" },
      { q: "Beschreib dein Viertel.", tr: "In meinem Viertel gibt es einen Park, aber keine Supermärkte." },
      { q: "„An der Rezeption ist niemand.\"" },
      { q: "Ordne zu.", pairs: ["Parkplatz", "Krankenhaus", "Bibliothek", "Viertel"] },
      { tr: "Gibt es hier in der Gegend eine Apotheke?" },
      { tr: "Im Viertel gibt es zwei Parks und eine Bibliothek." },
      { tr: "Entschuldigung, gibt es eine Toilette? — Ja, hinten rechts." }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Test",
    title: "Test zu Einheit 6",
    objectives: ["verschmolzene Präpositionen, andare/venire, Wegbeschreibungen und c'è/ci sono prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "a + Artikel:", items: [, , , ] },
      { q: "„Il libro è ___ tavolo.\" (su + il)" },
      { q: "„Abito ___ centro.\" (in + il)" },
      {  },
      { q: "„Vado ___ Italia.\"" },
      { q: "„Vado ___ dentista.\"" },
      { q: "Die förmliche Version von „gira a destra\":", opts: ["giri a destra", "gira a destra", "girare a destra"] },
      { q: "„___ tavoli liberi?\" (gibt es freie Tische?)" },
      { tr: "Gehen Sie geradeaus, die Bank ist gegenüber der Kirche." },
      { tr: "Entschuldigung, wo ist die Bushaltestelle?" }
    ]
  },
  "unit:a1-u07": { title: "Bei Tisch", grammarNote: "bestellen · ne · der Aufbau eines italienischen Essens" },
  "lesson:a1-u07-l1": {
    theme: "Restaurant",
    title: "Reservieren und Platz nehmen",
    objectives: [
      "einen Tisch reservieren und ein Restaurant betreten",
      "die Fragen der Bedienung verstehen",
      "nach der Karte und einem Tisch draußen fragen"
    ],
    theory: [
      {
        h: "Die Reihenfolge des Essens liegt fest",
        p: "Ein italienisches Restaurant folgt einer festen Abfolge: <em>antipasto</em> (Vorspeise), <em>primo</em> (Pasta, Reis oder Suppe), <em>secondo</em> (Fleisch oder Fisch), <em>contorno</em> (Beilage, wird extra bestellt!), <em>dolce</em>, <em>caffè</em>. Niemand erwartet, dass du alles nimmst — aber gefragt wird in dieser Reihenfolge."
      },
      {
        h: "Der contorno ist ein eigener Posten",
        p: "Gemüse und Kartoffeln gehören <b>nicht</b> zum Hauptgericht, sie sind eine eigene Bestellung. Der <em>secondo</em> kommt allein auf dem Teller. Für Gäste aus dem deutschsprachigen Raum, wo die Beilage selbstverständlich dazugehört, ist das die häufigste Überraschung."
      },
      {
        h: "Coperto und servizio",
        p: "<em>Il coperto</em> (2-4 €) ist eine Pauschale für Gedeck, Brot und Bedienung — sie ist legal und steht auf der Karte. Trinkgeld wird nicht wie in den USA erwartet: man rundet auf oder lässt ein paar Euro liegen, wenn der Service gut war."
      },
      {
        tip: "Die Rechnung musst du verlangen: <em>il conto, per favore</em>. Die Bedienung bringt sie nicht von selbst, das käme einem Hinauskomplimentieren gleich."
      }
    ],
    grammar: {
      title: "Sätze bei Tisch",
      table: {
        head: ["Situation", "auf Italienisch", "auf Deutsch"],
        rows: [
          ["reservieren", "Vorrei prenotare un tavolo per due.", "Ich würde gern einen Tisch für zwei reservieren."],
          ["ohne Reservierung", "C'è un tavolo libero?", "Ist ein Tisch frei?"],
          ["draußen", "Possiamo sederci fuori?", "Können wir draußen sitzen?"],
          ["Karte", "Il menù, per favore.", "Die Karte, bitte."],
          ["bestellen", "Per me una carbonara.", "Für mich eine Carbonara."],
          ["Rechnung", "Il conto, per favore.", "Die Rechnung, bitte."]
        ]
      },
      examples: [
        { tr: "Guten Abend, haben Sie reserviert?" },
        { tr: "Nein, wir sind zu zweit. Haben Sie Platz?" },
        { tr: "Drinnen oder draußen?" },
        { tr: "Was empfehlen Sie?" },
        { tr: "Ich bin gegen Nüsse allergisch." },
        { tr: "Es war alles ausgezeichnet, Kompliment." }
      ]
    },
    vocab: [
      "reservieren",
      "Tisch",
      "Speisekarte",
      "Vorspeise",
      "erster Gang",
      "Hauptgang",
      "Beilage (extra bestellt!)",
      "Nachtisch",
      "die Rechnung",
      "Gedeckpauschale",
      "wir sind zu zweit",
      "was empfehlen Sie?"
    ],
    dialogue: [
      "Guten Abend, haben Sie reserviert?",
      "Nein, wir sind zu zweit. Ist ein Tisch frei?",
      "Drinnen oder draußen?",
      "Draußen, wenn möglich. Danke.",
      "Natürlich, nehmen Sie Platz. Hier ist die Karte."
    ],
    exercises: [
      {
        q: "Was ist „il contorno\"?",
        opts: ["Ein Nachtisch", "Eine Gemüsebeilage, extra bestellt", "Die Gedeckpauschale"]
      },
      { q: "Was bedeutet „il coperto\"?", opts: ["Ein Fleischgericht", "Eine Pauschale für Gedeck und Brot", "Ein Trinkgeld"] },
      { q: "Ergänze: „Vorrei ___ un tavolo per due.\"" },
      { q: "„Die Rechnung, bitte.\"" },
      {
        q: "Bring das Essen in die richtige Reihenfolge — ordne den Namen der Beschreibung zu.",
        pairs: ["Vorspeise", "Pasta oder Suppe", "Fleisch oder Fisch", "Nachtisch"]
      },
      { tr: "Nein, wir sind zu zweit. Ist ein Tisch frei?" },
      {
        q: "Du betrittst ein Restaurant ohne Reservierung.",
        setting: "Freitag, halb neun abends, eine kleine Trattoria.",
        lines: [
          { tr: "Guten Abend! Haben Sie reserviert?" },
          {
            tr: "Sag nein und frag nach einem freien Tisch für zwei.",
            answerTr: "Nein, haben Sie einen Tisch für zwei?"
          },
          { tr: "Ja, aber nur drinnen. Ist das in Ordnung?" },
          { tr: "Stimm zu und bitte um die Karte.", answerTr: "Das ist in Ordnung, die Karte bitte." }
        ]
      },
      { tr: "Ich würde gern einen Tisch für vier um acht reservieren." },
      { tr: "Guten Abend, wir sind zu zweit. Gibt es draußen Platz?" }
    ]
  },
  "lesson:a1-u07-l2": {
    theme: "Restaurant",
    title: "Ein Gericht bestellen",
    objectives: ["ein bestimmtes Gericht und ein Getränk bestellen", "fragen, was in einem Gericht ist", "eine Allergie oder Ernährungsweise angeben"],
    theory: [
      {
        h: "Drei Arten zu bestellen",
        p: "<em>Per me una carbonara</em> (für mich…), <em>Prendo una carbonara</em> (ich nehme…), <em>Vorrei una carbonara</em> (ich hätte gern…). Alle drei sind normal; <em>vorrei</em> ist am höflichsten, <em>prendo</em> am natürlichsten."
      },
      {
        h: "Fragen, was drin ist",
        p: "<em>Cosa c'è dentro?</em>, <em>Contiene glutine?</em>, <em>È piccante?</em>, <em>È senza lattosio?</em> Restaurants sind gesetzlich verpflichtet, Allergene anzugeben, die Frage überrascht also niemanden."
      },
      {
        h: "Wasser: die unvermeidliche Frage",
        p: "<em>Naturale o frizzante?</em> — still oder mit Kohlensäure. Leitungswasser (<em>acqua del rubinetto</em>) gibt es manchmal, viele Lokale servieren es aber schlicht nicht."
      },
      {
        tip: "Der Kaffee kommt <b>nach</b> dem Nachtisch, nie während des Essens und nie als Cappuccino. <em>Un caffè</em> nach dem Mittagessen gehört zum Ritual."
      }
    ],
    grammar: {
      title: "Bestellen und nach einem Gericht fragen",
      table: {
        head: ["Funktion", "Satz", "auf Deutsch"],
        rows: [
          ["bestellen", "Per me / Prendo / Vorrei…", "Für mich / Ich nehme / Ich hätte gern…"],
          ["Getränk", "Da bere, una bottiglia d'acqua.", "Zu trinken eine Flasche Wasser."],
          ["was drin ist", "Cosa c'è dentro?", "Was ist da drin?"],
          ["Allergie", "Sono allergico/a a…", "Ich bin allergisch gegen…"],
          ["Ernährung", "Sono vegetariano/a.", "Ich bin Vegetarier(in)."],
          ["ohne", "Senza cipolla, per favore.", "Ohne Zwiebel, bitte."]
        ]
      },
      examples: [
        { tr: "Für mich eine Carbonara und einen gemischten Salat." },
        { tr: "Zu trinken? — Stilles Wasser, danke." },
        { tr: "Was ist in der Amatriciana drin?" },
        { tr: "Ich bin gegen Meeresfrüchte allergisch." },
        { tr: "Ist dieses Gericht glutenfrei?" },
        { tr: "Zum Schluss einen Kaffee, danke." }
      ]
    },
    vocab: [
      "Pasta",
      "Fleisch / Fisch",
      "Salat",
      "Gemüse",
      "stilles Wasser / Wasser mit Kohlensäure",
      "Hauswein",
      "glutenfrei",
      "vegetarisch / vegan",
      "ich bin allergisch gegen…",
      "scharf",
      "blutig / durch",
      "zu trinken"
    ],
    culture: {
      title: "Mit italienischen Augen: was man nicht bestellt",
      text: "<p><b>Spaghetti Bolognese</b> gibt es auf keiner italienischen Karte. In Bologna isst man <i>tagliatelle al ragù</i>, und Spaghetti mit dieser Sauce sind eine ausländische Erfindung.</p><p><b>Fettuccine Alfredo</b> ist ein amerikanisches Gericht. <b>Käse zu Fisch</b> gilt als kleines Vergehen, und wer Parmesan zu Meeresfrüchten verlangt, erntet eine höfliche, aber unmissverständliche Reaktion.</p><p><b>Ananas auf der Pizza</b> gibt es in manchen Touristenpizzerien. Das ist eine Entscheidung, die du treffen kannst — aber triff sie bewusst.</p>"
    },
    exercises: [
      {
        q: "Die Bedienung fragt „Naturale o frizzante?\". Worum geht es?",
        opts: ["Um die Pastasorte", "Um das Wasser: still oder mit Kohlensäure", "Um den Gargrad"]
      },
      { q: "Ergänze: „Sono ___ ai frutti di mare.\" (allergisch gegen Meeresfrüchte, eine Frau spricht)" },
      { q: "„Für mich eine Carbonara, bitte.\"" },
      {
        q: "Wann trinken Italiener beim Essen Kaffee?",
        opts: ["Zum Hauptgang", "Nach dem Nachtisch", "Statt Wasser"]
      },
      { q: "Ordne zu.", pairs: ["glutenfrei", "scharf", "durch", "zu trinken"] },
      {
        q: "Ergänze die Bestellung.",
        tr: "Für mich Pasta mit Tomate, ohne Zwiebel. Zu trinken stilles Wasser."
      },
      { tr: "Was ist in diesem Gericht drin?" },
      {
        q: "Die Bedienung nimmt die Bestellung auf.",
        setting: "Eine Trattoria, ein Tisch am Fenster.",
        lines: [
          { tr: "Also, was nehmen Sie?" },
          { tr: "Bestell die cacio e pepe.", answerTr: "Für mich cacio e pepe." },
          { tr: "Sehr gern. Und zu trinken?" },
          { tr: "Bitte um eine Flasche stilles Wasser.", answerTr: "Eine Flasche stilles Wasser." },
          { tr: "Perfekt. Eine Beilage?" },
          { tr: "Lehn höflich ab.", answerTr: "Nein danke, so ist es gut." }
        ]
      },
      { tr: "Ich bin Vegetarierin, ist in diesem Gericht Fleisch?" },
      { tr: "Ich nehme die cacio e pepe. Zu trinken Wasser mit Kohlensäure." }
    ]
  },
  "lesson:a1-u07-l3": {
    theme: "Grundgrammatik",
    title: "Die Partikel ne — erste Begegnung",
    objectives: [
      "ein wiederholtes Nomen durch ne ersetzen",
      "auf eine Mengenfrage antworten",
      "ne in alltäglichen Wendungen erkennen"
    ],
    theory: [
      {
        h: "Ne steht für einen Teil eines Ganzen",
        p: "Wenn es darum geht, <b>wie viel</b> von etwas schon Erwähntem, wirkt die Wiederholung des Nomens schwerfällig. <em>Quante mele vuoi? — <b>Ne</b> voglio tre.</em> Hier heißt <em>ne</em> „davon\"."
      },
      {
        contrast: "Das kennst du als da-Form: „ich will drei <b>davon</b>\", „wir reden morgen <b>darüber</b>\". Der Unterschied ist die Pflicht — im Deutschen kannst du „ich will drei\" sagen, im Italienischen ist <em>voglio tre</em> ohne <em>ne</em> unvollständig."
      },
      {
        h: "Wo es steht",
        p: "Vor dem konjugierten Verb, genau wie die Pronomen: <em>ne prendo due</em>, <em>non ne voglio</em>. Beim Infinitiv hängt es sich hinten an: <em>vorrei prender<b>ne</b> due</em>."
      },
      {
        h: "Ne ersetzt auch „di + etwas\"",
        p: "<em>Parliamo del progetto? — Sì, <b>ne</b> parliamo domani.</em> („Wir reden morgen darüber.\") Ausgebaut wird das in B1; vorerst genügt es, es zu erkennen."
      },
      {
        tip: "Sehr häufige Wendungen mit <em>ne</em>: <em>Non ne so nulla</em> (ich weiß nichts davon), <em>Che ne pensi?</em> (was hältst du davon?), <em>Me ne vado</em> (ich gehe)."
      }
    ],
    grammar: {
      title: "Ne in Mengenangaben",
      table: {
        head: ["Frage", "Antwort mit ne", "auf Deutsch"],
        rows: [
          ["Quante mele vuoi?", "Ne voglio tre.", "Ich will drei davon."],
          ["Prendi il vino?", "Ne prendo un bicchiere.", "Ich nehme ein Glas davon."],
          ["Hai fratelli?", "Sì, ne ho due.", "Ja, ich habe zwei."],
          ["Vuoi ancora pasta?", "No, grazie, non ne voglio più.", "Nein danke, ich will nichts mehr davon."],
          ["Che ne pensi?", "—", "Was hältst du davon?"]
        ]
      },
      examples: [
        { tr: "Wie viele Kaffee trinkst du am Tag? — Ich trinke drei." },
        { tr: "Willst du Brot? — Ja, ich nehme ein bisschen." },
        { tr: "Hast du Kinder? — Ich habe eine Tochter." },
        { tr: "Ich weiß nichts davon." },
        { tr: "Ich würde gern zwei davon nehmen.", note: "beim Infinitiv hängt ne sich an" }
      ]
    },
    vocab: [
      "davon, darüber (Partikel)",
      "wie viele (m / f)",
      "noch",
      "noch eines",
      "ein Stück",
      "eine Scheibe",
      "ein Glas",
      "eine Portion",
      "so ist es gut",
      "was hältst du davon?",
      "ich weiß nichts davon",
      "ich gehe"
    ],
    exercises: [
      {
        q: "„Quante birre prendi? — Ne prendo due.\" Wofür steht „ne\"?",
        opts: ["Für dich", "Für „birre\" — die besprochene Sache", "Für nichts, es ist Schmuck"]
      },
      { q: "Antworte: „Hai fratelli? — Sì, ___ ho due.\"" },
      { q: "Ergänze: „Vuoi del pane? — Sì, ___ prendo un po'.\"" },
      {
        q: "Wo steht „ne\" beim Infinitiv?",
        opts: ["Davor: „ne prendere\"", "Hinten angehängt: „prenderne\"", "Am Satzende"]
      },
      { q: "„Wie viele Kaffee trinkst du am Tag? — Ich trinke drei.\"" },
      {
        q: "Ordne der Wendung ihre Bedeutung zu.",
        pairs: ["was hältst du davon?", "ich weiß nichts davon", "ich gehe", "ich nehme zwei"]
      },
      {
        q: "Ergänze das Gespräch.",
        tr: "— Willst du noch Wein? — Nein danke, ich will nichts mehr. — Und du? — Ja, ich nehme noch ein Glas."
      },
      { tr: "Ich würde gern zwei davon nehmen." },
      { tr: "Wie viele Stücke Kuchen willst du? — Ich will eins, danke." },
      { tr: "Hast du Geschwister? — Ja, ich habe zwei Brüder." }
    ]
  },
  "lesson:a1-u07-l4": {
    theme: "Restaurant",
    title: "Bezahlen und gehen",
    objectives: [
      "die Rechnung verlangen und bezahlen",
      "die Rechnung unter mehreren aufteilen",
      "sagen, wie dir das Essen gefallen hat"
    ],
    theory: [
      {
        h: "Die Rechnung musst du verlangen",
        p: "Die Bedienung bringt sie nicht ungefragt — in der italienischen Restaurantkultur hieße das, den Gast zu drängen. Die Standardformel ist <em>Il conto, per favore</em> oder <em>Possiamo avere il conto?</em> Die Geste des Unterschreibens in der Luft funktioniert auch."
      },
      {
        h: "Die Rechnung teilen",
        p: "<strong>Alla romana</strong> heißt „gleichmäßig teilen, alle zahlen dasselbe\" — dein „wir teilen\". Wenn du getrennte Rechnungen willst: <em>Conti separati, per favore</em>. Das ist möglich, in kleinen Lokalen aber oft umständlich, und getrennt zu zahlen wirkt weniger selbstverständlich als im deutschsprachigen Raum."
      },
      {
        h: "Sagen, wie es war",
        p: "<em>Era tutto buonissimo</em>, <em>Complimenti al cuoco</em>, <em>Squisito</em>. Italiener loben das Essen direkt und erwarten dasselbe zurück — nach einem guten Essen nichts zu sagen wirkt kühl."
      },
      {
        tip: "<em>Offro io</em> („ich lade ein\") ist ein Satz, um den es sich zu streiten lohnt. Das Ablehnen des Gastes gehört zum Ritual, aber wer eingeladen hat, gewinnt meistens."
      }
    ],
    grammar: {
      title: "Die Rechnung und der Abschied",
      table: {
        head: ["Situation", "auf Italienisch", "auf Deutsch"],
        rows: [
          ["verlangen", "Il conto, per favore.", "Die Rechnung, bitte."],
          ["gleichmäßig teilen", "Paghiamo alla romana.", "Wir teilen."],
          ["getrennt", "Conti separati, per favore.", "Getrennte Rechnungen, bitte."],
          ["ich lade ein", "Offro io.", "Ich lade ein."],
          ["Karte", "Si può pagare con la carta?", "Kann man mit Karte zahlen?"],
          ["Lob", "Era tutto buonissimo!", "Es war alles ausgezeichnet!"]
        ]
      },
      examples: [
        { tr: "Können wir die Rechnung haben?" },
        { tr: "Das Gedeck kostet zwei Euro pro Person." },
        { tr: "Leider funktioniert das Kartengerät nicht." },
        { tr: "Stimmt so." },
        { tr: "Kompliment an den Koch, ausgezeichnet!" },
        { tr: "Einen schönen Abend noch!" }
      ]
    },
    vocab: [
      "die Rechnung",
      "gleichmäßig geteilt",
      "getrennte Rechnungen",
      "ich lade ein",
      "Trinkgeld",
      "Kartengerät",
      "Wechselgeld",
      "ausgezeichnet",
      "Kompliment",
      "es war alles ausgezeichnet",
      "einen schönen Abend",
      "wir kommen wieder"
    ],
    exercises: [
      {
        q: "Was heißt „pagare alla romana\"?",
        opts: ["Bar zahlen", "Die Rechnung gleichmäßig teilen", "Für alle zahlen"]
      },
      {
        q: "Warum bringt die Bedienung die Rechnung nicht ungefragt?",
        opts: ["Sie vergisst es", "Weil es den Gast drängen würde", "Weil es verboten ist"]
      },
      { q: "„Können wir die Rechnung haben?\"" },
      { q: "Ergänze: „___ io!\" (ich lade ein)" },
      { q: "Ordne zu.", pairs: ["Trinkgeld", "Wechselgeld", "ausgezeichnet", "getrennte Rechnungen"] },
      {
        q: "Ergänze das Ende des Abendessens.",
        tr: "— Es war alles ausgezeichnet, Kompliment! — Danke! — Die Rechnung, bitte. Kann man mit Karte zahlen?"
      },
      { tr: "Wir teilen, danke." },
      {
        q: "Ende des Abendessens.",
        setting: "Die Teller sind abgeräumt, die Bedienung geht vorbei.",
        lines: [
          { tr: "Bitte um die Rechnung.", answerTr: "Die Rechnung, bitte." },
          { tr: "Sofort. War heute Abend alles in Ordnung?" },
          { tr: "Lob das Essen.", answerTr: "Es war alles ausgezeichnet, Kompliment!" },
          { tr: "Vielen Dank! Das macht sechsundvierzig Euro." },
          { tr: "Frag, ob man mit Karte zahlen kann.", answerTr: "Kann man mit Karte zahlen?" }
        ]
      },
      { tr: "Die Rechnung macht sechsundvierzig Euro, Gedeck inklusive." },
      { tr: "Es war alles ausgezeichnet, Kompliment an den Koch!" }
    ]
  },
  "lesson:a1-u07-test": {
    theme: "Test",
    title: "Test zu Einheit 7",
    objectives: ["Restaurantwortschatz, das Bestellen und die Partikel ne prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Il contorno\" ist:", opts: ["der Nachtisch", "eine Gemüsebeilage", "die Gedeckpauschale"] },
      { q: "„Il coperto\" ist:", opts: ["ein Fleischgericht", "die Gedeckpauschale", "ein Trinkgeld"] },
      { q: "„Vorrei ___ un tavolo per due.\"" },
      { q: "„Hai fratelli? — Sì, ___ ho due.\"" },
      { q: "„Sono ___ ai frutti di mare.\" (eine Frau spricht)" },
      { q: "„Die Rechnung, bitte.\"" },
      { q: "Ordne zu.", pairs: ["gleichmäßig geteilt", "ich lade ein", "ausgezeichnet", "zu trinken"] },
      { tr: "Für mich eine Carbonara, ohne Zwiebel." },
      { tr: "Zu trinken nehmen wir eine Flasche stilles Wasser." },
      { tr: "Können wir die Rechnung haben?" }
    ]
  }
});
