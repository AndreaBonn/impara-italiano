/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a1-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a1-u04": { title: "Moda i rozmiary", grammarNote: "przymiotniki · kolory · questo/quello" },
  "lesson:a1-u04-l1": {
    theme: "Moda i zakupy",
    title: "Zgodność przymiotnika i kolory",
    objectives: [
      "dopasować końcówkę przymiotnika do rzeczownika",
      "nazwać kolory i wiedzieć, które się nie odmieniają",
      "opisać ubranie na wystawie"
    ],
    theory: [
      {
        h: "Przymiotnik chodzi za rzeczownikiem i dopasowuje się do niego",
        p: "Włoski przymiotnik stoi zwykle <b>po</b> rzeczowniku i przejmuje jego rodzaj oraz liczbę: <em>una borsa <b>rossa</b></em>, <em>due borse <b>rosse</b></em>. To odwrotnie niż po polsku, gdzie mówimy „czerwona torba”."
      },
      {
        h: "Dwie klasy końcówek",
        list: [
          "<b>cztery formy</b> (-o / -a / -i / -e): <em>rosso, rossa, rossi, rosse</em>",
          "<b>dwie formy</b> (-e / -i): <em>verde, verdi</em> — ta sama forma dla obu rodzajów",
          "<b>bez odmiany</b>: <em>blu, rosa, viola, beige</em> oraz zapożyczenia (<em>chic</em>)"
        ]
      },
      {
        trap: "Przy grupie mieszanej rodzajowo wygrywa rodzaj męski: <em>Marco e Anna sono <b>italiani</b></em>. Jedna kobieta w grupie stu mężczyzn niczego nie zmienia; jeden mężczyzna w grupie stu kobiet przełącza całość na męski."
      },
      {
        h: "Kolory, które kiedyś były rzeczownikami",
        p: "<em>Rosa</em> (róża), <em>viola</em> (fiołek), <em>arancione</em> (od pomarańczy) pochodzą od nazw roślin — dlatego <em>rosa</em> i <em>viola</em> się nie odmieniają. <em>Marrone</em> teoretycznie należy do tej grupy, ale w praktyce Włosi mówią też <em>scarpe marroni</em> i nikt tego nie poprawia."
      }
    ],
    grammar: {
      title: "Zgodność przymiotnika",
      table: {
        head: ["rzeczownik", "typ -o", "typ -e", "nieodmienny"],
        rows: [
          ["il vestito (m poj.)", "nero", "verde", "blu"],
          ["la gonna (ż poj.)", "nera", "verde", "blu"],
          ["i pantaloni (m mn.)", "neri", "verdi", "blu"],
          ["le scarpe (ż mn.)", "nere", "verdi", "blu"]
        ]
      },
      examples: [
        { tr: "Poproszę białą koszulę." },
        { tr: "Te buty są za ciasne." },
        { tr: "Niebieski płaszcz, rozmiar średni.", note: "blu się nie odmienia" },
        { tr: "Zielone spodnie na mnie źle leżą." },
        { tr: "Jaka ładna marynarka!" }
      ]
    },
    vocab: [
      "sukienka; ubranie",
      "spódnica",
      "spodnie (zawsze l. mn.)",
      "koszula",
      "koszulka",
      "marynarka, kurtka",
      "płaszcz",
      "buty",
      "czerwony / czerwona",
      "czarny / czarna",
      "biały / biała",
      "zielony (bez zmiany rodzaju)",
      "niebieski (nieodmienny)",
      "szary / szara"
    ],
    exercises: [
      {
        q: "„La gonna” jest rodzaju żeńskiego. Jak napiszesz „czarna”?",
        opts: ["nero", "nera", "nere"],
        why: "Rodzaj żeński, liczba pojedyncza → nera."
      },
      {
        q: "Który przymiotnik ma tę samą formę dla obu rodzajów?",
        opts: ["rosso", "verde", "grigio"],
        why: "Przymiotniki na -e mają dwie formy: verde / verdi."
      },
      {
        q: "Uzupełnij: „Le scarpe ___.” (czarne buty)",
        why: "Scarpe to rodzaj żeński w liczbie mnogiej → nere."
      },
      {
        q: "Uzupełnij: „I pantaloni ___.” (niebieskie spodnie)",
        why: "Blu jest nieodmienny — nigdy „blui”."
      },
      { q: "Uzupełnij końcówki.", tr: "Poproszę białą koszulę i dwie czarne koszulki." },
      {
        q: "„Marco e Anna sono ___.” (Włochami)",
        opts: ["italiane", "italiani", "italiano"],
        why: "Grupa mieszana rodzajowo bierze formę męską liczby mnogiej."
      },
      { q: "Połącz ubranie z tłumaczeniem.", pairs: ["spódnica", "płaszcz", "marynarka", "buty"] },
      { tr: "Te buty są za ciasne." },
      { tr: "Poproszę szarą marynarkę, rozmiar średni." },
      { tr: "Jaka ładna biała koszula!" }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "Moda i zakupy",
    title: "Zaimki wskazujące",
    objectives: [
      "odróżnić questo od quello",
      "odmienić obie formy",
      "wskazać rzecz w sklepie bez pokazywania palcem"
    ],
    theory: [
      {
        h: "Blisko i daleko",
        p: "<strong>Questo</strong> to rzecz blisko mówiącego („ten tutaj”), <strong>quello</strong> — dalej („tamten”). Włoski nie ma trzeciego stopnia, którego używałby na co dzień (dawne <em>codesto</em> zostało w Toskanii i w języku urzędowym)."
      },
      {
        h: "Questo odmienia się prosto",
        p: "<em>questo, questa, questi, queste</em>. Przed samogłoską skraca się w mowie i piśmie: <em>quest'anno</em>, <em>quest'estate</em>."
      },
      {
        h: "Quello zachowuje się jak rodzajnik",
        p: "Kiedy stoi <b>przed rzeczownikiem</b>, <em>quello</em> przybiera formy równoległe do <em>il / lo / la / i / gli / le</em>: <em>quel cappotto, quello zaino, quell'amico, quei pantaloni, quegli stivali, quella gonna, quelle scarpe</em>. Kiedy stoi samodzielnie (bez rzeczownika), ma zwykłe cztery formy: <em>Prendo quello.</em>"
      },
      {
        contrast: "Polskie „ten / tamten” działa podobnie, ale nie zmienia się w zależności od pierwszej głoski następnego słowa. To właśnie <em>quello</em> sprawia najwięcej kłopotu — traktuj je jak rodzajnik, nie jak przymiotnik."
      }
    ],
    grammar: {
      title: "Questo i quello",
      table: {
        head: ["rodzajnik", "quello + rzeczownik", "questo", "przykład"],
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
        { tr: "Ile kosztuje ta torebka?" },
        { tr: "Wolę tamten płaszcz." },
        { tr: "Tamte kozaki są na wyprzedaży." },
        { tr: "Wezmę to, dziękuję.", note: "samodzielne — zwykłe formy" },
        { tr: "W tym roku moda jest minimalistyczna." }
      ]
    },
    vocab: [
      "rozmiar (ubrania)",
      "rozmiar (butów)",
      "przymierzalnia",
      "przymierzyć",
      "wyprzedaże",
      "zniżka",
      "witryna sklepowa",
      "drogi / tani",
      "ciasny / luźny",
      "mogę przymierzyć?",
      "dobrze na mnie leży",
      "macie rozmiar M?"
    ],
    dialogue: [
      "Przepraszam, mogę przymierzyć tę koszulę?",
      "Oczywiście. Jaki nosi pani rozmiar?",
      "Średni. Macie też tamten niebieski model?",
      "Tak, ale tylko w rozmiarze L. Przymierzalnia jest tam w głębi.",
      "Dziękuję. Ta jest na mnie trochę ciasna."
    ],
    exercises: [
      {
        q: "Który wariant jest poprawny przed „zaino”?",
        opts: ["quel zaino", "quello zaino", "quell'zaino"],
        why: "Quello zachowuje się jak <i>lo</i>: przed z i s+spółgłoska daje <b>quello</b>."
      },
      {
        q: "Uzupełnij: „___ scarpe sono in saldo.” (tamte buty)",
        why: "Rodzaj żeński liczba mnoga: le → quelle."
      },
      {
        q: "Uzupełnij: „___ anno vado in Italia.” (w tym roku)",
        why: "Questo przed samogłoską skraca się do quest'."
      },
      {
        q: "Dobierz właściwą formę „quello”.",
        items: ["płaszcz", "kozaki", "spódnica", "spodnie", "zegarek"]
      },
      {
        q: "„Prendo quello.” Dlaczego nie „quel”?",
        opts: ["Bo to błąd", "Bo quello stoi samodzielnie, bez rzeczownika", "Bo to liczba mnoga"],
        why: "Formy skrócone (quel, quei, quegli) istnieją tylko przed rzeczownikiem."
      },
      { q: "„Ile kosztuje ta torebka?”" },
      { tr: "Mogę przymierzyć tamtą marynarkę?" },
      {
        q: "Jesteś w sklepie z ubraniami.",
        setting: "Sklep w centrum, okres wyprzedaży.",
        lines: [
          { tr: "Dzień dobry, szuka pani czegoś konkretnego?" },
          { tr: "Zapytaj, czy możesz przymierzyć tę spódnicę.", answerTr: "Mogę przymierzyć tę spódnicę?" },
          { tr: "Oczywiście. Jaki rozmiar?" },
          { tr: "Powiedz, że rozmiar średni.", answerTr: "Średni, dziękuję." }
        ]
      },
      { tr: "Tamte czarne kozaki są na wyprzedaży." },
      { tr: "Przepraszam, macie tę koszulę w rozmiarze M?" }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Moda i zakupy",
    title: "Ceny, liczby powyżej stu, płacenie",
    objectives: [
      "zapytać o cenę i zrozumieć odpowiedź",
      "policzyć powyżej stu",
      "zapłacić kartą lub gotówką"
    ],
    theory: [
      {
        h: "Liczby powyżej stu",
        p: "<em>Cento</em> nie zmienia formy: <em>duecento, trecento</em>. <em>Mille</em> w liczbie mnogiej staje się <em>-mila</em>: <em>duemila, tremila</em>. Kropka i przecinek działają odwrotnie niż w polskim tylko w zapisie cyfrowym: Włosi piszą <em>1.500</em> i <em>2,50</em>, tak samo jak my."
      },
      {
        h: "Ceny mówi się skrótowo",
        p: "<em>Due e cinquanta</em> = 2,50 €. Słowo <em>euro</em> często wypada, a jeśli zostaje, nie odmienia się: <em>trenta euro</em>, nigdy „euri”."
      },
      {
        h: "Płatność",
        p: "<em>In contanti</em> (gotówką) albo <em>con la carta</em> (kartą). Warto znać <em>lo scontrino</em> (paragon) i <em>la ricevuta</em> (pokwitowanie): we Włoszech paragon ma znaczenie prawne i sprzedawca musi go wydać."
      },
      {
        tip: "<em>Quanto costa?</em> dotyczy jednej rzeczy, <em>quanto costano?</em> wielu. <em>Quant'è?</em> to „ile razem?” przy kasie."
      }
    ],
    grammar: {
      title: "Liczby i pytanie o cenę",
      table: {
        head: ["zapis", "po włosku", "uwaga"],
        rows: [
          ["100 / 200", "cento / duecento", "cento się nie odmienia"],
          ["1000 / 2000", "mille / duemila", "mille → -mila w liczbie mnogiej"],
          ["1500", "millecinquecento", "pisane łącznie"],
          ["2,50 €", "due e cinquanta", "euro często się pomija"],
          ["ile kosztuje?", "quanto costa?", "jedna rzecz"],
          ["ile kosztują?", "quanto costano?", "wiele rzeczy"]
        ]
      },
      examples: [
        { tr: "Ile kosztuje ta torebka? — Osiemdziesiąt pięć euro." },
        { tr: "Ile razem?" },
        { tr: "Mogę zapłacić kartą?" },
        { tr: "Tylko gotówka, przykro mi." },
        { tr: "Poproszę paragon." },
        { tr: "Jest dwadzieścia procent zniżki." }
      ]
    },
    vocab: [
      "ile kosztuje / kosztują?",
      "ile razem?",
      "gotówką",
      "kartą",
      "paragon",
      "reszta",
      "sto / tysiąc",
      "procent",
      "to za drogo",
      "okazja",
      "cena",
      "za darmo"
    ],
    exercises: [
      { q: "Ile to „millecinquecento”?", opts: ["150", "1500", "15000"] },
      {
        q: "Która forma jest poprawna?",
        opts: ["trenta euri", "trenta euro", "trente euro"],
        why: "Euro nie odmienia się w liczbie mnogiej."
      },
      { q: "Zapisz cyfrą: „duemilaventicinque”" },
      {
        q: "Uzupełnij: „___ costano queste scarpe?”",
        why: "Quanto nie odmienia się w tym pytaniu, ale czasownik tak: costano (liczba mnoga)."
      },
      { q: "„Mogę zapłacić kartą?”" },
      {
        q: "Sprzedawca mówi „Sono ventidue e cinquanta”. Ile płacisz?",
        opts: ["22,50 €", "2,25 €", "225 €"]
      },
      {
        q: "Uzupełnij rozmowę przy kasie.",
        tr: "— Ile razem? — Czterdzieści trzy euro. — Mogę zapłacić kartą?"
      },
      { q: "Połącz zwroty.", pairs: ["paragon", "reszta", "gotówką", "za darmo"] },
      { tr: "To sto dwadzieścia euro, z dziesięcioprocentową zniżką." },
      { tr: "Ile kosztują tamte kozaki na wystawie?" }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Gramatyka podstawowa",
    title: "Ilość i intensywność",
    objectives: [
      "odróżnić molto jako przysłówek od molto jako przymiotnika",
      "użyć troppo, poco, tanto, abbastanza",
      "stopniować przymiotnik przez -issimo"
    ],
    theory: [
      {
        h: "Jedno słowo, dwie role",
        p: "<strong>Molto</strong> przed przymiotnikiem lub czasownikiem jest <b>przysłówkiem</b> i się nie odmienia: <em>molto bella</em>, <em>lavoro molto</em>. Przed rzeczownikiem jest <b>przymiotnikiem</b> i dopasowuje końcówkę: <em>molt<b>i</b> amici</em>, <em>molt<b>a</b> gente</em>. Ta sama zasada obowiązuje <em>poco, troppo, tanto</em>."
      },
      {
        h: "Test, który zawsze działa",
        p: "Zadaj pytanie: „ile czego?” → przymiotnik, odmienia się. „jak bardzo?” → przysłówek, forma stała. <em>Ho molti libri</em> (ile książek) kontra <em>Sono molto stanca</em> (jak bardzo zmęczona)."
      },
      {
        h: "Superlatyw na -issimo",
        p: "Odetnij końcówkę przymiotnika i dodaj <em>-issimo/-issima/-issimi/-issime</em>: <em>bello → bellissimo</em>, <em>caro → carissimo</em>. To najczęstszy sposób wzmocnienia — Włosi używają go stale, także wtedy, gdy Polak powiedziałby po prostu „bardzo”."
      },
      {
        trap: "<b>Poco</b> znaczy „mało”, a <b>un po' di</b> — „trochę”. To nie to samo: <em>ho poco tempo</em> (mam mało czasu, narzekam) kontra <em>ho un po' di tempo</em> (mam trochę czasu, wystarczy)."
      }
    ],
    grammar: {
      title: "Molto, poco, troppo, tanto",
      table: {
        head: ["funkcja", "forma", "przykład"],
        rows: [
          ["przysłówek (jak bardzo)", "stała", "È molto caro. / Costa troppo."],
          ["przymiotnik (ile)", "odmienna", "Ho molti amici. / Troppa gente."],
          ["wystarczająco", "abbastanza (stałe)", "È abbastanza grande."],
          ["superlatyw", "-issimo", "carissimo, bellissima"],
          ["za mało / za dużo", "poco / troppo", "Poco sale, troppo pepe."]
        ]
      },
      examples: [
        { tr: "Ta marynarka jest bardzo elegancka.", note: "przysłówek — bez zmiany" },
        { tr: "W sklepie jest dużo ludzi.", note: "przymiotnik — molte" },
        { tr: "Za drogo, mimo wszystko dziękuję." },
        { tr: "Mam mało pieniędzy w tym miesiącu." },
        { tr: "Jest przepiękna!" },
        { tr: "Całkiem nieźle, dziękuję." }
      ]
    },
    vocab: [
      "bardzo / dużo",
      "mało",
      "trochę",
      "za dużo / zbyt",
      "tyle, bardzo dużo",
      "wystarczająco, całkiem",
      "więcej / mniej",
      "przepiękny",
      "bardzo drogi",
      "pieniądze (zawsze l. mn.)",
      "mimo wszystko dziękuję",
      "zastanowię się"
    ],
    exercises: [
      {
        q: "„Ci sono ___ persone.” (dużo ludzi)",
        opts: ["molto", "molte", "molti"],
        why: "Przed rzeczownikiem molto się odmienia; persone to rodzaj żeński w liczbie mnogiej."
      },
      {
        q: "„Questa borsa è ___ cara.” (bardzo droga)",
        opts: ["molta", "molto", "molte"],
        why: "Przed przymiotnikiem molto jest przysłówkiem i nie zmienia formy."
      },
      { q: "Utwórz superlatyw: „bello” → „___”" },
      { q: "Uzupełnij: „Ho ___ tempo oggi.” (mam mało czasu)" },
      {
        q: "W których zdaniach „troppo” jest przysłówkiem (nie odmienia się)?",
        opts: ["Costa troppo.", "C'è troppa gente.", "Sei troppo gentile.", "Ho troppi impegni."]
      },
      { q: "„To za drogo, dziękuję.”" },
      {
        q: "Uzupełnij końcówki (albo wstaw kreskę, jeśli forma się nie zmienia).",
        tr: "Jest dużo sklepów, ale są bardzo drogie."
      },
      { q: "Połącz.", pairs: ["wystarczająco", "za dużo", "trochę", "mało"] },
      { tr: "Jest przepiękna, ale za droga dla mnie." },
      { tr: "Zastanowię się, mimo wszystko dziękuję." }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 4",
    objectives: ["sprawdzić przymiotniki, questo/quello, liczby i molto/poco/troppo"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Le scarpe ___.” (czerwone)" },
      { q: "„I pantaloni ___.” (zielone)" },
      { q: "Wybierz formę „quello”.", items: [, , , ] },
      { q: "Ile to „duemilatrecento”?", opts: ["230", "2300", "23000"] },
      { q: "„Sono ___ stanca.” (bardzo zmęczona)", opts: ["molta", "molto", "molte"] },
      { q: "„Ci sono ___ persone.” (dużo ludzi)" },
      { q: "„Mogę przymierzyć tę koszulę?”" },
      { tr: "Ile kosztują tamte buty?" },
      { tr: "Ta marynarka jest bardzo droga." },
      { tr: "Mogę zapłacić kartą?" }
    ]
  },
  "unit:a1-u05": { title: "Dzień po włosku", grammarNote: "czasowniki zwrotne · godziny · modalne" },
  "lesson:a1-u05-l1": {
    theme: "Życie codzienne",
    title: "Czasowniki zwrotne",
    objectives: [
      "rozpoznać czasownik zwrotny po końcówce -si",
      "odmienić svegliarsi, alzarsi, vestirsi",
      "opowiedzieć o swoim poranku"
    ],
    theory: [
      {
        h: "Czynność skierowana na siebie",
        p: "Bezokolicznik zwrotny kończy się na <strong>-si</strong>: <em>svegliar<b>si</b></em>, <em>alzar<b>si</b></em>. Przy odmianie <em>-si</em> odpada, a przed czasownikiem staje zaimek zwrotny: <em>mi, ti, si, ci, vi, si</em>."
      },
      {
        h: "Zaimek zawsze przed czasownikiem",
        p: "<em><b>Mi</b> sveglio alle sette.</em> Nigdy „sveglio mi”. Wyjątkiem jest bezokolicznik i tryb rozkazujący, gdzie zaimek doczepia się na końcu: <em>devo alzar<b>mi</b></em>, <em>svegliati!</em>"
      },
      {
        contrast: "Polskie „się” jest jedno dla wszystkich osób; włoski ma sześć różnych zaimków. „Budzę się” to <em>mi sveglio</em>, ale „budzimy się” to <em>ci svegliamo</em> — zaimek zmienia się razem z osobą."
      },
      {
        h: "Niektóre czasowniki są zwrotne tylko po włosku",
        p: "<em>Chiamarsi</em> (nazywać się), <em>ricordarsi</em> (pamiętać), <em>dimenticarsi</em> (zapomnieć), <em>arrabbiarsi</em> (złościć się), <em>annoiarsi</em> (nudzić się). Odwrotnie też się zdarza: polskie „uczyć się” to zwykłe <em>studiare</em>."
      }
    ],
    grammar: {
      title: "Svegliarsi (budzić się)",
      table: {
        head: ["osoba", "zaimek", "forma", "przykład"],
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
        { tr: "Wstaję zaraz po budziku." },
        { tr: "Myjesz zęby przed śniadaniem czy po?" },
        { tr: "Ubieramy się w pośpiechu." },
        { tr: "Muszę jutro wcześnie wstać.", note: "zaimek doczepia się do bezokolicznika" },
        { tr: "Nie pamiętam jego imienia." }
      ]
    },
    vocab: [
      "budzić się",
      "wstawać",
      "myć się",
      "ubierać się",
      "czesać się",
      "brać prysznic",
      "jeść śniadanie",
      "wychodzić z domu",
      "odpoczywać",
      "zasypiać",
      "budzik",
      "w pośpiechu"
    ],
    exercises: [
      { why: "Wpisz całą formę razem z zaimkiem, np. „mi sveglio”." },
      {
        q: "Po czym poznasz czasownik zwrotny w słowniku?",
        opts: ["Zaczyna się na samogłoskę", "Kończy się na -si", "Ma akcent na końcu"]
      },
      {
        q: "Uzupełnij: „Noi ___ alle sei.” (wstajemy o szóstej — alzarsi)",
        why: "Zaimek zwrotny dla noi to ci."
      },
      {
        q: "Uzupełnij: „Devo ___ presto.” (muszę wcześnie wstać)",
        hint: "zaimek doczepia się do bezokolicznika",
        why: "Po czasowniku modalnym zaimek doczepia się do bezokolicznika: alzarmi."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Sveglio mi alle sette.", "Mi sveglio alle sette.", "Sveglio alle sette mi."]
      },
      { q: "„Ubieram się w pośpiechu.”" },
      { q: "Uzupełnij opis poranka.", tr: "Budzę się o wpół do siódmej, potem wstaję i biorę prysznic." },
      { tr: "Moja siostra budzi się późno." },
      { tr: "Budzę się o siódmej i od razu wstaję." },
      { tr: "O której zwykle się budzisz?" }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "Życie codzienne",
    title: "Godziny i pory dnia",
    objectives: [
      "podać i zrozumieć godzinę",
      "użyć è / sono poprawnie",
      "umówić się na spotkanie o konkretnej porze"
    ],
    theory: [
      {
        h: "Godziny są w liczbie mnogiej",
        p: "Włoch pyta <em>Che ore sono?</em> („które są godziny”) i odpowiada <em>Sono le tre</em>. Domyślnie chodzi o <em>le ore</em>, dlatego rodzajnik żeński w liczbie mnogiej. Wyjątek: pierwsza godzina, południe i północ są pojedyncze — <em>è l'una</em>, <em>è mezzogiorno</em>, <em>è mezzanotte</em>."
      },
      {
        h: "Minuty",
        p: "Do połowy dodaje się: <em>le tre e dieci</em>. Po połowie zwykle odejmuje od następnej godziny: <em>le quattro meno dieci</em> („za dziesięć czwarta”). Popularne skróty: <em>e un quarto</em> (kwadrans po), <em>e mezza</em> (wpół), <em>meno un quarto</em> (za kwadrans)."
      },
      {
        h: "O której — z przyimkiem",
        p: "Pytanie <em>A che ora?</em>, odpowiedź <em>alle otto</em>, <em>all'una</em>, <em>a mezzogiorno</em>. Przyimek <em>a</em> zlewa się z rodzajnikiem."
      },
      {
        tip: "Rozkłady jazdy, kina i urzędy używają zegara 24-godzinnego: <em>alle diciotto e trenta</em> (18:30). W rozmowie zwykle mówi się <em>alle sei e mezza di sera</em>."
      }
    ],
    grammar: {
      title: "Podawanie godziny",
      table: {
        head: ["zegar", "po włosku", "uwaga"],
        rows: [
          ["13:00", "è l'una", "liczba pojedyncza"],
          ["12:00", "è mezzogiorno", "południe"],
          ["00:00", "è mezzanotte", "północ"],
          ["15:00", "sono le tre", "liczba mnoga"],
          ["15:15", "sono le tre e un quarto", ""],
          ["15:30", "sono le tre e mezza", ""],
          ["15:50", "sono le quattro meno dieci", "odejmowanie"],
          ["o 20:00", "alle otto", "a + le = alle"]
        ]
      },
      examples: [
        { tr: "Która godzina? — Dziewiąta dwadzieścia." },
        { tr: "O której otwiera sklep? — O wpół do dziesiątej." },
        { tr: "Pociąg odjeżdża kwadrans po pierwszej." },
        { tr: "Widzimy się o ósmej wieczorem." },
        { tr: "Jest południe, idziemy na obiad." }
      ]
    },
    vocab: [
      "która godzina?",
      "o której?",
      "południe / północ",
      "kwadrans po / wpół",
      "za kwadrans",
      "rano",
      "po południu",
      "wieczorem / w nocy",
      "wcześnie / późno",
      "punktualnie",
      "spóźniony",
      "widzimy się"
    ],
    exercises: [
      {
        q: "Dlaczego mówi się „è l'una”, a nie „sono l'una”?",
        opts: ["To wyjątek bez powodu", "Bo „una” jest w liczbie pojedynczej", "Bo to forma nieformalna"],
        why: "Wszystkie inne godziny są w liczbie mnogiej (le due, le tre…) i biorą sono."
      },
      { q: "Uzupełnij: „___ le otto e mezza.” (jest wpół do dziewiątej)" },
      { q: "Uzupełnij: „Il film comincia ___ nove.” (o dziewiątej)" },
      {
        q: "Jak powiesz 15:45?",
        opts: ["le tre e quarantacinque", "le quattro meno un quarto", "obie formy są poprawne"],
        why: "Obie działają; „meno un quarto” brzmi bardziej naturalnie w rozmowie."
      },
      { q: "Połącz godzinę z zapisem.", pairs: ["12:00", "14:15", "13:30", "6:50"] },
      { q: "„O której otwiera sklep?”" },
      { q: "Uzupełnij.", tr: "— Która godzina? — Za kwadrans jedenasta. — Jestem spóźniony!" },
      { tr: "Widzimy się o ósmej wieczorem." },
      { tr: "Pociąg odjeżdża o 18:45." },
      { tr: "Przepraszam, która godzina? — Wpół do czwartej." }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Gramatyka podstawowa",
    title: "Czasowniki modalne",
    objectives: [
      "odmienić potere, volere i dovere",
      "poprosić o pozwolenie i wyrazić konieczność",
      "wiedzieć, dlaczego vorrei jest grzeczniejsze niż voglio"
    ],
    theory: [
      {
        h: "Trzy czasowniki, jedna konstrukcja",
        p: "<strong>Potere</strong> (móc), <strong>volere</strong> (chcieć) i <strong>dovere</strong> (musieć) łączą się z bezokolicznikiem <b>bez żadnego przyimka</b>: <em>posso entrare</em>, <em>voglio partire</em>, <em>devo lavorare</em>. Wszystkie trzy są nieregularne, ale ich formy szybko wchodzą w krew, bo używa się ich bez przerwy."
      },
      {
        h: "Voglio brzmi ostro",
        p: "Zdanie <em>voglio un caffè</em> nie jest niegrzeczne gramatycznie, ale w barze zabrzmi jak żądanie. Włosi mówią <strong>vorrei</strong> — to tryb warunkowy od <em>volere</em>, na razie zapamiętaj go jako gotowy zwrot. Cała odmiana pojawi się na poziomie A2."
      },
      {
        h: "Zaimek przy modalnym: dwie pozycje",
        p: "Z czasownikiem zwrotnym możliwe są dwie równie poprawne wersje: <em><b>mi</b> devo alzare</em> albo <em>devo alzar<b>mi</b></em>. Ta sama swoboda dotyczy zaimków dopełnienia: <em>ti posso aiutare</em> = <em>posso aiutarti</em>."
      },
      {
        tip: "<em>Dovere</em> to nie tylko „musieć”, ale też „być winnym”: <em>Ti devo dieci euro</em> — „jestem ci winien dziesięć euro”."
      }
    ],
    grammar: {
      title: "Potere, volere, dovere",
      table: {
        head: ["osoba", "potere", "volere", "dovere"],
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
        { tr: "Mogę wejść?" },
        { tr: "Poproszę kawę.", note: "grzeczniej niż „voglio”" },
        { tr: "Muszę iść, jest późno." },
        { tr: "Nie możemy zapłacić gotówką." },
        { tr: "Chcesz iść z nami?" },
        { tr: "Muszę wcześnie wstać.", note: "obie wersje poprawne" }
      ]
    },
    vocab: [
      "móc",
      "chcieć",
      "musieć",
      "chciałbym / chciałabym",
      "mogę?",
      "jest zakazane",
      "jest dozwolone",
      "trzeba (bezosobowo)",
      "mieć ochotę na",
      "niestety",
      "chętnie",
      "może; oby"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Zamawiasz w restauracji. Co brzmi najlepiej?",
        opts: ["Voglio una pizza.", "Vorrei una pizza.", "Devo una pizza."],
        why: "Vorrei to grzeczna forma warunkowa — standard przy zamawianiu."
      },
      { q: "Uzupełnij: „Noi ___ partire domani.” (musimy wyjechać jutro)" },
      {
        q: "Które zdanie jest błędne?",
        opts: ["Devo di andare.", "Devo andare.", "Devo andarci."],
        why: "Po czasownikach modalnych nie stawia się przyimka przed bezokolicznikiem."
      },
      { q: "„Mogę zapłacić kartą?”" },
      { q: "Uzupełnij.", tr: "Nie mogę przyjść dziś wieczorem, muszę pracować do późna." },
      { tr: "Przepraszam, mogę przymierzyć tę marynarkę?" },
      { tr: "Chciałbym zarezerwować stolik dla dwóch osób." }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Życie codzienne",
    title: "Częstotliwość i dni tygodnia",
    objectives: [
      "ustawić przysłówek częstotliwości we właściwym miejscu",
      "użyć podwójnego przeczenia z mai",
      "nazwać dni tygodnia i mówić o rutynie"
    ],
    theory: [
      {
        h: "Przysłówek idzie zaraz za czasownikiem",
        p: "<em>Vado <b>sempre</b> in palestra il lunedì.</em> Włoski trzyma przysłówek częstotliwości tuż po odmienionym czasowniku, podczas gdy polski przesuwa go swobodnie. Stawianie go na początku zdania jest możliwe, ale brzmi jak podkreślenie."
      },
      {
        h: "Mai wymaga non",
        p: "<strong>Non</strong> vado <strong>mai</strong> al cinema. Włoski używa podwójnego przeczenia i to jest reguła, nie błąd. To samo dotyczy <em>niente</em>, <em>nessuno</em>, <em>più</em>: <em>non ho più tempo</em>, <em>non conosco nessuno</em>."
      },
      {
        h: "Dni tygodnia",
        p: "Piszemy je małą literą, są rodzaju męskiego z wyjątkiem <em>la domenica</em>. Bez rodzajnika oznaczają konkretny dzień (<em>lunedì vado a Roma</em> — w ten poniedziałek), z rodzajnikiem — powtarzalność (<em>il lunedì vado in palestra</em> — w poniedziałki)."
      },
      {
        contrast: "Ta różnica („w poniedziałek” kontra „w poniedziałki”) po polsku wymaga liczby mnogiej, po włosku — tylko rodzajnika. Drobna rzecz, a zmienia sens całego zdania."
      }
    ],
    grammar: {
      title: "Częstotliwość i dni tygodnia",
      table: {
        head: ["przysłówek", "po polsku", "przykład"],
        rows: [
          ["sempre", "zawsze", "Bevo sempre un caffè la mattina."],
          ["di solito", "zwykle", "Di solito lavoro da casa."],
          ["spesso", "często", "Vado spesso al mercato."],
          ["qualche volta / a volte", "czasami", "A volte esco a correre."],
          ["raramente", "rzadko", "Guardo raramente la TV."],
          ["non… mai", "nigdy", "Non prendo mai il taxi."]
        ]
      },
      examples: [
        { tr: "poniedziałek, wtorek, środa, czwartek" },
        { tr: "piątek, sobota, niedziela" },
        { tr: "W soboty śpię do późna.", note: "z rodzajnikiem = zwyczaj" },
        { tr: "W tę sobotę jadę do Florencji.", note: "bez rodzajnika = konkretny dzień" },
        { tr: "Nigdy nie chodzę spać przed północą." }
      ]
    },
    vocab: [
      "zawsze",
      "zwykle",
      "często",
      "czasami",
      "rzadko",
      "nigdy",
      "codziennie",
      "weekend",
      "poniedziałek",
      "sobota",
      "niedziela",
      "raz w tygodniu"
    ],
    exercises: [
      {
        q: "Gdzie zwykle stoi „spesso”?",
        opts: ["Przed podmiotem", "Zaraz po odmienionym czasowniku", "Zawsze na końcu zdania"]
      },
      {
        q: "Uzupełnij: „___ vado ___ al cinema.” (nigdy nie chodzę do kina) — wpisz oba słowa oddzielone spacją w kolejności zdania",
        hint: "podwójne przeczenie",
        why: "Non vado mai — non przed czasownikiem, mai zaraz po nim."
      },
      {
        q: "„Il sabato dormo fino a tardi” znaczy:",
        opts: ["W tę sobotę pośpię dłużej", "W soboty zawsze śpię do późna", "W zeszłą sobotę spałem długo"],
        why: "Rodzajnik przed dniem tygodnia oznacza powtarzalność."
      },
      { tr: "Zwykle pracuję z domu." },
      { q: "Połącz.", pairs: ["zawsze", "rzadko", "czasami", "codziennie"] },
      { q: "„Nigdy nie biorę taksówki.”" },
      {
        q: "Uzupełnij opis tygodnia.",
        tr: "W poniedziałki chodzę na siłownię, ale nigdy nie chodzę w weekend."
      },
      {
        q: "Które zdania są poprawne?",
        opts: ["Non vado mai al cinema.", "Vado mai al cinema.", "Non ho più tempo.", "Ho più non tempo."]
      },
      { tr: "Zwykle wstaję wcześnie, ale w niedziele śpię do późna." },
      { tr: "Często chodzę na targ w sobotę rano." }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 5",
    objectives: ["sprawdzić czasowniki zwrotne, godziny, modalne i częstotliwość"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      {  },
      { q: "„Devo ___ presto.” (muszę wcześnie wstać — alzarsi)" },
      { q: "„___ le due e mezza.” (jest wpół do trzeciej)" },
      { q: "„Il treno parte ___ una.” (o pierwszej)" },
      {  },
      { q: "Najgrzeczniejsza forma zamówienia:", opts: ["Voglio…", "Vorrei…", "Devo…"] },
      {
        q: "„Non vado mai in palestra” znaczy:",
        opts: ["Chodzę czasami", "Nigdy nie chodzę", "Chodzę codziennie"]
      },
      { tr: "Zwykle jem śniadanie o ósmej." },
      { tr: "Budzę się codziennie o wpół do siódmej." },
      { tr: "O której zwykle wstajesz?" }
    ]
  },
  "unit:a1-u06": { title: "W mieście", grammarNote: "przyimki ściągnięte · andare/venire · wskazówki" },
  "lesson:a1-u06-l1": {
    theme: "Miasto i orientacja",
    title: "Przyimki ściągnięte",
    objectives: [
      "połączyć przyimek z rodzajnikiem",
      "opisać, gdzie coś się znajduje",
      "unikać najczęstszego błędu: „a il” zamiast „al”"
    ],
    theory: [
      {
        h: "Pięć przyimków, które muszą się zlać",
        p: "Kiedy po przyimku <em>di, a, da, in, su</em> stoi rodzajnik określony, oba słowa zlewają się w jedno. Nie jest to opcja stylistyczna — <em>a il cinema</em> to po prostu błąd. Pozostałe przyimki (<em>con, per, tra, fra</em>) zostają osobno."
      },
      {
        h: "Wzorzec jest regularny",
        p: "Wystarczy zapamiętać pierwszą literę przyimka i doczepić rodzajnik: <em>a + il = al</em>, <em>a + lo = allo</em>, <em>a + la = alla</em>, <em>a + i = ai</em>, <em>a + gli = agli</em>, <em>a + le = alle</em>. Dokładnie tak samo działa <em>di, da, in, su</em>."
      },
      {
        trap: "<b>In</b> zmienia się w <b>ne-</b>: <em>in + il = nel</em>, nie „inl”. To jedyna nieoczywista forma w całej tabeli."
      },
      {
        h: "Kiedy rodzajnika nie ma, nie ma też ściągnięcia",
        p: "<em>Vado a Roma</em> (miasto — bez rodzajnika), <em>vado in Italia</em> (kraj — bez rodzajnika po in), ale <em>vado al mare</em>, <em>vado alla stazione</em>. Ściągnięcie pojawia się tylko wtedy, gdy rodzajnik naprawdę występuje."
      }
    ],
    grammar: {
      title: "Tabela przyimków ściągniętych",
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
        { tr: "Idę do kina.", note: "a + il" },
        { tr: "Książka jest na stole.", note: "su + il" },
        { tr: "Mieszkam w starym centrum.", note: "in + il" },
        { tr: "Wracam z dworca.", note: "da + la" },
        { tr: "Kluczyk od samochodu.", note: "di + la" },
        { tr: "Pociągiem.", note: "con zwykle zostaje osobno" }
      ]
    },
    vocab: [
      "plac",
      "ulica",
      "centrum",
      "kościół",
      "muzeum",
      "bank",
      "apteka",
      "poczta",
      "sygnalizacja świetlna",
      "skrzyżowanie",
      "most",
      "przystanek"
    ],
    exercises: [
      { q: "Uzupełnij: „Vado ___ cinema.” (a + il)" },
      { q: "Uzupełnij: „Il libro è ___ tavolo.” (su + il)" },
      { q: "Uzupełnij: „Abito ___ centro.” (in + il)" },
      {
        q: "Wybierz właściwą formę „a + rodzajnik”.",
        items: ["dworzec", "lotnisko", "studenci", "restauracja", "godzina 9"]
      },
      {
        q: "Które połączenie NIE ulega ściągnięciu?",
        opts: ["a + il", "con + il", "in + la"],
        why: "Con zwykle zostaje osobno; forma „col” istnieje, ale jest opcjonalna."
      },
      { q: "Uzupełnij opis drogi.", tr: "Apteka jest na rogu, obok banku, naprzeciwko kościoła." },
      { q: "„Wracam z dworca.”" },
      { tr: "Klucz od samochodu jest na stole." },
      { tr: "Poczta jest blisko głównego placu." },
      { tr: "Przepraszam, gdzie jest przystanek autobusowy?" }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "Miasto i orientacja",
    title: "Iść, jechać, przychodzić",
    objectives: [
      "odmienić andare i venire",
      "wybrać a albo in przed celem podróży",
      "odróżnić andare od venire"
    ],
    theory: [
      {
        h: "Kierunek zależy od tego, gdzie stoi rozmówca",
        p: "<strong>Andare</strong> to ruch <b>od</b> mówiącego, <strong>venire</strong> — <b>do</b> mówiącego lub razem z nim. Kiedy ktoś zaprasza Cię do siebie i pytasz „przyjdę?”, po włosku mówisz <em>vengo</em>, nie <em>vado</em>."
      },
      {
        h: "A czy in — reguła praktyczna",
        list: [
          "<b>a</b>: miasta (<em>a Roma</em>), miejsca-czynności (<em>a scuola, a casa, a letto, al lavoro, al cinema, al mare</em>)",
          "<b>in</b>: kraje i regiony (<em>in Italia, in Toscana</em>), pomieszczenia i instytucje (<em>in banca, in ufficio, in farmacia, in centro</em>), środki transportu (<em>in treno, in macchina, in bici</em>)",
          "<b>da</b>: do osoby (<em>vado dal medico, vado da Marco</em>)"
        ]
      },
      {
        trap: "<em>A piedi</em> („pieszo”) łamie regułę środków transportu — bo pieszo się nie „jedzie”. Zapamiętaj jako wyjątek."
      },
      {
        contrast: "Polskie „do” obsługuje wszystko: do Rzymu, do banku, do lekarza. Włoski rozdziela to na trzy przyimki. Nie próbuj tłumaczyć słowo w słowo — ucz się całych połączeń."
      }
    ],
    grammar: {
      title: "Andare i venire",
      table: {
        head: ["osoba", "andare", "venire", "przykład"],
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
        { tr: "Jadę do Rzymu pociągiem." },
        { tr: "Jadę do Włoch we wrześniu." },
        { tr: "Idę do dentysty o trzeciej." },
        { tr: "Przyjdziesz na imprezę? — Tak, chętnie." },
        { tr: "Idziemy pieszo, jest blisko." },
        { tr: "Skąd pochodzisz? — Z Polski." }
      ]
    },
    vocab: [
      "iść, jechać",
      "przychodzić, przyjeżdżać",
      "pieszo",
      "samochodem",
      "autobusem",
      "rowerem",
      "metrem",
      "blisko / daleko",
      "tu / tam",
      "razem",
      "sam / sama",
      "zajmuje pół godziny"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Ktoś zaprasza Cię do siebie. Jak potwierdzasz?",
        opts: ["Sì, vado!", "Sì, vengo!", "Sì, andiamo!"],
        why: "Ruch w stronę rozmówcy to venire."
      },
      { q: "Uzupełnij: „Vado ___ Italia.” (do Włoch)" },
      { q: "Uzupełnij: „Vado ___ Milano.” (do Mediolanu)" },
      { q: "Uzupełnij: „Vado ___ medico.” (do lekarza)" },
      {
        q: "Które połączenia są poprawne?",
        opts: ["in treno", "a treno", "a piedi", "in piedi", "in banca"],
        why: "„In piedi” istnieje, ale znaczy „na stojąco”, nie „pieszo”."
      },
      { tr: "Idziemy pieszo, jest blisko." },
      { tr: "Idę z wami, ale jedziemy metrem." },
      { tr: "Idę do centrum pieszo, zajmuje to pół godziny." }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "Miasto i orientacja",
    title: "Pytanie o drogę",
    objectives: [
      "zapytać o drogę i zrozumieć odpowiedź",
      "użyć trybu rozkazującego w formie tu",
      "opisać położenie przy pomocy przyimków"
    ],
    theory: [
      {
        h: "Tryb rozkazujący w formie tu",
        p: "Wskazówki drogi podaje się w trybie rozkazującym. Dla czasowników <b>-are</b> forma <em>tu</em> jest identyczna z trzecią osobą czasu teraźniejszego: <em>gira!</em>, <em>continua!</em>. Dla <b>-ere</b> i <b>-ire</b> — z drugą osobą: <em>prendi!</em>, <em>segui!</em>"
      },
      {
        h: "Cztery formy skrócone",
        p: "<em>andare → va'</em>, <em>fare → fa'</em>, <em>dare → da'</em>, <em>stare → sta'</em>, <em>dire → di'</em>. Apostrof zastępuje ucięte litery. W praktyce usłyszysz też pełne <em>vai</em> i <em>fai</em> — obie wersje są w użyciu."
      },
      {
        h: "Formalnie: przez Lei",
        p: "Wobec obcej osoby wskazówki brzmią inaczej: <em>giri a destra</em>, <em>prenda la prima a sinistra</em>, <em>vada dritto</em>. To forma trybu łączącego, którą na razie zapamiętaj jako gotowe zwroty."
      },
      {
        tip: "Najbardziej użyteczna odpowiedź, gdy nie zrozumiesz: <em>Può ripetere più lentamente, per favore?</em> Włosi mówią szybko i prawie nikt nie zwolni, jeśli o to nie poprosisz."
      }
    ],
    grammar: {
      title: "Wskazówki drogi",
      table: {
        head: ["nieformalnie (tu)", "formalnie (Lei)", "po polsku"],
        rows: [
          ["vai dritto", "vada dritto", "idź / proszę iść prosto"],
          ["gira a destra", "giri a destra", "skręć w prawo"],
          ["gira a sinistra", "giri a sinistra", "skręć w lewo"],
          ["prendi la prima strada", "prenda la prima strada", "skręć w pierwszą ulicę"],
          ["attraversa la piazza", "attraversi la piazza", "przejdź przez plac"],
          ["continua fino al semaforo", "continui fino al semaforo", "idź aż do świateł"]
        ]
      },
      examples: [
        { tr: "Przepraszam, gdzie jest dworzec?" },
        { tr: "Jest tuż obok, dwa kroki stąd." },
        { tr: "Proszę iść prosto i skręcić w drugą w prawo." },
        { tr: "Jest naprzeciwko banku, obok apteki." },
        { tr: "Ile to pieszo? — Dziesięć minut." },
        { tr: "Zgubiłem się, może mi pan pomóc?" }
      ]
    },
    vocab: [
      "gdzie jest…?",
      "w prawo / w lewo",
      "prosto",
      "naprzeciwko",
      "obok",
      "blisko / daleko od",
      "za / przed",
      "między… a…",
      "skręcać",
      "przechodzić przez",
      "zgubiłem się / zgubiłam się",
      "dwa kroki stąd"
    ],
    exercises: [
      { q: "„Gira a sinistra” znaczy:", opts: ["Skręć w prawo", "Skręć w lewo", "Idź prosto"] },
      { q: "Formalna wersja „vai dritto” to:", opts: ["va dritto", "vada dritto", "andare dritto"] },
      { q: "Uzupełnij: „___ la stazione?” (gdzie jest dworzec)" },
      { q: "Połącz przyimki miejsca.", pairs: ["naprzeciwko", "obok", "za", "między… a…"] },
      {
        q: "Uzupełnij wskazówki.",
        tr: "Proszę iść prosto do świateł, potem skręcić w prawo. Bank jest naprzeciwko apteki."
      },
      { q: "„Przepraszam, gdzie jest apteka?”" },
      {
        q: "Zgubiłeś się w centrum.",
        setting: "Wąska uliczka, przechodzień wygląda na miejscowego.",
        lines: [
          { tr: "Zaczep grzecznie i zapytaj o dworzec.", answerTr: "Przepraszam, gdzie jest dworzec?" },
          { tr: "Więc: proszę iść prosto, potem skręcić w drugą w prawo." },
          {
            tr: "Powiedz, że nie zrozumiałeś, i poproś o powtórzenie.",
            answerTr: "Nie rozumiem, może pan powtórzyć wolniej?"
          },
          { tr: "Jasne. Prosto… a potem druga w prawo. Dziesięć minut pieszo." },
          { tr: "Podziękuj.", answerTr: "Bardzo dziękuję, miło z pana strony!" }
        ]
      },
      { tr: "Muzeum jest między placem a mostem." },
      { tr: "Proszę iść prosto i przejść przez plac." },
      { tr: "Zgubiłam się, może mi pan pomóc?" }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "Miasto i orientacja",
    title: "Opisywanie miejsca",
    objectives: [
      "opisać, co znajduje się w mieście lub w mieszkaniu",
      "użyć c'è / ci sono w przeczeniu i pytaniu",
      "połączyć to z przyimkami miejsca"
    ],
    theory: [
      {
        h: "Istnienie kontra cecha",
        p: "<strong>C'è</strong> i <strong>ci sono</strong> mówią, że coś <b>jest gdzieś</b>. <em>Essere</em> mówi, <b>jakie</b> coś jest. <em>C'è un museo in centro</em> (jest muzeum) kontra <em>Il museo è bellissimo</em> (muzeum jest piękne)."
      },
      {
        h: "Przeczenie i pytanie",
        p: "<em>Non c'è</em> / <em>non ci sono</em>; pytanie tylko intonacją: <em>C'è un bagno qui?</em> W odpowiedziach bardzo częste są krótkie formy: <em>Sì, c'è.</em> / <em>No, non c'è.</em>"
      },
      {
        h: "Ci to nie tylko „tam”",
        p: "Ta sama cząstka <em>ci</em> wraca w wielu miejscach: <em>ci vuole</em> (potrzeba), <em>ci metto</em> (zajmuje mi), <em>ci vado</em> (idę tam). Na razie wystarczy rozpoznawać ją w tych zwrotach; pełne wyjaśnienie czeka na poziomie B1."
      },
      {
        tip: "W restauracji i barze przydaje się <em>C'è il bagno?</em> oraz <em>Non c'è il wifi?</em> — to najczęstsze pytania turysty, które działają dosłownie wszędzie."
      }
    ],
    grammar: {
      title: "C'è / ci sono",
      table: {
        head: ["forma", "użycie", "przykład"],
        rows: [
          ["c'è", "jedna rzecz", "C'è una farmacia qui vicino."],
          ["ci sono", "wiele rzeczy", "Ci sono due farmacie."],
          ["non c'è", "przeczenie l.poj.", "Non c'è il wifi."],
          ["non ci sono", "przeczenie l.mn.", "Non ci sono tavoli liberi."],
          ["c'è…?", "pytanie", "C'è un bancomat qui?"],
          ["quanto c'è?", "odległość", "Quanto c'è da qui al centro?"]
        ]
      },
      examples: [
        { tr: "W mojej dzielnicy jest targ w każdą sobotę." },
        { tr: "W tym okresie jest dużo turystów." },
        { tr: "Nie ma nikogo w recepcji." },
        { tr: "Jest toaleta? — Tak, na końcu po prawej." },
        { tr: "Jak daleko stąd na dworzec?" }
      ]
    },
    vocab: [
      "dzielnica",
      "łazienka, toaleta",
      "bankomat",
      "supermarket",
      "parking",
      "park",
      "szpital",
      "biblioteka",
      "nikt",
      "coś",
      "w tych okolicach",
      "w głębi, na końcu"
    ],
    exercises: [
      { q: "Uzupełnij: „___ un bancomat qui vicino?”" },
      { q: "Uzupełnij: „___ due farmacie in questa via.”" },
      {
        q: "Które zdanie opisuje cechę, a nie istnienie?",
        opts: ["C'è un museo in centro.", "Il museo è molto grande.", "Ci sono tre musei."]
      },
      { q: "Zaprzecz: „C'è il wifi.” → „___ il wifi.”" },
      { q: "Opisz dzielnicę.", tr: "W mojej dzielnicy jest park, ale nie ma supermarketów." },
      { q: "„Nie ma nikogo w recepcji.”" },
      { q: "Połącz.", pairs: ["parking", "szpital", "biblioteka", "dzielnica"] },
      { tr: "Czy w okolicy jest apteka?" },
      { tr: "W dzielnicy są dwa parki i biblioteka." },
      { tr: "Przepraszam, jest toaleta? — Tak, na końcu po prawej." }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 6",
    objectives: ["sprawdzić przyimki ściągnięte, andare/venire, wskazówki i c'è/ci sono"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "a + rodzajnik:", items: [, , , ] },
      { q: "„Il libro è ___ tavolo.” (su + il)" },
      { q: "„Abito ___ centro.” (in + il)" },
      {  },
      { q: "„Vado ___ Italia.”" },
      { q: "„Vado ___ dentista.”" },
      { q: "Formalna wersja „gira a destra”:", opts: ["giri a destra", "gira a destra", "girare a destra"] },
      { q: "„___ tavoli liberi?” (są wolne stoliki?)" },
      { tr: "Proszę iść prosto, bank jest naprzeciwko kościoła." },
      { tr: "Przepraszam, gdzie jest przystanek autobusowy?" }
    ]
  },
  "unit:a1-u07": { title: "Przy stole", grammarNote: "zamawianie · ne · struktura włoskiego posiłku" },
  "lesson:a1-u07-l1": {
    theme: "Restauracja",
    title: "Rezerwacja i wejście",
    objectives: [
      "zarezerwować stolik i wejść do restauracji",
      "zrozumieć pytania kelnera",
      "poprosić o kartę i o miejsce na zewnątrz"
    ],
    theory: [
      {
        h: "Rytm zamawiania jest stały",
        p: "Włoska restauracja pracuje w ustalonej kolejności: <em>antipasto</em> (przystawka), <em>primo</em> (makaron, ryż, zupa), <em>secondo</em> (mięso lub ryba), <em>contorno</em> (dodatek, zamawiany osobno!), <em>dolce</em>, <em>caffè</em>. Nikt nie oczekuje, że zamówisz wszystko — ale kelner zapyta po kolei."
      },
      {
        h: "Contorno to osobna pozycja",
        p: "Warzywa i frytki <b>nie są</b> dodatkiem do dania głównego, tylko oddzielnym zamówieniem. To najczęstsze zaskoczenie: <em>secondo</em> przychodzi sam na talerzu."
      },
      {
        h: "Coperto i servizio",
        p: "<em>Il coperto</em> (2-4 €) to opłata za nakrycie, chleb i obsługę — jest legalna i widnieje w menu. Napiwek nie jest obowiązkowy; zaokrągla się rachunek albo zostawia kilka euro, jeśli obsługa była dobra."
      },
      {
        tip: "<em>Il conto, per favore</em> trzeba powiedzieć samemu. Kelner nie przyniesie rachunku sam z siebie — uznałby to za wypraszanie gościa."
      }
    ],
    grammar: {
      title: "Zwroty przy stole",
      table: {
        head: ["sytuacja", "po włosku", "po polsku"],
        rows: [
          ["rezerwacja", "Vorrei prenotare un tavolo per due.", "Chciałbym zarezerwować stolik dla dwóch."],
          ["bez rezerwacji", "C'è un tavolo libero?", "Jest wolny stolik?"],
          ["na zewnątrz", "Possiamo sederci fuori?", "Możemy usiąść na zewnątrz?"],
          ["karta", "Il menù, per favore.", "Poproszę kartę."],
          ["zamówienie", "Per me una carbonara.", "Dla mnie carbonara."],
          ["rachunek", "Il conto, per favore.", "Poproszę rachunek."]
        ]
      },
      examples: [
        { tr: "Dobry wieczór, mają państwo rezerwację?" },
        { tr: "Nie, jest nas dwoje. Jest miejsce?" },
        { tr: "W środku czy na zewnątrz?" },
        { tr: "Co pan poleca?" },
        { tr: "Mam alergię na orzechy." },
        { tr: "Wszystko było wyśmienite, gratulacje." }
      ]
    },
    vocab: [
      "rezerwować",
      "stolik",
      "karta dań",
      "przystawka",
      "pierwsze danie",
      "drugie danie",
      "dodatek (osobno!)",
      "deser",
      "rachunek",
      "opłata za nakrycie",
      "jest nas dwoje",
      "co pan poleca?"
    ],
    dialogue: [
      "Dobry wieczór, mają państwo rezerwację?",
      "Nie, jest nas dwoje. Jest wolny stolik?",
      "W środku czy na zewnątrz?",
      "Na zewnątrz, jeśli można. Dziękuję.",
      "Oczywiście, proszę siadać. Oto karta."
    ],
    exercises: [
      {
        q: "Co to jest „il contorno”?",
        opts: ["Deser", "Dodatek warzywny, zamawiany osobno", "Opłata za nakrycie"]
      },
      { q: "Co znaczy „il coperto”?", opts: ["Danie mięsne", "Opłata za nakrycie i chleb", "Napiwek"] },
      { q: "Uzupełnij: „Vorrei ___ un tavolo per due.”" },
      { q: "„Poproszę rachunek.”" },
      {
        q: "Ułóż kolejność posiłku — połącz nazwę z opisem.",
        pairs: ["przystawka", "makaron lub zupa", "mięso lub ryba", "deser"]
      },
      { tr: "Nie, jest nas dwoje. Jest wolny stolik?" },
      {
        q: "Wchodzisz do restauracji bez rezerwacji.",
        setting: "Piątek, 20:30, mała trattoria.",
        lines: [
          { tr: "Dobry wieczór! Mają państwo rezerwację?" },
          {
            tr: "Powiedz, że nie, i zapytaj o wolny stolik dla dwóch.",
            answerTr: "Nie, jest stolik dla dwóch?"
          },
          { tr: "Tak, ale tylko w środku. Może być?" },
          { tr: "Zgódź się i poproś o kartę.", answerTr: "Może być, poproszę kartę." }
        ]
      },
      { tr: "Chciałbym zarezerwować stolik dla czterech osób na ósmą." },
      { tr: "Dobry wieczór, jest nas dwoje. Jest miejsce na zewnątrz?" }
    ]
  },
  "lesson:a1-u07-l2": {
    theme: "Restauracja",
    title: "Zamawianie dania",
    objectives: ["zamówić konkretne danie i napój", "zapytać o skład dania", "zgłosić alergię lub dietę"],
    theory: [
      {
        h: "Trzy sposoby zamówienia",
        p: "<em>Per me una carbonara</em> (dla mnie…), <em>Prendo una carbonara</em> (biorę…), <em>Vorrei una carbonara</em> (chciałbym…). Wszystkie trzy są normalne; <em>vorrei</em> brzmi najgrzeczniej, <em>prendo</em> najbardziej naturalnie."
      },
      {
        h: "Pytania o skład",
        p: "<em>Cosa c'è dentro?</em> („co jest w środku?”), <em>Contiene glutine?</em>, <em>È piccante?</em>, <em>È senza lattosio?</em> Restauracje mają obowiązek podać alergeny, więc pytanie nikogo nie dziwi."
      },
      {
        h: "Woda: pytanie, którego nie unikniesz",
        p: "<em>Naturale o frizzante?</em> — niegazowana czy gazowana. Woda z kranu (<em>acqua del rubinetto</em>) bywa dostępna, ale w wielu miejscach po prostu jej nie podają."
      },
      {
        tip: "Kawę zamawia się <b>po</b> deserze, nigdy w trakcie posiłku, i nigdy jako cappuccino. <em>Un caffè</em> po obiedzie to część rytuału, nie napój do jedzenia."
      }
    ],
    grammar: {
      title: "Zamawianie i pytania o danie",
      table: {
        head: ["funkcja", "zwrot", "po polsku"],
        rows: [
          ["zamówienie", "Per me / Prendo / Vorrei…", "Dla mnie / Biorę / Chciałbym…"],
          ["napój", "Da bere, una bottiglia d'acqua.", "Do picia butelkę wody."],
          ["skład", "Cosa c'è dentro?", "Co jest w środku?"],
          ["alergia", "Sono allergico/a a…", "Mam alergię na…"],
          ["dieta", "Sono vegetariano/a.", "Jestem wegetarianinem/wegetarianką."],
          ["bez czegoś", "Senza cipolla, per favore.", "Bez cebuli poproszę."]
        ]
      },
      examples: [
        { tr: "Dla mnie carbonara i sałatka mieszana." },
        { tr: "Do picia? — Woda niegazowana, dziękuję." },
        { tr: "Co jest w amatriciana?" },
        { tr: "Mam alergię na owoce morza." },
        { tr: "Czy to danie jest bezglutenowe?" },
        { tr: "Kawa na koniec, dziękuję." }
      ]
    },
    vocab: [
      "makaron",
      "mięso / ryba",
      "sałatka",
      "warzywa",
      "woda niegazowana / gazowana",
      "wino domowe",
      "bezglutenowy",
      "wegetariański / wegański",
      "mam alergię na…",
      "ostry",
      "krwisty / dobrze wysmażony",
      "do picia"
    ],
    culture: {
      title: "Okiem Włocha: czego nie zamawiać",
      text: "<p><b>Spaghetti bolognese</b> nie istnieją we włoskim menu. W Bolonii je się <i>tagliatelle al ragù</i>, a spaghetti z tym sosem to wynalazek zagraniczny.</p><p><b>Fettuccine Alfredo</b> to danie amerykańskie. <b>Ser do ryby</b> uchodzi za wykroczenie, a proszenie o parmezan do owoców morza wywoła uprzejmą, ale wyraźną reakcję.</p><p><b>Ananas na pizzy</b> istnieje w niektórych pizzeriach turystycznych. To wybór, którego można dokonać — ale świadomie.</p>"
    },
    exercises: [
      {
        q: "Kelner pyta „Naturale o frizzante?”. O co chodzi?",
        opts: ["O rodzaj makaronu", "O wodę: niegazowana czy gazowana", "O stopień wysmażenia"]
      },
      { q: "Uzupełnij: „Sono ___ ai frutti di mare.” (mam alergię na owoce morza, kobieta)" },
      { q: "„Dla mnie carbonara, poproszę.”" },
      {
        q: "Kiedy Włosi piją kawę przy posiłku?",
        opts: ["W trakcie dania głównego", "Po deserze", "Zamiast wody"]
      },
      { q: "Połącz.", pairs: ["bezglutenowy", "ostry", "dobrze wysmażony", "do picia"] },
      {
        q: "Uzupełnij zamówienie.",
        tr: "Dla mnie makaron z pomidorami, bez cebuli. Do picia woda niegazowana."
      },
      { tr: "Co jest w tym daniu?" },
      {
        q: "Kelner przyjmuje zamówienie.",
        setting: "Trattoria, stolik przy oknie.",
        lines: [
          { tr: "No to co państwo biorą?" },
          { tr: "Zamów cacio e pepe.", answerTr: "Dla mnie cacio e pepe." },
          { tr: "Świetnie. A do picia?" },
          { tr: "Poproś o butelkę wody niegazowanej.", answerTr: "Butelkę wody niegazowanej." },
          { tr: "Doskonale. Dodatek?" },
          { tr: "Odmów uprzejmie.", answerTr: "Nie, dziękuję, tak jest dobrze." }
        ]
      },
      { tr: "Jestem wegetarianką, czy to danie zawiera mięso?" },
      { tr: "Wezmę cacio e pepe. Do picia woda gazowana." }
    ]
  },
  "lesson:a1-u07-l3": {
    theme: "Gramatyka podstawowa",
    title: "Cząstka ne — pierwsze spotkanie",
    objectives: [
      "zastąpić powtarzany rzeczownik cząstką ne",
      "odpowiedzieć na pytanie o ilość",
      "rozpoznać ne w codziennych zwrotach"
    ],
    theory: [
      {
        h: "Ne zastępuje część całości",
        p: "Kiedy mówisz o <b>ilości</b> czegoś, o czym już była mowa, powtórzenie rzeczownika brzmi ciężko. <em>Quante mele vuoi? — <b>Ne</b> voglio tre.</em> Cząstka <em>ne</em> znaczy tu „z nich”, „tego”. Po polsku często nie tłumaczymy jej wcale: „Chcę trzy”."
      },
      {
        h: "Gdzie stoi",
        p: "Przed odmienionym czasownikiem, dokładnie jak zaimki: <em>ne prendo due</em>, <em>non ne voglio</em>. Przy bezokoliczniku doczepia się na końcu: <em>vorrei prender<b>ne</b> due</em>."
      },
      {
        h: "Ne zastępuje też „di + coś”",
        p: "<em>Parliamo del progetto? — Sì, <b>ne</b> parliamo domani.</em> („Porozmawiamy o nim jutro.”) To użycie rozwiniemy na poziomie B1; teraz wystarczy je rozpoznawać."
      },
      {
        tip: "Bardzo częste zwroty z <em>ne</em>: <em>Non ne so nulla</em> (nic o tym nie wiem), <em>Che ne pensi?</em> (co o tym sądzisz?), <em>Me ne vado</em> (idę sobie)."
      }
    ],
    grammar: {
      title: "Ne w wyrażeniach ilości",
      table: {
        head: ["pytanie", "odpowiedź z ne", "po polsku"],
        rows: [
          ["Quante mele vuoi?", "Ne voglio tre.", "Chcę trzy."],
          ["Prendi il vino?", "Ne prendo un bicchiere.", "Wezmę kieliszek."],
          ["Hai fratelli?", "Sì, ne ho due.", "Tak, mam dwóch."],
          ["Vuoi ancora pasta?", "No, grazie, non ne voglio più.", "Nie, dziękuję, już nie chcę."],
          ["Che ne pensi?", "—", "Co o tym sądzisz?"]
        ]
      },
      examples: [
        { tr: "Ile kaw pijesz dziennie? — Piję trzy." },
        { tr: "Chcesz chleba? — Tak, wezmę trochę." },
        { tr: "Masz dzieci? — Mam jedną córkę." },
        { tr: "Nic o tym nie wiem." },
        { tr: "Chciałbym wziąć dwa.", note: "przy bezokoliczniku ne doczepia się" }
      ]
    },
    vocab: [
      "z tego, o tym (cząstka)",
      "ile (m / ż)",
      "jeszcze",
      "jeszcze jeden / jedna",
      "kawałek",
      "plasterek, kawałek (ciasta)",
      "szklanka, kieliszek",
      "porcja",
      "wystarczy",
      "co o tym sądzisz?",
      "nic o tym nie wiem",
      "idę sobie"
    ],
    exercises: [
      {
        q: "„Quante birre prendi? — Ne prendo due.” Co zastępuje „ne”?",
        opts: ["Ciebie", "„birre” — rzecz, o której mowa", "Nic, to ozdobnik"]
      },
      { q: "Odpowiedz: „Hai fratelli? — Sì, ___ ho due.”" },
      { q: "Uzupełnij: „Vuoi del pane? — Sì, ___ prendo un po'.”" },
      {
        q: "Gdzie stoi „ne” przy bezokoliczniku?",
        opts: ["Przed: „ne prendere”", "Doczepione na końcu: „prenderne”", "Na końcu zdania"]
      },
      { q: "„Ile kaw pijesz dziennie? — Piję trzy.”" },
      {
        q: "Połącz zwrot ze znaczeniem.",
        pairs: ["co o tym sądzisz?", "nic o tym nie wiem", "idę sobie", "wezmę dwa"]
      },
      {
        q: "Uzupełnij rozmowę.",
        tr: "— Chcesz jeszcze wina? — Nie, dziękuję, już nie chcę. — A ty? — Tak, wezmę jeszcze kieliszek."
      },
      { tr: "Chciałbym wziąć dwa." },
      { tr: "Ile kawałków ciasta chcesz? — Chcę jeden, dziękuję." },
      { tr: "Masz rodzeństwo? — Tak, mam dwóch braci." }
    ]
  },
  "lesson:a1-u07-l4": {
    theme: "Restauracja",
    title: "Płacenie i wychodzenie",
    objectives: [
      "poprosić o rachunek i zapłacić",
      "podzielić rachunek między osoby",
      "wyrazić opinię o posiłku"
    ],
    theory: [
      {
        h: "Rachunek trzeba poprosić",
        p: "Kelner nie przyniesie rachunku bez pytania — w kulturze włoskiej byłoby to pospieszaniem gościa. Standardowe zdanie: <em>Il conto, per favore</em> albo <em>Possiamo avere il conto?</em> Gest pisania w powietrzu też działa."
      },
      {
        h: "Dzielenie rachunku",
        p: "<strong>Alla romana</strong> znaczy „po równo, każdy tyle samo”. <em>Paghiamo alla romana</em> to najczęstsza formuła. Jeśli chcesz osobne rachunki: <em>Conti separati, per favore</em> — możliwe, ale w małych lokalach bywa problemem."
      },
      {
        h: "Opinia o posiłku",
        p: "<em>Era tutto buonissimo</em>, <em>Complimenti al cuoco</em>, <em>Squisito</em>. Włosi chwalą jedzenie wprost i oczekują tego samego — milczenie po dobrym posiłku bywa odbierane jako chłód."
      },
      {
        tip: "<em>Offro io</em> („ja stawiam”) to zdanie, o które warto się bić. Odmowa gościa jest częścią rytuału, ale zwykle wygrywa ten, kto zaprosił."
      }
    ],
    grammar: {
      title: "Rachunek i pożegnanie",
      table: {
        head: ["sytuacja", "po włosku", "po polsku"],
        rows: [
          ["prośba", "Il conto, per favore.", "Poproszę rachunek."],
          ["po równo", "Paghiamo alla romana.", "Płacimy po równo."],
          ["osobno", "Conti separati, per favore.", "Osobne rachunki poproszę."],
          ["ja stawiam", "Offro io.", "Ja stawiam."],
          ["karta", "Si può pagare con la carta?", "Można zapłacić kartą?"],
          ["pochwała", "Era tutto buonissimo!", "Wszystko było wyśmienite!"]
        ]
      },
      examples: [
        { tr: "Możemy prosić o rachunek?" },
        { tr: "Nakrycie to dwa euro od osoby." },
        { tr: "Niestety terminal nie działa." },
        { tr: "Proszę zatrzymać resztę." },
        { tr: "Gratulacje dla kucharza, wyśmienite!" },
        { tr: "Miłego wieczoru!" }
      ]
    },
    vocab: [
      "rachunek",
      "po równo",
      "osobne rachunki",
      "ja stawiam",
      "napiwek",
      "terminal płatniczy",
      "reszta",
      "wyśmienity",
      "gratulacje",
      "wszystko było wyśmienite",
      "miłego wieczoru",
      "wrócimy"
    ],
    exercises: [
      {
        q: "Co znaczy „pagare alla romana”?",
        opts: ["Zapłacić gotówką", "Podzielić rachunek po równo", "Zapłacić za wszystkich"]
      },
      {
        q: "Dlaczego kelner nie przynosi rachunku sam?",
        opts: ["Bo zapomina", "Bo byłoby to pospieszaniem gościa", "Bo to zabronione"]
      },
      { q: "„Możemy prosić o rachunek?”" },
      { q: "Uzupełnij: „___ io!” (ja stawiam)" },
      { q: "Połącz.", pairs: ["napiwek", "reszta", "wyśmienity", "osobne rachunki"] },
      {
        q: "Uzupełnij zakończenie kolacji.",
        tr: "— Wszystko było wyśmienite, gratulacje! — Dziękuję! — Poproszę rachunek. Można zapłacić kartą?"
      },
      { tr: "Płacimy po równo, dziękuję." },
      {
        q: "Koniec kolacji.",
        setting: "Talerze puste, kelner przechodzi obok.",
        lines: [
          { tr: "Poproś o rachunek.", answerTr: "Poproszę rachunek." },
          { tr: "Już podaję. Wszystko dobrze dziś wieczorem?" },
          { tr: "Pochwal jedzenie.", answerTr: "Wszystko było wyśmienite, gratulacje!" },
          { tr: "Bardzo dziękuję! To czterdzieści sześć euro." },
          { tr: "Zapytaj, czy można kartą.", answerTr: "Można zapłacić kartą?" }
        ]
      },
      { tr: "Rachunek to czterdzieści sześć euro, z nakryciem." },
      { tr: "Wszystko było wyśmienite, gratulacje dla kucharza!" }
    ]
  },
  "lesson:a1-u07-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 7",
    objectives: ["sprawdzić słownictwo restauracyjne, zamawianie i cząstkę ne"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Il contorno” to:", opts: ["deser", "dodatek warzywny", "opłata za nakrycie"] },
      { q: "„Il coperto” to:", opts: ["danie mięsne", "opłata za nakrycie", "napiwek"] },
      { q: "„Vorrei ___ un tavolo per due.”" },
      { q: "„Hai fratelli? — Sì, ___ ho due.”" },
      { q: "„Sono ___ ai frutti di mare.” (kobieta)" },
      { q: "„Poproszę rachunek.”" },
      { q: "Połącz.", pairs: ["po równo", "ja stawiam", "wyśmienity", "do picia"] },
      { tr: "Dla mnie carbonara, bez cebuli." },
      { tr: "Do picia weźmiemy butelkę wody niegazowanej." },
      { tr: "Możemy prosić o rachunek?" }
    ]
  }
});
