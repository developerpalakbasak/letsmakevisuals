"use client";

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your turnaround time?",
    answer: "Typically, we deliver the first draft within 24-48 hours. Depending on the complexity and volume, this may vary, but we prioritize speed without compromising quality."
  },
  {
    question: "Which platforms do you support?",
    answer: "We specialize in TikTok, Instagram Reels, and YouTube Shorts. We also handle long-form YouTube editing and LinkedIn video content."
  },
  {
    question: "Do you provide the raw files?",
    answer: "Yes, we can provide project files upon request, depending on the plan you choose."
  },
  {
    question: "How do revisions work?",
    answer: "We offer unlimited revisions until you are 100% satisfied. Our goal is to make sure the content perfectly aligns with your brand voice."
  },
  {
    question: "How do I get started?",
    answer: "Simply book a discovery call through our website. We'll discuss your goals, content style, and how we can best support your growth."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={styles.answer}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked <span className="text-gradient">Questions</span></h2>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
