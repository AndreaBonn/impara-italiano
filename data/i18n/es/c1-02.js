/* ============================================================
   Textos en la lengua del estudiante (es) para data/core/c1-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c1-u04": {
    "title": "La suposición",
    "grammarNote": "sarà stanco · deve essere · magari, mica, chissà"
  },
  "lesson:c1-u04-l1": {
    "theme": "Gramática",
    "title": "Il futuro che non parla del futuro",
    "objectives": [
      "reconocer el futuro usado como suposición",
      "usar el futuro compuesto para suponer sobre el pasado",
      "estimar una hora, una edad o una cantidad con el futuro"
    ],
    "theory": [
      {
        "h": "«Sarà stanco» no habla del futuro",
        "p": "La frase significa <b>estará cansado</b> en el sentido de «seguramente lo está», no «lo estará mañana». El italiano usa el futuro para decir que no lo sabe con certeza. Un futuro real y una suposición son idénticos en la forma; lo decide el contexto."
      },
      {
        "h": "La suposición sobre el pasado toma el futuro compuesto",
        "p": "<em>Avrà perso il treno</em> = «habrá perdido el tren». La misma forma que normalmente significa «lo habrá terminado para entonces» empuja aquí la suposición hacia atrás. El italiano lo distingue sin esfuerzo porque la frase no nombra ningún punto futuro."
      },
      {
        "h": "Estimar: hora, edad, cantidad",
        "p": "<em>Saranno le tre</em>, <em>ne avrà quaranta</em>, <em>saranno dieci chilometri</em>. Es el uso más frecuente en la conversación diaria: cuando alguien da un número que no ha comprobado, casi siempre lo pone en futuro."
      },
      {
        "contrast": "Aquí el español no tiene que aprender nada: «estará cansado», «habrá perdido el tren» funcionan igual, forma por forma. Es de las poquísimas veces en este curso en que la estructura viene regalada. La única diferencia de uso está en la frase concesiva <em>sarà anche bravo, ma…</em>, que en español se hace con «será muy bueno, pero…», con el «muy» casi obligatorio."
      }
    ],
    "grammar": {
      "title": "El futuro como suposición",
      "note": "La tercera columna dice qué hace la frase en realidad.",
      "table": {
        "head": [
          "frase",
          "forma",
          "qué hace"
        ],
        "rows": [
          [
            "Sarà stanco.",
            "futuro semplice",
            "suposición sobre el presente"
          ],
          [
            "Avrà perso il treno.",
            "futuro anteriore",
            "suposición sobre el pasado"
          ],
          [
            "Saranno le tre.",
            "futuro semplice",
            "estimación de hora o cantidad"
          ],
          [
            "Sarà anche bravo, ma…",
            "futuro concessivo",
            "concesión irónica"
          ],
          [
            "Domani sarà a Roma.",
            "futuro semplice",
            "futuro real"
          ]
        ]
      },
      "examples": [
        {
          "tr": "No contesta: seguirá en la reunión."
        },
        {
          "tr": "¿Qué hora es? Serán las tres pasadas."
        },
        {
          "tr": "Habrá perdido el tren, no suele llegar tarde."
        },
        {
          "tr": "¿Cuántos años tiene? Tendrá unos cuarenta."
        },
        {
          "tr": "No lo he visto: habrá salido antes."
        },
        {
          "tr": "Será muy bueno, pero a mí no me convence."
        }
      ]
    },
    "vocab": [
      "la suposición",
      "probablemente",
      "presumiblemente",
      "a ojo",
      "me imagino",
      "estará",
      "habrá",
      "quién sabe",
      "dar por sentado",
      "aventurar",
      "tener la impresión",
      "a bulto"
    ],
    "exercises": [
      {
        "q": "¿Qué significa «Sarà stanco»?",
        "opts": [
          "Estará cansado mañana",
          "Seguramente está cansado",
          "Estuvo cansado"
        ]
      },
      {
        "q": "Completa: «Non risponde: ___ ancora in riunione.» (essere, suposición)"
      },
      {
        "q": "Completa: «___ il treno, di solito non fa tardi.» (perdere, futuro compuesto)"
      },
      {
        "q": "«Saranno le tre» es:",
        "opts": [
          "una estimación de la hora",
          "un plan para las tres",
          "una orden"
        ]
      },
      {
        "q": "¿Con qué tiempo supone el italiano sobre el pasado?",
        "opts": [
          "imperfetto",
          "passato prossimo",
          "futuro anteriore"
        ]
      },
      {
        "q": "Pon las formas de suposición.",
        "tr": "No contesta: seguirá en la reunión. O se habrá olvidado el teléfono."
      },
      {
        "q": "«Serán las tres, o las tres pasadas.»"
      },
      {
        "q": "¿Qué frases son suposiciones?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà quarant'anni."
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "¿No te ha devuelto la llamada? Habrá tenido un día complicado."
      },
      {
        "tr": "Estará cansado: ha conducido ocho horas."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    "theme": "Gramática",
    "title": "Dovere e potere: obbligo o probabilità",
    "objectives": [
      "distinguir el «deve» de obligación del «deve» de suposición",
      "usar «può darsi che» con subjuntivo",
      "expresar una expectativa con «dovrebbe»"
    ],
    "theory": [
      {
        "h": "La misma palabra, dos trabajos distintos",
        "p": "<em>Devi essere puntuale</em> es obligación. <em>Deve essere stanco</em> es suposición. La forma es la misma y lo decide lo que hay al lado: la suposición casi siempre viene con su indicio («ha guidato tutta la notte»), la obligación con un plazo o una regla."
      },
      {
        "h": "Può darsi che pide subjuntivo",
        "p": "<em>Può darsi che non <b>abbia</b> ricevuto il messaggio.</em> En conversación es más frecuente que <em>è possibile che</em> y suena menos formal. Tras <em>può darsi che</em> nunca va indicativo, ni siquiera cuando el hecho es evidente."
      },
      {
        "h": "Dovrebbe: expectativa, no deber",
        "p": "<em>Dovrebbe essere già arrivato</em> no dice que nadie tenga la obligación de llegar: dice que, según el horario, ya debería estar aquí. Es un punto en una escala de certeza, por encima de <em>potrebbe</em> y por debajo de <em>deve</em>."
      },
      {
        "contrast": "El español marca esta diferencia con una preposición: «debe de estar cansado» (suposición) frente a «debe estar puntual» (obligación). El italiano no tiene ese «de» y por tanto no marca nada, así que al leer se busca una señal que no existe. La señal está en el indicio que acompaña a la frase, no en la forma verbal."
      }
    ],
    "grammar": {
      "title": "Escala de certeza",
      "note": "De lo más seguro a la exclusión.",
      "table": {
        "head": [
          "construcción",
          "modo",
          "qué significa"
        ],
        "rows": [
          [
            "deve essere",
            "indicativo",
            "probabilidad alta"
          ],
          [
            "devi essere",
            "indicativo",
            "obligación"
          ],
          [
            "potrebbe",
            "condizionale",
            "posibilidad"
          ],
          [
            "può darsi che",
            "+ congiuntivo",
            "posibilidad, registro coloquial"
          ],
          [
            "dovrebbe",
            "condizionale",
            "expectativa"
          ],
          [
            "non può essere",
            "indicativo",
            "exclusión"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Debe de estar cansado: ha conducido toda la noche."
        },
        {
          "tr": "Tienes que ser puntual, la cita es a las nueve."
        },
        {
          "tr": "Podría llegar tarde, hay tráfico."
        },
        {
          "tr": "Puede que no haya recibido el mensaje."
        },
        {
          "tr": "Ya debería estar aquí a estas horas."
        },
        {
          "tr": "No puede ser él: lleva una semana de vacaciones."
        }
      ]
    },
    "vocab": [
      "puede que",
      "es probable que",
      "es poco probable que",
      "con toda probabilidad",
      "casi con seguridad",
      "descartar",
      "a menos que",
      "salvo imprevistos",
      "presumir",
      "aventurar",
      "en líneas generales",
      "si no me equivoco"
    ],
    "exercises": [
      {
        "q": "«Deve essere stanco» significa:",
        "opts": [
          "Tiene que estar cansado por obligación",
          "Debe de estar cansado",
          "Tiene que cansarse"
        ]
      },
      {
        "q": "Completa: «___ essere stanco: ha guidato tutta la notte.»"
      },
      {
        "q": "Completa: «___ essere già arrivato a quest'ora.» (dovere, condicional)"
      },
      {
        "q": "Tras «può darsi che» va:",
        "opts": [
          "subjuntivo",
          "indicativo",
          "condicional"
        ]
      },
      {
        "q": "¿Qué frase descarta la posibilidad?",
        "opts": [
          "Potrebbe arrivare tardi.",
          "Dovrebbe essere arrivato.",
          "Non può essere lui."
        ]
      },
      {
        "q": "Pon las formas.",
        "tr": "Puede que no haya recibido el mensaje."
      },
      {
        "q": "«Debe de estar cansado.» (con dovere)"
      },
      {
        "q": "Relaciona las construcciones.",
        "tr": [
          "puede que",
          "debería (expectativa)",
          "descartar",
          "salvo imprevistos"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "Ya debería estar aquí, salió a las seis."
      },
      {
        "tr": "Puede que haya cambiado de idea, pasa."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    "theme": "Gramática",
    "title": "Magari, mica, chissà",
    "objectives": [
      "distinguir los tres usos de «magari»",
      "reforzar la negación con «mica»",
      "suspender el juicio con «chissà» y «sarà…, ma»"
    ],
    "theory": [
      {
        "h": "Magari tiene tres sentidos y el modo decide dos de ellos",
        "p": "Con indicativo: <em>magari piove</em> = «quizá llueve». Con subjuntivo imperfecto: <em>magari potessi!</em> = «¡ojalá pudiera!». Solo, como respuesta: <em>Vieni? Magari!</em> = «¡ya me gustaría!». Tres cosas distintas, una sola palabra."
      },
      {
        "h": "Mica refuerza la negación",
        "p": "<em>Non è mica finita</em> no es «no ha terminado» sino «no ha terminado en absoluto», con un matiz de réplica a lo que el otro acaba de dar por hecho. Va después del verbo y es exclusivamente hablado."
      },
      {
        "h": "Suspender el juicio: chissà y sarà…, ma",
        "p": "<em>Chissà se si sono ricordati</em> dice abiertamente que no lo sabemos. <em>Sarà, ma io non ci credo</em> es la manera cortés de discrepar: primero se le concede la razón al otro, luego se sigue con la propia. Muy frecuente y muy italiano."
      },
      {
        "contrast": "El español cubre dos de los tres sentidos con palabras distintas: «quizá» para el primero y «ojalá» para el segundo, y este último calca exactamente el italiano porque también pide subjuntivo. El tercero, el <em>magari</em> suelto como respuesta entusiasta, se dice «¡ya me gustaría!» y no tiene forma breve. Para <em>mica</em> lo más cercano es «para nada»."
      }
    ],
    "grammar": {
      "title": "Palabras que modalizan la frase",
      "note": "La segunda columna dice qué le hace la palabra a la frase.",
      "table": {
        "head": [
          "palabra",
          "qué hace",
          "ejemplo"
        ],
        "rows": [
          [
            "magari + indicativo",
            "quizá, probablemente",
            "Magari piove."
          ],
          [
            "magari + congiuntivo imperfetto",
            "deseo irreal",
            "Magari potessi!"
          ],
          [
            "magari (da solo)",
            "¡ya me gustaría!",
            "Vieni? Magari!"
          ],
          [
            "mica",
            "refuerza la negación",
            "Non è mica finita."
          ],
          [
            "chissà",
            "admitir que no se sabe",
            "Chissà se arriva."
          ],
          [
            "sarà…, ma",
            "discrepancia cortés",
            "Sarà, ma non ci credo."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Quizá llueve, mejor coge el paraguas."
        },
        {
          "tr": "¡Ojalá pudiera ir yo también!"
        },
        {
          "tr": "Quizá nos vemos mañana, te escribo."
        },
        {
          "tr": "No ha terminado para nada, quedan diez minutos."
        },
        {
          "tr": "Quién sabe si se acordaron."
        },
        {
          "tr": "Bueno, será, pero yo no me lo creo."
        }
      ]
    },
    "vocab": [
      "quizá, ojalá, ya me gustaría",
      "para nada",
      "quién sabe",
      "ni idea",
      "claro que sí",
      "a ver, mira",
      "bueno, será",
      "vete a saber",
      "si acaso",
      "nunca se sabe",
      "cualquiera sabe",
      "será verdad, pero"
    ],
    "exercises": [
      {
        "q": "«Magari piove» significa:",
        "opts": [
          "Ojalá llueva",
          "Quizá llueve",
          "Si lloviera"
        ]
      },
      {
        "q": "Completa: «Non è ___ finita, mancano dieci minuti.»"
      },
      {
        "q": "Completa: «___ se si sono ricordati.»"
      },
      {
        "q": "«Magari potessi venire!» es:",
        "opts": [
          "una suposición",
          "una propuesta",
          "un deseo irreal"
        ]
      },
      {
        "q": "«Mica» refuerza:",
        "opts": [
          "la negación",
          "la pregunta",
          "la orden"
        ]
      },
      {
        "q": "Pon las palabras.",
        "tr": "No ha terminado para nada, quedan diez minutos. Quién sabe si se dieron cuenta."
      },
      {
        "q": "«¡Ojalá pudiera ir yo también!»"
      },
      {
        "q": "¿Qué palabras señalan incertidumbre?",
        "opts": [
          "chissà",
          "boh",
          "vai a sapere",
          "certamente"
        ]
      },
      {
        "q": "Ordena la frase."
      },
      {
        "tr": "No está dicho en absoluto que venga, ayer no estaba seguro."
      },
      {
        "tr": "Quién sabe si se dieron cuenta, nadie dijo nada."
      }
    ]
  },
  "lesson:c1-u04-test": {
    "theme": "Gramática",
    "title": "Test — La suposición",
    "exercises": [
      {
        "q": "«Sarà stanco» significa:",
        "opts": [
          "Estará cansado mañana",
          "Seguramente está cansado",
          "Suele estar cansado"
        ]
      },
      {
        "q": "«Saranno le tre» es:",
        "opts": [
          "una estimación de la hora",
          "un plan para las tres",
          "una orden"
        ]
      },
      {
        "q": "Completa: «Non risponde: ___ in riunione.» (essere, suposición)"
      },
      {
        "q": "Completa: «___ il treno, di solito non fa tardi.» (perdere)"
      },
      {
        "q": "Completa: «Non è ___ finita, mancano dieci minuti.»"
      },
      {
        "q": "La suposición sobre el pasado se expresa con:",
        "opts": [
          "imperfetto",
          "condizionale",
          "futuro anteriore"
        ]
      },
      {
        "q": "¿Qué frases son suposiciones?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà perso il treno."
        ]
      },
      {
        "q": "Pon las formas.",
        "tr": "No contesta: estará en la reunión. Puede que llame más tarde."
      },
      {
        "tr": "Le habrá surgido algo, normalmente avisa."
      },
      {
        "tr": "Ya debería estar en la oficina a estas horas."
      }
    ]
  }
});
