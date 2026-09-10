/* ============================================================
   The configuration of the DOM tests.

   The server: scripts/serve.mjs, not http.server — the latter serves
   scripts from its cache despite changes on disk, so a test passes or fails
   on code that no longer exists.

   reuseExistingServer is off locally too: a server started by hand earlier
   may have been launched from a different directory.
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
    /* The microphone: a fake device and automatic consent, so that the whole
       recording cycle can be played through. What this does NOT reproduce: a
       real permission denial — headless Chromium then returns a different
       error than the user's browser, so that path stays unverified and is
       described as such in recorder.js. */
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
