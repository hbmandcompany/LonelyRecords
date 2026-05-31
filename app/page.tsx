import Hero from "@/components/sections/Hero";
import FeaturedReleases from "@/components/sections/FeaturedReleases";
import FeaturedArtist from "@/components/sections/FeaturedArtist";
import AboutTeaser from "@/components/sections/AboutTeaser";
import MarqueeBar from "@/components/layout/MarqueeBar";
import DrippyDivider from "@/components/decorative/DrippyDivider";

const PINK_MARQUEE = [
  "LONELY RECORDS",
  "INDIE POP",
  "EST. 2025",
  "NEW MUSIC",
  "REAL ARTISTS",
];

const VOLT_MARQUEE = [
  "LISTEN ON SPOTIFY",
  "APPLE MUSIC",
  "TIDAL",
  "SOUNDCLOUD",
  "BANDCAMP",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <DrippyDivider color="var(--pink)" />
      <MarqueeBar items={PINK_MARQUEE} variant="pink" direction="left" />

      <FeaturedReleases />

      <DrippyDivider color="var(--smoke)" />
      <FeaturedArtist />

      <DrippyDivider color="var(--smoke)" />
      <MarqueeBar items={VOLT_MARQUEE} variant="volt" direction="right" />

      <AboutTeaser />
    </>
  );
}
