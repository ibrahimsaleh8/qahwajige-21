import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "قهوجى الرياض | قهوجين وصبابين الرياض",
    short_name: "قهوجى الرياض",
    description:
      "خدمات قهوجى الرياض للمناسبات والأفراح والفعاليات مع قهوجين وصبابين محترفين يقدمون القهوة العربية والضيافة الراقية في جميع أحياء الرياض.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#795630",
    lang: "ar",
    dir: "rtl",
    categories: ["lifestyle", "events", "food", "business"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
