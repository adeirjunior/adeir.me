import { baseUrl } from "@/app/sitemap";
import { getDictionary } from "../dictionaries";

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

const links = {
  x: {
    href: "https://x.com/adeirju",
  },
  github: {
    href: "https://github.com/adeirjunior",
  },
  linkedin: {
    href: "https://linkedin.com/in/adeirjunior",
  },
  youtube: {
    href: "https://youtube.com/@adeirjunior",
  },
  tiktok: {
    href: "https://tiktok.com/@adeirj",
  },
  twitch: {
    href: "https://twitch.tv/adeirju",
  },
  medium: {
    href: "https://adeir.medium.com",
  },
  hashnode: {
    href: "https://adeir.hashnode.dev",
  },
  devto: {
    href: "https://dev.to/adeir",
  },
  gumroad: {
    href: "https://adeir.gumroad.com/",
  },
};

export default async function Page({ params }: { params: { lang: 'en' | 'pt' } }) {
  const { links: l } = await getDictionary(params.lang)
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{l.my_links}</h1>
      <div className="prose">
        {Object.entries(links).map(([name, { href }]) => {
        return (
          <a
            key={name}
            href={href}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            target={name}
          >
            {name}
          </a>
        );
      })}
      </div>
    </section>
  );
}
