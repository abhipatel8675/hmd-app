import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { articles, getArticle, type Block } from "@/lib/newsletter-data";
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

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function takeawaysFromBlocks(blocks: Block[]): string[] {
  const firstList = blocks.find((b) => b.type === "ul");
  if (firstList && firstList.type === "ul") {
    return firstList.items.slice(0, 4);
  }
  const paragraphs = blocks
    .filter((b) => b.type === "p")
    .slice(0, 4)
    .map((b) => (b.type === "p" ? b.text : ""));
  return paragraphs;
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
    .slice(0, 2);

  const initials = article.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  // Build TOC from h2 headings
  const tocItems = article.blocks
    .filter((b) => b.type === "h2")
    .map((b) => {
      if (b.type !== "h2") return null;
      return { id: slugifyHeading(b.text), text: b.text };
    })
    .filter((v): v is { id: string; text: string } => v !== null);

  const takeaways = takeawaysFromBlocks(article.blocks);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <header className={styles.articleHero}>
          <div className={styles.heroVolBg}>Vol.4</div>
          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/newsletter">MedDigest</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <Link href="/newsletter">{article.tags[0]}</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span className={styles.breadcrumbCurrent}>{article.title}</span>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.heroTag}>{article.tags[0]}</span>
              {article.tags.slice(1).map((t) => (
                <span
                  key={t}
                  className={`${styles.heroTag} ${styles.heroTagOutline}`}
                >
                  {t}
                </span>
              ))}
              <span className={`${styles.heroTag} ${styles.heroTagOutline}`}>
                Vol. 4 · Issue 18
              </span>
            </div>

            <h1 className={styles.heroTitle}>
              {article.title.includes(":") ? (
                <>
                  {article.title.split(":")[0]}:
                  <br />
                  <em>{article.title.split(":").slice(1).join(":").trim()}</em>
                </>
              ) : (
                article.title
              )}
            </h1>
            <p className={styles.heroDeck}>{article.subtitle}</p>

            <div className={styles.heroMeta}>
              <div className={styles.heroAuthorAvatar}>{initials}</div>
              <div className={styles.heroAuthorInfo}>
                <div className={styles.heroAuthorName}>{article.author}</div>
                <div className={styles.heroAuthorRole}>{article.authorRole}</div>
              </div>
              <div className={styles.heroMetaPills}>
                <div className={styles.metaDivider} />
                <div className={styles.metaPill}>
                  <span className={styles.metaPillKey}>Published</span>
                  <span className={styles.metaPillVal}>{article.date}</span>
                </div>
                <div className={styles.metaDivider} />
                <div className={styles.metaPill}>
                  <span className={styles.metaPillKey}>Read Time</span>
                  <span className={styles.metaPillVal}>{article.readTime}</span>
                </div>
                <div className={styles.metaDivider} />
                <div className={styles.metaPill}>
                  <span className={styles.metaPillKey}>Issue</span>
                  <span className={styles.metaPillVal}>Vol. 4 · 18</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 3-COLUMN SHELL */}
        <div className={styles.articleShell}>
          {/* LEFT: SHARE RAIL */}
          <aside className={styles.shareRail}>
            <div className={styles.railLabel}>Share</div>
            <a href="#" className={styles.railBtn} aria-label="Copy link">∞</a>
            <a href="#" className={styles.railBtn} aria-label="Email">✉</a>
            <a href="#" className={styles.railBtn} aria-label="X">X</a>
            <a href="#" className={styles.railBtn} aria-label="LinkedIn">in</a>
            <div className={styles.railSep} />
            <a href="#" className={styles.railBtn} aria-label="Save">❤</a>
            <a href="#" className={styles.railBtn} aria-label="Print">⎙</a>
          </aside>

          {/* CENTER: BODY */}
          <article className={styles.articleBodyWrap}>
            <div className={styles.bodyInner}>
              {/* Key Takeaways */}
              <div className={styles.keyTakeaways}>
                <div className={styles.ktHeader}>
                  <div className={styles.ktIcon}>✓</div>
                  <span className={styles.ktLabel}>Key Takeaways</span>
                </div>
                <ul className={styles.ktList}>
                  {takeaways.map((t, i) => (
                    <li key={i} className={styles.ktItem}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body */}
              <div className={styles.articleBody}>
                {article.blocks.map((b, idx) => {
                  if (b.type === "h2") {
                    return (
                      <h2
                        key={idx}
                        id={slugifyHeading(b.text)}
                        className={styles.bodyH2}
                      >
                        {b.text}
                      </h2>
                    );
                  }
                  if (b.type === "h3") {
                    return (
                      <h3 key={idx} className={styles.bodyH3}>
                        {b.text}
                      </h3>
                    );
                  }
                  if (b.type === "p") {
                    const isFirst =
                      idx ===
                      article.blocks.findIndex((bb) => bb.type === "p");
                    return (
                      <p
                        key={idx}
                        className={`${styles.bodyParagraph} ${isFirst ? styles.bodyDropCap : ""}`}
                      >
                        {b.text}
                      </p>
                    );
                  }
                  return (
                    <ul key={idx} className={styles.bodyList}>
                      {b.items.map((item, i) => (
                        <li key={i} className={styles.bodyListItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                })}

                <div className={styles.closingRule} />
                <p className={styles.closingNote}>
                  Published in{" "}
                  <strong>HMD MedDigest — Substance Over Noise</strong>. Written
                  for working physicians, by working physicians.
                </p>
              </div>

              {/* Author card */}
              <aside className={styles.authorCard}>
                <div className={styles.authorCardAvatar}>{initials}</div>
                <div>
                  <p className={styles.authorCardLabel}>Written By</p>
                  <h4 className={styles.authorCardName}>{article.author}</h4>
                  <p className={styles.authorCardRole}>{article.authorRole}</p>
                  <p className={styles.authorCardBio}>
                    A physician writing clearly and honestly about the evidence
                    that shapes day-to-day clinical practice — what it says,
                    where it stops, and why the distinction matters.
                  </p>
                </div>
              </aside>

              {/* Related */}
              {related.length > 0 && (
                <section className={styles.relatedSection}>
                  <div className={styles.relatedLabel}>Continue Reading</div>
                  <div className={styles.relatedGrid}>
                    {related.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/newsletter/${a.slug}`}
                        className={styles.relatedCard}
                      >
                        <div className={styles.rcTag}>{a.tags[0]}</div>
                        <div className={styles.rcTitle}>{a.title}</div>
                        <div className={styles.rcMeta}>
                          {a.author} · {a.readTime}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </article>

          {/* RIGHT: TOC */}
          <aside className={styles.tocPanel}>
            <div className={styles.tocTitle}>In this article</div>
            <div className={styles.tocProgressBar}>
              <div className={styles.tocProgressFill} />
            </div>
            <nav className={styles.tocNav}>
              {tocItems.map((t, i) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className={`${styles.tocLink} ${i === 0 ? styles.tocLinkActive : ""}`}
                >
                  {t.text}
                </a>
              ))}
            </nav>
            <div className={styles.tocDivider} />
            <div className={styles.tocTools}>
              <button
                type="button"
                className={`${styles.tocToolBtn} ${styles.tocToolBtnPrimary}`}
              >
                ✎ iQbank Questions
              </button>
              <button type="button" className={styles.tocToolBtn}>
                ⤓ Download PDF
              </button>
              <button type="button" className={styles.tocToolBtn}>
                ♡ Save Article
              </button>
            </div>
          </aside>
        </div>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
