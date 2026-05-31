import Reveal from "@/components/anim/Reveal";
import Badge from "@/components/ui/Badge";

function ComingSoonArt() {
  return (
    <svg
      viewBox="0 0 480 360"
      aria-hidden
      className="mx-auto h-auto w-full max-w-md text-pink"
      fill="none"
    >
      {/* Outer frame */}
      <rect
        x="24"
        y="24"
        width="432"
        height="312"
        rx="24"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />
      {/* Vinyl record */}
      <circle cx="240" cy="180" r="88" stroke="currentColor" strokeWidth="2" />
      <circle cx="240" cy="180" r="28" stroke="currentColor" strokeWidth="2" />
      <circle cx="240" cy="180" r="6" fill="currentColor" />
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1="240"
          y1="180"
          x2={240 + Math.cos((deg * Math.PI) / 180) * 88}
          y2={180 + Math.sin((deg * Math.PI) / 180) * 88}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.25"
        />
      ))}
      {/* Wave lines — sound / anticipation */}
      <path
        d="M 60 280 Q 120 250, 180 280 T 300 280 T 420 280"
        stroke="var(--violet)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 80 300 Q 140 270, 200 300 T 320 300 T 400 300"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Corner accents */}
      <path d="M 48 48 L 48 88 M 48 48 L 88 48" stroke="var(--volt)" strokeWidth="2" />
      <path d="M 432 48 L 432 88 M 432 48 L 392 48" stroke="var(--volt)" strokeWidth="2" />
      <path d="M 48 312 L 48 272 M 48 312 L 88 312" stroke="var(--volt)" strokeWidth="2" />
      <path d="M 432 312 L 432 272 M 432 312 L 392 312" stroke="var(--volt)" strokeWidth="2" />
    </svg>
  );
}

export default function ComingSoon() {
  return (
    <section className="relative overflow-hidden bg-paper px-6 py-24 md:px-12 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 haze-red opacity-40" />
      <div aria-hidden className="pointer-events-none absolute inset-0 haze-purple opacity-30" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <Badge rotate={-3} className="mb-8">
            In Progress
          </Badge>
        </Reveal>

        <Reveal delay={0.05}>
          <ComingSoonArt />
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="rage-glow mt-10 font-display tracking-[0.1em] text-ghost"
            style={{ fontSize: "clamp(48px, 10vw, 96px)", lineHeight: 0.9 }}
          >
            COMING SOON
          </h2>
          <p className="mx-auto mt-6 max-w-md font-mono text-sm leading-relaxed text-ink/55">
            Artists, releases, and catalog previews are on the way. Something
            worth the wait is being prepared.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
