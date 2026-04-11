import Image from "next/image";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.wrap}>
      {/* Background photo */}
      <Image
        src="/hmd-hero-bg.webp"
        alt=""
        fill
        priority
        className={styles.bgImage}
        sizes="100vw"
      />
      <div className={styles.bgOverlay} />

      <div className={styles.content}>
        <p className={styles.overline}>Elite Medical Education</p>

        <h1 className={styles.headline}>
          Advancing physicians<br />
          through education,<br />
          evidence, and leadership.
        </h1>

        <p className={styles.sub}>
          HMD provides elite medical education and physician-executive training
          to medical trainees, physicians, and institutions worldwide.
        </p>

        <div className={styles.ctas}>
          <a href="#" className={styles.btnPrimary}>
            HMD Campus
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.btnOutline}>
            Programs
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </a>
          <a href="#" className={styles.btnOutline}>
            HMD Articles
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M5 2h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

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
