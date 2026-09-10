/* ============================================================
   Zapowiedź nowej wersji (assets/js/pwa.js).

   Reguły sprawdza pwa-rules.test.mjs; tutaj chodzi o PODPIĘCIE ich do
   stanów, które przeglądarka wystawia w określonej kolejności. To jest
   miejsce, w którym ta funkcja psuje się po cichu: kod czytający
   `registration.waiting` w uchwycie `updatefound` wygląda poprawnie,
   przechodzi każdy test przygotowujący stan „na gotowo" i nie pokazuje
   komunikatu ANI RAZU po prawdziwym wydaniu — bo w chwili tego zdarzenia
   `waiting` jest jeszcze puste.

   Dlatego atrapa (`box.guska`) przestawia stany po jednym, w kolejności
   przeglądarki: znaleziono → zainstalowany → przejmuje.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, PWA } from "./_harness.mjs";

/** Rejestracja jest obietnicą: bez oddania sterowania nic się jeszcze nie stało. */
const mikro = () => Promise.resolve().then(() => {}).then(() => {});

/**
 * Kurs wczytany i zarejestrowany.
 * `kontroler` to stan strony W CHWILI WCZYTANIA: null = pierwsza wizyta.
 */
async function otwarty(opcje) {
  const box = loadEngine({ files: PWA, readyState: "complete", ...(opcje || {}) });
  await mikro();
  return box;
}

describe("rejestracja", () => {
  test("po http(s) worker jest rejestrowany", async () => {
    const box = await otwarty();
    assert.deepEqual(box.guska.log.rejestracje, ["sw.js"]);
  });

  /* Kurs ma się otwierać podwójnym kliknięciem z dysku. Rejestracja rzuca
     tam wyjątkiem, więc strażnik stoi na protokole, a nie w try/catch. */
  test("z file:// nie ruszamy workera w ogóle", async () => {
    const box = await otwarty({ protocol: "file:" });
    assert.deepEqual(box.guska.log.rejestracje, []);
  });

  test("przeglądarka bez service workera: cisza, nie wyjątek", async () => {
    const box = await otwarty({ brakGuski: true });
    assert.equal(box.sandbox.PWA.register(), false);
  });

  test("odmowa rejestracji nie znika po cichu", async () => {
    const box = await otwarty({ rejestracjaOdrzuca: true });
    await mikro();
    assert.match(box.warnings.join(" "), /Service worker niezarejestrowany/);
  });

  /* W gotowej stronie ten plik bywa wykonywany PO zdarzeniu „load", a wtedy
     uchwyt nie odpaliłby się nigdy: kurs działa, tryb offline nie. */
  test("strona jeszcze się wczytuje: rejestracja czeka na „load”", async () => {
    const box = loadEngine({ files: PWA });      // readyState: "loading"
    await mikro();
    assert.deepEqual(box.guska.log.rejestracje, [], "przed zdarzeniem nic");
    box.okno.odpal("load");
    await mikro();
    assert.deepEqual(box.guska.log.rejestracje, ["sw.js"]);
  });
});

describe("zapowiedź po wydaniu", () => {
  /* Sekwencja przeglądarki w całości. Gdyby zapowiedź czytała
     `registration.waiting` w uchwycie `updatefound`, ten test byłby
     czerwony: w tamtej chwili `waiting` jest puste. */
  test("nowa wersja znaleziona i zainstalowana: komunikat z przyciskiem", async () => {
    const box = await otwarty({ kontroler: { state: "activated" } });
    box.guska.znaleziono();
    assert.deepEqual(box.visible(), [], "w „installing” nie ma jeszcze czego ogłaszać");

    box.guska.zainstalowany();
    assert.equal(box.visible().length, 1);
    assert.match(box.visible()[0], /pwa\.updateReady/);
    assert.match(box.notices[0].className, /toast--stuck/, "komunikat zostaje, nie znika po 3 s");
  });

  test("pierwsza wizyta: ten sam przebieg, żadnego komunikatu", async () => {
    const box = await otwarty();                 // kontroler: null
    box.guska.znaleziono();
    box.guska.zainstalowany();
    assert.deepEqual(box.visible(), []);
  });

  /* Wersja odłożona „na później" nie wyśle już żadnego zdarzenia: stoi
     w kolejce od poprzedniej wizyty i widać ją wyłącznie w `waiting`. */
  test("wersja czekająca od poprzedniej wizyty wraca przy otwarciu", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, waiting: true });
    assert.equal(box.visible().length, 1);
  });
});

describe("aktualizuj", () => {
  async function zKomunikatem() {
    const box = await otwarty({ kontroler: { state: "activated" }, waiting: true });
    return { box, przyciski: box.notices[0].children };
  }

  /* Pole po polu, nie deepEqual: obiekt powstał w piaskownicy, więc ma jej
     Object.prototype i porównanie głębokie odrzuca go mimo tej samej treści. */
  test("prosi czekającego workera o przejęcie", async () => {
    const { box, przyciski } = await zKomunikatem();
    przyciski[0].fire("click");
    assert.equal(box.guska.log.wiadomosci.length, 1);
    assert.equal(box.guska.log.wiadomosci[0].typ, "przejmij");
  });

  /* Przeładowanie w uchwycie kliknięcia otworzyłoby jeszcze raz STARĄ
     wersję: worker w chwili kliknięcia dopiero dostaje prośbę. */
  test("nie przeładowuje przy kliknięciu, tylko gdy przejęcie nastąpi", async () => {
    const { box, przyciski } = await zKomunikatem();
    przyciski[0].fire("click");
    assert.equal(box.okno.przeladowania.ile, 0, "jeszcze nie");

    box.guska.przejmuje();
    assert.equal(box.okno.przeladowania.ile, 1);
  });

  /* Dwa wydania pod rząd, gdy komunikat wisi już na ekranie: Notice nie
     pokaże go drugi raz pod tym samym kluczem, a pierwszy worker jest już
     wtedy odrzucony przez przeglądarkę. Zapamiętana referencja zostawiłaby
     ucznia z przyciskiem, który nic nie robi i nic o tym nie mówi. */
  test("po drugim wydaniu przycisk prosi NOWEGO workera, nie tego z zapowiedzi", async () => {
    const { box, przyciski } = await zKomunikatem();
    const pierwszy = box.guska.rejestracja.waiting.nr;

    box.guska.znaleziono();
    const drugi = box.guska.zainstalowany().nr;
    assert.notEqual(drugi, pierwszy);
    assert.equal(box.visible().length, 1, "ten sam klucz nie mnoży komunikatu");

    przyciski[0].fire("click");
    assert.deepEqual(box.guska.log.odbiorcy, [drugi]);
  });

  test("krzyżyk zamyka bez wysyłania czegokolwiek", async () => {
    const { box, przyciski } = await zKomunikatem();
    przyciski[1].fire("click");
    assert.deepEqual(box.guska.log.wiadomosci, []);
    assert.deepEqual(box.visible(), []);
  });
});

describe("przejęcie kontroli", () => {
  /* Karta, w której nikt nic nie kliknął. Nowy worker obsługuje już jej
     żądania, więc dalsze wykonywanie starego kodu jest dokładnie tym
     rozjazdem, przed którym broni cała ta funkcja. */
  test("druga karta przeładowuje się sama", async () => {
    const box = await otwarty({ kontroler: { state: "activated" } });
    box.guska.przejmuje();
    assert.equal(box.okno.przeladowania.ile, 1);
  });

  test("pierwsza wizyta nie przeładowuje: to pierwsze przejęcie, nie zmiana wersji", async () => {
    const box = await otwarty();
    box.guska.przejmuje();
    assert.equal(box.okno.przeladowania.ile, 0);
  });

  test("dwa zdarzenia to nadal jedno przeładowanie, nie pętla", async () => {
    const box = await otwarty({ kontroler: { state: "activated" } });
    box.guska.przejmuje();
    box.guska.przejmuje();
    assert.equal(box.okno.przeladowania.ile, 1);
  });
});

describe("powrót na pierwszy plan", () => {
  /* Rejestracja sama jest sprawdzeniem, więc próg biegnie od niej: powrót
     zaraz po otwarciu strony nie ma po co pytać drugi raz. */
  test("po upływie progu pyta serwer o nową wersję", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, now: 1000 });
    box.wDokumencie("visibilitychange");
    assert.equal(box.guska.log.sprawdzenia, 0, "zaraz po rejestracji jeszcze nie");

    box.przesunZegar(box.sandbox.PwaRules.PRZERWA);
    box.wDokumencie("visibilitychange");
    assert.equal(box.guska.log.sprawdzenia, 1);
  });

  /* Przełączanie się między dwiema aplikacjami nie ma się zamieniać w serię
     żądań: to jest cały powód istnienia progu. */
  test("dwa przełączenia okna pod rząd to jedno żądanie, nie dwa", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, now: 1000 });
    box.przesunZegar(box.sandbox.PwaRules.PRZERWA);
    box.wDokumencie("visibilitychange");
    box.wDokumencie("visibilitychange");
    assert.equal(box.guska.log.sprawdzenia, 1);
  });

  test("karta schowana nie pyta o nic", async () => {
    const box = await otwarty({ kontroler: { state: "activated" } });
    box.sandbox.document.visibilityState = "hidden";
    box.wDokumencie("visibilitychange");
    assert.equal(box.guska.log.sprawdzenia, 0);
  });

  /* Odłożone „na później" wraca przy każdym otwarciu kursu, a na
     zainstalowanej aplikacji otwarciem jest właśnie powrót na pierwszy plan. */
  test("czekająca wersja jest zapowiadana ponownie", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, waiting: true });
    box.notices[0].children[1].fire("click");           // krzyżyk: na później
    assert.deepEqual(box.visible(), []);

    box.wDokumencie("visibilitychange");
    assert.equal(box.visible().length, 1, "wrócił przy następnym otwarciu");
  });

  test("brak sieci przy pytaniu o wersję nie wywraca kursu", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, updateOdrzuca: true, now: 0 });
    assert.doesNotThrow(() => box.sandbox.PWA.check());
    await mikro();
  });
});
