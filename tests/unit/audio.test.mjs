/* ============================================================
   Choosing the voice source and grading pronunciation (assets/js/audio.js).

   Recording file names are checked by recordings.test.mjs. Here is what
   audio.js does ON TOP of the index: the recording -> synthesis -> silence
   cascade.

   Every branch of that cascade is a deliberate decision described in a
   comment next to the code, and none of them brings the course down when it
   breaks: a sentence simply comes out in the wrong voice, or not at all. The
   ear catches that, the tests did not - because the whole cascade hung on
   three browser objects that do not exist in node. Since the stubs in
   _harness.mjs (`speechSynthesis`, `SpeechSynthesisUtterance`, `Audio`) it
   can be walked end to end.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loadEngine, glos, CORE, AUDIO, ROOT } from "./_harness.mjs";

const NAPISY = JSON.parse(readFileSync(join(ROOT, "scripts", "audio-strings.json"), "utf8"));
const Z_KURSU = NAPISY.primary[0];
const SPOZA_KURSU = "questa frase non esiste in nessuna lezione del corso";

/** The engine with audio. `opts` goes straight to the browser stubs. */
function silnik(opts) {
  const box = loadEngine(Object.assign({
    files: [...CORE, ...AUDIO],
    voices: [glos("Isabella", "it-IT")]
  }, opts || {}));
  box.Core.load();
  return box;
}

/** Waiting for microtasks: `play()` returns a promise, not a result. */
function mikrozadania() {
  return new Promise((r) => setImmediate(r));
}

describe("choosing the voice source", () => {
  test("a sentence from the course comes from a recording, not from the synthesiser", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(Z_KURSU);

    assert.equal(box.audio.odtwarzacze.length, 1, "the recording player was not reached for");
    assert.match(box.audio.odtwarzacze[0].src, /^audio\/[0-9a-f]{2}\/[0-9a-f]{16}\.mp3$/);
    assert.equal(box.audio.wypowiedzi.length, 0, "the system synthesiser has nothing to do here");
  });

  test("a sentence from outside the course falls back to system synthesis", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(SPOZA_KURSU);

    assert.equal(box.audio.odtwarzacze.length, 0, "there is nothing to open a player for");
    assert.equal(box.audio.wypowiedzi.length, 1);
    assert.equal(box.audio.wypowiedzi[0].text, SPOZA_KURSU);
  });

  test("the \"system\" setting skips recordings even for a course sentence", () => {
    const box = silnik();
    box.Core.state.settings.voiceSource = "system";
    box.sandbox.Audio2.speak(Z_KURSU);

    assert.equal(box.audio.odtwarzacze.length, 0);
    assert.equal(box.audio.wypowiedzi.length, 1, "the student chose the synthesiser and must get it");
  });

  test("forceSystem bypasses recordings without touching the student's settings", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(Z_KURSU, { forceSystem: true });

    assert.equal(box.audio.wypowiedzi.length, 1);
    assert.equal(box.Core.state.settings.voiceSource, "natural", "the student's setting stays untouched");
  });

  test("empty text wakes neither a recording nor the synthesiser, but still closes the callback", () => {
    const box = silnik();
    let domkniete = 0;
    const wynik = box.sandbox.Audio2.speak("   ", { onend: () => domkniete++ });

    assert.equal(wynik, false);
    assert.equal(domkniete, 1, "the view waits for onend to move on");
    assert.equal(box.audio.odtwarzacze.length, 0);
    assert.equal(box.audio.wypowiedzi.length, 0);
  });
});

describe("playback speed", () => {
  /* In recording mode the speed is playbackRate, not the utterance rate:
     Chrome preserves the pitch there, so slower still sounds human. */
  test("the speed from the settings reaches the player", () => {
    const box = silnik();
    box.Core.state.settings.rate = 0.75;
    box.sandbox.Audio2.speak(Z_KURSU);

    assert.equal(box.audio.odtwarzacze[0].playbackRate, 0.75);
  });

  test("a speed outside the sensible range is clamped, not accepted", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(Z_KURSU, { rate: 9 });
    assert.equal(box.audio.odtwarzacze[0].playbackRate, 2, "the upper bound");

    box.sandbox.Audio2.speak(Z_KURSU, { rate: 0.05 });
    assert.equal(box.audio.odtwarzacze[0].playbackRate, 0.5, "the lower bound");
  });
});

describe("when a recording will not play", () => {
  test("an autoplay block leaves silence, it does not swap the narrator for the synthesiser", async () => {
    /* The browser refuses to play without a prior user gesture. Falling back
       to system synthesis here would swap the course voice for espeak in a
       situation where there is nothing wrong with the recording. */
    const box = silnik({ zachowaniePlay: "not-allowed" });
    let domkniete = 0;
    box.sandbox.Audio2.speak(Z_KURSU, { onend: () => domkniete++ });
    await mikrozadania();

    assert.equal(box.audio.wypowiedzi.length, 0, "silence, not the synthesiser");
    assert.equal(domkniete, 1, "the view has to move on regardless");
    assert.deepEqual(box.toasts, [], "this is not a failure, so there is nothing to tell the student");
  });

  test("the file cannot be loaded: we fall back to synthesis and say so once", async () => {
    const box = silnik({ zachowaniePlay: "blad" });
    box.sandbox.Audio2.speak(Z_KURSU);
    await mikrozadania();

    assert.equal(box.audio.wypowiedzi.length, 1, "the sentence must still be spoken despite the missing file");
    assert.deepEqual(box.toasts, ["audio.recordingFailed"]);

    box.sandbox.Audio2.speak(NAPISY.primary[1]);
    await mikrozadania();
    assert.deepEqual(box.toasts, ["audio.recordingFailed"],
      "one warning per session: on a vocabulary list it would fire on every entry");
  });

  test("a failure reported twice speaks the sentence only once", async () => {
    /* A missing file reports itself both through onerror and through the
       rejected promise from play(). Without a flag the sentence would go out
       twice. */
    const box = silnik({ zachowaniePlay: "blad" });
    box.sandbox.Audio2.speak(Z_KURSU);
    box.audio.odtwarzacze[0].onerror();
    await mikrozadania();

    assert.equal(box.audio.wypowiedzi.length, 1);
  });
});

describe("interruption", () => {
  test("stop() silences the synthesiser and stops the player", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(Z_KURSU);
    const przed = box.audio.anulowania;
    box.sandbox.Audio2.stop();

    assert.ok(box.audio.anulowania > przed, "the synthesis has to be cancelled");
    assert.ok(box.audio.odtwarzacze[0].pauzy > 0, "the player has to stop");
  });

  test("a late end of an interrupted sentence does not call the view's callback", () => {
    /* The router calls stop() on every route change. A sentence that finishes
       after that belongs to a screen that is gone. */
    const box = silnik();
    let domkniete = 0;
    box.sandbox.Audio2.speak(Z_KURSU, { onend: () => domkniete++ });
    const gracz = box.audio.odtwarzacze[0];

    box.sandbox.Audio2.stop();
    gracz.onended();

    assert.equal(domkniete, 0, "another screen's onend would advance the lesson by one step");
  });
});

describe("the system voice", () => {
  test("with no Italian voice there is silence and one warning, not reading in English", () => {
    /* With no it-* voice the browser ignores u.lang and reads the Italian
       sentence with an English accent: for a pronunciation course that is
       worse than silence. */
    const box = silnik({ voices: [glos("Daniel", "en-GB")] });
    let domkniete = 0;
    const wynik = box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });

    assert.equal(wynik, false);
    assert.equal(box.audio.wypowiedzi.length, 0);
    assert.equal(domkniete, 1);
    assert.deepEqual(box.toasts, ["audio.noItalianVoice"]);

    box.sandbox.Audio2.speak(SPOZA_KURSU);
    assert.deepEqual(box.toasts, ["audio.noItalianVoice"], "once per session");
  });

  test("among several Italian voices the neural one wins, not the first on the list", () => {
    const box = silnik({
      voices: [glos("espeak-ng italiano", "it-IT"), glos("Google italiano", "it-IT")]
    });
    box.sandbox.Audio2.speak(SPOZA_KURSU);

    assert.equal(box.audio.wypowiedzi[0].voice.name, "Google italiano",
      "espeak sounds mechanical and has to give way, though it stands higher on the list");
  });

  test("italianVoices() filters out voices of other languages", () => {
    const box = silnik({
      voices: [glos("Isabella", "it-IT"), glos("Daniel", "en-GB"), glos("Luca", "it_IT")]
    });
    const nazwy = box.sandbox.Audio2.italianVoices().map((v) => v.name);

    assert.deepEqual(nazwy, ["Isabella", "Luca"], "it_IT with an underscore is Italian too");
  });
});

describe("playing a list of sentences", () => {
  test("the next sentence starts only after the previous one has finished", () => {
    const box = silnik();
    box.sandbox.Audio2.speakSequence([SPOZA_KURSU, "un'altra frase fuori dal corso"], {});

    assert.equal(box.audio.wypowiedzi.length, 1, "a dialogue must not sound all at once");
    box.audio.wypowiedzi[0].onend();
    box.flush();
    assert.equal(box.audio.wypowiedzi.length, 2);
  });

  test("cancel() breaks the list off where it stands", () => {
    const box = silnik();
    const bieg = box.sandbox.Audio2.speakSequence([SPOZA_KURSU, "un'altra frase fuori dal corso"], {});

    bieg.cancel();
    box.audio.wypowiedzi[0].onend();
    box.flush();

    assert.equal(box.audio.wypowiedzi.length, 1, "after the break nothing more comes in");
  });
});

describe("grading pronunciation", () => {
  const A = silnik().sandbox.Audio2;

  test("a correct utterance scores a hundred", () => {
    assert.equal(A.scoreSpeech("buongiorno a tutti", [], "Buongiorno a tutti"), 100);
  });

  test("the best recognition alternative counts, not the first", () => {
    const wynik = A.scoreSpeech("bon giorno", ["buongiorno a tutti"], "Buongiorno a tutti");
    assert.equal(wynik, 100, "speech recognition returns several variants and the best one counts");
  });

  test("an off-topic utterance scores low, not zero by definition", () => {
    const wynik = A.scoreSpeech("completamente diverso", [], "Buongiorno a tutti");
    assert.ok(wynik < 40, `expected below 40, was ${wynik}`);
    assert.ok(wynik >= 0);
  });

  test("no recognised speech gives zero, not an exception", () => {
    assert.equal(A.scoreSpeech("", [], "Buongiorno"), 0);
    assert.equal(A.scoreSpeech(null, null, "Buongiorno"), 0);
  });

  /* The pass threshold in the "speak" exercise is 70. That boundary lives in
     exercises-voice.js, but only makes sense together with the scale here. */
  test("a small slip stays above the pass threshold", () => {
    assert.ok(A.scoreSpeech("buongiorno a tutte", [], "Buongiorno a tutti") >= 70);
  });
});

describe("speech recognition: the consent gate", () => {
  /* This is the ONLY place in the course from which anything leaves the
     student's browser: browsers that provide SpeechRecognition send the
     recording to the vendor's server. The gate sits in Audio2.listen rather
     than in the three views that call it, because a defence spread across
     call sites lasts until the first new call site. */
  function zeZgoda(box, udzielona) {
    const zapytania = [];
    box.sandbox.Consent = {
      udzielona() { return udzielona; },
      zZgoda(tak, nie) { zapytania.push({ tak, nie }); }
    };
    return zapytania;
  }

  test("without consent the microphone does not start, it asks", () => {
    const box = silnik();
    const zapytania = zeZgoda(box, false);
    box.sandbox.Audio2.listen({});

    assert.equal(zapytania.length, 1, "the question was asked");
    assert.equal(box.audio.rozpoznania.length, 0, "and not a single byte of voice before the answer");
  });

  test("a refusal ends the same way as no support, not in a blank screen", () => {
    /* The views already know how to turn the exercise into a written one when
       recognition is unavailable: a refusal enters that same path instead of
       adding another. */
    const box = silnik();
    const zapytania = zeZgoda(box, false);
    const bledy = [];
    box.sandbox.Audio2.listen({ onerror: (k) => bledy.push(k) });

    zapytania[0].nie();
    assert.deepEqual(bledy, ["no-consent"]);
    assert.equal(box.audio.rozpoznania.length, 0);
  });

  test("once consent is given listening starts by itself, with no second click", () => {
    const box = silnik();
    const zapytania = zeZgoda(box, false);
    box.sandbox.Audio2.listen({});

    box.sandbox.Consent.udzielona = () => true;
    zapytania[0].tak();

    assert.equal(box.audio.rozpoznania.length, 1);
    assert.equal(box.audio.rozpoznania[0].starty, 1);
  });

  test("with consent already given there is nothing to ask a second time", () => {
    const box = silnik();
    const zapytania = zeZgoda(box, true);
    box.sandbox.Audio2.listen({});

    assert.equal(zapytania.length, 0);
    assert.equal(box.audio.rozpoznania[0].lang, "it-IT", "we listen in Italian, not in the browser's language");
  });
});

describe("speech recognition: the run", () => {
  function nasluch(box, handlers) {
    box.sandbox.Consent = { udzielona: () => true, zZgoda() {} };
    const uchwyt = box.sandbox.Audio2.listen(handlers || {});
    return { rec: box.audio.rozpoznania[box.audio.rozpoznania.length - 1], uchwyt };
  }

  /** A recognition result in the shape the browser returns it. */
  function wynik(warianty, koncowy) {
    const r = warianty.map((t) => ({ transcript: t }));
    r.isFinal = koncowy;
    r.length = warianty.length;
    return { resultIndex: 0, results: [r] };
  }

  test("lack of browser support reports itself at once, not with silence", () => {
    const box = silnik({ brakRozpoznawania: true });
    const bledy = [];
    const uchwyt = box.sandbox.Audio2.listen({ onerror: (k) => bledy.push(k) });

    assert.deepEqual(bledy, ["unsupported"]);
    assert.equal(typeof uchwyt.abort, "function", "the view calls abort without checking whether there is anything to abort");
  });

  test("interim text reaches the view before the last word is spoken", () => {
    const box = silnik();
    const czesciowe = [];
    const { rec } = nasluch(box, { oninterim: (x) => czesciowe.push(x) });

    rec.onresult(wynik(["buon"], false));
    assert.deepEqual(czesciowe, ["buon"]);
  });

  test("at the end both the text and all recognition variants come back", () => {
    /* Pronunciation is graded on the BEST variant: losing them would lower the
       score for something the student did not say wrong. */
    const box = silnik();
    let koniec = null;
    const { rec } = nasluch(box, { onend: (t, alts) => { koniec = { t, alts }; } });

    rec.onresult(wynik(["buongiorno a tutti", "bon giorno a tutti"], true));
    rec.onend();

    assert.equal(koniec.t, "buongiorno a tutti");
    assert.deepEqual(Array.from(koniec.alts), ["buongiorno a tutti", "bon giorno a tutti"]);
  });

  test("a microphone refusal comes back as a code the view can act on", () => {
    const box = silnik();
    const bledy = [];
    const { rec } = nasluch(box, { onerror: (k) => bledy.push(k) });

    rec.onerror({ error: "not-allowed" });
    assert.deepEqual(bledy, ["not-allowed"]);
  });

  test("aborting from the view stops the listening", () => {
    const box = silnik();
    const { rec, uchwyt } = nasluch(box);

    uchwyt.abort();
    assert.equal(rec.przerwania, 1);
  });

  test("a second listen aborts the first instead of listening with two at once", () => {
    const box = silnik();
    const pierwszy = nasluch(box).rec;
    nasluch(box);

    assert.equal(pierwszy.przerwania, 1);
    assert.equal(box.audio.rozpoznania.length, 2);
  });

  test("a failed start reports itself as an error, not as silence", () => {
    const box = silnik({ startRzuca: true });
    const bledy = [];
    nasluch(box, { onerror: (k) => bledy.push(k) });

    assert.deepEqual(bledy, ["start-failed"]);
  });
});

describe("does a sentence have a recording: the question from the view", () => {
  test("Audio2.hasNatural answers the same as the index", () => {
    /* The views ask through Audio2, not through Recordings: it is a single
       forwarding call, and that is exactly why it is easy to break without
       noticing anything. */
    const box = silnik();
    assert.equal(box.sandbox.Audio2.hasNatural(Z_KURSU), true);
    assert.equal(box.sandbox.Audio2.hasNatural(SPOZA_KURSU), false);
    assert.equal(box.sandbox.Audio2.naturalCount, box.sandbox.Recordings.count);
  });
});

describe("a browser with no synthesiser", () => {
  test("a sentence from outside the course closes the callback instead of hanging the exercise", () => {
    /* With no Web Speech API (some mobile browsers, Firefox with synthesis
       disabled) there is nothing to speak an out-of-course sentence with. The
       view waits for onend to move on: not calling it would stall the
       lesson. */
    const box = silnik({ brakSyntezy: true });
    let domkniete = 0;
    const wynik = box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });

    assert.equal(wynik, false);
    assert.equal(domkniete, 1);
    assert.equal(box.sandbox.Audio2.ttsSupported, false, "the settings screen has to show this plainly");
  });

  test("a course sentence still comes from a recording: recordings do not depend on the synthesiser", () => {
    const box = silnik({ brakSyntezy: true });
    box.sandbox.Audio2.speak(Z_KURSU);
    assert.equal(box.audio.odtwarzacze.length, 1);
  });
});

describe("old and crippled browsers", () => {
  test("an exception from the synthesiser does not stop the exercise", () => {
    /* Some Android WebViews throw from speak() instead of staying silent. The
       view waits for onend: without closing the callback the lesson stands
       still. */
    const box = silnik({ mowaRzuca: true });
    let domkniete = 0;
    const wynik = box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });

    assert.equal(wynik, false);
    assert.equal(domkniete, 1);
  });

  test("the voice list arrives even without addEventListener", () => {
    /* Browsers from before 2018 only have `onvoiceschanged`. Without this
       branch getVoices() returns an empty list at startup and the course stays
       silent for the rest of the session. */
    const box = silnik({ starySyntezator: true, voices: [] });
    box.audio.voices.push(glos("Isabella", "it-IT"));
    box.sandbox.speechSynthesis.onvoiceschanged();

    assert.deepEqual(box.sandbox.Audio2.italianVoices().map((v) => v.name), ["Isabella"]);
  });

  test("play() with no promise reports the start at once instead of waiting for then()", () => {
    const box = silnik({ zachowaniePlay: "bez-obietnicy" });
    let ruszylo = 0;
    box.sandbox.Audio2.speak(Z_KURSU, { onstart: () => ruszylo++ });

    assert.equal(ruszylo, 1, "highlighting the sentence in a dialogue hangs on onstart");
  });
});

describe("the end of playback", () => {
  test("a finished recording closes the view's callback", () => {
    /* The positive counterpart to the late-end test: without it that one would
       also pass if onend were NEVER called. */
    const box = silnik();
    let domkniete = 0;
    box.sandbox.Audio2.speak(Z_KURSU, { onend: () => domkniete++ });

    box.audio.odtwarzacze[0].onended();
    assert.equal(domkniete, 1, "the lesson moves to the next step after the sentence");
  });

  test("a finished synthesiser utterance closes the callback too", () => {
    const box = silnik();
    let domkniete = 0;
    box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });

    box.audio.wypowiedzi[0].onend();
    assert.equal(domkniete, 1);
  });

  test("an utterance interrupted by a route change does not call another screen's callback", () => {
    const box = silnik();
    let domkniete = 0;
    box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });
    const wypowiedz = box.audio.wypowiedzi[0];

    box.sandbox.Audio2.stop();
    wypowiedz.onend();
    assert.equal(domkniete, 0);
  });
});
