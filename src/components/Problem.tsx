const problems = [
  {
    icon: "📊",
    title: "The data exists.",
    body: "Spreadsheets, exports, sales logs. All of it. And none of it tells you what to do next.",
  },
  {
    icon: "⏱",
    title: "By the time you analyze it — it's too late.",
    body: "Manual analysis takes hours. The window to act closes before the pivot table is done.",
  },
  {
    icon: "📉",
    title: "BI gives you charts. Not answers.",
    body: "Nobody needs more charts. They need to know what's broken, why it matters, and what to fix.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400/70 mb-4">
            The problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            You have data. You still don&apos;t know what to do.
          </h2>
          <p className="text-lg text-white/45 leading-relaxed">
            Most teams drown in spreadsheets and still ship the wrong thing. The data&apos;s there — the answer isn&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-white/[0.12] rounded-2xl p-6 transition-all duration-300"
            >
              <div className="text-3xl mb-5">{p.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
