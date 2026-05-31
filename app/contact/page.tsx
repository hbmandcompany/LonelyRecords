import type { Metadata } from "next";
import PageBanner from "@/components/sections/PageBanner";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/anim/Reveal";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Lonely Records",
  description: "Get in touch with Lonely Records — press, partnerships, general inquiries.",
};

const CHANNELS = [
  {
    label: "General",
    email: "hello@lonelyrecords.com",
    note: "Questions, fan mail, anything else",
  },
  {
    label: "Press",
    email: "press@lonelyrecords.com",
    note: "Interviews, features, media kits",
  },
  {
    label: "Partnerships",
    email: "partners@lonelyrecords.com",
    note: "Sync, brand collabs, licensing",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="CONTACT"
        subtitle="Say hello. We read every message."
      />

      <section className="bg-paper px-6 pb-24 pt-6 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <Badge rotate={5} className="mb-6">
              Get In Touch
            </Badge>
            <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
              Drop Us A Line
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-ink/80">
              Whether you&apos;re a fan, a journalist, or just curious — we want
              to hear from you. Fill out the form or email us directly.
            </p>

            <ul className="mt-10 space-y-6">
              {CHANNELS.map((ch) => (
                <li key={ch.label}>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-pink">
                    {ch.label}
                  </p>
                  <a
                    href={`mailto:${ch.email}`}
                    className="mt-1 block font-mono text-sm text-ink underline decoration-pink decoration-2 underline-offset-4 hover:text-pink"
                  >
                    {ch.email}
                  </a>
                  <p className="mt-1 font-mono text-xs text-ink/50">{ch.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
