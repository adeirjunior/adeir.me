import { baseUrl } from "@/app/sitemap";
import { getDictionary } from "../dictionaries";
import { getLinks } from "app/(utils)/utils";
import { Lang } from "@/app/(utils)/types";

const ogImage = `${baseUrl}/og?title=${encodeURIComponent("links")}`;

export const metadata = {
  title: "Links",
  description: "See my links.",
  openGraph: {
    title: "All my social links",
    description: "This is the place for my social links.",
    url: `${baseUrl}/links`,
    siteName: "adeir.me",
    locale: "en_US",
    type: "website",
    images: ogImage,
  },
};

export const revalidate = 60;

export default async function Page({ params }: { params: Lang }) {
  const { links: l } = await getDictionary(params.lang)
  const links = await getLinks();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{l.my_links}</h1>
      <div className="prose">
        {links.map((link) => {
        return (
          <a
            key={link.title}
            href={link.url}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.title}
          </a>
        );
      })}
      </div>
    </section>
  );
}
