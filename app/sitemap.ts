import { getBlogPosts } from "./(utils)/utils"

export const baseUrl = process.env.BASE_URL as string

export default async function sitemap() {
  const data = await getBlogPosts()

  const blogs = data.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
