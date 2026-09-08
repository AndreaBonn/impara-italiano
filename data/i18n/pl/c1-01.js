/* ============================================================
   Teksty w języku ucznia (pl) do data/core/c1-01.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c1-u01": {
    title: "Wszystkie znaczenia SI",
    grammarNote: "si zwrotne, wzajemne, bezosobowe, bierne · ci si"
  },
  "lesson:c1-u01-l1": {
    theme: "Gramatyka zaawansowana",
    title: "Rozróżnianie wartości si",
    objectives: [
      "rozpoznać wszystkie funkcje si w tekście",
      "odróżnić si bezosobowe od biernego",
      "poprawnie użyć ci si"
    ],
    theory: [
      {
        h: "Jedna forma, sześć zadań",
        list: [
          "<b>zwrotne</b>: <em>Marco si lava.</em> — robi coś sobie",
          "<b>wzajemne</b>: <em>Si salutano ogni mattina.</em> — nawzajem",
          "<b>bezosobowe</b>: <em>In Italia si mangia bene.</em> — ludzie w ogóle",
          "<b>bierne (passivante)</b>: <em>Qui si vendono panini.</em> — czasownik zgadza się z rzeczą",
          "<b>instruktażowe</b>: <em>Il volante si tiene così.</em> — tak się to robi",
          "<b>toskańskie „my”</b>: <em>Stasera noi si va al cinema.</em> — regionalne"
        ]
      },
      {
        h: "Test na odróżnienie bezosobowego od biernego",
        p: "Jeśli po czasowniku stoi rzeczownik, który mógłby być dopełnieniem bliższym, to <b>si passivante</b> i czasownik zgadza się z jego liczbą: <em>si <b>vendono</b> case</em>. Jeśli takiego rzeczownika nie ma albo czasownik jest nieprzechodni, to <b>si impersonale</b> i forma zostaje w liczbie pojedynczej: <em>si <b>lavora</b> troppo</em>."
      },
      {
        h: "Ci si: zderzenie dwóch si",
        p: "Bezosobowe <em>si</em> z czasownikiem zwrotnym dałoby „si si”, więc pierwsze przechodzi w <strong>ci</strong>: <em><b>ci si</b> alza presto</em>, <em>ci si abitua a tutto</em>, <em>ci si annoia</em>."
      },
      {
        h: "Czasy złożone: zawsze essere",
        p: "Bezosobowe <em>si</em> bierze <em>essere</em>, nawet gdy czasownik normalnie wymaga <em>avere</em>: <em>si <b>è</b> mangiato bene</em>. Imiesłów zostaje wtedy w liczbie pojedynczej rodzaju męskiego (<em>mangiato</em>), ale przymiotnik orzecznikowy idzie w liczbę mnogą: <em>si è stati contenti</em>."
      }
    ],
    grammar: {
      title: "Si — tablica rozstrzygająca",
      table: {
        head: ["kontekst", "forma", "przykład"],
        rows: [
          ["zwrotny", "si + czasownik", "Si sveglia alle sei."],
          ["wzajemny", "si + l. mnoga", "Si scrivono ogni giorno."],
          ["bezosobowy", "si + 3 os. l. poj.", "Si lavora troppo."],
          ["bierny l. poj.", "si + 3 os. l. poj.", "Si vende una casa."],
          ["bierny l. mn.", "si + 3 os. l. mn.", "Si vendono case."],
          ["zwrotny bezosobowy", "ci si", "Ci si alza presto."],
          ["czas złożony", "si è + imiesłów", "Si è mangiato bene."],
          ["z przymiotnikiem", "si è + l. mnoga", "Si è stati fortunati."]
        ]
      },
      examples: [
        { tr: "W tym biurze pracuje się za dużo i zarabia za mało." },
        { tr: "Wszystkie domy sprzedano w dwa miesiące." },
        { tr: "Człowiek przyzwyczaja się nawet do najgorszego." },
        { tr: "Dyskutowano długo, bez rezultatu." },
        { tr: "Kiedy jest się młodym, nie docenia się czasu." },
        { tr: "Kierownicę trzyma się dwiema rękami." }
      ]
    },
    vocab: [
      "przyzwyczajać się do",
      "nudzić się",
      "nie doceniać",
      "przeceniać",
      "dyskutować",
      "zarabiać",
      "zdawać sobie sprawę",
      "dostosowywać się",
      "najgorsze / najlepsze",
      "bez rezultatu",
      "długo",
      "ogólnie"
    ],
    exercises: [
      {
        q: "„Qui si ___ case.” (sprzedaje się domy)",
        opts: ["vende", "vendono", "vendere"],
        why: "Si passivante zgadza się z rzeczownikiem w liczbie mnogiej."
      },
      {
        q: "„In questo ufficio si ___ troppo.” (lavorare)",
        opts: ["lavora", "lavorano", "lavorare"],
        why: "Brak dopełnienia bliższego → si impersonale, liczba pojedyncza."
      },
      { q: "Uzupełnij: „___ si alza presto in campagna.” (bezosobowo, alzarsi)" },
      { q: "Uzupełnij: „Si ___ discusso a lungo.” (czas złożony)" },
      {
        q: "„Si è stati fortunati” — dlaczego „stati”, a nie „stato”?",
        opts: [
          "To błąd",
          "Przymiotnik po si bezosobowym idzie w liczbę mnogą",
          "Bo essere jest nieregularne"
        ]
      },
      {
        q: "W których zdaniach si jest bierne (passivante)?",
        opts: ["Si vendono panini.", "Si lavora molto.", "Si affittano appartamenti.", "Ci si annoia."]
      },
      { q: "Uzupełnij formy.", tr: "We Włoszech dobrze się je, ale pracuje się za wiele godzin." },
      { q: "„Człowiek przyzwyczaja się do wszystkiego.”" },
      { tr: "Dyskutowano długo, ale nie doszło do żadnego wniosku." },
      { tr: "Kiedy jest się młodym, nie docenia się czasu." }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Gramatyka zaawansowana",
    title: "Pozycja przymiotnika a znaczenie",
    objectives: [
      "rozpoznać zmianę znaczenia zależną od pozycji",
      "użyć przymiotnika świadomie",
      "unikać nieporozumień w tekstach"
    ],
    theory: [
      {
        h: "Przed rzeczownikiem: sens przenośny lub subiektywny",
        p: "Przymiotnik <b>przed</b> rzeczownikiem zwykle nie odróżnia, tylko charakteryzuje: <em>un <b>vecchio</b> amico</em> to przyjaciel od dawna, nie stary wiekiem. <b>Po</b> rzeczowniku przymiotnik odróżnia i zwykle ma znaczenie dosłowne: <em>un amico <b>vecchio</b></em>."
      },
      {
        h: "Pary do zapamiętania",
        list: [
          "<em>un grande uomo</em> (wybitny) — <em>un uomo grande</em> (duży)",
          "<em>un buon medico</em> (dobry fachowiec) — <em>un medico buono</em> (dobry człowiek)",
          "<em>un alto magistrato</em> (wysoko postawiony) — <em>un magistrato alto</em> (wysoki wzrostem)",
          "<em>una certa informazione</em> (jakaś) — <em>un'informazione certa</em> (pewna, sprawdzona)",
          "<em>un povero uomo</em> (nieszczęśnik) — <em>un uomo povero</em> (ubogi)",
          "<em>diverse persone</em> (kilka) — <em>persone diverse</em> (różne, odmienne)",
          "<em>un semplice impiegato</em> (zwykły, szeregowy) — <em>un impiegato semplice</em> (prostoduszny)"
        ]
      },
      {
        h: "Dlaczego to ważne na C1",
        p: "W tekstach prasowych i literackich to rozróżnienie niesie znaczenie, a nie styl. Odczytanie <em>una certa informazione</em> jako „pewna informacja” zamiast „jakaś informacja” odwraca sens zdania."
      },
      {
        tip: "Przymiotnik przed rzeczownikiem bywa też sygnałem rejestru literackiego: <em>la dolce vita</em>, <em>l'alto mare</em>, <em>la vecchia guardia</em> to wyrażenia zastygłe."
      }
    ],
    grammar: {
      title: "Pozycja i znaczenie",
      table: {
        head: ["przed", "po", "różnica"],
        rows: [
          ["un vecchio amico", "un amico vecchio", "od dawna / stary wiekiem"],
          ["un grande uomo", "un uomo grande", "wybitny / duży"],
          ["un buon medico", "un medico buono", "kompetentny / dobry człowiek"],
          ["una certa notizia", "una notizia certa", "jakaś / pewna"],
          ["un povero uomo", "un uomo povero", "nieszczęśnik / ubogi"],
          ["diverse persone", "persone diverse", "kilka / różne"],
          ["un semplice errore", "un errore semplice", "zwykły / łatwy"]
        ]
      },
      examples: [
        { tr: "To wybitny fachowiec, choć trudny człowiek." },
        { tr: "Otrzymałem pewną informację, ale nie jest to informacja pewna." },
        { tr: "To tylko zwykłe nieporozumienie." },
        { tr: "Spotkałem kilka bardzo różniących się osób." },
        { tr: "Biedny chłopak: stracił wszystko." },
        { tr: "Mieszka w starym, ale przepięknym domu." }
      ]
    },
    vocab: [
      "nieporozumienie",
      "fachowiec",
      "stara gwardia",
      "wysoki urzędnik",
      "zwykły, szeregowy",
      "jakiś / pewny",
      "jedyny / niepowtarzalny",
      "prawdziwy / autentyczny",
      "nowy / kolejny",
      "jedyny / samotny",
      "odróżniać",
      "niuans"
    ],
    exercises: [
      {
        q: "„Un vecchio amico” znaczy:",
        opts: ["stary wiekiem przyjaciel", "przyjaciel od dawna", "były przyjaciel"]
      },
      {
        q: "„Un'informazione certa” znaczy:",
        opts: ["jakaś informacja", "pewna, sprawdzona informacja", "informacja poufna"]
      },
      { q: "„Diverse persone” znaczy:", opts: ["różne osoby", "kilka osób", "obce osoby"] },
      {
        q: "Połącz wyrażenie ze znaczeniem.",
        pairs: ["wybitny człowiek", "duży człowiek", "nieszczęśnik", "człowiek ubogi"]
      },
      {
        q: "Wstaw przymiotnik we właściwej pozycji (przed lub po).",
        tr: "Otrzymałem jakąś wiadomość, ale nie jest to wiadomość pewna."
      },
      { q: "„To tylko zwykłe nieporozumienie.”" },
      {
        q: "Dlaczego to rozróżnienie jest ważne w tekstach prasowych?",
        opts: [
          "Bo brzmi elegancko",
          "Bo pozycja przymiotnika zmienia znaczenie zdania",
          "Bo tego wymaga gramatyka"
        ]
      },
      { tr: "To wybitny fachowiec, choć trudny człowiek." },
      { tr: "To nie jest dobry człowiek będący lekarzem, to dobry lekarz: dwie różne rzeczy." },
      { tr: "Spotkałem kilka bardzo różniących się osób." }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Gramatyka zaawansowana",
    title: "Wzmocnienia i superlatywy",
    objectives: [
      "użyć prefiksów wzmacniających",
      "znać superlatywy idiomatyczne",
      "rozpoznać formy -errimo"
    ],
    theory: [
      {
        h: "Powtórzenie przymiotnika",
        p: "Najbardziej potoczny sposób wzmocnienia to powtórzenie: <em>Maria è magra magra</em>, <em>un caffè caldo caldo</em>, <em>piano piano</em>. Nie jest to błąd ani niedbałość, tylko żywy mechanizm włoszczyzny mówionej."
      },
      {
        h: "Prefiksy",
        p: "<em>arci-</em> (arcicontento), <em>stra-</em> (straricco, strapieno), <em>iper-</em> (iperattivo), <em>super-</em> (superdotato), <em>ultra-</em> (ultramoderno), <em>mega-</em>. Rejestr potoczny lub dziennikarski; w tekście formalnym lepiej użyć <em>estremamente</em>."
      },
      {
        h: "Superlatywy idiomatyczne",
        p: "Utarte porównania, których nie da się przewidzieć: <em>stanco morto</em> (skonany), <em>ubriaco fradicio</em> (kompletnie pijany), <em>povero in canna</em> (biedny jak mysz kościelna), <em>buono come il pane</em>, <em>pieno zeppo</em> (nabity), <em>bagnato fradicio</em> (przemoczony), <em>innamorato cotto</em> (zakochany po uszy)."
      },
      {
        h: "Formy -errimo i -entissimo",
        p: "Uczone superlatywy od przymiotników łacińskiego pochodzenia: <em>acre → acerrimo</em>, <em>celebre → celeberrimo</em>, <em>integro → integerrimo</em>, <em>misero → miserrimo</em>; oraz <em>benevolo → benevolentissimo</em>. Występują głównie w piśmie."
      }
    ],
    grammar: {
      title: "Wzmocnienia",
      table: {
        head: ["typ", "przykład", "rejestr"],
        rows: [
          ["powtórzenie", "magra magra", "mowa"],
          ["-issimo", "bellissimo", "neutralny"],
          ["prefiks", "straricco, iperattivo", "potoczny / prasa"],
          ["idiom", "stanco morto", "mowa"],
          ["-errimo", "celeberrimo", "pismo"],
          ["formalny", "estremamente / oltremodo", "pismo"]
        ]
      },
      examples: [
        { tr: "Jestem skonany, nie daję rady." },
        { tr: "Lokal był nabity po brzegi." },
        { tr: "To przypadek bardzo znany w historii prawa." },
        { tr: "Jest przeszczęśliwy z powodu wiadomości." },
        { tr: "Bardzo gorącą herbatę poproszę." },
        { tr: "Zaciekły przeciwnik rządu." }
      ]
    },
    vocab: [
      "skonany",
      "kompletnie pijany",
      "nabity po brzegi",
      "przemoczony do suchej nitki",
      "zakochany po uszy",
      "biedny jak mysz kościelna",
      "dobry jak chleb",
      "przebogaty",
      "nadaktywny",
      "przesławny",
      "zaciekły",
      "nad wyraz"
    ],
    exercises: [
      {
        q: "Połącz idiom ze znaczeniem.",
        pairs: ["skonany", "nabity", "zakochany po uszy", "bardzo biedny"]
      },
      { q: "„Ubriaco fradicio” znaczy:", opts: ["lekko wstawiony", "kompletnie pijany", "przemoczony"] },
      { q: "Utwórz superlatyw uczony od „celebre”: ___" },
      { q: "Utwórz superlatyw uczony od „acre”: ___" },
      {
        q: "„Magra magra” to:",
        opts: ["błąd stylistyczny", "potoczne wzmocnienie przez powtórzenie", "liczba mnoga"]
      },
      { q: "Który wariant pasuje do tekstu formalnego?", opts: ["straricco", "ricchissimo", "megaricco"] },
      { q: "Uzupełnij idiomy.", tr: "Po podróży byłem skonany, a sala była nabita po brzegi." },
      { q: "„Jest zaciekłym przeciwnikiem tej reformy.”" },
      { tr: "Był przemoczony do suchej nitki i skonany, ale się uśmiechał." },
      { tr: "Lokal był nabity po brzegi, nie dało się znaleźć miejsca." }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 1",
    objectives: ["sprawdzić si, pozycję przymiotnika i superlatywy"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Qui si ___ case.”", opts: ["vende", "vendono", "vendere"] },
      { q: "„In ufficio si ___ troppo.” (lavorare)", opts: ["lavora", "lavorano", "lavorare"] },
      { q: "„___ si alza presto.” (bezosobowo, zwrotnie)" },
      { q: "„Si ___ discusso a lungo.”" },
      { q: "„Un vecchio amico”:", opts: ["stary wiekiem", "od dawna", "były"] },
      { q: "„Diverse persone”:", opts: ["różne osoby", "kilka osób", "obce osoby"] },
      { q: "Superlatyw od „celebre”: ___" },
      { q: "Połącz.", pairs: ["skonany", "nabity", "zaciekły", "bardzo biedny"] },
      { tr: "Wszystkie domy sprzedano w niecałe dwa miesiące." },
      { tr: "Człowiek przyzwyczaja się do wszystkiego, nawet do najgorszego." }
    ]
  },
  "unit:c1-u02": {
    title: "Czasowniki z zaimkami zrośniętymi",
    grammarNote: "verbi pronominali · idiomatyka · rejestr mówiony"
  },
  "lesson:c1-u02-l1": {
    theme: "Gramatyka zaawansowana",
    title: "Czasowniki z wbudowanymi zaimkami",
    objectives: [
      "rozpoznać czasowniki z zaimkami zrośniętymi",
      "odmienić je w czasach złożonych",
      "użyć w naturalnej rozmowie"
    ],
    theory: [
      {
        h: "Znaczenia nie da się wyprowadzić z części",
        p: "<em>Prendersela</em> nie znaczy „wziąć to sobie”, tylko „obrazić się”. <em>Cavarsela</em> nie ma nic wspólnego z „wyciąganiem”. To osobne jednostki leksykalne, których trzeba się uczyć jak słówek, nie jak konstrukcji."
      },
      {
        h: "Odmiana",
        p: "Zaimki rozdzielają się i wracają przed czasownik: <em>cavarsela → <b>me la</b> cavo</em>, <em>te la cavi</em>, <em>se la cava</em>. W czasach złożonych zawsze <em>essere</em>, a imiesłów zgadza się z <em>la</em>: <em>me la sono cavat<b>a</b></em>, <em>ce l'ho fatt<b>a</b></em>."
      },
      {
        h: "Najczęstsze",
        list: [
          "<em>farcela</em> — dać radę: <em>Ce l'ho fatta!</em>",
          "<em>cavarsela</em> — radzić sobie: <em>Me la cavo con l'italiano.</em>",
          "<em>prendersela</em> — obrazić się: <em>Non te la prendere.</em>",
          "<em>andarsene</em> — iść sobie: <em>Me ne vado.</em>",
          "<em>fregarsene</em> — mieć w nosie: <em>Se ne frega.</em>",
          "<em>avercela con</em> — mieć pretensje: <em>Ce l'ha con me.</em>",
          "<em>sentirsela</em> — czuć się na siłach: <em>Non me la sento.</em>",
          "<em>intendersene</em> — znać się: <em>Se ne intende di vini.</em>"
        ]
      },
      {
        tip: "<em>Ce l'ho fatta</em> to jedno z najczęstszych zdań włoskiej codzienności. Zwróć uwagę na <em>l'</em>: to skrócone <em>la</em>, dlatego imiesłów kończy się na <em>-a</em>."
      }
    ],
    grammar: {
      title: "Odmiana verbi pronominali",
      table: {
        head: ["osoba", "farcela", "cavarsela", "andarsene"],
        rows: [
          ["io", "ce la faccio", "me la cavo", "me ne vado"],
          ["tu", "ce la fai", "te la cavi", "te ne vai"],
          ["lui / lei", "ce la fa", "se la cava", "se ne va"],
          ["noi", "ce la facciamo", "ce la caviamo", "ce ne andiamo"],
          ["voi", "ce la fate", "ve la cavate", "ve ne andate"],
          ["loro", "ce la fanno", "se la cavano", "se ne vanno"],
          ["czas przeszły", "ce l'ho fatta", "me la sono cavata", "me ne sono andato/a"]
        ]
      },
      examples: [
        { tr: "Udało się, zdałem egzamin!" },
        { tr: "Radzę sobie całkiem nieźle z niemieckim." },
        { tr: "Nie obrażaj się, to nie było do ciebie." },
        { tr: "Wyszedł, nie żegnając się." },
        { tr: "Nie czuję się na siłach prowadzić dziś w nocy." },
        { tr: "Masz do mnie o coś pretensje?" }
      ]
    },
    vocab: [
      "dać radę",
      "radzić sobie",
      "obrazić się",
      "iść sobie",
      "mieć w nosie",
      "mieć pretensje do",
      "czuć się na siłach",
      "znać się na",
      "radzić sobie z czymś samemu",
      "przestać",
      "dać spokój (potocznie)",
      "świetnie się bawić"
    ],
    exercises: [
      { q: "Uzupełnij: „___ l'ho fatta!” (udało mi się)" },
      { q: "Uzupełnij: „___ la cavo con l'italiano.” (radzę sobie)" },
      { q: "Uzupełnij: „Non ___ la prendere.” (nie obrażaj się)" },
      {
        q: "„Se ne frega di tutto” znaczy:",
        opts: ["martwi się wszystkim", "ma wszystko w nosie", "zajmuje się wszystkim"]
      },
      {
        q: "Dlaczego „me la sono cavata”, a nie „cavato”?",
        opts: ["To błąd", "Imiesłów zgadza się z la", "Bo mówi kobieta"]
      },
      { q: "Połącz.", pairs: ["czuć się na siłach", "znać się na", "przestać", "świetnie się bawić"] },
      { q: "Uzupełnij zaimki.", tr: "Nie czuję się na siłach prowadzić, idę pieszo." },
      { q: "„Masz do mnie o coś pretensje?”" },
      { tr: "Wyszedł, nie żegnając się z nikim." },
      { tr: "Radzę sobie całkiem nieźle, ale naprawdę się na tym nie znam." }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Gramatyka zaawansowana",
    title: "Bierność modalna i stylistyczna",
    objectives: [
      "użyć andare + imiesłów w znaczeniu konieczności",
      "wybrać venire dla podkreślenia procesu",
      "rozpoznać te formy w tekstach urzędowych"
    ],
    theory: [
      {
        h: "Andare = trzeba",
        p: "<em>La domanda <b>va presentata</b> entro il 30.</em> Nie „jest przedstawiana”, tylko „trzeba ją złożyć”. Ta forma nie ma odpowiednika w polskiej stronie biernej i jest jedną z pułapek tłumaczeniowych na poziomie C1."
      },
      {
        h: "Uwaga na ograniczenie",
        p: "Bierność z <em>andare</em> działa <b>tylko w czasach prostych</b> (presente, imperfetto, futuro). „È andato presentato” nie istnieje w tym znaczeniu — w czasach złożonych trzeba użyć <em>doveva essere presentato</em>."
      },
      {
        h: "Venire: proces zamiast stanu",
        p: "<em>La legge <b>viene applicata</b> dal 2020</em> podkreśla działanie w toku, podczas gdy <em>è applicata</em> może być odczytane jako stan. W tekstach prawnych i urzędowych <em>venire</em> jest bardzo częste."
      },
      {
        h: "Trzeci wariant: essere da + bezokolicznik",
        p: "<em>Questo capitolo <b>è da rivedere</b>.</em> Znaczenie zbliżone do <em>va rivisto</em>, rejestr nieco lżejszy i bardziej mówiony."
      }
    ],
    grammar: {
      title: "Warianty bierności",
      table: {
        head: ["forma", "znaczenie", "ograniczenie"],
        rows: [
          ["essere + imiesłów", "bierność ogólna", "wszystkie czasy"],
          ["venire + imiesłów", "proces, powtarzalność", "tylko czasy proste"],
          ["andare + imiesłów", "konieczność", "tylko czasy proste"],
          ["si passivante", "rejestr mówiony", "3 osoba"],
          ["essere da + bezokolicznik", "do zrobienia", "rejestr lżejszy"],
          ["andare perso / smarrito", "przypadkowa strata", "wyjątek leksykalny"]
        ]
      },
      examples: [
        { tr: "Wniosek trzeba złożyć do trzydziestego." },
        { tr: "Te dane trzeba zweryfikować przed publikacją." },
        { tr: "Regulamin jest aktualizowany co roku." },
        { tr: "Rozdział jest jeszcze do poprawki." },
        { tr: "Zaginęły dwa dokumenty.", note: "andare + perso = przypadkowa strata" },
        { tr: "Wszystkie wnioski zostały odrzucone." }
      ]
    },
    vocab: [
      "złożyć wniosek",
      "weryfikować",
      "aktualizować",
      "odrzucać",
      "regulamin",
      "publikacja",
      "zaginąć",
      "zgubić",
      "do poprawki",
      "w terminie",
      "obowiązek formalny",
      "obowiązujący"
    ],
    exercises: [
      {
        q: "„La domanda va presentata” znaczy:",
        opts: ["Wniosek jest składany", "Wniosek trzeba złożyć", "Wniosek został złożony"]
      },
      {
        q: "Które zdanie jest niepoprawne?",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."],
        why: "Bierność z andare nie działa w czasach złożonych."
      },
      { q: "Uzupełnij: „Questi dati ___ verificati.” (trzeba zweryfikować)" },
      { q: "Uzupełnij: „Il regolamento ___ aggiornato ogni anno.” (venire)" },
      {
        q: "„Sono andati persi due documenti” znaczy:",
        opts: ["Trzeba było zgubić dokumenty", "Dwa dokumenty zaginęły", "Dokumenty poszły"]
      },
      {
        q: "Uzupełnij formy.",
        tr: "Wniosek trzeba złożyć do trzydziestego; dane są weryfikowane przez biuro."
      },
      { q: "„Ten rozdział trzeba jeszcze poprawić.”" },
      { tr: "Wszystkie wnioski zostały odrzucone." },
      { tr: "Formularz trzeba wypełnić w całości i podpisać na dole." },
      { tr: "Te dane trzeba zweryfikować przed publikacją." }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Leksyka",
    title: "Idiomy w użyciu",
    objectives: [
      "rozumieć częste idiomy w rozmowie i prasie",
      "użyć kilku z nich naturalnie",
      "unikać kalki z polskiego"
    ],
    theory: [
      {
        h: "Idiom to skrót myślowy, nie ozdoba",
        p: "Włoski idiom najczęściej zastępuje całe zdanie. <em>Non ci piove</em> znaczy „nie ma co do tego wątpliwości”, <em>tagliare la testa al toro</em> — „uciąć dyskusję decyzją”. Użycie ich we właściwym miejscu skraca wypowiedź i podnosi jej naturalność."
      },
      {
        h: "Idiomy, które faktycznie usłyszysz",
        list: [
          "<em>in bocca al lupo</em> — powodzenia (odp. <em>crepi</em>)",
          "<em>non vedo l'ora</em> — nie mogę się doczekać",
          "<em>avere le mani in pasta</em> — mieć wpływy",
          "<em>prendere in giro</em> — nabijać się",
          "<em>costare un occhio della testa</em> — kosztować majątek",
          "<em>essere al verde</em> — być spłukanym",
          "<em>fare il punto</em> — podsumować sytuację",
          "<em>mettere nero su bianco</em> — spisać na papierze"
        ]
      },
      {
        h: "Fałszywi przyjaciele PL-IT",
        p: "<em>Confetti</em> to migdały w cukrze, nie konfetti (<em>coriandoli</em>). <em>Firma</em> to podpis, nie przedsiębiorstwo (<em>ditta, azienda</em>). <em>Camera</em> to pokój, nie aparat (<em>macchina fotografica</em>). <em>Morbido</em> to miękki, nie chorobliwy. <em>Colazione</em> to śniadanie, nie kolacja (<em>cena</em>)."
      },
      {
        tip: "Nie tłumacz polskich idiomów dosłownie. „Rzucać grochem o ścianę” po włosku brzmi <em>parlare al muro</em> — obraz jest inny, choć sens ten sam."
      }
    ],
    grammar: {
      title: "Idiomy i fałszywi przyjaciele",
      table: {
        head: ["włoski", "znaczenie", "uwaga"],
        rows: [
          ["non ci piove", "nie ma wątpliwości", "idiom"],
          ["non vedo l'ora", "nie mogę się doczekać", "+ di + bezokolicznik"],
          ["essere al verde", "być spłukanym", "idiom"],
          ["costare un occhio della testa", "kosztować majątek", "idiom"],
          ["firma", "podpis", "fałszywy przyjaciel"],
          ["camera", "pokój", "fałszywy przyjaciel"],
          ["colazione", "śniadanie", "fałszywy przyjaciel"],
          ["confetti", "migdały w cukrze", "fałszywy przyjaciel"]
        ]
      },
      examples: [
        { tr: "Nie mogę się doczekać, kiedy cię znów zobaczę." },
        { tr: "Ta podróż kosztowała majątek." },
        { tr: "Podsumujmy sytuację." },
        { tr: "Spiszmy wszystko na papierze." },
        { tr: "Ma wszędzie wpływy." },
        { tr: "Nabijasz się ze mnie?" }
      ]
    },
    vocab: [
      "nie ma wątpliwości",
      "nie mogę się doczekać",
      "być spłukanym",
      "kosztować majątek",
      "nabijać się",
      "podsumować",
      "czarno na białym",
      "mieć wpływy",
      "mówić do ściany",
      "podpis (nie: firma)",
      "firma, przedsiębiorstwo",
      "konfetti"
    ],
    exercises: [
      {
        q: "Połącz idiom ze znaczeniem.",
        pairs: ["nie ma wątpliwości", "być spłukanym", "podsumować", "nabijać się"]
      },
      { q: "„La firma” po włosku znaczy:", opts: ["przedsiębiorstwo", "podpis", "marka"] },
      { q: "„La colazione” to:", opts: ["kolacja", "śniadanie", "obiad"] },
      { q: "Uzupełnij: „Non vedo l'ora ___ rivederti.”" },
      {
        q: "„Costare un occhio della testa” znaczy:",
        opts: ["boleć", "kosztować bardzo dużo", "być bezcennym"]
      },
      {
        q: "Które to fałszywi przyjaciele wobec polskiego?",
        opts: ["camera", "firma", "tavolo", "confetti"]
      },
      { q: "Uzupełnij idiomy.", tr: "Ta podróż kosztowała majątek i teraz jestem spłukany." },
      { q: "„Podsumujmy sytuację i spiszmy to na papierze.”" },
      { tr: "Nie ma wątpliwości: decyzję trzeba podjąć do dziś." },
      { tr: "Nie mogę się doczekać końca tego projektu." }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 2",
    objectives: ["sprawdzić verbi pronominali, bierność modalną i idiomy"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„___ l'ho fatta!”" },
      { q: "„___ la cavo con l'italiano.”" },
      { q: "„Non ___ la prendere.”" },
      { q: "„Se ne frega”:", opts: ["martwi się", "ma w nosie", "zajmuje się"] },
      { q: "„Questi dati ___ verificati.” (trzeba)" },
      {
        q: "Niepoprawne:",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."]
      },
      { q: "„La firma”:", opts: ["przedsiębiorstwo", "podpis", "marka"] },
      { q: "Połącz.", pairs: ["być spłukanym", "nie ma wątpliwości", "podsumować", "czarno na białym"] },
      { tr: "Nie czuję się na siłach decydować teraz, przemyślę i dam znać." },
      { tr: "Udało się, ale wywinąłem się o włos." }
    ]
  },
  "unit:c1-u03": {
    title: "Rejestry i spójność tekstu",
    grammarNote: "burocratese · italiano parlato · dislokacje · mowa zależna"
  },
  "lesson:c1-u03-l1": {
    theme: "Styl",
    title: "Język urzędowy: czytać, nie pisać",
    objectives: [
      "rozszyfrować typowe konstrukcje urzędowe",
      "przełożyć je na zwykły włoski",
      "rozpoznać, kiedy rejestr jest nadużywany"
    ],
    theory: [
      {
        h: "Cechy rozpoznawcze",
        list: [
          "nominalizacja: <em>si procede all'erogazione</em> zamiast <em>si eroga</em>",
          "strona bierna i bezosobowość: <em>si comunica che…</em>",
          "wyrażenia odsyłające: <em>di cui sopra</em>, <em>il predetto</em>, <em>il suddetto</em>",
          "przyimki złożone: <em>ai sensi di</em>, <em>in ottemperanza a</em>, <em>ai fini di</em>",
          "słownictwo łacińskie: <em>effettuare</em> zamiast <em>fare</em>, <em>trattasi di</em> zamiast <em>si tratta di</em>"
        ]
      },
      {
        h: "Do czego to służy",
        p: "Rejestr urzędowy ma zapewnić precyzję i bezosobowość, ale często kosztem czytelności. Na poziomie C1 <b>rozumienie</b> tych tekstów jest umiejętnością konieczną; <b>pisanie</b> nimi nie jest zalecane poza kontekstem prawnym."
      },
      {
        h: "Ruch odwrotny: uproszczenie",
        p: "<em>Si comunica che il pagamento dovrà essere effettuato entro il termine di cui sopra</em> → <em>Il pagamento va fatto entro la data indicata.</em> To ćwiczenie, które warto robić na każdym urzędowym piśmie: skraca i wyjaśnia."
      },
      {
        tip: "Włoska administracja od lat prowadzi kampanię na rzecz uproszczenia języka (<em>semplificazione del linguaggio amministrativo</em>), ale w praktyce burocratese ma się dobrze."
      }
    ],
    grammar: {
      title: "Burocratese i jego tłumaczenie",
      table: {
        head: ["urzędowo", "zwykłym włoskim", "po polsku"],
        rows: [
          ["si comunica che", "vi informiamo che", "informujemy, że"],
          ["ai sensi dell'art. 5", "secondo l'articolo 5", "zgodnie z art. 5"],
          ["di cui sopra", "indicato prima", "wyżej wskazany"],
          ["effettuare il pagamento", "pagare", "zapłacić"],
          ["in ottemperanza a", "seguendo", "stosownie do"],
          ["il predetto documento", "quel documento", "wspomniany dokument"],
          ["trattasi di", "si tratta di", "chodzi o"]
        ]
      },
      examples: [
        { tr: "Informujemy, że biuro będzie zamknięte 2 czerwca." },
        { tr: "Płatności należy dokonać w ciągu trzydziestu dni." },
        { tr: "Zgodnie z obowiązującymi przepisami wniosek jest nieprzyjmowalny." },
        { tr: "Prosimy o załączenie kopii wyżej wskazanego dokumentu." },
        { tr: "Wspomniany termin jest nieprzekraczalny." },
        { tr: "Niniejszym wzywa się do zaprzestania." }
      ]
    },
    vocab: [
      "zgodnie z",
      "stosownie do",
      "wyżej wskazany",
      "wspomniany",
      "dokonać",
      "nieprzekraczalny",
      "nieprzyjmowalny",
      "obowiązujące przepisy",
      "wzywać do zaprzestania",
      "wniosek",
      "instytucja",
      "niedopełnienie obowiązku"
    ],
    exercises: [
      { q: "Połącz urzędowe z potocznym.", pairs: ["pagare", "secondo", "indicato prima", "si tratta di"] },
      {
        q: "„Il termine è perentorio” znaczy:",
        opts: ["termin jest orientacyjny", "termin jest nieprzekraczalny", "termin został przedłużony"]
      },
      {
        q: "„La domanda è irricevibile” znaczy:",
        opts: [
          "wniosek jest niekompletny",
          "wniosek nie może zostać przyjęty",
          "wniosek jest w trakcie rozpatrywania"
        ]
      },
      { q: "Uprość: „Il pagamento dovrà essere effettuato” → „Il pagamento ___ fatto”" },
      {
        q: "Uprość zdanie urzędowe.",
        tr: "Informujemy, że wcześniej wskazany wniosek nie może zostać przyjęty."
      },
      { q: "„Informujemy, że biuro będzie zamknięte.”" },
      {
        q: "Czy warto pisać burocratese na C1?",
        opts: [
          "Tak, to znak biegłości",
          "Nie, warto go rozumieć, ale pisać prościej",
          "Tak, w każdym kontekście zawodowym"
        ]
      },
      { tr: "Prosimy o załączenie kopii dokumentu." },
      { tr: "Zgodnie z obowiązującymi przepisami wniosek jest nieprzyjmowalny." },
      { tr: "Płatności należy dokonać w podanym terminie." }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Styl",
    title: "Włoski mówiony i neostandard",
    objectives: [
      "rozpoznać cechy włoskiego mówionego",
      "użyć dislokacji dla naturalności",
      "odróżnić neostandard od błędu"
    ],
    theory: [
      {
        h: "Neostandard: nie błąd, inny rejestr",
        list: [
          "<em>lui / lei</em> jako podmiot zamiast <em>egli / ella</em> — dziś norma",
          "<em>gli</em> zamiast <em>loro</em> („im”) — powszechne również w piśmie nieformalnym",
          "<em>che</em> polivalente: <em>il giorno che sono arrivato</em>",
          "<em>ci</em> zamiast <em>vi</em> jako miejsce: <em>ci vado</em>",
          "imperfetto w okresie warunkowym: <em>se lo sapevo…</em>"
        ]
      },
      {
        h: "Dislokacja: przesuwanie akcentu",
        p: "<em><b>Il libro</b>, l'ho letto ieri.</em> (dislokacja w lewo) i <em>L'ho letto ieri, <b>il libro</b>.</em> (w prawo). Element wysunięty jest tematem, a zaimek go „podtrzymuje”. To cecha żywego włoskiego, nie niedbałość, i bez niej mowa brzmi sztywno."
      },
      {
        h: "C'è presentativo",
        p: "<em>C'è Marco che ti cerca.</em> Konstrukcja wprowadza nowy element do rozmowy. Po polsku wypadłoby „Marco cię szuka”, ale włoski chętnie sygnalizuje nowość przez <em>c'è… che</em>."
      },
      {
        trap: "Neostandard jest akceptowany w mowie i w piśmie nieformalnym. W tekście egzaminacyjnym, formalnym mailu i publikacji obowiązuje standard: <em>se avessi saputo</em>, nie „se sapevo”."
      }
    ],
    grammar: {
      title: "Cechy mowy",
      table: {
        head: ["zjawisko", "przykład", "rejestr"],
        rows: [
          ["dislokacja w lewo", "Il libro, l'ho letto.", "mowa, akceptowane"],
          ["dislokacja w prawo", "L'ho letto, il libro.", "mowa"],
          ["c'è presentativo", "C'è Marco che ti cerca.", "mowa"],
          ["gli zamiast loro", "Gli ho detto tutto.", "neostandard"],
          ["che polivalente", "Il giorno che sono partito", "mowa"],
          ["imperfetto ipotetico", "Se lo sapevo, non venivo.", "tylko mowa"]
        ]
      },
      examples: [
        { tr: "W Rzymie nigdy nie byłem.", note: "dislokacja + ci" },
        { tr: "Kawę wypiję później." },
        { tr: "Twoja siostra czeka na ciebie na zewnątrz." },
        { tr: "Powiedziałem im, żeby się nie martwili." },
        { tr: "Tamtej historii zupełnie nie pamiętam." },
        { tr: "O pieniądzach nawet nie mówmy." }
      ]
    },
    vocab: [
      "dislokacja",
      "nowy standard językowy",
      "rejestr nieformalny",
      "mówioność",
      "spontaniczność",
      "temat / remat",
      "podkreślać",
      "podchwycić zaimkiem",
      "brzmieć naturalnie",
      "brzmieć sztywno",
      "akceptowalny",
      "niezalecany w piśmie"
    ],
    exercises: [
      {
        q: "„Il libro, l'ho letto ieri” to:",
        opts: ["błąd składniowy", "dislokacja w lewo, cecha żywego włoskiego", "konstrukcja urzędowa"]
      },
      {
        q: "Która konstrukcja jest niezalecana w piśmie formalnym?",
        opts: ["Gli ho detto tutto.", "Se lo sapevo, non venivo.", "A Roma ci vado spesso."]
      },
      { q: "Uzupełnij dislokację: „Il caffè, ___ prendo dopo.”" },
      { q: "Uzupełnij: „Di soldi, non ___ parliamo nemmeno.”" },
      {
        q: "„C'è Marco che ti cerca” służy do:",
        opts: ["opisania miejsca", "wprowadzenia nowej informacji do rozmowy", "wyrażenia wątpliwości"]
      },
      { q: "Przekształć na wersję z dislokacją.", tr: "Tamtej historii nie pamiętam." },
      { q: "„W Rzymie nigdy nie byłem.”" },
      {
        q: "Które cechy należą do neostandardu?",
        opts: ["lui jako podmiot", "gli zamiast loro", "egli jako podmiot", "che polivalente"]
      },
      { tr: "Tamtej historii zupełnie nie pamiętam." },
      { tr: "Kawę wypiję później, teraz nie mam ochoty." }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Styl",
    title: "Spójność tekstu pisanego",
    objectives: [
      "zbudować spójny tekst argumentacyjny",
      "użyć mechanizmów nawiązania",
      "unikać powtórzeń przez synonimy i hiperonimy"
    ],
    theory: [
      {
        h: "Dwa różne pojęcia",
        p: "<b>Coesione</b> to powierzchniowe wiązania: zaimki, konektory, powtórzenia leksykalne. <b>Coerenza</b> to logiczna ciągłość treści. Tekst może być spójny formalnie, a niespójny logicznie — i odwrotnie."
      },
      {
        h: "Mechanizmy nawiązania",
        list: [
          "zaimki: <em>lo, ne, ci, questo, ciò</em>",
          "synonimy i hiperonimy: <em>il provvedimento → la misura → l'intervento</em>",
          "nominalizacja poprzedniego zdania: <em>…hanno approvato la legge. <b>L'approvazione</b> ha suscitato…</em>",
          "wyrażenia odsyłające: <em>quanto detto, il fenomeno in questione, tale scelta</em>"
        ]
      },
      {
        h: "Progresja tematyczna",
        p: "W dobrze zbudowanym akapicie każde zdanie podejmuje element poprzedniego (temat) i dodaje nową informację (remat). Nagłe wprowadzenie zupełnie nowego tematu bez zapowiedzi łamie spójność, nawet jeśli konektory są na miejscu."
      },
      {
        tip: "Włoski styl pisany nie boi się długich zdań, ale ceni <b>jasną hierarchię</b> zdań podrzędnych. Trzy zdania podrzędne zagnieżdżone w sobie to znak, że akapit wymaga przepisania."
      }
    ],
    grammar: {
      title: "Narzędzia spójności",
      table: {
        head: ["mechanizm", "przykład", "funkcja"],
        rows: [
          ["zaimek", "…la riforma. La si è discussa a lungo.", "nawiązanie"],
          ["synonim", "il provvedimento / la misura", "unikanie powtórzeń"],
          ["nominalizacja", "hanno deciso → tale decisione", "kondensacja"],
          ["odsyłacz", "il fenomeno in questione", "precyzja"],
          ["konektor", "di conseguenza, per contro", "relacja logiczna"],
          ["zapowiedź", "come vedremo, in primo luogo", "orientacja czytelnika"]
        ]
      },
      examples: [
        { tr: "Reforma została przyjęta. Ta decyzja wywołała sprzeczne reakcje." },
        { tr: "Zjawisko, o którym mowa, dotyczy przede wszystkim dużych miast." },
        { tr: "Jak zobaczymy, problem nie jest wyłącznie ekonomiczny." },
        { tr: "Z drugiej strony dane regionalne opowiadają inną historię." },
        { tr: "Powiedziane dotąd dotyczy sektora prywatnego." },
        { tr: "W konsekwencji tę regulację należałoby zrewidować." }
      ]
    },
    vocab: [
      "spójność formalna",
      "spójność logiczna",
      "regulacja, decyzja",
      "środek, regulacja",
      "o którym mowa",
      "taki, ów",
      "to, co powiedziano",
      "z drugiej strony",
      "w konsekwencji",
      "wywoływać",
      "sprzeczny",
      "dotyczyć"
    ],
    exercises: [
      {
        q: "Czym różni się coesione od coerenza?",
        opts: [
          "Niczym",
          "Coesione to wiązania formalne, coerenza to ciągłość logiczna",
          "Coesione dotyczy mowy, coerenza pisma"
        ]
      },
      { q: "Uzupełnij nawiązanie: „Hanno approvato la legge. ___ decisione ha sorpreso tutti.”" },
      { q: "Uzupełnij: „Il fenomeno in ___ riguarda le grandi città.”" },
      { q: "Połącz.", pairs: ["z drugiej strony", "w konsekwencji", "wywoływać", "to, co powiedziano"] },
      {
        q: "Który mechanizm najlepiej usuwa powtórzenie rzeczownika?",
        opts: ["powtórzenie z synonimem lub hiperonimem", "dodanie przymiotnika", "zmiana szyku"]
      },
      {
        q: "Uzupełnij spójność akapitu.",
        tr: "Reforma została przyjęta. Ta decyzja wywołała sprzeczne reakcje. W konsekwencji regulację należałoby zrewidować."
      },
      { q: "„Jak zobaczymy, problem nie jest wyłącznie ekonomiczny.”" },
      {
        q: "Trzy zagnieżdżone zdania podrzędne to znak, że:",
        opts: ["tekst jest wyrafinowany", "akapit wymaga przepisania", "styl jest urzędowy"]
      },
      { tr: "Powiedziane dotąd dotyczy przede wszystkim sektora prywatnego." },
      { tr: "W konsekwencji uważam, że tę regulację należałoby zrewidować." }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Egzamin",
    title: "Egzamin końcowy poziomu C1",
    objectives: ["sprawdzić si, verbi pronominali, rejestry i spójność"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Qui si ___ appartamenti.”", opts: ["affitta", "affittano", "affittare"] },
      { q: "„___ si abitua a tutto.”" },
      { q: "„Un'informazione certa”:", opts: ["jakaś", "pewna, sprawdzona", "poufna"] },
      { q: "„___ l'ho fatta!”" },
      { q: "„Non ___ la sento di decidere.”" },
      { q: "„La domanda ___ presentata entro il 30.” (trzeba)" },
      { q: "„Il termine è perentorio”:", opts: ["orientacyjny", "nieprzekraczalny", "przedłużony"] },
      {
        q: "„Se lo sapevo, non venivo” to:",
        opts: ["standard pisany", "neostandard mówiony", "błąd zawsze"]
      },
      { q: "„Il fenomeno in ___ riguarda le città.”" },
      { q: "Superlatyw uczony od „acre”: ___" },
      { q: "„Te dane trzeba zweryfikować przed publikacją.”" },
      { tr: "Człowiek przyzwyczaja się do wszystkiego, ale nigdy do końca się nie godzi." }
    ]
  }
});
