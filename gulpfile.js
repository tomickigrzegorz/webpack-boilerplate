const gulp = require('gulp');
const webp = require('gulp-webp');

gulp.task('img', () =>
  gulp
    .src('./sources/images/**/*.jpg')
    .pipe(webp({ quality: 60 }))
    .pipe(gulp.dest('./sources/images/'))
);