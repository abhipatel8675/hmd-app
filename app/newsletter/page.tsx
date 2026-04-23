import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/newsletter-data";
import styles from "./newsletter.module.css";

export const metadata = {
  title: "HMD MedDigest — Substance Over Noise",
  description:
    "A physician-written newsletter on clinical medicine, evidence-based practice, and the science behind the headlines.",
};

export default function NewsletterPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.overline}>HMD MedDigest</p>
            <h1 className={styles.heroTitle}>
              Substance <em>Over Noise</em>
            </h1>
            <span className={styles.heroAccent} />
            <p className={styles.heroDesc}>
              A physician-written newsletter on clinical medicine, evidence-based
              practice, and the science behind the headlines. No hot takes. No
              hedging. Just the evidence, well explained.
            </p>
            <form
              className={styles.subscribeForm}
              action=""
              method="post"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className={styles.subscribeInput}
                required
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Sub-Nav (Home / Archive / Recommendations / Authors) */}
        <section className={styles.subNavWrap}>
          <div className={styles.subNavInner}>
            <nav className={styles.subNav}>
              <a className={`${styles.subNavLink} ${styles.subNavActive}`} href="#home">Home</a>
              <span className={styles.subNavDivider} />
              <a className={styles.subNavLink} href="#archive">Archive</a>
              <span className={styles.subNavDivider} />
              <a className={styles.subNavLink} href="#recommendations">Recommendations</a>
              <span className={styles.subNavDivider} />
              <a className={styles.subNavLink} href="#authors">Authors</a>
            </nav>
            <div className={styles.searchWrap}>
              <span className={styles.searchIcon}>⌕</span>
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Search the archive…"
              />
            </div>
          </div>
        </section>

        {/* Featured */}
        <section id="home" className={styles.featuredSection}>
          <div className={styles.featuredInner}>
            <p className={styles.sectionLabel}>Featured</p>
            <Link
              href={`/newsletter/${featured.slug}`}
              className={styles.featuredCard}
            >
              <div
                className={styles.featuredCover}
                style={{ background: featured.coverGradient }}
              >
                <div className={styles.coverWordmark}>
                  <span style={{ color: featured.coverAccent }}>
                    {featured.tags.slice(0, 3).join(" · ")}
                  </span>
                </div>
                <h2
                  className={styles.coverTitle}
                  style={{ color: featured.coverAccent }}
                >
                  {featured.title}
                </h2>
                <p className={styles.coverSubtitle}>{featured.subtitle}</p>
                <svg
                  className={styles.coverWave}
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
              </div>
              <div className={styles.featuredMeta}>
                <div className={styles.metaRow}>
                  <span className={styles.metaDate}>{featured.date}</span>
                  <span className={styles.metaDot}>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h3 className={styles.featuredTitle}>{featured.title}</h3>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.byline}>
                  <div className={styles.avatarSm}>
                    {featured.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className={styles.bylineName}>{featured.author}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Archive Grid */}
        <section id="archive" className={styles.archiveSection}>
          <div className={styles.archiveInner}>
            <p className={styles.sectionLabel}>Archive</p>
            <h2 className={styles.archiveTitle}>
              The <em>Full Collection</em>
            </h2>
            <div className={styles.grid}>
              {rest.map((a) => (
                <Link
                  key={a.slug}
                  href={`/newsletter/${a.slug}`}
                  className={styles.card}
                >
                  <div
                    className={styles.cardCover}
                    style={{ background: a.coverGradient }}
                  >
                    <div className={styles.cardTags}>
                      {a.tags.slice(0, 2).map((t) => (
                        <span key={t} className={styles.cardTag}>
                          {t}
                        </span>
                      ))}
                      {a.tags.length > 2 && (
                        <span className={styles.cardTag}>+{a.tags.length - 2}</span>
                      )}
                    </div>
                    <h3
                      className={styles.cardCoverTitle}
                      style={{ color: a.coverAccent }}
                    >
                      {a.title}
                    </h3>
                    <svg
                      className={styles.cardWave}
                      viewBox="0 0 400 80"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,40 C60,10 120,70 200,40 C280,10 340,70 400,40"
                        fill="none"
                        stroke={a.coverAccent}
                        strokeWidth="1.2"
                        opacity="0.75"
                      />
                    </svg>
                  </div>
                  <div className={styles.cardMeta}>
                    <div className={styles.metaRow}>
                      <span className={styles.metaDate}>{a.date}</span>
                      <span className={styles.metaDot}>·</span>
                      <span>{a.readTime}</span>
                    </div>
                    <h4 className={styles.cardTitle}>{a.title}</h4>
                    <p className={styles.cardExcerpt}>{a.excerpt}</p>
                    <div className={styles.byline}>
                      <div className={styles.avatarSm}>
                        {a.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className={styles.bylineName}>{a.author}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
