"use client";

import React from 'react';
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
    <footer className="pt-32 pb-8 bg-black border-t border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-16 mb-24">
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-[1.5rem] font-extrabold text-white tracking-wider">
              LETSMAKE<span className="text-[#2b4cdd]">VISUALS</span>
            </Link>
            <p className="text-[#bdbdbd] leading-relaxed max-w-[300px] text-[0.95rem]">
              Empowering creators to reach millions through high-performance visual storytelling.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[rgba(255,255,255,0.05)] rounded-full flex items-center justify-center text-white transition-all duration-300 border border-[rgba(255,255,255,0.1)] hover:bg-[#2b4cdd] hover:border-[#2b4cdd] hover:-translate-y-[3px]">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[rgba(255,255,255,0.05)] rounded-full flex items-center justify-center text-white transition-all duration-300 border border-[rgba(255,255,255,0.1)] hover:bg-[#2b4cdd] hover:border-[#2b4cdd] hover:-translate-y-[3px]">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[rgba(255,255,255,0.05)] rounded-full flex items-center justify-center text-white transition-all duration-300 border border-[rgba(255,255,255,0.1)] hover:bg-[#2b4cdd] hover:border-[#2b4cdd] hover:-translate-y-[3px]">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[rgba(255,255,255,0.05)] rounded-full flex items-center justify-center text-white transition-all duration-300 border border-[rgba(255,255,255,0.1)] hover:bg-[#2b4cdd] hover:border-[#2b4cdd] hover:-translate-y-[3px]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[1.1rem] font-bold mb-2 text-white">Company</h4>
            <Link href="#services" className="text-[#bdbdbd] text-[0.95rem] transition-colors duration-300 hover:text-white">Services</Link>
            <Link href="#portfolio" className="text-[#bdbdbd] text-[0.95rem] transition-colors duration-300 hover:text-white">Portfolio</Link>
            <Link href="#testimonials" className="text-[#bdbdbd] text-[0.95rem] transition-colors duration-300 hover:text-white">Testimonials</Link>
            <Link href="#faq" className="text-[#bdbdbd] text-[0.95rem] transition-colors duration-300 hover:text-white">FAQ</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[1.1rem] font-bold mb-2 text-white">Legal</h4>
            <Link href="#" className="text-[#bdbdbd] text-[0.95rem] transition-colors duration-300 hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-[#bdbdbd] text-[0.95rem] transition-colors duration-300 hover:text-white">Terms of Service</Link>
            <Link href="#" className="text-[#bdbdbd] text-[0.95rem] transition-colors duration-300 hover:text-white">Cookie Policy</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[1.1rem] font-bold mb-2 text-white">Contact</h4>
            <p className="text-[#bdbdbd] text-[0.95rem]">hello@letsmakevisuals.com</p>
            <p className="text-[#bdbdbd] text-[0.95rem]">London, United Kingdom</p>
            <button className="bg-[#2b4cdd] text-white py-[0.8rem] px-[1.5rem] rounded-[12px] font-bold mt-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(43,76,221,0.4)] text-left w-fit cursor-pointer border-none">
              Book a Call
            </button>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0 text-center sm:text-left text-[#444] text-[0.85rem]">
          <p>© {new Date().getFullYear()} LETSMAKEVISUALS. All rights reserved.</p>
          <p>Built with Passion for Creators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
