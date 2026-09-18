"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Home2Footer.module.css";
import { MapPin, Phone, Mail } from "lucide-react";
import { home2Routes } from "./home2InnerPagesData";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home2Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: footerRef });

  return (
    <footer 
      className={styles.footer}
      ref={footerRef}
    >
      <div className={styles.container}>
        
        <div className={styles.grid}>
          {/* Logo & Description */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <img src="/images/logo.webp" alt="Sri Chaitanya Logo" style={{ width: 40, height: 40 }} />
              <div className={styles.logoText}>
                <strong>Sri Chaitanya School</strong>
                <span>Techno Curriculum</span>
              </div>
            </div>
            <p className={styles.desc}>
              Empowering young minds with quality education and a vision for a brighter tomorrow.
            </p>
            <div className={styles.socials}>
              {/* Placeholders for social icons */}
              <a href="#" className={styles.socialLink}>FB</a>
              <a href="#" className={styles.socialLink}>IG</a>
              <a href="#" className={styles.socialLink}>TW</a>
              <a href="#" className={styles.socialLink}>IN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            {home2Routes.map((route) => (
              <Link key={route.href} href={route.href} className={styles.link}>
                {route.label}
              </Link>
            ))}
          </div>

          {/* Academics */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Academics</h4>
            <Link href="/home2/admissions" className={styles.link}>Curriculum</Link>
            <Link href="/home2/admissions" className={styles.link}>Academic Excellence</Link>
            <Link href="/home2/admissions" className={styles.link}>Co-Curricular</Link>
            <Link href="/home2/admissions" className={styles.link}>Clubs & Activities</Link>
            <Link href="/home2/admissions" className={styles.link}>Student Support</Link>
          </div>

          {/* Facilities */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Facilities</h4>
            <Link href="/home2/admissions" className={styles.link}>Infrastructure</Link>
            <Link href="/home2/admissions" className={styles.link}>Sports</Link>
            <Link href="/home2/admissions" className={styles.link}>Transport</Link>
            <Link href="/home2/admissions" className={styles.link}>Hostel</Link>
            <Link href="/home2/admissions" className={styles.link}>Safety & Security</Link>
          </div>

          {/* Contact */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <span># 8-2-293/82/A, Road No. 36, Jubilee Hills, Hyderabad, Telangana</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <span>+91 40 2355 2555 / 56</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <span>info@srichaitanya.net</span>
            </div>
            <div className={styles.contactItem}>
              <div style={{ width: 16 }} /> {/* spacer */}
              <span>www.srichaitanyaschool.net</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2024 Sri Chaitanya School. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/home2/admissions">Privacy Policy</Link>
            <span>|</span>
            <Link href="/home2/admissions">Terms of Use</Link>
            <span>|</span>
            <Link href="/home2/admissions">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
