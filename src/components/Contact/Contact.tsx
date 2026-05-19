"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Calendar } from 'lucide-react';
import Magnetic from '../Effects/Magnetic';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1rem,6vw,3rem)] font-bold leading-[1.1] mb-6 tracking-[-2px] text-[#a8aeb6]"
        >
          Let's Create <span className="text-gradient">Magic</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[var(--text-secondary)] text-lg max-w-[600px] mx-auto"
        >
          Ready to elevate your content? Fill out the form below or book a call with our team to get started.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-[1200px] mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[24px] p-8 lg:p-12 flex flex-col gap-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-white shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-[var(--text-secondary)] leading-[1.6]">hello@letsmakevisuals.com</p>
              <p className="text-[var(--text-secondary)] leading-[1.6]">We usually reply within 24 hours.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-white shrink-0">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Book a Call</h3>
              <p className="text-[var(--text-secondary)] leading-[1.6]">Schedule a 15-minute discovery call.</p>
              <p className="mt-2 text-[var(--text-secondary)] leading-[1.6]">
                <a href="#" className="text-gradient font-semibold">Choose a time →</a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-white shrink-0">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-[var(--text-secondary)] leading-[1.6]">Follow us for tips and our latest work.</p>
              <div className="flex gap-4 mt-4">
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
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">First Name</label>
                <input type="text" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white text-base transition-all duration-300 focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)]" placeholder="John" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">Last Name</label>
                <input type="text" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white text-base transition-all duration-300 focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)]" placeholder="Doe" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
              <input type="email" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white text-base transition-all duration-300 focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)]" placeholder="john@example.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">What are you looking for?</label>
              <select className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white text-base transition-all duration-300 focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_24_24%22_fill=%22none%22_stroke=%22white%22_stroke-width=%222%22_stroke-linecap=%22round%22_stroke-linejoin=%22round%22%3e%3cpolyline_points=%226_9_12_15_18_9%22%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[right_1.25rem_center] bg-[length:1em] cursor-pointer" required defaultValue="">
                <option value="" disabled className="bg-[#111] text-white p-4">Select a service</option>
                <option value="shorts" className="bg-[#111] text-white p-4">Short-form Content (TikTok, Reels, Shorts)</option>
                <option value="longform" className="bg-[#111] text-white p-4">Long-form Content (YouTube, Podcasts)</option>
                <option value="ads" className="bg-[#111] text-white p-4">Video Ads & UGC</option>
                <option value="other" className="bg-[#111] text-white p-4">Other / Custom Request</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Message</label>
              <textarea className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-5 py-4 text-white text-base transition-all duration-300 focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.05)] min-h-[150px] resize-y" placeholder="Tell us about your project..." required></textarea>
            </div>

            <Magnetic>
              <button type="submit" className="w-full bg-white text-black border-none rounded-xl p-5 text-base font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
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
