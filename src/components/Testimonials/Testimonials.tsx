"use client";

import React from 'react';
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
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(1rem,6vw,3rem)] text-center font-bold leading-[1.1] mb-6 tracking-[-2px] text-[#a8aeb6]">Results That <span className="text-gradient">Speak</span></h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] p-12 rounded-[24px] flex flex-col gap-8 transition-all duration-300 hover:-translate-y-[5px] hover:border-[var(--primary)] hover:bg-[rgba(255,255,255,0.05)]"
            >
              <Quote className="text-[var(--primary)] opacity-50" size={40} />
              <p className="text-[1.1rem] leading-[1.6] text-white italic">{t.content}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.img} alt={t.name} className="w-[50px] h-[50px] rounded-full object-cover border-2 border-[var(--primary)]" />
                <div>
                  <h4 className="font-bold text-base">{t.name}</h4>
                  <p className="text-[var(--text-secondary)] text-[0.85rem]">{t.role}</p>
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
