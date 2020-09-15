/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/frontend-monthly",
  siteMetadata: {
    title: "Cybozu Frontend Monthly",
    siteUrl: "https://cybozu.github.io",
    description:
      "サイボウズのフロントエンドエキスパートチームが月イチでお届けするフロントエンド情報",
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
