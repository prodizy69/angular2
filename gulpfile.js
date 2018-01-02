var gulp        = require('gulp');
var requireDir  = require('require-dir');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var tasks       = requireDir('./tools/gulp/tasks');
var dashboard   = require('./tools/gulp/utils/dashboard');

dashboard.show();

gulp.task('default', ['css','serve-dev']);

// The input SCSS files and the SCSS output path
var scssInput = [
	'src/styles/app.scss'
	];
var scssOutput = 'src/styles';



// Watch SASS.
gulp.task('css', function() {
  return gulp
    .src(scssInput)
    // .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    //.pipe(autoprefixer())
    //.pipe(sourcemaps.write())

    .pipe(gulp.dest(scssOutput))
     //.pipe(browserSync.reload({
      // stream: true
    //  }))
});
