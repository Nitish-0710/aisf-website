import logo from "../assets/aisf-logo.png";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-wrap">

        <div className="footer-grid">

          {/* LEFT */}
          <div className="footer-brand">
            <img
              className="footer-logo"
<<<<<<< HEAD
              src={logo}
=======
              src="/src/assets/aisf-logo.png"
>>>>>>> da3799f7ed8063589699b46e9bc2c5aa99d5fbb6
              alt="AISF Logo"
            />

            <p className="footer-tagline">
              Fostering innovation, learning, and collaboration in AI and
              technology.
            </p>

            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps?q=Vishwakarma+Institute+of+Technology,+Bibwewadi,+Pune&output=embed"
                loading="lazy"
                title="AISF VIT Pune"
              />
            </div>
          </div>

          {/* MIDDLE */}
          <div className="footer-connect">
            <h3>Connect with us</h3>

            <div className="footer-social">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="mailto:aisf@vit.edu"
                aria-label="Email"
              >
                ✉
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-contact-section">

            <h3>Contact</h3>

            <p className="footer-location">
              📍 VIT Bibwewadi, Pune, Maharashtra, India
            </p>

            <a
              className="footer-email"
              href="mailto:aisf@vit.edu"
            >
              ✉ aisf@vit.edu
            </a>

            <div className="footer-divider" />

            <div className="footer-people">

              <p>
                <b>Om Kumar Garg:</b> +91-8305261866
              </p>

              <p>
                <b>Ruturaj Bhome:</b> +91-8468812201
              </p>

              <p>
                <b>Samarth Mahajan (President):</b> +91-7028044996
              </p>

              <p>
                <b>Pratham Shelke (PR & Branding Secretary):</b>
                +91-8767852276
              </p>

              <p>
                <b>Shreya Ranjan (Technical Secretary):</b>
                samir.shreya24@vit.edu
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © 2026 AISF VIT Pune. All rights reserved.
          </span>

          <div className="footer-bottom-right">
            <span>AI STUDENT FORUM</span>

            <a href="#top">
              Back to top ↑
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;