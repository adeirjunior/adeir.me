import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";

export default function Hero3() {
  return (
    <div class="container mx-auto space-y-8 text-gray-500 mt-14">
        <div>
            <span class="text-gray-600 text-lg font-semibold dark:text-gray-400">Skills</span>
            <h2 class="mt-4 text-2xl text-gray-900 font-bold md:text-4xl dark:text-gray-200">I Have Experience at Some <br class="lg:block" hidden /> Languages</h2>
        </div>
        <div class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div class="relative group bg-white dark:bg-gray-700 transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <img src="/rust-logo-blk.svg" class="w-10" width="50" height="50" alt="burger illustration" />
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 dark:text-gray-200 font-medium transition group-hover:text-yellow-600">Rust</h5>
                    </div>
                </div>
            </div>
            <div class="relative group bg-white dark:bg-gray-700 transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <img src="/Kotlin_Icon.svg" class="w-10" width="50" height="50" alt="burger illustration" />
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 dark:text-gray-200 font-medium transition group-hover:text-yellow-600">Kotlin</h5>
                    </div>
                </div>
            </div>
            <div class="relative group bg-white dark:bg-gray-700 transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <img src="/Typescript_logo_2020.svg" class="w-10" width="50" height="50" alt="burger illustration" />
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 dark:text-gray-200 font-medium transition group-hover:text-yellow-600">Typescript</h5>
                    </div>
                </div>
            </div>
            <div class="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div class="relative p-8 space-y-8 dark:bg-gray-700 border-dashed transition duration-300 group-hover:bg-gray-100 group-hover:scale-90">
                    <IconBrandGithub class="w-10" />
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 dark:text-gray-200 font-medium transition group-hover:text-yellow-600">More skills</h5>
                        <p class="text-sm text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-600">I have other skills as well, these can be seen on my github.</p>
                    </div>
                    <a href="https://github.com/adeirjunior" class="flex justify-between items-center dark:text-gray-200 group-hover:text-yellow-600">
                        <span class="text-sm">See more</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
