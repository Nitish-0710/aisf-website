import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const sponsors = [
  { id: 1, image: "" },
  { id: 2, image: "" },
  { id: 3, image: "" },
  { id: 4, image: "" },
  { id: 5, image: "" },
  { id: 6, image: "" },
];

const TiltSponsor = ({ image }: { image: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)");
  const [glowIntensity, setGlowIntensity] = useState(0.1);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(35px) scale(1.05)`);
    setGlowIntensity(0.5);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)");
    setGlowIntensity(0.1);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-card rounded h-36 flex items-center justify-center cursor-default overflow-hidden"
      style={{
        perspective: "800px",
        transform,
        transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease, border-color 0.4s ease",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: `hsl(348 100% 50% / ${glowIntensity > 0.2 ? 0.5 : 0.15})`,
        boxShadow: `0 ${glowIntensity > 0.2 ? 15 : 3}px ${glowIntensity > 0.2 ? 30 : 8}px hsl(0 0% 0% / ${glowIntensity}), 0 0 ${glowIntensity > 0.2 ? 25 : 0}px hsl(348 100% 50% / ${glowIntensity * 0.5})`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Shine sweep */}
      <div className="shine-sweep" />
      {/* <img src={image} alt="Sponsor" className="h-20 object-contain relative z-10" /> */}
      To be revealed soon...
    </div>
  );
};

const SponsorsSection = () => {
  return (
    <section id="partners" className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="terminal-header text-sm mb-2 tracking-[0.2em]">// ALLIES</p>
          <h2 className="font-pixel text-xl md:text-2xl text-primary mb-12 section-title-flicker">PARTNERS</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-3xl mx-auto" style={{ perspective: "1000px" }}>
          {sponsors.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltSponsor image={s.image} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
