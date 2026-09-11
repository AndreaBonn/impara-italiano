/* ============================================================
   badges.mjs — the two numbers the profile page shows about this repository
   Usage:  node scripts/badges.mjs --unit reports/unit.log \
                                   --dom reports/dom.json \
                                   --coverage reports/coverage.txt \
                                   [--out badges]

   The profile README (github.com/AndreaBonn) reads a shields.io endpoint
   badge per repository, so the count of tests and the coverage have to sit
   in this repository as JSON that CI keeps fresh. Written by hand they are
   a claim about the suite; written from the run that just finished, they
   are a measurement. The README of the course itself says the same numbers
   in prose and goes stale between releases, which is exactly the failure
   this file removes from the profile page.

   The inputs are the reports the gates already produce, never a second run:
   the DOM suite takes a minute and a half, and a badge is not worth
   spending it twice.

   The unit count is read off the OUTPUT of `npm test`, not off a TAP file
   written by a second npm script. `npm test -- --test-reporter=tap …` does
   not work, and this is measured rather than assumed: node ignores its own
   options when they arrive after the glob, the run goes green and no
   report appears. A second
   script would therefore have to repeat the glob, and the pattern of the
   test files would live in two places that nothing keeps in step.

   THE NUMBER ON THE TEST BADGE IS UNIT + DOM, because the two suites
   answer for two halves of one engine: the pure functions run in node:vm,
   everything that touches the browser runs in Chromium, and neither half
   alone describes what is verified. Coverage stays what coverage.mjs
   measures, the unit coverage of the engine, because the DOM suite is not
   counted there and a merged figure would suggest otherwise.

   A report that cannot be parsed is an error, not a grey badge. The step
   runs after the gates, so unreadable input means the format changed under
   us, and a badge that quietly reports "N/A" on a green build is the kind
   of failure nobody goes looking for.
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* The thresholds of the other repositories on the profile, kept identical so
   that one green badge means the same thing across all of them. */
const COVERAGE_COLOURS = [
  { min: 90, colour: "brightgreen" },
  { min: 80, colour: "green" },
  { min: 60, colour: "yellow" },
  { min: 0, colour: "red" }
];

/**
 * Passed and failed counts out of the output of `npm test`.
 *
 * The summary lines of the node:test reporter (`ℹ pass 944`, `ℹ fail 0`) are
 * the whole contract, and both are anchored: a test whose NAME contains
 * "pass 1" sits on an indented line above and cannot move the number.
 */
export function parseNodeTest(text) {
  const pass = text.match(/^ℹ pass (\d+)$/m);
  const fail = text.match(/^ℹ fail (\d+)$/m);
  if (!pass || !fail) throw new Error("Unit report without a `ℹ pass` / `ℹ fail` summary");
  return { passed: Number(pass[1]), failed: Number(fail[1]) };
}

/**
 * The same pair out of Playwright's JSON reporter.
 *
 * `flaky` counts as passed: it is a test that went green on a retry, which
 * is what the suite reports as success. `retries` is 0 here, so the field is
 * expected to stay at zero, and is read rather than assumed.
 */
export function parsePlaywright(text) {
  const stats = JSON.parse(text).stats;
  if (!stats || typeof stats.expected !== "number" || typeof stats.unexpected !== "number") {
    throw new Error("Playwright report without usable `stats`");
  }
  return { passed: stats.expected + (stats.flaky || 0), failed: stats.unexpected };
}

/** The total percentage off the last line of `coverage.mjs`. */
export function parseCoverage(text) {
  const total = text.match(/^RAZEM (\d+(?:\.\d+)?)%/m);
  if (!total) throw new Error("Coverage report without a `RAZEM <n>%` line");
  return Number(total[1]);
}

/**
 * The shields.io endpoint object for the test badge.
 *
 * A red badge carries both numbers (`930/931 passed`): "930 passed" on a
 * suite of 931 reads as a pass at a glance, and the badge is looked at
 * precisely by people who will not open the build log.
 */
export function testBadge({ passed, failed }) {
  const total = passed + failed;
  return {
    schemaVersion: 1,
    label: "tests",
    message: failed > 0 ? `${passed}/${total} passed` : `${passed} passed`,
    color: failed > 0 ? "red" : "brightgreen"
  };
}

/** The same, for coverage. */
export function coverageBadge(percent) {
  const { colour } = COVERAGE_COLOURS.find((row) => percent >= row.min);
  return {
    schemaVersion: 1,
    label: "coverage",
    message: `${percent}%`,
    color: colour
  };
}

function flag(argv, name) {
  const i = argv.indexOf(name);
  if (i < 0 || !argv[i + 1]) throw new Error(`Missing ${name} <file>`);
  return argv[i + 1];
}

function main(argv) {
  const unit = parseNodeTest(readFileSync(flag(argv, "--unit"), "utf8"));
  const dom = parsePlaywright(readFileSync(flag(argv, "--dom"), "utf8"));
  const coverage = parseCoverage(readFileSync(flag(argv, "--coverage"), "utf8"));

  const outIdx = argv.indexOf("--out");
  const out = join(ROOT, outIdx >= 0 && argv[outIdx + 1] ? argv[outIdx + 1] : "badges");
  mkdirSync(out, { recursive: true });

  const tests = testBadge({
    passed: unit.passed + dom.passed,
    failed: unit.failed + dom.failed
  });
  const cov = coverageBadge(coverage);

  writeFileSync(join(out, "test-badge.json"), JSON.stringify(tests) + "\n");
  writeFileSync(join(out, "coverage-badge.json"), JSON.stringify(cov) + "\n");

  console.log(`tests:    ${tests.message} (${unit.passed} unit + ${dom.passed} DOM)`);
  console.log(`coverage: ${cov.message}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    main(process.argv.slice(2));
  } catch (e) {
    console.error(`BŁĄD — ${e.message}`);
    process.exit(1);
  }
}
