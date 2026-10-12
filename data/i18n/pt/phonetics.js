/* ============================================================
   Pares mínimos — textos em português do Brasil (pt).

   As notas contrastivas são escritas para quem fala português do
   Brasil, não traduzidas: o problema é diferente em cada língua. O
   português não distingue consoantes longas, mas tem e aberto e
   fechado, lh e nh, e acento que muda o sentido, então várias seções
   são mais fáceis aqui do que para outros alunos.
   ============================================================ */
LINGUAI.addStrings("pt", {

  "ph:ph-doppie": {
    title: "Consoantes dobradas",
    note: "Uma consoante dobrada é um único som sustentado por mais tempo, não dois sons seguidos. Em nonno a língua fica contra os alvéolos quase o dobro do tempo que em nono.",
    contrast: "No português, letra dobrada é só convenção de escrita: <i>rr</i> marca o r forte (entre <i>carro</i> e <i>caro</i> muda o tipo de r, não a duração) e <i>ss</i> marca o som de s entre vogais (<i>passo</i>), mas nenhuma das duas dura mais. Então seu ouvido nunca precisou medir quanto dura uma consoante, e aí está o problema: <i>nonno</i> é avô e <i>nono</i> é nono (ordinal). Cuidado também com o r do começo da palavra: em <i>rossa</i> e <i>rosa</i> ele é vibrado com a ponta da língua, e não o r “aspirado” que a maior parte do Brasil usa em <i>rosa</i> ou <i>rato</i> (quem é de regiões do Sul onde o r é vibrado já tem esse som). O que distingue as duas palavras, porém, é o ss. Primeiro é preciso ouvir; enquanto o ouvido não distinguir, a boca não vai distinguir.",
    pairs: [
      { glossA: "avô", glossB: "nono (ordinal)" },
      { glossA: "sete", glossB: "sede (de beber)" },
      { glossA: "caixa", glossB: "casa" },
      { glossA: "caneta", glossB: "pena, castigo" },
      { glossA: "bola", glossB: "pá" },
      { glossA: "sono", glossB: "(eu) sou" },
      { glossA: "noite", glossB: "notas" },
      { glossA: "vermelha", glossB: "rosa" }
    ]
  },

  "ph:ph-accento": {
    title: "Onde cai o acento",
    note: "Em italiano o acento pode cair na antepenúltima sílaba, na penúltima ou na última, e é ele que decide qual palavra você disse. O acento escrito (àncora) é uma ajuda para aprender: o italiano comum não o marca.",
    contrast: "Aqui você joga em casa: o português faz o mesmo com <i>sábia</i>, <i>sabia</i> e <i>sabiá</i>. A diferença é que o português avisa na escrita e o italiano não, então você lê depressa e põe o acento na penúltima, o que acerta quase sempre e erra justamente onde importa. <i>Àncora</i> é âncora, <i>ancòra</i> é ainda.",
    pairs: [
      { glossA: "âncora", glossB: "ainda, de novo" },
      { glossA: "príncipes", glossB: "princípios" },
      { glossA: "imediatamente, já", glossB: "sofrido, suportado" },
      { glossA: "(eu) apareço, me acontece", glossB: "entendido" },
      { glossA: "ler", glossB: "leves (f. pl.)" }
    ]
  },

  "ph:ph-e-aperta": {
    title: "E aberto e fechado",
    note: "O è aberto se pronuncia com a boca mais aberta que o é fechado. A distinção varia de região para região e os próprios italianos não chegam a um acordo, mas nestes dois pares ela muda a palavra.",
    contrast: "Esse contraste você já tem: o português distingue e aberto e fechado em <i>sede</i> (é, a sede da empresa) e <i>sede</i> (ê, vontade de beber). A armadilha é outra: as palavras não se distribuem do mesmo jeito nas duas línguas, e o reflexo de copiar a vogal do parente português engana com frequência. Aprenda a vogal de cada palavra italiana pelo áudio, não pela palavra portuguesa. E, se errar, o contexto costuma salvar uma e trocada; uma consoante com a duração errada, não.",
    pairs: [
      { glossA: "pêssego", glossB: "pesca" },
      { glossA: "aceita", glossB: "machadinha" }
    ]
  },

  "ph:ph-gli": {
    title: "O som GL",
    note: "gl antes de i é um único som: o meio da língua encosta no palato e o ar sai pelos lados. Não é um l nem um l seguido de i.",
    contrast: "Você já tem esse som: é o <i>lh</i> de <i>filho</i> e <i>olho</i>. <i>Figli</i> soa como “filhi” e <i>moglie</i> como “môlhe”, com o e final pronunciado como e, não como i. Do mesmo jeito, o gn italiano é o nosso <i>nh</i>: <i>bagno</i> soa como “banho”, mas sem nasalizar o a. O perigo aqui está na leitura, não na boca: diante da grafia gli, o reflexo é pronunciar o g («fíg-li», como em <i>glicose</i>) ou reduzir tudo a um l simples — e aí <i>figli</i> (filhos) vira <i>fili</i> (fios).",
    pairs: [
      { glossA: "artigo: os; lhe", glossB: "os (pronome)" },
      { glossA: "filhos", glossB: "fios, cabos" },
      { glossA: "esposa", glossB: "moles (pl.)" }
    ]
  },

  "ph:ph-dolci-dure": {
    title: "C e G suaves ou duros",
    note: "c e g ficam suaves antes de e e i: ci soa como o <i>ti</i> de <i>tia</i> na pronúncia da maior parte do Brasil (“tchi”), gi como o <i>di</i> de <i>dia</i> (“dji”). Se na sua região <i>tia</i> soa “ti”, pense no tch de <i>tchau</i> e no dj de <i>Djalma</i>. Um h no meio os torna duros: chi é <i>qui</i>, ghi é <i>gui</i>.",
    contrast: "A lógica é a do português, mas o resultado muda em três pontos: o c italiano antes de e/i não é s, é “tch”; o g antes de e/i não é o j de <i>gente</i>, é “dj”; e onde o português escreve <i>qu</i> ou <i>gu</i>, o italiano escreve <i>ch</i> e <i>gh</i>. Então esqueça o ch de <i>chave</i>: <i>pesche</i> se lê “péske”, pêssegos. Já <i>pesce</i> (sc antes de e) soa quase como o nosso <i>peixe</i>.",
    pairs: [
      { glossA: "beijos", glossB: "bichos-da-seda, larvas" },
      { glossA: "peixe", glossB: "pêssegos" },
      { glossA: "volta, passeio", glossB: "arganaz (roedor)" }
    ]
  }

});
