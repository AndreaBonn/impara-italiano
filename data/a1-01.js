/* ============================================================
   A1 — część 1: jednostki 1–3
   Al bar · Chi sei? · L'aperitivo
   ============================================================ */
LINGUAI.addUnits("A1", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 1 — AL BAR
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u01",
  icon: "☕",
  titleIt: "Al bar",
  titlePl: "Rytuał kawy",
  grammarPl: "essere · rodzaj i liczba · rodzajniki",
  lessons: [

  /* ---------- 1.1 ---------- */
  {
    id: "a1-u01-l1",
    cefr: "A1",
    themePl: "Życie codzienne",
    titleIt: "Buongiorno, un caffè",
    titlePl: "Powitania i pierwsze zamówienie",
    objectivesPl: [
      "przywitać się i pożegnać w odpowiedniej porze dnia",
      "zamówić kawę tak, jak robią to Włosi",
      "odmienić czasownik essere w czasie teraźniejszym"
    ],
    theory: [
      { h: "Powitanie zależy od godziny, nie od nastroju",
        p: "Włoskie powitania dzielą dobę na dwie części. <strong>Buongiorno</strong> obowiązuje od rana mniej więcej do wczesnego popołudnia. Potem, gdzieś między 14 a 17 (granica jest płynna i zależy od regionu), przechodzi się na <strong>buonasera</strong> — i mówi się tak także wchodząc do baru o 18, choć po polsku „dobry wieczór” brzmiałoby wtedy dziwnie. <strong>Buonanotte</strong> to nie powitanie, tylko pożegnanie przed snem." },
      { h: "Ciao to nie zawsze bezpieczny wybór",
        p: "<strong>Ciao</strong> znaczy jednocześnie „cześć” i „pa”, ale używa się go tylko z osobami, do których mówisz <em>tu</em>: znajomi, rówieśnicy, rodzina, młodzi barmani. Do kelnera po pięćdziesiątce, do urzędnika, do właścicielki sklepu, którą widzisz pierwszy raz — <strong>buongiorno</strong>. Wejście z „ciao” do apteki brzmi tak, jak polskie „siema” w banku." },
      { pl: "W polskim „dzień dobry” działa cały dzień. Po włosku ta jedna forma nie wystarczy — musisz wybrać porę. To najczęstszy błąd Polaków w pierwszym tygodniu we Włoszech." },
      { h: "Essere — czasownik, bez którego nie zbudujesz zdania",
        p: "<strong>Essere</strong> znaczy „być”. Jego formy nie przypominają bezokolicznika (<em>sono</em>, <em>sei</em>, <em>è</em>…), więc nie da się ich wyprowadzić z reguły — trzeba je po prostu znać. Dobra wiadomość: powtórzysz je tyle razy, że wejdą same." },
      { tip: "Zaimki osobowe (io, tu, lui…) zwykle się pomija, bo końcówka czasownika już mówi, kto wykonuje czynność. <em>Sono polacca</em> wystarczy; <em>io sono polacca</em> dodaje nacisk: „<b>ja</b> jestem Polką (a ty nie)”." }
    ],
    grammar: {
      title: "Essere (być) — czas teraźniejszy",
      note: "Zwróć uwagę na <b>è</b> z akcentem — bez niego <em>e</em> znaczy „i”. To dwa różne słowa.",
      table: {
        head: ["osoba", "forma", "po polsku"],
        rows: [
          ["io", "sono", "jestem"],
          ["tu", "sei", "jesteś (nieformalnie)"],
          ["lui / lei / Lei", "è", "on / ona jest; Pan/Pani jest"],
          ["noi", "siamo", "jesteśmy"],
          ["voi", "siete", "jesteście"],
          ["loro", "sono", "są"]
        ]
      },
      examples: [
        ["Buongiorno, un caffè per favore.", "Dzień dobry, poproszę kawę.", "„un caffè” to espresso — nie trzeba tego doprecyzowywać"],
        ["Sono Anna, piacere.", "Jestem Anna, miło mi."],
        ["Tu sei di Roma?", "Jesteś z Rzymu?"],
        ["Il caffè è caldo.", "Kawa jest gorąca."],
        ["Siamo in ritardo.", "Jesteśmy spóźnieni."],
        ["Loro sono al bar.", "Oni są w barze."]
      ]
    },
    vocab: [
      { it: "buongiorno", pl: "dzień dobry (rano i po południu)" },
      { it: "buonasera", pl: "dobry wieczór (od ok. 16-17)" },
      { it: "buonanotte", pl: "dobranoc (tylko przy pożegnaniu)" },
      { it: "ciao", pl: "cześć / pa (nieformalnie)" },
      { it: "arrivederci", pl: "do widzenia (formalnie)" },
      { it: "per favore", pl: "proszę (prosząc o coś)" },
      { it: "grazie", pl: "dziękuję" },
      { it: "prego", pl: "proszę bardzo / nie ma za co" },
      { it: "un caffè", pl: "espresso", ex: "Un caffè, per favore." },
      { it: "un cappuccino", pl: "cappuccino", ex: "Solo di mattina!" },
      { it: "un cornetto", pl: "rogalik" },
      { it: "il bar", pl: "bar, kawiarnia" },
      { it: "piacere", pl: "miło mi (przy poznaniu)" },
      { it: "scusi", pl: "przepraszam (formalnie)" }
    ],
    dialogue: {
      titleIt: "Al banco",
      lines: [
        { who: "🧑‍🍳", it: "Buongiorno! Dica pure.", pl: "Dzień dobry! Słucham." },
        { who: "🙋", it: "Buongiorno. Un caffè e un cornetto, per favore.", pl: "Dzień dobry. Kawę i rogalika poproszę." },
        { who: "🧑‍🍳", it: "Subito. Sono due euro e cinquanta.", pl: "Już podaję. To dwa pięćdziesiąt." },
        { who: "🙋", it: "Ecco. Grazie!", pl: "Proszę. Dziękuję!" },
        { who: "🧑‍🍳", it: "Prego, buona giornata!", pl: "Proszę bardzo, miłego dnia!" }
      ]
    },
    culture: {
      titlePl: "Okiem Włocha: kawa ma swoje zasady",
      textPl: "<p>We włoskim barze kawę pije się <b>na stojąco, przy barze</b> (al banco) i trwa to trzy minuty. Za stolik płaci się osobno, czasem dwa razy więcej — to nie oszustwo, tylko dwie różne usługi w cenniku.</p>" +
        "<p><b>Cappuccino po jedenastej</b> to sygnał, że jesteś turystą: mleko uchodzi za ciężkie i pije się je do śniadania. Po obiedzie zamawia się <i>un caffè</i>, ewentualnie <i>un macchiato</i> — espresso z kroplą mleka.</p>" +
        "<p>Płaci się zwykle <b>po wypiciu</b>, chyba że bar ma kasę przy wejściu — wtedy najpierw <i>lo scontrino</i> (paragon), potem kawa.</p>"
    },
    exercises: [
      { t: "mcq", q: "Wchodzisz do baru o 9:30 rano. Co mówisz?",
        opts: ["Buonasera", "Buongiorno", "Buonanotte"], a: 1,
        why: "Buongiorno obowiązuje od rana do wczesnego popołudnia. Buonanotte to wyłącznie pożegnanie przed snem." },
      { t: "mcq", q: "Kelner ma jakieś sześćdziesiąt lat i widzisz go pierwszy raz. Które powitanie jest właściwe?",
        opts: ["Ciao!", "Buongiorno!", "Buonanotte!"], a: 1,
        why: "„Ciao” zarezerwuj dla osób, do których mówisz na „ty”. W barze wobec obcej osoby — buongiorno." },
      { t: "conj", verb: "essere", tense: "pres", persons: [0, 1, 2, 3, 4, 5],
        pl: "Cała odmiana — bez ściągi.",
        why: "Essere jest nieregularny w każdej osobie. To jedna z dwóch odmian, których naprawdę trzeba się nauczyć na pamięć." },
      { t: "fill", q: "Uzupełnij: „Anna e Marco ___ italiani.” (Anna i Marco są Włochami.)",
        a: ["sono"], hint: "trzecia osoba liczby mnogiej",
        why: "Loro sono. Uwaga: forma „sono” obsługuje jednocześnie <b>io</b> i <b>loro</b> — kontekst rozstrzyga, o kogo chodzi." },
      { t: "trans", dir: "pl-it", q: "Przetłumacz: „Jestem z Polski.”",
        a: ["sono dalla polonia", "sono della polonia", "vengo dalla polonia"],
        hint: "essere + da + kraj",
        why: "Sono dalla Polonia. Nazwy krajów biorą rodzajnik: la Polonia → dalla Polonia." },
      { t: "order", pl: "Poproszę kawę i rogalika.",
        tokens: ["Un", "caffè", "e", "un", "cornetto,", "per", "favore"],
        a: ["un caffè e un cornetto per favore"],
        why: "Włoski nie ma osobnego słowa na „poproszę” — mówi się po prostu, co chcesz, i dodaje <i>per favore</i>." },
      { t: "match", q: "Połącz zwroty z ich znaczeniem.",
        pairs: [["grazie", "dziękuję"], ["prego", "proszę bardzo"], ["scusi", "przepraszam (formalnie)"], ["arrivederci", "do widzenia"]] },
      { t: "listen", it: "Buonasera, un cappuccino per favore.", pl: "Dobry wieczór, poproszę cappuccino.",
        why: "Uwaga na podwójne <b>cc</b> i <b>pp</b> — po włosku słychać je wyraźnie dłużej niż pojedyncze." },
      { t: "speak", it: "Buongiorno, un caffè per favore.", pl: "Dzień dobry, poproszę kawę.",
        why: "„Caffè” ma akcent na ostatniej sylabie: kaf-FE, nie KA-fe." }
    ]
  },

  /* ---------- 1.2 ---------- */
  {
    id: "a1-u01-l2",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Maschile o femminile?",
    titlePl: "Rodzaj rzeczownika",
    objectivesPl: [
      "rozpoznać rodzaj rzeczownika po końcówce",
      "utworzyć liczbę mnogą według wzorca -o/-i, -a/-e, -e/-i",
      "poradzić sobie z rzeczownikami nieodmiennymi typu il bar, la città"
    ],
    theory: [
      { h: "Dwa rodzaje, nie trzy",
        p: "Włoski ma tylko rodzaj męski i żeński — nijakiego nie ma. Każdy rzeczownik należy do jednego z nich, także wtedy, gdy chodzi o przedmiot: <em>il tavolo</em> (stół) jest męski, <em>la sedia</em> (krzesło) żeńska. Rodzaj nie jest kwestią logiki, tylko formy słowa." },
      { h: "Trzy wzorce, które załatwiają większość słów",
        list: [
          "końcówka <b>-o</b> → rodzaj męski, liczba mnoga <b>-i</b>: <em>il libro → i libri</em>",
          "końcówka <b>-a</b> → rodzaj żeński, liczba mnoga <b>-e</b>: <em>la casa → le case</em>",
          "końcówka <b>-e</b> → rodzaj męski <i>albo</i> żeński, liczba mnoga zawsze <b>-i</b>: <em>il fiore → i fiori</em>, <em>la chiave → le chiavi</em>"
        ] },
      { trap: "Rzeczowniki na <b>-e</b> to jedyna grupa, przy której trzeba zapamiętać rodzaj razem ze słowem. Ucz się ich zawsze z rodzajnikiem: nie „fiore”, tylko <b>il fiore</b>." },
      { h: "Słowa, które się nie zmieniają",
        p: "Rzeczowniki zakończone akcentowaną samogłoską (<em>la città</em>, <em>il caffè</em>) oraz zapożyczenia (<em>il bar</em>, <em>lo sport</em>, <em>il film</em>) mają tę samą formę w liczbie pojedynczej i mnogiej. Liczbę rozpoznasz wtedy tylko po rodzajniku: <em>la città → le città</em>." },
      { pl: "Polski ma rodzaj nijaki i skomplikowaną deklinację; włoski nie ma przypadków w ogóle. Relacje, które polski wyraża końcówką („kawy”, „kawie”), włoski wyraża przyimkiem: <em>del caffè</em>, <em>al caffè</em>." }
    ],
    grammar: {
      title: "Rodzaj i liczba mnoga rzeczownika",
      table: {
        head: ["wzorzec", "liczba pojedyncza", "liczba mnoga", "po polsku"],
        rows: [
          ["-o → -i (m)", "il libro", "i libri", "książka / książki"],
          ["-a → -e (ż)", "la ragazza", "le ragazze", "dziewczyna / dziewczyny"],
          ["-e → -i (m)", "il ristorante", "i ristoranti", "restauracja / restauracje"],
          ["-e → -i (ż)", "la stazione", "le stazioni", "dworzec / dworce"],
          ["nieodmienne", "la città", "le città", "miasto / miasta"],
          ["zapożyczenia", "il bar", "i bar", "bar / bary"]
        ]
      },
      examples: [
        ["Il cornetto è buono.", "Rogalik jest dobry."],
        ["I cornetti sono buoni.", "Rogaliki są dobre.", "przymiotnik też zmienia końcówkę"],
        ["La stazione è vicina.", "Dworzec jest blisko.", "„stazione” jest żeńska mimo końcówki -e"],
        ["Due caffè, per favore.", "Dwie kawy poproszę.", "caffè nie zmienia formy"]
      ]
    },
    vocab: [
      { it: "il libro", pl: "książka" },
      { it: "la casa", pl: "dom" },
      { it: "il tavolo", pl: "stół" },
      { it: "la sedia", pl: "krzesło" },
      { it: "il ristorante", pl: "restauracja" },
      { it: "la stazione", pl: "dworzec" },
      { it: "la chiave", pl: "klucz" },
      { it: "il fiore", pl: "kwiat" },
      { it: "la città", pl: "miasto" },
      { it: "il caffè", pl: "kawa / bar" },
      { it: "lo sport", pl: "sport" },
      { it: "il film", pl: "film" },
      { it: "la notte", pl: "noc" },
      { it: "il giorno", pl: "dzień" }
    ],
    exercises: [
      { t: "mcq", q: "Które słowo jest rodzaju żeńskiego?",
        opts: ["il tavolo", "la chiave", "il fiore"], a: 1,
        why: "<i>La chiave</i> — rodzaj poznajesz po rodzajniku, bo końcówka -e sama go nie zdradza." },
      { t: "fill", q: "Liczba mnoga od „la ragazza” to „___ ragazze”.",
        a: ["le"], why: "Rodzajnik żeński w liczbie mnogiej to zawsze <b>le</b>." },
      { t: "fill", q: "Utwórz liczbę mnogą: „il ristorante” → „i ___”.",
        a: ["ristoranti"], hint: "-e w liczbie mnogiej zawsze przechodzi w -i",
        why: "Rzeczowniki na -e tworzą liczbę mnogą na -i, niezależnie od rodzaju." },
      { t: "gender", q: "Dobierz rodzajnik określony w liczbie pojedynczej.",
        opts: ["il", "la"],
        items: [["libro", "il", "książka"], ["casa", "la", "dom"], ["stazione", "la", "dworzec"], ["ristorante", "il", "restauracja"], ["chiave", "la", "klucz"], ["giorno", "il", "dzień"]],
        why: "Przy słowach na -e rodzaju trzeba się nauczyć na pamięć — dlatego zapisuj je zawsze z rodzajnikiem." },
      { t: "mcq", q: "Ile kaw zamawiasz, mówiąc „due caffè”?",
        opts: ["Jedną", "Dwie", "Nie da się stwierdzić"], a: 1,
        why: "„Caffè” się nie odmienia; liczbę niesie liczebnik albo rodzajnik: <i>il caffè / i caffè</i>." },
      { t: "multi", q: "Które z tych rzeczowników mają tę samą formę w liczbie mnogiej?",
        opts: ["la città", "il libro", "il bar", "la sedia", "lo sport"], a: [0, 2, 4],
        why: "Nie odmieniają się: słowa z akcentem na końcu (città) i zapożyczenia (bar, sport)." },
      { t: "order", pl: "Restauracja jest zamknięta.", tokens: ["Il", "ristorante", "è", "chiuso"],
        a: ["il ristorante è chiuso"],
        why: "Szyk: rodzajnik + rzeczownik + czasownik + przymiotnik." },
      { t: "listen", it: "Le chiavi sono sul tavolo.", pl: "Klucze są na stole." },
      { t: "speak", it: "La città è molto bella.", pl: "Miasto jest bardzo piękne.",
        why: "„Città” ma akcent na końcu: czit-TA." }
    ]
  },

  /* ---------- 1.3 ---------- */
  {
    id: "a1-u01-l3",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Il, lo, la, un, una",
    titlePl: "Rodzajniki określone i nieokreślone",
    objectivesPl: [
      "wybrać właściwy rodzajnik określony zależnie od pierwszej głoski słowa",
      "odróżnić użycie il / un",
      "poprawnie użyć lo i gli"
    ],
    theory: [
      { h: "Po co rodzajnik, skoro polski go nie ma",
        p: "Rodzajnik mówi dwie rzeczy naraz: jaki rodzaj i liczba ma słowo, oraz czy mówimy o rzeczy znanej rozmówcy, czy o dowolnej. <em>Vorrei un caffè</em> — jakąkolwiek kawę. <em>Dov'è il caffè?</em> — ta konkretna, o której wiemy." },
      { h: "Formy męskie zależą od pierwszej głoski",
        p: "Męski rodzajnik ma trzy warianty i wybór nie jest kwestią gustu, tylko wymowy. <strong>Il</strong> stoi przed zwykłą spółgłoską. <strong>Lo</strong> przed <em>s + spółgłoska</em> (<em>lo studente</em>), przed <em>z</em>, <em>gn</em>, <em>ps</em>, <em>y</em> oraz <em>x</em>. <strong>L'</strong> przed samogłoską. Powód jest czysto fonetyczny: „il studente” byłoby trudne do wymówienia." },
      { h: "Liczba mnoga",
        list: [
          "<b>il → i</b>: <em>il libro → i libri</em>",
          "<b>lo / l' → gli</b>: <em>lo studente → gli studenti</em>, <em>l'amico → gli amici</em>",
          "<b>la / l' → le</b>: <em>la casa → le case</em>, <em>l'amica → le amiche</em>"
        ] },
      { h: "Rodzajnik nieokreślony",
        p: "<strong>Un</strong> przed spółgłoską i samogłoską (<em>un libro</em>, <em>un amico</em> — bez apostrofu!), <strong>uno</strong> tam, gdzie byłoby <em>lo</em> (<em>uno studente</em>), <strong>una</strong> dla żeńskiego, <strong>un'</strong> przed żeńską samogłoską (<em>un'amica</em>)." },
      { trap: "<b>un amico</b> (bez apostrofu, męski) kontra <b>un'amica</b> (z apostrofem, żeński). Apostrof jest tu jedyną różnicą w piśmie i to on niesie informację o rodzaju." }
    ],
    grammar: {
      title: "Rodzajniki — pełna tabela",
      table: {
        head: ["kontekst", "określony l.poj.", "określony l.mn.", "nieokreślony"],
        rows: [
          ["m. + spółgłoska", "il treno", "i treni", "un treno"],
          ["m. + s+sp., z, gn, ps", "lo studente, lo zaino", "gli studenti", "uno studente"],
          ["m. + samogłoska", "l'amico", "gli amici", "un amico"],
          ["ż. + spółgłoska", "la casa", "le case", "una casa"],
          ["ż. + samogłoska", "l'amica", "le amiche", "un'amica"]
        ]
      },
      examples: [
        ["Vorrei un caffè.", "Poproszę kawę.", "jakąkolwiek — nieokreślony"],
        ["Il caffè è freddo.", "Ta kawa jest zimna.", "konkretna — określony"],
        ["Lo zaino è pesante.", "Plecak jest ciężki.", "z → lo"],
        ["Gli studenti sono in ritardo.", "Studenci są spóźnieni."],
        ["Un'amica di Roma.", "Koleżanka z Rzymu.", "żeński + samogłoska → un'"]
      ]
    },
    vocab: [
      { it: "lo studente / la studentessa", pl: "student / studentka" },
      { it: "lo zaino", pl: "plecak" },
      { it: "l'amico / l'amica", pl: "przyjaciel / przyjaciółka" },
      { it: "il treno", pl: "pociąg" },
      { it: "lo specchio", pl: "lustro" },
      { it: "lo zucchero", pl: "cukier" },
      { it: "l'acqua", pl: "woda" },
      { it: "il bicchiere", pl: "szklanka" },
      { it: "la bottiglia", pl: "butelka" },
      { it: "l'albergo", pl: "hotel" },
      { it: "lo psicologo", pl: "psycholog" },
      { it: "la gente", pl: "ludzie (l. pojedyncza!)" }
    ],
    exercises: [
      { t: "mcq", q: "Który rodzajnik pasuje do „zucchero” (cukier)?",
        opts: ["il", "lo", "l'"], a: 1,
        why: "Rzeczowniki męskie na <b>z</b> biorą lo: <i>lo zucchero</i>, tak samo <i>lo zaino</i>." },
      { t: "mcq", q: "Jak brzmi liczba mnoga od „lo specchio”?",
        opts: ["i specchi", "gli specchi", "le specchie"], a: 1,
        why: "Lo w liczbie mnogiej zawsze przechodzi w <b>gli</b>." },
      { t: "gender", q: "Wybierz właściwy rodzajnik określony.",
        opts: ["il", "lo", "la", "l'"],
        items: [["treno", "il", "pociąg"], ["studente", "lo", "student"], ["amica", "l'", "przyjaciółka"], ["acqua", "l'", "woda"], ["bottiglia", "la", "butelka"], ["zaino", "lo", "plecak"]],
        why: "Wybór zależy od rodzaju ORAZ od pierwszej głoski słowa." },
      { t: "fill", q: "Uzupełnij: „Ho ___ amica a Milano.” (Mam koleżankę w Mediolanie.)",
        a: ["un'"], hint: "rodzaj żeński przed samogłoską",
        why: "Un'amica z apostrofem. Bez apostrofu (<i>un amico</i>) byłby to mężczyzna." },
      { t: "fill", q: "Uzupełnij: „___ studenti sono bravi.” (Studenci są zdolni.)",
        a: ["gli"], why: "Studente bierze lo, więc w liczbie mnogiej: gli studenti." },
      { t: "mcq", q: "„Vorrei il caffè” a „Vorrei un caffè” — na czym polega różnica?",
        opts: ["Żadna, to synonimy", "Il = ta konkretna kawa, o której już mowa; un = jakakolwiek", "Il jest grzeczniejsze"], a: 1,
        why: "Rodzajnik określony zakłada, że rozmówca wie, o którą rzecz chodzi. W barze zamawiasz <i>un caffè</i>." },
      { t: "match", q: "Połącz rzeczownik z rodzajnikiem.",
        pairs: [["___ psicologo → lo", "ps + spółgłoska"], ["___ albergo → l'", "samogłoska"], ["___ bicchiere → il", "zwykła spółgłoska"], ["___ gente → la", "rodzaj żeński"]] },
      { t: "order", pl: "Plecak studenta jest ciężki.",
        tokens: ["Lo", "zaino", "dello", "studente", "è", "pesante"],
        a: ["lo zaino dello studente è pesante"],
        why: "„Dello” to di + lo — przyimek też dostosowuje się do rodzajnika." },
      { t: "speak", it: "Gli studenti sono all'università.", pl: "Studenci są na uniwersytecie." }
    ]
  },

  /* ---------- 1.4 ---------- */
  {
    id: "a1-u01-l4",
    cefr: "A1",
    themePl: "Życie codzienne",
    titleIt: "Come stai?",
    titlePl: "Jak się masz — tu czy Lei",
    objectivesPl: [
      "zapytać o samopoczucie w formie oficjalnej i nieoficjalnej",
      "odmienić czasownik stare",
      "wiedzieć, kiedy przejść z Lei na tu"
    ],
    theory: [
      { h: "Dwie formy grzecznościowe, nie jedna",
        p: "Włoski rozróżnia <strong>tu</strong> (na ty) i <strong>Lei</strong> (forma oficjalna). <em>Lei</em> to dosłownie „ona”, ale używa się jej wobec mężczyzn i kobiet — czasownik stoi w trzeciej osobie liczby pojedynczej: <em>Come sta?</em>. W piśmie często zapisuje się je wielką literą, żeby odróżnić od zwykłego „ona”." },
      { h: "Kto pierwszy proponuje przejście na ty",
        p: "Zasada jest prosta: proponuje osoba starsza albo wyżej postawiona. Zdanie brzmi <em>Possiamo darci del tu?</em> („Możemy przejść na ty?”). W barze, wśród rówieśników, w środowisku młodym — Włosi przechodzą na <em>tu</em> bardzo szybko. W banku, u lekarza i w urzędzie zostaje <em>Lei</em>." },
      { h: "Stare — „być”, ale o samopoczuciu",
        p: "O tym, jak się czujesz, mówi się przez <strong>stare</strong>, nie przez <em>essere</em>. <em>Come stai?</em> → <em>Sto bene</em>. Zdanie „sono bene” jest błędem, którego Włoch nigdy nie powie. <em>Stare</em> obsługuje też miejsce i stan trwały: <em>Sto a casa</em> (jestem/zostaję w domu)." },
      { pl: "Polskie „jak się masz” tłumaczymy odruchowo przez „mieć” — po włosku to zawsze <em>stare</em>. Zapamiętaj parę: <b>come stai / sto bene</b>." }
    ],
    grammar: {
      title: "Stare (czuć się, przebywać) — czas teraźniejszy",
      table: {
        head: ["osoba", "forma", "przykład"],
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
        ["Ciao Marco, come stai?", "Cześć Marco, jak się masz?", "nieformalnie"],
        ["Buongiorno, come sta?", "Dzień dobry, jak się Pan/Pani ma?", "formalnie"],
        ["Sto bene, grazie. E tu?", "Dobrze, dziękuję. A ty?"],
        ["Non c'è male.", "Nie najgorzej.", "bardzo częsta odpowiedź"],
        ["Così così.", "Tak sobie."],
        ["Possiamo darci del tu?", "Możemy przejść na ty?"]
      ]
    },
    vocab: [
      { it: "come stai?", pl: "jak się masz? (ty)" },
      { it: "come sta?", pl: "jak się Pan/Pani ma?" },
      { it: "sto bene", pl: "mam się dobrze" },
      { it: "sto male", pl: "źle się czuję" },
      { it: "non c'è male", pl: "nie najgorzej" },
      { it: "così così", pl: "tak sobie" },
      { it: "e tu? / e Lei?", pl: "a ty? / a Pan(i)?" },
      { it: "benissimo", pl: "świetnie" },
      { it: "un po' stanco/a", pl: "trochę zmęczony/a" },
      { it: "il signore / la signora", pl: "pan / pani" },
      { it: "a presto", pl: "do zobaczenia wkrótce" },
      { it: "a dopo", pl: "na razie (do później)" }
    ],
    dialogue: {
      titleIt: "Due incontri, due registri",
      lines: [
        { who: "🙋", it: "Ciao Giulia! Come stai?", pl: "Cześć Giulia! Jak się masz?" },
        { who: "👩", it: "Ciao! Benissimo, e tu?", pl: "Cześć! Świetnie, a ty?" },
        { who: "🙋", it: "Un po' stanco, ma bene. A dopo!", pl: "Trochę zmęczony, ale dobrze. Na razie!" },
        { who: "🧓", it: "Buongiorno signora, come sta?", pl: "Dzień dobry pani, jak się pani ma?" },
        { who: "👩", it: "Non c'è male, grazie. E Lei?", pl: "Nie najgorzej, dziękuję. A pan?" }
      ]
    },
    exercises: [
      { t: "mcq", q: "Pytasz o samopoczucie osoby, do której mówisz per Lei. Które zdanie jest poprawne?",
        opts: ["Come stai?", "Come sta?", "Come state?"], a: 1,
        why: "Forma Lei wymaga trzeciej osoby liczby pojedynczej: <i>come sta?</i>" },
      { t: "mcq", q: "Które zdanie jest błędne?",
        opts: ["Sto bene.", "Sono bene.", "Non c'è male."], a: 1,
        why: "O samopoczuciu mówi się przez <b>stare</b>, nigdy przez <i>essere</i>." },
      { t: "conj", verb: "stare", tense: "pres", persons: [0, 1, 2, 4],
        pl: "io, tu, lui/lei, voi",
        why: "Stare jest nieregularny w liczbie pojedynczej i w trzeciej osobie liczby mnogiej (stanno)." },
      { t: "fill", q: "Uzupełnij: „Come ___, ragazzi?” (Jak się macie, chłopaki?)",
        a: ["state"], why: "Zwracasz się do grupy → forma voi: state." },
      { t: "trans", dir: "pl-it", q: "Przetłumacz nieformalnie: „Mam się dobrze, dziękuję. A ty?”",
        a: ["sto bene grazie e tu", "sto bene, grazie. e tu?"],
        why: "Sto bene, grazie. E tu?" },
      { t: "dialogue", q: "Jesteś w barze. Barmanka, którą znasz od lat, wita Cię pierwsza.",
        setting: "Bar dzielnicowy, godzina ósma rano.",
        lines: [
          { sp: "A", it: "Ciao! Come stai stamattina?", pl: "Cześć! Jak się masz dziś rano?" },
          { sp: "TY", pl: "Odpowiedz, że dobrze, i odbij pytanie.", choices: ["Sono bene, e tu?", "Sto bene, e tu?", "Sta bene, e Lei?"], a: 1, plAnswer: "Dobrze, a ty?" },
          { sp: "A", it: "Benissimo! Il solito caffè?", pl: "Świetnie! To co zwykle, kawa?" },
          { sp: "TY", pl: "Potwierdź i podziękuj.", choices: ["Sì, grazie!", "No, prego.", "Sì, scusi."], a: 0, plAnswer: "Tak, dziękuję!" }
        ] },
      { t: "match", q: "Połącz odpowiedź z jej wydźwiękiem.",
        pairs: [["benissimo", "bardzo dobrze"], ["non c'è male", "nie najgorzej"], ["così così", "tak sobie"], ["sto male", "źle"]] },
      { t: "listen", it: "Buonasera signora, come sta?", pl: "Dobry wieczór pani, jak się pani ma?" },
      { t: "speak", it: "Non c'è male, grazie. E Lei?", pl: "Nie najgorzej, dziękuję. A pan/pani?" }
    ]
  }
  ],
  test: {
    id: "a1-u01-test",
    cefr: "A1",
    themePl: "Sprawdzian",
    titleIt: "Test — Al bar",
    titlePl: "Sprawdzian jednostki 1",
    objectivesPl: ["sprawdzić powitania, essere, stare, rodzaj i rodzajniki"],
    theory: [{ p: "Dziesięć zadań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji — jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć." }],
    exercises: [
      { t: "mcq", q: "Jest 18:30, wchodzisz do sklepu. Co mówisz?", opts: ["Buongiorno", "Buonasera", "Buonanotte"], a: 1,
        why: "Po ok. 16-17 Włosi przechodzą na buonasera." },
      { t: "fill", q: "„Noi ___ in ritardo.” (Jesteśmy spóźnieni.)", a: ["siamo"], why: "essere, forma noi." },
      { t: "fill", q: "„Come ___?” zapytasz koleżankę o samopoczucie.", a: ["stai"], why: "stare, forma tu." },
      { t: "gender", q: "Wybierz rodzajnik określony.", opts: ["il", "lo", "la", "l'"],
        items: [["zaino", "lo"], ["amica", "l'"], ["stazione", "la"], ["treno", "il"]] },
      { t: "mcq", q: "Liczba mnoga od „l'amico”:", opts: ["gli amici", "i amici", "le amiche"], a: 0,
        why: "Męskie l' przechodzi w gli." },
      { t: "multi", q: "Które rzeczowniki nie zmieniają formy w liczbie mnogiej?",
        opts: ["il caffè", "la sedia", "il bar", "la città"], a: [0, 2, 3] },
      { t: "trans", dir: "pl-it", q: "„Poproszę wodę.”", a: ["un'acqua per favore", "vorrei un'acqua", "un acqua per favore", "dell'acqua per favore"],
        why: "Un'acqua, per favore — rodzaj żeński przed samogłoską." },
      { t: "order", pl: "Studenci są w barze.", tokens: ["Gli", "studenti", "sono", "al", "bar"], a: ["gli studenti sono al bar"] },
      { t: "listen", it: "Due caffè e un cornetto, per favore.", pl: "Dwie kawy i rogalik poproszę." },
      { t: "speak", it: "Buongiorno, come sta?", pl: "Dzień dobry, jak się Pan/Pani ma?" }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 2 — CHI SEI?
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u02",
  icon: "🪪",
  titleIt: "Chi sei?",
  titlePl: "Kim jesteś",
  grammarPl: "avere · liczebniki · zawody i narodowości",
  lessons: [

  /* ---------- 2.1 ---------- */
  {
    id: "a1-u02-l1",
    cefr: "A1",
    themePl: "Poznawanie ludzi",
    titleIt: "Mi chiamo…",
    titlePl: "Przedstawianie się",
    objectivesPl: [
      "podać imię, pochodzenie i miejsce zamieszkania",
      "użyć czasownika chiamarsi",
      "zapytać innych o te same rzeczy"
    ],
    theory: [
      { h: "„Nazywam się” to czasownik zwrotny",
        p: "<strong>Chiamarsi</strong> znaczy dosłownie „nazywać siebie”. Stąd forma <em>mi chiamo</em> — „nazywam się”. Zaimek zwrotny (<em>mi, ti, si…</em>) stoi <b>przed</b> czasownikiem, inaczej niż polskie „się”, które może wędrować po zdaniu." },
      { h: "Skąd jesteś: essere di czy venire da",
        p: "O mieście mówi się <em>sono di Varsavia</em> („jestem z Warszawy”), o kraju — <em>vengo dalla Polonia</em> albo <em>sono polacco/a</em>. Nazwy państw biorą rodzajnik (<em>la Polonia, l'Italia</em>), nazwy miast nie." },
      { trap: "Narodowość po włosku pisze się <b>małą literą</b>: <em>sono polacca</em>, <em>un ragazzo italiano</em>. Wielka litera to typowy błąd Polaków i Anglików." },
      { h: "Abitare — mieszkać",
        p: "<em>Abitare a Roma</em> (w mieście), <em>abitare in Italia</em> (w kraju). Ten sam podział a/in wraca później przy podróżowaniu, więc warto go zapamiętać od razu jako parę: <b>a + miasto, in + kraj</b>." }
    ],
    grammar: {
      title: "Chiamarsi (nazywać się) i pytania o osobę",
      table: {
        head: ["osoba", "chiamarsi", "przykład"],
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
        ["Come ti chiami? — Mi chiamo Ewa.", "Jak się nazywasz? — Nazywam się Ewa."],
        ["Di dove sei? — Sono di Cracovia.", "Skąd jesteś? — Jestem z Krakowa."],
        ["Sono polacca, ma abito a Milano.", "Jestem Polką, ale mieszkam w Mediolanie.", "narodowość małą literą"],
        ["Quanti anni hai? — Ho ventotto anni.", "Ile masz lat? — Mam dwadzieścia osiem.", "wiek zawsze przez avere"],
        ["Piacere, Marco. — Piacere mio.", "Miło mi, Marco. — Cała przyjemność po mojej stronie."]
      ]
    },
    vocab: [
      { it: "mi chiamo…", pl: "nazywam się…" },
      { it: "come ti chiami?", pl: "jak się nazywasz?" },
      { it: "di dove sei?", pl: "skąd jesteś?" },
      { it: "sono di…", pl: "jestem z… (miasto)" },
      { it: "abito a…", pl: "mieszkam w… (miasto)" },
      { it: "polacco / polacca", pl: "Polak / Polka" },
      { it: "italiano / italiana", pl: "Włoch / Włoszka" },
      { it: "il nome", pl: "imię" },
      { it: "il cognome", pl: "nazwisko" },
      { it: "piacere di conoscerti", pl: "miło Cię poznać" },
      { it: "anche io", pl: "ja też" },
      { it: "davvero?", pl: "naprawdę?" }
    ],
    exercises: [
      { t: "mcq", q: "Jak zapytasz nieformalnie o imię?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"], a: 1,
        why: "Forma tu: <i>ti chiami</i>. Wersja przez Lei to <i>come si chiama?</i>" },
      { t: "mcq", q: "Które zdanie jest zapisane poprawnie?",
        opts: ["Sono Polacca.", "Sono polacca.", "Sono la polacca."], a: 1,
        why: "Narodowości piszemy małą literą i bez rodzajnika po essere." },
      { t: "fill", q: "Uzupełnij: „___ chiamo Marta.”", a: ["mi"],
        why: "Zaimek zwrotny pierwszej osoby: mi chiamo." },
      { t: "fill", q: "Uzupełnij: „Abito ___ Roma.” (Mieszkam w Rzymie.)", a: ["a"],
        why: "Miasta biorą <b>a</b>, kraje <b>in</b>: abito a Roma / abito in Italia." },
      { t: "cloze", q: "Uzupełnij przedstawienie się.",
        text: "Ciao! {{1}} chiamo Kasia, {{2}} di Danzica e {{3}} a Bologna.",
        gaps: [["mi"], ["sono"], ["abito"]],
        pl: "Cześć! Nazywam się Kasia, jestem z Gdańska i mieszkam w Bolonii.",
        why: "Trzy czasowniki, które pojawiają się w każdym pierwszym zdaniu o sobie." },
      { t: "order", pl: "Miło cię poznać, nazywam się Luca.",
        tokens: ["Piacere", "di", "conoscerti,", "mi", "chiamo", "Luca"],
        a: ["piacere di conoscerti mi chiamo luca"] },
      { t: "dialogue", q: "Poznajesz kogoś na kursie językowym.",
        setting: "Pierwszy dzień szkoły językowej we Florencji.",
        lines: [
          { sp: "A", it: "Ciao! Io sono Giulia. E tu, come ti chiami?", pl: "Cześć! Jestem Giulia. A ty, jak się nazywasz?" },
          { sp: "TY", pl: "Przedstaw się imieniem.", choices: ["Mi chiamo Ewa.", "Si chiama Ewa.", "Ti chiami Ewa."], a: 0, plAnswer: "Nazywam się Ewa." },
          { sp: "A", it: "Piacere, Ewa! Di dove sei?", pl: "Miło mi, Ewa! Skąd jesteś?" },
          { sp: "TY", pl: "Powiedz, że jesteś z Polski.", choices: ["Sono di Polonia.", "Sono dalla Polonia.", "Abito Polonia."], a: 1, plAnswer: "Jestem z Polski." }
        ] },
      { t: "listen", it: "Mi chiamo Elena e abito a Napoli.", pl: "Nazywam się Elena i mieszkam w Neapolu." },
      { t: "speak", it: "Piacere di conoscerti!", pl: "Miło Cię poznać!" }
    ]
  },

  /* ---------- 2.2 ---------- */
  {
    id: "a1-u02-l2",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Avere e i numeri",
    titlePl: "Mieć oraz liczby 0-100",
    objectivesPl: [
      "odmienić avere",
      "użyć wyrażeń typu ho fame, ho freddo, ho ventotto anni",
      "policzyć do stu i podać cenę"
    ],
    theory: [
      { h: "Avere robi więcej niż polskie „mieć”",
        p: "Włoski używa <strong>avere</strong> tam, gdzie polski użyłby „być”. <em>Ho fame</em> to dosłownie „mam głód”, a nie „jestem głodny”. Ta sama logika obejmuje pragnienie, zimno, gorąco, strach, sen i wiek." },
      { h: "Wiek: zawsze avere",
        p: "<em>Ho trent'anni</em> — „mam trzydzieści lat”. Zdanie <em>sono trenta</em> nie znaczy nic. Zwróć uwagę na apostrof: <em>trent'anni</em>, <em>vent'anni</em> — końcowa samogłoska dziesiątki znika przed <em>anni</em>." },
      { h: "H, którego nie słychać",
        p: "Formy <em>ho, hai, ha, hanno</em> zaczynają się od niemego <b>h</b>. Nie wymawia się go w ogóle — służy wyłącznie do odróżnienia od innych słów: <em>ho</em> (mam) kontra <em>o</em> (albo), <em>ha</em> (ma) kontra <em>a</em> (do)." },
      { h: "Liczby: dziesiątki plus jedności",
        p: "Od 20 wzwyż liczby sklejają się w jedno słowo: <em>ventidue</em>, <em>trentasei</em>. Przed <em>uno</em> i <em>otto</em> dziesiątka gubi ostatnią samogłoskę: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>." }
    ],
    grammar: {
      title: "Avere (mieć) i liczebniki",
      table: {
        head: ["osoba", "avere", "wyrażenie"],
        rows: [
          ["io", "ho", "Ho fame. (Jestem głodny.)"],
          ["tu", "hai", "Hai freddo? (Zimno ci?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Ma rację.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Chce nam się pić.)"],
          ["voi", "avete", "Avete tempo? (Macie czas?)"],
          ["loro", "hanno", "Hanno paura. (Boją się.)"]
        ]
      },
      examples: [
        ["uno, due, tre, quattro, cinque", "1, 2, 3, 4, 5"],
        ["sei, sette, otto, nove, dieci", "6, 7, 8, 9, 10"],
        ["undici, dodici, tredici… venti", "11, 12, 13… 20"],
        ["ventuno, ventidue, ventotto", "21, 22, 28", "przed uno i otto dziesiątka traci samogłoskę"],
        ["trenta, quaranta, cinquanta, sessanta", "30, 40, 50, 60"],
        ["settanta, ottanta, novanta, cento", "70, 80, 90, 100"],
        ["Ho ventotto anni.", "Mam dwadzieścia osiem lat."]
      ]
    },
    vocab: [
      { it: "ho fame", pl: "jestem głodny/a" },
      { it: "ho sete", pl: "chce mi się pić" },
      { it: "ho freddo / caldo", pl: "jest mi zimno / gorąco" },
      { it: "ho sonno", pl: "chce mi się spać" },
      { it: "ho paura", pl: "boję się" },
      { it: "ho ragione", pl: "mam rację" },
      { it: "ho bisogno di…", pl: "potrzebuję…" },
      { it: "quanti anni hai?", pl: "ile masz lat?" },
      { it: "quanto costa?", pl: "ile kosztuje?" },
      { it: "l'euro", pl: "euro" },
      { it: "il numero", pl: "numer, liczba" },
      { it: "il numero di telefono", pl: "numer telefonu" }
    ],
    exercises: [
      { t: "conj", verb: "avere", tense: "pres", persons: [0, 1, 2, 3, 4, 5],
        why: "Cztery formy zaczynają się od niemego h: ho, hai, ha, hanno." },
      { t: "mcq", q: "Jak powiesz „jestem głodny”?",
        opts: ["Sono fame", "Ho fame", "Sto fame"], a: 1,
        why: "Stany fizyczne wyraża się przez avere: ho fame, ho sete, ho freddo." },
      { t: "mcq", q: "Ile to „settantasei”?", opts: ["66", "76", "86"], a: 1,
        why: "settanta (70) + sei (6) = 76." },
      { t: "fill", q: "Zapisz cyfrą: „novantatré”", a: ["93"], why: "novanta (90) + tre (3)." },
      { t: "fill", q: "Uzupełnij: „Ho vent___ anni.” (Mam dwadzieścia lat.)", a: ["'"],
        hint: "coś znika przed „anni”",
        why: "Vent'anni — dziesiątka traci końcową samogłoskę przed anni." },
      { t: "trans", dir: "pl-it", q: "„Ile masz lat?”", a: ["quanti anni hai", "quanti anni hai?"],
        why: "Dosłownie: „ile lat masz”." },
      { t: "match", q: "Połącz wyrażenie z avere i jego znaczeniem.",
        pairs: [["ho sete", "chce mi się pić"], ["ho sonno", "chce mi się spać"], ["ho paura", "boję się"], ["ho ragione", "mam rację"]] },
      { t: "cloze", q: "Uzupełnij dialog w kasie.",
        text: "— Quanto {{1}}? — Sono {{2}} euro. — {{3}} solo venti euro, mi dispiace.",
        gaps: [["costa"], ["trentadue", "32"], ["ho"]],
        pl: "— Ile kosztuje? — Trzydzieści dwa euro. — Mam tylko dwadzieścia, przykro mi." },
      { t: "listen", it: "Ho trentacinque anni e abito a Torino.", pl: "Mam trzydzieści pięć lat i mieszkam w Turynie." },
      { t: "speak", it: "Quanto costa un cappuccino?", pl: "Ile kosztuje cappuccino?" }
    ]
  },

  /* ---------- 2.3 ---------- */
  {
    id: "a1-u02-l3",
    cefr: "A1",
    themePl: "Praca i ludzie",
    titleIt: "Che lavoro fai?",
    titlePl: "Zawody i praca",
    objectivesPl: [
      "powiedzieć, czym się zajmujesz",
      "użyć konstrukcji fare il / essere un",
      "utworzyć żeńskie formy nazw zawodów"
    ],
    theory: [
      { h: "Dwie konstrukcje, dwa odcienie",
        p: "„Jestem architektem” po włosku ma dwie wersje. <strong>Faccio l'architetto</strong> (dosłownie „robię architekta”) mówi o wykonywanym zawodzie i jest najczęstsze w rozmowie. <strong>Sono architetto</strong> podkreśla tożsamość albo kwalifikacje. Po <em>fare</em> stoi rodzajnik określony, po <em>essere</em> zwykle żadnego." },
      { h: "Formy żeńskie",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "bez zmiany: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ] },
      { h: "Nazwy zawodów w ruchu",
        p: "Formy takie jak <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> są dziś normą w prasie i dokumentach, choć jeszcze dwadzieścia lat temu budziły spór. W mowie potocznej usłyszysz też starsze <em>l'avvocato</em> o kobiecie. Obie wersje spotkasz w praktyce." },
      { pl: "Polskie „pracuję jako…” ma odpowiednik <em>lavoro come…</em>, ale Włosi znacznie częściej mówią po prostu <em>faccio il/la…</em>" }
    ],
    grammar: {
      title: "Fare (robić) — czas teraźniejszy",
      note: "Nieregularny, a jednocześnie jeden z trzech najczęstszych czasowników włoskich.",
      table: {
        head: ["osoba", "fare", "przykład"],
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
        ["Che lavoro fai?", "Czym się zajmujesz?"],
        ["Faccio la giornalista.", "Jestem dziennikarką."],
        ["Sono ingegnere.", "Jestem inżynierem.", "po essere zwykle bez rodzajnika"],
        ["Lavoro in un'agenzia.", "Pracuję w agencji."],
        ["Sono disoccupato in questo momento.", "W tej chwili nie pracuję."],
        ["Studio ancora, sono all'ultimo anno.", "Jeszcze studiuję, jestem na ostatnim roku."]
      ]
    },
    vocab: [
      { it: "il lavoro", pl: "praca" },
      { it: "l'insegnante", pl: "nauczyciel/ka" },
      { it: "il medico / la dottoressa", pl: "lekarz / lekarka" },
      { it: "l'ingegnere", pl: "inżynier" },
      { it: "l'avvocato / l'avvocata", pl: "adwokat / adwokatka" },
      { it: "il/la giornalista", pl: "dziennikarz/ka" },
      { it: "l'impiegato / l'impiegata", pl: "urzędnik / urzędniczka" },
      { it: "il cuoco / la cuoca", pl: "kucharz / kucharka" },
      { it: "il commesso / la commessa", pl: "sprzedawca / sprzedawczyni" },
      { it: "l'operaio", pl: "robotnik" },
      { it: "il/la libero professionista", pl: "osoba na własnej działalności" },
      { it: "cerco lavoro", pl: "szukam pracy" }
    ],
    exercises: [
      { t: "conj", verb: "fare", tense: "pres", persons: [0, 1, 2, 3, 4, 5],
        why: "Uwaga na podwójne c w faccio i facciamo." },
      { t: "mcq", q: "Które zdanie znaczy „jestem nauczycielką” i brzmi najbardziej naturalnie?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."], a: 0,
        why: "Fare + rodzajnik określony to najczęstsza konstrukcja o zawodzie w mowie." },
      { t: "mcq", q: "Jak brzmi żeńska forma od „il professore”?",
        opts: ["la professora", "la professoressa", "la professrice"], a: 1,
        why: "Wzorzec -e → -essa, jak studente → studentessa." },
      { t: "fill", q: "Uzupełnij: „Mia sorella fa ___ dottoressa.”", a: ["la"],
        why: "Po fare stoi rodzajnik określony, dopasowany do rodzaju: la dottoressa." },
      { t: "gender", q: "Dobierz rodzajnik.", opts: ["il", "lo", "la", "l'"],
        items: [["cuoca", "la", "kucharka"], ["ingegnere", "l'", "inżynier"], ["studentessa", "la", "studentka"], ["operaio", "l'", "robotnik"]] },
      { t: "trans", dir: "pl-it", q: "„Czym się zajmujesz?” (nieformalnie)",
        a: ["che lavoro fai", "che lavoro fai?", "che cosa fai nella vita"],
        why: "Che lavoro fai? — dosłownie „jaką pracę robisz”." },
      { t: "match", q: "Połącz formę męską z żeńską.",
        pairs: [["l'attore", "l'attrice"], ["il commesso", "la commessa"], ["lo studente", "la studentessa"], ["il giornalista", "la giornalista"]] },
      { t: "order", pl: "Pracuję w banku w Mediolanie.",
        tokens: ["Lavoro", "in", "una", "banca", "a", "Milano"],
        a: ["lavoro in una banca a milano"] },
      { t: "listen", it: "Faccio l'architetto, lavoro con mio fratello.", pl: "Jestem architektem, pracuję z bratem." },
      { t: "speak", it: "Che lavoro fai? Io faccio la giornalista.", pl: "Czym się zajmujesz? Ja jestem dziennikarką." }
    ]
  },

  /* ---------- 2.4 ---------- */
  {
    id: "a1-u02-l4",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Verbi in -ARE",
    titlePl: "Pierwsza koniugacja",
    objectivesPl: [
      "odmienić dowolny regularny czasownik na -are",
      "poradzić sobie ze zmianami pisowni w cercare, pagare, mangiare",
      "zbudować zdanie przeczące i pytające"
    ],
    theory: [
      { h: "Największa i najbardziej przewidywalna grupa",
        p: "Około 70% włoskich czasowników kończy się na <strong>-are</strong>, i prawie wszystkie odmieniają się identycznie. Wystarczy odciąć końcówkę bezokolicznika i dodać sześć zakończeń: <em>-o, -i, -a, -iamo, -ate, -ano</em>. Nauczysz się jednego wzorca i obsłużysz setki słów." },
      { h: "Akcent tam, gdzie go nie widać",
        p: "W formie <em>loro</em> akcent pada na trzecią sylabę od końca: <b>par</b>-la-no, <b>la</b>-vo-ra-no. Nie „parla-NO”. To rozróżnienie słychać i Włosi je wychwytują." },
      { h: "Pisownia ratująca wymowę",
        list: [
          "<b>-care / -gare</b> dokładają <b>h</b> przed -i i -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>",
          "<b>-ciare / -giare</b> gubią <b>i</b> przed -i: <em>mangiare → mangi</em> (nie „mangii”), <em>cominciare → cominci</em>",
          "<b>-iare</b> bez akcentu też gubi jedno i: <em>studiare → studi, studiamo</em>"
        ] },
      { h: "Przeczenie i pytanie bez zmian",
        p: "Przeczenie to jedno słowo <strong>non</strong> przed czasownikiem: <em>non parlo italiano</em>. Pytanie nie wymaga żadnej przebudowy zdania — wystarczy intonacja: <em>Parli italiano?</em> Włoski nie ma odpowiednika angielskiego „do”." }
    ],
    grammar: {
      title: "Parlare (mówić) — wzorzec -ARE",
      table: {
        head: ["osoba", "końcówka", "parlare", "lavorare"],
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
        ["Parlo un po' d'italiano.", "Mówię trochę po włosku."],
        ["Non parlo bene, ma capisco.", "Nie mówię dobrze, ale rozumiem."],
        ["Studi all'università?", "Studiujesz na uniwersytecie?", "pytanie tylko intonacją"],
        ["Mangiamo alle otto.", "Jemy o ósmej."],
        ["Cerchi lavoro a Milano?", "Szukasz pracy w Mediolanie?", "cercare → cerchi, z h"],
        ["Loro abitano vicino al centro.", "Oni mieszkają blisko centrum.", "akcent: A-bi-ta-no"]
      ]
    },
    vocab: [
      { it: "parlare", pl: "mówić, rozmawiać" },
      { it: "lavorare", pl: "pracować" },
      { it: "studiare", pl: "uczyć się, studiować" },
      { it: "abitare", pl: "mieszkać" },
      { it: "mangiare", pl: "jeść" },
      { it: "comprare", pl: "kupować" },
      { it: "cercare", pl: "szukać" },
      { it: "pagare", pl: "płacić" },
      { it: "ascoltare", pl: "słuchać" },
      { it: "guardare", pl: "patrzeć, oglądać" },
      { it: "aspettare", pl: "czekać" },
      { it: "cominciare", pl: "zaczynać" }
    ],
    exercises: [
      { t: "conj", verb: "parlare", tense: "pres", persons: [0, 1, 2, 3, 4, 5],
        why: "Wzorzec, który obsługuje większość włoskich czasowników." },
      { t: "conj", verb: "cercare", tense: "pres", persons: [1, 3],
        pl: "tu, noi — uwaga na pisownię",
        why: "Cerchi i cerchiamo dostają <b>h</b>, żeby zachować twarde k." },
      { t: "mcq", q: "Która forma jest poprawna: „ty jesz”?",
        opts: ["mangii", "mangi", "mangie"], a: 1,
        why: "Czasowniki na -giare gubią i przed końcówką -i: mangi." },
      { t: "fill", q: "Uzupełnij: „Loro ___ a Bologna.” (Oni mieszkają w Bolonii.)",
        a: ["abitano"], why: "abitare, forma loro: -ano." },
      { t: "fill", q: "Zaprzecz: „Parlo italiano.” → „___ parlo italiano.”",
        a: ["non"], why: "Jedno słowo non przed czasownikiem — to całe przeczenie." },
      { t: "trans", dir: "pl-it", q: "„Szukamy mieszkania w Rzymie.”",
        a: ["cerchiamo un appartamento a roma", "cerchiamo casa a roma"],
        why: "cercare → cerchiamo (z h), a + miasto." },
      { t: "multi", q: "Które formy należą do „studiare”?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"], a: [0, 2, 3, 4],
        why: "„Studii” nie istnieje — podwójne i się redukuje." },
      { t: "order", pl: "Nie pracuję w soboty.",
        tokens: ["Non", "lavoro", "il", "sabato"], a: ["non lavoro il sabato"],
        why: "„Il sabato” z rodzajnikiem znaczy „w soboty”, regularnie." },
      { t: "listen", it: "Studio italiano da tre mesi.", pl: "Uczę się włoskiego od trzech miesięcy." },
      { t: "speak", it: "Non parlo bene, ma capisco quasi tutto.", pl: "Nie mówię dobrze, ale rozumiem prawie wszystko." }
    ]
  }
  ],
  test: {
    id: "a1-u02-test",
    cefr: "A1",
    themePl: "Sprawdzian",
    titleIt: "Test — Chi sei?",
    titlePl: "Sprawdzian jednostki 2",
    objectivesPl: ["sprawdzić avere, fare, chiamarsi, liczby i pierwszą koniugację"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "fill", q: "„___ chiamo Piotr.”", a: ["mi"] },
      { t: "fill", q: "„Quanti anni ___?” (Ile masz lat?)", a: ["hai"] },
      { t: "mcq", q: "Ile to „ottantaquattro”?", opts: ["48", "84", "94"], a: 1 },
      { t: "mcq", q: "„Jestem głodny” po włosku:", opts: ["Sono fame", "Ho fame", "Sto fame"], a: 1 },
      { t: "conj", verb: "fare", tense: "pres", persons: [0, 2, 3] },
      { t: "mcq", q: "Która forma jest poprawna: „ty płacisz”?", opts: ["pagi", "paghi", "page"], a: 1,
        why: "-gare dokłada h przed -i." },
      { t: "cloze", q: "Uzupełnij.", text: "{{1}} polacca, {{2}} a Verona e {{3}} l'insegnante.",
        gaps: [["sono"], ["abito"], ["faccio"]],
        pl: "Jestem Polką, mieszkam w Weronie i jestem nauczycielką." },
      { t: "trans", dir: "pl-it", q: "„Nie mówię po włosku.”", a: ["non parlo italiano", "non parlo l'italiano"] },
      { t: "listen", it: "Ho ventisette anni e cerco lavoro.", pl: "Mam dwadzieścia siedem lat i szukam pracy." },
      { t: "speak", it: "Mi chiamo Anna e faccio la giornalista.", pl: "Nazywam się Anna i jestem dziennikarką." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 3 — L'APERITIVO
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u03",
  icon: "🍹",
  titleIt: "L'aperitivo",
  titlePl: "Aperitivo i jedzenie",
  grammarPl: "piacere · rodzajnik cząstkowy · -ere i -ire",
  lessons: [

  /* ---------- 3.1 ---------- */
  {
    id: "a1-u03-l1",
    cefr: "A1",
    themePl: "Jedzenie",
    titleIt: "Mi piace, mi piacciono",
    titlePl: "Czasownik piacere",
    objectivesPl: [
      "powiedzieć, co lubisz i czego nie lubisz",
      "wybrać między piace a piacciono",
      "zapytać o czyjeś upodobania"
    ],
    theory: [
      { h: "Zdanie stoi na głowie",
        p: "<strong>Piacere</strong> nie znaczy „lubić”, tylko „podobać się”. <em>Mi piace la pizza</em> to dosłownie „pizza podoba się mnie”. Podmiotem gramatycznym jest <b>rzecz</b>, a osoba, która lubi, występuje jako dopełnienie dalsze (<em>mi, ti, gli, le, ci, vi</em>)." },
      { h: "Dlatego czasownik ma dwie formy",
        p: "Skoro podmiotem jest rzecz, to ona decyduje o liczbie: <em>mi piace <b>il</b> caffè</em> (jedna rzecz) kontra <em>mi piacciono <b>gli</b> spaghetti</em> (wiele rzeczy). Przed bezokolicznikiem zawsze liczba pojedyncza: <em>mi piace viaggiare</em>." },
      { pl: "Polski ma dokładnie ten sam mechanizm w czasowniku „podobać się”: „podoba mi się film”, „podobają mi się filmy”. Jeśli oprzesz włoskie zdanie na polskim „podoba mi się” zamiast na „lubię”, przestaniesz się mylić." },
      { h: "Kto lubi: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — mnie",
          "<b>ti</b> piace — tobie",
          "<b>gli</b> piace — jemu; <b>le</b> piace — jej",
          "<b>ci</b> piace — nam · <b>vi</b> piace — wam · <b>gli</b> piace — im"
        ] },
      { trap: "Przeczenie stawia się przed zaimkiem, nie przed czasownikiem: <b>non</b> mi piace. Nie „mi non piace”." }
    ],
    grammar: {
      title: "Piacere — schemat zdania",
      note: "[zaimek] + piace/piacciono + [rzecz z rodzajnikiem]",
      table: {
        head: ["co lubimy", "forma", "przykład"],
        rows: [
          ["jedna rzecz", "piace", "Mi piace il vino rosso."],
          ["wiele rzeczy", "piacciono", "Mi piacciono i dolci."],
          ["czynność", "piace", "Mi piace cucinare."],
          ["przeczenie", "non … piace", "Non mi piace il pesce crudo."],
          ["pytanie", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        ["Mi piace molto il caffè.", "Bardzo lubię kawę."],
        ["Ti piacciono gli spritz?", "Lubisz spritze?"],
        ["Non ci piace la birra calda.", "Nie lubimy ciepłego piwa."],
        ["Le piace ballare.", "Ona lubi tańczyć."],
        ["A Marco piace il pesce.", "Marco lubi ryby.", "z imieniem dodaje się „a”"],
        ["Mi piacerebbe provare.", "Chętnie bym spróbował.", "forma warunkowa — zapamiętaj jako zwrot"]
      ]
    },
    vocab: [
      { it: "l'aperitivo", pl: "aperitif (drink + przekąski)" },
      { it: "lo spritz", pl: "spritz" },
      { it: "il vino rosso / bianco", pl: "wino czerwone / białe" },
      { it: "la birra", pl: "piwo" },
      { it: "le olive", pl: "oliwki" },
      { it: "le patatine", pl: "chipsy / frytki" },
      { it: "i salatini", pl: "słone przekąski" },
      { it: "il prosciutto", pl: "szynka" },
      { it: "il formaggio", pl: "ser" },
      { it: "i dolci", pl: "słodycze, desery" },
      { it: "il pesce", pl: "ryba" },
      { it: "la carne", pl: "mięso" },
      { it: "cucinare", pl: "gotować" },
      { it: "assaggiare", pl: "spróbować, skosztować" }
    ],
    culture: {
      titlePl: "Okiem Włocha: aperitivo to nie kolacja",
      textPl: "<p><b>Aperitivo</b> zaczyna się około 18:30 i trwa do 20:30. Płacisz za drinka (7-12 euro w zależności od miasta), a jedzenie przy barze jest w cenie. W Mediolanie rozrósł się do bufetu zwanego <i>apericena</i> — pół drogi do kolacji.</p>" +
        "<p>Zasada, o której nikt nie mówi: <b>bierze się rozsądnie</b>. Talerz ułożony w kopiec zdradza obcokrajowca szybciej niż akcent.</p>" +
        "<p>Klasyki: <i>spritz</i> (Aperol lub Campari), <i>negroni</i>, kieliszek wina. Piwo też uchodzi, choć puryści kręcą nosem.</p>"
    },
    exercises: [
      { t: "mcq", q: "„___ piacciono le olive.” Dlaczego piacciono, a nie piace?",
        opts: ["Bo mówi o wielu osobach", "Bo „le olive” jest w liczbie mnogiej", "Bo to czas przeszły"], a: 1,
        why: "Czasownik zgadza się z rzeczą, która się podoba — a ta jest w liczbie mnogiej." },
      { t: "fill", q: "Uzupełnij: „Mi ___ il vino rosso.”", a: ["piace"],
        why: "Jedna rzecz w liczbie pojedynczej → piace." },
      { t: "fill", q: "Uzupełnij: „Non mi ___ i film horror.”", a: ["piacciono"],
        why: "„I film” to liczba mnoga → piacciono." },
      { t: "mcq", q: "Które zdanie jest poprawne?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."], a: 1,
        why: "Non stoi przed całą grupą zaimek + czasownik." },
      { t: "mcq", q: "Jak powiesz „Marco lubi ryby”?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"], a: 1,
        why: "Przed imieniem osoby, która lubi, stawia się przyimek <b>a</b>." },
      { t: "trans", dir: "pl-it", q: "„Lubię gotować.”", a: ["mi piace cucinare"],
        why: "Przed bezokolicznikiem zawsze piace w liczbie pojedynczej." },
      { t: "match", q: "Połącz zaimek z osobą.",
        pairs: [["mi piace", "mnie się podoba"], ["ti piace", "tobie"], ["le piace", "jej"], ["ci piace", "nam"]] },
      { t: "cloze", q: "Uzupełnij rozmowę przy aperitivo.",
        text: "— Ti {{1}} lo spritz? — Sì, molto! Ma non mi {{2}} le olive.",
        gaps: [["piace"], ["piacciono"]],
        pl: "— Lubisz spritz? — Tak, bardzo! Ale nie lubię oliwek." },
      { t: "listen", it: "Mi piacciono molto i formaggi italiani.", pl: "Bardzo lubię włoskie sery." },
      { t: "speak", it: "Mi piace l'aperitivo, ma non mi piacciono le olive.", pl: "Lubię aperitivo, ale nie lubię oliwek." }
    ]
  },

  /* ---------- 3.2 ---------- */
  {
    id: "a1-u03-l2",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Verbi in -ERE",
    titlePl: "Druga koniugacja i c'è / ci sono",
    objectivesPl: [
      "odmienić regularne czasowniki na -ere",
      "użyć c'è i ci sono",
      "opisać, co się gdzieś znajduje"
    ],
    theory: [
      { h: "Prawie jak -are, ale nie do końca",
        p: "Grupa <strong>-ere</strong> różni się od pierwszej tylko trzema końcówkami: <em>-e</em> zamiast <em>-a</em>, <em>-ete</em> zamiast <em>-ate</em>, <em>-ono</em> zamiast <em>-ano</em>. Forma <em>noi</em> (<em>-iamo</em>) jest wspólna dla wszystkich trzech koniugacji — to najłatwiejsza końcówka we włoskim." },
      { h: "Tu ukrywa się większość nieregularnych",
        p: "Wiele bardzo częstych czasowników na -ere ma nietypowe formy — <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Ich nieregularność ujawnia się przede wszystkim w czasie przeszłym i w imiesłowie, do czego dojdziemy na poziomie A2." },
      { h: "C'è i ci sono",
        p: "<strong>C'è</strong> („jest, znajduje się”) i <strong>ci sono</strong> („są”) opisują istnienie czegoś w danym miejscu. Wybór zależy od liczby rzeczy, nie od osoby: <em>c'è un problema</em>, <em>ci sono due problemi</em>." },
      { trap: "Nie myl <b>c'è</b> (jest gdzieś) z <b>è</b> (jest jakieś). <em>Il ristorante è chiuso</em> — restauracja jest zamknięta. <em>C'è un ristorante qui vicino</em> — jest tu w pobliżu restauracja." }
    ],
    grammar: {
      title: "Leggere (czytać) — wzorzec -ERE",
      table: {
        head: ["osoba", "końcówka", "leggere", "prendere"],
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
        ["Prendo un caffè, grazie.", "Poproszę kawę.", "„prendere” to najczęstszy czasownik przy zamawianiu"],
        ["Leggi il menù?", "Czytasz menu?"],
        ["Non vedo il cameriere.", "Nie widzę kelnera."],
        ["C'è un tavolo libero?", "Jest wolny stolik?"],
        ["Ci sono due posti al bancone.", "Są dwa miejsca przy barze."],
        ["Scriviamo il nome sulla prenotazione.", "Wpisujemy nazwisko do rezerwacji."]
      ]
    },
    vocab: [
      { it: "prendere", pl: "brać, zamawiać" },
      { it: "leggere", pl: "czytać" },
      { it: "scrivere", pl: "pisać" },
      { it: "vedere", pl: "widzieć" },
      { it: "chiedere", pl: "pytać, prosić" },
      { it: "rispondere", pl: "odpowiadać" },
      { it: "mettere", pl: "kłaść" },
      { it: "chiudere", pl: "zamykać" },
      { it: "c'è / ci sono", pl: "jest / są" },
      { it: "il posto", pl: "miejsce" },
      { it: "libero / occupato", pl: "wolny / zajęty" },
      { it: "qui vicino", pl: "tu w pobliżu" }
    ],
    exercises: [
      { t: "conj", verb: "prendere", tense: "pres", persons: [0, 1, 2, 3, 4, 5],
        why: "Zwróć uwagę na -e, -ete, -ono — to cała różnica wobec grupy -are." },
      { t: "mcq", q: "Która końcówka jest wspólna dla wszystkich trzech koniugacji?",
        opts: ["-o w formie io", "-iamo w formie noi", "-ono w formie loro"], a: 1,
        why: "Forma noi to zawsze -iamo, niezależnie od grupy." },
      { t: "fill", q: "Uzupełnij: „___ un tavolo libero?” (Jest wolny stolik?)", a: ["c'è", "ce"],
        why: "Jeden stolik → c'è." },
      { t: "fill", q: "Uzupełnij: „___ tre persone in fila.” (Są trzy osoby w kolejce.)",
        a: ["ci sono"], why: "Liczba mnoga → ci sono." },
      { t: "mcq", q: "„Il bar è chiuso” a „C'è un bar qui vicino” — co je różni?",
        opts: ["Nic, to synonimy", "Pierwsze opisuje cechę baru, drugie stwierdza jego istnienie w okolicy", "Drugie jest w czasie przeszłym"], a: 1,
        why: "è opisuje, c'è stwierdza obecność czegoś w miejscu." },
      { t: "trans", dir: "pl-it", q: "„Biorę piwo, a ty?”",
        a: ["prendo una birra e tu", "io prendo una birra e tu"],
        why: "Prendere jest we Włoszech domyślnym czasownikiem zamawiania." },
      { t: "multi", q: "Które czasowniki należą do grupy -ere?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"], a: [0, 2, 4] },
      { t: "order", pl: "Nie widzę kelnera.", tokens: ["Non", "vedo", "il", "cameriere"], a: ["non vedo il cameriere"] },
      { t: "listen", it: "C'è un tavolo libero per due persone?", pl: "Jest wolny stolik dla dwóch osób?" },
      { t: "speak", it: "Prendiamo due spritz, per favore.", pl: "Poprosimy dwa spritze." }
    ]
  },

  /* ---------- 3.3 ---------- */
  {
    id: "a1-u03-l3",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Verbi in -IRE",
    titlePl: "Trzecia koniugacja i wzorzec -isc-",
    objectivesPl: [
      "odmienić czasowniki typu dormire i typu capire",
      "rozpoznać, które -ire wymagają wstawki -isc-",
      "użyć preferire do wyrażania preferencji"
    ],
    theory: [
      { h: "Jedna końcówka, dwa zachowania",
        p: "Czasowniki na <strong>-ire</strong> dzielą się na dwie podgrupy. Pierwsza (<em>dormire, partire, sentire, aprire, offrire</em>) odmienia się wprost. Druga (<em>capire, finire, preferire, pulire, spedire</em>) wstawia <b>-isc-</b> w czterech formach: <em>io, tu, lui/lei, loro</em>. Formy <em>noi</em> i <em>voi</em> zostają bez wstawki." },
      { h: "Skąd wiadomo, która to grupa",
        p: "Reguły nie ma — trzeba zapamiętać. Pomaga to, że grupa z <em>-isc-</em> jest liczniejsza i zawiera prawie wszystkie nowsze czasowniki (<em>gestire, inserire, garantire</em>). Słowniki oznaczają ją skrótem <i>(-isc-)</i> przy haśle." },
      { tip: "Wzorzec z -isc- ma kształt klamry: cztery formy z wstawką na zewnątrz, dwie bez niej w środku. Zapamiętaj rytm: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>." },
      { h: "Preferire — bardzo przydatny czasownik",
        p: "<em>Preferisco il vino bianco</em> („wolę białe wino”) to zwrot, którego użyjesz w każdej restauracji i sklepie. Buduje się go z rzeczownikiem albo z bezokolicznikiem: <em>preferisco restare a casa</em>." }
    ],
    grammar: {
      title: "Dormire (bez -isc-) kontra capire (z -isc-)",
      table: {
        head: ["osoba", "dormire", "capire", "po polsku"],
        rows: [
          ["io", "dormo", "capisco", "śpię / rozumiem"],
          ["tu", "dormi", "capisci", "śpisz / rozumiesz"],
          ["lui / lei", "dorme", "capisce", "śpi / rozumie"],
          ["noi", "dormiamo", "capiamo", "śpimy / rozumiemy"],
          ["voi", "dormite", "capite", "śpicie / rozumiecie"],
          ["loro", "dormono", "capiscono", "śpią / rozumieją"]
        ]
      },
      examples: [
        ["Non capisco, può ripetere?", "Nie rozumiem, może pan powtórzyć?"],
        ["Preferisco un tavolo fuori.", "Wolę stolik na zewnątrz."],
        ["A che ora finisci di lavorare?", "O której kończysz pracę?"],
        ["Il negozio apre alle nove.", "Sklep otwiera się o dziewiątej.", "aprire — bez -isc-"],
        ["Partiamo domani mattina.", "Wyjeżdżamy jutro rano."],
        ["Loro capiscono tutto.", "Oni rozumieją wszystko."]
      ]
    },
    vocab: [
      { it: "capire (-isc-)", pl: "rozumieć" },
      { it: "finire (-isc-)", pl: "kończyć" },
      { it: "preferire (-isc-)", pl: "woleć" },
      { it: "pulire (-isc-)", pl: "sprzątać" },
      { it: "spedire (-isc-)", pl: "wysyłać" },
      { it: "dormire", pl: "spać" },
      { it: "partire", pl: "wyjeżdżać" },
      { it: "aprire", pl: "otwierać" },
      { it: "offrire", pl: "oferować, stawiać" },
      { it: "sentire", pl: "słyszeć, czuć" },
      { it: "seguire", pl: "śledzić, iść za" },
      { it: "può ripetere?", pl: "może pan/pani powtórzyć?" }
    ],
    exercises: [
      { t: "conj", verb: "capire", tense: "pres", persons: [0, 1, 2, 3, 4, 5],
        why: "Klamra: -isc- w io, tu, lui/lei i loro; brak w noi i voi." },
      { t: "conj", verb: "dormire", tense: "pres", persons: [0, 2, 5],
        why: "Dormire idzie wprost, bez wstawki." },
      { t: "mcq", q: "Który czasownik wymaga wstawki -isc-?",
        opts: ["partire", "preferire", "aprire"], a: 1,
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono." },
      { t: "fill", q: "Uzupełnij: „Noi non ___ bene.” (Nie rozumiemy dobrze.)",
        a: ["capiamo"], hint: "forma noi nie ma wstawki",
        why: "Capiamo — w formie noi i voi -isc- znika." },
      { t: "fill", q: "Uzupełnij: „Loro ___ alle sette.” (Kończą o siódmej.)",
        a: ["finiscono"], why: "finire z -isc- w formie loro." },
      { t: "trans", dir: "pl-it", q: "„Wolę stolik na zewnątrz.”",
        a: ["preferisco un tavolo fuori", "preferisco un tavolo all'aperto"] },
      { t: "multi", q: "Które formy zawierają -isc-?",
        opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"], a: [0, 2, 4] },
      { t: "order", pl: "Nie rozumiem, może pani powtórzyć?",
        tokens: ["Non", "capisco,", "può", "ripetere?"], a: ["non capisco può ripetere"] },
      { t: "listen", it: "Preferisco partire domani mattina presto.", pl: "Wolę wyjechać jutro wcześnie rano." },
      { t: "speak", it: "Scusi, non capisco. Può ripetere?", pl: "Przepraszam, nie rozumiem. Może pan powtórzyć?" }
    ]
  },

  /* ---------- 3.4 ---------- */
  {
    id: "a1-u03-l4",
    cefr: "A1",
    themePl: "Jedzenie",
    titleIt: "Del pane, dell'acqua",
    titlePl: "Rodzajnik cząstkowy i ilości",
    objectivesPl: [
      "wyrazić nieokreśloną ilość przez del, della, dei…",
      "użyć un po' di i un chilo di",
      "poprosić o produkty w sklepie"
    ],
    theory: [
      { h: "Trochę czegoś — bez słowa „trochę”",
        p: "Włoski wyraża nieokreśloną ilość przez <strong>rodzajnik cząstkowy</strong>: przyimek <em>di</em> zlany z rodzajnikiem określonym. <em>Vorrei del pane</em> — „poproszę (trochę) chleba”. W liczbie mnogiej odpowiada polskiemu „jakieś, kilka”: <em>dei pomodori</em> — „pomidorów”." },
      { h: "Formy",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ] },
      { h: "Alternatywy",
        p: "Zamiast rodzajnika cząstkowego można użyć <strong>un po' di</strong> („trochę”) albo miary: <em>un chilo di, un etto di, mezzo litro di</em>. W przeczeniu rodzajnik cząstkowy zwykle znika: <em>non ho pane</em>, nie „non ho del pane”." },
      { pl: "Polski dopełniacz cząstkowy („kup chleba”, nie „kup chleb”) robi dokładnie to samo, tylko końcówką zamiast przyimkiem. To dobra kotwica: gdzie po polsku powiesz „chleba”, po włosku będzie <em>del pane</em>." },
      { tip: "<b>Un etto</b> to 100 gramów i jest podstawową jednostką przy ladzie: <em>due etti di prosciutto</em> = 200 g szynki." }
    ],
    grammar: {
      title: "Rodzajnik cząstkowy i wyrażenia ilości",
      table: {
        head: ["kontekst", "forma", "przykład"],
        rows: [
          ["m. + spółgłoska", "del", "del pane"],
          ["m. + s+sp., z", "dello", "dello zucchero"],
          ["+ samogłoska", "dell'", "dell'acqua, dell'olio"],
          ["ż. + spółgłoska", "della", "della carne"],
          ["m. l.mn.", "dei / degli", "dei pomodori, degli spinaci"],
          ["ż. l.mn.", "delle", "delle mele"]
        ]
      },
      examples: [
        ["Vorrei del pane, per favore.", "Poproszę chleba."],
        ["Compro delle mele e dell'uva.", "Kupuję jabłka i winogrona."],
        ["Un po' di sale, non troppo.", "Trochę soli, nie za dużo."],
        ["Due etti di prosciutto crudo.", "Dwadzieścia deko szynki surowej."],
        ["Mezzo litro di latte.", "Pół litra mleka."],
        ["Non ho zucchero in casa.", "Nie mam cukru w domu.", "w przeczeniu bez rodzajnika cząstkowego"]
      ]
    },
    vocab: [
      { it: "il pane", pl: "chleb" },
      { it: "il latte", pl: "mleko" },
      { it: "l'acqua", pl: "woda" },
      { it: "lo zucchero", pl: "cukier" },
      { it: "il sale", pl: "sól" },
      { it: "l'olio", pl: "oliwa, olej" },
      { it: "i pomodori", pl: "pomidory" },
      { it: "le mele", pl: "jabłka" },
      { it: "un etto", pl: "sto gramów" },
      { it: "un chilo", pl: "kilogram" },
      { it: "un po' di", pl: "trochę" },
      { it: "mezzo litro", pl: "pół litra" },
      { it: "basta così", pl: "wystarczy, dziękuję" },
      { it: "quanto ne vuole?", pl: "ile pan/pani chce?" }
    ],
    exercises: [
      { t: "mcq", q: "Jak poprosisz o (trochę) chleba?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"], a: 1,
        why: "Rodzajnik cząstkowy <b>del</b> wyraża nieokreśloną ilość." },
      { t: "fill", q: "Uzupełnij: „Compro ___ acqua.” (Kupuję wodę.)", a: ["dell'"],
        why: "di + l' = dell', bo acqua zaczyna się od samogłoski." },
      { t: "fill", q: "Uzupełnij: „Vorrei ___ mele.” (Poproszę jabłka.)", a: ["delle"],
        why: "di + le = delle, rodzaj żeński w liczbie mnogiej." },
      { t: "gender", q: "Dobierz rodzajnik cząstkowy.",
        opts: ["del", "dello", "dell'", "della", "dei", "degli", "delle"],
        items: [["pane", "del", "chleb"], ["zucchero", "dello", "cukier"], ["carne", "della", "mięso"], ["olio", "dell'", "oliwa"], ["pomodori", "dei", "pomidory"], ["spinaci", "degli", "szpinak"]] },
      { t: "mcq", q: "Ile to „due etti”?", opts: ["20 gramów", "200 gramów", "2 kilogramy"], a: 1,
        why: "Un etto to 100 g, więc due etti = 200 g." },
      { t: "trans", dir: "pl-it", q: "„Poproszę pół litra mleka.”",
        a: ["vorrei mezzo litro di latte", "mezzo litro di latte per favore"] },
      { t: "dialogue", q: "Jesteś przy ladzie w sklepie spożywczym.",
        setting: "Alimentari w dzielnicy, przy ladzie z wędlinami.",
        lines: [
          { sp: "A", it: "Buongiorno! Mi dica.", pl: "Dzień dobry! Słucham." },
          { sp: "TY", pl: "Poproś o 200 g szynki.", choices: ["Due etti di prosciutto, per favore.", "Due chili di prosciutto, per favore.", "Un prosciutto, per favore."], a: 0, plAnswer: "Dwadzieścia deko szynki poproszę." },
          { sp: "A", it: "Ecco. Altro?", pl: "Proszę. Coś jeszcze?" },
          { sp: "TY", pl: "Poproś jeszcze o chleb.", choices: ["Anche il pane.", "Anche del pane, grazie.", "Anche un pane grazie."], a: 1, plAnswer: "Jeszcze chleba, dziękuję." }
        ] },
      { t: "cloze", q: "Uzupełnij listę zakupów.",
        text: "Compro {{1}} pane, {{2}} acqua e {{3}} pomodori.",
        gaps: [["del"], ["dell'"], ["dei"]],
        pl: "Kupuję chleb, wodę i pomidory." },
      { t: "listen", it: "Vorrei un chilo di pomodori e un po' di basilico.", pl: "Poproszę kilogram pomidorów i trochę bazylii." },
      { t: "speak", it: "Due etti di formaggio, per favore. Basta così.", pl: "Dwadzieścia deko sera poproszę. To wszystko." }
    ]
  }
  ],
  test: {
    id: "a1-u03-test",
    cefr: "A1",
    themePl: "Sprawdzian",
    titleIt: "Test — L'aperitivo",
    titlePl: "Sprawdzian jednostki 3",
    objectivesPl: ["sprawdzić piacere, koniugacje -ere i -ire, rodzajnik cząstkowy"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "fill", q: "„Mi ___ gli spaghetti.” (Lubię spaghetti.)", a: ["piacciono"] },
      { t: "fill", q: "„Non mi ___ il pesce crudo.”", a: ["piace"] },
      { t: "mcq", q: "„Marco lubi wino” to:", opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"], a: 1 },
      { t: "conj", verb: "prendere", tense: "pres", persons: [0, 2, 5] },
      { t: "conj", verb: "capire", tense: "pres", persons: [0, 3, 5] },
      { t: "fill", q: "„___ due posti liberi.” (Są dwa wolne miejsca.)", a: ["ci sono"] },
      { t: "gender", q: "Rodzajnik cząstkowy:", opts: ["del", "dello", "dell'", "della", "dei", "delle"],
        items: [["acqua", "dell'"], ["carne", "della"], ["pane", "del"], ["mele", "delle"]] },
      { t: "trans", dir: "pl-it", q: "„Wolę białe wino.”", a: ["preferisco il vino bianco", "preferisco vino bianco"] },
      { t: "listen", it: "Ci sono delle olive e del formaggio.", pl: "Są oliwki i ser." },
      { t: "speak", it: "Mi piace molto l'aperitivo italiano.", pl: "Bardzo lubię włoskie aperitivo." }
    ]
  }
}

]);
