"use client";
import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>HMD MedDigest</h2>
          <p className={styles.desc}>
            Receive the latest insights in clinical medicine, health policy, and physician
            leadership from HMD.
          </p>
        </div>
        <form
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.submit}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
