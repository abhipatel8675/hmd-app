"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  {
    label: "Programs",
    dropdown: [
      "HMD MD Adjunct Program",
      "HMD Residency Adjunct Program",
      "HMD Physician Executive Pathway",
    ],
  },
  {
    label: "Library",
    dropdown: [
      "HMD Journal Club & Research",
      "HMD Evidence Summary",
      "HMD Articles",
      "OracleMD",
    ],
  },
  {
    label: "Resources",
    dropdown: [
      "MedDigest Newsletter",
      "iQBank Step 2 CK",
      "Media (YouTube, Podcast)",
    ],
  },
  { label: "iConnect", dropdown: null },
  { label: "Paid Developer", dropdown: null },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav
      className={styles.nav}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          <div className={styles.logo}>HMD</div>
          <span className={styles.tagline}>Medicine, via pristina</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={styles.navItem}
              onMouseEnter={() => link.dropdown ? setOpenMenu(link.label) : setOpenMenu(null)}
            >
              <a href="#">
                {link.label}
                {link.dropdown && <span className={styles.chevron}> ▾</span>}
              </a>
              {link.dropdown && openMenu === link.label && (
                <div className={styles.dropdown}>
                  {link.dropdown.map((item) => (
                    <a key={item} href="#" className={styles.dropdownItem}>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <a href="#" className={styles.signIn}>Sign In</a>
      </div>
    </nav>
  );
}
