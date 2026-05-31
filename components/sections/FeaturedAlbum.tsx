import BlobFrame from "@/components/decorative/BlobFrame";
import SpeedLines from "@/components/decorative/SpeedLines";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/anim/Reveal";
import { featuredRelease } from "@/lib/data/releases";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function FeaturedAlbum() {
  const album = featuredRelease;

  return (
    <section className="relative overflow-hidden bg-smoke px-6 py-24 text-ink md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal className="group relative mx-auto w-full max-w-md">
          <SpeedLines color="var(--violet)" className="scale-[1.6]" />
          <BlobFrame
            borderColor="var(--pink)"
            borderWidth={4}
            className="relative z-10 aspect-square"
          >
            <img
              src={album.coverArt}
              alt={`${album.title} by ${album.artistName}`}
              className="h-full w-full object-cover"
            />
          </BlobFrame>
        </Reveal>

        <Reveal delay={0.1}>
          <Badge rotate={-5} className="mb-6">
            Featured Album
          </Badge>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pink">
            {album.artistName} · {formatDate(album.releaseDate)}
          </p>
          <h2 className="rage-glow mt-2 font-display text-6xl leading-[0.85] tracking-[0.06em] text-pink md:text-8xl">
            {album.title}
          </h2>
          <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-ink/80 md:text-base">
            {album.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={album.spotifyUrl} variant="pink" external>
              Listen Now
            </Button>
            <Button href="/catalog" variant="paper">
              Explore Catalog
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
