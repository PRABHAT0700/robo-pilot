"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { CoverImage } from "@/components/ui/CoverImage";
import { pillars } from "@/lib/media";

export function FourPillars() {
  const [active, setActive] = useState<number | null>(null);
  const [lockedImage, setLockedImage] = useState(0);
  const blockRefs = useRef<(HTMLElement | null)[]>([]);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  const updateActive = () => {
    const nodes = blockRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const imageBox = imageFrameRef.current?.getBoundingClientRect();
    const centerY = imageBox
      ? imageBox.top + imageBox.height / 2
      : window.innerHeight * 0.5;

    let next: number | null = null;
    for (const node of nodes) {
      const rect = node.getBoundingClientRect();
      if (rect.top <= centerY && rect.bottom > centerY) {
        next = Number(node.dataset.index);
        break;
      }
    }

    if (next !== null) {
      setLockedImage((current) => (current === next ? current : next));
    }
    setActive((current) => (current === next ? current : next));
  };

  const updateActiveRef = useRef(updateActive);
  updateActiveRef.current = updateActive;

  useLenis(() => {
    updateActiveRef.current();
  });

  useEffect(() => {
    updateActive();
    window.addEventListener("resize", updateActive);
    return () => window.removeEventListener("resize", updateActive);
  }, []);

  return (
    <section className="relative bg-[#070913] pt-16 md:pt-24" id="services">
      <div className="container-x mb-10 text-center md:mb-12">
        <p className="mb-5 inline-flex rounded-full border border-[#6af3ff]/35 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6af3ff]">
          What we do
        </p>
        <h2 className="font-display text-[36px] font-extrabold tracking-[-0.04em] text-white md:text-[56px]">
          Four Pillars, <span className="italic-accent">one partner</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#9aa3b8]">
          AI, data, mobile and consulting — handled by one team that understands your full product
          loop.
        </p>
      </div>

      <div className="container-x hidden lg:block">
        <div className="services-sticky-layout">
          <div className="services-images-wrapper">
            <div className="services-image-frame" ref={imageFrameRef}>
              {pillars.map((pillar, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={pillar.slug}
                  src={pillar.image}
                  alt={pillar.title}
                  className={`service-img${lockedImage === index ? " active" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="services-content-wrapper">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.slug}
                data-index={index}
                ref={(el) => {
                  blockRefs.current[index] = el;
                }}
                className={`service-block${active === index ? " active" : ""}`}
              >
                <span className="service-watermark font-display">{pillar.n}</span>
                <div className="service-block__copy">
                  <h3 className="font-display">{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                  <Link href={`/services/${pillar.slug}`} data-cursor>
                    {pillar.cta} →
                  </Link>
                  <span
                    className="mt-8 block h-2 w-2 rounded-full bg-[#3ee6ff] shadow-[0_0_12px_#3ee6ff]"
                    style={{ opacity: active === index ? 1 : 0 }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x grid gap-8 pb-8 lg:hidden">
        {pillars.map((pillar) => (
          <article key={pillar.slug} className="overflow-hidden rounded-3xl border border-white/10">
            <div className="h-52">
              <CoverImage src={pillar.image} alt={pillar.title} className="h-full" />
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-[#3ee6ff]">{pillar.n}</div>
              <h3 className="mt-2 font-display text-2xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-[#9aa3b8]">{pillar.copy}</p>
              <Link
                href={`/services/${pillar.slug}`}
                className="mt-4 inline-block text-sm font-bold text-[#3ee6ff]"
              >
                {pillar.cta} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
