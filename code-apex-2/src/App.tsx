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


      {/* FOOTER */}
      <footer id="contact" className="footer">

        <img src={logo} alt="AISF Logo" className="logo-img" />
        <div>
          <h3>ARTIFICIAL INTELLIGENCE STUDENT FORUM</h3>
          <p>VIT Pune</p>
        </div>

        <p className="copyright">
          © 2026 AISF VIT Pune
        </p>

      </footer>

        </main>
  </>
  );
}

export default App;