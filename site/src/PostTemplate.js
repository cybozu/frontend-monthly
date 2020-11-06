import React from "react"
import { graphql } from "gatsby"
import "github-markdown-css/github-markdown.css"
import { EventSummary } from "./components/EventSummary"
import { Layout } from "./Layout"
import { TeamIntroduceSlide } from "./components/TeamIntroduceSlide"
import styled from "@emotion/styled"

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        no
        connpass
        streamUrl
        hashTag
        members {
          name
          link
        }
        guest {
          name
          link
        }
      }
    }
  }
`

const Article = ({ post, className }) => {
  return (
    <article className={`${className} markdown-body`}>
      <h1>{`${post.frontmatter.title} #${post.frontmatter.no}`}</h1>
      <EventSummary
        frontmatter={post.frontmatter}
        members={post.frontmatter.members}
      />

      <h2>紹介記事</h2>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>

      <TeamIntroduceSlide />
    </article>
  )
}

const StyledArticle = styled(Article)`
  .markdown-body {
    img {
      border: 1px solid rgba(0, 0, 0, 0.1);
      max-width: 90%;
      height: auto;
      margin: 12px auto;
      display: block;
    }
  }
  @media screen and (max-width: 420px) {
    .markdown-body {
      font-size: 14px;
      li > p {
        margin: 4px 0;
      }
    }
  }
`

const PostTemplate = function (props) {
  const post = props.data.markdownRemark

  return (
    <Layout title={`${post.frontmatter.title} #${post.frontmatter.no}`}>
      <StyledArticle post={post} />
    </Layout>
  )
}

export default PostTemplate
