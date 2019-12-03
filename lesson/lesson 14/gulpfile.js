const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const minifyCSS = require('gulp-minify-css');
const rename = require("gulp-rename");

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on(change, browserSync.reload);
    gulp.watch("./*.css").on(change, browserSync.reload);
});

gulp.task('minify-css', function() {
    return gulp.src('./*.css')
      .pipe(minifyCSS({keepBreaks:true}))
      .pipe(rename({suffix: ".min"}))
      .pipe(gulp.dest('./style/'))/* указываем папку, куда отправляет минифицированный css */
  });
