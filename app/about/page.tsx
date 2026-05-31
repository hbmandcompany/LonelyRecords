import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/anim/Reveal";
import DrippyDivider from "@/components/decorative/DrippyDivider";

export const metadata: Metadata = {
  title: "About — Lonely Records",
  description: "The story and mission behind Lonely Records.",
};

function IconHeart() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 41C10 31 6 22 11 16c3-3.6 9-3.4 13 1 4-4.4 10-4.6 13-1 5 6 1 15-13 25Z" />
    </svg>
  );
}
function IconVinyl() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="24" cy="24" r="19" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 5l5.6 11.8L42 18.4l-9 9 2.2 12.6L24 34.2 12.8 40l2.2-12.6-9-9 12.4-1.6Z" />
    </svg>
  );
}

const MISSION = [
  {
    icon: <IconHeart />,
    title: "Artist First",
    body: "Fair splits, creative freedom, no clauses written in tiny print. The artist keeps the masters and the soul.",
  },
  {
    icon: <IconVinyl />,
    title: "Physical Matters",
    body: "Every release gets pressed — vinyl, cassette, a zine. Music you can hold beats a file you forget.",
  },
  {
    icon: <IconStar />,
    title: "No Algorithms",
    body: "We sign songs because they move us, not because a dashboard told us they'd chart. Taste over metrics.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — The Story */}
      <section className="relative overflow-hidden bg-paper px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-44">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_1fr] md:items-start">
          <Reveal>
            <h1 className="font-display text-5xl leading-[0.9] tracking-wide text-ink md:text-7xl">
              FOR THE LONELY ONES.
            </h1>
            <div className="mt-8 space-y-5 font-mono text-sm leading-relaxed text-ink/80 md:text-base">
              <p>
                Lonely Records started in 2025 in a basement with water-stained
                ceilings, a borrowed four-track, and far too much coffee. We
                were tired of music that sounded like it was made by a
                committee, so we decided to make a home for the songs that
                didn&apos;t fit anywhere else.
              </p>
              <p>
                The name has a double meaning, and we&apos;ll let you decide
                which one you like. Lonely as in introspective — the 2am songs,
                the ones that understand you. And lonely as in singular: there
                is nobody else doing exactly this.
              </p>
              <p>
                We&apos;re small on purpose. Every artist gets our full
                attention, every release gets pressed with care, and every fan
                gets the real thing. That&apos;s the whole plan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center md:justify-end">
            <Badge
              rotate={-12}
              variant="star"
              className="px-8 py-6 text-2xl md:text-3xl"
            >
              EST. 2025
            </Badge>
          </Reveal>
        </div>
      </section>

      <DrippyDivider color="var(--smoke)" />

      {/* Section 2 — The Mission */}
      <section className="bg-smoke px-6 py-24 text-paper md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide text-volt md:text-6xl">
              What We Stand For
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {MISSION.map((m, i) => (
              <Reveal key={m.title} index={i}>
                <div className="text-pink">{m.icon}</div>
                <h3 className="mt-5 font-sub text-2xl text-paper">{m.title}</h3>
                <p className="mt-3 font-mono text-sm leading-relaxed text-paper/75">
                  {m.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
