import { SITE_URL } from "@/lib/seo/site";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lonely Records",
  legalName: "Hated By Many LLC",
  url: SITE_URL,
  foundingDate: "2026",
  sameAs: [
    "https://open.spotify.com",
    "https://music.apple.com",
    "https://instagram.com",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lonely Records",
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: "Lonely Records",
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website]),
      }}
    />
  );
}
