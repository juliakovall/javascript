const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer").default;
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const cssbeautify = require("gulp-cssbeautify");

function html() {
  return src("src/*.html").pipe(dest("dist")).pipe(browserSync.stream());
}

function images() {
  return src("src/img/**/*.{jpg,jpeg,png,svg,webp,gif}")
    .pipe(dest("dist/img"))
    .pipe(browserSync.stream());
}

function styles() {
  return src("src/scss/style.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssbeautify())
    .pipe(dest("dist/css"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src("src/*.js").pipe(dest("dist/js")).pipe(browserSync.stream());
}

function server() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
}

function watcher() {
  watch("src/*.html", html);
  watch("src/scss/**/*.scss", styles);
  watch("src/*.js", scripts);
  watch("src/img/**/*.{jpg,jpeg,png,svg,webp,gif}", images);
}

exports.default = series(
  parallel(html, styles, scripts, images),
  parallel(server, watcher),
);

exports.build = parallel(html, styles, scripts, images);
// var gulp = require("gulp");
// var uglify = require("gulp-uglify");
// var browserSync = require("browser-sync").create();
// var htmlmin = require("gulp-html-minifier");

// gulp.task("browser-sync", function () {
//   browserSync.init({
//     server: {
//       baseDir: "./src",
//     },
//   });
// });

// gulp.task("compress", function (done) {
//   gulp.src("./src/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
//   gulp
//     .src("./src/*.html")
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest("./dist"));
//   done();
// });

// gulp.task("default", function (done) {
//   console.log("Hello, Gulp!");
//   done();
// });
