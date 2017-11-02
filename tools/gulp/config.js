var envConfig = require('./utils/env');

var appName = 'business';

module.exports = function () {
  var root = '',
      src = root + 'src/',
      tools = root + 'tools/',
      app = src + appName + '/',
      test = app + 'test/',
      tmp = app + 'tmp/',
      tmpTest = tmp + 'test/',
      testHelper = test + 'test-helpers/',
      e2e = test + 'e2e/',
      tmpE2E = tmpTest + 'e2e/',
      index = src + 'index.html',
      dest ='dist/business/'
      assets = {
        config: app + 'config/',
        images: app + 'images/',
        fonts: app + 'fonts/',
        styles: app + 'styles/',
        scripts: app + 'scripts/'
      },
      tsFiles = [
           app + '**/*.ts'
      ],
      tsTestFiles = {
          unit: [app + '**/*.spec.ts'],
          e2e: [e2e + '**/*.ts'],
          helper: [testHelper + '**/*.ts']
      },
      build = {
          path: dest,
          app: dest,
          images: dest+'images/',
          fonts: dest+'fonts/',
          styles: dest+'styles/',
          config: dest+'config/',
          scripts: dest+'scripts/'
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
      appName: appName,
      app: app,
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
                  app + 'index.html',
                  app + 'systemjs.conf.js',
                  app + 'styles/' + 'app.css',
                  tmp + '**/*.js',
                  app + '**/*.css',
                  app + '**/*.html'
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