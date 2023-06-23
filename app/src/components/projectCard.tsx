import { Project } from "../types";
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import urlFor from "../lib/sanity-image";

type Prop = {
  project: Project;
};

async function ProjectCard({ project }: Prop) {
  const { name, descriptionPT, descriptionEN, image, host, repository, _id } = project;
  return (
    <div className="w-full">
      <div className="h-full bg-gray-200 dark:bg-gray-800 bg-opacity-40 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative">
        <Image
          alt=""
          className="mb-4 rounded"
          src={`${urlFor(image)}`}
          height={400}
          width={700}
        />
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
          CATEGORY
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-600 dark:text-white mb-3">
          {name}
        </h1>
        <p className="leading-relaxed mb-3"></p>
        <Link href={`projects/${_id}`} className="text-blue-400 inline-flex items-center">
          <BiRightArrowAlt className="w-4 h-4 ml-2" />
        </Link>
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <a
            href={host}
            target={host}
            className="group text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50"
          >
            <CgWebsite className="group-hover:scale-110 w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
          </a>
          <a
            href={repository}
            target={repository}
            className="group text-gray-500 inline-flex items-center leading-none text-sm"
          >
            <FiGithub className="group-hover:scale-110 w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
