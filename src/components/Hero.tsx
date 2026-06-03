import Link from "next/link";
import FadeUp from "./FadeUp";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section className="py-20 border-b border-border">
      <FadeUp delay={0.05}>
        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ink3 border border-border px-3 py-1.5 mb-8 tracking-[0.04em]">
          <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
          open to internship — 2026
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h1 className="font-serif text-[clamp(42px,7vw,68px)] leading-[1.15] tracking-[-0.02em] mb-6">
          Building things
          <br />
          that <em className="italic text-ink2">actually</em>
          <br />
          work.
        </h1>
      </FadeUp>

      <FadeUp delay={0.15}>
        <p className="text-[15px] text-ink2 leading-[1.7] max-w-[480px] mb-10">
          I&apos;m Jayesh - a Computer Engineering student at{" "}
          {SITE.university}. I build web apps, explore cloud infrastructure,
          and occasionally obsess over clean design.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex gap-3">
          <Link
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-bg px-5 py-2.5 text-[13px] font-medium tracking-[0.02em] hover:opacity-80 transition-opacity"
          >
            GitHub ↗
          </Link>
          <Link
            href="#projects"
            className="bg-transparent text-ink px-5 py-2.5 text-[13px] font-medium tracking-[0.02em] border border-border hover:border-ink2 transition-colors"
          >
            See Projects
          </Link>
        </div>
      </FadeUp>

      <FadeUp delay={0.25}>
        <div className="flex gap-10 mt-14">
          {[
            { num: "2+", label: "Years Building" },
            { num: "3+", label: "Projects Shipped" },
            { num: "Mumbai", label: "Based In" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-mono text-[22px] text-ink">{stat.num}</span>
              <span className="text-[11px] text-ink3 tracking-[0.05em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
