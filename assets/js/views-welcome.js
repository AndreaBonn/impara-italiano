/* ============================================================
   views-welcome.js — ekran pierwszego uruchomienia.

   Kurs ma piętnaście pozycji w pasku i żadna nie mówi „zacznij tutaj".
   Uczeń, który otwiera go pierwszy raz, ma przed sobą trzy różne
   decyzje naraz: od którego poziomu, w jakiej kolejności, czym się
   różni Trening od Powtórek. Ten ekran zdejmuje pierwszą z nich
   i zostawia resztę na później.

   Pokazuje się WYŁĄCZNIE przy pustym profilu (app.js, startRouting)
   i znika po pierwszym wyborze — nie jest zakładką i nie ma pozycji
   w pasku. Uczeń, który zamknie kartę bez wyboru, zobaczy go znowu:
   znacznik stawia dopiero decyzja, nie samo wyświetlenie.

   Ładuje się PO views.js, bo `Views.shell` powstaje na końcu tamtego pliku.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /** Jedna z trzech dróg: nagłówek, zdanie wyjaśniające i przycisk. */
  function droga(klucz, klasaPrzycisku, etykieta) {
    return '<div class="list-row list-row--stack"><span class="list-row__main">' +
      "<b>" + esc(t("welcome." + klucz + "Title")) + "</b>" +
      "<span>" + esc(t("welcome." + klucz + "Hint")) + "</span></span>" +
      '<button class="btn ' + klasaPrzycisku + ' js-' + klucz + '">' + esc(etykieta) + "</button></div>";
  }

  Views.benvenuto = function () {
    set(pageHead(t("welcome.kicker"), t("welcome.title"), t("welcome.intro")) +
      '<div class="stack">' +
      droga("zero", "btn--primary", t("welcome.zeroGo")) +
      droga("test", "btn--ghost", t("place.start")) +
      droga("look", "btn--quiet", t("welcome.lookGo")) +
      "</div>" +
      /* Przewodnik jest linkiem pod wyborem, nie czwartą drogą: kto tu
         trafia, ma odpowiedzieć na jedno pytanie, a nie zacząć czytać. */
      '<p style="margin-top:20px"><button class="btn btn--quiet js-guide">' +
      esc(t("welcome.guide")) + "</button></p>");

    /* Wybór jest tym, co kończy powitanie — nie wyświetlenie ekranu.
       Odwrotnie: kto zamknął kartę w trakcie czytania, wróciłby do
       kursu bez tej jednej odpowiedzi, której ekran miał mu udzielić. */
    el().querySelector(".js-zero").addEventListener("click", function () { odZera(); });
    el().querySelector(".js-test").addEventListener("click", function () { wybrano("piazzamento"); });
    el().querySelector(".js-look").addEventListener("click", function () { wybrano("percorso"); });
    /* Przewodnik nie kończy powitania: uczeń ma wrócić i wybrać. */
    el().querySelector(".js-guide").addEventListener("click", function () { App.go("guida"); });
  };

  function wybrano(trasa, params) {
    Core.state.onboarded = true;
    Core.save();
    App.go(trasa, params);
  }

  /**
   * „Zaczynam od zera" prowadzi do PIERWSZEJ LEKCJI, nie do spisu poziomów.
   *
   * Dwa powody. Podpis przycisku obiecuje lekcję („pierwsza lekcja A1, od
   * przywitania"), a spis poziomów jest o jeden wybór dalej — czyli znowu
   * wyborem, którego ten ekran miał ucznia pozbawić. Drugi: na ścieżce
   * czeka pasek „nie wiesz, od którego poziomu zacząć", czyli dokładnie to
   * pytanie, na które przed chwilą odpowiedział.
   *
   * Gdy poziom nie zdążył się wczytać, zostaje ścieżka nauki: pusty ekran
   * lekcji byłby gorszy niż spis, z którego widać, że kurs w ogóle jest.
   */
  function odZera() {
    var poziom = Core.registry.levels[0];
    var next = poziom && Core.nextLesson(poziom);
    if (next) wybrano("lezione", { id: next.lesson.id });
    else wybrano("percorso");
  }
})();
