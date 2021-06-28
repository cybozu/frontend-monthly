export type Frontmatter = {
  title: string;
  slug: string;
  no: number;
  date: string;
  connpass: string;
  streamUrl: string;
  members: {
    name: string;
    link: string;
  }[];
  guest: {
    name: string;
    link: string;
  }[];
};
