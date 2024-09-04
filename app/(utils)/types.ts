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

export type Post = {
  title: string;
  summary: string;
  body: string;
  _type: string;
  slug: { current: string };
  publishedAt: string;
};
