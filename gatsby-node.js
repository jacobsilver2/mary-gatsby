process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const { graphqlForProjects } = require("./createPages/create-pages-projects.js");
const { graphqlForSideNotes }  = require("./createPages/create-pages-sidenotes");
  
function createIndividualPages(actions, graphql) {
  const { createPage } = actions;
  return Promise.all([
    graphqlForProjects(graphql, createPage),
    graphqlForSideNotes(graphql, createPage),
  ]);
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}

