import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const events = [
  { 
    date: "16 Mar 26", 
    label: "Round 1 Starts", 
    desc: "Online PPT Submission opens. Teams submit a detailed presentation outlining their proposed solution, including problem understanding, solution framework, technical approach, technology stack, implementation roadmap, and expected impact." 
  },
  { 
    date: "19 Mar 26", 
    label: "Round 1 Ends", 
    desc: "Submissions are evaluated based on conceptual clarity, innovation, structured problem-solving, and technical feasibility. Shortlisted teams are announced for Round 2." 
  },
  { 
    date: "20 Mar 26", 
    label: "Round 2 Starts", 
    desc: "Shortlisted teams present their solutions virtually to the jury panel. Presentations focus on design justification, feasibility, and technical approach." 
  },
  { 
    date: "22 Mar 26", 
    label: "Round 2 Ends", 
    desc: "Jury evaluates live presentations and announces the teams selected for the Grand Finale." 
  },
  { 
    date: "27 Mar 26", 
    label: "Round 3 Starts", 
    desc: "Grand Finale begins at VIT Pune. Finalists participate in a 24-hour hackathon, build and implement their solution, and receive mentorship from industry experts." 
  },
  { 
    date: "28 Mar 26", 
    label: "Round 3 Ends", 
    desc: "Final prototypes are presented to the jury panel. Overall winners of VIT CODE VERSE 2.0 are announced during the closing ceremony." 
  },
];

const SequentialItem = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const [visible, setVisible] = useState(false);
  const [glowing, setGlowing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Staggered appearance
          const timer = setTimeout(() => {
            setVisible(true);
            setGlowing(true);
            // Glow for 1s then stabilize
            const glowTimer = setTimeout(() => setGlowing(false), 1000);
            return () => clearTimeout(glowTimer);
          }, index * 400);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="relative pl-16 pb-12 last:pb-0 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Dot */}
      <div
        className="absolute left-[18px] top-1 w-3 h-3 rounded-full bg-primary transition-shadow duration-500"
        style={{
          boxShadow: glowing
            ? "0 0 20px hsl(348 100% 50% / 1), 0 0 40px hsl(348 100% 50% / 0.6)"
            : "0 0 12px hsl(348 100% 50% / 0.8)",
        }}
      />

      <span
        className="font-mono text-xs tracking-widest transition-all duration-500"
        style={{
          color: glowing ? "hsl(348 100% 60%)" : "hsl(348 100% 50% / 0.7)",
          textShadow: glowing ? "0 0 10px hsl(348 100% 50% / 0.8)" : "none",
        }}
      >
        {event.date}
      </span>
      <h3
        className="font-pixel text-sm mt-1 transition-all duration-500"
        style={{
          color: glowing ? "hsl(348 100% 60%)" : "hsl(var(--foreground))",
          textShadow: glowing ? "0 0 15px hsl(348 100% 50% / 0.6)" : "none",
        }}
      >
        {event.label}
      </h3>
      <p className="font-terminal text-lg text-muted-foreground mt-1">{event.desc}</p>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="terminal-header text-sm mb-2 tracking-[0.2em]">// SCHEDULE</p>
          <h2 className="font-pixel text-xl md:text-2xl text-primary mb-12 section-title-flicker">DEADLINES</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
          {events.map((event, i) => (
            <SequentialItem key={event.label} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
