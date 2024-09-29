import { GithubRepository } from "@/app/(utils)/types";
import { sanitizeMDXContent } from "@/app/(utils)/utils";
import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "app/(components)/mdx";
import loadGithubRepositories, {
  loadGithubRepository,
} from "app/(utils)/load-github-repositories";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects: GithubRepository[] = await loadGithubRepositories();

  return projects.map((project) => ({
    slug: project.name,
  }));
}

export async function generateMetadata({ params }: Props) {
  const repository = await loadGithubRepository(params.slug);
  if (!repository) {
    return;
  }

  const { name: title, description } = repository;
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/projects/${title}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

async function page({ params }: Props) {
  const repository = await loadGithubRepository(params.slug);

  if (!repository) {
    notFound();
  }

  const { name, description, readme, url } = repository;

  const sanitizedReadme = sanitizeMDXContent(readme);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: params.slug,
            description: description,
            image: `/og?title=${encodeURIComponent(name)}`,
            url: `${baseUrl}/projects/${name}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          {params.slug}
        </h1>
        <a target="_blank" href={url}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide hover:opacity-80 lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
        </a>
      </div>


      <article className="prose">
        <CustomMDX source={sanitizedReadme} />
      </article>
    </section>
  );
}

export default page;
