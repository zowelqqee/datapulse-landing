import ReportMock from "./ReportMock";

export default function ExampleOutput() {
  return (
    <section id="example" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400/70 mb-4">
            Example output
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            This is what you get.
          </h2>
          <p className="text-lg text-white/45 max-w-lg mx-auto">
            Not a dashboard. A brief. Written, clear, and ready to act on.
          </p>
        </div>

        <ReportMock />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "KPI changes", desc: "vs. prior week & month" },
            { label: "Anomaly flags", desc: "with likely cause" },
            { label: "Risks & actions", desc: "prioritized by impact" },
            { label: "Data quality", desc: "missing, broken, duplicates" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 text-center"
            >
              <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
              <p className="text-xs text-white/35">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
