/* ============================================================
   Textos en la lengua del alumno (es) para data/core/a1-01.js
   Las claves remiten a los id de la capa neutra; los arrays se unen
   por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a1-u01": { title: "El ritual del café", grammarNote: "essere · género y número · artículos" },
  "lesson:a1-u01-l1": {
    theme: "Vida cotidiana",
    title: "Saludos y tu primer pedido",
    objectives: [
      "saludar y despedirte según la hora del día",
      "pedir un café como lo hacen los italianos",
      "conjugar essere en presente"
    ],
    theory: [
      {
        h: "El saludo depende del reloj, no del ánimo",
        p: "Los saludos italianos parten el día en dos. <strong>Buongiorno</strong> va de la mañana hasta primera hora de la tarde. Luego, entre las dos y las cinco (la frontera es difusa y cambia según la región), se pasa a <strong>buonasera</strong>, que se usa al entrar en un bar a las seis. <strong>Buonanotte</strong> no es un saludo: es lo que se dice al irse a dormir."
      },
      {
        h: "Ciao no siempre es la opción segura",
        p: "<strong>Ciao</strong> vale para «hola» y para «adiós», pero solo con gente a la que tratarías de <em>tu</em>: amigos, gente de tu edad, familia, el camarero joven. A un camarero de cincuenta años, a un funcionario, al dueño de una tienda que ves por primera vez: <strong>buongiorno</strong>. Entrar en una farmacia con «ciao» suena más o menos como entrar diciendo «¿qué pasa, tío?»."
      },
      {
        contrast: "El español también reparte el día, y ahí está la trampa: las fronteras no coinciden. «Buenas noches» sirve para saludar y para despedirse; <em>buonanotte</em> solo para despedirse, y decirlo al entrar es el desliz clásico. Y donde el español dice «buenas tardes» desde el mediodía, el italiano sigue con <em>buongiorno</em> un buen rato más."
      },
      {
        h: "Essere, el verbo sin el que no hay frase",
        p: "<strong>Essere</strong> significa «ser» y «estar» a la vez. Sus formas no se parecen al infinitivo (<em>sono</em>, <em>sei</em>, <em>è</em>…), así que no hay regla que las genere: se aprenden. La buena noticia es que las vas a repetir tantas veces que se colocan solas."
      },
      {
        tip: "Los pronombres sujeto (io, tu, lui…) se omiten casi siempre, porque la desinencia ya dice quién. <em>Sono americana</em> basta; <em>io sono americana</em> añade énfasis: «<b>yo</b> soy americana (y tú no)». Igual que en español."
      }
    ],
    grammar: {
      title: "Essere (ser / estar) — presente",
      note: "Cuidado con el acento de <b>è</b>: sin él, <em>e</em> significa «y». Son dos palabras distintas.",
      table: {
        head: ["persona", "forma", "en español"],
        rows: [
          ["io", "sono", "soy / estoy"],
          ["tu", "sei", "eres / estás (informal)"],
          ["lui / lei / Lei", "è", "es / está; usted es"],
          ["noi", "siamo", "somos / estamos"],
          ["voi", "siete", "sois / estáis"],
          ["loro", "sono", "son / están"]
        ]
      },
      examples: [
        {
          tr: "Buenos días, un café por favor.",
          note: "«un caffè» es un espresso: no hace falta especificar"
        },
        { tr: "Soy Anna, encantada." },
        { tr: "¿Eres de Roma?" },
        { tr: "El café está caliente." },
        { tr: "Llegamos tarde." },
        { tr: "Están en el bar." }
      ]
    },
    vocab: [
      "buenos días (hasta primera hora de la tarde)",
      "buenas tardes (desde las cuatro o cinco)",
      "buenas noches (solo al despedirse)",
      "hola / adiós (informal)",
      "adiós (formal)",
      "por favor (al pedir algo)",
      "gracias",
      "de nada",
      "espresso",
      "capuchino",
      "cruasán",
      "bar, cafetería",
      "encantado",
      "perdone (formal)"
    ],
    dialogue: [
      "¡Buenos días! ¿Qué le pongo?",
      "Buenos días. Un café y un cruasán, por favor.",
      "Enseguida. Son dos cincuenta.",
      "Aquí tiene. ¡Gracias!",
      "De nada, ¡que vaya bien!"
    ],
    culture: {
      title: "Con ojos italianos: el café tiene reglas",
      text: "<p>En un bar italiano el café se toma <b>de pie, en la barra</b> (al banco) y dura tres minutos. La mesa se paga aparte, a veces el doble: no es un timo, son dos servicios distintos en la lista de precios.</p><p><b>Un capuchino después de las once</b> te delata como turista: la leche se considera pesada y pertenece al desayuno. Después de comer se pide <i>un caffè</i>, o como mucho <i>un macchiato</i>, un espresso con una gota de leche.</p><p>Se suele pagar <b>después</b> de tomarlo, salvo que el bar tenga caja en la entrada: entonces primero <i>lo scontrino</i> (el tique) y luego el café.</p>"
    },
    exercises: [
      {
        q: "Entras en un bar a las nueve y media de la mañana. ¿Qué dices?",
        opts: ["Buonasera", "Buongiorno", "Buonanotte"],
        why: "Buongiorno cubre de la mañana a primera hora de la tarde. Buonanotte es solo una despedida antes de dormir."
      },
      {
        q: "El camarero tiene unos sesenta años y no lo conoces. ¿Qué saludo va bien?",
        opts: ["Ciao!", "Buongiorno!", "Buonanotte!"],
        why: "Reserva «ciao» para gente a la que tuteas. A un desconocido en un bar: buongiorno."
      },
      {
        tr: "La conjugación entera, sin mirar.",
        why: "Essere es irregular en todas las personas. Es una de las dos conjugaciones que hay que memorizar sí o sí."
      },
      {
        q: "Completa: «Anna e Marco ___ italiani.» (Anna y Marco son italianos.)",
        hint: "tercera persona del plural",
        why: "Loro sono. Fíjate en que «sono» sirve para <b>io</b> y para <b>loro</b>: lo aclara el contexto."
      },
      {
        q: "Traduce: «Soy de Polonia.»",
        hint: "essere + da + país",
        why: "Sono dalla Polonia. Los nombres de país llevan artículo: la Polonia → dalla Polonia."
      },
      {
        tr: "Un café y un cruasán, por favor.",
        why: "En italiano no hace falta ningún verbo de cortesía: dices lo que quieres y añades <i>per favore</i>."
      },
      {
        q: "Empareja cada expresión con su significado.",
        pairs: ["gracias", "de nada", "perdone (formal)", "adiós"]
      },
      {
        tr: "Buenas tardes, un capuchino por favor.",
        why: "Ojo con la doble <b>cc</b> y la doble <b>pp</b>: en italiano se sostienen audiblemente más que las simples."
      },
      {
        tr: "Buenos días, un café por favor.",
        why: "«Caffè» lleva el acento en la última sílaba: ca-FE, no CA-fe."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Gramática básica",
    title: "El género del sustantivo",
    objectives: [
      "reconocer el género por la terminación",
      "formar el plural según -o/-i, -a/-e, -e/-i",
      "manejar los invariables como il bar y la città"
    ],
    theory: [
      {
        h: "Dos géneros, no tres",
        p: "El italiano solo tiene masculino y femenino: no hay neutro. Todo sustantivo pertenece a uno de los dos, objetos incluidos: <em>il tavolo</em> (mesa) es masculino, <em>la sedia</em> (silla) femenino. Aquí el español te da casi todo hecho — salvo que «la mesa» es femenina y <em>il tavolo</em> no."
      },
      {
        h: "Tres patrones que cubren casi todo",
        list: [
          "terminación en <b>-o</b> → masculino, plural <b>-i</b>: <em>il libro → i libri</em>",
          "terminación en <b>-a</b> → femenino, plural <b>-e</b>: <em>la casa → le case</em>",
          "terminación en <b>-e</b> → masculino <i>o</i> femenino, plural siempre <b>-i</b>: <em>il fiore → i fiori</em>, <em>la chiave → le chiavi</em>"
        ]
      },
      {
        trap: "Los sustantivos en <b>-e</b> son el único grupo cuyo género hay que memorizar con la palabra. Apúntalos siempre con el artículo: no «fiore», sino <b>il fiore</b>."
      },
      {
        h: "Palabras que nunca cambian",
        p: "Los sustantivos acabados en vocal tónica (<em>la città</em>, <em>il caffè</em>) y los préstamos (<em>il bar</em>, <em>lo sport</em>, <em>il film</em>) son iguales en singular y en plural. Solo el artículo distingue: <em>la città → le città</em>, como «el lunes / los lunes»."
      },
      {
        contrast: "El sistema es el tuyo, así que no hay categoría nueva que construir. Lo que hay que vigilar son los desacuerdos concretos: <em>il latte</em>, <em>il sale</em>, <em>il fiore</em> y <em>il mare</em> son masculinos donde el español dice la leche, la sal, la flor y la mar (o el mar). Y ojo con la clase en <b>-e</b>, que el español no tiene: ahí la terminación no informa de nada."
      }
    ],
    grammar: {
      title: "Género y plural del sustantivo",
      table: {
        head: ["patrón", "singular", "plural", "en español"],
        rows: [
          ["-o → -i (m)", "il libro", "i libri", "libro / libros"],
          ["-a → -e (f)", "la ragazza", "le ragazze", "chica / chicas"],
          ["-e → -i (m)", "il ristorante", "i ristoranti", "restaurante / restaurantes"],
          ["-e → -i (f)", "la stazione", "le stazioni", "estación / estaciones"],
          ["invariable", "la città", "le città", "ciudad / ciudades"],
          ["préstamos", "il bar", "i bar", "bar / bares"]
        ]
      },
      examples: [
        { tr: "El cruasán está bueno." },
        { tr: "Los cruasanes están buenos.", note: "el adjetivo también cambia de terminación" },
        { tr: "La estación está cerca.", note: "«stazione» es femenino pese a la -e" },
        { tr: "Dos cafés, por favor.", note: "caffè no cambia de forma" }
      ]
    },
    vocab: [
      "libro",
      "casa",
      "mesa",
      "silla",
      "restaurante",
      "estación",
      "llave",
      "flor",
      "ciudad",
      "café / bar",
      "deporte",
      "película",
      "noche",
      "día"
    ],
    exercises: [
      {
        q: "¿Qué palabra es femenina?",
        opts: ["il tavolo", "la chiave", "il fiore"],
        why: "<i>La chiave</i>: el género lo dice el artículo, porque la terminación -e no lo revela."
      },
      {
        q: "El plural de «la ragazza» es «___ ragazze».",
        why: "El artículo femenino plural es siempre <b>le</b>."
      },
      {
        q: "Ponlo en plural: «il ristorante» → «i ___».",
        hint: "-e siempre pasa a -i en plural",
        why: "Los sustantivos en -e hacen el plural en -i, sea cual sea su género."
      },
      {
        q: "Elige el artículo determinado singular.",
        why: "Con los sustantivos en -e el género se memoriza, y por eso siempre se apuntan con artículo.",
        items: ["libro", "casa", "estación", "restaurante", "llave", "día"]
      },
      {
        q: "¿Cuántos cafés pides si dices «due caffè»?",
        opts: ["Uno", "Dos", "No hay forma de saberlo"],
        why: "«Caffè» no se flexiona; el número viene del numeral o del artículo: <i>il caffè / i caffè</i>."
      },
      {
        q: "¿Cuáles de estos sustantivos son iguales en plural?",
        opts: ["la città", "il libro", "il bar", "la sedia", "lo sport"],
        why: "Invariables: las palabras con acento en la vocal final (città) y los préstamos (bar, sport)."
      },
      { tr: "El restaurante está cerrado.", why: "Orden: artículo + sustantivo + verbo + adjetivo." },
      { tr: "Las llaves están encima de la mesa." },
      { tr: "La ciudad es preciosa.", why: "«Città» lleva el acento al final: chi-TA." }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Gramática básica",
    title: "Artículos determinados e indeterminados",
    objectives: [
      "elegir el artículo determinado según el primer sonido de la palabra",
      "distinguir il de un",
      "usar lo y gli correctamente"
    ],
    theory: [
      {
        h: "Por qué siete formas donde el español tiene cuatro",
        p: "El artículo hace dos trabajos a la vez: marca género y número, y dice si hablamos de algo que el oyente ya conoce o de uno cualquiera. <em>Vorrei un caffè</em>: un café cualquiera. <em>Dov'è il caffè?</em>: el que los dos tenemos en la cabeza. Eso el español también lo hace; lo que no tiene es la tercera forma masculina."
      },
      {
        h: "Las formas masculinas dependen del primer sonido",
        p: "El artículo masculino tiene tres variantes, y la elección no es de gusto sino de pronunciación. <strong>Il</strong> ante consonante normal. <strong>Lo</strong> ante <em>s + consonante</em> (<em>lo studente</em>) y ante <em>z</em>, <em>gn</em>, <em>ps</em>, <em>y</em>, <em>x</em>. <strong>L'</strong> ante vocal. El motivo es puramente fonético: «il studente» es incómodo de decir. Es el mismo instinto que te hace decir «el agua» y no «la agua»."
      },
      {
        h: "El plural",
        list: [
          "<b>il → i</b>: <em>il libro → i libri</em>",
          "<b>lo / l' → gli</b>: <em>lo studente → gli studenti</em>, <em>l'amico → gli amici</em>",
          "<b>la / l' → le</b>: <em>la casa → le case</em>, <em>l'amica → le amiche</em>"
        ]
      },
      {
        h: "El artículo indeterminado",
        p: "<strong>Un</strong> ante consonante y ante vocal (<em>un libro</em>, <em>un amico</em>, ¡sin apóstrofo!), <strong>uno</strong> allí donde iría <em>lo</em> (<em>uno studente</em>), <strong>una</strong> para el femenino, <strong>un'</strong> ante vocal femenina (<em>un'amica</em>)."
      },
      {
        trap: "<b>un amico</b> (sin apóstrofo, un chico) frente a <b>un'amica</b> (con apóstrofo, una chica). Por escrito el apóstrofo es la única diferencia y lleva encima todo el género. El español distingue amigo/amiga con la vocal, así que aquí no hay costumbre en la que apoyarse."
      }
    ],
    grammar: {
      title: "Los artículos: tabla completa",
      table: {
        head: ["contexto", "det. sing.", "det. pl.", "indeterminado"],
        rows: [
          ["m. + consonante", "il treno", "i treni", "un treno"],
          ["m. + s+cons., z, gn, ps", "lo studente, lo zaino", "gli studenti", "uno studente"],
          ["m. + vocal", "l'amico", "gli amici", "un amico"],
          ["f. + consonante", "la casa", "le case", "una casa"],
          ["f. + vocal", "l'amica", "le amiche", "un'amica"]
        ]
      },
      examples: [
        { tr: "Un café, por favor.", note: "uno cualquiera: indeterminado" },
        { tr: "Este café está frío.", note: "uno concreto: determinado" },
        { tr: "La mochila pesa.", note: "z → lo" },
        { tr: "Los estudiantes llegan tarde." },
        { tr: "Una amiga de Roma.", note: "femenino + vocal → un'" }
      ]
    },
    vocab: [
      "estudiante",
      "mochila",
      "amigo",
      "tren",
      "espejo",
      "azúcar",
      "agua",
      "vaso",
      "botella",
      "hotel",
      "psicólogo",
      "gente (¡singular en italiano!)"
    ],
    exercises: [
      {
        q: "¿Qué artículo lleva «zucchero» (azúcar)?",
        opts: ["il", "lo", "l'"],
        why: "Los masculinos que empiezan por <b>z</b> llevan lo: <i>lo zucchero</i>, igual que <i>lo zaino</i>."
      },
      {
        q: "¿Cuál es el plural de «lo specchio»?",
        opts: ["i specchi", "gli specchi", "le specchie"],
        why: "Lo siempre pasa a <b>gli</b> en plural."
      },
      {
        q: "Elige el artículo determinado correcto.",
        why: "La elección depende del género Y del primer sonido de la palabra.",
        items: ["tren", "estudiante", "amiga", "agua", "botella", "mochila"]
      },
      {
        q: "Completa: «Ho ___ amica a Milano.» (Tengo una amiga en Milán.)",
        hint: "femenino ante vocal",
        why: "Un'amica, con apóstrofo. Sin él (<i>un amico</i>) sería un chico."
      },
      {
        q: "Completa: «___ studenti sono bravi.» (Los estudiantes son buenos.)",
        why: "Studente lleva lo, así que en plural: gli studenti."
      },
      {
        q: "«Vorrei il caffè» frente a «Vorrei un caffè»: ¿cuál es la diferencia?",
        opts: [
          "Ninguna, son sinónimos",
          "Il = ese café concreto ya mencionado; un = un café cualquiera",
          "Il es más educado"
        ],
        why: "El artículo determinado da por hecho que el oyente sabe cuál. En un bar se pide <i>un caffè</i>."
      },
      {
        q: "Empareja el sustantivo con su artículo.",
        pairs: ["ps + consonante", "vocal", "consonante normal", "femenino"]
      },
      {
        tr: "La mochila del estudiante pesa.",
        why: "«Dello» es di + lo: la preposición también se adapta al artículo."
      },
      { tr: "Los estudiantes están en la universidad." }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Vida cotidiana",
    title: "Cómo estás: tu o Lei",
    objectives: [
      "preguntar cómo está alguien, de forma formal e informal",
      "conjugar el verbo stare",
      "saber cuándo se pasa de Lei a tu"
    ],
    theory: [
      {
        h: "Dos maneras de decir «tú»",
        p: "El italiano distingue <strong>tu</strong> (informal) de <strong>Lei</strong> (formal). Es tu tú/usted, con una diferencia: <em>Lei</em> significa literalmente «ella» y se usa para hombres y mujeres por igual, con el verbo en tercera persona del singular: <em>Come sta?</em> Al escribir suele ir con mayúscula para no confundirlo con «ella»."
      },
      {
        h: "Quién propone pasar al tu",
        p: "La regla es simple: lo propone la persona mayor o de más rango. La fórmula es <em>Possiamo darci del tu?</em> En un bar, entre gente de la misma edad, en una empresa joven, los italianos pasan al <em>tu</em> muy rápido. En el banco, en el médico, en una oficina pública, el <em>Lei</em> se queda."
      },
      {
        h: "Stare: «estar», pero de cómo te encuentras",
        p: "Cómo te sientes va con <strong>stare</strong>, no con <em>essere</em>. <em>Come stai?</em> → <em>Sto bene</em>. «Sono bene» es un error que ningún italiano cometería. <em>Stare</em> también sirve para quedarse: <em>Sto a casa</em>."
      },
      {
        contrast: "Aquí el español ayuda mucho: «¿cómo estás? — estoy bien» usa estar, igual que el italiano usa stare. Pero el reparto no es idéntico. Para la ubicación el italiano prefiere <em>essere</em> donde el español exige estar: <em>sono a casa</em>, <em>il libro è sul tavolo</em>. Traducir «estoy en casa» por «sto a casa» no es falso, pero significa más bien «me quedo en casa»."
      }
    ],
    grammar: {
      title: "Stare (encontrarse, quedarse) — presente",
      table: {
        head: ["persona", "forma", "ejemplo"],
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
        { tr: "Hola Marco, ¿qué tal?", note: "informal" },
        { tr: "Buenos días, ¿cómo está?", note: "formal" },
        { tr: "Bien, gracias. ¿Y tú?" },
        { tr: "No me quejo.", note: "una respuesta muy corriente" },
        { tr: "Así así." },
        { tr: "¿Nos tuteamos?" }
      ]
    },
    vocab: [
      "¿qué tal? (informal)",
      "¿cómo está? (formal)",
      "estoy bien",
      "no estoy bien",
      "no me quejo",
      "así así",
      "¿y tú?",
      "estupendamente",
      "un poco cansado",
      "señor / señora",
      "hasta pronto",
      "hasta luego"
    ],
    dialogue: [
      "¡Hola Giulia! ¿Qué tal?",
      "¡Hola! Estupendamente, ¿y tú?",
      "Un poco cansado, pero bien. ¡Hasta luego!",
      "Buenos días señora, ¿cómo está?",
      "No me quejo, gracias. ¿Y usted?"
    ],
    exercises: [
      {
        q: "Preguntas cómo está alguien a quien tratas de Lei. ¿Qué frase es correcta?",
        opts: ["Come stai?", "Come sta?", "Come state?"],
        why: "La forma de Lei va en tercera persona del singular: <i>come sta?</i>"
      },
      {
        q: "¿Qué frase es incorrecta?",
        opts: ["Sto bene.", "Sono bene.", "Non c'è male."],
        why: "Cómo te encuentras va con <b>stare</b>, nunca con <i>essere</i>."
      },
      {
        tr: "io, tu, lui/lei, voi",
        why: "Stare es irregular en el singular y en la tercera del plural (stanno)."
      },
      {
        q: "Completa: «Come ___, ragazzi?» (¿Qué tal, chicos?)",
        why: "Te diriges a un grupo → la forma de voi: state."
      },
      { q: "Traduce informalmente: «Estoy bien, gracias. ¿Y tú?»", why: "Sto bene, grazie. E tu?" },
      {
        q: "Estás en un bar. El camarero, que te conoce desde hace años, te saluda primero.",
        setting: "El bar del barrio, ocho de la mañana.",
        lines: [
          { tr: "¡Hola! ¿Qué tal esta mañana?" },
          { tr: "Di que estás bien y devuelve la pregunta.", answerTr: "Bien, ¿y tú?" },
          { tr: "¡Estupendo! ¿Lo de siempre, un café?" },
          { tr: "Di que sí y da las gracias.", answerTr: "¡Sí, gracias!" }
        ]
      },
      {
        q: "Empareja la respuesta con lo que transmite.",
        pairs: ["muy bien", "no me quejo", "así así", "mal"]
      },
      { tr: "Buenas tardes señora, ¿cómo está?" },
      { tr: "No me quejo, gracias. ¿Y usted?" }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 1",
    objectives: ["comprobar saludos, essere, stare, género y artículos"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con un 70%. No mires las lecciones: si no te acuerdas de algo, es mejor volver atrás y repasarlo."
      }
    ],
    exercises: [
      {
        q: "Son las seis y media de la tarde y entras en una tienda. ¿Qué dices?",
        opts: ["Buongiorno", "Buonasera", "Buonanotte"],
        why: "A partir de las cuatro o cinco los italianos pasan a buonasera."
      },
      { q: "«Noi ___ in ritardo.» (Llegamos tarde.)", why: "essere, la forma de noi." },
      { q: "«Come ___?» preguntando a una amiga cómo está.", why: "stare, la forma de tu." },
      { q: "Elige el artículo determinado.", items: [, , , ] },
      {
        q: "El plural de «l'amico»:",
        opts: ["gli amici", "i amici", "le amiche"],
        why: "El l' masculino pasa a gli."
      },
      {
        q: "¿Qué sustantivos no cambian en plural?",
        opts: ["il caffè", "la sedia", "il bar", "la città"]
      },
      { q: "«Un agua, por favor.»", why: "Un'acqua, per favore: femenino ante vocal." },
      { tr: "Los estudiantes están en el bar." },
      { tr: "Dos cafés y un cruasán, por favor." },
      { tr: "Buenos días, ¿cómo está?" }
    ]
  },
  "unit:a1-u02": { title: "Quién eres", grammarNote: "avere · números · profesiones y nacionalidades" },
  "lesson:a1-u02-l1": {
    theme: "Conocer gente",
    title: "Presentarse",
    objectives: [
      "decir tu nombre, de dónde eres y dónde vives",
      "usar el verbo chiamarsi",
      "preguntar lo mismo a los demás"
    ],
    theory: [
      {
        h: "«Me llamo» es un verbo reflexivo",
        p: "<strong>Chiamarsi</strong> significa literalmente «llamarse». De ahí <em>mi chiamo</em>. El pronombre reflexivo (<em>mi, ti, si…</em>) va <b>delante</b> del verbo, exactamente como en español."
      },
      {
        h: "De dónde eres: essere di o venire da",
        p: "Para una ciudad se dice <em>sono di Madrid</em>; para un país, <em>vengo dalla Spagna</em> o <em>sono spagnolo/a</em>. Los nombres de país llevan artículo (<em>l'Italia, la Spagna</em>), los de ciudad no."
      },
      {
        trap: "Las nacionalidades se escriben en <b>minúscula</b>: <em>sono spagnola</em>, <em>un ragazzo italiano</em>. Como en español, así que aquí no hay nada que desaprender: el que sufre es quien viene del inglés."
      },
      {
        h: "Abitare: vivir en un sitio",
        p: "<em>Abitare a Roma</em> (ciudad), <em>abitare in Italia</em> (país). El mismo reparto a/in vuelve más adelante con los viajes, así que conviene memorizarlo ya como pareja: <b>a + ciudad, in + país</b>. El español usa «en» para las dos cosas, y ahí está la dificultad."
      }
    ],
    grammar: {
      title: "Chiamarsi (llamarse) y preguntar por alguien",
      table: {
        head: ["persona", "chiamarsi", "ejemplo"],
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
        { tr: "¿Cómo te llamas? — Me llamo Eva." },
        { tr: "¿De dónde eres? — Soy de Sevilla." },
        { tr: "Soy española, pero vivo en Milán.", note: "la nacionalidad en minúscula" },
        { tr: "¿Cuántos años tienes? — Tengo veintiocho.", note: "la edad siempre va con avere" },
        { tr: "Encantado, Marco. — El gusto es mío." }
      ]
    },
    vocab: [
      "me llamo…",
      "¿cómo te llamas?",
      "¿de dónde eres?",
      "soy de… (ciudad)",
      "vivo en… (ciudad)",
      "español (m. / f.)",
      "italiano (m. / f.)",
      "nombre",
      "apellido",
      "encantado",
      "yo también",
      "¿en serio?"
    ],
    exercises: [
      {
        q: "¿Cómo preguntas el nombre de manera informal?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "La forma de tu: <i>ti chiami</i>. La versión de Lei es <i>come si chiama?</i>"
      },
      {
        q: "¿Qué frase está bien escrita?",
        opts: ["Sono Spagnola.", "Sono spagnola.", "Sono la spagnola."],
        why: "Las nacionalidades van en minúscula y sin artículo después de essere."
      },
      { q: "Completa: «___ chiamo Marta.»", why: "Pronombre reflexivo de primera persona: mi chiamo." },
      {
        q: "Completa: «Abito ___ Roma.» (Vivo en Roma.)",
        why: "Las ciudades llevan <b>a</b> y los países <b>in</b>: abito a Roma / abito in Italia."
      },
      {
        q: "Completa la presentación.",
        tr: "¡Hola! Me llamo Kate, soy de Sevilla y vivo en Bolonia.",
        why: "Los tres verbos que salen en cualquier primera frase sobre uno mismo."
      },
      { tr: "Encantado, me llamo Luca." },
      {
        q: "Conoces a alguien en una escuela de idiomas.",
        setting: "Primer día en una escuela de idiomas de Florencia.",
        lines: [
          { tr: "¡Hola! Soy Giulia. ¿Y tú, cómo te llamas?" },
          { tr: "Preséntate con tu nombre.", answerTr: "Me llamo Eva." },
          { tr: "¡Encantada, Eva! ¿De dónde eres?" },
          { tr: "Di que eres de Polonia: es la respuesta modelo grabada.", answerTr: "Soy de Polonia." }
        ]
      },
      { tr: "Me llamo Elena y vivo en Nápoles." },
      { tr: "¡Encantado!" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Gramática básica",
    title: "Tener, y los números del 0 al 100",
    objectives: [
      "conjugar avere",
      "usar expresiones como ho fame, ho freddo, ho ventotto anni",
      "contar hasta cien y decir un precio"
    ],
    theory: [
      {
        h: "Avere trabaja igual que «tener»",
        p: "El italiano usa <strong>avere</strong> donde el inglés usa «ser». <em>Ho fame</em> es literalmente «tengo hambre», y eso en español ya lo dices así. Lo mismo con la sed, el frío, el calor, el miedo, el sueño y la edad. Es uno de los capítulos que el español te regala entero."
      },
      {
        h: "La edad: siempre avere",
        p: "<em>Ho trent'anni</em>, «tengo treinta años». Fíjate en el apóstrofo: <em>trent'anni</em>, <em>vent'anni</em>. La vocal final de la decena desaparece delante de <em>anni</em>."
      },
      {
        h: "La h que nunca se oye",
        p: "Las formas <em>ho, hai, ha, hanno</em> empiezan por una <b>h</b> muda. No se pronuncia en absoluto: existe solo para distinguirlas de otras palabras — <em>ho</em> (tengo) frente a <em>o</em> (o), <em>ha</em> (tiene) frente a <em>a</em> (a). Es la misma h muda del español, con una función distinta."
      },
      {
        h: "Números: decena más unidad",
        p: "A partir de 20 se escriben en una sola palabra: <em>ventidue</em>, <em>trentasei</em>. Delante de <em>uno</em> y de <em>otto</em> la decena pierde su vocal final: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>."
      }
    ],
    grammar: {
      title: "Avere (tener) y los números",
      table: {
        head: ["persona", "avere", "expresión"],
        rows: [
          ["io", "ho", "Ho fame. (Tengo hambre.)"],
          ["tu", "hai", "Hai freddo? (¿Tienes frío?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Tiene razón.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Tenemos sed.)"],
          ["voi", "avete", "Avete tempo? (¿Tenéis tiempo?)"],
          ["loro", "hanno", "Hanno paura. (Tienen miedo.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "delante de uno y otto la decena pierde la vocal" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "Tengo veintiocho años." }
      ]
    },
    vocab: [
      "tengo hambre",
      "tengo sed",
      "tengo frío / calor",
      "tengo sueño",
      "tengo miedo",
      "tengo razón",
      "necesito…",
      "¿cuántos años tienes?",
      "¿cuánto es?",
      "euro",
      "número",
      "número de teléfono"
    ],
    exercises: [
      { why: "Cuatro formas empiezan por h muda: ho, hai, ha, hanno." },
      {
        q: "¿Cómo se dice «tengo hambre»?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Los estados físicos van con avere: ho fame, ho sete, ho freddo. Igual que en español."
      },
      { q: "¿Qué número es «settantasei»?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Escríbelo en cifras: «novantatré»", why: "novanta (90) + tre (3)." },
      {
        q: "Completa: «Ho vent___ anni.» (Tengo veinte años.)",
        hint: "algo desaparece delante de «anni»",
        why: "Vent'anni: la decena pierde la vocal final delante de anni."
      },
      { q: "«¿Cuántos años tienes?»", why: "Literalmente: «cuántos años tienes», igual que en español." },
      {
        q: "Empareja la expresión con avere y su significado.",
        pairs: ["tengo sed", "tengo sueño", "tengo miedo", "tengo razón"]
      },
      {
        q: "Completa el intercambio en la caja.",
        tr: "— ¿Cuánto es? — Treinta y dos euros. — Solo tengo veinte, lo siento."
      },
      { tr: "Tengo treinta y cinco años y vivo en Turín." },
      { tr: "¿Cuánto cuesta un capuchino?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Trabajo y personas",
    title: "Profesiones y trabajo",
    objectives: [
      "decir a qué te dedicas",
      "usar fare il / essere un",
      "formar el femenino de los nombres de profesión"
    ],
    theory: [
      {
        h: "Dos construcciones, dos matices",
        p: "«Soy arquitecto» tiene dos versiones en italiano. <strong>Faccio l'architetto</strong> (literalmente «hago el arquitecto») habla del oficio que ejerces y es lo más común al hablar. <strong>Sono architetto</strong> subraya la identidad o la titulación. Después de <em>fare</em> va el artículo determinado; después de <em>essere</em>, normalmente ninguno — igual que en español, «soy arquitecto» sin artículo."
      },
      {
        h: "Formas femeninas",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "sin cambio: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Nombres de profesión en movimiento",
        p: "Formas como <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> son hoy estándar en la prensa y en los documentos oficiales, aunque hace veinte años provocaban discusiones. Al hablar todavía se oye <em>l'avvocato</em> referido a una mujer. Es el mismo debate que «la jueza» o «la médica» en español, y va por el mismo camino."
      },
      {
        contrast: "El sufijo <em>-essa</em> no tiene equivalente español y suena raro al principio: <em>la professoressa</em>, <em>la studentessa</em>, <em>la dottoressa</em>. No es una forma anticuada ni despectiva, es la normal."
      }
    ],
    grammar: {
      title: "Fare (hacer) — presente",
      note: "Irregular y, al mismo tiempo, uno de los tres verbos italianos más frecuentes.",
      table: {
        head: ["persona", "fare", "ejemplo"],
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
        { tr: "¿A qué te dedicas?" },
        { tr: "Soy periodista." },
        { tr: "Soy ingeniero.", note: "después de essere, normalmente sin artículo" },
        { tr: "Trabajo en una agencia." },
        { tr: "Ahora mismo no trabajo." },
        { tr: "Todavía estudio, estoy en el último año." }
      ]
    },
    vocab: [
      "trabajo",
      "profesor",
      "médico",
      "ingeniero",
      "abogado",
      "periodista",
      "administrativo",
      "cocinero",
      "dependiente",
      "obrero",
      "autónomo",
      "estoy buscando trabajo"
    ],
    exercises: [
      { why: "Ojo con la doble c de faccio y facciamo." },
      {
        q: "¿Qué frase significa «soy profesor» y suena más natural?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + artículo determinado es la forma más habitual de decir tu oficio al hablar."
      },
      {
        q: "¿Cuál es el femenino de «il professore»?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "El patrón -e → -essa, como studente → studentessa."
      },
      {
        q: "Completa: «Mia sorella fa ___ dottoressa.»",
        why: "Después de fare va el artículo determinado, ajustado al género: la dottoressa."
      },
      { q: "Elige el artículo.", items: ["cocinera", "ingeniero", "estudiante (f.)", "obrero"] },
      { q: "«¿A qué te dedicas?» (informal)", why: "Che lavoro fai?, literalmente «qué trabajo haces»." },
      {
        q: "Empareja la forma masculina con la femenina.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "Trabajo en un banco de Milán." },
      { tr: "Soy arquitecto, trabajo con mi hermano." },
      { tr: "¿A qué te dedicas? Soy periodista." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Gramática básica",
    title: "La primera conjugación",
    objectives: [
      "conjugar cualquier verbo regular en -are",
      "manejar los cambios ortográficos de cercare, pagare, mangiare",
      "construir una negación y una pregunta"
    ],
    theory: [
      {
        h: "El grupo más grande y más previsible",
        p: "Cerca del 70% de los verbos italianos terminan en <strong>-are</strong>, y casi todos se comportan igual. Quitas la terminación del infinitivo y añades seis propias: <em>-o, -i, -a, -iamo, -ate, -ano</em>. Es tu conjugación en <em>-ar</em>, con desinencias parecidas pero no idénticas: ojo con <em>-iamo</em> y <em>-ate</em>, donde el español dice -amos y -áis."
      },
      {
        h: "Un acento que no se ve",
        p: "En la forma de <em>loro</em> el acento cae en la antepenúltima sílaba: <b>par</b>-la-no, <b>la</b>-vo-ra-no. No «parla-NO». La diferencia se oye y los italianos la notan. El español coloca el acento en el mismo sitio en «hablan», así que el instinto sirve."
      },
      {
        h: "Ortografía que salva la pronunciación",
        list: [
          "<b>-care / -gare</b> añaden una <b>h</b> ante -i y -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>. Es tu qu/gu de «busque» y «pague».",
          "<b>-ciare / -giare</b> pierden la <b>i</b> ante -i: <em>mangiare → mangi</em> (no «mangii»), <em>cominciare → cominci</em>",
          "<b>-iare</b> átono también pierde una i: <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Negación y pregunta no necesitan nada nuevo",
        p: "La negación es una sola palabra, <strong>non</strong>, delante del verbo: <em>non parlo italiano</em>. La pregunta no cambia el orden: basta la entonación, <em>Parli italiano?</em> Igual que en español, y sin nada parecido al auxiliar inglés «do»."
      }
    ],
    grammar: {
      title: "Parlare (hablar) — el patrón -ARE",
      table: {
        head: ["persona", "desinencia", "parlare", "lavorare"],
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
        { tr: "Hablo un poco de italiano." },
        { tr: "No hablo bien, pero entiendo." },
        { tr: "¿Estudias en la universidad?", note: "una pregunta solo por entonación" },
        { tr: "Comemos a las ocho." },
        { tr: "¿Buscas trabajo en Milán?", note: "cercare → cerchi, con h" },
        { tr: "Viven cerca del centro.", note: "acento: A-bi-ta-no" }
      ]
    },
    vocab: [
      "hablar",
      "trabajar",
      "estudiar",
      "vivir (en un sitio)",
      "comer",
      "comprar",
      "buscar",
      "pagar",
      "escuchar",
      "mirar",
      "esperar",
      "empezar"
    ],
    exercises: [
      { why: "El patrón que cubre la mayoría de los verbos italianos." },
      {
        tr: "tu, noi — atención a la ortografía",
        why: "Cerchi y cerchiamo llevan <b>h</b> para mantener el sonido de k."
      },
      {
        q: "¿Qué forma es la correcta para «comes»?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Los verbos en -giare pierden la i ante la desinencia -i: mangi."
      },
      {
        q: "Completa: «Loro ___ a Bologna.» (Viven en Bolonia.)",
        why: "abitare, la forma de loro: -ano."
      },
      {
        q: "Ponlo en negativo: «Parlo italiano.» → «___ parlo italiano.»",
        why: "Una sola palabra, non, delante del verbo: eso es toda la negación."
      },
      { q: "«Buscamos un piso en Roma.»", why: "cercare → cerchiamo (con h), a + ciudad." },
      {
        q: "¿Qué formas pertenecen a «studiare»?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "«Studii» no existe: la doble i se reduce a una."
      },
      { tr: "Los sábados no trabajo.", why: "«Il sabato» con artículo significa «los sábados», con regularidad." },
      { tr: "Estudio italiano desde hace tres meses." },
      { tr: "No hablo bien, pero lo entiendo casi todo." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 2",
    objectives: ["comprobar avere, fare, chiamarsi, los números y la primera conjugación"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70%." }],
    exercises: [
      { q: "«___ chiamo Peter.»" },
      { q: "«Quanti anni ___?» (¿Cuántos años tienes?)" },
      { q: "¿Qué número es «ottantaquattro»?", opts: ["48", "84", "94"] },
      { q: "«Tengo hambre» en italiano:", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "¿Qué forma es correcta para «pagas»?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare añade una h ante -i."
      },
      { q: "Complétalo.", tr: "Soy española, vivo en Verona y soy profesora." },
      { q: "«No hablo italiano.»" },
      { tr: "Tengo veintisiete años y estoy buscando trabajo." },
      { tr: "Me llamo Anna y soy periodista." }
    ]
  },
  "unit:a1-u03": {
    title: "Aperitivo y comida",
    grammarNote: "piacere · artículo partitivo · -ere e -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Comida",
    title: "El verbo piacere",
    objectives: [
      "decir qué te gusta y qué no",
      "elegir entre piace y piacciono",
      "preguntar a los demás qué les gusta"
    ],
    theory: [
      {
        h: "La frase se construye del revés",
        p: "<strong>Piacere</strong> no significa «gustar de algo», significa «resultar agradable». <em>Mi piace la pizza</em> es literalmente «la pizza me resulta agradable». El sujeto gramatical es <b>la cosa</b>, y quien siente el gusto aparece como complemento indirecto (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "Por eso el verbo tiene dos formas",
        p: "Como el sujeto es la cosa, es la cosa la que decide el número: <em>mi piace <b>il</b> caffè</em> (una) frente a <em>mi piacciono <b>gli</b> spaghetti</em> (varias). Ante un infinitivo va siempre en singular: <em>mi piace viaggiare</em>."
      },
      {
        contrast: "Este capítulo el español te lo regala entero: «gustar» funciona exactamente igual, con el mismo complemento indirecto y la misma concordancia con la cosa. «Me gusta el café» / «me gustan los espaguetis» es <em>mi piace il caffè</em> / <em>mi piacciono gli spaghetti</em>, palabra por palabra. Donde un anglófono se pasa meses produciendo errores, tú solo cambias de vocabulario."
      },
      {
        h: "Quién siente el gusto: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — me",
          "<b>ti</b> piace — te",
          "<b>gli</b> piace — le (a él); <b>le</b> piace — le (a ella)",
          "<b>ci</b> piace — nos · <b>vi</b> piace — os · <b>gli</b> piace — les"
        ]
      },
      {
        trap: "La negación va delante del pronombre, no del verbo: <b>non</b> mi piace. Nunca «mi non piace». Exactamente como «no me gusta»."
      }
    ],
    grammar: {
      title: "Piacere: el esquema de la frase",
      note: "[pronombre] + piace/piacciono + [la cosa, con su artículo]",
      table: {
        head: ["lo que gusta", "forma", "ejemplo"],
        rows: [
          ["una cosa", "piace", "Mi piace il vino rosso."],
          ["varias cosas", "piacciono", "Mi piacciono i dolci."],
          ["una actividad", "piace", "Mi piace cucinare."],
          ["negativo", "non … piace", "Non mi piace il pesce crudo."],
          ["pregunta", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "Me gusta mucho el café." },
        { tr: "¿Te gusta el spritz?" },
        { tr: "No nos gusta la cerveza caliente." },
        { tr: "A ella le gusta bailar." },
        { tr: "A Marco le gusta el pescado.", note: "con un nombre se añade «a» delante" },
        { tr: "Me encantaría probarlo.", note: "una forma de condicional: apréndela como bloque" }
      ]
    },
    vocab: [
      "aperitivo (bebida con algo de picar)",
      "spritz",
      "vino tinto / blanco",
      "cerveza",
      "aceitunas",
      "patatas fritas",
      "aperitivos salados",
      "jamón curado",
      "queso",
      "dulces, postres",
      "pescado",
      "carne",
      "cocinar",
      "probar"
    ],
    culture: {
      title: "Con ojos italianos: el aperitivo no es la cena",
      text: "<p>El <b>aperitivo</b> empieza sobre las seis y media y dura hasta las ocho y media. Se paga la bebida (entre 7 y 12 euros según la ciudad) y la comida de la barra viene incluida. En Milán ha crecido hasta convertirse en un bufé llamado <i>apericena</i>, a medio camino de la cena.</p><p>La regla que nadie enuncia en voz alta: <b>sírvete una cantidad razonable</b>. Un plato montado en torre delata a un extranjero más rápido que el acento.</p><p>Los clásicos: <i>spritz</i> (con Aperol o Campari), <i>negroni</i>, una copa de vino. La cerveza también pasa, aunque los puristas arruguen la nariz.</p>"
    },
    exercises: [
      {
        q: "«___ piacciono le olive.» ¿Por qué piacciono y no piace?",
        opts: ["Porque se trata de varias personas", "Porque «le olive» está en plural", "Porque es un pasado"],
        why: "El verbo concuerda con la cosa que gusta, y esa cosa está en plural."
      },
      { q: "Completa: «Mi ___ il vino rosso.»", why: "Una cosa en singular → piace." },
      { q: "Completa: «Non mi ___ i film horror.»", why: "«I film» es plural → piacciono." },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non va delante de todo el grupo pronombre + verbo."
      },
      {
        q: "¿Cómo se dice «a Marco le gusta el pescado»?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "Quien siente el gusto lleva la preposición <b>a</b> delante del nombre, como en español."
      },
      { q: "«Me gusta cocinar.»", why: "Ante un infinitivo va siempre el singular piace." },
      { q: "Empareja el pronombre con la persona.", pairs: ["me", "te", "le (a ella)", "nos"] },
      {
        q: "Completa la conversación durante un aperitivo.",
        tr: "— ¿Te gusta el spritz? — ¡Sí, mucho! Pero no me gustan las aceitunas."
      },
      { tr: "Me gustan mucho los quesos italianos." },
      { tr: "Me gusta el aperitivo, pero no me gustan las aceitunas." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Gramática básica",
    title: "La segunda conjugación y c'è / ci sono",
    objectives: [
      "conjugar los verbos regulares en -ere",
      "usar c'è y ci sono",
      "describir lo que hay en un sitio"
    ],
    theory: [
      {
        h: "Casi como -are, pero no del todo",
        p: "El grupo <strong>-ere</strong> se diferencia del primero solo en tres desinencias: <em>-e</em> en vez de <em>-a</em>, <em>-ete</em> en vez de <em>-ate</em>, <em>-ono</em> en vez de <em>-ano</em>. La forma de <em>noi</em> (<em>-iamo</em>) es común a las tres conjugaciones: la desinencia más fácil de la lengua."
      },
      {
        h: "Aquí se esconden casi todos los irregulares",
        p: "Muchos verbos en -ere muy frecuentes tienen formas raras: <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Su irregularidad se nota sobre todo en el pasado y en el participio, que llegan en A2."
      },
      {
        h: "C'è y ci sono",
        p: "<strong>C'è</strong> («hay», una cosa) y <strong>ci sono</strong> («hay», varias) dicen que algo existe en un sitio. La elección depende del número, no de la persona: <em>c'è un problema</em>, <em>ci sono due problemi</em>."
      },
      {
        contrast: "Y ahí está la diferencia con el español: «hay» es invariable, sirve para uno y para mil. El italiano obliga a elegir entre <em>c'è</em> y <em>ci sono</em> según el número, y decir «c'è due problemi» es un error que se oye enseguida. Cuenta antes de hablar."
      },
      {
        trap: "No confundas <b>c'è</b> (hay) con <b>è</b> (es/está). <em>Il ristorante è chiuso</em>: el restaurante está cerrado. <em>C'è un ristorante qui vicino</em>: hay un restaurante aquí cerca."
      }
    ],
    grammar: {
      title: "Leggere (leer) — el patrón -ERE",
      table: {
        head: ["persona", "desinencia", "leggere", "prendere"],
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
        { tr: "Yo tomo un café.", note: "«prendere» es el verbo normal para pedir" },
        { tr: "¿Estás leyendo la carta?" },
        { tr: "No veo al camarero." },
        { tr: "¿Hay una mesa libre?" },
        { tr: "Hay dos sitios en la barra." },
        { tr: "Escribimos el nombre para la reserva." }
      ]
    },
    vocab: [
      "tomar, pedir",
      "leer",
      "escribir",
      "ver",
      "preguntar",
      "responder",
      "poner",
      "cerrar",
      "hay",
      "sitio, plaza",
      "libre / ocupado",
      "aquí cerca"
    ],
    exercises: [
      { why: "Fíjate en -e, -ete, -ono: esa es toda la diferencia con el grupo -are." },
      {
        q: "¿Qué desinencia comparten las tres conjugaciones?",
        opts: ["-o en la forma de io", "-iamo en la forma de noi", "-ono en la forma de loro"],
        why: "La forma de noi es siempre -iamo, sea cual sea el grupo."
      },
      { q: "Completa: «___ un tavolo libero?» (¿Hay una mesa libre?)", why: "Una mesa → c'è." },
      {
        q: "Completa: «___ tre persone in fila.» (Hay tres personas en la cola.)",
        why: "Plural → ci sono."
      },
      {
        q: "«Il bar è chiuso» frente a «C'è un bar qui vicino»: ¿cuál es la diferencia?",
        opts: [
          "Ninguna, son sinónimos",
          "La primera describe el bar, la segunda dice que existe uno cerca",
          "La segunda está en pasado"
        ],
        why: "è describe, c'è afirma que algo está presente en un sitio."
      },
      { q: "«Yo tomo una cerveza, ¿y tú?»", why: "Prendere es el verbo por defecto para pedir en Italia." },
      {
        q: "¿Qué verbos pertenecen al grupo -ere?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "No veo al camarero." },
      { tr: "¿Hay mesa para dos?" },
      { tr: "Tomamos dos spritz." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Gramática básica",
    title: "La tercera conjugación y el patrón -isc-",
    objectives: [
      "conjugar los verbos como dormire y los como capire",
      "reconocer qué verbos en -ire necesitan el infijo -isc-",
      "usar preferire para expresar una preferencia"
    ],
    theory: [
      {
        h: "Una terminación, dos comportamientos",
        p: "Los verbos en <strong>-ire</strong> se dividen en dos subgrupos. El primero (<em>dormire, partire, sentire, aprire, offrire</em>) se conjuga sin sorpresas. El segundo (<em>capire, finire, preferire, pulire, spedire</em>) inserta <b>-isc-</b> en cuatro formas: <em>io, tu, lui/lei, loro</em>. Las de <em>noi</em> y <em>voi</em> van sin él."
      },
      {
        h: "Cómo saber a qué grupo pertenece",
        p: "No hay regla: se memoriza. Ayuda que el grupo del <em>-isc-</em> es el más numeroso y se lleva casi todos los verbos nuevos (<em>gestire, inserire, garantire</em>). Los diccionarios lo señalan con <i>(-isc-)</i> junto a la entrada."
      },
      {
        contrast: "El español no tiene nada parecido: sus verbos en -ir se conjugan de una sola manera. Aquí no hay intuición que traer, hay que aprender la lista. Consuelo: el infijo es siempre el mismo y su ritmo se pega rápido."
      },
      {
        tip: "El patrón -isc- tiene forma de paréntesis: cuatro formas con el infijo por fuera, dos sin él en medio. Aprende el ritmo: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      }
    ],
    grammar: {
      title: "Dormire (sin -isc-) frente a capire (con -isc-)",
      table: {
        head: ["persona", "dormire", "capire", "en español"],
        rows: [
          ["io", "dormo", "capisco", "duermo / entiendo"],
          ["tu", "dormi", "capisci", "duermes / entiendes"],
          ["lui / lei", "dorme", "capisce", "duerme / entiende"],
          ["noi", "dormiamo", "capiamo", "dormimos / entendemos"],
          ["voi", "dormite", "capite", "dormís / entendéis"],
          ["loro", "dormono", "capiscono", "duermen / entienden"]
        ]
      },
      examples: [
        { tr: "No entiendo, ¿puede repetir?" },
        { tr: "Prefiero una mesa fuera." },
        { tr: "¿A qué hora terminas de trabajar?" },
        { tr: "La tienda abre a las nueve.", note: "aprire, sin -isc-" },
        { tr: "Salimos mañana por la mañana." },
        { tr: "Lo entienden todo." }
      ]
    },
    vocab: [
      "entender",
      "terminar",
      "preferir",
      "limpiar",
      "enviar",
      "dormir",
      "salir, partir",
      "abrir",
      "invitar (a una ronda)",
      "oír, sentir",
      "seguir",
      "¿puede repetir?"
    ],
    exercises: [
      { why: "El paréntesis: -isc- en io, tu, lui/lei y loro; ausente en noi y voi." },
      { why: "Dormire va de corrido, sin infijo." },
      {
        q: "¿Qué verbo necesita el infijo -isc-?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Completa: «Noi non ___ bene.» (No entendemos bien.)",
        hint: "la forma de noi no lleva infijo",
        why: "Capiamo: en noi y voi el -isc- desaparece."
      },
      { q: "Completa: «Loro ___ alle sette.» (Terminan a las siete.)", why: "finire con -isc- en la forma de loro." },
      { q: "«Prefiero una mesa fuera.»" },
      { q: "¿Qué formas llevan -isc-?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "No entiendo, ¿puede repetir?" },
      { tr: "Prefiero salir temprano mañana por la mañana." },
      { tr: "Perdone, no entiendo. ¿Puede repetirlo?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Comida",
    title: "El artículo partitivo y las cantidades",
    objectives: [
      "expresar una cantidad indeterminada con del, della, dei…",
      "usar un po' di y un chilo di",
      "pedir la compra en una tienda"
    ],
    theory: [
      {
        h: "Algo de algo, sin una palabra para «algo»",
        p: "El italiano expresa la cantidad indeterminada con el <strong>artículo partitivo</strong>: la preposición <em>di</em> fundida con el artículo determinado. <em>Vorrei del pane</em>, «querría pan». En plural cubre lo que el español dice con «unos»: <em>dei pomodori</em>."
      },
      {
        h: "Las formas",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "Las alternativas",
        p: "En lugar del partitivo puedes usar <strong>un po' di</strong> («un poco de») o una medida: <em>un chilo di, un etto di, mezzo litro di</em>. En la negación el partitivo suele desaparecer: <em>non ho pane</em>, no «non ho del pane»."
      },
      {
        contrast: "Esta es la construcción que el español no tiene. Donde tú dices «quiero pan» a secas, el italiano quiere <em>del pane</em>. Omitirlo no es agramatical, pero suena entrecortado, como una lista de la compra leída en voz alta. Es de los detalles que más rápido mejoran la naturalidad."
      },
      {
        tip: "<b>Un etto</b> son 100 gramos y es la unidad de trabajo en la charcutería: <em>due etti di prosciutto</em> = 200 gramos de jamón."
      }
    ],
    grammar: {
      title: "El artículo partitivo y las expresiones de cantidad",
      table: {
        head: ["contexto", "forma", "ejemplo"],
        rows: [
          ["m. + consonante", "del", "del pane"],
          ["m. + s+cons., z", "dello", "dello zucchero"],
          ["+ vocal", "dell'", "dell'acqua, dell'olio"],
          ["f. + consonante", "della", "della carne"],
          ["m. plural", "dei / degli", "dei pomodori, degli spinaci"],
          ["f. plural", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "Querría pan." },
        { tr: "Compro manzanas y uvas." },
        { tr: "Un poco de sal, no mucha." },
        { tr: "Doscientos gramos de jamón serrano." },
        { tr: "Medio litro de leche." },
        { tr: "No tengo azúcar en casa.", note: "sin partitivo en la negación" }
      ]
    },
    vocab: [
      "pan",
      "leche",
      "agua",
      "azúcar",
      "sal",
      "aceite, aceite de oliva",
      "tomates",
      "manzanas",
      "cien gramos",
      "un kilo",
      "un poco",
      "medio litro",
      "así está bien, gracias",
      "¿cuánto quiere?"
    ],
    exercises: [
      {
        q: "¿Cómo pides pan?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "El partitivo <b>del</b> expresa una cantidad indeterminada."
      },
      {
        q: "Completa: «Compro ___ acqua.» (Compro agua.)",
        why: "di + l' = dell', porque acqua empieza por vocal."
      },
      {
        q: "Completa: «Vorrei ___ mele.» (Querría unas manzanas.)",
        why: "di + le = delle, femenino plural."
      },
      {
        q: "Elige el artículo partitivo.",
        items: ["pan", "azúcar", "carne", "aceite", "tomates", "espinacas"]
      },
      {
        q: "¿Cuánto son «due etti»?",
        opts: ["20 gramos", "200 gramos", "2 kilos"],
        why: "Un etto son 100 g, así que due etti = 200 g."
      },
      { q: "«Medio litro de leche, por favor.»" },
      {
        q: "Estás en el mostrador de una tienda de alimentación.",
        setting: "Una alimentari de barrio, en el mostrador de embutidos.",
        lines: [
          { tr: "¡Buenos días! ¿Qué le pongo?" },
          { tr: "Pide 200 g de jamón.", answerTr: "Doscientos gramos de jamón, por favor." },
          { tr: "Aquí tiene. ¿Algo más?" },
          { tr: "Pide también un poco de pan.", answerTr: "Pan también, gracias." }
        ]
      },
      { q: "Completa la lista de la compra.", tr: "Compro pan, agua y tomates." },
      { tr: "Un kilo de tomates y albahaca, por favor." },
      { tr: "Doscientos gramos de queso, por favor. Ya está." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 3",
    objectives: ["comprobar piacere, las conjugaciones -ere e -ire, el partitivo"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70%." }],
    exercises: [
      { q: "«Mi ___ gli spaghetti.» (Me gustan los espaguetis.)" },
      { q: "«Non mi ___ il pesce crudo.»" },
      {
        q: "«A Marco le gusta el vino» es:",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "«___ due posti liberi.» (Hay dos sitios libres.)" },
      { q: "El artículo partitivo:", items: [, , , ] },
      { q: "«Prefiero el vino blanco.»" },
      { tr: "Hay aceitunas y queso." },
      { tr: "Me gusta mucho el aperitivo italiano." }
    ]
  }
});
