import { AboutSectionData } from "@/lib/responseType";
import AboutImage from "./AnimatedComponents/AboutImage";

export default function AboutSection({
  description1,
  label,
  title,
  image,
}: AboutSectionData) {
  return (
    <section id="about" className="bg-[#efe8da] overflow-hidden">
      {/* ── HEADER + IMAGE + DESCRIPTION ── */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left — Text */}
          <div className="space-y-6">
            <p className="inline-block bg-[#2f7a63] text-[#f8f3e8] text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full">
              {label}
            </p>
            <h2 className="section-title text-4xl md:text-6xl text-[#201613] leading-tight uppercase">
              {title}
            </h2>
            <div className="w-20 h-1.5 bg-[#2f7a63] rounded-full" />

            {description1 && (
              <p className="mt-4 text-lg text-[#4b392f] leading-relaxed">
                {description1}
              </p>
            )}

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-[#f8f3e8] px-5 py-4 rounded-2xl border border-[#2b1f1a]/10">
                <p className="text-3xl font-black text-[#2f7a63]">٥٠٠+</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6f5b4a] mt-1">
                  مناسبة ناجحة
                </p>
              </div>
              <div className="bg-[#f8f3e8] px-5 py-4 rounded-2xl border border-[#2b1f1a]/10">
                <p className="text-3xl font-black text-[#2f7a63]">١٠+</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6f5b4a] mt-1">
                  سنوات خبرة
                </p>
              </div>
              <div className="bg-[#f8f3e8] px-5 py-4 rounded-2xl border border-[#2b1f1a]/10">
                <p className="text-3xl font-black text-[#2f7a63]">١٠٠٪</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6f5b4a] mt-1">
                  رضا العملاء
                </p>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <AboutImage imageUrl={image ?? ""} />
        </div>
      </div>
    </section>
  );
}
