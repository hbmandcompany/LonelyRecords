export type ReleaseType = "single" | "ep" | "album";

export interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  image: string;
  spotifyUrl: string;
  instagramUrl: string;
  isFeatured: boolean;
}

export interface Release {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  type: ReleaseType;
  releaseDate: string;
  coverArt: string;
  description?: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  isFeatured?: boolean;
}
