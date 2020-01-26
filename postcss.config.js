// postcss.config.js
// for a production we build, we also pipe the output of this through purgecss
// to strip out unused CSS
// https://tailwindcss.com/docs/controlling-file-size/
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.hbs',],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})


module.exports = {

  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}