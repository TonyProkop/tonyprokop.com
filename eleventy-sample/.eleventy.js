const CleanCSS = require("clean-css")
const Terser = require("terser")
const sass = require("./config/sass-process")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("icons")
  eleventyConfig.addPassthroughCopy("index.js")

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = Terser.minify(code)
    if (minified.error) {
      console.log("Terser error: ", minified.error)
      return code
    }

    return minified.code
  })

  sass("./index.scss", "./_includes/index.css")
  sass("./dark-theme.scss", "./_includes/dark-theme.css")

  return {
    passthroughFileCopy: true,
  }
}
