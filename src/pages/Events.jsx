import { useEffect, useRef } from "react";

import EventsNavbar from "../components/events/EventsNavbar";
import EventHero from "../components/events/EventHero";
import EventTimeline from "../components/events/EventTimeline";
import EventSection from "../components/events/EventSection";
import EventsFooter from "../components/events/EventsFooter";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import HoloModel from "../components/events/EventBackgroundModel";
import "../events.css";

function Events() {
  const mainRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const updateTheme = () => {
      if (!mainRef.current) return;

      const codeApex2 =
        document.getElementById("code-apex-2");

      const codeApex1 =
        document.getElementById("code-apex-1");

      if (!codeApex2 || !codeApex1) {
        rafRef.current = null;
        return;
      }

      const viewportHeight = window.innerHeight;

      /*
        -------------------------------------------------------
        EVENT SECTION POSITIONS
        -------------------------------------------------------
  
        We use the actual position of the sections instead of
        the total page scroll.
  
        This makes the background transition line up with the
        real event sections even if page length changes.
      */

      const ca2Top =
        codeApex2.getBoundingClientRect().top;

      const ca1Top =
        codeApex1.getBoundingClientRect().top;

      /*
        -------------------------------------------------------
        SMOOTHSTEP HELPER
        -------------------------------------------------------
  
        Produces a much smoother transition than a direct
        clamp.
      */

      const smoothStep = (value) => {
        const t = Math.min(Math.max(value, 0), 1);

        return t * t * (3 - 2 * t);
      };

      /*
        -------------------------------------------------------
        DEFAULT STATE
        -------------------------------------------------------
  
        Before Code Apex 2.0:
          BLUE = 0
      */

      let themeProgress = 0;

      /*
        -------------------------------------------------------
        CODE APEX 2.0
        BLUE → RED
        -------------------------------------------------------
  
        Start transitioning BEFORE the section reaches the
        center of the screen.
  
        This is the important part that prevents the sudden
        colour jump after the timeline.
      */

      const ca2TransitionStart =
        viewportHeight * 0.95;

      const ca2TransitionEnd =
        viewportHeight * 0.20;

      if (
        ca2Top < ca2TransitionStart &&
        ca2Top > ca2TransitionEnd
      ) {
        const progress =
          (ca2TransitionStart - ca2Top) /
          (ca2TransitionStart - ca2TransitionEnd);

        themeProgress = smoothStep(progress);
      }

      /*
        Once Code Apex 2.0 is fully active,
        keep the background RED.
      */

      if (ca2Top <= ca2TransitionEnd) {
        themeProgress = 1;
      }

      /*
        -------------------------------------------------------
        CODE APEX 1.0
        RED → BLUE
        -------------------------------------------------------
  
        When the next event approaches, smoothly transition
        back to blue.
      */

      const ca1TransitionStart =
        viewportHeight * 0.95;

      const ca1TransitionEnd =
        viewportHeight * 0.20;

      if (ca1Top < ca1TransitionStart) {
        const progress =
          (ca1TransitionStart - ca1Top) /
          (ca1TransitionStart - ca1TransitionEnd);

        themeProgress =
          1 - smoothStep(progress);
      }

      /*
        -------------------------------------------------------
        WRITE TO CSS
        -------------------------------------------------------
      */

      mainRef.current.style.setProperty(
        "--theme-progress",
        themeProgress
      );

      mainRef.current.style.setProperty(
        "--theme-mix",
        themeProgress
      );

      rafRef.current = null;
    };

    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current =
          requestAnimationFrame(updateTheme);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    updateTheme();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (rafRef.current) {
        cancelAnimationFrame(
          rafRef.current
        );
      }
    };
  }, []);

  return (
    <main ref={mainRef} className="events-page">
      <div className="theme-background" />

      <div className="events-3d-background">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={[1, 1]}
          gl={{ antialias: false, alpha: true }}
        >
          <HoloModel />
        </Canvas>
      </div>

      <EventsNavbar />
      <EventHero />
      <EventTimeline />

      <div id="events">
        <EventSection
          id="code-apex-2"
          className="event-section event-theme-red"
          number="01"
          title="Code Apex 2.0"
          date="16 MAR 2026"
          theme="theme-red"
          eventUrl="https://aisf-vca-2.netlify.app/ "
          openInNewTab={true}
          reverse
          images={[
            "/images/events/ca-2/VCA2.1.jpeg",
            "/images/events/ca-2/VCA2.2.jpeg",
            "/images/events/ca-2/VCA2.3.jpeg",
            "/images/events/ca-2/VCA2.4.jpeg",
            "/images/events/ca-2/VCA2.5.jpeg",

            "/images/events/ca-2/OAK_7002.JPG",
            "/images/events/ca-2/OAK_7031.JPG",
            "/images/events/ca-2/OAK_7143.JPG",
            "/images/events/ca-2/OAK_7095.JPG",
            "/images/events/ca-2/OAK_7075.JPG",
          ]}
          description="Code Apex 2.0 continued the journey with a larger and more intense hackathon experience, bringing together creativity, technology and collaboration under one challenge."
        />

        <EventSection
          id="code-apex-1"
          className="event-section event-theme-blue"
          number="02"
          title="Code Apex 1.0"
          date="18 SEP 2025"
          theme="theme-blue"
          eventUrl="https://aisf-vit-code-apex.netlify.app/"
          openInNewTab={true}
          images={[
            "/images/events/ca-1/VCA1.1.jpeg",
            "/images/events/ca-1/VCA1.2.jpeg",
            "/images/events/ca-1/VCA1.3.jpeg",
            "/images/events/ca-1/VCA1.4.jpeg",
            "/images/events/ca-1/VCA1.5.png",
            "/images/events/ca-1/VCA1.6.png",
            "/images/events/ca-1/VCA1.7.png",
            "/images/events/ca-1/VCA1.8.png",
            "/images/events/ca-1/VCA1.9.png",
            "/images/events/ca-1/VCA1.10.png",
          ]}
          description="Code Apex 1.0 brought together students, developers and technology enthusiasts for a high-energy experience focused on problem solving, innovation and building with technology."
        />
      </div>

      <EventsFooter />
    </main>
  );
}

export default Events;