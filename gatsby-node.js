// "use strict";

const { graphqlForProjects } = require("./createPages/create-pages-projects.js");
const { graphqlForSideNotes }  = require("./createPages/create-pages-sidenotes");
const { graphqlForProtected } = require("./createPages/create-pages-protected");
  
async function createIndividualPages(actions, graphql) {
  const { createPage } = actions;
  const promises = [graphqlForProjects(graphql, createPage), graphqlForSideNotes(graphql, createPage), graphqlForProtected(graphql, createPage)];
  const results = await Promise.all(promises.map(p => p.catch(e => e)));
  const validResults = results.filter(result => !(result instanceof Error));
  return validResults;
}

exports.createPages =  ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/work\/private/)) {
    page.matchPath = "/work/private/*"
    createPage(page)
  }
}


