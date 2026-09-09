/* ============================================================
   views-talk.js — rozmowy na głos: lista scen i sama scena.

   Wyjęte z views.js bez zmiany zachowania. Powód jest jeden i widać go
   po długości: silnik rozmowy urósł o rozwidlenia, powrót na ostatni
   wybór i zatrzymywanie sceny na złej odpowiedzi, i przy 277 liniach
   był największym blokiem pliku, w którym mieszka piętnaście innych
   ekranów. Osobny plik nie czyni go krótszym, ale przestaje go mieszać
   z resztą.

   Skorupa widoku (`set`, `pageHead`, `el`, `empty`) przychodzi z
   `Views.shell`, tak samo jak w views-shadow.js i views-train.js —
   trzy kopie tych samych czterech funkcji rozjechałyby się przy
   pierwszej zmianie nagłówka.

   Skrypt klasyczny. Wymaga core.js, audio.js, exercises.js, views.js
   (po nim, bo konsumuje Views.shell) oraz danych z
   data/core/conversations.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  var empty = Views.shell.empty;

  Views.conversazione = function (params) {
    var all = global.CONVERSATIONS || [];
    if (params && params.id) return runConversation(all.filter(function (c) { return c.id === params.id; })[0]);

    set(pageHead(t("talk.kicker"), t("nav.talk"), t("talk.intro")) +
      (Audio2.sttSupported ? "" :
        '<div class="callout callout--trap"><b>' + t("talk.noSttLabel") + "</b> " + t("talk.noStt") + "</div>") +
      '<div class="stack">' + all.map(function (c) {
        var p = Core.lessonState("conv-" + c.id);
        return '<button class="list-row" data-conv="' + esc(c.id) + '" style="text-align:left;cursor:pointer;width:100%">' +
          '<span style="font-size:1.6rem">' + esc(c.icon) + "</span>" +
          '<span class="list-row__main"><b>' + esc(c.titleIt) + "</b><span>" + esc(c.title) + "</span></span>" +
          '<span class="chip chip--cefr">' + esc(c.cefr) + "</span>" +
          (p ? '<span class="chip chip--green">✓</span>' : "") + "</button>";
      }).join("") + "</div>");

    el().querySelectorAll("[data-conv]").forEach(function (b) {
      b.addEventListener("click", function () { App.go("conversazione", { id: b.getAttribute("data-conv") }); });
    });
  };

  function runConversation(conv) {
    if (!conv) { set(empty(t("talk.notFound"))); return; }

    set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:18px">' + t("talk.backToList") + "</button>" +
      pageHead(conv.cefr + " · " + conv.title, conv.titleIt, conv.setting) +
      '<div class="card"><div class="dlg js-dlg"></div><div class="js-turn" style="margin-top:20px"></div></div>');

    el().querySelector(".js-back").addEventListener("click", function () { Audio2.stop(); App.go("conversazione"); });

    var dlg = el().querySelector(".js-dlg");
    var turn = el().querySelector(".js-turn");
    var i = 0, score = 0, turns = 0;

    /* Rozwidlenia: graf zamiast listy, ale DOKŁADANY. Tura z polem `go`
       mówi, dokąd iść dalej; bez niego idziemy o jeden do przodu, więc
       dziesięć dialogów napisanych wcześniej chodzi tak samo jak przedtem
       i nie trzeba było ich tknąć. Cel jest podawany po `id` tury, nie po
       numerze: numer przesunąłby się przy pierwszej wstawce w środku. */
    var PROG = 0.72;

    function indeksTury(id) {
      for (var n = 0; n < conv.turns.length; n++) if (conv.turns[n].id === id) return n;
      return conv.turns.length; /* nieznany cel = koniec; validate.mjs tego nie przepuści */
    }

    function dalej(skad, teraz) { return skad && skad.go ? indeksTury(skad.go) : teraz + 1; }

    /* Punkty wyboru odwiedzone w tym przejściu — do powrotu na rozwidlenie
       bez powtarzania całego dialogu (`bąbelki` to długość transkryptu w
       chwili wyboru, żeby dało się go uciąć dokładnie tam). */
    var wybory = [];

    /* Bez rozpoznawania mowy nota o tym stoi TUTAJ, w scenie, a nie tylko na
       liście rozmów: uczeń wchodzi w scenę i widzi samo pole tekstowe, więc
       brak mikrofonu wygląda jak usterka, a nie jak brak obsługi w
       przeglądarce. Raz na przejście, nie przy każdej turze — powtarzana pod
       dziesięcioma kolejnymi replikami przestaje być informacją. */
    var notaSttPokazana = false;

    function bubble(it, pl, mine) {
      var d = document.createElement("div");
      d.className = "dlg__line" + (mine ? " dlg__line--b" : "");
      d.innerHTML = '<div class="dlg__who" aria-hidden="true">' + (mine ? "🙋" : esc(conv.icon)) + "</div>" +
        '<div class="dlg__bubble"><span class="dlg__it">' + esc(it) +
        ' <button type="button" class="say-btn" data-say="' + esc(it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button></span>' +
        (pl ? '<span class="dlg__pl">' + esc(pl) + "</span>" : "") + "</div>";
      dlg.appendChild(d);
      Ex.wireSpeakers(d);
      d.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function step() {
      if (i >= conv.turns.length) return finishConv();
      var turnData = conv.turns[i];
      if (turnData.sp !== "TY") {
        bubble(turnData.it, turnData.tr, false);
        i = dalej(turnData, i);
        Audio2.speak(turnData.it, { onend: function () { setTimeout(step, 260); } });
        return;
      }
      renderTurn(turnData);
    }

    /* Przy rozwidleniu obie możliwości są POKAZANE. To nie jest test pamięci:
       uczeń ma zdecydować, co powiedzieć, a nie odgadnąć, czego kurs oczekuje.
       Mikrofon i pole tekstowe zostają — kliknięcie jest skrótem, nie jedyną
       drogą, więc scena nadal daje się przejść głosem. */
    function podpowiedziWyboru(opcje) {
      return '<p class="voice-pl" style="margin-bottom:10px">' + esc(t("talk.chooseOne")) + "</p>" +
        '<div class="dlg-opts">' + opcje.map(function (o) {
          /* Wysyłamy TREŚĆ PODPOWIEDZI, nie klucz odpowiedzi: klucze są
             pisane bez wielkich liter i bez interpunkcji, pod porównywanie,
             i w dymku wyglądałyby jak zdanie napisane byle jak. `norm()`
             w `similarity` i tak sprowadza jedno do drugiego. */
          var wzor = o.hintIt || (o.accept && o.accept[0]) || "";
          return '<button type="button" class="dlg-opt js-opt" data-opt="' + esc(wzor) + '">' +
            "<i>" + esc(o.hintIt || wzor) + "</i>" +
            (o.tr ? "<span>" + esc(o.tr) + "</span>" : "") + "</button>";
        }).join("") + "</div>";
    }

    // parametr nazywa się turnData, nie t: `t` to helper tłumaczeń w tym pliku
    function renderTurn(turnData) {
      turns++;
      var opcje = turnData.opts || null;
      var accepted = opcje ? (opcje[0].accept || []) : (turnData.accept || [turnData.it]);
      if (opcje) wybory.push({ i: i, bakelki: dlg.children.length, score: score, turns: turns - 1 });
      turn.innerHTML =
        '<div class="voice-box">' +
        '<p style="font-weight:600;margin:0 0 4px">' + esc(t("talk.yourTurn", { task: turnData.task })) + "</p>" +
        (opcje ? podpowiedziWyboru(opcje) :
          /* Podpowiedź jest po POLSKU (w języku ucznia), nie po włosku. Włoskie
             zdanie w tym miejscu robiło z rozmowy przepisywanie: uczeń czytał
             gotową replikę i wysyłał ją z powrotem, więc scena sprawdzała wzrok,
             nie znajomość języka. Tłumaczenie tej repliki JUŻ JEST w nakładce
             (`turns[].tr`, wszystkie pięć języków) i było używane dotąd tylko
             w dymku — nie trzeba było dopisać ani jednego napisu.
             Włoski wzór zostaje pod „Pokaż odpowiedź", czyli tam, gdzie uczeń
             sięga po niego świadomie. */
          (turnData.tr
            ? '<p class="voice-pl" style="margin-bottom:14px">' + t("ex.hintLabel", { hint: "<i>" + esc(turnData.tr) + "</i>" }) + "</p>"
            : "")) +
        (Audio2.sttSupported
          ? '<button type="button" class="mic js-mic" aria-label="' + esc(t("talk.speak")) + '">🎤</button><p class="voice-heard js-heard">' + t("talk.tapAndSpeak") + "</p>"
          : notaSttPokazana ? ""
            : '<div class="callout callout--trap"><b>' + t("talk.noSttLabel") + "</b> " + t("talk.noStt") + "</div>") +
        '<div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' +
        '<input type="text" class="field js-in" style="max-width:340px" placeholder="' + esc(t(Audio2.sttSupported ? "talk.orType" : "talk.typeAnswer")) + '" autocomplete="off" spellcheck="false">' +
        '<button class="btn btn--primary js-send">' + t("talk.send") + "</button>" +
        '<button class="btn btn--quiet js-skip">' + t("talk.reveal") + "</button></div>" +
        '<div class="fb js-fb" role="status"></div></div>';

      if (!Audio2.sttSupported) notaSttPokazana = true;

      var heard = turn.querySelector(".js-heard");
      var input = turn.querySelector(".js-in");
      var fb = turn.querySelector(".js-fb");

      /* Przy rozwidleniu wygrywa opcja NAJBLIŻSZA temu, co uczeń powiedział,
         a nie pierwsza pasująca: dwie odpowiedzi w tej samej scenie bywają
         podobne („tylko kawa" / „kawa i deser") i pierwsza z brzegu
         wysyłałaby go w gałąź, o którą nie prosił. */
      function wybierz(text) {
        var naj = { w: -1, o: null };
        (opcje || [{ accept: accepted }]).forEach(function (o) {
          var b = 0;
          (o.accept || []).forEach(function (a) { b = Math.max(b, Core.similarity(text, a)); });
          if (b > naj.w) naj = { w: b, o: o };
        });
        return naj;
      }

      /* Zła odpowiedź ZATRZYMUJE scenę. Przedtem rozmowa szła dalej, tyle że
         w dymku stawał wzór zamiast tego, co uczeń powiedział: z ekranu
         wyglądało to jak zaliczone, więc błąd nie miał żadnej konsekwencji,
         a przy mikrofonie nie było nawet wiadomo, że coś poszło nie tak.
         Wyjście z pętli jest jedno i świadome: „Pokaż odpowiedź". */
      var bledny = false;

      /* `zPola` mówi, czy odpowiedź przyszła z klawiatury, czy z mikrofonu.
         Fokus wraca do pola TYLKO w pierwszym wypadku: po mówieniu wepchnąłby
         na telefonie klawiaturę systemową i pasek akcentów pod scenę, której
         uczeń wcale nie chciał pisać (ten sam wniosek co w views-lookup.js).
         Kursor idzie na koniec, nie zaznacza całości: po pomyłce zwykle
         poprawia się jedno słowo, a zaznaczone wszystko ginie od pierwszego
         klawisza. */
      function odrzuc(zPola) {
        /* Do zeszytu błędów raz na turę, nie raz na próbę: dziesięć podejść
           do jednego zdania to jedna pomyłka, a nie dziesięć. */
        if (!bledny) { bledny = true; Core.recordAnswer(false); }
        fb.className = "fb js-fb fb--ko is-on";
        fb.textContent = t("talk.tryAgain");
        if (zPola) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      }

      /** Przejście dalej: `text` trafia do dymka, `gal` wyznacza gałąź. */
      function idzDalej(text, gal, tr) {
        bubble(text, tr || "", true);
        turn.innerHTML = "";
        i = dalej(opcje ? gal : turnData, i);
        setTimeout(step, 420);
      }

      function accept(text, zPola) {
        var naj = wybierz(text);
        if (naj.w < PROG) return odrzuc(zPola);
        if (!bledny) score++;
        Core.recordAnswer(true);
        idzDalej(text, naj.o, (naj.o && naj.o.tr) || turnData.tr);
      }

      /* Rezygnacja: wzór wchodzi do transkryptu i scena idzie dalej, bez
         punktu. Przy rozwidleniu bierzemy pierwszą gałąź — kierunku nie da
         się zgadnąć, skoro uczeń nic nie wybrał. Wzór bierzemy z podpowiedzi,
         nie z `accept[0]`: klucze są pisane pod porównywanie, małą literą i
         bez interpunkcji, i w dymku wyglądałyby jak zdanie napisane byle jak. */
      function ujawnij() {
        var gal = opcje ? opcje[0] : null;
        var wzor = (gal ? (gal.hintIt || (gal.accept || [])[0]) : turnData.hintIt) || accepted[0];
        if (!bledny) { bledny = true; Core.recordAnswer(false); }
        Audio2.speak(wzor);
        idzDalej(wzor, gal, (gal && gal.tr) || turnData.tr);
      }

      /* Kliknięcie w gałąź NIE przechodzi przez próg podobieństwa: uczeń
         wybrał replikę z listy, więc nie ma czego oceniać, a od kiedy zła
         odpowiedź zatrzymuje scenę, przepuszczanie kliknięcia przez
         porównywanie mogłoby zablokować wybór na własnej podpowiedzi. */
      if (opcje) turn.querySelectorAll(".js-opt").forEach(function (b, n) {
        b.addEventListener("click", function () {
          if (!bledny) score++;
          Core.recordAnswer(true);
          idzDalej(b.getAttribute("data-opt"), opcje[n], opcje[n].tr);
        });
      });

      if (Audio2.sttSupported) {
        var mic = turn.querySelector(".js-mic");
        mic.addEventListener("click", function () {
          heard.textContent = t("ex.stt.listening");
          mic.classList.add("is-rec");
          Audio2.listen({
            oninterim: function (x) { heard.innerHTML = "…" + esc(x); },
            onerror: function (e) { mic.classList.remove("is-rec"); heard.textContent = t(e === "not-allowed" ? "ex.stt.denied" : "ex.stt.failed"); },
            onend: function (text) {
              mic.classList.remove("is-rec");
              if (!text) { heard.textContent = t("ex.stt.nothing"); return; }
              heard.innerHTML = t("ex.stt.heard", { text: "<b>" + esc(text) + "</b>" });
              setTimeout(function () { accept(text); }, 500);
            }
          });
        });
      }
      turn.querySelector(".js-send").addEventListener("click", function () {
        if (!input.value.trim()) { Core.toast(t("talk.emptyAnswer")); return; }
        accept(input.value.trim(), true);
      });
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") turn.querySelector(".js-send").click(); });
      turn.querySelector(".js-skip").addEventListener("click", ujawnij);
    }

    /* Powrót na ostatnie rozwidlenie, nie na początek. Gałąź, której się nie
       wybrało, jest tym, po co w ogóle są rozwidlenia; kazać przechodzić od
       nowa cały dialog, żeby ją zobaczyć, znaczy nie pokazać jej nikomu. */
    function wrocDoWyboru() {
      var w = wybory.pop();
      while (dlg.children.length > w.bakelki) dlg.removeChild(dlg.lastChild);
      i = w.i; score = w.score; turns = w.turns;
      turn.innerHTML = "";
      step();
    }

    function finishConv() {
      Core.recordLesson("conv-" + conv.id, score, Math.max(turns, 1), 0);
      App.refreshRail();
      turn.innerHTML = '<div class="summary"><div class="summary__score">' + score + "/" + turns + "</div>" +
        '<p class="summary__msg">' + esc(conv.closing || t("talk.defaultClosing")) + "</p>" +
        '<div class="summary__acts">' +
        (wybory.length ? '<button class="btn btn--primary js-branch">' + t("talk.otherBranch") + "</button>" : "") +
        '<button class="btn ' + (wybory.length ? "btn--ghost" : "btn--primary") + ' js-again">' + t("talk.again") + "</button>" +
        '<button class="btn btn--ghost js-list">' + t("talk.others") + "</button></div></div>";
      var gal = turn.querySelector(".js-branch");
      if (gal) gal.addEventListener("click", wrocDoWyboru);
      turn.querySelector(".js-again").addEventListener("click", function () { App.go("conversazione", { id: conv.id }); });
      turn.querySelector(".js-list").addEventListener("click", function () { App.go("conversazione"); });
    }

    step();
  }

})(window);
