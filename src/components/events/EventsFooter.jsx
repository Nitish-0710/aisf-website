function Footer() {
  return (
    <footer className="events-footer" id="contact">
      <div className="footer-dots" />

      <div className="footer-wrap">
        <div className="footer-grid">

          {/* BRAND */}
          <div>
            <div className="footer-logo">
              <img
                src="/aisf-logo.png"
                alt="AISF Logo"
              />
            </div>

            <p className="footer-tagline">
              Fostering innovation, learning, and collaboration in AI and
              technology.
            </p>

            <div className="footer-map">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vishwakarma+Institute+of+Technology+Pune"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps →
              </a>

              <iframe
                src="https://www.google.com/maps?q=Vishwakarma+Institute+of+Technology,+Bibwewadi,+Pune&output=embed"
                loading="lazy"
                title="AISF VIT Pune location"
              />
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3>Connect with us</h3>

            <div className="footer-social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:aisf@vit.edu">
                Email
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3>Contact</h3>

            <div className="footer-contact">
              <p>📍 VIT Bibwewadi, Pune, Maharashtra, India</p>

              <p>
                ✉️ <a href="mailto:aisf@vit.edu">aisf@vit.edu</a>
              </p>
            </div>

            <div className="footer-people">
              <p><b>Om Kumar Garg:</b> +91-8305261866</p>
              <p><b>Ruturaj Bhome:</b> +91-8468812201</p>
              <p><b>Samarth Mahajan (President):</b> +91-7028044996</p>
              <p><b>Pratham Shelke (PR & Branding Secretary):</b> +91-8767852276</p>
              <p><b>Shreya Ranjan (Technical Secretary):</b> samir.shreya24@vit.edu</p>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 AISF VIT Pune. All rights reserved.</span>

          <div className="footer-bottom-right">
            <span>AISF STUDENT FORUM</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;