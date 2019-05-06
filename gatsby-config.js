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
        baseUrl: "maryswebsite.net/public_html",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
          // wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          // wpcom_app_clientId: "54793",
          // wpcom_user: "gatsbyjswpexample@gmail.com",
          // wpcom_pass: process.env.WORDPRESS_PASSWORD,
          // jwt_user: process.env.JWT_USER,
          // jwt_pass: process.env.JWT_PASSWORD,
          // jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
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
        ],
        normalizer: function({ entities }) {
          return entities
        },
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
