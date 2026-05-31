import Link from "next/link";
import ReleaseCard from "@/components/cards/ReleaseCard";
import Reveal from "@/components/anim/Reveal";
import { releases } from "@/lib/data/releases";

export default function FeaturedReleases() {
  const featured = releases.slice(0, 3);

  return (
    <section className="bg-paper px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="font-display text-5xl tracking-wide text-ink md:text-7xl">
            Latest Drops
          </h2>
          <Link
            href="/releases"
            className="hidden font-mono text-xs uppercase tracking-[0.18em] underline decoration-pink decoration-2 underline-offset-4 hover:text-pink sm:inline-block"
          >
            See all
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((release, i) => (
            <Reveal key={release.id} index={i}>
              <ReleaseCard release={release} badgeMode="date" rotate={i % 2 === 0 ? -5 : 4} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
