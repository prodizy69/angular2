var envConfig = require('../utils/env');

if (envConfig.ENV === envConfig.ENVS.DEV) {

  var gulp    = require('gulp');
  var config  = require('./../config')();
  var bs      = require("browser-sync");

  function startBrowsersync(config) {
    bsIns = bs.create();
    bsIns.init(config);
    bsIns.reload();
  }

  gulp.task('serve-dev', ['sass', 'tsc', 'watch-ts', 'watch-sass'], function () {
     startBrowsersync(config.browserSync.dev);
  });

  gulp.task('serve-build', ['build'], function () {
    startBrowsersync(config.browserSync.prod);
  });
}
