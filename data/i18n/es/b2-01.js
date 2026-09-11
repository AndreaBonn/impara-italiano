/* ============================================================
   Texto en la lengua del estudiante (es) para data/core/b2-01.js
   Las claves apuntan a los id de la capa neutra; los arrays se
   combinan por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:b2-u01": {
    title: "Congiuntivo imperfetto",
    grammarNote: "congiuntivo imperfetto y trapassato · concordancia de tiempos"
  },
  "lesson:b2-u01-l1": {
    theme: "Gramática",
    title: "Formas y usos básicos",
    objectives: [
      "formar el congiuntivo imperfetto",
      "conocer las formas irregulares",
      "usarlo detrás de una principal en pasado"
    ],
    theory: [
      {
        h: "Las terminaciones son extraordinariamente regulares",
        p: "Raíz del infinitivo + <em>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</em>: <em>parlassi, prendessi, dormissi</em>. Solo seis verbos son irregulares: <em>essere → fossi</em>, <em>fare → facessi</em>, <em>dare → dessi</em>, <em>stare → stessi</em>, <em>dire → dicessi</em>, <em>bere → bevessi</em>."
      },
      {
        contrast: "Tu imperfecto de subjuntivo se forma de otra manera: sale de la tercera persona del indefinido (hablaron → hablara / hablase), y por eso arrastra todas las irregularidades de ese tiempo (dijeron → dijera, tuvieron → tuviera). El italiano lo saca del infinitivo y se queda con seis excepciones. La consecuencia práctica es buena: aquí no tienes que recordar el pretérito para acertar."
      },
      {
        h: "La regla básica: la principal se desplaza al pasado",
        p: "Cuando la principal pasa al pasado, el congiuntivo presente se convierte en imperfetto. <em>Penso che <b>sia</b> vero</em> → <em>Pensavo che <b>fosse</b> vero.</em> Es tu misma concordancia: «creo que sea» → «creía que fuera»."
      },
      {
        h: "Segundo contexto: una hipótesis con se",
        p: "<em>Se <b>avessi</b> tempo, verrei</em> («si tuviera tiempo, iría»). Es el segundo tipo de oración condicional, que tiene su propia unidad más adelante. De momento retén que detrás de <em>se</em> nunca va un condicional, igual que detrás de tu «si»."
      },
      {
        h: "Tercer contexto: un deseo",
        p: "El congiuntivo imperfetto puede ir solo y expresar un deseo o un lamento: <em>Magari venisse!</em> («¡ojalá viniera!»), <em>Fosse vero!</em>, <em>Piovesse almeno!</em>. Es tu «ojalá» más subjuntivo, con la misma carga."
      }
    ],
    grammar: {
      title: "Congiuntivo imperfetto",
      table: {
        head: ["persona", "parlare", "prendere", "dormire", "essere", "fare"],
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
        { tr: "Creía que era más sencillo." },
        { tr: "No sabía que trabajabas aquí." },
        { tr: "Quería que me lo dijeras antes." },
        { tr: "Si tuviera tiempo, iría con mucho gusto." },
        { tr: "¡Ojalá viniera ella también!" },
        { tr: "Parecía que no había nadie." }
      ]
    },
    vocab: [
      "creía que…",
      "no sabía que…",
      "quería que…",
      "parecía que…",
      "ojalá, quizá",
      "como si",
      "con tal de que",
      "por si acaso",
      "si acaso, si hace falta",
      "casi me dan ganas de",
      "ya va siendo hora de",
      "quién sabe si"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Completa: «Pensavo che ___ più semplice.» (essere)" },
      { q: "Completa: «Non sapevo che tu ___ qui.» (lavorare)" },
      {
        q: "«Penso che sia vero» con la principal en pasado:",
        opts: ["Pensavo che sia vero.", "Pensavo che fosse vero.", "Pensavo che era vero."]
      },
      {
        q: "Pon el congiuntivo imperfetto.",
        tr: "Quería que me lo dijeras antes y que vinieras con nosotros."
      },
      { q: "«Magari venisse!» significa:", opts: ["Quizá venga", "¡Ojalá viniera!", "Vendría"] },
      { q: "«Parecía que no había nadie.»" },
      { tr: "No sabía que ya habías terminado el proyecto." },
      { tr: "Creía que era más fácil que esto." }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Gramática",
    title: "La concordancia de tiempos",
    objectives: [
      "elegir el tiempo de la subordinada",
      "expresar anterioridad, simultaneidad o posterioridad",
      "formar el congiuntivo trapassato"
    ],
    theory: [
      {
        h: "Tres relaciones temporales",
        p: "En una oración compleja la subordinada puede ser <b>anterior</b>, <b>simultánea</b> o <b>posterior</b> a la principal. El modo y el tiempo dependen de dos cosas: del tiempo de la principal y de la relación."
      },
      {
        h: "La tabla que conviene aprender de memoria",
        list: [
          "principal en <b>presente</b>: simultaneidad → cong. presente; anterioridad → cong. passato; posterioridad → cong. presente o futuro",
          "principal en <b>pasado</b>: simultaneidad → cong. imperfetto; anterioridad → cong. trapassato; posterioridad → condizionale passato"
        ]
      },
      {
        h: "Congiuntivo trapassato",
        p: "Congiuntivo imperfetto de <em>avere/essere</em> + participio: <em>avessi fatto</em>, <em>fossi andato</em>. Marca lo anterior a una principal en pasado: <em>Pensavo che <b>fosse già partito</b>.</em> Es tu «hubiera hecho», construido igual."
      },
      {
        contrast: "La posterioridad es donde el español y el italiano se separan. Tú dices «esperaba que me <b>llamara</b>», con imperfecto de subjuntivo, o «pensaba que <b>vendría</b>», con condicional simple. El italiano exige el <b>condicional compuesto</b>: <em>Pensavo che <b>sarebbe venuto</b></em>. Es el mismo desajuste del estilo indirecto de B1, y sigue siendo el fallo más frecuente."
      }
    ],
    grammar: {
      title: "Concordancia de tiempos",
      table: {
        head: ["principal", "relación", "forma en la subordinada", "ejemplo"],
        rows: [
          ["presente", "simultaneidad", "cong. presente", "Penso che sia qui."],
          ["presente", "anterioridad", "cong. passato", "Penso che sia stato qui."],
          ["presente", "posterioridad", "cong. presente / futuro", "Penso che venga domani."],
          ["pasado", "simultaneidad", "cong. imperfetto", "Pensavo che fosse qui."],
          ["pasado", "anterioridad", "cong. trapassato", "Pensavo che fosse stato qui."],
          ["pasado", "posterioridad", "condizionale passato", "Pensavo che sarebbe venuto."]
        ]
      },
      examples: [
        { tr: "Creía que ya había contestado." },
        { tr: "Esperaba que me llamara." },
        { tr: "No tenía ni idea de que fuera tan complicado." },
        { tr: "Era raro que todavía no hubieran llegado." },
        { tr: "Temía que nos hubiéramos equivocado de camino." },
        { tr: "Me parecía que había un error." }
      ]
    },
    vocab: [
      "concordancia",
      "anterioridad",
      "simultaneidad",
      "posterioridad",
      "imaginar, suponer",
      "temer",
      "sospechar",
      "dudar",
      "dar por hecho",
      "resultar",
      "en ese momento",
      "mientras tanto"
    ],
    exercises: [
      { q: "Completa: «Credevo che ___ già risposto.» (avere, él)" },
      { q: "Completa: «Speravo che mi ___ chiamato.» (el futuro en el pasado)" },
      {
        q: "«Pensavo che ___ domani.» (venire, posterioridad)",
        opts: ["venisse", "sarebbe venuto", "verrebbe"]
      },
      { q: "«Pensavo che ___ qui.» (essere, simultaneidad)", opts: ["sia", "fosse", "sarebbe stato"] },
      {
        q: "Pon las formas correctas.",
        tr: "No tenía ni idea de que fuera tan complicado y de que llevaría tanto tiempo."
      },
      {
        q: "Pon las formas correctas.",
        tr: "Era raro que todavía no hubieran llegado y que nadie hubiera avisado."
      },
      { q: "«Esperaba que me llamara.»" },
      {
        q: "El error más frecuente con la concordancia de tiempos es:",
        opts: [
          "usar el congiuntivo en vez del indicativo",
          "usar el condicional simple en vez del compuesto para la posterioridad",
          "omitir che"
        ]
      },
      { tr: "Temía que nos hubiéramos equivocado de camino y que fuera demasiado tarde." },
      { tr: "Creía que ya había contestado a mi correo." }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Gramática",
    title: "Conjunciones que exigen subjuntivo",
    objectives: [
      "usar come se con el congiuntivo imperfetto",
      "conocer las conjunciones de finalidad, condición y concesión",
      "elegir entre indicativo y congiuntivo"
    ],
    theory: [
      {
        h: "Come se lleva siempre imperfetto o trapassato",
        p: "<em>Parla <b>come se</b> fosse un esperto.</em> Nunca el presente y nunca el indicativo, ni siquiera con la principal en presente. Es una excepción a la concordancia de tiempos, y en tu caso es un regalo: tu «como si» funciona exactamente igual, «habla como si fuera un experto», y tampoco admite presente."
      },
      {
        h: "Conjunciones por función",
        list: [
          "<b>concesión</b>: benché, sebbene, nonostante, malgrado, per quanto",
          "<b>finalidad</b>: affinché, perché (= para que)",
          "<b>condición</b>: purché, a patto che, a condizione che, sempre che",
          "<b>excepción</b>: a meno che (non), salvo che, tranne che",
          "<b>tiempo</b>: prima che (senza che, fino a che non)"
        ]
      },
      {
        h: "A meno che y el non expletivo",
        p: "<em>Vengo, <b>a meno che non</b> piova.</em> Ese <em>non</em> no niega: la frase significa «voy, a menos que llueva». Omitirlo se acepta hoy, pero la forma con <em>non</em> sigue siendo la estándar. Tu lengua conoce el mismo fenómeno en «no salgo hasta que <b>no</b> termine»: ese «no» tampoco niega nada."
      },
      {
        trap: "<b>Dopo che</b> lleva indicativo, <b>prima che</b> congiuntivo. En español «después de que» admite las dos cosas, así que aquí tu intuición no te frena: en italiano el reparto es fijo."
      }
    ],
    grammar: {
      title: "Conjunciones y modo",
      table: {
        head: ["conjunción", "modo", "ejemplo"],
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
        { tr: "Se comporta como si no hubiera pasado nada." },
        { tr: "Por difícil que sea, merece la pena." },
        { tr: "Te ayudo a condición de que te lo tomes en serio." },
        { tr: "Salimos antes de que empiece el tráfico." },
        { tr: "Voy, a menos que surja algo." },
        { tr: "Aunque tenía razón, no lo dijo." }
      ]
    },
    vocab: [
      "por más que, aunque",
      "a pesar de",
      "para que",
      "con tal de que",
      "a condición de que",
      "a menos que",
      "salvo que",
      "hasta que",
      "comportarse",
      "un imprevisto",
      "merecer la pena",
      "tomárselo en serio"
    ],
    exercises: [
      {
        q: "«Parla come se ___ un esperto.» (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Come se lleva siempre congiuntivo imperfetto o trapassato."
      },
      { q: "Completa: «Partiamo prima che ___ tardi.» (essere)" },
      { q: "Completa: «Ti aiuto a patto che tu ___ serio.» (essere)" },
      {
        q: "«Dopo che è partito»: ¿por qué indicativo?",
        opts: ["Es un error", "Dopo che se refiere a algo que ocurrió de verdad", "Porque partire es irregular"]
      },
      {
        q: "¿Qué conjunciones exigen congiuntivo?",
        opts: ["benché", "dopo che", "affinché", "siccome", "a meno che non"]
      },
      { q: "Pon las formas.", tr: "Se comporta como si no hubiera pasado nada, aunque todos saben la verdad." },
      { q: "«Voy, a menos que surja algo.»" },
      { tr: "Por difícil que sea, merece la pena intentarlo." },
      { tr: "Aunque tenía razón, prefirió no decir nada." },
      { tr: "Te ayudo con mucho gusto, con tal de que me avises a tiempo." }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Test",
    title: "Test de la unidad 1",
    objectives: ["comprobar el congiuntivo imperfetto, el trapassato y la concordancia de tiempos"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "«Pensavo che ___ più semplice.»" },
      { q: "«Credevo che ___ già risposto.» (avere, él)" },
      { q: "«Pensavo che ___ domani.» (venire)", opts: ["venisse", "sarebbe venuto", "verrebbe"] },
      { q: "«Parla come se ___ esperto.»", opts: ["è", "sia", "fosse"] },
      { q: "«Partiamo prima che ___ tardi.»" },
      { q: "¿Cuáles exigen congiuntivo?", opts: ["benché", "dopo che", "purché", "siccome"] },
      { tr: "No tenía ni idea de que conseguir el permiso fuera tan complicado." },
      { tr: "Esperaba que me contestara antes de ayer." }
    ]
  },
  "unit:b2-u02": {
    title: "Las oraciones condicionales",
    grammarNote: "los tres tipos con se · el tipo mixto · variantes coloquiales"
  },
  "lesson:b2-u02-l1": {
    theme: "Gramática",
    title: "Los tres tipos de condicional",
    objectives: [
      "distinguir la real, la posible y la irreal",
      "ajustar los tiempos a cada tipo",
      "no meter el condicional en la oración con se"
    ],
    theory: [
      {
        h: "Tipo 1: real",
        p: "<em><b>Se</b> piove, <b>resto</b> a casa.</em> La condición es real y probable. Las dos oraciones en indicativo: presente, futuro o imperativo (<em>Se hai tempo, chiamami</em>)."
      },
      {
        h: "Tipo 2: posible pero incierta",
        p: "<em><b>Se avessi</b> tempo, <b>verrei</b>.</em> Congiuntivo imperfetto detrás de <em>se</em>, condizionale presente en la principal. Es tu «si tuviera tiempo, iría», con el mismo reparto exacto."
      },
      {
        h: "Tipo 3: irreal, sobre el pasado",
        p: "<em><b>Se avessi studiato</b>, <b>avrei passato</b> l'esame.</em> Congiuntivo trapassato + condizionale passato. Tu «si hubiera estudiado, habría aprobado»: mismo esquema, misma carga de lamento o reproche."
      },
      {
        contrast: "Toda esta unidad es terreno conocido, y por eso conviene marcar la única trampa: <em>se</em> nunca lleva condicional. «Se avrei tempo» es el error de extranjero más reconocible del italiano, y es exactamente tu «si tendría tiempo», igual de estigmatizado. Si ese error te chirría en español, te chirriará aquí también: fíate de esa reacción."
      }
    ],
    grammar: {
      title: "Los tres tipos",
      table: {
        head: ["tipo", "oración con se", "principal", "ejemplo"],
        rows: [
          ["1. real", "indicativo", "indicativo / imperativo", "Se piove, resto a casa."],
          ["1. futuro", "presente / futuro", "futuro", "Se verrai, ti aspetterò."],
          ["2. posible", "cong. imperfetto", "condizionale presente", "Se avessi tempo, verrei."],
          ["3. irreal", "cong. trapassato", "condizionale passato", "Se avessi studiato, avrei passato."],
          [
            "mixta",
            "cong. trapassato",
            "condizionale presente",
            "Se avessi studiato, ora lavorerei qui."
          ]
        ]
      },
      examples: [
        { tr: "Si mañana hace bueno, nos vamos a la playa." },
        { tr: "Yo que tú no lo haría." },
        { tr: "Si lo hubiéramos sabido antes, nos habríamos ido ayer." },
        { tr: "Si hubiera aceptado ese trabajo, ahora viviría en Roma.", note: "el tipo mixto" },
        { tr: "Si necesitas algo, llámame." },
        { tr: "¿Qué harías si te tocara la lotería?" }
      ]
    },
    vocab: [
      "si",
      "por si acaso",
      "en caso de que (formal)",
      "de lo contrario",
      "yo que tú",
      "ojalá",
      "hipótesis",
      "condición",
      "cumplirse, hacerse realidad",
      "arrepentirse",
      "arrepentimiento",
      "cambiar de idea"
    ],
    exercises: [
      { q: "«Se ___ tempo, verrei.» (avere)", opts: ["ho", "avrei", "avessi"] },
      { q: "«Se avessi studiato, ___ l'esame.» (passare)", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Completa: «Se domani ___ bel tempo, andiamo al mare.» (fare)" },
      {
        q: "¿Qué frase está mal?",
        opts: ["Se avessi tempo, verrei.", "Se avrei tempo, verrei.", "Se ho tempo, vengo."]
      },
      { q: "Completa un tipo 2.", tr: "Yo que tú no lo haría." },
      { q: "Completa un tipo 3.", tr: "Si lo hubiéramos sabido antes, nos habríamos ido ayer." },
      { q: "«¿Qué harías si te tocara la lotería?»" },
      {
        q: "«Se avessi accettato quel lavoro, ora vivrei a Roma» es del tipo:",
        opts: ["primero", "segundo", "mixto"]
      },
      { tr: "Si hubiéramos reservado antes, habríamos pagado mucho menos." },
      { tr: "Yo que tú me lo pensaría un poco más." }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Gramática",
    title: "Variantes coloquiales y formales",
    objectives: [
      "reconocer la condicional coloquial con el imperfecto",
      "usar qualora y nel caso in cui",
      "ajustar el registro a la situación"
    ],
    theory: [
      {
        h: "El doble imperfecto al hablar",
        p: "<em>Se lo sapevo, non venivo.</em> En conversación los italianos sustituyen muy a menudo el tipo 3 por un doble imperfecto. Está extendido y aceptado al hablar, pero <b>no por escrito</b> ni en un examen. Tu lengua hace algo parecido con «si lo llego a saber, no vengo», y con el mismo estatus: se dice, no se escribe."
      },
      {
        h: "Variantes formales",
        p: "<em><b>Qualora</b> il pagamento non pervenisse entro…</em> es típico de contratos y cartas oficiales, siempre con congiuntivo. Equivale a tu «en caso de que el pago no se recibiera antes de…» o al más administrativo «de no recibirse el pago». <em><b>Nel caso in cui</b></em> funciona igual. <em><b>Ove</b></em> es todavía más literario."
      },
      {
        h: "Una condición sin se",
        list: [
          "gerundio: <em>Studiando di più, passeresti l'esame.</em>",
          "imperativo + e: <em>Chiedi e ti sarà dato.</em>",
          "<em>a + infinitivo</em>: <em>A pensarci bene, hai ragione.</em>",
          "<em>senza</em>: <em>Senza il tuo aiuto non ce l'avrei fatta.</em>"
        ]
      },
      {
        tip: "<em>Magari</em> con congiuntivo imperfetto expresa el deseo por sí solo, sin principal: <em>Magari fosse così semplice!</em>, tu «¡ojalá fuera tan sencillo!»."
      }
    ],
    grammar: {
      title: "Variantes",
      table: {
        head: ["registro", "construcción", "ejemplo"],
        rows: [
          ["coloquial", "imperfetto + imperfetto", "Se lo sapevo, non venivo."],
          ["estándar", "cong. trapassato + cond. passato", "Se l'avessi saputo, non sarei venuto."],
          ["formal", "qualora + congiuntivo", "Qualora fosse necessario, provvederemo."],
          ["formal", "nel caso in cui", "Nel caso in cui non arrivasse…"],
          ["sin se", "gerundio", "Studiando di più, passeresti."],
          ["sin se", "senza + sustantivo", "Senza di te non ce l'avrei fatta."]
        ]
      },
      examples: [
        { tr: "En caso de no recibir la confirmación, anularé la reserva." },
        { tr: "Si llueve, quedamos en el bar." },
        { tr: "Si se quisiera, se podría hacer también mañana." },
        { tr: "Si lo llego a saber, me quedo en casa.", note: "coloquial" },
        { tr: "¡Ojalá fuera tan sencillo!" },
        { tr: "De haberlo sabido antes, lo habría hecho de otra manera." }
      ]
    },
    vocab: [
      "en caso de que (formal)",
      "en el caso de que",
      "si (muy formal)",
      "encargarse, tomar medidas",
      "anular",
      "confirmación",
      "si se quisiera",
      "de haberlo sabido",
      "de otra manera",
      "de lo contrario",
      "registro",
      "no recomendable"
    ],
    exercises: [
      {
        q: "«Se lo sapevo, non venivo» es una construcción que es:",
        opts: ["correcta por escrito", "coloquial, válida al hablar, no recomendable por escrito", "siempre incorrecta"]
      },
      { q: "Completa: «Qualora ___ necessario, provvederemo.» (essere)" },
      { q: "Completa: «Nel caso in cui ___, ci vediamo al bar.» (piovere)" },
      {
        q: "«Volendo, si può fare domani» significa:",
        opts: ["Queriendo, se hace mañana", "Si se quisiera, se podría hacer mañana", "Uno quiere hacerlo mañana"]
      },
      { q: "Reescríbelo en registro estándar.", tr: "Si lo hubiera sabido, no habría venido." },
      { q: "«Si llueve, quedamos en el bar.»" },
      { q: "Relaciona.", pairs: ["en caso de que (formal)", "encargarse", "anular", "de lo contrario"] },
      { tr: "Sin tu ayuda no lo habría conseguido." },
      { tr: "En caso de no llegar la confirmación antes del viernes, anularemos la reserva." },
      { tr: "Ojalá fuera tan sencillo como dices." }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Comunicación",
    title: "Lamento, reproche, hipótesis",
    objectives: [
      "expresar arrepentimiento por el pasado",
      "formular un reproche sin agresividad",
      "mantener una conversación hipotética"
    ],
    theory: [
      {
        h: "El lamento es el tercer tipo",
        p: "<em>Avrei dovuto ascoltarti.</em> («Debería haberte hecho caso.») El condizionale passato de <em>dovere</em> y <em>potere</em> es la manera estándar de expresar arrepentimiento y autocrítica en italiano, igual que tu «debería haber» y «podría haber»."
      },
      {
        h: "Un reproche suavizado",
        p: "<em>Avresti potuto dirmelo.</em> («Podrías habérmelo dicho.») suena más suave que <em>perché non me l'hai detto?</em>. El condizionale passato quita el filo y deja el contenido, exactamente como en español."
      },
      {
        h: "Construcciones de arrepentimiento",
        list: [
          "<em>Se solo avessi…</em> — si solo hubiera…",
          "<em>Non avrei mai dovuto…</em> — nunca debería haber…",
          "<em>Con il senno di poi…</em> — a toro pasado…",
          "<em>Mi pento di…</em> — me arrepiento de…"
        ]
      },
      {
        tip: "<em>Meno male che…</em> («menos mal que…») es lo contrario del lamento y una manera muy frecuente de abrir una frase: <em>Meno male che sei arrivato.</em>"
      }
    ],
    grammar: {
      title: "Lamento y reproche",
      table: {
        head: ["función", "construcción", "ejemplo"],
        rows: [
          ["lamento", "avrei dovuto + infinitivo", "Avrei dovuto ascoltarti."],
          ["ocasión perdida", "avrei potuto + infinitivo", "Avrei potuto accettare."],
          ["reproche", "avresti potuto + infinitivo", "Avresti potuto avvisarmi."],
          ["ojalá", "se solo + cong. trapassato", "Se solo avessi saputo!"],
          ["alivio", "meno male che + indicativo", "Meno male che sei qui."],
          ["remordimiento", "mi pento di + infinitivo", "Mi pento di aver detto quello."]
        ]
      },
      examples: [
        { tr: "Debería haber aceptado aquella oferta." },
        { tr: "Podrías habérmelo dicho antes." },
        { tr: "¡Si solo hubiera hecho caso a mi madre!" },
        { tr: "A toro pasado, fue un error." },
        { tr: "Menos mal que no firmé." },
        { tr: "No me arrepiento en absoluto." }
      ]
    },
    vocab: [
      "debería haber",
      "podría haber",
      "si solo",
      "a toro pasado",
      "arrepentirse de",
      "menos mal que",
      "por suerte",
      "una oportunidad perdida",
      "darse cuenta",
      "admitir, reconocer",
      "un error de cálculo",
      "con el tiempo"
    ],
    exercises: [
      { q: "Completa: «___ dovuto ascoltarti.» (debería haber)" },
      { q: "Completa: «___ potuto avvisarmi.» (podrías haber)" },
      {
        q: "¿Cuál suena a reproche suave y no a acusación?",
        opts: ["Perché non me l'hai detto?", "Avresti potuto dirmelo.", "Dovevi dirmelo!"]
      },
      { q: "Completa el lamento.", tr: "Si solo lo hubiera sabido antes, no habría firmado ese contrato." },
      { q: "«A toro pasado, fue un error.»" },
      { q: "Relaciona.", pairs: ["menos mal que", "arrepentirse", "si solo", "una oportunidad perdida"] },
      {
        q: "«Non me ne pento affatto» significa:",
        opts: ["Me arrepiento un poco", "No me arrepiento en absoluto", "Me arrepentiré"]
      },
      { tr: "Debería haber aceptado aquella oferta." },
      { tr: "A toro pasado habría tomado decisiones distintas." },
      { tr: "Podrías habérmelo dicho antes, habría cambiado mis planes." }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Test",
    title: "Test de la unidad 2",
    objectives: ["comprobar los tres tipos de condicional y el lenguaje del lamento"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Se ___ tempo, verrei.»", opts: ["ho", "avrei", "avessi"] },
      { q: "«Se avessi studiato, ___ l'esame.»", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Tipo 2.", tr: "Yo que tú no lo haría." },
      { q: "Tipo 3.", tr: "Si hubiéramos reservado antes, habríamos pagado menos." },
      { q: "«Qualora ___ necessario, provvederemo.»" },
      { q: "«___ dovuto ascoltarti.»" },
      { q: "«___ potuto avvisarmi.»" },
      { q: "La frase incorrecta:", opts: ["Se avessi tempo…", "Se avrei tempo…", "Se ho tempo…"] },
      { tr: "Si solo lo hubiera sabido, no habría firmado ese contrato." },
      { tr: "Yo que tú me lo pensaría dos veces." }
    ]
  },
  "unit:b2-u03": {
    title: "La pasiva y el passato remoto",
    grammarNote: "essere/venire/andare + participio · passato remoto"
  },
  "lesson:b2-u03-l1": {
    theme: "Gramática",
    title: "Cuatro maneras de construir una pasiva",
    objectives: [
      "formar la pasiva con essere y con venire",
      "entender andare + participio como obligación",
      "usar el si passivante al hablar"
    ],
    theory: [
      {
        h: "Essere: la forma básica",
        p: "<em>La lettera <b>è stata scritta</b> da Marco.</em> Funciona en todos los tiempos. El participio concuerda con el sujeto y el agente se introduce con <em>da</em>. Es tu «ser + participio» con «por»."
      },
      {
        h: "Venire: solo tiempos simples, foco en el proceso",
        p: "<em>La legge <b>viene approvata</b> ogni anno.</em> No se puede decir «è venuta approvata»: <em>venire</em> no forma pasiva en tiempos compuestos. Subraya la repetición y el proceso mismo. El español no tiene esta segunda pasiva: donde el italiano elige entre <em>essere</em> y <em>venire</em>, tú usas «ser» para las dos cosas."
      },
      {
        h: "Andare: una pasiva que lleva obligación",
        p: "<em>Il modulo <b>va compilato</b> in stampatello.</em> No es una pasiva normal: la frase significa «el impreso <b>debe</b> rellenarse». Muy frecuente en instrucciones y lenguaje administrativo. Tu equivalente son «ha de rellenarse» o «debe rellenarse», ambos con dos palabras: el italiano lo hace con el verbo <em>andare</em>, y leerlo como una pasiva de <em>essere</em> cambia el sentido por completo."
      },
      {
        h: "Si passivante: la versión hablada",
        p: "<em>Qui <b>si vendono</b> panini.</em> Es la más frecuente en conversación porque pesa menos. El verbo concuerda con la cosa, no con el agente callado: tu «aquí se venden bocadillos», sin diferencia."
      }
    ],
    grammar: {
      title: "Cuatro formas de pasiva",
      table: {
        head: ["forma", "ejemplo", "significado"],
        rows: [
          ["essere", "La casa è stata venduta.", "la casa fue vendida"],
          ["venire", "La casa viene venduta ogni anno.", "la casa se vende (proceso)"],
          ["andare", "La casa va venduta subito.", "la casa debe venderse"],
          ["si passivante", "Qui si vendono case.", "aquí se venden casas"],
          ["el agente", "…da un'agenzia", "…por una agencia"],
          ["solo transitivos", "—", "una pasiva necesita objeto directo"]
        ]
      },
      examples: [
        { tr: "El proyecto fue aprobado la semana pasada." },
        { tr: "Las solicitudes se evalúan en un plazo de treinta días." },
        { tr: "El impreso debe firmarse en todas las páginas." },
        { tr: "En esta oficina se hablan tres idiomas." },
        { tr: "La reunión fue aplazada por el director." },
        { tr: "Estos errores hay que evitarlos." }
      ]
    },
    vocab: [
      "aprobar",
      "evaluar, revisar",
      "rechazar",
      "aplazar",
      "rellenar",
      "adjuntar",
      "evitar",
      "presentar, entregar",
      "en un plazo de treinta días",
      "plazo",
      "solicitud",
      "resultado"
    ],
    exercises: [
      {
        q: "«Il modulo va compilato» significa:",
        opts: ["El impreso va rellenado", "El impreso debe rellenarse", "El impreso ha sido rellenado"]
      },
      {
        q: "¿Qué forma NO funciona en tiempos compuestos?",
        opts: ["essere + participio", "venire + participio", "si passivante"]
      },
      {
        q: "Pásalo a pasiva: «Marco ha scritto la lettera.» → «La lettera ___ stata scritta da Marco.»"
      },
      { q: "Completa: «Le domande ___ valutate entro trenta giorni.» (venire)" },
      { q: "Completa: «Questi errori ___ evitati.» (deben evitarse)" },
      {
        q: "Completa las formas pasivas.",
        tr: "El proyecto fue aprobado ayer, pero el impreso todavía debe firmarse."
      },
      { q: "«La reunión fue aplazada por el director.»" },
      {
        q: "«Qui si vendono panini»: ¿por qué «vendono»?",
        opts: [
          "Es un error",
          "El si passivante concuerda con la cosa en plural",
          "Porque hay varios vendedores"
        ]
      },
      { tr: "Las solicitudes deben presentarse antes del día quince del mes." },
      { tr: "El documento ha sido aprobado y debe firmarse antes del viernes." }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Gramática",
    title: "El pasado narrativo",
    objectives: [
      "formar el passato remoto",
      "reconocer el patrón 1-3-3 en los verbos irregulares",
      "saber cuándo y dónde se usa"
    ],
    theory: [
      {
        h: "Cuándo se usa",
        p: "En la narración literaria e histórica (<em>Dante <b>nacque</b> nel 1265</em>), para hechos lejanos y cerrados, sin vínculo con el presente. En el <b>sur de Italia</b> se usa además en el habla corriente, incluso para ayer; en el norte apenas aparece."
      },
      {
        contrast: "Aquí está el mayor riesgo de todo el nivel para ti, y no es de forma sino de uso: tu pretérito indefinido está vivo en toda España para cualquier hecho terminado, «ayer comí», y el passato remoto se le parece tanto que la tentación es usarlo igual. En el italiano del norte eso suena a novela decimonónica. La equivalencia real de tu «ayer comí» sigue siendo el passato prossimo."
      },
      {
        h: "Formas regulares",
        p: "<em>-are</em>: ai, asti, ò, ammo, aste, arono. <em>-ere</em>: ei (o etti), esti, é (o ette), emmo, este, erono (o ettero). <em>-ire</em>: ii, isti, ì, immo, iste, irono."
      },
      {
        h: "El patrón 1-3-3",
        p: "La mayoría de los verbos irregulares en <em>-ere</em> lo son <b>solo en tres personas</b>: primera del singular, tercera del singular y tercera del plural. El resto es regular. <em>prendere → <b>presi</b>, prendesti, <b>prese</b>, prendemmo, prendeste, <b>presero</b></em>. Tus pretéritos fuertes cambian la raíz en las seis personas (dije, dijiste, dijo…), así que el italiano exige lo contrario: recordar dónde <b>no</b> cambia."
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
        { tr: "Dante nació en Florencia en 1265." },
        { tr: "Italia se convirtió en república en 1946." },
        { tr: "Salió de casa y no volvió nunca." },
        { tr: "Fue entonces cuando lo entendí todo." },
        { tr: "Escribió la novela en dos años." },
        { tr: "En cuanto hubo terminado, se marchó.", note: "trapassato remoto" }
      ]
    },
    vocab: [
      "nacer",
      "morir",
      "convertirse en",
      "escribir",
      "vivir",
      "ver",
      "enterarse, saber",
      "decidir, querer",
      "novela",
      "siglo",
      "época",
      "sucesión de hechos"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "¿Qué es el patrón 1-3-3?",
        opts: [
          "Que hay tres verbos irregulares",
          "Que solo io, lui/lei y loro son irregulares",
          "Que todas las formas son irregulares"
        ]
      },
      { q: "Passato remoto de «prendere», forma loro: ___" },
      { q: "Passato remoto de «dire», forma lui: ___" },
      {
        q: "¿Dónde se usa el passato remoto también en el habla corriente?",
        opts: ["En el norte de Italia", "En el sur de Italia", "En ninguna parte"]
      },
      { q: "Completa el relato.", tr: "Dante nació en 1265 y murió en 1321." },
      { q: "«Italia se convirtió en república en 1946.»" },
      { tr: "Aquella noche salió de casa y no volvió nunca." },
      { tr: "Fue entonces cuando comprendí que me había equivocado." }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Gramática",
    title: "Las subordinadas reducidas",
    objectives: [
      "sustituir una subordinada por un infinitivo o un gerundio",
      "usar el infinitivo compuesto y el gerundio compuesto",
      "escribir de forma más concisa"
    ],
    theory: [
      {
        h: "Por qué reducir",
        p: "Una subordinada implícita (sin sujeto propio y sin conjunción) acorta el texto y sube el registro. <em>Dopo che ho finito, sono uscito</em> → <em><b>Dopo aver finito</b>, sono uscito.</em> Es uno de los rasgos que separan un texto B2 de uno B1."
      },
      {
        h: "La condición: el mismo sujeto",
        p: "Las formas implícitas exigen que las dos oraciones compartan <b>sujeto</b>. <em>Essendo stanco, sono rimasto a casa</em> vale; con sujetos distintos hay que construir la subordinada completa."
      },
      {
        h: "El repertorio",
        list: [
          "<em>dopo + infinitivo compuesto</em>: <em>dopo aver mangiato</em>, <em>dopo essere uscito</em>",
          "<em>prima di + infinitivo</em>: <em>prima di partire</em>",
          "<em>gerundio</em> (causa, modo, tiempo): <em>tornando a casa, ho incontrato…</em>",
          "<em>gerundio compuesto</em>: <em>avendo finito, sono uscito</em>",
          "<em>participio</em>: <em>finita la riunione, sono uscito</em>"
        ]
      },
      {
        trap: "<em>Dopo</em> lleva siempre el <b>infinitivo compuesto</b>: <em>dopo aver mangiato</em>, nunca «dopo mangiare». Aquí tu lengua te empuja al error, porque «después de comer» con infinitivo simple es lo normal en español. El participio absoluto, en cambio, es tuyo tal cual: <em>finita la riunione</em> es «terminada la reunión»."
      }
    ],
    grammar: {
      title: "Formas reducidas",
      table: {
        head: ["subordinada completa", "reducida", "tipo"],
        rows: [
          ["Dopo che ho mangiato…", "Dopo aver mangiato…", "infinitivo compuesto"],
          ["Prima che io parta…", "Prima di partire…", "infinitivo"],
          ["Mentre tornavo a casa…", "Tornando a casa…", "gerundio"],
          ["Poiché ero stanco…", "Essendo stanco…", "gerundio"],
          ["Dopo che ebbi finito…", "Avendo finito…", "gerundio compuesto"],
          ["Quando la riunione finì…", "Finita la riunione…", "participio"]
        ]
      },
      examples: [
        { tr: "Después de haber leído el contrato, firmé." },
        { tr: "Antes de contestar, me lo pensé bien." },
        { tr: "Volviendo a casa, me encontré con Giulia." },
        { tr: "Como iba con retraso, cogí un taxi." },
        { tr: "Habiendo visto ya la película, me quedé en casa." },
        { tr: "Terminado el trabajo, nos fuimos todos." }
      ]
    },
    vocab: [
      "después de haber (hecho)",
      "antes de (hacer)",
      "siendo, estando",
      "habiendo (hecho)",
      "aun + gerundio",
      "una vez (hecho)",
      "pensárselo bien",
      "concluir",
      "conciso",
      "registro escrito",
      "fluido, legible",
      "recargar (el estilo)"
    ],
    exercises: [
      {
        q: "¿Cuál es correcta?",
        opts: [
          "Dopo mangiare, sono uscito.",
          "Dopo aver mangiato, sono uscito.",
          "Dopo mangiato, sono uscito."
        ]
      },
      { q: "Redúcelo: «Dopo che ho letto il contratto» → «Dopo ___ letto il contratto»" },
      { q: "Redúcelo: «Mentre tornavo a casa» → «___ a casa»" },
      { q: "Redúcelo: «Poiché ero stanco» → «___ stanco»" },
      {
        q: "Una forma reducida exige:",
        opts: ["el mismo tiempo", "el mismo sujeto en las dos oraciones", "que no haya negación"]
      },
      {
        q: "Reduce las frases.",
        tr: "Después de haber leído el contrato, firmé. Antes de contestar, me lo pensé."
      },
      { q: "«Volviendo a casa, me encontré con Giulia.»" },
      { tr: "Terminado el trabajo, nos fuimos todos." },
      { tr: "Habiendo visto ya esa película, preferí quedarme en casa." },
      { tr: "Antes de firmar, querría releer el contrato." }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Test",
    title: "Test de la unidad 3",
    objectives: ["comprobar la pasiva, el passato remoto y las subordinadas reducidas"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      {
        q: "«Il modulo va compilato» significa:",
        opts: ["va rellenado", "debe rellenarse", "ha sido rellenado"]
      },
      { q: "«La lettera ___ stata scritta da Marco.»" },
      { q: "«Le domande ___ valutate ogni mese.» (venire)" },
      {  },
      { q: "Passato remoto de «prendere», io: ___" },
      { q: "Correcto:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "«Mentre tornavo» → «___» (gerundio)" },
      { q: "«Las solicitudes deben presentarse antes del viernes.»" },
      { tr: "El proyecto fue aprobado en 1998 y se ejecutó en tres años." },
      { tr: "Después de haber leído el contrato, decidí no firmar." }
    ]
  },
  "unit:b2-u04": {
    title: "Sociedad y debate",
    grammarNote: "vocabulario abstracto · argumentación · registros"
  },
  "lesson:b2-u04-l1": {
    theme: "Sociedad",
    title: "La economía y el mercado laboral",
    objectives: [
      "entender los términos económicos básicos de la prensa",
      "hablar del mercado laboral",
      "usar las nominalizaciones propias de este registro"
    ],
    theory: [
      {
        h: "El vocabulario de las páginas de economía",
        p: "La escritura económica se apoya en un conjunto estrecho y repetitivo de palabras. Domina un centenar y la mayoría de los artículos se abren: <em>il PIL</em> (el PIB), <em>l'inflazione</em>, <em>il debito pubblico</em>, <em>la disoccupazione</em>, <em>il potere d'acquisto</em>, <em>la produttività</em>. Casi todas son cognados transparentes: aquí ganas terreno rápido."
      },
      {
        h: "Estructuras características",
        list: [
          "nominalización: <em>la crescita dei prezzi</em> en vez de «los precios suben»",
          "pasiva: <em>è stato approvato il decreto</em>",
          "expresiones de cambio: <em>in aumento, in calo, stabile, in ripresa</em>",
          "comparaciones: <em>rispetto allo scorso anno, su base annua</em>"
        ]
      },
      {
        h: "Cómo es de verdad el mercado laboral italiano",
        p: "<em>Il precariato</em> (la precariedad), <em>i contratti a termine</em>, <em>la fuga di cervelli</em>, <em>i NEET</em>, <em>il divario Nord-Sud</em>: vuelven en todos los debates públicos. El paisaje te sonará, porque el debate español gira sobre las mismas piezas; el <em>divario Nord-Sud</em> es la única que no tiene traducción directa, aunque se parece a tu brecha territorial."
      },
      {
        tip: "<em>Il cuneo fiscale</em> (la cuña fiscal, la diferencia entre lo que paga la empresa y lo que cobra el trabajador) es uno de los términos más repetidos del debate económico italiano. Sale en cualquier discusión sobre salarios."
      }
    ],
    grammar: {
      title: "Vocabulario económico",
      table: {
        head: ["italiano", "español", "contexto"],
        rows: [
          ["il PIL", "el PIB", "macroeconomía"],
          ["l'inflazione", "la inflación", "precios"],
          ["la disoccupazione", "el paro", "mercado laboral"],
          ["il potere d'acquisto", "el poder adquisitivo", "salarios"],
          ["il precariato", "la precariedad", "empleo"],
          ["la fuga di cervelli", "la fuga de cerebros", "emigración"],
          ["in calo / in aumento", "a la baja / al alza", "cifras"]
        ]
      },
      examples: [
        { tr: "La inflación baja respecto al año pasado." },
        { tr: "El paro juvenil sigue siendo un problema estructural." },
        { tr: "El poder adquisitivo de los hogares ha caído." },
        { tr: "Muchos jóvenes titulados se van del país." },
        { tr: "La brecha entre el norte y el sur se ha ampliado." },
        { tr: "El decreto fue aprobado con enmiendas." }
      ]
    },
    vocab: [
      "PIB",
      "inflación",
      "deuda pública",
      "paro, desempleo",
      "poder adquisitivo",
      "precariedad laboral",
      "fuga de cerebros",
      "brecha",
      "crecimiento",
      "recuperación",
      "decreto",
      "interanual"
    ],
    exercises: [
      { q: "Relaciona.", pairs: ["PIB", "inflación", "paro", "brecha"] },
      { q: "«La fuga di cervelli» es:", opts: ["una fuga de la cárcel", "la fuga de cerebros", "la pérdida de memoria"] },
      { q: "Completa: «L'inflazione è in ___ rispetto allo scorso anno.» (a la baja)" },
      { q: "Completa la nominalización: «i prezzi crescono» → «la ___ dei prezzi»" },
      {
        q: "«Il precariato» significa:",
        opts: ["el empleo estable", "el trabajo precario con contratos cortos", "la jubilación"]
      },
      { q: "Completa.", tr: "El poder adquisitivo ha caído y el paro juvenil sigue alto." },
      { q: "«El decreto fue aprobado con enmiendas.»" },
      { tr: "La brecha entre el norte y el sur se ha ampliado." },
      { tr: "En términos interanuales, el PIB creció un cero coma siete por ciento." },
      { tr: "El paro juvenil sigue siendo un problema estructural." }
    ]
  },
  "lesson:b2-u04-l2": {
    theme: "Sociedad",
    title: "Medio ambiente y tecnología",
    objectives: [
      "hablar del cambio climático y de la tecnología",
      "expresar preocupación y esperanza",
      "organizar los argumentos a favor y en contra"
    ],
    theory: [
      {
        h: "Dos campos, una misma forma de debate",
        p: "Tanto el clima como la tecnología se discuten en italiano con el marco <em>rischi / opportunità</em>. Conviene llevar el esqueleto preparado: <em>Da un lato ci sono rischi evidenti…, dall'altro le opportunità…</em>"
      },
      {
        h: "Preocupación y esperanza",
        list: [
          "preocupación: <em>temo che…</em>, <em>c'è il rischio che…</em>, <em>mi preoccupa il fatto che…</em> (congiuntivo)",
          "esperanza: <em>spero che…</em>, <em>confido nel fatto che…</em>, <em>sono ottimista sul…</em>",
          "cautela: <em>bisogna vedere se…</em>, <em>dipenderà da…</em>"
        ]
      },
      {
        h: "El vocabulario que vuelve una y otra vez",
        p: "<em>la transizione ecologica</em>, <em>le energie rinnovabili</em>, <em>l'impronta di carbonio</em>, <em>la raccolta differenziata</em>, <em>l'intelligenza artificiale</em>, <em>la privacy</em>, <em>la disinformazione</em>, <em>l'automazione</em>."
      },
      {
        tip: "<em>Il fatto che</em> pide siempre congiuntivo: <em>Il fatto che <b>sia</b> difficile non significa che sia impossibile.</em> Tu «el hecho de que sea difícil» hace exactamente lo mismo, así que este punto lo tienes resuelto."
      }
    ],
    grammar: {
      title: "Debate: a favor y en contra",
      table: {
        head: ["función", "expresión", "modo"],
        rows: [
          ["preocupación", "Temo che / C'è il rischio che", "congiuntivo"],
          ["un hecho como sujeto", "Il fatto che…", "congiuntivo"],
          ["esperanza", "Spero che / Confido che", "congiuntivo"],
          ["reserva", "Bisogna vedere se…", "indicativo"],
          ["dependencia", "Dipenderà da…", "indicativo"],
          ["contraste", "Da un lato… dall'altro…", "—"]
        ]
      },
      examples: [
        { tr: "Me temo que la transición está tardando demasiado." },
        { tr: "El hecho de que sea difícil no significa que sea imposible." },
        { tr: "Existe el riesgo de que la automatización reduzca los puestos de trabajo." },
        { tr: "Las renovables ya cubren una parte significativa." },
        { tr: "Habrá que ver si las normas se aplican." },
        { tr: "Soy moderadamente optimista." }
      ]
    },
    vocab: [
      "la transición ecológica",
      "energías renovables",
      "huella de carbono",
      "recogida selectiva",
      "residuos",
      "inteligencia artificial",
      "automatización",
      "desinformación",
      "riesgo",
      "oportunidad",
      "sostenible",
      "con cautela"
    ],
    exercises: [
      { q: "Completa: «Il fatto che ___ difficile non significa che sia impossibile.» (essere)" },
      { q: "Completa: «C'è il rischio che l'automazione ___ i posti di lavoro.» (ridurre)" },
      { q: "Relaciona.", pairs: ["huella de carbono", "recogida selectiva", "residuos", "sostenible"] },
      { q: "Detrás de «il fatto che» va:", opts: ["indicativo", "congiuntivo", "el infinitivo"] },
      {
        q: "«Bisogna vedere se le norme verranno applicate» expresa:",
        opts: ["certeza", "una reserva prudente", "preocupación"]
      },
      {
        q: "Completa la intervención.",
        tr: "Por un lado hay riesgos evidentes, por otro las oportunidades son reales."
      },
      { q: "«Me temo que está tardando demasiado.»" },
      { tr: "Soy moderadamente optimista sobre el futuro." },
      { tr: "El hecho de que la tecnología avance no resuelve el problema por sí solo." },
      { tr: "Existe el riesgo de que la transición sea demasiado lenta." }
    ]
  },
  "lesson:b2-u04-l3": {
    theme: "Comunicación",
    title: "Defender una postura",
    objectives: ["construir una argumentación extensa", "responder a un contraargumento", "cerrar un debate con una conclusión"],
    theory: [
      {
        h: "Tres movimientos que hacen funcionar una argumentación",
        list: [
          "<b>concesión</b>: dale la razón al otro — <em>È vero che…</em>",
          "<b>el giro</b>: quítale peso — <em>Tuttavia / Va però considerato che…</em>",
          "<b>evidencia</b>: apóyalo con cifras o un ejemplo — <em>I dati mostrano che…</em>"
        ]
      },
      {
        h: "Responder a un contraargumento",
        p: "<em>Non credo che questo argomento regga</em>, <em>Mi sembra una generalizzazione</em>, <em>Questo vale in alcuni casi, non in tutti</em>, <em>Dipende da come si misura</em>. Todas atacan el argumento, no a la persona."
      },
      {
        h: "El tono de un debate italiano",
        p: "El debate italiano puede ser ruidoso y estar lleno de interrupciones, pero rara vez se vuelve personal. La fórmula <em>con tutto il rispetto, non sono d'accordo</em> es una manera perfectamente aceptable de abrir un desacuerdo, y interrumpir se lee como interés, no como mala educación. La dinámica es la tuya: el solapamiento tampoco es agresión en español."
      },
      {
        tip: "<em>Il punto è che…</em> («el caso es que…», «la cuestión es que…») es la manera más eficaz de devolver una discusión al fondo del asunto cuando empieza a irse por las ramas."
      }
    ],
    grammar: {
      title: "Argumentación avanzada",
      table: {
        head: ["movimiento", "fórmula", "en español"],
        rows: [
          ["concesión", "È vero che… / Concordo sul fatto che…", "Es verdad que…"],
          ["el giro", "Va però considerato che…", "Hay que tener en cuenta, eso sí, que…"],
          ["evidencia", "I dati mostrano che…", "Los datos muestran que…"],
          ["rebatir", "Mi sembra una generalizzazione.", "Me parece una generalización."],
          ["el fondo", "Il punto è che…", "La cuestión es que…"],
          ["conclusión", "Alla luce di quanto detto…", "A la luz de lo dicho…"]
        ]
      },
      examples: [
        {
          tr: "Es verdad que los costes son altos, pero hay que tener en cuenta el ahorro a largo plazo."
        },
        { tr: "Los datos muestran la tendencia contraria." },
        { tr: "Eso vale en algunos casos, no como regla general." },
        { tr: "La cuestión es que no tenemos alternativas realistas." },
        { tr: "Con todo el respeto, no estoy de acuerdo." },
        { tr: "A la luz de lo dicho, propongo revisar el plan." }
      ]
    },
    vocab: [
      "argumentar",
      "generalización",
      "sostenerse (un argumento)",
      "rebatir",
      "contraargumento",
      "coincidir en",
      "a la luz de",
      "a largo plazo",
      "la cuestión es que",
      "con todo el respeto",
      "revisar",
      "tendencia"
    ],
    exercises: [
      { q: "Relaciona.", pairs: ["rebatir", "sostenerse", "a la luz de", "generalización"] },
      {
        q: "¿Qué movimiento refuerza más una argumentación?",
        opts: [
          "Repetir la tesis",
          "Darle la razón al otro antes de quitarle peso",
          "Levantar la voz"
        ]
      },
      { q: "Completa: «Va però ___ che i costi si ammortizzano.» (tener en cuenta)" },
      { q: "Completa: «Il ___ è che non abbiamo alternative.»" },
      {
        q: "Construye el argumento.",
        tr: "Es verdad que los costes son altos, pero hay que tener en cuenta el ahorro a largo plazo."
      },
      { q: "«Me parece una generalización.»" },
      {
        q: "Un debate en una reunión.",
        setting: "Reunión de equipo, discusión sobre el presupuesto.",
        lines: [
          { tr: "Esta inversión es demasiado cara, y punto." },
          {
            tr: "Concede una parte y mete un contraargumento.",
            answerTr: "Es verdad que los costes son altos, pero hay que tener en cuenta el ahorro a largo plazo."
          },
          { tr: "Pero todos dicen que los proyectos así fracasan." },
          {
            tr: "Rebate la generalización citando los datos.",
            answerTr: "Me parece una generalización: los datos muestran lo contrario."
          }
        ]
      },
      { tr: "A la luz de lo dicho, propongo revisar el plan." },
      { tr: "Con todo el respeto, no creo que ese argumento se sostenga." },
      { tr: "La cuestión es que no tenemos alternativas realistas." }
    ]
  },
  "lesson:b2-u04-test": {
    theme: "Examen",
    title: "Test — repaso de las unidades 1-4",
    objectives: ["comprobar el congiuntivo, las condicionales, la pasiva y la argumentación"],
    theory: [{ p: "Doce tareas de las primeras cuatro unidades. Se aprueba con un 70 %." }],
    exercises: [
      {  },
      { q: "«Pensavo che ___ più semplice.»" },
      { q: "«Speravo che mi ___ chiamato.»" },
      { q: "«Se ___ tempo, verrei.»", opts: ["ho", "avrei", "avessi"] },
      { q: "Tipo 3.", tr: "Si hubiera estudiado, habría aprobado el examen." },
      { q: "«Il modulo ___ compilato in stampatello.» (debe)" },
      { q: "Passato remoto de «fare», lui: ___" },
      { q: "Correcto:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "«Il fatto che ___ difficile non significa niente.» (essere)" },
      { q: "«Parla come se ___ un esperto.»" },
      { q: "«Es verdad que los costes son altos, pero hay que tener en cuenta el ahorro.»" },
      { tr: "A la luz de los datos, creo que merece la pena revisar el plan." }
    ]
  }
});
