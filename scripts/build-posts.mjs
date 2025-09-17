// scripts/build-posts.mjs
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "src", "posts");
const OUT_DIR = path.join(process.cwd(), "src", "data");
const OUT_FILE = path.join(OUT_DIR, "posts.generated.json");

if (!fs.existsSync(POSTS_DIR)) {
  console.log("[build-posts] No src/posts directory, writing empty list.");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, "[]");
  process.exit(0);
}

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
const posts = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  posts.push({
    slug,
    title: data.title ?? slug,
    date: data.date ?? null,
    description: data.description ?? null,
    image: data.image ?? null,
    html: String(processed),
  });
}

posts.sort((a, b) => (a.date < b.date ? 1 : -1));

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2));
console.log(`[build-posts] Wrote ${posts.length} post(s) to ${OUT_FILE}`);
