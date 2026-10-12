/* ============================================================
   Textos na língua do aluno (pt, português do Brasil) para data/core/c1-03.js
   As chaves apontam para os id da camada neutra; os arrays se unem
   por índice, então o comprimento deles tem de bater com o core.
   Quem verifica isso é o gate de paridade em scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:c1-u05": {
    "title": "Orações sem verbo conjugado",
    "grammarNote": "gerundio · participio · dopo aver"
  },
  "lesson:c1-u05-l1": {
    "theme": "Gramática",
    "title": "Il gerundio che sostituisce una frase",
    "objectives": [
      "substituir uma subordinada pelo gerundio",
      "distinguir o gerundio simples do composto",
      "reconhecer os quatro valores que o gerundio pode ter"
    ],
    "theory": [
      {
        "h": "Uma forma, quatro valores",
        "p": "<em>Uscendo di casa, ho incontrato Marta</em> pode ser “ao sair” (tempo), “como eu estava saindo” (causa), “saindo assim” (modo) ou “se eu saísse” (condição). O italiano não marca isso: quem decide é o conteúdo das duas metades, e na prática só uma leitura faz sentido."
      },
      {
        "h": "O gerundio composto joga a ação para trás",
        "p": "<em>Avendo finito presto, siamo andati al mare</em>: primeiro terminamos, depois fomos. Sem <em>avendo</em> as duas ações seriam simultâneas. É a única coisa que a forma do gerundio decide de verdade, então vale a pena olhar para ela."
      },
      {
        "h": "Para que serve",
        "p": "<em>Siccome avevamo finito presto, siamo andati al mare</em> está correto e tem quatro palavras a mais. Um texto italiano de nível C1 troca uma coisa pela outra várias vezes por página; quem não faz isso escreve certo e pesado, e essa é a diferença que um professor vê na hora."
      },
      {
        "contrast": "O português tem o mesmo gerúndio e quase a mesma distribuição de valores, então aqui você sai na frente. A diferença está no gerúndio composto: “tendo terminado” existe, mas no Brasil soa formal, de texto escrito, enquanto <em>avendo finito</em> é neutro em italiano, aparece até na conversa. Não transfira essa sensação de solenidade."
      }
    ],
    "grammar": {
      "title": "O gerundio no lugar de uma subordinada",
      "note": "A terceira coluna diz o que a frase expressa.",
      "table": {
        "head": [
          "construção",
          "forma",
          "o que expressa"
        ],
        "rows": [
          [
            "Uscendo di casa…",
            "gerundio presente",
            "simultaneidade, causa, modo"
          ],
          [
            "Avendo finito…",
            "gerundio passato",
            "ação anterior"
          ],
          [
            "Pur sapendolo…",
            "pur + gerundio",
            "concessão"
          ],
          [
            "Sbagliando si impara.",
            "gerundio",
            "modo, verdade geral"
          ],
          [
            "Essendo domenica…",
            "gerundio di essere",
            "causa"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Ao sair de casa, encontrei a Marta."
        },
        {
          "tr": "Tendo terminado cedo, fomos para a praia."
        },
        {
          "tr": "Mesmo sabendo, não disse nada."
        },
        {
          "tr": "Errando é que se aprende."
        },
        {
          "tr": "Como era domingo, as lojas estavam fechadas."
        },
        {
          "tr": "Publicada a notícia, o preço despencou."
        }
      ]
    },
    "vocab": [
      "o gerúndio",
      "a oração não conjugada",
      "o sujeito subentendido",
      "simultâneo",
      "anterior",
      "a causa",
      "o modo",
      "a condição",
      "subentender",
      "reger",
      "deixar mais leve",
      "sobrecarregar"
    ],
    "exercises": [
      {
        "q": "“Uscendo di casa, ho incontrato Marta” significa:",
        "opts": [
          "Vou sair de casa e vou encontrar a Marta",
          "Ao sair de casa, encontrei a Marta",
          "Se eu saísse, encontraria a Marta"
        ]
      },
      {
        "q": "Complete: “___ di casa, ho incontrato Marta.” (uscire, gerundio)"
      },
      {
        "q": "Complete: “___ presto, siamo andati al mare.” (finire, gerundio composto)"
      },
      {
        "q": "“Avendo finito presto” expressa:",
        "opts": [
          "uma ação anterior",
          "uma ação simultânea",
          "uma condição"
        ]
      },
      {
        "q": "“Pur sapendolo” significa:",
        "opts": [
          "sabendo disso",
          "sem saber",
          "mesmo sabendo"
        ]
      },
      {
        "q": "Coloque as formas.",
        "tr": "Ao sair de casa, encontrei a Marta. Tendo terminado cedo, fomos para a praia."
      },
      {
        "q": "“Errando é que se aprende.”"
      },
      {
        "q": "Quais frases estão corretas?",
        "opts": [
          "Sbagliando si impara.",
          "Essendo domenica, i negozi erano chiusi.",
          "Avendo finito il lavoro, la festa è cominciata."
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "Tendo lido o contrato, pedi que mudassem dois pontos."
      },
      {
        "tr": "Ao sair do escritório, percebi que tinha deixado as chaves lá dentro."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    "theme": "Gramática",
    "title": "Participio e infinito al posto di una subordinata",
    "objectives": [
      "encurtar uma temporal com o participio",
      "usar “dopo aver” e “prima di” com infinitivo",
      "concordar o participio com a palavra certa"
    ],
    "theory": [
      {
        "h": "O participio no começo da frase",
        "p": "<em>Finito il lavoro, siamo usciti</em> = “terminado o trabalho, saímos”. O participio concorda com aquilo de que fala: com <em>lavoro</em> em <em>finito il lavoro</em>, mas com “nós” em <em>arrivati a Roma</em>, porque <em>arrivare</em> vai com <em>essere</em>. É a única parte difícil desta lição."
      },
      {
        "h": "Dopo aver, prima di, nel",
        "p": "Depois de <em>dopo</em> vem o infinitivo composto: <em>dopo aver letto</em>, nunca <em>dopo leggere</em>. Depois de <em>prima di</em>, o infinitivo simples: <em>prima di rispondere</em>. <em>Nel</em> + infinitivo significa “ao”: <em>nel dire questo, si è alzato</em>."
      },
      {
        "h": "Una volta + participio",
        "p": "<em>Una volta chiuso il negozio, la via si svuota.</em> Muito frequente e muito prática, porque não precisa de conjunção nem de tempo verbal. Serve também para o que dura: <em>una volta imparato, non si dimentica</em>."
      },
      {
        "contrast": "O português diz “ao sair”, “ao dizer isso”, com “ao” + infinitivo, e o italiano tem a construção paralela em <em>nel dire questo</em>, mas a usa bem menos: para o tempo simultâneo prefere o gerundio. Já “depois de ler” e <em>dopo aver letto</em> se correspondem bem, com uma diferença: o italiano exige o infinitivo composto onde o português aceita o simples."
      }
    ],
    "grammar": {
      "title": "Encurtar uma temporal",
      "note": "A terceira coluna diz quando a forma é usada.",
      "table": {
        "head": [
          "construção",
          "forma",
          "quando"
        ],
        "rows": [
          [
            "Finito il lavoro…",
            "participio passato",
            "ação concluída antes da principal"
          ],
          [
            "Arrivati a Roma…",
            "participio, accordo",
            "concordância com o sujeito"
          ],
          [
            "Dopo aver letto…",
            "infinito passato",
            "depois de algo"
          ],
          [
            "Prima di rispondere…",
            "infinito presente",
            "antes de algo"
          ],
          [
            "Nel dire questo…",
            "nel + infinito",
            "no momento de"
          ],
          [
            "Una volta chiuso…",
            "participio passato",
            "uma vez que"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Terminado o trabalho, saímos."
        },
        {
          "tr": "Chegando a Roma, procuramos um hotel."
        },
        {
          "tr": "Depois de ler o contrato, assinou."
        },
        {
          "tr": "Antes de responder, pensou dois dias."
        },
        {
          "tr": "Ao dizer isso, levantou-se."
        },
        {
          "tr": "Uma vez fechada a loja, a rua se esvazia."
        }
      ]
    },
    "vocab": [
      "o particípio passado",
      "o infinitivo composto",
      "a subordinada",
      "uma vez que",
      "depois de",
      "antes de",
      "no momento de",
      "ao",
      "concordar",
      "preceder",
      "seguir",
      "deixar mais leve"
    ],
    "exercises": [
      {
        "q": "Em “Finito il lavoro, siamo usciti”, “finito” se refere a:",
        "opts": [
          "nós",
          "o trabalho",
          "a saída"
        ]
      },
      {
        "q": "Complete: “___ il lavoro, siamo usciti.” (finire, participio)"
      },
      {
        "q": "Complete: “Dopo ___ il contratto, ha firmato.” (leggere)"
      },
      {
        "q": "Depois de “dopo”, a forma encurtada leva:",
        "opts": [
          "gerundio",
          "participio",
          "infinitivo composto"
        ]
      },
      {
        "q": "“Prima di” vai com:",
        "opts": [
          "infinitivo",
          "gerundio",
          "participio"
        ]
      },
      {
        "q": "Coloque as formas.",
        "tr": "Terminado o trabalho, saímos. Depois de ler o contrato, assinou."
      },
      {
        "q": "“Depois de ler o contrato, assinou.”"
      },
      {
        "q": "Relacione as construções.",
        "tr": [
          "terminado o trabalho",
          "depois de ler",
          "antes de responder",
          "uma vez fechada"
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "Uma vez fechada a loja, a rua se esvazia em poucos minutos."
      },
      {
        "tr": "Antes de responder, pensou dois dias inteiros."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    "theme": "Gramática",
    "title": "Quando l'implicito non si può usare",
    "objectives": [
      "verificar se as duas metades têm o mesmo sujeito",
      "identificar a frase que o atalho deixa ambígua",
      "escolher a conjunção quando o atalho não serve"
    ],
    "theory": [
      {
        "h": "Uma regra sem exceções",
        "p": "A forma encurtada pega o sujeito da principal. Se os sujeitos são diferentes, a frase diz outra coisa: <em>Uscendo di casa, mia madre mi ha chiamato</em> diz que quem estava saindo era a mãe. Em português acontece o mesmo e soa igualmente mal."
      },
      {
        "h": "Duas saídas",
        "p": "Dá para dar ao gerundio o seu próprio sujeito: <em>Avendo io firmato, la pratica è partita</em>. Soa burocrático e não aparece na conversa. A outra saída é a normal: conjunção e verbo conjugado, <em>siccome</em>, <em>dato che</em>, <em>dopo che</em>, <em>mentre</em>."
      },
      {
        "h": "Os verbos impessoais são seguros",
        "p": "<em>Essendo tardi</em>, <em>piovendo</em>, <em>trattandosi di un errore</em>: não têm sujeito pessoal, então não podem entrar em conflito com nada. Por isso <em>Essendo tardi, abbiamo rimandato la riunione</em> está correto, mesmo que “nós” não seja o sujeito de <em>essere tardi</em>."
      },
      {
        "contrast": "Aqui as duas línguas coincidem ponto por ponto, e é a lição mais barata da unidade: “Saindo de casa, minha mãe me ligou” é o mesmo erro em português. A diferença está na tolerância: o português falado deixa passar esses gerúndios o tempo todo, enquanto numa prova escrita de italiano eles contam como erro de sintaxe."
      }
    ],
    "grammar": {
      "title": "Quando o atalho serve e quando não",
      "note": "A terceira coluna diz o que fazer.",
      "table": {
        "head": [
          "situação",
          "o que é permitido",
          "o que fazer"
        ],
        "rows": [
          [
            "stesso soggetto",
            "gerundio o participio",
            "o atalho serve"
          ],
          [
            "soggetti diversi",
            "congiunzione + verbo",
            "o atalho muda o sentido, é preciso conjunção"
          ],
          [
            "verbo impersonale",
            "gerundio ammesso",
            "atalho seguro"
          ],
          [
            "soggetto espresso",
            "gerundio con soggetto",
            "correto, mas burocrático"
          ],
          [
            "registro parlato",
            "meglio esplicito",
            "a conjunção soa mais natural"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Enquanto eu saía, minha mãe me ligou."
        },
        {
          "tr": "Como era tarde, adiamos a reunião."
        },
        {
          "tr": "Como era tarde, o Marco adiou a reunião."
        },
        {
          "tr": "Depois que o diretor assinou, o processo seguiu."
        },
        {
          "tr": "Terminada a reunião, o diretor foi embora."
        },
        {
          "tr": "Tendo eu assinado, o processo seguiu."
        }
      ]
    },
    "vocab": [
      "o sujeito",
      "coincidir",
      "explícito",
      "subentendido",
      "ambíguo",
      "o mal-entendido",
      "como",
      "dado que",
      "depois que",
      "enquanto",
      "referir-se a",
      "esclarecer"
    ],
    "exercises": [
      {
        "q": "Quando NÃO se pode usar a forma encurtada?",
        "opts": [
          "Quando as duas metades têm o mesmo sujeito",
          "Quando os sujeitos são diferentes",
          "Sempre se pode"
        ]
      },
      {
        "q": "Complete: “___ era tardi, Marco ha rimandato la riunione.” (conjunção de causa)"
      },
      {
        "q": "Complete: “___ uscivo, mia madre mi ha chiamato.” (conjunção de tempo)"
      },
      {
        "q": "Por que “Essendo tardi, abbiamo rimandato” está correto?",
        "opts": [
          "“essere tardi” não tem sujeito pessoal",
          "o gerundio sempre vale",
          "é um tempo passado"
        ]
      },
      {
        "q": "Quando os sujeitos são diferentes, a frase se escreve:",
        "opts": [
          "com gerundio",
          "com participio",
          "com conjunção e verbo conjugado"
        ]
      },
      {
        "q": "Coloque as conjunções.",
        "tr": "Como era tarde, o Marco adiou a reunião. Enquanto eu saía, minha mãe me ligou."
      },
      {
        "q": "“Como era tarde, adiamos a reunião.”"
      },
      {
        "q": "Quais frases estão corretas?",
        "opts": [
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Mentre uscivo, mia madre mi ha chiamato.",
          "Siccome era tardi, Marco ha rimandato la riunione."
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "Como o diretor estava de férias, o processo ficou parado."
      },
      {
        "tr": "Enquanto eu falava ao telefone, chegou o entregador."
      }
    ]
  },
  "lesson:c1-u05-test": {
    "theme": "Exame",
    "title": "Exame final do nível C1",
    "objectives": [
      "verificar o si impersonale, os verbos pronominais, os registros, a suposição e as formas não conjugadas"
    ],
    "theory": [
      {
        "p": "Doze tarefas de todo o nível C1. Aprovação a partir de 70%."
      }
    ],
    "exercises": [
      {
        "q": "“Uscendo di casa, ho incontrato Marta” significa:",
        "opts": [
          "Vou sair de casa e vou encontrar a Marta",
          "Ao sair de casa, encontrei a Marta",
          "Se eu saísse, encontraria a Marta"
        ]
      },
      {
        "q": "Complete: “___ presto, siamo andati al mare.” (finire, gerundio composto)"
      },
      {
        "q": "Complete: “Dopo ___ il contratto, ha firmato.” (leggere)"
      },
      {
        "q": "“Avendo finito presto” expressa:",
        "opts": [
          "uma ação anterior",
          "uma ação simultânea",
          "uma condição"
        ]
      },
      {
        "q": "Complete: “___ era tardi, Marco ha rimandato la riunione.”"
      },
      {
        "q": "Quando os sujeitos são diferentes, a frase se escreve:",
        "opts": [
          "com gerundio",
          "com participio",
          "com conjunção e verbo conjugado"
        ]
      },
      {
        "q": "Complete: “Non risponde: ___ ancora in riunione.” (essere, suposição)"
      },
      {
        "q": "Quais frases estão corretas?",
        "opts": [
          "Finito il lavoro, siamo usciti.",
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Dopo aver letto il contratto, ha firmato."
        ]
      },
      {
        "q": "Coloque as formas.",
        "tr": "Terminado o trabalho, saímos; como era tarde, pegamos um táxi."
      },
      {
        "q": "“Depois de ler o contrato, assinou.”"
      },
      {
        "tr": "Uma vez encerrado o processo, a repartição envia uma comunicação por escrito."
      },
      {
        "tr": "Tendo trabalhado aqui três anos, conheço bem como funciona."
      }
    ]
  }
});
