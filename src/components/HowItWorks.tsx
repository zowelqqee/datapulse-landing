const steps = [
  {
    step: "1",
    icon: "📎",
    title: "Upload your data",
    body: "Drop in an Excel file, CSV, or connect Google Sheets directly. No cleaning, no formatting required.",
    detail: "Supports .xlsx · .csv · Google Sheets",
  },
  {
    step: "2",
    icon: "⚡",
    title: "AI processes it",
    body: "DataPulse runs analysis across every row — trends, outliers, KPI shifts, and data gaps.",
    detail: "Typical analysis: ~30 seconds",
  },
  {
    step: "3",
    icon: "📋",
    title: "Get your brief",
    body: "Receive a structured written report with context, risks, and recommended actions. Ready to share.",
    detail: "PDF · Markdown · Shareable link",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-white/[0.01] border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400/70 mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Three steps. Thirty seconds.
          </h2>
        </div>

        {/* Steps with connector */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Icon circle */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#111] border border-white/[0.1] flex items-center justify-center text-3xl mb-6 group-hover:border-indigo-500/30 transition-colors duration-300">
                {s.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 border-2 border-[#0a0a0a] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">{s.step}</span>
                </div>
              </div>

              <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-3 max-w-xs">{s.body}</p>
              <span className="text-[11px] text-indigo-400/60 font-medium">{s.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
