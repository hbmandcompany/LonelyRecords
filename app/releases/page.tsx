import type { Metadata } from "next";
import PageBanner from "@/components/sections/PageBanner";
import ReleasesExplorer from "@/components/sections/ReleasesExplorer";

export const metadata: Metadata = {
  title: "Releases — Lonely Records",
  description: "Everything we've dropped. Singles, EPs, and albums from Lonely Records.",
};

export default function ReleasesPage() {
  return (
    <>
      <PageBanner title="RELEASES" subtitle="everything we've dropped." />
      <ReleasesExplorer />
    </>
  );
}
