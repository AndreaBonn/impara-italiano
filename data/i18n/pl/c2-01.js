/* ============================================================
   Teksty w języku ucznia (pl) do data/core/c2-01.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c2-u01": {
    title: "Imiesłowy i peryfrazy",
    grammarNote: "participio presente i passato · perifrasi verbali · formy implicite"
  },
  "lesson:c2-u01-l1": {
    theme: "Gramatyka najwyższego poziomu",
    title: "Imiesłów czynny: trzy życia",
    objectives: [
      "odróżnić użycie przymiotnikowe, rzeczownikowe i czasownikowe",
      "rozpoznać participio presente w tekstach prawnych",
      "uniknąć nadużywania go w mowie"
    ],
    theory: [
      {
        h: "Forma prawie martwa jako czasownik, żywa jako słowo",
        p: "Imiesłów czynny na <em>-ante / -ente</em> stracił we współczesnym włoskim funkcję czasownikową, ale zostawił po sobie setki przymiotników i rzeczowników: <em>brillante, interessante, insegnante, cantante, dirigente, presidente, studente</em>. Wszystkie to dawne imiesłowy."
      },
      {
        h: "Użycie czasownikowe: prawo i administracja",
        p: "<em>Il denaro <b>derivante</b> dalle offerte sarà investito.</em> Tu <em>derivante</em> zastępuje zdanie względne <em>che deriva</em>. Konstrukcja żyje w tekstach prawnych, technicznych i naukowych; poza nimi brzmi sztucznie."
      },
      {
        h: "Jak to czytać",
        p: "Napotykając <em>-ante/-ente</em> w tekście prawnym, przekładaj je odruchowo na zdanie względne: <em>i soggetti <b>richiedenti</b></em> = <em>i soggetti che richiedono</em>. To najszybszy sposób rozszyfrowania długiego zdania urzędowego."
      },
      {
        trap: "Nie każde słowo na <em>-ente</em> jest imiesłowem. <em>Paziente</em>, <em>presente</em>, <em>parente</em> to dziś samodzielne rzeczowniki lub przymiotniki, których nie da się rozłożyć na zdanie względne."
      }
    ],
    grammar: {
      title: "Participio presente",
      table: {
        head: ["forma", "użycie", "przykład"],
        rows: [
          ["brillante", "przymiotnik", "una carriera brillante"],
          ["insegnante", "rzeczownik", "un'insegnante di liceo"],
          ["derivante", "czasownikowe", "il denaro derivante dalle offerte"],
          ["richiedente", "rzeczownik + czasownikowe", "i soggetti richiedenti"],
          ["seguente", "przymiotnik", "il giorno seguente"],
          ["proveniente", "czasownikowe", "merci provenienti dall'estero"]
        ]
      },
      examples: [
        { tr: "Dokumenty poświadczające spełnienie wymogu należy załączyć." },
        { tr: "Kwoty wynikające z bilansu zostały zweryfikowane." },
        { tr: "Przekonująca mowa, ale bez danych." },
        { tr: "Pasażerowie przybywający z zagranicy muszą wypełnić formularz." },
        { tr: "To był przegrany wybór od samego początku." },
        { tr: "Uprawnieni otrzymają powiadomienie.", note: "„aventi diritto” to zastygła formuła prawna" }
      ]
    },
    vocab: [
      "poświadczający",
      "wynikający",
      "pochodzący, przybywający",
      "wnioskodawca",
      "uprawniony",
      "przekonujący",
      "następujący",
      "poprzedni",
      "obowiązujący",
      "wymóg",
      "bilans, budżet",
      "pozbawiony"
    ],
    exercises: [
      {
        q: "„Il denaro derivante dalle offerte” można zastąpić przez:",
        opts: ["il denaro che deriva dalle offerte", "il denaro derivato", "il denaro per derivare"]
      },
      { q: "„Gli aventi diritto” to:", opts: ["mający rację", "uprawnieni", "posiadacze"] },
      {
        q: "Zamień na zdanie względne: „i passeggeri provenienti dall'estero” → „i passeggeri ___ provengono dall'estero”"
      },
      { q: "Połącz.", pairs: ["poświadczający", "wynikający", "obowiązujący", "pozbawiony"] },
      {
        q: "W jakim rejestrze participio presente jest jeszcze czasownikowe?",
        opts: ["w mowie potocznej", "w tekstach prawnych i technicznych", "w poezji"]
      },
      {
        q: "Które z tych słów pochodzą od imiesłowu czynnego?",
        opts: ["insegnante", "tavolo", "cantante", "dirigente"]
      },
      {
        q: "Uzupełnij tekst urzędowy.",
        tr: "Dokumenty poświadczające spełnienie wymogu wnioskodawcy załączają do wniosku."
      },
      { q: "„Kwoty wynikające z bilansu zostały zweryfikowane.”" },
      { tr: "Uprawnieni otrzymają powiadomienie w ciągu trzydziestu dni." },
      { tr: "Przekonująca mowa, ale bez konkretnych danych." }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Gramatyka najwyższego poziomu",
    title: "Imiesłów bierny w zdaniach skróconych",
    objectives: [
      "zbudować konstrukcję absolutną z imiesłowem",
      "zachować zgodność imiesłowu",
      "skondensować tekst pisany"
    ],
    theory: [
      {
        h: "Konstrukcja absolutna",
        p: "<em><b>Finita la riunione</b>, siamo usciti.</em> Imiesłów bierny z własnym rzeczownikiem tworzy zdanie skrócone o wartości czasowej lub przyczynowej. Rzeczownik stoi <b>po</b> imiesłowie, a imiesłów zgadza się z nim rodzajem i liczbą."
      },
      {
        h: "Z czasownikami przechodnimi i nieprzechodnimi",
        p: "Przechodnie: <em>Letto il contratto, ho firmato.</em> Nieprzechodnie z <em>essere</em>: <em>Partito il treno, siamo tornati a casa.</em> W obu przypadkach zgodność jest obowiązkowa."
      },
      {
        h: "Wzmocnienia",
        p: "<em>Una volta finita la riunione…</em>, <em>Appena arrivati…</em>, <em>Terminati i lavori…</em>. Dodanie <em>una volta</em> albo <em>appena</em> uściśla relację czasową i brzmi bardziej naturalnie w tekście."
      },
      {
        trap: "Konstrukcja absolutna wymaga, żeby jej podmiot był <b>inny</b> niż podmiot zdania głównego albo żeby był to dopełnienie. Zdanie <em>Finito il lavoro, sono uscito</em> jest poprawne, bo <em>il lavoro</em> nie jest podmiotem zdania głównego."
      }
    ],
    grammar: {
      title: "Participio assoluto",
      table: {
        head: ["konstrukcja", "odpowiednik pełny", "wartość"],
        rows: [
          ["Finita la riunione…", "Quando la riunione finì…", "czasowa"],
          ["Letto il contratto…", "Dopo aver letto il contratto…", "czasowa"],
          ["Partito il treno…", "Dopo che il treno fu partito…", "czasowa"],
          ["Vista la situazione…", "Poiché la situazione è tale…", "przyczynowa"],
          ["Una volta ottenuto il visto…", "Quando avrà ottenuto il visto…", "warunkowo-czasowa"],
          ["Fatte le dovute verifiche…", "Dopo aver fatto le verifiche…", "urzędowa"]
        ]
      },
      examples: [
        { tr: "Wobec pilności działamy bez czekania." },
        { tr: "Po zakończeniu prac ulicę otwarto ponownie." },
        { tr: "Po otrzymaniu potwierdzenia będzie mógł wyruszyć." },
        { tr: "Po dokonaniu należnych weryfikacji wniosek został uwzględniony." },
        { tr: "Po dotarciu na miejsce zorientowaliśmy się w błędzie." },
        { tr: "Po wyłączeniu kosztów stałych bilans jest dodatni." }
      ]
    },
    vocab: [
      "wobec pilności",
      "kończyć",
      "otwierać ponownie",
      "uwzględnić wniosek",
      "należne weryfikacje",
      "wyłączać",
      "miejsce docelowe",
      "zorientować się w",
      "po tym, jak",
      "ledwie, zaraz po",
      "przesłanka",
      "wstępnie"
    ],
    exercises: [
      { q: "Uzupełnij zgodność: „Terminat___ i lavori, la strada è stata riaperta.”" },
      { q: "Uzupełnij zgodność: „Finit___ la riunione, siamo usciti.”" },
      { q: "„Vista la situazione” ma wartość:", opts: ["czasową", "przyczynową", "warunkową"] },
      {
        q: "Gdzie stoi rzeczownik w konstrukcji absolutnej?",
        opts: ["przed imiesłowem", "po imiesłowie", "na końcu zdania"]
      },
      {
        q: "Zbuduj konstrukcje absolutne.",
        tr: "Po przeczytaniu umowy podpisałem. Po wyłączeniu kosztów stałych bilans jest dodatni."
      },
      { q: "„Po otrzymaniu potwierdzenia będzie mógł wyruszyć.”" },
      { tr: "Po dotarciu na miejsce zorientowaliśmy się w błędzie." },
      {
        q: "Po co dodaje się „una volta” przed imiesłowem?",
        opts: ["dla rytmu", "żeby uściślić relację czasową", "bo wymaga tego gramatyka"]
      },
      { tr: "Po dokonaniu należnych weryfikacji wniosek został uwzględniony." },
      { tr: "Wobec pilności działamy bez czekania na dalsze potwierdzenia." }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Gramatyka najwyższego poziomu",
    title: "Peryfrazy czasownikowe",
    objectives: [
      "rozpoznać peryfrazy aspektowe, modalne i gerundialne",
      "wyrazić fazę czynności precyzyjnie",
      "użyć va + imiesłów i ho da + bezokolicznik"
    ],
    theory: [
      {
        h: "Peryfraza dodaje aspekt, którego czas nie ma",
        p: "Włoski nie ma osobnych form dla „zaraz zacznę”, „właśnie kończę”, „stopniowo rośnie”. Robią to peryfrazy: <em>sto per partire</em>, <em>sto finendo</em>, <em>va crescendo</em>."
      },
      {
        h: "Aspektowe",
        list: [
          "<em>stare per + bezokolicznik</em> — zaraz coś zrobić",
          "<em>essere sul punto di</em> — być o krok od",
          "<em>accingersi a</em> — przystępować do (rejestr wyższy)",
          "<em>cominciare / iniziare a</em>, <em>continuare / seguitare a</em>, <em>smettere / finire di</em>",
          "<em>stare + gerundio</em> — w toku"
        ]
      },
      {
        h: "Modalne",
        p: "<em>Il compito <b>va</b> rivisto</em> (trzeba poprawić), <em><b>Ho da</b> studiare</em> (mam do zrobienia), <em><b>C'è da</b> aspettare</em> (trzeba czekać), <em><b>Sarebbe da</b> rifare</em> (należałoby zrobić od nowa)."
      },
      {
        h: "Gerundialne w piśmie",
        p: "<em>Il fenomeno <b>va crescendo</b></em> („zjawisko stopniowo narasta”) to peryfraza z <em>andare</em> + gerundio, typowa dla rejestru pisanego. Odróżnij ją od <em>va rivisto</em>, gdzie <em>andare</em> ma sens obowiązku."
      }
    ],
    grammar: {
      title: "Katalog peryfraz",
      table: {
        head: ["typ", "konstrukcja", "znaczenie"],
        rows: [
          ["aspektowa", "sto per partire", "zaraz wyjeżdżam"],
          ["aspektowa", "sono sul punto di rinunciare", "jestem o krok od rezygnacji"],
          ["aspektowa", "mi accingo a rispondere", "przystępuję do odpowiedzi"],
          ["progresywna", "sto scrivendo", "właśnie piszę"],
          ["progresywna", "il fenomeno va crescendo", "zjawisko narasta"],
          ["modalna", "il testo va rivisto", "tekst trzeba poprawić"],
          ["modalna", "ho da fare", "mam co robić"],
          ["modalna", "c'è da aspettare", "trzeba poczekać"]
        ]
      },
      examples: [
        { tr: "Zaraz wychodzę, oddzwonię." },
        { tr: "Byłem o krok od rezygnacji, gdy przyszła odpowiedź." },
        { tr: "Liczba wniosków rośnie z miesiąca na miesiąc." },
        { tr: "Ten rozdział trzeba napisać od nowa." },
        { tr: "Przed terminem jest jeszcze dużo do zrobienia." },
        { tr: "Przystępuję do przedstawienia wyników." }
      ]
    },
    vocab: [
      "zaraz coś zrobić",
      "być o krok od",
      "przystępować do",
      "kontynuować (książkowo)",
      "stopniowo się dziać",
      "trzeba coś zrobić",
      "mieć do zrobienia",
      "trzeba",
      "rezygnować",
      "przedstawiać",
      "w całości",
      "z miesiąca na miesiąc"
    ],
    exercises: [
      {
        q: "„Il testo va rivisto” znaczy:",
        opts: ["tekst idzie poprawiony", "tekst trzeba poprawić", "tekst jest poprawiany"]
      },
      {
        q: "„Il fenomeno va crescendo” znaczy:",
        opts: ["zjawisko trzeba zwiększyć", "zjawisko stopniowo narasta", "zjawisko idzie rosnąć"]
      },
      { q: "Uzupełnij: „___ per uscire, ti richiamo dopo.” (zaraz wychodzę)" },
      { q: "Uzupełnij: „C'è ancora molto ___ fare.” (do zrobienia)" },
      { q: "Połącz.", pairs: ["przystępować do", "być o krok od", "mieć do zrobienia", "kontynuować"] },
      {
        q: "Czym różni się „va rivisto” od „va crescendo”?",
        opts: ["Niczym", "Pierwsze wyraża obowiązek, drugie stopniowy proces", "Pierwsze to czas przyszły"]
      },
      { q: "Uzupełnij peryfrazy.", tr: "Byłem o krok od rezygnacji, ale liczba wniosków rośnie." },
      { q: "„Ten rozdział trzeba napisać od nowa.”" },
      { tr: "Przystępuję do przedstawienia wyników badania." },
      { tr: "Byłem o krok od rezygnacji, gdy przyszła odpowiedź." }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 1",
    objectives: ["sprawdzić imiesłowy i peryfrazy czasownikowe"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Gli aventi diritto”:", opts: ["mający rację", "uprawnieni", "posiadacze"] },
      { q: "„i passeggeri provenienti dall'estero” → „i passeggeri ___ provengono…”" },
      { q: "Zgodność: „Terminat___ i lavori…”" },
      { q: "Zgodność: „Finit___ la riunione…”" },
      { q: "„Vista la situazione” ma wartość:", opts: ["czasową", "przyczynową", "warunkową"] },
      { q: "„Il testo va rivisto”:", opts: ["idzie poprawiony", "trzeba poprawić", "jest poprawiany"] },
      { q: "„Il fenomeno va crescendo”:", opts: ["trzeba zwiększyć", "stopniowo narasta", "będzie rosło"] },
      { q: "„C'è molto ___ fare.”" },
      { tr: "Po dokonaniu należnych weryfikacji projekt i tak trzeba poprawić." },
      { tr: "Po otrzymaniu potwierdzenia przystąpimy do działania bez zwłoki." }
    ]
  },
  "unit:c2-u02": {
    title: "Liczba mnoga i słowotwórstwo",
    grammarNote: "podwójne liczby mnogie · wyrazy złożone · alteracja · przymiotniki uczone"
  },
  "lesson:c2-u02-l1": {
    theme: "Leksyka zaawansowana",
    title: "Podwójna liczba mnoga",
    objectives: [
      "rozróżnić dwie formy liczby mnogiej tego samego rzeczownika",
      "wybrać właściwą zależnie od znaczenia",
      "unikać typowych pomyłek"
    ],
    theory: [
      {
        h: "Jedna forma pojedyncza, dwie mnogie",
        p: "Kilkanaście rzeczowników rodzaju męskiego ma dwie liczby mnogie: regularną na <em>-i</em> (męską) i nieregularną na <em>-a</em> (żeńską). Różnica nie jest stylistyczna — to dwa różne znaczenia."
      },
      {
        h: "Zasada ogólna",
        p: "Forma żeńska na <em>-a</em> zwykle oznacza <b>całość, zbiór albo znaczenie dosłowne cielesne</b>; forma męska na <em>-i</em> oznacza <b>pojedyncze egzemplarze albo znaczenie przenośne</b>."
      },
      {
        h: "Najważniejsze pary",
        list: [
          "<em>l'osso</em> → <b>le ossa</b> (szkielet człowieka) / <b>gli ossi</b> (pojedyncze kości, np. dla psa)",
          "<em>il braccio</em> → <b>le braccia</b> (ramiona ciała) / <b>i bracci</b> (ramiona dźwigu, rzeki)",
          "<em>il muro</em> → <b>le mura</b> (mury miejskie) / <b>i muri</b> (ściany)",
          "<em>il filo</em> → <b>le fila</b> (wątki, powiązania) / <b>i fili</b> (nitki, przewody)",
          "<em>il frutto</em> → <b>i frutti</b> (owoce w sensie efektów) / <b>la frutta</b> (owoce jako jedzenie, zbiorowo)",
          "<em>il dito</em> → <b>le dita</b> (palce ręki jako całość) / <b>i diti</b> (rzadkie, pojedyncze)",
          "<em>il lenzuolo</em> → <b>le lenzuola</b> (komplet pościeli) / <b>i lenzuoli</b> (pojedyncze prześcieradła)"
        ]
      },
      {
        tip: "<em>Le fila del discorso</em> („wątki wypowiedzi”) i <em>tirare le fila</em> („pociągać za sznurki”) to wyrażenia, w których forma żeńska jest jedyną możliwą."
      }
    ],
    grammar: {
      title: "Podwójne liczby mnogie",
      table: {
        head: ["l. poj.", "forma na -a", "forma na -i"],
        rows: [
          ["l'osso", "le ossa (szkielet)", "gli ossi (pojedyncze kości)"],
          ["il braccio", "le braccia (ciała)", "i bracci (dźwigu, rzeki)"],
          ["il muro", "le mura (miejskie)", "i muri (ściany)"],
          ["il filo", "le fila (wątki)", "i fili (przewody)"],
          ["il frutto", "la frutta (jedzenie)", "i frutti (efekty)"],
          ["il dito", "le dita (palce)", "i diti (rzadkie)"],
          ["il lenzuolo", "le lenzuola (pościel)", "i lenzuoli (sztuki)"],
          ["il ciglio", "le ciglia (rzęsy)", "i cigli (krawędzie drogi)"]
        ]
      },
      examples: [
        { tr: "Bolą mnie kości." },
        { tr: "Pies obgryza kości." },
        { tr: "Mury miejskie są średniowieczne." },
        { tr: "Ściany w domu są cienkie." },
        { tr: "Zebrał owoce swojej pracy." },
        { tr: "Na obiad zawsze jem owoce." }
      ]
    },
    vocab: [
      "kości (szkielet) / pojedyncze kości",
      "ramiona / ramiona dźwigu",
      "mury miejskie / ściany",
      "wątki / przewody",
      "owoce (jedzenie) / owoce (efekty)",
      "palce",
      "rzęsy / krawędzie drogi",
      "pościel",
      "obgryzać",
      "średniowieczny",
      "pociągać za sznurki",
      "zbierać owoce (efekty)"
    ],
    exercises: [
      { q: "„Mi fanno male ___.” (bolą mnie kości)", opts: ["gli ossi", "le ossa", "i ossi"] },
      {
        q: "„___ della città sono medievali.” (mury miejskie)",
        opts: ["I muri", "Le mura", "I muri della"]
      },
      { q: "Uzupełnij: „Ha raccolto ___ del suo lavoro.” (owoce w sensie efektów)" },
      { q: "Uzupełnij: „A pranzo mangio sempre ___.” (owoce jako jedzenie)" },
      { q: "Połącz formę ze znaczeniem.", pairs: ["ramiona ciała", "ramiona dźwigu", "wątki", "przewody"] },
      {
        q: "„Tirare le fila” znaczy:",
        opts: ["ciągnąć nitki", "pociągać za sznurki, kierować", "rozplątywać"]
      },
      { q: "Uzupełnij formy.", tr: "Mury miejskie są stare, ale ściany w moim domu są cienkie." },
      { q: "„Pies obgryza kości.”" },
      { tr: "Palce były zmarznięte, a kości mnie bolały." },
      { tr: "Wreszcie zebrał owoce swojej pracy." }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Leksyka zaawansowana",
    title: "Wyrazy złożone i ich liczba mnoga",
    objectives: [
      "utworzyć liczbę mnogą wyrazu złożonego",
      "rozpoznać typ złożenia",
      "uniknąć najczęstszych pomyłek"
    ],
    theory: [
      {
        h: "Cztery wzorce",
        list: [
          "<b>bez zmian</b>: <em>il doposcuola → i doposcuola</em>, <em>il portacenere → i portacenere</em>",
          "<b>zmienia się drugi człon</b>: <em>il cavolfiore → i cavolfiori</em>, <em>il capolavoro → i capolavori</em>, <em>l'asciugamano → gli asciugamani</em>",
          "<b>zmienia się pierwszy człon</b>: <em>il capofamiglia → i capifamiglia</em>, <em>il fico d'India → i fichi d'India</em>",
          "<b>zmieniają się oba</b>: <em>la cassaforte → le casseforti</em>, <em>il bassofondo → i bassifondi</em>"
        ]
      },
      {
        h: "Reguła praktyczna dla „capo-”",
        p: "Gdy <em>capo</em> oznacza <b>osobę stojącą na czele</b>, zmienia się on: <em>i capistazione, i capireparto, i capifamiglia</em>. Gdy oznacza <b>coś najlepszego lub początek</b>, zmienia się drugi człon: <em>i capolavori, i capoluoghi</em>."
      },
      {
        h: "Czasownik + rzeczownik",
        p: "Złożenia typu <em>portacenere, apriscatole, spazzaneve, salvagente</em> są zwykle <b>nieodmienne</b>, bo pierwszy człon jest formą czasownikową. Wyjątki istnieją, ale nieodmienność jest bezpiecznym domyślnym wyborem."
      },
      {
        tip: "W razie wątpliwości sprawdź w słowniku Treccani albo De Mauro. Ta grupa jest jedną z niewielu, w których intuicja rodzimych użytkowników też bywa niepewna."
      }
    ],
    grammar: {
      title: "Liczba mnoga wyrazów złożonych",
      table: {
        head: ["typ", "l. poj.", "l. mn."],
        rows: [
          ["czasownik + rzeczownik", "il portacenere", "i portacenere"],
          ["czasownik + rzeczownik", "l'apriscatole", "gli apriscatole"],
          ["capo (osoba)", "il capostazione", "i capistazione"],
          ["capo (najlepszy)", "il capolavoro", "i capolavori"],
          ["rzeczownik + rzeczownik", "il cavolfiore", "i cavolfiori"],
          ["rzeczownik + przymiotnik", "la cassaforte", "le casseforti"],
          ["przymiotnik + rzeczownik", "il bassofondo", "i bassifondi"],
          ["z przyimkiem", "il fico d'India", "i fichi d'India"]
        ]
      },
      examples: [
        { tr: "Zawiadowcy podpisali protokół." },
        { tr: "Napisał trzy arcydzieła w dziesięć lat." },
        { tr: "Sejfy zostały opróżnione." },
        { tr: "Kup mi dwa otwieracze do konserw." },
        { tr: "Stolic regionów jest dwadzieścia." },
        { tr: "Czyste ręczniki są w szafie." }
      ]
    },
    vocab: [
      "arcydzieło",
      "stolica regionu",
      "zawiadowca stacji",
      "głowa rodziny",
      "sejf",
      "męty, dno społeczne",
      "otwieracz do konserw",
      "popielniczka",
      "pług śnieżny",
      "koło ratunkowe",
      "protokół",
      "opróżniać"
    ],
    exercises: [
      { q: "Liczba mnoga od „il capolavoro”: ___" },
      { q: "Liczba mnoga od „il capostazione”: ___" },
      { q: "Liczba mnoga od „la cassaforte”: ___" },
      { q: "Liczba mnoga od „il portacenere”: ___" },
      {
        q: "Dlaczego „i capistazione”, a nie „i capostazioni”?",
        opts: [
          "To wyjątek bez reguły",
          "Bo capo oznacza tu osobę stojącą na czele",
          "Bo stazione jest żeńskie"
        ]
      },
      {
        q: "Które złożenia są nieodmienne?",
        opts: ["il portacenere", "il cavolfiore", "l'apriscatole", "lo spazzaneve"]
      },
      {
        q: "Uzupełnij liczby mnogie.",
        tr: "Stolic regionów jest dwadzieścia; sejfy zostały opróżnione w nocy."
      },
      { q: "„Czyste ręczniki są w szafie.”" },
      { tr: "Kierownicy działów poprosili o spotkanie z dyrekcją." },
      { tr: "Napisał trzy arcydzieła w niecałe dziesięć lat." }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Leksyka zaawansowana",
    title: "Zdrobnienia i przymiotniki uczone",
    objectives: [
      "użyć sufiksów alterujących świadomie",
      "rozpoznać przymiotniki o zmienionej podstawie",
      "dobrać rejestr leksykalny"
    ],
    theory: [
      {
        h: "Alterazione: cztery kierunki",
        list: [
          "<b>zdrobnienie</b> (<em>diminutivo</em>): <em>-ino, -etto, -ello</em> — <em>tavolino, casetta, alberello</em>",
          "<b>zgrubienie</b> (<em>accrescitivo</em>): <em>-one</em> — <em>portone, librone</em>",
          "<b>pieszczotliwe</b> (<em>vezzeggiativo</em>): <em>-uccio, -otto</em> — <em>caruccio, ragazzotto</em>",
          "<b>pejoratywne</b> (<em>peggiorativo</em>): <em>-accio, -astro</em> — <em>tempaccio, poetastro</em>"
        ]
      },
      {
        h: "Uwaga na pułapki leksykalne",
        p: "Nie każde słowo z sufiksem jest alterowane. <em>Il mattone</em> to cegła, nie „duży poranek”; <em>il tacchino</em> to indyk, nie „mały obcas”; <em>il burrone</em> to wąwóz, nie „duże masło”. To tak zwane <em>falsi alterati</em>."
      },
      {
        h: "Przymiotniki o zmienionej podstawie",
        p: "Wysoki rejestr włoski używa przymiotników pochodzących z łaciny lub greki, niepowiązanych formalnie z rzeczownikiem: <em>cavallo → equino / ippico</em>, <em>cuore → cardiaco</em>, <em>acqua → idrico</em>, <em>occhio → oculare</em>, <em>città → urbano</em>, <em>anno → annuale</em>, <em>fratello → fraterno</em>."
      },
      {
        h: "Przymiotniki bez superlatywu",
        p: "Część przymiotników nie tworzy superlatywu, bo już wyraża intensywność (<em>eccezionale, splendido, straordinario, immenso</em>) albo jest formą alterowaną (<em>bellino, grandicello</em>). „Eccezionalissimo” brzmi jak żart."
      }
    ],
    grammar: {
      title: "Sufiksy i przymiotniki uczone",
      table: {
        head: ["rzeczownik", "przymiotnik uczony", "przykład"],
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
        { tr: "Co za paskudna pogoda! Nie wychodzi się przy takim deszczu." },
        { tr: "Mieszkamy w domku pod miastem." },
        { tr: "Brama kamienicy jest zawsze zamknięta." },
        { tr: "Zasoby wodne kraju maleją." },
        { tr: "Doznał zatrzymania akcji serca." },
        { tr: "Ruch miejski wzrósł o dwadzieścia procent." }
      ]
    },
    vocab: [
      "forma alterowana",
      "zdrobnienie",
      "zgrubienie",
      "forma pejoratywna",
      "pozorne zdrobnienie",
      "sercowy",
      "wodny",
      "oczny",
      "miejski",
      "braterski",
      "paskudna pogoda",
      "cegła (nie: duży poranek)"
    ],
    exercises: [
      {
        q: "Połącz rzeczownik z przymiotnikiem uczonym.",
        pairs: ["cardiaco", "idrico", "oculare", "urbano"]
      },
      { q: "„Il mattone” to:", opts: ["duży poranek", "cegła", "zdrobnienie od matto"] },
      { q: "Który sufiks jest pejoratywny?", opts: ["-ino", "-one", "-accio"] },
      { q: "Utwórz zdrobnienie od „casa”: ___" },
      {
        q: "Dlaczego „eccezionalissimo” brzmi źle?",
        opts: ["Bo jest za długie", "Bo eccezionale już wyraża intensywność", "Bo to zapożyczenie"]
      },
      {
        q: "Które to falsi alterati (nie są zdrobnieniami ani zgrubieniami)?",
        opts: ["il tacchino", "il tavolino", "il burrone", "il mattone"]
      },
      { q: "Uzupełnij przymiotnikami uczonymi.", tr: "Zasoby wodne maleją, a ruch miejski wzrósł." },
      { q: "„Co za paskudna pogoda!”" },
      { tr: "Zasoby wodne kraju maleją od lat." },
      { tr: "Mieszkamy w domku tuż za miastem." }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 2",
    objectives: ["sprawdzić podwójne liczby mnogie, złożenia i słowotwórstwo"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Mi fanno male ___.”", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "„___ della città sono medievali.”", opts: ["I muri", "Le mura", "Le muri"] },
      { q: "„A pranzo mangio ___.” (owoce jako jedzenie)" },
      { q: "L. mn. od „il capolavoro”: ___" },
      { q: "L. mn. od „il capostazione”: ___" },
      { q: "L. mn. od „la cassaforte”: ___" },
      { q: "Połącz.", pairs: ["cardiaco", "idrico", "urbano", "fraterno"] },
      { q: "„Il burrone” to:", opts: ["duże masło", "wąwóz", "zgrubienie od burro"] },
      { tr: "Sejfy kierowników działów zostały sprawdzone." },
      { tr: "Miejskie zasoby wodne wymagają natychmiastowej interwencji." }
    ]
  },
  "unit:c2-u03": {
    title: "Niuanse i teksty autentyczne",
    grammarNote: "ironia · gergo · regionalizmy · latynizmy"
  },
  "lesson:c2-u03-l1": {
    theme: "Styl i kultura",
    title: "Ironia po włosku",
    objectives: [
      "rozpoznać ironię w tekście i w mowie",
      "użyć sygnałów ironicznych",
      "odróżnić ironię od sarkazmu"
    ],
    theory: [
      {
        h: "Sygnały ironii",
        list: [
          "<em>ma va'!</em>, <em>figurati!</em>, <em>ci mancherebbe</em> — pozorna zgoda",
          "<em>proprio</em>, <em>davvero</em>, <em>giusto</em> ustawione przewrotnie: <em>Bravo, giusto quello che serviva.</em>",
          "przesada leksykalna: <em>una tragedia</em> o drobiazgu",
          "zdrobnienie w kontekście poważnym: <em>un problemino da due milioni</em>"
        ]
      },
      {
        h: "Ironia a sarkazm",
        p: "Ironia zostawia rozmówcy wyjście, sarkazm nie. <em>Che bella idea</em> powiedziane z uśmiechem to ironia; to samo zdanie z naciskiem i bez uśmiechu to sarkazm. Włosi używają obu, ale sarkazm jest częściej sygnalizowany intonacją niż leksyką."
      },
      {
        h: "Understatement po włosku",
        p: "<em>Non è male</em> (o czymś świetnym), <em>diciamo che non è andata benissimo</em> (o katastrofie), <em>qualche problemino</em> (o poważnym kryzysie). Litota jest we włoskim bardzo produktywna: <em>non poco</em>, <em>non pochi</em>, <em>non senza difficoltà</em>."
      },
      {
        tip: "W tekstach pisanych ironia bywa sygnalizowana cudzysłowem: <em>la „riforma” del settore</em>. To znak, że autor dystansuje się od słowa."
      }
    ],
    grammar: {
      title: "Środki ironii",
      table: {
        head: ["środek", "przykład", "znaczenie"],
        rows: [
          ["pozorna zgoda", "Ma figurati!", "no jasne, akurat"],
          ["litota", "Non è male.", "jest świetne"],
          ["zdrobnienie", "un problemino", "poważny problem"],
          ["przesada", "una tragedia", "drobna niedogodność"],
          ["cudzysłów", "la „riforma”", "dystans autora"],
          ["retoryczne pytanie", "E chi l'avrebbe detto?", "przecież było jasne"]
        ]
      },
      examples: [
        { tr: "Brawo, dokładnie tego nam brakowało." },
        { tr: "Powiedzmy, że nie poszło znakomicie." },
        { tr: "Drobny problemik za dwa miliony euro." },
        { tr: "Aha, teraz to moja wina. No jasne." },
        { tr: "„Reforma” pogorszyła sytuację." },
        { tr: "Nie bez trudności doszliśmy do końca." }
      ]
    },
    vocab: [
      "no jasne, akurat",
      "tylko tego brakowało",
      "coś ty!",
      "litota",
      "niedopowiedzenie",
      "sarkazm",
      "nabijać się",
      "podkreślać",
      "ton",
      "aluzja",
      "podwójne znaczenie",
      "niemało"
    ],
    exercises: [
      {
        q: "„Non è male” o świetnym filmie to:",
        opts: ["krytyka", "litota, czyli pochwała przez niedopowiedzenie", "obojętność"]
      },
      {
        q: "„Un problemino da due milioni” to przykład:",
        opts: ["zdrobnienia ironicznego", "błędu leksykalnego", "rejestru urzędowego"]
      },
      {
        q: "Czym różni się ironia od sarkazmu?",
        opts: ["Niczym", "Ironia zostawia wyjście, sarkazm nie", "Sarkazm jest zawsze pisany"]
      },
      { q: "Połącz.", pairs: ["akurat, no jasne", "tylko tego brakowało", "coś ty!", "niemało"] },
      {
        q: "Cudzysłów w „la „riforma”” sygnalizuje:",
        opts: ["cytat", "dystans autora wobec słowa", "termin techniczny"]
      },
      {
        q: "Uzupełnij ironiczne zdanie.",
        tr: "Brawo, dokładnie tego nam brakowało. Powiedzmy, że nie poszło znakomicie."
      },
      { q: "„Nie bez trudności doszliśmy do końca.”" },
      {
        q: "„E chi l'avrebbe detto?” w kontekście oczywistym znaczy:",
        opts: ["nikt się nie spodziewał", "przecież to było jasne", "kto to powiedział?"]
      },
      { tr: "Powiedzmy, że nie poszło całkiem znakomicie, delikatnie mówiąc." },
      { tr: "Drobny problemik za dwa miliony euro, nic takiego." }
    ]
  },
  "lesson:c2-u03-l2": {
    theme: "Styl i kultura",
    title: "Slang i regionalizmy",
    objectives: [
      "rozpoznać slang młodzieżowy i regionalizmy",
      "odróżnić rejestr potoczny od dialektu",
      "wiedzieć, czego nie używać w piśmie"
    ],
    theory: [
      {
        h: "Gergo giovanile",
        p: "<em>Boh</em> (nie wiem), <em>bella!</em> (cześć), <em>tipo</em> (jakby), <em>raga</em> (ludzie, od <em>ragazzi</em>), <em>sto zitto</em>, <em>che palle</em> (co za nuda, wulgarnawe), <em>spoilerare</em>, <em>cringiare</em>. Warstwa szybko się zmienia — to, co dziś jest żywe, za pięć lat brzmi jak z archiwum."
      },
      {
        h: "Regionalizmy w standardzie",
        list: [
          "północ: <em>anguria</em> (arbuz), <em>bidello</em>, <em>ciao</em> z <em>schiavo</em>",
          "centrum: <em>cocomero</em> (arbuz), <em>a me mi</em> (potocznie, niepoprawne w piśmie)",
          "południe: <em>melone d'acqua</em>, częste passato remoto, <em>mo'</em> (teraz)",
          "wszędzie: <em>magari</em>, <em>mica</em>, <em>manco</em> (nawet nie, potocznie)"
        ]
      },
      {
        h: "Dialekt to nie slang",
        p: "Neapolitański czy sycylijski to <b>osobne języki</b> wywodzące się z łaciny równolegle do toskańskiego, z własną literaturą i gramatyką. Mówienie o nich „zepsuty włoski” jest błędem faktycznym i kulturową gafą."
      },
      {
        trap: "<em>Mica</em> („wcale”, „przecież nie”) jest w mowie wszechobecne: <em>Non è mica facile.</em> W tekście formalnym zastąp je przez <em>affatto</em> albo pomiń."
      }
    ],
    grammar: {
      title: "Rejestry potoczne",
      table: {
        head: ["wyrażenie", "znaczenie", "rejestr"],
        rows: [
          ["boh", "nie mam pojęcia", "potoczny"],
          ["mica", "wcale, przecież nie", "potoczny, bardzo częsty"],
          ["magari", "oby / może / nawet", "wszędzie"],
          ["mo'", "teraz", "centro-południe"],
          ["che palle", "co za nuda", "wulgarnawy"],
          ["tipo", "jakby, w stylu", "młodzieżowy"],
          ["dai!", "no dalej! / no coś ty!", "wszędzie"],
          ["figurati", "nie ma sprawy / akurat", "wszędzie"]
        ]
      },
      examples: [
        { tr: "Wcale to nie takie łatwe, jak się wydaje." },
        { tr: "Nie wiem, nie mam pojęcia." },
        { tr: "No weź, nie obrażaj się!" },
        { tr: "Było jakby koło północy, kiedy wyszliśmy." },
        { tr: "Żeby to było takie proste." },
        { tr: "Zaraz przyjdę, poczekaj chwilę.", note: "centro-południe" }
      ]
    },
    vocab: [
      "slang, żargon",
      "regionalizm",
      "wcale, przecież nie",
      "nie wiem",
      "no dalej!",
      "jakby, w stylu",
      "teraz (regionalnie)",
      "arbuz (północ / centrum)",
      "wcale (formalnie)",
      "potoczny",
      "wulgarny",
      "przestarzały"
    ],
    exercises: [
      {
        q: "„Non è mica facile” znaczy:",
        opts: ["jest trochę łatwe", "wcale nie jest łatwe", "jest bardzo łatwe"]
      },
      { q: "„Boh” to:", opts: ["okrzyk bólu", "nie mam pojęcia", "powitanie"] },
      {
        q: "Dialekt neapolitański to:",
        opts: ["zepsuty włoski", "odrębny język romański", "slang młodzieżowy"]
      },
      { q: "Połącz regionalizm z regionem.", pairs: ["północ", "centrum", "centro-południe", "południe"] },
      { q: "Zastąp „mica” formą formalną: „Non è ___ facile.”" },
      {
        q: "„A me mi piace” jest:",
        opts: ["poprawne w piśmie", "potoczne, unikane w piśmie", "wyłącznie dialektalne"]
      },
      {
        q: "Uzupełnij potoczne zwroty.",
        tr: "Nie wiem, nie mam pojęcia. Zresztą wcale to nie takie łatwe, jak wygląda."
      },
      { q: "„No weź, nie obrażaj się!”" },
      { tr: "Nie wiem, było jakby koło północy, wcale nie tak łatwo to pamiętać." },
      { tr: "Wcale to nie takie łatwe, jak wygląda, wierz mi." }
    ]
  },
  "lesson:c2-u03-l3": {
    theme: "Styl i kultura",
    title: "Latynizmy i rejestr uczony",
    objectives: [
      "rozpoznać latynizmy w tekstach prawnych i naukowych",
      "użyć ich we właściwym miejscu",
      "domknąć poziom C2"
    ],
    theory: [
      {
        h: "Łacina żyje we włoskim urzędowym",
        p: "Włoski zachował znacznie więcej łacińskich wyrażeń w codziennym języku prawnym i akademickim niż polski. Nie są ozdobą — mają precyzyjne znaczenia i występują w aktach prawnych, wyrokach i publikacjach."
      },
      {
        h: "Najczęstsze",
        list: [
          "<em>de facto</em> / <em>de iure</em> — w praktyce / z mocy prawa",
          "<em>ex post</em> / <em>ex ante</em> — po fakcie / z góry",
          "<em>in itinere</em> — w toku",
          "<em>una tantum</em> — jednorazowo",
          "<em>ad hoc</em>, <em>pro tempore</em>, <em>sine die</em> (bez terminu)",
          "<em>a fortiori</em>, <em>in primis</em>, <em>de cuius</em> (spadkodawca)"
        ]
      },
      {
        h: "Rejestr uczony poza łaciną",
        p: "<em>Vieppiù</em> (coraz bardziej), <em>altresì</em> (również), <em>ancorché</em> (chociaż), <em>laddove</em> (podczas gdy), <em>giacché</em> (skoro), <em>onde</em> (aby). Występują w prawie, publicystyce i eseju; w mowie brzmią pretensjonalnie."
      },
      {
        h: "Domknięcie poziomu",
        p: "Na C2 nie chodzi już o poszerzanie zasobu form, tylko o <b>trafność wyboru</b>. Ta sama treść wyrażona w rejestrze potocznym, standardowym i uczonym to trzy różne komunikaty — i biegłość polega na tym, żeby wybierać świadomie."
      }
    ],
    grammar: {
      title: "Latynizmy i formy uczone",
      table: {
        head: ["wyrażenie", "znaczenie", "kontekst"],
        rows: [
          ["de facto / de iure", "faktycznie / prawnie", "prawo"],
          ["ex post / ex ante", "po fakcie / z góry", "ekonomia, prawo"],
          ["in itinere", "w toku", "administracja"],
          ["una tantum", "jednorazowo", "finanse"],
          ["sine die", "bez wyznaczonego terminu", "prawo"],
          ["altresì", "również", "prawo, publicystyka"],
          ["ancorché", "chociaż", "publicystyka"],
          ["laddove", "podczas gdy", "esej"]
        ]
      },
      examples: [
        { tr: "Umowa faktycznie już wygasła." },
        { tr: "Premia wypłacana jest jednorazowo." },
        { tr: "Spotkanie odroczono bez wyznaczenia terminu." },
        { tr: "Sprawa jest jeszcze w toku." },
        { tr: "Zaznacza się również, że termin jest nieprzekraczalny." },
        { tr: "Podczas gdy pierwsze badanie wskazywało spadek, drugie pokazuje stabilizację." }
      ]
    },
    vocab: [
      "faktycznie / prawnie",
      "po fakcie / z góry",
      "w toku",
      "jednorazowo",
      "bez terminu",
      "doraźnie",
      "również",
      "chociaż",
      "podczas gdy",
      "skoro",
      "wypłacać, świadczyć",
      "odraczać"
    ],
    exercises: [
      { q: "Połącz latynizm ze znaczeniem.", pairs: ["faktycznie", "jednorazowo", "bez terminu", "w toku"] },
      {
        q: "„Il bonus è erogato una tantum” znaczy:",
        opts: ["wypłacany co miesiąc", "wypłacany jednorazowo", "wypłacany raz w roku"]
      },
      {
        q: "„Rinviata sine die” znaczy:",
        opts: ["odroczona o tydzień", "odroczona bez wyznaczenia terminu", "odwołana"]
      },
      { q: "Zastąp „anche” formą uczoną: „Si segnala ___ che…”" },
      { q: "Zastąp „mentre” formą eseistyczną: „___ il primo studio indicava un calo…”" },
      {
        q: "Na czym polega biegłość C2?",
        opts: [
          "Na znajomości największej liczby słów",
          "Na świadomym doborze rejestru do sytuacji",
          "Na używaniu form uczonych zawsze"
        ]
      },
      { q: "Uzupełnij tekst prawny.", tr: "Umowa faktycznie już wygasła, a sprawa jest jeszcze w toku." },
      { q: "„Zaznacza się również, że termin jest nieprzekraczalny.”" },
      { tr: "Spotkanie odroczono bez terminu z przyczyn technicznych." },
      { tr: "Świadczenie wypłacane jest jednorazowo, po złożeniu wniosku." }
    ]
  },
  "lesson:c2-u03-test": {
    theme: "Egzamin",
    title: "Egzamin końcowy poziomu C2",
    objectives: ["sprawdzić imiesłowy, słowotwórstwo, rejestry i niuanse"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%. To ostatni sprawdzian kursu." }],
    exercises: [
      { q: "„Gli aventi diritto”:", opts: ["mający rację", "uprawnieni", "posiadacze"] },
      { q: "Zgodność: „Terminat___ i lavori…”" },
      { q: "„Il testo va rivisto”:", opts: ["idzie poprawiony", "trzeba poprawić", "jest poprawiany"] },
      { q: "„Mi fanno male ___.”", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "L. mn. od „la cassaforte”: ___" },
      { q: "L. mn. od „il capostazione”: ___" },
      { q: "Połącz.", pairs: ["idrico", "cardiaco", "urbano", "oculare"] },
      { q: "„Non è mica facile”:", opts: ["trochę łatwe", "wcale nie łatwe", "bardzo łatwe"] },
      { q: "„Una tantum”:", opts: ["co miesiąc", "jednorazowo", "raz w roku"] },
      { q: "Zastąp „anche”: „Si segnala ___ che…”" },
      { q: "„Sprawa jest jeszcze w toku i została odroczona bez terminu.”" },
      { tr: "Wobec sytuacji projekt trzeba zrewidować w całości przed terminem." }
    ]
  }
});
