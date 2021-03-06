const path = require('path');
const slash = require('slash');



function createProjectPages(result, createPage) {
  const projectPostTemplate = path.join(__dirname, `../src/templates/project.js`);
  const projectPosts = result.data.projects.edges;
  projectPosts.forEach((edge) => {
    createPage({
      path: `/work/${edge.node.slug}`,
      component: slash(projectPostTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
}

function graphqlForProjects(graphql, createPage) {
  return graphql(`
  {
    projects: allWordpressPost (filter: {categories: {elemMatch: {name: {eq: "project"}}}, tags: {elemMatch: {name: {ne: "protected"}}}}) {
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
    createProjectPages(result, createPage)
  });
}

exports.graphqlForProjects = graphqlForProjects;