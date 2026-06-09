"use client";
import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "@/components/ParticlesBackground";

import {
  FaSchool,
  FaBook,
  FaFlask,
  FaDesktop,
  FaBus,
  FaFutbol,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";


  
export default function Home() {
  return (
    <>
  <ParticlesBackground />

      {/* Motto Section */}
      <section className="hero">
        <h1>Knowledge • Discipline • Excellence</h1>
        <p>Empowering Young Minds for a Brighter Tomorrow</p>
      </section>

      {/* Admission Announcement */}
      <section className="announcement">
  <div className="scroll-text">
    🎓 Admissions Open for Academic Year 2026-27 | Limited Seats Available 🎓
  </div>
</section>

      {/* Welcome Section */}
      <section className="welcome">

  <div className="welcome-content">

    <h3 className="welcome-text">Welcome to</h3>

    <h2 className="school-name">
      Sri Ramajayam Matric Higher Secondary School
    </h2>

    <h3 className="since-text">Since 2001</h3>

    <p>
      “A Man of purity in nature with a strong will power” was born in a poor family.
      Due to his hardwork and continuous effort he over came a lot of problems and
      sufferings in his day to day life which pushed him to become a great person in
      this society.
    </p>

    <p>
      He earned a title of “A Man Rising From Hardwork” awarded by “Shivaji Academy”
      such a Hardworker realized the difficulties of poor and the intention to help
      the poor motivated him to become the founder of “SRI RAMAJAYAM EDUCATIONAL TRUST”
      in the year 2000 along with three trustees.
    </p>

  </div>

  <div className="welcome-image">
    <Image
      src="/image/school.jpeg"
      alt="School"
      width={600}
      height={400}
    />
  </div>

</section>

<section className="counter-section">

  <div className="counter-card">
    <h2>50+</h2>
    <p>Experienced Staff</p>
  </div>

  <div className="counter-card">
    <h2>15+</h2>
    <p>Awards</p>
  </div>

  <div className="counter-card">
    <h2>100%</h2>
    <p>Academic Excellence</p>
  </div>

  <div className="counter-card">
    <h2>2000+</h2>
    <p>Students Enrolled</p>
  </div>

  <div className="counter-card">
    <h2>5000+</h2>
    <p>Alumni Network</p>
  </div>

</section>
<section className="facilities-section">

  <h2 className="facilities-heading">Our Facilities</h2>

  <div className="facilities-grid">

    <div className="facility-card">
      <FaSchool className="facility-icon" />
      <h3>Smart Classrooms</h3>
    </div>

    <div className="facility-card">
      <FaBook className="facility-icon" />
      <h3>Digital Library</h3>
    </div>

    <div className="facility-card">
      <FaFlask className="facility-icon" />
      <h3>Science Laboratories</h3>
    </div>

    <div className="facility-card">
      <FaDesktop className="facility-icon" />
      <h3>Computer Laboratory</h3>
    </div>

    <div className="facility-card">
      <FaBus className="facility-icon" />
      <h3>Transport Facility</h3>
    </div>

    <div className="facility-card">
      <FaFutbol className="facility-icon" />
      <h3>Sports & Playground</h3>
    </div>

    <div className="facility-card">
      <FaShieldAlt className="facility-icon" />
      <h3>CCTV Secured Campus</h3>
    </div>

    <div className="facility-card">
      <FaLeaf className="facility-icon" />
      <h3>Green Campus Environment</h3>
    </div>

  </div>

</section>
<footer className="footer">

  <div className="footer-container">

    <div className="footer-section">
      <h3>Sri Ramajayam Matric Higher Secondary School</h3>
      <p>
        Empowering young minds with knowledge, discipline, and values
        since 2001.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>

      <ul>
        <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About Us</Link></li>
      <li><Link href="/academics">Academics</Link></li>
      <li><Link href="/facilities">Facilities</Link></li>
      <li><Link href="/admissions">Admissions</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact Us</h3>

      <p>📍 Tiruvannamalai, Tamil Nadu</p>
      <p>📞 +91 99655 27501</p>
      <p>☎️ +91 94433 29983</p>
      <p>✉️ sriramajayammhss@gmail.com</p>
    </div>

    </div>

    <div className="footer-bottom">
    © 2026 Sri Ramajayam Matric Higher Secondary School. All Rights Reserved.
  </div>

</footer>


</>
  );
}