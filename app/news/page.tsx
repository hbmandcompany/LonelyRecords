import type { Metadata } from "next";
import NewsPageContent from "@/components/sections/NewsPageContent";

export const metadata: Metadata = {
  title: "News — Lonely Records",
  description: "Latest news, releases, tour dates, and announcements from Lonely Records.",
};

export default function NewsPage() {
  return <NewsPageContent />;
}
