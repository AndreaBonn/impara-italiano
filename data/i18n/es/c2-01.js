/* ============================================================
   Texto en la lengua del estudiante (es) para data/core/c2-01.js
   Las claves apuntan a los id de la capa neutra; los arrays se
   combinan por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c2-u01": {
    title: "Participios y perífrasis verbales",
    grammarNote: "participio presente y pasado · perifrasi verbali · formas implícitas"
  },
  "lesson:c2-u01-l1": {
    theme: "Gramática superior",
    title: "El participio presente: tres vidas",
    objectives: [
      "distinguir el uso adjetival, el nominal y el verbal",
      "reconocer el participio presente en los textos jurídicos",
      "no abusar de él al hablar"
    ],
    theory: [
      {
        h: "Casi muerto como verbo, muy vivo como vocabulario",
        p: "El participio presente en <em>-ante / -ente</em> ha perdido su función verbal en el italiano moderno, pero ha dejado cientos de adjetivos y sustantivos: <em>brillante, interessante, insegnante, cantante, dirigente, presidente, studente</em>. Todos son antiguos participios."
      },
      {
        contrast: "Tu lengua ha recorrido el mismo camino y en el mismo grado: estudiante, cantante, dirigente, presidente también son participios de presente fosilizados, y el uso verbal también sobrevive solo en el registro jurídico («el dinero proveniente de», «los solicitantes»). Incluso <em>gli aventi diritto</em> tiene término exacto en tu derecho, «los derechohabientes». Aquí lees casi sin traducir."
      },
      {
        h: "El uso verbal: derecho y administración",
        p: "<em>Il denaro <b>derivante</b> dalle offerte sarà investito.</em> Aquí <em>derivante</em> sustituye a una oración de relativo, <em>che deriva</em>. La construcción sobrevive en la escritura jurídica, técnica y científica; en cualquier otro sitio suena artificial."
      },
      {
        h: "Cómo leerlo",
        p: "Cuando te encuentres un <em>-ante/-ente</em> en un texto jurídico, conviértelo en relativo sobre la marcha: <em>i soggetti <b>richiedenti</b></em> = <em>i soggetti che richiedono</em>. Es la manera más rápida de desmontar una frase administrativa larga."
      },
      {
        trap: "No toda palabra en <em>-ente</em> es un participio. <em>Paziente</em>, <em>presente</em>, <em>parente</em> son hoy sustantivos o adjetivos por derecho propio y no se dejan desmontar en un relativo. Ojo además con <em>parente</em>, que significa familiar y no «pariente político»."
      }
    ],
    grammar: {
      title: "Participio presente",
      table: {
        head: ["forma", "uso", "ejemplo"],
        rows: [
          ["brillante", "adjetivo", "una carriera brillante"],
          ["insegnante", "sustantivo", "un'insegnante di liceo"],
          ["derivante", "verbal", "il denaro derivante dalle offerte"],
          ["richiedente", "sustantivo + verbal", "i soggetti richiedenti"],
          ["seguente", "adjetivo", "il giorno seguente"],
          ["proveniente", "verbal", "merci provenienti dall'estero"]
        ]
      },
      examples: [
        { tr: "Deben adjuntarse los documentos acreditativos del requisito." },
        { tr: "Los importes resultantes del balance han sido comprobados." },
        { tr: "Un discurso convincente, pero sin cifras." },
        { tr: "Los pasajeros procedentes del extranjero deben rellenar el impreso." },
        { tr: "Fue una elección perdedora desde el principio." },
        { tr: "Los derechohabientes recibirán una notificación.", note: "«aventi diritto» es una fórmula jurídica fija" }
      ]
    },
    vocab: [
      "acreditativo, que acredita",
      "resultante",
      "procedente de",
      "solicitante",
      "derechohabiente",
      "convincente",
      "siguiente",
      "anterior",
      "vigente",
      "requisito",
      "balance, presupuesto",
      "carente de"
    ],
    exercises: [
      {
        q: "«Il denaro derivante dalle offerte» se puede sustituir por:",
        opts: ["il denaro che deriva dalle offerte", "il denaro derivato", "il denaro per derivare"]
      },
      { q: "«Gli aventi diritto» son:", opts: ["los que tienen razón", "los derechohabientes", "los propietarios"] },
      {
        q: "Conviértelo en relativo: «i passeggeri provenienti dall'estero» → «i passeggeri ___ provengono dall'estero»"
      },
      { q: "Relaciona.", pairs: ["acreditativo", "resultante", "vigente", "carente de"] },
      {
        q: "¿En qué registro sigue siendo verbal el participio presente?",
        opts: ["en el habla coloquial", "en los textos jurídicos y técnicos", "en la poesía"]
      },
      {
        q: "¿Cuáles vienen de un participio presente?",
        opts: ["insegnante", "tavolo", "cantante", "dirigente"]
      },
      {
        q: "Completa el texto administrativo.",
        tr: "Los solicitantes adjuntan a la instancia los documentos acreditativos del requisito."
      },
      { q: "«Los importes resultantes del balance han sido comprobados.»" },
      { tr: "Los derechohabientes recibirán una notificación en el plazo de treinta días." },
      { tr: "Un discurso convincente, pero sin cifras concretas." }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Gramática superior",
    title: "El participio pasado en las subordinadas reducidas",
    objectives: [
      "construir una construcción absoluta con participio",
      "mantener bien la concordancia del participio",
      "comprimir el texto escrito"
    ],
    theory: [
      {
        h: "La construcción absoluta",
        p: "<em><b>Finita la riunione</b>, siamo usciti.</em> Un participio pasado con sustantivo propio forma una subordinada reducida de valor temporal o causal. El sustantivo va <b>detrás</b> del participio, y el participio concuerda con él en género y número."
      },
      {
        contrast: "Es tu construcción absoluta al pie de la letra: «terminada la reunión, salimos», «leído el contrato, firmé», «vista la situación». Coinciden hasta el orden de palabras, la concordancia y el registro administrativo en que más vive. De todo el nivel C2 este es el punto que menos trabajo te va a costar."
      },
      {
        h: "Con verbos transitivos e intransitivos",
        p: "Transitivo: <em>Letto il contratto, ho firmato.</em> Intransitivo con <em>essere</em>: <em>Partito il treno, siamo tornati a casa.</em> La concordancia es obligatoria en los dos casos."
      },
      {
        h: "Refuerzos",
        p: "<em>Una volta finita la riunione…</em>, <em>Appena arrivati…</em>, <em>Terminati i lavori…</em>. Añadir <em>una volta</em> o <em>appena</em> fija la relación temporal y suena más natural, igual que tu «una vez terminada»."
      },
      {
        trap: "La construcción absoluta exige que su sujeto sea <b>distinto</b> del sujeto de la principal, o que sea un objeto. <em>Finito il lavoro, sono uscito</em> vale, porque <em>il lavoro</em> no es el sujeto de la principal."
      }
    ],
    grammar: {
      title: "Participio assoluto",
      table: {
        head: ["construcción", "equivalente completo", "valor"],
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
        { tr: "Vista la urgencia, seguimos adelante sin esperar." },
        { tr: "Una vez terminadas las obras, se reabrió la calle." },
        { tr: "Una vez recibida la confirmación, podrá marcharse." },
        { tr: "Hechas las comprobaciones oportunas, se estimó la solicitud." },
        { tr: "Una vez allí, nos dimos cuenta del error." },
        { tr: "Excluidos los costes fijos, el balance es positivo." }
      ]
    },
    vocab: [
      "vista la urgencia",
      "terminar, concluir",
      "reabrir",
      "estimar una solicitud",
      "las comprobaciones oportunas",
      "excluir",
      "destino",
      "advertir, darse cuenta",
      "una vez + participio",
      "en cuanto + participio",
      "premisa, condición previa",
      "con carácter previo"
    ],
    exercises: [
      { q: "Acierta la concordancia: «Terminat___ i lavori, la strada è stata riaperta.»" },
      { q: "Acierta la concordancia: «Finit___ la riunione, siamo usciti.»" },
      { q: "«Vista la situazione» tiene:", opts: ["valor temporal", "valor causal", "valor condicional"] },
      {
        q: "¿Dónde va el sustantivo en una construcción absoluta?",
        opts: ["delante del participio", "detrás del participio", "al final de la frase"]
      },
      {
        q: "Construye las absolutas.",
        tr: "Leído el contrato, firmé. Excluidos los costes fijos, el balance es positivo."
      },
      { q: "«Una vez recibida la confirmación, podrá marcharse.»" },
      { tr: "Una vez allí, nos dimos cuenta del error." },
      {
        q: "¿Por qué añadir «una volta» delante del participio?",
        opts: ["por ritmo", "para fijar la relación temporal", "porque lo exige la gramática"]
      },
      { tr: "Hechas las comprobaciones oportunas, se estimó la solicitud." },
      { tr: "Vista la urgencia, seguimos adelante sin esperar más confirmaciones." }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Gramática superior",
    title: "Las perífrasis verbales",
    objectives: [
      "reconocer las perífrasis aspectuales, modales y de gerundio",
      "precisar la fase de una acción",
      "usar va + participio y ho da + infinitivo"
    ],
    theory: [
      {
        h: "Una perífrasis añade un aspecto que el tiempo no lleva",
        p: "El italiano no tiene formas propias para «estoy a punto de empezar», «estoy terminando», «va creciendo poco a poco». Las perífrasis hacen ese trabajo: <em>sto per partire</em>, <em>sto finendo</em>, <em>va crescendo</em>."
      },
      {
        h: "Aspectuales",
        list: [
          "<em>stare per + infinitivo</em> — estar a punto de",
          "<em>essere sul punto di</em> — estar en el punto de",
          "<em>accingersi a</em> — disponerse a (registro alto)",
          "<em>cominciare / iniziare a</em>, <em>continuare / seguitare a</em>, <em>smettere / finire di</em>",
          "<em>stare + gerundio</em> — en curso"
        ]
      },
      {
        contrast: "Casi toda la lista es tuya: «estar a punto de», «disponerse a», «empezar a», «seguir + gerundio». Y sobre todo <em>va crescendo</em> es tu «va creciendo», con el mismo verbo de movimiento y el mismo matiz de progresión gradual. Justo por eso hay que separar bien los dos usos de <em>andare</em>: <em>va crescendo</em> es progresión y lo reconoces, <em>va rivisto</em> es obligación y no tiene equivalente con «ir»."
      },
      {
        h: "Modales",
        p: "<em>Il compito <b>va</b> rivisto</em> (hay que revisarlo), <em><b>Ho da</b> studiare</em> (tengo que estudiar), <em><b>C'è da</b> aspettare</em> (hay que esperar), <em><b>Sarebbe da</b> rifare</em> (habría que rehacerlo)."
      },
      {
        h: "La de gerundio en la escritura",
        p: "<em>Il fenomeno <b>va crescendo</b></em> es <em>andare</em> + gerundio, propia del registro escrito. No la confundas con <em>va rivisto</em>, donde <em>andare</em> lleva obligación: son dos perífrasis distintas con el mismo verbo."
      }
    ],
    grammar: {
      title: "Catálogo de perífrasis",
      table: {
        head: ["tipo", "construcción", "significado"],
        rows: [
          ["aspectual", "sto per partire", "estoy a punto de salir"],
          ["aspectual", "sono sul punto di rinunciare", "estoy a punto de renunciar"],
          ["aspectual", "mi accingo a rispondere", "me dispongo a responder"],
          ["progresiva", "sto scrivendo", "estoy escribiendo ahora"],
          ["progresiva", "il fenomeno va crescendo", "el fenómeno va creciendo"],
          ["modal", "il testo va rivisto", "hay que revisar el texto"],
          ["modal", "ho da fare", "tengo cosas que hacer"],
          ["modal", "c'è da aspettare", "hay que esperar"]
        ]
      },
      examples: [
        { tr: "Estoy a punto de salir, te llamo luego." },
        { tr: "Estaba a punto de renunciar cuando llegó la respuesta." },
        { tr: "El número de solicitudes va aumentando mes a mes." },
        { tr: "Este capítulo hay que reescribirlo entero." },
        { tr: "Todavía queda mucho por hacer antes del plazo." },
        { tr: "Me dispongo ahora a presentar los resultados." }
      ]
    },
    vocab: [
      "estar a punto de",
      "estar en el punto de",
      "disponerse a",
      "proseguir (literario)",
      "ir sucediendo poco a poco",
      "haber que hacerse",
      "tener que hacer",
      "haber que hacer",
      "renunciar",
      "exponer, presentar",
      "por entero",
      "mes a mes"
    ],
    exercises: [
      {
        q: "«Il testo va rivisto» significa:",
        opts: ["el texto va revisado", "hay que revisar el texto", "el texto se está revisando"]
      },
      {
        q: "«Il fenomeno va crescendo» significa:",
        opts: ["hay que aumentar el fenómeno", "el fenómeno va creciendo", "el fenómeno va a crecer"]
      },
      { q: "Completa: «___ per uscire, ti richiamo dopo.» (estoy a punto de salir)" },
      { q: "Completa: «C'è ancora molto ___ fare.» (por hacer)" },
      { q: "Relaciona.", pairs: ["disponerse a", "estar en el punto de", "tener que hacer", "proseguir"] },
      {
        q: "¿En qué se diferencian «va rivisto» y «va crescendo»?",
        opts: ["En nada", "El primero lleva obligación, el segundo una progresión gradual", "El primero es un futuro"]
      },
      { q: "Completa las perífrasis.", tr: "Estaba a punto de renunciar, pero el número de solicitudes va aumentando." },
      { q: "«Este capítulo hay que reescribirlo entero.»" },
      { tr: "Me dispongo ahora a presentar los resultados del estudio." },
      { tr: "Estaba a punto de renunciar cuando llegó la respuesta." }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Test",
    title: "Test de la unidad 1",
    objectives: ["comprobar los participios y las perífrasis verbales"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Gli aventi diritto»:", opts: ["los que tienen razón", "los derechohabientes", "los propietarios"] },
      { q: "«i passeggeri provenienti dall'estero» → «i passeggeri ___ provengono…»" },
      { q: "Concordancia: «Terminat___ i lavori…»" },
      { q: "Concordancia: «Finit___ la riunione…»" },
      { q: "«Vista la situazione» tiene:", opts: ["valor temporal", "valor causal", "valor condicional"] },
      { q: "«Il testo va rivisto»:", opts: ["va revisado", "hay que revisarlo", "se está revisando"] },
      { q: "«Il fenomeno va crescendo»:", opts: ["hay que aumentarlo", "va creciendo", "crecerá"] },
      { q: "«C'è molto ___ fare.»" },
      { tr: "Hechas las comprobaciones oportunas, el proyecto todavía hay que revisarlo." },
      { tr: "Una vez recibida la confirmación, seguiremos adelante sin demora." }
    ]
  },
  "unit:c2-u02": {
    title: "Plurales y formación de palabras",
    grammarNote: "plurales dobles · compuestos · alteración · adjetivos cultos"
  },
  "lesson:c2-u02-l1": {
    theme: "Vocabulario avanzado",
    title: "El plural doble",
    objectives: [
      "distinguir los dos plurales de un mismo sustantivo",
      "elegir el correcto según el significado",
      "evitar los descuidos habituales"
    ],
    theory: [
      {
        h: "Un singular, dos plurales",
        p: "Una docena larga de sustantivos masculinos tienen dos plurales: uno regular en <em>-i</em> (masculino) y otro irregular en <em>-a</em> (femenino). La diferencia no es de estilo: son dos significados distintos."
      },
      {
        contrast: "El español no tiene esta alternancia, y hace las mismas distinciones con palabras diferentes: «muros» frente a «murallas», «huesos» frente a «huesos» sin distinguir. La única pareja que sí tienes es <em>la frutta</em> / <em>i frutti</em>, tu «la fruta» frente a «los frutos», colectivo comestible frente a resultados. Úsala como ancla y trata el resto como vocabulario nuevo."
      },
      {
        h: "La regla general",
        p: "La forma femenina en <em>-a</em> suele significar <b>el conjunto, lo colectivo o el sentido corporal literal</b>; la masculina en <em>-i</em> significa <b>los elementos sueltos o el sentido figurado</b>."
      },
      {
        h: "Las parejas que importan",
        list: [
          "<em>l'osso</em> → <b>le ossa</b> (el esqueleto humano) / <b>gli ossi</b> (huesos sueltos, los que se le dan al perro)",
          "<em>il braccio</em> → <b>le braccia</b> (los brazos del cuerpo) / <b>i bracci</b> (los brazos de una grúa, de un río)",
          "<em>il muro</em> → <b>le mura</b> (las murallas) / <b>i muri</b> (las paredes de una habitación)",
          "<em>il filo</em> → <b>le fila</b> (los hilos de un discurso, los contactos) / <b>i fili</b> (los cables)",
          "<em>il frutto</em> → <b>i frutti</b> (los frutos, resultados) / <b>la frutta</b> (la fruta, colectivo)",
          "<em>il dito</em> → <b>le dita</b> (los dedos de una mano en conjunto) / <b>i diti</b> (raro, sueltos)",
          "<em>il lenzuolo</em> → <b>le lenzuola</b> (el juego de sábanas) / <b>i lenzuoli</b> (sábanas sueltas)"
        ]
      }
    ],
    grammar: {
      title: "Plurales dobles",
      table: {
        head: ["singular", "forma en -a", "forma en -i"],
        rows: [
          ["l'osso", "le ossa (el esqueleto)", "gli ossi (huesos sueltos)"],
          ["il braccio", "le braccia (del cuerpo)", "i bracci (de una grúa, de un río)"],
          ["il muro", "le mura (las murallas)", "i muri (las paredes)"],
          ["il filo", "le fila (los hilos de un discurso)", "i fili (los cables)"],
          ["il frutto", "la frutta (la fruta)", "i frutti (los resultados)"],
          ["il dito", "le dita (los dedos)", "i diti (raro)"],
          ["il lenzuolo", "le lenzuola (el juego de sábanas)", "i lenzuoli (sábanas sueltas)"],
          ["il ciglio", "le ciglia (las pestañas)", "i cigli (los bordes de la carretera)"]
        ]
      },
      examples: [
        { tr: "Me duelen los huesos." },
        { tr: "El perro está royendo los huesos." },
        { tr: "Las murallas de la ciudad son medievales." },
        { tr: "Las paredes de la casa son finas." },
        { tr: "Recogió los frutos de su trabajo." },
        { tr: "En la comida siempre tomo fruta." }
      ]
    },
    vocab: [
      "huesos (esqueleto) / huesos sueltos",
      "brazos (del cuerpo) / brazos (de una grúa)",
      "murallas / paredes",
      "hilos de un discurso / cables",
      "fruta (alimento) / frutos (resultados)",
      "dedos",
      "pestañas / bordes de la carretera",
      "juego de sábanas",
      "roer",
      "medieval",
      "mover los hilos",
      "recoger los frutos"
    ],
    exercises: [
      { q: "«Mi fanno male ___.» (me duelen los huesos)", opts: ["gli ossi", "le ossa", "i ossi"] },
      {
        q: "«___ della città sono medievali.» (las murallas)",
        opts: ["I muri", "Le mura", "I muri della"]
      },
      { q: "Completa: «Ha raccolto ___ del suo lavoro.» (los frutos, resultados)" },
      { q: "Completa: «A pranzo mangio sempre ___.» (fruta, alimento)" },
      { q: "Relaciona la forma con el significado.", pairs: ["brazos del cuerpo", "brazos de una grúa", "hilos", "cables"] },
      {
        q: "«Tirare le fila» significa:",
        opts: ["tirar de los hilos", "mover los hilos, llevar la batuta", "desenredar"]
      },
      { q: "Completa las formas.", tr: "Las murallas de la ciudad son antiguas, pero las paredes de mi casa son finas." },
      { q: "«El perro está royendo los huesos.»" },
      { tr: "Tenía los dedos helados y me dolían los huesos." },
      { tr: "Por fin ha recogido los frutos de su trabajo." }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Vocabulario avanzado",
    title: "Los compuestos y sus plurales",
    objectives: [
      "formar el plural de un sustantivo compuesto",
      "reconocer el tipo de compuesto",
      "evitar los descuidos más frecuentes"
    ],
    theory: [
      {
        h: "Cuatro patrones",
        list: [
          "<b>invariable</b>: <em>il doposcuola → i doposcuola</em>, <em>il portacenere → i portacenere</em>",
          "<b>cambia el segundo elemento</b>: <em>il cavolfiore → i cavolfiori</em>, <em>il capolavoro → i capolavori</em>, <em>l'asciugamano → gli asciugamani</em>",
          "<b>cambia el primero</b>: <em>il capofamiglia → i capifamiglia</em>, <em>il fico d'India → i fichi d'India</em>",
          "<b>cambian los dos</b>: <em>la cassaforte → le casseforti</em>, <em>il bassofondo → i bassifondi</em>"
        ]
      },
      {
        contrast: "Dos de los cuatro patrones ya los tienes: el invariable de tu «los abrelatas» y el de doble cambio de «las cajas fuertes», que es <em>le casseforti</em> pieza por pieza. El de <em>capo-</em> lo esquivas con una preposición, «los jefes de estación», así que el italiano <em>i capistazione</em> te resultará extraño aunque haga lo mismo: pluralizar el núcleo."
      },
      {
        h: "Una regla práctica para «capo-»",
        p: "Cuando <em>capo</em> significa <b>la persona al mando</b>, es esa parte la que pluraliza: <em>i capistazione, i capireparto, i capifamiglia</em>. Cuando <em>capo</em> significa <b>lo mejor o el inicio de algo</b>, cambia el segundo elemento: <em>i capolavori, i capoluoghi</em>."
      },
      {
        h: "Verbo + sustantivo",
        p: "Compuestos como <em>portacenere, apriscatole, spazzaneve, salvagente</em> suelen ser <b>invariables</b>, porque el primer elemento es una forma verbal. Hay excepciones, pero la invariabilidad es la opción segura, igual que en tu «los sacacorchos»."
      }
    ],
    grammar: {
      title: "Plurales de los compuestos",
      table: {
        head: ["tipo", "singular", "plural"],
        rows: [
          ["verbo + sustantivo", "il portacenere", "i portacenere"],
          ["verbo + sustantivo", "l'apriscatole", "gli apriscatole"],
          ["capo (persona)", "il capostazione", "i capistazione"],
          ["capo (lo mejor)", "il capolavoro", "i capolavori"],
          ["sustantivo + sustantivo", "il cavolfiore", "i cavolfiori"],
          ["sustantivo + adjetivo", "la cassaforte", "le casseforti"],
          ["adjetivo + sustantivo", "il bassofondo", "i bassifondi"],
          ["con preposición", "il fico d'India", "i fichi d'India"]
        ]
      },
      examples: [
        { tr: "Los jefes de estación firmaron el acta." },
        { tr: "Escribió tres obras maestras en diez años." },
        { tr: "Vaciaron las cajas fuertes." },
        { tr: "Cómprame dos abrelatas, por favor." },
        { tr: "Hay veinte capitales de provincia." },
        { tr: "Las toallas limpias están en el armario." }
      ]
    },
    vocab: [
      "obra maestra",
      "capital de provincia",
      "jefe de estación",
      "cabeza de familia",
      "caja fuerte",
      "los bajos fondos",
      "abrelatas",
      "cenicero",
      "quitanieves",
      "salvavidas",
      "acta oficial",
      "vaciar"
    ],
    exercises: [
      { q: "Plural de «il capolavoro»: ___" },
      { q: "Plural de «il capostazione»: ___" },
      { q: "Plural de «la cassaforte»: ___" },
      { q: "Plural de «il portacenere»: ___" },
      {
        q: "¿Por qué «i capistazione» y no «i capostazioni»?",
        opts: [
          "Es una excepción sin regla",
          "Porque capo significa aquí la persona al mando",
          "Porque stazione es femenino"
        ]
      },
      {
        q: "¿Qué compuestos son invariables?",
        opts: ["il portacenere", "il cavolfiore", "l'apriscatole", "lo spazzaneve"]
      },
      {
        q: "Completa los plurales.",
        tr: "Hay veinte capitales de provincia; las cajas fuertes fueron vaciadas de noche."
      },
      { q: "«Las toallas limpias están en el armario.»" },
      { tr: "Los jefes de departamento pidieron una reunión con la dirección." },
      { tr: "Escribió tres obras maestras en menos de diez años." }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Vocabulario avanzado",
    title: "Alterados y adjetivos cultos",
    objectives: [
      "usar los sufijos apreciativos con intención",
      "reconocer los adjetivos formados sobre otra raíz",
      "ajustar el registro léxico"
    ],
    theory: [
      {
        h: "Alterazione: cuatro direcciones",
        list: [
          "<b>diminutivo</b>: <em>-ino, -etto, -ello</em> — <em>tavolino, casetta, alberello</em>",
          "<b>aumentativo</b>: <em>-one</em> — <em>portone, librone</em>",
          "<b>afectivo</b> (<em>vezzeggiativo</em>): <em>-uccio, -otto</em> — <em>caruccio, ragazzotto</em>",
          "<b>despectivo</b>: <em>-accio, -astro</em> — <em>tempaccio, poetastro</em>"
        ]
      },
      {
        contrast: "El sistema es el tuyo, con otras terminaciones: tus -ito, -illo, -ón, -ucho y -astro cubren las mismas cuatro direcciones, y <em>poetastro</em> es literalmente tu «poetastro». También compartes los falsos alterados: <em>il tacchino</em> no es un tacón pequeño como tu «bombilla» no es una bomba chica. Lo que cambia es qué palabra cayó en la trampa, así que la lista se aprende, el mecanismo no."
      },
      {
        h: "Cuidado con las trampas léxicas",
        p: "No toda palabra con uno de estos sufijos es un alterado. <em>Il mattone</em> es un ladrillo, no una «mañana grande»; <em>il tacchino</em> es un pavo; <em>il burrone</em> es un barranco, no «mucha mantequilla». Son los <em>falsi alterati</em>."
      },
      {
        h: "Adjetivos formados sobre otra raíz",
        p: "El italiano de registro alto usa adjetivos de origen latino o griego sin vínculo formal con el sustantivo: <em>cavallo → equino / ippico</em>, <em>cuore → cardiaco</em>, <em>acqua → idrico</em>, <em>occhio → oculare</em>, <em>città → urbano</em>, <em>anno → annuale</em>, <em>fratello → fraterno</em>. La serie es idéntica a la tuya, adjetivo por adjetivo: aquí no hay nada que aprender, solo que reconocer."
      },
      {
        h: "Adjetivos sin superlativo",
        p: "Algunos adjetivos no forman superlativo, porque ya expresan intensidad (<em>eccezionale, splendido, straordinario, immenso</em>) o son ellos mismos alterados (<em>bellino, grandicello</em>). «Eccezionalissimo» suena a broma, igual que tu «excepcionalísimo»."
      }
    ],
    grammar: {
      title: "Sufijos y adjetivos cultos",
      table: {
        head: ["sustantivo", "adjetivo culto", "ejemplo"],
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
        { tr: "¡Qué tiempo más malo! Con esta lluvia no se sale." },
        { tr: "Vivimos en una casita a las afueras." },
        { tr: "El portal del edificio está siempre cerrado con llave." },
        { tr: "Los recursos hídricos del país están disminuyendo." },
        { tr: "Sufrió una parada cardiaca." },
        { tr: "El tráfico urbano ha aumentado un veinte por ciento." }
      ]
    },
    vocab: [
      "un alterado",
      "diminutivo",
      "aumentativo",
      "despectivo",
      "falso diminutivo o aumentativo",
      "cardiaco",
      "hídrico",
      "ocular",
      "urbano",
      "fraterno",
      "tiempo malísimo",
      "ladrillo (no: mañana grande)"
    ],
    exercises: [
      {
        q: "Relaciona el sustantivo con su adjetivo culto.",
        pairs: ["cardiaco", "hídrico", "ocular", "urbano"]
      },
      { q: "«Il mattone» es:", opts: ["una mañana grande", "un ladrillo", "un diminutivo de matto"] },
      { q: "¿Qué sufijo es despectivo?", opts: ["-ino", "-one", "-accio"] },
      { q: "Forma el diminutivo de «casa»: ___" },
      {
        q: "¿Por qué «eccezionalissimo» suena mal?",
        opts: ["Es demasiado largo", "Porque eccezionale ya expresa intensidad", "Porque es un préstamo"]
      },
      {
        q: "¿Cuáles son falsi alterati (ni diminutivos ni aumentativos)?",
        opts: ["il tacchino", "il tavolino", "il burrone", "il mattone"]
      },
      { q: "Completa los adjetivos cultos.", tr: "Los recursos hídricos disminuyen y el tráfico urbano aumenta." },
      { q: "«¡Qué tiempo más malo!»" },
      { tr: "Los recursos hídricos del país llevan años disminuyendo." },
      { tr: "Vivimos en una casita justo a las afueras." }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Test",
    title: "Test de la unidad 2",
    objectives: ["comprobar los plurales dobles, los compuestos y la formación de palabras"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Mi fanno male ___.»", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "«___ della città sono medievali.»", opts: ["I muri", "Le mura", "Le muri"] },
      { q: "«A pranzo mangio ___.» (fruta, alimento)" },
      { q: "Plural de «il capolavoro»: ___" },
      { q: "Plural de «il capostazione»: ___" },
      { q: "Plural de «la cassaforte»: ___" },
      { q: "Relaciona.", pairs: ["cardiaco", "hídrico", "urbano", "fraterno"] },
      { q: "«Il burrone» es:", opts: ["mucha mantequilla", "un barranco", "un aumentativo de burro"] },
      { tr: "Se han revisado las cajas fuertes de los jefes de departamento." },
      { tr: "Los recursos hídricos urbanos exigen una actuación inmediata." }
    ]
  },
  "unit:c2-u03": {
    title: "Matices y textos auténticos",
    grammarNote: "ironía · jerga · regionalismos · latinismos"
  },
  "lesson:c2-u03-l1": {
    theme: "Estilo y cultura",
    title: "La ironía en italiano",
    objectives: [
      "reconocer la ironía por escrito y al hablar",
      "usar las marcas de la ironía",
      "distinguir la ironía del sarcasmo"
    ],
    theory: [
      {
        h: "Las marcas de la ironía",
        list: [
          "<em>ma va'!</em>, <em>figurati!</em>, <em>ci mancherebbe</em> — acuerdo fingido",
          "<em>proprio</em>, <em>davvero</em>, <em>giusto</em> vueltos del revés: <em>Bravo, giusto quello che serviva.</em>",
          "exageración léxica: <em>una tragedia</em> por una nimiedad",
          "un diminutivo en contexto serio: <em>un problemino da due milioni</em>"
        ]
      },
      {
        contrast: "Todo este repertorio es el tuyo, marca por marca: <em>figurati</em> es «figúrate», el acuerdo fingido, la lítote de «no está mal», el diminutivo irónico de «un problemita de dos millones» y las comillas de distancia. Es la lección del nivel donde menos hay que aprender y más hay que atreverse: la ironía italiana funciona con tus mismos resortes."
      },
      {
        h: "Ironía frente a sarcasmo",
        p: "La ironía le deja al otro una salida, el sarcasmo no. <em>Che bella idea</em> dicho con una sonrisa es ironía; la misma frase con énfasis y sin sonrisa es sarcasmo. Los italianos usan ambos, pero el sarcasmo lo marca la entonación más que las palabras."
      },
      {
        h: "La atenuación en italiano",
        p: "<em>Non è male</em> (de algo excelente), <em>diciamo che non è andata benissimo</em> (de un desastre), <em>qualche problemino</em> (de una crisis grave). La lítote es muy productiva en italiano: <em>non poco</em>, <em>non pochi</em>, <em>non senza difficoltà</em>."
      }
    ],
    grammar: {
      title: "Los recursos de la ironía",
      table: {
        head: ["recurso", "ejemplo", "significado"],
        rows: [
          ["acuerdo fingido", "Ma figurati!", "sí, claro, cómo no"],
          ["lítote", "Non è male.", "es excelente"],
          ["diminutivo", "un problemino", "un problema serio"],
          ["exageración", "una tragedia", "una molestia menor"],
          ["comillas de distancia", "la \"riforma\"", "la distancia de quien escribe"],
          ["pregunta retórica", "E chi l'avrebbe detto?", "estaba clarísimo"]
        ]
      },
      examples: [
        { tr: "Muy bien, justo lo que hacía falta." },
        { tr: "Digamos que no salió brillante." },
        { tr: "Un problemita de dos millones de euros." },
        { tr: "Ah, o sea que ahora es culpa mía. Cómo no." },
        { tr: "La «reforma» empeoró la situación." },
        { tr: "No sin dificultad, llegamos al final." }
      ]
    },
    vocab: [
      "sí, claro, cómo no",
      "lo que nos faltaba",
      "¡anda ya!",
      "lítote",
      "atenuación",
      "sarcasmo",
      "tomar el pelo",
      "subrayar, recalcar",
      "tono",
      "alusión",
      "doble sentido",
      "no poco, bastante"
    ],
    exercises: [
      {
        q: "«Non è male» sobre una gran película es:",
        opts: ["una crítica", "una lítote, elogio por atenuación", "indiferencia"]
      },
      {
        q: "«Un problemino da due milioni» es un ejemplo de:",
        opts: ["diminutivo irónico", "error léxico", "registro administrativo"]
      },
      {
        q: "¿En qué se diferencian ironía y sarcasmo?",
        opts: ["En nada", "La ironía deja una salida, el sarcasmo no", "El sarcasmo es siempre escrito"]
      },
      { q: "Relaciona.", pairs: ["cómo no, claro", "lo que nos faltaba", "¡anda ya!", "bastante"] },
      {
        q: "Las comillas de «la \"riforma\"» señalan:",
        opts: ["una cita", "la distancia de quien escribe respecto a la palabra", "un término técnico"]
      },
      {
        q: "Completa la frase irónica.",
        tr: "Muy bien, justo lo que hacía falta. Digamos que no salió brillante."
      },
      { q: "«No sin dificultad, llegamos al final.»" },
      {
        q: "«E chi l'avrebbe detto?» sobre algo evidente significa:",
        opts: ["nadie lo esperaba", "estaba clarísimo desde el principio", "¿quién lo ha dicho?"]
      },
      { tr: "Digamos que no salió del todo brillante, por decirlo suavemente." },
      { tr: "Un problemita de dos millones de euros, poca cosa." }
    ]
  },
  "lesson:c2-u03-l2": {
    theme: "Estilo y cultura",
    title: "Jerga y regionalismos",
    objectives: [
      "reconocer la jerga juvenil y los regionalismos",
      "distinguir el registro coloquial del dialecto",
      "saber qué no usar por escrito"
    ],
    theory: [
      {
        h: "Gergo giovanile",
        p: "<em>Boh</em> (ni idea), <em>bella!</em> (hola), <em>tipo</em> (como, tipo), <em>raga</em> (chicos, de <em>ragazzi</em>), <em>sto zitto</em>, <em>che palle</em> (qué palo, algo soez), <em>spoilerare</em>, <em>cringiare</em>. Esta capa se mueve deprisa: lo que hoy está vivo, en cinco años suena a grabación de archivo."
      },
      {
        h: "Regionalismos dentro del estándar",
        list: [
          "norte: <em>anguria</em> (sandía), <em>bidello</em>, <em>ciao</em> de <em>schiavo</em>",
          "centro: <em>cocomero</em> (sandía), <em>a me mi</em> (coloquial, incorrecto por escrito)",
          "sur: <em>melone d'acqua</em>, passato remoto frecuente, <em>mo'</em> (ahora)",
          "en todas partes: <em>magari</em>, <em>mica</em>, <em>manco</em> (ni siquiera, coloquial)"
        ]
      },
      {
        contrast: "Ojo con <em>a me mi</em>: en italiano es un rasgo coloquial marcado y una falta por escrito, mientras que tu «a mí me gusta» es sintaxis normal y correcta del español. Es de los pocos casos en que una construcción tuya perfectamente legítima cae en italiano del lado equivocado, y por eso se cuela sin que te suene mal."
      },
      {
        h: "Un dialecto no es una jerga",
        p: "El napolitano y el siciliano son <b>lenguas distintas</b> descendientes del latín junto al toscano, con literatura y gramática propias. Llamarlas «italiano mal hablado» es falso y, culturalmente, una metedura de pata: el mismo error que llamar «castellano mal hablado» al asturiano."
      },
      {
        trap: "<em>Mica</em> («en absoluto», «ni de lejos») está por todas partes al hablar: <em>Non è mica facile.</em> En un texto formal sustitúyelo por <em>affatto</em> o quítalo."
      }
    ],
    grammar: {
      title: "Registros coloquiales",
      table: {
        head: ["expresión", "significado", "registro"],
        rows: [
          ["boh", "ni idea", "coloquial"],
          ["mica", "en absoluto, ni de lejos", "coloquial, muy frecuente"],
          ["magari", "ojalá / quizá / incluso", "en todas partes"],
          ["mo'", "ahora", "centro-sur"],
          ["che palle", "qué palo", "algo soez"],
          ["tipo", "como, tipo", "jerga juvenil"],
          ["dai!", "¡venga! / ¡anda ya!", "en todas partes"],
          ["figurati", "de nada / ni de broma", "en todas partes"]
        ]
      },
      examples: [
        { tr: "No es ni de lejos tan fácil como parece." },
        { tr: "No sé, ni idea." },
        { tr: "¡Venga, no te lo tomes a mal!" },
        { tr: "Serían tipo las doce cuando salimos." },
        { tr: "Ojalá fuera tan sencillo." },
        { tr: "Ahora mismo voy, espera un momento.", note: "centro-sur" }
      ]
    },
    vocab: [
      "jerga, argot",
      "regionalismo",
      "en absoluto, ni de lejos",
      "ni idea",
      "¡venga!",
      "como, tipo",
      "ahora (regional)",
      "sandía (norte / centro)",
      "en absoluto (formal)",
      "coloquial",
      "vulgar",
      "anticuado"
    ],
    exercises: [
      {
        q: "«Non è mica facile» significa:",
        opts: ["es un poco fácil", "no es fácil en absoluto", "es facilísimo"]
      },
      { q: "«Boh» es:", opts: ["un grito de dolor", "ni idea", "un saludo"] },
      {
        q: "El napolitano es:",
        opts: ["italiano mal hablado", "una lengua románica distinta", "jerga juvenil"]
      },
      { q: "Relaciona el regionalismo con la zona.", pairs: ["norte", "centro", "centro-sur", "sur"] },
      { q: "Sustituye «mica» por la forma formal: «Non è ___ facile.»" },
      {
        q: "«A me mi piace» es:",
        opts: ["correcto por escrito", "coloquial, se evita por escrito", "puramente dialectal"]
      },
      {
        q: "Completa las expresiones coloquiales.",
        tr: "No sé, ni idea. De todas formas no es ni de lejos tan fácil como parece."
      },
      { q: "«¡Venga, no te lo tomes a mal!»" },
      { tr: "No sé, serían tipo las doce, no es tan fácil acordarse." },
      { tr: "No es ni de lejos tan fácil como parece, créeme." }
    ]
  },
  "lesson:c2-u03-l3": {
    theme: "Estilo y cultura",
    title: "Latinismos y registro culto",
    objectives: [
      "reconocer los latinismos en los textos jurídicos y académicos",
      "usarlos en su sitio",
      "cerrar el nivel C2"
    ],
    theory: [
      {
        h: "El latín está vivo en el italiano oficial",
        p: "El italiano conserva un buen surtido de expresiones latinas en el lenguaje jurídico y académico corriente: <em>de facto</em>, <em>ad hoc</em>, <em>sine die</em>, <em>pro tempore</em>."
      },
      {
        contrast: "Tu lengua jurídica y académica usa exactamente las mismas, incluidas <em>una tantum</em> e <em>in itinere</em>, que en otros idiomas hay que aprender aparte. Así que este bloque no es vocabulario nuevo sino reconocimiento: lo único que cambia es la pronunciación italiana y, en algún caso, la frecuencia."
      },
      {
        h: "Las más frecuentes",
        list: [
          "<em>de facto</em> / <em>de iure</em> — de hecho / de derecho",
          "<em>ex post</em> / <em>ex ante</em> — a posteriori / a priori",
          "<em>in itinere</em> — en curso",
          "<em>una tantum</em> — por una sola vez",
          "<em>ad hoc</em>, <em>pro tempore</em>, <em>sine die</em> (sin fecha fijada)",
          "<em>a fortiori</em>, <em>in primis</em>, <em>de cuius</em> (el causante, en derecho sucesorio)"
        ]
      },
      {
        h: "El registro culto más allá del latín",
        p: "<em>Vieppiù</em> (cada vez más), <em>altresì</em> (asimismo), <em>ancorché</em> (si bien), <em>laddove</em> (mientras que), <em>giacché</em> (ya que), <em>onde</em> (a fin de). Pertenecen al derecho, al periodismo serio y al ensayo; al hablar suenan pedantes. Tu «asimismo», «si bien» y «ya que» los cubren casi uno a uno."
      },
      {
        h: "Cerrar el nivel",
        p: "En C2 ya no se trata de añadir formas, sino de <b>elegir la correcta</b>. El mismo contenido en registro coloquial, estándar y culto son tres mensajes distintos, y el dominio consiste en elegir a conciencia."
      }
    ],
    grammar: {
      title: "Latinismos y formas cultas",
      table: {
        head: ["expresión", "significado", "contexto"],
        rows: [
          ["de facto / de iure", "de hecho / de derecho", "derecho"],
          ["ex post / ex ante", "a posteriori / a priori", "economía, derecho"],
          ["in itinere", "en curso", "administración"],
          ["una tantum", "por una sola vez", "finanzas"],
          ["sine die", "sin fecha fijada", "derecho"],
          ["altresì", "asimismo", "derecho, periodismo"],
          ["ancorché", "si bien", "periodismo"],
          ["laddove", "mientras que", "ensayo"]
        ]
      },
      examples: [
        { tr: "El contrato ha vencido de facto." },
        { tr: "La ayuda se abona por una sola vez." },
        { tr: "La reunión se aplazó sin fecha fijada." },
        { tr: "El expediente sigue en curso." },
        { tr: "Se señala asimismo que el plazo es improrrogable." },
        { tr: "Mientras que el primer estudio indicaba un descenso, el segundo muestra estabilidad." }
      ]
    },
    vocab: [
      "de facto / de iure",
      "a posteriori / a priori",
      "en curso",
      "por una sola vez",
      "sin fecha fijada",
      "ad hoc",
      "asimismo",
      "si bien",
      "mientras que",
      "ya que, puesto que",
      "abonar, desembolsar",
      "aplazar"
    ],
    exercises: [
      { q: "Relaciona el latinismo con su significado.", pairs: ["de facto", "por una sola vez", "sin fecha fijada", "en curso"] },
      {
        q: "«Il bonus è erogato una tantum» significa:",
        opts: ["se abona cada mes", "se abona por una sola vez", "se abona una vez al año"]
      },
      {
        q: "«Rinviata sine die» significa:",
        opts: ["aplazada una semana", "aplazada sin fecha fijada", "anulada"]
      },
      { q: "Sustituye «anche» por la forma culta: «Si segnala ___ che…»" },
      { q: "Sustituye «mentre» por la forma ensayística: «___ il primo studio indicava un calo…»" },
      {
        q: "¿En qué consiste el dominio en C2?",
        opts: [
          "En saber el mayor número de palabras",
          "En elegir a conciencia el registro que encaja con la situación",
          "En usar siempre las formas cultas"
        ]
      },
      { q: "Completa el texto jurídico.", tr: "El contrato ha vencido de facto, y el expediente sigue en curso." },
      { q: "«Se señala asimismo que el plazo es improrrogable.»" },
      { tr: "La reunión se aplazó sin fecha fijada por motivos técnicos." },
      { tr: "El pago se efectúa por una sola vez, una vez presentada la solicitud." }
    ]
  },
  "lesson:c2-u03-test": {
    theme: "Examen",
    title: "Test — repaso de las unidades 1-3",
    objectives: ["comprobar los participios, la formación de palabras, los registros y los matices"],
    theory: [{ p: "Doce tareas de las primeras tres unidades. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Gli aventi diritto»:", opts: ["los que tienen razón", "los derechohabientes", "los propietarios"] },
      { q: "Concordancia: «Terminat___ i lavori…»" },
      { q: "«Il testo va rivisto»:", opts: ["va revisado", "hay que revisarlo", "se está revisando"] },
      { q: "«Mi fanno male ___.»", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "Plural de «la cassaforte»: ___" },
      { q: "Plural de «il capostazione»: ___" },
      { q: "Relaciona.", pairs: ["hídrico", "cardiaco", "urbano", "ocular"] },
      { q: "«Non è mica facile»:", opts: ["un poco fácil", "nada fácil", "facilísimo"] },
      { q: "«Una tantum»:", opts: ["cada mes", "por una sola vez", "una vez al año"] },
      { q: "Sustituye «anche»: «Si segnala ___ che…»" },
      { q: "«El expediente sigue en curso y se ha aplazado sin fecha fijada.»" },
      { tr: "Vista la situación, hay que revisar el proyecto entero antes del plazo." }
    ]
  }
});
