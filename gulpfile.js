const gulp = require('gulp');
const less = require('gulp-less');

/* ----------------------------------------- */
/*  Compile LESS
/* ----------------------------------------- */

const SIMPLE_LESS = ["styles/*.less"];
function compileLESS() {
  return gulp
    .src(SIMPLE_LESS)
    .pipe(
      less({
        outputStyle: "expanded",
      })
    )
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
