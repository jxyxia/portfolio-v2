import Link from "next/link";
import FadeUp from "./FadeUp";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[72px] border-b border-border">
      <FadeUp>
        <p className="font-mono text-[11px] text-ink3 tracking-[0.1em] uppercase mb-8">
          02 — Projects
        </p>
      </FadeUp>

      <FadeUp delay={0.05}>
        <div
          className="grid grid-cols-2 gap-px"
          style={{ background: "var(--border)" }}
        >
          {/* Featured */}
          {featured && (
            <div className="col-span-2 bg-bg hover:bg-surface transition-colors duration-200 p-7 relative overflow-hidden group">
              <p className="font-mono text-[10px] text-ink3 tracking-[0.08em] uppercase mb-4">
                {featured.tag}
              </p>
              <Link
                href={featured.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-serif text-[22px] leading-[1.2] mb-2.5 hover:text-ink2 transition-colors cursor-pointer">
                  {featured.title}
                </h3>
              </Link>
              <p className="text-[13px] text-ink2 leading-[1.7] mb-5 max-w-[540px]">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] text-ink3 border border-border px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-ink inline-flex items-center gap-1 mt-5 hover:text-ink2 transition-colors"
              >
                View on GitHub →
              </Link>
              <span className="font-mono text-[56px] text-border group-hover:text-[#2a2a2a] transition-colors absolute bottom-3 right-5 leading-none select-none">
                {featured.id}
              </span>
            </div>
          )}

          {/* Rest */}
          {rest.map((p, i) => (
            <div
              key={p.id}
              className="bg-bg hover:bg-surface transition-colors duration-200 p-7 relative overflow-hidden group"
            >
              <p className="font-mono text-[10px] text-ink3 tracking-[0.08em] uppercase mb-4">
                {p.tag}
              </p>
              <Link
                href={p.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-serif text-[22px] leading-[1.2] mb-2.5 hover:text-ink2 transition-colors cursor-pointer">
                  {p.title}
                </h3>
              </Link>
              <p className="text-[13px] text-ink2 leading-[1.7] mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] text-ink3 border border-border px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[56px] text-border group-hover:text-[#2a2a2a] transition-colors absolute bottom-3 right-5 leading-none select-none">
                {p.id}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
