/* ============================================================
   The badges shown on the profile page (scripts/badges.mjs).

   Everything here is a reading of somebody else's report format, and each
   of those formats breaks in the same quiet way: a regex that matches
   nothing gives a badge that still renders, still looks like a measurement
   and says a number nobody produced. So the parsers are checked on the
   shape they really receive, and on the shape that must raise instead of
   guessing.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { parseNodeTest, parsePlaywright, parseCoverage, testBadge, coverageBadge } from "../../scripts/badges.mjs";

/* The shape `npm test` really writes, down to the indented line carrying a
   test name that looks like the summary. */
const UNIT = `▶ odczyt wypracowania
  ✔ ℹ pass 999 in the name of a test (1.9ms)
✔ odczyt wypracowania (4.2ms)
ℹ tests 944
ℹ suites 218
ℹ pass 944
ℹ fail 0
ℹ cancelled 0
`;

describe("odczyt wyniku npm test", () => {
  test("the summary lines give the counts", () => {
    assert.deepEqual(parseNodeTest(UNIT), { passed: 944, failed: 0 });
  });

  test("a failing suite keeps both numbers apart", () => {
    assert.deepEqual(parseNodeTest(UNIT.replace("ℹ pass 944", "ℹ pass 943").replace("ℹ fail 0", "ℹ fail 1")), {
      passed: 943,
      failed: 1
    });
  });

  test("a report without a summary raises instead of reporting zero", () => {
    assert.throws(() => parseNodeTest("▶ coś tam\n  ✔ a test (1ms)\n"), /pass/);
  });
});

describe("odczyt raportu Playwrighta", () => {
  test("expected is what passed, unexpected is what failed", () => {
    const json = JSON.stringify({ stats: { expected: 263, unexpected: 0, flaky: 0, skipped: 0 } });
    assert.deepEqual(parsePlaywright(json), { passed: 263, failed: 0 });
  });

  test("a test green on a retry counts as passed", () => {
    const json = JSON.stringify({ stats: { expected: 260, unexpected: 1, flaky: 2, skipped: 0 } });
    assert.deepEqual(parsePlaywright(json), { passed: 262, failed: 1 });
  });

  test("a report without stats raises", () => {
    assert.throws(() => parsePlaywright(JSON.stringify({ suites: [] })), /stats/);
  });
});

describe("odczyt pokrycia", () => {
  test("the total line gives the percentage", () => {
    assert.equal(parseCoverage("plik   pokr%\nRAZEM 99.3% (4216/4247 linii, 37 plików silnika).\n"), 99.3);
  });

  test("a whole percentage is read as well", () => {
    assert.equal(parseCoverage("RAZEM 100% (10/10 linii).\n"), 100);
  });

  test("a report without the total line raises", () => {
    assert.throws(() => parseCoverage("plik   pokr%\ncore.js  99.0\n"), /RAZEM/);
  });
});

describe("kształt odznak", () => {
  test("a green suite shows the count alone", () => {
    assert.deepEqual(testBadge({ passed: 1194, failed: 0 }), {
      schemaVersion: 1,
      label: "tests",
      message: "1194 passed",
      color: "brightgreen"
    });
  });

  test("a red suite shows the count against the total", () => {
    const badge = testBadge({ passed: 1193, failed: 1 });
    assert.equal(badge.message, "1193/1194 passed");
    assert.equal(badge.color, "red");
  });

  test("the coverage colour follows the thresholds of the other repositories", () => {
    assert.equal(coverageBadge(99.3).color, "brightgreen");
    assert.equal(coverageBadge(90).color, "brightgreen");
    assert.equal(coverageBadge(89.9).color, "green");
    assert.equal(coverageBadge(80).color, "green");
    assert.equal(coverageBadge(79.9).color, "yellow");
    assert.equal(coverageBadge(60).color, "yellow");
    assert.equal(coverageBadge(59.9).color, "red");
    assert.equal(coverageBadge(0).color, "red");
  });

  test("the coverage message carries the percent sign", () => {
    assert.equal(coverageBadge(99.3).message, "99.3%");
  });
});
