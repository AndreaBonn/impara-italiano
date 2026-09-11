/* ============================================================
   views-privacy.js — what happens to the student's data.

   A route, for the same reason the guide is one (views-guide.js:2-9): a
   notice with no address cannot be linked to, and this one has to be
   reachable from the footer of every screen, from Settings, and from a link
   somebody pastes into a message. A dialog would give none of that.

   The source text is docs/PRIVACY.it.md, in Italian, because that is the
   language in which the owner can sign what the document claims. The five
   translations are the `privacy.*` keys, and every sentence in them traces
   back to a line in specs/004-lancio-pubblico/riscontri.md - a table of
   claims with the command that verified each one against the code. A claim
   with no line there does not go in the text. That is the whole discipline
   of this page: a notice written from memory is exactly the document nobody
   can contest and nobody can believe.

   THE ADDRESS AND THE NAME ARE NOT TRANSLATED STRINGS. They stand once here
   and travel into the sentences as variables, so changing the contact means
   changing this file and not five dictionaries - and so no dictionary can
   drift into holding a stale address in one language only.

   It loads AFTER views.js, because `Views.shell` is created at the end of
   that file.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /** The data controller, as they answer. */
  var TYTULAR = "Andrea Bonacci";

  /** The only address in the notice. One place, five languages. */
  var KONTAKT = "andreabonacci95@protonmail.com";

  /* The day the text was last written, and the only date on the page. It is
     formatted for the reader's language rather than translated: five copies
     of one date would be five chances to leave four of them behind. Pinned
     to UTC, or a student west of Greenwich would read the day before. */
  var AKTUALIZACJA = Date.UTC(2026, 8, 10);

  function dataAktualizacji() {
    return new Intl.DateTimeFormat(I18n.locale(), {
      day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
    }).format(new Date(AKTUALIZACJA));
  }

  /* A stand-in for the address inside a translated sentence. It has to
     survive esc() untouched and never occur in real text: U+2063 is an
     invisible separator, which no translator types and no escaper rewrites.
     The anchor replaces it AFTER escaping, which is why the address can be
     a link without any translation being inserted as raw HTML. */
  var ZNACZNIK = "⁣@⁣";

  /* The sections in reading order: who, then the short answer, then the two
     things that do leave the device, then the paperwork. `lista` is the
     number of bullet points, `mail` marks the paragraphs that carry the
     address, `settings` adds the button that opens the screen where the
     student can actually act. */
  var SEKCJE = [
    { id: "chi", akapity: 1, mail: [1] },
    { id: "breve", akapity: 2 },
    { id: "dispositivo", akapity: 4, lista: 5, listaPo: 1, doUstawien: true },
    { id: "voce", akapity: 5, doUstawien: true },
    /* The second thing that leaves the device, after the voice and before
       the paperwork. Its list sits after the second paragraph, which is the
       one that introduces it. */
    { id: "modello", akapity: 5, lista: 3, listaPo: 2, doUstawien: true },
    { id: "cache", akapity: 1 },
    { id: "hosting", akapity: 1 },
    { id: "base", akapity: 2 },
    { id: "diritti", akapity: 2, mail: [2] },
    { id: "zmiany", akapity: 1 }
  ];

  /** The address as a link, built after escaping so nothing raw gets in. */
  function zMailem(tekst) {
    return tekst.replace(
      ZNACZNIK,
      '<a href="mailto:' + KONTAKT + '">' + KONTAKT + "</a>"
    );
  }

  /**
   * The variables every paragraph can use. The three button names are NOT
   * rewritten here: they come from the same `set.*` keys the student reads
   * in Settings, exactly as views-guide.js takes the screen names from the
   * rail. A separately worded "Export" would drift from the button at the
   * first change, on the one page whose job is to tell people where to go.
   */
  function zmienne() {
    return {
      name: TYTULAR,
      mail: ZNACZNIK,
      export: etykieta("set.export"),
      import: etykieta("set.import"),
      reset: etykieta("set.reset"),
      /* The name of the screen, taken from the rail the student clicks,
         for the same reason as the three button labels above: a separately
         worded "Settings" drifts from the menu at the first change, on the
         page whose whole job is telling people where to go. */
      settings: etykieta("nav.settings")
    };
  }

  /**
   * A button label as it reads inside a sentence. Two of the three carry a
   * leading arrow (⬇ Export) which earns its place on the button and gets
   * in the way in prose: “⬇ Export” quoted mid-paragraph reads as a typo.
   * We strip what is not a letter or a digit from the front, and nothing
   * else - the words themselves still come from the `set.*` keys, so they
   * cannot drift from the screen they point at.
   */
  function etykieta(klucz) {
    return t(klucz).replace(/^[^\p{L}\p{N}]+/u, "");
  }

  function akapity(s) {
    var out = "";
    for (var i = 1; i <= s.akapity; i++) {
      var tekst = esc(t("privacy." + s.id + ".p" + i, zmienne()));
      out += "<p>" + (s.mail && s.mail.indexOf(i) >= 0 ? zMailem(tekst) : tekst) + "</p>";
      /* The list belongs after the paragraph that introduces it, not after
         all of them: "the course saves the following:" with three
         paragraphs between it and the following. */
      if (s.lista && s.listaPo === i) out += lista(s);
    }
    /* No `listaPo` means the list closes the section. */
    if (s.lista && !s.listaPo) out += lista(s);
    return out;
  }

  function lista(s) {
    var out = "";
    /* The bullets take the same variables as the paragraphs. Without them a
       list item naming a button would print the placeholder instead of the
       word the student reads on the screen it points at. */
    for (var i = 1; i <= s.lista; i++) out += "<li>" + esc(t("privacy." + s.id + ".l" + i, zmienne())) + "</li>";
    /* The bottom margin is not symmetry: without it the paragraph that
       follows the list sits flush against the last bullet and reads as one
       more item of it. */
    return '<ul style="margin:8px 0 14px;padding-left:20px">' + out + "</ul>";
  }

  function sekcja(s) {
    return '<section class="card" id="p-' + s.id + '" style="margin-bottom:18px">' +
      "<h3>" + esc(t("privacy." + s.id + ".h")) + "</h3>" +
      akapity(s) +
      (s.doUstawien
        ? '<button class="btn btn--ghost btn--sm js-ustawienia" style="margin-top:6px">' +
          esc(t("privacy.toSettings")) + "</button>"
        : "") +
      "</section>";
  }

  Views.privacy = function () {
    set(pageHead(t("privacy.kicker"), t("privacy.title"), t("privacy.intro")) +
      '<p class="exq__sub" style="margin:-8px 0 20px">' +
      esc(t("privacy.updated", { date: dataAktualizacji() })) + "</p>" +
      SEKCJE.map(sekcja).join(""));

    el().querySelectorAll(".js-ustawienia").forEach(function (b) {
      b.addEventListener("click", function () { App.go("impostazioni"); });
    });
  };
})();
