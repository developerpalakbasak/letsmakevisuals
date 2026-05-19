"use client";

import React, { useState } from 'react';
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
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden transition-colors duration-300 hover:border-[rgba(255,255,255,0.2)]">
      <button className="w-full py-6 px-8 flex justify-between items-center text-left text-[1.1rem] font-semibold text-white bg-transparent border-none cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-8 pb-6 text-[var(--text-secondary)] leading-[1.6]"
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
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(1rem,6vw,3rem)] font-bold leading-[1.1] mb-6 tracking-[-2px] text-[#a8aeb6]">Frequently Asked <span className="text-gradient">Questions</span></h2>
        </div>
        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
