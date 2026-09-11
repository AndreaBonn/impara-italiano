/* ============================================================
   Texte in der Sprache der Lernenden (de) für data/core/c2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:c2-u04": {
    "title": "Relativpronomen und Rektion",
    "grammarNote": "a cui · il che · riuscire a, tentare di"
  },
  "lesson:c2-u04-l1": {
    "theme": "Grammatik",
    "title": "Cui, il quale e i loro obblighi",
    "objectives": [
      "«cui» mit der richtigen Präposition verwenden",
      "Besitz mit «il cui» ausdrücken",
      "eine Mehrdeutigkeit mit «il quale» auflösen"
    ],
    "theory": [
      {
        "h": "Che nimmt keine Präposition",
        "p": "<em>La collega <b>che</b> ho visto</em> ist richtig, aber <em>la collega a che ho scritto</em> gibt es nicht. Sobald eine Präposition nötig ist, weicht <em>che</em> dem <em>cui</em>: <em>a cui</em>, <em>di cui</em>, <em>in cui</em>, <em>con cui</em>. Das ist die ganze Regel, und sie hat keine Ausnahme."
      },
      {
        "h": "Welche Präposition? Die, die das Verb verlangt",
        "p": "<em>Scrivere <b>a</b> qualcuno</em> ergibt <em>la collega <b>a cui</b> ho scritto</em>. <em>Parlare <b>di</b> qualcosa</em> ergibt <em>il progetto <b>di cui</b> parlavamo</em>. Nicht der Relativsatz wählt die Präposition: das Verb bringt sie mit, und deshalb lässt sich die dritte Lektion dieser Einheit nicht überspringen."
      },
      {
        "h": "Il cui ist Besitz und richtet sich nach dem Besessenen",
        "p": "<em>L'autore <b>il cui</b> libro hai letto</em>: der Artikel gehört zu <em>libro</em>, nicht zum Autor. Daher <em>la scrittrice <b>il cui</b> romanzo</em> und <em>l'autore <b>la cui</b> opera</em>. Genau umgekehrt, als die Intuition nahelegt."
      },
      {
        "contrast": "Deutsch macht dieselbe Arbeit mit dem Kasus: «die Kollegin, <b>der</b> ich geschrieben habe» (Dativ) entspricht <em>a cui</em>, «das Projekt, <b>über das</b> wir sprachen» entspricht <em>di cui</em>. Der Mechanismus ist Ihnen vertraut, nur steht statt der Endung eine Präposition. Beim Besitz ist «dessen/deren» der Fallstrick: es richtet sich im Deutschen nach dem Besitzer, im Italienischen der Artikel nach dem Besessenen."
      }
    ],
    "grammar": {
      "title": "Relativpronomen",
      "note": "Die dritte Spalte sagt, wann die Form passt.",
      "table": {
        "head": [
          "Form",
          "was sie tut",
          "wann"
        ],
        "rows": [
          [
            "che",
            "soggetto o oggetto",
            "ohne Präposition"
          ],
          [
            "a cui / di cui / in cui",
            "con preposizione",
            "wenn das Verb eine Präposition verlangt"
          ],
          [
            "il cui / la cui",
            "possesso",
            "Besitz"
          ],
          [
            "il quale / la quale",
            "toglie l'ambiguità",
            "wenn «che» mehrdeutig wäre"
          ],
          [
            "dove",
            "solo luogo",
            "nur Ort"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Die Kollegin, der ich geschrieben habe, hat nicht geantwortet."
        },
        {
          "tr": "Das Projekt, über das wir sprachen, ist genehmigt worden."
        },
        {
          "tr": "Der Autor, dessen Buch du gelesen hast, kommt morgen."
        },
        {
          "tr": "Die Schwester des Direktors, die in Mailand arbeitet, kommt heute."
        },
        {
          "tr": "Die Stadt, in der ich geboren bin, gibt es nicht mehr."
        },
        {
          "tr": "Die Leute, mit denen ich arbeite, sind sehr gut."
        }
      ]
    },
    "vocab": [
      "das Relativpronomen",
      "die Präposition",
      "das Bezugswort",
      "dem, über den",
      "welcher",
      "dessen, deren",
      "die Mehrdeutigkeit",
      "sich beziehen",
      "präzisieren",
      "regieren",
      "obligatorisch",
      "fakultativ"
    ],
    "exercises": [
      {
        "q": "Wie sagt man «die Kollegin, der ich geschrieben habe»?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Ergänzen Sie: «La collega a ___ ho scritto non ha risposto.»"
      },
      {
        "q": "Ergänzen Sie: «L'autore ___ libro hai letto viene domani.» (Besitz)"
      },
      {
        "q": "«Il quale» dient dazu:",
        "opts": [
          "den Satz zu kürzen",
          "Besitz auszudrücken",
          "eine Mehrdeutigkeit aufzulösen"
        ]
      },
      {
        "q": "Wonach richtet sich der Artikel in «il cui»?",
        "opts": [
          "nach dem Besessenen",
          "nach dem Besitzer",
          "nach dem Satzsubjekt"
        ]
      },
      {
        "q": "Setzen Sie die Pronomen ein.",
        "tr": "Die Kollegin, der ich geschrieben habe, hat nicht geantwortet. Der Autor, dessen Buch du gelesen hast, kommt morgen."
      },
      {
        "q": "«Das Projekt, über das wir sprachen, ist genehmigt worden.»"
      },
      {
        "q": "Welche Sätze sind richtig?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Der Kollege, mit dem ich jahrelang das Büro geteilt habe, geht in Rente."
      },
      {
        "tr": "Das Projekt, über das wir gestern sprachen, wurde heute Morgen genehmigt."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    "theme": "Grammatik",
    "title": "Chi, il che, quanto",
    "objectives": [
      "«chi» im Sinne von «wer» verwenden",
      "den ganzen Satz mit «il che» kommentieren",
      "«ciò che» durch «quanto» ersetzen"
    ],
    "theory": [
      {
        "h": "Chi heißt «wer» und braucht kein Bezugswort",
        "p": "<em>Chi arriva tardi aspetta fuori</em> = «wer zu spät kommt, wartet draußen». Das Verb steht immer im Singular, auch wenn viele gemeint sind, und das ist das Einzige, was man hier falsch machen kann."
      },
      {
        "h": "Il che kommentiert den ganzen vorangehenden Satz",
        "p": "<em>Ha rifiutato l'incarico, <b>il che</b> mi preoccupa</em>: Sorge macht die Absage, nicht der Posten. Ohne <em>il</em> zielte das Pronomen auf das letzte Substantiv und der Satz sagte etwas anderes. Die Variante <em>cosa che</em> ist etwas weniger förmlich und leistet dasselbe."
      },
      {
        "h": "Quanto statt ciò che",
        "p": "<em>Non credo a <b>quanto</b> mi hai raccontato</em>. Kürzer und höher im Register als <em>ciò che</em>, sehr häufig im Geschriebenen. Gesprochen hört man eher <em>quello che</em>, was ebenso richtig ist."
      },
      {
        "contrast": "Deutsch hat «was» nach Komma («er hat den Posten abgelehnt, was mich beunruhigt»), und das deckt <em>il che</em> genau. Die Falle ist wieder der Artikel: Deutsch hat dort nichts, und deshalb schreibt man spontan <em>che mi preoccupa</em>, was sich dann auf «l'incarico» bezieht. Erst das <em>il</em> lässt das Pronomen den ganzen Satz meinen."
      }
    ],
    "grammar": {
      "title": "Pronomen ohne Bezugswort",
      "note": "Die zweite Spalte sagt, worauf sich die Form bezieht.",
      "table": {
        "head": [
          "Form",
          "worauf sie sich bezieht",
          "Beispiel"
        ],
        "rows": [
          [
            "chi",
            "auf eine Person, wer",
            "Chi arriva tardi aspetta fuori."
          ],
          [
            "il che",
            "auf den ganzen vorangehenden Satz",
            "Ha rifiutato, il che mi preoccupa."
          ],
          [
            "cosa che",
            "dasselbe, niedrigeres Register",
            "Ha risposto male, cosa che non gli somiglia."
          ],
          [
            "quanto",
            "auf das Gesagte",
            "Non credo a quanto mi hai detto."
          ],
          [
            "c'è chi",
            "auf eine unbestimmte Gruppe",
            "C'è chi dice che sia un errore."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Wer zu spät kommt, wartet draußen."
        },
        {
          "tr": "Er hat den Posten abgelehnt, was mich beunruhigt."
        },
        {
          "tr": "Ich glaube nicht, was du mir erzählt hast."
        },
        {
          "tr": "Es gibt Leute, die sagen, es sei ein Fehler."
        },
        {
          "tr": "Er hat unfreundlich geantwortet, was ihm gar nicht ähnlich sieht."
        },
        {
          "tr": "Was gestern passiert ist, bleibt unter uns."
        }
      ]
    },
    "vocab": [
      "wer",
      "was (auf den Satz bezogen)",
      "was (weniger förmlich)",
      "was",
      "das, was",
      "es gibt Leute, die",
      "der ganze Satz",
      "der Kommentar",
      "beunruhigen",
      "ähnlich sehen",
      "unter uns bleiben",
      "zusammenfassen"
    ],
    "exercises": [
      {
        "q": "«Chi arriva tardi aspetta fuori» bedeutet:",
        "opts": [
          "Wer kommt? Er wartet draußen",
          "Wer zu spät kommt, wartet draußen",
          "Er kam zu spät und wartet"
        ]
      },
      {
        "q": "Ergänzen Sie: «___ arriva tardi aspetta fuori.»"
      },
      {
        "q": "Ergänzen Sie: «Ha rifiutato l'incarico, ___ mi preoccupa.»"
      },
      {
        "q": "«Il che» bezieht sich auf:",
        "opts": [
          "den ganzen vorangehenden Satz",
          "das letzte Substantiv",
          "das Subjekt"
        ]
      },
      {
        "q": "Nach «chi» steht das Verb im:",
        "opts": [
          "Plural",
          "beides möglich",
          "Singular"
        ]
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Wer zu spät kommt, wartet draußen. Er hat den Posten abgelehnt, was mich beunruhigt."
      },
      {
        "q": "«Wer zu spät kommt, wartet draußen.»"
      },
      {
        "q": "Ordnen Sie die Formen zu.",
        "tr": [
          "wer",
          "was (auf den Satz bezogen)",
          "das, was",
          "es gibt Leute, die"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Er hat abgelehnt, ohne einen Grund zu nennen, was mich beunruhigt."
      },
      {
        "tr": "Es gibt Leute, die sagen, es sei ein Fehler, aber niemand schreibt es schwarz auf weiß."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    "theme": "Grammatik",
    "title": "Reggenze che non si indovinano",
    "objectives": [
      "die Präposition wählen, die das Verb verlangt",
      "«riuscire a» von «tentare di» unterscheiden",
      "die Rektionen lernen, die keiner Logik folgen"
    ],
    "theory": [
      {
        "h": "Das ist eine Liste, keine Regel",
        "p": "<em>Riuscire <b>a</b></em>, <em>provare <b>a</b></em>, aber <em>tentare <b>di</b></em>, obwohl sie fast dasselbe bedeuten. <em>Cominciare <b>a</b></em>, aber <em>finire <b>di</b></em>. Nichts davon folgt aus der Bedeutung, und jeder Ableitungsversuch endet im Fehler: Verb und Präposition zusammen lernen, wie ein einziges Wort."
      },
      {
        "h": "Die vier, die am häufigsten verwechselt werden",
        "p": "<em>Rendersi conto <b>di</b></em> und <em>accorgersi <b>di</b></em>, <em>convincere <b>a</b></em> gegen <em>dissuadere <b>da</b></em>, <em>tenere <b>a</b></em> im Sinne von «Wert legen auf», <em>badare <b>a</b></em> im Sinne von «achten auf». Diese vier kehren in jedem Text und in jeder Prüfung wieder."
      },
      {
        "h": "Die Präposition bleibt auch im Relativsatz",
        "p": "Da es <em>tenere a qualcosa</em> heißt, lautet der Relativsatz <em>la cosa <b>a cui</b> tengo</em>. Deshalb steht diese Lektion in derselben Einheit wie die erste: ohne die Rektion entsteht kein korrektes <em>cui</em>, so gut man die Regel auch kennt."
      },
      {
        "contrast": "Deutsch hat dieselbe Willkür, nur mit Präposition plus Kasus: «Wert legen <b>auf</b> + Akkusativ», «achten <b>auf</b>», «sich bewusst werden + Genitiv». Sie kennen das Problem also. Die Warnung: weil Deutsch beim Infinitiv oft nur «zu» braucht («es gelang mir zu beenden»), fehlt im Italienischen erfahrungsgemäß die Präposition ganz — <em>riuscire <b>a</b> finire</em> braucht sie zwingend."
      }
    ],
    "grammar": {
      "title": "Rektion der Verben",
      "note": "Die zweite Spalte ist die Präposition, die das Verb verlangt.",
      "table": {
        "head": [
          "Verben",
          "Präposition",
          "Bedeutung"
        ],
        "rows": [
          [
            "riuscire a, provare a",
            "a",
            "schaffen, versuchen"
          ],
          [
            "tentare di, smettere di",
            "di",
            "versuchen, aufhören"
          ],
          [
            "rendersi conto di",
            "di",
            "sich bewusst werden"
          ],
          [
            "convincere a, persuadere a",
            "a",
            "überreden zu"
          ],
          [
            "dissuadere da",
            "da",
            "abbringen von"
          ],
          [
            "tenere a, badare a",
            "a",
            "Wert legen auf, achten auf"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Ich habe es rechtzeitig geschafft."
        },
        {
          "tr": "Ich habe zweimal versucht, es ihm zu erklären."
        },
        {
          "tr": "Ich habe den Fehler zu spät bemerkt."
        },
        {
          "tr": "Sie haben ihn überredet, noch ein Jahr zu bleiben."
        },
        {
          "tr": "Mir liegt daran, es gleich zu sagen."
        },
        {
          "tr": "Er hat erst gestern aufgehört zu klagen."
        }
      ]
    },
    "vocab": [
      "schaffen, gelingen",
      "versuchen",
      "probieren",
      "sich bewusst werden",
      "bemerken",
      "überreden zu",
      "abbringen von",
      "Wert legen auf",
      "achten auf",
      "vertrauen",
      "verzichten auf",
      "aufhören"
    ],
    "exercises": [
      {
        "q": "Was ist richtig?",
        "opts": [
          "riuscire di finire",
          "riuscire a finire",
          "riuscire finire"
        ]
      },
      {
        "q": "Ergänzen Sie: «Sono riuscito ___ finire in tempo.»"
      },
      {
        "q": "Ergänzen Sie: «Ho tentato ___ spiegarglielo due volte.»"
      },
      {
        "q": "«Rendersi conto» steht mit:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Welche Präposition nimmt «dissuadere»?",
        "opts": [
          "da",
          "a",
          "di"
        ]
      },
      {
        "q": "Setzen Sie die Präpositionen ein.",
        "tr": "Ich habe es rechtzeitig geschafft, aber ich habe zweimal versucht, es ihm zu erklären."
      },
      {
        "q": "«Ich habe den Fehler zu spät bemerkt.»"
      },
      {
        "q": "Welche Verbindungen sind richtig?",
        "opts": [
          "tentare a spiegare",
          "tentare di spiegare",
          "provare a spiegare"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Ich habe den Fehler erst bemerkt, als der Vorgang schon draußen war."
      },
      {
        "tr": "Mir liegt daran, es gleich zu sagen: ich bin mit dieser Entscheidung nicht einverstanden."
      }
    ]
  },
  "lesson:c2-u04-test": {
    "theme": "Prüfung",
    "title": "Abschlussprüfung Niveau C2",
    "objectives": [
      "Partizipien, Plural und Wortbildung, Register, Relativpronomen und Rektion prüfen"
    ],
    "theory": [
      {
        "p": "Zwölf Aufgaben aus dem gesamten Niveau C2. Bestanden ab 70%. Es ist der letzte Test des Kurses."
      }
    ],
    "exercises": [
      {
        "q": "Wie sagt man «die Kollegin, der ich geschrieben habe»?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Ergänzen Sie: «La collega a ___ ho scritto non ha risposto.»"
      },
      {
        "q": "Ergänzen Sie: «L'autore ___ libro hai letto viene domani.»"
      },
      {
        "q": "«Il che» bezieht sich auf:",
        "opts": [
          "den ganzen vorangehenden Satz",
          "das letzte Substantiv",
          "das Subjekt"
        ]
      },
      {
        "q": "Ergänzen Sie: «Ha rifiutato l'incarico, ___ mi preoccupa.»"
      },
      {
        "q": "«Rendersi conto» steht mit:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Ergänzen Sie: «Sono riuscito ___ finire in tempo.»"
      },
      {
        "q": "Welche Sätze sind richtig?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Die Kollegin, der ich geschrieben habe, hat nicht geantwortet, was mir seltsam vorkommt."
      },
      {
        "q": "«Wer zu spät kommt, wartet draußen.»"
      },
      {
        "tr": "Der Autor, dessen Buch wir im Unterricht gelesen haben, hält einen Vortrag."
      },
      {
        "tr": "Erst danach wurde mir bewusst, wie wichtig jene Sitzung gewesen war."
      }
    ]
  }
});
