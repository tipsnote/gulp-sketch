'use strict';

const gulp = require("gulp");
const sketch = require("gulp-sketch");
const imagemin = require('gulp-imagemin');

const paths = {
  srcDir : "./sketch/**/*.sketch",
  dstDir : "./assets/images/"
}

const sketchOptions = {
  export: "slices"
}

const minifyOptions = {
  "images":true
}

gulp.task("sketch", () => {
  return gulp.src(paths.srcDir)
    .pipe(sketch(sketchOptions))
    .pipe(gulp.dest(paths.dstDir))
});

gulp.task('sketch:min',() => {
  return gulp.src(paths.srcDir)
    .pipe(sketch(sketchOptions))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dstDir))
});

gulp.task("watch",() => {
    gulp.watch(paths.srcDir, [minifyOptions.images? "sketch:min" : "sketch"]);
});
