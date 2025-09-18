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
        <h1>About Author</h1>

        {/* Floated author photo */}
        <div className="not-prose">
          <div
            className="float-left mr-6 mb-4 w-48 h-48 rounded-xl overflow-hidden"
            style={{ shapeOutside: "inset(0 round 0.75rem)" }} /* nice wrap on modern browsers */
          >
            <Image
              src="/images/upon-this-mortar-i-build-my-empire.jpg"   // put your image here
              alt="Mohamed Selmani Bouayoune"
              width={192}
              height={192}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Text wraps to the right of the image, then continues below */}
        <p>
          Hey! I’m <strong>Mohamed Selmani Bouayoune</strong>, a cybersecurity engineer focused on
          information systems security and secure digital transformation. I write about practical security—
          from red/blue team tactics and DevSecOps to building resilient systems and tooling you can reuse.
        </p>
        <p>
          My recent work spans consulting and hands-on engineering: helping organizations monitor compliance
          (GDPR/09-08), reviewing web architectures and MFA options, and building SOC stacks with Wazuh EDR,
          ELK SIEM, and TheHive—plus automating active response to cut MTTC. I also enjoy turning raw data
          into security KPIs and clear visualizations that drive decisions.
        </p>
        <p>
          This site is a living notebook: lightweight, static, and CDN-fast. Posts are written in Markdown,
          versioned in GitHub, and deployed at the edge so you get speed without sacrificing depth.
        </p>

        {/* Stop the float so following blocks don’t wrap */}
        <div className="clear-both"></div>

        {/* Optional: small info row */}
        <div className="not-prose mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Location</div>
            <div>Rabat, Morocco</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Focus</div>
            <div>Cybersecurity consulting · Penetration testing services</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <div className="opacity-70">Contact</div>
            <a href="mailto:oldamilyas@gmail.com" className="text-sky-400">
              oldamilyas@gmail.com
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
