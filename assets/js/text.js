/* ============================================================
   text.js — porównywanie tekstu: normalizacja, odległość, ocena odpowiedzi.

   Wyjęte z core.js, bo nie ma z nim nic wspólnego poza historią. Te
   funkcje nie dotykają stanu, localStorage ani DOM: dostają napis i
   oddają napis albo liczbę. Dopóki siedziały w module stanu, ich test
   wymagał zbudowania całej piaskownicy ze sterowalnym zegarem i pamięcią
   — czyli aparatury dla rzeczy, która jej nie potrzebuje.

   Core dalej wystawia je pod swoimi nazwami (Core.norm, Core.esc, …),
   więc żaden z dwudziestu modułów, które ich używają, nie zmienia ani
   jednej linijki.
   ============================================================ */
(function (global) {
  "use strict";

  var ACCENT_MAP = { "à": "a", "á": "a", "è": "e", "é": "e", "ì": "i", "í": "i", "ò": "o", "ó": "o", "ù": "u", "ú": "u" };

  function stripAccents(s) {
    return s.replace(/[àáèéìíòóùú]/g, function (c) { return ACCENT_MAP[c] || c; });
  }

  /**
   * Znaki typograficzne na maszynowe. Wymiana jest ZNAK W ZNAK, więc nie
   * przesuwa pozycji w tekście — to jest warunek, na którym stoi
   * podświetlanie wyników wyszukiwania (search.js).
   *
   * Klawiatura telefonu i edytor tekstu dają „’", nie „'". Bez tej wymiany
   * uczeń, który wkleja albo pisze na iOS, nigdy nie trafia w „l'autore".
   */
  function detypo(s) {
    return String(s == null ? "" : s)
      .replace(/[‘’ʼ`´]/g, "'")
      .replace(/[“”„]/g, '"');
  }

  /**
   * Składanie do porównań: małe litery, ujednolicone apostrofy, zdjęte
   * akcenty. Białych znaków NIE zwęża, w odróżnieniu od norm(): dzięki
   * temu długość jest zachowana i po indeksach z tekstu złożonego można
   * ciąć oryginał.
   */
  function fold(s) {
    return stripAccents(detypo(s).toLowerCase());
  }

  /** Normalizuje odpowiedź ucznia do porównania. */
  function norm(s, opts) {
    opts = opts || {};
    var t = detypo(s)
      .toLowerCase()
      .replace(/[.,;:!?…"()[\]]/g, " ")
      .replace(/\s*'\s*/g, "'")
      .replace(/\s+/g, " ")
      .trim();
    if (!opts.keepAccents) t = stripAccents(t);
    return t;
  }

  /** Odległość Levenshteina (do „prawie dobrze" i oceny wymowy). */
  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    var prev = new Array(b.length + 1), cur = new Array(b.length + 1), i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur[0] = i;
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1));
      }
      for (j = 0; j <= b.length; j++) prev[j] = cur[j];
    }
    return prev[b.length];
  }

  /** Podobieństwo 0..1 na bazie Levenshteina. */
  function similarity(a, b) {
    var x = norm(a), y = norm(b);
    if (!x && !y) return 1;
    var d = levenshtein(x, y);
    return Math.max(0, 1 - d / Math.max(x.length, y.length));
  }

  /**
   * Sprawdza odpowiedź otwartą wobec listy akceptowanych wariantów.
   * Zwraca {ok, near, best} — „near" to literówka (podobieństwo ≥ 0.85).
   */
  function checkOpen(input, accepted, strictAccents) {
    var list = Array.isArray(accepted) ? accepted : [accepted];
    var given = norm(input, { keepAccents: !!strictAccents });
    var best = null, bestSim = 0, ok = false;
    for (var i = 0; i < list.length; i++) {
      var target = norm(list[i], { keepAccents: !!strictAccents });
      if (given === target) { ok = true; best = list[i]; bestSim = 1; break; }
      var sim = similarity(given, target);
      if (sim > bestSim) { bestSim = sim; best = list[i]; }
    }
    return { ok: ok, near: !ok && bestSim >= 0.85 && given.length > 2, best: best || list[0], sim: bestSim };
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  global.Txt = {
    stripAccents: stripAccents, detypo: detypo, fold: fold, norm: norm,
    levenshtein: levenshtein, similarity: similarity, checkOpen: checkOpen,
    esc: esc
  };

})(window);
