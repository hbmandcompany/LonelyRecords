import type { Metadata } from "next";
import PageBanner from "@/components/sections/PageBanner";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/anim/Reveal";
import SubmitDemoForm from "@/components/sections/SubmitDemoForm";

export const metadata: Metadata = {
  title: "Submit A Demo — Lonely Records",
  description:
    "Send us your demo. Lonely Records is always listening for the next great indie pop record.",
};

export default function SubmitDemoPage() {
  return (
    <>
      <PageBanner
        title="SUBMIT A DEMO"
        subtitle="We want to hear what you've been making at 2am."
      />

      <section className="bg-paper px-6 pb-24 pt-6 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <Badge rotate={-5} className="mb-6">
              Open Submissions
            </Badge>
            <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
              Send Us Your Tape
            </h2>
            <div className="mt-6 space-y-4 font-mono text-sm leading-relaxed text-ink/80">
              <p>
                We sign songs that keep us up at night — not songs that fit a
                playlist algorithm. If you&apos;re making introspective indie
                pop, bedroom recordings, or anything that feels hand-touched and
                deeply intentional, we want to hear it.
              </p>
              <p>
                Include a streaming link (SoundCloud, Bandcamp, Dropbox, Google
                Drive — whatever works). Unreleased demos are welcome. We listen
                to everything and reply when something clicks.
              </p>
            </div>
            <ul className="mt-8 space-y-2 font-mono text-xs uppercase tracking-[0.15em] text-ink/60">
              <li>★ Unreleased &amp; released both OK</li>
              <li>★ Rough mixes welcome</li>
              <li>★ Response within 2–3 weeks</li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <SubmitDemoForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
