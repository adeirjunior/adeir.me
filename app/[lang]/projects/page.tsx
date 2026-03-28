import loadGithubRepositories from "app/(utils)/load-github-repositories";
import { GithubRepository, Lang } from "app/(utils)/types";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import { formatDate } from "app/(utils)/utils";

export const metadata = {
  title: "Projects",
  description: "See my projects.",
};

export default async function Page({ params }: { params: Lang }) {
  const projects: GithubRepository[] = await loadGithubRepositories();
  const { projects: p } = await getDictionary(params.lang)
  
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {p.my_projects}
      </h1>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.name} className="group relative flex flex-col">
            <Link
              href={`projects/${project.name}`}
              className="flex flex-col space-y-1"
            >
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium text-lg group-hover:underline">
                  {project.name} {project.name === 'adeir.me' && <span className="text-neutral-500 text-sm font-normal">(this site)</span>}
                </p>
                
                {project.description && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 mt-1">
                    {project.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs text-neutral-500 dark:text-neutral-500">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Period:</span>
                    <span>{formatDate(project.createdAt, false, params.lang)}</span>
                    <span>—</span>
                    <span>{formatDate(project.updatedAt, false, params.lang)}</span>
                  </div>

                  {project.languages && project.languages.length > 0 && (
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="font-semibold uppercase tracking-wider text-[10px]">Stack:</span>
                      <div className="flex gap-1.5">
                        {project.languages.slice(0, 5).map((lang) => (
                          <span key={lang} className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-700 dark:text-neutral-300">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
