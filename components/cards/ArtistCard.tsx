"use client";

import { motion } from "framer-motion";
import BlobFrame from "@/components/decorative/BlobFrame";
import SpeedLines from "@/components/decorative/SpeedLines";
import Badge from "@/components/ui/Badge";
import { Artist } from "@/lib/data/types";

export default function ArtistCard({
  artist,
  rotate = -3,
}: {
  artist: Artist;
  rotate?: number;
}) {
  return (
    <motion.article
      className="group relative"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <a
        href={artist.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative">
          <SpeedLines color="var(--violet)" className="scale-[1.7]" />
          <BlobFrame
            borderColor="var(--pink)"
            borderWidth={3}
            className="relative z-10 aspect-square shadow-sticker"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="h-full w-full object-cover transition-all duration-300 group-hover:saturate-[0.55]"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-pink opacity-0 transition-opacity duration-300 group-hover:opacity-[0.85]">
              <span className="font-display text-2xl tracking-wide text-ghost">
                View Artist
              </span>
            </div>
          </BlobFrame>
        </div>

        <div className="relative z-30 -mt-6 flex items-end justify-between gap-2 px-1">
          <h3 className="font-sub text-2xl leading-none text-ghost drop-shadow-[2px_2px_0_var(--pink)]">
            {artist.name}
          </h3>
          <Badge rotate={rotate} className="shrink-0 text-xs">
            {artist.genre}
          </Badge>
        </div>
      </a>
    </motion.article>
  );
}
