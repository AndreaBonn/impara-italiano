/* ============================================================
   Textos na língua do aluno (pt, português do Brasil) para data/core/conversations.js
   As chaves remetem aos id da camada neutra; os arrays se unem
   por índice, então o comprimento deve coincidir com o core.
   Quem confere é scripts/parity.mjs.

   Nota: as respostas-modelo em italiano ficam no core e estão
   gravadas em áudio, então uma instrução que leva a «Sono dalla
   Polonia» continua dizendo Polônia aqui. Mudar o país obrigaria a
   regenerar os mp3.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "conv:bar-mattina": {
    title: "Café da manhã no bar",
    setting: "Segunda-feira, 8h15. Você entra no bar da esquina. O barista já te conhece de vista.",
    closing: "Três minutos, um café, nem um segundo a mais. Assim é o café da manhã italiano.",
    turns: [
      { tr: "Bom dia! O que vai ser?" },
      { task: "Cumprimente e peça um café e um cornetto.", tr: "Bom dia, um café e um cornetto, por favor." },
      { tr: "O cornetto simples ou recheado de creme?" },
      { task: "Diga que prefere simples.", tr: "Simples, obrigado." },
      { tr: "Perfeito. São dois e trinta." },
      { task: "Diga que vai pagar com cartão.", tr: "Posso pagar com cartão?" },
      { tr: "Claro, a maquininha está bem aqui. Bom dia pra você!" },
      { task: "Agradeça e despeça-se.", tr: "Obrigado, bom dia!" }
    ]
  },
  "conv:presentarsi": {
    title: "Primeiro dia de aula",
    setting: "Uma escola de idiomas em Florença. Alguém se senta ao seu lado antes de começar.",
    closing: "Quatro frases e você já tem sua primeira amizade italiana. Não precisa de mais.",
    turns: [
      { tr: "Oi! Posso sentar aqui?" },
      { task: "Diga que sim, com simpatia.", tr: "Claro, fique à vontade!" },
      { tr: "Obrigado. Eu sou o Matteo, e você, como se chama?" },
      { task: "Apresente-se com o seu nome.", tr: "Meu nome é Anna." },
      { tr: "Prazer! De onde você é?" },
      { task: "Diga que é da Polônia: é a resposta-modelo gravada.", tr: "Sou da Polônia." },
      { tr: "Que legal! E o que você faz?" },
      { task: "Diga qual é a sua profissão (professora, por exemplo).", tr: "Sou professora." }
    ]
  },
  "conv:mercato": {
    title: "Na feira do bairro",
    setting: "Sábado de manhã, feira ao ar livre. O feirante grita os preços de uma calçada à outra.",
    closing: "Na feira, o que conta é o ritmo e a precisão. Etti, chili, basta così.",
    turns: [
      { tr: "Pois não, senhora! Hoje tenho uns tomates lindos." },
      { task: "Peça um quilo de tomates.", tr: "Um quilo de tomates, por favor." },
      { tr: "Aqui está. Mais alguma coisa? Hoje as maçãs estão baratas." },
      { task: "Pergunte quanto custam as maçãs.", tr: "Quanto estão as maçãs?" },
      { tr: "Dois euros o quilo. Docinhas." },
      { task: "Diga que é só isso e pergunte quanto dá no total.", tr: "É só isso, quanto dá no total?" },
      { tr: "Quatro e cinquenta. Obrigado!" }
    ]
  },
  "conv:ristorante": {
    title: "Jantar no restaurante",
    setting: "À noite, um restaurante, sem reserva. O garçom se aproxima com os cardápios.",
    closing: "Pedir em italiano segue uma ordem fixa: primo, secondo, contorno, dolce, caffè.",
    turns: [
      { tr: "Boa noite! Vocês têm reserva?" },
      {
        task: "Diga que não e pergunte se há mesa para dois.",
        tr: "Não, tem mesa para dois?"
      },
      { tr: "Claro, sentem-se. Aqui estão os cardápios. Algo para beber?" },
      {
        task: "Peça uma garrafa de água com gás e uma taça de vinho tinto.",
        tr: "Uma garrafa de água com gás e uma taça de vinho tinto."
      },
      { tr: "Muito bem. E de primeiro prato?" },
      {
        task: "Peça o cacio e pepe e pergunte se é apimentado.",
        tr: "Vou querer o cacio e pepe. É apimentado?"
      },
      { tr: "Só um pouco, dá para sentir a pimenta. Vão querer um segundo prato?" },
      {
        task: "Recuse com educação e peça a conta para depois.",
        tr: "Não, obrigado, só a conta depois, por favor."
      }
    ]
  },
  "conv:treno": {
    title: "Na bilheteria",
    setting: "Roma Termini, fila na bilheteria, o painel de partidas piscando lá em cima.",
    closing: "Regionale ou Frecciarossa: a diferença é uma hora de viagem e trinta euros.",
    turns: [
      { tr: "O próximo, por favor." },
      {
        task: "Peça uma passagem para Florença para hoje à tarde.",
        tr: "Uma passagem para Florença para hoje à tarde."
      },
      { tr: "Regional ou Frecciarossa? O Freccia leva uma hora e meia." },
      { task: "Pergunte quanto custa o Frecciarossa.", tr: "Quanto custa o Frecciarossa?" },
      { tr: "Quarenta e dois euros na segunda classe." },
      { task: "Aceite e pergunte de qual plataforma ele sai.", tr: "Tá bom, de qual plataforma ele sai?" },
      { tr: "Plataforma 9, daqui a vinte minutos. Lembre-se de validar a passagem se pegar o regional." }
    ]
  },
  "conv:medico": {
    title: "No médico",
    setting: "Um posto de saúde, atendimento sem hora marcada. O médico pergunta o que você tem.",
    closing: "Três frases te salvam no médico: mi fa male, da quanto tempo, ho la febbre.",
    turns: [
      { tr: "Bom dia, sente-se. O que está sentindo?" },
      { task: "Diga que está com dor de garganta e com febre.", tr: "Estou com dor de garganta e com febre." },
      { tr: "Desde quando?" },
      { task: "Diga que faz três dias.", tr: "Faz três dias." },
      { tr: "Tem alergia a algum medicamento?" },
      { task: "Diga que não tem alergias.", tr: "Não, não tenho alergias." },
      { tr: "Vou receitar um antibiótico. Repouso e beba bastante água." },
      { task: "Pergunte quantas vezes por dia é preciso tomar.", tr: "Quantas vezes por dia eu tenho que tomar?" }
    ]
  },
  "conv:affitto": {
    title: "Visita a um apartamento",
    setting: "Um corretor te mostra um apartamento de um quarto em Bolonha. Você tem dez minutos e cem perguntas.",
    closing: "Três coisas para perguntar sempre: spese condominiali, cauzione, tipo di contratto.",
    turns: [
      { tr: "Bem, aqui está o apartamento. Como você vê, claro e recém-reformado." },
      { task: "Pergunte quanto é o aluguel por mês.", tr: "Quanto é o aluguel por mês?" },
      { tr: "Setecentos por mês, sem as despesas." },
      { task: "Pergunte quanto dá o condomínio.", tr: "Quanto dá o condomínio?" },
      { tr: "Uns noventa euros, aquecimento incluído." },
      { task: "Pergunte o tipo de contrato e o valor do depósito-caução.", tr: "Que tipo de contrato é? E de quanto é a caução?" },
      { tr: "Contrato 4+4, caução de três aluguéis." },
      { task: "Diga que vai pensar e responde amanhã.", tr: "Vou pensar e te dou uma resposta amanhã." }
    ]
  },
  "conv:colloquio": {
    title: "Entrevista de emprego",
    setting: "Uma agência de marketing em Milão. O RH abre com a pergunta de sempre.",
    closing: "Numa entrevista italiana se fala de coisas concretas, e ninguém se diminui sozinho.",
    turns: [
      { tr: "Bem, fale um pouco sobre você." },
      {
        task: "Diga seu nome, quantos anos de experiência tem e em quê.",
        tr: "Meu nome é Anna, tenho cinco anos de experiência em marketing digital."
      },
      { tr: "Por que decidiu se candidatar aqui?" },
      {
        task: "Diga que te interessa a abordagem deles nos projetos internacionais.",
        tr: "Porque me interessa a abordagem de vocês nos projetos internacionais."
      },
      { tr: "Qual diria que é o seu ponto fraco?" },
      {
        task: "Admita um ponto fraco e diga como está trabalhando nele.",
        tr: "Tenho a tendência de querer controlar tudo, mas estou aprendendo a delegar."
      },
      { tr: "Muito bem. Tem alguma pergunta para nós?" },
      {
        task: "Pergunte sobre a equipe e sobre as próximas etapas do processo.",
        tr: "Sim: como é a equipe e quais são as próximas etapas?"
      }
    ]
  },
  "conv:burocrazia": {
    title: "Na Receita italiana",
    setting: "Na fila para tirar o codice fiscale. Você tem a senha 87 e o painel mostra 61.",
    closing: "O codice fiscale é a chave de tudo na Itália: conta no banco, contratos, médico, chip de celular.",
    turns: [
      { tr: "Senha oitenta e sete, guichê três. Bom dia, do que precisa?" },
      { task: "Diga que precisa solicitar o codice fiscale.", tr: "Preciso solicitar o codice fiscale." },
      { tr: "Tem um documento válido e o formulário preenchido?" },
      {
        task: "Diga que tem o passaporte, mas não o formulário.",
        tr: "Tenho o passaporte, mas não tenho o formulário."
      },
      { tr: "Não tem problema, eu te dou um. Escreva em letra de forma, por favor." },
      { task: "Pergunte quanto tempo demora.", tr: "Quanto tempo demora?" },
      { tr: "Eu emito agora mesmo, é na hora." }
    ]
  },
  "conv:dibattito": {
    title: "Discussão no jantar",
    setting: "Jantar na casa de amigos. Surge o assunto do home office e ninguém pretende ceder.",
    closing: "Os italianos se interrompem quando discutem: não é falta de educação, é interesse.",
    turns: [
      { tr: "Para mim o home office destruiu o espírito de equipe. O que você acha?" },
      {
        task: "Concorde em parte e acrescente um contra-argumento.",
        tr: "Em parte eu concordo, mas também diminuiu o estresse de quem passa o dia no carro."
      },
      { tr: "Tá, mas você não acha que os jovens aprendem menos se não estão no escritório?" },
      {
        task: "Responda que depende de como a empresa organiza o acompanhamento.",
        tr: "Isso depende de como a empresa organiza o acompanhamento."
      },
      { tr: "Nisso eu te dou razão. Mas o híbrido é o pior dos dois mundos, para mim." },
      {
        task: "Discorde com firmeza e apoie-se em um argumento.",
        tr: "Não concordo nem um pouco: o híbrido permite escolher conforme o tipo de trabalho."
      }
    ]
  },
  "conv:ristorante-scelte": {
    title: "À mesa, com algumas escolhas",
    setting: "Sexta à noite, a trattoria da esquina. Desta vez a conversa segue o que você diz: em três momentos você escolhe entre duas respostas.",
    closing: "A conta final batia com o que foi pedido à mesa. Essa é a diferença entre uma escolha e um enfeite.",
    turns: [
      { tr: "Boa noite. Vocês têm reserva?" },
      { task: "Diga se vocês têm reserva.", opts: [
        { tr: "Sim, tenho uma reserva em nome de Rossi." },
        { tr: "Não, somos dois. Tem lugar?" }
      ] },
      { tr: "Perfeito. A mesa ao lado da janela. Por aqui, por favor." },
      { tr: "Tem uma mesa para dois no fundo do salão. Fiquem à vontade." },
      { tr: "Aqui está o cardápio. Enquanto isso, querem pedir algo para beber?" },
      { task: "Peça uma garrafa de água sem gás.", tr: "Uma garrafa de água sem gás, por favor." },
      { tr: "Sem gás, já trago. E de primeiro prato?" },
      { task: "Escolha o primeiro prato.", opts: [
        { tr: "Para mim, carbonara." },
        { tr: "Massa ao sugo: sou vegetariana." }
      ] },
      { tr: "Hoje a carbonara está ótima, o guanciale está crocante." },
      { tr: "Então recomendo tomate e manjericão: o manjericão é da nossa horta." },
      { tr: "Uma sobremesa para terminar? O tiramisù é feito aqui." },
      { task: "Decida se quer sobremesa.", opts: [
        { tr: "Sim, o tiramisù, obrigada." },
        { tr: "Não, obrigada, só um café." }
      ] },
      { tr: "Ótima escolha, já trago." },
      { tr: "Um café, muito bem." },
      { tr: "Aqui está a conta: primeiro prato, água e tiramisù. Vinte e dois euros." },
      { tr: "Aqui está a conta: primeiro prato, água e café. Dezesseis euros." },
      { task: "Pergunte se pode pagar com cartão.", tr: "Posso pagar com cartão?" },
      { tr: "Claro, a maquininha está aqui. Obrigado e boa noite." }
    ]
  },
  "conv:treno-perso": {
    title: "No guichê, depois de perder o trem",
    setting: "A estação, terça de manhã. Na frente, a bilheteria e a fila; para trás, um trem que já não está mais lá.",
    closing: "A mesma conversa custa oito euros ou nada. A diferença foi uma frase no começo.",
    turns: [
      { tr: "Bom dia, pois não." },
      { task: "Diga o que aconteceu com o seu trem.", opts: [
        { tr: "Perdi o trem das 9h20 para Bolonha." },
        { tr: "Cancelaram o meu trem para Bolonha." }
      ] },
      { tr: "Trem perdido não tem reembolso. A passagem eu posso refazer, pagando a diferença." },
      { tr: "O próximo para Bolonha sai às 11h40. São oito euros." },
      { tr: "Cancelado por causa da greve, sinto muito. Nesse caso a troca não custa nada." },
      { tr: "O próximo para Bolonha sai às 11h40. Você não paga nada." },
      { task: "Decida se vai pegar o das 11h40.", opts: [
        { tr: "Tá bom, vou pegar o das 11h40." },
        { tr: "Tem algum antes?" }
      ] },
      { tr: "Perfeito. Plataforma sete, vagão quatro." },
      { tr: "Antes só tem o regional das 10h15, mas ele leva duas horas e meia." },
      { task: "Escolha entre o regional e esperar.", opts: [
        { tr: "Tanto faz, vou pegar o regional." },
        { tr: "Então eu espero o das 11h40." }
      ] },
      { tr: "Regional das 10h15, plataforma três." },
      { tr: "Aqui está a passagem. Boa viagem!" },
      { task: "Agradeça e despeça-se.", tr: "Muito obrigado, bom dia." },
      { tr: "Até logo." }
    ]
  },
  "conv:casa-visita": {
    title: "Visita a um apartamento",
    setting: "Sábado à tarde, segundo andar sem elevador. A corretora abre a porta e espera a sua reação.",
    closing: "O preço, ou se pergunta, ou não se pergunta. Aqui se vê quanto custou não perguntar.",
    turns: [
      { tr: "Bem, esta é a sala. O que achou?" },
      { task: "Diga a sua primeira impressão.", opts: [
        { tr: "Gostei, mas é menor do que nas fotos." },
        { tr: "É bem claro, gostei." }
      ] },
      { tr: "As fotos sempre enganam um pouco. Mesmo assim são trinta e cinco metros quadrados, sem corredor desperdiçado." },
      { tr: "Sim, é de face sul: no inverno o aquecimento quase não precisa ser ligado." },
      { tr: "O condomínio é de oitenta euros por mês, aquecimento incluído." },
      { tr: "O aluguel é de setecentos euros." },
      { task: "Pergunte o que mais te interessa agora.", opts: [
        { tr: "O preço é negociável?" },
        { tr: "Desde quando está livre?" }
      ] },
      { tr: "Com um contrato de quatro anos o proprietário baixa para seiscentos e cinquenta." },
      { tr: "Está livre a partir do dia primeiro do mês que vem." },
      { tr: "A partir do dia primeiro do mês que vem. O preço, porém, continua setecentos." },
      { task: "Decida se fica com o apartamento.", opts: [
        { tr: "Vou ficar com ele." },
        { tr: "Vou pensar e te aviso." }
      ] },
      { tr: "Muito bem. Te mando o contrato por e-mail até amanhã." },
      { tr: "A gente se fala nos próximos dias." },
      { tr: "Claro, pense com calma. Meu número você já tem." },
      { task: "Agradeça e despeça-se.", tr: "Obrigado, até logo." },
      { tr: "Até logo." }
    ]
  },
  "conv:medico-gola": {
    title: "No médico, com dor de garganta",
    setting: "Segunda-feira, posto de saúde. Quarenta minutos na sala de espera, cinco no consultório.",
    closing: "A mesma garganta, duas receitas diferentes. Quem decidiu foi uma frase sobre engolir.",
    turns: [
      { tr: "Bom dia, sente-se. Pode falar." },
      { task: "Descreva os sintomas.", opts: [
        { tr: "Estou há três dias com dor de garganta e febre." },
        { tr: "Estou há três dias com dor de garganta, mas sem febre." }
      ] },
      { tr: "Três dias com febre. Até quanto subiu?" },
      { tr: "Trinta e oito e meio é bastante. Abra a boca, por favor." },
      { tr: "Sem febre já é uma boa notícia. Abra a boca, por favor." },
      { tr: "A garganta está bem vermelha. Está difícil engolir?" },
      { task: "Diga se está difícil engolir.", opts: [
        { tr: "Sim, está difícil engolir." },
        { tr: "Não, só incomoda." }
      ] },
      { tr: "Então vou receitar um antibiótico: um comprimido a cada doze horas, por seis dias." },
      { tr: "Então nada de antibiótico: gargarejo com água e sal, e bastante líquido quente." },
      { tr: "De qualquer forma, repouso. Se em três dias não melhorar, volte." },
      { task: "Faça uma pergunta sobre o seu dia a dia.", opts: [
        { tr: "Tenho que ficar em casa sem ir trabalhar?" },
        { tr: "Posso fazer esporte?" }
      ] },
      { tr: "Vou fazer o atestado de três dias e eu mesmo mando para a sua empresa." },
      { tr: "Esporte não, pelo menos enquanto a garganta estiver assim. Caminhar, sim." },
      { tr: "Até mais. Melhoras." },
      { task: "Agradeça ao médico e despeça-se.", tr: "Obrigado, doutor, até logo." },
      { tr: "Até logo." }
    ]
  }
});
