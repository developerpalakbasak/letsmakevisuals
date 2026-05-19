"use client";

import React from 'react';
import styles from './Comparison.module.css';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const Comparison = () => {
  const points = [
    "Viral Hook Strategy",
    "Retention-Focused Editing",
    "Professional Sound Design",
    "Custom Motion Graphics",
    "Scripting Assistance",
    "Content Distribution Strategy",
    "Dedicated Account Manager",
    "24/7 Support"
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Why <span className="text-gradient">Choose Us?</span></h2>
          <p className={styles.subtitle}>We don&apos;t just edit. We grow your brand.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Average Agency</p>
            <div className={styles.list}>
              {points.map((point, index) => (
                <div key={index} className={styles.item}>
                  <X className={styles.iconRed} size={20} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.badge}>Highly Recommended</div>
            <p className={styles.cardTitle}>LETSMAKEVISUALS</p>
            <div className={styles.list}>
              {points.map((point, index) => (
                <div key={index} className={styles.item}>
                  <Check className={styles.iconGreen} size={20} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <button className={styles.cta}>Scale My Brand</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
