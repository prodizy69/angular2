var gulp            = require('gulp');
var util            = require('gulp-util');
var runSequence     = require('run-sequence');
var useref          = require('gulp-useref');
var gulpif          = require('gulp-if');
var rev             = require('gulp-rev');
var revReplace      = require('gulp-rev-replace');
var uglify          = require('gulp-uglify');
var cssnano         = require('gulp-cssnano');
var concat          = require('gulp-concat');
var inject          = require('gulp-inject');
var Builder         = require('systemjs-builder');

var config          = require('../config')();
var buildHelpers    = require('../../../build-helper.json');

gulp.task('build', ['clean'], function (done) {
  runSequence('bundle', 'bundle-component', 'build-assets', done);
});

gulp.task('bundle', function(done) {
  runSequence('tsc', 'bundle-lib', 'bundle-app', 'bundle-features', done);
});

gulp.task('bundle-component', function(done) {
  runSequence('set-buildAs-component', 'tsc', 'bundle-app', done);
});

gulp.task('set-buildAs-component', function() {
  return process.env.buildAs = 'component';
});

gulp.task('bundle-lib', function(done) {
  var builder = new Builder();
  return builder
    .loadConfig(config.systemJSConfig)
    .then(() => {
      var path = config.tmp;
      var bundleName = 'lib.bundle.js';
      return builder.bundle(path + 'scripts/**/* - [' + path + 'scripts/**/*]', config.build.scripts + bundleName, config.systemJS.builder);
    })
    .catch((ex) => {
      util.log('thirdparty bundling failed. ', ex);
    });
});

gulp.task('bundle-app', function(done) {
  var builder = new Builder();
  return builder
    .loadConfig(config.systemJSConfig)
    .then(() => {
      var path = config.tmp;
      var bundleName = process.env.buildAs ? 'app.component.bundle.js' : 'app.bundle.js';
      var libBundle = 'lib.bundle.js';
      if (process.env.buildAs) {
        return builder.bundle(path + 'scripts/main.js' + ' - ' + config.build.scripts + libBundle , config.build.scripts + bundleName, config.systemJS.builder);
      } else {
        return builder.bundle(path + 'scripts/main.js - ' + config.build.scripts + libBundle, config.build.scripts + bundleName, config.systemJS.builder);
      }
    })
    .then(() => {
      if(process.env.buildAs) {
        gulp.src(
          [config.build.scripts + 'app.component.bundle.js']
            .concat(buildHelpers.jsExtras.map((jsFilePath) => {
              return config.tmp + 'scripts/' + jsFilePath;
            })))
          .pipe(concat('app.component.bundle.js'))
          .pipe(gulp.dest(config.build.scripts));
      }
    })
    .catch((ex) => {
      util.log('app bundling failed. ', ex);
    })
});

gulp.task('bundle-features', function(done) {
  var builder = new Builder();
  return builder
    .loadConfig(config.systemJSConfig)
    .then(() => {
      var promises = [];
      var path = config.tmp;
      var appBundle = 'app.bundle.js';
      var libBundle = 'lib.bundle.js';
      buildHelpers.features.map((fcnf) => {
        promises.push(builder.bundle(path + 'scripts/' + fcnf.inputFile + ' - ' + config.build.scripts + libBundle + ' - ' + config.build.scripts + appBundle, config.build.scripts + fcnf.outputFile, config.systemJS.builder));
      })
      return Promise.all(promises);
    })
    .catch((ex) => {
      util.log('features bundling failed. ', ex);
    });
});

gulp.task('build-assets', function (done) {
  runSequence( 'fonts', 'index', function () {
    gulp.src(config.assets.config + '**/*.json', { base: config.assets.config })
        .pipe(gulp.dest(config.build.config));
    
    gulp.src([config.app + '**/*.html', config.app + '**/*.css'], { base: config.app })
        .pipe(gulp.dest(config.build.app));

    gulp.src(config.src + 'favicon.ico')
        .pipe(gulp.dest(config.build.path));

    gulp.src(config.assets.images + '**/*.*', { base: config.assets.images })
        .pipe(gulp.dest(config.build.images))
        .on('finish', done);
        gulp.src(config.assets.styles + '*.css', { base: config.assets.styles })
        .pipe(gulp.dest(config.build.styles));
        
  });
});

gulp.task('index', function(done) {
  var libStream = gulp.src([
                        'node_modules/core-js/client/shim.min.js',
                        'node_modules/zone.js/dist/zone.js',
                        'node_modules/reflect-metadata/Reflect.js',
                        'node_modules/systemjs/dist/system.src.js',
                        config.build.scripts + 'lib.bundle.js'
                      ])
                      .pipe(concat('lib.bundle.js'))
                      .pipe(gulp.dest(config.build.scripts))
                      // .pipe(uglify())
                      .pipe(rev())
                      .pipe(gulp.dest(config.build.scripts));
  var appStream = gulp.src([
                        config.build.scripts + 'app.bundle.js'
                      ].concat(buildHelpers.jsExtras.map((jsFilePath) => {
                        return config.tmp + 'scripts/' + jsFilePath;
                      })))
                      .pipe(concat('app.bundle.js'))
                      // .pipe(uglify())
                      .pipe(rev())
                      .pipe(gulp.dest(config.build.scripts));
  gulp.src(config.index)
      .pipe(inject(libStream, { name: 'lib', ignorePath: 'dist', addRootSlash: false }))
      .pipe(inject(appStream, { name: 'app', ignorePath: 'dist', addRootSlash: false}))
      .pipe(revReplace())
      .pipe(gulp.dest(config.build.path))
      .on('finish', done);
});

gulp.task('styles', function () {
  gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    config.assets.styles + 'app.css'
  ])
  .pipe(concat('app.css'))
  .pipe(gulp.dest(config.build.styles));
});

gulp.task('fonts', function () {
  gulp.src(config.assets.fonts + '**/*.*', { base: config.assets.fonts })
      .pipe(gulp.dest(config.build.fonts));

  gulp.src(['node_modules/font-awesome/fonts/*.*'])
      .pipe(gulp.dest(config.build.fonts));
});
