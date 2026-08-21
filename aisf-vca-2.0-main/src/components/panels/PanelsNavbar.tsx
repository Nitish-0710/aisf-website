import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Slim context-aware navbar for the Panels page.
 * Shows: AISF logo | "← Home" | "Panels" (active)
 */
const PanelsNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="font-pixel text-primary text-sm animate-glow-pulse">
          AISF
        </Link>

        <div className="flex items-center gap-8">
          {/* Back to Home */}
          <Link
            to="/"
            className="relative font-mono text-base tracking-wider text-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            ← Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary shadow-[0_0_10px_hsl(348_100%_50%/0.8)] group-hover:w-full transition-all duration-300" />
          </Link>

          <div className="w-[1px] h-4 bg-border" />

          {/* Panels — active */}
          <span className="relative font-mono text-base tracking-wider text-primary cursor-default">
            Panels
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary shadow-[0_0_10px_hsl(348_100%_50%/0.8)]" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default PanelsNavbar;
