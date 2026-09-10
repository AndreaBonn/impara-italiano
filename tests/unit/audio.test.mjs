/* ============================================================
   Wybór źródła głosu i ocena wymowy (assets/js/audio.js).

   Nazwy plików nagrań sprawdza recordings.test.mjs. Tutaj jest to, co
   audio.js robi PONAD indeksem: kaskada nagranie → synteza → cisza.

   Każda gałąź tej kaskady jest decyzją podjętą świadomie i opisaną w
   komentarzu przy kodzie, a żadna z nich nie wywraca kursu, kiedy się
   zepsuje: zdanie po prostu leci nie tym głosem albo nie leci wcale.
   Ucho to wychwytuje, testy dotąd nie — bo cała kaskada wisiała na
   trzech obiektach przeglądarki, których w node nie ma. Od atrap w
   _harness.mjs (`speechSynthesis`, `SpeechSynthesisUtterance`, `Audio`)
   da się ją przejść całą.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loadEngine, glos, CORE, AUDIO, ROOT } from "./_harness.mjs";

const NAPISY = JSON.parse(readFileSync(join(ROOT, "scripts", "audio-strings.json"), "utf8"));
const Z_KURSU = NAPISY.primary[0];
const SPOZA_KURSU = "questa frase non esiste in nessuna lezione del corso";

/** Silnik z dźwiękiem. `opts` idzie prosto do atrap przeglądarki. */
function silnik(opts) {
  const box = loadEngine(Object.assign({
    files: [...CORE, ...AUDIO],
    voices: [glos("Isabella", "it-IT")]
  }, opts || {}));
  box.Core.load();
  return box;
}

/** Odczekanie na mikrozadania: `play()` oddaje obietnicę, nie wynik. */
function mikrozadania() {
  return new Promise((r) => setImmediate(r));
}

describe("wybór źródła głosu", () => {
  test("zdanie z kursu leci z nagrania, nie z syntezatora", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(Z_KURSU);

    assert.equal(box.audio.odtwarzacze.length, 1, "nie sięgnięto po odtwarzacz nagrań");
    assert.match(box.audio.odtwarzacze[0].src, /^audio\/[0-9a-f]{2}\/[0-9a-f]{16}\.mp3$/);
    assert.equal(box.audio.wypowiedzi.length, 0, "syntezator systemowy nie ma tu nic do roboty");
  });

  test("zdanie spoza kursu schodzi na syntezę systemową", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(SPOZA_KURSU);

    assert.equal(box.audio.odtwarzacze.length, 0, "nie ma dla czego otwierać odtwarzacza");
    assert.equal(box.audio.wypowiedzi.length, 1);
    assert.equal(box.audio.wypowiedzi[0].text, SPOZA_KURSU);
  });

  test("ustawienie „system” pomija nagrania także dla zdania z kursu", () => {
    const box = silnik();
    box.Core.state.settings.voiceSource = "system";
    box.sandbox.Audio2.speak(Z_KURSU);

    assert.equal(box.audio.odtwarzacze.length, 0);
    assert.equal(box.audio.wypowiedzi.length, 1, "uczeń wybrał syntezator i ma go dostać");
  });

  test("forceSystem obchodzi nagrania bez ruszania ustawień ucznia", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(Z_KURSU, { forceSystem: true });

    assert.equal(box.audio.wypowiedzi.length, 1);
    assert.equal(box.Core.state.settings.voiceSource, "natural", "ustawienie ucznia zostaje nietknięte");
  });

  test("pusty tekst nie budzi ani nagrania, ani syntezatora, ale domyka zwrotkę", () => {
    const box = silnik();
    let domkniete = 0;
    const wynik = box.sandbox.Audio2.speak("   ", { onend: () => domkniete++ });

    assert.equal(wynik, false);
    assert.equal(domkniete, 1, "widok czeka na onend, żeby przejść dalej");
    assert.equal(box.audio.odtwarzacze.length, 0);
    assert.equal(box.audio.wypowiedzi.length, 0);
  });
});

describe("tempo odtwarzania", () => {
  /* W trybie nagrań tempo to playbackRate, nie rate wypowiedzi: Chrome
     zachowuje przy nim wysokość dźwięku, więc wolniej nadal brzmi po ludzku. */
  test("tempo z ustawień trafia w odtwarzacz", () => {
    const box = silnik();
    box.Core.state.settings.rate = 0.75;
    box.sandbox.Audio2.speak(Z_KURSU);

    assert.equal(box.audio.odtwarzacze[0].playbackRate, 0.75);
  });

  test("tempo spoza rozsądnego zakresu jest przycinane, nie przyjmowane", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(Z_KURSU, { rate: 9 });
    assert.equal(box.audio.odtwarzacze[0].playbackRate, 2, "górna granica");

    box.sandbox.Audio2.speak(Z_KURSU, { rate: 0.05 });
    assert.equal(box.audio.odtwarzacze[0].playbackRate, 0.5, "dolna granica");
  });
});

describe("kiedy nagranie nie zagra", () => {
  test("blokada autoodtwarzania zostawia ciszę, nie podmienia lektora na syntezator", async () => {
    /* Przeglądarka odmawia odtworzenia bez wcześniejszego gestu użytkownika.
       Zejście stąd na syntezę systemową podmieniłoby głos kursu na espeak
       w sytuacji, w której z nagraniem nie jest nic nie tak. */
    const box = silnik({ zachowaniePlay: "not-allowed" });
    let domkniete = 0;
    box.sandbox.Audio2.speak(Z_KURSU, { onend: () => domkniete++ });
    await mikrozadania();

    assert.equal(box.audio.wypowiedzi.length, 0, "cisza, nie syntezator");
    assert.equal(domkniete, 1, "widok i tak musi ruszyć dalej");
    assert.deepEqual(box.toasts, [], "to nie jest awaria, więc nie ma o czym mówić uczniowi");
  });

  test("pliku nie da się wczytać: schodzimy na syntezę i mówimy o tym raz", async () => {
    const box = silnik({ zachowaniePlay: "blad" });
    box.sandbox.Audio2.speak(Z_KURSU);
    await mikrozadania();

    assert.equal(box.audio.wypowiedzi.length, 1, "zdanie ma zostać wypowiedziane mimo braku pliku");
    assert.deepEqual(box.toasts, ["audio.recordingFailed"]);

    box.sandbox.Audio2.speak(NAPISY.primary[1]);
    await mikrozadania();
    assert.deepEqual(box.toasts, ["audio.recordingFailed"],
      "ostrzeżenie raz na sesję: przy liście słówek poleciałoby przy każdym haśle");
  });

  test("awaria zgłoszona dwa razy odtwarza zdanie tylko raz", async () => {
    /* Brakujący plik zgłasza się i przez onerror, i przez odrzuconą
       obietnicę z play(). Bez flagi zdanie poleciałoby podwójnie. */
    const box = silnik({ zachowaniePlay: "blad" });
    box.sandbox.Audio2.speak(Z_KURSU);
    box.audio.odtwarzacze[0].onerror();
    await mikrozadania();

    assert.equal(box.audio.wypowiedzi.length, 1);
  });
});

describe("przerwanie", () => {
  test("stop() ucisza syntezator i zatrzymuje odtwarzacz", () => {
    const box = silnik();
    box.sandbox.Audio2.speak(Z_KURSU);
    const przed = box.audio.anulowania;
    box.sandbox.Audio2.stop();

    assert.ok(box.audio.anulowania > przed, "synteza ma zostać anulowana");
    assert.ok(box.audio.odtwarzacze[0].pauzy > 0, "odtwarzacz ma stanąć");
  });

  test("spóźniony koniec przerwanego zdania nie woła zwrotki widoku", () => {
    /* Router woła stop() przy każdym wyjściu z trasy. Zdanie, które
       skończy się po tym, należy do ekranu, którego już nie ma. */
    const box = silnik();
    let domkniete = 0;
    box.sandbox.Audio2.speak(Z_KURSU, { onend: () => domkniete++ });
    const gracz = box.audio.odtwarzacze[0];

    box.sandbox.Audio2.stop();
    gracz.onended();

    assert.equal(domkniete, 0, "onend cudzego ekranu przewinąłby lekcję o jeden krok");
  });
});

describe("głos systemowy", () => {
  test("bez włoskiego głosu jest cisza i jedno ostrzeżenie, nie czytanie po angielsku", () => {
    /* Bez głosu it-* przeglądarka nie honoruje u.lang i czyta włoskie
       zdanie akcentem angielskim: dla kursu wymowy gorsze niż cisza. */
    const box = silnik({ voices: [glos("Daniel", "en-GB")] });
    let domkniete = 0;
    const wynik = box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });

    assert.equal(wynik, false);
    assert.equal(box.audio.wypowiedzi.length, 0);
    assert.equal(domkniete, 1);
    assert.deepEqual(box.toasts, ["audio.noItalianVoice"]);

    box.sandbox.Audio2.speak(SPOZA_KURSU);
    assert.deepEqual(box.toasts, ["audio.noItalianVoice"], "raz na sesję");
  });

  test("z kilku głosów włoskich wygrywa neuronowy, nie pierwszy z listy", () => {
    const box = silnik({
      voices: [glos("espeak-ng italiano", "it-IT"), glos("Google italiano", "it-IT")]
    });
    box.sandbox.Audio2.speak(SPOZA_KURSU);

    assert.equal(box.audio.wypowiedzi[0].voice.name, "Google italiano",
      "espeak brzmi mechanicznie i ma ustąpić, choć stoi wyżej na liście");
  });

  test("italianVoices() odsiewa głosy innych języków", () => {
    const box = silnik({
      voices: [glos("Isabella", "it-IT"), glos("Daniel", "en-GB"), glos("Luca", "it_IT")]
    });
    const nazwy = box.sandbox.Audio2.italianVoices().map((v) => v.name);

    assert.deepEqual(nazwy, ["Isabella", "Luca"], "it_IT z podkreśleniem też jest włoski");
  });
});

describe("odtwarzanie listy zdań", () => {
  test("kolejne zdanie rusza dopiero po skończeniu poprzedniego", () => {
    const box = silnik();
    box.sandbox.Audio2.speakSequence([SPOZA_KURSU, "un'altra frase fuori dal corso"], {});

    assert.equal(box.audio.wypowiedzi.length, 1, "dialog nie ma zabrzmieć naraz");
    box.audio.wypowiedzi[0].onend();
    box.flush();
    assert.equal(box.audio.wypowiedzi.length, 2);
  });

  test("cancel() przerywa listę w miejscu, w którym stoi", () => {
    const box = silnik();
    const bieg = box.sandbox.Audio2.speakSequence([SPOZA_KURSU, "un'altra frase fuori dal corso"], {});

    bieg.cancel();
    box.audio.wypowiedzi[0].onend();
    box.flush();

    assert.equal(box.audio.wypowiedzi.length, 1, "po przerwaniu nic więcej nie wchodzi");
  });
});

describe("ocena wymowy", () => {
  const A = silnik().sandbox.Audio2;

  test("trafiona wypowiedź daje sto", () => {
    assert.equal(A.scoreSpeech("buongiorno a tutti", [], "Buongiorno a tutti"), 100);
  });

  test("liczy się najlepsza z alternatyw rozpoznawania, nie pierwsza", () => {
    const wynik = A.scoreSpeech("bon giorno", ["buongiorno a tutti"], "Buongiorno a tutti");
    assert.equal(wynik, 100, "rozpoznawanie mowy oddaje kilka wariantów i liczy się najlepszy");
  });

  test("wypowiedź obok tematu daje wynik niski, nie zero z definicji", () => {
    const wynik = A.scoreSpeech("completamente diverso", [], "Buongiorno a tutti");
    assert.ok(wynik < 40, `oczekiwane poniżej 40, było ${wynik}`);
    assert.ok(wynik >= 0);
  });

  test("brak rozpoznanej mowy daje zero, a nie wyjątek", () => {
    assert.equal(A.scoreSpeech("", [], "Buongiorno"), 0);
    assert.equal(A.scoreSpeech(null, null, "Buongiorno"), 0);
  });

  /* Próg zaliczenia w ćwiczeniu „speak" to 70. Ta granica jest w
     exercises-voice.js, ale sens ma tylko razem ze skalą stąd. */
  test("drobna pomyłka zostaje powyżej progu zaliczenia", () => {
    assert.ok(A.scoreSpeech("buongiorno a tutte", [], "Buongiorno a tutti") >= 70);
  });
});
