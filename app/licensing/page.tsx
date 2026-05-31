import type { Metadata } from "next";
import LicensingPageContent from "@/components/sections/LicensingPageContent";

export const metadata: Metadata = {
  title: "Licensing — Lonely Records",
  description:
    "Sync licensing for film, TV, advertising, games, and digital. License music from the Lonely Records catalog.",
};

export default function LicensingPage() {
  return <LicensingPageContent />;
}
