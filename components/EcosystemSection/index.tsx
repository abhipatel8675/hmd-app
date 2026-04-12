"use client";

import styles from "./EcosystemSection.module.css";

const ecosystem = [
  {
    category: "Programs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M14 13V25" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 9L14 15L25 9" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    items: [
      {
        name: "MD Adjunct Program",
        desc: "Prepares medical students for competitive residency applications",
      },
      {
        name: "Physician Executive Pathway",
        desc: "4 & 3-year integrated MD + BA + PH + HI for C-suite leaders",
      },
      {
        name: "Residency Adjunct Program",
        desc: "Strengthens residents' training for competitive career pathways",
      },
    ],
  },
  {
    category: "Platforms",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 25H18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M14 21V25" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="13" r="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    items: [
      {
        name: "HMD Campus",
        desc: "Online learning environment with asynchronous coursework",
      },
      {
        name: "HMD iConnect",
        desc: "Professional networking, mentorship, and research collaboration",
      },
      {
        name: "OracleMD",
        desc: "AI-powered clinical decision support and learning tool",
      },
    ],
  },
  {
    category: "Resources",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 5C4 5 7 3 14 3C21 3 24 5 24 5V23C24 23 21 21 14 21C7 21 4 23 4 23V5Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14 3V21" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 8H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8 12H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17 8H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17 12H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    items: [
      {
        name: "MedDigest Newsletter",
        desc: "Curated medical insights delivered to your inbox",
      },
      {
        name: "HMD Journal Club",
        desc: "Peer-reviewed literature discussions, evidence analyses, and research collaborations",
      },
      {
        name: "iQBank Step 2 CK",
        desc: "Comprehensive question bank for board exam preparation",
      },
      {
        name: "HMD Articles",
        desc: "Original research summaries and clinical insights",
      },
      {
        name: "HMD Evidence Summary",
        desc: "Clinical evidence reviews and appraisals",
      },
    ],
  },
];

export default function EcosystemSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>The HMD Ecosystem</span>
          <h2 className={styles.title}>
            Everything You Need, One Connected Platform
          </h2>
          <p className={styles.subtitle}>
            From enrollment to executive leadership — discover how our programs,
            platforms, and resources work together to shape your career in the 21st-century medicine.
          </p>
        </div>

        {/* Central Hub */}
        <div className={styles.hub}>
          <div className={styles.hubCore}>
            <div className={styles.hubLogo}>HMD</div>
            <span className={styles.hubLabel}>Your Journey Starts Here</span>
          </div>
          <div className={styles.hubLine} />
        </div>

        {/* Branches */}
        <div className={styles.branches}>
          {ecosystem.map((branch) => (
            <div key={branch.category} className={styles.branch}>
              {/* Branch header */}
              <div className={styles.branchConnector}>
                <div className={styles.connectorLine} />
                <div className={styles.branchHead}>
                  <div className={styles.branchIcon}>{branch.icon}</div>
                  <h3 className={styles.branchName}>{branch.category}</h3>
                </div>
              </div>

              {/* Items */}
              <div className={styles.branchItems}>
                {branch.items.map((item, i) => (
                  <div key={i} className={styles.node}>
                    <div className={styles.nodeDot} />
                    <div className={styles.nodeContent}>
                      <h4 className={styles.nodeName}>{item.name}</h4>
                      <p className={styles.nodeDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
