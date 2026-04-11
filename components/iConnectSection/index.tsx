import styles from "./iConnectSection.module.css";

const features = [
  {
    name: "Elite Community",
    desc: "Connect with high-performing medical students, residents, fellows, and physicians.",
  },
  {
    name: "Mentorship Engine",
    desc: "Structured pathways for clinical, research, and leadership development.",
  },
  {
    name: "Secure & Professional",
    desc: "A trusted environment built exclusively for medical professionals.",
  },
  {
    name: "Collaboration Hub",
    desc: "Research and academic collaboration within a trusted network.",
  },
];

export default function iConnectSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>

        {/* Phone Mockup */}
        <div className={styles.phoneWrap}>
          <div className={styles.phone}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              <div className={styles.phoneHeader}>HMD iConnect</div>
              <div className={styles.phoneCard}>
                <div className={styles.phoneCardLine} />
                <div className={`${styles.phoneCardLine} ${styles.gold}`} />
                <div className={styles.phoneCardLine} />
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.phoneAvatar}>
                  <div className={styles.phoneAvatarCircle} />
                  <div className={styles.phoneAvatarLines}>
                    <div className={styles.phoneAvatarLine} />
                    <div className={styles.phoneAvatarLine} />
                  </div>
                </div>
              ))}
              <div className={styles.phoneCard}>
                <div className={styles.phoneCardLine} />
                <div className={styles.phoneCardLine} />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.overline}>Platform</p>
          <h2 className={styles.title}>HMD iConnect</h2>
          <p className={styles.subtitle}>Connect. Collaborate. Lead.</p>

          <div className={styles.features}>
            {features.map((f) => (
              <div key={f.name} className={styles.feature}>
                <div className={styles.featureIcon}>
                  <div className={styles.featureCheckmark} />
                </div>
                <div className={styles.featureText}>
                  <div className={styles.featureName}>{f.name}</div>
                  <div className={styles.featureDesc}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className={styles.cta}>
            Join the Network
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
