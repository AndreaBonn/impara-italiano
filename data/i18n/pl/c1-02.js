/* ============================================================
   Teksty w języku ucznia (pl) do data/core/c1-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c1-u04": {
    "title": "Przypuszczenie",
    "grammarNote": "sarà stanco · deve essere · magari, mica, chissà"
  },
  "lesson:c1-u04-l1": {
    "theme": "Gramatyka",
    "title": "Il futuro che non parla del futuro",
    "objectives": [
      "rozpoznać czas przyszły użyty jako przypuszczenie",
      "użyć futuro anteriore do domysłu o przeszłości",
      "oszacować godzinę, wiek i ilość czasem przyszłym"
    ],
    "theory": [
      {
        "h": "„Sarà stanco” to nie przyszłość",
        "p": "To zdanie znaczy <b>pewnie jest zmęczony</b>, nie „będzie zmęczony”. Włoski używa czasu przyszłego, żeby powiedzieć, że czegoś nie wie na pewno. Zdanie o przyszłości i zdanie o domyśle wyglądają identycznie; rozstrzyga kontekst, najczęściej obecność czegoś, co widać teraz."
      },
      {
        "h": "Domysł o przeszłości bierze futuro anteriore",
        "p": "<em>Avrà perso il treno</em> = „pewnie spóźnił się na pociąg”. Ta sama forma, która normalnie znaczy „zdąży przed”, tutaj cofa domysł w przeszłość. Włoch usłyszy różnicę bez wysiłku, bo zdanie nie mówi o żadnym przyszłym punkcie w czasie."
      },
      {
        "h": "Szacowanie: godzina, wiek, ilość",
        "p": "<em>Saranno le tre</em>, <em>ne avrà quaranta</em>, <em>saranno dieci chilometri</em>. To najczęstsze użycie w codziennej rozmowie i najłatwiejsze do podłapania: gdy ktoś podaje liczbę, której nie sprawdził, prawie zawsze zrobi to czasem przyszłym."
      },
      {
        "contrast": "Polski nie robi tego w ogóle: przypuszczenie niesie przysłówek („pewnie”, „chyba”, „zapewne”) przy czasie teraźniejszym. Dlatego „Sarà stanco” Polak rozumie odwrotnie niż trzeba i nic mu tego nie sygnalizuje — zdanie jest poprawne, sens przeciwny. Warto na kilka dni przyjąć odruch: czas przyszły bez okolicznika czasu to prawie zawsze domysł."
      }
    ],
    "grammar": {
      "title": "Czas przyszły w roli domysłu",
      "note": "W trzeciej kolumnie to, co zdanie naprawdę robi.",
      "table": {
        "head": [
          "zdanie",
          "forma",
          "co robi"
        ],
        "rows": [
          [
            "Sarà stanco.",
            "futuro semplice",
            "domysł o teraz"
          ],
          [
            "Avrà perso il treno.",
            "futuro anteriore",
            "domysł o przeszłości"
          ],
          [
            "Saranno le tre.",
            "futuro semplice",
            "szacunek godziny lub ilości"
          ],
          [
            "Sarà anche bravo, ma…",
            "futuro concessivo",
            "ustępstwo z ironią"
          ],
          [
            "Domani sarà a Roma.",
            "futuro semplice",
            "prawdziwa przyszłość"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Nie odbiera: pewnie jest jeszcze na zebraniu."
        },
        {
          "tr": "Która godzina? Będzie po trzeciej."
        },
        {
          "tr": "Pewnie spóźnił się na pociąg, zwykle się nie spóźnia."
        },
        {
          "tr": "Ile ma lat? Ze czterdzieści."
        },
        {
          "tr": "Nie widziałem go: pewnie wyszedł wcześniej."
        },
        {
          "tr": "Może i jest dobry, ale mnie nie przekonuje."
        }
      ]
    },
    "vocab": [
      "przypuszczenie",
      "prawdopodobnie",
      "przypuszczalnie",
      "na oko",
      "domyślam się",
      "pewnie jest",
      "pewnie zrobił",
      "kto wie",
      "brać za pewnik",
      "strzelać",
      "mieć wrażenie",
      "na nosa"
    ],
    "exercises": [
      {
        "q": "Co znaczy „Sarà stanco”?",
        "opts": [
          "Będzie zmęczony (przyszłość)",
          "Pewnie jest zmęczony",
          "Był zmęczony"
        ]
      },
      {
        "q": "Uzupełnij: „Non risponde: ___ ancora in riunione.” (essere, domysł)"
      },
      {
        "q": "Uzupełnij: „___ il treno, di solito non fa tardi.” (perdere, futuro anteriore)"
      },
      {
        "q": "„Saranno le tre” to:",
        "opts": [
          "szacunek godziny",
          "plan na trzecią",
          "rozkaz"
        ]
      },
      {
        "q": "Którym czasem włoski wyraża domysł o przeszłości?",
        "opts": [
          "imperfetto",
          "passato prossimo",
          "futuro anteriore"
        ]
      },
      {
        "q": "Wstaw formy domysłu.",
        "tr": "Nie odbiera: pewnie jest jeszcze na zebraniu. Albo zapomniał telefonu."
      },
      {
        "q": "„Pewnie jest trzecia, może po trzeciej.”"
      },
      {
        "q": "Które zdania wyrażają domysł?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà quarant'anni."
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Nie oddzwonił? Pewnie miał ciężki dzień."
      },
      {
        "tr": "Pewnie jest zmęczony: jechał osiem godzin."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    "theme": "Gramatyka",
    "title": "Dovere e potere: obbligo o probabilità",
    "objectives": [
      "odróżnić „deve” obowiązku od „deve” domysłu",
      "użyć „può darsi che” z congiuntivo",
      "wyrazić oczekiwanie przez „dovrebbe”"
    ],
    "theory": [
      {
        "h": "To samo słowo, dwa zupełnie różne sensy",
        "p": "<em>Devi essere puntuale</em> to obowiązek. <em>Deve essere stanco</em> to domysł. Forma jest ta sama, a rozstrzyga to, co stoi obok: przy domyśle prawie zawsze pojawia się przesłanka („ha guidato tutta la notte”), przy obowiązku termin albo reguła."
      },
      {
        "h": "Można darsi che bierze congiuntivo",
        "p": "<em>Può darsi che non <b>abbia</b> ricevuto il messaggio.</em> Ta konstrukcja jest w rozmowie częstsza niż <em>è possibile che</em> i brzmi mniej urzędowo. Po <em>può darsi che</em> nigdy nie stoi indicativo, nawet gdy mówimy o czymś oczywistym."
      },
      {
        "h": "Dovrebbe: oczekiwanie, nie powinność",
        "p": "<em>Dovrebbe essere già arrivato</em> nie znaczy, że ktoś ma obowiązek przyjechać: znaczy, że według rozkładu już powinien tu być. To skala pewności, nie moralności, i stoi wyżej niż <em>potrebbe</em>, a niżej niż <em>deve</em>."
      },
      {
        "contrast": "Mechanizm jest ci znany: polskie „musi być zmęczony” działa dokładnie tak samo, i to jest dobra wiadomość. Pułapka siedzi w „powinien”: po polsku brzmi jak powinność moralna, więc <em>dovrebbe essere arrivato</em> chce się przetłumaczyć jako wyrzut, a to jest zwykłe „powinien już tu być” w sensie rozkładu jazdy."
      }
    ],
    "grammar": {
      "title": "Skala pewności",
      "note": "Od najpewniejszego do wykluczenia.",
      "table": {
        "head": [
          "konstrukcja",
          "tryb",
          "co znaczy"
        ],
        "rows": [
          [
            "deve essere",
            "indicativo",
            "duże prawdopodobieństwo"
          ],
          [
            "devi essere",
            "indicativo",
            "obowiązek"
          ],
          [
            "potrebbe",
            "condizionale",
            "możliwość"
          ],
          [
            "può darsi che",
            "+ congiuntivo",
            "możliwość, rejestr potoczny"
          ],
          [
            "dovrebbe",
            "condizionale",
            "oczekiwanie"
          ],
          [
            "non può essere",
            "indicativo",
            "wykluczenie"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Pewnie jest zmęczony: jechał całą noc."
        },
        {
          "tr": "Masz być punktualnie, spotkanie jest o dziewiątej."
        },
        {
          "tr": "Może się spóźnić, są korki."
        },
        {
          "tr": "Możliwe, że nie dostał wiadomości."
        },
        {
          "tr": "Powinien już tu być o tej porze."
        },
        {
          "tr": "To nie może być on: jest na urlopie od tygodnia."
        }
      ]
    },
    "vocab": [
      "możliwe, że",
      "jest prawdopodobne, że",
      "jest mało prawdopodobne, że",
      "najprawdopodobniej",
      "prawie na pewno",
      "wykluczyć",
      "chyba że",
      "o ile nic nie wypadnie",
      "przypuszczać",
      "zaryzykować twierdzenie",
      "co do zasady",
      "jeśli się nie mylę"
    ],
    "exercises": [
      {
        "q": "„Deve essere stanco” znaczy:",
        "opts": [
          "Ma być zmęczony",
          "Pewnie jest zmęczony",
          "Musi się zmęczyć"
        ]
      },
      {
        "q": "Uzupełnij: „___ essere stanco: ha guidato tutta la notte.”"
      },
      {
        "q": "Uzupełnij: „___ essere già arrivato a quest'ora.” (dovere, condizionale)"
      },
      {
        "q": "Po „può darsi che” stoi:",
        "opts": [
          "congiuntivo",
          "indicativo",
          "condizionale"
        ]
      },
      {
        "q": "Które zdanie wyklucza możliwość?",
        "opts": [
          "Potrebbe arrivare tardi.",
          "Dovrebbe essere arrivato.",
          "Non può essere lui."
        ]
      },
      {
        "q": "Wstaw formy.",
        "tr": "Możliwe, że nie dostał wiadomości."
      },
      {
        "q": "„Pewnie jest zmęczony.” (przez dovere)"
      },
      {
        "q": "Dopasuj konstrukcje.",
        "tr": [
          "możliwe, że",
          "powinien (oczekiwanie)",
          "wykluczyć",
          "o ile nic nie wypadnie"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Powinien już tu być, wyjechał o szóstej."
      },
      {
        "tr": "Możliwe, że zmienił zdanie, zdarza się."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    "theme": "Gramatyka",
    "title": "Magari, mica, chissà",
    "objectives": [
      "rozróżnić trzy użycia „magari”",
      "wzmocnić przeczenie przez „mica”",
      "zawiesić sąd przez „chissà” i „sarà…, ma”"
    ],
    "theory": [
      {
        "h": "Magari ma trzy sensy, dwa z nich rozstrzyga tryb",
        "p": "Z indicativo: <em>magari piove</em> = „może pada”. Z congiuntivo imperfetto: <em>magari potessi!</em> = „gdybym tylko mógł!”. Samo, jako odpowiedź: <em>Vieni? Magari!</em> = „chętnie!”. Trzy różne rzeczy i tylko jedno słowo."
      },
      {
        "h": "Mica wzmacnia przeczenie",
        "p": "<em>Non è mica finita</em> to nie „nie skończyło się”, tylko „wcale się nie skończyło”, z nutą sprzeciwu wobec tego, co ktoś właśnie założył. Stoi po czasowniku i jest wyłącznie mówione: w piśmie urzędowym nie ma go wcale."
      },
      {
        "h": "Zawieszenie sądu: chissà i sarà…, ma",
        "p": "<em>Chissà se si sono ricordati</em> mówi wprost, że nie wiemy. <em>Sarà, ma io non ci credo</em> jest uprzejmym sposobem na „nie zgadzam się”: najpierw przyznajemy rozmówcy prawo do jego zdania, potem robimy swoje. Bardzo częste i bardzo włoskie."
      },
      {
        "contrast": "Trzy sensy „magari” dzielą się między trzy polskie słowa: „może”, „oby / gdybym tylko” i „chętnie”. Pierwsze dwa odróżnia wyłącznie tryb; trzeci poznasz po tym, że stoi sam, bez zdania. Dla <em>mica</em> polski ma „wcale”, ale bez tego odcienia sprzeciwu wobec cudzego założenia."
      }
    ],
    "grammar": {
      "title": "Słowa, które modalizują zdanie",
      "note": "Druga kolumna mówi, co słowo robi ze zdaniem.",
      "table": {
        "head": [
          "słowo",
          "co robi",
          "przykład"
        ],
        "rows": [
          [
            "magari + indicativo",
            "może, prawdopodobnie",
            "Magari piove."
          ],
          [
            "magari + congiuntivo imperfetto",
            "życzenie nierealne",
            "Magari potessi!"
          ],
          [
            "magari (da solo)",
            "chętnie!",
            "Vieni? Magari!"
          ],
          [
            "mica",
            "wzmacnia przeczenie",
            "Non è mica finita."
          ],
          [
            "chissà",
            "otwarcie nie wiem",
            "Chissà se arriva."
          ],
          [
            "sarà…, ma",
            "grzeczna niezgoda",
            "Sarà, ma non ci credo."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Może pada, lepiej weź parasol."
        },
        {
          "tr": "Gdybym tylko mógł przyjść i ja!"
        },
        {
          "tr": "Może zobaczymy się jutro, napiszę ci."
        },
        {
          "tr": "Wcale się nie skończyło, zostało dziesięć minut."
        },
        {
          "tr": "Kto wie, czy pamiętali."
        },
        {
          "tr": "No, może i tak, ale ja w to nie wierzę."
        }
      ]
    },
    "vocab": [
      "może, oby, chętnie",
      "wcale",
      "kto wie",
      "nie wiem (boh)",
      "jasne, że tak",
      "zobacz no",
      "no, może",
      "kto to wie",
      "ewentualnie",
      "nigdy nie wiadomo",
      "idź, zgadnij",
      "może i prawda, ale"
    ],
    "exercises": [
      {
        "q": "„Magari piove” znaczy:",
        "opts": [
          "Oby padało",
          "Może pada",
          "Gdyby padało"
        ]
      },
      {
        "q": "Uzupełnij: „Non è ___ finita, mancano dieci minuti.”"
      },
      {
        "q": "Uzupełnij: „___ se si sono ricordati.”"
      },
      {
        "q": "„Magari potessi venire!” to:",
        "opts": [
          "domysł",
          "propozycja",
          "życzenie nierealne"
        ]
      },
      {
        "q": "„Mica” wzmacnia:",
        "opts": [
          "przeczenie",
          "pytanie",
          "rozkaz"
        ]
      },
      {
        "q": "Wstaw słowa.",
        "tr": "Wcale się nie skończyło, zostało dziesięć minut. Kto wie, czy zauważyli."
      },
      {
        "q": "„Gdybym tylko mógł przyjść i ja!”"
      },
      {
        "q": "Które słowa sygnalizują niepewność?",
        "opts": [
          "chissà",
          "boh",
          "vai a sapere",
          "certamente"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Wcale nie jest powiedziane, że przyjdzie, wczoraj nie był pewny."
      },
      {
        "tr": "Kto wie, czy zauważyli, nikt nic nie powiedział."
      }
    ]
  },
  "lesson:c1-u04-test": {
    "theme": "Gramatyka",
    "title": "Test — Przypuszczenie",
    "exercises": [
      {
        "q": "„Sarà stanco” znaczy:",
        "opts": [
          "Będzie zmęczony",
          "Pewnie jest zmęczony",
          "Bywa zmęczony"
        ]
      },
      {
        "q": "„Saranno le tre” to:",
        "opts": [
          "szacunek godziny",
          "plan na trzecią",
          "rozkaz"
        ]
      },
      {
        "q": "Uzupełnij: „Non risponde: ___ in riunione.” (essere, domysł)"
      },
      {
        "q": "Uzupełnij: „___ il treno, di solito non fa tardi.” (perdere)"
      },
      {
        "q": "Uzupełnij: „Non è ___ finita, mancano dieci minuti.”"
      },
      {
        "q": "Domysł o przeszłości wyraża:",
        "opts": [
          "imperfetto",
          "condizionale",
          "futuro anteriore"
        ]
      },
      {
        "q": "Które zdania to domysły?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà perso il treno."
        ]
      },
      {
        "q": "Wstaw formy.",
        "tr": "Nie odbiera: pewnie jest na zebraniu. Możliwe, że oddzwoni później."
      },
      {
        "tr": "Pewnie coś mu wypadło, zwykle uprzedza."
      },
      {
        "tr": "Powinien już być w biurze o tej porze."
      }
    ]
  }
});
