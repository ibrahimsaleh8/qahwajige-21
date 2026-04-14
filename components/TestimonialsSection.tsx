"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "الخدمة كانت رائعة جداً، الجو كان دافئ ومنظم، وسأعود بالتأكيد مرة أخرى.",
    author: "أحمد الشمري",
    role: "عميل دائم",
    stars: 5,
    featured: true,
    initial: "أ",
  },
  {
    quote: "تجربة لا تُنسى مع فريق محترف يهتم بكل التفاصيل الصغيرة.",
    author: "ليلى العتيبي",
    role: "مناسبة عائلية",
    stars: 5,
    featured: false,
    initial: "ل",
  },
  {
    quote: "تنظيم مذهل وخدمة عالية الجودة. أنصح الجميع بهذه التجربة.",
    author: "شركة الرؤية الحديثة",
    role: "فعالية شركات",
    stars: 5,
    featured: false,
    initial: "ر",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 bg-linear-to-b from-main-background/95 to-main-background/80 overflow-hidden">
      {/* Subtle background doodles */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-12 right-8 w-16 opacity-10 stroke-main-color"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute bottom-16 left-6 w-20 opacity-8 stroke-main-color"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-main-color text-white text-xs font-bold uppercase tracking-wide px-5 py-2 rounded-full mb-5">
            آراء العملاء
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight mb-4">
            ماذا قالوا عنّا؟
          </h2>
          <div className="w-20 h-2 bg-accent-gold rounded-full mx-auto mb-4 shadow-glow" />
          <p className="text-low-color max-w-xl mx-auto text-lg">
            ثقة مستمرة من عملائنا في مختلف المناسبات الخاصة والرسمية.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 overflow-hidden
                transition-transform duration-300 hover:-translate-y-2
                ${
                  item.featured
                    ? "bg-main-color scale-105 z-10"
                    : "bg-card-background border border-main-color/10"
                }`}>
              {/* Quote icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center
                ${item.featured ? "bg-white/15" : "bg-main-color/10"} transition-transform duration-300`}>
                <Quote
                  className={`w-6 h-6 ${item.featured ? "text-accent-gold" : "text-main-color"}`}
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-gold text-accent-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p
                className={`text-base leading-relaxed flex-1 ${item.featured ? "text-white/90" : "text-black"}`}>
                {item.quote}
              </p>

              {/* Divider */}
              <div
                className={`h-px ${item.featured ? "bg-white/20" : "bg-main-color/10"}`}
              />

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg
                  ${item.featured ? "bg-accent-gold text-main-black" : "bg-main-color text-white"}`}>
                  {item.initial}
                </div>
                <div>
                  <p
                    className={`font-bold text-sm ${item.featured ? "text-white" : "text-main-black"}`}>
                    {item.author}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className={`h-1.5 rounded-full -mx-8 -mb-8 mt-1 ${item.featured ? "bg-accent-gold" : "bg-main-color"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
