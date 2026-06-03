"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 md:py-6 border-b border-border mb-0">
      <span className="font-mono text-[12px] md:text-[13px] text-ink truncate">{SITE.domain}</span>
      <div className="flex gap-3 md:gap-6 text-xs md:text-sm">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[11px] md:text-[13px] text-ink3 hover:text-ink transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
