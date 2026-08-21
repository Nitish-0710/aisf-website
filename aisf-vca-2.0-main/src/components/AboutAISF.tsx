import { motion } from "framer-motion";
import GlitchBlock from "./GlitchBlock";

const AboutAISF = () => {
  return (
    <section className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="terminal-header text-sm mb-2 tracking-[0.2em]">// ORGANIZATION</p>
          <h2 className="font-pixel text-xl md:text-2xl text-primary mb-12 section-title-flicker">ABOUT AISF</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              title: "MISSION",
              text: "To bridge the gap between academic AI knowledge and real-world application, empowering students to build, innovate, and lead in the age of artificial intelligence.",
            },
            {
              title: "VISION",
              text: "A community where every student has the skills, resources, and network to shape the future of AI — one project, one hackathon, one breakthrough at a time.",
            },
            {
              title: "WHO_WE_ARE",
              text: "AISF is the official AI departmental club of VIT Pune. We organize workshops, hackathons, speaker sessions, and research initiatives to foster a culture of innovation and technical excellence.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-2 border-primary/40 pl-6 group"
            >
              <h3 className="font-mono text-sm text-primary tracking-wider mb-2">
                &gt; <GlitchBlock text={item.title} as="span" className="font-mono text-sm text-primary tracking-wider" />
              </h3>
              <GlitchBlock
                text={item.text}
                className="font-terminal text-xl text-foreground/80 leading-relaxed"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAISF;
