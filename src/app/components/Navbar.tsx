"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-foreground">THE MAG</span>
          <span className="text-accent"> COMPANY</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#mback" className="hover:text-foreground transition-colors">
            MBack
          </a>
          <a href="#specs" className="hover:text-foreground transition-colors">
            Specs
          </a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">
            Roadmap
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a
            href="#hero"
            className="bg-accent text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent-light transition-colors"
          >
            Back This Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
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
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-card-border px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#features" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-foreground">Features</a>
          <a href="#mback" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-foreground">MBack</a>
          <a href="#specs" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-foreground">Specs</a>
          <a href="#roadmap" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-foreground">Roadmap</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-foreground">About</a>
          <a href="#hero" onClick={() => setMobileOpen(false)} className="bg-accent text-black px-5 py-2 rounded-full text-sm font-semibold text-center">
            Back This Project
          </a>
        </div>
      )}
    </nav>
  );
}
