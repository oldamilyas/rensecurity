"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  description?: string;
};

export default function Search({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    (post.description ?? "").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search blog posts…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
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
