module.exports = function(config) {
  'use strict';

  var cfg = {
    bowerComponents: 'demo/bower_components'
  };

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    // files to load in the browser
    files: [
      // components
      cfg.bowerComponents + '/jquery/dist/jquery.js',
      cfg.bowerComponents + '/jasmine-jquery/lib/jasmine-jquery.js',
      cfg.bowerComponents + '/angular/angular.js',
      cfg.bowerComponents + '/angular-mocks/angular-mocks.js',
      cfg.bowerComponents + '/angular-ui-select/dist/select.js',
      
      //jsonld related dependencies
      //TODO : remove this dependencies from the source code
      cfg.bowerComponents + '/es6-promise/promise.min.js',
      cfg.bowerComponents + '/jsonld/js/jsonld.js',
      
      // source files
      'source/main.js',
      'source/**/*.js',
      
      //compiled templates
      'build/templates-app.js',

      // tests
      'tests/**/*.spec.js',
      
      //tests utils
      'tests/utils/*'
    ],

    // generate js files from html templates to expose them during testing
    preprocessors: {
      '**/*.html': 'ng-html2js'
    },

    // https://github.com/karma-runner/karma-ng-html2js-preprocessor#configuration
    ngHtml2JsPreprocessor: {
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
    },

    // files to exclude
    exclude: [],

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    port: 9876,
    reporters: 'dots'
  });
};