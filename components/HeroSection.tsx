import HeroLinks from "./AnimatedComponents/HeroLinks";
import { GalleryImageData, HeroSectionData } from "@/lib/responseType";
import HeroBackgroundCarousel from "./HeroCarousel";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  images,
}: HeroSectionData & {
  images: GalleryImageData[];
}) {
  return (
    <section
      id="home"
      className="relative bg-main-color overflow-hidden min-h-screen w-full">
      <HeroBackgroundCarousel images={images} />

      <div className="w-full min-h-screen pb-50 flex flex-col gap-3 items-center justify-center text-center px-4 sm:px-6 relative z-10 ">
        <div className="flex flex-col justify-center order-2 lg:order-1 py-10 lg:py-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold mb-5">
            ضيافة عربية بطابع ملكي
          </p>

          {/* Headline */}
          <h1 className="font-black leading-[1.1] mb-6 text-5xl sm:text-6xl lg:text-7xl -rotate-1">
            {headline?.split(" ").map((word, i) =>
              i === 0 ? (
                <span key={i} className="text-accent-gold">
                  {word}{" "}
                </span>
              ) : (
                <span key={i} className="text-white">
                  {word}{" "}
                </span>
              ),
            )}
          </h1>

          {/* Divider */}
          <div className="w-full h-1.5 bg-accent-gold rounded-full mb-6" />

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mb-10">
            {subheadline}
          </p>

          <HeroLinks whatsApp={whatsApp} />
        </div>
      </div>
    </section>
  );
}
