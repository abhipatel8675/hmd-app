"use client";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Programs", dropdown: true },
  { label: "Library", dropdown: true },
  { label: "Resources", dropdown: true },
  { label: "iConnect", dropdown: false },
  { label: "Paid Developer", dropdown: false },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          <div className={styles.logo}>HMD</div>
          <span className={styles.tagline}>Medicine, via pristina</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href="#">
                {link.label}
                {link.dropdown && <span className={styles.chevron}> ▾</span>}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className={styles.signIn}>Sign In</a>
      </div>
    </nav>
  );
}
