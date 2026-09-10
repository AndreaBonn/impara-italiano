/* ============================================================
   Recording file names (assets/js/recordings.js).

   The name of a recording file is an FNV-1a 64-bit hash of the sentence,
   computed TWICE, in two languages: `hash()` here and `audio_hash()` in
   scripts/build_audio.py. A drift between them brings nothing down — every
   recording simply becomes unreachable, the course quietly falls back to
   system synthesis and sounds like espeak, and the console shows not a
   single error. This is exactly the kind of failure a code review does not
   catch.

   That is why the main test does not check the hash against a second
   implementation written here (that would only confirm itself) but against
   the FILES ON DISK that Python produced: for every sentence in
   scripts/audio-strings.json there must be an audio/<xx>/<hash>.mp3.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { loadEngine, AUDIO, ROOT } from "./_harness.mjs";

/* The index alone, without audio.js: file names do not depend on whether
   the browser has a synthesiser, a microphone or anything else. */
const PLIKI = AUDIO.slice(0, 2);
const R = loadEngine({ files: PLIKI }).sandbox.Recordings;

/** The list of sentences to record, as scripts/extract_strings.mjs sees it. */
const NAPISY = JSON.parse(readFileSync(join(ROOT, "scripts", "audio-strings.json"), "utf8"));
const WSZYSTKIE = NAPISY.primary.concat(NAPISY.other);

/** The recording file path, the same one Recordings.url() builds. */
function plik(skrot) {
  return join(ROOT, "audio", skrot.slice(0, 2), skrot + ".mp3");
}

describe("the hash of a sentence", () => {
  test("it always has sixteen hexadecimal characters", () => {
    ["Ciao", "a", "Buongiorno a tutti, come state oggi?"].forEach(s => {
      assert.match(R.hash(s), /^[0-9a-f]{16}$/, `wrong hash shape for "${s}"`);
    });
  });

  test("it is deterministic", () => {
    assert.equal(R.hash("Buongiorno"), R.hash("Buongiorno"));
  });

  test("different sentences get different hashes, even one letter apart", () => {
    assert.notEqual(R.hash("nonno"), R.hash("nono"));
    assert.notEqual(R.hash("pesca"), R.hash("pèsca"));
  });

  test("letter case and accent change the file: these are different utterances", () => {
    assert.notEqual(R.hash("Ciao"), R.hash("ciao"));
    assert.notEqual(R.hash("e"), R.hash("è"));
  });
});

describe("the file address", () => {
  /* A directory named after the first two characters of the hash: 256
     directories instead of one with three and a half thousand files in it. */
  test("it goes into a directory named after the first two characters of the hash", () => {
    assert.equal(R.url("abcdef0123456789"), "audio/ab/abcdef0123456789.mp3");
  });

  test("the address of a course sentence points at a file that exists", () => {
    const skrot = R.hash(R.norm(WSZYSTKIE[0]));
    assert.equal(R.url(skrot), "audio/" + skrot.slice(0, 2) + "/" + skrot + ".mp3");
    assert.ok(existsSync(join(ROOT, R.url(skrot))), "the address from Recordings.url() does not hit a file on disk");
  });
});

describe("agreement with the Python that recorded the files", () => {
  /* One test for the whole set, not 3493 tests: what matters is whether the
     two hash implementations agree, and that is a single question. */
  test("every sentence to be recorded points at an existing mp3 file", () => {
    const brakuje = [];
    for (const s of WSZYSTKIE) {
      const skrot = R.hash(s);
      if (!existsSync(plik(skrot))) brakuje.push(`${skrot}  ${s.slice(0, 60)}`);
      if (brakuje.length >= 5) break;
    }
    assert.deepEqual(brakuje, [],
      "the JS hash does not hit the file Python made - see hash() and audio_hash()");
  });

  test("the in-browser index knows the same sentences as the files on disk", () => {
    const nieznane = [];
    for (const s of WSZYSTKIE) {
      if (!R.has(s)) nieznane.push(s.slice(0, 60));
      if (nieznane.length >= 5) break;
    }
    assert.deepEqual(nieznane, [],
      "data/audio-index.js has drifted from the audio/ directory - rebuild the index");
  });

  test("the number of recordings reported in settings matches the list to record", () => {
    assert.equal(R.count, WSZYSTKIE.length);
    assert.equal(R.available, true);
  });
});

describe("normalisation before hashing", () => {
  /* The same as in extract_strings.mjs: whitespace collapsing and trim. A
     drift means a sentence from a lesson gets a different hash than the file
     recorded for it. */
  test("extra spaces and line breaks do not change the recording", () => {
    const zdanie = WSZYSTKIE[0];
    assert.equal(R.has("  " + zdanie + "  "), true, "edges trimmed");
    assert.equal(R.has(zdanie.replace(/ /, "   ")), true, "multiple spaces collapsed");
    assert.equal(R.has("\n" + zdanie), true, "a line break is whitespace");
  });

  test("norm() collapses and trims, and turns nothing into an empty string", () => {
    assert.equal(R.norm("  Ciao   a\ntutti "), "Ciao a tutti");
    assert.equal(R.norm(null), "");
    assert.equal(R.norm(undefined), "");
  });

  test("a sentence from outside the course has no recording: the index does not guess", () => {
    assert.equal(R.has("questa frase non esiste in nessuna lezione del corso"), false);
  });

  test("empty input does not pretend to have a recording", () => {
    assert.equal(R.has(""), false);
    assert.equal(R.has("   "), false);
    assert.equal(R.has(null), false);
  });
});

describe("binary search over the index", () => {
  /* Records have a fixed length, so the search moves in strides rather than
     using indexOf: `indexOf` would hit a hash starting in the middle of
     another one. */
  test("a hash not on a record boundary is not a hit", () => {
    const pierwszy = R.hash(R.norm(WSZYSTKIE[0]));
    assert.equal(R.inIndex(pierwszy), true, "the hash of an existing sentence");
    assert.equal(R.inIndex(pierwszy.slice(1) + "0"), false, "the same string shifted by one character");
  });

  test("an empty hash is not a hit", () => {
    assert.equal(R.inIndex(""), false);
    assert.equal(R.inIndex(null), false);
  });
});
