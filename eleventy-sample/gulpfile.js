const gulp = require("gulp")
const sass = require("gulp-sass")

gulp.task("scss", function() {
  return gulp
    .src("./scss/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./css"))
})

gulp.task("watch:scss", function() {
  gulp.watch("./scss/*.scss", gulp.series("scss"))
})
