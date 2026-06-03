import FadeUp from "./FadeUp";
import { SITE } from "@/lib/data";

const DETAILS = [
  { key: "Degree", val: SITE.degree },
  { key: "University", val: SITE.university },
  { key: "Semester", val: SITE.semester },
  { key: "Graduation", val: SITE.graduation },
  { key: "Status", val: SITE.status },
];

export default function About() {
  return (
    <section id="about" className="py-[72px] border-b border-border">
      <FadeUp>
        <p className="font-mono text-[11px] text-ink3 tracking-[0.1em] uppercase mb-8">
          01 — About
        </p>
      </FadeUp>

      <div className="grid grid-cols-2 gap-12 items-start">
        <FadeUp delay={0.05}>
          <div className="text-[15px] text-ink2 leading-[2] space-y-6 pb-4">
            <p>
              I&apos;m a third-year Computer Engineering student at the
              University of Mumbai, graduating August 2027. I like building things on the internet, writing code that usually works, and obsessing over the details that make products feel right.
            </p>
            <p>
              I spend a lot of time building side projects and chasing ideas. These days, I'm exploring AI, machine learning, backend systems, and cloud infrastructure while learning from great engineers.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col">
            {DETAILS.map((d) => (
              <div
                key={d.key}
                className="flex justify-between items-baseline py-3 border-b border-border"
              >
                <span className="text-[11px] text-ink3 tracking-[0.06em] uppercase">
                  {d.key}
                </span>
                <span className="font-mono text-[13px] text-ink">{d.val}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
