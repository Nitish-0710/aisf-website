const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-dots" />

      <div className="footer-wrap">
        <div className="footer-grid">

          <div>
            <div className="footer-logo">
              <img
                src="/aisf-logo.png"
                alt="AISF"
              />
            </div>

            <p className="footer-tagline">
              Fostering innovation, learning, and collaboration
              in AI and technology at Vishwakarma Institute
              of Technology, Pune.
            </p>

            <div className="footer-map">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vishwakarma+Institute+of+Technology+Pune"
                target="_blank"
                rel="noreferrer"
              >
                OPEN IN MAPS ↗
              </a>

              <iframe
                src="https://www.google.com/maps?q=Vishwakarma+Institute+of+Technology,+Bibwewadi,+Pune&output=embed"
                loading="lazy"
                title="AISF VIT Pune"
              />
            </div>
          </div>

          <div>
            <h3>Connect with us</h3>

            <div className="footer-social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:aisf@vit.edu">
                Email
              </a>
            </div>
          </div>

          <div>
            <h3>Contact</h3>

            <p className="footer-contact">
              VIT Bibwewadi, Pune,
              Maharashtra, India
            </p>

            <a
              className="footer-email"
              href="mailto:aisf@vit.edu"
            >
              aisf@vit.edu
            </a>

            <div className="footer-people">

              <div>
                <b>Om Kumar Garg</b>
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
                <span>Event Head</span>
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
                <span>Technical Head</span>
                <a href="mailto:samir.shreya24@vit.edu">
                  samir.shreya24@vit.edu
                </a>
              </div>

            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2025 AISF VIT Pune.
            All rights reserved.
          </span>

          <span className="footer-badge">
            CODE APEX 2.0
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;