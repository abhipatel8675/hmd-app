import styles from "./CurriculumSection.module.css";

const leftItems = [
  { name: "Basic Sciences", desc: "Foundational biomedical knowledge essential for understanding disease" },
  { name: "Clinical Sciences", desc: "Diagnosis, management, and patient-centered clinical decision-making" },
  { name: "Health Systems Science", desc: "How healthcare is delivered, financed, and improved across populations" },
];

const rightItems = [
  { name: "Business Administration (BA)", desc: "Leadership, management, and strategy for efficient healthcare operations" },
  { name: "Public Health And Policy (PH)", desc: "Population health promotion, and a strong grasp on health policy" },
  { name: "Health Informatics (HI)", desc: "Technology, data, and digital systems that optimize clinical care" },
];

function CurriculumColumn({ items }: { items: typeof leftItems }) {
  return (
    <div className={styles.column}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.itemLeft}>
            <div className={styles.dot} />
            {i < items.length - 1 && <div className={styles.line} />}
          </div>
          <div className={styles.itemContent}>
            <h3 className={styles.itemName}>{item.name}</h3>
            <p className={styles.itemDesc}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CurriculumSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>Learn with Experts</span>
          <h2 className={styles.title}>Integrated Roadmap for Physician Executive Leaders</h2>
        </div>

        <div className={styles.grid}>
          <CurriculumColumn items={leftItems} />
          <CurriculumColumn items={rightItems} />
        </div>
      </div>
    </section>
  );
}
