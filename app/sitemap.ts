import loadGithubRepositories from "./(utils)/load-github-repositories";
import { getBlogPosts } from "./(utils)/utils"

export const baseUrl = process.env.BASE_URL as string

export default async function sitemap() {
  const data = await getBlogPosts()
  const projectsData = await loadGithubRepositories();

  const blogs = data.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post.publishedAt,
  }))

   const projects = projectsData.map((project) => ({
     url: `${baseUrl}/projects/${project.name}`,
     lastModified: new Date().toISOString().split("T")[0],
   }));

  const routes = ['', '/blog', '/projects', '/links', "/reading"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs, ...projects];
}
