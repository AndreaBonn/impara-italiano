/* ============================================================
   pwa.js — rejestracja service workera.

   Osobny plik, nie kilka linijek w app.js: to jest jedyne miejsce w
   całym kursie, które zakłada obecność serwera, a app.js odpowiada za
   trasy i powłokę. Przy okazji app.js wraca pod limit 300 linii.

   Skrypt klasyczny.
   ============================================================ */
(function (global) {
  "use strict";

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
    global.navigator.serviceWorker.register("sw.js").catch(function (err) {
      // brak trybu offline nie psuje kursu, ale nie ma znikać po cichu
      console.warn("[LinguAI] Service worker niezarejestrowany:", err && err.message);
    });
    return true;
  }

  global.PWA = { register: register };
  global.addEventListener("load", register);

})(window);
