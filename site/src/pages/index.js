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
    <div>
      <h1>Frontend Monthly</h1>
      <div>
        <ol>
          {posts.map(({ path }, index) => (
            <li key={index}>
              <Link to={path}>{path.replace("/posts/", "")}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
