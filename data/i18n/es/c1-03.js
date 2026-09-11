/* ============================================================
   Textos en la lengua del estudiante (es) para data/core/c1-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c1-u05": {
    "title": "Oraciones sin verbo conjugado",
    "grammarNote": "gerundio · participio · dopo aver"
  },
  "lesson:c1-u05-l1": {
    "theme": "Gramática",
    "title": "Il gerundio che sostituisce una frase",
    "objectives": [
      "sustituir una subordinada por el gerundio",
      "distinguir el gerundio simple del compuesto",
      "reconocer los cuatro valores que puede llevar el gerundio"
    ],
    "theory": [
      {
        "h": "Una forma, cuatro valores",
        "p": "<em>Uscendo di casa, ho incontrato Marta</em> puede ser «al salir» (tiempo), «como salía» (causa), «saliendo así» (modo) o «si saliera» (condición). El italiano no lo marca: lo decide el contenido de las dos mitades, y en la práctica solo una lectura tiene sentido."
      },
      {
        "h": "El gerundio compuesto echa la acción hacia atrás",
        "p": "<em>Avendo finito presto, siamo andati al mare</em>: primero terminamos, luego fuimos. Sin <em>avendo</em> las dos acciones serían simultáneas. Es lo único que la forma del gerundio decide de verdad, así que conviene mirarla."
      },
      {
        "h": "Para qué sirve",
        "p": "<em>Siccome avevamo finito presto, siamo andati al mare</em> es correcto y cuatro palabras más largo. Un texto italiano de nivel C1 cambia una cosa por la otra varias veces por página; quien no lo hace escribe correcto y pesado, y esa es la diferencia que un profesor ve al instante."
      },
      {
        "contrast": "El español tiene el mismo gerundio y casi el mismo reparto de valores, así que aquí parte con ventaja. La diferencia está en el gerundio compuesto: «habiendo terminado» existe pero suena libresco en español, mientras que <em>avendo finito</em> es neutro en italiano. No traslade esa sensación de solemnidad."
      }
    ],
    "grammar": {
      "title": "El gerundio en lugar de una subordinada",
      "note": "La tercera columna dice qué lleva la frase.",
      "table": {
        "head": [
          "construcción",
          "forma",
          "qué lleva"
        ],
        "rows": [
          [
            "Uscendo di casa…",
            "gerundio presente",
            "simultaneidad, causa, modo"
          ],
          [
            "Avendo finito…",
            "gerundio passato",
            "acción anterior"
          ],
          [
            "Pur sapendolo…",
            "pur + gerundio",
            "concesión"
          ],
          [
            "Sbagliando si impara.",
            "gerundio",
            "modo, verdad general"
          ],
          [
            "Essendo domenica…",
            "gerundio di essere",
            "causa"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Al salir de casa me encontré con Marta."
        },
        {
          "tr": "Habiendo terminado pronto, nos fuimos al mar."
        },
        {
          "tr": "Aunque lo sabía, no dijo nada."
        },
        {
          "tr": "Equivocándose se aprende."
        },
        {
          "tr": "Como era domingo, las tiendas estaban cerradas."
        },
        {
          "tr": "Publicada la noticia, el precio se desplomó."
        }
      ]
    },
    "vocab": [
      "el gerundio",
      "la oración no conjugada",
      "el sujeto sobreentendido",
      "simultáneo",
      "anterior",
      "la causa",
      "el modo",
      "la condición",
      "sobreentender",
      "regir",
      "aligerar",
      "recargar"
    ],
    "exercises": [
      {
        "q": "«Uscendo di casa, ho incontrato Marta» significa:",
        "opts": [
          "Saldré de casa y me encontraré con Marta",
          "Al salir de casa me encontré con Marta",
          "Si saliera, me encontraría con Marta"
        ]
      },
      {
        "q": "Completa: «___ di casa, ho incontrato Marta.» (uscire, gerundio)"
      },
      {
        "q": "Completa: «___ presto, siamo andati al mare.» (finire, gerundio compuesto)"
      },
      {
        "q": "«Avendo finito presto» expresa:",
        "opts": [
          "una acción anterior",
          "una acción simultánea",
          "una condición"
        ]
      },
      {
        "q": "«Pur sapendolo» significa:",
        "opts": [
          "sabiéndolo",
          "sin saberlo",
          "aunque lo sabía"
        ]
      },
      {
        "q": "Pon las formas.",
        "tr": "Al salir de casa me encontré con Marta. Habiendo terminado pronto, nos fuimos al mar."
      },
      {
        "q": "«Equivocándose se aprende.»"
      },
      {
        "q": "¿Qué frases son correctas?",
        "opts": [
          "Sbagliando si impara.",
          "Essendo domenica, i negozi erano chiusi.",
          "Avendo finito il lavoro, la festa è cominciata."
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Habiendo leído el contrato, pedí que cambiaran dos puntos."
      },
      {
        "tr": "Al salir de la oficina me di cuenta de que había dejado las llaves dentro."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    "theme": "Gramática",
    "title": "Participio e infinito al posto di una subordinata",
    "objectives": [
      "acortar una temporal con el participio",
      "usar «dopo aver» y «prima di» con infinitivo",
      "concordar el participio con la palabra adecuada"
    ],
    "theory": [
      {
        "h": "El participio al principio de la frase",
        "p": "<em>Finito il lavoro, siamo usciti</em> = «terminado el trabajo, salimos». El participio concuerda con aquello de lo que habla: con <em>lavoro</em> en <em>finito il lavoro</em>, pero con nosotros en <em>arrivati a Roma</em>, porque <em>arrivare</em> va con <em>essere</em>. Es lo único difícil de esta lección."
      },
      {
        "h": "Dopo aver, prima di, nel",
        "p": "Tras <em>dopo</em> va el infinitivo compuesto: <em>dopo aver letto</em>, nunca <em>dopo leggere</em>. Tras <em>prima di</em>, el infinitivo simple: <em>prima di rispondere</em>. <em>Nel</em> + infinitivo significa «al»: <em>nel dire questo, si è alzato</em>."
      },
      {
        "h": "Una volta + participio",
        "p": "<em>Una volta chiuso il negozio, la via si svuota.</em> Muy frecuente y muy cómoda, porque no necesita conjunción ni tiempo verbal. Sirve también para lo duradero: <em>una volta imparato, non si dimentica</em>."
      },
      {
        "contrast": "El español dice «al salir», «al decir esto», con «al» + infinitivo, y el italiano tiene la construcción paralela en <em>nel dire questo</em>, pero la usa mucho menos: para el tiempo simultáneo prefiere el gerundio. En cambio «después de leer» y <em>dopo aver letto</em> se corresponden bien, con una diferencia: el italiano exige el infinitivo compuesto donde el español admite el simple."
      }
    ],
    "grammar": {
      "title": "Acortar una temporal",
      "note": "La tercera columna dice cuándo se usa la forma.",
      "table": {
        "head": [
          "construcción",
          "forma",
          "cuándo"
        ],
        "rows": [
          [
            "Finito il lavoro…",
            "participio passato",
            "acción acabada antes que la principal"
          ],
          [
            "Arrivati a Roma…",
            "participio, accordo",
            "concordancia con el sujeto"
          ],
          [
            "Dopo aver letto…",
            "infinito passato",
            "después de algo"
          ],
          [
            "Prima di rispondere…",
            "infinito presente",
            "antes de algo"
          ],
          [
            "Nel dire questo…",
            "nel + infinito",
            "en el momento de"
          ],
          [
            "Una volta chiuso…",
            "participio passato",
            "una vez que"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Terminado el trabajo, salimos."
        },
        {
          "tr": "Llegados a Roma, buscamos un hotel."
        },
        {
          "tr": "Después de leer el contrato, firmó."
        },
        {
          "tr": "Antes de responder, se lo pensó dos días."
        },
        {
          "tr": "Al decir esto, se levantó."
        },
        {
          "tr": "Una vez cerrada la tienda, la calle se vacía."
        }
      ]
    },
    "vocab": [
      "el participio pasado",
      "el infinitivo compuesto",
      "la subordinada",
      "una vez que",
      "después de",
      "antes de",
      "en el momento de",
      "al",
      "concordar",
      "preceder",
      "seguir",
      "aligerar"
    ],
    "exercises": [
      {
        "q": "En «Finito il lavoro, siamo usciti», «finito» se refiere a:",
        "opts": [
          "nosotros",
          "el trabajo",
          "la salida"
        ]
      },
      {
        "q": "Completa: «___ il lavoro, siamo usciti.» (finire, participio)"
      },
      {
        "q": "Completa: «Dopo ___ il contratto, ha firmato.» (leggere)"
      },
      {
        "q": "Tras «dopo» la forma acortada lleva:",
        "opts": [
          "gerundio",
          "participio",
          "infinitivo compuesto"
        ]
      },
      {
        "q": "«Prima di» va con:",
        "opts": [
          "infinitivo",
          "gerundio",
          "participio"
        ]
      },
      {
        "q": "Pon las formas.",
        "tr": "Terminado el trabajo, salimos. Después de leer el contrato, firmó."
      },
      {
        "q": "«Después de leer el contrato, firmó.»"
      },
      {
        "q": "Relaciona las construcciones.",
        "tr": [
          "terminado el trabajo",
          "después de leer",
          "antes de responder",
          "una vez cerrada"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Una vez cerrada la tienda, la calle se vacía en pocos minutos."
      },
      {
        "tr": "Antes de responder, se lo pensó dos días enteros."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    "theme": "Gramática",
    "title": "Quando l'implicito non si può usare",
    "objectives": [
      "comprobar si las dos mitades comparten sujeto",
      "detectar la frase que el atajo vuelve ambigua",
      "elegir la conjunción cuando el atajo no sirve"
    ],
    "theory": [
      {
        "h": "Una regla sin excepciones",
        "p": "La forma acortada toma el sujeto de la principal. Si los sujetos son distintos, la frase dice otra cosa: <em>Uscendo di casa, mia madre mi ha chiamato</em> dice que quien salía era su madre. En español ocurre igual y suena igual de mal."
      },
      {
        "h": "Dos salidas",
        "p": "Se puede dar al gerundio su propio sujeto: <em>Avendo io firmato, la pratica è partita</em>. Suena administrativo y no aparece en la conversación. La otra salida es la normal: conjunción y verbo conjugado, <em>siccome</em>, <em>dato che</em>, <em>dopo che</em>, <em>mentre</em>."
      },
      {
        "h": "Los verbos impersonales son seguros",
        "p": "<em>Essendo tardi</em>, <em>piovendo</em>, <em>trattandosi di un errore</em>: no tienen sujeto personal, así que no pueden chocar con nada. Por eso <em>Essendo tardi, abbiamo rimandato la riunione</em> es correcto aunque «nosotros» no sea el sujeto de <em>essere tardi</em>."
      },
      {
        "contrast": "Aquí las dos lenguas coinciden punto por punto, y es la lección más barata de la unidad: «Saliendo de casa, me llamó mi madre» es el mismo error en español. La diferencia está en la tolerancia: el español hablado deja pasar estos gerundios continuamente, mientras que en un examen escrito italiano cuentan como error de sintaxis."
      }
    ],
    "grammar": {
      "title": "Cuándo sirve el atajo y cuándo no",
      "note": "La tercera columna dice qué hacer.",
      "table": {
        "head": [
          "situación",
          "qué se permite",
          "qué hacer"
        ],
        "rows": [
          [
            "stesso soggetto",
            "gerundio o participio",
            "el atajo sirve"
          ],
          [
            "soggetti diversi",
            "congiunzione + verbo",
            "el atajo cambia el sentido, hace falta conjunción"
          ],
          [
            "verbo impersonale",
            "gerundio ammesso",
            "atajo seguro"
          ],
          [
            "soggetto espresso",
            "gerundio con soggetto",
            "correcto pero administrativo"
          ],
          [
            "registro parlato",
            "meglio esplicito",
            "la conjunción suena más natural"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Mientras salía, me llamó mi madre."
        },
        {
          "tr": "Como era tarde, aplazamos la reunión."
        },
        {
          "tr": "Como era tarde, Marco aplazó la reunión."
        },
        {
          "tr": "Después de que el director firmó, el expediente salió."
        },
        {
          "tr": "Terminada la reunión, el director se marchó."
        },
        {
          "tr": "Habiendo firmado yo, el expediente salió."
        }
      ]
    },
    "vocab": [
      "el sujeto",
      "coincidir",
      "explícito",
      "sobreentendido",
      "ambiguo",
      "el malentendido",
      "como",
      "dado que",
      "después de que",
      "mientras",
      "referirse a",
      "aclarar"
    ],
    "exercises": [
      {
        "q": "¿Cuándo NO se puede usar la forma acortada?",
        "opts": [
          "Cuando las dos mitades comparten sujeto",
          "Cuando los sujetos son distintos",
          "Siempre se puede"
        ]
      },
      {
        "q": "Completa: «___ era tardi, Marco ha rimandato la riunione.» (conjunción de causa)"
      },
      {
        "q": "Completa: «___ uscivo, mia madre mi ha chiamato.» (conjunción de tiempo)"
      },
      {
        "q": "¿Por qué «Essendo tardi, abbiamo rimandato» es correcto?",
        "opts": [
          "«essere tardi» no tiene sujeto personal",
          "el gerundio siempre vale",
          "es un tiempo pasado"
        ]
      },
      {
        "q": "Cuando los sujetos son distintos, la frase se escribe:",
        "opts": [
          "con gerundio",
          "con participio",
          "con conjunción y verbo conjugado"
        ]
      },
      {
        "q": "Pon las conjunciones.",
        "tr": "Como era tarde, Marco aplazó la reunión. Mientras salía, me llamó mi madre."
      },
      {
        "q": "«Como era tarde, aplazamos la reunión.»"
      },
      {
        "q": "¿Qué frases son correctas?",
        "opts": [
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Mentre uscivo, mia madre mi ha chiamato.",
          "Siccome era tardi, Marco ha rimandato la riunione."
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Como el director estaba de vacaciones, el expediente se quedó parado."
      },
      {
        "tr": "Mientras hablaba por teléfono, llegó el mensajero."
      }
    ]
  },
  "lesson:c1-u05-test": {
    "theme": "Examen",
    "title": "Examen final del nivel C1",
    "objectives": [
      "comprobar el si impersonal, los verbos pronominales, los registros, la suposición y las formas no conjugadas"
    ],
    "theory": [
      {
        "p": "Doce tareas de todo el nivel C1. Se aprueba a partir del 70%."
      }
    ],
    "exercises": [
      {
        "q": "«Uscendo di casa, ho incontrato Marta» significa:",
        "opts": [
          "Saldré de casa y me encontraré con Marta",
          "Al salir de casa me encontré con Marta",
          "Si saliera, me encontraría con Marta"
        ]
      },
      {
        "q": "Completa: «___ presto, siamo andati al mare.» (finire, gerundio compuesto)"
      },
      {
        "q": "Completa: «Dopo ___ il contratto, ha firmato.» (leggere)"
      },
      {
        "q": "«Avendo finito presto» expresa:",
        "opts": [
          "una acción anterior",
          "una acción simultánea",
          "una condición"
        ]
      },
      {
        "q": "Completa: «___ era tardi, Marco ha rimandato la riunione.»"
      },
      {
        "q": "Cuando los sujetos son distintos, la frase se escribe:",
        "opts": [
          "con gerundio",
          "con participio",
          "con conjunción y verbo conjugado"
        ]
      },
      {
        "q": "Completa: «Non risponde: ___ ancora in riunione.» (essere, suposición)"
      },
      {
        "q": "¿Qué frases son correctas?",
        "opts": [
          "Finito il lavoro, siamo usciti.",
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Dopo aver letto il contratto, ha firmato."
        ]
      },
      {
        "q": "Pon las formas.",
        "tr": "Terminado el trabajo, salimos; como era tarde, cogimos un taxi."
      },
      {
        "q": "«Después de leer el contrato, firmó.»"
      },
      {
        "tr": "Una vez cerrado el expediente, la oficina manda una comunicación escrita."
      },
      {
        "tr": "Habiendo trabajado aquí tres años, conozco bien cómo funciona."
      }
    ]
  }
});
