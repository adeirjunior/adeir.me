import Link from 'next/link'
import { getDictionary } from '../[lang]/dictionaries';

export async function Navbar({lang}: {lang: 'en' | 'pt'}) {

  const t = await getDictionary(lang);

  const navItems = {
    [`/${lang}`]: {
      name: t.nav.home,
    },
    [`/${lang}/blog`]: {
      name: t.nav.blog,
    },
    [`/${lang}/projects`]: {
      name: t.nav.projects,
    },
    [`/${lang}/reading`]: {
      name: t.nav.reading,
    },
    [`/${lang}/links`]: {
      name: t.nav.links,
    },
  };

  return (
    <aside className="-ml-[8px] mb-10 tracking-tight noprint">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
