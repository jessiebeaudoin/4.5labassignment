module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  // Create a collection for planets
  eleventyConfig.addCollection("planets", function(collection) {
      return collection.getFilteredByGlob("planets/*.md");
  });

  return {
      dir: {
          input: ".",
          output: "_site"
      }
  };
};
