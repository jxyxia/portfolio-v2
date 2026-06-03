"use client";

import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 pb-0 gap-4 sm:gap-0">
      <span className="font-mono text-[10px] md:text-[11px] text-ink3">
        © 2026 {SITE.name} — {SITE.domain}
      </span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-mono text-[10px] md:text-[11px] text-ink3 hover:text-ink transition-colors cursor-pointer"
      >
        Back to top ↑
      </button>
    </footer>
  );
}
