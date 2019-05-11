const { graphqlForProjects } = require("./createPages/create-pages-projects.js");
const { graphqlForSideNotes }  = require("./createPages/create-pages-sidenotes");
  
async function createIndividualPages(actions, graphql) {
  const { createPage } = actions;
  const promises = [graphqlForProjects(graphql, createPage), graphqlForSideNotes(graphql, createPage)];
  const results = await Promise.all(promises.map(p => p.catch(e => e)));
  const validResults = results.filter(result => !(result instanceof Error));
  return validResults;
}

// exports.createPages = async ({ graphql, actions }) => {
//   await graphqlForProjects(graphql, actions.createPage);
//   await graphqlForSideNotes(graphql, actions.createPage)
// }

exports.createPages =  ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}



