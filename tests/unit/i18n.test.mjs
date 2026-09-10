/* ============================================================
   Interface strings (assets/js/i18n.js).

   Attaching texts to the course content has a file of its own next door
   (i18n-merge.test.mjs) — as the engine has had since the split.

   `t()` decides something no data file shows: the plural form. "1 dni" and
   "5 dzień" are not typos but the wrong category, and they only surface in
   front of the student, at one specific number.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

/** We load i18n.js AFTER the engine, so that it overrides the sandbox's I18n double. */
function swiezy() {
  const box = loadEngine({ files: [...CORE, "assets/js/i18n.js"] });
  box.Core.load();
  return { I18n: box.sandbox.I18n, LINGUAI: box.sandbox.LINGUAI };
}

function zNapisami(dict, lang) {
  const { I18n, LINGUAI } = swiezy();
  LINGUAI.addUI(lang || "pl", dict);
  if (lang) I18n.set(lang);
  return I18n;
}

describe("napisy interfejsu", () => {
  test("a missing key comes back as the key and lands on the missing list", () => {
    const I18n = zNapisami({ "a.b": "jest" });
    assert.equal(I18n.t("nie.ma"), "nie.ma");
    assert.ok(I18n.missing().indexOf("nie.ma") >= 0);
    assert.equal(I18n.missing().indexOf("a.b"), -1, "a key that exists does not land on the missing list");
  });

  test("the variables go in where the braces are", () => {
    const I18n = zNapisami({ "x": "masz {n} punktów i {ile} dni" });
    assert.equal(I18n.t("x", { n: 5, ile: 2 }), "masz 5 punktów i 2 dni");
  });

  test("an unknown variable stays in the text instead of disappearing", () => {
    const I18n = zNapisami({ "x": "masz {n} i {czego}" });
    assert.equal(I18n.t("x", { n: 1 }), "masz 1 i {czego}");
  });

  test("Polish picks the form by category, not by n === 1", () => {
    const I18n = zNapisami({ "d": { one: "{n} dzień", few: "{n} dni", many: "{n} dni", other: "{n} dnia" } });
    assert.equal(I18n.t("d", { n: 1 }), "1 dzień");
    assert.equal(I18n.t("d", { n: 3 }), "3 dni");
    assert.equal(I18n.t("d", { n: 5 }), "5 dni");
  });

  test("angielski ma dwie kategorie i „1 lessons” tu nie wyjdzie", () => {
    const I18n = zNapisami({ "l": { one: "{n} lesson", other: "{n} lessons" } }, "en");
    assert.equal(I18n.t("l", { n: 1 }), "1 lesson");
    assert.equal(I18n.t("l", { n: 2 }), "2 lessons");
  });

  test("a missing number counts as zero, not as a missing form", () => {
    const I18n = zNapisami({ "l": { one: "{n} lekcja", few: "{n} lekcje", many: "{n} lekcji", other: "{n} lekcji" } });
    assert.equal(I18n.t("l"), "{n} lekcji", "the category for zero; a variable with no value stays");
  });

  test("the locale follows the chosen language", () => {
    const I18n = zNapisami({ "a": "a" }, "en");
    assert.equal(I18n.lang, "en");
    assert.equal(I18n.locale(), "en-US", "English in this course is the American variety");
  });

  test("a string missing in the current language falls back to English, not to the key", () => {
    /* The course speaks five languages and an overlay is sometimes
       incomplete: the student should see a sentence in English rather than
       "set.errNoVersion" on the screen. */
    const { I18n, LINGUAI } = swiezy();
    LINGUAI.addUI("en", { "x": "Fallback text" });
    LINGUAI.addUI("de", {});
    I18n.set("de");

    assert.equal(I18n.t("x"), "Fallback text");
    assert.ok(I18n.missing().indexOf("x") >= 0, "the gap is still visible on the list");
  });
});
