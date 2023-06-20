import Link from "next/link";
import { getDictionary } from "@/src/lib/dictionaries";
import Logo from "./icons/logo";

export default async function Footer({ lang }: any) {
  const year = new Date().getFullYear();
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div className="flex-1">
        <div className="flex items-center gap-1 dark:text-white">
          <Logo />
          <div className="font-bold text-2xl">Adeir</div>
        </div>
        <div className="text-gray-500 dark:text-gray-200">
          {dict.footer.siteSubTitle}
        </div>
      </div>

      {dict.footer.menu.map((item) => (
        <div className="mb-4" key={item.title}>
          <div className="font-bold dark:text-white text-base">{item.title}</div>
          <ul className="mt-2 text-base">
            {item.children.map((child) => {
              return (
                <li className="mt-2" key={child.name}>
                  {item.title === 'Menu' && child.name !== 'Blog' ? (
                    <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
                    href={child.href}
                  >
                    {child.name}
                  </Link>
                  ) : (<a
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
                    href={child.href}
                    target={child.name}
                  >
                    {child.name}
                  </a>)
                  }
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="text-gray-500 space-y-2 dark:text-gray-400">
        <div className="text-xs">
          Copyright © {year} Adeir
          <br />
          All right reserved.
        </div>
      </div>
    </div>
  );
}
