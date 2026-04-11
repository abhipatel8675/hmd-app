import Image from "next/image";
import styles from "./FoundingSection.module.css";

export default function FoundingSection() {
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
          </p>
          <p className={styles.body}>
            At HMD, we hold a simple yet nuanced creed: <em>Medicine, via pristina</em> — the
            pristine path of medicine. It reflects our belief that holistic, well-grounded training,
            informed by data and guided by clinical excellence, should push every decision in healthcare.
          </p>

          <a href="#" className={styles.readMore}>
            Read More
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1.5 6H10.5M7 2.5L10.5 6L7 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.journalCard}>
            <p className={styles.journalTag}>HMD Journal Club</p>
            <h3 className={styles.journalTitle}>HMD Journal Club</h3>
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
