"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

import Magnetic from '../Effects/Magnetic';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-[var(--nav-height)] overflow-hidden bg-black">
      <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[radial-gradient(circle,var(--primary-glow)_0%,transparent_70%)] blur-[80px] z-[1] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_70%)] blur-[80px] z-[1] pointer-events-none"></div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-[2] gap-16">
        <div className="max-w-[900px] pt-[65px]">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 py-2 px-4 bg-[rgba(255,255,255,0.05)] border border-[var(--card-border)] rounded-[50px] text-[0.85rem] font-medium my-4 text-[var(--text-secondary)]"
          >
            <span className="bg-[var(--primary)] text-white py-[0.1rem] px-[0.6rem] rounded-[50px] text-[0.75rem] font-bold uppercase">New</span> Elevate Your Content Strategy
          </motion.div> */}

          <h1 className="text-[clamp(1rem,6vw,3rem)] font-bold leading-[1.1] mb-6 tracking-[-2px] text-[#a8aeb6]">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ display: 'block' }}
            >
              Get More Leads
              <br />
              Using
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gradient block"
            >
              Quality Video Content
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[1.2rem] text-[var(--text-secondary)] max-w-[600px] mx-auto mb-10 leading-[1.6]"
          >
            We help entrepreneurs and businesses with Done-For-You organic content systems that generate leads on autopilot.
          </motion.p>

          <div className="flex justify-center gap-6 flex-wrap md:flex-row flex-col w-full md:w-auto">
            <Magnetic>
              <button className="bg-[var(--primary)] text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_var(--primary-glow)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_var(--primary-glow)] border-none cursor-pointer">
                Get Started <ArrowRight size={20} />
              </button>
            </Magnetic>
            <div className="flex items-center gap-4 text-left">
              <div className="flex items-center">
                <img src="https://i.pravatar.cc/100?img=11" alt="Client" className="w-[45px] h-[45px] rounded-full border-2 border-black ml-0 object-cover" />
                <img src="https://i.pravatar.cc/100?img=12" alt="Client" className="w-[45px] h-[45px] rounded-full border-2 border-black ml-[-15px] object-cover" />
                <img src="https://i.pravatar.cc/100?img=13" alt="Client" className="w-[45px] h-[45px] rounded-full border-2 border-black ml-[-15px] object-cover" />
                <img src="https://i.pravatar.cc/100?img=16" alt="Client" className="w-[45px] h-[45px] rounded-full border-2 border-black ml-[-15px] object-cover" />
              </div>
              <div className="flex flex-col justify-center gap-[0.1rem]">
                <p className="text-base font-semibold text-white m-0">Loved by 500+ Businesses worldwide.</p>
                <p className="text-[0.85rem] text-[#888] m-0">Our Clients Speak for Us</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-[1000px] perspective-[1000px]"
        >
          <div className="w-full aspect-video rounded-[24px] overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out hover:[transform:rotateX(2deg)_rotateY(-2deg)_scale(1.02)]">
            <div className="w-full h-full relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,transparent_100%)]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
