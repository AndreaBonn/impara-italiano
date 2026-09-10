/* ============================================================
   csp.spec.js — the page's security policy must not quietly take away
   something the course used to do.

   Why a separate suite, given there are already 158 DOM tests: a CSP
   violation brings down NONE of them. The browser blocks the resource and
   writes about it in the console, and a test that happens not to touch that
   button passes green. Here the console IS the assertion.

   The routes are walked one after another in a single tab, the way a student
   walks them: every hash change adds a view to the same document, so one
   violation in any of them will report itself here.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const TRASY = [
  "oggi", "percorso", "ripasso", "allenamento", "conversazione", "grammatica",
  "coniugatore", "lessico", "shadowing", "velocita", "esame", "falsi",
  "copertura", "progressi", "impostazioni"
];

/** Catches everything the browser says about the Content Security Policy. */
function nasluchNaruszen(page) {
  const naruszenia = [];
  const zbierz = (tekst) => {
    if (/Content Security Policy|Refused to (load|execute|apply|connect)/i.test(tekst)) {
      naruszenia.push(tekst);
    }
  };
  page.on("console", (m) => zbierz(m.text()));
  page.on("pageerror", (e) => zbierz(String(e)));
  return naruszenia;
}

test("no route breaks the security policy", async ({ page }) => {
  const naruszenia = nasluchNaruszen(page);

  await page.goto("/index.html");
  await expect(page.locator(".rail")).toBeVisible();

  for (const trasa of TRASY) {
    await page.evaluate((t) => { window.location.hash = "#/" + t; }, trasa);
    await page.waitForTimeout(220);
  }
  await page.waitForTimeout(400);

  expect(naruszenia, naruszenia.join("\n")).toEqual([]);
});

test("the resources the policy could have cut off still load", async ({ page }) => {
  const naruszenia = nasluchNaruszen(page);
  await page.goto("/index.html");

  /* Four things that would fall first under a policy that is too tight, each
     under a different directive: the fonts (font-src), the favicon as a
     data: URI (img-src), a style built in JS (style-src 'unsafe-inline'),
     the service worker (worker-src). We check them by their EFFECT, not by
     the declaration. */
  const stan = await page.evaluate(async () => {
    await document.fonts.ready;
    const wczytane = [...document.fonts].filter((f) => f.status === "loaded").map((f) => f.family);

    const proba = document.createElement("div");
    proba.setAttribute("style", "width:42px");
    document.body.appendChild(proba);
    const szerokosc = getComputedStyle(proba).width;
    proba.remove();

    const ikona = document.querySelector('link[rel="icon"]');

    return {
      kroje: [...new Set(wczytane)],
      stylZAtrybutu: szerokosc,
      faviconData: !!(ikona && ikona.getAttribute("href").startsWith("data:")),
      guskaZarejestrowana: !!navigator.serviceWorker.controller ||
        !!(await navigator.serviceWorker.getRegistration())
    };
  });

  expect(stan.kroje.length, "the fonts from assets/fonts did not load").toBeGreaterThan(0);
  expect(stan.stylZAtrybutu, "the style= attribute was blocked").toBe("42px");
  expect(stan.faviconData, "favicon jako data: URI").toBe(true);
  expect(stan.guskaZarejestrowana, "the service worker did not come up").toBe(true);
  expect(naruszenia, naruszenia.join("\n")).toEqual([]);
});
