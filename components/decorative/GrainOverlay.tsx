const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Localized grain texture. The site-wide grain lives in globals.css (body::before);
 * use this inside a `relative` container (e.g. the footer) for an extra analog layer.
 */
export default function GrainOverlay({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{ opacity, backgroundImage: `url("${GRAIN_SVG}")` }}
    />
  );
}
