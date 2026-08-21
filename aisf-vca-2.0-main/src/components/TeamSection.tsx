import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import teamPhoto from "../assets/team.png";

const TeamSection = () => {
  const [flipped, setFlipped] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [tiltTransform, setTiltTransform] = useState(
    "rotateX(0deg) rotateY(0deg) scale(1)"
  );

  // 👇 Flip when entering viewport, unflip when leaving
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFlipped(entry.isIntersecting);
      },
      {
        threshold: 0.6, // triggers when 60% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTiltTransform(
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTiltTransform("rotateX(0deg) rotateY(0deg) scale(1)");
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="terminal-header text-sm mb-2 tracking-[0.2em]">
            // PERSONNEL
          </p>
          <h2 className="font-pixel text-xl md:text-2xl text-primary section-title-flicker">
            OUR TEAM
          </h2>
        </motion.div>

        {/* Card */}
        <div className="flex justify-center">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full max-w-4xl h-[500px] cursor-pointer"
            style={{ perspective: "1200px" }}
          >
            {/* Tilt Wrapper */}
            <div
              className="w-full h-full"
              style={{
                transform: tiltTransform,
                transformStyle: "preserve-3d",
                transition: "transform 0.2s ease-out",
              }}
            >
              {/* Flip Wrapper */}
              <div
                className="relative w-full h-full rounded-[4%] border border-primary/40 shadow-[0_0_30px_hsl(348_100%_50%/0.25)]"
                style={{
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                  transition:
                    "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 bg-card rounded-[4%] flex items-center justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="font-pixel text-3xl text-primary tracking-widest">
                    OUR TEAM
                  </h3>
                </div>

                {/* BACK (IMAGE) */}
                <div
                  className="absolute inset-0 rounded-[4%] flex items-center justify-center bg-card"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="p-6 w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full rounded-[4%] overflow-hidden">
                      <img
                        src={teamPhoto}
                        alt="Team"
                        className="w-full h-full object-cover rounded-[4%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Flip */}
            </div>
            {/* End Tilt */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
