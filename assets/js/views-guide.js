/* ============================================================
   views-guide.js — jak używać kursu.

   Trasa, nie okno modalne. Powód jest praktyczny, nie estetyczny:
   okno nie ma adresu, więc nie da się do niego odesłać z ekranu,
   którego dotyczy („jak działa egzamin →"), a uczeń, który je zamknie,
   nie ma jak do niego wrócić inaczej niż przez ten sam przycisk.
   Trasa ma adres, siedzi w PRECACHE jak reszta i otwiera się na
   wskazanej sekcji: #/guida?s=esame.

   Nazwy ekranów NIE są tu pisane od nowa: idą z kluczy `nav.*`,
   `sound.title`, `read.title`, `write.title` i `search.title`, czyli
   z tych samych napisów, które uczeń widzi w pasku. Napisana osobno
   nazwa rozjechałaby się z paskiem przy pierwszej zmianie i nikt by
   tego nie zauważył — a to jest strona, która ma mówić, gdzie co jest.

   Ładuje się PO views.js, bo `Views.shell` powstaje na końcu tamtego pliku.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /* Sekcje w kolejności czytania: od „nie wiem, co kliknąć" do rzeczy,
     o które uczeń zapyta dopiero po miesiącu (kopia zapasowa). */
  var SEKCJE = [
    { id: "inizio", akapity: 2, doTestu: true },
    { id: "ordine", akapity: 2 },
    { id: "lezione", akapity: 3 },
    { id: "oggi", akapity: 2 },
    { id: "ripasso", akapity: 3 },
    { id: "esame", akapity: 2 },
    { id: "mappa", akapity: 1, mapa: true },
    { id: "backup", akapity: 2 },
    { id: "bloccato", akapity: 2 }
  ];

  /* Mapa kursu: trasa, klucz nazwy (ten sam, co w pasku) i opis.
     Kolejność jak w pasku, na końcu cztery ekrany, które w pasku nie
     stoją — bo właśnie ich uczeń sam nie znajdzie. */
  var EKRANY = [
    ["oggi", "nav.today"], ["percorso", "nav.path"], ["ripasso", "nav.review"],
    ["allenamento", "nav.train"], ["conversazione", "nav.talk"], ["grammatica", "nav.grammar"],
    ["coniugatore", "nav.verbs"], ["lessico", "nav.lexicon"], ["shadowing", "nav.shadow"],
    ["velocita", "nav.speed"], ["esame", "nav.exam"], ["falsi", "nav.falsi"],
    ["copertura", "nav.coverage"], ["progressi", "nav.progress"], ["impostazioni", "nav.settings"],
    ["suoni", "sound.title"], ["lettura", "read.title"], ["scrittura", "write.title"],
    ["cerca", "search.title"]
  ];

  function akapity(id, ile) {
    var out = "";
    for (var i = 1; i <= ile; i++) out += "<p>" + esc(t("guide." + id + ".p" + i)) + "</p>";
    return out;
  }

  function mapaKursu() {
    return '<div class="stack" style="margin-top:14px">' + EKRANY.map(function (e) {
      return '<div class="list-row list-row--stack"><span class="list-row__main">' +
        "<b>" + esc(t(e[1])) + "</b><span>" + esc(t("guide.s." + e[0])) + "</span></span>" +
        '<button class="btn btn--ghost btn--sm js-goto" data-route="' + esc(e[0]) + '">' +
        esc(t("guide.open")) + "</button></div>";
    }).join("") + "</div>";
  }

  function sekcja(s) {
    var tresc = akapity(s.id, s.akapity) +
      (s.mapa ? mapaKursu() : "") +
      (s.doTestu ? '<button class="btn btn--ghost btn--sm js-place" style="margin-top:6px">' +
        esc(t("place.start")) + "</button>" : "");
    return '<section class="card guide-sec" id="g-' + s.id + '" style="margin-bottom:18px">' +
      "<h3>" + esc(t("guide." + s.id + ".h")) + "</h3>" + tresc + "</section>";
  }

  function spis() {
    return '<nav class="guide-toc" aria-label="' + esc(t("guide.tocLabel")) + '">' +
      SEKCJE.map(function (s) {
        return '<button class="btn btn--quiet js-toc" data-sekcja="' + esc(s.id) + '">' +
          esc(t("guide." + s.id + ".h")) + "</button>";
      }).join("") + "</nav>";
  }

  Views.guida = function (params) {
    set(pageHead(t("guide.kicker"), t("guide.title"), t("guide.intro")) +
      spis() + SEKCJE.map(sekcja).join(""));

    el().querySelectorAll(".js-toc").forEach(function (b) {
      b.addEventListener("click", function () { doSekcji(b.getAttribute("data-sekcja")); });
    });
    el().querySelectorAll(".js-goto").forEach(function (b) {
      b.addEventListener("click", function () { App.go(b.getAttribute("data-route")); });
    });
    el().querySelector(".js-place").addEventListener("click", function () { App.go("piazzamento"); });

    /* Wejście z adresem sekcji (#/guida?s=esame) ustawia fokus samo, więc
       podnosi `keepFocus` — inaczej router zaraz po renderowaniu przeniósłby
       go na kontener treści i czytnik ekranu zaczynałby od góry strony,
       czyli od tego, przed czym link miał go uchronić.

       Flagę podnosi DOPIERO trafienie w sekcję. Adres z nieistniejącą nazwą
       (stara zakładka, sekcja przemianowana) nie ustawia fokusu nigdzie, więc
       podniesiona wcześniej flaga odbierałaby go także routerowi i czytnik
       zostawałby tam, gdzie był przed przejściem — dokładnie ta awaria,
       przed którą ten kod miał chronić, tylko po cichu. */
    if (params && params.s && doSekcji(params.s)) Views.keepFocus = true;
  };

  /**
   * Przewinięcie do sekcji, bez ruszania adresu.
   *
   * Fokus idzie razem z przewinięciem: sam scroll przesuwa obraz, ale
   * czytnik ekranu zostaje tam, gdzie był, więc kliknięcie w spisie
   * treści nie robiłoby dla niego zupełnie nic.
   *
   * Oddaje, czy sekcja się znalazła — na tym opiera się `keepFocus` wyżej.
   */
  function doSekcji(id) {
    var cel = el().querySelector("#g-" + CSS.escape(id));
    if (!cel) return false;
    cel.setAttribute("tabindex", "-1");
    cel.scrollIntoView({ block: "start" });
    cel.focus({ preventScroll: true });
    return true;
  }
})();
