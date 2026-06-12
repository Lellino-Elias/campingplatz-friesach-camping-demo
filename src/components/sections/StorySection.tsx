"use client";

import { campsite } from "@/content/campsite.config";
import Img from "@/components/ui/Img";
import Reveal from "@/components/ui/Reveal";
import Words from "@/components/ui/Words";

/**
 * Story — alternierende Split-Kapitel: pro Kapitel ein eigenes Bild direkt neben
 * dem Text (Bild links/rechts im Wechsel). Rendert NUR, wenn die Story 3+ Kapitel
 * hat und JEDES Kapitel ein eigenes Bild mitbringt (ehrliche Degradierung: sonst
 * keine Sektion). Bilder sind im Auslieferungszustand sichtbar (opacity:1) — keine
 * scroll-/sticky-Abhängigkeit, damit der Rhythmus auch bei statischem Render trägt.
 */
export default function StorySection() {
  const story = campsite.story;
  const chapters = story?.chapters ?? [];
  const complete = chapters.length >= 3 && chapters.every((c) => c.image?.src);

  if (!story || !complete) return null;

  return (
    <section id="story" className="relative scroll-mt-24 py-16 md:py-32">
      {/* Intro */}
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <Reveal soft>
          <div className="mb-10 max-w-2xl md:mb-20">
            <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.6rem)] font-extrabold leading-[1.02] tracking-tight text-ink">
              <Words text={story.heading} />
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{story.intro}</p>
          </div>
        </Reveal>
      </div>

      {/* DESKTOP — alternating text / image rows (image always visible) */}
      <div className="mx-auto hidden max-w-[1320px] flex-col gap-24 px-8 lg:flex">
        {chapters.map((c, i) => (
          <Reveal key={c.no} soft>
            <div className="grid grid-cols-2 items-center gap-16">
              <div className={i % 2 === 1 ? "order-2" : ""}>
                <div className="max-w-md">
                  <span className="font-display block text-5xl font-extrabold text-gold/30">{c.no}</span>
                  <h3 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{c.text}</p>
                </div>
              </div>
              <div className={i % 2 === 1 ? "order-1" : ""}>
                <div className="relative aspect-square w-full overflow-hidden rounded-[2.2rem] bg-bg2 shadow-2xl ring-1 ring-black/5">
                  <Img src={c.image!.src} alt={c.image!.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* MOBILE — stacked cards */}
      <div className="mx-auto max-w-xl space-y-12 px-5 md:space-y-16 lg:hidden">
        {chapters.map((c) => (
          <Reveal key={c.no}>
            <div>
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-bg2 shadow-xl ring-1 ring-black/5">
                <Img src={c.image!.src} alt={c.image!.alt} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="mt-5">
                <span className="font-display text-3xl font-extrabold text-gold/40">{c.no}</span>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-ink">{c.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{c.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
