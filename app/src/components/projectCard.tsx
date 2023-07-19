"use client";

import { GithubRepository, Project } from "../types";
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

type Prop = {
  project: GithubRepository;
};

async function ProjectCard({ project }: Prop) {
  const {
    name,
    description,
    homepage,
    languages,
    mainLanguage,
    readme,
    url,
    repository,
  } = project;
  return (
    <div className="w-full">
      <div className="h-full bg-gray-200 dark:bg-gray-800 bg-opacity-40 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
          {mainLanguage}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-600 dark:text-white mb-3">
          {name}
        </h1>
        <p className="leading-relaxed mb-3"></p>
        <Link
          href={`projects/1`}
          className="text-blue-400 inline-flex items-center"
        >
          more
          <BiRightArrowAlt className="w-4 h-4 ml-2" />
        </Link>
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <a
            title="a"
            href={homepage}
            target={homepage}
            className="group text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50"
          >
            <CgWebsite className="group-hover:scale-110 w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
          </a>
          <a
            title="a"
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
