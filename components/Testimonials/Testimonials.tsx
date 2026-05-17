"use client";

import React from 'react';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Hormozi",
    role: "Acquisition.com",
    content: "The best in the game. They understand retention better than anyone I've worked with.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Iman Gadzhi",
    role: "Agency Owner",
    content: "Scale was effortless once we brought them on. Quality is unmatched.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Vanessa Lau",
    role: "Content Creator",
    content: "My engagement tripled in the first month. They are true partners in growth.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Results That <span className="text-gradient">Speak</span></h2>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <Quote className={styles.quoteIcon} size={40} />
              <p className={styles.content}>{t.content}</p>
              <div className={styles.author}>
                <img src={t.img} alt={t.name} className={styles.avatar} />
                <div className={styles.info}>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
