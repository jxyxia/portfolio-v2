import Link from "next/link";
import FadeUp from "./FadeUp";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-12 md:py-[72px] border-b border-border">
      <FadeUp>
        <p className="font-mono text-[11px] text-ink3 tracking-[0.1em] uppercase mb-6 md:mb-8">
          02 — Projects
        </p>
      </FadeUp>

      <FadeUp delay={0.05}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "var(--border)" }}
        >
          {/* Featured */}
          {featured && (
            <div className="col-span-1 md:col-span-2 bg-bg hover:bg-surface transition-colors duration-200 p-4 md:p-7 relative overflow-hidden group">
              <p className="font-mono text-[9px] md:text-[10px] text-ink3 tracking-[0.08em] uppercase mb-3 md:mb-4">
                {featured.tag}
              </p>
              <Link
                href={featured.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-serif text-lg md:text-[22px] leading-[1.2] mb-2 md:mb-2.5 hover:text-ink2 transition-colors cursor-pointer">
                  {featured.title}
                </h3>
              </Link>
              <p className="text-[12px] md:text-[13px] text-ink2 leading-[1.7] mb-4 md:mb-5 max-w-[540px]">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[8px] md:text-[10px] text-ink3 border border-border px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] md:text-[11px] text-ink inline-flex items-center gap-1 mt-4 md:mt-5 hover:text-ink2 transition-colors"
              >
                View on GitHub →
              </Link>
              <span className="font-mono text-4xl md:text-[56px] text-border group-hover:text-[#2a2a2a] transition-colors absolute bottom-2 right-3 md:bottom-3 md:right-5 leading-none select-none">
                {featured.id}
              </span>
            </div>
          )}

          {/* Rest */}
          {rest.map((p, i) => (
            <div
              key={p.id}
              className="bg-bg hover:bg-surface transition-colors duration-200 p-4 md:p-7 relative overflow-hidden group"
            >
              <p className="font-mono text-[9px] md:text-[10px] text-ink3 tracking-[0.08em] uppercase mb-3 md:mb-4">
                {p.tag}
              </p>
              <Link
                href={p.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-serif text-lg md:text-[22px] leading-[1.2] mb-2 md:mb-2.5 hover:text-ink2 transition-colors cursor-pointer">
                  {p.title}
                </h3>
              </Link>
              <p className="text-[12px] md:text-[13px] text-ink2 leading-[1.7] mb-4 md:mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[8px] md:text-[10px] text-ink3 border border-border px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="font-mono text-4xl md:text-[56px] text-border group-hover:text-[#2a2a2a] transition-colors absolute bottom-2 right-3 md:bottom-3 md:right-5 leading-none select-none">
                {p.id}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
