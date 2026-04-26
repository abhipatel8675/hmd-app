"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FoundingSection.module.css";

export default function FoundingSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <div className={styles.brandLogo}>HMD</div>
            <div className={styles.brandRule} />
            <span className={styles.brandTagline}>Medicine, via pristina</span>
          </div>

          <p className={styles.sectionLabel}>Founding Message</p>

          <h2 className={styles.headline}>
            Ivy-Level Medical Education<br />
            &amp; <em>Physician Leadership</em>
          </h2>

          <div className={styles.rule} />

          <p className={styles.body}>
            The practice of medicine stands at a historic inflection point. Twenty-first-century
            physicians must heal not only individual patients, but also the systems that serve them.
            HMD was founded to bridge this gap by delivering Ivy-level medical education and
            physician leadership training.
          </p>

          {!expanded && (
            <button
              className={styles.readMore}
              onClick={() => setExpanded(true)}
            >
              Read More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          <div className={`${styles.expandable} ${expanded ? styles.expanded : ""}`}>
            <p className={`${styles.body} ${styles.bodyAccent}`}>
              Through the <strong>HMD MD Adjunct Program</strong>, the HMD Residency Adjunct Program,
              and the <strong>Physician Executive Pathway</strong>, we integrate rigorous clinical
              training with structured education in business administration, public health and policy,
              and health informatics and artificial intelligence. This integrated model develops
              physicians who are clinically excellent, system-literate, and prepared to lead with
              evidence-based precision and ethical conviction. Our academic rigor is aligned with
              real-world governance to ensure graduates enter practice and leadership with{" "}
              <strong>competence, credibility, and strategic clarity.</strong>
            </p>

            <button
              className={styles.readMore}
              onClick={() => setExpanded(false)}
            >
              Read Less
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.journalCard}>
            <p className={styles.journalTag}>HMD Journal Club & Research</p>
            <h3 className={styles.journalTitle}>HMD Journal Club & Research</h3>
            <p className={styles.journalDesc}>
              Coordinates on research projects, critical appraisals, and evidence-based
              medicine core skills for physician leaders.
            </p>
          </div>

          <div className={styles.imageBlock}>
            <Image
              src="/hmd-journal-club.jpg"
              alt="HMD Journal Club & Research"
              fill
              className={styles.journalPhoto}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
