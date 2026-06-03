"use client";

import Link from "next/link";
import FadeUp from "./FadeUp";
import { SITE } from "@/lib/data";

const LINKS = [
  { label: "GitHub — jxyxia", href: SITE.github },
  { label: "LinkedIn — jayesh0735", href: SITE.linkedin },
  { label: SITE.email, href: `mailto:${SITE.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[72px]">
      <FadeUp>
        <p className="font-mono text-[11px] text-ink3 tracking-[0.1em] uppercase mb-12">
          05 — Contact
        </p>
      </FadeUp>

      <div className="max-w-[600px]">
        <FadeUp delay={0.05}>
          <h2 className="font-serif text-[48px] leading-[1.15] mb-6">
            Let&apos;s work
            <br />
            <em className="italic text-ink2">together.</em>
          </h2>
          <p className="text-[14px] text-ink2 leading-[1.8] mb-10">
            I&apos;m actively looking for internship opportunities in software
            engineering, cloud, or full-stack development. If you think I&apos;d
            be a good fit, I&apos;d love to hear from you.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div
            className="flex flex-col gap-px"
            style={{ background: "var(--border)" }}
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 bg-bg hover:bg-surface transition-colors text-[13px] text-ink group"
              >
                <span>{l.label}</span>
                <span className="font-mono text-[11px] text-ink3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
