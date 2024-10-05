'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const path = usePathname()
  const router = useRouter()

  function setLanguageCookie(locale: 'en' | 'pt') {
    document.cookie = `i18nlang=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`; // Salva o cookie por 1 ano
  }

  // Função para trocar de idioma
  function changeLanguage(locale: 'en' | 'pt') {
    setLanguageCookie(locale);
    const currentPath = path.split("/").slice(2); // Remove a parte do idioma da URL
    const newPath = `/${locale}/${currentPath.join("/")}`; // Cria a nova URL com o novo idioma
    router.push(newPath); // Navega para a nova URL
  }

  return (
    <footer className="mb-6 noprint">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adeirjunior"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>
      <div className="flex justify-between items-center mt-8">
        <p className="text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} MIT Licensed
        </p>
        <ul className="flex items-center gap-2">
          <li>
            <button
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              onClick={() => changeLanguage('en')}
            >
              en
            </button>
          </li>
          <li>
            <button
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              onClick={() => changeLanguage('pt')}
            >
              pt
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
