/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu data/core/a1-01.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:a1-u01": { title: "Das Kaffeeritual", grammarNote: "essere · Genus und Numerus · Artikel" },
  "lesson:a1-u01-l1": {
    theme: "Alltag",
    title: "Begrüßen und die erste Bestellung",
    objectives: [
      "je nach Tageszeit grüßen und sich verabschieden",
      "Kaffee bestellen, wie Italiener es tun",
      "essere im Präsens konjugieren"
    ],
    theory: [
      {
        h: "Der Gruß richtet sich nach der Uhr, nicht nach der Stimmung",
        p: "Italienische Grüße teilen den Tag in zwei. <strong>Buongiorno</strong> reicht vom Morgen bis in den frühen Nachmittag. Dann, irgendwann zwischen 14 und 17 Uhr (die Grenze ist unscharf und verschiebt sich regional), wechselt man zu <strong>buonasera</strong> — und benutzt es, wenn man um 18 Uhr eine Bar betritt. <strong>Buonanotte</strong> ist überhaupt kein Gruß: es ist, was man sagt, wenn man ins Bett geht."
      },
      {
        h: "Ciao ist nicht immer die sichere Wahl",
        p: "<strong>Ciao</strong> heißt „hallo\" und „tschüss\", aber nur bei Leuten, die man duzt: Freunde, Gleichaltrige, Familie, der junge Barmann. Zu einem Kellner Mitte fünfzig, zu einem Beamten, zum Ladenbesitzer, den man zum ersten Mal sieht: <strong>buongiorno</strong>. Mit „ciao\" in eine Apotheke zu kommen wirkt ungefähr wie ein „na, alles klar?\" am Bankschalter."
      },
      {
        contrast: "Deutsch teilt den Tag ebenfalls, und genau darin liegt die Falle: die Grenzen liegen anders. <em>Buonasera</em> beginnt mitten am Nachmittag, lange vor dem deutschen „guten Abend\". Und <em>buonanotte</em> grüßt nie — „gute Nacht\" beim Hereinkommen ist der klassische Patzer. Ein neutrales „hallo\" für jede Tageszeit gibt es nicht."
      },
      {
        h: "Essere — das Verb, ohne das kein Satz steht",
        p: "<strong>Essere</strong> heißt „sein\". Seine Formen haben mit dem Infinitiv nichts zu tun (<em>sono</em>, <em>sei</em>, <em>è</em>…), es gibt also keine Regel, aus der man sie ableiten könnte: man muss sie können. Der Trost: du wirst sie so oft wiederholen, dass sie sich von allein setzen. Genauso unregelmäßig wie „ich bin, du bist, er ist\"."
      },
      {
        tip: "Subjektpronomen (io, tu, lui…) fallen normalerweise weg, weil die Endung schon sagt, wer handelt. <em>Sono americana</em> genügt; <em>io sono americana</em> betont: „<b>ich</b> bin Amerikanerin (und du nicht)\"."
      }
    ],
    grammar: {
      title: "Essere (sein) — Präsens",
      note: "Achte auf den Akzent bei <b>è</b> — ohne ihn heißt <em>e</em> „und\". Zwei verschiedene Wörter.",
      table: {
        head: ["Person", "Form", "auf Deutsch"],
        rows: [
          ["io", "sono", "ich bin"],
          ["tu", "sei", "du bist"],
          ["lui / lei / Lei", "è", "er / sie ist; Sie sind"],
          ["noi", "siamo", "wir sind"],
          ["voi", "siete", "ihr seid"],
          ["loro", "sono", "sie sind"]
        ]
      },
      examples: [
        {
          tr: "Guten Morgen, einen Kaffee bitte.",
          note: "„un caffè\" ist ein Espresso — das muss man nicht dazusagen"
        },
        { tr: "Ich bin Anna, freut mich." },
        { tr: "Bist du aus Rom?" },
        { tr: "Der Kaffee ist heiß." },
        { tr: "Wir sind spät dran." },
        { tr: "Sie sind in der Bar." }
      ]
    },
    vocab: [
      "guten Tag (bis in den frühen Nachmittag)",
      "guten Abend (ab etwa 16-17 Uhr)",
      "gute Nacht (nur beim Gehen)",
      "hallo / tschüss (locker)",
      "auf Wiedersehen (formell)",
      "bitte (wenn man um etwas bittet)",
      "danke",
      "gern geschehen",
      "Espresso",
      "Cappuccino",
      "Cornetto, Hörnchen",
      "Bar, Café",
      "freut mich",
      "entschuldigen Sie (formell)"
    ],
    dialogue: [
      "Guten Morgen! Was darf es sein?",
      "Guten Morgen. Einen Kaffee und ein Cornetto, bitte.",
      "Sofort. Das macht zwei fünfzig.",
      "Bitte sehr. Danke!",
      "Gern geschehen, einen schönen Tag!"
    ],
    culture: {
      title: "Mit italienischen Augen: Kaffee hat Regeln",
      text: "<p>In einer italienischen Bar trinkt man den Kaffee <b>im Stehen an der Theke</b> (al banco), und das dauert drei Minuten. Ein Tisch kostet Aufschlag, manchmal das Doppelte — das ist keine Abzocke, das sind zwei verschiedene Leistungen auf der Preisliste.</p><p><b>Cappuccino nach elf</b> weist dich als Touristin aus: Milch gilt als schwer und gehört zum Frühstück. Nach dem Essen bestellt man <i>un caffè</i> oder höchstens <i>un macchiato</i>, einen Espresso mit einem Tropfen Milch.</p><p>Bezahlt wird meistens <b>nach</b> dem Trinken, außer die Bar hat eine Kasse am Eingang: dann zuerst <i>lo scontrino</i> (der Bon), dann der Kaffee.</p>"
    },
    exercises: [
      {
        q: "Du betrittst um halb zehn morgens eine Bar. Was sagst du?",
        opts: ["Buonasera", "Buongiorno", "Buonanotte"],
        why: "Buongiorno reicht vom Morgen bis in den frühen Nachmittag. Buonanotte ist ausschließlich ein Abschied vor dem Schlafengehen."
      },
      {
        q: "Der Kellner ist etwa sechzig und du kennst ihn nicht. Welcher Gruß passt?",
        opts: ["Ciao!", "Buongiorno!", "Buonanotte!"],
        why: "„Ciao\" bleibt Leuten vorbehalten, die du duzt. Zu einem Fremden in der Bar: buongiorno."
      },
      {
        tr: "Die ganze Konjugation — ohne zu spicken.",
        why: "Essere ist in jeder Person unregelmäßig. Es ist eine der beiden Konjugationen, die man wirklich auswendig können muss."
      },
      {
        q: "Ergänze: „Anna e Marco ___ italiani.\" (Anna und Marco sind Italiener.)",
        hint: "dritte Person Plural",
        why: "Loro sono. Beachte, dass „sono\" für <b>io</b> und für <b>loro</b> steht — der Zusammenhang entscheidet."
      },
      {
        q: "Übersetze: „Ich komme aus Polen.\"",
        hint: "essere + da + Land",
        why: "Sono dalla Polonia. Ländernamen stehen mit Artikel: la Polonia → dalla Polonia."
      },
      {
        tr: "Einen Kaffee und ein Cornetto, bitte.",
        why: "Im Italienischen braucht es kein Höflichkeitsverb: du sagst, was du willst, und hängst <i>per favore</i> an."
      },
      {
        q: "Ordne jedem Ausdruck seine Bedeutung zu.",
        pairs: ["danke", "gern geschehen", "entschuldigen Sie (formell)", "auf Wiedersehen"]
      },
      {
        tr: "Guten Abend, einen Cappuccino bitte.",
        why: "Achte auf das doppelte <b>cc</b> und <b>pp</b> — im Italienischen hält man sie hörbar länger als einfache."
      },
      {
        tr: "Guten Morgen, einen Kaffee bitte.",
        why: "„Caffè\" wird auf der letzten Silbe betont: kaf-FE, nicht KA-fe."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Grundgrammatik",
    title: "Das Genus des Nomens",
    objectives: [
      "das Genus an der Endung erkennen",
      "den Plural nach -o/-i, -a/-e, -e/-i bilden",
      "unveränderliche Nomen wie il bar und la città beherrschen"
    ],
    theory: [
      {
        h: "Zwei Genera, nicht drei",
        p: "Italienisch hat nur Maskulinum und Femininum — <b>kein Neutrum</b>. Jedes Nomen gehört zu einem der beiden, Gegenstände eingeschlossen: <em>il tavolo</em> (Tisch) ist maskulin, <em>la sedia</em> (Stuhl) feminin. Das Prinzip kennst du, aber jedes deutsche Neutrum muss neu einsortiert werden."
      },
      {
        h: "Drei Muster, die fast alles abdecken",
        list: [
          "Endung <b>-o</b> → maskulin, Plural <b>-i</b>: <em>il libro → i libri</em>",
          "Endung <b>-a</b> → feminin, Plural <b>-e</b>: <em>la casa → le case</em>",
          "Endung <b>-e</b> → maskulin <i>oder</i> feminin, Plural immer <b>-i</b>: <em>il fiore → i fiori</em>, <em>la chiave → le chiavi</em>"
        ]
      },
      {
        trap: "Die Nomen auf <b>-e</b> sind die eine Gruppe, bei der man das Genus mit dem Wort lernen muss. Schreib sie immer mit Artikel auf: nicht „fiore\", sondern <b>il fiore</b>."
      },
      {
        h: "Wörter, die sich nie ändern",
        p: "Nomen auf betontem Vokal (<em>la città</em>, <em>il caffè</em>) und Lehnwörter (<em>il bar</em>, <em>lo sport</em>, <em>il film</em>) sehen im Singular und Plural gleich aus. Nur der Artikel sagt, was gemeint ist: <em>la città → le città</em>."
      },
      {
        contrast: "Gutes Geschäft: du gibst ein Genus ab und bekommst dafür ein durchsichtiges System. Im Deutschen musst du „der/die/das\" bei jedem Wort auswendig lernen; im Italienischen verrät die Endung in vier von fünf Fällen alles. Zu prüfen bleiben die Einzelfälle — <em>il libro</em> ist maskulin, „das Buch\" neutral, <em>la macchina</em> feminin wie „das Auto\" eben nicht."
      }
    ],
    grammar: {
      title: "Genus und Plural des Nomens",
      table: {
        head: ["Muster", "Singular", "Plural", "auf Deutsch"],
        rows: [
          ["-o → -i (m)", "il libro", "i libri", "Buch / Bücher"],
          ["-a → -e (f)", "la ragazza", "le ragazze", "Mädchen / Mädchen"],
          ["-e → -i (m)", "il ristorante", "i ristoranti", "Restaurant / Restaurants"],
          ["-e → -i (f)", "la stazione", "le stazioni", "Bahnhof / Bahnhöfe"],
          ["unveränderlich", "la città", "le città", "Stadt / Städte"],
          ["Lehnwörter", "il bar", "i bar", "Bar / Bars"]
        ]
      },
      examples: [
        { tr: "Das Cornetto ist gut." },
        { tr: "Die Cornetti sind gut.", note: "auch das Adjektiv wechselt die Endung" },
        { tr: "Der Bahnhof ist in der Nähe.", note: "„stazione\" ist feminin, trotz der Endung -e" },
        { tr: "Zwei Kaffee, bitte.", note: "caffè ändert die Form nicht" }
      ]
    },
    vocab: [
      "Buch",
      "Haus",
      "Tisch",
      "Stuhl",
      "Restaurant",
      "Bahnhof",
      "Schlüssel",
      "Blume",
      "Stadt",
      "Kaffee / Bar",
      "Sport",
      "Film",
      "Nacht",
      "Tag"
    ],
    exercises: [
      {
        q: "Welches Wort ist feminin?",
        opts: ["il tavolo", "la chiave", "il fiore"],
        why: "<i>La chiave</i> — das Genus verrät der Artikel, denn die Endung -e sagt nichts."
      },
      {
        q: "Der Plural von „la ragazza\" ist „___ ragazze\".",
        why: "Der feminine Pluralartikel ist immer <b>le</b>."
      },
      {
        q: "Setz in den Plural: „il ristorante\" → „i ___\".",
        hint: "-e wird im Plural immer zu -i",
        why: "Nomen auf -e bilden den Plural auf -i, unabhängig vom Genus."
      },
      {
        q: "Wähl den richtigen bestimmten Artikel im Singular.",
        why: "Bei Nomen auf -e wird das Genus gelernt — deshalb notiert man sie immer mit Artikel.",
        items: ["Buch", "Haus", "Bahnhof", "Restaurant", "Schlüssel", "Tag"]
      },
      {
        q: "Wie viele Kaffee bestellst du mit „due caffè\"?",
        opts: ["Einen", "Zwei", "Das lässt sich nicht sagen"],
        why: "„Caffè\" wird nicht flektiert; die Zahl kommt vom Zahlwort oder vom Artikel: <i>il caffè / i caffè</i>."
      },
      {
        q: "Welche dieser Nomen sehen im Plural gleich aus?",
        opts: ["la città", "il libro", "il bar", "la sedia", "lo sport"],
        why: "Unveränderlich: Wörter mit Betonung auf dem Endvokal (città) und Lehnwörter (bar, sport)."
      },
      { tr: "Das Restaurant ist geschlossen.", why: "Reihenfolge: Artikel + Nomen + Verb + Adjektiv." },
      { tr: "Die Schlüssel liegen auf dem Tisch." },
      { tr: "Die Stadt ist wunderschön.", why: "„Città\" wird hinten betont: tschi-TA." }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Grundgrammatik",
    title: "Bestimmte und unbestimmte Artikel",
    objectives: [
      "den bestimmten Artikel nach dem ersten Laut des Wortes wählen",
      "il von un unterscheiden",
      "lo und gli richtig verwenden"
    ],
    theory: [
      {
        h: "Warum sieben Formen",
        p: "Der Artikel leistet zweierlei: er markiert Genus und Numerus, und er sagt, ob es um etwas geht, das die zuhörende Person schon kennt, oder um irgendeines. <em>Vorrei un caffè</em> — irgendeinen. <em>Dov'è il caffè?</em> — den bestimmten, den wir beide meinen. Beides kennst du."
      },
      {
        h: "Kein Kasus — dafür der erste Laut",
        p: "Die gute Nachricht zuerst: der italienische Artikel wird <b>nicht dekliniert</b>. <em>il libro</em> bleibt <em>il libro</em>, ob als Subjekt oder Objekt; kein den, dem, des. Dafür hat das Maskulinum drei Varianten, und die Wahl ist reine Aussprache. <strong>Il</strong> vor gewöhnlichem Konsonanten. <strong>Lo</strong> vor <em>s + Konsonant</em> (<em>lo studente</em>) und vor <em>z</em>, <em>gn</em>, <em>ps</em>, <em>y</em>, <em>x</em>. <strong>L'</strong> vor Vokal. Der Grund ist rein lautlich: „il studente\" ist unbequem."
      },
      {
        h: "Der Plural",
        list: [
          "<b>il → i</b>: <em>il libro → i libri</em>",
          "<b>lo / l' → gli</b>: <em>lo studente → gli studenti</em>, <em>l'amico → gli amici</em>",
          "<b>la / l' → le</b>: <em>la casa → le case</em>, <em>l'amica → le amiche</em>"
        ]
      },
      {
        h: "Der unbestimmte Artikel",
        p: "<strong>Un</strong> vor Konsonant und vor Vokal (<em>un libro</em>, <em>un amico</em> — ohne Apostroph!), <strong>uno</strong> überall dort, wo <em>lo</em> stünde (<em>uno studente</em>), <strong>una</strong> im Femininum, <strong>un'</strong> vor femininem Vokal (<em>un'amica</em>)."
      },
      {
        trap: "<b>un amico</b> (ohne Apostroph, ein Mann) gegen <b>un'amica</b> (mit Apostroph, eine Frau). Schriftlich ist der Apostroph der einzige Unterschied, und er trägt das Genus. Deutsch unterscheidet Freund und Freundin am Wort selbst — hier hängt alles an einem Zeichen."
      }
    ],
    grammar: {
      title: "Die Artikel — die vollständige Tabelle",
      table: {
        head: ["Kontext", "best. Sing.", "best. Pl.", "unbestimmt"],
        rows: [
          ["m. + Konsonant", "il treno", "i treni", "un treno"],
          ["m. + s+Kons., z, gn, ps", "lo studente, lo zaino", "gli studenti", "uno studente"],
          ["m. + Vokal", "l'amico", "gli amici", "un amico"],
          ["f. + Konsonant", "la casa", "le case", "una casa"],
          ["f. + Vokal", "l'amica", "le amiche", "un'amica"]
        ]
      },
      examples: [
        { tr: "Einen Kaffee, bitte.", note: "irgendeinen — unbestimmt" },
        { tr: "Dieser Kaffee ist kalt.", note: "ein bestimmter — bestimmt" },
        { tr: "Der Rucksack ist schwer.", note: "z → lo" },
        { tr: "Die Studenten sind spät dran." },
        { tr: "Eine Freundin aus Rom.", note: "feminin + Vokal → un'" }
      ]
    },
    vocab: [
      "Student",
      "Rucksack",
      "Freund",
      "Zug",
      "Spiegel",
      "Zucker",
      "Wasser",
      "Glas",
      "Flasche",
      "Hotel",
      "Psychologe",
      "Leute (im Italienischen Singular!)"
    ],
    exercises: [
      {
        q: "Welcher Artikel gehört zu „zucchero\" (Zucker)?",
        opts: ["il", "lo", "l'"],
        why: "Maskulina mit <b>z</b> am Anfang nehmen lo: <i>lo zucchero</i>, wie <i>lo zaino</i>."
      },
      {
        q: "Wie lautet der Plural von „lo specchio\"?",
        opts: ["i specchi", "gli specchi", "le specchie"],
        why: "Lo wird im Plural immer zu <b>gli</b>."
      },
      {
        q: "Wähl den richtigen bestimmten Artikel.",
        why: "Die Wahl hängt vom Genus UND vom ersten Laut des Wortes ab.",
        items: ["Zug", "Student", "Freundin", "Wasser", "Flasche", "Rucksack"]
      },
      {
        q: "Ergänze: „Ho ___ amica a Milano.\" (Ich habe eine Freundin in Mailand.)",
        hint: "feminin vor Vokal",
        why: "Un'amica, mit Apostroph. Ohne ihn (<i>un amico</i>) wäre es ein Mann."
      },
      {
        q: "Ergänze: „___ studenti sono bravi.\" (Die Studenten sind gut.)",
        why: "Studente nimmt lo, im Plural also: gli studenti."
      },
      {
        q: "„Vorrei il caffè\" gegen „Vorrei un caffè\" — worin liegt der Unterschied?",
        opts: [
          "In nichts, das sind Synonyme",
          "Il = genau der schon erwähnte Kaffee; un = irgendein Kaffee",
          "Il ist höflicher"
        ],
        why: "Der bestimmte Artikel setzt voraus, dass klar ist, welcher gemeint ist. In der Bar bestellt man <i>un caffè</i>."
      },
      {
        q: "Ordne dem Nomen seinen Artikel zu.",
        pairs: ["ps + Konsonant", "Vokal", "gewöhnlicher Konsonant", "feminin"]
      },
      {
        tr: "Der Rucksack des Studenten ist schwer.",
        why: "„Dello\" ist di + lo — auch die Präposition passt sich dem Artikel an."
      },
      { tr: "Die Studenten sind an der Universität." }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Alltag",
    title: "Wie geht's — tu oder Lei",
    objectives: [
      "fragen, wie es jemandem geht, förmlich und locker",
      "das Verb stare konjugieren",
      "wissen, wann man von Lei zu tu wechselt"
    ],
    theory: [
      {
        h: "Zwei Arten, „du\" zu sagen",
        p: "Italienisch unterscheidet <strong>tu</strong> (locker) von <strong>Lei</strong> (förmlich). Das ist dein du/Sie, mit einem entscheidenden Unterschied: <em>Lei</em> heißt wörtlich „sie\" und gilt für Männer wie Frauen, mit dem Verb in der <b>dritten Person Singular</b>. <em>Come sta?</em> — nicht im Plural wie das deutsche „Sie sind\". Geschrieben oft mit großem L, um es vom gewöhnlichen „sie\" zu trennen."
      },
      {
        h: "Wer das Du anbietet",
        p: "Die Regel ist einfach: die ältere oder höhergestellte Person bietet an. Der Satz lautet <em>Possiamo darci del tu?</em> In einer Bar, unter Gleichaltrigen, in einer jungen Firma wechseln Italiener sehr schnell zum <em>tu</em> — schneller als im deutschsprachigen Raum. Auf der Bank, beim Arzt, im Amt bleibt das <em>Lei</em>."
      },
      {
        h: "Stare — „sein\", aber für das Befinden",
        p: "Wie es dir geht, läuft über <strong>stare</strong>, nicht über <em>essere</em>. <em>Come stai?</em> → <em>Sto bene</em>. „Sono bene\" würde kein Italiener sagen. <em>Stare</em> deckt außerdem das Bleiben ab: <em>Sto a casa</em> (ich bleibe zu Hause)."
      },
      {
        contrast: "Deutsch sagt „wie geht es dir\" mit „gehen\", also gibt es hier keinen falschen Reflex zu korrigieren — aber auch keine Stütze. Lern das Paar als Block: <b>come stai / sto bene</b>. Und merk dir, dass für den Ort <em>essere</em> steht: <em>sono a casa</em> heißt „ich bin zu Hause\", <em>sto a casa</em> eher „ich bleibe zu Hause\"."
      }
    ],
    grammar: {
      title: "Stare (sich fühlen, bleiben) — Präsens",
      table: {
        head: ["Person", "Form", "Beispiel"],
        rows: [
          ["io", "sto", "Sto bene, grazie."],
          ["tu", "stai", "Come stai?"],
          ["lui / lei / Lei", "sta", "Come sta, signora?"],
          ["noi", "stiamo", "Stiamo bene."],
          ["voi", "state", "Come state?"],
          ["loro", "stanno", "Stanno male."]
        ]
      },
      examples: [
        { tr: "Hallo Marco, wie geht's?", note: "locker" },
        { tr: "Guten Tag, wie geht es Ihnen?", note: "förmlich" },
        { tr: "Gut, danke. Und dir?" },
        { tr: "Kann nicht klagen.", note: "eine sehr häufige Antwort" },
        { tr: "Es geht so." },
        { tr: "Wollen wir uns duzen?" }
      ]
    },
    vocab: [
      "wie geht's? (locker)",
      "wie geht es Ihnen? (förmlich)",
      "mir geht es gut",
      "mir geht es nicht gut",
      "kann nicht klagen",
      "es geht so",
      "und dir?",
      "bestens",
      "ein bisschen müde",
      "mein Herr / meine Dame",
      "bis bald",
      "bis später"
    ],
    dialogue: [
      "Hallo Giulia! Wie geht's?",
      "Hallo! Bestens, und dir?",
      "Ein bisschen müde, aber gut. Bis später!",
      "Guten Tag, gnädige Frau, wie geht es Ihnen?",
      "Kann nicht klagen, danke. Und Ihnen?"
    ],
    exercises: [
      {
        q: "Du fragst jemanden, den du siezt, wie es ihm geht. Welcher Satz stimmt?",
        opts: ["Come stai?", "Come sta?", "Come state?"],
        why: "Die Lei-Form steht in der dritten Person Singular: <i>come sta?</i>"
      },
      {
        q: "Welcher Satz ist falsch?",
        opts: ["Sto bene.", "Sono bene.", "Non c'è male."],
        why: "Das Befinden läuft über <b>stare</b>, nie über <i>essere</i>."
      },
      {
        tr: "io, tu, lui/lei, voi",
        why: "Stare ist im Singular und in der dritten Person Plural (stanno) unregelmäßig."
      },
      {
        q: "Ergänze: „Come ___, ragazzi?\" (Wie geht's, Leute?)",
        why: "Du sprichst eine Gruppe an → die voi-Form: state."
      },
      { q: "Übersetze locker: „Mir geht es gut, danke. Und dir?\"", why: "Sto bene, grazie. E tu?" },
      {
        q: "Du bist in einer Bar. Der Barmann, der dich seit Jahren kennt, grüßt zuerst.",
        setting: "Die Bar im Viertel, acht Uhr morgens.",
        lines: [
          { tr: "Hallo! Wie geht's heute Morgen?" },
          { tr: "Sag, dass es dir gut geht, und gib die Frage zurück.", answerTr: "Gut, und dir?" },
          { tr: "Prima! Wie immer, einen Kaffee?" },
          { tr: "Sag ja und bedank dich.", answerTr: "Ja, danke!" }
        ]
      },
      {
        q: "Ordne der Antwort zu, was sie ausdrückt.",
        pairs: ["sehr gut", "kann nicht klagen", "es geht so", "schlecht"]
      },
      { tr: "Guten Abend, gnädige Frau, wie geht es Ihnen?" },
      { tr: "Kann nicht klagen, danke. Und Ihnen?" }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Test",
    title: "Test zu Einheit 1",
    objectives: ["Grüße, essere, stare, Genus und Artikel prüfen"],
    theory: [
      {
        p: "Zehn Fragen zur ganzen Einheit. Bestanden ab 70 %. Schau nicht in die Lektionen zurück — wenn dir etwas nicht einfällt, ist es besser, zurückzugehen und es zu wiederholen."
      }
    ],
    exercises: [
      {
        q: "Es ist halb sieben abends und du betrittst ein Geschäft. Was sagst du?",
        opts: ["Buongiorno", "Buonasera", "Buonanotte"],
        why: "Ab etwa 16-17 Uhr wechseln Italiener zu buonasera."
      },
      { q: "„Noi ___ in ritardo.\" (Wir sind spät dran.)", why: "essere, die noi-Form." },
      { q: "„Come ___?\" — du fragst eine Freundin, wie es ihr geht.", why: "stare, die tu-Form." },
      { q: "Wähl den bestimmten Artikel.", items: [, , , ] },
      {
        q: "Der Plural von „l'amico\":",
        opts: ["gli amici", "i amici", "le amiche"],
        why: "Das maskuline l' wird zu gli."
      },
      {
        q: "Welche Nomen ändern sich im Plural nicht?",
        opts: ["il caffè", "la sedia", "il bar", "la città"]
      },
      { q: "„Ein Wasser, bitte.\"", why: "Un'acqua, per favore — feminin vor Vokal." },
      { tr: "Die Studenten sind in der Bar." },
      { tr: "Zwei Kaffee und ein Cornetto, bitte." },
      { tr: "Guten Tag, wie geht es Ihnen?" }
    ]
  },
  "unit:a1-u02": { title: "Wer du bist", grammarNote: "avere · Zahlen · Berufe und Nationalitäten" },
  "lesson:a1-u02-l1": {
    theme: "Leute kennenlernen",
    title: "Sich vorstellen",
    objectives: [
      "deinen Namen nennen, sagen, woher du kommst und wo du wohnst",
      "das Verb chiamarsi verwenden",
      "anderen dieselben Fragen stellen"
    ],
    theory: [
      {
        h: "„Ich heiße\" ist ein reflexives Verb",
        p: "<strong>Chiamarsi</strong> heißt wörtlich „sich rufen\". Daher <em>mi chiamo</em>. Das Reflexivpronomen (<em>mi, ti, si…</em>) steht <b>vor</b> dem Verb, wie in deinem „ich nenne mich\" — nur dass Deutsch hier mit „heißen\" ganz ohne Pronomen auskommt."
      },
      {
        h: "Woher du kommst: essere di oder venire da",
        p: "Bei einer Stadt sagt man <em>sono di Berlino</em>; bei einem Land <em>vengo dalla Germania</em> oder <em>sono tedesco/a</em>. Ländernamen tragen einen Artikel (<em>l'Italia, la Germania</em>), Städtenamen nicht."
      },
      {
        trap: "Nationalitäten werden <b>kleingeschrieben</b>: <em>sono tedesca</em>, <em>un ragazzo italiano</em>. Für dich ist das doppelt ungewohnt, weil Deutsch nicht nur Nationalitätsnomen, sondern alle Nomen großschreibt. Im Italienischen wird ausschließlich am Satzanfang und bei Eigennamen großgeschrieben."
      },
      {
        h: "Abitare — irgendwo wohnen",
        p: "<em>Abitare a Roma</em> (Stadt), <em>abitare in Italia</em> (Land). Dieselbe a/in-Verteilung kommt später beim Reisen wieder, also lohnt es sich, sie gleich als Paar zu merken: <b>a + Stadt, in + Land</b>. Deutsch benutzt für beides „in\", deshalb ist hier nichts zu übertragen."
      }
    ],
    grammar: {
      title: "Chiamarsi (heißen) und nach jemandem fragen",
      table: {
        head: ["Person", "chiamarsi", "Beispiel"],
        rows: [
          ["io", "mi chiamo", "Mi chiamo Anna."],
          ["tu", "ti chiami", "Come ti chiami?"],
          ["lui / lei / Lei", "si chiama", "Come si chiama, scusi?"],
          ["noi", "ci chiamiamo", "Ci chiamiamo Rossi."],
          ["voi", "vi chiamate", "Come vi chiamate?"],
          ["loro", "si chiamano", "Si chiamano Marco e Luca."]
        ]
      },
      examples: [
        { tr: "Wie heißt du? — Ich heiße Eva." },
        { tr: "Woher kommst du? — Ich bin aus Hamburg." },
        { tr: "Ich bin Deutsche, aber ich wohne in Mailand.", note: "Nationalität kleingeschrieben" },
        { tr: "Wie alt bist du? — Ich bin achtundzwanzig.", note: "das Alter läuft immer über avere" },
        { tr: "Freut mich, Marco. — Die Freude ist ganz meinerseits." }
      ]
    },
    vocab: [
      "ich heiße…",
      "wie heißt du?",
      "woher kommst du?",
      "ich bin aus… (Stadt)",
      "ich wohne in… (Stadt)",
      "deutsch (m. / f.)",
      "italienisch (m. / f.)",
      "Vorname",
      "Nachname",
      "freut mich",
      "ich auch",
      "wirklich?"
    ],
    exercises: [
      {
        q: "Wie fragst du jemanden locker nach dem Namen?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "Die tu-Form: <i>ti chiami</i>. Die Lei-Version lautet <i>come si chiama?</i>"
      },
      {
        q: "Welcher Satz ist richtig geschrieben?",
        opts: ["Sono Tedesca.", "Sono tedesca.", "Sono la tedesca."],
        why: "Nationalitäten werden kleingeschrieben und stehen nach essere ohne Artikel."
      },
      { q: "Ergänze: „___ chiamo Marta.\"", why: "Reflexivpronomen der ersten Person: mi chiamo." },
      {
        q: "Ergänze: „Abito ___ Roma.\" (Ich wohne in Rom.)",
        why: "Städte nehmen <b>a</b>, Länder <b>in</b>: abito a Roma / abito in Italia."
      },
      {
        q: "Vervollständige die Vorstellung.",
        tr: "Hallo! Ich heiße Kate, ich bin aus Hamburg und wohne in Bologna.",
        why: "Die drei Verben, die in jedem ersten Satz über sich selbst vorkommen."
      },
      { tr: "Freut mich, ich heiße Luca." },
      {
        q: "Du lernst jemanden in einer Sprachschule kennen.",
        setting: "Erster Tag in einer Sprachschule in Florenz.",
        lines: [
          { tr: "Hallo! Ich bin Giulia. Und du, wie heißt du?" },
          { tr: "Stell dich mit deinem Namen vor.", answerTr: "Ich heiße Eva." },
          { tr: "Freut mich, Eva! Woher kommst du?" },
          { tr: "Sag, dass du aus Polen kommst — so lautet die aufgenommene Musterantwort.", answerTr: "Ich komme aus Polen." }
        ]
      },
      { tr: "Ich heiße Elena und wohne in Neapel." },
      { tr: "Freut mich!" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Grundgrammatik",
    title: "Haben, und die Zahlen von 0 bis 100",
    objectives: [
      "avere konjugieren",
      "Wendungen wie ho fame, ho freddo, ho ventotto anni verwenden",
      "bis hundert zählen und einen Preis nennen"
    ],
    theory: [
      {
        h: "Avere arbeitet dort, wo Deutsch „sein\" sagt",
        p: "Italienisch benutzt <strong>avere</strong>, wo Deutsch mit „sein\" arbeitet. <em>Ho fame</em> heißt wörtlich „ich habe Hunger\" — und das sagst du auch, während „ich bin hungrig\" seltener ist. Dieselbe Logik gilt für Durst, Kälte, Hitze, Angst, Müdigkeit und Alter. Bei „ich bin kalt\" wird es ernst: <em>sono freddo</em> hieße, du seist ein kalter Mensch."
      },
      {
        h: "Das Alter: immer avere",
        p: "<em>Ho trent'anni</em> — wörtlich „ich habe dreißig Jahre\", wo Deutsch „ich bin dreißig\" sagt. Achte auf den Apostroph: <em>trent'anni</em>, <em>vent'anni</em> — der Endvokal des Zehners fällt vor <em>anni</em> weg."
      },
      {
        h: "Das h, das man nie hört",
        p: "Die Formen <em>ho, hai, ha, hanno</em> beginnen mit einem stummen <b>h</b>. Es wird überhaupt nicht gesprochen: es existiert nur, um sie von anderen Wörtern zu trennen — <em>ho</em> (ich habe) gegen <em>o</em> (oder), <em>ha</em> (er hat) gegen <em>a</em> (zu)."
      },
      {
        h: "Zahlen: Zehner plus Einer",
        p: "Ab 20 werden Zahlen in einem Wort geschrieben: <em>ventidue</em>, <em>trentasei</em>. Und in dieser Reihenfolge — erst der Zehner, dann der Einer. Das deutsche „zweiundzwanzig\" dreht die Teile um; wer das überträgt, sagt <em>duevènti</em> und wird nicht verstanden. Vor <em>uno</em> und <em>otto</em> verliert der Zehner seinen Endvokal: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>."
      }
    ],
    grammar: {
      title: "Avere (haben) und die Zahlen",
      table: {
        head: ["Person", "avere", "Wendung"],
        rows: [
          ["io", "ho", "Ho fame. (Ich habe Hunger.)"],
          ["tu", "hai", "Hai freddo? (Ist dir kalt?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Er hat recht.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Wir haben Durst.)"],
          ["voi", "avete", "Avete tempo? (Habt ihr Zeit?)"],
          ["loro", "hanno", "Hanno paura. (Sie haben Angst.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "vor uno und otto verliert der Zehner seinen Vokal" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "Ich bin achtundzwanzig Jahre alt." }
      ]
    },
    vocab: [
      "ich habe Hunger",
      "ich habe Durst",
      "mir ist kalt / warm",
      "ich bin müde",
      "ich habe Angst",
      "ich habe recht",
      "ich brauche…",
      "wie alt bist du?",
      "was kostet das?",
      "Euro",
      "Nummer",
      "Telefonnummer"
    ],
    exercises: [
      { why: "Vier Formen beginnen mit stummem h: ho, hai, ha, hanno." },
      {
        q: "Wie sagt man „ich habe Hunger\"?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Körperliche Zustände laufen über avere: ho fame, ho sete, ho freddo."
      },
      { q: "Welche Zahl ist „settantasei\"?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Schreib in Ziffern: „novantatré\"", why: "novanta (90) + tre (3)." },
      {
        q: "Ergänze: „Ho vent___ anni.\" (Ich bin zwanzig.)",
        hint: "vor „anni\" fällt etwas weg",
        why: "Vent'anni — der Zehner verliert vor anni seinen Endvokal."
      },
      { q: "„Wie alt bist du?\"", why: "Wörtlich: „wie viele Jahre hast du\"." },
      {
        q: "Ordne die avere-Wendung ihrer Bedeutung zu.",
        pairs: ["ich habe Durst", "ich bin müde", "ich habe Angst", "ich habe recht"]
      },
      {
        q: "Vervollständige das Gespräch an der Kasse.",
        tr: "— Was macht das? — Zweiunddreißig Euro. — Ich habe nur zwanzig, tut mir leid."
      },
      { tr: "Ich bin fünfunddreißig und wohne in Turin." },
      { tr: "Was kostet ein Cappuccino?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Arbeit und Leute",
    title: "Berufe und Arbeit",
    objectives: [
      "sagen, was du beruflich machst",
      "fare il / essere un verwenden",
      "die weibliche Form von Berufsbezeichnungen bilden"
    ],
    theory: [
      {
        h: "Zwei Konstruktionen, zwei Nuancen",
        p: "„Ich bin Architekt\" hat zwei italienische Fassungen. <strong>Faccio l'architetto</strong> (wörtlich „ich mache den Architekten\") spricht vom ausgeübten Beruf und ist im Gespräch die häufigere. <strong>Sono architetto</strong> betont Identität oder Qualifikation. Nach <em>fare</em> steht der bestimmte Artikel; nach <em>essere</em> meist gar keiner — wie im deutschen „ich bin Architekt\"."
      },
      {
        h: "Weibliche Formen",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "unverändert: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Berufsbezeichnungen in Bewegung",
        p: "Formen wie <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> sind heute in Presse und Behördentexten Standard, obwohl sie vor zwanzig Jahren Streit auslösten. Gesprochen hört man noch <em>l'avvocato</em> für eine Frau. Es ist dieselbe Debatte wie um die Ärztin und die Bundeskanzlerin, im selben Stadium."
      },
      {
        contrast: "Deutsch bildet die weibliche Form fast durchgängig mit <em>-in</em>. Italienisch hat vier Muster, und welches greift, hängt vom Wortausgang ab — <em>-a</em>, <em>-essa</em>, <em>-trice</em> oder gar nichts. Es gibt kein universelles Suffix, also lernt man die Form mit dem Beruf."
      }
    ],
    grammar: {
      title: "Fare (machen, tun) — Präsens",
      note: "Unregelmäßig und zugleich eines der drei häufigsten italienischen Verben.",
      table: {
        head: ["Person", "fare", "Beispiel"],
        rows: [
          ["io", "faccio", "Faccio l'insegnante."],
          ["tu", "fai", "Che lavoro fai?"],
          ["lui / lei / Lei", "fa", "Fa il medico."],
          ["noi", "facciamo", "Facciamo colazione."],
          ["voi", "fate", "Che cosa fate?"],
          ["loro", "fanno", "Fanno gli avvocati."]
        ]
      },
      examples: [
        { tr: "Was machst du beruflich?" },
        { tr: "Ich bin Journalistin." },
        { tr: "Ich bin Ingenieur.", note: "nach essere meist ohne Artikel" },
        { tr: "Ich arbeite in einer Agentur." },
        { tr: "Im Moment arbeite ich nicht." },
        { tr: "Ich studiere noch, ich bin im letzten Jahr." }
      ]
    },
    vocab: [
      "Arbeit, Beruf",
      "Lehrer",
      "Arzt",
      "Ingenieur",
      "Anwalt",
      "Journalist",
      "Angestellter",
      "Koch",
      "Verkäufer",
      "Arbeiter",
      "Selbstständiger",
      "ich suche Arbeit"
    ],
    exercises: [
      { why: "Achte auf das doppelte c in faccio und facciamo." },
      {
        q: "Welcher Satz heißt „ich bin Lehrerin\" und klingt am natürlichsten?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + bestimmter Artikel ist die übliche Art, im Gespräch den Beruf zu nennen."
      },
      {
        q: "Wie lautet die weibliche Form von „il professore\"?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "Das Muster -e → -essa, wie studente → studentessa."
      },
      {
        q: "Ergänze: „Mia sorella fa ___ dottoressa.\"",
        why: "Nach fare kommt der bestimmte Artikel, passend zum Genus: la dottoressa."
      },
      { q: "Wähl den Artikel.", items: ["Köchin", "Ingenieur", "Studentin", "Arbeiter"] },
      { q: "„Was machst du beruflich?\" (locker)", why: "Che lavoro fai? — wörtlich „welche Arbeit machst du\"." },
      {
        q: "Ordne der männlichen Form die weibliche zu.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "Ich arbeite bei einer Bank in Mailand." },
      { tr: "Ich bin Architekt, ich arbeite mit meinem Bruder." },
      { tr: "Was machst du beruflich? Ich bin Journalistin." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Grundgrammatik",
    title: "Die erste Konjugation",
    objectives: [
      "jedes regelmäßige -are-Verb konjugieren",
      "die Schreibwechsel von cercare, pagare, mangiare beherrschen",
      "eine Verneinung und eine Frage bilden"
    ],
    theory: [
      {
        h: "Die größte und verlässlichste Gruppe",
        p: "Rund 70 % der italienischen Verben enden auf <strong>-are</strong>, und fast alle verhalten sich gleich. Du schneidest die Infinitivendung ab und hängst sechs eigene an: <em>-o, -i, -a, -iamo, -ate, -ano</em>. Ein Muster lernen, Hunderte Wörter beherrschen."
      },
      {
        h: "Eine Betonung, die man nicht sieht",
        p: "In der <em>loro</em>-Form liegt die Betonung auf der drittletzten Silbe: <b>par</b>-la-no, <b>la</b>-vo-ra-no. Nicht „parla-NO\". Der Unterschied ist hörbar, und Italiener merken ihn."
      },
      {
        h: "Rechtschreibung, die die Aussprache rettet",
        list: [
          "<b>-care / -gare</b> setzen ein <b>h</b> vor -i und -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>",
          "<b>-ciare / -giare</b> verlieren das <b>i</b> vor -i: <em>mangiare → mangi</em> (nicht „mangii\"), <em>cominciare → cominci</em>",
          "unbetontes <b>-iare</b> verliert ebenfalls ein i: <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Verneinung und Frage brauchen keinen Umbau",
        p: "Die Verneinung ist ein Wort, <strong>non</strong>, vor dem Verb: <em>non parlo italiano</em>. Und die Frage braucht gar keine Umstellung — die Intonation genügt: <em>Parli italiano?</em> Keine Inversion wie im deutschen „Sprichst du…\", kein Hilfsverb. Der Satz bleibt, wie er ist."
      }
    ],
    grammar: {
      title: "Parlare (sprechen) — das -ARE-Muster",
      table: {
        head: ["Person", "Endung", "parlare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "lavoro"],
          ["tu", "-i", "parli", "lavori"],
          ["lui / lei / Lei", "-a", "parla", "lavora"],
          ["noi", "-iamo", "parliamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "lavorate"],
          ["loro", "-ano", "parlano", "lavorano"]
        ]
      },
      examples: [
        { tr: "Ich spreche ein bisschen Italienisch." },
        { tr: "Ich spreche nicht gut, aber ich verstehe." },
        { tr: "Studierst du an der Universität?", note: "eine Frage allein durch die Intonation" },
        { tr: "Wir essen um acht." },
        { tr: "Suchst du Arbeit in Mailand?", note: "cercare → cerchi, mit h" },
        { tr: "Sie wohnen in der Nähe des Zentrums.", note: "Betonung: A-bi-ta-no" }
      ]
    },
    vocab: [
      "sprechen, reden",
      "arbeiten",
      "lernen, studieren",
      "wohnen",
      "essen",
      "kaufen",
      "suchen",
      "bezahlen",
      "zuhören",
      "anschauen",
      "warten",
      "anfangen"
    ],
    exercises: [
      { why: "Das Muster, das die Mehrzahl der italienischen Verben abdeckt." },
      {
        tr: "tu, noi — achte auf die Schreibung",
        why: "Cerchi und cerchiamo bekommen ein <b>h</b>, damit der k-Laut erhalten bleibt."
      },
      {
        q: "Welche Form ist richtig für „du isst\"?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Verben auf -giare verlieren das i vor der Endung -i: mangi."
      },
      {
        q: "Ergänze: „Loro ___ a Bologna.\" (Sie wohnen in Bologna.)",
        why: "abitare, die loro-Form: -ano."
      },
      {
        q: "Verneine: „Parlo italiano.\" → „___ parlo italiano.\"",
        why: "Ein Wort, non, vor dem Verb — das ist die ganze Verneinung."
      },
      { q: "„Wir suchen eine Wohnung in Rom.\"", why: "cercare → cerchiamo (mit h), a + Stadt." },
      {
        q: "Welche Formen gehören zu „studiare\"?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "„Studii\" gibt es nicht — das doppelte i wird zu einem."
      },
      { tr: "Samstags arbeite ich nicht.", why: "„Il sabato\" mit Artikel heißt „samstags\", also regelmäßig." },
      { tr: "Ich lerne seit drei Monaten Italienisch." },
      { tr: "Ich spreche nicht gut, aber ich verstehe fast alles." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Test",
    title: "Test zu Einheit 2",
    objectives: ["avere, fare, chiamarsi, die Zahlen und die erste Konjugation prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„___ chiamo Peter.\"" },
      { q: "„Quanti anni ___?\" (Wie alt bist du?)" },
      { q: "Welche Zahl ist „ottantaquattro\"?", opts: ["48", "84", "94"] },
      { q: "„Ich habe Hunger\" auf Italienisch:", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "Welche Form ist richtig für „du bezahlst\"?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare setzt ein h vor -i."
      },
      { q: "Ergänze.", tr: "Ich bin Deutsche, ich wohne in Verona und bin Lehrerin." },
      { q: "„Ich spreche kein Italienisch.\"" },
      { tr: "Ich bin siebenundzwanzig und suche Arbeit." },
      { tr: "Ich heiße Anna und bin Journalistin." }
    ]
  },
  "unit:a1-u03": {
    title: "Aperitivo und Essen",
    grammarNote: "piacere · Teilungsartikel · -ere und -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Essen",
    title: "Das Verb piacere",
    objectives: [
      "sagen, was dir gefällt und was nicht",
      "zwischen piace und piacciono wählen",
      "andere fragen, was ihnen gefällt"
    ],
    theory: [
      {
        h: "Der Satz steht auf dem Kopf",
        p: "<strong>Piacere</strong> heißt nicht „mögen\", sondern „gefallen\". <em>Mi piace la pizza</em> ist wörtlich „mir gefällt die Pizza\". Grammatisches Subjekt ist <b>die Sache</b>, und wer sie mag, erscheint als Dativobjekt (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "Deshalb hat das Verb zwei Formen",
        p: "Weil die Sache das Subjekt ist, bestimmt sie den Numerus: <em>mi piace <b>il</b> caffè</em> (eine Sache) gegen <em>mi piacciono <b>gli</b> spaghetti</em> (mehrere). Vor einem Infinitiv steht immer der Singular: <em>mi piace viaggiare</em>."
      },
      {
        contrast: "Diese Konstruktion hast du bereits: „mir gefällt der Kaffee\", „mir gefallen die Spaghetti\" — Dativ für die Person, Kongruenz mit der Sache, alles an seinem Platz. Übersetz <em>mi piace</em> also mit „gefällt mir\", nicht mit „ich mag\", und die Angleichung erklärt sich von selbst. Und der Dativ, den du aus dem Deutschen kennst, zeigt dir hier direkt die richtige Pronomenform."
      },
      {
        h: "Wem es gefällt: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — mir",
          "<b>ti</b> piace — dir",
          "<b>gli</b> piace — ihm; <b>le</b> piace — ihr",
          "<b>ci</b> piace — uns · <b>vi</b> piace — euch · <b>gli</b> piace — ihnen"
        ]
      },
      {
        trap: "Die Verneinung steht vor dem Pronomen, nicht vor dem Verb: <b>non</b> mi piace. Niemals „mi non piace\"."
      }
    ],
    grammar: {
      title: "Piacere — das Satzmuster",
      note: "[Pronomen] + piace/piacciono + [die Sache, mit ihrem Artikel]",
      table: {
        head: ["was gefällt", "Form", "Beispiel"],
        rows: [
          ["eine Sache", "piace", "Mi piace il vino rosso."],
          ["mehrere Sachen", "piacciono", "Mi piacciono i dolci."],
          ["eine Tätigkeit", "piace", "Mi piace cucinare."],
          ["Verneinung", "non … piace", "Non mi piace il pesce crudo."],
          ["Frage", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "Kaffee gefällt mir sehr." },
        { tr: "Magst du Spritz?" },
        { tr: "Warmes Bier mögen wir nicht." },
        { tr: "Sie tanzt gern." },
        { tr: "Marco mag Fisch.", note: "vor einem Namen kommt „a\"" },
        { tr: "Das würde ich gern probieren.", note: "eine Konditionalform — als Block lernen" }
      ]
    },
    vocab: [
      "Aperitivo (Getränk mit Snacks)",
      "Spritz",
      "Rotwein / Weißwein",
      "Bier",
      "Oliven",
      "Chips",
      "salzige Snacks",
      "Rohschinken",
      "Käse",
      "Süßes, Desserts",
      "Fisch",
      "Fleisch",
      "kochen",
      "probieren"
    ],
    culture: {
      title: "Mit italienischen Augen: Aperitivo ist kein Abendessen",
      text: "<p>Der <b>Aperitivo</b> beginnt gegen halb sieben und läuft bis etwa halb neun. Man zahlt das Getränk (7 bis 12 Euro je nach Stadt), das Essen an der Theke gehört dazu. In Mailand ist daraus ein Büfett namens <i>apericena</i> geworden, halbwegs ein Abendessen.</p><p>Die Regel, die niemand ausspricht: <b>nimm eine vernünftige Menge</b>. Ein zum Turm gestapelter Teller verrät eine Ausländerin schneller als der Akzent.</p><p>Die Klassiker: <i>spritz</i> (mit Aperol oder Campari), <i>negroni</i>, ein Glas Wein. Bier geht auch, auch wenn Puristen die Nase rümpfen.</p>"
    },
    exercises: [
      {
        q: "„___ piacciono le olive.\" Warum piacciono und nicht piace?",
        opts: ["Weil es um mehrere Personen geht", "Weil „le olive\" Plural ist", "Weil es eine Vergangenheitsform ist"],
        why: "Das Verb richtet sich nach der Sache, die gefällt — und die steht im Plural."
      },
      { q: "Ergänze: „Mi ___ il vino rosso.\"", why: "Eine Sache im Singular → piace." },
      { q: "Ergänze: „Non mi ___ i film horror.\"", why: "„I film\" ist Plural → piacciono." },
      {
        q: "Welcher Satz ist richtig?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non steht vor der ganzen Gruppe aus Pronomen und Verb."
      },
      {
        q: "Wie sagt man „Marco mag Fisch\"?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "Wer etwas mag, steht mit der Präposition <b>a</b> vor dem Namen — dein Dativ."
      },
      { q: "„Ich koche gern.\"", why: "Vor einem Infinitiv steht immer der Singular piace." },
      { q: "Ordne das Pronomen der Person zu.", pairs: ["mir", "dir", "ihr", "uns"] },
      {
        q: "Vervollständige das Gespräch beim Aperitivo.",
        tr: "— Magst du Spritz? — Ja, sehr! Aber Oliven mag ich nicht."
      },
      { tr: "Italienische Käsesorten mag ich sehr." },
      { tr: "Den Aperitivo mag ich, die Oliven nicht." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Grundgrammatik",
    title: "Die zweite Konjugation und c'è / ci sono",
    objectives: [
      "regelmäßige -ere-Verben konjugieren",
      "c'è und ci sono verwenden",
      "beschreiben, was es an einem Ort gibt"
    ],
    theory: [
      {
        h: "Fast wie -are, aber nicht ganz",
        p: "Die <strong>-ere</strong>-Gruppe unterscheidet sich von der ersten nur in drei Endungen: <em>-e</em> statt <em>-a</em>, <em>-ete</em> statt <em>-ate</em>, <em>-ono</em> statt <em>-ano</em>. Die <em>noi</em>-Form (<em>-iamo</em>) teilen sich alle drei Konjugationen — die einfachste Endung der Sprache."
      },
      {
        h: "Hier verstecken sich die meisten Unregelmäßigen",
        p: "Viele sehr häufige -ere-Verben haben schräge Formen: <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Ihre Unregelmäßigkeit zeigt sich vor allem in der Vergangenheit und im Partizip, die in A2 drankommen."
      },
      {
        h: "C'è und ci sono",
        p: "<strong>C'è</strong> („es gibt\", eine Sache) und <strong>ci sono</strong> („es gibt\", mehrere) sagen, dass etwas an einem Ort existiert. Die Wahl hängt von der Zahl ab, nicht von der Person: <em>c'è un problema</em>, <em>ci sono due problemi</em>."
      },
      {
        contrast: "Und genau hier liegt der Unterschied: „es gibt\" ist unveränderlich und gilt für eines wie für tausend. Italienisch zwingt zur Wahl, und „c'è due problemi\" fällt sofort auf. Zähl, bevor du sprichst."
      },
      {
        trap: "Verwechsle <b>c'è</b> (es gibt) nicht mit <b>è</b> (es ist). <em>Il ristorante è chiuso</em>: das Restaurant ist geschlossen. <em>C'è un ristorante qui vicino</em>: hier in der Nähe gibt es ein Restaurant."
      }
    ],
    grammar: {
      title: "Leggere (lesen) — das -ERE-Muster",
      table: {
        head: ["Person", "Endung", "leggere", "prendere"],
        rows: [
          ["io", "-o", "leggo", "prendo"],
          ["tu", "-i", "leggi", "prendi"],
          ["lui / lei / Lei", "-e", "legge", "prende"],
          ["noi", "-iamo", "leggiamo", "prendiamo"],
          ["voi", "-ete", "leggete", "prendete"],
          ["loro", "-ono", "leggono", "prendono"]
        ]
      },
      examples: [
        { tr: "Ich nehme einen Kaffee.", note: "„prendere\" ist das übliche Verb zum Bestellen" },
        { tr: "Liest du die Karte?" },
        { tr: "Ich sehe den Kellner nicht." },
        { tr: "Gibt es einen freien Tisch?" },
        { tr: "An der Theke sind zwei Plätze frei." },
        { tr: "Wir schreiben den Namen für die Reservierung auf." }
      ]
    },
    vocab: [
      "nehmen, bestellen",
      "lesen",
      "schreiben",
      "sehen",
      "fragen",
      "antworten",
      "stellen, legen",
      "schließen",
      "es gibt",
      "Platz",
      "frei / besetzt",
      "hier in der Nähe"
    ],
    exercises: [
      { why: "Beachte -e, -ete, -ono — das ist der ganze Unterschied zur -are-Gruppe." },
      {
        q: "Welche Endung teilen sich alle drei Konjugationen?",
        opts: ["-o in der io-Form", "-iamo in der noi-Form", "-ono in der loro-Form"],
        why: "Die noi-Form ist immer -iamo, egal in welcher Gruppe."
      },
      { q: "Ergänze: „___ un tavolo libero?\" (Gibt es einen freien Tisch?)", why: "Ein Tisch → c'è." },
      {
        q: "Ergänze: „___ tre persone in fila.\" (Es stehen drei Leute in der Schlange.)",
        why: "Plural → ci sono."
      },
      {
        q: "„Il bar è chiuso\" gegen „C'è un bar qui vicino\" — worin liegt der Unterschied?",
        opts: [
          "In nichts, das sind Synonyme",
          "Der erste beschreibt die Bar, der zweite sagt, dass es eine in der Nähe gibt",
          "Der zweite steht in der Vergangenheit"
        ],
        why: "è beschreibt, c'è stellt fest, dass etwas an einem Ort vorhanden ist."
      },
      { q: "„Ich nehme ein Bier, und du?\"", why: "Prendere ist in Italien das Standardverb zum Bestellen." },
      {
        q: "Welche Verben gehören zur -ere-Gruppe?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "Ich sehe den Kellner nicht." },
      { tr: "Gibt es einen Tisch für zwei?" },
      { tr: "Wir nehmen zwei Spritz." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Grundgrammatik",
    title: "Die dritte Konjugation und das -isc--Muster",
    objectives: [
      "Verben wie dormire und Verben wie capire konjugieren",
      "erkennen, welche -ire-Verben den -isc--Einschub brauchen",
      "preferire für eine Vorliebe verwenden"
    ],
    theory: [
      {
        h: "Eine Endung, zwei Verhaltensweisen",
        p: "Die Verben auf <strong>-ire</strong> zerfallen in zwei Untergruppen. Die erste (<em>dormire, partire, sentire, aprire, offrire</em>) konjugiert geradeaus. Die zweite (<em>capire, finire, preferire, pulire, spedire</em>) schiebt <b>-isc-</b> in vier Formen ein: <em>io, tu, lui/lei, loro</em>. Die Formen von <em>noi</em> und <em>voi</em> kommen ohne aus."
      },
      {
        h: "Woran man die Gruppe erkennt",
        p: "Es gibt keine Regel — man lernt es. Immerhin ist die <em>-isc-</em>-Gruppe die größere und nimmt fast alle neueren Verben auf (<em>gestire, inserire, garantire</em>). Wörterbücher markieren sie mit <i>(-isc-)</i> beim Eintrag."
      },
      {
        contrast: "Deutsch hat nichts Vergleichbares: es gibt keinen Einschub, der in vier Formen auftaucht und in zwei fehlt. Hier ist keine Intuition zu übertragen, hier ist eine Liste zu lernen. Der Trost: der Einschub ist immer derselbe, und sein Rhythmus prägt sich schnell ein."
      },
      {
        tip: "Das -isc--Muster hat die Form einer Klammer: vier Formen mit dem Einschub außen, zwei ohne ihn in der Mitte. Lern den Rhythmus: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      }
    ],
    grammar: {
      title: "Dormire (ohne -isc-) gegen capire (mit -isc-)",
      table: {
        head: ["Person", "dormire", "capire", "auf Deutsch"],
        rows: [
          ["io", "dormo", "capisco", "ich schlafe / ich verstehe"],
          ["tu", "dormi", "capisci", "du schläfst / du verstehst"],
          ["lui / lei", "dorme", "capisce", "er schläft / er versteht"],
          ["noi", "dormiamo", "capiamo", "wir schlafen / wir verstehen"],
          ["voi", "dormite", "capite", "ihr schlaft / ihr versteht"],
          ["loro", "dormono", "capiscono", "sie schlafen / sie verstehen"]
        ]
      },
      examples: [
        { tr: "Ich verstehe nicht, können Sie das wiederholen?" },
        { tr: "Ich hätte lieber einen Tisch draußen." },
        { tr: "Wann bist du mit der Arbeit fertig?" },
        { tr: "Das Geschäft öffnet um neun.", note: "aprire — ohne -isc-" },
        { tr: "Wir fahren morgen früh los." },
        { tr: "Sie verstehen alles." }
      ]
    },
    vocab: [
      "verstehen",
      "beenden",
      "bevorzugen",
      "putzen",
      "schicken",
      "schlafen",
      "abfahren, losfahren",
      "öffnen",
      "einladen (eine Runde)",
      "hören, spüren",
      "folgen",
      "können Sie das wiederholen?"
    ],
    exercises: [
      { why: "Die Klammer: -isc- bei io, tu, lui/lei und loro; nicht bei noi und voi." },
      { why: "Dormire läuft geradeaus durch, ohne Einschub." },
      {
        q: "Welches Verb braucht den -isc--Einschub?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Ergänze: „Noi non ___ bene.\" (Wir verstehen nicht gut.)",
        hint: "die noi-Form hat keinen Einschub",
        why: "Capiamo — bei noi und voi fällt das -isc- weg."
      },
      { q: "Ergänze: „Loro ___ alle sette.\" (Sie sind um sieben fertig.)", why: "finire mit -isc- in der loro-Form." },
      { q: "„Ich hätte lieber einen Tisch draußen.\"" },
      { q: "Welche Formen enthalten -isc-?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "Ich verstehe nicht, können Sie das wiederholen?" },
      { tr: "Ich fahre morgen lieber früh los." },
      { tr: "Entschuldigung, ich verstehe nicht. Können Sie das wiederholen?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Essen",
    title: "Der Teilungsartikel und die Mengen",
    objectives: [
      "eine unbestimmte Menge mit del, della, dei… ausdrücken",
      "un po' di und un chilo di verwenden",
      "im Laden einkaufen"
    ],
    theory: [
      {
        h: "Etwas von etwas — ohne ein Wort für „etwas\"",
        p: "Italienisch drückt eine unbestimmte Menge mit dem <strong>Teilungsartikel</strong> aus: die Präposition <em>di</em> mit dem bestimmten Artikel verschmolzen. <em>Vorrei del pane</em> — „ich hätte gern Brot\". Im Plural deckt er ab, was Deutsch mit „ein paar\" sagt: <em>dei pomodori</em>."
      },
      {
        h: "Die Formen",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "Die Alternativen",
        p: "Statt des Teilungsartikels kannst du <strong>un po' di</strong> („ein bisschen\") oder ein Maß nehmen: <em>un chilo di, un etto di, mezzo litro di</em>. Bei Verneinung verschwindet der Teilungsartikel meist: <em>non ho pane</em>, nicht „non ho del pane\"."
      },
      {
        contrast: "Das ist die Konstruktion, die im Deutschen fehlt. Wo du „ich hätte gern Brot\" sagst, ohne irgendetwas davorzusetzen, will das Italienische <em>del pane</em>. Es wegzulassen ist nicht grammatisch falsch, klingt aber abgehackt — wie eine vorgelesene Einkaufsliste. Es ist eines der Details, die die Natürlichkeit am schnellsten heben."
      },
      {
        tip: "<b>Un etto</b> sind 100 Gramm und die Arbeitseinheit an der Wursttheke: <em>due etti di prosciutto</em> = 200 g Schinken."
      }
    ],
    grammar: {
      title: "Der Teilungsartikel und die Mengenangaben",
      table: {
        head: ["Kontext", "Form", "Beispiel"],
        rows: [
          ["m. + Konsonant", "del", "del pane"],
          ["m. + s+Kons., z", "dello", "dello zucchero"],
          ["+ Vokal", "dell'", "dell'acqua, dell'olio"],
          ["f. + Konsonant", "della", "della carne"],
          ["m. Plural", "dei / degli", "dei pomodori, degli spinaci"],
          ["f. Plural", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "Ich hätte gern Brot." },
        { tr: "Ich kaufe Äpfel und Trauben." },
        { tr: "Ein bisschen Salz, nicht zu viel." },
        { tr: "Zweihundert Gramm Rohschinken." },
        { tr: "Einen halben Liter Milch." },
        { tr: "Ich habe keinen Zucker zu Hause.", note: "kein Teilungsartikel bei Verneinung" }
      ]
    },
    vocab: [
      "Brot",
      "Milch",
      "Wasser",
      "Zucker",
      "Salz",
      "Öl, Olivenöl",
      "Tomaten",
      "Äpfel",
      "hundert Gramm",
      "ein Kilo",
      "ein bisschen",
      "ein halber Liter",
      "das reicht, danke",
      "wie viel darf es sein?"
    ],
    exercises: [
      {
        q: "Wie bittest du um Brot?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "Der Teilungsartikel <b>del</b> drückt eine unbestimmte Menge aus."
      },
      {
        q: "Ergänze: „Compro ___ acqua.\" (Ich kaufe Wasser.)",
        why: "di + l' = dell', weil acqua mit einem Vokal beginnt."
      },
      {
        q: "Ergänze: „Vorrei ___ mele.\" (Ich hätte gern ein paar Äpfel.)",
        why: "di + le = delle, feminin Plural."
      },
      {
        q: "Wähl den Teilungsartikel.",
        items: ["Brot", "Zucker", "Fleisch", "Öl", "Tomaten", "Spinat"]
      },
      {
        q: "Wie viel sind „due etti\"?",
        opts: ["20 Gramm", "200 Gramm", "2 Kilo"],
        why: "Un etto sind 100 g, also due etti = 200 g."
      },
      { q: "„Einen halben Liter Milch, bitte.\"" },
      {
        q: "Du stehst an der Theke eines Lebensmittelladens.",
        setting: "Eine alimentari im Viertel, an der Wursttheke.",
        lines: [
          { tr: "Guten Tag! Was darf es sein?" },
          { tr: "Bitte um 200 g Schinken.", answerTr: "Zweihundert Gramm Schinken, bitte." },
          { tr: "Bitte sehr. Sonst noch etwas?" },
          { tr: "Bitte auch um Brot.", answerTr: "Auch Brot, danke." }
        ]
      },
      { q: "Vervollständige den Einkaufszettel.", tr: "Ich kaufe Brot, Wasser und Tomaten." },
      { tr: "Ein Kilo Tomaten und Basilikum, bitte." },
      { tr: "Zweihundert Gramm Käse, bitte. Das ist alles." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Test",
    title: "Test zu Einheit 3",
    objectives: ["piacere, die -ere- und -ire-Konjugationen und den Teilungsartikel prüfen"],
    theory: [{ p: "Zehn Fragen. Bestanden ab 70 %." }],
    exercises: [
      { q: "„Mi ___ gli spaghetti.\" (Mir gefallen Spaghetti.)" },
      { q: "„Non mi ___ il pesce crudo.\"" },
      {
        q: "„Marco mag Wein\" heißt:",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "„___ due posti liberi.\" (Es gibt zwei freie Plätze.)" },
      { q: "Der Teilungsartikel:", items: [, , , ] },
      { q: "„Ich bevorzuge Weißwein.\"" },
      { tr: "Es gibt Oliven und Käse." },
      { tr: "Der italienische Aperitivo gefällt mir sehr." }
    ]
  }
});
