const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/support/tasks/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    video: false,
    baseUrl: "http://api-person-test.herokuapp.com",
    reporter: 'reporters/reporter-config.js',
    reporter: 'mochawesome'
  },
  
  
});
