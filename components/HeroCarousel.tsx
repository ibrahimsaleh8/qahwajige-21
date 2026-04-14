"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { GalleryImageData } from "@/lib/responseType";

export default function HeroBackgroundCarousel({
  images,
}: {
  images: GalleryImageData[];
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "rtl" }, [
    Autoplay({
      delay: 3500,
    }),
  ]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden w-full h-full"
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

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75" />
    </div>
  );
}
