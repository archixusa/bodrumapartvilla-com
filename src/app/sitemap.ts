import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { districts } from "@/data/districts";
import { posts } from "@/data/posts";
import { getMdxPosts } from "@/lib/mdx-blog";
import { routing } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

function urlFor(path: string, locale: string) {
  return locale === routing.defaultLocale
    ? `${SITE_URL}${path}`
    : `${SITE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/kiralik",
    "/villalar",
    "/apartlar",
    "/tekne-kiralama",
    "/arac-kiralama",
    "/vip-transfer",
    "/turlar",
    "/blog",
    "/hakkimizda",
    "/iletisim",
    "/sss",
    "/kvkk",
    "/kullanim-sartlari",
    "/iptal-iade-politikasi",
  ];

  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const path of staticPaths) {
    entries.push({
      url: urlFor(path, routing.defaultLocale),
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, urlFor(path, l)])
        ),
      },
    });
  }

  for (const p of properties) {
    const path = `/kiralik/${p.slug}`;
    entries.push({
      url: urlFor(path, routing.defaultLocale),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, urlFor(path, l)])
        ),
      },
    });
  }

  for (const d of districts) {
    const path = `/bodrum/${d.urlSlug}`;
    entries.push({
      url: urlFor(path, routing.defaultLocale),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, urlFor(path, l)])
        ),
      },
    });
  }

  for (const post of posts) {
    const path = `/blog/${post.slug}`;
    entries.push({
      url: urlFor(path, routing.defaultLocale),
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, urlFor(path, l)])
        ),
      },
    });
  }

  // MDX-sourced (AI-generated) blog posts
  const legacySlugs = new Set(posts.map((p) => p.slug));
  for (const m of getMdxPosts()) {
    if (legacySlugs.has(m.slug)) continue;
    const path = `/blog/${m.slug}`;
    entries.push({
      url: urlFor(path, routing.defaultLocale),
      lastModified: new Date(m.published_at),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, urlFor(path, l)])
        ),
      },
    });
  }

  return entries;
}
