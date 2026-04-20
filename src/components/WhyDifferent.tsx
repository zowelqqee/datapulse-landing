const differentiators = [
  {
    icon: "🚫",
    title: "No dashboards",
    body: "Dashboards need someone to interpret them. DataPulse gives you the interpretation — ready to read, ready to act on.",
  },
  {
    icon: "⚙️",
    title: "Zero setup",
    body: "No data warehouse. No BI tool. No analyst. Upload a file, get a report. That's the entire workflow.",
  },
  {
    icon: "🎯",
    title: "Decision-focused",
    body: "Every section of the report answers a question: What changed? Why does it matter? What should we do?",
  },
  {
    icon: "📦",
    title: "Works with what you have",
    body: "Already using Excel or Sheets? Good. No migration needed. DataPulse reads your existing files.",
  },
  {
    icon: "🔒",
    title: "Private by default",
    body: "Your data is used only to generate your report. It's not stored, shared, or used for training.",
  },
  {
    icon: "⏱",
    title: "Weekly rhythm",
    body: "Set a weekly schedule. Every Monday morning, your brief is waiting — no manual work required.",
  },
];

export default function WhyDifferent() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400/70 mb-4">
            Why it&apos;s different
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            BI gives you charts.
            <br />
            <span className="gradient-text">DataPulse gives you decisions.</span>
          </h2>
          <p className="text-lg text-white/45 leading-relaxed">
            Not another tool to configure. The thing you use instead of all those tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] hover:border-white/[0.12] rounded-2xl p-6 transition-all duration-300"
            >
              <div className="text-2xl mb-4">{d.icon}</div>
              <h3 className="text-sm font-semibold text-white mb-2">{d.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Comparison strip */}
        <div className="mt-14 bg-white/[0.02] border border-white/[0.07] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 text-center text-xs font-semibold uppercase tracking-widest border-b border-white/[0.07]">
            <div className="py-3 text-white/30">Feature</div>
            <div className="py-3 text-white/30 border-x border-white/[0.07]">BI Tools</div>
            <div className="py-3 text-indigo-400">DataPulse</div>
          </div>
          {[
            ["Setup time", "Days to weeks", "0 minutes"],
            ["Requires analyst", "Yes", "No"],
            ["Output", "Charts", "Decisions"],
            ["Works with Excel", "Usually not", "Yes, always"],
            ["Weekly automation", "Manual config", "Built-in"],
          ].map(([feat, bi, dp], i) => (
            <div
              key={i}
              className="grid grid-cols-3 text-center text-sm border-b last:border-0 border-white/[0.05]"
            >
              <div className="py-3.5 px-4 text-white/50">{feat}</div>
              <div className="py-3.5 px-4 text-white/30 border-x border-white/[0.05]">{bi}</div>
              <div className="py-3.5 px-4 text-indigo-300 font-medium">{dp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
