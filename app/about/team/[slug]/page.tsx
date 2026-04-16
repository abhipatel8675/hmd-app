import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { allTeamMembers } from "@/lib/team-data";
import styles from "./profile.module.css";

export function generateStaticParams() {
  return allTeamMembers.map((m) => ({ slug: m.slug }));
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = allTeamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const others = allTeamMembers.filter((m) => m.slug !== slug);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.avatarCol}>
              <div className={styles.avatarLarge}>
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      ...(member.imagePosition && { objectPosition: member.imagePosition }),
                      ...(member.imageScale && { transform: `scale(${member.imageScale})` }),
                    }}
                  />
                ) : (
                  <span className={styles.avatarInitial}>
                    {member.name.charAt(0)}
                  </span>
                )}
              </div>
              <span className={styles.categoryBadge}>
                {member.category === "executive"
                  ? "Executive Board"
                  : "Physician Leader"}
              </span>
            </div>
            <div className={styles.infoCol}>
              <Link href="/about" className={styles.backLink}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M12 7H2M6 3L2 7L6 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to About
              </Link>
              <h1 className={styles.name}>{member.name}</h1>
              <p className={styles.role}>{member.role}</p>
              <div className={styles.divider} />
            </div>
          </div>
        </section>

        {/* ── Bio ── */}
        <section className={styles.bioSection}>
          <div className={styles.bioInner}>
            {member.bio.length > 0 ? (
              member.bio.map((paragraph, i) => (
                <p key={i} className={styles.bioText}>
                  {paragraph}
                </p>
              ))
            ) : (
              <div className={styles.emptyBio}>
                <p className={styles.emptyBioText}>
                  Full biography coming soon.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── Other Team Members ── */}
        <section className={styles.teamNav}>
          <div className={styles.teamNavInner}>
            <h2 className={styles.teamNavTitle}>
              Other <em>Team Members</em>
            </h2>
            <div className={styles.teamNavGrid}>
              {others.map((m) => (
                <Link
                  key={m.slug}
                  href={`/about/team/${m.slug}`}
                  className={styles.teamNavCard}
                >
                  <div className={styles.teamNavName}>{m.name}</div>
                  <div className={styles.teamNavRole}>{m.role}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
