export const navMenu = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export const footerMenu = [
    {
      title: "Menu",
      children: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "projects" },
        { name: "Contact", href: "contact" },
        { name: "Blog", href: "https://assuntos.dev" },
      ],
    },
    {
      title: "Social Media",
      children: [
        { name: "Linkedin", href: "https://www.linkedin.com/in/adeir-junior" },
        { name: "Twitter", href: "https://twitter.com/adeir_j" },
        { name: "Discord", href: "https://github.com/adeirjunior" }
      ],
    },
];

export const projects = [
  {
      title: "Madames",
      description: "M'adames is a Brazilian physical and online store that sells products focused on women's intimate life.",
      github: "https://github.com/adeirjunior/madames",
      view: "https://madames.store/",
      picture: "/projects/madames.png",
  },
  {
      title: "Assuntos",
      description: "A blog made with the aim of helping me to complete my programming studies.",
      github: "https://github.com/adeirjunior/assuntos",
      view: "https://assuntos.dev/",
      picture: "/projects/assuntos.png",
  },
  {
      title: "Bitcoin Conversor",
      description: "Bitcoin to Dollar and Euro Converter.",
      github: "https://github.com/adeirjunior/bitcoin-price-tracker",
      view: "https://bpt.deno.dev/",
      picture: "/projects/btc.png",
  },
  {
      title: "Hulu Clone",
      description: "Clone of the Hulu Streaming service, where the most famous movies of today are shown, in many categories.",
      github: "https://github.com/adeirjunior/hulu-clone",
      view: "https://hulu-clone-lake-eight.vercel.app/",
      picture: "/projects/hulu.png",
  },
  {
      title: "ScandiWeb",
      description: "Inventory manager project for a store created during the selection process of an Estonian company called ScandiWeb.",
      github: "https://github.com/adeirjunior/scandiweb-test-task",
      view: "https://scandiwebtesttasksite.000webhostapp.com/",
      picture: "/projects/scandiweb.png",
  },
]