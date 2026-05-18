"use client";

import React from 'react';
import styles from './WorkMarquee.module.css';
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
    <div className={styles.wrapper}>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeInner}>
          {track.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ '--card-accent': item.color } as React.CSSProperties}
            >
              <div className={styles.iconWrap} style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.label}</h3>
              <p className={styles.cardSubtitle}>{item.subtitle}</p>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
        <div className={styles.marqueeInnerReverse}>
          {trackReverse.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ '--card-accent': item.color } as React.CSSProperties}
            >
              <div className={styles.iconWrap} style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.label}</h3>
              <p className={styles.cardSubtitle}>{item.subtitle}</p>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkMarquee;
