const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
                node {
                  slug
                }
              }
        }
      }
      `)
      console.log(JSON.stringify(response))
    response.data.allContentfulBlogPost.edges.nodes.forEach((node) => {
        createPage({
            path: `/${node.slug}`,
            component: path.resolve("./src/templates/blog.tsx")
            ,
            context: {
                slug: node.slug
            }
        })

    });
}