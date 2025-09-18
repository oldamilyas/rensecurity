// scripts/build-post-index.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SOURCE = resolve(__dirname, "../src/data/posts.generated.json");
const OUTDIR = resolve(__dirname, "../public");
const OUTFILE = resolve(OUTDIR, "blog-index.json");

try {
  const raw = readFileSync(SOURCE, "utf8");
  const all = JSON.parse(raw);

  // Keep only the fields we need for search results
  const index = all.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    description: p.description,
    image: p.image, // optional but handy for thumbnails
  }));

  mkdirSync(OUTDIR, { recursive: true });
  writeFileSync(OUTFILE, JSON.stringify(index, null, 2) + "\n", "utf8");
  console.log(`✔ Wrote ${index.length} items to /public/blog-index.json`);
} catch (e) {
  console.error("Failed to build blog index:", e);
  process.exit(1);
}
