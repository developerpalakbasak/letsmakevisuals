"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'YouTube', 'Shorts', 'Ads', 'Course'];

const items = [
  { id: 1, category: 'Shorts', title: 'Viral Hook Optimization', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600' },
  { id: 2, category: 'YouTube', title: 'Documentary Style Editing', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600' },
  { id: 3, category: 'Ads', title: 'High Conversion UGC', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600' },
  { id: 4, category: 'Course', title: 'Educational Content Design', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600' },
  { id: 5, category: 'Shorts', title: 'Gaming Highlights Reel', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600' },
  { id: 6, category: 'YouTube', title: 'Vlog Storytelling', img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=600' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center gap-8">
          <div className='flex flex-col gap-2 justify-center items-center'>
            <p>Our Work</p>
            <h2 className="text-[clamp(1rem,6vw,3rem)] text-center font-bold leading-[1.1] mb-6 tracking-[-2px] text-[#a8aeb6]">Some of Our
              <br />
              <span className="text-gradient">
                Featured Projects</span></h2>
          </div>
          <div className="flex gap-4 flex-wrap justify-center bg-[rgba(255,255,255,0.05)] p-2 rounded-[50px] border border-[var(--card-border)]">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`py-[0.6rem] px-[1.5rem] rounded-[50px] font-semibold text-[0.9rem] text-[var(--text-secondary)] transition-all duration-300 ${activeCategory === cat ? 'bg-[var(--primary)] text-white shadow-[0_0_15px_var(--primary-glow)]' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[24px] overflow-hidden aspect-video cursor-pointer border border-[var(--card-border)] group"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,transparent_60%)] flex flex-col justify-end p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[0.75rem] font-bold uppercase text-[var(--primary)] mb-2">{item.category}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
