import fs from "fs";
import path from "path";
import Image from "next/image";
import { markdownToHtml } from "../../lib/markdownToHtml";
import matter from "gray-matter";
import { Layout } from "../../components/Layout";
import { Frontmatter } from "../../types";
import { css } from "@emotion/css";
import { EventSummary } from "../../components/EventSummary";
import { Attendees } from "../../components/Attendees";
import { TeamIntroduceSlide } from "../../components/TeamIntroduceSlide";
import { PageHead } from "../../components/PageHead";

export default function PostPage({
  html,
  frontmatter,
}: {
  slug: string;
  md: string;
  html: string;
  frontmatter: Frontmatter;
}) {
  return (
    <Layout>
      <div className={style}>
        <PageHead frontmatter={frontmatter} />
        <h1>{`${frontmatter.title} #${frontmatter.no}`}</h1>
        <div>
          <Image src="/assets/img/header.png" width={659} height={229} />
        </div>
        <EventSummary frontmatter={frontmatter} />
        <Attendees {...frontmatter} />
        <div className={`markdown-body`} dangerouslySetInnerHTML={{ __html: html }} />
        <TeamIntroduceSlide />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const directories = await fs.promises.readdir(path.resolve(__dirname, "../../../../../posts"));
  const files = await Promise.all([
    await Promise.all(
      directories.map(async (directoryPath) => {
        const paths = await fs.promises.readdir(
          path.resolve(__dirname, "../../../../../posts", directoryPath)
        );
        return paths.map((filePath) => {
          return {
            params: {
              slug: `${directoryPath}-${filePath.replace(/\.[^/.]+$/, "")}`,
            },
          };
        });
      })
    ),
  ]);

  return {
    paths: files.flat(2),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [year, month] = slug.split("-");

  const md = await fs.promises.readFile(
    path.resolve(__dirname, "../../../../../posts", year, `${month}.md`),
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
  h3 {
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
