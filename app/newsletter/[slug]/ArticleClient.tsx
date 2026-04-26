"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./article.module.css";

const SAVED_KEY = "hmd:saved-articles";

function readSaved(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(SAVED_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeSaved(slugs: string[]) {
  try {
    window.localStorage.setItem(SAVED_KEY, JSON.stringify(slugs));
  } catch {
    /* ignore quota / privacy errors */
  }
}

function useScrollPct() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(100, Math.round((window.scrollY / total) * 100)) : 0;
      setPct(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return pct;
}

function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    if (ids.length === 0) return;
    const update = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 140 <= 0) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [ids.join("|")]);
  return active;
}

export function TopProgressBar() {
  const pct = useScrollPct();
  return (
    <div className={styles.readProgress} aria-hidden>
      <div className={styles.readProgressFill} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function RailProgress() {
  const pct = useScrollPct();
  return (
    <div className={styles.railProgressWrap}>
      <div className={styles.railProgressTrack}>
        <div className={styles.railProgressFill} style={{ height: `${pct}%` }} />
      </div>
      <span className={styles.railPct}>{pct}%</span>
    </div>
  );
}

type TocItem = { id: string; text: string };

export function ArticleToc({ items }: { items: TocItem[] }) {
  const pct = useScrollPct();
  const active = useActiveHeading(items.map((i) => i.id));
  return (
    <>
      <div className={styles.tocTitle}>In this article</div>
      <div className={styles.tocProgressBar}>
        <div
          className={styles.tocProgressFill}
          style={{ width: `${pct}%` }}
        />
      </div>
      <nav className={styles.tocNav}>
        {items.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={`${styles.tocLink} ${active === t.id ? styles.tocLinkActive : ""}`}
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
        <DownloadPdfButton />
        <SaveArticleButton />
      </div>
    </>
  );
}

function DownloadPdfButton() {
  const handleDownload = () => {
    if (typeof window === "undefined") return;

    const titleEl = document.querySelector<HTMLElement>('[class*="heroTitle"]');
    const deckEl = document.querySelector<HTMLElement>('[class*="heroDeck"]');
    const authorEl = document.querySelector<HTMLElement>('[class*="heroAuthorName"]');
    const roleEl = document.querySelector<HTMLElement>('[class*="heroAuthorRole"]');
    const dateEl = document.querySelector<HTMLElement>(
      '[class*="metaPill"] [class*="metaPillVal"]'
    );
    const bodyEl = document.querySelector<HTMLElement>(
      '[class*="articleBody"]:not([class*="articleBodyWrap"])'
    );
    const ktEl = document.querySelector<HTMLElement>('[class*="keyTakeaways"]');

    const title = titleEl?.innerText.trim() ?? document.title;
    const deck = deckEl?.innerText.trim() ?? "";
    const author = authorEl?.innerText.trim() ?? "";
    const role = roleEl?.innerText.trim() ?? "";
    const date = dateEl?.innerText.trim() ?? "";
    const ktHtml = ktEl?.outerHTML ?? "";
    const bodyHtml = bodyEl?.innerHTML ?? "";

    const printDoc = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)} — HMD MedDigest</title>
<style>
  @page { size: A4; margin: 18mm 16mm; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0; background: #fff; color: #111;
    font-family: Georgia, "Times New Roman", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    font-size: 11.5pt; line-height: 1.6;
  }
  .hdr { border-bottom: 1.5pt solid #111; padding-bottom: 10pt; margin-bottom: 18pt; }
  .brand { font-size: 9pt; letter-spacing: 0.18em; text-transform: uppercase; color: #555; margin-bottom: 4pt; font-family: Helvetica, Arial, sans-serif; }
  h1 { font-size: 22pt; line-height: 1.2; margin: 4pt 0 8pt; color: #000; }
  .deck { font-style: italic; color: #333; font-size: 12pt; margin-bottom: 10pt; }
  .meta { font-size: 9.5pt; color: #555; font-family: Helvetica, Arial, sans-serif; }
  .meta strong { color: #111; font-weight: 600; }
  h2 { font-size: 15pt; margin: 18pt 0 6pt; color: #000; page-break-after: avoid; border-left: 2pt solid #111; padding-left: 8pt; }
  h3 { font-size: 12.5pt; margin: 12pt 0 4pt; color: #000; page-break-after: avoid; }
  h4 { font-size: 11.5pt; margin: 10pt 0 3pt; color: #000; }
  p  { margin: 0 0 8pt; orphans: 3; widows: 3; }
  ul, ol { margin: 4pt 0 10pt 18pt; padding: 0; }
  li { margin: 2pt 0; }
  blockquote { margin: 10pt 0; padding-left: 10pt; border-left: 2pt solid #999; color: #333; font-style: italic; page-break-inside: avoid; }
  table { border-collapse: collapse; width: 100%; margin: 8pt 0; page-break-inside: avoid; font-size: 10pt; }
  th, td { border: 0.5pt solid #999; padding: 4pt 6pt; text-align: left; vertical-align: top; }
  th { background: #f1f1f1; font-weight: 600; }
  img { max-width: 100%; height: auto; }
  a { color: #111; text-decoration: none; }
  strong, b { font-weight: 700; }
  em, i { font-style: italic; }
  [class*="keyTakeaways"] { border: 0.75pt solid #111; padding: 10pt 14pt; margin: 0 0 18pt; page-break-inside: avoid; background: #fafafa; }
  [class*="ktHeader"], [class*="ktIcon"] { display: none; }
  [class*="ktLabel"] { display: block; font-family: Helvetica, Arial, sans-serif; font-size: 9pt; letter-spacing: 0.18em; text-transform: uppercase; color: #555; margin-bottom: 6pt; }
  [class*="ktList"] { margin: 0; padding-left: 16pt; list-style: disc; }
  [class*="ktItem"] { margin: 2pt 0; }
  /* strip decorative spans / drop caps / dividers */
  [class*="closingRule"], [class*="closingNote"] { display: none; }
  /* never include author avatars / author cards in PDF */
  [class*="authorCard"], [class*="heroAuthorAvatar"], [class*="avatarImg"] { display: none !important; }
  [class*="dropCap"], [class*="firstParaCap"] { font-size: inherit !important; float: none !important; line-height: inherit !important; color: inherit !important; padding: 0 !important; margin: 0 !important; }
  .footer { margin-top: 22pt; padding-top: 10pt; border-top: 0.5pt solid #999; font-size: 8.5pt; color: #666; font-family: Helvetica, Arial, sans-serif; }
</style>
</head>
<body>
  <div class="hdr">
    <div class="brand">HMD MedDigest — Medicine, via pristina</div>
    <h1>${escapeHtml(title)}</h1>
    ${deck ? `<div class="deck">${escapeHtml(deck)}</div>` : ""}
    <div class="meta">
      ${author ? `<strong>${escapeHtml(author)}</strong>` : ""}
      ${role ? ` · ${escapeHtml(role)}` : ""}
      ${date ? ` · ${escapeHtml(date)}` : ""}
    </div>
  </div>
  ${ktHtml}
  ${bodyHtml}
  <div class="footer">© HMD MedDigest. For clinicians, physician-executives, &amp; medical trainees. Educational use only — content does not constitute medical advice.</div>
</body>
</html>`;

    const w = window.open("", "_blank", "width=900,height=1100");
    if (!w) {
      window.print();
      return;
    }
    w.document.open();
    w.document.write(printDoc);
    w.document.close();
    w.focus();
    const triggerPrint = () => {
      try {
        w.print();
      } catch {
        /* ignore */
      }
    };
    if (w.document.readyState === "complete") {
      setTimeout(triggerPrint, 250);
    } else {
      w.addEventListener("load", () => setTimeout(triggerPrint, 250));
    }
  };
  return (
    <button
      type="button"
      className={styles.tocToolBtn}
      onClick={handleDownload}
    >
      ⤓ Download PDF
    </button>
  );
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function SaveArticleButton() {
  const pathname = usePathname();
  const slug = pathname?.split("/").filter(Boolean).pop() ?? "";
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setSaved(readSaved().includes(slug));
  }, [slug]);

  const toggleSave = () => {
    if (!slug) return;
    const current = readSaved();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    writeSaved(next);
    setSaved(next.includes(slug));
  };

  return (
    <button
      type="button"
      className={styles.tocToolBtn}
      onClick={toggleSave}
      aria-pressed={saved}
    >
      {saved ? "♥ Saved" : "♡ Save Article"}
    </button>
  );
}
