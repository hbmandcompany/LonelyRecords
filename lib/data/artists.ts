import { Artist } from "./types";

const img = (seed: string) => `https://picsum.photos/seed/${seed}/900/900`;

export const artists: Artist[] = [
  {
    id: "saturn-pony",
    name: "Saturn Pony",
    genre: "Bedroom Pop",
    bio: "Reverb-soaked lullabies recorded on a four-track in a Tokyo basement. Saturn Pony writes songs for the walk home at 4am.",
    image: img("saturnpony"),
    spotifyUrl: "https://open.spotify.com",
    instagramUrl: "https://instagram.com",
    isFeatured: true,
  },
  {
    id: "neon-cassette",
    name: "Neon Cassette",
    genre: "Synth Pop",
    bio: "Glittering analog synths and a heartbeat you can dance to. Equal parts nostalgia and neon.",
    image: img("neoncassette"),
    spotifyUrl: "https://open.spotify.com",
    instagramUrl: "https://instagram.com",
    isFeatured: false,
  },
  {
    id: "paper-tigers",
    name: "Paper Tigers",
    genre: "Indie Rock",
    bio: "Three friends, two guitars, one very loud amp. Hooks sharp enough to staple to a telephone pole.",
    image: img("papertigers"),
    spotifyUrl: "https://open.spotify.com",
    instagramUrl: "https://instagram.com",
    isFeatured: false,
  },
  {
    id: "yumi-static",
    name: "Yumi Static",
    genre: "Hyperpop",
    bio: "Maximalist, candy-coated chaos. Yumi Static turns the volume knob until it falls off.",
    image: img("yumistatic"),
    spotifyUrl: "https://open.spotify.com",
    instagramUrl: "https://instagram.com",
    isFeatured: false,
  },
  {
    id: "the-lonelyhearts",
    name: "The Lonelyhearts",
    genre: "Dream Pop",
    bio: "Soft-focus guitars and harmonies that feel like a half-remembered summer.",
    image: img("lonelyhearts"),
    spotifyUrl: "https://open.spotify.com",
    instagramUrl: "https://instagram.com",
    isFeatured: false,
  },
  {
    id: "velvet-arcade",
    name: "Velvet Arcade",
    genre: "Shoegaze",
    bio: "Walls of fuzz with a melody buried underneath, waiting for you to find it.",
    image: img("velvetarcade"),
    spotifyUrl: "https://open.spotify.com",
    instagramUrl: "https://instagram.com",
    isFeatured: false,
  },
];

export const featuredArtist = artists.find((a) => a.isFeatured) ?? artists[0];
