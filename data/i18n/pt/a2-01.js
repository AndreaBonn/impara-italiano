/* ============================================================
   Texto na língua do aluno (pt, português do Brasil) para data/core/a2-01.js
   As chaves apontam para os id da camada neutra; os arrays se
   combinam por índice, então o comprimento deve coincidir com core.
   Quem confere é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:a2-u01": { title: "Antes e agora", grammarNote: "imperfetto · imperfetto versus passato prossimo" },
  "lesson:a2-u01-l1": {
    theme: "Lembranças",
    title: "Imperfetto: descrição e hábito",
    objectives: [
      "formar o imperfetto nas três conjugações",
      "descrever como as coisas eram",
      "falar de hábitos do passado"
    ],
    theory: [
      {
        h: "Um passado sem bordas",
        p: "O <strong>imperfetto</strong> não diz quando algo começou nem quando terminou. Ele pinta o fundo, os estados e os hábitos: <em>da bambino abitavo in campagna</em>. É o seu pretérito imperfeito, com a mesma função: «quando criança, eu morava no campo»."
      },
      {
        h: "A conjugação quase não tem exceções",
        p: "Raiz do infinitivo + <em>-vo, -vi, -va, -vamo, -vate, -vano</em>. Quatro verbos têm a raiz estranha: <em>essere</em> (ero, eri, era…), <em>fare</em> (facevo), <em>dire</em> (dicevo), <em>bere</em> (bevevo). Só isso: o imperfetto é o tempo mais regular do italiano, como o seu, em que só ser, ter, vir e pôr fogem da regra."
      },
      {
        h: "Três usos típicos",
        list: [
          "<b>descrição</b>: <em>Era una giornata fredda, pioveva.</em>",
          "<b>hábito</b>: <em>Ogni estate andavamo al mare.</em>",
          "<b>estado ou sentimento</b>: <em>Ero stanca, non avevo voglia di uscire.</em>"
        ]
      },
      {
        contrast: "Esta lição é um presente: a divisão entre imperfeito e perfeito que você já faz em português funciona quase ponto por ponto em italiano. A diferença está no outro lado do par: onde você diz «ontem comi» com o pretérito perfeito simples, o italiano usa o passato prossimo (<em>ieri ho mangiato</em>), um tempo composto. Não confunda com o seu «tenho comido», que indica algo repetido até agora. Já o imperfetto se comporta como o seu imperfeito, sem surpresas."
      }
    ],
    grammar: {
      title: "Imperfetto: conjugação",
      table: {
        head: ["pessoa", "parlare", "prendere", "dormire", "essere"],
        rows: [
          ["io", "parlavo", "prendevo", "dormivo", "ero"],
          ["tu", "parlavi", "prendevi", "dormivi", "eri"],
          ["lui / lei", "parlava", "prendeva", "dormiva", "era"],
          ["noi", "parlavamo", "prendevamo", "dormivamo", "eravamo"],
          ["voi", "parlavate", "prendevate", "dormivate", "eravate"],
          ["loro", "parlavano", "prendevano", "dormivano", "erano"]
        ]
      },
      examples: [
        { tr: "Quando criança, eu passava os verões na casa dos meus avós." },
        { tr: "Era um dia cinzento e fazia frio." },
        { tr: "Antes eu fumava, agora parei." },
        { tr: "Eu não sabia que você morava aqui." },
        { tr: "Enquanto estudava, eu ouvia rádio." },
        { tr: "Com o que o seu avô trabalhava?" }
      ]
    },
    vocab: [
      "quando criança",
      "naquela época",
      "antes, antigamente",
      "normalmente",
      "todo verão",
      "muitas vezes",
      "uma lembrança",
      "a infância",
      "os avós",
      "o campo",
      "parar de fazer algo",
      "eu sentia falta disso"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "«Ogni estate andavamo al mare» descreve:",
        opts: ["uma única viagem", "um hábito repetido no passado", "um plano para o futuro"]
      },
      { q: "Complete: «Da bambino ___ in campagna.» (morava, abitare)" },
      { q: "Complete: «___ una giornata fredda.» (era)" },
      {
        q: "Complete a lembrança.",
        tr: "Quando criança, eu passava os verões na casa dos meus avós. A casa era grande e toda noite jantávamos todos juntos."
      },
      { q: "«Antes eu fumava, agora parei.»" },
      { tr: "Quando criança, eu jogava futebol todas as tardes." },
      { tr: "Quando criança, eu morava numa casa perto do mar." }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Lembranças",
    title: "Imperfetto versus passato prossimo",
    objectives: [
      "escolher o passado certo",
      "combinar os dois numa mesma frase",
      "reconhecer os sinais que apontam para um ou para outro"
    ],
    theory: [
      {
        h: "Fundo versus acontecimento",
        p: "É a decisão gramatical mais importante do A2. O <strong>imperfetto</strong> pinta o fundo: o que estava acontecendo, como as coisas eram, o que se repetia. O <strong>passato prossimo</strong> traz o acontecimento: o que aconteceu, o que interrompeu o fundo, o que ocorreu uma vez."
      },
      {
        contrast: "O par é exatamente o seu: imperfeito para o fundo, perfeito para o fato. A única coisa a refazer é a forma do segundo: onde o português usa o pretérito perfeito simples («comi», «saí»), o italiano falado usa o passato prossimo, composto com avere ou essere. Ele lembra o seu «tenho comido», mas não tem a ideia de repetição: <em>ho mangiato</em> é simplesmente «comi»."
      },
      {
        h: "O par clássico",
        p: "<em><b>Mentre uscivo</b> di casa, <b>è squillato</b> il telefono.</em> Sair estava em andamento (imperfetto), o telefone tocou num ponto (passato prossimo). Troque os tempos e a frase fica absurda, exatamente como em «enquanto eu saía, o telefone tocou»."
      },
      {
        h: "Sinais no texto",
        list: [
          "imperfetto: <em>sempre, spesso, di solito, ogni giorno, mentre, da bambino</em>",
          "passato prossimo: <em>ieri, una volta, all'improvviso, l'anno scorso, per tre ore, due volte</em>"
        ]
      },
      {
        h: "Verbos que mudam de sentido",
        p: "Alguns verbos mudam de significado com o tempo: <em>sapevo</em> (sabia, um estado) versus <em>ho saputo</em> (fiquei sabendo, um momento); <em>conoscevo</em> (conhecia alguém) versus <em>ho conosciuto</em> (conheci, fui apresentado); <em>volevo</em> (queria) versus <em>ho voluto</em> (quis, insisti). O português faz o mesmo par com sabia/soube e conhecia/conheci: aqui a sua intuição vale."
      }
    ],
    grammar: {
      title: "Que tempo escolher",
      table: {
        head: ["imperfetto", "passato prossimo"],
        rows: [
          ["Pioveva e faceva freddo.", "Ha smesso di piovere alle sei."],
          ["Ogni sabato andavamo al mercato.", "Sabato scorso siamo andati al mercato."],
          ["Ero stanca.", "Mi sono stancata subito."],
          ["Mentre mangiavo…", "…è arrivato Marco."],
          ["Sapevo la verità.", "Ho saputo la verità ieri."],
          ["Conoscevo bene Roma.", "Ho conosciuto Marco a Roma."]
        ]
      },
      examples: [
        { tr: "Enquanto eu saía de casa, o telefone tocou." },
        { tr: "Ontem trabalhei três horas.", note: "limites → passato prossimo" },
        { tr: "Quando eu era jovem, trabalhava num bar." },
        { tr: "Conheci minha esposa num show." },
        { tr: "Eu não sabia que você estava aqui." },
        { tr: "De repente, a luz acabou." }
      ]
    },
    vocab: [
      "enquanto",
      "de repente",
      "de uma hora para outra",
      "o ano passado",
      "durante três horas",
      "tocar (um telefone)",
      "cair",
      "acontecer",
      "conhecer / conheci",
      "saber / fiquei sabendo",
      "o que aconteceu?",
      "por sorte"
    ],
    exercises: [
      {
        q: "«___ (uscire, io) di casa quando ___ (squillare) il telefono.» Quais tempos?",
        opts: ["os dois no imperfetto", "imperfetto + passato prossimo", "os dois no passato prossimo"],
        why: "O fundo (sair) no imperfetto, o acontecimento (a ligação) no passato prossimo."
      },
      { q: "Escreva a forma correta.", tr: "Enquanto eu comia, o Marco chegou." },
      { q: "Escreva a forma correta.", tr: "Ontem trabalhei três horas, depois saí com os amigos." },
      {
        q: "«Ho conosciuto Marco a Roma» significa:",
        opts: ["Eu conhecia o Marco em Roma", "Conheci o Marco em Roma", "Conheço o Marco de Roma"]
      },
      {
        q: "«Ieri ho lavorato per tre ore.» Por que não o imperfetto?",
        opts: ["Porque é um hábito", "Porque a duração tem limites claros", "Porque é uma descrição"]
      },
      {
        q: "Quais expressões costumam vir com o imperfetto?",
        opts: ["ogni giorno", "ieri", "di solito", "all'improvviso", "da bambino"]
      },
      { q: "«Eu não sabia que você morava aqui.»" },
      {
        q: "Complete a história.",
        tr: "Era um dia frio. Chovia e eu não tinha guarda-chuva. De repente, o ônibus chegou."
      },
      { tr: "Enquanto eu voltava para casa a pé, encontrei um velho amigo." },
      { tr: "Quando criança, eu ia à praia todo verão, mas no ano passado fui para a montanha." }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Lembranças",
    title: "Descrever uma mudança",
    objectives: [
      "comparar o passado com o presente",
      "usar expressões como non c'era più, adesso invece",
      "dizer como algo mudou"
    ],
    theory: [
      {
        h: "O contraste prima / adesso",
        p: "Colocar dois tempos lado a lado é o jeito de mostrar uma mudança: <em><b>Prima</b> qui c'era un cinema, <b>adesso</b> c'è un supermercato.</em> A estrutura é simples, mas exige alternar com atenção entre o imperfetto (naquela época) e o presente (hoje)."
      },
      {
        h: "C'era e c'erano",
        p: "O imperfetto de <em>c'è / ci sono</em> é <strong>c'era / c'erano</strong>: «havia», «tinha». Repare que o italiano distingue singular e plural onde o seu «havia» (ou «tinha») serve para os dois: <em>c'erano meno macchine</em>, não «c'era meno macchine»."
      },
      {
        h: "Expressões de contraste",
        list: [
          "<em>prima… adesso / oggi</em> — antes… agora",
          "<em>invece</em> — em compensação, já",
          "<em>non… più</em> — não… mais: <em>non c'è più il mercato</em>",
          "<em>è cambiato molto</em> — mudou muito"
        ]
      },
      {
        tip: "<em>Non… più</em> abraça o verbo como <em>non… mai</em>: <em>non abito <b>più</b> qui</em>. No passato prossimo, <em>più</em> fica entre o auxiliar e o particípio: <em>non ho più visto</em>."
      }
    ],
    grammar: {
      title: "Passado versus presente",
      table: {
        head: ["naquela época (imperfetto)", "hoje (presente)"],
        rows: [
          ["C'era un cinema.", "Adesso c'è un supermercato."],
          ["C'erano pochi turisti.", "Oggi ce ne sono troppi."],
          ["La gente si conosceva.", "Adesso nessuno saluta."],
          ["Non esisteva internet.", "Oggi tutti sono online."],
          ["Si viveva più lentamente.", "Adesso si corre sempre."]
        ]
      },
      examples: [
        { tr: "Antes aqui havia uma feira, agora é um estacionamento." },
        { tr: "A cidade mudou muito." },
        { tr: "As lojas de sempre não existem mais." },
        { tr: "O bairro, em compensação, ficou mais animado." },
        { tr: "Quando eu era pequeno, as pessoas brincavam na rua." },
        { tr: "Agora tudo é diferente." }
      ]
    },
    vocab: [
      "havia (sing. / pl.)",
      "mudar",
      "mudou muito",
      "em compensação",
      "não… mais",
      "naquela época",
      "bairro",
      "trânsito",
      "lotado",
      "tranquilo",
      "tornar-se, virar",
      "melhor / pior"
    ],
    exercises: [
      { q: "O imperfetto de «c'è»: ___" },
      { q: "O imperfetto de «ci sono»: ___" },
      { q: "Complete: «Non abito ___ qui.» (não moro mais aqui)" },
      {
        q: "Onde fica «più» no passato prossimo?",
        opts: ["Antes de non", "Entre o auxiliar e o particípio", "No final"],
        why: "Non ho più visto, igual a già e mai."
      },
      {
        q: "Complete a descrição da mudança.",
        tr: "Antes aqui havia um cinema, agora há um supermercado. O bairro mudou muito."
      },
      { q: "«As lojas de sempre não existem mais.»" },
      { tr: "Quando eu era pequeno, as pessoas brincavam na rua." },
      { q: "Relacione.", pairs: ["em compensação", "lotado", "tornar-se", "trânsito"] },
      { tr: "Vinte anos atrás havia menos carros e mais lojas de bairro." },
      { tr: "Minha cidade mudou muito nos últimos dez anos." }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Lembranças",
    title: "Falar do passado",
    objectives: [
      "manter uma conversa sobre lembranças",
      "reagir ao relato de outra pessoa",
      "usar o trapassato prossimo em casos simples"
    ],
    theory: [
      {
        h: "Reagir é obrigatório",
        p: "A conversa italiana não tolera o ouvinte mudo. Enquanto alguém conta algo, soltam-se <em>davvero?</em>, <em>ma dai!</em>, <em>e poi?</em>, <em>che bello!</em>, <em>mamma mia</em>. Ficar calado é lido como falta de interesse, não como educação. Aqui a sua cultura de conversa ajuda: o brasileiro faz o mesmo com «sério?», «não acredito!», «e aí?»."
      },
      {
        h: "Trapassato prossimo: o passado antes do passado",
        p: "Imperfetto de <em>avere/essere</em> + particípio: <em>avevo mangiato</em>, <em>ero uscito</em>. É o seu mais-que-perfeito composto («tinha comido»), construído do mesmo jeito: usa-se quando um fato vem antes de outro: <em>Quando sono arrivato, il treno <b>era già partito</b>.</em>"
      },
      {
        h: "Quando ele é necessário",
        p: "Sem ele a ordem dos fatos fica confusa. <em>Quando sono arrivato, il treno è partito</em> significa que o trem partiu <b>depois</b> que eu cheguei. <em>Era già partito</em> significa que partiu <b>antes</b>."
      },
      {
        tip: "<em>Ti ricordi quando…?</em> é a abertura padrão de uma conversa de lembranças. A resposta: <em>Certo che me lo ricordo!</em>"
      }
    ],
    grammar: {
      title: "Trapassato prossimo e reações",
      table: {
        head: ["construção", "exemplo", "em português"],
        rows: [
          ["avevo + participio", "Avevo già mangiato.", "Eu já tinha comido."],
          ["ero + participio", "Ero appena uscito.", "Eu tinha acabado de sair."],
          ["reação", "Davvero? / Ma dai!", "Sério? / Não acredito!"],
          ["reação", "E poi? Che è successo?", "E aí? O que aconteceu?"],
          ["reação", "Mamma mia! / Che bello!", "Nossa! / Que legal!"],
          ["pergunta", "Ti ricordi quando…?", "Você se lembra de quando…?"]
        ]
      },
      examples: [
        { tr: "Quando cheguei, a festa já tinha terminado." },
        { tr: "Não saí porque tinha prometido trabalhar um pouco." },
        { tr: "Você se lembra de quando fomos à Sicília?" },
        { tr: "Claro que me lembro!" },
        { tr: "Não acredito, fala sério!" },
        { tr: "E o que aconteceu depois?" }
      ]
    },
    vocab: [
      "você se lembra?",
      "eu me lembro",
      "esquecer",
      "sério?",
      "não acredito!",
      "que legal!",
      "nossa!",
      "e aí?",
      "o que aconteceu?",
      "eu já tinha…",
      "agora há pouco",
      "um momento constrangedor"
    ],
    exercises: [
      {
        q: "«Quando sono arrivato, il treno era già partito.» O que aconteceu primeiro?",
        opts: ["A minha chegada", "A partida do trem", "Os dois ao mesmo tempo"]
      },
      { q: "Complete: «Quando sono arrivata, la festa ___ già finita.»" },
      { q: "Complete: «Non avevo fame perché ___ già mangiato.»" },
      { q: "Relacione as reações.", pairs: ["não acredito!", "sério?", "e aí?", "que legal!"] },
      { q: "Complete.", tr: "Quando saímos já tinha parado de chover, mas a rua continuava molhada." },
      { q: "«Você se lembra de quando fomos à Sicília?»" },
      {
        q: "Uma amiga conta sobre as férias dela.",
        setting: "Um café depois do trabalho, em setembro.",
        lines: [
          { tr: "Em agosto fui para a Apúlia com a minha família." },
          { tr: "Reaja com interesse e pergunte como foi.", answerTr: "Que legal! Como foi?" },
          { tr: "Ótimo, mas no primeiro dia perdemos as malas." },
          { tr: "Reaja com empatia e pergunte o que aconteceu depois.", answerTr: "Nossa! E aí?" },
          { tr: "Encontraram dois dias depois. Por sorte!" }
        ]
      },
      { tr: "Não saí porque tinha prometido trabalhar um pouco." },
      { tr: "Quando voltei, minha irmã já tinha ido embora." },
      { tr: "Você se lembra de quando estudávamos na mesma turma?" }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Teste",
    title: "Teste da unidade 1",
    objectives: ["verificar o imperfetto, o contraste com o passato prossimo e o trapassato"],
    theory: [{ p: "Dez perguntas. Aprovação com 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "Escreva o tempo correto.", tr: "Enquanto eu saía, o telefone tocou." },
      { q: "Escreva o tempo correto.", tr: "Ontem trabalhei quatro horas." },
      { q: "«Ho conosciuto Anna» significa:", opts: ["Eu conhecia a Anna", "Conheci a Anna", "Conheço a Anna"] },
      { q: "«Prima qui ___ un cinema.» (havia)" },
      { q: "«Non abito ___ qui.» (não… mais)" },
      { q: "«Quando sono arrivato, il treno ___ già partito.»" },
      { tr: "Quando criança, eu passava todos os verões na praia com os meus avós." },
      { tr: "Enquanto eu voltava para casa a pé, encontrei um velho amigo." }
    ]
  },
  "unit:a2-u02": { title: "Viajar", grammarNote: "futuro semplice · reservas · estação e hotel" },
  "lesson:a2-u02-l1": {
    theme: "Viagens",
    title: "Trens e passagens",
    objectives: [
      "comprar uma passagem e entender os avisos da estação",
      "lidar com uma mudança de plataforma e um atraso",
      "conhecer a diferença entre os tipos de trem"
    ],
    theory: [
      {
        h: "Tipos de trem",
        p: "O <strong>regionale</strong> para em todo lugar, é barato e não tem assento marcado. O <strong>Intercity</strong> é o degrau intermediário. O <strong>Frecciarossa / Italo</strong> são os rápidos, com reserva obrigatória: a passagem vale para aquele trem específico naquele horário específico."
      },
      {
        h: "Validar a passagem",
        p: "Uma passagem de <em>regionale</em> comprada sem horário definido precisa ser <strong>validada</strong> (<em>convalidare</em>) na máquina amarela ou verde antes de chegar à plataforma. Não validar dá multa, e os fiscais não aceitam explicações. As passagens compradas pelo aplicativo já vêm ativas. Se você está acostumado ao metrô, onde o controle é feito na catraca, esse passo é fácil de esquecer."
      },
      {
        h: "Avisos que é preciso entender",
        list: [
          "<em>Il treno viaggia con un ritardo di venti minuti</em> — o trem está com vinte minutos de atraso",
          "<em>Cambio binario: il treno partirà dal binario 8</em> — mudança de plataforma",
          "<em>È in arrivo al binario 3</em> — está chegando na plataforma 3",
          "<em>Il treno è soppresso</em> — o trem foi cancelado"
        ]
      },
      {
        tip: "<em>Binario</em> significa ao mesmo tempo a plataforma e a linha. O número só aparece no painel dez ou quinze minutos antes da partida, o que desorienta quem está acostumado a plataformas fixas."
      }
    ],
    grammar: {
      title: "Frases na estação",
      table: {
        head: ["situação", "em italiano", "em português"],
        rows: [
          ["passagem", "Un biglietto per Firenze, andata e ritorno.", "Uma passagem de ida e volta para Florença."],
          ["só ida", "Solo andata.", "Só ida."],
          ["plataforma", "Da quale binario parte?", "De qual plataforma sai?"],
          [
            "atraso",
            "Il treno è in ritardo di venti minuti.",
            "O trem está com vinte minutos de atraso."
          ],
          ["baldeação", "Devo cambiare treno?", "Preciso trocar de trem?"],
          ["validar", "Devo convalidare il biglietto?", "Preciso validar a passagem?"]
        ]
      },
      examples: [
        { tr: "Uma passagem para Nápoles para amanhã de manhã, por favor." },
        { tr: "Primeira ou segunda classe?" },
        { tr: "É direto ou preciso fazer baldeação?" },
        { tr: "O trem das 14h35 foi cancelado." },
        { tr: "Este lugar está ocupado?" },
        { tr: "Com licença, este é o vagão 5?" }
      ]
    },
    vocab: [
      "passagem",
      "ida e volta",
      "só ida",
      "plataforma, linha",
      "vagão",
      "assento, lugar",
      "trocar de trem",
      "baldeação",
      "atraso",
      "cancelado",
      "validar uma passagem",
      "fiscal (do trem)"
    ],
    exercises: [
      {
        q: "O que significa «il treno è soppresso»?",
        opts: ["O trem está atrasado", "O trem foi cancelado", "O trem está lotado"]
      },
      {
        q: "Que passagem é preciso validar antes de embarcar?",
        opts: ["Um Frecciarossa com reserva", "Um regionale sem horário definido", "Todas as passagens"]
      },
      { q: "Complete: «Da quale ___ parte il treno?»" },
      { q: "Complete: «Un biglietto ___ e ritorno.»" },
      { q: "Relacione.", pairs: ["vagão", "baldeação", "atraso", "validar uma passagem"] },
      { q: "«Preciso trocar de trem?»" },
      {
        q: "Você está comprando uma passagem no guichê.",
        setting: "A bilheteria, com fila atrás de você.",
        lines: [
          { tr: "Bom dia, o que deseja?" },
          {
            tr: "Peça uma passagem para Florença para hoje à tarde.",
            answerTr: "Uma passagem para Florença para hoje à tarde."
          },
          { tr: "Regional ou Frecciarossa?" },
          { tr: "Pergunte quanto tempo a mais o regional leva.", answerTr: "Quanto tempo a mais leva o regional?" },
          { tr: "Uma hora e meia a mais. O Freccia custa quarenta e dois euros." },
          {
            tr: "Escolha o Frecciarossa e pergunte a plataforma.",
            answerTr: "Vou de Frecciarossa. De qual plataforma sai?"
          }
        ]
      },
      {
        q: "Complete o aviso da estação.",
        tr: "O trem regional para Bolonha está com vinte minutos de atraso. Mudança de plataforma: ele vai partir da plataforma 8."
      },
      { tr: "O trem para Roma sai da plataforma doze, com dez minutos de atraso." },
      { tr: "Com licença, preciso validar esta passagem?" }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Viagens",
    title: "Futuro semplice",
    objectives: [
      "formar o futuro simples",
      "conhecer as raízes irregulares",
      "usar o futuro para expressar uma suposição"
    ],
    theory: [
      {
        h: "Como se forma",
        p: "Você pega o infinitivo, tira o <em>-e</em> final e acrescenta <em>-ò, -ai, -à, -emo, -ete, -anno</em>. Os verbos em <b>-are</b> também trocam esse <em>a</em> por um <em>e</em>: <em>parlare → parler-ò</em>. É o seu futuro do presente: infinitivo mais terminação, sem auxiliar (falar-ei)."
      },
      {
        h: "As raízes irregulares: é preciso decorar",
        p: "<em>essere → sar-</em>, <em>avere → avr-</em>, <em>andare → andr-</em>, <em>venire → verr-</em>, <em>volere → vorr-</em>, <em>potere → potr-</em>, <em>dovere → dovr-</em>, <em>sapere → sapr-</em>, <em>vedere → vedr-</em>, <em>bere → berr-</em>, <em>rimanere → rimarr-</em>, <em>fare → far-</em>. Aqui o português não ajuda muito: o seu futuro só tem três irregulares (farei, direi, trarei), e você diz «poderei», «saberei», «virei». A dica é que a maioria só perde a vogal do infinitivo (<em>avere → avr-</em>, <em>potere → potr-</em>) e que <em>far-</em> é igual ao seu «farei»."
      },
      {
        h: "O futuro não fala só do futuro",
        p: "Um uso muito frequente é a <b>suposição sobre o presente</b>: <em>Che ore sono? — <b>Saranno</b> le tre.</em> Ou <em>Dov'è Marco? — Sarà a casa.</em> O português também conhece esse uso («serão umas três horas», «estará em casa»), mas no Brasil ele soa formal: na fala você diria «devem ser umas três», «deve estar em casa». Em italiano, ao contrário, é totalmente coloquial."
      },
      {
        trap: "Para um futuro próximo e certo, os italianos usam mais o <b>presente</b>: <em>domani parto alle sette</em>. Ali o futuro soa rígido, ou menos certo. Guarde-o para previsões e planos distantes."
      }
    ],
    grammar: {
      title: "Futuro semplice",
      table: {
        head: ["pessoa", "parlare", "prendere", "partire", "essere"],
        rows: [
          ["io", "parlerò", "prenderò", "partirò", "sarò"],
          ["tu", "parlerai", "prenderai", "partirai", "sarai"],
          ["lui / lei", "parlerà", "prenderà", "partirà", "sarà"],
          ["noi", "parleremo", "prenderemo", "partiremo", "saremo"],
          ["voi", "parlerete", "prenderete", "partirete", "sarete"],
          ["loro", "parleranno", "prenderanno", "partiranno", "saranno"]
        ]
      },
      examples: [
        { tr: "No ano que vem vou morar na Itália." },
        { tr: "Eu te ligo assim que chegar." },
        { tr: "Amanhã a gente sai às sete.", note: "futuro próximo: presente" },
        { tr: "Que horas são? — Devem ser umas três.", note: "uma suposição" },
        { tr: "Onde será que está a minha passagem?" },
        { tr: "Não vai dar tempo para tudo." }
      ]
    },
    vocab: [
      "amanhã",
      "depois de amanhã",
      "a semana que vem",
      "daqui a três dias",
      "assim que",
      "talvez",
      "com certeza",
      "provavelmente",
      "um plano",
      "mudar-se",
      "reservar com antecedência",
      "vamos ver"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "O que acontece com os verbos em -are no futuro?",
        opts: ["Nada", "O a vira e antes da terminação", "A consoante dobra"]
      },
      { q: "O futuro de «avere», forma io: ___" },
      { q: "O futuro de «venire», forma loro: ___" },
      {
        q: "«Saranno le tre» significa:",
        opts: ["Serão três horas (no futuro)", "Devem ser três horas (suposição)", "Eram três horas"]
      },
      { q: "Complete os planos.", tr: "No ano que vem vou me mudar para Bolonha e vou procurar trabalho lá." },
      { tr: "Eu te ligo assim que chegar à estação." },
      { tr: "No ano que vem vou morar na Itália." }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "Viagens",
    title: "Hotéis e hospedagem",
    objectives: ["fazer o check-in num hotel", "avisar sobre um problema no quarto", "perguntar sobre os serviços e o check-out"],
    theory: [
      {
        h: "O check-in à italiana",
        p: "Na recepção vão pedir seu documento: <em>Un documento, per favore</em>. A lei obriga a registrar os hóspedes na polícia, então o passaporte ou a carteira de identidade é obrigatório, inclusive nos aluguéis por temporada. No Brasil os hotéis também pedem documento no check-in, então o procedimento não é novidade."
      },
      {
        h: "Tassa di soggiorno",
        p: "Quase todas as cidades italianas cobram uma <strong>taxa turística</strong> (de 1 a 7 euros por pessoa e por noite), que se paga no local e normalmente em dinheiro, seja qual for o valor pago online. Não é golpe: é um imposto municipal, e as plataformas de reserva raramente o mencionam."
      },
      {
        h: "Avisar sobre um problema",
        p: "A construção é simples: <em>non funziona</em> + a coisa. <em>L'aria condizionata non funziona.</em> E <em>manca</em> («falta»): <em>Mancano gli asciugamani.</em> Atenção a este último: como no seu «faltam as toalhas», o sujeito é a coisa, então o verbo vai para o plural."
      },
      {
        tip: "<em>Camera doppia</em> é um quarto para duas pessoas, com uma cama de casal (<em>matrimoniale</em>) ou com duas de solteiro (<em>due letti singoli</em>). Vale a pena especificar ao reservar, porque o padrão varia."
      }
    ],
    grammar: {
      title: "Frases de hotel",
      table: {
        head: ["situação", "em italiano", "em português"],
        rows: [
          ["check-in", "Ho una prenotazione a nome Smith.", "Tenho uma reserva em nome de Smith."],
          ["tipo de quarto", "Una camera doppia con bagno privato.", "Um quarto duplo com banheiro privativo."],
          ["café da manhã", "La colazione è inclusa?", "O café da manhã está incluído?"],
          ["um problema", "L'aria condizionata non funziona.", "O ar-condicionado não funciona."],
          ["algo que falta", "Mancano gli asciugamani.", "Faltam as toalhas."],
          ["check-out", "A che ora è il check-out?", "A que horas é o check-out?"]
        ]
      },
      examples: [
        { tr: "Boa noite, tenho uma reserva para três noites." },
        { tr: "Seu documento, por favor." },
        { tr: "A taxa turística é de dois euros por pessoa por noite." },
        { tr: "Tem wi-fi no quarto?" },
        { tr: "Posso deixar as malas depois do check-out?" },
        { tr: "O quarto fica no terceiro andar, o elevador é ali." }
      ]
    },
    vocab: [
      "reserva",
      "quarto individual / duplo",
      "com cama de casal",
      "chave / cartão",
      "andar",
      "elevador",
      "toalha",
      "lençol",
      "taxa turística",
      "não funciona",
      "falta",
      "check-out"
    ],
    exercises: [
      {
        q: "O que é a «tassa di soggiorno»?",
        opts: ["Um depósito caução", "Uma taxa turística paga no local", "Uma taxa extra de limpeza"]
      },
      { q: "Complete: «Ho una ___ a nome Smith.»" },
      { q: "Complete: «L'aria condizionata non ___.»" },
      { q: "Complete: «___ gli asciugamani.» (faltam as toalhas)" },
      { q: "Relacione.", pairs: ["elevador", "lençol", "andar", "chave"] },
      { q: "«O café da manhã está incluído?»" },
      {
        q: "Você está fazendo o check-in num hotel.",
        setting: "A recepção, à noite, depois de uma viagem longa.",
        lines: [
          { tr: "Boa noite! O senhor tem reserva?" },
          {
            tr: "Confirme, diga seu nome e quantas noites vai ficar.",
            answerTr: "Sim, em nome de Smith, para três noites."
          },
          { tr: "Perfeito. Seu documento, por favor. A taxa turística é de dois euros por noite." },
          { tr: "Pergunte se o café da manhã está incluído.", answerTr: "O café da manhã está incluído?" },
          { tr: "Sim, das sete às dez, no primeiro andar." }
        ]
      },
      {
        q: "Avise sobre um problema.",
        tr: "Olá, estou ligando do quarto 204: o wi-fi não funciona e faltam toalhas limpas."
      },
      { tr: "O quarto fica no terceiro andar, o café da manhã é das sete às dez." },
      { tr: "Posso deixar as malas depois do check-out?" }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Viagens",
    title: "Futuro anteriore e planejamento",
    objectives: [
      "formar o futuro anteriore",
      "ordenar duas ações futuras",
      "expressar uma suposição sobre o passado"
    ],
    theory: [
      {
        h: "O futuro anterior ao futuro",
        p: "<strong>Futuro anteriore</strong> = o futuro de <em>avere/essere</em> + particípio: <em>avrò finito</em>, <em>sarò arrivato</em>. Descreve uma ação terminada <b>antes</b> de outra futura: <em>Quando <b>avrò finito</b> il lavoro, ti chiamerò.</em> Corresponde ao seu futuro composto («terei terminado»), mas repare: onde o português põe o subjuntivo («quando eu tiver terminado»), o italiano usa o indicativo."
      },
      {
        h: "Na fala ele encurta",
        p: "Em vez de <em>quando avrò finito, ti chiamerò</em>, os italianos dizem <em>quando finisco, ti chiamo</em>. O futuro anteriore fica no registro cuidadoso e na escrita, mas é preciso saber entendê-lo."
      },
      {
        h: "Uma suposição sobre o passado",
        p: "Este uso está vivo e é frequente: <em>Non risponde… <b>avrà perso</b> il treno.</em> («deve ter perdido o trem»). É o gêmeo no passado da suposição com o futuro simples. O português conhece o «terá perdido», mas no Brasil se diz quase sempre «deve ter perdido»; em italiano, <em>avrà perso</em> é a forma normal da fala."
      },
      {
        tip: "Sinais que costumam vir antes do futuro anteriore: <em>quando, appena, dopo che, una volta che</em>."
      }
    ],
    grammar: {
      title: "Futuro anteriore",
      table: {
        head: ["pessoa", "avere + particípio", "essere + particípio"],
        rows: [
          ["io", "avrò finito", "sarò partito/a"],
          ["tu", "avrai finito", "sarai partito/a"],
          ["lui / lei", "avrà finito", "sarà partito/a"],
          ["noi", "avremo finito", "saremo partiti/e"],
          ["voi", "avrete finito", "sarete partiti/e"],
          ["loro", "avranno finito", "saranno partiti/e"]
        ]
      },
      examples: [
        { tr: "Quando eu tiver terminado, te ligo." },
        { tr: "Assim que a gente chegar, te escrevemos." },
        { tr: "Não atende, deve ter perdido o trem." },
        { tr: "Onde será que foi parar a minha passagem?" },
        { tr: "Até sexta-feira teremos reservado tudo." },
        { tr: "Deve ter sido um mal-entendido." }
      ]
    },
    vocab: [
      "assim que",
      "uma vez que",
      "até (um prazo)",
      "mal-entendido",
      "um imprevisto",
      "roteiro",
      "partida / chegada",
      "bagagem de mão",
      "embarque",
      "voo",
      "escala",
      "cancelar"
    ],
    exercises: [
      { q: "O futuro anteriore de «finire», forma io: ___" },
      { q: "O futuro anteriore de «partire», forma noi (grupo misto): ___" },
      {
        q: "«Avrà perso il treno» costuma significar:",
        opts: ["Vai perder o trem", "Deve ter perdido o trem", "Com certeza perdeu o trem"]
      },
      { q: "Complete.", tr: "Quando a gente chegar ao hotel, te escrevemos." },
      { q: "«Quando eu tiver terminado de trabalhar, te ligo.»" },
      {
        q: "Qual frase é mais coloquial?",
        opts: ["Quando avrò finito, ti chiamerò.", "Quando finisco, ti chiamo.", "As duas igualmente."]
      },
      { q: "Relacione.", pairs: ["embarque", "voo", "até (prazo)", "cancelar"] },
      { tr: "Até sexta-feira teremos reservado tudo." },
      { tr: "Assim que chegarmos ao aeroporto, te mandamos uma mensagem." },
      { tr: "Ele não atende o telefone, deve ter perdido a conexão." }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Teste",
    title: "Teste da unidade 2",
    objectives: ["verificar os futuros e o vocabulário de estação e hotel"],
    theory: [{ p: "Dez perguntas. Aprovação com 70 %." }],
    exercises: [
      {  },
      { q: "O futuro de «andare», forma io: ___" },
      { q: "O futuro de «potere», forma noi: ___" },
      { q: "«Il treno è soppresso»:", opts: ["atrasado", "cancelado", "lotado"] },
      { q: "«Da quale ___ parte?»" },
      { q: "«L'aria condizionata non ___.»" },
      { q: "O futuro anteriore de «finire», io: ___" },
      { q: "«Tenho uma reserva para três noites.»" },
      { tr: "O voo para Varsóvia sai do portão B12, com vinte minutos de atraso." },
      { tr: "Uma passagem só de ida para Bolonha, por favor." }
    ]
  },
  "unit:a2-u03": {
    title: "Os pronomes oblíquos",
    grammarNote: "pronomes diretos e indiretos · concordância do particípio"
  },
  "lesson:a2-u03-l1": {
    theme: "Gramática",
    title: "Os pronomes de objeto direto",
    objectives: [
      "substituir um substantivo por um pronome",
      "colocar o pronome no lugar certo",
      "parar de repetir a mesma palavra"
    ],
    theory: [
      {
        h: "Para que servem",
        p: "Repetir o substantivo soa pesado em italiano. <em>Compri il giornale? — Sì, <b>lo</b> compro.</em> O pronome ocupa o lugar do que já se sabe. Sem ele você parece um exercício de livro, não uma conversa."
      },
      {
        h: "As formas",
        p: "<em>mi</em> (me), <em>ti</em> (te), <strong>lo</strong> (o, masculino), <strong>la</strong> (a, feminino), <em>ci</em> (nos), <em>vi</em> (vos, vocês), <strong>li</strong> (os), <strong>le</strong> (as)."
      },
      {
        contrast: "O sistema corresponde ao seu o/a/os/as, forma por forma: lo/la/li/le. Mas dois hábitos do português falado no Brasil não funcionam em italiano. Primeiro, o objeto não pode virar pronome sujeito nem sumir: o «vi ele» ou o «comprei» sem objeto viram <em>l'ho visto</em>, <em>l'ho comprato</em>. Segundo, a posição é fixa: antes do verbo conjugado (<em>lo vedo</em> = «eu o vejo») ou colado ao infinitivo (<em>voglio vederlo</em> = «quero vê-lo», e também <em>lo voglio vedere</em>)."
      },
      {
        trap: "<b>Lo</b> e <b>la</b> perdem a vogal antes de vogal: <em>l'ho visto</em>, <em>l'ho vista</em>. <b>Li</b> e <b>le</b> nunca perdem."
      }
    ],
    grammar: {
      title: "Pronomes de objeto direto",
      table: {
        head: ["pronome", "substitui", "exemplo"],
        rows: [
          ["mi", "me", "Mi chiami stasera?"],
          ["ti", "te", "Ti vedo domani."],
          ["lo", "uma coisa/pessoa masculina", "Il libro? Lo leggo stasera."],
          ["la", "uma coisa/pessoa feminina", "La pizza? La prendo io."],
          ["ci", "nos", "Ci aspetti?"],
          ["vi", "vos, vocês", "Vi chiamo dopo."],
          ["li", "os (m)", "I biglietti? Li ho comprati."],
          ["le", "as (f)", "Le chiavi? Le ho perse."]
        ]
      },
      examples: [
        { tr: "Você conhece o Marco? — Sim, conheço bem." },
        { tr: "Você vai pegar o carro? — Não, não vou pegar." },
        { tr: "Onde estão as chaves? Não acho." },
        { tr: "Quero vê-lo agora mesmo." },
        { tr: "Você me espera cinco minutos?" },
        { tr: "A gente se vê amanhã." }
      ]
    },
    vocab: [
      "conhecer (uma pessoa, um lugar)",
      "saber (um dado), saber fazer",
      "encontrar, achar",
      "perder",
      "esperar (alguém)",
      "chamar, ligar para",
      "convidar",
      "acompanhar alguém",
      "jornal",
      "chaves",
      "agora mesmo",
      "mais tarde"
    ],
    exercises: [
      {
        q: "«Conosci Anna?»: como você responde que sim, com pronome?",
        opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."]
      },
      { q: "Complete: «I biglietti? ___ ho comprati ieri.»" },
      { q: "Complete: «La pizza? ___ prendo io.»" },
      {
        q: "Quais frases estão corretas?",
        opts: ["Lo voglio vedere.", "Voglio vederlo.", "As duas formas estão corretas."]
      },
      {
        q: "Substitua as repetições por pronomes.",
        tr: "— Você compra o jornal? — Sim, compro. — E as revistas? — Não, essas não compro."
      },
      { q: "«Não o conheço.»" },
      {
        q: "Quais pronomes diretos podem perder a vogal antes de vogal?",
        opts: ["lo", "la", "li", "le"]
      },
      { tr: "Você me espera cinco minutos?" },
      { tr: "Não acho as chaves, talvez eu tenha deixado no escritório." },
      { tr: "Você conhece aquele restaurante? — Sim, conheço bem." }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Gramática",
    title: "A concordância do particípio com o pronome",
    objectives: [
      "concordar o particípio com o pronome direto",
      "distinguir os casos em que a concordância é obrigatória",
      "escrever certo l'ho visto / l'ho vista"
    ],
    theory: [
      {
        h: "A regra numa frase",
        p: "Nos tempos compostos com <em>avere</em>, o particípio <b>concorda com o pronome de objeto direto</b> que vem antes do verbo. <em>Ho visto Anna</em> → <em><b>L'ho vista</b></em>. Sem pronome, o particípio não muda."
      },
      {
        contrast: "Aqui o português não ajuda: você diz «eu a tinha visto», nunca «eu a tinha vista». Com o auxiliar ter, o particípio português é invariável; o italiano conserva a concordância com o objeto direto, então é uma regra que precisa ser instalada do zero, sem intuição que a sustente."
      },
      {
        h: "Quatro formas",
        list: [
          "<em>lo</em> → <em>l'ho vist<b>o</b></em>",
          "<em>la</em> → <em>l'ho vist<b>a</b></em>",
          "<em>li</em> → <em>li ho vist<b>i</b></em>",
          "<em>le</em> → <em>le ho vist<b>e</b></em>"
        ]
      },
      {
        trap: "A elisão <em>l'</em> esconde o gênero, então a <b>terminação do particípio</b> é a única coisa que diz de quem se está falando. <em>L'ho visto</em> (ele) e <em>l'ho vista</em> (ela) diferem por uma letra e significam coisas diferentes."
      },
      {
        h: "Onde NÃO há concordância",
        p: "Com um pronome <b>indireto</b>, o particípio não muda: <em>Le ho parlato</em> (falei com ela), nunca «parlata». É o erro mais comum desta fase: é preciso saber se o pronome é direto ou indireto."
      }
    ],
    grammar: {
      title: "Concordância do particípio",
      table: {
        head: ["frase completa", "com pronome", "nota"],
        rows: [
          ["Ho visto Marco.", "L'ho visto.", "lo → -o"],
          ["Ho visto Anna.", "L'ho vista.", "la → -a"],
          ["Ho comprato i libri.", "Li ho comprati.", "li → -i"],
          ["Ho perso le chiavi.", "Le ho perse.", "le → -e"],
          ["Ho parlato a Anna.", "Le ho parlato.", "indireto → sem concordância"],
          ["Ho mangiato la pizza.", "L'ho mangiata.", "as coisas também contam"]
        ]
      },
      examples: [
        { tr: "Você viu a Giulia? — Sim, vi ontem." },
        { tr: "Os documentos? Já mandei." },
        { tr: "As fotos? Ainda não olhei." },
        { tr: "Mandei um e-mail para ela.", note: "indireto: sem concordância" },
        { tr: "Eu a conheci em Roma." },
        { tr: "Convidaram a gente para a festa." }
      ]
    },
    vocab: [
      "enviar, mandar",
      "olhar",
      "receber",
      "devolver",
      "emprestar",
      "documento",
      "foto",
      "mensagem",
      "e-mail",
      "ainda",
      "já",
      "por acaso"
    ],
    exercises: [
      {
        q: "«Hai visto Anna?»: a resposta correta é:",
        opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."]
      },
      {
        q: "Complete: «I libri? ___ ho comprat___.» Escreva as duas partes separadas por um espaço",
        hint: "pronome + terminação do particípio",
        why: "Li ho comprati: o pronome li impõe a terminação -i."
      },
      { q: "Complete a terminação: «Le chiavi? Le ho pers___.»" },
      {
        q: "«Le ho parlato»: por que não «parlata»?",
        opts: ["É um erro", "Porque «le» aqui é indireto (com ela, a ela)", "Porque parlare é irregular"]
      },
      { q: "Complete as terminações.", tr: "O e-mail? Já mandei. As fotos? Ainda não olhei." },
      { q: "«Eu a conheci em Roma.»" },
      {
        q: "Em quais frases o particípio precisa concordar?",
        opts: ["L'ho vista.", "Le ho parlato.", "Li ho invitati.", "Gli ho scritto."]
      },
      { tr: "Já mandei os documentos." },
      { tr: "Ainda não olhei as fotos da viagem." },
      { tr: "Você viu a Giulia? — Sim, vi ontem à noite." }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Gramática",
    title: "Os pronomes de objeto indireto",
    objectives: [
      "distinguir o objeto direto do indireto",
      "usar bem gli e le",
      "conhecer os verbos que pedem objeto indireto"
    ],
    theory: [
      {
        h: "A quem, não quem",
        p: "Um pronome <b>indireto</b> substitui <em>a + pessoa</em>: <em>Telefono a Marco → <b>Gli</b> telefono.</em> Um pronome <b>direto</b> substitui um substantivo sem preposição: <em>Vedo Marco → <b>Lo</b> vedo.</em>"
      },
      {
        h: "As formas",
        p: "<em>mi, ti, <b>gli</b> (a ele), <b>le</b> (a ela), ci, vi, <b>gli</b> (a eles)</em>. No registro formal, «a eles» é <em>loro</em>, colocado depois do verbo: <em>Telefono loro</em>, mas na fala é quase sempre <em>gli</em>. Repare que o italiano distingue o gênero onde o seu «lhe» serve para ele e para ela (e que, na fala brasileira, costuma virar «pra ele», «pra ela»)."
      },
      {
        h: "Verbos que pegam você",
        p: "Vários verbos italianos pedem objeto indireto (<em>a</em> + pessoa): <em>telefonare a</em>, <em>rispondere a</em>, <em>chiedere a</em>, <em>credere a</em>, <em>piacere a</em>, <em>dispiacere a</em>. «Lo telefono» está errado: é <em>gli telefono</em>. Aqui a sua intuição ajuda em parte, porque você também «liga para ele», «responde a ele», «pergunta a ele». Os perigosos são <em>credere a</em> (você «acredita nele», com outra preposição: <em>gli credo</em>) e sobretudo <em>piacere</em>, que vira a frase do avesso: <em>gli piace</em> = «ele gosta»."
      },
      {
        trap: "<b>Gli</b> faz dois trabalhos completamente diferentes: é artigo (<em>gli amici</em>) e pronome (<em>gli parlo</em>). Quem decide é a posição: o artigo vem antes de um substantivo, o pronome antes de um verbo."
      }
    ],
    grammar: {
      title: "Direto versus indireto",
      table: {
        head: ["verbo", "tipo", "exemplo"],
        rows: [
          ["vedere qualcuno", "direto", "Lo vedo domani."],
          ["telefonare a qualcuno", "indireto", "Gli telefono domani."],
          ["conoscere qualcuno", "direto", "La conosco bene."],
          ["scrivere a qualcuno", "indireto", "Le scrivo una mail."],
          ["aspettare qualcuno", "direto", "Ti aspetto."],
          ["rispondere a qualcuno", "indireto", "Gli rispondo subito."]
        ]
      },
      examples: [
        { tr: "Você ligou para o Marco? — Sim, liguei para ele ontem." },
        { tr: "O que você disse a ela?" },
        { tr: "Não acredito nele nem um pouco." },
        { tr: "Eles nos responderam na hora." },
        { tr: "Ela gosta muito de viajar." },
        { tr: "Quero falar com ele hoje." }
      ]
    },
    vocab: [
      "telefonar, ligar (para alguém)",
      "responder (a alguém)",
      "escrever para",
      "perguntar a alguém",
      "dizer a alguém",
      "acreditar em alguém",
      "dar de presente",
      "emprestar a alguém",
      "enviar a alguém",
      "explicar a alguém",
      "aconselhar alguém",
      "nem um pouco"
    ],
    exercises: [
      { q: "«Telefono a Marco» → com pronome:", opts: ["Lo telefono.", "Gli telefono.", "Le telefono."] },
      { q: "«Vedo Marco» → com pronome:", opts: ["Lo vedo.", "Gli vedo.", "Le vedo."] },
      { q: "Complete: «Che cosa ___ hai detto?» (a ela)" },
      { q: "Complete: «Non ___ credo.» (nele)" },
      {
        q: "Quais verbos pedem objeto indireto (a qualcuno)?",
        opts: ["telefonare", "vedere", "rispondere", "aspettare", "credere"]
      },
      {
        q: "Complete os pronomes.",
        tr: "Escrevi para a Giulia: mandei um e-mail para ela. O Marco não responde, ligo para ele amanhã."
      },
      { q: "«Quero falar com ele hoje.»" },
      { q: "Relacione.", pairs: ["dar de presente", "emprestar a alguém", "explicar a alguém", "aconselhar alguém"] },
      { tr: "Escrevi para ela ontem, mas ela ainda não me respondeu." },
      { tr: "Ligo para ele hoje à noite e explico tudo." }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Gramática",
    title: "O imperativo com pronomes",
    objectives: [
      "formar o imperativo em todas as pessoas",
      "colar um pronome no imperativo",
      "formar o negativo da forma tu"
    ],
    theory: [
      {
        h: "As formas básicas",
        p: "<b>tu</b>: <em>-are → -a</em> (parla), <em>-ere/-ire → -i</em> (prendi, senti). <b>Lei</b>: ao contrário, <em>-are → -i</em> (parli), <em>-ere/-ire → -a</em> (prenda, senta). <b>noi</b>: igual ao presente (parliamo). <b>voi</b>: igual ao presente (parlate). A forma de cortesia vem do subjuntivo, exatamente como o seu «fale», «tome», «espere», que você usa com «você» e com «o senhor»."
      },
      {
        h: "O negativo da forma tu",
        p: "Em vez do imperativo, usa-se o <b>infinitivo</b>: <em>non parlare!</em>, <em>non andare!</em>, <em>non ti preoccupare!</em>. Vale só para <em>tu</em>. Aqui o português segue outro caminho, com o subjuntivo («não fale», «não vá»), então é um ponto que precisa ser decorado."
      },
      {
        h: "Os pronomes grudam no final",
        p: "<em>Dimmi!</em>, <em>Chiamami!</em>, <em>Aspettalo!</em>, <em>Andiamoci!</em> No imperativo de <em>tu</em> o pronome vai obrigatoriamente depois e grudado, enquanto na fala brasileira ele vem antes («me diz», «me liga»): em italiano «mi dì» está errado. Já na forma <b>Lei</b> o pronome vai antes: <em>Mi dica</em>, <em>Lo aspetti</em>, e aí o seu «me diga» coincide."
      },
      {
        trap: "Depois das formas curtas <em>fa', da', sta', va', di'</em>, a consoante do pronome <b>dobra</b>: <em>dimmi, fammi, dammi, vattene, stammi bene</em>. Em português nada dobra nessa posição: a consoante dupla italiana é preciso ouvir e escrever. A exceção é <em>gli</em>: <em>digli</em>, sem dobrar."
      }
    ],
    grammar: {
      title: "O imperativo",
      table: {
        head: ["pessoa", "parlare", "prendere", "sentire", "com pronome"],
        rows: [
          ["tu", "parla", "prendi", "senti", "dimmi, chiamami"],
          ["Lei", "parli", "prenda", "senta", "mi dica, lo prenda"],
          ["noi", "parliamo", "prendiamo", "sentiamo", "andiamoci"],
          ["voi", "parlate", "prendete", "sentite", "ascoltatemi"],
          ["tu (negativo)", "non parlare", "non prendere", "non sentire", "non dirmi"]
        ]
      },
      examples: [
        { tr: "Me conta tudo!" },
        { tr: "Me avisa como vai ser." },
        { tr: "Não se preocupe, eu cuido disso." },
        { tr: "Pois não, senhora, pode falar." },
        { tr: "Vamos lá juntos!" },
        { tr: "Me desculpe, não fiz de propósito." }
      ]
    },
    vocab: [
      "me diz",
      "me avisa",
      "me dá",
      "me desculpa",
      "me espera",
      "não se preocupe",
      "olha",
      "escuta",
      "se cuida",
      "vem aqui",
      "para com isso",
      "de propósito"
    ],
    exercises: [
      {
        q: "«non parlare!» como negativo corresponde a qual pessoa:",
        opts: ["tu", "Lei", "voi"],
        why: "Só a forma tu usa o infinitivo no negativo."
      },
      { q: "Forme o imperativo (tu) de «prendere»: ___" },
      { q: "Forme o imperativo (Lei) de «parlare»: ___" },
      { q: "«Me diz» é: ___" },
      {
        q: "Por que «dammi» e não «dami»?",
        opts: [
          "É um erro de digitação",
          "Depois da forma curta da' a consoante do pronome dobra",
          "Porque dare é irregular em tudo"
        ]
      },
      { q: "«Não se preocupe.»" },
      {
        q: "Complete a mensagem para um amigo.",
        tr: "Oi! Me avisa a que horas você chega, e me escreve quando sair."
      },
      { tr: "Pois não, senhora, estou ouvindo." },
      { tr: "Me avisa quando chegar, vou te buscar." },
      { tr: "Me conta tudo, não se preocupe." }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Teste",
    title: "Teste da unidade 3",
    objectives: ["verificar os pronomes diretos e indiretos, a concordância do particípio e o imperativo"],
    theory: [{ p: "Dez perguntas. Aprovação com 70 %." }],
    exercises: [
      { q: "«Conosci Anna?» →", opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."] },
      { q: "«I biglietti? ___ ho comprati.»" },
      { q: "«Le chiavi? Le ho pers___.»" },
      { q: "«Telefono a Marco» →", opts: ["Lo telefono", "Gli telefono", "Le telefono"] },
      { q: "«Che cosa ___ hai detto?» (a ela)" },
      { q: "O imperativo (tu) de «sentire»: ___" },
      { q: "«Me diz»: ___" },
      { q: "«Não se preocupe, eu cuido disso.»" },
      { tr: "Eu a vi ontem e falei com ela sobre o projeto." },
      { tr: "Me avisa quando chegar, eu te espero." }
    ]
  },
  "unit:a2-u04": { title: "A saúde", grammarNote: "mi fa male · o imperativo formal · dar conselhos" },
  "lesson:a2-u04-l1": {
    theme: "Saúde",
    title: "Dor e sintomas",
    objectives: [
      "dizer o que está doendo",
      "nomear os sintomas básicos",
      "usar mi fa / mi fanno male"
    ],
    theory: [
      {
        h: "Uma construção invertida, como piacere",
        p: "<em>Mi fa male la testa</em> é literalmente «a cabeça me faz mal». O sujeito é a <b>parte do corpo</b>, e por isso o verbo tem duas formas: <em>mi <b>fa</b> male il piede</em> (uma coisa) e <em>mi <b>fanno</b> male i piedi</em> (várias)."
      },
      {
        contrast: "É o modelo do seu «me dói a cabeça» / «me doem os pés»: o sujeito é a parte do corpo e o verbo concorda com ela. No Brasil se diz mais «minha cabeça está doendo» ou «estou com dor de cabeça», mas em italiano o molde é sempre o do «me dói»: pronome + verbo + artigo + parte do corpo. O verbo é <em>fare male</em>, não um verbo próprio como «doer»."
      },
      {
        h: "Dois caminhos paralelos",
        p: "Ao lado de <em>mi fa male la gola</em> existe <em>ho mal di gola</em>. O segundo funciona como fórmula fixa: <em>mal di testa, mal di stomaco, mal di schiena, mal di denti</em>. Os dois são igualmente naturais."
      },
      {
        h: "O artigo com as partes do corpo",
        p: "O italiano diz <em>mi fa male <b>la</b> testa</em>, não «la mia testa», porque o pronome <em>mi</em> já diz de quem é a cabeça. Atenção: no Brasil é natural dizer «minha cabeça dói», com possessivo; em italiano, com o pronome, o possessivo sobra. O mesmo vale para <em>mi lavo <b>i</b> denti</em> («escovo os dentes»)."
      },
      {
        tip: "<em>Da quanto tempo?</em> («desde quando?», «há quanto tempo?») é a primeira pergunta que você vai ouvir no consultório. A resposta: <em>da tre giorni</em>, <em>da una settimana</em>."
      }
    ],
    grammar: {
      title: "Dor e sintomas",
      table: {
        head: ["construção", "exemplo", "em português"],
        rows: [
          ["mi fa male + sing.", "Mi fa male la schiena.", "Minhas costas doem."],
          ["mi fanno male + pl.", "Mi fanno male i denti.", "Meus dentes doem."],
          ["ho mal di…", "Ho mal di testa.", "Estou com dor de cabeça."],
          ["ho la febbre", "Ho trentotto di febbre.", "Estou com 38 de febre."],
          ["mi sento…", "Mi sento debole.", "Estou me sentindo fraco."],
          ["da quanto?", "Da tre giorni.", "Há três dias."]
        ]
      },
      examples: [
        { tr: "Estou com dor de garganta há dois dias." },
        { tr: "Meu estômago está doendo e estou enjoado." },
        { tr: "Estou com tosse e nariz escorrendo." },
        { tr: "Estou me sentindo cansado e sem apetite." },
        { tr: "Sou alérgico a penicilina." },
        { tr: "Eu deveria tomar alguma coisa para a dor de cabeça?" }
      ]
    },
    vocab: [
      "cabeça",
      "garganta",
      "estômago",
      "costas",
      "dentes",
      "febre",
      "tosse",
      "um resfriado",
      "enjoo, náusea",
      "não estou me sentindo bem",
      "alergia",
      "desde quando?"
    ],
    exercises: [
      {
        q: "«___ male i denti.» (meus dentes doem)",
        opts: ["Mi fa", "Mi fanno", "Mi faccio"],
        why: "O sujeito são os dentes, plural, então fanno."
      },
      { q: "Complete: «Mi ___ male la schiena.»" },
      { q: "Complete: «Ho mal ___ testa.»" },
      {
        q: "Qual frase soa natural em italiano?",
        opts: ["Mi fa male la mia testa.", "Mi fa male la testa.", "Fa male mia testa."],
        why: "O pronome mi já diz de quem é; o possessivo sobra."
      },
      { q: "Relacione.", pairs: ["tosse", "um resfriado", "enjoo, náusea", "febre"] },
      { q: "«Estou com dor de garganta há três dias.»" },
      { q: "Descreva os seus sintomas.", tr: "Minha garganta está doendo, estou com febre e me sinto fraco." },
      { tr: "Estou há uma semana com tosse e nariz escorrendo." },
      { tr: "Minhas pernas doem depois de correr." },
      { tr: "Estou com dor de cabeça e febre." }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "Saúde",
    title: "No consultório",
    objectives: ["descrever um problema de saúde ao médico", "entender as instruções", "perguntar sobre a posologia"],
    theory: [
      {
        h: "Como funciona a saúde pública italiana",
        p: "A base do sistema é o <strong>medico di base</strong>, o seu clínico geral de referência, com quem é preciso se cadastrar. O pedido médico ou encaminhamento se chama <em>l'impegnativa</em> ou <em>la ricetta</em>. Para emergências se vai ao <strong>pronto soccorso</strong> (o pronto-socorro), onde a triagem funciona por cores: branco (menos urgente) → vermelho. Para quem conhece o SUS, a lógica de um sistema público e universal vai soar familiar, embora na Itália muitos exames e consultas com especialista tenham uma coparticipação, o <em>ticket</em>."
      },
      {
        h: "O imperativo formal nas instruções",
        p: "O médico fala com você no <em>Lei</em>: <em>Prenda questo tre volte al giorno</em>, <em>Riposi</em>, <em>Beva molta acqua</em>, <em>Non si preoccupi</em>. É o seu «tome», «descanse», «beba»: vale a pena reconhecer essas formas antes mesmo de saber produzi-las."
      },
      {
        h: "A farmácia faz mais do que você imagina",
        p: "O <em>farmacista</em> italiano tem bastante autoridade para aconselhar e costuma ser a primeira parada para problemas leves. Muitas coisas continuam exigindo receita, mas o conselho é gratuito e concreto."
      },
      {
        tip: "A frase que salva você em qualquer situação médica: <em>Sono allergico/a a…</em> Vale a pena sabê-la sem precisar pensar."
      }
    ],
    grammar: {
      title: "No consultório e na farmácia",
      table: {
        head: ["quem fala", "em italiano", "em português"],
        rows: [
          ["médico", "Cosa c'è che non va?", "O que o senhor está sentindo?"],
          ["médico", "Da quanto tempo ha questi sintomi?", "Há quanto tempo o senhor tem esses sintomas?"],
          ["paciente", "Mi fa male qui.", "Dói aqui."],
          ["médico", "Le prescrivo un antibiotico.", "Vou receitar um antibiótico."],
          ["paciente", "Quante volte al giorno?", "Quantas vezes por dia?"],
          ["médico", "Due volte al giorno, dopo i pasti.", "Duas vezes por dia, depois das refeições."]
        ]
      },
      examples: [
        { tr: "Bom dia, não estou me sentindo bem." },
        { tr: "O senhor é alérgico a algum medicamento?" },
        { tr: "Vou fazer uma receita para o senhor." },
        { tr: "Descanse e beba bastante água." },
        { tr: "Se não passar em três dias, volte aqui." },
        { tr: "Preciso de um atestado médico." }
      ]
    },
    vocab: [
      "clínico geral",
      "pronto-socorro",
      "receita",
      "antibiótico",
      "comprimido",
      "xarope",
      "injeção",
      "exame de sangue",
      "atestado médico",
      "depois das refeições",
      "em jejum",
      "melhorar"
    ],
    exercises: [
      {
        q: "Aonde você vai com um problema repentino e grave?",
        opts: ["Dal medico di base", "Al pronto soccorso", "In farmacia"]
      },
      { q: "Complete: «Sono ___ alla penicillina.» (alérgica, quem fala é uma mulher)" },
      { q: "Complete: «Quante ___ al giorno?» (quantas vezes)" },
      { q: "Relacione.", pairs: ["receita", "comprimido", "em jejum", "melhorar"] },
      { q: "«Há quanto tempo o senhor tem esses sintomas?»" },
      {
        q: "Uma consulta médica.",
        setting: "O consultório, numa segunda-feira de manhã.",
        lines: [
          { tr: "Bom dia, sente-se. O que o senhor está sentindo?" },
          {
            tr: "Diga que sua garganta está doendo e que você está com febre.",
            answerTr: "Minha garganta está doendo e estou com febre."
          },
          { tr: "Desde quando?" },
          { tr: "Diga que há três dias.", answerTr: "Há três dias." },
          { tr: "Vou receitar um antibiótico. Alguma alergia?" },
          {
            tr: "Diga que não e pergunte sobre a posologia.",
            answerTr: "Não, nenhuma. Quantas vezes por dia eu tomo?"
          }
        ]
      },
      {
        q: "Complete as instruções do médico.",
        tr: "Tome um comprimido duas vezes por dia, depois das refeições. E beba bastante água."
      },
      { tr: "Preciso de um atestado médico." },
      { tr: "Tome o antibiótico durante seis dias, mesmo que comece a se sentir melhor." },
      { tr: "Sou alérgico a penicilina, existe alguma alternativa?" }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Saúde",
    title: "Dar conselhos",
    objectives: [
      "aconselhar alguém sobre o que fazer",
      "usar o condicional em dovresti / potresti",
      "reagir ao problema de outra pessoa"
    ],
    theory: [
      {
        h: "O condicional: primeiro encontro",
        p: "O condicional se constrói sobre a mesma raiz do futuro, com as terminações <em>-ei, -esti, -ebbe, -emmo, -este, -ebbero</em>. Você já conhece <em>vorrei</em>; acrescente <em>dovrei</em> (deveria), <em>potrei</em> (poderia), <em>sarebbe</em> (seria). O mecanismo é o do seu futuro do pretérito: mesma raiz do futuro, outras terminações (farei → faria)."
      },
      {
        h: "Aconselhar sem mandar",
        p: "<em>Devi riposare</em> («você tem que descansar») soa como instrução. <em>Dovresti riposare</em> («você deveria descansar») é um conselho. A distinção é a mesma que você faz entre «tem que» e «deveria», e os italianos a ouvem com a mesma nitidez."
      },
      {
        h: "Outras formas de aconselhar",
        list: [
          "<em>Perché non…?</em> — «por que você não…?»: <em>Perché non vai dal medico?</em>",
          "<em>Se fossi in te…</em> — «se eu fosse você…» (explicado por inteiro no B2)",
          "<em>Ti conviene…</em> — «é melhor você…», «vale a pena…»: <em>Ti conviene riposare.</em>"
        ]
      },
      {
        tip: "Reagir ao problema de alguém: <em>Mi dispiace</em> (sinto muito), <em>Che peccato</em> (que pena), <em>Rimettiti presto</em> (melhoras)."
      }
    ],
    grammar: {
      title: "Condizionale presente: as formas básicas",
      table: {
        head: ["pessoa", "dovere", "potere", "volere", "essere"],
        rows: [
          ["io", "dovrei", "potrei", "vorrei", "sarei"],
          ["tu", "dovresti", "potresti", "vorresti", "saresti"],
          ["lui / lei", "dovrebbe", "potrebbe", "vorrebbe", "sarebbe"],
          ["noi", "dovremmo", "potremmo", "vorremmo", "saremmo"],
          ["voi", "dovreste", "potreste", "vorreste", "sareste"],
          ["loro", "dovrebbero", "potrebbero", "vorrebbero", "sarebbero"]
        ]
      },
      examples: [
        { tr: "Você deveria descansar uns dias." },
        { tr: "Você poderia perguntar ao farmacêutico." },
        { tr: "Seria melhor ir ao médico." },
        { tr: "Por que você não tira um dia de folga?" },
        { tr: "É melhor você descansar hoje." },
        { tr: "Melhoras!" }
      ]
    },
    vocab: [
      "você deveria",
      "você poderia",
      "seria melhor",
      "é melhor você",
      "por que você não…?",
      "conselho",
      "descansar",
      "parar, largar",
      "se mexer, ser ativo",
      "sinto muito",
      "que pena",
      "melhoras"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Qual versão soa como conselho e não como ordem?",
        opts: ["Devi riposare.", "Dovresti riposare.", "Riposa!"]
      },
      { q: "Complete: «___ meglio andare dal medico.» (seria melhor)" },
      { q: "Complete: «___ chiedere al farmacista?» (você poderia)" },
      { q: "«Você deveria descansar uns dias.»" },
      { q: "Relacione as reações.", pairs: ["sinto muito", "que pena", "melhoras", "é melhor você"] },
      { q: "Dê um conselho a um amigo.", tr: "Você deveria descansar hoje. E por que não liga para o médico?" },
      { tr: "Seria melhor você tirar um dia de folga." },
      { tr: "Você deveria descansar e beber bastante água." }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Saúde",
    title: "Estilo de vida e exercício",
    objectives: [
      "falar de hábitos saudáveis",
      "dizer com que frequência você faz algo",
      "expressar a intenção de mudar"
    ],
    theory: [
      {
        h: "A dieta mediterrânea não é uma dieta",
        p: "Em italiano <em>dieta</em> significa sobretudo «o jeito de comer», não «emagrecer», exatamente como na sua «dieta mediterrânea». <em>La dieta mediterranea</em> é um padrão alimentar reconhecido pela Unesco, não um plano para perder peso: <em>sono a dieta</em> é que significa «estou de dieta»."
      },
      {
        h: "Expressar uma intenção",
        p: "<em>Ho intenzione di…</em> (tenho a intenção de), <em>vorrei iniziare a…</em> (queria começar a), <em>sto cercando di…</em> (estou tentando). As três levam infinitivo, mas cada uma com a sua preposição, coisa muito italiana que é preciso decorar verbo por verbo. O português acerta duas das três: «intenção de», «começar a»; já «tentar» não leva preposição, e <em>cercare</em> leva <em>di</em>."
      },
      {
        h: "Frequência precisa",
        p: "<em>Tre volte alla settimana</em>, <em>una volta al mese</em>, <em>tutti i giorni</em>, <em>a giorni alterni</em> (dia sim, dia não). A preposição <em>a</em> com artigo: <em>alla settimana, al mese, all'anno</em>."
      },
      {
        tip: "<em>Fare movimento</em> soa mais natural que <em>fare sport</em> para a atividade do dia a dia: andar, pedalar, subir escadas."
      }
    ],
    grammar: {
      title: "Hábitos e intenções",
      table: {
        head: ["construção", "exemplo", "em português"],
        rows: [
          ["ho intenzione di", "Ho intenzione di smettere di fumare.", "Tenho a intenção de parar de fumar."],
          ["sto cercando di", "Sto cercando di mangiare meglio.", "Estou tentando comer melhor."],
          ["vorrei iniziare a", "Vorrei iniziare a correre.", "Queria começar a correr."],
          ["frequência", "Tre volte alla settimana.", "Três vezes por semana."],
          ["dias alternados", "A giorni alterni.", "Dia sim, dia não."],
          ["parar", "Ho smesso di bere caffè.", "Parei de tomar café."]
        ]
      },
      examples: [
        { tr: "Eu me mexo todos os dias, nem que seja caminhando." },
        { tr: "Tento dormir pelo menos sete horas." },
        { tr: "Diminuí o açúcar e estou me sentindo melhor." },
        { tr: "Vou à academia duas vezes por semana." },
        { tr: "Tenho a intenção de me matricular na natação." },
        { tr: "A dieta mediterrânea é muito variada." }
      ]
    },
    vocab: [
      "um estilo de vida saudável",
      "se mexer, ser ativo",
      "treinar",
      "correr",
      "andar, caminhar",
      "se inscrever, se matricular",
      "diminuir, reduzir",
      "parar de fumar",
      "tenho a intenção de",
      "estou tentando",
      "dia sim, dia não",
      "pelo menos"
    ],
    exercises: [
      { q: "Complete: «Ho intenzione ___ smettere di fumare.»" },
      { q: "Complete: «Vorrei iniziare ___ correre.»" },
      { q: "Complete: «Vado in palestra tre volte ___ settimana.»" },
      { q: "O que significa «a giorni alterni»?", opts: ["Todos os dias", "Dia sim, dia não", "Uma vez por semana"] },
      {
        q: "Em italiano, «dieta» significa sobretudo:",
        opts: ["emagrecer", "o jeito de comer", "jejuar"]
      },
      { q: "«Tento dormir pelo menos sete horas.»" },
      { q: "Fale dos seus hábitos.", tr: "Eu me mexo dia sim, dia não e tento diminuir o açúcar." },
      { q: "Relacione.", pairs: ["treinar", "se inscrever", "diminuir", "pelo menos"] },
      { tr: "Parei de fumar há três meses e me sinto muito melhor." },
      { tr: "Corro três vezes por semana, cedo de manhã." }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Teste",
    title: "Teste da unidade 4",
    objectives: ["verificar mi fa male, o vocabulário médico e o condicional"],
    theory: [{ p: "Dez perguntas. Aprovação com 70 %." }],
    exercises: [
      { q: "«Mi ___ male i denti.»" },
      { q: "«Ho mal ___ testa.»" },
      { q: "Um problema repentino e grave →", opts: ["medico di base", "pronto soccorso", "farmacia"] },
      {  },
      { q: "«___ meglio riposare.» (seria melhor)" },
      { q: "«Ho intenzione ___ smettere.»" },
      { q: "Relacione.", pairs: ["receita", "tosse", "melhorar", "em jejum"] },
      { q: "«Estou com dor de garganta há dois dias.»" },
      { tr: "Tome um comprimido duas vezes por dia depois das refeições." },
      { tr: "Não estou me sentindo bem, deveria ir ao médico." }
    ]
  }
});
