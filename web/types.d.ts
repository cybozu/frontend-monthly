export type Frontmatter = {
  title: string;
  slug: string;
  no: number;
  date: string;
  connpass: string;
  streamUrl: string;
  members: UserData[];
  guest: {
    name: string;
    link: string;
  }[];
};

type UserData = {
  name: string;
  link: string;
  photoUrl?: string;
};

export type AttendeesJson = {
  [name: string]: UserData;
}
