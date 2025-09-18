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

        <div className="actions">
        <form action="/search" method="get" role="search" className="search">
          <input type="search" name="q" placeholder="Search blog posts…" />
        </form> 
          <Link href="/pages/contact-us">Contact-us</Link>
        </div>
      </div>
    </header>
    </>
  );
}