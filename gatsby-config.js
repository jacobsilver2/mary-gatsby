module.exports = {
  siteMetadata: {
    title: `Mary Choueiter`,
    description: `Mary's Website`,
    author: `Jacob Silver`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "maryswebsite.net",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        concurrentRequests: 100,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
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
