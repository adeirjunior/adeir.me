import { Octokit } from "octokit";
import { GithubRepository } from "../types";

const owner = process.env.GITHUB_OWNER;
const auth = process.env.GITHUB_AUTH;

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

const fetchRepositoryReadme = async (repository: any) => {
  try {
    const response = await octokit.request(
      `GET /repos/{owner}/${repository.name}/contents/README.md`,
      {
        owner,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return atob(response.data.content);
  } catch (error) {
    return null; // Return null or any other default value if needed
  }
};

const fetchRepositoryLanguages = async (repository: any) => {
  try {
    const response = await octokit.request(`GET ${repository.languages_url}`, {
      owner,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return Object.keys(response.data);
  } catch (error) {
    return null; // Return null or any other default value if needed
  }
};

const loadGithubRepositories = async () => {
  try {
    const repositories = await fetchRepositories();
    const repositoriesWithReadme: GithubRepository[] = await Promise.all(
      repositories.map(async (repo: any) => {
        const readmeContent = await fetchRepositoryReadme(repo);
        const languagesResponse = await fetchRepositoryLanguages(repo);
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

    return repositoriesWithReadme
  } catch (error) {
    console.error(error);
  }
};

export default loadGithubRepositories
