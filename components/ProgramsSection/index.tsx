import Image from "next/image";
import styles from "./ProgramsSection.module.css";

const programs = [
  {
    id: "md-adjunct",
    color: "cardBurgundy",
    image: "/hmd-oracle.jpg",
    imagePosition: "center 20%",
    name: "HMD MD Adjunct Program",
    desc: "Prepares medical students to become competitive residency applicants.",
  },
  {
    id: "physician-exec",
    color: "cardNavy",
    image: "/hmd-hero-bg.jpg",
    imagePosition: "center center",
    name: "HMD Physician Executive Pathway",
    desc: "Develops physicians into C-suite–ready healthcare leaders.",
  },
  {
    id: "residency-adjunct",
    color: "cardTeal",
    image: "/hmd-journal-club.jpg",
    imagePosition: "center 40%",
    name: "HMD Residency Adjunct Program",
    desc: "Strengthens residents' training to excel in competitive career pathways.",
  },
];

export default function ProgramsSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.overline}>Our Programmes</div>
          <h2 className={styles.title}>Physician Pathways Designed for Excellence</h2>
        </div>

        <div className={styles.grid}>
          {programs.map((prog) => (
            <div key={prog.id} className={styles.card}>
              <div className={`${styles.cardImage} ${styles[prog.color as keyof typeof styles]}`}>
                <Image
                  src={prog.image}
                  alt={prog.name}
                  fill
                  className={styles.cardPhoto}
                  style={{ objectPosition: prog.imagePosition }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <div className={styles.cardImageOverlay} />
                <div className={styles.cardAccent} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{prog.name}</h3>
                <p className={styles.cardDesc}>{prog.desc}</p>
                <a href="#" className={styles.cardBtn}>
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6H10.5M7 2.5L10.5 6L7 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
