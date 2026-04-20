export default function ReportMock() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Reflection blur below */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-4">
            <div className="max-w-xs mx-auto h-5 bg-white/[0.05] rounded-md flex items-center justify-center">
              <span className="text-[10px] text-white/30">datapulse.io / reports / week-16</span>
            </div>
          </div>
        </div>

        {/* Report header */}
        <div className="px-6 pt-5 pb-4 border-b border-white/[0.05]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] text-white/30 uppercase tracking-widest mb-1">Weekly Business Brief</p>
              <h2 className="text-xl font-semibold text-white">Acme Store — Week 16, 2025</h2>
              <p className="text-sm text-white/40 mt-0.5">Generated from sales_data_apr.xlsx · 3,842 rows · 30s</p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
          {/* Left col */}
          <div className="p-5 space-y-5">
            {/* KPIs */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3">KPI Summary</p>
              <div className="space-y-3">
                <KPIRow label="Revenue" value="$84,320" delta="+12.4%" positive />
                <KPIRow label="Orders" value="1,204" delta="+8.1%" positive />
                <KPIRow label="Avg. Order Value" value="$70.03" delta="-3.2%" positive={false} />
                <KPIRow label="Refund Rate" value="4.1%" delta="+0.8pp" positive={false} />
              </div>
            </div>

            {/* Anomaly */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3">Anomaly Detected</p>
              <div className="bg-amber-500/[0.07] border border-amber-500/20 rounded-xl p-3.5">
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 text-base mt-0.5">⚠</span>
                  <div>
                    <p className="text-sm font-medium text-white/90">Unusual spike — Friday 14th</p>
                    <p className="text-xs text-white/45 mt-1 leading-relaxed">
                      Orders jumped 3.4× above the weekly baseline between 6–9 PM. Likely a flash sale or influencer mention. Verify source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right col */}
          <div className="p-5 space-y-5">
            {/* Risks */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3">Risks</p>
              <div className="space-y-2.5">
                <RiskItem
                  label="Refund rate trending up"
                  detail="3 consecutive weeks. Review product SKU-4821."
                  level="high"
                />
                <RiskItem
                  label="Mobile checkout drop-off"
                  detail="Conversion fell from 3.8% → 2.6% on iOS."
                  level="medium"
                />
              </div>
            </div>

            {/* Opportunities */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3">Opportunities</p>
              <div className="space-y-2.5">
                <OpportunityItem
                  label="Repeat buyers up 22%"
                  detail="Loyalty cohort driving 38% of revenue. Consider tier upgrade."
                />
                <OpportunityItem
                  label="Weekend demand underserved"
                  detail="Saturday has highest basket size but lowest ad spend."
                />
              </div>
            </div>

            {/* Data quality */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3">Data Quality</p>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-3 flex items-center gap-3">
                <div className="text-lg">🔍</div>
                <div>
                  <p className="text-xs text-white/80 font-medium">14 rows with missing region data</p>
                  <p className="text-xs text-white/35 mt-0.5">Rows 192–205. Excluded from geo breakdown.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom shimmer bar */}
        <div className="h-1 shimmer-line" />
      </div>
    </div>
  );
}

function KPIRow({
  label,
  value,
  delta,
  positive,
}: {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-white/50">{label}</span>
      <div className="flex items-center gap-2.5">
        <span className="text-sm font-semibold text-white">{value}</span>
        <span
          className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
            positive
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}

function RiskItem({
  label,
  detail,
  level,
}: {
  label: string;
  detail: string;
  level: "high" | "medium";
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div
        className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
          level === "high" ? "bg-red-400" : "bg-amber-400"
        }`}
      />
      <div>
        <p className="text-sm text-white/80 font-medium">{label}</p>
        <p className="text-xs text-white/40 mt-0.5">{detail}</p>
      </div>
    </div>
  );
}

function OpportunityItem({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-indigo-400" />
      <div>
        <p className="text-sm text-white/80 font-medium">{label}</p>
        <p className="text-xs text-white/40 mt-0.5">{detail}</p>
      </div>
    </div>
  );
}
