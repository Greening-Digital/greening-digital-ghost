
const { watch, src, series, dest } = require('gulp');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync')

function clean(cb) {
  // body omitted, we'd add bits to clean the
  // generated built directory here
  cb();
}

function javascript(cb) {
  // if we need to make packages of js,
  // we can run rollup, webpack or plain
  // gulp here
}

function fonts(cb) {
  // take fonts and move prep for serving from build directory
  return src('assets/fonts/*')
    //  output it here
    .pipe(dest('assets/build/fonts'))
}

function css(cb) {
  // look through the css provided by tailwind and run it through
  // postcss to give us all the utility classes
  return src('assets/css/*')
    // run through postcss (see postcss.config.js)
    .pipe(postcss())
    //  output it here
    .pipe(dest('assets/build/css'))
}

function dev() {
  // watch for any handlebars file being updated, and revisit the css needed

  const bsync = browserSync.create();
  bsync.init({
    proxy: 'http://localhost:2368',
    files: './'
  });

  watch('**/**.hbs', series(fonts, css));
  watch('assets/css/**/**.css', series(fonts, css));
}

exports.dev = dev
exports.fonts = fonts
exports.css = css

exports.default = function (cb) {
  console.log('default task. We might want to serve in dev, or make production builds.')
  cb()
}