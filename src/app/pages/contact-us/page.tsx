import Link from "next/link";
import type { ReactNode } from "react";

type Social = {
  name: string;
  href: string;
  label: string;
  icon: ReactNode;
};

const socials: Social[] = [
  {
    name: "Personal Email",
    href: "mailto:oldamilyas@gmail.com", // <- change
    label: "Send us an email",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path strokeWidth="1.8" d="M4 6h16v12H4z" />
        <path strokeWidth="1.8" d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    name: "Professional Email",
    href: "mailto:mohamed_selmanibouayoune@um5.ac.ma", // <- change
    label: "Send us an email",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path strokeWidth="1.8" d="M4 6h16v12H4z" />
        <path strokeWidth="1.8" d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-selmani-bouayoune-660730183/", // <- change
    label: "Rensecurity on LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h4v2.2h.06c.56-1 1.94-2.2 3.99-2.2 4.27 0 5.06 2.81 5.06 6.46V21h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.77 0-2.04 1.38-2.04 2.8V21h-4z"/>
      </svg>
    ),
  },
  
  {
    name: "GitHub",
    href: "https://github.com/oldamilyas", // <- change
    label: "Rensecurity on GitHub",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.7.1-3.6 0 0 1-.3 3.5 1.3a12 12 0 0 1 6.3 0c2.5-1.6 3.5-1.3 3.5-1.3.6 1.9.2 3.3.1 3.6.8.9 1.2 2 1.2 3.4 0 4.8-2.9 5.9-5.6 6.2.4.3.8 1 .8 2v3c0 .3.2.8.8.6A12 12 0 0 0 12 .5z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@mohamedselmani2914", // <- change
    label: "Rensecurity on YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.2C19 3.5 12 3.5 12 3.5s-7 0-9.4.5A3 3 0 0 0 .5 6.2 48.5 48.5 0 0 0 0 12a48.5 48.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.2c2.4.5 9.4.5 9.4.5s7 0 9.4-.5a3 3 0 0 0 2.1-2.2A48.5 48.5 0 0 0 24 12a48.5 48.5 0 0 0-.5-5.8zM9.8 15.5V8.5l6.4 3.5-6.4 3.5z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mohamed_selmani__/", // <- change
    label: "Rensecurity on Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.4.4a4.7 4.7 0 0 1 1.7 1.1 4.7 4.7 0 0 1 1.1 1.7c.2.5.3 1.2.4 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.4a4.7 4.7 0 0 1-1.1 1.7 4.7 4.7 0 0 1-1.7 1.1c-.5.2-1.2.3-2.4.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.4-.4a4.7 4.7 0 0 1-1.7-1.1 4.7 4.7 0 0 1-1.1-1.7c-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.4a4.7 4.7 0 0 1 1.1-1.7A4.7 4.7 0 0 1 5.4 1c.5-.2 1.2-.3 2.4-.4C9 0 9.4 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm7-1.3a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/grazy.gra/", // <- change
    label: "Rensecurity on Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.5 3.4-3.5.98 0 2 .17 2 .17v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article className="prose prose-invert lg:prose-lg">
        <h1>Contact us</h1>
        <p>
          We’d love to hear from you. Reach out through email or any of our social channels.
        </p>
        <div className="not-prose mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {socials.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
            >
              <span className="shrink-0">{s.icon}</span>
              <span className="font-medium">{s.name}</span>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}
