import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const KEY =
  process.env.UNSPLASH_ACCESS_KEY ??
  "PsP7BnoIcwprM-olglRVIZlrNGNdS0oJQ1Ngq3mKIdI";

interface ImageJob {
  query: string;
  output: string;
  width: number;
  height: number;
}

const jobs: ImageJob[] = [
  {
    query: "Bodrum luxury villa pool sunset",
    output: "public/home/hero.webp",
    width: 2400,
    height: 1350,
  },
  {
    query: "Bodrum villa interior modern",
    output: "public/home/felsefe.webp",
    width: 1200,
    height: 900,
  },
  {
    query: "Bodrum Yalikavak marina villa",
    output: "public/home/regions/yalikavak.webp",
    width: 800,
    height: 600,
  },
  {
    query: "Bodrum Turkbuku beach club",
    output: "public/home/regions/turkbuku.webp",
    width: 800,
    height: 600,
  },
  {
    query: "Bodrum Gumusluk fishing village sunset",
    output: "public/home/regions/gumusluk.webp",
    width: 800,
    height: 600,
  },
  {
    query: "Bodrum Torba sea Turkey",
    output: "public/home/regions/torba.webp",
    width: 800,
    height: 600,
  },
  {
    query: "Bodrum Golturkbuku coast Turkey",
    output: "public/home/regions/golturkbuku.webp",
    width: 800,
    height: 600,
  },
  {
    query: "Bodrum Gundogan bay calm",
    output: "public/home/regions/gundogan.webp",
    width: 800,
    height: 600,
  },
];

async function search(q: string): Promise<string | null> {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    q
  )}&per_page=5&orientation=landscape&content_filter=high`;
  const r = await fetch(url, {
    headers: { Authorization: `Client-ID ${KEY}` },
  });
  if (!r.ok) {
    console.error(`  ! search failed: ${r.status} ${r.statusText}`);
    return null;
  }
  const j = await r.json();
  const raw = j.results?.[0]?.urls?.raw;
  return raw ? `${raw}&w=2400&q=85` : null;
}

async function processJob(job: ImageJob) {
  console.log(`* ${job.query}`);
  const url = await search(job.query);
  if (!url) {
    console.error("  x no result");
    return;
  }
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(job.output), { recursive: true });
  await sharp(buf)
    .resize(job.width, job.height, { fit: "cover" })
    .webp({ quality: 85, effort: 6 })
    .toFile(job.output);
  console.log(`  v ${job.output}`);
  await new Promise((r) => setTimeout(r, 1500));
}

async function main() {
  for (const job of jobs) {
    try {
      await processJob(job);
    } catch (e) {
      console.error(e);
    }
  }
  console.log("Done");
}

main();
