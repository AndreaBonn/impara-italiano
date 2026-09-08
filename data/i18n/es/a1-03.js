/* ============================================================
   Texto en la lengua del estudiante (es) para data/core/a1-03.js
   Las claves apuntan a los id de la capa neutra; los arrays se
   combinan por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.

   Algunas respuestas modelo en italiano dicen "polacca" o nombran
   Varsovia y Cracovia. Son audio grabado y claves de corrección
   fijas, así que los enunciados en español las mantienen en lugar
   de invitar a una respuesta que el corrector rechazaría.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a1-u08": { title: "La gente que nos rodea", grammarNote: "posesivos · describir personas · comparativos" },
  "lesson:a1-u08-l1": {
    theme: "Personas y relaciones",
    title: "Los posesivos",
    objectives: [
      "usar mio, tuo, suo con la terminación correcta",
      "saber cuándo desaparece el artículo delante de un familiar",
      "decir quién es quién en tu vida"
    ],
    theory: [
      {
        h: "Concuerda con la cosa, no con el dueño",
        p: "<em>Il <b>suo</b> libro</em> significa «su libro» de él o de ella: la terminación describe el <b>libro</b>, no a quien lo posee. Aquí el español funciona igual («su coche» no dice de quién), así que no tienes nada que desaprender. Cuando el contexto no basta, el italiano añade <em>di lui</em> o <em>di lei</em>."
      },
      {
        h: "El artículo es la norma",
        p: "Se dice casi siempre <em><b>il</b> mio libro</em>, <em><b>la</b> mia macchina</em>. El español dice «mi libro» sin artículo, y ese artículo italiano es lo primero que se cae al hablar rápido."
      },
      {
        h: "La excepción: un solo familiar",
        p: "Sin artículo: <em>mia madre, mio padre, tuo fratello, sua sorella</em>. Pero el artículo <b>vuelve</b> cuando: hay plural (<em>i miei genitori</em>), diminutivo (<em>la mia sorellina</em>), un adjetivo añadido (<em>la mia sorella maggiore</em>) o la forma <em>loro</em> (<em>la loro madre</em>)."
      },
      {
        trap: "<b>Loro</b> no cambia nunca y <b>siempre</b> lleva artículo: <em>il loro cane, la loro casa, i loro amici, la loro madre</em>. Es el único posesivo que se comporta así."
      }
    ],
    grammar: {
      title: "Formas del posesivo",
      table: {
        head: ["persona", "m. sing.", "f. sing.", "m. pl.", "f. pl."],
        rows: [
          ["io", "il mio", "la mia", "i miei", "le mie"],
          ["tu", "il tuo", "la tua", "i tuoi", "le tue"],
          ["lui / lei", "il suo", "la sua", "i suoi", "le sue"],
          ["noi", "il nostro", "la nostra", "i nostri", "le nostre"],
          ["voi", "il vostro", "la vostra", "i vostri", "le vostre"],
          ["loro", "il loro", "la loro", "i loro", "le loro"]
        ]
      },
      examples: [
        { tr: "Mi hermana vive en Bari.", note: "sin artículo" },
        { tr: "Mis hermanas viven en Bari.", note: "plural → vuelve el artículo" },
        { tr: "Mi jefe es muy exigente." },
        { tr: "Su casa está cerca del parque.", note: "loro siempre lleva artículo" },
        { tr: "Sus amigos son simpáticos." },
        { tr: "Es el libro de ella, no el de él.", note: "cuando hay que precisar" }
      ]
    },
    vocab: [
      "madre / padre",
      "padres",
      "hermano / hermana",
      "hijo / hija",
      "marido / mujer",
      "pareja",
      "compañero de trabajo",
      "jefe",
      "vecino",
      "compañero de piso",
      "mejor amigo",
      "nieto; sobrino"
    ],
    exercises: [
      {
        q: "¿Cuál es la forma correcta de «mi madre»?",
        opts: ["la mia madre", "mia madre", "la madre mia"],
        why: "Un solo familiar sin adjetivo no lleva artículo."
      },
      {
        q: "¿Y «mis padres»?",
        opts: ["miei genitori", "i miei genitori", "il mio genitori"],
        why: "En plural vuelve el artículo."
      },
      {
        q: "Completa: «___ loro casa è grande.»",
        why: "Loro siempre necesita artículo, también con los familiares."
      },
      {
        q: "Completa: «___ mia sorella maggiore.» (mi hermana mayor)",
        why: "Un adjetivo añadido hace volver el artículo."
      },
      {
        q: "Elige el posesivo correcto para «io».",
        items: ["libro", "coche", "padres", "hermanas"]
      },
      {
        q: "«Il suo libro»: ¿de quién es el libro?",
        opts: ["Solo de él", "Solo de ella", "De él o de ella, lo decide el contexto"]
      },
      { q: "«Mi jefe es muy exigente.»" },
      {
        q: "Completa (pon el artículo, o escribe un guion «-» si no lo lleva).",
        tr: "Mi hermano trabaja con mis padres."
      },
      { tr: "Mi hermana y sus hijos viven en Palermo." },
      { tr: "Mi mejor amigo se llama Paolo." }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Personas y relaciones",
    title: "Describir el aspecto de alguien",
    objectives: [
      "describir el físico de una persona",
      "usar essere y avere donde toca",
      "preguntar cómo es alguien"
    ],
    theory: [
      {
        h: "Essere para el conjunto, avere para las partes",
        p: "La altura, la constitución y la impresión general van con <strong>essere</strong>: <em>è alto, è magra</em>. Los rasgos concretos van con <strong>avere</strong>: <em>ha i capelli neri</em>, <em>ha gli occhi verdi</em>. El español hace el mismo reparto con ser y tener, así que aquí no hay nada nuevo."
      },
      {
        h: "El artículo con las partes del cuerpo",
        p: "Se dice <em>ha <b>i</b> capelli lunghi</em>. Igual que en español («tiene <b>el</b> pelo largo»), el artículo es obligatorio, y ese es un punto que a los hablantes de otras lenguas les cuesta y a ti no."
      },
      {
        h: "Capelli va siempre en plural",
        p: "<em>I capelli</em> es el pelo como conjunto; el singular <em>il capello</em> es un solo cabello. Aquí sí cambia respecto al español, que dice «el pelo» en singular. Lo mismo con <em>i baffi</em> (el bigote), plural en italiano."
      },
      {
        tip: "Preguntar por el físico: <em>Com'è?</em> Preguntar por el carácter: <em>Com'è di carattere?</em> No confundas ninguna de las dos con <em>Come sta?</em>, que pregunta cómo se encuentra."
      }
    ],
    grammar: {
      title: "Essere y avere en las descripciones",
      table: {
        head: ["rasgo", "verbo", "ejemplo"],
        rows: [
          ["altura", "essere", "È alto / bassa / di media statura."],
          ["constitución", "essere", "È magro / robusto / sportiva."],
          ["pelo", "avere", "Ha i capelli castani e ricci."],
          ["ojos", "avere", "Ha gli occhi azzurri."],
          ["edad", "avere", "Ha circa quarant'anni."],
          ["gafas, barba", "portare / avere", "Porta gli occhiali. Ha la barba."]
        ]
      },
      examples: [
        { tr: "¿Cómo es tu hermano? — Alto y delgado." },
        { tr: "Tiene el pelo largo y liso." },
        { tr: "Tiene los ojos verdes y lleva gafas." },
        { tr: "Es una mujer de mediana edad." },
        { tr: "Se parece a su madre." },
        { tr: "Tiene una sonrisa bonita." }
      ]
    },
    vocab: [
      "alto / bajo",
      "delgado / corpulento",
      "pelo (siempre en plural)",
      "rubio / castaño / negro",
      "liso / rizado",
      "ojos",
      "azules / verdes / marrones",
      "gafas",
      "barba",
      "sonrisa",
      "parecerse a",
      "de estatura media"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: ["È i capelli neri.", "Ha i capelli neri.", "Sono capelli neri."],
        why: "Los rasgos físicos van con avere, y con artículo."
      },
      {
        q: "Completa: «Ha ___ occhi azzurri.»",
        why: "Occhi empieza por vocal y es plural → gli."
      },
      { q: "Completa: «Mia sorella ___ alta e magra.»" },
      {
        q: "¿Qué significa «Com'è di carattere?»",
        opts: ["¿Cómo se encuentra?", "¿Cómo es de carácter?", "¿Qué aspecto tiene?"]
      },
      { q: "Relaciona.", pairs: ["pelo rizado", "de estatura media", "lleva gafas", "parecerse a"] },
      { q: "Completa la descripción.", tr: "Mi padre es alto y tiene el pelo gris. Lleva gafas." },
      { q: "«Tiene el pelo largo y rizado.»" },
      { tr: "¿Cómo es tu hermana? Es bajita y deportista." },
      { tr: "Tiene el pelo castaño, los ojos verdes y una sonrisa bonita." },
      { tr: "Mi hermano es alto y tiene el pelo negro." }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Personas y relaciones",
    title: "Carácter y opiniones sobre la gente",
    objectives: [
      "describir el carácter de alguien",
      "dar una opinión sobre una persona",
      "no fiarte de las palabras que se parecen"
    ],
    theory: [
      {
        h: "Simpatico significa lo mismo que en español",
        p: "<strong>Simpatico</strong> describe a quien es buena compañía: bromea, te mete en la conversación, se está a gusto con él. Es una de las pocas palabras que puedes traducir directamente. «Amable» en el sentido cortés es <em>gentile</em>. El contrario, <em>antipatico</em>, es más duro que en español: roza la acusación."
      },
      {
        h: "Opiniones con secondo me",
        p: "<em>Secondo me</em> («en mi opinión») es la forma más común de introducir un juicio. Atención a la forma: no <em>secondo io</em> sino <em>secondo me</em>, porque esta preposición pide el pronombre tónico, igual que el español «según yo» que nadie dice: se dice «según creo yo», y en italiano el pronombre va detrás sin más."
      },
      {
        h: "Cuidado con el elogio y la crítica",
        p: "El italiano es generoso con los cumplidos (<em>bravissimo, gentilissima</em>) pero suele suavizar la crítica a una persona: en vez de <em>è antipatico</em> oirás más bien <em>è un po' particolare</em> o <em>non è il mio tipo</em>."
      },
      {
        contrast: "Las palabras que se parecen son la trampa mayor entre español e italiano, porque el parecido invita a no comprobar. <em>Bravo</em> no es «bravo, valiente» (eso es <em>coraggioso</em>): significa que se te da bien algo, «bravo in matematica». <em>Salire</em> es subir, no salir (salir es <em>uscire</em>). <em>Burro</em> es mantequilla. <em>Aceto</em> es vinagre, no aceite (el aceite es <em>olio</em>). <em>Guardare</em> es mirar, no guardar. Estas cinco causan más malentendidos que cualquier punto de gramática de este nivel."
      }
    ],
    grammar: {
      title: "Adjetivos de carácter",
      table: {
        head: ["italiano", "español", "nota"],
        rows: [
          ["simpatico / antipatico", "simpático / antipático", "antipatico es fuerte"],
          ["gentile", "amable, cortés", "no es «gentil» en el sentido de noble"],
          ["bravo", "que se le da bien algo", "«bravo in matematica»"],
          ["socievole / timido", "sociable / tímido", ""],
          ["generoso / egoista", "generoso / egoísta", "egoista no cambia en masculino"],
          ["tranquillo / nervoso", "tranquilo / nervioso", ""]
        ]
      },
      examples: [
        { tr: "Mi compañera de trabajo es muy simpática." },
        { tr: "En mi opinión es una persona generosa." },
        { tr: "Se le dan muy bien las matemáticas." },
        { tr: "Al principio es un poco tímido." },
        { tr: "No es mi tipo, pero es amable." },
        { tr: "Me cae bien.", note: "literalmente: «él me resulta simpático»" }
      ]
    },
    vocab: [
      "simpático / antipático",
      "amable, cortés",
      "que se le da bien algo",
      "sociable",
      "tímido",
      "generoso",
      "egoísta",
      "tranquilo",
      "divertido (de una cosa o de una persona)",
      "aburrido",
      "en mi opinión",
      "me cae bien"
    ],
    exercises: [
      {
        q: "«Simpatico» está más cerca de:",
        opts: ["cortés, educado", "divertido, buena compañía", "comprensivo, empático"],
        why: "«Cortés» es gentile y «comprensivo» es comprensivo. Simpatico es estar a gusto con alguien."
      },
      {
        q: "¿Qué forma es correcta?",
        opts: ["Secondo io", "Secondo me", "Secondo mio"],
        why: "Después de la preposición secondo va el pronombre tónico: me, te, lui, lei."
      },
      { q: "Completa: «Mia collega è molto ___.» (amable)" },
      {
        q: "«È bravo in matematica» significa:",
        opts: ["¡Bravo por las matemáticas!", "Se le dan bien las matemáticas", "Le gustan las matemáticas"]
      },
      {
        q: "Relaciona los adjetivos con su contrario.",
        pairs: ["antipatico", "egoista", "timido", "nervoso"]
      },
      { q: "«En mi opinión es una persona tranquila.»" },
      {
        q: "Completa.",
        tr: "En mi opinión mi compañero de piso es una persona muy sociable: habla con todo el mundo."
      },
      { tr: "Al principio es un poco tímido." },
      { tr: "En mi opinión es una persona generosa y divertida." },
      { tr: "Mi compañera de trabajo es muy simpática, me cae bien." }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Gramática básica",
    title: "Los comparativos",
    objectives: [
      "comparar dos personas o dos cosas",
      "elegir entre di y che",
      "usar los irregulares migliore y peggiore"
    ],
    theory: [
      {
        h: "Tres construcciones básicas",
        list: [
          "<b>più… di</b> — más que: <em>Anna è più alta di Marco.</em>",
          "<b>meno… di</b> — menos que: <em>Questo è meno caro di quello.</em>",
          "<b>come / quanto</b> — tan… como: <em>È alto come te.</em>"
        ]
      },
      {
        h: "Di o che: la regla práctica",
        p: "<strong>Di</strong> cuando comparas <b>dos cosas distintas en un mismo aspecto</b>: <em>Roma è più grande di Firenze</em>. <strong>Che</strong> cuando comparas <b>dos cualidades de la misma cosa</b>, dos verbos, o cuando sigue una preposición: <em>È più simpatico che intelligente</em>, <em>È più facile parlare che scrivere</em>, <em>Vado più spesso a Roma che a Milano</em>."
      },
      {
        contrast: "El español usa «que» en todos esos casos («más alta que Marco», «más simpático que inteligente»), y reserva «de» para los números («más de veinte»). En italiano el reparto es otro y hay que aprenderlo de cero: el «que» español no te dice cuál de las dos formas italianas toca."
      },
      {
        h: "Formas irregulares",
        p: "<em>buono → migliore</em>, <em>cattivo → peggiore</em>, <em>grande → maggiore</em>, <em>piccolo → minore</em>. Las regulares (<em>più buono, più cattivo</em>) también existen y se usan, sobre todo hablando de sabor: <em>questa pizza è più buona</em>."
      },
      {
        trap: "Después de <b>di</b> va el pronombre tónico: <em>più alto di <b>me</b></em>, nunca «di io». Aquí el español te empuja al error, porque dice «más alto que <b>yo</b>», con pronombre sujeto. Lo mismo tras <b>come</b>: <em>come te</em>, no «come tu»."
      }
    ],
    grammar: {
      title: "Los comparativos",
      table: {
        head: ["construcción", "ejemplo", "en español"],
        rows: [
          ["più… di", "Anna è più alta di Marco.", "Anna es más alta que Marco."],
          ["meno… di", "Questo è meno caro di quello.", "Este es menos caro que aquel."],
          ["come", "Sei alto come me.", "Eres tan alto como yo."],
          ["più… che (dos cualidades)", "È più simpatico che bello.", "Es más simpático que guapo."],
          ["più… che (dos verbos)", "È più facile parlare che scrivere.", "Es más fácil hablar que escribir."],
          ["il più… di", "È il più bravo della classe.", "Es el mejor de la clase."]
        ]
      },
      examples: [
        { tr: "Milán es más cara que Bolonia." },
        { tr: "Mi hermano es menos paciente que yo." },
        { tr: "Este vino es mejor que aquel." },
        { tr: "Es el peor día de la semana." },
        { tr: "Voy más a menudo a Roma que a Milán." },
        { tr: "Eres tan amable como tu madre." }
      ]
    },
    vocab: [
      "más… que",
      "menos… que",
      "tan… como",
      "mejor / peor",
      "el más… de",
      "paciente",
      "rápido / lento",
      "fácil / difícil",
      "joven / mayor",
      "igual",
      "distinto de",
      "sobre todo"
    ],
    exercises: [
      {
        q: "«Anna è più alta ___ Marco.»",
        opts: ["che", "di", "come"],
        why: "Dos personas distintas comparadas en un mismo aspecto → di."
      },
      {
        q: "«È più simpatico ___ bello.»",
        opts: ["di", "che", "come"],
        why: "Dos cualidades de la misma persona → che."
      },
      {
        q: "Completa: «Sei più alto ___ me.»",
        why: "Después de di va el pronombre tónico: di me, di te, di lui."
      },
      { q: "Da el comparativo irregular de «buono»: ___" },
      {
        q: "«È il più bravo della classe» significa:",
        opts: ["Es mejor que la clase", "Es el mejor de la clase", "Es tan bueno como la clase"]
      },
      { q: "«Milán es más cara que Bolonia.»" },
      {
        q: "Completa con di o che.",
        tr: "Roma es más grande que Florencia, pero hablar italiano es más fácil que escribirlo."
      },
      { tr: "Este vino es mejor que aquel." },
      { tr: "Mi hermano es menos paciente que yo." },
      { tr: "Esta ciudad es más tranquila que Milán." }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Test",
    title: "Test de la unidad 8",
    objectives: ["comprobar los posesivos, la descripción de personas y los comparativos"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«mi madre» es:", opts: ["la mia madre", "mia madre", "mia la madre"] },
      { q: "«___ miei genitori abitano a Lodz.»" },
      { q: "«___ loro casa è nuova.»" },
      { q: "La frase correcta:", opts: ["È i capelli neri.", "Ha i capelli neri.", "Ha capelli neri."] },
      { q: "«Ha ___ occhi verdi.»" },
      { q: "«Simpatico» significa:", opts: ["cortés", "divertido, buena compañía", "comprensivo"] },
      { q: "«È più alta ___ me.»", opts: ["che", "di", "come"] },
      { q: "El comparativo de «cattivo»: ___" },
      { tr: "Mi hermana es más joven que yo y tiene el pelo rizado." },
      { tr: "En mi opinión es una persona muy amable." }
    ]
  },
  "unit:a1-u09": { title: "El tiempo libre", grammarNote: "fare/giocare/suonare · el tiempo · stare + gerundio" },
  "lesson:a1-u09-l1": {
    theme: "Tiempo libre",
    title: "Aficiones y planes",
    objectives: [
      "decir qué haces en tu tiempo libre",
      "distinguir fare, giocare y suonare",
      "proponer algo y responder a una propuesta"
    ],
    theory: [
      {
        h: "Tres verbos, tres terrenos distintos",
        list: [
          "<b>fare</b> + deporte individual o actividad: <em>faccio yoga, faccio una passeggiata, faccio nuoto</em>",
          "<b>giocare a</b> + juego o deporte de equipo: <em>gioco a calcio, gioco a carte, gioco a tennis</em>",
          "<b>suonare</b> + instrumento: <em>suono la chitarra, suono il pianoforte</em>"
        ]
      },
      {
        contrast: "Este reparto ya lo tienes hecho: el español distingue igual entre jugar al fútbol y tocar la guitarra, y usa hacer para el yoga. Es de las pocas lecciones donde puedes traducir palabra por palabra. Lo único que hay que memorizar es la preposición: <em>giocare <b>a</b> calcio</em>, como «jugar <b>al</b> fútbol»."
      },
      {
        h: "Proponer algo",
        p: "Las fórmulas habituales: <em>Ti va di…?</em> («¿te apetece…?»), <em>Che ne dici di…?</em> («¿qué te parece si…?»), <em>Andiamo a…?</em>. Las respuestas: <em>Volentieri!</em>, <em>Perché no?</em>, <em>Mi dispiace, non posso</em>."
      },
      {
        tip: "<em>Ti va</em> es impersonal como <em>mi piace</em>: <em>ti va un caffè?</em> («¿te apetece un café?»). Otra vez la cosa es el sujeto, igual que en «me apetece un café»."
      }
    ],
    grammar: {
      title: "Fare, giocare, suonare",
      table: {
        head: ["verbo", "con qué", "ejemplo"],
        rows: [
          ["fare", "deporte individual, actividad", "Faccio palestra tre volte a settimana."],
          ["giocare a", "juego, deporte de equipo", "Gioco a calcio il sabato."],
          ["suonare", "instrumento", "Suono il pianoforte da dieci anni."],
          ["andare a/in", "un sitio o una actividad", "Vado a ballare / in piscina."],
          ["ti va di + infinitivo", "una propuesta", "Ti va di andare al cinema?"]
        ]
      },
      examples: [
        { tr: "Los fines de semana doy un paseo por el centro." },
        { tr: "Juego al tenis con mi hermana." },
        { tr: "Toco la guitarra, pero mal." },
        { tr: "¿Te apetece ir al cine esta noche?" },
        { tr: "¡Con mucho gusto! ¿A qué hora?" },
        { tr: "Lo siento, esta noche no puedo." }
      ]
    },
    vocab: [
      "tiempo libre",
      "hacer deporte",
      "gimnasio",
      "piscina",
      "jugar al fútbol",
      "tocar la guitarra",
      "bailar",
      "leer un libro",
      "ver una serie",
      "¿te apetece…?",
      "con mucho gusto",
      "quizá en otra ocasión"
    ],
    exercises: [
      {
        q: "«___ la chitarra.» (toco la guitarra)",
        opts: ["Gioco", "Suono", "Faccio"],
        why: "Un instrumento pide suonare, nunca giocare."
      },
      { q: "«___ a calcio.» (juego al fútbol)", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "Completa: «___ yoga due volte a settimana.» (hago yoga)" },
      { q: "Completa: «___ va di andare al cinema?» (¿te apetece?)" },
      {
        q: "Relaciona el verbo con lo que va detrás.",
        pairs: ["carte", "il pianoforte", "una passeggiata", "piscina"]
      },
      { q: "«¿Te apetece ir al cine esta noche?»" },
      { q: "Completa.", tr: "Los sábados juego al tenis, los domingos toco la guitarra y doy un paseo." },
      {
        q: "Un amigo te propone salir.",
        setting: "Jueves por la noche, un mensaje de voz de un amigo.",
        lines: [
          { tr: "¡Eh! ¿Te apetece ir a un concierto el sábado?" },
          { tr: "Acepta con entusiasmo y pregunta a qué hora.", answerTr: "¡Con mucho gusto! ¿A qué hora?" },
          { tr: "A las nueve, pero quedamos a las ocho y media en la plaza." },
          { tr: "Confirma y despídete.", answerTr: "¡Perfecto, nos vemos allí!" }
        ]
      },
      { tr: "En mi tiempo libre voy al gimnasio y veo series." },
      { tr: "¿Te apetece dar un paseo por el centro?" }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Tiempo libre",
    title: "El tiempo y las estaciones",
    objectives: ["describir el tiempo que hace", "usar fare de forma impersonal", "relacionar el tiempo con tus planes"],
    theory: [
      {
        h: "El tiempo se hace, no es",
        p: "El italiano dice <em>fa caldo</em>, <em>fa freddo</em>, <em>fa bel tempo</em>. Es el uso <strong>impersonal</strong> de <em>fare</em>: sin sujeto, siempre tercera persona del singular. Y coincide con el español «hace calor», así que este punto lo tienes regalado."
      },
      {
        h: "Tres construcciones distintas",
        list: [
          "<b>fare</b> + sustantivo: <em>fa caldo, fa freddo, fa bel/brutto tempo</em>",
          "<b>c'è</b> + sustantivo: <em>c'è il sole, c'è vento, c'è nebbia</em>",
          "un verbo propio: <em>piove</em> (llueve), <em>nevica</em> (nieva)"
        ]
      },
      {
        contrast: "El paralelismo con el español es casi perfecto: <em>fa caldo</em> = «hace calor», <em>ho caldo</em> = «tengo calor», <em>c'è il sole</em> = «hay sol». Solo cambia el artículo, que el italiano pone (<em>c'è <b>il</b> sole</em>) y el español no. Aprovecha la coincidencia, pero no la extiendas: <em>sono caldo</em> no significa nada bueno."
      },
      {
        h: "Las estaciones",
        p: "<em>in primavera, in estate, in autunno, in inverno</em>. Los meses no llevan artículo tras <em>a</em> o <em>in</em>: <em>a gennaio</em>, <em>in luglio</em>, las dos formas valen."
      }
    ],
    grammar: {
      title: "El tiempo que hace",
      table: {
        head: ["construcción", "ejemplo", "en español"],
        rows: [
          ["fare", "Fa caldo. / Fa freddo.", "Hace calor. / Hace frío."],
          ["fare", "Fa bel tempo. / Fa brutto tempo.", "Hace buen / mal tiempo."],
          ["c'è", "C'è il sole. / C'è vento.", "Hay sol. / Hace viento."],
          ["un verbo", "Piove. / Nevica.", "Llueve. / Nieva."],
          ["grados", "Ci sono venti gradi.", "Hay veinte grados."],
          ["pregunta", "Che tempo fa?", "¿Qué tiempo hace?"]
        ]
      },
      examples: [
        { tr: "Hoy hace calor, vamos a la playa." },
        { tr: "En invierno en Milán hay niebla a menudo." },
        { tr: "Mañana llueve, nos quedamos en casa." },
        { tr: "¿Qué tiempo hace en Roma? — ¡Espléndido!" },
        { tr: "Tengo frío, cierra la ventana.", note: "de uno mismo: avere" },
        { tr: "La primavera es la mejor estación." }
      ]
    },
    vocab: [
      "¿qué tiempo hace?",
      "hace calor / frío",
      "hay sol",
      "llueve / nieva",
      "hace viento / hay niebla",
      "lluvia / nieve",
      "nubes",
      "grado",
      "primavera / verano",
      "otoño / invierno",
      "paraguas",
      "la previsión"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «hace calor» (del tiempo)?",
        opts: ["Sono caldo", "Fa caldo", "Ho caldo"],
        why: "«Ho caldo» es que tú tienes calor; del tiempo se dice fa caldo."
      },
      { q: "Completa: «___ il sole.» (hay sol)" },
      { q: "Completa: «Domani ___.» (mañana llueve)" },
      { q: "«Ho freddo» significa:", opts: ["Hace frío fuera", "Tengo frío", "Está refrescando"] },
      { q: "Relaciona.", pairs: ["nieva", "hay niebla", "mal tiempo", "paraguas"] },
      { q: "Completa la previsión.", tr: "Mañana hará frío y viento, y por la tarde lloverá." },
      { q: "«¿Qué tiempo hace en Roma?»" },
      { tr: "En invierno en Milán hay niebla a menudo." },
      { tr: "Hoy hace buen tiempo, hay veinticinco grados." },
      { tr: "¿Qué tiempo hace hoy? Frío y lluvia." }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Gramática básica",
    title: "Stare + gerundio",
    objectives: [
      "describir algo que está pasando ahora",
      "formar el gerundio",
      "saber cuándo NO se usa esta construcción"
    ],
    theory: [
      {
        h: "Lo que pasa en este momento",
        p: "<strong>Stare + gerundio</strong> subraya que algo ocurre <b>ahora mismo</b>: <em>Sto lavorando</em>. Es exactamente tu «estoy trabajando», con el mismo verbo (<em>stare</em> es el primo de «estar») y la misma lógica. El presente simple <em>lavoro</em> también vale, pero es general: «trabajo, tengo un empleo»."
      },
      {
        h: "Cómo se forma el gerundio",
        list: [
          "<b>-are → -ando</b>: parlare → parl<b>ando</b>",
          "<b>-ere → -endo</b>: prendere → prend<b>endo</b>",
          "<b>-ire → -endo</b>: dormire → dorm<b>endo</b>",
          "irregulares: <em>fare → facendo, dire → dicendo, bere → bevendo</em>"
        ]
      },
      {
        contrast: "El español reparte <b>-ando / -iendo</b> según la conjugación, y el italiano no: los verbos en <em>-ire</em> hacen <b>-endo</b>, no «-iendo». <em>Dormendo</em>, no «dormiendo». Es el único punto de la lección donde tu lengua te empuja al error."
      },
      {
        trap: "<b>Stare + gerundio no habla del futuro.</b> «Mañana veo a Ana» es <em>domani vedo Anna</em>, nunca «sto vedendo Anna domani». Aquí el español coincide con el italiano y te protege, al contrario que el inglés."
      },
      {
        h: "Los pronombres con esta construcción",
        p: "El pronombre puede ir delante de <em>stare</em> o pegado al gerundio: <em><b>ti</b> sto aspettando</em> = <em>sto aspettando<b>ti</b></em>. La primera es más frecuente al hablar. El español hace lo mismo con «te estoy esperando» / «estoy esperándote»."
      }
    ],
    grammar: {
      title: "Stare + gerundio",
      table: {
        head: ["persona", "stare", "ejemplo"],
        rows: [
          ["io", "sto", "Sto mangiando."],
          ["tu", "stai", "Che stai facendo?"],
          ["lui / lei", "sta", "Sta dormendo."],
          ["noi", "stiamo", "Stiamo uscendo adesso."],
          ["voi", "state", "State scherzando?"],
          ["loro", "stanno", "Stanno arrivando."]
        ]
      },
      examples: [
        { tr: "¿Qué estás haciendo? — Estoy estudiando." },
        { tr: "No puedo hablar, estoy conduciendo." },
        { tr: "Están llegando, espera cinco minutos." },
        { tr: "Te estoy esperando delante del bar." },
        { tr: "Estoy a punto de salir.", note: "stare per = estar a punto de" },
        { tr: "Mañana voy a Roma.", note: "el futuro: presente sin más" }
      ]
    },
    vocab: [
      "estar haciendo algo",
      "estar a punto de hacer algo",
      "ahora",
      "en este momento",
      "esperar",
      "conducir",
      "bromear",
      "llegar",
      "salir",
      "darse prisa",
      "un momento",
      "voy con retraso"
    ],
    exercises: [
      { q: "«Sto mangiando» significa:", opts: ["Normalmente como", "Estoy comiendo ahora", "Comeré"] },
      { q: "Forma el gerundio de «fare»: ___" },
      { q: "Forma el gerundio de «dormire»: ___" },
      { q: "Completa: «Loro ___ arrivando.»" },
      {
        q: "¿Cómo se dice «mañana veo a Ana»?",
        opts: ["Sto vedendo Anna domani", "Domani vedo Anna", "Sto per vedere Anna domani"],
        why: "Stare + gerundio no expresa futuro, igual que en español."
      },
      { q: "«No puedo hablar, estoy conduciendo.»" },
      { q: "Completa la llamada.", tr: "— ¿Qué estás haciendo? — Estoy saliendo de casa, llego en un minuto." },
      { tr: "Te estoy esperando delante del bar." },
      { tr: "Perdona, estoy a punto de entrar en una reunión." },
      { tr: "¿Qué estás haciendo? — Estoy estudiando italiano." }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Tiempo libre",
    title: "Cultura, cine y música",
    objectives: [
      "comprar una entrada y hablar de una película",
      "opinar sobre un libro, una película, un concierto",
      "usar las frases básicas para valorar algo"
    ],
    theory: [
      {
        h: "Valorarlo: mi è piaciuto",
        p: "De algo que te ha gustado se dice <em>mi è piaciuto</em> (masculino) o <em>mi è piaciuta</em> (femenino). Ya es el pasado de <em>piacere</em>: la explicación completa llega en A2, pero la frase es tan frecuente que conviene tenerla ahora. Fíjate en que la construcción es la tuya: «me ha gustado», con la cosa de sujeto."
      },
      {
        h: "Versión original",
        p: "El cine italiano está tradicionalmente doblado, igual que el español. Una sesión subtitulada se marca <strong>V.O.</strong> (versione originale) o <em>sottotitolato</em>. En las ciudades grandes las hay, pero hay que buscarlas."
      },
      {
        h: "Entradas",
        p: "<em>Un biglietto intero</em> (entrada normal), <em>ridotto</em> (reducida). La butaca numerada es lo habitual: <em>Che posto preferisce?</em>"
      },
      {
        tip: "La palabra <em>spettacolo</em> vale tanto para una sesión de cine como para una función de teatro. <em>Lo spettacolo delle 21</em> es la sesión de las nueve."
      }
    ],
    grammar: {
      title: "Opiniones y cultura",
      table: {
        head: ["función", "frase", "en español"],
        rows: [
          ["positivo", "Mi è piaciuto molto.", "Me ha gustado mucho."],
          ["negativo", "Non mi è piaciuto per niente.", "No me ha gustado nada."],
          ["recomendar", "Te lo consiglio.", "Te lo recomiendo."],
          ["aburrimiento", "Mi ha annoiato.", "Me ha aburrido."],
          ["entrada", "Due biglietti per lo spettacolo delle nove.", "Dos entradas para la sesión de las nueve."],
          ["pedir opinión", "Com'era?", "¿Qué tal estuvo?"]
        ]
      },
      examples: [
        { tr: "Anoche fui al cine." },
        { tr: "La película era en versión original." },
        { tr: "Me gustó mucho la banda sonora." },
        { tr: "Dos entradas reducidas, por favor." },
        { tr: "¿Qué género prefieres?" },
        { tr: "Te lo recomiendo de verdad." }
      ]
    },
    vocab: [
      "película",
      "sesión, función",
      "entrada normal / reducida",
      "versión original",
      "subtítulos",
      "director",
      "actor / actriz",
      "banda sonora",
      "concierto",
      "exposición",
      "recomendar",
      "¿qué tal estuvo?"
    ],
    culture: {
      title: "Con ojos italianos: el cine y el doblaje",
      text: "<p>Italia tiene una de las tradiciones de doblaje más fuertes del mundo, comparable a la española. Los <i>doppiatori</i> son nombres reconocidos, y algunos han sido durante décadas la voz italiana de una sola estrella de Hollywood.</p><p>El efecto secundario es el mismo que en España: los italianos entienden el inglés hablado peor que los escandinavos, criados con subtítulos. El streaming lo está cambiando.</p><p>Si estás aprendiendo italiano, el doblaje juega a tu favor: una película que ya conoces, en italiano, es práctica de escucha con una trama en la que no puedes perderte.</p>"
    },
    exercises: [
      {
        q: "¿Qué significa «V.O.» en una cartelera?",
        opts: ["Versión abreviada", "Versión original, normalmente subtitulada", "Versión infantil"]
      },
      { q: "Completa: «Mi è ___ molto il film.» (me ha gustado mucho)" },
      { q: "Completa: «Due biglietti ___, per favore.» (reducidas)" },
      { q: "Relaciona.", pairs: ["director", "banda sonora", "subtítulos", "exposición"] },
      { q: "«Me ha gustado mucho, te lo recomiendo.»" },
      {
        q: "«Lo spettacolo delle nove» es:",
        opts: ["La novena función", "La sesión de las nueve", "Nueve entradas"]
      },
      {
        q: "Completa el diálogo en la taquilla.",
        tr: "— Dos entradas para la sesión de las nueve. — ¿Normales o reducidas? — Una normal y una reducida."
      },
      { tr: "¿Qué tipo de películas prefieres?" },
      { tr: "Me gustó mucho el concierto, sobre todo la segunda parte." },
      { tr: "¿Te apetece ir a la exposición el domingo?" }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Test",
    title: "Test de la unidad 9",
    objectives: ["comprobar fare/giocare/suonare, el tiempo y stare + gerundio"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«___ la chitarra.»", opts: ["Gioco", "Suono", "Faccio"] },
      { q: "«___ a carte.»", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "«___ caldo oggi.» (hace calor)" },
      { q: "«___ il sole.»" },
      { q: "El gerundio de «bere»: ___" },
      { q: "«Loro ___ arrivando.»" },
      {
        q: "«Mañana voy a Roma»:",
        opts: ["Sto andando a Roma domani", "Domani vado a Roma", "Sto per Roma domani"]
      },
      { tr: "¿Te apetece dar un paseo?" },
      { tr: "Estoy saliendo, hace frío, cojo el paraguas." },
      { tr: "Los fines de semana juego al tenis y doy un paseo." }
    ]
  },
  "unit:a1-u10": {
    title: "Mirar atrás",
    grammarNote: "passato prossimo · contar algo · repaso de A1"
  },
  "lesson:a1-u10-l1": {
    theme: "El pasado",
    title: "Passato prossimo con avere",
    objectives: [
      "construir el pasado con avere",
      "formar el participio regular",
      "decir qué hiciste ayer"
    ],
    theory: [
      {
        h: "Un tiempo compuesto, dos piezas",
        p: "<strong>Passato prossimo</strong> = <em>avere</em> o <em>essere</em> en presente + el <b>participio pasado</b>. Es el pasado de todos los días en italiano, y cubre a la vez tu «he comido» y tu «comí»: un solo tiempo hace el trabajo de dos."
      },
      {
        contrast: "En español eliges entre «comí» y «he comido» según la distancia temporal. El italiano hablado del norte y del centro usa el passato prossimo para las dos cosas, incluidas las de hace años. El equivalente de «comí» (<em>mangiai</em>, el passato remoto) existe, pero en la conversación del norte no se oye; se ve en C1."
      },
      {
        h: "El participio regular",
        list: [
          "<b>-are → -ato</b>: parlare → parl<b>ato</b>",
          "<b>-ere → -uto</b>: credere → cred<b>uto</b>",
          "<b>-ire → -ito</b>: finire → fin<b>ito</b>"
        ]
      },
      {
        h: "La mayoría de los verbos van con avere",
        p: "Todo verbo <b>transitivo</b> (el que admite complemento directo: «he comido <i>algo</i>», «he visto <i>a alguien</i>») forma el passato prossimo con <em>avere</em>. El participio entonces <b>no cambia</b>: <em>Anna ha mangiato</em>, no «ha mangiata»."
      },
      {
        h: "Participios irregulares frecuentes",
        p: "Hay que memorizarlos, porque son de los verbos más usados: <em>fare → fatto</em>, <em>dire → detto</em>, <em>vedere → visto</em>, <em>prendere → preso</em>, <em>leggere → letto</em>, <em>scrivere → scritto</em>, <em>bere → bevuto</em>, <em>aprire → aperto</em>, <em>chiudere → chiuso</em>. Varios se parecen a los tuyos: hecho, dicho, visto, escrito, abierto."
      }
    ],
    grammar: {
      title: "Passato prossimo con avere",
      table: {
        head: ["persona", "avere", "participio", "forma entera"],
        rows: [
          ["io", "ho", "mangiato", "ho mangiato"],
          ["tu", "hai", "parlato", "hai parlato"],
          ["lui / lei", "ha", "visto", "ha visto"],
          ["noi", "abbiamo", "letto", "abbiamo letto"],
          ["voi", "avete", "finito", "avete finito"],
          ["loro", "hanno", "fatto", "hanno fatto"]
        ]
      },
      examples: [
        { tr: "Ayer comí una pizza fantástica." },
        { tr: "¿Viste la película anoche?" },
        { tr: "Hemos reservado una mesa para las ocho." },
        { tr: "No he entendido, ¿puedes repetir?" },
        { tr: "¿Qué hiciste el fin de semana?" },
        { tr: "Ya he pagado.", note: "«già» va entre avere y el participio" }
      ]
    },
    vocab: [
      "ayer",
      "anteayer",
      "la semana pasada",
      "el mes pasado",
      "hace dos días",
      "ya",
      "todavía no",
      "luego, después",
      "primero, antes",
      "hacer → hecho",
      "ver → visto",
      "decir → dicho"
    ],
    exercises: [
      {
        q: "¿De qué se compone el passato prossimo?",
        opts: [
          "Dos verbos en presente",
          "avere/essere + el participio pasado",
          "essere + el infinitivo"
        ]
      },
      { q: "El participio de «parlare»: ___" },
      { q: "El participio de «credere»: ___" },
      { q: "El participio de «finire»: ___" },
      { q: "Completa: «Ieri ___ una pizza.» (comí)" },
      { q: "Relaciona el verbo con su participio irregular.", pairs: ["fatto", "visto", "scritto", "preso"] },
      {
        q: "Completa el relato del fin de semana.",
        tr: "El sábado vi una película, luego cené fuera. El domingo no hice nada."
      },
      { q: "«No he entendido, ¿puedes repetir?»" },
      { tr: "La semana pasada visitamos Florencia." },
      { tr: "Anoche leí un libro muy interesante." }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "El pasado",
    title: "Passato prossimo con essere",
    objectives: [
      "reconocer los verbos que piden essere",
      "concordar el participio con el sujeto",
      "contar un viaje"
    ],
    theory: [
      {
        h: "Un grupo pequeño, pero muy frecuente",
        p: "Los verbos de <b>movimiento y de cambio de estado</b> forman el passato prossimo con <strong>essere</strong>: <em>andare, venire, arrivare, partire, uscire, entrare, tornare, salire, scendere, restare, rimanere, nascere, morire, diventare, essere, stare</em>. Más todos los reflexivos."
      },
      {
        contrast: "El español usa «haber» para absolutamente todos los verbos: «he ido», «he llegado», «me he levantado». No hay nada que transferir, y por eso este es el punto de A1 que más se resiste: hay que aprender la lista y, sobre todo, acordarse de ella al hablar deprisa."
      },
      {
        h: "El participio concuerda con el sujeto",
        p: "Esta es la diferencia clave: con <em>essere</em> el participio se comporta como un adjetivo. <em>Sono andat<b>o</b></em> (un hombre), <em>sono andat<b>a</b></em> (una mujer), <em>siamo andat<b>i</b></em> (grupo masculino o mixto), <em>sono andat<b>e</b></em> (solo mujeres). En español «hemos ido» no cambia nunca."
      },
      {
        h: "Cómo recordar qué verbo pide essere",
        p: "Una prueba práctica: si el verbo <b>no admite complemento directo</b> («he ido <i>qué</i>» no tiene sentido), lo normal es que pida essere. No es infalible (<em>dormire</em> va con avere), pero funciona casi siempre."
      },
      {
        trap: "Algunos verbos cambian de auxiliar al cambiar de sentido: <em>ho finito il lavoro</em> (he terminado el trabajo, transitivo, avere) frente a <em>il film è finito</em> (la película ha terminado, intransitivo, essere). Lo mismo con <em>cambiare, passare, cominciare</em>."
      }
    ],
    grammar: {
      title: "Passato prossimo con essere",
      table: {
        head: ["sujeto", "forma", "ejemplo"],
        rows: [
          ["un hombre", "sono andato", "Sono andato a Roma."],
          ["una mujer", "sono andata", "Sono andata a Roma."],
          ["grupo (m/mixto)", "siamo andati", "Siamo andati insieme."],
          ["grupo (solo mujeres)", "siamo andate", "Siamo andate insieme."],
          ["reflexivo", "mi sono alzato/a", "Mi sono alzata alle sei."],
          ["irregular", "sono nato/a", "Sono nata a Varsavia."]
        ]
      },
      examples: [
        { tr: "Salí a las siete de la mañana." },
        { tr: "Llegamos tarde." },
        { tr: "Marco nació en 1990." },
        { tr: "Nos lo pasamos muy bien." },
        { tr: "La película terminó a las once." },
        { tr: "Terminé el trabajo a las seis.", note: "transitivo → avere" }
      ]
    },
    vocab: [
      "ir → ido",
      "venir → venido",
      "llegar",
      "salir, partir",
      "volver",
      "salir (de casa)",
      "entrar",
      "nacer",
      "quedarse",
      "convertirse en",
      "pasarlo bien",
      "viaje"
    ],
    exercises: [
      {
        q: "¿Qué tiene de particular el participio con essere?",
        opts: ["No cambia nunca", "Concuerda con el sujeto como un adjetivo", "Siempre acaba en -o"]
      },
      { q: "Una mujer que dice «salí»:", opts: ["sono partito", "sono partita", "ho partito"] },
      { q: "Completa para un grupo de mujeres: «Loro sono ___ ieri.» (llegaron)" },
      { q: "El participio de «nascere» (masculino): ___" },
      {
        q: "¿Qué verbos forman el passato prossimo con essere?",
        opts: ["andare", "mangiare", "partire", "vedere", "nascere"]
      },
      {
        q: "«Il film ___ alle undici.» (terminó)",
        opts: ["ha finito", "è finito", "sono finito"],
        why: "Aquí «finire» es intransitivo (la película terminó sola) → essere."
      },
      {
        q: "Completa el relato del viaje (habla una mujer).",
        tr: "Salí el viernes y llegué a Nápoles por la noche. Me lo pasé muy bien."
      },
      { tr: "Llegamos tarde." },
      { tr: "Nací en Varsovia, pero crecí en Cracovia." },
      { tr: "Ayer fui al cine con un amigo." }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "El pasado",
    title: "Contar algo del pasado",
    objectives: [
      "encadenar frases en un relato breve",
      "usar las expresiones de tiempo que ordenan el relato",
      "preguntar a alguien por su fin de semana"
    ],
    theory: [
      {
        h: "Un relato necesita un esqueleto temporal",
        p: "Los verbos solos no hacen un relato. Hacen falta conectores: <em>prima</em> (primero), <em>poi</em> (luego), <em>dopo</em> (después), <em>alla fine</em> (al final), <em>mentre</em> (mientras). Sin ellos las frases quedan una al lado de otra, como una lista."
      },
      {
        h: "Preguntas sobre el pasado",
        p: "<em>Che cosa hai fatto?</em>, <em>Dove sei andato/a?</em>, <em>Con chi sei uscito/a?</em>, <em>Com'è andata?</em> («¿qué tal fue?»). Esta última es muy común para abrir conversación."
      },
      {
        h: "Già y ancora van dentro",
        p: "Los adverbios <em>già</em> (ya), <em>ancora</em> (todavía), <em>appena</em> (acabar de), <em>mai</em> (nunca) van <b>entre el auxiliar y el participio</b>: <em>ho <b>già</b> mangiato</em>, <em>non sono <b>mai</b> stata a Venezia</em>. El español hace lo mismo: «ya he comido», «nunca he estado»."
      },
      {
        tip: "Una manera natural de responder: no lo cuentes todo. Un italiano contesta breve (<em>Niente di che, sono stato a casa</em>) y solo se extiende si le preguntan."
      }
    ],
    grammar: {
      title: "Conectores y preguntas sobre el pasado",
      table: {
        head: ["función", "expresión", "ejemplo"],
        rows: [
          ["secuencia", "prima… poi… alla fine", "Prima ho lavorato, poi sono uscito."],
          ["a la vez", "mentre", "Mentre aspettavo, ho letto."],
          ["pregunta", "Che cosa hai fatto?", "¿Qué has hecho?"],
          ["pregunta", "Com'è andata?", "¿Qué tal fue?"],
          ["ya", "già (dentro)", "Ho già finito."],
          ["nunca", "non… mai (dentro)", "Non sono mai stato in Sicilia."]
        ]
      },
      examples: [
        { tr: "El sábado por la mañana hice la compra en el mercado." },
        { tr: "Luego fui al gimnasio." },
        { tr: "Por la noche salimos con amigos." },
        { tr: "Al final llegamos tarde a casa." },
        { tr: "¿Qué tal fue la reunión? — No mal." },
        { tr: "Todavía no he terminado." }
      ]
    },
    vocab: [
      "primero",
      "luego",
      "después",
      "al final",
      "mientras",
      "¿qué tal fue?",
      "nada especial",
      "un desastre",
      "fue divertido",
      "hacer la compra",
      "ir de compras (ropa)",
      "descansar"
    ],
    exercises: [
      {
        q: "¿Dónde va «già» en el passato prossimo?",
        opts: ["Delante de avere", "Entre avere y el participio", "Al final de la frase"],
        why: "Ho già mangiato: el adverbio va dentro, igual que en «ya he comido»."
      },
      { q: "Completa: «Non sono ___ stata a Venezia.» (nunca)" },
      { q: "Completa: «___ ho lavorato, poi sono uscito.» (primero)" },
      {
        q: "«Com'è andata?» pregunta por:",
        opts: ["por dónde fuiste", "qué tal salió algo", "cómo te encuentras ahora"]
      },
      {
        q: "Completa el relato.",
        tr: "El sábado hice la compra, luego fui al gimnasio, y por la noche salimos con amigos."
      },
      { q: "«Todavía no he terminado.»" },
      { tr: "Al final llegamos tarde a casa." },
      {
        q: "Lunes por la mañana en el trabajo.",
        setting: "La cocina de la oficina, junto a la máquina de café.",
        lines: [
          { tr: "¡Eh! ¿Qué tal el fin de semana?" },
          { tr: "Di que nada especial, te quedaste en casa.", answerTr: "Nada especial, me quedé en casa." },
          { tr: "Yo fui a la montaña. ¡Precioso!" },
          { tr: "Pregunta con quién fue.", answerTr: "¿Con quién fuiste?" }
        ]
      },
      { tr: "Primero hice la compra, luego descansé." },
      { tr: "¿Qué tal fue? — Bien, fue divertido." }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Repaso",
    title: "Repaso de todo el nivel",
    objectives: [
      "juntar todo lo de A1",
      "comprobar si estás listo para A2",
      "encontrar tus propias lagunas"
    ],
    theory: [
      {
        h: "Lo que ya deberías saber hacer",
        list: [
          "presentarte, decir de dónde eres, a qué te dedicas y cuántos años tienes",
          "pedir en un bar y en un restaurante, comprar, preguntar un precio",
          "hablar de tu día, de la hora y de tus costumbres",
          "preguntar por una dirección y entender la respuesta",
          "describir a una persona: físico y carácter",
          "contar brevemente qué hiciste ayer y el fin de semana"
        ]
      },
      {
        h: "La gramática que tiene que estar firme",
        p: "Las tres conjugaciones en presente, <em>essere</em>, <em>avere</em>, <em>fare</em>, <em>andare</em>, <em>venire</em>, <em>stare</em>, los verbos modales, los artículos determinados e indeterminados, el género y el número, los adjetivos, las preposiciones articuladas, los verbos reflexivos, <em>piacere</em>, <em>c'è / ci sono</em> y las bases del passato prossimo."
      },
      {
        h: "Lo que espera en A2",
        p: "El imperfetto y su diferencia con el passato prossimo, el futuro simple, el condicional, los pronombres de complemento directo e indirecto, el imperativo completo, <em>ci</em> y <em>ne</em> en más contextos, y las situaciones de viaje, del médico y del hotel."
      },
      {
        tip: "Si sacas menos del 70 % en este repaso, no sigas. A2 se apoya directamente en estas estructuras, y una laguna de A1 se convierte allí en un muro."
      }
    ],
    vocab: [
      "repasar",
      "ejercicio",
      "error",
      "regla",
      "nivel",
      "mejorar",
      "estoy listo",
      "puedo con esto"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Artículos determinados:", items: [, , , , ] },
      {
        q: "Completa la presentación.",
        tr: "Me llamo Kasia, soy polaca y vivo en Bolonia desde hace dos años. Soy profesora."
      },
      { q: "«Mi ___ gli spaghetti.» (me gustan los espaguetis)" },
      { q: "«Vado ___ cinema.» (a + il)" },
      { q: "«Ieri ___ una pizza.» (comí)" },
      { q: "«Ieri ___ al cinema.» (fui, una mujer)" },
      { tr: "Anoche fuimos a un restaurante con amigos." },
      { tr: "Me desperté temprano y desayuné en un bar." },
      { tr: "Me llamo Anna, soy polaca y vivo en Florencia desde hace un año." }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Examen",
    title: "Examen final de A1",
    objectives: ["comprobar que estás listo para pasar a A2"],
    theory: [
      {
        p: "Doce preguntas de todo el nivel. Se aprueba con un 70 %. Una nota por debajo significa volver a las unidades donde fallas, no a todas."
      }
    ],
    exercises: [
      {  },
      { q: "Entras en una tienda a las seis de la tarde:", opts: ["Buongiorno", "Buonasera", "Buonanotte"] },
      { q: "Artículos:", items: [, , , ] },
      { q: "«Non mi ___ il pesce crudo.»" },
      { q: "«Devo ___ presto domani.» (levantarme, alzarsi)" },
      { q: "«___ le tre e mezza.»" },
      { q: "«Abito ___ Italia.»" },
      { q: "«___ un tavolo libero?»" },
      { q: "«È più simpatico ___ bello.»", opts: ["di", "che", "come"] },
      { q: "«Ieri ___ al cinema.» (fuimos)" },
      {
        q: "Completa.",
        tr: "El sábado hice la compra, luego fui al gimnasio, y por la noche salí con amigos."
      },
      { tr: "Buenas tardes, querría reservar una mesa para dos a las ocho." }
    ]
  }
});
