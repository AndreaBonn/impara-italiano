/* ============================================================
   views-lookup.js — dotknij słowa, zobacz znaczenie.

   Do tej pory czytanka miała panel z kilkunastoma trudnymi słowami
   wybranymi przez autora. Wybór jest dobry, ale nie jest TWOJEGO
   słownictwa: zawsze jest w tekście słowo, którego akurat ty nie znasz,
   i przy nim uczeń albo zgaduje, albo wychodzi do tłumacza i nie wraca.

   Trzy rzeczy, na których to stoi, i każda ma powód:

   1. NIC NIE JEST CICHE. Słowo, którego kurs nie zna, dostaje własny
      komunikat i przycisk „dodaj mimo to". Dotknięcie, które nie robi
      nic, uczy, że dotykanie nic nie daje — po dwóch takich uczeń
      przestaje próbować także tam, gdzie by zadziałało.

   2. TŁUMACZENIE JEST DO POPRAWIENIA. Glosa kursowa jest ogólna, a
      słowo stoi w konkretnym zdaniu. Uczeń może ją nadpisać, zanim
      trafi na fiszkę. Wpisuje ją CZŁOWIEK, więc czytamy i piszemy
      wyłącznie przez `.value` i `textContent` — nigdy `innerHTML`.

   3. FISZKA JEST JEDNYM KLIKNIĘCIEM. Cała wartość czytania ze
      słownikiem bierze się z tego, że napotkane słowo wraca w
      powtórkach. Krok więcej i nikt tego nie robi.

   Skrypt klasyczny. Wymaga core.js, lemma.js, audio.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };

  var Lookup = {};

  /* Otwarta karta i element, do którego wraca fokus po zamknięciu. */
  var otwarta = null;
  var zrodloFokusu = null;

  /**
   * Tokenizacja zdania na kawałki: słowa osobno, reszta osobno.
   *
   * Interpunkcja i spacje MUSZĄ zostać w tekście, bo to jest zdanie do
   * czytania, a nie lista słów. Dlatego dzielimy z zachowaniem separatorów
   * zamiast wyciągać same wyrazy.
   */
  function kawalki(zdanie) {
    return String(zdanie).split(/([^a-zA-ZàáèéìíòóùúçÀÈÉÌÒÙ'’]+)/);
  }

  /** Czy ten kawałek jest słowem, w które można kliknąć. */
  function jestSlowem(k) {
    return /[a-zA-ZàáèéìíòóùúçÀÈÉÌÒÙ]/.test(k);
  }

  /**
   * Zdanie zamienione na klikalne słowa.
   *
   * Każde słowo to `<button>`, nie `<span>` z obsługą kliknięcia: przycisk
   * jest w kolejności tabulacji, reaguje na Enter i spację i mówi czytnikowi
   * ekranu, że da się go nacisnąć. Ręczne dorabianie tego na spanie kończy
   * się zwykle na połowie.
   */
  function zdanieKlikalne(zdanie) {
    return kawalki(zdanie).map(function (k) {
      if (!k) return "";
      if (!jestSlowem(k)) return esc(k);
      return '<button type="button" class="lk-word" data-word="' + esc(k) + '">' + esc(k) + "</button>";
    }).join("");
  }

  /**
   * Znaczenie hasła: najpierw słownik kursu, potem glosy tej czytanki.
   *
   * Glosy czytanki idą PO leksykonie, bo są dopisane pod konkretny tekst
   * i bywają węższe („canto" tylko w „d'altro canto"), a leksykon kursu
   * niesie znaczenie, którego uczeń uczył się w lekcji.
   */
  /**
   * Znaczenie hasła. Zwraca `{tr, zFrazy}` — nigdy samego napisu, bo
   * uczeń ma widzieć, SKĄD wzięło się tłumaczenie.
   *
   * Trzy źródła, w kolejności:
   * 1. leksykon kursu — to, czego uczył się w lekcji;
   * 2. glosy tej czytanki, węższe, bo pisane pod ten tekst;
   * 3. zwrot wielowyrazowy, w którym to słowo stoi.
   *
   * Trzecie źródło nie jest ozdobą. Kurs uczy „un caffè", nie „caffè", i
   * takich haseł jest w leksykonie 920 na 1410. Bez tego kroku dotknięcie
   * najzwyklejszego słowa z pierwszej lekcji dawało pustą kratkę.
   *
   * Klucze `vocabIndex` przechodzą przez `Core.norm`, czyli BEZ akcentów:
   * „caffè" leży pod „caffe". Szukanie po formie z akcentem chybiało
   * zawsze i cicho — dokładnie na słowach, które akcent mają.
   */
  function znaczenie(haslo, r) {
    var reg = Core.registry || {};
    var idx = reg.vocabIndex || {};
    var klucz = Core.norm(haslo);
    if (idx[klucz]) return { tr: idx[klucz], zFrazy: "" };

    var pary = [[r.glossIt, r.gloss], [r.lexIt, r.lex]];
    for (var i = 0; i < pary.length; i++) {
      var wl = pary[i][0] || [], tr = pary[i][1] || [];
      var j = wl.indexOf(haslo);
      if (j >= 0 && tr[j]) return { tr: tr[j], zFrazy: "" };
    }

    /* Najkrótszy zwrot, który zawiera to słowo: im krótszy, tym bliżej
       znaczenia samego wyrazu („un caffè" bije „prendere un caffè al banco"). */
    var najlepszy = null;
    Object.keys(idx).forEach(function (k) {
      if (k.indexOf(" ") < 0) return;
      if (k.split(" ").indexOf(klucz) < 0) return;
      if (!najlepszy || k.length < najlepszy.length) najlepszy = k;
    });
    if (najlepszy) return { tr: idx[najlepszy], zFrazy: najlepszy };

    return { tr: "", zFrazy: "" };
  }

  function zamknij() {
    if (!otwarta) return;
    otwarta.remove();
    otwarta = null;
    if (zrodloFokusu && zrodloFokusu.focus) zrodloFokusu.focus();
    zrodloFokusu = null;
  }

  /**
   * Pokazuje kartę słowa pod klikniętym wyrazem.
   *
   * @param {string} slowo forma z tekstu, tak jak stoi
   * @param {object} r     czytanka, dla glos przypisanych do tego tekstu
   * @param {Element} przy element, przy którym karta ma się pojawić
   */
  function pokaz(slowo, r, przy) {
    zamknij();
    zrodloFokusu = przy;

    var hasla = Lemma.resolve(slowo);
    var haslo = hasla[0] || "";
    var znane = !!haslo;

    /* Wyraz funkcyjny rozstrzyga się PRZED szukaniem znaczenia, nie po.
       Kiedy było odwrotnie, „in" dostawało „rowerem" — bo najkrótszym
       zwrotem z tym słowem okazało się „in bici". Przyimek z glosą zwrotu
       to nie brak tłumaczenia, to tłumaczenie fałszywe, a takie jest
       gorsze od jego braku: uczeń nie ma jak się zorientować. */
    var funkcyjny = znane && Lemma.funkcyjne(haslo);
    var wynik = (znane && !funkcyjny) ? znaczenie(haslo, r) : { tr: "", zFrazy: "" };
    var gloss = wynik.tr;

    var karta = document.createElement("div");
    karta.className = "lk-card";
    karta.setAttribute("role", "dialog");
    karta.setAttribute("aria-label", t("lookup.cardLabel", { word: slowo }));

    if (znane && !funkcyjny) {
      karta.innerHTML =
        '<div class="lk-card__head"><b class="lk-card__lemma"></b>' +
        '<button type="button" class="say-btn" data-say="' + esc(haslo) + '" aria-label="' +
        esc(t("a11y.listenTo", { what: haslo })) + '">🔊</button>' +
        '<button type="button" class="lk-card__x js-close" aria-label="' + esc(t("lookup.close")) + '">✕</button></div>' +
        '<label class="lk-card__lab">' + esc(t("lookup.meaning")) +
        '<input type="text" class="field js-tr"></label>' +
        (wynik.zFrazy ? '<p class="lk-card__ctx"></p>' : "") +
        '<div class="lk-card__row">' +
        '<button type="button" class="btn btn--green btn--sm js-add">' + esc(t("lookup.add")) + "</button>" +
        (slowo.toLowerCase() !== haslo ? '<span class="lk-card__from"></span>' : "") +
        "</div>";
    } else {
      var propozycje = Lemma.kandydaci(slowo).slice(1, 4);
      karta.innerHTML =
        '<div class="lk-card__head"><b class="lk-card__lemma"></b>' +
        '<button type="button" class="lk-card__x js-close" aria-label="' + esc(t("lookup.close")) + '">✕</button></div>' +
        '<p class="lk-card__miss">' + esc(funkcyjny ? t("lookup.grammarWord") : t("lookup.unknown")) + "</p>" +
        (funkcyjny ? "" :
          (propozycje.length ? '<p class="lk-card__guess">' + esc(t("lookup.maybe", { forms: propozycje.join(", ") })) + "</p>" : "") +
          '<label class="lk-card__lab">' + esc(t("lookup.meaning")) +
          '<input type="text" class="field js-tr" placeholder="' + esc(t("lookup.writeIt")) + '"></label>' +
          '<div class="lk-card__row"><button type="button" class="btn btn--ghost btn--sm js-add">' +
          esc(t("lookup.addAnyway")) + "</button></div>");
    }

    /* Tekst od człowieka i tekst z danych wchodzą przez textContent i
       .value, nigdy przez innerHTML: pola `theory` w tym projekcie są
       renderowane jako HTML z rozmysłem, więc granica musi być jawna. */
    var lemat = karta.querySelector(".lk-card__lemma");
    if (lemat) lemat.textContent = znane ? haslo : slowo;
    var skad = karta.querySelector(".lk-card__from");
    if (skad) skad.textContent = t("lookup.fromForm", { form: slowo });
    var ctx = karta.querySelector(".lk-card__ctx");
    if (ctx) ctx.textContent = t("lookup.fromPhrase", { phrase: wynik.zFrazy });
    var pole = karta.querySelector(".js-tr");
    if (pole) pole.value = gloss;

    przy.insertAdjacentElement("afterend", karta);
    otwarta = karta;
    Ex.wireSpeakers(karta);

    karta.querySelector(".js-close").addEventListener("click", zamknij);
    karta.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.stopPropagation(); zamknij(); }
    });

    var dodaj = karta.querySelector(".js-add");
    if (dodaj) {
      dodaj.addEventListener("click", function () {
        var it = znane ? haslo : slowo.toLowerCase();
        var tr = pole ? pole.value.trim() : "";
        if (!tr) { Core.toast(t("lookup.needMeaning")); if (pole) pole.focus(); return; }
        Core.addCard(it, tr, "lettura:" + r.id);
        Core.toast(t("lookup.added", { word: it }));
        App.refreshRail();
        zamknij();
      });
    }
    /* Fokus idzie na KARTĘ, nie na pole tekstowe.
       Autofokus w polu wywoływał dwie rzeczy naraz: pasek akcentów wskakiwał
       nad pole i zasłaniał nagłówek karty razem z przyciskiem zamknięcia, a na
       telefonie natychmiast wyjeżdżała klawiatura systemowa — przy słowie,
       którego uczeń w większości wypadków wcale nie chce poprawiać.
       Pole jest o jedno naciśnięcie Tab dalej i pasek pojawia się dopiero
       wtedy, kiedy uczeń faktycznie pisze. */
    karta.setAttribute("tabindex", "-1");
    karta.focus();
  }

  /**
   * Podpina obsługę dotknięcia słowa w kontenerze z tekstem.
   * Jeden listener na kontener, nie po jednym na każde z ~500 słów.
   */
  function podepnij(kontener, r) {
    kontener.addEventListener("click", function (e) {
      var b = e.target.closest(".lk-word");
      if (!b) return;
      e.preventDefault();
      pokaz(b.getAttribute("data-word"), r, b);
    });
  }

  Lookup.zdanieKlikalne = zdanieKlikalne;
  Lookup.podepnij = podepnij;
  Lookup.zamknij = zamknij;
  Lookup.znaczenie = znaczenie;
  global.Lookup = Lookup;

})(window);
