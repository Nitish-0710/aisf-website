import React from "react";
import { ArrowLeft, Crown } from "lucide-react";
import DoomsdayGlobe from "../components/vca3/DoomsdayGlobe";
import aisfLogoImg from "../assets/AISF_Logo_NoBG.png";
import "../vca3.css";

export default function Vca3() {
  return (
    <div className="vca3-page min-h-screen relative flex flex-col justify-between text-[#f8fafc] overflow-hidden">
      {/* 3D Emerald Incursion Background (#00643D) */}
      <DoomsdayGlobe />

      {/* Subtle Scanlines Overlay */}
      <div className="fixed inset-0 doomsday-scanlines z-[1] pointer-events-none opacity-30" />

      {/* Top Simple Navigation */}
      <header className="relative z-10 w-full px-6 sm:px-12 py-6 flex items-center justify-between">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(4,16,10,0.85)] border border-[#00643D]/40 hover:border-[#00643D] text-xs font-mono text-[#cbd5e1] hover:text-[#008751] transition-all backdrop-blur-md"
        >
          <ArrowLeft size={14} />
          <span>Back to AISF</span>
        </a>

        <div className="flex items-center gap-2">
          <img src={aisfLogoImg} alt="AISF Logo" className="h-7 w-auto object-contain" />
        </div>
      </header>

      {/* Center Coming Soon Hero */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-12 max-w-4xl mx-auto">
        {/* Doom Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00643D]/25 border border-[#00643D]/70 text-[#00c878] text-xs font-mono tracking-widest uppercase mb-6 animate-pulse">
          <Crown size={14} className="text-[#fbbf24]" />
          <span>AISF PRESENTS // PROTOCOL VCA 3.0</span>
        </div>

        {/* Main Headings */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-[0.95]">
          CODE APEX <span className="text-[#00a86b] text-glow-emerald">3.0</span>
        </h1>

        {/* Simple Coming Soon Text */}
        <div className="mt-8 px-8 py-4 rounded-2xl bg-[rgba(4,16,10,0.9)] border border-[#00643D]/60 shadow-[0_0_35px_rgba(0,100,61,0.5)] backdrop-blur-xl">
          <span className="font-display font-black text-2xl sm:text-4xl text-white tracking-widest uppercase">
            WE ARE <span className="text-[#00c878] text-glow-emerald">COMING SOON</span>
          </span>
        </div>

        <p className="mt-6 text-sm sm:text-base text-[#94a3b8] max-w-md font-normal leading-relaxed">
          The multiverse is shifting. Prepare for the incursion. All hope lies in Doom.
        </p>

        {/* Action Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            className="px-7 py-3.5 rounded-full bg-[#00643D] hover:bg-[#004d2e] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 shadow-[0_0_20px_rgba(0,100,61,0.5)] border border-[#008751]/30"
          >
            Explore AISF Club
          </a>
          <a
            href="/events"
            className="px-7 py-3.5 rounded-full bg-[rgba(4,16,10,0.85)] border border-[#00643D]/40 hover:border-[#00643D] text-white text-xs sm:text-sm font-medium transition-all"
          >
            View Past Events
          </a>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="relative z-10 w-full py-6 text-center text-xs font-mono text-[#64748b] border-t border-[#00643D]/20">
        <p>© 2026 Artificial Intelligence Student Forum (AISF) — VIT Pune</p>
      </footer>
    </div>
  );
}
