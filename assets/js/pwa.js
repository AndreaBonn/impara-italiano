/* ============================================================
   pwa.js — rejestracja service workera i zapowiedź nowej wersji.

   Osobny plik, nie kilka linijek w app.js: to jest jedyne miejsce w
   całym kursie, które zakłada obecność serwera, a app.js odpowiada za
   trasy i powłokę.

   Tu są WYŁĄCZNIE skutki: rejestracja, nasłuchy, komunikat, przeładowanie.
   Decyzje („czy zapowiadać", „czy już wolno zapytać", „czy przeładować")
   siedzą w pwa-rules.js i nie wiedzą nic o przeglądarce.

   Skrypt klasyczny. Ładuje się PO pwa-rules.js.
   ============================================================ */
(function (global) {
  "use strict";

  var rejestracja = null;

  /**
   * Czy strona miała kontrolera W CHWILI WCZYTANIA.
   *
   * Zapisane raz, na starcie, i potem tylko czytane. Pytanie zadane
   * później odpowiada „tak" już od chwili przejęcia, więc pierwsza
   * wizyta udawałaby aktualizację i kończyła się przeładowaniem strony,
   * którą uczeń dopiero co otworzył.
   */
  var kontrolowana = false;
  var juzPrzeladowana = false;
  var ostatnieSprawdzenie = 0;

  function sw() { return global.navigator.serviceWorker; }

  /**
   * Komunikat o gotowej aktualizacji: dwa wyjścia i żadne nie jest ukryte.
   *
   * „Zaktualizuj" prosi czekającego workera o przejęcie i na tym kończy
   * swoją rolę — strona przeładuje się dopiero wtedy, gdy przejęcie
   * NAPRAWDĘ nastąpi (controllerchange niżej). Przeładowanie w tym
   * miejscu otworzyłoby jeszcze raz starą wersję.
   *
   * Krzyżyk zamyka bez stosowania: wersja zostaje w kolejce, a komunikat
   * wraca przy następnym otwarciu kursu. Komunikat trwały, nie toast —
   * to nie jest wiadomość do przeoczenia między jednym ćwiczeniem
   * a drugim.
   */
  function zapowiedz(worker) {
    if (!global.PwaRules.ogloszenie({ czeka: !!worker, kontrolowana: kontrolowana })) return false;
    global.Notice.notice("pwa.updateReady", {
      actionKey: "pwa.updateNow",
      /* Pytamy o czekającego workera W CHWILI KLIKNIĘCIA, a nie o tego,
         który był nim przy zapowiedzi. Drugie wydanie wypchnięte, gdy
         komunikat wisi już na ekranie, spycha pierwszego workera do
         „redundant" — a Notice nie pokaże komunikatu drugi raz pod tym
         samym kluczem. Zapamiętana referencja zostawiłaby wtedy ucznia
         z przyciskiem, który nic nie robi i nic o tym nie mówi. */
      onAction: function () {
        var czeka = (rejestracja && rejestracja.waiting) || worker;
        czeka.postMessage({ typ: "przejmij" });
      }
    });
    return true;
  }

  /**
   * Pilnuje workera, który właśnie się instaluje.
   *
   * `updatefound` przychodzi ZA WCZEŚNIE: worker jest wtedy w stanie
   * „installing", a `registration.waiting` jest jeszcze puste — zapowiedź
   * postawiona w tym miejscu nie miałaby czego zapowiadać. Przejście do
   * „installed" nie wysyła już żadnego zdarzenia na rejestrację i widać
   * je wyłącznie na samym workerze, przez `statechange`.
   */
  function sledz(worker) {
    if (!worker) return;
    worker.addEventListener("statechange", function () {
      if (worker.state === "installed") zapowiedz(worker);
    });
  }

  /**
   * Pyta serwer o nową wersję, nie częściej niż co PRZERWA.
   *
   * Brak sieci nie jest tu usterką do zgłaszania: kurs ma działać bez
   * niej, a pytanie o aktualizację jest jedyną rzeczą, która wtedy nie
   * ma jak się udać.
   */
  function sprawdz() {
    if (!rejestracja) return false;
    var teraz = Date.now();
    if (!global.PwaRules.sprawdzac(ostatnieSprawdzenie, teraz)) return false;
    ostatnieSprawdzenie = teraz;
    rejestracja.update().catch(function () { return null; });
    return true;
  }

  /**
   * Powrót na pierwszy plan — na zainstalowanej aplikacji to jest
   * prawdziwe „otwarcie kursu", częstsze niż wczytanie strony.
   *
   * Najpierw zapowiedź tego, co już czeka (odłożone „na później" wraca
   * właśnie tutaj), potem dopiero pytanie do serwera: pierwsze jest
   * darmowe i natychmiastowe, drugie kosztuje żądanie i ma próg.
   */
  function naPierwszyPlan() {
    if (global.document.visibilityState !== "visible") return;
    if (rejestracja && rejestracja.waiting) zapowiedz(rejestracja.waiting);
    sprawdz();
  }

  /**
   * Rejestracja idzie WYŁĄCZNIE po http(s).
   *
   * Z file:// rejestracja rzuca wyjątkiem, a otwarcie kursu podwójnym
   * kliknięciem jest wymogiem projektu, nie przypadkiem brzegowym.
   * Dlatego strażnik stoi na protokole, a nie w try/catch, i żadna
   * ścieżka w kodzie nie zakłada, że worker istnieje: bez niego kurs
   * traci tryb offline i nic poza tym.
   */
  function register() {
    if (!("serviceWorker" in global.navigator)) return false;
    if (!/^https?:$/.test(global.location.protocol)) return false;

    kontrolowana = !!sw().controller;
    ostatnieSprawdzenie = Date.now();   // sama rejestracja JEST sprawdzeniem

    /* Przejęcie kontroli przez nowego workera. Przychodzi także w kartach,
       w których nikt niczego nie klikał: skoro nowa wersja obsługuje już
       ich żądania, muszą wykonywać jej kod, a nie stary. */
    sw().addEventListener("controllerchange", function () {
      if (!global.PwaRules.przeladowanie({
        kontrolowana: kontrolowana,
        juzPrzeladowana: juzPrzeladowana
      })) return;
      juzPrzeladowana = true;
      global.location.reload();
    });

    sw().register("sw.js").then(function (reg) {
      rejestracja = reg;
      /* Trzy wejścia do tej samej zapowiedzi, bo aktualizacja może być
         w trzech różnych miejscach, gdy rejestracja się kończy:
         gotowa od poprzedniej wizyty (waiting), w trakcie instalacji
         (installing — updatefound zdążył pójść, zanim doszliśmy do
         listenera), albo dopiero przed nami (updatefound niżej). */
      if (reg.waiting) zapowiedz(reg.waiting);
      sledz(reg.installing);
      reg.addEventListener("updatefound", function () { sledz(reg.installing); });
    }).catch(function (err) {
      // brak trybu offline nie psuje kursu, ale nie ma znikać po cichu
      console.warn("[LinguAI] Service worker niezarejestrowany:", err && err.message);
    });

    global.document.addEventListener("visibilitychange", naPierwszyPlan);
    return true;
  }

  global.PWA = { register: register, check: sprawdz };

  /* Nie samo addEventListener("load"): w gotowej stronie ten plik bywa
     wykonywany PO tym zdarzeniu i uchwyt nie odpaliłby się nigdy, a kurs
     wyglądałby wtedy jak działający — bez trybu offline i bez zapowiedzi
     aktualizacji, których i tak nikt nie ogląda na co dzień. Ten sam
     wzorzec co start aplikacji w app.js. */
  if (global.document.readyState === "complete") register();
  else global.addEventListener("load", register);

})(window);
