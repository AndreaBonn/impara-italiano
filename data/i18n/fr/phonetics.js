/* ============================================================
   Paires minimales — textes en français.

   Les notes contrastives sont écrites pour un francophone, pas
   traduites : le problème change avec la langue. Le français n'a
   pas de consonnes longues et son accent tombe toujours à la fin
   du groupe, donc l'accent mobile italien est ici la difficulté
   principale, alors qu'un anglophone le connaît déjà.
   ============================================================ */
LINGUAI.addStrings("fr", {

  "ph:ph-doppie": {
    title: "Les consonnes doubles",
    note: "Une consonne double est un seul son tenu plus longtemps, pas deux sons à la suite. Dans nonno la langue reste contre les alvéoles environ deux fois plus longtemps que dans nono.",
    contrast: "Le français double les lettres à l'écrit et les prononce simples : <i>pomme</i>, <i>ballon</i>, <i>attendre</i>. Ton oreille a donc appris que le redoublement est une affaire d'orthographe, et en italien c'est le mot lui-même : <i>nonno</i> est un grand-père, <i>nono</i> est neuvième. Il faut d'abord l'ENTENDRE : tant que l'oreille ne fait pas la différence, la bouche ne la fera pas non plus.",
    pairs: [
      { glossA: "grand-père", glossB: "neuvième" },
      { glossA: "sept", glossB: "soif" },
      { glossA: "caisse", glossB: "maison" },
      { glossA: "stylo", glossB: "peine, punition" },
      { glossA: "balle, ballon", glossB: "pelle" },
      { glossA: "sommeil", glossB: "je suis" },
      { glossA: "nuit", glossB: "notes" },
      { glossA: "rouge (f.)", glossB: "rose" }
    ]
  },

  "ph:ph-accento": {
    title: "La place de l'accent",
    note: "En italien l'accent peut tomber sur l'avant-avant-dernière syllabe, sur l'avant-dernière ou sur la dernière, et c'est lui qui décide quel mot tu viens de dire. L'accent écrit (àncora) sert à l'apprentissage : un texte italien ordinaire ne le note pas.",
    contrast: "C'est le point le plus difficile pour toi, plus que les consonnes doubles. En français l'accent tombe à la fin du groupe de mots et ne distingue jamais deux mots : tu ne l'as donc jamais écouté. En italien il est mobile et il porte le sens. <i>Àncora</i> est une ancre, <i>ancòra</i> veut dire encore : déplacer l'accent ne fait pas un accent étranger, cela fait un autre mot.",
    pairs: [
      { glossA: "ancre", glossB: "encore, toujours" },
      { glossA: "princes", glossB: "principes" },
      { glossA: "tout de suite", glossB: "subi, enduré" },
      { glossA: "j'arrive, il m'arrive", glossB: "compris" },
      { glossA: "lire", glossB: "légères (f. pl.)" }
    ]
  },

  "ph:ph-e-aperta": {
    title: "E ouvert et E fermé",
    note: "Le è ouvert se prononce la bouche plus ouverte que le é fermé. La distinction varie selon les régions et les Italiens eux-mêmes ne s'accordent pas, mais dans ces deux paires elle change le mot.",
    contrast: "Ici tu es en terrain connu : le français oppose déjà <i>é</i> et <i>è</i>, <i>pré</i> et <i>près</i>. Les deux sons sont dans ta bouche, il ne reste qu'à écouter lequel tu entends. C'est la partie la plus facile de cette section pour un francophone, et de loin.",
    pairs: [
      { glossA: "pêche (le fruit)", glossB: "la pêche (l'activité)" },
      { glossA: "hache", glossB: "il/elle accepte" }
    ]
  },

  "ph:ph-gli": {
    title: "Le son GL",
    note: "gl devant i est un seul son : le milieu de la langue touche le palais et l'air sort par les côtés. Ce n'est ni un l, ni un l suivi d'un y.",
    contrast: "Le français a eu ce son et l'a perdu : c'est l'ancien l mouillé de <i>fille</i> et <i>travail</i>, aujourd'hui prononcé comme un simple y. Le réflexe est donc de dire <i>li</i> ou <i>yi</i>, et <i>figli</i> (fils) devient <i>fili</i> (fils au sens de fil). Il faut remettre la langue contre le palais, là où l'orthographe française garde encore la trace.",
    pairs: [
      { glossA: "article : les ; lui", glossB: "les (pronom)" },
      { glossA: "fils (enfants)", glossB: "fils (de fer), fils textiles" },
      { glossA: "épouse", glossB: "molles (pl.)" }
    ]
  },

  "ph:ph-dolci-dure": {
    title: "C et G doux ou durs",
    note: "c et g s'adoucissent devant e et i : ci se dit comme <i>tchi</i>, gi comme <i>dji</i>. Un h glissé entre les deux les durcit à nouveau : chi se dit <i>ki</i>, ghi se dit <i>gui</i>.",
    contrast: "La règle du ramollissement est la même qu'en français, mais le résultat ne l'est pas : le c italien devant e/i n'est pas un s, c'est <i>tch</i>, et le g n'est pas le j de <i>jour</i>, c'est <i>dj</i>. Et là où le français écrit <i>qu</i> et <i>gu</i>, l'italien écrit <i>ch</i> et <i>gh</i> : <i>pesche</i> se lit <i>pesqué</i>, des pêches.",
    pairs: [
      { glossA: "baisers", glossB: "vers, larves" },
      { glossA: "poisson", glossB: "pêches (les fruits)" },
      { glossA: "tour, balade", glossB: "loir" }
    ]
  }

});
