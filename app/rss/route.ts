import { baseUrl } from 'app/sitemap'
import { getBlogPosts } from 'app/(utils)/utils'

export async function GET() {
  let allBlogs = await getBlogPosts()

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post.slug.current}</link>
          <description>${post.summary || ""}</description>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <image>
            <url>${baseUrl}/og?title=${encodeURIComponent(post.title)}</url>
            <title>${post.title}</title>
            <link>${baseUrl}/blog/${post.slug.current}</link>
          </image>
        </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
