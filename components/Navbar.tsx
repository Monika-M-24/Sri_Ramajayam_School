"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <h2>Sri Ramajayam Matric School</h2>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/academics">Academics</Link></li>
        <li><Link href="/facilities">Facilities</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/achievements">Achievements</Link></li>
        <li><Link href="/admissions">Admissions</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}