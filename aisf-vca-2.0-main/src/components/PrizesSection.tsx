import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const prizes = [
  { place: "1st", prize: "₹20,000", color: "text-primary" },
  { place: "2nd", prize: "₹15,000", color: "text-foreground" },
  { place: "3rd", prize: "₹10,000", color: "text-muted-foreground" },
];

const PrizesSection = () => {
  return (
    <section className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="terminal-header text-sm mb-2 tracking-[0.2em]">// REWARDS</p>
          <h2 className="font-pixel text-xl md:text-2xl text-primary mb-12 section-title-flicker">PRIZES</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {prizes.map((p, i) => (
            <motion.div
              key={p.place}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                boxShadow: "0 0 40px hsl(348 100% 50% / 0.4)",
              }}
              className="relative bg-card border border-border p-8 rounded text-center cursor-default transition-all duration-300 hover:border-primary/50 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Shine sweep */}
              <div className="shine-sweep" />
              <Trophy className={`mx-auto mb-4 ${p.color} relative z-10`} size={40} />
              <h3 className="font-pixel text-lg text-foreground mb-2 relative z-10">{p.place} Place</h3>
              <p className="font-terminal text-3xl text-primary relative z-10">{p.prize}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
