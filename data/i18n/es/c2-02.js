/* ============================================================
   Textos en la lengua del estudiante (es) para data/core/c2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c2-u04": {
    "title": "Relativos y régimen",
    "grammarNote": "a cui · il che · riuscire a, tentare di"
  },
  "lesson:c2-u04-l1": {
    "theme": "Gramática",
    "title": "Cui, il quale e i loro obblighi",
    "objectives": [
      "usar «cui» con la preposición correcta",
      "expresar posesión con «il cui»",
      "deshacer una ambigüedad con «il quale»"
    ],
    "theory": [
      {
        "h": "Che no admite preposición",
        "p": "<em>La collega <b>che</b> ho visto</em> está bien, pero <em>la collega a che ho scritto</em> no existe. Cuando hace falta una preposición, <em>che</em> deja paso a <em>cui</em>: <em>a cui</em>, <em>di cui</em>, <em>in cui</em>, <em>con cui</em>. Esa es toda la regla y no tiene excepción."
      },
      {
        "h": "¿Qué preposición? La que exige el verbo",
        "p": "<em>Scrivere <b>a</b> qualcuno</em> da <em>la collega <b>a cui</b> ho scritto</em>. <em>Parlare <b>di</b> qualcosa</em> da <em>il progetto <b>di cui</b> parlavamo</em>. La preposición no la elige la relativa: la trae el verbo, y por eso la tercera lección de esta unidad no se puede saltar."
      },
      {
        "h": "Il cui es posesión y concuerda con lo poseído",
        "p": "<em>L'autore <b>il cui</b> libro hai letto</em>: el artículo va con <em>libro</em>, no con el autor. De ahí <em>la scrittrice <b>il cui</b> romanzo</em> y <em>l'autore <b>la cui</b> opera</em>. Lo contrario de lo que sugiere la intuición."
      },
      {
        "contrast": "El español hace exactamente lo mismo: «la colega <b>a la que</b> escribí», «el proyecto <b>del que</b> hablábamos». La estructura viene regalada. La diferencia está en el posesivo: el español dice «cuyo libro», con el posesivo concordando con lo poseído igual que en italiano, pero sin artículo. En italiano el artículo es obligatorio: <em>il cui libro</em>, nunca <em>cui libro</em>."
      }
    ],
    "grammar": {
      "title": "Pronombres relativos",
      "note": "La tercera columna dice cuándo se usa la forma.",
      "table": {
        "head": [
          "forma",
          "qué hace",
          "cuándo"
        ],
        "rows": [
          [
            "che",
            "soggetto o oggetto",
            "sin preposición"
          ],
          [
            "a cui / di cui / in cui",
            "con preposizione",
            "cuando el verbo exige preposición"
          ],
          [
            "il cui / la cui",
            "possesso",
            "posesión"
          ],
          [
            "il quale / la quale",
            "toglie l'ambiguità",
            "cuando «che» sería ambiguo"
          ],
          [
            "dove",
            "solo luogo",
            "solo lugar"
          ]
        ]
      },
      "examples": [
        {
          "tr": "La colega a la que escribí no ha contestado."
        },
        {
          "tr": "El proyecto del que hablábamos se ha aprobado."
        },
        {
          "tr": "El autor cuyo libro leíste viene mañana."
        },
        {
          "tr": "La hermana del director, que trabaja en Milán, llega hoy."
        },
        {
          "tr": "La ciudad en la que nací ya no existe."
        },
        {
          "tr": "La gente con la que trabajo es muy buena."
        }
      ]
    },
    "vocab": [
      "el pronombre relativo",
      "la preposición",
      "el antecedente",
      "al que, del que",
      "el cual",
      "cuyo",
      "la ambigüedad",
      "referirse",
      "precisar",
      "regir",
      "obligatorio",
      "opcional"
    ],
    "exercises": [
      {
        "q": "¿Cómo se dice «la colega a la que escribí»?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Completa: «La collega a ___ ho scritto non ha risposto.»"
      },
      {
        "q": "Completa: «L'autore ___ libro hai letto viene domani.» (posesión)"
      },
      {
        "q": "«Il quale» sirve para:",
        "opts": [
          "acortar la frase",
          "expresar posesión",
          "deshacer una ambigüedad"
        ]
      },
      {
        "q": "En «il cui», el artículo concuerda con:",
        "opts": [
          "lo poseído",
          "el poseedor",
          "el sujeto de la frase"
        ]
      },
      {
        "q": "Pon los pronombres.",
        "tr": "La colega a la que escribí no ha contestado. El autor cuyo libro leíste viene mañana."
      },
      {
        "q": "«El proyecto del que hablábamos se ha aprobado.»"
      },
      {
        "q": "¿Qué frases son correctas?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "El compañero con el que compartí despacho durante años se jubila."
      },
      {
        "tr": "El proyecto del que hablábamos ayer se aprobó esta mañana."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    "theme": "Gramática",
    "title": "Chi, il che, quanto",
    "objectives": [
      "usar «chi» con el valor de «quien»",
      "comentar toda la frase con «il che»",
      "sustituir «ciò che» por «quanto»"
    ],
    "theory": [
      {
        "h": "Chi significa «quien» y no necesita antecedente",
        "p": "<em>Chi arriva tardi aspetta fuori</em> = «quien llega tarde espera fuera». El verbo va siempre en singular, aunque se hable de muchas personas, y eso es lo único que aquí se puede equivocar."
      },
      {
        "h": "Il che comenta toda la frase anterior",
        "p": "<em>Ha rifiutato l'incarico, <b>il che</b> mi preoccupa</em>: lo que preocupa es la negativa, no el cargo. Sin <em>il</em> el pronombre apuntaría al último sustantivo y la frase diría otra cosa. La variante <em>cosa che</em> es algo menos formal y hace lo mismo."
      },
      {
        "h": "Quanto en lugar de ciò che",
        "p": "<em>Non credo a <b>quanto</b> mi hai raccontato</em>. Más breve y de registro más alto que <em>ciò che</em>, muy frecuente por escrito. En la conversación se oye más <em>quello che</em>, igualmente correcto."
      },
      {
        "contrast": "El español tiene «lo cual» para el mismo trabajo que <em>il che</em> («rechazó el cargo, lo cual me preocupa»), así que la estructura le resulta natural. Y «quien» funciona como <em>chi</em>, también con verbo en singular. Es de las unidades donde el español paga menos peaje; lo que no tiene equivalente breve es <em>c'è chi</em>, que se dice «hay quien» y coincide igualmente."
      }
    ],
    "grammar": {
      "title": "Pronombres sin antecedente",
      "note": "La segunda columna dice a qué se refiere la forma.",
      "table": {
        "head": [
          "forma",
          "a qué se refiere",
          "ejemplo"
        ],
        "rows": [
          [
            "chi",
            "a una persona, quien",
            "Chi arriva tardi aspetta fuori."
          ],
          [
            "il che",
            "a toda la frase anterior",
            "Ha rifiutato, il che mi preoccupa."
          ],
          [
            "cosa che",
            "lo mismo, registro más bajo",
            "Ha risposto male, cosa che non gli somiglia."
          ],
          [
            "quanto",
            "a lo que se ha dicho",
            "Non credo a quanto mi hai detto."
          ],
          [
            "c'è chi",
            "a un grupo indefinido",
            "C'è chi dice che sia un errore."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Quien llega tarde espera fuera."
        },
        {
          "tr": "Rechazó el cargo, lo cual me preocupa."
        },
        {
          "tr": "No me creo lo que me has contado."
        },
        {
          "tr": "Hay quien dice que es un error."
        },
        {
          "tr": "Contestó mal, cosa que no es propia de él."
        },
        {
          "tr": "Lo que pasó ayer queda entre nosotros."
        }
      ]
    },
    "vocab": [
      "quien",
      "lo cual",
      "cosa que",
      "lo que",
      "lo que",
      "hay quien",
      "toda la frase",
      "el comentario",
      "preocupar",
      "ser propio de",
      "quedar entre nosotros",
      "resumir"
    ],
    "exercises": [
      {
        "q": "«Chi arriva tardi aspetta fuori» significa:",
        "opts": [
          "¿Quién llega? Espera fuera",
          "Quien llega tarde espera fuera",
          "Llegó tarde y espera"
        ]
      },
      {
        "q": "Completa: «___ arriva tardi aspetta fuori.»"
      },
      {
        "q": "Completa: «Ha rifiutato l'incarico, ___ mi preoccupa.»"
      },
      {
        "q": "«Il che» se refiere a:",
        "opts": [
          "toda la frase anterior",
          "el último sustantivo",
          "el sujeto"
        ]
      },
      {
        "q": "Tras «chi» el verbo va en:",
        "opts": [
          "plural",
          "cualquiera de los dos",
          "singular"
        ]
      },
      {
        "q": "Pon las formas.",
        "tr": "Quien llega tarde espera fuera. Rechazó el cargo, lo cual me preocupa."
      },
      {
        "q": "«Quien llega tarde espera fuera.»"
      },
      {
        "q": "Relaciona las formas.",
        "tr": [
          "quien",
          "lo cual",
          "lo que",
          "hay quien"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Lo rechazó sin dar explicaciones, lo cual me preocupa."
      },
      {
        "tr": "Hay quien dice que es un error, pero nadie lo pone por escrito."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    "theme": "Gramática",
    "title": "Reggenze che non si indovinano",
    "objectives": [
      "elegir la preposición que exige el verbo",
      "distinguir «riuscire a» de «tentare di»",
      "memorizar los regímenes que no siguen ninguna lógica"
    ],
    "theory": [
      {
        "h": "Esto es una lista, no una regla",
        "p": "<em>Riuscire <b>a</b></em>, <em>provare <b>a</b></em>, pero <em>tentare <b>di</b></em>, aunque signifiquen casi lo mismo. <em>Cominciare <b>a</b></em>, pero <em>finire <b>di</b></em>. Nada de esto se deduce del significado, y cada intento de deducirlo acaba en error: hay que aprender el verbo con su preposición, como una sola palabra."
      },
      {
        "h": "Los cuatro que más se confunden",
        "p": "<em>Rendersi conto <b>di</b></em> y <em>accorgersi <b>di</b></em>, <em>convincere <b>a</b></em> frente a <em>dissuadere <b>da</b></em>, <em>tenere <b>a</b></em> con el valor de «importarle a uno», <em>badare <b>a</b></em> con el de «tener cuidado con». Estos cuatro vuelven en todos los textos y en todos los exámenes."
      },
      {
        "h": "La preposición se queda en la relativa",
        "p": "Si se dice <em>tenere a qualcosa</em>, la relativa es <em>la cosa <b>a cui</b> tengo</em>. Por eso esta lección está en la misma unidad que la primera: sin el régimen no se construye un <em>cui</em> correcto, por bien que se sepa la regla."
      },
      {
        "contrast": "El español tiene la misma arbitrariedad («conseguir <b>Ø</b> terminar», «intentar <b>Ø</b> explicar», «darse cuenta <b>de</b>»), y ahí está la trampa: el español a menudo no pone nada donde el italiano exige una preposición. «Conseguí terminar» se dice <em>sono riuscito <b>a</b> finire</em>, e «intenté explicárselo» se dice <em>ho tentato <b>di</b> spiegarglielo</em>. Donde el español calla, el italiano casi siempre pide algo."
      }
    ],
    "grammar": {
      "title": "Régimen verbal",
      "note": "La segunda columna es la preposición que exige el verbo.",
      "table": {
        "head": [
          "verbos",
          "preposición",
          "significado"
        ],
        "rows": [
          [
            "riuscire a, provare a",
            "a",
            "conseguir, probar a"
          ],
          [
            "tentare di, smettere di",
            "di",
            "intentar, dejar de"
          ],
          [
            "rendersi conto di",
            "di",
            "darse cuenta de"
          ],
          [
            "convincere a, persuadere a",
            "a",
            "convencer de"
          ],
          [
            "dissuadere da",
            "da",
            "disuadir de"
          ],
          [
            "tenere a, badare a",
            "a",
            "importarle a uno, tener cuidado con"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Conseguí terminar a tiempo."
        },
        {
          "tr": "Intenté explicárselo dos veces."
        },
        {
          "tr": "Me di cuenta del error demasiado tarde."
        },
        {
          "tr": "Lo convencieron de quedarse un año más."
        },
        {
          "tr": "Me importa decirlo enseguida."
        },
        {
          "tr": "Dejó de quejarse solo ayer."
        }
      ]
    },
    "vocab": [
      "conseguir",
      "intentar",
      "probar a",
      "darse cuenta de",
      "percatarse de",
      "convencer de",
      "disuadir de",
      "importarle a uno",
      "tener cuidado con",
      "fiarse de",
      "renunciar a",
      "dejar de"
    ],
    "exercises": [
      {
        "q": "¿Cuál es correcto?",
        "opts": [
          "riuscire di finire",
          "riuscire a finire",
          "riuscire finire"
        ]
      },
      {
        "q": "Completa: «Sono riuscito ___ finire in tempo.»"
      },
      {
        "q": "Completa: «Ho tentato ___ spiegarglielo due volte.»"
      },
      {
        "q": "«Rendersi conto» va con:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "¿Qué preposición lleva «dissuadere»?",
        "opts": [
          "da",
          "a",
          "di"
        ]
      },
      {
        "q": "Pon las preposiciones.",
        "tr": "Conseguí terminar a tiempo, pero intenté explicárselo dos veces."
      },
      {
        "q": "«Me di cuenta del error demasiado tarde.»"
      },
      {
        "q": "¿Qué combinaciones son correctas?",
        "opts": [
          "tentare a spiegare",
          "tentare di spiegare",
          "provare a spiegare"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Me percaté del error solo cuando el expediente ya había salido."
      },
      {
        "tr": "Me importa decirlo enseguida: no estoy de acuerdo con esta decisión."
      }
    ]
  },
  "lesson:c2-u04-test": {
    "theme": "Examen",
    "title": "Examen final del nivel C2",
    "objectives": [
      "comprobar los participios, los plurales y la derivación, los registros, los relativos y el régimen"
    ],
    "theory": [
      {
        "p": "Doce tareas de todo el nivel C2. Se aprueba a partir del 70%. Es la última prueba del curso."
      }
    ],
    "exercises": [
      {
        "q": "¿Cómo se dice «la colega a la que escribí»?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Completa: «La collega a ___ ho scritto non ha risposto.»"
      },
      {
        "q": "Completa: «L'autore ___ libro hai letto viene domani.»"
      },
      {
        "q": "«Il che» se refiere a:",
        "opts": [
          "toda la frase anterior",
          "el último sustantivo",
          "el sujeto"
        ]
      },
      {
        "q": "Completa: «Ha rifiutato l'incarico, ___ mi preoccupa.»"
      },
      {
        "q": "«Rendersi conto» va con:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Completa: «Sono riuscito ___ finire in tempo.»"
      },
      {
        "q": "¿Qué frases son correctas?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Pon las formas.",
        "tr": "La colega a la que escribí no ha contestado, lo cual me parece raro."
      },
      {
        "q": "«Quien llega tarde espera fuera.»"
      },
      {
        "tr": "El autor cuyo libro leímos en clase dará una conferencia."
      },
      {
        "tr": "Solo después me di cuenta de lo importante que había sido aquella reunión."
      }
    ]
  }
});
