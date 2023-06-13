import { Metadata } from "next";
import ProjectGrid from "@/src/components/projectGrid";
import loadProjects from "@/src/lib/load-projects";
import { Project } from "@/src/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of my diverse projects in this Next.js portfolio. From web applications to interactive components, each project showcases my programming skills and expertise in front-end and back-end development. Discover the technologies used, challenges encountered, and innovative solutions implemented.",
};

async function page() {
  const projects: Project[] = await loadProjects();
  return <ProjectGrid projects={projects} />;
}

export default page;
