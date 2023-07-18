import Link from "next/link";
import Logo from "./icons/logo";
import { LangProp } from "../types";


export default async function Footer() {
  const year = new Date().getFullYear();
 
  return (
    <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div className="flex-1">
        <div className="flex items-center gap-1 dark:text-white">
          <Logo />
          <div className="font-bold text-2xl">Adeir</div>
        </div>
        <div className="text-gray-500 dark:text-gray-200">
          
        </div>
      </div>

      

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
