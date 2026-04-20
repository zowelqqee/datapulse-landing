"use client";

import ReportMock from "./ReportMock";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/[0.07] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-600/[0.05] blur-[100px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] rounded-full px-4 py-1.5 text-xs text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Used by teams to replace manual reporting in Excel
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-bold tracking-tight leading-[1.08]">
            <span className="text-white">You have data.</span>
            <br />
            <span className="gradient-text">You still don&apos;t know</span>
            <br />
            <span className="text-white">what to do.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-200 text-center text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-4 leading-relaxed">
          Upload a spreadsheet. Get a written brief — KPIs, anomalies, risks, next steps.
          In 30 seconds. No analyst, no setup.
        </p>

        {/* Micro social proof */}
        <p className="animate-fade-in-up delay-250 text-center text-sm text-white/30 mb-10">
          &ldquo;Reduced weekly reporting from 4 hours to 2 minutes&rdquo;
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
          <a
            href="#example"
            className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200"
          >
            See example output
          </a>
        </div>

        {/* Report mock */}
        <div className="animate-fade-in-up delay-500">
          <ReportMock />
        </div>
      </div>
    </section>
  );
}
