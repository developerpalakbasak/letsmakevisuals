"use client";

import React from 'react';
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(1rem,6vw,3rem)] text-center font-bold leading-[1.1] mb-6 tracking-[-2px] text-[#a8aeb6]">
            Why <span className="bg-gradient-to-r from-white to-[#bdbdbd] bg-clip-text text-transparent">Choose Us?</span>
          </h2>
          <p className="text-[1.1rem] text-[#bdbdbd]">We don&apos;t just edit. We grow your brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto items-stretch">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] p-12 rounded-[32px] relative flex flex-col">
            <p className="text-[1.75rem] font-extrabold mb-10 text-center text-white">Average Agency</p>
            <div className="flex flex-col gap-5 mb-12">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4 text-[1rem] font-medium text-[#bdbdbd]">
                  <X className="text-[#ff4d4d]" size={20} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[rgba(43,76,221,0.05)] border border-[#2b4cdd] shadow-[0_20px_40px_rgba(43,76,221,0.1)] p-12 rounded-[32px] relative flex flex-col md:scale-105 transition-transform duration-300">
            <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 bg-[#2b4cdd] text-white py-2 px-4 rounded-full text-[0.8rem] font-bold whitespace-nowrap">
              Highly Recommended
            </div>
            <p className="text-[1.75rem] font-extrabold mb-10 text-center text-white">LETSMAKEVISUALS</p>
            <div className="flex flex-col gap-5 mb-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4 text-[1rem] font-medium text-white">
                  <Check className="text-[#4dfbaf]" size={20} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Bonuses Section */}
            <div className="mb-8 p-6 rounded-[20px] bg-black/40 border border-[rgba(255,255,255,0.05)] flex flex-col gap-4 text-left">
              <span className="text-[1.05rem] font-semibold text-white">Bonuses you get with us:</span>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[1rem] font-medium text-white">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#3b82f6] text-white shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Free Go High Level Subscription</span>
                </div>
                <div className="flex items-center gap-3 text-[1rem] font-medium text-white">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#3b82f6] text-white shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>Free 1-on- 1 Consultancy</span>
                </div>
              </div>
            </div>

            <button className="bg-[#2b4cdd] text-white p-4 rounded-[12px] font-bold mt-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(43,76,221,0.4)] cursor-pointer border-none">
              Scale My Brand
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
