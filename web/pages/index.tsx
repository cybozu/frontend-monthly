/** @jsxImportSource @emotion/react */
import fs from "fs";
import path from "path";
import Link from "next/link";
import { css } from "@emotion/react";
import matter from "gray-matter";
import dayjs from "dayjs";
import { Layout } from "../components/Layout";
import { extractHeadings } from "../lib/extractHeadings";
import { PageHead } from "../components/PageHead";

type Frontmatter = {
  title: string;
  slug: string;
  no: number;
  date: string;
};

export default function Home({
  posts,
}: {
  posts: { path: string; frontmatter: Frontmatter; headings: string[] }[];
}) {
  return (
    <Layout>
      <PageHead />
      <div css={style}>
        <h1>Cybozu Frontend Monthly</h1>
        <div>
          <ul className="posts">
            {posts.map(({ path: postPath, frontmatter, headings }) => {
              return (
                <li className="post" key={postPath}>
                  <Link href={postPath}>
                    <a>
                      <h2>{`#${frontmatter.no} - ${frontmatter.date}`}</h2>
                      <ul>
                        {headings.slice(0, 8).map((text) => (
                          <li key={text}>{text}</li>
                        ))}
                        <li>他</li>
                      </ul>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const postsDir = path.resolve(__dirname, "../../../../posts");
  const directories = await fs.promises.readdir(postsDir);
  const files = await Promise.all([
    await Promise.all(
      directories.map(async (directoryPath) => {
        const paths = await fs.promises.readdir(path.join(postsDir, directoryPath));
        return await Promise.all(
          paths.map(async (filePath) => {
            const markdownFile = await fs.promises.readFile(
              path.join(postsDir, directoryPath, filePath),
              "utf-8"
            );
            const { data, content } = matter(markdownFile);
            return {
              path: `/posts/${directoryPath}-${filePath.replace(/\.[^/.]+$/, "")}`,
              headings: extractHeadings(markdownFile),
              frontmatter: {
                title: data.title,
                slug: data.slug,
                no: data.no,
                date: dayjs(data.date).format("YYYY/MM/DD"),
              },
            };
          })
        );
      })
    ),
  ]);

  return {
    props: {
      posts: files.flat(2).reverse(),
    },
  };
};

const style = css`
  .posts {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .post {
    a {
      color: #0366d6;
      text-decoration: none;
      display: block;
      padding-bottom: 24px;
      &:hover {
        text-decoration: none;
      }
    }
    h2 {
      border: none;
    }
    ul {
      color: initial;
    }
  }
  .post + .post {
    border-top: 1px solid #eaecef;
  }
  .headings {
    color: #24292e;
  }
`;
