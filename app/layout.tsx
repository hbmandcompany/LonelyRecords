import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { bangers, blackHanSans, dmMono, permanentMarker } from "./fonts";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: "Lonely Records — Indie Pop Record Label",
  description:
    "Lonely Records is an indie pop record label. Real music, real artists. New music every season.",
  metadataBase: new URL("https://lonelyrecords.com"),
  openGraph: {
    title: "Lonely Records",
    description: "An indie pop record label. Real music, real artists.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} ${blackHanSans.variable} ${dmMono.variable} ${permanentMarker.variable}`}
    >
      <body className="font-mono antialiased">
        <CustomCursor />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
