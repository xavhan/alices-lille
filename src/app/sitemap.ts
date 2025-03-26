import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alices-lille.com",
      lastModified: new Date(),
    },
    {
      url: "https://alices-lille.com/carte",
      lastModified: new Date(),
    },
    {
      url: "https://alices-lille.com/cocktails",
      lastModified: new Date(),
    },
    {
      url: "https://alices-lille.com/links",
      lastModified: new Date(),
    },
  ];
}
