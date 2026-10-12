/* ============================================================
   Textos na língua do aluno (pt, português do Brasil) para data/core/b2-02.js
   As chaves apontam para os id da camada neutra; os arrays se
   combinam por índice, então o comprimento deve coincidir com core.
   Quem confere é o gate de paridade em scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:b2-u05": {
    "title": "Discurso indireto",
    "grammarNote": "correlação de tempos · dêixis · perguntas e ordens"
  },
  "lesson:b2-u05-l1": {
    "theme": "Gramática",
    "title": "Do discurso direto ao indireto",
    "objectives": [
      "mudar o tempo depois de um verbo introdutório no passado",
      "escolher entre indicativo e subjuntivo depois de «che»",
      "usar verbos de fala diferentes de «dire»"
    ],
    "theory": [
      {
        "h": "Um verbo introdutório no passado recua tudo um passo",
        "p": "<em>Ha detto: «Sono stanco»</em> → <em>Ha detto che <b>era</b> stanco.</em> O presente vira imperfetto, o passato prossimo vira trapassato e o futuro vira condicional composto: <em>«Arriverò»</em> → <em>ha detto che <b>sarebbe arrivato</b></em>. Este último é o único que surpreende de verdade: o futuro visto do passado é <em>sarei arrivato</em>, não <em>arriverei</em>."
      },
      {
        "h": "O que não se mexe",
        "p": "Se o verbo introdutório está no presente (<em>dice che…</em>), nada muda. E se o que foi dito continua sendo verdade, a mudança é opcional: <em>Ha detto che Roma <b>è</b> la capitale</em> soa melhor que <em>era</em>."
      },
      {
        "h": "Che + indicativo ou subjuntivo?",
        "p": "Quem decide é o verbo introdutório. <em>Dire, rispondere, spiegare, scrivere</em> pedem indicativo: <em>ha detto che <b>era</b> stanco</em>. <em>Sostenere, ritenere, negare</em> pedem subjuntivo: <em>sostiene che la pratica <b>sia</b> aperta</em>. O segundo grupo marca distância: «isso é o que ele diz, eu não garanto»."
      },
      {
        "contrast": "O português faz o mesmo recuo («disse que <b>estava</b> cansado»), então essa parte vai sair quase sozinha. Há duas armadilhas. A primeira é o futuro: você diz «disse que <b>chegaria</b>», com o futuro do pretérito simples, mas o italiano exige o composto, <em>sarebbe arrivato</em>; <em>arriverebbe</em> aqui está errado. A segunda é o subjuntivo: você diria «ele sustenta que o processo <b>está</b> aberto», com indicativo, e o italiano pede <em>sostiene che sia</em>. O ouvido vai enganar você justamente porque as duas línguas se parecem."
      }
    ],
    "grammar": {
      "title": "A correlação de tempos",
      "note": "Depois de um verbo introdutório no passado.",
      "table": {
        "head": [
          "direto",
          "indireto",
          "exemplo"
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
            "imperfetto (sem mudança)",
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
          "tr": "Ele disse: «Estou cansado» → Ele disse que estava cansado."
        },
        {
          "tr": "Ele me escreveu que chegava no dia seguinte."
        },
        {
          "tr": "Ele respondeu que não tinha entendido a pergunta."
        },
        {
          "tr": "Ele nos explicou que ele mesmo ligaria para o escritório."
        },
        {
          "tr": "Ele admitiu que tinha se enganado."
        },
        {
          "tr": "Ele sustenta que o processo ainda está aberto."
        }
      ]
    },
    "vocab": [
      "relatar, contar",
      "sustentar, afirmar",
      "admitir",
      "retrucar",
      "especificar, esclarecer",
      "acrescentar",
      "desmentir",
      "confirmar",
      "pelo jeito",
      "segundo ele",
      "pelo que dizem",
      "segundo (algo)"
    ],
    "exercises": [
      {
        "q": "«Sono stanco» em discurso indireto depois de «ha detto che»:",
        "opts": [
          "ha detto che sono stanco",
          "ha detto che era stanco",
          "ha detto che sarebbe stanco"
        ]
      },
      {
        "q": "Complete: «Ha detto che ___ stanco.» (essere)"
      },
      {
        "q": "Complete: «Ha risposto che non ___ la domanda.» (capire)"
      },
      {
        "q": "«Arriverò domani» depois de «ha detto che»:",
        "opts": [
          "arriverà",
          "arriverebbe",
          "sarebbe arrivato"
        ]
      },
      {
        "q": "Escreva as formas corretas.",
        "tr": "Ele disse que chegava no dia seguinte e que ele mesmo ligaria."
      },
      {
        "q": "«Ele disse que estava cansado.»"
      },
      {
        "q": "Qual verbo exige subjuntivo?",
        "opts": [
          "sostiene che",
          "ha detto che",
          "ha scritto che"
        ]
      },
      {
        "q": "Relacione os verbos de fala.",
        "tr": [
          "desmentir",
          "especificar",
          "retrucar",
          "sustentar"
        ]
      },
      {
        "q": "Coloque a frase em ordem."
      },
      {
        "tr": "Ele me escreveu que no dia seguinte passaria no escritório."
      },
      {
        "tr": "Ele admitiu que tinha se enganado e pediu desculpas."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    "theme": "Gramática",
    "title": "Tempo, lugar, pessoa",
    "objectives": [
      "deslocar as expressões de tempo e de lugar",
      "trocar «venire» por «andare» quando for o caso",
      "ajustar pronomes e possessivos"
    ],
    "theory": [
      {
        "h": "As expressões de tempo se deslocam com o verbo",
        "p": "<em>oggi</em> → <em>quel giorno</em>, <em>ieri</em> → <em>il giorno prima</em>, <em>domani</em> → <em>il giorno dopo</em> (ou <em>l'indomani</em>), <em>adesso</em> → <em>in quel momento</em> ou <em>allora</em>. A frase se entende sem isso, mas soa como tradução."
      },
      {
        "h": "Lugar: qui → lì, questo → quello",
        "p": "A dêixis aponta a partir de onde estava quem falava. Ao relatar, essa pessoa já não está lá: <em>«Ci vediamo qui»</em> → <em>ha detto che ci saremmo visti <b>lì</b></em>. O mesmo com <em>questo</em> → <em>quello</em> e <em>questa volta</em> → <em>quella volta</em>."
      },
      {
        "h": "Venire e andare trocam de lugar",
        "p": "<em>venire</em> significa «ir até onde está o interlocutor». Ao relatar, o ponto de referência muda, então <em>«Vengo domani»</em> vira <em>ha detto che <b>sarebbe andato</b> il giorno dopo</em>. O mesmo acontece com <em>portare</em>, que vira <em>portare</em> ou <em>lasciare</em> conforme a direção."
      },
      {
        "contrast": "Aqui o português ajuda bastante: «vir» e «ir» funcionam como <em>venire</em> e <em>andare</em> («amanhã eu venho» → «disse que iria no dia seguinte»), e a troca sai quase sozinha. Só uma diferença: o italiano usa <em>venire</em> também para ir até onde está o interlocutor (<em>vengo da te</em>, <em>vengo anch'io!</em>), onde o brasileiro diz «vou aí», «já vou». O que não tem correspondência é <em>l'indomani</em>, que pertence a um registro mais alto que «no dia seguinte» e não se usa na fala."
      }
    ],
    "grammar": {
      "title": "Deslocamentos dêiticos",
      "note": "Quando você relata palavras ditas em outro lugar e em outro momento.",
      "table": {
        "head": [
          "original",
          "relatado",
          "nota"
        ],
        "rows": [
          [
            "oggi",
            "quel giorno",
            "«naquele dia»"
          ],
          [
            "ieri",
            "il giorno prima",
            "—"
          ],
          [
            "domani",
            "il giorno dopo / l'indomani",
            "o segundo é de registro alto"
          ],
          [
            "qui",
            "lì",
            "quem falava já não está lá"
          ],
          [
            "questo",
            "quello",
            "—"
          ],
          [
            "venire",
            "andare",
            "muda o ponto de referência"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«Venho amanhã» → Ele disse que iria no dia seguinte."
        },
        {
          "tr": "«A gente se vê aqui» → Ele disse que a gente se veria lá."
        },
        {
          "tr": "«Fiz isso ontem» → Ele disse que tinha feito aquilo no dia anterior."
        },
        {
          "tr": "«Não gosto disto» → Ele disse que não gostava daquilo."
        },
        {
          "tr": "«Volto agora» → Ele disse que voltava naquele momento."
        },
        {
          "tr": "«Meu chefe sabe» → Ele disse que o chefe dele sabia."
        }
      ]
    },
    "vocab": [
      "o dia anterior",
      "no dia seguinte",
      "dois dias antes",
      "a semana seguinte",
      "naquele momento",
      "então, naquela época",
      "lá",
      "aquilo",
      "dirigir-se, comparecer",
      "no dia seguinte (culto)",
      "pouco antes",
      "pouco depois"
    ],
    "exercises": [
      {
        "q": "«Vengo domani» relatado:",
        "opts": [
          "ha detto che veniva domani",
          "ha detto che sarebbe andato il giorno dopo",
          "ha detto che verrà domani"
        ]
      },
      {
        "q": "Complete: «Ha detto che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Complete: «Ha detto che ci saremmo visti ___.» (qui)"
      },
      {
        "q": "«L'ho fatto ieri» relatado:",
        "opts": [
          "che l'aveva fatto ieri",
          "che lo faceva ieri",
          "che l'aveva fatto il giorno prima"
        ]
      },
      {
        "q": "Por que «venire» passa a «andare»?",
        "opts": [
          "porque soa melhor",
          "porque o ponto de referência muda",
          "porque «venire» não tem condicional"
        ]
      },
      {
        "q": "Escreva as expressões de tempo.",
        "tr": "Ele disse que tinha terminado aquilo no dia anterior e que voltaria no dia seguinte."
      },
      {
        "q": "«Ele disse que iria lá no dia seguinte.»"
      },
      {
        "q": "Quais deslocamentos estão corretos?",
        "opts": [
          "oggi → quel giorno",
          "ieri → domani",
          "questo → quello"
        ]
      },
      {
        "q": "Coloque a frase em ordem."
      },
      {
        "tr": "Ele me disse que iria lá no dia seguinte."
      },
      {
        "tr": "Ele explicou que no dia seguinte não iria ao escritório."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    "theme": "Gramática",
    "title": "Perguntas e ordens relatadas",
    "objectives": [
      "relatar uma pergunta de sim/não com «se»",
      "relatar uma pergunta aberta",
      "transformar o imperativo em «di» + infinitivo"
    ],
    "theory": [
      {
        "h": "Perguntas de sim/não: se",
        "p": "<em>«Vieni?»</em> → <em>Mi ha chiesto <b>se</b> venivo.</em> Sem ponto de interrogação e sem inversão: já não é uma pergunta, mas uma oração subordinada. Este <em>se</em> não tem nada a ver com o condicional."
      },
      {
        "h": "Perguntas abertas: a palavra interrogativa fica",
        "p": "<em>«Dove abiti?»</em> → <em>Mi ha chiesto dove abitavo</em> (coloquial) ou <em>dove <b>abitassi</b></em> (mais cuidadoso). O subjuntivo depois de pergunta indireta é questão de registro, não obrigação, mas na linguagem administrativa é o que você vai encontrar."
      },
      {
        "h": "Ordens: di + infinitivo",
        "p": "<em>«Aspetta!»</em> → <em>Mi ha detto <b>di aspettare</b>.</em> A negação vai antes do infinitivo: <em>mi ha detto <b>di non</b> firmare</em>. O mesmo padrão depois de <em>raccomandare, consigliare, pregare, ordinare, vietare</em>."
      },
      {
        "contrast": "Aqui o português do Brasil ajuda: você já diz «ele me disse <b>para esperar</b>», com infinitivo, e o italiano faz igual, só que com <em>di</em> no lugar de «para»: <em>mi ha detto di aspettare</em>. Cuidado com a tradução literal: «para» não vira <em>per</em> aqui. A outra forma do português, «me disse <b>que esperasse</b>», com subjuntivo, em italiano (<em>mi ha detto che aspettassi</em>) é correto, mas bem menos frequente que <em>di</em> + infinitivo. As duas línguas voltam a coincidir com <em>insistere perché</em> + subjuntivo («insistir para que»)."
      }
    ],
    "grammar": {
      "title": "Perguntas e ordens",
      "note": "Três padrões cobrem quase tudo.",
      "table": {
        "head": [
          "original",
          "relatado",
          "padrão"
        ],
        "rows": [
          [
            "«Vieni?»",
            "mi ha chiesto se venivo",
            "chiedere se + indicativo"
          ],
          [
            "«Dove abiti?»",
            "mi ha chiesto dove abitassi",
            "interrogativo + subjuntivo (registro alto)"
          ],
          [
            "«Aspetta!»",
            "mi ha detto di aspettare",
            "di + infinitivo"
          ],
          [
            "«Non firmare»",
            "mi ha detto di non firmare",
            "di non + infinitivo"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«Você vem?» → Ele me perguntou se eu ia."
        },
        {
          "tr": "«Onde você mora?» → Ele me perguntou onde eu morava."
        },
        {
          "tr": "«Espera!» → Ele me disse para esperar."
        },
        {
          "tr": "«Não assine» → Ele me recomendou não assinar."
        },
        {
          "tr": "«O que você quer?» → Ele queria saber o que eu queria."
        },
        {
          "tr": "«Você pode me ajudar?» → Ele perguntou se eu podia ajudá-lo."
        }
      ]
    },
    "vocab": [
      "perguntar se",
      "querer saber",
      "perguntar, investigar",
      "convidar a",
      "recomendar",
      "ordenar",
      "propor",
      "aconselhar",
      "sugerir",
      "pedir que",
      "proibir",
      "insistir para que"
    ],
    "exercises": [
      {
        "q": "«Vieni?» relatado:",
        "opts": [
          "mi ha chiesto vieni",
          "mi ha chiesto se venivo",
          "mi ha chiesto che venivo"
        ]
      },
      {
        "q": "Complete: «Mi ha chiesto ___ avevo capito.»"
      },
      {
        "q": "Complete: «Mi ha detto ___.» (aspettare)"
      },
      {
        "q": "«Non firmare» relatado:",
        "opts": [
          "mi ha detto di non firmare",
          "mi ha detto che non firmavo",
          "mi ha detto non firmare"
        ]
      },
      {
        "q": "Qual registro é mais cuidadoso?",
        "opts": [
          "dove abitavo",
          "dove abiti",
          "dove abitassi"
        ]
      },
      {
        "q": "Escreva as formas corretas.",
        "tr": "Ele me perguntou se eu tinha entendido e me disse para ligar de novo mais tarde."
      },
      {
        "q": "«Ele me perguntou se eu ia.»"
      },
      {
        "q": "Relacione os verbos.",
        "tr": [
          "recomendar",
          "proibir",
          "sugerir",
          "pedir"
        ]
      },
      {
        "q": "Coloque a frase em ordem."
      },
      {
        "tr": "O funcionário me perguntou se eu tinha trazido o número fiscal."
      },
      {
        "tr": "Ele me recomendou não assinar nada sem ler."
      }
    ]
  },
  "lesson:b2-u05-test": {
    "theme": "Gramática",
    "title": "Teste — Discurso indireto",
    "exercises": [
      {
        "q": "«Ho finito» depois de «ha detto che»:",
        "opts": [
          "ha finito",
          "aveva finito",
          "avrebbe finito"
        ]
      },
      {
        "q": "«Verrò» depois de «ha detto che»:",
        "opts": [
          "verrà",
          "verrebbe",
          "sarebbe venuto"
        ]
      },
      {
        "q": "Complete: «Disse che ___ stanco.» (essere)"
      },
      {
        "q": "Complete: «Disse che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Complete: «Mi chiese ___ ero pronto.»"
      },
      {
        "q": "Uma ordem relatada é:",
        "opts": [
          "di + infinitivo",
          "che + subjuntivo",
          "o imperativo sem mudanças"
        ]
      },
      {
        "q": "Quais frases estão corretas?",
        "opts": [
          "Mi ha detto che aspettassi.",
          "Mi ha detto di aspettare.",
          "Mi ha chiesto se venivo."
        ]
      },
      {
        "q": "Escreva as formas.",
        "tr": "Ele disse que estava cansado e que voltaria no dia seguinte."
      },
      {
        "tr": "Ele respondeu que não tinha recebido nenhuma intimação."
      },
      {
        "tr": "Ele me perguntou se eu já tinha enviado o requerimento."
      }
    ]
  }
});
