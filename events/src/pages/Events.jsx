import { useEffect, useRef } from "react";

import EventsNavbar from "../components/EventsNavbar";
import EventHero from "../components/EventHero";
import EventTimeline from "../components/EventTimeline";
import EventSection from "../components/EventSection";
import EventsFooter from "../components/EventsFooter";
import { Canvas } from "@react-three/fiber";
import HoloModel from "../components/EventBackgroundModel";

function Events() {
  const mainRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const eventStart = 0.30;
    const eventEnd = 0.90;

    const updateTheme = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll > 0 && mainRef.current) {
        const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
        const normalized = Math.min(
          Math.max((progress - eventStart) / (eventEnd - eventStart), 0),
          1
        );

        // Written straight to the DOM — no React re-render.
        mainRef.current.style.setProperty("--theme-progress", normalized);
        mainRef.current.style.setProperty("--theme-mix", normalized);
      }
      rafRef.current = null;
    };

    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateTheme);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTheme();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <main ref={mainRef} className="events-page">
      <div className="theme-background" />

      <div className="events-3d-background">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <HoloModel />
        </Canvas>
      </div>

      <EventsNavbar />
      <EventHero />
      <EventTimeline />

      <div id="events">
        <EventSection
          id="code-apex-1"
          className="event-section event-theme-blue"
          number="01"
          title="Code Apex 1.0"
          date="18 SEP 2025"
          theme="theme-blue"
          images={[
            "/images/events/ca-1/VCA1.1.jpeg",
            "/images/events/ca-1/VCA1.2.jpeg",
            "/images/events/ca-1/VCA1.3.jpeg",
            "/images/events/ca-1/VCA1.4.jpeg",
          ]}
          description="Code Apex 1.0 brought together students, developers and technology enthusiasts for a high-energy experience focused on problem solving, innovation and building with technology."
        />

        <EventSection
          id="code-apex-2"
          className="event-section event-theme-red"
          number="02"
          title="Code Apex 2.0"
          date="16 MAR 2026"
          theme="theme-red"
          reverse
          images={[
            "/images/events/ca-2/VCA2.1.jpeg",
            "/images/events/ca-2/VCA2.2.jpeg",
            "/images/events/ca-2/VCA2.3.jpeg",
            "/images/events/ca-2/VCA2.4.jpeg",
            "/images/events/ca-2/VCA2.5.jpeg",
          ]}
          description="Code Apex 2.0 continued the journey with a larger and more intense hackathon experience, bringing together creativity, technology and collaboration under one challenge."
        />
      </div>

      <EventsFooter />
    </main>
  );
}

export default Events;