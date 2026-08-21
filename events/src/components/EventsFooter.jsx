function EventsFooter() {
  return (
    <footer className="events-footer" id="contact">
      <div className="footer-dots" />

      <div className="footer-wrap">
        <div className="footer-grid">

          {/* BRAND */}
          <div>
            <div className="footer-logo">
              <img
                src="/images/aisf-logo.png"
                alt="AISF - Artificial Intelligence Student Forum"
              />
            </div>

            <p className="footer-tagline">
              Fostering innovation, learning, and collaboration in AI and
              technology at Vishwakarma Institute of Technology, Pune.
            </p>

            <div className="footer-map">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vishwakarma+Institute+of+Technology+Pune"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps ↗
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
              <p>VIT Bibwewadi, Pune, Maharashtra, India</p>

              <p>
                <a href="mailto:aisf@vit.edu">
                  aisf@vit.edu
                </a>
              </p>
            </div>

            <div className="footer-people">
              <div>
                <b>Samarth Mahajan</b>
                <span>President</span>
                <a href="tel:+918305261866">
                  +91 83052 61866
                </a>
              </div>

              <div>
                <b>Ruturaj Bhome</b>
                <span>Vice President</span>
                <a href="tel:+918468012201">
                  +91 84680 12201
                </a>
              </div>

              <div>
                <b>Samarth Mahajan</b>
                <span>Event Head (Hackathon)</span>
                <a href="tel:+917028044996">
                  +91 70280 44996
                </a>
              </div>

              <div>
                <b>Pratham Shelke</b>
                <span>PR & Branding Head</span>
                <a href="tel:+918767852276">
                  +91 87678 52276
                </a>
              </div>

              <div>
                <b>Shreya Ranjan</b>
                <span>Technical Secretary</span>
                <a href="mailto:samir.shreya24@vit.edu">
                  samir.shreya24@vit.edu
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 AISF VIT Pune. All rights reserved.</span>

          <span className="footer-badge">
            Code Apex 2.0
          </span>
        </div>
      </div>
    </footer>
  );
}

export default EventsFooter;