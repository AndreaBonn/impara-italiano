/* ============================================================
   Texto na língua do estudante (pt, português do Brasil) para data/core/c2-01.js
   As chaves apontam para os id da camada neutra; os arrays são
   combinados por índice, então o comprimento deve coincidir com core.
   Quem confere é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:c2-u01": {
    title: "Particípios e perífrases verbais",
    grammarNote: "particípio presente e passado · perifrasi verbali · formas implícitas"
  },
  "lesson:c2-u01-l1": {
    theme: "Gramática avançada",
    title: "O particípio presente: três vidas",
    objectives: [
      "distinguir o uso adjetival, o nominal e o verbal",
      "reconhecer o particípio presente nos textos jurídicos",
      "não abusar dele na fala"
    ],
    theory: [
      {
        h: "Quase morto como verbo, bem vivo como vocabulário",
        p: "O particípio presente em <em>-ante / -ente</em> perdeu sua função verbal no italiano moderno, mas deixou centenas de adjetivos e substantivos: <em>brillante, interessante, insegnante, cantante, dirigente, presidente, studente</em>. Todos são antigos particípios."
      },
      {
        contrast: "O português fez o mesmo caminho e no mesmo grau: estudante, cantor, dirigente, presidente também são particípios presentes fossilizados, e o uso verbal também sobrevive quase só no registro jurídico («o dinheiro proveniente de», «os requerentes»). Já <em>gli aventi diritto</em> não tem decalque direto: em português se diz «os beneficiários» ou «quem tem direito». No resto, você lê quase sem traduzir."
      },
      {
        h: "O uso verbal: direito e administração",
        p: "<em>Il denaro <b>derivante</b> dalle offerte sarà investito.</em> Aqui <em>derivante</em> substitui uma oração relativa, <em>che deriva</em>. A construção sobrevive na escrita jurídica, técnica e científica; em qualquer outro lugar soa artificial."
      },
      {
        h: "Como ler",
        p: "Quando você encontrar um <em>-ante/-ente</em> num texto jurídico, transforme-o em relativa na hora: <em>i soggetti <b>richiedenti</b></em> = <em>i soggetti che richiedono</em>. É o jeito mais rápido de desmontar uma frase administrativa longa."
      },
      {
        trap: "Nem toda palavra em <em>-ente</em> é um particípio. <em>Paziente</em>, <em>presente</em>, <em>parente</em> hoje são substantivos ou adjetivos por direito próprio e não se deixam desmontar numa relativa. <em>Parente</em>, aliás, significa o mesmo que em português: um familiar."
      }
    ],
    grammar: {
      title: "Particípio presente",
      table: {
        head: ["forma", "uso", "exemplo"],
        rows: [
          ["brillante", "adjetivo", "una carriera brillante"],
          ["insegnante", "substantivo", "un'insegnante di liceo"],
          ["derivante", "verbal", "il denaro derivante dalle offerte"],
          ["richiedente", "substantivo + verbal", "i soggetti richiedenti"],
          ["seguente", "adjetivo", "il giorno seguente"],
          ["proveniente", "verbal", "merci provenienti dall'estero"]
        ]
      },
      examples: [
        { tr: "Devem ser anexados os documentos comprobatórios do requisito." },
        { tr: "Os valores resultantes do balanço foram conferidos." },
        { tr: "Um discurso convincente, mas sem números." },
        { tr: "Os passageiros procedentes do exterior devem preencher o formulário." },
        { tr: "Foi uma escolha perdedora desde o início." },
        { tr: "Os beneficiários receberão uma notificação.", note: "«aventi diritto» é uma fórmula jurídica fixa" }
      ]
    },
    vocab: [
      "comprobatório, que comprova",
      "resultante",
      "procedente de",
      "requerente",
      "beneficiário, quem tem direito",
      "convincente",
      "seguinte",
      "anterior",
      "vigente",
      "requisito",
      "balanço, orçamento",
      "carente de"
    ],
    exercises: [
      {
        q: "«Il denaro derivante dalle offerte» pode ser substituído por:",
        opts: ["il denaro che deriva dalle offerte", "il denaro derivato", "il denaro per derivare"]
      },
      { q: "«Gli aventi diritto» são:", opts: ["os que têm razão", "os beneficiários, quem tem direito", "os proprietários"] },
      {
        q: "Transforme em relativa: «i passeggeri provenienti dall'estero» → «i passeggeri ___ provengono dall'estero»"
      },
      { q: "Associe.", pairs: ["comprobatório", "resultante", "vigente", "carente de"] },
      {
        q: "Em que registro o particípio presente continua sendo verbal?",
        opts: ["na fala coloquial", "nos textos jurídicos e técnicos", "na poesia"]
      },
      {
        q: "Quais vêm de um particípio presente?",
        opts: ["insegnante", "tavolo", "cantante", "dirigente"]
      },
      {
        q: "Complete o texto administrativo.",
        tr: "Os requerentes anexam ao requerimento os documentos comprobatórios do requisito."
      },
      { q: "«Os valores resultantes do balanço foram conferidos.»" },
      { tr: "Os beneficiários receberão uma notificação no prazo de trinta dias." },
      { tr: "Um discurso convincente, mas sem números concretos." }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Gramática avançada",
    title: "O particípio passado nas orações reduzidas",
    objectives: [
      "montar uma construção absoluta com particípio",
      "manter certa a concordância do particípio",
      "condensar o texto escrito"
    ],
    theory: [
      {
        h: "A construção absoluta",
        p: "<em><b>Finita la riunione</b>, siamo usciti.</em> Um particípio passado com substantivo próprio forma uma oração reduzida de valor temporal ou causal. O substantivo vem <b>depois</b> do particípio, e o particípio concorda com ele em gênero e número."
      },
      {
        contrast: "É a sua oração reduzida de particípio ao pé da letra: «terminada a reunião, saímos», «lido o contrato, assinei», «vista a situação». Coincidem até a ordem das palavras, a concordância e o registro administrativo em que ela mais vive. De todo o nível C2, este é o ponto que menos trabalho vai te dar."
      },
      {
        h: "Com verbos transitivos e intransitivos",
        p: "Transitivo: <em>Letto il contratto, ho firmato.</em> Intransitivo com <em>essere</em>: <em>Partito il treno, siamo tornati a casa.</em> A concordância é obrigatória nos dois casos."
      },
      {
        h: "Reforços",
        p: "<em>Una volta finita la riunione…</em>, <em>Appena arrivati…</em>, <em>Terminati i lavori…</em>. Acrescentar <em>una volta</em> ou <em>appena</em> fixa a relação temporal e soa mais natural, como o seu «uma vez terminada»."
      },
      {
        trap: "Com verbo transitivo, o nome da construção absoluta é o <b>objeto</b>, não o sujeito: <em>Finito il lavoro, sono uscito</em> (eu terminei; <em>il lavoro</em> é o que foi terminado). Com intransitivo, o sujeito pode ser o mesmo da principal: <em>Arrivati a casa, abbiamo cenato</em>. O particípio concorda sempre com esse nome."
      }
    ],
    grammar: {
      title: "Participio assoluto",
      table: {
        head: ["construção", "equivalente desenvolvido", "valor"],
        rows: [
          ["Finita la riunione…", "Quando la riunione finì…", "temporal"],
          ["Letto il contratto…", "Dopo aver letto il contratto…", "temporal"],
          ["Partito il treno…", "Dopo che il treno fu partito…", "temporal"],
          ["Vista la situazione…", "Poiché la situazione è tale…", "causal"],
          ["Una volta ottenuto il visto…", "Quando avrà ottenuto il visto…", "condicional-temporal"],
          ["Fatte le dovute verifiche…", "Dopo aver fatto le verifiche…", "administrativo"]
        ]
      },
      examples: [
        { tr: "Vista a urgência, seguimos em frente sem esperar." },
        { tr: "Uma vez terminadas as obras, a rua foi reaberta." },
        { tr: "Uma vez recebida a confirmação, poderá partir." },
        { tr: "Feitas as devidas verificações, o pedido foi deferido." },
        { tr: "Uma vez lá, percebemos o erro." },
        { tr: "Excluídos os custos fixos, o balanço é positivo." }
      ]
    },
    vocab: [
      "vista a urgência",
      "terminar, concluir",
      "reabrir",
      "deferir um pedido",
      "as devidas verificações",
      "excluir",
      "destino",
      "perceber, dar-se conta",
      "uma vez + particípio",
      "assim que + particípio",
      "premissa, condição prévia",
      "previamente"
    ],
    exercises: [
      { q: "Acerte a concordância: «Terminat___ i lavori, la strada è stata riaperta.»" },
      { q: "Acerte a concordância: «Finit___ la riunione, siamo usciti.»" },
      { q: "«Vista la situazione» tem:", opts: ["valor temporal", "valor causal", "valor condicional"] },
      {
        q: "Onde fica o substantivo numa construção absoluta?",
        opts: ["antes do particípio", "depois do particípio", "no fim da frase"]
      },
      {
        q: "Monte as construções absolutas.",
        tr: "Lido o contrato, assinei. Excluídos os custos fixos, o balanço é positivo."
      },
      { q: "«Uma vez recebida a confirmação, poderá partir.»" },
      { tr: "Uma vez lá, percebemos o erro." },
      {
        q: "Por que acrescentar «una volta» antes do particípio?",
        opts: ["pelo ritmo", "para fixar a relação temporal", "porque a gramática exige"]
      },
      { tr: "Feitas as devidas verificações, o pedido foi deferido." },
      { tr: "Vista a urgência, seguimos em frente sem esperar mais confirmações." }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Gramática avançada",
    title: "As perífrases verbais",
    objectives: [
      "reconhecer as perífrases aspectuais, modais e de gerúndio",
      "precisar a fase de uma ação",
      "usar va + particípio e ho da + infinitivo"
    ],
    theory: [
      {
        h: "Uma perífrase acrescenta um aspecto que o tempo verbal não traz",
        p: "O italiano não tem formas próprias para «estou prestes a começar», «estou terminando», «vai crescendo aos poucos». As perífrases fazem esse trabalho: <em>sto per partire</em>, <em>sto finendo</em>, <em>va crescendo</em>."
      },
      {
        h: "Aspectuais",
        list: [
          "<em>stare per + infinitivo</em> — estar prestes a",
          "<em>essere sul punto di</em> — estar a ponto de",
          "<em>accingersi a</em> — dispor-se a (registro alto)",
          "<em>cominciare / iniziare a</em>, <em>continuare / seguitare a</em>, <em>smettere / finire di</em>",
          "<em>stare + gerundio</em> — em andamento"
        ]
      },
      {
        contrast: "Quase toda a lista é sua: «estar prestes a», «estar a ponto de», «dispor-se a», «começar a», «continuar + gerúndio». E sobretudo <em>va crescendo</em> é o seu «vai crescendo», com o mesmo verbo de movimento e a mesma nuance de progressão gradual. Justamente por isso é preciso separar bem os dois usos de <em>andare</em>: <em>va crescendo</em> é progressão e você reconhece, <em>va rivisto</em> é obrigação e não tem equivalente com «ir»."
      },
      {
        h: "Modais",
        p: "<em>Il compito <b>va</b> rivisto</em> (é preciso revisá-lo), <em><b>Ho da</b> studiare</em> (tenho que estudar), <em><b>C'è da</b> aspettare</em> (é preciso esperar), <em><b>Sarebbe da</b> rifare</em> (seria preciso refazer)."
      },
      {
        h: "A de gerúndio na escrita",
        p: "<em>Il fenomeno <b>va crescendo</b></em> é <em>andare</em> + gerúndio, típica do registro escrito. Não confunda com <em>va rivisto</em>, em que <em>andare</em> expressa obrigação: são duas perífrases diferentes com o mesmo verbo."
      }
    ],
    grammar: {
      title: "Catálogo de perífrases",
      table: {
        head: ["tipo", "construção", "significado"],
        rows: [
          ["aspectual", "sto per partire", "estou prestes a sair"],
          ["aspectual", "sono sul punto di rinunciare", "estou a ponto de desistir"],
          ["aspectual", "mi accingo a rispondere", "disponho-me a responder"],
          ["progressiva", "sto scrivendo", "estou escrevendo agora"],
          ["progressiva", "il fenomeno va crescendo", "o fenômeno vai crescendo"],
          ["modal", "il testo va rivisto", "é preciso revisar o texto"],
          ["modal", "ho da fare", "tenho coisas a fazer"],
          ["modal", "c'è da aspettare", "é preciso esperar"]
        ]
      },
      examples: [
        { tr: "Estou prestes a sair, te ligo depois." },
        { tr: "Estava a ponto de desistir quando chegou a resposta." },
        { tr: "O número de pedidos vai aumentando mês a mês." },
        { tr: "Este capítulo precisa ser reescrito inteiro." },
        { tr: "Ainda há muito a fazer antes do prazo." },
        { tr: "Disponho-me agora a apresentar os resultados." }
      ]
    },
    vocab: [
      "estar prestes a",
      "estar a ponto de",
      "dispor-se a",
      "prosseguir (literário)",
      "ir acontecendo aos poucos",
      "precisar ser feito",
      "ter que fazer",
      "ser preciso fazer",
      "desistir, renunciar",
      "expor, apresentar",
      "por inteiro",
      "mês a mês"
    ],
    exercises: [
      {
        q: "«Il testo va rivisto» significa:",
        opts: ["o texto vai revisado", "é preciso revisar o texto", "o texto está sendo revisado"]
      },
      {
        q: "«Il fenomeno va crescendo» significa:",
        opts: ["é preciso aumentar o fenômeno", "o fenômeno vai crescendo", "o fenômeno vai crescer"]
      },
      { q: "Complete: «___ per uscire, ti richiamo dopo.» (estou prestes a sair)" },
      { q: "Complete: «C'è ancora molto ___ fare.» (a fazer)" },
      { q: "Associe.", pairs: ["dispor-se a", "estar a ponto de", "ter que fazer", "prosseguir"] },
      {
        q: "Qual é a diferença entre «va rivisto» e «va crescendo»?",
        opts: ["Nenhuma", "O primeiro expressa obrigação, o segundo uma progressão gradual", "O primeiro é um futuro"]
      },
      { q: "Complete as perífrases.", tr: "Eu estava a ponto de desistir, mas o número de pedidos vai aumentando." },
      { q: "«Este capítulo precisa ser reescrito inteiro.»" },
      { tr: "Disponho-me agora a apresentar os resultados do estudo." },
      { tr: "Estava a ponto de desistir quando chegou a resposta." }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Teste",
    title: "Teste da unidade 1",
    objectives: ["verificar os particípios e as perífrases verbais"],
    theory: [{ p: "Dez tarefas. Aprova-se com 70%." }],
    exercises: [
      { q: "«Gli aventi diritto»:", opts: ["os que têm razão", "os beneficiários, quem tem direito", "os proprietários"] },
      { q: "«i passeggeri provenienti dall'estero» → «i passeggeri ___ provengono…»" },
      { q: "Concordância: «Terminat___ i lavori…»" },
      { q: "Concordância: «Finit___ la riunione…»" },
      { q: "«Vista la situazione» tem:", opts: ["valor temporal", "valor causal", "valor condicional"] },
      { q: "«Il testo va rivisto»:", opts: ["vai revisado", "é preciso revisá-lo", "está sendo revisado"] },
      { q: "«Il fenomeno va crescendo»:", opts: ["é preciso aumentá-lo", "vai crescendo", "vai crescer"] },
      { q: "«C'è molto ___ fare.»" },
      { tr: "Feitas as devidas verificações, o projeto ainda precisa ser revisado." },
      { tr: "Uma vez recebida a confirmação, seguiremos em frente sem demora." }
    ]
  },
  "unit:c2-u02": {
    title: "Plurais e formação de palavras",
    grammarNote: "plurais duplos · compostos · alteração · adjetivos eruditos"
  },
  "lesson:c2-u02-l1": {
    theme: "Vocabulário avançado",
    title: "O plural duplo",
    objectives: [
      "distinguir os dois plurais de um mesmo substantivo",
      "escolher o correto conforme o significado",
      "evitar os deslizes mais comuns"
    ],
    theory: [
      {
        h: "Um singular, dois plurais",
        p: "Uma boa dúzia de substantivos masculinos tem dois plurais: um regular em <em>-i</em> (masculino) e outro irregular em <em>-a</em> (feminino). A diferença não é de estilo: são dois significados diferentes."
      },
      {
        contrast: "O português não tem essa alternância e faz as mesmas distinções com palavras diferentes: «muralhas» × «paredes»; e «ossos» e «fios» servem para os dois sentidos, sem distinguir. A única dupla que você já tem é <em>la frutta</em> / <em>i frutti</em>, o seu «a fruta» × «os frutos», coletivo comestível × resultados. Use-a como âncora e trate o resto como vocabulário novo."
      },
      {
        h: "A regra geral",
        p: "A forma feminina em <em>-a</em> costuma significar <b>o conjunto, o coletivo ou o sentido corporal literal</b>; a masculina em <em>-i</em> significa <b>os elementos avulsos ou o sentido figurado</b>."
      },
      {
        h: "Os pares que importam",
        list: [
          "<em>l'osso</em> → <b>le ossa</b> (o esqueleto humano) / <b>gli ossi</b> (ossos avulsos, os que se dão ao cachorro)",
          "<em>il braccio</em> → <b>le braccia</b> (os braços do corpo) / <b>i bracci</b> (os braços de um guindaste, de um rio)",
          "<em>il muro</em> → <b>le mura</b> (as muralhas) / <b>i muri</b> (as paredes de um cômodo)",
          "<em>il filo</em> → <b>le fila</b> (os fios de um discurso, os contatos) / <b>i fili</b> (os cabos)",
          "<em>il frutto</em> → <b>i frutti</b> (os frutos, resultados) / <b>la frutta</b> (a fruta, coletivo)",
          "<em>il dito</em> → <b>le dita</b> (os dedos de uma mão em conjunto) / <b>i diti</b> (raro, avulsos)",
          "<em>il lenzuolo</em> → <b>le lenzuola</b> (o jogo de lençóis) / <b>i lenzuoli</b> (lençóis avulsos)"
        ]
      }
    ],
    grammar: {
      title: "Plurais duplos",
      table: {
        head: ["singular", "forma em -a", "forma em -i"],
        rows: [
          ["l'osso", "le ossa (o esqueleto)", "gli ossi (ossos avulsos)"],
          ["il braccio", "le braccia (do corpo)", "i bracci (de um guindaste, de um rio)"],
          ["il muro", "le mura (as muralhas)", "i muri (as paredes)"],
          ["il filo", "le fila (os fios de um discurso)", "i fili (os cabos)"],
          ["il frutto", "la frutta (a fruta)", "i frutti (os resultados)"],
          ["il dito", "le dita (os dedos)", "i diti (raro)"],
          ["il lenzuolo", "le lenzuola (o jogo de lençóis)", "i lenzuoli (lençóis avulsos)"],
          ["il ciglio", "le ciglia (os cílios)", "i cigli (as margens da estrada)"]
        ]
      },
      examples: [
        { tr: "Meus ossos doem." },
        { tr: "O cachorro está roendo os ossos." },
        { tr: "As muralhas da cidade são medievais." },
        { tr: "As paredes da casa são finas." },
        { tr: "Colheu os frutos do seu trabalho." },
        { tr: "No almoço eu sempre como fruta." }
      ]
    },
    vocab: [
      "ossos (esqueleto) / ossos avulsos",
      "braços (do corpo) / braços (de um guindaste)",
      "muralhas / paredes",
      "fios de um discurso / cabos",
      "fruta (alimento) / frutos (resultados)",
      "dedos",
      "cílios / margens da estrada",
      "jogo de lençóis",
      "roer",
      "medieval",
      "mexer os pauzinhos",
      "colher os frutos"
    ],
    exercises: [
      { q: "«Mi fanno male ___.» (meus ossos doem)", opts: ["gli ossi", "le ossa", "i ossi"] },
      {
        q: "«___ della città sono medievali.» (as muralhas)",
        opts: ["I muri", "Le mura", "I muri della"]
      },
      { q: "Complete: «Ha raccolto ___ del suo lavoro.» (os frutos, resultados)" },
      { q: "Complete: «A pranzo mangio sempre ___.» (fruta, alimento)" },
      { q: "Associe a forma ao significado.", pairs: ["braços do corpo", "braços de um guindaste", "fios", "cabos"] },
      {
        q: "«Tirare le fila» significa:",
        opts: ["puxar os fios", "mexer os pauzinhos, comandar por trás", "desembaraçar"]
      },
      { q: "Complete as formas.", tr: "As muralhas da cidade são antigas, mas as paredes da minha casa são finas." },
      { q: "«O cachorro está roendo os ossos.»" },
      { tr: "Eu estava com os dedos gelados e meus ossos doíam." },
      { tr: "Finalmente colheu os frutos do seu trabalho." }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Vocabulário avançado",
    title: "Os compostos e seus plurais",
    objectives: [
      "formar o plural de um substantivo composto",
      "reconhecer o tipo de composto",
      "evitar os deslizes mais frequentes"
    ],
    theory: [
      {
        h: "Quatro padrões",
        list: [
          "<b>invariável</b>: <em>il doposcuola → i doposcuola</em>, <em>il portacenere → i portacenere</em>",
          "<b>muda o segundo elemento</b>: <em>il cavolfiore → i cavolfiori</em>, <em>il capolavoro → i capolavori</em>, <em>l'asciugamano → gli asciugamani</em>",
          "<b>muda o primeiro</b>: <em>il capofamiglia → i capifamiglia</em>, <em>il fico d'India → i fichi d'India</em>",
          "<b>mudam os dois</b>: <em>la cassaforte → le casseforti</em>, <em>il bassofondo → i bassifondi</em>"
        ]
      },
      {
        contrast: "Dois dos quatro padrões você já conhece: o invariável de «os saca-rolhas» e a dupla mudança de «os cofres-fortes», que é <em>le casseforti</em> peça por peça. O de <em>capo-</em> você contorna com uma preposição, «os chefes de estação», então o italiano <em>i capistazione</em> vai soar estranho, embora faça o mesmo: pluralizar o núcleo."
      },
      {
        h: "Uma regra prática para «capo-»",
        p: "Quando <em>capo</em> significa <b>a pessoa no comando</b>, é essa parte que vai para o plural: <em>i capistazione, i capireparto, i capifamiglia</em>. Quando <em>capo</em> significa <b>o melhor ou o início de algo</b>, muda o segundo elemento: <em>i capolavori, i capoluoghi</em>."
      },
      {
        h: "Verbo + substantivo",
        p: "Compostos como <em>portacenere, apriscatole, spazzaneve, salvagente</em> costumam ser <b>invariáveis</b>, porque o primeiro elemento é uma forma verbal. Há exceções, mas a invariabilidade é a opção segura, como no seu «os saca-rolhas» ou «os abre-latas»."
      }
    ],
    grammar: {
      title: "Plurais dos compostos",
      table: {
        head: ["tipo", "singular", "plural"],
        rows: [
          ["verbo + substantivo", "il portacenere", "i portacenere"],
          ["verbo + substantivo", "l'apriscatole", "gli apriscatole"],
          ["capo (pessoa)", "il capostazione", "i capistazione"],
          ["capo (o melhor)", "il capolavoro", "i capolavori"],
          ["substantivo + substantivo", "il cavolfiore", "i cavolfiori"],
          ["substantivo + adjetivo", "la cassaforte", "le casseforti"],
          ["adjetivo + substantivo", "il bassofondo", "i bassifondi"],
          ["com preposição", "il fico d'India", "i fichi d'India"]
        ]
      },
      examples: [
        { tr: "Os chefes de estação assinaram a ata." },
        { tr: "Escreveu três obras-primas em dez anos." },
        { tr: "Esvaziaram os cofres-fortes." },
        { tr: "Compre dois abridores de lata para mim, por favor." },
        { tr: "Há vinte capitais de província." },
        { tr: "As toalhas limpas estão no armário." }
      ]
    },
    vocab: [
      "obra-prima",
      "capital de província",
      "chefe de estação",
      "chefe de família",
      "cofre-forte",
      "os submundos, a periferia degradada",
      "abridor de lata",
      "cinzeiro",
      "limpa-neve",
      "boia salva-vidas",
      "ata oficial",
      "esvaziar"
    ],
    exercises: [
      { q: "Plural de «il capolavoro»: ___" },
      { q: "Plural de «il capostazione»: ___" },
      { q: "Plural de «la cassaforte»: ___" },
      { q: "Plural de «il portacenere»: ___" },
      {
        q: "Por que «i capistazione» e não «i capostazioni»?",
        opts: [
          "É uma exceção sem regra",
          "Porque capo significa aqui a pessoa no comando",
          "Porque stazione é feminino"
        ]
      },
      {
        q: "Quais compostos são invariáveis?",
        opts: ["il portacenere", "il cavolfiore", "l'apriscatole", "lo spazzaneve"]
      },
      {
        q: "Complete os plurais.",
        tr: "Há vinte capitais de província; os cofres-fortes foram esvaziados à noite."
      },
      { q: "«As toalhas limpas estão no armário.»" },
      { tr: "Os chefes de departamento pediram uma reunião com a diretoria." },
      { tr: "Escreveu três obras-primas em menos de dez anos." }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Vocabulário avançado",
    title: "Alterados e adjetivos eruditos",
    objectives: [
      "usar os sufixos avaliativos com intenção",
      "reconhecer os adjetivos formados sobre outra raiz",
      "ajustar o registro lexical"
    ],
    theory: [
      {
        h: "Alterazione: quatro direções",
        list: [
          "<b>diminutivo</b>: <em>-ino, -etto, -ello</em> — <em>tavolino, casetta, alberello</em>",
          "<b>aumentativo</b>: <em>-one</em> — <em>portone, librone</em>",
          "<b>afetivo</b> (<em>vezzeggiativo</em>): <em>-uccio, -otto</em> — <em>caruccio, ragazzotto</em>",
          "<b>pejorativo</b>: <em>-accio, -astro</em> — <em>tempaccio, poetastro</em>"
        ]
      },
      {
        contrast: "O sistema é o seu, com outras terminações: seus -inho, -ão, -aço, -eco e -astro cobrem as mesmas quatro direções, e <em>poetastro</em> é literalmente o seu «poetastro». Você também tem falsos alterados: <em>il tacchino</em> não é um saltinho, assim como «cartão» não é uma carta grande. O que muda é qual palavra caiu na armadilha, então a lista se aprende, o mecanismo não."
      },
      {
        h: "Cuidado com as armadilhas lexicais",
        p: "Nem toda palavra com um desses sufixos é um alterado. <em>Il mattone</em> é um tijolo, não uma «manhã grande»; <em>il tacchino</em> é um peru; <em>il burrone</em> é um barranco, não «muita manteiga». São os <em>falsi alterati</em>."
      },
      {
        h: "Adjetivos formados sobre outra raiz",
        p: "O italiano de registro alto usa adjetivos de origem latina ou grega sem vínculo formal com o substantivo: <em>cavallo → equino / ippico</em>, <em>cuore → cardiaco</em>, <em>acqua → idrico</em>, <em>occhio → oculare</em>, <em>città → urbano</em>, <em>anno → annuale</em>, <em>fratello → fraterno</em>. A série é idêntica à do português, adjetivo por adjetivo (cardíaco, hídrico, ocular, urbano, equino, hípico, anual, fraterno): aqui não há nada para aprender, só para reconhecer."
      },
      {
        h: "Adjetivos sem superlativo",
        p: "Alguns adjetivos não formam superlativo, porque já expressam intensidade (<em>eccezionale, splendido, straordinario, immenso</em>) ou são eles mesmos alterados (<em>bellino, grandicello</em>). «Eccezionalissimo» soa como piada, como o seu «excepcionalíssimo»."
      }
    ],
    grammar: {
      title: "Sufixos e adjetivos eruditos",
      table: {
        head: ["substantivo", "adjetivo erudito", "exemplo"],
        rows: [
          ["il cuore", "cardiaco", "arresto cardiaco"],
          ["l'acqua", "idrico", "risorse idriche"],
          ["l'occhio", "oculare", "visita oculistica"],
          ["la città", "urbano", "traffico urbano"],
          ["il cavallo", "equino / ippico", "centro ippico"],
          ["il fratello", "fraterno", "affetto fraterno"],
          ["il vescovo", "episcopale", "sede episcopale"],
          ["l'anno", "annuale", "relazione annuale"]
        ]
      },
      examples: [
        { tr: "Que tempo horrível! Com essa chuva não dá para sair." },
        { tr: "Moramos numa casinha na periferia." },
        { tr: "O portão do prédio está sempre trancado." },
        { tr: "Os recursos hídricos do país estão diminuindo." },
        { tr: "Sofreu uma parada cardíaca." },
        { tr: "O trânsito urbano aumentou vinte por cento." }
      ]
    },
    vocab: [
      "um alterado",
      "diminutivo",
      "aumentativo",
      "pejorativo",
      "falso diminutivo ou aumentativo",
      "cardíaco",
      "hídrico",
      "ocular",
      "urbano",
      "fraterno",
      "tempo horrível",
      "tijolo (não: manhã grande)"
    ],
    exercises: [
      {
        q: "Associe o substantivo ao seu adjetivo erudito.",
        pairs: ["cardíaco", "hídrico", "ocular", "urbano"]
      },
      { q: "«Il mattone» é:", opts: ["uma manhã grande", "um tijolo", "um diminutivo de matto"] },
      { q: "Qual sufixo é pejorativo?", opts: ["-ino", "-one", "-accio"] },
      { q: "Forme o diminutivo de «casa»: ___" },
      {
        q: "Por que «eccezionalissimo» soa mal?",
        opts: ["É longo demais", "Porque eccezionale já expressa intensidade", "Porque é um empréstimo"]
      },
      {
        q: "Quais são falsi alterati (nem diminutivos nem aumentativos)?",
        opts: ["il tacchino", "il tavolino", "il burrone", "il mattone"]
      },
      { q: "Complete os adjetivos eruditos.", tr: "Os recursos hídricos diminuem e o trânsito urbano aumenta." },
      { q: "«Que tempo horrível!»" },
      { tr: "Os recursos hídricos do país vêm diminuindo há anos." },
      { tr: "Moramos numa casinha bem na periferia." }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Teste",
    title: "Teste da unidade 2",
    objectives: ["verificar os plurais duplos, os compostos e a formação de palavras"],
    theory: [{ p: "Dez tarefas. Aprova-se com 70%." }],
    exercises: [
      { q: "«Mi fanno male ___.»", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "«___ della città sono medievali.»", opts: ["I muri", "Le mura", "Le muri"] },
      { q: "«A pranzo mangio ___.» (fruta, alimento)" },
      { q: "Plural de «il capolavoro»: ___" },
      { q: "Plural de «il capostazione»: ___" },
      { q: "Plural de «la cassaforte»: ___" },
      { q: "Associe.", pairs: ["cardíaco", "hídrico", "urbano", "fraterno"] },
      { q: "«Il burrone» é:", opts: ["muita manteiga", "um barranco", "um aumentativo de burro"] },
      { tr: "Os cofres-fortes dos chefes de departamento foram verificados." },
      { tr: "Os recursos hídricos urbanos exigem uma intervenção imediata." }
    ]
  },
  "unit:c2-u03": {
    title: "Nuances e textos autênticos",
    grammarNote: "ironia · gíria · regionalismos · latinismos"
  },
  "lesson:c2-u03-l1": {
    theme: "Estilo e cultura",
    title: "A ironia em italiano",
    objectives: [
      "reconhecer a ironia na escrita e na fala",
      "usar as marcas da ironia",
      "distinguir a ironia do sarcasmo"
    ],
    theory: [
      {
        h: "As marcas da ironia",
        list: [
          "<em>ma va'!</em>, <em>figurati!</em>, <em>ci mancherebbe</em> — concordância fingida",
          "<em>proprio</em>, <em>davvero</em>, <em>giusto</em> virados do avesso: <em>Bravo, giusto quello che serviva.</em>",
          "exagero lexical: <em>una tragedia</em> por uma bobagem",
          "um diminutivo em contexto sério: <em>un problemino da due milioni</em>"
        ]
      },
      {
        contrast: "Todo esse repertório é o seu, marca por marca: <em>figurati</em> é o seu «imagina!», e você também tem a concordância fingida («sei, claro»), a lítote de «nada mal», o diminutivo irônico de «um probleminha de dois milhões» e as aspas de distanciamento. É a lição do nível em que menos há para aprender e mais há para ousar: a ironia italiana funciona com os mesmos mecanismos que a sua."
      },
      {
        h: "Ironia × sarcasmo",
        p: "A ironia deixa uma saída para o outro, o sarcasmo não. <em>Che bella idea</em> dito com um sorriso é ironia; a mesma frase com ênfase e sem sorriso é sarcasmo. Os italianos usam os dois, mas o sarcasmo é marcado mais pela entonação do que pelas palavras."
      },
      {
        h: "A atenuação em italiano",
        p: "<em>Non è male</em> (de algo excelente), <em>diciamo che non è andata benissimo</em> (de um desastre), <em>qualche problemino</em> (de uma crise grave). A lítote é muito produtiva em italiano: <em>non poco</em>, <em>non pochi</em>, <em>non senza difficoltà</em>."
      }
    ],
    grammar: {
      title: "Os recursos da ironia",
      table: {
        head: ["recurso", "exemplo", "significado"],
        rows: [
          ["concordância fingida", "Ma figurati!", "sei, claro, imagina"],
          ["lítote", "Non è male.", "é excelente"],
          ["diminutivo", "un problemino", "um problema sério"],
          ["exagero", "una tragedia", "um incômodo menor"],
          ["aspas de distanciamento", "la \"riforma\"", "o distanciamento de quem escreve"],
          ["pergunta retórica", "E chi l'avrebbe detto?", "estava mais do que claro"]
        ]
      },
      examples: [
        { tr: "Muito bem, era exatamente o que faltava." },
        { tr: "Digamos que não saiu brilhante." },
        { tr: "Um probleminha de dois milhões de euros." },
        { tr: "Ah, quer dizer que agora a culpa é minha. Claro." },
        { tr: "A «reforma» piorou a situação." },
        { tr: "Não sem dificuldade, chegamos ao fim." }
      ]
    },
    vocab: [
      "sei, claro, imagina",
      "era só o que faltava",
      "ah, para!",
      "lítote",
      "atenuação",
      "sarcasmo",
      "tirar sarro, zoar",
      "sublinhar, enfatizar",
      "tom",
      "alusão",
      "duplo sentido",
      "não pouco, bastante"
    ],
    exercises: [
      {
        q: "«Non è male» sobre um ótimo filme é:",
        opts: ["uma crítica", "uma lítote, elogio por atenuação", "indiferença"]
      },
      {
        q: "«Un problemino da due milioni» é um exemplo de:",
        opts: ["diminutivo irônico", "erro lexical", "registro administrativo"]
      },
      {
        q: "Qual é a diferença entre ironia e sarcasmo?",
        opts: ["Nenhuma", "A ironia deixa uma saída, o sarcasmo não", "O sarcasmo é sempre escrito"]
      },
      { q: "Associe.", pairs: ["sei, claro", "era só o que faltava", "ah, para!", "bastante"] },
      {
        q: "As aspas de «la \"riforma\"» indicam:",
        opts: ["uma citação", "o distanciamento de quem escreve em relação à palavra", "um termo técnico"]
      },
      {
        q: "Complete a frase irônica.",
        tr: "Muito bem, era exatamente o que faltava. Digamos que não saiu brilhante."
      },
      { q: "«Não sem dificuldade, chegamos ao fim.»" },
      {
        q: "«E chi l'avrebbe detto?» sobre algo óbvio significa:",
        opts: ["ninguém esperava", "estava mais do que claro desde o início", "quem foi que disse?"]
      },
      { tr: "Digamos que não saiu lá muito brilhante, para dizer o mínimo." },
      { tr: "Um probleminha de dois milhões de euros, coisa pouca." }
    ]
  },
  "lesson:c2-u03-l2": {
    theme: "Estilo e cultura",
    title: "Gíria e regionalismos",
    objectives: [
      "reconhecer a gíria jovem e os regionalismos",
      "distinguir o registro coloquial do dialeto",
      "saber o que não usar na escrita"
    ],
    theory: [
      {
        h: "Gergo giovanile",
        p: "<em>Boh</em> (sei lá), <em>bella!</em> (oi), <em>tipo</em> (tipo, assim), <em>raga</em> (galera, de <em>ragazzi</em>), <em>sto zitto</em>, <em>che palle</em> (que saco, meio vulgar), <em>spoilerare</em>, <em>cringiare</em>. Essa camada muda depressa: o que hoje está vivo, em cinco anos soa como gravação de arquivo."
      },
      {
        h: "Regionalismos dentro do padrão",
        list: [
          "norte: <em>anguria</em> (melancia), <em>bidello</em>, <em>ciao</em> de <em>schiavo</em>",
          "centro: <em>cocomero</em> (melancia), <em>a me mi</em> (coloquial, incorreto na escrita)",
          "sul: <em>melone d'acqua</em>, passato remoto frequente, <em>mo'</em> (agora)",
          "em toda parte: <em>magari</em>, <em>mica</em>, <em>manco</em> (nem sequer, coloquial)"
        ]
      },
      {
        contrast: "Atenção com <em>a me mi</em>: em italiano é um traço coloquial marcado e um erro na escrita. O português tem um pleonasmo parecido, «a mim me parece» (mais literário que falado no Brasil), que a norma culta aceita como recurso de ênfase, e por isso a construção italiana pode passar sem soar errada para você. Na escrita em italiano fica só <em>a me piace</em> ou <em>mi piace</em>."
      },
      {
        h: "Um dialeto não é uma gíria",
        p: "O napolitano e o siciliano são <b>línguas distintas</b>, descendentes do latim ao lado do toscano, com literatura e gramática próprias. Chamá-las de «italiano mal falado» é falso e, culturalmente, uma gafe: o mesmo erro que chamar o mirandês, língua oficial em Portugal, de «português mal falado»."
      },
      {
        trap: "<em>Mica</em> («de jeito nenhum», «nem de longe») está em toda parte na fala: <em>Non è mica facile.</em> Num texto formal, substitua por <em>affatto</em> ou tire."
      }
    ],
    grammar: {
      title: "Registros coloquiais",
      table: {
        head: ["expressão", "significado", "registro"],
        rows: [
          ["boh", "sei lá", "coloquial"],
          ["mica", "de jeito nenhum, nem de longe", "coloquial, muito frequente"],
          ["magari", "tomara / talvez / até", "em toda parte"],
          ["mo'", "agora", "centro-sul"],
          ["che palle", "que saco", "meio vulgar"],
          ["tipo", "tipo, assim", "gíria jovem"],
          ["dai!", "vai! / ah, para!", "em toda parte"],
          ["figurati", "de nada / imagina, nem pensar", "em toda parte"]
        ]
      },
      examples: [
        { tr: "Não é nem de longe tão fácil quanto parece." },
        { tr: "Não sei, sei lá." },
        { tr: "Vai, não leve a mal!" },
        { tr: "Deviam ser tipo meio-dia quando saímos." },
        { tr: "Quem dera fosse tão simples." },
        { tr: "Já vou, espere um momento.", note: "centro-sul" }
      ]
    },
    vocab: [
      "gíria, jargão",
      "regionalismo",
      "de jeito nenhum, nem de longe",
      "sei lá",
      "vai!",
      "tipo, assim",
      "agora (regional)",
      "melancia (norte / centro)",
      "de modo algum (formal)",
      "coloquial",
      "vulgar",
      "antiquado"
    ],
    exercises: [
      {
        q: "«Non è mica facile» significa:",
        opts: ["é um pouco fácil", "não é nada fácil", "é facílimo"]
      },
      { q: "«Boh» é:", opts: ["um grito de dor", "sei lá", "um cumprimento"] },
      {
        q: "O napolitano é:",
        opts: ["italiano mal falado", "uma língua românica distinta", "gíria jovem"]
      },
      { q: "Associe o regionalismo à região.", pairs: ["norte", "centro", "centro-sul", "sul"] },
      { q: "Substitua «mica» pela forma formal: «Non è ___ facile.»" },
      {
        q: "«A me mi piace» é:",
        opts: ["correto na escrita", "coloquial, evitado na escrita", "puramente dialetal"]
      },
      {
        q: "Complete as expressões coloquiais.",
        tr: "Não sei, sei lá. De qualquer forma, não é nem de longe tão fácil quanto parece."
      },
      { q: "«Vai, não leve a mal!»" },
      { tr: "Sei lá, deviam ser tipo meio-dia, não é tão fácil lembrar." },
      { tr: "Não é nem de longe tão fácil quanto parece, acredite." }
    ]
  },
  "lesson:c2-u03-l3": {
    theme: "Estilo e cultura",
    title: "Latinismos e registro erudito",
    objectives: [
      "reconhecer os latinismos nos textos jurídicos e acadêmicos",
      "usá-los no lugar certo",
      "fechar o nível C2"
    ],
    theory: [
      {
        h: "O latim está vivo no italiano oficial",
        p: "O italiano conserva um bom sortimento de expressões latinas na linguagem jurídica e acadêmica corrente: <em>de facto</em>, <em>ad hoc</em>, <em>sine die</em>, <em>pro tempore</em>."
      },
      {
        contrast: "O português jurídico e acadêmico usa boa parte das mesmas: <em>de facto</em>, <em>ad hoc</em>, <em>sine die</em>, <em>a priori</em>, <em>a fortiori</em>, <em>de cuius</em>, e até <em>in itinere</em>, no «acidente in itinere» do direito do trabalho. A exceção é <em>una tantum</em>, que no Brasil quase não circula: em português se diz «parcela única» ou «de uma só vez». Fora isso, este bloco é mais reconhecimento do que vocabulário novo; o que muda é a pronúncia italiana e, às vezes, a frequência."
      },
      {
        h: "As mais frequentes",
        list: [
          "<em>de facto</em> / <em>de iure</em> — de fato / de direito",
          "<em>ex post</em> / <em>ex ante</em> — a posteriori / a priori",
          "<em>in itinere</em> — em andamento",
          "<em>una tantum</em> — de uma só vez",
          "<em>ad hoc</em>, <em>pro tempore</em>, <em>sine die</em> (sem data marcada)",
          "<em>a fortiori</em>, <em>in primis</em>, <em>de cuius</em> (o falecido autor da herança, no direito sucessório)"
        ]
      },
      {
        h: "O registro erudito além do latim",
        p: "<em>Vieppiù</em> (cada vez mais), <em>altresì</em> (outrossim), <em>ancorché</em> (se bem que), <em>laddove</em> (ao passo que), <em>giacché</em> (já que), <em>onde</em> (a fim de). Pertencem ao direito, ao jornalismo sério e ao ensaio; na fala soam pedantes. Seus «outrossim», «se bem que» e «já que» os cobrem quase um a um."
      },
      {
        h: "Fechar o nível",
        p: "No C2 já não se trata de acrescentar formas, mas de <b>escolher a correta</b>. O mesmo conteúdo em registro coloquial, padrão e erudito são três mensagens diferentes, e o domínio consiste em escolher com consciência."
      }
    ],
    grammar: {
      title: "Latinismos e formas eruditas",
      table: {
        head: ["expressão", "significado", "contexto"],
        rows: [
          ["de facto / de iure", "de fato / de direito", "direito"],
          ["ex post / ex ante", "a posteriori / a priori", "economia, direito"],
          ["in itinere", "em andamento", "administração"],
          ["una tantum", "de uma só vez", "finanças"],
          ["sine die", "sem data marcada", "direito"],
          ["altresì", "outrossim", "direito, jornalismo"],
          ["ancorché", "se bem que", "jornalismo"],
          ["laddove", "ao passo que", "ensaio"]
        ]
      },
      examples: [
        { tr: "O contrato venceu de fato." },
        { tr: "O auxílio é pago de uma só vez." },
        { tr: "A reunião foi adiada sem data marcada." },
        { tr: "O processo continua em andamento." },
        { tr: "Informa-se outrossim que o prazo é improrrogável." },
        { tr: "Ao passo que o primeiro estudo indicava uma queda, o segundo mostra estabilidade." }
      ]
    },
    vocab: [
      "de fato / de direito",
      "a posteriori / a priori",
      "em andamento",
      "de uma só vez",
      "sem data marcada",
      "ad hoc",
      "outrossim",
      "se bem que",
      "ao passo que",
      "já que, visto que",
      "pagar, desembolsar",
      "adiar"
    ],
    exercises: [
      { q: "Associe o latinismo ao seu significado.", pairs: ["de fato", "de uma só vez", "sem data marcada", "em andamento"] },
      {
        q: "«Il bonus è erogato una tantum» significa:",
        opts: ["é pago todo mês", "é pago de uma só vez", "é pago uma vez por ano"]
      },
      {
        q: "«Rinviata sine die» significa:",
        opts: ["adiada por uma semana", "adiada sem data marcada", "cancelada"]
      },
      { q: "Substitua «anche» pela forma erudita: «Si segnala ___ che…»" },
      { q: "Substitua «mentre» pela forma ensaística: «___ il primo studio indicava un calo…»" },
      {
        q: "Em que consiste o domínio no C2?",
        opts: [
          "Em saber o maior número de palavras",
          "Em escolher com consciência o registro que combina com a situação",
          "Em usar sempre as formas eruditas"
        ]
      },
      { q: "Complete o texto jurídico.", tr: "O contrato venceu de fato, e o processo continua em andamento." },
      { q: "«Informa-se outrossim que o prazo é improrrogável.»" },
      { tr: "A reunião foi adiada sem data marcada por motivos técnicos." },
      { tr: "O pagamento é feito de uma só vez, uma vez apresentado o pedido." }
    ]
  },
  "lesson:c2-u03-test": {
    theme: "Prova",
    title: "Teste — revisão das unidades 1-3",
    objectives: ["verificar os particípios, a formação de palavras, os registros e as nuances"],
    theory: [{ p: "Doze tarefas das três primeiras unidades. Aprova-se com 70%." }],
    exercises: [
      { q: "«Gli aventi diritto»:", opts: ["os que têm razão", "os beneficiários, quem tem direito", "os proprietários"] },
      { q: "Concordância: «Terminat___ i lavori…»" },
      { q: "«Il testo va rivisto»:", opts: ["vai revisado", "é preciso revisá-lo", "está sendo revisado"] },
      { q: "«Mi fanno male ___.»", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "Plural de «la cassaforte»: ___" },
      { q: "Plural de «il capostazione»: ___" },
      { q: "Associe.", pairs: ["hídrico", "cardíaco", "urbano", "ocular"] },
      { q: "«Non è mica facile»:", opts: ["um pouco fácil", "nada fácil", "facílimo"] },
      { q: "«Una tantum»:", opts: ["todo mês", "de uma só vez", "uma vez por ano"] },
      { q: "Substitua «anche»: «Si segnala ___ che…»" },
      { q: "«O processo continua em andamento e foi adiado sem data marcada.»" },
      { tr: "Vista a situação, é preciso revisar o projeto inteiro antes do prazo." }
    ]
  }
});
