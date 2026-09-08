/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/c2-01.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:c2-u01": {
    title: "Partizipien und Verbalperiphrasen",
    grammarNote: "Partizip Präsens und Perfekt · perifrasi verbali · implizite Formen"
  },
  "lesson:c2-u01-l1": {
    theme: "Grammatik der obersten Stufe",
    title: "Das Partizip Präsens: drei Leben",
    objectives: [
      "den adjektivischen, den nominalen und den verbalen Gebrauch unterscheiden",
      "das participio presente in Rechtstexten erkennen",
      "es im Gespräch nicht überstrapazieren"
    ],
    theory: [
      {
        h: "Als Verb fast tot, als Wortschatz sehr lebendig",
        p: "Das Partizip Präsens auf <em>-ante / -ente</em> hat im modernen Italienisch seine verbale Funktion verloren, aber Hunderte von Adjektiven und Nomen hinterlassen: <em>brillante, interessante, insegnante, cantante, dirigente, presidente, studente</em>. Alle sind alte Partizipien."
      },
      {
        contrast: "Dein Partizip I ist lebendiger, und vor allem steht es anders: Deutsch baut das erweiterte Attribut <b>vor</b> das Nomen („die aus dem Ausland kommenden Passagiere\"), Italienisch hängt es <b>hinter</b> das Nomen (<em>i passeggeri provenienti dall'estero</em>). Der Rest ist vertraut: substantivierte Partizipien wie der Studierende, der Vorsitzende, der Reisende sind genau <em>lo studente</em> und <em>il dirigente</em>, und <em>gli aventi diritto</em> sind deine Anspruchsberechtigten."
      },
      {
        h: "Der verbale Gebrauch: Recht und Verwaltung",
        p: "<em>Il denaro <b>derivante</b> dalle offerte sarà investito.</em> Hier ersetzt <em>derivante</em> einen Relativsatz, <em>che deriva</em>. Die Konstruktion überlebt in juristischen, technischen und wissenschaftlichen Texten; anderswo klingt sie gekünstelt."
      },
      {
        h: "Wie man es liest",
        p: "Wenn dir in einem Rechtstext ein <em>-ante/-ente</em> begegnet, wandle es sofort in einen Relativsatz um: <em>i soggetti <b>richiedenti</b></em> = <em>i soggetti che richiedono</em>. Das ist der schnellste Weg, einen langen Amtssatz zu zerlegen."
      },
      {
        trap: "Nicht jedes Wort auf <em>-ente</em> ist ein Partizip. <em>Paziente</em>, <em>presente</em>, <em>parente</em> sind heute eigenständige Nomen oder Adjektive und lassen sich nicht in einen Relativsatz auflösen. Achte außerdem auf <em>parente</em>: das heißt Verwandter, nicht Elternteil."
      }
    ],
    grammar: {
      title: "Participio presente",
      table: {
        head: ["Form", "Gebrauch", "Beispiel"],
        rows: [
          ["brillante", "Adjektiv", "una carriera brillante"],
          ["insegnante", "Nomen", "un'insegnante di liceo"],
          ["derivante", "verbal", "il denaro derivante dalle offerte"],
          ["richiedente", "Nomen + verbal", "i soggetti richiedenti"],
          ["seguente", "Adjektiv", "il giorno seguente"],
          ["proveniente", "verbal", "merci provenienti dall'estero"]
        ]
      },
      examples: [
        { tr: "Die Unterlagen, die die Voraussetzung belegen, sind beizufügen." },
        { tr: "Die sich aus der Bilanz ergebenden Beträge wurden geprüft." },
        { tr: "Eine überzeugende Rede, aber ohne Zahlen." },
        { tr: "Aus dem Ausland kommende Reisende müssen das Formular ausfüllen." },
        { tr: "Es war von Anfang an eine verlierende Entscheidung." },
        { tr: "Die Anspruchsberechtigten erhalten eine Mitteilung.", note: "„aventi diritto\" ist eine feste Rechtsformel" }
      ]
    },
    vocab: [
      "belegend, nachweisend",
      "sich ergebend",
      "kommend aus",
      "Antragsteller",
      "Anspruchsberechtigter",
      "überzeugend",
      "folgend",
      "vorhergehend",
      "geltend, in Kraft",
      "Voraussetzung",
      "Bilanz, Haushalt",
      "ohne, entbehrend"
    ],
    exercises: [
      {
        q: "„Il denaro derivante dalle offerte\" lässt sich ersetzen durch:",
        opts: ["il denaro che deriva dalle offerte", "il denaro derivato", "il denaro per derivare"]
      },
      { q: "„Gli aventi diritto\" sind:", opts: ["diejenigen, die recht haben", "die Anspruchsberechtigten", "die Eigentümer"] },
      {
        q: "Mach einen Relativsatz daraus: „i passeggeri provenienti dall'estero\" → „i passeggeri ___ provengono dall'estero\""
      },
      { q: "Ordne zu.", pairs: ["belegend", "sich ergebend", "geltend", "ohne"] },
      {
        q: "In welchem Register ist das participio presente noch verbal?",
        opts: ["in der Umgangssprache", "in juristischen und technischen Texten", "in der Dichtung"]
      },
      {
        q: "Welche kommen von einem Partizip Präsens?",
        opts: ["insegnante", "tavolo", "cantante", "dirigente"]
      },
      {
        q: "Ergänze den Amtstext.",
        tr: "Die Antragsteller fügen dem Gesuch die Unterlagen bei, die die Voraussetzung belegen."
      },
      { q: "„Die sich aus der Bilanz ergebenden Beträge wurden geprüft.\"" },
      { tr: "Die Anspruchsberechtigten erhalten binnen dreißig Tagen eine Mitteilung." },
      { tr: "Eine überzeugende Rede, aber ohne konkrete Zahlen." }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Grammatik der obersten Stufe",
    title: "Das Partizip Perfekt in verkürzten Nebensätzen",
    objectives: [
      "eine absolute Partizipialkonstruktion bauen",
      "die Angleichung des Partizips richtig halten",
      "geschriebenen Text verdichten"
    ],
    theory: [
      {
        h: "Die absolute Konstruktion",
        p: "<em><b>Finita la riunione</b>, siamo usciti.</em> Ein Partizip Perfekt mit eigenem Nomen bildet einen verkürzten Nebensatz mit temporalem oder kausalem Wert. Das Nomen steht <b>hinter</b> dem Partizip, und das Partizip gleicht sich ihm in Genus und Numerus an."
      },
      {
        contrast: "Diese Konstruktion hat im Deutschen keinen Alltagsplatz: „die Sitzung beendet, gingen wir\" ist literarisch und selten. Du greifst stattdessen zu einer Nominalisierung („nach Ende der Sitzung\") oder zu einem vollen Nebensatz. Für <em>vista la situazione</em> hast du immerhin eine genaue Entsprechung, „angesichts der Lage\" — nur mit Präposition plus Nomen statt mit einem angeglichenen Partizip."
      },
      {
        h: "Mit transitiven und intransitiven Verben",
        p: "Transitiv: <em>Letto il contratto, ho firmato.</em> Intransitiv mit <em>essere</em>: <em>Partito il treno, siamo tornati a casa.</em> Die Angleichung ist in beiden Fällen Pflicht."
      },
      {
        h: "Verstärkungen",
        p: "<em>Una volta finita la riunione…</em>, <em>Appena arrivati…</em>, <em>Terminati i lavori…</em>. <em>Una volta</em> oder <em>appena</em> hinzuzufügen legt das Zeitverhältnis fest und klingt natürlicher, wie dein „sobald die Sitzung beendet war\"."
      },
      {
        trap: "Die absolute Konstruktion verlangt, dass ihr Subjekt <b>verschieden</b> vom Subjekt des Hauptsatzes ist oder dessen Objekt. <em>Finito il lavoro, sono uscito</em> geht, weil <em>il lavoro</em> nicht das Subjekt des Hauptsatzes ist."
      }
    ],
    grammar: {
      title: "Participio assoluto",
      table: {
        head: ["Konstruktion", "volle Entsprechung", "Wert"],
        rows: [
          ["Finita la riunione…", "Quando la riunione finì…", "temporal"],
          ["Letto il contratto…", "Dopo aver letto il contratto…", "temporal"],
          ["Partito il treno…", "Dopo che il treno fu partito…", "temporal"],
          ["Vista la situazione…", "Poiché la situazione è tale…", "kausal"],
          ["Una volta ottenuto il visto…", "Quando avrà ottenuto il visto…", "konditional-temporal"],
          ["Fatte le dovute verifiche…", "Dopo aver fatto le verifiche…", "amtlich"]
        ]
      },
      examples: [
        { tr: "Angesichts der Dringlichkeit machen wir weiter, ohne zu warten." },
        { tr: "Nach Abschluss der Arbeiten wurde die Straße wieder geöffnet." },
        { tr: "Sobald er die Bestätigung erhalten hat, kann er abreisen." },
        { tr: "Nach den erforderlichen Prüfungen wurde dem Antrag stattgegeben." },
        { tr: "Dort angekommen, bemerkten wir den Fehler." },
        { tr: "Ohne die Fixkosten ist die Bilanz positiv." }
      ]
    },
    vocab: [
      "angesichts der Dringlichkeit",
      "beenden, abschließen",
      "wieder öffnen",
      "einem Antrag stattgeben",
      "die erforderlichen Prüfungen",
      "ausschließen",
      "Ziel, Bestimmungsort",
      "bemerken, merken",
      "sobald + Partizip",
      "kaum + Partizip",
      "Voraussetzung, Prämisse",
      "vorab"
    ],
    exercises: [
      { q: "Triff die Angleichung: „Terminat___ i lavori, la strada è stata riaperta.\"" },
      { q: "Triff die Angleichung: „Finit___ la riunione, siamo usciti.\"" },
      { q: "„Vista la situazione\" hat:", opts: ["temporalen Wert", "kausalen Wert", "konditionalen Wert"] },
      {
        q: "Wo steht das Nomen in einer absoluten Konstruktion?",
        opts: ["vor dem Partizip", "hinter dem Partizip", "am Satzende"]
      },
      {
        q: "Bau die absoluten Konstruktionen.",
        tr: "Nach der Lektüre des Vertrags unterschrieb ich. Ohne die Fixkosten ist die Bilanz positiv."
      },
      { q: "„Sobald er die Bestätigung erhalten hat, kann er abreisen.\"" },
      { tr: "Dort angekommen, bemerkten wir den Fehler." },
      {
        q: "Warum „una volta\" vor das Partizip setzen?",
        opts: ["wegen des Rhythmus", "um das Zeitverhältnis festzulegen", "weil die Grammatik es verlangt"]
      },
      { tr: "Nach den erforderlichen Prüfungen wurde dem Antrag stattgegeben." },
      { tr: "Angesichts der Dringlichkeit machen wir weiter, ohne weitere Bestätigungen abzuwarten." }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Grammatik der obersten Stufe",
    title: "Die Verbalperiphrasen",
    objectives: [
      "die aspektuellen, modalen und gerundialen Periphrasen erkennen",
      "die Phase einer Handlung genau angeben",
      "va + Partizip und ho da + Infinitiv verwenden"
    ],
    theory: [
      {
        h: "Eine Periphrase fügt einen Aspekt hinzu, den die Zeit nicht trägt",
        p: "Das Italienische hat keine eigenen Formen für „ich bin im Begriff anzufangen\", „ich bin gerade am Beenden\", „es nimmt allmählich zu\". Die Periphrasen erledigen das: <em>sto per partire</em>, <em>sto finendo</em>, <em>va crescendo</em>."
      },
      {
        h: "Aspektuell",
        list: [
          "<em>stare per + Infinitiv</em> — im Begriff sein zu",
          "<em>essere sul punto di</em> — kurz davor sein",
          "<em>accingersi a</em> — sich anschicken zu (gehobenes Register)",
          "<em>cominciare / iniziare a</em>, <em>continuare / seguitare a</em>, <em>smettere / finire di</em>",
          "<em>stare + Gerundium</em> — im Gang"
        ]
      },
      {
        contrast: "Zwei der drei Gruppen findest du wieder: „im Begriff sein zu\", „sich anschicken zu\", „anfangen zu\" decken die aspektuellen ab, und <em>ho da fare</em> ist wörtlich dein „ich habe zu tun\", dieselbe Konstruktion aus haben plus zu plus Infinitiv. Die gerundiale fehlt dagegen: für <em>il fenomeno va crescendo</em> hast du kein Verb der Bewegung, sondern greifst zu „nimmt stetig zu\" oder „wächst zusehends\"."
      },
      {
        h: "Modal",
        p: "<em>Il compito <b>va</b> rivisto</em> (die Aufgabe ist zu überarbeiten), <em><b>Ho da</b> studiare</em> (ich habe zu lernen), <em><b>C'è da</b> aspettare</em> (es ist zu warten), <em><b>Sarebbe da</b> rifare</em> (das wäre neu zu machen)."
      },
      {
        h: "Die gerundiale im Schriftlichen",
        p: "<em>Il fenomeno <b>va crescendo</b></em> ist <em>andare</em> + Gerundium, typisch für das Schriftregister. Nicht zu verwechseln mit <em>va rivisto</em>, wo <em>andare</em> die Verpflichtung trägt: zwei verschiedene Periphrasen mit demselben Verb."
      }
    ],
    grammar: {
      title: "Ein Katalog der Periphrasen",
      table: {
        head: ["Typ", "Konstruktion", "Bedeutung"],
        rows: [
          ["aspektuell", "sto per partire", "ich bin im Begriff zu gehen"],
          ["aspektuell", "sono sul punto di rinunciare", "ich bin kurz davor aufzugeben"],
          ["aspektuell", "mi accingo a rispondere", "ich schicke mich an zu antworten"],
          ["progressiv", "sto scrivendo", "ich schreibe gerade"],
          ["progressiv", "il fenomeno va crescendo", "das Phänomen nimmt stetig zu"],
          ["modal", "il testo va rivisto", "der Text ist zu überarbeiten"],
          ["modal", "ho da fare", "ich habe zu tun"],
          ["modal", "c'è da aspettare", "es ist zu warten"]
        ]
      },
      examples: [
        { tr: "Ich bin gerade im Begriff zu gehen, ich rufe zurück." },
        { tr: "Ich war kurz davor aufzugeben, als die Antwort kam." },
        { tr: "Die Zahl der Anträge nimmt von Monat zu Monat zu." },
        { tr: "Dieses Kapitel ist ganz neu zu schreiben." },
        { tr: "Vor der Frist ist noch viel zu tun." },
        { tr: "Ich schicke mich nun an, die Ergebnisse vorzustellen." }
      ]
    },
    vocab: [
      "im Begriff sein zu",
      "kurz davor sein",
      "sich anschicken zu",
      "fortfahren (literarisch)",
      "allmählich geschehen",
      "zu erledigen sein",
      "zu tun haben",
      "es ist zu tun",
      "aufgeben, verzichten",
      "darlegen, vorstellen",
      "vollständig",
      "von Monat zu Monat"
    ],
    exercises: [
      {
        q: "„Il testo va rivisto\" bedeutet:",
        opts: ["der Text geht überarbeitet", "der Text ist zu überarbeiten", "der Text wird gerade überarbeitet"]
      },
      {
        q: "„Il fenomeno va crescendo\" bedeutet:",
        opts: ["das Phänomen ist zu vergrößern", "das Phänomen nimmt stetig zu", "das Phänomen wird wachsen"]
      },
      { q: "Ergänze: „___ per uscire, ti richiamo dopo.\" (ich bin im Begriff zu gehen)" },
      { q: "Ergänze: „C'è ancora molto ___ fare.\" (zu tun)" },
      { q: "Ordne zu.", pairs: ["sich anschicken zu", "kurz davor sein", "zu tun haben", "fortfahren"] },
      {
        q: "Worin unterscheiden sich „va rivisto\" und „va crescendo\"?",
        opts: ["In nichts", "Das erste trägt eine Verpflichtung, das zweite eine allmähliche Zunahme", "Das erste ist ein Futur"]
      },
      { q: "Ergänze die Periphrasen.", tr: "Ich war kurz davor aufzugeben, aber die Zahl der Anträge nimmt zu." },
      { q: "„Dieses Kapitel ist ganz neu zu schreiben.\"" },
      { tr: "Ich schicke mich nun an, die Ergebnisse der Studie vorzustellen." },
      { tr: "Ich war kurz davor aufzugeben, als die Antwort kam." }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Test",
    title: "Test zu Einheit 1",
    objectives: ["die Partizipien und die Verbalperiphrasen prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Gli aventi diritto\":", opts: ["die recht haben", "die Anspruchsberechtigten", "die Eigentümer"] },
      { q: "„i passeggeri provenienti dall'estero\" → „i passeggeri ___ provengono…\"" },
      { q: "Angleichung: „Terminat___ i lavori…\"" },
      { q: "Angleichung: „Finit___ la riunione…\"" },
      { q: "„Vista la situazione\" hat:", opts: ["temporalen Wert", "kausalen Wert", "konditionalen Wert"] },
      { q: "„Il testo va rivisto\":", opts: ["geht überarbeitet", "ist zu überarbeiten", "wird gerade überarbeitet"] },
      { q: "„Il fenomeno va crescendo\":", opts: ["ist zu vergrößern", "nimmt stetig zu", "wird wachsen"] },
      { q: "„C'è molto ___ fare.\"" },
      { tr: "Nach den erforderlichen Prüfungen ist das Projekt immer noch zu überarbeiten." },
      { tr: "Sobald die Bestätigung eingegangen ist, machen wir ohne Verzug weiter." }
    ]
  },
  "unit:c2-u02": {
    title: "Plurale und Wortbildung",
    grammarNote: "Doppelplurale · Komposita · Alteration · gelehrte Adjektive"
  },
  "lesson:c2-u02-l1": {
    theme: "Fortgeschrittener Wortschatz",
    title: "Der Doppelplural",
    objectives: [
      "die zwei Plurale desselben Nomens unterscheiden",
      "den zur Bedeutung passenden wählen",
      "die üblichen Schnitzer vermeiden"
    ],
    theory: [
      {
        h: "Ein Singular, zwei Plurale",
        p: "Gut ein Dutzend maskuline Nomen haben zwei Plurale: einen regelmäßigen auf <em>-i</em> (maskulin) und einen unregelmäßigen auf <em>-a</em> (feminin). Der Unterschied ist nicht stilistisch, es sind zwei verschiedene Bedeutungen."
      },
      {
        contrast: "Das Phänomen kennst du, und ausgerechnet an deinem bekanntesten Beispiel liegt dieselbe Logik: <b>Wörter</b> sind die einzelnen Vokabeln, <b>Worte</b> die zusammenhängende Rede — Vereinzelung gegen Ganzheit, genau die italienische Aufteilung. Dazu Bände und Bänder, Bänke und Banken, Mütter und Muttern. Was fehlt, ist die Regelmäßigkeit: bei dir eine Handvoll Sonderfälle, im Italienischen ein Muster mit erkennbarer Bedeutungsverteilung."
      },
      {
        h: "Die allgemeine Regel",
        p: "Die feminine Form auf <em>-a</em> bedeutet meist <b>das Ganze, das Kollektive oder den wörtlichen körperlichen Sinn</b>; die maskuline auf <em>-i</em> die <b>einzelnen Stücke oder den übertragenen Sinn</b>."
      },
      {
        h: "Die Paare, auf die es ankommt",
        list: [
          "<em>l'osso</em> → <b>le ossa</b> (das menschliche Skelett) / <b>gli ossi</b> (einzelne Knochen, die man dem Hund gibt)",
          "<em>il braccio</em> → <b>le braccia</b> (die Arme des Körpers) / <b>i bracci</b> (die Arme eines Krans, eines Flusses)",
          "<em>il muro</em> → <b>le mura</b> (die Stadtmauern) / <b>i muri</b> (die Wände eines Zimmers)",
          "<em>il filo</em> → <b>le fila</b> (die Fäden einer Argumentation, die Strippen) / <b>i fili</b> (die Drähte)",
          "<em>il frutto</em> → <b>i frutti</b> (die Früchte im Sinn von Ergebnissen) / <b>la frutta</b> (das Obst)",
          "<em>il dito</em> → <b>le dita</b> (die Finger einer Hand als Ganzes) / <b>i diti</b> (selten, einzelne)",
          "<em>il lenzuolo</em> → <b>le lenzuola</b> (die Bettwäsche als Garnitur) / <b>i lenzuoli</b> (einzelne Laken)"
        ]
      }
    ],
    grammar: {
      title: "Die Doppelplurale",
      table: {
        head: ["Singular", "Form auf -a", "Form auf -i"],
        rows: [
          ["l'osso", "le ossa (das Skelett)", "gli ossi (einzelne Knochen)"],
          ["il braccio", "le braccia (des Körpers)", "i bracci (eines Krans, eines Flusses)"],
          ["il muro", "le mura (die Stadtmauern)", "i muri (die Wände)"],
          ["il filo", "le fila (die Strippen)", "i fili (die Drähte)"],
          ["il frutto", "la frutta (das Obst)", "i frutti (die Ergebnisse)"],
          ["il dito", "le dita (die Finger)", "i diti (selten)"],
          ["il lenzuolo", "le lenzuola (die Bettwäsche)", "i lenzuoli (einzelne Laken)"],
          ["il ciglio", "le ciglia (die Wimpern)", "i cigli (die Straßenränder)"]
        ]
      },
      examples: [
        { tr: "Mir tun die Knochen weh." },
        { tr: "Der Hund nagt an den Knochen." },
        { tr: "Die Stadtmauern sind mittelalterlich." },
        { tr: "Die Wände im Haus sind dünn." },
        { tr: "Er hat die Früchte seiner Arbeit geerntet." },
        { tr: "Zum Mittagessen esse ich immer Obst." }
      ]
    },
    vocab: [
      "Knochen (Skelett) / einzelne Knochen",
      "Arme (des Körpers) / Arme (eines Krans)",
      "Stadtmauern / Wände",
      "Strippen einer Argumentation / Drähte",
      "Obst (Speise) / Früchte (Ergebnisse)",
      "Finger",
      "Wimpern / Straßenränder",
      "Bettwäsche",
      "nagen",
      "mittelalterlich",
      "die Fäden ziehen",
      "die Früchte ernten"
    ],
    exercises: [
      { q: "„Mi fanno male ___.\" (mir tun die Knochen weh)", opts: ["gli ossi", "le ossa", "i ossi"] },
      {
        q: "„___ della città sono medievali.\" (die Stadtmauern)",
        opts: ["I muri", "Le mura", "I muri della"]
      },
      { q: "Ergänze: „Ha raccolto ___ del suo lavoro.\" (die Früchte, Ergebnisse)" },
      { q: "Ergänze: „A pranzo mangio sempre ___.\" (Obst)" },
      { q: "Ordne der Form die Bedeutung zu.", pairs: ["Arme des Körpers", "Arme eines Krans", "Strippen", "Drähte"] },
      {
        q: "„Tirare le fila\" bedeutet:",
        opts: ["an Fäden ziehen", "die Fäden ziehen, das Sagen haben", "entwirren"]
      },
      { q: "Ergänze die Formen.", tr: "Die Stadtmauern sind alt, aber die Wände in meinem Haus sind dünn." },
      { q: "„Der Hund nagt an den Knochen.\"" },
      { tr: "Meine Finger waren steifgefroren und mir taten die Knochen weh." },
      { tr: "Er hat endlich die Früchte seiner Arbeit geerntet." }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Fortgeschrittener Wortschatz",
    title: "Die Komposita und ihre Plurale",
    objectives: [
      "den Plural eines zusammengesetzten Nomens bilden",
      "den Typ des Kompositums erkennen",
      "die häufigsten Schnitzer vermeiden"
    ],
    theory: [
      {
        h: "Vier Muster",
        list: [
          "<b>unverändert</b>: <em>il doposcuola → i doposcuola</em>, <em>il portacenere → i portacenere</em>",
          "<b>das zweite Element ändert sich</b>: <em>il cavolfiore → i cavolfiori</em>, <em>il capolavoro → i capolavori</em>, <em>l'asciugamano → gli asciugamani</em>",
          "<b>das erste ändert sich</b>: <em>il capofamiglia → i capifamiglia</em>, <em>il fico d'India → i fichi d'India</em>",
          "<b>beide ändern sich</b>: <em>la cassaforte → le casseforti</em>, <em>il bassofondo → i bassifondi</em>"
        ]
      },
      {
        contrast: "Dieses Problem hast du gar nicht, und der Grund ist die Zusammenschreibung: das Meisterwerk, der Bahnhofsvorsteher und der Geldschrank sind je ein Wort mit einem einzigen Plural, und die Endung sitzt automatisch am Schluss. Italienisch lässt die Teile getrennt und muss deshalb jedes Mal entscheiden, welches Glied die Markierung trägt. Vier Muster statt einer Regel: hier hilft nur das Wörterbuch."
      },
      {
        h: "Eine praktische Regel für „capo-\"",
        p: "Wenn <em>capo</em> die <b>leitende Person</b> meint, steht dort der Plural: <em>i capistazione, i capireparto, i capifamiglia</em>. Wenn <em>capo</em> <b>das Beste oder den Anfang</b> von etwas meint, ändert sich das zweite Element: <em>i capolavori, i capoluoghi</em>."
      },
      {
        h: "Verb + Nomen",
        p: "Komposita wie <em>portacenere, apriscatole, spazzaneve, salvagente</em> sind in der Regel <b>unveränderlich</b>, weil das erste Element eine Verbform ist. Es gibt Ausnahmen, aber Unveränderlichkeit ist die sichere Wahl."
      }
    ],
    grammar: {
      title: "Plurale der Komposita",
      table: {
        head: ["Typ", "Singular", "Plural"],
        rows: [
          ["Verb + Nomen", "il portacenere", "i portacenere"],
          ["Verb + Nomen", "l'apriscatole", "gli apriscatole"],
          ["capo (Person)", "il capostazione", "i capistazione"],
          ["capo (das Beste)", "il capolavoro", "i capolavori"],
          ["Nomen + Nomen", "il cavolfiore", "i cavolfiori"],
          ["Nomen + Adjektiv", "la cassaforte", "le casseforti"],
          ["Adjektiv + Nomen", "il bassofondo", "i bassifondi"],
          ["mit Präposition", "il fico d'India", "i fichi d'India"]
        ]
      },
      examples: [
        { tr: "Die Bahnhofsvorsteher haben das Protokoll unterschrieben." },
        { tr: "Er hat in zehn Jahren drei Meisterwerke geschrieben." },
        { tr: "Die Geldschränke wurden geleert." },
        { tr: "Kauf mir bitte zwei Dosenöffner." },
        { tr: "Es gibt zwanzig Provinzhauptstädte." },
        { tr: "Die sauberen Handtücher sind im Schrank." }
      ]
    },
    vocab: [
      "Meisterwerk",
      "Provinzhauptstadt",
      "Bahnhofsvorsteher",
      "Haushaltsvorstand",
      "Geldschrank, Tresor",
      "die Unterwelt, das Milieu",
      "Dosenöffner",
      "Aschenbecher",
      "Schneepflug",
      "Rettungsring",
      "amtliches Protokoll",
      "leeren"
    ],
    exercises: [
      { q: "Plural von „il capolavoro\": ___" },
      { q: "Plural von „il capostazione\": ___" },
      { q: "Plural von „la cassaforte\": ___" },
      { q: "Plural von „il portacenere\": ___" },
      {
        q: "Warum „i capistazione\" und nicht „i capostazioni\"?",
        opts: [
          "Es ist eine Ausnahme ohne Regel",
          "Weil capo hier die leitende Person meint",
          "Weil stazione feminin ist"
        ]
      },
      {
        q: "Welche Komposita sind unveränderlich?",
        opts: ["il portacenere", "il cavolfiore", "l'apriscatole", "lo spazzaneve"]
      },
      {
        q: "Ergänze die Plurale.",
        tr: "Es gibt zwanzig Provinzhauptstädte; die Geldschränke wurden nachts geleert."
      },
      { q: "„Die sauberen Handtücher sind im Schrank.\"" },
      { tr: "Die Abteilungsleiter haben eine Besprechung mit der Leitung verlangt." },
      { tr: "Er hat in weniger als zehn Jahren drei Meisterwerke geschrieben." }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Fortgeschrittener Wortschatz",
    title: "Alterierte Formen und gelehrte Adjektive",
    objectives: [
      "die Alterationssuffixe absichtsvoll verwenden",
      "Adjektive auf anderer Wurzel erkennen",
      "das lexikalische Register treffen"
    ],
    theory: [
      {
        h: "Alterazione: vier Richtungen",
        list: [
          "<b>Verkleinerung</b>: <em>-ino, -etto, -ello</em> — <em>tavolino, casetta, alberello</em>",
          "<b>Vergrößerung</b>: <em>-one</em> — <em>portone, librone</em>",
          "<b>Koseform</b> (<em>vezzeggiativo</em>): <em>-uccio, -otto</em> — <em>caruccio, ragazzotto</em>",
          "<b>Abwertung</b>: <em>-accio, -astro</em> — <em>tempaccio, poetastro</em>"
        ]
      },
      {
        contrast: "Von den vier Richtungen hast du produktiv nur eine: -chen und -lein verkleinern, alles Weitere machst du mit Zusammensetzung. Für <em>tempaccio</em> sagst du Mistwetter, für <em>poetastro</em> Möchtegern-Dichter, für <em>librone</em> Riesenschinken. Dasselbe Prinzip wie bei den Verstärkern in C1: Italienisch hängt eine Silbe an, Deutsch klebt ein Wort davor."
      },
      {
        h: "Vorsicht bei den lexikalischen Fallen",
        p: "Nicht jedes Wort mit einem dieser Suffixe ist eine alterierte Form. <em>Il mattone</em> ist ein Ziegel, kein „großer Morgen\"; <em>il tacchino</em> ist ein Truthahn; <em>il burrone</em> ist eine Schlucht, nicht „viel Butter\". Das sind die <em>falsi alterati</em>."
      },
      {
        h: "Adjektive auf anderer Wurzel",
        p: "Italienisch gehobenen Registers verwendet Adjektive lateinischen oder griechischen Ursprungs ohne formale Verbindung zum Nomen: <em>cavallo → equino / ippico</em>, <em>cuore → cardiaco</em>, <em>acqua → idrico</em>, <em>occhio → oculare</em>, <em>città → urbano</em>, <em>anno → annuale</em>, <em>fratello → fraterno</em>. Genau hier wählt Deutsch wieder die Zusammensetzung: Herzstillstand, Wasserressourcen, Augenarzt, Stadtverkehr. Beide Sprachen bilden also einen Bezug, nur baut die eine ein Adjektiv und die andere ein Wort."
      },
      {
        h: "Adjektive ohne Superlativ",
        p: "Manche Adjektive bilden keinen Superlativ, weil sie schon Intensität ausdrücken (<em>eccezionale, splendido, straordinario, immenso</em>) oder selbst alterierte Formen sind (<em>bellino, grandicello</em>). „Eccezionalissimo\" liest sich als Witz."
      }
    ],
    grammar: {
      title: "Suffixe und gelehrte Adjektive",
      table: {
        head: ["Nomen", "gelehrtes Adjektiv", "Beispiel"],
        rows: [
          ["il cuore", "cardiaco", "arresto cardiaco"],
          ["l'acqua", "idrico", "risorse idriche"],
          ["l'occhio", "oculare", "visita oculistica"],
          ["la città", "urbano", "traffico urbano"],
          ["il cavallo", "equino / ippico", "centro ippico"],
          ["il fratello", "fraterno", "affetto fraterno"],
          ["il vescovo", "episcopale", "sede episcopale"],
          ["l'anno", "annuale", "relazione annuale"]
        ]
      },
      examples: [
        { tr: "Was für ein Mistwetter! Bei diesem Regen geht man nicht raus." },
        { tr: "Wir wohnen in einem Häuschen außerhalb der Stadt." },
        { tr: "Das Hoftor des Gebäudes ist immer abgeschlossen." },
        { tr: "Die Wasserressourcen des Landes gehen zurück." },
        { tr: "Er hatte einen Herzstillstand." },
        { tr: "Der Stadtverkehr ist um zwanzig Prozent gestiegen." }
      ]
    },
    vocab: [
      "eine alterierte Form",
      "Verkleinerungsform",
      "Vergrößerungsform",
      "abwertende Form",
      "falsche Verkleinerung oder Vergrößerung",
      "kardial, Herz-",
      "Wasser-, hydrisch",
      "okular, Augen-",
      "städtisch, urban",
      "brüderlich",
      "Mistwetter",
      "Ziegel (nicht: großer Morgen)"
    ],
    exercises: [
      {
        q: "Ordne dem Nomen sein gelehrtes Adjektiv zu.",
        pairs: ["kardial", "hydrisch", "okular", "urban"]
      },
      { q: "„Il mattone\" ist:", opts: ["ein großer Morgen", "ein Ziegel", "eine Verkleinerung von matto"] },
      { q: "Welches Suffix wertet ab?", opts: ["-ino", "-one", "-accio"] },
      { q: "Bilde die Verkleinerung von „casa\": ___" },
      {
        q: "Warum klingt „eccezionalissimo\" falsch?",
        opts: ["Es ist zu lang", "Weil eccezionale schon Intensität ausdrückt", "Weil es ein Lehnwort ist"]
      },
      {
        q: "Welche sind falsi alterati (weder Verkleinerung noch Vergrößerung)?",
        opts: ["il tacchino", "il tavolino", "il burrone", "il mattone"]
      },
      { q: "Ergänze die gelehrten Adjektive.", tr: "Die Wasserressourcen gehen zurück und der Stadtverkehr nimmt zu." },
      { q: "„Was für ein Mistwetter!\"" },
      { tr: "Die Wasserressourcen des Landes gehen seit Jahren zurück." },
      { tr: "Wir wohnen in einem Häuschen direkt außerhalb der Stadt." }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Test",
    title: "Test zu Einheit 2",
    objectives: ["die Doppelplurale, die Komposita und die Wortbildung prüfen"],
    theory: [{ p: "Zehn Aufgaben. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Mi fanno male ___.\"", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "„___ della città sono medievali.\"", opts: ["I muri", "Le mura", "Le muri"] },
      { q: "„A pranzo mangio ___.\" (Obst)" },
      { q: "Plural von „il capolavoro\": ___" },
      { q: "Plural von „il capostazione\": ___" },
      { q: "Plural von „la cassaforte\": ___" },
      { q: "Ordne zu.", pairs: ["kardial", "hydrisch", "urban", "brüderlich"] },
      { q: "„Il burrone\" ist:", opts: ["viel Butter", "eine Schlucht", "eine Vergrößerung von burro"] },
      { tr: "Die Geldschränke der Abteilungsleiter wurden überprüft." },
      { tr: "Die städtischen Wasserressourcen verlangen sofortiges Handeln." }
    ]
  },
  "unit:c2-u03": {
    title: "Nuancen und authentische Texte",
    grammarNote: "Ironie · Jargon · Regionalismen · Latinismen"
  },
  "lesson:c2-u03-l1": {
    theme: "Stil und Kultur",
    title: "Die Ironie im Italienischen",
    objectives: [
      "Ironie im Schriftlichen und im Gespräch erkennen",
      "die Marker der Ironie verwenden",
      "Ironie von Sarkasmus unterscheiden"
    ],
    theory: [
      {
        h: "Die Marker der Ironie",
        list: [
          "<em>ma va'!</em>, <em>figurati!</em>, <em>ci mancherebbe</em> — vorgetäuschte Zustimmung",
          "<em>proprio</em>, <em>davvero</em>, <em>giusto</em> umgedreht: <em>Bravo, giusto quello che serviva.</em>",
          "lexikalische Übertreibung: <em>una tragedia</em> für eine Kleinigkeit",
          "eine Verkleinerungsform im ernsten Zusammenhang: <em>un problemino da due milioni</em>"
        ]
      },
      {
        contrast: "Das Repertoire ist deins, Marker für Marker: die vorgetäuschte Zustimmung von „na klar\", das <em>giusto</em> von „ausgerechnet\", die Litotes von „nicht schlecht\", die Distanzierungs-Anführungszeichen. Sogar die ironische Verkleinerung hast du parat, mit demselben Mittel: <em>un problemino</em> ist ein Problemchen."
      },
      {
        h: "Ironie gegen Sarkasmus",
        p: "Die Ironie lässt dem anderen einen Ausweg, der Sarkasmus nicht. <em>Che bella idea</em> mit einem Lächeln gesagt ist Ironie; derselbe Satz mit Nachdruck und ohne Lächeln ist Sarkasmus. Italiener benutzen beides, aber den Sarkasmus markiert eher die Intonation als der Wortlaut."
      },
      {
        h: "Die Untertreibung im Italienischen",
        p: "<em>Non è male</em> (über etwas Ausgezeichnetes), <em>diciamo che non è andata benissimo</em> (über eine Katastrophe), <em>qualche problemino</em> (über eine schwere Krise). Die Litotes ist im Italienischen sehr produktiv: <em>non poco</em>, <em>non pochi</em>, <em>non senza difficoltà</em>."
      }
    ],
    grammar: {
      title: "Die Mittel der Ironie",
      table: {
        head: ["Mittel", "Beispiel", "Bedeutung"],
        rows: [
          ["vorgetäuschte Zustimmung", "Ma figurati!", "na klar, wer's glaubt"],
          ["Litotes", "Non è male.", "es ist ausgezeichnet"],
          ["Verkleinerung", "un problemino", "ein ernstes Problem"],
          ["Übertreibung", "una tragedia", "eine kleine Unannehmlichkeit"],
          ["Distanz-Anführungszeichen", "la \"riforma\"", "die Distanz der schreibenden Person"],
          ["rhetorische Frage", "E chi l'avrebbe detto?", "das war von Anfang an klar"]
        ]
      },
      examples: [
        { tr: "Bravo, genau das, was noch gefehlt hat." },
        { tr: "Sagen wir, es lief nicht glänzend." },
        { tr: "Ein Problemchen von zwei Millionen Euro." },
        { tr: "Ah, jetzt bin also ich schuld. Na klar." },
        { tr: "Die „Reform\" hat die Lage verschlechtert." },
        { tr: "Nicht ohne Mühe sind wir ans Ende gekommen." }
      ]
    },
    vocab: [
      "na klar, wer's glaubt",
      "das hat gerade noch gefehlt",
      "ach komm!",
      "Litotes",
      "Untertreibung",
      "Sarkasmus",
      "sich lustig machen über",
      "betonen, hervorheben",
      "Ton",
      "Anspielung",
      "Doppeldeutigkeit",
      "nicht wenig, ziemlich viel"
    ],
    exercises: [
      {
        q: "„Non è male\" über einen großartigen Film ist:",
        opts: ["Kritik", "eine Litotes, Lob durch Untertreibung", "Gleichgültigkeit"]
      },
      {
        q: "„Un problemino da due milioni\" ist ein Beispiel für:",
        opts: ["eine ironische Verkleinerung", "einen lexikalischen Fehler", "Amtsregister"]
      },
      {
        q: "Worin unterscheidet sich Ironie von Sarkasmus?",
        opts: ["In nichts", "Die Ironie lässt einen Ausweg, der Sarkasmus nicht", "Sarkasmus ist immer geschrieben"]
      },
      { q: "Ordne zu.", pairs: ["na klar, wer's glaubt", "das hat gerade noch gefehlt", "ach komm!", "ziemlich viel"] },
      {
        q: "Die Anführungszeichen in „la \"riforma\"\" signalisieren:",
        opts: ["ein Zitat", "die Distanz der schreibenden Person zum Wort", "einen Fachbegriff"]
      },
      {
        q: "Ergänze den ironischen Satz.",
        tr: "Bravo, genau das, was noch gefehlt hat. Sagen wir, es lief nicht glänzend."
      },
      { q: "„Nicht ohne Mühe sind wir ans Ende gekommen.\"" },
      {
        q: "„E chi l'avrebbe detto?\" über etwas Offensichtliches bedeutet:",
        opts: ["niemand hat es erwartet", "das war von Anfang an klar", "wer hat das gesagt?"]
      },
      { tr: "Sagen wir, es lief nicht ganz glänzend, um es milde auszudrücken." },
      { tr: "Ein Problemchen von zwei Millionen Euro, nicht der Rede wert." }
    ]
  },
  "lesson:c2-u03-l2": {
    theme: "Stil und Kultur",
    title: "Jargon und Regionalismen",
    objectives: [
      "Jugendsprache und Regionalismen erkennen",
      "das umgangssprachliche Register vom Dialekt unterscheiden",
      "wissen, was man nicht schreibt"
    ],
    theory: [
      {
        h: "Gergo giovanile",
        p: "<em>Boh</em> (keine Ahnung), <em>bella!</em> (hallo), <em>tipo</em> (so, quasi), <em>raga</em> (Leute, von <em>ragazzi</em>), <em>sto zitto</em>, <em>che palle</em> (was für eine Nervensäge, leicht derb), <em>spoilerare</em>, <em>cringiare</em>. Diese Schicht bewegt sich schnell: was heute lebt, klingt in fünf Jahren wie eine Archivaufnahme."
      },
      {
        h: "Regionalismen innerhalb des Standards",
        list: [
          "Norden: <em>anguria</em> (Wassermelone), <em>bidello</em>, <em>ciao</em> aus <em>schiavo</em>",
          "Mitte: <em>cocomero</em> (Wassermelone), <em>a me mi</em> (umgangssprachlich, schriftlich falsch)",
          "Süden: <em>melone d'acqua</em>, häufiges passato remoto, <em>mo'</em> (jetzt)",
          "überall: <em>magari</em>, <em>mica</em>, <em>manco</em> (nicht einmal, umgangssprachlich)"
        ]
      },
      {
        contrast: "Die Landkarte der Wörter kennst du gut: Samstag und Sonnabend, Brötchen, Semmel und Schrippe, Metzger und Fleischer sind genau <em>anguria</em> gegen <em>cocomero</em>. Und für <em>mica</em> hast du keine Vokabel, aber ein Verfahren: deine Modalpartikeln. <em>Non è mica facile</em> ist „das ist doch gar nicht so einfach\" — die Nuance sitzt bei dir in <em>doch</em> und <em>gar</em>, im Italienischen in einem einzigen Wort."
      },
      {
        h: "Ein Dialekt ist kein Jargon",
        p: "Neapolitanisch und Sizilianisch sind <b>eigene Sprachen</b>, aus dem Latein neben dem Toskanischen hervorgegangen, mit eigener Literatur und Grammatik. Sie „schlechtes Italienisch\" zu nennen ist sachlich falsch und kulturell ein Fauxpas — derselbe Fehler, wie Plattdeutsch für verunglücktes Hochdeutsch zu halten."
      },
      {
        trap: "<em>Mica</em> („überhaupt nicht\", „keineswegs\") ist im Gespräch allgegenwärtig: <em>Non è mica facile.</em> In einem förmlichen Text ersetz es durch <em>affatto</em> oder streich es."
      }
    ],
    grammar: {
      title: "Die umgangssprachlichen Register",
      table: {
        head: ["Ausdruck", "Bedeutung", "Register"],
        rows: [
          ["boh", "keine Ahnung", "umgangssprachlich"],
          ["mica", "überhaupt nicht, keineswegs", "umgangssprachlich, sehr häufig"],
          ["magari", "wenn doch / vielleicht / sogar", "überall"],
          ["mo'", "jetzt", "Mitte-Süden"],
          ["che palle", "wie nervig", "leicht derb"],
          ["tipo", "so, quasi", "Jugendsprache"],
          ["dai!", "komm schon! / ach hör auf!", "überall"],
          ["figurati", "keine Ursache / wer's glaubt", "überall"]
        ]
      },
      examples: [
        { tr: "Das ist doch gar nicht so einfach, wie es aussieht." },
        { tr: "Ich weiß nicht, keine Ahnung." },
        { tr: "Komm schon, nimm es nicht krumm!" },
        { tr: "Es war so gegen Mitternacht, als wir gingen." },
        { tr: "Wenn es doch so einfach wäre." },
        { tr: "Ich komme sofort, warte kurz.", note: "Mitte-Süden" }
      ]
    },
    vocab: [
      "Jargon, Slang",
      "Regionalismus",
      "überhaupt nicht, keineswegs",
      "keine Ahnung",
      "komm schon!",
      "so, quasi",
      "jetzt (regional)",
      "Wassermelone (Norden / Mitte)",
      "überhaupt (förmlich)",
      "umgangssprachlich",
      "vulgär",
      "veraltet"
    ],
    exercises: [
      {
        q: "„Non è mica facile\" bedeutet:",
        opts: ["es ist ein bisschen einfach", "es ist überhaupt nicht einfach", "es ist sehr einfach"]
      },
      { q: "„Boh\" ist:", opts: ["ein Schmerzlaut", "keine Ahnung", "ein Gruß"] },
      {
        q: "Neapolitanisch ist:",
        opts: ["schlechtes Italienisch", "eine eigene romanische Sprache", "Jugendsprache"]
      },
      { q: "Ordne den Regionalismus der Gegend zu.", pairs: ["Norden", "Mitte", "Mitte-Süden", "Süden"] },
      { q: "Ersetz „mica\" durch die förmliche Form: „Non è ___ facile.\"" },
      {
        q: "„A me mi piace\" ist:",
        opts: ["schriftlich korrekt", "umgangssprachlich, schriftlich vermieden", "rein dialektal"]
      },
      {
        q: "Ergänze die umgangssprachlichen Wendungen.",
        tr: "Ich weiß nicht, keine Ahnung. Jedenfalls ist es gar nicht so einfach, wie es aussieht."
      },
      { q: "„Komm schon, nimm es nicht krumm!\"" },
      { tr: "Ich weiß nicht, es war so gegen Mitternacht, so leicht erinnert man sich nicht." },
      { tr: "Das ist gar nicht so einfach, wie es aussieht, glaub mir." }
    ]
  },
  "lesson:c2-u03-l3": {
    theme: "Stil und Kultur",
    title: "Latinismen und gelehrtes Register",
    objectives: [
      "Latinismen in juristischen und akademischen Texten erkennen",
      "sie an der richtigen Stelle verwenden",
      "die Stufe C2 abschließen"
    ],
    theory: [
      {
        h: "Latein lebt im offiziellen Italienisch",
        p: "Das Italienische hält einen großen Vorrat lateinischer Wendungen in der alltäglichen Rechts- und Wissenschaftssprache bereit: <em>de facto</em>, <em>ad hoc</em>, <em>sine die</em>, <em>pro tempore</em>."
      },
      {
        contrast: "Die meisten kennst du aus deiner eigenen Fach- und Rechtssprache und liest sie ohne Aufwand. Zwei fallen heraus und lohnen die Mühe: <em>una tantum</em>, das du mit „einmalig\" oder „Einmalzahlung\" wiedergibst, und <em>in itinere</em>, für das du schlicht „laufend\" sagst. Beide sind im italienischen Amtsdeutsch völlig alltäglich und tragen keinerlei Feierlichkeit."
      },
      {
        h: "Die häufigsten",
        list: [
          "<em>de facto</em> / <em>de iure</em> — faktisch / rechtlich",
          "<em>ex post</em> / <em>ex ante</em> — im Nachhinein / im Voraus",
          "<em>in itinere</em> — laufend, im Gang",
          "<em>una tantum</em> — einmalig",
          "<em>ad hoc</em>, <em>pro tempore</em>, <em>sine die</em> (ohne festgesetztes Datum)",
          "<em>a fortiori</em>, <em>in primis</em>, <em>de cuius</em> (der Erblasser, im Erbrecht)"
        ]
      },
      {
        h: "Das gelehrte Register jenseits des Lateins",
        p: "<em>Vieppiù</em> (immer mehr), <em>altresì</em> (ferner), <em>ancorché</em> (wenngleich), <em>laddove</em> (wohingegen), <em>giacché</em> (da), <em>onde</em> (damit). Sie gehören ins Recht, in den seriösen Journalismus und in den Essay; gesprochen klingen sie geschraubt. Deine Reihe ferner, wenngleich, wohingegen und da deckt sie fast eins zu eins."
      },
      {
        h: "Die Stufe abschließen",
        p: "Auf C2 geht es nicht mehr darum, Formen hinzuzufügen, sondern <b>die richtige zu wählen</b>. Derselbe Inhalt im umgangssprachlichen, im standardsprachlichen und im gelehrten Register sind drei verschiedene Botschaften, und Beherrschung heißt, bewusst zu wählen."
      }
    ],
    grammar: {
      title: "Latinismen und gelehrte Formen",
      table: {
        head: ["Ausdruck", "Bedeutung", "Kontext"],
        rows: [
          ["de facto / de iure", "faktisch / rechtlich", "Recht"],
          ["ex post / ex ante", "im Nachhinein / im Voraus", "Wirtschaft, Recht"],
          ["in itinere", "laufend, im Gang", "Verwaltung"],
          ["una tantum", "einmalig", "Finanzen"],
          ["sine die", "ohne festgesetztes Datum", "Recht"],
          ["altresì", "ferner", "Recht, Journalismus"],
          ["ancorché", "wenngleich", "Journalismus"],
          ["laddove", "wohingegen", "Essay"]
        ]
      },
      examples: [
        { tr: "Der Vertrag ist faktisch bereits abgelaufen." },
        { tr: "Die Prämie wird einmalig ausgezahlt." },
        { tr: "Die Sitzung wurde ohne neues Datum verschoben." },
        { tr: "Das Verfahren ist noch im Gang." },
        { tr: "Ferner wird darauf hingewiesen, dass die Frist nicht verlängerbar ist." },
        { tr: "Wohingegen die erste Studie einen Rückgang zeigte, weist die zweite Stabilität aus." }
      ]
    },
    vocab: [
      "faktisch / rechtlich",
      "im Nachhinein / im Voraus",
      "laufend, im Gang",
      "einmalig",
      "ohne festgesetztes Datum",
      "ad hoc",
      "ferner",
      "wenngleich",
      "wohingegen",
      "da, zumal",
      "auszahlen, bereitstellen",
      "verschieben"
    ],
    exercises: [
      { q: "Ordne dem Latinismus seine Bedeutung zu.", pairs: ["de facto", "einmalig", "ohne festes Datum", "im Gang"] },
      {
        q: "„Il bonus è erogato una tantum\" bedeutet:",
        opts: ["monatlich ausgezahlt", "einmalig ausgezahlt", "einmal im Jahr ausgezahlt"]
      },
      {
        q: "„Rinviata sine die\" bedeutet:",
        opts: ["um eine Woche verschoben", "ohne neues Datum verschoben", "abgesagt"]
      },
      { q: "Ersetz „anche\" durch die gelehrte Form: „Si segnala ___ che…\"" },
      { q: "Ersetz „mentre\" durch die essayistische Form: „___ il primo studio indicava un calo…\"" },
      {
        q: "Worin besteht die Beherrschung auf C2?",
        opts: [
          "Möglichst viele Wörter zu kennen",
          "Das zur Situation passende Register bewusst zu wählen",
          "Immer die gelehrten Formen zu verwenden"
        ]
      },
      { q: "Ergänze den Rechtstext.", tr: "Der Vertrag ist faktisch bereits abgelaufen, und das Verfahren ist noch im Gang." },
      { q: "„Ferner wird darauf hingewiesen, dass die Frist nicht verlängerbar ist.\"" },
      { tr: "Die Sitzung wurde aus technischen Gründen ohne neues Datum verschoben." },
      { tr: "Die Zahlung erfolgt einmalig, sobald der Antrag eingereicht ist." }
    ]
  },
  "lesson:c2-u03-test": {
    theme: "Prüfung",
    title: "C2-Abschlussprüfung",
    objectives: ["die Partizipien, die Wortbildung, die Register und die Nuancen prüfen"],
    theory: [{ p: "Zwölf Aufgaben aus der ganzen Stufe. Bestanden ab 70 %. Es ist der letzte Test des Kurses." }],
    exercises: [
      { q: "„Gli aventi diritto\":", opts: ["die recht haben", "die Anspruchsberechtigten", "die Eigentümer"] },
      { q: "Angleichung: „Terminat___ i lavori…\"" },
      { q: "„Il testo va rivisto\":", opts: ["geht überarbeitet", "ist zu überarbeiten", "wird gerade überarbeitet"] },
      { q: "„Mi fanno male ___.\"", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "Plural von „la cassaforte\": ___" },
      { q: "Plural von „il capostazione\": ___" },
      { q: "Ordne zu.", pairs: ["hydrisch", "kardial", "urban", "okular"] },
      { q: "„Non è mica facile\":", opts: ["ein bisschen einfach", "überhaupt nicht einfach", "sehr einfach"] },
      { q: "„Una tantum\":", opts: ["monatlich", "einmalig", "einmal im Jahr"] },
      { q: "Ersetz „anche\": „Si segnala ___ che…\"" },
      { q: "„Das Verfahren ist noch im Gang und wurde ohne neues Datum verschoben.\"" },
      { tr: "Angesichts der Lage ist das Projekt vor der Frist vollständig zu überarbeiten." }
    ]
  }
});
