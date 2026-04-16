"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { GalleryImageData } from "@/lib/responseType";

export default function HeroBackgroundCarousel({
  images,
}: {
  images: GalleryImageData[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl" },
    [
      Autoplay({
        delay: 3000,
      }),
    ],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!images?.length) {
    return (
      <div className="relative w-full h-88 sm:h-112 rounded-[1.5rem] border border-[#2b1f1a]/10 bg-[#ddd0ba] flex items-center justify-center">
        <p className="text-sm font-bold uppercase tracking-wider text-[#4f3d32]">
          Coffee Moments
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden w-full h-88 sm:h-112 rounded-[1.5rem] border border-[#2b1f1a]/10 shadow-[0_18px_38px_rgba(22,15,13,0.2)]"
      ref={emblaRef}>
      <div className="flex h-full">
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full relative">
            <Image
              src={img.url}
              alt={img.alt ?? "hero image"}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#201613]/55 via-[#201613]/20 to-transparent" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full bg-[#201613]/45 backdrop-blur-sm px-3 py-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            className="relative flex items-center justify-center size-10 cursor-pointer"
            aria-label={`Go to hero slide ${i + 1}`}>
            <span
              className={`block rounded-full transition-all ${
                activeIndex === i
                  ? "w-6 h-2.5 bg-[#d6b87c]"
                  : "w-2.5 h-2.5 bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
