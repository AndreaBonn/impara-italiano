/* ============================================================
   Student-language texts (en) for data/core/b2-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:b2-u06": {
    "title": "Concession and connectives",
    "grammarNote": "benché · anche se · tuttavia, anzi, del resto"
  },
  "lesson:b2-u06-l1": {
    "theme": "Grammar",
    "title": "Benché, sebbene, nonostante",
    "objectives": [
      "use the subjunctive after concessive conjunctions",
      "tell «nonostante + clause» from «nonostante + noun»",
      "match the register to the situation"
    ],
    "theory": [
      {
        "h": "All of these take the subjunctive",
        "p": "<em>Benché</em>, <em>sebbene</em>, <em>nonostante</em>, <em>malgrado</em>, <em>per quanto</em>, <em>quantunque</em> — every one of them is followed by the subjunctive: <em>benché <b>fosse</b> tardi</em>. This is one of the few Italian rules with no exceptions, so it is worth learning whole."
      },
      {
        "h": "Nonostante has two faces",
        "p": "Before a clause: <em>nonostante <b>avesse</b> ragione</em> (subjunctive). Before a noun: <em>nonostante <b>la pioggia</b></em> — no verb, no mood. The second is shorter and commoner in writing."
      },
      {
        "h": "Register: they are not interchangeable",
        "p": "<em>Quantunque</em> is bookish and sounds odd out loud. <em>Malgrado</em> is neutral; <em>benché</em> and <em>sebbene</em> sit slightly above <em>anche se</em>. In conversation what you will hear most is <em>anche se</em>, which takes the indicative and is the next lesson."
      },
      {
        "contrast": "English «although» and «even though» leave the verb alone, so the whole rule is new work: «although it <b>was</b> late» → <em>benché <b>fosse</b> tardi</em>. The second trap is that English «despite» takes a noun or an -ing form and never a clause («despite having…»), while Italian <em>nonostante</em> does both — so the English instinct to avoid a clause after it leads you away from a perfectly good Italian construction."
      }
    ],
    "grammar": {
      "title": "Concessive conjunctions",
      "note": "The conjunction on the left, the mood it demands on the right.",
      "table": {
        "head": [
          "conjunction",
          "mood",
          "example"
        ],
        "rows": [
          [
            "benché / sebbene",
            "subjunctive",
            "benché fosse tardi"
          ],
          [
            "nonostante / malgrado",
            "subjunctive, or + noun",
            "nonostante la pioggia"
          ],
          [
            "per quanto",
            "subjunctive",
            "per quanto ci provi"
          ],
          [
            "anche se",
            "indicative",
            "anche se piove"
          ],
          [
            "pur + gerund",
            "no subject",
            "pur avendo ragione"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Although it was late, we went out anyway."
        },
        {
          "tr": "Although he knew, he said nothing."
        },
        {
          "tr": "Despite the rain, the fair stayed open."
        },
        {
          "tr": "Although he was right, he apologised."
        },
        {
          "tr": "In spite of everything, the project went ahead."
        },
        {
          "tr": "However hard I try, I can't manage it."
        }
      ]
    },
    "vocab": [
      "although",
      "although (higher register)",
      "despite, although",
      "in spite of",
      "however much",
      "albeit (bookish)",
      "while being",
      "all the same",
      "anyway",
      "in any case",
      "in defiance of",
      "nonetheless"
    ],
    "exercises": [
      {
        "q": "Which mood after «benché»?",
        "opts": [
          "indicative",
          "subjunctive",
          "conditional"
        ]
      },
      {
        "q": "Fill in: «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Fill in: «Sebbene lo ___, non ha detto niente.» (sapere)"
      },
      {
        "q": "«Nonostante la pioggia» is:",
        "opts": [
          "nonostante + noun",
          "nonostante + subjunctive",
          "a mistake"
        ]
      },
      {
        "q": "Which conjunction is the most bookish?",
        "opts": [
          "anche se",
          "benché",
          "quantunque"
        ]
      },
      {
        "q": "Put in the subjunctive.",
        "tr": "Although it was late we went out; although it was raining we got there."
      },
      {
        "q": "«Although it was late, we went out.»"
      },
      {
        "q": "Match the conjunctions.",
        "tr": [
          "although",
          "in spite of",
          "however much",
          "while being"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "Although he had every document, the case sat still for three months."
      },
      {
        "tr": "Despite the rain we went to the market anyway."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    "theme": "Grammar",
    "title": "Anche se and its traps",
    "objectives": [
      "use «anche se» with the indicative",
      "tell «pur + gerund» from «pur di + infinitive»",
      "express a hypothesis with «anche se» + imperfect subjunctive"
    ],
    "theory": [
      {
        "h": "Anche se takes the indicative, not the subjunctive",
        "p": "It is the one concessive that does NOT: <em>anche se <b>piove</b>, esco</em>. The mistake <em>anche se piova</em> is very common among people who learned the previous lesson well."
      },
      {
        "h": "…unless you are talking about a hypothesis",
        "p": "<em>Anche se lo <b>sapessi</b>, non te lo direi</em> — the imperfect subjunctive is back, but not because of <em>anche se</em>: that is a second-type conditional which happens to sit inside it. The test: is the sentence about something unreal?"
      },
      {
        "h": "Pur + gerund and pur di + infinitive are two different things",
        "p": "<em>Pur avendo ragione</em> = «although he was right» (concession). <em>Pur di finire</em> = «just to get it finished» (purpose, usually with a note of sacrifice). They look alike, they mean opposite things, and they are confused constantly."
      },
      {
        "contrast": "English marks the difference with «even if» versus «even though», and that pair maps almost exactly: «even though it's raining» → <em>anche se piove</em>; «even if I knew» → <em>anche se lo sapessi</em>. Use the distinction you already have. What English has no equivalent for is <em>pur di</em>: «just to», «if that's what it takes» — all of them longer than the Italian."
      }
    ],
    "grammar": {
      "title": "Anche se and its neighbours",
      "note": "Watch the second and fourth rows: they look alike.",
      "table": {
        "head": [
          "construction",
          "meaning",
          "example"
        ],
        "rows": [
          [
            "anche se + indicative",
            "a fact",
            "anche se piove, esco"
          ],
          [
            "anche se + imperf. subj.",
            "a hypothesis",
            "anche se lo sapessi, non lo direi"
          ],
          [
            "pur + gerund",
            "same subject",
            "pur avendo ragione, ha taciuto"
          ],
          [
            "pur di + infinitive",
            "purpose, not concession",
            "pur di finire, ha lavorato di notte"
          ],
          [
            "neanche se",
            "strengthened negative",
            "neanche se me lo chiedessero"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Even though it's raining, I'm going out anyway."
        },
        {
          "tr": "Even if I knew, I wouldn't tell you."
        },
        {
          "tr": "Although he was right, he let it go."
        },
        {
          "tr": "Just to get it finished, he worked all night."
        },
        {
          "tr": "Not even if they asked me would I do it."
        },
        {
          "tr": "However hard it is, it's worth it."
        }
      ]
    },
    "vocab": [
      "even if, even though",
      "not even if",
      "although (+ gerund)",
      "just to",
      "to let it go",
      "to be worth it",
      "to manage it",
      "to give up",
      "to insist",
      "at the cost of",
      "too, even",
      "and yet"
    ],
    "exercises": [
      {
        "q": "Which mood after «anche se» in a statement of fact?",
        "opts": [
          "indicative",
          "subjunctive",
          "either"
        ]
      },
      {
        "q": "Fill in: «___ piove, esco lo stesso.»"
      },
      {
        "q": "Fill in: «___ ragione, ha lasciato perdere.» (pur + avere)"
      },
      {
        "q": "«Pur di finire» means:",
        "opts": [
          "although he finished",
          "just to get it finished",
          "having finished"
        ]
      },
      {
        "q": "When does the imperfect subjunctive follow «anche se»?",
        "opts": [
          "always",
          "never",
          "when the clause is a hypothesis"
        ]
      },
      {
        "q": "Put in the conjunction.",
        "tr": "Even though it's raining I'm going out; even if I knew, I wouldn't say."
      },
      {
        "q": "«Even though it's raining, I'm going out anyway.»"
      },
      {
        "q": "Which sentences are correct?",
        "opts": [
          "Anche se piove, esco.",
          "Anche se piova, esco.",
          "Pur piovendo, esco."
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "Even though I had an appointment, I waited two hours."
      },
      {
        "tr": "Although I was right, I preferred to let it go."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    "theme": "Grammar",
    "title": "Tuttavia, anzi, del resto",
    "objectives": [
      "join sentences with a textual connective",
      "tell «anzi» from an ordinary contrast",
      "choose the register: «pertanto» or «quindi»"
    ],
    "theory": [
      {
        "h": "These words carry no content, only an instruction",
        "p": "<em>Tuttavia</em> says: «what comes next runs against what you have just read». <em>Del resto</em> says: «it was to be expected anyway». Without them a text is a list of sentences and the reader has to guess how they connect."
      },
      {
        "h": "Anzi is a correction, not a contrast",
        "p": "<em>Non mi ha disturbato, <b>anzi</b> mi ha fatto piacere.</em> <em>Anzi</em> does not contradict what came before: it pushes it further in the same direction, usually harder. English «on the contrary» is close, «in fact» is often closer."
      },
      {
        "h": "Register: pertanto versus quindi",
        "p": "<em>Pertanto</em> and <em>peraltro</em> belong to officialese and sound stiff in conversation. People say <em>quindi</em>, <em>allora</em>, <em>comunque</em>. Rule of thumb: writing to an office, take the first column; talking, the second."
      },
      {
        "contrast": "Two false friends at once. Italian <em>in effetti</em> means «indeed, actually» (conceding a point), NOT «in effect» — that would be <em>di conseguenza</em>. And <em>eventualmente</em> means «if need be», not «eventually», which is <em>alla fine</em>. Both sound familiar and both say something else."
      }
    ],
    "grammar": {
      "title": "Textual connectives",
      "note": "The third column gives the register or the trap.",
      "table": {
        "head": [
          "connective",
          "what it does",
          "note"
        ],
        "rows": [
          [
            "tuttavia",
            "contrast",
            "high register"
          ],
          [
            "anzi",
            "an upward correction",
            "«on the contrary, in fact»"
          ],
          [
            "del resto",
            "it was to be expected",
            "spoken and written"
          ],
          [
            "pertanto",
            "conclusion",
            "officialese"
          ],
          [
            "semmai",
            "if anything, at most",
            "softens"
          ],
          [
            "in effetti",
            "conceding a point",
            "not «in effect»"
          ]
        ]
      },
      "examples": [
        {
          "tr": "The price is high; the quality, however, justifies it."
        },
        {
          "tr": "He didn't bother me — on the contrary, I was glad."
        },
        {
          "tr": "It was to be expected, after all."
        },
        {
          "tr": "The application must therefore be filed again."
        },
        {
          "tr": "If anything, we'll come back to it tomorrow."
        },
        {
          "tr": "Actually, he was the one who was right."
        }
      ]
    },
    "vocab": [
      "however, nevertheless",
      "on the contrary, in fact",
      "after all, besides",
      "therefore",
      "if anything, at most",
      "actually, indeed",
      "on the other hand",
      "moreover (formal)",
      "and yet",
      "rather",
      "so",
      "in short"
    ],
    "exercises": [
      {
        "q": "«Anzi» means:",
        "opts": [
          "however",
          "on the contrary, in fact",
          "therefore"
        ]
      },
      {
        "q": "Fill in: «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "Fill in: «Il prezzo è alto; ___ la qualità lo giustifica.»"
      },
      {
        "q": "«In effetti» means:",
        "opts": [
          "in effect",
          "eventually",
          "actually, indeed"
        ]
      },
      {
        "q": "Which connective belongs to officialese?",
        "opts": [
          "pertanto",
          "quindi",
          "allora"
        ]
      },
      {
        "q": "Put in the connectives.",
        "tr": "The price is high; the quality, however, justifies it. It was to be expected anyway."
      },
      {
        "q": "«He didn't bother me — on the contrary, I was glad.»"
      },
      {
        "q": "Match the connectives.",
        "tr": [
          "however",
          "on the contrary",
          "therefore",
          "if anything"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "The application arrived in time; a signature, however, was missing."
      },
      {
        "tr": "It's not a problem — on the contrary, it's the simplest thing of all."
      }
    ]
  },
  "lesson:b2-u06-test": {
    "theme": "Grammar",
    "title": "Test — Concession and connectives",
    "exercises": [
      {
        "q": "Which mood after «sebbene»?",
        "opts": [
          "indicative",
          "subjunctive",
          "conditional"
        ]
      },
      {
        "q": "Which mood after «anche se» (a fact)?",
        "opts": [
          "indicative",
          "subjunctive",
          "conditional"
        ]
      },
      {
        "q": "Fill in: «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Fill in: «___ piove, esco lo stesso.»"
      },
      {
        "q": "Fill in: «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "«Pur di finire» means:",
        "opts": [
          "although he finished",
          "having finished",
          "just to get it finished"
        ]
      },
      {
        "q": "Which sentences are correct?",
        "opts": [
          "Benché fosse tardi, siamo usciti.",
          "Anche se piove, esco.",
          "Anche se piova, esco."
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "Although it was late we went out; even though it was raining we didn't stop."
      },
      {
        "tr": "Although he had filed everything, they asked him for another document."
      },
      {
        "tr": "Even if it costs more, it pays off in the end."
      }
    ]
  }
});
