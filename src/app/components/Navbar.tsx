"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/40 backdrop-blur-md shadow-[0_0_30px_rgba(184,144,98,0.05)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-white/90 group cursor-pointer">
          THE MAG COMPANY
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-white border-b-2 border-[#ebbf8d] pb-1 text-[10px] uppercase tracking-widest font-bold" href="#features">Features</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold" href="#mback">MBack</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold" href="#specs">Specs</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold" href="#roadmap">Roadmap</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold" href="#about">About</a>
        </div>
        <button className="hidden md:block bg-[#ebbf8d] text-[#452b05] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 active:scale-95">
          Back This Project
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-md border-t border-white/5 px-8 py-6 flex flex-col gap-4">
          <a href="#features" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-white text-[10px] uppercase tracking-widest font-bold">Features</a>
          <a href="#mback" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-white text-[10px] uppercase tracking-widest font-bold">MBack</a>
          <a href="#specs" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-white text-[10px] uppercase tracking-widest font-bold">Specs</a>
          <a href="#roadmap" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-white text-[10px] uppercase tracking-widest font-bold">Roadmap</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-white text-[10px] uppercase tracking-widest font-bold">About</a>
          <button className="bg-[#ebbf8d] text-[#452b05] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mt-2">
            Back This Project
          </button>
        </div>
      )}
    </nav>
  );
}
