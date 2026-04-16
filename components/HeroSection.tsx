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
      className="relative overflow-hidden w-full bg-[#ede6d8] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-[2rem] border border-[#2b1f1a]/10 bg-[#f8f3e8] p-4 sm:p-6 shadow-[0_20px_45px_rgba(32,22,19,0.16)]">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 text-center lg:text-start">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white mb-5 px-4 py-2 rounded-full bg-[#2f7a63]">
                <span className="h-2 w-2 rounded-full bg-white" />
                قهوة طازجة يومياً
              </p>

              <h1 className="section-title leading-[1.02] mb-6 text-4xl sm:text-5xl lg:text-6xl uppercase text-[#201613]">
                {headline?.split(" ").map((word, i) =>
                  i === 0 ? (
                    <span key={i} className="text-[#2f7a63]">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
              </h1>

              <div className="w-24 h-1.5 bg-[#2f7a63] rounded-full mb-6 mx-auto lg:mx-0" />

              <p className="text-base sm:text-lg text-[#4b392f] leading-relaxed max-w-xl mb-8">
                {subheadline}
              </p>

              <HeroLinks whatsApp={whatsApp} />
            </div>

            <div className="lg:col-span-7">
              <HeroBackgroundCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
