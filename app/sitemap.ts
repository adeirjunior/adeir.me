import { MetadataRoute } from "next";
import loadGithubRepositories from "./src/lib/load-github-repositories";
import { GithubRepository } from "./src/types";

type SitemapItem = {
  url: string;
  lastModified: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const URL = "https://www.adeir.me/"

  const response = await loadGithubRepositories();

  const repositories: SitemapItem[] = response.map(({name}: GithubRepository) => ({
    url: `${URL}projects/${name}`,
    lastModified: new Date()
  }))

  const paths: SitemapItem[] = ["projects", "", "contact"].map((path: string) => ({
    url: `${URL}${path}`,
    lastModified: new Date()
  }))

  return [...paths, ...repositories];
}
