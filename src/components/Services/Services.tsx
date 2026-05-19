"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Video, PenTool, TrendingUp, Zap } from 'lucide-react';
import Magnetic from '../Effects/Magnetic';

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

const Services = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="services" className="py-12 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h5 className="text-base text-white text-center font-medium mb-4">OUR PROCESS.</h5>
          <h2 className="text-[clamp(1rem,5vw,2rem)] font-bold leading-[1.1] mb-4 tracking-[-2px] text-[#a8aeb6]">Our strategy to get
            <br />
            <span className="text-gradient">you leads with content
            </span></h2>
        </motion.div>

        <div className="relative flex flex-col gap-8 py-8" ref={timelineRef}>
          {/* Scroll-driven blue progress line */}
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] md:-translate-x-1/2 bg-[rgba(255,255,255,0.08)] z-0 overflow-hidden">
            <motion.div className="w-full bg-[linear-gradient(180deg,#2b4cdd_0%,#4cc9f0_100%)] shadow-[0_0_12px_rgba(43,76,221,0.7)] origin-top" style={{ height: lineHeight }} />
          </div>
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`relative flex w-full justify-end ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="absolute top-1/2 left-[20px] md:left-1/2 w-5 h-5 rounded-full -translate-x-1/2 -translate-y-1/2 border-[4px] border-black z-[2] shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ backgroundColor: service.color }}></div>
                <div className="w-[calc(100%-50px)] md:w-[calc(50%-3rem)]">
                  <Magnetic>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: false, margin: "-50px" }}
                      className={`group/card bg-[var(--card-bg)] border border-[var(--card-border)] p-8 md:p-12 rounded-[24px] relative overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-default ${isLeft ? 'md:-rotate-1' : 'md:rotate-1'} hover:!-translate-y-[10px] hover:!rotate-0 hover:!scale-[1.02] hover:bg-[rgba(255,255,255,0.05)]`}
                      style={{ '--accent-color': service.color } as any}
                    >
                      <div className="w-[60px] h-[60px] bg-[rgba(255,255,255,0.05)] rounded-2xl flex items-center justify-center mb-8 text-[var(--accent-color)] transition-all duration-300 group-hover/card:bg-[var(--accent-color)] group-hover/card:text-white group-hover/card:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-[var(--text-secondary)] leading-[1.6] text-base">{service.description}</p>
                      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,var(--accent-color)_0%,transparent_70%)] opacity-0 transition-opacity duration-[400ms] ease-in-out pointer-events-none blur-[50px] -z-10 group-hover/card:opacity-10"></div>
                    </motion.div>
                  </Magnetic>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
