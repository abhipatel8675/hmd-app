import Link from "next/link";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import {
  executiveBoard,
  physicianLeaders,
} from "@/lib/team-data";
import styles from "./about.module.css";

const coreValues = [
  {
    letter: "U",
    title: "A culture of urgency coupled with efficiency",
    text: "We prioritize progress and timely execution, ensuring that every initiative moves forward with purpose, discipline, and impact.",
  },
  {
    letter: "D",
    title: "Courtesy, decorum, and professionalism",
    text: "We maintain a respectful, ethical, and dignified environment that reflects the honor of the medical profession.",
  },
  {
    letter: "M",
    title: "Dedication to the mission and vision of HMD",
    text: "We align our actions with HMD\u2019s core purpose, committing wholeheartedly to advancing excellence in medical education, practice, and leadership.",
  },
  {
    letter: "P",
    title: "Problem-solving through action and strategic engagement",
    text: "We confront challenges directly, using thoughtful analysis, collaboration, and decisive action to create meaningful solutions.",
  },
  {
    letter: "E",
    title: "Approach to medicine with the highest standard and esteem",
    text: "We uphold medicine as a noble calling, practicing with integrity, compassion, precision, and reverence for human life.",
  },
  {
    letter: "C",
    title: "Communicate effectively, clearly, & swiftly",
    text: "We value communication that is timely, transparent, and purposeful, strengthening teamwork and ensuring shared understanding.",
  },
  {
    letter: "B",
    title: "Clear grasp, application, and teaching of Evidence-Based Medicine",
    text: "We ground all clinical decisions in robust evidence, apply that evidence responsibly, and empower learners to master and teach EBM with clarity and confidence.",
  },
  {
    letter: "L",
    title: "Eagerness to learn and share",
    text: "We embrace continual self-improvement and actively uplift others by sharing knowledge, insights, and opportunities.",
  },
];

const advisoryBoard = [
  {
    name: "Howard Maibach, M.D., FAAD",
    role: "Advisory Board Member, HMD",
    image: "/Howard Maibach.jpeg",
  },
];

const ambassadors = [
  {
    name: "Fahmida Zahin, MBBS Candidate",
    role: "HMD Ambassador, United Kingdom",
    image: "/Fahmida Zahin, MBBS Candidate.jpeg",
  },
  {
    name: "Melody Olajide, MBBS Candidate",
    role: "HMD Ambassador, West Africa",
    image: "/Melody Olajide, MMBS Candidate.jpeg",
  },
  {
    name: "Praise Emmanuel, MD Candidate",
    role: "HMD Ambassador, Southern Europe",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.overline}>Healthcare Management & Development</p>
            <h1 className={styles.heroTitle}>
              About <em>HMD</em>
            </h1>
            <span className={styles.heroAccent} />
            <p className={styles.heroDesc}>
              Advancing physicians through education, evidence, and leadership — the
              pristine path of medicine.
            </p>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className={styles.missionVision}>
          <div className={styles.mvInner}>
            <div className={styles.mvBlock}>
              <p className={styles.mvLabel}>Our Mission</p>
              <h2 className={styles.mvTitle}>
                Decentralize Ivy-level<br />
                <em>Medical Education</em>
              </h2>
              <p className={styles.mvText}>
                To decentralize Ivy-level medical education and promote health
                awareness through the teaching of elite medical knowledge globally.
                We uphold the letter and spirit of Medicine, <em>via pristina</em>— the pristine
                path of medicine.
              </p>
            </div>
            <div className={styles.mvBlock}>
              <p className={styles.mvLabel}>Our Vision</p>
              <h2 className={styles.mvTitle}>
                Pioneer a Holistic<br />
                <em>Medical Paradigm</em>
              </h2>
              <p className={styles.mvText}>
                To pioneer a holistic paradigm in medical education that integrates
                clinical mastery, leadership, health policy, and innovation. This
                approach prepares physicians to excel at the bedside, in boardrooms,
                within healthcare systems, and across communities.
              </p>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className={styles.coreValues}>
          <div className={styles.cvInner}>
            <div className={styles.cvHeader}>
              <div>
                <p className={styles.overline}>Our Core Values</p>
                <h2 className={styles.cvTitle}>
                  The Principles That<br />
                  <em>Guide Our Work</em>
                </h2>
              </div>
              <p className={styles.cvDesc}>
                Each value reflects the standard of excellence, ethics, and commitment
                that defines HMD and its community of physician leaders.
              </p>
            </div>
            <div className={styles.valuesGrid}>
              {coreValues.map((v) => (
                <div key={v.letter} className={styles.valueCard}>
                  <div className={styles.valueLetter}>{v.letter}</div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueText}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Advisory Board ── */}
        <section className={styles.advisory}>
          <div className={styles.advisoryInner}>
            <p className={styles.sectionLabel}>Advisory Board</p>
            <h2 className={styles.sectionTitle}>
              HMD <em>Advisory Board</em>
            </h2>
            <div className={styles.peopleGridThree}>
              {advisoryBoard.map((p) => (
                <div key={p.name} className={styles.personCard}>
                  <div className={styles.personAvatar}>
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt={p.name} />
                    ) : (
                      <span className={styles.avatarPlaceholder}>
                        {p.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className={styles.personName}>{p.name}</div>
                  <div className={styles.personRole}>{p.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className={styles.team}>
          <div className={styles.teamInner}>
            <p className={styles.sectionLabel}>HMD Team</p>
            <h2 className={styles.sectionTitle}>
              The People Behind<br />
              <em>HMD</em>
            </h2>

            <h3 className={styles.subCategory}>Executive Board</h3>
            <div className={styles.peopleGrid}>
              {executiveBoard.map((p) => (
                <Link
                  key={p.slug}
                  href={`/about/team/${p.slug}`}
                  className={styles.personCardLink}
                >
                  <div className={styles.personAvatar}>
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt={p.name} />
                    ) : (
                      <span className={styles.avatarPlaceholder}>
                        {p.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className={styles.personName}>{p.name}</div>
                  <div className={styles.personRole}>{p.role}</div>
                </Link>
              ))}
            </div>

            <h3 className={styles.subCategory}>Physician Leaders</h3>
            <div className={styles.peopleGridThree}>
              {physicianLeaders.map((p) => (
                <Link
                  key={p.slug}
                  href={`/about/team/${p.slug}`}
                  className={styles.personCardLink}
                >
                  <div className={styles.personAvatar}>
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt={p.name} />
                    ) : (
                      <span className={styles.avatarPlaceholder}>
                        {p.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className={styles.personName}>{p.name}</div>
                  <div className={styles.personRole}>{p.role}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ambassadors ── */}
        <section className={styles.ambassadors}>
          <div className={styles.ambassadorsInner}>
            <p className={styles.sectionLabel}>HMD Ambassadors</p>
            <h2 className={styles.sectionTitle}>
              Global <em>Ambassadors</em>
            </h2>
            <div className={styles.peopleGridThree}>
              {ambassadors.map((p) => (
                <div key={p.name} className={styles.personCard}>
                  <div className={styles.personAvatar}>
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt={p.name} />
                    ) : (
                      <span className={styles.avatarPlaceholder}>
                        {p.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className={styles.personName}>{p.name}</div>
                  <div className={styles.personRole}>{p.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter ── */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
