/* ============================================================
   Textos na língua do aluno (pt, português do Brasil) para data/core/b2-03.js
   As chaves apontam para os id da camada neutra; os arrays se
   combinam por índice, então o comprimento deve coincidir com o core.
   Quem confere é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:b2-u06": {
    "title": "Concessão e conectores",
    "grammarNote": "benché · anche se · tuttavia, anzi, del resto"
  },
  "lesson:b2-u06-l1": {
    "theme": "Gramática",
    "title": "Benché, sebbene, nonostante",
    "objectives": [
      "usar o subjuntivo depois das conjunções concessivas",
      "distinguir «nonostante + oração» de «nonostante + substantivo»",
      "ajustar o registro à situação"
    ],
    "theory": [
      {
        "h": "Todas estas conjunções pedem subjuntivo",
        "p": "<em>Benché</em>, <em>sebbene</em>, <em>nonostante</em>, <em>malgrado</em>, <em>per quanto</em>, <em>quantunque</em>: depois de cada uma vem o subjuntivo, <em>benché <b>fosse</b> tardi</em>. É uma das poucas regras italianas sem exceções, então vale a pena aprendê-la inteira."
      },
      {
        "h": "Nonostante tem duas caras",
        "p": "Diante de uma oração: <em>nonostante <b>avesse</b> ragione</em> (subjuntivo). Diante de um substantivo: <em>nonostante <b>la pioggia</b></em>, sem verbo e sem modo. A segunda é mais curta e mais frequente na escrita."
      },
      {
        "h": "Registro: elas não são intercambiáveis",
        "p": "<em>Quantunque</em> é livresco e, falado, soa estranho. <em>Malgrado</em> é neutro; <em>benché</em> e <em>sebbene</em> ficam um pouco acima de <em>anche se</em>. Na conversa você vai ouvir sobretudo <em>anche se</em>, que leva indicativo e é o tema da próxima lição."
      },
      {
        "contrast": "O português também pede subjuntivo depois de «embora» e «ainda que» («embora <b>fosse</b> tarde»), então aqui você sai na frente. A armadilha está em <em>anche se</em>: ele lembra «mesmo que» e «ainda que», que em português pedem sempre subjuntivo, mas em italiano, para um fato real, leva indicativo: <em>anche se piove</em>, não <em>anche se piova</em>. Pense em «mesmo chovendo», «apesar de estar chovendo»."
      }
    ],
    "grammar": {
      "title": "Conjunções concessivas",
      "note": "A conjunção à esquerda, o modo que ela exige à direita.",
      "table": {
        "head": [
          "conjunção",
          "modo",
          "exemplo"
        ],
        "rows": [
          [
            "benché / sebbene",
            "subjuntivo",
            "benché fosse tardi"
          ],
          [
            "nonostante / malgrado",
            "subjuntivo, ou + substantivo",
            "nonostante la pioggia"
          ],
          [
            "per quanto",
            "subjuntivo",
            "per quanto ci provi"
          ],
          [
            "anche se",
            "indicativo",
            "anche se piove"
          ],
          [
            "pur + gerundio",
            "sem sujeito",
            "pur avendo ragione"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Embora fosse tarde, saímos mesmo assim."
        },
        {
          "tr": "Embora soubesse, não disse nada."
        },
        {
          "tr": "Apesar da chuva, a feira continuou aberta."
        },
        {
          "tr": "Embora tivesse razão, pediu desculpas."
        },
        {
          "tr": "Apesar de tudo, o projeto seguiu em frente."
        },
        {
          "tr": "Por mais que eu tente, não consigo."
        }
      ]
    },
    "vocab": [
      "embora",
      "embora (registro alto)",
      "apesar de, embora",
      "apesar de",
      "por mais que",
      "conquanto (livresco)",
      "mesmo sendo",
      "mesmo assim",
      "de qualquer modo",
      "em todo caso",
      "a despeito de",
      "não obstante"
    ],
    "exercises": [
      {
        "q": "Que modo vem depois de «benché»?",
        "opts": [
          "indicativo",
          "subjuntivo",
          "condicional"
        ]
      },
      {
        "q": "Complete: «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Complete: «Sebbene lo ___, non ha detto niente.» (sapere)"
      },
      {
        "q": "«Nonostante la pioggia» é:",
        "opts": [
          "nonostante + substantivo",
          "nonostante + subjuntivo",
          "um erro"
        ]
      },
      {
        "q": "Qual conjunção é a mais livresca?",
        "opts": [
          "anche se",
          "benché",
          "quantunque"
        ]
      },
      {
        "q": "Use o subjuntivo.",
        "tr": "Embora fosse tarde, saímos; embora chovesse, chegamos."
      },
      {
        "q": "«Embora fosse tarde, saímos.»"
      },
      {
        "q": "Relacione as conjunções.",
        "tr": [
          "embora",
          "apesar de",
          "por mais que",
          "mesmo sendo"
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "Embora eu tivesse todos os documentos, o processo ficou parado três meses."
      },
      {
        "tr": "Apesar da chuva, fomos ao mercado mesmo assim."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    "theme": "Gramática",
    "title": "Anche se e suas armadilhas",
    "objectives": [
      "usar «anche se» com indicativo",
      "distinguir «pur + gerundio» de «pur di + infinitivo»",
      "expressar uma hipótese com «anche se» + subjuntivo imperfeito"
    ],
    "theory": [
      {
        "h": "Anche se leva indicativo, não subjuntivo",
        "p": "É a única concessiva que NÃO o leva: <em>anche se <b>piove</b>, esco</em>. O erro <em>anche se piova</em> é frequentíssimo entre quem aprendeu bem a lição anterior."
      },
      {
        "h": "…a não ser que você fale de uma hipótese",
        "p": "<em>Anche se lo <b>sapessi</b>, non te lo direi</em>: o subjuntivo imperfeito volta, mas não por causa de <em>anche se</em>, e sim porque ali dentro há um período hipotético do segundo tipo. O teste: a frase fala de algo irreal?"
      },
      {
        "h": "Pur + gerundio e pur di + infinitivo são coisas diferentes",
        "p": "<em>Pur avendo ragione</em> = «mesmo tendo razão» (concessão). <em>Pur di finire</em> = «só para terminar, custe o que custar» (finalidade, com nuance de sacrifício). Parecem iguais, significam o contrário e se confundem o tempo todo."
      },
      {
        "contrast": "Em português, «embora» e «mesmo que» levam subjuntivo tanto para um fato quanto para uma hipótese («mesmo que chova», «mesmo que chovesse»), por isso o reflexo de um brasileiro é pôr subjuntivo depois de <em>anche se</em>. Em italiano o subjuntivo só aparece na hipótese. Já <em>pur di</em> não tem equivalente exato: «contanto que» parece próximo, mas é condição, não finalidade. Traduza por «só para», «para conseguir», «a qualquer custo»; em italiano a expressão é frequente e não soa enfática."
      }
    ],
    "grammar": {
      "title": "Anche se e construções vizinhas",
      "note": "Atenção à segunda e à quarta linha: são parecidas.",
      "table": {
        "head": [
          "construção",
          "significado",
          "exemplo"
        ],
        "rows": [
          [
            "anche se + indicativo",
            "um fato",
            "anche se piove, esco"
          ],
          [
            "anche se + subj. imperf.",
            "uma hipótese",
            "anche se lo sapessi, non lo direi"
          ],
          [
            "pur + gerundio",
            "mesmo sujeito",
            "pur avendo ragione, ha taciuto"
          ],
          [
            "pur di + infinitivo",
            "finalidade, não concessão",
            "pur di finire, ha lavorato di notte"
          ],
          [
            "neanche se",
            "negação reforçada",
            "neanche se me lo chiedessero"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Mesmo chovendo, eu saio assim mesmo."
        },
        {
          "tr": "Mesmo que eu soubesse, não te diria."
        },
        {
          "tr": "Mesmo tendo razão, deixou para lá."
        },
        {
          "tr": "Só para terminar, trabalhou a noite toda."
        },
        {
          "tr": "Nem que me pedissem eu faria isso."
        },
        {
          "tr": "Por mais difícil que seja, vale a pena."
        }
      ]
    },
    "vocab": [
      "mesmo que, ainda que",
      "nem que, nem mesmo se",
      "mesmo (+ gerúndio)",
      "só para, a qualquer custo",
      "deixar para lá",
      "valer a pena",
      "se virar",
      "desistir, renunciar",
      "insistir",
      "à custa de",
      "também, até",
      "e no entanto"
    ],
    "exercises": [
      {
        "q": "Que modo vem depois de «anche se» quando se fala de um fato?",
        "opts": [
          "indicativo",
          "subjuntivo",
          "tanto faz"
        ]
      },
      {
        "q": "Complete: «___ piove, esco lo stesso.»"
      },
      {
        "q": "Complete: «___ ragione, ha lasciato perdere.» (pur + avere)"
      },
      {
        "q": "«Pur di finire» significa:",
        "opts": [
          "embora tenha terminado",
          "só para terminar, custe o que custar",
          "tendo terminado"
        ]
      },
      {
        "q": "Quando aparece o subjuntivo imperfeito depois de «anche se»?",
        "opts": [
          "sempre",
          "nunca",
          "quando a frase é uma hipótese"
        ]
      },
      {
        "q": "Coloque a conjunção.",
        "tr": "Mesmo chovendo, eu saio; mesmo que eu soubesse, não diria."
      },
      {
        "q": "«Mesmo chovendo, eu saio assim mesmo.»"
      },
      {
        "q": "Quais frases estão corretas?",
        "opts": [
          "Anche se piove, esco.",
          "Anche se piova, esco.",
          "Pur piovendo, esco."
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "Mesmo tendo hora marcada, esperei duas horas."
      },
      {
        "tr": "Mesmo tendo razão, preferi deixar para lá."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    "theme": "Gramática",
    "title": "Tuttavia, anzi, del resto",
    "objectives": [
      "ligar frases com um conector textual",
      "distinguir «anzi» de um contraste comum",
      "escolher o registro: «pertanto» ou «quindi»"
    ],
    "theory": [
      {
        "h": "Estas palavras não trazem conteúdo, e sim uma instrução",
        "p": "<em>Tuttavia</em> diz: «o que vem agora vai contra a corrente do que você acabou de ler». <em>Del resto</em> diz: «aliás, era de se esperar». Sem elas o texto é uma lista de frases e o leitor precisa adivinhar como elas se encaixam."
      },
      {
        "h": "Anzi é uma correção, não um contraste",
        "p": "<em>Non mi ha disturbato, <b>anzi</b> mi ha fatto piacere.</em> <em>Anzi</em> não contradiz o que veio antes: empurra a ideia mais longe na mesma direção. O português «pelo contrário» se aproxima; muitas vezes «aliás» ou «até» encaixam melhor."
      },
      {
        "h": "Registro: pertanto ou quindi",
        "p": "<em>Pertanto</em> e <em>peraltro</em> pertencem à linguagem administrativa e, falados, soam rígidos. Na fala se diz <em>quindi</em>, <em>allora</em>, <em>comunque</em>. Regra prática: por escrito a uma repartição, a primeira coluna; falando, a segunda."
      },
      {
        "contrast": "Dois falsos amigos de uma vez. <em>In effetti</em> lembra «com efeito» e serve para dar razão a alguém: «pensando bem, é verdade». Não introduz uma consequência; para isso existe <em>di conseguenza</em>. E <em>eventualmente</em> engana o brasileiro: aqui «eventualmente» costuma querer dizer «de vez em quando», enquanto o italiano significa «se for o caso, caso necessário». Os dois soam familiares e os dois dizem outra coisa."
      }
    ],
    "grammar": {
      "title": "Conectores textuais",
      "note": "A terceira coluna dá o registro ou a armadilha.",
      "table": {
        "head": [
          "conector",
          "o que faz",
          "nota"
        ],
        "rows": [
          [
            "tuttavia",
            "contraste",
            "registro alto"
          ],
          [
            "anzi",
            "correção para cima",
            "«pelo contrário, aliás»"
          ],
          [
            "del resto",
            "era de se esperar",
            "falado e escrito"
          ],
          [
            "pertanto",
            "conclusão",
            "administrativo"
          ],
          [
            "semmai",
            "se for o caso, no máximo",
            "suaviza"
          ],
          [
            "in effetti",
            "dar razão",
            "não introduz consequência"
          ]
        ]
      },
      "examples": [
        {
          "tr": "O preço é alto; no entanto, a qualidade o justifica."
        },
        {
          "tr": "Não me incomodou, pelo contrário: gostei."
        },
        {
          "tr": "Aliás, era de se esperar."
        },
        {
          "tr": "Portanto, o requerimento deve ser refeito."
        },
        {
          "tr": "Se for o caso, retomamos amanhã."
        },
        {
          "tr": "Pensando bem, ele tinha razão."
        }
      ]
    },
    "vocab": [
      "no entanto, todavia",
      "pelo contrário, aliás",
      "aliás, de resto",
      "portanto",
      "se for o caso, no máximo",
      "pensando bem, de fato",
      "por outro lado",
      "além disso (formal)",
      "e no entanto",
      "antes, ou melhor",
      "então, portanto",
      "em resumo"
    ],
    "exercises": [
      {
        "q": "«Anzi» significa:",
        "opts": [
          "no entanto",
          "pelo contrário, aliás",
          "portanto"
        ]
      },
      {
        "q": "Complete: «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "Complete: «Il prezzo è alto; ___ la qualità lo giustifica.»"
      },
      {
        "q": "«In effetti» significa:",
        "opts": [
          "por consequência",
          "se for o caso",
          "pensando bem, é verdade"
        ]
      },
      {
        "q": "Qual conector é administrativo?",
        "opts": [
          "pertanto",
          "quindi",
          "allora"
        ]
      },
      {
        "q": "Coloque os conectores.",
        "tr": "O preço é alto; no entanto, a qualidade o justifica. Aliás, era de se esperar."
      },
      {
        "q": "«Não me incomodou, pelo contrário: gostei.»"
      },
      {
        "q": "Relacione os conectores.",
        "tr": [
          "no entanto",
          "pelo contrário",
          "portanto",
          "se for o caso"
        ]
      },
      {
        "q": "Ordene a frase."
      },
      {
        "tr": "O requerimento chegou a tempo; no entanto, faltava uma assinatura."
      },
      {
        "tr": "Não é um problema, pelo contrário: é a coisa mais simples de todas."
      }
    ]
  },
  "lesson:b2-u06-test": {
    "theme": "Prova",
    "title": "Prova final do nível B2",
    "objectives": [
      "verificar o subjuntivo, as condicionais, o discurso indireto, a concessão e os conectores"
    ],
    "theory": [
      {
        "p": "Doze tarefas de todo o nível B2. Aprovação a partir de 70%."
      }
    ],
    "exercises": [
      {
        "q": "Que modo vem depois de «sebbene»?",
        "opts": [
          "indicativo",
          "subjuntivo",
          "condicional"
        ]
      },
      {
        "q": "Que modo vem depois de «anche se» (fato)?",
        "opts": [
          "indicativo",
          "subjuntivo",
          "condicional"
        ]
      },
      {
        "q": "Complete: «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Complete: «___ piove, esco lo stesso.»"
      },
      {
        "q": "Complete: «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "«Pur di finire» significa:",
        "opts": [
          "embora tenha terminado",
          "tendo terminado",
          "só para terminar, custe o que custar"
        ]
      },
      {
        "q": "Quais frases estão corretas?",
        "opts": [
          "Benché fosse tardi, siamo usciti.",
          "Anche se piove, esco.",
          "Anche se piova, esco."
        ]
      },
      {
        "q": "Discurso indireto. Complete: «Mi ha detto che ___ il giorno dopo.» (venire)"
      },
      {
        "tr": "Se tivessem me ouvido, o problema teria sido resolvido."
      },
      {
        "q": "Coloque as formas.",
        "tr": "Embora fosse tarde, saímos; embora chovesse, não paramos."
      },
      {
        "tr": "Embora tivesse apresentado tudo, pediram a ele outro documento."
      },
      {
        "tr": "Mesmo custando mais, no fim compensa."
      }
    ]
  }
});
