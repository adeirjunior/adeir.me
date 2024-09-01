import { CustomMDX } from "app/(components)/mdx";
import { fetchRepositoryReadme } from "app/(utils)/load-github-repositories";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

async function page({ params }: Props) {
  const readme = await fetchRepositoryReadme(params.slug);

  if(!readme) {
    notFound()
  }

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {params.slug}
      </h1>

      <CustomMDX source={readme} />
    </section>
  );
}

export default page;
