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

describe("rozpoznawanie mowy: bramka zgody", () => {
  /* To JEDYNE miejsce w kursie, z którego coś opuszcza przeglądarkę ucznia:
     przeglądarki, które dają SpeechRecognition, wysyłają nagranie na serwer
     dostawcy. Bramka stoi w Audio2.listen, a nie w trzech widokach, które je
     wołają, bo obrona rozłożona po miejscach wywołania działa do pierwszego
     nowego miejsca wywołania. */
  function zeZgoda(box, udzielona) {
    const zapytania = [];
    box.sandbox.Consent = {
      udzielona() { return udzielona; },
      zZgoda(tak, nie) { zapytania.push({ tak, nie }); }
    };
    return zapytania;
  }

  test("bez zgody mikrofon nie rusza, tylko pyta", () => {
    const box = silnik();
    const zapytania = zeZgoda(box, false);
    box.sandbox.Audio2.listen({});

    assert.equal(zapytania.length, 1, "pytanie zadane");
    assert.equal(box.audio.rozpoznania.length, 0, "i ani jednego bajtu głosu przed odpowiedzią");
  });

  test("odmowa kończy się tak samo jak brak obsługi, nie pustym ekranem", () => {
    /* Widoki umieją już zamienić ćwiczenie na pisane, gdy rozpoznawania nie
       ma: odmowa wchodzi w tę samą ścieżkę zamiast dokładać nową. */
    const box = silnik();
    const zapytania = zeZgoda(box, false);
    const bledy = [];
    box.sandbox.Audio2.listen({ onerror: (k) => bledy.push(k) });

    zapytania[0].nie();
    assert.deepEqual(bledy, ["no-consent"]);
    assert.equal(box.audio.rozpoznania.length, 0);
  });

  test("po udzieleniu zgody nasłuch rusza sam, bez drugiego kliknięcia", () => {
    const box = silnik();
    const zapytania = zeZgoda(box, false);
    box.sandbox.Audio2.listen({});

    box.sandbox.Consent.udzielona = () => true;
    zapytania[0].tak();

    assert.equal(box.audio.rozpoznania.length, 1);
    assert.equal(box.audio.rozpoznania[0].starty, 1);
  });

  test("ze zgodą już udzieloną nie ma o co pytać drugi raz", () => {
    const box = silnik();
    const zapytania = zeZgoda(box, true);
    box.sandbox.Audio2.listen({});

    assert.equal(zapytania.length, 0);
    assert.equal(box.audio.rozpoznania[0].lang, "it-IT", "słuchamy po włosku, nie w języku przeglądarki");
  });
});

describe("rozpoznawanie mowy: przebieg", () => {
  function nasluch(box, handlers) {
    box.sandbox.Consent = { udzielona: () => true, zZgoda() {} };
    const uchwyt = box.sandbox.Audio2.listen(handlers || {});
    return { rec: box.audio.rozpoznania[box.audio.rozpoznania.length - 1], uchwyt };
  }

  /** Wynik rozpoznawania w kształcie, w jakim oddaje go przeglądarka. */
  function wynik(warianty, koncowy) {
    const r = warianty.map((t) => ({ transcript: t }));
    r.isFinal = koncowy;
    r.length = warianty.length;
    return { resultIndex: 0, results: [r] };
  }

  test("brak obsługi w przeglądarce zgłasza się od razu, a nie ciszą", () => {
    const box = silnik({ brakRozpoznawania: true });
    const bledy = [];
    const uchwyt = box.sandbox.Audio2.listen({ onerror: (k) => bledy.push(k) });

    assert.deepEqual(bledy, ["unsupported"]);
    assert.equal(typeof uchwyt.abort, "function", "widok woła abort bez sprawdzania, czy jest co przerywać");
  });

  test("tekst w trakcie mówienia idzie do widoku, zanim padnie ostatnie słowo", () => {
    const box = silnik();
    const czesciowe = [];
    const { rec } = nasluch(box, { oninterim: (x) => czesciowe.push(x) });

    rec.onresult(wynik(["buon"], false));
    assert.deepEqual(czesciowe, ["buon"]);
  });

  test("na koniec wracają: tekst i wszystkie warianty rozpoznania", () => {
    /* Ocena wymowy liczy się po NAJLEPSZYM wariancie: gubienie ich zaniżałoby
       wynik za coś, czego uczeń nie powiedział źle. */
    const box = silnik();
    let koniec = null;
    const { rec } = nasluch(box, { onend: (t, alts) => { koniec = { t, alts }; } });

    rec.onresult(wynik(["buongiorno a tutti", "bon giorno a tutti"], true));
    rec.onend();

    assert.equal(koniec.t, "buongiorno a tutti");
    assert.deepEqual(Array.from(koniec.alts), ["buongiorno a tutti", "bon giorno a tutti"]);
  });

  test("odmowa mikrofonu wraca kodem, po którym widok pozna, co powiedzieć", () => {
    const box = silnik();
    const bledy = [];
    const { rec } = nasluch(box, { onerror: (k) => bledy.push(k) });

    rec.onerror({ error: "not-allowed" });
    assert.deepEqual(bledy, ["not-allowed"]);
  });

  test("przerwanie z widoku zatrzymuje nasłuch", () => {
    const box = silnik();
    const { rec, uchwyt } = nasluch(box);

    uchwyt.abort();
    assert.equal(rec.przerwania, 1);
  });

  test("drugi nasłuch przerywa pierwszy zamiast słuchać dwoma naraz", () => {
    const box = silnik();
    const pierwszy = nasluch(box).rec;
    nasluch(box);

    assert.equal(pierwszy.przerwania, 1);
    assert.equal(box.audio.rozpoznania.length, 2);
  });

  test("nieudany start zgłasza się jako błąd, a nie jako cisza", () => {
    const box = silnik({ startRzuca: true });
    const bledy = [];
    nasluch(box, { onerror: (k) => bledy.push(k) });

    assert.deepEqual(bledy, ["start-failed"]);
  });
});

describe("czy zdanie ma nagranie: pytanie z widoku", () => {
  test("Audio2.hasNatural odpowiada tak samo jak indeks", () => {
    /* Widoki pytają przez Audio2, nie przez Recordings: to jedno przekierowanie
       i właśnie dlatego łatwo je zerwać, nie zauważając niczego. */
    const box = silnik();
    assert.equal(box.sandbox.Audio2.hasNatural(Z_KURSU), true);
    assert.equal(box.sandbox.Audio2.hasNatural(SPOZA_KURSU), false);
    assert.equal(box.sandbox.Audio2.naturalCount, box.sandbox.Recordings.count);
  });
});

describe("przeglądarka bez syntezatora", () => {
  test("zdanie spoza kursu domyka zwrotkę zamiast zawiesić ćwiczenie", () => {
    /* Bez Web Speech API (część przeglądarek mobilnych, Firefox z wyłączoną
       syntezą) nie ma czym powiedzieć zdania spoza kursu. Widok czeka na
       onend, żeby przejść dalej: brak wywołania zatrzymałby lekcję. */
    const box = silnik({ brakSyntezy: true });
    let domkniete = 0;
    const wynik = box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });

    assert.equal(wynik, false);
    assert.equal(domkniete, 1);
    assert.equal(box.sandbox.Audio2.ttsSupported, false, "ustawienia mają to pokazać wprost");
  });

  test("zdanie z kursu nadal leci z nagrania: nagrania nie zależą od syntezatora", () => {
    const box = silnik({ brakSyntezy: true });
    box.sandbox.Audio2.speak(Z_KURSU);
    assert.equal(box.audio.odtwarzacze.length, 1);
  });
});

describe("stare i ułomne przeglądarki", () => {
  test("wyjątek z syntezatora nie zatrzymuje ćwiczenia", () => {
    /* Część WebView na Androidzie rzuca z speak() zamiast milczeć. Widok
       czeka na onend: bez domknięcia zwrotki lekcja stoi w miejscu. */
    const box = silnik({ mowaRzuca: true });
    let domkniete = 0;
    const wynik = box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });

    assert.equal(wynik, false);
    assert.equal(domkniete, 1);
  });

  test("lista głosów dociąga się także bez addEventListener", () => {
    /* Przeglądarki sprzed 2018 mają tylko `onvoiceschanged`. Bez tej gałęzi
       getVoices() na starcie oddaje pustą listę i kurs milczy do końca sesji. */
    const box = silnik({ starySyntezator: true, voices: [] });
    box.audio.voices.push(glos("Isabella", "it-IT"));
    box.sandbox.speechSynthesis.onvoiceschanged();

    assert.deepEqual(box.sandbox.Audio2.italianVoices().map((v) => v.name), ["Isabella"]);
  });

  test("play() bez obietnicy zgłasza start od razu, zamiast czekać na then()", () => {
    const box = silnik({ zachowaniePlay: "bez-obietnicy" });
    let ruszylo = 0;
    box.sandbox.Audio2.speak(Z_KURSU, { onstart: () => ruszylo++ });

    assert.equal(ruszylo, 1, "podświetlenie zdania w dialogu wisi na onstart");
  });
});

describe("koniec odtwarzania", () => {
  test("skończone nagranie domyka zwrotkę widoku", () => {
    /* Para dodatnia do testu o spóźnionym końcu: bez niej tamten
       przechodziłby także wtedy, gdyby onend nie wołał się NIGDY. */
    const box = silnik();
    let domkniete = 0;
    box.sandbox.Audio2.speak(Z_KURSU, { onend: () => domkniete++ });

    box.audio.odtwarzacze[0].onended();
    assert.equal(domkniete, 1, "lekcja przechodzi do następnego kroku po zdaniu");
  });

  test("skończona wypowiedź syntezatora też domyka zwrotkę", () => {
    const box = silnik();
    let domkniete = 0;
    box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });

    box.audio.wypowiedzi[0].onend();
    assert.equal(domkniete, 1);
  });

  test("wypowiedź przerwana zmianą trasy nie woła zwrotki cudzego ekranu", () => {
    const box = silnik();
    let domkniete = 0;
    box.sandbox.Audio2.speak(SPOZA_KURSU, { onend: () => domkniete++ });
    const wypowiedz = box.audio.wypowiedzi[0];

    box.sandbox.Audio2.stop();
    wypowiedz.onend();
    assert.equal(domkniete, 0);
  });
});
