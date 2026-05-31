"use client";

import { useMemo, useState } from "react";
import ReleaseCard from "@/components/cards/ReleaseCard";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/anim/Reveal";
import { releases } from "@/lib/data/releases";

const FILTERS = ["ALL", "2025", "2024", "SINGLES", "EPS", "ALBUMS"] as const;
type Filter = (typeof FILTERS)[number];

const ROTATIONS = [-5, 4, -3, 5];

export default function ReleasesExplorer() {
  const [active, setActive] = useState<Filter>("ALL");

  const filtered = useMemo(() => {
    return releases.filter((r) => {
      switch (active) {
        case "ALL":
          return true;
        case "2025":
        case "2024":
          return r.releaseDate.startsWith(active);
        case "SINGLES":
          return r.type === "single";
        case "EPS":
          return r.type === "ep";
        case "ALBUMS":
          return r.type === "album";
        default:
          return true;
      }
    });
  }, [active]);

  return (
    <section className="bg-paper px-6 pb-24 pt-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap gap-2 border-y-[3px] border-ink py-4">
          {FILTERS.map((f) => (
            <Pill key={f} active={active === f} onClick={() => setActive(f)}>
              {f}
            </Pill>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center font-mono text-sm text-ink/60">
            Nothing here yet. Check back next season.
          </p>
        ) : (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((release, i) => (
              <Reveal key={release.id} index={i % 4}>
                <ReleaseCard
                  release={release}
                  badgeMode="type"
                  rotate={ROTATIONS[i % ROTATIONS.length]}
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
