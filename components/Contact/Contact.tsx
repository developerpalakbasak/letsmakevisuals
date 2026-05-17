"use client";

import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Calendar } from 'lucide-react';
import Magnetic from '../Effects/Magnetic';

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          Let's Create <span className="text-gradient">Magic</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.subtitle}
        >
          Ready to elevate your content? Fill out the form below or book a call with our team to get started.
        </motion.p>
      </div>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.infoCard}
        >
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Mail size={24} />
            </div>
            <div className={styles.infoText}>
              <h3>Email Us</h3>
              <p>hello@letsmakevisuals.com</p>
              <p>We usually reply within 24 hours.</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Calendar size={24} />
            </div>
            <div className={styles.infoText}>
              <h3>Book a Call</h3>
              <p>Schedule a 15-minute discovery call.</p>
              <p style={{ marginTop: '0.5rem' }}>
                <a href="#" className="text-gradient" style={{ fontWeight: 600 }}>Choose a time →</a>
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <MessageSquare size={24} />
            </div>
            <div className={styles.infoText}>
              <h3>Social Media</h3>
              <p>Follow us for tips and our latest work.</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="#" className="text-gradient">Instagram</a>
                <a href="#" className="text-gradient">Twitter</a>
                <a href="#" className="text-gradient">LinkedIn</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>First Name</label>
                <input type="text" className={styles.input} placeholder="John" required />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Last Name</label>
                <input type="text" className={styles.input} placeholder="Doe" required />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input type="email" className={styles.input} placeholder="john@example.com" required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>What are you looking for?</label>
              <select className={styles.select} required defaultValue="">
                <option value="" disabled>Select a service</option>
                <option value="shorts">Short-form Content (TikTok, Reels, Shorts)</option>
                <option value="longform">Long-form Content (YouTube, Podcasts)</option>
                <option value="ads">Video Ads & UGC</option>
                <option value="other">Other / Custom Request</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Message</label>
              <textarea className={styles.textarea} placeholder="Tell us about your project..." required></textarea>
            </div>

            <Magnetic>
              <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={18} />
              </button>
            </Magnetic>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
