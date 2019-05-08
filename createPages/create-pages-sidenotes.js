const path = require('path');
const slash = require('slash');

function createSideNotesPages(result, createPage) {
  const sideNotesPostTemplate = path.join(__dirname, `../src/templates/blog.js`);
  const sideNotesPosts = result.data.sidenotes.edges;
  sideNotesPosts.forEach((edge) => {
    try {
      createPage({
        path: `/side-notes/${edge.node.slug}`,
        component: slash(sideNotesPostTemplate),
        context: {
          id: edge.node.id,
        },
      });
    } catch (e) {
      console.error(e)
    }
  });
}

function graphqlForSideNotes(graphql, createPage) {
  return graphql(`
  {
    sidenotes: allWordpressPost (filter: { categories: { elemMatch: {name: {eq: "blog"}}}}) {
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
    createSideNotesPages(result, createPage)
  });
}

exports.graphqlForSideNotes = graphqlForSideNotes;