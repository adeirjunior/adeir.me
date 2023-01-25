
import IconBrandFigma from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-figma.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-twitter.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";

export default function Hero1() {
  return (
    <div class="relative flex items-start justify-center sm:pt-0 mb-10">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
          <div class="content">
            <div class="flex items-center gap-3">
              <hr class="w-10 bg-orange-500 border "/>
              <span class="md:text-[18px] font-medium text-gray-800 dark:text-gray-400">
                Fullstack Programmer
              </span>
              <hr class="w-10 bg-orange-500 border "/>
            </div>
            <p class="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 dark:text-white">
              I'm Adeir Junior <br />
              Designer And Developer 
            </p>
            <p class="mt-5 md:text-md dark:text-white">
              I'm creative developer based in Brazil, and I'm very passionate and
              dedicated to my <br class="hidden md:block" /> work. Your Satisfaction is my success.
            </p>
            <div class="flex gap-4 my-10 items-center dark:text-white">
              <a href="contact">
                <button class="font-medium focus:outline-none text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-red-500 to-pink-300 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Get In Touch
                  <span class="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
                </button>
              </a>
              <IconBrandFigma />
              <IconBrandGithub />
              <IconBrandTwitter />
            </div>
          </div>
          <div class="relative sm:mt-0 mt-10 sm:px-0">
            <img class="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s" src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
          </div>
        </div>
    </div>
  )
}
