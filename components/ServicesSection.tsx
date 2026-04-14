import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};
export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section
      id="services"
      className="relative bg-second-background overflow-hidden py-28">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <p className="inline-block bg-main-color-dark text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
              {label}
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight">
              {title}
            </h2>
            <div className="w-16 h-1.5 bg-accent-gold rounded-full mt-6" />
          </div>
          <p className=" text-lg leading-relaxed max-w-md">{description}</p>
        </div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {items &&
          items.map((card) => {
            const IconComponent =
              iconMap[card.icon as keyof typeof iconMap] || Coffee;
            return (
              <div
                key={card.title}
                className="flex flex-col text-center items-center bg-card-background border border-black/10 rounded-3xl p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300">
                <div className="w-14 h-14 bg-main-color rounded-2xl flex items-center justify-center mb-6 text-main-color">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {card.title}
                </h3>
                <p className="text-black text-sm md:text-base leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
