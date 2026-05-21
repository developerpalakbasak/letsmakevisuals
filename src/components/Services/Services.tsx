"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Video, PenTool, TrendingUp, Zap, Send, Flame, Heart, CheckCheck } from 'lucide-react';
import Magnetic from '../Effects/Magnetic';

/* ── Custom Platform Icons ─────────────────────────────────────── */
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);
const TiktokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

/* ── Service Data ──────────────────────────────────────────────── */
const services = [
  { icon: <Video size={32} />, title: "High-End Editing", description: "Retain attention with rapid-fire cuts, dynamic subtitles, and cinematic sound design.", color: "#2b4cdd" },
  { icon: <PenTool size={32} />, title: "Viral Scripting", description: "Hooks that stop the scroll and scripts that drive engagement and conversions.", color: "#7928ca" },
  { icon: <TrendingUp size={32} />, title: "Growth Strategy", description: "Data-driven approach to distribution across TikTok, Reels, and YouTube Shorts.", color: "#4CC9F0" },
  { icon: <Zap size={32} />, title: "Full Management", description: "Complete hands-off solution from content ideation to final posting and analytics.", color: "#F72585" },
  { icon: <Send size={32} />, title: "Post The Video", description: "All thats left now is to post the video and start counting the leads that come in.", color: "#2b4cdd" },
];

/* ── Floating bubble helper ────────────────────────────────────── */
const Bubble = ({ pos, border, bg, shadow, delay, dur, children }: any) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: dur ?? 4, repeat: Infinity, ease: "easeInOut", delay: delay ?? 0 }}
    className={`absolute ${pos} w-[70px] h-[70px] rounded-full border ${border} ${bg} ${shadow} flex items-center justify-center text-white z-20`}
  >
    {children}
  </motion.div>
);

/* ── Visual 0: High-End Editing ────────────────────────────────── */
const Visual0 = () => (
  <div className="relative w-full flex items-center justify-center py-10 min-h-[380px]">
    <div className="absolute w-[360px] h-[360px] bg-gradient-to-tr from-[#2b4cdd]/30 to-[#4cc9f0]/20 blur-[70px] rounded-full -z-10" />
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[rgba(43,76,221,0.25)] z-0" />
    <div className="relative w-[240px] h-[240px] rounded-full border border-[rgba(43,76,221,0.35)] bg-[#030303] shadow-[0_0_60px_rgba(43,76,221,0.4),inset_0_0_30px_rgba(43,76,221,0.08)] flex flex-col items-center justify-center z-10 select-none">
      <Video size={34} strokeWidth={1.5} className="text-[#2b4cdd] mb-2" />
      <span className="text-5xl font-extrabold text-white tracking-tighter">4K</span>
      <span className="text-[10px] tracking-widest text-[#4cc9f0] font-semibold uppercase mt-1">Ultra HD</span>
    </div>
    {/* Equalizer bars bubble */}
    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[6%] left-[14%] w-[70px] h-[70px] rounded-full border border-blue-500/30 bg-[#06090f] shadow-[0_0_25px_rgba(43,76,221,0.2)] flex items-end justify-center pb-3 gap-[3px] z-20">
      {[10, 18, 26, 16, 22].map((h, i) => (
        <motion.div key={i} animate={{ height: [`${h}px`, `${h + 10}px`, `${h}px`] }}
          transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
          className="w-[3px] bg-[#2b4cdd] rounded-full" />
      ))}
    </motion.div>
    <Bubble pos="top-[10%] right-[10%]" border="border-cyan-500/30" bg="bg-[#060f15]" shadow="shadow-[0_0_25px_rgba(76,201,240,0.2)]" delay={0.5} dur={5}>
      <span className="text-[10px] font-bold text-[#4cc9f0] tracking-widest">CUT</span>
    </Bubble>
    <Bubble pos="bottom-[6%] left-[38%]" border="border-blue-500/30" bg="bg-[#0a0a14]" shadow="shadow-[0_0_25px_rgba(43,76,221,0.2)]" delay={1} dur={4.5}>
      <Video size={26} className="text-[#4cc9f0]" strokeWidth={1.5} />
    </Bubble>
  </div>
);

/* ── Visual 1: Viral Scripting ─────────────────────────────────── */
const Visual1 = () => (
  <div className="relative w-full flex items-center justify-center py-10 min-h-[380px]">
    <div className="absolute w-[360px] h-[360px] bg-gradient-to-tr from-[#7928ca]/25 to-[#f72585]/20 blur-[70px] rounded-full -z-10" />
    {[1, 2, 3].map(i => (
      <motion.div key={i} animate={{ scale: [1, 1.18 + i * 0.08, 1], opacity: [0.15, 0, 0.15] }}
        transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeOut", delay: i * 0.4 }}
        className="absolute rounded-full border border-purple-500/30"
        style={{ width: `${190 + i * 45}px`, height: `${190 + i * 45}px` }} />
    ))}
    <div className="relative w-[240px] h-[240px] rounded-full border border-purple-500/30 bg-[#030303] shadow-[0_0_60px_rgba(121,40,202,0.4),inset_0_0_30px_rgba(121,40,202,0.08)] flex flex-col items-center justify-center z-10 select-none">
      <PenTool size={34} strokeWidth={1.5} className="text-purple-400 mb-2" />
      <span className="text-5xl font-extrabold text-white tracking-tighter">1M+</span>
      <span className="text-[10px] tracking-widest text-purple-400 font-semibold uppercase mt-1">Views/Post</span>
    </div>
    <Bubble pos="top-[6%] left-[16%]" border="border-orange-500/30" bg="bg-[#130a00]" shadow="shadow-[0_0_25px_rgba(249,115,22,0.2)]" delay={0} dur={3}>
      <Flame size={26} className="text-orange-400" />
    </Bubble>
    <Bubble pos="top-[10%] right-[10%]" border="border-pink-500/30" bg="bg-[#13000a]" shadow="shadow-[0_0_25px_rgba(236,72,153,0.2)]" delay={0.5} dur={4}>
      <Heart size={26} className="text-pink-400" />
    </Bubble>
    <Bubble pos="bottom-[6%] left-[34%]" border="border-purple-500/30" bg="bg-[#0a000f]" shadow="shadow-[0_0_25px_rgba(121,40,202,0.2)]" delay={1} dur={4.5}>
      <span className="text-[10px] font-bold text-purple-400 tracking-widest">HOOK</span>
    </Bubble>
  </div>
);

/* ── Visual 2: Growth Strategy ─────────────────────────────────── */
const Visual2 = () => (
  <div className="relative w-full flex items-center justify-center py-10 min-h-[380px]">
    <div className="absolute w-[360px] h-[360px] bg-gradient-to-tr from-[#4cc9f0]/25 to-[#00b4d8]/15 blur-[70px] rounded-full -z-10" />
    <motion.div animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[rgba(76,201,240,0.25)] z-0" />
    <div className="relative w-[240px] h-[240px] rounded-full border border-[rgba(76,201,240,0.35)] bg-[#030303] shadow-[0_0_60px_rgba(76,201,240,0.35),inset_0_0_30px_rgba(76,201,240,0.06)] flex flex-col items-center justify-center z-10 select-none">
      <TrendingUp size={34} strokeWidth={1.5} className="text-[#4cc9f0] mb-2" />
      <span className="text-5xl font-extrabold text-white tracking-tighter">10x</span>
      <span className="text-[10px] tracking-widest text-[#4cc9f0] font-semibold uppercase mt-1">Growth</span>
    </div>
    <Bubble pos="top-[6%] left-[16%]" border="border-indigo-500/30" bg="bg-[#0a0a14]" shadow="shadow-[0_0_25px_rgba(99,102,241,0.2)]" delay={0} dur={4}>
      <TiktokIcon size={26} />
    </Bubble>
    <Bubble pos="top-[10%] right-[10%]" border="border-red-500/30" bg="bg-[#0f0808]" shadow="shadow-[0_0_25px_rgba(239,68,68,0.2)]" delay={0.5} dur={5}>
      <YoutubeIcon size={26} />
    </Bubble>
    <Bubble pos="bottom-[6%] left-[36%]" border="border-purple-500/30" bg="bg-[#0f0f15]" shadow="shadow-[0_0_25px_rgba(168,85,247,0.2)]" delay={1} dur={4.5}>
      <InstagramIcon size={26} />
    </Bubble>
  </div>
);

/* ── Visual 3: Full Management ─────────────────────────────────── */
const tasks = ["Script", "Edit", "Subtitle", "Post"];
const Visual3 = () => (
  <div className="relative w-full flex items-center justify-center py-10 min-h-[380px]">
    <div className="absolute w-[360px] h-[360px] bg-gradient-to-tr from-[#f72585]/25 to-[#ff6b6b]/15 blur-[70px] rounded-full -z-10" />
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[rgba(247,37,133,0.25)] z-0" />
    <div className="relative w-[240px] h-[240px] rounded-full border border-[rgba(247,37,133,0.35)] bg-[#030303] shadow-[0_0_60px_rgba(247,37,133,0.35),inset_0_0_30px_rgba(247,37,133,0.06)] flex flex-col items-center justify-center z-10 select-none">
      <Zap size={34} strokeWidth={1.5} className="text-[#f72585] mb-2" />
      <span className="text-5xl font-extrabold text-white tracking-tighter">24/7</span>
      <span className="text-[10px] tracking-widest text-[#f72585] font-semibold uppercase mt-1">Done For You</span>
    </div>
    {/* Floating task cards */}
    {tasks.slice(0, 3).map((task, i) => (
      <motion.div key={task}
        animate={{ y: [0, -8 - i * 2, 0] }}
        transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        className={`absolute z-20 flex items-center gap-2 px-3 py-2 rounded-xl border border-pink-500/25 bg-[#0f060a] shadow-[0_0_20px_rgba(247,37,133,0.15)] ${i === 0 ? 'top-[6%] left-[10%]' : i === 1 ? 'top-[10%] right-[6%]' : 'bottom-[6%] left-[32%]'}`}>
        <CheckCheck size={14} className="text-[#f72585]" />
        <span className="text-[11px] font-semibold text-white">{task}</span>
      </motion.div>
    ))}
  </div>
);

/* ── Visual 4: Post The Video ──────────────────────────────────── */
const Visual4 = () => (
  <div className="relative w-full flex items-center justify-center py-10 min-h-[380px]">
    <div className="absolute w-[380px] h-[380px] bg-gradient-to-tr from-[#2b4cdd]/30 to-[#f72585]/20 blur-[70px] rounded-full -z-10" />
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[rgba(43,76,221,0.2)] z-0" />
    <div className="relative w-[240px] h-[240px] rounded-full border border-[rgba(43,76,221,0.35)] bg-[#030303] shadow-[0_0_60px_rgba(43,76,221,0.4),inset_0_0_30px_rgba(43,76,221,0.08)] flex flex-col items-center justify-center z-10 select-none">
      <Send size={34} strokeWidth={1.5} className="text-[#2b4cdd] mb-2" />
      <span className="text-5xl font-extrabold text-white tracking-tighter">Go</span>
      <span className="text-[10px] tracking-widest text-[#2b4cdd] font-semibold uppercase mt-1">Live Now</span>
    </div>
    <Bubble pos="top-[6%] left-[16%]" border="border-purple-500/30" bg="bg-[#0f0f15]" shadow="shadow-[0_0_25px_rgba(168,85,247,0.2)]" delay={0} dur={4}>
      <InstagramIcon size={26} />
    </Bubble>
    <Bubble pos="top-[10%] right-[10%]" border="border-red-500/30" bg="bg-[#0f0808]" shadow="shadow-[0_0_25px_rgba(239,68,68,0.2)]" delay={0.5} dur={5}>
      <YoutubeIcon size={26} />
    </Bubble>
    <Bubble pos="bottom-[6%] left-[38%]" border="border-indigo-500/30" bg="bg-[#0a0a14]" shadow="shadow-[0_0_25px_rgba(99,102,241,0.2)]" delay={1} dur={4.5}>
      <TiktokIcon size={26} />
    </Bubble>
  </div>
);

const visuals = [<Visual0 />, <Visual1 />, <Visual2 />, <Visual3 />, <Visual4 />];

/* ── Main Component ────────────────────────────────────────────── */
const Services = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="services" className="py-12 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
          <h5 className="text-base text-white text-center font-medium mb-4">OUR PROCESS.</h5>
          <h2 className="text-[clamp(1rem,5vw,2rem)] font-bold leading-[1.1] mb-4 text-[#a8aeb6]">
            Our Strategy to Get<br />
            <span className="text-gradient">You Leads With Content</span>
          </h2>
        </motion.div>

        <div className="relative flex flex-col gap-8 py-8" ref={timelineRef}>
          {/* Scroll progress line */}
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] md:-translate-x-1/2 bg-[rgba(255,255,255,0.08)] z-0 overflow-hidden">
            <motion.div className="w-full bg-[linear-gradient(180deg,#2b4cdd_0%,#4cc9f0_100%)] shadow-[0_0_12px_rgba(43,76,221,0.7)] origin-top" style={{ height: lineHeight }} />
          </div>

          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative flex w-full md:flex-row items-center min-h-[400px] gap-8">
                {/* Timeline Node */}
                <div className="absolute top-1/2 left-[20px] md:left-1/2 w-12 h-12 rounded-full -translate-x-1/2 -translate-y-1/2 border border-[rgba(255,255,255,0.15)] bg-black/90 z-[2] shadow-[0_0_20px_rgba(43,76,221,0.4)] flex items-center justify-center text-sm font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {isLeft ? (
                  <>
                    {/* Card LEFT */}
                    <div className="w-[calc(100%-50px)] md:w-[calc(50%-3rem)] md:pr-12">
                      <Magnetic>
                        <motion.div
                          initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          viewport={{ once: false, margin: "-50px" }}
                          className="group/card bg-[var(--card-bg)] border border-[var(--card-border)] p-8 md:p-12 rounded-[24px] relative overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-default md:-rotate-1 hover:!-translate-y-[10px] hover:!rotate-0 hover:!scale-[1.02] hover:bg-[rgba(255,255,255,0.05)]"
                          style={{ '--accent-color': service.color } as any}
                        >
                          <div className="w-[60px] h-[60px] bg-[rgba(255,255,255,0.05)] rounded-2xl flex items-center justify-center mb-8 text-[var(--accent-color)] transition-all duration-300 group-hover/card:bg-[var(--accent-color)] group-hover/card:text-white group-hover/card:scale-110">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                          <p className="text-[var(--text-secondary)] leading-[1.6] text-base">{service.description}</p>
                          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,var(--accent-color)_0%,transparent_70%)] opacity-0 transition-opacity duration-[400ms] pointer-events-none blur-[50px] -z-10 group-hover/card:opacity-10" />
                        </motion.div>
                      </Magnetic>
                    </div>
                    {/* Visual RIGHT */}
                    <motion.div className="hidden md:flex w-[calc(50%-3rem)] items-center justify-center relative overflow-visible"
                      initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
                      {visuals[index]}
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Visual LEFT */}
                    <motion.div className="hidden md:flex w-[calc(50%-3rem)] items-center justify-center relative overflow-visible"
                      initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
                      {visuals[index]}
                    </motion.div>
                    {/* Card RIGHT */}
                    <div className="w-[calc(100%-50px)] md:w-[calc(50%-3rem)] md:pl-12 md:ml-auto">
                      <Magnetic>
                        <motion.div
                          initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          viewport={{ once: false, margin: "-50px" }}
                          className="group/card bg-[var(--card-bg)] border border-[var(--card-border)] p-8 md:p-12 rounded-[24px] relative overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-default md:rotate-1 hover:!-translate-y-[10px] hover:!rotate-0 hover:!scale-[1.02] hover:bg-[rgba(255,255,255,0.05)]"
                          style={{ '--accent-color': service.color } as any}
                        >
                          <div className="w-[60px] h-[60px] bg-[rgba(255,255,255,0.05)] rounded-2xl flex items-center justify-center mb-8 text-[var(--accent-color)] transition-all duration-300 group-hover/card:bg-[var(--accent-color)] group-hover/card:text-white group-hover/card:scale-110">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                          <p className="text-[var(--text-secondary)] leading-[1.6] text-base">{service.description}</p>
                          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,var(--accent-color)_0%,transparent_70%)] opacity-0 transition-opacity duration-[400ms] pointer-events-none blur-[50px] -z-10 group-hover/card:opacity-10" />
                        </motion.div>
                      </Magnetic>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
