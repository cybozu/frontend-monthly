import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import { Head } from "../components/Head"

export const pageQuery = graphql`
  {
    allSitePage(filter: { path: { regex: "/posts/" } }) {
      pages: nodes {
        path
        context {
          id
        }
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      posts: nodes {
        id
        frontmatter {
          title
          no
          date
          formattedDate: date(formatString: "YYYY/MM/DD")
        }
        headings(depth: h2) {
          value
        }
      }
    }
  }
`

const Component = ({ data, className }) => {
  const { pages } = data.allSitePage
  const { posts } = data.allMarkdownRemark

  pages.forEach(({ path, context: { id } }) => {
    const index = posts.findIndex(post => post.id === id)
    posts[index].path = path
  })

  return (
    <div className={`${className} markdown-body`}>
      <Head />
      <h1>Cybozu Frontend Monthly</h1>
      <div>
        <ul className="posts">
          {posts.map(
            ({
              path,
              frontmatter: { formattedDate, title, no, date },
              headings,
            }) => (
              <li key={date}>
                <Link to={path} className="post">
                  <h2>
                    #{no} - {formattedDate}
                  </h2>
                  <ul className="headings">
                    {headings.slice(0, 8).map(({ value }) => (
                      <li
                        key={value}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    ))}
                    <li>他</li>
                  </ul>
                </Link>
              </li>
            )
          )}
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
  .posts {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .post {
    display: block;
    padding-bottom: 24px;
    border-bottom: 1px solid #eaecef;
    h2 {
      border: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
  .headings {
    color: #000;
  }
`

export default StyledComponent
