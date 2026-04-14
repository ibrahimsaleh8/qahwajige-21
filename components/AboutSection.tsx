import Image from "next/image";
import { AboutSectionData } from "@/lib/responseType";

export default function AboutSection({
  description1,
  label,
  title,
  image,
}: AboutSectionData) {
  return (
    <section id="about" className="bg-main-background overflow-hidden">
      {/* ── HEADER + IMAGE + DESCRIPTION ── */}
      <div className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left — Text */}
          <div className="space-y-6">
            <p className="inline-block bg-main-color-dark text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full">
              {label}
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-main-black leading-tight -rotate-1">
              {title}
            </h2>
            <div className="w-20 h-1.5 bg-accent-gold rounded-full" />

            {description1 && (
              <p className="mt-4 text-lg text-white leading-relaxed">
                {description1}
              </p>
            )}

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-4xl font-black text-main-color">٥٠٠+</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-1">
                  مناسبة ناجحة
                </p>
              </div>
              <div className="w-px bg-main-color/15" />
              <div>
                <p className="text-4xl font-black text-main-color">١٠+</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-1">
                  سنوات خبرة
                </p>
              </div>
              <div className="w-px bg-main-color/15" />
              <div>
                <p className="text-4xl font-black text-main-color">١٠٠٪</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-1">
                  رضا العملاء
                </p>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          {image && (
            <div className="relative w-full h-96 lg:h-128 rounded-3xl overflow-hidden shadow-xl border border-main-color/10">
              <Image
                src={image}
                alt={title ?? "About Us Image"}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
