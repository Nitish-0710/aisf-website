import { useEffect, useState } from "react";

function EventsNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`events-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="/" className="navbar-logo">
        <img src="/images/aisf-logo.png" alt="AISF" />
      </a>

      <div className="navbar-links">
        <a href="/">Home</a>

        <a href="#events" className="active">
          Events
        </a>

        <a href="#team">Team</a>

        <a href="#contact" className="contact-btn">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default EventsNavbar;