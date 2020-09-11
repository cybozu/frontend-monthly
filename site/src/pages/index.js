import React from "react"
import { graphql, Link } from "gatsby"

export const pageQuery = graphql`
  {
    allSitePage(filter: { path: { regex: "/posts/" } }) {
      posts: nodes {
        path
      }
    }
  }
`

export default function Home({ data }) {
  const { posts } = data.allSitePage
  return (
    <div className="markdown-body">
      <h1>Cybozu Frontend Monthly</h1>
      <div>
        <ul>
          {posts.map(({ path }, index) => (
            <li key={index}>
              <Link to={path}>{path.replace("/posts/", "")}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
