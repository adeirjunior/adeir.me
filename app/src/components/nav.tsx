import Link from 'next/link';
import { getDictionary } from '@/src/lib/dictionaries'

async function Nav({lang}: any) {
  const dict = await getDictionary(lang)

  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="mobile-menu-language-select"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="/"
            className={`block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 rounded md:bg-transparent md:hover:text-yellow-600 md:hover:bg-transparent md:dark:hover:bg-transparent md:p-0 `}
            aria-current="page"
          >
            {dict.nav.home}
          </Link>
        </li>
        <li>
          <Link
            href="projects"
            className={`block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 rounded md:bg-transparent md:hover:text-yellow-600 md:hover:bg-transparent md:dark:hover:bg-transparent md:p-0 `}
          >
            {dict.nav.project}
          </Link>
        </li>
        <li>
          <Link
            href="contact"
            className={`block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 rounded md:bg-transparent md:hover:text-yellow-600 md:hover:bg-transparent md:dark:hover:bg-transparent md:p-0 `}
          >
            {dict.nav.contact}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
