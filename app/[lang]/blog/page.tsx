import { BlogPosts } from 'app/(components)/posts'
import { getDictionary } from '../dictionaries'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function page({ params }: { params: { lang: 'en' | 'pt' } }) {
  const { blog } = await getDictionary(params.lang)

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{blog.my_blog}</h1>
      {params.lang === 'pt' && <p>Todos os posts abaixo estão escritos em inglês. Para não gastar tempo traduzindo-os em dois idiomas, decidi deixá-los assim.</p>}
      <BlogPosts lang={params.lang} />
    </section>
  )
}
