/* ============================================================
   views-reading.js — czytanie, słuchanie ciągłe, dyktando.

   Wszystko w kursie było dotąd na poziomie zdania: ćwiczenie, fiszka,
   nagranie. Na tym da się dojść do B1 i tam stanąć, bo prawdziwy
   włoski nie przychodzi zdaniami po jednym.

   Trzy tryby na tym samym tekście, w kolejności rosnącej trudności:

   1. CZYTANIE — tekst widoczny, glosy pod ręką, każde zdanie do
      odsłuchania osobno.
   2. SŁUCHANIE — tekst schowany, nagrania lecą po kolei, potem pytania.
      Bez tego kroku „rozumiem czytając" myli się z „rozumiem".
   3. DYKTANDO — jedno zdanie, powtarzalne, wpisywane z pamięci.

   Nagrań całości nie ma: Audio2.speakSequence skleja te same pliki,
   których używa dyktando. Jeden plik na tekst ważyłby więcej niż
   wszystkie zdania razem i nie dałby się pociąć.

   Skrypt klasyczny. Wymaga core.js, audio.js, exercises.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;

  function teksty() { return global.READINGS || []; }
  function tekst(id) { return teksty().filter(function (r) { return r.id === id; })[0]; }

  Views.lettura = function (params) {
    var r = params && params.id ? tekst(params.id) : null;
    if (r) return widokTekstu(r, (params && params.mode) || "read");

    set(pageHead(t("read.kicker"), t("read.title"), t("read.intro")) +
      '<div class="stack">' + teksty().map(function (x) {
        return '<div class="list-row"><span class="chip chip--cefr">' + esc(x.cefr || "") + "</span>" +
          '<span class="list-row__main"><b>' + esc(x.titleIt) + "</b>" +
          "<span>" + esc(x.title || "") + "</span></span>" +
          '<button class="btn btn--primary btn--sm js-open" data-id="' + esc(x.id) + '">' +
          esc(t("read.open")) + "</button></div>";
      }).join("") + "</div>");

    Views.shell.root().querySelectorAll(".js-open").forEach(function (b) {
      b.addEventListener("click", function () { App.go("lettura", { id: b.getAttribute("data-id") }); });
    });
  };

  /* ---------------- Tryby ---------------- */

  function pasekTrybow(r, tryb) {
    var tryby = [["read", "read.modeRead"], ["listen", "read.modeListen"], ["dictation", "read.modeDictation"]];
    return '<div class="tabs" role="group" aria-label="' + esc(t("read.modesLabel")) + '">' +
      tryby.map(function (x) {
        return '<button type="button" class="tab js-mode" data-mode="' + x[0] + '"' +
          (tryb === x[0] ? ' aria-current="true"' : "") + ">" + esc(t(x[1])) + "</button>";
      }).join("") + "</div>";
  }

  function widokTekstu(r, tryb) {
    set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:14px">' + esc(t("read.back")) + "</button>" +
      pageHead(t("read.kicker") + " · " + esc(r.cefr), r.titleIt, r.title || "") +
      pasekTrybow(r, tryb) +
      '<div id="readBox"></div>');

    Views.shell.root().querySelector(".js-back").addEventListener("click", function () { App.go("lettura"); });
    Views.shell.root().querySelectorAll(".js-mode").forEach(function (b) {
      b.addEventListener("click", function () {
        App.go("lettura", { id: r.id, mode: b.getAttribute("data-mode") });
      });
    });

    var box = document.getElementById("readBox");
    if (tryb === "listen") return trybSluchania(r, box);
    if (tryb === "dictation") return trybDyktanda(r, box);

    /* Leksykon poziomu MUSI być wczytany, zanim narysujemy tekst z
       klikalnymi słowami. Poziomy dociągają się leniwie, więc uczeń, który
       wchodzi prosto w czytankę, ma pusty `vocabIndex` — i karta słowa
       pokazywała puste znaczenie dla „bere", którego kurs uczy w A1.
       Zmierzone przy pierwszym uruchomieniu, nie przewidziane. */
    Core.loadLevelData(r.cefr, function () {
      if (global.Lemma && Lemma.odswiez) Lemma.odswiez();   // słownik urósł
      trybCzytania(r, box);
    });
  }

  /** Glosy trudnych słów, jeśli nakładka je dała. */
  function glosy(r) {
    if (!r.glossIt || !r.gloss) return "";
    return '<div class="card" style="margin-top:18px"><h3 style="font-size:1rem;margin-bottom:8px">' +
      esc(t("read.glossary")) + "</h3><div class=\"stack\">" +
      r.glossIt.map(function (w, i) {
        return '<div class="list-row"><span class="list-row__main"><b>' + esc(w) + "</b>" +
          "<span>" + esc(r.gloss[i] || "") + "</span></span></div>";
      }).join("") + "</div></div>";
  }

  function trybCzytania(r, box) {
    /* Każde słowo jest klikalne. Panel trudnych słów niżej ZOSTAJE: to
       wybór autora, czyli „na to zwróć uwagę", a dotknięcie odpowiada na
       inne pytanie — „a tego akurat ja nie znam". Dwie różne rzeczy. */
    box.innerHTML = '<div class="card"><p class="lk-text" style="font-size:1.05rem;line-height:2.1">' +
      r.sentences.map(function (s) {
        return '<span style="display:inline">' + Lookup.zdanieKlikalne(s) +
          ' <button type="button" class="say-btn" data-say="' + esc(s) +
          '" aria-label="' + esc(t("a11y.listenTo", { what: s })) + '">🔊</button></span> ';
      }).join("") + "</p></div>" +
      '<p style="color:var(--ink-soft);font-size:.9rem;margin:10px 0 0">' + esc(t("read.tapHint")) + "</p>" +
      '<div style="margin-top:14px"><button class="btn btn--green js-all">' + esc(t("read.playAll")) + "</button></div>" +
      glosy(r);

    Ex.wireSpeakers(box);
    Lookup.podepnij(box.querySelector(".lk-text"), r);
    box.querySelector(".js-all").addEventListener("click", function () {
      Lookup.zamknij();
      Audio2.speakSequence(r.sentences.map(function (s) { return { it: s }; }));
    });
  }

  function trybSluchania(r, box) {
    box.innerHTML = '<div class="card"><p style="color:var(--ink-soft)">' + esc(t("read.listenHint")) + "</p>" +
      '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">' +
      '<button class="btn btn--green js-all">' + esc(t("read.playAll")) + "</button>" +
      '<button class="btn btn--ghost btn--sm js-slow">' + esc(t("ex.listen.slow")) + "</button></div></div>" +
      '<div style="margin-top:18px"><button class="btn btn--primary js-quiz">' + esc(t("read.toQuestions")) + "</button></div>" +
      '<div id="quizBox" style="margin-top:18px"></div>';

    function graj(rate) {
      Audio2.speakSequence(r.sentences.map(function (s) { return { it: s }; }), rate ? { rate: rate } : {});
    }
    box.querySelector(".js-all").addEventListener("click", function () { graj(); });
    box.querySelector(".js-slow").addEventListener("click", function () { graj(0.7); });
    box.querySelector(".js-quiz").addEventListener("click", function () {
      Audio2.stop();
      pytania(r, document.getElementById("quizBox"));
    });
  }

  /** Pytania są po włosku i pochodzą z warstwy neutralnej. */
  function pytania(r, box) {
    var zbudowane = (r.questions || []).map(function (q, i) { return Ex.build(q, i, "read-" + r.id); });
    box.innerHTML = '<h2 style="font-size:1.2rem;margin-bottom:12px">' + esc(t("read.questions")) + "</h2>" +
      zbudowane.map(function (b) { return b.html; }).join("");

    var wezly = box.querySelectorAll(".exq");
    var zrobione = 0, dobre = 0;
    zbudowane.forEach(function (b, i) {
      b.wire(wezly[i], function (ok) {
        if (ok) dobre++;
        if (++zrobione === zbudowane.length) {
          var podsum = document.createElement("p");
          podsum.className = "summary__msg";
          podsum.textContent = t("read.score", { hit: dobre, n: zbudowane.length });
          box.appendChild(podsum);
        }
      });
    });
    Ex.wireSpeakers(box);
  }

  /**
   * Dyktando: każde zdanie jako ćwiczenie typu „listen".
   *
   * Nie budujemy nowego typu — to jest dokładnie to samo zadanie, tylko
   * na zdaniu z tekstu zamiast z lekcji, więc jedzie tym samym builderem
   * i tak samo trafia do quaderno błędów.
   */
  function trybDyktanda(r, box) {
    var i = 0, dobre = 0;

    function zdanie() {
      if (i >= r.sentences.length) { koniec(); return; }
      var ex = { t: "listen", it: r.sentences[i] };
      var zbudowane = Ex.build(ex, i, "dict-" + r.id);
      box.innerHTML = '<p class="exq__num">' +
        esc(t("read.dictProgress", { i: i + 1, n: r.sentences.length })) + "</p>" +
        zbudowane.html +
        '<div style="margin-top:16px"><button class="btn btn--ghost btn--sm js-next" hidden>' +
        esc(t("read.next")) + "</button></div>";

      Ex.wireSpeakers(box);
      var next = box.querySelector(".js-next");
      zbudowane.wire(box.querySelector(".exq"), function (ok) {
        if (ok) dobre++;
        next.hidden = false;
        next.focus();
      });
      next.addEventListener("click", function () { i++; zdanie(); });
    }

    function koniec() {
      box.innerHTML = '<div class="summary"><div class="summary__score">' + dobre + "/" + r.sentences.length + "</div>" +
        '<p class="summary__msg">' + esc(t("read.dictDone")) + "</p>" +
        '<div class="summary__acts"><button class="btn btn--primary js-again">' + esc(t("read.again")) + "</button>" +
        '<button class="btn btn--ghost js-list">' + esc(t("read.backList")) + "</button></div></div>";
      box.querySelector(".js-again").addEventListener("click", function () { i = 0; dobre = 0; zdanie(); });
      box.querySelector(".js-list").addEventListener("click", function () { App.go("lettura"); });
      App.refreshRail();
    }

    zdanie();
  }

})(window);
