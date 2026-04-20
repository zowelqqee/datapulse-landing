"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-indigo-400" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-white">DataPulse</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
          <a href="#problem" className="hover:text-white/80 transition-colors">Problem</a>
          <a href="#how-it-works" className="hover:text-white/80 transition-colors">How it works</a>
          <a href="#example" className="hover:text-white/80 transition-colors">Example</a>
        </div>

      </div>
    </nav>
  );
}
