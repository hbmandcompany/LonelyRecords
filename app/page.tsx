import Hero from "@/components/sections/Hero";
import FeaturedArtists from "@/components/sections/FeaturedArtists";
import FeaturedAlbum from "@/components/sections/FeaturedAlbum";
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

      <FeaturedArtists />

      <DrippyDivider color="var(--smoke)" />
      <FeaturedAlbum />

      <DrippyDivider color="var(--smoke)" />
      <MarqueeBar items={VOLT_MARQUEE} variant="volt" direction="right" />

      <AboutTeaser />
    </>
  );
}
