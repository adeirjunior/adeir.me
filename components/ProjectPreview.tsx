// deno-lint-ignore-file no-explicit-any
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";

type Props = {
  title?: string,
  overview?: any,
  releaseDate?: string,
  poster?: {
    asset: {
      _ref: string
    }
  }
}

export default function ProjectPreview({ title, overview, releaseDate, poster }: Props) {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/hero-bg.webp');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Project Component Beta</h1>
        <p class="text-xl max-w-lg text-blue-100">
          This is a Project made by me, click bellow to access the project site or it's Github repository
        </p>
      </div>

      <div>
        <a
          href="#"
          class="block mt-4 text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          GitHub{" "}
          <BrandGithub class="ml-2" />
        </a>
        <a
          href="#"
          class="block mt-4 transition-colors text-blue-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
        >
          View Project{" "}
          <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
