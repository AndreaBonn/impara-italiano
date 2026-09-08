/* ============================================================
   Textos en la lengua del alumno (es) para data/core/a1-02.js
   Las claves remiten a los id de la capa neutra; los arrays se unen
   por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a1-u04": { title: "Ropa y tallas", grammarNote: "adjetivos · colores · questo/quello" },
  "lesson:a1-u04-l1": {
    theme: "Ropa y compras",
    title: "Concordancia del adjetivo y colores",
    objectives: [
      "ajustar la terminación del adjetivo al sustantivo",
      "nombrar los colores y saber cuáles no varían",
      "describir una prenda de un escaparate"
    ],
    theory: [
      {
        h: "El adjetivo va detrás del sustantivo y concuerda con él",
        p: "El adjetivo italiano suele ir <b>detrás</b> del sustantivo y toma su género y su número: <em>una borsa <b>rossa</b></em>, <em>due borse <b>rosse</b></em>. Aquí no hay nada que aprender: es tu «un bolso rojo», «dos bolsos rojos», con la misma posición y la misma concordancia."
      },
      {
        h: "Dos clases de terminaciones",
        list: [
          "<b>cuatro formas</b> (-o / -a / -i / -e): <em>rosso, rossa, rossi, rosse</em>",
          "<b>dos formas</b> (-e / -i): <em>verde, verdi</em> — la misma forma para los dos géneros, como tu «verde / verdes»",
          "<b>invariables</b>: <em>blu, rosa, viola, beige</em> y los préstamos (<em>chic</em>)"
        ]
      },
      {
        trap: "Con un grupo mixto gana el masculino: <em>Marco e Anna sono <b>italiani</b></em>. Una mujer entre cien hombres no cambia nada; un hombre entre cien mujeres pasa el grupo entero a masculino. Igual que en español."
      },
      {
        h: "Colores que fueron sustantivos",
        p: "<em>Rosa</em>, <em>viola</em> y <em>arancione</em> vienen de nombres de plantas, y por eso <em>rosa</em> y <em>viola</em> no varían — exactamente como «unas faldas rosa» en español. <em>Marrone</em> pertenece en teoría a ese grupo, pero los italianos dicen también <em>scarpe marroni</em> y nadie los corrige."
      }
    ],
    grammar: {
      title: "La concordancia del adjetivo",
      table: {
        head: ["sustantivo", "tipo -o", "tipo -e", "invariable"],
        rows: [
          ["il vestito (m sing.)", "nero", "verde", "blu"],
          ["la gonna (f sing.)", "nera", "verde", "blu"],
          ["i pantaloni (m pl.)", "neri", "verdi", "blu"],
          ["le scarpe (f pl.)", "nere", "verdi", "blu"]
        ]
      },
      examples: [
        { tr: "Una camisa blanca, por favor." },
        { tr: "Estos zapatos me aprietan." },
        { tr: "Un abrigo azul, talla mediana.", note: "blu no varía" },
        { tr: "Los pantalones verdes no me quedan bien." },
        { tr: "¡Qué chaqueta más bonita!" }
      ]
    },
    vocab: [
      "vestido; ropa",
      "falda",
      "pantalones (siempre en plural)",
      "camisa",
      "camiseta",
      "chaqueta",
      "abrigo",
      "zapatos",
      "rojo",
      "negro",
      "blanco",
      "verde (igual en los dos géneros)",
      "azul (invariable)",
      "gris"
    ],
    exercises: [
      {
        q: "«La gonna» es femenino. ¿Cómo se escribe «negra»?",
        opts: ["nero", "nera", "nere"],
        why: "Femenino singular → nera."
      },
      {
        q: "¿Qué adjetivo tiene la misma forma en los dos géneros?",
        opts: ["rosso", "verde", "grigio"],
        why: "Los adjetivos en -e tienen dos formas: verde / verdi."
      },
      {
        q: "Completa: «Le scarpe ___.» (zapatos negros)",
        why: "Scarpe es femenino plural → nere."
      },
      {
        q: "Completa: «I pantaloni ___.» (pantalones azules)",
        why: "Blu es invariable: nunca «blui»."
      },
      { q: "Completa las terminaciones.", tr: "Una camisa blanca y dos camisetas negras, por favor." },
      {
        q: "«Marco e Anna sono ___.» (italianos)",
        opts: ["italiane", "italiani", "italiano"],
        why: "Un grupo mixto lleva el masculino plural."
      },
      { q: "Empareja la prenda con su significado.", pairs: ["falda", "abrigo", "chaqueta", "zapatos"] },
      { tr: "Estos zapatos me aprietan." },
      { tr: "Una chaqueta gris, por favor, talla mediana." },
      { tr: "¡Qué camisa blanca más bonita!" }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "Ropa y compras",
    title: "Los demostrativos",
    objectives: [
      "distinguir questo de quello",
      "flexionar las dos formas",
      "señalar una prenda en una tienda sin señalar con el dedo"
    ],
    theory: [
      {
        h: "Cerca y lejos",
        p: "<strong>Questo</strong> es algo cercano a quien habla («este de aquí»), <strong>quello</strong> algo más lejano («aquel»). El italiano no tiene un tercer grado de uso corriente: el antiguo <em>codesto</em> sobrevive en la Toscana y en el lenguaje administrativo."
      },
      {
        contrast: "El español tiene tres: este / ese / aquel. El italiano solo dos, así que <em>quello</em> se reparte el trabajo de «ese» y de «aquel». Al traducir del español hay que fundir dos casillas en una, y eso es un alivio más que un problema."
      },
      {
        h: "Questo se flexiona sin sorpresas",
        p: "<em>questo, questa, questi, queste</em>. Ante vocal se contrae al hablar y al escribir: <em>quest'anno</em>, <em>quest'estate</em>."
      },
      {
        h: "Quello se comporta como un artículo",
        p: "Cuando va <b>delante de un sustantivo</b>, <em>quello</em> adopta formas paralelas a <em>il / lo / la / i / gli / le</em>: <em>quel cappotto, quello zaino, quell'amico, quei pantaloni, quegli stivali, quella gonna, quelle scarpe</em>. Solo, sin sustantivo, tiene las cuatro formas normales: <em>Prendo quello.</em> Trátalo como un artículo y las siete formas dejan de parecer arbitrarias."
      }
    ],
    grammar: {
      title: "Questo y quello",
      table: {
        head: ["artículo", "quello + sust.", "questo", "ejemplo"],
        rows: [
          ["il", "quel", "questo", "quel cappotto / questo cappotto"],
          ["lo", "quello", "questo", "quello zaino"],
          ["l' (m)", "quell'", "quest'", "quell'orologio"],
          ["i", "quei", "questi", "quei pantaloni"],
          ["gli", "quegli", "questi", "quegli stivali"],
          ["la", "quella", "questa", "quella gonna"],
          ["le", "quelle", "queste", "quelle scarpe"]
        ]
      },
      examples: [
        { tr: "¿Cuánto cuesta este bolso?" },
        { tr: "Prefiero aquel abrigo." },
        { tr: "Aquellas botas están rebajadas." },
        { tr: "Me llevo ese, gracias.", note: "solo, sin sustantivo: formas normales" },
        { tr: "Este año se lleva lo minimalista." }
      ]
    },
    vocab: [
      "talla (ropa)",
      "número (calzado)",
      "probador",
      "probarse",
      "las rebajas",
      "descuento",
      "escaparate",
      "caro / barato",
      "estrecho / holgado",
      "¿me lo puedo probar?",
      "me queda bien",
      "¿tiene una mediana?"
    ],
    dialogue: [
      "Perdone, ¿me puedo probar esta camisa?",
      "Claro. ¿Qué talla usa?",
      "Mediana. ¿Tiene también aquella azul?",
      "Sí, pero solo en grande. El probador está al fondo.",
      "Gracias. Esta me queda un poco estrecha."
    ],
    exercises: [
      {
        q: "¿Qué forma es la correcta delante de «zaino»?",
        opts: ["quel zaino", "quello zaino", "quell'zaino"],
        why: "Quello se comporta como <i>lo</i>: ante z y s+consonante da <b>quello</b>."
      },
      {
        q: "Completa: «___ scarpe sono in saldo.» (aquellos zapatos)",
        why: "Femenino plural: le → quelle."
      },
      {
        q: "Completa: «___ anno vado in Italia.» (este año)",
        why: "Questo se contrae en quest' ante vocal."
      },
      {
        q: "Elige la forma correcta de «quello».",
        items: ["abrigo", "botas", "falda", "pantalones", "reloj"]
      },
      {
        q: "«Prendo quello.» ¿Por qué no «quel»?",
        opts: ["Es un error", "Porque quello va solo, sin sustantivo", "Porque es plural"],
        why: "Las formas cortas (quel, quei, quegli) solo existen delante de un sustantivo."
      },
      { q: "«¿Cuánto cuesta este bolso?»" },
      { tr: "¿Me puedo probar aquella chaqueta?" },
      {
        q: "Estás en una tienda de ropa.",
        setting: "Una tienda del centro, en plenas rebajas.",
        lines: [
          { tr: "Buenos días, ¿busca algo en concreto?" },
          { tr: "Pregunta si puedes probarte esta falda.", answerTr: "¿Me puedo probar esta falda?" },
          { tr: "Claro. ¿Qué talla?" },
          { tr: "Di que una mediana.", answerTr: "Una mediana, gracias." }
        ]
      },
      { tr: "Aquellas botas negras están rebajadas." },
      { tr: "Perdone, ¿tiene esta camisa en talla mediana?" }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Ropa y compras",
    title: "Precios, números por encima de cien, pagar",
    objectives: [
      "preguntar un precio y entender la respuesta",
      "contar por encima de cien",
      "pagar con tarjeta o en efectivo"
    ],
    theory: [
      {
        h: "Los números por encima de cien",
        p: "<em>Cento</em> no cambia nunca: <em>duecento, trecento</em>. <em>Mille</em> pasa a <em>-mila</em> en plural: <em>duemila, tremila</em>. Aquí el italiano es más simple que el español, que dice «doscientos» y «doscientas» con género."
      },
      {
        contrast: "Los separadores funcionan como los tuyos: <em>1.500</em> con punto para los miles y <em>2,50</em> con coma para los decimales. Quien viene del inglés se equivoca constantemente con las etiquetas de precio; tú puedes leerlas tal cual."
      },
      {
        h: "Los precios se dicen abreviados",
        p: "<em>Due e cinquanta</em> = 2,50 €. La palabra <em>euro</em> se omite a menudo y, cuando aparece, <b>no lleva plural</b>: <em>trenta euro</em>, nunca «euri». Y aquí sí hay que corregir el instinto, porque en español dices «treinta euros» con -s."
      },
      {
        h: "Pagar",
        p: "<em>In contanti</em> (en efectivo) o <em>con la carta</em> (con tarjeta). Conviene conocer <em>lo scontrino</em> (el tique) y <em>la ricevuta</em>. En Italia el tique tiene valor legal y el vendedor está obligado a emitirlo."
      },
      {
        tip: "<em>Quanto costa?</em> se refiere a una cosa, <em>quanto costano?</em> a varias. <em>Quant'è?</em> es «¿cuánto es en total?» en la caja."
      }
    ],
    grammar: {
      title: "Números y preguntar el precio",
      table: {
        head: ["escrito", "en italiano", "nota"],
        rows: [
          ["100 / 200", "cento / duecento", "cento nunca varía"],
          ["1000 / 2000", "mille / duemila", "mille → -mila en plural"],
          ["1500", "millecinquecento", "en una sola palabra"],
          ["2,50 €", "due e cinquanta", "euro se omite a menudo"],
          ["¿cuánto cuesta?", "quanto costa?", "una cosa"],
          ["¿cuánto cuestan?", "quanto costano?", "varias cosas"]
        ]
      },
      examples: [
        { tr: "¿Cuánto cuesta este bolso? — Ochenta y cinco euros." },
        { tr: "¿Cuánto es en total?" },
        { tr: "¿Puedo pagar con tarjeta?" },
        { tr: "Solo efectivo, lo siento." },
        { tr: "¿Me da el tique, por favor?" },
        { tr: "Hay un veinte por ciento de descuento." }
      ]
    },
    vocab: [
      "¿cuánto cuesta / cuestan?",
      "¿cuánto es en total?",
      "en efectivo",
      "con tarjeta",
      "tique",
      "cambio",
      "cien / mil",
      "por ciento",
      "es demasiado caro",
      "una ganga",
      "precio",
      "gratis"
    ],
    exercises: [
      { q: "¿Qué número es «millecinquecento»?", opts: ["150", "1500", "15000"] },
      {
        q: "¿Qué forma es correcta?",
        opts: ["trenta euri", "trenta euro", "trente euro"],
        why: "Euro no tiene plural en italiano, a diferencia del español."
      },
      { q: "Escríbelo en cifras: «duemilaventicinque»" },
      {
        q: "Completa: «___ costano queste scarpe?»",
        why: "Quanto no cambia aquí, pero el verbo sí: costano (plural)."
      },
      { q: "«¿Puedo pagar con tarjeta?»" },
      {
        q: "El dependiente dice «Sono ventidue e cinquanta». ¿Cuánto pagas?",
        opts: ["22,50 €", "2,25 €", "225 €"]
      },
      {
        q: "Completa el intercambio en la caja.",
        tr: "— ¿Cuánto es en total? — Cuarenta y tres euros. — ¿Puedo pagar con tarjeta?"
      },
      { q: "Empareja las expresiones.", pairs: ["tique", "cambio", "en efectivo", "gratis"] },
      { tr: "Son ciento veinte euros, con un diez por ciento de descuento." },
      { tr: "¿Cuánto cuestan aquellas botas del escaparate?" }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Gramática básica",
    title: "Cantidad e intensidad",
    objectives: [
      "distinguir molto adverbio de molto adjetivo",
      "usar troppo, poco, tanto, abbastanza",
      "intensificar un adjetivo con -issimo"
    ],
    theory: [
      {
        h: "Una palabra, dos papeles",
        p: "<strong>Molto</strong> delante de un adjetivo o de un verbo es <b>adverbio</b> y no varía: <em>molto bella</em>, <em>lavoro molto</em>. Delante de un sustantivo es <b>adjetivo</b> y concuerda: <em>molt<b>i</b> amici</em>, <em>molt<b>a</b> gente</em>. La misma regla vale para <em>poco, troppo, tanto</em>."
      },
      {
        contrast: "Otro capítulo regalado: el español hace exactamente esto con «mucho». «Muy bella» frente a «muchos amigos», adverbio invariable frente a adjetivo que concuerda. La única diferencia es que el italiano usa la misma palabra en los dos papeles, mientras que tú alternas muy/mucho."
      },
      {
        h: "Una prueba que siempre funciona",
        p: "Hazte la pregunta: «¿cuánto de qué?» → adjetivo, concuerda. «¿en qué medida?» → adverbio, forma fija. <em>Ho molti libri</em> (cuántos libros) frente a <em>Sono molto stanca</em> (cuán cansada)."
      },
      {
        h: "El superlativo en -issimo",
        p: "Quita la terminación del adjetivo y añade <em>-issimo/-issima/-issimi/-issime</em>: <em>bello → bellissimo</em>, <em>caro → carissimo</em>. Es tu <em>-ísimo</em>, con el mismo valor y la misma frecuencia."
      },
      {
        trap: "<b>Poco</b> significa «poco, no mucho», mientras que <b>un po' di</b> es «un poco de». No son lo mismo: <em>ho poco tempo</em> (voy justo de tiempo, es una queja) frente a <em>ho un po' di tempo</em> (tengo algo de tiempo, y está bien). El español distingue igual entre «poco tiempo» y «un poco de tiempo»."
      }
    ],
    grammar: {
      title: "Molto, poco, troppo, tanto",
      table: {
        head: ["papel", "forma", "ejemplo"],
        rows: [
          ["adverbio (en qué medida)", "fija", "È molto caro. / Costa troppo."],
          ["adjetivo (cuánto de)", "concuerda", "Ho molti amici. / Troppa gente."],
          ["bastante", "abbastanza (fija)", "È abbastanza grande."],
          ["superlativo", "-issimo", "carissimo, bellissima"],
          ["poco / demasiado", "poco / troppo", "Poco sale, troppo pepe."]
        ]
      },
      examples: [
        { tr: "Esta chaqueta es muy elegante.", note: "adverbio: no cambia" },
        { tr: "Hay mucha gente en la tienda.", note: "adjetivo: molte" },
        { tr: "Demasiado caro, gracias de todos modos." },
        { tr: "Este mes tengo poco dinero." },
        { tr: "¡Es preciosísimo!" },
        { tr: "Bastante bien, gracias." }
      ]
    },
    vocab: [
      "muy / mucho",
      "poco",
      "un poco",
      "demasiado",
      "tanto, mucho",
      "bastante",
      "más / menos",
      "precioso",
      "carísimo",
      "dinero (en italiano siempre plural)",
      "gracias de todos modos",
      "me lo pienso"
    ],
    exercises: [
      {
        q: "«Ci sono ___ persone.» (mucha gente)",
        opts: ["molto", "molte", "molti"],
        why: "Delante de un sustantivo molto concuerda; persone es femenino plural."
      },
      {
        q: "«Questa borsa è ___ cara.» (muy cara)",
        opts: ["molta", "molto", "molte"],
        why: "Delante de un adjetivo molto es adverbio y no cambia."
      },
      { q: "Forma el superlativo: «bello» → «___»" },
      { q: "Completa: «Ho ___ tempo oggi.» (tengo poco tiempo)" },
      {
        q: "¿En qué frases «troppo» es adverbio (invariable)?",
        opts: ["Costa troppo.", "C'è troppa gente.", "Sei troppo gentile.", "Ho troppi impegni."]
      },
      { q: "«Es demasiado caro, gracias.»" },
      {
        q: "Completa las terminaciones (o pon un guion donde la forma no cambia).",
        tr: "Hay muchas tiendas, pero son carísimas."
      },
      { q: "Empareja.", pairs: ["bastante", "demasiado", "un poco", "poco"] },
      { tr: "Es precioso, pero demasiado caro para mí." },
      { tr: "Me lo pienso, gracias de todos modos." }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 4",
    objectives: ["comprobar los adjetivos, questo/quello, los números y molto/poco/troppo"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70%." }],
    exercises: [
      { q: "«Le scarpe ___.» (rojos)" },
      { q: "«I pantaloni ___.» (verdes)" },
      { q: "Elige la forma de «quello».", items: [, , , ] },
      { q: "¿Qué número es «duemilatrecento»?", opts: ["230", "2300", "23000"] },
      { q: "«Sono ___ stanca.» (muy cansada)", opts: ["molta", "molto", "molte"] },
      { q: "«Ci sono ___ persone.» (mucha gente)" },
      { q: "«¿Me puedo probar esta camisa?»" },
      { tr: "¿Cuánto cuestan aquellos zapatos?" },
      { tr: "Esta chaqueta es muy cara." },
      { tr: "¿Puedo pagar con tarjeta?" }
    ]
  },
  "unit:a1-u05": { title: "Un día italiano", grammarNote: "verbos reflexivos · la hora · verbos modales" },
  "lesson:a1-u05-l1": {
    theme: "Vida cotidiana",
    title: "Los verbos reflexivos",
    objectives: [
      "reconocer un verbo reflexivo por la terminación -si",
      "conjugar svegliarsi, alzarsi, vestirsi",
      "describir tu mañana"
    ],
    theory: [
      {
        h: "Una acción que vuelve sobre uno mismo",
        p: "Un infinitivo reflexivo acaba en <strong>-si</strong>: <em>svegliar<b>si</b></em>, <em>alzar<b>si</b></em>. Al conjugarlo, <em>-si</em> desaparece y el pronombre reflexivo pasa delante del verbo: <em>mi, ti, si, ci, vi, si</em>. Es tu «despertar<b>se</b> → me despierto», con el mismo mecanismo exacto."
      },
      {
        h: "El pronombre va siempre delante",
        p: "<em><b>Mi</b> sveglio alle sette.</em> Nunca «sveglio mi». Las excepciones son el infinitivo y el imperativo, donde el pronombre se pega al final: <em>devo alzar<b>mi</b></em>, <em>svegliati!</em> — igual que «debo levantarme» y «¡despiértate!»."
      },
      {
        contrast: "Este capítulo lo tienes hecho: el español usa los reflexivos para la rutina diaria exactamente igual, y con los mismos verbos. Lo que hay que vigilar es la lista concreta, no el sistema."
      },
      {
        h: "Algunos verbos son reflexivos solo en italiano",
        p: "<em>Chiamarsi</em> (llamarse), <em>ricordarsi</em> (acordarse), <em>dimenticarsi</em> (olvidarse), <em>arrabbiarsi</em> (enfadarse), <em>annoiarsi</em> (aburrirse). Casi todos coinciden con el español; el que sorprende es <em>dimenticare</em>, que en italiano funciona también sin pronombre: <em>ho dimenticato il libro</em>."
      }
    ],
    grammar: {
      title: "Svegliarsi (despertarse)",
      table: {
        head: ["persona", "pronombre", "forma", "ejemplo"],
        rows: [
          ["io", "mi", "mi sveglio", "Mi sveglio alle sette."],
          ["tu", "ti", "ti svegli", "A che ora ti svegli?"],
          ["lui / lei", "si", "si sveglia", "Si sveglia tardi."],
          ["noi", "ci", "ci svegliamo", "Ci svegliamo presto."],
          ["voi", "vi", "vi svegliate", "Vi svegliate alle otto?"],
          ["loro", "si", "si svegliano", "Si svegliano alle nove."]
        ]
      },
      examples: [
        { tr: "Me levanto justo después del despertador." },
        { tr: "¿Te lavas los dientes antes o después de desayunar?" },
        { tr: "Nos vestimos con prisa." },
        { tr: "Mañana tengo que levantarme temprano.", note: "el pronombre se pega al infinitivo" },
        { tr: "No me acuerdo de su nombre." }
      ]
    },
    vocab: [
      "despertarse",
      "levantarse",
      "lavarse",
      "vestirse",
      "peinarse",
      "ducharse",
      "desayunar",
      "salir de casa",
      "descansar",
      "dormirse",
      "despertador",
      "con prisa"
    ],
    exercises: [
      { why: "Escribe la forma completa con el pronombre, por ejemplo «mi sveglio»." },
      {
        q: "¿Cómo se reconoce un verbo reflexivo en el diccionario?",
        opts: ["Empieza por vocal", "Acaba en -si", "Lleva el acento en la última sílaba"]
      },
      {
        q: "Completa: «Noi ___ alle sei.» (nos levantamos a las seis — alzarsi)",
        why: "El pronombre reflexivo de noi es ci."
      },
      {
        q: "Completa: «Devo ___ presto.» (tengo que levantarme temprano)",
        hint: "el pronombre se pega al infinitivo",
        why: "Tras un verbo modal el pronombre se une al infinitivo: alzarmi."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Sveglio mi alle sette.", "Mi sveglio alle sette.", "Sveglio alle sette mi."]
      },
      { q: "«Me visto con prisa.»" },
      { q: "Describe tu mañana.", tr: "Me despierto a las seis y media, luego me levanto y me ducho." },
      { tr: "Mi hermana se despierta tarde." },
      { tr: "Me despierto a las siete y me levanto enseguida." },
      { tr: "¿A qué hora sueles despertarte?" }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "Vida cotidiana",
    title: "La hora y las partes del día",
    objectives: [
      "decir y entender la hora",
      "usar è y sono correctamente",
      "quedar a una hora concreta"
    ],
    theory: [
      {
        h: "Las horas van en plural",
        p: "Un italiano pregunta <em>Che ore sono?</em> y responde <em>Sono le tre</em>. El sustantivo sobrentendido es <em>le ore</em>, de ahí el artículo femenino plural. Las excepciones son la una, el mediodía y la medianoche, que van en singular: <em>è l'una</em>, <em>è mezzogiorno</em>, <em>è mezzanotte</em>."
      },
      {
        contrast: "Esto es exactamente tu sistema: «son las tres» frente a «es la una». Mismo verbo en plural, misma excepción en singular, mismo artículo femenino. No hay nada que aprender de nuevo, solo las palabras."
      },
      {
        h: "Los minutos",
        p: "Hasta la media se suman: <em>le tre e dieci</em>. Pasada la media se suele restar de la hora siguiente: <em>le quattro meno dieci</em>. Atajos habituales: <em>e un quarto</em>, <em>e mezza</em>, <em>meno un quarto</em>."
      },
      {
        h: "A qué hora: con preposición",
        p: "La pregunta es <em>A che ora?</em>, la respuesta <em>alle otto</em>, <em>all'una</em>, <em>a mezzogiorno</em>. La preposición <em>a</em> se funde con el artículo."
      },
      {
        tip: "Los horarios, las carteleras y las oficinas usan el reloj de 24 horas: <em>alle diciotto e trenta</em>. Al hablar dirías <em>alle sei e mezza di sera</em>. No hay a.m./p.m.: se añade <em>di mattina, di pomeriggio, di sera</em> cuando hace falta."
      }
    ],
    grammar: {
      title: "Decir la hora",
      table: {
        head: ["reloj", "en italiano", "nota"],
        rows: [
          ["13:00", "è l'una", "singular"],
          ["12:00", "è mezzogiorno", "mediodía"],
          ["00:00", "è mezzanotte", "medianoche"],
          ["15:00", "sono le tre", "plural"],
          ["15:15", "sono le tre e un quarto", ""],
          ["15:30", "sono le tre e mezza", ""],
          ["15:50", "sono le quattro meno dieci", "restando"],
          ["a las 20:00", "alle otto", "a + le = alle"]
        ]
      },
      examples: [
        { tr: "¿Qué hora es? — Las nueve y veinte." },
        { tr: "¿A qué hora abre la tienda? — A las nueve y media." },
        { tr: "El tren sale a la una y cuarto." },
        { tr: "Nos vemos a las ocho de la tarde." },
        { tr: "Es mediodía, vamos a comer." }
      ]
    },
    vocab: [
      "¿qué hora es?",
      "¿a qué hora?",
      "mediodía / medianoche",
      "y cuarto / y media",
      "menos cuarto",
      "por la mañana",
      "por la tarde",
      "por la noche",
      "temprano / tarde",
      "puntual",
      "con retraso",
      "nos vemos"
    ],
    exercises: [
      {
        q: "¿Por qué se dice «è l'una» y no «sono l'una»?",
        opts: ["Es una regla sin motivo", "Porque «una» es singular", "Porque es informal"],
        why: "Todas las demás horas van en plural (le due, le tre…) y llevan sono. Como en español."
      },
      { q: "Completa: «___ le otto e mezza.» (son las ocho y media)" },
      { q: "Completa: «Il film comincia ___ nove.» (a las nueve)" },
      {
        q: "¿Cómo se dice 15:45?",
        opts: ["le tre e quarantacinque", "le quattro meno un quarto", "las dos son correctas"],
        why: "Las dos valen; «meno un quarto» suena más natural al hablar."
      },
      { q: "Empareja la hora con cómo se escribe.", pairs: ["12:00", "14:15", "13:30", "6:50"] },
      { q: "«¿A qué hora abre la tienda?»" },
      { q: "Complétalo.", tr: "— ¿Qué hora es? — Las once menos cuarto. — ¡Llego tarde!" },
      { tr: "Nos vemos a las ocho de la tarde." },
      { tr: "El tren sale a las 18:45." },
      { tr: "Perdone, ¿qué hora es? — Las tres y media." }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Gramática básica",
    title: "Los verbos modales",
    objectives: [
      "conjugar potere, volere y dovere",
      "pedir permiso y expresar necesidad",
      "entender por qué vorrei es más cortés que voglio"
    ],
    theory: [
      {
        h: "Tres verbos, una construcción",
        p: "<strong>Potere</strong> (poder), <strong>volere</strong> (querer) y <strong>dovere</strong> (deber) se combinan con un infinitivo <b>sin ninguna preposición</b>: <em>posso entrare</em>, <em>voglio partire</em>, <em>devo lavorare</em>. Los tres son irregulares, pero se fijan solos de tanto usarlos. Y el esquema es el tuyo: «puedo entrar», «quiero salir», «debo trabajar»."
      },
      {
        h: "Voglio suena seco",
        p: "<em>Voglio un caffè</em> no es gramaticalmente incorrecto, pero en un bar cae como una exigencia, igual que «quiero un café» en español. Los italianos dicen <strong>vorrei</strong>, el condicional de <em>volere</em>, tu «querría» o «quisiera». Por ahora apréndelo como fórmula fija."
      },
      {
        h: "Pronombres con los modales: dos posiciones",
        p: "Con un verbo reflexivo, las dos versiones son igual de correctas: <em><b>mi</b> devo alzare</em> o <em>devo alzar<b>mi</b></em>. La misma libertad vale para los pronombres de objeto: <em>ti posso aiutare</em> = <em>posso aiutarti</em>. Exactamente como «te puedo ayudar» / «puedo ayudarte»."
      },
      {
        tip: "<em>Dovere</em> no es solo «deber» de obligación: también significa deber dinero. <em>Ti devo dieci euro</em>, «te debo diez euros». El español hace la misma doble lectura."
      }
    ],
    grammar: {
      title: "Potere, volere, dovere",
      table: {
        head: ["persona", "potere", "volere", "dovere"],
        rows: [
          ["io", "posso", "voglio", "devo"],
          ["tu", "puoi", "vuoi", "devi"],
          ["lui / lei", "può", "vuole", "deve"],
          ["noi", "possiamo", "vogliamo", "dobbiamo"],
          ["voi", "potete", "volete", "dovete"],
          ["loro", "possono", "vogliono", "devono"]
        ]
      },
      examples: [
        { tr: "¿Puedo pasar?" },
        { tr: "Querría un café.", note: "más cortés que «voglio»" },
        { tr: "Tengo que irme, es tarde." },
        { tr: "No podemos pagar en efectivo." },
        { tr: "¿Quieres venir con nosotros?" },
        { tr: "Tengo que levantarme temprano.", note: "las dos versiones son correctas" }
      ]
    },
    vocab: [
      "poder",
      "querer",
      "deber, tener que",
      "querría",
      "¿se puede?",
      "está prohibido",
      "está permitido",
      "hay que (impersonal)",
      "apetecer",
      "por desgracia",
      "con mucho gusto",
      "ojalá; quizá"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Estás pidiendo en un restaurante. ¿Qué suena mejor?",
        opts: ["Voglio una pizza.", "Vorrei una pizza.", "Devo una pizza."],
        why: "Vorrei es el condicional de cortesía, el estándar para pedir."
      },
      { q: "Completa: «Noi ___ partire domani.» (tenemos que salir mañana)" },
      {
        q: "¿Qué frase es incorrecta?",
        opts: ["Devo di andare.", "Devo andare.", "Devo andarci."],
        why: "Los verbos modales no llevan preposición delante del infinitivo."
      },
      { q: "«¿Puedo pagar con tarjeta?»" },
      { q: "Complétalo.", tr: "No puedo ir esta noche, tengo que trabajar hasta tarde." },
      { tr: "Perdone, ¿me puedo probar esta chaqueta?" },
      { tr: "Querría reservar una mesa para dos." }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Vida cotidiana",
    title: "Frecuencia y días de la semana",
    objectives: [
      "colocar el adverbio de frecuencia en su sitio",
      "usar la doble negación con mai",
      "nombrar los días y hablar de tu rutina"
    ],
    theory: [
      {
        h: "El adverbio va justo detrás del verbo",
        p: "<em>Vado <b>sempre</b> in palestra il lunedì.</em> El italiano mantiene el adverbio de frecuencia inmediatamente detrás del verbo conjugado. El español admite las dos posiciones («voy siempre» / «siempre voy»); el italiano prefiere claramente la primera, y anteponerlo suena enfático."
      },
      {
        h: "Mai necesita non",
        p: "<strong>Non</strong> vado <strong>mai</strong> al cinema. El italiano usa doble negación y es la regla, no un error. Lo mismo con <em>niente</em>, <em>nessuno</em>, <em>più</em>: <em>non ho più tempo</em>, <em>non conosco nessuno</em>. Tu «no voy nunca» y «no conozco a nadie» funcionan igual."
      },
      {
        h: "Los días de la semana",
        p: "Se escriben en minúscula, como en español, y son masculinos salvo <em>la domenica</em>."
      },
      {
        contrast: "Aquí está la diferencia que sí importa: el italiano marca la costumbre con el <b>artículo</b> y deja el día en singular (<em>il lunedì vado in palestra</em> = los lunes), mientras que sin artículo señala un día concreto (<em>lunedì vado a Roma</em> = este lunes). El español distingue con el número: «el lunes» frente a «los lunes». Traducir el plural español por un plural italiano no funciona."
      }
    ],
    grammar: {
      title: "Frecuencia y días de la semana",
      table: {
        head: ["adverbio", "en español", "ejemplo"],
        rows: [
          ["sempre", "siempre", "Bevo sempre un caffè la mattina."],
          ["di solito", "normalmente", "Di solito lavoro da casa."],
          ["spesso", "a menudo", "Vado spesso al mercato."],
          ["qualche volta / a volte", "a veces", "A volte esco a correre."],
          ["raramente", "rara vez", "Guardo raramente la TV."],
          ["non… mai", "nunca", "Non prendo mai il taxi."]
        ]
      },
      examples: [
        { tr: "lunes, martes, miércoles, jueves" },
        { tr: "viernes, sábado, domingo" },
        { tr: "Los sábados duermo hasta tarde.", note: "con artículo = costumbre" },
        { tr: "Este sábado voy a Florencia.", note: "sin artículo = un día concreto" },
        { tr: "Nunca me acuesto antes de medianoche." }
      ]
    },
    vocab: [
      "siempre",
      "normalmente",
      "a menudo",
      "a veces",
      "rara vez",
      "nunca",
      "todos los días",
      "el fin de semana",
      "lunes",
      "sábado",
      "domingo",
      "una vez a la semana"
    ],
    exercises: [
      {
        q: "¿Dónde va normalmente «spesso»?",
        opts: ["Delante del sujeto", "Justo detrás del verbo conjugado", "Siempre al final de la frase"]
      },
      {
        q: "Completa: «___ vado ___ al cinema.» (nunca voy al cine) — escribe las dos palabras separadas por un espacio, en el orden de la frase",
        hint: "doble negación",
        why: "Non vado mai: non delante del verbo, mai justo detrás."
      },
      {
        q: "«Il sabato dormo fino a tardi» significa:",
        opts: ["Este sábado dormiré hasta tarde", "Los sábados duermo hasta tarde", "El sábado pasado dormí hasta tarde"],
        why: "El artículo delante de un día de la semana marca la costumbre."
      },
      { tr: "Normalmente trabajo desde casa." },
      { q: "Empareja.", pairs: ["siempre", "rara vez", "a veces", "todos los días"] },
      { q: "«Nunca cojo taxi.»" },
      {
        q: "Describe tu semana.",
        tr: "Los lunes voy al gimnasio, pero el fin de semana no voy nunca."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: ["Non vado mai al cinema.", "Vado mai al cinema.", "Non ho più tempo.", "Ho più non tempo."]
      },
      { tr: "Normalmente me levanto temprano, pero los domingos duermo hasta tarde." },
      { tr: "Voy a menudo al mercado el sábado por la mañana." }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 5",
    objectives: ["comprobar los reflexivos, la hora, los modales y la frecuencia"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70%." }],
    exercises: [
      {  },
      { q: "«Devo ___ presto.» (tengo que levantarme temprano — alzarsi)" },
      { q: "«___ le due e mezza.» (son las dos y media)" },
      { q: "«Il treno parte ___ una.» (a la una)" },
      {  },
      { q: "La forma más cortés de pedir:", opts: ["Voglio…", "Vorrei…", "Devo…"] },
      {
        q: "«Non vado mai in palestra» significa:",
        opts: ["A veces voy", "No voy nunca", "Voy todos los días"]
      },
      { tr: "Normalmente desayuno a las ocho." },
      { tr: "Me despierto a las seis y media todos los días." },
      { tr: "¿A qué hora sueles levantarte?" }
    ]
  },
  "unit:a1-u06": { title: "Por la ciudad", grammarNote: "preposiciones contractas · andare/venire · indicaciones" },
  "lesson:a1-u06-l1": {
    theme: "La ciudad y orientarse",
    title: "Las preposiciones contractas",
    objectives: [
      "fundir una preposición con un artículo",
      "describir dónde está algo",
      "evitar el error más común: «a il» en lugar de «al»"
    ],
    theory: [
      {
        h: "Cinco preposiciones que tienen que fundirse",
        p: "Cuando <em>di, a, da, in, su</em> van seguidas de un artículo determinado, las dos palabras se funden en una. No es una opción de estilo: <em>a il cinema</em> es sencillamente incorrecto. Las demás preposiciones (<em>con, per, tra, fra</em>) se quedan separadas."
      },
      {
        contrast: "El español solo contrae dos, <b>al</b> y <b>del</b>, y ni siquiera con el femenino. El italiano contrae cinco preposiciones con los siete artículos: treinta y cinco formas. La lógica te resulta familiar; la extensión, no."
      },
      {
        h: "El patrón es regular",
        p: "Coges la primera letra de la preposición y le enganchas el artículo: <em>a + il = al</em>, <em>a + lo = allo</em>, <em>a + la = alla</em>, <em>a + i = ai</em>, <em>a + gli = agli</em>, <em>a + le = alle</em>. <em>Di, da, in</em> y <em>su</em> funcionan igual."
      },
      {
        trap: "<b>In</b> se convierte en <b>ne-</b>: <em>in + il = nel</em>, no «inl». Es la única forma de toda la tabla que no se puede deducir."
      },
      {
        h: "Sin artículo no hay contracción",
        p: "<em>Vado a Roma</em> (ciudad, sin artículo), <em>vado in Italia</em> (país, sin artículo tras in), pero <em>vado al mare</em>, <em>vado alla stazione</em>. La fusión solo ocurre cuando hay realmente un artículo."
      }
    ],
    grammar: {
      title: "Tabla de preposiciones contractas",
      table: {
        head: ["", "il", "lo", "la", "l'", "i", "gli", "le"],
        rows: [
          ["di", "del", "dello", "della", "dell'", "dei", "degli", "delle"],
          ["a", "al", "allo", "alla", "all'", "ai", "agli", "alle"],
          ["da", "dal", "dallo", "dalla", "dall'", "dai", "dagli", "dalle"],
          ["in", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"],
          ["su", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"]
        ]
      },
      examples: [
        { tr: "Voy al cine.", note: "a + il" },
        { tr: "El libro está encima de la mesa.", note: "su + il" },
        { tr: "Vivo en el casco antiguo.", note: "in + il" },
        { tr: "Vuelvo de la estación.", note: "da + la" },
        { tr: "La llave del coche.", note: "di + la" },
        { tr: "En tren.", note: "con suele quedarse separada" }
      ]
    },
    vocab: [
      "plaza",
      "calle",
      "el centro",
      "iglesia",
      "museo",
      "banco",
      "farmacia",
      "oficina de correos",
      "semáforo",
      "cruce",
      "puente",
      "parada (de autobús, de tranvía)"
    ],
    exercises: [
      { q: "Completa: «Vado ___ cinema.» (a + il)" },
      { q: "Completa: «Il libro è ___ tavolo.» (su + il)" },
      { q: "Completa: «Abito ___ centro.» (in + il)" },
      {
        q: "Elige la forma correcta de «a + artículo».",
        items: ["la estación", "el aeropuerto", "los estudiantes", "el restaurante", "las nueve"]
      },
      {
        q: "¿Qué combinación NO se funde?",
        opts: ["a + il", "con + il", "in + la"],
        why: "Con suele quedarse separada; la forma «col» existe pero es opcional."
      },
      { q: "Completa las indicaciones.", tr: "La farmacia está en la esquina, al lado del banco, enfrente de la iglesia." },
      { q: "«Vuelvo de la estación.»" },
      { tr: "La llave del coche está encima de la mesa." },
      { tr: "Correos está cerca de la plaza principal." },
      { tr: "Perdone, ¿dónde está la parada del autobús?" }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "La ciudad y orientarse",
    title: "Ir y venir",
    objectives: [
      "conjugar andare y venire",
      "elegir a o in delante de un destino",
      "distinguir andare de venire"
    ],
    theory: [
      {
        h: "La dirección depende de dónde está tu interlocutor",
        p: "<strong>Andare</strong> es movimiento <b>que se aleja</b> de quien habla, <strong>venire</strong> movimiento <b>hacia</b> él o en su compañía. El español funciona igual con ir y venir, así que la distinción en sí te resulta natural."
      },
      {
        h: "A o in: la regla práctica",
        list: [
          "<b>a</b>: ciudades (<em>a Roma</em>), lugares entendidos como actividad (<em>a scuola, a casa, a letto, al lavoro, al cinema, al mare</em>)",
          "<b>in</b>: países y regiones (<em>in Italia, in Toscana</em>), locales e instituciones (<em>in banca, in ufficio, in farmacia, in centro</em>), medios de transporte (<em>in treno, in macchina, in bici</em>)",
          "<b>da</b>: a casa de alguien (<em>vado dal medico, vado da Marco</em>)"
        ]
      },
      {
        trap: "<em>A piedi</em> («a pie») rompe la regla del transporte, porque los pies no se montan. Apréndelo como excepción: aquí el español coincide, y eso ayuda."
      },
      {
        contrast: "El español usa «a» para casi todo: a Roma, al banco, al médico. El italiano reparte entre tres preposiciones, y el reparto no se deduce del español. No traduzcas palabra por palabra: aprende la combinación entera como un bloque, igual que aprendiste «a casa» y no «en casa» para el movimiento."
      }
    ],
    grammar: {
      title: "Andare y venire",
      table: {
        head: ["persona", "andare", "venire", "ejemplo"],
        rows: [
          ["io", "vado", "vengo", "Vado al lavoro. / Vengo con te."],
          ["tu", "vai", "vieni", "Vieni anche tu?"],
          ["lui / lei", "va", "viene", "Va a scuola."],
          ["noi", "andiamo", "veniamo", "Andiamo al mare."],
          ["voi", "andate", "venite", "Venite da noi stasera?"],
          ["loro", "vanno", "vengono", "Vanno in Italia."]
        ]
      },
      examples: [
        { tr: "Voy a Roma en tren." },
        { tr: "Voy a Italia en septiembre." },
        { tr: "Voy al dentista a las tres." },
        { tr: "¿Vienes a la fiesta? — Sí, con mucho gusto." },
        { tr: "Vamos a pie, está cerca." },
        { tr: "¿De dónde vienes? — De Polonia." }
      ]
    },
    vocab: [
      "ir",
      "venir",
      "a pie",
      "en coche",
      "en autobús",
      "en bici",
      "en metro",
      "cerca / lejos",
      "aquí / allí",
      "juntos",
      "solo",
      "se tarda media hora"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Alguien te invita a su casa. ¿Cómo confirmas?",
        opts: ["Sì, vado!", "Sì, vengo!", "Sì, andiamo!"],
        why: "El movimiento hacia el interlocutor es venire, igual que tu «¡sí, voy!»… que en italiano sería un error."
      },
      { q: "Completa: «Vado ___ Italia.» (a Italia)" },
      { q: "Completa: «Vado ___ Milano.» (a Milán)" },
      { q: "Completa: «Vado ___ medico.» (al médico)" },
      {
        q: "¿Qué combinaciones son correctas?",
        opts: ["in treno", "a treno", "a piedi", "in piedi", "in banca"],
        why: "«In piedi» existe, pero significa «de pie», no «a pie»."
      },
      { tr: "Vamos a pie, está cerca." },
      { tr: "Voy contigo, pero cogemos el metro." },
      { tr: "Voy al centro a pie, se tarda media hora." }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "La ciudad y orientarse",
    title: "Pedir indicaciones",
    objectives: [
      "preguntar el camino y entender la respuesta",
      "usar el imperativo de tu",
      "describir una ubicación con preposiciones"
    ],
    theory: [
      {
        h: "El imperativo de tu",
        p: "Las indicaciones se dan en imperativo. En los verbos en <b>-are</b> la forma de <em>tu</em> coincide con la tercera persona del presente: <em>gira!</em>, <em>continua!</em> En los de <b>-ere</b> e <b>-ire</b> coincide con la segunda: <em>prendi!</em>, <em>segui!</em>"
      },
      {
        h: "Cuatro formas breves",
        p: "<em>andare → va'</em>, <em>fare → fa'</em>, <em>dare → da'</em>, <em>stare → sta'</em>, <em>dire → di'</em>. El apóstrofo sustituye a las letras que caen. En la práctica también oirás las formas completas <em>vai</em> y <em>fai</em>: las dos están en uso."
      },
      {
        h: "En formal: con Lei",
        p: "A un desconocido las indicaciones suenan distintas: <em>giri a destra</em>, <em>prenda la prima a sinistra</em>, <em>vada dritto</em>. Son formas de subjuntivo, igual que tu «gire», «tome», «siga» de usted. El mecanismo es el mismo, así que por una vez la intuición sirve."
      },
      {
        tip: "La frase más útil cuando no te enteras: <em>Può ripetere più lentamente, per favore?</em> Los italianos hablan rápido y casi nadie baja el ritmo si no se lo pides."
      }
    ],
    grammar: {
      title: "Dar indicaciones",
      table: {
        head: ["informal (tu)", "formal (Lei)", "en español"],
        rows: [
          ["vai dritto", "vada dritto", "sigue / siga todo recto"],
          ["gira a destra", "giri a destra", "gira / gire a la derecha"],
          ["gira a sinistra", "giri a sinistra", "gira / gire a la izquierda"],
          ["prendi la prima strada", "prenda la prima strada", "coge / coja la primera calle"],
          ["attraversa la piazza", "attraversi la piazza", "cruza / cruce la plaza"],
          ["continua fino al semaforo", "continui fino al semaforo", "sigue / siga hasta el semáforo"]
        ]
      },
      examples: [
        { tr: "Perdone, ¿dónde está la estación?" },
        { tr: "Está aquí al lado, a dos pasos." },
        { tr: "Siga todo recto y coja la segunda a la derecha." },
        { tr: "Está enfrente del banco, al lado de la farmacia." },
        { tr: "¿Cuánto se tarda a pie? — Diez minutos." },
        { tr: "Me he perdido, ¿me puede ayudar?" }
      ]
    },
    vocab: [
      "¿dónde está…?",
      "derecha / izquierda",
      "todo recto",
      "enfrente de",
      "al lado de",
      "cerca / lejos de",
      "detrás de / delante de",
      "entre… y…",
      "girar",
      "cruzar",
      "me he perdido",
      "a dos pasos de aquí"
    ],
    exercises: [
      { q: "«Gira a sinistra» significa:", opts: ["Gira a la derecha", "Gira a la izquierda", "Sigue recto"] },
      { q: "La versión formal de «vai dritto» es:", opts: ["va dritto", "vada dritto", "andare dritto"] },
      { q: "Completa: «___ la stazione?» (dónde está la estación)" },
      { q: "Empareja las preposiciones de lugar.", pairs: ["enfrente de", "al lado de", "detrás de", "entre… y…"] },
      {
        q: "Completa las indicaciones.",
        tr: "Siga todo recto hasta el semáforo y luego gire a la derecha. El banco está enfrente de la farmacia."
      },
      { q: "«Perdone, ¿dónde está la farmacia?»" },
      {
        q: "Te has perdido en el centro.",
        setting: "Una calle estrecha; el transeúnte parece del barrio.",
        lines: [
          { tr: "Párale con educación y pregunta por la estación.", answerTr: "Perdone, ¿dónde está la estación?" },
          { tr: "Mire: siga todo recto y luego coja la segunda a la derecha." },
          {
            tr: "Di que no lo has entendido y pídele que lo repita.",
            answerTr: "No entiendo, ¿me lo puede repetir más despacio?"
          },
          { tr: "Claro. Todo recto… y luego la segunda a la derecha. Diez minutos a pie." },
          { tr: "Dale las gracias.", answerTr: "Muchas gracias, ¡muy amable!" }
        ]
      },
      { tr: "El museo está entre la plaza y el puente." },
      { tr: "Siga todo recto y cruce la plaza." },
      { tr: "Me he perdido, ¿me puede ayudar?" }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "La ciudad y orientarse",
    title: "Describir un lugar",
    objectives: [
      "decir qué hay en una ciudad o en un piso",
      "usar c'è / ci sono en negativo y en preguntas",
      "combinarlo con las preposiciones de lugar"
    ],
    theory: [
      {
        h: "Existencia frente a cualidad",
        p: "<strong>C'è</strong> y <strong>ci sono</strong> dicen que algo <b>está en un sitio</b>. <em>Essere</em> dice <b>cómo</b> es algo. <em>C'è un museo in centro</em> (hay un museo) frente a <em>Il museo è bellissimo</em> (el museo es precioso). El español separa igual con «hay» y «es»."
      },
      {
        h: "Negativo e interrogativo",
        p: "<em>Non c'è</em> / <em>non ci sono</em>; la pregunta es solo entonación: <em>C'è un bagno qui?</em> Las respuestas cortas son muy corrientes: <em>Sì, c'è.</em> / <em>No, non c'è.</em>"
      },
      {
        h: "Ci no es solo «ahí»",
        p: "La misma partícula <em>ci</em> aparece por todas partes: <em>ci vuole</em> (hace falta), <em>ci metto</em> (tardo), <em>ci vado</em> (voy ahí). Por ahora basta con reconocerla en estas expresiones; la explicación completa llega en B1."
      },
      {
        tip: "En restaurantes y bares, dos frases te sacan de muchos apuros: <em>C'è il bagno?</em> y <em>Non c'è il wifi?</em> Funcionan literalmente en cualquier sitio."
      }
    ],
    grammar: {
      title: "C'è / ci sono",
      table: {
        head: ["forma", "uso", "ejemplo"],
        rows: [
          ["c'è", "una cosa", "C'è una farmacia qui vicino."],
          ["ci sono", "varias cosas", "Ci sono due farmacie."],
          ["non c'è", "negativo sing.", "Non c'è il wifi."],
          ["non ci sono", "negativo pl.", "Non ci sono tavoli liberi."],
          ["c'è…?", "pregunta", "C'è un bancomat qui?"],
          ["quanto c'è?", "distancia", "Quanto c'è da qui al centro?"]
        ]
      },
      examples: [
        { tr: "En mi barrio hay mercado todos los sábados." },
        { tr: "Hay muchos turistas en esta época." },
        { tr: "No hay nadie en recepción." },
        { tr: "¿Hay baño? — Sí, al fondo a la derecha." },
        { tr: "¿Cuánto hay de aquí al centro?" }
      ]
    },
    vocab: [
      "barrio",
      "baño, servicios",
      "cajero automático",
      "supermercado",
      "aparcamiento",
      "parque",
      "hospital",
      "biblioteca",
      "nadie",
      "algo",
      "por aquí",
      "al fondo"
    ],
    exercises: [
      { q: "Completa: «___ un bancomat qui vicino?»" },
      { q: "Completa: «___ due farmacie in questa via.»" },
      {
        q: "¿Qué frase describe una cualidad y no la existencia?",
        opts: ["C'è un museo in centro.", "Il museo è molto grande.", "Ci sono tre musei."]
      },
      { q: "Ponlo en negativo: «C'è il wifi.» → «___ il wifi.»" },
      { q: "Describe tu barrio.", tr: "En mi barrio hay un parque, pero no hay supermercados." },
      { q: "«No hay nadie en recepción.»" },
      { q: "Empareja.", pairs: ["aparcamiento", "hospital", "biblioteca", "barrio"] },
      { tr: "¿Hay alguna farmacia por aquí?" },
      { tr: "En el barrio hay dos parques y una biblioteca." },
      { tr: "Perdone, ¿hay baño? — Sí, al fondo a la derecha." }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 6",
    objectives: ["comprobar las preposiciones contractas, andare/venire, las indicaciones y c'è/ci sono"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70%." }],
    exercises: [
      { q: "a + artículo:", items: [, , , ] },
      { q: "«Il libro è ___ tavolo.» (su + il)" },
      { q: "«Abito ___ centro.» (in + il)" },
      {  },
      { q: "«Vado ___ Italia.»" },
      { q: "«Vado ___ dentista.»" },
      { q: "La versión formal de «gira a destra»:", opts: ["giri a destra", "gira a destra", "girare a destra"] },
      { q: "«___ tavoli liberi?» (¿hay mesas libres?)" },
      { tr: "Siga todo recto, el banco está enfrente de la iglesia." },
      { tr: "Perdone, ¿dónde está la parada del autobús?" }
    ]
  },
  "unit:a1-u07": { title: "En la mesa", grammarNote: "pedir · ne · la estructura de una comida italiana" },
  "lesson:a1-u07-l1": {
    theme: "Restaurante",
    title: "Reservar y sentarse",
    objectives: [
      "reservar mesa y entrar en un restaurante",
      "entender las preguntas del camarero",
      "pedir la carta y una mesa fuera"
    ],
    theory: [
      {
        h: "El orden de la comida es fijo",
        p: "Un restaurante italiano funciona con una secuencia establecida: <em>antipasto</em> (entrante), <em>primo</em> (pasta, arroz o sopa), <em>secondo</em> (carne o pescado), <em>contorno</em> (guarnición, ¡que se pide aparte!), <em>dolce</em>, <em>caffè</em>. Nadie espera que pidas todo, pero el camarero preguntará en ese orden."
      },
      {
        h: "El contorno se pide aparte",
        p: "Las verduras y las patatas <b>no</b> vienen con el segundo: son un pedido independiente. El <em>secondo</em> llega solo en el plato, sin nada al lado. Para quien viene de España, donde la guarnición suele ir incluida, es la sorpresa más frecuente."
      },
      {
        h: "Coperto y servizio",
        p: "<em>Il coperto</em> (2-4 €) es un cargo por el cubierto, el pan y el servicio: es legal y está impreso en la carta. La propina no se espera como en otros países: se redondea la cuenta o se dejan un par de euros si el servicio ha sido bueno."
      },
      {
        tip: "La cuenta hay que pedirla: <em>il conto, per favore</em>. El camarero no la trae por su cuenta, porque equivaldría a echarte."
      }
    ],
    grammar: {
      title: "Frases en la mesa",
      table: {
        head: ["situación", "en italiano", "en español"],
        rows: [
          ["reservar", "Vorrei prenotare un tavolo per due.", "Querría reservar una mesa para dos."],
          ["sin reserva", "C'è un tavolo libero?", "¿Hay alguna mesa libre?"],
          ["fuera", "Possiamo sederci fuori?", "¿Podemos sentarnos fuera?"],
          ["la carta", "Il menù, per favore.", "La carta, por favor."],
          ["pedir", "Per me una carbonara.", "Para mí una carbonara."],
          ["la cuenta", "Il conto, per favore.", "La cuenta, por favor."]
        ]
      },
      examples: [
        { tr: "Buenas noches, ¿tienen reserva?" },
        { tr: "No, somos dos. ¿Hay sitio?" },
        { tr: "¿Dentro o fuera?" },
        { tr: "¿Qué me recomienda?" },
        { tr: "Soy alérgica a los frutos secos." },
        { tr: "Todo estaba buenísimo, enhorabuena." }
      ]
    },
    vocab: [
      "reservar",
      "mesa",
      "carta",
      "entrante",
      "primer plato",
      "segundo plato",
      "guarnición (¡se pide aparte!)",
      "postre",
      "la cuenta",
      "cubierto (cargo fijo)",
      "somos dos",
      "¿qué me recomienda?"
    ],
    dialogue: [
      "Buenas noches, ¿tienen reserva?",
      "No, somos dos. ¿Hay alguna mesa libre?",
      "¿Dentro o fuera?",
      "Fuera, si puede ser. Gracias.",
      "Claro, siéntense. Aquí tienen la carta."
    ],
    exercises: [
      {
        q: "¿Qué es «il contorno»?",
        opts: ["Un postre", "Una guarnición de verdura, que se pide aparte", "El cargo por el cubierto"]
      },
      { q: "¿Qué significa «il coperto»?", opts: ["Un plato de carne", "Un cargo por el cubierto y el pan", "Una propina"] },
      { q: "Completa: «Vorrei ___ un tavolo per due.»" },
      { q: "«La cuenta, por favor.»" },
      {
        q: "Ordena la comida: empareja el nombre con la descripción.",
        pairs: ["entrante", "pasta o sopa", "carne o pescado", "postre"]
      },
      { tr: "No, somos dos. ¿Hay alguna mesa libre?" },
      {
        q: "Entras en un restaurante sin reserva.",
        setting: "Viernes, ocho y media de la tarde, una trattoria pequeña.",
        lines: [
          { tr: "¡Buenas noches! ¿Tienen reserva?" },
          {
            tr: "Di que no y pregunta si hay mesa libre para dos.",
            answerTr: "No, ¿hay mesa para dos?"
          },
          { tr: "Sí, pero solo dentro. ¿Les va bien?" },
          { tr: "Acepta y pide la carta.", answerTr: "Está bien, la carta por favor." }
        ]
      },
      { tr: "Querría reservar una mesa para cuatro a las ocho." },
      { tr: "Buenas noches, somos dos. ¿Hay sitio fuera?" }
    ]
  },
  "lesson:a1-u07-l2": {
    theme: "Restaurante",
    title: "Pedir un plato",
    objectives: ["pedir un plato concreto y una bebida", "preguntar qué lleva un plato", "declarar una alergia o una dieta"],
    theory: [
      {
        h: "Tres maneras de pedir",
        p: "<em>Per me una carbonara</em> (para mí…), <em>Prendo una carbonara</em> (tomo…), <em>Vorrei una carbonara</em> (querría…). Las tres son normales; <em>vorrei</em> es la más cortés, <em>prendo</em> la más natural."
      },
      {
        h: "Preguntar qué lleva",
        p: "<em>Cosa c'è dentro?</em>, <em>Contiene glutine?</em>, <em>È piccante?</em>, <em>È senza lattosio?</em> Los restaurantes están obligados por ley a declarar los alérgenos, así que la pregunta no sorprende a nadie."
      },
      {
        h: "El agua: la pregunta inevitable",
        p: "<em>Naturale o frizzante?</em> — sin gas o con gas. El agua del grifo (<em>acqua del rubinetto</em>) a veces está disponible, pero muchos sitios sencillamente no la sirven."
      },
      {
        tip: "El café llega <b>después</b> del postre, nunca durante la comida y nunca en forma de capuchino. <em>Un caffè</em> después de comer forma parte del ritual, no es algo que se beba con el plato."
      }
    ],
    grammar: {
      title: "Pedir y preguntar por un plato",
      table: {
        head: ["función", "frase", "en español"],
        rows: [
          ["pedir", "Per me / Prendo / Vorrei…", "Para mí / Tomo / Querría…"],
          ["bebida", "Da bere, una bottiglia d'acqua.", "Para beber, una botella de agua."],
          ["qué lleva", "Cosa c'è dentro?", "¿Qué lleva?"],
          ["alergia", "Sono allergico/a a…", "Soy alérgico/a a…"],
          ["dieta", "Sono vegetariano/a.", "Soy vegetariano/a."],
          ["sin", "Senza cipolla, per favore.", "Sin cebolla, por favor."]
        ]
      },
      examples: [
        { tr: "Para mí una carbonara y una ensalada mixta." },
        { tr: "¿Para beber? — Agua sin gas, gracias." },
        { tr: "¿Qué lleva la amatriciana?" },
        { tr: "Soy alérgico al marisco." },
        { tr: "¿Este plato es sin gluten?" },
        { tr: "Un café al final, gracias." }
      ]
    },
    vocab: [
      "pasta",
      "carne / pescado",
      "ensalada",
      "verduras",
      "agua sin gas / con gas",
      "vino de la casa",
      "sin gluten",
      "vegetariano / vegano",
      "soy alérgico a…",
      "picante",
      "poco hecho / muy hecho",
      "para beber"
    ],
    culture: {
      title: "Con ojos italianos: lo que no se pide",
      text: "<p><b>Los espaguetis a la boloñesa</b> no existen en una carta italiana. En Bolonia se comen <i>tagliatelle al ragù</i>, y los espaguetis con esa salsa son un invento extranjero.</p><p><b>Los fettuccine Alfredo</b> son un plato estadounidense. <b>El queso con el pescado</b> se considera una pequeña ofensa, y pedir parmesano con marisco provoca una reacción educada pero inequívoca.</p><p><b>La piña en la pizza</b> existe en algunas pizzerías turísticas. Es una elección que puedes hacer, pero hazla sabiendo lo que haces.</p>"
    },
    exercises: [
      {
        q: "El camarero pregunta «Naturale o frizzante?». ¿Sobre qué?",
        opts: ["El tipo de pasta", "El agua: sin gas o con gas", "El punto de la carne"]
      },
      { q: "Completa: «Sono ___ ai frutti di mare.» (alérgica al marisco, habla una mujer)" },
      { q: "«Para mí una carbonara, por favor.»" },
      {
        q: "¿Cuándo toman café los italianos durante una comida?",
        opts: ["Con el segundo plato", "Después del postre", "En lugar del agua"]
      },
      { q: "Empareja.", pairs: ["sin gluten", "picante", "muy hecho", "para beber"] },
      {
        q: "Completa el pedido.",
        tr: "Para mí, pasta con tomate, sin cebolla. Para beber, agua sin gas."
      },
      { tr: "¿Qué lleva este plato?" },
      {
        q: "El camarero toma nota.",
        setting: "Una trattoria, una mesa junto a la ventana.",
        lines: [
          { tr: "Bueno, ¿qué van a tomar?" },
          { tr: "Pide los cacio e pepe.", answerTr: "Para mí los cacio e pepe." },
          { tr: "Muy bien. ¿Y para beber?" },
          { tr: "Pide una botella de agua sin gas.", answerTr: "Una botella de agua sin gas." },
          { tr: "Perfecto. ¿Alguna guarnición?" },
          { tr: "Recházalo con educación.", answerTr: "No, gracias, así está bien." }
        ]
      },
      { tr: "Soy vegetariana, ¿este plato lleva carne?" },
      { tr: "Tomo los cacio e pepe. Para beber, agua con gas." }
    ]
  },
  "lesson:a1-u07-l3": {
    theme: "Gramática básica",
    title: "La partícula ne: primer encuentro",
    objectives: [
      "sustituir un sustantivo repetido por ne",
      "responder a una pregunta de cantidad",
      "reconocer ne en expresiones corrientes"
    ],
    theory: [
      {
        h: "Ne representa una parte de un todo",
        p: "Cuando hablas de <b>cuánto</b> de algo ya mencionado, repetir el sustantivo suena pesado. <em>Quante mele vuoi? — <b>Ne</b> voglio tre.</em> Aquí <em>ne</em> significa «de ellas»."
      },
      {
        contrast: "El español perdió esta partícula: dices «quiero tres» sin nada, y el hueco no se rellena. En italiano <em>ne</em> es <b>obligatorio</b>: «voglio tre» a secas suena incompleto y se nota. El catalán conserva <em>en</em>, que es exactamente esto."
      },
      {
        h: "Dónde va",
        p: "Delante del verbo conjugado, igual que los pronombres: <em>ne prendo due</em>, <em>non ne voglio</em>. Con un infinitivo se pega al final: <em>vorrei prender<b>ne</b> due</em>."
      },
      {
        h: "Ne también sustituye a «di + algo»",
        p: "<em>Parliamo del progetto? — Sì, <b>ne</b> parliamo domani.</em> («Hablamos de ello mañana.») Lo desarrollaremos en B1; por ahora basta con reconocerlo."
      },
      {
        tip: "Expresiones muy frecuentes con <em>ne</em>: <em>Non ne so nulla</em> (no sé nada de eso), <em>Che ne pensi?</em> (¿qué te parece?), <em>Me ne vado</em> (me voy)."
      }
    ],
    grammar: {
      title: "Ne en las expresiones de cantidad",
      table: {
        head: ["pregunta", "respuesta con ne", "en español"],
        rows: [
          ["Quante mele vuoi?", "Ne voglio tre.", "Quiero tres."],
          ["Prendi il vino?", "Ne prendo un bicchiere.", "Tomo una copa."],
          ["Hai fratelli?", "Sì, ne ho due.", "Sí, tengo dos."],
          ["Vuoi ancora pasta?", "No, grazie, non ne voglio più.", "No, gracias, no quiero más."],
          ["Che ne pensi?", "—", "¿Qué te parece?"]
        ]
      },
      examples: [
        { tr: "¿Cuántos cafés tomas al día? — Tomo tres." },
        { tr: "¿Quieres pan? — Sí, cojo un poco." },
        { tr: "¿Tienes hijos? — Tengo una hija." },
        { tr: "No sé nada de eso." },
        { tr: "Querría coger dos.", note: "con infinitivo, ne se pega" }
      ]
    },
    vocab: [
      "de ello, de eso (partícula)",
      "cuántos (m / f)",
      "más, todavía",
      "otro",
      "un trozo",
      "una loncha",
      "una copa",
      "una ración",
      "así está bien",
      "¿qué te parece?",
      "no sé nada de eso",
      "me voy"
    ],
    exercises: [
      {
        q: "«Quante birre prendi? — Ne prendo due.» ¿Qué sustituye «ne»?",
        opts: ["A ti", "A «birre», la cosa de la que se habla", "Nada, es decorativo"]
      },
      { q: "Responde: «Hai fratelli? — Sì, ___ ho due.»" },
      { q: "Completa: «Vuoi del pane? — Sì, ___ prendo un po'.»" },
      {
        q: "¿Dónde va «ne» con un infinitivo?",
        opts: ["Delante: «ne prendere»", "Pegado al final: «prenderne»", "Al final de la frase"]
      },
      { q: "«¿Cuántos cafés tomas al día? — Tomo tres.»" },
      {
        q: "Empareja la expresión con su significado.",
        pairs: ["¿qué te parece?", "no sé nada de eso", "me voy", "cojo dos"]
      },
      {
        q: "Completa la conversación.",
        tr: "— ¿Quieres más vino? — No, gracias, no quiero más. — ¿Y tú? — Sí, tomo otra copa."
      },
      { tr: "Querría coger dos." },
      { tr: "¿Cuántas porciones de tarta quieres? — Quiero una, gracias." },
      { tr: "¿Tienes hermanos? — Sí, tengo dos hermanos." }
    ]
  },
  "lesson:a1-u07-l4": {
    theme: "Restaurante",
    title: "Pagar y marcharse",
    objectives: [
      "pedir la cuenta y pagar",
      "repartir la cuenta entre varios",
      "decir qué te ha parecido la comida"
    ],
    theory: [
      {
        h: "La cuenta hay que pedirla",
        p: "El camarero no la trae si no se la pides: en la cultura italiana de restaurante equivaldría a meter prisa al cliente. La fórmula estándar es <em>Il conto, per favore</em> o <em>Possiamo avere il conto?</em> El gesto de firmar en el aire también funciona."
      },
      {
        h: "Repartir la cuenta",
        p: "<strong>Alla romana</strong> significa «a partes iguales, todos pagan lo mismo». <em>Paghiamo alla romana</em> es la fórmula habitual: es tu «pagar a escote». Si quieres cuentas separadas: <em>Conti separati, per favore</em>, posible pero a menudo problemático en sitios pequeños."
      },
      {
        h: "Decir qué te ha parecido",
        p: "<em>Era tutto buonissimo</em>, <em>Complimenti al cuoco</em>, <em>Squisito</em>. Los italianos elogian la comida directamente y esperan lo mismo: no decir nada después de una buena comida resulta frío."
      },
      {
        tip: "<em>Offro io</em> («invito yo») es una frase por la que merece la pena pelearse. El rechazo del invitado forma parte del ritual, pero suele ganar quien ha invitado."
      }
    ],
    grammar: {
      title: "La cuenta y las despedidas",
      table: {
        head: ["situación", "en italiano", "en español"],
        rows: [
          ["pedirla", "Il conto, per favore.", "La cuenta, por favor."],
          ["a partes iguales", "Paghiamo alla romana.", "Pagamos a escote."],
          ["por separado", "Conti separati, per favore.", "Cuentas separadas, por favor."],
          ["invito yo", "Offro io.", "Invito yo."],
          ["tarjeta", "Si può pagare con la carta?", "¿Se puede pagar con tarjeta?"],
          ["elogio", "Era tutto buonissimo!", "¡Estaba todo buenísimo!"]
        ]
      },
      examples: [
        { tr: "¿Nos trae la cuenta?" },
        { tr: "El cubierto son dos euros por persona." },
        { tr: "Por desgracia el datáfono no funciona." },
        { tr: "Quédese con el cambio." },
        { tr: "¡Enhorabuena al cocinero, exquisito!" },
        { tr: "¡Buenas noches!" }
      ]
    },
    vocab: [
      "la cuenta",
      "a escote",
      "cuentas separadas",
      "invito yo",
      "propina",
      "datáfono",
      "cambio",
      "exquisito",
      "enhorabuena",
      "estaba todo buenísimo",
      "buenas noches",
      "volveremos"
    ],
    exercises: [
      {
        q: "¿Qué significa «pagare alla romana»?",
        opts: ["Pagar en efectivo", "Pagar a escote", "Pagar por todos"]
      },
      {
        q: "¿Por qué el camarero no trae la cuenta sin que se la pidan?",
        opts: ["Se le olvida", "Porque sería meter prisa al cliente", "Porque está prohibido"]
      },
      { q: "«¿Nos trae la cuenta?»" },
      { q: "Completa: «___ io!» (invito yo)" },
      { q: "Empareja.", pairs: ["propina", "cambio", "exquisito", "cuentas separadas"] },
      {
        q: "Completa el final de la cena.",
        tr: "— ¡Estaba todo buenísimo, enhorabuena! — ¡Gracias! — La cuenta, por favor. ¿Se puede pagar con tarjeta?"
      },
      { tr: "Pagamos a escote, gracias." },
      {
        q: "Final de la cena.",
        setting: "Los platos ya retirados, el camarero pasa por delante.",
        lines: [
          { tr: "Pide la cuenta.", answerTr: "La cuenta, por favor." },
          { tr: "Enseguida. ¿Ha ido todo bien esta noche?" },
          { tr: "Elogia la comida.", answerTr: "¡Estaba todo buenísimo, enhorabuena!" },
          { tr: "¡Muchas gracias! Son cuarenta y seis euros." },
          { tr: "Pregunta si se puede pagar con tarjeta.", answerTr: "¿Se puede pagar con tarjeta?" }
        ]
      },
      { tr: "La cuenta son cuarenta y seis euros, cubierto incluido." },
      { tr: "¡Estaba todo buenísimo, enhorabuena al cocinero!" }
    ]
  },
  "lesson:a1-u07-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 7",
    objectives: ["comprobar el vocabulario de restaurante, los pedidos y la partícula ne"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70%." }],
    exercises: [
      { q: "«Il contorno» es:", opts: ["el postre", "una guarnición de verdura", "el cargo por el cubierto"] },
      { q: "«Il coperto» es:", opts: ["un plato de carne", "el cargo por el cubierto", "una propina"] },
      { q: "«Vorrei ___ un tavolo per due.»" },
      { q: "«Hai fratelli? — Sì, ___ ho due.»" },
      { q: "«Sono ___ ai frutti di mare.» (habla una mujer)" },
      { q: "«La cuenta, por favor.»" },
      { q: "Empareja.", pairs: ["a escote", "invito yo", "exquisito", "para beber"] },
      { tr: "Para mí una carbonara, sin cebolla." },
      { tr: "Para beber tomamos una botella de agua sin gas." },
      { tr: "¿Nos trae la cuenta?" }
    ]
  }
});
