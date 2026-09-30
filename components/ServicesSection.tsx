import { ServicesSectionData } from "@/lib/responseType";
import ServiceIcon from "./ServiceIcon";

export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section
      id="services"
      className="relative bg-[#332327] overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <p className="inline-block bg-[#2f7a63] text-[#f8f3e8] text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
              {label}
            </p>
            <h2 className="section-title text-4xl md:text-6xl text-[#f8f3e8] leading-tight uppercase">
              {title}
            </h2>
            <div className="w-16 h-1.5 bg-[#d6b87c] rounded-full mt-6" />
          </div>
          <p className="text-lg leading-relaxed max-w-md text-[#eadfca]">
            {description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {items &&
          items.map((card) => {
            return (
              <div
                key={card.title}
                className="flex flex-col text-center items-center bg-[#f8f3e8] border border-[#2b1f1a]/10 rounded-3xl p-8 shadow-[0_14px_30px_rgba(18,12,10,0.18)] hover:-translate-y-1 transition-all duration-300">
                <ServiceIcon icon={card.icon} />

                <h3 className="section-title text-2xl text-[#201613] mb-3 uppercase">
                  {card.title}
                </h3>
                <p className="text-[#5f4a3d] text-sm md:text-base leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
