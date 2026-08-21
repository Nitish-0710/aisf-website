import GlobalEffects from "@/components/GlobalEffects";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import AboutSection from "@/components/AboutSection";
import Timeline from "@/components/Timeline";
import PrizesSection from "@/components/PrizesSection";
import AboutAISF from "@/components/AboutAISF";
import TeamSection from "@/components/TeamSection";
import SponsorsSection from "@/components/SponsorsSection";
import SiteFooter from "@/components/SiteFooter";
import ThreeWorld from "@/components/ThreeWorld";
import PreviousEventsSection from "@/components/PreviousEventsSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      
      {/* 🔴 3D Red Particles (Back Layer) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeWorld />
      </div>

      {/* ⚪ White Floating Particles */}
      <GlobalEffects />

      {/* 🌐 Main Content */}
      <div className="relative z-20">
        <Navbar />
        <main>
          <HeroSection />

          {/* Content sections wrapped with root border */}
          <div className="root-border-content">
            {/* <CountdownTimer /> */}
            <AboutSection />
            <Timeline />
            <PrizesSection />
            <PreviousEventsSection />
            <AboutAISF />
            <TeamSection />
            <SponsorsSection />
          </div>
        </main>
        <SiteFooter />
      </div>

    </div>
  );
};

export default Index;
