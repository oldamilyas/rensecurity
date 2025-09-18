import Link from "next/link";
import Script from "next/script";
import Image from "next/image";



export default function Header() {
  
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
      
      <Script
        id="ahrefs"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="HN8TyAGG/EwTFy2VescQtg"
        strategy="afterInteractive"
      />

    <header className="site-header">
      <div className="site-header__inner">

        

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.svg"  // put the file in /public/images/
            alt="Rensecurity"
            width={28}
            height={28}
            className="rounded"
            priority
          />
          <span className="font-semibold">Rensecurity</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href='/pages/about-author'>About-Author</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/pages/about-rensecurity">About-Rensecurity</Link>
          
        </nav>

        <div className="actions flex items-center gap-4">
          <form action="/search" method="get" role="search" className="flex items-center gap-2">
            <label htmlFor="site-search" className="sr-only">Search blog posts</label>

            <input
              id="site-search"
              type="search"
              name="q"
              placeholder="Search blog posts…"
              className="w-64 md:w-72 rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-sm
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
              {/* magnifying glass icon */}
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Search
            </button>
          </form>

          <Link href="/pages/contact-us">Contact-us</Link>
        </div>

      </div>
    </header>
    </>
  );
}