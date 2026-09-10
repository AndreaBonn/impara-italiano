/* ============================================================
   build_og.mjs — the social preview image
   Usage:  node scripts/build_og.mjs

   Every asset in this repository comes from a script that can be run again:
   the recordings from build_audio.py, the frequency list from
   build_frequency.mjs. A hand-drawn PNG would be the one file nobody could
   reproduce, correct, or explain — and the one that would quietly keep an
   old domain or an old claim long after the course had moved on.

   So the card is HTML (scripts/og-template.html), painted with the course's
   own stylesheet, and this script photographs it. No new dependency: the
   Chromium that the DOM tests already need is the renderer.

   Two things make the output stable rather than merely correct:

   - we wait for `document.fonts.ready` before the shot. Without it the
     capture races the four woff2 files, and Chromium paints the fallback
     serif. The card still looks like a card, which is why this fails in
     the way that is hardest to notice.
   - the viewport is the frame. 1200x630 at scale 1, no full-page capture,
     no cropping afterwards: the size that comes out is the size the
     platforms ask for, and check_ogtags.mjs reads it back from the file to
     make sure it stayed that way.

   Run it again after changing the template, the palette, the fonts or the
   address in package.json. Run it after nothing at all and `git status`
   stays empty — that is the property that makes the image an output of the
   repository rather than an attachment to it.
   ============================================================ */
import { readFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { chromium } from "@playwright/test";
import { wymiaryPng } from "./png-size.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SZABLON = join(ROOT, "scripts", "og-template.html");
const WYJSCIE = join(ROOT, "assets", "og", "cover.png");

/* The frame every platform crops to. Changing it here is not enough: the
   same pair stands in check_ogtags.mjs, which reads the committed file. */
const SZEROKOSC = 1200;
const WYSOKOSC = 630;

const { homepage } = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
if (!homepage) {
  console.error("BŁĄD — package.json nie ma pola \"homepage\": nie ma czego wpisać na obrazek.");
  process.exit(1);
}

/* The bare address, without the protocol and without the trailing slash:
   what a person reads on a card, not what a browser parses. */
const adres = homepage.replace(/^https?:\/\//, "").replace(/\/$/, "");

const przegladarka = await chromium.launch();
try {
  const strona = await przegladarka.newPage({
    viewport: { width: SZEROKOSC, height: WYSOKOSC },
    deviceScaleFactor: 1
  });

  await strona.goto(pathToFileURL(SZABLON).href, { waitUntil: "load" });
  await strona.evaluate((a) => { document.getElementById("adres").textContent = a; }, adres);

  /* The fonts, not the network: the files are local, but loading them is
     still asynchronous and a screenshot does not wait for it by itself. */
  await strona.evaluate(() => document.fonts.ready);

  mkdirSync(dirname(WYJSCIE), { recursive: true });
  await strona.screenshot({ path: WYJSCIE, type: "png" });
} finally {
  await przegladarka.close();
}

/* What we report is what landed on the disk, read back out of the PNG
   header — not the numbers we asked for a moment ago. A generator that
   states its own intentions verifies nothing. */
const wymiary = wymiaryPng(WYJSCIE);
const kb = Math.round(readFileSync(WYJSCIE).length / 1024);

if (!wymiary) {
  console.error(`BŁĄD — ${WYJSCIE} nie jest plikiem PNG.`);
  process.exit(1);
}

console.log(
  `OK — assets/og/cover.png: ${wymiary.szerokosc}x${wymiary.wysokosc}, ${kb} KB, adres "${adres}".`
);
