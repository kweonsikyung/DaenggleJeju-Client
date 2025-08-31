"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Pagination } from "@/ui/atoms/Pagination/Pagination";
import { Chip } from "@/ui/atoms/Chip/Chip/Chip";
import * as s from "./style.css";
import { slides } from "./_util";

export default function Onboarding() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const buttonLabel = index === total - 1 ? "로그인하기" : "건너뛰기";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const goLogin = useCallback(() => {
    router.replace("/login");
  }, [router]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <main className={s.page}>
      <header className={s.topBar}>
        <div aria-hidden />
        <Pagination
          currentPage={index + 1}
          totalPages={total}
          onPageChange={(p) => emblaApi?.scrollTo(p - 1)}
        />
        <button className={s.skip} onClick={goLogin}>
          {buttonLabel}
        </button>
      </header>

      <div ref={emblaRef} className={s.viewport} aria-label="온보딩">
        <div className={s.container}>
          {slides.map(({ src, chip, headline, highlight }, i) => (
            <section key={src} className={s.slide} aria-roledescription="slide">
              <div className={s.top}>
                <Chip label={chip} />
                <h2 className={s.title}>
                  {headline}
                  <br />
                  <b className={s.titleBold}>{highlight}</b>
                </h2>
              </div>

              <div className={s.phone}>
                <Image
                  src={src}
                  alt={chip}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={i === 0}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
