/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import fs from "fs";
import path from "path";
import { markdownToHtml } from "../../lib/markdownToHtml";
import matter from "gray-matter";
import { Layout } from "../../components/Layout";
import { PageHead } from "../../components/PageHead";
import { Frontmatter } from "../../types";

export default function DocsPage({
  frontmatter,
  html,
}: {
  frontmatter: Frontmatter;
  html: string;
}) {
  return (
    <Layout>
      <PageHead frontmatter={frontmatter} />
      <div css={style}>
        <h1>{frontmatter.title}</h1>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = await fs.promises.readdir(path.resolve(__dirname, "../../../../../docs"));
  return {
    paths: files.map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.[^/.]+$/, ""),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const md = await fs.promises.readFile(
    path.resolve(__dirname, "../../../../../docs", `${slug}.md`),
    "utf-8"
  );
  const { data, content } = matter(md);

  return {
    props: {
      frontmatter: data,
      html: await markdownToHtml(content),
    },
  };
}

const style = css`
  .markdown-body {
    img {
      border: 1px solid rgba(0, 0, 0, 0.1);
      max-width: 90%;
      height: auto;
      margin: 12px auto;
      display: block;
    }
    li > ul {
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
  h1 {
    margin-top: 0;
  }
  > h1:first-of-type {
    margin-top: 0 !important;
  }
  h2, h3 {
    position: relative;
    margin-left: -5px;
    padding-left: 5px;
    &:hover {
      .icon.icon-link {
        position: absolute;
        right: calc(100%);
        &:before {
          font-size: 0.75em;
          content: "🔗";
        }
      }
    }
  }
`;
