/* ============================================================
   Przypomnienie o kopii zapasowej.

   Kurs nie ma konta ani synchronizacji: jedyną kopią postępów jest
   plik, który uczeń sam zapisze. Przypomnienie jest więc jedyną
   rzeczą, która stoi między nim a wyczyszczoną pamięcią przeglądarki
   — i dlatego ma tu testy, a nie tylko kod.

   Próg liczy się w UKOŃCZONYCH lekcjach, nie w podejściach: kto
   powtarza tę samą lekcję dziesięć razy, nie zrobił nowych postępów
   i nie ma czego tracić.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const KEY = "linguai.italiano.v2";
const CO_ILE = 10;

/** Zdaje n kolejnych, RÓŻNYCH lekcji: każda liczy się jako ukończona. */
function zdaj(box, n, od) {
  const start = od || 0;
  for (let i = 0; i < n; i++) box.Core.recordLesson("l-" + (start + i), 10, 10, 60);
}

function swiezy() {
  const box = loadEngine();
  box.Core.load();
  return box;
}

describe("próg kopii zapasowej", () => {
  test("nowy profil nie zaczyna od przypomnienia", () => {
    const box = swiezy();
    assert.equal(box.Core.backupDue(), false);
    assert.equal(box.visible().length, 0, "i nic nie wisi na ekranie");
  });

  test("dziewiąta lekcja milczy, dziesiąta przypomina", () => {
    const box = swiezy();

    zdaj(box, CO_ILE - 1);
    assert.equal(box.Core.backupDue(), false, "przed progiem");
    assert.equal(box.visible().length, 0, "i bez komunikatu");

    zdaj(box, 1, CO_ILE - 1);
    assert.equal(box.Core.backupDue(), true, "na progu");
    assert.equal(box.visible().length, 1, "z komunikatem");
  });

  test("komunikat zostaje na ekranie i niesie liczbę lekcji", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.flush();

    const el = box.notices[0];
    assert.match(el.className, /toast--stuck/, "nie znika po trzech sekundach");
    assert.equal(el.getAttribute("role"), "alert");
    assert.match(box.visible()[0], /n=10/, "uczeń widzi, ilu lekcji dotyczy");
  });

  test("powtórzona lekcja nie przybliża przypomnienia", () => {
    const box = swiezy();
    zdaj(box, CO_ILE - 1);
    for (let i = 0; i < 5; i++) box.Core.recordLesson("l-0", 10, 10, 60);

    assert.equal(box.Core.backupDue(), false, "to te same postępy, nie nowe");
    assert.equal(box.visible().length, 0);
  });

  test("zapisanie kopii przesuwa próg o kolejne dziesięć", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.markBackup();

    assert.equal(box.Core.backupDue(), false, "zaraz po kopii");
    zdaj(box, CO_ILE - 1, CO_ILE);
    assert.equal(box.Core.backupDue(), false, "dziewięć lekcji później");
    zdaj(box, 1, 2 * CO_ILE - 1);
    assert.equal(box.Core.backupDue(), true, "dziesięć lekcji później");
  });

  /* Zamknięcie komunikatu to „nie teraz", nie „mam kopię". Gdyby oba
     ruszały to samo pole, kurs po zamknięciu uważałby postępy za
     zabezpieczone i nigdy więcej by o nie nie poprosił. */
  test("odłożenie na później milknie na dziesięć lekcji, ale nie udaje kopii", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.snoozeBackup();

    assert.equal(box.Core.backupDue(), false, "zaraz po odłożeniu");
    assert.equal(box.Core.state.backup.at, 0, "żadna kopia nie została zapisana");

    zdaj(box, CO_ILE - 1, CO_ILE);
    assert.equal(box.Core.backupDue(), false, "dziewięć lekcji później");
    zdaj(box, 1, 2 * CO_ILE - 1);
    assert.equal(box.Core.backupDue(), true, "dziesięć lekcji później prosi znowu");
  });

  test("kopia zapisana po odłożeniu liczy się od siebie", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.snoozeBackup();
    zdaj(box, 5, CO_ILE);
    box.Core.markBackup();

    assert.equal(box.Core.state.backup.at, CO_ILE + 5);
    zdaj(box, CO_ILE - 1, CO_ILE + 5);
    assert.equal(box.Core.backupDue(), false, "próg biegnie od kopii, nie od odłożenia");
  });

  test("znacznik kopii przeżywa zapis i odczyt", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.markBackup();
    box.flush();

    assert.equal(box.stored(KEY).backup.at, CO_ILE, "leży w localStorage");

    const drugi = loadEngine({ seed: { [KEY]: box.storage.getItem(KEY) } });
    drugi.Core.load();
    assert.equal(drugi.Core.backupDue(), false, "po ponownym otwarciu kursu");
  });

  /* Kolejność w downloadBackup: znacznik PRZED serializacją. Odwrotna
     wypuszcza plik z nieaktualnym znacznikiem, więc uczeń, który
     odzyskuje kopię, dostaje przypomnienie natychmiast po imporcie —
     o kopii, którą właśnie wgrał. */
  test("odzyskana kopia nie prosi od razu o następną", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.markBackup();
    const plik = box.Core.exportState();

    const drugi = swiezy();
    drugi.Core.importState(plik);
    assert.equal(drugi.Core.backupDue(), false);
  });

  test("plik z zepsutym polem backup nie wchodzi w ogóle", () => {
    const box = swiezy();
    const zly = JSON.stringify({ schema: 2, backup: "wczoraj" });

    assert.throws(() => box.Core.importState(zly), (e) => e.key === "set.errBadField");
    assert.equal(box.Core.state.backup.at, 0, "stan został nietknięty");
  });
});
