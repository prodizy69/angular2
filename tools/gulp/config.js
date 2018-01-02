var envConfig = require('./utils/env');

var srcName = '';

module.exports = function () {
  var src = 'src/',
      tools =  'tools/',
      test = src + 'test/',
      tmp =  src + 'tmp/',
      tmpTest = tmp + 'test/',
      testHelper = test + 'test-helpers/',
      e2e = test + 'e2e/',
      tmpE2E = tmpTest + 'e2e/',
      index = src + 'index.html',
      dest ='dist/'
      assets = {
        config: src + 'config/',
        images: src + 'images/',
        fonts: src + 'fonts/',
        styles: src + 'styles/',
        scripts: src + 'scripts/'
      },
      tsFiles = [
           src + '**/*.ts'
      ],
      tsTestFiles = {
          unit: [src + '**/*.spec.ts'],
          e2e: [e2e + '**/*.ts'],
          helper: [testHelper + '**/*.ts']
      },
      build = {
          path: dest,
          images: dest + 'images/',
          fonts: dest + 'fonts/',
          styles: dest + 'styles/',
          config: dest + 'config/',
          scripts: dest + 'scripts/'
      },
      systemJSConfig = src + 'systemjs.config.js',
      report = {
          path: 'report/'
      };

  var e2eConfig = {
      seleniumTarget: 'http://127.0.0.1:3000'
  };

  var systemJS = {
      builder: {
          normalize: true,
          minify: false,
          mangle: true,
          runtime: false,
          globalDefs: {
              DEBUG: false,
              ENV: 'production'
          }
      }
  };

  var gulpConfig = {
      src: src,
      root: root,
      srcName: srcName,
      src: src,
      assets: assets,
      test: test,
      tmp: tmp,
      tmpTest: tmpTest,
      tmpE2E: tmpE2E,
      testHelper: testHelper,
      e2e: e2e,
      e2eConfig: e2eConfig,
      index: index,
      build: build,
      report: report,
      tsFiles: tsFiles,
      tsTestFiles: tsTestFiles,
      systemJS: systemJS,
      systemJSConfig: systemJSConfig
  };

  if (envConfig.ENV === envConfig.ENVS.DEV)
  {
      var historyApiFallback = require('connect-history-api-fallback');
      var browserSync = {
          dev: {
              port: 3000,
              server: {
                  baseDir: './src',
                  middleware: [historyApiFallback()],
                  routes: {
                      '/node_modules': 'node_modules',
                      '/src': 'src'
                  }
              },
              files: [
                  src + 'index.html',
                  src + 'systemjs.config.js',
                  src + 'styles/' + 'src.css',
                  tmp + '**/*.js',
                  src + '**/*.css',
                  src + '**/*.html'
              ]
          },
          prod: {
              port: 3001,
              server: {
                  baseDir: './' + build.path,
                  middleware: [historyApiFallback()]
              }
          }
      };

      gulpConfig.browserSync = browserSync;
  }

  return gulpConfig;
};