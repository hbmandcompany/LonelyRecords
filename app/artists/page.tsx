import type { Metadata } from "next";
import PageBanner from "@/components/sections/PageBanner";
import ArtistCard from "@/components/cards/ArtistCard";
import Reveal from "@/components/anim/Reveal";
import MarqueeBar from "@/components/layout/MarqueeBar";
import { artists } from "@/lib/data/artists";

export const metadata: Metadata = {
  title: "Artists — Lonely Records",
  description: "The lonely ones. Meet the artists of Lonely Records.",
};

const ROTATIONS = [-4, 5, -3, 4, -5, 3];

export default function ArtistsPage() {
  return (
    <>
      <PageBanner title="ARTISTS" subtitle="The lonely ones." />

      <section className="bg-paper px-6 pb-24 pt-6 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, i) => (
            <Reveal key={artist.id} index={i % 3}>
              <ArtistCard artist={artist} rotate={ROTATIONS[i % ROTATIONS.length]} />
            </Reveal>
          ))}
        </div>
      </section>

      <MarqueeBar
        items={["NEW MUSIC", "INDIE POP", "REAL ARTISTS", "EST. 2025", "LONELY RECORDS"]}
        variant="pink"
        direction="left"
      />
    </>
  );
}
