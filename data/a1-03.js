/* ============================================================
   A1 — część 3: jednostki 8–10
   Le persone · Tempo libero · Uno sguardo indietro
   ============================================================ */
LINGUAI.addUnits("A1", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 8 — LE PERSONE
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u08",
  icon: "👥",
  titleIt: "Le persone",
  titlePl: "Ludzie wokół nas",
  grammarPl: "dzierżawcze · opis osoby · stopniowanie",
  lessons: [
  {
    id: "a1-u08-l1",
    cefr: "A1",
    themePl: "Ludzie i relacje",
    titleIt: "Mia madre, il mio capo",
    titlePl: "Zaimki dzierżawcze",
    objectivesPl: [
      "użyć mio, tuo, suo z właściwą końcówką",
      "wiedzieć, kiedy rodzajnik znika przed członkiem rodziny",
      "opowiedzieć, kto jest kim w Twoim życiu"
    ],
    theory: [
      { h: "Zgodność z rzeczą, nie z właścicielem",
        p: "<em>Il <b>suo</b> libro</em> znaczy „jego książka” albo „jej książka” — końcówka mówi o <b>książce</b>, nie o właścicielu. Włoski nie rozróżnia tu płci posiadacza; jeśli kontekst nie wystarcza, dodaje się <em>di lui</em> albo <em>di lei</em>." },
      { h: "Rodzajnik jest normą",
        p: "Prawie zawsze mówi się <em><b>il</b> mio libro</em>, <em><b>la</b> mia macchina</em>. To różnica wobec polskiego, gdzie „moja książka” obywa się bez niczego." },
      { h: "Wyjątek: pojedynczy członek rodziny",
        p: "Bez rodzajnika: <em>mia madre, mio padre, tuo fratello, sua sorella</em>. Ale rodzajnik <b>wraca</b>, gdy: liczba mnoga (<em>i miei genitori</em>), zdrobnienie (<em>la mia sorellina</em>), dodatkowy przymiotnik (<em>la mia sorella maggiore</em>) albo forma <em>loro</em> (<em>la loro madre</em>)." },
      { trap: "<b>Loro</b> nigdy się nie odmienia i <b>zawsze</b> ma rodzajnik: <em>il loro cane, la loro casa, i loro amici, la loro madre</em>. To jedyna forma dzierżawcza z takim zachowaniem." }
    ],
    grammar: {
      title: "Formy dzierżawcze",
      table: {
        head: ["osoba", "m. poj.", "ż. poj.", "m. mn.", "ż. mn."],
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
        ["Mia sorella abita a Bari.", "Moja siostra mieszka w Bari.", "bez rodzajnika"],
        ["Le mie sorelle abitano a Bari.", "Moje siostry mieszkają w Bari.", "liczba mnoga → rodzajnik wraca"],
        ["Il mio capo è molto esigente.", "Mój szef jest bardzo wymagający."],
        ["La loro casa è vicino al parco.", "Ich dom jest blisko parku.", "loro zawsze z rodzajnikiem"],
        ["I suoi amici sono simpatici.", "Jego/jej znajomi są sympatyczni."],
        ["È il libro di lei, non di lui.", "To jej książka, nie jego.", "gdy trzeba doprecyzować"]
      ]
    },
    vocab: [
      { it: "la madre / il padre", pl: "matka / ojciec" },
      { it: "i genitori", pl: "rodzice" },
      { it: "il fratello / la sorella", pl: "brat / siostra" },
      { it: "il figlio / la figlia", pl: "syn / córka" },
      { it: "il marito / la moglie", pl: "mąż / żona" },
      { it: "il compagno / la compagna", pl: "partner / partnerka" },
      { it: "il collega / la collega", pl: "kolega / koleżanka z pracy" },
      { it: "il capo", pl: "szef" },
      { it: "il vicino di casa", pl: "sąsiad" },
      { it: "il coinquilino", pl: "współlokator" },
      { it: "il migliore amico", pl: "najlepszy przyjaciel" },
      { it: "il/la nipote", pl: "wnuk/wnuczka; siostrzeniec" }
    ],
    exercises: [
      { t: "mcq", q: "Co jest poprawne dla „moja mama”?",
        opts: ["la mia madre", "mia madre", "la madre mia"], a: 1,
        why: "Pojedynczy członek rodziny bez przymiotnika nie bierze rodzajnika." },
      { t: "mcq", q: "A dla „moi rodzice”?",
        opts: ["miei genitori", "i miei genitori", "il mio genitori"], a: 1,
        why: "W liczbie mnogiej rodzajnik wraca." },
      { t: "fill", q: "Uzupełnij: „___ loro casa è grande.”", a: ["la"],
        why: "Loro zawsze wymaga rodzajnika, także przy członkach rodziny." },
      { t: "fill", q: "Uzupełnij: „___ mia sorella maggiore.” (moja starsza siostra)", a: ["la"],
        why: "Dodatkowy przymiotnik przywraca rodzajnik." },
      { t: "gender", q: "Wybierz właściwą formę dzierżawczą dla „io”.",
        opts: ["il mio", "la mia", "i miei", "le mie"],
        items: [["libro", "il mio", "książka"], ["macchina", "la mia", "samochód"], ["genitori", "i miei", "rodzice"], ["sorelle", "le mie", "siostry"]] },
      { t: "mcq", q: "„Il suo libro” — czyja to książka?",
        opts: ["Tylko jego", "Tylko jej", "Jego albo jej — rozstrzyga kontekst"], a: 2 },
      { t: "trans", dir: "pl-it", q: "„Mój szef jest bardzo wymagający.”",
        a: ["il mio capo è molto esigente"] },
      { t: "cloze", q: "Uzupełnij (wstaw rodzajnik albo pozostaw pusty, wpisując kreskę „-”).",
        text: "{{1}} mio fratello lavora con {{2}} miei genitori.",
        gaps: [["-", ""], ["i"]],
        pl: "Mój brat pracuje z moimi rodzicami." },
      { t: "listen", it: "Mia sorella e i suoi figli abitano a Palermo.", pl: "Moja siostra i jej dzieci mieszkają w Palermo." },
      { t: "speak", it: "Il mio migliore amico si chiama Paolo.", pl: "Mój najlepszy przyjaciel nazywa się Paolo." }
    ]
  },
  {
    id: "a1-u08-l2",
    cefr: "A1",
    themePl: "Ludzie i relacje",
    titleIt: "Com'è fatto?",
    titlePl: "Opis wyglądu",
    objectivesPl: [
      "opisać czyjś wygląd",
      "użyć avere i essere we właściwych opisach",
      "zapytać, jak ktoś wygląda"
    ],
    theory: [
      { h: "Essere dla całości, avere dla części",
        p: "Wzrost, budowa i ogólne wrażenie idą przez <strong>essere</strong>: <em>è alto, è magra</em>. Konkretne cechy ciała — przez <strong>avere</strong>: <em>ha i capelli neri</em>, <em>ha gli occhi verdi</em>. Zdanie „sono i capelli neri” nie ma sensu." },
      { h: "Rodzajnik przy częściach ciała",
        p: "Włoski mówi <em>ha <b>i</b> capelli lunghi</em>, nie „ha capelli lunghi”. Po polsku rodzajnika nie ma, więc łatwo go pominąć — a bez niego zdanie brzmi niekompletnie." },
      { h: "Capelli zawsze w liczbie mnogiej",
        p: "<em>I capelli</em> to włosy jako całość; forma pojedyncza <em>il capello</em> oznacza jeden pojedynczy włos. Podobnie <em>i baffi</em> (wąsy)." },
      { tip: "Pytanie o wygląd: <em>Com'è?</em> („jaki jest?”). Pytanie o osobowość: <em>Com'è di carattere?</em>. Nie myl z <em>Come sta?</em>, które dotyczy samopoczucia." }
    ],
    grammar: {
      title: "Essere i avere w opisie",
      table: {
        head: ["cecha", "czasownik", "przykład"],
        rows: [
          ["wzrost", "essere", "È alto / bassa / di media statura."],
          ["budowa", "essere", "È magro / robusto / sportiva."],
          ["włosy", "avere", "Ha i capelli castani e ricci."],
          ["oczy", "avere", "Ha gli occhi azzurri."],
          ["wiek", "avere", "Ha circa quarant'anni."],
          ["okulary, broda", "portare / avere", "Porta gli occhiali. Ha la barba."]
        ]
      },
      examples: [
        ["Com'è tuo fratello? — È alto e magro.", "Jaki jest twój brat? — Wysoki i szczupły."],
        ["Ha i capelli lunghi e lisci.", "Ma długie, proste włosy."],
        ["Ha gli occhi verdi e porta gli occhiali.", "Ma zielone oczy i nosi okulary."],
        ["È una donna di mezza età.", "To kobieta w średnim wieku."],
        ["Assomiglia a sua madre.", "Jest podobna do matki."],
        ["Ha un bel sorriso.", "Ma ładny uśmiech."]
      ]
    },
    vocab: [
      { it: "alto / basso", pl: "wysoki / niski" },
      { it: "magro / robusto", pl: "szczupły / postawny" },
      { it: "i capelli", pl: "włosy (zawsze l. mn.)" },
      { it: "biondo / castano / nero", pl: "blond / kasztanowy / czarny" },
      { it: "lisci / ricci", pl: "proste / kręcone" },
      { it: "gli occhi", pl: "oczy" },
      { it: "azzurri / verdi / marroni", pl: "niebieskie / zielone / brązowe" },
      { it: "gli occhiali", pl: "okulary" },
      { it: "la barba", pl: "broda" },
      { it: "il sorriso", pl: "uśmiech" },
      { it: "assomigliare a", pl: "być podobnym do" },
      { it: "di media statura", pl: "średniego wzrostu" }
    ],
    exercises: [
      { t: "mcq", q: "Które zdanie jest poprawne?",
        opts: ["È i capelli neri.", "Ha i capelli neri.", "Sono capelli neri."], a: 1,
        why: "Cechy ciała opisuje avere, i to z rodzajnikiem." },
      { t: "fill", q: "Uzupełnij: „Ha ___ occhi azzurri.”", a: ["gli"],
        why: "Occhi zaczyna się od samogłoski i jest w liczbie mnogiej → gli." },
      { t: "fill", q: "Uzupełnij: „Mia sorella ___ alta e magra.”", a: ["è"] },
      { t: "mcq", q: "Co znaczy „Com'è di carattere?”",
        opts: ["Jak się czuje?", "Jaki ma charakter?", "Jak wygląda?"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["i capelli ricci", "kręcone włosy"], ["di media statura", "średniego wzrostu"], ["porta gli occhiali", "nosi okulary"], ["assomiglia a", "jest podobny do"]] },
      { t: "cloze", q: "Uzupełnij opis.",
        text: "Mio padre {{1}} alto e {{2}} i capelli grigi. {{3}} gli occhiali.",
        gaps: [["è"], ["ha"], ["porta"]],
        pl: "Mój tata jest wysoki i ma siwe włosy. Nosi okulary." },
      { t: "trans", dir: "pl-it", q: "„Ma długie, kręcone włosy.”",
        a: ["ha i capelli lunghi e ricci"] },
      { t: "order", pl: "Jaka jest twoja siostra? Jest niska i sportowa.",
        tokens: ["Com'è", "tua", "sorella?", "È", "bassa", "e", "sportiva"],
        a: ["com'è tua sorella è bassa e sportiva"] },
      { t: "listen", it: "Ha i capelli castani, gli occhi verdi e un bel sorriso.", pl: "Ma kasztanowe włosy, zielone oczy i ładny uśmiech." },
      { t: "speak", it: "Mio fratello è alto e ha i capelli neri.", pl: "Mój brat jest wysoki i ma czarne włosy." }
    ]
  },
  {
    id: "a1-u08-l3",
    cefr: "A1",
    themePl: "Ludzie i relacje",
    titleIt: "Simpatico o antipatico?",
    titlePl: "Charakter i opinie o ludziach",
    objectivesPl: [
      "opisać czyjś charakter",
      "wyrazić opinię o osobie",
      "unikać fałszywego przyjaciela: simpatico ≠ sympatyczny w polskim sensie"
    ],
    theory: [
      { h: "Simpatico to nie „miły”, tylko „zabawny, dobry w towarzystwie”",
        p: "<strong>Simpatico</strong> mówi o kimś, z kim dobrze się przebywa: żartuje, wciąga w rozmowę, jest lekki w kontakcie. „Miły” w sensie uprzejmy to raczej <em>gentile</em>. Przeciwieństwo, <em>antipatico</em>, jest znacznie mocniejsze niż polskie „niesympatyczny” — brzmi prawie jak zarzut." },
      { h: "Opinia z wyrażeniem secondo me",
        p: "<em>Secondo me</em> („moim zdaniem”) to najczęstszy sposób wprowadzania opinii. Uwaga na formę: nie <em>secondo io</em>, tylko <em>secondo me</em> — po tym przyimku idzie zaimek akcentowany." },
      { h: "Uważaj na pochwały i krytykę",
        p: "Włoski jest hojny w komplementach (<em>bravissimo, gentilissima</em>), ale krytykę osoby zwykle łagodzi: zamiast <em>è antipatico</em> częściej usłyszysz <em>è un po' particolare</em> albo <em>non è il mio tipo</em>." },
      { pl: "Fałszywi przyjaciele wobec polskiego: <em>simpatico</em> (zabawny, nie „sympatyczny”), <em>gentile</em> (uprzejmy, nie „delikatny”), <em>bravo</em> (zdolny, nie „brawo!” jako okrzyk)." }
    ],
    grammar: {
      title: "Przymiotniki charakteru",
      table: {
        head: ["włoski", "polski", "uwaga"],
        rows: [
          ["simpatico / antipatico", "zabawny, dobry w kontakcie / nieznośny", "antipatico jest mocne"],
          ["gentile", "uprzejmy", "nie „delikatny”"],
          ["bravo", "zdolny, dobry w czymś", "„bravo in matematica”"],
          ["socievole / timido", "towarzyski / nieśmiały", ""],
          ["generoso / egoista", "hojny / egoistyczny", "egoista bez zmiany w r. męskim"],
          ["tranquillo / nervoso", "spokojny / nerwowy", ""]
        ]
      },
      examples: [
        ["Il mio collega è molto simpatico.", "Mój kolega z pracy jest bardzo zabawny."],
        ["Secondo me è una persona generosa.", "Moim zdaniem to hojna osoba."],
        ["È bravissima in matematica.", "Jest bardzo dobra z matematyki."],
        ["È un po' timido all'inizio.", "Na początku jest trochę nieśmiały."],
        ["Non è il mio tipo, ma è gentile.", "Nie w moim typie, ale jest uprzejmy."],
        ["Mi sta simpatico.", "Lubię go.", "dosłownie: „jest mi sympatyczny”"]
      ]
    },
    vocab: [
      { it: "simpatico / antipatico", pl: "zabawny / nieznośny" },
      { it: "gentile", pl: "uprzejmy" },
      { it: "bravo", pl: "zdolny, dobry w czymś" },
      { it: "socievole", pl: "towarzyski" },
      { it: "timido", pl: "nieśmiały" },
      { it: "generoso", pl: "hojny" },
      { it: "egoista", pl: "egoistyczny" },
      { it: "tranquillo", pl: "spokojny" },
      { it: "divertente", pl: "zabawny (o rzeczy lub osobie)" },
      { it: "noioso", pl: "nudny" },
      { it: "secondo me", pl: "moim zdaniem" },
      { it: "mi sta simpatico", pl: "lubię go / ją" }
    ],
    exercises: [
      { t: "mcq", q: "„Simpatico” najbliżej znaczy:",
        opts: ["uprzejmy, grzeczny", "zabawny, dobry w towarzystwie", "delikatny"], a: 1,
        why: "„Uprzejmy” to gentile. Simpatico mówi o łatwości kontaktu." },
      { t: "mcq", q: "Która forma jest poprawna?",
        opts: ["Secondo io", "Secondo me", "Secondo mio"], a: 1,
        why: "Po przyimku secondo stoi zaimek akcentowany: me, te, lui, lei." },
      { t: "fill", q: "Uzupełnij: „Mia collega è molto ___.” (uprzejma)", a: ["gentile"] },
      { t: "mcq", q: "„È bravo in matematica” znaczy:",
        opts: ["Brawo za matematykę!", "Jest dobry z matematyki", "Lubi matematykę"], a: 1 },
      { t: "match", q: "Połącz przymiotniki z przeciwieństwami.",
        pairs: [["simpatico", "antipatico"], ["generoso", "egoista"], ["socievole", "timido"], ["tranquillo", "nervoso"]] },
      { t: "trans", dir: "pl-it", q: "„Moim zdaniem to spokojna osoba.”",
        a: ["secondo me è una persona tranquilla"] },
      { t: "cloze", q: "Uzupełnij.",
        text: "Il mio coinquilino è {{1}} me una persona molto {{2}}: parla con tutti.",
        gaps: [["secondo"], ["socievole"]],
        pl: "Mój współlokator jest moim zdaniem bardzo towarzyską osobą: rozmawia ze wszystkimi." },
      { t: "order", pl: "Na początku jest trochę nieśmiały.",
        tokens: ["All'inizio", "è", "un", "po'", "timido"], a: ["all'inizio è un po' timido"] },
      { t: "listen", it: "Secondo me è una persona generosa e divertente.", pl: "Moim zdaniem to hojna i zabawna osoba." },
      { t: "speak", it: "Il mio collega è molto simpatico, mi sta simpatico.", pl: "Mój kolega jest bardzo zabawny, lubię go." }
    ]
  },
  {
    id: "a1-u08-l4",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Più alto di te",
    titlePl: "Porównania",
    objectivesPl: [
      "porównać dwie osoby lub rzeczy",
      "wybrać między di a che",
      "użyć nieregularnych form migliore i peggiore"
    ],
    theory: [
      { h: "Trzy podstawowe konstrukcje",
        list: [
          "<b>più… di</b> — bardziej niż: <em>Anna è più alta di Marco.</em>",
          "<b>meno… di</b> — mniej niż: <em>Questo è meno caro di quello.</em>",
          "<b>come / quanto</b> — tak samo jak: <em>È alto come te.</em>"
        ] },
      { h: "Di czy che — reguła praktyczna",
        p: "<strong>Di</strong> gdy porównujesz <b>dwie różne rzeczy pod jednym względem</b>: <em>Roma è più grande di Firenze</em>. <strong>Che</strong> gdy porównujesz <b>dwie cechy tej samej rzeczy</b>, dwa czasowniki albo gdy przed drugim członem stoi przyimek: <em>È più simpatico che intelligente</em>, <em>È più facile parlare che scrivere</em>, <em>Vado più spesso a Roma che a Milano</em>." },
      { h: "Formy nieregularne",
        p: "<em>buono → migliore</em> (lepszy), <em>cattivo → peggiore</em> (gorszy), <em>grande → maggiore</em>, <em>piccolo → minore</em>. Formy regularne (<em>più buono, più cattivo</em>) też istnieją i są używane, zwłaszcza o smaku: <em>questa pizza è più buona</em>." },
      { trap: "Po <b>di</b> stoi zaimek akcentowany: <em>più alto di <b>me</b></em>, nie „di io”. Po <b>come</b> tak samo: <em>come te</em>." }
    ],
    grammar: {
      title: "Stopniowanie porównawcze",
      table: {
        head: ["konstrukcja", "przykład", "po polsku"],
        rows: [
          ["più… di", "Anna è più alta di Marco.", "Anna jest wyższa od Marco."],
          ["meno… di", "Questo è meno caro di quello.", "To jest tańsze od tamtego."],
          ["come", "Sei alto come me.", "Jesteś tak wysoki jak ja."],
          ["più… che (dwie cechy)", "È più simpatico che bello.", "Jest bardziej zabawny niż przystojny."],
          ["più… che (czasowniki)", "È più facile parlare che scrivere.", "Łatwiej mówić niż pisać."],
          ["il più… di", "È il più bravo della classe.", "Jest najlepszy w klasie."]
        ]
      },
      examples: [
        ["Milano è più cara di Bologna.", "Mediolan jest droższy od Bolonii."],
        ["Mio fratello è meno paziente di me.", "Mój brat jest mniej cierpliwy ode mnie."],
        ["Questo vino è migliore dell'altro.", "To wino jest lepsze od tamtego."],
        ["È la peggiore giornata della settimana.", "To najgorszy dzień tygodnia."],
        ["Lavoro più a Roma che a Milano.", "Pracuję częściej w Rzymie niż w Mediolanie."],
        ["Sei gentile come tua madre.", "Jesteś uprzejmy jak twoja mama."]
      ]
    },
    vocab: [
      { it: "più… di", pl: "bardziej… niż" },
      { it: "meno… di", pl: "mniej… niż" },
      { it: "come", pl: "tak jak" },
      { it: "migliore / peggiore", pl: "lepszy / gorszy" },
      { it: "il più… di", pl: "naj… z" },
      { it: "paziente", pl: "cierpliwy" },
      { it: "veloce / lento", pl: "szybki / powolny" },
      { it: "facile / difficile", pl: "łatwy / trudny" },
      { it: "giovane / anziano", pl: "młody / starszy" },
      { it: "uguale", pl: "taki sam" },
      { it: "diverso da", pl: "inny niż" },
      { it: "soprattutto", pl: "przede wszystkim" }
    ],
    exercises: [
      { t: "mcq", q: "„Anna è più alta ___ Marco.”", opts: ["che", "di", "come"], a: 1,
        why: "Dwie różne osoby porównywane pod jednym względem → di." },
      { t: "mcq", q: "„È più simpatico ___ bello.”", opts: ["di", "che", "come"], a: 1,
        why: "Dwie cechy tej samej osoby → che." },
      { t: "fill", q: "Uzupełnij: „Sei più alto ___ me.”", a: ["di"],
        why: "Po di stoi zaimek akcentowany: di me, di te, di lui." },
      { t: "fill", q: "Podaj nieregularny stopień wyższy od „buono”: ___", a: ["migliore"] },
      { t: "mcq", q: "„È il più bravo della classe” znaczy:",
        opts: ["Jest lepszy od klasy", "Jest najlepszy w klasie", "Jest tak dobry jak klasa"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Mediolan jest droższy od Bolonii.”",
        a: ["milano è più cara di bologna", "milano è più caro di bologna"] },
      { t: "cloze", q: "Uzupełnij di albo che.",
        text: "Roma è più grande {{1}} Firenze, ma è più facile parlare {{2}} scrivere in italiano.",
        gaps: [["di"], ["che"]],
        pl: "Rzym jest większy od Florencji, ale łatwiej mówić niż pisać po włosku." },
      { t: "order", pl: "To wino jest lepsze od tamtego.",
        tokens: ["Questo", "vino", "è", "migliore", "dell'altro"],
        a: ["questo vino è migliore dell'altro"] },
      { t: "listen", it: "Mio fratello è meno paziente di me.", pl: "Mój brat jest mniej cierpliwy ode mnie." },
      { t: "speak", it: "Questa città è più tranquilla di Milano.", pl: "To miasto jest spokojniejsze niż Mediolan." }
    ]
  }
  ],
  test: {
    id: "a1-u08-test",
    cefr: "A1", themePl: "Sprawdzian",
    titleIt: "Test — Le persone", titlePl: "Sprawdzian jednostki 8",
    objectivesPl: ["sprawdzić dzierżawcze, opis osoby i porównania"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„moja mama” to:", opts: ["la mia madre", "mia madre", "mia la madre"], a: 1 },
      { t: "fill", q: "„___ miei genitori abitano a Lodz.”", a: ["i"] },
      { t: "fill", q: "„___ loro casa è nuova.”", a: ["la"] },
      { t: "mcq", q: "Poprawne zdanie:", opts: ["È i capelli neri.", "Ha i capelli neri.", "Ha capelli neri."], a: 1 },
      { t: "fill", q: "„Ha ___ occhi verdi.”", a: ["gli"] },
      { t: "mcq", q: "„Simpatico” znaczy:", opts: ["uprzejmy", "zabawny, dobry w kontakcie", "delikatny"], a: 1 },
      { t: "mcq", q: "„È più alta ___ me.”", opts: ["che", "di", "come"], a: 1 },
      { t: "fill", q: "Stopień wyższy od „cattivo”: ___", a: ["peggiore"] },
      { t: "listen", it: "Mia sorella è più giovane di me e ha i capelli ricci.", pl: "Moja siostra jest młodsza ode mnie i ma kręcone włosy." },
      { t: "speak", it: "Secondo me è una persona molto gentile.", pl: "Moim zdaniem to bardzo uprzejma osoba." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 9 — TEMPO LIBERO
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u09",
  icon: "🎬",
  titleIt: "Tempo libero",
  titlePl: "Czas wolny",
  grammarPl: "fare/giocare/suonare · pogoda · stare + gerundio",
  lessons: [
  {
    id: "a1-u09-l1",
    cefr: "A1",
    themePl: "Czas wolny",
    titleIt: "Che fai nel weekend?",
    titlePl: "Zainteresowania i propozycje",
    objectivesPl: [
      "opowiedzieć, co robisz w wolnym czasie",
      "odróżnić fare, giocare i suonare",
      "zaproponować wspólne wyjście i odpowiedzieć na propozycję"
    ],
    theory: [
      { h: "Trzy czasowniki, trzy różne obszary",
        list: [
          "<b>fare</b> + sport indywidualny lub czynność: <em>faccio yoga, faccio una passeggiata, faccio nuoto</em>",
          "<b>giocare a</b> + gra lub sport zespołowy: <em>gioco a calcio, gioco a carte, gioco a tennis</em>",
          "<b>suonare</b> + instrument: <em>suono la chitarra, suono il pianoforte</em>"
        ] },
      { trap: "Polskie „grać” obsługuje wszystko: grać w piłkę, grać na gitarze, grać w karty. Włoski rozdziela to na <em>giocare</em> (gra) i <em>suonare</em> (instrument). „Gioco la chitarra” brzmi jak zdanie z tłumacza maszynowego." },
      { h: "Propozycje",
        p: "Najczęstsze formuły: <em>Ti va di…?</em> („masz ochotę…?”), <em>Che ne dici di…?</em> („co powiesz na…?”), <em>Andiamo a…?</em>. Odpowiedzi: <em>Volentieri!</em>, <em>Perché no?</em>, <em>Mi dispiace, non posso</em>." },
      { tip: "<em>Ti va</em> jest bezosobowe jak <em>mi piace</em>: <em>ti va un caffè?</em> („masz ochotę na kawę?”). Konstrukcja z rzeczą jako podmiotem." }
    ],
    grammar: {
      title: "Fare, giocare, suonare",
      table: {
        head: ["czasownik", "z czym", "przykład"],
        rows: [
          ["fare", "sport indywidualny, czynność", "Faccio palestra tre volte a settimana."],
          ["giocare a", "gra, sport zespołowy", "Gioco a calcio il sabato."],
          ["suonare", "instrument", "Suono il pianoforte da dieci anni."],
          ["andare a/in", "miejsce lub czynność", "Vado a ballare / in piscina."],
          ["ti va di + bezokolicznik", "propozycja", "Ti va di andare al cinema?"]
        ]
      },
      examples: [
        ["Nel weekend faccio una passeggiata in centro.", "W weekend chodzę na spacer po centrum."],
        ["Gioco a tennis con mia sorella.", "Gram w tenisa z siostrą."],
        ["Suono la chitarra, ma male.", "Gram na gitarze, ale kiepsko."],
        ["Ti va di andare al cinema stasera?", "Masz ochotę pójść dziś do kina?"],
        ["Volentieri! A che ora?", "Chętnie! O której?"],
        ["Mi dispiace, stasera non posso.", "Przykro mi, dziś wieczorem nie mogę."]
      ]
    },
    vocab: [
      { it: "il tempo libero", pl: "czas wolny" },
      { it: "fare sport", pl: "uprawiać sport" },
      { it: "la palestra", pl: "siłownia" },
      { it: "la piscina", pl: "basen" },
      { it: "giocare a calcio", pl: "grać w piłkę" },
      { it: "suonare la chitarra", pl: "grać na gitarze" },
      { it: "ballare", pl: "tańczyć" },
      { it: "leggere un libro", pl: "czytać książkę" },
      { it: "guardare una serie", pl: "oglądać serial" },
      { it: "ti va di…?", pl: "masz ochotę…?" },
      { it: "volentieri", pl: "chętnie" },
      { it: "magari un'altra volta", pl: "może innym razem" }
    ],
    exercises: [
      { t: "mcq", q: "„___ la chitarra.” (gram na gitarze)",
        opts: ["Gioco", "Suono", "Faccio"], a: 1,
        why: "Instrument bierze suonare, nigdy giocare." },
      { t: "mcq", q: "„___ a calcio.” (gram w piłkę)",
        opts: ["Suono", "Gioco", "Faccio"], a: 1 },
      { t: "fill", q: "Uzupełnij: „___ yoga due volte a settimana.” (uprawiam jogę)",
        a: ["faccio"] },
      { t: "fill", q: "Uzupełnij: „___ va di andare al cinema?” (masz ochotę)", a: ["ti"] },
      { t: "match", q: "Połącz czasownik z uzupełnieniem.",
        pairs: [["giocare a", "carte"], ["suonare", "il pianoforte"], ["fare", "una passeggiata"], ["andare in", "piscina"]] },
      { t: "trans", dir: "pl-it", q: "„Masz ochotę pójść dziś wieczorem do kina?”",
        a: ["ti va di andare al cinema stasera", "ti va di andare al cinema stasera?"] },
      { t: "cloze", q: "Uzupełnij.",
        text: "Il sabato {{1}} a tennis, la domenica {{2}} la chitarra e {{3}} una passeggiata.",
        gaps: [["gioco"], ["suono"], ["faccio"]],
        pl: "W soboty gram w tenisa, w niedziele gram na gitarze i chodzę na spacer." },
      { t: "dialogue", q: "Kolega proponuje wyjście.",
        setting: "Czwartek wieczorem, wiadomość głosowa od znajomego.",
        lines: [
          { sp: "A", it: "Ciao! Ti va di venire al concerto sabato?", pl: "Cześć! Masz ochotę iść na koncert w sobotę?" },
          { sp: "TY", pl: "Zgódź się z entuzjazmem i zapytaj o godzinę.", choices: ["Volentieri! A che ora?", "Mi dispiace, non posso.", "Prego, a che ora?"], a: 0, plAnswer: "Chętnie! O której?" },
          { sp: "A", it: "Alle nove, ma ci troviamo alle otto e mezza in piazza.", pl: "O dziewiątej, ale spotykamy się o wpół do dziewiątej na placu." },
          { sp: "TY", pl: "Potwierdź i pożegnaj się.", choices: ["Perfetto, ci vediamo lì!", "Non c'è male, ciao.", "Va bene, il conto per favore."], a: 0, plAnswer: "Świetnie, widzimy się tam!" }
        ] },
      { t: "listen", it: "Nel tempo libero faccio palestra e guardo serie tv.", pl: "W wolnym czasie chodzę na siłownię i oglądam seriale." },
      { t: "speak", it: "Ti va di fare una passeggiata in centro?", pl: "Masz ochotę na spacer po centrum?" }
    ]
  },
  {
    id: "a1-u09-l2",
    cefr: "A1",
    themePl: "Czas wolny",
    titleIt: "Che tempo fa?",
    titlePl: "Pogoda i pory roku",
    objectivesPl: [
      "opisać pogodę",
      "użyć fare bezosobowo",
      "połączyć pogodę z planami"
    ],
    theory: [
      { h: "Pogodę robi się, a nie jest",
        p: "Włoski mówi <em>fa caldo</em> („robi gorąco”), <em>fa freddo</em>, <em>fa bel tempo</em>. To użycie <strong>bezosobowe</strong> czasownika <em>fare</em>: nie ma podmiotu, forma zawsze w trzeciej osobie liczby pojedynczej." },
      { h: "Trzy różne konstrukcje",
        list: [
          "<b>fare</b> + rzeczownik: <em>fa caldo, fa freddo, fa bel/brutto tempo</em>",
          "<b>c'è</b> + rzeczownik: <em>c'è il sole, c'è vento, c'è nebbia</em>",
          "czasownik osobny: <em>piove</em> (pada deszcz), <em>nevica</em> (pada śnieg)"
        ] },
      { trap: "„Sono caldo” znaczy „jestem gorący” w sensie temperatury ciała albo, w potocznym użyciu, coś zupełnie innego. O pogodzie mówi się <em>fa caldo</em>, a o sobie <em>ho caldo</em>." },
      { h: "Pory roku",
        p: "<em>in primavera, in estate, in autunno, in inverno</em>. Miesiące bez rodzajnika po <em>a</em> lub <em>in</em>: <em>a gennaio</em>, <em>in luglio</em> — obie formy są poprawne." }
    ],
    grammar: {
      title: "Pogoda",
      table: {
        head: ["konstrukcja", "przykład", "po polsku"],
        rows: [
          ["fare", "Fa caldo. / Fa freddo.", "Jest gorąco. / Jest zimno."],
          ["fare", "Fa bel tempo. / Fa brutto tempo.", "Jest ładna / brzydka pogoda."],
          ["c'è", "C'è il sole. / C'è vento.", "Jest słońce. / Wieje."],
          ["czasownik", "Piove. / Nevica.", "Pada deszcz. / Pada śnieg."],
          ["stopnie", "Ci sono venti gradi.", "Jest dwadzieścia stopni."],
          ["pytanie", "Che tempo fa?", "Jaka jest pogoda?"]
        ]
      },
      examples: [
        ["Oggi fa caldo, andiamo al mare.", "Dziś jest gorąco, jedziemy nad morze."],
        ["In inverno a Milano c'è spesso nebbia.", "Zimą w Mediolanie często jest mgła."],
        ["Domani piove, restiamo a casa.", "Jutro pada, zostajemy w domu."],
        ["Che tempo fa a Roma? — Bellissimo!", "Jaka pogoda w Rzymie? — Przepiękna!"],
        ["Ho freddo, chiudi la finestra.", "Zimno mi, zamknij okno.", "o sobie: avere"],
        ["In primavera è la stagione migliore.", "Wiosna to najlepsza pora roku."]
      ]
    },
    vocab: [
      { it: "che tempo fa?", pl: "jaka jest pogoda?" },
      { it: "fa caldo / fa freddo", pl: "jest gorąco / zimno" },
      { it: "c'è il sole", pl: "jest słońce" },
      { it: "piove / nevica", pl: "pada deszcz / śnieg" },
      { it: "c'è vento / nebbia", pl: "wieje / jest mgła" },
      { it: "la pioggia / la neve", pl: "deszcz / śnieg" },
      { it: "le nuvole", pl: "chmury" },
      { it: "il grado", pl: "stopień" },
      { it: "la primavera / l'estate", pl: "wiosna / lato" },
      { it: "l'autunno / l'inverno", pl: "jesień / zima" },
      { it: "l'ombrello", pl: "parasol" },
      { it: "la previsione del tempo", pl: "prognoza pogody" }
    ],
    exercises: [
      { t: "mcq", q: "Jak powiesz „jest gorąco” (o pogodzie)?",
        opts: ["Sono caldo", "Fa caldo", "Ho caldo"], a: 1,
        why: "„Ho caldo” znaczy „mnie jest gorąco”; o pogodzie mówi się fa caldo." },
      { t: "fill", q: "Uzupełnij: „___ il sole.” (jest słońce)", a: ["c'è", "ce"] },
      { t: "fill", q: "Uzupełnij: „Domani ___.” (jutro pada deszcz)", a: ["piove"] },
      { t: "mcq", q: "„Ho freddo” znaczy:",
        opts: ["Jest zimno na dworze", "Jest mi zimno", "Robi się zimno"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["nevica", "pada śnieg"], ["c'è nebbia", "jest mgła"], ["fa brutto tempo", "brzydka pogoda"], ["l'ombrello", "parasol"]] },
      { t: "cloze", q: "Uzupełnij prognozę.",
        text: "Domani {{1}} freddo, {{2}} vento e nel pomeriggio {{3}}.",
        gaps: [["fa"], ["c'è", "ce"], ["piove"]],
        pl: "Jutro będzie zimno, będzie wiać, a po południu pada deszcz." },
      { t: "trans", dir: "pl-it", q: "„Jaka jest pogoda w Rzymie?”",
        a: ["che tempo fa a roma", "che tempo fa a roma?"] },
      { t: "order", pl: "Zimą w Mediolanie często jest mgła.",
        tokens: ["In", "inverno", "a", "Milano", "c'è", "spesso", "nebbia"],
        a: ["in inverno a milano c'è spesso nebbia"] },
      { t: "listen", it: "Oggi fa bel tempo, ci sono venticinque gradi.", pl: "Dziś jest ładna pogoda, jest dwadzieścia pięć stopni." },
      { t: "speak", it: "Che tempo fa oggi? Fa freddo e piove.", pl: "Jaka jest dziś pogoda? Zimno i pada." }
    ]
  },
  {
    id: "a1-u09-l3",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Sto lavorando",
    titlePl: "Stare + gerundio",
    objectivesPl: [
      "opisać czynność trwającą w tej chwili",
      "utworzyć gerundio",
      "wiedzieć, kiedy tej konstrukcji NIE używać"
    ],
    theory: [
      { h: "Czynność właśnie teraz",
        p: "<strong>Stare + gerundio</strong> podkreśla, że coś dzieje się <b>w tym momencie</b>: <em>Sto lavorando</em> („właśnie pracuję”). Zwykłe <em>lavoro</em> też jest poprawne, ale mówi ogólnie: „pracuję (mam pracę, pracuję zwykle)”." },
      { h: "Tworzenie gerundio",
        list: [
          "<b>-are → -ando</b>: parlare → parl<b>ando</b>",
          "<b>-ere → -endo</b>: prendere → prend<b>endo</b>",
          "<b>-ire → -endo</b>: dormire → dorm<b>endo</b>",
          "nieregularne: <em>fare → facendo, dire → dicendo, bere → bevendo</em>"
        ] },
      { trap: "W przeciwieństwie do angielskiego, <b>stare + gerundio nie służy do mówienia o przyszłości</b>. „Jutro spotykam się z Anną” to <em>domani vedo Anna</em>, nigdy „sto vedendo Anna domani”." },
      { h: "Zaimki przy tej konstrukcji",
        p: "Zaimek może stać przed <em>stare</em> albo doczepić się do gerundio: <em><b>ti</b> sto aspettando</em> = <em>sto aspettando<b>ti</b></em>. Pierwsza wersja jest częstsza w mowie." }
    ],
    grammar: {
      title: "Stare + gerundio",
      table: {
        head: ["osoba", "stare", "przykład"],
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
        ["Che stai facendo? — Sto studiando.", "Co robisz? — Uczę się."],
        ["Non posso parlare, sto guidando.", "Nie mogę rozmawiać, prowadzę."],
        ["Stanno arrivando, aspetta cinque minuti.", "Już jadą, poczekaj pięć minut."],
        ["Ti sto aspettando davanti al bar.", "Czekam na ciebie przed barem."],
        ["Sto per uscire.", "Zaraz wychodzę.", "stare per = zaraz coś zrobić"],
        ["Domani vado a Roma.", "Jutro jadę do Rzymu.", "przyszłość: zwykły czas teraźniejszy"]
      ]
    },
    vocab: [
      { it: "stare + gerundio", pl: "właśnie coś robić" },
      { it: "stare per + bezokolicznik", pl: "zaraz coś zrobić" },
      { it: "adesso / ora", pl: "teraz" },
      { it: "in questo momento", pl: "w tej chwili" },
      { it: "aspettare", pl: "czekać" },
      { it: "guidare", pl: "prowadzić (auto)" },
      { it: "scherzare", pl: "żartować" },
      { it: "arrivare", pl: "przyjeżdżać, przychodzić" },
      { it: "uscire", pl: "wychodzić" },
      { it: "sbrigarsi", pl: "pospieszyć się" },
      { it: "un attimo", pl: "chwileczkę" },
      { it: "sono in ritardo", pl: "jestem spóźniony" }
    ],
    exercises: [
      { t: "mcq", q: "„Sto mangiando” znaczy:",
        opts: ["Jem zwykle", "Właśnie jem", "Będę jadł"], a: 1 },
      { t: "fill", q: "Utwórz gerundio od „fare”: ___", a: ["facendo"] },
      { t: "fill", q: "Utwórz gerundio od „dormire”: ___", a: ["dormendo"] },
      { t: "fill", q: "Uzupełnij: „Loro ___ arrivando.”", a: ["stanno"] },
      { t: "mcq", q: "Jak powiesz „jutro spotykam się z Anną”?",
        opts: ["Sto vedendo Anna domani", "Domani vedo Anna", "Sto per vedere Anna domani"], a: 1,
        why: "Stare + gerundio nie służy do wyrażania przyszłości — inaczej niż w angielskim." },
      { t: "trans", dir: "pl-it", q: "„Nie mogę rozmawiać, prowadzę.”",
        a: ["non posso parlare sto guidando", "non posso parlare, sto guidando"] },
      { t: "cloze", q: "Uzupełnij rozmowę telefoniczną.",
        text: "— Che {{1}} facendo? — {{2}} uscendo di casa, {{3}} per arrivare.",
        gaps: [["stai"], ["sto"], ["sto"]],
        pl: "— Co robisz? — Wychodzę z domu, zaraz będę." },
      { t: "order", pl: "Czekam na ciebie przed barem.",
        tokens: ["Ti", "sto", "aspettando", "davanti", "al", "bar"],
        a: ["ti sto aspettando davanti al bar"] },
      { t: "listen", it: "Scusa, sto per entrare in riunione.", pl: "Wybacz, zaraz wchodzę na spotkanie." },
      { t: "speak", it: "Che stai facendo? — Sto studiando italiano.", pl: "Co robisz? — Uczę się włoskiego." }
    ]
  },
  {
    id: "a1-u09-l4",
    cefr: "A1",
    themePl: "Czas wolny",
    titleIt: "Andiamo al cinema",
    titlePl: "Kultura, kino i muzyka",
    objectivesPl: [
      "kupić bilet i porozmawiać o filmie",
      "wyrazić opinię o książce, filmie, koncercie",
      "użyć podstawowych zwrotów oceniających"
    ],
    theory: [
      { h: "Ocena: mi è piaciuto",
        p: "O rzeczy, która się podobała, mówi się <em>mi è piaciuto</em> (rodzaj męski) albo <em>mi è piaciuta</em> (żeński). To już czas przeszły z <em>piacere</em> — pełne wyjaśnienie na poziomie A2, ale zwrot jest tak częsty, że warto go znać od razu." },
      { h: "Wersja oryginalna",
        p: "We Włoszech filmy tradycyjnie są dubbingowane. Seans z napisami oznaczany jest jako <strong>V.O.</strong> (versione originale) albo <em>sottotitolato</em>. W dużych miastach takie seanse są, ale trzeba ich szukać." },
      { h: "Bilety",
        p: "<em>Un biglietto intero</em> (normalny), <em>ridotto</em> (ulgowy). Rezerwacja miejsca jest standardem: <em>Che posto preferisce?</em>" },
      { tip: "Słowo <em>spettacolo</em> oznacza zarówno seans filmowy, jak i przedstawienie teatralne. <em>Lo spettacolo delle 21</em> to seans o 21." }
    ],
    grammar: {
      title: "Opinie i kultura",
      table: {
        head: ["funkcja", "zwrot", "po polsku"],
        rows: [
          ["ocena pozytywna", "Mi è piaciuto molto.", "Bardzo mi się podobało."],
          ["ocena negatywna", "Non mi è piaciuto per niente.", "W ogóle mi się nie podobało."],
          ["polecenie", "Te lo consiglio.", "Polecam ci to."],
          ["nuda", "Mi ha annoiato.", "Znudziło mnie."],
          ["bilet", "Due biglietti per lo spettacolo delle nove.", "Dwa bilety na seans o dziewiątej."],
          ["pytanie o opinię", "Com'era?", "Jak było?"]
        ]
      },
      examples: [
        ["Ieri sera sono andata al cinema.", "Wczoraj wieczorem byłam w kinie."],
        ["Il film era in versione originale.", "Film był w wersji oryginalnej."],
        ["Mi è piaciuta molto la colonna sonora.", "Bardzo podobała mi się ścieżka dźwiękowa."],
        ["Due biglietti ridotti, per favore.", "Dwa bilety ulgowe poproszę."],
        ["Che genere preferisci?", "Jaki gatunek wolisz?"],
        ["Te lo consiglio davvero.", "Naprawdę ci to polecam."]
      ]
    },
    vocab: [
      { it: "il film", pl: "film" },
      { it: "lo spettacolo", pl: "seans, przedstawienie" },
      { it: "il biglietto intero / ridotto", pl: "bilet normalny / ulgowy" },
      { it: "la versione originale (V.O.)", pl: "wersja oryginalna" },
      { it: "i sottotitoli", pl: "napisy" },
      { it: "il regista", pl: "reżyser" },
      { it: "l'attore / l'attrice", pl: "aktor / aktorka" },
      { it: "la colonna sonora", pl: "ścieżka dźwiękowa" },
      { it: "il concerto", pl: "koncert" },
      { it: "la mostra", pl: "wystawa" },
      { it: "consigliare", pl: "polecać" },
      { it: "com'era?", pl: "jak było?" }
    ],
    culture: {
      titlePl: "Okiem Włocha: kino i dubbing",
      textPl: "<p>Włochy mają jedną z najsilniejszych szkół dubbingu na świecie. Aktorzy dubbingowi (<i>doppiatori</i>) są rozpoznawalni, a niektórzy przez dekady „użyczali głosu” tej samej gwieździe.</p>" +
        "<p>Skutek uboczny: Włosi statystycznie słabiej rozumieją angielski ze słuchu niż Skandynawowie, którzy oglądają z napisami. To zmienia się wraz z platformami streamingowymi.</p>" +
        "<p>Jeśli uczysz się włoskiego, dubbing jest Twoim sprzymierzeńcem: znany film po włosku to gotowy materiał do słuchania z przewidywalną fabułą.</p>"
    },
    exercises: [
      { t: "mcq", q: "Co oznacza „V.O.” przy seansie?",
        opts: ["Wersja skrócona", "Wersja oryginalna, zwykle z napisami", "Wersja dla dzieci"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Mi è ___ molto il film.” (bardzo mi się podobał)",
        a: ["piaciuto"] },
      { t: "fill", q: "Uzupełnij: „Due biglietti ___, per favore.” (ulgowe)", a: ["ridotti"] },
      { t: "match", q: "Połącz.",
        pairs: [["il regista", "reżyser"], ["la colonna sonora", "ścieżka dźwiękowa"], ["i sottotitoli", "napisy"], ["la mostra", "wystawa"]] },
      { t: "trans", dir: "pl-it", q: "„Bardzo mi się podobało, polecam ci.”",
        a: ["mi è piaciuto molto te lo consiglio", "mi è piaciuto molto, te lo consiglio"] },
      { t: "mcq", q: "„Lo spettacolo delle nove” to:",
        opts: ["Dziewiąte przedstawienie", "Seans o dziewiątej", "Dziewięć biletów"], a: 1 },
      { t: "cloze", q: "Uzupełnij rozmowę przy kasie.",
        text: "— Due biglietti per lo {{1}} delle nove. — Interi o {{2}}? — Uno intero e uno {{3}}.",
        gaps: [["spettacolo"], ["ridotti"], ["ridotto"]],
        pl: "— Dwa bilety na seans o dziewiątej. — Normalne czy ulgowe? — Jeden normalny i jeden ulgowy." },
      { t: "order", pl: "Jaki gatunek filmów wolisz?",
        tokens: ["Che", "genere", "di", "film", "preferisci?"],
        a: ["che genere di film preferisci"] },
      { t: "listen", it: "Il concerto mi è piaciuto molto, soprattutto la seconda parte.", pl: "Koncert bardzo mi się podobał, zwłaszcza druga część." },
      { t: "speak", it: "Ti va di andare a vedere una mostra domenica?", pl: "Masz ochotę pójść w niedzielę na wystawę?" }
    ]
  }
  ],
  test: {
    id: "a1-u09-test",
    cefr: "A1", themePl: "Sprawdzian",
    titleIt: "Test — Tempo libero", titlePl: "Sprawdzian jednostki 9",
    objectivesPl: ["sprawdzić fare/giocare/suonare, pogodę i stare + gerundio"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„___ la chitarra.”", opts: ["Gioco", "Suono", "Faccio"], a: 1 },
      { t: "mcq", q: "„___ a carte.”", opts: ["Suono", "Gioco", "Faccio"], a: 1 },
      { t: "fill", q: "„___ caldo oggi.” (jest gorąco)", a: ["fa"] },
      { t: "fill", q: "„___ il sole.”", a: ["c'è", "ce"] },
      { t: "fill", q: "Gerundio od „bere”: ___", a: ["bevendo"] },
      { t: "fill", q: "„Loro ___ arrivando.”", a: ["stanno"] },
      { t: "mcq", q: "„Jutro jadę do Rzymu”:", opts: ["Sto andando a Roma domani", "Domani vado a Roma", "Sto per Roma domani"], a: 1 },
      { t: "order", pl: "Masz ochotę na spacer?", tokens: ["Ti", "va", "di", "fare", "una", "passeggiata?"], a: ["ti va di fare una passeggiata"] },
      { t: "listen", it: "Sto uscendo adesso, fa freddo, prendo l'ombrello.", pl: "Właśnie wychodzę, jest zimno, biorę parasol." },
      { t: "speak", it: "Nel weekend gioco a tennis e faccio una passeggiata.", pl: "W weekend gram w tenisa i chodzę na spacer." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 10 — UNO SGUARDO INDIETRO
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u10",
  icon: "🕰️",
  titleIt: "Uno sguardo indietro",
  titlePl: "Spojrzenie wstecz",
  grammarPl: "passato prossimo · pierwsze opowiadanie · powtórka A1",
  lessons: [
  {
    id: "a1-u10-l1",
    cefr: "A1",
    themePl: "Przeszłość",
    titleIt: "Ho mangiato, ho visto",
    titlePl: "Passato prossimo z avere",
    objectivesPl: [
      "zbudować czas przeszły z avere",
      "utworzyć regularny imiesłów przeszły",
      "opowiedzieć, co robiłeś wczoraj"
    ],
    theory: [
      { h: "Czas złożony z dwóch elementów",
        p: "<strong>Passato prossimo</strong> = <em>avere</em> lub <em>essere</em> w czasie teraźniejszym + <b>imiesłów przeszły</b>. To najczęstszy włoski czas przeszły w rozmowie i odpowiada polskiemu „zjadłem”, „widziałem”, „powiedziałem”." },
      { h: "Imiesłów regularny",
        list: [
          "<b>-are → -ato</b>: parlare → parl<b>ato</b>",
          "<b>-ere → -uto</b>: credere → cred<b>uto</b>",
          "<b>-ire → -ito</b>: finire → fin<b>ito</b>"
        ] },
      { h: "Większość czasowników bierze avere",
        p: "Wszystkie czasowniki <b>przechodnie</b> (te, po których może stać dopełnienie: „zjadłem <i>coś</i>”, „widziałem <i>kogoś</i>”) tworzą passato prossimo z <em>avere</em>. Imiesłów wtedy <b>się nie zmienia</b>: <em>Anna ha mangiato</em>, nie „ha mangiata”." },
      { h: "Częste imiesłowy nieregularne",
        p: "Trzeba je zapamiętać, bo należą do najczęstszych czasowników: <em>fare → fatto</em>, <em>dire → detto</em>, <em>vedere → visto</em>, <em>prendere → preso</em>, <em>leggere → letto</em>, <em>scrivere → scritto</em>, <em>bere → bevuto</em>, <em>aprire → aperto</em>, <em>chiudere → chiuso</em>." }
    ],
    grammar: {
      title: "Passato prossimo z avere",
      table: {
        head: ["osoba", "avere", "imiesłów", "całość"],
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
        ["Ieri ho mangiato una pizza buonissima.", "Wczoraj zjadłem przepyszną pizzę."],
        ["Hai visto il film di ieri sera?", "Widziałeś wczorajszy film?"],
        ["Abbiamo prenotato un tavolo per otto.", "Zarezerwowaliśmy stolik na ósmą."],
        ["Non ho capito, puoi ripetere?", "Nie zrozumiałem, możesz powtórzyć?"],
        ["Che cosa avete fatto nel weekend?", "Co robiliście w weekend?"],
        ["Ho già pagato.", "Już zapłaciłem.", "„già” wchodzi między avere a imiesłów"]
      ]
    },
    vocab: [
      { it: "ieri", pl: "wczoraj" },
      { it: "l'altro ieri", pl: "przedwczoraj" },
      { it: "la settimana scorsa", pl: "w zeszłym tygodniu" },
      { it: "il mese scorso", pl: "w zeszłym miesiącu" },
      { it: "due giorni fa", pl: "dwa dni temu" },
      { it: "già", pl: "już" },
      { it: "non… ancora", pl: "jeszcze nie" },
      { it: "poi / dopo", pl: "potem" },
      { it: "prima", pl: "najpierw, wcześniej" },
      { it: "fare → fatto", pl: "robić → zrobiony" },
      { it: "vedere → visto", pl: "widzieć → widziany" },
      { it: "dire → detto", pl: "mówić → powiedziany" }
    ],
    exercises: [
      { t: "mcq", q: "Z czego składa się passato prossimo?",
        opts: ["Z dwóch czasowników w czasie teraźniejszym", "Z avere/essere + imiesłów przeszły", "Z essere + bezokolicznik"], a: 1 },
      { t: "fill", q: "Imiesłów od „parlare”: ___", a: ["parlato"] },
      { t: "fill", q: "Imiesłów od „credere”: ___", a: ["creduto"] },
      { t: "fill", q: "Imiesłów od „finire”: ___", a: ["finito"] },
      { t: "fill", q: "Uzupełnij: „Ieri ___ una pizza.” (zjadłem)", a: ["ho mangiato"] },
      { t: "match", q: "Połącz czasownik z nieregularnym imiesłowem.",
        pairs: [["fare", "fatto"], ["vedere", "visto"], ["scrivere", "scritto"], ["prendere", "preso"]] },
      { t: "cloze", q: "Uzupełnij opowieść o weekendzie.",
        text: "Sabato {{1}} visto un film e poi {{2}} mangiato fuori. Domenica non {{3}} fatto niente.",
        gaps: [["ho"], ["ho"], ["ho"]],
        pl: "W sobotę obejrzałem film, a potem zjadłem na mieście. W niedzielę nie robiłem nic." },
      { t: "trans", dir: "pl-it", q: "„Nie zrozumiałem, możesz powtórzyć?”",
        a: ["non ho capito puoi ripetere", "non ho capito, puoi ripetere?"] },
      { t: "listen", it: "La settimana scorsa abbiamo visitato Firenze.", pl: "W zeszłym tygodniu zwiedziliśmy Florencję." },
      { t: "speak", it: "Ieri sera ho letto un libro molto interessante.", pl: "Wczoraj wieczorem przeczytałem bardzo ciekawą książkę." }
    ]
  },
  {
    id: "a1-u10-l2",
    cefr: "A1",
    themePl: "Przeszłość",
    titleIt: "Sono andato, sono andata",
    titlePl: "Passato prossimo z essere",
    objectivesPl: [
      "rozpoznać czasowniki wymagające essere",
      "dopasować imiesłów do podmiotu",
      "opowiedzieć o podróży"
    ],
    theory: [
      { h: "Mniejsza grupa, ale bardzo częsta",
        p: "Czasowniki <b>ruchu i zmiany stanu</b> tworzą passato prossimo z <strong>essere</strong>: <em>andare, venire, arrivare, partire, uscire, entrare, tornare, salire, scendere, restare, rimanere, nascere, morire, diventare, essere, stare</em>. Do tego wszystkie czasowniki zwrotne." },
      { h: "Imiesłów zgadza się z podmiotem",
        p: "To kluczowa różnica: z <em>essere</em> imiesłów zachowuje się jak przymiotnik. <em>Sono andat<b>o</b></em> (mężczyzna), <em>sono andat<b>a</b></em> (kobieta), <em>siamo andat<b>i</b></em> (grupa męska lub mieszana), <em>sono andat<b>e</b></em> (same kobiety)." },
      { h: "Jak zapamiętać, który czasownik bierze essere",
        p: "Test praktyczny: jeśli czasownik <b>nie może mieć dopełnienia bliższego</b> („poszedłem <i>co?</i>” nie ma sensu), prawdopodobnie bierze essere. Nie jest to reguła stuprocentowa (<em>dormire</em> bierze avere), ale w większości przypadków działa." },
      { trap: "Kilka czasowników zmienia posiłkowy razem ze znaczeniem: <em>ho finito il lavoro</em> (skończyłem pracę — przechodni, avere) kontra <em>il film è finito</em> (film się skończył — nieprzechodni, essere). To samo z <em>cambiare, passare, cominciare</em>." }
    ],
    grammar: {
      title: "Passato prossimo z essere",
      table: {
        head: ["podmiot", "forma", "przykład"],
        rows: [
          ["mężczyzna", "sono andato", "Sono andato a Roma."],
          ["kobieta", "sono andata", "Sono andata a Roma."],
          ["grupa (m/mieszana)", "siamo andati", "Siamo andati insieme."],
          ["grupa (same kobiety)", "siamo andate", "Siamo andate insieme."],
          ["zwrotny", "mi sono alzato/a", "Mi sono alzata alle sei."],
          ["nieregularny", "sono nato/a", "Sono nata a Varsavia."]
        ]
      },
      examples: [
        ["Sono partita alle sette di mattina.", "Wyjechałam o siódmej rano."],
        ["Siamo arrivati in ritardo.", "Przyjechaliśmy spóźnieni."],
        ["Marco è nato nel 1990.", "Marco urodził się w 1990."],
        ["Ci siamo divertiti moltissimo.", "Bardzo dobrze się bawiliśmy."],
        ["Il film è finito alle undici.", "Film skończył się o jedenastej."],
        ["Ho finito il lavoro alle sei.", "Skończyłem pracę o szóstej.", "przechodni → avere"]
      ]
    },
    vocab: [
      { it: "andare → andato", pl: "iść → poszedł" },
      { it: "venire → venuto", pl: "przyjść → przyszedł" },
      { it: "arrivare → arrivato", pl: "przyjechać" },
      { it: "partire → partito", pl: "wyjechać" },
      { it: "tornare → tornato", pl: "wrócić" },
      { it: "uscire → uscito", pl: "wyjść" },
      { it: "entrare → entrato", pl: "wejść" },
      { it: "nascere → nato", pl: "urodzić się" },
      { it: "restare → restato", pl: "zostać" },
      { it: "diventare → diventato", pl: "stać się" },
      { it: "divertirsi → divertito", pl: "bawić się" },
      { it: "il viaggio", pl: "podróż" }
    ],
    exercises: [
      { t: "mcq", q: "Co jest szczególnego w imiesłowie z essere?",
        opts: ["Nigdy się nie zmienia", "Zgadza się z podmiotem jak przymiotnik", "Zawsze kończy się na -o"], a: 1 },
      { t: "mcq", q: "Kobieta mówi „wyjechałam”:",
        opts: ["sono partito", "sono partita", "ho partito"], a: 1 },
      { t: "fill", q: "Uzupełnij dla grupy kobiet: „Loro sono ___ ieri.” (przyjechały)",
        a: ["arrivate"] },
      { t: "fill", q: "Imiesłów od „nascere” (r. męski): ___", a: ["nato"] },
      { t: "multi", q: "Które czasowniki tworzą passato prossimo z essere?",
        opts: ["andare", "mangiare", "partire", "vedere", "nascere"], a: [0, 2, 4] },
      { t: "mcq", q: "„Il film ___ alle undici.” (skończył się)",
        opts: ["ha finito", "è finito", "sono finito"], a: 1,
        why: "Tu „finire” jest nieprzechodni (film sam się skończył) → essere." },
      { t: "cloze", q: "Uzupełnij relację z podróży (mówi kobieta).",
        text: "{{1}} partita venerdì e {{2}} arrivata a Napoli la sera. Mi {{3}} divertita molto.",
        gaps: [["sono"], ["sono"], ["sono"]],
        pl: "Wyjechałam w piątek i przyjechałam do Neapolu wieczorem. Bardzo dobrze się bawiłam." },
      { t: "order", pl: "Przyjechaliśmy spóźnieni.",
        tokens: ["Siamo", "arrivati", "in", "ritardo"], a: ["siamo arrivati in ritardo"] },
      { t: "listen", it: "Sono nata a Varsavia, ma sono cresciuta a Cracovia.", pl: "Urodziłam się w Warszawie, ale wychowałam się w Krakowie." },
      { t: "speak", it: "Ieri sono andata al cinema con un'amica.", pl: "Wczoraj poszłam do kina z koleżanką." }
    ]
  },
  {
    id: "a1-u10-l3",
    cefr: "A1",
    themePl: "Przeszłość",
    titleIt: "Il mio weekend",
    titlePl: "Opowiadanie o przeszłości",
    objectivesPl: [
      "połączyć zdania w krótkie opowiadanie",
      "użyć wyrażeń czasowych porządkujących relację",
      "zadać pytania o czyjś weekend"
    ],
    theory: [
      { h: "Opowiadanie potrzebuje szkieletu czasowego",
        p: "Same czasowniki nie tworzą relacji. Potrzebne są łączniki: <em>prima</em> (najpierw), <em>poi</em> (potem), <em>dopo</em> (po tym), <em>alla fine</em> (na koniec), <em>mentre</em> (podczas gdy). Bez nich zdania stoją obok siebie jak lista." },
      { h: "Pytania o przeszłość",
        p: "<em>Che cosa hai fatto?</em>, <em>Dove sei andato/a?</em>, <em>Con chi sei uscito/a?</em>, <em>Com'è andata?</em> („jak poszło?”). To ostatnie jest bardzo częste jako otwarcie rozmowy." },
      { h: "Già i ancora wchodzą do środka",
        p: "Przysłówki <em>già</em> (już), <em>ancora</em> (jeszcze), <em>appena</em> (dopiero co), <em>mai</em> (nigdy) stają <b>między posiłkowym a imiesłowem</b>: <em>ho <b>già</b> mangiato</em>, <em>non sono <b>mai</b> stata a Venezia</em>." },
      { tip: "Naturalny sposób na odpowiedź: nie wyliczaj wszystkiego. Włoch odpowie krótko (<em>Niente di che, sono stato a casa</em>) i dopiero pytany rozwinie." }
    ],
    grammar: {
      title: "Łączniki i pytania o przeszłość",
      table: {
        head: ["funkcja", "zwrot", "przykład"],
        rows: [
          ["kolejność", "prima… poi… alla fine", "Prima ho lavorato, poi sono uscito."],
          ["równoczesność", "mentre", "Mentre aspettavo, ho letto."],
          ["pytanie", "Che cosa hai fatto?", "Co robiłeś?"],
          ["pytanie", "Com'è andata?", "Jak poszło?"],
          ["już", "già (w środku)", "Ho già finito."],
          ["nigdy", "non… mai (w środku)", "Non sono mai stato in Sicilia."]
        ]
      },
      examples: [
        ["Sabato mattina ho fatto la spesa al mercato.", "W sobotę rano zrobiłem zakupy na targu."],
        ["Poi sono andata in palestra.", "Potem poszłam na siłownię."],
        ["La sera siamo usciti con degli amici.", "Wieczorem wyszliśmy ze znajomymi."],
        ["Alla fine siamo tornati a casa tardi.", "W końcu wróciliśmy do domu późno."],
        ["Com'è andata la riunione? — Non male.", "Jak poszło zebranie? — Nieźle."],
        ["Non ho ancora finito.", "Jeszcze nie skończyłem."]
      ]
    },
    vocab: [
      { it: "prima", pl: "najpierw" },
      { it: "poi", pl: "potem" },
      { it: "dopo", pl: "po tym" },
      { it: "alla fine", pl: "na koniec" },
      { it: "mentre", pl: "podczas gdy" },
      { it: "com'è andata?", pl: "jak poszło?" },
      { it: "niente di che", pl: "nic szczególnego" },
      { it: "un disastro", pl: "katastrofa" },
      { it: "è stato bello", pl: "było fajnie" },
      { it: "fare la spesa", pl: "robić zakupy spożywcze" },
      { it: "fare shopping", pl: "robić zakupy (ubrania)" },
      { it: "riposarsi", pl: "odpoczywać" }
    ],
    exercises: [
      { t: "mcq", q: "Gdzie stoi „già” w passato prossimo?",
        opts: ["Przed avere", "Między avere a imiesłowem", "Na końcu zdania"], a: 1,
        why: "Ho già mangiato — przysłówek wchodzi do środka." },
      { t: "fill", q: "Uzupełnij: „Non sono ___ stata a Venezia.” (nigdy)", a: ["mai"] },
      { t: "fill", q: "Uzupełnij: „___ ho lavorato, poi sono uscito.” (najpierw)", a: ["prima"] },
      { t: "mcq", q: "„Com'è andata?” to pytanie o:",
        opts: ["kierunek podróży", "przebieg czegoś, co się wydarzyło", "samopoczucie teraz"], a: 1 },
      { t: "cloze", q: "Uzupełnij relację.",
        text: "Sabato {{1}} fatto la spesa, {{2}} sono andata in palestra e la sera {{3}} usciti con amici.",
        gaps: [["ho"], ["poi"], ["siamo"]],
        pl: "W sobotę zrobiłam zakupy, potem poszłam na siłownię, a wieczorem wyszliśmy ze znajomymi." },
      { t: "trans", dir: "pl-it", q: "„Jeszcze nie skończyłem.”",
        a: ["non ho ancora finito"] },
      { t: "order", pl: "W końcu wróciliśmy do domu późno.",
        tokens: ["Alla", "fine", "siamo", "tornati", "a", "casa", "tardi"],
        a: ["alla fine siamo tornati a casa tardi"] },
      { t: "dialogue", q: "Poniedziałek rano w pracy.",
        setting: "Kuchnia biurowa, ekspres do kawy.",
        lines: [
          { sp: "A", it: "Ciao! Com'è andato il weekend?", pl: "Cześć! Jak minął weekend?" },
          { sp: "TY", pl: "Powiedz, że nic szczególnego, byłeś w domu.", choices: ["Niente di che, sono stato a casa.", "Niente di che, ho stato a casa.", "Nessuno, sono casa."], a: 0, plAnswer: "Nic szczególnego, byłem w domu." },
          { sp: "A", it: "Io invece sono andato in montagna. Bellissimo!", pl: "A ja pojechałem w góry. Przepięknie!" },
          { sp: "TY", pl: "Zapytaj, z kim pojechał.", choices: ["Con chi sei andato?", "Chi sei andato?", "Con chi hai andato?"], a: 0, plAnswer: "Z kim pojechałeś?" }
        ] },
      { t: "listen", it: "Prima ho fatto la spesa, poi mi sono riposata.", pl: "Najpierw zrobiłam zakupy, potem odpoczęłam." },
      { t: "speak", it: "Com'è andata? — Bene, è stato bello.", pl: "Jak poszło? — Dobrze, było fajnie." }
    ]
  },
  {
    id: "a1-u10-l4",
    cefr: "A1",
    themePl: "Powtórka",
    titleIt: "Ripasso generale A1",
    titlePl: "Powtórka całego poziomu",
    objectivesPl: [
      "połączyć wszystko, czego uczyłeś się na A1",
      "sprawdzić, czy jesteś gotowy na poziom A2",
      "wyłapać własne luki"
    ],
    theory: [
      { h: "Co powinieneś już umieć",
        list: [
          "przedstawić się, powiedzieć skąd jesteś, czym się zajmujesz i ile masz lat",
          "zamówić w barze i restauracji, zrobić zakupy, zapytać o cenę",
          "opowiedzieć o swoim dniu, godzinach i zwyczajach",
          "zapytać o drogę i zrozumieć wskazówki",
          "opisać osobę: wygląd i charakter",
          "opowiedzieć krótko, co robiłeś wczoraj i w weekend"
        ] },
      { h: "Gramatyka, która musi siedzieć",
        p: "Trzy koniugacje w czasie teraźniejszym, <em>essere</em>, <em>avere</em>, <em>fare</em>, <em>andare</em>, <em>venire</em>, <em>stare</em>, czasowniki modalne, rodzajniki określone i nieokreślone, rodzaj i liczba, przymiotniki, przyimki ściągnięte, czasowniki zwrotne, <em>piacere</em>, <em>c'è / ci sono</em> oraz podstawy passato prossimo." },
      { h: "Co czeka na A2",
        p: "Imperfetto i różnica wobec passato prossimo, futuro semplice, tryb warunkowy, zaimki dopełnienia bliższego i dalszego, tryb rozkazujący w pełnej wersji, <em>ci</em> i <em>ne</em> w szerszym zakresie, sytuacje w podróży, u lekarza i w hotelu." },
      { tip: "Jeśli w tej powtórce zrobisz mniej niż 70%, nie idź dalej. Poziom A2 buduje bezpośrednio na tych strukturach i luki z A1 zamienią się tam w blokadę." }
    ],
    vocab: [
      { it: "ripassare", pl: "powtarzać" },
      { it: "l'esercizio", pl: "ćwiczenie" },
      { it: "l'errore", pl: "błąd" },
      { it: "la regola", pl: "reguła" },
      { it: "il livello", pl: "poziom" },
      { it: "migliorare", pl: "poprawiać się" },
      { it: "sono pronto/a", pl: "jestem gotowy/a" },
      { it: "ce la faccio", pl: "dam radę" }
    ],
    exercises: [
      { t: "conj", verb: "essere", tense: "pres", persons: [0, 2, 3, 5] },
      { t: "conj", verb: "avere", tense: "pres", persons: [1, 3, 5] },
      { t: "conj", verb: "capire", tense: "pres", persons: [0, 3, 5] },
      { t: "gender", q: "Rodzajniki określone:", opts: ["il", "lo", "la", "l'", "i", "gli", "le"],
        items: [["zaino", "lo"], ["amica", "l'"], ["studenti", "gli"], ["case", "le"], ["treno", "il"]] },
      { t: "cloze", q: "Uzupełnij autoprezentację.",
        text: "{{1}} chiamo Kasia, {{2}} polacca e {{3}} a Bologna da due anni. {{4}} l'insegnante.",
        gaps: [["mi"], ["sono"], ["abito"], ["faccio"]],
        pl: "Nazywam się Kasia, jestem Polką i mieszkam w Bolonii od dwóch lat. Jestem nauczycielką." },
      { t: "fill", q: "„Mi ___ gli spaghetti.” (lubię spaghetti)", a: ["piacciono"] },
      { t: "fill", q: "„Vado ___ cinema.” (a + il)", a: ["al"] },
      { t: "fill", q: "„Ieri ___ una pizza.” (zjadłam)", a: ["ho mangiato"] },
      { t: "fill", q: "„Ieri ___ al cinema.” (poszłam — kobieta)", a: ["sono andata"] },
      { t: "order", pl: "Wczoraj wieczorem poszliśmy do restauracji z przyjaciółmi.",
        tokens: ["Ieri", "sera", "siamo", "andati", "al", "ristorante", "con", "gli", "amici"],
        a: ["ieri sera siamo andati al ristorante con gli amici"] },
      { t: "listen", it: "Mi sono svegliata presto e ho fatto colazione al bar.", pl: "Obudziłam się wcześnie i zjadłam śniadanie w barze." },
      { t: "speak", it: "Mi chiamo Anna, sono polacca e abito a Firenze da un anno.", pl: "Nazywam się Anna, jestem Polką i mieszkam we Florencji od roku." }
    ]
  }
  ],
  test: {
    id: "a1-u10-test",
    cefr: "A1", themePl: "Egzamin",
    titleIt: "Esame finale A1",
    titlePl: "Egzamin końcowy poziomu A1",
    objectivesPl: ["sprawdzić gotowość do przejścia na poziom A2"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%. Wynik poniżej progu oznacza, że warto wrócić do jednostek, w których się mylisz — nie do wszystkich." }],
    exercises: [
      { t: "conj", verb: "andare", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
      { t: "mcq", q: "Wchodzisz do sklepu o 18:00:", opts: ["Buongiorno", "Buonasera", "Buonanotte"], a: 1 },
      { t: "gender", q: "Rodzajniki:", opts: ["il", "lo", "la", "l'", "i", "gli", "le"],
        items: [["studente", "lo"], ["acqua", "l'"], ["amici", "gli"], ["stazione", "la"]] },
      { t: "fill", q: "„Non mi ___ il pesce crudo.”", a: ["piace"] },
      { t: "fill", q: "„Devo ___ presto domani.” (wstać — alzarsi)", a: ["alzarmi"] },
      { t: "fill", q: "„___ le tre e mezza.”", a: ["sono"] },
      { t: "fill", q: "„Abito ___ Italia.”", a: ["in"] },
      { t: "fill", q: "„___ un tavolo libero?”", a: ["c'è", "ce"] },
      { t: "mcq", q: "„È più simpatico ___ bello.”", opts: ["di", "che", "come"], a: 1 },
      { t: "fill", q: "„Ieri ___ al cinema.” (poszliśmy)", a: ["siamo andati"] },
      { t: "cloze", q: "Uzupełnij.",
        text: "Sabato {{1}} fatto la spesa, {{2}} sono andata in palestra e la sera {{3}} uscita con amici.",
        gaps: [["ho"], ["poi"], ["sono"]],
        pl: "W sobotę zrobiłam zakupy, potem poszłam na siłownię, a wieczorem wyszłam ze znajomymi." },
      { t: "speak", it: "Buongiorno, vorrei prenotare un tavolo per due alle otto.", pl: "Dzień dobry, chciałbym zarezerwować stolik dla dwóch osób na ósmą." }
    ]
  }
}

]);
