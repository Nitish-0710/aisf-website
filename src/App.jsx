import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  Users,
  Code2,
  Calendar,
  Compass,
  ChevronUp,
  Mail,
  MapPin,
  Flame,
  ChevronDown
} from "lucide-react";
import heroBgVideo from "./assets/bg_video_AISF_cut.mp4";
import aisfLogoImg from "./assets/AISF_Logo_NoBG.png";
import whoWeAreImg from "./assets/AISF_WhoWeAre_Photo.jpeg";
import getInvolvedImg1 from "./assets/AISF_GetInvolved.jpeg";
import getInvolvedImg2 from "./assets/AISF_GetInvolved_2.jpg";
import getInvolvedImg3 from "./assets/AISF_GetInvolved_3.jpg";
import getInvolvedImg4 from "./assets/AISF_GetInvolved4.jpg";
import NeuralGlobeBackground from "./components/NeuralGlobeBackground";

// Clean inline social icons
const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

// AISF Official Transparent PNG Logo without any artificial background
const LogoMark = () => (
  <div className="flex items-center justify-center p-0 m-0 leading-none select-none bg-transparent">
    <img
      src={aisfLogoImg}
      alt="AISF - Artificial Intelligence Student Forum"
      className="h-7 sm:h-8 w-auto object-contain bg-transparent block"
      draggable={false}
    />
  </div>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  const navLogoSlotRef = useRef(null);
  const [navSlotPos, setNavSlotPos] = useState({ x: 40, y: 22, width: 115, height: 32 });

  // Update target anchor slot coordinates
  const updatePositions = () => {
    if (navLogoSlotRef.current) {
      const rect = navLogoSlotRef.current.getBoundingClientRect();
      setNavSlotPos({
        x: rect.left,
        y: rect.top,
        width: rect.width || 115,
        height: rect.height || 32,
      });
    }
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    updatePositions();
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          setScrollY(currentScroll);

          // RAM Optimization: Pause video playback when hero is out of view
          if (videoRef.current) {
            if (currentScroll > window.innerHeight * 1.3) {
              if (!videoRef.current.paused) videoRef.current.pause();
            } else {
              if (videoRef.current.paused) videoRef.current.play().catch(() => {});
            }
          }

          const sections = ["home", "about", "pillars", "community", "contact"];
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 250 && rect.bottom >= 250) {
                setActiveSection(section);
                break;
              }
            }
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updatePositions, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(updatePositions, 100);

    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // TEDx-style scroll threshold: complete docking before revealing subsequent content
  const SCROLL_THRESHOLD = 420;
  const progress = Math.min(1, Math.max(0, scrollY / SCROLL_THRESHOLD));

  const isMobile = windowDimensions.width < 768;
  const baseLogoWidth = isMobile ? 100 : 115;

  // Exact 70% viewport width on desktop (and ~82% on mobile)
  const targetHeroWidth = isMobile
    ? windowDimensions.width * 0.82
    : windowDimensions.width * 0.70;
  const heroScale = targetHeroWidth / baseLogoWidth;

  // Initial Hero Stage: DEAD CENTER on both X and Y axis at scrollY = 0
  const heroCenterX = windowDimensions.width / 2;
  const heroCenterY = windowDimensions.height / 2;

  const navSlotCenterX = navSlotPos.x + navSlotPos.width / 2;
  const navSlotCenterY = navSlotPos.y + navSlotPos.height / 2;

  // Interpolated center position & scale
  const currentCenterX = heroCenterX + (navSlotCenterX - heroCenterX) * progress;
  const currentCenterY = heroCenterY + (navSlotCenterY - heroCenterY) * progress;
  const currentScale = heroScale + (1.0 - heroScale) * progress;

  // Navbar fade-in progress (appears as logo approaches the dock)
  const navBgOpacity = Math.max(0, (progress - 0.3) / 0.7);
  const navLinksOpacity = Math.max(0, (progress - 0.5) / 0.5);

  // Content visibility: Only reveal after the logo touches the top (progress >= 0.75)
  const heroContentOpacity = Math.max(0, (progress - 0.75) / 0.25);
  const heroContentTranslateY = (1 - heroContentOpacity) * 50;

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Contact Us", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollDownPastHero = () => {
    window.scrollTo({ top: SCROLL_THRESHOLD + 50, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-[#F8FAFC] font-body selection:bg-[#2563EB] selection:text-white relative overflow-hidden">
      
      {/* 3D Neural Sphere Background Layer */}
      <NeuralGlobeBackground />
      
      {/* ========================================================= */}
      {/* 1. STICKY TOP NAVBAR (Dynamic Glass Pill Container) */}
      {/* ========================================================= */}
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className="pointer-events-auto rounded-full px-3.5 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 transition-all duration-200"
          style={{
            backgroundColor: `rgba(10, 14, 22, ${0.75 * navBgOpacity})`,
            backdropFilter: navBgOpacity > 0.05 ? "blur(18px)" : "none",
            WebkitBackdropFilter: navBgOpacity > 0.05 ? "blur(18px)" : "none",
            borderColor: `rgba(255, 255, 255, ${0.12 * navBgOpacity})`,
            borderWidth: "1px",
            borderStyle: "solid",
            boxShadow:
              navBgOpacity > 0.1
                ? "0 15px 35px -10px rgba(0, 0, 0, 0.7)"
                : "none",
          }}
          aria-label="Main Navigation"
        >
          {/* Target Corner Anchor Slot (Measuring docked position) */}
          <div ref={navLogoSlotRef} className="opacity-0 pointer-events-none inline-flex items-center px-1">
            <LogoMark />
          </div>

          {/* Desktop Nav Links (Fades in around the docked logo) */}
          <div
            className="hidden md:flex items-center gap-1 transition-all duration-200"
            style={{
              opacity: navLinksOpacity,
              transform: `translateX(${(1 - progress) * 15}px)`,
              pointerEvents: navLinksOpacity > 0.5 ? "auto" : "none",
            }}
          >
            {navItems.map((item) => {
              const isContact = item.name === "Contact Us";
              return isContact ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="ml-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full transition-colors active:scale-95 flex items-center gap-1.5"
                >
                  {item.name}
                  <ArrowRight size={13} />
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06] transition-colors"
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06] transition-colors focus:outline-none"
            style={{
              opacity: navLinksOpacity,
              pointerEvents: navLinksOpacity > 0.5 ? "auto" : "none",
            }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* ========================================================= */}
      {/* 2. DYNAMIC BIDIRECTIONAL DOCKING LOGO (Covers 70% Screen & Centered) */}
      {/* ========================================================= */}
      <div
        className="fixed top-0 left-0 z-50 cursor-pointer select-none pointer-events-auto"
        onClick={scrollToTop}
        style={{
          transform: `translate3d(${currentCenterX}px, ${currentCenterY}px, 0) translate(-50%, -50%) scale(${currentScale})`,
          transformOrigin: "center center",
          willChange: "transform",
        }}
        title="AISF - Artificial Intelligence Student Forum"
      >
        <LogoMark />
      </div>

      {/* Mobile Navigation Drawer Dropdown */}
      <div
        className={`fixed top-20 inset-x-4 z-40 md:hidden transition-all duration-300 origin-top ${
          menuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="glass-nav-scrolled rounded-2xl p-4 border border-white/10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  item.name === "Contact Us"
                    ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold"
                    : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06]"
                }`}
              >
                {item.name}
                <ArrowRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. HERO SECTION (Stage 1: Logo Only -> Stage 2: Content Reveal) */}
      {/* ========================================================= */}
      <section
        id="home"
        className="relative min-h-[140vh] w-full flex flex-col items-center overflow-hidden z-10"
      >
        {/* Hero Background Video (Looping continuously with alpha transparency fade) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-80"
          >
            <source src={heroBgVideo} type="video/mp4" />
          </video>
          {/* Subtle Contrast Tint */}
          <div className="absolute inset-0 bg-[#05070A]/20 pointer-events-none" />
        </div>

        {/* Initial Scroll Prompt (Visible only at top of page) */}
        <div
          className="fixed bottom-8 inset-x-0 flex flex-col items-center gap-2 cursor-pointer z-30 transition-opacity duration-300 pointer-events-auto"
          style={{
            opacity: Math.max(0, 1 - progress * 3),
            pointerEvents: progress > 0.2 ? "none" : "auto",
          }}
          onClick={scrollDownPastHero}
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#F8FAFC] font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">Scroll to explore</span>
          <ChevronDown size={20} className="text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.8)] animate-bounce" />
        </div>

        {/* Hero Content (Only reveals after the logo docks at the top) */}
        <div
          className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-[70vh] sm:pt-[75vh] pb-24 transition-all duration-300"
          style={{
            opacity: heroContentOpacity,
            transform: `translateY(${heroContentTranslateY}px)`,
            pointerEvents: heroContentOpacity > 0.5 ? "auto" : "none",
          }}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-pill text-xs sm:text-sm text-[#94A3B8] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="tracking-wide text-xs">Artificial Intelligence Student Forum</span>
          </div>

          {/* Main Headline with Selective Blue Highlight */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F8FAFC] leading-[1.06] sm:leading-[1.03] max-w-4xl">
            By Students, <span className="text-[#3B82F6]">For Students</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-2xl font-normal leading-relaxed">
            A community where every student has the skills, resources, and network to shape the future of AI — one project, one hackathon, one breakthrough at a time.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#about"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-2 active:scale-95 group"
            >
              Explore Our Club
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/events"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-card text-[#F8FAFC] font-medium text-sm hover:border-white/20 transition-colors duration-200 flex items-center justify-center gap-2 active:scale-95"
            >
              <Sparkles size={15} className="text-[#3B82F6]" />
              View Activities
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 w-full max-w-3xl">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">70+</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] uppercase tracking-widest mt-1">Active Members</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">5+</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] uppercase tracking-widest mt-1">Annual Events</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">CSE(AI)</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] uppercase tracking-widest mt-1">Department</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">100%</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] uppercase tracking-widest mt-1">Student Driven</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SECTION 01 — WHO WE ARE & MISSION (Text + Image) */}
      {/* ========================================================= */}
      <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                <span className="text-[#3B82F6]">01</span>
                <span className="w-8 h-[1px] bg-white/20" />
                <span>Who We Are</span>
              </div>

              {/* Headline with selective highlight on "Building" */}
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] tracking-tight leading-[1.12]">
                <span className="text-[#3B82F6]">Building</span> the next generation of builders, thinkers, and makers.
              </h2>

              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
                AISF is the official AI departmental club of VIT Pune. We organize workshops, hackathons, speaker sessions, and research initiatives to foster a culture of innovation and technical excellence.
              </p>

              {/* <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Whether it's building intelligent AI systems, architecting web applications, or designing user-centric interfaces, we prioritize hands-on execution and peer learning above all else.
              </p> */}

              <div className="pt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass-card">
                  <h4 className="font-display font-semibold text-[#F8FAFC] text-base flex items-center gap-2">
                    <Flame size={16} className="text-[#3B82F6]" />
                    Open Collaboration
                  </h4>
                  <p className="text-[#94A3B8] text-xs mt-1.5 leading-normal">
                    Cross-functional teams of developers, designers, and project leads working together on open source ideas.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-card">
                  <h4 className="font-display font-semibold text-[#F8FAFC] text-base flex items-center gap-2">
                    <Compass size={16} className="text-[#3B82F6]" />
                    Career & Mentorship
                  </h4>
                  <p className="text-[#94A3B8] text-xs mt-1.5 leading-normal">
                    Direct access to alumni in top tech companies, mock technical interviews, and portfolio reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual / Custom Cohort Photo with Glassmorphism */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src={whoWeAreImg}
                  alt="AISF Official Cohort & Core Team"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[420px] object-cover object-center transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent opacity-80" />
                
                {/* Floating caption tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-nav border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#F8FAFC]">Code Apex 2.0 Hackathon</div>
                      <div className="text-[11px] text-[#94A3B8]">Vishwakarma Institute of Technology, Pune</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SECTION 02 — WHAT WE DO / CORE PILLARS (Interactive Cards) */}
      {/* ========================================================= */}
      <section id="pillars" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10 bg-[#080B10]/75 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B] mb-3">
              <span className="text-[#3B82F6]">02</span>
              <span className="w-8 h-[1px] bg-white/20" />
              <span>What We Do</span>
            </div>
            {/* Headline with selective highlight on "pillars" */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] tracking-tight">
              Three <span className="text-[#3B82F6]">pillars</span>, one driven community.
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base mt-4">
              Everything we organize is centered around practical skill acquisition, real product delivery, and peer connection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Code2 size={22} />
                </div>
                <div className="text-xs font-mono text-[#3B82F6] mb-2">DOMAIN 01</div>
                <h3 className="font-display font-bold text-xl text-[#F8FAFC] tracking-tight mb-3">
                  Technical Workshops & Sprints
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Regular deep-dive workshops covering Modern Full-Stack Development, Machine Learning, Cloud Architecture, and DevOps. Learn by building functional apps from scratch.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#64748B]">
                <span>Hands-on Sessions</span>
                {/* <span className="font-medium text-[#F8FAFC]">Bi-weekly</span> */}
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Calendar size={22} />
                </div>
                <div className="text-xs font-mono text-[#3B82F6] mb-2">DOMAIN 02</div>
                <h3 className="font-display font-bold text-xl text-[#F8FAFC] tracking-tight mb-3">
                  Hackathons & Competitions
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Flagship campus hackathons, algorithmic coding battles, and UI/UX design challenges with industry judges, cash prizes, and mentorship for top student teams.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#64748B]">
                <span>Flagship Events</span>
                <span className="font-medium text-[#F8FAFC]">Annual & Regional</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Layers size={22} />
                </div>
                <div className="text-xs font-mono text-[#3B82F6] mb-2">DOMAIN 03</div>
                <h3 className="font-display font-bold text-xl text-[#F8FAFC] tracking-tight mb-3">
                  Alumni Guidance sessions
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  We host esteemed people and our alumni who have achieved great positions in the industry for practical guidance and real world skill development of the students.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#64748B]">
                <span>Weekly</span>
                <span className="font-medium text-[#F8FAFC]">Online</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SECTION 03 — GET INVOLVED & GALLERY (Text + Media Grid) */}
      {/* ========================================================= */}
      <section id="community" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10 bg-[#05070A]/75">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Gallery Media Showcase with Real Activity Photos */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 order-2 lg:order-1">
              <div className="space-y-3">
                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] group">
                  <img
                    src={getInvolvedImg1}
                    alt="AISF Drone Bootcamp"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] group">
                  <img
                    src={getInvolvedImg2}
                    alt="Hardware & Drone Control Lab"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] group">
                  <img
                    src={getInvolvedImg3}
                    alt="Keynote Tech Session & Stage Presentation"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] group">
                  <img
                    src={getInvolvedImg4}
                    alt="AISF Campus Team & Community"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Text & Membership Call to Action */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                <span className="text-[#3B82F6]">03</span>
                <span className="w-8 h-[1px] bg-white/20" />
                <span>Get Involved</span>
              </div>

              {/* Headline with selective highlight on "starts" */}
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] tracking-tight leading-[1.12]">
                Your journey into technology <span className="text-[#3B82F6]">starts</span> with people like you.
              </h2>

              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
                We welcome students from all academic disciplines, years, and skill levels. Whether you are writing your first line of Python, designing brand systems, or organizing large student conferences, there is a dedicated space for you.
              </p>

              {/* <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Recruitment cycles and open orientation sessions happen at the beginning of each semester. Join our Discord community or drop by our weekly open workspace sessions.
              </p> */}

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="/events"
                  className="px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-colors flex items-center gap-2 active:scale-95"
                >
                  Explore our past events
                  <ArrowRight size={15} />
                </a>
                <a
                  href="/team"
                  className="px-6 py-3 rounded-full glass-card text-[#F8FAFC] font-medium text-sm hover:border-white/20 transition-colors flex items-center gap-2"
                >
                  <Users size={15} className="text-[#3B82F6]" />
                  Meet the Team
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FOOTER (50% Transparent Glassmorphic Footer) */}
      {/* ========================================================= */}
      <footer
        id="contact"
        className="relative border-t border-white/10 pt-16 pb-12 px-6 sm:px-12 lg:px-20 z-10"
        style={{
          backgroundColor: "rgba(5, 7, 10, 0.5)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
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
                  <span>Building 3, VIT Bibwewadi, Pune, Maharashtra, India</span>
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
                  <span className="text-[#F8FAFC] font-medium">President - Samarth Mahajan: </span>
                  <a href="tel:+918305261866" className="hover:text-[#3B82F6] transition-colors">
                    +91-8305261866
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Vice President - Vedant Nehe </span>
                  <a href="tel:+918468812201" className="hover:text-[#3B82F6] transition-colors">
                    +91-9767559932
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Ruturaj Bhome: </span>
                  <a href="tel:+917028044996" className="hover:text-[#3B82F6] transition-colors">
                    +91-8468812201
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">PR - Pratham Shelke </span>
                  <a href="tel:+918767852276" className="hover:text-[#3B82F6] transition-colors">
                    +91-8767852276
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Technical Secretary- Shreya Ranjan </span>
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
