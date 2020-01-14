const CleanCSS = require("clean-css");
const sass = require("./config/sass-process");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("icons");
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  sass("./index.scss", "./_includes/index.css");
  return {
    passthroughFileCopy: true
  };
};
