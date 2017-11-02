var gulp 		= require('gulp');
var util 		= require('gulp-util');
var ts 			= require('gulp-typescript');
var tslint 		= require('gulp-tslint');
var sourcemaps 	= require('gulp-sourcemaps');
var template	= require('gulp-template');
var argv 		= require('yargs').argv;
var runSequence = require('run-sequence');

var config 		= require('../config')();

var typingFiles = [
	'typings/index.d.ts'
];

var tsUnitFiles = [].concat(config.tsTestFiles.unit, config.tsTestFiles.helper);
var tsFiles = [].concat(config.tsFiles, tsUnitFiles);

gulp.task('watch-ts', function() {
	return gulp.watch(config.tsFiles, function(file) {
		util.log('Compiling ' + file.path + ' ... ');
		return compileTs(file.path, true);
	});
});

gulp.task('watch-ts-test', function() {
	return gulp.watch(config.tsFiles, function(file) {
		util.log('Compiling ' + file.path + ' ... ');
		return compileTs(file.path, true)
			   .on('end', function(){
				   console.log('going to unit test again');
				   runSequence('unit-test');
			   });
	});
});

gulp.task('tsc', ['clean-ts-app'], function() {
	return compileTs(tsFiles);
});

gulp.task('tslint', function() {
	return lintTs(config.tsFiles);
});

function lintTs(files) {
	return gulp.src(files)
		.pipe(tslint({ formatter: 'verbose' }))
		.pipe(tslint.report())
}

function compileTs(files, watchMode) {
	watchMode = watchMode || false;

	var tsProject = ts.createProject('tsconfig.json');
	var allFiles = [].concat(files, typingFiles);
	var res = gulp.src(allFiles, { base: config.app, outDir: config.tmp })
				.pipe(tslint({ formatter: 'verbose' }))
				.pipe(tslint.report())
				.pipe(sourcemaps.init())
				.pipe(tsProject())
				.on('error', function() {
					if(watchMode) {
						return;
					}

					// process.exit(1);
				});

	return res.js
			.pipe(sourcemaps.write('.', { includeContent: true }))
			.pipe(template({ buildAs: process.env.buildAs || argv.buildAs || null, env: argv.env || 'dev' }))
			.pipe(gulp.dest(config.tmp));
}