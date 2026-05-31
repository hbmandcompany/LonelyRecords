import Link from "next/link";
import ArtistCard from "@/components/cards/ArtistCard";
import Reveal from "@/components/anim/Reveal";
import { artists } from "@/lib/data/artists";

const ROTATIONS = [-4, 5, -3];

export default function FeaturedArtists() {
  const featured = artists.slice(0, 3);

  return (
    <section className="bg-paper px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="font-display text-5xl tracking-wide text-ink md:text-7xl">
            Our Artists
          </h2>
          <Link
            href="/artists"
            className="hidden font-mono text-xs uppercase tracking-[0.18em] underline decoration-pink decoration-2 underline-offset-4 hover:text-pink sm:inline-block"
          >
            See all
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((artist, i) => (
            <Reveal key={artist.id} index={i}>
              <ArtistCard
                artist={artist}
                rotate={ROTATIONS[i % ROTATIONS.length]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
