export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}

const img = (seed: string) => `https://picsum.photos/seed/${seed}/1200/800`;

export const newsArticles: NewsArticle[] = [
  {
    id: "moon-water-out-now",
    title: "Moon Water Is Out Now",
    excerpt:
      "Saturn Pony's debut album is live everywhere — twelve tracks of reverb-soaked lullabies recorded on a four-track in a Tokyo basement. Vinyl pre-orders open today.",
    category: "Release",
    date: "2025-04-18",
    image: img("moonwaternews"),
    featured: true,
  },
  {
    id: "summer-tour-2025",
    title: "Lonely Records Summer Tour Announced",
    excerpt:
      "Paper Tigers, Neon Cassette, and Yumi Static hit the road this July. Eight cities, one very loud amp, and a merch table that never runs out of stickers.",
    category: "Tour",
    date: "2025-04-02",
    image: img("summertour"),
  },
  {
    id: "zine-vol1",
    title: "Lonely Zine Vol. 1 — Hand-Stapled & Limited",
    excerpt:
      "48 pages of artist interviews, lyric annotations, and photocopied chaos. Available in the shop while supplies last. No reprints planned.",
    category: "Merch",
    date: "2025-03-15",
    image: img("zinevol1"),
  },
  {
    id: "after-hours-streaming",
    title: "After Hours TV Breaks 1M Streams",
    excerpt:
      "Neon Cassette's EP crossed a million plays in its first month. We're not surprised — those synths were always going to hit.",
    category: "Milestone",
    date: "2025-03-01",
    image: img("afterhoursnews"),
  },
  {
    id: "demo-submissions-open",
    title: "Demo Submissions Now Open",
    excerpt:
      "We're listening. Send us your unreleased tracks, rough mixes, and 2am recordings. If it keeps us up at night, we want to hear it.",
    category: "Label",
    date: "2025-02-20",
    image: img("demosopen"),
  },
  {
    id: "cassette-reissue",
    title: "Basement Tapes Cassette Reissue",
    excerpt:
      "Saturn Pony's early EP gets a limited cassette run — orange shell, hand-numbered, includes a lyric zine insert. 500 copies only.",
    category: "Release",
    date: "2025-02-01",
    image: img("cassettereissue"),
  },
];

export const featuredArticle =
  newsArticles.find((a) => a.featured) ?? newsArticles[0];
