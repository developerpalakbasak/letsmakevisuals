"use client";

import React from 'react';
import styles from './SocialProof.module.css';
import { motion } from 'framer-motion';

const logos = [
  'Creator A', 'Brand B', 'Influencer C', 'Studio D', 'Media E', 'Agency F',
  'Creator G', 'Brand H', 'Influencer I', 'Studio J', 'Media K', 'Agency L'
];

const SocialProof = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>Trusted by the world&apos;s best creators & brands</p>
        
        <div className={styles.marqueeContainer}>
          <motion.div 
            className={styles.marquee}
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className={styles.logoItem}>
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
