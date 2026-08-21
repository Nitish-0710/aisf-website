import { motion } from "framer-motion";
import GlitchBlock from "./GlitchBlock";

const aboutData = [
  {
    title: "MISSION_BRIEF",
    content:
      "Code Apex 2.0 is a 24-hour hackathon organized by AISF — the Artificial Intelligence Student Forum of VIT Pune. Teams compete to build innovative solutions using cutting-edge technology.",
  },
  {
    title: "FORMAT",
    content:
      "Participants form teams of 2-4 members. Over 24 non-stop hours, you'll ideate, build, and present a working prototype. Mentors and industry experts will be available throughout.",
  },
  {
    title: "ELIGIBILITY",
    content:
      "Open to all undergraduate and postgraduate students. No prior hackathon experience required. Bring your laptop, your ideas, and your determination.",
  },
  {
    title: "RULES_OVERVIEW",
    content:
      "All code must be written during the event. Pre-existing libraries and frameworks are allowed. Projects judged on innovation, technical complexity, design, and presentation.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="terminal-header text-sm mb-2 tracking-[0.2em]">// SYSTEM LOG</p>
          <h2 className="font-pixel text-xl md:text-2xl text-primary mb-12 section-title-flicker">
            ABOUT THE EVENT
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {aboutData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-6 rounded hover:border-primary/30 transition-colors red-pulse group"
            >
              <h3 className="font-mono text-primary text-sm mb-3 tracking-wider">
                &gt; <GlitchBlock text={item.title} as="span" className="font-mono text-primary text-sm tracking-wider" />
              </h3>
              <GlitchBlock
                text={item.content}
                className="font-terminal text-lg text-foreground/80 leading-relaxed"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
