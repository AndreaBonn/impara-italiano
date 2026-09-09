/* ============================================================
   Texte in der Sprache der lernenden Person (de) zu
   data/core/conversations.js
   Die Schlüssel verweisen auf die id der neutralen Schicht; Arrays
   werden nach Index zusammengeführt, ihre Länge muss also mit core
   übereinstimmen. Geprüft von scripts/parity.mjs.

   Hinweis: Die italienischen Musterantworten liegen in core und sind
   als Audio aufgenommen. Eine Aufgabe, die zu „Sono dalla Polonia"
   führt, spricht deshalb auch hier von Polen. Das Land zu ändern
   hieße, mp3-Dateien neu zu erzeugen.
   ============================================================ */
LINGUAI.addStrings("de", {
  "conv:bar-mattina": {
    title: "Frühstück in der Bar",
    setting: "Montag, 8:15 Uhr. Du gehst in die Bar an der Ecke. Der Barmann kennt dein Gesicht.",
    closing: "Drei Minuten, ein Kaffee, keine Sekunde zu viel. So geht italienisches Frühstück.",
    turns: [
      { tr: "Guten Morgen! Was darf es sein?" },
      { task: "Grüß und bestell einen Kaffee und ein Cornetto.", tr: "Guten Morgen, einen Kaffee und ein Cornetto, bitte." },
      { tr: "Das Cornetto pur oder mit Creme gefüllt?" },
      { task: "Sag, dass du es lieber pur hättest.", tr: "Pur, danke." },
      { tr: "Perfekt. Das macht zwei dreißig." },
      { task: "Sag, dass du mit Karte zahlst.", tr: "Kann ich mit Karte zahlen?" },
      { tr: "Natürlich, das Gerät steht direkt hier. Einen schönen Tag!" },
      { task: "Bedank dich und verabschiede dich.", tr: "Danke, schönen Tag noch!" }
    ]
  },
  "conv:presentarsi": {
    title: "Erster Kurstag",
    setting: "Eine Sprachschule in Florenz. Jemand setzt sich vor dem Unterricht neben dich.",
    closing: "Vier Sätze, und du hast deine erste italienische Bekanntschaft. Mehr braucht es nicht.",
    turns: [
      { tr: "Hallo! Darf ich mich hierhin setzen?" },
      { task: "Stimm freundlich zu.", tr: "Klar, setz dich!" },
      { tr: "Danke. Ich bin Matteo, und du?" },
      { task: "Stell dich mit deinem Namen vor.", tr: "Ich heiße Anna." },
      { tr: "Freut mich! Woher kommst du?" },
      { task: "Sag, dass du aus Polen kommst — so lautet die aufgenommene Musterantwort.", tr: "Ich komme aus Polen." },
      { tr: "Schön! Und was machst du beruflich?" },
      { task: "Sag, was du beruflich machst (zum Beispiel Lehrerin).", tr: "Ich bin Lehrerin." }
    ]
  },
  "conv:mercato": {
    title: "Auf dem Wochenmarkt",
    setting: "Samstagvormittag, ein Markt unter freiem Himmel. Der Händler ruft die Preise über die Straße.",
    closing: "Auf dem Markt zählen Tempo und Genauigkeit. Etti, chili, basta così.",
    turns: [
      { tr: "Bitte sehr, was darf's sein! Heute habe ich wunderbare Tomaten." },
      { task: "Bitte um ein Kilo Tomaten.", tr: "Ein Kilo Tomaten, bitte." },
      { tr: "Bitte schön. Sonst noch etwas? Äpfel sind heute günstig." },
      { task: "Frag, was die Äpfel kosten.", tr: "Was kosten die Äpfel?" },
      { tr: "Zwei Euro das Kilo. Süß wie Zucker." },
      { task: "Sag, dass das reicht, und frag nach dem Gesamtpreis.", tr: "Das ist alles, was macht das zusammen?" },
      { tr: "Vier fünfzig. Danke schön!" }
    ]
  },
  "conv:ristorante": {
    title: "Abendessen im Restaurant",
    setting: "Abends, ein Restaurant, ohne Reservierung. Der Kellner kommt mit den Karten.",
    closing: "Bestellen läuft auf Italienisch in fester Reihenfolge: primo, secondo, contorno, dolce, caffè.",
    turns: [
      { tr: "Guten Abend! Haben Sie reserviert?" },
      {
        task: "Sag nein und frag nach einem Tisch für zwei.",
        tr: "Nein, hätten Sie einen Tisch für zwei?"
      },
      { tr: "Selbstverständlich, nehmen Sie Platz. Hier sind die Karten. Etwas zu trinken?" },
      {
        task: "Bestell eine Flasche Wasser mit Kohlensäure und ein Glas Rotwein.",
        tr: "Eine Flasche Wasser mit Kohlensäure und ein Glas Rotwein."
      },
      { tr: "Sehr gern. Und als Vorspeise?" },
      {
        task: "Bestell die cacio e pepe und frag, ob sie scharf sind.",
        tr: "Ich nehme die cacio e pepe. Sind sie scharf?"
      },
      { tr: "Nur ein wenig, man schmeckt den Pfeffer. Möchten Sie einen Hauptgang?" },
      {
        task: "Lehn höflich ab und bitte später um die Rechnung.",
        tr: "Nein danke, nur die Rechnung später, bitte."
      }
    ]
  },
  "conv:treno": {
    title: "Am Schalter",
    setting: "Roma Termini, Schlange am Schalter, die Abfahrtstafel flackert darüber.",
    closing: "Regionale oder Frecciarossa — der Unterschied sind eine Stunde Fahrt und dreißig Euro.",
    turns: [
      { tr: "Der Nächste, bitte." },
      {
        task: "Bitte um eine Fahrkarte nach Florenz für heute Nachmittag.",
        tr: "Eine Fahrkarte nach Florenz für heute Nachmittag."
      },
      { tr: "Regionale oder Frecciarossa? Der Freccia braucht anderthalb Stunden." },
      { task: "Frag, was der Frecciarossa kostet.", tr: "Was kostet der Frecciarossa?" },
      { tr: "Zweiundvierzig Euro in der zweiten Klasse." },
      { task: "Nimm an und frag, von welchem Gleis er abfährt.", tr: "In Ordnung, von welchem Gleis fährt er ab?" },
      { tr: "Gleis 9, in zwanzig Minuten. Denken Sie ans Entwerten, wenn Sie den Regionale nehmen." }
    ]
  },
  "conv:medico": {
    title: "Beim Arzt",
    setting: "Eine Praxis, Sprechstunde ohne Termin. Der Arzt fragt, was los ist.",
    closing: "Drei Sätze retten dich beim Arzt: mi fa male, da quanto tempo, ho la febbre.",
    turns: [
      { tr: "Guten Tag, setzen Sie sich. Was fehlt Ihnen?" },
      { task: "Sag, dass dir der Hals wehtut und du Fieber hast.", tr: "Mir tut der Hals weh und ich habe Fieber." },
      { tr: "Seit wann?" },
      { task: "Sag, seit drei Tagen.", tr: "Seit drei Tagen." },
      { tr: "Sind Sie gegen ein Medikament allergisch?" },
      { task: "Sag, dass du keine Allergien hast.", tr: "Nein, ich habe keine Allergien." },
      { tr: "Ich verschreibe Ihnen ein Antibiotikum. Ruhe und viel Wasser." },
      { task: "Frag, wie oft am Tag du es nehmen sollst.", tr: "Wie oft am Tag soll ich es nehmen?" }
    ]
  },
  "conv:affitto": {
    title: "Wohnungsbesichtigung",
    setting: "Ein Makler zeigt dir eine Zweizimmerwohnung in Bologna. Du hast zehn Minuten und hundert Fragen.",
    closing: "Drei Dinge, nach denen man immer fragt: spese condominiali, cauzione, tipo di contratto.",
    turns: [
      { tr: "So, hier ist die Wohnung. Wie Sie sehen: hell und frisch renoviert." },
      { task: "Frag, wie hoch die Monatsmiete ist.", tr: "Wie hoch ist die Monatsmiete?" },
      { tr: "Siebenhundert im Monat, ohne Nebenkosten." },
      { task: "Frag, wie hoch die Nebenkosten sind.", tr: "Wie hoch sind die Nebenkosten?" },
      { tr: "Rund neunzig Euro, Heizung inklusive." },
      { task: "Frag nach der Vertragsart und nach der Höhe der Kaution.", tr: "Was für ein Vertrag ist das? Und wie hoch ist die Kaution?" },
      { tr: "Ein 4+4-Vertrag, Kaution in Höhe von drei Monatsmieten." },
      { task: "Sag, dass du darüber nachdenkst und dich morgen meldest.", tr: "Ich denke darüber nach und melde mich morgen." }
    ]
  },
  "conv:colloquio": {
    title: "Ein Vorstellungsgespräch",
    setting: "Eine Marketingagentur in Mailand. Die Personalabteilung beginnt mit dem Klassiker.",
    closing: "Im italienischen Vorstellungsgespräch spricht man konkret und macht sich nicht kleiner, als man ist.",
    turns: [
      { tr: "Gut, erzählen Sie ein bisschen von sich." },
      {
        task: "Nenne deinen Namen, wie viel Erfahrung du hast und worin.",
        tr: "Ich heiße Anna, ich habe fünf Jahre Erfahrung im digitalen Marketing."
      },
      { tr: "Warum haben Sie sich bei uns beworben?" },
      {
        task: "Sag, dass dich ihr Umgang mit internationalen Projekten interessiert.",
        tr: "Weil mich Ihr Umgang mit internationalen Projekten interessiert."
      },
      { tr: "Was wäre Ihre Schwäche?" },
      {
        task: "Nenne eine Schwäche und sag, wie du daran arbeitest.",
        tr: "Ich neige dazu, alles kontrollieren zu wollen, aber ich lerne zu delegieren."
      },
      { tr: "Gut. Haben Sie Fragen an uns?" },
      {
        task: "Frag nach dem Team und nach den nächsten Schritten im Verfahren.",
        tr: "Ja: Wie ist das Team aufgestellt, und wie sind die nächsten Schritte?"
      }
    ]
  },
  "conv:burocrazia": {
    title: "Im Finanzamt",
    setting: "In der Schlange für den codice fiscale. Du hast Nummer 87, die Anzeige steht auf 61.",
    closing: "Der codice fiscale ist in Italien der Schlüssel zu allem: Bankkonto, Verträge, Arzt, SIM-Karte.",
    turns: [
      { tr: "Nummer siebenundachtzig, Schalter drei. Guten Tag, was brauchen Sie?" },
      { task: "Sag, dass du einen codice fiscale beantragen musst.", tr: "Ich muss einen codice fiscale beantragen." },
      { tr: "Haben Sie ein gültiges Ausweisdokument und das ausgefüllte Formular?" },
      {
        task: "Sag, dass du deinen Reisepass hast, aber nicht das Formular.",
        tr: "Ich habe meinen Reisepass, aber ich habe das Formular nicht."
      },
      { tr: "Kein Problem, ich gebe Ihnen eines. In Druckbuchstaben, bitte." },
      { task: "Frag, wie lange es dauert.", tr: "Wie lange dauert es?" },
      { tr: "Ich stelle ihn sofort aus, das geht direkt." }
    ]
  },
  "conv:dibattito": {
    title: "Eine Diskussion beim Essen",
    setting: "Abendessen bei Freunden. Das Gespräch kommt auf Homeoffice, und niemand will nachgeben.",
    closing: "Italiener fallen sich beim Diskutieren ins Wort — das ist keine Unhöflichkeit, das ist Anteilnahme.",
    turns: [
      { tr: "Für mich hat das Homeoffice jedes Teamgefühl zerstört. Was meinst du?" },
      {
        task: "Gib teilweise recht und bring dann ein Gegenargument.",
        tr: "Teilweise stimme ich zu, aber es hat auch den Stress für alle gesenkt, die pendeln."
      },
      { tr: "Schon, aber findest du nicht, dass Jüngere außerhalb des Büros weniger lernen?" },
      {
        task: "Antworte, dass es davon abhängt, wie die Firma die Einarbeitung organisiert.",
        tr: "Das hängt davon ab, wie die Firma die Einarbeitung organisiert."
      },
      { tr: "Da gebe ich dir recht. Aber hybrid ist das Schlechteste aus beiden Welten, finde ich." },
      {
        task: "Widersprich entschieden und stütz das auf ein Argument.",
        tr: "Da bin ich überhaupt nicht einverstanden: hybrid lässt einen je nach Art der Arbeit wählen."
      }
    ]
  },
  "conv:ristorante-scelte": {
    title: "Am Tisch, mit ein paar Entscheidungen",
    setting: "Freitagabend, die Trattoria um die Ecke. Diesmal folgt das Gespräch dem, was du sagst: an drei Stellen wählst du zwischen zwei Antworten.",
    closing: "Die Rechnung am Ende stimmte mit dem überein, was am Tisch bestellt wurde. Das trennt eine Wahl von einer Verzierung.",
    turns: [
      { tr: "Guten Abend. Haben Sie reserviert?" },
      { task: "Sag, ob ihr reserviert habt.", opts: [
        { tr: "Ja, ich habe auf den Namen Rossi reserviert." },
        { tr: "Nein, wir sind zu zweit. Ist noch Platz?" }
      ] },
      { tr: "Perfekt. Der Tisch am Fenster. Hier entlang, bitte." },
      { tr: "Ein Tisch für zwei ist hinten im Saal frei. Bitte." },
      { tr: "Hier ist die Karte. Zum Trinken schon mal etwas?" },
      { task: "Bestell eine Flasche stilles Wasser.", tr: "Eine Flasche stilles Wasser, bitte." },
      { tr: "Still, kommt sofort. Und als ersten Gang?" },
      { task: "Wähl den ersten Gang.", opts: [
        { tr: "Für mich Carbonara." },
        { tr: "Pasta mit Tomate: Ich bin Vegetarierin." }
      ] },
      { tr: "Heute Abend ist die Carbonara ausgezeichnet, der Guanciale ist knusprig." },
      { tr: "Dann empfehle ich Tomate und Basilikum: Das Basilikum kommt aus unserem Garten." },
      { tr: "Zum Abschluss ein Dessert? Das Tiramisù machen wir selbst." },
      { task: "Entscheide, ob du ein Dessert willst.", opts: [
        { tr: "Ja, das Tiramisù, danke." },
        { tr: "Nein danke, nur einen Kaffee." }
      ] },
      { tr: "Ausgezeichnete Wahl, kommt sofort." },
      { tr: "Einen Kaffee, sehr gern." },
      { tr: "Hier die Rechnung: erster Gang, Wasser und Tiramisù. Zweiundzwanzig Euro." },
      { tr: "Hier die Rechnung: erster Gang, Wasser und Kaffee. Sechzehn Euro." },
      { task: "Frag, ob du mit Karte zahlen kannst.", tr: "Kann ich mit Karte zahlen?" },
      { tr: "Natürlich, das Kartengerät ist hier. Danke und einen schönen Abend." }
    ]
  },
  "conv:treno-perso": {
    title: "Am Schalter, nach einem verpassten Zug",
    setting: "Der Bahnhof, Dienstagmorgen. Vor dir der Schalter und die Schlange, hinter dir ein Zug, der weg ist.",
    closing: "Dasselbe Gespräch kostet acht Euro oder nichts. Den Unterschied machte ein Satz am Anfang.",
    turns: [
      { tr: "Guten Tag, bitte?" },
      { task: "Sag, was mit deinem Zug passiert ist.", opts: [
        { tr: "Ich habe den Zug um 9:20 nach Bologna verpasst." },
        { tr: "Mein Zug nach Bologna wurde gestrichen." }
      ] },
      { tr: "Ein verpasster Zug wird nicht erstattet. Das Ticket kann ich aber neu ausstellen, gegen die Differenz." },
      { tr: "Der nächste nach Bologna fährt um 11:40. Das macht acht Euro." },
      { tr: "Wegen des Streiks gestrichen, das tut mir leid. In dem Fall kostet die Umbuchung nichts." },
      { tr: "Der nächste nach Bologna fährt um 11:40. Sie zahlen nichts." },
      { task: "Entscheide, ob du den um 11:40 nimmst.", opts: [
        { tr: "Gut, ich nehme den um 11:40." },
        { tr: "Gibt es etwas früher?" }
      ] },
      { tr: "Perfekt. Gleis sieben, Wagen vier." },
      { tr: "Früher gibt es nur den Regionalzug um 10:15, der braucht aber zweieinhalb Stunden." },
      { task: "Wähle zwischen dem Regionalzug und Warten.", opts: [
        { tr: "Egal, ich nehme den Regionalzug." },
        { tr: "Dann warte ich auf den um 11:40." }
      ] },
      { tr: "Regionalzug um 10:15, Gleis drei." },
      { tr: "Hier ist Ihr Ticket. Gute Reise!" },
      { task: "Bedank dich und verabschiede dich.", tr: "Vielen Dank, einen schönen Tag." },
      { tr: "Auf Wiedersehen." }
    ]
  },
  "conv:casa-visita": {
    title: "Wohnungsbesichtigung",
    setting: "Samstagnachmittag, zweiter Stock ohne Aufzug. Die Maklerin öffnet die Tür und wartet auf deine Reaktion.",
    closing: "Nach dem Preis fragt man oder eben nicht. Hier sieht man, was das Nichtfragen gekostet hat.",
    turns: [
      { tr: "Also, das ist das Wohnzimmer. Was meinen Sie?" },
      { task: "Sag deinen ersten Eindruck.", opts: [
        { tr: "Es gefällt mir, aber es ist kleiner als auf den Fotos." },
        { tr: "Es ist sehr hell, es gefällt mir." }
      ] },
      { tr: "Fotos täuschen immer ein wenig. Es sind aber fünfunddreißig Quadratmeter, ohne verlorene Flure." },
      { tr: "Ja, nach Süden ausgerichtet: Im Winter springt die Heizung selten an." },
      { tr: "Die Nebenkosten betragen achtzig Euro im Monat, Heizung inklusive." },
      { tr: "Die Miete beträgt siebenhundert Euro." },
      { task: "Frag das, was dich jetzt am meisten interessiert.", opts: [
        { tr: "Ist der Preis verhandelbar?" },
        { tr: "Ab wann ist sie frei?" }
      ] },
      { tr: "Bei einem Vierjahresvertrag geht der Eigentümer auf sechshundertfünfzig runter." },
      { tr: "Sie ist ab dem Ersten des nächsten Monats frei." },
      { tr: "Ab dem Ersten des nächsten Monats. Der Preis bleibt allerdings bei siebenhundert." },
      { task: "Entscheide, ob du die Wohnung nimmst.", opts: [
        { tr: "Ich nehme sie." },
        { tr: "Ich denke darüber nach und melde mich." }
      ] },
      { tr: "Sehr gut. Ich schicke Ihnen den Vertrag bis morgen per Mail." },
      { tr: "Wir hören uns in den nächsten Tagen." },
      { tr: "Natürlich, lassen Sie sich Zeit. Meine Nummer haben Sie ja." },
      { task: "Bedank dich und verabschiede dich.", tr: "Danke, auf Wiedersehen." },
      { tr: "Auf Wiedersehen." }
    ]
  },
  "conv:medico-gola": {
    title: "Beim Arzt, mit Halsschmerzen",
    setting: "Montag, Praxis im Viertel. Vierzig Minuten im Wartezimmer, fünf im Sprechzimmer.",
    closing: "Derselbe Hals, zwei verschiedene Rezepte. Entschieden hat ein Satz übers Schlucken.",
    turns: [
      { tr: "Guten Tag, setzen Sie sich. Erzählen Sie." },
      { task: "Beschreib deine Symptome.", opts: [
        { tr: "Ich habe seit drei Tagen Halsschmerzen und Fieber." },
        { tr: "Ich habe seit drei Tagen Halsschmerzen, aber kein Fieber." }
      ] },
      { tr: "Drei Tage mit Fieber. Wie hoch war es?" },
      { tr: "Achtunddreißig fünf ist viel. Öffnen Sie bitte den Mund." },
      { tr: "Kein Fieber ist schon eine gute Nachricht. Öffnen Sie bitte den Mund." },
      { tr: "Der Hals ist stark gerötet. Fällt Ihnen das Schlucken schwer?" },
      { task: "Sag, ob das Schlucken schwerfällt.", opts: [
        { tr: "Ja, das Schlucken fällt mir schwer." },
        { tr: "Nein, es stört nur." }
      ] },
      { tr: "Dann verschreibe ich Ihnen ein Antibiotikum: eine Tablette alle zwölf Stunden, sechs Tage lang." },
      { tr: "Dann kein Antibiotikum: Gurgeln mit Salzwasser und viel warme Flüssigkeit." },
      { tr: "In jedem Fall Ruhe. Wenn es nach drei Tagen nicht besser ist, kommen Sie wieder." },
      { task: "Stell eine Frage zum Alltag.", opts: [
        { tr: "Muss ich zu Hause bleiben und nicht arbeiten?" },
        { tr: "Darf ich Sport machen?" }
      ] },
      { tr: "Ich schreibe Ihnen eine Krankmeldung für drei Tage und schicke sie selbst an Ihren Arbeitgeber." },
      { tr: "Sport nein, zumindest solange der Hals so ist. Spazieren ja." },
      { tr: "Wir sehen uns. Gute Besserung." },
      { task: "Bedank dich beim Arzt und verabschiede dich.", tr: "Danke, Herr Doktor, auf Wiedersehen." },
      { tr: "Auf Wiedersehen." }
    ]
  }
});
