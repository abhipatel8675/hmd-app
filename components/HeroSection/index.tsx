"use client";

import Image from "next/image";
import styles from "./HeroSection.module.css";

const articles = [
  {
    id: 1,
    title: "2026 AHA/ACP Guideline for the Evaluation and Diagnosis of Chest Pain",
    date: "February 21, 2026",
  },
  {
    id: 2,
    title: "Assessment of Adverse Effects Attributed to Drug Labels",
    date: "February 14, 2026",
  },
];

const groups = [
  { id: 1, initials: "GJ", name: "HMD Grand Journal Club", status: "Active · 2 weeks ago" },
  { id: 2, initials: "CJ", name: "HMD Cardiology Journal Club", status: "Active · 2 weeks ago" },
];

const ArticleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="3" width="16" height="14" rx="1" stroke="#C9A84C" strokeWidth="1.2" />
    <line x1="5" y1="7" x2="15" y2="7" stroke="#C9A84C" strokeWidth="1" />
    <line x1="5" y1="10" x2="13" y2="10" stroke="#C9A84C" strokeWidth="1" />
    <line x1="5" y1="13" x2="11" y2="13" stroke="#C9A84C" strokeWidth="1" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className={styles.wrap}>
      {/* Hero grid */}
      <div className={styles.inner}>

        {/* LEFT: Editorial Copy */}
        <div className={styles.left}>
          <p className={styles.overline}>HMD Physician Executive Pathway</p>

          <h2 className={styles.headline}>
            Learn How Business Administration,
            Public Health And Policy, And Health
            Informatics Programs Integrate With{" "}
            <em>Medical Education</em>
          </h2>

          <div className={styles.rule} />

          <p className={styles.sub}>
            The HMD Physician Executive Pathway trains vertically integrated,
            C-suite physician leaders.
          </p>

          <div className={styles.programmeLabel}>
            MD · MBA · MPH · MHI &nbsp;|&nbsp; 7-Year Integrated Programme
          </div>

          <div className={styles.ctas}>
            <a href="#" className={styles.btnPrimary}>
              Explore the Pathway
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className={styles.btnGhost}>
              Join HMD Campus
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6H11M7 2L11 6L7 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: HMD Campus Screenshot */}
        <div className={styles.right}>
          <div className={styles.campusMockup}>
            <Image
              src="/hmd-campus.jpg"
              alt="HMD Campus Platform"
              width={600}
              height={600}
              className={styles.campusImage}
              priority
            />
          </div>
        </div>
      </div>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.stat}>
          <div className={styles.statNum}>7<span>yr</span></div>
          <div className={styles.statLabel}>Integrated Programme</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>4<span>°</span></div>
          <div className={styles.statLabel}>MD · MBA · MPH · MHI</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>100<span>%</span></div>
          <div className={styles.statLabel}>Asynchronous Online</div>
        </div>
      </div>
    </section>
  );
}
