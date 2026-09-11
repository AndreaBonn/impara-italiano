/* ============================================================
   Textes dans la langue de l'apprenant (fr) pour data/core/c2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c2-u04": {
    "title": "Relatifs et rection",
    "grammarNote": "a cui · il che · riuscire a, tentare di"
  },
  "lesson:c2-u04-l1": {
    "theme": "Grammaire",
    "title": "Cui, il quale e i loro obblighi",
    "objectives": [
      "employer « cui » avec la bonne préposition",
      "exprimer la possession avec « il cui »",
      "lever une ambiguïté avec « il quale »"
    ],
    "theory": [
      {
        "h": "Che ne prend pas de préposition",
        "p": "<em>La collega <b>che</b> ho visto</em> est correct, mais <em>la collega a che ho scritto</em> n'existe pas. Dès qu'une préposition est nécessaire, <em>che</em> cède la place à <em>cui</em> : <em>a cui</em>, <em>di cui</em>, <em>in cui</em>, <em>con cui</em>. C'est toute la règle, et elle n'a pas d'exception."
      },
      {
        "h": "Quelle préposition ? Celle qu'exige le verbe",
        "p": "<em>Scrivere <b>a</b> qualcuno</em> donne <em>la collega <b>a cui</b> ho scritto</em>. <em>Parlare <b>di</b> qualcosa</em> donne <em>il progetto <b>di cui</b> parlavamo</em>. Ce n'est pas la relative qui choisit la préposition : c'est le verbe qui l'apporte, et c'est pourquoi la troisième leçon de cette unité ne peut pas être sautée."
      },
      {
        "h": "Il cui marque la possession et s'accorde avec l'objet possédé",
        "p": "<em>L'autore <b>il cui</b> libro hai letto</em> : l'article va avec <em>libro</em>, pas avec l'auteur. D'où <em>la scrittrice <b>il cui</b> romanzo</em> et <em>l'autore <b>la cui</b> opera</em>. L'inverse de ce que suggère l'intuition."
      },
      {
        "contrast": "Le français fait la même chose avec « à qui », « dont », « dans lequel », donc le mécanisme vous est acquis. Le vrai piège est « dont », qui couvre à lui seul <em>di cui</em> et <em>il cui</em> : « l'auteur dont tu as lu le livre » se dit <em>l'autore <b>il cui</b> libro hai letto</em>, avec un article que le français n'a pas. Traduire « dont » par <em>di cui</em> dans ce cas donne une phrase fausse."
      }
    ],
    "grammar": {
      "title": "Pronoms relatifs",
      "note": "La troisième colonne dit quand employer la forme.",
      "table": {
        "head": [
          "forme",
          "ce qu'elle fait",
          "quand"
        ],
        "rows": [
          [
            "che",
            "soggetto o oggetto",
            "aucune préposition"
          ],
          [
            "a cui / di cui / in cui",
            "con preposizione",
            "le verbe exige une préposition"
          ],
          [
            "il cui / la cui",
            "possesso",
            "possession"
          ],
          [
            "il quale / la quale",
            "toglie l'ambiguità",
            "quand « che » serait ambigu"
          ],
          [
            "dove",
            "solo luogo",
            "lieu seulement"
          ]
        ]
      },
      "examples": [
        {
          "tr": "La collègue à qui j'ai écrit n'a pas répondu."
        },
        {
          "tr": "Le projet dont nous parlions a été approuvé."
        },
        {
          "tr": "L'auteur dont tu as lu le livre vient demain."
        },
        {
          "tr": "La sœur du directeur, laquelle travaille à Milan, arrive aujourd'hui."
        },
        {
          "tr": "La ville où je suis né n'existe plus."
        },
        {
          "tr": "Les gens avec qui je travaille sont très compétents."
        }
      ]
    },
    "vocab": [
      "le pronom relatif",
      "la préposition",
      "l'antécédent",
      "à qui, dont",
      "lequel",
      "dont (avec article)",
      "l'ambiguïté",
      "se rapporter",
      "préciser",
      "régir",
      "obligatoire",
      "facultatif"
    ],
    "exercises": [
      {
        "q": "Comment dit-on « la collègue à qui j'ai écrit » ?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Complétez : « La collega a ___ ho scritto non ha risposto. »"
      },
      {
        "q": "Complétez : « L'autore ___ libro hai letto viene domani. » (possession)"
      },
      {
        "q": "« Il quale » sert à :",
        "opts": [
          "raccourcir la phrase",
          "exprimer la possession",
          "lever une ambiguïté"
        ]
      },
      {
        "q": "Dans « il cui », l'article s'accorde avec :",
        "opts": [
          "l'objet possédé",
          "le possesseur",
          "le sujet de la phrase"
        ]
      },
      {
        "q": "Mettez les pronoms.",
        "tr": "La collègue à qui j'ai écrit n'a pas répondu. L'auteur dont tu as lu le livre vient demain."
      },
      {
        "q": "« Le projet dont nous parlions a été approuvé. »"
      },
      {
        "q": "Quelles phrases sont correctes ?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Le collègue avec qui j'ai partagé un bureau pendant des années part à la retraite."
      },
      {
        "tr": "Le projet dont nous parlions hier a été approuvé ce matin."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    "theme": "Grammaire",
    "title": "Chi, il che, quanto",
    "objectives": [
      "employer « chi » au sens de « celui qui »",
      "commenter toute la phrase avec « il che »",
      "remplacer « ciò che » par « quanto »"
    ],
    "theory": [
      {
        "h": "Chi veut dire « celui qui » et n'a pas besoin d'antécédent",
        "p": "<em>Chi arriva tardi aspetta fuori</em> = « celui qui arrive en retard attend dehors ». Le verbe reste toujours au singulier, même quand on parle de plusieurs personnes, et c'est la seule chose qu'on puisse rater ici."
      },
      {
        "h": "Il che commente toute la phrase qui précède",
        "p": "<em>Ha rifiutato l'incarico, <b>il che</b> mi preoccupa</em> : ce qui inquiète, c'est le refus, pas le poste. Sans <em>il</em>, le pronom viserait le dernier substantif et la phrase dirait autre chose. La variante <em>cosa che</em> est un peu moins formelle et fait le même travail."
      },
      {
        "h": "Quanto à la place de ciò che",
        "p": "<em>Non credo a <b>quanto</b> mi hai raccontato</em>. Plus bref et d'un registre plus haut que <em>ciò che</em>, très fréquent à l'écrit. À l'oral on entend plutôt <em>quello che</em>, tout aussi correct."
      },
      {
        "contrast": "Le français a « ce qui » après virgule (« il a refusé le poste, ce qui m'inquiète ») et cela recouvre exactement <em>il che</em>. Le piège tient à l'article : le francophone écrit spontanément <em>che mi preoccupa</em>, qui renvoie alors à « l'incarico » et change le sens. C'est le <em>il</em> qui fait porter le pronom sur la phrase entière."
      }
    ],
    "grammar": {
      "title": "Pronoms sans antécédent",
      "note": "La deuxième colonne dit à quoi renvoie la forme.",
      "table": {
        "head": [
          "forme",
          "à quoi elle renvoie",
          "exemple"
        ],
        "rows": [
          [
            "chi",
            "à une personne, celui qui",
            "Chi arriva tardi aspetta fuori."
          ],
          [
            "il che",
            "à toute la phrase précédente",
            "Ha rifiutato, il che mi preoccupa."
          ],
          [
            "cosa che",
            "la même chose, registre plus bas",
            "Ha risposto male, cosa che non gli somiglia."
          ],
          [
            "quanto",
            "à ce qui a été dit",
            "Non credo a quanto mi hai detto."
          ],
          [
            "c'è chi",
            "à un groupe indéfini",
            "C'è chi dice che sia un errore."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Celui qui arrive en retard attend dehors."
        },
        {
          "tr": "Il a refusé le poste, ce qui m'inquiète."
        },
        {
          "tr": "Je ne crois pas ce que tu m'as raconté."
        },
        {
          "tr": "Il y a des gens qui disent que c'est une erreur."
        },
        {
          "tr": "Il a mal répondu, ce qui ne lui ressemble pas."
        },
        {
          "tr": "Ce qui s'est passé hier reste entre nous."
        }
      ]
    },
    "vocab": [
      "celui qui",
      "ce qui (sur la phrase)",
      "ce qui (moins formel)",
      "ce que",
      "ce que",
      "il y a des gens qui",
      "la phrase entière",
      "le commentaire",
      "inquiéter",
      "ressembler à",
      "rester entre nous",
      "résumer"
    ],
    "exercises": [
      {
        "q": "« Chi arriva tardi aspetta fuori » signifie :",
        "opts": [
          "Qui arrive ? Il attend dehors",
          "Celui qui arrive en retard attend dehors",
          "Il est arrivé en retard et attend"
        ]
      },
      {
        "q": "Complétez : « ___ arriva tardi aspetta fuori. »"
      },
      {
        "q": "Complétez : « Ha rifiutato l'incarico, ___ mi preoccupa. »"
      },
      {
        "q": "« Il che » renvoie à :",
        "opts": [
          "toute la phrase précédente",
          "au dernier substantif",
          "au sujet"
        ]
      },
      {
        "q": "Après « chi », le verbe est au :",
        "opts": [
          "pluriel",
          "l'un ou l'autre",
          "singulier"
        ]
      },
      {
        "q": "Mettez les formes.",
        "tr": "Celui qui arrive en retard attend dehors. Il a refusé le poste, ce qui m'inquiète."
      },
      {
        "q": "« Celui qui arrive en retard attend dehors. »"
      },
      {
        "q": "Associez les formes.",
        "tr": [
          "celui qui",
          "ce qui (sur la phrase)",
          "ce que",
          "il y a des gens qui"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Il a refusé sans donner de raison, ce qui m'inquiète."
      },
      {
        "tr": "Il y a des gens qui disent que c'est une erreur, mais personne ne l'écrit noir sur blanc."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    "theme": "Grammaire",
    "title": "Reggenze che non si indovinano",
    "objectives": [
      "choisir la préposition qu'exige le verbe",
      "distinguer « riuscire a » de « tentare di »",
      "retenir les rections qui ne suivent aucune logique"
    ],
    "theory": [
      {
        "h": "C'est une liste, pas une règle",
        "p": "<em>Riuscire <b>a</b></em>, <em>provare <b>a</b></em>, mais <em>tentare <b>di</b></em>, alors qu'ils veulent dire presque la même chose. <em>Cominciare <b>a</b></em>, mais <em>finire <b>di</b></em>. Rien de cela ne se déduit du sens, et toute tentative de déduction finit en faute : il faut apprendre le verbe avec sa préposition, comme un seul mot."
      },
      {
        "h": "Les quatre qu'on confond le plus",
        "p": "<em>Rendersi conto <b>di</b></em> et <em>accorgersi <b>di</b></em>, <em>convincere <b>a</b></em> contre <em>dissuadere <b>da</b></em>, <em>tenere <b>a</b></em> au sens de « tenir à », <em>badare <b>a</b></em> au sens de « faire attention à ». Ces quatre-là reviennent dans tous les textes et dans tous les examens."
      },
      {
        "h": "La préposition reste dans la relative",
        "p": "Puisqu'on dit <em>tenere a qualcosa</em>, la relative est <em>la cosa <b>a cui</b> tengo</em>. Voilà pourquoi cette leçon est dans la même unité que la première : sans la rection, pas de <em>cui</em> correct, même en connaissant la règle par cœur."
      },
      {
        "contrast": "Le français a la même arbitraire (« réussir <b>à</b> », « tenter <b>de</b> », « se rendre compte <b>de</b> ») et, chose rare, les listes se recouvrent souvent : <em>riuscire a</em> = « réussir à », <em>tentare di</em> = « tenter de », <em>rendersi conto di</em> = « se rendre compte de ». C'est l'une des unités où le français part gagnant. Méfiance tout de même sur <em>tenere a</em>, qui ressemble à « tenir à » et le traduit vraiment, mais aussi sur <em>badare a</em>, qui n'est pas « bader »."
      }
    ],
    "grammar": {
      "title": "Rection des verbes",
      "note": "La deuxième colonne est la préposition qu'exige le verbe.",
      "table": {
        "head": [
          "verbes",
          "préposition",
          "sens"
        ],
        "rows": [
          [
            "riuscire a, provare a",
            "a",
            "réussir à, essayer de"
          ],
          [
            "tentare di, smettere di",
            "di",
            "tenter de, cesser de"
          ],
          [
            "rendersi conto di",
            "di",
            "se rendre compte de"
          ],
          [
            "convincere a, persuadere a",
            "a",
            "convaincre de"
          ],
          [
            "dissuadere da",
            "da",
            "dissuader de"
          ],
          [
            "tenere a, badare a",
            "a",
            "tenir à, faire attention à"
          ]
        ]
      },
      "examples": [
        {
          "tr": "J'ai réussi à finir à temps."
        },
        {
          "tr": "J'ai tenté de le lui expliquer deux fois."
        },
        {
          "tr": "Je me suis rendu compte de l'erreur trop tard."
        },
        {
          "tr": "Ils l'ont convaincu de rester une année de plus."
        },
        {
          "tr": "Je tiens à le dire tout de suite."
        },
        {
          "tr": "Il n'a cessé de se plaindre qu'hier."
        }
      ]
    },
    "vocab": [
      "réussir à",
      "tenter de",
      "essayer de",
      "se rendre compte de",
      "s'apercevoir de",
      "convaincre de",
      "dissuader de",
      "tenir à",
      "faire attention à",
      "faire confiance à",
      "renoncer à",
      "cesser de"
    ],
    "exercises": [
      {
        "q": "Quelle forme est correcte ?",
        "opts": [
          "riuscire di finire",
          "riuscire a finire",
          "riuscire finire"
        ]
      },
      {
        "q": "Complétez : « Sono riuscito ___ finire in tempo. »"
      },
      {
        "q": "Complétez : « Ho tentato ___ spiegarglielo due volte. »"
      },
      {
        "q": "« Rendersi conto » se construit avec :",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Quelle préposition prend « dissuadere » ?",
        "opts": [
          "da",
          "a",
          "di"
        ]
      },
      {
        "q": "Mettez les prépositions.",
        "tr": "J'ai réussi à finir à temps, mais j'ai tenté de le lui expliquer deux fois."
      },
      {
        "q": "« Je me suis rendu compte de l'erreur trop tard. »"
      },
      {
        "q": "Quelles combinaisons sont correctes ?",
        "opts": [
          "tentare a spiegare",
          "tentare di spiegare",
          "provare a spiegare"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Je ne me suis aperçu de l'erreur qu'une fois le dossier parti."
      },
      {
        "tr": "Je tiens à le dire tout de suite : je ne suis pas d'accord avec ce choix."
      }
    ]
  },
  "lesson:c2-u04-test": {
    "theme": "Examen",
    "title": "Examen final du niveau C2",
    "objectives": [
      "vérifier les participes, les pluriels et la dérivation, les registres, les relatifs et la rection"
    ],
    "theory": [
      {
        "p": "Douze exercices tirés de tout le niveau C2. Réussite à partir de 70%. C'est le dernier test du cours."
      }
    ],
    "exercises": [
      {
        "q": "Comment dit-on « la collègue à qui j'ai écrit » ?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Complétez : « La collega a ___ ho scritto non ha risposto. »"
      },
      {
        "q": "Complétez : « L'autore ___ libro hai letto viene domani. »"
      },
      {
        "q": "« Il che » renvoie à :",
        "opts": [
          "toute la phrase précédente",
          "au dernier substantif",
          "au sujet"
        ]
      },
      {
        "q": "Complétez : « Ha rifiutato l'incarico, ___ mi preoccupa. »"
      },
      {
        "q": "« Rendersi conto » se construit avec :",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Complétez : « Sono riuscito ___ finire in tempo. »"
      },
      {
        "q": "Quelles phrases sont correctes ?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Mettez les formes.",
        "tr": "La collègue à qui j'ai écrit n'a pas répondu, ce qui me paraît étrange."
      },
      {
        "q": "« Celui qui arrive en retard attend dehors. »"
      },
      {
        "tr": "L'auteur dont nous avons lu le livre en classe donnera une conférence."
      },
      {
        "tr": "Ce n'est qu'après que je me suis rendu compte de l'importance de cette réunion."
      }
    ]
  }
});
