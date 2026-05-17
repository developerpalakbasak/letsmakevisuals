"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Upgrade.module.css';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, delay, className }: { value: string | number, delay: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const strValue = String(value);

  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex', overflow: 'hidden', padding: '0.1em 0' }}>
      {strValue.split('').map((char, i) => {
        const isEven = i % 2 === 0;
        const initialY = isEven ? 50 : -50;
        
        return (
          <motion.span
            key={i}
            initial={{ y: initialY, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: initialY, opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: delay + (i * 0.1), 
              ease: [0.16, 1, 0.3, 1] // Custom bezier for smooth spring-like carousel feel
            }}
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
};

const Upgrade = () => {
  const floatingBadges = [
    { text: "Fast Editing", top: "15%", left: "5%", rotate: -15, color: "var(--primary)" },
    { text: "Ad Creatives & VSL", top: "40%", left: "2%", rotate: 10, color: "var(--accent)" },
    { text: "Short Form Content", top: "10%", right: "5%", rotate: 12, color: "var(--primary)" },
    { text: "Youtube Videos", top: "35%", right: "2%", rotate: -8, color: "var(--accent)" },
  ];

  const stats = [
    { value: "200", unit: "%", label: "More Engagement", sublabel: "Viral Edits" },
    { value: "5", unit: "X", label: "More Reach", sublabel: "Strategic Distribution" },
    { value: "50", unit: "%", label: "More Leads", sublabel: "Automated Systems" },
  ];

  return (
    <section className={styles.section}>
      {floatingBadges.map((badge, index) => (
        <motion.div 
          key={index}
          className={styles.floatingBadge}
          style={{ 
            top: badge.top, 
            left: badge.left, 
            right: badge.right,
            transform: `rotate(${badge.rotate}deg)`,
            backgroundColor: badge.color
          }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [badge.rotate, badge.rotate + 5, badge.rotate]
          }}
          transition={{ 
            duration: 4 + index, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {badge.text}
        </motion.div>
      ))}

      <div className={`container ${styles.container}`}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.title}
        >
          Tired of boring video content that don&apos;t stand out? <br />
          <span className="text-gradient">It&apos;s time to upgrade the game with us!</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className={styles.statsGrid}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={styles.statItem}
            >
              <div className={styles.statHeader}>
                <AnimatedCounter 
                  value={stat.value} 
                  delay={index * 0.2 + 0.5} 
                  className={styles.value} 
                />
                <span className={styles.unit}>{stat.unit}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
              <p className={styles.sublabel}>{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Upgrade;
