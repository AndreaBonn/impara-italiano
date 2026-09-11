/* ============================================================
   Textos en la lengua del estudiante (es) para data/core/b2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:b2-u05": {
    "title": "Estilo indirecto",
    "grammarNote": "cambio de tiempos · deixis · preguntas y órdenes"
  },
  "lesson:b2-u05-l1": {
    "theme": "Gramática",
    "title": "Del estilo directo al indirecto",
    "objectives": [
      "cambiar el tiempo tras un verbo introductorio en pasado",
      "elegir entre indicativo y subjuntivo después de «che»",
      "usar verbos de habla distintos de «dire»"
    ],
    "theory": [
      {
        "h": "Un verbo introductorio en pasado lo retrasa todo un paso",
        "p": "<em>Ha detto: «Sono stanco»</em> → <em>Ha detto che <b>era</b> stanco.</em> El presente pasa a imperfetto, el passato prossimo a trapassato y el futuro al condicional compuesto: <em>«Arriverò»</em> → <em>ha detto che <b>sarebbe arrivato</b></em>. Este último es el único que sorprende de verdad: el futuro visto desde el pasado es <em>sarei arrivato</em>, no <em>arriverei</em>."
      },
      {
        "h": "Lo que no se mueve",
        "p": "Si el verbo introductorio está en presente (<em>dice che…</em>), no cambia nada. Y si lo dicho sigue siendo verdad, el cambio es opcional: <em>Ha detto che Roma <b>è</b> la capitale</em> suena mejor que <em>era</em>."
      },
      {
        "h": "¿Che + indicativo o subjuntivo?",
        "p": "Lo decide el verbo introductorio. <em>Dire, rispondere, spiegare, scrivere</em> piden indicativo: <em>ha detto che <b>era</b> stanco</em>. <em>Sostenere, ritenere, negare</em> piden subjuntivo: <em>sostiene che la pratica <b>sia</b> aperta</em>. El segundo grupo marca distancia: «eso dice él, yo no respondo»."
      },
      {
        "contrast": "El español hace el mismo retraso («dijo que <b>estaba</b> cansado»), así que esta parte te saldrá casi sola. El problema está en el subjuntivo: el español lo tiene, pero lo reparte de otra manera, y <em>sostiene che sia</em> no se corresponde con «sostiene que <b>es</b>». Aquí el italiano usa subjuntivo donde el español usa indicativo, y el oído te va a engañar precisamente porque las dos lenguas se parecen."
      }
    ],
    "grammar": {
      "title": "El cambio de tiempos",
      "note": "Tras un verbo introductorio en pasado.",
      "table": {
        "head": [
          "directo",
          "indirecto",
          "ejemplo"
        ],
        "rows": [
          [
            "presente",
            "imperfetto",
            "«sono stanco» → era stanco"
          ],
          [
            "passato prossimo",
            "trapassato prossimo",
            "«ho finito» → aveva finito"
          ],
          [
            "futuro semplice",
            "condizionale composto",
            "«arriverò» → sarebbe arrivato"
          ],
          [
            "imperfetto",
            "imperfetto (sin cambio)",
            "«ero stanco» → era stanco"
          ],
          [
            "congiuntivo presente",
            "congiuntivo imperfetto",
            "«che sia» → che fosse"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Dijo: «Estoy cansado» → Dijo que estaba cansado."
        },
        {
          "tr": "Me escribió que llegaba al día siguiente."
        },
        {
          "tr": "Respondió que no había entendido la pregunta."
        },
        {
          "tr": "Nos explicó que llamaría él mismo a la oficina."
        },
        {
          "tr": "Admitió que se había equivocado."
        },
        {
          "tr": "Sostiene que el expediente sigue abierto."
        }
      ]
    },
    "vocab": [
      "referir, relatar",
      "sostener",
      "admitir",
      "replicar",
      "precisar",
      "añadir",
      "desmentir",
      "confirmar",
      "por lo visto",
      "según él",
      "según dice",
      "según (algo)"
    ],
    "exercises": [
      {
        "q": "«Sono stanco» en estilo indirecto tras «ha detto che»:",
        "opts": [
          "ha detto che sono stanco",
          "ha detto che era stanco",
          "ha detto che sarebbe stanco"
        ]
      },
      {
        "q": "Completa: «Ha detto che ___ stanco.» (essere)"
      },
      {
        "q": "Completa: «Ha risposto che non ___ la domanda.» (capire)"
      },
      {
        "q": "«Arriverò domani» tras «ha detto che»:",
        "opts": [
          "arriverà",
          "arriverebbe",
          "sarebbe arrivato"
        ]
      },
      {
        "q": "Pon las formas correctas.",
        "tr": "Dijo que llegaba al día siguiente y que llamaría él."
      },
      {
        "q": "«Dijo que estaba cansado.»"
      },
      {
        "q": "¿Qué verbo exige subjuntivo?",
        "opts": [
          "sostiene che",
          "ha detto che",
          "ha scritto che"
        ]
      },
      {
        "q": "Relaciona los verbos de habla.",
        "tr": [
          "desmentir",
          "precisar",
          "replicar",
          "sostener"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Me escribió que al día siguiente pasaría por la oficina."
      },
      {
        "tr": "Admitió que se había equivocado y pidió disculpas."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    "theme": "Gramática",
    "title": "Tiempo, lugar, persona",
    "objectives": [
      "desplazar las expresiones de tiempo y lugar",
      "cambiar «venire» por «andare» cuando toca",
      "ajustar pronombres y posesivos"
    ],
    "theory": [
      {
        "h": "Las expresiones de tiempo se desplazan con el verbo",
        "p": "<em>oggi</em> → <em>quel giorno</em>, <em>ieri</em> → <em>il giorno prima</em>, <em>domani</em> → <em>il giorno dopo</em> (o <em>l'indomani</em>), <em>adesso</em> → <em>in quel momento</em> o <em>allora</em>. La frase se entiende sin esto, pero suena a traducción."
      },
      {
        "h": "Lugar: qui → lì, questo → quello",
        "p": "La deixis apunta desde donde estaba quien hablaba. Al referir, esa persona ya no está allí: <em>«Ci vediamo qui»</em> → <em>ha detto che ci saremmo visti <b>lì</b></em>. Igual con <em>questo</em> → <em>quello</em> y <em>questa volta</em> → <em>quella volta</em>."
      },
      {
        "h": "Venire y andare se intercambian",
        "p": "<em>venire</em> significa «ir adonde está el interlocutor». Al referir cambia el punto de referencia, así que <em>«Vengo domani»</em> se convierte en <em>ha detto che <b>sarebbe andato</b> il giorno dopo</em>. Lo mismo le pasa a <em>portare</em>, que se vuelve <em>portare</em> o <em>lasciare</em> según la dirección."
      },
      {
        "contrast": "Aquí el español ayuda más que ninguna otra lengua del curso: «venir» e «ir» funcionan igual que <em>venire</em> y <em>andare</em>, y el cambio te sale solo. Lo que no se corresponde es <em>l'indomani</em>, que pertenece a un registro más alto que «al día siguiente» y no se usa al hablar."
      }
    ],
    "grammar": {
      "title": "Desplazamientos deícticos",
      "note": "Cuando refieres palabras dichas en otro lugar y otro momento.",
      "table": {
        "head": [
          "original",
          "referido",
          "nota"
        ],
        "rows": [
          [
            "oggi",
            "quel giorno",
            "«aquel día»"
          ],
          [
            "ieri",
            "il giorno prima",
            "—"
          ],
          [
            "domani",
            "il giorno dopo / l'indomani",
            "el segundo es de registro alto"
          ],
          [
            "qui",
            "lì",
            "quien hablaba ya no está allí"
          ],
          [
            "questo",
            "quello",
            "—"
          ],
          [
            "venire",
            "andare",
            "cambia el punto de referencia"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«Vengo mañana» → Dijo que iría al día siguiente."
        },
        {
          "tr": "«Nos vemos aquí» → Dijo que nos veríamos allí."
        },
        {
          "tr": "«Lo hice ayer» → Dijo que lo había hecho el día anterior."
        },
        {
          "tr": "«Esto no me gusta» → Dijo que aquello no le gustaba."
        },
        {
          "tr": "«Vuelvo ahora» → Dijo que volvía en aquel momento."
        },
        {
          "tr": "«Mi jefe lo sabe» → Dijo que su jefe lo sabía."
        }
      ]
    },
    "vocab": [
      "el día anterior",
      "al día siguiente",
      "dos días antes",
      "la semana siguiente",
      "en aquel momento",
      "entonces",
      "allí",
      "aquello",
      "dirigirse, acudir",
      "al día siguiente (culto)",
      "poco antes",
      "poco después"
    ],
    "exercises": [
      {
        "q": "«Vengo domani» referido:",
        "opts": [
          "ha detto che veniva domani",
          "ha detto che sarebbe andato il giorno dopo",
          "ha detto che verrà domani"
        ]
      },
      {
        "q": "Completa: «Ha detto che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Completa: «Ha detto che ci saremmo visti ___.» (qui)"
      },
      {
        "q": "«L'ho fatto ieri» referido:",
        "opts": [
          "che l'aveva fatto ieri",
          "che lo faceva ieri",
          "che l'aveva fatto il giorno prima"
        ]
      },
      {
        "q": "¿Por qué «venire» pasa a «andare»?",
        "opts": [
          "porque suena mejor",
          "porque cambia el punto de referencia",
          "porque «venire» no tiene condicional"
        ]
      },
      {
        "q": "Pon las expresiones de tiempo.",
        "tr": "Dijo que lo había terminado el día anterior y que volvería al día siguiente."
      },
      {
        "q": "«Dijo que iría allí al día siguiente.»"
      },
      {
        "q": "¿Qué desplazamientos son correctos?",
        "opts": [
          "oggi → quel giorno",
          "ieri → domani",
          "questo → quello"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Me dijo que iría allí al día siguiente."
      },
      {
        "tr": "Explicó que al día siguiente no iría a la oficina."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    "theme": "Gramática",
    "title": "Preguntas y órdenes referidas",
    "objectives": [
      "referir una pregunta de sí/no con «se»",
      "referir una pregunta abierta",
      "convertir el imperativo en «di» + infinitivo"
    ],
    "theory": [
      {
        "h": "Preguntas de sí/no: se",
        "p": "<em>«Vieni?»</em> → <em>Mi ha chiesto <b>se</b> venivo.</em> Sin signo de interrogación y sin inversión: ya no es una pregunta, sino una subordinada. Este <em>se</em> no tiene nada que ver con el condicional."
      },
      {
        "h": "Preguntas abiertas: la palabra interrogativa se queda",
        "p": "<em>«Dove abiti?»</em> → <em>Mi ha chiesto dove abitavo</em> (coloquial) o <em>dove <b>abitassi</b></em> (más cuidado). El subjuntivo tras pregunta indirecta es registro, no obligación, pero en lenguaje administrativo es el que encontrarás."
      },
      {
        "h": "Órdenes: di + infinitivo",
        "p": "<em>«Aspetta!»</em> → <em>Mi ha detto <b>di aspettare</b>.</em> La negación va delante del infinitivo: <em>mi ha detto <b>di non</b> firmare</em>. El mismo patrón tras <em>raccomandare, consigliare, pregare, ordinare, vietare</em>."
      },
      {
        "contrast": "El español refiere la orden con «que» y subjuntivo: «me dijo <b>que esperara</b>». El italiano usa el infinitivo, y esa es la diferencia que más se nota al hablar: <em>mi ha detto che aspettassi</em> se entiende, pero nadie lo dice. La forma española y la italiana coinciden solo con verbos como <em>insistere perché</em>."
      }
    ],
    "grammar": {
      "title": "Preguntas y órdenes",
      "note": "Tres patrones cubren casi todo.",
      "table": {
        "head": [
          "original",
          "referido",
          "patrón"
        ],
        "rows": [
          [
            "«Vieni?»",
            "mi ha chiesto se venivo",
            "chiedere se + indicativo"
          ],
          [
            "«Dove abiti?»",
            "mi ha chiesto dove abitassi",
            "interrogativo + subjuntivo (registro alto)"
          ],
          [
            "«Aspetta!»",
            "mi ha detto di aspettare",
            "di + infinitivo"
          ],
          [
            "«Non firmare»",
            "mi ha detto di non firmare",
            "di non + infinitivo"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«¿Vienes?» → Me preguntó si iba."
        },
        {
          "tr": "«¿Dónde vives?» → Me preguntó dónde vivía."
        },
        {
          "tr": "«¡Espera!» → Me dijo que esperara."
        },
        {
          "tr": "«No firmes» → Me recomendó que no firmara."
        },
        {
          "tr": "«¿Qué quieres?» → Quería saber qué quería yo."
        },
        {
          "tr": "«¿Puedes ayudarme?» → Preguntó si podía ayudarle."
        }
      ]
    },
    "vocab": [
      "preguntar si",
      "querer saber",
      "preguntar, indagar",
      "invitar a",
      "recomendar",
      "ordenar",
      "proponer",
      "aconsejar",
      "sugerir",
      "rogar que",
      "prohibir",
      "insistir en que"
    ],
    "exercises": [
      {
        "q": "«Vieni?» referido:",
        "opts": [
          "mi ha chiesto vieni",
          "mi ha chiesto se venivo",
          "mi ha chiesto che venivo"
        ]
      },
      {
        "q": "Completa: «Mi ha chiesto ___ avevo capito.»"
      },
      {
        "q": "Completa: «Mi ha detto ___.» (aspettare)"
      },
      {
        "q": "«Non firmare» referido:",
        "opts": [
          "mi ha detto di non firmare",
          "mi ha detto che non firmavo",
          "mi ha detto non firmare"
        ]
      },
      {
        "q": "¿Qué registro es más cuidado?",
        "opts": [
          "dove abitavo",
          "dove abiti",
          "dove abitassi"
        ]
      },
      {
        "q": "Pon las formas correctas.",
        "tr": "Me preguntó si había entendido y me dijo que volviera a llamar más tarde."
      },
      {
        "q": "«Me preguntó si iba.»"
      },
      {
        "q": "Relaciona los verbos.",
        "tr": [
          "recomendar",
          "prohibir",
          "sugerir",
          "rogar"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "El funcionario me preguntó si había llevado el número fiscal."
      },
      {
        "tr": "Me recomendó que no firmara nada sin leerlo."
      }
    ]
  },
  "lesson:b2-u05-test": {
    "theme": "Gramática",
    "title": "Test — Estilo indirecto",
    "exercises": [
      {
        "q": "«Ho finito» tras «ha detto che»:",
        "opts": [
          "ha finito",
          "aveva finito",
          "avrebbe finito"
        ]
      },
      {
        "q": "«Verrò» tras «ha detto che»:",
        "opts": [
          "verrà",
          "verrebbe",
          "sarebbe venuto"
        ]
      },
      {
        "q": "Completa: «Disse che ___ stanco.» (essere)"
      },
      {
        "q": "Completa: «Disse che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Completa: «Mi chiese ___ ero pronto.»"
      },
      {
        "q": "Una orden referida es:",
        "opts": [
          "di + infinitivo",
          "che + subjuntivo",
          "el imperativo sin cambios"
        ]
      },
      {
        "q": "¿Qué frases son correctas?",
        "opts": [
          "Mi ha detto che aspettassi.",
          "Mi ha detto di aspettare.",
          "Mi ha chiesto se venivo."
        ]
      },
      {
        "q": "Pon las formas.",
        "tr": "Dijo que estaba cansado y que volvería al día siguiente."
      },
      {
        "tr": "Respondió que no había recibido ninguna citación."
      },
      {
        "tr": "Me preguntó si ya había enviado la solicitud."
      }
    ]
  }
});
