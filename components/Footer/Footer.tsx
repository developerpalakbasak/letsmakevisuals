"use client";

import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Youtube = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              LETSMAKE<span>VISUALS</span>
            </Link>
            <p className={styles.tagline}>
              Empowering creators to reach millions through high-performance visual storytelling.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
              <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
              <a href="#" className={styles.socialLink}><Youtube size={20} /></a>
              <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
            </div>
          </div>


          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Company</h4>
            <Link href="#services" className={styles.link}>Services</Link>
            <Link href="#portfolio" className={styles.link}>Portfolio</Link>
            <Link href="#testimonials" className={styles.link}>Testimonials</Link>
            <Link href="#faq" className={styles.link}>FAQ</Link>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Legal</h4>
            <Link href="#" className={styles.link}>Privacy Policy</Link>
            <Link href="#" className={styles.link}>Terms of Service</Link>
            <Link href="#" className={styles.link}>Cookie Policy</Link>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Contact</h4>
            <p className={styles.text}>hello@letsmakevisuals.com</p>
            <p className={styles.text}>London, United Kingdom</p>
            <button className={styles.footerCta}>Book a Call</button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} LETSMAKEVISUALS. All rights reserved.</p>
          <p>Built with Passion for Creators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
