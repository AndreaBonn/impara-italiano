/* ============================================================
   views-writing.js — writing in Italian with nobody to mark it.

   With no backend nobody will grade a composition, so the course says
   plainly what it does NOT grade. What can be measured is measured by
   writing.js: the declared constructions are either in the text or they are
   not. The rest — sense, sound, coherence — is left to the student, with a
   model to compare against and a short list of questions they answer
   themselves.

   SECURITY: the student's text reaches the DOM only through textContent.
   Never through innerHTML, including in the preview and the summary. That
   text leaves the application through the state export and may enter
   somebody else's browser through an import — so it is untrusted content,
   even though the owner of the profile wrote it.

   Classic script. Requires core.js, writing.js, exercises.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;

  function zadania() { return global.WRITING || []; }
  function zadanie(id) { return zadania().filter(function (w) { return w.id === id; })[0]; }

  Views.scrittura = function (params) {
    var w = params && params.id ? zadanie(params.id) : null;
    if (w) return widok(w);

    set(pageHead(t("write.kicker"), t("write.title"), t("write.intro")) +
      '<div class="stack">' + zadania().map(function (x) {
        var zapis = Writing.load(x.id);
        return '<div class="list-row"><span class="chip chip--cefr">' + esc(x.cefr || "") + "</span>" +
          '<span class="list-row__main"><b>' + esc(x.title || x.titleIt) + "</b>" +
          "<span>" + esc(t(x.kind === "translate" ? "write.kindTranslate" : "write.kindCompose")) +
          (zapis ? " · " + esc(t("write.saved", { n: zapis.words })) : "") + "</span></span>" +
          '<button class="btn btn--primary btn--sm js-open" data-id="' + esc(x.id) + '">' +
          esc(t(zapis ? "write.reopen" : "write.open")) + "</button></div>";
      }).join("") + "</div>");

    Views.shell.root().querySelectorAll(".js-open").forEach(function (b) {
      b.addEventListener("click", function () { App.go("scrittura", { id: b.getAttribute("data-id") }); });
    });
  };

  function widok(w) {
    set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:14px">' + esc(t("write.back")) + "</button>" +
      pageHead(t("write.kicker") + " · " + esc(w.cefr), w.title || w.titleIt, w.brief || "") +
      '<div id="writeBox"></div>');
    Views.shell.root().querySelector(".js-back").addEventListener("click", function () { App.go("scrittura"); });

    var box = document.getElementById("writeBox");
    if (w.kind === "translate") return tlumaczenie(w, box);
    return kompozycja(w, box);
  }

  /* ---------------- Sentence-by-sentence translation ---------------- */

  /**
   * Plain `trans` exercises: the source sentence from the overlay, the
   * accepted Italian versions from the neutral layer. No new type — which
   * is why the result reaches the mistake notebook the same way as
   * everything else.
   */
  function tlumaczenie(w, box) {
    var zbudowane = (w.items || []).map(function (it, i) {
      return Ex.build({ t: "trans", dir: "toIt", q: it.q || "", a: it.a }, i, "write-" + w.id);
    });
    box.innerHTML = zbudowane.map(function (b) { return b.html; }).join("") +
      '<div id="writeSum" style="margin-top:18px"></div>';

    var wezly = box.querySelectorAll(".exq");
    var zrobione = 0, dobre = 0;
    zbudowane.forEach(function (b, i) {
      b.wire(wezly[i], function (ok) {
        if (ok) dobre++;
        if (++zrobione === zbudowane.length) {
          document.getElementById("writeSum").innerHTML =
            '<div class="summary"><div class="summary__score">' + dobre + "/" + zbudowane.length + "</div>" +
            '<p class="summary__msg">' + esc(t("write.transDone")) + "</p></div>";
        }
      });
    });
    Ex.wireSpeakers(box);
  }

  /* ---------------- The composition ---------------- */

  function kompozycja(w, box) {
    var zapis = Writing.load(w.id);

    box.innerHTML =
      '<div class="card" style="margin-bottom:16px"><h3 style="font-size:1rem;margin-bottom:8px">' +
      esc(t("write.mustUse")) + "</h3>" + listaWymagan(w, null) + "</div>" +
      '<label for="writeText" class="sr-only">' + esc(t("write.yourText")) + "</label>" +
      '<textarea id="writeText" class="field js-text" rows="10" ' +
      'placeholder="' + esc(t("write.placeholder", { n: w.minWords || 40 })) + '"></textarea>' +
      '<p class="exq__sub js-count" style="margin:8px 0 14px"></p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
      '<button class="btn btn--primary js-check">' + esc(t("write.check")) + "</button>" +
      '<button class="btn btn--ghost js-model" hidden>' + esc(t("write.showModel")) + "</button></div>" +
      '<div id="writeResult" style="margin-top:18px"></div>';

    var ta = box.querySelector(".js-text");
    /* Text from the previous session enters as the field's VALUE, not as HTML. */
    if (zapis) ta.value = zapis.text;

    var licznik = box.querySelector(".js-count");
    function odswiezLicznik() {
      licznik.textContent = t("write.words", { n: Writing.wordCount(ta.value) });
    }
    ta.addEventListener("input", odswiezLicznik);
    odswiezLicznik();

    box.querySelector(".js-check").addEventListener("click", function () {
      var wynik = Writing.analyse(ta.value, w.requires);
      Writing.save(w.id, ta.value, wynik);
      pokazWynik(w, box, wynik, ta.value);
      box.querySelector(".js-model").hidden = false;
    });

    box.querySelector(".js-model").addEventListener("click", function () {
      pokazModel(w, document.getElementById("writeResult"));
    });
  }

  /** The list of requirements; with results after checking, without them before. */
  function listaWymagan(w, wynik) {
    return '<div class="stack">' + (w.requires || []).map(function (req, i) {
      var r = wynik ? wynik[i] : null;
      var opis = req.verb
        ? t("write.reqVerb", { verb: req.verb, tense: nazwaCzasu(req.tense) })
        : req.any ? t("write.reqAny", { list: req.any.join(", ") })
          : t("write.reqWord", { word: req.word });
      return '<div class="list-row"><span class="list-row__main"><b>' + esc(opis) + "</b>" +
        (r && r.hit ? "<span>" + esc(t("write.foundAs", { form: r.hit })) + "</span>" : "") + "</span>" +
        (r ? '<span class="chip' + (r.found ? " chip--green" : "") + '">' +
          esc(t(r.found ? "write.yes" : "write.no")) + "</span>" : "") + "</div>";
    }).join("") + "</div>";
  }

  function nazwaCzasu(key) {
    var lista = (global.Verbs && Verbs.TENSES) || [];
    for (var i = 0; i < lista.length; i++) if (lista[i].key === (key || "pres")) return lista[i].labelIt;
    return key || "pres";
  }

  function pokazWynik(w, box, wynik, tekst) {
    var znalezione = wynik.filter(function (r) { return r.found; }).length;
    var slowa = Writing.wordCount(tekst);
    var host = document.getElementById("writeResult");

    host.innerHTML = '<h2 style="font-size:1.2rem;margin-bottom:10px">' + esc(t("write.whatWeChecked")) + "</h2>" +
      listaWymagan(w, wynik) +
      '<p class="exq__sub" style="margin-top:12px">' +
      esc(t("write.summary", { found: znalezione, total: wynik.length, words: slowa, min: w.minWords || 0 })) + "</p>" +
      '<div class="card card--contrast" style="margin-top:16px"><h3 style="font-size:1rem;margin-bottom:6px">' +
      esc(t("write.notChecked")) + "</h3><p>" + esc(t("write.notCheckedText")) + "</p>" +
      '<div class="stack" style="margin-top:10px">' + (w.checklist || []).map(function (c) {
        return '<div class="list-row"><span class="list-row__main"><b>' + esc(c) + "</b></span></div>";
      }).join("") + "</div>" +
      /* The offer belongs HERE, inside the card that lists what the course
         cannot measure — sense, coherence, how it sounds. That is exactly
         what a reader can say something about, and putting it next to the
         requirements would suggest it grades them, which it does not. */
      (global.Llm && Llm.available()
        ? '<div style="margin-top:12px"><button class="btn btn--ghost btn--sm js-opinion">' +
          esc(t("write.askOpinion")) + "</button></div>"
        : "") +
      "</div>";

    var przycisk = host.querySelector(".js-opinion");
    if (przycisk) przycisk.addEventListener("click", function () { poprosOParere(w, tekst, przycisk); });
  }

  /**
   * A reading of the composition by the model the student set up.
   *
   * Asked, never automatic. A composition is long, so this costs more than
   * a sentence does, and the money is theirs — a request they did not press
   * a button for is a request they did not agree to make.
   *
   * The button dies on the way out and does not come back: a second reading
   * of the same text says the same thing and bills for it twice. Editing
   * and checking again is what produces a new one.
   */
  function poprosOParere(w, tekst, przycisk) {
    przycisk.disabled = true;
    przycisk.textContent = t("write.askingOpinion");

    Llm.review({ title: w.title || "", prompt: w.prompt || "" }, tekst, function (odpowiedz) {
      var host = document.getElementById("writeResult");
      /* The student may have left, or checked again: both replace this node,
         and drawing into the old one writes to nothing. */
      if (!host || !host.contains(przycisk)) return;
      /* The parent is read BEFORE the button leaves: afterwards its
         parentNode is null and the answer would have nowhere to go. */
      var gniazdo = przycisk.parentNode;
      przycisk.remove();

      var box = document.createElement("div");
      box.className = "card js-opinion-box";
      box.style.marginTop = "12px";
      var h = document.createElement("h3");
      h.style.fontSize = "1rem";
      h.style.marginBottom = "6px";
      h.textContent = t("write.opinion");
      var p = document.createElement("p");
      /* textContent, like everything else in this view: this is the one
         string here that the course did not write. */
      p.textContent = odpowiedz || t("write.opinionFailed");
      box.appendChild(h);
      box.appendChild(p);
      if (odpowiedz) {
        var nota = document.createElement("p");
        nota.className = "exq__sub";
        nota.style.marginTop = "8px";
        nota.textContent = t("write.opinionNote");
        box.appendChild(nota);
      }
      (gniazdo || host).appendChild(box);
    });
  }

  function pokazModel(w, host) {
    if (host.querySelector(".js-model-box")) return;
    var d = document.createElement("div");
    d.className = "card js-model-box";
    d.style.marginTop = "16px";
    var h = document.createElement("h3");
    h.style.fontSize = "1rem";
    h.style.marginBottom = "6px";
    h.textContent = t("write.model");
    var p = document.createElement("p");
    /* The model is Italian and comes from the course, but we insert it as
       text: one rule for the whole view is easier to maintain than an
       exception somebody will forget one day. */
    p.textContent = w.model || "";
    var nota = document.createElement("p");
    nota.className = "exq__sub";
    nota.style.marginTop = "8px";
    nota.textContent = t("write.modelNote");
    d.appendChild(h); d.appendChild(p); d.appendChild(nota);
    host.appendChild(d);
  }

})(window);
