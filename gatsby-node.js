// "use strict";

const { graphqlForProjects } = require("./createPages/create-pages-projects.js");
const { graphqlForSideNotes }  = require("./createPages/create-pages-sidenotes");
  
async function createIndividualPages(actions, graphql) {
  const { createPage } = actions;
  const promises = [graphqlForProjects(graphql, createPage), graphqlForSideNotes(graphql, createPage)];
  const results = await Promise.all(promises.map(p => p.catch(e => e)));
  const validResults = results.filter(result => !(result instanceof Error));
  return validResults;
}

exports.createPages =  ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}





// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/account/)) {
//     page.matchPath = "/account/*"

//     // Update the page.
//     createPage(page)
//   }
// }

