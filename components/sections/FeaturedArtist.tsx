import BlobFrame from "@/components/decorative/BlobFrame";
import SpeedLines from "@/components/decorative/SpeedLines";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/anim/Reveal";
import { featuredArtist } from "@/lib/data/artists";

export default function FeaturedArtist() {
  const artist = featuredArtist;

  return (
    <section className="relative overflow-hidden bg-smoke px-6 py-24 text-paper md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal className="group relative mx-auto w-full max-w-md">
          <SpeedLines color="var(--violet)" className="scale-[1.6]" />
          <BlobFrame
            borderColor="var(--pink)"
            borderWidth={4}
            className="relative z-10 aspect-square"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="h-full w-full object-cover"
            />
          </BlobFrame>
        </Reveal>

        <Reveal delay={0.1}>
          <Badge rotate={-5} className="mb-6">
            Featured Artist
          </Badge>
          <h2 className="font-display text-6xl leading-[0.85] tracking-wide text-pink md:text-8xl">
            {artist.name}
          </h2>
          <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-paper/80 md:text-base">
            {artist.bio}
          </p>
          <div className="mt-8">
            <Button href={artist.spotifyUrl} variant="pink" external>
              View Artist
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
