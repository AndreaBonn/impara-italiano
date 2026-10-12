/* ============================================================
   Textos na língua do aluno (pt, português do Brasil) para data/core/c2-02.js
   As chaves remetem aos id da camada neutra; os arrays se unem
   por índice, então o comprimento deve coincidir com o core.
   Quem confere é o gate de paridade em scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:c2-u04": {
    "title": "Relativos e regência",
    "grammarNote": "a cui · il che · riuscire a, tentare di"
  },
  "lesson:c2-u04-l1": {
    "theme": "Gramática",
    "title": "Cui, il quale e i loro obblighi",
    "objectives": [
      "usar «cui» com a preposição correta",
      "expressar posse com «il cui»",
      "desfazer uma ambiguidade com «il quale»"
    ],
    "theory": [
      {
        "h": "Che não admite preposição",
        "p": "<em>La collega <b>che</b> ho visto</em> está certo, mas <em>la collega a che ho scritto</em> não existe. Quando é preciso uma preposição, <em>che</em> dá lugar a <em>cui</em>: <em>a cui</em>, <em>di cui</em>, <em>in cui</em>, <em>con cui</em>. Essa é a regra inteira, e ela não tem exceção."
      },
      {
        "h": "Qual preposição? A que o verbo exige",
        "p": "<em>Scrivere <b>a</b> qualcuno</em> dá <em>la collega <b>a cui</b> ho scritto</em>. <em>Parlare <b>di</b> qualcosa</em> dá <em>il progetto <b>di cui</b> parlavamo</em>. Não é a oração relativa que escolhe a preposição: quem a traz é o verbo, e por isso a terceira lição desta unidade não pode ser pulada."
      },
      {
        "h": "Il cui é posse e concorda com a coisa possuída",
        "p": "<em>L'autore <b>il cui</b> libro hai letto</em>: o artigo vai com <em>libro</em>, não com o autor. Daí <em>la scrittrice <b>il cui</b> romanzo</em> e <em>l'autore <b>la cui</b> opera</em>. O contrário do que a intuição sugere."
      },
      {
        "contrast": "Na norma culta, o português faz a mesma coisa: «a colega <b>a quem</b> escrevi», «o projeto <b>de que</b> falávamos». A estrutura vem de graça. A armadilha está na fala: no Brasil a preposição costuma cair («o projeto que a gente falava»), e em italiano isso é erro, porque <em>di cui</em> é obrigatório. No possessivo, «cujo» concorda com a coisa possuída, como em italiano, mas sem artigo («o autor cujo livro você leu»). Em italiano o artigo é obrigatório: <em>il cui libro</em>, nunca <em>cui libro</em>."
      }
    ],
    "grammar": {
      "title": "Pronomes relativos",
      "note": "A terceira coluna diz quando se usa a forma.",
      "table": {
        "head": [
          "forma",
          "o que faz",
          "quando"
        ],
        "rows": [
          [
            "che",
            "soggetto o oggetto",
            "sem preposição"
          ],
          [
            "a cui / di cui / in cui",
            "con preposizione",
            "quando o verbo exige preposição"
          ],
          [
            "il cui / la cui",
            "possesso",
            "posse"
          ],
          [
            "il quale / la quale",
            "toglie l'ambiguità",
            "quando «che» seria ambíguo"
          ],
          [
            "dove",
            "solo luogo",
            "só lugar"
          ]
        ]
      },
      "examples": [
        {
          "tr": "A colega a quem escrevi não respondeu."
        },
        {
          "tr": "O projeto de que falávamos foi aprovado."
        },
        {
          "tr": "O autor cujo livro você leu vem amanhã."
        },
        {
          "tr": "A irmã do diretor, que trabalha em Milão, chega hoje."
        },
        {
          "tr": "A cidade em que nasci já não existe."
        },
        {
          "tr": "As pessoas com quem trabalho são muito boas."
        }
      ]
    },
    "vocab": [
      "o pronome relativo",
      "a preposição",
      "o antecedente",
      "a quem, de que",
      "o qual",
      "cujo",
      "a ambiguidade",
      "referir-se",
      "precisar, especificar",
      "reger",
      "obrigatório",
      "opcional"
    ],
    "exercises": [
      {
        "q": "Como se diz «a colega a quem escrevi»?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Complete: «La collega a ___ ho scritto non ha risposto.»"
      },
      {
        "q": "Complete: «L'autore ___ libro hai letto viene domani.» (posse)"
      },
      {
        "q": "«Il quale» serve para:",
        "opts": [
          "encurtar a frase",
          "expressar posse",
          "desfazer uma ambiguidade"
        ]
      },
      {
        "q": "Em «il cui», o artigo concorda com:",
        "opts": [
          "a coisa possuída",
          "o possuidor",
          "o sujeito da frase"
        ]
      },
      {
        "q": "Coloque os pronomes.",
        "tr": "A colega a quem escrevi não respondeu. O autor cujo livro você leu vem amanhã."
      },
      {
        "q": "«O projeto de que falávamos foi aprovado.»"
      },
      {
        "q": "Quais frases estão corretas?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "O colega com quem dividi a sala durante anos vai se aposentar."
      },
      {
        "tr": "O projeto de que falávamos ontem foi aprovado hoje de manhã."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    "theme": "Gramática",
    "title": "Chi, il che, quanto",
    "objectives": [
      "usar «chi» com o valor de «quem»",
      "comentar a frase inteira com «il che»",
      "substituir «ciò che» por «quanto»"
    ],
    "theory": [
      {
        "h": "Chi significa «quem» e não precisa de antecedente",
        "p": "<em>Chi arriva tardi aspetta fuori</em> = «quem chega atrasado espera do lado de fora». O verbo vai sempre no singular, mesmo quando se fala de muitas pessoas, e essa é a única coisa em que se pode errar aqui."
      },
      {
        "h": "Il che comenta a frase anterior inteira",
        "p": "<em>Ha rifiutato l'incarico, <b>il che</b> mi preoccupa</em>: o que preocupa é a recusa, não o cargo. Sem o <em>il</em>, o pronome apontaria para o último substantivo e a frase diria outra coisa. A variante <em>cosa che</em> é um pouco menos formal e faz o mesmo."
      },
      {
        "h": "Quanto no lugar de ciò che",
        "p": "<em>Non credo a <b>quanto</b> mi hai raccontato</em>. Mais curto e de registro mais alto que <em>ciò che</em>, muito frequente na escrita. Na conversa se ouve mais <em>quello che</em>, igualmente correto."
      },
      {
        "contrast": "O português tem «o que» para o mesmo trabalho que <em>il che</em> («recusou o cargo, o que me preocupa»), até com o artigo no mesmo lugar, então a estrutura soa natural. E «quem» funciona como <em>chi</em>, também com o verbo no singular. É uma das unidades em que o brasileiro paga menos pedágio; até <em>c'è chi</em> tem equivalente direto: «há quem», ou, na fala, «tem gente que»."
      }
    ],
    "grammar": {
      "title": "Pronomes sem antecedente",
      "note": "A segunda coluna diz a que a forma se refere.",
      "table": {
        "head": [
          "forma",
          "a que se refere",
          "exemplo"
        ],
        "rows": [
          [
            "chi",
            "a uma pessoa, quem",
            "Chi arriva tardi aspetta fuori."
          ],
          [
            "il che",
            "à frase anterior inteira",
            "Ha rifiutato, il che mi preoccupa."
          ],
          [
            "cosa che",
            "o mesmo, registro mais baixo",
            "Ha risposto male, cosa che non gli somiglia."
          ],
          [
            "quanto",
            "ao que foi dito",
            "Non credo a quanto mi hai detto."
          ],
          [
            "c'è chi",
            "a um grupo indefinido",
            "C'è chi dice che sia un errore."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Quem chega atrasado espera do lado de fora."
        },
        {
          "tr": "Recusou o cargo, o que me preocupa."
        },
        {
          "tr": "Não acredito no que você me contou."
        },
        {
          "tr": "Há quem diga que é um erro."
        },
        {
          "tr": "Respondeu mal, coisa que não é do feitio dele."
        },
        {
          "tr": "O que aconteceu ontem fica entre nós."
        }
      ]
    },
    "vocab": [
      "quem",
      "o que (comentando a frase)",
      "coisa que",
      "o que",
      "aquilo que",
      "há quem",
      "a frase inteira",
      "o comentário",
      "preocupar",
      "ser do feitio de",
      "ficar entre nós",
      "resumir"
    ],
    "exercises": [
      {
        "q": "«Chi arriva tardi aspetta fuori» significa:",
        "opts": [
          "Quem chega? Espera lá fora",
          "Quem chega atrasado espera do lado de fora",
          "Chegou atrasado e está esperando"
        ]
      },
      {
        "q": "Complete: «___ arriva tardi aspetta fuori.»"
      },
      {
        "q": "Complete: «Ha rifiutato l'incarico, ___ mi preoccupa.»"
      },
      {
        "q": "«Il che» se refere a:",
        "opts": [
          "a frase anterior inteira",
          "o último substantivo",
          "o sujeito"
        ]
      },
      {
        "q": "Depois de «chi», o verbo vai no:",
        "opts": [
          "plural",
          "tanto faz",
          "singular"
        ]
      },
      {
        "q": "Coloque as formas.",
        "tr": "Quem chega atrasado espera do lado de fora. Recusou o cargo, o que me preocupa."
      },
      {
        "q": "«Quem chega atrasado espera do lado de fora.»"
      },
      {
        "q": "Relacione as formas.",
        "tr": [
          "quem",
          "o que (a frase toda)",
          "aquilo que",
          "há quem"
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "Recusou sem dar explicações, o que me preocupa."
      },
      {
        "tr": "Há quem diga que é um erro, mas ninguém põe isso por escrito."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    "theme": "Gramática",
    "title": "Reggenze che non si indovinano",
    "objectives": [
      "escolher a preposição que o verbo exige",
      "distinguir «riuscire a» de «tentare di»",
      "memorizar as regências que não seguem lógica nenhuma"
    ],
    "theory": [
      {
        "h": "Isto é uma lista, não uma regra",
        "p": "<em>Riuscire <b>a</b></em>, <em>provare <b>a</b></em>, mas <em>tentare <b>di</b></em>, embora signifiquem quase a mesma coisa. <em>Cominciare <b>a</b></em>, mas <em>finire <b>di</b></em>. Nada disso se deduz do significado, e toda tentativa de deduzir termina em erro: é preciso aprender o verbo com a preposição, como uma palavra só."
      },
      {
        "h": "Os quatro que mais se confundem",
        "p": "<em>Rendersi conto <b>di</b></em> e <em>accorgersi <b>di</b></em>, <em>convincere <b>a</b></em> contra <em>dissuadere <b>da</b></em>, <em>tenere <b>a</b></em> no sentido de «fazer questão de», <em>badare <b>a</b></em> no sentido de «tomar cuidado com». Esses quatro voltam em todos os textos e em todas as provas."
      },
      {
        "h": "A preposição fica na relativa",
        "p": "Se se diz <em>tenere a qualcosa</em>, a relativa é <em>la cosa <b>a cui</b> tengo</em>. Por isso esta lição está na mesma unidade que a primeira: sem a regência não se constrói um <em>cui</em> correto, por mais que se saiba a regra."
      },
      {
        "contrast": "O português tem a mesma arbitrariedade («conseguir <b>Ø</b> terminar», «tentar <b>Ø</b> explicar», «dar-se conta <b>de</b>»), e é aí que está a armadilha: o português muitas vezes não põe nada onde o italiano exige uma preposição. «Consegui terminar» se diz <em>sono riuscito <b>a</b> finire</em>, e «tentei explicar para ele» se diz <em>ho tentato <b>di</b> spiegarglielo</em>. Onde o português se cala, o italiano quase sempre pede alguma coisa."
      }
    ],
    "grammar": {
      "title": "Regência verbal",
      "note": "A segunda coluna é a preposição que o verbo exige.",
      "table": {
        "head": [
          "verbos",
          "preposição",
          "significado"
        ],
        "rows": [
          [
            "riuscire a, provare a",
            "a",
            "conseguir, experimentar"
          ],
          [
            "tentare di, smettere di",
            "di",
            "tentar, parar de"
          ],
          [
            "rendersi conto di",
            "di",
            "dar-se conta de"
          ],
          [
            "convincere a, persuadere a",
            "a",
            "convencer a"
          ],
          [
            "dissuadere da",
            "da",
            "dissuadir de"
          ],
          [
            "tenere a, badare a",
            "a",
            "fazer questão de, tomar cuidado com"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Consegui terminar a tempo."
        },
        {
          "tr": "Tentei explicar para ele duas vezes."
        },
        {
          "tr": "Percebi o erro tarde demais."
        },
        {
          "tr": "Convenceram-no a ficar mais um ano."
        },
        {
          "tr": "Faço questão de dizer isso logo."
        },
        {
          "tr": "Só ontem parou de reclamar."
        }
      ]
    },
    "vocab": [
      "conseguir",
      "tentar",
      "experimentar",
      "dar-se conta de",
      "perceber, notar",
      "convencer a",
      "dissuadir de",
      "fazer questão de",
      "tomar cuidado com",
      "confiar em",
      "renunciar a",
      "parar de"
    ],
    "exercises": [
      {
        "q": "Qual está correto?",
        "opts": [
          "riuscire di finire",
          "riuscire a finire",
          "riuscire finire"
        ]
      },
      {
        "q": "Complete: «Sono riuscito ___ finire in tempo.»"
      },
      {
        "q": "Complete: «Ho tentato ___ spiegarglielo due volte.»"
      },
      {
        "q": "«Rendersi conto» vai com:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Que preposição «dissuadere» pede?",
        "opts": [
          "da",
          "a",
          "di"
        ]
      },
      {
        "q": "Coloque as preposições.",
        "tr": "Consegui terminar a tempo, mas tentei explicar para ele duas vezes."
      },
      {
        "q": "«Percebi o erro tarde demais.»"
      },
      {
        "q": "Quais combinações estão corretas?",
        "opts": [
          "tentare a spiegare",
          "tentare di spiegare",
          "provare a spiegare"
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "Só me dei conta do erro quando o processo já tinha saído."
      },
      {
        "tr": "Faço questão de dizer logo: não concordo com esta decisão."
      }
    ]
  },
  "lesson:c2-u04-test": {
    "theme": "Prova",
    "title": "Prova final do nível C2",
    "objectives": [
      "verificar os particípios, os plurais e a derivação, os registros, os relativos e a regência"
    ],
    "theory": [
      {
        "p": "Doze tarefas de todo o nível C2. Aprovação a partir de 70%. É a última prova do curso."
      }
    ],
    "exercises": [
      {
        "q": "Como se diz «a colega a quem escrevi»?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Complete: «La collega a ___ ho scritto non ha risposto.»"
      },
      {
        "q": "Complete: «L'autore ___ libro hai letto viene domani.»"
      },
      {
        "q": "«Il che» se refere a:",
        "opts": [
          "a frase anterior inteira",
          "o último substantivo",
          "o sujeito"
        ]
      },
      {
        "q": "Complete: «Ha rifiutato l'incarico, ___ mi preoccupa.»"
      },
      {
        "q": "«Rendersi conto» vai com:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Complete: «Sono riuscito ___ finire in tempo.»"
      },
      {
        "q": "Quais frases estão corretas?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Coloque as formas.",
        "tr": "A colega a quem escrevi não respondeu, o que me parece estranho."
      },
      {
        "q": "«Quem chega atrasado espera do lado de fora.»"
      },
      {
        "tr": "O autor cujo livro lemos em aula vai dar uma palestra."
      },
      {
        "tr": "Só depois me dei conta de como aquela reunião tinha sido importante."
      }
    ]
  }
});
