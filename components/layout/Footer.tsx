import Link from "next/link";
import GrainOverlay from "@/components/decorative/GrainOverlay";

const NAV = [
  { href: "/news", label: "News" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/careers", label: "Careers" },
];

const SOCIAL = [
  { href: "https://open.spotify.com", label: "Spotify" },
  { href: "https://music.apple.com", label: "Apple Music" },
  { href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-pink/30 bg-void text-ink">
      <GrainOverlay opacity={0.12} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-[0.1em] text-ghost">
              LONELY RECORDS
            </p>
            <p className="mt-3 max-w-xs font-mono text-sm text-ink/50">
              An independent label for artists who refuse to compromise. Dark,
              deliberate, and deeply felt — est. 2025.
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
                    className="font-mono text-sm text-ink/70 transition-colors hover:text-volt"
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
                    className="font-mono text-sm text-ink/70 transition-colors hover:text-volt"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink/35">
          &copy; 2025 Lonely Records LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
