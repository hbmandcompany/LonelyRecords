"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/anim/Reveal";
import MarqueeBar from "@/components/layout/MarqueeBar";
import DrippyDivider from "@/components/decorative/DrippyDivider";
import SpeedLines from "@/components/decorative/SpeedLines";
import BlobFrame from "@/components/decorative/BlobFrame";
import LicensingForm from "@/components/sections/LicensingForm";
import { releases } from "@/lib/data/releases";

const MARQUEE = [
  "SYNC LICENSING",
  "FILM & TV",
  "ADVERTISING",
  "VIDEO GAMES",
  "PODCASTS",
];

const USE_CASES = [
  {
    title: "Film & Television",
    body: "Indie pop with cinematic weight. Our catalog spans dreamy soundscapes to punchy hooks — perfect for montages, title sequences, and emotional beats.",
    icon: "🎬",
  },
  {
    title: "Advertising",
    body: "Authentic, hand-touched music that cuts through the noise. No stock-library vibes — every track was made by a real artist with real intent.",
    icon: "📺",
  },
  {
    title: "Video Games",
    body: "Atmospheric bedroom pop and synth-driven anthems that feel like discovering a hidden level. Licensing available for indie and AAA projects.",
    icon: "🎮",
  },
  {
    title: "Podcasts & Digital",
    body: "Theme music, interstitial beds, and full-track licenses for podcasts, YouTube, and streaming content. Fast turnaround on clearances.",
    icon: "🎙️",
  },
];

const STEPS = [
  { num: "01", title: "Submit Inquiry", body: "Tell us about your project, timeline, and which tracks you're interested in." },
  { num: "02", title: "Catalog Match", body: "Our team curates options from the Lonely Records roster — or scouts custom if needed." },
  { num: "03", title: "Quote & Terms", body: "Transparent one-stop licensing. Territory, term, and media type defined upfront." },
  { num: "04", title: "Clear & Deliver", body: "Signed agreement, high-res files, and stems delivered. Usually within 48 hours." },
];

const catalogPreview = releases.slice(0, 4);

export default function LicensingPageContent() {
  return (
    <>
      {/* Full-viewport immersive hero */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper px-6 pt-32 md:px-12">
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -left-40 top-1/4 h-[60vh] w-[60vh] bg-violet opacity-15"
          style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
        />
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -right-20 bottom-0 h-[50vh] w-[50vh] bg-volt opacity-20"
          style={{ borderRadius: "59% 41% 38% 62% / 56% 63% 37% 44%" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <Badge rotate={-4} variant="star" className="mb-8">
            One-Stop Sync
          </Badge>
          <h1
            className="font-display leading-[0.82] tracking-wide text-ink"
            style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
          >
            LICENSE
          </h1>
          <h1
            className="ml-[6vw] font-display leading-[0.82] tracking-wide text-pink"
            style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
          >
            OUR MUSIC
          </h1>
          <p className="mt-8 max-w-xl font-mono text-sm leading-relaxed text-ink/75 md:text-base">
            Lonely Records represents a curated roster of indie pop artists ready
            for sync. Film, TV, advertising, games, podcasts — we clear fast and
            keep it simple.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#inquire" variant="pink">
              Start An Inquiry
            </Button>
            <Button href="#catalog" variant="ink">
              Browse Catalog
            </Button>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0">
          <DrippyDivider color="var(--ink)" />
        </div>
      </section>

      <MarqueeBar items={MARQUEE} variant="volt" direction="right" />

      {/* Use cases — dark immersive grid */}
      <section className="bg-smoke px-6 py-24 text-paper md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide text-volt md:text-6xl">
              Where Our Music Lives
            </h2>
            <p className="mt-4 max-w-xl font-mono text-sm text-paper/60">
              From indie films to global campaigns — our catalog is built for
              stories that need soul.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} index={i}>
                <article className="group sticker relative overflow-hidden rounded-2xl bg-smoke p-8 transition-shadow duration-200 hover:shadow-sticker-pink">
                  <SpeedLines color="var(--violet)" className="scale-150 opacity-0 group-hover:opacity-100" />
                  <span className="relative z-10 text-4xl" aria-hidden>{uc.icon}</span>
                  <h3 className="relative z-10 mt-4 font-sub text-2xl text-paper">{uc.title}</h3>
                  <p className="relative z-10 mt-3 font-mono text-sm leading-relaxed text-paper/70">
                    {uc.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DrippyDivider color="var(--pink)" />

      {/* Process timeline */}
      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide text-ink md:text-6xl">
              How It Works
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} index={i}>
                <div className="sticker rounded-2xl bg-paper p-6">
                  <span className="font-display text-4xl text-pink">{step.num}</span>
                  <h3 className="mt-3 font-sub text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-ink/65">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog preview */}
      <section id="catalog" className="halftone bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide text-ink md:text-6xl">
              Available Catalog
            </h2>
            <p className="mt-4 font-mono text-sm text-ink/60">
              A sample of tracks ready for licensing. Full catalog available on request.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {catalogPreview.map((release, i) => (
              <Reveal key={release.id} index={i}>
                <div className="group">
                  <BlobFrame borderColor="var(--ink)" borderWidth={3} className="aspect-square shadow-sticker">
                    <img
                      src={release.coverArt}
                      alt={`${release.title} by ${release.artistName}`}
                      className="h-full w-full object-cover"
                    />
                  </BlobFrame>
                  <p className="mt-3 font-sub text-lg text-ink">{release.title}</p>
                  <p className="font-mono text-xs uppercase tracking-wide text-ink/50">
                    {release.artistName} · {release.type}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Button href="/catalog" variant="ink">
              Explore Full Catalog
            </Button>
          </Reveal>
        </div>
      </section>

      <DrippyDivider color="var(--smoke)" />

      {/* Inquiry form */}
      <section id="inquire" className="bg-smoke px-6 py-24 text-paper md:px-12 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <Badge rotate={5} color="var(--volt)" textColor="var(--ink)" className="mb-6">
              Start Here
            </Badge>
            <h2 className="font-display text-5xl tracking-wide text-pink md:text-6xl">
              Licensing Inquiry
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-paper/75">
              Tell us about your project and we&apos;ll get back to you with
              options, pricing, and timeline. For urgent requests, email{" "}
              <a
                href="mailto:licensing@lonelyrecords.com"
                className="text-volt underline decoration-volt underline-offset-4 hover:text-pink"
              >
                licensing@lonelyrecords.com
              </a>
            </p>
            <ul className="mt-8 space-y-3 font-mono text-xs uppercase tracking-[0.15em] text-paper/50">
              <li>★ One-stop master &amp; publishing</li>
              <li>★ Stems available on request</li>
              <li>★ Worldwide territory</li>
              <li>★ 48hr standard turnaround</li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <LicensingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
