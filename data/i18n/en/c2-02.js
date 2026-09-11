/* ============================================================
   Student-language texts (en) for data/core/c2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c2-u04": {
    "title": "Relatives and government",
    "grammarNote": "a cui · il che · riuscire a, tentare di"
  },
  "lesson:c2-u04-l1": {
    "theme": "Grammar",
    "title": "Cui, il quale e i loro obblighi",
    "objectives": [
      "use «cui» with the right preposition",
      "express possession with «il cui»",
      "remove an ambiguity with «il quale»"
    ],
    "theory": [
      {
        "h": "Che takes no preposition",
        "p": "<em>La collega <b>che</b> ho visto</em> is fine, but <em>la collega a che ho scritto</em> does not exist. When a preposition is needed, <em>che</em> gives way to <em>cui</em>: <em>a cui</em>, <em>di cui</em>, <em>in cui</em>, <em>con cui</em>. That is the whole rule and it has no exception."
      },
      {
        "h": "Which preposition? The one the verb demands",
        "p": "<em>Scrivere <b>a</b> qualcuno</em> gives <em>la collega <b>a cui</b> ho scritto</em>. <em>Parlare <b>di</b> qualcosa</em> gives <em>il progetto <b>di cui</b> parlavamo</em>. The relative clause does not pick the preposition: the verb brings it, which is why the third lesson of this unit cannot be skipped."
      },
      {
        "h": "Il cui is possession, and agrees with the thing owned",
        "p": "<em>L'autore <b>il cui</b> libro hai letto</em>: the article goes with <em>libro</em>, not with the author. Hence <em>la scrittrice <b>il cui</b> romanzo</em> and <em>l'autore <b>la cui</b> opera</em>. The opposite of what the intuition suggests."
      },
      {
        "contrast": "English drops the preposition to the end («the colleague I wrote to», «the project we were talking about»), and Italian cannot do that under any circumstances: the preposition stands in front of <em>cui</em>, always. The formal English pattern «to whom I wrote» is the one to translate from, not the natural one. For possession, «whose» maps onto <em>il cui</em>, but watch the article: English has none, Italian agrees it with the thing owned."
      }
    ],
    "grammar": {
      "title": "Relative pronouns",
      "note": "The third column says when to use the form.",
      "table": {
        "head": [
          "form",
          "what it does",
          "when"
        ],
        "rows": [
          [
            "che",
            "soggetto o oggetto",
            "no preposition involved"
          ],
          [
            "a cui / di cui / in cui",
            "con preposizione",
            "the verb demands a preposition"
          ],
          [
            "il cui / la cui",
            "possesso",
            "possession"
          ],
          [
            "il quale / la quale",
            "toglie l'ambiguità",
            "«che» would be ambiguous"
          ],
          [
            "dove",
            "solo luogo",
            "place only"
          ]
        ]
      },
      "examples": [
        {
          "tr": "The colleague I wrote to hasn't replied."
        },
        {
          "tr": "The project we were talking about has been approved."
        },
        {
          "tr": "The author whose book you read is coming tomorrow."
        },
        {
          "tr": "The director's sister, who works in Milan, arrives today."
        },
        {
          "tr": "The city I was born in no longer exists."
        },
        {
          "tr": "The people I work with are good at what they do."
        }
      ]
    },
    "vocab": [
      "the relative pronoun",
      "the preposition",
      "the antecedent",
      "to whom, of which",
      "which (longer form)",
      "whose",
      "ambiguity",
      "to refer",
      "to specify",
      "to govern",
      "obligatory",
      "optional"
    ],
    "exercises": [
      {
        "q": "How do you say «the colleague I wrote to»?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Fill in: «La collega a ___ ho scritto non ha risposto.»"
      },
      {
        "q": "Fill in: «L'autore ___ libro hai letto viene domani.» (possession)"
      },
      {
        "q": "«Il quale» is there to:",
        "opts": [
          "shorten the sentence",
          "express possession",
          "remove an ambiguity"
        ]
      },
      {
        "q": "In «il cui», the article agrees with:",
        "opts": [
          "the thing owned",
          "the owner",
          "the subject of the sentence"
        ]
      },
      {
        "q": "Put in the pronouns.",
        "tr": "The colleague I wrote to hasn't replied. The author whose book you read is coming tomorrow."
      },
      {
        "q": "«The project we were talking about has been approved.»"
      },
      {
        "q": "Which sentences are correct?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "The colleague I shared an office with for years is retiring."
      },
      {
        "tr": "The project we were talking about yesterday was approved this morning."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    "theme": "Grammar",
    "title": "Chi, il che, quanto",
    "objectives": [
      "use «chi» to mean «whoever»",
      "comment on a whole clause with «il che»",
      "replace «ciò che» with «quanto»"
    ],
    "theory": [
      {
        "h": "Chi means «whoever», and needs no antecedent",
        "p": "<em>Chi arriva tardi aspetta fuori</em> = «whoever arrives late waits outside». The verb is always singular, even when many people are meant, and that is the one thing you can get wrong here."
      },
      {
        "h": "Il che comments on the whole preceding clause",
        "p": "<em>Ha rifiutato l'incarico, <b>il che</b> mi preoccupa</em>: what worries me is the refusal, not the post. Without <em>il</em> the pronoun would point at the last noun and the sentence would say something else. The variant <em>cosa che</em> is slightly less formal and does the same job."
      },
      {
        "h": "Quanto instead of ciò che",
        "p": "<em>Non credo a <b>quanto</b> mi hai raccontato</em>. Shorter and higher in register than <em>ciò che</em>, and very common in writing. In speech you will hear <em>quello che</em> instead, which is equally correct."
      },
      {
        "contrast": "English «which» after a comma does exactly the job of <em>il che</em> («he turned down the post, which worries me»), so the structure is familiar. The trap is the article: English has nothing there, and an English speaker reliably writes <em>che mi preoccupa</em>, which points at «l'incarico» and changes the meaning. The <em>il</em> is what makes it refer to the whole clause."
      }
    ],
    "grammar": {
      "title": "Pronouns with no antecedent",
      "note": "The second column says what the form refers to.",
      "table": {
        "head": [
          "form",
          "what it refers to",
          "example"
        ],
        "rows": [
          [
            "chi",
            "a person, whoever",
            "Chi arriva tardi aspetta fuori."
          ],
          [
            "il che",
            "the whole preceding clause",
            "Ha rifiutato, il che mi preoccupa."
          ],
          [
            "cosa che",
            "the same, lower register",
            "Ha risposto male, cosa che non gli somiglia."
          ],
          [
            "quanto",
            "what has been said",
            "Non credo a quanto mi hai detto."
          ],
          [
            "c'è chi",
            "an undefined group",
            "C'è chi dice che sia un errore."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Whoever arrives late waits outside."
        },
        {
          "tr": "He turned down the post, which worries me."
        },
        {
          "tr": "I don't believe what you told me."
        },
        {
          "tr": "There are those who say it's a mistake."
        },
        {
          "tr": "He answered rudely, which isn't like him."
        },
        {
          "tr": "What happened yesterday stays between us."
        }
      ]
    },
    "vocab": [
      "whoever",
      "which (about a clause)",
      "which (less formal)",
      "what",
      "what",
      "there are those who",
      "the whole clause",
      "the comment",
      "to worry",
      "to be like (someone)",
      "to stay between us",
      "to sum up"
    ],
    "exercises": [
      {
        "q": "«Chi arriva tardi aspetta fuori» means:",
        "opts": [
          "Who's arriving? He waits outside",
          "Whoever arrives late waits outside",
          "He arrived late and is waiting"
        ]
      },
      {
        "q": "Fill in: «___ arriva tardi aspetta fuori.»"
      },
      {
        "q": "Fill in: «Ha rifiutato l'incarico, ___ mi preoccupa.»"
      },
      {
        "q": "«Il che» refers to:",
        "opts": [
          "the whole preceding clause",
          "the last noun",
          "the subject"
        ]
      },
      {
        "q": "After «chi» the verb is:",
        "opts": [
          "plural",
          "either",
          "singular"
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "Whoever arrives late waits outside. He turned down the post, which worries me."
      },
      {
        "q": "«Whoever arrives late waits outside.»"
      },
      {
        "q": "Match the forms.",
        "tr": [
          "whoever",
          "which (about a clause)",
          "what",
          "there are those who"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "He turned it down without giving a reason, which worries me."
      },
      {
        "tr": "There are those who say it's a mistake, but nobody puts it in writing."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    "theme": "Grammar",
    "title": "Reggenze che non si indovinano",
    "objectives": [
      "pick the preposition the verb demands",
      "tell «riuscire a» from «tentare di»",
      "learn the governments that follow no logic"
    ],
    "theory": [
      {
        "h": "This is a list, not a rule",
        "p": "<em>Riuscire <b>a</b></em>, <em>provare <b>a</b></em>, but <em>tentare <b>di</b></em>, although they mean nearly the same thing. <em>Cominciare <b>a</b></em>, but <em>finire <b>di</b></em>. None of it follows from the meaning, and every attempt to derive it ends in a mistake: learn the verb and its preposition as one word."
      },
      {
        "h": "The four that get confused most",
        "p": "<em>Rendersi conto <b>di</b></em> and <em>accorgersi <b>di</b></em>, <em>convincere <b>a</b></em> against <em>dissuadere <b>da</b></em>, <em>tenere <b>a</b></em> meaning «to care about», <em>badare <b>a</b></em> meaning «to watch out for». These four come back in every text and every test."
      },
      {
        "h": "The preposition stays in the relative clause",
        "p": "Since it is <em>tenere a qualcosa</em>, the relative clause is <em>la cosa <b>a cui</b> tengo</em>. That is why this lesson sits in the same unit as the first one: without the government you cannot build a correct <em>cui</em>, however well you know the rule."
      },
      {
        "contrast": "English has the same arbitrariness («succeed <b>in</b> doing», «manage <b>to</b> do», «try <b>to</b> do»), so the problem is familiar and the lists are simply different. One warning that costs marks: English «realise that» takes a clause, while <em>rendersi conto</em> and <em>accorgersi</em> take <em>di</em> before a noun and <em>che</em> before a clause, and mixing the two produces <em>rendersi conto dell'errore che</em>, which goes nowhere."
      }
    ],
    "grammar": {
      "title": "Verb government",
      "note": "The second column is the preposition the verb demands.",
      "table": {
        "head": [
          "verbs",
          "preposition",
          "meaning"
        ],
        "rows": [
          [
            "riuscire a, provare a",
            "a",
            "to manage, to try"
          ],
          [
            "tentare di, smettere di",
            "di",
            "to attempt, to stop"
          ],
          [
            "rendersi conto di",
            "di",
            "to realise"
          ],
          [
            "convincere a, persuadere a",
            "a",
            "to persuade to"
          ],
          [
            "dissuadere da",
            "da",
            "to talk out of"
          ],
          [
            "tenere a, badare a",
            "a",
            "to care about, to watch out for"
          ]
        ]
      },
      "examples": [
        {
          "tr": "I managed to finish on time."
        },
        {
          "tr": "I tried to explain it to him twice."
        },
        {
          "tr": "I realised my mistake too late."
        },
        {
          "tr": "They persuaded him to stay another year."
        },
        {
          "tr": "I want to say this straight away."
        },
        {
          "tr": "He only stopped complaining yesterday."
        }
      ]
    },
    "vocab": [
      "to manage to",
      "to attempt",
      "to try",
      "to realise",
      "to notice",
      "to persuade to",
      "to talk out of",
      "to care about",
      "to watch out for",
      "to trust",
      "to give up",
      "to stop"
    ],
    "exercises": [
      {
        "q": "Which is correct?",
        "opts": [
          "riuscire di finire",
          "riuscire a finire",
          "riuscire finire"
        ]
      },
      {
        "q": "Fill in: «Sono riuscito ___ finire in tempo.»"
      },
      {
        "q": "Fill in: «Ho tentato ___ spiegarglielo due volte.»"
      },
      {
        "q": "«Rendersi conto» is followed by:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Which preposition does «dissuadere» take?",
        "opts": [
          "da",
          "a",
          "di"
        ]
      },
      {
        "q": "Put in the prepositions.",
        "tr": "I managed to finish on time, but I tried to explain it to him twice."
      },
      {
        "q": "«I realised my mistake too late.»"
      },
      {
        "q": "Which combinations are correct?",
        "opts": [
          "tentare a spiegare",
          "tentare di spiegare",
          "provare a spiegare"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "I only noticed the mistake once the file had already gone out."
      },
      {
        "tr": "I want to say this straight away: I don't agree with this decision."
      }
    ]
  },
  "lesson:c2-u04-test": {
    "theme": "Exam",
    "title": "Final exam, level C2",
    "objectives": [
      "test participles, plurals and derivation, register, relative pronouns and government"
    ],
    "theory": [
      {
        "p": "Twelve tasks drawn from the whole of C2. You pass at 70%. This is the last test of the course."
      }
    ],
    "exercises": [
      {
        "q": "How do you say «the colleague I wrote to»?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Fill in: «La collega a ___ ho scritto non ha risposto.»"
      },
      {
        "q": "Fill in: «L'autore ___ libro hai letto viene domani.»"
      },
      {
        "q": "«Il che» refers to:",
        "opts": [
          "the whole preceding clause",
          "the last noun",
          "the subject"
        ]
      },
      {
        "q": "Fill in: «Ha rifiutato l'incarico, ___ mi preoccupa.»"
      },
      {
        "q": "«Rendersi conto» is followed by:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Fill in: «Sono riuscito ___ finire in tempo.»"
      },
      {
        "q": "Which sentences are correct?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "The colleague I wrote to hasn't replied, which strikes me as odd."
      },
      {
        "q": "«Whoever arrives late waits outside.»"
      },
      {
        "tr": "The author whose book we read in class is giving a lecture."
      },
      {
        "tr": "Only afterwards did I realise how important that meeting had been."
      }
    ]
  }
});
