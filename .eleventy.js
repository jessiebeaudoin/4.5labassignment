module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  // Create a collection for planets
  eleventyConfig.addCollection("planets", function(collectionApi) {
      return collectionApi.getFilteredByGlob("planets/*.md");
  });

  // Set default template engine to Nunjucks
  return {
      dir: {
          input: ".",
          includes: "_includes",
          layouts: "_layouts",
          output: "_site"
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk"
  };
};
