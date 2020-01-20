const CleanCSS = require("clean-css")
const Terser = require("terser")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("icons")
  eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("index.js")
  eleventyConfig.addPassthroughCopy("img")

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

  return {
    passthroughFileCopy: true,
  }
}
