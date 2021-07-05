import remark from "remark";
import html from "remark-html";
import externalLinks from "remark-external-links";
const autoLinkHeadings = require("remark-autolink-headings");
const slug = require("remark-slug");
const prism = require("remark-prism");
const gfm = require("remark-gfm");

export const markdownToHtml = async (md: string) => {
  const result = await remark()
    .use(externalLinks, { target: "_blank", rel: ["nofollow"] })
    .use(slug)
    .use(autoLinkHeadings)
    .use(gfm)
    .use(prism)
    .use(html)
    .process(md);

  return result.toString();
};
