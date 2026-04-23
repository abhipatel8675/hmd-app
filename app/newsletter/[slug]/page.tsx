import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { articles, getArticle } from "@/lib/newsletter-data";
import styles from "./article.module.css";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — HMD MedDigest`,
    description: article.subtitle,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .filter((a) => a.tags.some((t) => article.tags.includes(t)))
    .slice(0, 3);

  const initials = article.author
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      <Navbar />
      <main>
        {/* Masthead */}
        <section className={styles.masthead}>
          <div className={styles.mastheadInner}>
            <Link href="/newsletter" className={styles.mastheadBrand}>
              HMD MedDigest
            </Link>
            <nav className={styles.mastheadNav}>
              <Link href="/newsletter">Home</Link>
              <Link href="/newsletter#archive">Archive</Link>
              <a href="#recommendations">Recommendations</a>
              <a href="#authors">Authors</a>
            </nav>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className={styles.crumbsWrap}>
          <div className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span className={styles.crumbSep}>›</span>
            <Link href="/newsletter">Posts</Link>
            <span className={styles.crumbSep}>›</span>
            <span className={styles.crumbCurrent}>{article.title}</span>
          </div>
        </section>

        {/* Article Header */}
        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.tagsRow}>
              {article.tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.subtitle}>{article.subtitle}</p>

            <div className={styles.metaBar}>
              <div className={styles.authorBlock}>
                <div className={styles.authorAvatar}>{initials}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorLabel}>By</span>
                  <span className={styles.authorName}>{article.author}</span>
                  <span className={styles.authorRole}>{article.authorRole}</span>
                </div>
              </div>
              <div className={styles.dateBlock}>
                <div className={styles.dateRow}>
                  <span className={styles.metaIcon}>▦</span>
                  <span>{article.date}</span>
                </div>
                <div className={styles.dateRow}>
                  <span className={styles.metaIcon}>◷</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            <div className={styles.shareRow}>
              {[
                { label: "✉", name: "Email" },
                { label: "∞", name: "Facebook" },
                { label: "X", name: "X" },
                { label: "t", name: "Threads" },
                { label: "in", name: "LinkedIn" },
                { label: "R", name: "Reddit" },
                { label: "w", name: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className={styles.shareBtn}
                  aria-label={`Share via ${s.name}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </header>

          {/* Hero Banner */}
          <div
            className={styles.hero}
            style={{ background: article.coverGradient }}
          >
            <div className={styles.heroTags}>
              {article.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className={styles.heroTag}
                  style={{ color: article.coverAccent }}
                >
                  {t}
                </span>
              ))}
            </div>
            <h2
              className={styles.heroTitle}
              style={{ color: article.coverAccent }}
            >
              {article.title}
            </h2>
            <p className={styles.heroSubtitle}>{article.subtitle}</p>
            <svg
              className={styles.heroWave}
              viewBox="0 0 1200 160"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 C150,30 300,130 600,80 C900,30 1050,130 1200,80"
                fill="none"
                stroke={article.coverAccent}
                strokeWidth="1.5"
                opacity="0.75"
              />
            </svg>
          </div>

          {/* Body */}
          <div className={styles.body}>
            {article.body.map((sec, idx) => (
              <section key={idx} className={styles.bodySection}>
                {sec.heading && <h3 className={styles.bodyHeading}>{sec.heading}</h3>}
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className={styles.bodyParagraph}>
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <div className={styles.closingRule} />
            <p className={styles.closingNote}>
              Published in <strong>HMD MedDigest — Substance Over Noise</strong>.
              {" "}Written for working physicians, by working physicians.
            </p>
          </div>

          {/* Author Card */}
          <aside className={styles.authorCard}>
            <div className={styles.authorCardAvatar}>{initials}</div>
            <div>
              <p className={styles.authorCardLabel}>Written By</p>
              <h4 className={styles.authorCardName}>{article.author}</h4>
              <p className={styles.authorCardRole}>{article.authorRole}</p>
              <p className={styles.authorCardBio}>
                A physician writing clearly and honestly about the evidence that
                shapes day-to-day clinical practice — what it says, where it
                stops, and why the distinction matters.
              </p>
            </div>
          </aside>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className={styles.relatedWrap}>
            <div className={styles.relatedInner}>
              <p className={styles.relatedLabel}>Keep Reading</p>
              <h3 className={styles.relatedTitle}>
                More from <em>HMD MedDigest</em>
              </h3>
              <div className={styles.relatedGrid}>
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/newsletter/${a.slug}`}
                    className={styles.relatedCard}
                  >
                    <div
                      className={styles.relatedCover}
                      style={{ background: a.coverGradient }}
                    >
                      <h4
                        className={styles.relatedCoverTitle}
                        style={{ color: a.coverAccent }}
                      >
                        {a.title}
                      </h4>
                    </div>
                    <div className={styles.relatedMeta}>
                      <span className={styles.relatedDate}>
                        {a.date} · {a.readTime}
                      </span>
                      <h5 className={styles.relatedTitleSm}>{a.title}</h5>
                      <p className={styles.relatedExcerpt}>{a.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
