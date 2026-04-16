import { WhyUsSectionData } from "@/lib/responseType";
import { Award, Clock, MapPin, User, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  clock: Clock,
  shield: MapPin,
  sparkles: User,
  Award,
  Clock,
  Shield: MapPin,
  Sparkles: User,
};

export function WhyUsSection({
  description,
  features,
  label,
  title,
}: WhyUsSectionData) {
  const safeFeatures = features?.length
    ? features
    : [
        {
          icon: "award",
          title: "حبوب مختارة",
          description: "خلطات محمصة بعناية ونكهات مميزة لكل كوب.",
        },
        {
          icon: "clock",
          title: "خدمة سريعة",
          description: "تحضير وتسليم سريع للمناسبات والطلبات اليومية.",
        },
        {
          icon: "shield",
          title: "فريق موثوق",
          description: "باريستا محترفون يركزون على الجودة وحسن الضيافة.",
        },
        {
          icon: "sparkles",
          title: "تجربة عصرية",
          description: "تصميم أنيق وتقديم مميز يصنع لحظات لا تنسى.",
        },
      ];

  const mainFeature = safeFeatures[0];

  return (
    <section id="why-us" className="py-20 md:py-24 px-4 bg-[#efe8da]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 rounded-3xl bg-[#332327] p-8 md:p-10 text-[#f8f3e8] shadow-[0_18px_40px_rgba(20,12,10,0.2)]">
            <p className="inline-flex items-center gap-2 bg-[#2f7a63] text-[#f8f3e8] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
              <span className="h-2 w-2 rounded-full bg-[#d6b87c]" />
              {label || "لماذا نحن"}
            </p>
            <h2 className="section-title text-4xl md:text-5xl uppercase leading-tight mb-4">
              {title || "نصنع لحظات قهوة استثنائية"}
            </h2>
            <div className="w-20 h-1.5 rounded-full bg-[#d6b87c] mb-6" />
            <p className="text-[#eadfca] leading-relaxed mb-8">
              {description ||
                "نجمع بين المذاق الفاخر والخدمة الذكية والتقديم العصري لتكون كل زيارة تجربة مميزة."}
            </p>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-[#d6b87c] mb-2">
                الميزة الأبرز
              </p>
              <p className="section-title text-2xl uppercase">
                {mainFeature?.title || "جودة استثنائية"}
              </p>
              <p className="text-[#eadfca] mt-2 leading-relaxed">
                {mainFeature?.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {safeFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon ?? "award"] ?? Award;
              return (
                <article
                  key={`${feature.title}-${index}`}
                  className="rounded-3xl bg-[#f8f3e8] border border-[#2b1f1a]/10 p-6 shadow-[0_10px_24px_rgba(22,14,12,0.1)] hover:-translate-y-1 transition-transform duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-[#2f7a63] text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="section-title text-2xl uppercase text-[#201613] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5d4a3f] leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
