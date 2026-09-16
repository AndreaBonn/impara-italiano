/* ============================================================
   An answer given just before the tab closes is not lost.

   save() waits 180 ms before writing. The unit tests prove that flush()
   writes and that pagehide calls it, against a substituted window. What they
   cannot prove is that a real browser fires pagehide on a reload in time for
   the write to land, and that is the only part the student depends on.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test("a graded card survives a reload inside the save debounce", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.Core.addCard);

  const klucz = await page.evaluate(() => {
    const k = window.Core.addCard("il gatto", "kot", "test");
    window.Store.flush();
    window.Core.gradeCard(k, 4);
    return k;
  });

  await page.reload();
  await page.waitForFunction(() => window.Core && window.Core.state);
  const po = await page.evaluate(k => ({
    reps: window.Core.state.srs[k] && window.Core.state.srs[k].reps,
    log: window.Core.state.reviews.filter(r => r.k === k).length
  }), klucz);

  expect(po.reps, "the grade reached storage").toBe(1);
  expect(po.log, "the review journal holds the answer").toBe(1);
});
