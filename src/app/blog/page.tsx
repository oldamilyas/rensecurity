import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-static';
export const runtime = 'nodejs';



const DIR = path.join(process.cwd(), "src", "posts");
console.log("[build] reading posts from:", DIR);

type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  image?: string; // e.g. "/images/hello.jpg" (place in /public/images)
};

function getPosts(): Post[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<Post, "slug">) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function fmt(d: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
    new Date(d)
  );
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li
            key={p.slug}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <Link href={`/blog/${p.slug}`} className="group block">
              {p.image && (
                <div className="mb-3 overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={450}
                    className="h-40 w-full object-cover transition group-hover:scale-105"
                  />
                </div>
              )}

              <h2 className="mb-1 text-lg font-semibold group-hover:underline">
                {p.title}
              </h2>

              {p.date && (
                <p className="mb-2 text-sm text-white/60">{fmt(p.date)}</p>
              )}

              {p.description && (
                <p className="text-sm text-white/80">{p.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
