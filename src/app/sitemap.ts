// src/app/sitemap.ts
import type { MetadataRoute } from "next";
// If tsconfig has "resolveJsonModule": true (default in Next), this import works:
import posts from "@/data/posts.generated.json";

type Post = {
  slug: string;
  date?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rensecurity.org";
  const now = new Date().toISOString();

  // List your important static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily",  priority: 0.9 },
    { url: `${base}/pages/about-author`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/pages/about-rensecurity`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/pages/contact-us`, lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // Blog posts
  const postRoutes: MetadataRoute.Sitemap = (posts as Post[]).map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date ?? now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
