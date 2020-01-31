const Terser = require("terser")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("icons")
  eleventyConfig.addPassthroughCopy("images")
  eleventyConfig.addPassthroughCopy("js")

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
