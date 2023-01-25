import CheckIcon from "./CheckIcon.tsx";

export default function Hero2() {
  return (
    <div class="container flex flex-col py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-start">
        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full " src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo" />
        </div>
        <div class="w-full lg:text-right lg:w-1/2 flex justify-start lg:items-end flex-col">
            <div class="lg:max-w-lg">
            <span class="text-gray-600 text-lg font-semibold dark:text-gray-400">Main features</span>
                <h1 class="text-3xl mt-4 font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                    Extremally Fast Sites
                </h1>
                <div class="mt-8 space-y-5 lg:float-right">
                    <p class="flex items-center lg:flex-row-reverse -mx-2 text-gray-700 dark:text-gray-200">
                        <CheckIcon />
                        <span class="mx-2">Clean and Simple Layout</span>
                    </p>
                    <p class="flex items-center lg:flex-row-reverse -mx-2 text-gray-700 dark:text-gray-200">
                        <CheckIcon />
                        <span class="mx-2">Just Copy Paste Codeing</span>
                    </p>
                    <p class="flex items-center lg:flex-row-reverse -mx-2 text-gray-700 dark:text-gray-200">
                        <CheckIcon />
                        <span class="mx-2">Easy to Use</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
