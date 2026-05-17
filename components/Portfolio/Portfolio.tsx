"use client";

import React, { useState } from 'react';
import styles from './Portfolio.module.css';
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
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span className="text-gradient">Masterpieces</span></h2>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={styles.card}
              >
                <img src={item.img} alt={item.title} className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.itemCategory}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
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
