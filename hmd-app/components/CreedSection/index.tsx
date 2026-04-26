import styles from "./CreedSection.module.css";

export default function CreedSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <span className={styles.openQuote}>&ldquo;</span>

          <blockquote className={styles.quote}>
            At HMD, we hold a simple yet nuanced creed:{" "}
            <em>Medicina, via pristina</em> — the pristine path of medicine.
          </blockquote>

          <p className={styles.body}>
            It reflects our belief that holistic, well-grounded training,
            informed by data and guided by clinical excellence, should guide
            every decision in healthcare. The ultimate goal is to develop
            vertically integrated physician leaders capable of shaping patient
            care across hospitals, health systems, and institutions.
          </p>

          <div className={styles.rule} />

          <div className={styles.attribution}>
            <p className={styles.attributionTo}>To Medical Trainees &amp; Physicians</p>
            <p className={styles.attributionBody}>
              Welcome to HMD, where medicine and physician leadership converge
              to define the standard of modern medicine.
            </p>
            <p className={styles.attributionFrom}>The Board of Directors, HMD</p>
          </div>
        </div>
      </div>
    </section>
  );
}
