module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scrollreveal.js");

  // Create a collection for planets
  eleventyConfig.addCollection("planets", function(collectionApi) {
      return collectionApi.getFilteredByGlob("planets/*.md");
  });

  return {
      dir: {
          input: ".",
          includes: "_includes",
          layouts: "_layouts",
          output: "_site"
      },
      markdownTemplateEngine: "liquid",
      htmlTemplateEngine: "liquid"
  };
};
