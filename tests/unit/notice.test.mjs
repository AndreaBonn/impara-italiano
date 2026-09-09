/* ============================================================
   Komunikaty na ekranie (assets/js/notice.js).

   Dwa rodzaje i różnią się jedną rzeczą: czy uczeń MUSI je zobaczyć.
   Toast znika sam po 3,2 s i wolno go przegapić. Komunikat trwały
   zostaje do zamknięcia, bo mówi o utracie danych albo prosi o kopię
   zapasową — a to są jedyne dwie rzeczy w kursie, których nie da się
   odzyskać dalszą nauką.

   Gałąź po kliknięciu (odblokowanie klucza, wywołanie onAction i
   onDismiss) do niedawna nie miała żadnego testu jednostkowego, bo
   atrapa DOM wyrzucała uchwyty zdarzeń. Teraz je trzyma i można je
   odpalić przez el.fire("click").
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/** Sam moduł komunikatów, bez stanu i bez SRS — nie są mu potrzebne. */
function swiezy() {
  return loadEngine({ files: ["assets/js/notice.js"] });
}

/** Przyciski komunikatu w kolejności dokładania: akcja (jeśli jest), potem krzyżyk. */
function przyciski(el) { return el.children; }

describe("toast", () => {
  test("napis trafia na ekran", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("zapisano");
    assert.deepEqual(box.visible(), ["zapisano"]);
  });

  test("znika po upływie czasu, w odróżnieniu od komunikatu trwałego", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("zapisano");
    assert.equal(box.visible().length, 1, "najpierw widoczny");
    box.flush();
    assert.equal(box.visible().length, 0, "po czasie już nie");
  });

  test("odmiana „ok” dokłada własną klasę, zwykły toast nie", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("gotowe", "ok");
    box.sandbox.Notice.toast("uwaga");
    assert.match(box.notices[0].className, /toast--ok/);
    assert.doesNotMatch(box.notices[1].className, /toast--ok/);
  });

  test("napis idzie przez textContent, więc znaczniki zostają napisem", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("<b>x</b>");
    assert.equal(box.notices[0].textContent, "<b>x</b>");
    assert.equal(box.notices[0].innerHTML, "", "nic nie poszło jako HTML");
  });

  test("ten sam napis dwa razy to dwa toasty: powtórzenie nie jest tu wadą", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("zapisano");
    box.sandbox.Notice.toast("zapisano");
    assert.equal(box.visible().length, 2);
  });
});

describe("komunikat trwały", () => {
  test("zostaje na ekranie po upływie czasu toastu", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    box.flush();
    assert.equal(box.visible().length, 1);
    assert.match(box.notices[0].className, /toast--stuck/);
    assert.equal(box.notices[0].getAttribute("role"), "alert", "czytnik ekranu ma przerwać lekturę");
  });

  test("ten sam klucz nie mnoży się przy każdym zapisie", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    box.sandbox.Notice.notice("core.saveBlocked");
    box.sandbox.Notice.notice("core.saveBlocked");
    assert.equal(box.visible().length, 1);
  });

  test("inny klucz to inny komunikat, blokada dotyczy klucza, nie ekranu", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    box.sandbox.Notice.notice("core.storagePruned");
    assert.equal(box.visible().length, 2);
  });

  test("zmienne trafiają do tłumaczenia, a nie giną po drodze", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.backupDue", { vars: { n: 10 } });
    assert.match(box.visible()[0], /n=10/);
  });

  test("bez stosu komunikatów nic się nie dzieje i nic nie wybucha", () => {
    const box = swiezy();
    box.sandbox.document.getElementById = () => null;
    assert.doesNotThrow(() => box.sandbox.Notice.notice("core.saveBlocked"));
    assert.doesNotThrow(() => box.sandbox.Notice.toast("cokolwiek"));
  });
});

describe("zamknięcie komunikatu", () => {
  test("krzyżyk zdejmuje komunikat z ekranu", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    const x = przyciski(box.notices[0])[0];
    assert.equal(x.className, "toast__x");
    x.fire("click");
    assert.equal(box.visible().length, 0);
  });

  test("krzyżyk woła onDismiss dokładnie raz", () => {
    const box = swiezy();
    let ile = 0;
    box.sandbox.Notice.notice("core.backupDue", { onDismiss: () => ile++ });
    przyciski(box.notices[0])[0].fire("click");
    assert.equal(ile, 1);
  });

  /* Bez odblokowania klucza komunikat zamknięty raz nie wróciłby nigdy:
     blokada powtórzeń jest po to, żeby nie mnożył się w jednej sesji, a
     nie po to, żeby wyłączyć go do końca nauki. */
  test("po zamknięciu ten sam klucz może przyjść jeszcze raz", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    przyciski(box.notices[0])[0].fire("click");
    box.sandbox.Notice.notice("core.saveBlocked");
    assert.equal(box.visible().length, 1, "wrócił");
  });
});

describe("przycisk akcji", () => {
  const opcje = (spy) => ({ actionKey: "core.backupSave", onAction: spy });

  test("jest tylko wtedy, gdy komunikat o coś prosi", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    assert.equal(przyciski(box.notices[0]).length, 1, "sam krzyżyk");

    box.sandbox.Notice.notice("core.backupDue", opcje(() => {}));
    assert.equal(przyciski(box.notices[1]).length, 2, "akcja i krzyżyk");
  });

  test("sam klucz napisu bez uchwytu nie tworzy martwego przycisku", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.backupDue", { actionKey: "core.backupSave" });
    assert.equal(przyciski(box.notices[0]).length, 1);
  });

  test("kliknięcie woła akcję i zdejmuje komunikat", () => {
    const box = swiezy();
    let ile = 0;
    box.sandbox.Notice.notice("core.backupDue", opcje(() => ile++));
    przyciski(box.notices[0])[0].fire("click");
    assert.equal(ile, 1);
    assert.equal(box.visible().length, 0);
  });

  /* Rozróżnienie, na którym stoi próg kopii zapasowej: zrobiona kopia
     przesuwa `backup.at`, a odłożenie na później `backup.snoozed`.
     Gdyby akcja wołała oba uchwyty, kurs uznałby zapisaną kopię za
     odłożenie i przestałby przypominać. Oba kliknięcia w JEDNYM teście,
     bo sprawdzana jest różnica między nimi, nie sam brak. */
  test("onDismiss woła krzyżyk, nie wykonana akcja", () => {
    const box = swiezy();
    let odlozone = 0;
    const opts = { actionKey: "core.backupSave", onAction: () => {}, onDismiss: () => odlozone++ };

    box.sandbox.Notice.notice("core.backupDue", opts);
    przyciski(box.notices[0])[0].fire("click");
    assert.equal(odlozone, 0, "zapisanie kopii to nie odłożenie");

    box.sandbox.Notice.notice("core.backupDue", opts);
    const drugi = box.notices[1];
    przyciski(drugi)[1].fire("click");
    assert.equal(odlozone, 1, "krzyżyk odkłada");
  });
});

describe("wystawienie w Core", () => {
  test("Core.toast i Core.notice to te same funkcje, nie kopie", () => {
    const box = loadEngine();
    assert.equal(box.Core.toast, box.sandbox.Notice.toast);
    assert.equal(box.Core.notice, box.sandbox.Notice.notice);
  });
});
