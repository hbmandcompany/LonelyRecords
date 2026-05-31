import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/anim/Reveal";

export default function AboutTeaser() {
  return (
    <section className="halftone bg-paper px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="rage-glow font-display text-5xl tracking-[0.08em] text-ghost md:text-6xl">
            Letters of Despondence
          </h2>
          <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-ink/60 md:text-base">
            Lonely Records began in an apartment studio in Legacy West, Texas as
            a reflection of culture and a deliberation of transgressions judged
            by the audiences we commit to serve. Intended for full listening
            discretion — We hope you enjoy the show.
          </p>
          <Link
            href="/news"
            className="mt-6 inline-block font-mono text-sm uppercase tracking-[0.18em] underline decoration-pink decoration-2 underline-offset-4 hover:text-pink"
          >
            Read the News
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-center gap-5">
          <Badge rotate={-3} className="text-base">
            Worldwide
          </Badge>
          <Badge rotate={2} variant="star" className="text-base">
            Legendary
          </Badge>
          <Badge rotate={-2} className="text-base">
            Iconic
          </Badge>
        </Reveal>
      </div>
    </section>
  );
}
