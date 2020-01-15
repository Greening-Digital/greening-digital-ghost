var gulp = require('gulp');

gulp.task('css', function () {
  const postcss = require('gulp-postcss')

  return gulp.src('assets/css/*')
    // ...
    .pipe(postcss([
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(gulp.dest('build/'))
})