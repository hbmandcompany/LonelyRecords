import Link from "next/link";
import GrainOverlay from "@/components/decorative/GrainOverlay";

const NAV = [
  { href: "/news", label: "News" },
  { href: "/licensing", label: "Licensing" },
  { href: "/careers", label: "Careers" },
];

const SOCIAL = [
  { href: "https://open.spotify.com", label: "Spotify" },
  { href: "https://music.apple.com", label: "Apple Music" },
  { href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <GrainOverlay opacity={0.08} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-wide text-paper">
              LONELY RECORDS
            </p>
            <p className="mt-3 max-w-xs font-mono text-sm text-paper/70">
              An indie pop record label. Real music, real artists, pressed with
              love since 2025.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-mono text-sm text-paper/80 transition-colors hover:text-volt"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink">
              Listen / Follow
            </p>
            <ul className="mt-4 space-y-2">
              {SOCIAL.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-paper/80 transition-colors hover:text-volt"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
          &copy; 2025 Lonely Records LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
