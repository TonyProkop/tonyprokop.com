const Terser = require("terser")
const fs = require("fs")

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

  eleventyConfig.addFilter("svgContents", function(file) {
	let relativeFilePath = `.${file}`  

	let data = fs.readFileSync(relativeFilePath, function(err, contents) {  
	  if (err) return err  
	  return contents  
	})
  
	return data.toString('utf8')
  })

  return {
    passthroughFileCopy: true,
  }
}
