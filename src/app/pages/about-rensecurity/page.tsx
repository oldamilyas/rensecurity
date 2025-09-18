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
              src="/favicon.svg"  // put your logo here
              alt="Rensecurity"
              width={176}
              height={176}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Description updated to reflect the blog */}
        <p>
          Rensecurity is a cybersecurity blog focused on practical, reproducible
          security engineering. We publish hands-on tutorials, pentesting
          walkthroughs, blue-team tooling guides, and opinionated how-tos that
          you can copy, paste, and adapt for real environments.
        </p>

        <p>
          Our content spans red/blue/purple teaming, secure architecture,
          hardening, detection engineering, and incident response. We favor
          minimal theory and maximum signal—configs, commands, dashboards, and
          checklists that shorten your time to value.
        </p>

        <p>
          The site is kept fast and simple: posts in Markdown, built at compile
          time, and served from the edge—so you get low latency and a smooth
          reading experience worldwide.
        </p>

        <div className="clear-both"></div>

        {/* What we do — tailored to Rensecurity */}
        <h2>What we do</h2>
        <ul>
          <li>Penetration testing walkthroughs & lab builds</li>
          <li>Secure configuration & hardening guides (web, infra, cloud)</li>
          <li>Threat intel briefs & actionable remediation steps</li>
        </ul>

        {/* Quick facts row */}
        <div className="not-prose mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Founded</div>
            <div>2025</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Focus</div>
            <div>Cybersecurity</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Location</div>
            <div>Morocco</div>
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
