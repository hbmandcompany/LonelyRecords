import type { Metadata } from "next";
import PageBanner from "@/components/sections/PageBanner";
import Reveal from "@/components/anim/Reveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Shop — Lonely Records",
  description: "Official Lonely Records merch — vinyl, cassettes, tees, and zines.",
};

const PRODUCTS = [
  {
    id: "moon-water-vinyl",
    name: "Moon Water — Vinyl",
    price: "$28",
    tag: "New",
    image: "https://picsum.photos/seed/moonwatervinyl/600/600",
  },
  {
    id: "lr-logo-tee",
    name: "Lonely Records Logo Tee",
    price: "$32",
    tag: "Bestseller",
    image: "https://picsum.photos/seed/lrtee/600/600",
  },
  {
    id: "cassette-bundle",
    name: "Cassette Bundle (3-Pack)",
    price: "$24",
    tag: "Limited",
    image: "https://picsum.photos/seed/cassettebundle/600/600",
  },
  {
    id: "zine-vol1",
    name: "Lonely Zine Vol. 1",
    price: "$12",
    tag: "Hand-stapled",
    image: "https://picsum.photos/seed/lrzine/600/600",
  },
  {
    id: "after-hours-vinyl",
    name: "After Hours TV — Vinyl",
    price: "$26",
    tag: "EP",
    image: "https://picsum.photos/seed/afterhoursvinyl/600/600",
  },
  {
    id: "sticker-pack",
    name: "Sticker Pack",
    price: "$8",
    tag: "5 stickers",
    image: "https://picsum.photos/seed/lrstickers/600/600",
  },
];

const ROTATIONS = [-4, 5, -3, 4, -5, 3];

export default function ShopPage() {
  return (
    <>
      <PageBanner title="SHOP" subtitle="Vinyl, tees, cassettes, and zines." />

      <section className="bg-paper px-6 pb-24 pt-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 max-w-xl">
            <p className="font-mono text-sm leading-relaxed text-ink/75">
              Everything we press gets a physical run. Shop official Lonely
              Records merch — limited drops, hand-stapled zines, and records you
              can actually hold.
            </p>
          </Reveal>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.id} index={i % 3}>
                <article className="group">
                  <div className="sticker sticker-hover relative aspect-square overflow-hidden rounded-2xl bg-paper transition-transform duration-200 group-hover:-translate-y-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-3 top-3">
                      <Badge rotate={ROTATIONS[i % ROTATIONS.length]} className="text-xs">
                        {product.tag}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3 px-1">
                    <div>
                      <h2 className="font-sub text-lg leading-tight text-ink">
                        {product.name}
                      </h2>
                      <p className="mt-1 font-mono text-sm text-pink">{product.price}</p>
                    </div>
                    <Button variant="ink" className="shrink-0 px-4 py-2 text-xs">
                      Add
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
              Checkout coming soon — DM us on Instagram for now
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
