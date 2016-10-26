var gulp = require('gulp');
var rtlcss = require('gulp-rtlcss');

// cwd causing loop in rtlcss
var cfg = { cwd: 'design' };

gulp.task('test-01', function () {
  return gulp.src(['src/styles.css'], cfg)
    .pipe(rtlcss()) // endless loop
    .pipe(gulp.dest('dst', cfg));
});

gulp.task('build', [
  'test-01',
]);

// define default build task
gulp.task('default', ['build']);
