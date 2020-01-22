
const { watch, src, series, dest } = require('gulp');
const postcss = require('gulp-postcss');

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

function css(cb) {
  // look through the full css we have
  return src('assets/css/*')
    // run through postcss (see postcss.config.js)
    .pipe(postcss())
    //  output it here
    .pipe(dest('assets/build/css'))
}


function dev() {
  // watch for any handlebars file being updated, and revisit the css needed
  watch('**/**.hbs', css);
}


exports.dev = dev

exports.default = function (cb) {
  console.log('default task. We might want to serve in dev, or make production builds.')
  cb()
}