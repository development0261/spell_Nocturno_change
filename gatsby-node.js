/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const PATH = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const resultTemplate = PATH.resolve("./src/templates/result.js")
  const res = await graphql(`
    query {
      allAllJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `) // Query comes here
  console.log("create page", res.data.allAllJson.edges)

  res.data.allAllJson.edges.forEach(edge => {
    createPage({
      component: resultTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  // console.log("res", res)
}
