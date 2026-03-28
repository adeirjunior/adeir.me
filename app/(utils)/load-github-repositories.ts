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

const fetchRepository = async (name: string) => {
  const response = await octokit.request(`GET /repos/{owner}/${name}`, {
    owner,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    }
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

    const content = Buffer.from(response.data.content, "base64").toString(
      "utf-8"
    );

    return content;
  } catch (error) {
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

const fetchRepositoryVariable = async (repo: string, variableName: string): Promise<string | null> => {
  try {
    const response = await octokit.request(
      `GET /repos/{owner}/{repo}/actions/variables/{variable_name}`,
      {
        owner,
        repo,
        variable_name: variableName,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return response.data.value;
  } catch (error) {
    return null;
  }
};

const loadGithubRepositories: () => Promise<GithubRepository[]> = async () => {
  try {
    const repositories = await fetchRepositories();

    const filteredRepositories = repositories.filter(
      (repo: any) => repo.name !== "adeirjunior" && repo.name !== ".github"
    );

    const repositoriesWithDetails: GithubRepository[] = await Promise.all(
      filteredRepositories.map(async (repo: any) => {
        const [readmeContent, languagesResponse, siteVisibleVar] = await Promise.all([
          fetchRepositoryReadme(repo.name),
          fetchRepositoryLanguages(repo.name),
          fetchRepositoryVariable(repo.name, 'site_visible')
        ]);

        return {
          name: repo.name,
          url: repo.html_url,
          homepage: repo.homepage,
          description: repo.description,
          mainLanguage: repo.language,
          languages: languagesResponse || [],
          readme: readmeContent || "",
          repository: repo.svn_url,
          createdAt: repo.created_at,
          updatedAt: repo.pushed_at,
          siteVisible: siteVisibleVar === "true",
        };
      })
    );

    return repositoriesWithDetails;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const loadGithubRepository: (
  repositoryName: string
) => Promise<GithubRepository> = async (repositoryName) => {
  try {
    const repo = await fetchRepository(repositoryName);

    const [readmeContent, languagesResponse, siteVisibleVar] = await Promise.all([
      fetchRepositoryReadme(repo.name),
      fetchRepositoryLanguages(repo.name),
      fetchRepositoryVariable(repo.name, 'site_visible')
    ]);

    const repositoryWithDetails: GithubRepository = {
      name: repo.name,
      url: repo.html_url,
      homepage: repo.homepage,
      description: repo.description,
      mainLanguage: repo.language,
      languages: languagesResponse || [],
      readme: readmeContent || "",
      repository: repo.svn_url,
      createdAt: repo.created_at,
      updatedAt: repo.pushed_at,
      siteVisible: siteVisibleVar === "true",
    };

    return repositoryWithDetails;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default loadGithubRepositories;
