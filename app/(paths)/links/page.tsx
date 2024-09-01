export const metadata = {
  title: "Links",
  description: "See my links.",
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

export default function Page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Links</h1>
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
  );
}
