/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Cybozu Frontend Monthly",
    siteUrl: "https://cybozu.github.io/frontend-monthly",
    description: "Website for Cybozu Frontend Montyly",
    author: "Cybozu Frontend Expert Team",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/../posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "resources",
        path: `${__dirname}/../resources`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
  ],
}
