var gulp 	= require('gulp');
var del 	= require('del');
var config 	= require('./../config')();

gulp.task('clean', ['clean-build', 'clean-report', 'clean-ts', 'clean-sass']);

gulp.task('clean-build', function() {
	return del([ config.build.path ]);
});

gulp.task('clean-report', function() {
	return del([ config.report.path ]);
});

gulp.task('clean-sass', function() {
	return del([ config.build.styles + '**/*.css' ]);
});

gulp.task('clean-ts', function() {
	return del([ config.tmp ]);
});

gulp.task('clean-ts-app', function () {
    return del([ config.tmp + 'scripts' ]);
});
