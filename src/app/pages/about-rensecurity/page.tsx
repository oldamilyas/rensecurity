import Image from "next/image";

export default function AboutRensecurityPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article
        className="
          prose prose-invert lg:prose-lg
          prose-a:text-sky-400 hover:prose-a:underline
        "
      >
        <h1>About Rensecurity</h1>

        {/* Floated brand/logo image with nice text wrap */}
        <div className="not-prose">
          <div
            className="float-left mr-6 mb-4 w-44 h-44 rounded-xl overflow-hidden"
            style={{ shapeOutside: "inset(0 round 0.75rem)" }}
          >
            <Image
              src="/images/rensecurity-logo.png"  // put your logo here
              alt="Rensecurity"
              width={176}
              height={176}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <p>
          Rensecurity builds fast, resilient, and secure web experiences. We focus on
          practical security for modern stacks — Node.js, Next.js, edge runtimes — with
          clear documentation and reproducible examples.
        </p>

        <p>
          Our approach is simple: ship lean software, measure what matters, and share
          the “how” so others can build safely. From static blogs to full-stack apps,
          we care about performance, accessibility, and strong defaults.
        </p>

        <p>
          This site is a living lab: posts are written in Markdown, built at compile
          time, and served from the edge for near-instant loads worldwide.
        </p>

        <div className="clear-both"></div>

        {/* Highlights */}
        <h2>What we do</h2>
        <ul>
          <li>Security guidance for Node.js/Next.js apps</li>
          <li>Edge-ready architectures (Cloudflare, Vercel)</li>
          <li>Performance, accessibility, and DX improvements</li>
          <li>Hands-on, step-by-step tutorials and templates</li>
        </ul>

        {/* Quick facts row */}
        <div className="not-prose mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Founded</div>
            <div>2025</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Focus</div>
            <div>Security · Next.js · Edge</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Location</div>
            <div>Morocco · Remote</div>
          </div>
        </div>

        <p>
          Want to collaborate or have a question? Head to our{" "}
          <a href="/pages/contact-us">Contact page</a>.
        </p>
      </article>
    </main>
  );
}
