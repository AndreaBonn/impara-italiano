/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a2-01.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a2-u01": { title: "Wczoraj i dziś", grammarNote: "imperfetto · imperfetto kontra passato prossimo" },
  "lesson:a2-u01-l1": {
    theme: "Wspomnienia",
    title: "Imperfetto: opis i zwyczaj",
    objectives: [
      "utworzyć imperfetto dla wszystkich koniugacji",
      "opisać, jak było kiedyś",
      "opowiedzieć o zwyczajach z przeszłości"
    ],
    theory: [
      {
        h: "Czas przeszły bez granic",
        p: "<strong>Imperfetto</strong> nie mówi, kiedy coś się zaczęło ani skończyło. Opisuje tło, stan, zwyczaj: <em>da bambino abitavo in campagna</em> („jako dziecko mieszkałem na wsi”). Polskie zdanie „mieszkałem” bez dodatkowych słów nie rozróżnia tego od „zamieszkałem” — włoski rozróżnia i to jest sedno tej lekcji."
      },
      {
        h: "Odmiana jest niemal bez wyjątków",
        p: "Temat bezokolicznika + <em>-vo, -vi, -va, -vamo, -vate, -vano</em>. Cztery czasowniki mają nietypowy temat: <em>essere</em> (ero, eri, era…), <em>fare</em> (facevo), <em>dire</em> (dicevo), <em>bere</em> (bevevo). To wszystko — imperfetto jest najregularniejszym czasem włoskim."
      },
      {
        h: "Trzy typowe użycia",
        list: [
          "<b>opis</b>: <em>Era una giornata fredda, pioveva.</em>",
          "<b>zwyczaj</b>: <em>Ogni estate andavamo al mare.</em>",
          "<b>stan lub uczucie</b>: <em>Ero stanca, non avevo voglia di uscire.</em>"
        ]
      },
      {
        contrast: "Polski oddaje tę różnicę aspektem czasownika: „chodziłem” (imperfetto) kontra „poszedłem” (passato prossimo). To dobra kotwica — jeśli po polsku użyłbyś czasownika niedokonanego, po włosku prawdopodobnie potrzebujesz imperfetto."
      }
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
        { tr: "Jako dziecko spędzałam lato u dziadków." },
        { tr: "Był szary dzień i było zimno." },
        { tr: "Kiedyś paliłem, teraz rzuciłem." },
        { tr: "Nie wiedziałem, że tu mieszkasz." },
        { tr: "Kiedy się uczyłem, słuchałem radia." },
        { tr: "Czym zajmował się twój dziadek?" }
      ]
    },
    vocab: [
      "jako dziecko",
      "kiedyś",
      "kiedyś, wcześniej",
      "zwykle",
      "każdego lata",
      "często",
      "wspomnienie",
      "dzieciństwo",
      "dziadkowie",
      "wieś",
      "przestać coś robić",
      "brakowało mi"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "„Ogni estate andavamo al mare” opisuje:",
        opts: ["jednorazowy wyjazd", "powtarzalny zwyczaj z przeszłości", "plan na przyszłość"]
      },
      { q: "Uzupełnij: „Da bambino ___ in campagna.” (mieszkałem — abitare)" },
      { q: "Uzupełnij: „___ una giornata fredda.” (był)" },
      {
        q: "Uzupełnij wspomnienie.",
        tr: "Jako mała spędzałam lato u dziadków. Dom był duży i co wieczór jedliśmy wszyscy razem."
      },
      { q: "„Kiedyś paliłem, teraz rzuciłem.”" },
      { tr: "Jako dziecko grałem w piłkę każdego popołudnia." },
      { tr: "Jako mała mieszkałam w domu blisko morza." }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Wspomnienia",
    title: "Imperfetto kontra passato prossimo",
    objectives: [
      "wybrać właściwy czas przeszły",
      "połączyć oba czasy w jednym zdaniu",
      "rozpoznać sygnały wskazujące na jeden lub drugi"
    ],
    theory: [
      {
        h: "Tło kontra zdarzenie",
        p: "To najważniejsza decyzja gramatyczna poziomu A2. <strong>Imperfetto</strong> maluje tło: co trwało, jak było, co się powtarzało. <strong>Passato prossimo</strong> wprowadza zdarzenie: co się stało, co przerwało tło, co się wydarzyło raz."
      },
      {
        h: "Klasyczna para",
        p: "<em><b>Mentre uscivo</b> di casa, <b>è squillato</b> il telefono.</em> — Wychodzenie trwało (imperfetto), telefon zadzwonił w jednym momencie (passato prossimo). Odwrócenie czasów zmieniłoby sens na absurdalny."
      },
      {
        h: "Sygnały tekstowe",
        list: [
          "imperfetto: <em>sempre, spesso, di solito, ogni giorno, mentre, da bambino</em>",
          "passato prossimo: <em>ieri, una volta, all'improvviso, l'anno scorso, per tre ore, due volte</em>"
        ]
      },
      {
        trap: "Określenie <b>czasu trwania z granicami</b> wymusza passato prossimo: <em>ho lavorato <b>per tre ore</b></em> (skończone, zamknięte). Samo „trwanie” bez granic to imperfetto: <em>lavoravo mentre lui dormiva</em>."
      },
      {
        h: "Zmiana znaczenia czasownika",
        p: "Kilka czasowników zmienia sens razem z czasem: <em>sapevo</em> (wiedziałem, stan) kontra <em>ho saputo</em> (dowiedziałem się, moment); <em>conoscevo</em> (znałem) kontra <em>ho conosciuto</em> (poznałem); <em>volevo</em> (chciałem) kontra <em>ho voluto</em> (zdecydowałem się, uparłem)."
      }
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
        { tr: "Kiedy wychodziłem, zadzwonił telefon." },
        { tr: "Wczoraj pracowałem trzy godziny.", note: "granice → passato prossimo" },
        { tr: "Za młodu pracowałem w barze." },
        { tr: "Poznałem żonę na koncercie." },
        { tr: "Nie wiedziałem, że tu jesteś." },
        { tr: "Nagle wysiadł prąd." }
      ]
    },
    vocab: [
      "podczas gdy",
      "nagle",
      "raptem",
      "w zeszłym roku",
      "przez trzy godziny",
      "dzwonić (o telefonie)",
      "spadać, upadać",
      "zdarzyć się",
      "znać / poznałem",
      "wiedzieć / dowiedziałem się",
      "co się stało?",
      "na szczęście"
    ],
    exercises: [
      {
        q: "„___ (uscire, io) di casa quando ___ (squillare) il telefono.” Jakie czasy?",
        opts: ["oba imperfetto", "imperfetto + passato prossimo", "oba passato prossimo"],
        why: "Tło (wychodzenie) w imperfetto, zdarzenie (dzwonek) w passato prossimo."
      },
      { q: "Wstaw właściwą formę.", tr: "Kiedy jadłem, przyszedł Marco." },
      { q: "Wstaw właściwą formę.", tr: "Wczoraj pracowałem trzy godziny, potem wyszedłem ze znajomymi." },
      {
        q: "„Ho conosciuto Marco a Roma” znaczy:",
        opts: ["Znałem Marco w Rzymie", "Poznałem Marco w Rzymie", "Znam Marco z Rzymu"]
      },
      {
        q: "„Ieri ho lavorato per tre ore.” Dlaczego nie imperfetto?",
        opts: ["Bo to zwyczaj", "Bo czas trwania ma wyraźne granice", "Bo to opis"]
      },
      {
        q: "Które określenia zwykle idą z imperfetto?",
        opts: ["ogni giorno", "ieri", "di solito", "all'improvviso", "da bambino"]
      },
      { q: "„Nie wiedziałem, że tu mieszkasz.”" },
      {
        q: "Uzupełnij opowieść.",
        tr: "Był zimny dzień. Padało, a ja nie miałem parasola. Nagle przyjechał autobus."
      },
      { tr: "Kiedy wracałem do domu, spotkałem starą znajomą." },
      { tr: "Jako dziecko jeździłem nad morze każdego lata, ale w zeszłym roku pojechałem w góry." }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Wspomnienia",
    title: "Opisywanie zmian",
    objectives: [
      "porównać przeszłość z teraźniejszością",
      "użyć wyrażeń typu non c'era più, adesso invece",
      "opowiedzieć, jak coś się zmieniło"
    ],
    theory: [
      {
        h: "Kontrast prima / adesso",
        p: "Zestawienie dwóch czasów służy do pokazywania zmiany: <em><b>Prima</b> qui c'era un cinema, <b>adesso</b> c'è un supermercato.</em> Struktura jest prosta, ale wymaga świadomego przełączania między imperfetto (kiedyś) a czasem teraźniejszym (dziś)."
      },
      {
        h: "C'era i c'erano",
        p: "Imperfetto od <em>c'è / ci sono</em> to <strong>c'era / c'erano</strong>. Bardzo częste przy opisie miejsc: <em>C'erano meno macchine e più negozi.</em>"
      },
      {
        h: "Wyrażenia kontrastujące",
        list: [
          "<em>prima… adesso / oggi</em> — kiedyś… teraz",
          "<em>invece</em> — natomiast",
          "<em>non… più</em> — już nie: <em>non c'è più il mercato</em>",
          "<em>è cambiato molto</em> — bardzo się zmieniło"
        ]
      },
      {
        tip: "<em>Non… più</em> otacza czasownik jak <em>non… mai</em>: <em>non abito <b>più</b> qui</em>. W passato prossimo <em>più</em> wchodzi między posiłkowy a imiesłów: <em>non ho più visto</em>."
      }
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
        { tr: "Kiedyś był tu targ, teraz jest parking." },
        { tr: "Miasto bardzo się zmieniło." },
        { tr: "Nie ma już dawnych sklepów." },
        { tr: "Natomiast dzielnica stała się żywsza." },
        { tr: "Kiedy byłem mały, bawiło się na ulicy." },
        { tr: "Teraz wszystko jest inne." }
      ]
    },
    vocab: [
      "był / były",
      "zmieniać (się)",
      "bardzo się zmieniło",
      "natomiast",
      "już nie",
      "kiedyś",
      "dzielnica",
      "ruch uliczny",
      "zatłoczony",
      "spokojny",
      "stawać się",
      "lepiej / gorzej"
    ],
    exercises: [
      { q: "Imperfetto od „c'è”: ___" },
      { q: "Imperfetto od „ci sono”: ___" },
      { q: "Uzupełnij: „Non abito ___ qui.” (już nie mieszkam)" },
      {
        q: "Gdzie stoi „più” w passato prossimo?",
        opts: ["Przed non", "Między posiłkowym a imiesłowem", "Na końcu"],
        why: "Non ho più visto — tak jak già i mai."
      },
      {
        q: "Uzupełnij opis zmian.",
        tr: "Kiedyś było tu kino, teraz jest supermarket. Dzielnica bardzo się zmieniła."
      },
      { q: "„Nie ma już dawnych sklepów.”" },
      { tr: "Kiedy byłem mały, bawiło się na ulicy." },
      { q: "Połącz.", pairs: ["natomiast", "zatłoczony", "stawać się", "ruch uliczny"] },
      { tr: "Dwadzieścia lat temu było mniej samochodów i więcej sklepów osiedlowych." },
      { tr: "Moje miasto bardzo się zmieniło w ostatnich dziesięciu latach." }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Wspomnienia",
    title: "Rozmowa o przeszłości",
    objectives: [
      "poprowadzić rozmowę o wspomnieniach",
      "zareagować na czyjąś opowieść",
      "użyć trapassato prossimo w prostych przypadkach"
    ],
    theory: [
      {
        h: "Reakcje są obowiązkowe",
        p: "Włoska rozmowa nie znosi milczącego słuchania. Podczas opowieści wtrąca się <em>davvero?</em>, <em>ma dai!</em>, <em>e poi?</em>, <em>che bello!</em>, <em>mamma mia</em>. Brak reakcji odbierany jest jako brak zainteresowania, nie jako uprzejmość."
      },
      {
        h: "Trapassato prossimo — przeszłość przed przeszłością",
        p: "Imperfetto od <em>avere/essere</em> + imiesłów: <em>avevo mangiato</em>, <em>ero uscito</em>. Używa się go, gdy jedno zdarzenie poprzedza drugie: <em>Quando sono arrivato, il treno <b>era già partito</b>.</em>"
      },
      {
        h: "Kiedy jest konieczny",
        p: "Bez niego kolejność zdarzeń bywa niejasna. <em>Quando sono arrivato, il treno è partito</em> znaczy, że pociąg odjechał <b>po</b> moim przyjściu. <em>Era già partito</em> — odjechał <b>przed</b> nim."
      },
      {
        tip: "<em>Ti ricordi quando…?</em> to standardowe otwarcie wspomnieniowej rozmowy. Odpowiedź: <em>Certo che me lo ricordo!</em>"
      }
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
        { tr: "Kiedy przyszłam, impreza już się skończyła." },
        { tr: "Nie wyszedłem, bo obiecałem popracować." },
        { tr: "Pamiętasz, jak pojechaliśmy na Sycylię?" },
        { tr: "Jasne, że pamiętam!" },
        { tr: "No coś ty, nie wierzę!" },
        { tr: "I co się potem stało?" }
      ]
    },
    vocab: [
      "pamiętasz?",
      "pamiętam to",
      "zapomnieć",
      "naprawdę?",
      "no coś ty!",
      "jak fajnie!",
      "o rany!",
      "i co dalej?",
      "co się stało?",
      "już byłem po…",
      "dopiero co",
      "wpadka, kompromitacja"
    ],
    exercises: [
      {
        q: "„Quando sono arrivato, il treno era già partito.” Co było pierwsze?",
        opts: ["Moje przyjście", "Odjazd pociągu", "Oba jednocześnie"]
      },
      { q: "Uzupełnij: „Quando sono arrivata, la festa ___ già finita.”" },
      { q: "Uzupełnij: „Non avevo fame perché ___ già mangiato.”" },
      { q: "Połącz reakcje.", pairs: ["no coś ty!", "naprawdę?", "i co dalej?", "jak fajnie!"] },
      { q: "Uzupełnij.", tr: "Kiedy wyszliśmy, przestało już padać, ale ulica była jeszcze mokra." },
      { q: "„Pamiętasz, jak pojechaliśmy na Sycylię?”" },
      {
        q: "Znajoma opowiada o wakacjach.",
        setting: "Kawa po pracy, wrzesień.",
        lines: [
          { tr: "W sierpniu pojechałam do Apulii z rodziną." },
          { tr: "Zareaguj z zainteresowaniem i zapytaj, jak było.", answerTr: "Jak fajnie! Jak było?" },
          { tr: "Super, ale pierwszego dnia zgubiliśmy walizki." },
          { tr: "Zareaguj współczująco i zapytaj, co było dalej.", answerTr: "O rany! I co dalej?" },
          { tr: "Odnaleźli je po dwóch dniach. Na szczęście!" }
        ]
      },
      { tr: "Nie wyszedłem, bo obiecałem popracować." },
      { tr: "Kiedy wróciłem, moja siostra już wyszła." },
      { tr: "Pamiętasz, jak byliśmy z jednej klasy?" }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 1",
    objectives: ["sprawdzić imperfetto, kontrast z passato prossimo i trapassato"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      {  },
      {  },
      { q: "Wstaw właściwy czas.", tr: "Kiedy wychodziłem, zadzwonił telefon." },
      { q: "Wstaw właściwy czas.", tr: "Wczoraj pracowałem cztery godziny." },
      { q: "„Ho conosciuto Anna” znaczy:", opts: ["Znałem Annę", "Poznałem Annę", "Znam Annę"] },
      { q: "„Prima qui ___ un cinema.” (było)" },
      { q: "„Non abito ___ qui.” (już nie)" },
      { q: "„Quando sono arrivato, il treno ___ già partito.”" },
      { tr: "Jako dziecko spędzałam każde lato nad morzem z dziadkami." },
      { tr: "Kiedy wracałem do domu, spotkałem starego znajomego." }
    ]
  },
  "unit:a2-u02": { title: "W podróży", grammarNote: "futuro semplice · rezerwacje · dworzec i hotel" },
  "lesson:a2-u02-l1": {
    theme: "Podróże",
    title: "Pociąg i bilety",
    objectives: [
      "kupić bilet i zrozumieć informacje na dworcu",
      "poradzić sobie ze zmianą peronu i opóźnieniem",
      "znać różnicę między typami pociągów"
    ],
    theory: [
      {
        h: "Typy pociągów",
        p: "<strong>Regionale</strong> zatrzymuje się wszędzie, jest tani i nie wymaga rezerwacji miejsca. <strong>Intercity</strong> to średni standard. <strong>Frecciarossa / Italo</strong> to szybkie połączenia z obowiązkową rezerwacją miejsca — bilet obowiązuje na konkretny pociąg i godzinę."
      },
      {
        h: "Kasowanie biletu",
        p: "Bilet <em>regionale</em> kupiony bez konkretnej godziny trzeba <strong>skasować</strong> (<em>convalidare</em>) w żółtym albo zielonym kasowniku przed wejściem na peron. Brak kasowania to mandat, i kontrolerzy nie przyjmują tłumaczeń. Bilety kupione w aplikacji są już aktywne."
      },
      {
        h: "Ogłoszenia, które musisz zrozumieć",
        list: [
          "<em>Il treno viaggia con un ritardo di venti minuti</em> — pociąg ma dwadzieścia minut opóźnienia",
          "<em>Cambio binario: il treno partirà dal binario 8</em> — zmiana peronu",
          "<em>È in arrivo al binario 3</em> — wjeżdża na peron 3",
          "<em>Il treno è soppresso</em> — pociąg odwołany"
        ]
      },
      {
        tip: "<em>Binario</em> to peron i tor jednocześnie. Numer widnieje na tablicy dopiero kilkanaście minut przed odjazdem, co bywa zaskoczeniem dla przyzwyczajonych do stałych peronów."
      }
    ],
    grammar: {
      title: "Zwroty na dworcu",
      table: {
        head: ["sytuacja", "po włosku", "po polsku"],
        rows: [
          ["bilet", "Un biglietto per Firenze, andata e ritorno.", "Bilet do Florencji, tam i z powrotem."],
          ["w jedną stronę", "Solo andata.", "Tylko w jedną stronę."],
          ["peron", "Da quale binario parte?", "Z którego peronu odjeżdża?"],
          [
            "opóźnienie",
            "Il treno è in ritardo di venti minuti.",
            "Pociąg ma dwadzieścia minut opóźnienia."
          ],
          ["przesiadka", "Devo cambiare treno?", "Muszę się przesiadać?"],
          ["kasowanie", "Devo convalidare il biglietto?", "Muszę skasować bilet?"]
        ]
      },
      examples: [
        { tr: "Poproszę bilet do Neapolu na jutro rano." },
        { tr: "Pierwsza czy druga klasa?" },
        { tr: "Jest bezpośredni, czy muszę się przesiadać?" },
        { tr: "Pociąg o 14:35 jest odwołany." },
        { tr: "To miejsce jest zajęte?" },
        { tr: "Przepraszam, to wagon 5?" }
      ]
    },
    vocab: [
      "bilet",
      "w obie strony",
      "w jedną stronę",
      "peron, tor",
      "wagon",
      "miejsce",
      "przesiadać się",
      "przesiadka, połączenie",
      "opóźnienie",
      "odwołany",
      "kasować bilet",
      "kierownik pociągu"
    ],
    exercises: [
      {
        q: "Co znaczy „il treno è soppresso”?",
        opts: ["Pociąg jest opóźniony", "Pociąg jest odwołany", "Pociąg jest pełny"]
      },
      {
        q: "Który bilet trzeba skasować przed wejściem na peron?",
        opts: ["Frecciarossa z rezerwacją", "Regionale bez konkretnej godziny", "Każdy bilet"]
      },
      { q: "Uzupełnij: „Da quale ___ parte il treno?”" },
      { q: "Uzupełnij: „Un biglietto ___ e ritorno.”" },
      { q: "Połącz.", pairs: ["wagon", "przesiadka", "opóźnienie", "kasować bilet"] },
      { q: "„Muszę się przesiadać?”" },
      {
        q: "Kupujesz bilet w kasie.",
        setting: "Okienko na dworcu, kolejka za tobą.",
        lines: [
          { tr: "Dzień dobry, słucham." },
          {
            tr: "Poproś o bilet do Florencji na dziś po południu.",
            answerTr: "Bilet do Florencji na dziś po południu."
          },
          { tr: "Regionalny czy Frecciarossa?" },
          { tr: "Zapytaj o różnicę w czasie podróży.", answerTr: "Ile dłużej jedzie regionalny?" },
          { tr: "Półtorej godziny dłużej. Freccia kosztuje czterdzieści dwa euro." },
          {
            tr: "Wybierz Frecciarossa i zapytaj o peron.",
            answerTr: "Wezmę Frecciarossa. Z którego peronu odjeżdża?"
          }
        ]
      },
      {
        q: "Uzupełnij ogłoszenie dworcowe.",
        tr: "Pociąg regionalny do Bolonii ma dwadzieścia minut opóźnienia. Zmiana peronu: odjedzie z peronu 8."
      },
      { tr: "Pociąg do Rzymu odjeżdża z peronu dwunastego z dziesięciominutowym opóźnieniem." },
      { tr: "Przepraszam, muszę skasować ten bilet?" }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Podróże",
    title: "Futuro semplice",
    objectives: [
      "utworzyć czas przyszły prosty",
      "znać nieregularne tematy",
      "użyć futuro do wyrażania przypuszczenia"
    ],
    theory: [
      {
        h: "Tworzenie",
        p: "Bierzesz bezokolicznik, ucinasz końcowe <em>-e</em> i dodajesz końcówki <em>-ò, -ai, -à, -emo, -ete, -anno</em>. Czasowniki na <b>-are</b> dodatkowo zamieniają <em>a</em> na <em>e</em>: <em>parlare → parler-ò</em>. Bez tej zamiany forma brzmiałaby jak dialekt."
      },
      {
        h: "Nieregularne tematy — trzeba je znać",
        p: "<em>essere → sar-</em>, <em>avere → avr-</em>, <em>andare → andr-</em>, <em>venire → verr-</em>, <em>volere → vorr-</em>, <em>potere → potr-</em>, <em>dovere → dovr-</em>, <em>sapere → sapr-</em>, <em>vedere → vedr-</em>, <em>bere → berr-</em>, <em>rimanere → rimarr-</em>, <em>fare → far-</em>. Końcówki zawsze te same."
      },
      {
        h: "Futuro to nie tylko przyszłość",
        p: "Bardzo częste użycie to <b>przypuszczenie o teraźniejszości</b>: <em>Che ore sono? — <b>Saranno</b> le tre.</em> („będzie z trzecia”). Albo <em>Dov'è Marco? — Sarà a casa.</em> To użycie zaskakuje Polaków, ale jest w codziennym włoskim bardzo częste."
      },
      {
        trap: "Do bliskiej, pewnej przyszłości Włosi częściej używają <b>czasu teraźniejszego</b>: <em>domani parto alle sette</em>. Futuro brzmi wtedy sztywno albo mniej pewnie. Futuro pasuje do przewidywań i planów odległych."
      }
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
        { tr: "W przyszłym roku zamieszkam we Włoszech." },
        { tr: "Zadzwonię, jak tylko dojadę." },
        { tr: "Jutro wyjeżdżamy o siódmej.", note: "bliska przyszłość: presente" },
        { tr: "Która godzina? — Będzie z trzecia.", note: "przypuszczenie" },
        { tr: "Gdzie może być mój bilet?" },
        { tr: "Nie będzie czasu na wszystko." }
      ]
    },
    vocab: [
      "jutro",
      "pojutrze",
      "w przyszłym tygodniu",
      "za trzy dni",
      "jak tylko",
      "może",
      "na pewno",
      "prawdopodobnie",
      "plan, projekt",
      "przeprowadzić się",
      "rezerwować z wyprzedzeniem",
      "zobaczymy"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Co się dzieje z czasownikami -are w futuro?",
        opts: ["Nic", "A zamienia się w e przed końcówką", "Podwaja się spółgłoska"]
      },
      { q: "Futuro od „avere”, forma io: ___" },
      { q: "Futuro od „venire”, forma loro: ___" },
      {
        q: "„Saranno le tre” znaczy:",
        opts: ["Będzie trzecia (o przyszłości)", "Jest chyba trzecia (przypuszczenie)", "Były trzy"]
      },
      { q: "Uzupełnij plany.", tr: "W przyszłym roku przeprowadzę się do Bolonii i będę tam szukać pracy." },
      { tr: "Zadzwonię, jak tylko dojadę na dworzec." },
      { tr: "W przyszłym roku zamieszkam we Włoszech." }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "Podróże",
    title: "Hotel i zakwaterowanie",
    objectives: ["zameldować się w hotelu", "zgłosić problem w pokoju", "zapytać o usługi i wymeldowanie"],
    theory: [
      {
        h: "Check-in po włosku",
        p: "Recepcjonista poprosi o dokument: <em>Un documento, per favore</em>. Prawo wymaga zgłoszenia gościa policji, więc dowód albo paszport jest obowiązkowy — także w wynajmie krótkoterminowym."
      },
      {
        h: "Tassa di soggiorno",
        p: "Prawie każde włoskie miasto pobiera <strong>podatek turystyczny</strong> (1-7 € od osoby za noc), płatny na miejscu i zwykle gotówką, niezależnie od rezerwacji online. To nie próba wyłudzenia — to opłata miejska."
      },
      {
        h: "Zgłaszanie problemów",
        p: "Konstrukcja jest prosta: <em>non funziona</em> („nie działa”) + rzecz. <em>L'aria condizionata non funziona.</em> Do tego <em>manca</em> („brakuje”): <em>Mancano gli asciugamani.</em>"
      },
      {
        tip: "<em>Camera doppia</em> to pokój dwuosobowy z jednym dużym łóżkiem (<em>matrimoniale</em>) albo z dwoma (<em>due letti singoli</em>). Warto doprecyzować przy rezerwacji, bo domyślne ustawienie bywa różne."
      }
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
        { tr: "Dobry wieczór, mam rezerwację na trzy noce." },
        { tr: "Poproszę dokument." },
        { tr: "Podatek turystyczny to dwa euro od osoby za noc." },
        { tr: "Jest wifi w pokoju?" },
        { tr: "Mogę zostawić walizki po wymeldowaniu?" },
        { tr: "Pokój jest na trzecim piętrze, winda jest tam." }
      ]
    },
    vocab: [
      "rezerwacja",
      "pokój jedno- / dwuosobowy",
      "z podwójnym łóżkiem",
      "klucz / karta",
      "piętro",
      "winda",
      "ręcznik",
      "prześcieradło",
      "podatek turystyczny",
      "nie działa",
      "brakuje",
      "wymeldowanie"
    ],
    exercises: [
      {
        q: "Co to „tassa di soggiorno”?",
        opts: ["Kaucja", "Podatek turystyczny płacony na miejscu", "Opłata za sprzątanie"]
      },
      { q: "Uzupełnij: „Ho una ___ a nome Nowak.”" },
      { q: "Uzupełnij: „L'aria condizionata non ___.”" },
      { q: "Uzupełnij: „___ gli asciugamani.” (brakuje ręczników)" },
      { q: "Połącz.", pairs: ["winda", "prześcieradło", "piętro", "klucz"] },
      { q: "„Śniadanie jest wliczone?”" },
      {
        q: "Meldujesz się w hotelu.",
        setting: "Recepcja, wieczór, po długiej podróży.",
        lines: [
          { tr: "Dobry wieczór! Ma pan rezerwację?" },
          {
            tr: "Potwierdź, podaj nazwisko i długość pobytu.",
            answerTr: "Tak, na nazwisko Nowak, na trzy noce."
          },
          { tr: "Świetnie. Poproszę dokument. Podatek turystyczny to dwa euro za noc." },
          { tr: "Zapytaj, czy śniadanie jest wliczone.", answerTr: "Śniadanie jest wliczone?" },
          { tr: "Tak, od siódmej do dziesiątej, na pierwszym piętrze." }
        ]
      },
      {
        q: "Zgłoś problem.",
        tr: "Dzień dobry, dzwonię z pokoju 204: wifi nie działa i brakuje czystych ręczników."
      },
      { tr: "Pokój jest na trzecim piętrze, śniadanie od siódmej do dziesiątej." },
      { tr: "Mogę zostawić walizki po wymeldowaniu?" }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Podróże",
    title: "Futuro anteriore i planowanie",
    objectives: [
      "utworzyć futuro anteriore",
      "uporządkować dwie czynności przyszłe",
      "wyrazić przypuszczenie o przeszłości"
    ],
    theory: [
      {
        h: "Przyszłość przed przyszłością",
        p: "<strong>Futuro anteriore</strong> = futuro od <em>avere/essere</em> + imiesłów: <em>avrò finito</em>, <em>sarò arrivato</em>. Opisuje czynność, która skończy się <b>przed</b> inną przyszłą: <em>Quando <b>avrò finito</b> il lavoro, ti chiamerò.</em>"
      },
      {
        h: "W mowie potocznej często się go skraca",
        p: "Zamiast <em>quando avrò finito, ti chiamerò</em> Włosi powiedzą <em>quando finisco, ti chiamo</em>. Futuro anteriore zostaje w rejestrze staranniejszym i w piśmie — ale rozumieć go trzeba."
      },
      {
        h: "Przypuszczenie o przeszłości",
        p: "To użycie jest żywe i częste: <em>Non risponde… <b>avrà perso</b> il treno.</em> („pewnie spóźnił się na pociąg”). Odpowiednik futuro semplice dla teraźniejszości, tylko przesunięty w przeszłość."
      },
      {
        tip: "Sygnały, po których często idzie futuro anteriore: <em>quando, appena, dopo che, una volta che</em>."
      }
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
        { tr: "Jak skończę, zadzwonię." },
        { tr: "Jak tylko dojedziemy, napiszemy." },
        { tr: "Nie odbiera, pewnie spóźnił się na pociąg." },
        { tr: "Gdzie się podział mój bilet?" },
        { tr: "Do piątku będziemy mieli wszystko zarezerwowane." },
        { tr: "To musiało być nieporozumienie." }
      ]
    },
    vocab: [
      "jak tylko",
      "gdy już",
      "do (terminu)",
      "nieporozumienie",
      "niespodziewana przeszkoda",
      "trasa, plan podróży",
      "odjazd / przyjazd",
      "bagaż podręczny",
      "wejście na pokład",
      "lot",
      "przesiadka",
      "odwołać"
    ],
    exercises: [
      { q: "Futuro anteriore od „finire”, forma io: ___" },
      { q: "Futuro anteriore od „partire”, forma noi (grupa mieszana): ___" },
      {
        q: "„Avrà perso il treno” znaczy najczęściej:",
        opts: ["Straci pociąg", "Pewnie spóźnił się na pociąg", "Stracił pociąg na pewno"]
      },
      { q: "Uzupełnij.", tr: "Kiedy dotrzemy do hotelu, napiszemy do ciebie." },
      { q: "„Jak skończę pracę, zadzwonię.”" },
      {
        q: "Które zdanie jest bardziej potoczne?",
        opts: ["Quando avrò finito, ti chiamerò.", "Quando finisco, ti chiamo.", "Oba są równie potoczne."]
      },
      { q: "Połącz.", pairs: ["wejście na pokład", "lot", "do (terminu)", "odwołać"] },
      { tr: "Do piątku będziemy mieli wszystko zarezerwowane." },
      { tr: "Jak tylko dotrzemy na lotnisko, wyślemy ci wiadomość." },
      { tr: "Nie odbiera telefonu, pewnie nie zdążył na przesiadkę." }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 2",
    objectives: ["sprawdzić futuro, słownictwo dworcowe i hotelowe"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      {  },
      { q: "Futuro od „andare”, forma io: ___" },
      { q: "Futuro od „potere”, forma noi: ___" },
      { q: "„Il treno è soppresso”:", opts: ["opóźniony", "odwołany", "pełny"] },
      { q: "„Da quale ___ parte?”" },
      { q: "„L'aria condizionata non ___.”" },
      { q: "Futuro anteriore od „finire”, io: ___" },
      { q: "„Mam rezerwację na trzy noce.”" },
      { tr: "Lot do Warszawy odlatuje z bramki B12 z dwudziestominutowym opóźnieniem." },
      { tr: "Poproszę bilet w jedną stronę do Bolonii." }
    ]
  },
  "unit:a2-u03": {
    title: "Zaimki dopełnienia",
    grammarNote: "zaimki bliższe i dalsze · zgodność imiesłowu"
  },
  "lesson:a2-u03-l1": {
    theme: "Gramatyka",
    title: "Zaimki dopełnienia bliższego",
    objectives: [
      "zastąpić rzeczownik zaimkiem",
      "postawić zaimek we właściwym miejscu",
      "unikać powtarzania tego samego słowa"
    ],
    theory: [
      {
        h: "Po co one są",
        p: "Powtarzanie rzeczownika brzmi po włosku ciężko. <em>Compri il giornale? — Sì, <b>lo</b> compro.</em> Zaimek zastępuje to, co już wiadomo. Bez tego wypowiedź brzmi jak ćwiczenie z podręcznika, nie jak rozmowa."
      },
      {
        h: "Formy",
        p: "<em>mi</em> (mnie), <em>ti</em> (ciebie), <strong>lo</strong> (jego / to, m), <strong>la</strong> (ją / to, ż), <em>ci</em> (nas), <em>vi</em> (was), <strong>li</strong> (ich, m), <strong>le</strong> (je, ż)."
      },
      {
        h: "Pozycja",
        p: "Przed odmienionym czasownikiem: <em>lo vedo</em>, <em>non la conosco</em>. Przy bezokoliczniku doczepia się na końcu: <em>voglio veder<b>lo</b></em> — albo stoi przed modalnym: <em><b>lo</b> voglio vedere</em>. Obie wersje są poprawne."
      },
      {
        trap: "<b>Lo</b> i <b>la</b> skracają się przed samogłoską: <em>l'ho visto</em>, <em>l'ho vista</em>. Formy <b>li</b> i <b>le</b> nigdy się nie skracają."
      }
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
        { tr: "Znasz Marco? — Tak, dobrze go znam." },
        { tr: "Bierzesz samochód? — Nie, nie biorę." },
        { tr: "Gdzie są klucze? Nie mogę ich znaleźć." },
        { tr: "Chcę go zobaczyć od razu." },
        { tr: "Poczekasz na mnie pięć minut?" },
        { tr: "Widzimy się jutro." }
      ]
    },
    vocab: [
      "znać (osobę, miejsce)",
      "wiedzieć, umieć",
      "znaleźć",
      "zgubić, stracić",
      "czekać",
      "dzwonić, wołać",
      "zapraszać",
      "odprowadzać",
      "gazeta",
      "klucze",
      "od razu",
      "później"
    ],
    exercises: [
      {
        q: "„Conosci Anna?” — jak odpowiesz twierdząco, używając zaimka?",
        opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."]
      },
      { q: "Uzupełnij: „I biglietti? ___ ho comprati ieri.”" },
      { q: "Uzupełnij: „La pizza? ___ prendo io.”" },
      {
        q: "Które zdania są poprawne?",
        opts: ["Lo voglio vedere.", "Voglio vederlo.", "Obie formy są poprawne."]
      },
      {
        q: "Zastąp powtórzenia zaimkami.",
        tr: "— Kupujesz gazetę? — Tak, kupuję. — A czasopisma? — Nie, nie kupuję."
      },
      { q: "„Nie znam go.”" },
      {
        q: "Które zaimki dopełnienia bliższego mogą się skrócić przed samogłoską?",
        opts: ["lo", "la", "li", "le"]
      },
      { tr: "Poczekasz na mnie pięć minut?" },
      { tr: "Kluczy nie mogę znaleźć, może zostawiłem je w biurze." },
      { tr: "Znasz tamtą restaurację? — Tak, dobrze ją znam." }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Gramatyka",
    title: "Zgodność imiesłowu z zaimkiem",
    objectives: [
      "dopasować imiesłów do zaimka bliższego",
      "odróżnić przypadki, gdy zgodność jest obowiązkowa",
      "poprawnie zapisać l'ho visto / l'ho vista"
    ],
    theory: [
      {
        h: "Reguła w jednym zdaniu",
        p: "W czasach złożonych z <em>avere</em> imiesłów <b>zgadza się z zaimkiem dopełnienia bliższego</b>, jeśli ten stoi przed czasownikiem. <em>Ho visto Anna</em> → <em><b>L'ho vista</b></em>. Bez zaimka imiesłów zostaje niezmienny."
      },
      {
        h: "Cztery formy",
        list: [
          "<em>lo</em> → <em>l'ho vist<b>o</b></em>",
          "<em>la</em> → <em>l'ho vist<b>a</b></em>",
          "<em>li</em> → <em>li ho vist<b>i</b></em>",
          "<em>le</em> → <em>le ho vist<b>e</b></em>"
        ]
      },
      {
        trap: "Skrócenie <em>l'</em> ukrywa rodzaj — dlatego to <b>końcówka imiesłowu</b> mówi, o kogo chodzi. <em>L'ho visto</em> (jego) i <em>l'ho vista</em> (ją) różnią się jedną literą, ale znaczą co innego."
      },
      {
        h: "Gdzie zgodności NIE ma",
        p: "Z zaimkiem <b>dalszym</b> imiesłów się nie zmienia: <em>Le ho parlato</em> (rozmawiałem z nią), nie „parlata”. To najczęstszy błąd na tym etapie: trzeba wiedzieć, czy zaimek jest bliższy, czy dalszy."
      }
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
        { tr: "Widziałeś Giulię? — Tak, widziałem ją wczoraj." },
        { tr: "Dokumenty? Już je wysłałem." },
        { tr: "Zdjęcia? Jeszcze ich nie oglądałam." },
        { tr: "Napisałem do niej maila.", note: "dalszy — bez zgodności" },
        { tr: "Poznałem ją w Rzymie." },
        { tr: "Zaprosili nas na imprezę." }
      ]
    },
    vocab: [
      "wysyłać",
      "oglądać",
      "otrzymywać",
      "oddawać",
      "pożyczać komuś",
      "dokument",
      "zdjęcie",
      "wiadomość",
      "e-mail",
      "jeszcze",
      "już",
      "przypadkiem"
    ],
    exercises: [
      {
        q: "„Hai visto Anna?” — poprawna odpowiedź:",
        opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."]
      },
      {
        q: "Uzupełnij: „I libri? ___ ho comprat___.” — wpisz oba elementy oddzielone spacją",
        hint: "zaimek + końcówka imiesłowu",
        why: "Li ho comprati — zaimek li wymusza końcówkę -i."
      },
      { q: "Uzupełnij końcówkę: „Le chiavi? Le ho pers___.”" },
      {
        q: "„Le ho parlato” — dlaczego nie „parlata”?",
        opts: ["Bo to błąd", "Bo „le” jest tu zaimkiem dalszym (do niej)", "Bo parlare jest nieregularne"]
      },
      { q: "Uzupełnij końcówki.", tr: "Maila? Już go wysłałem. Zdjęcia? Jeszcze ich nie oglądałem." },
      { q: "„Poznałem ją w Rzymie.”" },
      {
        q: "W których zdaniach imiesłów musi się zgadzać?",
        opts: ["L'ho vista.", "Le ho parlato.", "Li ho invitati.", "Gli ho scritto."]
      },
      { tr: "Dokumenty już wysłałem." },
      { tr: "Zdjęć z podróży jeszcze nie oglądałem." },
      { tr: "Widziałeś Giulię? — Tak, widziałem ją wczoraj wieczorem." }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Gramatyka",
    title: "Zaimki dopełnienia dalszego",
    objectives: [
      "odróżnić dopełnienie bliższe od dalszego",
      "użyć gli i le poprawnie",
      "znać czasowniki wymagające dopełnienia dalszego"
    ],
    theory: [
      {
        h: "Komu, a nie kogo",
        p: "Zaimek <b>dalszy</b> zastępuje <em>a + osoba</em>: <em>Telefono a Marco → <b>Gli</b> telefono.</em> Zaimek <b>bliższy</b> zastępuje rzeczownik bez przyimka: <em>Vedo Marco → <b>Lo</b> vedo.</em>"
      },
      {
        h: "Formy",
        p: "<em>mi, ti, <b>gli</b> (jemu), <b>le</b> (jej), ci, vi, <b>gli</b> (im)</em>. W rejestrze formalnym „im” to <em>loro</em>, stawiane po czasowniku: <em>Telefono loro</em> — ale w mowie prawie zawsze <em>gli</em>."
      },
      {
        h: "Czasowniki, które zaskakują",
        p: "Kilka włoskich czasowników wymaga dopełnienia dalszego tam, gdzie polski ma biernik: <em>telefonare a</em>, <em>rispondere a</em>, <em>chiedere a</em>, <em>credere a</em>, <em>piacere a</em>, <em>dispiacere a</em>. Zdanie „lo telefono” jest błędne — musi być <em>gli telefono</em>."
      },
      {
        trap: "<b>Gli</b> pełni dwie zupełnie różne funkcje: rodzajnik (<em>gli amici</em>) i zaimek (<em>gli parlo</em>). Rozstrzyga miejsce w zdaniu — rodzajnik stoi przed rzeczownikiem, zaimek przed czasownikiem."
      }
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
        { tr: "Dzwoniłeś do Marco? — Tak, dzwoniłem wczoraj." },
        { tr: "Co jej powiedziałeś?" },
        { tr: "W ogóle mu nie wierzę." },
        { tr: "Odpowiedzieli nam od razu." },
        { tr: "Ona bardzo lubi podróżować." },
        { tr: "Chcę z nim dziś porozmawiać." }
      ]
    },
    vocab: [
      "dzwonić do",
      "odpowiadać komuś",
      "pisać do",
      "pytać kogoś",
      "powiedzieć komuś",
      "wierzyć komuś",
      "dawać w prezencie",
      "pożyczać komuś",
      "wysyłać komuś",
      "tłumaczyć komuś",
      "doradzać komuś",
      "wcale"
    ],
    exercises: [
      { q: "„Telefono a Marco” → z zaimkiem:", opts: ["Lo telefono.", "Gli telefono.", "Le telefono."] },
      { q: "„Vedo Marco” → z zaimkiem:", opts: ["Lo vedo.", "Gli vedo.", "Le vedo."] },
      { q: "Uzupełnij: „Che cosa ___ hai detto?” (jej)" },
      { q: "Uzupełnij: „Non ___ credo.” (mu)" },
      {
        q: "Które czasowniki wymagają dopełnienia dalszego (a qualcuno)?",
        opts: ["telefonare", "vedere", "rispondere", "aspettare", "credere"]
      },
      {
        q: "Uzupełnij zaimki.",
        tr: "Napisałem do Giulii: wysłałem jej maila. Marco nie odpowiada, zadzwonię do niego jutro."
      },
      { q: "„Chcę z nim dziś porozmawiać.”" },
      { q: "Połącz.", pairs: ["dawać w prezencie", "pożyczać komuś", "tłumaczyć komuś", "doradzać komuś"] },
      { tr: "Napisałem do niej wczoraj, ale jeszcze mi nie odpowiedziała." },
      { tr: "Zadzwonię do niego wieczorem i wszystko mu wytłumaczę." }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Gramatyka",
    title: "Tryb rozkazujący z zaimkami",
    objectives: [
      "utworzyć tryb rozkazujący we wszystkich osobach",
      "doczepić zaimek do formy rozkazującej",
      "utworzyć przeczenie w formie tu"
    ],
    theory: [
      {
        h: "Formy podstawowe",
        p: "<b>tu</b>: <em>-are → -a</em> (parla), <em>-ere/-ire → -i</em> (prendi, senti). <b>Lei</b>: odwrotnie — <em>-are → -i</em> (parli), <em>-ere/-ire → -a</em> (prenda, senta). <b>noi</b>: jak czas teraźniejszy (parliamo). <b>voi</b>: jak czas teraźniejszy (parlate)."
      },
      {
        h: "Przeczenie w formie tu",
        p: "Zamiast formy rozkazującej używa się <b>bezokolicznika</b>: <em>non parlare!</em>, <em>non andare!</em>, <em>non ti preoccupare!</em>. To dotyczy wyłącznie formy <em>tu</em> — w pozostałych osobach zwykłe <em>non</em> + forma."
      },
      {
        h: "Zaimki doczepiają się na końcu",
        p: "<em>Dimmi!</em> (powiedz mi), <em>Chiamami!</em>, <em>Aspettalo!</em>, <em>Andiamoci!</em>. Ale w formie <b>Lei</b> zaimek stoi przed: <em>Mi dica</em>, <em>Lo aspetti</em>."
      },
      {
        trap: "Po skróconych formach <em>fa', da', sta', va', di'</em> spółgłoska zaimka <b>się podwaja</b>: <em>dimmi, fammi, dammi, vattene, stammi bene</em>. Wyjątek: <em>gli</em> — <em>digli</em>, bez podwojenia."
      }
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
        { tr: "Powiedz mi wszystko!" },
        { tr: "Daj mi znać, jak idzie." },
        { tr: "Nie martw się, ja się tym zajmę." },
        { tr: "Proszę mówić, proszę pani." },
        { tr: "Chodźmy tam razem!" },
        { tr: "Wybacz mi, nie zrobiłem tego celowo." }
      ]
    },
    vocab: [
      "powiedz mi",
      "daj mi znać",
      "daj mi",
      "wybacz mi",
      "poczekaj na mnie",
      "nie martw się",
      "patrz, zobacz",
      "słuchaj",
      "trzymaj się",
      "chodź tu",
      "przestań",
      "celowo"
    ],
    exercises: [
      {
        q: "Przeczenie „non parlare!” dotyczy której osoby?",
        opts: ["tu", "Lei", "voi"],
        why: "Tylko forma tu używa bezokolicznika w przeczeniu."
      },
      { q: "Utwórz tryb rozkazujący (tu) od „prendere”: ___" },
      { q: "Utwórz tryb rozkazujący (Lei) od „parlare”: ___" },
      { q: "„Powiedz mi” to: ___" },
      {
        q: "Dlaczego „dammi”, a nie „dami”?",
        opts: [
          "To pomyłka",
          "Po skróconej formie da' spółgłoska zaimka się podwaja",
          "Bo dare jest nieregularne we wszystkim"
        ]
      },
      { q: "„Nie martw się.”" },
      {
        q: "Uzupełnij wiadomość do znajomej.",
        tr: "Cześć! Daj mi znać, o której przyjeżdżasz, i wyślij mi wiadomość, kiedy wyruszysz."
      },
      { tr: "Proszę mówić, słucham panią." },
      { tr: "Daj znać, kiedy przyjeżdżasz, przyjadę po ciebie." },
      { tr: "Powiedz mi wszystko, nie martw się." }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 3",
    objectives: ["sprawdzić zaimki bliższe i dalsze, zgodność imiesłowu i tryb rozkazujący"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Conosci Anna?” →", opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."] },
      { q: "„I biglietti? ___ ho comprati.”" },
      { q: "„Le chiavi? Le ho pers___.”" },
      { q: "„Telefono a Marco” →", opts: ["Lo telefono", "Gli telefono", "Le telefono"] },
      { q: "„Che cosa ___ hai detto?” (jej)" },
      { q: "Tryb rozkazujący (tu) od „sentire”: ___" },
      { q: "„Powiedz mi”: ___" },
      { q: "„Nie martw się, zajmę się tym.”" },
      { tr: "Widziałem ją wczoraj i rozmawiałem z nią o projekcie." },
      { tr: "Daj znać, kiedy przyjeżdżasz, czekam na ciebie." }
    ]
  },
  "unit:a2-u04": { title: "Zdrowie", grammarNote: "mi fa male · tryb rozkazujący formalny · rady" },
  "lesson:a2-u04-l1": {
    theme: "Zdrowie",
    title: "Ból i objawy",
    objectives: [
      "opisać, co Cię boli",
      "nazwać podstawowe objawy",
      "użyć konstrukcji mi fa / mi fanno male"
    ],
    theory: [
      {
        h: "Konstrukcja odwrócona, jak przy piacere",
        p: "<em>Mi fa male la testa</em> to dosłownie „głowa robi mi źle”. Podmiotem jest <b>część ciała</b>, dlatego czasownik ma dwie formy: <em>mi <b>fa</b> male il piede</em> (jedna rzecz) i <em>mi <b>fanno</b> male i piedi</em> (wiele)."
      },
      {
        h: "Dwa równoległe sposoby",
        p: "Obok <em>mi fa male la gola</em> istnieje <em>ho mal di gola</em>. Drugi wariant działa jak stały zwrot: <em>mal di testa, mal di stomaco, mal di schiena, mal di denti</em>. Oba są równie naturalne."
      },
      {
        h: "Rodzajnik przy częściach ciała",
        p: "Włoski mówi <em>mi fa male <b>la</b> testa</em>, a nie „mia testa”. Zaimek <em>mi</em> już wskazuje właściciela, więc dzierżawczy byłby nadmiarowy. To samo w <em>mi lavo <b>i</b> denti</em>."
      },
      {
        tip: "<em>Da quanto tempo?</em> („od jak dawna?”) to pierwsze pytanie, jakie usłyszysz u lekarza. Odpowiedź: <em>da tre giorni</em>, <em>da una settimana</em>."
      }
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
        { tr: "Boli mnie gardło od dwóch dni." },
        { tr: "Boli mnie brzuch i mam mdłości." },
        { tr: "Mam kaszel i katar." },
        { tr: "Czuję się zmęczona i nie mam apetytu." },
        { tr: "Mam alergię na penicylinę." },
        { tr: "Wziąć coś na ból głowy?" }
      ]
    },
    vocab: [
      "głowa",
      "gardło",
      "żołądek, brzuch",
      "plecy",
      "zęby",
      "gorączka",
      "kaszel",
      "katar, przeziębienie",
      "mdłości",
      "źle się czuję",
      "alergia",
      "od jak dawna?"
    ],
    exercises: [
      {
        q: "„___ male i denti.” (bolą mnie zęby)",
        opts: ["Mi fa", "Mi fanno", "Mi faccio"],
        why: "Podmiotem są zęby — liczba mnoga, więc fanno."
      },
      { q: "Uzupełnij: „Mi ___ male la schiena.”" },
      { q: "Uzupełnij: „Ho mal ___ testa.”" },
      {
        q: "Które zdanie jest naturalne po włosku?",
        opts: ["Mi fa male la mia testa.", "Mi fa male la testa.", "Fa male mia testa."],
        why: "Zaimek mi już wskazuje właściciela; dzierżawczy jest zbędny."
      },
      { q: "Połącz.", pairs: ["kaszel", "katar", "mdłości", "gorączka"] },
      { q: "„Boli mnie gardło od trzech dni.”" },
      { q: "Opisz objawy.", tr: "Boli mnie gardło, mam gorączkę i czuję się słabo." },
      { tr: "Mam kaszel i katar od tygodnia." },
      { tr: "Bolą mnie nogi po bieganiu." },
      { tr: "Boli mnie głowa i mam gorączkę." }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "Zdrowie",
    title: "U lekarza",
    objectives: ["opisać dolegliwość lekarzowi", "zrozumieć zalecenia", "zapytać o dawkowanie leku"],
    theory: [
      {
        h: "Jak działa włoska służba zdrowia",
        p: "Podstawą jest <strong>medico di base</strong> (lekarz rodzinny), do którego trzeba się zapisać. Skierowanie to <em>l'impegnativa</em> albo <em>la ricetta</em>. Na ostry dyżur idzie się do <strong>pronto soccorso</strong>, gdzie działa triage kolorami: biały (najmniej pilny) → czerwony."
      },
      {
        h: "Tryb rozkazujący formalny w zaleceniach",
        p: "Lekarz mówi przez <em>Lei</em>: <em>Prenda questo tre volte al giorno</em>, <em>Riposi</em>, <em>Beva molta acqua</em>, <em>Non si preoccupi</em>. Warto rozpoznawać te formy, nawet jeśli sam ich jeszcze nie tworzysz."
      },
      {
        h: "Apteka może więcej niż w Polsce",
        p: "Włoski <em>farmacista</em> ma szerokie uprawnienia doradcze i często jest pierwszym punktem kontaktu przy drobnych dolegliwościach. Wiele leków, które w Polsce wymagają recepty, tu też jej wymaga — ale porada jest bezpłatna i konkretna."
      },
      {
        tip: "Zwrot, który ratuje w każdej sytuacji medycznej: <em>Sono allergico/a a…</em> Warto go umieć bez zastanowienia."
      }
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
        { tr: "Dzień dobry, źle się czuję." },
        { tr: "Ma pan alergie na jakieś leki?" },
        { tr: "Wypiszę panu receptę." },
        { tr: "Proszę odpoczywać i pić dużo wody." },
        { tr: "Jeśli nie przejdzie w trzy dni, proszę wrócić." },
        { tr: "Potrzebuję zwolnienia lekarskiego." }
      ]
    },
    vocab: [
      "lekarz rodzinny",
      "ostry dyżur, SOR",
      "recepta",
      "antybiotyk",
      "tabletka",
      "syrop",
      "zastrzyk",
      "badanie krwi",
      "zwolnienie lekarskie",
      "po posiłkach",
      "na czczo",
      "wyzdrowieć"
    ],
    exercises: [
      {
        q: "Gdzie idziesz z nagłym, poważnym problemem?",
        opts: ["Dal medico di base", "Al pronto soccorso", "In farmacia"]
      },
      { q: "Uzupełnij: „Sono ___ alla penicillina.” (mam alergię, kobieta)" },
      { q: "Uzupełnij: „Quante ___ al giorno?” (ile razy)" },
      { q: "Połącz.", pairs: ["recepta", "tabletka", "na czczo", "wyzdrowieć"] },
      { q: "„Od kiedy ma pan te objawy?”" },
      {
        q: "Wizyta u lekarza.",
        setting: "Gabinet, poniedziałek rano.",
        lines: [
          { tr: "Dzień dobry, proszę siadać. Co się dzieje?" },
          {
            tr: "Powiedz, że boli cię gardło i masz gorączkę.",
            answerTr: "Boli mnie gardło i mam gorączkę."
          },
          { tr: "Od jak dawna?" },
          { tr: "Powiedz, że od trzech dni.", answerTr: "Od trzech dni." },
          { tr: "Przepiszę antybiotyk. Ma pani alergie?" },
          {
            tr: "Zaprzecz i zapytaj o dawkowanie.",
            answerTr: "Nie, żadnych. Ile razy dziennie mam go brać?"
          }
        ]
      },
      {
        q: "Uzupełnij zalecenie lekarza.",
        tr: "Proszę brać jedną tabletkę dwa razy dziennie, po posiłkach. I pić dużo wody."
      },
      { tr: "Potrzebuję zwolnienia lekarskiego." },
      { tr: "Proszę brać antybiotyk przez sześć dni, nawet jeśli poczuje się pan lepiej." },
      { tr: "Mam alergię na penicylinę, jest jakaś alternatywa?" }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Zdrowie",
    title: "Dawanie rad",
    objectives: [
      "poradzić komuś, co zrobić",
      "użyć condizionale w formie dovresti / potresti",
      "zareagować na cudzy problem"
    ],
    theory: [
      {
        h: "Condizionale — pierwsze spotkanie",
        p: "Tryb warunkowy tworzy się z tego samego tematu co futuro, ale z końcówkami <em>-ei, -esti, -ebbe, -emmo, -este, -ebbero</em>. Znasz już <em>vorrei</em>; teraz dochodzą <em>dovrei</em> (powinienem), <em>potrei</em> (mógłbym), <em>sarebbe</em> (byłoby)."
      },
      {
        h: "Rada bez rozkazu",
        p: "<em>Devi riposare</em> („musisz odpocząć”) brzmi jak polecenie. <em>Dovresti riposare</em> („powinieneś odpocząć”) to rada. Ta różnica jest w rozmowie z Włochami wyraźna i wpływa na to, jak odbierana jest Twoja wypowiedź."
      },
      {
        h: "Inne sposoby radzenia",
        list: [
          "<em>Perché non…?</em> — „może byś…?”: <em>Perché non vai dal medico?</em>",
          "<em>Se fossi in te…</em> — „na twoim miejscu…” (pełne wyjaśnienie na B2)",
          "<em>Ti conviene…</em> — „lepiej ci będzie…”: <em>Ti conviene riposare.</em>"
        ]
      },
      {
        tip: "Reakcja na cudzy problem: <em>Mi dispiace</em> (przykro mi), <em>Che peccato</em> (jaka szkoda), <em>Rimettiti presto</em> (zdrowiej szybko)."
      }
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
        { tr: "Powinieneś odpocząć kilka dni." },
        { tr: "Mógłbyś zapytać farmaceuty." },
        { tr: "Lepiej byłoby pójść do lekarza." },
        { tr: "Może weź dzień wolny?" },
        { tr: "Lepiej odpocznij dzisiaj." },
        { tr: "Zdrowiej szybko!" }
      ]
    },
    vocab: [
      "powinieneś",
      "mógłbyś",
      "lepiej byłoby",
      "lepiej ci będzie",
      "może byś…?",
      "rada",
      "odpoczywać",
      "przestać",
      "ruszać się",
      "przykro mi",
      "jaka szkoda",
      "zdrowiej szybko"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Która wersja brzmi jak rada, a nie polecenie?",
        opts: ["Devi riposare.", "Dovresti riposare.", "Riposa!"]
      },
      { q: "Uzupełnij: „___ meglio andare dal medico.” (lepiej byłoby)" },
      { q: "Uzupełnij: „___ chiedere al farmacista?” (mógłbyś)" },
      { q: "„Powinieneś odpocząć kilka dni.”" },
      { q: "Połącz reakcje.", pairs: ["przykro mi", "jaka szkoda", "zdrowiej szybko", "lepiej ci będzie"] },
      { q: "Doradź koledze.", tr: "Powinieneś dziś odpocząć. I może zadzwoń do lekarza?" },
      { tr: "Lepiej byłoby, gdybyś wziął dzień wolny." },
      { tr: "Powinieneś odpocząć i pić dużo wody." }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Zdrowie",
    title: "Styl życia i sport",
    objectives: [
      "porozmawiać o zdrowych nawykach",
      "opisać, jak często coś robisz",
      "wyrazić zamiar zmiany"
    ],
    theory: [
      {
        h: "Dieta śródziemnomorska to nie dieta",
        p: "Słowo <em>dieta</em> po włosku znaczy przede wszystkim „sposób odżywiania”, nie „odchudzanie”. <em>La dieta mediterranea</em> to wzorzec żywieniowy wpisany na listę UNESCO, a nie plan redukcyjny."
      },
      {
        h: "Wyrażanie zamiaru",
        p: "<em>Ho intenzione di…</em> (mam zamiar), <em>vorrei iniziare a…</em> (chciałbym zacząć), <em>sto cercando di…</em> (staram się). Wszystkie łączą się z bezokolicznikiem, ale różnią przyimkiem — to typowe dla włoskiego."
      },
      {
        h: "Częstotliwość precyzyjna",
        p: "<em>Tre volte alla settimana</em>, <em>una volta al mese</em>, <em>tutti i giorni</em>, <em>a giorni alterni</em> (co drugi dzień). Przyimek <em>a</em> plus rodzajnik: <em>alla settimana, al mese, all'anno</em>."
      },
      {
        tip: "<em>Fare movimento</em> to naturalniejsze niż <em>fare sport</em>, gdy mowa o zwykłej aktywności: spacery, rower, schody."
      }
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
        { tr: "Ruszam się codziennie, choćby tylko chodząc." },
        { tr: "Staram się spać co najmniej siedem godzin." },
        { tr: "Ograniczyłem cukier i czuję się lepiej." },
        { tr: "Chodzę na siłownię dwa razy w tygodniu." },
        { tr: "Mam zamiar zapisać się na basen." },
        { tr: "Dieta śródziemnomorska jest bardzo urozmaicona." }
      ]
    },
    vocab: [
      "zdrowy tryb życia",
      "ruszać się",
      "trenować",
      "biegać",
      "chodzić, spacerować",
      "zapisać się",
      "ograniczyć",
      "rzucić palenie",
      "mam zamiar",
      "staram się",
      "co drugi dzień",
      "przynajmniej"
    ],
    exercises: [
      { q: "Uzupełnij: „Ho intenzione ___ smettere di fumare.”" },
      { q: "Uzupełnij: „Vorrei iniziare ___ correre.”" },
      { q: "Uzupełnij: „Vado in palestra tre volte ___ settimana.”" },
      { q: "Co znaczy „a giorni alterni”?", opts: ["Codziennie", "Co drugi dzień", "Raz w tygodniu"] },
      {
        q: "„Dieta” po włosku znaczy przede wszystkim:",
        opts: ["odchudzanie", "sposób odżywiania", "post"]
      },
      { q: "„Staram się spać co najmniej siedem godzin.”" },
      { q: "Opowiedz o swoich nawykach.", tr: "Ruszam się co drugi dzień i staram się ograniczyć cukier." },
      { q: "Połącz.", pairs: ["trenować", "zapisać się", "ograniczyć", "przynajmniej"] },
      { tr: "Rzuciłem palenie trzy miesiące temu i czuję się dużo lepiej." },
      { tr: "Biegam trzy razy w tygodniu, wcześnie rano." }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 4",
    objectives: ["sprawdzić mi fa male, słownictwo medyczne i condizionale"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Mi ___ male i denti.”" },
      { q: "„Ho mal ___ testa.”" },
      { q: "Nagły poważny problem →", opts: ["medico di base", "pronto soccorso", "farmacia"] },
      {  },
      { q: "„___ meglio riposare.” (lepiej byłoby)" },
      { q: "„Ho intenzione ___ smettere.”" },
      { q: "Połącz.", pairs: ["recepta", "kaszel", "wyzdrowieć", "na czczo"] },
      { q: "„Boli mnie gardło od dwóch dni.”" },
      { tr: "Proszę brać jedną tabletkę dwa razy dziennie po posiłkach." },
      { tr: "Źle się czuję, powinienem pójść do lekarza." }
    ]
  }
});
