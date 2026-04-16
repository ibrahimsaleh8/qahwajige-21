"use client";

import { PackageData } from "@/lib/responseType";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.replace("+", "");

  if (!packages?.length) return null;

  return (
    <section
      id="packages"
      className="relative bg-[#efe8da] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#2f7a63] text-[#f8f3e8] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5">
            باقاتنا
          </span>
          <h2 className="section-title text-4xl md:text-6xl text-[#201613] leading-tight uppercase">
            اختر الباقة المناسبة
          </h2>
          <div className="w-16 h-1.5 bg-[#2f7a63] rounded-full mx-auto mt-6 mb-5" />
          <p className="text-[#6f5b4a] max-w-2xl mx-auto text-lg">
            باقات مصممة بعناية لتقديم تجربة ضيافة سعودية فاخرة تليق بضيوفك.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;

            const message = encodeURIComponent(
              `مرحباً 👋 أود طلب باقة "${pkg.title}" من فضلكم.`,
            );
            const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl overflow-hidden flex flex-col shadow-[0_14px_30px_rgba(18,12,10,0.16)] border border-[#2b1f1a]/10 bg-[#f8f3e8] text-[#2b1f1a]">
                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute top-5 left-5 z-20 bg-[#d6b87c] text-[#201613] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full -rotate-2 shadow-md">
                    الأكثر طلباً ⭐
                  </div>
                )}

                {/* Image */}
                {pkg.image && (
                    <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isFeatured
                          ? "bg-[#2f7a63]/30"
                          : "bg-[#201613]/20"
                      }`}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  {/* Title */}
                  <h3 className="section-title text-2xl md:text-3xl mb-4 uppercase">
                    {pkg.title}
                  </h3>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            isFeatured ? "bg-[#d6b87c]" : "bg-[#2f7a63]"
                          }`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 py-4 rounded-full text-sm font-black uppercase tracking-wide
                      hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.15)]
                      transition-all duration-200
                      ${
                        isFeatured
                          ? "bg-[#d6b87c] text-[#201613] border border-[#201613]"
                          : "bg-[#2f7a63] text-white hover:bg-[#1e5a49]"
                      }`}>
                    <FaWhatsapp className="size-5" />
                    اطلب الباقة الآن
                  </a>
                </div>

                {/* Bottom accent bar */}
                <div
                  className={`h-1.5 w-full ${
                    isFeatured ? "bg-[#d6b87c]" : "bg-[#2f7a63]"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
