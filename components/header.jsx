import Link from "next/link";

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

    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">▲ <span>NEXT.JS</span></Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href='/pages/about-us'>About us</Link>
          <Link href="/pages/blog">Blogs</Link>
          <Link href="/pages/contact-us">Contact us</Link>
          
        </nav>

        <div className="actions">
          <form action="/search" role="search" className="search">
            <input type="search" placeholder="Search documentation…" />
          </form>
          <Link className="btn" href="/deploy">Deploy</Link>
          <Link className="btn btn--light" href="/learn">Learn</Link>
        </div>
      </div>
    </header>
    </>
  );
}