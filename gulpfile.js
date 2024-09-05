const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');

/* ----------------------------------------- */
/*  Compile LESS
/* ----------------------------------------- */

const SIMPLE_LESS = ["styles/*.less", "styles/utils/*.less"];
function compileLESS() {
  return gulp
    .src(SIMPLE_LESS)
    .pipe(
      less({
        outputStyle: "expanded",
      })
    )
    .pipe(concat("fight2e.css"))
    .pipe(gulp.dest("./styles/"));
}
const css = gulp.series(compileLESS);

/* ----------------------------------------- */
/*  Watch Updates
/* ----------------------------------------- */

function watchUpdates() {
  gulp.watch(SIMPLE_LESS, css);
}

/* ----------------------------------------- */
/*  Export Tasks
/* ----------------------------------------- */

exports.default = gulp.series(
  gulp.parallel(css),
  watchUpdates
);
exports.css = css;
