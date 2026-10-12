/* ============================================================
   The lesson screen: what the student reads before the exercises.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function lezione(page, id) {
  await page.goto("/index.html#/lezione?id=" + id);
  await page.waitForFunction(lid => window.Core && window.Core.getLesson(lid), id);
  await page.waitForSelector(".step");
}

/* A theory block may carry a heading AND a list ({h, list}). The renderer
   used to leave at the heading branch, so the list was never drawn and the
   rule it held (il -> i, lo -> gli) vanished, with the heading still there
   to make the section look complete. */
test("a theory block with a heading keeps its list", async ({ page }) => {
  await lezione(page, "a1-u01-l3");
  const blok = await page.evaluate(() => {
    const L = window.Core.getLesson("a1-u01-l3").lesson;
    return L.theory.find(b => b && b.h && b.list);
  });
  expect(blok, "the lesson has a {h, list} block").toBeTruthy();

  const naglowek = page.locator(".prose h4", { hasText: blok.h });
  await expect(naglowek).toHaveCount(1);
  const lista = naglowek.locator("xpath=following-sibling::*[1]");
  await expect(lista).toHaveJSProperty("tagName", "UL");
  await expect(lista.locator("li")).toHaveCount(blok.list.length);
});
