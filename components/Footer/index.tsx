import styles from "./Footer.module.css";

const quickLinks = ["About HMD", "Contact Us", "Online Store"];

const resources = [
  "MedDigest Newsletter",
  "HMD Articles",
  "iQBank Step 2 CK",
  "HMD Journal Club & Research",
  "HMD Evidence Summary",
  "Media (YouTube, Podcast)",
  "OracleMD",
];

const programs = [
  "HMD MD Adjunct Program",
  "HMD Residency Adjunct Program",
  "HMD Physician Executive Pathway",
];

const socials = ["f", "𝕏", "in", "▶", "ig"];

export default function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <div className={styles.logoBox}>HMD</div>
              <span className={styles.logoTagline}>Medicine, via pristina</span>
            </div>
            <p className={styles.brandDesc}>
              HMD is a beacon for medical education, committed to forging a global network
              of physicians, medical students, and healthcare professionals.
            </p>
            <div className={styles.socials}>
              {socials.map((s, i) => (
                <a key={i} href="#" className={styles.socialIcon}>{s}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.colLinks}>
              {quickLinks.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.colLinks}>
              {resources.map((r) => (
                <li key={r}><a href="#">{r}</a></li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Programs</h4>
            <ul className={styles.colLinks}>
              {programs.map((p) => (
                <li key={p}><a href="#">{p}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Email</div>
              <div className={styles.contactValue}>info@hmd.com.co</div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Phone</div>
              <div className={styles.contactValue}>(865) 888-1523</div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Address</div>
              <div className={styles.contactValue}>
                100 Powell Place #1894<br />
                Nashville, TN 37204
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © 2026 Medicine, via pristina. All rights reserved.
          </span>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
