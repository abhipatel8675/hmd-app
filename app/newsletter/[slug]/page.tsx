import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { articles, getArticle, type Block } from "@/lib/newsletter-data";
import styles from "./article.module.css";
import {
  TopProgressBar,
  RailProgress,
  ArticleToc,
} from "./ArticleClient";

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
    .filter((b): b is Extract<Block, { type: "p" }> => b.type === "p")
    .slice(0, 4)
    .map((b) => b.text);
  return paragraphs;
}

function renderBlock(b: Block, idx: number, isFirstParagraph: boolean) {
  switch (b.type) {
    case "h2":
      return (
        <h2
          key={idx}
          id={slugifyHeading(b.text)}
          className={styles.bodyH2}
        >
          {b.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className={styles.bodyH3}>
          {b.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={idx}
          className={`${styles.bodyParagraph} ${isFirstParagraph ? styles.bodyDropCap : ""}`}
        >
          {b.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className={styles.bodyList}>
          {b.items.map((item, i) => (
            <li key={i} className={styles.bodyListItem}>
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className={styles.bodyOrderedList}>
          {b.items.map((item, i) => (
            <li
              key={i}
              className={styles.bodyOrderedItem}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ol>
      );
    case "callout": {
      const variantClass =
        b.variant === "red"
          ? styles.calloutRed
          : b.variant === "green"
            ? styles.calloutGreen
            : styles.calloutGold;
      return (
        <div key={idx} className={`${styles.callout} ${variantClass}`}>
          <div className={styles.calloutLabel}>{b.label}</div>
          <p className={styles.calloutText}>{b.text}</p>
        </div>
      );
    }
    case "pullquote":
      return (
        <blockquote key={idx} className={styles.pullQuote}>
          <p className={styles.pullQuoteText}>{b.text}</p>
          {b.cite && <cite className={styles.pullQuoteCite}>{b.cite}</cite>}
        </blockquote>
      );
    case "stat":
      return (
        <div key={idx} className={styles.statHighlight}>
          {b.items.flatMap((s, i) => {
            const node = (
              <div key={`item-${i}`} className={styles.statItem}>
                <div className={styles.statNumber}>
                  {s.number}
                  {s.sup && <sup>{s.sup}</sup>}
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            );
            if (i < b.items.length - 1) {
              return [
                node,
                <div key={`sep-${i}`} className={styles.statDivider} />,
              ];
            }
            return [node];
          })}
        </div>
      );
    case "table":
      return (
        <div key={idx} className={styles.dataTableWrap}>
          {b.caption && (
            <div className={styles.dataTableCaption}>{b.caption}</div>
          )}
          <table className={styles.dataTable}>
            <thead>
              <tr>
                {b.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
            {b.footer && (
              <tfoot>
                <tr>
                  <td colSpan={b.headers.length}>{b.footer}</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      );
    case "sectionRule":
      return (
        <div key={idx} className={styles.sectionRuleLabel}>
          {b.label && <span>{b.label}</span>}
        </div>
      );
    case "references":
      return (
        <div key={idx} className={styles.references}>
          <h2 className={styles.referencesHeading}>References</h2>
          {b.items.map((ref, i) => (
            <div key={i} className={styles.refItem}>
              <span className={styles.refNum}>[{i + 1}]</span>
              <div dangerouslySetInnerHTML={{ __html: ref }} />
            </div>
          ))}
        </div>
      );
  }
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

  const tocItems = article.blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: slugifyHeading(b.text), text: b.text }));

  const takeaways = takeawaysFromBlocks(article.blocks);

  const firstParagraphIdx = article.blocks.findIndex((b) => b.type === "p");

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://meddigest.vercel.app";
  const articleUrl = `${siteUrl}/newsletter/${article.slug}`;
  const shareTitle = `${article.title} — HMD MedDigest`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(shareTitle);
  const encodedBody = encodeURIComponent(
    `${shareTitle}\n\n${article.subtitle}\n\n${articleUrl}`
  );

  const shareLinks = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodedTitle}&body=${encodedBody}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedBody}`,
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  return (
    <>
      <TopProgressBar />
      <Navbar />
      <main>
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
              <div className={styles.heroAuthorAvatar}>
                <Image
                  src="/author-default.jpeg"
                  alt={article.author}
                  fill
                  sizes="50px"
                  className={styles.avatarImg}
                />
              </div>
              <div className={styles.heroAuthorInfo}>
                <div className={styles.heroAuthorName}>{article.author}</div>
                <div className={styles.heroAuthorRole}>
                  {article.authorRole}
                </div>
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

        <div className={styles.articleShell}>
          <aside className={styles.shareRail}>
            <div className={styles.railLabel}>Share</div>
            <a
              href={articleUrl}
              className={styles.railBtn}
              aria-label="Copy link"
            >
              ∞
            </a>
            <a
              href={shareLinks.gmail}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.railBtn}
              aria-label="Share via Gmail"
            >
              ✉
            </a>
            <a
              href={shareLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.railBtn}
              aria-label="Share on X"
            >
              X
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.railBtn}
              aria-label="Share on LinkedIn"
            >
              in
            </a>
            <div className={styles.railSep} />
            <a href="#" className={styles.railBtn} aria-label="Save">
              ♡
            </a>
            <a href="#" className={styles.railBtn} aria-label="Print">
              ⎙
            </a>
            <div className={styles.railSep} />
            <RailProgress />
          </aside>

          <article className={styles.articleBodyWrap}>
            <div className={styles.bodyInner}>
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

              <div className={styles.articleBody}>
                {article.blocks.map((b, idx) =>
                  renderBlock(b, idx, idx === firstParagraphIdx)
                )}

                <div className={styles.closingRule} />
                <p className={styles.closingNote}>
                  Published in{" "}
                  <strong>HMD MedDigest — Medicine, via pristina</strong>. Written
                  for working physicians, by working physicians.
                </p>
              </div>

              <aside className={styles.authorCard}>
                <div className={styles.authorCardAvatar}>
                  <Image
                    src="/author-default.jpeg"
                    alt={article.author}
                    fill
                    sizes="78px"
                    className={styles.avatarImg}
                  />
                </div>
                <div>
                  <p className={styles.authorCardLabel}>By</p>
                  <h4 className={styles.authorCardName}>{article.author}</h4>
                  <p className={styles.authorCardRole}>{article.authorRole}</p>
                  <p className={styles.authorCardBio}>
                    Articles are presented for educational purposes only. All
                    patient information has been de-identified and, where
                    applicable, published with appropriate authorization.
                    Content does not constitute medical advice.
                  </p>
                </div>
              </aside>

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

          <aside className={styles.tocPanel}>
            <ArticleToc items={tocItems} />
          </aside>
        </div>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
