/*
import Link from 'next/link';
import Layout from '../../../../components/layout';
import Image from 'next/image';
import avatar from './images/upon-this-mortar-i-build-my-empire.jpg'
*/
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article
        className="
          prose prose-invert lg:prose-lg
          prose-a:text-sky-400 hover:prose-a:underline
        "
      >
        <h1>About us</h1>

        {/* Floated author photo */}
        <div className="not-prose">
          <div
            className="float-left mr-6 mb-4 w-48 h-48 rounded-xl overflow-hidden"
            style={{ shapeOutside: "inset(0 round 0.75rem)" }} /* nice wrap on modern browsers */
          >
            <Image
              src="/images/upon-this-mortar-i-build-my-empire.jpg"   // put your image here
              alt="Author"
              width={192}
              height={192}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Text wraps to the right of the image, then continues below */}
        <p>
          Hey! I’m <strong>Your Name</strong>, a security enthusiast and full-stack
          tinkerer. I write about web security, Node.js/Next.js, and hands-on
          experiments that actually break (so you don’t have to).
        </p>
        <p>
          My work focuses on building fast, resilient apps and explaining
          complex topics simply. When I’m not shipping code, I’m documenting
          what I learn so others can reuse it.
        </p>
        <p>
          This site is a living notebook: lightweight, static, and CDN-fast.
          Every post is Markdown, deployed from GitHub, and optimized at the edge.
        </p>

        {/* Stop the float so following blocks don’t wrap */}
        <div className="clear-both"></div>

        {/* Optional: small info row */}
        <div className="not-prose mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Location</div>
            <div>Casablanca, MA</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Focus</div>
            <div>Security · Next.js · DevOps</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Contact</div>
            <a href="mailto:you@example.com" className="text-sky-400">you@example.com</a>
          </div>
        </div>
      </article>
    </main>
  );
}
