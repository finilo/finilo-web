import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/agreement`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
