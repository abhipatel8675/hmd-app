"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./iConnectSection.module.css";

type Feature = { name: string; desc: string };

type PhoneSlide = {
  id: string;
  mediaType: "phone";
  title: string;
  tagline: string;
  features: Feature[];
  cta: { label: string; href: string };
};

type VideoSlide = {
  id: string;
  mediaType: "video";
  videoSrc: string;
  title: string;
  tagline: string;
  features: Feature[];
  cta: { label: string; href: string };
};

type Slide = PhoneSlide | VideoSlide;

const slides: Slide[] = [
  {
    id: "iconnect",
    mediaType: "phone",
    title: "HMD iConnect",
    tagline: "Connect. Collaborate. Lead.",
    features: [
      {
        name: "Elite Community",
        desc: "Connect with high-performing medical students, residents, fellows, and physician leaders.",
      },
      {
        name: "Mentorship Engine",
        desc: "Structured pathways for clinical, research, and leadership development.",
      },
      {
        name: "Secure & Professional",
        desc: "Designed exclusively for verified medical professionals.",
      },
      {
        name: "Collaboration Hub",
        desc: "Research and academic collaboration within a trusted network.",
      },
    ],
    cta: { label: "Join the Network", href: "#" },
  },
  {
    id: "iqbank",
    mediaType: "video",
    videoSrc:
      "https://hmd.com.co/wp-content/uploads/2026/03/HMD-iQbank.mp4",
    title: "HMD iQbank",
    tagline: "Board-Level Rigor. Ivy-Level Insight.",
    features: [
      {
        name: "USMLE-Style Precision",
        desc: "High-yield, NBME-style clinical vignettes.",
      },
      {
        name: "Concept-Driven Learning",
        desc: "Deep explanations that build diagnostic reasoning.",
      },
      {
        name: "Specialty Integrated",
        desc: "Cardiology, neurology, internal medicine, and beyond.",
      },
      {
        name: "Performance Analytics",
        desc: "Identify weaknesses and optimize study strategy.",
      },
      {
        name: "Built by Physicians",
        desc: "Designed for serious trainees aiming for top scores.",
      },
    ],
    cta: { label: "Start Practicing", href: "#" },
  },
  {
    id: "articles",
    mediaType: "video",
    videoSrc:
      "https://hmd.com.co/wp-content/uploads/2026/03/HMD-Articles.mp4",
    title: "HMD Articles",
    tagline: "Clinical Depth. Executive Perspective.",
    features: [
      {
        name: "Evidence-Based Format",
        desc: "Organized by pathophysiology, diagnosis, and management.",
      },
      {
        name: "System-Based Physical Exams",
        desc: "Clinical reasoning from vitals to systems review.",
      },
      {
        name: "Practice-Ready Insights",
        desc: "Applying evidence from real-world care.",
      },
      {
        name: "Specialty Organized",
        desc: "Search by discipline or clinical topic.",
      },
      {
        name: "Peer-Reviewed Approach",
        desc: "Built on current guidelines and landmark trials.",
      },
    ],
    cta: { label: "Explore Articles", href: "#" },
  },
  {
    id: "journal",
    mediaType: "video",
    videoSrc:
      "https://hmd.com.co/wp-content/uploads/2026/03/HMD-Journal-Club-Research.mp4",
    title: "HMD Journal Club & Research",
    tagline: "Where Evidence Meets Leadership.",
    features: [
      {
        name: "Guideline & Trial Reviews",
        desc: "Deconstruct landmark RCTs and society statements.",
      },
      {
        name: "Clinical Impact Analysis",
        desc: "What changes in practice — and why.",
      },
      {
        name: "Policy & Systems Lens",
        desc: "Connect clinical evidence to administration and healthcare strategy.",
      },
      {
        name: "Interactive Discussions",
        desc: "Engage clinicians across institutions.",
      },
      {
        name: "Executive Commentary",
        desc: "Translate evidence into leadership insight.",
      },
    ],
    cta: { label: "Join the Discussion", href: "#" },
  },
  {
    id: "evidence",
    mediaType: "video",
    videoSrc:
      "https://hmd.com.co/wp-content/uploads/2026/03/HMD-Evidence-Summary.mp4",
    title: "HMD Evidence Summary",
    tagline: "Concise. Structured. Authoritative.",
    features: [
      {
        name: "Guideline Summaries",
        desc: "Practice-relevant, timely recommendations.",
      },
      {
        name: "Landmark Trial Breakdowns",
        desc: "Core trials every physician leader should know.",
      },
      {
        name: "Practice Algorithms",
        desc: "Step-by-step clinical decision frameworks.",
      },
      {
        name: "Executive Brief Format",
        desc: "Structured for fast, high-retention review.",
      },
      {
        name: "Updated Continuously",
        desc: "Reflects evolving standards of care.",
      },
    ],
    cta: { label: "Browse Summaries", href: "#" },
  },
];

function VideoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className={styles.videoWrap}>
      <video
        ref={videoRef}
        src={src}
        className={styles.video}
        controls={playing}
        playsInline
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button className={styles.playBtn} onClick={handlePlay} aria-label="Play video">
          <svg viewBox="0 0 60 60" fill="none" className={styles.playIcon}>
            <circle cx="30" cy="30" r="29" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" />
            <path d="M24 20L44 30L24 40V20Z" fill="rgba(201,168,76,0.9)" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function iConnectSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section className={styles.wrap}>
      {/* Prev arrow */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next arrow */}
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={styles.inner} key={slide.id}>
        {/* LEFT — media */}
        <div className={styles.mediaCol}>
          {slide.mediaType === "phone" ? (
            <div className={styles.phoneImgWrap}>
              <Image
                src="/hmd-iconnect.png"
                alt="HMD iConnect App"
                width={320}
                height={640}
                className={styles.phoneImg}
              />
            </div>
          ) : (
            <VideoPlayer src={slide.videoSrc} />
          )}
        </div>

        {/* RIGHT — content */}
        <div className={styles.content}>
          <h2 className={styles.title}>{slide.title}</h2>
          <p className={styles.tagline}>{slide.tagline}</p>

          <div className={styles.features}>
            {slide.features.map((f) => (
              <div key={f.name} className={styles.feature}>
                <div className={styles.featureIcon}>
                  <div className={styles.featureDot} />
                </div>
                <div>
                  <span className={styles.featureName}>{f.name}: </span>
                  <span className={styles.featureDesc}>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <a href={slide.cta.href} className={styles.cta}>
            {slide.cta.label}
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
