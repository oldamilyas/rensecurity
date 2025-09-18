"use client";
/**
 * Client component: picks two random posts on each visit (runtime),
 * and renders small cards linking to those posts.
 */
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export type PostMeta = {
  slug: string;
  title: string;
  description?: string | null;
  date?: string | null;
  image?: string | null;
};

export default function FeaturedRandom({ posts }: { posts: PostMeta[] }) {
  // Choose 2 random, distinct posts on the client
  const picks = useMemo(() => {
    if (!posts?.length) return [];
    if (posts.length <= 2) return posts.slice(0, 2);
    const i1 = Math.floor(Math.random() * posts.length);
    let i2 = Math.floor(Math.random() * posts.length);
    if (i2 === i1) i2 = (i2 + 1) % posts.length;
    return [posts[i1], posts[i2]];
  }, [posts]);

  const fmt = (d?: string | null) =>
    d ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(d)) : "";

  return (
    <section className="mt-10">
      <h3 className="mb-4 text-xl font-semibold">Featured today</h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {picks.map((p) => (
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
                    className="h-32 w-full object-cover transition group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="text-base font-semibold group-hover:underline">{p.title}</h4>
                {p.date && <span className="text-xs text-white/60">{fmt(p.date)}</span>}
              </div>
              {p.description && (
                <p className="mt-1 line-clamp-2 text-sm text-white/80">{p.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
