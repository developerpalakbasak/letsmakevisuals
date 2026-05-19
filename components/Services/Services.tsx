"use client";

import React, { useRef } from 'react';
import styles from './Services.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
          <h5 className={styles.subtitle}>OUR PROCESS.</h5>
          <h2 className={styles.title}>Our strategy to get
            <br />
            <span className="text-gradient">you leads with content
            </span></h2>
        </motion.div>

        <div className={styles.timeline} ref={timelineRef}>
          {/* Scroll-driven blue progress line */}
          <div className={styles.timelineTrack}>
            <motion.div className={styles.timelineProgress} style={{ height: lineHeight }} />
          </div>
          {services.map((service, index) => (
            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineDot} style={{ backgroundColor: service.color }}></div>
              <div className={styles.cardWrapper}>
                <Magnetic>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: false, margin: "-50px" }}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
