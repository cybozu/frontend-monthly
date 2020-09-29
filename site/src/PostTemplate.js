import React from "react"
import { graphql } from "gatsby"
import "github-markdown-css/github-markdown.css"
import { EventSummary } from "./components/EventSummary"
import { Layout } from "./Layout"
import { TeamIntroduceSlide } from "./components/TeamIntroduceSlide"

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

const PostTemplate = function (props) {
  const post = props.data.markdownRemark
  const members = props.data.allMembersJson.members

  return (
    <Layout title={`${post.frontmatter.title} #${post.frontmatter.no}`}>
      <article className={`${props.className} markdown-body`}>
        <h1>{`${post.frontmatter.title} #${post.frontmatter.no}`}</h1>
        <EventSummary frontmatter={post.frontmatter} members={members} />

        <h2>紹介記事</h2>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>

        <TeamIntroduceSlide />
      </article>
    </Layout>
  )
}

export default PostTemplate
