/* ============================================================
   Textos na língua do aluno (pt) — português do Brasil — para data/core/a1-01.js
   As chaves remetem aos id da camada neutra; os arrays são unidos
   por índice, então o comprimento deve coincidir com o core.
   Quem confere é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:a1-u01": { title: "O ritual do café", grammarNote: "essere · gênero e número · artigos" },
  "lesson:a1-u01-l1": {
    theme: "Vida cotidiana",
    title: "Cumprimentos e seu primeiro pedido",
    objectives: [
      "cumprimentar e se despedir conforme a hora do dia",
      "pedir um café como os italianos pedem",
      "conjugar essere no presente"
    ],
    theory: [
      {
        h: "O cumprimento depende do relógio, não do humor",
        p: "Os cumprimentos italianos dividem o dia em dois. <strong>Buongiorno</strong> vai da manhã até o começo da tarde. Depois, entre as duas e as cinco (a fronteira é difusa e muda de região para região), passa-se a <strong>buonasera</strong>, que é o que se usa ao entrar num bar às seis. <strong>Buonanotte</strong> não é um cumprimento: é o que se diz na hora de ir dormir."
      },
      {
        h: "Ciao nem sempre é a opção segura",
        p: "<strong>Ciao</strong> serve para «oi» e para «tchau», mas só com gente que você trataria por <em>tu</em>: amigos, pessoas da sua idade, família, o garçom jovem. Para um garçom de cinquenta anos, um funcionário público, o dono de uma loja que você vê pela primeira vez: <strong>buongiorno</strong>. Entrar numa farmácia dizendo «ciao» soa mais ou menos como entrar dizendo «e aí, mano?»."
      },
      {
        contrast: "O português também divide o dia, e aí mora a armadilha: as fronteiras não coincidem. «Boa noite» serve para cumprimentar e para se despedir; <em>buonanotte</em>, só para se despedir, e dizê-lo ao chegar é o deslize clássico. E onde o português já diz «boa tarde» a partir do meio-dia, o italiano continua com <em>buongiorno</em> por um bom tempo."
      },
      {
        h: "Essere, o verbo sem o qual não há frase",
        p: "<strong>Essere</strong> significa «ser» e «estar» ao mesmo tempo. Suas formas não se parecem com o infinitivo (<em>sono</em>, <em>sei</em>, <em>è</em>…), então não há regra que as gere: é preciso decorar. A boa notícia é que você vai repeti-las tantas vezes que elas se fixam sozinhas."
      },
      {
        tip: "Os pronomes sujeito (io, tu, lui…) são omitidos quase sempre, porque a desinência já diz quem é. <em>Sono brasiliana</em> basta; <em>io sono brasiliana</em> acrescenta ênfase: «<b>eu</b> sou brasileira (e você não)». O português também permite omitir («sou brasileira»), mas no Brasil se usa o pronome com muito mais frequência do que em italiano."
      }
    ],
    grammar: {
      title: "Essere (ser / estar) — presente",
      note: "Cuidado com o acento de <b>è</b>: sem ele, <em>e</em> significa «e». São duas palavras diferentes.",
      table: {
        head: ["pessoa", "forma", "em português"],
        rows: [
          ["io", "sono", "sou / estou"],
          ["tu", "sei", "você é / está (informal)"],
          ["lui / lei / Lei", "è", "ele/ela é / está; o senhor / a senhora é"],
          ["noi", "siamo", "somos / estamos"],
          ["voi", "siete", "vocês são / estão"],
          ["loro", "sono", "eles/elas são / estão"]
        ]
      },
      examples: [
        {
          tr: "Bom dia, um café, por favor.",
          note: "«un caffè» é um espresso: não precisa especificar"
        },
        { tr: "Sou a Anna, muito prazer." },
        { tr: "Você é de Roma?" },
        { tr: "O café está quente." },
        { tr: "Estamos atrasados." },
        { tr: "Eles estão no bar." }
      ]
    },
    vocab: [
      "bom dia (até o começo da tarde)",
      "boa tarde / boa noite (a partir das quatro ou cinco)",
      "boa noite (só ao se despedir)",
      "oi / tchau (informal)",
      "até logo (formal)",
      "por favor (ao pedir algo)",
      "obrigado / obrigada",
      "de nada",
      "espresso",
      "cappuccino",
      "croissant",
      "bar, café",
      "muito prazer",
      "com licença / desculpe (formal)"
    ],
    dialogue: [
      "Bom dia! O que vai ser?",
      "Bom dia. Um café e um croissant, por favor.",
      "É pra já. Dá dois e cinquenta.",
      "Aqui está. Obrigado!",
      "De nada, tenha um bom dia!"
    ],
    culture: {
      title: "Com olhos italianos: o café tem regras",
      text: "<p>Num bar italiano o café se toma <b>em pé, no balcão</b> (al banco) e dura três minutos. A mesa se paga à parte, às vezes o dobro: não é golpe, são dois serviços diferentes na tabela de preços.</p><p><b>Um cappuccino depois das onze</b> entrega você como turista: o leite é considerado pesado e pertence ao café da manhã. Depois do almoço se pede <i>un caffè</i>, ou no máximo <i>un macchiato</i>, um espresso com uma gota de leite.</p><p>Normalmente se paga <b>depois</b> de tomar, a não ser que o bar tenha caixa na entrada: aí primeiro vem <i>lo scontrino</i> (o comprovante) e depois o café.</p>"
    },
    exercises: [
      {
        q: "Você entra num bar às nove e meia da manhã. O que diz?",
        opts: ["Buonasera", "Buongiorno", "Buonanotte"],
        why: "Buongiorno cobre da manhã até o começo da tarde. Buonanotte é só uma despedida antes de dormir."
      },
      {
        q: "O garçom tem uns sessenta anos e você não o conhece. Que cumprimento cai bem?",
        opts: ["Ciao!", "Buongiorno!", "Buonanotte!"],
        why: "Guarde o «ciao» para quem você trata por tu. Para um desconhecido num bar: buongiorno."
      },
      {
        tr: "A conjugação inteira, sem olhar.",
        why: "Essere é irregular em todas as pessoas. É uma das duas conjugações que é preciso decorar de qualquer jeito."
      },
      {
        q: "Complete: «Anna e Marco ___ italiani.» (Anna e Marco são italianos.)",
        hint: "terceira pessoa do plural",
        why: "Loro sono. Repare que «sono» serve para <b>io</b> e para <b>loro</b>: quem esclarece é o contexto."
      },
      {
        q: "Traduza: «Sou da Polônia.»",
        hint: "venire + da + artigo + país (ou a nacionalidade)",
        why: "Vengo dalla Polonia, ou simplesmente sono polacco/a. Com país não se diz «sono dalla»: <em>essere di</em> serve para cidade (<em>sono di Varsavia</em>); para país usa-se <em>venire da</em> + artigo (la Polonia → dalla Polonia)."
      },
      {
        tr: "Um café e um croissant, por favor.",
        why: "Em italiano não é preciso nenhum verbo de cortesia: você diz o que quer e acrescenta <i>per favore</i>."
      },
      {
        q: "Ligue cada expressão ao seu significado.",
        pairs: ["obrigado", "de nada", "com licença (formal)", "tchau"]
      },
      {
        tr: "Boa tarde, um cappuccino, por favor.",
        why: "Atenção ao <b>cc</b> e ao <b>pp</b> dobrados: em italiano as consoantes duplas são sustentadas de forma audível, mais longas que as simples."
      },
      {
        tr: "Bom dia, um café, por favor.",
        why: "«Caffè» tem o acento na última sílaba: ca-FÉ, não CA-fe."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Gramática básica",
    title: "O gênero do substantivo",
    objectives: [
      "reconhecer o gênero pela terminação",
      "formar o plural segundo -o/-i, -a/-e, -e/-i",
      "lidar com os invariáveis como il bar e la città"
    ],
    theory: [
      {
        h: "Dois gêneros, não três",
        p: "O italiano só tem masculino e feminino: não há neutro. Todo substantivo pertence a um dos dois, objetos inclusive: <em>il tavolo</em> (mesa) é masculino, <em>la sedia</em> (cadeira) é feminino. Aqui o português já te dá quase tudo pronto — exceto que «a mesa» é feminina e <em>il tavolo</em> não."
      },
      {
        h: "Três padrões que cobrem quase tudo",
        list: [
          "terminação em <b>-o</b> → masculino, plural <b>-i</b>: <em>il libro → i libri</em>",
          "terminação em <b>-a</b> → feminino, plural <b>-e</b>: <em>la casa → le case</em>",
          "terminação em <b>-e</b> → masculino <i>ou</i> feminino, plural sempre <b>-i</b>: <em>il fiore → i fiori</em>, <em>la chiave → le chiavi</em>"
        ]
      },
      {
        trap: "Os substantivos em <b>-e</b> são o principal grupo cujo gênero precisa ser decorado junto com a palavra (além de exceções como <em>il problema</em>, <em>la mano</em>). Anote-os sempre com o artigo: não «fiore», mas <b>il fiore</b>."
      },
      {
        h: "Palavras que nunca mudam",
        p: "Os substantivos terminados em vogal tônica (<em>la città</em>, <em>il caffè</em>) e os empréstimos (<em>il bar</em>, <em>lo sport</em>, <em>il film</em>) são iguais no singular e no plural. Só o artigo diferencia: <em>la città → le città</em>, como «o lápis / os lápis»."
      },
      {
        contrast: "O sistema é o seu, então não há categoria nova para construir. O que é preciso vigiar são as discordâncias pontuais: <em>il fiore</em>, <em>il colore</em>, <em>il ponte</em> e <em>il viaggio</em> são masculinos onde o português diz a flor, a cor, a ponte e a viagem. E a classe em <b>-e</b> existe também em português (o leite, a noite), com o mesmo problema: a terminação não informa nada, e o gênero italiano nem sempre bate com o nosso."
      }
    ],
    grammar: {
      title: "Gênero e plural do substantivo",
      table: {
        head: ["padrão", "singular", "plural", "em português"],
        rows: [
          ["-o → -i (m)", "il libro", "i libri", "livro / livros"],
          ["-a → -e (f)", "la ragazza", "le ragazze", "garota / garotas"],
          ["-e → -i (m)", "il ristorante", "i ristoranti", "restaurante / restaurantes"],
          ["-e → -i (f)", "la stazione", "le stazioni", "estação / estações"],
          ["invariável", "la città", "le città", "cidade / cidades"],
          ["empréstimos", "il bar", "i bar", "bar / bares"]
        ]
      },
      examples: [
        { tr: "O croissant está gostoso." },
        { tr: "Os croissants estão gostosos.", note: "o adjetivo também muda de terminação" },
        { tr: "A estação fica perto.", note: "«stazione» é feminino apesar do -e" },
        { tr: "Dois cafés, por favor.", note: "caffè não muda de forma" }
      ]
    },
    vocab: [
      "livro",
      "casa",
      "mesa",
      "cadeira",
      "restaurante",
      "estação",
      "chave",
      "flor",
      "cidade",
      "café / bar",
      "esporte",
      "filme",
      "noite",
      "dia"
    ],
    exercises: [
      {
        q: "Qual palavra é feminina?",
        opts: ["il tavolo", "la chiave", "il fiore"],
        why: "<i>La chiave</i>: quem diz o gênero é o artigo, porque a terminação -e não o revela."
      },
      {
        q: "O plural de «la ragazza» é «___ ragazze».",
        why: "O artigo feminino plural é sempre <b>le</b>."
      },
      {
        q: "Passe para o plural: «il ristorante» → «i ___».",
        hint: "-e sempre vira -i no plural",
        why: "Os substantivos em -e fazem o plural em -i, seja qual for o gênero."
      },
      {
        q: "Escolha o artigo definido singular.",
        why: "Com os substantivos em -e o gênero é decorado, e por isso eles sempre se anotam com o artigo.",
        items: ["livro", "casa", "estação", "restaurante", "chave", "dia"]
      },
      {
        q: "Quantos cafés você pede se disser «due caffè»?",
        opts: ["Um", "Dois", "Não dá para saber"],
        why: "«Caffè» não se flexiona; o número vem do numeral ou do artigo: <i>il caffè / i caffè</i>."
      },
      {
        q: "Quais destes substantivos são iguais no plural?",
        opts: ["la città", "il libro", "il bar", "la sedia", "lo sport"],
        why: "Invariáveis: as palavras com acento na vogal final (città) e os empréstimos (bar, sport)."
      },
      { tr: "O restaurante está fechado.", why: "Ordem: artigo + substantivo + verbo + adjetivo." },
      { tr: "As chaves estão em cima da mesa." },
      { tr: "A cidade é linda.", why: "«Città» tem o acento no final: tchi-TÁ." }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Gramática básica",
    title: "Artigos definidos e indefinidos",
    objectives: [
      "escolher o artigo definido segundo o primeiro som da palavra",
      "distinguir il de un",
      "usar lo e gli corretamente"
    ],
    theory: [
      {
        h: "Por que sete formas onde o português tem quatro",
        p: "O artigo faz dois trabalhos ao mesmo tempo: marca gênero e número, e diz se falamos de algo que o ouvinte já conhece ou de um qualquer. <em>Vorrei un caffè</em>: um café qualquer. <em>Dov'è il caffè?</em>: aquele que nós dois temos em mente. Isso o português também faz; o que ele não tem é a terceira forma masculina."
      },
      {
        h: "As formas masculinas dependem do primeiro som",
        p: "O artigo masculino tem três variantes, e a escolha não é questão de gosto, mas de pronúncia. <strong>Il</strong> antes de consoante normal. <strong>Lo</strong> antes de <em>s + consoante</em> (<em>lo studente</em>) e antes de <em>z</em>, <em>gn</em>, <em>ps</em>, <em>y</em>, <em>x</em>. <strong>L'</strong> antes de vogal. O motivo é puramente fonético: «il studente» é incômodo de pronunciar. O português não tem nada equivalente, então aqui a regra precisa ser decorada até virar reflexo."
      },
      {
        h: "O plural",
        list: [
          "<b>il → i</b>: <em>il libro → i libri</em>",
          "<b>lo / l' → gli</b>: <em>lo studente → gli studenti</em>, <em>l'amico → gli amici</em>",
          "<b>la / l' → le</b>: <em>la casa → le case</em>, <em>l'amica → le amiche</em>"
        ]
      },
      {
        h: "O artigo indefinido",
        p: "<strong>Un</strong> antes de consoante e antes de vogal (<em>un libro</em>, <em>un amico</em>, sem apóstrofo!), <strong>uno</strong> onde iria <em>lo</em> (<em>uno studente</em>), <strong>una</strong> para o feminino, <strong>un'</strong> antes de vogal feminina (<em>un'amica</em>)."
      },
      {
        trap: "<b>un amico</b> (sem apóstrofo, um amigo) contra <b>un'amica</b> (com apóstrofo, uma amiga). Na fala os dois artigos soam iguais; na escrita o apóstrofo é o que marca o feminino do artigo. Onde o português troca a palavra (um/uma), o italiano só acrescenta o apóstrofo, e escrever «un amica» ou «un'amico» é erro clássico."
      }
    ],
    grammar: {
      title: "Os artigos: tabela completa",
      table: {
        head: ["contexto", "def. sing.", "def. pl.", "indefinido"],
        rows: [
          ["m. + consoante", "il treno", "i treni", "un treno"],
          ["m. + s+cons., z, gn, ps", "lo studente, lo zaino", "gli studenti", "uno studente"],
          ["m. + vogal", "l'amico", "gli amici", "un amico"],
          ["f. + consoante", "la casa", "le case", "una casa"],
          ["f. + vogal", "l'amica", "le amiche", "un'amica"]
        ]
      },
      examples: [
        { tr: "Um café, por favor.", note: "um qualquer: indefinido" },
        { tr: "Este café está frio.", note: "um específico: definido" },
        { tr: "A mochila está pesada.", note: "z → lo" },
        { tr: "Os alunos estão atrasados." },
        { tr: "Uma amiga de Roma.", note: "feminino + vogal → un'" }
      ]
    },
    vocab: [
      "aluno, estudante",
      "mochila",
      "amigo",
      "trem",
      "espelho",
      "açúcar",
      "água",
      "copo",
      "garrafa",
      "hotel",
      "psicólogo",
      "gente (singular, como em português)"
    ],
    exercises: [
      {
        q: "Que artigo leva «zucchero» (açúcar)?",
        opts: ["il", "lo", "l'"],
        why: "Os masculinos que começam com <b>z</b> levam lo: <i>lo zucchero</i>, assim como <i>lo zaino</i>."
      },
      {
        q: "Qual é o plural de «lo specchio»?",
        opts: ["i specchi", "gli specchi", "le specchie"],
        why: "Lo sempre vira <b>gli</b> no plural."
      },
      {
        q: "Escolha o artigo definido correto.",
        why: "A escolha depende do gênero E do primeiro som da palavra.",
        items: ["trem", "aluno", "amiga", "água", "garrafa", "mochila"]
      },
      {
        q: "Complete: «Ho ___ amica a Milano.» (Tenho uma amiga em Milão.)",
        hint: "feminino antes de vogal",
        why: "Un'amica, com apóstrofo. Sem ele (<i>un amico</i>) seria um amigo."
      },
      {
        q: "Complete: «___ studenti sono bravi.» (Os alunos são bons.)",
        why: "Studente leva lo, então no plural: gli studenti."
      },
      {
        q: "«Vorrei il caffè» ou «Vorrei un caffè»: qual é a diferença?",
        opts: [
          "Nenhuma, são sinônimos",
          "Il = aquele café específico já mencionado; un = um café qualquer",
          "Il é mais educado"
        ],
        why: "O artigo definido pressupõe que o ouvinte sabe qual. Num bar se pede <i>un caffè</i>."
      },
      {
        q: "Ligue o substantivo ao seu artigo.",
        pairs: ["ps + consoante", "vogal", "consoante normal", "feminino"]
      },
      {
        tr: "A mochila do aluno está pesada.",
        why: "«Dello» é di + lo: a preposição também se adapta ao artigo."
      },
      { tr: "Os alunos estão na universidade." }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Vida cotidiana",
    title: "Como vai: tu ou Lei",
    objectives: [
      "perguntar como alguém está, de forma formal e informal",
      "conjugar o verbo stare",
      "saber quando se passa do Lei para o tu"
    ],
    theory: [
      {
        h: "Duas maneiras de dizer «você»",
        p: "O italiano distingue <strong>tu</strong> (informal) de <strong>Lei</strong> (formal). É a diferença entre «você» e «o senhor / a senhora», com uma particularidade: <em>Lei</em> significa literalmente «ela» e é usado para homens e mulheres igualmente, com o verbo na terceira pessoa do singular: <em>Come sta?</em> Na escrita costuma ir com maiúscula para não ser confundido com «ela». Atenção à armadilha do brasileiro: o nosso «você» usa a terceira pessoa, mas o <em>tu</em> italiano usa a segunda — <em>come stai?</em>, nunca «come sta?» com um amigo."
      },
      {
        h: "Quem propõe passar para o tu",
        p: "A regra é simples: quem propõe é a pessoa mais velha ou de posição mais alta. A fórmula é <em>Possiamo darci del tu?</em> Num bar, entre pessoas da mesma idade, numa empresa jovem, os italianos passam para o <em>tu</em> muito rápido. No banco, no médico, numa repartição pública, o <em>Lei</em> permanece."
      },
      {
        h: "Stare: «estar», mas no sentido de como você se sente",
        p: "Como você se sente vai com <strong>stare</strong>, não com <em>essere</em>. <em>Come stai?</em> → <em>Sto bene</em>. «Sono bene» é um erro que nenhum italiano cometeria. <em>Stare</em> também serve para ficar: <em>Sto a casa</em>."
      },
      {
        contrast: "Aqui o português ajuda muito: «como você está? — estou bem» usa estar, assim como o italiano usa stare. Mas a divisão não é idêntica. Para a localização o italiano prefere <em>essere</em> onde o português exige estar: <em>sono a casa</em>, <em>il libro è sul tavolo</em>. Traduzir «estou em casa» por «sto a casa» não é errado, mas significa mais «fico em casa»."
      }
    ],
    grammar: {
      title: "Stare (estar, ficar) — presente",
      table: {
        head: ["pessoa", "forma", "exemplo"],
        rows: [
          ["io", "sto", "Sto bene, grazie."],
          ["tu", "stai", "Come stai?"],
          ["lui / lei / Lei", "sta", "Come sta, signora?"],
          ["noi", "stiamo", "Stiamo bene."],
          ["voi", "state", "Come state?"],
          ["loro", "stanno", "Stanno male."]
        ]
      },
      examples: [
        { tr: "Oi, Marco, tudo bem?", note: "informal" },
        { tr: "Bom dia, como vai o senhor?", note: "formal" },
        { tr: "Bem, obrigado. E você?" },
        { tr: "Não posso reclamar.", note: "uma resposta muito comum" },
        { tr: "Mais ou menos." },
        { tr: "Vamos nos tratar por tu?" }
      ]
    },
    vocab: [
      "tudo bem? (informal)",
      "como vai? (formal)",
      "estou bem",
      "não estou bem",
      "não posso reclamar",
      "mais ou menos",
      "e você?",
      "ótimo, muito bem",
      "um pouco cansado",
      "senhor / senhora",
      "até breve",
      "até mais"
    ],
    dialogue: [
      "Oi, Giulia! Tudo bem?",
      "Oi! Tudo ótimo, e você?",
      "Um pouco cansado, mas bem. Até mais!",
      "Bom dia, senhora, como vai?",
      "Não posso reclamar, obrigada. E o senhor?"
    ],
    exercises: [
      {
        q: "Você pergunta como está alguém que você trata por Lei. Qual frase está correta?",
        opts: ["Come stai?", "Come sta?", "Come state?"],
        why: "A forma do Lei vai na terceira pessoa do singular: <i>come sta?</i>"
      },
      {
        q: "Qual frase está incorreta?",
        opts: ["Sto bene.", "Sono bene.", "Non c'è male."],
        why: "Como você se sente vai com <b>stare</b>, nunca com <i>essere</i>."
      },
      {
        tr: "io, tu, lui/lei, voi",
        why: "Stare é irregular no singular e na terceira do plural (stanno)."
      },
      {
        q: "Complete: «Come ___, ragazzi?» (Tudo bem, pessoal?)",
        why: "Você está falando com um grupo → a forma de voi: state."
      },
      { q: "Traduza informalmente: «Estou bem, obrigado. E você?»", why: "Sto bene, grazie. E tu?" },
      {
        q: "Você está num bar. O garçom, que te conhece há anos, cumprimenta primeiro.",
        setting: "O bar do bairro, oito da manhã.",
        lines: [
          { tr: "Oi! Tudo bem hoje de manhã?" },
          { tr: "Diga que está bem e devolva a pergunta.", answerTr: "Bem, e você?" },
          { tr: "Ótimo! O de sempre, um café?" },
          { tr: "Diga que sim e agradeça.", answerTr: "Sim, obrigado!" }
        ]
      },
      {
        q: "Ligue a resposta ao que ela transmite.",
        pairs: ["muito bem", "não posso reclamar", "mais ou menos", "mal"]
      },
      { tr: "Boa tarde, senhora, como vai?" },
      { tr: "Não posso reclamar, obrigada. E o senhor?" }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Teste",
    title: "Teste da unidade 1",
    objectives: ["verificar cumprimentos, essere, stare, gênero e artigos"],
    theory: [
      {
        p: "Dez perguntas sobre a unidade inteira. Passa quem acertar 70%. Não olhe as lições: se não lembrar de algo, é melhor voltar e revisar."
      }
    ],
    exercises: [
      {
        q: "São seis e meia da tarde e você entra numa loja. O que diz?",
        opts: ["Buongiorno", "Buonasera", "Buonanotte"],
        why: "A partir das quatro ou cinco os italianos passam para buonasera."
      },
      { q: "«Noi ___ in ritardo.» (Estamos atrasados.)", why: "essere, a forma de noi." },
      { q: "«Come ___?» perguntando a uma amiga como ela está.", why: "stare, a forma de tu." },
      { q: "Escolha o artigo definido.", items: [, , , ] },
      {
        q: "O plural de «l'amico»:",
        opts: ["gli amici", "i amici", "le amiche"],
        why: "O l' masculino vira gli."
      },
      {
        q: "Quais substantivos não mudam no plural?",
        opts: ["il caffè", "la sedia", "il bar", "la città"]
      },
      { q: "«Uma água, por favor.»", why: "Un'acqua, per favore: feminino antes de vogal." },
      { tr: "Os alunos estão no bar." },
      { tr: "Dois cafés e um croissant, por favor." },
      { tr: "Bom dia, como vai o senhor?" }
    ]
  },
  "unit:a1-u02": { title: "Quem é você", grammarNote: "avere · números · profissões e nacionalidades" },
  "lesson:a1-u02-l1": {
    theme: "Conhecer pessoas",
    title: "Apresentar-se",
    objectives: [
      "dizer seu nome, de onde você é e onde mora",
      "usar o verbo chiamarsi",
      "perguntar o mesmo aos outros"
    ],
    theory: [
      {
        h: "«Me chamo» é um verbo reflexivo",
        p: "<strong>Chiamarsi</strong> significa literalmente «chamar-se». Daí <em>mi chiamo</em>. O pronome reflexivo (<em>mi, ti, si…</em>) vai <b>antes</b> do verbo, exatamente como no português falado do Brasil: «me chamo»."
      },
      {
        h: "De onde você é: essere di ou venire da",
        p: "Para uma cidade se diz <em>sono di Rio</em>; para um país, <em>vengo dal Brasile</em> ou <em>sono brasiliano/a</em>. Os nomes de país levam artigo (<em>l'Italia, il Brasile</em>), os de cidade não."
      },
      {
        trap: "As nacionalidades se escrevem com <b>minúscula</b>: <em>sono brasiliana</em>, <em>un ragazzo italiano</em>. Como em português, então aqui não há nada a desaprender: quem sofre é quem vem do inglês."
      },
      {
        h: "Abitare: morar num lugar",
        p: "<em>Abitare a Roma</em> (cidade), <em>abitare in Italia</em> (país). A mesma divisão a/in volta mais adiante com as viagens, então vale memorizá-la já como par: <b>a + cidade, in + país</b>. O português usa «em» para as duas coisas (moro em Roma, moro na Itália), e é aí que está a dificuldade."
      }
    ],
    grammar: {
      title: "Chiamarsi (chamar-se) e perguntar sobre alguém",
      table: {
        head: ["pessoa", "chiamarsi", "exemplo"],
        rows: [
          ["io", "mi chiamo", "Mi chiamo Anna."],
          ["tu", "ti chiami", "Come ti chiami?"],
          ["lui / lei / Lei", "si chiama", "Come si chiama, scusi?"],
          ["noi", "ci chiamiamo", "Ci chiamiamo Rossi."],
          ["voi", "vi chiamate", "Come vi chiamate?"],
          ["loro", "si chiamano", "Si chiamano Marco e Luca."]
        ]
      },
      examples: [
        { tr: "Como você se chama? — Me chamo Eva." },
        { tr: "De onde você é? — Sou de Salvador." },
        { tr: "Sou brasileira, mas moro em Milão.", note: "a nacionalidade com minúscula" },
        { tr: "Quantos anos você tem? — Tenho vinte e oito.", note: "a idade sempre vai com avere" },
        { tr: "Muito prazer, Marco. — O prazer é meu." }
      ]
    },
    vocab: [
      "ser/estar",
      "me chamo…",
      "como você se chama?",
      "de onde você é?",
      "sou de… (cidade)",
      "moro em… (cidade)",
      "brasileiro (m. / f.)",
      "italiano (m. / f.)",
      "nome",
      "sobrenome",
      "muito prazer",
      "eu também",
      "sério?"
    ],
    exercises: [
      {
        q: "Como você pergunta o nome de maneira informal?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "A forma de tu: <i>ti chiami</i>. A versão com Lei é <i>come si chiama?</i>"
      },
      {
        q: "Qual frase está escrita corretamente?",
        opts: ["Sono Brasiliana.", "Sono brasiliana.", "Sono la brasiliana."],
        why: "As nacionalidades vão com minúscula e sem artigo depois de essere."
      },
      { q: "Complete: «___ chiamo Marta.»", why: "Pronome reflexivo da primeira pessoa: mi chiamo." },
      {
        q: "Complete: «Abito ___ Roma.» (Moro em Roma.)",
        why: "As cidades levam <b>a</b> e os países <b>in</b>: abito a Roma / abito in Italia."
      },
      {
        q: "Complete a apresentação.",
        tr: "Oi! Me chamo Kate, sou de Recife e moro em Bolonha.",
        why: "Os três verbos que aparecem em qualquer primeira frase sobre si mesmo."
      },
      { tr: "Muito prazer, me chamo Luca." },
      {
        q: "Você conhece alguém numa escola de idiomas.",
        setting: "Primeiro dia numa escola de idiomas em Florença.",
        lines: [
          { tr: "Oi! Sou a Giulia. E você, como se chama?" },
          { tr: "Apresente-se com seu nome.", answerTr: "Me chamo Eva." },
          { tr: "Muito prazer, Eva! De onde você é?" },
          { tr: "Diga que é da Polônia: é a resposta modelo gravada.", answerTr: "Sou da Polônia." }
        ]
      },
      { tr: "Me chamo Elena e moro em Nápoles." },
      { tr: "Muito prazer!" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Gramática básica",
    title: "Ter, e os números de 0 a 100",
    objectives: [
      "conjugar avere",
      "usar expressões como ho fame, ho freddo, ho ventotto anni",
      "contar até cem e dizer um preço"
    ],
    theory: [
      {
        h: "Avere onde o português diz «estar com»",
        p: "O italiano usa <strong>avere</strong> para as sensações físicas. <em>Ho fame</em> é literalmente «tenho fome». O português conhece essa construção, mas no Brasil se diz muito mais «estou com fome» — e é aí que mora o erro: em italiano nunca se usa <em>stare</em> nem <em>essere</em> aqui. O mesmo vale para a sede, o frio, o calor, o medo, o sono e a idade: sempre <em>avere</em>."
      },
      {
        h: "A idade: sempre avere",
        p: "<em>Ho trent'anni</em>, «tenho trinta anos». Repare no apóstrofo: <em>trent'anni</em>, <em>vent'anni</em>. A vogal final da dezena desaparece antes de <em>anni</em>."
      },
      {
        h: "O h que nunca se ouve",
        p: "As formas <em>ho, hai, ha, hanno</em> começam com um <b>h</b> mudo. Ele não se pronuncia de jeito nenhum: existe só para diferenciá-las de outras palavras — <em>ho</em> (tenho) contra <em>o</em> (ou), <em>ha</em> (tem) contra <em>a</em> (a, para). É o mesmo h mudo do português (hora, homem), com outra função."
      },
      {
        h: "Números: dezena mais unidade",
        p: "A partir de 20 se escrevem numa só palavra: <em>ventidue</em>, <em>trentasei</em>. Antes de <em>uno</em> e de <em>otto</em> a dezena perde a vogal final: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>."
      }
    ],
    grammar: {
      title: "Avere (ter) e os números",
      table: {
        head: ["pessoa", "avere", "expressão"],
        rows: [
          ["io", "ho", "Ho fame. (Estou com fome.)"],
          ["tu", "hai", "Hai freddo? (Você está com frio?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Ele/ela tem razão.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Estamos com sede.)"],
          ["voi", "avete", "Avete tempo? (Vocês têm tempo?)"],
          ["loro", "hanno", "Hanno paura. (Eles estão com medo.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "antes de uno e otto a dezena perde a vogal" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "Tenho vinte e oito anos." }
      ]
    },
    vocab: [
      "ter",
      "estou com fome",
      "estou com sede",
      "estou com frio / calor",
      "estou com sono",
      "estou com medo",
      "tenho razão",
      "preciso de…",
      "quantos anos você tem?",
      "quanto é?",
      "euro",
      "número",
      "número de telefone"
    ],
    exercises: [
      { why: "Quatro formas começam com h mudo: ho, hai, ha, hanno." },
      {
        q: "Como se diz «estou com fome»?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Os estados físicos vão com avere: ho fame, ho sete, ho freddo. Nada de «estar com»: em italiano você «tem» fome."
      },
      { q: "Que número é «settantasei»?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Escreva em algarismos: «novantatré»", why: "novanta (90) + tre (3)." },
      {
        q: "Complete: «Ho vent___ anni.» (Tenho vinte anos.)",
        hint: "algo desaparece antes de «anni»",
        why: "Vent'anni: a dezena perde a vogal final antes de anni."
      },
      { q: "«Quantos anos você tem?»", why: "Literalmente: «quantos anos (você) tem», como em português." },
      {
        q: "Ligue a expressão com avere ao seu significado.",
        pairs: ["estou com sede", "estou com sono", "estou com medo", "tenho razão"]
      },
      {
        q: "Complete a conversa no caixa.",
        tr: "— Quanto é? — Trinta e dois euros. — Só tenho vinte, sinto muito."
      },
      { tr: "Tenho trinta e cinco anos e moro em Turim." },
      { tr: "Quanto custa um cappuccino?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Trabalho e pessoas",
    title: "Profissões e trabalho",
    objectives: [
      "dizer o que você faz da vida",
      "usar fare il / essere un",
      "formar o feminino dos nomes de profissão"
    ],
    theory: [
      {
        h: "Duas construções, dois matizes",
        p: "«Sou arquiteto» tem duas versões em italiano. <strong>Faccio l'architetto</strong> (literalmente «faço o arquiteto») fala do ofício que você exerce e é o mais comum na fala. <strong>Sono architetto</strong> destaca a identidade ou a formação. Depois de <em>fare</em> vai o artigo definido; depois de <em>essere</em>, normalmente nenhum — como em português, «sou arquiteto» sem artigo."
      },
      {
        h: "Formas femininas",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "sem mudança: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Nomes de profissão em movimento",
        p: "Formas como <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> hoje são padrão na imprensa e nos documentos oficiais, embora vinte anos atrás provocassem discussões. Na fala ainda se ouve <em>l'avvocato</em> referido a uma mulher. Lembra o debate que «presidenta» gerou no Brasil."
      },
      {
        contrast: "O sufixo <em>-essa</em> em português só aparece em títulos como condessa ou abadessa (e, com -esa, princesa, baronesa), por isso soa estranho em profissões no começo: <em>la professoressa</em>, <em>la studentessa</em>, <em>la dottoressa</em>. Não é uma forma antiquada nem pejorativa: é a normal."
      }
    ],
    grammar: {
      title: "Fare (fazer) — presente",
      note: "Irregular e, ao mesmo tempo, um dos três verbos italianos mais frequentes.",
      table: {
        head: ["pessoa", "fare", "exemplo"],
        rows: [
          ["io", "faccio", "Faccio l'insegnante."],
          ["tu", "fai", "Che lavoro fai?"],
          ["lui / lei / Lei", "fa", "Fa il medico."],
          ["noi", "facciamo", "Facciamo colazione."],
          ["voi", "fate", "Che cosa fate?"],
          ["loro", "fanno", "Fanno gli avvocati."]
        ]
      },
      examples: [
        { tr: "O que você faz da vida?" },
        { tr: "Sou jornalista." },
        { tr: "Sou engenheiro.", note: "depois de essere, normalmente sem artigo" },
        { tr: "Trabalho numa agência." },
        { tr: "No momento estou desempregado." },
        { tr: "Ainda estudo, estou no último ano." }
      ]
    },
    vocab: [
      "trabalho",
      "professor",
      "médico",
      "engenheiro",
      "advogado",
      "jornalista",
      "funcionário de escritório",
      "cozinheiro",
      "vendedor de loja",
      "operário",
      "autônomo",
      "estou procurando trabalho"
    ],
    exercises: [
      { why: "Atenção ao c dobrado de faccio e facciamo." },
      {
        q: "Qual frase significa «sou professor» e soa mais natural?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + artigo definido é a forma mais comum de dizer sua profissão na fala."
      },
      {
        q: "Qual é o feminino de «il professore»?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "O padrão -e → -essa, como studente → studentessa."
      },
      {
        q: "Complete: «Mia sorella fa ___ dottoressa.»",
        why: "Depois de fare vai o artigo definido, ajustado ao gênero: la dottoressa."
      },
      { q: "Escolha o artigo.", items: ["cozinheira", "engenheiro", "estudante (f.)", "operário"] },
      { q: "«O que você faz da vida?» (informal)", why: "Che lavoro fai?, literalmente «que trabalho você faz»." },
      {
        q: "Ligue a forma masculina à feminina.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "Trabalho num banco em Milão." },
      { tr: "Sou arquiteto, trabalho com meu irmão." },
      { tr: "O que você faz da vida? Sou jornalista." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Gramática básica",
    title: "A primeira conjugação",
    objectives: [
      "conjugar qualquer verbo regular em -are",
      "lidar com as mudanças ortográficas de cercare, pagare, mangiare",
      "construir uma negação e uma pergunta"
    ],
    theory: [
      {
        h: "O grupo maior e mais previsível",
        p: "Cerca de 70% dos verbos italianos terminam em <strong>-are</strong>, e quase todos se comportam igual. Você tira a terminação do infinitivo e acrescenta seis próprias: <em>-o, -i, -a, -iamo, -ate, -ano</em>. É a sua conjugação em <em>-ar</em>, com desinências parecidas mas não idênticas: atenção a <em>-iamo</em>, onde o português diz -amos, e à forma de <em>voi</em> em <em>-ate</em>, que corresponde ao nosso «vocês falam» (o antigo «vós falais»)."
      },
      {
        h: "Um acento que não se vê",
        p: "Na forma de <em>loro</em> o acento cai na mesma sílaba que na forma de <em>io</em>: <b>par</b>-la-no (como <b>par</b>-lo), la-<b>vo</b>-ra-no (como la-<b>vo</b>-ro). Não «parla-NO». A diferença se ouve e os italianos a notam. O português faz o mesmo em «falam» (como «falo»), então o instinto ajuda."
      },
      {
        h: "Ortografia que salva a pronúncia",
        list: [
          "<b>-care / -gare</b> acrescentam um <b>h</b> antes de -i e -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>. É o seu qu/gu de «busque» e «pague».",
          "<b>-ciare / -giare</b> perdem o <b>i</b> antes de -i: <em>mangiare → mangi</em> (não «mangii»), <em>cominciare → cominci</em>",
          "<b>-iare</b> átono também perde um i: <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Negação e pergunta não precisam de nada novo",
        p: "A negação é uma palavra só, <strong>non</strong>, antes do verbo: <em>non parlo italiano</em>. A pergunta não muda a ordem: basta a entonação, <em>Parli italiano?</em> Igual ao português, e sem nada parecido com o auxiliar inglês «do»."
      }
    ],
    grammar: {
      title: "Parlare (falar) — o padrão -ARE",
      table: {
        head: ["pessoa", "desinência", "parlare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "lavoro"],
          ["tu", "-i", "parli", "lavori"],
          ["lui / lei / Lei", "-a", "parla", "lavora"],
          ["noi", "-iamo", "parliamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "lavorate"],
          ["loro", "-ano", "parlano", "lavorano"]
        ]
      },
      examples: [
        { tr: "Falo um pouco de italiano." },
        { tr: "Não falo bem, mas entendo." },
        { tr: "Você estuda na universidade?", note: "uma pergunta só pela entonação" },
        { tr: "Comemos às oito." },
        { tr: "Você está procurando trabalho em Milão?", note: "cercare → cerchi, com h" },
        { tr: "Eles moram perto do centro.", note: "acento: A-bi-ta-no" }
      ]
    },
    vocab: [
      "falar",
      "trabalhar",
      "estudar",
      "morar",
      "comer",
      "comprar",
      "procurar",
      "pagar",
      "escutar, ouvir",
      "olhar",
      "esperar",
      "começar"
    ],
    exercises: [
      { why: "O padrão que cobre a maioria dos verbos italianos." },
      {
        tr: "tu, noi — atenção à ortografia",
        why: "Cerchi e cerchiamo levam <b>h</b> para manter o som de k."
      },
      {
        q: "Qual é a forma correta para «você come»?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Os verbos em -giare perdem o i antes da desinência -i: mangi."
      },
      {
        q: "Complete: «Loro ___ a Bologna.» (Eles moram em Bolonha.)",
        why: "abitare, a forma de loro: -ano."
      },
      {
        q: "Passe para a negativa: «Parlo italiano.» → «___ parlo italiano.»",
        why: "Uma palavra só, non, antes do verbo: essa é toda a negação."
      },
      { q: "«Procuramos um apartamento em Roma.»", why: "cercare → cerchiamo (com h), a + cidade." },
      {
        q: "Quais formas pertencem a «studiare»?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "«Studii» não existe: o i duplo se reduz a um."
      },
      { tr: "Aos sábados não trabalho.", why: "«Il sabato» com artigo significa «aos sábados», com regularidade." },
      { tr: "Estudo italiano há três meses." },
      { tr: "Não falo bem, mas entendo quase tudo." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Teste",
    title: "Teste da unidade 2",
    objectives: ["verificar avere, fare, chiamarsi, os números e a primeira conjugação"],
    theory: [{ p: "Dez perguntas. Passa quem acertar 70%." }],
    exercises: [
      { q: "«___ chiamo Peter.»" },
      { q: "«Quanti anni ___?» (Quantos anos você tem?)" },
      { q: "Que número é «ottantaquattro»?", opts: ["48", "84", "94"] },
      { q: "«Estou com fome» em italiano:", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "Qual forma é correta para «você paga»?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare acrescenta um h antes de -i."
      },
      { q: "Complete.", tr: "Sou brasileira, moro em Verona e sou professora." },
      { q: "«Não falo italiano.»" },
      { tr: "Tenho vinte e sete anos e estou procurando trabalho." },
      { tr: "Me chamo Anna e sou jornalista." }
    ]
  },
  "unit:a1-u03": {
    title: "Aperitivo e comida",
    grammarNote: "piacere · artigo partitivo · -ere e -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Comida",
    title: "O verbo piacere",
    objectives: [
      "dizer do que você gosta e do que não gosta",
      "escolher entre piace e piacciono",
      "perguntar aos outros do que eles gostam"
    ],
    theory: [
      {
        h: "A frase se constrói ao contrário",
        p: "<strong>Piacere</strong> não significa «gostar de», significa «agradar». <em>Mi piace la pizza</em> é literalmente «a pizza me agrada». O sujeito gramatical é <b>a coisa</b>, e quem sente o gosto aparece como objeto indireto (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "Por isso o verbo tem duas formas",
        p: "Como o sujeito é a coisa, é a coisa que decide o número: <em>mi piace <b>il</b> caffè</em> (uma) contra <em>mi piacciono <b>gli</b> spaghetti</em> (várias). Antes de um infinitivo vai sempre no singular: <em>mi piace viaggiare</em>."
      },
      {
        contrast: "Aqui o português atrapalha. Em «eu gosto de café», quem gosta é o sujeito e a coisa vem com «de». Piacere funciona ao contrário, como «agradar»: «o café me agrada» é <em>mi piace il caffè</em>, «os espaguetes me agradam» é <em>mi piacciono gli spaghetti</em>. O erro típico do brasileiro é transformar a pessoa em sujeito e procurar um «de» que não existe. Pense sempre em «agradar» e o verbo concorda sozinho com a coisa."
      },
      {
        h: "Quem sente o gosto: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — eu gosto (me agrada)",
          "<b>ti</b> piace — você gosta (te agrada)",
          "<b>gli</b> piace — ele gosta; <b>le</b> piace — ela gosta",
          "<b>ci</b> piace — nós gostamos · <b>vi</b> piace — vocês gostam · <b>gli</b> piace — eles gostam"
        ]
      },
      {
        trap: "A negação vai antes do pronome, não do verbo: <b>non</b> mi piace. Nunca «mi non piace». Exatamente como «não me agrada»."
      }
    ],
    grammar: {
      title: "Piacere: o esquema da frase",
      note: "[pronome] + piace/piacciono + [a coisa, com seu artigo]",
      table: {
        head: ["o que agrada", "forma", "exemplo"],
        rows: [
          ["uma coisa", "piace", "Mi piace il vino rosso."],
          ["várias coisas", "piacciono", "Mi piacciono i dolci."],
          ["uma atividade", "piace", "Mi piace cucinare."],
          ["negativa", "non … piace", "Non mi piace il pesce crudo."],
          ["pergunta", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "Gosto muito de café." },
        { tr: "Você gosta de spritz?" },
        { tr: "Não gostamos de cerveja quente." },
        { tr: "Ela gosta de dançar." },
        { tr: "O Marco gosta de peixe.", note: "com um nome se acrescenta «a» antes" },
        { tr: "Eu adoraria experimentar.", note: "uma forma de condicional: aprenda como bloco" }
      ]
    },
    vocab: [
      "aperitivo (bebida com petiscos)",
      "spritz",
      "vinho tinto / branco",
      "cerveja",
      "azeitonas",
      "batatinhas chips",
      "salgadinhos",
      "presunto cru",
      "queijo",
      "doces, sobremesas",
      "peixe",
      "carne",
      "cozinhar",
      "experimentar, provar"
    ],
    culture: {
      title: "Com olhos italianos: o aperitivo não é o jantar",
      text: "<p>O <b>aperitivo</b> começa por volta das seis e meia e vai até as oito e meia. Paga-se a bebida (entre 7 e 12 euros, conforme a cidade) e a comida do balcão vem incluída. Em Milão ele cresceu até virar um bufê chamado <i>apericena</i>, a meio caminho do jantar.</p><p>A regra que ninguém diz em voz alta: <b>sirva-se de uma quantidade razoável</b>. Um prato montado em torre entrega um estrangeiro mais rápido que o sotaque.</p><p>Os clássicos: <i>spritz</i> (com Aperol ou Campari), <i>negroni</i>, uma taça de vinho. A cerveja também passa, embora os puristas torçam o nariz.</p>"
    },
    exercises: [
      {
        q: "«___ piacciono le olive.» Por que piacciono e não piace?",
        opts: ["Porque se trata de várias pessoas", "Porque «le olive» está no plural", "Porque é um passado"],
        why: "O verbo concorda com a coisa que agrada, e essa coisa está no plural."
      },
      { q: "Complete: «Mi ___ il vino rosso.»", why: "Uma coisa no singular → piace." },
      { q: "Complete: «Non mi ___ i film horror.»", why: "«I film» é plural → piacciono." },
      {
        q: "Qual frase está correta?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non vai antes de todo o grupo pronome + verbo."
      },
      {
        q: "Como se diz «o Marco gosta de peixe»?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "Quem sente o gosto leva a preposição <b>a</b> antes do nome, como em «agradar a alguém»."
      },
      { q: "«Gosto de cozinhar.»", why: "Antes de um infinitivo vai sempre o singular piace." },
      { q: "Ligue o pronome à pessoa.", pairs: ["a mim", "a você", "a ela", "a nós"] },
      {
        q: "Complete a conversa durante um aperitivo.",
        tr: "— Você gosta de spritz? — Sim, muito! Mas não gosto de azeitonas."
      },
      { tr: "Gosto muito dos queijos italianos." },
      { tr: "Gosto do aperitivo, mas não gosto de azeitonas." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Gramática básica",
    title: "A segunda conjugação e c'è / ci sono",
    objectives: [
      "conjugar os verbos regulares em -ere",
      "usar c'è e ci sono",
      "descrever o que há num lugar"
    ],
    theory: [
      {
        h: "Quase como -are, mas não totalmente",
        p: "O grupo <strong>-ere</strong> se diferencia do primeiro só em três desinências: <em>-e</em> em vez de <em>-a</em>, <em>-ete</em> em vez de <em>-ate</em>, <em>-ono</em> em vez de <em>-ano</em>. A forma de <em>noi</em> (<em>-iamo</em>) é comum às três conjugações: a desinência mais fácil da língua."
      },
      {
        h: "Aqui se escondem quase todos os irregulares",
        p: "Muitos verbos em -ere muito frequentes têm formas estranhas: <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. A irregularidade aparece sobretudo no passado e no particípio, que chegam no A2."
      },
      {
        h: "C'è e ci sono",
        p: "<strong>C'è</strong> («há», uma coisa) e <strong>ci sono</strong> («há», várias) dizem que algo existe num lugar. A escolha depende do número, não da pessoa: <em>c'è un problema</em>, <em>ci sono due problemi</em>."
      },
      {
        contrast: "E aí está a diferença com o português: «há» (ou «tem», na fala) é invariável, serve para um e para mil. O italiano obriga a escolher entre <em>c'è</em> e <em>ci sono</em> conforme o número, e dizer «c'è due problemi» é um erro que se ouve na hora. Conte antes de falar."
      },
      {
        trap: "Não confunda <b>c'è</b> (há / tem) com <b>è</b> (é / está). <em>Il ristorante è chiuso</em>: o restaurante está fechado. <em>C'è un ristorante qui vicino</em>: tem um restaurante aqui perto."
      }
    ],
    grammar: {
      title: "Leggere (ler) — o padrão -ERE",
      table: {
        head: ["pessoa", "desinência", "leggere", "prendere"],
        rows: [
          ["io", "-o", "leggo", "prendo"],
          ["tu", "-i", "leggi", "prendi"],
          ["lui / lei / Lei", "-e", "legge", "prende"],
          ["noi", "-iamo", "leggiamo", "prendiamo"],
          ["voi", "-ete", "leggete", "prendete"],
          ["loro", "-ono", "leggono", "prendono"]
        ]
      },
      examples: [
        { tr: "Eu vou de café.", note: "«prendere» é o verbo normal para pedir" },
        { tr: "Você está lendo o cardápio?" },
        { tr: "Não estou vendo o garçom." },
        { tr: "Tem uma mesa livre?" },
        { tr: "Tem dois lugares no balcão." },
        { tr: "Escrevemos o nome para a reserva." }
      ]
    },
    vocab: [
      "pegar, pedir",
      "ler",
      "escrever",
      "ver",
      "perguntar",
      "responder",
      "pôr, colocar",
      "fechar",
      "há, tem",
      "lugar",
      "livre / ocupado",
      "aqui perto"
    ],
    exercises: [
      { why: "Repare em -e, -ete, -ono: essa é toda a diferença em relação ao grupo -are." },
      {
        q: "Que desinência as três conjugações têm em comum?",
        opts: ["-o na forma de io", "-iamo na forma de noi", "-ono na forma de loro"],
        why: "A forma de noi é sempre -iamo, seja qual for o grupo."
      },
      { q: "Complete: «___ un tavolo libero?» (Tem uma mesa livre?)", why: "Uma mesa → c'è." },
      {
        q: "Complete: «___ tre persone in fila.» (Tem três pessoas na fila.)",
        why: "Plural → ci sono."
      },
      {
        q: "«Il bar è chiuso» ou «C'è un bar qui vicino»: qual é a diferença?",
        opts: [
          "Nenhuma, são sinônimos",
          "A primeira descreve o bar, a segunda diz que existe um por perto",
          "A segunda está no passado"
        ],
        why: "è descreve, c'è afirma que algo está presente num lugar."
      },
      { q: "«Eu vou de cerveja, e você?»", why: "Prendere é o verbo padrão para pedir na Itália." },
      {
        q: "Quais verbos pertencem ao grupo -ere?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "Não estou vendo o garçom." },
      { tr: "Tem mesa para dois?" },
      { tr: "Vamos de dois spritz." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Gramática básica",
    title: "A terceira conjugação e o padrão -isc-",
    objectives: [
      "conjugar os verbos como dormire e como capire",
      "reconhecer quais verbos em -ire precisam do infixo -isc-",
      "usar preferire para expressar uma preferência"
    ],
    theory: [
      {
        h: "Uma terminação, dois comportamentos",
        p: "Os verbos em <strong>-ire</strong> se dividem em dois subgrupos. O primeiro (<em>dormire, partire, sentire, aprire, offrire</em>) se conjuga sem surpresas. O segundo (<em>capire, finire, preferire, pulire, spedire</em>) insere <b>-isc-</b> em quatro formas: <em>io, tu, lui/lei, loro</em>. As de <em>noi</em> e <em>voi</em> vão sem ele."
      },
      {
        h: "Como saber a que grupo pertence",
        p: "Não há regra: é preciso decorar. Ajuda saber que o grupo do <em>-isc-</em> é o mais numeroso e fica com quase todos os verbos novos (<em>gestire, inserire, garantire</em>). Os dicionários o indicam com <i>(-isc-)</i> ao lado do verbete."
      },
      {
        contrast: "O português não tem nada parecido: os verbos em -ir têm no máximo uma alteração no radical (dormir → durmo, pedir → peço), nunca um pedaço a mais no meio. Aqui não há intuição para trazer, é preciso aprender a lista. Consolo: o infixo é sempre o mesmo e o ritmo pega rápido."
      },
      {
        tip: "O padrão -isc- tem forma de parêntese: quatro formas com o infixo nas pontas, duas sem ele no meio. Aprenda o ritmo: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      }
    ],
    grammar: {
      title: "Dormire (sem -isc-) e capire (com -isc-)",
      table: {
        head: ["pessoa", "dormire", "capire", "em português"],
        rows: [
          ["io", "dormo", "capisco", "durmo / entendo"],
          ["tu", "dormi", "capisci", "você dorme / entende"],
          ["lui / lei", "dorme", "capisce", "ele/ela dorme / entende"],
          ["noi", "dormiamo", "capiamo", "dormimos / entendemos"],
          ["voi", "dormite", "capite", "vocês dormem / entendem"],
          ["loro", "dormono", "capiscono", "eles/elas dormem / entendem"]
        ]
      },
      examples: [
        { tr: "Não entendo, o senhor pode repetir?" },
        { tr: "Prefiro uma mesa lá fora." },
        { tr: "A que horas você termina de trabalhar?" },
        { tr: "A loja abre às nove.", note: "aprire, sem -isc-" },
        { tr: "Partimos amanhã de manhã." },
        { tr: "Eles entendem tudo." }
      ]
    },
    vocab: [
      "entender",
      "terminar",
      "preferir",
      "limpar",
      "enviar, mandar",
      "dormir",
      "partir, sair de viagem",
      "abrir",
      "oferecer (uma rodada)",
      "ouvir, sentir",
      "seguir",
      "o senhor pode repetir?"
    ],
    exercises: [
      { why: "O parêntese: -isc- em io, tu, lui/lei e loro; ausente em noi e voi." },
      { why: "Dormire vai direto, sem infixo." },
      {
        q: "Qual verbo precisa do infixo -isc-?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Complete: «Noi non ___ bene.» (Não entendemos bem.)",
        hint: "a forma de noi não leva infixo",
        why: "Capiamo: em noi e voi o -isc- desaparece."
      },
      { q: "Complete: «Loro ___ alle sette.» (Eles terminam às sete.)", why: "finire com -isc- na forma de loro." },
      { q: "«Prefiro uma mesa lá fora.»" },
      { q: "Quais formas levam -isc-?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "Não entendo, o senhor pode repetir?" },
      { tr: "Prefiro partir cedo amanhã de manhã." },
      { tr: "Desculpe, não entendo. O senhor pode repetir?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Comida",
    title: "O artigo partitivo e as quantidades",
    objectives: [
      "expressar uma quantidade indeterminada com del, della, dei…",
      "usar un po' di e un chilo di",
      "fazer as compras numa loja"
    ],
    theory: [
      {
        h: "Um pouco de algo, sem uma palavra para «algo»",
        p: "O italiano expressa a quantidade indeterminada com o <strong>artigo partitivo</strong>: a preposição <em>di</em> fundida com o artigo definido. <em>Vorrei del pane</em>, «queria pão». No plural cobre o que o português diz com «uns» ou «alguns»: <em>dei pomodori</em>."
      },
      {
        h: "As formas",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "As alternativas",
        p: "No lugar do partitivo você pode usar <strong>un po' di</strong> («um pouco de») ou uma medida: <em>un chilo di, un etto di, mezzo litro di</em>. Na negação o partitivo costuma desaparecer: <em>non ho pane</em>, não «non ho del pane»."
      },
      {
        contrast: "Esta é a construção que o português não tem. Onde você diz «quero pão» e pronto, o italiano quer <em>del pane</em>. Omiti-lo não é agramatical, mas soa truncado, como uma lista de compras lida em voz alta. É um dos detalhes que mais rápido melhoram a naturalidade."
      },
      {
        tip: "<b>Un etto</b> são 100 gramas e é a unidade de trabalho no balcão de frios: <em>due etti di prosciutto</em> = 200 gramas de presunto."
      }
    ],
    grammar: {
      title: "O artigo partitivo e as expressões de quantidade",
      table: {
        head: ["contexto", "forma", "exemplo"],
        rows: [
          ["m. + consoante", "del", "del pane"],
          ["m. + s+cons., z", "dello", "dello zucchero"],
          ["+ vogal", "dell'", "dell'acqua, dell'olio"],
          ["f. + consoante", "della", "della carne"],
          ["m. plural", "dei / degli", "dei pomodori, degli spinaci"],
          ["f. plural", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "Queria pão." },
        { tr: "Compro maçãs e uvas." },
        { tr: "Um pouco de sal, não muito." },
        { tr: "Duzentos gramas de presunto cru." },
        { tr: "Meio litro de leite." },
        { tr: "Não tenho açúcar em casa.", note: "sem partitivo na negação" }
      ]
    },
    vocab: [
      "pão",
      "leite",
      "água",
      "açúcar",
      "sal",
      "azeite, óleo",
      "tomates",
      "maçãs",
      "cem gramas",
      "um quilo",
      "um pouco",
      "meio litro",
      "assim está bom, obrigado",
      "quanto o senhor quer?"
    ],
    exercises: [
      {
        q: "Como você pede pão?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "O partitivo <b>del</b> expressa uma quantidade indeterminada."
      },
      {
        q: "Complete: «Compro ___ acqua.» (Compro água.)",
        why: "di + l' = dell', porque acqua começa com vogal."
      },
      {
        q: "Complete: «Vorrei ___ mele.» (Queria umas maçãs.)",
        why: "di + le = delle, feminino plural."
      },
      {
        q: "Escolha o artigo partitivo.",
        items: ["pão", "açúcar", "carne", "azeite", "tomates", "espinafre"]
      },
      {
        q: "Quanto são «due etti»?",
        opts: ["20 gramas", "200 gramas", "2 quilos"],
        why: "Un etto são 100 g, então due etti = 200 g."
      },
      { q: "«Meio litro de leite, por favor.»" },
      {
        q: "Você está no balcão de uma mercearia.",
        setting: "Uma alimentari de bairro, no balcão de frios.",
        lines: [
          { tr: "Bom dia! O que vai ser?" },
          { tr: "Peça 200 g de presunto.", answerTr: "Duzentos gramas de presunto, por favor." },
          { tr: "Aqui está. Mais alguma coisa?" },
          { tr: "Peça também um pouco de pão.", answerTr: "Pão também, obrigado." }
        ]
      },
      { q: "Complete a lista de compras.", tr: "Compro pão, água e tomates." },
      { tr: "Um quilo de tomates e manjericão, por favor." },
      { tr: "Duzentos gramas de queijo, por favor. É só isso." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Teste",
    title: "Teste da unidade 3",
    objectives: ["verificar piacere, as conjugações -ere e -ire, o partitivo"],
    theory: [{ p: "Dez perguntas. Passa quem acertar 70%." }],
    exercises: [
      { q: "«Mi ___ gli spaghetti.» (Gosto de espaguete.)" },
      { q: "«Non mi ___ il pesce crudo.»" },
      {
        q: "«O Marco gosta de vinho» é:",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "«___ due posti liberi.» (Tem dois lugares livres.)" },
      { q: "O artigo partitivo:", items: [, , , ] },
      { q: "«Prefiro o vinho branco.»" },
      { tr: "Tem azeitonas e queijo." },
      { tr: "Gosto muito do aperitivo italiano." }
    ]
  }
});
