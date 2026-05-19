"use client";

import React from 'react';
import { Video, Mic, Megaphone, Film, Zap, BarChart2, ShoppingBag, Globe } from 'lucide-react';

const items = [
  {
    icon: <Video size={36} />,
    label: "Short Form Videos",
    subtitle: "Byte sized top of the funnel videos for Instagram Reels and TikTok.",
    color: "#2E4FCD",
  },
  {
    icon: <Film size={36} />,
    label: "SAAS Videos",
    subtitle: "Organic podcasts to build trust and credibility among your audience.",
    color: "#7B2CBF",
  },
  {
    icon: <Mic size={36} />,
    label: "Podcast Edits",
    subtitle: "Cinematic podcast cuts that keep viewers hooked from start to finish.",
    color: "#4CC9F0",
  },
  {
    icon: <Megaphone size={36} />,
    label: "Ad Creatives",
    subtitle: "High-converting ad visuals and hooks that stop the scroll instantly.",
    color: "#F72585",
  },
  {
    icon: <ShoppingBag size={36} />,
    label: "E-Commerce Ads",
    subtitle: "Product-focused videos designed to drive clicks and boost sales.",
    color: "#F9C74F",
  },
  {
    icon: <Zap size={36} />,
    label: "VSL Production",
    subtitle: "Long-form video sales letters engineered to convert cold traffic.",
    color: "#90BE6D",
  },
  {
    icon: <BarChart2 size={36} />,
    label: "YouTube Videos",
    subtitle: "Full-length YouTube edits optimised for retention and subscriber growth.",
    color: "#2E4FCD",
  },
  {
    icon: <Globe size={36} />,
    label: "Brand Videos",
    subtitle: "Premium brand storytelling that builds lasting emotional connections.",
    color: "#7B2CBF",
  },
];

const WorkMarquee = () => {
  const track = [...items, ...items, ...items];
  const trackReverse = [...items.slice(4), ...items.slice(0, 4), ...items.slice(4), ...items.slice(0, 4), ...items.slice(4), ...items.slice(0, 4)];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollReverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <div className="relative w-full py-16 overflow-hidden bg-black border-y border-[var(--card-border)]">
        <div className="absolute top-0 left-0 w-[200px] h-full z-[2] pointer-events-none bg-[linear-gradient(to_right,#000_0%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[200px] h-full z-[2] pointer-events-none bg-[linear-gradient(to_left,#000_0%,transparent_100%)]" />
        
        <div className="w-full overflow-hidden">
          <div className="p-5 flex gap-5 w-max animate-[scroll_120s_linear_infinite]">
            {track.map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center text-center gap-[1.1rem] w-[300px] py-10 px-7 rounded-[1.25rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] shrink-0 overflow-hidden cursor-default transition-all duration-[350ms] hover:border-[var(--card-accent)] hover:-translate-y-1"
                style={{ '--card-accent': item.color } as React.CSSProperties}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] shrink-0 transition-all duration-300 group-hover:bg-[rgba(255,255,255,0.08)] group-hover:border-[var(--card-accent)]" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.15rem] font-bold text-white leading-[1.3] m-0">{item.label}</h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[0.85rem] font-normal text-[var(--text-secondary)] leading-[1.6] m-0">{item.subtitle}</p>
                <div className="absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(ellipse_at_50%_0%,var(--card-accent),transparent_70%)] opacity-0 transition-opacity duration-[400ms] pointer-events-none group-hover:opacity-[0.10]" />
              </div>
            ))}
          </div>
          
          <div className="p-5 flex gap-5 w-max animate-[scrollReverse_120s_linear_infinite] mt-1">
            {trackReverse.map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center text-center gap-[1.1rem] w-[300px] py-10 px-7 rounded-[1.25rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] shrink-0 overflow-hidden cursor-default transition-all duration-[350ms] hover:border-[var(--card-accent)] hover:-translate-y-1"
                style={{ '--card-accent': item.color } as React.CSSProperties}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] shrink-0 transition-all duration-300 group-hover:bg-[rgba(255,255,255,0.08)] group-hover:border-[var(--card-accent)]" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.15rem] font-bold text-white leading-[1.3] m-0">{item.label}</h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[0.85rem] font-normal text-[var(--text-secondary)] leading-[1.6] m-0">{item.subtitle}</p>
                <div className="absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(ellipse_at_50%_0%,var(--card-accent),transparent_70%)] opacity-0 transition-opacity duration-[400ms] pointer-events-none group-hover:opacity-[0.10]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkMarquee;
