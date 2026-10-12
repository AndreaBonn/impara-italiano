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

/* The star alone did not say what it does: the label names the effect, and
   follows the state when the word goes in and out of the reviews. */
test("the vocabulary star says it adds the word to the reviews", async ({ page }) => {
  await lezione(page, "a1-u01-l3");
  const gwiazda = page.locator(".js-star").first();
  const przed = (await gwiazda.innerText()).trim();
  expect(przed.length, "a label next to the star").toBeGreaterThan(1);
  await gwiazda.click();
  await expect(gwiazda).toHaveAttribute("aria-pressed", "true");
  const po = (await gwiazda.innerText()).trim();
  expect(po, "the label changes with the state").not.toBe(przed);
  await gwiazda.click();
  await expect(gwiazda).toHaveAttribute("aria-pressed", "false");
  await expect(gwiazda).toHaveText(przed);
});

/* Answers every exercise of the open lesson with a deliberately wrong text
   where there is a field, so that the run reaches its end with mistakes in
   it. Speech recognition is removed before the page loads: a "speak"
   exercise then finishes on a click, the case the course already handles. */
async function bezMowy(page) {
  await page.addInitScript(() => { delete window.SpeechRecognition; delete window.webkitSpeechRecognition; });
}

async function odpowiedzNaWszystko(page) {
  await page.evaluate(async () => {
    for (const root of document.querySelectorAll(".exq")) {
      const btn = root.querySelector(".js-check");
      if (!btn || btn.disabled) continue;
      root.querySelectorAll(".js-in, .js-gap").forEach(i => { i.value = "zzz sbagliato"; });
      const radio = root.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      const box = root.querySelector('input[type="checkbox"]');
      if (box) box.checked = true;
      root.querySelectorAll(".js-bank .tok").forEach(t => t.click());
      btn.click();
      if (!btn.disabled && btn.isConnected) btn.click();   // "almost" asks for a second try
    }
    await new Promise(r => setTimeout(r, 300));
  });
}

const PROSTA = "a1-u07-l1";

test("the exercises come one at a time, with Next", async ({ page }) => {
  await lezione(page, PROSTA);
  const widoczne = page.locator(".exq:visible");
  await expect(widoczne).toHaveCount(1);
  const pierwsze = await widoczne.getAttribute("data-idx");
  await page.locator(".js-ex-next").click();
  await expect(page.locator(".exq:visible")).toHaveCount(1);
  expect(await page.locator(".exq:visible").getAttribute("data-idx")).not.toBe(pierwsze);
  await expect(page.locator(".js-ex-pos")).toContainText("2");
});

test("numbered chips show what is still open and lead to it", async ({ page }) => {
  await lezione(page, PROSTA);
  const ile = await page.locator(".exq").count();
  const chipy = page.locator(".ex-chip");
  await expect(chipy).toHaveCount(ile);
  await chipy.nth(2).click();
  await expect(chipy.nth(2)).toHaveAttribute("aria-current", "step");
  expect(await page.locator(".exq:visible").getAttribute("data-idx")).toBe("2");
  await expect(page.locator(".js-ex-open")).toContainText(String(ile));
});

test("the sections of a lesson can be jumped to", async ({ page }) => {
  await lezione(page, PROSTA);
  const kroki = page.locator(".lesson-steps [data-step]");
  expect(await kroki.count()).toBeGreaterThanOrEqual(3);
  await page.locator('.lesson-steps [data-step="ex"]').click();
  await expect(page.locator("#step-ex")).toBeInViewport();
});

/** An A1 lesson whose exercises all answer through a field or a choice. */
async function lekcjaZPolami(page) {
  await page.goto("/index.html#/percorso");
  await page.waitForFunction(() => window.Core && window.Core.getLesson("a1-u02-l1"));
  return page.evaluate(() => {
    const PROSTE = ["mcq", "fill", "trans", "listen", "speak", "conj", "cloze", "order", "multi"];
    for (const u of window.Core.registry.byCode.A1.units) {
      for (const l of u.lessons) {
        const L = window.Core.getLesson(l.id);
        if (L && L.lesson.exercises.every(e => PROSTE.indexOf(e.t) >= 0)) return l.id;
      }
    }
    return null;
  });
}

test("the end lists what went wrong and puts the lesson's words in the reviews", async ({ page }) => {
  await bezMowy(page);
  const id = await lekcjaZPolami(page);
  expect(id, "an A1 lesson answerable through fields").toBeTruthy();
  await lezione(page, id);
  await odpowiedzNaWszystko(page);
  await expect(page.locator(".summary")).toBeVisible();

  const zle = await page.locator(".ex-chip.is-ko").count();
  expect(zle, "wrong text in the fields makes mistakes").toBeGreaterThan(0);
  await expect(page.locator(".lesson-recap [data-go]")).toHaveCount(zle);

  const brak = await page.evaluate(id => {
    const L = window.Core.getLesson(id).lesson;
    return L.vocab.filter(v => !window.Core.state.srs[window.Core.cardKey(v.it)]).map(v => v.it);
  }, id);
  expect(brak, "words missing from the reviews").toEqual([]);
  await expect(page.locator(".lesson-vocab-in")).toBeVisible();

  await page.locator(".lesson-recap [data-go]").first().click();
  await expect(page.locator(".exq:visible")).toHaveCount(1);
});

/* On a phone the grammar table scrolls sideways; a scrolling region that
   the keyboard cannot reach hides half the table from it (axe:
   scrollable-region-focusable). */
test("the grammar table's scrolling box can be reached from the keyboard", async ({ page }) => {
  await lezione(page, "a1-u01-l3");
  const box = page.locator(".step--gram .table-wrap").first();
  await expect(box).toHaveAttribute("tabindex", "0");
  await expect(box).toHaveAttribute("role", "region");
  await expect(box).toHaveAttribute("aria-label", /.+/);
});
