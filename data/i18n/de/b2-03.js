/* ============================================================
   Texte in der Sprache der Lernenden (de) für data/core/b2-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:b2-u06": {
    "title": "Konzessive und Konnektoren",
    "grammarNote": "benché · anche se · tuttavia, anzi, del resto"
  },
  "lesson:b2-u06-l1": {
    "theme": "Grammatik",
    "title": "Benché, sebbene, nonostante",
    "objectives": [
      "den Konjunktiv nach konzessiven Konjunktionen verwenden",
      "«nonostante + Nebensatz» von «nonostante + Nomen» unterscheiden",
      "das Register zur Situation wählen"
    ],
    "theory": [
      {
        "h": "Alle diese Konjunktionen verlangen den Konjunktiv",
        "p": "<em>Benché</em>, <em>sebbene</em>, <em>nonostante</em>, <em>malgrado</em>, <em>per quanto</em>, <em>quantunque</em> — nach jeder steht der Konjunktiv: <em>benché <b>fosse</b> tardi</em>. Eine der wenigen italienischen Regeln ohne Ausnahme, also lohnt es sich, sie als Ganzes zu lernen."
      },
      {
        "h": "Nonostante hat zwei Gesichter",
        "p": "Vor einem Nebensatz: <em>nonostante <b>avesse</b> ragione</em> (Konjunktiv). Vor einem Nomen: <em>nonostante <b>la pioggia</b></em> — ohne Verb, ohne Modus. Die zweite Form ist kürzer und schriftlich häufiger."
      },
      {
        "h": "Register: austauschbar sind sie nicht",
        "p": "<em>Quantunque</em> ist buchsprachlich und klingt gesprochen seltsam. <em>Malgrado</em> ist neutral; <em>benché</em> und <em>sebbene</em> stehen etwas über <em>anche se</em>. Im Gespräch hören Sie vor allem <em>anche se</em>, das den Indikativ verlangt — die nächste Lektion."
      },
      {
        "contrast": "Deutsch «obwohl» lässt den Modus unberührt, die ganze Regel ist also neue Arbeit: «obwohl es spät <b>war</b>» → <em>benché <b>fosse</b> tardi</em>. Zweite Falle: «trotz» regiert im Deutschen den Genitiv und steht nie vor einem Nebensatz, während <em>nonostante</em> beides kann — der deutsche Instinkt führt Sie hier von einer völlig korrekten italienischen Konstruktion weg."
      }
    ],
    "grammar": {
      "title": "Konzessive Konjunktionen",
      "note": "Links die Konjunktion, rechts der Modus, den sie verlangt.",
      "table": {
        "head": [
          "Konjunktion",
          "Modus",
          "Beispiel"
        ],
        "rows": [
          [
            "benché / sebbene",
            "Konjunktiv",
            "benché fosse tardi"
          ],
          [
            "nonostante / malgrado",
            "Konjunktiv, oder + Nomen",
            "nonostante la pioggia"
          ],
          [
            "per quanto",
            "Konjunktiv",
            "per quanto ci provi"
          ],
          [
            "anche se",
            "Indikativ",
            "anche se piove"
          ],
          [
            "pur + Gerundium",
            "ohne Subjekt",
            "pur avendo ragione"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Obwohl es spät war, sind wir trotzdem ausgegangen."
        },
        {
          "tr": "Obwohl er es wusste, sagte er nichts."
        },
        {
          "tr": "Trotz des Regens blieb die Messe geöffnet."
        },
        {
          "tr": "Obwohl er recht hatte, hat er sich entschuldigt."
        },
        {
          "tr": "Trotz allem ging das Projekt weiter."
        },
        {
          "tr": "So sehr ich es auch versuche, ich schaffe es nicht."
        }
      ]
    },
    "vocab": [
      "obwohl",
      "obgleich (gehoben)",
      "trotz, obwohl",
      "ungeachtet",
      "so sehr auch",
      "wenngleich (buchsprachlich)",
      "obschon seiend",
      "trotzdem",
      "jedenfalls",
      "auf jeden Fall",
      "zum Trotz",
      "nichtsdestotrotz"
    ],
    "exercises": [
      {
        "q": "Welcher Modus nach «benché»?",
        "opts": [
          "Indikativ",
          "Konjunktiv",
          "Konditional"
        ]
      },
      {
        "q": "Ergänzen Sie: «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Ergänzen Sie: «Sebbene lo ___, non ha detto niente.» (sapere)"
      },
      {
        "q": "«Nonostante la pioggia» ist:",
        "opts": [
          "nonostante + Nomen",
          "nonostante + Konjunktiv",
          "ein Fehler"
        ]
      },
      {
        "q": "Welche Konjunktion ist am buchsprachlichsten?",
        "opts": [
          "anche se",
          "benché",
          "quantunque"
        ]
      },
      {
        "q": "Setzen Sie den Konjunktiv ein.",
        "tr": "Obwohl es spät war, sind wir ausgegangen; obwohl es regnete, sind wir angekommen."
      },
      {
        "q": "«Obwohl es spät war, sind wir ausgegangen.»"
      },
      {
        "q": "Ordnen Sie die Konjunktionen zu.",
        "tr": [
          "obwohl",
          "ungeachtet",
          "so sehr auch",
          "obschon seiend"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Obwohl er alle Unterlagen hatte, lag der Vorgang drei Monate still."
      },
      {
        "tr": "Trotz des Regens sind wir trotzdem auf den Markt gegangen."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    "theme": "Grammatik",
    "title": "Anche se und seine Fallen",
    "objectives": [
      "«anche se» mit dem Indikativ verwenden",
      "«pur + Gerundium» von «pur di + Infinitiv» unterscheiden",
      "eine Hypothese mit «anche se» + Konjunktiv Imperfekt ausdrücken"
    ],
    "theory": [
      {
        "h": "Anche se verlangt den Indikativ, nicht den Konjunktiv",
        "p": "Es ist die einzige konzessive Konjunktion, die ihn NICHT verlangt: <em>anche se <b>piove</b>, esco</em>. Der Fehler <em>anche se piova</em> ist sehr verbreitet bei denen, die die vorige Lektion gut gelernt haben."
      },
      {
        "h": "…es sei denn, es geht um eine Hypothese",
        "p": "<em>Anche se lo <b>sapessi</b>, non te lo direi</em> — der Konjunktiv Imperfekt kehrt zurück, aber nicht wegen <em>anche se</em>: darin steckt ein Konditionalsatz des zweiten Typs. Die Probe: spricht der Satz von etwas Irrealem?"
      },
      {
        "h": "Pur + Gerundium und pur di + Infinitiv sind zweierlei",
        "p": "<em>Pur avendo ragione</em> = «obwohl er recht hatte» (Konzession). <em>Pur di finire</em> = «nur um fertig zu werden» (Zweck, meist mit einem Beiklang von Opfer). Sie sehen ähnlich aus, bedeuten Gegenteiliges und werden ständig verwechselt."
      },
      {
        "contrast": "Deutsch markiert den Unterschied zwischen Tatsache und Hypothese am Verb, nicht an der Konjunktion: «auch wenn es <b>regnet</b>» gegen «auch wenn ich es <b>wüsste</b>» (Konjunktiv II). «Selbst wenn» ist dabei kein Hypothesen-Marker, sondern eine Verstärkung, und steht auch bei Tatsachen. Das Italienische macht dasselbe mit dem congiuntivo, die Konjunktion bleibt in beiden Fällen <em>anche se</em> — den Mechanismus haben Sie also schon, nur die Formen sind neu. Für <em>pur di</em> gibt es nichts Kurzes: «nur um … zu» ist die nächste Entsprechung."
      }
    ],
    "grammar": {
      "title": "Anche se und Verwandte",
      "note": "Achtung auf die zweite und vierte Zeile: sie sehen gleich aus.",
      "table": {
        "head": [
          "Konstruktion",
          "Bedeutung",
          "Beispiel"
        ],
        "rows": [
          [
            "anche se + Indikativ",
            "Tatsache",
            "anche se piove, esco"
          ],
          [
            "anche se + Konj. Imperf.",
            "Hypothese",
            "anche se lo sapessi, non lo direi"
          ],
          [
            "pur + Gerundium",
            "gleiches Subjekt",
            "pur avendo ragione, ha taciuto"
          ],
          [
            "pur di + Infinitiv",
            "Zweck, keine Konzession",
            "pur di finire, ha lavorato di notte"
          ],
          [
            "neanche se",
            "verstärkte Verneinung",
            "neanche se me lo chiedessero"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Auch wenn es regnet, gehe ich trotzdem hinaus."
        },
        {
          "tr": "Selbst wenn ich es wüsste, würde ich es dir nicht sagen."
        },
        {
          "tr": "Obwohl er recht hatte, ließ er es auf sich beruhen."
        },
        {
          "tr": "Nur um fertig zu werden, hat er die ganze Nacht gearbeitet."
        },
        {
          "tr": "Selbst wenn sie mich darum bäten, würde ich es nicht tun."
        },
        {
          "tr": "So schwierig es auch ist, es lohnt sich."
        }
      ]
    },
    "vocab": [
      "auch wenn",
      "nicht einmal wenn",
      "obwohl (+ Gerundium)",
      "nur um",
      "auf sich beruhen lassen",
      "sich lohnen",
      "es schaffen",
      "verzichten",
      "beharren",
      "um den Preis von",
      "auch, sogar",
      "und doch"
    ],
    "exercises": [
      {
        "q": "Welcher Modus nach «anche se» bei einer Tatsache?",
        "opts": [
          "Indikativ",
          "Konjunktiv",
          "beides"
        ]
      },
      {
        "q": "Ergänzen Sie: «___ piove, esco lo stesso.»"
      },
      {
        "q": "Ergänzen Sie: «___ ragione, ha lasciato perdere.» (pur + avere)"
      },
      {
        "q": "«Pur di finire» bedeutet:",
        "opts": [
          "obwohl er fertig wurde",
          "nur um fertig zu werden",
          "nachdem er fertig war"
        ]
      },
      {
        "q": "Wann folgt auf «anche se» der Konjunktiv Imperfekt?",
        "opts": [
          "immer",
          "nie",
          "wenn der Satz eine Hypothese ist"
        ]
      },
      {
        "q": "Setzen Sie die Konjunktion ein.",
        "tr": "Auch wenn es regnet, gehe ich hinaus; selbst wenn ich es wüsste, sagte ich es nicht."
      },
      {
        "q": "«Auch wenn es regnet, gehe ich trotzdem hinaus.»"
      },
      {
        "q": "Welche Sätze sind richtig?",
        "opts": [
          "Anche se piove, esco.",
          "Anche se piova, esco.",
          "Pur piovendo, esco."
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Obwohl ich einen Termin hatte, habe ich zwei Stunden gewartet."
      },
      {
        "tr": "Obwohl ich recht hatte, ließ ich es lieber auf sich beruhen."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    "theme": "Grammatik",
    "title": "Tuttavia, anzi, del resto",
    "objectives": [
      "Sätze mit einem Textkonnektor verbinden",
      "«anzi» von einem gewöhnlichen Gegensatz unterscheiden",
      "das Register wählen: «pertanto» oder «quindi»"
    ],
    "theory": [
      {
        "h": "Diese Wörter tragen keinen Inhalt, sondern eine Anweisung",
        "p": "<em>Tuttavia</em> sagt: «was jetzt kommt, läuft dem zuwider, was Sie gerade gelesen haben». <em>Del resto</em> sagt: «im Übrigen war es zu erwarten». Ohne sie ist ein Text eine Liste von Sätzen, und der Leser muss raten, wie sie zusammenhängen."
      },
      {
        "h": "Anzi ist eine Korrektur, kein Gegensatz",
        "p": "<em>Non mi ha disturbato, <b>anzi</b> mi ha fatto piacere.</em> <em>Anzi</em> widerspricht dem Vorhergehenden nicht: es schiebt es in dieselbe Richtung weiter, meist stärker. Deutsch «im Gegenteil» kommt nahe, oft passt «ja sogar» besser."
      },
      {
        "h": "Register: pertanto gegen quindi",
        "p": "<em>Pertanto</em> und <em>peraltro</em> gehören zur Amtssprache und klingen gesprochen steif. Man sagt <em>quindi</em>, <em>allora</em>, <em>comunque</em>. Faustregel: schriftlich an eine Behörde die erste Spalte, im Gespräch die zweite."
      },
      {
        "contrast": "Zwei falsche Freunde auf einmal. Italienisch <em>in effetti</em> heißt «tatsächlich, in der Tat» (zustimmend), nicht «im Effekt» im Sinne einer Folge — das wäre <em>di conseguenza</em>. Und <em>eventualmente</em> heißt «gegebenenfalls», nicht «eventuell» im Sinne von «vielleicht». Beide klingen vertraut und sagen etwas anderes."
      }
    ],
    "grammar": {
      "title": "Textkonnektoren",
      "note": "Die dritte Spalte nennt Register oder Falle.",
      "table": {
        "head": [
          "Konnektor",
          "was er tut",
          "Hinweis"
        ],
        "rows": [
          [
            "tuttavia",
            "Gegensatz",
            "gehoben"
          ],
          [
            "anzi",
            "Korrektur nach oben",
            "«im Gegenteil, ja sogar»"
          ],
          [
            "del resto",
            "war zu erwarten",
            "gesprochen und geschrieben"
          ],
          [
            "pertanto",
            "Schlussfolgerung",
            "Amtssprache"
          ],
          [
            "semmai",
            "wenn überhaupt, höchstens",
            "mildert"
          ],
          [
            "in effetti",
            "Zustimmung",
            "nicht «im Effekt»"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Der Preis ist hoch; die Qualität rechtfertigt ihn jedoch."
        },
        {
          "tr": "Er hat mich nicht gestört, im Gegenteil: es hat mich gefreut."
        },
        {
          "tr": "Im Übrigen war es zu erwarten."
        },
        {
          "tr": "Der Antrag ist daher neu zu stellen."
        },
        {
          "tr": "Wenn überhaupt, kommen wir morgen darauf zurück."
        },
        {
          "tr": "Tatsächlich hatte er recht."
        }
      ]
    },
    "vocab": [
      "jedoch, dennoch",
      "im Gegenteil, ja sogar",
      "im Übrigen",
      "daher",
      "wenn überhaupt, höchstens",
      "tatsächlich",
      "andererseits",
      "im Übrigen (formell)",
      "und doch",
      "eher",
      "also",
      "kurz gesagt"
    ],
    "exercises": [
      {
        "q": "«Anzi» bedeutet:",
        "opts": [
          "jedoch",
          "im Gegenteil, ja sogar",
          "daher"
        ]
      },
      {
        "q": "Ergänzen Sie: «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "Ergänzen Sie: «Il prezzo è alto; ___ la qualità lo giustifica.»"
      },
      {
        "q": "«In effetti» bedeutet:",
        "opts": [
          "im Effekt (Folge)",
          "gegebenenfalls",
          "tatsächlich"
        ]
      },
      {
        "q": "Welcher Konnektor gehört zur Amtssprache?",
        "opts": [
          "pertanto",
          "quindi",
          "allora"
        ]
      },
      {
        "q": "Setzen Sie die Konnektoren ein.",
        "tr": "Der Preis ist hoch; die Qualität rechtfertigt ihn jedoch. Im Übrigen war es zu erwarten."
      },
      {
        "q": "«Er hat mich nicht gestört, im Gegenteil: es hat mich gefreut.»"
      },
      {
        "q": "Ordnen Sie die Konnektoren zu.",
        "tr": [
          "jedoch",
          "im Gegenteil",
          "daher",
          "wenn überhaupt"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Der Antrag kam rechtzeitig; es fehlte jedoch eine Unterschrift."
      },
      {
        "tr": "Das ist kein Problem, im Gegenteil: es ist das Einfachste von allem."
      }
    ]
  },
  "lesson:b2-u06-test": {
    "theme": "Prüfung",
    "title": "Abschlussprüfung Niveau B2",
    "objectives": [
      "Konjunktiv, Konditionalsätze, indirekte Rede, Konzessive und Konnektoren prüfen"
    ],
    "theory": [
      {
        "p": "Zwölf Aufgaben aus dem gesamten Niveau B2. Bestanden ab 70%."
      }
    ],
    "exercises": [
      {
        "q": "Welcher Modus nach «sebbene»?",
        "opts": [
          "Indikativ",
          "Konjunktiv",
          "Konditional"
        ]
      },
      {
        "q": "Welcher Modus nach «anche se» (Tatsache)?",
        "opts": [
          "Indikativ",
          "Konjunktiv",
          "Konditional"
        ]
      },
      {
        "q": "Ergänzen Sie: «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Ergänzen Sie: «___ piove, esco lo stesso.»"
      },
      {
        "q": "Ergänzen Sie: «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "«Pur di finire» bedeutet:",
        "opts": [
          "obwohl er fertig wurde",
          "nachdem er fertig war",
          "nur um fertig zu werden"
        ]
      },
      {
        "q": "Welche Sätze sind richtig?",
        "opts": [
          "Benché fosse tardi, siamo usciti.",
          "Anche se piove, esco.",
          "Anche se piova, esco."
        ]
      },
      {
        "q": "Indirekte Rede. Ergänzen Sie: «Mi ha detto che ___ il giorno dopo.» (venire)"
      },
      {
        "tr": "Wenn sie auf mich gehört hätten, wäre das Problem gelöst worden."
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Obwohl es spät war, sind wir ausgegangen; auch wenn es regnete, haben wir nicht angehalten."
      },
      {
        "tr": "Obwohl er alles eingereicht hatte, verlangte man ein weiteres Dokument."
      },
      {
        "tr": "Auch wenn es mehr kostet, lohnt es sich am Ende."
      }
    ]
  }
});
