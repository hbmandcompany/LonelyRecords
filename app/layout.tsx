import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { bebasNeue, blackHanSans, dmMono } from "./fonts";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

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
        <CustomCursor />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
