import loadGithubRepositories from "app/(utils)/load-github-repositories";
import { GithubRepository } from "app/(utils)/types";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "See my projects.",
};

export default async function Page() {
  const projects: GithubRepository[] = await loadGithubRepositories();

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <div>
        {projects.map((project) => (
          <Link
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            href={`projects/${project.name}`}
            key={project.name}
          >
            {project.name} {project.name === 'adeir.me' && '(this site)'}
          </Link>
        ))}
      </div>
    </div>
  );
}
