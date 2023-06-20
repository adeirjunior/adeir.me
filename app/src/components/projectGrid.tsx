import ProjectCard from "@/src/components/projectCard";
import { Project } from "../types";

type Prop = {
  projects: Project[]
}

function projectGrid({projects}: Prop) {
  return (
    <section className="text-gray-400 dark:bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default projectGrid;
