import { useEffect, useState } from "react";

function EventHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;

      const value = Math.min(
        Math.max(window.scrollY / (heroHeight * 0.85), 0),
        1
      );

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letters = [
    { char: "E", x: -260, y: -120, rotate: -18 },
    { char: "V", x: -130, y: 90, rotate: -10 },
    { char: "E", x: 0, y: -150, rotate: 0 },
    { char: "N", x: 130, y: 100, rotate: 10 },
    { char: "T", x: 270, y: -100, rotate: 18 },
    { char: "S", x: 270, y: -100, rotate: 18 },
  ];

  const images = [
    {
      src: "/images/events/ca-1/VCA1.1.jpeg",
      className: "hero-img-1",
    },
    {
      src: "/images/events/ca-1/VCA1.2.jpeg",
      className: "hero-img-2",
    },
    {
      src: "/images/events/ca-2/VCA2.1.jpeg",
      className: "hero-img-3",
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
                  opacity: 1 - progress * 0.65,
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
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-floating-image ${image.className}`}
            style={{
              transform: `translateY(${-progress * (100 + index * 30)}px)
                          rotate(${index % 2 === 0 ? -6 : 6}deg)`,
            }}
          >
            <img src={image.src} alt="AISF event" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventHero;