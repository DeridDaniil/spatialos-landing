import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollToId } from "../lib/scroll";
import Header from "../components/Header";
import Hero from "../components/Hero";
import VisionSection from "../components/VisionSection";
import SpatialInterfaceSection from "../components/SpatialInterfaceSection";
import ExperienceSection from "../components/ExperienceSection";
import UseCasesSection from "../components/UseCasesSection";
import DesignSection from "../components/DesignSection";
import PrivacySection from "../components/PrivacySection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  const { hash } = useLocation();

  // When arriving on the landing page with a hash (e.g. /#vision from a
  // legal page), smooth-scroll the matching section into view once mounted.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => smoothScrollToId(id));
  }, [hash]);

  return (
    <div className="relative min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <VisionSection />
        <SpatialInterfaceSection />
        <ExperienceSection />
        <UseCasesSection />
        <DesignSection />
        <PrivacySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
