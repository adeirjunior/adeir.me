import { Project } from "../types";
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

type Prop = {
  project: Project;
};

function ProjectCard({ project }: Prop) {
  const { name, descriptionPT } = project;
  return (
    <div className="lg:w-1/3">
      <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
          CATEGORY
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
          {name}
        </h1>
        <p className="leading-relaxed mb-3">{descriptionPT}</p>
        <Link href="/" className="text-blue-400 inline-flex items-center">
          Learn More
          <BiRightArrowAlt className="w-4 h-4 ml-2" />
        </Link>
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
            <CgWebsite />
          </span>
          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
            <FiGithub />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
