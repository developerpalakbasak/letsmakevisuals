"use client";

import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

import Magnetic from '../Effects/Magnetic';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.badge}
          >
            <span>New</span> Elevate Your Content Strategy
          </motion.div>

          <h1 className={styles.title}>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ display: 'block' }}
            >
              Mastering the Art of
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gradient"
              style={{ display: 'block' }}
            >
              Viral Storytelling
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={styles.description}
          >
            We help creators and brands scale through high-performance short-form content.
            From scripting to distribution, we handle everything.
          </motion.p>

          <div className={styles.actions}>
            <Magnetic>
              <button className={styles.primaryBtn}>
                Get Started <ArrowRight size={20} />
              </button>
            </Magnetic>
            <div className={styles.socialProof}>
              <div className={styles.avatarGroup}>
                <img src="https://i.pravatar.cc/100?img=11" alt="Client" className={styles.avatar} />
                <img src="https://i.pravatar.cc/100?img=12" alt="Client" className={styles.avatar} />
                <img src="https://i.pravatar.cc/100?img=13" alt="Client" className={styles.avatar} />
                <img src="https://i.pravatar.cc/100?img=14" alt="Client" className={styles.avatar} />
              </div>
              <div className={styles.socialText}>
                <p className={styles.socialTitle}>Loved by 500+ Businesses worldwide.</p>
                <p className={styles.socialSubtitle}>Our Clients Speak for Us</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={styles.videoWrapper}
        >
          <div className={styles.videoContainer}>
            <div className={styles.videoPlaceholder}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              >
                <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
              </video>
              <div className={styles.videoOverlay}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
