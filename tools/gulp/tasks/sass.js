var gulp 	  = require('gulp');
var sass 	  = require('gulp-sass');
var concat  = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var config 	= require('../config')();
// var scssInput = '../../styles/*.scss';
var scssInput = [
	'../../../src/gms/styles/app.scss',
  '../../../src/gms/scss/xxx.scss'
	];
var scssOutput = '../../../src/gms/styles'; 

gulp.task('sass', function () {
  
  return compileSass([config.app + 'scripts/**/*.scss']);
});

gulp.task('watch-sass', function () {
	gulp.watch([
    config.assets.styles + '**/*.scss',
    config.app + '**/*.scss'
  ], function(file) {
    return compileSass(file.path);
  });
});

function compileSass(files) {
  return gulp.src(files)
    .pipe(sass({ outputStyle: 'compressed', includePaths: './partials/' })
    .on('error', sass.logError))
    .pipe(sass().on('error', function(){
      console.log('Error Occured');
    }))
    .pipe(cssnano({
       zindex: false 
      }))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
}
