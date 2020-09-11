const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const sources = await graphql(`
    {
      allMarkdownRemark {
        posts: nodes {
          id
          frontmatter {
            date(formatString: "YYYY-MM")
          }
        }
      }
    }
  `)
  if (sources.errors) return
  const posts = sources.data.allMarkdownRemark.posts
  posts.forEach(({ id, frontmatter }) => {
    const outputPath = path.join("posts", frontmatter.date)
    actions.createPage({
      path: outputPath,
      component: path.resolve(__dirname, "./src/PostTemplate.js"),
      context: {
        id,
      },
    })
  })
}
