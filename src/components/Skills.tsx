import FadeUp from "./FadeUp";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-[72px] border-b border-border">
      <FadeUp>
        <p className="font-mono text-[11px] text-ink3 tracking-[0.1em] uppercase mb-6 md:mb-8">
          03 — Skills
        </p>
      </FadeUp>

      <FadeUp delay={0.05}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px"
          style={{ background: "var(--border)" }}
        >
          {SKILLS.map((group) => (
            <div key={group.group} className="bg-bg p-4 md:p-6">
              <p className="font-mono text-[10px] md:text-[11px] text-ink3 tracking-[0.08em] uppercase mb-3">
                {group.group}
              </p>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[12px] md:text-[13px] text-ink2 flex items-center gap-2"
                  >
                    <span className="w-[3px] h-[3px] rounded-full bg-ink3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
