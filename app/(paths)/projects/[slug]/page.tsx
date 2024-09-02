import { GithubRepository } from "@/app/(utils)/types";
import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "app/(components)/mdx";
import loadGithubRepositories, { fetchRepositoryReadme, loadGithubRepository } from "app/(utils)/load-github-repositories";
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

  const { name: title, description,  } = repository;
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

  if(!repository) {
    notFound()
  }

  const {name, description, readme} = repository

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
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {params.slug}
      </h1>

      <CustomMDX source={readme} />
    </section>
  );
}

export default page;
