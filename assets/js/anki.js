/* ============================================================
   anki.js — the deck goes out and comes in in a format Anki reads.

   What for: so the student is not a hostage of this course. Exporting the
   state as JSON already exists, but only this application reads it; TSV is
   read by Anki, by a spreadsheet and by every other flashcard program.
   Only that is a way out.

   WHAT THE EXPORT DOES NOT CARRY, and the student has to be told before
   clicking rather than in the README: **the review schedule**. Words and
   translations go out, not due dates. FSRS stability and difficulty
   describe memory measured in THIS course and mean nothing in Anki — and
   staying silent about it ends in losing a year of reviews to a clean
   import.

   Three things that go wrong in this format if you do not think about them:

   1. THE SEPARATOR IN THE CONTENT. An Italian sentence with a comma or a
      quotation mark breaks the columns. Hence RFC 4180-style quoting and
      the tab as separator: a tab practically never appears in a card,
      a comma appears in every third.
   2. THE FORMULA PREFIX. A field starting with `=`, `+`, `-` or `@`
      executes as a formula when somebody opens the file in a spreadsheet.
      A deck received from somebody else then becomes a vector. We
      neutralise it with an apostrophe, deliberately paying one character
      visible in Anki.
   3. HTML. Anki interprets fields as HTML by default. We declare
      `#html:false`, so that "<" in a sentence stays a character rather
      than a tag.

   The module is PURE: strings in, strings out. No DOM, no state, no Core.
   Classic script.
   ============================================================ */
(function (global) {
  "use strict";

  var Anki = {};

  var SEP = "\t";
  var NL = "\n";

  /* Anki 2.1.55+ reads these directives from the first lines of the file,
     and thanks to them the student has to set nothing in the import wizard. */
  var NAGLOWEK = [
    "#separator:tab",
    "#html:false",
    /* The column names MUST be the field names of the note type, because
       Anki maps the columns by them automatically. With
       "Italiano/Traduzione" the import went through without an error and
       left the second field EMPTY — the first version did exactly that,
       and you only see it by opening an imported note, not in any message. */
    "#notetype:Basic",
    "#columns:Front\tBack\tTags",
    "#tags column:3"
  ];

  /** The characters from which a spreadsheet starts computing a formula. */
  var FORMULA = /^[=+\-@\t\r]/;

  /**
   * A field ready to be written: formula neutralisation, then quoting.
   *
   * The order matters. The apostrophe has to go in BEFORE the quoting,
   * otherwise it lands outside the quotation marks and the spreadsheet sees
   * `=` as the first character of the content anyway.
   */
  function pole(v) {
    var s = v === null || v === undefined ? "" : String(v);
    if (FORMULA.test(s)) s = "'" + s;
    if (s.indexOf('"') >= 0 || s.indexOf(SEP) >= 0 || s.indexOf("\n") >= 0 || s.indexOf("\r") >= 0) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }

  /**
   * Serialises cards into the TSV that Anki reads.
   *
   * @param {Array} karty [{it, tr, tag}]
   * @returns {string}
   */
  function toTsv(karty) {
    var linie = NAGLOWEK.slice();
    (karty || []).forEach(function (k) {
      linie.push([pole(k.it), pole(k.tr), pole(k.tag || "")].join(SEP));
    });
    return linie.join(NL) + NL;
  }

  /* Above this size we do not parse at all. A student's deck is hundreds of
     cards, not hundreds of thousands: a file that big either is not a deck
     or is an attempt to hang the browser. We refuse BEFORE parsing. */
  var MAX_WIERSZY = 50000;
  var MAX_ZNAKOW = 8 * 1024 * 1024;

  /**
   * Breaks the WHOLE text into rows of fields, honouring quoting.
   *
   * You cannot cut on newlines first and parse afterwards: a quoted field
   * MAY be broken across several lines and RFC 4180 allows for that. The
   * first version did exactly that and tore in half every card containing a
   * line break — it went out correctly and came back as two halves. The
   * round-trip test caught it, not the eye.
   *
   * @returns {{wiersze:Array<Array<string>>, urwany:boolean}}
   */
  function rozbierzTekst(tekst) {
    var wiersze = [], pola = [], buf = "", w = false, i = 0;

    function konieczPola() { pola.push(buf); buf = ""; }
    function konieczWiersza() { konieczPola(); wiersze.push(pola); pola = []; }

    while (i < tekst.length) {
      var c = tekst[i];

      if (w) {
        if (c === '"') {
          if (tekst[i + 1] === '"') { buf += '"'; i += 2; continue; }
          w = false; i++; continue;
        }
        buf += c; i++; continue;
      }

      if (c === '"' && buf === "") { w = true; i++; continue; }
      if (c === SEP) { konieczPola(); i++; continue; }
      if (c === "\r") { i++; continue; }
      if (c === "\n") { konieczWiersza(); i++; continue; }
      buf += c; i++;
    }
    if (buf !== "" || pola.length) konieczWiersza();
    return { wiersze: wiersze, urwany: w };
  }

  /** Removes the apostrophe we used to neutralise a formula on export. */
  function odNeutralizuj(s) {
    return s.length > 1 && s[0] === "'" && FORMULA.test(s.slice(1)) ? s.slice(1) : s;
  }

  /**
   * Parses a TSV/CSV file into a list of cards.
   *
   * Returns `{karty, blad, pominiete}`. It does not throw: the import is
   * the only place where the student supplies a file from outside, and
   * "something went wrong" is useless there. The error carries a string
   * KEY, because the course speaks five languages.
   */
  function fromTsv(tekst) {
    var s = String(tekst || "");
    if (s.length > MAX_ZNAKOW) return { karty: [], blad: "anki.errTooBig", pominiete: 0 };
    /* A cheap counter before parsing: we do not want to walk character by
       character through a file we are going to reject anyway. */
    if ((s.match(/\n/g) || []).length > MAX_WIERSZY) {
      return { karty: [], blad: "anki.errTooManyRows", pominiete: 0 };
    }

    var r = rozbierzTekst(s);
    /* An unclosed quotation mark swallows everything after it: the parser
       has no way to guess where the field was meant to end. Skipping "that
       one row" is impossible here, and gluing the rest of the file into one
       field would be worse than refusing — the student would get a card
       holding half of somebody else's deck with no way to notice. We refuse
       the whole file. */
    if (r.urwany) return { karty: [], blad: "anki.errUnterminated", pominiete: 0 };
    var karty = [], pominiete = 0, kolumn = 0;

    for (var i = 0; i < r.wiersze.length; i++) {
      var p = r.wiersze[i];
      if (p.length === 1 && !p[0].trim()) continue;
      if (p[0][0] === "#") continue;                   // Anki directives

      /* The number of columns must be constant across the file. A file
         where some rows have three fields and others four is either damaged
         or has a separator in its content — in both cases adding it to the
         deck would bring in rubbish the student can no longer tell apart
         from their own cards. */
      if (!kolumn) kolumn = p.length;
      else if (p.length !== kolumn) return { karty: [], blad: "anki.errRagged", pominiete: pominiete };

      var it = odNeutralizuj(p[0] || "").trim();
      var tr = odNeutralizuj(p[1] || "").trim();
      if (!it) { pominiete++; continue; }
      karty.push({ it: it, tr: tr, tag: (p[2] || "").trim() });
    }
    return { karty: karty, blad: null, pominiete: pominiete };
  }

  Anki.toTsv = toTsv;
  Anki.fromTsv = fromTsv;
  Anki.MAX_WIERSZY = MAX_WIERSZY;
  global.Anki = Anki;

})(window);
