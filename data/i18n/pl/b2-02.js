/* ============================================================
   Teksty w języku ucznia (pl) do data/core/b2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:b2-u05": {
    "title": "Mowa zależna",
    "grammarNote": "przesunięcie czasów · deiksa · pytania i rozkazy"
  },
  "lesson:b2-u05-l1": {
    "theme": "Gramatyka",
    "title": "Z mowy niezależnej do zależnej",
    "objectives": [
      "cofnąć czas po zdaniu nadrzędnym w przeszłości",
      "wybrać między indicativo a congiuntivo po „che”",
      "użyć czasowników relacjonujących innych niż „dire”"
    ],
    "theory": [
      {
        "h": "Zdanie nadrzędne w przeszłości cofa wszystko o krok",
        "p": "<em>Ha detto: «Sono stanco»</em> → <em>Ha detto che <b>era</b> stanco.</em> Presente cofa się do imperfetto, passato prossimo do trapassato, futuro do condizionale composto: <em>«Arriverò»</em> → <em>ha detto che <b>sarebbe arrivato</b></em>. Ten ostatni jest jedyny naprawdę zaskakujący: przyszłość w przeszłości to po włosku <em>sarei arrivato</em>, nie <em>arriverei</em>."
      },
      {
        "h": "Czego się nie cofa",
        "p": "Jeśli zdanie nadrzędne stoi w teraźniejszości (<em>dice che…</em>), nic się nie zmienia. I jeśli treść jest nadal prawdziwa, cofnięcie jest opcjonalne: <em>Ha detto che Roma <b>è</b> la capitale</em> brzmi lepiej niż <em>era</em>."
      },
      {
        "h": "Che + indicativo czy congiuntivo?",
        "p": "Decyduje czasownik relacjonujący. <em>Dire, rispondere, spiegare, scrivere</em> → indicativo: <em>ha detto che <b>era</b> stanco</em>. <em>Sostenere, ritenere, negare</em> → congiuntivo: <em>sostiene che la pratica <b>sia</b> aperta</em>. Ten drugi zestaw niesie dystans: „tak twierdzi, ja nie ręczę”."
      },
      {
        "contrast": "Po polsku mowa zależna prawie nic nie zmienia: „Powiedział, że <b>jest</b> zmęczony” zostawia czas teraźniejszy. Włoski cofa go obowiązkowo (<em>era</em>), i to jest najczęstszy błąd Polaka na B2 — zdanie zrozumiałe, ale natychmiast rozpoznawalne jako obce. Drugi punkt: polskie „że” nie zmienia trybu, włoskie <em>che</em> zmienia, w zależności od czasownika przed nim."
      }
    ],
    "grammar": {
      "title": "Przesunięcie czasów",
      "note": "Po zdaniu nadrzędnym w czasie przeszłym.",
      "table": {
        "head": [
          "mowa niezależna",
          "mowa zależna",
          "przykład"
        ],
        "rows": [
          [
            "presente",
            "imperfetto",
            "«sono stanco» → era stanco"
          ],
          [
            "passato prossimo",
            "trapassato prossimo",
            "«ho finito» → aveva finito"
          ],
          [
            "futuro semplice",
            "condizionale composto",
            "«arriverò» → sarebbe arrivato"
          ],
          [
            "imperfetto",
            "imperfetto (bez zmian)",
            "«ero stanco» → era stanco"
          ],
          [
            "congiuntivo presente",
            "congiuntivo imperfetto",
            "«che sia» → che fosse"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Powiedział: «Jestem zmęczony» → Powiedział, że jest zmęczony."
        },
        {
          "tr": "Napisał mi, że przyjedzie następnego dnia."
        },
        {
          "tr": "Odpowiedział, że nie zrozumiał pytania."
        },
        {
          "tr": "Wyjaśnił nam, że sam zadzwoni do biura."
        },
        {
          "tr": "Przyznał, że się pomylił."
        },
        {
          "tr": "Twierdzi, że sprawa jest jeszcze otwarta."
        }
      ]
    },
    "vocab": [
      "relacjonować, przytaczać",
      "twierdzić",
      "przyznać",
      "odparować, odpowiedzieć",
      "uściślić",
      "dodać",
      "zdementować",
      "potwierdzić",
      "podobno",
      "według niego",
      "jego zdaniem",
      "według (czegoś)"
    ],
    "exercises": [
      {
        "q": "«Sono stanco» w mowie zależnej po „ha detto che”:",
        "opts": [
          "ha detto che sono stanco",
          "ha detto che era stanco",
          "ha detto che sarebbe stanco"
        ]
      },
      {
        "q": "Uzupełnij: „Ha detto che ___ stanco.” (essere)"
      },
      {
        "q": "Uzupełnij: „Ha risposto che non ___ la domanda.” (capire)"
      },
      {
        "q": "«Arriverò domani» po „ha detto che”:",
        "opts": [
          "arriverà",
          "arriverebbe",
          "sarebbe arrivato"
        ]
      },
      {
        "q": "Wstaw właściwe formy.",
        "tr": "Powiedział, że przyjedzie następnego dnia i że sam zadzwoni."
      },
      {
        "q": "„Powiedział, że był zmęczony.”"
      },
      {
        "q": "Który czasownik wymaga congiuntivo?",
        "opts": [
          "sostiene che",
          "ha detto che",
          "ha scritto che"
        ]
      },
      {
        "q": "Dopasuj czasowniki relacjonujące.",
        "tr": [
          "zdementować",
          "uściślić",
          "odparować",
          "twierdzić"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Napisał mi, że następnego dnia wpadnie do biura."
      },
      {
        "tr": "Przyznał, że się pomylił, i przeprosił."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    "theme": "Gramatyka",
    "title": "Czas, miejsce, osoba",
    "objectives": [
      "przesunąć określenia czasu i miejsca",
      "zamienić „venire” na „andare” tam, gdzie trzeba",
      "dopasować zaimki i przymiotniki dzierżawcze"
    ],
    "theory": [
      {
        "h": "Określenia czasu przesuwają się razem z czasownikiem",
        "p": "<em>oggi</em> → <em>quel giorno</em>, <em>ieri</em> → <em>il giorno prima</em>, <em>domani</em> → <em>il giorno dopo</em> (albo <em>l'indomani</em>), <em>adesso</em> → <em>in quel momento</em> lub <em>allora</em>. Zdanie zostaje zrozumiałe także bez tego, ale brzmi jak tłumaczenie."
      },
      {
        "h": "Miejsce: qui → lì, questo → quello",
        "p": "Deiksa wskazuje na miejsce mówiącego. Kiedy relacjonujesz, mówiącego już tam nie ma: <em>«Ci vediamo qui»</em> → <em>ha detto che ci saremmo visti <b>lì</b></em>. Tak samo <em>questo</em> → <em>quello</em>, <em>questa volta</em> → <em>quella volta</em>."
      },
      {
        "h": "Venire i andare zamieniają się miejscami",
        "p": "<em>venire</em> znaczy „przyjść tam, gdzie jest rozmówca”. W relacji punkt odniesienia się zmienia, więc <em>«Vengo domani»</em> staje się <em>ha detto che <b>sarebbe andato</b> il giorno dopo</em>. Tak samo <em>portare</em> → <em>portare</em> lub <em>lasciare</em>, zależnie od kierunku."
      },
      {
        "contrast": "Polski robi to samo z czasem („powiedział, że przyjdzie <b>nazajutrz</b>”), ale nie ma obowiązkowej zamiany <em>venire/andare</em>: „powiedział, że przyjdzie” jest po polsku naturalne, a po włosku <em>ha detto che sarebbe venuto</em> znaczy, że przyjdzie do CIEBIE, czyli często coś innego, niż chciałeś powiedzieć."
      }
    ],
    "grammar": {
      "title": "Przesunięcia deiktyczne",
      "note": "Kiedy relacjonujesz cudze słowa z innego miejsca i czasu.",
      "table": {
        "head": [
          "w oryginale",
          "w relacji",
          "uwaga"
        ],
        "rows": [
          [
            "oggi",
            "quel giorno",
            "„tamtego dnia”"
          ],
          [
            "ieri",
            "il giorno prima",
            "—"
          ],
          [
            "domani",
            "il giorno dopo / l'indomani",
            "drugie jest wyższego rejestru"
          ],
          [
            "qui",
            "lì",
            "mówiącego już tam nie ma"
          ],
          [
            "questo",
            "quello",
            "—"
          ],
          [
            "venire",
            "andare",
            "zmienia się punkt odniesienia"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«Przyjdę jutro» → Powiedział, że przyjdzie następnego dnia."
        },
        {
          "tr": "«Widzimy się tutaj» → Powiedział, że zobaczymy się tam."
        },
        {
          "tr": "«Zrobiłem to wczoraj» → Powiedział, że zrobił to dzień wcześniej."
        },
        {
          "tr": "«To mi się nie podoba» → Powiedział, że tamto mu się nie podoba."
        },
        {
          "tr": "«Wracam teraz» → Powiedział, że wraca w tamtej chwili."
        },
        {
          "tr": "«Mój szef o tym wie» → Powiedział, że jego szef o tym wie."
        }
      ]
    },
    "vocab": [
      "dzień wcześniej",
      "następnego dnia",
      "dwa dni wcześniej",
      "w następnym tygodniu",
      "w tamtej chwili",
      "wtedy",
      "tam",
      "tamto",
      "udać się",
      "nazajutrz",
      "krótko wcześniej",
      "wkrótce potem"
    ],
    "exercises": [
      {
        "q": "«Vengo domani» w relacji:",
        "opts": [
          "ha detto che veniva domani",
          "ha detto che sarebbe andato il giorno dopo",
          "ha detto che verrà domani"
        ]
      },
      {
        "q": "Uzupełnij: „Ha detto che sarebbe tornato ___.” (domani)"
      },
      {
        "q": "Uzupełnij: „Ha detto che ci saremmo visti ___.” (qui)"
      },
      {
        "q": "«L'ho fatto ieri» w relacji:",
        "opts": [
          "che l'aveva fatto ieri",
          "che lo faceva ieri",
          "che l'aveva fatto il giorno prima"
        ]
      },
      {
        "q": "Dlaczego „venire” zmienia się w „andare”?",
        "opts": [
          "bo brzmi lepiej",
          "bo zmienia się punkt odniesienia",
          "bo „venire” nie ma condizionale"
        ]
      },
      {
        "q": "Wstaw określenia czasu.",
        "tr": "Powiedział, że skończył to dzień wcześniej i że wróci następnego dnia."
      },
      {
        "q": "„Powiedział, że pójdzie tam następnego dnia.”"
      },
      {
        "q": "Które przesunięcia są poprawne?",
        "opts": [
          "oggi → quel giorno",
          "ieri → domani",
          "questo → quello"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Powiedział mi, że pójdzie tam następnego dnia."
      },
      {
        "tr": "Wyjaśnił, że nazajutrz nie przyjdzie do biura."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    "theme": "Gramatyka",
    "title": "Pytania i rozkazy w relacji",
    "objectives": [
      "zrelacjonować pytanie rozstrzygnięcia przez „se”",
      "zrelacjonować pytanie otwarte",
      "zamienić tryb rozkazujący na „di” + bezokolicznik"
    ],
    "theory": [
      {
        "h": "Pytania tak/nie: se",
        "p": "<em>«Vieni?»</em> → <em>Mi ha chiesto <b>se</b> venivo.</em> Bez znaku zapytania i bez inwersji: to już nie jest pytanie, tylko zdanie podrzędne. <em>Se</em> w tym użyciu nie ma nic wspólnego z okresem warunkowym."
      },
      {
        "h": "Pytania otwarte: słowo pytajne zostaje",
        "p": "<em>«Dove abiti?»</em> → <em>Mi ha chiesto dove abitavo</em> (potocznie) albo <em>dove <b>abitassi</b></em> (staranniej). Congiuntivo po pytaniu pośrednim to rejestr wyższy, nie obowiązek — ale w piśmie urzędowym spotkasz właśnie jego."
      },
      {
        "h": "Rozkazy: di + bezokolicznik",
        "p": "<em>«Aspetta!»</em> → <em>Mi ha detto <b>di aspettare</b>.</em> Przeczenie idzie przed bezokolicznikiem: <em>mi ha detto <b>di non</b> firmare</em>. Ta sama konstrukcja po <em>raccomandare, consigliare, pregare, ordinare, vietare</em>."
      },
      {
        "contrast": "Polski relacjonuje rozkaz przez „żeby” z osobą: „powiedział, <b>żebym poczekał</b>”. Włoski nie potrzebuje osoby, bo wskazuje ją czasownik nadrzędny: <em>mi</em> ha detto di aspettare. Stąd typowy błąd: <em>ha detto che aspettassi</em> — zrozumiałe, ale nikt tak nie mówi."
      }
    ],
    "grammar": {
      "title": "Pytania i rozkazy",
      "note": "Trzy wzory, które pokrywają prawie wszystko.",
      "table": {
        "head": [
          "oryginał",
          "relacja",
          "wzór"
        ],
        "rows": [
          [
            "«Vieni?»",
            "mi ha chiesto se venivo",
            "chiedere se + indicativo"
          ],
          [
            "«Dove abiti?»",
            "mi ha chiesto dove abitassi",
            "słowo pytajne + congiuntivo (rejestr wyższy)"
          ],
          [
            "«Aspetta!»",
            "mi ha detto di aspettare",
            "di + bezokolicznik"
          ],
          [
            "«Non firmare»",
            "mi ha detto di non firmare",
            "di non + bezokolicznik"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«Przyjdziesz?» → Zapytał mnie, czy przyjdę."
        },
        {
          "tr": "«Gdzie mieszkasz?» → Zapytał mnie, gdzie mieszkam."
        },
        {
          "tr": "«Poczekaj!» → Powiedział mi, żebym poczekał."
        },
        {
          "tr": "«Nie podpisuj» → Poradził mi, żebym nie podpisywał."
        },
        {
          "tr": "«Czego chcesz?» → Chciał wiedzieć, czego chcę."
        },
        {
          "tr": "«Możesz mi pomóc?» → Zapytał, czy mogę mu pomóc."
        }
      ]
    },
    "vocab": [
      "pytać, czy",
      "chcieć wiedzieć",
      "dopytywać",
      "zaprosić do",
      "zalecić",
      "kazać",
      "zaproponować",
      "poradzić",
      "zasugerować",
      "prosić o",
      "zabronić",
      "nalegać, żeby"
    ],
    "exercises": [
      {
        "q": "«Vieni?» w relacji:",
        "opts": [
          "mi ha chiesto vieni",
          "mi ha chiesto se venivo",
          "mi ha chiesto che venivo"
        ]
      },
      {
        "q": "Uzupełnij: „Mi ha chiesto ___ avevo capito.”"
      },
      {
        "q": "Uzupełnij: „Mi ha detto ___.” (aspettare)"
      },
      {
        "q": "«Non firmare» w relacji:",
        "opts": [
          "mi ha detto di non firmare",
          "mi ha detto che non firmavo",
          "mi ha detto non firmare"
        ]
      },
      {
        "q": "Który rejestr jest staranniejszy?",
        "opts": [
          "dove abitavo",
          "dove abiti",
          "dove abitassi"
        ]
      },
      {
        "q": "Wstaw właściwe formy.",
        "tr": "Zapytał mnie, czy zrozumiałem, i kazał mi oddzwonić później."
      },
      {
        "q": "„Zapytał mnie, czy przyjdę.”"
      },
      {
        "q": "Dopasuj czasowniki.",
        "tr": [
          "zalecić",
          "zabronić",
          "zasugerować",
          "prosić"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Urzędnik zapytał mnie, czy wziąłem numer podatkowy."
      },
      {
        "tr": "Poradził mi, żebym nic nie podpisywał bez przeczytania."
      }
    ]
  },
  "lesson:b2-u05-test": {
    "theme": "Gramatyka",
    "title": "Test — Mowa zależna",
    "exercises": [
      {
        "q": "«Ho finito» po „ha detto che”:",
        "opts": [
          "ha finito",
          "aveva finito",
          "avrebbe finito"
        ]
      },
      {
        "q": "«Verrò» po „ha detto che”:",
        "opts": [
          "verrà",
          "verrebbe",
          "sarebbe venuto"
        ]
      },
      {
        "q": "Uzupełnij: „Disse che ___ stanco.” (essere)"
      },
      {
        "q": "Uzupełnij: „Disse che sarebbe tornato ___.” (domani)"
      },
      {
        "q": "Uzupełnij: „Mi chiese ___ ero pronto.”"
      },
      {
        "q": "Rozkaz w relacji to:",
        "opts": [
          "di + bezokolicznik",
          "che + congiuntivo",
          "tryb rozkazujący bez zmian"
        ]
      },
      {
        "q": "Które zdania są poprawne?",
        "opts": [
          "Mi ha detto che aspettassi.",
          "Mi ha detto di aspettare.",
          "Mi ha chiesto se venivo."
        ]
      },
      {
        "q": "Wstaw formy.",
        "tr": "Powiedział, że jest zmęczony i że wróci następnego dnia."
      },
      {
        "tr": "Odpowiedział, że nie dostał żadnego wezwania."
      },
      {
        "tr": "Zapytał mnie, czy wysłałem już wniosek."
      }
    ]
  }
});
