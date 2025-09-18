// components/header.tsx or header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-37H513WEHN"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-37H513WEHN');
        `}
      </Script>

      {/* Ahrefs */}
      <Script
        id="ahrefs"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="HN8TyAGG/EwTFy2VescQtg"
        strategy="afterInteractive"
      />

      <header className="site-header sticky top-0 z-50 bg-zinc-900/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
        <div className="site-header__inner mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/favicon.svg"
              alt="Rensecurity"
              width={28}
              height={28}
              className="rounded"
              priority
            />
            <span className="font-semibold">Rensecurity</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/">Home</Link>
            <Link href="/pages/about-author">About-Author</Link>
            <Link href="/blog">Blogs</Link>
            <Link href="/pages/about-rensecurity">About-Rensecurity</Link>
          </nav>

          {/* Desktop actions (search + contact) */}
          <div className="hidden items-center gap-4 md:flex">
            <form action="/search" method="get" role="search" className="flex items-center gap-2">
              <label htmlFor="site-search" className="sr-only">
                Search blog posts
              </label>
              <input
                id="site-search"
                type="search"
                name="q"
                placeholder="Search blog posts…"
                className="w-64 rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-sm
                           text-zinc-100 placeholder-zinc-400 outline-none
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-md border border-zinc-700
                           bg-zinc-800/60 px-3 py-2 text-sm font-medium text-zinc-100
                           hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500
                           active:scale-95 transition"
                aria-label="Search"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </button>
            </form>

            <Link href="/pages/contact-us">Contact-us</Link>
            
          </div>

          {/* Mobile actions: search icon + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Search toggle */}
            <button
              type="button"
              onClick={() => {
                setSearchOpen((v) => !v);
                // collapse menu if opening search
                if (!searchOpen) setMenuOpen(false);
              }}
              aria-label="Toggle search"
              className="rounded-md border border-zinc-700 bg-zinc-800/60 p-2 text-zinc-100
                         hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => {
                setMenuOpen((v) => !v);
                // collapse search if opening menu
                if (!menuOpen) setSearchOpen(false);
              }}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="rounded-md border border-zinc-700 bg-zinc-800/60 p-2 text-zinc-100
                         hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {/* hamburger icon */}
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            
          </div>
        </div>

        {/* Mobile search drawer */}
        <div
          className={`md:hidden border-t border-zinc-800 px-4 pt-3 pb-3 transition-[max-height,opacity] duration-200 ease-out ${
            searchOpen ? "max-h-28 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <form action="/search" method="get" role="search" className="flex items-center gap-2">
            <label htmlFor="site-search-mobile" className="sr-only">Search blog posts</label>
            <input
              id="site-search-mobile"
              type="search"
              name="q"
              placeholder="Search blog posts…"
              className="flex-1 rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-sm
                         text-zinc-100 placeholder-zinc-400 outline-none
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-md border border-zinc-700
                         bg-zinc-800/60 px-3 py-2 text-sm font-medium text-zinc-100
                         hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500
                         active:scale-95 transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Mobile nav panel */}
        <nav
          id="mobile-nav"
          className={`md:hidden border-t border-zinc-800 px-4 pt-3 pb-4 transition-[max-height,opacity] duration-200 ease-out ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/pages/about-author" onClick={() => setMenuOpen(false)}>About-Author</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
            <li><Link href="/pages/about-rensecurity" onClick={() => setMenuOpen(false)}>About-Rensecurity</Link></li>
            <li className="mt-2 border-t border-zinc-800 pt-2">
              <Link href="/pages/contact-us" onClick={() => setMenuOpen(false)}>Contact-us</Link>
            </li>
          </ul>
        </nav>
        
      </header>
    </>
  );
}
