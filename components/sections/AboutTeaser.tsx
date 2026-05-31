import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/anim/Reveal";

export default function AboutTeaser() {
  return (
    <section className="halftone bg-paper px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-5xl tracking-wide text-ink md:text-6xl">
            Who We Are
          </h2>
          <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-ink/80 md:text-base">
            We started Lonely Records in a basement with a four-track and a
            stack of blank cassettes. We sign the songs that keep us up at
            night — introspective, loud, a little broken, deeply alive. No
            algorithms. No focus groups. Just real music made by real people.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-mono text-sm uppercase tracking-[0.18em] underline decoration-pink decoration-2 underline-offset-4 hover:text-pink"
          >
            Read Our Story
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-center gap-5">
          <Badge rotate={-6} className="text-base">
            Real Music
          </Badge>
          <Badge rotate={4} variant="star" className="text-base">
            Real Artists
          </Badge>
          <Badge rotate={-3} className="text-base">
            Indie Pop Forever
          </Badge>
        </Reveal>
      </div>
    </section>
  );
}
