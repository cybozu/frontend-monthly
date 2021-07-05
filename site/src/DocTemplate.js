import React from "react"
import { graphql } from "gatsby"
import "github-markdown-css/github-markdown.css"
import { Layout } from "./Layout"
import styled from "@emotion/styled"

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Article = ({ doc, className }) => {
  return (
    <article className={`${className} markdown-body`}>
      <h1>{doc.frontmatter.title}</h1>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: doc.html }}
      ></div>
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
    li > p {
      margin: 8px 0;
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

const DocTemplate = function (props) {
  const doc = props.data.markdownRemark

  return (
    <Layout title={doc.frontmatter.title}>
      <StyledArticle doc={doc} />
    </Layout>
  )
}

export default DocTemplate
