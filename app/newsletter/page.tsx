import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/newsletter-data";
import styles from "./newsletter.module.css";

export const metadata = {
  title: "HMD MedDigest — Clinical Intelligence for Physician Leaders",
  description:
    "Evidence-based clinical briefings for the physician-executive. A physician-written newsletter on clinical medicine and the science behind the headlines.",
};

const CATEGORIES = [
  "All Issues",
  "Cardiology",
  "Pulmonology",
  "Neurology",
  "Endocrinology",
  "Nephrology",
  "Rheumatology",
  "Health Systems",
];

const CATEGORY_CARDS = [
  { name: "Cardiology", glyph: "♥", count: 24 },
  { name: "Pulmonology", glyph: "◎", count: 18 },
  { name: "Neurology", glyph: "✺", count: 21 },
  { name: "Endocrinology", glyph: "✦", count: 15 },
  { name: "Health Systems", glyph: "▦", count: 12 },
];

export default function NewsletterPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <Navbar />
      <main>
        {/* MASTHEAD */}
        <header className={styles.masthead}>
          <div className={styles.mastheadBgText}>MedDigest</div>
          <div className={styles.mastheadInner}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} />
              <span className={styles.eyebrowLabel}>HMD Clinical Intelligence</span>
            </div>

            <h1 className={styles.mastheadTitle}>
              Med<em>Digest</em>
            </h1>
            <p className={styles.mastheadSubtitle}>
              Evidence-based clinical briefings for the physician-executive.
            </p>

            <div className={styles.mastheadMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Current Issue</span>
                <span className={styles.metaVal}>Vol. 4 · Issue 18</span>
              </div>
              <div className={styles.metaSep} />
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Published</span>
                <span className={styles.metaVal}>April 2026</span>
              </div>
              <div className={styles.metaSep} />
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Articles</span>
                <span className={styles.metaVal}>{articles.length} This Issue</span>
              </div>
              <div className={styles.metaSep} />
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Specialties</span>
                <span className={styles.metaVal}>Cardiology · Pulm · Neuro</span>
              </div>
              <form className={styles.subscribeStrip} action="" method="post">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.subscribeInput}
                  required
                />
                <button type="submit" className={styles.subscribeBtn}>
                  Subscribe
                </button>
              </form>
            </div>

            <nav className={styles.catNav}>
              {CATEGORIES.map((c, i) => (
                <button
                  key={c}
                  type="button"
                  className={`${styles.catTab} ${i === 0 ? styles.catTabActive : ""}`}
                >
                  {c}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className={styles.pageContent}>
          {/* FEATURED LEAD */}
          <section className={styles.leadSection}>
            <div className={styles.sectionLabel}>Featured Article — Current Issue</div>
            <div className={styles.leadGrid}>
              <div>
                <span className={styles.leadTag}>{featured.tags[0]}</span>
                <Link
                  href={`/newsletter/${featured.slug}`}
                  className={styles.leadTitle}
                >
                  {featured.title}
                </Link>
                <p className={styles.leadDeck}>{featured.subtitle}</p>
                <div className={styles.leadByline}>
                  <strong>{featured.author}</strong>
                  <span className={styles.bylineDot}>·</span>
                  {featured.authorRole}
                  <span className={styles.bylineDot}>·</span>
                  {featured.readTime}
                </div>
                <Link
                  href={`/newsletter/${featured.slug}`}
                  className={styles.leadReadMore}
                >
                  Read Full Article
                  <span>→</span>
                </Link>
              </div>

              <Link
                href={`/newsletter/${featured.slug}`}
                className={styles.leadImageWrap}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className={styles.leadImage}
                  style={{ background: featured.coverGradient }}
                >
                  <div
                    className={styles.leadImageWordmark}
                    style={{ color: featured.coverAccent }}
                  >
                    {featured.tags.slice(0, 3).join(" · ")}
                  </div>
                  <div
                    className={styles.leadImageTitle}
                    style={{ color: featured.coverAccent }}
                  >
                    {featured.title}
                  </div>
                  <svg
                    className={styles.leadImageWave}
                    viewBox="0 0 800 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,60 C100,20 200,100 400,60 C600,20 700,100 800,60"
                      fill="none"
                      stroke={featured.coverAccent}
                      strokeWidth="1.5"
                      opacity="0.7"
                    />
                  </svg>
                  <span className={styles.issueBadge}>
                    ★ Featured · Vol. 4 Issue 18
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* RECENT ARTICLES */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Recent Articles</span>
            <a href="#archive" className={styles.viewAll}>
              View all recent →
            </a>
          </div>

          <div className={styles.articlesGrid}>
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/newsletter/${a.slug}`}
                className={styles.card}
              >
                <div className={styles.cardTag}>{a.tags[0]}</div>
                <div className={styles.cardTitle}>{a.title}</div>
                <div className={styles.cardDeck}>{a.excerpt}</div>
                <div className={styles.cardMeta}>
                  <div className={styles.cardAuthor}>
                    <strong>{a.author}</strong>
                  </div>
                  <div className={styles.cardReadTime}>◷ {a.readTime}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* CATEGORY STRIP */}
          <div className={styles.categoryStrip}>
            {CATEGORY_CARDS.map((c) => (
              <div key={c.name} className={styles.catCard}>
                <div className={styles.catCardIcon}>{c.glyph}</div>
                <div className={styles.catCardName}>{c.name}</div>
                <div className={styles.catCardCount}>{c.count} articles</div>
              </div>
            ))}
          </div>

          {/* ARCHIVE / CATALOGUE */}
          <section id="archive" className={styles.archiveSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>Full Catalogue</span>
              <a href="#" className={styles.viewAll}>
                RSS Feed →
              </a>
            </div>

            <div className={styles.archiveControls}>
              <div className={styles.archiveSearch}>
                <span className={styles.archiveSearchIcon}>⌕</span>
                <input
                  type="text"
                  placeholder="Search by title, specialty, or author…"
                />
              </div>
              <button type="button" className={`${styles.filterBtn} ${styles.filterBtnActive}`}>
                All
              </button>
              <button type="button" className={styles.filterBtn}>2026</button>
              <button type="button" className={styles.filterBtn}>2025</button>
              <button type="button" className={styles.filterBtn}>2024</button>
              <select className={styles.sortSelect} defaultValue="newest">
                <option value="newest">Sort: Newest First</option>
                <option value="oldest">Sort: Oldest First</option>
                <option value="popular">Sort: Most Read</option>
                <option value="az">Sort: A – Z</option>
              </select>
            </div>

            <div className={styles.archiveList}>
              {articles.map((a, i) => (
                <Link
                  key={a.slug}
                  href={`/newsletter/${a.slug}`}
                  className={styles.archiveItem}
                >
                  <div className={styles.archiveIssueNum}>
                    {String(articles.length - i).padStart(3, "0")}
                  </div>
                  <div className={styles.archiveBody}>
                    <div className={styles.archiveTag}>
                      {a.tags[0]} · {a.date}
                    </div>
                    <div className={styles.archiveTitle}>{a.title}</div>
                    <div className={styles.archiveDeck}>{a.excerpt}</div>
                    <div className={styles.archiveByline}>
                      <strong>{a.author}</strong> · {a.readTime}
                    </div>
                  </div>
                  <div className={styles.archiveRight}>
                    <div className={styles.archiveDate}>{a.date}</div>
                    <div className={styles.archiveReadBtn}>Read →</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.loadMoreRow}>
              <button type="button" className={styles.loadMoreBtn}>
                Load Earlier Issues
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
