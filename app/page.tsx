import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProgramsSection from "@/components/ProgramsSection";
import FoundingSection from "@/components/FoundingSection";
import IConnectSection from "@/components/iConnectSection";
import CurriculumSection from "@/components/CurriculumSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <HeroSection />
        <EcosystemSection />
        <ProgramsSection />
        <FoundingSection />
        <IConnectSection />
        <CurriculumSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
