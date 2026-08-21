import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import GlitchText from "./GlitchText";
import RegisterOverlay from "./RegisterOverlay";
import heroBg from "@/assets/hero-bg.jpg";
import ThreeWorld from "@/components/ThreeWorld";
import poweredByUnstop from "@/assets/PoweredByUnstop.png";
import GlitchBlock from "./GlitchBlock";

const HeroSection = () => {
  const [registerActive, setRegisterActive] = useState(false);

  const handleRegister = useCallback((e: React.MouseEvent) => {
    // Dispatch click origin for shatter effect
    window.dispatchEvent(
      new CustomEvent("register-click-origin", {
        detail: { x: e.clientX, y: e.clientY },
      }),
    );
    setRegisterActive(true);
  }, []);

  const handleComplete = useCallback(() => {
    setRegisterActive(false);
  }, []);

  const handleProblemClick = useCallback((e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent("register-click-origin", {
        detail: { x: e.clientX, y: e.clientY },
      }),
    );

    // trigger download
    const link = document.createElement("a");
    link.href = "/CODEAPEX_Problem Statements.pdf";
    link.download = "CodeApex-Problem-Statements.pdf";
    link.click();
  }, []);

  const handleRound2Result = useCallback((e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent("register-click-origin", {
        detail: { x: e.clientX, y: e.clientY },
      }),
    );

    // trigger download
    const link = document.createElement("a");
    link.href = "/ROUND_2_RESULTS.pdf";
    link.download = "ROUND_2_RESULTS.pdf";
    link.click();
  }, []);

  const handleHandbookClick = useCallback((e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent("register-click-origin", {
        detail: { x: e.clientX, y: e.clientY },
      }),
    );

    // trigger download
    const link = document.createElement("a");
    link.href = "/AISF_CODE_APEX_2.0_Participants_Handbook.pdf";
    link.download = "AISF_CODE_APEX_2.0_Participants_Handbook.pdf";
    link.click();
  }, []);

  const scrollToPrevious = () => {
    document.getElementById("previous")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };



  return (
    <>
      <RegisterOverlay active={registerActive} onComplete={handleComplete} />
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: "brightness(1.3)",
          }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>
        {/* 🔴 3D Particles over Hero */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <ThreeWorld />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <div className="mb-6">
            <p className="font-mono text-sm text-muted-foreground tracking-[0.3em] uppercase mb-8">
              AISF — Artificial Intelligence Student Forum
            </p>
          </div>

          <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-relaxed">
            <GlitchText text="CODE APEX" as="span" />
            <br />
            <span className="text-foreground text-2xl sm:text-3xl md:text-4xl">
              2.0
            </span>
          </h1>

          <p className="font-terminal text-2xl md:text-3xl text-muted-foreground mb-4">
            24 — Hour Hackathon
          </p>
          <p className="font-mono text-sm text-muted-foreground mb-12 tracking-wider">
            VIT Pune • Departmental Club
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 opacity-90 mb-6">
            <span className="font-mono text-lg  tracking-[0.25em] text-muted-foreground uppercase ">
              ⚡ Powered by
            </span>

            <img
              src={poweredByUnstop}
              alt="Powered by Unstop"
              className="h-10 object-contain"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button variant="neon" size="lg" onClick={handleRegister}>
              Register Now
            </Button> */}
            <Button variant="neon" size="lg" onClick={handleRound2Result}>
              Round 2 Result
            </Button>
            {/* <Button variant="neon-outline" size="lg" asChild>
              <a href="#previous">Explore Events</a>
            </Button> */}
            <Button variant="neon-outline" size="lg" onClick={scrollToPrevious}>
              Explore Events
            </Button>

            <Button
              variant="neon-outline"
              size="lg"
              onClick={handleProblemClick}
              className="
                  transition-all duration-300
                  hover:bg-primary
                  hover:text-primary-foreground
                  hover:border-primary
                  hover:shadow-[0_0_18px_hsl(var(--primary))]
                "
            >
              Download PS
            </Button>
            <Button
              variant="neon-outline"
              size="lg"
              onClick={handleHandbookClick}
              className="
                  transition-all duration-300
                  hover:bg-primary
                  hover:text-primary-foreground
                  hover:border-primary
                  hover:shadow-[0_0_18px_hsl(var(--primary))]
                "
            >
              Download Handbook
            </Button>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
      </section>
    </>
  );
};

export default HeroSection;
