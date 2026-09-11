/* ============================================================
   Textes dans la langue de l'apprenant (fr) pour data/core/b2-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:b2-u06": {
    "title": "Concession et connecteurs",
    "grammarNote": "benché · anche se · tuttavia, anzi, del resto"
  },
  "lesson:b2-u06-l1": {
    "theme": "Grammaire",
    "title": "Benché, sebbene, nonostante",
    "objectives": [
      "employer le subjonctif après les conjonctions concessives",
      "distinguer «nonostante + proposition» de «nonostante + nom»",
      "adapter le registre à la situation"
    ],
    "theory": [
      {
        "h": "Toutes ces conjonctions demandent le subjonctif",
        "p": "<em>Benché</em>, <em>sebbene</em>, <em>nonostante</em>, <em>malgrado</em>, <em>per quanto</em>, <em>quantunque</em> : après chacune, le subjonctif, <em>benché <b>fosse</b> tardi</em>. C'est l'une des rares règles italiennes sans exception : autant l'apprendre en bloc."
      },
      {
        "h": "Nonostante a deux visages",
        "p": "Devant une proposition : <em>nonostante <b>avesse</b> ragione</em> (subjonctif). Devant un nom : <em>nonostante <b>la pioggia</b></em>, sans verbe ni mode. La seconde est plus brève et plus fréquente à l'écrit."
      },
      {
        "h": "Registre : elles ne sont pas interchangeables",
        "p": "<em>Quantunque</em> est livresque et sonne étrangement à l'oral. <em>Malgrado</em> est neutre ; <em>benché</em> et <em>sebbene</em> sont un cran au-dessus d'<em>anche se</em>. Dans la conversation, vous entendrez surtout <em>anche se</em>, qui prend l'indicatif : c'est la leçon suivante."
      },
      {
        "contrast": "Le français demande lui aussi le subjonctif après « bien que » et « quoique », donc le mécanisme vous est acquis. Le piège est « malgré » : en français il ne se met jamais devant une proposition (« malgré qu'il » est fautif), alors que l'italien <em>nonostante</em> accepte les deux. L'instinct français vous fera éviter une construction parfaitement correcte en italien."
      }
    ],
    "grammar": {
      "title": "Conjonctions concessives",
      "note": "La conjonction à gauche, le mode qu'elle exige à droite.",
      "table": {
        "head": [
          "conjonction",
          "mode",
          "exemple"
        ],
        "rows": [
          [
            "benché / sebbene",
            "subjonctif",
            "benché fosse tardi"
          ],
          [
            "nonostante / malgrado",
            "subjonctif, ou + nom",
            "nonostante la pioggia"
          ],
          [
            "per quanto",
            "subjonctif",
            "per quanto ci provi"
          ],
          [
            "anche se",
            "indicatif",
            "anche se piove"
          ],
          [
            "pur + gérondif",
            "sans sujet",
            "pur avendo ragione"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Bien qu'il fût tard, nous sommes sortis quand même."
        },
        {
          "tr": "Bien qu'il le sût, il n'a rien dit."
        },
        {
          "tr": "Malgré la pluie, la foire est restée ouverte."
        },
        {
          "tr": "Bien qu'il eût raison, il s'est excusé."
        },
        {
          "tr": "Malgré tout, le projet a avancé."
        },
        {
          "tr": "J'ai beau essayer, je n'y arrive pas."
        }
      ]
    },
    "vocab": [
      "bien que",
      "quoique (registre haut)",
      "malgré, bien que",
      "en dépit de",
      "si… que, pour peu que",
      "encore que (livresque)",
      "tout en étant",
      "quand même",
      "de toute façon",
      "en tout cas",
      "au mépris de",
      "néanmoins"
    ],
    "exercises": [
      {
        "q": "Quel mode après «benché» ?",
        "opts": [
          "indicatif",
          "subjonctif",
          "conditionnel"
        ]
      },
      {
        "q": "Complétez : «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Complétez : «Sebbene lo ___, non ha detto niente.» (sapere)"
      },
      {
        "q": "«Nonostante la pioggia» est :",
        "opts": [
          "nonostante + nom",
          "nonostante + subjonctif",
          "une faute"
        ]
      },
      {
        "q": "Quelle conjonction est la plus livresque ?",
        "opts": [
          "anche se",
          "benché",
          "quantunque"
        ]
      },
      {
        "q": "Mettez le subjonctif.",
        "tr": "Bien qu'il fût tard nous sommes sortis ; malgré la pluie, nous sommes arrivés."
      },
      {
        "q": "« Bien qu'il fût tard, nous sommes sortis. »"
      },
      {
        "q": "Associez les conjonctions.",
        "tr": [
          "bien que",
          "en dépit de",
          "si… que",
          "tout en étant"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Bien qu'il eût tous les documents, le dossier est resté bloqué trois mois."
      },
      {
        "tr": "Malgré la pluie, nous sommes quand même allés au marché."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    "theme": "Grammaire",
    "title": "Anche se et ses pièges",
    "objectives": [
      "employer «anche se» avec l'indicatif",
      "distinguer «pur + gérondif» de «pur di + infinitif»",
      "exprimer une hypothèse avec «anche se» + subjonctif imparfait"
    ],
    "theory": [
      {
        "h": "Anche se prend l'indicatif, pas le subjonctif",
        "p": "C'est la seule concessive qui ne le prend PAS : <em>anche se <b>piove</b>, esco</em>. La faute <em>anche se piova</em> est très fréquente chez ceux qui ont bien retenu la leçon précédente."
      },
      {
        "h": "…sauf s'il s'agit d'une hypothèse",
        "p": "<em>Anche se lo <b>sapessi</b>, non te lo direi</em> : le subjonctif imparfait revient, non à cause d'<em>anche se</em>, mais parce qu'une conditionnelle de second type se trouve à l'intérieur. Le test : la phrase parle-t-elle d'irréel ?"
      },
      {
        "h": "Pur + gérondif et pur di + infinitif sont deux choses différentes",
        "p": "<em>Pur avendo ragione</em> = « bien qu'il eût raison » (concession). <em>Pur di finire</em> = « rien que pour finir » (but, avec une nuance de sacrifice). Ils se ressemblent, disent le contraire, et on les confond sans arrêt."
      },
      {
        "contrast": "Le français distingue « même s'il pleut » et « même si je savais » par le temps, pas par le mode, alors que l'italien change de mode. Autre point : « avoir beau » n'a pas d'équivalent italien direct — <em>per quanto</em> s'en approche, mais avec le subjonctif."
      }
    ],
    "grammar": {
      "title": "Anche se et ses voisines",
      "note": "Attention aux deuxième et quatrième lignes : elles se ressemblent.",
      "table": {
        "head": [
          "construction",
          "sens",
          "exemple"
        ],
        "rows": [
          [
            "anche se + indicatif",
            "un fait",
            "anche se piove, esco"
          ],
          [
            "anche se + subj. imparfait",
            "une hypothèse",
            "anche se lo sapessi, non lo direi"
          ],
          [
            "pur + gérondif",
            "même sujet",
            "pur avendo ragione, ha taciuto"
          ],
          [
            "pur di + infinitif",
            "but, pas concession",
            "pur di finire, ha lavorato di notte"
          ],
          [
            "neanche se",
            "négation renforcée",
            "neanche se me lo chiedessero"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Même s'il pleut, je sors quand même."
        },
        {
          "tr": "Même si je le savais, je ne te le dirais pas."
        },
        {
          "tr": "Bien qu'il eût raison, il a laissé tomber."
        },
        {
          "tr": "Rien que pour finir, il a travaillé toute la nuit."
        },
        {
          "tr": "Même s'ils me le demandaient, je ne le ferais pas."
        },
        {
          "tr": "Si difficile que ce soit, ça en vaut la peine."
        }
      ]
    },
    "vocab": [
      "même si",
      "même pas si",
      "bien que (+ gérondif)",
      "rien que pour",
      "laisser tomber",
      "valoir la peine",
      "y arriver",
      "renoncer",
      "insister",
      "au prix de",
      "aussi, même",
      "et pourtant"
    ],
    "exercises": [
      {
        "q": "Quel mode après «anche se» pour un fait ?",
        "opts": [
          "indicatif",
          "subjonctif",
          "indifférent"
        ]
      },
      {
        "q": "Complétez : «___ piove, esco lo stesso.»"
      },
      {
        "q": "Complétez : «___ ragione, ha lasciato perdere.» (pur + avere)"
      },
      {
        "q": "«Pur di finire» signifie :",
        "opts": [
          "bien qu'il ait fini",
          "rien que pour finir",
          "ayant fini"
        ]
      },
      {
        "q": "Quand le subjonctif imparfait suit-il «anche se» ?",
        "opts": [
          "toujours",
          "jamais",
          "quand la phrase est une hypothèse"
        ]
      },
      {
        "q": "Mettez la conjonction.",
        "tr": "Même s'il pleut je sors ; même si je le savais, je ne le dirais pas."
      },
      {
        "q": "« Même s'il pleut, je sors quand même. »"
      },
      {
        "q": "Quelles phrases sont correctes ?",
        "opts": [
          "Anche se piove, esco.",
          "Anche se piova, esco.",
          "Pur piovendo, esco."
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Bien que j'eusse rendez-vous, j'ai attendu deux heures."
      },
      {
        "tr": "Bien que j'eusse raison, j'ai préféré laisser tomber."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    "theme": "Grammaire",
    "title": "Tuttavia, anzi, del resto",
    "objectives": [
      "relier des phrases par un connecteur textuel",
      "distinguer «anzi» d'un contraste ordinaire",
      "choisir le registre : «pertanto» ou «quindi»"
    ],
    "theory": [
      {
        "h": "Ces mots n'apportent pas de contenu, mais une consigne",
        "p": "<em>Tuttavia</em> dit : « ce qui suit va à contre-courant de ce que vous venez de lire ». <em>Del resto</em> dit : « d'ailleurs, c'était prévisible ». Sans eux, un texte est une liste de phrases et le lecteur doit deviner comment elles s'articulent."
      },
      {
        "h": "Anzi est une correction, pas un contraste",
        "p": "<em>Non mi ha disturbato, <b>anzi</b> mi ha fatto piacere.</em> <em>Anzi</em> ne contredit pas ce qui précède : il le pousse plus loin dans le même sens. Le français « au contraire » s'en approche, « bien au contraire » encore plus."
      },
      {
        "h": "Registre : pertanto contre quindi",
        "p": "<em>Pertanto</em> et <em>peraltro</em> relèvent de l'administratif et sonnent guindés à l'oral. On dit <em>quindi</em>, <em>allora</em>, <em>comunque</em>. Règle pratique : à l'écrit vers une administration, la première colonne ; à l'oral, la seconde."
      },
      {
        "contrast": "Deux faux amis d'un coup. L'italien <em>in effetti</em> signifie « en effet, à vrai dire » (concéder), et non « en effet » au sens de conséquence, qui serait <em>di conseguenza</em>. Et <em>eventualmente</em> veut dire « le cas échéant », pas « éventuellement » au sens de « peut-être un jour ». Les deux sonnent familiers et disent autre chose."
      }
    ],
    "grammar": {
      "title": "Connecteurs textuels",
      "note": "La troisième colonne donne le registre ou le piège.",
      "table": {
        "head": [
          "connecteur",
          "ce qu'il fait",
          "remarque"
        ],
        "rows": [
          [
            "tuttavia",
            "opposition",
            "registre haut"
          ],
          [
            "anzi",
            "correction vers le haut",
            "« au contraire, bien plus »"
          ],
          [
            "del resto",
            "c'était prévisible",
            "oral et écrit"
          ],
          [
            "pertanto",
            "conclusion",
            "administratif"
          ],
          [
            "semmai",
            "si tant est, tout au plus",
            "adoucit"
          ],
          [
            "in effetti",
            "concéder",
            "pas « en effet » causal"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Le prix est élevé ; toutefois la qualité le justifie."
        },
        {
          "tr": "Il ne m'a pas dérangé, au contraire : ça m'a fait plaisir."
        },
        {
          "tr": "D'ailleurs, c'était prévisible."
        },
        {
          "tr": "Par conséquent, la demande doit être refaite."
        },
        {
          "tr": "Si tant est, nous y reviendrons demain."
        },
        {
          "tr": "À vrai dire, c'est lui qui avait raison."
        }
      ]
    },
    "vocab": [
      "toutefois, néanmoins",
      "au contraire, bien plus",
      "d'ailleurs",
      "par conséquent",
      "si tant est, tout au plus",
      "à vrai dire",
      "d'un autre côté",
      "par ailleurs (formel)",
      "et pourtant",
      "plutôt",
      "donc",
      "bref"
    ],
    "exercises": [
      {
        "q": "«Anzi» signifie :",
        "opts": [
          "toutefois",
          "au contraire, bien plus",
          "par conséquent"
        ]
      },
      {
        "q": "Complétez : «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "Complétez : «Il prezzo è alto; ___ la qualità lo giustifica.»"
      },
      {
        "q": "«In effetti» signifie :",
        "opts": [
          "en effet (conséquence)",
          "le cas échéant",
          "à vrai dire"
        ]
      },
      {
        "q": "Quel connecteur est administratif ?",
        "opts": [
          "pertanto",
          "quindi",
          "allora"
        ]
      },
      {
        "q": "Mettez les connecteurs.",
        "tr": "Le prix est élevé ; toutefois la qualité le justifie. D'ailleurs, c'était prévisible."
      },
      {
        "q": "« Il ne m'a pas dérangé, au contraire : ça m'a fait plaisir. »"
      },
      {
        "q": "Associez les connecteurs.",
        "tr": [
          "toutefois",
          "au contraire",
          "par conséquent",
          "si tant est"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "La demande est arrivée à temps ; il manquait toutefois une signature."
      },
      {
        "tr": "Ce n'est pas un problème, au contraire : c'est le plus simple de tout."
      }
    ]
  },
  "lesson:b2-u06-test": {
    "theme": "Examen",
    "title": "Examen final du niveau B2",
    "objectives": [
      "vérifier le subjonctif, les conditionnelles, le discours indirect, la concession et les connecteurs"
    ],
    "theory": [
      {
        "p": "Douze exercices tirés de tout le niveau B2. Réussite à partir de 70%."
      }
    ],
    "exercises": [
      {
        "q": "Quel mode après «sebbene» ?",
        "opts": [
          "indicatif",
          "subjonctif",
          "conditionnel"
        ]
      },
      {
        "q": "Quel mode après «anche se» (un fait) ?",
        "opts": [
          "indicatif",
          "subjonctif",
          "conditionnel"
        ]
      },
      {
        "q": "Complétez : «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Complétez : «___ piove, esco lo stesso.»"
      },
      {
        "q": "Complétez : «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "«Pur di finire» signifie :",
        "opts": [
          "bien qu'il ait fini",
          "ayant fini",
          "rien que pour finir"
        ]
      },
      {
        "q": "Quelles phrases sont correctes ?",
        "opts": [
          "Benché fosse tardi, siamo usciti.",
          "Anche se piove, esco.",
          "Anche se piova, esco."
        ]
      },
      {
        "q": "Discours indirect. Complétez : «Mi ha detto che ___ il giorno dopo.» (venire)"
      },
      {
        "tr": "S'ils m'avaient écouté, le problème aurait été résolu."
      },
      {
        "q": "Mettez les formes.",
        "tr": "Bien qu'il fût tard nous sommes sortis ; même s'il pleuvait, nous ne nous sommes pas arrêtés."
      },
      {
        "tr": "Bien qu'il eût tout déposé, on lui a demandé un autre document."
      },
      {
        "tr": "Même si cela coûte plus cher, cela vaut la peine au final."
      }
    ]
  }
});
