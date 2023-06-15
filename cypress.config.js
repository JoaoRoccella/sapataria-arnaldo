const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    baseUrl: 'http://127.0.0.1:5500',
  },
});
