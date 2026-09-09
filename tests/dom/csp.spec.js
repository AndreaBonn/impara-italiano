/* ============================================================
   csp.spec.js — reguła bezpieczeństwa ze strony nie może po cichu
   zabrać kursowi czegoś, co działało.

   Dlaczego osobna suita, skoro DOM-owych testów jest już 158: naruszenie
   CSP nie wywraca ŻADNEGO z nich. Przeglądarka blokuje zasób i pisze o tym
   w konsoli, a test, który akurat nie dotyka tego przycisku, przechodzi na
   zielono. Tu konsola JEST asercją.

   Trasy chodzą po kolei w jednej karcie, tak jak chodzi po nich uczeń:
   każda zmiana hasza dokłada widok do tego samego dokumentu, więc jedno
   naruszenie w którymkolwiek z nich zgłosi się tutaj.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const TRASY = [
  "oggi", "percorso", "ripasso", "allenamento", "conversazione", "grammatica",
  "coniugatore", "lessico", "shadowing", "velocita", "esame", "falsi",
  "copertura", "progressi", "impostazioni"
];

/** Wyłapuje wszystko, co przeglądarka mówi o Content Security Policy. */
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

test("żadna trasa nie łamie reguły bezpieczeństwa", async ({ page }) => {
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

test("zasoby, które reguła mogła odciąć, nadal się wczytują", async ({ page }) => {
  const naruszenia = nasluchNaruszen(page);
  await page.goto("/index.html");

  /* Cztery rzeczy, które padłyby jako pierwsze przy zbyt ciasnej regule,
     każda pod inną dyrektywą: kroje pisma (font-src), favicon jako data:
     (img-src), styl budowany w JS (style-src 'unsafe-inline'), guska
     (worker-src). Sprawdzamy je po SKUTKU, nie po deklaracji. */
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

  expect(stan.kroje.length, "kroje z assets/fonts nie wczytały się").toBeGreaterThan(0);
  expect(stan.stylZAtrybutu, "atrybut style= został zablokowany").toBe("42px");
  expect(stan.faviconData, "favicon jako data: URI").toBe(true);
  expect(stan.guskaZarejestrowana, "service worker nie wstał").toBe(true);
  expect(naruszenia, naruszenia.join("\n")).toEqual([]);
});
