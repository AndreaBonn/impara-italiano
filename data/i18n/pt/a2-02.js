/* ============================================================
   Texto na língua do aluno (pt, português do Brasil) para data/core/a2-02.js
   As chaves apontam para os id da camada neutra; os arrays se
   combinam por índice, então o comprimento deve coincidir com o core.
   Quem confere é scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pt", {
  "unit:a2-u05": { title: "Apartamentos e bairros", grammarNote: "o ci locativo · anúncios · descrever um lugar" },
  "lesson:a2-u05-l1": {
    theme: "Moradia",
    title: "Anúncios e procura de apartamento",
    objectives: [
      "ler um anúncio de aluguel italiano",
      "perguntar sobre o aluguel, o condomínio e a caução",
      "descrever o que você procura"
    ],
    theory: [
      {
        h: "Os anúncios são escritos em código",
        p: "<em>Bilocale</em> é um apartamento com um quarto mais a sala, não «dois quartos». O que conta é o <b>número de cômodos de estar, sala incluída</b>: <em>monolocale</em> (quitinete, estúdio), <em>bilocale</em>, <em>trilocale</em>. A cozinha e o banheiro não contam, ao contrário do anúncio brasileiro, que diz quantos dormitórios há."
      },
      {
        h: "Três valores sobre os quais é preciso perguntar",
        list: [
          "<b>l'affitto</b> — o aluguel propriamente dito",
          "<b>le spese condominiali</b> — o condomínio (muitas vezes de 50 a 150 euros por mês, nem sempre incluído)",
          "<b>la cauzione</b> — a caução, normalmente dois ou três aluguéis"
        ]
      },
      {
        h: "Tipos de contrato",
        p: "O <strong>4+4</strong> é um contrato de quatro anos com renovação automática; o <strong>3+2</strong> tem aluguel regulado (<em>canone concordato</em>), muitas vezes mais vantajoso em termos fiscais. O <em>contratto transitorio</em> é de curta duração, para estudantes e trabalhadores temporários."
      },
      {
        tip: "Abreviaturas dos anúncios: <em>mq</em> (metros quadrados), <em>p. terra</em> (térreo), <em>ammobiliato/arredato</em> (mobiliado), <em>spese escluse</em> (condomínio à parte), <em>rif.</em> (referência). A numeração dos andares coincide com a sua: <em>piano terra</em> é o térreo e <em>primo piano</em> o primeiro andar, então aqui não tem pegadinha."
      }
    ],
    grammar: {
      title: "Vocabulário dos anúncios",
      table: {
        head: ["abreviatura / palavra", "significado", "nota"],
        rows: [
          ["monolocale", "quitinete, estúdio", "um único cômodo"],
          ["bilocale", "sala + um quarto", "não são dois quartos"],
          ["arredato", "mobiliado", "o contrário: vuoto"],
          ["spese escluse", "condomínio à parte", "é preciso somar o condomínio"],
          ["cauzione", "caução", "normalmente 2 ou 3 aluguéis"],
          ["luminoso", "claro, bem iluminado", "o adjetivo favorito dos anúncios"]
        ]
      },
      examples: [
        { tr: "Procuro um apartamento de um quarto mobiliado na região da universidade." },
        { tr: "Quanto é o aluguel mensal com condomínio?" },
        { tr: "Quanto é o condomínio?" },
        { tr: "A caução é de três aluguéis." },
        { tr: "É um contrato 4+4 ou temporário?" },
        { tr: "Aceitam animais?" }
      ]
    },
    vocab: [
      "aluguel",
      "alugar",
      "proprietário, locador",
      "inquilino",
      "condomínio (taxa)",
      "caução",
      "contrato de aluguel",
      "mobiliado / sem móveis",
      "claro, bem iluminado",
      "térreo",
      "aquecimento",
      "imobiliária"
    ],
    exercises: [
      {
        q: "Um «bilocale» é um apartamento:",
        opts: ["com dois quartos", "com sala e um quarto", "de dois andares"]
      },
      { q: "«Spese escluse» significa:", opts: ["condomínio incluído", "condomínio à parte", "sem caução"] },
      { q: "Complete: «La ___ è di tre mensilità.» (a caução)" },
      { q: "Relacione.", pairs: ["inquilino", "proprietário", "mobiliado", "térreo"] },
      { q: "«Quanto é o condomínio?»" },
      {
        q: "Complete as perguntas ao proprietário.",
        tr: "Quanto é o aluguel mensal? O condomínio está incluído? E a caução?"
      },
      { tr: "Procuro um apartamento de um quarto mobiliado no centro." },
      {
        q: "Um contrato «4+4» é:",
        opts: ["de quatro meses", "de quatro anos com renovação automática", "para quatro inquilinos"]
      },
      { tr: "Apartamento de um quarto, bem iluminado, mobiliado, segundo andar, condomínio à parte." },
      { tr: "Gostaria de saber quanto é o condomínio." }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Moradia",
    title: "A partícula ci",
    objectives: [
      "substituir uma expressão de lugar por ci",
      "reconhecer ci nas expressões fixas",
      "distinguir o ci de lugar do ci que significa «nos»"
    ],
    theory: [
      {
        h: "Ci substitui um lugar",
        p: "<em>Vai a Roma? — Sì, <b>ci</b> vado domani.</em> Aqui <em>ci</em> significa «lá» e ocupa o lugar de toda a expressão de lugar."
      },
      {
        contrast: "O português não tem esse pronome. Você diz «vou lá», com um advérbio, ou simplesmente «vou amanhã», sem nada. O italiano tem uma partícula átona que vai antes do verbo e a usa o tempo todo: omiti-la soa pesado. É um dos poucos pontos deste nível em que não há nada para transferir, só para construir."
      },
      {
        h: "Ci também substitui «a + coisa»",
        p: "<em>Pensi all'esame? — <b>Ci</b> penso sempre.</em> («penso nisso o tempo todo»). Atenção: com pessoas é diferente, <em>penso <b>a lei</b></em>, não «ci penso»."
      },
      {
        h: "Ci em verbos fundidos",
        list: [
          "<em>volerci</em> — ser preciso, levar (tempo): <em>Ci vogliono due ore.</em> («leva duas horas»)",
          "<em>metterci</em> — demorar (alguém): <em>Ci metto un'ora.</em>",
          "<em>farcela</em> — dar conta: <em>Non ce la faccio più.</em>",
          "<em>entrarci</em> — ter a ver: <em>Che c'entra?</em> («o que isso tem a ver?»)"
        ]
      },
      {
        trap: "A mesma forma <em>ci</em> significa também «nos»: <em>ci vedono</em> (nos veem), <em>ci hanno detto</em> (nos disseram). Quem decide é o contexto e o verbo."
      }
    ],
    grammar: {
      title: "Os valores de ci",
      table: {
        head: ["função", "exemplo", "em português"],
        rows: [
          ["lugar", "Ci vado domani.", "Vou lá amanhã."],
          ["a + coisa", "Ci penso io.", "Deixa comigo."],
          ["volerci", "Ci vogliono due ore.", "Leva duas horas."],
          ["metterci", "Ci metto mezz'ora.", "Levo meia hora."],
          ["farcela", "Ce la faccio!", "Eu dou conta!"],
          ["nos", "Ci hanno invitati.", "Nos convidaram."]
        ]
      },
      examples: [
        { tr: "Você já esteve na Sicília? — Sim, estive lá duas vezes." },
        { tr: "Quanto tempo leva daqui até a estação?" },
        { tr: "Levo vinte minutos a pé." },
        { tr: "Não aguento mais, estou exausto." },
        { tr: "O que isso tem a ver com o contrato?" },
        { tr: "Vou à feira todo sábado." }
      ]
    },
    vocab: [
      "vou lá",
      "leva, é preciso",
      "levo (tempo)",
      "dar conta",
      "o que isso tem a ver?",
      "a mudança",
      "vizinho",
      "o condomínio (associação)",
      "portão, entrada do prédio",
      "interfone",
      "conta, recibo",
      "encanador"
    ],
    exercises: [
      { q: "«Vai a Roma? — Sì, ___ vado domani.»", opts: ["la", "ci", "ne"] },
      { q: "Complete: «Quanto ___ vuole da qui alla stazione?»" },
      { q: "Complete: «___ metto venti minuti.»" },
      {
        q: "«Ci vogliono due ore» significa:",
        opts: ["Queremos duas horas", "Leva duas horas", "Temos duas horas"]
      },
      {
        q: "«Non ce la faccio più» significa:",
        opts: ["Não faço mais isso", "Não aguento mais", "Não sobrou mais"]
      },
      {
        q: "Em quais frases «ci» indica um lugar?",
        opts: ["Ci vado domani.", "Ci hanno invitati.", "In palestra ci vado poco.", "Ci penso io."]
      },
      { q: "Complete.", tr: "— Quanto tempo você leva no trajeto? — Levo meia hora de metrô." },
      { q: "«Vou à feira todo sábado.»" },
      { tr: "São necessárias pelo menos duas horas para terminar a mudança." },
      { tr: "Vou a pé até o centro, levo vinte minutos." }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Moradia",
    title: "Descrever o interior",
    objectives: [
      "nomear os cômodos e os móveis",
      "descrever a planta de um apartamento",
      "usar as preposições de posição"
    ],
    theory: [
      {
        h: "Um apartamento italiano segue outra lógica",
        p: "<em>Il soggiorno</em> (a sala) costuma servir também de sala de jantar; a cozinha tende a ser um espaço pequeno à parte (uma <em>cucina abitabile</em> é aquela em que dá para comer). <em>Il ripostiglio</em> é o depósito interno, um quartinho para guardar coisas, não um closet."
      },
      {
        h: "Balcone, terrazzo, loggia",
        p: "<em>Il balcone</em> fica para fora do prédio, <em>la loggia</em> fica recuada para dentro, <em>il terrazzo</em> é grande e costuma ficar na cobertura. Nos anúncios a diferença aparece no preço."
      },
      {
        h: "Preposições para a planta",
        p: "<em>a destra / a sinistra di</em>, <em>di fronte a</em>, <em>accanto a</em>, <em>in fondo a</em>, <em>sopra / sotto</em>, <em>tra</em>. Todas pedem <em>a</em> ou <em>di</em>, então voltam as preposições articuladas: <em>accanto <b>alla</b> finestra</em>."
      },
      {
        tip: "Os andares são contados a partir do <em>piano terra</em> para cima, exatamente como no Brasil: <em>primo piano</em> é o seu primeiro andar, o que fica acima do térreo. Aqui você não precisa recalcular nada."
      }
    ],
    grammar: {
      title: "Cômodos e móveis",
      table: {
        head: ["cômodo", "móveis típicos", "frase de exemplo"],
        rows: [
          ["il soggiorno", "il divano, la poltrona", "Il divano è di fronte alla finestra."],
          ["la cucina", "il frigorifero, il forno", "Il forno è sotto il piano cottura."],
          ["la camera da letto", "il letto, l'armadio", "L'armadio è accanto al letto."],
          ["il bagno", "la doccia, il lavandino", "La doccia è in fondo."],
          ["lo studio", "la scrivania, la libreria", "La scrivania è vicino alla finestra."],
          ["il balcone", "—", "Il balcone dà sul cortile."]
        ]
      },
      examples: [
        { tr: "O apartamento fica no terceiro andar e não tem elevador." },
        { tr: "A cozinha é pequena, mas dá para comer nela." },
        { tr: "A sacada dá para o pátio interno." },
        { tr: "Há um depósito ao lado da entrada." },
        { tr: "As janelas dão para o sul, então é muito claro." },
        { tr: "O aquecimento é individual." }
      ]
    },
    vocab: [
      "sala",
      "quarto",
      "banheiro",
      "corredor",
      "depósito, quartinho",
      "sofá",
      "guarda-roupa",
      "escrivaninha",
      "geladeira",
      "máquina de lavar",
      "dar para (uma janela)",
      "aquecimento individual"
    ],
    exercises: [
      {
        q: "Relacione o cômodo com o móvel.",
        pairs: ["l'armadio", "il divano", "il frigorifero", "la scrivania"]
      },
      { q: "Complete: «L'armadio è accanto ___ letto.»" },
      { q: "Complete: «Il balcone ___ sul cortile.» (dare)" },
      {
        q: "Uma «cucina abitabile» é uma cozinha:",
        opts: ["com janela", "grande o bastante para comer nela", "que já vem mobiliada"]
      },
      { q: "Descreva o apartamento.", tr: "O sofá fica em frente à janela e a estante fica ao lado do sofá." },
      { q: "«O apartamento fica no terceiro andar e não tem elevador.»" },
      { tr: "As janelas dão para o sul, então é muito claro." },
      { q: "Artigos:", items: [, , , ] },
      { tr: "O quarto dá para o pátio, então é silencioso." },
      { tr: "A sala é clara e na cozinha dá para comer." }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Moradia",
    title: "Problemas e como comunicá-los",
    objectives: [
      "avisar o proprietário ou o administrador sobre um defeito",
      "descrever o que quebrou",
      "combinar um conserto"
    ],
    theory: [
      {
        h: "Três verbos cobrem quase todos os defeitos",
        list: [
          "<b>non funziona</b> — não funciona (um eletrodoméstico)",
          "<b>perde</b> — pinga, está vazando (uma torneira, um cano)",
          "<b>si è rotto/a</b> — quebrou"
        ]
      },
      {
        h: "Quem paga o quê",
        p: "Num contrato de aluguel italiano, os <b>reparos pequenos</b> (<em>manutenzione ordinaria</em>) ficam por conta do inquilino, e os <b>grandes</b> (<em>straordinaria</em>: a caldeira, a instalação elétrica, o telhado) por conta do proprietário. Vale a pena escrever isso na mensagem: <em>Credo che sia manutenzione straordinaria.</em>"
      },
      {
        h: "O tom do aviso",
        p: "Um aviso de defeito em italiano costuma ser cortês e indireto: <em>Le scrivo perché…</em>, <em>Volevo segnalarle che…</em>. Um <em>ripari subito!</em> seco joga contra você: não é uma cultura em que a firmeza acelera as coisas."
      },
      {
        tip: "<em>Il condominio</em> funciona como o condomínio brasileiro: é ao mesmo tempo o prédio e a associação de proprietários como entidade jurídica. <em>L'amministratore di condominio</em> faz o papel do síndico ou da administradora: é a ele que se avisa dos problemas nas áreas comuns."
      }
    ],
    grammar: {
      title: "Avisar sobre um defeito",
      table: {
        head: ["problema", "em italiano", "em português"],
        rows: [
          ["um eletrodoméstico", "La lavatrice non funziona.", "A máquina de lavar não funciona."],
          ["água", "Il rubinetto perde.", "A torneira está pingando."],
          ["quebrado", "Si è rotta la serratura.", "A fechadura quebrou."],
          ["aquecimento", "Il riscaldamento non si accende.", "O aquecimento não liga."],
          ["luz", "È saltata la corrente.", "Acabou a luz."],
          ["avisar", "Volevo segnalarle un problema.", "Queria avisá-lo de um problema."]
        ]
      },
      examples: [
        { tr: "Olá, estou escrevendo porque a caldeira não funciona desde ontem." },
        { tr: "A torneira do banheiro está pingando." },
        { tr: "O senhor poderia mandar um encanador?" },
        { tr: "Quando o técnico pode vir?" },
        { tr: "Estou em casa a partir das seis." },
        { tr: "Obrigado pela rapidez." }
      ]
    },
    vocab: [
      "torneira",
      "pingar, vazar",
      "quebrar",
      "fechadura",
      "caldeira",
      "eletricidade, luz",
      "acabar (a luz)",
      "encanador",
      "eletricista",
      "técnico",
      "avisar, comunicar",
      "manutenção, conserto"
    ],
    exercises: [
      {
        q: "A torneira está pingando. Como se diz?",
        opts: ["Il rubinetto non funziona.", "Il rubinetto perde.", "Il rubinetto si è acceso."]
      },
      { q: "Complete: «È ___ la corrente.» (acabou a luz)" },
      { q: "Complete: «Si è ___ la serratura.» (a fechadura quebrou)" },
      {
        q: "Relacione o profissional com o problema.",
        pairs: ["uma torneira pingando", "sem luz", "uma caldeira quebrada", "as áreas comuns"]
      },
      { q: "«O senhor poderia mandar um encanador?»" },
      {
        q: "Escreva o aviso.",
        tr: "Olá, queria avisá-lo de que a caldeira não funciona desde ontem. O senhor poderia mandar um técnico?"
      },
      {
        q: "Quem normalmente paga a troca de uma caldeira num aluguel?",
        opts: ["O inquilino", "O proprietário (manutenzione straordinaria)", "O condomínio"]
      },
      { tr: "Estou em casa a partir das seis." },
      { tr: "O aquecimento não liga e está muito frio aqui dentro." },
      { tr: "Queria avisar que a torneira do banheiro está pingando." }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Teste",
    title: "Teste da unidade 5",
    objectives: ["verificar o vocabulário da moradia e a partícula ci"],
    theory: [{ p: "Dez perguntas. Aprovação a partir de 70%." }],
    exercises: [
      { q: "«Bilocale»:", opts: ["dois quartos", "sala + quarto", "dois andares"] },
      { q: "«La ___ è di tre mensilità.»" },
      { q: "«Quanto ___ vuole per arrivare?»" },
      { q: "«___ metto mezz'ora.»" },
      { q: "«Non ce la faccio più»:", opts: ["Não faço mais isso", "Não aguento mais", "Não sobrou mais"] },
      { q: "«L'armadio è accanto ___ letto.»" },
      { q: "«Il rubinetto ___.» (está pingando)" },
      { q: "Relacione.", pairs: ["inquilino", "depósito", "máquina de lavar", "acabar (a luz)"] },
      { tr: "Procuro um apartamento de um quarto mobiliado, condomínio incluído, perto do centro." },
      { tr: "Fica a vinte minutos a pé da estação." }
    ]
  },
  "unit:a2-u06": { title: "No trabalho", grammarNote: "o condicional de cortesia · o si impessoal · e-mails" },
  "lesson:a2-u06-l1": {
    theme: "Trabalho",
    title: "O telefone e os pedidos corteses",
    objectives: [
      "se virar numa ligação",
      "usar o condicional para pedir algo com cortesia",
      "deixar e anotar um recado"
    ],
    theory: [
      {
        h: "Uma ligação começa com Pronto",
        p: "<strong>Pronto?</strong> é o que diz quem atende, a qualquer hora e seja qual for a relação. Literalmente significa «pronto», herança das telefonistas. Não é um cumprimento nem um nome, então atender dizendo o próprio nome soa estranho. O seu «alô?» ocupa o mesmo espaço."
      },
      {
        h: "O condicional transforma o pedido numa oferta",
        p: "<em>Può richiamarmi?</em> é correto, mas direto. <em><b>Potrebbe</b> richiamarmi?</em> deixa ao outro margem para dizer não, e por isso soa mais cortês: é o seu «poderia?» em vez de «pode?». A mesma lógica de <em>vorrei</em> em vez de <em>voglio</em>."
      },
      {
        h: "A forma de uma ligação de trabalho",
        list: [
          "<em>Pronto, sono Anna Smith della ditta X.</em>",
          "<em>Vorrei parlare con il signor Rossi.</em>",
          "<em>Mi passa l'ufficio acquisti, per favore?</em>",
          "<em>In questo momento è in riunione. Vuole lasciare un messaggio?</em>"
        ]
      },
      {
        tip: "<em>Le dispiacerebbe…?</em> («o senhor se importaria…?») é o degrau máximo de cortesia num pedido. Guarde para algo que realmente incomode."
      }
    ],
    grammar: {
      title: "Pedidos corteses",
      table: {
        head: ["nível", "forma", "em português"],
        rows: [
          ["neutro", "Può richiamarmi?", "Pode me ligar de volta?"],
          ["cortês", "Potrebbe richiamarmi?", "Poderia me ligar de volta?"],
          ["muito cortês", "Le dispiacerebbe richiamarmi?", "O senhor se importaria de me ligar de volta?"],
          ["sobre si mesmo", "Vorrei parlare con…", "Gostaria de falar com…"],
          ["uma proposta", "Sarebbe possibile…?", "Seria possível…?"],
          ["aceitar", "Certo, volentieri.", "Claro, com prazer."]
        ]
      },
      examples: [
        { tr: "Alô? É a Anna, estou ligando por causa da reunião." },
        { tr: "Poderia me passar para o senhor Rossi?" },
        { tr: "Sinto muito, no momento ele está ocupado." },
        { tr: "Poderia dizer a ele que eu liguei?" },
        { tr: "Vou deixar meu número." },
        { tr: "Ligo de novo mais tarde, obrigado." }
      ]
    },
    vocab: [
      "alô? (ao telefone)",
      "quem gostaria?",
      "poderia me passar para…?",
      "está em reunião",
      "deixar um recado",
      "ligar de volta",
      "um compromisso, um horário marcado",
      "adiar",
      "cancelar",
      "está ocupado (a linha)",
      "quase não estou ouvindo o senhor",
      "poderia…?"
    ],
    exercises: [
      {  },
      {
        q: "Qual pedido é o mais cortês?",
        opts: ["Mi richiami!", "Può richiamarmi?", "Le dispiacerebbe richiamarmi?"]
      },
      { q: "Complete: «___ dirgli che ho chiamato?» (poderia)" },
      { q: "Complete: «___ il signor Rossi, per favore?» (me passa para)" },
      { q: "Relacione.", pairs: ["está em reunião", "adiar", "cancelar", "ligar de volta"] },
      { q: "«Gostaria de adiar a reunião.»" },
      {
        q: "Você está ligando para uma empresa.",
        setting: "Segunda-feira, dez da manhã, a recepção.",
        lines: [
          { tr: "Escritório Bianchi, bom dia." },
          {
            tr: "Apresente-se e peça para falar com o senhor Rossi.",
            answerTr: "Bom dia, aqui é Anna Smith. Poderia me passar para o senhor Rossi?"
          },
          { tr: "Sinto muito, no momento ele está em reunião." },
          { tr: "Peça com cortesia que ele retorne a ligação.", answerTr: "Poderia pedir para ele me ligar?" },
          { tr: "Claro. A senhora me deixa um número?" }
        ]
      },
      {
        q: "Complete o pedido.",
        tr: "Bom dia, gostaria de falar com a senhora Bianchi. Se ela estiver ocupada, poderia me ligar hoje à tarde?"
      },
      { tr: "No momento ele está ocupado, quer deixar um recado?" },
      { tr: "Alô? É a Anna. Poderia me passar para o senhor Rossi?" }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Trabalho",
    title: "Correspondência profissional",
    objectives: [
      "escrever um e-mail profissional curto",
      "conhecer as fórmulas de abertura e de fechamento",
      "ajustar o registro ao destinatário"
    ],
    theory: [
      {
        h: "A abertura depende da distância",
        list: [
          "<em>Gentile Dott.ssa Bianchi,</em> — formal, para alguém cujo nome você sabe",
          "<em>Spettabile Azienda,</em> — para uma empresa como instituição",
          "<em>Buongiorno Marco,</em> — semiformal, para um colega",
          "<em>Ciao Marco,</em> — informal"
        ]
      },
      {
        h: "O fechamento",
        p: "<em>Cordiali saluti</em> é o padrão seguro, o seu «atenciosamente». <em>Distinti saluti</em> é mais frio e oficial. <em>A presto</em> ou <em>Grazie e buona giornata</em> servem entre colegas. Assina-se com nome e sobrenome, e o cargo embaixo."
      },
      {
        h: "O corpo de um e-mail italiano é curto",
        p: "A correspondência profissional italiana não perde tempo com preâmbulos. A estrutura: motivo do e-mail (<em>Le scrivo in merito a…</em>), o conteúdo, o pedido (<em>Resto in attesa di un suo riscontro</em>) e o fechamento. Atenção a <em>Dott.</em>: é usado para qualquer pessoa com diploma universitário, não só para médicos. Lembra o «doutor» brasileiro dado a advogados, mas em italiano é um título formal e muito mais difundido."
      },
      {
        tip: "<em>In allegato</em> = «em anexo». <em>Le invio in allegato il documento richiesto</em> é a frase mais frequente do e-mail profissional italiano."
      }
    ],
    grammar: {
      title: "O esqueleto de um e-mail",
      table: {
        head: ["parte", "fórmula", "em português"],
        rows: [
          ["abertura", "Gentile Dott.ssa Rossi,", "Prezada Dra. Rossi,"],
          ["motivo", "Le scrivo in merito a…", "Escrevo a respeito de…"],
          ["anexo", "Le invio in allegato…", "Envio em anexo…"],
          ["pedido", "Resto in attesa di un suo riscontro.", "Fico no aguardo do seu retorno."],
          ["fechamento", "Cordiali saluti,", "Atenciosamente,"],
          ["informal", "Grazie e a presto,", "Obrigado e até breve,"]
        ]
      },
      examples: [
        { tr: "Prezada Dra. Rossi, escrevo a respeito da proposta de ontem." },
        { tr: "Envio em anexo o orçamento atualizado." },
        { tr: "Agradeceria a confirmação até sexta-feira." },
        { tr: "Fico à disposição para qualquer dúvida." },
        { tr: "Oi, Marco, te mando em anexo o arquivo de que falamos." },
        { tr: "Desde já, obrigado." }
      ]
    },
    vocab: [
      "Prezado/a (num e-mail)",
      "a respeito de",
      "em anexo",
      "orçamento",
      "confirmar",
      "um retorno, uma resposta",
      "ficar à disposição",
      "atenciosamente",
      "desde já, obrigado",
      "prazo",
      "até (uma data)",
      "esclarecimento"
    ],
    exercises: [
      {
        q: "Qual abertura é a mais formal?",
        opts: ["Ciao Marco,", "Buongiorno Marco,", "Gentile Dott. Rossi,"]
      },
      { q: "Complete: «Le scrivo ___ merito all'offerta.»" },
      { q: "Complete: «Le invio ___ allegato il preventivo.»" },
      { q: "Relacione.", pairs: ["orçamento", "resposta", "prazo", "esclarecimento"] },
      {
        q: "«Resto a disposizione» significa:",
        opts: ["Fico na empresa", "Fico à sua disposição", "Espero aqui"]
      },
      { q: "«Envio em anexo o orçamento atualizado.»" },
      {
        q: "Complete o e-mail.",
        tr: "Prezada Dra. Rossi, escrevo a respeito da reunião de quinta-feira. Fico no aguardo do seu retorno. Atenciosamente."
      },
      { tr: "Agradeceria a confirmação até sexta-feira." },
      { tr: "Envio em anexo o documento solicitado; fico à sua disposição." },
      { tr: "Prezada Dra. Rossi, escrevo a respeito da nossa reunião." }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Trabalho",
    title: "O si impessoal",
    objectives: [
      "usar si para afirmações gerais",
      "distinguir o si impessoal do si passivo",
      "descrever como as coisas são feitas num lugar"
    ],
    theory: [
      {
        h: "Igual ao seu «se»",
        p: "<em>In Italia <b>si</b> mangia bene.</em> A construção <em>si</em> + terceira pessoa do singular fala das pessoas em geral sem nomear ninguém. É exatamente o seu «na Itália se come bem»: mesmo pronome, mesmo valor."
      },
      {
        h: "Si passivante: o verbo concorda com a coisa",
        p: "Quando depois do verbo vem um substantivo, a forma se ajusta ao número dele: <em>Qui <b>si vende</b> il pane</em> (uma coisa) e <em>Qui <b>si vendono</b> i panini</em> (várias). O português normativo faz o mesmo: «vende-se pão» / «vendem-se casas». A diferença é que no Brasil, na fala, muita gente deixa no singular («vende-se casas»); em italiano a concordância é obrigatória."
      },
      {
        contrast: "Dois detalhes em que o italiano se afasta do português. O adjetivo depois de <em>si</em> vai no <b>masculino plural</b>: <em>Quando si è <b>stanchi</b>…</em>, enquanto você diz «quando se está cansado», no singular. E nos tempos compostos o impessoal exige sempre <em>essere</em>: <em>si è mangiato bene</em>, onde em português o auxiliar seria «ter»."
      },
      {
        tip: "Com um verbo reflexivo, <em>si + si</em> vira <em>ci si</em>: <em>ci si alza presto</em>."
      }
    ],
    grammar: {
      title: "Si impessoal e si passivo",
      table: {
        head: ["tipo", "exemplo", "nota"],
        rows: [
          ["impessoal", "In Italia si mangia bene.", "sem substantivo depois do verbo"],
          ["passivo sing.", "Qui si vende il pane.", "concorda com «il pane»"],
          ["passivo pl.", "Qui si vendono i panini.", "concorda com «i panini»"],
          ["com adjetivo", "Quando si è stanchi…", "adjetivo no plural"],
          ["tempo composto", "Si è mangiato bene.", "sempre essere"],
          ["reflexivo", "Ci si alza presto.", "si + si → ci si"]
        ]
      },
      examples: [
        { tr: "Neste escritório se trabalha também aos sábados." },
        { tr: "Como se diz «laptop» em italiano?" },
        { tr: "Aqui não se pode fumar." },
        { tr: "Nesta região vendem-se apartamentos." },
        { tr: "Quando a gente é novo, pergunta muito." },
        { tr: "A gente se acostuma rápido." }
      ]
    },
    vocab: [
      "diz-se, se diz",
      "faz-se, se faz",
      "não se pode",
      "escritório",
      "reunião",
      "colega de trabalho",
      "salário",
      "férias",
      "folgas",
      "horas extras",
      "prazo",
      "acostumar-se"
    ],
    exercises: [
      {
        q: "«Qui ___ i panini.» (aqui se vendem sanduíches)",
        opts: ["si vende", "si vendono", "si vendere"],
        why: "O si passivo concorda com a coisa: i panini → plural."
      },
      { q: "Complete: «In Italia ___ mangia bene.»" },
      { q: "Complete: «Come ___ dice in italiano?»" },
      {
        q: "«Quando si è stanchi»: por que «stanchi» e não «stanco»?",
        opts: ["É um erro", "Depois de si o adjetivo vai no plural", "Porque se fala de fato de várias pessoas"]
      },
      { q: "Complete as formas.", tr: "Neste escritório se trabalha muito e muitas vezes se fazem horas extras." },
      { q: "«Aqui não se pode fumar.»" },
      {
        q: "Quais frases estão corretas?",
        opts: ["Si vendono case.", "Si vende case.", "Si è mangiato bene.", "Si ha mangiato bene."]
      },
      { tr: "A gente se acostuma rápido." },
      { tr: "Nesta empresa se trabalha muito, mas se paga bem." },
      { tr: "Como se diz «deadline» em italiano? Diz-se scadenza." }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Trabalho",
    title: "Reuniões e acordos",
    objectives: [
      "tomar a palavra numa reunião",
      "propor e combinar uma data",
      "expressar concordância ou dúvida"
    ],
    theory: [
      {
        h: "Interromper não é falta de educação",
        p: "Na cultura de reunião italiana, entrar na conversa é normal e sinaliza interesse. Esperar uma pausa limpa pode ser lido como não ter nada a dizer. Aqui o seu costume de conversa ajuda: falar por cima do outro também é comum no Brasil. Fórmulas para suavizar: <em>Scusa se ti interrompo…</em>, <em>Posso aggiungere una cosa?</em>, <em>Solo un attimo…</em>"
      },
      {
        h: "Concordância e dúvida",
        list: [
          "concordância: <em>Sono d'accordo</em>, <em>Esatto</em>, <em>Hai ragione</em>",
          "parcial: <em>In parte sì, però…</em>, <em>Dipende</em>",
          "dúvida: <em>Non ne sono convinto</em>, <em>Ho qualche dubbio</em>",
          "discordância: <em>Non sono d'accordo</em>, <em>La vedo diversamente</em>"
        ]
      },
      {
        h: "Combinar um horário",
        p: "<em>Che ne dite di giovedì?</em>, <em>A me va bene</em>, <em>Per me è lo stesso</em>, <em>Preferirei più tardi</em>. A fórmula <em>facciamo giovedì</em> («fica combinado na quinta») é a maneira padrão de fechar o acordo."
      },
      {
        tip: "<em>Ci sentiamo</em> («a gente se fala») fecha praticamente toda reunião e toda ligação de trabalho italiana. Não é uma promessa, é uma fórmula, igual ao seu «a gente se fala»."
      }
    ],
    grammar: {
      title: "A linguagem das reuniões",
      table: {
        head: ["função", "expressão", "em português"],
        rows: [
          ["tomar a palavra", "Posso dire una cosa?", "Posso dizer uma coisa?"],
          ["interromper", "Scusa se ti interrompo…", "Desculpa interromper…"],
          ["concordar", "Sono d'accordo con te.", "Concordo com você."],
          ["dúvida", "Non ne sono del tutto convinto.", "Não estou totalmente convencido."],
          ["propor", "Che ne dite di giovedì?", "O que vocês acham de quinta?"],
          ["fechar", "Facciamo così, allora.", "Então fica assim."]
        ]
      },
      examples: [
        { tr: "Deixa eu resumir os pontos principais." },
        { tr: "Tenho algumas dúvidas sobre esse ponto." },
        { tr: "Podemos deixar a decisão para segunda?" },
        { tr: "Para mim tanto faz, você decide." },
        { tr: "Quem cuida disso?" },
        { tr: "Amanhã a gente se fala sobre os detalhes." }
      ]
    },
    vocab: [
      "reunião",
      "pauta",
      "resumir",
      "adiar",
      "cuidar de, encarregar-se de",
      "concordo",
      "não estou convencido",
      "depende",
      "o que vocês acham de…?",
      "para mim tanto faz",
      "a gente se fala",
      "um item da pauta"
    ],
    exercises: [
      { q: "Relacione.", pairs: ["concordo", "depende", "adiar", "cuidar de"] },
      {
        q: "«Non ne sono del tutto convinto» é:",
        opts: ["concordância total", "dúvida expressa com suavidade", "discordância firme"]
      },
      { q: "Complete: «___ ne dite di giovedì?»" },
      { q: "Complete: «Chi ___ occupa di questo?»" },
      { q: "«Podemos deixar a decisão para segunda?»" },
      {
        q: "Uma reunião de equipe.",
        setting: "A sala de reuniões, marcando uma data.",
        lines: [
          { tr: "Bem, precisamos marcar a próxima reunião." },
          { tr: "Proponha quinta-feira.", answerTr: "O que vocês acham de quinta?" },
          { tr: "Quinta de manhã eu já tenho compromisso. À tarde?" },
          { tr: "Aceite e feche o acordo.", answerTr: "Para mim está bom, fica assim." }
        ]
      },
      {
        q: "Complete o que você diria.",
        tr: "Desculpa interromper, mas tenho algumas dúvidas sobre esse ponto."
      },
      { tr: "Deixa eu resumir os pontos principais." },
      { tr: "Deixamos a decisão para a próxima reunião." },
      { tr: "Concordo, mas gostaria de acrescentar uma coisa." }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Teste",
    title: "Teste da unidade 6",
    objectives: ["verificar o condicional de cortesia, os e-mails e o si impessoal"],
    theory: [{ p: "Dez perguntas. Aprovação a partir de 70%." }],
    exercises: [
      {  },
      { q: "«___ richiamarmi?» (poderia)" },
      { q: "«Le scrivo ___ merito alla riunione.»" },
      { q: "«Le invio ___ allegato il preventivo.»" },
      { q: "«Qui ___ i panini.»", opts: ["si vende", "si vendono", "si vendere"] },
      { q: "«In Italia ___ mangia bene.»" },
      { q: "Relacione.", pairs: ["orçamento", "férias", "salário", "prazo"] },
      { q: "«Concordo, mas tenho uma dúvida.»" },
      { tr: "Poderia confirmar a reunião até sexta-feira?" },
      { tr: "Gostaria de passar a reunião para quinta à tarde." }
    ]
  },
  "unit:a2-u07": { title: "Festas e tradições", grammarNote: "convites · felicitações · advérbios" },
  "lesson:a2-u07-l1": {
    theme: "Cultura",
    title: "Felicitações e ocasiões",
    objectives: [
      "dar os parabéns em diferentes ocasiões",
      "responder a uma felicitação",
      "conhecer as principais festas italianas"
    ],
    theory: [
      {
        h: "Auguri é a chave mestra",
        p: "<strong>Auguri!</strong> serve para aniversário, dia do santo, casamento, promoção, festas e quase qualquer ocasião boa. Literalmente são «bons votos». Na versão ampliada: <em>Tanti auguri!</em>, <em>Auguri di buon compleanno!</em>"
      },
      {
        h: "O que não se deseja",
        p: "Antes de uma prova ou de um teste difícil os italianos <b>não</b> dizem <em>auguri</em> nem <em>buona fortuna</em>: dá azar. Diz-se <strong>in bocca al lupo</strong> («na boca do lobo») e responde-se <em>crepi!</em> ou <em>crepi il lupo!</em>. É como o «merda!» do teatro, só que estendido para a vida toda: em português «boa sorte» é perfeitamente normal, em italiano não."
      },
      {
        h: "O calendário que você precisa conhecer",
        list: [
          "<b>Capodanno</b> (1º de janeiro), <b>Epifania</b> (6 de janeiro, quando chega <em>la Befana</em>)",
          "<b>Pasqua</b> e <b>Pasquetta</b> (segunda-feira de Páscoa, dia de passeio)",
          "<b>25 de abril</b> (Libertação), <b>1º de maio</b>, <b>2 de junho</b> (festa da República)",
          "<b>Ferragosto</b> (15 de agosto: o país inteiro de férias), <b>Natale</b> e <b>Santo Stefano</b>"
        ]
      },
      {
        tip: "<em>Buone feste</em> é a felicitação neutra da temporada, <em>Buon Natale</em> é especificamente o Natal. No ambiente de trabalho a primeira é mais comum."
      }
    ],
    grammar: {
      title: "Felicitações",
      table: {
        head: ["ocasião", "em italiano", "a resposta"],
        rows: [
          ["aniversário", "Tanti auguri!", "Grazie!"],
          ["as festas", "Buone feste! / Buon Natale!", "Altrettanto!"],
          ["Ano-Novo", "Buon anno!", "Anche a te!"],
          ["antes de uma prova", "In bocca al lupo!", "Crepi!"],
          ["antes de uma viagem", "Buon viaggio!", "Grazie!"],
          ["antes de comer", "Buon appetito!", "Altrettanto!"]
        ]
      },
      examples: [
        { tr: "Feliz aniversário!" },
        { tr: "Boas festas para você e sua família." },
        { tr: "Boa sorte na prova! — Obrigado!" },
        { tr: "Tenha um bom dia de trabalho!" },
        { tr: "Bom fim de semana! — Igualmente!" },
        { tr: "Parabéns pela promoção!" }
      ]
    },
    vocab: [
      "parabéns!, felicidades!",
      "feliz aniversário",
      "boas festas",
      "feliz Ano-Novo",
      "boa sorte (antes de uma prova)",
      "a resposta à expressão anterior",
      "igualmente",
      "parabéns",
      "aniversário",
      "o dia do santo",
      "15 de agosto, auge das férias",
      "um feriado emendado"
    ],
    culture: {
      title: "Com olhos italianos: o calendário marca o ano",
      text: "<p><b>Ferragosto</b> (15 de agosto) é quando as cidades grandes se esvaziam. Fecham as lojas de bairro, e também alguns restaurantes e consultórios. Tentar resolver algo nessa semana é tempo perdido, como tentar resolver algo no Brasil entre o Natal e o Ano-Novo.</p><p><b>Il ponte</b> é exatamente o seu feriado emendado: quando um feriado cai na terça ou na quinta, enforca-se a segunda ou a sexta. Os prazos de trabalho são planejados em torno dessas «pontes».</p><p><b>L'onomastico</b>, o dia do santo do próprio nome, continua vivo e, em algumas regiões, sobretudo no sul, é comemorado com tanta vontade quanto o aniversário.</p>"
    },
    exercises: [
      {
        q: "O que você diz a um amigo antes de uma prova?",
        opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"],
        why: "«Buona fortuna» é considerado sinal de azar."
      },
      { q: "Qual é a resposta a «in bocca al lupo»?", opts: ["Grazie!", "Crepi!", "Altrettanto!"] },
      { q: "Complete: «Buon ___!» (boa viagem)" },
      { q: "Complete: «Buon appetito! — ___!» (igualmente)" },
      {
        q: "Relacione a ocasião com a felicitação.",
        pairs: ["aniversário", "Ano-Novo", "promoção", "viagem"]
      },
      {
        q: "O que é «il ponte» no calendário?",
        opts: ["Uma festa religiosa", "Uma folga que emenda o feriado com o fim de semana", "Um aniversário"]
      },
      {
        q: "O que acontece na Itália em 15 de agosto?",
        opts: ["Começa o ano letivo", "Ferragosto: as cidades se esvaziam", "Festa da República"]
      },
      { q: "«Boas festas para você e sua família.»" },
      { tr: "Feliz aniversário e boas festas!" },
      { tr: "Boa sorte na prova! — Obrigado!" }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Cultura",
    title: "Convites",
    objectives: ["convidar alguém para algo", "aceitar ou recusar com elegância", "perguntar os detalhes"],
    theory: [
      {
        h: "Os convites costumam ser informais",
        p: "Os convites italianos quase nunca têm uma forma fixa. O mais comum: <em>Ti va di…?</em>, <em>Che ne dici di…?</em>, <em>Vieni anche tu?</em>. Até um jantar caprichado é anunciado como <em>una cosa tra amici</em>."
      },
      {
        h: "Recusar exige um motivo",
        p: "Um <em>no, grazie</em> seco soa frio. A fórmula é: desculpa + motivo + alternativa. <em>Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?</em> Igual em português, em que um «não, obrigado» sem mais nada deixa um gosto ruim."
      },
      {
        h: "O que levar",
        p: "Para um jantar se leva vinho, sobremesa ou flores. A pergunta <em>Cosa porto?</em> é esperada, e a resposta <em>Non portare niente!</em> é uma cortesia: leva-se alguma coisa mesmo assim."
      },
      {
        tip: "O horário de um convite é aproximado. Chegar em ponto às oito e meia num jantar em casa pode causar constrangimento; quinze minutos de atraso é o normal, uma margem que você já conhece."
      }
    ],
    grammar: {
      title: "Convidar e responder",
      table: {
        head: ["função", "expressão", "em português"],
        rows: [
          ["convite", "Ti va di venire a cena sabato?", "Está a fim de vir jantar no sábado?"],
          ["aceitar", "Volentieri, a che ora?", "Com prazer, a que horas?"],
          ["recusar", "Mi dispiace, quel giorno non posso.", "Sinto muito, nesse dia não posso."],
          ["alternativa", "Facciamo un'altra volta?", "Fica para outro dia?"],
          ["detalhes", "Cosa porto?", "O que eu levo?"],
          ["a resposta", "Non portare niente, ci pensiamo noi.", "Não traga nada, a gente cuida disso."]
        ]
      },
      examples: [
        { tr: "No sábado vamos fazer um jantar em casa, você vem?" },
        { tr: "Com prazer! A que horas vocês combinaram?" },
        { tr: "Sinto muito, no sábado já tenho um compromisso." },
        { tr: "Posso levar alguém?" },
        { tr: "Eu levo a sobremesa, pode ser?" },
        { tr: "A gente se vê lá por volta das oito e meia." }
      ]
    },
    vocab: [
      "convidar",
      "convite",
      "jantar",
      "uma festa",
      "um compromisso já marcado",
      "com prazer",
      "infelizmente",
      "outro dia, outra vez",
      "levar",
      "por volta das oito",
      "combinar, marcar",
      "ficar até tarde"
    ],
    exercises: [
      {
        q: "Qual recusa funciona melhor em italiano?",
        opts: ["No, grazie.", "Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?", "Non voglio."]
      },
      { q: "Complete: «___ va di venire a cena?»" },
      { q: "Complete: «Purtroppo ho già un ___.» (um compromisso)" },
      { q: "Relacione.", pairs: ["com prazer", "infelizmente", "convite", "combinar"] },
      { q: "«Com prazer! A que horas vocês combinaram?»" },
      {
        q: "Um convite para jantar.",
        setting: "Uma mensagem de um amigo, quarta-feira à noite.",
        lines: [
          { tr: "No sábado vamos fazer um jantar em casa. Está a fim de vir?" },
          { tr: "Aceite e pergunte a que horas.", answerTr: "Com prazer! A que horas?" },
          { tr: "Por volta das oito e meia. Seremos seis." },
          { tr: "Pergunte o que levar.", answerTr: "O que eu levo?" },
          { tr: "Não traga nada! No máximo a sobremesa." }
        ]
      },
      { q: "Complete a recusa.", tr: "Sinto muito, no sábado já tenho um compromisso. Fica para outro dia?" },
      { tr: "A gente se vê lá por volta das oito e meia." },
      { tr: "Está a fim de vir jantar no sábado? Seremos seis." },
      { tr: "Com prazer, eu levo a sobremesa. A que horas?" }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Cultura",
    title: "A Itália das regiões",
    objectives: [
      "entender as diferenças básicas entre o norte e o sul",
      "descrever uma região e sua cozinha",
      "usar comparações para descrever lugares"
    ],
    theory: [
      {
        h: "A Itália se unificou em 1861",
        p: "Antes era um conjunto de Estados com línguas, cozinhas e instituições separadas. As diferenças regionais são mais profundas do que na maioria dos países: os dialetos podem ser mutuamente incompreensíveis, e a identidade local (<em>campanilismo</em>, de <em>campanile</em>, o campanário) costuma pesar mais que a nacional. A comparação com os estados brasileiros ajuda pouco: na Itália o peso está na cidade e na província, não na região."
      },
      {
        h: "Não existe uma cozinha italiana única",
        p: "Manteiga e arroz no norte, azeite e massa no sul. O <em>pesto</em> é da Ligúria, o <em>ragù</em> da Emília, a <em>carbonara</em> de Roma, os <em>arancini</em> da Sicília. Pedir «comida italiana» sem dizer a região é como pedir «comida brasileira» sem mais nada."
      },
      {
        h: "Língua e dialeto",
        p: "<em>Il dialetto</em> não é italiano mal falado: é uma língua diferente, que descende do latim em paralelo ao toscano, de onde saiu o italiano padrão. Não há paralelo no Brasil: o falar nordestino ou o gaúcho são variedades do português que todos entendem, enquanto um dialeto italiano pode ser tão distante do italiano padrão quanto outra língua românica. O napolitano e o siciliano têm literatura própria."
      },
      {
        tip: "Assunto seguro com um italiano: a cozinha da região dele. Assunto arriscado: qual região cozinha melhor."
      }
    ],
    grammar: {
      title: "Descrever uma região",
      table: {
        head: ["região", "capital", "conhecida por"],
        rows: [
          ["la Toscana", "Firenze", "a bisteca fiorentina, o Chianti, o Renascimento"],
          ["l'Emilia-Romagna", "Bologna", "tagliatelle al ragù, parmesão"],
          ["la Sicilia", "Palermo", "arancini, cannoli, influência árabe"],
          ["il Veneto", "Venezia", "cicchetti, prosecco"],
          ["la Campania", "Napoli", "pizza, sfogliatella"],
          ["il Piemonte", "Torino", "trufas, vermute, Slow Food"]
        ]
      },
      examples: [
        { tr: "Sou de origem siciliana, mas moro em Milão." },
        { tr: "No norte usam mais manteiga, no sul mais azeite." },
        { tr: "No Vêneto ainda se fala muito dialeto." },
        { tr: "Cada região tem sua massa típica." },
        { tr: "O café no sul é mais forte e mais curto." },
        { tr: "Roma é caótica, mas linda." }
      ]
    },
    vocab: [
      "região",
      "capital da região",
      "norte / sul",
      "dialeto",
      "típico",
      "tradição",
      "um prato regional",
      "origem",
      "caótico",
      "acolhedor",
      "orgulho local",
      "mudar-se (para um lugar)"
    ],
    exercises: [
      { q: "Relacione a região com a cidade.", pairs: ["Firenze", "Napoli", "Venezia", "Torino"] },
      {
        q: "O que é o «campanilismo»?",
        opts: ["Um estilo arquitetônico", "O apego à própria cidade", "Um tipo de sino"]
      },
      {
        q: "Um dialeto italiano é:",
        opts: ["uma versão mal falada do italiano", "uma língua diferente que descende do latim", "gíria de jovens"]
      },
      { q: "Complete: «Al nord si usa più il burro, al ___ l'olio.»" },
      { q: "«Cada região tem seu prato típico.»" },
      {
        q: "Complete.",
        tr: "Sou de origem siciliana, mas moro no norte há dez anos. Entendo o dialeto, mas não falo."
      },
      { tr: "Roma é caótica, mas linda." },
      { q: "De onde é a carbonara?", opts: ["Bologna", "Roma", "Palermo"] },
      { tr: "Cada região italiana tem sua cozinha e muitas vezes seu dialeto." },
      { tr: "Sou de origem polonesa, mas moro na Toscana há três anos." }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Gramática",
    title: "Os advérbios",
    objectives: [
      "formar os advérbios em -mente",
      "distinguir um adjetivo de um advérbio",
      "colocar o advérbio no lugar certo"
    ],
    theory: [
      {
        h: "Como se formam",
        p: "Pega-se a forma <b>feminina</b> do adjetivo e acrescenta-se <em>-mente</em>: <em>lenta → lentamente</em>, <em>rara → raramente</em>. É exatamente a sua regra. Os adjetivos em <em>-le</em> e <em>-re</em> perdem o <em>e</em> final: <em>facile → facilmente</em>, <em>regolare → regolarmente</em>, e o resultado coincide com o português: facilmente, regularmente."
      },
      {
        h: "Buono ou bene",
        p: "É o que mais dá problema, embora você tenha o mesmo par. <em>Buono</em> é o adjetivo (como é?), <em>bene</em> o advérbio (como faz?): bom e bem. <em>Un caffè <b>buono</b></em>, mas <em>parla <b>bene</b></em>. «Parla buono» está errado, assim como «fala bom»."
      },
      {
        h: "A posição nos tempos compostos",
        p: "No passato prossimo os advérbios <em>già, mai, ancora, sempre, appena, più</em> vão <b>entre o auxiliar e o particípio</b>: <em>ho <b>già</b> visto</em>. Em português o advérbio costuma vir antes do verbo («já vi»), então aqui é preciso prestar atenção. Os demais costumam ir depois do particípio: <em>ho parlato <b>lentamente</b></em>."
      },
      {
        tip: "Os advérbios em <em>-mente</em> são longos, e o italiano falado muitas vezes os troca por locuções: <em>in modo semplice</em> em vez de <em>semplicemente</em>, <em>con calma</em> em vez de <em>tranquillamente</em>."
      }
    ],
    grammar: {
      title: "Os advérbios",
      table: {
        head: ["adjetivo", "advérbio", "exemplo"],
        rows: [
          ["lento / lenta", "lentamente", "Parla lentamente, per favore."],
          ["raro / rara", "raramente", "Vado raramente al cinema."],
          ["facile", "facilmente", "Si trova facilmente."],
          ["regolare", "regolarmente", "Studia regolarmente."],
          ["buono", "bene", "Cucina bene."],
          ["cattivo", "male", "Ho dormito male."]
        ]
      },
      examples: [
        { tr: "O senhor poderia falar mais devagar?" },
        { tr: "Raramente vou ao centro no fim de semana." },
        { tr: "Já vi esse filme." },
        { tr: "Ainda não fui lá." },
        { tr: "Fala bem italiano, mas escreve mal." },
        { tr: "Vá com calma." }
      ]
    },
    vocab: [
      "devagar",
      "depressa",
      "facilmente",
      "raramente",
      "regularmente",
      "de repente",
      "finalmente, enfim",
      "absolutamente",
      "bem / mal",
      "com calma",
      "com pressa",
      "quase"
    ],
    exercises: [
      { q: "Forme o advérbio de «lento»: ___" },
      { q: "Forme o advérbio de «facile»: ___" },
      {
        q: "Qual frase está correta?",
        opts: ["Parla buono l'italiano.", "Parla bene l'italiano.", "Parla buon l'italiano."]
      },
      { q: "Complete: «Ho ___ visto quel film.» (já)" },
      {
        q: "Onde vai «ancora» no passato prossimo?",
        opts: ["Antes do auxiliar", "Entre o auxiliar e o particípio", "No final"]
      },
      { q: "Relacione.", pairs: ["finalmente", "de repente", "com calma", "quase"] },
      { q: "«O senhor poderia falar mais devagar?»" },
      {
        q: "Complete.",
        tr: "Fala bem italiano, mas ainda escreve mal. Estuda regularmente, todos os dias."
      },
      { tr: "Finalmente encontrei um apartamento perto do trabalho." },
      { tr: "O senhor poderia repetir mais devagar?" }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Teste",
    title: "Teste da unidade 7",
    objectives: ["verificar as felicitações, os convites, as regiões e os advérbios"],
    theory: [{ p: "Dez perguntas. Aprovação a partir de 70%." }],
    exercises: [
      { q: "Antes de uma prova se diz:", opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"] },
      { q: "A resposta a «in bocca al lupo»: ___" },
      { q: "«Buon appetito! — ___!»" },
      { q: "«___ va di venire a cena?»" },
      { q: "«Il ponte» é:", opts: ["uma ponte de pedra", "um feriado emendado", "uma festa"] },
      { q: "Relacione.", pairs: ["Firenze", "Napoli", "Palermo", "Venezia"] },
      { q: "O advérbio de «regolare»: ___" },
      { q: "A frase correta:", opts: ["Parla buono.", "Parla bene.", "Parla buon."] },
      { tr: "Parabéns e boas festas para toda a família!" },
      { tr: "Está a fim de vir à festa no sábado à noite?" }
    ]
  },
  "unit:a2-u08": { title: "Planos e revisão", grammarNote: "expressar intenções · revisão do A2" },
  "lesson:a2-u08-l1": {
    theme: "Planos",
    title: "Intenções e sonhos",
    objectives: [
      "falar dos seus planos para o futuro",
      "expressar um desejo e uma dúvida",
      "combinar o futuro com o condicional"
    ],
    theory: [
      {
        h: "Três graus de certeza",
        list: [
          "<b>decidido</b>: <em>A settembre comincio un nuovo lavoro.</em> (presente)",
          "<b>planejado</b>: <em>Ho intenzione di trasferirmi.</em> / <em>Andrò a vivere all'estero.</em>",
          "<b>um sonho</b>: <em>Mi piacerebbe aprire un bar.</em> / <em>Vorrei imparare il giapponese.</em>"
        ]
      },
      {
        h: "Mi piacerebbe ou vorrei",
        p: "<em>Vorrei</em> se refere a algo real e alcançável («queria um café»). <em>Mi piacerebbe</em> se desloca para o desejo ou a hipótese. Em português «gostaria» cobre os dois casos («gostaria de um café», «gostaria de morar na praia»); em italiano, para pedir algo no bar, use <em>vorrei</em> e guarde <em>mi piacerebbe</em> para os planos de vida."
      },
      {
        h: "Preposições depois dos verbos de intenção",
        p: "<em>ho intenzione <b>di</b></em>, <em>penso <b>di</b></em>, <em>spero <b>di</b></em>, <em>sogno <b>di</b></em>, mas <em>comincio <b>a</b></em>, <em>imparo <b>a</b></em>, <em>riesco <b>a</b></em>. A preposição faz parte do verbo e se aprende junto com ele. O português acerta em vários (intenção de, começar a, aprender a) e erra em outros: você diz «penso em mudar» e «espero passar», sem «de»."
      },
      {
        tip: "<em>Chissà</em> («quem sabe») abre muitas vezes uma frase sobre um futuro incerto: <em>Chissà dove sarò tra cinque anni.</em>"
      }
    ],
    grammar: {
      title: "Expressar planos",
      table: {
        head: ["grau", "construção", "exemplo"],
        rows: [
          ["uma decisão", "presente", "A giugno cambio lavoro."],
          ["uma intenção", "ho intenzione di + infinitivo", "Ho intenzione di studiare medicina."],
          ["uma previsão", "futuro semplice", "Fra due anni parlerò bene l'italiano."],
          ["um sonho", "mi piacerebbe + infinitivo", "Mi piacerebbe vivere al mare."],
          ["uma esperança", "spero di + infinitivo", "Spero di trovare casa presto."],
          ["incerteza", "chissà", "Chissà come andrà."]
        ]
      },
      examples: [
        { tr: "Tenho a intenção de me inscrever num curso noturno." },
        { tr: "Eu gostaria de trabalhar um ano no exterior." },
        { tr: "Espero passar na prova em junho." },
        { tr: "Quem sabe onde vou estar daqui a cinco anos." },
        { tr: "Estou pensando em mudar de cidade." },
        { tr: "Mais cedo ou mais tarde vou aprender a tocar piano." }
      ]
    },
    vocab: [
      "tenho a intenção de",
      "eu gostaria (um sonho)",
      "espero",
      "estou pensando em",
      "sonhar em",
      "quem sabe",
      "mais cedo ou mais tarde",
      "no exterior",
      "um curso noturno",
      "passar numa prova",
      "mudar de vida",
      "um sonho"
    ],
    exercises: [
      { q: "Complete: «Ho intenzione ___ trasferirmi.»" },
      { q: "Complete: «Spero ___ trovare casa presto.»" },
      { q: "Complete: «Comincio ___ capire meglio.»" },
      {
        q: "Qual frase soa como sonho, e não como plano?",
        opts: ["A giugno cambio lavoro.", "Mi piacerebbe vivere al mare.", "Ho intenzione di studiare."]
      },
      {  },
      { q: "«Eu gostaria de trabalhar um ano no exterior.»" },
      { q: "Complete os planos.", tr: "Tenho a intenção de me inscrever num curso e espero passar na prova em junho." },
      { tr: "Mais cedo ou mais tarde vou aprender a tocar piano." },
      { tr: "Estou pensando em mudar de cidade no ano que vem." },
      { tr: "Eu gostaria de morar na Itália pelo menos um ano." }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Revisão",
    title: "Revisão dos tempos",
    objectives: [
      "escolher o tempo que combina com a situação",
      "combinar todos os tempos aprendidos no A2",
      "encontrar seus pontos fracos"
    ],
    theory: [
      {
        h: "O mapa dos tempos do A2",
        list: [
          "<b>presente</b> — agora, hábito, futuro próximo",
          "<b>passato prossimo</b> — um fato concluído",
          "<b>imperfetto</b> — pano de fundo, descrição, hábito passado",
          "<b>trapassato prossimo</b> — o passado antes do passado",
          "<b>futuro semplice</b> — um plano, uma previsão, uma suposição sobre o presente",
          "<b>futuro anteriore</b> — o futuro antes do futuro, uma suposição sobre o passado",
          "<b>condizionale presente</b> — um pedido, um conselho, um desejo"
        ]
      },
      {
        h: "Os erros mais frequentes desta fase",
        list: [
          "usar o passato prossimo onde é preciso o imperfetto (descrição)",
          "não concordar o particípio com <em>essere</em>: «siamo andato»",
          "não concordar o particípio com o pronome: «l'ho visto» falando de uma mulher",
          "pôr um condicional depois de <em>se</em>: «se avrei» em vez da construção correta; em português você também diz «se eu tivesse», não «se eu teria»"
        ]
      }
    ],
    grammar: {
      title: "Os tempos numa tabela",
      table: {
        head: ["tempo", "exemplo", "quando"],
        rows: [
          ["presente", "Lavoro in banca.", "agora, hábito"],
          ["passato prossimo", "Ieri ho lavorato molto.", "um fato concluído"],
          ["imperfetto", "Da bambino lavoravo poco.", "pano de fundo, hábito"],
          ["trapassato", "Avevo già lavorato lì.", "um passado anterior"],
          ["futuro", "Domani lavorerò da casa.", "um plano"],
          ["futuro anteriore", "Quando avrò finito, esco.", "um futuro anterior"],
          ["condizionale", "Vorrei lavorare meno.", "um pedido, um desejo"]
        ]
      },
      examples: [
        { tr: "Enquanto eu estudava, chegou um e-mail importante." },
        { tr: "Quando saí, já tinha parado de chover." },
        { tr: "Amanhã eu ligo assim que terminar." },
        { tr: "Queria te perguntar uma coisa." },
        { tr: "Quando eu era pequena, não gostava de peixe." },
        { tr: "Eu a conheci no ano passado em Roma." }
      ]
    },
    vocab: [
      "um tempo verbal",
      "um erro frequente",
      "concordância",
      "particípio",
      "verbo auxiliar",
      "revisar",
      "confundir",
      "distinguir"
    ],
    exercises: [
      { q: "Coloque as formas corretas.", tr: "Enquanto eu estudava, chegou um e-mail importante." },
      { q: "Coloque as formas corretas.", tr: "Quando saí, já tinha parado de chover." },
      { q: "Coloque as formas corretas.", tr: "Amanhã eu ligo assim que terminar." },
      {
        q: "«Siamo andato al mare»: o que está errado?",
        opts: ["O auxiliar está errado", "Falta a concordância do particípio (andati)", "Nada, está certo"]
      },
      { q: "Falando de uma mulher: «L'ho visto ieri». O que é preciso corrigir?", opts: ["Nada", "L'ho vista", "Le ho visto"] },
      {  },
      {  },
      {  },
      { q: "«Queria te perguntar uma coisa.»" },
      { tr: "Quando eu era pequena, não gostava de peixe; agora adoro." },
      { tr: "Ontem fui ao cinema e gostei muito do filme." }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Revisão",
    title: "Revisão dos pronomes",
    objectives: [
      "escolher o pronome correto",
      "combinar pronomes com os tempos compostos",
      "preparar-se para os pronomes combinados do B1"
    ],
    theory: [
      {
        h: "Quatro grupos que é preciso separar",
        list: [
          "<b>diretos</b>: mi, ti, lo, la, ci, vi, li, le — «quem? o quê?»",
          "<b>indiretos</b>: mi, ti, gli, le, ci, vi, gli — «a quem?»",
          "<b>reflexivos</b>: mi, ti, si, ci, vi, si — uma ação sobre si mesmo",
          "<b>partículas</b>: ci (lugar, a + coisa), ne (uma parte, di + coisa)"
        ]
      },
      {
        h: "O teste decisivo",
        p: "Faça uma pergunta ao verbo. «Vejo <b>quem</b>?» → direto (<em>lo vedo</em>). «Telefono <b>a quem</b>?» → indireto (<em>gli telefono</em>). Se o verbo pede <em>a</em>, o pronome será indireto. Cuidado com o hábito brasileiro de usar «ele» como objeto («vi ele»): em italiano o pronome átono é obrigatório, e <em>lo vedo</em> é a única forma."
      },
      {
        h: "O que espera você no B1",
        p: "Os pronomes combinados (<em>me lo, glielo, ce ne</em>) e o uso completo de <em>ci</em> e <em>ne</em> nos verbos fundidos. A base que você está revisando aqui é o que torna isso possível. No Brasil, combinações como «mo» e «lho» praticamente sumiram da fala, então o terreno é novo; mas a lógica (indireto + direto) é a mesma que você já usa com os pronomes simples."
      }
    ],
    grammar: {
      title: "Os pronomes: resumo",
      table: {
        head: ["tipo", "formas", "exemplo"],
        rows: [
          ["direto", "mi, ti, lo, la, ci, vi, li, le", "Lo conosco bene."],
          ["indireto", "mi, ti, gli, le, ci, vi, gli", "Gli ho scritto."],
          ["reflexivo", "mi, ti, si, ci, vi, si", "Mi sveglio presto."],
          ["ci", "lugar / a + coisa", "Ci vado domani."],
          ["ne", "uma parte / di + coisa", "Ne prendo due."],
          ["concordância", "só com o direto", "Le ho viste."]
        ]
      },
      examples: [
        { tr: "O livro? Li na semana passada." },
        { tr: "O Marco? Já respondi a ele." },
        { tr: "As chaves? Não estou achando." },
        { tr: "Vou à academia três vezes por semana." },
        { tr: "Quantas você quer? — Quero três." },
        { tr: "Acordei às seis." }
      ]
    },
    vocab: [
      "pronome",
      "direto / indireto",
      "reflexivo",
      "substituir",
      "repetir",
      "evitar",
      "repetição",
      "com desenvoltura"
    ],
    exercises: [
      { q: "«Telefono a Giulia» →", opts: ["La telefono", "Le telefono", "Ne telefono"] },
      { q: "«Vedo Giulia» →", opts: ["La vedo", "Le vedo", "Gli vedo"] },
      { q: "«Le chiavi? Non ___ trovo.»" },
      { q: "«Quante mele vuoi? — ___ voglio tre.»" },
      { q: "«In palestra ___ vado tre volte a settimana.»" },
      { q: "Complete a terminação: «Le ho vist___.» (elas)" },
      {
        q: "Quais verbos pedem pronome indireto?",
        opts: ["telefonare", "vedere", "scrivere", "aspettare", "rispondere"]
      },
      {
        q: "Complete os pronomes.",
        tr: "O livro? Já li. O Marco? Escrevi para ele ontem. A feira? Vou lá no sábado."
      },
      { tr: "Mandei um e-mail para ele, mas ele ainda não me respondeu." },
      { tr: "O filme? Vi ontem e gostei muito." }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Revisão",
    title: "Pronto para o B1",
    objectives: [
      "verificar se você domina todo o nível A2",
      "ver o que vem no B1",
      "decidir se você passa de nível"
    ],
    theory: [
      {
        h: "O que você já deveria saber fazer",
        list: [
          "falar do passado com dois tempos e escolher o certo",
          "falar de planos e de sonhos",
          "se virar numa viagem, num hotel, no consultório médico, no trabalho",
          "usar pronomes em vez de repetir substantivos",
          "escrever um e-mail curto e se virar numa ligação",
          "fazer um pedido, dar um conselho, recusar com cortesia"
        ]
      },
      {
        h: "O que vem no B1",
        p: "O <strong>congiuntivo</strong>: o modo da opinião, da dúvida e da emoção. Aqui você sai com uma vantagem enorme sobre um falante de inglês, porque o seu subjuntivo está vivo e é usado em contextos parecidos: «espero que ele venha», «duvido que seja verdade». As diferenças existem: com «acho que» o português usa indicativo («acho que é»), e o italiano diz <em>credo che sia</em>. Mas o mecanismo você já tem. Além disso chegam os pronomes combinados, o <em>ci</em> e o <em>ne</em> completos, as orações relativas, o discurso indireto, a argumentação e a burocracia italiana."
      },
      {
        tip: "Não passe para o B1 com menos de 70%. O congiuntivo se apoia nos tempos do A2: as lacunas daqui viram um muro lá."
      }
    ],
    vocab: [
      "o subjuntivo",
      "uma opinião",
      "uma dúvida",
      "argumentar",
      "burocracia",
      "pronto para",
      "progresso",
      "eu dou conta"
    ],
    exercises: [
      { q: "Coloque os tempos.", tr: "Ontem fui ao cinema com a Marta. O filme era longo, mas bom." },
      {  },
      {  },
      {  },
      { q: "«Le chiavi? ___ ho perse.»" },
      { q: "«A Marco ___ ho telefonato ieri.»" },
      { q: "«Quanto ___ vuole per arrivare?»" },
      { q: "«Mi ___ male la schiena.»" },
      { q: "«Ho intenzione ___ cambiare lavoro.»" },
      { q: "«Quando eu terminar de trabalhar, te ligo.»" },
      { tr: "Enquanto eu voltava para casa a pé, encontrei a Giulia e falei com ela sobre o projeto." },
      { tr: "No ano que vem eu gostaria de me mudar para a Itália a trabalho." }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Prova",
    title: "Prova final do A2",
    objectives: ["verificar se você está pronto para passar para o B1"],
    theory: [{ p: "Doze perguntas de todo o nível. Aprovação a partir de 70%." }],
    exercises: [
      {  },
      {  },
      { q: "Coloque os tempos.", tr: "Enquanto eu esperava o ônibus, encontrei um velho amigo." },
      { q: "«Quando sono arrivato, il treno ___ già partito.»" },
      { q: "«Hai visto Anna?» →", opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."] },
      { q: "«A Marco ___ ho risposto.»" },
      { q: "«Quanti ne vuoi? — ___ voglio due.»" },
      { q: "«___ meglio riposare.» (seria melhor)" },
      { q: "«Qui ___ i panini.» (se vendem)" },
      { q: "O advérbio de «facile»: ___" },
      { q: "«Gostaria de passar a reunião para quinta.»" },
      { tr: "Ontem fui ao médico porque estava com dor de garganta." }
    ]
  }
});
