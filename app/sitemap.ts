import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.adeir.me/",
      lastModified: new Date(),
    },
    {
      url: "https://www.adeir.me/projects",
      lastModified: new Date(),
    },
    {
      url: "https://www.adeir.me/contact",
      lastModified: new Date(),
    },
  ];
}
