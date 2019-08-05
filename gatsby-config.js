module.exports = {
  siteMetadata: {
    title: `Mary Choueiter`,
    description: `Mary's Website`,
    author: `Jacob Silver`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `marychoueiter.com`,
        short_name: `marychoueiter`,
        start_url: `/work`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "maryswebsite.net",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/uploads",
          "**/acf",
          "**/slide",
          "**/wp-content",
        ],
        searchAndReplaceContentUrls: {
          sourceUrl: "https://www.maryswebsite.net",
          replacementUrl: "https://vigilant-haibt-7f8dd5.netlify.com",
        },
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    // `gatsby-plugin-offline`,
  ],
}
