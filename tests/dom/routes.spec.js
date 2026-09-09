/* ============================================================
   Każda trasa ma swój widok i ten widok coś rysuje.

   Powód istnienia tego pliku siedzi w app.js:66 —

       var fn = Views[route];
       if (!fn) { Views.percorso({}); route = "percorso"; }

   Brakujący widok NIE wywraca aplikacji: pokazuje ścieżkę nauki. Odkąd
   ekrany mieszkają w kilkunastu plikach wczytywanych osobnymi
   <script>, zapomniany znacznik w index.html (albo literówka w nazwie
   pliku) daje dokładnie to: kurs chodzi, a jedna pozycja menu po cichu
   prowadzi gdzie indziej. Nie widać tego ani w konsoli, ani w żadnym
   innym teście — każdy z nich wchodzi na SWÓJ ekran.

   Stąd dwa sprawdzenia, w tej kolejności: czy widok w ogóle istnieje
   (to łapie brakujący plik), a potem czy narysował cokolwiek (to łapie
   plik wczytany, ale wywalający się przy pierwszym uruchomieniu).
   ============================================================ */
const { test, expect } = require("@playwright/test");

/* Trasy z menu bocznego plus te osiągalne tylko z wnętrza kursu. */
const TRASY = [
  "oggi", "percorso", "ripasso", "allenamento", "conversazione", "grammatica",
  "coniugatore", "lessico", "shadowing", "velocita", "esame", "falsi",
  "copertura", "progressi", "impostazioni",
  "lezione", "piazzamento", "cerca", "lettura", "scrittura", "suoni"
];

/** Czeka, aż silnik wstanie i wczyta spis kursu. */
async function otworz(page) {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Views && window.Core && window.Core.registry.levels.length > 0);
}

test("każda trasa z menu ma zarejestrowany widok", async ({ page }) => {
  await otworz(page);
  const brakujace = await page.evaluate(
    trasy => trasy.filter(r => typeof window.Views[r] !== "function"),
    TRASY
  );
  expect(brakujace, "widok bez pliku albo plik bez <script> w index.html").toEqual([]);
});

test("pozycje menu bocznego wskazują istniejące widoki", async ({ page }) => {
  await otworz(page);
  const zle = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".rail__item"))
      .map(b => b.getAttribute("data-route"))
      .filter(r => typeof window.Views[r] !== "function")
  );
  expect(zle, "menu prowadzi na trasę bez widoku: router po cichu pokaże ścieżkę nauki").toEqual([]);
});

for (const trasa of TRASY) {
  test(`trasa ${trasa} rysuje ekran i nie zgłasza błędu`, async ({ page }) => {
    const bledy = [];
    page.on("pageerror", e => bledy.push(String(e)));
    page.on("console", m => { if (m.type() === "error") bledy.push(m.text()); });

    await otworz(page);
    await page.evaluate(r => window.App.go(r, {}), trasa);

    /* Nie „jakikolwiek HTML": pusty ekran po zmianie trasy wyglądałby
       jak poprawny render. Widok ma zostawić w #main przynajmniej jeden
       element — nawet stan pusty jest elementem (klasa .empty). */
    await expect(page.locator("#main > *").first()).toBeVisible();
    expect(bledy, `błędy na trasie ${trasa}: ${bledy.join(" | ")}`).toEqual([]);
  });
}
