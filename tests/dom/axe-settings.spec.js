/* ============================================================
   axe-core on the settings screen.

   WHY A TEST AND NOT A ONE-OFF AUDIT. An audit run by hand proves the screen
   was right on the day somebody looked. This screen collects every switch
   the course has, and it grows by a card at a time — the return hook was the
   latest — so what has to hold is the property, not the day.

   WHY THE INJECTION LOOKS UNUSUAL. The page carries a strict CSP, so
   `addScriptTag` is refused and the usual axe gate reports SKIPPED, which
   reads like a pass and is not one. `addInitScript` runs before the page's
   own scripts and outside the CSP's reach, so axe is really there and really
   runs.

   WHAT THIS DOES NOT COVER, said plainly: axe finds violations that can be
   detected mechanically. It says nothing about whether a label makes sense,
   and nothing about contrast in this palette — the colours are in OKLCH and
   an external parser reads `oklch(0.31 0.035 350)` as a blue channel of 350.
   Contrast lives in contrast.spec.js, measured through the browser.
   ============================================================ */
const { test, expect } = require("@playwright/test");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

const AXE = readFileSync(join(__dirname, "..", "..", "node_modules", "axe-core", "axe.min.js"), "utf8");

const ZNACZNIKI = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const theme of ["light", "dark"]) {
  test(`the settings screen: no axe violations in the ${theme} theme`, async ({ page }) => {
    await page.addInitScript(AXE);
    /* The badge switch exists only where the browser has the API; given
       here so the control is really on screen while it is checked. An
       element that is not drawn passes every rule without being right. */
    await page.addInitScript(() => {
      window.navigator.setAppBadge = () => Promise.resolve();
      window.navigator.clearAppBadge = () => Promise.resolve();
    });

    await page.goto("/index.html#/impostazioni");
    await page.waitForSelector(".js-ics");
    await page.evaluate((t) => document.documentElement.setAttribute("data-theme", t), theme);
    /* The palette crossfades, and axe reads the colours it finds at that
       instant: without this wait the dark theme reported ten contrast
       violations that were the colours HALFWAY THERE. A fixed wait is
       allowed here because what it waits for is a real, known duration —
       the same wait contrast.spec.js takes, for the same transition. */
    await page.waitForTimeout(700);

    /* The positive half of the pair: a run that examined nothing would report
       zero violations too, and that is the same zero. */
    const wynik = await page.evaluate(async (tags) => {
      const r = await window.axe.run(document, { runOnly: { type: "tag", values: tags } });
      return {
        naruszenia: r.violations.map((v) => ({ id: v.id, help: v.help, ile: v.nodes.length })),
        zdane: r.passes.length
      };
    }, ZNACZNIKI);

    expect(wynik.zdane, "axe nie sprawdziło niczego").toBeGreaterThan(10);
    expect(wynik.naruszenia, JSON.stringify(wynik.naruszenia, null, 2)).toEqual([]);
  });
}
