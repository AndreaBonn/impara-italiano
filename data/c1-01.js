/* ============================================================
   C1 — jednostki 1–3
   I valori del SI · Verbi pronominali · Registri e testualità
   ============================================================ */
LINGUAI.addUnits("C1", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 1 — I VALORI DEL SI
   ══════════════════════════════════════════════════════════════ */
{
  id: "c1-u01",
  icon: "🔎",
  titleIt: "I valori del si",
  titlePl: "Wszystkie znaczenia SI",
  grammarPl: "si zwrotne, wzajemne, bezosobowe, bierne · ci si",
  lessons: [
  {
    id: "c1-u01-l1",
    cefr: "C1",
    themePl: "Gramatyka zaawansowana",
    titleIt: "Sei valori, una particella",
    titlePl: "Rozróżnianie wartości si",
    objectivesPl: [
      "rozpoznać wszystkie funkcje si w tekście",
      "odróżnić si bezosobowe od biernego",
      "poprawnie użyć ci si"
    ],
    theory: [
      { h: "Jedna forma, sześć zadań",
        list: [
          "<b>zwrotne</b>: <em>Marco si lava.</em> — robi coś sobie",
          "<b>wzajemne</b>: <em>Si salutano ogni mattina.</em> — nawzajem",
          "<b>bezosobowe</b>: <em>In Italia si mangia bene.</em> — ludzie w ogóle",
          "<b>bierne (passivante)</b>: <em>Qui si vendono panini.</em> — czasownik zgadza się z rzeczą",
          "<b>instruktażowe</b>: <em>Il volante si tiene così.</em> — tak się to robi",
          "<b>toskańskie „my”</b>: <em>Stasera noi si va al cinema.</em> — regionalne"
        ] },
      { h: "Test na odróżnienie bezosobowego od biernego",
        p: "Jeśli po czasowniku stoi rzeczownik, który mógłby być dopełnieniem bliższym, to <b>si passivante</b> i czasownik zgadza się z jego liczbą: <em>si <b>vendono</b> case</em>. Jeśli takiego rzeczownika nie ma albo czasownik jest nieprzechodni, to <b>si impersonale</b> i forma zostaje w liczbie pojedynczej: <em>si <b>lavora</b> troppo</em>." },
      { h: "Ci si: zderzenie dwóch si",
        p: "Bezosobowe <em>si</em> z czasownikiem zwrotnym dałoby „si si”, więc pierwsze przechodzi w <strong>ci</strong>: <em><b>ci si</b> alza presto</em>, <em>ci si abitua a tutto</em>, <em>ci si annoia</em>." },
      { h: "Czasy złożone: zawsze essere",
        p: "Bezosobowe <em>si</em> bierze <em>essere</em>, nawet gdy czasownik normalnie wymaga <em>avere</em>: <em>si <b>è</b> mangiato bene</em>. Imiesłów zostaje wtedy w liczbie pojedynczej rodzaju męskiego (<em>mangiato</em>), ale przymiotnik orzecznikowy idzie w liczbę mnogą: <em>si è stati contenti</em>." }
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
        ["In questo ufficio si lavora troppo e si guadagna poco.", "W tym biurze pracuje się za dużo i zarabia za mało."],
        ["Si sono vendute tutte le case in due mesi.", "Wszystkie domy sprzedano w dwa miesiące."],
        ["Ci si abitua anche al peggio.", "Człowiek przyzwyczaja się nawet do najgorszego."],
        ["Si è discusso a lungo, senza risultato.", "Dyskutowano długo, bez rezultatu."],
        ["Quando si è giovani, si sottovaluta il tempo.", "Kiedy jest się młodym, nie docenia się czasu."],
        ["Il volante si tiene con due mani.", "Kierownicę trzyma się dwiema rękami."]
      ]
    },
    vocab: [
      { it: "abituarsi a", pl: "przyzwyczajać się do" },
      { it: "annoiarsi", pl: "nudzić się" },
      { it: "sottovalutare", pl: "nie doceniać" },
      { it: "sopravvalutare", pl: "przeceniać" },
      { it: "discutere", pl: "dyskutować" },
      { it: "guadagnare", pl: "zarabiać" },
      { it: "rendersi conto", pl: "zdawać sobie sprawę" },
      { it: "adeguarsi", pl: "dostosowywać się" },
      { it: "il peggio / il meglio", pl: "najgorsze / najlepsze" },
      { it: "senza risultato", pl: "bez rezultatu" },
      { it: "a lungo", pl: "długo" },
      { it: "in generale", pl: "ogólnie" }
    ],
    exercises: [
      { t: "mcq", q: "„Qui si ___ case.” (sprzedaje się domy)",
        opts: ["vende", "vendono", "vendere"], a: 1,
        why: "Si passivante zgadza się z rzeczownikiem w liczbie mnogiej." },
      { t: "mcq", q: "„In questo ufficio si ___ troppo.” (lavorare)",
        opts: ["lavora", "lavorano", "lavorare"], a: 0,
        why: "Brak dopełnienia bliższego → si impersonale, liczba pojedyncza." },
      { t: "fill", q: "Uzupełnij: „___ si alza presto in campagna.” (bezosobowo, alzarsi)",
        a: ["ci"] },
      { t: "fill", q: "Uzupełnij: „Si ___ discusso a lungo.” (czas złożony)", a: ["è"] },
      { t: "mcq", q: "„Si è stati fortunati” — dlaczego „stati”, a nie „stato”?",
        opts: ["To błąd", "Przymiotnik po si bezosobowym idzie w liczbę mnogą", "Bo essere jest nieregularne"], a: 1 },
      { t: "multi", q: "W których zdaniach si jest bierne (passivante)?",
        opts: ["Si vendono panini.", "Si lavora molto.", "Si affittano appartamenti.", "Ci si annoia."], a: [0, 2] },
      { t: "cloze", q: "Uzupełnij formy.",
        text: "In Italia {{1}} mangia bene, ma {{2}} lavorano troppe ore.",
        gaps: [["si"], ["si"]],
        pl: "We Włoszech dobrze się je, ale pracuje się za wiele godzin." },
      { t: "trans", dir: "pl-it", q: "„Człowiek przyzwyczaja się do wszystkiego.”",
        a: ["ci si abitua a tutto"] },
      { t: "listen", it: "Si è discusso a lungo, ma non si è arrivati a nessuna conclusione.", pl: "Dyskutowano długo, ale nie doszło do żadnego wniosku." },
      { t: "speak", it: "Quando si è giovani, si sottovaluta il tempo.", pl: "Kiedy jest się młodym, nie docenia się czasu." }
    ]
  },
  {
    id: "c1-u01-l2",
    cefr: "C1",
    themePl: "Gramatyka zaawansowana",
    titleIt: "Un buon medico, un medico buono",
    titlePl: "Pozycja przymiotnika a znaczenie",
    objectivesPl: [
      "rozpoznać zmianę znaczenia zależną od pozycji",
      "użyć przymiotnika świadomie",
      "unikać nieporozumień w tekstach"
    ],
    theory: [
      { h: "Przed rzeczownikiem: sens przenośny lub subiektywny",
        p: "Przymiotnik <b>przed</b> rzeczownikiem zwykle nie odróżnia, tylko charakteryzuje: <em>un <b>vecchio</b> amico</em> to przyjaciel od dawna, nie stary wiekiem. <b>Po</b> rzeczowniku przymiotnik odróżnia i zwykle ma znaczenie dosłowne: <em>un amico <b>vecchio</b></em>." },
      { h: "Pary do zapamiętania",
        list: [
          "<em>un grande uomo</em> (wybitny) — <em>un uomo grande</em> (duży)",
          "<em>un buon medico</em> (dobry fachowiec) — <em>un medico buono</em> (dobry człowiek)",
          "<em>un alto magistrato</em> (wysoko postawiony) — <em>un magistrato alto</em> (wysoki wzrostem)",
          "<em>una certa informazione</em> (jakaś) — <em>un'informazione certa</em> (pewna, sprawdzona)",
          "<em>un povero uomo</em> (nieszczęśnik) — <em>un uomo povero</em> (ubogi)",
          "<em>diverse persone</em> (kilka) — <em>persone diverse</em> (różne, odmienne)",
          "<em>un semplice impiegato</em> (zwykły, szeregowy) — <em>un impiegato semplice</em> (prostoduszny)"
        ] },
      { h: "Dlaczego to ważne na C1",
        p: "W tekstach prasowych i literackich to rozróżnienie niesie znaczenie, a nie styl. Odczytanie <em>una certa informazione</em> jako „pewna informacja” zamiast „jakaś informacja” odwraca sens zdania." },
      { tip: "Przymiotnik przed rzeczownikiem bywa też sygnałem rejestru literackiego: <em>la dolce vita</em>, <em>l'alto mare</em>, <em>la vecchia guardia</em> to wyrażenia zastygłe." }
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
        ["È un grande professionista, anche se un uomo difficile.", "To wybitny fachowiec, choć trudny człowiek."],
        ["Ho ricevuto una certa informazione, ma non è un'informazione certa.", "Otrzymałem pewną informację, ale nie jest to informacja pewna."],
        ["Non è che un semplice malinteso.", "To tylko zwykłe nieporozumienie."],
        ["Ho incontrato diverse persone molto diverse tra loro.", "Spotkałem kilka bardzo różniących się osób."],
        ["Un povero ragazzo: ha perso tutto.", "Biedny chłopak: stracił wszystko."],
        ["Vive in una casa vecchia ma bellissima.", "Mieszka w starym, ale przepięknym domu."]
      ]
    },
    vocab: [
      { it: "il malinteso", pl: "nieporozumienie" },
      { it: "il professionista", pl: "fachowiec" },
      { it: "la vecchia guardia", pl: "stara gwardia" },
      { it: "l'alto funzionario", pl: "wysoki urzędnik" },
      { it: "un semplice", pl: "zwykły, szeregowy" },
      { it: "certo / certa", pl: "jakiś / pewny" },
      { it: "unico", pl: "jedyny / niepowtarzalny" },
      { it: "vero", pl: "prawdziwy / autentyczny" },
      { it: "nuovo", pl: "nowy / kolejny" },
      { it: "solo", pl: "jedyny / samotny" },
      { it: "distinguere", pl: "odróżniać" },
      { it: "la sfumatura", pl: "niuans" }
    ],
    exercises: [
      { t: "mcq", q: "„Un vecchio amico” znaczy:",
        opts: ["stary wiekiem przyjaciel", "przyjaciel od dawna", "były przyjaciel"], a: 1 },
      { t: "mcq", q: "„Un'informazione certa” znaczy:",
        opts: ["jakaś informacja", "pewna, sprawdzona informacja", "informacja poufna"], a: 1 },
      { t: "mcq", q: "„Diverse persone” znaczy:",
        opts: ["różne osoby", "kilka osób", "obce osoby"], a: 1 },
      { t: "match", q: "Połącz wyrażenie ze znaczeniem.",
        pairs: [["un grande uomo", "wybitny człowiek"], ["un uomo grande", "duży człowiek"], ["un povero uomo", "nieszczęśnik"], ["un uomo povero", "człowiek ubogi"]] },
      { t: "cloze", q: "Wstaw przymiotnik we właściwej pozycji (przed lub po).",
        text: "Ho ricevuto una {{1}} notizia, ma non è una notizia {{2}}.",
        gaps: [["certa"], ["certa"]],
        pl: "Otrzymałem jakąś wiadomość, ale nie jest to wiadomość pewna." },
      { t: "trans", dir: "pl-it", q: "„To tylko zwykłe nieporozumienie.”",
        a: ["è solo un semplice malinteso", "non è che un semplice malinteso"] },
      { t: "mcq", q: "Dlaczego to rozróżnienie jest ważne w tekstach prasowych?",
        opts: ["Bo brzmi elegancko", "Bo pozycja przymiotnika zmienia znaczenie zdania", "Bo tego wymaga gramatyka"], a: 1 },
      { t: "order", pl: "To wybitny fachowiec, choć trudny człowiek.",
        tokens: ["È", "un", "grande", "professionista,", "anche", "se", "un", "uomo", "difficile"],
        a: ["è un grande professionista anche se un uomo difficile"] },
      { t: "listen", it: "Non è un medico buono, è un buon medico: sono due cose diverse.", pl: "To nie jest dobry człowiek będący lekarzem, to dobry lekarz: dwie różne rzeczy." },
      { t: "speak", it: "Ho incontrato diverse persone molto diverse tra loro.", pl: "Spotkałem kilka bardzo różniących się osób." }
    ]
  },
  {
    id: "c1-u01-l3",
    cefr: "C1",
    themePl: "Gramatyka zaawansowana",
    titleIt: "Superlativi e intensificatori",
    titlePl: "Wzmocnienia i superlatywy",
    objectivesPl: [
      "użyć prefiksów wzmacniających",
      "znać superlatywy idiomatyczne",
      "rozpoznać formy -errimo"
    ],
    theory: [
      { h: "Powtórzenie przymiotnika",
        p: "Najbardziej potoczny sposób wzmocnienia to powtórzenie: <em>Maria è magra magra</em>, <em>un caffè caldo caldo</em>, <em>piano piano</em>. Nie jest to błąd ani niedbałość, tylko żywy mechanizm włoszczyzny mówionej." },
      { h: "Prefiksy",
        p: "<em>arci-</em> (arcicontento), <em>stra-</em> (straricco, strapieno), <em>iper-</em> (iperattivo), <em>super-</em> (superdotato), <em>ultra-</em> (ultramoderno), <em>mega-</em>. Rejestr potoczny lub dziennikarski; w tekście formalnym lepiej użyć <em>estremamente</em>." },
      { h: "Superlatywy idiomatyczne",
        p: "Utarte porównania, których nie da się przewidzieć: <em>stanco morto</em> (skonany), <em>ubriaco fradicio</em> (kompletnie pijany), <em>povero in canna</em> (biedny jak mysz kościelna), <em>buono come il pane</em>, <em>pieno zeppo</em> (nabity), <em>bagnato fradicio</em> (przemoczony), <em>innamorato cotto</em> (zakochany po uszy)." },
      { h: "Formy -errimo i -entissimo",
        p: "Uczone superlatywy od przymiotników łacińskiego pochodzenia: <em>acre → acerrimo</em>, <em>celebre → celeberrimo</em>, <em>integro → integerrimo</em>, <em>misero → miserrimo</em>; oraz <em>benevolo → benevolentissimo</em>. Występują głównie w piśmie." }
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
        ["Sono stanco morto, non ce la faccio più.", "Jestem skonany, nie daję rady."],
        ["Il locale era pieno zeppo.", "Lokal był nabity po brzegi."],
        ["È un caso celeberrimo nella storia del diritto.", "To przypadek bardzo znany w historii prawa."],
        ["È strafelice della notizia.", "Jest przeszczęśliwy z powodu wiadomości."],
        ["Un tè caldo caldo, per favore.", "Bardzo gorącą herbatę poproszę."],
        ["Un avversario acerrimo del governo.", "Zaciekły przeciwnik rządu."]
      ]
    },
    vocab: [
      { it: "stanco morto", pl: "skonany" },
      { it: "ubriaco fradicio", pl: "kompletnie pijany" },
      { it: "pieno zeppo", pl: "nabity po brzegi" },
      { it: "bagnato fradicio", pl: "przemoczony do suchej nitki" },
      { it: "innamorato cotto", pl: "zakochany po uszy" },
      { it: "povero in canna", pl: "biedny jak mysz kościelna" },
      { it: "buono come il pane", pl: "dobry jak chleb" },
      { it: "straricco", pl: "przebogaty" },
      { it: "iperattivo", pl: "nadaktywny" },
      { it: "celeberrimo", pl: "przesławny" },
      { it: "acerrimo", pl: "zaciekły" },
      { it: "oltremodo", pl: "nad wyraz" }
    ],
    exercises: [
      { t: "match", q: "Połącz idiom ze znaczeniem.",
        pairs: [["stanco morto", "skonany"], ["pieno zeppo", "nabity"], ["innamorato cotto", "zakochany po uszy"], ["povero in canna", "bardzo biedny"]] },
      { t: "mcq", q: "„Ubriaco fradicio” znaczy:",
        opts: ["lekko wstawiony", "kompletnie pijany", "przemoczony"], a: 1 },
      { t: "fill", q: "Utwórz superlatyw uczony od „celebre”: ___", a: ["celeberrimo"] },
      { t: "fill", q: "Utwórz superlatyw uczony od „acre”: ___", a: ["acerrimo"] },
      { t: "mcq", q: "„Magra magra” to:",
        opts: ["błąd stylistyczny", "potoczne wzmocnienie przez powtórzenie", "liczba mnoga"], a: 1 },
      { t: "mcq", q: "Który wariant pasuje do tekstu formalnego?",
        opts: ["straricco", "ricchissimo", "megaricco"], a: 1 },
      { t: "cloze", q: "Uzupełnij idiomy.",
        text: "Dopo il viaggio ero stanco {{1}} e la sala era piena {{2}}.",
        gaps: [["morto"], ["zeppa"]],
        pl: "Po podróży byłem skonany, a sala była nabita po brzegi." },
      { t: "trans", dir: "pl-it", q: "„Jest zaciekłym przeciwnikiem tej reformy.”",
        a: ["è un acerrimo avversario di questa riforma", "è un avversario acerrimo di questa riforma"] },
      { t: "listen", it: "Era bagnato fradicio e stanco morto, ma sorrideva.", pl: "Był przemoczony do suchej nitki i skonany, ale się uśmiechał." },
      { t: "speak", it: "Il locale era pieno zeppo, non si trovava un posto.", pl: "Lokal był nabity po brzegi, nie dało się znaleźć miejsca." }
    ]
  }
  ],
  test: {
    id: "c1-u01-test",
    cefr: "C1", themePl: "Sprawdzian",
    titleIt: "Test — I valori del si", titlePl: "Sprawdzian jednostki 1",
    objectivesPl: ["sprawdzić si, pozycję przymiotnika i superlatywy"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Qui si ___ case.”", opts: ["vende", "vendono", "vendere"], a: 1 },
      { t: "mcq", q: "„In ufficio si ___ troppo.” (lavorare)", opts: ["lavora", "lavorano", "lavorare"], a: 0 },
      { t: "fill", q: "„___ si alza presto.” (bezosobowo, zwrotnie)", a: ["ci"] },
      { t: "fill", q: "„Si ___ discusso a lungo.”", a: ["è"] },
      { t: "mcq", q: "„Un vecchio amico”:", opts: ["stary wiekiem", "od dawna", "były"], a: 1 },
      { t: "mcq", q: "„Diverse persone”:", opts: ["różne osoby", "kilka osób", "obce osoby"], a: 1 },
      { t: "fill", q: "Superlatyw od „celebre”: ___", a: ["celeberrimo"] },
      { t: "match", q: "Połącz.", pairs: [["stanco morto", "skonany"], ["pieno zeppo", "nabity"], ["acerrimo", "zaciekły"], ["povero in canna", "bardzo biedny"]] },
      { t: "listen", it: "Si sono vendute tutte le case in meno di due mesi.", pl: "Wszystkie domy sprzedano w niecałe dwa miesiące." },
      { t: "speak", it: "Ci si abitua a tutto, anche al peggio.", pl: "Człowiek przyzwyczaja się do wszystkiego, nawet do najgorszego." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 2 — VERBI PRONOMINALI
   ══════════════════════════════════════════════════════════════ */
{
  id: "c1-u02",
  icon: "🧶",
  titleIt: "Farcela, cavarsela",
  titlePl: "Czasowniki z zaimkami zrośniętymi",
  grammarPl: "verbi pronominali · idiomatyka · rejestr mówiony",
  lessons: [
  {
    id: "c1-u02-l1",
    cefr: "C1",
    themePl: "Gramatyka zaawansowana",
    titleIt: "I verbi procomplementari",
    titlePl: "Czasowniki z wbudowanymi zaimkami",
    objectivesPl: [
      "rozpoznać czasowniki z zaimkami zrośniętymi",
      "odmienić je w czasach złożonych",
      "użyć w naturalnej rozmowie"
    ],
    theory: [
      { h: "Znaczenia nie da się wyprowadzić z części",
        p: "<em>Prendersela</em> nie znaczy „wziąć to sobie”, tylko „obrazić się”. <em>Cavarsela</em> nie ma nic wspólnego z „wyciąganiem”. To osobne jednostki leksykalne, których trzeba się uczyć jak słówek, nie jak konstrukcji." },
      { h: "Odmiana",
        p: "Zaimki rozdzielają się i wracają przed czasownik: <em>cavarsela → <b>me la</b> cavo</em>, <em>te la cavi</em>, <em>se la cava</em>. W czasach złożonych zawsze <em>essere</em>, a imiesłów zgadza się z <em>la</em>: <em>me la sono cavat<b>a</b></em>, <em>ce l'ho fatt<b>a</b></em>." },
      { h: "Najczęstsze",
        list: [
          "<em>farcela</em> — dać radę: <em>Ce l'ho fatta!</em>",
          "<em>cavarsela</em> — radzić sobie: <em>Me la cavo con l'italiano.</em>",
          "<em>prendersela</em> — obrazić się: <em>Non te la prendere.</em>",
          "<em>andarsene</em> — iść sobie: <em>Me ne vado.</em>",
          "<em>fregarsene</em> — mieć w nosie: <em>Se ne frega.</em>",
          "<em>avercela con</em> — mieć pretensje: <em>Ce l'ha con me.</em>",
          "<em>sentirsela</em> — czuć się na siłach: <em>Non me la sento.</em>",
          "<em>intendersene</em> — znać się: <em>Se ne intende di vini.</em>"
        ] },
      { tip: "<em>Ce l'ho fatta</em> to jedno z najczęstszych zdań włoskiej codzienności. Zwróć uwagę na <em>l'</em>: to skrócone <em>la</em>, dlatego imiesłów kończy się na <em>-a</em>." }
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
        ["Ce l'ho fatta, ho superato l'esame!", "Udało się, zdałem egzamin!"],
        ["Me la cavo abbastanza bene con il tedesco.", "Radzę sobie całkiem nieźle z niemieckim."],
        ["Non te la prendere, non era rivolto a te.", "Nie obrażaj się, to nie było do ciebie."],
        ["Se ne è andato senza salutare.", "Wyszedł, nie żegnając się."],
        ["Non me la sento di guidare stanotte.", "Nie czuję się na siłach prowadzić dziś w nocy."],
        ["Ce l'hai con me per qualcosa?", "Masz do mnie o coś pretensje?"]
      ]
    },
    vocab: [
      { it: "farcela", pl: "dać radę" },
      { it: "cavarsela", pl: "radzić sobie" },
      { it: "prendersela", pl: "obrazić się" },
      { it: "andarsene", pl: "iść sobie" },
      { it: "fregarsene", pl: "mieć w nosie" },
      { it: "avercela con", pl: "mieć pretensje do" },
      { it: "sentirsela di", pl: "czuć się na siłach" },
      { it: "intendersene di", pl: "znać się na" },
      { it: "vedersela", pl: "radzić sobie z czymś samemu" },
      { it: "smetterla", pl: "przestać" },
      { it: "piantarla", pl: "dać spokój (potocznie)" },
      { it: "spassarsela", pl: "świetnie się bawić" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „___ l'ho fatta!” (udało mi się)", a: ["ce"] },
      { t: "fill", q: "Uzupełnij: „___ la cavo con l'italiano.” (radzę sobie)", a: ["me"] },
      { t: "fill", q: "Uzupełnij: „Non ___ la prendere.” (nie obrażaj się)", a: ["te"] },
      { t: "mcq", q: "„Se ne frega di tutto” znaczy:",
        opts: ["martwi się wszystkim", "ma wszystko w nosie", "zajmuje się wszystkim"], a: 1 },
      { t: "mcq", q: "Dlaczego „me la sono cavata”, a nie „cavato”?",
        opts: ["To błąd", "Imiesłów zgadza się z la", "Bo mówi kobieta"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["sentirsela", "czuć się na siłach"], ["intendersene", "znać się na"], ["smetterla", "przestać"], ["spassarsela", "świetnie się bawić"]] },
      { t: "cloze", q: "Uzupełnij zaimki.",
        text: "Non {{1}} la sento di guidare, {{2}} ne vado a piedi.",
        gaps: [["me"], ["me"]],
        pl: "Nie czuję się na siłach prowadzić, idę pieszo." },
      { t: "trans", dir: "pl-it", q: "„Masz do mnie o coś pretensje?”",
        a: ["ce l'hai con me per qualcosa", "ce l'hai con me?"] },
      { t: "listen", it: "Se n'è andato senza salutare nessuno.", pl: "Wyszedł, nie żegnając się z nikim." },
      { t: "speak", it: "Me la cavo abbastanza bene, ma non me ne intendo davvero.", pl: "Radzę sobie całkiem nieźle, ale naprawdę się na tym nie znam." }
    ]
  },
  {
    id: "c1-u02-l2",
    cefr: "C1",
    themePl: "Gramatyka zaawansowana",
    titleIt: "Passivo con andare e venire",
    titlePl: "Bierność modalna i stylistyczna",
    objectivesPl: [
      "użyć andare + imiesłów w znaczeniu konieczności",
      "wybrać venire dla podkreślenia procesu",
      "rozpoznać te formy w tekstach urzędowych"
    ],
    theory: [
      { h: "Andare = trzeba",
        p: "<em>La domanda <b>va presentata</b> entro il 30.</em> Nie „jest przedstawiana”, tylko „trzeba ją złożyć”. Ta forma nie ma odpowiednika w polskiej stronie biernej i jest jedną z pułapek tłumaczeniowych na poziomie C1." },
      { h: "Uwaga na ograniczenie",
        p: "Bierność z <em>andare</em> działa <b>tylko w czasach prostych</b> (presente, imperfetto, futuro). „È andato presentato” nie istnieje w tym znaczeniu — w czasach złożonych trzeba użyć <em>doveva essere presentato</em>." },
      { h: "Venire: proces zamiast stanu",
        p: "<em>La legge <b>viene applicata</b> dal 2020</em> podkreśla działanie w toku, podczas gdy <em>è applicata</em> może być odczytane jako stan. W tekstach prawnych i urzędowych <em>venire</em> jest bardzo częste." },
      { h: "Trzeci wariant: essere da + bezokolicznik",
        p: "<em>Questo capitolo <b>è da rivedere</b>.</em> Znaczenie zbliżone do <em>va rivisto</em>, rejestr nieco lżejszy i bardziej mówiony." }
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
        ["La domanda va presentata entro il trenta del mese.", "Wniosek trzeba złożyć do trzydziestego."],
        ["Questi dati vanno verificati prima della pubblicazione.", "Te dane trzeba zweryfikować przed publikacją."],
        ["Il regolamento viene aggiornato ogni anno.", "Regulamin jest aktualizowany co roku."],
        ["Il capitolo è ancora da rivedere.", "Rozdział jest jeszcze do poprawki."],
        ["Sono andati persi due documenti.", "Zaginęły dwa dokumenty.", "andare + perso = przypadkowa strata"],
        ["Le domande vennero respinte tutte.", "Wszystkie wnioski zostały odrzucone."]
      ]
    },
    vocab: [
      { it: "presentare una domanda", pl: "złożyć wniosek" },
      { it: "verificare", pl: "weryfikować" },
      { it: "aggiornare", pl: "aktualizować" },
      { it: "respingere", pl: "odrzucać" },
      { it: "il regolamento", pl: "regulamin" },
      { it: "la pubblicazione", pl: "publikacja" },
      { it: "andare perso", pl: "zaginąć" },
      { it: "smarrire", pl: "zgubić" },
      { it: "da rivedere", pl: "do poprawki" },
      { it: "entro il termine", pl: "w terminie" },
      { it: "l'adempimento", pl: "obowiązek formalny" },
      { it: "vigente", pl: "obowiązujący" }
    ],
    exercises: [
      { t: "mcq", q: "„La domanda va presentata” znaczy:",
        opts: ["Wniosek jest składany", "Wniosek trzeba złożyć", "Wniosek został złożony"], a: 1 },
      { t: "mcq", q: "Które zdanie jest niepoprawne?",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."], a: 1,
        why: "Bierność z andare nie działa w czasach złożonych." },
      { t: "fill", q: "Uzupełnij: „Questi dati ___ verificati.” (trzeba zweryfikować)",
        a: ["vanno"] },
      { t: "fill", q: "Uzupełnij: „Il regolamento ___ aggiornato ogni anno.” (venire)",
        a: ["viene"] },
      { t: "mcq", q: "„Sono andati persi due documenti” znaczy:",
        opts: ["Trzeba było zgubić dokumenty", "Dwa dokumenty zaginęły", "Dokumenty poszły"], a: 1 },
      { t: "cloze", q: "Uzupełnij formy.",
        text: "La domanda {{1}} presentata entro il 30; i dati {{2}} verificati dall'ufficio.",
        gaps: [["va"], ["vengono", "sono"]],
        pl: "Wniosek trzeba złożyć do trzydziestego; dane są weryfikowane przez biuro." },
      { t: "trans", dir: "pl-it", q: "„Ten rozdział trzeba jeszcze poprawić.”",
        a: ["questo capitolo va ancora rivisto", "questo capitolo è ancora da rivedere"] },
      { t: "order", pl: "Wszystkie wnioski zostały odrzucone.",
        tokens: ["Tutte", "le", "domande", "sono", "state", "respinte"],
        a: ["tutte le domande sono state respinte"] },
      { t: "listen", it: "Il modulo va compilato in ogni sua parte e firmato in calce.", pl: "Formularz trzeba wypełnić w całości i podpisać na dole." },
      { t: "speak", it: "Questi dati vanno verificati prima della pubblicazione.", pl: "Te dane trzeba zweryfikować przed publikacją." }
    ]
  },
  {
    id: "c1-u02-l3",
    cefr: "C1",
    themePl: "Leksyka",
    titleIt: "Modi di dire",
    titlePl: "Idiomy w użyciu",
    objectivesPl: [
      "rozumieć częste idiomy w rozmowie i prasie",
      "użyć kilku z nich naturalnie",
      "unikać kalki z polskiego"
    ],
    theory: [
      { h: "Idiom to skrót myślowy, nie ozdoba",
        p: "Włoski idiom najczęściej zastępuje całe zdanie. <em>Non ci piove</em> znaczy „nie ma co do tego wątpliwości”, <em>tagliare la testa al toro</em> — „uciąć dyskusję decyzją”. Użycie ich we właściwym miejscu skraca wypowiedź i podnosi jej naturalność." },
      { h: "Idiomy, które faktycznie usłyszysz",
        list: [
          "<em>in bocca al lupo</em> — powodzenia (odp. <em>crepi</em>)",
          "<em>non vedo l'ora</em> — nie mogę się doczekać",
          "<em>avere le mani in pasta</em> — mieć wpływy",
          "<em>prendere in giro</em> — nabijać się",
          "<em>costare un occhio della testa</em> — kosztować majątek",
          "<em>essere al verde</em> — być spłukanym",
          "<em>fare il punto</em> — podsumować sytuację",
          "<em>mettere nero su bianco</em> — spisać na papierze"
        ] },
      { h: "Fałszywi przyjaciele PL-IT",
        p: "<em>Confetti</em> to migdały w cukrze, nie konfetti (<em>coriandoli</em>). <em>Firma</em> to podpis, nie przedsiębiorstwo (<em>ditta, azienda</em>). <em>Camera</em> to pokój, nie aparat (<em>macchina fotografica</em>). <em>Morbido</em> to miękki, nie chorobliwy. <em>Colazione</em> to śniadanie, nie kolacja (<em>cena</em>)." },
      { tip: "Nie tłumacz polskich idiomów dosłownie. „Rzucać grochem o ścianę” po włosku brzmi <em>parlare al muro</em> — obraz jest inny, choć sens ten sam." }
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
        ["Non vedo l'ora di rivederti.", "Nie mogę się doczekać, kiedy cię znów zobaczę."],
        ["Quel viaggio è costato un occhio della testa.", "Ta podróż kosztowała majątek."],
        ["Facciamo il punto della situazione.", "Podsumujmy sytuację."],
        ["Mettiamo tutto nero su bianco.", "Spiszmy wszystko na papierze."],
        ["Ha le mani in pasta ovunque.", "Ma wszędzie wpływy."],
        ["Mi stai prendendo in giro?", "Nabijasz się ze mnie?"]
      ]
    },
    vocab: [
      { it: "non ci piove", pl: "nie ma wątpliwości" },
      { it: "non vedo l'ora di", pl: "nie mogę się doczekać" },
      { it: "essere al verde", pl: "być spłukanym" },
      { it: "costare un occhio", pl: "kosztować majątek" },
      { it: "prendere in giro", pl: "nabijać się" },
      { it: "fare il punto", pl: "podsumować" },
      { it: "nero su bianco", pl: "czarno na białym" },
      { it: "avere le mani in pasta", pl: "mieć wpływy" },
      { it: "parlare al muro", pl: "mówić do ściany" },
      { it: "la firma", pl: "podpis (nie: firma)" },
      { it: "la ditta / l'azienda", pl: "firma, przedsiębiorstwo" },
      { it: "i coriandoli", pl: "konfetti" }
    ],
    exercises: [
      { t: "match", q: "Połącz idiom ze znaczeniem.",
        pairs: [["non ci piove", "nie ma wątpliwości"], ["essere al verde", "być spłukanym"], ["fare il punto", "podsumować"], ["prendere in giro", "nabijać się"]] },
      { t: "mcq", q: "„La firma” po włosku znaczy:",
        opts: ["przedsiębiorstwo", "podpis", "marka"], a: 1 },
      { t: "mcq", q: "„La colazione” to:",
        opts: ["kolacja", "śniadanie", "obiad"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Non vedo l'ora ___ rivederti.”", a: ["di"] },
      { t: "mcq", q: "„Costare un occhio della testa” znaczy:",
        opts: ["boleć", "kosztować bardzo dużo", "być bezcennym"], a: 1 },
      { t: "multi", q: "Które to fałszywi przyjaciele wobec polskiego?",
        opts: ["camera", "firma", "tavolo", "confetti"], a: [0, 1, 3] },
      { t: "cloze", q: "Uzupełnij idiomy.",
        text: "Quel viaggio è costato un {{1}} della testa e adesso sono al {{2}}.",
        gaps: [["occhio"], ["verde"]],
        pl: "Ta podróż kosztowała majątek i teraz jestem spłukany." },
      { t: "trans", dir: "pl-it", q: "„Podsumujmy sytuację i spiszmy to na papierze.”",
        a: ["facciamo il punto della situazione e mettiamo tutto nero su bianco"] },
      { t: "listen", it: "Non ci piove: la decisione va presa entro oggi.", pl: "Nie ma wątpliwości: decyzję trzeba podjąć do dziś." },
      { t: "speak", it: "Non vedo l'ora di finire questo progetto.", pl: "Nie mogę się doczekać końca tego projektu." }
    ]
  }
  ],
  test: {
    id: "c1-u02-test",
    cefr: "C1", themePl: "Sprawdzian",
    titleIt: "Test — Verbi pronominali", titlePl: "Sprawdzian jednostki 2",
    objectivesPl: ["sprawdzić verbi pronominali, bierność modalną i idiomy"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "fill", q: "„___ l'ho fatta!”", a: ["ce"] },
      { t: "fill", q: "„___ la cavo con l'italiano.”", a: ["me"] },
      { t: "fill", q: "„Non ___ la prendere.”", a: ["te"] },
      { t: "mcq", q: "„Se ne frega”:", opts: ["martwi się", "ma w nosie", "zajmuje się"], a: 1 },
      { t: "fill", q: "„Questi dati ___ verificati.” (trzeba)", a: ["vanno"] },
      { t: "mcq", q: "Niepoprawne:", opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."], a: 1 },
      { t: "mcq", q: "„La firma”:", opts: ["przedsiębiorstwo", "podpis", "marka"], a: 1 },
      { t: "match", q: "Połącz.", pairs: [["essere al verde", "być spłukanym"], ["non ci piove", "nie ma wątpliwości"], ["fare il punto", "podsumować"], ["nero su bianco", "czarno na białym"]] },
      { t: "listen", it: "Non me la sento di decidere adesso, ci penso e ti faccio sapere.", pl: "Nie czuję się na siłach decydować teraz, przemyślę i dam znać." },
      { t: "speak", it: "Ce l'ho fatta, ma me la sono cavata per un pelo.", pl: "Udało się, ale wywinąłem się o włos." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 3 — REGISTRI E TESTUALITÀ
   ══════════════════════════════════════════════════════════════ */
{
  id: "c1-u03",
  icon: "🎚️",
  titleIt: "Registri e testualità",
  titlePl: "Rejestry i spójność tekstu",
  grammarPl: "burocratese · italiano parlato · dislokacje · mowa zależna",
  lessons: [
  {
    id: "c1-u03-l1",
    cefr: "C1",
    themePl: "Styl",
    titleIt: "Burocratese",
    titlePl: "Język urzędowy: czytać, nie pisać",
    objectivesPl: [
      "rozszyfrować typowe konstrukcje urzędowe",
      "przełożyć je na zwykły włoski",
      "rozpoznać, kiedy rejestr jest nadużywany"
    ],
    theory: [
      { h: "Cechy rozpoznawcze",
        list: [
          "nominalizacja: <em>si procede all'erogazione</em> zamiast <em>si eroga</em>",
          "strona bierna i bezosobowość: <em>si comunica che…</em>",
          "wyrażenia odsyłające: <em>di cui sopra</em>, <em>il predetto</em>, <em>il suddetto</em>",
          "przyimki złożone: <em>ai sensi di</em>, <em>in ottemperanza a</em>, <em>ai fini di</em>",
          "słownictwo łacińskie: <em>effettuare</em> zamiast <em>fare</em>, <em>trattasi di</em> zamiast <em>si tratta di</em>"
        ] },
      { h: "Do czego to służy",
        p: "Rejestr urzędowy ma zapewnić precyzję i bezosobowość, ale często kosztem czytelności. Na poziomie C1 <b>rozumienie</b> tych tekstów jest umiejętnością konieczną; <b>pisanie</b> nimi nie jest zalecane poza kontekstem prawnym." },
      { h: "Ruch odwrotny: uproszczenie",
        p: "<em>Si comunica che il pagamento dovrà essere effettuato entro il termine di cui sopra</em> → <em>Il pagamento va fatto entro la data indicata.</em> To ćwiczenie, które warto robić na każdym urzędowym piśmie: skraca i wyjaśnia." },
      { tip: "Włoska administracja od lat prowadzi kampanię na rzecz uproszczenia języka (<em>semplificazione del linguaggio amministrativo</em>), ale w praktyce burocratese ma się dobrze." }
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
        ["Si comunica che l'ufficio resterà chiuso il 2 giugno.", "Informujemy, że biuro będzie zamknięte 2 czerwca."],
        ["Il pagamento dovrà essere effettuato entro trenta giorni.", "Płatności należy dokonać w ciągu trzydziestu dni."],
        ["Ai sensi della normativa vigente, la domanda è irricevibile.", "Zgodnie z obowiązującymi przepisami wniosek jest nieprzyjmowalny."],
        ["Si prega di allegare copia del documento di cui sopra.", "Prosimy o załączenie kopii wyżej wskazanego dokumentu."],
        ["Il predetto termine è perentorio.", "Wspomniany termin jest nieprzekraczalny."],
        ["Con la presente si diffida dal proseguire.", "Niniejszym wzywa się do zaprzestania."]
      ]
    },
    vocab: [
      { it: "ai sensi di", pl: "zgodnie z" },
      { it: "in ottemperanza a", pl: "stosownie do" },
      { it: "di cui sopra", pl: "wyżej wskazany" },
      { it: "il predetto / il suddetto", pl: "wspomniany" },
      { it: "effettuare", pl: "dokonać" },
      { it: "perentorio", pl: "nieprzekraczalny" },
      { it: "irricevibile", pl: "nieprzyjmowalny" },
      { it: "la normativa vigente", pl: "obowiązujące przepisy" },
      { it: "diffidare", pl: "wzywać do zaprzestania" },
      { it: "l'istanza", pl: "wniosek" },
      { it: "l'ente", pl: "instytucja" },
      { it: "l'inadempienza", pl: "niedopełnienie obowiązku" }
    ],
    exercises: [
      { t: "match", q: "Połącz urzędowe z potocznym.",
        pairs: [["effettuare il pagamento", "pagare"], ["ai sensi di", "secondo"], ["di cui sopra", "indicato prima"], ["trattasi di", "si tratta di"]] },
      { t: "mcq", q: "„Il termine è perentorio” znaczy:",
        opts: ["termin jest orientacyjny", "termin jest nieprzekraczalny", "termin został przedłużony"], a: 1 },
      { t: "mcq", q: "„La domanda è irricevibile” znaczy:",
        opts: ["wniosek jest niekompletny", "wniosek nie może zostać przyjęty", "wniosek jest w trakcie rozpatrywania"], a: 1 },
      { t: "fill", q: "Uprość: „Il pagamento dovrà essere effettuato” → „Il pagamento ___ fatto”",
        a: ["va"] },
      { t: "cloze", q: "Uprość zdanie urzędowe.",
        text: "Urzędowo: „Si comunica che l'istanza di cui sopra è irricevibile.” Prościej: Vi {{1}} che la domanda indicata prima non {{2}} essere accettata.",
        gaps: [["informiamo"], ["può"]],
        pl: "Informujemy, że wcześniej wskazany wniosek nie może zostać przyjęty." },
      { t: "trans", dir: "pl-it", q: "„Informujemy, że biuro będzie zamknięte.”",
        a: ["si comunica che l'ufficio resterà chiuso", "vi informiamo che l'ufficio resterà chiuso"] },
      { t: "mcq", q: "Czy warto pisać burocratese na C1?",
        opts: ["Tak, to znak biegłości", "Nie, warto go rozumieć, ale pisać prościej", "Tak, w każdym kontekście zawodowym"], a: 1 },
      { t: "order", pl: "Prosimy o załączenie kopii dokumentu.",
        tokens: ["Si", "prega", "di", "allegare", "copia", "del", "documento"],
        a: ["si prega di allegare copia del documento"] },
      { t: "listen", it: "Ai sensi della normativa vigente, l'istanza risulta irricevibile.", pl: "Zgodnie z obowiązującymi przepisami wniosek jest nieprzyjmowalny." },
      { t: "speak", it: "Il pagamento va effettuato entro il termine indicato.", pl: "Płatności należy dokonać w podanym terminie." }
    ]
  },
  {
    id: "c1-u03-l2",
    cefr: "C1",
    themePl: "Styl",
    titleIt: "L'italiano parlato",
    titlePl: "Włoski mówiony i neostandard",
    objectivesPl: [
      "rozpoznać cechy włoskiego mówionego",
      "użyć dislokacji dla naturalności",
      "odróżnić neostandard od błędu"
    ],
    theory: [
      { h: "Neostandard: nie błąd, inny rejestr",
        list: [
          "<em>lui / lei</em> jako podmiot zamiast <em>egli / ella</em> — dziś norma",
          "<em>gli</em> zamiast <em>loro</em> („im”) — powszechne również w piśmie nieformalnym",
          "<em>che</em> polivalente: <em>il giorno che sono arrivato</em>",
          "<em>ci</em> zamiast <em>vi</em> jako miejsce: <em>ci vado</em>",
          "imperfetto w okresie warunkowym: <em>se lo sapevo…</em>"
        ] },
      { h: "Dislokacja: przesuwanie akcentu",
        p: "<em><b>Il libro</b>, l'ho letto ieri.</em> (dislokacja w lewo) i <em>L'ho letto ieri, <b>il libro</b>.</em> (w prawo). Element wysunięty jest tematem, a zaimek go „podtrzymuje”. To cecha żywego włoskiego, nie niedbałość, i bez niej mowa brzmi sztywno." },
      { h: "C'è presentativo",
        p: "<em>C'è Marco che ti cerca.</em> Konstrukcja wprowadza nowy element do rozmowy. Po polsku wypadłoby „Marco cię szuka”, ale włoski chętnie sygnalizuje nowość przez <em>c'è… che</em>." },
      { trap: "Neostandard jest akceptowany w mowie i w piśmie nieformalnym. W tekście egzaminacyjnym, formalnym mailu i publikacji obowiązuje standard: <em>se avessi saputo</em>, nie „se sapevo”." }
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
        ["A Roma non ci sono mai stato.", "W Rzymie nigdy nie byłem.", "dislokacja + ci"],
        ["Il caffè, lo prendo dopo.", "Kawę wypiję później."],
        ["C'è tua sorella che ti aspetta fuori.", "Twoja siostra czeka na ciebie na zewnątrz."],
        ["Gli ho detto di non preoccuparsi.", "Powiedziałem im, żeby się nie martwili."],
        ["Quella storia, non me la ricordo proprio.", "Tamtej historii zupełnie nie pamiętam."],
        ["Di soldi, non ne parliamo nemmeno.", "O pieniądzach nawet nie mówmy."]
      ]
    },
    vocab: [
      { it: "la dislocazione", pl: "dislokacja" },
      { it: "il neostandard", pl: "nowy standard językowy" },
      { it: "il registro informale", pl: "rejestr nieformalny" },
      { it: "l'oralità", pl: "mówioność" },
      { it: "la spontaneità", pl: "spontaniczność" },
      { it: "il tema / il rema", pl: "temat / remat" },
      { it: "enfatizzare", pl: "podkreślać" },
      { it: "riprendere con un pronome", pl: "podchwycić zaimkiem" },
      { it: "suonare naturale", pl: "brzmieć naturalnie" },
      { it: "suonare rigido", pl: "brzmieć sztywno" },
      { it: "accettabile", pl: "akceptowalny" },
      { it: "sconsigliato in forma scritta", pl: "niezalecany w piśmie" }
    ],
    exercises: [
      { t: "mcq", q: "„Il libro, l'ho letto ieri” to:",
        opts: ["błąd składniowy", "dislokacja w lewo, cecha żywego włoskiego", "konstrukcja urzędowa"], a: 1 },
      { t: "mcq", q: "Która konstrukcja jest niezalecana w piśmie formalnym?",
        opts: ["Gli ho detto tutto.", "Se lo sapevo, non venivo.", "A Roma ci vado spesso."], a: 1 },
      { t: "fill", q: "Uzupełnij dislokację: „Il caffè, ___ prendo dopo.”", a: ["lo"] },
      { t: "fill", q: "Uzupełnij: „Di soldi, non ___ parliamo nemmeno.”", a: ["ne"] },
      { t: "mcq", q: "„C'è Marco che ti cerca” służy do:",
        opts: ["opisania miejsca", "wprowadzenia nowej informacji do rozmowy", "wyrażenia wątpliwości"], a: 1 },
      { t: "cloze", q: "Przekształć na wersję z dislokacją.",
        text: "Standardowo: „Non ricordo quella storia.” Z dislokacją: Quella storia, non {{1}} {{2}} ricordo.",
        gaps: [["me"], ["la"]],
        pl: "Tamtej historii nie pamiętam." },
      { t: "trans", dir: "pl-it", q: "„W Rzymie nigdy nie byłem.”",
        a: ["a roma non ci sono mai stato", "a roma non ci sono mai stata"] },
      { t: "multi", q: "Które cechy należą do neostandardu?",
        opts: ["lui jako podmiot", "gli zamiast loro", "egli jako podmiot", "che polivalente"], a: [0, 1, 3] },
      { t: "listen", it: "Quella storia lì, non me la ricordo proprio.", pl: "Tamtej historii zupełnie nie pamiętam." },
      { t: "speak", it: "Il caffè lo prendo dopo, adesso non mi va.", pl: "Kawę wypiję później, teraz nie mam ochoty." }
    ]
  },
  {
    id: "c1-u03-l3",
    cefr: "C1",
    themePl: "Styl",
    titleIt: "Coesione e coerenza",
    titlePl: "Spójność tekstu pisanego",
    objectivesPl: [
      "zbudować spójny tekst argumentacyjny",
      "użyć mechanizmów nawiązania",
      "unikać powtórzeń przez synonimy i hiperonimy"
    ],
    theory: [
      { h: "Dwa różne pojęcia",
        p: "<b>Coesione</b> to powierzchniowe wiązania: zaimki, konektory, powtórzenia leksykalne. <b>Coerenza</b> to logiczna ciągłość treści. Tekst może być spójny formalnie, a niespójny logicznie — i odwrotnie." },
      { h: "Mechanizmy nawiązania",
        list: [
          "zaimki: <em>lo, ne, ci, questo, ciò</em>",
          "synonimy i hiperonimy: <em>il provvedimento → la misura → l'intervento</em>",
          "nominalizacja poprzedniego zdania: <em>…hanno approvato la legge. <b>L'approvazione</b> ha suscitato…</em>",
          "wyrażenia odsyłające: <em>quanto detto, il fenomeno in questione, tale scelta</em>"
        ] },
      { h: "Progresja tematyczna",
        p: "W dobrze zbudowanym akapicie każde zdanie podejmuje element poprzedniego (temat) i dodaje nową informację (remat). Nagłe wprowadzenie zupełnie nowego tematu bez zapowiedzi łamie spójność, nawet jeśli konektory są na miejscu." },
      { tip: "Włoski styl pisany nie boi się długich zdań, ale ceni <b>jasną hierarchię</b> zdań podrzędnych. Trzy zdania podrzędne zagnieżdżone w sobie to znak, że akapit wymaga przepisania." }
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
        ["La riforma è stata approvata. Tale decisione ha suscitato reazioni contrastanti.", "Reforma została przyjęta. Ta decyzja wywołała sprzeczne reakcje."],
        ["Il fenomeno in questione riguarda soprattutto le grandi città.", "Zjawisko, o którym mowa, dotyczy przede wszystkim dużych miast."],
        ["Come vedremo, il problema non è solo economico.", "Jak zobaczymy, problem nie jest wyłącznie ekonomiczny."],
        ["Per contro, i dati regionali raccontano un'altra storia.", "Z drugiej strony dane regionalne opowiadają inną historię."],
        ["Quanto detto finora vale per il settore privato.", "Powiedziane dotąd dotyczy sektora prywatnego."],
        ["Di conseguenza, la misura andrebbe rivista.", "W konsekwencji tę regulację należałoby zrewidować."]
      ]
    },
    vocab: [
      { it: "la coesione", pl: "spójność formalna" },
      { it: "la coerenza", pl: "spójność logiczna" },
      { it: "il provvedimento", pl: "regulacja, decyzja" },
      { it: "la misura", pl: "środek, regulacja" },
      { it: "in questione", pl: "o którym mowa" },
      { it: "tale", pl: "taki, ów" },
      { it: "quanto detto", pl: "to, co powiedziano" },
      { it: "per contro", pl: "z drugiej strony" },
      { it: "di conseguenza", pl: "w konsekwencji" },
      { it: "suscitare", pl: "wywoływać" },
      { it: "contrastante", pl: "sprzeczny" },
      { it: "riguardare", pl: "dotyczyć" }
    ],
    exercises: [
      { t: "mcq", q: "Czym różni się coesione od coerenza?",
        opts: ["Niczym", "Coesione to wiązania formalne, coerenza to ciągłość logiczna", "Coesione dotyczy mowy, coerenza pisma"], a: 1 },
      { t: "fill", q: "Uzupełnij nawiązanie: „Hanno approvato la legge. ___ decisione ha sorpreso tutti.”",
        a: ["tale", "questa"] },
      { t: "fill", q: "Uzupełnij: „Il fenomeno in ___ riguarda le grandi città.”", a: ["questione"] },
      { t: "match", q: "Połącz.",
        pairs: [["per contro", "z drugiej strony"], ["di conseguenza", "w konsekwencji"], ["suscitare", "wywoływać"], ["quanto detto", "to, co powiedziano"]] },
      { t: "mcq", q: "Który mechanizm najlepiej usuwa powtórzenie rzeczownika?",
        opts: ["powtórzenie z synonimem lub hiperonimem", "dodanie przymiotnika", "zmiana szyku"], a: 0 },
      { t: "cloze", q: "Uzupełnij spójność akapitu.",
        text: "La riforma è stata approvata. {{1}} decisione ha suscitato reazioni contrastanti. {{2}}, la misura andrebbe rivista.",
        gaps: [["tale", "questa"], ["di conseguenza"]],
        pl: "Reforma została przyjęta. Ta decyzja wywołała sprzeczne reakcje. W konsekwencji regulację należałoby zrewidować." },
      { t: "trans", dir: "pl-it", q: "„Jak zobaczymy, problem nie jest wyłącznie ekonomiczny.”",
        a: ["come vedremo il problema non è solo economico"] },
      { t: "mcq", q: "Trzy zagnieżdżone zdania podrzędne to znak, że:",
        opts: ["tekst jest wyrafinowany", "akapit wymaga przepisania", "styl jest urzędowy"], a: 1 },
      { t: "listen", it: "Quanto detto finora vale soprattutto per il settore privato.", pl: "Powiedziane dotąd dotyczy przede wszystkim sektora prywatnego." },
      { t: "speak", it: "Di conseguenza, ritengo che la misura andrebbe rivista.", pl: "W konsekwencji uważam, że tę regulację należałoby zrewidować." }
    ]
  }
  ],
  test: {
    id: "c1-u03-test",
    cefr: "C1", themePl: "Egzamin",
    titleIt: "Esame finale C1", titlePl: "Egzamin końcowy poziomu C1",
    objectivesPl: ["sprawdzić si, verbi pronominali, rejestry i spójność"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Qui si ___ appartamenti.”", opts: ["affitta", "affittano", "affittare"], a: 1 },
      { t: "fill", q: "„___ si abitua a tutto.”", a: ["ci"] },
      { t: "mcq", q: "„Un'informazione certa”:", opts: ["jakaś", "pewna, sprawdzona", "poufna"], a: 1 },
      { t: "fill", q: "„___ l'ho fatta!”", a: ["ce"] },
      { t: "fill", q: "„Non ___ la sento di decidere.”", a: ["me"] },
      { t: "fill", q: "„La domanda ___ presentata entro il 30.” (trzeba)", a: ["va"] },
      { t: "mcq", q: "„Il termine è perentorio”:", opts: ["orientacyjny", "nieprzekraczalny", "przedłużony"], a: 1 },
      { t: "mcq", q: "„Se lo sapevo, non venivo” to:", opts: ["standard pisany", "neostandard mówiony", "błąd zawsze"], a: 1 },
      { t: "fill", q: "„Il fenomeno in ___ riguarda le città.”", a: ["questione"] },
      { t: "fill", q: "Superlatyw uczony od „acre”: ___", a: ["acerrimo"] },
      { t: "trans", dir: "pl-it", q: "„Te dane trzeba zweryfikować przed publikacją.”",
        a: ["questi dati vanno verificati prima della pubblicazione"] },
      { t: "speak", it: "Ci si abitua a tutto, ma non ci si rassegna mai del tutto.", pl: "Człowiek przyzwyczaja się do wszystkiego, ale nigdy do końca się nie godzi." }
    ]
  }
}

]);
