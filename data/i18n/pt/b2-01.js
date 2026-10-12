/* ============================================================
   Texto na língua do aluno (pt, português do Brasil) para data/core/b2-01.js
   As chaves apontam para os id da camada neutra; os arrays se
   combinam por índice, então o comprimento deles tem de bater com o core.
   Quem verifica isso é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:b2-u01": {
    title: "Congiuntivo imperfetto",
    grammarNote: "congiuntivo imperfetto e trapassato · concordância dos tempos"
  },
  "lesson:b2-u01-l1": {
    theme: "Gramática",
    title: "Formas e usos básicos",
    objectives: [
      "formar o congiuntivo imperfetto",
      "conhecer as formas irregulares",
      "usá-lo depois de uma principal no passado"
    ],
    theory: [
      {
        h: "As terminações são extraordinariamente regulares",
        p: "Radical do infinitivo + <em>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</em>: <em>parlassi, prendessi, dormissi</em>. Só seis verbos são irregulares: <em>essere → fossi</em>, <em>fare → facessi</em>, <em>dare → dessi</em>, <em>stare → stessi</em>, <em>dire → dicessi</em>, <em>bere → bevessi</em>."
      },
      {
        contrast: "O seu imperfeito do subjuntivo se forma de outro jeito: sai da terceira pessoa do plural do pretérito perfeito (falaram → falasse), e por isso carrega todas as irregularidades desse tempo (disseram → dissesse, tiveram → tivesse, puseram → pusesse). O italiano o tira do infinitivo e fica com seis exceções. A consequência prática é boa: aqui você não precisa lembrar do pretérito para acertar."
      },
      {
        h: "A regra básica: a principal vai para o passado",
        p: "Quando a principal passa para o passado, o congiuntivo presente vira imperfetto. <em>Penso che <b>sia</b> vero</em> → <em>Pensavo che <b>fosse</b> vero.</em> É a mesma concordância do português: “duvido que seja” → “duvidava que fosse”. Só atenção ao verbo: depois de “acho que” e “penso que” o português usa o indicativo, enquanto <em>penso che</em> pede congiuntivo."
      },
      {
        h: "Segundo contexto: uma hipótese com se",
        p: "<em>Se <b>avessi</b> tempo, verrei</em> (“se eu tivesse tempo, iria”). É o segundo tipo de oração condicional, que tem a sua própria unidade mais adiante. Por enquanto, guarde que depois de <em>se</em> nunca vem condicional, assim como depois do seu “se”."
      },
      {
        h: "Terceiro contexto: um desejo",
        p: "O congiuntivo imperfetto pode aparecer sozinho e expressar um desejo ou um lamento: <em>Magari venisse!</em> (“quem dera ele viesse!”), <em>Fosse vero!</em>, <em>Piovesse almeno!</em>. É o seu “quem dera” com imperfeito do subjuntivo, com a mesma carga."
      }
    ],
    grammar: {
      title: "Congiuntivo imperfetto",
      table: {
        head: ["pessoa", "parlare", "prendere", "dormire", "essere", "fare"],
        rows: [
          ["che io", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che tu", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che lui/lei", "parlasse", "prendesse", "dormisse", "fosse", "facesse"],
          ["che noi", "parlassimo", "prendessimo", "dormissimo", "fossimo", "facessimo"],
          ["che voi", "parlaste", "prendeste", "dormiste", "foste", "faceste"],
          ["che loro", "parlassero", "prendessero", "dormissero", "fossero", "facessero"]
        ]
      },
      examples: [
        { tr: "Eu achava que era mais simples." },
        { tr: "Eu não sabia que você trabalhava aqui." },
        { tr: "Eu queria que você tivesse me dito antes." },
        { tr: "Se eu tivesse tempo, iria com muito prazer." },
        { tr: "Quem dera ela viesse também!" },
        { tr: "Parecia que não havia ninguém." }
      ]
    },
    vocab: [
      "eu achava que…",
      "eu não sabia que…",
      "eu queria que…",
      "parecia que…",
      "quem dera, talvez",
      "como se",
      "contanto que",
      "por via das dúvidas",
      "se for o caso, se precisar",
      "quase me dá vontade de",
      "já está na hora de",
      "quem sabe se"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Complete: “Pensavo che ___ più semplice.” (essere)" },
      { q: "Complete: “Non sapevo che tu ___ qui.” (lavorare)" },
      {
        q: "“Penso che sia vero” com a principal no passado:",
        opts: ["Pensavo che sia vero.", "Pensavo che fosse vero.", "Pensavo che era vero."]
      },
      {
        q: "Coloque o congiuntivo imperfetto.",
        tr: "Eu queria que você me dissesse antes e que viesse com a gente."
      },
      { q: "“Magari venisse!” significa:", opts: ["Talvez venha", "Quem dera viesse!", "Viria"] },
      { q: "“Parecia que não havia ninguém.”" },
      { tr: "Eu não sabia que você já tinha terminado o projeto." },
      { tr: "Eu achava que era mais fácil do que isto." }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Gramática",
    title: "A concordância dos tempos",
    objectives: [
      "escolher o tempo da subordinada",
      "expressar anterioridade, simultaneidade ou posterioridade",
      "formar o congiuntivo trapassato"
    ],
    theory: [
      {
        h: "Três relações temporais",
        p: "Num período composto a subordinada pode ser <b>anterior</b>, <b>simultânea</b> ou <b>posterior</b> à principal. O modo e o tempo dependem de duas coisas: do tempo da principal e da relação."
      },
      {
        h: "A tabela que vale a pena decorar",
        list: [
          "principal no <b>presente</b>: simultaneidade → cong. presente; anterioridade → cong. passato; posterioridade → cong. presente ou futuro",
          "principal no <b>passado</b>: simultaneidade → cong. imperfetto; anterioridade → cong. trapassato; posterioridade → condizionale passato"
        ]
      },
      {
        h: "Congiuntivo trapassato",
        p: "Congiuntivo imperfetto de <em>avere/essere</em> + particípio: <em>avessi fatto</em>, <em>fossi andato</em>. Marca o que é anterior a uma principal no passado: <em>Pensavo che <b>fosse già partito</b>.</em> É o seu “tivesse feito”, construído do mesmo jeito."
      },
      {
        contrast: "A posterioridade é onde o português e o italiano se separam. Você diz “achava que ele <b>viria</b>”, com futuro do pretérito simples; o italiano exige o <b>condizionale passato</b>: <em>Pensavo che <b>sarebbe venuto</b></em>, literalmente “achava que teria vindo”. (Depois de verbos de desejo também se aceita o congiuntivo imperfetto: <em>speravo che mi chiamasse</em>.) É o mesmo desencontro do discurso indireto do B1, e continua sendo o erro mais frequente."
      }
    ],
    grammar: {
      title: "Concordância dos tempos",
      table: {
        head: ["principal", "relação", "forma na subordinada", "exemplo"],
        rows: [
          ["presente", "simultaneidade", "cong. presente", "Penso che sia qui."],
          ["presente", "anterioridade", "cong. passato", "Penso che sia stato qui."],
          ["presente", "posterioridade", "cong. presente / futuro", "Penso che venga domani."],
          ["passado", "simultaneidade", "cong. imperfetto", "Pensavo che fosse qui."],
          ["passado", "anterioridade", "cong. trapassato", "Pensavo che fosse stato qui."],
          ["passado", "posterioridade", "condizionale passato", "Pensavo che sarebbe venuto."]
        ]
      },
      examples: [
        { tr: "Eu achava que ele já tinha respondido." },
        { tr: "Eu esperava que ele me ligasse." },
        { tr: "Eu não fazia ideia de que fosse tão complicado." },
        { tr: "Era estranho que eles ainda não tivessem chegado." },
        { tr: "Eu temia que tivéssemos errado o caminho." },
        { tr: "Me parecia que havia um erro." }
      ]
    },
    vocab: [
      "concordância",
      "anterioridade",
      "simultaneidade",
      "posterioridade",
      "imaginar, supor",
      "temer",
      "suspeitar",
      "duvidar",
      "dar como certo",
      "acabar sendo, revelar-se",
      "naquele momento",
      "enquanto isso"
    ],
    exercises: [
      { q: "Complete: “Credevo che ___ già risposto.” (avere, ele)" },
      { q: "Complete: “Speravo che mi ___ chiamato.” (o futuro no passado)" },
      {
        q: "“Pensavo che ___ domani.” (venire, posterioridade)",
        opts: ["venisse", "sarebbe venuto", "verrebbe"]
      },
      { q: "“Pensavo che ___ qui.” (essere, simultaneidade)", opts: ["sia", "fosse", "sarebbe stato"] },
      {
        q: "Coloque as formas corretas.",
        tr: "Eu não fazia ideia de que fosse tão complicado e de que levaria tanto tempo."
      },
      {
        q: "Coloque as formas corretas.",
        tr: "Era estranho que eles ainda não tivessem chegado e que ninguém tivesse avisado."
      },
      { q: "“Eu esperava que ele me ligasse.”" },
      {
        q: "O erro mais frequente com a concordância dos tempos é:",
        opts: [
          "usar o congiuntivo no lugar do indicativo",
          "usar o condicional simples no lugar do composto para a posterioridade",
          "omitir o che"
        ]
      },
      { tr: "Eu temia que tivéssemos errado o caminho e que fosse tarde demais." },
      { tr: "Eu achava que ele já tinha respondido ao meu e-mail." }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Gramática",
    title: "Conjunções que exigem subjuntivo",
    objectives: [
      "usar come se com o congiuntivo imperfetto",
      "conhecer as conjunções de finalidade, condição e concessão",
      "escolher entre indicativo e congiuntivo"
    ],
    theory: [
      {
        h: "Come se leva sempre imperfetto ou trapassato",
        p: "<em>Parla <b>come se</b> fosse un esperto.</em> Nunca o presente e nunca o indicativo, nem mesmo com a principal no presente. É uma exceção à concordância dos tempos, e no seu caso é um presente: o seu “como se” funciona exatamente igual, “fala como se fosse um especialista”, e também não aceita presente."
      },
      {
        h: "Conjunções por função",
        list: [
          "<b>concessão</b>: benché, sebbene, nonostante, malgrado, per quanto",
          "<b>finalidade</b>: affinché, perché (= para que)",
          "<b>condição</b>: purché, a patto che, a condizione che, sempre che",
          "<b>exceção</b>: a meno che (non), salvo che, tranne che",
          "<b>tempo</b>: prima che (senza che, fino a che non)"
        ]
      },
      {
        h: "A meno che e o non expletivo",
        p: "<em>Vengo, <b>a meno che non</b> piova.</em> Esse <em>non</em> não nega: a frase significa “eu vou, a menos que chova”. Omiti-lo é aceito hoje, mas a forma com <em>non</em> continua sendo a padrão. O português não põe “não” aqui (“a menos que chova”), então leia o <em>non</em> como parte fixa da conjunção e não o traduza."
      },
      {
        trap: "<b>Dopo che</b> leva indicativo, <b>prima che</b> congiuntivo. Aqui o português ajuda: “antes que ele chegue” pede subjuntivo e “depois que ele saiu” vai no indicativo. O cuidado é com o futuro: onde você diria “depois que ele sair”, com futuro do subjuntivo, o italiano continua no indicativo, <em>dopo che sarà partito</em>."
      }
    ],
    grammar: {
      title: "Conjunções e modo",
      table: {
        head: ["conjunção", "modo", "exemplo"],
        rows: [
          ["benché / sebbene", "congiuntivo", "Benché piova, esco."],
          ["affinché", "congiuntivo", "Te lo dico affinché tu capisca."],
          ["purché / a patto che", "congiuntivo", "Vengo purché tu ci sia."],
          ["a meno che non", "congiuntivo", "Vengo a meno che non piova."],
          ["prima che", "congiuntivo", "Parti prima che sia tardi."],
          ["dopo che", "indicativo", "Dopo che è partito, ho capito."],
          ["come se", "cong. imperf./trapass.", "Parla come se fosse esperto."]
        ]
      },
      examples: [
        { tr: "Ele se comporta como se nada tivesse acontecido." },
        { tr: "Por mais difícil que seja, vale a pena." },
        { tr: "Eu te ajudo, desde que você leve isso a sério." },
        { tr: "Vamos sair antes que o trânsito comece." },
        { tr: "Eu vou, a menos que surja alguma coisa." },
        { tr: "Embora tivesse razão, não disse nada." }
      ]
    },
    vocab: [
      "por mais que, embora",
      "apesar de",
      "para que",
      "contanto que",
      "com a condição de que",
      "a menos que",
      "salvo se",
      "até que",
      "comportar-se",
      "um imprevisto",
      "valer a pena",
      "levar a sério"
    ],
    exercises: [
      {
        q: "“Parla come se ___ un esperto.” (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Come se leva sempre congiuntivo imperfetto ou trapassato."
      },
      { q: "Complete: “Partiamo prima che ___ tardi.” (essere)" },
      { q: "Complete: “Ti aiuto a patto che tu ___ serio.” (essere)" },
      {
        q: "“Dopo che è partito”: por que indicativo?",
        opts: ["É um erro", "Dopo che se refere a algo que aconteceu de verdade", "Porque partire é irregular"]
      },
      {
        q: "Quais conjunções exigem congiuntivo?",
        opts: ["benché", "dopo che", "affinché", "siccome", "a meno che non"]
      },
      { q: "Coloque as formas.", tr: "Ele se comporta como se nada tivesse acontecido, embora todos saibam a verdade." },
      { q: "“Eu vou, a menos que surja alguma coisa.”" },
      { tr: "Por mais difícil que seja, vale a pena tentar." },
      { tr: "Embora tivesse razão, preferiu não dizer nada." },
      { tr: "Eu te ajudo com muito prazer, desde que você me avise a tempo." }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Teste",
    title: "Teste da unidade 1",
    objectives: ["verificar o congiuntivo imperfetto, o trapassato e a concordância dos tempos"],
    theory: [{ p: "Dez tarefas. Aprovação com 70%." }],
    exercises: [
      {  },
      {  },
      { q: "“Pensavo che ___ più semplice.”" },
      { q: "“Credevo che ___ già risposto.” (avere, ele)" },
      { q: "“Pensavo che ___ domani.” (venire)", opts: ["venisse", "sarebbe venuto", "verrebbe"] },
      { q: "“Parla come se ___ esperto.”", opts: ["è", "sia", "fosse"] },
      { q: "“Partiamo prima che ___ tardi.”" },
      { q: "Quais exigem congiuntivo?", opts: ["benché", "dopo che", "purché", "siccome"] },
      { tr: "Eu não fazia ideia de que conseguir a autorização fosse tão complicado." },
      { tr: "Eu esperava que ele me respondesse antes de anteontem." }
    ]
  },
  "unit:b2-u02": {
    title: "As orações condicionais",
    grammarNote: "os três tipos com se · o tipo misto · variantes coloquiais"
  },
  "lesson:b2-u02-l1": {
    theme: "Gramática",
    title: "Os três tipos de condicional",
    objectives: [
      "distinguir a real, a possível e a irreal",
      "ajustar os tempos a cada tipo",
      "não colocar o condicional na oração com se"
    ],
    theory: [
      {
        h: "Tipo 1: real",
        p: "<em><b>Se</b> piove, <b>resto</b> a casa.</em> A condição é real e provável. As duas orações no indicativo: presente, futuro ou imperativo (<em>Se hai tempo, chiamami</em>)."
      },
      {
        h: "Tipo 2: possível, mas incerta",
        p: "<em><b>Se avessi</b> tempo, <b>verrei</b>.</em> Congiuntivo imperfetto depois de <em>se</em>, condizionale presente na principal. É o seu “se eu tivesse tempo, iria”, com exatamente a mesma distribuição."
      },
      {
        h: "Tipo 3: irreal, sobre o passado",
        p: "<em><b>Se avessi studiato</b>, <b>avrei passato</b> l'esame.</em> Congiuntivo trapassato + condizionale passato. O seu “se eu tivesse estudado, teria passado”: mesmo esquema, mesma carga de lamento ou censura."
      },
      {
        contrast: "Os tipos 2 e 3 são terreno conhecido, e por isso vale marcar as duas armadilhas. A primeira: <em>se</em> nunca leva condicional. “Se avrei tempo” é o erro de estrangeiro mais reconhecível do italiano, tão errado quanto “se eu teria tempo” em português. A segunda é sua: no tipo 1 o português usa o futuro do subjuntivo (“se eu tiver tempo”, “se chover”), um tempo que o italiano não tem. Aqui vai o indicativo: <em>Se ho tempo</em>, <em>Se piove</em>, ou <em>Se avrò tempo</em> para o futuro."
      }
    ],
    grammar: {
      title: "Os três tipos",
      table: {
        head: ["tipo", "oração com se", "principal", "exemplo"],
        rows: [
          ["1. real", "indicativo", "indicativo / imperativo", "Se piove, resto a casa."],
          ["1. futuro", "presente / futuro", "futuro", "Se verrai, ti aspetterò."],
          ["2. possível", "cong. imperfetto", "condizionale presente", "Se avessi tempo, verrei."],
          ["3. irreal", "cong. trapassato", "condizionale passato", "Se avessi studiato, avrei passato."],
          [
            "misto",
            "cong. trapassato",
            "condizionale presente",
            "Se avessi studiato, ora lavorerei qui."
          ]
        ]
      },
      examples: [
        { tr: "Se amanhã fizer tempo bom, vamos à praia." },
        { tr: "Se eu fosse você, não faria isso." },
        { tr: "Se tivéssemos sabido antes, teríamos ido ontem." },
        { tr: "Se eu tivesse aceitado aquele emprego, agora moraria em Roma.", note: "o tipo misto" },
        { tr: "Se precisar de alguma coisa, me liga." },
        { tr: "O que você faria se ganhasse na loteria?" }
      ]
    },
    vocab: [
      "se",
      "por via das dúvidas",
      "caso (formal)",
      "caso contrário",
      "se eu fosse você",
      "quem dera",
      "hipótese",
      "condição",
      "realizar-se, tornar-se realidade",
      "arrepender-se",
      "arrependimento",
      "mudar de ideia"
    ],
    exercises: [
      { q: "“Se ___ tempo, verrei.” (avere)", opts: ["ho", "avrei", "avessi"] },
      { q: "“Se avessi studiato, ___ l'esame.” (passare)", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Complete: “Se domani ___ bel tempo, andiamo al mare.” (fare)" },
      {
        q: "Qual frase está errada?",
        opts: ["Se avessi tempo, verrei.", "Se avrei tempo, verrei.", "Se ho tempo, vengo."]
      },
      { q: "Complete um tipo 2.", tr: "Se eu fosse você, não faria isso." },
      { q: "Complete um tipo 3.", tr: "Se tivéssemos sabido antes, teríamos ido ontem." },
      { q: "“O que você faria se ganhasse na loteria?”" },
      {
        q: "“Se avessi accettato quel lavoro, ora vivrei a Roma” é do tipo:",
        opts: ["primeiro", "segundo", "misto"]
      },
      { tr: "Se tivéssemos reservado antes, teríamos pagado muito menos." },
      { tr: "Se eu fosse você, pensaria um pouco mais." }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Gramática",
    title: "Variantes coloquiais e formais",
    objectives: [
      "reconhecer a condicional coloquial com o imperfeito",
      "usar qualora e nel caso in cui",
      "ajustar o registro à situação"
    ],
    theory: [
      {
        h: "O duplo imperfeito na fala",
        p: "<em>Se lo sapevo, non venivo.</em> Na conversa os italianos substituem muito o tipo 3 por um duplo imperfeito. É difundido e aceito na fala, mas <b>não por escrito</b> nem numa prova. O português falado faz algo parecido com “se eu soubesse, nem vinha”, no lugar de “não teria vindo”, e com o mesmo estatuto: se diz, não se escreve."
      },
      {
        h: "Variantes formais",
        p: "<em><b>Qualora</b> il pagamento non pervenisse entro…</em> é típico de contratos e cartas oficiais, sempre com congiuntivo. Equivale ao seu “caso o pagamento não seja recebido até…” ou ao mais burocrático “na hipótese de não recebimento do pagamento”. <em><b>Nel caso in cui</b></em> funciona igual. <em><b>Ove</b></em> é ainda mais literário."
      },
      {
        h: "Uma condição sem se",
        list: [
          "gerundio: <em>Studiando di più, passeresti l'esame.</em>",
          "imperativo + e: <em>Chiedi e ti sarà dato.</em>",
          "<em>a + infinitivo</em>: <em>A pensarci bene, hai ragione.</em>",
          "<em>senza</em>: <em>Senza il tuo aiuto non ce l'avrei fatta.</em>"
        ]
      },
      {
        tip: "<em>Magari</em> com congiuntivo imperfetto expressa o desejo por si só, sem principal: <em>Magari fosse così semplice!</em>, o seu “quem dera fosse tão simples!”."
      }
    ],
    grammar: {
      title: "Variantes",
      table: {
        head: ["registro", "construção", "exemplo"],
        rows: [
          ["coloquial", "imperfetto + imperfetto", "Se lo sapevo, non venivo."],
          ["padrão", "cong. trapassato + cond. passato", "Se l'avessi saputo, non sarei venuto."],
          ["formal", "qualora + congiuntivo", "Qualora fosse necessario, provvederemo."],
          ["formal", "nel caso in cui", "Nel caso in cui non arrivasse…"],
          ["sem se", "gerundio", "Studiando di più, passeresti."],
          ["sem se", "senza + substantivo", "Senza di te non ce l'avrei fatta."]
        ]
      },
      examples: [
        { tr: "Caso eu não receba a confirmação, vou cancelar a reserva." },
        { tr: "Se chover, a gente se encontra no bar." },
        { tr: "Querendo, dá para fazer amanhã também." },
        { tr: "Se eu soubesse, nem tinha saído de casa.", note: "coloquial" },
        { tr: "Quem dera fosse tão simples!" },
        { tr: "Se eu tivesse sabido antes, teria feito de outro jeito." }
      ]
    },
    vocab: [
      "caso (formal)",
      "no caso de",
      "se (muito formal)",
      "providenciar, tomar medidas",
      "cancelar",
      "confirmação",
      "querendo",
      "se eu tivesse sabido",
      "de outro jeito",
      "caso contrário",
      "registro",
      "não recomendável"
    ],
    exercises: [
      {
        q: "“Se lo sapevo, non venivo” é uma construção:",
        opts: ["correta por escrito", "coloquial, válida na fala, não recomendável por escrito", "sempre incorreta"]
      },
      { q: "Complete: “Qualora ___ necessario, provvederemo.” (essere)" },
      { q: "Complete: “Nel caso in cui ___, ci vediamo al bar.” (piovere)" },
      {
        q: "“Volendo, si può fare domani” significa:",
        opts: ["Querendo, se faz amanhã", "Se a gente quiser, dá para fazer amanhã", "Alguém quer fazer amanhã"]
      },
      { q: "Reescreva no registro padrão.", tr: "Se eu tivesse sabido, não teria vindo." },
      { q: "“Se chover, a gente se encontra no bar.”" },
      { q: "Relacione.", pairs: ["caso (formal)", "providenciar", "cancelar", "caso contrário"] },
      { tr: "Sem a sua ajuda eu não teria conseguido." },
      { tr: "Caso a confirmação não chegue antes de sexta, vamos cancelar a reserva." },
      { tr: "Quem dera fosse tão simples como você diz." }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Comunicação",
    title: "Lamento, censura, hipótese",
    objectives: [
      "expressar arrependimento pelo passado",
      "fazer uma crítica sem agressividade",
      "manter uma conversa hipotética"
    ],
    theory: [
      {
        h: "O lamento é o terceiro tipo",
        p: "<em>Avrei dovuto ascoltarti.</em> (“Eu deveria ter te ouvido.”) O condizionale passato de <em>dovere</em> e <em>potere</em> é a maneira padrão de expressar arrependimento e autocrítica em italiano, igual ao seu “deveria ter” e “poderia ter”."
      },
      {
        h: "Uma crítica suavizada",
        p: "<em>Avresti potuto dirmelo.</em> (“Você poderia ter me dito.”) soa mais suave que <em>perché non me l'hai detto?</em>. O condizionale passato tira o gume e deixa o conteúdo, exatamente como em português."
      },
      {
        h: "Construções de arrependimento",
        list: [
          "<em>Se solo avessi…</em> — se ao menos eu tivesse…",
          "<em>Non avrei mai dovuto…</em> — eu nunca deveria ter…",
          "<em>Con il senno di poi…</em> — olhando para trás…",
          "<em>Mi pento di…</em> — eu me arrependo de…"
        ]
      },
      {
        tip: "<em>Meno male che…</em> (“ainda bem que…”) é o contrário do lamento e uma maneira muito frequente de abrir uma frase: <em>Meno male che sei arrivato.</em>"
      }
    ],
    grammar: {
      title: "Lamento e censura",
      table: {
        head: ["função", "construção", "exemplo"],
        rows: [
          ["lamento", "avrei dovuto + infinitivo", "Avrei dovuto ascoltarti."],
          ["ocasião perdida", "avrei potuto + infinitivo", "Avrei potuto accettare."],
          ["censura", "avresti potuto + infinitivo", "Avresti potuto avvisarmi."],
          ["quem dera", "se solo + cong. trapassato", "Se solo avessi saputo!"],
          ["alívio", "meno male che + indicativo", "Meno male che sei qui."],
          ["remorso", "mi pento di + infinitivo", "Mi pento di aver detto quello."]
        ]
      },
      examples: [
        { tr: "Eu deveria ter aceitado aquela oferta." },
        { tr: "Você poderia ter me dito antes." },
        { tr: "Se ao menos eu tivesse ouvido a minha mãe!" },
        { tr: "Olhando para trás, foi um erro." },
        { tr: "Ainda bem que eu não assinei." },
        { tr: "Não me arrependo nem um pouco." }
      ]
    },
    vocab: [
      "deveria ter",
      "poderia ter",
      "se ao menos",
      "olhando para trás",
      "arrepender-se de",
      "ainda bem que",
      "por sorte",
      "uma oportunidade perdida",
      "perceber",
      "admitir, reconhecer",
      "um erro de cálculo",
      "com o tempo"
    ],
    exercises: [
      { q: "Complete: “___ dovuto ascoltarti.” (eu deveria ter)" },
      { q: "Complete: “___ potuto avvisarmi.” (você poderia ter)" },
      {
        q: "Qual soa como crítica suave e não como acusação?",
        opts: ["Perché non me l'hai detto?", "Avresti potuto dirmelo.", "Dovevi dirmelo!"]
      },
      { q: "Complete o lamento.", tr: "Se ao menos eu tivesse sabido antes, não teria assinado aquele contrato." },
      { q: "“Olhando para trás, foi um erro.”" },
      { q: "Relacione.", pairs: ["ainda bem que", "arrepender-se", "se ao menos", "uma oportunidade perdida"] },
      {
        q: "“Non me ne pento affatto” significa:",
        opts: ["Eu me arrependo um pouco", "Não me arrependo nem um pouco", "Vou me arrepender"]
      },
      { tr: "Eu deveria ter aceitado aquela oferta." },
      { tr: "Olhando para trás, eu teria tomado decisões diferentes." },
      { tr: "Você poderia ter me dito antes, eu teria mudado os meus planos." }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Teste",
    title: "Teste da unidade 2",
    objectives: ["verificar os três tipos de condicional e a linguagem do lamento"],
    theory: [{ p: "Dez tarefas. Aprovação com 70%." }],
    exercises: [
      { q: "“Se ___ tempo, verrei.”", opts: ["ho", "avrei", "avessi"] },
      { q: "“Se avessi studiato, ___ l'esame.”", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Tipo 2.", tr: "Se eu fosse você, não faria isso." },
      { q: "Tipo 3.", tr: "Se tivéssemos reservado antes, teríamos pagado menos." },
      { q: "“Qualora ___ necessario, provvederemo.”" },
      { q: "“___ dovuto ascoltarti.”" },
      { q: "“___ potuto avvisarmi.”" },
      { q: "A frase incorreta:", opts: ["Se avessi tempo…", "Se avrei tempo…", "Se ho tempo…"] },
      { tr: "Se ao menos eu tivesse sabido, não teria assinado aquele contrato." },
      { tr: "Se eu fosse você, pensaria duas vezes." }
    ]
  },
  "unit:b2-u03": {
    title: "A passiva e o passato remoto",
    grammarNote: "essere/venire/andare + particípio · passato remoto"
  },
  "lesson:b2-u03-l1": {
    theme: "Gramática",
    title: "Quatro maneiras de construir uma passiva",
    objectives: [
      "formar a passiva com essere e com venire",
      "entender andare + particípio como obrigação",
      "usar o si passivante na fala"
    ],
    theory: [
      {
        h: "Essere: a forma básica",
        p: "<em>La lettera <b>è stata scritta</b> da Marco.</em> Funciona em todos os tempos. O particípio concorda com o sujeito e o agente é introduzido por <em>da</em>. É o seu “ser + particípio” com “por”."
      },
      {
        h: "Venire: só tempos simples, foco no processo",
        p: "<em>La legge <b>viene approvata</b> ogni anno.</em> Não se pode dizer “è venuta approvata”: <em>venire</em> não forma passiva nos tempos compostos. Ele sublinha a repetição e o próprio processo. O português não tem essa segunda passiva: onde o italiano escolhe entre <em>essere</em> e <em>venire</em>, você usa “ser” para as duas coisas."
      },
      {
        h: "Andare: uma passiva que carrega obrigação",
        p: "<em>Il modulo <b>va compilato</b> in stampatello.</em> Não é uma passiva normal: a frase significa “o formulário <b>deve</b> ser preenchido”. Muito frequente em instruções e na linguagem administrativa. O seu equivalente é “deve ser preenchido” ou “tem de ser preenchido”, com dois verbos: o italiano faz isso com o verbo <em>andare</em>, e lê-lo como uma passiva de <em>essere</em> muda completamente o sentido."
      },
      {
        h: "Si passivante: a versão falada",
        p: "<em>Qui <b>si vendono</b> panini.</em> É a mais frequente na conversa porque pesa menos. O verbo concorda com a coisa, não com o agente oculto: é o “aqui se vendem sanduíches” da norma culta. Cuidado com o hábito brasileiro de dizer “aqui vende sanduíche”, com o verbo invariável: em italiano o plural é obrigatório."
      }
    ],
    grammar: {
      title: "Quatro formas de passiva",
      table: {
        head: ["forma", "exemplo", "significado"],
        rows: [
          ["essere", "La casa è stata venduta.", "a casa foi vendida"],
          ["venire", "La casa viene venduta ogni anno.", "a casa é vendida (processo)"],
          ["andare", "La casa va venduta subito.", "a casa deve ser vendida"],
          ["si passivante", "Qui si vendono case.", "aqui se vendem casas"],
          ["o agente", "…da un'agenzia", "…por uma agência"],
          ["só transitivos", "—", "uma passiva precisa de objeto direto"]
        ]
      },
      examples: [
        { tr: "O projeto foi aprovado na semana passada." },
        { tr: "Os pedidos são avaliados num prazo de trinta dias." },
        { tr: "O formulário deve ser assinado em todas as páginas." },
        { tr: "Neste escritório se falam três idiomas." },
        { tr: "A reunião foi adiada pelo diretor." },
        { tr: "Esses erros devem ser evitados." }
      ]
    },
    vocab: [
      "aprovar",
      "avaliar, analisar",
      "rejeitar",
      "adiar",
      "preencher",
      "anexar",
      "evitar",
      "apresentar, entregar",
      "num prazo de trinta dias",
      "prazo",
      "pedido, requerimento",
      "resultado"
    ],
    exercises: [
      {
        q: "“Il modulo va compilato” significa:",
        opts: ["O formulário vai preenchido", "O formulário deve ser preenchido", "O formulário foi preenchido"]
      },
      {
        q: "Qual forma NÃO funciona nos tempos compostos?",
        opts: ["essere + particípio", "venire + particípio", "si passivante"]
      },
      {
        q: "Passe para a passiva: “Marco ha scritto la lettera.” → “La lettera ___ stata scritta da Marco.”"
      },
      { q: "Complete: “Le domande ___ valutate entro trenta giorni.” (venire)" },
      { q: "Complete: “Questi errori ___ evitati.” (devem ser evitados)" },
      {
        q: "Complete as formas passivas.",
        tr: "O projeto foi aprovado ontem, mas o formulário ainda deve ser assinado."
      },
      { q: "“A reunião foi adiada pelo diretor.”" },
      {
        q: "“Qui si vendono panini”: por que “vendono”?",
        opts: [
          "É um erro",
          "O si passivante concorda com a coisa no plural",
          "Porque há vários vendedores"
        ]
      },
      { tr: "Os pedidos devem ser apresentados antes do dia quinze do mês." },
      { tr: "O documento foi aprovado e deve ser assinado antes de sexta." }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Gramática",
    title: "O passado narrativo",
    objectives: [
      "formar o passato remoto",
      "reconhecer o padrão 1-3-3 nos verbos irregulares",
      "saber quando e onde ele é usado"
    ],
    theory: [
      {
        h: "Quando se usa",
        p: "Na narração literária e histórica (<em>Dante <b>nacque</b> nel 1265</em>), para fatos distantes e encerrados, sem ligação com o presente. No <b>sul da Itália</b> é usado também na fala do dia a dia, até para ontem; no norte quase não aparece."
      },
      {
        contrast: "Aqui está o maior risco de todo o nível para você, e não é de forma, é de uso: o seu pretérito perfeito (“ontem comi”) serve para qualquer fato terminado, e o passato remoto se parece tanto com ele que a tentação é usá-lo do mesmo jeito. No italiano do norte isso soa como romance do século XIX. O equivalente real do seu “ontem comi” é o passato prossimo, <em>ho mangiato</em>. E não se deixe enganar pela forma: o português “tenho comido” fala de algo repetido até agora, não de um fato concluído."
      },
      {
        h: "Formas regulares",
        p: "<em>-are</em>: ai, asti, ò, ammo, aste, arono. <em>-ere</em>: ei (ou etti), esti, é (ou ette), emmo, este, erono (ou ettero). <em>-ire</em>: ii, isti, ì, immo, iste, irono."
      },
      {
        h: "O padrão 1-3-3",
        p: "A maioria dos verbos irregulares em <em>-ere</em> é irregular <b>só em três pessoas</b>: primeira do singular, terceira do singular e terceira do plural. O resto é regular. <em>prendere → <b>presi</b>, prendesti, <b>prese</b>, prendemmo, prendeste, <b>presero</b></em>. Os seus pretéritos fortes mudam o radical em todas as pessoas (fiz, fizeste, fez, fizemos…), então o italiano exige o contrário: lembrar onde ele <b>não</b> muda."
      }
    ],
    grammar: {
      title: "Passato remoto",
      table: {
        head: ["verbo", "io", "tu", "lui/lei", "loro"],
        rows: [
          ["parlare", "parlai", "parlasti", "parlò", "parlarono"],
          ["credere", "credei", "credesti", "credé", "crederono"],
          ["dormire", "dormii", "dormisti", "dormì", "dormirono"],
          ["essere", "fui", "fosti", "fu", "furono"],
          ["avere", "ebbi", "avesti", "ebbe", "ebbero"],
          ["fare", "feci", "facesti", "fece", "fecero"],
          ["prendere", "presi", "prendesti", "prese", "presero"],
          ["dire", "dissi", "dicesti", "disse", "dissero"]
        ]
      },
      examples: [
        { tr: "Dante nasceu em Florença em 1265." },
        { tr: "A Itália se tornou república em 1946." },
        { tr: "Saiu de casa e nunca mais voltou." },
        { tr: "Foi então que eu entendi tudo." },
        { tr: "Escreveu o romance em dois anos." },
        { tr: "Assim que terminou, foi embora.", note: "trapassato remoto" }
      ]
    },
    vocab: [
      "nascer",
      "morrer",
      "tornar-se",
      "escrever",
      "viver",
      "ver",
      "ficar sabendo, saber",
      "decidir, querer",
      "romance",
      "século",
      "época",
      "sucessão de fatos"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "O que é o padrão 1-3-3?",
        opts: [
          "Que há três verbos irregulares",
          "Que só io, lui/lei e loro são irregulares",
          "Que todas as formas são irregulares"
        ]
      },
      { q: "Passato remoto de “prendere”, forma loro: ___" },
      { q: "Passato remoto de “dire”, forma lui: ___" },
      {
        q: "Onde o passato remoto é usado também na fala do dia a dia?",
        opts: ["No norte da Itália", "No sul da Itália", "Em lugar nenhum"]
      },
      { q: "Complete o relato.", tr: "Dante nasceu em 1265 e morreu em 1321." },
      { q: "“A Itália se tornou república em 1946.”" },
      { tr: "Naquela noite saiu de casa e nunca mais voltou." },
      { tr: "Foi então que eu entendi que tinha me enganado." }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Gramática",
    title: "As subordinadas reduzidas",
    objectives: [
      "substituir uma subordinada por um infinitivo ou um gerúndio",
      "usar o infinitivo composto e o gerúndio composto",
      "escrever de forma mais concisa"
    ],
    theory: [
      {
        h: "Por que reduzir",
        p: "Uma subordinada implícita (sem sujeito próprio e sem conjunção) encurta o texto e eleva o registro. <em>Dopo che ho finito, sono uscito</em> → <em><b>Dopo aver finito</b>, sono uscito.</em> É um dos traços que separam um texto B2 de um B1."
      },
      {
        h: "A condição: o mesmo sujeito",
        p: "As formas implícitas exigem que as duas orações tenham o mesmo <b>sujeito</b>. <em>Essendo stanco, sono rimasto a casa</em> vale; com sujeitos diferentes é preciso construir a subordinada completa."
      },
      {
        h: "O repertório",
        list: [
          "<em>dopo + infinitivo composto</em>: <em>dopo aver mangiato</em>, <em>dopo essere uscito</em>",
          "<em>prima di + infinitivo</em>: <em>prima di partire</em>",
          "<em>gerundio</em> (causa, modo, tempo): <em>tornando a casa, ho incontrato…</em>",
          "<em>gerundio composto</em>: <em>avendo finito, sono uscito</em>",
          "<em>participio</em>: <em>finita la riunione, sono uscito</em>"
        ]
      },
      {
        trap: "<em>Dopo</em> leva sempre o <b>infinitivo composto</b>: <em>dopo aver mangiato</em>, nunca “dopo mangiare”. Aqui a sua língua empurra para o erro, porque “depois de comer”, com infinitivo simples, é o normal em português. O particípio absoluto, por outro lado, é seu tal e qual: <em>finita la riunione</em> é “terminada a reunião”."
      }
    ],
    grammar: {
      title: "Formas reduzidas",
      table: {
        head: ["subordinada completa", "reduzida", "tipo"],
        rows: [
          ["Dopo che ho mangiato…", "Dopo aver mangiato…", "infinitivo composto"],
          ["Prima che io parta…", "Prima di partire…", "infinitivo"],
          ["Mentre tornavo a casa…", "Tornando a casa…", "gerúndio"],
          ["Poiché ero stanco…", "Essendo stanco…", "gerúndio"],
          ["Dopo che ebbi finito…", "Avendo finito…", "gerúndio composto"],
          ["Quando la riunione finì…", "Finita la riunione…", "particípio"]
        ]
      },
      examples: [
        { tr: "Depois de ter lido o contrato, assinei." },
        { tr: "Antes de responder, pensei bem." },
        { tr: "Voltando para casa, encontrei a Giulia." },
        { tr: "Como eu estava atrasado, peguei um táxi." },
        { tr: "Tendo já visto o filme, fiquei em casa." },
        { tr: "Terminado o trabalho, fomos todos embora." }
      ]
    },
    vocab: [
      "depois de ter (feito)",
      "antes de (fazer)",
      "sendo, estando",
      "tendo (feito)",
      "mesmo + gerúndio",
      "uma vez (feito)",
      "pensar bem",
      "concluir",
      "conciso",
      "registro escrito",
      "fluido, legível",
      "sobrecarregar (o estilo)"
    ],
    exercises: [
      {
        q: "Qual está correta?",
        opts: [
          "Dopo mangiare, sono uscito.",
          "Dopo aver mangiato, sono uscito.",
          "Dopo mangiato, sono uscito."
        ]
      },
      { q: "Reduza: “Dopo che ho letto il contratto” → “Dopo ___ letto il contratto”" },
      { q: "Reduza: “Mentre tornavo a casa” → “___ a casa”" },
      { q: "Reduza: “Poiché ero stanco” → “___ stanco”" },
      {
        q: "Uma forma reduzida exige:",
        opts: ["o mesmo tempo", "o mesmo sujeito nas duas orações", "que não haja negação"]
      },
      {
        q: "Reduza as frases.",
        tr: "Depois de ter lido o contrato, assinei. Antes de responder, pensei bem."
      },
      { q: "“Voltando para casa, encontrei a Giulia.”" },
      { tr: "Terminado o trabalho, fomos todos embora." },
      { tr: "Tendo já visto esse filme, preferi ficar em casa." },
      { tr: "Antes de assinar, eu gostaria de reler o contrato." }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Teste",
    title: "Teste da unidade 3",
    objectives: ["verificar a passiva, o passato remoto e as subordinadas reduzidas"],
    theory: [{ p: "Dez tarefas. Aprovação com 70%." }],
    exercises: [
      {
        q: "“Il modulo va compilato” significa:",
        opts: ["vai preenchido", "deve ser preenchido", "foi preenchido"]
      },
      { q: "“La lettera ___ stata scritta da Marco.”" },
      { q: "“Le domande ___ valutate ogni mese.” (venire)" },
      {  },
      { q: "Passato remoto de “prendere”, io: ___" },
      { q: "Correto:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "“Mentre tornavo” → “___” (gerundio)" },
      { q: "“Os pedidos devem ser apresentados antes de sexta.”" },
      { tr: "O projeto foi aprovado em 1998 e executado em três anos." },
      { tr: "Depois de ter lido o contrato, decidi não assinar." }
    ]
  },
  "unit:b2-u04": {
    title: "Sociedade e debate",
    grammarNote: "vocabulário abstrato · argumentação · registros"
  },
  "lesson:b2-u04-l1": {
    theme: "Sociedade",
    title: "A economia e o mercado de trabalho",
    objectives: [
      "entender os termos econômicos básicos da imprensa",
      "falar do mercado de trabalho",
      "usar as nominalizações próprias desse registro"
    ],
    theory: [
      {
        h: "O vocabulário das páginas de economia",
        p: "A escrita econômica se apoia num conjunto estreito e repetitivo de palavras. Domine uma centena e a maioria dos artigos se abre: <em>il PIL</em> (o PIB), <em>l'inflazione</em>, <em>il debito pubblico</em>, <em>la disoccupazione</em>, <em>il potere d'acquisto</em>, <em>la produttività</em>. Quase todas são cognatas transparentes: aqui você ganha terreno rápido."
      },
      {
        h: "Estruturas características",
        list: [
          "nominalização: <em>la crescita dei prezzi</em> em vez de “os preços sobem”",
          "passiva: <em>è stato approvato il decreto</em>",
          "expressões de mudança: <em>in aumento, in calo, stabile, in ripresa</em>",
          "comparações: <em>rispetto allo scorso anno, su base annua</em>"
        ]
      },
      {
        h: "Como é de verdade o mercado de trabalho italiano",
        p: "<em>Il precariato</em> (a precariedade), <em>i contratti a termine</em>, <em>la fuga di cervelli</em>, <em>i NEET</em>, <em>il divario Nord-Sud</em>: voltam em todos os debates públicos. O cenário vai soar familiar, porque o debate brasileiro gira em torno de peças parecidas, como contratos temporários, jovens nem-nem e fuga de cérebros. O <em>divario Nord-Sud</em> lembra as desigualdades regionais do Brasil, só que com o mapa invertido: na Itália, a região mais pobre é o Sul."
      },
      {
        tip: "<em>Il cuneo fiscale</em> (a cunha fiscal, a diferença entre o que a empresa paga e o que o trabalhador recebe) é um dos termos mais repetidos do debate econômico italiano. Aparece em qualquer discussão sobre salários."
      }
    ],
    grammar: {
      title: "Vocabulário econômico",
      table: {
        head: ["italiano", "português", "contexto"],
        rows: [
          ["il PIL", "o PIB", "macroeconomia"],
          ["l'inflazione", "a inflação", "preços"],
          ["la disoccupazione", "o desemprego", "mercado de trabalho"],
          ["il potere d'acquisto", "o poder de compra", "salários"],
          ["il precariato", "a precariedade", "emprego"],
          ["la fuga di cervelli", "a fuga de cérebros", "emigração"],
          ["in calo / in aumento", "em queda / em alta", "números"]
        ]
      },
      examples: [
        { tr: "A inflação está em queda em relação ao ano passado." },
        { tr: "O desemprego entre os jovens continua sendo um problema estrutural." },
        { tr: "O poder de compra das famílias caiu." },
        { tr: "Muitos jovens formados vão embora do país." },
        { tr: "A desigualdade entre o norte e o sul aumentou." },
        { tr: "O decreto foi aprovado com emendas." }
      ]
    },
    vocab: [
      "PIB",
      "inflação",
      "dívida pública",
      "desemprego",
      "poder de compra",
      "precariedade no trabalho",
      "fuga de cérebros",
      "desigualdade, abismo",
      "crescimento",
      "recuperação",
      "decreto",
      "anual, em base anual"
    ],
    exercises: [
      { q: "Relacione.", pairs: ["PIB", "inflação", "desemprego", "desigualdade"] },
      { q: "“La fuga di cervelli” é:", opts: ["uma fuga da prisão", "a fuga de cérebros", "a perda de memória"] },
      { q: "Complete: “L'inflazione è in ___ rispetto allo scorso anno.” (em queda)" },
      { q: "Complete a nominalização: “i prezzi crescono” → “la ___ dei prezzi”" },
      {
        q: "“Il precariato” significa:",
        opts: ["o emprego estável", "o trabalho precário com contratos curtos", "a aposentadoria"]
      },
      { q: "Complete.", tr: "O poder de compra caiu e o desemprego entre os jovens continua alto." },
      { q: "“O decreto foi aprovado com emendas.”" },
      { tr: "A desigualdade entre o norte e o sul aumentou." },
      { tr: "Em base anual, o PIB cresceu zero vírgula sete por cento." },
      { tr: "O desemprego entre os jovens continua sendo um problema estrutural." }
    ]
  },
  "lesson:b2-u04-l2": {
    theme: "Sociedade",
    title: "Meio ambiente e tecnologia",
    objectives: [
      "falar da mudança climática e da tecnologia",
      "expressar preocupação e esperança",
      "organizar os argumentos a favor e contra"
    ],
    theory: [
      {
        h: "Dois campos, a mesma forma de debate",
        p: "Tanto o clima quanto a tecnologia são discutidos em italiano no esquema <em>rischi / opportunità</em>. Vale a pena ter o esqueleto pronto: <em>Da un lato ci sono rischi evidenti…, dall'altro le opportunità…</em>"
      },
      {
        h: "Preocupação e esperança",
        list: [
          "preocupação: <em>temo che…</em>, <em>c'è il rischio che…</em>, <em>mi preoccupa il fatto che…</em> (congiuntivo)",
          "esperança: <em>spero che…</em>, <em>confido nel fatto che…</em>, <em>sono ottimista sul…</em>",
          "cautela: <em>bisogna vedere se…</em>, <em>dipenderà da…</em>"
        ]
      },
      {
        h: "O vocabulário que volta sempre",
        p: "<em>la transizione ecologica</em>, <em>le energie rinnovabili</em>, <em>l'impronta di carbonio</em>, <em>la raccolta differenziata</em>, <em>l'intelligenza artificiale</em>, <em>la privacy</em>, <em>la disinformazione</em>, <em>l'automazione</em>."
      },
      {
        tip: "<em>Il fatto che</em> pede normalmente o congiuntivo, sobretudo na escrita: <em>Il fatto che <b>sia</b> difficile non significa che sia impossibile.</em> Em português você muitas vezes diria “o fato de ser difícil”, com infinitivo; em italiano, depois de <em>il fatto che</em>, use o congiuntivo, como em “o fato de que seja difícil”."
      }
    ],
    grammar: {
      title: "Debate: a favor e contra",
      table: {
        head: ["função", "expressão", "modo"],
        rows: [
          ["preocupação", "Temo che / C'è il rischio che", "congiuntivo"],
          ["um fato como sujeito", "Il fatto che…", "congiuntivo"],
          ["esperança", "Spero che / Confido che", "congiuntivo"],
          ["ressalva", "Bisogna vedere se…", "indicativo"],
          ["dependência", "Dipenderà da…", "indicativo"],
          ["contraste", "Da un lato… dall'altro…", "—"]
        ]
      },
      examples: [
        { tr: "Receio que a transição esteja demorando demais." },
        { tr: "O fato de ser difícil não significa que seja impossível." },
        { tr: "Existe o risco de que a automação reduza os postos de trabalho." },
        { tr: "As renováveis já cobrem uma parte significativa." },
        { tr: "Será preciso ver se as normas serão aplicadas." },
        { tr: "Sou moderadamente otimista." }
      ]
    },
    vocab: [
      "a transição ecológica",
      "energias renováveis",
      "pegada de carbono",
      "coleta seletiva",
      "resíduos",
      "inteligência artificial",
      "automação",
      "desinformação",
      "risco",
      "oportunidade",
      "sustentável",
      "com cautela"
    ],
    exercises: [
      { q: "Complete: “Il fatto che ___ difficile non significa che sia impossibile.” (essere)" },
      { q: "Complete: “C'è il rischio che l'automazione ___ i posti di lavoro.” (ridurre)" },
      { q: "Relacione.", pairs: ["pegada de carbono", "coleta seletiva", "resíduos", "sustentável"] },
      { q: "Depois de “il fatto che” vem:", opts: ["indicativo", "congiuntivo", "o infinitivo"] },
      {
        q: "“Bisogna vedere se le norme verranno applicate” expressa:",
        opts: ["certeza", "uma ressalva prudente", "preocupação"]
      },
      {
        q: "Complete a intervenção.",
        tr: "Por um lado há riscos evidentes, por outro as oportunidades são reais."
      },
      { q: "“Receio que esteja demorando demais.”" },
      { tr: "Sou moderadamente otimista quanto ao futuro." },
      { tr: "O fato de a tecnologia avançar não resolve o problema por si só." },
      { tr: "Existe o risco de que a transição seja lenta demais." }
    ]
  },
  "lesson:b2-u04-l3": {
    theme: "Comunicação",
    title: "Defender uma posição",
    objectives: ["construir uma argumentação longa", "responder a um contra-argumento", "fechar um debate com uma conclusão"],
    theory: [
      {
        h: "Três movimentos que fazem uma argumentação funcionar",
        list: [
          "<b>concessão</b>: dê razão ao outro — <em>È vero che…</em>",
          "<b>a virada</b>: tire o peso disso — <em>Tuttavia / Va però considerato che…</em>",
          "<b>evidência</b>: apoie com números ou um exemplo — <em>I dati mostrano che…</em>"
        ]
      },
      {
        h: "Responder a um contra-argumento",
        p: "<em>Non credo che questo argomento regga</em>, <em>Mi sembra una generalizzazione</em>, <em>Questo vale in alcuni casi, non in tutti</em>, <em>Dipende da come si misura</em>. Todas atacam o argumento, não a pessoa."
      },
      {
        h: "O tom de um debate italiano",
        p: "O debate italiano pode ser barulhento e cheio de interrupções, mas raramente fica pessoal. A fórmula <em>con tutto il rispetto, non sono d'accordo</em> é uma maneira perfeitamente aceitável de abrir uma discordância, e interromper é lido como interesse, não como falta de educação. A dinâmica é parecida com a de uma discussão animada no Brasil: falar por cima do outro também não é, por si só, agressão."
      },
      {
        tip: "<em>Il punto è che…</em> (“a questão é que…”, “o ponto é que…”) é a maneira mais eficaz de trazer uma discussão de volta ao essencial quando ela começa a se desviar do assunto."
      }
    ],
    grammar: {
      title: "Argumentação avançada",
      table: {
        head: ["movimento", "fórmula", "em português"],
        rows: [
          ["concessão", "È vero che… / Concordo sul fatto che…", "É verdade que…"],
          ["a virada", "Va però considerato che…", "Mas é preciso levar em conta que…"],
          ["evidência", "I dati mostrano che…", "Os dados mostram que…"],
          ["rebater", "Mi sembra una generalizzazione.", "Me parece uma generalização."],
          ["o essencial", "Il punto è che…", "A questão é que…"],
          ["conclusão", "Alla luce di quanto detto…", "À luz do que foi dito…"]
        ]
      },
      examples: [
        {
          tr: "É verdade que os custos são altos, mas é preciso levar em conta a economia a longo prazo."
        },
        { tr: "Os dados mostram a tendência contrária." },
        { tr: "Isso vale em alguns casos, não como regra geral." },
        { tr: "A questão é que não temos alternativas realistas." },
        { tr: "Com todo o respeito, não concordo." },
        { tr: "À luz do que foi dito, proponho revisar o plano." }
      ]
    },
    vocab: [
      "argumentar",
      "generalização",
      "sustentar-se (um argumento)",
      "rebater",
      "contra-argumento",
      "concordar em",
      "à luz de",
      "a longo prazo",
      "a questão é que",
      "com todo o respeito",
      "revisar",
      "tendência"
    ],
    exercises: [
      { q: "Relacione.", pairs: ["rebater", "sustentar-se", "à luz de", "generalização"] },
      {
        q: "Qual movimento fortalece mais uma argumentação?",
        opts: [
          "Repetir a tese",
          "Dar razão ao outro antes de tirar o peso do argumento dele",
          "Levantar a voz"
        ]
      },
      { q: "Complete: “Va però ___ che i costi si ammortizzano.” (levar em conta)" },
      { q: "Complete: “Il ___ è che non abbiamo alternative.”" },
      {
        q: "Construa o argumento.",
        tr: "É verdade que os custos são altos, mas é preciso levar em conta a economia a longo prazo."
      },
      { q: "“Me parece uma generalização.”" },
      {
        q: "Um debate numa reunião.",
        setting: "Reunião de equipe, discussão sobre o orçamento.",
        lines: [
          { tr: "Esse investimento é caro demais, e ponto." },
          {
            tr: "Conceda uma parte e coloque um contra-argumento.",
            answerTr: "É verdade que os custos são altos, mas é preciso levar em conta a economia a longo prazo."
          },
          { tr: "Mas todo mundo diz que projetos assim fracassam." },
          {
            tr: "Rebata a generalização citando os dados.",
            answerTr: "Me parece uma generalização: os dados mostram o contrário."
          }
        ]
      },
      { tr: "À luz do que foi dito, proponho revisar o plano." },
      { tr: "Com todo o respeito, não acho que esse argumento se sustente." },
      { tr: "A questão é que não temos alternativas realistas." }
    ]
  },
  "lesson:b2-u04-test": {
    theme: "Exame",
    title: "Teste — revisão das unidades 1-4",
    objectives: ["verificar o congiuntivo, as condicionais, a passiva e a argumentação"],
    theory: [{ p: "Doze tarefas das quatro primeiras unidades. Aprovação com 70%." }],
    exercises: [
      {  },
      { q: "“Pensavo che ___ più semplice.”" },
      { q: "“Speravo che mi ___ chiamato.”" },
      { q: "“Se ___ tempo, verrei.”", opts: ["ho", "avrei", "avessi"] },
      { q: "Tipo 3.", tr: "Se eu tivesse estudado, teria passado na prova." },
      { q: "“Il modulo ___ compilato in stampatello.” (deve)" },
      { q: "Passato remoto de “fare”, lui: ___" },
      { q: "Correto:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "“Il fatto che ___ difficile non significa niente.” (essere)" },
      { q: "“Parla come se ___ un esperto.”" },
      { q: "“É verdade que os custos são altos, mas é preciso levar em conta a economia.”" },
      { tr: "À luz dos dados, acho que vale a pena revisar o plano." }
    ]
  }
});
