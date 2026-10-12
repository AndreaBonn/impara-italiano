/* ============================================================
   Texto na língua do aluno (pt, português do Brasil) para data/core/c1-01.js
   As chaves apontam para os id da camada neutra; os arrays se
   combinam por índice, então o comprimento deve coincidir com o core.
   Quem confere é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:c1-u01": {
    title: "Todos os valores do SI",
    grammarNote: "si reflexivo, recíproco, impessoal, passivo · ci si"
  },
  "lesson:c1-u01-l1": {
    theme: "Gramática avançada",
    title: "Distinguir os valores do si",
    objectives: [
      "reconhecer todas as funções do si num texto",
      "distinguir o si impessoal do passivo",
      "usar bem o ci si"
    ],
    theory: [
      {
        h: "Uma forma, seis trabalhos",
        list: [
          "<b>reflexivo</b>: <em>Marco si lava.</em> — fazer algo a si mesmo",
          "<b>recíproco</b>: <em>Si salutano ogni mattina.</em> — um ao outro",
          "<b>impessoal</b>: <em>In Italia si mangia bene.</em> — as pessoas em geral",
          "<b>passivo (passivante)</b>: <em>Qui si vendono panini.</em> — o verbo concorda com a coisa",
          "<b>de instrução</b>: <em>Il volante si tiene così.</em> — é assim que se faz",
          "<b>«nós» toscano</b>: <em>Stasera noi si va al cinema.</em> — regional"
        ]
      },
      {
        contrast: "Este capítulo é um presente para você: o seu «se» faz os mesmos trabalhos, e a norma culta distingue exatamente as mesmas duas coisas, a passiva sintética («vendem-se casas», verbo concordando) e o sujeito indeterminado («precisa-se de ajudantes», sempre no singular). A armadilha está na fala: no Brasil se ouve o tempo todo «vende-se casas», «aluga-se apartamentos». Em italiano a concordância é obrigatória também na fala: <em>si vende una casa</em>, mas <em>si vendono case</em>."
      },
      {
        h: "O teste impessoal contra passivo",
        p: "Se depois vem um substantivo que poderia ser objeto direto, é o <b>si passivante</b> e o verbo concorda com o número dele: <em>si <b>vendono</b> case</em>. Se não vem, ou o verbo é intransitivo, é o <b>si impersonale</b> e a forma fica no singular: <em>si <b>lavora</b> troppo</em>."
      },
      {
        h: "Ci si: dois si se chocando",
        p: "Um <em>si</em> impessoal com um verbo reflexivo daria «si si», então o primeiro vira <strong>ci</strong>: <em><b>ci si</b> alza presto</em>, <em>ci si abitua a tutto</em>. O português evita o mesmo choque de outro jeito, com um sujeito genérico: «a gente se acostuma com tudo», «você se levanta cedo no campo». A solução italiana é uma partícula; a sua, um sujeito genérico."
      },
      {
        h: "Tempos compostos: sempre essere",
        p: "O <em>si</em> impessoal leva <em>essere</em>, mesmo quando o verbo normalmente pede <em>avere</em>: <em>si <b>è</b> mangiato bene</em>, onde você diria simplesmente «comeu-se bem» ou «a gente comeu bem». O particípio fica no masculino singular, mas um adjetivo predicativo vai para o plural: <em>si è stati contenti</em>."
      }
    ],
    grammar: {
      title: "Si: a tabela de decisão",
      table: {
        head: ["contexto", "forma", "exemplo"],
        rows: [
          ["reflexivo", "si + verbo", "Si sveglia alle sei."],
          ["recíproco", "si + plural", "Si scrivono ogni giorno."],
          ["impessoal", "si + 3.ª sing.", "Si lavora troppo."],
          ["passivo, singular", "si + 3.ª sing.", "Si vende una casa."],
          ["passivo, plural", "si + 3.ª pl.", "Si vendono case."],
          ["impessoal reflexivo", "ci si", "Ci si alza presto."],
          ["tempo composto", "si è + particípio", "Si è mangiato bene."],
          ["com adjetivo", "si è + plural", "Si è stati fortunati."]
        ]
      },
      examples: [
        { tr: "Neste escritório se trabalha demais e se ganha pouco." },
        { tr: "Todas as casas foram vendidas em dois meses." },
        { tr: "A gente se acostuma até com o pior." },
        { tr: "Discutiu-se muito, sem resultado." },
        { tr: "Quando se é jovem, se subestima o tempo." },
        { tr: "O volante se segura com as duas mãos." }
      ]
    },
    vocab: [
      "acostumar-se",
      "entediar-se",
      "subestimar",
      "superestimar",
      "discutir, debater",
      "ganhar (dinheiro)",
      "dar-se conta",
      "adaptar-se, sujeitar-se",
      "o pior / o melhor",
      "sem resultado",
      "longamente, à exaustão",
      "em geral"
    ],
    exercises: [
      {
        q: "«Qui si ___ case.» (aqui se vendem casas)",
        opts: ["vende", "vendono", "vendere"],
        why: "O si passivante concorda com o substantivo no plural."
      },
      {
        q: "«In questo ufficio si ___ troppo.» (lavorare)",
        opts: ["lavora", "lavorano", "lavorare"],
        why: "Sem objeto direto → si impersonale, singular."
      },
      { q: "Complete: «___ si alza presto in campagna.» (impessoal, alzarsi)" },
      { q: "Complete: «Si ___ discusso a lungo.» (tempo composto)" },
      {
        q: "«Si è stati fortunati»: por que «stati» e não «stato»?",
        opts: [
          "É um erro",
          "Um adjetivo depois do si impessoal vai para o plural",
          "Porque essere é irregular"
        ]
      },
      {
        q: "Em quais frases o si é o passivo (passivante)?",
        opts: ["Si vendono panini.", "Si lavora molto.", "Si affittano appartamenti.", "Ci si annoia."]
      },
      { q: "Complete as formas.", tr: "Na Itália se come bem, mas se trabalham horas demais." },
      { q: "«A gente se acostuma com tudo.»" },
      { tr: "Discutiu-se longamente, mas não se chegou a nenhuma conclusão." },
      { tr: "Quando se é jovem, se subestima o tempo." }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Gramática avançada",
    title: "Posição do adjetivo e significado",
    objectives: [
      "reconhecer a mudança de significado que a posição traz",
      "usar o adjetivo com intenção",
      "não interpretar mal os textos"
    ],
    theory: [
      {
        h: "Antes do substantivo: figurado ou subjetivo",
        p: "Um adjetivo <b>antes</b> do substantivo em geral não distingue, caracteriza: <em>un <b>vecchio</b> amico</em> é um amigo de longa data, não um amigo idoso. <b>Depois</b>, ele distingue e costuma ser literal: <em>un amico <b>vecchio</b></em>."
      },
      {
        contrast: "Aqui a correspondência é total e vale a pena aproveitá-la sem medo: «um velho amigo» contra «um amigo velho», «um grande homem» contra «um homem grande», «um pobre homem» contra «um homem pobre». A sua língua faz o mesmo jogo com os mesmos adjetivos e com a mesma divisão de sentidos. A única precaução é não supor que a lista coincide em todas as palavras: confira uma por uma."
      },
      {
        h: "Pares que vale a pena memorizar",
        list: [
          "<em>un grande uomo</em> (um grande homem) — <em>un uomo grande</em> (um homem grande)",
          "<em>un buon medico</em> (um médico competente) — <em>un medico buono</em> (um médico bondoso)",
          "<em>un alto magistrato</em> (um alto magistrado) — <em>un magistrato alto</em> (um magistrado de estatura alta)",
          "<em>una certa informazione</em> (certa informação) — <em>un'informazione certa</em> (uma informação segura)",
          "<em>un povero uomo</em> (um pobre homem) — <em>un uomo povero</em> (um homem sem dinheiro)",
          "<em>diverse persone</em> (várias pessoas) — <em>persone diverse</em> (pessoas diferentes)",
          "<em>un semplice impiegato</em> (um simples funcionário) — <em>un impiegato semplice</em> (um funcionário simplório)"
        ]
      },
      {
        h: "Por que isso importa no C1",
        p: "No jornalismo e na literatura a distinção carrega significado, não estilo. Ler <em>una certa informazione</em> como «uma informação segura» em vez de «certa informação» vira a frase inteira de cabeça para baixo."
      }
    ],
    grammar: {
      title: "Posição e significado",
      table: {
        head: ["antes", "depois", "a diferença"],
        rows: [
          ["un vecchio amico", "un amico vecchio", "de longa data / idoso"],
          ["un grande uomo", "un uomo grande", "grande (valor) / grande de tamanho"],
          ["un buon medico", "un medico buono", "competente / bondoso"],
          ["una certa notizia", "una notizia certa", "certa / segura"],
          ["un povero uomo", "un uomo povero", "coitado / sem dinheiro"],
          ["diverse persone", "persone diverse", "várias / diferentes"],
          ["un semplice errore", "un errore semplice", "um mero / um fácil"]
        ]
      },
      examples: [
        { tr: "É um grande profissional, embora seja um homem difícil." },
        { tr: "Chegou até mim certa informação, mas não é uma informação segura." },
        { tr: "Não passa de um simples mal-entendido." },
        { tr: "Conheci várias pessoas muito diferentes entre si." },
        { tr: "Coitado do rapaz: perdeu tudo." },
        { tr: "Mora numa casa velha, mas linda." }
      ]
    },
    vocab: [
      "mal-entendido",
      "profissional, especialista",
      "a velha guarda",
      "alto cargo",
      "um mero, um simples",
      "certa / segura",
      "único / sem igual",
      "outro / autêntico",
      "outro / novinho em folha",
      "sozinho / a sós",
      "distinguir",
      "nuance"
    ],
    exercises: [
      {
        q: "«Un vecchio amico» significa:",
        opts: ["um amigo idoso", "um amigo de longa data", "um ex-amigo"]
      },
      {
        q: "«Un'informazione certa» significa:",
        opts: ["certa informação", "uma informação segura", "uma informação confidencial"]
      },
      { q: "«Diverse persone» significa:", opts: ["pessoas diferentes", "várias pessoas", "desconhecidos"] },
      {
        q: "Relacione a expressão com o seu significado.",
        pairs: ["um grande homem", "um homem grande", "um pobre homem", "um homem sem dinheiro"]
      },
      {
        q: "Coloque o adjetivo no lugar certo (antes ou depois).",
        tr: "Chegou até mim certa notícia, mas não é uma notícia segura."
      },
      { q: "«Não passa de um simples mal-entendido.»" },
      {
        q: "Por que essa distinção importa no jornalismo?",
        opts: [
          "Porque soa elegante",
          "Porque a posição muda o significado da frase",
          "Porque a gramática exige"
        ]
      },
      { tr: "É um grande profissional, embora seja um homem difícil." },
      { tr: "Não é um homem bondoso que por acaso é médico, é um bom médico: duas coisas diferentes." },
      { tr: "Conheci várias pessoas muito diferentes entre si." }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Gramática avançada",
    title: "Intensificadores e superlativos",
    objectives: [
      "usar os prefixos intensificadores",
      "conhecer os superlativos idiomáticos",
      "reconhecer as formas em -errimo"
    ],
    theory: [
      {
        h: "Repetir o adjetivo",
        p: "O intensificador mais coloquial é a repetição: <em>Maria è magra magra</em>, <em>un caffè caldo caldo</em>, <em>piano piano</em>. Não é erro nem descuido, é um mecanismo vivo do italiano falado. O português conhece algo parecido («devagar, devagar», «pouco a pouco»), mas no Brasil o mais comum é intensificar com o diminutivo: «magrinha», «um café quentinho»."
      },
      {
        h: "Os prefixos",
        p: "<em>arci-</em> (arcicontento), <em>stra-</em> (straricco, strapieno), <em>iper-</em> (iperattivo), <em>super-</em> (superdotato), <em>ultra-</em> (ultramoderno), <em>mega-</em>. Registro coloquial ou jornalístico; num texto formal use <em>estremamente</em>. Os seus «super-», «hiper-», «mega-» e «ultra-» ocupam o mesmo lugar e o mesmo registro."
      },
      {
        h: "Superlativos idiomáticos",
        p: "Comparações fixas que não dá para deduzir: <em>stanco morto</em>, <em>ubriaco fradicio</em>, <em>povero in canna</em>, <em>buono come il pane</em>, <em>pieno zeppo</em>, <em>bagnato fradicio</em>, <em>innamorato cotto</em>. Aqui as imagens não coincidem com as suas: você diz «morto de cansaço», «bêbado feito um gambá», «lotado até a tampa», «encharcado até os ossos». Elas se aprendem uma por uma, e traduzir a imagem brasileira produz frases que ninguém diz."
      },
      {
        h: "As formas em -errimo e -entissimo",
        p: "Superlativos cultos de adjetivos de origem latina: <em>acre → acerrimo</em>, <em>celebre → celeberrimo</em>, <em>integro → integerrimo</em>, <em>misero → miserrimo</em>; além de <em>benevolo → benevolentissimo</em>. Você tem os mesmos («acérrimo», «celebérrimo», «integérrimo», «paupérrimo»), com o mesmo tom culto e o mesmo uso quase só na escrita."
      }
    ],
    grammar: {
      title: "Intensificadores",
      table: {
        head: ["tipo", "exemplo", "registro"],
        rows: [
          ["repetição", "magra magra", "fala"],
          ["-issimo", "bellissimo", "neutro"],
          ["prefixo", "straricco, iperattivo", "coloquial / imprensa"],
          ["locução", "stanco morto", "fala"],
          ["-errimo", "celeberrimo", "escrita"],
          ["formal", "estremamente / oltremodo", "escrita"]
        ]
      },
      examples: [
        { tr: "Estou morto de cansaço, não aguento mais." },
        { tr: "O lugar estava lotado até a tampa." },
        { tr: "É um caso celebérrimo na história do direito." },
        { tr: "Está felicíssimo com a notícia." },
        { tr: "Um chá bem quentinho, por favor." },
        { tr: "Um adversário acérrimo do governo." }
      ]
    },
    vocab: [
      "morto de cansaço",
      "bêbado feito um gambá",
      "lotado até a tampa",
      "encharcado até os ossos",
      "apaixonado até o último fio de cabelo",
      "pobre de marré",
      "bom como o pão",
      "riquíssimo, podre de rico",
      "hiperativo",
      "celebérrimo",
      "acérrimo",
      "em sumo grau"
    ],
    exercises: [
      {
        q: "Relacione a locução com o seu significado.",
        pairs: ["morto de cansaço", "lotado até a tampa", "perdidamente apaixonado", "muito pobre"]
      },
      { q: "«Ubriaco fradicio» significa:", opts: ["um pouco alegre", "bêbado feito um gambá", "encharcado até os ossos"] },
      { q: "Forme o superlativo culto de «celebre»: ___" },
      { q: "Forme o superlativo culto de «acre»: ___" },
      {
        q: "«Magra magra» é:",
        opts: ["um erro de estilo", "um intensificador coloquial por repetição", "um plural"]
      },
      { q: "Qual variante cabe num texto formal?", opts: ["straricco", "ricchissimo", "megaricco"] },
      { q: "Complete as locuções.", tr: "Depois da viagem eu estava morto de cansaço, e a sala estava lotada até a tampa." },
      { q: "«É um adversário acérrimo desta reforma.»" },
      { tr: "Estava encharcado até os ossos e morto de cansaço, mas sorria." },
      { tr: "O lugar estava lotado até a tampa, não tinha nem um lugar livre." }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Teste",
    title: "Teste da unidade 1",
    objectives: ["verificar o si, a posição do adjetivo e os superlativos"],
    theory: [{ p: "Dez tarefas. Aprovação com 70%." }],
    exercises: [
      { q: "«Qui si ___ case.»", opts: ["vende", "vendono", "vendere"] },
      { q: "«In ufficio si ___ troppo.» (lavorare)", opts: ["lavora", "lavorano", "lavorare"] },
      { q: "«___ si alza presto.» (impessoal, reflexivo)" },
      { q: "«Si ___ discusso a lungo.»" },
      { q: "«Un vecchio amico»:", opts: ["idoso", "de longa data", "ex-amigo"] },
      { q: "«Diverse persone»:", opts: ["pessoas diferentes", "várias pessoas", "desconhecidos"] },
      { q: "Superlativo de «celebre»: ___" },
      { q: "Relacione.", pairs: ["morto de cansaço", "lotado até a tampa", "acérrimo", "muito pobre"] },
      { tr: "Todas as casas foram vendidas em menos de dois meses." },
      { tr: "A gente se acostuma com tudo, até com o pior." }
    ]
  },
  "unit:c1-u02": {
    title: "Verbos com pronomes incorporados",
    grammarNote: "verbi pronominali · fraseologia · registro falado"
  },
  "lesson:c1-u02-l1": {
    theme: "Gramática avançada",
    title: "Verbos com pronomes incorporados",
    objectives: [
      "reconhecer os verbos com pronomes fundidos",
      "conjugá-los nos tempos compostos",
      "usá-los em conversa real"
    ],
    theory: [
      {
        h: "O significado não se deduz das peças",
        p: "<em>Prendersela</em> não significa «pegá-la para si», significa ofender-se. <em>Cavarsela</em> não tem nada a ver com cavar. São peças de léxico independentes e se aprendem como vocabulário, não como construções."
      },
      {
        contrast: "Este mecanismo é novo para você: o português não funde no verbo um pronome feminino sem referente, como o <em>la</em> de <em>cavarsela</em>. O sentido, porém, você conhece: <em>cavarsela</em> é o seu «se virar», e <em>prendersela</em> é «levar a mal», «ficar chateado». Por isso o erro típico não é de significado, é de forma: esquecer o <em>la</em> e esquecer que o particípio concorda com ele. Você diz «eu me virei» sem nada para concordar; o italiano escreve <em>me la sono cavat<b>a</b></em>."
      },
      {
        h: "A conjugação",
        p: "Os pronomes se separam e voltam para antes do verbo: <em>cavarsela → <b>me la</b> cavo</em>, <em>te la cavi</em>, <em>se la cava</em>. Nos tempos compostos, sempre <em>essere</em>, e o particípio concorda com <em>la</em>: <em>me la sono cavata</em>, <em>ce l'ho fatta</em>."
      },
      {
        h: "Os mais frequentes",
        list: [
          "<em>farcela</em> — conseguir: <em>Ce l'ho fatta!</em>",
          "<em>cavarsela</em> — se virar: <em>Me la cavo con l'italiano.</em>",
          "<em>prendersela</em> — ofender-se: <em>Non te la prendere.</em>",
          "<em>andarsene</em> — ir embora: <em>Me ne vado.</em>",
          "<em>fregarsene</em> — não estar nem aí: <em>Se ne frega.</em>",
          "<em>avercela con</em> — ter algo contra alguém: <em>Ce l'ha con me.</em>",
          "<em>sentirsela</em> — sentir-se em condições: <em>Non me la sento.</em>",
          "<em>intendersene</em> — entender do assunto: <em>Se ne intende di vini.</em>"
        ]
      }
    ],
    grammar: {
      title: "Conjugar os verbi pronominali",
      table: {
        head: ["pessoa", "farcela", "cavarsela", "andarsene"],
        rows: [
          ["io", "ce la faccio", "me la cavo", "me ne vado"],
          ["tu", "ce la fai", "te la cavi", "te ne vai"],
          ["lui / lei", "ce la fa", "se la cava", "se ne va"],
          ["noi", "ce la facciamo", "ce la caviamo", "ce ne andiamo"],
          ["voi", "ce la fate", "ve la cavate", "ve ne andate"],
          ["loro", "ce la fanno", "se la cavano", "se ne vanno"],
          ["passado", "ce l'ho fatta", "me la sono cavata", "me ne sono andato/a"]
        ]
      },
      examples: [
        { tr: "Consegui, passei na prova!" },
        { tr: "Eu me viro bem com o alemão." },
        { tr: "Não leve a mal, não era com você." },
        { tr: "Foi embora sem se despedir." },
        { tr: "Não me sinto em condições de dirigir hoje à noite." },
        { tr: "Você tem alguma coisa contra mim?" }
      ]
    },
    vocab: [
      "conseguir, dar conta",
      "se virar",
      "ofender-se",
      "ir embora, cair fora",
      "não estar nem aí",
      "ter algo contra alguém",
      "sentir-se em condições",
      "entender do assunto",
      "se virar sozinho",
      "parar com isso",
      "cortar o barato (coloquial)",
      "divertir-se muito"
    ],
    exercises: [
      { q: "Complete: «___ l'ho fatta!» (consegui)" },
      { q: "Complete: «___ la cavo con l'italiano.» (eu me viro)" },
      { q: "Complete: «Non ___ la prendere.» (não leve a mal)" },
      {
        q: "«Se ne frega di tutto» significa:",
        opts: ["se preocupa com tudo", "não está nem aí para nada", "cuida de tudo"]
      },
      {
        q: "Por que «me la sono cavata» e não «cavato»?",
        opts: ["É um erro", "O particípio concorda com o la", "Porque quem fala é uma mulher"]
      },
      { q: "Relacione.", pairs: ["sentir-se em condições", "entender do assunto", "parar com isso", "divertir-se muito"] },
      { q: "Complete os pronomes.", tr: "Não me sinto em condições de dirigir, vou a pé." },
      { q: "«Você tem alguma coisa contra mim?»" },
      { tr: "Foi embora sem se despedir de ninguém." },
      { tr: "Eu me viro bem, mas não entendo muito do assunto." }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Gramática avançada",
    title: "A passiva modal e estilística",
    objectives: [
      "usar andare + particípio para expressar necessidade",
      "escolher venire para destacar o processo",
      "reconhecer essas formas nos textos oficiais"
    ],
    theory: [
      {
        h: "Andare = deve ser",
        p: "<em>La domanda <b>va presentata</b> entro il 30.</em> Não é «o requerimento é apresentado», e sim «o requerimento <b>deve</b> ser apresentado». O seu «deve ser apresentado» ou «é para ser apresentado» carrega a mesma obrigação; uma passiva comum, não."
      },
      {
        h: "Atenção à restrição",
        p: "A passiva com <em>andare</em> funciona <b>só nos tempos simples</b> (presente, imperfetto, futuro). «È andato presentato» não existe nesse sentido: nos tempos compostos é preciso <em>doveva essere presentato</em>."
      },
      {
        h: "Venire: processo mais do que estado",
        p: "<em>La legge <b>viene applicata</b> dal 2020</em> destaca a ação em curso, enquanto <em>è applicata</em> pode ser lido como um estado. <em>Venire</em> é muito frequente em textos jurídicos e administrativos, onde você usaria a passiva com «ser» ou com «se» («a lei é aplicada», «aplica-se a lei»)."
      },
      {
        h: "Uma terceira variante: essere da + infinitivo",
        p: "<em>Questo capitolo <b>è da rivedere</b>.</em> Próximo de <em>va rivisto</em>, um pouco mais leve e mais falado. É o seu «este capítulo é para revisar» ou «ainda está por revisar», com a mesma sensação de tarefa pendente."
      }
    ],
    grammar: {
      title: "Variantes da passiva",
      table: {
        head: ["forma", "significado", "restrição"],
        rows: [
          ["essere + particípio", "passiva geral", "todos os tempos"],
          ["venire + particípio", "processo, repetição", "só tempos simples"],
          ["andare + particípio", "necessidade", "só tempos simples"],
          ["si passivante", "registro falado", "3.ª pessoa"],
          ["essere da + infinitivo", "pendente de fazer", "registro mais leve"],
          ["andare perso / smarrito", "perda acidental", "exceção lexical"]
        ]
      },
      examples: [
        { tr: "O requerimento deve ser apresentado antes do dia trinta." },
        { tr: "Estes dados devem ser verificados antes da publicação." },
        { tr: "O regulamento é atualizado todos os anos." },
        { tr: "O capítulo ainda está por revisar." },
        { tr: "Dois documentos se extraviaram.", note: "andare + perso = perda acidental" },
        { tr: "Todos os requerimentos foram rejeitados." }
      ]
    },
    vocab: [
      "apresentar um requerimento",
      "verificar, conferir",
      "atualizar",
      "rejeitar",
      "o regulamento, a norma",
      "publicação",
      "extraviar-se",
      "perder (um papel) no meio de outros",
      "pendente de revisão",
      "dentro do prazo",
      "obrigação formal",
      "em vigor"
    ],
    exercises: [
      {
        q: "«La domanda va presentata» significa:",
        opts: ["O requerimento está sendo apresentado", "O requerimento deve ser apresentado", "O requerimento foi apresentado"]
      },
      {
        q: "Qual frase está errada?",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."],
        why: "A passiva com andare não funciona nos tempos compostos."
      },
      { q: "Complete: «Questi dati ___ verificati.» (devem ser verificados)" },
      { q: "Complete: «Il regolamento ___ aggiornato ogni anno.» (venire)" },
      {
        q: "«Sono andati persi due documenti» significa:",
        opts: ["Os documentos tinham que se perder", "Dois documentos se extraviaram", "Os documentos foram embora"]
      },
      {
        q: "Complete as formas.",
        tr: "O requerimento deve ser apresentado antes do dia trinta; os dados são verificados pela repartição."
      },
      { q: "«Este capítulo ainda está por revisar.»" },
      { tr: "Todos os requerimentos foram rejeitados." },
      { tr: "O formulário deve ser preenchido por completo e assinado embaixo." },
      { tr: "Estes dados devem ser verificados antes da publicação." }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Vocabulário",
    title: "A fraseologia em uso",
    objectives: [
      "entender as locuções frequentes da fala e da imprensa",
      "usar algumas com naturalidade",
      "evitar os decalques do português"
    ],
    theory: [
      {
        h: "Uma locução é uma abreviação, não um enfeite",
        p: "Uma locução italiana costuma substituir uma frase inteira. <em>Non ci piove</em> significa «não há dúvida», <em>tagliare la testa al toro</em> significa resolver a questão com uma decisão. Usadas no lugar certo, encurtam o que você diz e soam nativas."
      },
      {
        h: "Locuções que você vai ouvir de verdade",
        list: [
          "<em>in bocca al lupo</em> — boa sorte (resposta: <em>crepi</em>)",
          "<em>non vedo l'ora</em> — não vejo a hora",
          "<em>avere le mani in pasta</em> — estar envolvido em tudo",
          "<em>prendere in giro</em> — tirar sarro, zoar",
          "<em>costare un occhio della testa</em> — custar os olhos da cara",
          "<em>essere al verde</em> — estar duro, sem um tostão",
          "<em>fare il punto</em> — fazer um balanço",
          "<em>mettere nero su bianco</em> — pôr preto no branco"
        ]
      },
      {
        trap: "<em>Avere le mani in pasta</em> é um falso amigo perigoso: lembra o seu «pôr a mão na massa» (pegar no trabalho) e o «ser pego com a mão na massa» (ser flagrado), mas não quer dizer nenhum dos dois. Significa estar envolvido no assunto, ter contatos e capacidade de influir, e muitas vezes é dito com admiração. Traduzir pela sua expressão transforma um elogio numa acusação ou numa frase sem sentido."
      },
      {
        h: "Falsos amigos entre português e italiano",
        p: "<em>Burro</em> é manteiga, não um asno (<em>asino</em>). <em>Salire</em> é subir, não sair (<em>uscire</em>). <em>Aceto</em> é vinagre, não azeite (<em>olio</em>). <em>Guardare</em> é olhar, não guardar (<em>conservare</em>). <em>Gamba</em> é perna e não tem nada a ver com gambá. <em>Topo</em> é rato, não o alto de alguma coisa (<em>cima</em>). Esses seis produzem mais mal-entendidos do que qualquer ponto de gramática deste nível, justamente porque soam perfeitos."
      }
    ],
    grammar: {
      title: "Locuções e falsos amigos",
      table: {
        head: ["italiano", "significado", "nota"],
        rows: [
          ["non ci piove", "não há dúvida", "locução"],
          ["non vedo l'ora", "não vejo a hora", "+ di + infinitivo"],
          ["essere al verde", "estar duro", "locução"],
          ["costare un occhio della testa", "custar os olhos da cara", "mesma imagem que em português"],
          ["burro", "manteiga", "falso amigo"],
          ["salire", "subir", "falso amigo"],
          ["aceto", "vinagre", "falso amigo"],
          ["gamba", "perna", "falso amigo"]
        ]
      },
      examples: [
        { tr: "Não vejo a hora de te ver de novo." },
        { tr: "Aquela viagem custou os olhos da cara." },
        { tr: "Vamos fazer um balanço de onde estamos." },
        { tr: "Vamos pôr tudo preto no branco." },
        { tr: "Ele está envolvido em todos os negócios." },
        { tr: "Você está tirando sarro da minha cara?" }
      ]
    },
    vocab: [
      "não há dúvida",
      "não vejo a hora",
      "estar duro",
      "custar os olhos da cara",
      "tirar sarro",
      "fazer um balanço",
      "preto no branco",
      "estar envolvido em tudo",
      "falar com as paredes",
      "manteiga (não: asno)",
      "subir (não: sair)",
      "vinagre (não: azeite)"
    ],
    exercises: [
      {
        q: "Relacione a locução com o seu significado.",
        pairs: ["não há dúvida", "estar duro", "fazer um balanço", "tirar sarro"]
      },
      { q: "«Il burro» em italiano é:", opts: ["um asno", "a manteiga", "uma marca"] },
      { q: "«La colazione» é:", opts: ["o jantar", "o café da manhã", "o almoço"] },
      { q: "Complete: «Non vedo l'ora ___ rivederti.»" },
      {
        q: "«Costare un occhio della testa» significa:",
        opts: ["doer", "custar caríssimo", "não ter preço"]
      },
      {
        q: "Quais são falsos amigos para um falante de português?",
        opts: ["salire", "aceto", "tavolo", "gamba"]
      },
      { q: "Complete as locuções.", tr: "Aquela viagem custou os olhos da cara e agora estou duro." },
      { q: "«Vamos fazer um balanço e pôr tudo preto no branco.»" },
      { tr: "Não há dúvida: a decisão tem que ser tomada hoje." },
      { tr: "Não vejo a hora de este projeto terminar." }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Teste",
    title: "Teste da unidade 2",
    objectives: ["verificar os verbi pronominali, a passiva modal e a fraseologia"],
    theory: [{ p: "Dez tarefas. Aprovação com 70%." }],
    exercises: [
      { q: "«___ l'ho fatta!»" },
      { q: "«___ la cavo con l'italiano.»" },
      { q: "«Non ___ la prendere.»" },
      { q: "«Se ne frega»:", opts: ["se preocupa", "não está nem aí", "cuida disso"] },
      { q: "«Questi dati ___ verificati.» (devem)" },
      {
        q: "Incorreto:",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."]
      },
      { q: "«Il burro»:", opts: ["um asno", "a manteiga", "uma marca"] },
      { q: "Relacione.", pairs: ["estar duro", "não há dúvida", "fazer um balanço", "preto no branco"] },
      { tr: "Não me sinto em condições de decidir agora, vou pensar e te digo alguma coisa." },
      { tr: "Consegui, mas por um triz." }
    ]
  },
  "unit:c1-u03": {
    title: "Registros e coesão textual",
    grammarNote: "burocratese · italiano falado · deslocamento · discurso indireto"
  },
  "lesson:c1-u03-l1": {
    theme: "Estilo",
    title: "A linguagem administrativa: ler, não escrever",
    objectives: [
      "decifrar as construções burocráticas típicas",
      "devolvê-las ao italiano corrente",
      "perceber quando o registro é usado em excesso"
    ],
    theory: [
      {
        h: "Como se reconhece",
        list: [
          "nominalização: <em>si procede all'erogazione</em> em vez de <em>si eroga</em>",
          "passiva e impessoal: <em>si comunica che…</em>",
          "referência para trás: <em>di cui sopra</em>, <em>il predetto</em>, <em>il suddetto</em>",
          "preposições compostas: <em>ai sensi di</em>, <em>in ottemperanza a</em>, <em>ai fini di</em>",
          "léxico latinizante: <em>effettuare</em> por <em>fare</em>, <em>trattasi di</em> por <em>si tratta di</em>"
        ]
      },
      {
        contrast: "Você vai reconhecer cada um desses traços: a repartição pública brasileira escreve igual, e com as mesmas peças latinas. «Comunica-se que», «nos termos do artigo», «supracitado», «o referido», «efetuar o pagamento», «em cumprimento a». A vantagem para ler é enorme; o risco também, porque a familiaridade convida a escrever assim, e em italiano o conselho é o mesmo que em português: entender e não imitar."
      },
      {
        h: "Para que serve",
        p: "O registro administrativo pretende garantir precisão e impessoalidade, muitas vezes à custa da legibilidade. No C1, <b>entender</b> esses textos é uma habilidade necessária; <b>escrever</b> assim não é recomendável fora de um contexto jurídico."
      },
      {
        h: "O movimento inverso: simplificar",
        p: "<em>Si comunica che il pagamento dovrà essere effettuato entro il termine di cui sopra</em> → <em>Il pagamento va fatto entro la data indicata.</em> Vale a pena fazer isso com cada papel oficial que chegar para você: encurta e esclarece."
      }
    ],
    grammar: {
      title: "Burocratese e a sua tradução",
      table: {
        head: ["administrativo", "italiano corrente", "em português"],
        rows: [
          ["si comunica che", "vi informiamo che", "comunica-se que"],
          ["ai sensi dell'art. 5", "secondo l'articolo 5", "nos termos do art. 5"],
          ["di cui sopra", "indicato prima", "supracitado"],
          ["effettuare il pagamento", "pagare", "efetuar o pagamento"],
          ["in ottemperanza a", "seguendo", "em cumprimento a"],
          ["il predetto documento", "quel documento", "o referido documento"],
          ["trattasi di", "si tratta di", "trata-se de"]
        ]
      },
      examples: [
        { tr: "Comunica-se que a repartição permanecerá fechada no dia 2 de junho." },
        { tr: "O pagamento deverá ser efetuado no prazo de trinta dias." },
        { tr: "Nos termos da legislação vigente, o requerimento é inadmissível." },
        { tr: "Solicita-se anexar cópia do documento supracitado." },
        { tr: "O referido prazo é improrrogável." },
        { tr: "Fica o senhor intimado a cessar imediatamente a atividade." }
      ]
    },
    vocab: [
      "nos termos de, conforme",
      "em cumprimento a",
      "supracitado",
      "o referido",
      "efetuar, realizar",
      "peremptório, improrrogável",
      "inadmissível",
      "a legislação vigente",
      "intimar alguém",
      "requerimento, petição",
      "órgão público",
      "descumprimento"
    ],
    exercises: [
      { q: "Relacione o termo administrativo com o corrente.", pairs: ["pagare", "secondo", "indicato prima", "si tratta di"] },
      {
        q: "«Il termine è perentorio» significa:",
        opts: ["o prazo é indicativo", "o prazo é improrrogável", "o prazo foi prorrogado"]
      },
      {
        q: "«La domanda è irricevibile» significa:",
        opts: [
          "o requerimento está incompleto",
          "o requerimento não pode ser admitido",
          "o requerimento está em andamento"
        ]
      },
      { q: "Simplifique: «Il pagamento dovrà essere effettuato» → «Il pagamento ___ fatto»" },
      {
        q: "Simplifique a frase administrativa.",
        tr: "Comunica-se que o requerimento supracitado não pode ser admitido."
      },
      { q: "«Comunica-se que a repartição permanecerá fechada.»" },
      {
        q: "Vale a pena escrever em burocratese no C1?",
        opts: [
          "Sim, é sinal de domínio",
          "Não, é preciso entendê-lo, mas escrever com mais clareza",
          "Sim, em qualquer contexto profissional"
        ]
      },
      { tr: "Solicita-se anexar cópia do documento." },
      { tr: "Nos termos da legislação vigente, o requerimento é inadmissível." },
      { tr: "O pagamento deverá ser efetuado dentro do prazo indicado." }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Estilo",
    title: "O italiano falado e o neo-standard",
    objectives: [
      "reconhecer os traços do italiano falado",
      "usar o deslocamento para soar natural",
      "distinguir o neo-standard de um erro"
    ],
    theory: [
      {
        h: "Neo-standard: não é erro, é outro registro",
        list: [
          "<em>lui / lei</em> como sujeito em vez de <em>egli / ella</em>: hoje é a norma",
          "<em>gli</em> em vez de <em>loro</em> («a eles»): também na escrita informal",
          "o <em>che</em> polivalente: <em>il giorno che sono arrivato</em>",
          "<em>ci</em> em vez de <em>vi</em> para o lugar: <em>ci vado</em>",
          "o imperfeito na condicional: <em>se lo sapevo…</em>"
        ]
      },
      {
        h: "O deslocamento: mover a ênfase",
        p: "<em><b>Il libro</b>, l'ho letto ieri.</em> (deslocamento à esquerda) e <em>L'ho letto ieri, <b>il libro</b>.</em> (à direita). O elemento antecipado é o tema, e o pronome o «sustenta»."
      },
      {
        contrast: "Aqui você está em casa: «esse livro, eu li ontem» é a mesma construção de tópico, e no Brasil ela também não soa enfática, soa normal. A diferença está no pronome: o português brasileiro costuma deixar o objeto sem pronome («li ontem»), enquanto o italiano exige o pronome de retomada: <em>il libro, <b>l'</b>ho letto</em>. Esquecer esse <em>lo</em> é o erro típico do brasileiro; a posição, você pode confiar no seu ouvido."
      },
      {
        h: "O c'è apresentativo",
        p: "<em>C'è Marco che ti cerca.</em> A construção introduz um elemento novo na conversa. O seu «tem o Marco aí te procurando» faz a mesma coisa, com a mesma naturalidade."
      },
      {
        trap: "O neo-standard é aceito na fala e na escrita informal. Num texto de prova, num e-mail formal ou numa publicação vale o padrão: <em>se avessi saputo</em>, não «se sapevo»."
      }
    ],
    grammar: {
      title: "Traços da fala",
      table: {
        head: ["traço", "exemplo", "registro"],
        rows: [
          ["deslocamento à esquerda", "Il libro, l'ho letto.", "fala, aceito"],
          ["deslocamento à direita", "L'ho letto, il libro.", "fala"],
          ["c'è apresentativo", "C'è Marco che ti cerca.", "fala"],
          ["gli por loro", "Gli ho detto tutto.", "neo-standard"],
          ["che polivalente", "Il giorno che sono partito", "fala"],
          ["imperfeito hipotético", "Se lo sapevo, non venivo.", "só fala"]
        ]
      },
      examples: [
        { tr: "Em Roma eu nunca fui.", note: "deslocamento + ci" },
        { tr: "O café eu tomo depois." },
        { tr: "Tem a sua irmã aí fora te esperando." },
        { tr: "Disse a eles que não se preocupassem." },
        { tr: "Essa história, eu não me lembro dela de jeito nenhum." },
        { tr: "De dinheiro é melhor nem falar." }
      ]
    },
    vocab: [
      "deslocamento, topicalização",
      "o novo padrão falado",
      "registro informal",
      "oralidade",
      "espontaneidade",
      "tema / rema",
      "enfatizar",
      "retomar com um pronome",
      "soar natural",
      "soar engessado",
      "aceitável",
      "não recomendável na escrita"
    ],
    exercises: [
      {
        q: "«Il libro, l'ho letto ieri» é:",
        opts: ["um erro de sintaxe", "um deslocamento à esquerda, traço do italiano vivo", "uma construção administrativa"]
      },
      {
        q: "Qual construção não é recomendável na escrita formal?",
        opts: ["Gli ho detto tutto.", "Se lo sapevo, non venivo.", "A Roma ci vado spesso."]
      },
      { q: "Complete o deslocamento: «Il caffè, ___ prendo dopo.»" },
      { q: "Complete: «Di soldi, non ___ parliamo nemmeno.»" },
      {
        q: "«C'è Marco che ti cerca» serve para:",
        opts: ["descrever um lugar", "introduzir informação nova na conversa", "expressar dúvida"]
      },
      { q: "Reescreva com deslocamento.", tr: "Essa história, eu não me lembro dela." },
      { q: "«Em Roma eu nunca fui.»" },
      {
        q: "Quais traços pertencem ao neo-standard?",
        opts: ["lui como sujeito", "gli por loro", "egli como sujeito", "o che polivalente"]
      },
      { tr: "Essa história, eu não me lembro dela de jeito nenhum." },
      { tr: "O café eu tomo depois, agora não estou com vontade." }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Estilo",
    title: "A coesão do texto escrito",
    objectives: [
      "construir um texto argumentativo coerente",
      "usar os recursos de referência para trás",
      "evitar a repetição com sinônimos e hiperônimos"
    ],
    theory: [
      {
        h: "Duas noções diferentes",
        p: "A <b>coesione</b> é a costura da superfície: pronomes, conectivos, repetição lexical. A <b>coerenza</b> é a continuidade lógica do conteúdo. Um texto pode ser formalmente coeso e logicamente incoerente, e vice-versa. O seu par coesão / coerência diz exatamente a mesma coisa."
      },
      {
        h: "Recursos de referência para trás",
        list: [
          "pronomes: <em>lo, ne, ci, questo, ciò</em>",
          "sinônimos e hiperônimos: <em>il provvedimento → la misura → l'intervento</em>",
          "nominalizar a frase anterior: <em>…hanno approvato la legge. <b>L'approvazione</b> ha suscitato…</em>",
          "expressões de retomada: <em>quanto detto, il fenomeno in questione, tale scelta</em>"
        ]
      },
      {
        h: "A progressão temática",
        p: "Num parágrafo bem construído, cada frase retoma um elemento da anterior (o tema) e acrescenta informação nova (o rema). Introduzir um tema completamente novo sem avisar quebra a coesão, mesmo que os conectivos estejam todos no lugar."
      },
      {
        tip: "O estilo escrito italiano não tem medo de frases longas, mas valoriza uma <b>hierarquia clara</b> de subordinadas. Três subordinadas encaixadas uma dentro da outra são sinal de que o parágrafo precisa ser reescrito."
      }
    ],
    grammar: {
      title: "Recursos de coesão",
      table: {
        head: ["recurso", "exemplo", "função"],
        rows: [
          ["pronome", "…la riforma. La si è discussa a lungo.", "referência para trás"],
          ["sinônimo", "il provvedimento / la misura", "evitar a repetição"],
          ["nominalização", "hanno deciso → tale decisione", "compressão"],
          ["retomada", "il fenomeno in questione", "precisão"],
          ["conectivo", "di conseguenza, per contro", "relação lógica"],
          ["sinalização", "come vedremo, in primo luogo", "orientar o leitor"]
        ]
      },
      examples: [
        { tr: "A reforma foi aprovada. Tal decisão provocou reações contrastantes." },
        { tr: "O fenômeno em questão afeta sobretudo as grandes cidades." },
        { tr: "Como veremos, o problema não é só econômico." },
        { tr: "Por outro lado, os dados regionais contam outra história." },
        { tr: "O que foi dito até aqui vale para o setor privado." },
        { tr: "Por conseguinte, a medida deveria ser revista." }
      ]
    },
    vocab: [
      "coesão",
      "coerência",
      "resolução, disposição",
      "medida, intervenção",
      "em questão",
      "tal, o referido",
      "o que foi dito",
      "por outro lado",
      "por conseguinte",
      "suscitar, provocar",
      "contrastante, oposto",
      "afetar, valer para"
    ],
    exercises: [
      {
        q: "Em que coesione e coerenza se diferenciam?",
        opts: [
          "Em nada",
          "A coesione é a costura da superfície, a coerenza a continuidade lógica",
          "A coesione é da fala, a coerenza da escrita"
        ]
      },
      { q: "Complete a retomada: «Hanno approvato la legge. ___ decisione ha sorpreso tutti.»" },
      { q: "Complete: «Il fenomeno in ___ riguarda le grandi città.»" },
      { q: "Relacione.", pairs: ["por outro lado", "por conseguinte", "suscitar", "o que foi dito"] },
      {
        q: "Qual recurso elimina melhor um substantivo repetido?",
        opts: ["retomá-lo com um sinônimo ou um hiperônimo", "acrescentar um adjetivo", "mudar a ordem das palavras"]
      },
      {
        q: "Torne o parágrafo coeso.",
        tr: "A reforma foi aprovada. Tal decisão provocou reações contrastantes. Por conseguinte, a medida deveria ser revista."
      },
      { q: "«Como veremos, o problema não é só econômico.»" },
      {
        q: "Três subordinadas encaixadas são sinal de que:",
        opts: ["o texto é sofisticado", "o parágrafo precisa ser reescrito", "o estilo é administrativo"]
      },
      { tr: "O que foi dito até aqui vale sobretudo para o setor privado." },
      { tr: "Por conseguinte, acho que a medida deveria ser revista." }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Prova",
    title: "Teste — revisão das unidades 1-3",
    objectives: ["verificar o si, os verbi pronominali, os registros e a coesão"],
    theory: [{ p: "Doze tarefas das três primeiras unidades. Aprovação com 70%." }],
    exercises: [
      { q: "«Qui si ___ appartamenti.»", opts: ["affitta", "affittano", "affittare"] },
      { q: "«___ si abitua a tutto.»" },
      { q: "«Un'informazione certa»:", opts: ["certa", "segura", "confidencial"] },
      { q: "«___ l'ho fatta!»" },
      { q: "«Non ___ la sento di decidere.»" },
      { q: "«La domanda ___ presentata entro il 30.» (deve)" },
      { q: "«Il termine è perentorio»:", opts: ["indicativo", "improrrogável", "prorrogado"] },
      {
        q: "«Se lo sapevo, non venivo» é:",
        opts: ["o padrão escrito", "o neo-standard falado", "sempre incorreto"]
      },
      { q: "«Il fenomeno in ___ riguarda le città.»" },
      { q: "Superlativo culto de «acre»: ___" },
      { q: "«Estes dados devem ser verificados antes da publicação.»" },
      { tr: "A gente se acostuma com tudo, mas nunca chega a se conformar." }
    ]
  }
});
