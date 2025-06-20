const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1150,
  viewportHeight: 768,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
