var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade');

gulp.task('resource', function() {
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));

    gulp.src('./jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
    gulp.run('resource');

    gulp.watch([
        './less/**/*.less',
        './jade/*.jade'
    ], function() {
        gulp.run('resource');
    });
});