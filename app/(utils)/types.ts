export type GithubRepository = {
  name: string;
  url: string;
  homepage: string;
  description: string;
  mainLanguage: string;
  languages: string[];
  readme: string;
  repository: string;
  createdAt: string;
  updatedAt: string;
  siteVisible: boolean;
};

export type Post = {
  title: string;
  summary: string;
  body: string;
  _type: string;
  slug: { current: string };
  publishedAt: string;
};

export type Link = {
  title: string;
  url: string;
  order: number;
};

export type Book = {
  name: string;
  href: string;
  image: string;
  category: string;
};

export interface Lang { lang: 'en' | 'pt' }
