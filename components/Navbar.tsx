'use client';
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        VideoAlchemist
      </Link>


      <ul className="nav-links">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#portfolio">Portfolios</Link>
        </li>
        <li>
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        
      </ul>
      
        <div className="relative ">
 
          <Image
            src="/social-handle.png"   
            alt="social"
            fill
            className="object-cover"
          />
 
        </div>
     
 
    </nav>
  );
}
