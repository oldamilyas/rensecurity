export const dynamic = "force-static"; // build-time HTML for speed

/**
 * Server component for the homepage:
 * - imports your prebuilt posts JSON (no fs at runtime)
 * - computes impact metrics at build time (total post count)
 * - renders hero, mission, impact cards
 * - includes a client component that picks 2 random posts at runtime
 */

import posts from "@/data/posts.generated.json";
import FeaturedRandom, { type PostMeta } from "../../components/FeaturedRandom";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string | null;
  description?: string | null;
  image?: string | null;
  html: string;
};

// Topics you cover (edit freely)
const TOPICS = [
  "Pentesting",
  "Threat Intelligence",
  "Blue Team",
  "DevSecOps",
  "Cloud Security",
  "Zero Trust",
  "Ransomware",
  "API Security",
];

export default function Home() {
  const list = posts as Post[];

  // Impact computed at build time
  const totalPosts = list.length;

  // For the client component, pass only lightweight meta (avoid shipping post.html to client)
  const metaForClient: PostMeta[] = list.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description ?? null,
    date: p.date ?? null,
    image: p.image ?? null,
  }));

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      {/* HERO / SLOGAN */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-sky-500/10 to-transparent p-8 sm:p-12">
        {/* subtle grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.08),_transparent_50%)]"
        />
        <h1 className="relative z-10 text-center text-3xl font-extrabold sm:text-4xl tracking-tight">
          Rensecurity
        </h1>
        <p className="relative z-10 mt-3 text-center text-lg text-white/80">
          {/* Slogan */}
          One-stop shop for cybersecurity news, techniques & insights.
        </p>

        {/* CTA row */}
        <div className="relative z-10 mt-6 flex justify-center gap-3">
          <Link
            href="/blog"
            className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
          >
            Read the blog
          </Link>
          <Link
            href="/pages/about-rensecurity"
            className="rounded-xl border border-white/15 bg-transparent px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            About Rensecurity
          </Link>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto mt-10 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Our mission</h2>
        <p className="mt-3 text-white/80">
          We publish timely security news and hands-on guides for practitioners and decision-makers.
          From pentesting walkthroughs and tool how-tos to risk and compliance explainers, our goal is
          to make modern security knowledge practical and actionable.
        </p>
      </section>

      {/* IMPACT CARDS */}
      <section className="mt-10">
        <h3 className="mb-4 text-xl font-semibold">Our impact</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-bold">{totalPosts}</div>
            <div className="mt-1 text-sm text-white/70">Published posts</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-bold">2</div>
            <div className="mt-1 text-sm text-white/70">Audiences</div>
            <p className="mt-2 text-sm text-white/60">
              Practitioners (red/blue/devsecops) &amp; B2B leaders (CISOs, IT managers).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-bold">Key topics</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED (RUNTIME RANDOM) */}
      <FeaturedRandom posts={metaForClient} />
    </main>
  );
}
