"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Logo from "@/components/viktra/Logo";
import type { ProductImage } from "@/lib/product";
import { V4_MOTION_QUERY } from "@/lib/v4";

function Shot({ image, className }: { image: ProductImage; className?: string }) {
  return (
    <picture className={className}>
      {image.webp ? <source srcSet={image.webp} type="image/webp" /> : null}
      {/* eslint-disable-next-line @next/next/no-img-element -- static capture, sized */}
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
    </picture>
  );
}

/**
 * Entry of /services/v4. Two versions, chosen by CSS with the same query as V4_MOTION_QUERY:
 * - computer with a fine pointer, motion allowed: tall section, sticky stage, the laptop
 *   starts from the back, turns over, opens, then its screen goes from Bonee to Viktra;
 * - everything else (phone, touch tablet, reduced motion, no JS): auto height, a phone
 *   showing Bonee. GSAP is never imported in that case.
 * No JS pin: the stage is `position: sticky`; GSAP only scrubs transforms and opacity.
 */
export default function LaptopScene({
  children,
  bonee,
  viktra,
  captions,
}: {
  children: ReactNode;
  bonee: ProductImage[];
  viktra: ProductImage;
  captions: { bonee: string; viktra: string };
}) {
  const sceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const query = window.matchMedia(V4_MOTION_QUERY);
    let cancelled = false;
    let started = false;
    let revert: (() => void) | undefined;

    const start = async () => {
      if (started) return;
      started = true;
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({ ignoreMobileResize: true });

        const q = (selector: string) => scene.querySelector<HTMLElement>(selector)!;
        const stage = q(".v4-stage");
        const intro = q(".v4-intro");
        const slot = q(".v4-slot");
        const tilt = q(".v4-tilt");
        const laptop = q(".v4-laptop");
        const lid = q(".v4-lid");
        const slideViktra = q(".v4-slide--viktra");
        const capBonee = q(".v4-cap--bonee");
        const capViktra = q(".v4-cap--viktra");

        // Layout values only (offset*), never the current transform.
        const dx = () => stage.clientWidth / 2 - (slot.offsetLeft + slot.offsetWidth / 2);
        const dy = () => stage.clientHeight * 0.46 - (slot.offsetTop + slot.offsetHeight / 2);
        const zoom = () => {
          const byWidth = Math.min(stage.clientWidth * 0.92, 960) / laptop.offsetWidth;
          const byHeight = (stage.clientHeight * 0.74) / slot.offsetHeight;
          return Math.min(byWidth, byHeight);
        };

        const mm = gsap.matchMedia();
        mm.add(V4_MOTION_QUERY, () => {
          // Same values as the server CSS: nothing jumps when the timeline takes over.
          gsap.set(tilt, { rotationX: -16 });
          gsap.set(laptop, { rotationY: 180 });
          gsap.set(lid, { rotationX: -20 });
          gsap.set(slot, { x: 0, y: 0, scale: 1 });
          gsap.set(intro, { autoAlpha: 1, y: 0 });
          gsap.set(slideViktra, { opacity: 0 });
          gsap.set([capBonee, capViktra], { autoAlpha: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: scene,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });

          tl.fromTo(laptop, { rotationY: 180 }, { rotationY: 0, duration: 0.32, ease: "power2.inOut" }, 0.08)
            .fromTo(tilt, { rotationX: -16 }, { rotationX: -10, duration: 0.2, ease: "power1.inOut" }, 0.4)
            .fromTo(lid, { rotationX: -20 }, { rotationX: 10, duration: 0.2, ease: "power1.inOut" }, 0.4)
            .fromTo(intro, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -24, duration: 0.15 }, 0.4)
            .fromTo(
              slot,
              { x: 0, y: 0, scale: 1 },
              { x: dx, y: dy, scale: zoom, duration: 0.2, ease: "power2.inOut" },
              0.6
            )
            .fromTo(capBonee, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.7)
            .fromTo(slideViktra, { opacity: 0 }, { opacity: 1, duration: 0.04 }, 0.8)
            .to(capBonee, { autoAlpha: 0, duration: 0.02 }, 0.8)
            .fromTo(capViktra, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.03 }, 0.82)
            .to({}, { duration: 0.12 }, 0.88);
        });
        revert = () => mm.revert();
      } catch {
        // GSAP did not load: show the static version instead of a frozen laptop.
        scene.classList.add("is-static");
      }
    };

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) void start();
    };

    if (query.matches) void start();
    else query.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      query.removeEventListener("change", onChange);
      revert?.();
    };
  }, []);

  return (
    <section ref={sceneRef} className="v4-scene" aria-labelledby="hero">
      <div className="v4-stage">
        <div className="v4-wrap v4-stage-grid">
          <div className="v4-intro">{children}</div>

          {/* Static version: a phone with Bonee. */}
          <figure className="v4-phone-fig">
            <div className="v4-phone">
              <Shot image={bonee[0]} />
            </div>
            <figcaption className="v4-small">{captions.bonee}</figcaption>
          </figure>

          {/* Animated version: the laptop. */}
          <div className="v4-slot">
            <div className="v4-tilt">
              <div className="v4-laptop">
                <div className="v4-lid">
                  <div className="v4-screen">
                    <div className="v4-display">
                      <div className="v4-slide v4-slide--bonee">
                        {bonee.map((image) => (
                          <Shot key={image.src} image={image} />
                        ))}
                      </div>
                      <div className="v4-slide v4-slide--viktra">
                        <Shot image={viktra} />
                      </div>
                    </div>
                  </div>
                  <div className="v4-back" aria-hidden="true">
                    <Logo className="v4-back-logo" />
                  </div>
                </div>
                <div className="v4-base" aria-hidden="true">
                  <span className="v4-keys" />
                  <span className="v4-pad" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="v4-cap v4-cap--bonee">{captions.bonee}</p>
        <p className="v4-cap v4-cap--viktra">{captions.viktra}</p>
      </div>
    </section>
  );
}
