'use client';

import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        VideoAlchemist
      </Link>

      {/* LINKS */}
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/features">About</Link>
        </li>
        <li>
          <Link href="/pricing">Portfolios</Link>
        </li>
        <li>
          <Link href="/blog">Testimonials</Link>
        </li>
        <li>
          <Link href="/dashboard">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
