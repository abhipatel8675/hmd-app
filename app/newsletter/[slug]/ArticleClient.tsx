"use client";
import { useEffect, useState } from "react";
import styles from "./article.module.css";

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
        <button type="button" className={styles.tocToolBtn}>
          ⤓ Download PDF
        </button>
        <button type="button" className={styles.tocToolBtn}>
          ♡ Save Article
        </button>
      </div>
    </>
  );
}
