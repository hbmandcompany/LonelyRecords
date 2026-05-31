import Hero from "@/components/sections/Hero";
import ComingSoon from "@/components/sections/ComingSoon";
import AboutTeaser from "@/components/sections/AboutTeaser";
import MarqueeBar from "@/components/layout/MarqueeBar";
import DrippyDivider from "@/components/decorative/DrippyDivider";

const PINK_MARQUEE = [
  "LONELY RECORDS",
  "INDEPENDENT ART",
  "EST. 2025",
  "NEW RELEASES",
  "CURATED ROSTER",
];

const VOLT_MARQUEE = [
  "SPOTIFY",
  "APPLE MUSIC",
  "SOUNDCLOUD",
  "BANDCAMP",
  "STREAM EVERYWHERE",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <DrippyDivider color="var(--pink)" />
      <MarqueeBar items={PINK_MARQUEE} variant="pink" direction="left" />

      <ComingSoon />

      <DrippyDivider color="var(--smoke)" />
      <MarqueeBar items={VOLT_MARQUEE} variant="volt" direction="right" />

      <AboutTeaser />
    </>
  );
}
