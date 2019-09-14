const { src, dest, parallel, watch, series } = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');

function html() {
  return src('./public/*.pug')
    .pipe(pug())
    .pipe(dest('./public'))
}

function css() {
  return src('./public/assets/style.styl')
  .pipe(stylus())
  .pipe(dest('./public/assets'))
}

exports.default = parallel(html, css);

// const less = require('gulp-less');
// const minifyCSS = require('gulp-csso');
// const concat = require('gulp-concat');
// function js() {
//   return src('client/javascript/*.js', { sourcemaps: true })
//     .pipe(concat('app.min.js'))
//     .pipe(dest('build/js', { sourcemaps: true }))
// }
// exports.js = js;
// exports.default = function() {
//   // You can use a single task
//   watch('./public/assets/style.styl', css);
//   // Or a composed task
//   watch('./public/*.pug', series(clean, javascript));
// };
