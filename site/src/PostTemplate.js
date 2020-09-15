import React from "react"
import { graphql } from "gatsby"
import "github-markdown-css/github-markdown.css"
import styled from "@emotion/styled"
import { EventSummary } from "./components/EventSummary"
import { Head } from "./components/Head"

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        no
        connpass
        hashTag
        guest {
          name
          link
        }
      }
    }
    allMembersJson {
      members: nodes {
        name
        link
      }
    }
  }
`

const Component = function (props) {
  const post = props.data.markdownRemark
  const members = props.data.allMembersJson.members

  return (
    <article className={`${props.className} markdown-body`}>
      <Head title={`${post.frontmatter.title} #${post.frontmatter.no}`} />
      <h1>{`${post.frontmatter.title} #${post.frontmatter.no}`}</h1>
      <EventSummary frontmatter={post.frontmatter} members={members} />

      <h2>紹介記事</h2>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </article>
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
