/* ============================================================
   Pary minimalne — teksty po polsku.

   Uwagi kontrastywne pisane pod polskiego ucznia, nie tłumaczone:
   problem jest inny w każdym języku. Polak nie słyszy długości
   spółgłoski, bo polszczyzna jej nie używa do rozróżniania słów,
   i nie czuje ruchomego akcentu, bo w polskim akcent stoi zawsze
   na przedostatniej sylabie.
   ============================================================ */
LINGUAI.addStrings("pl", {

  "ph:ph-doppie": {
    title: "Podwójne spółgłoski",
    note: "Podwójna spółgłoska to jeden dźwięk trzymany dłużej, nie dwa oddzielne. W „nonno” język zostaje przy dziąsłach mniej więcej dwa razy dłużej niż w „nono”.",
    contrast: "Po polsku długość spółgłoski nie zmienia znaczenia słowa, więc ucho jej nie szuka — i to jest cały problem. „Wanna” i „wana” to dla Polaka to samo słowo wymówione niedbale; „nonno” i „nono” to po włosku dziadek i dziewiąty. Zanim zaczniesz wymawiać, naucz się to SŁYSZEĆ: dopóki ucho nie łapie różnicy, usta jej nie zrobią.",
    pairs: [
      { glossA: "dziadek", glossB: "dziewiąty" },
      { glossA: "siedem", glossB: "pragnienie" },
      { glossA: "kasa", glossB: "dom" },
      { glossA: "długopis", glossB: "kara, przykrość" },
      { glossA: "piłka", glossB: "łopata" },
      { glossA: "sen", glossB: "jestem" },
      { glossA: "noc", glossB: "notatki" },
      { glossA: "czerwona", glossB: "róża, różowa" }
    ]
  },

  "ph:ph-accento": {
    title: "Miejsce akcentu",
    note: "We włoskim akcent bywa na trzeciej sylabie od końca, na drugiej albo na ostatniej — i to on decyduje, które to słowo. Zapis z kreską (àncora) służy nauce; w normalnym tekście akcentu się nie pisze.",
    contrast: "Polski akcent stoi na przedostatniej sylabie i nie niesie znaczenia, więc nie zwracasz na niego uwagi. Po włosku jest odwrotnie: „àncora” to kotwica, a „ancòra” znaczy jeszcze. Przesunięcie akcentu nie brzmi jak obcy akcent, tylko jak inne słowo, i tak zostanie zrozumiane.",
    pairs: [
      { glossA: "kotwica", glossB: "jeszcze, znowu" },
      { glossA: "książęta", glossB: "zasady" },
      { glossA: "natychmiast", glossB: "doznany, przecierpiany" },
      { glossA: "trafiam, zdarza mi się", glossB: "zrozumiany" },
      { glossA: "czytać", glossB: "lekkie (l. mn. r.ż.)" }
    ]
  },

  "ph:ph-e-aperta": {
    title: "E otwarte i zamknięte",
    note: "„è” otwarte wymawia się z szerzej otwartymi ustami niż „é” zamknięte. Różnica bywa regionalna i nawet Włosi nie są tu zgodni, ale w tych dwóch parach zmienia słowo.",
    contrast: "Polskie „e” jest jedno i leży mniej więcej pomiędzy włoskim otwartym a zamkniętym, więc obie wersje słyszysz jako to samo. To najtrudniejsza z par w tym dziale i najmniej kosztowna w pomyłce: pomylone „e” zwykle rozejdzie się po kontekście, podczas gdy pomylona długość spółgłoski nie.",
    pairs: [
      { glossA: "brzoskwinia", glossB: "połów, wędkowanie" },
      { glossA: "siekiera", glossB: "przyjmuje, akceptuje" }
    ]
  },

  "ph:ph-gli": {
    title: "Dźwięk GL",
    note: "„gl” przed „i” to jeden dźwięk: środek języka dotyka podniebienia, a powietrze uchodzi bokiem. Nie jest to ani „l”, ani „li”.",
    contrast: "Polszczyzna nie ma tego dźwięku i odruchowo podstawia „li”, przez co „figli” (synowie) brzmi jak „fili” (nici). Najbliższe, co znasz, to zmiękczenie w „lilia”, ale wymówione jednym ruchem, bez śladu osobnego „i”.",
    pairs: [
      { glossA: "rodzajnik: ci, im", glossB: "ich (zaimek)" },
      { glossA: "synowie", glossB: "nici, druty" },
      { glossA: "żona", glossB: "miękkie (l. mn.)" }
    ]
  },

  "ph:ph-dolci-dure": {
    title: "C i G miękkie albo twarde",
    note: "„c” i „g” przed „e” oraz „i” miękną: „ci” to jak polskie „czi”, „gi” jak „dżi”. Litera „h” wstawiona pomiędzy twardnieje je z powrotem: „chi” to „ki”, „ghi” to „gi”.",
    contrast: "Reguła jest prosta i mechaniczna, więc nie ma tu czego nie usłyszeć — jest za to co przeoczyć w czytaniu. „Pesche” to nie „pesze”, tylko „peske”: brzoskwinie. Polak czyta włoskie „h” jako nic i ma rację, ale to „nic” zmienia sąsiednią spółgłoskę.",
    pairs: [
      { glossA: "całusy", glossB: "robaki, larwy" },
      { glossA: "ryba", glossB: "brzoskwinie" },
      { glossA: "obrót, przejażdżka", glossB: "popielica" }
    ]
  }

});
