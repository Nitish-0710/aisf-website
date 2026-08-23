import HoloBackground from "./components/HoloBackground";
import logo from "./assets/aisf-logo.png";
import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryImages = [
    "/src/assets/gallery/OAK_7002.JPG",
    "/src/assets/gallery/OAK_7003.JPG",
    "/src/assets/gallery/OAK_7031.JPG",
    "/src/assets/gallery/OAK_7049.JPG",
    "/src/assets/gallery/OAK_7075.JPG",
    "/src/assets/gallery/OAK_7095.JPG",
    "/src/assets/gallery/OAK_7128.JPG",
    "/src/assets/gallery/OAK_7143.JPG",
  ];

  return (
  <>
    <HoloBackground />
    <main>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="AISF Logo" className="logo-img" />
        </div>

        <nav className="event-navbar">
          <a href="/" className="nav-item">
            Home
          </a>

          <a href="/events" className="nav-item active">
            Events
          </a>

          <a href="/team" className="nav-item">
            Team
          </a>

          <a href="#contact" className="nav-contact">
            Contact
          </a>
        </nav>
      </header>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-glow"></div>

        <div className="hero-content">
          <p className="eyebrow">
            AISF — ARTIFICIAL INTELLIGENCE STUDENT FORUM
          </p>

          <h1>
            CODE <span>APEX</span>
          </h1>

          <div className="version">2.0</div>

          <p className="subtitle">
            24 — Hour Hackathon
          </p>

          <p className="location">
            VIT Pune · Departmental Club
          </p>
        </div>

        <section className="downloads-section">
          <h2>Resources</h2>

          <div className="download-grid">

            <a
              href="public\ROUND_2_RESULTS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-card"
            >
              <span className="download-icon">🏆</span>
              <div>
                <h3>Round 2 Results</h3>
                <p>View shortlisted teams</p>
              </div>
              <span className="download-arrow">↗</span>
            </a>

            <a
              href="/public\CODEAPEX_Problem Statements.pdf"
              download
              className="download-card"
            >
              <span className="download-icon">📄</span>
              <div>
                <h3>Download Problem Statements</h3>
                <p>View all challenge statements</p>
              </div>
              <span className="download-arrow">↓</span>
            </a>

            <a
              href="public\Participants Handbook - AISF_ CODE APEX 2.0.pdf"
              download
              className="download-card"
            >
              <span className="download-icon">📘</span>
              <div>
                <h3>Download Handbook</h3>
                <p>Rules, guidelines and event details</p>
              </div>
              <span className="download-arrow">↓</span>
            </a>

          </div>
        </section>

      </section>


      {/* TIMELINE */}
      <section id="timeline" className="timeline-section">

        <div className="section-label">EVENT SEQUENCE</div>

        <h2>
          THE <span>RUN</span>
        </h2>

        <div className="timeline">

          <div className="timeline-item left">
            <div className="timeline-card">
              <div className="date">16 MAR 26</div>
              <div className="number">01</div>
              <h3>Round 1 Starts</h3>
              <p>
                Online PPT Submission opens. Teams submit a detailed presentation
                outlining their proposed solution, including problem understanding,
                solution framework, technical approach, technology stack,
                implementation roadmap, and expected impact.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-card">
              <div className="date">19 MAR 26</div>
              <div className="number">02</div>
              <h3>Round 1 Ends</h3>
              <p>
                Submissions are evaluated based on conceptual clarity, innovation,
                structured problem-solving, and technical feasibility.
                Shortlisted teams are announced for Round 2.
              </p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-card">
              <div className="date">20 MAR 26</div>
              <div className="number">03</div>
              <h3>Round 2 Starts</h3>
              <p>
                Shortlisted teams present their solutions virtually to the jury panel.
                Presentations focus on design justification, feasibility,
                and technical approach.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-card">
              <div className="date">22 MAR 26</div>
              <div className="number">04</div>
              <h3>Round 2 Ends</h3>
              <p>
                The jury evaluates live presentations and announces the teams
                selected for the Grand Finale.
              </p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-card">
              <div className="date">27 MAR 26</div>
              <div className="number">05</div>
              <h3>Round 3 Starts</h3>
              <p>
                The Grand Finale begins at VIT Pune. Finalists participate in a
                24-hour hackathon, build and implement their solution, and receive
                mentorship from industry experts.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-card">
              <div className="date">28 MAR 26</div>
              <div className="number">06</div>
              <h3>Round 3 Ends</h3>
              <p>
                Final prototypes are presented to the jury panel.
                Overall winners of VIT CODE VERSE 2.0 are announced during
                the closing ceremony.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* GALLERY */}
      <section id="archive" className="gallery-section">

        <div className="section-label">EVENT ARCHIVE</div>

        <h2>
          CODE APEX <span>ARCHIVE</span>
        </h2>

        <div className="gallery-track">
          {[...galleryImages, ...galleryImages].map(
            (image, index) => (
              <div className="gallery-card" key={index}>
                <img
                  src={image}
                  alt={`Code Apex ${index + 1}`}
                />
              </div>
            )
          )}
        </div>

      </section>


        {/* ========================================================= */}
      {/* 7. FOOTER (Matching Reference Layout & Structure) */}
      {/* ========================================================= */}
      <footer id="contact" className="relative bg-[#05070A]/85 border-t border-white/10 pt-16 pb-12 px-6 sm:px-12 lg:px-20 z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
            
            {/* Column 1: Logo, Tagline & Embedded Google Maps */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src={aisfLogoImg}
                  alt="AISF Logo"
                  className="h-8 w-auto object-contain bg-transparent"
                />
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm font-normal">
                Fostering innovation, learning, and collaboration in AI and technology.
              </p>

              {/* Functional Google Maps Card */}
              <div className="relative mt-5 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#030406] w-full max-w-[340px] h-[190px] group">
                <iframe
                  title="VIT Pune Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4419999786675!2d73.86566817595514!3d18.46362697091535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2ca9f083a!2sVishwakarma%20Institute%20of%20Technology%20(VIT)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.google.com/?q=Vishwakarma+Institute+of+Technology,+Bibwewadi,+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#05070A]/90 hover:bg-[#2563EB] text-[#F8FAFC] text-[11px] font-medium border border-white/15 backdrop-blur-md transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Open in Maps</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Column 2: Connect with us (Centered Glass Buttons) */}
            <div className="md:col-span-3 flex flex-col items-start md:items-center">
              <div className="space-y-4 w-full max-w-[200px]">
                <h4 className="text-base sm:text-lg font-mono font-bold tracking-tight text-[#F8FAFC]">
                  Connect with us
                </h4>
                
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/csai_aisf/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#2563EB]/15 transition-all duration-200"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/artificial-intelligence-student-forum-aisf/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#2563EB]/15 transition-all duration-200"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="mailto:aisf@vit.edu"
                    aria-label="Email"
                    className="w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#2563EB]/15 transition-all duration-200"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Details & Leadership */}
            <div className="md:col-span-4 space-y-4 font-mono">
              <h4 className="text-base sm:text-lg font-mono font-bold tracking-tight text-[#F8FAFC]">
                Contact
              </h4>

              {/* Location & Email info */}
              <div className="space-y-2 text-xs sm:text-sm text-[#94A3B8]">
                <a
                  href="https://maps.google.com/?q=Vishwakarma+Institute+of+Technology,+Bibwewadi,+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 hover:text-[#3B82F6] transition-colors"
                >
                  <MapPin size={15} className="text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>VIT Bibwewadi, Pune, Maharashtra, India</span>
                </a>
                <a
                  href="mailto:aisf@vit.edu"
                  className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
                >
                  <Mail size={15} className="text-[#3B82F6] shrink-0" />
                  <span>aisf@vit.edu</span>
                </a>
              </div>

              {/* Team Contacts */}
              <div className="pt-3 border-t border-white/10 space-y-2 text-xs leading-relaxed text-[#94A3B8]">
                <div>
                  <span className="text-[#F8FAFC] font-medium">Om Kumar Garg: </span>
                  <a href="tel:+918305261866" className="hover:text-[#3B82F6] transition-colors">
                    +91-8305261866
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Ruturaj Bhome: </span>
                  <a href="tel:+918468812201" className="hover:text-[#3B82F6] transition-colors">
                    +91-8468812201
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Samarth Mahajan (President): </span>
                  <a href="tel:+917028044996" className="hover:text-[#3B82F6] transition-colors">
                    +91-7028044996
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Pratham Shelke (PR &amp; Branding Secretary): </span>
                  <a href="tel:+918767852276" className="hover:text-[#3B82F6] transition-colors">
                    +91-8767852276
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Shreya Ranjan (Technical Secretary): </span>
                  <a href="mailto:samir.shreya24@vit.edu" className="hover:text-[#3B82F6] transition-colors">
                    samir.shreya24@vit.edu
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-mono">
            <p>© 2026 AISF VIT Pune. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="text-xs uppercase tracking-widest text-[#94A3B8]">AI Student Forum</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#3B82F6] transition-colors group cursor-pointer"
              >
                <span>Back to top</span>
                <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

        </main>
  </>
  );
}

export default App;