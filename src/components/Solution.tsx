export default function Solution() {
  return (
    <section className="py-24 px-6 border-y border-white/[0.05] bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400/70 mb-4">
              The solution
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              One file in.
              <br />
              <span className="text-white/40">One clear report out.</span>
            </h2>
            <p className="text-lg text-white/45 leading-relaxed mb-8">
              DataPulse reads your spreadsheet, understands your business context, and delivers a written brief — not a chart. In about 30 seconds.
            </p>
          </div>

          {/* Right: steps */}
          <div className="space-y-3">
            <Step
              number="01"
              title="Upload your spreadsheet"
              body="Excel, CSV, or connect Google Sheets. No formatting required."
            />
            <Step
              number="02"
              title="AI reads and analyzes"
              body="DataPulse checks every row — KPIs, trends, anomalies, data quality issues."
            />
            <Step
              number="03"
              title="Get your brief"
              body="A clear, written report with numbers, context, risks, and actions. Ready to share."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-5 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.12] transition-all duration-200 group">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
        <span className="text-xs font-bold text-indigo-400">{number}</span>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/40 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
