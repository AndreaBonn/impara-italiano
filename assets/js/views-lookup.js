/* ============================================================
   views-lookup.js — tap a word, see its meaning.

   Until now a reading had a panel with a dozen or so hard words chosen by
   the author. The choice is a good one, but it is not YOUR vocabulary:
   there is always a word in the text that you in particular do not know,
   and at that word the student either guesses or leaves for a translator
   and does not come back.

   Three things this rests on, each with a reason:

   1. NOTHING IS SILENT. A word the course does not know gets a message of
      its own and an "add it anyway" button. A tap that does nothing teaches
      that tapping gives nothing — after two of those the student stops
      trying even where it would have worked.

   2. THE TRANSLATION CAN BE CORRECTED. The course gloss is general, while
      the word stands in a specific sentence. The student may override it
      before it reaches a card. A HUMAN types it, so we read and write it
      only through `.value` and `textContent` — never `innerHTML`.

   3. A CARD IS ONE CLICK AWAY. The whole value of reading with a
      dictionary comes from the encountered word returning in the reviews.
      One step more and nobody does it.

   Classic script. Requires core.js, lemma.js, audio.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };

  var Lookup = {};

  /* The open card and the element the focus returns to after closing. */
  var otwarta = null;
  var zrodloFokusu = null;

  /**
   * Tokenising a sentence into pieces: words separately, the rest separately.
   *
   * Punctuation and spaces MUST stay in the text, because this is a sentence
   * to read and not a list of words. That is why we split while keeping the
   * separators instead of extracting the words alone.
   */
  function kawalki(zdanie) {
    return String(zdanie).split(/([^a-zA-ZàáèéìíòóùúçÀÈÉÌÒÙ'’]+)/);
  }

  /** Whether this piece is a word that can be clicked. */
  function jestSlowem(k) {
    return /[a-zA-ZàáèéìíòóùúçÀÈÉÌÒÙ]/.test(k);
  }

  /**
   * A sentence turned into clickable words.
   *
   * Every word is a `<button>`, not a `<span>` with a click handler: a
   * button is in the tab order, responds to Enter and Space and tells a
   * screen reader it can be pressed. Recreating that by hand on a span
   * usually stops halfway.
   */
  function zdanieKlikalne(zdanie) {
    return kawalki(zdanie).map(function (k) {
      if (!k) return "";
      if (!jestSlowem(k)) return esc(k);
      return '<button type="button" class="lk-word" data-word="' + esc(k) + '">' + esc(k) + "</button>";
    }).join("");
  }

  /**
   * The meaning of an entry: the course dictionary first, then this
   * reading's glosses.
   *
   * The reading's glosses come AFTER the lexicon, because they are written
   * for one specific text and are sometimes narrower ("canto" only in
   * "d'altro canto"), while the course lexicon carries the meaning the
   * student learned in a lesson.
   */
  /**
   * The meaning of an entry. Returns `{tr, zFrazy}` — never a bare string,
   * because the student must see WHERE the translation came from.
   *
   * Three sources, in order:
   * 1. the course lexicon — what they learned in a lesson;
   * 2. this reading's glosses, narrower because written for this text;
   * 3. the multi-word expression this word stands in.
   *
   * The third source is not decoration. The course teaches "un caffè", not
   * "caffè", and 920 of the 1410 lexicon entries are like that. Without
   * this step, tapping the most ordinary word from the first lesson gave an
   * empty box.
   *
   * The `vocabIndex` keys go through `Core.norm`, that is WITHOUT accents:
   * "caffè" sits under "caffe". Searching by the accented form missed every
   * time, and silently — on exactly the words that have an accent.
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

    /* The shortest expression containing this word: the shorter it is, the
       closer to the meaning of the word itself ("un caffè" beats "prendere
       un caffè al banco"). */
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
   * Shows the word card under the word that was clicked.
   *
   * @param {string} slowo the form from the text, exactly as it stands
   * @param {object} r     the reading, for the glosses attached to this text
   * @param {Element} przy the element the card should appear next to
   */
  function pokaz(slowo, r, przy) {
    zamknij();
    zrodloFokusu = przy;

    var hasla = Lemma.resolve(slowo);
    var haslo = hasla[0] || "";
    var znane = !!haslo;

    /* A function word is decided BEFORE the meaning is looked up, not
       after. When it was the other way round, "in" got "by bike" — because
       the shortest expression containing that word turned out to be "in
       bici". A preposition glossed with an expression is not a missing
       translation, it is a false one, and that is worse than none: the
       student has no way to notice. */
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
        /* As in the Coverage view: no recording, no button. */
        (Audio2.hasNatural(haslo)
          ? '<button type="button" class="say-btn" data-say="' + esc(haslo) + '" aria-label="' +
            esc(t("a11y.listenTo", { what: haslo })) + '">🔊</button>'
          : "") +
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

    /* Text from a human and text from the data enter through textContent
       and .value, never through innerHTML: the `theory` fields in this
       project are rendered as HTML deliberately, so the boundary has to be
       explicit. */
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
    /* The focus goes to the CARD, not to the text field.
       Autofocusing the field caused two things at once: the accent bar
       jumped above the field and covered the card header together with the
       close button, and on a phone the system keyboard slid out
       immediately — for a word the student in most cases does not want to
       correct at all. The field is one Tab away and the bar appears only
       once the student actually types. */
    karta.setAttribute("tabindex", "-1");
    karta.focus();
  }

  /**
   * Wires up word-tap handling inside a container with text.
   * One listener per container, not one for each of ~500 words.
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
