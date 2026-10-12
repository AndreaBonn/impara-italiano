/* ============================================================
   Textos na língua do aluno (pt, português do Brasil) para data/core/a1-02.js
   As chaves remetem aos ids da camada neutra; os arrays se unem
   por índice, então o comprimento deles deve coincidir com o core.
   Quem verifica é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:a1-u04": { title: "Roupas e tamanhos", grammarNote: "adjetivos · cores · questo/quello" },
  "lesson:a1-u04-l1": {
    theme: "Roupas e compras",
    title: "Concordância do adjetivo e cores",
    objectives: [
      "ajustar a terminação do adjetivo ao substantivo",
      "nomear as cores e saber quais não variam",
      "descrever uma peça de roupa de uma vitrine"
    ],
    theory: [
      {
        h: "O adjetivo vem depois do substantivo e concorda com ele",
        p: "O adjetivo italiano costuma vir <b>depois</b> do substantivo e assume o gênero e o número dele: <em>una borsa <b>rossa</b></em>, <em>due borse <b>rosse</b></em>. Aqui não há nada para aprender: é o seu «uma bolsa vermelha», «duas bolsas vermelhas», com a mesma posição e a mesma concordância."
      },
      {
        h: "Dois tipos de terminação",
        list: [
          "<b>quatro formas</b> (-o / -a / -i / -e): <em>rosso, rossa, rossi, rosse</em>",
          "<b>duas formas</b> (-e / -i): <em>verde, verdi</em> — a mesma forma para os dois gêneros, como o seu «verde / verdes»",
          "<b>invariáveis</b>: <em>blu, rosa, viola, beige</em> e os empréstimos (<em>chic</em>)"
        ]
      },
      {
        trap: "Num grupo misto, ganha o masculino: <em>Marco e Anna sono <b>italiani</b></em>. Uma mulher entre cem homens não muda nada; um homem entre cem mulheres passa o grupo inteiro para o masculino. Igual ao português."
      },
      {
        h: "Cores que foram substantivos",
        p: "<em>Rosa</em>, <em>viola</em> e <em>arancione</em> vêm de nomes de plantas, e por isso <em>rosa</em> e <em>viola</em> não variam — exatamente como «umas saias rosa» em português. <em>Marrone</em> pertence em teoria a esse grupo, mas os italianos também dizem <em>scarpe marroni</em> e ninguém os corrige."
      }
    ],
    grammar: {
      title: "A concordância do adjetivo",
      table: {
        head: ["substantivo", "tipo -o", "tipo -e", "invariável"],
        rows: [
          ["il vestito (m sing.)", "nero", "verde", "blu"],
          ["la gonna (f sing.)", "nera", "verde", "blu"],
          ["i pantaloni (m pl.)", "neri", "verdi", "blu"],
          ["le scarpe (f pl.)", "nere", "verdi", "blu"]
        ]
      },
      examples: [
        { tr: "Uma camisa branca, por favor." },
        { tr: "Estes sapatos estão me apertando." },
        { tr: "Um casaco azul, tamanho médio.", note: "blu não varia" },
        { tr: "As calças verdes não ficam bem em mim." },
        { tr: "Que jaqueta bonita!" }
      ]
    },
    vocab: [
      "vestido; roupa",
      "saia",
      "calça (sempre no plural)",
      "camisa",
      "camiseta",
      "jaqueta, paletó",
      "casaco",
      "sapatos",
      "vermelho",
      "preto",
      "branco",
      "verde (igual nos dois gêneros)",
      "azul (invariável)",
      "cinza"
    ],
    exercises: [
      {
        q: "«La gonna» é feminino. Como se escreve «preta»?",
        opts: ["nero", "nera", "nere"],
        why: "Feminino singular → nera."
      },
      {
        q: "Qual adjetivo tem a mesma forma nos dois gêneros?",
        opts: ["rosso", "verde", "grigio"],
        why: "Os adjetivos em -e têm duas formas: verde / verdi."
      },
      {
        q: "Complete: «Le scarpe ___.» (sapatos pretos)",
        why: "Scarpe é feminino plural → nere."
      },
      {
        q: "Complete: «I pantaloni ___.» (calças azuis)",
        why: "Blu é invariável: nunca «blui»."
      },
      { q: "Complete as terminações.", tr: "Uma camisa branca e duas camisetas pretas, por favor." },
      {
        q: "«Marco e Anna sono ___.» (italianos)",
        opts: ["italiane", "italiani", "italiano"],
        why: "Um grupo misto leva o masculino plural."
      },
      { q: "Ligue a peça de roupa ao seu significado.", pairs: ["saia", "casaco", "jaqueta", "sapatos"] },
      { tr: "Estes sapatos estão me apertando." },
      { tr: "Uma jaqueta cinza, por favor, tamanho médio." },
      { tr: "Que camisa branca bonita!" }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "Roupas e compras",
    title: "Os demonstrativos",
    objectives: [
      "distinguir questo de quello",
      "flexionar as duas formas",
      "apontar uma peça numa loja sem apontar com o dedo"
    ],
    theory: [
      {
        h: "Perto e longe",
        p: "<strong>Questo</strong> é algo perto de quem fala («este aqui»), <strong>quello</strong> algo mais distante («aquele»). O italiano não tem um terceiro grau de uso corrente: o antigo <em>codesto</em> sobrevive na Toscana e na linguagem administrativa."
      },
      {
        contrast: "O português tem três: este / esse / aquele — e no Brasil falado este e esse quase se fundiram. O italiano tem só dois, e a linha passa por outro lugar: questo é o que está perto de quem fala, quello é todo o resto. Atenção ao «esse» do dia a dia: «esse aqui», perto de você, é <em>questo</em>; «esse aí», perto de quem ouve, já é <em>quello</em>."
      },
      {
        h: "Questo se flexiona sem surpresas",
        p: "<em>questo, questa, questi, queste</em>. Antes de vogal se contrai na fala e na escrita: <em>quest'anno</em>, <em>quest'estate</em>."
      },
      {
        h: "Quello se comporta como um artigo",
        p: "Quando vem <b>antes de um substantivo</b>, <em>quello</em> assume formas paralelas a <em>il / lo / la / i / gli / le</em>: <em>quel cappotto, quello zaino, quell'amico, quei pantaloni, quegli stivali, quella gonna, quelle scarpe</em>. Sozinho, sem substantivo, tem as quatro formas normais: <em>Prendo quello.</em> Trate-o como um artigo e as sete formas deixam de parecer arbitrárias."
      }
    ],
    grammar: {
      title: "Questo e quello",
      table: {
        head: ["artigo", "quello + subst.", "questo", "exemplo"],
        rows: [
          ["il", "quel", "questo", "quel cappotto / questo cappotto"],
          ["lo", "quello", "questo", "quello zaino"],
          ["l' (m)", "quell'", "quest'", "quell'orologio"],
          ["i", "quei", "questi", "quei pantaloni"],
          ["gli", "quegli", "questi", "quegli stivali"],
          ["la", "quella", "questa", "quella gonna"],
          ["le", "quelle", "queste", "quelle scarpe"]
        ]
      },
      examples: [
        { tr: "Quanto custa esta bolsa?" },
        { tr: "Prefiro aquele casaco." },
        { tr: "Aquelas botas estão em promoção." },
        { tr: "Vou levar aquele, obrigado.", note: "sozinho, sem substantivo: formas normais" },
        { tr: "Este ano o que está na moda é o minimalismo." }
      ]
    },
    vocab: [
      "tamanho (roupa)",
      "número (calçado)",
      "provador",
      "experimentar",
      "a liquidação",
      "desconto",
      "vitrine",
      "caro / barato",
      "apertado / folgado",
      "posso experimentar?",
      "fica bem em mim",
      "tem um médio?"
    ],
    dialogue: [
      "Com licença, posso experimentar esta camisa?",
      "Claro. Que tamanho o senhor usa?",
      "Médio. Tem também aquela azul?",
      "Tenho, mas só no grande. O provador fica lá no fundo.",
      "Obrigado. Esta ficou um pouco apertada."
    ],
    exercises: [
      {
        q: "Qual é a forma correta antes de «zaino»?",
        opts: ["quel zaino", "quello zaino", "quell'zaino"],
        why: "Quello se comporta como <i>lo</i>: antes de z e s+consoante vira <b>quello</b>."
      },
      {
        q: "Complete: «___ scarpe sono in saldo.» (aqueles sapatos)",
        why: "Feminino plural: le → quelle."
      },
      {
        q: "Complete: «___ anno vado in Italia.» (este ano)",
        why: "Questo se contrai em quest' antes de vogal."
      },
      {
        q: "Escolha a forma correta de «quello».",
        items: ["casaco", "botas", "saia", "calça", "relógio"]
      },
      {
        q: "«Prendo quello.» Por que não «quel»?",
        opts: ["É um erro", "Porque quello está sozinho, sem substantivo", "Porque é plural"],
        why: "As formas curtas (quel, quei, quegli) só existem antes de um substantivo."
      },
      { q: "«Quanto custa esta bolsa?»" },
      { tr: "Posso experimentar aquela jaqueta?" },
      {
        q: "Você está numa loja de roupas.",
        setting: "Uma loja do centro, em plena liquidação.",
        lines: [
          { tr: "Bom dia, está procurando alguma coisa em especial?" },
          { tr: "Pergunte se você pode experimentar esta saia.", answerTr: "Posso experimentar esta saia?" },
          { tr: "Claro. Que tamanho?" },
          { tr: "Diga que é médio.", answerTr: "Médio, obrigado." }
        ]
      },
      { tr: "Aquelas botas pretas estão em promoção." },
      { tr: "Com licença, a senhora tem esta camisa no tamanho médio?" }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Roupas e compras",
    title: "Preços, números acima de cem, pagar",
    objectives: [
      "perguntar um preço e entender a resposta",
      "contar acima de cem",
      "pagar com cartão ou em dinheiro"
    ],
    theory: [
      {
        h: "Os números acima de cem",
        p: "<em>Cento</em> nunca muda: <em>duecento, trecento</em>. <em>Mille</em> vira <em>-mila</em> no plural: <em>duemila, tremila</em>. Aqui o italiano é mais simples que o português, que diz «duzentos» e «duzentas», com gênero."
      },
      {
        contrast: "Os separadores funcionam como os seus: <em>1.500</em> com ponto para os milhares e <em>2,50</em> com vírgula para os decimais. Quem vem do inglês erra o tempo todo nas etiquetas de preço; você pode lê-las do jeito que estão."
      },
      {
        h: "Os preços se dizem abreviados",
        p: "<em>Due e cinquanta</em> = 2,50 €. A palavra <em>euro</em> muitas vezes é omitida e, quando aparece, <b>não tem plural</b>: <em>trenta euro</em>, nunca «euri». E aqui é preciso corrigir o instinto, porque em português você diz «trinta euros», com -s."
      },
      {
        h: "Pagar",
        p: "<em>In contanti</em> (em dinheiro) ou <em>con la carta</em> (com cartão). Vale conhecer <em>lo scontrino</em> (o cupom fiscal) e <em>la ricevuta</em> (o recibo). Na Itália o cupom tem valor legal e o vendedor é obrigado a emiti-lo."
      },
      {
        tip: "<em>Quanto costa?</em> se refere a uma coisa, <em>quanto costano?</em> a várias. <em>Quant'è?</em> é «quanto dá no total?» no caixa."
      }
    ],
    grammar: {
      title: "Números e perguntar o preço",
      table: {
        head: ["escrito", "em italiano", "nota"],
        rows: [
          ["100 / 200", "cento / duecento", "cento nunca varia"],
          ["1000 / 2000", "mille / duemila", "mille → -mila no plural"],
          ["1500", "millecinquecento", "numa palavra só"],
          ["2,50 €", "due e cinquanta", "euro muitas vezes é omitido"],
          ["quanto custa?", "quanto costa?", "uma coisa"],
          ["quanto custam?", "quanto costano?", "várias coisas"]
        ]
      },
      examples: [
        { tr: "Quanto custa esta bolsa? — Oitenta e cinco euros." },
        { tr: "Quanto dá no total?" },
        { tr: "Posso pagar com cartão?" },
        { tr: "Só dinheiro, sinto muito." },
        { tr: "Pode me dar o cupom fiscal, por favor?" },
        { tr: "Tem vinte por cento de desconto." }
      ]
    },
    vocab: [
      "quanto custa / custam?",
      "quanto dá no total?",
      "em dinheiro",
      "com cartão",
      "cupom fiscal",
      "troco",
      "cem / mil",
      "por cento",
      "está caro demais",
      "uma pechincha",
      "preço",
      "de graça"
    ],
    exercises: [
      { q: "Que número é «millecinquecento»?", opts: ["150", "1500", "15000"] },
      {
        q: "Qual forma está correta?",
        opts: ["trenta euri", "trenta euro", "trente euro"],
        why: "Euro não tem plural em italiano, ao contrário do português."
      },
      { q: "Escreva em algarismos: «duemilaventicinque»" },
      {
        q: "Complete: «___ costano queste scarpe?»",
        why: "Quanto não muda aqui, mas o verbo sim: costano (plural)."
      },
      { q: "«Posso pagar com cartão?»" },
      {
        q: "O vendedor diz «Sono ventidue e cinquanta». Quanto você paga?",
        opts: ["22,50 €", "2,25 €", "225 €"]
      },
      {
        q: "Complete a conversa no caixa.",
        tr: "— Quanto dá no total? — Quarenta e três euros. — Posso pagar com cartão?"
      },
      { q: "Ligue as expressões.", pairs: ["cupom fiscal", "troco", "em dinheiro", "de graça"] },
      { tr: "São cento e vinte euros, com dez por cento de desconto." },
      { tr: "Quanto custam aquelas botas da vitrine?" }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Gramática básica",
    title: "Quantidade e intensidade",
    objectives: [
      "distinguir molto advérbio de molto adjetivo",
      "usar troppo, poco, tanto, abbastanza",
      "intensificar um adjetivo com -issimo"
    ],
    theory: [
      {
        h: "Uma palavra, dois papéis",
        p: "<strong>Molto</strong> antes de um adjetivo ou depois de um verbo é <b>advérbio</b> e não varia: <em>molto bella</em>, <em>lavoro molto</em>. Antes de um substantivo é <b>adjetivo</b> e concorda: <em>molt<b>i</b> amici</em>, <em>molt<b>a</b> gente</em>. A mesma regra vale para <em>poco, troppo, tanto</em>."
      },
      {
        contrast: "Mais um ponto que vem de presente: o português faz exatamente isso com «muito», e até com uma palavra só nos dois papéis. «Muito bonita» e «muitos amigos»: advérbio invariável de um lado, adjetivo que concorda do outro. O cuidado é o mesmo que você já tem em português: não diga «muita cara» quando quer dizer «muito cara»."
      },
      {
        h: "Um teste que sempre funciona",
        p: "Faça a pergunta: «quanto de quê?» → adjetivo, concorda. «em que medida?» → advérbio, forma fixa. <em>Ho molti libri</em> (quantos livros) ×  <em>Sono molto stanca</em> (quão cansada)."
      },
      {
        h: "O superlativo em -issimo",
        p: "Tire a terminação do adjetivo e acrescente <em>-issimo/-issima/-issimi/-issime</em>: <em>bello → bellissimo</em>, <em>caro → carissimo</em>. É o seu <em>-íssimo</em>, com o mesmo valor."
      },
      {
        trap: "<b>Poco</b> significa «pouco, não muito», enquanto <b>un po' di</b> é «um pouco de». Não são a mesma coisa: <em>ho poco tempo</em> (estou sem tempo, é uma queixa), ao contrário de <em>ho un po' di tempo</em> (tenho algum tempo, e está tudo bem). O português distingue do mesmo jeito «pouco tempo» e «um pouco de tempo»."
      }
    ],
    grammar: {
      title: "Molto, poco, troppo, tanto",
      table: {
        head: ["papel", "forma", "exemplo"],
        rows: [
          ["advérbio (em que medida)", "fixa", "È molto caro. / Costa troppo."],
          ["adjetivo (quanto de)", "concorda", "Ho molti amici. / Troppa gente."],
          ["bastante", "abbastanza (fixa)", "È abbastanza grande."],
          ["superlativo", "-issimo", "carissimo, bellissima"],
          ["pouco / demais", "poco / troppo", "Poco sale, troppo pepe."]
        ]
      },
      examples: [
        { tr: "Esta jaqueta é muito elegante.", note: "advérbio: não muda" },
        { tr: "Tem muita gente na loja.", note: "adjetivo: molte" },
        { tr: "Caro demais, obrigado mesmo assim." },
        { tr: "Este mês estou com pouco dinheiro." },
        { tr: "É lindíssimo!" },
        { tr: "Bastante bem, obrigado." }
      ]
    },
    vocab: [
      "muito",
      "pouco",
      "um pouco",
      "demais, demasiado",
      "tanto, muito",
      "bastante",
      "mais / menos",
      "lindo",
      "caríssimo",
      "dinheiro (em italiano sempre no plural)",
      "obrigado mesmo assim",
      "vou pensar"
    ],
    exercises: [
      {
        q: "«Ci sono ___ persone.» (muita gente)",
        opts: ["molto", "molte", "molti"],
        why: "Antes de um substantivo molto concorda; persone é feminino plural."
      },
      {
        q: "«Questa borsa è ___ cara.» (muito cara)",
        opts: ["molta", "molto", "molte"],
        why: "Antes de um adjetivo molto é advérbio e não muda."
      },
      { q: "Forme o superlativo: «bello» → «___»" },
      { q: "Complete: «Ho ___ tempo oggi.» (tenho pouco tempo)" },
      {
        q: "Em quais frases «troppo» é advérbio (invariável)?",
        opts: ["Costa troppo.", "C'è troppa gente.", "Sei troppo gentile.", "Ho troppi impegni."]
      },
      { q: "«Está caro demais, obrigado.»" },
      {
        q: "Complete as terminações (ou ponha um hífen onde a forma não muda).",
        tr: "Tem muitas lojas, mas são caríssimas."
      },
      { q: "Ligue.", pairs: ["bastante", "demais", "um pouco", "pouco"] },
      { tr: "É lindo, mas caro demais para mim." },
      { tr: "Vou pensar, obrigado mesmo assim." }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Teste",
    title: "Teste da unidade 4",
    objectives: ["verificar os adjetivos, questo/quello, os números e molto/poco/troppo"],
    theory: [{ p: "Dez perguntas. Aprovação com 70%." }],
    exercises: [
      { q: "«Le scarpe ___.» (vermelhos)" },
      { q: "«I pantaloni ___.» (verdes)" },
      { q: "Escolha a forma de «quello».", items: [, , , ] },
      { q: "Que número é «duemilatrecento»?", opts: ["230", "2300", "23000"] },
      { q: "«Sono ___ stanca.» (muito cansada)", opts: ["molta", "molto", "molte"] },
      { q: "«Ci sono ___ persone.» (muita gente)" },
      { q: "«Posso experimentar esta camisa?»" },
      { tr: "Quanto custam aqueles sapatos?" },
      { tr: "Esta jaqueta é muito cara." },
      { tr: "Posso pagar com cartão?" }
    ]
  },
  "unit:a1-u05": { title: "Um dia italiano", grammarNote: "verbos reflexivos · as horas · verbos modais" },
  "lesson:a1-u05-l1": {
    theme: "Vida cotidiana",
    title: "Os verbos reflexivos",
    objectives: [
      "reconhecer um verbo reflexivo pela terminação -si",
      "conjugar svegliarsi, alzarsi, vestirsi",
      "descrever a sua manhã"
    ],
    theory: [
      {
        h: "Uma ação que volta para o próprio sujeito",
        p: "Um infinitivo reflexivo termina em <strong>-si</strong>: <em>svegliar<b>si</b></em>, <em>alzar<b>si</b></em>. Na conjugação, o <em>-si</em> some e o pronome reflexivo passa para antes do verbo: <em>mi, ti, si, ci, vi, si</em>. É o seu «levantar-<b>se</b> → eu me levanto», exatamente com o mesmo mecanismo."
      },
      {
        h: "O pronome vem sempre antes",
        p: "<em><b>Mi</b> sveglio alle sette.</em> Nunca «sveglio mi». As exceções são o infinitivo e o imperativo, em que o pronome gruda no final: <em>devo alzar<b>mi</b></em>, <em>svegliati!</em> — como no português formal «devo levantar-me», «acalme-se!», e não como no Brasil falado, «preciso me levantar», «se acalma!»."
      },
      {
        contrast: "Este ponto você já tem pronto: o português usa os reflexivos para a rotina diária do mesmo jeito (me levanto, me visto, me penteio). O que precisa de atenção é a lista concreta, não o sistema: no Brasil falado vários verbos perderam o pronome, e o italiano não acompanha essa queda."
      },
      {
        h: "Alguns verbos são reflexivos só em italiano",
        p: "<em>Svegliarsi</em> é «acordar», sem pronome em português. Outros: <em>chiamarsi</em> (chamar-se), <em>ricordarsi</em> (lembrar-se), <em>dimenticarsi</em> (esquecer-se), <em>arrabbiarsi</em> (ficar bravo, irritar-se), <em>annoiarsi</em> (ficar entediado). Como em português, <em>ricordare</em> e <em>dimenticare</em> também funcionam sem pronome: <em>ho dimenticato il libro</em>, como o nosso «esqueci o livro»."
      }
    ],
    grammar: {
      title: "Svegliarsi (acordar)",
      table: {
        head: ["pessoa", "pronome", "forma", "exemplo"],
        rows: [
          ["io", "mi", "mi sveglio", "Mi sveglio alle sette."],
          ["tu", "ti", "ti svegli", "A che ora ti svegli?"],
          ["lui / lei", "si", "si sveglia", "Si sveglia tardi."],
          ["noi", "ci", "ci svegliamo", "Ci svegliamo presto."],
          ["voi", "vi", "vi svegliate", "Vi svegliate alle otto?"],
          ["loro", "si", "si svegliano", "Si svegliano alle nove."]
        ]
      },
      examples: [
        { tr: "Eu me levanto logo depois do despertador." },
        { tr: "Você escova os dentes antes ou depois do café da manhã?" },
        { tr: "Nós nos vestimos com pressa." },
        { tr: "Amanhã tenho que me levantar cedo.", note: "o pronome gruda no infinitivo" },
        { tr: "Não me lembro do nome dele." }
      ]
    },
    vocab: [
      "acordar",
      "levantar-se",
      "lavar-se",
      "vestir-se",
      "pentear-se",
      "tomar banho",
      "tomar café da manhã",
      "sair de casa",
      "descansar",
      "pegar no sono",
      "despertador",
      "com pressa"
    ],
    exercises: [
      { why: "Escreva a forma completa com o pronome, por exemplo «mi sveglio»." },
      {
        q: "Como se reconhece um verbo reflexivo no dicionário?",
        opts: ["Começa com vogal", "Termina em -si", "Tem o acento na última sílaba"]
      },
      {
        q: "Complete: «Noi ___ alle sei.» (nós nos levantamos às seis — alzarsi)",
        why: "O pronome reflexivo de noi é ci."
      },
      {
        q: "Complete: «Devo ___ presto.» (tenho que me levantar cedo)",
        hint: "o pronome gruda no infinitivo",
        why: "Depois de um verbo modal o pronome se junta ao infinitivo: alzarmi."
      },
      {
        q: "Qual frase está correta?",
        opts: ["Sveglio mi alle sette.", "Mi sveglio alle sette.", "Sveglio alle sette mi."]
      },
      { q: "«Eu me visto com pressa.»" },
      { q: "Descreva a sua manhã.", tr: "Acordo às seis e meia, depois me levanto e tomo banho." },
      { tr: "Minha irmã acorda tarde." },
      { tr: "Acordo às sete e me levanto na hora." },
      { tr: "A que horas você costuma acordar?" }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "Vida cotidiana",
    title: "As horas e as partes do dia",
    objectives: [
      "dizer e entender as horas",
      "usar è e sono corretamente",
      "marcar um encontro num horário exato"
    ],
    theory: [
      {
        h: "As horas vão no plural",
        p: "Um italiano pergunta <em>Che ore sono?</em> e responde <em>Sono le tre</em>. O substantivo subentendido é <em>le ore</em>, daí o artigo feminino plural. As exceções são uma hora, meio-dia e meia-noite, que vão no singular: <em>è l'una</em>, <em>è mezzogiorno</em>, <em>è mezzanotte</em>."
      },
      {
        contrast: "Quase o seu sistema: «são três horas» e «é uma hora», «é meio-dia» — verbo no plural, com a mesma exceção no singular. A diferença é o <b>artigo</b>: o italiano o põe sempre (<em>sono <b>le</b> tre</em>, <em>è <b>l'</b>una</em>), enquanto o português só o mostra depois de preposição, no seu «às três» (a + as), como em <em>alle tre</em>. Não diga «sono tre»."
      },
      {
        h: "Os minutos",
        p: "Até a meia hora se somam: <em>le tre e dieci</em>. Passada a meia hora, costuma-se subtrair da hora seguinte: <em>le quattro meno dieci</em>. Atalhos comuns: <em>e un quarto</em>, <em>e mezza</em>, <em>meno un quarto</em>."
      },
      {
        h: "A que horas: com preposição",
        p: "A pergunta é <em>A che ora?</em>, a resposta <em>alle otto</em>, <em>all'una</em>, <em>a mezzogiorno</em>. A preposição <em>a</em> se funde com o artigo."
      },
      {
        tip: "Horários, programações e repartições usam o relógio de 24 horas: <em>alle diciotto e trenta</em>. Falando, você diria <em>alle sei e mezza di sera</em>. Não existe a.m./p.m.: acrescenta-se <em>di mattina, di pomeriggio, di sera</em> quando é preciso."
      }
    ],
    grammar: {
      title: "Dizer as horas",
      table: {
        head: ["relógio", "em italiano", "nota"],
        rows: [
          ["13:00", "è l'una", "singular"],
          ["12:00", "è mezzogiorno", "meio-dia"],
          ["00:00", "è mezzanotte", "meia-noite"],
          ["15:00", "sono le tre", "plural"],
          ["15:15", "sono le tre e un quarto", ""],
          ["15:30", "sono le tre e mezza", ""],
          ["15:50", "sono le quattro meno dieci", "subtraindo"],
          ["às 20:00", "alle otto", "a + le = alle"]
        ]
      },
      examples: [
        { tr: "Que horas são? — Nove e vinte." },
        { tr: "A que horas a loja abre? — Às nove e meia." },
        { tr: "O trem sai à uma e quinze." },
        { tr: "A gente se vê às oito da noite." },
        { tr: "É meio-dia, vamos almoçar." }
      ]
    },
    vocab: [
      "que horas são?",
      "a que horas?",
      "meio-dia / meia-noite",
      "e quinze / e meia",
      "quinze para",
      "de manhã",
      "à tarde",
      "à noite",
      "cedo / tarde",
      "pontual",
      "atrasado",
      "a gente se vê"
    ],
    exercises: [
      {
        q: "Por que se diz «è l'una» e não «sono l'una»?",
        opts: ["É uma regra sem motivo", "Porque «una» é singular", "Porque é informal"],
        why: "Todas as outras horas vão no plural (le due, le tre…) e levam sono. Como em português."
      },
      { q: "Complete: «___ le otto e mezza.» (são oito e meia)" },
      { q: "Complete: «Il film comincia ___ nove.» (às nove)" },
      {
        q: "Como se diz 15:45?",
        opts: ["le tre e quarantacinque", "le quattro meno un quarto", "as duas estão corretas"],
        why: "As duas valem; «meno un quarto» soa mais natural na fala."
      },
      { q: "Ligue a hora ao jeito de escrevê-la.", pairs: ["12:00", "14:15", "13:30", "6:50"] },
      { q: "«A que horas a loja abre?»" },
      { q: "Complete.", tr: "— Que horas são? — Quinze para as onze. — Estou atrasado!" },
      { tr: "A gente se vê às oito da noite." },
      { tr: "O trem sai às 18:45." },
      { tr: "Com licença, que horas são? — Três e meia." }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Gramática básica",
    title: "Os verbos modais",
    objectives: [
      "conjugar potere, volere e dovere",
      "pedir permissão e expressar necessidade",
      "entender por que vorrei é mais educado que voglio"
    ],
    theory: [
      {
        h: "Três verbos, uma construção",
        p: "<strong>Potere</strong> (poder), <strong>volere</strong> (querer) e <strong>dovere</strong> (dever) se combinam com um infinitivo <b>sem nenhuma preposição</b>: <em>posso entrare</em>, <em>voglio partire</em>, <em>devo lavorare</em>. Os três são irregulares, mas se fixam sozinhos de tanto uso. E o esquema é o seu: «posso entrar», «quero sair», «devo trabalhar»."
      },
      {
        h: "Voglio soa seco",
        p: "<em>Voglio un caffè</em> não é errado gramaticalmente, mas num bar soa como uma exigência. No Brasil «quero um café» no balcão passa sem problema; na Itália, não. Os italianos dizem <strong>vorrei</strong>, o condicional de <em>volere</em>: o seu «gostaria» ou o «queria» educado. Por enquanto, aprenda como fórmula fixa."
      },
      {
        h: "Pronomes com os modais: duas posições",
        p: "Com um verbo reflexivo, as duas versões são igualmente corretas: <em><b>mi</b> devo alzare</em> ou <em>devo alzar<b>mi</b></em>. A mesma liberdade vale para os pronomes objeto: <em>ti posso aiutare</em> = <em>posso aiutarti</em>. Como «te posso ajudar» / «posso te ajudar» — só que em italiano o pronome nunca fica solto entre os dois verbos: ou antes de tudo, ou grudado no infinitivo."
      },
      {
        tip: "<em>Dovere</em> não é só «dever» de obrigação: também significa dever dinheiro. <em>Ti devo dieci euro</em>, «te devo dez euros». O português faz a mesma dupla leitura."
      }
    ],
    grammar: {
      title: "Potere, volere, dovere",
      table: {
        head: ["pessoa", "potere", "volere", "dovere"],
        rows: [
          ["io", "posso", "voglio", "devo"],
          ["tu", "puoi", "vuoi", "devi"],
          ["lui / lei", "può", "vuole", "deve"],
          ["noi", "possiamo", "vogliamo", "dobbiamo"],
          ["voi", "potete", "volete", "dovete"],
          ["loro", "possono", "vogliono", "devono"]
        ]
      },
      examples: [
        { tr: "Posso entrar?" },
        { tr: "Eu gostaria de um café.", note: "mais educado que «voglio»" },
        { tr: "Tenho que ir, está tarde." },
        { tr: "Não podemos pagar em dinheiro." },
        { tr: "Você quer vir com a gente?" },
        { tr: "Tenho que me levantar cedo.", note: "as duas versões estão corretas" }
      ]
    },
    vocab: [
      "poder",
      "querer",
      "dever, ter que",
      "eu gostaria",
      "posso? (com licença?)",
      "é proibido",
      "é permitido",
      "é preciso (impessoal)",
      "estar a fim de, ter vontade de",
      "infelizmente",
      "com prazer",
      "quem me dera; talvez"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Você está pedindo num restaurante. O que soa melhor?",
        opts: ["Voglio una pizza.", "Vorrei una pizza.", "Devo una pizza."],
        why: "Vorrei é o condicional de cortesia, o padrão para pedir."
      },
      { q: "Complete: «Noi ___ partire domani.» (temos que partir amanhã)" },
      {
        q: "Qual frase está incorreta?",
        opts: ["Devo di andare.", "Devo andare.", "Devo andarci."],
        why: "Os verbos modais não levam preposição antes do infinitivo."
      },
      { q: "«Posso pagar com cartão?»" },
      { q: "Complete.", tr: "Não posso ir hoje à noite, tenho que trabalhar até tarde." },
      { tr: "Com licença, posso experimentar esta jaqueta?" },
      { tr: "Eu gostaria de reservar uma mesa para dois." }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Vida cotidiana",
    title: "Frequência e dias da semana",
    objectives: [
      "colocar o advérbio de frequência no lugar certo",
      "usar a dupla negação com mai",
      "nomear os dias e falar da sua rotina"
    ],
    theory: [
      {
        h: "O advérbio vem logo depois do verbo",
        p: "<em>Vado <b>sempre</b> in palestra il lunedì.</em> O italiano mantém o advérbio de frequência imediatamente depois do verbo conjugado. O português aceita as duas posições («vou sempre» / «sempre vou», e no Brasil a segunda é até mais comum); o italiano prefere claramente a primeira, e antepor o advérbio soa enfático."
      },
      {
        h: "Mai precisa de non",
        p: "<strong>Non</strong> vado <strong>mai</strong> al cinema. O italiano usa dupla negação, e é a regra, não um erro. O mesmo com <em>niente</em>, <em>nessuno</em>, <em>più</em>: <em>non ho più tempo</em>, <em>non conosco nessuno</em>. O seu «não vou nunca» e «não conheço ninguém» funcionam igual."
      },
      {
        h: "Os dias da semana",
        p: "Escrevem-se com minúscula, como em português, e são masculinos, exceto <em>la domenica</em> — o contrário do português, em que os dias úteis são femininos (a segunda-feira) e sábado e domingo são masculinos."
      },
      {
        contrast: "Aqui está a diferença que importa: o italiano marca o hábito com o <b>artigo</b> e deixa o dia no singular (<em>il lunedì vado in palestra</em> = às segundas), enquanto sem artigo indica um dia concreto (<em>lunedì vado a Roma</em> = nesta segunda). O português distingue pelo número: «na segunda» e «às segundas». Traduzir o plural português por um plural italiano não funciona."
      }
    ],
    grammar: {
      title: "Frequência e dias da semana",
      table: {
        head: ["advérbio", "em português", "exemplo"],
        rows: [
          ["sempre", "sempre", "Bevo sempre un caffè la mattina."],
          ["di solito", "normalmente", "Di solito lavoro da casa."],
          ["spesso", "muitas vezes, com frequência", "Vado spesso al mercato."],
          ["qualche volta / a volte", "às vezes", "A volte esco a correre."],
          ["raramente", "raramente", "Guardo raramente la TV."],
          ["non… mai", "nunca", "Non prendo mai il taxi."]
        ]
      },
      examples: [
        { tr: "segunda, terça, quarta, quinta" },
        { tr: "sexta, sábado, domingo" },
        { tr: "Aos sábados durmo até tarde.", note: "com artigo = hábito" },
        { tr: "Neste sábado vou a Florença.", note: "sem artigo = um dia concreto" },
        { tr: "Nunca vou dormir antes da meia-noite." }
      ]
    },
    vocab: [
      "sempre",
      "normalmente",
      "com frequência",
      "às vezes",
      "raramente",
      "nunca",
      "todos os dias",
      "o fim de semana",
      "segunda-feira",
      "sábado",
      "domingo",
      "uma vez por semana"
    ],
    exercises: [
      {
        q: "Onde «spesso» costuma ficar?",
        opts: ["Antes do sujeito", "Logo depois do verbo conjugado", "Sempre no fim da frase"]
      },
      {
        q: "Complete: «___ vado ___ al cinema.» (nunca vou ao cinema) — escreva as duas palavras separadas por um espaço, na ordem da frase",
        hint: "dupla negação",
        why: "Non vado mai: non antes do verbo, mai logo depois."
      },
      {
        q: "«Il sabato dormo fino a tardi» significa:",
        opts: ["Neste sábado vou dormir até tarde", "Aos sábados durmo até tarde", "No sábado passado dormi até tarde"],
        why: "O artigo antes de um dia da semana marca o hábito."
      },
      { tr: "Normalmente trabalho de casa." },
      { q: "Ligue.", pairs: ["sempre", "raramente", "às vezes", "todos os dias"] },
      { q: "«Nunca pego táxi.»" },
      {
        q: "Descreva a sua semana.",
        tr: "Às segundas vou à academia, mas no fim de semana não vou nunca."
      },
      {
        q: "Quais frases estão corretas?",
        opts: ["Non vado mai al cinema.", "Vado mai al cinema.", "Non ho più tempo.", "Ho più non tempo."]
      },
      { tr: "Normalmente acordo cedo, mas aos domingos durmo até tarde." },
      { tr: "Vou com frequência à feira no sábado de manhã." }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Teste",
    title: "Teste da unidade 5",
    objectives: ["verificar os reflexivos, as horas, os modais e a frequência"],
    theory: [{ p: "Dez perguntas. Aprovação com 70%." }],
    exercises: [
      {  },
      { q: "«Devo ___ presto.» (tenho que me levantar cedo — alzarsi)" },
      { q: "«___ le due e mezza.» (são duas e meia)" },
      { q: "«Il treno parte ___ una.» (à uma)" },
      {  },
      { q: "A forma mais educada de pedir:", opts: ["Voglio…", "Vorrei…", "Devo…"] },
      {
        q: "«Non vado mai in palestra» significa:",
        opts: ["Às vezes vou", "Não vou nunca", "Vou todos os dias"]
      },
      { tr: "Normalmente tomo café da manhã às oito." },
      { tr: "Acordo às seis e meia todos os dias." },
      { tr: "A que horas você costuma se levantar?" }
    ]
  },
  "unit:a1-u06": { title: "Pela cidade", grammarNote: "preposições articuladas · andare/venire · indicações" },
  "lesson:a1-u06-l1": {
    theme: "A cidade e como se orientar",
    title: "As preposições articuladas",
    objectives: [
      "fundir uma preposição com um artigo",
      "descrever onde algo está",
      "evitar o erro mais comum: «a il» em vez de «al»"
    ],
    theory: [
      {
        h: "Cinco preposições que precisam se fundir",
        p: "Quando <em>di, a, da, in, su</em> vêm seguidas de um artigo definido, as duas palavras se fundem numa só. Não é uma opção de estilo: <em>a il cinema</em> está simplesmente errado. As outras preposições (<em>con, per, tra, fra</em>) ficam separadas."
      },
      {
        contrast: "Aqui você joga em casa: o português também funde preposição e artigo, em todas as formas — <b>do, da, dos, das</b>, <b>no, na</b>, <b>ao, à, aos, às</b>, <b>pelo, pela</b>. O italiano faz o mesmo com cinco preposições e sete artigos: trinta e cinco formas. A lógica é a sua; o que muda é a lista: <em>da</em> e <em>su</em> também se fundem, e <em>per</em>, ao contrário do nosso «pelo», não."
      },
      {
        h: "O padrão é regular",
        p: "Pegue a preposição e encaixe o artigo: <em>a + il = al</em>, <em>a + lo = allo</em>, <em>a + la = alla</em>, <em>a + i = ai</em>, <em>a + gli = agli</em>, <em>a + le = alle</em>. <em>Di, da, in</em> e <em>su</em> funcionam igual."
      },
      {
        trap: "<b>In</b> vira <b>ne-</b>: <em>in + il = nel</em>, não «inl». É a única forma da tabela que não dá para deduzir — mas você já conhece o truque: é o seu «em + o = no»."
      },
      {
        h: "Sem artigo não há contração",
        p: "<em>Vado a Roma</em> (cidade, sem artigo), <em>vado in Italia</em> (país, sem artigo depois de in), mas <em>vado al mare</em>, <em>vado alla stazione</em>. A fusão só acontece quando há de fato um artigo. Atenção: o português põe artigo em nomes de países («na Itália»), o italiano depois de in não põe."
      }
    ],
    grammar: {
      title: "Tabela de preposições articuladas",
      table: {
        head: ["", "il", "lo", "la", "l'", "i", "gli", "le"],
        rows: [
          ["di", "del", "dello", "della", "dell'", "dei", "degli", "delle"],
          ["a", "al", "allo", "alla", "all'", "ai", "agli", "alle"],
          ["da", "dal", "dallo", "dalla", "dall'", "dai", "dagli", "dalle"],
          ["in", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"],
          ["su", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"]
        ]
      },
      examples: [
        { tr: "Vou ao cinema.", note: "a + il" },
        { tr: "O livro está em cima da mesa.", note: "su + il" },
        { tr: "Moro no centro histórico.", note: "in + il" },
        { tr: "Estou voltando da estação.", note: "da + la" },
        { tr: "A chave do carro.", note: "di + la" },
        { tr: "De trem.", note: "con costuma ficar separada" }
      ]
    },
    vocab: [
      "praça",
      "rua",
      "o centro",
      "igreja",
      "museu",
      "banco",
      "farmácia",
      "agência dos correios",
      "semáforo",
      "cruzamento",
      "ponte",
      "ponto (de ônibus, de bonde)"
    ],
    exercises: [
      { q: "Complete: «Vado ___ cinema.» (a + il)" },
      { q: "Complete: «Il libro è ___ tavolo.» (su + il)" },
      { q: "Complete: «Abito ___ centro.» (in + il)" },
      {
        q: "Escolha a forma correta de «a + artigo».",
        items: ["a estação", "o aeroporto", "os estudantes", "o restaurante", "as nove"]
      },
      {
        q: "Qual combinação NÃO se funde?",
        opts: ["a + il", "con + il", "in + la"],
        why: "Con costuma ficar separada; a forma «col» existe, mas é opcional."
      },
      { q: "Complete as indicações.", tr: "A farmácia fica na esquina, ao lado do banco, em frente à igreja." },
      { q: "«Estou voltando da estação.»" },
      { tr: "A chave do carro está em cima da mesa." },
      { tr: "Os correios ficam perto da praça principal." },
      { tr: "Com licença, onde fica o ponto de ônibus?" }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "A cidade e como se orientar",
    title: "Ir e vir",
    objectives: [
      "conjugar andare e venire",
      "escolher a ou in antes de um destino",
      "distinguir andare de venire"
    ],
    theory: [
      {
        h: "A direção depende de onde está o seu interlocutor",
        p: "<strong>Andare</strong> é movimento <b>que se afasta</b> de quem fala, <strong>venire</strong> é movimento <b>em direção a</b> quem fala ou na companhia dele. O português funciona parecido com ir e vir, então a distinção em si é natural para você."
      },
      {
        h: "A ou in: a regra prática",
        list: [
          "<b>a</b>: cidades (<em>a Roma</em>), lugares entendidos como atividade (<em>a scuola, a casa, a letto, al lavoro, al cinema, al mare</em>)",
          "<b>in</b>: países e regiões (<em>in Italia, in Toscana</em>), estabelecimentos e instituições (<em>in banca, in ufficio, in farmacia, in centro</em>), meios de transporte (<em>in treno, in macchina, in bici</em>)",
          "<b>da</b>: à casa ou ao consultório de alguém (<em>vado dal medico, vado da Marco</em>)"
        ]
      },
      {
        trap: "<em>A piedi</em> («a pé») quebra a regra do transporte, porque ninguém sobe nos próprios pés. Aprenda como exceção: aqui o português coincide, e isso ajuda."
      },
      {
        contrast: "O português usa «a» ou «para» (e, no Brasil falado, muito «em»: «vou no banco», «vou no médico») em quase tudo: a Roma, ao banco, para a Itália. O italiano reparte entre três preposições, e a divisão não se deduz do português. Cuidado também com o transporte: o seu «de trem», «de carro» vira <em>in treno</em>, <em>in macchina</em>, nunca «di treno». Não traduza palavra por palavra: aprenda a combinação inteira como um bloco."
      }
    ],
    grammar: {
      title: "Andare e venire",
      table: {
        head: ["pessoa", "andare", "venire", "exemplo"],
        rows: [
          ["io", "vado", "vengo", "Vado al lavoro. / Vengo con te."],
          ["tu", "vai", "vieni", "Vieni anche tu?"],
          ["lui / lei", "va", "viene", "Va a scuola."],
          ["noi", "andiamo", "veniamo", "Andiamo al mare."],
          ["voi", "andate", "venite", "Venite da noi stasera?"],
          ["loro", "vanno", "vengono", "Vanno in Italia."]
        ]
      },
      examples: [
        { tr: "Vou a Roma de trem." },
        { tr: "Vou para a Itália em setembro." },
        { tr: "Vou ao dentista às três." },
        { tr: "Você vem à festa? — Vou, com prazer." },
        { tr: "Vamos a pé, é perto." },
        { tr: "De onde você vem? — Da Polônia." }
      ]
    },
    vocab: [
      "ir",
      "vir",
      "a pé",
      "de carro",
      "de ônibus",
      "de bicicleta",
      "de metrô",
      "perto / longe",
      "aqui / ali",
      "juntos",
      "sozinho",
      "leva meia hora"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Alguém convida você para a casa dele. Como você confirma?",
        opts: ["Sì, vado!", "Sì, vengo!", "Sì, andiamo!"],
        why: "O movimento em direção ao interlocutor é venire — e o seu «vou, sim!» em italiano seria um erro."
      },
      { q: "Complete: «Vado ___ Italia.» (para a Itália)" },
      { q: "Complete: «Vado ___ Milano.» (a Milão)" },
      { q: "Complete: «Vado ___ medico.» (ao médico)" },
      {
        q: "Quais combinações estão corretas?",
        opts: ["in treno", "a treno", "a piedi", "in piedi", "in banca"],
        why: "«In piedi» existe, mas significa «de pé», não «a pé»."
      },
      { tr: "Vamos a pé, é perto." },
      { tr: "Vou com você, mas a gente pega o metrô." },
      { tr: "Vou ao centro a pé, leva meia hora." }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "A cidade e como se orientar",
    title: "Pedir informações",
    objectives: [
      "perguntar o caminho e entender a resposta",
      "usar o imperativo de tu",
      "descrever uma localização com preposições"
    ],
    theory: [
      {
        h: "O imperativo de tu",
        p: "As indicações são dadas no imperativo. Nos verbos em <b>-are</b>, a forma de <em>tu</em> coincide com a terceira pessoa do presente: <em>gira!</em>, <em>continua!</em> Nos verbos em <b>-ere</b> e <b>-ire</b>, coincide com a segunda: <em>prendi!</em>, <em>segui!</em>"
      },
      {
        h: "Quatro formas curtas",
        p: "<em>andare → va'</em>, <em>fare → fa'</em>, <em>dare → da'</em>, <em>stare → sta'</em>, <em>dire → di'</em>. O apóstrofo substitui as letras que caem. Na prática você também vai ouvir as formas completas <em>vai</em> e <em>fai</em>: as duas são usadas."
      },
      {
        h: "No formal: com Lei",
        p: "Para um desconhecido as indicações soam diferentes: <em>giri a destra</em>, <em>prenda la prima a sinistra</em>, <em>vada dritto</em>. São formas do subjuntivo, como o seu «vire», «pegue», «siga» dirigidos ao senhor ou à senhora. O mecanismo é o mesmo, então desta vez a intuição funciona."
      },
      {
        tip: "A frase mais útil quando você não entende: <em>Può ripetere più lentamente, per favore?</em> Os italianos falam rápido e quase ninguém diminui o ritmo se você não pedir."
      }
    ],
    grammar: {
      title: "Dar indicações",
      table: {
        head: ["informal (tu)", "formal (Lei)", "em português"],
        rows: [
          ["vai dritto", "vada dritto", "vai / vá sempre reto"],
          ["gira a destra", "giri a destra", "vira / vire à direita"],
          ["gira a sinistra", "giri a sinistra", "vira / vire à esquerda"],
          ["prendi la prima strada", "prenda la prima strada", "pega / pegue a primeira rua"],
          ["attraversa la piazza", "attraversi la piazza", "atravessa / atravesse a praça"],
          ["continua fino al semaforo", "continui fino al semaforo", "continua / continue até o semáforo"]
        ]
      },
      examples: [
        { tr: "Com licença, onde fica a estação?" },
        { tr: "É aqui do lado, a dois passos." },
        { tr: "Siga sempre reto e pegue a segunda à direita." },
        { tr: "Fica em frente ao banco, ao lado da farmácia." },
        { tr: "Quanto tempo leva a pé? — Dez minutos." },
        { tr: "Eu me perdi, o senhor pode me ajudar?" }
      ]
    },
    vocab: [
      "onde fica…?",
      "direita / esquerda",
      "sempre reto",
      "em frente a",
      "ao lado de",
      "perto / longe de",
      "atrás de / na frente de",
      "entre… e…",
      "virar",
      "atravessar",
      "eu me perdi",
      "a dois passos daqui"
    ],
    exercises: [
      { q: "«Gira a sinistra» significa:", opts: ["Vire à direita", "Vire à esquerda", "Siga reto"] },
      { q: "A versão formal de «vai dritto» é:", opts: ["va dritto", "vada dritto", "andare dritto"] },
      { q: "Complete: «___ la stazione?» (onde fica a estação)" },
      { q: "Ligue as preposições de lugar.", pairs: ["em frente a", "ao lado de", "atrás de", "entre… e…"] },
      {
        q: "Complete as indicações.",
        tr: "Siga sempre reto até o semáforo e depois vire à direita. O banco fica em frente à farmácia."
      },
      { q: "«Com licença, onde fica a farmácia?»" },
      {
        q: "Você se perdeu no centro.",
        setting: "Uma rua estreita; o pedestre parece ser do bairro.",
        lines: [
          { tr: "Pare a pessoa com educação e pergunte pela estação.", answerTr: "Com licença, onde fica a estação?" },
          { tr: "Olha: siga sempre reto e depois pegue a segunda à direita." },
          {
            tr: "Diga que não entendeu e peça para repetir.",
            answerTr: "Não entendi, pode repetir mais devagar?"
          },
          { tr: "Claro. Sempre reto… e depois a segunda à direita. Dez minutos a pé." },
          { tr: "Agradeça.", answerTr: "Muito obrigado, é muita gentileza!" }
        ]
      },
      { tr: "O museu fica entre a praça e a ponte." },
      { tr: "Siga sempre reto e atravesse a praça." },
      { tr: "Eu me perdi, o senhor pode me ajudar?" }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "A cidade e como se orientar",
    title: "Descrever um lugar",
    objectives: [
      "dizer o que tem numa cidade ou num apartamento",
      "usar c'è / ci sono na negativa e em perguntas",
      "combinar isso com as preposições de lugar"
    ],
    theory: [
      {
        h: "Existência × qualidade",
        p: "<strong>C'è</strong> e <strong>ci sono</strong> dizem que algo <b>existe num lugar</b>. <em>Essere</em> diz <b>como</b> algo é. <em>C'è un museo in centro</em> (tem um museu) ×  <em>Il museo è bellissimo</em> (o museu é lindo). O português separa do mesmo jeito com «tem» ou «há» e «é»."
      },
      {
        h: "Negativa e interrogativa",
        p: "<em>Non c'è</em> / <em>non ci sono</em>; a pergunta é só entonação: <em>C'è un bagno qui?</em> As respostas curtas são muito comuns: <em>Sì, c'è.</em> / <em>No, non c'è.</em>"
      },
      {
        h: "Ci não é só «ali»",
        p: "A mesma partícula <em>ci</em> aparece em toda parte: <em>ci vuole</em> (é preciso, leva), <em>ci metto</em> (eu levo, demoro), <em>ci vado</em> (vou lá). Por enquanto basta reconhecê-la nessas expressões; a explicação completa vem no B1."
      },
      {
        tip: "Em restaurantes e bares, duas frases tiram você de muitos apuros: <em>C'è il bagno?</em> e <em>Non c'è il wifi?</em> Funcionam literalmente em qualquer lugar."
      }
    ],
    grammar: {
      title: "C'è / ci sono",
      table: {
        head: ["forma", "uso", "exemplo"],
        rows: [
          ["c'è", "uma coisa", "C'è una farmacia qui vicino."],
          ["ci sono", "várias coisas", "Ci sono due farmacie."],
          ["non c'è", "negativa sing.", "Non c'è il wifi."],
          ["non ci sono", "negativa pl.", "Non ci sono tavoli liberi."],
          ["c'è…?", "pergunta", "C'è un bancomat qui?"],
          ["quanto c'è?", "distância", "Quanto c'è da qui al centro?"]
        ]
      },
      examples: [
        { tr: "No meu bairro tem feira todo sábado." },
        { tr: "Tem muitos turistas nesta época." },
        { tr: "Não tem ninguém na recepção." },
        { tr: "Tem banheiro? — Tem, no fundo à direita." },
        { tr: "Quanto dá daqui até o centro?" }
      ]
    },
    vocab: [
      "bairro",
      "banheiro",
      "caixa eletrônico",
      "supermercado",
      "estacionamento",
      "parque",
      "hospital",
      "biblioteca",
      "ninguém",
      "alguma coisa",
      "por aqui",
      "no fundo"
    ],
    exercises: [
      { q: "Complete: «___ un bancomat qui vicino?»" },
      { q: "Complete: «___ due farmacie in questa via.»" },
      {
        q: "Qual frase descreve uma qualidade e não a existência?",
        opts: ["C'è un museo in centro.", "Il museo è molto grande.", "Ci sono tre musei."]
      },
      { q: "Passe para a negativa: «C'è il wifi.» → «___ il wifi.»" },
      { q: "Descreva o seu bairro.", tr: "No meu bairro tem um parque, mas não tem supermercados." },
      { q: "«Não tem ninguém na recepção.»" },
      { q: "Ligue.", pairs: ["estacionamento", "hospital", "biblioteca", "bairro"] },
      { tr: "Tem alguma farmácia por aqui?" },
      { tr: "No bairro tem dois parques e uma biblioteca." },
      { tr: "Com licença, tem banheiro? — Tem, no fundo à direita." }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Teste",
    title: "Teste da unidade 6",
    objectives: ["verificar as preposições articuladas, andare/venire, as indicações e c'è/ci sono"],
    theory: [{ p: "Dez perguntas. Aprovação com 70%." }],
    exercises: [
      { q: "a + artigo:", items: [, , , ] },
      { q: "«Il libro è ___ tavolo.» (su + il)" },
      { q: "«Abito ___ centro.» (in + il)" },
      {  },
      { q: "«Vado ___ Italia.»" },
      { q: "«Vado ___ dentista.»" },
      { q: "A versão formal de «gira a destra»:", opts: ["giri a destra", "gira a destra", "girare a destra"] },
      { q: "«___ tavoli liberi?» (tem mesas livres?)" },
      { tr: "Siga sempre reto, o banco fica em frente à igreja." },
      { tr: "Com licença, onde fica o ponto de ônibus?" }
    ]
  },
  "unit:a1-u07": { title: "À mesa", grammarNote: "pedir · ne · a estrutura de uma refeição italiana" },
  "lesson:a1-u07-l1": {
    theme: "Restaurante",
    title: "Reservar e sentar-se",
    objectives: [
      "reservar mesa e entrar num restaurante",
      "entender as perguntas do garçom",
      "pedir o cardápio e uma mesa do lado de fora"
    ],
    theory: [
      {
        h: "A ordem da refeição é fixa",
        p: "Um restaurante italiano funciona com uma sequência estabelecida: <em>antipasto</em> (entrada), <em>primo</em> (massa, risoto ou sopa), <em>secondo</em> (carne ou peixe), <em>contorno</em> (acompanhamento, que se pede à parte!), <em>dolce</em>, <em>caffè</em>. Ninguém espera que você peça tudo, mas o garçom vai perguntar nessa ordem."
      },
      {
        h: "O contorno se pede à parte",
        p: "Os legumes e as batatas <b>não</b> vêm com o segundo prato: são um pedido independente. O <em>secondo</em> chega sozinho no prato, sem nada do lado. Para quem vem do Brasil, onde o prato principal costuma vir com arroz, salada ou fritas, é a surpresa mais comum."
      },
      {
        h: "Coperto e servizio",
        p: "<em>Il coperto</em> (2-4 €) é uma taxa pelo couvert, o pão e o serviço de mesa: é legal e vem impressa no cardápio. A gorjeta não é esperada como em outros países: arredonda-se a conta ou deixam-se uns dois euros se o atendimento foi bom."
      },
      {
        tip: "A conta precisa ser pedida: <em>il conto, per favore</em>. O garçom não a traz por iniciativa própria, porque seria como mandar você embora."
      }
    ],
    grammar: {
      title: "Frases à mesa",
      table: {
        head: ["situação", "em italiano", "em português"],
        rows: [
          ["reservar", "Vorrei prenotare un tavolo per due.", "Eu gostaria de reservar uma mesa para dois."],
          ["sem reserva", "C'è un tavolo libero?", "Tem alguma mesa livre?"],
          ["do lado de fora", "Possiamo sederci fuori?", "Podemos sentar do lado de fora?"],
          ["o cardápio", "Il menù, per favore.", "O cardápio, por favor."],
          ["pedir", "Per me una carbonara.", "Para mim uma carbonara."],
          ["a conta", "Il conto, per favore.", "A conta, por favor."]
        ]
      },
      examples: [
        { tr: "Boa noite, vocês têm reserva?" },
        { tr: "Não, somos dois. Tem lugar?" },
        { tr: "Dentro ou fora?" },
        { tr: "O que o senhor me recomenda?" },
        { tr: "Sou alérgica a castanhas." },
        { tr: "Estava tudo uma delícia, parabéns." }
      ]
    },
    vocab: [
      "reservar",
      "mesa",
      "cardápio",
      "entrada",
      "primeiro prato",
      "segundo prato",
      "acompanhamento (pede-se à parte!)",
      "sobremesa",
      "a conta",
      "couvert (taxa fixa)",
      "somos dois",
      "o que o senhor me recomenda?"
    ],
    dialogue: [
      "Boa noite, vocês têm reserva?",
      "Não, somos dois. Tem alguma mesa livre?",
      "Dentro ou fora?",
      "Fora, se possível. Obrigado.",
      "Claro, fiquem à vontade. Aqui está o cardápio."
    ],
    exercises: [
      {
        q: "O que é «il contorno»?",
        opts: ["Uma sobremesa", "Um acompanhamento de legumes, que se pede à parte", "A taxa do couvert"]
      },
      { q: "O que significa «il coperto»?", opts: ["Um prato de carne", "Uma taxa pelo couvert e o pão", "Uma gorjeta"] },
      { q: "Complete: «Vorrei ___ un tavolo per due.»" },
      { q: "«A conta, por favor.»" },
      {
        q: "Ordene a refeição: ligue o nome à descrição.",
        pairs: ["entrada", "massa ou sopa", "carne ou peixe", "sobremesa"]
      },
      { tr: "Não, somos dois. Tem alguma mesa livre?" },
      {
        q: "Você entra num restaurante sem reserva.",
        setting: "Sexta-feira, oito e meia da noite, uma trattoria pequena.",
        lines: [
          { tr: "Boa noite! Vocês têm reserva?" },
          {
            tr: "Diga que não e pergunte se tem mesa livre para dois.",
            answerTr: "Não, tem mesa para dois?"
          },
          { tr: "Tem, mas só lá dentro. Pode ser?" },
          { tr: "Aceite e peça o cardápio.", answerTr: "Pode, o cardápio, por favor." }
        ]
      },
      { tr: "Eu gostaria de reservar uma mesa para quatro às oito." },
      { tr: "Boa noite, somos dois. Tem lugar do lado de fora?" }
    ]
  },
  "lesson:a1-u07-l2": {
    theme: "Restaurante",
    title: "Pedir um prato",
    objectives: ["pedir um prato específico e uma bebida", "perguntar o que vai num prato", "informar uma alergia ou uma dieta"],
    theory: [
      {
        h: "Três jeitos de pedir",
        p: "<em>Per me una carbonara</em> (para mim…), <em>Prendo una carbonara</em> (vou querer…), <em>Vorrei una carbonara</em> (eu gostaria de…). As três são normais; <em>vorrei</em> é a mais educada, <em>prendo</em> a mais natural."
      },
      {
        h: "Perguntar o que vai no prato",
        p: "<em>Cosa c'è dentro?</em>, <em>Contiene glutine?</em>, <em>È piccante?</em>, <em>È senza lattosio?</em> Os restaurantes são obrigados por lei a informar os alérgenos, então a pergunta não surpreende ninguém."
      },
      {
        h: "A água: a pergunta inevitável",
        p: "<em>Naturale o frizzante?</em> — sem gás ou com gás. A água da torneira (<em>acqua del rubinetto</em>) às vezes está disponível, mas muitos lugares simplesmente não a servem."
      },
      {
        tip: "O café chega <b>depois</b> da sobremesa, nunca durante a refeição e nunca em forma de cappuccino. <em>Un caffè</em> depois de comer faz parte do ritual, não é algo que se toma com o prato."
      }
    ],
    grammar: {
      title: "Pedir e perguntar sobre um prato",
      table: {
        head: ["função", "frase", "em português"],
        rows: [
          ["pedir", "Per me / Prendo / Vorrei…", "Para mim / Vou querer / Eu gostaria de…"],
          ["bebida", "Da bere, una bottiglia d'acqua.", "Para beber, uma garrafa de água."],
          ["o que vai", "Cosa c'è dentro?", "O que vai nele?"],
          ["alergia", "Sono allergico/a a…", "Sou alérgico/a a…"],
          ["dieta", "Sono vegetariano/a.", "Sou vegetariano/a."],
          ["sem", "Senza cipolla, per favore.", "Sem cebola, por favor."]
        ]
      },
      examples: [
        { tr: "Para mim uma carbonara e uma salada mista." },
        { tr: "Para beber? — Água sem gás, obrigado." },
        { tr: "O que vai na amatriciana?" },
        { tr: "Sou alérgico a frutos do mar." },
        { tr: "Este prato é sem glúten?" },
        { tr: "Um café no final, obrigado." }
      ]
    },
    vocab: [
      "massa",
      "carne / peixe",
      "salada",
      "legumes e verduras",
      "água sem gás / com gás",
      "vinho da casa",
      "sem glúten",
      "vegetariano / vegano",
      "sou alérgico a…",
      "picante",
      "malpassado / bem passado",
      "para beber"
    ],
    culture: {
      title: "Com olhos italianos: o que não se pede",
      text: "<p><b>O espaguete à bolonhesa</b> não existe num cardápio italiano. Em Bolonha se comem <i>tagliatelle al ragù</i>, e o espaguete com esse molho é uma invenção estrangeira.</p><p><b>O fettuccine Alfredo</b> é um prato americano. <b>Queijo com peixe</b> é considerado uma pequena ofensa, e pedir parmesão para pôr nos frutos do mar provoca uma reação educada, mas inequívoca.</p><p><b>O abacaxi na pizza</b> existe em algumas pizzarias turísticas. É uma escolha que você pode fazer, mas faça sabendo o que está fazendo.</p>"
    },
    exercises: [
      {
        q: "O garçom pergunta «Naturale o frizzante?». Sobre o quê?",
        opts: ["O tipo de massa", "A água: sem gás ou com gás", "O ponto da carne"]
      },
      { q: "Complete: «Sono ___ ai frutti di mare.» (alérgica a frutos do mar, quem fala é uma mulher)" },
      { q: "«Para mim uma carbonara, por favor.»" },
      {
        q: "Quando os italianos tomam café durante uma refeição?",
        opts: ["Com o segundo prato", "Depois da sobremesa", "No lugar da água"]
      },
      { q: "Ligue.", pairs: ["sem glúten", "picante", "bem passado", "para beber"] },
      {
        q: "Complete o pedido.",
        tr: "Para mim, massa ao sugo, sem cebola. Para beber, água sem gás."
      },
      { tr: "O que vai neste prato?" },
      {
        q: "O garçom anota o pedido.",
        setting: "Uma trattoria, uma mesa perto da janela.",
        lines: [
          { tr: "Então, o que vão querer?" },
          { tr: "Peça o cacio e pepe.", answerTr: "Para mim o cacio e pepe." },
          { tr: "Muito bem. E para beber?" },
          { tr: "Peça uma garrafa de água sem gás.", answerTr: "Uma garrafa de água sem gás." },
          { tr: "Perfeito. Algum acompanhamento?" },
          { tr: "Recuse com educação.", answerTr: "Não, obrigado, assim está bom." }
        ]
      },
      { tr: "Sou vegetariana, este prato tem carne?" },
      { tr: "Vou querer o cacio e pepe. Para beber, água com gás." }
    ]
  },
  "lesson:a1-u07-l3": {
    theme: "Gramática básica",
    title: "A partícula ne: primeiro contato",
    objectives: [
      "substituir um substantivo repetido por ne",
      "responder a uma pergunta de quantidade",
      "reconhecer ne em expressões comuns"
    ],
    theory: [
      {
        h: "Ne representa uma parte de um todo",
        p: "Quando você fala de <b>quanto</b> de algo já mencionado, repetir o substantivo soa pesado. <em>Quante mele vuoi? — <b>Ne</b> voglio tre.</em> Aqui <em>ne</em> significa «delas»."
      },
      {
        contrast: "O português não tem essa partícula: você diz «quero três» sem nada, e o buraco fica vazio. Em italiano <em>ne</em> é <b>obrigatório</b>: «voglio tre» puro soa incompleto, e isso se nota. Se você conhece francês, é exatamente o <em>en</em> de <em>j'en veux trois</em>."
      },
      {
        h: "Onde fica",
        p: "Antes do verbo conjugado, como os pronomes: <em>ne prendo due</em>, <em>non ne voglio</em>. Com um infinitivo, gruda no final: <em>vorrei prender<b>ne</b> due</em>."
      },
      {
        h: "Ne também substitui «di + alguma coisa»",
        p: "<em>Parliamo del progetto? — Sì, <b>ne</b> parliamo domani.</em> («Falamos disso amanhã.») Vamos aprofundar no B1; por enquanto basta reconhecê-lo."
      },
      {
        tip: "Expressões muito frequentes com <em>ne</em>: <em>Non ne so nulla</em> (não sei nada disso), <em>Che ne pensi?</em> (o que você acha?), <em>Me ne vado</em> (vou embora)."
      }
    ],
    grammar: {
      title: "Ne nas expressões de quantidade",
      table: {
        head: ["pergunta", "resposta com ne", "em português"],
        rows: [
          ["Quante mele vuoi?", "Ne voglio tre.", "Quero três."],
          ["Prendi il vino?", "Ne prendo un bicchiere.", "Vou tomar uma taça."],
          ["Hai fratelli?", "Sì, ne ho due.", "Tenho, dois."],
          ["Vuoi ancora pasta?", "No, grazie, non ne voglio più.", "Não, obrigado, não quero mais."],
          ["Che ne pensi?", "—", "O que você acha?"]
        ]
      },
      examples: [
        { tr: "Quantos cafés você toma por dia? — Tomo três." },
        { tr: "Quer pão? — Quero, vou pegar um pouco." },
        { tr: "Você tem filhos? — Tenho uma filha." },
        { tr: "Não sei nada disso." },
        { tr: "Eu gostaria de pegar dois.", note: "com infinitivo, ne gruda no final" }
      ]
    },
    vocab: [
      "disso, dele, dela (partícula)",
      "quantos (m / f)",
      "mais, ainda",
      "outro",
      "um pedaço",
      "uma fatia",
      "uma taça",
      "uma porção",
      "assim está bom",
      "o que você acha?",
      "não sei nada disso",
      "vou embora"
    ],
    exercises: [
      {
        q: "«Quante birre prendi? — Ne prendo due.» O que «ne» substitui?",
        opts: ["Você", "«birre», a coisa de que se fala", "Nada, é decorativo"]
      },
      { q: "Responda: «Hai fratelli? — Sì, ___ ho due.»" },
      { q: "Complete: «Vuoi del pane? — Sì, ___ prendo un po'.»" },
      {
        q: "Onde fica «ne» com um infinitivo?",
        opts: ["Antes: «ne prendere»", "Grudado no final: «prenderne»", "No fim da frase"]
      },
      { q: "«Quantos cafés você toma por dia? — Tomo três.»" },
      {
        q: "Ligue a expressão ao seu significado.",
        pairs: ["o que você acha?", "não sei nada disso", "vou embora", "pego dois"]
      },
      {
        q: "Complete a conversa.",
        tr: "— Quer mais vinho? — Não, obrigado, não quero mais. — E você? — Quero, vou tomar mais uma taça."
      },
      { tr: "Eu gostaria de pegar dois." },
      { tr: "Quantos pedaços de torta você quer? — Quero um, obrigado." },
      { tr: "Você tem irmãos? — Tenho, dois irmãos." }
    ]
  },
  "lesson:a1-u07-l4": {
    theme: "Restaurante",
    title: "Pagar e ir embora",
    objectives: [
      "pedir a conta e pagar",
      "dividir a conta entre várias pessoas",
      "dizer o que achou da comida"
    ],
    theory: [
      {
        h: "A conta precisa ser pedida",
        p: "O garçom não a traz se você não pedir: na cultura italiana de restaurante isso seria apressar o cliente. A fórmula padrão é <em>Il conto, per favore</em> ou <em>Possiamo avere il conto?</em> O gesto de assinar no ar também funciona."
      },
      {
        h: "Dividir a conta",
        p: "<strong>Alla romana</strong> significa «em partes iguais, todos pagam o mesmo». <em>Paghiamo alla romana</em> é a fórmula habitual: é o seu «rachar a conta». Se quiser contas separadas: <em>Conti separati, per favore</em>, possível, mas muitas vezes complicado em lugares pequenos."
      },
      {
        h: "Dizer o que achou",
        p: "<em>Era tutto buonissimo</em>, <em>Complimenti al cuoco</em>, <em>Squisito</em>. Os italianos elogiam a comida diretamente e esperam o mesmo: não dizer nada depois de uma boa refeição soa frio."
      },
      {
        tip: "<em>Offro io</em> («é por minha conta») é uma frase pela qual vale a pena brigar. A recusa do convidado faz parte do ritual, mas quem convidou costuma ganhar."
      }
    ],
    grammar: {
      title: "A conta e as despedidas",
      table: {
        head: ["situação", "em italiano", "em português"],
        rows: [
          ["pedir a conta", "Il conto, per favore.", "A conta, por favor."],
          ["em partes iguais", "Paghiamo alla romana.", "Vamos rachar a conta."],
          ["separado", "Conti separati, per favore.", "Contas separadas, por favor."],
          ["é por minha conta", "Offro io.", "Deixa que eu pago."],
          ["cartão", "Si può pagare con la carta?", "Dá para pagar com cartão?"],
          ["elogio", "Era tutto buonissimo!", "Estava tudo uma delícia!"]
        ]
      },
      examples: [
        { tr: "Pode trazer a conta?" },
        { tr: "O couvert é dois euros por pessoa." },
        { tr: "Infelizmente a maquininha não está funcionando." },
        { tr: "Pode ficar com o troco." },
        { tr: "Parabéns ao cozinheiro, uma delícia!" },
        { tr: "Boa noite!" }
      ]
    },
    vocab: [
      "a conta",
      "rachando a conta",
      "contas separadas",
      "é por minha conta",
      "gorjeta",
      "maquininha de cartão",
      "troco",
      "delicioso",
      "parabéns",
      "estava tudo uma delícia",
      "boa noite",
      "a gente volta"
    ],
    exercises: [
      {
        q: "O que significa «pagare alla romana»?",
        opts: ["Pagar em dinheiro", "Rachar a conta", "Pagar por todos"]
      },
      {
        q: "Por que o garçom não traz a conta sem que ninguém peça?",
        opts: ["Ele esquece", "Porque seria apressar o cliente", "Porque é proibido"]
      },
      { q: "«Pode trazer a conta?»" },
      { q: "Complete: «___ io!» (é por minha conta)" },
      { q: "Ligue.", pairs: ["gorjeta", "troco", "delicioso", "contas separadas"] },
      {
        q: "Complete o fim do jantar.",
        tr: "— Estava tudo uma delícia, parabéns! — Obrigado! — A conta, por favor. Dá para pagar com cartão?"
      },
      { tr: "Vamos rachar a conta, obrigado." },
      {
        q: "Fim do jantar.",
        setting: "Os pratos já foram recolhidos, o garçom passa perto da mesa.",
        lines: [
          { tr: "Peça a conta.", answerTr: "A conta, por favor." },
          { tr: "Já trago. Correu tudo bem hoje?" },
          { tr: "Elogie a comida.", answerTr: "Estava tudo uma delícia, parabéns!" },
          { tr: "Muito obrigado! São quarenta e seis euros." },
          { tr: "Pergunte se dá para pagar com cartão.", answerTr: "Dá para pagar com cartão?" }
        ]
      },
      { tr: "A conta dá quarenta e seis euros, com o couvert incluído." },
      { tr: "Estava tudo uma delícia, parabéns ao cozinheiro!" }
    ]
  },
  "lesson:a1-u07-test": {
    theme: "Teste",
    title: "Teste da unidade 7",
    objectives: ["verificar o vocabulário de restaurante, os pedidos e a partícula ne"],
    theory: [{ p: "Dez perguntas. Aprovação com 70%." }],
    exercises: [
      { q: "«Il contorno» é:", opts: ["a sobremesa", "um acompanhamento de legumes", "a taxa do couvert"] },
      { q: "«Il coperto» é:", opts: ["um prato de carne", "a taxa do couvert", "uma gorjeta"] },
      { q: "«Vorrei ___ un tavolo per due.»" },
      { q: "«Hai fratelli? — Sì, ___ ho due.»" },
      { q: "«Sono ___ ai frutti di mare.» (quem fala é uma mulher)" },
      { q: "«A conta, por favor.»" },
      { q: "Ligue.", pairs: ["rachando a conta", "é por minha conta", "delicioso", "para beber"] },
      { tr: "Para mim uma carbonara, sem cebola." },
      { tr: "Para beber vamos querer uma garrafa de água sem gás." },
      { tr: "Pode trazer a conta?" }
    ]
  }
});
