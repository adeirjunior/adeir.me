import { ComponentChildren } from "preact";
import { footerMenu as menus } from "../libs/menus.ts";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
type Props = {
  children?: ComponentChildren;
};

export default function Footer({ children }: Props) {

  const year = new Date().getFullYear()

  return (
    <div class="flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1 dark:text-white">
          <LemonIcon class="inline-block" />
          <div class="font-bold text-2xl">
            Adeir
          </div>
        </div>
        <div class="text-gray-500 dark:text-gray-200">
          Fullstack Programmer
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold dark:text-white">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => {
              if(child.name === "Blog") {
                return (
                  <li class="mt-2" key={child.name}>
                    <a
                      class="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
                      href={child.href}
                      target={child.name}
                    >
                      {child.name}
                    </a>
                  </li>
                )
              }
              return (
                <li class="mt-2" key={child.name}>
                  <a
                    class="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
                    href={child.href}
                  >
                    {child.name}
                  </a>
                </li>
              )
              })}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2 dark:text-gray-400">
        <div class="text-xs">
          Copyright © {year} Adeir<br />
          All right reserved.
        </div>
      </div>
    </div>
  );
}
