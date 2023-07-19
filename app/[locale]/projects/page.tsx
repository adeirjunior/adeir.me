'use client'

import { Metadata } from "next";
import { GithubRepository } from "@/src/types";
import { notFound } from "next/navigation";
import ProjectCard from "@/src/components/projectCard";
import loadGithubRepositories from "@/src/lib/load-github-repositories";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of my diverse projects in this Next.js portfolio. From web applications to interactive components, each project showcases my programming skills and expertise in front-end and back-end development. Discover the technologies used, challenges encountered, and innovative solutions implemented.",
};

async function page() {
  const projects: GithubRepository[] | undefined =
    await loadGithubRepositories();

  if (typeof projects === "undefined") {
    notFound();
  }
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
