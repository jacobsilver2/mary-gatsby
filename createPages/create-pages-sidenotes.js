const path = require('path');
const slash = require('slash');

function createSideNotesPages(result, createPage) {
  const sideNotesPostTemplate = path.join(__dirname, `../src/templates/blog.js`);
  const sideNotesPosts = result.data.sidenotes.edges;
  sideNotesPosts.forEach((edge) => {
    createPage({
      path: `/side-notes/${edge.node.slug}`,
      component: slash(sideNotesPostTemplate),
      context: {
        id: edge.node.id,
      },
    });
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
          excerpt
          date(formatString: "DD, MMM YYYY")
          categories {
              id
              name
          }
          slug
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
    createSideNotesPages(result, createPage)
  });
}

exports.graphqlForSideNotes = graphqlForSideNotes;