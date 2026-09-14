import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://alcancemos.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://alcancemos.com/privacidad",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://alcancemos.com/terminos",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
