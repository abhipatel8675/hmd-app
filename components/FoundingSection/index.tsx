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
            physicians must lead not only individual patients, but systems and institutions.
            {!expanded && " ..."}
          </p>

          {!expanded && (
            <button
              className={styles.readMore}
              onClick={() => setExpanded(true)}
            >
              Read More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </button>
          )}

          <div className={`${styles.expandable} ${expanded ? styles.expanded : ""}`}>
            <blockquote className={styles.quote}>
              At HMD, we hold a simple yet nuanced creed: <em>Medicina, via pristina</em> — the
              pristine path of medicine.
            </blockquote>

            <p className={styles.body}>
              It reflects our belief that holistic, well-grounded training,
              informed by data and guided by clinical excellence, should guide every decision in healthcare.
              The ultimate goal is to develop vertically integrated physician leaders
              capable of shaping patient care across hospitals, health systems, and
              institutions.
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
              alt="HMD Journal Club"
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
