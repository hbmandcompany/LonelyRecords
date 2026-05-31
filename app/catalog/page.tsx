import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/sections/PageBanner";
import ArtistCard from "@/components/cards/ArtistCard";
import ReleaseCard from "@/components/cards/ReleaseCard";
import Reveal from "@/components/anim/Reveal";
import { artists } from "@/lib/data/artists";
import { releases } from "@/lib/data/releases";

export const metadata: Metadata = {
  title: "Explore Catalog — Lonely Records",
  description: "The full Lonely Records catalog — every artist and release in one place.",
};

const ROTATIONS = [-4, 5, -3, 4, -5, 3];

export default function CatalogPage() {
  return (
    <>
      <PageBanner
        title="EXPLORE CATALOG"
        subtitle="Every artist. Every release. All in one place."
      />

      <section className="bg-paper px-6 py-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4 border-b-[3px] border-ink pb-6">
              <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
                Artists
              </h2>
              <Link
                href="/artists"
                className="font-mono text-xs uppercase tracking-[0.18em] underline decoration-pink decoration-2 underline-offset-4 hover:text-pink"
              >
                View all
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {artists.map((artist, i) => (
              <Reveal key={artist.id} index={i % 3}>
                <ArtistCard
                  artist={artist}
                  rotate={ROTATIONS[i % ROTATIONS.length]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="halftone bg-paper px-6 pb-24 pt-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4 border-b-[3px] border-ink pb-6">
              <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
                Releases
              </h2>
              <Link
                href="/releases"
                className="font-mono text-xs uppercase tracking-[0.18em] underline decoration-pink decoration-2 underline-offset-4 hover:text-pink"
              >
                View all
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {releases.map((release, i) => (
              <Reveal key={release.id} index={i % 4}>
                <ReleaseCard
                  release={release}
                  badgeMode="type"
                  rotate={ROTATIONS[i % ROTATIONS.length]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
