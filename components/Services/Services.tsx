"use client";

import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { Video, PenTool, TrendingUp, Zap } from 'lucide-react';

const services = [
  {
    icon: <Video size={32} />,
    title: "High-End Editing",
    description: "Retain attention with rapid-fire cuts, dynamic subtitles, and cinematic sound design.",
    color: "var(--primary)"
  },
  {
    icon: <PenTool size={32} />,
    title: "Viral Scripting",
    description: "Hooks that stop the scroll and scripts that drive engagement and conversions.",
    color: "var(--accent)"
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Growth Strategy",
    description: "Data-driven approach to distribution across TikTok, Reels, and YouTube Shorts.",
    color: "#4CC9F0"
  },
  {
    icon: <Zap size={32} />,
    title: "Full Management",
    description: "Complete hands-off solution from content ideation to final posting and analytics.",
    color: "#F72585"
  }
];

import Magnetic from '../Effects/Magnetic';

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>All-In-One <span className="text-gradient">Powerhouse</span></h2>
          <p className={styles.subtitle}>Everything you need to dominate the short-form landscape.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Magnetic key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={styles.card}
                style={{ '--accent-color': service.color } as any}
              >
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <div className={styles.cardGlow}></div>
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
