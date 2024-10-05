import { formatDate, getBlogPosts } from 'app/(utils)/utils'
import Link from 'next/link'

export async function BlogPosts({lang}: {lang: 'en' | 'pt'}) {
  const allBlogs = await getBlogPosts()

  return (
    <div className='my-4'>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.publishedAt) > new Date(b.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug.current}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug.current}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.publishedAt, false, lang)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
