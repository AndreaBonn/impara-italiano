/* ============================================================
   Textos na língua do aluno (pt, português do Brasil) para data/core/c1-02.js
   As chaves apontam para os id da camada neutra; os arrays se
   combinam por índice, então o comprimento deve coincidir com o core.
   Quem confere é o gate de paridade em scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:c1-u04": {
    "title": "A suposição",
    "grammarNote": "sarà stanco · deve essere · magari, mica, chissà"
  },
  "lesson:c1-u04-l1": {
    "theme": "Gramática",
    "title": "Il futuro che non parla del futuro",
    "objectives": [
      "reconhecer o futuro usado como suposição",
      "usar o futuro composto para fazer suposições sobre o passado",
      "estimar uma hora, uma idade ou uma quantidade com o futuro"
    ],
    "theory": [
      {
        "h": "«Sarà stanco» não fala do futuro",
        "p": "A frase significa <b>deve estar cansado</b>, no sentido de «com certeza está», e não «estará cansado amanhã». O italiano usa o futuro para dizer que não sabe com certeza. Um futuro real e uma suposição são idênticos na forma; quem decide é o contexto."
      },
      {
        "h": "A suposição sobre o passado usa o futuro composto",
        "p": "<em>Avrà perso il treno</em> = «deve ter perdido o trem». A mesma forma que normalmente significa «terá terminado até lá» empurra aqui a suposição para trás. O italiano distingue isso sem esforço porque a frase não menciona nenhum ponto no futuro."
      },
      {
        "h": "Estimar: hora, idade, quantidade",
        "p": "<em>Saranno le tre</em>, <em>ne avrà quaranta</em>, <em>saranno dieci chilometri</em>. É o uso mais frequente na conversa do dia a dia: quando alguém dá um número que não conferiu, quase sempre o coloca no futuro."
      },
      {
        "contrast": "O português tem a mesma estrutura: «estará cansado», «terá perdido o trem» funcionam igual, forma por forma. A diferença é de registro: no Brasil esse futuro de suposição soa formal ou escrito, e na fala você diria «deve estar cansado», «deve ter perdido o trem». Em italiano, ao contrário, o futuro é o jeito normal e coloquial de supor, então não tenha medo de usá-lo na conversa. A frase concessiva <em>sarà anche bravo, ma…</em> corresponde ao nosso «pode até ser bom, mas…»."
      }
    ],
    "grammar": {
      "title": "O futuro como suposição",
      "note": "A terceira coluna diz o que a frase faz de verdade.",
      "table": {
        "head": [
          "frase",
          "forma",
          "o que faz"
        ],
        "rows": [
          [
            "Sarà stanco.",
            "futuro semplice",
            "suposição sobre o presente"
          ],
          [
            "Avrà perso il treno.",
            "futuro anteriore",
            "suposição sobre o passado"
          ],
          [
            "Saranno le tre.",
            "futuro semplice",
            "estimativa de hora ou quantidade"
          ],
          [
            "Sarà anche bravo, ma…",
            "futuro concessivo",
            "concessão irônica"
          ],
          [
            "Domani sarà a Roma.",
            "futuro semplice",
            "futuro real"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Não atende: deve estar ainda na reunião."
        },
        {
          "tr": "Que horas são? Devem ser três e pouco."
        },
        {
          "tr": "Deve ter perdido o trem, ele não costuma se atrasar."
        },
        {
          "tr": "Quantos anos ele tem? Deve ter uns quarenta."
        },
        {
          "tr": "Não o vi: deve ter saído antes."
        },
        {
          "tr": "Pode até ser bom, mas não me convence."
        }
      ]
    },
    "vocab": [
      "a suposição",
      "provavelmente",
      "presumivelmente",
      "a olho",
      "imagino",
      "deve estar",
      "deve haver",
      "quem sabe",
      "dar como certo",
      "arriscar (um palpite)",
      "ter a impressão",
      "por alto"
    ],
    "exercises": [
      {
        "q": "O que significa «Sarà stanco»?",
        "opts": [
          "Estará cansado amanhã",
          "Com certeza está cansado",
          "Estava cansado"
        ]
      },
      {
        "q": "Complete: «Non risponde: ___ ancora in riunione.» (essere, suposição)"
      },
      {
        "q": "Complete: «___ il treno, di solito non fa tardi.» (perdere, futuro composto)"
      },
      {
        "q": "«Saranno le tre» é:",
        "opts": [
          "uma estimativa da hora",
          "um plano para as três",
          "uma ordem"
        ]
      },
      {
        "q": "Com que tempo o italiano faz suposições sobre o passado?",
        "opts": [
          "imperfetto",
          "passato prossimo",
          "futuro anteriore"
        ]
      },
      {
        "q": "Use as formas de suposição.",
        "tr": "Não atende: deve estar ainda na reunião. Ou deve ter esquecido o telefone."
      },
      {
        "q": "«Devem ser três horas, ou três e pouco.»"
      },
      {
        "q": "Quais frases são suposições?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà quarant'anni."
        ]
      },
      {
        "q": "Coloque a frase em ordem."
      },
      {
        "tr": "Ele não retornou sua ligação? Deve ter tido um dia complicado."
      },
      {
        "tr": "Deve estar cansado: dirigiu oito horas."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    "theme": "Gramática",
    "title": "Dovere e potere: obbligo o probabilità",
    "objectives": [
      "distinguir o «deve» de obrigação do «deve» de suposição",
      "usar «può darsi che» com subjuntivo",
      "expressar uma expectativa com «dovrebbe»"
    ],
    "theory": [
      {
        "h": "A mesma palavra, dois trabalhos diferentes",
        "p": "<em>Devi essere puntuale</em> é obrigação. <em>Deve essere stanco</em> é suposição. A forma é a mesma e quem decide é o que está ao lado: a suposição quase sempre vem com o seu indício («ha guidato tutta la notte»), a obrigação com um prazo ou uma regra."
      },
      {
        "h": "Può darsi che pede subjuntivo",
        "p": "<em>Può darsi che non <b>abbia</b> ricevuto il messaggio.</em> Na conversa é mais frequente que <em>è possibile che</em> e soa menos formal. Depois de <em>può darsi che</em> nunca vem indicativo, nem quando o fato é evidente."
      },
      {
        "h": "Dovrebbe: expectativa, não dever",
        "p": "<em>Dovrebbe essere già arrivato</em> não diz que alguém tenha a obrigação de chegar: diz que, pelo horário, ele já deveria estar aqui. É um ponto numa escala de certeza, acima de <em>potrebbe</em> e abaixo de <em>deve</em>."
      },
      {
        "contrast": "Aqui o português joga a seu favor: «ele deve estar cansado» (suposição) e «você deve ser pontual» (obrigação) também usam a mesma forma, e você distingue as duas pelo contexto sem pensar. O italiano funciona exatamente assim. Vale o mesmo para «deveria»: «ele já deveria ter chegado» é expectativa, como <em>dovrebbe essere già arrivato</em>. O único cuidado é que, para obrigação, o brasileiro prefere «tem que», enquanto o italiano usa <em>dovere</em> sem problema."
      }
    ],
    "grammar": {
      "title": "Escala de certeza",
      "note": "Do mais seguro à exclusão.",
      "table": {
        "head": [
          "construção",
          "modo",
          "o que significa"
        ],
        "rows": [
          [
            "deve essere",
            "indicativo",
            "probabilidade alta"
          ],
          [
            "devi essere",
            "indicativo",
            "obrigação"
          ],
          [
            "potrebbe",
            "condizionale",
            "possibilidade"
          ],
          [
            "può darsi che",
            "+ congiuntivo",
            "possibilidade, registro coloquial"
          ],
          [
            "dovrebbe",
            "condizionale",
            "expectativa"
          ],
          [
            "non può essere",
            "indicativo",
            "exclusão"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Deve estar cansado: dirigiu a noite inteira."
        },
        {
          "tr": "Você tem que ser pontual, o compromisso é às nove."
        },
        {
          "tr": "Pode ser que chegue atrasado, tem trânsito."
        },
        {
          "tr": "Pode ser que ele não tenha recebido a mensagem."
        },
        {
          "tr": "A essa hora ele já deveria estar aqui."
        },
        {
          "tr": "Não pode ser ele: está de férias há uma semana."
        }
      ]
    },
    "vocab": [
      "pode ser que",
      "é provável que",
      "é pouco provável que",
      "com toda a probabilidade",
      "quase com certeza",
      "descartar",
      "a menos que",
      "salvo imprevistos",
      "presumir",
      "arriscar (um palpite)",
      "em linhas gerais",
      "se não me engano"
    ],
    "exercises": [
      {
        "q": "«Deve essere stanco» significa:",
        "opts": [
          "Tem que estar cansado por obrigação",
          "Deve estar cansado (suposição)",
          "Tem que se cansar"
        ]
      },
      {
        "q": "Complete: «___ essere stanco: ha guidato tutta la notte.»"
      },
      {
        "q": "Complete: «___ essere già arrivato a quest'ora.» (dovere, condicional)"
      },
      {
        "q": "Depois de «può darsi che» vem:",
        "opts": [
          "subjuntivo",
          "indicativo",
          "condicional"
        ]
      },
      {
        "q": "Qual frase descarta a possibilidade?",
        "opts": [
          "Potrebbe arrivare tardi.",
          "Dovrebbe essere arrivato.",
          "Non può essere lui."
        ]
      },
      {
        "q": "Use as formas.",
        "tr": "Pode ser que ele não tenha recebido a mensagem."
      },
      {
        "q": "«Deve estar cansado.» (com dovere)"
      },
      {
        "q": "Relacione as construções.",
        "tr": [
          "pode ser que",
          "deveria (expectativa)",
          "descartar",
          "salvo imprevistos"
        ]
      },
      {
        "q": "Coloque a frase em ordem."
      },
      {
        "tr": "Ele já deveria estar aqui, saiu às seis."
      },
      {
        "tr": "Pode ser que tenha mudado de ideia, acontece."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    "theme": "Gramática",
    "title": "Magari, mica, chissà",
    "objectives": [
      "distinguir os três usos de «magari»",
      "reforçar a negação com «mica»",
      "suspender o julgamento com «chissà» e «sarà…, ma»"
    ],
    "theory": [
      {
        "h": "Magari tem três sentidos, e o modo decide dois deles",
        "p": "Com indicativo: <em>magari piove</em> = «talvez chova». Com subjuntivo imperfeito: <em>magari potessi!</em> = «quem dera eu pudesse!». Sozinho, como resposta: <em>Vieni? Magari!</em> = «quem dera!». Três coisas diferentes, uma palavra só."
      },
      {
        "h": "Mica reforça a negação",
        "p": "<em>Non è mica finita</em> não é «não terminou», mas «não terminou de jeito nenhum», com um tom de réplica ao que o outro acabou de dar como certo. Vem depois do verbo e é exclusivamente da língua falada."
      },
      {
        "h": "Suspender o julgamento: chissà e sarà…, ma",
        "p": "<em>Chissà se si sono ricordati</em> diz abertamente que não sabemos. <em>Sarà, ma io non ci credo</em> é o jeito educado de discordar: primeiro se dá razão ao outro, depois se segue com a própria opinião. Muito frequente e muito italiano."
      },
      {
        "contrast": "O português cobre os três sentidos com palavras diferentes: «talvez» para o primeiro e «quem dera» para o segundo, e este último espelha exatamente o italiano, porque também pede o imperfeito do subjuntivo («quem dera eu pudesse»). O terceiro, o <em>magari</em> solto como resposta entusiasmada, também tem forma curta em português: «Você vem? — Quem dera!». Para <em>mica</em>, o mais próximo é «coisa nenhuma» ou «de jeito nenhum» («não acabou coisa nenhuma»)."
      }
    ],
    "grammar": {
      "title": "Palavras que modalizam a frase",
      "note": "A segunda coluna diz o que a palavra faz com a frase.",
      "table": {
        "head": [
          "palavra",
          "o que faz",
          "exemplo"
        ],
        "rows": [
          [
            "magari + indicativo",
            "talvez, provavelmente",
            "Magari piove."
          ],
          [
            "magari + congiuntivo imperfetto",
            "desejo irreal",
            "Magari potessi!"
          ],
          [
            "magari (da solo)",
            "quem dera!",
            "Vieni? Magari!"
          ],
          [
            "mica",
            "reforça a negação",
            "Non è mica finita."
          ],
          [
            "chissà",
            "admitir que não se sabe",
            "Chissà se arriva."
          ],
          [
            "sarà…, ma",
            "discordância educada",
            "Sarà, ma non ci credo."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Talvez chova, melhor levar o guarda-chuva."
        },
        {
          "tr": "Quem dera eu também pudesse ir!"
        },
        {
          "tr": "Talvez a gente se veja amanhã, te escrevo."
        },
        {
          "tr": "Não terminou coisa nenhuma, faltam dez minutos."
        },
        {
          "tr": "Vai saber se eles lembraram."
        },
        {
          "tr": "Pode até ser, mas eu não acredito."
        }
      ]
    },
    "vocab": [
      "talvez, quem dera",
      "de jeito nenhum",
      "quem sabe",
      "não faço ideia",
      "claro que sim",
      "olha, veja",
      "pode até ser",
      "vai saber",
      "se for o caso",
      "nunca se sabe",
      "sabe-se lá",
      "pode ser verdade, mas"
    ],
    "exercises": [
      {
        "q": "«Magari piove» significa:",
        "opts": [
          "Tomara que chova",
          "Talvez chova",
          "Se chovesse"
        ]
      },
      {
        "q": "Complete: «Non è ___ finita, mancano dieci minuti.»"
      },
      {
        "q": "Complete: «___ se si sono ricordati.»"
      },
      {
        "q": "«Magari potessi venire!» é:",
        "opts": [
          "uma suposição",
          "uma proposta",
          "um desejo irreal"
        ]
      },
      {
        "q": "«Mica» reforça:",
        "opts": [
          "a negação",
          "a pergunta",
          "a ordem"
        ]
      },
      {
        "q": "Use as palavras.",
        "tr": "Não terminou coisa nenhuma, faltam dez minutos. Vai saber se eles perceberam."
      },
      {
        "q": "«Quem dera eu também pudesse ir!»"
      },
      {
        "q": "Quais palavras indicam incerteza?",
        "opts": [
          "chissà",
          "boh",
          "vai a sapere",
          "certamente"
        ]
      },
      {
        "q": "Coloque a frase em ordem."
      },
      {
        "tr": "Não está nada certo que ele venha, ontem não tinha certeza."
      },
      {
        "tr": "Vai saber se perceberam, ninguém disse nada."
      }
    ]
  },
  "lesson:c1-u04-test": {
    "theme": "Gramática",
    "title": "Teste — A suposição",
    "exercises": [
      {
        "q": "«Sarà stanco» significa:",
        "opts": [
          "Estará cansado amanhã",
          "Com certeza está cansado",
          "Costuma estar cansado"
        ]
      },
      {
        "q": "«Saranno le tre» é:",
        "opts": [
          "uma estimativa da hora",
          "um plano para as três",
          "uma ordem"
        ]
      },
      {
        "q": "Complete: «Non risponde: ___ in riunione.» (essere, suposição)"
      },
      {
        "q": "Complete: «___ il treno, di solito non fa tardi.» (perdere)"
      },
      {
        "q": "Complete: «Non è ___ finita, mancano dieci minuti.»"
      },
      {
        "q": "A suposição sobre o passado se expressa com:",
        "opts": [
          "imperfetto",
          "condizionale",
          "futuro anteriore"
        ]
      },
      {
        "q": "Quais frases são suposições?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà perso il treno."
        ]
      },
      {
        "q": "Use as formas.",
        "tr": "Não atende: deve estar na reunião. Pode ser que ligue mais tarde."
      },
      {
        "tr": "Deve ter surgido alguma coisa, normalmente ele avisa."
      },
      {
        "tr": "A essa hora ele já deveria estar no escritório."
      }
    ]
  }
});
