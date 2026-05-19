"use client";

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Creator A', 'Brand B', 'Influencer C', 'Studio D', 'Media E', 'Agency F',
  'Creator G', 'Brand H', 'Influencer I', 'Studio J', 'Media K', 'Agency L'
];

const SocialProof = () => {
  return (
    <section className="py-8 bg-black border-y border-[var(--card-border)]">
      <div className="container mx-auto px-4">
        <p className="text-center text-[var(--text-secondary)] text-[0.9rem] font-medium mb-10 uppercase tracking-[2px]">Trusted by the world&apos;s best creators & brands</p>
        
        <div className="overflow-hidden relative w-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-[150px] before:h-full before:bg-[linear-gradient(to_right,#000,transparent)] before:z-[2] before:pointer-events-none after:content-[''] after:absolute after:top-0 after:right-0 after:w-[150px] after:h-full after:bg-[linear-gradient(to_left,#000,transparent)] after:z-[2] after:pointer-events-none">
          <motion.div 
            className="flex gap-16 w-max"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-[rgba(255,255,255,0.2)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(255,255,255,0.8)]">
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
