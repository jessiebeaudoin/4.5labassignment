module.exports = function(eleventyConfig) {
  // Pass through static assets to the output folder
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  // Create a collection for planets
  eleventyConfig.addCollection("planets", function(collectionApi) {
      return collectionApi.getFilteredByGlob("planets/*.md");
  });

  return {
      dir: {
          input: ".",
          output: "_site"
      }
  };
};
