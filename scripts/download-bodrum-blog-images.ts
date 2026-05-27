import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const KEY =
  process.env.UNSPLASH_ACCESS_KEY ??
  "PsP7BnoIcwprM-olglRVIZlrNGNdS0oJQ1Ngq3mKIdI";

interface Blog {
  slug: string;
  queries: string[]; // tried in order until one returns results
}

// Site 2 — bodrumapartvilla (premium / boutique aesthetic, still Bodrum-specific)
const SITE2_BLOGS: Blog[] = [
  // ── Legacy posts from src/data/posts.ts ──────────────────────────────────
  {
    slug: "bodrum-villa-rehberi",
    queries: [
      "Bodrum luxury villa Turkey",
      "luxury villa Aegean Turkey pool",
      "Mediterranean villa private terrace",
    ],
  },
  {
    slug: "bodrum-tatil-rehberi-2026",
    queries: [
      "Bodrum peninsula Turkey luxury",
      "Bodrum harbor Turkey premium",
      "Aegean Turkey coast luxury",
    ],
  },
  {
    slug: "bodrum-ozel-havuzlu-villalar",
    queries: [
      "luxury villa pool Aegean Turkey",
      "Bodrum villa private pool",
      "Mediterranean villa infinity pool",
    ],
  },
  // ── MDX posts from content/blog/*.mdx ────────────────────────────────────
  {
    slug: "yalikavak-butik-villa-rehberi-2026",
    queries: [
      "Bodrum Yalikavak marina luxury",
      "Yalikavak Palmarina yacht Bodrum",
      "Bodrum luxury villa marina",
    ],
  },
  {
    slug: "ozel-havuzlu-villa-kiralarken-dikkat-edilecekler",
    queries: [
      "luxury villa pool Aegean Turkey",
      "Bodrum villa private pool",
      "Mediterranean villa pool terrace",
    ],
  },
  {
    slug: "sezon-disi-bodrum-mayis-eylul-premium-konaklama",
    queries: [
      "Bodrum coast spring Turkey",
      "Aegean Turkey autumn villa",
      "Bodrum sea quiet luxury",
    ],
  },
  {
    slug: "bodrum-marina-yakin-sakin-villalar",
    queries: [
      "Bodrum Torba beach villa Turkey",
      "Bodrum Konacik coast Turkey",
      "Aegean villa terrace sea Turkey",
    ],
  },
  {
    slug: "butik-villa-vs-5-yildizli-otel",
    queries: [
      "luxury villa private terrace Aegean",
      "Bodrum boutique villa Turkey",
      "Mediterranean villa lifestyle Turkey",
    ],
  },
  {
    slug: "butik-villa-aile-tatili-bodrum",
    queries: [
      "Bodrum family villa Turkey",
      "luxury family villa Aegean Turkey",
      "Bodrum villa garden pool",
    ],
  },
  {
    slug: "bodrum-ortakent-cocuklu-aileler-icin-ilkbahar-rehberi",
    queries: [
      "Bodrum Ortakent beach family Turkey",
      "Aegean Turkey family beach spring",
      "Bodrum peninsula sandy beach",
    ],
  },
  {
    slug: "bodrum-turgutreis-pazari-hangi-gun-acik-ne-alinir",
    queries: [
      "Turgutreis market Turkey",
      "Turkish bazaar Aegean produce",
      "Turkish village market",
    ],
  },
  {
    slug: "gumbetten-bodrum-kalesine-yuruyerek-nasil-gidilir",
    queries: [
      "Bodrum Castle Turkey harbor",
      "Bodrum Kalesi Saint Peter",
      "Bodrum St Peter Castle Turkey",
    ],
  },
  {
    slug: "gundongan-plajinda-mayis-ayinda-neler-yapilir",
    queries: [
      "Bodrum Gundogan beach Turkey",
      "Bodrum quiet bay Turkey",
      "Aegean Turkey calm bay",
    ],
  },
];

async function unsplash(q: string): Promise<{ url: string; credit: string } | null> {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    q,
  )}&per_page=5&orientation=landscape&content_filter=high`;
  const r = await fetch(url, {
    headers: { Authorization: `Client-ID ${KEY}` },
  });
  if (!r.ok) {
    console.error(`  ⚠  Unsplash HTTP ${r.status} for "${q}"`);
    return null;
  }
  const j = (await r.json()) as {
    results?: Array<{
      urls?: { raw?: string };
      user?: { name?: string; username?: string };
    }>;
  };
  const first = j.results?.[0];
  if (!first?.urls?.raw) return null;
  return {
    url: first.urls.raw + "&w=2400&q=85",
    credit: `${first.user?.name ?? "Unknown"} (@${first.user?.username ?? "unknown"})`,
  };
}

async function downloadOptimize(
  url: string,
  out: string,
  w: number,
  h: number,
) {
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  await fs.mkdir(path.dirname(out), { recursive: true });
  await sharp(buf)
    .resize(w, h, { fit: "cover" })
    .webp({ quality: 85, effort: 6 })
    .toFile(out);
}

async function processBlog(b: Blog) {
  console.log(`\n📝 ${b.slug}`);
  let hit: { url: string; credit: string } | null = null;
  let usedQuery = "";
  for (const q of b.queries) {
    hit = await unsplash(q);
    if (hit) {
      usedQuery = q;
      break;
    }
    await new Promise((r) => setTimeout(r, 1200));
  }
  if (!hit) {
    console.error(`  ❌ no result for ${b.slug}`);
    return null;
  }
  console.log(`  ✓ via: "${usedQuery}"`);
  console.log(`    by: ${hit.credit}`);

  const heroPath = `public/blog/${b.slug}/hero.webp`;
  const cardPath = `public/blog/${b.slug}/card.webp`;
  await downloadOptimize(hit.url, heroPath, 1600, 900);
  await downloadOptimize(hit.url, cardPath, 800, 600);
  console.log(`  ✓ saved hero + card`);
  return {
    slug: b.slug,
    hero: `/blog/${b.slug}/hero.webp`,
    card: `/blog/${b.slug}/card.webp`,
    query: usedQuery,
    credit: hit.credit,
  };
}

async function main() {
  const blogs = SITE2_BLOGS;
  const results: Array<NonNullable<Awaited<ReturnType<typeof processBlog>>>> = [];
  for (const b of blogs) {
    try {
      const r = await processBlog(b);
      if (r) results.push(r);
    } catch (e) {
      console.error(e);
    }
    await new Promise((r) => setTimeout(r, 1500));
  }

  await fs.mkdir("docs", { recursive: true });
  await fs.writeFile(
    "docs/blog-images-review.md",
    "# Blog Images Review\n\n" +
      "Her görsel için Unsplash query'si, fotoğrafçı bilgisi ve manuel kontrol notu.\n\n" +
      results
        .map(
          (r) =>
            `## ${r.slug}\n` +
            `- Hero: \`${r.hero}\`\n` +
            `- Card: \`${r.card}\`\n` +
            `- Query: \`${r.query}\`\n` +
            `- Photo by: ${r.credit} on Unsplash\n` +
            `- [ ] Manuel doğrula: görsel Bodrum'a uygun mu?\n`,
        )
        .join("\n"),
  );
  console.log(`\n✅ Done. ${results.length}/${blogs.length} blogs processed.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
