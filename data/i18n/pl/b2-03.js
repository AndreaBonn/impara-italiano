/* ============================================================
   Teksty w języku ucznia (pl) do data/core/b2-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:b2-u06": {
    "title": "Przyzwolenie i spójniki",
    "grammarNote": "benché · anche se · tuttavia, anzi, del resto"
  },
  "lesson:b2-u06-l1": {
    "theme": "Gramatyka",
    "title": "Benché, sebbene, nonostante",
    "objectives": [
      "użyć congiuntivo po spójnikach przyzwolenia",
      "odróżnić „nonostante + zdanie” od „nonostante + rzeczownik”",
      "dobrać rejestr do sytuacji"
    ],
    "theory": [
      {
        "h": "Wszystkie te spójniki biorą congiuntivo",
        "p": "<em>Benché</em>, <em>sebbene</em>, <em>nonostante</em>, <em>malgrado</em>, <em>per quanto</em>, <em>quantunque</em> — po każdym z nich stoi congiuntivo: <em>benché <b>fosse</b> tardi</em>. To jedna z niewielu reguł włoskiego bez wyjątków, więc opłaca się ją zapamiętać w całości."
      },
      {
        "h": "Nonostante ma dwie twarze",
        "p": "Przed zdaniem: <em>nonostante <b>avesse</b> ragione</em> (congiuntivo). Przed rzeczownikiem: <em>nonostante <b>la pioggia</b></em> — bez czasownika i bez trybu. Ta druga konstrukcja jest krótsza i częstsza w piśmie."
      },
      {
        "h": "Rejestr: nie wszystkie są wymienne",
        "p": "<em>Quantunque</em> jest książkowe i w mowie brzmi dziwnie. <em>Malgrado</em> jest neutralne, <em>benché</em> i <em>sebbene</em> są nieco wyższe niż <em>anche se</em>. W rozmowie usłyszysz najczęściej <em>anche se</em>, które bierze indicativo i jest tematem następnej lekcji."
      },
      {
        "contrast": "Polskie „chociaż” i „mimo że” nie zmieniają trybu, więc cała ta reguła jest dla Polaka nowa i kosztuje uwagę: „chociaż <b>było</b> późno” → <em>benché <b>fosse</b> tardi</em>. Druga pułapka: polskie „mimo” łączy się z dopełniaczem („mimo deszcz<b>u</b>”), włoskie <em>nonostante</em> z formą podstawową (<em>nonostante la pioggia</em>), bez żadnej zmiany."
      }
    ],
    "grammar": {
      "title": "Spójniki przyzwolenia",
      "note": "Po lewej spójnik, po prawej tryb, którego wymaga.",
      "table": {
        "head": [
          "spójnik",
          "tryb",
          "przykład"
        ],
        "rows": [
          [
            "benché / sebbene",
            "congiuntivo",
            "benché fosse tardi"
          ],
          [
            "nonostante / malgrado",
            "congiuntivo, o + nome",
            "nonostante la pioggia"
          ],
          [
            "per quanto",
            "congiuntivo",
            "per quanto ci provi"
          ],
          [
            "anche se",
            "indicativo",
            "anche se piove"
          ],
          [
            "pur + gerundio",
            "bez podmiotu",
            "pur avendo ragione"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Chociaż było późno, i tak wyszliśmy."
        },
        {
          "tr": "Chociaż wiedział, nic nie powiedział."
        },
        {
          "tr": "Mimo deszczu targi pozostały otwarte."
        },
        {
          "tr": "Mimo że miał rację, przeprosił."
        },
        {
          "tr": "Mimo wszystko projekt poszedł dalej."
        },
        {
          "tr": "Choćbym nie wiem jak próbował, nie udaje mi się."
        }
      ]
    },
    "vocab": [
      "chociaż",
      "chociaż (wyższy rejestr)",
      "mimo, mimo że",
      "mimo",
      "choćby, jakkolwiek",
      "aczkolwiek (książkowe)",
      "będąc mimo to",
      "i tak",
      "i tak, mimo wszystko",
      "w każdym razie",
      "wbrew",
      "mimo to"
    ],
    "exercises": [
      {
        "q": "Który tryb po „benché”?",
        "opts": [
          "indicativo",
          "congiuntivo",
          "condizionale"
        ]
      },
      {
        "q": "Uzupełnij: „Benché ___ tardi, siamo usciti.” (essere)"
      },
      {
        "q": "Uzupełnij: „Sebbene lo ___, non ha detto niente.” (sapere)"
      },
      {
        "q": "„Nonostante la pioggia” to:",
        "opts": [
          "nonostante + rzeczownik",
          "nonostante + congiuntivo",
          "błąd"
        ]
      },
      {
        "q": "Który spójnik jest najbardziej książkowy?",
        "opts": [
          "anche se",
          "benché",
          "quantunque"
        ]
      },
      {
        "q": "Wstaw congiuntivo.",
        "tr": "Chociaż było późno, wyszliśmy; mimo że padało, dotarliśmy."
      },
      {
        "q": "„Chociaż było późno, wyszliśmy.”"
      },
      {
        "q": "Dopasuj spójniki.",
        "tr": [
          "chociaż",
          "mimo",
          "choćby",
          "będąc mimo to"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Chociaż miał wszystkie dokumenty, sprawa stała trzy miesiące."
      },
      {
        "tr": "Mimo deszczu i tak poszliśmy na targ."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    "theme": "Gramatyka",
    "title": "Anche se i jego pułapki",
    "objectives": [
      "użyć „anche se” z indicativo",
      "odróżnić „pur + gerundio” od „pur di + bezokolicznik”",
      "wyrazić hipotezę przez „anche se” + congiuntivo imperfetto"
    ],
    "theory": [
      {
        "h": "Anche se bierze indicativo, nie congiuntivo",
        "p": "To jedyny spójnik przyzwolenia, który go NIE bierze: <em>anche se <b>piove</b>, esco</em>. Błąd <em>anche se piova</em> jest bardzo częsty u osób, które dobrze nauczyły się poprzedniej lekcji."
      },
      {
        "h": "…chyba że mówisz o hipotezie",
        "p": "<em>Anche se lo <b>sapessi</b>, non te lo direi</em> — tu congiuntivo imperfetto wraca, ale nie z powodu <em>anche se</em>: to okres warunkowy drugiego typu, który po prostu stoi w środku. Sprawdzian: czy zdanie mówi o czymś nierzeczywistym?"
      },
      {
        "h": "Pur + gerundio i pur di + bezokolicznik to dwie różne rzeczy",
        "p": "<em>Pur avendo ragione</em> = „chociaż miał rację” (przyzwolenie). <em>Pur di finire</em> = „byle tylko skończyć” (cel, często z odcieniem poświęcenia). Podobne z wyglądu, przeciwne w sensie, i mylone stale."
      },
      {
        "contrast": "Po polsku „nawet gdyby” i „nawet jeśli” rozróżniają hipotezę od faktu samą formą, więc masz tu przewagę nad Anglikiem czy Niemcem: „nawet <b>jeśli</b> pada” → <em>anche se piove</em>, „nawet <b>gdybym</b> wiedział” → <em>anche se lo sapessi</em>. Wystarczy tłumaczyć rozróżnienie, które już masz."
      }
    ],
    "grammar": {
      "title": "Anche se i konstrukcje pokrewne",
      "note": "Uwaga na drugą i czwartą linijkę: wyglądają podobnie.",
      "table": {
        "head": [
          "konstrukcja",
          "znaczenie",
          "przykład"
        ],
        "rows": [
          [
            "anche se + indicativo",
            "fakt",
            "anche se piove, esco"
          ],
          [
            "anche se + congiuntivo imp.",
            "hipoteza",
            "anche se lo sapessi, non lo direi"
          ],
          [
            "pur + gerundio",
            "ten sam podmiot",
            "pur avendo ragione, ha taciuto"
          ],
          [
            "pur di + bezokolicznik",
            "cel, nie przyzwolenie",
            "pur di finire, ha lavorato di notte"
          ],
          [
            "neanche se",
            "wzmocnione przeczenie",
            "neanche se me lo chiedessero"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Nawet jeśli pada, i tak wychodzę."
        },
        {
          "tr": "Nawet gdybym wiedział, nie powiedziałbym ci."
        },
        {
          "tr": "Chociaż miał rację, odpuścił."
        },
        {
          "tr": "Byle tylko skończyć, pracował całą noc."
        },
        {
          "tr": "Nawet gdyby mnie poprosili, nie zrobiłbym tego."
        },
        {
          "tr": "Choćby było trudne, warto."
        }
      ]
    },
    "vocab": [
      "nawet jeśli",
      "nawet gdyby nie",
      "chociaż (+ imiesłów)",
      "byle tylko",
      "odpuścić",
      "być wartym zachodu",
      "dać radę",
      "zrezygnować",
      "nalegać",
      "za cenę",
      "też, nawet",
      "a jednak"
    ],
    "exercises": [
      {
        "q": "Który tryb po „anche se” w zdaniu o fakcie?",
        "opts": [
          "indicativo",
          "congiuntivo",
          "obojętnie"
        ]
      },
      {
        "q": "Uzupełnij: „___ piove, esco lo stesso.”"
      },
      {
        "q": "Uzupełnij: „___ ragione, ha lasciato perdere.” (pur + avere)"
      },
      {
        "q": "„Pur di finire” znaczy:",
        "opts": [
          "chociaż skończył",
          "byle tylko skończyć",
          "skończywszy"
        ]
      },
      {
        "q": "Kiedy po „anche se” stoi congiuntivo imperfetto?",
        "opts": [
          "zawsze",
          "nigdy",
          "gdy zdanie jest hipotezą"
        ]
      },
      {
        "q": "Wstaw spójnik.",
        "tr": "Nawet jeśli pada, wychodzę; nawet gdybym wiedział, nie powiedziałbym."
      },
      {
        "q": "„Nawet jeśli pada, i tak wychodzę.”"
      },
      {
        "q": "Które zdania są poprawne?",
        "opts": [
          "Anche se piove, esco.",
          "Anche se piova, esco.",
          "Pur piovendo, esco."
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Chociaż miałem umówione spotkanie, czekałem dwie godziny."
      },
      {
        "tr": "Chociaż miałem rację, wolałem odpuścić."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    "theme": "Gramatyka",
    "title": "Tuttavia, anzi, del resto",
    "objectives": [
      "połączyć zdania spójnikiem tekstowym",
      "odróżnić „anzi” od zwykłego przeciwstawienia",
      "dobrać rejestr: „pertanto” czy „quindi”"
    ],
    "theory": [
      {
        "h": "Te słowa nie wnoszą treści, tylko instrukcję",
        "p": "<em>Tuttavia</em> mówi: „to, co zaraz powiem, idzie pod prąd temu, co przeczytałeś”. <em>Del resto</em> mówi: „zresztą było do przewidzenia”. Bez nich tekst jest listą zdań, a czytelnik sam musi zgadnąć, jak się łączą."
      },
      {
        "h": "Anzi to poprawka, nie przeciwstawienie",
        "p": "<em>Non mi ha disturbato, <b>anzi</b> mi ha fatto piacere.</em> <em>Anzi</em> nie przeczy poprzedniemu zdaniu: przesuwa je dalej w tę samą stronę, zwykle mocniej. Po polsku najbliższe jest „przeciwnie” albo „wręcz”."
      },
      {
        "h": "Rejestr: pertanto kontra quindi",
        "p": "<em>Pertanto</em> i <em>peraltro</em> należą do języka urzędowego; w rozmowie brzmią sztucznie. Mówi się <em>quindi</em>, <em>allora</em>, <em>comunque</em>. Zasada praktyczna: w piśmie do urzędu bierz pierwszą kolumnę, w rozmowie drugą."
      },
      {
        "contrast": "Dwaj fałszywi przyjaciele od razu. Włoskie <em>in effetti</em> znaczy „faktycznie, rzeczywiście” (przyznanie racji), a nie „w efekcie” — to byłoby <em>di conseguenza</em>. A <em>eventualmente</em> znaczy „ewentualnie”, nie „ostatecznie”. Oba brzmią znajomo i oba mówią co innego."
      }
    ],
    "grammar": {
      "title": "Spójniki tekstowe",
      "note": "W trzeciej kolumnie rejestr albo pułapka.",
      "table": {
        "head": [
          "spójnik",
          "co robi",
          "uwaga"
        ],
        "rows": [
          [
            "tuttavia",
            "przeciwstawienie",
            "wysoki rejestr"
          ],
          [
            "anzi",
            "poprawka w górę",
            "„przeciwnie, nawet”"
          ],
          [
            "del resto",
            "to było do przewidzenia",
            "potoczne i pisane"
          ],
          [
            "pertanto",
            "wniosek",
            "urzędowe"
          ],
          [
            "semmai",
            "ewentualnie, co najwyżej",
            "łagodzi"
          ],
          [
            "in effetti",
            "przyznanie racji",
            "nie „w efekcie”"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Cena jest wysoka; mimo to jakość ją uzasadnia."
        },
        {
          "tr": "Nie przeszkodził mi, przeciwnie — sprawił mi przyjemność."
        },
        {
          "tr": "Zresztą było do przewidzenia."
        },
        {
          "tr": "W związku z tym wniosek trzeba złożyć ponownie."
        },
        {
          "tr": "Ewentualnie wrócimy do tego jutro."
        },
        {
          "tr": "Rzeczywiście, to on miał rację."
        }
      ]
    },
    "vocab": [
      "jednak, mimo to",
      "przeciwnie, wręcz",
      "zresztą",
      "w związku z tym",
      "ewentualnie, co najwyżej",
      "rzeczywiście",
      "z drugiej strony",
      "poza tym (urzędowe)",
      "a jednak",
      "raczej",
      "więc",
      "krótko mówiąc"
    ],
    "exercises": [
      {
        "q": "„Anzi” znaczy:",
        "opts": [
          "jednak",
          "przeciwnie, wręcz",
          "dlatego"
        ]
      },
      {
        "q": "Uzupełnij: „Non mi ha disturbato, ___ mi ha fatto piacere.”"
      },
      {
        "q": "Uzupełnij: „Il prezzo è alto; ___ la qualità lo giustifica.”"
      },
      {
        "q": "„In effetti” znaczy:",
        "opts": [
          "w efekcie",
          "ewentualnie",
          "rzeczywiście"
        ]
      },
      {
        "q": "Który spójnik jest urzędowy?",
        "opts": [
          "pertanto",
          "quindi",
          "allora"
        ]
      },
      {
        "q": "Wstaw spójniki.",
        "tr": "Cena jest wysoka; mimo to jakość ją uzasadnia. Zresztą było do przewidzenia."
      },
      {
        "q": "„Nie przeszkodził mi, przeciwnie — sprawił mi przyjemność.”"
      },
      {
        "q": "Dopasuj spójniki.",
        "tr": [
          "jednak",
          "przeciwnie",
          "w związku z tym",
          "ewentualnie"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Wniosek dotarł na czas; brakowało jednak jednego podpisu."
      },
      {
        "tr": "To nie problem, przeciwnie — to najprostsza rzecz ze wszystkich."
      }
    ]
  },
  "lesson:b2-u06-test": {
    "theme": "Egzamin",
    "title": "Egzamin końcowy poziomu B2",
    "objectives": [
      "sprawdzić congiuntivo, okresy warunkowe, mowę zależną, przyzwolenie i spójniki"
    ],
    "theory": [
      {
        "p": "Dwanaście zadań z całego poziomu B2. Zaliczenie od 70%."
      }
    ],
    "exercises": [
      {
        "q": "Który tryb po „sebbene”?",
        "opts": [
          "indicativo",
          "congiuntivo",
          "condizionale"
        ]
      },
      {
        "q": "Który tryb po „anche se” (fakt)?",
        "opts": [
          "indicativo",
          "congiuntivo",
          "condizionale"
        ]
      },
      {
        "q": "Uzupełnij: „Benché ___ tardi, siamo usciti.” (essere)"
      },
      {
        "q": "Uzupełnij: „___ piove, esco lo stesso.”"
      },
      {
        "q": "Uzupełnij: „Non mi ha disturbato, ___ mi ha fatto piacere.”"
      },
      {
        "q": "„Pur di finire” znaczy:",
        "opts": [
          "chociaż skończył",
          "skończywszy",
          "byle tylko skończyć"
        ]
      },
      {
        "q": "Które zdania są poprawne?",
        "opts": [
          "Benché fosse tardi, siamo usciti.",
          "Anche se piove, esco.",
          "Anche se piova, esco."
        ]
      },
      {
        "q": "Mowa zależna. Uzupełnij: „Mi ha detto che ___ il giorno dopo.” (venire)"
      },
      {
        "tr": "Gdyby mnie posłuchali, problem zostałby rozwiązany."
      },
      {
        "q": "Wstaw formy.",
        "tr": "Chociaż było późno, wyszliśmy; nawet jeśli padało, nie zatrzymaliśmy się."
      },
      {
        "tr": "Chociaż złożył wszystko, poprosili go o kolejny dokument."
      },
      {
        "tr": "Nawet jeśli kosztuje więcej, w końcu się opłaca."
      }
    ]
  }
});
