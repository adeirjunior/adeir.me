"use server";

import { Octokit } from "octokit";
import { GithubRepository } from "./types";

const owner = process.env.GITHUB_OWNER as string;
const auth = process.env.GITHUB_AUTH as string;

const octokit = new Octokit({
  auth,
});

const fetchRepositories = async () => {
  const response = await octokit.request("GET /users/{owner}/repos", {
    owner,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return response.data;
};

export const fetchRepositoryReadme = async (
  repo: string
): Promise<string | null> => {
  try {
    const response = await octokit.request(
      `GET /repos/{owner}/{repo}/contents/README.md`,
      {
        owner,
        repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    // Decode the base64 content
    const content = Buffer.from(response.data.content, "base64").toString(
      "utf-8"
    );

    // Return the content as markdown
    return content;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchRepositoryLanguages = async (repo: string) => {
  
  try {
    const response = await octokit.request(
      `GET /repos/{owner}/{repo}/languages`,
      {
        owner,
        repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return Object.keys(response.data);
  } catch (error) {
    return null;
  }
};

const loadGithubRepositories: () => Promise<GithubRepository[]> = async () => {
  try {
    const repositories = await fetchRepositories();

    // Filter out the repository with the name 'adeirjunior'
    const filteredRepositories = repositories.filter(
      (repo: any) => repo.name !== "adeirjunior"
    );

    const repositoriesWithReadme: GithubRepository[] = await Promise.all(
      filteredRepositories.map(async (repo: any) => {
        const readmeContent = await fetchRepositoryReadme(repo.name); // Passando o nome do repositório
        const languagesResponse = await fetchRepositoryLanguages(repo.name); // Passando o nome do repositório
        return {
          name: repo.name,
          url: repo.html_url,
          homepage: repo.homepage,
          description: repo.description,
          mainLanguage: repo.language,
          languages: languagesResponse,
          readme: readmeContent,
          repository: repo.svn_url,
        };
      })
    );

    return repositoriesWithReadme;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default loadGithubRepositories;
