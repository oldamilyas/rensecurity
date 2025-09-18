"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  image?: string;
};

export default function SearchResults() {
  const searchParams = useSearchParams();
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();

  const [posts, setPosts] = useState<PostMeta[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/blog-index.json")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<PostMeta[]>;
      })
      .then((data) => {
        if (!cancelled) setPosts(data);
      })
      .catch((e) => {
        console.error(e);
        if (!cancelled) setError("Failed to load blog index.");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const results = useMemo(() => {
    if (!posts || !q) return [];
    return posts.filter((p) => {
      const hay = (p.title + " " + (p.description ?? "")).toLowerCase();
      return hay.includes(q);
    });
  }, [posts, q]);

  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!posts) return <p>Loading…</p>;
  if (!q) return <p>Type in the search box in the header to see results here.</p>;
  if (results.length === 0) return <p>No results found.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
      {results.map((p) => (
        <li
          key={p.slug}
          style={{
            border: "1px solid #eee",
            borderRadius: 12,
            padding: "2rem",
            marginBottom: "1rem",
          }}
        >
          <Link href={`/blog/${p.slug}`}>
            <h1
              style={{
                margin: "0 0 0.75rem",
                fontSize: "1.8rem",
                fontWeight: "bold",
                lineHeight: 1.3,
              }}
            >
              {p.title}
            </h1>
          </Link>

          {p.image && (
            <Link href={`/blog/${p.slug}`}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  maxWidth: "100%",
                  borderRadius: 8,
                  marginBottom: 12,
                  cursor: "pointer",
                }}
                loading="lazy"
              />
            </Link>
          )}

          {p.description && <p style={{ margin: 0 }}>{p.description}</p>}
          {p.date && (
            <small style={{ color: "#888", display: "block", marginTop: 6 }}>
              {p.date}
            </small>
          )}
        </li>
      ))}
    </ul>
  );
}
