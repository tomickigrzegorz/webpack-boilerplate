const gulp = require('gulp');
const webp = require('gulp-webp');

gulp.task('img', () =>
    gulp.src('./source/images/**/*.jpg')
        .pipe(webp({quality: 60}))
        .pipe(gulp.dest('./source/images/'))
);