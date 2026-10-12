/* ============================================================
   Textos na língua do aluno (pt) — português do Brasil — para data/core/a1-03.js
   As chaves apontam para os id da camada neutra; os arrays são
   combinados por índice, então o comprimento deve coincidir com o core.
   Quem confere é scripts/parity.mjs.

   Algumas respostas modelo em italiano dizem "polacca" ou citam
   Varsóvia e Cracóvia. São áudio gravado e chaves de correção
   fixas, então os enunciados em português as mantêm em vez de
   sugerir uma resposta que o corretor rejeitaria.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:a1-u08": { title: "As pessoas ao nosso redor", grammarNote: "possessivos · descrever pessoas · comparativos" },
  "lesson:a1-u08-l1": {
    theme: "Pessoas e relações",
    title: "Os possessivos",
    objectives: [
      "usar mio, tuo, suo com a terminação correta",
      "saber quando o artigo desaparece antes de um parente",
      "dizer quem é quem na sua vida"
    ],
    theory: [
      {
        h: "Concorda com a coisa, não com o dono",
        p: "<em>Il <b>suo</b> libro</em> significa «o livro dele» ou «o livro dela»: a terminação descreve o <b>livro</b>, não quem o possui. Aqui o português funciona igual («seu carro» não diz de quem é), então não há nada a desaprender. Quando o contexto não basta, o italiano acrescenta <em>di lui</em> ou <em>di lei</em> — exatamente como o nosso «dele» e «dela»."
      },
      {
        h: "O artigo é a regra",
        p: "Diz-se quase sempre <em><b>il</b> mio libro</em>, <em><b>la</b> mia macchina</em>. Em português o artigo é opcional (meu livro / o meu livro) e no Brasil quase sempre cai; em italiano ele é obrigatório, e é a primeira coisa que o brasileiro esquece ao falar rápido."
      },
      {
        h: "A exceção: um único parente",
        p: "Sem artigo: <em>mia madre, mio padre, tuo fratello, sua sorella</em>. Mas o artigo <b>volta</b> quando há plural (<em>i miei genitori</em>), diminutivo (<em>la mia sorellina</em>), um adjetivo acrescentado (<em>la mia sorella maggiore</em>) ou a forma <em>loro</em> (<em>la loro madre</em>)."
      },
      {
        trap: "<b>Loro</b> nunca muda e <b>sempre</b> leva artigo: <em>il loro cane, la loro casa, i loro amici, la loro madre</em>. É o único possessivo que se comporta assim."
      }
    ],
    grammar: {
      title: "Formas do possessivo",
      table: {
        head: ["pessoa", "m. sing.", "f. sing.", "m. pl.", "f. pl."],
        rows: [
          ["io", "il mio", "la mia", "i miei", "le mie"],
          ["tu", "il tuo", "la tua", "i tuoi", "le tue"],
          ["lui / lei", "il suo", "la sua", "i suoi", "le sue"],
          ["noi", "il nostro", "la nostra", "i nostri", "le nostre"],
          ["voi", "il vostro", "la vostra", "i vostri", "le vostre"],
          ["loro", "il loro", "la loro", "i loro", "le loro"]
        ]
      },
      examples: [
        { tr: "Minha irmã mora em Bari.", note: "sem artigo" },
        { tr: "Minhas irmãs moram em Bari.", note: "plural → o artigo volta" },
        { tr: "Meu chefe é muito exigente." },
        { tr: "A casa deles fica perto do parque.", note: "loro sempre leva artigo" },
        { tr: "Os amigos dele são simpáticos." },
        { tr: "É o livro dela, não o dele.", note: "quando é preciso especificar" }
      ]
    },
    vocab: [
      "mãe / pai",
      "pais",
      "irmão / irmã",
      "filho / filha",
      "marido / mulher",
      "namorado(a), parceiro(a)",
      "colega de trabalho",
      "chefe",
      "vizinho",
      "colega de apartamento",
      "melhor amigo",
      "neto; sobrinho"
    ],
    exercises: [
      {
        q: "Qual é a forma correta de «minha mãe»?",
        opts: ["la mia madre", "mia madre", "la madre mia"],
        why: "Um único parente sem adjetivo não leva artigo."
      },
      {
        q: "E «meus pais»?",
        opts: ["miei genitori", "i miei genitori", "il mio genitori"],
        why: "No plural o artigo volta."
      },
      {
        q: "Complete: «___ loro casa è grande.»",
        why: "Loro sempre precisa de artigo, inclusive com os parentes."
      },
      {
        q: "Complete: «___ mia sorella maggiore.» (minha irmã mais velha)",
        why: "Um adjetivo acrescentado faz o artigo voltar."
      },
      {
        q: "Escolha o possessivo correto para «io».",
        items: ["livro", "carro", "pais", "irmãs"]
      },
      {
        q: "«Il suo libro»: de quem é o livro?",
        opts: ["Só dele", "Só dela", "Dele ou dela, quem decide é o contexto"]
      },
      { q: "«Meu chefe é muito exigente.»" },
      {
        q: "Complete (ponha o artigo, ou escreva um traço «-» se não houver).",
        tr: "Meu irmão trabalha com meus pais."
      },
      { tr: "Minha irmã e os filhos dela moram em Palermo." },
      { tr: "Meu melhor amigo se chama Paolo." }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Pessoas e relações",
    title: "Descrever a aparência de alguém",
    objectives: [
      "descrever o físico de uma pessoa",
      "usar essere e avere no lugar certo",
      "perguntar como alguém é"
    ],
    theory: [
      {
        h: "Essere para o conjunto, avere para as partes",
        p: "A altura, o porte e a impressão geral vão com <strong>essere</strong>: <em>è alto, è magra</em>. Os traços concretos vão com <strong>avere</strong>: <em>ha i capelli neri</em>, <em>ha gli occhi verdi</em>. O português faz a mesma divisão com ser e ter, então aqui não há nada novo."
      },
      {
        h: "O artigo com as partes do corpo",
        p: "Diz-se <em>ha <b>i</b> capelli lunghi</em>. Em português o artigo é opcional («tem cabelo comprido» ou «tem <b>o</b> cabelo comprido»), e no Brasil costuma cair; em italiano ele é obrigatório. Acostume-se a sempre colocá-lo."
      },
      {
        h: "Capelli vai sempre no plural",
        p: "<em>I capelli</em> é o cabelo como conjunto; o singular <em>il capello</em> é um fio só. Aqui muda em relação ao português, que diz «o cabelo» no singular. O mesmo com <em>i baffi</em> (o bigode), plural em italiano."
      },
      {
        tip: "Para perguntar pelo físico: <em>Com'è?</em> Pelo caráter: <em>Com'è di carattere?</em> Não confunda nenhuma das duas com <em>Come sta?</em>, que pergunta como a pessoa está."
      }
    ],
    grammar: {
      title: "Essere e avere nas descrições",
      table: {
        head: ["traço", "verbo", "exemplo"],
        rows: [
          ["altura", "essere", "È alto / bassa / di media statura."],
          ["porte", "essere", "È magro / robusto / sportiva."],
          ["cabelo", "avere", "Ha i capelli castani e ricci."],
          ["olhos", "avere", "Ha gli occhi azzurri."],
          ["idade", "avere", "Ha circa quarant'anni."],
          ["óculos, barba", "portare / avere", "Porta gli occhiali. Ha la barba."]
        ]
      },
      examples: [
        { tr: "Como é o seu irmão? — Alto e magro." },
        { tr: "Ele tem o cabelo comprido e liso." },
        { tr: "Ela tem olhos verdes e usa óculos." },
        { tr: "É uma mulher de meia-idade." },
        { tr: "Ele se parece com a mãe." },
        { tr: "Ela tem um sorriso bonito." }
      ]
    },
    vocab: [
      "alto / baixo",
      "magro / corpulento",
      "cabelo (sempre no plural)",
      "loiro / castanho / preto",
      "liso / cacheado",
      "olhos",
      "azuis / verdes / castanhos",
      "óculos",
      "barba",
      "sorriso",
      "parecer-se com",
      "de estatura média"
    ],
    exercises: [
      {
        q: "Qual frase está correta?",
        opts: ["È i capelli neri.", "Ha i capelli neri.", "Sono capelli neri."],
        why: "Os traços físicos vão com avere, e com artigo."
      },
      {
        q: "Complete: «Ha ___ occhi azzurri.»",
        why: "Occhi começa com vogal e é plural → gli."
      },
      { q: "Complete: «Mia sorella ___ alta e magra.»" },
      {
        q: "O que significa «Com'è di carattere?»",
        opts: ["Como ele está?", "Como ele é de personalidade?", "Que aparência ele tem?"]
      },
      { q: "Ligue.", pairs: ["cabelo cacheado", "de estatura média", "usa óculos", "parecer-se com"] },
      { q: "Complete a descrição.", tr: "Meu pai é alto e tem o cabelo grisalho. Usa óculos." },
      { q: "«Ela tem o cabelo comprido e cacheado.»" },
      { tr: "Como é a sua irmã? É baixinha e esportista." },
      { tr: "Ela tem o cabelo castanho, os olhos verdes e um sorriso bonito." },
      { tr: "Meu irmão é alto e tem o cabelo preto." }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Pessoas e relações",
    title: "Caráter e opiniões sobre as pessoas",
    objectives: [
      "descrever o caráter de alguém",
      "dar uma opinião sobre uma pessoa",
      "não confiar nas palavras que se parecem"
    ],
    theory: [
      {
        h: "Simpatico significa o mesmo que em português",
        p: "<strong>Simpatico</strong> descreve quem é boa companhia: brinca, te inclui na conversa, é agradável estar com ele. É uma das poucas palavras que você pode traduzir direto. E <em>gentile</em> também acerta em cheio: é o nosso «gentil», educado e atencioso. O contrário de simpatico, <em>antipatico</em>, é duro: beira a acusação."
      },
      {
        h: "Opiniões com secondo me",
        p: "<em>Secondo me</em> («na minha opinião», «pra mim») é a forma mais comum de introduzir um juízo. Atenção à forma: não <em>secondo io</em>, e sim <em>secondo me</em>, porque depois de preposição vai o pronome tônico — como em português se diz «para mim», e não «para eu», quando é opinião."
      },
      {
        h: "Cuidado com o elogio e a crítica",
        p: "O italiano é generoso com os elogios (<em>bravissimo, gentilissima</em>), mas costuma suavizar a crítica a uma pessoa: em vez de <em>è antipatico</em> você vai ouvir mais <em>è un po' particolare</em> ou <em>non è il mio tipo</em>."
      },
      {
        contrast: "As palavras que se parecem são a maior armadilha entre português e italiano, porque a semelhança convida a não conferir. <em>Bravo</em> não é «bravo, zangado» (isso é <em>arrabbiato</em>): significa que você é bom em algo, «bravo in matematica». <em>Salire</em> é subir, não sair (sair é <em>uscire</em>). <em>Burro</em> é manteiga. <em>Squisito</em> é delicioso, não esquisito (esquisito é <em>strano</em>). <em>Guardare</em> é olhar, não guardar. Essas cinco causam mais mal-entendidos que qualquer ponto de gramática deste nível."
      }
    ],
    grammar: {
      title: "Adjetivos de caráter",
      table: {
        head: ["italiano", "português", "nota"],
        rows: [
          ["simpatico / antipatico", "simpático / antipático", "antipatico é forte"],
          ["gentile", "gentil, educado", "igual ao «gentil» português"],
          ["bravo", "bom em algo", "«bravo in matematica» — não é «bravo», zangado"],
          ["socievole / timido", "sociável / tímido", ""],
          ["generoso / egoista", "generoso / egoísta", "egoista não muda no masculino"],
          ["tranquillo / nervoso", "tranquilo / nervoso", ""]
        ]
      },
      examples: [
        { tr: "Minha colega de trabalho é muito simpática." },
        { tr: "Na minha opinião, é uma pessoa generosa." },
        { tr: "Ele é muito bom em matemática." },
        { tr: "No começo ele é um pouco tímido." },
        { tr: "Não faz o meu tipo, mas é gentil." },
        { tr: "Vou com a cara dele.", note: "literalmente: «ele me é simpático»" }
      ]
    },
    vocab: [
      "simpático / antipático",
      "gentil, educado",
      "bom em algo",
      "sociável",
      "tímido",
      "generoso",
      "egoísta",
      "tranquilo",
      "divertido (uma coisa ou uma pessoa)",
      "chato",
      "na minha opinião",
      "vou com a cara dele"
    ],
    exercises: [
      {
        q: "«Simpatico» está mais perto de:",
        opts: ["educado, cortês", "divertido, boa companhia", "compreensivo, empático"],
        why: "«Educado» é gentile e «compreensivo» é comprensivo. Simpatico é ser agradável de estar junto."
      },
      {
        q: "Qual forma está correta?",
        opts: ["Secondo io", "Secondo me", "Secondo mio"],
        why: "Depois da preposição secondo vai o pronome tônico: me, te, lui, lei."
      },
      { q: "Complete: «Mia collega è molto ___.» (gentil)" },
      {
        q: "«È bravo in matematica» significa:",
        opts: ["Viva a matemática!", "Ele é bom em matemática", "Ele gosta de matemática"]
      },
      {
        q: "Ligue os adjetivos aos seus contrários.",
        pairs: ["antipatico", "egoista", "timido", "nervoso"]
      },
      { q: "«Na minha opinião, é uma pessoa tranquila.»" },
      {
        q: "Complete.",
        tr: "Na minha opinião, meu colega de apartamento é uma pessoa muito sociável: fala com todo mundo."
      },
      { tr: "No começo ele é um pouco tímido." },
      { tr: "Na minha opinião, é uma pessoa generosa e divertida." },
      { tr: "Minha colega de trabalho é muito simpática, vou com a cara dela." }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Gramática básica",
    title: "Os comparativos",
    objectives: [
      "comparar duas pessoas ou duas coisas",
      "escolher entre di e che",
      "usar os irregulares migliore e peggiore"
    ],
    theory: [
      {
        h: "Três construções básicas",
        list: [
          "<b>più… di</b> — mais (do) que: <em>Anna è più alta di Marco.</em>",
          "<b>meno… di</b> — menos (do) que: <em>Questo è meno caro di quello.</em>",
          "<b>come / quanto</b> — tão… quanto: <em>È alto come te.</em>"
        ]
      },
      {
        h: "Di ou che: a regra prática",
        p: "<strong>Di</strong> quando você compara <b>duas coisas diferentes num mesmo aspecto</b>: <em>Roma è più grande di Firenze</em>. <strong>Che</strong> quando compara <b>duas qualidades da mesma coisa</b>, dois verbos, ou quando vem uma preposição: <em>È più simpatico che intelligente</em>, <em>È più facile parlare che scrivere</em>, <em>Vado più spesso a Roma che a Milano</em>."
      },
      {
        contrast: "O português usa «(do) que» em todos esses casos («mais alta do que Marco», «mais simpático do que inteligente») e reserva «de» para os números («mais de vinte»). Em italiano a divisão é outra e precisa ser aprendida do zero: o nosso «do que» não diz qual das duas formas italianas usar."
      },
      {
        h: "Formas irregulares",
        p: "<em>buono → migliore</em>, <em>cattivo → peggiore</em>, <em>grande → maggiore</em>, <em>piccolo → minore</em>. As regulares (<em>più buono, più cattivo</em>) também existem e são usadas, sobretudo falando de sabor: <em>questa pizza è più buona</em>."
      },
      {
        trap: "Depois de <b>di</b> vai o pronome tônico: <em>più alto di <b>me</b></em>, nunca «di io». Aqui o português empurra para o erro, porque diz «mais alto do que <b>eu</b>», com pronome sujeito. O mesmo depois de <b>come</b>: <em>come te</em>, não «come tu»."
      }
    ],
    grammar: {
      title: "Os comparativos",
      table: {
        head: ["construção", "exemplo", "em português"],
        rows: [
          ["più… di", "Anna è più alta di Marco.", "Anna é mais alta do que Marco."],
          ["meno… di", "Questo è meno caro di quello.", "Este é menos caro do que aquele."],
          ["come", "Sei alto come me.", "Você é tão alto quanto eu."],
          ["più… che (duas qualidades)", "È più simpatico che bello.", "É mais simpático do que bonito."],
          ["più… che (dois verbos)", "È più facile parlare che scrivere.", "É mais fácil falar do que escrever."],
          ["il più… di", "È il più bravo della classe.", "É o melhor da turma."]
        ]
      },
      examples: [
        { tr: "Milão é mais cara do que Bolonha." },
        { tr: "Meu irmão é menos paciente do que eu." },
        { tr: "Este vinho é melhor do que aquele." },
        { tr: "É o pior dia da semana." },
        { tr: "Vou mais vezes a Roma do que a Milão." },
        { tr: "Você é tão gentil quanto a sua mãe." }
      ]
    },
    vocab: [
      "mais… do que",
      "menos… do que",
      "tão… quanto",
      "melhor / pior",
      "o mais… de",
      "paciente",
      "rápido / lento",
      "fácil / difícil",
      "jovem / mais velho",
      "igual",
      "diferente de",
      "sobretudo"
    ],
    exercises: [
      {
        q: "«Anna è più alta ___ Marco.»",
        opts: ["che", "di", "come"],
        why: "Duas pessoas diferentes comparadas num mesmo aspecto → di."
      },
      {
        q: "«È più simpatico ___ bello.»",
        opts: ["di", "che", "come"],
        why: "Duas qualidades da mesma pessoa → che."
      },
      {
        q: "Complete: «Sei più alto ___ me.»",
        why: "Depois de di vai o pronome tônico: di me, di te, di lui."
      },
      { q: "Dê o comparativo irregular de «buono»: ___" },
      {
        q: "«È il più bravo della classe» significa:",
        opts: ["É melhor que a turma", "É o melhor da turma", "É tão bom quanto a turma"]
      },
      { q: "«Milão é mais cara do que Bolonha.»" },
      {
        q: "Complete com di ou che.",
        tr: "Roma é maior do que Florença, mas falar italiano é mais fácil do que escrevê-lo."
      },
      { tr: "Este vinho é melhor do que aquele." },
      { tr: "Meu irmão é menos paciente do que eu." },
      { tr: "Esta cidade é mais tranquila do que Milão." }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Teste",
    title: "Teste da unidade 8",
    objectives: ["verificar os possessivos, a descrição de pessoas e os comparativos"],
    theory: [{ p: "Dez perguntas. Passa quem acertar 70%." }],
    exercises: [
      { q: "«minha mãe» é:", opts: ["la mia madre", "mia madre", "mia la madre"] },
      { q: "«___ miei genitori abitano a Lodz.»" },
      { q: "«___ loro casa è nuova.»" },
      { q: "A frase correta:", opts: ["È i capelli neri.", "Ha i capelli neri.", "Ha capelli neri."] },
      { q: "«Ha ___ occhi verdi.»" },
      { q: "«Simpatico» significa:", opts: ["educado", "divertido, boa companhia", "compreensivo"] },
      { q: "«È più alta ___ me.»", opts: ["che", "di", "come"] },
      { q: "O comparativo de «cattivo»: ___" },
      { tr: "Minha irmã é mais nova do que eu e tem o cabelo cacheado." },
      { tr: "Na minha opinião, é uma pessoa muito gentil." }
    ]
  },
  "unit:a1-u09": { title: "O tempo livre", grammarNote: "fare/giocare/suonare · o tempo · stare + gerundio" },
  "lesson:a1-u09-l1": {
    theme: "Tempo livre",
    title: "Passatempos e programas",
    objectives: [
      "dizer o que você faz no tempo livre",
      "distinguir fare, giocare e suonare",
      "propor algo e responder a uma proposta"
    ],
    theory: [
      {
        h: "Três verbos, três terrenos diferentes",
        list: [
          "<b>fare</b> + esporte individual ou atividade: <em>faccio yoga, faccio una passeggiata, faccio nuoto</em>",
          "<b>giocare a</b> + jogo ou esporte de equipe: <em>gioco a calcio, gioco a carte, gioco a tennis</em>",
          "<b>suonare</b> + instrumento: <em>suono la chitarra, suono il pianoforte</em>"
        ]
      },
      {
        contrast: "Essa divisão você já tem pronta: o português também distingue jogar futebol de tocar violão, e usa fazer para o yoga. A única coisa a memorizar é a preposição: <em>giocare <b>a</b> calcio</em>, <em>giocare <b>a</b> tennis</em>, onde o português diz «jogar futebol» sem nada no meio. Esquecer esse <em>a</em> é o erro típico do brasileiro."
      },
      {
        h: "Propor algo",
        p: "As fórmulas comuns: <em>Ti va di…?</em> («você está a fim de…?»), <em>Che ne dici di…?</em> («que tal…?»), <em>Andiamo a…?</em>. As respostas: <em>Volentieri!</em>, <em>Perché no?</em>, <em>Mi dispiace, non posso</em>."
      },
      {
        tip: "<em>Ti va</em> é impessoal como <em>mi piace</em>: <em>ti va un caffè?</em> («está a fim de um café?», literalmente «um café te vai?»). De novo a coisa é o sujeito — ao contrário do português, em que é «você» quem está a fim."
      }
    ],
    grammar: {
      title: "Fare, giocare, suonare",
      table: {
        head: ["verbo", "com o quê", "exemplo"],
        rows: [
          ["fare", "esporte individual, atividade", "Faccio palestra tre volte a settimana."],
          ["giocare a", "jogo, esporte de equipe", "Gioco a calcio il sabato."],
          ["suonare", "instrumento", "Suono il pianoforte da dieci anni."],
          ["andare a/in", "um lugar ou uma atividade", "Vado a ballare / in piscina."],
          ["ti va di + infinitivo", "uma proposta", "Ti va di andare al cinema?"]
        ]
      },
      examples: [
        { tr: "Nos fins de semana dou uma volta pelo centro." },
        { tr: "Jogo tênis com minha irmã." },
        { tr: "Toco violão, mas mal." },
        { tr: "Está a fim de ir ao cinema hoje à noite?" },
        { tr: "Com prazer! A que horas?" },
        { tr: "Sinto muito, hoje à noite não posso." }
      ]
    },
    vocab: [
      "tempo livre",
      "praticar esporte",
      "academia",
      "piscina",
      "jogar futebol",
      "tocar violão",
      "dançar",
      "ler um livro",
      "ver uma série",
      "está a fim de…?",
      "com prazer",
      "quem sabe outra vez"
    ],
    exercises: [
      {
        q: "«___ la chitarra.» (toco violão)",
        opts: ["Gioco", "Suono", "Faccio"],
        why: "Um instrumento pede suonare, nunca giocare."
      },
      { q: "«___ a calcio.» (jogo futebol)", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "Complete: «___ yoga due volte a settimana.» (faço yoga)" },
      { q: "Complete: «___ va di andare al cinema?» (você está a fim?)" },
      {
        q: "Ligue o verbo ao que vem depois.",
        pairs: ["carte", "il pianoforte", "una passeggiata", "piscina"]
      },
      { q: "«Está a fim de ir ao cinema hoje à noite?»" },
      { q: "Complete.", tr: "Aos sábados jogo tênis, aos domingos toco violão e dou uma volta." },
      {
        q: "Um amigo te convida para sair.",
        setting: "Quinta à noite, uma mensagem de voz de um amigo.",
        lines: [
          { tr: "Ei! Está a fim de ir a um show no sábado?" },
          { tr: "Aceite com entusiasmo e pergunte a que horas.", answerTr: "Com prazer! A que horas?" },
          { tr: "Às nove, mas a gente se encontra às oito e meia na praça." },
          { tr: "Confirme e se despeça.", answerTr: "Perfeito, a gente se vê lá!" }
        ]
      },
      { tr: "No meu tempo livre vou à academia e vejo séries." },
      { tr: "Está a fim de dar uma volta pelo centro?" }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Tempo livre",
    title: "O tempo e as estações",
    objectives: ["descrever como está o tempo", "usar fare de forma impessoal", "relacionar o tempo com seus planos"],
    theory: [
      {
        h: "O tempo se faz, não se é",
        p: "O italiano diz <em>fa caldo</em>, <em>fa freddo</em>, <em>fa bel tempo</em>. É o uso <strong>impessoal</strong> de <em>fare</em>: sem sujeito, sempre na terceira pessoa do singular. E coincide com o português «faz calor», então esse ponto você ganha de presente."
      },
      {
        h: "Três construções diferentes",
        list: [
          "<b>fare</b> + substantivo: <em>fa caldo, fa freddo, fa bel/brutto tempo</em>",
          "<b>c'è</b> + substantivo: <em>c'è il sole, c'è vento, c'è nebbia</em>",
          "um verbo próprio: <em>piove</em> (chove), <em>nevica</em> (neva)"
        ]
      },
      {
        contrast: "<em>Fa caldo</em> = «faz calor», igualzinho. Mas a semelhança para aí: para a pessoa, o italiano usa <em>avere</em> — <em>ho caldo</em> = «estou com calor», nunca «sto con caldo». E <em>c'è il sole</em> corresponde ao nosso «está sol» / «tem sol», com artigo em italiano. Não estenda o paralelo: <em>sono caldo</em> não significa nada de bom."
      },
      {
        h: "As estações",
        p: "<em>in primavera, in estate, in autunno, in inverno</em>. Os meses não levam artigo depois de <em>a</em> ou <em>in</em>: <em>a gennaio</em>, <em>in luglio</em>, as duas formas valem."
      }
    ],
    grammar: {
      title: "Como está o tempo",
      table: {
        head: ["construção", "exemplo", "em português"],
        rows: [
          ["fare", "Fa caldo. / Fa freddo.", "Faz calor. / Faz frio."],
          ["fare", "Fa bel tempo. / Fa brutto tempo.", "O tempo está bom / ruim."],
          ["c'è", "C'è il sole. / C'è vento.", "Está sol. / Está ventando."],
          ["um verbo", "Piove. / Nevica.", "Está chovendo. / Está nevando."],
          ["graus", "Ci sono venti gradi.", "Está fazendo vinte graus."],
          ["pergunta", "Che tempo fa?", "Como está o tempo?"]
        ]
      },
      examples: [
        { tr: "Hoje está calor, vamos à praia." },
        { tr: "No inverno, em Milão, muitas vezes tem neblina." },
        { tr: "Amanhã vai chover, vamos ficar em casa." },
        { tr: "Como está o tempo em Roma? — Maravilhoso!" },
        { tr: "Estou com frio, feche a janela.", note: "sobre si mesmo: avere" },
        { tr: "A primavera é a melhor estação." }
      ]
    },
    vocab: [
      "como está o tempo?",
      "faz calor / frio",
      "está sol",
      "chove / neva",
      "está ventando / tem neblina",
      "chuva / neve",
      "nuvens",
      "grau",
      "primavera / verão",
      "outono / inverno",
      "guarda-chuva",
      "a previsão do tempo"
    ],
    exercises: [
      {
        q: "Como se diz «faz calor» (do tempo)?",
        opts: ["Sono caldo", "Fa caldo", "Ho caldo"],
        why: "«Ho caldo» é você que está com calor; do tempo se diz fa caldo."
      },
      { q: "Complete: «___ il sole.» (está sol)" },
      { q: "Complete: «Domani ___.» (amanhã chove)" },
      { q: "«Ho freddo» significa:", opts: ["Está frio lá fora", "Estou com frio", "Está esfriando"] },
      { q: "Ligue.", pairs: ["neva", "tem neblina", "tempo ruim", "guarda-chuva"] },
      { q: "Complete a previsão.", tr: "Amanhã vai fazer frio e vento, e à tarde vai chover." },
      { q: "«Como está o tempo em Roma?»" },
      { tr: "No inverno, em Milão, muitas vezes tem neblina." },
      { tr: "Hoje o tempo está bom, está fazendo vinte e cinco graus." },
      { tr: "Como está o tempo hoje? Frio e chuva." }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Gramática básica",
    title: "Stare + gerundio",
    objectives: [
      "descrever algo que está acontecendo agora",
      "formar o gerúndio",
      "saber quando NÃO se usa essa construção"
    ],
    theory: [
      {
        h: "O que acontece neste momento",
        p: "<strong>Stare + gerundio</strong> destaca que algo acontece <b>agora mesmo</b>: <em>Sto lavorando</em>. É exatamente o seu «estou trabalhando», com o mesmo verbo (<em>stare</em> é primo de «estar») e a mesma lógica. O presente simples <em>lavoro</em> também vale, mas é geral: «trabalho, tenho um emprego»."
      },
      {
        h: "Como se forma o gerúndio",
        list: [
          "<b>-are → -ando</b>: parlare → parl<b>ando</b>",
          "<b>-ere → -endo</b>: prendere → prend<b>endo</b>",
          "<b>-ire → -endo</b>: dormire → dorm<b>endo</b>",
          "irregulares: <em>fare → facendo, dire → dicendo, bere → bevendo</em>"
        ]
      },
      {
        contrast: "O português tem três terminações, <b>-ando / -endo / -indo</b>, uma para cada conjugação, e o italiano só duas: os verbos em <em>-ire</em> fazem <b>-endo</b>, não «-indo». <em>Dormendo</em>, não «dormindo»; <em>partendo</em>, não «partindo». É o único ponto da lição em que a sua língua empurra para o erro."
      },
      {
        trap: "<b>Stare + gerundio não fala do futuro.</b> «Amanhã vejo a Anna» é <em>domani vedo Anna</em>, nunca «sto vedendo Anna domani». E nada de «gerundismo»: «vou estar enviando» não tem tradução com stare — em italiano é simplesmente <em>mando</em> ou <em>manderò</em>."
      },
      {
        h: "Os pronomes com essa construção",
        p: "O pronome pode vir antes de <em>stare</em> ou colado ao gerúndio: <em><b>ti</b> sto aspettando</em> = <em>sto aspettando<b>ti</b></em>. A primeira é mais frequente na fala. O português faz algo parecido: «te estou esperando» / «estou te esperando»."
      }
    ],
    grammar: {
      title: "Stare + gerundio",
      table: {
        head: ["pessoa", "stare", "exemplo"],
        rows: [
          ["io", "sto", "Sto mangiando."],
          ["tu", "stai", "Che stai facendo?"],
          ["lui / lei", "sta", "Sta dormendo."],
          ["noi", "stiamo", "Stiamo uscendo adesso."],
          ["voi", "state", "State scherzando?"],
          ["loro", "stanno", "Stanno arrivando."]
        ]
      },
      examples: [
        { tr: "O que você está fazendo? — Estou estudando." },
        { tr: "Não posso falar, estou dirigindo." },
        { tr: "Eles estão chegando, espere cinco minutos." },
        { tr: "Estou te esperando na frente do bar." },
        { tr: "Estou prestes a sair.", note: "stare per = estar prestes a" },
        { tr: "Amanhã vou a Roma.", note: "o futuro: presente simples" }
      ]
    },
    vocab: [
      "estar fazendo algo",
      "estar prestes a fazer algo",
      "agora",
      "neste momento",
      "esperar",
      "dirigir",
      "brincar, estar de brincadeira",
      "chegar",
      "sair",
      "apressar-se",
      "um momento",
      "estou atrasado"
    ],
    exercises: [
      { q: "«Sto mangiando» significa:", opts: ["Normalmente como", "Estou comendo agora", "Vou comer"] },
      { q: "Forme o gerúndio de «fare»: ___" },
      { q: "Forme o gerúndio de «dormire»: ___" },
      { q: "Complete: «Loro ___ arrivando.»" },
      {
        q: "Como se diz «amanhã vejo a Anna»?",
        opts: ["Sto vedendo Anna domani", "Domani vedo Anna", "Sto per vedere Anna domani"],
        why: "Stare + gerundio não expressa futuro: use o presente simples, como em «amanhã vejo a Anna»."
      },
      { q: "«Não posso falar, estou dirigindo.»" },
      { q: "Complete a ligação.", tr: "— O que você está fazendo? — Estou saindo de casa, chego em um minuto." },
      { tr: "Estou te esperando na frente do bar." },
      { tr: "Desculpe, estou prestes a entrar numa reunião." },
      { tr: "O que você está fazendo? — Estou estudando italiano." }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Tempo livre",
    title: "Cultura, cinema e música",
    objectives: [
      "comprar um ingresso e falar de um filme",
      "opinar sobre um livro, um filme, um show",
      "usar as frases básicas para avaliar algo"
    ],
    theory: [
      {
        h: "Avaliar: mi è piaciuto",
        p: "De algo de que você gostou se diz <em>mi è piaciuto</em> (masculino) ou <em>mi è piaciuta</em> (feminino). Já é o passado de <em>piacere</em>: a explicação completa chega no A2, mas a frase é tão frequente que vale tê-la agora. Repare que a construção é a mesma de <em>mi piace</em>: a coisa é o sujeito («o filme me agradou»), e por isso o particípio concorda com ela."
      },
      {
        h: "Versão original",
        p: "Na Itália os filmes no cinema são tradicionalmente dublados — bem mais do que no Brasil, onde a sessão legendada é comum. Uma sessão legendada é marcada como <strong>V.O.</strong> (versione originale) ou <em>sottotitolato</em>. Nas cidades grandes existem, mas é preciso procurar."
      },
      {
        h: "Ingressos",
        p: "<em>Un biglietto intero</em> (inteira), <em>ridotto</em> (meia-entrada). A poltrona numerada é o habitual: <em>Che posto preferisce?</em>"
      },
      {
        tip: "A palavra <em>spettacolo</em> vale tanto para uma sessão de cinema quanto para uma apresentação de teatro. <em>Lo spettacolo delle 21</em> é a sessão das nove."
      }
    ],
    grammar: {
      title: "Opiniões e cultura",
      table: {
        head: ["função", "frase", "em português"],
        rows: [
          ["positivo", "Mi è piaciuto molto.", "Gostei muito."],
          ["negativo", "Non mi è piaciuto per niente.", "Não gostei nem um pouco."],
          ["recomendar", "Te lo consiglio.", "Eu te recomendo."],
          ["tédio", "Mi ha annoiato.", "Achei chato."],
          ["ingresso", "Due biglietti per lo spettacolo delle nove.", "Dois ingressos para a sessão das nove."],
          ["pedir opinião", "Com'era?", "E aí, como foi?"]
        ]
      },
      examples: [
        { tr: "Ontem à noite fui ao cinema." },
        { tr: "O filme era em versão original." },
        { tr: "Gostei muito da trilha sonora." },
        { tr: "Duas meias-entradas, por favor." },
        { tr: "Que gênero você prefere?" },
        { tr: "Recomendo de verdade." }
      ]
    },
    vocab: [
      "filme",
      "sessão, apresentação",
      "inteira / meia-entrada",
      "versão original",
      "legendas",
      "diretor",
      "ator / atriz",
      "trilha sonora",
      "show, concerto",
      "exposição",
      "recomendar",
      "como foi?"
    ],
    culture: {
      title: "Com olhos italianos: o cinema e a dublagem",
      text: "<p>A Itália tem uma das tradições de dublagem mais fortes do mundo, comparável à brasileira na TV. Os <i>doppiatori</i> são nomes conhecidos, e alguns foram por décadas a voz italiana de uma única estrela de Hollywood.</p><p>O efeito colateral: os italianos entendem o inglês falado pior do que os escandinavos, criados com legendas. O streaming está mudando isso.</p><p>Se você está aprendendo italiano, a dublagem joga a seu favor: um filme que você já conhece, em italiano, é treino de escuta com uma trama em que não dá para se perder.</p>"
    },
    exercises: [
      {
        q: "O que significa «V.O.» na programação de um cinema?",
        opts: ["Versão resumida", "Versão original, normalmente legendada", "Versão infantil"]
      },
      { q: "Complete: «Mi è ___ molto il film.» (gostei muito)" },
      { q: "Complete: «Due biglietti ___, per favore.» (meia-entrada)" },
      { q: "Ligue.", pairs: ["diretor", "trilha sonora", "legendas", "exposição"] },
      { q: "«Gostei muito, eu te recomendo.»" },
      {
        q: "«Lo spettacolo delle nove» é:",
        opts: ["A nona apresentação", "A sessão das nove", "Nove ingressos"]
      },
      {
        q: "Complete o diálogo na bilheteria.",
        tr: "— Dois ingressos para a sessão das nove. — Inteira ou meia? — Uma inteira e uma meia."
      },
      { tr: "Que tipo de filme você prefere?" },
      { tr: "Gostei muito do show, sobretudo da segunda parte." },
      { tr: "Está a fim de ir à exposição no domingo?" }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Teste",
    title: "Teste da unidade 9",
    objectives: ["verificar fare/giocare/suonare, o tempo e stare + gerundio"],
    theory: [{ p: "Dez perguntas. Passa quem acertar 70%." }],
    exercises: [
      { q: "«___ la chitarra.»", opts: ["Gioco", "Suono", "Faccio"] },
      { q: "«___ a carte.»", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "«___ caldo oggi.» (faz calor)" },
      { q: "«___ il sole.»" },
      { q: "O gerúndio de «bere»: ___" },
      { q: "«Loro ___ arrivando.»" },
      {
        q: "«Amanhã vou a Roma»:",
        opts: ["Sto andando a Roma domani", "Domani vado a Roma", "Sto per Roma domani"]
      },
      { tr: "Está a fim de dar uma volta?" },
      { tr: "Estou saindo, está frio, vou pegar o guarda-chuva." },
      { tr: "Nos fins de semana jogo tênis e dou uma volta." }
    ]
  },
  "unit:a1-u10": {
    title: "Olhar para trás",
    grammarNote: "passato prossimo · contar algo · revisão do A1"
  },
  "lesson:a1-u10-l1": {
    theme: "O passado",
    title: "Passato prossimo com avere",
    objectives: [
      "construir o passado com avere",
      "formar o particípio regular",
      "dizer o que você fez ontem"
    ],
    theory: [
      {
        h: "Um tempo composto, duas peças",
        p: "<strong>Passato prossimo</strong> = <em>avere</em> ou <em>essere</em> no presente + o <b>particípio passado</b>. É o passado do dia a dia em italiano e corresponde ao nosso pretérito perfeito: <em>ho mangiato</em> = «comi»."
      },
      {
        contrast: "Cuidado com a aparência: <em>ho mangiato</em> parece «tenho comido», mas o «tenho comido» português indica algo repetido até agora («tenho comido pouco ultimamente»). <em>Ho mangiato</em> é simplesmente «comi», um fato concluído — e o italiano falado do norte e do centro o usa até para coisas de anos atrás. A forma de um verbo só (<em>mangiai</em>, o passato remoto) existe, mas na conversa do norte não se ouve; aparece no C1."
      },
      {
        h: "O particípio regular",
        list: [
          "<b>-are → -ato</b>: parlare → parl<b>ato</b>",
          "<b>-ere → -uto</b>: credere → cred<b>uto</b>",
          "<b>-ire → -ito</b>: finire → fin<b>ito</b>"
        ]
      },
      {
        h: "A maioria dos verbos vai com avere",
        p: "Todo verbo <b>transitivo</b> (o que admite objeto direto: «comi <i>algo</i>», «vi <i>alguém</i>») forma o passato prossimo com <em>avere</em>. O particípio então <b>não muda</b>: <em>Anna ha mangiato</em>, não «ha mangiata»."
      },
      {
        h: "Particípios irregulares frequentes",
        p: "É preciso decorá-los, porque são dos verbos mais usados: <em>fare → fatto</em>, <em>dire → detto</em>, <em>vedere → visto</em>, <em>prendere → preso</em>, <em>leggere → letto</em>, <em>scrivere → scritto</em>, <em>bere → bevuto</em>, <em>aprire → aperto</em>, <em>chiudere → chiuso</em>. Vários se parecem com os nossos: feito, dito, visto, escrito, aberto."
      }
    ],
    grammar: {
      title: "Passato prossimo com avere",
      table: {
        head: ["pessoa", "avere", "particípio", "forma completa"],
        rows: [
          ["io", "ho", "mangiato", "ho mangiato"],
          ["tu", "hai", "parlato", "hai parlato"],
          ["lui / lei", "ha", "visto", "ha visto"],
          ["noi", "abbiamo", "letto", "abbiamo letto"],
          ["voi", "avete", "finito", "avete finito"],
          ["loro", "hanno", "fatto", "hanno fatto"]
        ]
      },
      examples: [
        { tr: "Ontem comi uma pizza fantástica." },
        { tr: "Você viu o filme ontem à noite?" },
        { tr: "Reservamos uma mesa para as oito." },
        { tr: "Não entendi, você pode repetir?" },
        { tr: "O que você fez no fim de semana?" },
        { tr: "Já paguei.", note: "«già» vai entre avere e o particípio" }
      ]
    },
    vocab: [
      "ontem",
      "anteontem",
      "a semana passada",
      "o mês passado",
      "dois dias atrás",
      "já",
      "ainda não",
      "depois, em seguida",
      "primeiro, antes",
      "fazer → feito",
      "ver → visto",
      "dizer → dito"
    ],
    exercises: [
      {
        q: "Do que é composto o passato prossimo?",
        opts: [
          "Dois verbos no presente",
          "avere/essere + o particípio passado",
          "essere + o infinitivo"
        ]
      },
      { q: "O particípio de «parlare»: ___" },
      { q: "O particípio de «credere»: ___" },
      { q: "O particípio de «finire»: ___" },
      { q: "Complete: «Ieri ___ una pizza.» (comi)" },
      { q: "Ligue o verbo ao seu particípio irregular.", pairs: ["fatto", "visto", "scritto", "preso"] },
      {
        q: "Complete o relato do fim de semana.",
        tr: "No sábado vi um filme, depois jantei fora. No domingo não fiz nada."
      },
      { q: "«Não entendi, você pode repetir?»" },
      { tr: "Na semana passada visitamos Florença." },
      { tr: "Ontem à noite li um livro muito interessante." }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "O passado",
    title: "Passato prossimo com essere",
    objectives: [
      "reconhecer os verbos que pedem essere",
      "concordar o particípio com o sujeito",
      "contar uma viagem"
    ],
    theory: [
      {
        h: "Um grupo pequeno, mas muito frequente",
        p: "Os verbos de <b>movimento e de mudança de estado</b> formam o passato prossimo com <strong>essere</strong>: <em>andare, venire, arrivare, partire, uscire, entrare, tornare, salire, scendere, restare, rimanere, nascere, morire, diventare, essere, stare</em>. Mais todos os reflexivos."
      },
      {
        contrast: "O português usa sempre «ter» nos tempos compostos, com qualquer verbo: «tinha ido», «tinha chegado», «tinha se levantado». Não há nada a transferir, e por isso este é o ponto do A1 que mais resiste: é preciso aprender a lista e, principalmente, lembrar dela ao falar depressa."
      },
      {
        h: "O particípio concorda com o sujeito",
        p: "Esta é a diferença-chave: com <em>essere</em> o particípio se comporta como um adjetivo. <em>Sono andat<b>o</b></em> (um homem), <em>sono andat<b>a</b></em> (uma mulher), <em>siamo andat<b>i</b></em> (grupo masculino ou misto), <em>sono andat<b>e</b></em> (só mulheres). Em português «tínhamos ido» nunca muda."
      },
      {
        h: "Como lembrar qual verbo pede essere",
        p: "Um teste prático: se o verbo <b>não admite objeto direto</b> («fui <i>o quê</i>» não faz sentido), o normal é que peça essere. Não é infalível (<em>dormire</em> vai com avere), mas funciona quase sempre."
      },
      {
        trap: "Alguns verbos mudam de auxiliar ao mudar de sentido: <em>ho finito il lavoro</em> (terminei o trabalho, transitivo, avere) contra <em>il film è finito</em> (o filme terminou, intransitivo, essere). O mesmo com <em>cambiare, passare, cominciare</em>."
      }
    ],
    grammar: {
      title: "Passato prossimo com essere",
      table: {
        head: ["sujeito", "forma", "exemplo"],
        rows: [
          ["um homem", "sono andato", "Sono andato a Roma."],
          ["uma mulher", "sono andata", "Sono andata a Roma."],
          ["grupo (m/misto)", "siamo andati", "Siamo andati insieme."],
          ["grupo (só mulheres)", "siamo andate", "Siamo andate insieme."],
          ["reflexivo", "mi sono alzato/a", "Mi sono alzata alle sei."],
          ["irregular", "sono nato/a", "Sono nata a Varsavia."]
        ]
      },
      examples: [
        { tr: "Saí às sete da manhã." },
        { tr: "Chegamos atrasados." },
        { tr: "Marco nasceu em 1990." },
        { tr: "Nos divertimos muito." },
        { tr: "O filme terminou às onze." },
        { tr: "Terminei o trabalho às seis.", note: "transitivo → avere" }
      ]
    },
    vocab: [
      "ir → ido",
      "vir → vindo",
      "chegar",
      "partir, sair de viagem",
      "voltar",
      "sair (de casa)",
      "entrar",
      "nascer",
      "ficar",
      "tornar-se",
      "divertir-se",
      "viagem"
    ],
    exercises: [
      {
        q: "O que o particípio com essere tem de especial?",
        opts: ["Nunca muda", "Concorda com o sujeito como um adjetivo", "Sempre termina em -o"]
      },
      { q: "Uma mulher que diz «parti»:", opts: ["sono partito", "sono partita", "ho partito"] },
      { q: "Complete para um grupo de mulheres: «Loro sono ___ ieri.» (chegaram)" },
      { q: "O particípio de «nascere» (masculino): ___" },
      {
        q: "Quais verbos formam o passato prossimo com essere?",
        opts: ["andare", "mangiare", "partire", "vedere", "nascere"]
      },
      {
        q: "«Il film ___ alle undici.» (terminou)",
        opts: ["ha finito", "è finito", "sono finito"],
        why: "Aqui «finire» é intransitivo (o filme terminou sozinho) → essere."
      },
      {
        q: "Complete o relato da viagem (quem fala é uma mulher).",
        tr: "Parti na sexta e cheguei a Nápoles à noite. Me diverti muito."
      },
      { tr: "Chegamos atrasados." },
      { tr: "Nasci em Varsóvia, mas cresci em Cracóvia." },
      { tr: "Ontem fui ao cinema com um amigo." }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "O passado",
    title: "Contar algo do passado",
    objectives: [
      "encadear frases num relato curto",
      "usar as expressões de tempo que organizam o relato",
      "perguntar a alguém sobre o fim de semana"
    ],
    theory: [
      {
        h: "Um relato precisa de um esqueleto temporal",
        p: "Os verbos sozinhos não fazem um relato. São necessários conectores: <em>prima</em> (primeiro), <em>poi</em> (depois), <em>dopo</em> (em seguida), <em>alla fine</em> (no final), <em>mentre</em> (enquanto). Sem eles as frases ficam uma ao lado da outra, como uma lista."
      },
      {
        h: "Perguntas sobre o passado",
        p: "<em>Che cosa hai fatto?</em>, <em>Dove sei andato/a?</em>, <em>Con chi sei uscito/a?</em>, <em>Com'è andata?</em> («como foi?»). Esta última é muito comum para puxar conversa."
      },
      {
        h: "Già e ancora vão no meio",
        p: "Os advérbios <em>già</em> (já), <em>ancora</em> (ainda), <em>appena</em> (acabar de), <em>mai</em> (nunca) vão <b>entre o auxiliar e o particípio</b>: <em>ho <b>già</b> mangiato</em>, <em>non sono <b>mai</b> stata a Venezia</em>. Em português o advérbio vem antes do verbo («já comi», «nunca estive»); em italiano ele entra no meio da forma composta."
      },
      {
        tip: "Uma maneira natural de responder: não conte tudo. Um italiano responde curto (<em>Niente di che, sono stato a casa</em>) e só se estende se perguntarem."
      }
    ],
    grammar: {
      title: "Conectores e perguntas sobre o passado",
      table: {
        head: ["função", "expressão", "exemplo"],
        rows: [
          ["sequência", "prima… poi… alla fine", "Prima ho lavorato, poi sono uscito."],
          ["ao mesmo tempo", "mentre", "Mentre aspettavo, ho letto."],
          ["pergunta", "Che cosa hai fatto?", "O que você fez?"],
          ["pergunta", "Com'è andata?", "Como foi?"],
          ["já", "già (no meio)", "Ho già finito."],
          ["nunca", "non… mai (no meio)", "Non sono mai stato in Sicilia."]
        ]
      },
      examples: [
        { tr: "No sábado de manhã fiz as compras na feira." },
        { tr: "Depois fui à academia." },
        { tr: "À noite saímos com amigos." },
        { tr: "No final chegamos tarde em casa." },
        { tr: "Como foi a reunião? — Nada mal." },
        { tr: "Ainda não terminei." }
      ]
    },
    vocab: [
      "primeiro",
      "depois",
      "em seguida",
      "no final",
      "enquanto",
      "como foi?",
      "nada de especial",
      "um desastre",
      "foi divertido",
      "fazer as compras (de comida)",
      "fazer compras (roupa)",
      "descansar"
    ],
    exercises: [
      {
        q: "Onde vai «già» no passato prossimo?",
        opts: ["Antes de avere", "Entre avere e o particípio", "No final da frase"],
        why: "Ho già mangiato: o advérbio vai no meio da forma composta, não antes dela como em «já comi»."
      },
      { q: "Complete: «Non sono ___ stata a Venezia.» (nunca)" },
      { q: "Complete: «___ ho lavorato, poi sono uscito.» (primeiro)" },
      {
        q: "«Com'è andata?» pergunta:",
        opts: ["por onde você foi", "como algo correu", "como você está agora"]
      },
      {
        q: "Complete o relato.",
        tr: "No sábado fiz as compras, depois fui à academia, e à noite saímos com amigos."
      },
      { q: "«Ainda não terminei.»" },
      { tr: "No final chegamos tarde em casa." },
      {
        q: "Segunda-feira de manhã no trabalho.",
        setting: "A copa do escritório, ao lado da máquina de café.",
        lines: [
          { tr: "Ei! Como foi o fim de semana?" },
          { tr: "Diga que nada de especial, você ficou em casa.", answerTr: "Nada de especial, fiquei em casa." },
          { tr: "Eu fui para a montanha. Lindo!" },
          { tr: "Pergunte com quem ele foi.", answerTr: "Com quem você foi?" }
        ]
      },
      { tr: "Primeiro fiz as compras, depois descansei." },
      { tr: "Como foi? — Bem, foi divertido." }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Revisão",
    title: "Revisão do nível inteiro",
    objectives: [
      "juntar tudo do A1",
      "verificar se você está pronto para o A2",
      "encontrar suas próprias lacunas"
    ],
    theory: [
      {
        h: "O que você já deveria saber fazer",
        list: [
          "apresentar-se, dizer de onde você é, o que faz da vida e quantos anos tem",
          "pedir num bar e num restaurante, comprar, perguntar um preço",
          "falar do seu dia, das horas e dos seus hábitos",
          "pedir uma informação de caminho e entender a resposta",
          "descrever uma pessoa: físico e caráter",
          "contar brevemente o que você fez ontem e no fim de semana"
        ]
      },
      {
        h: "A gramática que precisa estar firme",
        p: "As três conjugações no presente, <em>essere</em>, <em>avere</em>, <em>fare</em>, <em>andare</em>, <em>venire</em>, <em>stare</em>, os verbos modais, os artigos definidos e indefinidos, o gênero e o número, os adjetivos, as preposições articuladas, os verbos reflexivos, <em>piacere</em>, <em>c'è / ci sono</em> e as bases do passato prossimo."
      },
      {
        h: "O que espera por você no A2",
        p: "O imperfetto e sua diferença em relação ao passato prossimo, o futuro simples, o condicional, os pronomes de objeto direto e indireto, o imperativo completo, <em>ci</em> e <em>ne</em> em mais contextos, e as situações de viagem, médico e hotel."
      },
      {
        tip: "Se você fizer menos de 70% nesta revisão, não siga em frente. O A2 se apoia diretamente nessas estruturas, e uma lacuna do A1 vira lá um muro."
      }
    ],
    vocab: [
      "revisar",
      "exercício",
      "erro",
      "regra",
      "nível",
      "melhorar",
      "estou pronto",
      "dou conta disso"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Artigos definidos:", items: [, , , , ] },
      {
        q: "Complete a apresentação.",
        tr: "Me chamo Kasia, sou polonesa e moro em Bolonha há dois anos. Sou professora."
      },
      { q: "«Mi ___ gli spaghetti.» (gosto de espaguete)" },
      { q: "«Vado ___ cinema.» (a + il)" },
      { q: "«Ieri ___ una pizza.» (comi)" },
      { q: "«Ieri ___ al cinema.» (fui, uma mulher)" },
      { tr: "Ontem à noite fomos a um restaurante com amigos." },
      { tr: "Acordei cedo e tomei café da manhã num bar." },
      { tr: "Me chamo Anna, sou polonesa e moro em Florença há um ano." }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Exame",
    title: "Exame final do A1",
    objectives: ["verificar se você está pronto para passar ao A2"],
    theory: [
      {
        p: "Doze perguntas sobre o nível inteiro. Passa quem acertar 70%. Uma nota abaixo disso significa voltar às unidades em que você erra, não a todas."
      }
    ],
    exercises: [
      {  },
      { q: "Você entra numa loja às seis da tarde:", opts: ["Buongiorno", "Buonasera", "Buonanotte"] },
      { q: "Artigos:", items: [, , , ] },
      { q: "«Non mi ___ il pesce crudo.»" },
      { q: "«Devo ___ presto domani.» (levantar-me, alzarsi)" },
      { q: "«___ le tre e mezza.»" },
      { q: "«Abito ___ Italia.»" },
      { q: "«___ un tavolo libero?»" },
      { q: "«È più simpatico ___ bello.»", opts: ["di", "che", "come"] },
      { q: "«Ieri ___ al cinema.» (fomos)" },
      {
        q: "Complete.",
        tr: "No sábado fiz as compras, depois fui à academia, e à noite saí com amigos."
      },
      { tr: "Boa noite, queria reservar uma mesa para dois às oito." }
    ]
  }
});
