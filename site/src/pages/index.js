import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"

export const pageQuery = graphql`
  {
    allSitePage(filter: { path: { regex: "/posts/" } }) {
      posts: nodes {
        path
      }
    }
  }
`

const Component = ({ data, className }) => {
  const { posts } = data.allSitePage
  return (
    <div className={`${className} markdown-body`}>
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

const StyledComponent = styled(Component)`
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 15px 45px;

  @media (max-width: 767px) {
    padding: 15px;
  }
`

export default StyledComponent
