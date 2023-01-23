// deno-lint-ignore-file no-explicit-any
import Layout from "../components/Layout.tsx";
import IconBrandFacebook from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-facebook.tsx"
import IconBrandBehance from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-behance.tsx"
import { useState, useEffect } from "preact/hooks";
import { runQuery } from "../libs/sanity.ts";
import { indexQuery } from "../libs/queries.ts";

export default function Home() {

  const [movies, setMovies] = useState<any>([]);
  const updateMovies = (movies: any[]) => {
    setMovies(movies);
  };

  useEffect(() => {
    runQuery(indexQuery, updateMovies);
  }, []);

  return (
    <Layout>
      <div class="relative mt-10 h-screen bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-10">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
          <div class="content">
            <div class="flex items-center gap-3">
              <hr class="w-10 bg-orange-500 border "/>
              <span class="md:text-[18px] font-medium text-gray-800 ">
                Fullstack Programmer
              </span>
            </div>
            <p class="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
              I'm Adeir Junior <br />
              Designer And Developer 
            </p>
            <p class="mt-5 md:text-md ">
              I'm creative designer based in Brazil, and I'm very passionate and
              dedicated to my <br class="hidden md:block" /> work.Your Satisfaction is my success
            </p>
            <div class="flex gap-4 mt-10">
              <button class="font-medium focus:outline-none text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-gray-500 to-gray-300 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Get In Touch
                <span class="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
              </button>
              <img class="cursor-pointer " src="/Assets/facebook.svg" alt="" />
              <img class="cursor-pointer " src="/Assets/linkedin.svg" alt="" />
              <img class="cursor-pointer " src="/Assets/behance.svg" alt="" />
              <IconBrandFacebook class=""/>
              <IconBrandBehance/>
            </div>
          </div>
          <div class="relative sm:mt-0 mt-10 px-6 sm:px-0">
            <img class="w-14  top-14 sm:-left-5 hidden sm:absolute" src="/Assets/figma.png" alt="" />
            <img class="w-32 hidden sm:absolute  bottom-0 sm:-left-10" src="/Assets/nextjs.png" alt="" />
            <img class="w-[600px] animate__animated animate__fadeInRight animate__delay-.5s" src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}