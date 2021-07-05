/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import fs from "fs";
import path from "path";
import { markdownToHtml } from "../../lib/markdownToHtml";
import matter from "gray-matter";
import { Layout } from "../../components/Layout";
import { Frontmatter } from "../../types";
import { EventSummary } from "../../components/EventSummary";
import { Attendees } from "../../components/Attendees";
import { TeamIntroduceSlide } from "../../components/TeamIntroduceSlide";
import { PageHead } from "../../components/PageHead";
import attendeesJson from "../../attendees.json";
import { withPrefix } from "../../lib/withPrefix";
const fetch = require("node-fetch");

export default function PostPage({
  html,
  frontmatter,
  membersPhotoUrl,
}: {
  html: string;
  frontmatter: Frontmatter;
  membersPhotoUrl: { [name: string]: string };
}) {
  return (
    <Layout>
      <PageHead frontmatter={frontmatter} />
      <article css={style}>
        <h1>{`${frontmatter.title} #${frontmatter.no}`}</h1>
        <div>
          <img src={withPrefix("/assets/img/header.png")} width={659} height={229} alt="" />
        </div>
        <EventSummary frontmatter={frontmatter} />
        <Attendees {...frontmatter} membersPhotoUrl={membersPhotoUrl} />
        <hr />
        <h2>紹介記事</h2>
        <div className={`markdown-body`} dangerouslySetInnerHTML={{ __html: html }} />
        <TeamIntroduceSlide />
      </article>
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

  const allMembers = data.members.concat(data.guest || []);

  const membersPhotoUrl = await Promise.all<Promise<{ [name: string]: string }>>(
    allMembers.map(async ({ name, link }: { name: keyof typeof attendeesJson; link: string }) => {
      if (!attendeesJson[name] || !attendeesJson[name].photoUrl) {
        return { [name]: "/assets/img/user.png" };
      }
      const fileName = path.basename(attendeesJson[name].photoUrl);
      const filePath = path.join(__dirname, "../../../../public/assets/photo", fileName);
      const assetPath = `/assets/photo/${fileName}`;

      if (
        await fs.promises
          .stat(filePath)
          .then(() => true)
          .catch(() => false)
      ) {
        return { [name]: assetPath };
      }

      return fetch(attendeesJson[name].photoUrl)
        .then((response: any) => response.buffer())
        .then(async (image: Buffer) => {
          await fs.promises.writeFile(
            path.join(__dirname, "../../../../public/assets/photo", fileName),
            image
          );
          return { [name]: assetPath };
        });
    })
  );

  return {
    props: {
      membersPhotoUrl: membersPhotoUrl.reduce((acc, value) => {
        return {
          ...acc,
          ...value,
        };
      }, {}),
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
  h1 {
    margin-top: 0;
  }
  > h1:first-of-type {
    margin-top: 0 !important;
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
