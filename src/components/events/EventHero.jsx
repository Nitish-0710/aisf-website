import { useEffect, useState, useRef } from "react";

function EventHero() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const heroHeight = window.innerHeight;

    const updateProgress = () => {
      const value = Math.min(
        Math.max(window.scrollY / (heroHeight), 0),
        1
      );
      setProgress(value);
      rafRef.current = null;
    };

    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const letters = [
    { char: "E", x: -300, y: -150, rotate: -20 },
    { char: "V", x: -150, y: 130, rotate: -12 },
    { char: "E", x: -20, y: -180, rotate: -5 },
    { char: "N", x: 150, y: 130, rotate: 12 },
    { char: "T", x: 300, y: -120, rotate: 20 },
    { char: "S", x: 430, y: 90, rotate: 28 },
  ];

  const images = [
    {
      src: "/images/events/ca-1/VCA1.1.jpeg",
      className: "hero-img-1",
      x: -220,
      y: -180,
      rotate: -18,
      delay: "0s",
    },
    {
      src: "/images/events/ca-1/VCA1.3.jpeg",
      className: "hero-img-2",
      x: 230,
      y: -170,
      rotate: 20,
      delay: "-1.2s",
    },
    {
      src: "/images/events/ca-2/VCA2.1.jpeg",
      className: "hero-img-3",
      x: 260,
      y: 180,
      rotate: -16,
      delay: "-2.4s",
    },
  ];

  return (
    <section className="event-hero">
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-kicker">AISF PRESENTS</div>

        <div className="event-word">
          {letters.map((letter, index) => {
            const multiplier = progress * (0.75 + index * 0.1);

            return (
              <span
                key={index}
                className="event-letter"
                style={{
                  transform: `
                    translate(
                      ${letter.x * multiplier}px,
                      ${letter.y * multiplier}px
                    )
                    rotate(${letter.rotate * multiplier}deg)
                  `,
                  opacity: 1 - progress,
                }}
              >
                {letter.char}
              </span>
            );
          })}
        </div>

        <p className="hero-description">
          A collection of moments, ideas, challenges and innovation.
        </p>

        <div className="hero-scroll">
          <span>SCROLL</span>
          <div>↓</div>
        </div>
      </div>

      <div className="hero-images">
        {images.map((image, index) => {
          const spreadMultiplier =
            progress * (0.85 + index * 0.12);

          return (
            <div
              key={index}
              className={`hero-floating-image ${image.className}`}
              style={{
                "--float-delay": image.delay,

                transform: `
      translate3d(
        ${image.x * spreadMultiplier}px,
        ${image.y * spreadMultiplier}px,
        0
      )
      rotate(
        ${image.rotate * spreadMultiplier}deg
      )
    `,

                opacity: 1 - progress * 0.75,
              }}
            >
              <img src={image.src} alt="AISF event" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EventHero;