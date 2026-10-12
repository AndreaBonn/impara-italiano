/* ============================================================
   Texto na língua do aluno (pt, português do Brasil) para data/core/b1-01.js
   As chaves apontam para os id da camada neutra; os arrays se
   combinam por índice, então o comprimento deve coincidir com o core.
   Quem confere é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:b1-u01": { title: "O subjuntivo", grammarNote: "congiuntivo presente e passato · expressar opiniões" },
  "lesson:b1-u01-l1": {
    theme: "Gramática",
    title: "Formas e primeiros usos",
    objectives: [
      "formar o congiuntivo presente nas três conjugações",
      "conhecer os irregulares mais frequentes",
      "reconhecer as situações que o pedem"
    ],
    theory: [
      {
        h: "Um modo que você já tem",
        p: "O congiuntivo não descreve fatos: marca <b>a postura de quem fala diante do que vem a seguir</b>, opinião, dúvida, vontade, emoção. <em>So che <b>è</b> bravo</em> (sei, um fato, indicativo) diante de <em>Penso che <b>sia</b> bravo</em> (acho, uma opinião, congiuntivo). Aqui você sai com uma vantagem enorme: o seu subjuntivo está vivo e faz o mesmo trabalho."
      },
      {
        contrast: "A diferença que mais custa caro está justamente no exemplo acima. O português diz «acho que <b>é</b> bom», com indicativo, e só passa para o subjuntivo ao negar («não acho que <b>seja</b>»). O italiano exige o congiuntivo também na afirmativa: <em>penso che sia</em>, <em>credo che sia</em>, <em>mi sembra che sia</em>. É o ponto em que a sua intuição trai você, e é o mais frequente de todo o nível."
      },
      {
        h: "As terminações",
        list: [
          "<b>-are</b>: parl<b>i</b>, parl<b>i</b>, parl<b>i</b>, parl<b>iamo</b>, parl<b>iate</b>, parl<b>ino</b>",
          "<b>-ere / -ire</b>: prend<b>a</b>, prend<b>a</b>, prend<b>a</b>, prend<b>iamo</b>, prend<b>iate</b>, prend<b>ano</b>",
          "<b>-isc-</b>: cap<b>isca</b>, cap<b>isca</b>, cap<b>isca</b>, cap<b>iamo</b>, cap<b>iate</b>, cap<b>iscano</b>"
        ]
      },
      {
        trap: "As três primeiras pessoas são <b>idênticas</b>. Por isso o pronome sujeito <b>não se omite</b> com o congiuntivo: <em>penso che <b>tu</b> abbia ragione</em>, ou ninguém sabe de quem você está falando. O seu subjuntivo tem o mesmo problema («fale» serve para eu e para ele) e resolve do mesmo jeito, acrescentando o pronome."
      },
      {
        h: "Irregulares que é preciso saber",
        p: "<em>essere → sia</em>, <em>avere → abbia</em>, <em>fare → faccia</em>, <em>andare → vada</em>, <em>venire → venga</em>, <em>potere → possa</em>, <em>volere → voglia</em>, <em>dovere → debba</em>, <em>sapere → sappia</em>, <em>dare → dia</em>, <em>stare → stia</em>, <em>dire → dica</em>, <em>uscire → esca</em>, <em>rimanere → rimanga</em>."
      }
    ],
    grammar: {
      title: "Congiuntivo presente",
      table: {
        head: ["pessoa", "parlare", "prendere", "capire", "essere", "avere"],
        rows: [
          ["che io", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che tu", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che lui/lei", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che noi", "parliamo", "prendiamo", "capiamo", "siamo", "abbiamo"],
          ["che voi", "parliate", "prendiate", "capiate", "siate", "abbiate"],
          ["che loro", "parlino", "prendano", "capiscano", "siano", "abbiano"]
        ]
      },
      examples: [
        { tr: "Acho que você tem razão." },
        { tr: "Me parece que é tarde demais." },
        { tr: "Não tenho certeza de que ele venha." },
        { tr: "Espero que tudo dê certo." },
        { tr: "Quero que você me diga a verdade." },
        { tr: "Sei que ele é bom.", note: "certeza → indicativo" }
      ]
    },
    vocab: [
      "acho que…",
      "penso que…",
      "me parece que…",
      "espero que…",
      "quero que…",
      "receio que…",
      "não tenho certeza de que…",
      "imagino que…",
      "é possível que…",
      "é necessário que…",
      "sei que… (indicativo)",
      "é verdade que… (indicativo)"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Por que o pronome sujeito não se omite com o congiuntivo?",
        opts: [
          "Porque é mais educado",
          "Porque as três primeiras pessoas têm a mesma forma",
          "Porque a ordem das palavras exige"
        ]
      },
      { q: "Complete: «Penso che tu ___ ragione.» (avere)" },
      { q: "Complete: «Credo che ___ troppo tardi.» (essere)" },
      {
        q: "Qual leva indicativo e não congiuntivo?",
        opts: ["Penso che…", "So che…", "Temo che…"],
        why: "Sapere expressa certeza, então vai com indicativo."
      },
      {
        q: "Use as formas do congiuntivo.",
        tr: "Espero que tudo dê certo e que vocês estejam todos contentes."
      },
      { q: "«Quero que você me diga a verdade.»" },
      { tr: "Acho que é melhor adiar a reunião." },
      { tr: "Acho que você tem razão neste ponto." }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Gramática",
    title: "O que dispara o subjuntivo",
    objectives: [
      "reconhecer as expressões que pedem congiuntivo",
      "saber quando se usa di + infinitivo em vez de che",
      "não colocar o congiuntivo onde não cabe"
    ],
    theory: [
      {
        h: "Quatro famílias de gatilhos",
        list: [
          "<b>opinião e suposição</b>: penso, credo, ritengo, mi sembra, immagino, suppongo",
          "<b>vontade e sentimento</b>: voglio, desidero, spero, temo, mi dispiace, sono contento",
          "<b>impessoais</b>: è necessario, bisogna, è possibile, è strano, è meglio, può darsi",
          "<b>conjunções</b>: benché, sebbene, nonostante, affinché, purché, prima che, a meno che, senza che, come se"
        ]
      },
      {
        h: "Mesmo sujeito: o che desaparece",
        p: "Quando as duas orações têm o mesmo sujeito, o congiuntivo cede o lugar a <em>di</em> + infinitivo. <em>Penso <b>di</b> avere ragione</em> («acho que tenho razão»), e não «penso che io abbia». É a mesma preferência que você tem em português: o natural é «espero chegar a tempo», não «espero que eu chegue a tempo». A diferença é que em italiano não é preferência, é regra."
      },
      {
        h: "Onde o congiuntivo NÃO aparece",
        p: "Depois de expressões de certeza: <em>so che, è certo che, è vero che, è chiaro che, siccome, poiché</em>. Cuidado com <em>perché</em>: no sentido de «porque» leva indicativo, no sentido de «para que» leva congiuntivo (<em>te lo dico perché tu <b>capisca</b></em>). Exatamente o seu «porque» diante do «para que»."
      },
      {
        contrast: "Quase toda essa lista soa familiar, porque o português distribui igual: «embora seja», «antes que chegue», «contanto que», «a menos que». Os dois gatilhos que é preciso vigiar são os verbos de opinião na afirmativa, que em italiano pedem congiuntivo, e <em>nonostante</em>, que pede sempre, como o seu «embora», enquanto o seu «apesar de que» aceita indicativo quando o fato é real («apesar de que estava cansado»)."
      }
    ],
    grammar: {
      title: "Congiuntivo ou não",
      table: {
        head: ["expressão", "modo", "exemplo"],
        rows: [
          ["penso / credo che", "congiuntivo", "Penso che sia giusto."],
          ["so / è vero che", "indicativo", "So che è giusto."],
          ["spero che", "congiuntivo", "Spero che venga."],
          ["spero di (mesmo sujeito)", "infinitivo", "Spero di venire."],
          ["benché / sebbene", "congiuntivo", "Benché sia tardi, esco."],
          ["siccome / poiché", "indicativo", "Siccome è tardi, resto."]
        ]
      },
      examples: [
        { tr: "Embora esteja chovendo, vamos mesmo assim." },
        { tr: "Embora esteja cansado, continuo trabalhando." },
        { tr: "Eu te ajudo, contanto que você faça a sua parte." },
        { tr: "Saia antes que tenha trânsito." },
        { tr: "Estou pensando em ir embora amanhã.", note: "mesmo sujeito → di + infinitivo" },
        { tr: "Como é tarde, deixo para amanhã.", note: "indicativo" }
      ]
    },
    vocab: [
      "embora",
      "apesar de que",
      "para que",
      "contanto que",
      "a menos que",
      "antes que",
      "sem que",
      "como se",
      "pode ser que",
      "como, já que",
      "está claro que",
      "considerar, julgar"
    ],
    exercises: [
      { q: "«Benché ___ tardi, esco.» (essere)", opts: ["è", "sia", "sarà"] },
      {
        q: "«Siccome ___ tardi, resto a casa.» (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Siccome apresenta uma causa real → indicativo."
      },
      { q: "Complete: «Ti aiuto purché tu ___ la tua parte.» (fare)" },
      { q: "Complete: «Spero ___ venire domani.» (mesmo sujeito)" },
      {
        q: "Quais expressões exigem congiuntivo?",
        opts: ["penso che", "so che", "benché", "è vero che", "prima che"]
      },
      {
        q: "Use as formas corretas.",
        tr: "Embora esteja cansado, ele continua trabalhando. Sei que ele tem muita paciência."
      },
      { q: "«Embora esteja chovendo, saímos mesmo assim.»" },
      {
        q: "«Te lo dico perché tu capisca»: por que congiuntivo?",
        opts: ["Porque perché sempre leva", "Porque aqui perché significa «para que», não «porque»", "É um erro"]
      },
      { tr: "Pode ser que amanhã não haja ninguém no escritório." },
      { tr: "Embora seja difícil, acho que vale a pena." }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Gramática",
    title: "O subjuntivo para fatos anteriores",
    objectives: [
      "formar o congiuntivo passato",
      "escolher entre presente e passato",
      "usá-lo para comentar o passado"
    ],
    theory: [
      {
        h: "Como se constrói",
        p: "Congiuntivo presente de <em>avere/essere</em> + particípio: <em>abbia fatto</em>, <em>sia andato</em>. As regras para escolher o auxiliar e para concordar o particípio são as que você já conhece do passato prossimo. O seu «tenha feito» é construído do mesmo jeito; a diferença é que o português usa sempre «ter», e o italiano usa essere com uma parte dos verbos."
      },
      {
        h: "Presente ou passato",
        p: "Com a principal no presente: <b>presente</b> para algo simultâneo ou ainda por vir (<em>penso che venga</em>), <b>passato</b> para algo já terminado (<em>penso che sia venuto</em>)."
      },
      {
        h: "O contexto mais frequente: comentar o passado",
        p: "<em>Mi dispiace che tu non sia potuto venire.</em> <em>Non credo che l'abbiano fatto apposta.</em> Aparecem o tempo todo na conversa, então o congiuntivo passato se paga rapidinho."
      },
      {
        tip: "Na fala informal os italianos substituem cada vez mais o congiuntivo pelo indicativo (<em>penso che è vero</em>). Isso é muito criticado e pega mal por escrito e no trabalho. Aprenda a forma correta."
      }
    ],
    grammar: {
      title: "Congiuntivo passato",
      table: {
        head: ["oração principal", "relação", "modo", "exemplo"],
        rows: [
          ["presente", "simultâneo", "cong. presente", "Penso che stia bene."],
          ["presente", "futuro", "cong. presente", "Penso che venga domani."],
          ["presente", "anterior", "cong. passato", "Penso che sia venuto ieri."],
          ["—", "com essere", "concordância", "Credo che sia partita."],
          ["—", "com avere", "sem concordância", "Credo che abbia parlato."],
          ["—", "com pronome", "concordância", "Non credo che l'abbia vista."]
        ]
      },
      examples: [
        { tr: "Sinto muito que você não tenha podido vir." },
        { tr: "Não acho que tenham feito de propósito." },
        { tr: "É estranho que ele não tenha respondido." },
        { tr: "Parece que já foram embora." },
        { tr: "Espero que vocês tenham se divertido." },
        { tr: "Receio que a gente tenha errado o caminho." }
      ]
    },
    vocab: [
      "sinto muito que",
      "é estranho que",
      "parece que",
      "acontece que",
      "tenho a impressão de que",
      "de propósito",
      "por engano",
      "errar o caminho",
      "perceber, notar",
      "cair a ficha",
      "pelo jeito",
      "de fato"
    ],
    exercises: [
      { q: "Complete: «Penso che ___ già partito.» (essere, ele)" },
      { q: "Complete: «Non credo che ___ capito.» (avere, eles)" },
      {
        q: "«Penso che venga domani» diante de «Penso che sia venuto ieri»: qual é a diferença?",
        opts: ["Nenhuma", "A primeira fala do futuro, a segunda de algo anterior", "A segunda está errada"]
      },
      { q: "Use o congiuntivo passato.", tr: "Sinto muito que você não tenha podido vir e que tenha perdido a festa." },
      { q: "«Não acho que tenham feito de propósito.»" },
      {
        q: "«Credo che sia partita»: por que «partita» e não «partito»?",
        opts: ["É um erro", "Porque com essere o particípio concorda com o sujeito", "Porque soa melhor"]
      },
      { q: "Relacione.", pairs: ["pelo jeito", "de propósito", "por engano", "cair a ficha"] },
      { tr: "Parece que já foram embora." },
      { tr: "É estranho que ele ainda não tenha respondido à mensagem." },
      { tr: "Espero que vocês tenham se divertido na festa." }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Comunicação",
    title: "Dar e pesar opiniões",
    objectives: [
      "expressar uma opinião numa conversa",
      "concordar em parte e discordar",
      "usar o congiuntivo numa discussão real"
    ],
    theory: [
      {
        h: "Três intensidades de opinião",
        list: [
          "suave: <em>mi sembra che…</em>, <em>ho l'impressione che…</em>, <em>direi che…</em>",
          "neutra: <em>secondo me</em>, <em>penso che</em>, <em>a mio parere</em>",
          "forte: <em>sono convinto che</em>, <em>non ho dubbi</em>, <em>è evidente che</em> (indicativo!)"
        ]
      },
      {
        h: "Discordar sem brigar",
        p: "A conversa italiana tolera o desacordo, mas cuida da embalagem. <em>Non sono del tutto d'accordo</em>, <em>Sì, però…</em>, <em>Da un lato hai ragione, dall'altro…</em>, <em>Vedo il tuo punto, ma…</em>. Um <em>no</em> seco encerra a conversa. A dinâmica vai parecer familiar para você."
      },
      {
        h: "Marcadores do discurso",
        p: "<em>Guarda</em>, <em>senti</em>, <em>diciamo</em>, <em>insomma</em>, <em>appunto</em>, <em>anzi</em>. Não acrescentam conteúdo, mas sem eles você parece estar lendo em voz alta. <em>Anzi</em> merece destaque: reforça o que você acabou de dizer ou o corrige, bem como o seu «aliás», que também faz as duas coisas, ou «pelo contrário»."
      },
      {
        tip: "<em>Dipende</em> é a resposta mais italiana para uma pergunta difícil. Amplie: <em>dipende da cosa intendi</em>, <em>dipende dai casi</em>."
      }
    ],
    grammar: {
      title: "A linguagem da opinião",
      table: {
        head: ["função", "expressão", "modo depois de che"],
        rows: [
          ["opinião", "Secondo me / A mio parere", "—"],
          ["opinião", "Penso / credo / ritengo che", "congiuntivo"],
          ["certeza", "Sono sicuro / è evidente che", "indicativo"],
          ["acordo parcial", "Da un lato… dall'altro…", "—"],
          ["desacordo", "Non sono d'accordo, perché…", "indicativo"],
          ["correção", "Anzi, direi il contrario.", "—"]
        ]
      },
      examples: [
        { tr: "Na minha opinião o problema é outro." },
        { tr: "Tenho a impressão de que não estamos nos entendendo." },
        { tr: "Por um lado você tem razão, por outro está exagerando." },
        { tr: "Não concordo totalmente com essa leitura." },
        { tr: "Aliás, eu diria o contrário." },
        { tr: "Depende do que você entende por «eficaz»." }
      ]
    },
    vocab: [
      "na minha opinião",
      "a meu ver",
      "considero que",
      "estou convencido de que",
      "por um lado… por outro",
      "não totalmente",
      "aliás; pelo contrário",
      "exato",
      "em resumo",
      "depende",
      "exagerar",
      "entender o ponto de alguém"
    ],
    exercises: [
      {
        q: "«Sono sicuro che ___ vero.» (essere)",
        opts: ["sia", "è", "fosse"],
        why: "Certeza → indicativo."
      },
      { q: "Complete: «Ritengo che questa soluzione ___ migliore.» (essere)" },
      { q: "O que significa «anzi»?", opts: ["portanto", "aliás / pelo contrário", "antes"] },
      { q: "Relacione.", pairs: ["exato", "em resumo", "depende", "exagerar"] },
      { q: "«Não concordo totalmente com essa opinião.»" },
      {
        q: "Complete a conversa.",
        tr: "Na minha opinião o problema é outro. Tenho a impressão de que não estamos nos entendendo."
      },
      {
        q: "Uma discussão sobre o home office.",
        setting: "Jantar na casa de uns amigos, a conversa vai para o trabalho.",
        lines: [
          { tr: "Na minha opinião o home office acabou com o trabalho em equipe." },
          {
            tr: "Dê razão em parte e acrescente um contraponto.",
            answerTr: "Por um lado você tem razão, por outro reduziu o estresse."
          },
          { tr: "Sim, mas os mais jovens aprendem menos." },
          {
            tr: "Responda que depende de como a empresa está organizada.",
            answerTr: "Depende de como a empresa organiza o trabalho."
          }
        ]
      },
      { tr: "Aliás, eu diria justamente o contrário." },
      { tr: "Por um lado é verdade, por outro me parece uma simplificação." },
      { tr: "Na minha opinião depende muito do contexto." }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Teste",
    title: "Teste da unidade 1",
    objectives: ["verificar o congiuntivo presente e passato e os gatilhos"],
    theory: [{ p: "Dez tarefas. A aprovação é com 70%." }],
    exercises: [
      {  },
      {  },
      { q: "«Penso che tu ___ ragione.»" },
      { q: "«Benché ___ tardi, esco.»" },
      { q: "«Siccome ___ tardi, resto.»", opts: ["è", "sia", "fosse"] },
      { q: "«Spero ___ venire domani.» (mesmo sujeito)" },
      { q: "«Non credo che ___ capito.» (avere, eles)" },
      { q: "Quais exigem congiuntivo?", opts: ["è vero che", "può darsi che", "prima che", "so che"] },
      { tr: "Me parece que eles não entenderam o problema." },
      { tr: "Acho que é melhor conversar sobre isso amanhã." }
    ]
  },
  "unit:b1-u02": { title: "Pronomes combinados", grammarNote: "me lo, glielo, ce ne · ci e ne por completo" },
  "lesson:b1-u02-l1": {
    theme: "Gramática",
    title: "Juntar dois pronomes",
    objectives: [
      "combinar um pronome indireto com um direto",
      "lembrar a troca de -i por -e",
      "usar a construção na conversa"
    ],
    theory: [
      {
        h: "Ordem: primeiro o indireto",
        p: "Quando dois pronomes se encontram, o <b>indireto vem na frente</b> e o seu <em>-i</em> vira <em>-e</em>: <em>mi + lo → <b>me lo</b></em>. Literalmente «me o», uma combinação que o português do Brasil praticamente não usa: você diria «me dá» ou «te empresto», deixando o objeto direto subentendido. O italiano não deixa subentendido: os dois pronomes aparecem."
      },
      {
        h: "Gli e le se fundem em glie-",
        p: "«A ele», «a ela» e «a eles» dão todos <strong>glie-</strong>, escrito <b>numa palavra só</b> com o segundo pronome: <em>glielo, gliela, glieli, gliele, gliene</em>."
      },
      {
        contrast: "Esse é o ponto que mais exige treino de quem fala português do Brasil, porque na fala nós simplesmente evitamos o pronome duplo: «dei para ele», «já entreguei». Em italiano, responder <em>sì, ho dato</em> sem os pronomes soa incompleto; o certo é <em>sì, gliel'ho dato</em>. A boa notícia: assim como o nosso «lhe» serve para ele, ela e você, uma única forma <em>glie-</em> cobre ele, ela e eles."
      },
      {
        h: "Com infinitivo ou imperativo, grudam juntos",
        p: "<em>Voglio dartelo</em>, <em>Puoi spiegarmelo?</em>, <em>Dammelo!</em>, <em>Portaglielo!</em>. O par inteiro se gruda no final do verbo. No Brasil o pronome costuma ir antes («quero te dar», «me dá»), mas em italiano, com infinitivo e imperativo, ele vai depois e na mesma palavra."
      },
      {
        trap: "Nos tempos compostos o particípio concorda com o pronome <b>direto</b>, também em par: <em>Me l'ha data</em> (ele me deu, a chave), <em>Gliele ho mandate</em> (mandei para ele, as cartas). Aqui o português não acompanha: você diz «ele tinha dado», sem mexer no particípio."
      }
    ],
    grammar: {
      title: "Tabela dos pronomes combinados",
      table: {
        head: ["", "lo", "la", "li", "le", "ne"],
        rows: [
          ["mi", "me lo", "me la", "me li", "me le", "me ne"],
          ["ti", "te lo", "te la", "te li", "te le", "te ne"],
          ["gli / le", "glielo", "gliela", "glieli", "gliele", "gliene"],
          ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"],
          ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"]
        ]
      },
      examples: [
        { tr: "Você me empresta o carro? — Sim, te empresto." },
        { tr: "Você deu o livro para o Marco? — Sim, dei para ele." },
        { tr: "Você explica isso de novo para a gente?" },
        { tr: "Quantos e-mails ele te mandou? — Me mandou três." },
        { tr: "Você pode me explicar isso?" },
        { tr: "Me dá isso, por favor." }
      ]
    },
    vocab: [
      "emprestar",
      "devolver",
      "explicar",
      "enviar",
      "levar, trazer",
      "dar de presente",
      "entregar",
      "pegar emprestado",
      "de novo",
      "já, imediatamente",
      "o quanto antes",
      "me avise"
    ],
    exercises: [
      {
        q: "«Mi dai il libro?» → a resposta com pronomes:",
        opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."]
      },
      { q: "Complete: «Hai dato il libro a Marco? — Sì, ___ ho dato.»" },
      {
        q: "Complete: «Ci spieghi la regola? — Sì, ___ spiego.»",
        why: "A resposta se dirige a vocês: ve la spiego."
      },
      { q: "Como se escreve «gli + lo»?", opts: ["gli lo", "glielo", "gli-lo"] },
      {
        q: "Substitua os substantivos por pronomes.",
        tr: "— Você me empresta o carro? — Sim, te empresto com prazer. — E as chaves? — Já te dou."
      },
      { q: "«Você pode me explicar isso?»" },
      { q: "Complete a terminação: «Me l'ha dat___.» (ele me deu — la macchina)" },
      { tr: "Mando para você amanhã (os documentos)." },
      { tr: "Expliquei para ele três vezes, mas ele não entendeu." },
      { tr: "Você pode me explicar isso de novo, por favor?" }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Gramática",
    title: "Ci e ne por completo",
    objectives: [
      "reconhecer todos os valores de ci e ne",
      "usar os verbos em que eles estão fundidos",
      "entender expressões como non ce la faccio"
    ],
    theory: [
      {
        h: "CI: quatro valores",
        list: [
          "lugar: <em>A Roma ci vado spesso.</em>",
          "<em>a + coisa</em>: <em>Ci penso io.</em>",
          "<em>c'è / ci sono</em>",
          "verbos fundidos: <em>volerci, metterci, farcela, entrarci, tenerci</em>"
        ]
      },
      {
        h: "NE: três valores",
        list: [
          "parte de um todo: <em>Ne voglio due.</em>",
          "<em>di + coisa</em>: <em>Ne parliamo domani.</em>",
          "verbos fundidos: <em>andarsene, fregarsene, accorgersene, intendersene</em>"
        ]
      },
      {
        contrast: "Aqui não tem atalho: o português não tem nem <em>ci</em> nem <em>ne</em>, e esses verbos fundidos não se traduzem peça por peça. <em>Me ne vado</em> é «vou embora»: o sentido sai inteiro, mas nenhuma palavra corresponde ao <em>ne</em>. Vale a pena aprendê-los como blocos, sem analisá-los."
      },
      {
        h: "Verbos que não se traduzem palavra por palavra",
        p: "<em>Ci vogliono due ore</em> («leva duas horas»), <em>Ci metto un'ora</em> («eu levo uma hora»), <em>Non ce la faccio</em> («não dou conta»), <em>Ci tengo</em> («faço questão»), <em>Me ne vado</em> («vou embora»), <em>Non me ne intendo</em> («não entendo do assunto»)."
      },
      {
        trap: "<em>Volerci</em> e <em>metterci</em> não são sinônimos. <em>Ci vogliono due ore</em> fala do tempo objetivo; <em>ci metto due ore</em> fala do tempo que <b>eu</b> levo."
      }
    ],
    grammar: {
      title: "Verbos com ci e ne",
      table: {
        head: ["verbo", "significado", "exemplo"],
        rows: [
          ["volerci", "ser preciso, levar (tempo)", "Ci vuole pazienza."],
          ["metterci", "levar (alguém)", "Ci metto venti minuti."],
          ["farcela", "dar conta", "Non ce la faccio più."],
          ["tenerci", "fazer questão", "Ci tengo molto."],
          ["andarsene", "ir embora, cair fora", "Me ne vado adesso."],
          ["fregarsene", "não estar nem aí", "Se ne frega di tutto."],
          ["intendersene", "entender do assunto", "Non me ne intendo."],
          ["entrarci", "ter a ver", "Che c'entra?"]
        ]
      },
      examples: [
        { tr: "A burocracia italiana exige paciência." },
        { tr: "Quanto tempo você leva de casa até o trabalho?" },
        { tr: "Não consigo terminar até hoje à noite." },
        { tr: "Faço questão que você venha.", note: "+ congiuntivo" },
        { tr: "Vou embora, é tarde." },
        { tr: "Não entendo nada de vinho." }
      ]
    },
    vocab: [
      "ser preciso, levar (tempo)",
      "levar (alguém)",
      "dar conta",
      "fazer questão",
      "ir embora, cair fora",
      "não estar nem aí",
      "entender do assunto",
      "ter a ver",
      "implicar com",
      "paciência",
      "esforço, dedicação",
      "o tempo que leva"
    ],
    exercises: [
      {
        q: "«Ci vogliono due ore» significa:",
        opts: ["Queremos duas horas", "Leva duas horas", "Eu levo duas horas"]
      },
      {
        q: "«Ci metto due ore» significa:",
        opts: ["Leva duas horas em geral", "Eu levo duas horas", "Deixo ali por duas horas"]
      },
      { q: "Complete: «Non ___ la faccio più.» (não aguento mais)" },
      { q: "Complete: «Me ___ vado, è tardi.»" },
      { q: "Relacione.", pairs: ["fazer questão", "entender do assunto", "ter a ver", "não estar nem aí"] },
      { q: "Complete.", tr: "Quanto tempo você leva para chegar? — Leva vinte minutos de metrô." },
      { q: "«Não entendo nada de vinho.»" },
      {
        q: "«Ci tengo che tu venga»: por que congiuntivo?",
        opts: ["Porque tenerci expressa vontade e sentimento", "É um erro", "Porque o ci exige"]
      },
      { tr: "É preciso muita paciência, mas no fim a gente conseguiu." },
      { tr: "Não consigo terminar tudo hoje." }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Gramática",
    title: "As orações relativas",
    objectives: [
      "usar che, cui e il quale",
      "juntar duas frases em uma",
      "expressar posse com cui mais artigo"
    ],
    theory: [
      {
        h: "Che faz quase todo o trabalho",
        p: "<strong>Che</strong> é invariável e vale como sujeito ou como objeto direto: <em>il libro <b>che</b> ho letto</em>, <em>la persona <b>che</b> parla</em>. Não pode vir depois de preposição. É o seu «que», sem mais."
      },
      {
        h: "Cui depois de preposição",
        p: "Quando é preciso uma preposição, <em>che</em> cede o lugar a <strong>cui</strong>: <em>la persona <b>a cui</b> ho scritto</em>, <em>la città <b>in cui</b> vivo</em>, <em>il motivo <b>per cui</b> sono qui</em>. Atenção: no Brasil é comum na fala dizer «a cidade que eu moro», sem a preposição. Em italiano isso não existe: a preposição é obrigatória, e com ela vem <em>cui</em>."
      },
      {
        h: "Cui com artigo = posse",
        p: "<em>Il ragazzo <b>la cui</b> madre è medico</em> («o rapaz cuja mãe é médica»). O artigo concorda com o que é possuído, não com o possuidor, exatamente como o seu «cujo/cuja». A única diferença é que o italiano coloca o artigo antes (<em>la cui</em>), e o português não («cuja», nunca «a cuja»)."
      },
      {
        h: "Il quale: a variante formal",
        p: "<em>il quale, la quale, i quali, le quali</em> substitui <em>che</em> e <em>cui</em> no registro escrito, como o seu «o qual». Mostra o seu valor quando é preciso tirar uma ambiguidade: <em>la sorella di Marco, <b>la quale</b> vive a Roma</em> aponta claramente para a irmã, não para o Marco."
      }
    ],
    grammar: {
      title: "Pronomes relativos",
      table: {
        head: ["forma", "função", "exemplo"],
        rows: [
          ["che", "sujeito / objeto direto", "Il film che ho visto."],
          ["a cui", "objeto indireto", "La persona a cui ho scritto."],
          ["in cui", "lugar, tempo", "L'anno in cui sono nato."],
          ["di cui", "de que, do qual", "Il libro di cui ti parlavo."],
          ["il cui / la cui", "posse", "L'autore il cui libro è famoso."],
          ["il quale", "variante formal", "Il collega, il quale lavora qui."],
          ["chi", "quem", "Chi cerca trova."]
        ]
      },
      examples: [
        { tr: "O livro que estou lendo é maravilhoso." },
        { tr: "A cidade em que cresci é pequena." },
        { tr: "O motivo pelo qual escrevo é simples." },
        { tr: "O colega cuja filha estuda em Roma." },
        { tr: "Quem procura acha.", note: "provérbio" },
        { tr: "Esta é a coisa de que eu te falava." }
      ]
    },
    vocab: [
      "que (sujeito/objeto)",
      "o qual, a qual (depois de preposição)",
      "o qual (formal)",
      "quem",
      "o motivo",
      "crescer, ser criado",
      "o autor",
      "aquilo que",
      "o período",
      "a época",
      "graças ao qual",
      "caso"
    ],
    exercises: [
      { q: "Complete: «Il libro ___ ho letto è bellissimo.»" },
      { q: "Complete: «La città in ___ vivo è piccola.»" },
      { q: "Complete: «La persona a ___ ho scritto non risponde.»" },
      {
        q: "«Il ragazzo la cui madre è medico»: com o que concorda «la»?",
        opts: ["Com o rapaz", "Com a mãe (o que é possuído)", "Com nada"]
      },
      {
        q: "Qual frase está errada?",
        opts: ["La città in cui vivo.", "La città in che vivo.", "La città dove vivo."],
        why: "Che não pode vir depois de preposição."
      },
      {
        q: "Complete os relativos.",
        tr: "O colega que trabalha comigo é a pessoa a quem devo tudo."
      },
      { q: "«O motivo pelo qual escrevo é simples.»" },
      { tr: "Esta é a coisa de que eu te falava." },
      { tr: "O ano em que cheguei à Itália foi o mais difícil." },
      { tr: "A cidade em que cresci é muito pequena." }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Gramática",
    title: "Indefinidos",
    objectives: [
      "usar qualche, alcuni, ogni, ciascuno",
      "distinguir nessuno de niente",
      "construir uma frase com dupla negação"
    ],
    theory: [
      {
        h: "Qualche sempre pede singular",
        p: "<em><b>qualche</b> giorno</em> («uns dias»): o sentido é plural, mas o substantivo vai no singular. O seu sinônimo <em>alcuni/alcune</em> funciona ao contrário: <em>alcuni giorni</em>."
      },
      {
        contrast: "O seu «uns dias» e «alguns dias» estão os dois no plural, então <em>qualche giorno</em> vai dar trabalho: o italiano diz literalmente «algum dia» onde você diz «uns dias». E atenção, porque <em>qualche giorno fa</em> não é «algum dia», e sim «há alguns dias»."
      },
      {
        h: "Ogni e ciascuno",
        p: "<em>Ogni</em> é invariável e sempre singular: <em>ogni giorno</em>, o seu «cada dia». <em>Ciascuno</em> se flexiona como o artigo indefinido e destaca um por um: <em>ciascuno studente</em>."
      },
      {
        h: "As negações",
        p: "<em>Nessuno</em> (ninguém, nenhum), <em>niente / nulla</em> (nada), <em>nemmeno / neanche</em> (nem mesmo). <b>Depois</b> do verbo pedem <em>non</em>: <em>non c'è <b>nessuno</b></em>. Antes do verbo o <em>non</em> desaparece: <em><b>Nessuno</b> è venuto.</em> É exatamente a sua regra: «não tem ninguém» diante de «ninguém veio»."
      },
      {
        tip: "<em>Qualcosa</em> pede o adjetivo com <em>di</em>: <em>qualcosa <b>di</b> bello</em>, onde você diz «algo bonito» sem preposição. Igual em <em>niente di grave</em>. E com infinitivo vai <em>da</em>: <em>qualcosa <b>da</b> mangiare</em>, e não o «para» do seu «algo para comer»."
      }
    ],
    grammar: {
      title: "Os indefinidos",
      table: {
        head: ["forma", "sintaxe", "exemplo"],
        rows: [
          ["qualche", "+ singular", "qualche giorno fa"],
          ["alcuni / alcune", "+ plural", "alcuni amici"],
          ["ogni", "invariável + singular", "ogni settimana"],
          ["ciascuno", "flexionado, singular", "ciascuna proposta"],
          ["qualcuno / nessuno", "para pessoas", "Non c'è nessuno."],
          ["qualcosa / niente", "para coisas", "qualcosa di nuovo"]
        ]
      },
      examples: [
        { tr: "A gente se vê daqui a uns dias." },
        { tr: "Alguns colegas não concordam." },
        { tr: "É a mesma história toda vez." },
        { tr: "Não vi ninguém no escritório." },
        { tr: "Ninguém me avisou.", note: "antes do verbo: sem non" },
        { tr: "Você quer algo para beber?" }
      ]
    },
    vocab: [
      "uns, alguns (+ singular)",
      "alguns",
      "cada",
      "cada um",
      "alguém",
      "ninguém, nenhum",
      "algo",
      "nada",
      "ninguém (em perguntas)",
      "em lugar nenhum",
      "nem mesmo",
      "avisar"
    ],
    exercises: [
      {
        q: "Qual combinação está correta?",
        opts: ["qualche giorni", "qualche giorno", "qualche dei giorni"],
        why: "Qualche sempre pede singular."
      },
      { q: "E aqui?", opts: ["alcuni giorno", "alcuni giorni", "alcuno giorni"] },
      { q: "Complete: «Non c'è ___ in ufficio.» (ninguém)" },
      { q: "Complete: «___ mi ha avvisato.» (ninguém) — no início da frase" },
      { q: "Complete: «Vuoi qualcosa ___ bere?»" },
      { q: "Complete: «Ho sentito qualcosa ___ strano.»" },
      {
        q: "Quais frases estão corretas?",
        opts: ["Non ho visto nessuno.", "Ho visto nessuno.", "Nessuno è venuto.", "Non nessuno è venuto."]
      },
      { q: "Complete.", tr: "Toda vez que ligo, ninguém atende." },
      { tr: "Alguns colegas não concordam, mas ninguém diz isso abertamente." },
      { tr: "A gente se vê daqui a uns dias, te escrevo." }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Teste",
    title: "Teste da unidade 2",
    objectives: ["verificar os pronomes combinados, ci/ne, as relativas e os indefinidos"],
    theory: [{ p: "Dez tarefas. A aprovação é com 70%." }],
    exercises: [
      { q: "«Mi dai il libro?» →", opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."] },
      { q: "«Hai dato il libro a Marco? — Sì, ___ ho dato.»" },
      { q: "«Non ___ la faccio più.»" },
      { q: "«Me ___ vado.»" },
      { q: "«La città in ___ vivo.»" },
      { q: "«Il libro ___ ho letto.»" },
      { q: "Correto:", opts: ["qualche giorni", "qualche giorno", "alcuni giorno"] },
      { q: "«Vuoi qualcosa ___ mangiare?»" },
      { tr: "Expliquei para ele, mas é preciso tempo para entender." },
      { tr: "Te mando assim que puder, agora não estou dando conta." }
    ]
  },
  "unit:b1-u03": {
    title: "A burocracia italiana",
    grammarNote: "linguagem administrativa · documentos · requerimentos formais"
  },
  "lesson:b1-u03-l1": {
    theme: "Viver na Itália",
    title: "Os documentos básicos",
    objectives: [
      "entender para que servem o codice fiscale e a residenza",
      "pedir a emissão de um documento",
      "preencher um formulário simples"
    ],
    theory: [
      {
        h: "O codice fiscale abre todas as portas",
        p: "<strong>Il codice fiscale</strong> é um código fiscal de dezesseis caracteres gerado a partir do nome, do sobrenome e da data e do local de nascimento. Sem ele você não abre uma conta, não assina um aluguel, não compra um chip de celular nem se cadastra com um médico. Quem emite é a <em>Agenzia delle Entrate</em>, na hora e de graça. Faz o papel do seu CPF."
      },
      {
        h: "A residenza não é um endereço",
        p: "<strong>La residenza</strong> é a inscrição formal na prefeitura (<em>comune</em>), algo que não tem equivalente no Brasil. Dela dependem o médico de família, a carteira de motorista, os auxílios e uma longa lista de descontos. Depois que você apresenta o pedido, <em>il vigile</em> (um agente municipal) passa para conferir que você mora ali de verdade."
      },
      {
        h: "Três palavras que você vai ouvir em qualquer guichê",
        list: [
          "<em>la marca da bollo</em> — o selo fiscal, que se compra na tabacaria (<em>tabaccheria</em>) e se cola no requerimento",
          "<em>l'autocertificazione</em> — a autodeclaração que substitui uma certidão; tem valor legal",
          "<em>l'appuntamento</em> — muitas repartições não atendem sem agendamento prévio pela internet"
        ]
      },
      {
        tip: "<em>La tabaccheria</em> lembra um pouco a lotérica brasileira: além de cigarro, vende selos fiscais, passagens de transporte e recarga de celular, e nela se pagam algumas contas."
      }
    ],
    grammar: {
      title: "Linguagem administrativa",
      table: {
        head: ["fórmula", "significado", "onde"],
        rows: [
          ["Il sottoscritto / la sottoscritta", "o abaixo assinado / a abaixo assinada", "requerimentos"],
          ["Si prega di…", "pede-se que…", "instruções"],
          ["Ai sensi dell'art. …", "nos termos do artigo…", "normas"],
          ["In allegato", "em anexo", "formulários"],
          ["Entro e non oltre", "até, no máximo", "prazos"],
          ["Rilasciare / rilascio", "emitir / emissão", "documentos"]
        ]
      },
      examples: [
        { tr: "Gostaria de solicitar o codice fiscale." },
        { tr: "Preciso registrar minha residência neste município." },
        { tr: "É preciso um selo fiscal de dezesseis euros." },
        { tr: "Já agendei pela internet." },
        { tr: "O documento é emitido na hora." },
        { tr: "Preencha o formulário em letra de forma, por favor." }
      ]
    },
    vocab: [
      "código fiscal",
      "registro de residência",
      "prefeitura",
      "cartório de registro civil",
      "formulário",
      "selo fiscal",
      "autodeclaração",
      "emitir (um documento)",
      "guichê",
      "em letra de forma",
      "cartão do sistema de saúde",
      "autorização de residência"
    ],
    culture: {
      title: "Com olhos italianos: sobreviver a uma repartição pública",
      text: "<p>Regra um: <b>leve sempre mais documentos do que o site pede</b>. Cada guichê lê as exigências do seu jeito.</p><p>Regra dois: <b>a autocertificazione é sua aliada</b>. A lei permite substituir muitas certidões por uma autodeclaração, e o funcionário é obrigado a aceitá-la. Vale a pena saber, porque ninguém vai oferecer isso a você.</p><p>Regra três: <b>anote o nome do funcionário</b> que atendeu você. Na visita seguinte isso permite reconstruir o histórico do seu processo.</p>"
    },
    exercises: [
      {
        q: "Para que serve o codice fiscale?",
        opts: [
          "Só para os impostos",
          "Para quase qualquer trâmite: conta bancária, contrato, médico",
          "É o telefone da Receita"
        ]
      },
      { q: "Onde se compra uma marca da bollo?", opts: ["Na prefeitura", "Numa tabacaria", "No banco"] },
      { q: "Complete: «Vorrei ___ il codice fiscale.» (solicitar)" },
      { q: "Complete: «Compili il modulo in ___.» (letra de forma)" },
      { q: "Relacione.", pairs: ["cartório de registro civil", "guichê", "emitir", "formulário"] },
      {
        q: "O que é uma «autocertificazione»?",
        opts: [
          "Uma certidão emitida pela repartição",
          "Uma autodeclaração com valor legal",
          "Uma declaração em cartório"
        ]
      },
      { q: "«Preciso registrar minha residência neste município.»" },
      {
        q: "Complete o pedido no guichê.",
        tr: "Bom dia, gostaria de solicitar o codice fiscale. Já agendei pela internet."
      },
      { tr: "É preciso um selo fiscal de dezesseis euros e uma cópia do documento de identidade." },
      { tr: "Gostaria de solicitar o codice fiscale, trouxe o passaporte." }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Viver na Itália",
    title: "Bancos e contratos",
    objectives: [
      "abrir uma conta bancária",
      "entender as condições básicas de um contrato",
      "perguntar sobre custos e condições"
    ],
    theory: [
      {
        h: "A conta e quanto ela custa",
        p: "<em>Il conto corrente</em> costuma vir com <em>il canone mensile</em>, uma tarifa mensal, parecida com a tarifa de pacote de serviços dos bancos brasileiros. Uma transferência é <strong>il bonifico</strong>, e o número da conta é o <strong>IBAN</strong>, o código no padrão europeu que identifica a conta. <em>Il bancomat</em> significa ao mesmo tempo o caixa eletrônico e o cartão de débito."
      },
      {
        h: "O contrato: palavras que é preciso entender",
        list: [
          "<em>le condizioni</em> — as condições; <em>la clausola</em> — a cláusula",
          "<em>il recesso</em> — a desistência; <em>la disdetta</em> — o cancelamento",
          "<em>la scadenza</em> — o vencimento; <em>il rinnovo automatico</em> — a renovação automática",
          "<em>le spese di gestione</em> — as tarifas de manutenção"
        ]
      },
      {
        h: "Perguntas que vale a pena fazer",
        p: "<em>Quali sono i costi fissi?</em>, <em>C'è un vincolo di durata?</em>, <em>Come posso disdire?</em>, <em>Il rinnovo è automatico?</em>. A renovação automática é muito comum nos contratos italianos e é preciso cancelá-la com aviso prévio, como em muitos planos de telefone e academias."
      },
      {
        tip: "Na assinatura, o funcionário pode pedir que você rubrique cada página (<em>siglare</em>) e assine de novo embaixo das cláusulas (<em>doppia firma</em>). É normal, não é sinal de alarme."
      }
    ],
    grammar: {
      title: "Banco e contrato",
      table: {
        head: ["italiano", "português", "contexto"],
        rows: [
          ["il conto corrente", "conta corrente", "banco"],
          ["il canone mensile", "tarifa mensal", "banco, telefone"],
          ["il bonifico", "transferência", "pagamentos"],
          ["la disdetta", "cancelamento", "contrato"],
          ["il rinnovo automatico", "renovação automática", "contrato"],
          ["il vincolo", "fidelidade, prazo mínimo", "contrato"]
        ]
      },
      examples: [
        { tr: "Gostaria de abrir uma conta corrente." },
        { tr: "Quanto é a tarifa mensal?" },
        { tr: "Preciso fazer uma transferência internacional." },
        { tr: "Tem fidelidade?" },
        { tr: "Como posso cancelar o contrato?" },
        { tr: "Renova automaticamente, a menos que você cancele." }
      ]
    },
    vocab: [
      "conta corrente",
      "transferência",
      "número da conta",
      "caixa eletrônico, cartão de débito",
      "tarifa de assinatura",
      "taxa, comissão",
      "contrato",
      "cláusula",
      "cancelamento",
      "aviso prévio",
      "assinar",
      "fidelidade, prazo mínimo"
    ],
    exercises: [
      { q: "Relacione.", pairs: ["transferência", "cancelamento", "tarifa", "taxa"] },
      {
        q: "«Rinnovo automatico salvo disdetta» significa:",
        opts: [
          "O contrato termina automaticamente",
          "O contrato se renova, a menos que você o cancele",
          "O contrato não pode ser renovado"
        ]
      },
      { q: "Complete: «Vorrei aprire un ___ corrente.»" },
      { q: "Complete: «C'è un ___ di durata?» (fidelidade)" },
      { q: "«Como posso cancelar o contrato?»" },
      {
        q: "No banco.",
        setting: "A mesa de um gerente, com hora marcada.",
        lines: [
          { tr: "Bom dia, em que posso ajudar?" },
          { tr: "Diga que você quer abrir uma conta.", answerTr: "Gostaria de abrir uma conta corrente." },
          { tr: "Claro. O senhor tem codice fiscale e um documento de identidade?" },
          { tr: "Confirme e pergunte sobre a tarifa mensal.", answerTr: "Sim. Quanto é a tarifa mensal?" },
          { tr: "Quatro euros por mês, grátis para quem tem menos de trinta anos." }
        ]
      },
      {
        q: "Complete as perguntas ao gerente.",
        tr: "Quais taxas são cobradas nas transferências? E a renovação é automática?"
      },
      { tr: "Preciso fazer uma transferência internacional." },
      { tr: "A tarifa é de quatro euros por mês, com cartão incluído." },
      { tr: "Gostaria de saber se tem fidelidade." }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Viver na Itália",
    title: "Reclamações e direitos",
    objectives: [
      "fazer uma reclamação pessoalmente e por escrito",
      "citar o contrato ou a lei",
      "subir o tom com educação, mas com firmeza"
    ],
    theory: [
      {
        h: "O que faz uma reclamação funcionar",
        p: "Uma reclamação italiana funciona melhor quando traz quatro coisas: <b>fatos com datas</b>, <b>uma referência ao contrato ou à lei</b>, <b>um pedido concreto</b> e <b>um prazo</b>. A emoção a enfraquece, os dados a reforçam."
      },
      {
        h: "Fórmulas escritas",
        list: [
          "<em>Con la presente segnalo che…</em> — pela presente comunico que…",
          "<em>Come da contratto…</em> — conforme o contrato…",
          "<em>Chiedo pertanto…</em> — solicito, portanto…",
          "<em>In mancanza di riscontro entro X giorni…</em> — na falta de resposta em X dias…"
        ]
      },
      {
        h: "Ferramentas para subir o tom",
        p: "A <em>raccomandata A/R</em> (carta registrada com aviso de recebimento) e a <strong>PEC</strong> (<em>posta elettronica certificata</em>, e-mail com o valor legal de uma carta registrada) são os passos seguintes habituais. A PEC tem o peso que no Brasil teria uma carta com AR ou uma notificação extrajudicial, só que é e-mail e quase todo mundo tem. Associações de consumidores: <em>Altroconsumo</em>, <em>Federconsumatori</em>."
      },
      {
        tip: "A frase <em>Mi riservo di adire le vie legali</em> («reservo-me o direito de tomar as medidas legais cabíveis») é contundente, mas totalmente convencional como fecho. Em italiano não é lida como agressão."
      }
    ],
    grammar: {
      title: "A linguagem das reclamações",
      table: {
        head: ["função", "expressão", "em português"],
        rows: [
          ["comunicar", "Con la presente segnalo che…", "Pela presente comunico que…"],
          ["fundamento", "Come da contratto / ai sensi di legge", "Conforme o contrato / nos termos da lei"],
          ["pedido", "Chiedo il rimborso / la sostituzione.", "Solicito o reembolso / a substituição."],
          ["prazo", "entro quindici giorni", "no prazo de quinze dias"],
          ["subir o tom", "Mi riservo di adire le vie legali.", "Reservo-me o direito de tomar medidas legais."],
          ["pessoalmente", "Vorrei parlare con un responsabile.", "Gostaria de falar com um responsável."]
        ]
      },
      examples: [
        { tr: "O produto chegou danificado." },
        { tr: "Gostaria de fazer uma reclamação." },
        { tr: "Tenho direito ao reembolso em catorze dias." },
        { tr: "Conforme o contrato, o serviço deveria estar ativo desde o dia primeiro." },
        { tr: "Envio a documentação em anexo." },
        { tr: "Fico no aguardo da sua resposta." }
      ]
    },
    vocab: [
      "reclamação",
      "fazer uma reclamação",
      "reembolso",
      "substituição",
      "danificado",
      "com defeito",
      "garantia",
      "responsável",
      "carta registrada",
      "resposta",
      "ter direito a",
      "portanto"
    ],
    exercises: [
      { q: "Relacione.", pairs: ["reembolso", "com defeito", "garantia", "resposta"] },
      { q: "Complete: «Vorrei ___ un reclamo.»" },
      { q: "Complete: «Ho ___ al rimborso.» (tenho direito)" },
      {
        q: "O que é a PEC?",
        opts: ["Um tipo de transferência", "E-mail com valor legal de carta registrada", "Um número de identificação"]
      },
      { q: "«O produto chegou danificado, solicito o reembolso.»" },
      {
        q: "Complete a carta.",
        tr: "Pela presente comunico que o serviço não funciona. Conforme o contrato, solicito o reembolso no prazo de quinze dias."
      },
      { tr: "Gostaria de falar com um responsável." },
      {
        q: "Que elemento reforça mais uma reclamação italiana?",
        opts: [
          "Mostrar o quanto você está irritado",
          "Datas, referência ao contrato e um pedido concreto",
          "Repetir o pedido três vezes"
        ]
      },
      { tr: "Conforme o contrato, o serviço deveria estar ativo desde o dia primeiro do mês." },
      { tr: "Gostaria de fazer uma reclamação: o produto está com defeito." }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Viver na Itália",
    title: "O trabalho e os tipos de contrato",
    objectives: [
      "entender os contratos de trabalho italianos",
      "falar das condições de trabalho",
      "perguntar sobre salário e férias"
    ],
    theory: [
      {
        h: "Tipos de contrato",
        list: [
          "<b>tempo indeterminato</b> — por prazo indeterminado, o que todo mundo quer",
          "<b>tempo determinato</b> — por prazo determinado, com limites para as prorrogações",
          "<b>partita IVA</b> — autônomo: você emite notas e paga as suas próprias contribuições",
          "<b>apprendistato / tirocinio</b> — contrato de aprendizagem ou estágio, normalmente para jovens"
        ]
      },
      {
        h: "O salário: líquido, bruto e o décimo terceiro",
        p: "Os italianos falam do salário como <b>líquido mensal</b> e como <em>RAL</em> (<em>retribuzione annua lorda</em>, o salário bruto anual). Por cima vem <strong>la tredicesima</strong>, que é exatamente o seu décimo terceiro salário, pago em dezembro. Em alguns setores existe ainda <em>la quattordicesima</em>, paga em julho, que não tem equivalente no Brasil e na Itália também não é geral."
      },
      {
        h: "Férias e licenças",
        p: "<em>Le ferie</em> são as férias remuneradas (normalmente 26 dias úteis), <em>i permessi</em> são horas de folga, <em>la malattia</em> é a licença médica. <em>Il CCNL</em> (<em>contratto collettivo nazionale</em>) é a convenção coletiva do setor, que fixa as condições mínimas."
      },
      {
        tip: "Perguntar <em>Qual è la RAL prevista?</em> numa entrevista é completamente normal e esperado. Não é falta de educação."
      }
    ],
    grammar: {
      title: "Trabalho e salário",
      table: {
        head: ["italiano", "português", "nota"],
        rows: [
          ["tempo indeterminato", "contrato por prazo indeterminado", "o mais estável"],
          ["tempo determinato", "contrato por prazo determinado", "com data de término"],
          ["partita IVA", "autônomo", "contribuições próprias"],
          ["la tredicesima", "décimo terceiro salário", "recebido em dezembro"],
          ["le ferie", "férias remuneradas", "dias úteis"],
          ["il CCNL", "convenção coletiva", "condições mínimas"]
        ]
      },
      examples: [
        { tr: "Tenho um contrato por prazo indeterminado." },
        { tr: "Trabalho como autônomo há três anos." },
        { tr: "Qual é o bruto anual deste cargo?" },
        { tr: "Quantos dias de férias são?" },
        { tr: "O período de experiência é de três meses." },
        { tr: "Peço uma licença por motivos pessoais." }
      ]
    },
    vocab: [
      "contrato por prazo indeterminado",
      "trabalho autônomo",
      "salário líquido",
      "salário bruto anual",
      "décimo terceiro",
      "férias remuneradas",
      "licença, horas de folga",
      "período de experiência",
      "entrevista de emprego",
      "currículo",
      "contratar",
      "pedir demissão"
    ],
    exercises: [
      { q: "Relacione.", pairs: ["prazo indeterminado", "décimo terceiro", "férias remuneradas", "período de experiência"] },
      { q: "O que é a RAL?", opts: ["O líquido mensal", "O bruto anual", "Um tipo de contrato"] },
      { q: "Quem paga as contribuições com uma partita IVA?", opts: ["A empresa", "O trabalhador", "Ninguém"] },
      { q: "Complete: «Il ___ di prova è di tre mesi.»" },
      { q: "«Quantos dias de férias são?»" },
      {
        q: "Complete as perguntas da entrevista.",
        tr: "Qual é o bruto anual que vocês oferecem? E quanto dura o período de experiência?"
      },
      { q: "«Licenziarsi» significa:", opts: ["demitir alguém", "pedir demissão", "conseguir um aumento"] },
      { tr: "Estou com contrato por prazo indeterminado há dois anos." },
      { tr: "O décimo terceiro é pago em dezembro junto com o salário do mês." },
      { tr: "Gostaria de saber qual é o bruto anual deste cargo." }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Teste",
    title: "Teste da unidade 3",
    objectives: ["verificar o vocabulário administrativo, bancário e de trabalho"],
    theory: [{ p: "Dez tarefas. A aprovação é com 70%." }],
    exercises: [
      {
        q: "O codice fiscale serve para:",
        opts: ["só os impostos", "quase qualquer trâmite", "viajar"]
      },
      { q: "Uma marca da bollo se compra:", opts: ["na prefeitura", "numa tabacaria", "no banco"] },
      { q: "«Compili il modulo in ___.»" },
      { q: "«Vorrei aprire un ___ corrente.»" },
      { q: "«Vorrei ___ un reclamo.»" },
      { q: "«Ho ___ al rimborso.»" },
      { q: "A RAL é:", opts: ["o líquido mensal", "o bruto anual", "o décimo terceiro"] },
      { q: "Relacione.", pairs: ["cancelamento", "transferência", "férias remuneradas", "cartório de registro civil"] },
      { tr: "Para registrar a residência são necessários um documento de identidade e um contrato de aluguel." },
      { tr: "Gostaria de solicitar o codice fiscale e registrar minha residência." }
    ]
  },
  "unit:b1-u04": { title: "Mídia e argumentação", grammarNote: "discurso indireto · conectivos · a linguagem da imprensa" },
  "lesson:b1-u04-l1": {
    theme: "Mídia",
    title: "O discurso indireto",
    objectives: [
      "passar uma fala para o discurso indireto",
      "deslocar os tempos corretamente",
      "mudar as palavras de tempo e lugar"
    ],
    theory: [
      {
        h: "O deslocamento dos tempos",
        p: "Quando o verbo introdutor está no passado, os tempos da fala citada recuam um passo: <em>presente → imperfetto</em>, <em>passato prossimo → trapassato</em>, <em>futuro → condizionale passato</em>. Os dois primeiros vão soar familiares: são iguais aos seus."
      },
      {
        contrast: "O terceiro não. Você diz «disse que <b>viria</b>», com o futuro do pretérito simples. O italiano exige o <b>condicional composto</b>: <em>Ha detto che <b>sarebbe venuto</b></em>, literalmente «disse que teria vindo». «Ha detto che verrebbe» é agramatical. É o erro mais persistente de quem fala português em todo o nível B1, justamente porque a sua forma parece encaixar."
      },
      {
        h: "As palavras de tempo e lugar também mudam",
        p: "<em>oggi → quel giorno</em>, <em>ieri → il giorno prima</em>, <em>domani → il giorno dopo</em>, <em>qui → lì</em>, <em>questo → quello</em>, <em>adesso → allora</em>. Sem isso o relato fica incoerente, igual em português."
      },
      {
        h: "Ordens e perguntas",
        p: "Um imperativo vira <em>di</em> + infinitivo: <em>«Vieni!» → Mi ha detto di venire.</em> Uma pergunta de sim ou não leva <em>se</em>: <em>«Vieni?» → Mi ha chiesto se venivo.</em>"
      }
    ],
    grammar: {
      title: "Transformações do discurso indireto",
      table: {
        head: ["direto", "indireto", "exemplo"],
        rows: [
          ["presente", "imperfetto", "«Lavoro» → Disse che lavorava."],
          ["passato prossimo", "trapassato", "«Ho finito» → Disse che aveva finito."],
          ["futuro", "condizionale passato", "«Verrò» → Disse che sarebbe venuto."],
          ["imperativo", "di + infinitivo", "«Vieni!» → Mi disse di venire."],
          ["pergunta sim/não", "se + oração", "«Vieni?» → Mi chiese se venivo."],
          ["cong. presente", "cong. imperfetto", "«Penso che sia» → Disse che pensava che fosse."]
        ]
      },
      examples: [
        { tr: "O Marco disse que estava cansado." },
        { tr: "Ele me disse que chegaria no dia seguinte." },
        { tr: "Perguntou se podia ajudá-lo." },
        { tr: "Ele me disse para não me preocupar." },
        { tr: "Explicou que já tinha tentado." },
        { tr: "Acrescentou que naquele dia era impossível." }
      ]
    },
    vocab: [
      "dizer que",
      "perguntar se",
      "explicar",
      "acrescentar",
      "responder",
      "sustentar, afirmar",
      "declarar",
      "desmentir",
      "o dia anterior / seguinte",
      "então",
      "naquele momento",
      "segundo o que foi dito"
    ],
    exercises: [
      {
        q: "«Verrò domani» no discurso indireto depois de um passado:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe domani."
        ]
      },
      { q: "«Lavoro molto» → «Ha detto che ___ molto.»" },
      { q: "«Ho finito» → «Ha detto che ___ finito.»" },
      { q: "«Vieni!» → «Mi ha detto ___ venire.»" },
      { q: "«Vieni?» → «Mi ha chiesto ___ venivo.»" },
      { q: "Transforme.", tr: "«Te ligo amanhã» → Ele me disse que me ligaria no dia seguinte." },
      {
        q: "Relacione as palavras de tempo e lugar deslocadas.",
        pairs: ["naquele dia", "o dia anterior", "o dia seguinte", "lá"]
      },
      { q: "«Ele me disse para não me preocupar.»" },
      { tr: "Explicou que já tinha tentado várias vezes sem sucesso." },
      { tr: "Ele me disse que chegaria no dia seguinte." }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Mídia",
    title: "Ler a imprensa",
    objectives: [
      "entender como se constrói uma notícia",
      "detectar a linguagem da informação não confirmada",
      "resumir um texto com as suas palavras"
    ],
    theory: [
      {
        h: "O condicional jornalístico",
        p: "A mídia italiana usa o condicional para a informação <b>não confirmada</b>: <em>Il ministro <b>avrebbe</b> firmato l'accordo</em> significa «ao que parece o ministro assinou, mas não está confirmado». Não é o jornalista especulando, é um sinal de que a fonte não é oficial."
      },
      {
        contrast: "Esse recurso você já tem: a imprensa brasileira escreve «o ministro teria assinado» exatamente com o mesmo valor. É um dos poucos pontos deste nível em que você pode ler sem traduzir. Só tome cuidado para não levá-lo para a fala: em italiano, como em português, fora do jornalismo soa estranho."
      },
      {
        h: "Como se diagrama um artigo",
        p: "<em>Il titolo</em> (o título, a manchete), <em>l'occhiello</em> (o chapéu, o antetítulo), <em>il sommario</em> (a linha fina), <em>il corpo</em> (o corpo do texto), <em>la didascalia</em> (a legenda da foto). Os títulos italianos muitas vezes são elípticos e sem verbo, como os nossos."
      },
      {
        h: "A nominalização",
        p: "A linguagem da imprensa transforma verbos em substantivos: <em>hanno approvato la legge</em> → <em>l'approvazione della legge</em>. Isso comprime o texto e o torna duro no começo; reconhecer o mecanismo ajuda muito."
      },
      {
        tip: "Os grandes jornais: <em>Corriere della Sera</em>, <em>la Repubblica</em>, <em>Il Sole 24 Ore</em> (economia), <em>Il Post</em> (fácil de ler, bom ponto de partida para quem está aprendendo)."
      }
    ],
    grammar: {
      title: "A linguagem da imprensa",
      table: {
        head: ["traço", "exemplo", "significado"],
        rows: [
          ["condicional", "Avrebbe dichiarato che…", "teria declarado"],
          ["nominalização", "l'approvazione della riforma", "a aprovação da reforma"],
          ["voz passiva", "La legge è stata approvata.", "a lei foi aprovada"],
          ["título elíptico", "Governo verso la crisi", "governo rumo à crise"],
          ["fontes", "secondo fonti vicine a…", "segundo fontes próximas a…"],
          ["números", "in calo / in aumento", "em queda / em alta"]
        ]
      },
      examples: [
        { tr: "Segundo fontes internas, a empresa já teria decidido." },
        { tr: "A reforma foi aprovada com 210 votos a favor." },
        { tr: "Os dados de emprego estão em alta." },
        { tr: "O artigo sustenta que o problema é estrutural." },
        { tr: "O jornal desmentiu a notícia." },
        { tr: "Em resumo: a questão central é o financiamento." }
      ]
    },
    vocab: [
      "jornal diário",
      "semanário",
      "notícia",
      "fonte",
      "desmentir",
      "sustentar, afirmar",
      "em alta / em queda",
      "reportagem investigativa",
      "editorial",
      "manchete",
      "resumir",
      "confiável"
    ],
    exercises: [
      {
        q: "«Il ministro avrebbe firmato l'accordo» significa:",
        opts: [
          "O ministro assinou o acordo",
          "Ao que parece o ministro assinou, sem confirmação",
          "O ministro assinaria se pudesse"
        ]
      },
      {
        q: "«L'approvazione della legge» é uma nominalização de:",
        opts: ["approvare la legge", "la legge approvata", "legalmente"]
      },
      { q: "Complete: «I dati sono in ___.» (em alta)" },
      { q: "Complete: «Il giornale ha ___ la notizia.» (desmentido)" },
      { q: "Relacione.", pairs: ["jornal diário", "fonte", "reportagem investigativa", "confiável"] },
      {
        q: "«Secondo fonti vicine al governo» indica:",
        opts: ["informação oficial", "informação não oficial", "a opinião da redação"]
      },
      {
        q: "Complete a frase jornalística.",
        tr: "Segundo fontes internas a empresa já tinha decidido, mas o porta-voz desmentiu a notícia."
      },
      { q: "«A reforma foi aprovada na semana passada.»" },
      { tr: "Segundo o jornal, o governo já teria preparado a sua resposta." },
      { tr: "O artigo sustenta que o problema é estrutural." }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Comunicação",
    title: "Sustentar uma argumentação",
    objectives: [
      "ligar argumentos com conectivos",
      "construir um discurso organizado",
      "evitar a monotonia do «e… e… e…»"
    ],
    theory: [
      {
        h: "Um conectivo anuncia o que vem",
        p: "Sem conectivos um texto é uma lista de frases. <em>Inoltre</em> anuncia um acréscimo, <em>tuttavia</em> uma virada, <em>quindi</em> uma conclusão, <em>infatti</em> uma justificativa. Escolher o conectivo faz parte do argumento, não é enfeite."
      },
      {
        h: "Pares fáceis de confundir",
        list: [
          "<em>infatti</em> (de fato, confirma) diante de <em>invece</em> (em vez disso, contrasta)",
          "<em>anzi</em> (aliás, reforça ou corrige) diante de <em>però</em> (mas)",
          "<em>quindi</em> (então, conclui) diante de <em>allora</em> (então, também muleta)",
          "<em>comunque</em> (de qualquer forma) diante de <em>tuttavia</em> (no entanto, formal)"
        ]
      },
      {
        trap: "Três conectivos que enganam pelo som: <em>infatti</em> não introduz nada novo nem contrário, ele <b>confirma</b> o que foi dito («de fato», «com efeito»); <em>anzi</em> não é «antes», e sim «aliás» ou «pelo contrário»; e <em>allora</em> não é «agora», e sim «então». Traduza pela função, não pela semelhança."
      },
      {
        h: "Um esqueleto para uma argumentação breve",
        p: "<em>Anzitutto…</em> (antes de tudo) → <em>Inoltre…</em> (além disso) → <em>Tuttavia…</em> (no entanto) → <em>In conclusione…</em>. Esse esqueleto basta para a parte oral de um exame B1 e para um texto escrito curto."
      }
    ],
    grammar: {
      title: "Conectivos por função",
      table: {
        head: ["função", "conectivos", "exemplo"],
        rows: [
          ["acréscimo", "inoltre, in più, per di più", "Inoltre il prezzo è alto."],
          ["contraste", "però, tuttavia, invece, anzi", "Tuttavia i dati dicono altro."],
          ["causa", "perché, poiché, siccome, dato che", "Siccome piove, restiamo."],
          ["consequência", "quindi, perciò, dunque, pertanto", "Quindi ho deciso di partire."],
          ["explicação", "cioè, ovvero, in altre parole", "Cioè, non è possibile."],
          ["fecho", "insomma, in conclusione", "Insomma, non conviene."]
        ]
      },
      examples: [
        { tr: "Antes de tudo, o custo é alto demais." },
        { tr: "Além disso, não temos tempo suficiente." },
        { tr: "No entanto, existe uma alternativa." },
        { tr: "O projeto é complexo, então são necessários mais recursos." },
        { tr: "Não é caro, pelo contrário, compensa." },
        { tr: "Em conclusão, proponho adiar." }
      ]
    },
    vocab: [
      "antes de tudo",
      "além disso",
      "no entanto",
      "em vez disso",
      "aliás; pelo contrário",
      "então, portanto",
      "por conseguinte",
      "ou seja",
      "de fato",
      "por outro lado",
      "em conclusão",
      "de qualquer forma"
    ],
    exercises: [
      { q: "«Non è caro, ___ è conveniente.» (pelo contrário)", opts: ["però", "anzi", "invece"] },
      { q: "«Il progetto è complesso, ___ servono più risorse.»", opts: ["perciò", "invece", "cioè"] },
      { q: "Complete: «___ il costo è troppo alto.» (antes de tudo)" },
      { q: "Complete: «___, propongo di rimandare.» (em conclusão)" },
      { q: "Relacione conectivo e função.", pairs: ["acréscimo", "contraste", "consequência", "explicação"] },
      {
        q: "Construa o argumento.",
        tr: "Antes de tudo, o preço é alto. Além disso, não temos tempo. Então proponho adiar."
      },
      {
        q: "Qual conectivo pertence ao registro escrito e não ao coloquial?",
        opts: ["comunque", "pertanto", "allora"]
      },
      { tr: "No entanto, existe uma alternativa que vale a pena considerar." },
      { tr: "Primeiro o custo, depois os prazos: em conclusão, não compensa." },
      { tr: "Por um lado é verdade, por outro os dados dizem o contrário." }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Comunicação",
    title: "Uma intervenção mais longa",
    objectives: [
      "construir uma resposta de dois minutos sobre um tema",
      "apoiar uma opinião com um exemplo e com dados",
      "fechar com uma conclusão"
    ],
    theory: [
      {
        h: "Uma estrutura que sempre funciona",
        list: [
          "<b>tese</b>: <em>Secondo me…</em> / <em>Ritengo che…</em>",
          "<b>argumento 1 + exemplo</b>: <em>Anzitutto… Per esempio…</em>",
          "<b>argumento 2</b>: <em>Inoltre…</em>",
          "<b>contra-argumento e resposta</b>: <em>C'è chi sostiene che… Tuttavia…</em>",
          "<b>conclusão</b>: <em>In conclusione…</em>"
        ]
      },
      {
        h: "Conceder um ponto deixa você mais forte",
        p: "Uma resposta que concede algo ao outro lado antes de rebatê-lo soa mais sólida do que uma unilateral. A fórmula: <em>È vero che…, tuttavia…</em>, ou <em>Capisco chi dice che…, però…</em>"
      },
      {
        h: "As muletas ganham tempo",
        p: "<em>Diciamo che…</em>, <em>In un certo senso…</em>, <em>Come dire…</em>, <em>Se ci pensi…</em>. Não são enchimento: mantêm você fluente enquanto procura uma palavra. Os examinadores as contam como estratégia comunicativa."
      },
      {
        tip: "Não traduza frase por frase a partir do português. Construa frases italianas mais simples e una-as com conectivos: fica mais fluente do que uma versão fiel de uma frase complicada em português."
      }
    ],
    grammar: {
      title: "O esqueleto de uma resposta",
      table: {
        head: ["fase", "fórmula", "em português"],
        rows: [
          ["tese", "Ritengo che… / Secondo me…", "Considero que… / Na minha opinião…"],
          ["argumento", "Anzitutto… / Inoltre…", "Antes de tudo… / Além disso…"],
          ["exemplo", "Per esempio… / Basti pensare a…", "Por exemplo… / Basta pensar em…"],
          ["contra-argumento", "C'è chi sostiene che…", "Há quem sustente que…"],
          ["resposta", "Tuttavia… / Va detto però che…", "No entanto… / É preciso dizer, porém, que…"],
          ["conclusão", "In conclusione… / Per questo…", "Em conclusão… / Por isso…"]
        ]
      },
      examples: [
        { tr: "Considero que o home office é útil, mas não para todo mundo." },
        { tr: "Antes de tudo, reduz o tempo de deslocamento." },
        { tr: "Basta pensar em quem mora na periferia." },
        { tr: "Há quem sustente que reduz a colaboração." },
        { tr: "É preciso dizer, porém, que depende da organização." },
        { tr: "Em conclusão, a solução híbrida me parece a mais equilibrada." }
      ]
    },
    vocab: [
      "considerar, julgar",
      "sustentar, afirmar",
      "basta pensar em",
      "é preciso dizer que",
      "há quem diga que",
      "em certo sentido",
      "digamos que",
      "equilibrado",
      "tema, assunto",
      "vantagem / desvantagem",
      "a longo prazo",
      "vale a pena"
    ],
    exercises: [
      { q: "Complete: «___ che il problema sia strutturale.» (considero)" },
      { q: "Complete: «C'è ___ sostiene il contrario.» (há quem)" },
      { q: "Depois de «ritengo che» vem:", opts: ["indicativo", "congiuntivo", "o infinitivo"] },
      {
        q: "Relacione.",
        pairs: ["basta pensar em", "é preciso dizer", "a longo prazo", "vale a pena"]
      },
      {
        q: "Complete a resposta.",
        tr: "Considero que o trabalho híbrido é a melhor solução. Antes de tudo, reduz custos. No entanto, depende do setor."
      },
      { q: "«É preciso dizer, porém, que depende da organização.»" },
      { tr: "Em conclusão, a solução híbrida me parece a mais equilibrada." },
      {
        q: "Por que vale a pena incluir um contra-argumento?",
        opts: [
          "Para alongar a resposta",
          "Porque a resposta soa mais sólida e mais madura",
          "Porque a gramática exige"
        ]
      },
      { tr: "Há quem sustente que reduz a colaboração, mas os dados não confirmam isso." },
      { tr: "Considero que vale a pena tentar, pelo menos durante seis meses." }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Exame",
    title: "Exame final de B1",
    objectives: ["verificar o congiuntivo, os pronomes, o discurso indireto e a argumentação"],
    theory: [{ p: "Doze tarefas de todo o nível. A aprovação é com 70%." }],
    exercises: [
      {  },
      { q: "«Penso che tu ___ ragione.»" },
      { q: "«Benché ___ tardi, esco.»" },
      { q: "«Hai dato il libro a Marco? — Sì, ___ ho dato.»" },
      { q: "«Non ___ la faccio più.»" },
      { q: "«La città in ___ vivo.»" },
      {
        q: "«Verrò domani» → discurso indireto:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe."
        ]
      },
      {
        q: "«Il ministro avrebbe firmato» significa:",
        opts: ["assinou com certeza", "ao que parece assinou", "assinaria"]
      },
      { q: "«___, propongo di rimandare.» (em conclusão)" },
      { q: "«Não acho que tenham entendido o problema.»" },
      { tr: "Ele me disse que passaria no dia seguinte, mas não veio." },
      { tr: "Acho que é uma boa solução, embora não perfeita." }
    ]
  }
});
