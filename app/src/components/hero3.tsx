import { FaRust } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiKotlin, SiTypescript } from "react-icons/si";

export default function Hero3() {
  return (
    <div className="container mx-auto space-y-8 text-gray-500 mt-14">
      <div>
        <span className="text-gray-600 text-lg font-semibold dark:text-gray-400">
          Skills
        </span>
        <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl dark:text-gray-200">
          I Have Experience at Some <br className="lg:block" hidden /> Languages
        </h2>
      </div>
      <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative group bg-white dark:bg-gray-700 transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8">
            <FaRust />
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 dark:text-gray-200 font-medium transition group-hover:text-yellow-600">
                Rust
              </h5>
            </div>
          </div>
        </div>
        <div className="relative group bg-white dark:bg-gray-700 transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8">
            <SiKotlin className="w-10" />
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 dark:text-gray-200 font-medium transition group-hover:text-yellow-600">
                Kotlin
              </h5>
            </div>
          </div>
        </div>
        <div className="relative group bg-white dark:bg-gray-700 transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8">
            <SiTypescript className="w-10" />
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 dark:text-gray-200 font-medium transition group-hover:text-yellow-600">
                Typescript
              </h5>
            </div>
          </div>
        </div>
        <div className="relative group bg-gray-100 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
          <div className="relative p-8 space-y-8 h-full bg-white dark:bg-gray-700 border-dashed transition duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-900 group-hover:scale-90">
            <FiGithub className="w-10 dark:text-white" />
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 dark:text-gray-200 font-medium transition group-hover:text-yellow-600">
                More skills
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                I have other skills as well, these can be seen on my github.
              </p>
            </div>
            <a
              href="https://github.com/adeirjunior"
              className="flex justify-between items-center dark:text-gray-200 group-hover:text-yellow-600"
            >
              <span className="text-sm">See more</span>
              <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
