import PanelsNavbar from "@/components/panels/PanelsNavbar";
import GlobalEffects from "@/components/GlobalEffects";
import PanelsDashboard from "@/components/panels/PanelsDashboard";
import ThreeWorld from "@/components/ThreeWorld";
import heroBg from "@/assets/hero-bg.jpg";

const HackathonPanels = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">

      {/* ── Hero-style background ─────────────────────────── */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})`, filter: "brightness(1.4)" }}
      >
        {/* dark overlay same as HeroSection */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* ── Three.js red particles ─────────────────────────── */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <ThreeWorld />
      </div>

      {/* ⚪ Floating particles + VHS effects */}
      <GlobalEffects />

      {/* 🌐 Main Content */}
      <div className="relative z-20">
        <PanelsNavbar />
        <main>
          <PanelsDashboard />
        </main>
      </div>
    </div>
  );
};

export default HackathonPanels;
