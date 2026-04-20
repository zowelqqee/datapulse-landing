import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="DataPulse" width={24} height={24} />
          <span className="text-sm font-semibold text-white/70">DataPulse</span>
        </div>

        <p className="text-xs text-white/25 text-center">
          Turn messy data into decision-ready reports in seconds.
        </p>

        <div className="flex items-center gap-6 text-xs text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          <span>© 2025 DataPulse</span>
        </div>
      </div>
    </footer>
  );
}
