const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const sources = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      docs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/docs/" } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  if (sources.errors) return
  const posts = sources.data.posts.nodes
  const postTemplate = path.resolve(__dirname, "./src/PostTemplate.js")
  posts.forEach(({ id, frontmatter }) => {
    const outputPath = path.join("posts", frontmatter.slug)
    actions.createPage({
      path: outputPath,
      component: postTemplate,
      context: {
        id,
      },
    })
  })
  const docs = sources.data.docs.nodes
  const docTemplate = path.resolve(__dirname, "./src/DocTemplate.js")
  docs.forEach(({ id, frontmatter }) => {
    const outputPath = path.join("docs", frontmatter.slug)
    actions.createPage({
      path: outputPath,
      component: docTemplate,
      context: {
        id,
      },
    })
  })
}
