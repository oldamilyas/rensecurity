import Link from "next/link";

export default function Header() {
  return (
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
  );
}