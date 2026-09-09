/* ============================================================
   Konfiguracja testów DOM.

   Serwer: scripts/serve.mjs, nie http.server — ten drugi oddaje
   skrypty z cache mimo zmian na dysku, więc test przechodzi albo
   pada na kodzie, którego już nie ma.

   reuseExistingServer jest wyłączone także lokalnie: serwer
   podniesiony wcześniej ręcznie mógł startować z innego katalogu.
   ============================================================ */
const { defineConfig, devices } = require("@playwright/test");

const PORT = 8123;

module.exports = defineConfig({
  testDir: "./tests/dom",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? "list" : [["list"]],

  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    /* Mikrofon: sztuczne urządzenie i automatyczna zgoda, żeby dało się
       przejść cały cykl nagrywania. Czego to NIE odtwarza: prawdziwej
       odmowy uprawnienia — headless Chromium zwraca wtedy inny błąd niż
       przeglądarka użytkownika, więc ta ścieżka zostaje niesprawdzona i
       jest tak opisana w recorder.js. */
    permissions: ["microphone"],
    launchOptions: {
      args: ["--use-fake-device-for-media-stream", "--use-fake-ui-for-media-stream"]
    }
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } }
  ],

  webServer: {
    command: `node scripts/serve.mjs ${PORT}`,
    url: `http://localhost:${PORT}/index.html`,
    reuseExistingServer: false,
    timeout: 20000
  }
});
