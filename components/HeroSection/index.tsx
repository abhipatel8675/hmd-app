"use client";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
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
            MD · BA · PH · HI &nbsp;|&nbsp; 4 - 3-Year Integrated Program
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
      </div>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.stat}>
          <div className={styles.statNum}>4 & 3<span>yr</span></div>
          <div className={styles.statLabel}>Integrated Program</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>4<span>°</span></div>
          <div className={styles.statLabel}>MD · BA · PH · HI</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>100<span>%</span></div>
          <div className={styles.statLabel}>Asynchronous Online</div>
        </div>
      </div>
    </section>
  );
}
