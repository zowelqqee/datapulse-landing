"use client";

import { useState } from "react";

export default function CTABlock() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="cta" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-indigo-600/[0.12] to-violet-600/[0.06] border border-indigo-500/20 rounded-3xl px-8 md:px-16 py-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-500/10 blur-[80px] rounded-full" />
          </div>

          <div className="relative z-10 text-center max-w-xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400/70 mb-4">
              Get started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Send a file.<br />Get your report in 30 seconds.
            </h2>
            <p className="text-lg text-white/45 mb-10">
              Drop your email and we&apos;ll send you a real example — built from actual data, not a demo.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-2xl px-6 py-5 flex items-center justify-center gap-3">
                <span className="text-emerald-400 text-xl">✓</span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">You&apos;re on the list.</p>
                  <p className="text-sm text-white/45">We&apos;ll send your sample report shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors duration-200 whitespace-nowrap"
                >
                  Get my report →
                </button>
              </form>
            )}

            <p className="text-xs text-white/25 mt-5">
              No credit card. No dashboard to set up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
