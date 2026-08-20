import { useEffect, useState } from "react";

import EventsNavbar from "../components/EventsNavbar";
import EventHero from "../components/EventHero";
import EventTimeline from "../components/EventTimeline";
import EventSection from "../components/EventSection";
import EventsFooter from "../components/EventsFooter";

function Events() {
  const [themeProgress, setThemeProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const progress = Math.min(
        Math.max(window.scrollY / maxScroll, 0),
        1
      );

      setThemeProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
    0 = blue
    1 = red

    We only allow the global theme to start changing
    after the hero/timeline area.
  */

  const eventStart = 0.30;
  const eventEnd = 0.90;

  const normalized = Math.min(
    Math.max(
      (themeProgress - eventStart) /
        (eventEnd - eventStart),
      0
    ),
    1
  );

  return (
    <main
      className="events-page"
      style={{
        "--theme-progress": normalized,
      }}
    >
      <div
        className="theme-background"
        style={{
          "--theme-mix": normalized,
        }}
      />

      <EventsNavbar />

      <EventHero />

      <EventTimeline />

      <div id="events">

        {/* CODE APEX 1.0 */}
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

        {/* CODE APEX 2.0 */}
        <EventSection
          id="code-apex-2"
          className="event-section event-theme-red"
          number="02"
          title="Code Apex 2.0"
          date="16 MAR 2026"
          theme="theme-red"
          reverse
          images={[
            "/images/events/ca2/VCA2.1.jpeg",
            "/images/events/ca2/VCA2.2.jpeg",
            "/images/events/ca2/VCA2.3.jpeg",
            "/images/events/ca2/VCA2.4.jpeg",
            "/images/events/ca2/VCA2.5.jpeg",
          ]}
          description="Code Apex 2.0 continued the journey with a larger and more intense hackathon experience, bringing together creativity, technology and collaboration under one challenge."
        />

      </div>

      <EventsFooter />
    </main>
  );
}

export default Events;