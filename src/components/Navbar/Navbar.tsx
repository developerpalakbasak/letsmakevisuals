"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Magnetic from '../Effects/Magnetic';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="fixed top-2 left-0 w-full flex justify-center z-[1000] px-5 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-[1000px] border border-[rgba(255,255,255,0.06)] rounded-[14px] pt-[0.6rem] pb-[0.6rem] pr-[0.6rem] pl-[1.2rem] transition-all duration-300 backdrop-blur-[12px] ${
          isScrolled
            ? 'bg-[rgba(18,18,20,0.95)] shadow-[0_10px_40px_rgba(0,0,0,0.5)]'
            : 'bg-[rgba(18,18,20,0.85)] shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <Magnetic>
            <Link href="/" className="flex items-center gap-3 text-[1.1rem] font-bold tracking-[-0.2px] text-white">
              <div className="w-[34px] h-[34px] bg-white rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17L9 7L13 17L19 7" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              LetsMakeVisuals
            </Link>
          </Magnetic>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link href={link.href} className="text-[0.9rem] font-medium text-[#a0a0a0] transition-colors duration-300 hover:text-white">
                  {link.name}
                </Link>
              </Magnetic>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Magnetic>
              <Link href="#contact">
                <button className="bg-[#2b4cdd] text-white px-5 py-3 rounded-[10px] font-semibold text-[0.9rem] transition-all duration-300 hover:bg-[#3b5ce0] hover:-translate-y-[1px] hover:shadow-[0_4px_15px_rgba(43,76,221,0.4)] cursor-pointer border-none">
                  Book A Call
                </button>
              </Link>
            </Magnetic>
          </div>

          <button
            className="block md:hidden text-white bg-transparent border-none cursor-pointer p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[calc(100%+10px)] left-0 w-full bg-[rgba(18,18,20,0.95)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-6 flex flex-col gap-6 z-[999] pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[1.1rem] font-medium text-[#a0a0a0] no-underline transition-colors duration-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-[#2b4cdd] text-white p-4 rounded-[10px] font-semibold text-center text-base border-none cursor-pointer hover:bg-[#3b5ce0] transition-colors duration-300">
                Book A Call
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
