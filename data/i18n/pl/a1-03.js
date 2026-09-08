/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a1-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a1-u08": { title: "Ludzie wokół nas", grammarNote: "dzierżawcze · opis osoby · stopniowanie" },
  "lesson:a1-u08-l1": {
    theme: "Ludzie i relacje",
    title: "Zaimki dzierżawcze",
    objectives: [
      "użyć mio, tuo, suo z właściwą końcówką",
      "wiedzieć, kiedy rodzajnik znika przed członkiem rodziny",
      "opowiedzieć, kto jest kim w Twoim życiu"
    ],
    theory: [
      {
        h: "Zgodność z rzeczą, nie z właścicielem",
        p: "<em>Il <b>suo</b> libro</em> znaczy „jego książka” albo „jej książka” — końcówka mówi o <b>książce</b>, nie o właścicielu. Włoski nie rozróżnia tu płci posiadacza; jeśli kontekst nie wystarcza, dodaje się <em>di lui</em> albo <em>di lei</em>."
      },
      {
        h: "Rodzajnik jest normą",
        p: "Prawie zawsze mówi się <em><b>il</b> mio libro</em>, <em><b>la</b> mia macchina</em>. To różnica wobec polskiego, gdzie „moja książka” obywa się bez niczego."
      },
      {
        h: "Wyjątek: pojedynczy członek rodziny",
        p: "Bez rodzajnika: <em>mia madre, mio padre, tuo fratello, sua sorella</em>. Ale rodzajnik <b>wraca</b>, gdy: liczba mnoga (<em>i miei genitori</em>), zdrobnienie (<em>la mia sorellina</em>), dodatkowy przymiotnik (<em>la mia sorella maggiore</em>) albo forma <em>loro</em> (<em>la loro madre</em>)."
      },
      {
        trap: "<b>Loro</b> nigdy się nie odmienia i <b>zawsze</b> ma rodzajnik: <em>il loro cane, la loro casa, i loro amici, la loro madre</em>. To jedyna forma dzierżawcza z takim zachowaniem."
      }
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
        { tr: "Moja siostra mieszka w Bari.", note: "bez rodzajnika" },
        { tr: "Moje siostry mieszkają w Bari.", note: "liczba mnoga → rodzajnik wraca" },
        { tr: "Mój szef jest bardzo wymagający." },
        { tr: "Ich dom jest blisko parku.", note: "loro zawsze z rodzajnikiem" },
        { tr: "Jego/jej znajomi są sympatyczni." },
        { tr: "To jej książka, nie jego.", note: "gdy trzeba doprecyzować" }
      ]
    },
    vocab: [
      "matka / ojciec",
      "rodzice",
      "brat / siostra",
      "syn / córka",
      "mąż / żona",
      "partner / partnerka",
      "kolega / koleżanka z pracy",
      "szef",
      "sąsiad",
      "współlokator",
      "najlepszy przyjaciel",
      "wnuk/wnuczka; siostrzeniec"
    ],
    exercises: [
      {
        q: "Co jest poprawne dla „moja mama”?",
        opts: ["la mia madre", "mia madre", "la madre mia"],
        why: "Pojedynczy członek rodziny bez przymiotnika nie bierze rodzajnika."
      },
      {
        q: "A dla „moi rodzice”?",
        opts: ["miei genitori", "i miei genitori", "il mio genitori"],
        why: "W liczbie mnogiej rodzajnik wraca."
      },
      {
        q: "Uzupełnij: „___ loro casa è grande.”",
        why: "Loro zawsze wymaga rodzajnika, także przy członkach rodziny."
      },
      {
        q: "Uzupełnij: „___ mia sorella maggiore.” (moja starsza siostra)",
        why: "Dodatkowy przymiotnik przywraca rodzajnik."
      },
      {
        q: "Wybierz właściwą formę dzierżawczą dla „io”.",
        items: ["książka", "samochód", "rodzice", "siostry"]
      },
      {
        q: "„Il suo libro” — czyja to książka?",
        opts: ["Tylko jego", "Tylko jej", "Jego albo jej — rozstrzyga kontekst"]
      },
      { q: "„Mój szef jest bardzo wymagający.”" },
      {
        q: "Uzupełnij (wstaw rodzajnik albo pozostaw pusty, wpisując kreskę „-”).",
        tr: "Mój brat pracuje z moimi rodzicami."
      },
      { tr: "Moja siostra i jej dzieci mieszkają w Palermo." },
      { tr: "Mój najlepszy przyjaciel nazywa się Paolo." }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Ludzie i relacje",
    title: "Opis wyglądu",
    objectives: [
      "opisać czyjś wygląd",
      "użyć avere i essere we właściwych opisach",
      "zapytać, jak ktoś wygląda"
    ],
    theory: [
      {
        h: "Essere dla całości, avere dla części",
        p: "Wzrost, budowa i ogólne wrażenie idą przez <strong>essere</strong>: <em>è alto, è magra</em>. Konkretne cechy ciała — przez <strong>avere</strong>: <em>ha i capelli neri</em>, <em>ha gli occhi verdi</em>. Zdanie „sono i capelli neri” nie ma sensu."
      },
      {
        h: "Rodzajnik przy częściach ciała",
        p: "Włoski mówi <em>ha <b>i</b> capelli lunghi</em>, nie „ha capelli lunghi”. Po polsku rodzajnika nie ma, więc łatwo go pominąć — a bez niego zdanie brzmi niekompletnie."
      },
      {
        h: "Capelli zawsze w liczbie mnogiej",
        p: "<em>I capelli</em> to włosy jako całość; forma pojedyncza <em>il capello</em> oznacza jeden pojedynczy włos. Podobnie <em>i baffi</em> (wąsy)."
      },
      {
        tip: "Pytanie o wygląd: <em>Com'è?</em> („jaki jest?”). Pytanie o osobowość: <em>Com'è di carattere?</em>. Nie myl z <em>Come sta?</em>, które dotyczy samopoczucia."
      }
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
        { tr: "Jaki jest twój brat? — Wysoki i szczupły." },
        { tr: "Ma długie, proste włosy." },
        { tr: "Ma zielone oczy i nosi okulary." },
        { tr: "To kobieta w średnim wieku." },
        { tr: "Jest podobna do matki." },
        { tr: "Ma ładny uśmiech." }
      ]
    },
    vocab: [
      "wysoki / niski",
      "szczupły / postawny",
      "włosy (zawsze l. mn.)",
      "blond / kasztanowy / czarny",
      "proste / kręcone",
      "oczy",
      "niebieskie / zielone / brązowe",
      "okulary",
      "broda",
      "uśmiech",
      "być podobnym do",
      "średniego wzrostu"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: ["È i capelli neri.", "Ha i capelli neri.", "Sono capelli neri."],
        why: "Cechy ciała opisuje avere, i to z rodzajnikiem."
      },
      {
        q: "Uzupełnij: „Ha ___ occhi azzurri.”",
        why: "Occhi zaczyna się od samogłoski i jest w liczbie mnogiej → gli."
      },
      { q: "Uzupełnij: „Mia sorella ___ alta e magra.”" },
      {
        q: "Co znaczy „Com'è di carattere?”",
        opts: ["Jak się czuje?", "Jaki ma charakter?", "Jak wygląda?"]
      },
      { q: "Połącz.", pairs: ["kręcone włosy", "średniego wzrostu", "nosi okulary", "jest podobny do"] },
      { q: "Uzupełnij opis.", tr: "Mój tata jest wysoki i ma siwe włosy. Nosi okulary." },
      { q: "„Ma długie, kręcone włosy.”" },
      { tr: "Jaka jest twoja siostra? Jest niska i sportowa." },
      { tr: "Ma kasztanowe włosy, zielone oczy i ładny uśmiech." },
      { tr: "Mój brat jest wysoki i ma czarne włosy." }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Ludzie i relacje",
    title: "Charakter i opinie o ludziach",
    objectives: [
      "opisać czyjś charakter",
      "wyrazić opinię o osobie",
      "unikać fałszywego przyjaciela: simpatico ≠ sympatyczny w polskim sensie"
    ],
    theory: [
      {
        h: "Simpatico to nie „miły”, tylko „zabawny, dobry w towarzystwie”",
        p: "<strong>Simpatico</strong> mówi o kimś, z kim dobrze się przebywa: żartuje, wciąga w rozmowę, jest lekki w kontakcie. „Miły” w sensie uprzejmy to raczej <em>gentile</em>. Przeciwieństwo, <em>antipatico</em>, jest znacznie mocniejsze niż polskie „niesympatyczny” — brzmi prawie jak zarzut."
      },
      {
        h: "Opinia z wyrażeniem secondo me",
        p: "<em>Secondo me</em> („moim zdaniem”) to najczęstszy sposób wprowadzania opinii. Uwaga na formę: nie <em>secondo io</em>, tylko <em>secondo me</em> — po tym przyimku idzie zaimek akcentowany."
      },
      {
        h: "Uważaj na pochwały i krytykę",
        p: "Włoski jest hojny w komplementach (<em>bravissimo, gentilissima</em>), ale krytykę osoby zwykle łagodzi: zamiast <em>è antipatico</em> częściej usłyszysz <em>è un po' particolare</em> albo <em>non è il mio tipo</em>."
      },
      {
        contrast: "Fałszywi przyjaciele wobec polskiego: <em>simpatico</em> (zabawny, nie „sympatyczny”), <em>gentile</em> (uprzejmy, nie „delikatny”), <em>bravo</em> (zdolny, nie „brawo!” jako okrzyk)."
      }
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
        { tr: "Mój kolega z pracy jest bardzo zabawny." },
        { tr: "Moim zdaniem to hojna osoba." },
        { tr: "Jest bardzo dobra z matematyki." },
        { tr: "Na początku jest trochę nieśmiały." },
        { tr: "Nie w moim typie, ale jest uprzejmy." },
        { tr: "Lubię go.", note: "dosłownie: „jest mi sympatyczny”" }
      ]
    },
    vocab: [
      "zabawny / nieznośny",
      "uprzejmy",
      "zdolny, dobry w czymś",
      "towarzyski",
      "nieśmiały",
      "hojny",
      "egoistyczny",
      "spokojny",
      "zabawny (o rzeczy lub osobie)",
      "nudny",
      "moim zdaniem",
      "lubię go / ją"
    ],
    exercises: [
      {
        q: "„Simpatico” najbliżej znaczy:",
        opts: ["uprzejmy, grzeczny", "zabawny, dobry w towarzystwie", "delikatny"],
        why: "„Uprzejmy” to gentile. Simpatico mówi o łatwości kontaktu."
      },
      {
        q: "Która forma jest poprawna?",
        opts: ["Secondo io", "Secondo me", "Secondo mio"],
        why: "Po przyimku secondo stoi zaimek akcentowany: me, te, lui, lei."
      },
      { q: "Uzupełnij: „Mia collega è molto ___.” (uprzejma)" },
      {
        q: "„È bravo in matematica” znaczy:",
        opts: ["Brawo za matematykę!", "Jest dobry z matematyki", "Lubi matematykę"]
      },
      {
        q: "Połącz przymiotniki z przeciwieństwami.",
        pairs: ["antipatico", "egoista", "timido", "nervoso"]
      },
      { q: "„Moim zdaniem to spokojna osoba.”" },
      {
        q: "Uzupełnij.",
        tr: "Mój współlokator jest moim zdaniem bardzo towarzyską osobą: rozmawia ze wszystkimi."
      },
      { tr: "Na początku jest trochę nieśmiały." },
      { tr: "Moim zdaniem to hojna i zabawna osoba." },
      { tr: "Mój kolega jest bardzo zabawny, lubię go." }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Gramatyka podstawowa",
    title: "Porównania",
    objectives: [
      "porównać dwie osoby lub rzeczy",
      "wybrać między di a che",
      "użyć nieregularnych form migliore i peggiore"
    ],
    theory: [
      {
        h: "Trzy podstawowe konstrukcje",
        list: [
          "<b>più… di</b> — bardziej niż: <em>Anna è più alta di Marco.</em>",
          "<b>meno… di</b> — mniej niż: <em>Questo è meno caro di quello.</em>",
          "<b>come / quanto</b> — tak samo jak: <em>È alto come te.</em>"
        ]
      },
      {
        h: "Di czy che — reguła praktyczna",
        p: "<strong>Di</strong> gdy porównujesz <b>dwie różne rzeczy pod jednym względem</b>: <em>Roma è più grande di Firenze</em>. <strong>Che</strong> gdy porównujesz <b>dwie cechy tej samej rzeczy</b>, dwa czasowniki albo gdy przed drugim członem stoi przyimek: <em>È più simpatico che intelligente</em>, <em>È più facile parlare che scrivere</em>, <em>Vado più spesso a Roma che a Milano</em>."
      },
      {
        h: "Formy nieregularne",
        p: "<em>buono → migliore</em> (lepszy), <em>cattivo → peggiore</em> (gorszy), <em>grande → maggiore</em>, <em>piccolo → minore</em>. Formy regularne (<em>più buono, più cattivo</em>) też istnieją i są używane, zwłaszcza o smaku: <em>questa pizza è più buona</em>."
      },
      {
        trap: "Po <b>di</b> stoi zaimek akcentowany: <em>più alto di <b>me</b></em>, nie „di io”. Po <b>come</b> tak samo: <em>come te</em>."
      }
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
        { tr: "Mediolan jest droższy od Bolonii." },
        { tr: "Mój brat jest mniej cierpliwy ode mnie." },
        { tr: "To wino jest lepsze od tamtego." },
        { tr: "To najgorszy dzień tygodnia." },
        { tr: "Pracuję częściej w Rzymie niż w Mediolanie." },
        { tr: "Jesteś uprzejmy jak twoja mama." }
      ]
    },
    vocab: [
      "bardziej… niż",
      "mniej… niż",
      "tak jak",
      "lepszy / gorszy",
      "naj… z",
      "cierpliwy",
      "szybki / powolny",
      "łatwy / trudny",
      "młody / starszy",
      "taki sam",
      "inny niż",
      "przede wszystkim"
    ],
    exercises: [
      {
        q: "„Anna è più alta ___ Marco.”",
        opts: ["che", "di", "come"],
        why: "Dwie różne osoby porównywane pod jednym względem → di."
      },
      {
        q: "„È più simpatico ___ bello.”",
        opts: ["di", "che", "come"],
        why: "Dwie cechy tej samej osoby → che."
      },
      {
        q: "Uzupełnij: „Sei più alto ___ me.”",
        why: "Po di stoi zaimek akcentowany: di me, di te, di lui."
      },
      { q: "Podaj nieregularny stopień wyższy od „buono”: ___" },
      {
        q: "„È il più bravo della classe” znaczy:",
        opts: ["Jest lepszy od klasy", "Jest najlepszy w klasie", "Jest tak dobry jak klasa"]
      },
      { q: "„Mediolan jest droższy od Bolonii.”" },
      {
        q: "Uzupełnij di albo che.",
        tr: "Rzym jest większy od Florencji, ale łatwiej mówić niż pisać po włosku."
      },
      { tr: "To wino jest lepsze od tamtego." },
      { tr: "Mój brat jest mniej cierpliwy ode mnie." },
      { tr: "To miasto jest spokojniejsze niż Mediolan." }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 8",
    objectives: ["sprawdzić dzierżawcze, opis osoby i porównania"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„moja mama” to:", opts: ["la mia madre", "mia madre", "mia la madre"] },
      { q: "„___ miei genitori abitano a Lodz.”" },
      { q: "„___ loro casa è nuova.”" },
      { q: "Poprawne zdanie:", opts: ["È i capelli neri.", "Ha i capelli neri.", "Ha capelli neri."] },
      { q: "„Ha ___ occhi verdi.”" },
      { q: "„Simpatico” znaczy:", opts: ["uprzejmy", "zabawny, dobry w kontakcie", "delikatny"] },
      { q: "„È più alta ___ me.”", opts: ["che", "di", "come"] },
      { q: "Stopień wyższy od „cattivo”: ___" },
      { tr: "Moja siostra jest młodsza ode mnie i ma kręcone włosy." },
      { tr: "Moim zdaniem to bardzo uprzejma osoba." }
    ]
  },
  "unit:a1-u09": { title: "Czas wolny", grammarNote: "fare/giocare/suonare · pogoda · stare + gerundio" },
  "lesson:a1-u09-l1": {
    theme: "Czas wolny",
    title: "Zainteresowania i propozycje",
    objectives: [
      "opowiedzieć, co robisz w wolnym czasie",
      "odróżnić fare, giocare i suonare",
      "zaproponować wspólne wyjście i odpowiedzieć na propozycję"
    ],
    theory: [
      {
        h: "Trzy czasowniki, trzy różne obszary",
        list: [
          "<b>fare</b> + sport indywidualny lub czynność: <em>faccio yoga, faccio una passeggiata, faccio nuoto</em>",
          "<b>giocare a</b> + gra lub sport zespołowy: <em>gioco a calcio, gioco a carte, gioco a tennis</em>",
          "<b>suonare</b> + instrument: <em>suono la chitarra, suono il pianoforte</em>"
        ]
      },
      {
        trap: "Polskie „grać” obsługuje wszystko: grać w piłkę, grać na gitarze, grać w karty. Włoski rozdziela to na <em>giocare</em> (gra) i <em>suonare</em> (instrument). „Gioco la chitarra” brzmi jak zdanie z tłumacza maszynowego."
      },
      {
        h: "Propozycje",
        p: "Najczęstsze formuły: <em>Ti va di…?</em> („masz ochotę…?”), <em>Che ne dici di…?</em> („co powiesz na…?”), <em>Andiamo a…?</em>. Odpowiedzi: <em>Volentieri!</em>, <em>Perché no?</em>, <em>Mi dispiace, non posso</em>."
      },
      {
        tip: "<em>Ti va</em> jest bezosobowe jak <em>mi piace</em>: <em>ti va un caffè?</em> („masz ochotę na kawę?”). Konstrukcja z rzeczą jako podmiotem."
      }
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
        { tr: "W weekend chodzę na spacer po centrum." },
        { tr: "Gram w tenisa z siostrą." },
        { tr: "Gram na gitarze, ale kiepsko." },
        { tr: "Masz ochotę pójść dziś do kina?" },
        { tr: "Chętnie! O której?" },
        { tr: "Przykro mi, dziś wieczorem nie mogę." }
      ]
    },
    vocab: [
      "czas wolny",
      "uprawiać sport",
      "siłownia",
      "basen",
      "grać w piłkę",
      "grać na gitarze",
      "tańczyć",
      "czytać książkę",
      "oglądać serial",
      "masz ochotę…?",
      "chętnie",
      "może innym razem"
    ],
    exercises: [
      {
        q: "„___ la chitarra.” (gram na gitarze)",
        opts: ["Gioco", "Suono", "Faccio"],
        why: "Instrument bierze suonare, nigdy giocare."
      },
      { q: "„___ a calcio.” (gram w piłkę)", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "Uzupełnij: „___ yoga due volte a settimana.” (uprawiam jogę)" },
      { q: "Uzupełnij: „___ va di andare al cinema?” (masz ochotę)" },
      {
        q: "Połącz czasownik z uzupełnieniem.",
        pairs: ["carte", "il pianoforte", "una passeggiata", "piscina"]
      },
      { q: "„Masz ochotę pójść dziś wieczorem do kina?”" },
      { q: "Uzupełnij.", tr: "W soboty gram w tenisa, w niedziele gram na gitarze i chodzę na spacer." },
      {
        q: "Kolega proponuje wyjście.",
        setting: "Czwartek wieczorem, wiadomość głosowa od znajomego.",
        lines: [
          { tr: "Cześć! Masz ochotę iść na koncert w sobotę?" },
          { tr: "Zgódź się z entuzjazmem i zapytaj o godzinę.", answerTr: "Chętnie! O której?" },
          { tr: "O dziewiątej, ale spotykamy się o wpół do dziewiątej na placu." },
          { tr: "Potwierdź i pożegnaj się.", answerTr: "Świetnie, widzimy się tam!" }
        ]
      },
      { tr: "W wolnym czasie chodzę na siłownię i oglądam seriale." },
      { tr: "Masz ochotę na spacer po centrum?" }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Czas wolny",
    title: "Pogoda i pory roku",
    objectives: ["opisać pogodę", "użyć fare bezosobowo", "połączyć pogodę z planami"],
    theory: [
      {
        h: "Pogodę robi się, a nie jest",
        p: "Włoski mówi <em>fa caldo</em> („robi gorąco”), <em>fa freddo</em>, <em>fa bel tempo</em>. To użycie <strong>bezosobowe</strong> czasownika <em>fare</em>: nie ma podmiotu, forma zawsze w trzeciej osobie liczby pojedynczej."
      },
      {
        h: "Trzy różne konstrukcje",
        list: [
          "<b>fare</b> + rzeczownik: <em>fa caldo, fa freddo, fa bel/brutto tempo</em>",
          "<b>c'è</b> + rzeczownik: <em>c'è il sole, c'è vento, c'è nebbia</em>",
          "czasownik osobny: <em>piove</em> (pada deszcz), <em>nevica</em> (pada śnieg)"
        ]
      },
      {
        trap: "„Sono caldo” znaczy „jestem gorący” w sensie temperatury ciała albo, w potocznym użyciu, coś zupełnie innego. O pogodzie mówi się <em>fa caldo</em>, a o sobie <em>ho caldo</em>."
      },
      {
        h: "Pory roku",
        p: "<em>in primavera, in estate, in autunno, in inverno</em>. Miesiące bez rodzajnika po <em>a</em> lub <em>in</em>: <em>a gennaio</em>, <em>in luglio</em> — obie formy są poprawne."
      }
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
        { tr: "Dziś jest gorąco, jedziemy nad morze." },
        { tr: "Zimą w Mediolanie często jest mgła." },
        { tr: "Jutro pada, zostajemy w domu." },
        { tr: "Jaka pogoda w Rzymie? — Przepiękna!" },
        { tr: "Zimno mi, zamknij okno.", note: "o sobie: avere" },
        { tr: "Wiosna to najlepsza pora roku." }
      ]
    },
    vocab: [
      "jaka jest pogoda?",
      "jest gorąco / zimno",
      "jest słońce",
      "pada deszcz / śnieg",
      "wieje / jest mgła",
      "deszcz / śnieg",
      "chmury",
      "stopień",
      "wiosna / lato",
      "jesień / zima",
      "parasol",
      "prognoza pogody"
    ],
    exercises: [
      {
        q: "Jak powiesz „jest gorąco” (o pogodzie)?",
        opts: ["Sono caldo", "Fa caldo", "Ho caldo"],
        why: "„Ho caldo” znaczy „mnie jest gorąco”; o pogodzie mówi się fa caldo."
      },
      { q: "Uzupełnij: „___ il sole.” (jest słońce)" },
      { q: "Uzupełnij: „Domani ___.” (jutro pada deszcz)" },
      { q: "„Ho freddo” znaczy:", opts: ["Jest zimno na dworze", "Jest mi zimno", "Robi się zimno"] },
      { q: "Połącz.", pairs: ["pada śnieg", "jest mgła", "brzydka pogoda", "parasol"] },
      { q: "Uzupełnij prognozę.", tr: "Jutro będzie zimno, będzie wiać, a po południu pada deszcz." },
      { q: "„Jaka jest pogoda w Rzymie?”" },
      { tr: "Zimą w Mediolanie często jest mgła." },
      { tr: "Dziś jest ładna pogoda, jest dwadzieścia pięć stopni." },
      { tr: "Jaka jest dziś pogoda? Zimno i pada." }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Gramatyka podstawowa",
    title: "Stare + gerundio",
    objectives: [
      "opisać czynność trwającą w tej chwili",
      "utworzyć gerundio",
      "wiedzieć, kiedy tej konstrukcji NIE używać"
    ],
    theory: [
      {
        h: "Czynność właśnie teraz",
        p: "<strong>Stare + gerundio</strong> podkreśla, że coś dzieje się <b>w tym momencie</b>: <em>Sto lavorando</em> („właśnie pracuję”). Zwykłe <em>lavoro</em> też jest poprawne, ale mówi ogólnie: „pracuję (mam pracę, pracuję zwykle)”."
      },
      {
        h: "Tworzenie gerundio",
        list: [
          "<b>-are → -ando</b>: parlare → parl<b>ando</b>",
          "<b>-ere → -endo</b>: prendere → prend<b>endo</b>",
          "<b>-ire → -endo</b>: dormire → dorm<b>endo</b>",
          "nieregularne: <em>fare → facendo, dire → dicendo, bere → bevendo</em>"
        ]
      },
      {
        trap: "W przeciwieństwie do angielskiego, <b>stare + gerundio nie służy do mówienia o przyszłości</b>. „Jutro spotykam się z Anną” to <em>domani vedo Anna</em>, nigdy „sto vedendo Anna domani”."
      },
      {
        h: "Zaimki przy tej konstrukcji",
        p: "Zaimek może stać przed <em>stare</em> albo doczepić się do gerundio: <em><b>ti</b> sto aspettando</em> = <em>sto aspettando<b>ti</b></em>. Pierwsza wersja jest częstsza w mowie."
      }
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
        { tr: "Co robisz? — Uczę się." },
        { tr: "Nie mogę rozmawiać, prowadzę." },
        { tr: "Już jadą, poczekaj pięć minut." },
        { tr: "Czekam na ciebie przed barem." },
        { tr: "Zaraz wychodzę.", note: "stare per = zaraz coś zrobić" },
        { tr: "Jutro jadę do Rzymu.", note: "przyszłość: zwykły czas teraźniejszy" }
      ]
    },
    vocab: [
      "właśnie coś robić",
      "zaraz coś zrobić",
      "teraz",
      "w tej chwili",
      "czekać",
      "prowadzić (auto)",
      "żartować",
      "przyjeżdżać, przychodzić",
      "wychodzić",
      "pospieszyć się",
      "chwileczkę",
      "jestem spóźniony"
    ],
    exercises: [
      { q: "„Sto mangiando” znaczy:", opts: ["Jem zwykle", "Właśnie jem", "Będę jadł"] },
      { q: "Utwórz gerundio od „fare”: ___" },
      { q: "Utwórz gerundio od „dormire”: ___" },
      { q: "Uzupełnij: „Loro ___ arrivando.”" },
      {
        q: "Jak powiesz „jutro spotykam się z Anną”?",
        opts: ["Sto vedendo Anna domani", "Domani vedo Anna", "Sto per vedere Anna domani"],
        why: "Stare + gerundio nie służy do wyrażania przyszłości — inaczej niż w angielskim."
      },
      { q: "„Nie mogę rozmawiać, prowadzę.”" },
      { q: "Uzupełnij rozmowę telefoniczną.", tr: "— Co robisz? — Wychodzę z domu, zaraz będę." },
      { tr: "Czekam na ciebie przed barem." },
      { tr: "Wybacz, zaraz wchodzę na spotkanie." },
      { tr: "Co robisz? — Uczę się włoskiego." }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Czas wolny",
    title: "Kultura, kino i muzyka",
    objectives: [
      "kupić bilet i porozmawiać o filmie",
      "wyrazić opinię o książce, filmie, koncercie",
      "użyć podstawowych zwrotów oceniających"
    ],
    theory: [
      {
        h: "Ocena: mi è piaciuto",
        p: "O rzeczy, która się podobała, mówi się <em>mi è piaciuto</em> (rodzaj męski) albo <em>mi è piaciuta</em> (żeński). To już czas przeszły z <em>piacere</em> — pełne wyjaśnienie na poziomie A2, ale zwrot jest tak częsty, że warto go znać od razu."
      },
      {
        h: "Wersja oryginalna",
        p: "We Włoszech filmy tradycyjnie są dubbingowane. Seans z napisami oznaczany jest jako <strong>V.O.</strong> (versione originale) albo <em>sottotitolato</em>. W dużych miastach takie seanse są, ale trzeba ich szukać."
      },
      {
        h: "Bilety",
        p: "<em>Un biglietto intero</em> (normalny), <em>ridotto</em> (ulgowy). Rezerwacja miejsca jest standardem: <em>Che posto preferisce?</em>"
      },
      {
        tip: "Słowo <em>spettacolo</em> oznacza zarówno seans filmowy, jak i przedstawienie teatralne. <em>Lo spettacolo delle 21</em> to seans o 21."
      }
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
        { tr: "Wczoraj wieczorem byłam w kinie." },
        { tr: "Film był w wersji oryginalnej." },
        { tr: "Bardzo podobała mi się ścieżka dźwiękowa." },
        { tr: "Dwa bilety ulgowe poproszę." },
        { tr: "Jaki gatunek wolisz?" },
        { tr: "Naprawdę ci to polecam." }
      ]
    },
    vocab: [
      "film",
      "seans, przedstawienie",
      "bilet normalny / ulgowy",
      "wersja oryginalna",
      "napisy",
      "reżyser",
      "aktor / aktorka",
      "ścieżka dźwiękowa",
      "koncert",
      "wystawa",
      "polecać",
      "jak było?"
    ],
    culture: {
      title: "Okiem Włocha: kino i dubbing",
      text: "<p>Włochy mają jedną z najsilniejszych szkół dubbingu na świecie. Aktorzy dubbingowi (<i>doppiatori</i>) są rozpoznawalni, a niektórzy przez dekady „użyczali głosu” tej samej gwieździe.</p><p>Skutek uboczny: Włosi statystycznie słabiej rozumieją angielski ze słuchu niż Skandynawowie, którzy oglądają z napisami. To zmienia się wraz z platformami streamingowymi.</p><p>Jeśli uczysz się włoskiego, dubbing jest Twoim sprzymierzeńcem: znany film po włosku to gotowy materiał do słuchania z przewidywalną fabułą.</p>"
    },
    exercises: [
      {
        q: "Co oznacza „V.O.” przy seansie?",
        opts: ["Wersja skrócona", "Wersja oryginalna, zwykle z napisami", "Wersja dla dzieci"]
      },
      { q: "Uzupełnij: „Mi è ___ molto il film.” (bardzo mi się podobał)" },
      { q: "Uzupełnij: „Due biglietti ___, per favore.” (ulgowe)" },
      { q: "Połącz.", pairs: ["reżyser", "ścieżka dźwiękowa", "napisy", "wystawa"] },
      { q: "„Bardzo mi się podobało, polecam ci.”" },
      {
        q: "„Lo spettacolo delle nove” to:",
        opts: ["Dziewiąte przedstawienie", "Seans o dziewiątej", "Dziewięć biletów"]
      },
      {
        q: "Uzupełnij rozmowę przy kasie.",
        tr: "— Dwa bilety na seans o dziewiątej. — Normalne czy ulgowe? — Jeden normalny i jeden ulgowy."
      },
      { tr: "Jaki gatunek filmów wolisz?" },
      { tr: "Koncert bardzo mi się podobał, zwłaszcza druga część." },
      { tr: "Masz ochotę pójść w niedzielę na wystawę?" }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 9",
    objectives: ["sprawdzić fare/giocare/suonare, pogodę i stare + gerundio"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„___ la chitarra.”", opts: ["Gioco", "Suono", "Faccio"] },
      { q: "„___ a carte.”", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "„___ caldo oggi.” (jest gorąco)" },
      { q: "„___ il sole.”" },
      { q: "Gerundio od „bere”: ___" },
      { q: "„Loro ___ arrivando.”" },
      {
        q: "„Jutro jadę do Rzymu”:",
        opts: ["Sto andando a Roma domani", "Domani vado a Roma", "Sto per Roma domani"]
      },
      { tr: "Masz ochotę na spacer?" },
      { tr: "Właśnie wychodzę, jest zimno, biorę parasol." },
      { tr: "W weekend gram w tenisa i chodzę na spacer." }
    ]
  },
  "unit:a1-u10": {
    title: "Spojrzenie wstecz",
    grammarNote: "passato prossimo · pierwsze opowiadanie · powtórka A1"
  },
  "lesson:a1-u10-l1": {
    theme: "Przeszłość",
    title: "Passato prossimo z avere",
    objectives: [
      "zbudować czas przeszły z avere",
      "utworzyć regularny imiesłów przeszły",
      "opowiedzieć, co robiłeś wczoraj"
    ],
    theory: [
      {
        h: "Czas złożony z dwóch elementów",
        p: "<strong>Passato prossimo</strong> = <em>avere</em> lub <em>essere</em> w czasie teraźniejszym + <b>imiesłów przeszły</b>. To najczęstszy włoski czas przeszły w rozmowie i odpowiada polskiemu „zjadłem”, „widziałem”, „powiedziałem”."
      },
      {
        h: "Imiesłów regularny",
        list: [
          "<b>-are → -ato</b>: parlare → parl<b>ato</b>",
          "<b>-ere → -uto</b>: credere → cred<b>uto</b>",
          "<b>-ire → -ito</b>: finire → fin<b>ito</b>"
        ]
      },
      {
        h: "Większość czasowników bierze avere",
        p: "Wszystkie czasowniki <b>przechodnie</b> (te, po których może stać dopełnienie: „zjadłem <i>coś</i>”, „widziałem <i>kogoś</i>”) tworzą passato prossimo z <em>avere</em>. Imiesłów wtedy <b>się nie zmienia</b>: <em>Anna ha mangiato</em>, nie „ha mangiata”."
      },
      {
        h: "Częste imiesłowy nieregularne",
        p: "Trzeba je zapamiętać, bo należą do najczęstszych czasowników: <em>fare → fatto</em>, <em>dire → detto</em>, <em>vedere → visto</em>, <em>prendere → preso</em>, <em>leggere → letto</em>, <em>scrivere → scritto</em>, <em>bere → bevuto</em>, <em>aprire → aperto</em>, <em>chiudere → chiuso</em>."
      }
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
        { tr: "Wczoraj zjadłem przepyszną pizzę." },
        { tr: "Widziałeś wczorajszy film?" },
        { tr: "Zarezerwowaliśmy stolik na ósmą." },
        { tr: "Nie zrozumiałem, możesz powtórzyć?" },
        { tr: "Co robiliście w weekend?" },
        { tr: "Już zapłaciłem.", note: "„già” wchodzi między avere a imiesłów" }
      ]
    },
    vocab: [
      "wczoraj",
      "przedwczoraj",
      "w zeszłym tygodniu",
      "w zeszłym miesiącu",
      "dwa dni temu",
      "już",
      "jeszcze nie",
      "potem",
      "najpierw, wcześniej",
      "robić → zrobiony",
      "widzieć → widziany",
      "mówić → powiedziany"
    ],
    exercises: [
      {
        q: "Z czego składa się passato prossimo?",
        opts: [
          "Z dwóch czasowników w czasie teraźniejszym",
          "Z avere/essere + imiesłów przeszły",
          "Z essere + bezokolicznik"
        ]
      },
      { q: "Imiesłów od „parlare”: ___" },
      { q: "Imiesłów od „credere”: ___" },
      { q: "Imiesłów od „finire”: ___" },
      { q: "Uzupełnij: „Ieri ___ una pizza.” (zjadłem)" },
      { q: "Połącz czasownik z nieregularnym imiesłowem.", pairs: ["fatto", "visto", "scritto", "preso"] },
      {
        q: "Uzupełnij opowieść o weekendzie.",
        tr: "W sobotę obejrzałem film, a potem zjadłem na mieście. W niedzielę nie robiłem nic."
      },
      { q: "„Nie zrozumiałem, możesz powtórzyć?”" },
      { tr: "W zeszłym tygodniu zwiedziliśmy Florencję." },
      { tr: "Wczoraj wieczorem przeczytałem bardzo ciekawą książkę." }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "Przeszłość",
    title: "Passato prossimo z essere",
    objectives: [
      "rozpoznać czasowniki wymagające essere",
      "dopasować imiesłów do podmiotu",
      "opowiedzieć o podróży"
    ],
    theory: [
      {
        h: "Mniejsza grupa, ale bardzo częsta",
        p: "Czasowniki <b>ruchu i zmiany stanu</b> tworzą passato prossimo z <strong>essere</strong>: <em>andare, venire, arrivare, partire, uscire, entrare, tornare, salire, scendere, restare, rimanere, nascere, morire, diventare, essere, stare</em>. Do tego wszystkie czasowniki zwrotne."
      },
      {
        h: "Imiesłów zgadza się z podmiotem",
        p: "To kluczowa różnica: z <em>essere</em> imiesłów zachowuje się jak przymiotnik. <em>Sono andat<b>o</b></em> (mężczyzna), <em>sono andat<b>a</b></em> (kobieta), <em>siamo andat<b>i</b></em> (grupa męska lub mieszana), <em>sono andat<b>e</b></em> (same kobiety)."
      },
      {
        h: "Jak zapamiętać, który czasownik bierze essere",
        p: "Test praktyczny: jeśli czasownik <b>nie może mieć dopełnienia bliższego</b> („poszedłem <i>co?</i>” nie ma sensu), prawdopodobnie bierze essere. Nie jest to reguła stuprocentowa (<em>dormire</em> bierze avere), ale w większości przypadków działa."
      },
      {
        trap: "Kilka czasowników zmienia posiłkowy razem ze znaczeniem: <em>ho finito il lavoro</em> (skończyłem pracę — przechodni, avere) kontra <em>il film è finito</em> (film się skończył — nieprzechodni, essere). To samo z <em>cambiare, passare, cominciare</em>."
      }
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
        { tr: "Wyjechałam o siódmej rano." },
        { tr: "Przyjechaliśmy spóźnieni." },
        { tr: "Marco urodził się w 1990." },
        { tr: "Bardzo dobrze się bawiliśmy." },
        { tr: "Film skończył się o jedenastej." },
        { tr: "Skończyłem pracę o szóstej.", note: "przechodni → avere" }
      ]
    },
    vocab: [
      "iść → poszedł",
      "przyjść → przyszedł",
      "przyjechać",
      "wyjechać",
      "wrócić",
      "wyjść",
      "wejść",
      "urodzić się",
      "zostać",
      "stać się",
      "bawić się",
      "podróż"
    ],
    exercises: [
      {
        q: "Co jest szczególnego w imiesłowie z essere?",
        opts: ["Nigdy się nie zmienia", "Zgadza się z podmiotem jak przymiotnik", "Zawsze kończy się na -o"]
      },
      { q: "Kobieta mówi „wyjechałam”:", opts: ["sono partito", "sono partita", "ho partito"] },
      { q: "Uzupełnij dla grupy kobiet: „Loro sono ___ ieri.” (przyjechały)" },
      { q: "Imiesłów od „nascere” (r. męski): ___" },
      {
        q: "Które czasowniki tworzą passato prossimo z essere?",
        opts: ["andare", "mangiare", "partire", "vedere", "nascere"]
      },
      {
        q: "„Il film ___ alle undici.” (skończył się)",
        opts: ["ha finito", "è finito", "sono finito"],
        why: "Tu „finire” jest nieprzechodni (film sam się skończył) → essere."
      },
      {
        q: "Uzupełnij relację z podróży (mówi kobieta).",
        tr: "Wyjechałam w piątek i przyjechałam do Neapolu wieczorem. Bardzo dobrze się bawiłam."
      },
      { tr: "Przyjechaliśmy spóźnieni." },
      { tr: "Urodziłam się w Warszawie, ale wychowałam się w Krakowie." },
      { tr: "Wczoraj poszłam do kina z koleżanką." }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "Przeszłość",
    title: "Opowiadanie o przeszłości",
    objectives: [
      "połączyć zdania w krótkie opowiadanie",
      "użyć wyrażeń czasowych porządkujących relację",
      "zadać pytania o czyjś weekend"
    ],
    theory: [
      {
        h: "Opowiadanie potrzebuje szkieletu czasowego",
        p: "Same czasowniki nie tworzą relacji. Potrzebne są łączniki: <em>prima</em> (najpierw), <em>poi</em> (potem), <em>dopo</em> (po tym), <em>alla fine</em> (na koniec), <em>mentre</em> (podczas gdy). Bez nich zdania stoją obok siebie jak lista."
      },
      {
        h: "Pytania o przeszłość",
        p: "<em>Che cosa hai fatto?</em>, <em>Dove sei andato/a?</em>, <em>Con chi sei uscito/a?</em>, <em>Com'è andata?</em> („jak poszło?”). To ostatnie jest bardzo częste jako otwarcie rozmowy."
      },
      {
        h: "Già i ancora wchodzą do środka",
        p: "Przysłówki <em>già</em> (już), <em>ancora</em> (jeszcze), <em>appena</em> (dopiero co), <em>mai</em> (nigdy) stają <b>między posiłkowym a imiesłowem</b>: <em>ho <b>già</b> mangiato</em>, <em>non sono <b>mai</b> stata a Venezia</em>."
      },
      {
        tip: "Naturalny sposób na odpowiedź: nie wyliczaj wszystkiego. Włoch odpowie krótko (<em>Niente di che, sono stato a casa</em>) i dopiero pytany rozwinie."
      }
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
        { tr: "W sobotę rano zrobiłem zakupy na targu." },
        { tr: "Potem poszłam na siłownię." },
        { tr: "Wieczorem wyszliśmy ze znajomymi." },
        { tr: "W końcu wróciliśmy do domu późno." },
        { tr: "Jak poszło zebranie? — Nieźle." },
        { tr: "Jeszcze nie skończyłem." }
      ]
    },
    vocab: [
      "najpierw",
      "potem",
      "po tym",
      "na koniec",
      "podczas gdy",
      "jak poszło?",
      "nic szczególnego",
      "katastrofa",
      "było fajnie",
      "robić zakupy spożywcze",
      "robić zakupy (ubrania)",
      "odpoczywać"
    ],
    exercises: [
      {
        q: "Gdzie stoi „già” w passato prossimo?",
        opts: ["Przed avere", "Między avere a imiesłowem", "Na końcu zdania"],
        why: "Ho già mangiato — przysłówek wchodzi do środka."
      },
      { q: "Uzupełnij: „Non sono ___ stata a Venezia.” (nigdy)" },
      { q: "Uzupełnij: „___ ho lavorato, poi sono uscito.” (najpierw)" },
      {
        q: "„Com'è andata?” to pytanie o:",
        opts: ["kierunek podróży", "przebieg czegoś, co się wydarzyło", "samopoczucie teraz"]
      },
      {
        q: "Uzupełnij relację.",
        tr: "W sobotę zrobiłam zakupy, potem poszłam na siłownię, a wieczorem wyszliśmy ze znajomymi."
      },
      { q: "„Jeszcze nie skończyłem.”" },
      { tr: "W końcu wróciliśmy do domu późno." },
      {
        q: "Poniedziałek rano w pracy.",
        setting: "Kuchnia biurowa, ekspres do kawy.",
        lines: [
          { tr: "Cześć! Jak minął weekend?" },
          { tr: "Powiedz, że nic szczególnego, byłeś w domu.", answerTr: "Nic szczególnego, byłem w domu." },
          { tr: "A ja pojechałem w góry. Przepięknie!" },
          { tr: "Zapytaj, z kim pojechał.", answerTr: "Z kim pojechałeś?" }
        ]
      },
      { tr: "Najpierw zrobiłam zakupy, potem odpoczęłam." },
      { tr: "Jak poszło? — Dobrze, było fajnie." }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Powtórka",
    title: "Powtórka całego poziomu",
    objectives: [
      "połączyć wszystko, czego uczyłeś się na A1",
      "sprawdzić, czy jesteś gotowy na poziom A2",
      "wyłapać własne luki"
    ],
    theory: [
      {
        h: "Co powinieneś już umieć",
        list: [
          "przedstawić się, powiedzieć skąd jesteś, czym się zajmujesz i ile masz lat",
          "zamówić w barze i restauracji, zrobić zakupy, zapytać o cenę",
          "opowiedzieć o swoim dniu, godzinach i zwyczajach",
          "zapytać o drogę i zrozumieć wskazówki",
          "opisać osobę: wygląd i charakter",
          "opowiedzieć krótko, co robiłeś wczoraj i w weekend"
        ]
      },
      {
        h: "Gramatyka, która musi siedzieć",
        p: "Trzy koniugacje w czasie teraźniejszym, <em>essere</em>, <em>avere</em>, <em>fare</em>, <em>andare</em>, <em>venire</em>, <em>stare</em>, czasowniki modalne, rodzajniki określone i nieokreślone, rodzaj i liczba, przymiotniki, przyimki ściągnięte, czasowniki zwrotne, <em>piacere</em>, <em>c'è / ci sono</em> oraz podstawy passato prossimo."
      },
      {
        h: "Co czeka na A2",
        p: "Imperfetto i różnica wobec passato prossimo, futuro semplice, tryb warunkowy, zaimki dopełnienia bliższego i dalszego, tryb rozkazujący w pełnej wersji, <em>ci</em> i <em>ne</em> w szerszym zakresie, sytuacje w podróży, u lekarza i w hotelu."
      },
      {
        tip: "Jeśli w tej powtórce zrobisz mniej niż 70%, nie idź dalej. Poziom A2 buduje bezpośrednio na tych strukturach i luki z A1 zamienią się tam w blokadę."
      }
    ],
    vocab: [
      "powtarzać",
      "ćwiczenie",
      "błąd",
      "reguła",
      "poziom",
      "poprawiać się",
      "jestem gotowy/a",
      "dam radę"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Rodzajniki określone:", items: [, , , , ] },
      {
        q: "Uzupełnij autoprezentację.",
        tr: "Nazywam się Kasia, jestem Polką i mieszkam w Bolonii od dwóch lat. Jestem nauczycielką."
      },
      { q: "„Mi ___ gli spaghetti.” (lubię spaghetti)" },
      { q: "„Vado ___ cinema.” (a + il)" },
      { q: "„Ieri ___ una pizza.” (zjadłam)" },
      { q: "„Ieri ___ al cinema.” (poszłam — kobieta)" },
      { tr: "Wczoraj wieczorem poszliśmy do restauracji z przyjaciółmi." },
      { tr: "Obudziłam się wcześnie i zjadłam śniadanie w barze." },
      { tr: "Nazywam się Anna, jestem Polką i mieszkam we Florencji od roku." }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Egzamin",
    title: "Egzamin końcowy poziomu A1",
    objectives: ["sprawdzić gotowość do przejścia na poziom A2"],
    theory: [
      {
        p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%. Wynik poniżej progu oznacza, że warto wrócić do jednostek, w których się mylisz — nie do wszystkich."
      }
    ],
    exercises: [
      {  },
      { q: "Wchodzisz do sklepu o 18:00:", opts: ["Buongiorno", "Buonasera", "Buonanotte"] },
      { q: "Rodzajniki:", items: [, , , ] },
      { q: "„Non mi ___ il pesce crudo.”" },
      { q: "„Devo ___ presto domani.” (wstać — alzarsi)" },
      { q: "„___ le tre e mezza.”" },
      { q: "„Abito ___ Italia.”" },
      { q: "„___ un tavolo libero?”" },
      { q: "„È più simpatico ___ bello.”", opts: ["di", "che", "come"] },
      { q: "„Ieri ___ al cinema.” (poszliśmy)" },
      {
        q: "Uzupełnij.",
        tr: "W sobotę zrobiłam zakupy, potem poszłam na siłownię, a wieczorem wyszłam ze znajomymi."
      },
      { tr: "Dzień dobry, chciałbym zarezerwować stolik dla dwóch osób na ósmą." }
    ]
  }
});
