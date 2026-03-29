"use server";

import { Octokit } from "octokit";
import { GithubRepository } from "./types";

const owner = process.env.GITHUB_OWNER as string;
const auth = process.env.GITHUB_AUTH as string;

const octokit = new Octokit({
  auth,
});

const fetchRepositories = async () => {
  const response = await octokit.request("GET /user/repos", {
    type: "owner",
    sort: "updated",
    per_page: 100,
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

const fetchRepositoryReadme = async (repo: string): Promise<string | null> => {
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

    return Buffer.from(response.data.content, "base64").toString("utf-8");
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
      `GET /repos/{owner}/{repo}/actions/variables/{name}`,
      {
        owner,
        repo,
        name: variableName,
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

    // Filtro inicial de nomes e sistema
    const filteredRepositories = repositories.filter(
      (repo: any) => repo.name !== "adeirjunior" && repo.name !== ".github"
    );

    // Busca SITE_VISIBLE para todos os repositórios
    const reposWithVisibility = await Promise.all(
      filteredRepositories.map(async (repo: any) => {
        const siteVisibleVar = await fetchRepositoryVariable(repo.name, 'SITE_VISIBLE');
        return { repo, isVisible: siteVisibleVar === "true" };
      })
    );

    // Mantém apenas os visíveis
    const visibleRepos = reposWithVisibility.filter(item => item.isVisible).map(item => item.repo);

    // Busca detalhes apenas para os repositórios que serão exibidos
    const repositoriesWithDetails: GithubRepository[] = await Promise.all(
      visibleRepos.map(async (repo: any) => {
        const [readmeContent, languagesResponse] = await Promise.all([
          fetchRepositoryReadme(repo.name),
          fetchRepositoryLanguages(repo.name),
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
          isPrivate: repo.private === true,
        };
      })
    );

    return repositoriesWithDetails;
  } catch (error) {
    return [];
  }
};

export const loadGithubRepository: (
  repositoryName: string
) => Promise<GithubRepository> = async (repositoryName) => {
  const repo = await fetchRepository(repositoryName);
  const siteVisibleVar = await fetchRepositoryVariable(repo.name, 'SITE_VISIBLE');

  if (siteVisibleVar !== "true") {
    throw new Error("Repository not allowed for site visibility");
  }

  const [readmeContent, languagesResponse] = await Promise.all([
    fetchRepositoryReadme(repo.name),
    fetchRepositoryLanguages(repo.name),
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
    isPrivate: repo.private === true,
  };
};

export default loadGithubRepositories;
