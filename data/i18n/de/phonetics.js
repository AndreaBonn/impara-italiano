/* ============================================================
   Minimalpaare — Texte auf Deutsch.

   Die kontrastiven Hinweise sind für Deutschsprachige geschrieben,
   nicht übersetzt: das Problem ist in jeder Sprache ein anderes.
   Im Deutschen kürzt eine Doppelkonsonanz den Vokal davor, statt
   die Konsonanz selbst zu dehnen — genau umgekehrt zum Italienischen.
   ============================================================ */
LINGUAI.addStrings("de", {

  "ph:ph-doppie": {
    title: "Doppelkonsonanten",
    note: "Ein Doppelkonsonant ist ein einziger, länger gehaltener Laut, nicht zwei nacheinander. In nonno bleibt die Zunge etwa doppelt so lange am Zahndamm wie in nono.",
    contrast: "Hier hilft dir dein Schriftbild und täuscht dich zugleich. Deutsche Doppelbuchstaben sagen etwas über den <i>Vokal davor</i>: in <i>Ratte</i> gegen <i>Rate</i> wird das a kurz, das t bleibt gleich lang. Im Italienischen ist es umgekehrt: der Vokal bleibt, der Konsonant wird gedehnt. Wenn du <i>nonno</i> nach deutschem Muster liest, kürzt du das o und lässt das n unverändert — und sagst damit weder das eine noch das andere Wort.",
    pairs: [
      { glossA: "Großvater", glossB: "neunter" },
      { glossA: "sieben", glossB: "Durst" },
      { glossA: "Kasse, Kiste", glossB: "Haus" },
      { glossA: "Kugelschreiber", glossB: "Mühe, Strafe" },
      { glossA: "Ball", glossB: "Schaufel" },
      { glossA: "Schlaf", glossB: "ich bin" },
      { glossA: "Nacht", glossB: "Noten" },
      { glossA: "rot (f.)", glossB: "rosa, Rose" }
    ]
  },

  "ph:ph-accento": {
    title: "Wo die Betonung liegt",
    note: "Im Italienischen kann die Betonung auf der drittletzten, der vorletzten oder der letzten Silbe liegen, und sie entscheidet, welches Wort du gesagt hast. Der geschriebene Akzent (àncora) ist eine Lernhilfe; im normalen italienischen Text steht er nicht.",
    contrast: "Das kennst du: <i>úmschreiben</i> und <i>umschréiben</i> sind zwei Wörter. Die Falle ist eine andere — Italienisch sieht aus, als spräche man es, wie man es schreibt, also liest du zügig und legst die Betonung auf die vorletzte Silbe. Das stimmt meistens und geht genau dort schief, wo es zählt: <i>àncora</i> ist ein Anker, <i>ancòra</i> heißt noch.",
    pairs: [
      { glossA: "Anker", glossB: "noch, wieder" },
      { glossA: "Fürsten", glossB: "Grundsätze" },
      { glossA: "sofort", glossB: "erlitten" },
      { glossA: "ich komme vorbei, es passiert mir", glossB: "verstanden" },
      { glossA: "lesen", glossB: "leichte (f. Pl.)" }
    ]
  },

  "ph:ph-e-aperta": {
    title: "Offenes und geschlossenes E",
    note: "Das offene è wird mit weiter geöffnetem Mund gesprochen als das geschlossene é. Die Unterscheidung ist regional verschieden und selbst Italiener sind sich nicht einig, aber in diesen beiden Paaren ändert sie das Wort.",
    contrast: "Auch das hast du schon: das e in <i>Bett</i> gegen das in <i>Beet</i>. Beide Laute sind in deinem Mund, neu ist nur, dass die Wahl zwischen ihnen etwas bedeutet. Es ist der schwierigste Punkt dieses Kapitels und der folgenloseste: ein falsches e rettet meist der Zusammenhang, eine falsche Konsonantenlänge nicht.",
    pairs: [
      { glossA: "Pfirsich", glossB: "das Fischen" },
      { glossA: "Beil", glossB: "er/sie nimmt an" }
    ]
  },

  "ph:ph-gli": {
    title: "Der GL-Laut",
    note: "gl vor i ist ein einziger Laut: die Zungenmitte berührt den Gaumen, die Luft entweicht seitlich. Es ist weder ein l noch ein l mit nachfolgendem j.",
    contrast: "Das Deutsche hat diesen Laut nicht, und der Reflex greift zu <i>lj</i> wie in <i>Familie</i> — zwei Laute, wo das Italienische einen hat. Sprich <i>Familie</i> und halte die Mitte fest, ohne das eigene i danach: das kommt figli nahe.",
    pairs: [
      { glossA: "Artikel: die (m. Pl.); ihm", glossB: "sie (Akkusativ, m.)" },
      { glossA: "Söhne", glossB: "Fäden, Drähte" },
      { glossA: "Ehefrau", glossB: "weiche (Pl.)" }
    ]
  },

  "ph:ph-dolci-dure": {
    title: "Weiches und hartes C und G",
    note: "c und g werden vor e und i weich: ci klingt wie <i>tschi</i>, gi wie <i>dschi</i>. Ein dazwischengeschobenes h macht sie wieder hart: chi ist <i>ki</i>, ghi ist <i>gi</i>.",
    contrast: "Zu hören ist hier nichts Schweres, zu lesen schon. Im Deutschen ist <i>ch</i> ein eigener Laut, also liest du <i>pesche</i> als <i>pesche</i> — auf Italienisch heißt es <i>peske</i>, Pfirsiche. Das h wird gar nicht gesprochen: es steht nur da, um den Konsonanten daneben zu ändern.",
    pairs: [
      { glossA: "Küsse", glossB: "Maden, Larven" },
      { glossA: "Fisch", glossB: "Pfirsiche" },
      { glossA: "Runde, Fahrt", glossB: "Siebenschläfer" }
    ]
  }

});
