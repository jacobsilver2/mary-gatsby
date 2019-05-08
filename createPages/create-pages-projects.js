const path = require('path');
const slash = require('slash');

function createProjectPages(result, createPage) {
  const projectPostTemplate = path.join(__dirname, `../src/templates/project.js`);
  const projectPosts = result.data.projects.edges;
  projectPosts.forEach((edge) => {
    try {
      createPage({
        path: `/work/${edge.node.slug}`,
        component: slash(projectPostTemplate),
        context: {
          id: edge.node.id,
        },
      });
    } catch (e) {
      console.error(e)
    }
  });
}

function graphqlForProjects(graphql, createPage) {
  return graphql(`
  {
    projects: allWordpressPost (filter: { categories: { elemMatch: {name: {eq: "project"}}}}) {
      edges {
        node {
          id
          title
          content
          slug
          categories {
            name
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