"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const formattedWhatsapp = whatsapp?.replace("+", "");

  const contactItems = [
    phone && {
      icon: <Phone className="w-5 h-5" />,
      label: "اتصل بنا",
      value: phone,
      href: `tel:${phone}`,
      ltr: true,
    },
    whatsapp && {
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "واتساب",
      value: whatsapp,
      href: `https://wa.me/${formattedWhatsapp}`,
      ltr: true,
      external: true,
    },
    email && {
      icon: <Mail className="w-5 h-5" />,
      label: "راسلنا",
      value: email,
      href: `mailto:${email}`,
      ltr: false,
    },
    address && {
      icon: <MapPin className="w-5 h-5" />,
      label: "موقعنا",
      value: address,
      href: null,
      ltr: false,
    },
  ].filter(Boolean) as {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string | null;
    ltr: boolean;
    external?: boolean;
  }[];

  return (
    <section
      id="contact"
      className="relative bg-[#332327] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#2f7a63] text-[#f8f3e8] text-xs font-bold uppercase tracking-wide px-5 py-2 rounded-full mb-4">
            تواصل معنا بسهولة
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-[#f8f3e8] leading-tight mb-4 uppercase">
            نحن هنا للإجابة على استفساراتك
          </h2>
          <div className="w-24 h-1.5 bg-[#d6b87c] rounded-full mx-auto mb-4 shadow-md" />
          <p className="text-[#eadfca] max-w-xl mx-auto text-lg">
            يمكنكم التواصل معنا عبر الهاتف، البريد الإلكتروني، أو واتساب. نسعد
            دائمًا بخدمتكم.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Contact Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="bg-[#f8f3e8] rounded-2xl p-6 flex items-center gap-4
                  shadow-md border border-[#2b1f1a]/10
                  hover:-translate-y-1 hover:shadow-lg
                  transition-all duration-200 group">
                {/* Icon bubble */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center
                  bg-[#2f7a63]/10 text-[#2f7a63] shrink-0
                  group-hover:bg-[#2f7a63] group-hover:text-white transition-all duration-200">
                  {item.icon}
                </div>

                {/* Label and Value */}
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#201613] mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      dir={item.ltr ? "ltr" : "rtl"}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-[#201613] font-semibold text-sm hover:text-[#2f7a63] transition-colors truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#201613] font-semibold text-sm">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            {whatsapp && (
              <a
                href={`https://wa.me/${formattedWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-3 font-black uppercase text-sm
                  bg-[#2f7a63] text-white px-8 py-4 rounded-full
                  shadow-md hover:bg-[#1e5a49] hover:-translate-y-0.5
                  active:translate-y-1 active:shadow-sm
                  transition-all duration-200">
                <FaWhatsapp className="w-5 h-5" />
                تواصل عبر واتساب الآن
              </a>
            )}
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg relative border border-[#f8f3e8]/20 min-h-87.5">
            <iframe
              src={mapEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع الشركة"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
