/* ============================================================
   A2 — część 1: jednostki 1–4
   Ieri e oggi · In viaggio · Lo vedo, gli parlo · Salute
   ============================================================ */
LINGUAI.addUnits("A2", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 1 — IERI E OGGI
   ══════════════════════════════════════════════════════════════ */
{
  id: "a2-u01",
  icon: "📻",
  titleIt: "Ieri e oggi",
  titlePl: "Wczoraj i dziś",
  grammarPl: "imperfetto · imperfetto kontra passato prossimo",
  lessons: [
  {
    id: "a2-u01-l1",
    cefr: "A2",
    themePl: "Wspomnienia",
    titleIt: "Da bambino abitavo…",
    titlePl: "Imperfetto: opis i zwyczaj",
    objectivesPl: [
      "utworzyć imperfetto dla wszystkich koniugacji",
      "opisać, jak było kiedyś",
      "opowiedzieć o zwyczajach z przeszłości"
    ],
    theory: [
      { h: "Czas przeszły bez granic",
        p: "<strong>Imperfetto</strong> nie mówi, kiedy coś się zaczęło ani skończyło. Opisuje tło, stan, zwyczaj: <em>da bambino abitavo in campagna</em> („jako dziecko mieszkałem na wsi”). Polskie zdanie „mieszkałem” bez dodatkowych słów nie rozróżnia tego od „zamieszkałem” — włoski rozróżnia i to jest sedno tej lekcji." },
      { h: "Odmiana jest niemal bez wyjątków",
        p: "Temat bezokolicznika + <em>-vo, -vi, -va, -vamo, -vate, -vano</em>. Cztery czasowniki mają nietypowy temat: <em>essere</em> (ero, eri, era…), <em>fare</em> (facevo), <em>dire</em> (dicevo), <em>bere</em> (bevevo). To wszystko — imperfetto jest najregularniejszym czasem włoskim." },
      { h: "Trzy typowe użycia",
        list: [
          "<b>opis</b>: <em>Era una giornata fredda, pioveva.</em>",
          "<b>zwyczaj</b>: <em>Ogni estate andavamo al mare.</em>",
          "<b>stan lub uczucie</b>: <em>Ero stanca, non avevo voglia di uscire.</em>"
        ] },
      { pl: "Polski oddaje tę różnicę aspektem czasownika: „chodziłem” (imperfetto) kontra „poszedłem” (passato prossimo). To dobra kotwica — jeśli po polsku użyłbyś czasownika niedokonanego, po włosku prawdopodobnie potrzebujesz imperfetto." }
    ],
    grammar: {
      title: "Imperfetto — odmiana",
      table: {
        head: ["osoba", "parlare", "prendere", "dormire", "essere"],
        rows: [
          ["io", "parlavo", "prendevo", "dormivo", "ero"],
          ["tu", "parlavi", "prendevi", "dormivi", "eri"],
          ["lui / lei", "parlava", "prendeva", "dormiva", "era"],
          ["noi", "parlavamo", "prendevamo", "dormivamo", "eravamo"],
          ["voi", "parlavate", "prendevate", "dormivate", "eravate"],
          ["loro", "parlavano", "prendevano", "dormivano", "erano"]
        ]
      },
      examples: [
        ["Da bambina passavo le estati dai nonni.", "Jako dziecko spędzałam lato u dziadków."],
        ["Era una giornata grigia e faceva freddo.", "Był szary dzień i było zimno."],
        ["Prima fumavo, adesso ho smesso.", "Kiedyś paliłem, teraz rzuciłem."],
        ["Non sapevo che abitassi qui.", "Nie wiedziałem, że tu mieszkasz."],
        ["Mentre studiavo, ascoltavo la radio.", "Kiedy się uczyłem, słuchałem radia."],
        ["Che lavoro faceva tuo nonno?", "Czym zajmował się twój dziadek?"]
      ]
    },
    vocab: [
      { it: "da bambino / da bambina", pl: "jako dziecko" },
      { it: "una volta", pl: "kiedyś" },
      { it: "prima", pl: "kiedyś, wcześniej" },
      { it: "di solito", pl: "zwykle" },
      { it: "ogni estate", pl: "każdego lata" },
      { it: "spesso", pl: "często" },
      { it: "il ricordo", pl: "wspomnienie" },
      { it: "l'infanzia", pl: "dzieciństwo" },
      { it: "i nonni", pl: "dziadkowie" },
      { it: "la campagna", pl: "wieś" },
      { it: "smettere di", pl: "przestać coś robić" },
      { it: "mi mancava", pl: "brakowało mi" }
    ],
    exercises: [
      { t: "conj", verb: "parlare", tense: "imperf", persons: [0, 1, 2, 3, 4, 5] },
      { t: "conj", verb: "essere", tense: "imperf", persons: [0, 2, 3, 5] },
      { t: "conj", verb: "fare", tense: "imperf", persons: [0, 2, 5] },
      { t: "mcq", q: "„Ogni estate andavamo al mare” opisuje:",
        opts: ["jednorazowy wyjazd", "powtarzalny zwyczaj z przeszłości", "plan na przyszłość"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Da bambino ___ in campagna.” (mieszkałem — abitare)",
        a: ["abitavo"] },
      { t: "fill", q: "Uzupełnij: „___ una giornata fredda.” (był)", a: ["era"] },
      { t: "cloze", q: "Uzupełnij wspomnienie.",
        text: "Da piccola {{1}} le estati dai nonni. La casa {{2}} grande e ogni sera {{3}} tutti insieme.",
        gaps: [["passavo"], ["era"], ["mangiavamo"]],
        pl: "Jako mała spędzałam lato u dziadków. Dom był duży i co wieczór jedliśmy wszyscy razem." },
      { t: "trans", dir: "pl-it", q: "„Kiedyś paliłem, teraz rzuciłem.”",
        a: ["prima fumavo adesso ho smesso", "prima fumavo, adesso ho smesso"] },
      { t: "listen", it: "Da bambino giocavo a calcio ogni pomeriggio.", pl: "Jako dziecko grałem w piłkę każdego popołudnia." },
      { t: "speak", it: "Da piccola abitavo in una casa vicino al mare.", pl: "Jako mała mieszkałam w domu blisko morza." }
    ]
  },
  {
    id: "a2-u01-l2",
    cefr: "A2",
    themePl: "Wspomnienia",
    titleIt: "Mentre uscivo, è squillato",
    titlePl: "Imperfetto kontra passato prossimo",
    objectivesPl: [
      "wybrać właściwy czas przeszły",
      "połączyć oba czasy w jednym zdaniu",
      "rozpoznać sygnały wskazujące na jeden lub drugi"
    ],
    theory: [
      { h: "Tło kontra zdarzenie",
        p: "To najważniejsza decyzja gramatyczna poziomu A2. <strong>Imperfetto</strong> maluje tło: co trwało, jak było, co się powtarzało. <strong>Passato prossimo</strong> wprowadza zdarzenie: co się stało, co przerwało tło, co się wydarzyło raz." },
      { h: "Klasyczna para",
        p: "<em><b>Mentre uscivo</b> di casa, <b>è squillato</b> il telefono.</em> — Wychodzenie trwało (imperfetto), telefon zadzwonił w jednym momencie (passato prossimo). Odwrócenie czasów zmieniłoby sens na absurdalny." },
      { h: "Sygnały tekstowe",
        list: [
          "imperfetto: <em>sempre, spesso, di solito, ogni giorno, mentre, da bambino</em>",
          "passato prossimo: <em>ieri, una volta, all'improvviso, l'anno scorso, per tre ore, due volte</em>"
        ] },
      { trap: "Określenie <b>czasu trwania z granicami</b> wymusza passato prossimo: <em>ho lavorato <b>per tre ore</b></em> (skończone, zamknięte). Samo „trwanie” bez granic to imperfetto: <em>lavoravo mentre lui dormiva</em>." },
      { h: "Zmiana znaczenia czasownika",
        p: "Kilka czasowników zmienia sens razem z czasem: <em>sapevo</em> (wiedziałem, stan) kontra <em>ho saputo</em> (dowiedziałem się, moment); <em>conoscevo</em> (znałem) kontra <em>ho conosciuto</em> (poznałem); <em>volevo</em> (chciałem) kontra <em>ho voluto</em> (zdecydowałem się, uparłem)." }
    ],
    grammar: {
      title: "Który czas wybrać",
      table: {
        head: ["imperfetto", "passato prossimo"],
        rows: [
          ["Pioveva e faceva freddo.", "Ha smesso di piovere alle sei."],
          ["Ogni sabato andavamo al mercato.", "Sabato scorso siamo andati al mercato."],
          ["Ero stanca.", "Mi sono stancata subito."],
          ["Mentre mangiavo…", "…è arrivato Marco."],
          ["Sapevo la verità.", "Ho saputo la verità ieri."],
          ["Conoscevo bene Roma.", "Ho conosciuto Marco a Roma."]
        ]
      },
      examples: [
        ["Mentre uscivo, è squillato il telefono.", "Kiedy wychodziłem, zadzwonił telefon."],
        ["Ieri ho lavorato per tre ore.", "Wczoraj pracowałem trzy godziny.", "granice → passato prossimo"],
        ["Da giovane lavoravo in un bar.", "Za młodu pracowałem w barze."],
        ["Ho conosciuto mia moglie a un concerto.", "Poznałem żonę na koncercie."],
        ["Non sapevo che fossi qui.", "Nie wiedziałem, że tu jesteś."],
        ["All'improvviso è caduta la corrente.", "Nagle wysiadł prąd."]
      ]
    },
    vocab: [
      { it: "mentre", pl: "podczas gdy" },
      { it: "all'improvviso", pl: "nagle" },
      { it: "di colpo", pl: "raptem" },
      { it: "l'anno scorso", pl: "w zeszłym roku" },
      { it: "per tre ore", pl: "przez trzy godziny" },
      { it: "squillare", pl: "dzwonić (o telefonie)" },
      { it: "cadere", pl: "spadać, upadać" },
      { it: "succedere", pl: "zdarzyć się" },
      { it: "conoscere / ho conosciuto", pl: "znać / poznałem" },
      { it: "sapere / ho saputo", pl: "wiedzieć / dowiedziałem się" },
      { it: "che cosa è successo?", pl: "co się stało?" },
      { it: "per fortuna", pl: "na szczęście" }
    ],
    exercises: [
      { t: "mcq", q: "„___ (uscire, io) di casa quando ___ (squillare) il telefono.” Jakie czasy?",
        opts: ["oba imperfetto", "imperfetto + passato prossimo", "oba passato prossimo"], a: 1,
        why: "Tło (wychodzenie) w imperfetto, zdarzenie (dzwonek) w passato prossimo." },
      { t: "cloze", q: "Wstaw właściwą formę.",
        text: "Mentre {{1}} (mangiare, io), {{2}} (arrivare) Marco.",
        gaps: [["mangiavo"], ["è arrivato"]],
        pl: "Kiedy jadłem, przyszedł Marco." },
      { t: "cloze", q: "Wstaw właściwą formę.",
        text: "Ieri {{1}} (lavorare, io) per tre ore, poi {{2}} (uscire) con gli amici.",
        gaps: [["ho lavorato"], ["sono uscito", "sono uscita"]],
        pl: "Wczoraj pracowałem trzy godziny, potem wyszedłem ze znajomymi." },
      { t: "mcq", q: "„Ho conosciuto Marco a Roma” znaczy:",
        opts: ["Znałem Marco w Rzymie", "Poznałem Marco w Rzymie", "Znam Marco z Rzymu"], a: 1 },
      { t: "mcq", q: "„Ieri ho lavorato per tre ore.” Dlaczego nie imperfetto?",
        opts: ["Bo to zwyczaj", "Bo czas trwania ma wyraźne granice", "Bo to opis"], a: 1 },
      { t: "multi", q: "Które określenia zwykle idą z imperfetto?",
        opts: ["ogni giorno", "ieri", "di solito", "all'improvviso", "da bambino"], a: [0, 2, 4] },
      { t: "trans", dir: "pl-it", q: "„Nie wiedziałem, że tu mieszkasz.”",
        a: ["non sapevo che abitavi qui", "non sapevo che abitassi qui"] },
      { t: "cloze", q: "Uzupełnij opowieść.",
        text: "{{1}} (essere) una giornata fredda. {{2}} (piovere) e io non {{3}} (avere) l'ombrello. All'improvviso {{4}} (arrivare) l'autobus.",
        gaps: [["era"], ["pioveva"], ["avevo"], ["è arrivato"]],
        pl: "Był zimny dzień. Padało, a ja nie miałem parasola. Nagle przyjechał autobus." },
      { t: "listen", it: "Mentre tornavo a casa, ho incontrato una vecchia amica.", pl: "Kiedy wracałem do domu, spotkałem starą znajomą." },
      { t: "speak", it: "Da bambino andavo al mare ogni estate, ma l'anno scorso sono andato in montagna.", pl: "Jako dziecko jeździłem nad morze każdego lata, ale w zeszłym roku pojechałem w góry." }
    ]
  },
  {
    id: "a2-u01-l3",
    cefr: "A2",
    themePl: "Wspomnienia",
    titleIt: "Com'era la tua città",
    titlePl: "Opisywanie zmian",
    objectivesPl: [
      "porównać przeszłość z teraźniejszością",
      "użyć wyrażeń typu non c'era più, adesso invece",
      "opowiedzieć, jak coś się zmieniło"
    ],
    theory: [
      { h: "Kontrast prima / adesso",
        p: "Zestawienie dwóch czasów służy do pokazywania zmiany: <em><b>Prima</b> qui c'era un cinema, <b>adesso</b> c'è un supermercato.</em> Struktura jest prosta, ale wymaga świadomego przełączania między imperfetto (kiedyś) a czasem teraźniejszym (dziś)." },
      { h: "C'era i c'erano",
        p: "Imperfetto od <em>c'è / ci sono</em> to <strong>c'era / c'erano</strong>. Bardzo częste przy opisie miejsc: <em>C'erano meno macchine e più negozi.</em>" },
      { h: "Wyrażenia kontrastujące",
        list: [
          "<em>prima… adesso / oggi</em> — kiedyś… teraz",
          "<em>invece</em> — natomiast",
          "<em>non… più</em> — już nie: <em>non c'è più il mercato</em>",
          "<em>è cambiato molto</em> — bardzo się zmieniło"
        ] },
      { tip: "<em>Non… più</em> otacza czasownik jak <em>non… mai</em>: <em>non abito <b>più</b> qui</em>. W passato prossimo <em>più</em> wchodzi między posiłkowy a imiesłów: <em>non ho più visto</em>." }
    ],
    grammar: {
      title: "Kontrast przeszłość / teraźniejszość",
      table: {
        head: ["kiedyś (imperfetto)", "dziś (presente)"],
        rows: [
          ["C'era un cinema.", "Adesso c'è un supermercato."],
          ["C'erano pochi turisti.", "Oggi ce ne sono troppi."],
          ["La gente si conosceva.", "Adesso nessuno saluta."],
          ["Non esisteva internet.", "Oggi tutti sono online."],
          ["Si viveva più lentamente.", "Adesso si corre sempre."]
        ]
      },
      examples: [
        ["Prima qui c'era un mercato, adesso c'è un parcheggio.", "Kiedyś był tu targ, teraz jest parking."],
        ["La città è cambiata moltissimo.", "Miasto bardzo się zmieniło."],
        ["Non ci sono più i negozi di una volta.", "Nie ma już dawnych sklepów."],
        ["Invece il quartiere è diventato più vivo.", "Natomiast dzielnica stała się żywsza."],
        ["Quando ero piccolo si giocava in strada.", "Kiedy byłem mały, bawiło się na ulicy."],
        ["Adesso è tutto diverso.", "Teraz wszystko jest inne."]
      ]
    },
    vocab: [
      { it: "c'era / c'erano", pl: "był / były" },
      { it: "cambiare", pl: "zmieniać (się)" },
      { it: "è cambiato molto", pl: "bardzo się zmieniło" },
      { it: "invece", pl: "natomiast" },
      { it: "non… più", pl: "już nie" },
      { it: "una volta", pl: "kiedyś" },
      { it: "il quartiere", pl: "dzielnica" },
      { it: "il traffico", pl: "ruch uliczny" },
      { it: "affollato", pl: "zatłoczony" },
      { it: "tranquillo", pl: "spokojny" },
      { it: "diventare", pl: "stawać się" },
      { it: "meglio / peggio", pl: "lepiej / gorzej" }
    ],
    exercises: [
      { t: "fill", q: "Imperfetto od „c'è”: ___", a: ["c'era", "cera"] },
      { t: "fill", q: "Imperfetto od „ci sono”: ___", a: ["c'erano", "cerano"] },
      { t: "fill", q: "Uzupełnij: „Non abito ___ qui.” (już nie mieszkam)", a: ["più"] },
      { t: "mcq", q: "Gdzie stoi „più” w passato prossimo?",
        opts: ["Przed non", "Między posiłkowym a imiesłowem", "Na końcu"], a: 1,
        why: "Non ho più visto — tak jak già i mai." },
      { t: "cloze", q: "Uzupełnij opis zmian.",
        text: "Prima qui {{1}} un cinema, adesso {{2}} un supermercato. Il quartiere {{3}} cambiato molto.",
        gaps: [["c'era", "cera"], ["c'è", "ce"], ["è"]],
        pl: "Kiedyś było tu kino, teraz jest supermarket. Dzielnica bardzo się zmieniła." },
      { t: "trans", dir: "pl-it", q: "„Nie ma już dawnych sklepów.”",
        a: ["non ci sono più i negozi di una volta", "non ci sono più i negozi di un tempo"] },
      { t: "order", pl: "Kiedy byłem mały, bawiło się na ulicy.",
        tokens: ["Quando", "ero", "piccolo", "si", "giocava", "in", "strada"],
        a: ["quando ero piccolo si giocava in strada"] },
      { t: "match", q: "Połącz.",
        pairs: [["invece", "natomiast"], ["affollato", "zatłoczony"], ["diventare", "stawać się"], ["il traffico", "ruch uliczny"]] },
      { t: "listen", it: "Vent'anni fa c'erano meno macchine e più negozi di quartiere.", pl: "Dwadzieścia lat temu było mniej samochodów i więcej sklepów osiedlowych." },
      { t: "speak", it: "La mia città è cambiata molto negli ultimi dieci anni.", pl: "Moje miasto bardzo się zmieniło w ostatnich dziesięciu latach." }
    ]
  },
  {
    id: "a2-u01-l4",
    cefr: "A2",
    themePl: "Wspomnienia",
    titleIt: "Ti ricordi?",
    titlePl: "Rozmowa o przeszłości",
    objectivesPl: [
      "poprowadzić rozmowę o wspomnieniach",
      "zareagować na czyjąś opowieść",
      "użyć trapassato prossimo w prostych przypadkach"
    ],
    theory: [
      { h: "Reakcje są obowiązkowe",
        p: "Włoska rozmowa nie znosi milczącego słuchania. Podczas opowieści wtrąca się <em>davvero?</em>, <em>ma dai!</em>, <em>e poi?</em>, <em>che bello!</em>, <em>mamma mia</em>. Brak reakcji odbierany jest jako brak zainteresowania, nie jako uprzejmość." },
      { h: "Trapassato prossimo — przeszłość przed przeszłością",
        p: "Imperfetto od <em>avere/essere</em> + imiesłów: <em>avevo mangiato</em>, <em>ero uscito</em>. Używa się go, gdy jedno zdarzenie poprzedza drugie: <em>Quando sono arrivato, il treno <b>era già partito</b>.</em>" },
      { h: "Kiedy jest konieczny",
        p: "Bez niego kolejność zdarzeń bywa niejasna. <em>Quando sono arrivato, il treno è partito</em> znaczy, że pociąg odjechał <b>po</b> moim przyjściu. <em>Era già partito</em> — odjechał <b>przed</b> nim." },
      { tip: "<em>Ti ricordi quando…?</em> to standardowe otwarcie wspomnieniowej rozmowy. Odpowiedź: <em>Certo che me lo ricordo!</em>" }
    ],
    grammar: {
      title: "Trapassato prossimo i reakcje",
      table: {
        head: ["konstrukcja", "przykład", "po polsku"],
        rows: [
          ["avevo + imiesłów", "Avevo già mangiato.", "Już byłem po jedzeniu."],
          ["ero + imiesłów", "Ero appena uscito.", "Właśnie wyszedłem (wcześniej)."],
          ["reakcja", "Davvero? / Ma dai!", "Naprawdę? / No coś ty!"],
          ["reakcja", "E poi? Che è successo?", "I co dalej? Co się stało?"],
          ["reakcja", "Mamma mia! / Che bello!", "O rany! / Jak fajnie!"],
          ["pytanie", "Ti ricordi quando…?", "Pamiętasz, jak…?"]
        ]
      },
      examples: [
        ["Quando sono arrivata, la festa era già finita.", "Kiedy przyszłam, impreza już się skończyła."],
        ["Non sono uscito perché avevo promesso di lavorare.", "Nie wyszedłem, bo obiecałem popracować."],
        ["Ti ricordi quando siamo andati in Sicilia?", "Pamiętasz, jak pojechaliśmy na Sycylię?"],
        ["Certo che me lo ricordo!", "Jasne, że pamiętam!"],
        ["Ma dai, non ci credo!", "No coś ty, nie wierzę!"],
        ["E poi cosa è successo?", "I co się potem stało?"]
      ]
    },
    vocab: [
      { it: "ti ricordi?", pl: "pamiętasz?" },
      { it: "me lo ricordo", pl: "pamiętam to" },
      { it: "dimenticare", pl: "zapomnieć" },
      { it: "davvero?", pl: "naprawdę?" },
      { it: "ma dai!", pl: "no coś ty!" },
      { it: "che bello!", pl: "jak fajnie!" },
      { it: "mamma mia!", pl: "o rany!" },
      { it: "e poi?", pl: "i co dalej?" },
      { it: "che è successo?", pl: "co się stało?" },
      { it: "avevo già…", pl: "już byłem po…" },
      { it: "appena", pl: "dopiero co" },
      { it: "una brutta figura", pl: "wpadka, kompromitacja" }
    ],
    exercises: [
      { t: "mcq", q: "„Quando sono arrivato, il treno era già partito.” Co było pierwsze?",
        opts: ["Moje przyjście", "Odjazd pociągu", "Oba jednocześnie"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Quando sono arrivata, la festa ___ già finita.”",
        a: ["era"] },
      { t: "fill", q: "Uzupełnij: „Non avevo fame perché ___ già mangiato.”", a: ["avevo"] },
      { t: "match", q: "Połącz reakcje.",
        pairs: [["ma dai!", "no coś ty!"], ["davvero?", "naprawdę?"], ["e poi?", "i co dalej?"], ["che bello!", "jak fajnie!"]] },
      { t: "cloze", q: "Uzupełnij.",
        text: "Quando siamo usciti, {{1}} già smesso di piovere, ma la strada {{2}} ancora bagnata.",
        gaps: [["aveva"], ["era"]],
        pl: "Kiedy wyszliśmy, przestało już padać, ale ulica była jeszcze mokra." },
      { t: "trans", dir: "pl-it", q: "„Pamiętasz, jak pojechaliśmy na Sycylię?”",
        a: ["ti ricordi quando siamo andati in sicilia", "ti ricordi quando siamo andati in sicilia?"] },
      { t: "dialogue", q: "Znajoma opowiada o wakacjach.",
        setting: "Kawa po pracy, wrzesień.",
        lines: [
          { sp: "A", it: "Ad agosto sono andata in Puglia con la mia famiglia.", pl: "W sierpniu pojechałam do Apulii z rodziną." },
          { sp: "TY", pl: "Zareaguj z zainteresowaniem i zapytaj, jak było.", choices: ["Che bello! Com'è andata?", "Va bene. Ciao.", "Davvero? Quanto costa?"], a: 0, plAnswer: "Jak fajnie! Jak było?" },
          { sp: "A", it: "Benissimo, ma il primo giorno abbiamo perso le valigie.", pl: "Super, ale pierwszego dnia zgubiliśmy walizki." },
          { sp: "TY", pl: "Zareaguj współczująco i zapytaj, co było dalej.", choices: ["Mamma mia! E poi?", "Che bello! E poi?", "Non c'è male."], a: 0, plAnswer: "O rany! I co dalej?" },
          { sp: "A", it: "Le hanno ritrovate dopo due giorni. Per fortuna!", pl: "Odnaleźli je po dwóch dniach. Na szczęście!" }
        ] },
      { t: "order", pl: "Nie wyszedłem, bo obiecałem popracować.",
        tokens: ["Non", "sono", "uscito", "perché", "avevo", "promesso", "di", "lavorare"],
        a: ["non sono uscito perché avevo promesso di lavorare"] },
      { t: "listen", it: "Quando sono tornato, mia sorella era già andata via.", pl: "Kiedy wróciłem, moja siostra już wyszła." },
      { t: "speak", it: "Ti ricordi quando eravamo compagni di classe?", pl: "Pamiętasz, jak byliśmy z jednej klasy?" }
    ]
  }
  ],
  test: {
    id: "a2-u01-test",
    cefr: "A2", themePl: "Sprawdzian",
    titleIt: "Test — Ieri e oggi", titlePl: "Sprawdzian jednostki 1",
    objectivesPl: ["sprawdzić imperfetto, kontrast z passato prossimo i trapassato"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "essere", tense: "imperf", persons: [0, 2, 3, 5] },
      { t: "conj", verb: "fare", tense: "imperf", persons: [0, 2] },
      { t: "cloze", q: "Wstaw właściwy czas.",
        text: "Mentre {{1}} (uscire, io), {{2}} (squillare) il telefono.",
        gaps: [["uscivo"], ["è squillato"]],
        pl: "Kiedy wychodziłem, zadzwonił telefon." },
      { t: "cloze", q: "Wstaw właściwy czas.",
        text: "Ieri {{1}} (lavorare, io) per quattro ore.",
        gaps: [["ho lavorato"]],
        pl: "Wczoraj pracowałem cztery godziny." },
      { t: "mcq", q: "„Ho conosciuto Anna” znaczy:", opts: ["Znałem Annę", "Poznałem Annę", "Znam Annę"], a: 1 },
      { t: "fill", q: "„Prima qui ___ un cinema.” (było)", a: ["c'era", "cera"] },
      { t: "fill", q: "„Non abito ___ qui.” (już nie)", a: ["più"] },
      { t: "fill", q: "„Quando sono arrivato, il treno ___ già partito.”", a: ["era"] },
      { t: "listen", it: "Da bambina passavo ogni estate al mare con i nonni.", pl: "Jako dziecko spędzałam każde lato nad morzem z dziadkami." },
      { t: "speak", it: "Mentre tornavo a casa ho incontrato un vecchio amico.", pl: "Kiedy wracałem do domu, spotkałem starego znajomego." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 2 — IN VIAGGIO
   ══════════════════════════════════════════════════════════════ */
{
  id: "a2-u02",
  icon: "🚆",
  titleIt: "In viaggio",
  titlePl: "W podróży",
  grammarPl: "futuro semplice · rezerwacje · dworzec i hotel",
  lessons: [
  {
    id: "a2-u02-l1",
    cefr: "A2",
    themePl: "Podróże",
    titleIt: "Alla stazione",
    titlePl: "Pociąg i bilety",
    objectivesPl: [
      "kupić bilet i zrozumieć informacje na dworcu",
      "poradzić sobie ze zmianą peronu i opóźnieniem",
      "znać różnicę między typami pociągów"
    ],
    theory: [
      { h: "Typy pociągów",
        p: "<strong>Regionale</strong> zatrzymuje się wszędzie, jest tani i nie wymaga rezerwacji miejsca. <strong>Intercity</strong> to średni standard. <strong>Frecciarossa / Italo</strong> to szybkie połączenia z obowiązkową rezerwacją miejsca — bilet obowiązuje na konkretny pociąg i godzinę." },
      { h: "Kasowanie biletu",
        p: "Bilet <em>regionale</em> kupiony bez konkretnej godziny trzeba <strong>skasować</strong> (<em>convalidare</em>) w żółtym albo zielonym kasowniku przed wejściem na peron. Brak kasowania to mandat, i kontrolerzy nie przyjmują tłumaczeń. Bilety kupione w aplikacji są już aktywne." },
      { h: "Ogłoszenia, które musisz zrozumieć",
        list: [
          "<em>Il treno viaggia con un ritardo di venti minuti</em> — pociąg ma dwadzieścia minut opóźnienia",
          "<em>Cambio binario: il treno partirà dal binario 8</em> — zmiana peronu",
          "<em>È in arrivo al binario 3</em> — wjeżdża na peron 3",
          "<em>Il treno è soppresso</em> — pociąg odwołany"
        ] },
      { tip: "<em>Binario</em> to peron i tor jednocześnie. Numer widnieje na tablicy dopiero kilkanaście minut przed odjazdem, co bywa zaskoczeniem dla przyzwyczajonych do stałych peronów." }
    ],
    grammar: {
      title: "Zwroty na dworcu",
      table: {
        head: ["sytuacja", "po włosku", "po polsku"],
        rows: [
          ["bilet", "Un biglietto per Firenze, andata e ritorno.", "Bilet do Florencji, tam i z powrotem."],
          ["w jedną stronę", "Solo andata.", "Tylko w jedną stronę."],
          ["peron", "Da quale binario parte?", "Z którego peronu odjeżdża?"],
          ["opóźnienie", "Il treno è in ritardo di venti minuti.", "Pociąg ma dwadzieścia minut opóźnienia."],
          ["przesiadka", "Devo cambiare treno?", "Muszę się przesiadać?"],
          ["kasowanie", "Devo convalidare il biglietto?", "Muszę skasować bilet?"]
        ]
      },
      examples: [
        ["Vorrei un biglietto per Napoli per domani mattina.", "Poproszę bilet do Neapolu na jutro rano."],
        ["Prima o seconda classe?", "Pierwsza czy druga klasa?"],
        ["C'è un diretto o devo cambiare?", "Jest bezpośredni, czy muszę się przesiadać?"],
        ["Il treno delle 14:35 è soppresso.", "Pociąg o 14:35 jest odwołany."],
        ["Questo posto è occupato?", "To miejsce jest zajęte?"],
        ["Scusi, questa è la carrozza 5?", "Przepraszam, to wagon 5?"]
      ]
    },
    vocab: [
      { it: "il biglietto", pl: "bilet" },
      { it: "andata e ritorno", pl: "w obie strony" },
      { it: "solo andata", pl: "w jedną stronę" },
      { it: "il binario", pl: "peron, tor" },
      { it: "la carrozza", pl: "wagon" },
      { it: "il posto", pl: "miejsce" },
      { it: "cambiare treno", pl: "przesiadać się" },
      { it: "la coincidenza", pl: "przesiadka, połączenie" },
      { it: "il ritardo", pl: "opóźnienie" },
      { it: "soppresso", pl: "odwołany" },
      { it: "convalidare", pl: "kasować bilet" },
      { it: "il capotreno", pl: "kierownik pociągu" }
    ],
    exercises: [
      { t: "mcq", q: "Co znaczy „il treno è soppresso”?",
        opts: ["Pociąg jest opóźniony", "Pociąg jest odwołany", "Pociąg jest pełny"], a: 1 },
      { t: "mcq", q: "Który bilet trzeba skasować przed wejściem na peron?",
        opts: ["Frecciarossa z rezerwacją", "Regionale bez konkretnej godziny", "Każdy bilet"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Da quale ___ parte il treno?”", a: ["binario"] },
      { t: "fill", q: "Uzupełnij: „Un biglietto ___ e ritorno.”", a: ["andata"] },
      { t: "match", q: "Połącz.",
        pairs: [["la carrozza", "wagon"], ["la coincidenza", "przesiadka"], ["il ritardo", "opóźnienie"], ["convalidare", "kasować bilet"]] },
      { t: "trans", dir: "pl-it", q: "„Muszę się przesiadać?”",
        a: ["devo cambiare treno", "devo cambiare treno?", "devo cambiare?"] },
      { t: "dialogue", q: "Kupujesz bilet w kasie.",
        setting: "Okienko na dworcu, kolejka za tobą.",
        lines: [
          { sp: "A", it: "Buongiorno, mi dica.", pl: "Dzień dobry, słucham." },
          { sp: "TY", pl: "Poproś o bilet do Florencji na dziś po południu.", choices: ["Un biglietto per Firenze per oggi pomeriggio.", "Vorrei Firenze oggi.", "Un binario per Firenze."], a: 0, plAnswer: "Bilet do Florencji na dziś po południu." },
          { sp: "A", it: "Regionale o Frecciarossa?", pl: "Regionalny czy Frecciarossa?" },
          { sp: "TY", pl: "Zapytaj o różnicę w czasie podróży.", choices: ["Quanto tempo ci vuole in più con il regionale?", "Quanto costa il binario?", "Devo convalidare il Frecciarossa?"], a: 0, plAnswer: "Ile dłużej jedzie regionalny?" },
          { sp: "A", it: "Un'ora e mezza in più. Il Freccia costa quarantadue euro.", pl: "Półtorej godziny dłużej. Freccia kosztuje czterdzieści dwa euro." },
          { sp: "TY", pl: "Wybierz Frecciarossa i zapytaj o peron.", choices: ["Prendo il Frecciarossa. Da quale binario parte?", "Prendo il regionale, grazie.", "Prendo il Frecciarossa. Devo convalidare?"], a: 0, plAnswer: "Wezmę Frecciarossa. Z którego peronu odjeżdża?" }
        ] },
      { t: "cloze", q: "Uzupełnij ogłoszenie dworcowe.",
        text: "Il treno regionale per Bologna viaggia con un {{1}} di venti minuti. Cambio {{2}}: partirà dal binario 8.",
        gaps: [["ritardo"], ["binario"]],
        pl: "Pociąg regionalny do Bolonii ma dwadzieścia minut opóźnienia. Zmiana peronu: odjedzie z peronu 8." },
      { t: "listen", it: "Il treno per Roma parte dal binario dodici con dieci minuti di ritardo.", pl: "Pociąg do Rzymu odjeżdża z peronu dwunastego z dziesięciominutowym opóźnieniem." },
      { t: "speak", it: "Scusi, devo convalidare questo biglietto?", pl: "Przepraszam, muszę skasować ten bilet?" }
    ]
  },
  {
    id: "a2-u02-l2",
    cefr: "A2",
    themePl: "Podróże",
    titleIt: "Partirò domani",
    titlePl: "Futuro semplice",
    objectivesPl: [
      "utworzyć czas przyszły prosty",
      "znać nieregularne tematy",
      "użyć futuro do wyrażania przypuszczenia"
    ],
    theory: [
      { h: "Tworzenie",
        p: "Bierzesz bezokolicznik, ucinasz końcowe <em>-e</em> i dodajesz końcówki <em>-ò, -ai, -à, -emo, -ete, -anno</em>. Czasowniki na <b>-are</b> dodatkowo zamieniają <em>a</em> na <em>e</em>: <em>parlare → parler-ò</em>. Bez tej zamiany forma brzmiałaby jak dialekt." },
      { h: "Nieregularne tematy — trzeba je znać",
        p: "<em>essere → sar-</em>, <em>avere → avr-</em>, <em>andare → andr-</em>, <em>venire → verr-</em>, <em>volere → vorr-</em>, <em>potere → potr-</em>, <em>dovere → dovr-</em>, <em>sapere → sapr-</em>, <em>vedere → vedr-</em>, <em>bere → berr-</em>, <em>rimanere → rimarr-</em>, <em>fare → far-</em>. Końcówki zawsze te same." },
      { h: "Futuro to nie tylko przyszłość",
        p: "Bardzo częste użycie to <b>przypuszczenie o teraźniejszości</b>: <em>Che ore sono? — <b>Saranno</b> le tre.</em> („będzie z trzecia”). Albo <em>Dov'è Marco? — Sarà a casa.</em> To użycie zaskakuje Polaków, ale jest w codziennym włoskim bardzo częste." },
      { trap: "Do bliskiej, pewnej przyszłości Włosi częściej używają <b>czasu teraźniejszego</b>: <em>domani parto alle sette</em>. Futuro brzmi wtedy sztywno albo mniej pewnie. Futuro pasuje do przewidywań i planów odległych." }
    ],
    grammar: {
      title: "Futuro semplice",
      table: {
        head: ["osoba", "parlare", "prendere", "partire", "essere"],
        rows: [
          ["io", "parlerò", "prenderò", "partirò", "sarò"],
          ["tu", "parlerai", "prenderai", "partirai", "sarai"],
          ["lui / lei", "parlerà", "prenderà", "partirà", "sarà"],
          ["noi", "parleremo", "prenderemo", "partiremo", "saremo"],
          ["voi", "parlerete", "prenderete", "partirete", "sarete"],
          ["loro", "parleranno", "prenderanno", "partiranno", "saranno"]
        ]
      },
      examples: [
        ["L'anno prossimo andrò a vivere in Italia.", "W przyszłym roku zamieszkam we Włoszech."],
        ["Ti chiamerò appena arrivo.", "Zadzwonię, jak tylko dojadę."],
        ["Domani partiamo alle sette.", "Jutro wyjeżdżamy o siódmej.", "bliska przyszłość: presente"],
        ["Che ore sono? — Saranno le tre.", "Która godzina? — Będzie z trzecia.", "przypuszczenie"],
        ["Dove sarà il mio biglietto?", "Gdzie może być mój bilet?"],
        ["Non ci sarà tempo per tutto.", "Nie będzie czasu na wszystko."]
      ]
    },
    vocab: [
      { it: "domani", pl: "jutro" },
      { it: "dopodomani", pl: "pojutrze" },
      { it: "la prossima settimana", pl: "w przyszłym tygodniu" },
      { it: "fra tre giorni", pl: "za trzy dni" },
      { it: "appena", pl: "jak tylko" },
      { it: "forse", pl: "może" },
      { it: "sicuramente", pl: "na pewno" },
      { it: "probabilmente", pl: "prawdopodobnie" },
      { it: "il progetto", pl: "plan, projekt" },
      { it: "trasferirsi", pl: "przeprowadzić się" },
      { it: "prenotare in anticipo", pl: "rezerwować z wyprzedzeniem" },
      { it: "vedremo", pl: "zobaczymy" }
    ],
    exercises: [
      { t: "conj", verb: "partire", tense: "futuro", persons: [0, 1, 2, 3, 4, 5] },
      { t: "conj", verb: "essere", tense: "futuro", persons: [0, 2, 5] },
      { t: "conj", verb: "andare", tense: "futuro", persons: [0, 2, 3] },
      { t: "mcq", q: "Co się dzieje z czasownikami -are w futuro?",
        opts: ["Nic", "A zamienia się w e przed końcówką", "Podwaja się spółgłoska"], a: 1 },
      { t: "fill", q: "Futuro od „avere”, forma io: ___", a: ["avrò"] },
      { t: "fill", q: "Futuro od „venire”, forma loro: ___", a: ["verranno"] },
      { t: "mcq", q: "„Saranno le tre” znaczy:",
        opts: ["Będzie trzecia (o przyszłości)", "Jest chyba trzecia (przypuszczenie)", "Były trzy"], a: 1 },
      { t: "cloze", q: "Uzupełnij plany.",
        text: "L'anno prossimo {{1}} (trasferirsi, io) a Bologna e {{2}} (cercare) lavoro lì.",
        gaps: [["mi trasferirò"], ["cercherò"]],
        pl: "W przyszłym roku przeprowadzę się do Bolonii i będę tam szukać pracy." },
      { t: "listen", it: "Ti chiamerò appena arrivo alla stazione.", pl: "Zadzwonię, jak tylko dojadę na dworzec." },
      { t: "speak", it: "L'anno prossimo andrò a vivere in Italia.", pl: "W przyszłym roku zamieszkam we Włoszech." }
    ]
  },
  {
    id: "a2-u02-l3",
    cefr: "A2",
    themePl: "Podróże",
    titleIt: "Ho una prenotazione",
    titlePl: "Hotel i zakwaterowanie",
    objectivesPl: [
      "zameldować się w hotelu",
      "zgłosić problem w pokoju",
      "zapytać o usługi i wymeldowanie"
    ],
    theory: [
      { h: "Check-in po włosku",
        p: "Recepcjonista poprosi o dokument: <em>Un documento, per favore</em>. Prawo wymaga zgłoszenia gościa policji, więc dowód albo paszport jest obowiązkowy — także w wynajmie krótkoterminowym." },
      { h: "Tassa di soggiorno",
        p: "Prawie każde włoskie miasto pobiera <strong>podatek turystyczny</strong> (1-7 € od osoby za noc), płatny na miejscu i zwykle gotówką, niezależnie od rezerwacji online. To nie próba wyłudzenia — to opłata miejska." },
      { h: "Zgłaszanie problemów",
        p: "Konstrukcja jest prosta: <em>non funziona</em> („nie działa”) + rzecz. <em>L'aria condizionata non funziona.</em> Do tego <em>manca</em> („brakuje”): <em>Mancano gli asciugamani.</em>" },
      { tip: "<em>Camera doppia</em> to pokój dwuosobowy z jednym dużym łóżkiem (<em>matrimoniale</em>) albo z dwoma (<em>due letti singoli</em>). Warto doprecyzować przy rezerwacji, bo domyślne ustawienie bywa różne." }
    ],
    grammar: {
      title: "Zwroty hotelowe",
      table: {
        head: ["sytuacja", "po włosku", "po polsku"],
        rows: [
          ["meldunek", "Ho una prenotazione a nome Kowalski.", "Mam rezerwację na nazwisko Kowalski."],
          ["typ pokoju", "Una camera doppia con bagno privato.", "Pokój dwuosobowy z łazienką."],
          ["śniadanie", "La colazione è inclusa?", "Śniadanie jest wliczone?"],
          ["problem", "L'aria condizionata non funziona.", "Klimatyzacja nie działa."],
          ["brak", "Mancano gli asciugamani.", "Brakuje ręczników."],
          ["wymeldowanie", "A che ora è il check-out?", "O której jest wymeldowanie?"]
        ]
      },
      examples: [
        ["Buonasera, ho una prenotazione per tre notti.", "Dobry wieczór, mam rezerwację na trzy noce."],
        ["Un documento, prego.", "Poproszę dokument."],
        ["La tassa di soggiorno è due euro a persona a notte.", "Podatek turystyczny to dwa euro od osoby za noc."],
        ["C'è il wifi in camera?", "Jest wifi w pokoju?"],
        ["Posso lasciare le valigie dopo il check-out?", "Mogę zostawić walizki po wymeldowaniu?"],
        ["La camera è al terzo piano, l'ascensore è là.", "Pokój jest na trzecim piętrze, winda jest tam."]
      ]
    },
    vocab: [
      { it: "la prenotazione", pl: "rezerwacja" },
      { it: "la camera singola / doppia", pl: "pokój jedno- / dwuosobowy" },
      { it: "matrimoniale", pl: "z podwójnym łóżkiem" },
      { it: "la chiave / la scheda", pl: "klucz / karta" },
      { it: "il piano", pl: "piętro" },
      { it: "l'ascensore", pl: "winda" },
      { it: "l'asciugamano", pl: "ręcznik" },
      { it: "il lenzuolo", pl: "prześcieradło" },
      { it: "la tassa di soggiorno", pl: "podatek turystyczny" },
      { it: "non funziona", pl: "nie działa" },
      { it: "manca / mancano", pl: "brakuje" },
      { it: "il check-out", pl: "wymeldowanie" }
    ],
    exercises: [
      { t: "mcq", q: "Co to „tassa di soggiorno”?",
        opts: ["Kaucja", "Podatek turystyczny płacony na miejscu", "Opłata za sprzątanie"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Ho una ___ a nome Nowak.”", a: ["prenotazione"] },
      { t: "fill", q: "Uzupełnij: „L'aria condizionata non ___.”", a: ["funziona"] },
      { t: "fill", q: "Uzupełnij: „___ gli asciugamani.” (brakuje ręczników)", a: ["mancano"] },
      { t: "match", q: "Połącz.",
        pairs: [["l'ascensore", "winda"], ["il lenzuolo", "prześcieradło"], ["il piano", "piętro"], ["la chiave", "klucz"]] },
      { t: "trans", dir: "pl-it", q: "„Śniadanie jest wliczone?”",
        a: ["la colazione è inclusa", "la colazione è inclusa?", "la colazione è compresa"] },
      { t: "dialogue", q: "Meldujesz się w hotelu.",
        setting: "Recepcja, wieczór, po długiej podróży.",
        lines: [
          { sp: "A", it: "Buonasera! Ha una prenotazione?", pl: "Dobry wieczór! Ma pan rezerwację?" },
          { sp: "TY", pl: "Potwierdź, podaj nazwisko i długość pobytu.", choices: ["Sì, a nome Nowak, per tre notti.", "No, vorrei una camera.", "Sì, ho tre notti prenotazione."], a: 0, plAnswer: "Tak, na nazwisko Nowak, na trzy noce." },
          { sp: "A", it: "Perfetto. Un documento, prego. La tassa di soggiorno è due euro a notte.", pl: "Świetnie. Poproszę dokument. Podatek turystyczny to dwa euro za noc." },
          { sp: "TY", pl: "Zapytaj, czy śniadanie jest wliczone.", choices: ["La colazione è inclusa?", "La colazione è mancata?", "C'è la tassa di colazione?"], a: 0, plAnswer: "Śniadanie jest wliczone?" },
          { sp: "A", it: "Sì, dalle sette alle dieci, al primo piano.", pl: "Tak, od siódmej do dziesiątej, na pierwszym piętrze." }
        ] },
      { t: "cloze", q: "Zgłoś problem.",
        text: "Buongiorno, chiamo dalla camera 204: il wifi non {{1}} e {{2}} gli asciugamani puliti.",
        gaps: [["funziona"], ["mancano"]],
        pl: "Dzień dobry, dzwonię z pokoju 204: wifi nie działa i brakuje czystych ręczników." },
      { t: "listen", it: "La camera è al terzo piano, la colazione dalle sette alle dieci.", pl: "Pokój jest na trzecim piętrze, śniadanie od siódmej do dziesiątej." },
      { t: "speak", it: "Posso lasciare le valigie dopo il check-out?", pl: "Mogę zostawić walizki po wymeldowaniu?" }
    ]
  },
  {
    id: "a2-u02-l4",
    cefr: "A2",
    themePl: "Podróże",
    titleIt: "Quando sarò arrivato",
    titlePl: "Futuro anteriore i planowanie",
    objectivesPl: [
      "utworzyć futuro anteriore",
      "uporządkować dwie czynności przyszłe",
      "wyrazić przypuszczenie o przeszłości"
    ],
    theory: [
      { h: "Przyszłość przed przyszłością",
        p: "<strong>Futuro anteriore</strong> = futuro od <em>avere/essere</em> + imiesłów: <em>avrò finito</em>, <em>sarò arrivato</em>. Opisuje czynność, która skończy się <b>przed</b> inną przyszłą: <em>Quando <b>avrò finito</b> il lavoro, ti chiamerò.</em>" },
      { h: "W mowie potocznej często się go skraca",
        p: "Zamiast <em>quando avrò finito, ti chiamerò</em> Włosi powiedzą <em>quando finisco, ti chiamo</em>. Futuro anteriore zostaje w rejestrze staranniejszym i w piśmie — ale rozumieć go trzeba." },
      { h: "Przypuszczenie o przeszłości",
        p: "To użycie jest żywe i częste: <em>Non risponde… <b>avrà perso</b> il treno.</em> („pewnie spóźnił się na pociąg”). Odpowiednik futuro semplice dla teraźniejszości, tylko przesunięty w przeszłość." },
      { tip: "Sygnały, po których często idzie futuro anteriore: <em>quando, appena, dopo che, una volta che</em>." }
    ],
    grammar: {
      title: "Futuro anteriore",
      table: {
        head: ["osoba", "avere + imiesłów", "essere + imiesłów"],
        rows: [
          ["io", "avrò finito", "sarò partito/a"],
          ["tu", "avrai finito", "sarai partito/a"],
          ["lui / lei", "avrà finito", "sarà partito/a"],
          ["noi", "avremo finito", "saremo partiti/e"],
          ["voi", "avrete finito", "sarete partiti/e"],
          ["loro", "avranno finito", "saranno partiti/e"]
        ]
      },
      examples: [
        ["Quando avrò finito, ti chiamerò.", "Jak skończę, zadzwonię."],
        ["Appena saremo arrivati, ti scriviamo.", "Jak tylko dojedziemy, napiszemy."],
        ["Non risponde, avrà perso il treno.", "Nie odbiera, pewnie spóźnił się na pociąg."],
        ["Dove sarà finito il mio biglietto?", "Gdzie się podział mój bilet?"],
        ["Entro venerdì avremo prenotato tutto.", "Do piątku będziemy mieli wszystko zarezerwowane."],
        ["Sarà stato un malinteso.", "To musiało być nieporozumienie."]
      ]
    },
    vocab: [
      { it: "appena", pl: "jak tylko" },
      { it: "una volta che", pl: "gdy już" },
      { it: "entro", pl: "do (terminu)" },
      { it: "il malinteso", pl: "nieporozumienie" },
      { it: "l'imprevisto", pl: "niespodziewana przeszkoda" },
      { it: "l'itinerario", pl: "trasa, plan podróży" },
      { it: "la partenza / l'arrivo", pl: "odjazd / przyjazd" },
      { it: "il bagaglio a mano", pl: "bagaż podręczny" },
      { it: "l'imbarco", pl: "wejście na pokład" },
      { it: "il volo", pl: "lot" },
      { it: "la coincidenza", pl: "przesiadka" },
      { it: "annullare", pl: "odwołać" }
    ],
    exercises: [
      { t: "fill", q: "Futuro anteriore od „finire”, forma io: ___", a: ["avrò finito"] },
      { t: "fill", q: "Futuro anteriore od „partire”, forma noi (grupa mieszana): ___",
        a: ["saremo partiti"] },
      { t: "mcq", q: "„Avrà perso il treno” znaczy najczęściej:",
        opts: ["Straci pociąg", "Pewnie spóźnił się na pociąg", "Stracił pociąg na pewno"], a: 1 },
      { t: "cloze", q: "Uzupełnij.",
        text: "Quando {{1}} (arrivare, noi) in albergo, ti {{2}} (scrivere, noi).",
        gaps: [["saremo arrivati"], ["scriveremo"]],
        pl: "Kiedy dotrzemy do hotelu, napiszemy do ciebie." },
      { t: "trans", dir: "pl-it", q: "„Jak skończę pracę, zadzwonię.”",
        a: ["quando avrò finito il lavoro ti chiamerò", "quando avrò finito il lavoro, ti chiamerò"] },
      { t: "mcq", q: "Które zdanie jest bardziej potoczne?",
        opts: ["Quando avrò finito, ti chiamerò.", "Quando finisco, ti chiamo.", "Oba są równie potoczne."], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["l'imbarco", "wejście na pokład"], ["il volo", "lot"], ["entro", "do (terminu)"], ["annullare", "odwołać"]] },
      { t: "order", pl: "Do piątku będziemy mieli wszystko zarezerwowane.",
        tokens: ["Entro", "venerdì", "avremo", "prenotato", "tutto"],
        a: ["entro venerdì avremo prenotato tutto"] },
      { t: "listen", it: "Appena saremo arrivati all'aeroporto, ti mandiamo un messaggio.", pl: "Jak tylko dotrzemy na lotnisko, wyślemy ci wiadomość." },
      { t: "speak", it: "Non risponde al telefono, avrà perso la coincidenza.", pl: "Nie odbiera telefonu, pewnie nie zdążył na przesiadkę." }
    ]
  }
  ],
  test: {
    id: "a2-u02-test",
    cefr: "A2", themePl: "Sprawdzian",
    titleIt: "Test — In viaggio", titlePl: "Sprawdzian jednostki 2",
    objectivesPl: ["sprawdzić futuro, słownictwo dworcowe i hotelowe"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "essere", tense: "futuro", persons: [0, 2, 5] },
      { t: "fill", q: "Futuro od „andare”, forma io: ___", a: ["andrò"] },
      { t: "fill", q: "Futuro od „potere”, forma noi: ___", a: ["potremo"] },
      { t: "mcq", q: "„Il treno è soppresso”:", opts: ["opóźniony", "odwołany", "pełny"], a: 1 },
      { t: "fill", q: "„Da quale ___ parte?”", a: ["binario"] },
      { t: "fill", q: "„L'aria condizionata non ___.”", a: ["funziona"] },
      { t: "fill", q: "Futuro anteriore od „finire”, io: ___", a: ["avrò finito"] },
      { t: "trans", dir: "pl-it", q: "„Mam rezerwację na trzy noce.”",
        a: ["ho una prenotazione per tre notti"] },
      { t: "listen", it: "Il volo per Varsavia parte dal gate B12 con venti minuti di ritardo.", pl: "Lot do Warszawy odlatuje z bramki B12 z dwudziestominutowym opóźnieniem." },
      { t: "speak", it: "Vorrei un biglietto di sola andata per Bologna.", pl: "Poproszę bilet w jedną stronę do Bolonii." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 3 — LO VEDO, GLI PARLO
   ══════════════════════════════════════════════════════════════ */
{
  id: "a2-u03",
  icon: "💬",
  titleIt: "Lo vedo, gli parlo",
  titlePl: "Zaimki dopełnienia",
  grammarPl: "zaimki bliższe i dalsze · zgodność imiesłowu",
  lessons: [
  {
    id: "a2-u03-l1",
    cefr: "A2",
    themePl: "Gramatyka",
    titleIt: "Lo, la, li, le",
    titlePl: "Zaimki dopełnienia bliższego",
    objectivesPl: [
      "zastąpić rzeczownik zaimkiem",
      "postawić zaimek we właściwym miejscu",
      "unikać powtarzania tego samego słowa"
    ],
    theory: [
      { h: "Po co one są",
        p: "Powtarzanie rzeczownika brzmi po włosku ciężko. <em>Compri il giornale? — Sì, <b>lo</b> compro.</em> Zaimek zastępuje to, co już wiadomo. Bez tego wypowiedź brzmi jak ćwiczenie z podręcznika, nie jak rozmowa." },
      { h: "Formy",
        p: "<em>mi</em> (mnie), <em>ti</em> (ciebie), <strong>lo</strong> (jego / to, m), <strong>la</strong> (ją / to, ż), <em>ci</em> (nas), <em>vi</em> (was), <strong>li</strong> (ich, m), <strong>le</strong> (je, ż)." },
      { h: "Pozycja",
        p: "Przed odmienionym czasownikiem: <em>lo vedo</em>, <em>non la conosco</em>. Przy bezokoliczniku doczepia się na końcu: <em>voglio veder<b>lo</b></em> — albo stoi przed modalnym: <em><b>lo</b> voglio vedere</em>. Obie wersje są poprawne." },
      { trap: "<b>Lo</b> i <b>la</b> skracają się przed samogłoską: <em>l'ho visto</em>, <em>l'ho vista</em>. Formy <b>li</b> i <b>le</b> nigdy się nie skracają." }
    ],
    grammar: {
      title: "Zaimki dopełnienia bliższego",
      table: {
        head: ["zaimek", "zastępuje", "przykład"],
        rows: [
          ["mi", "mnie", "Mi chiami stasera?"],
          ["ti", "ciebie", "Ti vedo domani."],
          ["lo", "rzecz/osobę r. męskiego", "Il libro? Lo leggo stasera."],
          ["la", "rzecz/osobę r. żeńskiego", "La pizza? La prendo io."],
          ["ci", "nas", "Ci aspetti?"],
          ["vi", "was", "Vi chiamo dopo."],
          ["li", "ich (m)", "I biglietti? Li ho comprati."],
          ["le", "je (ż)", "Le chiavi? Le ho perse."]
        ]
      },
      examples: [
        ["Conosci Marco? — Sì, lo conosco bene.", "Znasz Marco? — Tak, dobrze go znam."],
        ["Prendi la macchina? — No, non la prendo.", "Bierzesz samochód? — Nie, nie biorę."],
        ["Dove sono le chiavi? Non le trovo.", "Gdzie są klucze? Nie mogę ich znaleźć."],
        ["Voglio vederlo subito. / Lo voglio vedere subito.", "Chcę go zobaczyć od razu."],
        ["Mi aspetti cinque minuti?", "Poczekasz na mnie pięć minut?"],
        ["Ci vediamo domani.", "Widzimy się jutro."]
      ]
    },
    vocab: [
      { it: "conoscere", pl: "znać (osobę, miejsce)" },
      { it: "sapere", pl: "wiedzieć, umieć" },
      { it: "trovare", pl: "znaleźć" },
      { it: "perdere", pl: "zgubić, stracić" },
      { it: "aspettare", pl: "czekać" },
      { it: "chiamare", pl: "dzwonić, wołać" },
      { it: "invitare", pl: "zapraszać" },
      { it: "accompagnare", pl: "odprowadzać" },
      { it: "il giornale", pl: "gazeta" },
      { it: "le chiavi", pl: "klucze" },
      { it: "subito", pl: "od razu" },
      { it: "più tardi", pl: "później" }
    ],
    exercises: [
      { t: "mcq", q: "„Conosci Anna?” — jak odpowiesz twierdząco, używając zaimka?",
        opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."], a: 1 },
      { t: "fill", q: "Uzupełnij: „I biglietti? ___ ho comprati ieri.”", a: ["li"] },
      { t: "fill", q: "Uzupełnij: „La pizza? ___ prendo io.”", a: ["la"] },
      { t: "mcq", q: "Które zdania są poprawne?",
        opts: ["Lo voglio vedere.", "Voglio vederlo.", "Obie formy są poprawne."], a: 2 },
      { t: "cloze", q: "Zastąp powtórzenia zaimkami.",
        text: "— Compri il giornale? — Sì, {{1}} compro. — E le riviste? — No, non {{2}} compro.",
        gaps: [["lo"], ["le"]],
        pl: "— Kupujesz gazetę? — Tak, kupuję. — A czasopisma? — Nie, nie kupuję." },
      { t: "trans", dir: "pl-it", q: "„Nie znam go.”", a: ["non lo conosco"] },
      { t: "multi", q: "Które zaimki dopełnienia bliższego mogą się skrócić przed samogłoską?",
        opts: ["lo", "la", "li", "le"], a: [0, 1] },
      { t: "order", pl: "Poczekasz na mnie pięć minut?",
        tokens: ["Mi", "aspetti", "cinque", "minuti?"], a: ["mi aspetti cinque minuti"] },
      { t: "listen", it: "Le chiavi non le trovo, forse le ho lasciate in ufficio.", pl: "Kluczy nie mogę znaleźć, może zostawiłem je w biurze." },
      { t: "speak", it: "Conosci quel ristorante? — Sì, lo conosco bene.", pl: "Znasz tamtą restaurację? — Tak, dobrze ją znam." }
    ]
  },
  {
    id: "a2-u03-l2",
    cefr: "A2",
    themePl: "Gramatyka",
    titleIt: "L'ho vista",
    titlePl: "Zgodność imiesłowu z zaimkiem",
    objectivesPl: [
      "dopasować imiesłów do zaimka bliższego",
      "odróżnić przypadki, gdy zgodność jest obowiązkowa",
      "poprawnie zapisać l'ho visto / l'ho vista"
    ],
    theory: [
      { h: "Reguła w jednym zdaniu",
        p: "W czasach złożonych z <em>avere</em> imiesłów <b>zgadza się z zaimkiem dopełnienia bliższego</b>, jeśli ten stoi przed czasownikiem. <em>Ho visto Anna</em> → <em><b>L'ho vista</b></em>. Bez zaimka imiesłów zostaje niezmienny." },
      { h: "Cztery formy",
        list: [
          "<em>lo</em> → <em>l'ho vist<b>o</b></em>",
          "<em>la</em> → <em>l'ho vist<b>a</b></em>",
          "<em>li</em> → <em>li ho vist<b>i</b></em>",
          "<em>le</em> → <em>le ho vist<b>e</b></em>"
        ] },
      { trap: "Skrócenie <em>l'</em> ukrywa rodzaj — dlatego to <b>końcówka imiesłowu</b> mówi, o kogo chodzi. <em>L'ho visto</em> (jego) i <em>l'ho vista</em> (ją) różnią się jedną literą, ale znaczą co innego." },
      { h: "Gdzie zgodności NIE ma",
        p: "Z zaimkiem <b>dalszym</b> imiesłów się nie zmienia: <em>Le ho parlato</em> (rozmawiałem z nią), nie „parlata”. To najczęstszy błąd na tym etapie: trzeba wiedzieć, czy zaimek jest bliższy, czy dalszy." }
    ],
    grammar: {
      title: "Zgodność imiesłowu",
      table: {
        head: ["zdanie pełne", "z zaimkiem", "uwaga"],
        rows: [
          ["Ho visto Marco.", "L'ho visto.", "lo → -o"],
          ["Ho visto Anna.", "L'ho vista.", "la → -a"],
          ["Ho comprato i libri.", "Li ho comprati.", "li → -i"],
          ["Ho perso le chiavi.", "Le ho perse.", "le → -e"],
          ["Ho parlato a Anna.", "Le ho parlato.", "dalszy → bez zgodności"],
          ["Ho mangiato la pizza.", "L'ho mangiata.", "rzecz też się liczy"]
        ]
      },
      examples: [
        ["Hai visto Giulia? — Sì, l'ho vista ieri.", "Widziałeś Giulię? — Tak, widziałem ją wczoraj."],
        ["I documenti? Li ho già spediti.", "Dokumenty? Już je wysłałem."],
        ["Le foto? Non le ho ancora guardate.", "Zdjęcia? Jeszcze ich nie oglądałam."],
        ["Le ho scritto una mail.", "Napisałem do niej maila.", "dalszy — bez zgodności"],
        ["L'ho conosciuta a Roma.", "Poznałem ją w Rzymie."],
        ["Ci hanno invitati alla festa.", "Zaprosili nas na imprezę."]
      ]
    },
    vocab: [
      { it: "spedire", pl: "wysyłać" },
      { it: "guardare", pl: "oglądać" },
      { it: "ricevere", pl: "otrzymywać" },
      { it: "restituire", pl: "oddawać" },
      { it: "prestare", pl: "pożyczać komuś" },
      { it: "il documento", pl: "dokument" },
      { it: "la foto", pl: "zdjęcie" },
      { it: "il messaggio", pl: "wiadomość" },
      { it: "la mail", pl: "e-mail" },
      { it: "ancora", pl: "jeszcze" },
      { it: "già", pl: "już" },
      { it: "per caso", pl: "przypadkiem" }
    ],
    exercises: [
      { t: "mcq", q: "„Hai visto Anna?” — poprawna odpowiedź:",
        opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."], a: 1 },
      { t: "fill", q: "Uzupełnij: „I libri? ___ ho comprat___.” — wpisz oba elementy oddzielone spacją",
        a: ["li i"], hint: "zaimek + końcówka imiesłowu",
        why: "Li ho comprati — zaimek li wymusza końcówkę -i." },
      { t: "fill", q: "Uzupełnij końcówkę: „Le chiavi? Le ho pers___.”", a: ["e"] },
      { t: "mcq", q: "„Le ho parlato” — dlaczego nie „parlata”?",
        opts: ["Bo to błąd", "Bo „le” jest tu zaimkiem dalszym (do niej)", "Bo parlare jest nieregularne"], a: 1 },
      { t: "cloze", q: "Uzupełnij końcówki.",
        text: "La mail? L'ho gia spedit{{1}}. Le foto? Non le ho ancora guardat{{2}}.",
        gaps: [["a"], ["e"]],
        pl: "Maila? Już go wysłałem. Zdjęcia? Jeszcze ich nie oglądałem." },
      { t: "trans", dir: "pl-it", q: "„Poznałem ją w Rzymie.”", a: ["l'ho conosciuta a roma"] },
      { t: "multi", q: "W których zdaniach imiesłów musi się zgadzać?",
        opts: ["L'ho vista.", "Le ho parlato.", "Li ho invitati.", "Gli ho scritto."], a: [0, 2] },
      { t: "order", pl: "Dokumenty już wysłałem.",
        tokens: ["I", "documenti", "li", "ho", "già", "spediti"],
        a: ["i documenti li ho già spediti"] },
      { t: "listen", it: "Le foto del viaggio non le ho ancora guardate.", pl: "Zdjęć z podróży jeszcze nie oglądałem." },
      { t: "speak", it: "Hai visto Giulia? — Sì, l'ho vista ieri sera.", pl: "Widziałeś Giulię? — Tak, widziałem ją wczoraj wieczorem." }
    ]
  },
  {
    id: "a2-u03-l3",
    cefr: "A2",
    themePl: "Gramatyka",
    titleIt: "Gli parlo, le scrivo",
    titlePl: "Zaimki dopełnienia dalszego",
    objectivesPl: [
      "odróżnić dopełnienie bliższe od dalszego",
      "użyć gli i le poprawnie",
      "znać czasowniki wymagające dopełnienia dalszego"
    ],
    theory: [
      { h: "Komu, a nie kogo",
        p: "Zaimek <b>dalszy</b> zastępuje <em>a + osoba</em>: <em>Telefono a Marco → <b>Gli</b> telefono.</em> Zaimek <b>bliższy</b> zastępuje rzeczownik bez przyimka: <em>Vedo Marco → <b>Lo</b> vedo.</em>" },
      { h: "Formy",
        p: "<em>mi, ti, <b>gli</b> (jemu), <b>le</b> (jej), ci, vi, <b>gli</b> (im)</em>. W rejestrze formalnym „im” to <em>loro</em>, stawiane po czasowniku: <em>Telefono loro</em> — ale w mowie prawie zawsze <em>gli</em>." },
      { h: "Czasowniki, które zaskakują",
        p: "Kilka włoskich czasowników wymaga dopełnienia dalszego tam, gdzie polski ma biernik: <em>telefonare a</em>, <em>rispondere a</em>, <em>chiedere a</em>, <em>credere a</em>, <em>piacere a</em>, <em>dispiacere a</em>. Zdanie „lo telefono” jest błędne — musi być <em>gli telefono</em>." },
      { trap: "<b>Gli</b> pełni dwie zupełnie różne funkcje: rodzajnik (<em>gli amici</em>) i zaimek (<em>gli parlo</em>). Rozstrzyga miejsce w zdaniu — rodzajnik stoi przed rzeczownikiem, zaimek przed czasownikiem." }
    ],
    grammar: {
      title: "Bliższe kontra dalsze",
      table: {
        head: ["czasownik", "typ", "przykład"],
        rows: [
          ["vedere qualcuno", "bliższy", "Lo vedo domani."],
          ["telefonare a qualcuno", "dalszy", "Gli telefono domani."],
          ["conoscere qualcuno", "bliższy", "La conosco bene."],
          ["scrivere a qualcuno", "dalszy", "Le scrivo una mail."],
          ["aspettare qualcuno", "bliższy", "Ti aspetto."],
          ["rispondere a qualcuno", "dalszy", "Gli rispondo subito."]
        ]
      },
      examples: [
        ["Hai chiamato Marco? — Sì, gli ho telefonato ieri.", "Dzwoniłeś do Marco? — Tak, dzwoniłem wczoraj."],
        ["Che cosa le hai detto?", "Co jej powiedziałeś?"],
        ["Non gli credo per niente.", "W ogóle mu nie wierzę."],
        ["Ci hanno risposto subito.", "Odpowiedzieli nam od razu."],
        ["Le piace molto viaggiare.", "Ona bardzo lubi podróżować."],
        ["Voglio parlargli oggi.", "Chcę z nim dziś porozmawiać."]
      ]
    },
    vocab: [
      { it: "telefonare a", pl: "dzwonić do" },
      { it: "rispondere a", pl: "odpowiadać komuś" },
      { it: "scrivere a", pl: "pisać do" },
      { it: "chiedere a", pl: "pytać kogoś" },
      { it: "dire a", pl: "powiedzieć komuś" },
      { it: "credere a", pl: "wierzyć komuś" },
      { it: "regalare a", pl: "dawać w prezencie" },
      { it: "prestare a", pl: "pożyczać komuś" },
      { it: "mandare a", pl: "wysyłać komuś" },
      { it: "spiegare a", pl: "tłumaczyć komuś" },
      { it: "consigliare a", pl: "doradzać komuś" },
      { it: "per niente", pl: "wcale" }
    ],
    exercises: [
      { t: "mcq", q: "„Telefono a Marco” → z zaimkiem:",
        opts: ["Lo telefono.", "Gli telefono.", "Le telefono."], a: 1 },
      { t: "mcq", q: "„Vedo Marco” → z zaimkiem:",
        opts: ["Lo vedo.", "Gli vedo.", "Le vedo."], a: 0 },
      { t: "fill", q: "Uzupełnij: „Che cosa ___ hai detto?” (jej)", a: ["le"] },
      { t: "fill", q: "Uzupełnij: „Non ___ credo.” (mu)", a: ["gli"] },
      { t: "multi", q: "Które czasowniki wymagają dopełnienia dalszego (a qualcuno)?",
        opts: ["telefonare", "vedere", "rispondere", "aspettare", "credere"], a: [0, 2, 4] },
      { t: "cloze", q: "Uzupełnij zaimki.",
        text: "Ho scritto a Giulia: {{1}} ho mandato una mail. Marco non risponde, {{2}} telefono domani.",
        gaps: [["le"], ["gli"]],
        pl: "Napisałem do Giulii: wysłałem jej maila. Marco nie odpowiada, zadzwonię do niego jutro." },
      { t: "trans", dir: "pl-it", q: "„Chcę z nim dziś porozmawiać.”",
        a: ["voglio parlargli oggi", "gli voglio parlare oggi"] },
      { t: "match", q: "Połącz.",
        pairs: [["regalare a", "dawać w prezencie"], ["prestare a", "pożyczać komuś"], ["spiegare a", "tłumaczyć komuś"], ["consigliare a", "doradzać komuś"]] },
      { t: "listen", it: "Le ho scritto ieri, ma non mi ha ancora risposto.", pl: "Napisałem do niej wczoraj, ale jeszcze mi nie odpowiedziała." },
      { t: "speak", it: "Gli telefono stasera e gli spiego tutto.", pl: "Zadzwonię do niego wieczorem i wszystko mu wytłumaczę." }
    ]
  },
  {
    id: "a2-u03-l4",
    cefr: "A2",
    themePl: "Gramatyka",
    titleIt: "Dimmi, fammi sapere",
    titlePl: "Tryb rozkazujący z zaimkami",
    objectivesPl: [
      "utworzyć tryb rozkazujący we wszystkich osobach",
      "doczepić zaimek do formy rozkazującej",
      "utworzyć przeczenie w formie tu"
    ],
    theory: [
      { h: "Formy podstawowe",
        p: "<b>tu</b>: <em>-are → -a</em> (parla), <em>-ere/-ire → -i</em> (prendi, senti). <b>Lei</b>: odwrotnie — <em>-are → -i</em> (parli), <em>-ere/-ire → -a</em> (prenda, senta). <b>noi</b>: jak czas teraźniejszy (parliamo). <b>voi</b>: jak czas teraźniejszy (parlate)." },
      { h: "Przeczenie w formie tu",
        p: "Zamiast formy rozkazującej używa się <b>bezokolicznika</b>: <em>non parlare!</em>, <em>non andare!</em>, <em>non ti preoccupare!</em>. To dotyczy wyłącznie formy <em>tu</em> — w pozostałych osobach zwykłe <em>non</em> + forma." },
      { h: "Zaimki doczepiają się na końcu",
        p: "<em>Dimmi!</em> (powiedz mi), <em>Chiamami!</em>, <em>Aspettalo!</em>, <em>Andiamoci!</em>. Ale w formie <b>Lei</b> zaimek stoi przed: <em>Mi dica</em>, <em>Lo aspetti</em>." },
      { trap: "Po skróconych formach <em>fa', da', sta', va', di'</em> spółgłoska zaimka <b>się podwaja</b>: <em>dimmi, fammi, dammi, vattene, stammi bene</em>. Wyjątek: <em>gli</em> — <em>digli</em>, bez podwojenia." }
    ],
    grammar: {
      title: "Tryb rozkazujący",
      table: {
        head: ["osoba", "parlare", "prendere", "sentire", "z zaimkiem"],
        rows: [
          ["tu", "parla", "prendi", "senti", "dimmi, chiamami"],
          ["Lei", "parli", "prenda", "senta", "mi dica, lo prenda"],
          ["noi", "parliamo", "prendiamo", "sentiamo", "andiamoci"],
          ["voi", "parlate", "prendete", "sentite", "ascoltatemi"],
          ["tu (przeczenie)", "non parlare", "non prendere", "non sentire", "non dirmi"]
        ]
      },
      examples: [
        ["Dimmi tutto!", "Powiedz mi wszystko!"],
        ["Fammi sapere come va.", "Daj mi znać, jak idzie."],
        ["Non ti preoccupare, ci penso io.", "Nie martw się, ja się tym zajmę."],
        ["Mi dica pure, signora.", "Proszę mówić, proszę pani."],
        ["Andiamoci insieme!", "Chodźmy tam razem!"],
        ["Scusami, non l'ho fatto apposta.", "Wybacz mi, nie zrobiłem tego celowo."]
      ]
    },
    vocab: [
      { it: "dimmi", pl: "powiedz mi" },
      { it: "fammi sapere", pl: "daj mi znać" },
      { it: "dammi", pl: "daj mi" },
      { it: "scusami", pl: "wybacz mi" },
      { it: "aspettami", pl: "poczekaj na mnie" },
      { it: "non ti preoccupare", pl: "nie martw się" },
      { it: "guarda", pl: "patrz, zobacz" },
      { it: "senti", pl: "słuchaj" },
      { it: "stammi bene", pl: "trzymaj się" },
      { it: "vieni qui", pl: "chodź tu" },
      { it: "smettila", pl: "przestań" },
      { it: "apposta", pl: "celowo" }
    ],
    exercises: [
      { t: "mcq", q: "Przeczenie „non parlare!” dotyczy której osoby?",
        opts: ["tu", "Lei", "voi"], a: 0,
        why: "Tylko forma tu używa bezokolicznika w przeczeniu." },
      { t: "fill", q: "Utwórz tryb rozkazujący (tu) od „prendere”: ___", a: ["prendi"] },
      { t: "fill", q: "Utwórz tryb rozkazujący (Lei) od „parlare”: ___", a: ["parli"] },
      { t: "fill", q: "„Powiedz mi” to: ___", a: ["dimmi"] },
      { t: "mcq", q: "Dlaczego „dammi”, a nie „dami”?",
        opts: ["To pomyłka", "Po skróconej formie da' spółgłoska zaimka się podwaja", "Bo dare jest nieregularne we wszystkim"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Nie martw się.”", a: ["non ti preoccupare", "non preoccuparti"] },
      { t: "cloze", q: "Uzupełnij wiadomość do znajomej.",
        text: "Ciao! {{1}} sapere a che ora arrivi e {{2}} un messaggio quando parti.",
        gaps: [["fammi"], ["mandami"]],
        pl: "Cześć! Daj mi znać, o której przyjeżdżasz, i wyślij mi wiadomość, kiedy wyruszysz." },
      { t: "order", pl: "Proszę mówić, słucham panią.",
        tokens: ["Mi", "dica", "pure,", "signora"], a: ["mi dica pure signora"] },
      { t: "listen", it: "Fammi sapere quando arrivi, ti vengo a prendere.", pl: "Daj znać, kiedy przyjeżdżasz, przyjadę po ciebie." },
      { t: "speak", it: "Dimmi tutto, non ti preoccupare.", pl: "Powiedz mi wszystko, nie martw się." }
    ]
  }
  ],
  test: {
    id: "a2-u03-test",
    cefr: "A2", themePl: "Sprawdzian",
    titleIt: "Test — Lo vedo, gli parlo", titlePl: "Sprawdzian jednostki 3",
    objectivesPl: ["sprawdzić zaimki bliższe i dalsze, zgodność imiesłowu i tryb rozkazujący"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Conosci Anna?” →", opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."], a: 1 },
      { t: "fill", q: "„I biglietti? ___ ho comprati.”", a: ["li"] },
      { t: "fill", q: "„Le chiavi? Le ho pers___.”", a: ["e"] },
      { t: "mcq", q: "„Telefono a Marco” →", opts: ["Lo telefono", "Gli telefono", "Le telefono"], a: 1 },
      { t: "fill", q: "„Che cosa ___ hai detto?” (jej)", a: ["le"] },
      { t: "fill", q: "Tryb rozkazujący (tu) od „sentire”: ___", a: ["senti"] },
      { t: "fill", q: "„Powiedz mi”: ___", a: ["dimmi"] },
      { t: "trans", dir: "pl-it", q: "„Nie martw się, zajmę się tym.”",
        a: ["non ti preoccupare ci penso io", "non ti preoccupare, ci penso io"] },
      { t: "listen", it: "L'ho vista ieri e le ho parlato del progetto.", pl: "Widziałem ją wczoraj i rozmawiałem z nią o projekcie." },
      { t: "speak", it: "Fammi sapere quando arrivi, ti aspetto.", pl: "Daj znać, kiedy przyjeżdżasz, czekam na ciebie." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 4 — SALUTE
   ══════════════════════════════════════════════════════════════ */
{
  id: "a2-u04",
  icon: "🩺",
  titleIt: "Salute",
  titlePl: "Zdrowie",
  grammarPl: "mi fa male · tryb rozkazujący formalny · rady",
  lessons: [
  {
    id: "a2-u04-l1",
    cefr: "A2",
    themePl: "Zdrowie",
    titleIt: "Mi fa male la testa",
    titlePl: "Ból i objawy",
    objectivesPl: [
      "opisać, co Cię boli",
      "nazwać podstawowe objawy",
      "użyć konstrukcji mi fa / mi fanno male"
    ],
    theory: [
      { h: "Konstrukcja odwrócona, jak przy piacere",
        p: "<em>Mi fa male la testa</em> to dosłownie „głowa robi mi źle”. Podmiotem jest <b>część ciała</b>, dlatego czasownik ma dwie formy: <em>mi <b>fa</b> male il piede</em> (jedna rzecz) i <em>mi <b>fanno</b> male i piedi</em> (wiele)." },
      { h: "Dwa równoległe sposoby",
        p: "Obok <em>mi fa male la gola</em> istnieje <em>ho mal di gola</em>. Drugi wariant działa jak stały zwrot: <em>mal di testa, mal di stomaco, mal di schiena, mal di denti</em>. Oba są równie naturalne." },
      { h: "Rodzajnik przy częściach ciała",
        p: "Włoski mówi <em>mi fa male <b>la</b> testa</em>, a nie „mia testa”. Zaimek <em>mi</em> już wskazuje właściciela, więc dzierżawczy byłby nadmiarowy. To samo w <em>mi lavo <b>i</b> denti</em>." },
      { tip: "<em>Da quanto tempo?</em> („od jak dawna?”) to pierwsze pytanie, jakie usłyszysz u lekarza. Odpowiedź: <em>da tre giorni</em>, <em>da una settimana</em>." }
    ],
    grammar: {
      title: "Ból i objawy",
      table: {
        head: ["konstrukcja", "przykład", "po polsku"],
        rows: [
          ["mi fa male + l.poj.", "Mi fa male la schiena.", "Boli mnie plecy."],
          ["mi fanno male + l.mn.", "Mi fanno male i denti.", "Bolą mnie zęby."],
          ["ho mal di…", "Ho mal di testa.", "Boli mnie głowa."],
          ["ho la febbre", "Ho trentotto di febbre.", "Mam 38 gorączki."],
          ["mi sento…", "Mi sento debole.", "Czuję się słabo."],
          ["da quanto?", "Da tre giorni.", "Od trzech dni."]
        ]
      },
      examples: [
        ["Mi fa male la gola da due giorni.", "Boli mnie gardło od dwóch dni."],
        ["Ho mal di stomaco e la nausea.", "Boli mnie brzuch i mam mdłości."],
        ["Ho la tosse e il raffreddore.", "Mam kaszel i katar."],
        ["Mi sento stanca e non ho appetito.", "Czuję się zmęczona i nie mam apetytu."],
        ["Sono allergica alla penicillina.", "Mam alergię na penicylinę."],
        ["Prendo qualcosa per il mal di testa?", "Wziąć coś na ból głowy?"]
      ]
    },
    vocab: [
      { it: "la testa", pl: "głowa" },
      { it: "la gola", pl: "gardło" },
      { it: "lo stomaco", pl: "żołądek, brzuch" },
      { it: "la schiena", pl: "plecy" },
      { it: "i denti", pl: "zęby" },
      { it: "la febbre", pl: "gorączka" },
      { it: "la tosse", pl: "kaszel" },
      { it: "il raffreddore", pl: "katar, przeziębienie" },
      { it: "la nausea", pl: "mdłości" },
      { it: "mi sento male", pl: "źle się czuję" },
      { it: "l'allergia", pl: "alergia" },
      { it: "da quanto tempo?", pl: "od jak dawna?" }
    ],
    exercises: [
      { t: "mcq", q: "„___ male i denti.” (bolą mnie zęby)",
        opts: ["Mi fa", "Mi fanno", "Mi faccio"], a: 1,
        why: "Podmiotem są zęby — liczba mnoga, więc fanno." },
      { t: "fill", q: "Uzupełnij: „Mi ___ male la schiena.”", a: ["fa"] },
      { t: "fill", q: "Uzupełnij: „Ho mal ___ testa.”", a: ["di"] },
      { t: "mcq", q: "Które zdanie jest naturalne po włosku?",
        opts: ["Mi fa male la mia testa.", "Mi fa male la testa.", "Fa male mia testa."], a: 1,
        why: "Zaimek mi już wskazuje właściciela; dzierżawczy jest zbędny." },
      { t: "match", q: "Połącz.",
        pairs: [["la tosse", "kaszel"], ["il raffreddore", "katar"], ["la nausea", "mdłości"], ["la febbre", "gorączka"]] },
      { t: "trans", dir: "pl-it", q: "„Boli mnie gardło od trzech dni.”",
        a: ["mi fa male la gola da tre giorni", "ho mal di gola da tre giorni"] },
      { t: "cloze", q: "Opisz objawy.",
        text: "{{1}} fa male la gola, {{2}} la febbre e mi sento {{3}}.",
        gaps: [["mi"], ["ho"], ["debole", "stanco", "stanca", "male"]],
        pl: "Boli mnie gardło, mam gorączkę i czuję się słabo." },
      { t: "order", pl: "Mam kaszel i katar od tygodnia.",
        tokens: ["Ho", "la", "tosse", "e", "il", "raffreddore", "da", "una", "settimana"],
        a: ["ho la tosse e il raffreddore da una settimana"] },
      { t: "listen", it: "Mi fanno male le gambe dopo la corsa.", pl: "Bolą mnie nogi po bieganiu." },
      { t: "speak", it: "Mi fa male la testa e ho la febbre.", pl: "Boli mnie głowa i mam gorączkę." }
    ]
  },
  {
    id: "a2-u04-l2",
    cefr: "A2",
    themePl: "Zdrowie",
    titleIt: "Dal medico",
    titlePl: "U lekarza",
    objectivesPl: [
      "opisać dolegliwość lekarzowi",
      "zrozumieć zalecenia",
      "zapytać o dawkowanie leku"
    ],
    theory: [
      { h: "Jak działa włoska służba zdrowia",
        p: "Podstawą jest <strong>medico di base</strong> (lekarz rodzinny), do którego trzeba się zapisać. Skierowanie to <em>l'impegnativa</em> albo <em>la ricetta</em>. Na ostry dyżur idzie się do <strong>pronto soccorso</strong>, gdzie działa triage kolorami: biały (najmniej pilny) → czerwony." },
      { h: "Tryb rozkazujący formalny w zaleceniach",
        p: "Lekarz mówi przez <em>Lei</em>: <em>Prenda questo tre volte al giorno</em>, <em>Riposi</em>, <em>Beva molta acqua</em>, <em>Non si preoccupi</em>. Warto rozpoznawać te formy, nawet jeśli sam ich jeszcze nie tworzysz." },
      { h: "Apteka może więcej niż w Polsce",
        p: "Włoski <em>farmacista</em> ma szerokie uprawnienia doradcze i często jest pierwszym punktem kontaktu przy drobnych dolegliwościach. Wiele leków, które w Polsce wymagają recepty, tu też jej wymaga — ale porada jest bezpłatna i konkretna." },
      { tip: "Zwrot, który ratuje w każdej sytuacji medycznej: <em>Sono allergico/a a…</em> Warto go umieć bez zastanowienia." }
    ],
    grammar: {
      title: "U lekarza i w aptece",
      table: {
        head: ["kto mówi", "po włosku", "po polsku"],
        rows: [
          ["lekarz", "Cosa c'è che non va?", "Co się dzieje?"],
          ["lekarz", "Da quanto tempo ha questi sintomi?", "Od kiedy ma pan te objawy?"],
          ["pacjent", "Mi fa male qui.", "Boli mnie tutaj."],
          ["lekarz", "Le prescrivo un antibiotico.", "Przepiszę panu antybiotyk."],
          ["pacjent", "Quante volte al giorno?", "Ile razy dziennie?"],
          ["lekarz", "Due volte al giorno, dopo i pasti.", "Dwa razy dziennie, po posiłkach."]
        ]
      },
      examples: [
        ["Buongiorno, non mi sento bene.", "Dzień dobry, źle się czuję."],
        ["Ha allergie a qualche farmaco?", "Ma pan alergie na jakieś leki?"],
        ["Le faccio una ricetta.", "Wypiszę panu receptę."],
        ["Riposi e beva molta acqua.", "Proszę odpoczywać i pić dużo wody."],
        ["Se non passa in tre giorni, torni.", "Jeśli nie przejdzie w trzy dni, proszę wrócić."],
        ["Ho bisogno di un certificato medico.", "Potrzebuję zwolnienia lekarskiego."]
      ]
    },
    vocab: [
      { it: "il medico di base", pl: "lekarz rodzinny" },
      { it: "il pronto soccorso", pl: "ostry dyżur, SOR" },
      { it: "la ricetta", pl: "recepta" },
      { it: "l'antibiotico", pl: "antybiotyk" },
      { it: "la pastiglia", pl: "tabletka" },
      { it: "lo sciroppo", pl: "syrop" },
      { it: "la puntura", pl: "zastrzyk" },
      { it: "l'analisi del sangue", pl: "badanie krwi" },
      { it: "il certificato medico", pl: "zwolnienie lekarskie" },
      { it: "dopo i pasti", pl: "po posiłkach" },
      { it: "a stomaco vuoto", pl: "na czczo" },
      { it: "guarire", pl: "wyzdrowieć" }
    ],
    exercises: [
      { t: "mcq", q: "Gdzie idziesz z nagłym, poważnym problemem?",
        opts: ["Dal medico di base", "Al pronto soccorso", "In farmacia"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Sono ___ alla penicillina.” (mam alergię, kobieta)",
        a: ["allergica"] },
      { t: "fill", q: "Uzupełnij: „Quante ___ al giorno?” (ile razy)", a: ["volte"] },
      { t: "match", q: "Połącz.",
        pairs: [["la ricetta", "recepta"], ["la pastiglia", "tabletka"], ["a stomaco vuoto", "na czczo"], ["guarire", "wyzdrowieć"]] },
      { t: "trans", dir: "pl-it", q: "„Od kiedy ma pan te objawy?”",
        a: ["da quanto tempo ha questi sintomi", "da quanto tempo ha questi sintomi?"] },
      { t: "dialogue", q: "Wizyta u lekarza.",
        setting: "Gabinet, poniedziałek rano.",
        lines: [
          { sp: "A", it: "Buongiorno, si accomodi. Cosa c'è che non va?", pl: "Dzień dobry, proszę siadać. Co się dzieje?" },
          { sp: "TY", pl: "Powiedz, że boli cię gardło i masz gorączkę.", choices: ["Mi fa male la gola e ho la febbre.", "Ho male gola e febbre.", "Mi fanno male la gola."], a: 0, plAnswer: "Boli mnie gardło i mam gorączkę." },
          { sp: "A", it: "Da quanto tempo?", pl: "Od jak dawna?" },
          { sp: "TY", pl: "Powiedz, że od trzech dni.", choices: ["Da tre giorni.", "Tre giorni fa.", "Per tre giorni."], a: 0, plAnswer: "Od trzech dni." },
          { sp: "A", it: "Le prescrivo un antibiotico. Ha allergie?", pl: "Przepiszę antybiotyk. Ma pani alergie?" },
          { sp: "TY", pl: "Zaprzecz i zapytaj o dawkowanie.", choices: ["No, nessuna. Quante volte al giorno lo prendo?", "Sì, nessuna allergia. Quanto costa?", "No. Dove è il pronto soccorso?"], a: 0, plAnswer: "Nie, żadnych. Ile razy dziennie mam go brać?" }
        ] },
      { t: "cloze", q: "Uzupełnij zalecenie lekarza.",
        text: "Prenda una {{1}} due volte al giorno, dopo i {{2}}. E {{3}} molta acqua.",
        gaps: [["pastiglia"], ["pasti"], ["beva"]],
        pl: "Proszę brać jedną tabletkę dwa razy dziennie, po posiłkach. I pić dużo wody." },
      { t: "order", pl: "Potrzebuję zwolnienia lekarskiego.",
        tokens: ["Ho", "bisogno", "di", "un", "certificato", "medico"],
        a: ["ho bisogno di un certificato medico"] },
      { t: "listen", it: "Prenda l'antibiotico per sei giorni, anche se sta meglio.", pl: "Proszę brać antybiotyk przez sześć dni, nawet jeśli poczuje się pan lepiej." },
      { t: "speak", it: "Sono allergica alla penicillina, c'è un'alternativa?", pl: "Mam alergię na penicylinę, jest jakaś alternatywa?" }
    ]
  },
  {
    id: "a2-u04-l3",
    cefr: "A2",
    themePl: "Zdrowie",
    titleIt: "Dovresti riposare",
    titlePl: "Dawanie rad",
    objectivesPl: [
      "poradzić komuś, co zrobić",
      "użyć condizionale w formie dovresti / potresti",
      "zareagować na cudzy problem"
    ],
    theory: [
      { h: "Condizionale — pierwsze spotkanie",
        p: "Tryb warunkowy tworzy się z tego samego tematu co futuro, ale z końcówkami <em>-ei, -esti, -ebbe, -emmo, -este, -ebbero</em>. Znasz już <em>vorrei</em>; teraz dochodzą <em>dovrei</em> (powinienem), <em>potrei</em> (mógłbym), <em>sarebbe</em> (byłoby)." },
      { h: "Rada bez rozkazu",
        p: "<em>Devi riposare</em> („musisz odpocząć”) brzmi jak polecenie. <em>Dovresti riposare</em> („powinieneś odpocząć”) to rada. Ta różnica jest w rozmowie z Włochami wyraźna i wpływa na to, jak odbierana jest Twoja wypowiedź." },
      { h: "Inne sposoby radzenia",
        list: [
          "<em>Perché non…?</em> — „może byś…?”: <em>Perché non vai dal medico?</em>",
          "<em>Se fossi in te…</em> — „na twoim miejscu…” (pełne wyjaśnienie na B2)",
          "<em>Ti conviene…</em> — „lepiej ci będzie…”: <em>Ti conviene riposare.</em>"
        ] },
      { tip: "Reakcja na cudzy problem: <em>Mi dispiace</em> (przykro mi), <em>Che peccato</em> (jaka szkoda), <em>Rimettiti presto</em> (zdrowiej szybko)." }
    ],
    grammar: {
      title: "Condizionale presente — formy podstawowe",
      table: {
        head: ["osoba", "dovere", "potere", "volere", "essere"],
        rows: [
          ["io", "dovrei", "potrei", "vorrei", "sarei"],
          ["tu", "dovresti", "potresti", "vorresti", "saresti"],
          ["lui / lei", "dovrebbe", "potrebbe", "vorrebbe", "sarebbe"],
          ["noi", "dovremmo", "potremmo", "vorremmo", "saremmo"],
          ["voi", "dovreste", "potreste", "vorreste", "sareste"],
          ["loro", "dovrebbero", "potrebbero", "vorrebbero", "sarebbero"]
        ]
      },
      examples: [
        ["Dovresti riposare qualche giorno.", "Powinieneś odpocząć kilka dni."],
        ["Potresti chiedere al farmacista.", "Mógłbyś zapytać farmaceuty."],
        ["Sarebbe meglio andare dal medico.", "Lepiej byłoby pójść do lekarza."],
        ["Perché non prendi un giorno libero?", "Może weź dzień wolny?"],
        ["Ti conviene riposare oggi.", "Lepiej odpocznij dzisiaj."],
        ["Rimettiti presto!", "Zdrowiej szybko!"]
      ]
    },
    vocab: [
      { it: "dovresti", pl: "powinieneś" },
      { it: "potresti", pl: "mógłbyś" },
      { it: "sarebbe meglio", pl: "lepiej byłoby" },
      { it: "ti conviene", pl: "lepiej ci będzie" },
      { it: "perché non…?", pl: "może byś…?" },
      { it: "il consiglio", pl: "rada" },
      { it: "riposare", pl: "odpoczywać" },
      { it: "smettere di", pl: "przestać" },
      { it: "muoversi", pl: "ruszać się" },
      { it: "mi dispiace", pl: "przykro mi" },
      { it: "che peccato", pl: "jaka szkoda" },
      { it: "rimettiti presto", pl: "zdrowiej szybko" }
    ],
    exercises: [
      { t: "conj", verb: "dovere", tense: "condizionale", persons: [0, 1, 2, 3, 4, 5] },
      { t: "conj", verb: "potere", tense: "condizionale", persons: [1, 2, 5] },
      { t: "mcq", q: "Która wersja brzmi jak rada, a nie polecenie?",
        opts: ["Devi riposare.", "Dovresti riposare.", "Riposa!"], a: 1 },
      { t: "fill", q: "Uzupełnij: „___ meglio andare dal medico.” (lepiej byłoby)",
        a: ["sarebbe"] },
      { t: "fill", q: "Uzupełnij: „___ chiedere al farmacista?” (mógłbyś)", a: ["potresti"] },
      { t: "trans", dir: "pl-it", q: "„Powinieneś odpocząć kilka dni.”",
        a: ["dovresti riposare qualche giorno", "dovresti riposare per qualche giorno"] },
      { t: "match", q: "Połącz reakcje.",
        pairs: [["mi dispiace", "przykro mi"], ["che peccato", "jaka szkoda"], ["rimettiti presto", "zdrowiej szybko"], ["ti conviene", "lepiej ci będzie"]] },
      { t: "cloze", q: "Doradź koledze.",
        text: "{{1}} riposare oggi. E {{2}} non chiami il medico?",
        gaps: [["dovresti"], ["perché"]],
        pl: "Powinieneś dziś odpocząć. I może zadzwoń do lekarza?" },
      { t: "listen", it: "Sarebbe meglio se prendessi un giorno libero.", pl: "Lepiej byłoby, gdybyś wziął dzień wolny." },
      { t: "speak", it: "Dovresti riposare e bere molta acqua.", pl: "Powinieneś odpocząć i pić dużo wody." }
    ]
  },
  {
    id: "a2-u04-l4",
    cefr: "A2",
    themePl: "Zdrowie",
    titleIt: "Vita sana",
    titlePl: "Styl życia i sport",
    objectivesPl: [
      "porozmawiać o zdrowych nawykach",
      "opisać, jak często coś robisz",
      "wyrazić zamiar zmiany"
    ],
    theory: [
      { h: "Dieta śródziemnomorska to nie dieta",
        p: "Słowo <em>dieta</em> po włosku znaczy przede wszystkim „sposób odżywiania”, nie „odchudzanie”. <em>La dieta mediterranea</em> to wzorzec żywieniowy wpisany na listę UNESCO, a nie plan redukcyjny." },
      { h: "Wyrażanie zamiaru",
        p: "<em>Ho intenzione di…</em> (mam zamiar), <em>vorrei iniziare a…</em> (chciałbym zacząć), <em>sto cercando di…</em> (staram się). Wszystkie łączą się z bezokolicznikiem, ale różnią przyimkiem — to typowe dla włoskiego." },
      { h: "Częstotliwość precyzyjna",
        p: "<em>Tre volte alla settimana</em>, <em>una volta al mese</em>, <em>tutti i giorni</em>, <em>a giorni alterni</em> (co drugi dzień). Przyimek <em>a</em> plus rodzajnik: <em>alla settimana, al mese, all'anno</em>." },
      { tip: "<em>Fare movimento</em> to naturalniejsze niż <em>fare sport</em>, gdy mowa o zwykłej aktywności: spacery, rower, schody." }
    ],
    grammar: {
      title: "Nawyki i zamiary",
      table: {
        head: ["konstrukcja", "przykład", "po polsku"],
        rows: [
          ["ho intenzione di", "Ho intenzione di smettere di fumare.", "Mam zamiar rzucić palenie."],
          ["sto cercando di", "Sto cercando di mangiare meglio.", "Staram się lepiej jeść."],
          ["vorrei iniziare a", "Vorrei iniziare a correre.", "Chciałbym zacząć biegać."],
          ["częstotliwość", "Tre volte alla settimana.", "Trzy razy w tygodniu."],
          ["co drugi dzień", "A giorni alterni.", "Co drugi dzień."],
          ["rezygnacja", "Ho smesso di bere caffè.", "Przestałem pić kawę."]
        ]
      },
      examples: [
        ["Faccio movimento tutti i giorni, anche solo camminando.", "Ruszam się codziennie, choćby tylko chodząc."],
        ["Cerco di dormire almeno sette ore.", "Staram się spać co najmniej siedem godzin."],
        ["Ho ridotto lo zucchero e mi sento meglio.", "Ograniczyłem cukier i czuję się lepiej."],
        ["Vado in palestra due volte alla settimana.", "Chodzę na siłownię dwa razy w tygodniu."],
        ["Ho intenzione di iscrivermi in piscina.", "Mam zamiar zapisać się na basen."],
        ["La dieta mediterranea è molto varia.", "Dieta śródziemnomorska jest bardzo urozmaicona."]
      ]
    },
    vocab: [
      { it: "la vita sana", pl: "zdrowy tryb życia" },
      { it: "fare movimento", pl: "ruszać się" },
      { it: "allenarsi", pl: "trenować" },
      { it: "correre", pl: "biegać" },
      { it: "camminare", pl: "chodzić, spacerować" },
      { it: "iscriversi", pl: "zapisać się" },
      { it: "ridurre", pl: "ograniczyć" },
      { it: "smettere di fumare", pl: "rzucić palenie" },
      { it: "ho intenzione di", pl: "mam zamiar" },
      { it: "sto cercando di", pl: "staram się" },
      { it: "a giorni alterni", pl: "co drugi dzień" },
      { it: "almeno", pl: "przynajmniej" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „Ho intenzione ___ smettere di fumare.”", a: ["di"] },
      { t: "fill", q: "Uzupełnij: „Vorrei iniziare ___ correre.”", a: ["a"] },
      { t: "fill", q: "Uzupełnij: „Vado in palestra tre volte ___ settimana.”", a: ["alla"] },
      { t: "mcq", q: "Co znaczy „a giorni alterni”?",
        opts: ["Codziennie", "Co drugi dzień", "Raz w tygodniu"], a: 1 },
      { t: "mcq", q: "„Dieta” po włosku znaczy przede wszystkim:",
        opts: ["odchudzanie", "sposób odżywiania", "post"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Staram się spać co najmniej siedem godzin.”",
        a: ["cerco di dormire almeno sette ore", "sto cercando di dormire almeno sette ore"] },
      { t: "cloze", q: "Opowiedz o swoich nawykach.",
        text: "Faccio movimento {{1}} giorni alterni e sto {{2}} di ridurre lo zucchero.",
        gaps: [["a"], ["cercando"]],
        pl: "Ruszam się co drugi dzień i staram się ograniczyć cukier." },
      { t: "match", q: "Połącz.",
        pairs: [["allenarsi", "trenować"], ["iscriversi", "zapisać się"], ["ridurre", "ograniczyć"], ["almeno", "przynajmniej"]] },
      { t: "listen", it: "Ho smesso di fumare tre mesi fa e sto molto meglio.", pl: "Rzuciłem palenie trzy miesiące temu i czuję się dużo lepiej." },
      { t: "speak", it: "Vado a correre tre volte alla settimana, la mattina presto.", pl: "Biegam trzy razy w tygodniu, wcześnie rano." }
    ]
  }
  ],
  test: {
    id: "a2-u04-test",
    cefr: "A2", themePl: "Sprawdzian",
    titleIt: "Test — Salute", titlePl: "Sprawdzian jednostki 4",
    objectivesPl: ["sprawdzić mi fa male, słownictwo medyczne i condizionale"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "fill", q: "„Mi ___ male i denti.”", a: ["fanno"] },
      { t: "fill", q: "„Ho mal ___ testa.”", a: ["di"] },
      { t: "mcq", q: "Nagły poważny problem →", opts: ["medico di base", "pronto soccorso", "farmacia"], a: 1 },
      { t: "conj", verb: "dovere", tense: "condizionale", persons: [0, 1, 2] },
      { t: "fill", q: "„___ meglio riposare.” (lepiej byłoby)", a: ["sarebbe"] },
      { t: "fill", q: "„Ho intenzione ___ smettere.”", a: ["di"] },
      { t: "match", q: "Połącz.", pairs: [["la ricetta", "recepta"], ["la tosse", "kaszel"], ["guarire", "wyzdrowieć"], ["a stomaco vuoto", "na czczo"]] },
      { t: "trans", dir: "pl-it", q: "„Boli mnie gardło od dwóch dni.”",
        a: ["mi fa male la gola da due giorni", "ho mal di gola da due giorni"] },
      { t: "listen", it: "Prenda una pastiglia due volte al giorno dopo i pasti.", pl: "Proszę brać jedną tabletkę dwa razy dziennie po posiłkach." },
      { t: "speak", it: "Non mi sento bene, dovrei andare dal medico.", pl: "Źle się czuję, powinienem pójść do lekarza." }
    ]
  }
}

]);
