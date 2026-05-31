import type { Metadata } from "next";
import PageBanner from "@/components/sections/PageBanner";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: "Careers — Lonely Records",
  description: "Join the Lonely Records team. Open roles in A&R, marketing, and operations.",
};

const ROLES = [
  {
    id: "ar-coordinator",
    title: "A&R Coordinator",
    type: "Full-time · Remote",
    description:
      "Listen to demos, scout new talent, and help shape the label roster. You have impeccable taste and can spot a hit in a rough four-track mix.",
    tag: "Hiring",
  },
  {
    id: "social-media",
    title: "Social Media Manager",
    type: "Part-time · Remote",
    description:
      "Run our Instagram, TikTok, and Twitter. You understand indie pop culture, meme fluently, and can make a sticker badge go viral.",
    tag: "Hiring",
  },
  {
    id: "merch-design",
    title: "Merch & Visual Designer",
    type: "Contract · Remote",
    description:
      "Design tees, zines, vinyl packaging, and sticker drops. Anime outlines, drip borders, and Permanent Marker energy required.",
    tag: "Contract",
  },
  {
    id: "intern",
    title: "Label Intern",
    type: "Internship · Hybrid",
    description:
      "Help with release campaigns, playlist pitching, and the occasional basement show. Coffee skills a plus. Unpaid with perks.",
    tag: "Seasonal",
  },
];

const ROTATIONS = [-4, 5, -3, 4];

export default function CareersPage() {
  return (
    <>
      <PageBanner
        title="CAREERS"
        subtitle="Join the team behind the tapes."
      />

      <section className="bg-paper px-6 pb-24 pt-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 max-w-2xl">
            <p className="font-mono text-sm leading-relaxed text-ink/75">
              We&apos;re a small team doing big things. If you love indie pop,
              zine culture, and building something from the ground up — we want
              to meet you.
            </p>
          </Reveal>

          <div className="space-y-6">
            {ROLES.map((role, i) => (
              <Reveal key={role.id} index={i}>
                <article className="sticker sticker-hover rounded-2xl bg-paper p-6 transition-transform duration-200 hover:-translate-y-0.5 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <Badge rotate={ROTATIONS[i % ROTATIONS.length]} className="mb-4 text-xs">
                        {role.tag}
                      </Badge>
                      <h2 className="font-sub text-2xl text-ink md:text-3xl">
                        {role.title}
                      </h2>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-ink/50">
                        {role.type}
                      </p>
                    </div>
                    <Button
                      href="mailto:careers@lonelyrecords.com"
                      variant="pink"
                      className="shrink-0 px-5 py-2 text-xs"
                    >
                      Apply
                    </Button>
                  </div>
                  <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-ink/75">
                    {role.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="font-mono text-sm text-ink/60">
              Don&apos;t see your role?{" "}
              <a
                href="mailto:careers@lonelyrecords.com"
                className="underline decoration-pink decoration-2 underline-offset-4 hover:text-pink"
              >
                careers@lonelyrecords.com
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
