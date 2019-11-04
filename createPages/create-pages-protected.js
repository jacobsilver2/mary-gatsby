const path = require('path');
const slash = require('slash');



function createProtectedPages(result, createPage) {
  const protectedPostTemplate = path.join(__dirname, `../src/templates/protected.js`);
  const protectedPosts = result.data.projects.edges;
  protectedPosts.forEach((edge) => {
    createPage({
      path: `/work/private/${edge.node.slug}`,
      component: slash(protectedPostTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
}

function graphqlForProtected(graphql, createPage) {
  return graphql(`
  {
    projects: allWordpressPost (filter: {categories: {elemMatch: {name: {eq: "project"}}}, tags: {elemMatch: {name: {eq: "protected"}}}}) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "DD, MMM YYYY")
          content
          excerpt
          categories {
              id
              name
          }
          featured_media {
            localFile {
              publicURL
              childImageSharp {
                id
                fixed {
                  srcSet
                  src
                }
              }
            }
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    createProtectedPages(result, createPage)
  });
}

exports.graphqlForProtected = graphqlForProtected;