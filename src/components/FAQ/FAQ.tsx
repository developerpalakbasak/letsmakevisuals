"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Tell me about your agency?",
    answer:
      "We are a full-service video editing agency specializing in short-form and long-form content. Our team of expert editors help brands and creators scale their content production without sacrificing quality.",
  },
  {
    question: "What if I don't get the results?",
    answer:
      "We offer unlimited revisions until you are 100% satisfied. If for any reason you're not happy with the results, we'll work with you to make it right or provide a refund as per our guarantee policy.",
  },
  {
    question: "Tell me about your content plan?",
    answer:
      "Our content plans are tailored to your specific goals and platforms. We handle everything from scripting and editing to captions and thumbnails, so you can focus on creating while we handle production.",
  },
  {
    question: "Why wouldn't I hire a freelancer?",
    answer:
      "Unlike freelancers, we offer a dedicated team, consistent availability, faster turnaround times, and a structured process. No more chasing editors or dealing with inconsistent quality.",
  },
  {
    question: "What services will you provide?",
    answer:
      "We provide short-form video editing (TikTok, Reels, Shorts), long-form YouTube editing, thumbnail design, captions, sound design, and full content strategy support.",
  },
  {
    question: "Tell me about your workflow?",
    answer:
      "You share your raw footage, we edit and deliver within 24–48 hours, you review and request revisions, and we finalize. Simple, fast, and fully managed from our end.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div
      className="bg-[#1a1a1a] rounded-lg overflow-hidden cursor-pointer"
      onClick={onToggle}
    >
      {/* Question row */}
      <div className="flex justify-between items-center px-6 py-5">
        <span className="text-white text-[0.95rem] font-normal leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-4 w-[30px] h-[30px] rounded-full bg-[#2a2a2a] flex items-center justify-center"
        >
          <ChevronDown size={16} className="text-white" />
        </motion.div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#999] text-sm leading-relaxed px-6 pb-5 m-0">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" className="bg-[#0d0d0d] py-20 px-5">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#888] text-[0.7rem] font-semibold tracking-[0.15em] uppercase mb-3">
            Any Queries You Have
          </p>
          <h2 className="text-[#d0d0d0] text-[clamp(1.8rem,4vw,2.6rem)] font-normal m-0 leading-tight">
            Questions You May{" "}
            <span className="text-white font-bold">Ask</span>
          </h2>
        </div>

        {/* Two independent flex columns */}
        <div className="flex gap-4 items-start">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-4">
            {leftFaqs.map((faq, i) => {
              const originalIndex = i * 2;
              return (
                <FAQItem
                  key={originalIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === originalIndex}
                  onToggle={() => handleToggle(originalIndex)}
                />
              );
            })}
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-4">
            {rightFaqs.map((faq, i) => {
              const originalIndex = i * 2 + 1;
              return (
                <FAQItem
                  key={originalIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === originalIndex}
                  onToggle={() => handleToggle(originalIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
