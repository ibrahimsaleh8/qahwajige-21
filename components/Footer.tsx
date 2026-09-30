"use client";

import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن الشركة", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "باقاتنا", href: "/#packages" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Banner */}
      <div className="relative bg-second-bg z-10 pt-24 pb-16 px-6 text-center border-y border-main-color/15">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-main-color/10 border border-main-color/35 text-white text-xs font-bold tracking-[0.2em] px-5 py-2 rounded-full mb-5">
            هل أنت مستعد؟
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-accent-gold -rotate-1 leading-tight mb-3">
            ارفع مستوى ضيافتك اليوم
          </h2>
          <div className="w-12 h-1 bg-accent-gold rounded-full mx-auto mb-6" />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-sm
                bg-main-color/90 text-main-background
                hover:bg-accent-gold hover:-translate-y-0.5
                active:translate-y-0.5
                transition-all duration-200 shadow-[0_4px_0_rgba(0,0,0,0.2)]">
              احجز مناسبتك الآن
            </Link>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-sm
                  bg-white/5 text-white border border-white/20
                  hover:bg-main-color/15 hover:border-main-color hover:text-main-color hover:-translate-y-0.5
                  active:translate-y-0.5
                  transition-all duration-200">
                <Phone className="w-4 h-4" />
                تواصل عبر الهاتف
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Brand */}
        <div>
          <div className="inline-block bg-main-color text-main-background font-black text-xl px-5 py-2 rounded-xl -rotate-1 mb-4 shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            {brandName}
          </div>
          {description && (
            <p className="text-black/70 text-sm leading-relaxed max-w-xs mt-3">
              {description}
            </p>
          )}
        </div>

        {/* Nav Links */}
        <div>
          <p className="text-black font-black uppercase tracking-widest text-[10px] mb-5 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-main-color rounded-full" />
            روابط سريعة
          </p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-black/80 hover:text-main-color transition-colors duration-200 text-sm font-semibold flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-main-color/30 group-hover:bg-main-color transition-colors duration-200 shrink-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-main-color/15 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-black/90 text-xs">
          <p>
            © {currentYear} {brandName}. جميع الحقوق محفوظة.
          </p>
          <div className="w-8 h-0.5 bg-main-color rounded-full" />
          <p>خدمة ضيافة عربية أصيلة في الرياض</p>
        </div>
      </div>
    </footer>
  );
}
