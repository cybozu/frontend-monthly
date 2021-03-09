const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const sources = await graphql(`
    {
      allMarkdownRemark {
        posts: nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  if (sources.errors) return
  const posts = sources.data.allMarkdownRemark.posts
  posts.forEach(({ id, frontmatter }) => {
    const outputPath = path.join("posts", frontmatter.slug)
    actions.createPage({
      path: outputPath,
      component: path.resolve(__dirname, "./src/PostTemplate.js"),
      context: {
        id,
      },
    })
  })
}
