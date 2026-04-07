"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav px-6 lg:px-20 py-4">
      
     
      <Link href="/" className="nav-logo">
        VideoAlchemist
      </Link>

      
      <ul className="nav-links hidden lg:flex">
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#portfolio">Portfolios</Link></li>
        <li><Link href="#testimonials">Testimonials</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>

      
      <div className="hidden lg:block">
        <Image
          src="/social-handle.png"
          alt="social"
          width={120}
          height={30}
        />
      </div>

    
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center py-6 gap-6 lg:hidden z-50">
          
          <Link href="#home" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="#portfolio" onClick={() => setOpen(false)}>Portfolios</Link>
          <Link href="#testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>

          <Image
            src="/social-handle.png"
            alt="social"
            width={120}
            height={30}
          />
        </div>
      )}
    </nav>
  );
}




