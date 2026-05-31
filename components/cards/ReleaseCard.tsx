"use client";

import { motion } from "framer-motion";
import BlobFrame from "@/components/decorative/BlobFrame";
import Badge from "@/components/ui/Badge";
import { Release } from "@/lib/data/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const TYPE_LABEL: Record<Release["type"], string> = {
  single: "Single",
  ep: "EP",
  album: "Album",
};

export default function ReleaseCard({
  release,
  badgeMode = "date",
  rotate = -4,
}: {
  release: Release;
  badgeMode?: "date" | "type";
  rotate?: number;
}) {
  return (
    <motion.article
      className="group relative"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      <a
        href={release.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative">
          <BlobFrame
            borderColor="var(--ink)"
            borderWidth={3}
            className="aspect-square shadow-sticker transition-shadow duration-200 group-hover:shadow-sticker-lg"
          >
            <img
              src={release.coverArt}
              alt={`${release.title} by ${release.artistName}`}
              className="h-full w-full object-cover"
            />
          </BlobFrame>
          <div className="absolute -right-2 -top-3 z-20">
            <Badge
              rotate={rotate}
              color="var(--pink)"
              textColor="var(--ghost)"
              className="text-xs"
            >
              {badgeMode === "date"
                ? formatDate(release.releaseDate)
                : TYPE_LABEL[release.type]}
            </Badge>
          </div>
        </div>

        <div className="mt-4 px-1">
          <h3 className="font-sub text-xl leading-tight text-ink">
            {release.title}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/70">
            {release.artistName}
          </p>
        </div>
      </a>
    </motion.article>
  );
}
