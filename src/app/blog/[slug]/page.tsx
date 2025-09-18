export const dynamic = "force-static";

import { notFound } from "next/navigation";
import posts from "@/data/posts.generated.json"; // JSON generated at build time
import type { Metadata } from "next";

type Post = {
  slug: string;
  title: string;
  date: string | null;
  description?: string | null;
  image?: string | null;
  html: string;
};

// generate dynamic titles and description for blog pages
export async function generateMetadata(props: any): Promise<Metadata> {
  const p = props?.params;
  const { slug } = (p && typeof p.then === "function") ? await p : p;
  const post = (posts as Post[]).find(x => x.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description ?? undefined,
    openGraph: { title: post.title, description: post.description ?? undefined },
    twitter:   { title: post.title, description: post.description ?? undefined },
  };
}


export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return (posts as Post[]).map((p) => ({ slug: p.slug }));
}

// NOTE: Robustly handle both Next 14 (object) and Next 15 (Promise) param shapes
export default async function PostPage(props: any) {
  const p = props?.params;
  const resolved = (p && typeof p.then === "function") ? await p : p;
  const slug = resolved?.slug as string | undefined;
  if (!slug) return notFound();

  const post = (posts as Post[]).find((x) => x.slug === slug);
  if (!post) return notFound();

  const fmt = (d?: string | null) =>
    d ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(d)) : "";

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
          <h1 className="text-3xl font-bold">{post.title}</h1>
          {post.date && <p className="mt-1 text-sm text-white/60">{fmt(post.date)}</p>}
        </header>

        {/* If you want a hero image from frontmatter, uncomment and ensure the file exists in /public */}
        {/* {post.image && (
          <figure className="not-prose mb-8 overflow-hidden rounded-xl border border-white/10">
            <img src={post.image} alt={post.title} className="h-auto w-full object-cover" />
          </figure>
        )} */}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
