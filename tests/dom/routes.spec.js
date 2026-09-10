/* ============================================================
   Every route has its view and that view draws something.

   The reason this file exists sits in router.js, in render() —

       var fn = Views[route];
       if (!fn) { Views[DOMYSLNA]({}); route = DOMYSLNA; }

   A missing view does NOT bring the application down: it shows the learning
   path. Since the screens live in a dozen files loaded by separate
   <script> tags, a forgotten tag in index.html (or a typo in a file name)
   produces exactly that: the course runs and one menu entry quietly leads
   somewhere else. It shows neither in the console nor in any other test —
   each of those enters ITS OWN screen.

   Hence two checks, in this order: whether the view exists at all (that
   catches a missing file), and then whether it drew anything (that catches
   a file that loaded but blows up on its first run).
   ============================================================ */
const { test, expect } = require("@playwright/test");

/* The routes from the side menu plus the ones reachable only from inside the course. */
const TRASY = [
  "oggi", "percorso", "ripasso", "allenamento", "conversazione", "grammatica",
  "coniugatore", "lessico", "shadowing", "velocita", "esame", "falsi",
  "copertura", "progressi", "impostazioni",
  "lezione", "piazzamento", "cerca", "lettura", "scrittura", "suoni", "privacy"
];

/** Waits until the engine comes up and loads the course index. */
async function otworz(page) {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Views && window.Core && window.Core.registry.levels.length > 0);
}

test("every route in the menu has a registered view", async ({ page }) => {
  await otworz(page);
  const brakujace = await page.evaluate(
    trasy => trasy.filter(r => typeof window.Views[r] !== "function"),
    TRASY
  );
  expect(brakujace, "widok bez pliku albo plik bez <script> w index.html").toEqual([]);
});

test("the side menu entries point at views that exist", async ({ page }) => {
  await otworz(page);
  const zle = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".rail__item"))
      .map(b => b.getAttribute("data-route"))
      .filter(r => typeof window.Views[r] !== "function")
  );
  expect(zle, "the menu leads to a route with no view: the router will quietly show the learning path").toEqual([]);
});

for (const trasa of TRASY) {
  test(`route ${trasa} draws a screen and reports no error`, async ({ page }) => {
    const bledy = [];
    page.on("pageerror", e => bledy.push(String(e)));
    page.on("console", m => { if (m.type() === "error") bledy.push(m.text()); });

    await otworz(page);
    await page.evaluate(r => window.App.go(r, {}), trasa);

    /* Not "any HTML at all": an empty screen after a route change would look
       like a correct render. The view has to leave at least one element in
       #main — even the empty state is an element (the .empty class). */
    await expect(page.locator("#main > *").first()).toBeVisible();
    expect(bledy, `errors on route ${trasa}: ${bledy.join(" | ")}`).toEqual([]);
  });
}
