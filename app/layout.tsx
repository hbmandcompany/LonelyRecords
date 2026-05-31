import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { bebasNeue, blackHanSans, dmMono } from "./fonts";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Lonely Records — Independent Label",
  description:
    "Lonely Records is an independent label for artists who refuse to compromise. Dark, deliberate, deeply felt.",
  metadataBase: new URL("https://lonelyrecords.com"),
  openGraph: {
    title: "Lonely Records",
    description:
      "An independent label for raw, reflective, unmistakably human music.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${blackHanSans.variable} ${dmMono.variable}`}
    >
      <body className="font-mono antialiased">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-full focus:bg-pink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ghost"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
