module.exports = function(config) {
  var gulpConfig = require('../gulp/config')();

  /**
   * List of npm packages that imported via `import` syntax
   */
  var dependencies = [
    '@angular',
    'lodash',
    'rxjs'
  ];

  var configuration = {
    basePath: '../../',

    frameworks: ['jasmine'],

    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-jasmine-html-reporter',
        'karma-coverage',
        'karma-sourcemap-loader',
        'karma-phantomjs-launcher'
    ],

    browsers: ['Chrome', 'PhantomJS'],
    reporters: ['progress', 'coverage', 'kjhtml'],

    preprocessors: {},

    // Generate json used for remap-istanbul
    coverageReporter: {
      dir: 'report/',
      reporters: [
        { type: 'json', subdir: 'report-json' }
      ],
      includeAllSources: true
    },

    files: [
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'node_modules/systemjs/dist/system.src.js'
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/src/": "/base/src/",
      "/risk/": "/base/src/risk/",
      "/node_modules/": "/base/node_modules/"
    },

    singleRun: false,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true
  };

  //Set to resolve the test/test-helper path being imported in karma-test-shim.js
  // configuration.proxies['/' + gulpConfig.tmp] = '/base/' + gulpConfig.tmp;

  configuration.preprocessors[gulpConfig.tmp + 'scripts/**/!(*.spec)+(.js)'] = ['coverage'];
  configuration.preprocessors[gulpConfig.tmp + 'scripts/**/*.js'] = ['sourcemap'];
  configuration.preprocessors[gulpConfig.tmp + 'scripts/**/*.js'] = ['sourcemap'];

  var files = [
    gulpConfig.tmpTest + 'test-helpers/global/*.js',
    gulpConfig.src + 'systemjs.config.js',
    createFilePattern(gulpConfig.tmpTest + 'test-helpers/**/*.js', { included: false }),
    createFilePattern(gulpConfig.tmp + '**/*.js', { included: false }),
    createFilePattern(gulpConfig.app + '**/*.html', { included: false }),
    createFilePattern(gulpConfig.app + '**/*.css', { included: false }),
    createFilePattern(gulpConfig.app + '**/*.ts', { included: false, watched: false }),
    createFilePattern(gulpConfig.tmp + '**/*.js.map', { included: false, watched: false }),
    'tools/test/karma-test-shim.js'
  ];

  configuration.files = configuration.files.concat(files);

  dependencies.forEach(function(key) {
    configuration.files.push({
        pattern: 'node_modules/' + key + '/**/!(*.spec)+(.js)',
        included: false,
        watched: false
    });
  });

  if (process.env.APPVEYOR) {
    configuration.browsers = ['IE'];
    configuration.singleRun = true;
    configuration.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
  }

  if (process.env.TRAVIS || process.env.CIRCLECI) {
    configuration.browsers = ['Chrome_travis_ci'];
    configuration.singleRun = true;
    configuration.browserNoActivityTimeout = 90000;
  }

  config.set(configuration);

  // Helpers
  function createFilePattern(path, config) {
    config.pattern = path;
    return config;
  }
}
