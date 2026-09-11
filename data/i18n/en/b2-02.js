/* ============================================================
   Student-language texts (en) for data/core/b2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:b2-u05": {
    "title": "Reported speech",
    "grammarNote": "backshift · deixis · questions and orders"
  },
  "lesson:b2-u05-l1": {
    "theme": "Grammar",
    "title": "From direct to reported",
    "objectives": [
      "shift the tense after a past reporting verb",
      "choose between indicative and subjunctive after «che»",
      "use reporting verbs other than «dire»"
    ],
    "theory": [
      {
        "h": "A past reporting verb moves everything back one step",
        "p": "<em>Ha detto: «Sono stanco»</em> → <em>Ha detto che <b>era</b> stanco.</em> Present goes to imperfetto, passato prossimo to trapassato, and the future to the compound conditional: <em>«Arriverò»</em> → <em>ha detto che <b>sarebbe arrivato</b></em>. That last one is the only real surprise: a future seen from the past is <em>sarei arrivato</em> in Italian, not <em>arriverei</em>."
      },
      {
        "h": "What does not move",
        "p": "If the reporting verb is present (<em>dice che…</em>), nothing changes at all. And when what was said is still true, the shift is optional: <em>Ha detto che Roma <b>è</b> la capitale</em> reads better than <em>era</em>."
      },
      {
        "h": "Che + indicative or subjunctive?",
        "p": "The reporting verb decides. <em>Dire, rispondere, spiegare, scrivere</em> take the indicative: <em>ha detto che <b>era</b> stanco</em>. <em>Sostenere, ritenere, negare</em> take the subjunctive: <em>sostiene che la pratica <b>sia</b> aperta</em>. The second set carries distance: «so they claim, I am not vouching for it»."
      },
      {
        "contrast": "English backshifts too, so this part will feel familiar: «He said he <b>was</b> tired». The trap is elsewhere. English reports an order with an infinitive and no «that» («he told me <b>to wait</b>»), and Italian does exactly the same (<em>di aspettare</em>) — but English speakers reach for <em>che</em> anyway, by analogy with the statements above. And English has no subjunctive left to choose, so the <em>sostiene che sia</em> distinction has to be learned rather than felt."
      }
    ],
    "grammar": {
      "title": "The backshift",
      "note": "After a reporting verb in a past tense.",
      "table": {
        "head": [
          "direct",
          "reported",
          "example"
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
            "imperfetto (unchanged)",
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
          "tr": "He said: «I'm tired» → He said he was tired."
        },
        {
          "tr": "He wrote to me that he was arriving the next day."
        },
        {
          "tr": "He answered that he hadn't understood the question."
        },
        {
          "tr": "He explained that he would call the office himself."
        },
        {
          "tr": "He admitted that he had been wrong."
        },
        {
          "tr": "He maintains that the case is still open."
        }
      ]
    },
    "vocab": [
      "to report, to relay",
      "to maintain, to claim",
      "to admit",
      "to retort",
      "to specify",
      "to add",
      "to deny",
      "to confirm",
      "apparently",
      "according to him",
      "by his account",
      "according to"
    ],
    "exercises": [
      {
        "q": "«Sono stanco» reported after «ha detto che»:",
        "opts": [
          "ha detto che sono stanco",
          "ha detto che era stanco",
          "ha detto che sarebbe stanco"
        ]
      },
      {
        "q": "Fill in: «Ha detto che ___ stanco.» (essere)"
      },
      {
        "q": "Fill in: «Ha risposto che non ___ la domanda.» (capire)"
      },
      {
        "q": "«Arriverò domani» after «ha detto che»:",
        "opts": [
          "arriverà",
          "arriverebbe",
          "sarebbe arrivato"
        ]
      },
      {
        "q": "Put in the right forms.",
        "tr": "He said he was arriving the next day and that he would phone himself."
      },
      {
        "q": "«He said he was tired.»"
      },
      {
        "q": "Which verb requires the subjunctive?",
        "opts": [
          "sostiene che",
          "ha detto che",
          "ha scritto che"
        ]
      },
      {
        "q": "Match the reporting verbs.",
        "tr": [
          "to deny",
          "to specify",
          "to retort",
          "to maintain"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "He wrote to me that he would drop by the office the next day."
      },
      {
        "tr": "He admitted he had been wrong and apologised."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    "theme": "Grammar",
    "title": "Time, place, person",
    "objectives": [
      "shift expressions of time and place",
      "swap «venire» for «andare» where it is needed",
      "adjust pronouns and possessives"
    ],
    "theory": [
      {
        "h": "Time words move with the verb",
        "p": "<em>oggi</em> → <em>quel giorno</em>, <em>ieri</em> → <em>il giorno prima</em>, <em>domani</em> → <em>il giorno dopo</em> (or <em>l'indomani</em>), <em>adesso</em> → <em>in quel momento</em> or <em>allora</em>. The sentence is understandable without this, and it sounds translated."
      },
      {
        "h": "Place: qui → lì, questo → quello",
        "p": "Deixis points from where the speaker stood. When you report, they are no longer there: <em>«Ci vediamo qui»</em> → <em>ha detto che ci saremmo visti <b>lì</b></em>. The same goes for <em>questo</em> → <em>quello</em> and <em>questa volta</em> → <em>quella volta</em>."
      },
      {
        "h": "Venire and andare change places",
        "p": "<em>venire</em> means «to come to where you are». Reporting moves the point of reference, so <em>«Vengo domani»</em> becomes <em>ha detto che <b>sarebbe andato</b> il giorno dopo</em>. <em>portare</em> behaves the same way, becoming <em>portare</em> or <em>lasciare</em> depending on direction."
      },
      {
        "contrast": "English does the same with time («he said he would come the <b>following day</b>»), and it also has the come/go pair — but it keeps «come» far more readily: «he said he would come tomorrow» is perfectly natural. In Italian that same <em>sarebbe venuto</em> says he was coming to where YOU are, which is often not what you meant to report."
      }
    ],
    "grammar": {
      "title": "Deictic shifts",
      "note": "When you report words spoken somewhere else, at another time.",
      "table": {
        "head": [
          "original",
          "reported",
          "note"
        ],
        "rows": [
          [
            "oggi",
            "quel giorno",
            "«that day»"
          ],
          [
            "ieri",
            "il giorno prima",
            "—"
          ],
          [
            "domani",
            "il giorno dopo / l'indomani",
            "the second is higher register"
          ],
          [
            "qui",
            "lì",
            "the speaker is no longer there"
          ],
          [
            "questo",
            "quello",
            "—"
          ],
          [
            "venire",
            "andare",
            "the point of reference moves"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«I'm coming tomorrow» → He said he would go the next day."
        },
        {
          "tr": "«See you here» → He said we would meet there."
        },
        {
          "tr": "«I did it yesterday» → He said he had done it the day before."
        },
        {
          "tr": "«I don't like this» → He said he didn't like that."
        },
        {
          "tr": "«I'm coming back now» → He said he was coming back at that moment."
        },
        {
          "tr": "«My boss knows» → He said his boss knew."
        }
      ]
    },
    "vocab": [
      "the day before",
      "the next day",
      "two days earlier",
      "the following week",
      "at that moment",
      "then",
      "there",
      "that",
      "to go, to make one's way",
      "the following day",
      "shortly before",
      "shortly afterwards"
    ],
    "exercises": [
      {
        "q": "«Vengo domani» reported:",
        "opts": [
          "ha detto che veniva domani",
          "ha detto che sarebbe andato il giorno dopo",
          "ha detto che verrà domani"
        ]
      },
      {
        "q": "Fill in: «Ha detto che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Fill in: «Ha detto che ci saremmo visti ___.» (qui)"
      },
      {
        "q": "«L'ho fatto ieri» reported:",
        "opts": [
          "che l'aveva fatto ieri",
          "che lo faceva ieri",
          "che l'aveva fatto il giorno prima"
        ]
      },
      {
        "q": "Why does «venire» become «andare»?",
        "opts": [
          "because it sounds better",
          "because the point of reference moves",
          "because «venire» has no conditional"
        ]
      },
      {
        "q": "Put in the time expressions.",
        "tr": "He said he had finished it the day before and would be back the next day."
      },
      {
        "q": "«He said he would go there the next day.»"
      },
      {
        "q": "Which shifts are correct?",
        "opts": [
          "oggi → quel giorno",
          "ieri → domani",
          "questo → quello"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "He told me he would go there the next day."
      },
      {
        "tr": "He explained that the following day he would not be in the office."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    "theme": "Grammar",
    "title": "Questions and orders reported",
    "objectives": [
      "report a yes/no question with «se»",
      "report an open question",
      "turn an imperative into «di» + infinitive"
    ],
    "theory": [
      {
        "h": "Yes/no questions: se",
        "p": "<em>«Vieni?»</em> → <em>Mi ha chiesto <b>se</b> venivo.</em> No question mark and no inversion: this is no longer a question but a subordinate clause. <em>Se</em> here has nothing to do with conditionals."
      },
      {
        "h": "Open questions: the question word stays",
        "p": "<em>«Dove abiti?»</em> → <em>Mi ha chiesto dove abitavo</em> (everyday) or <em>dove <b>abitassi</b></em> (more careful). The subjunctive after an indirect question is a matter of register, not obligation — but in written officialese it is the one you will meet."
      },
      {
        "h": "Orders: di + infinitive",
        "p": "<em>«Aspetta!»</em> → <em>Mi ha detto <b>di aspettare</b>.</em> The negative goes before the infinitive: <em>mi ha detto <b>di non</b> firmare</em>. The same pattern follows <em>raccomandare, consigliare, pregare, ordinare, vietare</em>."
      },
      {
        "contrast": "This is the one place where English helps rather than hinders: «he told me <b>to wait</b>» maps straight onto <em>di aspettare</em>. The mistake English speakers actually make is the opposite of the Polish one — they use the infinitive correctly here and then extend it where Italian will not have it: <em>ha detto di essere stanco</em> is fine, but only because the subject is the same. «He told me that he was tired» is <em>mi ha detto che era stanco</em>, never <em>di essere</em>."
      }
    ],
    "grammar": {
      "title": "Questions and orders",
      "note": "Three patterns cover almost everything.",
      "table": {
        "head": [
          "original",
          "reported",
          "pattern"
        ],
        "rows": [
          [
            "«Vieni?»",
            "mi ha chiesto se venivo",
            "chiedere se + indicative"
          ],
          [
            "«Dove abiti?»",
            "mi ha chiesto dove abitassi",
            "question word + subjunctive (higher register)"
          ],
          [
            "«Aspetta!»",
            "mi ha detto di aspettare",
            "di + infinitive"
          ],
          [
            "«Non firmare»",
            "mi ha detto di non firmare",
            "di non + infinitive"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«Are you coming?» → He asked me whether I was coming."
        },
        {
          "tr": "«Where do you live?» → He asked me where I lived."
        },
        {
          "tr": "«Wait!» → He told me to wait."
        },
        {
          "tr": "«Don't sign» → He advised me not to sign."
        },
        {
          "tr": "«What do you want?» → He wanted to know what I wanted."
        },
        {
          "tr": "«Can you help me?» → He asked whether I could help him."
        }
      ]
    },
    "vocab": [
      "to ask whether",
      "to want to know",
      "to enquire",
      "to invite to",
      "to recommend",
      "to order",
      "to propose",
      "to advise",
      "to suggest",
      "to beg to",
      "to forbid",
      "to insist that"
    ],
    "exercises": [
      {
        "q": "«Vieni?» reported:",
        "opts": [
          "mi ha chiesto vieni",
          "mi ha chiesto se venivo",
          "mi ha chiesto che venivo"
        ]
      },
      {
        "q": "Fill in: «Mi ha chiesto ___ avevo capito.»"
      },
      {
        "q": "Fill in: «Mi ha detto ___.» (aspettare)"
      },
      {
        "q": "«Non firmare» reported:",
        "opts": [
          "mi ha detto di non firmare",
          "mi ha detto che non firmavo",
          "mi ha detto non firmare"
        ]
      },
      {
        "q": "Which register is the more careful one?",
        "opts": [
          "dove abitavo",
          "dove abiti",
          "dove abitassi"
        ]
      },
      {
        "q": "Put in the right forms.",
        "tr": "He asked me whether I had understood and told me to call back later."
      },
      {
        "q": "«He asked me whether I was coming.»"
      },
      {
        "q": "Match the verbs.",
        "tr": [
          "to recommend",
          "to forbid",
          "to suggest",
          "to beg"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "The clerk asked me whether I had brought my tax code."
      },
      {
        "tr": "He advised me not to sign anything without reading it."
      }
    ]
  },
  "lesson:b2-u05-test": {
    "theme": "Grammar",
    "title": "Test — Reported speech",
    "exercises": [
      {
        "q": "«Ho finito» after «ha detto che»:",
        "opts": [
          "ha finito",
          "aveva finito",
          "avrebbe finito"
        ]
      },
      {
        "q": "«Verrò» after «ha detto che»:",
        "opts": [
          "verrà",
          "verrebbe",
          "sarebbe venuto"
        ]
      },
      {
        "q": "Fill in: «Disse che ___ stanco.» (essere)"
      },
      {
        "q": "Fill in: «Disse che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Fill in: «Mi chiese ___ ero pronto.»"
      },
      {
        "q": "A reported order is:",
        "opts": [
          "di + infinitive",
          "che + subjunctive",
          "the imperative unchanged"
        ]
      },
      {
        "q": "Which sentences are correct?",
        "opts": [
          "Mi ha detto che aspettassi.",
          "Mi ha detto di aspettare.",
          "Mi ha chiesto se venivo."
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "He said he was tired and that he would be back the next day."
      },
      {
        "tr": "He answered that he had not received any summons."
      },
      {
        "tr": "He asked me whether I had already sent the application."
      }
    ]
  }
});
