var gulp = require('gulp');

gulp.task('copy-angular', function() {
    gulp.src('./app/bower_components/angular/angular.min.js')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./distro'));
});

//gulp.watch('./app/bower_components/angular/angular.min.js', ['jshint']);

gulp.task('default', ['copy-angular']);