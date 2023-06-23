import { Metadata } from "next";
import loadProjects from "@/src/lib/load-projects";
import { Project } from "@/src/types";
import ProjectCard from "@/src/components/projectCard";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of my diverse projects in this Next.js portfolio. From web applications to interactive components, each project showcases my programming skills and expertise in front-end and back-end development. Discover the technologies used, challenges encountered, and innovative solutions implemented.",
};

async function page() {
  const projects: Project[] = await loadProjects();
  return (
    <section className="text-gray-400 dark:bg-gray-900 body-font">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
