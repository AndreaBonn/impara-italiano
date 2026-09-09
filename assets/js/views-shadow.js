/* ============================================================
   views-shadow.js — powtarzanie za lektorem, z własnym głosem obok.

   Największa dziura wszystkich aplikacji do nauki języka jest ta sama i
   opisana w każdej recenzji: po roku nie umiesz mówić. Ćwiczenie `speak`
   tego nie łata, bo porównuje TRANSKRYPCJĘ z oczekiwanym napisem — mierzy
   słowa, nie dźwięk, więc „gli" wymówione jak „li" dostaje pełne punkty.

   Shadowing nie ocenia NICZEGO i to jest jego zaleta. Uczeń słyszy zdanie
   lektora, powtarza, i słucha obu nagrań jedno po drugim. Różnicę słyszy
   sam, a nie czyta jej z liczby, której i tak by nie umiał zinterpretować.
   Automat, który udaje ocenę wymowy, jest gorszy niż jej brak, bo daje
   fałszywą pewność w jedynym miejscu, gdzie liczy się ucho.

   ŚWIADOMA DEGRADACJA. Bez mikrofonu, bez zgody albo bez obsługi w
   przeglądarce widok NIE znika: zostaje tryb słuchania, a komunikat mówi,
   CO dokładnie nie działa i czy da się to odkręcić. Wzorzec jest ten sam,
   którego kurs używa przy rozpoznawaniu mowy.

   Nagrania ucznia nie są zapisywane nigdzie — patrz recorder.js.

   Skrypt klasyczny. Wymaga core.js, audio.js, recorder.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /* Zdania do powtarzania: bierzemy je z czytanek, bo każde ma nagranie
     lektora i jest całym zdaniem, a nie hasłem. Shadowing na pojedynczym
     słowie nie ćwiczy tego, co jest trudne — rytmu i wiązania. */
  function zdania() {
    var out = [];
    (global.READINGS || []).forEach(function (r) {
      (r.sentences || []).forEach(function (s) {
        if (Audio2.hasNatural(s)) out.push({ it: s, src: r.id, cefr: r.cefr });
      });
    });
    return out;
  }

  var biezace = null;
  var nagranie = null;

  Views.shadowing = function () {
    var lista = zdania();
    if (!lista.length) { set(Views.shell.empty(t("sh.noSentences"))); return; }

    var powod = Recorder.powodBraku();
    biezace = Core.seededShuffle(lista, "sh-" + Core.today())[0];

    set(pageHead(t("sh.kicker"), t("sh.title"), t("sh.intro")) +
      (powod ? ostrzezenie(powod) : "") +
      '<div class="card">' +
      '<p class="sh-it js-it"></p>' +
      '<div class="sh-row">' +
      '<button class="btn btn--green js-play">' + esc(t("sh.playNative")) + "</button>" +
      (powod ? "" :
        '<button class="btn btn--primary js-rec" aria-pressed="false">' + esc(t("sh.record")) + "</button>") +
      '<button class="btn btn--ghost btn--sm js-next">' + esc(t("sh.next")) + "</button>" +
      "</div>" +
      '<p class="sh-state js-state" role="status" aria-live="polite"></p>' +
      '<div class="js-mine" hidden>' +
      '<div class="sh-row">' +
      '<button class="btn btn--ghost btn--sm js-play-mine">' + esc(t("sh.playMine")) + "</button>" +
      '<button class="btn btn--ghost btn--sm js-play-both">' + esc(t("sh.playBoth")) + "</button>" +
      "</div></div></div>" +
      '<p class="sh-note">' + esc(t("sh.notSaved")) + "</p>");

    pokazZdanie();
    podepnij(!powod);
  };

  function ostrzezenie(powod) {
    return '<div class="callout callout--trap"><b>' + esc(t("sh.noMicLabel")) + "</b> " +
      esc(t(powod)) + " " + esc(t("sh.listenOnly")) + "</div>";
  }

  function pokazZdanie() {
    var p = el().querySelector(".js-it");
    p.textContent = biezace.it;
    var mine = el().querySelector(".js-mine");
    if (mine) mine.hidden = true;
    nagranie = null;
    Recorder.zapomnij();
    stan("");
  }

  function stan(txt) {
    var s = el().querySelector(".js-state");
    if (s) s.textContent = txt;
  }

  function podepnij(zMikrofonem) {
    var root = el();

    root.querySelector(".js-play").addEventListener("click", function () {
      Audio2.speak(biezace.it, { onstart: function () { stan(t("sh.stateNative")); },
                                 onend: function () { stan(""); } });
    });

    root.querySelector(".js-next").addEventListener("click", function () {
      var lista = zdania();
      biezace = lista[Math.floor(Math.random() * lista.length)];
      pokazZdanie();
    });

    if (!zMikrofonem) return;

    var przycisk = root.querySelector(".js-rec");
    var uchwyt = null;

    przycisk.addEventListener("click", function () {
      if (Recorder.nagrywa()) { Recorder.stop(); return; }

      uchwyt = Recorder.start({
        onstart: function () {
          przycisk.setAttribute("aria-pressed", "true");
          przycisk.textContent = t("sh.stopRecording");
          przycisk.classList.add("is-rec");
          stan(t("sh.stateRecording"));
        },
        onstop: function (d) {
          przycisk.setAttribute("aria-pressed", "false");
          przycisk.textContent = t("sh.recordAgain");
          przycisk.classList.remove("is-rec");
          nagranie = d;
          root.querySelector(".js-mine").hidden = false;
          stan(t("sh.stateDone", { s: (d.ms / 1000).toFixed(1) }));
        },
        onerror: function (klucz) {
          przycisk.setAttribute("aria-pressed", "false");
          przycisk.textContent = t("sh.record");
          przycisk.classList.remove("is-rec");
          stan(t(klucz));
        }
      });
      if (uchwyt) { /* uchwyt zwrócony dla symetrii; stop idzie przez moduł */ }
    });

    root.querySelector(".js-play-mine").addEventListener("click", function () {
      if (nagranie) odtworz(nagranie.url);
    });

    /* Jedno po drugim, lektor najpierw. To jest cały mechanizm ćwiczenia:
       różnica słychać w zestawieniu, nie w oddzielnych odsłuchach. */
    root.querySelector(".js-play-both").addEventListener("click", function () {
      if (!nagranie) return;
      stan(t("sh.stateNative"));
      Audio2.speak(biezace.it, {
        onend: function () {
          stan(t("sh.stateMine"));
          odtworz(nagranie.url, function () { stan(""); });
        }
      });
    });
  }

  /* ═══════════════ Zgoda na rozpoznawanie mowy ═══════════════

     Podstawiona w consent.js, wołana z Audio2.listen — czyli obsługuje
     WSZYSTKIE miejsca, które dziś wysyłają głos na zewnątrz: 150 ćwiczeń
     `speak` i dziesięć rozmów. Ten plik tylko dostarcza okienko, bo tu
     mieszka warstwa widoku, a consent.js nie ma prawa znać DOM-u.
     ══════════════════════════════════════════════════════════ */
  function okienkoZgody(decyzja) {
    var stary = document.getElementById("sttConsent");
    if (stary) stary.remove();

    var box = document.createElement("div");
    box.id = "sttConsent";
    box.className = "stt-consent";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-labelledby", "sttConsentTitle");
    box.innerHTML =
      '<div class="stt-consent__box">' +
      '<h2 id="sttConsentTitle"></h2><p class="js-body"></p><p class="js-later"></p>' +
      '<div class="stt-consent__row">' +
      '<button class="btn btn--primary js-yes"></button>' +
      '<button class="btn btn--ghost js-no"></button></div></div>';
    document.body.appendChild(box);

    box.querySelector("h2").textContent = t("stt.consentTitle");
    box.querySelector(".js-body").textContent = t("stt.consentBody");
    box.querySelector(".js-later").textContent = t("stt.consentLater");
    var tak = box.querySelector(".js-yes");
    var nie = box.querySelector(".js-no");
    tak.textContent = t("stt.consentYes");
    nie.textContent = t("stt.consentNo");

    var wrocDo = document.activeElement;
    function zamknij(odp) {
      box.remove();
      if (wrocDo && wrocDo.focus) wrocDo.focus();
      decyzja(odp);
    }
    tak.addEventListener("click", function () { zamknij(true); });
    nie.addEventListener("click", function () { zamknij(false); });
    box.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.stopPropagation(); zamknij(false); }
      /* Pułapka fokusu: dwa przyciski, więc wystarczy zawrócić na krańcach. */
      if (e.key !== "Tab") return;
      var f = [tak, nie];
      var i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    });
    tak.focus();
  }

  if (global.Consent) global.Consent.uzyjPytania(okienkoZgody);

  var odtwarzacz = null;

  function odtworz(url, gotowe) {
    if (!odtwarzacz) odtwarzacz = new global.Audio();
    odtwarzacz.src = url;
    odtwarzacz.onended = function () { gotowe && gotowe(); };
    odtwarzacz.play().catch(function () { gotowe && gotowe(); });
  }

  /* Wyjście z widoku zwalnia blob: bez tego każde wejście zostawia w pamięci
     poprzednie nagranie, a uczeń może tu wracać dziesiątki razy dziennie. */
  global.addEventListener("hashchange", function () {
    if (global.location.hash.indexOf("shadowing") < 0) {
      nagranie = null;
      Recorder.zapomnij();
    }
  });

})(window);
