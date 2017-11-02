var gulp            = require('gulp');
var util            = require('gulp-util');
var Server          = require('karma').Server;
var gulpProtractor  = require('gulp-protractor');
var remapIstanbul   = require('remap-istanbul/lib/gulpRemapIstanbul');
var runSequence     = require('run-sequence');
var argv            = require('yargs').argv;
var fs              = require('file-system');
var open            = require('gulp-open');

var config          = require('../config')();

gulp.task('test', ['clean-report', 'unit-test']);

gulp.task('unit-test', function (done) {
  var watch = argv.watch || false;

  if (watch) {
    console.log('=== Unit Test Watch Mode ===');
    console.log('- It will autowatch the changed files and re-run the test');
    console.log('- Press Cmd/Ctrl + C to exit and get the coverage result');
    console.log('- Press Cmd/Ctrl + C again to close the TSC watch.');
  }

  new Server({
    configFile: __dirname + '/../../test/karma.conf.js',
    singleRun: !watch,
    browsers: watch ? ['Chrome'] : ['PhantomJS']
  }, karmaDone).start();

  function karmaDone (exitCode) {
  	remapCoverage(done, exitCode);
  }
});

gulp.task('unit-test-watch',function(){
   runSequence(['unit-test', 'watch-ts-test']);
})

gulp.task('e2e', ['e2e-test']);
gulp.task('driver-update', gulpProtractor['webdriver_update']);
gulp.task('e2e-test', ['driver-update', 'tsc-e2e'], function () {
  gulp.src(config.tmpE2E + '**/*.spec.js')
  .pipe(gulpProtractor.protractor({
    configFile: 'config/test/protractor.conf.js',
    args: ['--baseUrl', config.e2eConfig.seleniumTarget]
  }))
  .on('error', function(e) {
    util.log('Error running E2E testing');
    process.exit(1);
  });
});

function remapCoverage (done, exitCode) {
  var watch = argv.watch || false;
  util.log('Remapping coverage to TypeScript format...');
  gulp.src(config.report.path + 'report-json/coverage-final.json')
      .pipe(remapIstanbul({
        basePath: config.app,
        reports: {
          'lcovonly': config.report.path + 'coverage/lcov.info',
          'json': config.report.path + 'coverage/coverage.json',
          'html': config.report.path + 'coverage/html-report',
          'text-summary': config.report.path + 'coverage/text-summary.txt'
        }
      }))
      .on('finish', function () {
        util.log('Test Done with exit code: ' + exitCode);
        done(exitCode);
        util.log('Remapping done! View the result in report/coverage/html-report');
        fs.readFile(config.report.path + 'coverage/text-summary.txt', {encoding: 'utf-8', flag: 'rs'}, function(error, data) {
          if(error) {
            util.log(error);
          }
          util.log(data);
        });
        if(watch){
          gulp.src(config.report.path + 'coverage/html-report/index.html')
            .pipe(open());
        }
      });
}