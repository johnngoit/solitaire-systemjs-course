/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [
      "node_components/angular/angular.js",
      "node_components/angular-route/angular-route.js",
      "node_components/angular-mocks/angular-mocks.js",
      "node_components/underscore/underscore.js",
      "app/cards/**/*.js",
      "app/klondike/piles/pile.js",
      "app/klondike/piles/foundationPile.js",
      "app/klondike/piles/remainderPile.js",
      "app/klondike/piles/tableauPile.js",
      "app/klondike/*.js",
      "tests/**/*.js"
    ],

    autoWatch: true,

    frameworks: ["jasmine"],

    browsers: ["Chrome", "Firefox","Safari"],

    reporters: ['progress', 'junit'],

    plugins: [
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
      "karma-junit-reporter",
      "karma-phantomjs-launcher",
      "karma-safari-launcher"
    ],

    junitReporter: {
      outputFile: "test-results.xml",
      outputDir: "test-results"
    }

  });
};
