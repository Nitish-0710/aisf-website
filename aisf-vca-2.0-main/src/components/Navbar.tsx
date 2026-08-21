import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#home", isRoute: false },
  { label: "Events", href: "#about", isRoute: false },
  { label: "Team", href: "#team", isRoute: false },
  { label: "Our Partners", href: "#partners", isRoute: false },
  { label: "Panels", href: "/panels", isRoute: true },
  { label: "Timer", href: "/timer", isRoute: true },
];

type NavItemProps = {
  label: string;
  href: string;
  target?: string;
  isRoute?: boolean;
};

const GlitchNavItem = ({ label, href, target, isRoute = false }: NavItemProps) => {
  const [glitching, setGlitching] = useState(false);
  const [display, setDisplay] = useState(label);
  const chars = "!@#$%^&*()_+{}|:<>?";
  const location = useLocation();
  const isActive = isRoute && location.pathname === href;

  const handleHover = () => {
    if (glitching) return;
    setGlitching(true);
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplay(
        label
          .split("")
          .map((char, i) =>
            i < iterations
              ? char
              : chars[Math.floor(Math.random() * chars.length)],
          )
          .join(""),
      );

      iterations += 1 / 2;

      if (iterations >= label.length) {
        setDisplay(label);
        setGlitching(false);
        clearInterval(interval);
      }
    }, 40);
  };

  const className = `relative font-mono text-sm tracking-wider transition-colors cursor-pointer group ${
    isActive ? "text-primary" : "text-foreground hover:text-primary"
  }`;

  if (isRoute) {
    return (
      <Link
        to={href}
        className={className}
        onMouseEnter={handleHover}
      >
        {display}
        <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary shadow-[0_0_10px_hsl(348_100%_50%/0.8)] transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`} />
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={className}
      onMouseEnter={handleHover}
    >
      {display}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary shadow-[0_0_10px_hsl(348_100%_50%/0.8)] group-hover:w-full transition-all duration-300" />
    </a>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          to="/"
          className="font-pixel text-primary text-sm animate-glow-pulse"
        >
          AISF
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <span className="font-pixel text-xs text-primary/70">
            Code Apex 2.0
          </span>

          <div className="w-[1px] h-4 bg-border" />

          {navItems.map((item) => (
            <GlitchNavItem key={item.label} {...item} />
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-[2px] w-6 bg-primary transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-primary transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-primary transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 pb-6 pt-2">
          {navItems.map((item) => (
            <GlitchNavItem
              key={item.label}
              {...item}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
