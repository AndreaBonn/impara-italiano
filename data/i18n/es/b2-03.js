/* ============================================================
   Textos en la lengua del estudiante (es) para data/core/b2-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:b2-u06": {
    "title": "Concesión y conectores",
    "grammarNote": "benché · anche se · tuttavia, anzi, del resto"
  },
  "lesson:b2-u06-l1": {
    "theme": "Gramática",
    "title": "Benché, sebbene, nonostante",
    "objectives": [
      "usar el subjuntivo tras las conjunciones concesivas",
      "distinguir «nonostante + oración» de «nonostante + sustantivo»",
      "ajustar el registro a la situación"
    ],
    "theory": [
      {
        "h": "Todas estas conjunciones piden subjuntivo",
        "p": "<em>Benché</em>, <em>sebbene</em>, <em>nonostante</em>, <em>malgrado</em>, <em>per quanto</em>, <em>quantunque</em>: tras cada una va el subjuntivo, <em>benché <b>fosse</b> tardi</em>. Es una de las pocas reglas italianas sin excepciones, así que conviene aprenderla entera."
      },
      {
        "h": "Nonostante tiene dos caras",
        "p": "Ante una oración: <em>nonostante <b>avesse</b> ragione</em> (subjuntivo). Ante un sustantivo: <em>nonostante <b>la pioggia</b></em>, sin verbo y sin modo. La segunda es más breve y más frecuente por escrito."
      },
      {
        "h": "Registro: no son intercambiables",
        "p": "<em>Quantunque</em> es libresco y hablado suena raro. <em>Malgrado</em> es neutro; <em>benché</em> y <em>sebbene</em> están algo por encima de <em>anche se</em>. En conversación oirás sobre todo <em>anche se</em>, que lleva indicativo y es la lección siguiente."
      },
      {
        "contrast": "El español también pide subjuntivo tras «aunque» cuando el hecho no se afirma, así que aquí partes con ventaja. El problema es el revés: «aunque <b>está</b> lloviendo» con indicativo es correcto en español, y su equivalente italiano no es <em>benché piove</em> sino <em>anche se piove</em>. Es decir, el italiano cambia de conjunción donde el español cambia de modo."
      }
    ],
    "grammar": {
      "title": "Conjunciones concesivas",
      "note": "La conjunción a la izquierda, el modo que exige a la derecha.",
      "table": {
        "head": [
          "conjunción",
          "modo",
          "ejemplo"
        ],
        "rows": [
          [
            "benché / sebbene",
            "subjuntivo",
            "benché fosse tardi"
          ],
          [
            "nonostante / malgrado",
            "subjuntivo, o + sustantivo",
            "nonostante la pioggia"
          ],
          [
            "per quanto",
            "subjuntivo",
            "per quanto ci provi"
          ],
          [
            "anche se",
            "indicativo",
            "anche se piove"
          ],
          [
            "pur + gerundio",
            "sin sujeto",
            "pur avendo ragione"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Aunque era tarde, salimos igualmente."
        },
        {
          "tr": "Aunque lo sabía, no dijo nada."
        },
        {
          "tr": "A pesar de la lluvia, la feria siguió abierta."
        },
        {
          "tr": "Aunque tenía razón, pidió disculpas."
        },
        {
          "tr": "Pese a todo, el proyecto siguió adelante."
        },
        {
          "tr": "Por más que lo intento, no lo consigo."
        }
      ]
    },
    "vocab": [
      "aunque",
      "aunque (registro alto)",
      "a pesar de, aunque",
      "pese a",
      "por más que",
      "si bien (libresco)",
      "aun siendo",
      "igualmente",
      "de todos modos",
      "en cualquier caso",
      "a despecho de",
      "no obstante"
    ],
    "exercises": [
      {
        "q": "¿Qué modo tras «benché»?",
        "opts": [
          "indicativo",
          "subjuntivo",
          "condicional"
        ]
      },
      {
        "q": "Completa: «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Completa: «Sebbene lo ___, non ha detto niente.» (sapere)"
      },
      {
        "q": "«Nonostante la pioggia» es:",
        "opts": [
          "nonostante + sustantivo",
          "nonostante + subjuntivo",
          "un error"
        ]
      },
      {
        "q": "¿Qué conjunción es la más libresca?",
        "opts": [
          "anche se",
          "benché",
          "quantunque"
        ]
      },
      {
        "q": "Pon el subjuntivo.",
        "tr": "Aunque era tarde salimos; aunque llovía, llegamos."
      },
      {
        "q": "«Aunque era tarde, salimos.»"
      },
      {
        "q": "Relaciona las conjunciones.",
        "tr": [
          "aunque",
          "pese a",
          "por más que",
          "aun siendo"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Aunque tenía todos los documentos, el expediente estuvo parado tres meses."
      },
      {
        "tr": "A pesar de la lluvia fuimos igualmente al mercado."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    "theme": "Gramática",
    "title": "Anche se y sus trampas",
    "objectives": [
      "usar «anche se» con indicativo",
      "distinguir «pur + gerundio» de «pur di + infinitivo»",
      "expresar una hipótesis con «anche se» + subjuntivo imperfecto"
    ],
    "theory": [
      {
        "h": "Anche se lleva indicativo, no subjuntivo",
        "p": "Es la única concesiva que NO lo lleva: <em>anche se <b>piove</b>, esco</em>. El error <em>anche se piova</em> es frecuentísimo entre quienes aprendieron bien la lección anterior."
      },
      {
        "h": "…salvo que hables de una hipótesis",
        "p": "<em>Anche se lo <b>sapessi</b>, non te lo direi</em>: vuelve el subjuntivo imperfecto, pero no por <em>anche se</em>, sino porque dentro hay un condicional de segundo tipo. La prueba: ¿la frase habla de algo irreal?"
      },
      {
        "h": "Pur + gerundio y pur di + infinitivo son cosas distintas",
        "p": "<em>Pur avendo ragione</em> = «aunque tenía razón» (concesión). <em>Pur di finire</em> = «con tal de terminar» (finalidad, con matiz de sacrificio). Se parecen, significan lo contrario y se confunden sin parar."
      },
      {
        "contrast": "El español distingue «aunque llueve» de «aunque lloviera» con el modo, igual que el italiano, así que el mecanismo te resulta familiar. Lo que no tiene equivalente directo es <em>pur di</em>: «con tal de» se le acerca, pero en italiano es mucho más frecuente y no suena enfático."
      }
    ],
    "grammar": {
      "title": "Anche se y construcciones vecinas",
      "note": "Atención a la segunda y la cuarta fila: se parecen.",
      "table": {
        "head": [
          "construcción",
          "significado",
          "ejemplo"
        ],
        "rows": [
          [
            "anche se + indicativo",
            "un hecho",
            "anche se piove, esco"
          ],
          [
            "anche se + subj. imperf.",
            "una hipótesis",
            "anche se lo sapessi, non lo direi"
          ],
          [
            "pur + gerundio",
            "mismo sujeto",
            "pur avendo ragione, ha taciuto"
          ],
          [
            "pur di + infinitivo",
            "finalidad, no concesión",
            "pur di finire, ha lavorato di notte"
          ],
          [
            "neanche se",
            "negación reforzada",
            "neanche se me lo chiedessero"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Aunque llueve, salgo igualmente."
        },
        {
          "tr": "Aunque lo supiera, no te lo diría."
        },
        {
          "tr": "Aunque tenía razón, lo dejó estar."
        },
        {
          "tr": "Con tal de terminar, trabajó toda la noche."
        },
        {
          "tr": "Ni aunque me lo pidieran lo haría."
        },
        {
          "tr": "Por difícil que sea, vale la pena."
        }
      ]
    },
    "vocab": [
      "aunque",
      "ni aunque",
      "aunque (+ gerundio)",
      "con tal de",
      "dejarlo estar",
      "valer la pena",
      "arreglárselas",
      "renunciar",
      "insistir",
      "a costa de",
      "también, incluso",
      "y sin embargo"
    ],
    "exercises": [
      {
        "q": "¿Qué modo tras «anche se» en un hecho?",
        "opts": [
          "indicativo",
          "subjuntivo",
          "indiferente"
        ]
      },
      {
        "q": "Completa: «___ piove, esco lo stesso.»"
      },
      {
        "q": "Completa: «___ ragione, ha lasciato perdere.» (pur + avere)"
      },
      {
        "q": "«Pur di finire» significa:",
        "opts": [
          "aunque terminó",
          "con tal de terminar",
          "habiendo terminado"
        ]
      },
      {
        "q": "¿Cuándo aparece el subjuntivo imperfecto tras «anche se»?",
        "opts": [
          "siempre",
          "nunca",
          "cuando la frase es una hipótesis"
        ]
      },
      {
        "q": "Pon la conjunción.",
        "tr": "Aunque llueve salgo; aunque lo supiera, no lo diría."
      },
      {
        "q": "«Aunque llueve, salgo igualmente.»"
      },
      {
        "q": "¿Qué frases son correctas?",
        "opts": [
          "Anche se piove, esco.",
          "Anche se piova, esco.",
          "Pur piovendo, esco."
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Aunque tenía cita, esperé dos horas."
      },
      {
        "tr": "Aunque tenía razón, preferí dejarlo estar."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    "theme": "Gramática",
    "title": "Tuttavia, anzi, del resto",
    "objectives": [
      "unir frases con un conector textual",
      "distinguir «anzi» de un contraste corriente",
      "elegir el registro: «pertanto» o «quindi»"
    ],
    "theory": [
      {
        "h": "Estas palabras no aportan contenido, sino una instrucción",
        "p": "<em>Tuttavia</em> dice: «lo que viene va a contracorriente de lo que acabas de leer». <em>Del resto</em> dice: «por lo demás, era previsible». Sin ellas el texto es una lista de frases y el lector debe adivinar cómo encajan."
      },
      {
        "h": "Anzi es una corrección, no un contraste",
        "p": "<em>Non mi ha disturbato, <b>anzi</b> mi ha fatto piacere.</em> <em>Anzi</em> no contradice lo anterior: lo empuja más lejos en la misma dirección. El español «al contrario» se le acerca; muchas veces «es más» encaja mejor."
      },
      {
        "h": "Registro: pertanto frente a quindi",
        "p": "<em>Pertanto</em> y <em>peraltro</em> pertenecen al lenguaje administrativo y hablados suenan rígidos. Se dice <em>quindi</em>, <em>allora</em>, <em>comunque</em>. Regla práctica: por escrito a una oficina, la primera columna; hablando, la segunda."
      },
      {
        "contrast": "Dos falsos amigos de golpe. El italiano <em>in effetti</em> significa «en efecto, la verdad es que» (conceder la razón), y no «en efecto» como consecuencia, que sería <em>di conseguenza</em>. Y <em>eventualmente</em> significa «llegado el caso», no «finalmente». Ambos suenan familiares y ambos dicen otra cosa."
      }
    ],
    "grammar": {
      "title": "Conectores textuales",
      "note": "La tercera columna da el registro o la trampa.",
      "table": {
        "head": [
          "conector",
          "qué hace",
          "nota"
        ],
        "rows": [
          [
            "tuttavia",
            "contraste",
            "registro alto"
          ],
          [
            "anzi",
            "corrección al alza",
            "«al contrario, es más»"
          ],
          [
            "del resto",
            "era previsible",
            "hablado y escrito"
          ],
          [
            "pertanto",
            "conclusión",
            "administrativo"
          ],
          [
            "semmai",
            "si acaso, a lo sumo",
            "suaviza"
          ],
          [
            "in effetti",
            "conceder la razón",
            "no «en efecto» causal"
          ]
        ]
      },
      "examples": [
        {
          "tr": "El precio es alto; sin embargo, la calidad lo justifica."
        },
        {
          "tr": "No me molestó, al contrario: me dio gusto."
        },
        {
          "tr": "Por lo demás, era previsible."
        },
        {
          "tr": "Por tanto, la solicitud debe rehacerse."
        },
        {
          "tr": "Si acaso, lo retomamos mañana."
        },
        {
          "tr": "La verdad es que tenía razón él."
        }
      ]
    },
    "vocab": [
      "sin embargo",
      "al contrario, es más",
      "por lo demás",
      "por tanto",
      "si acaso, a lo sumo",
      "la verdad es que",
      "por otra parte",
      "además (formal)",
      "y sin embargo",
      "más bien",
      "así que",
      "en resumen"
    ],
    "exercises": [
      {
        "q": "«Anzi» significa:",
        "opts": [
          "sin embargo",
          "al contrario, es más",
          "por tanto"
        ]
      },
      {
        "q": "Completa: «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "Completa: «Il prezzo è alto; ___ la qualità lo giustifica.»"
      },
      {
        "q": "«In effetti» significa:",
        "opts": [
          "en efecto (consecuencia)",
          "llegado el caso",
          "la verdad es que"
        ]
      },
      {
        "q": "¿Qué conector es administrativo?",
        "opts": [
          "pertanto",
          "quindi",
          "allora"
        ]
      },
      {
        "q": "Pon los conectores.",
        "tr": "El precio es alto; sin embargo la calidad lo justifica. Por lo demás, era previsible."
      },
      {
        "q": "«No me molestó, al contrario: me dio gusto.»"
      },
      {
        "q": "Relaciona los conectores.",
        "tr": [
          "sin embargo",
          "al contrario",
          "por tanto",
          "si acaso"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "La solicitud llegó a tiempo; sin embargo, faltaba una firma."
      },
      {
        "tr": "No es un problema, al contrario: es lo más sencillo de todo."
      }
    ]
  },
  "lesson:b2-u06-test": {
    "theme": "Examen",
    "title": "Examen final del nivel B2",
    "objectives": [
      "comprobar el subjuntivo, las condicionales, el estilo indirecto, la concesión y los conectores"
    ],
    "theory": [
      {
        "p": "Doce tareas de todo el nivel B2. Se aprueba a partir del 70%."
      }
    ],
    "exercises": [
      {
        "q": "¿Qué modo tras «sebbene»?",
        "opts": [
          "indicativo",
          "subjuntivo",
          "condicional"
        ]
      },
      {
        "q": "¿Qué modo tras «anche se» (hecho)?",
        "opts": [
          "indicativo",
          "subjuntivo",
          "condicional"
        ]
      },
      {
        "q": "Completa: «Benché ___ tardi, siamo usciti.» (essere)"
      },
      {
        "q": "Completa: «___ piove, esco lo stesso.»"
      },
      {
        "q": "Completa: «Non mi ha disturbato, ___ mi ha fatto piacere.»"
      },
      {
        "q": "«Pur di finire» significa:",
        "opts": [
          "aunque terminó",
          "habiendo terminado",
          "con tal de terminar"
        ]
      },
      {
        "q": "¿Qué frases son correctas?",
        "opts": [
          "Benché fosse tardi, siamo usciti.",
          "Anche se piove, esco.",
          "Anche se piova, esco."
        ]
      },
      {
        "q": "Estilo indirecto. Completa: «Mi ha detto che ___ il giorno dopo.» (venire)"
      },
      {
        "tr": "Si me hubieran escuchado, el problema se habría resuelto."
      },
      {
        "q": "Pon las formas.",
        "tr": "Aunque era tarde salimos; aunque llovía, no nos paramos."
      },
      {
        "tr": "Aunque había presentado todo, le pidieron otro documento."
      },
      {
        "tr": "Aunque cuesta más, al final compensa."
      }
    ]
  }
});
