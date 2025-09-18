"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  description?: string;
};

export default function Search({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase() ?? "";

  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      (post.description ?? "").toLowerCase().includes(q)
  );

  return (
    <div className="search">
      <form action="/search" method="get">
        <input type="search" name="q" placeholder="Search blog posts…" />
      </form>

      {q && (
        <ul>
          {filtered.length > 0 ? (
            filtered.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))
          ) : (
            <li>No results</li>
          )}
        </ul>
      )}
    </div>
  );
}
