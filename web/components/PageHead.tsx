import Head from "next/head";

import metaJson from "../meta.json";
import { Frontmatter } from "../types";

export const PageHead = ({ frontmatter }: { frontmatter?: Frontmatter }) => {
  const title = frontmatter?.no ? `${metaJson.title} #${frontmatter.no}` : metaJson.title;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaJson.description} />
      <meta name="og:description" content={metaJson.description} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={`${metaJson.siteUrl}/assets/img/header.png`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaJson.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={metaJson.author} />
    </Head>
  );
};
