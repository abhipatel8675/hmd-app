"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";

type DropdownItem = { label: string; href?: string };
type NavLink = {
  label: string;
  dropdown: DropdownItem[] | null;
  href?: string;
};

const navLinks: NavLink[] = [
  {
    label: "Programs",
    dropdown: [
      { label: "HMD MD Adjunct Program" },
      { label: "HMD Residency Adjunct Program" },
      { label: "HMD Physician Executive Pathway" },
    ],
  },
  {
    label: "Library",
    dropdown: [
      { label: "HMD Journal Club & Research" },
      { label: "HMD Evidence Summary" },
      { label: "HMD Articles", href: "/newsletter" },
      { label: "OracleMD" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "MedDigest Newsletter", href: "/newsletter" },
      { label: "iQBank Step 2 CK" },
      { label: "Media (YouTube, Podcast)" },
    ],
  },
  { label: "iConnect", dropdown: null },
  { label: "About", dropdown: null, href: "/about" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav
      className={styles.nav}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className={styles.inner}>
        <a href="/" className={styles.brand}>
          <img src="/HMD Logo (No Motto) Ed.png" alt="HMD" className={styles.logo} />
          <span className={styles.tagline}>Medicine, via pristina</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={styles.navItem}
              onMouseEnter={() => link.dropdown ? setOpenMenu(link.label) : setOpenMenu(null)}
            >
              <a href={link.href || "#"}>
                {link.label}
                {link.dropdown && <span className={styles.chevron}> ▾</span>}
              </a>
              {link.dropdown && openMenu === link.label && (
                <div className={styles.dropdown}>
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href || "#"}
                      className={styles.dropdownItem}
                    >
                      {item.label}
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
