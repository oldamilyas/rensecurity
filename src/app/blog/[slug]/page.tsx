import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";

const DIR = path.join(process.cwd(), "src", "posts");

type Params = { params: { slug: string } };

function getPost(slug: string) {
  const full = path.join(DIR, `${slug}.md`);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as any, content };
}

function fmt(d?: string) {
  if (!d) return "";
  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(d));
}

// Build-time static params
export async function generateStaticParams() {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;              // <-- await the promise

  const { meta, content } = getPost(slug);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article
        className="
          prose prose-invert lg:prose-lg
          prose-a:text-sky-400 hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow
          prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:rounded-xl prose-pre:p-4
        "
      >
        <header className="not-prose mb-6">
          <h1 className="text-3xl font-bold">{meta.title}</h1>
          {meta.date && (
            <p className="mt-1 text-sm text-white/60">{fmt(meta.date)}</p>
          )}
        </header>

        {meta.image && (
          <figure className="not-prose mb-8 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={meta.image}
              alt={meta.title}
              width={1200}
              height={630}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        )}

        {/* Markdown content */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </main>
  );
}
