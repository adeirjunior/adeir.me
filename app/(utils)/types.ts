export type GithubRepository = {
  name: string;
  url: string;
  homepage: string;
  description: string;
  mainLanguage: string;
  languages: string[];
  readme: string;
  repository: string;
};

export type PostBody = {
  alt: string;
  _type: string;
  style: string;
  children: { text: string }[];
};

export type Post = {
  title: string;
  summary: string;
  body: PostBody[];
  _type: string;
  slug: { current: string };
  publishedAt: string;
};
